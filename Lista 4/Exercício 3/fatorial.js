
let fatorial = n => {
    let acumulador = n;
    let controle = n;
    while (controle > 2){
controle --;
acumulador *=controle;
    }
    return acumulador;
}

function calcularFatorial() {
    const numero = document.getElementById('numero').value;
    const resultadoElemento = document.getElementById('resultado');
    const num = parseInt(numero);
    const resultado = fatorial(num);
    resultadoElemento.innerHTML = `Fatorial de ${num} é ${resultado}`;
}