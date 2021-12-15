// document.getElementById("count").innerText = 5

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + ' - '
    // using textContent instead of innerText
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}
save()

// let welcomeEl = document.getElementById("welcome-el")
// let myName = " Vikas Jyani"
// let greeting = "Welcome back,"

// welcomeEl.innerText = greeting + myName
// welcomeEl.innerText = welcomeEl.innerText + '👋'
// welcomeEl.innerText += '👋'


