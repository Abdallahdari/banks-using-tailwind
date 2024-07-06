const navbar = document.querySelector(".navbar");
const main=document.querySelector(".main")
main.classList.remove("fixed","bg-white","shadow-md")
console.log(main) ;
const mouse = function(e) {
    if (e.target.classList.contains("item")) {
        const click = e.target;
const siblings=click.closest(".links").querySelectorAll(".item")
const logo=click.closest(".navbar").querySelector(".logo")
siblings.forEach(el=>{
    if(el!==click){
        el.style.opacity=this
    }
    else{
        el.style.opacity=1

}
})
logo.style.opacity=this
    }
};



navbar.addEventListener("mouseover", mouse.bind(0.5));
navbar.addEventListener("mouseout", mouse.bind(1));


// sticy navbar
const header=document.querySelector(".header")
console.log(header) ;
const sticky=function(enteries){
    const [entry]=enteries
if(!entry.isIntersecting) main.classList.add("fixed","bg-white","shadow-md")

    else{
        main.classList.remove("fixed","bg-white","shadow-md")

    }
}
const headerobserve=new IntersectionObserver(sticky,{
root:null,
threshold:0
})
headerobserve.observe(header)
// finishing the sticy navbar 


// loading lazy image 
const imageTargets = document.querySelectorAll('img[data-src]');

const loadImage = function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
    });
};

const imageObserver = new IntersectionObserver(loadImage, {
    root: null,
    threshold: 0,
    rootMargin: '200px'
});

imageTargets.forEach(img => {
    imageObserver.observe(img);
});
// tabs



const operationTabs = document.querySelectorAll(".operations-tab");
const operationCon = document.querySelector(".operations-container");
const tabContent = document.querySelectorAll(".operations__content");


operationCon.addEventListener("click", function(e) {
  const clicked = e.target.closest(".operations-tab");

  if (!clicked) return;

  // Remove active class from all tabs and content
  operationTabs.forEach(tab => tab.classList.remove("activetab"));
tabContent.forEach(t=>t.classList.add("hide")) 
  // Add active class to the clicked tab and corresponding content
  clicked.classList.add("activetab");
const show=document.querySelector(`.operations__content--${clicked.dataset.tab}`)
show.classList.remove("hide")
show.classList.add("operations__content--active")
});
