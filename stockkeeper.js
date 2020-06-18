
var arr=["rice","dal","sugar","salt"]
var data={
  rice:"0",dal:"0",sugar:"0",salt:"0"

}
var stock=[]
window.onload = function(){
    var mainbutton =document.querySelector("#mainbutton")
    mainbutton.addEventListener("click",openpage)

    
 }
 
 function openpage()
 {
    var text1=document.getElementById("text1")
  text1.style.display="none"
   var entering =document.getElementById("entering")
  entering.style.visibility="visible"

    var adding = document.querySelector("#adding")
  adding.addEventListener("click",addingstock)
    var deducting = document.querySelector("#deducting")
  deducting.addEventListener("click",deductingstock)
  
}
function addingstock()
{
 var p=document.createElement("p")
    p.textContent="AddYourStock"
 var input=document.createElement("input")
    input.style.type="text"
    input.setAttribute("class","inputclass")
    input.setAttribute("name","item")
 var input1 = document.createElement("input")
  input1.setAttribute("class","qtyclass")
  input1.setAttribute("type","number")
  input1.setAttribute("name","qty")
 var addbutton=document.createElement("button")
  addbutton.textContent="add"
  addbutton.addEventListener("click",dataentry)

  var donebutton=document.createElement("button")
   donebutton.textContent="Done"
 
  var p1=document.createElement("p")
   p1.textContent="AfterCompletionPress"

  var cont=document.createElement("div")

  cont.append(p,input,input1,addbutton,p1,donebutton)
  cont.style.float="left"
  var both=document.querySelector("#both")
  both.append(cont)

  donebutton.addEventListener("click",clearspace)
 
}
  function dataentry()
  {
    var n=0
 
  var classqty=document.querySelector(".qtyclass")
  
  var classinput=document.querySelector(".inputclass")
   for(var i=0;i<8;i++){
      if(classinput.value===arr[i]) {n++;
      data[arr[i]]=Number (data[arr[i]])
      console.log(data[arr[i]])
        data[arr[i]]+=Number(classqty.value);
        
        break;}
    }
   stock.push(data)
   //console.log(data)
   console.log(stock)
  //conso


  
  }

function clearspace(){
  for(var i=0;i<4;i++){
   // var ele =elems[i].name
    //data[ele]=elems[i].value

  }
  var tabular = document.querySelector("#tabular")
  
  var dhead=document.createElement("tr")
  var dhitem=document.createElement("th")
  dhitem.textContent="Item"
  var dhqty=document.createElement("th")
    dhqty.textContent="QtyInKgs"
 dhead.append(dhitem,dhqty)
  tabular.append(dhead)


  
var t= document.querySelector("#id1")

var row1=document.createElement("tr")

var len=stock.length-1

var d1=document.createElement("td")
d1.textContent="rice"
var d2=document.createElement("td")
d2.textContent=stock[len].rice
  row1.append(d1,d2)
  var row2=document.createElement("tr")
  var d3=document.createElement("td")
d3.textContent="dal"
var d4=document.createElement("td")
d4.textContent=stock[len].dal
  row2.append(d3,d4)
  var row3=document.createElement("tr")
  var d5=document.createElement("td")
d5.textContent="sugar"
var d6=document.createElement("td")
d6.textContent=stock[len].sugar
  row3.append(d5,d6)
  var row4=document.createElement("tr")
  var d7=document.createElement("td")
d7.textContent="salt"
var d8=document.createElement("td")
d8.textContent=stock[len].salt
  row4.append(d7,d8)
  
//row.append(d1,d2,d3,d4,d5,d6,d7,d8)
tabular.append(row1,row2,row3,row4)

  console.log(stock)
  //tabular.textContent=""
  
    //console.log(dsales1)
  event.target.parentElement.style.display="none"
}

function deductingstock(){
  var p=document.createElement("p")
    p.textContent="DeductYourStock"
   var input=document.createElement("input")
   input.style.type="text"
   input.setAttribute("class","inputclass")
    var input1 = document.createElement("input")
    input1.setAttribute("class","qtyclass")
    input1.setAttribute("type","number")
   
    var donebutton=document.createElement("button")
    donebutton.textContent="Done"
   
    var deductbutton = document.createElement("button")
    deductbutton.textContent="deduct"
    deductbutton.addEventListener("click",dataentry)
  
  var p1=document.createElement("p")
  p1.textContent="AfterCompletionPress"
    var cont=document.createElement("div")
    cont.append(p,input,input1,deductbutton,p1,donebutton)
    cont.style.float="left"
    var both=document.querySelector("#both")
    both.append(cont)
    donebutton.addEventListener("click",clearspace)
   
   
  }
    
  


 
 
