function debounced(delay, fn) {
    let timerId;
    return function (...args) {
        if (timerId) clearTimeout(timerId);

        timerId = setTimeout(() => {
            fn(args);
            timerId = null;
        }, delay);
    }
}
//Calling a Debounced Function
const myEventHandler = function () { console.log('Clicked,Or evenr happened') };
const dHandler = debounced(200, myEventHandler);
ele.addEventListener('click', dHandler);


function throttled(delay, fn) {
    let timelast;
    return function (...args) {
        let timenow = new Date().getTime();
        if (timenow - timelast < delay) return;

        fn(...args);
        timelast = timenow
    }
}

const myEventHandler = function () { console.log('Clicked,Or evenr happened') };
const tHandler = throttled(200, myEventHandler);
ele.addEventListener('mousemove', tHandler);




///// CHECKING IF I CAN CODE

function sumDebounce(delay, fn) {
    let timeOutID = null;
    return function (...args) {
        if (timeOutID) clearTimeout(timeOutID);

        timeOutID = setTimeout(() => {
            fn(...args);
            timeOutID = null;
        }, delay);


    }
}

const onUserType = () => { console.log('Display all ') };
dHandler = sumDebounce(200, onUserType);
ele.addEventListener('keyup', dHandler);

function sumThrottle(delay, fn) {
    let lastRunTime;
    return function (...args) {
        let timeNow = new Date().getTime();
        if ((timeNow - lastRunTime) < delay) return;

        fn(...args);
        lastRunTime = timeNow;
    }
}