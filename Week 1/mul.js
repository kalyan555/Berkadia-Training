function Mul(arr){
   var n1= Number(arr[0]);
   var n2= Number(arr[1])
   console.log('Multiplication of',n1,'and',n2,'is',n1*n2) ;
   
 }
Mul(process.argv.slice(2));

 /*
Command:
node mul 2 3
Output:
Multiplication of 3 , 2 is 6
 */