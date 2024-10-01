document.getElementById('meuForm').addEventListener('submit', function(event) {
    event.preventDefault();

let campoA = parseFloat(document.getElementById('campoA').value);
let campoB = parseFloat(document.getElementById('campoB').value);

let alertMessage = document.getElementById('alertMessage');

if (campoB > campoA) {
    alertMessage.textContent = "Formulário válido! O número B é maior que o número A.";
    alertMessage.style.color = 'green';
} else {
    alertMessage.textContent = "Formulário inválido! O numero B deve ser maior que o número A.";
    alertMessage.style.color = 'red';

    }
});