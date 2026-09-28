function add()
{
    return(5+6)
}

let answer = add()
console.log(answer)
//example 2
function multiply()
{
    return 5 * 3;
}

let result = multiply(); //here we use the fn
console.log(result);

//mision 1
function calculategold(bagOne,bagTwo)
{
return (bagOne+bagTwo)
}
let totalgold =calculategold(10,11)
console.log("total treasure collected", totalgold);

//mission 2
function Applyturbo(basespeed,tubrospeed)
{
return (basespeed+tubrospeed)
}
let finalspeed =Applyturbo(56,45)
console.log("Robot speed increased to:",[finalspeed],"km/h!")

//mission 3
function mixpotion(jaroneenergy,jartwoenergy)
{
return (jaroneenergy+jartwoenergy)
}
let totalenergy =mixpotion(56,81)
console.log("The potion is ready with",[totalenergy],"units of magic!")

//mission 4
function vendingmachine(money)
{
    if (money > 10){
        return "chocolatebar"
    }

    else if (money > 5){
        return "bag of chips"
    }

    else if (money < 5){
        return "a peice of gum"
    }
}
let mysnack =vendingmachine(13)
console.log("I inserted my coins and received a :",[mysnack])

//mision 5
function craftitem(rawmaterial)
{
 if (rawmaterial == "wood"){
    return "crafting Table"
 }

 else if (rawmaterial == "Iron"){
    return "Iron sword"
 }

 else if (rawmaterial == "diamond"){
    return "diamond pickaxe"
 }

 else{
    return "stick"
 }
}
let myitem =craftitem("Iron")
console.log("Success! You placed the material in the bench and got a:",[myitem])
//mision 7
function accesslevel(securityLevel)
{
    if (securityLevel > 90){
    return "Admin access granted"
    }

    else if (securityLevel >= 50){
        return "User access granted"
    }

    else if (securityLevel < 50){
        return "Access Denied: Firewall Locked"
    }
}
let status = accesslevel(6)
    console.log("The terminal flashes:",[status])
