// 1.Проверяем экран
// 2.Ставим плашку 
// 3.Запускаем изменения и убераем плашку 
//let counter = 0
function run() {
    if (document.querySelector('#rcnt') == null) {
        setTimeout(() => {
            return run()
        }, 10);
    } else if(!document.querySelector("#hdtb-msb-vis").querySelectorAll('.hdtb-mitem')[0].classList.contains('hdtb-msel')) { // если гугл поиск не на вкалдке Все
        document.querySelector('#white').remove()
    } else {                
        document.querySelector('#rcnt').style.marginLeft = '22%' // поиск плашка
        document.querySelectorAll('.mw')[1].style.maxWidth = '4000px' // поиск плашка
        document.querySelectorAll('.mw')[1].style.width = '100%' // поиск плашка


        document.querySelector('.srp #tsf').style.marginLeft = '30%' // поиск
        document.querySelector('#hdtb').style.marginLeft = '23%' //
        document.querySelector('.appbar').style.marginLeft = '22%' //
        document.querySelector('#white').remove()

    }
}

function preload() {
    if (!document.querySelector('body')) {
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
        
        document.querySelector('body').append(newDiv)  
        run()
      }
}

// check screen size
if(window.innerWidth > 1400) {
    preload()
}

