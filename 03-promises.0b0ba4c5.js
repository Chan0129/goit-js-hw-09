document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("promiseForm");function t(e,t){return new Promise(((n,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}function n(e){console.log(e)}e.addEventListener("submit",(function(o){o.preventDefault();const i=e.querySelector('[name="delay"]'),a=e.querySelector('[name="step"]'),s=e.querySelector('[name="amount"]'),r=parseInt(i.value),l=parseInt(a.value),u=parseInt(s.value);for(let e=1;e<=u;e++)t(e,r+(e-1)*l).then((({position:e,delay:t})=>{n(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{n(`❌ Rejected promise ${e} in ${t}ms`)}))}))}));
//# sourceMappingURL=03-promises.0b0ba4c5.js.map
