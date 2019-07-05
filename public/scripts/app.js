'use strict';

//arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 10001));

//'this' keyword - no longer bound

//ES5 function has to be used for printPlacesLived property
//() => this only works by looking at the parent scope, so only function() will work for printPlacesLived property

var user = {
    name: 'Gawah',
    cities: ['London', 'York', 'Dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // });
    }
};

console.log(user.printPlacesLived());

// Challenge area

var multiplier = {
    numbers: [1, 2, 5],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return _this2.multiplyBy * number;
        });
    }
};

console.log(multiplier.multiply());
