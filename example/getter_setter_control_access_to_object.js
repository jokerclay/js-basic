class Book{
    // 构造函数
    constructor(author){
        // the private variable is this._author that get set when you construct
        // the object

        this._author = author;
    }
    // function getter to get the book's author
    // getter function are mean to simply return get the value of an object's 
    // private variable to user without the user directly accessing the private
    // variable .

    // when we do get writer's going to return this._author, so, you never need
    // to directly interact with this variable ., but it's going to get the 
    // writer which is the author here
    get writer(){
        return this._author;
    }
    // function setter to set the book's author
    // 
    // and the setter is the same, you never interact with the _author, but you
    // can set that with the writer setter.

    // this change could invoke calculations or even overriding the previous
    // completely
    // so you can have any code lines in the setter to ultimately maybe do
    // different calculations before you  set it or calculations before you 
    // get the property 
    set writer(uodatedAuthor){
        this._author = updatedAuthor;
    }
}

function makeClass(){

    return Thermostat;
}
