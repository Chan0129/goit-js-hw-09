function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},t=o.parcelRequire7bc7;null==t&&((t=function(e){if(e in i)return i[e].exports;if(e in n){var o=n[e];delete n[e];var t={id:e,exports:{}};return i[e]=t,o.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},o.parcelRequire7bc7=t);var r,l,s=t("1GAPJ");(r=2,l=1500,new Promise(((e,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?e({position:r,delay:l}):o({position:r,delay:l})}),l)}))).then((({position:o,delay:i})=>{e(s).Notify.success(`✅ Fulfilled promise ${o} in ${i}ms`)})).catch((({position:o,delay:i})=>{e(s).Notify.failure(`❌ Rejected promise ${o} in ${i}ms`)}));
//# sourceMappingURL=03-promises.093b127c.js.map