var scroll = document.getElementById("scrolltotop");
var rootElement = document.documentElement;
function scrolltop() {
    rootElement.scrollTop({
        top:0,
        behaviour:"smooth"
    });
}
scroll.addEventListener("click",scrolltop);