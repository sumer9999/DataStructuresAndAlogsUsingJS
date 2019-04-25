function flattenObjIn(obj, parentKey = '', otherObj = {}) {
    Object.entries(obj).forEach(([key, value]) => {
        let otherKey = parentKey === '' ? key : parentKey + '_' + key;
        if (typeof value === 'string')
            otherObj[otherKey] = value;
        else if (value instanceof Array || typeof value !== 'object' || value === null)
            otherObj[otherKey] = value ? [...value] : null;
        else
            flattenObjIn(value, otherKey, otherObj);
    });
    return otherObj;
}

var mydetails = {
    "name": "harish",
    "phoneNos": [11111111, 22222222],
    "study": {
        "Bachelors": { "location": "INDIA", "Course": "BE", "Specialisation": "CSE" },
        "Masters": { "location": "US", "Course": "MS", "Specialisation": "CS" },
    },
    "location": null
}
let gotFlat = flattenObjIn(mydetails);
mydetails.phoneNos.push(99);
console.log(gotFlat);
