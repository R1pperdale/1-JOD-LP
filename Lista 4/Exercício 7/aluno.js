function receberMenções() {
    const quantidadeAlunos = 10;
    let countMB = 0;
    let countI = 0;

    for (let i = 0; i < quantidadeAlunos; i++) {
        const nome = prompt(`Digite o nome do aluno ${i + 1}:`);
        const mencao = prompt(`Digite a menção final de ${nome} (MB, B, R, I):`).toUpperCase();
        
        if (mencao === "MB") {
            countMB++;
        } else if (mencao === "I") {
            countI++;
        }
    }

    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `Alunos com menção MB: ${countMB}<br>`;
    resultadoElemento.innerHTML += `Alunos com menção I: ${countI}`;
}