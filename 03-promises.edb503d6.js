var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("iQIUW");function r(e,n){const t=Math.random()>.3;return new Promise(((o,i)=>{setTimeout((()=>{t?o({position:e,delay:n}):i({position:e,delay:n})}),n)}))}const l=document.querySelector(".form");let s;function u({position:e,delay:n}){i.Notify.success(`✅ Fulfilled promise ${e} in ${n}ms`)}function a({position:e,delay:n}){i.Notify.failure(`❌ Rejected promise ${e} in ${n}ms`)}l.addEventListener("click",(function(e){e.preventDefault();const n=Number(l.elements.amount.value),t=Number(l.elements.delay.value),o=Number(l.elements.step.value);for(let i=1;i<=n;i++)1===i?s=t:s+=o,r(i,s).then(u).catch(a),e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.edb503d6.js.map
