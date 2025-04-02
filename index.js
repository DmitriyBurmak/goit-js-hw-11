import{a as d,S as f,i}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="49627049-8ac1639d7a1db97b4097e2b9b",y="https://pixabay.com/api/";async function g(o){try{return(await d.get(y,{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12}})).data.hits}catch(t){throw console.error("Error fetching images: ",t),t}}let c;function h(o){const t=document.querySelector(".gallery"),s=o.map(({webformatURL:n,largeImageURL:e,tags:r,likes:a,views:l,comments:u,downloads:m})=>`
        <li class="gallery-item">
          <a href="${e}">
            <img src="${n}" alt="${r}" />
            <div class="info">
              <p class="info-item">
                <b>Likes:</b> ${a}
              </p>
              <p class="info-item">
                <b>Views:</b> ${l}
              </p>
              <p class="info-item">
                <b>Comments:</b> ${u}
              </p>
              <p class="info-item">
                <b>Downloads:</b> ${m}
              </p>
            </div>
          </a>
        </li>`).join("");t.innerHTML=s,c?c.refresh():c=new f(".gallery a")}function b(){const o=document.querySelector(".gallery");o.innerHTML=""}function L(){document.querySelector(".loader").classList.add("is-visible")}function S(){document.querySelector(".loader").classList.remove("is-visible")}const w=document.querySelector(".form"),q=document.querySelector('input[name="search-text"]');w.addEventListener("submit",async o=>{o.preventDefault();const t=q.value.trim();if(!t){i.warning({message:"Please enter a search term!"});return}try{L(),b();const s=await g(t);s.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!"}):h(s)}catch{i.error({message:"Something went wrong. Please try again later."})}finally{S()}});
//# sourceMappingURL=index.js.map
