function Sort(arr){
   var n1= Number(arr[0]);
   var n2= Number(arr[1])
   console.log('Substraction of',n1,'and',n2,'is',n1-n2) ;
   
 }
Sort(process.argv.slice(2));

 /*
Command:
node minus 2 3
Output:
Substraction of 3 , 2 is 1

 */