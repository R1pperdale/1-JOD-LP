function calcularAumentos() {
    const quantidadeFuncionarios = parseInt(prompt("Digite a quantidade de funcionários:"));

    const salariosAtuais = [];
    for (let i = 0; i < quantidadeFuncionarios; i++) {
        const salario = parseFloat(prompt(`Digite o salário atual do funcionário ${i + 1}:`));
        salariosAtuais.push(salario);
    }

    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = ''; // Limpa os resultados anteriores

    salariosAtuais.forEach((salario, index) => {
        let novoSalario;
        if (salario <= 2500) {
            novoSalario = salario * 1.10;
        } else {
            novoSalario = salario * 1.08;
        }
        resultadoElemento.innerHTML += `Funcionário ${index + 1}: Salário Atual: R$${salario.toFixed(2)}, Novo Salário: R$${novoSalario.toFixed(2)}<br>`;
    });
}