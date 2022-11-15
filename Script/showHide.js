var visability = true;
function showHide(element_id) {
if (document.getElementById(element_id)) { 
var obj = document.getElementById(element_id); 
 if (visability) { 
obj.style.display = "block";
visability =false;
}
else {obj.style.display = "none"; visability=true;}

 }
else alert("Элемент с id: " + element_id + " не найден!"); 
 }   
        