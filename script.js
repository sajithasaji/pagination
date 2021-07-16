
//1.create a XHR object

    



var req = new XMLHttpRequest();
//2.open a connection
req.open(
  "GET",
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json",
  true
); //GET - recieve information which is already there in server,true-if any part of data missing the other part need not affect the rest part of the execution of program
//3.send the connection or request
req.send();
//4.onload is an event,once the data recieved successfully from the server , we need to perform some task that operation is done using this function

req.onload = function () {
  var data = JSON.parse(this.response); //data recieving from server will be of string format to convert it into a json object , this.response-the response recieving from server
  //user defined statements



  var table = document.createElement("table");
  table.className = "table";
  
  

  var thead = document.createElement("thead");
  var tr = document.createElement("tr");

  var th1 = createth("th", "ID");
  var th2 = createth("th", "Name");
  var th3 = createth("th", "Email");

  tr.append(th1, th2, th3);
  thead.append(tr);
  table.append(thead);



  function createth(elementname, value = " ") {
    var th = document.createElement(elementname);
    th.innerHTML = value;
    return th;
  }

  //document.body.append(table);

  
  

  var id = [];
  var name = [];
  var email = [];
  printTable();

  function printTable(start=0, end=10){
   
    var tbody = document.createElement("tbody");
  
  for (let j = start; j < end; j++) {
    var tr = document.createElement("tr");
    var td1 = createth("td", `${data[j].id}`);
      var td2 = createth("td", `${data[j].name}`);
      var td3 = createth("td", `${data[j].email}`);
      tr.append(td1, td2, td3);
      tbody.append(tr);
  }
  table.append(tbody);

  document.body.append(table);
 }

var b=10;
function buildTable(x) {
  table.innerHTML = " ";
  var thead = document.createElement("thead");
  var tr = document.createElement("tr");

  var th1 = createth("th", "ID");
  var th2 = createth("th", "Name");
  var th3 = createth("th", "Email");

  tr.append(th1, th2, th3);
  thead.append(tr);
  table.append(thead);
  var tbody = document.createElement("tbody");

  if(this.textContent==='First'){
 for (var i = 0; i < 10; i++) {
        
      var tr = document.createElement("tr");
      var td1 = createth("td", `${data[i].id}`);
      var td2 = createth("td", `${data[i].name}`);
      var td3 = createth("td", `${data[i].email}`);

      tr.append(td1, td2, td3);
      tbody.append(tr);
    }
  }

  if(this.textContent==='Last'){
    for (var i = 90; i < 100; i++) {
           
         var tr = document.createElement("tr");
         var td1 = createth("td", `${data[i].id}`);
         var td2 = createth("td", `${data[i].name}`);
         var td3 = createth("td", `${data[i].email}`);
   
         tr.append(td1, td2, td3);
         tbody.append(tr);
       }
     }

     

    
  
 
    
    
    for (var i = (x - 1) * b; i < b * x; i++) {
      console.log(x)
           
      var tr = document.createElement("tr");
      var td1 = createth("td", `${data[i].id}`);
      var td2 = createth("td", `${data[i].name}`);
      var td3 = createth("td", `${data[i].email}`);

      tr.append(td1, td2, td3);
      tbody.append(tr);
    }

    if(this.textContent==='Previous'){
      var y = (+x - 1)
          
         console.log(y)
       
      }
      table.append(tbody);

      
    
  }

 
  var temp = [];
  var div=document.createElement('div')

  var buttonFirst = document.createElement("button");
   buttonFirst.setAttribute("class", "btn btn-primary");
   buttonFirst.setAttribute("id", "first");
   buttonFirst.innerText = "First";
   buttonFirst.addEventListener("click", buildTable);
   

  var buttonLast = document.createElement("button");
  buttonLast.setAttribute("class", "btn btn-primary");
  buttonLast.setAttribute("id", "last");
  buttonLast.innerText = "Last";
  buttonLast.addEventListener("click", buildTable);

 


  
  for (i = 0; i < 10; i++) {
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary");
    button.innerHTML = `${i + 1}`;
    temp.push(button);
    //button.addEventListener('click',buildTable);
    div.append(button);
  }

  temp.forEach((ele) => {
    ele.onclick = function () {
    
     buildTable(ele.innerHTML);
     
    }
  });

  

  
  div.append(buttonFirst);
  div.append(buttonLast);
 
  document.body.append(div);
 
}
