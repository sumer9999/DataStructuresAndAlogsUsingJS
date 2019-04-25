a = Object.assign({}, {});

person = {
    name: "Sumer",
    age: 38
}
foodNeeds = {
    eat() {
        //console.log(`${this.name} is eating food`);
        return `${this.name} is eating food`;
    },
    cooking() {
        console.log(`${this.eat()} is cooking food suited for person of age ${this.age}`);
    }
}
const foodNeedsFunc = (state) => ({
    eat: () => `${state.name} is eating food`,
    cooking: () => console.log(`${this.eat()} is cooking food suited for person of age ${state.age}`)

})

// pWithFood = { ...person, ...foodNeeds };

// console.log(pWithFood.eat());
// console.log(pWithFood.cooking());

pwithFoodViaFunc = foodNeedsFunc(person);
console.log(pwithFoodViaFunc.eat());
console.log(pwithFoodViaFunc.cooking());