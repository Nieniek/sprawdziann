function dupa(){
var div = document.querySelector("#j");

if (div.style.backgroundColor == "green"){
div.style.backgroundColor = "red";
}
else{
    div.style.backgroundColor = "green";
}
}


function dwa(){
var div = document.querySelector("#t")

var button = document.querySelector("#bt")

button.addEventListener("click",function(dwa){
    div.style.height = "30vh";
    div.style.width = "50vh";
});
}


function trzy(){
var div = document.querySelector("#t");
var button = document.querySelector("#trz");
 button.addEventListener("click",function(){
    div.textContent = "siema tu lewy";
 });

}


function cztery(){
    var div = document.querySelector("#t");
    var button = document.querySelector("#czt");
  button.addEventListener("click",function(){
div.style.height = null;
div.style.width = null;
  });
}


