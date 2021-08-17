const man = document.getElementById("man");
const obs = document.getElementById("obs");
var counter = 0;

document.addEventListener("keydown", function(event) {
    jump();
});
function jump () {
    counter++
    console.log("counter")
    if(man.classList != "jump") {
        man.classList.add("jump")
    }
    setTimeout(function() {
        man.classList.remove("jump")
    }, 300)
}
let isAlive = setInterval ( function() {
    let manTop = parseInt(window.getComputedStyle(man).getPropertyValue("top"));
    let obsLeft = parseInt(window.getComputedStyle(obs).getPropertyValue("left"));

    if(obsLeft < 36 && obsLeft > 0 && manTop >= 140) {
        alert("Game over")
    }
},10)
