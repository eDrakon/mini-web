'use strict'
window.addEventListener('load', () => {
    let element;
    
    clock(element);

    function clock(element) { 
        let today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();

        m = checkTime(m);
        s = checkTime(s);
        
        

        var t = setTimeout(clock, 1000);
    }

    function checkTime(number) {
        if(number < 10) {
            return '0' + number;
        }
        return number;
    }
})