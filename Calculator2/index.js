const buttons = document.querySelectorAll(".number, .operator");
const resultDisplay = document.getElementById('resultDisplay');
const buttonResult = document.getElementById('buttonResult');
const buttonClear = document.getElementById('buttonClear');

buttons.forEach(button => {
    button.addEventListener("click", function () {
        resultDisplay.value += this.textContent;
    });
});

buttonClear.addEventListener("click", function () {
    resultDisplay.value = "";
});

buttonResult.addEventListener('click', function () {
    const inputResults = resultDisplay.value;
    const results = eval(inputResults);

    resultDisplay.value = results;
});