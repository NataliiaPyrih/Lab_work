 
/*function highlight_Table_Rows(table_Id, hover_Class,) {
var table = document.getElementById(table_Id);
if (hover_Class) {
 var hover_Class_Reg = new RegExp("\\b"+hover_Class+"\\b");
 table.onmouseover = table.onmouseout = function(e) {
  if (!e) e = window.event;
  var elem = e.target;
  while (!elem.tagName || !elem.tagName.match(/td|th|table/i))
   elem = elem.parentNode;

  if (elem.parentNode.tagName == 'TR' &&
   elem.parentNode.parentNode.tagName == 'TBODY') {
   var row = elem.parentNode;
   if (!row.getAttribute('hover_Row'))
   row.style.background="yellow";
   row.className = e.type=="mouseover"?row.className +
   " " + hover_Class:row.className.replace(hover_Class_Reg," ");
  }
 };
}
}*/

function highlight_Table_Rows(table_Id) {
var table = document.getElementById(table_Id);
table.onmouseover= function(e) {
if (!e) e = window.event;
  var elem = e.target;
  while (!elem.tagName || !elem.tagName.match(/td|th|table/i))
   elem = elem.parentNode;
   if (elem.parentNode.tagName == 'TR' &&
   elem.parentNode.parentNode.tagName == 'TBODY') {
   var row = elem.parentNode;
   if (!row.getAttribute('hover_Row'))
   row.style.background="rgb(189, 189, 78)";
  } 
}

table.onmouseout = function(e){
    if (!e) e = window.event;
  var elem = e.target;
  while (!elem.tagName || !elem.tagName.match(/td|th|table/i))
   elem = elem.parentNode;
   if (elem.parentNode.tagName == 'TR' &&
   elem.parentNode.parentNode.tagName == 'TBODY') {
   var row = elem.parentNode;
   if (!row.getAttribute('hover_Row'))
   if(row.hasAttribute("class")){
    row.style.background="#ddf7dd";
   }
   else{
    row.style.background="#2c786c";
   }
   
  } 
}
}