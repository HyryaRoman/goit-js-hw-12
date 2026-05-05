import{a as I,S as M,i as y}from"./assets/vendor-EfBoSD9D.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const O=I.create({baseURL:"https://pixabay.com/api/",method:"get",params:{key:"55635401-e0e8c18759d3c09d8dcac90e1",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}});async function f(e="",t=1){const a=await O.request({params:{q:e,page:t}});return{total:a.data.totalHits,images:a.data.hits}}const d=document.querySelector(".gallery"),p=document.querySelector(".gallery-loader"),h=document.querySelector(".load-more-button"),S=new M(".gallery a",{captionsData:"alt",captionDelay:250});function N(e){return e.split(",").map(t=>t.trim()).filter((t,a,l)=>l.indexOf(t)===a).toSorted().join(", ")}function q({largeImageURL:e,webformatURL:t,tags:a,user:l,likes:o,views:r,comments:n,downloads:x}){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${e}">
      <img class="gallery-image" src="${t}" height="200" alt="Tags: ${N(a)}.<br/><br/>Image by ${l} via Pixabay" />
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
          <p class="gallery-item__note-value">${n}</p>
        </li>
        <li class="gallery-item__note">
          <p class="gallery-item__note-title">Downloads</p>
          <p class="gallery-item__note-value">${x}</p>
        </li>
      </ul>
    </a>
  </li>
  `.trim()}function _(e){const t=e.map(q).join("");d.insertAdjacentHTML("beforeend",t),S.refresh()}function $(){d.innerHTML=""}function b(){p.style.display="block"}function g(){p.style.display="none"}function L(){h.style.display="inline-block"}function u(){h.style.display="none"}y.settings({timeout:5e3,resetOnHover:!0,animateInside:!1,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight",position:"topRight"});function w(e){let t=e;e instanceof Error&&(t=e.message),y.info({class:"toast",message:t}),console.log(e)}function i(e){let t=e;e instanceof Error&&(t=e.message),y.error({class:"toast toast--error",message:t}),console.error(e)}let s=0,c=0,m=1,v="";async function B(e){if(!e){i("Query is empty");return}v=e,s=0,m=1,$(),b(),u();try{const t=await f(e);if(t.total===0){i("No images found");return}_(t.images),s+=t.images.length,c=t.total,c=30,m++}catch(t){i(t)}finally{g()}s>=c?(u(),w("No more images to load")):L()}async function E(){if(s>=c){i("No more images to load");return}b(),u();try{const e=await f(v,m);_(e.images),s+=e.images.length,m++;const a=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:a.height*2,behavior:"smooth"})}catch(e){i(e)}finally{g()}s>=c?(u(),w("No more images to load")):L()}document.querySelector("form.search-form").addEventListener("submit",e=>{var a,l;e.preventDefault();const t=(l=(a=e.target.elements)==null?void 0:a["search-text"])==null?void 0:l.value;t?B(t):i("Query is empty")});document.querySelector(".load-more-button").addEventListener("click",e=>{E()});g();u();
//# sourceMappingURL=index.js.map
