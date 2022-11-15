
function checkMaill(event){
    event.preventDefault();
    var email=document.getElementById('email').value;
    var errorMs = document.getElementById('error');
    errorMs.style.display="block";
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var valid=re.test(email);
    if(valid){
        errorMs.innerHTML = "Email введено правильно!";
        errorMs.style.background="#1d4943";
    }
   if(email==""){
    errorMs.innerHTML="Ведіть електрону адресу!";
    errorMs.style.background="rgb(160, 90, 90)";
   }
   else if(!valid){
    errorMs.innerHTML="Перевірте правильність вводу email!";
     errorMs.style.background="rgb(160, 90, 90)";
   }
}

function checkPhone(event){
    event.preventDefault();
    var errorMs = document.getElementById('errorPhone');
    errorMs.style.display="block";
    var phone=document.getElementById('phone-number').value;
    var re2 = /^\+380\d{9}/; 
    var valid1 = re2.test(phone);
    var valid2=(phone=="+380000000000");
    
    if(phone.length>13||phone.length<13){
        errorMs.style.background="rgb(160, 90, 90)";
        errorMs.innerHTML = "Номер телефону повинен містити 12 цифр та знак +!";  
    }
    else{
        if(valid1){
            errorMs.innerHTML = "Номер телефону введено правильно!";
            errorMs.style.background="#1d4943";
        if(valid2){
             errorMs.style.background="rgb(160, 90, 90)";
            errorMs.innerHTML = "Номер телефону не може складатися лише з 0!"; 
        }
    }
        else if(!valid1){
        errorMs.innerHTML = "Введіть номер у форматі +380xxxxxxxxx! ";
        errorMs.style.background="rgb(160, 90, 90)";
            
            if(phone==""){
        errorMs.innerHTML = "Вам необхідно ввести номер телефону!";
   
   }
            else if (isNaN(phone)) {  
    errorMs.innerHTML += "Введіть лише цифри!";
    }
    
    }
}
}


function checkData(event){
   var email=document.getElementById('email').value;
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var phone=document.getElementById('phone-number').value;
    var re2 = /^\+380\d{9}/; 
    var valid=re.test(email);
    var valid1 = re2.test(phone);
    var valid2=(phone=="+380000000000");
    var valPhone=valid1 && !valid2;

    if(email==""||phone==""){
        event.preventDefault();
        alert("Спочатку введіть всі необхідні дані!");
        var phoneBox=document.getElementById('phone-number');
        var emailBox=document.getElementById('email');
        phoneBox.style.border="2px solid red";
        emailBox.style.border="2px solid red";
    }
    else if(!valid||!valPhone){
    event.preventDefault();
    alert("Перевірте правильність вводу даних! Скористайтесь валідаторами.");
}
}

function CheckHTML5(){
    var i = document.createElement("input");
    i.setAttribute("type", "email");
    var l= i.type !== "text";
    return l;
}

