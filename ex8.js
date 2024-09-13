function fatorial(n){
    if(n < 0){
        return 'Fatorial não definido para números negativos';
    }
    if(n === 0){
      return 1;
    } 
    let result = 1;
    for (let i = 1; i<= n; i++){
        result *= i;
    }
    return result;
}

console.log(fatorial(5));
