var Animal= function () {
    if(this.constructor === Animal){
        throw new Error("AbstractClass");

    }
}


Animal.prototype.say=function() {
    throw new Error("AbstractMethod");

}

Animal.prototype.eat=function() {
    console.log("animal eating");

}

exports.Animal = Animal;