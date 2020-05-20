var arr=[10,20,25,45]
var i=0
var a=0,b=0,c=0,d=0;
var sum=0;
var netBill=0



function display(){

event.preventDefault()
var name1var = document.getElementById("name1").value
a= arr[i]*name1var
console.log(arr[0])
sum+=a
i++

var name2var = document.getElementById("name2").value
b=arr[i]*name2var
console.log(arr[1])

sum+=b
i++

var name3var = document.getElementById("name3").value
c=arr[i]*name3var
sum+=c
i++

var name4var = document.getElementById("name4").value
d=arr[i]*name4var
console.log(arr[3])

sum+=d

tax= 0.2*sum

netbill=sum+tax

document.getElementById("t11").textContent="Idly"
document.getElementById("t12").textContent=name1var
document.getElementById("t13").textContent= a

document.getElementById("t21").textContent="Dosa"
document.getElementById("t22").textContent=name2var
document.getElementById("t23").textContent=b

document.getElementById("t31").textContent="Pongal"
document.getElementById("t32").textContent= name3var
document.getElementById("t33").textContent=c

document.getElementById("t41").textContent="Puri"
document.getElementById("t42").textContent=name4var
document.getElementById("t43").textContent=d

//document.getElementById("t41").textContent="Puri"
//
document.getElementById("t51").textContent="tax       "
document.getElementById("t52").textContent=tax


document.getElementById("t61").textContent="Net Bill "
document.getElementById("t62").textContent=netbill








}

    //window.addEventListener('load',function(){
        bt1var=document.getElementById('bt1')
        bt1var.addEventListener('click',display)
    
    
    //})