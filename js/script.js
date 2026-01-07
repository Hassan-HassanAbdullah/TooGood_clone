// nav svg animation

gsap.to(".nav-left svg",{
    transform:"translateY(-100%)",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top -5",
        end:"top -50",
        scrub:2
    }
})
gsap.to(".nav-links",{
    transform:"translateY(-100%)",
    opacity:0,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top -5",
        end:"top -50",
        scrub:2
    }
})
gsap.to(".nav-right .nav-icons",{
    backgroundColor: "#f7f7f7",
    borderRadius:"25px",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top -5",
        end:"top -50",
        scrub:2
    }
})

// refresh animation

gsap.from(".page1 h1", {
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.3
})

gsap.from(".page1 .img-container", {
    scale:0.9,
    opacity:0,
    delay:1.5,
    duration:0.9,
})



// imag containter animation


window.addEventListener("scroll", (e)=>{
    gsap.to (".img",{
        y:scrollY/15,
    });
})



// page4 cursor

document.addEventListener("mousemove", (e)=>{
    
    gsap.to (".cursor",{
        x : e.clientX,
        y : e.clientY,
    });

})

let product =document.querySelectorAll(".product")
product.forEach(product=> {
    product.addEventListener("mouseenter",()=>{
        gsap.to(".cursor",{
            transform: 'translate(-50%,-50%)',
            scale: 1,
            opacity: 1,
            duration:0.5,
            delay:0.5
        })
    })
});
product.forEach(product=> {
    product.addEventListener("mouseleave",()=>{
        gsap.to(".cursor",{
            scale: 0,
            opacity: 0,
            duration:0.5,
            delay:0.5
        })
    })
});






//smooth scroll Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
});