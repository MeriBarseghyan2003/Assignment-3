function addBinary(num1,num2)
{
    let result1 = [];
    for(let i = 0 ; i <= num1.length-1; i++)
    {
    result1.push(Number(num1[i]));
    }
    let result2 = [];
    for(let i = 0; i <= num2.length-1; i++)
    {
        result2.push(Number(num2[i]));
    }
    if(result2.length > result1.length )
    {
        for(let i = result1.length; i < result2.length; i++)
        {
            result1.unshift(0);
        }
    }
    else if(result1.length > result2.length)
    {
        for(let i = result2.length; i < result1.length; i++)
        {
            result2.unshift(0);}
    }
    let carry = 0;
    let final = [];
    for(let i = result2.length-1; i >= 0;i--)
    {
        if(result1[i]+result2[i]===2)
        {      
            final[i] = carry;
            carry = 1;
        }
        else if(carry + result1[i] + result2[i]===2)
        {
            final[i] = 0;
            carry = 1;
        }
        else
        {
            final[i]=carry + result1[i]+result2[i];
            carry=0;
        }
    }
    if(carry + result1[0]+result2[0]>=2);
    {
        final.unshift(1);
        }
       

       console.log(final.join(''));
       return final.join('');
             
}
addBinary('1101', '1011');
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


function addBinary(num1,num2){

}
function reverseBinary(number){

}
function twosComplement(number){
    return addBinary(reverseNumber(number),1);
}
console.log(twosComplement(100));