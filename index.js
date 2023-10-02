// // document.getElementById("count-el").innerText = 5



let welcomeEl = document.getElementById("welcome-el")
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

console.log(countEl)
console.log(saveEl)

let greeting = "Welcome Back "
let myname = "Maarij Ahmed Tahir!"
welcomeEl.innerText = greeting + myname
console.log(welcomeEl)

function increment() {
    console.log("Increase")
    count = count + 1      //or using  count += 1 will work in same way
    countEl.innerText = count
    console.log(count)
}

function decrement() {
    console.log("Increase")
    count = count - 1
    countEl.innerText = count
    console.log(count)
}

function save() {
    console.log("saved!")
    saveEl.innerText += " " + count + " - "
    countEl.textContent = 0
    count = 0
    console.log(count)
}
