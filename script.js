//intializing locomotive scroll for smooth scrolling of webpage.
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});  

//function for the initial loading animation using gsap.
function loadinganimation(){
    gsap.from("#page1 h1",{
    y:100,
    opacity:0,
    delay:0.10,
    duration:0.9,
    stagger:0.3
})  
gsap.from("#page1 h5",{
    y:100,
    opacity:0,
    delay:0.7,
    duration:0.8,
})  
gsap.from("#page1 #video-container",{
    scale:0.9,
    opacity:0,
    delay:0.9,
    duration:0.5,
   
})    
}
loadinganimation();

//function for making an element follow the mouse while moving.
function gollMouseFollow(){
    window.addEventListener("mousemove", function(dets) {
        document.querySelector("#goll").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}
gollMouseFollow();

//update position of cursor on mouse move.
document.addEventListener("mousemove", function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })
})

//function to apply bubble effect on mouse enter and leave for selected elements.
function bubblepointer(){
   document.querySelector("#sqr1").addEventListener("mouseenter", function(){
    gsap.to("#cursor",{
        transform: `translate(-50%, -50%) scale(1)`
    })
})
document.querySelector("#sqr1").addEventListener("mouseleave", function(){
    gsap.to("#cursor",{
        transform: `translate(-50%, -50%) scale(0)`
    })
})

document.querySelector("#sqr2").addEventListener("mouseenter", function(){
    gsap.to("#cursor",{
        transform: `translate(-50%, -50%) scale(1)`
    })
})
document.querySelector("#sqr2").addEventListener("mouseleave", function(){
    gsap.to("#cursor",{
        transform: `translate(-50%, -50%) scale(0)`
    })
}) 

document.querySelector("#sqr3").addEventListener("mouseenter", function(){
    gsap.to("#cursor",{
        transform: `translate(-50%, -50%) scale(1)`
    })
})
document.querySelector("#sqr3").addEventListener("mouseleave", function(){
    gsap.to("#cursor",{
        transform: `translate(-50%, -50%) scale(0)`
    })
}) 

document.querySelector("#sqr4").addEventListener("mouseenter", function(){
    gsap.to("#cursor",{
        transform: `translate(-50%, -50%) scale(1)`
    })
})
document.querySelector("#sqr4").addEventListener("mouseleave", function(){
    gsap.to("#cursor",{
        transform: `translate(-50%, -50%) scale(0)`
    })
}) 


}
bubblepointer();


//Similar event listeners for (sqr1, ...). event listener for about element.
document.querySelector("#about").addEventListener("mouseenter", function(){
    gsap.to("#cursor",{
        transform: `translate(-50%, -50%) scale(1)`
    })
})
document.querySelector("#about").addEventListener("mouseleave", function(){
    gsap.to("#cursor",{
        transform: `translate(-50%, -50%) scale(0)`
    })
})


//slider function with next and previous buttons.
const slides = document.querySelectorAll(".slides")
var counter = 0;

slides.forEach((slides,index) => {
    slides.style.left = `${index * 100}%`
})

const goPrev = () => {
    counter--
    slidesImage()
}

const goNext = () => {
    counter++
    slidesImage()
}

const slidesImage = () => {
    slides.forEach((slides) => {
        slides.style.transform = `translateX(-${counter * 100}%)`
    })
}