
export class LogParser {
  parse(line: string) {
    if (line.includes("joined the game"))
      return { type: "join", player: line.split(" ")[3] };

    if (line.includes("left the game"))
      return { type: "leave", player: line.split(" ")[3] };

    const m = line.match(/<(.*?)> (.*)/);
    if (m) return { type: "chat", player: m[1], message: m[2] };

    return null;
  }
}
