
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