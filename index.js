/* empty css                      */import{S as p,N as m,K as g,G as u}from"./assets/vendor-dE20EK09.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function d(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(s){if(s.ep)return;s.ep=!0;const n=d(s);fetch(s.href,n)}})();const r="/STP-13025/",b=[{urldesc:`${r}img/webp/desc/card1.png`,urldescx2:`${r}img/webp/desc/card1@x2.png`,urlmob:`${r}img/webp/mobile/card1.png`,urlmobx2:`${r}img/webp/mobile/card1@2x.png`,desc:"Floating collections of colorful 3D objects"},{urldesc:`${r}img/webp/desc/card2.png`,urldescx2:`${r}img/webp/desc/card2@x2.png`,urlmob:`${r}img/webp/mobile/card2.png`,urlmobx2:`${r}img/webp/mobile/card2@2x.png`,desc:"Dynamic triple-match animations with glowing particles"},{urldesc:`${r}img/webp/desc/card3.png`,urldescx2:`${r}img/webp/desc/card3@x2.png`,urlmob:`${r}img/webp/mobile/card3.png`,urlmobx2:`${r}img/webp/mobile/card3@2x.png`,desc:"Casual mobile UI with modern gradients"},{urldesc:`${r}img/webp/desc/card4.png`,urldescx2:`${r}img/webp/desc/card4@x2.png`,urlmob:`${r}img/webp/mobile/card4.png`,urlmobx2:`${r}img/webp/mobile/card4@2x.png`,desc:"Organized puzzle spaces before and after completion"},{urldesc:`${r}img/webp/desc/card5.png`,urldescx2:`${r}img/webp/desc/card5@x2.png`,urlmob:`${r}img/webp/mobile/card5.png`,urlmobx2:`${r}img/webp/mobile/card5@2x.png`,desc:"Bright toy, candy, and fruit object collections"},{urldesc:`${r}img/webp/desc/card6.png`,urldescx2:`${r}img/webp/desc/card6@x2.png`,urlmob:`${r}img/webp/mobile/card6.png`,urlmobx2:`${r}img/webp/mobile/card6@2x.png`,desc:"Relaxing puzzle environments with soft lighting"}];async function w(){const c=document.querySelector(".slider__wrapper");if(!c){console.error("sliderWrapper не знайдено!");return}c.innerHTML=x(b),document.querySelectorAll(".slider__image"),new p(".slider",{navigation:{nextEl:".gallery-pagination-next",prevEl:".gallery-pagination-prev"},keyboard:!0,on:{init(){t(this)},slideChange(){t(this)}},breakpoints:{300:{slidesPerView:1,slidesPerGroup:1,spaceBetween:0},1440:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24}}})}function t(c){const e=document.querySelector(".gallery-pagination-prev"),d=document.querySelector(".gallery-pagination-next");e.disabled=c.isBeginning,d.disabled=c.isEnd}function x(c){return c.map(e=>`
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
</li>`).join("")}const i="/STP-13025/",$=[{urldesc:`${i}img/webp/desc/card1.png`,urldescx2:`${i}img/webp/desc/card1@x2.png`,urlmob:`${i}img/webp/mobile/card1.png`,urlmobx2:`${i}img/webp/mobile/card1@2x.png`,desc:"Floating collections of colorful 3D objects"},{urldesc:`${i}img/webp/desc/card2.png`,urldescx2:`${i}img/webp/desc/card2@x2.png`,urlmob:`${i}img/webp/mobile/card2.png`,urlmobx2:`${i}img/webp/mobile/card2@2x.png`,desc:"Dynamic triple-match animations with glowing particles"},{urldesc:`${i}img/webp/desc/card3.png`,urldescx2:`${i}img/webp/desc/card3@x2.png`,urlmob:`${i}img/webp/mobile/card3.png`,urlmobx2:`${i}img/webp/mobile/card3@2x.png`,desc:"Casual mobile UI with modern gradients"},{urldesc:`${i}img/webp/desc/card4.png`,urldescx2:`${i}img/webp/desc/card4@x2.png`,urlmob:`${i}img/webp/mobile/card4.png`,urlmobx2:`${i}img/webp/mobile/card4@2x.png`,desc:"Organized puzzle spaces before and after completion"},{urldesc:`${i}img/webp/desc/card5.png`,urldescx2:`${i}img/webp/desc/card5@x2.png`,urlmob:`${i}img/webp/mobile/card5.png`,urlmobx2:`${i}img/webp/mobile/card5@2x.png`,desc:"Bright toy, candy, and fruit object collections"},{urldesc:`${i}img/webp/desc/card6.png`,urldescx2:`${i}img/webp/desc/card6@x2.png`,urlmob:`${i}img/webp/mobile/card6.png`,urlmobx2:`${i}img/webp/mobile/card6@2x.png`,desc:"Relaxing puzzle environments with soft lighting"}];async function f(){const c=document.querySelector("#reviews__wrapper");if(!c){console.error("sliderWrapper не знайдено!");return}c.innerHTML=y($),document.querySelectorAll(".slider__image"),c.addEventListener("click",e=>{const d=e.target.closest(".furnitures-item__btn");if(!d)return;const l=d.dataset.id;productmodalRender(l)}),new p(".reviews-slider",{modules:[m,g,u],slidesPerView:1,spaceBetween:0,slidesPerGroup:1,grid:{rows:3,fill:"row"},navigation:{nextEl:".review-pagination-next",prevEl:".review-pagination-prev"},keyboard:{enabled:!0},on:{init(){a(this)},slideChange(){a(this)}},breakpoints:{1440:{slidesPerView:2,slidesPerGroup:1,spaceBetween:24,grid:{rows:3,fill:"row"}}}})}function a(c){const e=document.querySelector(".review-pagination-prev"),d=document.querySelector(".review-pagination-next");e.disabled=c.isBeginning,d.disabled=c.isEnd}function y(c){return c.map(e=>`
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
</li>`).join("")}w();f();
//# sourceMappingURL=index.js.map
