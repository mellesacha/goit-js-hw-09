const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let a=null;t.disabled=!1,t.addEventListener("click",(function(){a=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(a),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.7e7755e2.js.map