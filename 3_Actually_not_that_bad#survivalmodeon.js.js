function reverseNumber(number){
    let array =[];
    while (number>0){
        array.push(number%10);
        number = Math.floor(number/10);//floor of 1.2 is 2
        
        
     }
     array = array.join("")
     return array;
} 
console.log(reverseNumber(123));