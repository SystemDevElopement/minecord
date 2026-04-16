
# Minecord Pro (NPM Ready)

## Features
- ✔ Bidirectional chat MC ↔ Discord
- ✔ Multi-server support
- ✔ RCON protocol
- ✔ Event system
- ✔ Command system

## Install
npm install minecord-pro

## Example
```ts
import { Bridge } from "minecord-pro";

const bridge = new Bridge("TOKEN", "CHANNEL_ID", [
  {
    id: "survival",
    logPath: "./logs/latest.log",
    rcon: {
      host: "127.0.0.1",
      port: 25575,
      password: "pass"
    }
  }
]);

bridge.start();
```
