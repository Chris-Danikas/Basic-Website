
// When the user scrolls the page, execute stickyNavBarFunction;
window.onscroll = function(){stickyNavBarFunction()};
// Get the navbar
var navbar = document.getElementById("navigationBarID");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. 
//Remove "sticky" when you leave the scroll position
function stickyNavBarFunction(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}
console.log(navbar.offsetTop)


window.addEventListener("DOMContentLoaded", scrollLoop, false);

var text = document.getElementById("Text");
var trees = document.getElementById("Trees");
var me = document.getElementById("me");

var xScrollPosition;
var yScrollPosition;

function scrollLoop(e){
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;

    setTranslate(0, yScrollPosition * -4, text);
    setTranslate(0, yScrollPosition * 0.2, trees);
    setTranslate(0, yScrollPosition * 0.7, me);

    requestAnimationFrame(scrollLoop);
}

function setTranslate(xPos, yPos, el){
    el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}


