var Dog =function () {
    Animal.apply(this, arguments);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.say= function(){
    console.log("guau");
}

exports.Dog = Dog;
