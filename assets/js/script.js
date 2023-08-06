alert("Bienvenido al juego de Barbie, que lo disfrutes!");
let firstWord = "Hi Barbie, Hi Ken :)";
console.log(firstWord);

const btn = document.getElementById("btn");

btn.addEventListener("click", button);

function button() {
    const amount = Number(document.getElementById("amount").value);
    const color = String(document.getElementById("color").value);
    const total = Number(document.getElementById("total").value);

    answerContainer.innerHTML = "<li> Total: " + total + "</li><li> Amount: " + amount + "</li><li> Color: " + color + "</li>";
}

//function calc() {
//    const amount = Number(document.getElementById("amount").value);
//    const total = Number(document.getElementById("total").value);
//    const price = document.getElementById("price").innerText;
//    console.log("Total: ", price * 4);}

//let circle = document.querySelector("div");
//input = document.querySelector("input");
//input.addEventListener("input", () => {
//    circle.style.background = input.value;
//});
