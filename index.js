/* empty css                      */import{S as a,N as p,K as m,G as g}from"./assets/vendor-dE20EK09.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))d(c);new MutationObserver(c=>{for(const s of c)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&d(t)}).observe(document,{childList:!0,subtree:!0});function n(c){const s={};return c.integrity&&(s.integrity=c.integrity),c.referrerPolicy&&(s.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?s.credentials="include":c.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(c){if(c.ep)return;c.ep=!0;const s=n(c);fetch(c.href,s)}})();const r="/STP-13025/",u=[{urldesc:`${r}img/webp/desc/card1.png`,urldescx2:`${r}img/webp/desc/card1@x2.png`,urlmob:`${r}img/webp/mobile/card1.png`,urlmobx2:`${r}img/webp/mobile/card1@2x.png`,desc:"Floating collections of colorful 3D objects"},{urldesc:`${r}img/webp/desc/card2.png`,urldescx2:`${r}img/webp/desc/card2@x2.png`,urlmob:`${r}img/webp/mobile/card2.png`,urlmobx2:`${r}img/webp/mobile/card2@2x.png`,desc:"Dynamic triple-match animations with glowing particles"},{urldesc:`${r}img/webp/desc/card3.png`,urldescx2:`${r}img/webp/desc/card3@x2.png`,urlmob:`${r}img/webp/mobile/card3.png`,urlmobx2:`${r}img/webp/mobile/card3@2x.png`,desc:"Casual mobile UI with modern gradients"},{urldesc:`${r}img/webp/desc/card4.png`,urldescx2:`${r}img/webp/desc/card4@x2.png`,urlmob:`${r}img/webp/mobile/card4.png`,urlmobx2:`${r}img/webp/mobile/card4@2x.png`,desc:"Organized puzzle spaces before and after completion"},{urldesc:`${r}img/webp/desc/card5.png`,urldescx2:`${r}img/webp/desc/card5@x2.png`,urlmob:`${r}img/webp/mobile/card5.png`,urlmobx2:`${r}img/webp/mobile/card5@2x.png`,desc:"Bright toy, candy, and fruit object collections"},{urldesc:`${r}img/webp/desc/card6.png`,urldescx2:`${r}img/webp/desc/card6@x2.png`,urlmob:`${r}img/webp/mobile/card6.png`,urlmobx2:`${r}img/webp/mobile/card6@2x.png`,desc:"Relaxing puzzle environments with soft lighting"}];async function b(){const i=document.querySelector(".slider__wrapper");if(!i){console.error("sliderWrapper не знайдено!");return}i.innerHTML=w(u),document.querySelectorAll(".slider__image"),new a(".slider",{navigation:{nextEl:".gallery-pagination-next",prevEl:".gallery-pagination-prev"},keyboard:!0,on:{init(){l(this)},slideChange(){l(this)}},breakpoints:{300:{slidesPerView:1,slidesPerGroup:1,spaceBetween:0},1440:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24}}})}function l(i){const e=document.querySelector(".gallery-pagination-prev"),n=document.querySelector(".gallery-pagination-next");e.disabled=i.isBeginning,n.disabled=i.isEnd}function w(i){return i.map(e=>`
<li class="slider__slide swiper-slide">
  <div class="slider__img-wrapper gallery-img">
    <picture>
      <!-- mobile -->
      <source
        media="(max-width: 767px)"
        srcset="${e.urlmob} 1x, ${e.urlmobx2} 2x"
      />

      <!-- desktop -->
      <source
        media="(min-width: 768px)"
        srcset="${e.urldesc} 1x, ${e.urldescx2} 2x"
      />

      <img
        class="slider__image"
        src="${e.urldesc}"
        srcset="${e.urldescx2} 2x"
        alt="${(e.desc||"").replace(/"/g,"").trim()}"
      />
    </picture>
  </div>

  <p class="slider__desc">${e.desc}</p>
</li>`).join("")}const x=[{urldesc:"./img/webp/desc/card1.png",urldescx2:"./img/webp/desc/card1@x2.png",urlmob:"./img/webp/mobile/card1.png",urlmobx2:"./img/webp/mobile/card1@2x.png",desc:"Floating collections of colorful 3D objects"},{urldesc:"./img/webp/desc/card2.png",urldescx2:"./img/webp/desc/card2@x2.png",urlmob:"./img/webp/mobile/card2.png",urlmobx2:"./img/webp/mobile/card2@2x.png",desc:"Dynamic triple-match animations with glowing particles"},{urldesc:"./img/webp/desc/card3.png",urldescx2:"./img/webp/desc/card3@x2.png",urlmob:"./img/webp/mobile/card3.png",urlmobx2:"./img/webp/mobile/card3@2x.png",desc:"Casual mobile UI with modern gradients"},{urldesc:"./img/webp/desc/card4.png",urldescx2:"./img/webp/desc/card4@x2.png",urlmob:"./img/webp/mobile/card4.png",urlmobx2:"./img/webp/mobile/card4@2x.png",desc:"Organized puzzle spaces before and after completion"},{urldesc:"./img/webp/desc/card5.png",urldescx2:"./img/webp/desc/card5@x2.png",urlmob:"./img/webp/mobile/card5.png",urlmobx2:"./img/webp/mobile/card5@2x.png",desc:"Bright toy, candy, and fruit object collections"},{urldesc:"./img/webp/desc/card6.png",urldescx2:"./img/webp/desc/card6@x2.png",urlmob:"./img/webp/mobile/card6.png",urlmobx2:"./img/webp/mobile/card6@2x.png",desc:"Relaxing puzzle environments with soft lighting"}];async function f(){const i=document.querySelector("#reviews__wrapper");if(!i){console.error("sliderWrapper не знайдено!");return}i.innerHTML=$(x),document.querySelectorAll(".slider__image"),i.addEventListener("click",e=>{const n=e.target.closest(".furnitures-item__btn");if(!n)return;const d=n.dataset.id;productmodalRender(d)}),new a(".reviews-slider",{modules:[p,m,g],slidesPerView:1,spaceBetween:0,slidesPerGroup:1,grid:{rows:3,fill:"row"},navigation:{nextEl:".review-pagination-next",prevEl:".review-pagination-prev"},keyboard:{enabled:!0},on:{init(){o(this)},slideChange(){o(this)}},breakpoints:{1440:{slidesPerView:2,slidesPerGroup:1,spaceBetween:24,grid:{rows:3,fill:"row"}}}})}function o(i){const e=document.querySelector(".review-pagination-prev"),n=document.querySelector(".review-pagination-next");e.disabled=i.isBeginning,n.disabled=i.isEnd}function $(i){return i.map(e=>`
<li class="slider__slide swiper-slide">
  <div class="slider__img-wrapper gallery-img">
    <picture>
      <!-- mobile -->
      <source
        media="(max-width: 767px)"
        srcset="${e.urlmob} 1x, ${e.urlmobx2} 2x"
      />

      <!-- desktop -->
      <source
        media="(min-width: 768px)"
        srcset="${e.urldesc} 1x, ${e.urldescx2} 2x"
      />

      <img
        class="slider__image"
        src="${e.urldesc}"
        srcset="${e.urldescx2} 2x"
        alt="${(e.desc||"").replace(/"/g,"").trim()}"
      />
    </picture>
  </div>

  <p class="slider__desc">${e.desc}</p>
</li>`).join("")}function y(){document.addEventListener("DOMContentLoaded",async()=>{await b(),await f()})}y();
//# sourceMappingURL=index.js.map
