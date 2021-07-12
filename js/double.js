function evaluateDouble(number, target) {
    let numberElement =  document.getElementById(number);
    let targetElement =  document.getElementById(target);

    let numberValue = parseInt(numberElement.value);

    targetElement.innerHTML = numberValue * 2;
}