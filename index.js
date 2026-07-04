/* empty css                      */import{S as p,N as u,K as g,G as m,R as b}from"./assets/vendor-BXmUUni6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();const r="/STP-13025/",w=[{urldesc:`${r}img/webp/desc/card1.png`,urldescx2:`${r}img/webp/desc/card1@x2.png`,urlmob:`${r}img/webp/mobile/card1.png`,urlmobx2:`${r}img/webp/mobile/card1@2x.png`,desc:"Floating collections of colorful 3D objects"},{urldesc:`${r}img/webp/desc/card2.png`,urldescx2:`${r}img/webp/desc/card2@x2.png`,urlmob:`${r}img/webp/mobile/card2.png`,urlmobx2:`${r}img/webp/mobile/card2@2x.png`,desc:"Dynamic triple-match animations with glowing particles"},{urldesc:`${r}img/webp/desc/card3.png`,urldescx2:`${r}img/webp/desc/card3@x2.png`,urlmob:`${r}img/webp/mobile/card3.png`,urlmobx2:`${r}img/webp/mobile/card3@2x.png`,desc:"Casual mobile UI with modern gradients"},{urldesc:`${r}img/webp/desc/card4.png`,urldescx2:`${r}img/webp/desc/card4@x2.png`,urlmob:`${r}img/webp/mobile/card4.png`,urlmobx2:`${r}img/webp/mobile/card4@2x.png`,desc:"Organized puzzle spaces before and after completion"},{urldesc:`${r}img/webp/desc/card5.png`,urldescx2:`${r}img/webp/desc/card5@x2.png`,urlmob:`${r}img/webp/mobile/card5.png`,urlmobx2:`${r}img/webp/mobile/card5@2x.png`,desc:"Bright toy, candy, and fruit object collections"},{urldesc:`${r}img/webp/desc/card6.png`,urldescx2:`${r}img/webp/desc/card6@x2.png`,urlmob:`${r}img/webp/mobile/card6.png`,urlmobx2:`${r}img/webp/mobile/card6@2x.png`,desc:"Relaxing puzzle environments with soft lighting"}];async function f(){const i=document.querySelector(".slider__wrapper");if(!i){console.error("sliderWrapper не знайдено!");return}i.innerHTML=h(w),document.querySelectorAll(".slider__image"),new p(".slider",{navigation:{nextEl:".gallery-pagination-next",prevEl:".gallery-pagination-prev"},keyboard:!0,on:{init(){l(this)},slideChange(){l(this)}},breakpoints:{300:{slidesPerView:1,slidesPerGroup:1,spaceBetween:0},1440:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24}}})}function l(i){const e=document.querySelector(".gallery-pagination-prev"),a=document.querySelector(".gallery-pagination-next");e.disabled=i.isBeginning,a.disabled=i.isEnd}function h(i){return i.map(e=>`
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
</li>`).join("")}const y=[{name:"Sarah Mitchell",publicationdate:"March 12, 2026",rating:5,publication:"Honestly one of the most satisfying puzzle games I've played. The 3D objects feel real, the animations when you match three are genuinely delightful."},{name:"James Robertson",publicationdate:"April 3, 2025",rating:5,publication:"The soft lighting and colours are so easy on the eyes. Great for winding down before bed."},{name:"Laura Chen",publicationdate:"January 19, 2024",rating:4,publication:"Fun game but pieces are too small on older phones. Would love a size option."},{name:"Daniel Petrov",publicationdate:"February 28, 2026",rating:5,publication:"My kids and I play together every evening. The candy and toy themes keep them hooked, and I love how clean the UI is."},{name:"Amanda Wilson",publicationdate:"April 6, 2025",rating:4,publication:"The glowing particle effects when you complete a level — absolutely stunning. Amazing game!"},{name:"Michael O'Brien",publicationdate:"March 1, 2024",rating:3,publication:"Solid puzzle game. Would appreciate a social sharing feature — I want to show off my scores."}];async function v(){const i=document.querySelector("#reviews__wrapper");if(!i){console.error("sliderWrapper не знайдено!");return}i.innerHTML=$(y),x(i),new p(".reviews-slider",{modules:[u,g,m],slidesPerView:1,spaceBetween:24,slidesPerGroup:1,grid:{rows:3,fill:"row"},navigation:{nextEl:".review-pagination-next",prevEl:".review-pagination-prev"},keyboard:{enabled:!0},on:{init(){c(this)},slideChange(){c(this)}},breakpoints:{1440:{slidesPerView:2,slidesPerGroup:1,spaceBetween:24,grid:{rows:3,fill:"row"}}}})}function x(i){if(!i)return;i.querySelectorAll(".rating-rate").forEach(a=>{const s=a.dataset.rating;new b(a,{score:s,readOnly:!0,half:!0,starType:"i"}).init()})}function c(i){const e=document.querySelector(".review-pagination-prev"),a=document.querySelector(".review-pagination-next");e.disabled=i.isBeginning,a.disabled=i.isEnd}function $(i){return i.map(e=>`
      <li class="swiper-slide">
 <div class="review__slide" >
  <div class="review-item">
    <div class="review-icon">
     <svg viewBox="0 0 32 32" width= "18"  height="18">
              <use href="./img/sprite.svg#icon-bi_people-fill"></use>
            </svg>
    </div>
    <div class="review-block">
      <p class="review-text">${e.name}</p>
      <p class="review-text">${e.publicationdate}</p>
    </div>
  </div>
  <div class="rating-rate" data-rating="${e.rating}"></div>

  <p class="review-text">"${e.publication}"</p>
 </div>
</li>
`).join("")}const d=document.querySelectorAll(".faqs-item input");d.forEach(i=>{i.addEventListener("change",()=>{i.checked&&d.forEach(e=>{e!==i&&(e.checked=!1)})})});f();v();
//# sourceMappingURL=index.js.map
