function printNumbers() {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "";
    for (let i = 1; i <= 250; i++) {
        if (i % 2 !== 0) {
            resultDiv.innerHTML += i + "<br>";
        }
    }
}