



function preload() {
    // alert('google')
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
        
        document.querySelector('body').append(newDiv)        
        
        
        
    }
}

preload()


function run() {
    if (document.querySelector('#rcnt') == null) {
        setTimeout(() => {
            // console.log('ci')
            return run()
        }, 10);
    } else {                
        // alert('google')
        document.querySelector('#rcnt').style.marginLeft = '35%' // поиск плашка
        document.querySelector('.srp #tsf').style.marginLeft = '30%' // поиск
        document.querySelector('#hdtb').style.marginLeft = '23%' //
        document.querySelector('#topabar').style.marginLeft = '22%' //
        document.querySelector('#white').remove()

    }
}

run()



