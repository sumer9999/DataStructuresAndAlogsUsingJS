function cloneObj(obj, newObj = {}) {
    if (obj === null || typeof obj !== 'object') return obj;

    if (obj instanceof Date) return new Date(obj.getTime());
    if (Array.isArray(obj)) return [...obj];
    if (obj instanceof Object) {
        for (let [key, value] of Object.entries(obj)) {
            newObj[key] = (typeof value === 'object') ? cloneObj(value) : value;
        }
    }
}


let obj = {
    name: 'Sumer',
    age: 37,
    arr: [1, 2, 3, 4, 'last'],
    innerObj: {
        in_name: 'kishor',
        age: 38,
        arr: ['first', 99, 88, 77, 66]
    }
}

let obj2 = { ...obj };
obj.name = 'SUMER CHANGED';
obj.innerObj.in_name = 'KISHOR CHANGED';
console.log(obj2);