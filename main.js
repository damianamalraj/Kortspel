let Cards = [];
for (let i = 1; i < 13 + 1; i++) {
    Cards.push({
        suits: "&hearts;",
        number: i
    });
    Cards.push({
        suits: "&diams;",
        number: i
    });
    Cards.push({
        suits: "&spades;",
        number: i
    });
    Cards.push({
        suits: "&clubs;",
        number: i
    });
}

const points = document.querySelector(".points");
const tries = document.querySelector(".tries");

const value = document.querySelectorAll(".value");
const suits = document.querySelectorAll(".suit");

const buttonLower = document.querySelector(".BLower");
const buttonEqual = document.querySelector(".BEqual");
const buttonHigher = document.querySelector(".BHigher");

buttonLower.addEventListener("click", Event => {
    let randomNum = Math.floor(Math.random() * Cards.length)
    for (i = 0; i < value.length; i++) {
        value[i].innerText = Cards[randomNum].number;
    }

    for (i = 0; i < suits.length; i++) {
        suits[i].innerHTML = Cards[randomNum].suits;
    }
})

buttonEqual.addEventListener("click", Event => {
    let randomNum = Math.floor(Math.random() * Cards.length)
    for (i = 0; i < value.length; i++) {
        value[i].innerText = Cards[randomNum].number;
    }

    for (i = 0; i < suits.length; i++) {
        suits[i].innerHTML = Cards[randomNum].suits;
    }
})

buttonHigher.addEventListener("click", Event => {
    let randomNum = Math.floor(Math.random() * Cards.length)
    for (i = 0; i < value.length; i++) {
        value[i].innerText = Cards[randomNum].number;
    }

    for (i = 0; i < suits.length; i++) {
        suits[i].innerHTML = Cards[randomNum].suits;
    }
})