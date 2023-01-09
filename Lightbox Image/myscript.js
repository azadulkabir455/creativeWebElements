let modal = document.getElementById("myModal");
let myImg = document.getElementById("myImg");
let modalImg = document.getElementById("modalImg");
let captionText = document.getElementById("caption");
console.log(captionText)

myImg.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

})

let closBtn = document.getElementsByClassName("close")[0];

closBtn.addEventListener("click", function() {
    modal.style.display = "none"
})

// If you close anywhere click except img
window.addEventListener("click", function(event) {
    if(event.target == modal) {
        modal.style.display = "none"
    }
})