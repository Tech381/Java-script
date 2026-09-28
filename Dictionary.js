//dictionary.js
//a dictionary is used to store pairs of data
//eg/ name:james, age50, weapon:bow
//dictionary -> json
//(json -> javascript object notation)
let hero = {
    "name": "Flash",
    "Powers" : "Super speed",
    "city" : "new york",
}

console.log(hero)

// keys : values
console.log( Object.keys(hero));

console.log(Object.values(hero));

console.log( hero["city"]);
console.log(hero["Powers"])

//deliting an item
delete hero.city
console.log(hero)

//changing an item
hero.city="boston"
console.log(hero)


let character = {
    "name" : "Kai cenat",
    "age" : 24,
    "Wealth" : "35 million"
}
console.log("- - - - - - - - - - - - - ")
//going through all items in a json/dict
for(let key in character)
{
    console.log(key)
}

Object.entries(character).forEach((key,value )=>{console.log(key,value)})