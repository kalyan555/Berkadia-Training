function Add(arr){
    var n1= Number(arr[0]);
    var n2= Number(arr[1])
    console.log('Sum of',n1,'and',n2,'is',n1+n2) ;
    
  }
 Add(process.argv.slice(2));

 
 /*
Command:
node add 2 3
Output:
Sum of 2 , 3 is 5

 */ 