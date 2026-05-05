import{a as y,S as f,i as n}from"./assets/vendor-EfBoSD9D.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(r){if(r.ep)return;r.ep=!0;const a=i(r);fetch(r.href,a)}})();const g=y.create({baseURL:"https://pixabay.com/api/",method:"get",params:{key:"55635401-e0e8c18759d3c09d8dcac90e1",image_type:"photo",orientation:"horizontal",safesearch:!0}});function d(e=""){return g.request({params:{q:e}}).then(t=>t.data.hits)}const c=document.querySelector(".gallery"),u=document.querySelector(".gallery-loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function _(e){return e.split(",").map(t=>t.trim()).filter((t,i,l)=>l.indexOf(t)===i).toSorted().join(", ")}function b({largeImageURL:e,webformatURL:t,tags:i,user:l,likes:r,views:a,comments:o,downloads:p}){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${e}">
      <img class="gallery-image" src="${t}" alt="Tags: ${_(i)}.<br/><br/>Image by ${l} via Pixabay" />
      <ul class="gallery-item__notes">
        <li class="gallery-item__note">
          <p class="gallery-item__note-title">Likes</p>
          <p class="gallery-item__note-value">${r}</p>
        </li>
        <li class="gallery-item__note">
          <p class="gallery-item__note-title">Views</p>
          <p class="gallery-item__note-value">${a}</p>
        </li>
        <li class="gallery-item__note">
          <p class="gallery-item__note-title">Comments</p>
          <p class="gallery-item__note-value">${o}</p>
        </li>
        <li class="gallery-item__note">
          <p class="gallery-item__note-title">Downloads</p>
          <p class="gallery-item__note-value">${p}</p>
        </li>
      </ul>
    </a>
  </li>
  `.trim()}function L(e){const t=e.map(b).join("");c.insertAdjacentHTML("beforeend",t),h.refresh()}function v(){c.innerHTML=""}function O(){u.style.display="block"}function m(){u.style.display="none"}n.settings({timeout:5e3,resetOnHover:!0,animateInside:!1,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight",position:"topRight"});function s(e){let t=e;e instanceof Error&&(t=e.message),n.error({class:"toast toast--error",message:t}),console.error(e)}function x(e){if(!e){s("Query is empty");return}v(),O(),d(e).then(L).catch(s).finally(m)}document.querySelector("form.search-form").addEventListener("submit",e=>{var i,l;e.preventDefault();const t=(l=(i=e.target.elements)==null?void 0:i["search-text"])==null?void 0:l.value;t?x(t):s("Query is empty")});m();
//# sourceMappingURL=index.js.map
