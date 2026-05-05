import{a as I,S as M,i as y}from"./assets/vendor-EfBoSD9D.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function l(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=l(o);fetch(o.href,r)}})();const N=I.create({baseURL:"https://pixabay.com/api/",method:"get",params:{key:"55635401-e0e8c18759d3c09d8dcac90e1",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}});async function g(e="",t=1){return(await N.request({params:{q:e,page:t}})).data}const p=document.querySelector(".gallery"),h=document.querySelector(".gallery-loader"),_=document.querySelector(".load-more-button"),O=new M(".gallery a",{captionsData:"alt",captionDelay:250});function S(e){return e.split(",").map(t=>t.trim()).filter((t,l,a)=>a.indexOf(t)===l).toSorted().join(", ")}function q({largeImageURL:e,webformatURL:t,tags:l,user:a,likes:o,views:r,comments:c,downloads:x}){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${e}">
      <img class="gallery-image" src="${t}" height="200" alt="Tags: ${S(l)}.<br/><br/>Image by ${a} via Pixabay" />
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
          <p class="gallery-item__note-value">${c}</p>
        </li>
        <li class="gallery-item__note">
          <p class="gallery-item__note-title">Downloads</p>
          <p class="gallery-item__note-value">${x}</p>
        </li>
      </ul>
    </a>
  </li>
  `.trim()}function b(e){const t=e.map(q).join("");p.insertAdjacentHTML("beforeend",t),O.refresh()}function $(){p.innerHTML=""}function L(){h.style.display="block"}function d(){h.style.display="none"}function w(){_.style.display="inline-block"}function s(){_.style.display="none"}y.settings({timeout:5e3,resetOnHover:!0,animateInside:!1,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight",position:"topRight"});function u(e){let t=e;e instanceof Error&&(t=e.message),y.info({class:"toast",message:t}),console.log(e)}function m(e){let t=e;e instanceof Error&&(t=e.message),y.error({class:"toast toast--error",message:t}),console.error(e)}let i=0,n=0,f=1,v="";async function B(e){if(!e){m("Query is empty");return}$(),L(),s(),i=0,n=0,f=1,v=e;try{const t=await g(e);if(t.total===0){u("No images found");return}i=t.totalHits,n+=t.hits.length,f++,b(t.hits)}catch(t){m(t)}finally{d(),i>0&&(n>=i?(u("No more images to load"),s()):w())}}async function E(){if(n>=i){u("No more images to load"),s();return}L(),s();try{const e=await g(v,f);if(e.totalHits===0){u("No images found");return}n+=e.hits.length,f++,b(e.hits);const t=document.querySelector(".gallery-item");if(t){const l=t.getBoundingClientRect();window.scrollBy({top:l.height*2,behavior:"smooth"})}}catch(e){m(e)}finally{d(),n>=i?(u("No more images to load"),s()):w()}}document.querySelector("form.search-form").addEventListener("submit",e=>{var l,a;e.preventDefault();const t=(a=(l=e.target.elements)==null?void 0:l["search-text"])==null?void 0:a.value;t?B(t):m("Query is empty")});document.querySelector(".load-more-button").addEventListener("click",e=>{E()});d();s();
//# sourceMappingURL=index.js.map
