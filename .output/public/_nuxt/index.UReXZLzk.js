import{u as C}from"./vue.f36acd1f.bPnsOf1g.js";import{h as q,E as G,j as x,p as J,F as B,G as Q,H as A,l as X,m as k,c as _,d as I,r as S,o as Y,g as Z,t as $,v as z,x as v,z as w,I as R,C as D,D as F,_ as E,J as K}from"./entry.4JUXFAXZ.js";import ee from"./menubar.esm.gj0oY8nZ.js";import te from"./button.esm.1Lihde9l.js";import"./index.esm.OWlH-g1c.js";import"./baseicon.esm.Ao9NWvyi.js";import"./basecomponent.esm.ITTx6yMy.js";import"./index.esm.HDCeKLNz.js";import"./index.esm.BOZdRy_h.js";import"./badge.esm.bVGUXYwn.js";import"./index.esm.sCdC_Kum.js";async function ie(e,t){return await re(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function re(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const o={width:i.width,height:i.height,ratio:i.width/i.height};t(o)},i.onerror=o=>r(o),i.src=e})}function H(e){return t=>t?e[t]||t:e.missingValue}function oe({formatter:e,keyMap:t,joinWith:r="/",valueMap:i}={}){e||(e=(n,s)=>`${n}=${s}`),t&&typeof t!="function"&&(t=H(t));const o=i||{};return Object.keys(o).forEach(n=>{typeof o[n]!="function"&&(o[n]=H(o[n]))}),(n={})=>Object.entries(n).filter(([c,d])=>typeof d<"u").map(([c,d])=>{const l=o[c];return typeof l=="function"&&(d=l(n[c])),c=typeof t=="function"?t(c):c,e(c,d)}).join(r)}function h(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function ne(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const r of e.split(" ")){const i=parseInt(r.replace("x",""));i&&t.add(i)}return Array.from(t)}function se(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function ae(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(i=>i)){const i=r.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function ce(e){const t={options:e},r=(o,n={})=>L(t,o,n),i=(o,n={},s={})=>r(o,{...s,modifiers:B(n,s.modifiers||{})}).url;for(const o in e.presets)i[o]=(n,s,c)=>i(n,s,{...e.presets[o],...c});return i.options=e,i.getImage=r,i.getMeta=(o,n)=>de(t,o,n),i.getSizes=(o,n)=>fe(t,o,n),t.$img=i,i}async function de(e,t,r){const i=L(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await ie(e,i.url)}function L(e,t,r){var l,u;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:o}=le(e,r.provider||e.options.provider),n=ue(e,r.preset);if(t=q(t)?t:G(t),!i.supportsAlias)for(const g in e.options.alias)t.startsWith(g)&&(t=x(e.options.alias[g],t.substr(g.length)));if(i.validateDomains&&q(t)){const g=J(t).host;if(!e.options.domains.find(b=>b===g))return{url:t}}const s=B(r,n,o);s.modifiers={...s.modifiers};const c=s.modifiers.format;(l=s.modifiers)!=null&&l.width&&(s.modifiers.width=h(s.modifiers.width)),(u=s.modifiers)!=null&&u.height&&(s.modifiers.height=h(s.modifiers.height));const d=i.getImage(t,s,e);return d.format=d.format||c||"",d}function le(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function ue(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function fe(e,t,r){var m,j,W,M,N;const i=h((m=r.modifiers)==null?void 0:m.width),o=h((j=r.modifiers)==null?void 0:j.height),n=ae(r.sizes),s=(W=r.densities)!=null&&W.trim()?ne(r.densities.trim()):e.options.densities;se(s);const c=i&&o?o/i:0,d=[],l=[];if(Object.keys(n).length>=1){for(const f in n){const p=O(f,String(n[f]),o,c,e);if(p!==void 0){d.push({size:p.size,screenMaxWidth:p.screenMaxWidth,media:`(max-width: ${p.screenMaxWidth}px)`});for(const y of s)l.push({width:p._cWidth*y,src:P(e,t,r,p,y)})}}me(d)}else for(const f of s){const p=Object.keys(n)[0];let y=O(p,String(n[p]),o,c,e);y===void 0&&(y={size:"",screenMaxWidth:0,_cWidth:(M=r.modifiers)==null?void 0:M.width,_cHeight:(N=r.modifiers)==null?void 0:N.height}),l.push({width:f,src:P(e,t,r,y,f)})}he(l);const u=l[l.length-1],g=d.length?d.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "):void 0,b=g?"w":"x",a=l.map(f=>`${f.src} ${f.width}${b}`).join(", ");return{sizes:g,srcset:a,src:u==null?void 0:u.src}}function O(e,t,r,i,o){const n=o.options.screens&&o.options.screens[e]||parseInt(e),s=t.endsWith("vw");if(!s&&/^\d+$/.test(t)&&(t=t+"px"),!s&&!t.endsWith("px"))return;let c=parseInt(t);if(!n||!c)return;s&&(c=Math.round(c/100*n));const d=i?Math.round(c*i):r;return{size:t,screenMaxWidth:n,_cWidth:c,_cHeight:d}}function P(e,t,r,i,o){return e.$img(t,{...r.modifiers,width:i._cWidth?i._cWidth*o:void 0,height:i._cHeight?i._cHeight*o:void 0},r)}function me(e){var r;e.sort((i,o)=>i.screenMaxWidth-o.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const o=e[i];o.media===t&&e.splice(i,1),t=o.media}for(let i=0;i<e.length;i++)e[i].media=((r=e[i+1])==null?void 0:r.media)||""}function he(e){e.sort((r,i)=>r.width-i.width);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.width===t&&e.splice(r,1),t=i.width}}const ge=oe({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>A(e)+"_"+A(t)}),pe=(e,{modifiers:t={},baseURL:r}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const o=ge(t)||"_";return r||(r=x(i.options.nuxt.baseURL,"/_ipx")),{url:x(r,o,Q(e))}},ve=!0,_e=!0,we=Object.freeze(Object.defineProperty({__proto__:null,getImage:pe,supportsAlias:_e,validateDomains:ve},Symbol.toStringTag,{value:"Module"})),T={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};T.providers={ipxStatic:{provider:we,defaults:{}}};const U=()=>{const e=X(),t=k();return t.$img||t._img||(t._img=ce({...T,nuxt:{baseURL:e.app.baseURL}}))};function ye(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const be={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},xe=e=>{const t=_(()=>({provider:e.provider,preset:e.preset})),r=_(()=>({width:h(e.width),height:h(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=U(),o=_(()=>({...e.modifiers,width:h(e.width),height:h(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:o}},Se={...be,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},V=I({name:"NuxtImg",props:Se,emits:["load","error"],setup:(e,t)=>{const r=U(),i=xe(e),o=S(!1),n=_(()=>r.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:h(e.width),height:h(e.height)}})),s=_(()=>{const a={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||o.value)&&(a.sizes=n.value.sizes,a.srcset=n.value.srcset),a}),c=_(()=>{let a=e.placeholder;if(a===""&&(a=!0),!a||o.value)return!1;if(typeof a=="string")return a;const m=Array.isArray(a)?a:typeof a=="number"?[a,a]:[10,10];return r(e.src,{...i.modifiers.value,width:m[0],height:m[1],quality:m[2]||50,blur:m[3]||3},i.options.value)}),d=_(()=>e.sizes?n.value.src:r(e.src,i.modifiers.value,i.options.value)),l=_(()=>c.value?c.value:d.value);if(e.preload){const a=Object.values(n.value).every(m=>m);C({link:[{rel:"preload",as:"image",nonce:e.nonce,...a?{href:n.value.src,imagesizes:n.value.sizes,imagesrcset:n.value.srcset}:{href:l.value}}]})}const u=S(),b=k().isHydrating;return Y(()=>{if(c.value){const a=new Image;a.src=d.value,e.sizes&&(a.sizes=n.value.sizes||"",a.srcset=n.value.srcset),a.onload=m=>{o.value=!0,t.emit("load",m)},ye("nuxt-image");return}u.value&&(u.value.complete&&b&&(u.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),u.value.onload=a=>{t.emit("load",a)},u.value.onerror=a=>{t.emit("error",a)})}),()=>Z("img",{ref:u,src:l.value,...s.value,...t.attrs})}}),Ie=e=>(D("data-v-bc8f9b84"),e=e(),F(),e),$e={class:"header mt-6"},ze={class:"header__container container mx-auto"},Ee={class:"header__nav flex items-center min-[1035px]:justify-between","aria-label":"Основная навигация"},je=Ie(()=>v("div",{class:"header__contacts flex flex-col ms-auto min-[1035px]:ms-0"},[v("a",{href:"tel:+77018888055"},"8 (701) 888-80-55"),v("a",{href:"tel:+77272638499"},"8 (727) 263-84-99")],-1)),We=I({__name:"Top",setup(e){const t=i=>{const o=document.querySelector(i);o&&o.scrollIntoView({behavior:"smooth"})},r=S([{label:"Главное",command:()=>t("#main")},{label:"Наши преимущества",command:()=>t("#advantages")},{label:"Ассортимент",command:()=>t("#catalog")},{label:"Отзывы",command:()=>t("#reviews")},{label:"Бренды",command:()=>t("#brands")},{label:"Контакты",command:()=>t("#contacts")}]);return(i,o)=>{const n=V;return $(),z("header",$e,[v("div",ze,[v("nav",Ee,[w(n,{src:"/logo.png",format:"webp",width:"100",alt:"Логотип Профилайн - производитель лакокрасочных материалов"}),w(R(ee),{model:r.value,class:"p-menubar-mobile header__menu",breakpoint:"1035px"},null,8,["model"]),je])])])}}}),Me=E(We,[["__scopeId","data-v-bc8f9b84"]]),Ne=e=>(D("data-v-2855e949"),e=e(),F(),e),qe={id:"HeroSection"},Ae={class:"container mx-auto flex items-center justify-between flex-col-reverse sm:flex-row mt-8"},He={class:"space-y-4 sm:w-1/2"},Oe=Ne(()=>v("h2",{class:"sm:text-1xl md:text-2xl font-semibold text-center sm:text-left"}," Лакокрасочные материалы, инструменты и оборудование для кузовного ремонта автомобилей со скидкой 30% от ведущих производителей ",-1)),Pe={class:"relative max-w-xs md:max-w-sm lg:max-w-md"},Be=I({__name:"Hero",setup(e){return(t,r)=>{const i=V;return $(),z("section",qe,[v("div",Ae,[v("div",He,[Oe,w(R(te),{label:"Оставить заявку",class:"w-full sm:w-auto"})]),v("div",Pe,[w(i,{src:"/carbanner.png",format:"webp",alt:"Автомобиль c лакокрасочными материалами",width:"567",height:"290",onError:t.handleImageError},null,8,["onError"]),w(i,{src:"/lacquer1.png",format:"webp",alt:"Лакокрасочный материал",class:"absolute right-7 bottom-0",width:"101",height:"194",onError:t.handleImageError},null,8,["onError"]),w(i,{src:"/lacquer2.png",format:"webp",alt:"Лакокрасочный материал",class:"absolute right-9 bottom-0",width:"59",height:"97",onError:t.handleImageError},null,8,["onError"])])])])}}}),ke=E(Be,[["__scopeId","data-v-2855e949"]]),Re={};function De(e,t){const r=Me,i=ke;return $(),z(K,null,[w(r),w(i)],64)}const Ze=E(Re,[["render",De]]);export{Ze as default};