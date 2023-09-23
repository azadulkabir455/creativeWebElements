let sections = document.querySelectorAll(".section");

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY; 
        let offsetTop = section.offsetTop;
        let offsetHeight = section.offsetHeight;
        console.log(top, offsetHeight, offsetTop)
        if(top >= offsetTop - 250 && top < (offsetTop + offsetHeight)) {
            section.classList.add("show")
        }else {
            section.classList.remove("show")
        }
    })
}