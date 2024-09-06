//variables
let btn = document.getElementById("open-button");
let mc = document.getElementById("modcontainer");
let closebtn = document.getElementById("closebtn");
//event listener
btn.addEventListener('click', function() {
    mc.style.display = 'block';
})

closebtn.addEventListener('click', function() {
    mc.style.display = 'none';
})