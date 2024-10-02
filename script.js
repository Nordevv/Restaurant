let image = document.querySelector(".image");
let banner = document.querySelector(".banner");
let title =document.querySelector(".title");
let description = document.querySelector(".description");



open = document.querySelector(".open");
        close = document.querySelector(".close");
        nav_links = document.querySelector(".nav-links");
        open.addEventListener("click", function(){ 
            nav_links.style.right='0'
        });
        close.addEventListener("click", function(){ 
                nav_links.style.right='-100%';
        });



function food_img(food_img){
    image.src=food_img;
}
function color(color){
    banner.style.background=color;
}
function food(food){
    title.innerHTML=food;
}
function food_description(food_description){
    description.innerHTML=food_description;
}
