function podeSerTriangulo(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}

function tipoTriangulo(a, b, c) {
    if (a === b && b === c) {
        return "Equilátero";
    } else if (a === b || b === c || a === c) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

function verificarTriangulos() {
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = ''; // Limpa os resultados anteriores

    for (let i = 1; i <= 5; i++) {
        const ladoA = parseFloat(prompt(`Digite o lado A do triângulo ${i}:`));
        const ladoB = parseFloat(prompt(`Digite o lado B do triângulo ${i}:`));
        const ladoC = parseFloat(prompt(`Digite o lado C do triângulo ${i}:`));

        if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
            resultadoElemento.innerHTML += `Triângulo ${i}: Por favor, insira valores válidos para os lados.<br>`;
            continue;
        }

        if (podeSerTriangulo(ladoA, ladoB, ladoC)) {
            const tipo = tipoTriangulo(ladoA, ladoB, ladoC);
            resultadoElemento.innerHTML += `Triângulo ${i}: ${tipo} <br>`;
        } else {
            resultadoElemento.innerHTML += `Triângulo ${i}: Não pode ser um triângulo <br>`;
        }
    }
}