let CHearts = [{
        suit: "&heart",
        number: 1
    },
    {
        suit: "&heart",
        number: 2
    },
    {
        suit: "&heart",
        number: 3
    },
    {
        suit: "&heart",
        number: 4
    },
    {
        suit: "&heart",
        number: 5
    },
    {
        suit: "&heart",
        number: 6
    },
    {
        suit: "&heart",
        number: 7
    },
    {
        suit: "&heart",
        number: 8
    },
    {
        suit: "&heart",
        number: 9
    },
    {
        suit: "&heart",
        number: 10
    },
    {
        suit: "&heart",
        number: 11
    },
    {
        suit: "&heart",
        number: 12
    },
    {
        suit: "&heart",
        number: 13
    }
]

const points = document.querySelector(".points");
const tries = document.querySelector(".tries");

const value = document.querySelector(".value");
const suit = document.querySelectorAll(".suit");

const buttonLower = document.querySelector(".BLower");
const buttonEqual = document.querySelector(".BEqual");
const buttonHigher = document.querySelector(".BHigher");

console.log(CHearts[Math.floor(Math.random()*CHearts.length)])

// buttonLower.addEventListener("click", Event => {console.log(CHearts[Math.floor(Math.random()*CHearts.length)])})
// buttonEqual.addEventListener("click", Event => {console.log(CHearts[Math.floor(Math.random()*CHearts.length)])})
// buttonHigher.addEventListener("click", Event => {console.log(CHearts[Math.floor(Math.random()*CHearts.length)])})

buttonLower.addEventListener("click", Event => {value[i].innerText = CHearts[Math.floor(Math.random()*CHearts.length)].number})