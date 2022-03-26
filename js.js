 
function inputalert()
{
    let deger= document.querySelector("#input1").value
    let liste= document.querySelector("#liste")
    const textNode = document.createTextNode(deger);
    

    if(!deger)
{
    alert("boş değer giremezsiniz")
}
else 
{
    var li= document.createElement("li")
    var span=document.createElement("span")
    liste.appendChild(li); 
    li.innerText=deger;


    
    span.classList.add("closebtn")
    

    localStorage.setItem("todo",deger); 
}

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

li.addEventListener("click" ,function()
{
li.classList.add("checked")

})

document.getElementById("myInput").value = "";

}



