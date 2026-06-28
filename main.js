const btn = document.getElementById("btn")
const counter = document.getElementById("counter")
const clr = document.getElementById("clr")
const random = document.getElementById("random")
const txt = document.getElementById("txt")
const counterTxt = document.getElementById("counterTxt")
const navItems = document.getElementsByClassName("nav-item")
const colors = ["red", "orange", "green"]
let start = 0

btn.addEventListener("click", () => {
    txt.innerText = "Hello From Feature Background"
})

clr.addEventListener("click", () => {
    navItems[0].style.color = "red"
})

random.addEventListener("click", () => {
    const rand = Math.floor(Math.random() * 3)
    document.body.style.backgroundColor = colors[rand]
})

counter.addEventListener("click", function() {
    start++
    counterTxt.innerText = start
})
