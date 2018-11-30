function result(n){
    if(n==1)
      return 0;
    else if(n==2)
        return 1;
    else return result(n-1)+result(n-2);
}
function Fib(arr){
    var n= Number(arr[0]);
    var ans=result(Number(n));
    console.log('Fibonacci term of',n,'is',ans) ;
  }
Fib(process.argv.slice(2));

 /*
Command:
node Fibonacci 5
Output:
Fibonacci term of 5 is 3
 */