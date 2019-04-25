let addressProto = {
    street: 'st',
    city: 'ci',
    zipCode: 'zp'
}

let add2 = { ...addressProto };

// console.log(add2);

function getAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
    //return Object.create(addressProto);
}

function GetAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let a = new GetAddress("KrishaStreet", 'Noida', 201301);
console.log(a);