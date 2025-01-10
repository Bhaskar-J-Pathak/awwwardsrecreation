const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var elemC = document.querySelector(".elem-con")
var fixed = document.querySelector("#fixed-img")

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    var img = e.getAttribute("data-image")
    e.addEventListener("mouseenter",function(){
        fixed.style.display = "block"
        fixed.style.backgroundImage = `url(${img})`
        fixed.addEventListener("mouseenter",function(){
            fixed.style.display = "block";
        })
    })
    e.addEventListener("mouseleave",function(){
        fixed.style.display = "none" 
    })
    fixed.addEventListener("mouseleave",function(){
        fixed.style.display = "none";
    })
})