/* ===== Shared site script ===== */
const PHONE = "381643288274";
const EMAIL = "sportpoint@live.de";

const MSG = {
  sr:{ wa:"Zdravo, zanima me Golf Training trener za puttovanje. Možete li mi poslati cenu i dostupnost?",
       sub:"Upit: Golf Training trener za puttovanje" },
  en:{ wa:"Hello, I'm interested in the Golf Training putting trainer. Could you send me the price and availability?",
       sub:"Inquiry: Golf Training putting trainer" }
};

function buildLinks(lang){
  const wa = document.querySelectorAll("[data-order='wa']");
  const ml = document.querySelectorAll("[data-order='mail']");
  wa.forEach(a=>a.href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MSG[lang].wa)}`);
  ml.forEach(a=>a.href = `mailto:${EMAIL}?subject=${encodeURIComponent(MSG[lang].sub)}`);
}

function setLang(l){
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
  const isVideo=/\.(mp4|webm|mov)$/i.test(src);
  if(isVideo){
    if(vid){ vid.src=src; vid.style.display="block"; vid.play().catch(()=>{}); }
    if(main) main.style.display="none";
  }else{
    if(main){ main.src=src; main.style.display="block"; }
    if(vid){ vid.pause(); vid.removeAttribute("src"); vid.load(); vid.style.display="none"; }
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

document.addEventListener("DOMContentLoaded",()=>{
  const y=document.getElementById("year"); if(y) y.textContent=new Date().getFullYear();
  setLang("sr");
  initQuotes();
});
