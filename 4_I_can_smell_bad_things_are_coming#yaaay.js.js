function reverseNumber(number){
    let array =[];
    while (number>0){
        array.push(number%10);
        number = Math.floor(number/10);
        
        
     }
     array = array.join("")
     return array;
} 
function numberIsPalindrome(number){
    if (reverseNumber(number) === number){
        return true;
    }   
    return false;
}   
