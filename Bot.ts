
import { Client, GatewayIntentBits } from "discord.js";

export class Bot {
  client: Client;

  constructor(private token: string, private channelId: string) {
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
      ]
    });
  }

  async start(onMsg: (msg: string) => void) {
    this.client.on("messageCreate", m => {
      if (!m.author.bot && m.channel.id === this.channelId)
        onMsg(m.content);
    });

    await this.client.login(this.token);
  }

  send(msg: string) {
    const ch = this.client.channels.cache.get(this.channelId);
    if (ch && "send" in ch) (ch as any).send(msg);
  }
}
