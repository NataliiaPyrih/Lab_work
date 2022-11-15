document.addEventListener("keydown", function (event) {
            if (event.altKey && event.code === "KeyA") {
                var obj = document.getElementById('whImportant');
                obj.style.background = "rgba(0,0,0,0.4)";
                setTimeout(hightlight,300);
                function hightlight(){
                    obj.style.background = "none";}
                event.preventDefault();
            }
            else if (event.altKey && event.code === "KeyS") {
                var obj = document.getElementById('fromZero');  
                obj.style.transform = "scale(0.8)";
                setTimeout(hightlight,300);
                function hightlight(){
                    obj.style.transform = "scale(1)";}
                event.preventDefault();
            }
            else if(event.altKey && event.code === "KeyD"){
                window.open("form-index.html");
            }
        });