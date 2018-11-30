function Duplicate(arr){
    var set=new Set();
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
             if(i!=j && Number(arr[i])==Number(arr[j]))
                set.add(Number(arr[i]));
           }
    }
    console.log("Duplicate Elements:",set);
  }
  Duplicate(process.argv.slice(2));

/*
Command:
node DuplicatesElements 3 6 8 6 7 6 9 9 1 3
Output:
Duplicate Elements: Set { 3, 6, 9 }
 */