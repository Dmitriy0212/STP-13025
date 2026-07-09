/* empty css                      */import{S as l,N as g,K as m,G as b,R as f}from"./assets/vendor-BXmUUni6.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const r="/STP-13025/",y=[{urldesc:`${r}img/webp/desc/card1.png`,urldescx2:`${r}img/webp/desc/card1@x2.png`,urlmob:`${r}img/webp/mobile/card1.png`,urlmobx2:`${r}img/webp/mobile/card1@2x.png`,desc:"Floating collections of colorful 3D objects"},{urldesc:`${r}img/webp/desc/card2.png`,urldescx2:`${r}img/webp/desc/card2@x2.png`,urlmob:`${r}img/webp/mobile/card2.png`,urlmobx2:`${r}img/webp/mobile/card2@2x.png`,desc:"Dynamic triple-match animations with glowing particles"},{urldesc:`${r}img/webp/desc/card3.png`,urldescx2:`${r}img/webp/desc/card3@x2.png`,urlmob:`${r}img/webp/mobile/card3.png`,urlmobx2:`${r}img/webp/mobile/card3@2x.png`,desc:"Casual mobile UI with modern gradients"},{urldesc:`${r}img/webp/desc/card4.png`,urldescx2:`${r}img/webp/desc/card4@x2.png`,urlmob:`${r}img/webp/mobile/card4.png`,urlmobx2:`${r}img/webp/mobile/card4@2x.png`,desc:"Organized puzzle spaces before and after completion"},{urldesc:`${r}img/webp/desc/card5.png`,urldescx2:`${r}img/webp/desc/card5@x2.png`,urlmob:`${r}img/webp/mobile/card5.png`,urlmobx2:`${r}img/webp/mobile/card5@2x.png`,desc:"Bright toy, candy, and fruit object collections"},{urldesc:`${r}img/webp/desc/card6.png`,urldescx2:`${r}img/webp/desc/card6@x2.png`,urlmob:`${r}img/webp/mobile/card6.png`,urlmobx2:`${r}img/webp/mobile/card6@2x.png`,desc:"Relaxing puzzle environments with soft lighting"}];async function h(){const e=document.querySelector("[data-gallery-swiper-wrapper]");if(!e){console.error("sliderWrapper не знайдено!");return}e.innerHTML=v(y),document.querySelectorAll("[data-gallery-slider]"),new l(".slider",{navigation:{nextEl:"[data-gallery-swiper-next]",prevEl:"[data-gallery-swiper-prev]"},keyboard:!0,on:{init(){c(this)},slideChange(){c(this)}},breakpoints:{300:{slidesPerView:1,slidesPerGroup:1,spaceBetween:0},1440:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24}}})}function c(e){const i=document.querySelector("[data-gallery-swiper-prev]"),n=document.querySelector("[data-gallery-swiper-next]");i.disabled=e.isBeginning,n.disabled=e.isEnd}function v(e){return e.map(i=>`
<li class="slider-slide swiper-slide">
  <div class="slider__img-wrapper gallery-img">
    <picture>
      <!-- mobile -->
      <source
        media="(max-width: 767px)"
        srcset="${i.urlmob} 1x, ${i.urlmobx2} 2x"
      />

      <!-- desktop -->
      <source
        media="(min-width: 768px)"
        srcset="${i.urldesc} 1x, ${i.urldescx2} 2x"
      />

      <img
      data-gallery-slider
        class="slider__image"
        src="${i.urldesc}"
        srcset="${i.urldescx2} 2x"
        alt="${(i.desc||"").replace(/"/g,"").trim()}"
      />
    </picture>
  </div>

  <p class="slider__desc">${i.desc}</p>
