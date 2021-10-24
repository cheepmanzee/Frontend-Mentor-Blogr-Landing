const $navBtns = document.querySelectorAll('.nav__links a');
const $burgerBtns = document.querySelectorAll('.burger__link')
const $burger = document.querySelector('.nav__burger');
const $burgerPop = document.querySelector('.burger__popup');

for (link of $navBtns) {
    link.addEventListener('click', function(){
        if (this.classList.contains('active')) {
            this.classList.remove('active')
        } else {
            for (l of $navBtns) {
                l.classList.remove('active');
            }
            this.classList.add('active')
        };
    });
}

for (link of $burgerBtns) {
    link.addEventListener('click', function(){
        if (this.classList.contains('dropdown')) {
            this.classList.remove('dropdown')
        } else {
            for (l of $burgerBtns) {
                l.classList.remove('dropdown');
            }
            this.classList.add('dropdown')
        };
    });
}

$burger.addEventListener('click',function(){
    $burgerPop.classList.toggle('active__popup');
})

