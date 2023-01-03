let myBtn = document.getElementById("myBtn")

// function for bring to top

myBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// function for hide show button

window.onscroll = () => {hideButton()}

const hideButton = () => {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        myBtn.style.display = "block";
    }else {
        myBtn.style.display = "none"
    }
}