// FUNCION DE FILTRO DE HERRAMIENTAS
function filterTools() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const tools = document.querySelectorAll('.tool-card');
    tools.forEach(tool => {
        const name = tool.textContent.toLowerCase();
        tool.style.display = name.includes(input) ? 'block' : 'none';
    });
}

// MODAL DE HERRAMIENTAS
const modal = document.getElementById('toolModal');
const content = document.getElementById('toolContent');

function openTool(tool) {
    modal.style.display = 'block';
    content.innerHTML = ''; // limpiar contenido
    switch(tool) {
        case 'contador':
            content.innerHTML = `
                <h2>Contador de Palabras</h2>
                <textarea id="wordInput" rows="5" placeholder="Escribe tu texto aquí..."></textarea>
                <button onclick="countWords()">Contar palabras</button>
                <p id="wordResult">Total de palabras: 0</p>
            `;
            break;
        case 'divisas':
            content.innerHTML = `
                <h2>Conversor de Divisas</h2>
                <input id="amount" type="number" placeholder="Monto">
                <select id="fromCurrency">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="CLP">CLP</option>
                </select>
                <select id="toCurrency">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="CLP">CLP</option>
                </select>
                <button onclick="convertCurrency()">Convertir</button>
                <p id="currencyResult"></p>
            `;
            break;
        case 'propina':
            content.innerHTML = `
                <h2>Calculadora de Propina</h2>
                <input id="bill" type="number" placeholder="Monto de la cuenta">
                <input id="tip" type="number" placeholder="% de propina">
                <button onclick="calculateTip()">Calcular</button>
                <p id="tipResult"></p>
            `;
            break;
        case 'password':
            content.innerHTML = `
                <h2>Generador de Contraseñas</h2>
                <input id="length" type="number" placeholder="Longitud" min="4" max="20">
                <button onclick="generatePassword()">Generar</button>
                <p id="passwordResult"></p>
            `;
            break;
        case 'imc':
            content.innerHTML = `
                <h2>Calculadora de IMC</h2>
                <input id="weight" type="number" placeholder="Peso (kg)">
                <input id="height" type="number" placeholder="Altura (cm)">
                <button onclick="calculateIMC()">Calcular IMC</button>
                <p id="imcResult"></p>
            `;
            break;
    }
}

function closeTool() {
    modal.style.display = 'none';
}

// CERRAR MODAL SI SE HACE CLICK FUERA
window.onclick = function(event) {
    if(event.target == modal) closeTool();
}

/* ------------------------------
    FUNCIONES DE HERRAMIENTAS
------------------------------ */
// Contador de palabras
function countWords() {
    const text = document.getElementById('wordInput').value.trim();
    const count = text === '' ? 0 : text.split(/\s+/).length;
    document.getElementById('wordResult').innerText = 'Total de palabras: ' + count;
}

// Conversor de divisas (ejemplo estático)
function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const from = document.getElementById('fromCurrency').value;
    const to = document.getElementById('toCurrency').value;

    // tasas de ejemplo
    const rates = {
        USD: 1,
        EUR: 0.92,
        CLP: 950
    };

    const result = (amount / rates[from] * rates[to]).toFixed(2);
    document.getElementById('currencyResult').innerText = `${amount} ${from} = ${result} ${to}`;
}

// Calculadora de propina
function calculateTip() {
    const bill = parseFloat(document.getElementById('bill').value);
    const tipPercent = parseFloat(document.getElementById('tip').value);
    const tipAmount = (bill * tipPercent / 100).toFixed(2);
    document.getElementById('tipResult').innerText = `Propina: $${tipAmount}`;
}

// Generador de contraseñas
function generatePassword() {
    const length = parseInt(document.getElementById('length').value) || 8;
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = '';
    for(let i=0; i<length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('passwordResult').innerText = password;
}

// Calculadora de IMC
function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const imc = (weight / (height * height)).toFixed(2);
    document.getElementById('imcResult').innerText = `Tu IMC es: ${imc}`;
}
