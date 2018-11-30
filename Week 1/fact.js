function Fact(arr){
   var n= Number(arr[0]);
   var temp=n;
   var fact=1;
   while(n!=0){
    fact=fact*n;
     n--;
   }
   console.log('Factorial of',temp,'is',fact) ;
 }
 Fact(process.argv.slice(2));

  /*
Command:
node fact 5
Output:
Factorial of 5 is 120
 */