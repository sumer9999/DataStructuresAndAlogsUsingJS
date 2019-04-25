class Event {
    constructor() {
        this.events = {}
    }

    on(eventName, fn) {
        this.events[eventName] = [...(this.events.eventName || []), fn];
    }

    off(eventName, fn) {
        this.events[eventName] = this.events[eventName].filter(f => f !== fn);
    }

    emit(eventName, data) {
        this.events[eventName].forEach(f => f(data));
    }
}