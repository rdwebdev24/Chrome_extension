fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json())
.then(jokeData =>{
     console.log(jokeData)
     const joketext = jokeData.attachments[0].fallback
     const jokeElement = document.getElementById('jokeElement')
     jokeElement.innerHTML = joketext
})