function tabuada() {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        resultDiv.innerHTML += `800 x ${i} = ${800 * i}<br>`;
    }
}