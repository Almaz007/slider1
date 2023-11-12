//создание слайдера
const slides = document.querySelectorAll('.slide');
const slidePoints = document.querySelectorAll('.slide__point');

let currentSlide = 0;

const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');

slides.forEach((slide,index)=>{
    slide.style.transform = `translateX(${index*100}%)`
});

setBackgroundColor_Point();

function setBackgroundColor_Point(){
    slidePoints.forEach((elem)=>{
        elem.classList.remove('constantly_background');
    });
    slidePoints[currentSlide].classList.add('constantly_background');
}
const moveToSlide = function(currSlide){
    slides.forEach((slide,index)=>{
        slide.style.transform = `translateX(${(index - currentSlide)*100}%)`
    });
    setBackgroundColor_Point();
};

btnRight.addEventListener('click',()=>{
    currentSlide === slides.length - 1 ? currentSlide = 0 : currentSlide++;
    moveToSlide(currentSlide);
});

btnLeft.addEventListener('click',()=>{
    currentSlide === 0 ? currentSlide = slides.length-1 : currentSlide--;
    moveToSlide(currentSlide);
});

slidePoints.forEach((point,index)=>{
    point.addEventListener("click",()=>{
        currentSlide = index;
        moveToSlide(currentSlide);
    })
});
console.log("авав");

