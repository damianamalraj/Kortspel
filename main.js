let Cards = [{
        suit: "&heart;",
        number: 1
    },
    {
        suit: "&heart;",
        number: 2
    },
    {
        suit: "&heart;",
        number: 3
    },
    {
        suit: "&heart;",
        number: 4
    },
    {
        suit: "&heart;",
        number: 5
    },
    {
        suit: "&heart;",
        number: 6
    },
    {
        suit: "&heart;",
        number: 7
    },
    {
        suit: "&heart;",
        number: 8
    },
    {
        suit: "&heart;",
        number: 9
    },
    {
        suit: "&heart;",
        number: 10
    },
    {
        suit: "&heart;",
        number: 11
    },
    {
        suit: "&heart;",
        number: 12
    },
    {
        suit: "&heart;",
        number: 13
    },
    {
        suit: "&spades;",
        number: 1
    },
    {
        suit: "&spades;",
        number: 2
    },
    {
        suit: "&spades;",
        number: 3
    },
    {
        suit: "&spades;",
        number: 4
    },
    {
        suit: "&spades;",
        number: 5
    },
    {
        suit: "&spades;",
        number: 6
    },
    {
        suit: "&spades;",
        number: 7
    },
    {
        suit: "&spades;",
        number: 8
    },
    {
        suit: "&spades;",
        number: 9
    },
    {
        suit: "&spades;",
        number: 10
    },
    {
        suit: "&spades;",
        number: 11
    },
    {
        suit: "&spades;",
        number: 12
    },
    {
        suit: "&spades;",
        number: 13
    },
    {
        suit: "&diams;",
        number: 1
    },
    {
        suit: "&diams;",
        number: 2
    },
    {
        suit: "&diams;",
        number: 3
    },
    {
        suit: "&diams;",
        number: 4
    },
    {
        suit: "&diams;",
        number: 5
    },
    {
        suit: "&diams;",
        number: 6
    },
    {
        suit: "&diams;",
        number: 7
    },
    {
        suit: "&diams;",
        number: 8
    },
    {
        suit: "&diams;",
        number: 9
    },
    {
        suit: "&diams;",
        number: 10
    },
    {
        suit: "&diams;",
        number: 11
    },
    {
        suit: "&diams;",
        number: 12
    },
    {
        suit: "&diams;",
        number: 13
    },
    {
        suit: "&clubs;",
        number: 1
    },
    {
        suit: "&clubs;",
        number: 2
    },
    {
        suit: "&clubs;",
        number: 3
    },
    {
        suit: "&clubs;",
        number: 4
    },
    {
        suit: "&clubs;",
        number: 5
    },
    {
        suit: "&clubs;",
        number: 6
    },
    {
        suit: "&clubs;",
        number: 7
    },
    {
        suit: "&clubs;",
        number: 8
    },
    {
        suit: "&clubs;",
        number: 9
    },
    {
        suit: "&clubs;",
        number: 10
    },
    {
        suit: "&clubs;",
        number: 11
    },
    {
        suit: "&clubs;",
        number: 12
    },
    {
        suit: "&clubs;",
        number: 13
    },
]

const points = document.querySelector(".points");
const tries = document.querySelector(".tries");

const value = document.querySelectorAll(".value");
const suit = document.querySelectorAll(".suit");

const buttonLower = document.querySelector(".BLower");
const buttonEqual = document.querySelector(".BEqual");
const buttonHigher = document.querySelector(".BHigher");

buttonLower.addEventListener("click", Event => {
    let randomNum = Math.floor(Math.random() * Cards.length)
    for (i = 0; i < value.length; i++) {
        value[i].innerText = Cards[randomNum].number;
    }

    for (i = 0; i < suit.length; i++) {
        suit[i].innerHTML = Cards[randomNum].suit;
    }
})





buttonLower.addEventListener("click", Event => {
    suit.innerHTML = (Cards[Math.floor(Math.random() * Cards.length)]).suit
})
buttonEqual.addEventListener("click", Event => {
    value.innerText = (Cards[Math.floor(Math.random() * Cards.length)]).number
})
buttonHigher.addEventListener("click", Event => {
    value.innerText = (Cards[Math.floor(Math.random() * Cards.length)]).number
})