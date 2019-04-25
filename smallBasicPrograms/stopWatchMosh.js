function Stopwatch() {

    let isStarted = false, startTime, stopTime, duration = 0;

    this.start = function () {
        if (isStarted) throw new Error("SW already in started mode");
        isStarted = true;
        startTime = new Date();
    }

    this.stop = function () {
        if (!isStarted) throw new Error("SW already in STOPPED mode");

        duration += stopTime.getTime() - startTime.getTime()

        isStarted = false;
        startTime = null;
        stopTime = null;
    }

    this.reset = function () {
        duration = 0;
        startTime = null;
        stopTime = null;
        isStarted = false;
    }

    Object.defineProperty(this, 'duration', {
        get: function () {
            let total;
            if (!isStarted && !startTime) return parseInt(duration / 1000);

            if (isStarted) stopTime = new Date();
            total = duration + stopTime.getTime() - startTime.getTime();
            return parseInt(total / 1000);
        }
    });
}

let sw = new Stopwatch();