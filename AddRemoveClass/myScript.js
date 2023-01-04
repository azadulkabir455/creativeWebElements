let myBtn = document.getElementById("mybtn");
let myBtntwo = document.getElementById("mybtntwo")
let myBtnThree = document.getElementById("mybtnthree")
let ul = document.getElementById("ul");
let span = document.getElementById("span");

// myBtn.addEventListener("click", () => {
//     if(span.style.color == "black") {
//         span.style.color = "white"
//     }else {
//         span.style.color = "black"
//     }
    
// })

myBtn.addEventListener("click", () => {
    span.classList.add("active")
})

myBtntwo.addEventListener('click', () => {
    span.classList.remove("active")
})

myBtnThree.addEventListener("click", () => {
    span.classList.toggle("active")
})


let paginationContainer = document.getElementById("paginationContainer");
let paginations = paginationContainer.getElementsByClassName("pagination");

for(let i = 0; i < paginations.length; i++) {
    paginations[i].addEventListener("click", function(){
        let current = paginationContainer.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active"
    });
}