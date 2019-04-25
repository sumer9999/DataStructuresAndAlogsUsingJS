let obj = [{
    "map": {
        "name": "2",
        "y": 2
    }
}, {
    "map": {
        "name": "4",
        "y": 17494
    }
}, {
    "map": {
        "name": "3",
        "y": 2
    }
}, {
    "map": {
        "name": "1",
        "y": 1
    }
}]

let obj2 = obj.map(obj => obj.map);
console.log(obj2);
