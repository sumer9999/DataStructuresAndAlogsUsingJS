class Stopwatch {
  constructor() {
    let starttime = 0,
      stoptime = 0,
      duration = 0,
      started = false;
  }

  start() {
    if (this.started) console.log("ERROR: Already started");

    this.starttime = new Date();
    this.started = true;
  }
  stop() {
    if (!this.started) console.log("ERROR: Already Stopped");
    this.duration = (new Date() - this.starttime) / 1000;
    this.started = false;
  }

  get dura() {
    if (!this.started) return "ERROR: NOT started";
    return (new Date() - this.starttime) / 1000;
  }

  reset() {
    this.started = false;
  }
}

s = new Stopwatch();

s.start();
s.stop();
console.log(s.duration);
