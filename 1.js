function findPrime(number) {
    let root = Math.sqrt(number);
    for (let i= Math.floor(root); i>1; i--){
        //As prime numbers only devide 1 and themselves , hence this is false
        if(number % i === 0) {
            return false;
        }
    }
    //number is prime
    return true;
}
console.log(findPrime(5))