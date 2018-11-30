function Prime(arr){
   var n= Number(arr[0]);
   var flag=0;
   for(var i=2;i<n;i++){
       if(n%i==0) {
           flag=1;
           break;
       }
   }
   if(flag==0){
       console.log('number:',n,'is a prime number');
   }
   else console.log('number:',n,'is a not prime number');
 }
 Prime(process.argv.slice(2));

  /*
Command:
node prime 5
Output:
number: 5 is a prime number
 */