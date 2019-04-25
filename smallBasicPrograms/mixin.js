let Human = BASE =>
  class extends BASE {
    cry() {
      console.log("Human is Crying");
    }
  };

class SuperCreature {
  fly() {
    console.log("SuperCreature is Flying");
  }
}

class Superman extends Human(SuperCreature) {
  showClothes() {
    console.log("Superman wears underwear over the pants");
  }
}

let john = new Superman();

console.log(john.cry());
console.log(john.showClothes());
console.log(john.fly());



const Human = BASE => class extends BASE {
  cry() {

  }

}


class SuperCreature {
  fly() {

  }

}

class Superman extends Human(SuperCreature) {
  showCloths() {
    console.log('Superman wears underwear over pants')
  }

}