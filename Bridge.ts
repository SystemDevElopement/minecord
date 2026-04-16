
import { ServerConfig } from "../types";
import { Bot } from "../discord/Bot";
import { RconClient } from "../minecraft/RconClient";
import { LogParser } from "../minecraft/LogParser";
import { EventBus } from "../core/EventBus";
import fs from "fs";

export class Bridge {
  private bot: Bot;
  private servers = new Map<string, RconClient>();
  private parser = new LogParser();
  private bus = new EventBus();

  constructor(
    private token: string,
    private channelId: string,
    private configs: ServerConfig[]
  ) {
    this.bot = new Bot(token, channelId);
  }

  async start() {
    for (const cfg of this.configs) {
      const rcon = new RconClient(cfg.rcon.host, cfg.rcon.port, cfg.rcon.password);
      await rcon.connect();
      this.servers.set(cfg.id, rcon);

      fs.watchFile(cfg.logPath, () => {
        const lines = fs.readFileSync(cfg.logPath, "utf-8").split("\n");
        const last = lines.at(-2);
        if (!last) return;

        const ev = this.parser.parse(last);
        if (!ev) return;

        this.bus.emit(ev.type, ev);

        if (ev.type === "chat")
          this.bot.send(`[${cfg.id}] <${ev.player}> ${ev.message}`);
      });
    }

    await this.bot.start(msg => {
      if (msg.startsWith("!mc ")) {
        const cmd = msg.split(" ").slice(1);
        if (cmd[0] === "list") {
          this.bot.send([...this.servers.keys()].join(", "));
        }
      } else {
        this.servers.forEach(r => r.send(`say [DC] ${msg}`));
      }
    });
  }

  on(event: string, fn: Function) {
    this.bus.on(event, fn as any);
  }
}
