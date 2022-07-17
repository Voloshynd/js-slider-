let offset = 0;// zmienna dla przechowywania przesunieia slajdera od lewej krawedzi 
const sliderLine = document.querySelector('.slider-line');


document.querySelector('.slider-next').addEventListener('click', ()=>{
    offset += 300; 
   

if(offset > 600){
offset = 0;
}
sliderLine.style.left = `${-offset}px`; 
});


document.querySelector('.slider-prev').addEventListener('click', ()=>{
    offset -= 300; 
   

if(offset < 0 ){
offset = 600;
}
sliderLine.style.left = `${-offset}px`; 
})