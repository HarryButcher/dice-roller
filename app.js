const refresh = document.querySelectorAll(".dot");
const centerDot = document.getElementById("centerDot");
const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
const dot4 = document.getElementById("dot4");
const dot5 = document.getElementById("dot5");
const dot6 = document.getElementById("dot6");

function rollDice () {
    let roll = Math.floor(Math.random() * 6) + 1;

    for (let i = 0; i < refresh.length; i++){
        const refreshing = refresh[i];
        refreshing.classList.add("hidden");
    }
    
    if (roll === 1){
        centerDot.classList.remove("hidden");
    } else if (roll === 2){
        dot1.classList.remove("hidden");
        dot6.classList.remove("hidden");
    } else if (roll === 3){
        centerDot.classList.remove("hidden");
        dot1.classList.remove("hidden");
        dot6.classList.remove("hidden");
    } else if (roll === 4){
        dot1.classList.remove("hidden");
        dot3.classList.remove("hidden");
        dot4.classList.remove("hidden");
        dot6.classList.remove("hidden");
    } else if (roll === 5){
        centerDot.classList.remove("hidden");
        dot1.classList.remove("hidden");
        dot3.classList.remove("hidden");
        dot4.classList.remove("hidden");
        dot6.classList.remove("hidden");
    } else {
        dot1.classList.remove("hidden");
        dot2.classList.remove("hidden");
        dot3.classList.remove("hidden");
        dot4.classList.remove("hidden");
        dot5.classList.remove("hidden");
        dot6.classList.remove("hidden");
    }

    document.getElementById("yourRoll").innerHTML = ("Your roll is: " + roll);
}

document.getElementById("roll").addEventListener("click", rollDice);