</li>`).join("")}const x=[{name:"Sarah Mitchell",publicationdate:"March 12, 2026",rating:5,publication:"Honestly one of the most satisfying puzzle games I've played. The 3D objects feel real, the animations when you match three are genuinely delightful."},{name:"James Robertson",publicationdate:"April 3, 2025",rating:5,publication:"The soft lighting and colours are so easy on the eyes. Great for winding down before bed."},{name:"Laura Chen",publicationdate:"January 19, 2024",rating:4,publication:"Fun game but pieces are too small on older phones. Would love a size option."},{name:"Daniel Petrov",publicationdate:"February 28, 2026",rating:5,publication:"My kids and I play together every evening. The candy and toy themes keep them hooked, and I love how clean the UI is."},{name:"Amanda Wilson",publicationdate:"April 6, 2025",rating:4,publication:"The glowing particle effects when you complete a level — absolutely stunning. Amazing game!"},{name:"Michael O'Brien",publicationdate:"March 1, 2024",rating:3,publication:"Solid puzzle game. Would appreciate a social sharing feature — I want to show off my scores."}];async function $(){const e=document.querySelector("[data-reviews-swiper]");if(!e){console.error("sliderWrapper не знайдено!");return}e.innerHTML=S(x),B(e),new l("[data-reviews]",{modules:[g,m,b],slidesPerView:1,spaceBetween:24,slidesPerGroup:1,grid:{rows:3,fill:"row"},navigation:{nextEl:"[data-review-pagination-next]",prevEl:"[data-review-pagination-prev]"},keyboard:{enabled:!0},on:{init(){d(this)},slideChange(){d(this)}},breakpoints:{1440:{slidesPerView:2,slidesPerGroup:1,spaceBetween:24,grid:{rows:3,fill:"row"}}}})}function B(e){if(!e)return;e.querySelectorAll("[data-rating-rate]").forEach(n=>{const o=n.dataset.rating;new f(n,{score:o,readOnly:!0,half:!0,starType:"i"}).init()})}function d(e){const i=document.querySelector("[data-review-pagination-prev]"),n=document.querySelector("[data-review-pagination-next]");i.disabled=e.isBeginning,n.disabled=e.isEnd}function S(e){return e.map(i=>`
      <li class="swiper-slide review__slide">


 </div>
  <div class="review-item">
    <div class="review-icon">
     <svg viewBox="0 0 32 32" width= "18"  height="18">
              <use href="./img/sprite.svg#icon-bi_people-fill"></use>
            </svg>
    </div>
    <div class="review-block">
      <p class="review-text">${i.name}</p>
      <p class="review-text">${i.publicationdate}</p>
    </div>
  </div>
  <div data-rating-rate class="rating-rate" data-rating="${i.rating}"></div>

  <p class="review-text">"${i.publication}"</p>
</li>
`).join("")}const p=document.querySelectorAll(".faqs-item input");p.forEach(e=>{e.addEventListener("change",()=>{e.checked&&p.forEach(i=>{i!==e&&(i.checked=!1)})})});async function E(){new l("[data-swiper-how-to-play]",{modules:[g,m,b],navigation:{prevEl:"[data-how-to-play-pagination-prev]",nextEl:"[data-how-to-play-pagination-next]"},keyboard:{enabled:!0},on:{init(){u(this)},slideChange(){u(this)}},breakpoints:{300:{slidesPerView:1,slidesPerGroup:1,spaceBetween:24,grid:{rows:3,fill:"row"}},1440:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24,grid:{rows:3,fill:"row"}}}})}function u(e){const i=document.querySelector("[data-how-to-play-pagination-prev]"),n=document.querySelector("[data-how-to-play-pagination-next]");i.disabled=e.isBeginning,n.disabled=e.isEnd}const P=document.querySelector('[data-action="open"]'),q=document.querySelector('[data-action="close"]'),w=document.querySelector("[data-visible]");P.addEventListener("click",e=>{w.dataset.visible="open"});q.addEventListener("click",e=>{w.dataset.visible="close"});h();$();E();
//# sourceMappingURL=index.js.map
