function a_decimal(numero, base) {
    let decimal = 0;
    let len = numero.length;

    for (let i = 0; i < len; i++) {
        let digito = numero[i];

        if (digito >= '0' && digito <= '9') {
            digito = digito.charCodeAt(0) - '0'.charCodeAt(0);
        } 
        else{
            digito = digito.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
        }
        decimal += digito * Math.pow(base, len-i-1);
        
    }
    return decimal;
}

function decimal_a_base(decimal, base) {

    let resultado = '';
    const d = '0123456789ABCDEF';

    while (decimal > 0) {
        let residuo = decimal % base;
        resultado = d[residuo] + resultado;
        decimal = Math.floor(decimal / base);

    }
    return resultado || '0';
}

function main () {
    const baseOrigen = document.getElementById('baseOrigen');
    const numeroOrigen = document.getElementById('numeroOrigen');
    const baseDestino = document.getElementById('baseDestino');
    const resultado = document.getElementById('resultado');

    function convertirNumero() {
        const base1 = parseInt(baseOrigen.value);
        const numero = numeroOrigen.value.trim().toUpperCase(); 
        const base2 = parseInt(baseDestino.value);
    
        if (!base1 || !base2 || !numero) {
            resultado.value = "Ingresa todos los datos...";
            return;
        }
    
        const numeroDecimal = a_decimal(numero, base1);
    
        const numeroConvertido = decimal_a_base(numeroDecimal, base2);
    
        resultado.value = numeroConvertido;
    }

    baseOrigen.addEventListener('change', convertirNumero);
    numeroOrigen.addEventListener('input', convertirNumero);
    baseDestino.addEventListener('change', convertirNumero);
}

document.addEventListener("DOMContentLoaded", main());