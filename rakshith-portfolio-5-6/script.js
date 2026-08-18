const loader=document.getElementById("loader");
window.addEventListener("load",()=>setTimeout(()=>loader.classList.add("hide"),850));

const dot=document.querySelector(".cursor-dot"), ring=document.querySelector(".cursor-ring"), glow=document.querySelector(".cursor-glow");
let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my,gx=mx,gy=my;
addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY});
function cursorLoop(){rx+=(mx-rx)*.16;ry+=(my-ry)*.16;gx+=(mx-gx)*.06;gy+=(my-gy)*.06;dot.style.left=mx+"px";dot.style.top=my+"px";ring.style.left=rx+"px";ring.style.top=ry+"px";glow.style.left=gx+"px";glow.style.top=gy+"px";requestAnimationFrame(cursorLoop)}cursorLoop();

document.querySelectorAll("a,.skill-card,.project-card,.cert-card").forEach(el=>{
  el.addEventListener("mouseenter",()=>{ring.style.width="52px";ring.style.height="52px"});
  el.addEventListener("mouseleave",()=>{ring.style.width="31px";ring.style.height="31px"});
});

const portrait=document.getElementById("portrait");
portrait.addEventListener("mousemove",e=>{const r=portrait.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;portrait.style.transform=`perspective(900px) rotateY(${x*5}deg) rotateX(${y*-5}deg)`});
portrait.addEventListener("mouseleave",()=>portrait.style.transform="");

document.querySelectorAll(".magnetic").forEach(el=>{
  el.addEventListener("mousemove",e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)*.12,y=(e.clientY-r.top-r.height/2)*.12;el.style.transform=`translate(${x}px,${y}px)`});
  el.addEventListener("mouseleave",()=>el.style.transform="");
});

const menu=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav-links");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const sections=[...document.querySelectorAll("section[id]")],links=[...document.querySelectorAll(".nav-links a")];
addEventListener("scroll",()=>{
  let current="home";
  sections.forEach(s=>{if(scrollY>=s.offsetTop-260)current=s.id});
  links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current));
});

document.querySelectorAll(".project-clickable").forEach(card=>{
  const go=()=>{const u=card.dataset.projectUrl;if(u)location.href=u};
  card.addEventListener("click",e=>{if(!e.target.closest(".project-arrow"))go()});
  card.addEventListener("keydown",e=>{
    if((e.key==="Enter"||e.key===" ")&&!e.target.closest(".project-arrow")){
      e.preventDefault();go();
    }
  });
});
