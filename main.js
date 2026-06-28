const btn = document.getElementById("btn")
const clr = document.getElementById("clr")
const txt = document.getElementById("txt")
const navItems = document.getElementsByClassName("nav-item")

btn.addEventListener("click", () => {
    txt.innerText = "Hello From Js"
})

clr.addEventListener("click", () => {
    navItems[0].style.color = "red"
})
