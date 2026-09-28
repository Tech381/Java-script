//asyny,js
//asynchrounous->refers to doing more than one
//      task at the same Time(multytasking)

 async function getjoke()
{
    let link = "https://official-joke-api.appspot.com/random_joke"
    let result = await fetch(link)
    console.log(await result.json())
}

getjoke();