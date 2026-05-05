import{a as I,S as M,i as f}from"./assets/vendor-EfBoSD9D.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const N=I.create({baseURL:"https://pixabay.com/api/",method:"get",params:{key:"55635401-e0e8c18759d3c09d8dcac90e1",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}});async function g(e="",t=1){const a=await N.request({params:{q:e,page:t}});return{total:a.data.totalHits,count:a.data.hits.length,images:a.data.hits}}const p=document.querySelector(".gallery"),h=document.querySelector(".gallery-loader"),_=document.querySelector(".load-more-button"),O=new M(".gallery a",{captionsData:"alt",captionDelay:250});function S(e){return e.split(",").map(t=>t.trim()).filter((t,a,l)=>l.indexOf(t)===a).toSorted().join(", ")}function q({largeImageURL:e,webformatURL:t,tags:a,user:l,likes:o,views:r,comments:u,downloads:x}){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${e}">
      <img class="gallery-image" src="${t}" height="200" alt="Tags: ${S(a)}.<br/><br/>Image by ${l} via Pixabay" />
      <ul class="gallery-item__notes">
        <li class="gallery-item__note">
          <p class="gallery-item__note-title">Likes</p>
          <p class="gallery-item__note-value">${o}</p>
        </li>
        <li class="gallery-item__note">
          <p class="gallery-item__note-title">Views</p>
          <p class="gallery-item__note-value">${r}</p>
        </li>
        <li class="gallery-item__note">
          <p class="gallery-item__note-title">Comments</p>
          <p class="gallery-item__note-value">${u}</p>
        </li>
        <li class="gallery-item__note">
          <p class="gallery-item__note-title">Downloads</p>
          <p class="gallery-item__note-value">${x}</p>
        </li>
      </ul>
    </a>
  </li>
  `.trim()}function b(e){const t=e.map(q).join("");p.insertAdjacentHTML("beforeend",t),O.refresh()}function $(){p.innerHTML=""}function L(){h.style.display="block"}function y(){h.style.display="none"}function w(){_.style.display="inline-block"}function n(){_.style.display="none"}f.settings({timeout:5e3,resetOnHover:!0,animateInside:!1,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight",position:"topRight"});function d(e){let t=e;e instanceof Error&&(t=e.message),f.info({class:"toast",message:t}),console.log(e)}function s(e){let t=e;e instanceof Error&&(t=e.message),f.error({class:"toast toast--error",message:t}),console.error(e)}let i=0,c=0,m=1,v="";async function B(e){if(!e){s("Query is empty");return}$(),L(),n(),i=0,c=0,m=1,v=e;try{const t=await g(e);if(t.total===0){s("No images found");return}i=t.total,c+=t.count,m++,b(t.images)}catch(t){s(t)}finally{y(),i>0&&(c>=i?(d("No more images to load"),n()):w())}}async function E(){if(c>=i){d("No more images to load"),n();return}L(),n();try{const e=await g(v,m);if(e.total===0){s("No images found");return}b(e.images),c+=e.count,m++;const t=document.querySelector(".gallery-item");if(t){const a=t.getBoundingClientRect();window.scrollBy({top:a.height*2,behavior:"smooth"})}}catch(e){s(e)}finally{y(),c>=i?(d("No more images to load"),n()):w()}}document.querySelector("form.search-form").addEventListener("submit",e=>{var a,l;e.preventDefault();const t=(l=(a=e.target.elements)==null?void 0:a["search-text"])==null?void 0:l.value;t?B(t):s("Query is empty")});document.querySelector(".load-more-button").addEventListener("click",e=>{E()});y();n();
//# sourceMappingURL=index.js.map
