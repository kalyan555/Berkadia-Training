interface Student{
    id:Number;
    Name:String;
    Marks:Number;
}

function AddTable(students:Student[]){

    //declarations
    var myTableDiv = document.getElementById("metric_results");
    var table = document.createElement('TABLE');
    var tableBody = document.createElement('TBODY');

    //adding classes
    table.classList.add("table");
    table.classList.add("table-striped");
    table.classList.add("table-bordered");
    table.classList.add("table-hover");
    table.appendChild(tableBody);
    var tr = document.createElement('TR');
    tr.classList.add("thead-dark");
    tableBody.appendChild(tr);

    //creating table head

    var headings:string[]=["id","Name","Marks"];
    
    for (var heading of headings) {
        var th = document.createElement('TH')
        th.appendChild(document.createTextNode(heading));
        tr.appendChild(th);
    }
    
    // creating table data with dynamic binding

    for (var student of students) {
        var tr = document.createElement('TR');
        
            var td1 = document.createElement('TD');
            var td2 = document.createElement('TD');
            var td3 = document.createElement('TD');
            td1.appendChild(document.createTextNode(student.id.toString()));
            td2.appendChild(document.createTextNode(student.Name.toString()));
            td3.appendChild(document.createTextNode(student.Marks.toString()));
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
      
        tableBody.appendChild(tr);
    }

    myTableDiv.appendChild(table)
}

// students data
var users:Student[] =
[
    {id:1,Name:"Kalyan",Marks:90},
    {id:2,Name:"Krishna",Marks:85},
    {id:3,Name:"Venkat",Marks:92},
    {id:4,Name:"Arjun",Marks:79},
    {id:5,Name:"Akhil",Marks:96},
    {id:6,Name:"Manoj",Marks:85},
    {id:7,Name:"Surya",Marks:76},
    {id:8,Name:"Sharath",Marks:87},
];

//entry point
AddTable(users)