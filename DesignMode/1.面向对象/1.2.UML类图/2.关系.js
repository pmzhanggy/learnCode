class House {
    constructor(name) {
        this.name = name;
    }
}

class People {
    constructor(name, house) {
        this.name = name;
        this.house = house;
    }

    saySomething() {
        console.log(``)
    }
}

class A extends People{
    constructor(name, house) {
        super(name, house);
    }

    saySomething() {
        alert('I an A');
    }
}

class B extends People {
    constructor(name, house) {
        super(name, house);
    }

    saySomething() {
        alert('I an B');
    }
}

let aHouse = new House('beijing');
let a = new A('a', aHouse)
a.saySomething();
