const slides = [
    {
        id : 1,
        img : './images/Oxthreebody.png',
        name : 'Oxthreebody',
        author : 'Co-founder'

    },
    {
        id : 2,
        img : './images/Bette.svg',
        name : 'Oxthreebody',
        author : 'Co-founder'

    },
    {
        id : 3,
        img : './images/Bryan.svg',
        name : 'Oxthreebody',
        author : 'Co-founder'

    },
    {
        id : 3,
        img : './images/Dan-Reecer.png',
        name : 'Dan Reecer',
        author : 'Chief Growth Officer'
    },
    {
        id : 4,
        img : './images/Ruitao.svg',
        name : 'Ruitao',
        author : 'Co-founder'

    }
]


let img = document.querySelector('.img');
let name = document.querySelector('.name');
let author = document.querySelector('.author');
let slideshow = document.querySelector('.slide-show');
const buttonRight = document.getElementById('right');
const buttonLeft = document.getElementById('left');

window.onload = () =>{

let randomSlides =slides.sort(random_sort);

let createdSlides = randomSlides.map( slide => showSlides(slide)).join("");

slideshow.innerHTML = createdSlides;

slideshow.style.transform = 'translate3d(100px, 0px, 0px)';

buttonRight.disabled = true;



}


function showSlides(slide){
  return  `<li class="slide m-auto flex flex-col shadow-team items-center justify-stretch h-4 w-[200px]">
  <div><img class="img w-[108px] h-[108px] text-center mb-6" src="${slide.img}" alt=""></div>
  <div><p class=" text-center text-2xl mt-5">${slide.name}</p></div>
  <div><p class=" text-center text-lg mt-5">${slide.author}</p></div>
</li>
`;
}

function random_sort (slides)
{
      return (0.5 - Math.random() );
}






buttonRight.addEventListener('click',()=>{
	
    slideshow.style.transform = 'translate3d(130px, 0px, 0px)';
    buttonLeft.disabled = false;
})

buttonLeft.addEventListener('click',()=>{
	slideshow.style.transform = 'translate3d(-350px, 0px, 0px)';
    buttonLeft.disabled = true;
    buttonRight.disabled = false;
})