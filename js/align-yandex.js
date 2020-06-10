// 1.Проверяем экран
// 2.Ставим плашку 
// 3.Запускаем изменения и убераем плашку 

function run() {
    if (document.querySelector('.main') == null) {
        setTimeout(() => {
            return run()
        }, 10);
    } else {
        
        document.querySelector('.main').style.marginLeft = '30%'   // плашка поиска
        document.querySelector('.search2_buttons-outside_2').style.marginLeft = '34%' // поиск
        document.querySelector('.navigation .navigation__region').style.marginLeft = '30%'  // под поиск строка
        document.querySelector('#white').remove()
    }
}


function preload() {
    if (document.querySelector('body') == null) {
        setTimeout(() => {
            return preload()
        }, 10);
    } else {
        console.log(document.querySelector('body'))

        let newDiv = document.createElement("div");
            newDiv.id = "white";
            newDiv.style.position = "absolute";
            newDiv.style.zIndex = "99999999999";
            newDiv.style.background = "#ffffff";
            newDiv.style.width = "100%";
            newDiv.style.height = "100%";
            newDiv.style.top = "0";
        // Добавление белого экрана загрузки, пока меняется лейаут
        document.querySelector('body').append(newDiv)
        run()
    }
}


// check screen size
if(window.innerWidth > 1400) {
    preload()
}








