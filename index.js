function add(a,b){
    return a + b 
}
function subtract(a,b){
    return a - b 
}
function multiply(a,b){
    return a * b 
}
function divide(a,b){
    return a / b 
}
function increment(a){
    return a + 1
}
function decrement(a){
    return a -1
}
/*function makeInt(a){
    return parseInt('a');
    return parseInt(a, 10);
    return parseInt('a',10);
    
 }*/
function makeInt(n) {
    const parsed = parseInt(n, 10);
    if (isNaN(parsed)) { 
        return NaN;
    
    }else{

    return 0;
    }
    
}
function preserveDecimal(n){
    const parsed = parseFloat(n);
    if (isNaN(parsed)) { 
        return NaN;
    
    }else{

    return parsed;
    }

}