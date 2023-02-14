// //////////////////////////////////////Рекурсия
const bigSquare = document.getElementById("big-square");
const smallSquare = document.getElementById("small-square");


let x = 0;
let y = 0;


function moveSquare() {

    if (x >= bigSquare.clientWidth - smallSquare.clientWidth && y === 0) {
        return;
    }

    if (x < bigSquare.clientWidth - smallSquare.clientWidth && y === 0) {
        x += 10;
        smallSquare.style.left = x + "px";
    }

    if (x >= bigSquare.clientWidth - smallSquare.clientWidth && y < bigSquare.clientHeight - smallSquare.clientHeight) {
        y += 10;
        smallSquare.style.top = y + "px";
    }

    if (x > 0 && y >= bigSquare.clientHeight - smallSquare.clientHeight) {
        x -= 10;
        smallSquare.style.left = x + "px";
    }

    if (x === 0 && y > 0) {
        y -= 10;
        smallSquare.style.top = y + "px";
    }

    setTimeout(moveSquare, 50);
}


moveSquare();
////////////////////////////////Таймер
{
    let counter = 0;
    let intervalId;

    function incrementCounter() {
        counter++;
        document.getElementById("counter").innerHTML = counter;
    }

    document.getElementById("startButton").addEventListener("click", function () {
        intervalId = setInterval(incrementCounter, 1000);
    });

    document.getElementById("stopButton").addEventListener("click", function () {
        clearInterval(intervalId);
    })
}