
export interface ServerConfig {
  id: string;
  logPath: string;
  rcon: {
    host: string;
    port: number;
    password: string;
  };
}
