function findPrime(number) {
    let root = Math.sqrt(number);
    for (let i= Math.floor(root); i>1; i--){
        if(number % i === 0) {
            return false;
        }
    }
    //number is prime
    return true;
}
console.log(findPrime(5));

function allPrimes(firstNum, secondNum){
    let result = [];
    for (let i=firstNum; i<= secondNum; i++)
       if(findPrime(i)===true){
           result.push(i);
       }
       return result
}
console.log(allPrimes(2,6));