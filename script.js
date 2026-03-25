const form = document.getElementById('imcForm');
const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const resultado = document.getElementById('resultado');
const imcValor = document.querySelector('.imc-valor');
const imcClassificacao = document.querySelector('.imc-classificacao');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    calcularIMC();
});

function calcularIMC() {
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (!peso || !altura || peso <= 0 || altura <= 0) {
        alert('Por favor, insira valores válidos!');
        return;
    }

    const imc = peso / (altura * altura);
    const classificacao = classificarIMC(imc);
    exibirResultado(imc, classificacao);
    destacarTabelaClassificacao(classificacao.classe);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return {
            texto: 'Abaixo do peso',
            classe: 'abaixo-peso'
        };
    } else if (imc >= 18.5 && imc <= 24.9) {
        return {
            texto: 'Peso normal',
            classe: 'peso-normal'
        };
    } else if (imc >= 25 && imc <= 29.9) {
        return {
            texto: 'Sobrepeso',
            classe: 'sobrepeso'
        };
    } else if (imc >= 30 && imc <= 34.9) {
        return {
            texto: 'Obesidade grau I',
            classe: 'obesidade-1'
        };
    } else if (imc >= 35 && imc <= 39.9) {
        return {
            texto: 'Obesidade grau II',
            classe: 'obesidade-2'
        };
    } else {
        return {
            texto: 'Obesidade grau III (mórbida)',
            classe: 'obesidade-3'
        };
    }
}

// Função que exibe o resultado na tela
function exibirResultado(imc, classificacao) {
    resultado.className = 'resultado';
    
    resultado.classList.add(classificacao.classe);
    
    imcValor.textContent = imc.toFixed(1);
    
    imcClassificacao.textContent = classificacao.texto;
    
    resultado.classList.remove('hidden');

    resultado.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function destacarTabelaClassificacao(classe) {
    const todasLinhas = document.querySelectorAll('tbody tr');
    todasLinhas.forEach(linha => {
        linha.classList.remove('highlight');
    });
    
    const linhaCorrespondente = document.querySelector(`tbody tr.${classe}`);
    if (linhaCorrespondente) {
        linhaCorrespondente.classList.add('highlight');
    }
}

pesoInput.addEventListener('input', limparDestaque);
alturaInput.addEventListener('input', limparDestaque);

function limparDestaque() {
    const todasLinhas = document.querySelectorAll('tbody tr');
    todasLinhas.forEach(linha => {
        linha.classList.remove('highlight');
    });
}

pesoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        alturaInput.focus();
    }
});

alturaInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calcularIMC();
    }
});