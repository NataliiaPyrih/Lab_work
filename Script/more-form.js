window.onload=setTimeout(getFamiliar, 6000000);
function getFamiliar(){
let Username=prompt("Як Вас звати?");
if(Username==undefined||Username==""){
alert("У Вас немає імені? 😐");}
else{
var now = new Date();
alert(`Ради з Вами познайомитись, ${Username}. Ми запам'ятаємо цей момент: )${now.toLocaleTimeString()}`);
}
}