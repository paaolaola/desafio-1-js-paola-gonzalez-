alert("Bienvenido al juego de Barbie, que lo disfrutes!");
let firstWord = "Hi Barbie, Hi Ken :)";
console.log(firstWord);

function btn() {
    //circulo color
    const color = document.getElementById("color").value;
    const colorCircle = document.querySelector(".colorCircle");
    colorCircle.style.backgroundColor = color;

    //input cantidad
    const cantidad = parseInt(document.getElementById("cantidad").innerHTML.replace("cantidad: ", ""));
    const amount = parseInt(document.getElementById("amount").value);
    document.getElementById("cantidad").innerHTML = "Amount: " + amount;

    // resultado multiplicacion
    const priceValue = parseInt(document.getElementById("price").innerHTML.replace("Price: ", ""));
    const amountValue = parseInt(document.getElementById("amount").value);

    const resultado = priceValue * amountValue;
    document.getElementById("numeroTotal").innerHTML = `Total: $${resultado}`;
}
