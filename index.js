/* empty css                      */import{S as l,N as a,K as p,G as m}from"./assets/vendor-dE20EK09.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function c(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=c(i);fetch(i.href,s)}})();const g=[{urldesc:"/img/webp/desc/card1.png",urldescx2:"/img/webp/desc/card1@x2.png",urlmob:"/img/webp/mobile/card1.png",urlmobx2:"/img/webp/mobile/card1@2x.png",desc:"Floating collections of colorful 3D objects"},{urldesc:"/img/webp/desc/card2.png",urldescx2:"/img/webp/desc/card2@x2.png",urlmob:"/img/webp/mobile/card2.png",urlmobx2:"/img/webp/mobile/card2@2x.png",desc:"Dynamic triple-match animations with glowing particles"},{urldesc:"/img/webp/desc/card3.png",urldescx2:"/img/webp/desc/card3@x2.png",urlmob:"/img/webp/mobile/card3.png",urlmobx2:"/img/webp/mobile/card3@2x.png",desc:"Casual mobile UI with modern gradients"},{urldesc:"/img/webp/desc/card4.png",urldescx2:"/img/webp/desc/card4@x2.png",urlmob:"/img/webp/mobile/card4.png",urlmobx2:"/img/webp/mobile/card4@2x.png",desc:"Organized puzzle spaces before and after completion"},{urldesc:"/img/webp/desc/card5.png",urldescx2:"/img/webp/desc/card5@x2.png",urlmob:"/img/webp/mobile/card5.png",urlmobx2:"/img/webp/mobile/card5@2x.png",desc:"Bright toy, candy, and fruit object collections"},{urldesc:"/img/webp/desc/card6.png",urldescx2:"/img/webp/desc/card6@x2.png",urlmob:"/img/webp/mobile/card6.png",urlmobx2:"/img/webp/mobile/card6@2x.png",desc:"Relaxing puzzle environments with soft lighting"}];async function u(){const r=document.querySelector(".slider__wrapper");if(!r){console.error("sliderWrapper не знайдено!");return}r.innerHTML=b(g),document.querySelectorAll(".slider__image"),r.addEventListener("click",e=>{const c=e.target.closest(".furnitures-item__btn");if(!c)return;const n=c.dataset.id;productmodalRender(n)}),new l(".slider",{navigation:{nextEl:".gallery-pagination-next",prevEl:".gallery-pagination-prev"},keyboard:!0,on:{init(){d(this)},slideChange(){d(this)}},breakpoints:{300:{slidesPerView:1,slidesPerGroup:1,spaceBetween:0},1440:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24}}})}function d(r){const e=document.querySelector(".gallery-pagination-prev"),c=document.querySelector(".gallery-pagination-next");e.disabled=r.isBeginning,c.disabled=r.isEnd}function b(r){return r.map(e=>`
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
</li>`).join("")}const w=[{urldesc:"./img/webp/desc/card1.png",urldescx2:"./img/webp/desc/card1@x2.png",urlmob:"./img/webp/mobile/card1.png",urlmobx2:"./img/webp/mobile/card1@2x.png",desc:"Floating collections of colorful 3D objects"},{urldesc:"./img/webp/desc/card2.png",urldescx2:"./img/webp/desc/card2@x2.png",urlmob:"./img/webp/mobile/card2.png",urlmobx2:"./img/webp/mobile/card2@2x.png",desc:"Dynamic triple-match animations with glowing particles"},{urldesc:"./img/webp/desc/card3.png",urldescx2:"./img/webp/desc/card3@x2.png",urlmob:"./img/webp/mobile/card3.png",urlmobx2:"./img/webp/mobile/card3@2x.png",desc:"Casual mobile UI with modern gradients"},{urldesc:"./img/webp/desc/card4.png",urldescx2:"./img/webp/desc/card4@x2.png",urlmob:"./img/webp/mobile/card4.png",urlmobx2:"./img/webp/mobile/card4@2x.png",desc:"Organized puzzle spaces before and after completion"},{urldesc:"./img/webp/desc/card5.png",urldescx2:"./img/webp/desc/card5@x2.png",urlmob:"./img/webp/mobile/card5.png",urlmobx2:"./img/webp/mobile/card5@2x.png",desc:"Bright toy, candy, and fruit object collections"},{urldesc:"./img/webp/desc/card6.png",urldescx2:"./img/webp/desc/card6@x2.png",urlmob:"./img/webp/mobile/card6.png",urlmobx2:"./img/webp/mobile/card6@2x.png",desc:"Relaxing puzzle environments with soft lighting"}];async function x(){const r=document.querySelector("#reviews__wrapper");if(!r){console.error("sliderWrapper не знайдено!");return}r.innerHTML=f(w),document.querySelectorAll(".slider__image"),r.addEventListener("click",e=>{const c=e.target.closest(".furnitures-item__btn");if(!c)return;const n=c.dataset.id;productmodalRender(n)}),new l(".reviews-slider",{modules:[a,p,m],slidesPerView:1,spaceBetween:0,slidesPerGroup:1,grid:{rows:3,fill:"row"},navigation:{nextEl:".review-pagination-next",prevEl:".review-pagination-prev"},keyboard:{enabled:!0},on:{init(){o(this)},slideChange(){o(this)}},breakpoints:{1440:{slidesPerView:2,slidesPerGroup:1,spaceBetween:24,grid:{rows:3,fill:"row"}}}})}function o(r){const e=document.querySelector(".review-pagination-prev"),c=document.querySelector(".review-pagination-next");e.disabled=r.isBeginning,c.disabled=r.isEnd}function f(r){return r.map(e=>`
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
</li>`).join("")}function y(){document.addEventListener("DOMContentLoaded",async()=>{await u(),await x()})}y();
//# sourceMappingURL=index.js.map
