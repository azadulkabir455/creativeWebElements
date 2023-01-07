let prevScrollPosition = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPosition = window.pageYOffset;
    let navDiv = document.getElementById("nav");
    if(prevScrollPosition > currentScrollPosition) {
        navDiv.style.top = "0";
    }else {
        navDiv.style.top= "-42px";
    }
    

    prevScrollPosition = currentScrollPosition;
}