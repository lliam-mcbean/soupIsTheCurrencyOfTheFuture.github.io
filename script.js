

window.addEventListener('scroll', function () {
    let scrolledSlowed = window.scrollY / 8;
    let scrolled = window.scrollY;
    let scrollable = document.documentElement.scrollHeight - window.innerHeight;
    let box1 = document.querySelector('.box-1');
    let box2 = document.querySelector('.box-2');
    let box3 = document.querySelector('.box-3');
    
    
    box1.style.transform =  'translateX('+ scrolledSlowed +'vw)';
    box2.style.transform =  'translateX(-'+ scrolledSlowed +'vw)';
    box3.style.transform =  'translateY(-'+ scrolledSlowed +'vw)';

    console.log(scrollable);
    console.log(scrolled);

    if (scrolled > 220) {
        document.querySelector('.box-4').className = 'box-4-active';
        document.querySelector('.box-5').className = 'box-5-active';
        document.querySelector('.box-6').className = 'box-6-active';
    } else {
        document.querySelector('.box-4-active').className = 'box-4';
        document.querySelector('.box-5-active').className = 'box-5';
        document.querySelector('.box-6-active').className = 'box-6';
    }
});