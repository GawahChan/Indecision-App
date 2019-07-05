//arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55,1, 10001));




//'this' keyword - no longer bound

//ES5 function has to be used for printPlacesLived property
//() => this only works by looking at the parent scope, so only function() will work for printPlacesLived property

const user = {
    name: 'Gawah',
    cities: ['London', 'York', 'Dublin'],
    printPlacesLived: function () {
        return this.cities.map((city) => this.name + ' has lived in ' + city);        
        
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // });
    }
};

console.log(user.printPlacesLived());


// Challenge area

const multiplier = {
    numbers: [1, 2, 5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
}

console.log(multiplier.multiply());