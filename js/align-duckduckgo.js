// 1.Проверяем экран
// 2.Ставим плашку 
// 3.Запускаем изменения и убераем плашку 

console.log('hello duck duck go aligner')

function run() {
    if (document.querySelector('.cw') == null) {
        setTimeout(() => {
            return run()
        }, 10);
    } else {
        document.querySelectorAll('.cw')[0].style.marginLeft = '22%'                
        document.querySelectorAll('.cw')[1].style.marginLeft = '22%'                
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

