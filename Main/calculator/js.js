function appendValue(clickedDiv) {
    const value = clickedDiv.textContent;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent += value;
}


function clearResult() {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "";
}


function deleteLastInput() {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = resultDiv.textContent.slice(0, -1);
}



function calculateResult() {
    const resultDiv = document.getElementById("result");
    try {
        const result = eval(resultDiv.textContent);
        resultDiv.textContent = result;
    } catch (error) {
        resultDiv.textContent = "Syntax error";
    }
}








