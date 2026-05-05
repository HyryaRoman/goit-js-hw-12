import{a as O,S as q,i as p}from"./assets/vendor-EfBoSD9D.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=l(o);fetch(o.href,a)}})();const $=O.create({baseURL:"https://pixabay.com/api/",method:"get",params:{key:"55635401-e0e8c18759d3c09d8dcac90e1",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}});async function h(e="",t=1){const l=await $.request({params:{q:e,page:t}});return{total:l.data.totalHits,images:l.data.hits}}const m=document.querySelector(".gallery"),_=document.querySelector(".gallery-loader"),b=document.querySelector(".load-more-button"),L=document.querySelector(".no-more-images-message");let y=!0;const N=new q(".gallery a",{captionsData:"alt",captionDelay:250});function B(e){return e.split(",").map(t=>t.trim()).filter((t,l,r)=>r.indexOf(t)===l).toSorted().join(", ")}function E({largeImageURL:e,webformatURL:t,tags:l,user:r,likes:o,views:a,comments:i,downloads:x}){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${e}">
      <img class="gallery-image" src="${t}" height="200" alt="Tags: ${B(l)}.<br/><br/>Image by ${r} via Pixabay" />
      <ul class="gallery-item__notes">
        <li class="gallery-item__note">
          <p class="gallery-item__note-title">Likes</p>
          <p class="gallery-item__note-value">${o}</p>
        </li>
        <li class="gallery-item__note">
          <p class="gallery-item__note-title">Views</p>
          <p class="gallery-item__note-value">${a}</p>
        </li>
        <li class="gallery-item__note">
          <p class="gallery-item__note-title">Comments</p>
          <p class="gallery-item__note-value">${i}</p>
        </li>
        <li class="gallery-item__note">
          <p class="gallery-item__note-title">Downloads</p>
          <p class="gallery-item__note-value">${x}</p>
        </li>
      </ul>
    </a>
  </li>
  `.trim()}function M(e){const t=e.map(E).join("");if(m.insertAdjacentHTML("beforeend",t),N.refresh(),!y){const r=m.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}y=!1}function P(){m.innerHTML="",y=!0}function w(){_.style.display="block"}function d(){_.style.display="none"}function I(){b.style.display="inline-block"}function c(){b.style.display="none"}function v(){L.style.display="inline-block"}function f(){L.style.display="none"}p.settings({timeout:5e3,resetOnHover:!0,animateInside:!1,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight",position:"topRight"});function n(e){let t=e;e instanceof Error&&(t=e.message),p.error({class:"toast toast--error",message:t}),console.error(e)}let s=0,u=0,g=1,S="";async function T(e){if(!e){n("Query is empty");return}S=e,s=0,P(),w();try{const t=await h(e);M(t.images),s+=t.images.length,u=t.total,g++}catch(t){n(t)}finally{d()}s>=u?(v(),c()):(f(),I())}async function k(){s>=u&&n("No more images to load"),w(),c();try{const e=await h(S,g);M(e.images),s+=e.images.length,g++}catch(e){n(e)}finally{d()}s>=u?(v(),c()):(f(),I())}document.querySelector("form.search-form").addEventListener("submit",e=>{var l,r;e.preventDefault();const t=(r=(l=e.target.elements)==null?void 0:l["search-text"])==null?void 0:r.value;t?T(t):n("Query is empty")});document.querySelector(".load-more-button").addEventListener("click",e=>{k()});d();c();f();
//# sourceMappingURL=index.js.map
