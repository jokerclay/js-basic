const person = {
    name : "clay",
    age : 20,
}

// Template literal with muyi-line and string interpolation

const greeting = ` Hello! my name is  ${person.name} ! I am ${person.age} years old `
const greeting_two = ` Hello! 
    my name is  ${person.name} ! 
    I am ${person.age} years old `

console.log(greeting);
console.log(greeting_two);
