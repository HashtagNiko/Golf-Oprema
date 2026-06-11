/* ===== Shared site script ===== */
const PHONE = "381643288274";
const EMAIL = "sportpoint@live.de";

const MSG = {
  sr:{ wa:"Zdravo, zanima me PerfectPutt trener za puttovanje (80 €). Da li je dostupan i kako mogu da poručim?",
       sub:"Upit: PerfectPutt" },
  en:{ wa:"Hello, I'm interested in the PerfectPutt putting trainer (€80). Is it available and how can I order?",
       sub:"Inquiry: PerfectPutt" }
};

function buildLinks(lang){
  const wa = document.querySelectorAll("[data-order='wa']");
  const ml = document.querySelectorAll("[data-order='mail']");
  wa.forEach(a=>a.href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MSG[lang].wa)}`);
  ml.forEach(a=>a.href = `mailto:${EMAIL}?subject=${encodeURIComponent(MSG[lang].sub)}`);
}

function setLang(l){
  try{ localStorage.setItem("lang", l); }catch(e){}
  document.documentElement.lang = l;
  const sr=document.getElementById("sr"), en=document.getElementById("en");
  if(sr&&en){ sr.classList.toggle("active",l==="sr"); en.classList.toggle("active",l==="en"); }
  document.querySelectorAll("[data-sr]").forEach(el=>{
    el.innerHTML = el.getAttribute("data-"+l);
  });
  buildLinks(l);
}

function toggleMenu(){ document.getElementById("nav").classList.toggle("open"); }

/* product gallery */
function swapMain(src, el){
  const main=document.getElementById("mainImg");
  const vid=document.getElementById("mainVid");
  const stage=main && main.parentElement;
  const isVideo=/\.(mp4|webm|mov)$/i.test(src);
  if(isVideo){
    if(vid){ vid.src=src; vid.style.display="block"; vid.play().catch(()=>{}); }
    if(main) main.style.display="none";
    if(stage) stage.classList.add("playing-video");
  }else{
    if(main){ main.src=src; main.style.display="block"; }
    if(vid){ vid.pause(); vid.removeAttribute("src"); vid.load(); vid.style.display="none"; }
    if(stage) stage.classList.remove("playing-video");
  }
  document.querySelectorAll(".thumbs img").forEach(i=>i.classList.remove("active"));
  if(el) el.classList.add("active");
}

/* rotating quotes over video */
function initQuotes(){
  const box=document.getElementById("quoteBox");
  const dotsWrap=document.getElementById("quoteDots");
  if(!box) return;
  const quotes=[...box.querySelectorAll(".quote")];
  if(quotes.length<2){ return; }
  let i=0, timer;
  const dots=quotes.map((_,n)=>{
    const b=document.createElement("button");
    b.setAttribute("aria-label","Citat "+(n+1));
    b.addEventListener("click",()=>show(n,true));
    dotsWrap && dotsWrap.appendChild(b);
    return b;
  });
  function show(n,manual){
    quotes[i].classList.remove("active"); dots[i].classList.remove("active");
    i=(n+quotes.length)%quotes.length;
    quotes[i].classList.add("active"); dots[i].classList.add("active");
    if(manual) restart();
  }
  function restart(){ clearInterval(timer); timer=setInterval(()=>show(i+1),6000); }
  dots[0].classList.add("active");
  restart();
}

/* lightbox gallery (product page) */
let lbImages=[], lbI=0;
function lbRender(){
  const img=document.getElementById("lbImg"), idx=document.getElementById("lbIndex");
  if(img) img.src=lbImages[lbI];
  if(idx) idx.textContent=lbI+1;
}
function lbOpen(i){
  const box=document.getElementById("lightbox");
  if(!box||!lbImages.length) return;
  lbI=(i+lbImages.length)%lbImages.length;
  lbRender();
  box.classList.add("open"); box.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
}
function lbStep(d){ if(lbImages.length){ lbI=(lbI+d+lbImages.length)%lbImages.length; lbRender(); } }
function lbClose(){
  const box=document.getElementById("lightbox");
  if(!box) return;
  box.classList.remove("open"); box.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
}
function initLightbox(){
  const box=document.getElementById("lightbox");
  if(!box) return;
  lbImages=[...document.querySelectorAll(".thumbs img:not(.thumb-video)")].map(t=>t.getAttribute("src"));
  const total=document.getElementById("lbTotal"); if(total) total.textContent=lbImages.length;
  const main=document.getElementById("mainImg");
  if(main) main.addEventListener("click",()=>{
    const i=lbImages.indexOf(main.getAttribute("src"));
    lbOpen(i<0?0:i);
  });
  box.addEventListener("click",e=>{ if(e.target===box) lbClose(); });
  document.addEventListener("keydown",e=>{
    if(!box.classList.contains("open")) return;
    if(e.key==="Escape") lbClose();
    else if(e.key==="ArrowLeft") lbStep(-1);
    else if(e.key==="ArrowRight") lbStep(1);
  });
  let x0=null;
  box.addEventListener("touchstart",e=>{ x0=e.touches[0].clientX; },{passive:true});
  box.addEventListener("touchend",e=>{
    if(x0===null) return;
    const dx=e.changedTouches[0].clientX-x0;
    if(Math.abs(dx)>40) lbStep(dx<0?1:-1);
    x0=null;
  },{passive:true});
}

document.addEventListener("DOMContentLoaded",()=>{
  const y=document.getElementById("year"); if(y) y.textContent=new Date().getFullYear();
  let saved="sr"; try{ saved=localStorage.getItem("lang")||"sr"; }catch(e){}
  setLang(saved);
  initQuotes();
  initLightbox();
});
