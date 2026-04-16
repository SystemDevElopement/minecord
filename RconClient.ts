
import net from "net";

export class RconClient {
  private socket!: net.Socket;
  private id = 0;

  constructor(private host: string, private port: number, private password: string) {}

  async connect() {
    this.socket = new net.Socket();
    await new Promise(res => this.socket.connect(this.port, this.host, res));
    this.sendPacket(3, this.password);
  }

  send(cmd: string) {
    this.sendPacket(2, cmd);
  }

  private sendPacket(type: number, body: string) {
    const id = this.id++;
    const size = Buffer.byteLength(body) + 10;
    const buf = Buffer.alloc(size + 4);

    buf.writeInt32LE(size, 0);
    buf.writeInt32LE(id, 4);
    buf.writeInt32LE(type, 8);
    buf.write(body, 12);
    buf.writeInt16LE(0, size + 2);

    this.socket.write(buf);
  }
}
