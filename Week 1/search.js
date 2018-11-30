function Search(arr){
   var n= Number(arr[0]);
   var flag=0;
   for(var i=1;i<arr.length;i++){
    if(Number(arr[i])==n) {
        flag=1;
        break;
    }
   }
   if(flag==1){
    console.log('number:',n,'is found');
    }
    else console.log('number:',n,'is not found');
 }
 Search(process.argv.slice(2));

/*
Command:
node search 5 1 5 6 9 7
Output:
number: 5 is found
*/