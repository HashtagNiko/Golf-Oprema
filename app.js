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
  if(main){ main.src=src; }
  document.querySelectorAll(".thumbs img").forEach(i=>i.classList.remove("active"));
  if(el) el.classList.add("active");
}

document.addEventListener("DOMContentLoaded",()=>{
  const y=document.getElementById("year"); if(y) y.textContent=new Date().getFullYear();
  setLang("sr");
});
