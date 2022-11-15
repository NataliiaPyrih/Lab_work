/*const buttonLeft = document.getElementById('left');
        const buttonRight = document.getElementById('right');
        const slide = document.getElementById('carusel-slide');
        const images = document.querySelectorAll('.gallery');

        let counter = 0;
        //const stepSize = images[0].clientWidth;
        const stepSize = 169;
        slide.style.transform = 'translateX(' + `${-stepSize * counter}px)`;

        function shift() {
            if (counter >= images.length - 1) { counter = -1; }
            slide.classList.add('transformAnimation');
            counter++;
            slide.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
        }
        function shiftLeft() {
            if (counter <= 0) counter = images.length;
            slide.classList.add('transformAnimation');
            counter--;
            slide.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
        }
        buttonRight.addEventListener('click', shift);
        buttonLeft.addEventListener('click', shiftLeft);

        //Модальне вікно
        var modal = document.getElementById('myModal');
        var picture = document.querySelectorAll(".gallery");
        var h3El = document.getElementById('content');
        var contentImg = document.querySelector('.gallery1');
        console.log(contentImg);
        var span = document.getElementsByClassName("close")[0];

        picture[0].onclick = function () {
            contentImg.setAttribute("src", "images/Галерея/photo-1.jpg");
            h3El.innerHTML = "Страва з броколі";
            modal.style.display = "block";
        }

        picture[1].onclick = function () {
            contentImg.setAttribute("src", "images/Галерея/photo-2.jpg");
            h3El.innerHTML = "Фруктова тарілка";
            modal.style.display = "block";
        }
        picture[2].onclick = function () {
            contentImg.setAttribute("src", "images/Галерея/photo-3.jpg");
            h3El.innerHTML = "Страви з креветок";
            modal.style.display = "block";
        }

        picture[3].onclick = function () {
            contentImg.setAttribute("src", "images/Галерея/photo-4.jpg");
            h3El.innerHTML = "Мексиканські чіпси";
            modal.style.display = "block";
        }
        picture[4].onclick = function () {
            contentImg.setAttribute("src", "images/Галерея/photo-5.jpg");
            h3El.innerHTML = "Сніданок у Франції";
            modal.style.display = "block";
        }
        picture[5].onclick = function () {
            contentImg.setAttribute("src", "images/Галерея/photo-6.jpg");
            h3El.innerHTML = "Ресторана страва";
            modal.style.display = "block";
        }
        span.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }*/
      
      
    
  
