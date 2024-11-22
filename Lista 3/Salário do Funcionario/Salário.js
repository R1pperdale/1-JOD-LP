document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('beneficioForm').addEventListener('submit', function(event) {
        event.preventDefault();
        calcularBeneficio();
    });
});

function calcularBeneficio() {
    let salario = parseFloat(document.getElementById("salario").value);
    let escolha = parseInt(document.getElementById("beneficio").value);
    let diasUteis = parseInt(document.getElementById("diasUteis").value) || 0;
    let faltas = parseInt(document.getElementById("faltas").value) || 0;
    let filhos = parseInt(document.getElementById("filhos").value) || 0;
    let beneficio = 0;

    switch (escolha) {
        case 1:
            beneficio = (diasUteis * 0.06) - faltas;
            break;
        case 2:
            beneficio = diasUteis * 25;
            break;
        case 3:
            beneficio = salario * 0.06;
            break;
        case 4:
            beneficio = salario * 0.40;
            break;
        case 5:
            beneficio = 1412.00;
            break;
        case 6:
            beneficio = salario * 0.08;
            break;
        case 7:
            if (salario < 1819.26) {
                beneficio = 62.04 * filhos;
            }
            break;
        default:
            alert("Escolha inválida!");
            return;
    }

    let total = salario + beneficio;
    document.getElementById("resultado").innerText = `O valor total do salário + benefício é: R$ ${total.toFixed(2)}`;
}

function mostrarCamposAdicionais() {
    let escolha = parseInt(document.getElementById("beneficio").value);
    document.getElementById("diasUteisCampo").style.display = 'none';
    document.getElementById("faltasCampo").style.display = 'none';
    document.getElementById("filhosCampo").style.display = 'none';

    if (escolha === 1 || escolha === 2) {
        document.getElementById("diasUteisCampo").style.display = 'block';
        if (escolha === 1) {
            document.getElementById("faltasCampo").style.display = 'block';
        }
    }
    if (escolha === 7) {
        document.getElementById("filhosCampo").style.display = 'block';
    }
}
