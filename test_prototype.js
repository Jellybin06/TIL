function Clazz(msg){
    this.name = 'I am class';
    this.message = msg;

    message2 = "find me!";

}

Clazz.prototype.getMessage = function(){
    return this.message;
}

Clazz.prototype.getMessage2 = function(){
    return this.message2;
}




var myClazz = new Clazz('good to see u!');
console.log(myClazz.message());
console.log(myClazz.message2());