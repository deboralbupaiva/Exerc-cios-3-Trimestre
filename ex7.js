function verificacaoPolimdromo(str) {
    let strReversa = str.split('').reverse().join('');
    return str === strReversa;
}

console.log(verificacaoPolimdromo("ana")); //true
console.log(verificacaoPolimdromo("joao")); //false