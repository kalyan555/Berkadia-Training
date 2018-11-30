function Sort(arr){
   arr.sort();
   console.log(arr);
 }
 Sort(process.argv.slice(2));

 /*
Command:
node Sort 3 6 8 7 6 9
Output:
[ '3', '6', '6', '7', '8', '9' ]
 */