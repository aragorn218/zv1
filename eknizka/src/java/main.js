var submitButton = document.getElementById("button1");
var clearButton = document.getElementById("button2");
var add = document.getElementById("write");

submitButton.addEventListener("click", addStuff);
clearButton.addEventListener("click", clear);


function myFunction() {
  alert("Vaša knižka bola odoslana na spracovanie");
}

function addStuff()
{
    todo = text1.value;
    if(todo == "") {
        alert("Píš");
    } else {
        add.innerHTML += "ODOSLANE  detail: " +"</br>"+ "Kniha:" +  todo ;

    }

    todo2 = text2.value;
    if(todo == "") {
        alert("Píš");
    } else {
        add.innerHTML +=   "</br>" + "Autor: " + todo2 + "</br>";
    }

    todo3 = text3.value;
    if(todo == "") {
        alert("Píš");
    } else {
        add.innerHTML += "Rok vydania:" + todo3 + "</br>";
    }

}
function clear() {
    add.innerHTML = "";
}