let secretNumber = getRandomInt(1,4);
console.log(secretNumber);
let attempts = 3;
function getRandomInt(min,max){
   
    return Math.floor(Math.random()*(max-min+1)) + min;
}

document.querySelector(".check").onclick = function(){
    let userNumber = document.querySelector('.number').value;
    if (userNumber == secretNumber) {
        document.querySelector(".hint").innerHTML = "Вы угадали!";
        document.querySelector(".hint").style.color = '#5d4b95'
        document.querySelector(".hint").style.fontSize = "25px"
        document.querySelector(".number").disabled = true
        document.querySelector(".check").disabled = true

    }
    if (userNumber > secretNumber) {
        document.querySelector(".hint").innerHTML = "Секретное число меньше";
        document.querySelector('.number').value = ""
    }
    if (userNumber < secretNumber) {
        document.querySelector(".hint").innerHTML = "Секретное число больше";
        document.querySelector('.number').value = ""
    }
    attempts = attempts-1;
    document.querySelector(".attempts").innerHTML = attempts
    console.log(attempts);
    if (attempts == 0) {
        document.querySelector(".number").disabled = true
        document.querySelector(".check").disabled = true
        document.querySelector('.number').value = ""
    }

}
document.querySelector(".start").onclick = function(){
    secretNumber = getRandomInt(1,3)
    document.querySelector(".attempts").innerHTML = 3
    attempts = 3
    document.querySelector(".hint").innerHTML = "Я буду подсказывать"
    document.querySelector(".number").disabled = false
    document.querySelector(".check").disabled = false
    document.querySelector('.number').value = ""
}
// тернарный 
