let titulo =document.querySelector('h1');
titulo.innerHTML="Hora del desafío" 

//let valor1= parseInt(prompt("Ingrese el primer valor"));
//let valor2= parseInt(prompt("Ingrese el segundo valor"));
//let resultado = valor1 + valor2;

function sumFunction() {
    let valor1 = parseInt(prompt('Digite el primer numero :'));
    let valor2 = parseInt(prompt('Digite el segundo numero :'));
    let resultado = valor1 + valor2;
    alert(`El resultado es:${resultado}`)
}
