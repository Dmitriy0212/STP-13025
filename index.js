/* empty css                      */import{S as l,N as m,K as b,G as w,R as f}from"./assets/vendor-BXmUUni6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const i="/STP-13025/",y=[{urldesc:`${i}img/webp/desc/card1.png`,urldescx2:`${i}img/webp/desc/card1@x2.png`,urlmob:`${i}img/webp/mobile/card1.png`,urlmobx2:`${i}img/webp/mobile/card1@2x.png`,desc:"Floating collections of colorful 3D objects"},{urldesc:`${i}img/webp/desc/card2.png`,urldescx2:`${i}img/webp/desc/card2@x2.png`,urlmob:`${i}img/webp/mobile/card2.png`,urlmobx2:`${i}img/webp/mobile/card2@2x.png`,desc:"Dynamic triple-match animations with glowing particles"},{urldesc:`${i}img/webp/desc/card3.png`,urldescx2:`${i}img/webp/desc/card3@x2.png`,urlmob:`${i}img/webp/mobile/card3.png`,urlmobx2:`${i}img/webp/mobile/card3@2x.png`,desc:"Casual mobile UI with modern gradients"},{urldesc:`${i}img/webp/desc/card4.png`,urldescx2:`${i}img/webp/desc/card4@x2.png`,urlmob:`${i}img/webp/mobile/card4.png`,urlmobx2:`${i}img/webp/mobile/card4@2x.png`,desc:"Organized puzzle spaces before and after completion"},{urldesc:`${i}img/webp/desc/card5.png`,urldescx2:`${i}img/webp/desc/card5@x2.png`,urlmob:`${i}img/webp/mobile/card5.png`,urlmobx2:`${i}img/webp/mobile/card5@2x.png`,desc:"Bright toy, candy, and fruit object collections"},{urldesc:`${i}img/webp/desc/card6.png`,urldescx2:`${i}img/webp/desc/card6@x2.png`,urlmob:`${i}img/webp/mobile/card6.png`,urlmobx2:`${i}img/webp/mobile/card6@2x.png`,desc:"Relaxing puzzle environments with soft lighting"}];async function h(){const t=document.querySelector("[data-gallery-swiper-wrapper]");if(!t){console.error("sliderWrapper не знайдено!");return}t.innerHTML=v(y),document.querySelectorAll("[data-gallery-slider]"),new l("[data-swiper]",{navigation:{nextEl:"[data-gallery-swiper-next]",prevEl:"[data-gallery-swiper-prev]"},keyboard:!0,on:{init(){d(this)},slideChange(){d(this)}},breakpoints:{300:{slidesPerView:1,slidesPerGroup:1,spaceBetween:0},1440:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24}}})}function d(t){const e=document.querySelector("[data-gallery-swiper-prev]"),n=document.querySelector("[data-gallery-swiper-next]");e.disabled=t.isBeginning,n.disabled=t.isEnd}function v(t){return t.map(e=>`
<li class="slider-slide swiper-slide">
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
      data-gallery-slider
        class="slider__image"
        src="${e.urldesc}"
        srcset="${e.urldescx2} 2x"
        alt="${(e.desc||"").replace(/"/g,"").trim()}"
      />
    </picture>
  </div>

  <p class="slider__desc">${e.desc}</p>
</li>`).join("")}const x=[{name:"Sarah Mitchell",publicationdate:"March 12, 2026",rating:5,publication:"Honestly one of the most satisfying puzzle games I've played. The 3D objects feel real, the animations when you match three are genuinely delightful."},{name:"James Robertson",publicationdate:"April 3, 2025",rating:5,publication:"The soft lighting and colours are so easy on the eyes. Great for winding down before bed."},{name:"Laura Chen",publicationdate:"January 19, 2024",rating:4,publication:"Fun game but pieces are too small on older phones. Would love a size option."},{name:"Daniel Petrov",publicationdate:"February 28, 2026",rating:5,publication:"My kids and I play together every evening. The candy and toy themes keep them hooked, and I love how clean the UI is."},{name:"Amanda Wilson",publicationdate:"April 6, 2025",rating:4,publication:"The glowing particle effects when you complete a level — absolutely stunning. Amazing game!"},{name:"Michael O'Brien",publicationdate:"March 1, 2024",rating:3,publication:"Solid puzzle game. Would appreciate a social sharing feature — I want to show off my scores."}];async function $(){const t=document.querySelector("[data-reviews-swiper]");if(!t){console.error("sliderWrapper не знайдено!");return}t.innerHTML=B(x),S(t),new l("[data-reviews]",{modules:[m,b,w],slidesPerView:1,spaceBetween:24,slidesPerGroup:1,grid:{rows:3,fill:"row"},navigation:{nextEl:"[data-review-pagination-next]",prevEl:"[data-review-pagination-prev]"},keyboard:{enabled:!0},on:{init(){p(this)},slideChange(){p(this)}},breakpoints:{1440:{slidesPerView:2,slidesPerGroup:1,spaceBetween:24,grid:{rows:3,fill:"row"}}}})}function S(t){if(!t)return;t.querySelectorAll("[data-rating-rate]").forEach(n=>{const o=n.dataset.rating;new f(n,{score:o,readOnly:!0,half:!0,starType:"i"}).init()})}function p(t){const e=document.querySelector("[data-review-pagination-prev]"),n=document.querySelector("[data-review-pagination-next]");e.disabled=t.isBeginning,n.disabled=t.isEnd}function B(t){return t.map(e=>`
      <li class="swiper-slide review__slide">


 </div>
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
  <div data-rating-rate class="rating-rate" data-rating="${e.rating}"></div>

  <p class="review-text">"${e.publication}"</p>
</li>
`).join("")}const u=document.querySelectorAll(".faqs-item input");u.forEach(t=>{t.addEventListener("change",()=>{t.checked&&u.forEach(e=>{e!==t&&(e.checked=!1)})})});async function E(){new l("[data-swiper-how-to-play]",{modules:[m,b,w],navigation:{prevEl:"[data-how-to-play-pagination-prev]",nextEl:"[data-how-to-play-pagination-next]"},keyboard:{enabled:!0},on:{init(){g(this)},slideChange(){g(this)}},breakpoints:{300:{slidesPerView:1,slidesPerGroup:1,spaceBetween:24,grid:{rows:3,fill:"row"}},1440:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24,grid:{rows:3,fill:"row"}}}})}function g(t){const e=document.querySelector("[data-how-to-play-pagination-prev]"),n=document.querySelector("[data-how-to-play-pagination-next]");e.disabled=t.isBeginning,n.disabled=t.isEnd}const q=document.querySelector('[data-action="open"]'),P=document.querySelector('[data-action="close"]'),c=document.querySelector("[data-visible]"),k=document.querySelector("[data-menu]");q.addEventListener("click",t=>{document.body.style.overflow!=="hidden"?document.body.style.overflow="hidden":document.body.style.overflow="",c.dataset.visible="open"});P.addEventListener("click",t=>{document.body.style.overflow!=="hidden"?document.body.style.overflow="hidden":document.body.style.overflow="",c.dataset.visible="close",document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(n){n.preventDefault();const o=document.querySelector(this.getAttribute("href"));o&&window.scrollTo({top:o.offsetTop,behavior:"smooth"})})})});for(const t of k.children){const e=t.querySelector("a");e&&e.addEventListener("click",n=>{c.dataset.visible="close",document.body.style.overflow=""})}h();$();E();
//# sourceMappingURL=index.js.map
