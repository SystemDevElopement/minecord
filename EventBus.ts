
type Listener = (...args: any[]) => void;

export class EventBus {
  private events: Record<string, Listener[]> = {};

  on(event: string, fn: Listener) {
    (this.events[event] ||= []).push(fn);
  }

  emit(event: string, ...args: any[]) {
    (this.events[event] || []).forEach(fn => fn(...args));
  }
}
