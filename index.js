import{a as x,S as I,i as y}from"./assets/vendor-EfBoSD9D.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const M=x.create({baseURL:"https://pixabay.com/api/",method:"get",params:{key:"55635401-e0e8c18759d3c09d8dcac90e1",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}});async function g(t="",e=1){const a=await M.request({params:{q:t,page:e}});return{total:a.data.totalHits,count:a.data.hits.length,images:a.data.hits}}const p=document.querySelector(".gallery"),h=document.querySelector(".gallery-loader"),_=document.querySelector(".load-more-button"),N=new I(".gallery a",{captionsData:"alt",captionDelay:250});function O(t){return t.split(",").map(e=>e.trim()).filter((e,a,l)=>l.indexOf(e)===a).toSorted().join(", ")}function S({largeImageURL:t,webformatURL:e,tags:a,user:l,likes:o,views:r,comments:c,downloads:v}){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${t}">
      <img class="gallery-image" src="${e}" height="200" alt="Tags: ${O(a)}.<br/><br/>Image by ${l} via Pixabay" />
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
          <p class="gallery-item__note-value">${v}</p>
        </li>
      </ul>
    </a>
  </li>
  `.trim()}function b(t){const e=t.map(S).join("");p.insertAdjacentHTML("beforeend",e),N.refresh()}function q(){p.innerHTML=""}function L(){h.style.display="block"}function d(){h.style.display="none"}function w(){_.style.display="inline-block"}function u(){_.style.display="none"}y.settings({timeout:5e3,resetOnHover:!0,animateInside:!1,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight",position:"topRight"});function f(t){let e=t;t instanceof Error&&(e=t.message),y.info({class:"toast",message:e}),console.log(t)}function n(t){let e=t;t instanceof Error&&(e=t.message),y.error({class:"toast toast--error",message:e}),console.error(t)}let i=0,s=0,m=1;async function $(t){if(!t){n("Query is empty");return}q(),L(),i=0,s=0,m=1;try{const e=await g(t);if(e.total===0){n("No images found");return}i=e.total,s+=e.count,m++,b(e.images)}catch(e){n(e)}finally{d(),i>0&&(s>=i?(f("No more images to load"),u()):w())}}async function B(){if(s>=i){f("No more images to load"),u();return}L(),u();try{const t=await g(lastQuery,m);if(t.total===0){n("No images found");return}b(t.images),s+=t.count,m++;const e=document.querySelector(".gallery-item");if(e){const a=e.getBoundingClientRect();window.scrollBy({top:a.height*2,behavior:"smooth"})}}catch(t){n(t)}finally{d(),s>=i?(f("No more images to load"),u()):w()}}document.querySelector("form.search-form").addEventListener("submit",t=>{var a,l;t.preventDefault();const e=(l=(a=t.target.elements)==null?void 0:a["search-text"])==null?void 0:l.value;e?$(e):n("Query is empty")});document.querySelector(".load-more-button").addEventListener("click",t=>{B()});d();u();
//# sourceMappingURL=index.js.map
