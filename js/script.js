var mybutton = document.getElementById("myBtn");
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }


    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    function formatProductDate(dateString) {
        const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
        const dayNames = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
        
        let date = new Date(dateString);

        let dayOfWeek = dayNames[date.getDay()];
        let weekNumber = Math.ceil(date.getDate() / 7);
        let month = monthNames[date.getMonth()];
        let year = date.getFullYear();
        
        return `${dayOfWeek}, ${weekNumber} неделя ${month} ${year} года`;
    }

    let productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        let dateElement = card.querySelector(".product-date");
        let productDate = card.dataset.date;
        dateElement.innerText = "Дата добавления: " + formatProductDate(productDate);
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var modal = document.getElementById("myModal");

var btn = document.getElementsByClassName("buy-button");

var span = document.getElementsByClassName("close")[0];

var closeButton = document.getElementsByClassName("close-button")[0];

for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        modal.style.display = "block";
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

closeButton.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    /////////////////////////////////////////////////////////////////////////////////////////////////////



    document.querySelector(".close-button").addEventListener("click", function(event) {
        var quantityInput = document.querySelector('#quantity');
        var colorInputs = document.querySelectorAll('input[name="color"]');
        var commentInput = document.querySelector('#comment'); 
    
        if (quantityInput.value === '') {
            alert("Пожалуйста, введите количество товара");
            return false;
        }
        
        var colorSelected = false;
        for (var i = 0; i < colorInputs.length; i++) {
            if (colorInputs[i].checked) {
                colorSelected = true;
                break;
            }
        }
        
        if (!colorSelected) {
            alert("Пожалуйста, выберите цвет товара");
            return false;
        }
        
        alert("Спасибо за покупку!");
        
        quantityInput.value = '';
        commentInput.value = '';
        for (var i = 0; i < colorInputs.length; i++) {
            colorInputs[i].checked = false;
        }
        
        modal.style.display = "none";
        return false;
    });

    function toggleDarkTheme() {
        var body = document.querySelector('body');
        body.classList.toggle('dark-theme');
      }