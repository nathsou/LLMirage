var je=Object.defineProperty;var Ue=(t,e,n)=>e in t?je(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var P=(t,e,n)=>(Ue(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function $(){}function qe(t,e){for(const n in e)t[n]=e[n];return t}function Ce(t){return t()}function ke(){return Object.create(null)}function V(t){t.forEach(Ce)}function Ae(t){return typeof t=="function"}function W(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Be(t){return Object.keys(t).length===0}function $e(t,e,n,r){if(t){const s=Pe(t,e,n,r);return t[0](s)}}function Pe(t,e,n,r){return t[1]&&r?qe(n.ctx.slice(),t[1](r(e))):n.ctx}function Ke(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],a=Math.max(e.dirty.length,s.length);for(let o=0;o<a;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Ge(t,e,n,r,s,l){if(s){const a=Pe(e,n,r,l);t.p(a,s)}}function ze(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function m(t,e){t.appendChild(e)}function x(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function Te(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ue(t){return document.createTextNode(t)}function I(){return ue(" ")}function T(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function c(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Fe(t){return t===""?null:+t}function Ye(t){return Array.from(t.childNodes)}function pe(t,e){e=""+e,t.data!==e&&(t.data=e)}function F(t,e){t.value=e??""}function R(t,e,n){t.classList[n?"add":"remove"](e)}function Ie(t,e){return new t(e)}let ve;function ae(t){ve=t}const le=[],ge=[];let ie=[];const Ee=[],Je=Promise.resolve();let be=!1;function Ve(){be||(be=!0,Je.then(xe))}function _e(t){ie.push(t)}const me=new Set;let re=0;function xe(){if(re!==0)return;const t=ve;do{try{for(;re<le.length;){const e=le[re];re++,ae(e),We(e.$$)}}catch(e){throw le.length=0,re=0,e}for(ae(null),le.length=0,re=0;ge.length;)ge.pop()();for(let e=0;e<ie.length;e+=1){const n=ie[e];me.has(n)||(me.add(n),n())}ie.length=0}while(le.length);for(;Ee.length;)Ee.pop()();be=!1,me.clear(),ae(t)}function We(t){if(t.fragment!==null){t.update(),V(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_e)}}function Xe(t){const e=[],n=[];ie.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),ie=e}const fe=new Set;let X;function He(){X={r:0,c:[],p:X}}function De(){X.r||V(X.c),X=X.p}function B(t,e){t&&t.i&&(fe.delete(t),t.i(e))}function G(t,e,n,r){if(t&&t.o){if(fe.has(t))return;fe.add(t),X.c.push(()=>{fe.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Q(t){t&&t.c()}function Y(t,e,n,r){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),r||_e(()=>{const a=t.$$.on_mount.map(Ce).filter(Ae);t.$$.on_destroy?t.$$.on_destroy.push(...a):V(a),t.$$.on_mount=[]}),l.forEach(_e)}function J(t,e){const n=t.$$;n.fragment!==null&&(Xe(n.after_update),V(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ze(t,e){t.$$.dirty[0]===-1&&(le.push(t),Ve(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ee(t,e,n,r,s,l,a,o=[-1]){const i=ve;ae(t);const u=t.$$={fragment:null,ctx:[],props:l,update:$,not_equal:s,bound:ke(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:ke(),dirty:o,skip_bound:!1,root:e.target||i.$$.root};a&&a(u.root);let p=!1;if(u.ctx=n?n(t,e.props||{},(d,h,...f)=>{const v=f.length?f[0]:h;return u.ctx&&s(u.ctx[d],u.ctx[d]=v)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](v),p&&Ze(t,d)),h}):[],u.update(),p=!0,V(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const d=Ye(e.target);u.fragment&&u.fragment.l(d),d.forEach(A)}else u.fragment&&u.fragment.c();e.intro&&B(t.$$.fragment),Y(t,e.target,e.anchor,e.customElement),xe()}ae(i)}class te{$destroy(){J(this,1),this.$destroy=$}$on(e,n){if(!Ae(n))return $;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!Be(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Qe(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Array.from(typeof t=="string"?[t]:t);r[r.length-1]=r[r.length-1].replace(/\r?\n([\t ]*)$/,"");var s=r.reduce(function(o,i){var u=i.match(/\n([\t ]+|(?!\s).)/g);return u?o.concat(u.map(function(p){var d,h;return(h=(d=p.match(/[\t ]/g))===null||d===void 0?void 0:d.length)!==null&&h!==void 0?h:0})):o},[]);if(s.length){var l=new RegExp(`
[	 ]{`+Math.min.apply(Math,s)+"}","g");r=r.map(function(o){return o.replace(l,`
`)})}r[0]=r[0].replace(/^\r?\n/,"");var a=r[0];return e.forEach(function(o,i){var u=a.match(/(?:^|\n)( *)$/),p=u?u[1]:"",d=o;typeof o=="string"&&o.includes(`
`)&&(d=String(o).split(`
`).map(function(h,f){return f===0?h:""+p+h}).join(`
`)),a+=d+r[i+1]}),a}let he;const et=new Uint8Array(16);function tt(){if(!he&&(he=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!he))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return he(et)}const C=[];for(let t=0;t<256;++t)C.push((t+256).toString(16).slice(1));function nt(t,e=0){return(C[t[e+0]]+C[t[e+1]]+C[t[e+2]]+C[t[e+3]]+"-"+C[t[e+4]]+C[t[e+5]]+"-"+C[t[e+6]]+C[t[e+7]]+"-"+C[t[e+8]]+C[t[e+9]]+"-"+C[t[e+10]]+C[t[e+11]]+C[t[e+12]]+C[t[e+13]]+C[t[e+14]]+C[t[e+15]]).toLowerCase()}const rt=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Se={randomUUID:rt};function st(t,e,n){if(Se.randomUUID&&!e&&!t)return Se.randomUUID();t=t||{};const r=t.random||(t.rng||tt)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let s=0;s<16;++s)e[n+s]=r[s];return e}return nt(r)}function lt(t){let e,n;return{c(){e=Z("svg"),n=Z("path"),c(n,"stroke-linecap","round"),c(n,"stroke-linejoin","round"),c(n,"d","M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"fill","none"),c(e,"viewBox","0 0 24 24"),c(e,"stroke-width","1.5"),c(e,"stroke","currentColor"),c(e,"class","w-4 h-4")},m(r,s){x(r,e,s),m(e,n)},d(r){r&&A(e)}}}function it(t){let e,n;return{c(){e=Z("svg"),n=Z("path"),c(n,"fill-rule","evenodd"),c(n,"d","M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"),c(n,"clip-rule","evenodd"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"viewBox","0 0 24 24"),c(e,"fill","currentColor"),c(e,"class","w-4 h-4")},m(r,s){x(r,e,s),m(e,n)},d(r){r&&A(e)}}}function ot(t){let e,n,r;function s(o,i){return o[1]?it:lt}let l=s(t),a=l(t);return{c(){e=b("div"),a.c(),c(e,"class",t[2])},m(o,i){x(o,e,i),a.m(e,null),n||(r=T(e,"click",t[3]),n=!0)},p(o,[i]){l!==(l=s(o))&&(a.d(1),a=l(o),a&&(a.c(),a.m(e,null))),i&4&&c(e,"class",o[2])},i:$,o:$,d(o){o&&A(e),a.d(),n=!1,r()}}}function at(t,e,n){let{onStar:r}=e,{isStarred:s}=e,{className:l="btn btn-sm btn-square btn-outline rounded-none"}=e;const a=o=>{o.preventDefault(),r()};return t.$$set=o=>{"onStar"in o&&n(0,r=o.onStar),"isStarred"in o&&n(1,s=o.isStarred),"className"in o&&n(2,l=o.className)},[r,s,l,a]}class Re extends te{constructor(e){super(),ee(this,e,at,ot,W,{onStar:0,isStarred:1,className:2})}}const se=[];function ut(t,e=$){let n;const r=new Set;function s(o){if(W(t,o)&&(t=o,n)){const i=!se.length;for(const u of r)u[1](),se.push(u,t);if(i){for(let u=0;u<se.length;u+=2)se[u][0](se[u+1]);se.length=0}}}function l(o){s(o(t))}function a(o,i=$){const u=[o,i];return r.add(u),r.size===1&&(n=e(s)||$),o(t),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:s,update:l,subscribe:a}}const ct=()=>[],dt=()=>({}),ht=(t,e)=>{const n=ut(e);if(typeof localStorage<"u"){const r=localStorage.getItem(t);r!=null&&n.set(JSON.parse(r))}return localStorage.storable&&n.set(JSON.parse(localStorage.storable)),{subscribe:n.subscribe,set:r=>{localStorage.setItem(t,JSON.stringify(r)),n.set(r)},update:r=>{n.update(s=>(localStorage.setItem(t,JSON.stringify(r(s))),r(s)))}}},q=ht("llmirage",{version:1,OPENAI_API_KEY:"",cache:dt(),history:ct(),historyIndex:0,darkMode:!1,temperature:.6});function Le(t,e,n){const r=t.slice();return r[9]=e[n],r[11]=n,r}function Oe(t){let e,n,r,s,l,a=t[1][t[9]].url+"",o,i,u,p=t[1][t[9]].date+"",d,h,f,v,_,L,M,j;function U(){return t[6](t[9])}r=new Re({props:{onStar:U,isStarred:t[1][t[9]].starred,className:"btn btn-sm btn-square btn-ghost rounded-none"}});function E(){return t[7](t[11])}function H(){return t[8](t[11])}return{c(){e=b("tr"),n=b("td"),Q(r.$$.fragment),s=I(),l=b("td"),o=ue(a),i=I(),u=b("td"),d=ue(p),h=I(),f=b("td"),v=b("button"),v.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path></svg>',_=I(),c(l,"class","cursor-pointer max-w-md text-ellipsis overflow-hidden whitespace-nowrap"),c(v,"class","btn btn-sm btn-primary"),c(e,"class","hover border-primary"),R(e,"border-2",t[11]===t[2])},m(N,w){x(N,e,w),m(e,n),Y(r,n,null),m(e,s),m(e,l),m(l,o),m(e,i),m(e,u),m(u,d),m(e,h),m(e,f),m(f,v),m(e,_),L=!0,M||(j=[T(l,"click",E),T(v,"click",H)],M=!0)},p(N,w){t=N;const S={};w&1&&(S.onStar=U),w&3&&(S.isStarred=t[1][t[9]].starred),r.$set(S),(!L||w&3)&&a!==(a=t[1][t[9]].url+"")&&pe(o,a),(!L||w&3)&&p!==(p=t[1][t[9]].date+"")&&pe(d,p),(!L||w&4)&&R(e,"border-2",t[11]===t[2])},i(N){L||(B(r.$$.fragment,N),L=!0)},o(N){G(r.$$.fragment,N),L=!1},d(N){N&&A(e),J(r),M=!1,V(j)}}}function ft(t){let e,n,r,s,l,a,o=t[0],i=[];for(let p=0;p<o.length;p+=1)i[p]=Oe(Le(t,o,p));const u=p=>G(i[p],1,1,()=>{i[p]=null});return{c(){e=b("div"),n=b("table"),r=b("thead"),r.innerHTML=`<tr><th></th> 
                <th>URL</th> 
                <th>Date</th> 
                <th>Action</th></tr>`,s=I(),l=b("tbody");for(let p=0;p<i.length;p+=1)i[p].c();c(n,"class","table w-full overflow-y-auto"),c(e,"class","overflow-y-auto w-full h-full")},m(p,d){x(p,e,d),m(e,n),m(n,r),m(n,s),m(n,l);for(let h=0;h<i.length;h+=1)i[h]&&i[h].m(l,null);a=!0},p(p,[d]){if(d&63){o=p[0];let h;for(h=0;h<o.length;h+=1){const f=Le(p,o,h);i[h]?(i[h].p(f,d),B(i[h],1)):(i[h]=Oe(f),i[h].c(),B(i[h],1),i[h].m(l,null))}for(He(),h=o.length;h<i.length;h+=1)u(h);De()}},i(p){if(!a){for(let d=0;d<o.length;d+=1)B(i[d]);a=!0}},o(p){i=i.filter(Boolean);for(let d=0;d<i.length;d+=1)G(i[d]);a=!1},d(p){p&&A(e),Te(i,p)}}}function pt(t,e,n){let r=[],s={},l=0;q.subscribe(h=>{n(0,r=[...h.history]),n(2,l=h.historyIndex),n(1,s={...h.cache})});const a=h=>{q.update(f=>({...f,historyIndex:h}))},o=h=>{q.update(f=>({...f,cache:{...f.cache,[h]:{...f.cache[h],starred:!f.cache[h].starred}}}))},i=h=>{q.update(f=>{const v=[...f.history],_={...f.cache},L=v[h];return delete _[L],v.splice(h,1),{...f,history:v,cache:_,historyIndex:Math.max(h===l?h-1:l,0)}})};return[r,s,l,a,o,i,h=>o(h),h=>a(h),h=>i(h)]}class mt extends te{constructor(e){super(),ee(this,e,pt,ft,W,{})}}function gt(t){let e,n,r,s,l,a,o,i,u,p,d,h,f,v,_,L,M=t[2].toFixed(2)+"",j,U,E,H,N;return{c(){e=b("div"),n=b("div"),r=b("span"),r.textContent="OpenAI API Key",s=I(),l=b("input"),a=I(),o=b("div"),i=b("span"),i.textContent="Dark Mode",u=I(),p=b("input"),d=I(),h=b("div"),f=b("div"),v=b("span"),v.textContent="Temperature",_=I(),L=b("div"),j=ue(M),U=I(),E=b("input"),c(r,"class","label-text font-semibold mb-1"),c(l,"type","password"),c(l,"class","input input-sm input-bordered"),c(l,"placeholder","Enter key..."),c(n,"class","form-control flex"),c(i,"class","label-text font-semibold mb-1"),c(p,"type","checkbox"),c(p,"class","toggle toggle-primary"),p.checked=t[1],c(o,"class","form-control"),c(v,"class","label-text font-semibold mb-1"),c(L,"class","badge badge-outline badge-sm"),c(f,"class","flex gap-1 items-baseline"),c(E,"type","range"),c(E,"min",0),c(E,"max",1),c(E,"step",.01),c(E,"class","range range-primary"),c(h,"class","form-control"),c(e,"class","flex flex-col gap-4 basis-96 grow-[0.25]")},m(w,S){x(w,e,S),m(e,n),m(n,r),m(n,s),m(n,l),F(l,t[0]),m(e,a),m(e,o),m(o,i),m(o,u),m(o,p),m(e,d),m(e,h),m(h,f),m(f,v),m(f,_),m(f,L),m(L,j),m(h,U),m(h,E),F(E,t[2]),H||(N=[T(l,"input",t[6]),T(l,"change",t[7]),T(p,"change",t[4]),T(E,"change",t[8]),T(E,"input",t[8]),T(E,"change",t[9])],H=!0)},p(w,[S]){S&1&&l.value!==w[0]&&F(l,w[0]),S&2&&(p.checked=w[1]),S&4&&M!==(M=w[2].toFixed(2)+"")&&pe(j,M),S&4&&F(E,w[2])},i:$,o:$,d(w){w&&A(e),H=!1,V(N)}}}function bt(t,e,n){let r="",s=!1,l=0;q.subscribe(f=>{n(0,r=f.OPENAI_API_KEY),n(1,s=f.darkMode),n(2,l=f.temperature)});const a=f=>{q.update(v=>({...v,OPENAI_API_KEY:f}))},o=()=>{q.update(f=>({...f,darkMode:!f.darkMode}))},i=f=>{q.update(v=>({...v,temperature:f}))};function u(){r=this.value,n(0,r)}const p=()=>a(r);function d(){l=Fe(this.value),n(2,l)}return[r,s,l,a,o,i,u,p,d,()=>i(l)]}class _t extends te{constructor(e){super(),ee(this,e,bt,gt,W,{})}}function Me(t,e,n){const r=t.slice();return r[3]=e[n],r[5]=n,r}function Ne(t){let e,n=t[3].name+"",r,s,l,a;function o(){return t[2](t[5])}return{c(){e=b("div"),r=ue(n),s=I(),c(e,"class","tab"),R(e,"tab-active",t[5]===t[0]),R(e,"font-bold",t[5]===t[0])},m(i,u){x(i,e,u),m(e,r),m(e,s),l||(a=T(e,"click",o),l=!0)},p(i,u){t=i,u&2&&n!==(n=t[3].name+"")&&pe(r,n),u&1&&R(e,"tab-active",t[5]===t[0]),u&1&&R(e,"font-bold",t[5]===t[0])},d(i){i&&A(e),l=!1,a()}}}function vt(t){let e,n,r,s,l,a,o=t[1],i=[];for(let d=0;d<o.length;d+=1)i[d]=Ne(Me(t,o,d));var u=t[1][t[0]].content;function p(d){return{}}return u&&(l=Ie(u,p())),{c(){e=b("div"),n=b("div");for(let d=0;d<i.length;d+=1)i[d].c();r=I(),s=b("div"),l&&Q(l.$$.fragment),c(s,"class","my-4 w-full flex justify-center"),c(e,"class","tabs flex flex-1 flex-col items-center")},m(d,h){x(d,e,h),m(e,n);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(n,null);m(e,r),m(e,s),l&&Y(l,s,null),a=!0},p(d,[h]){if(h&3){o=d[1];let f;for(f=0;f<o.length;f+=1){const v=Me(d,o,f);i[f]?i[f].p(v,h):(i[f]=Ne(v),i[f].c(),i[f].m(n,null))}for(;f<i.length;f+=1)i[f].d(1);i.length=o.length}if(h&3&&u!==(u=d[1][d[0]].content)){if(l){He();const f=l;G(f.$$.fragment,1,0,()=>{J(f,1)}),De()}u?(l=Ie(u,p()),Q(l.$$.fragment),B(l.$$.fragment,1),Y(l,s,null)):l=null}},i(d){a||(l&&B(l.$$.fragment,d),a=!0)},o(d){l&&G(l.$$.fragment,d),a=!1},d(d){d&&A(e),Te(i,d),l&&J(l)}}}function yt(t,e,n){let{tabs:r=[]}=e,{activeIndex:s=0}=e;const l=a=>{n(0,s=a)};return t.$$set=a=>{"tabs"in a&&n(1,r=a.tabs),"activeIndex"in a&&n(0,s=a.activeIndex)},[s,r,l]}class wt extends te{constructor(e){super(),ee(this,e,yt,vt,W,{tabs:1,activeIndex:0})}}function kt(t){let e,n,r;return n=new wt({props:{tabs:[{name:"Settings",content:_t},{name:"History",content:mt}]}}),{c(){e=b("section"),Q(n.$$.fragment),c(e,"class","w-full h-48")},m(s,l){x(s,e,l),Y(n,e,null),r=!0},p:$,i(s){r||(B(n.$$.fragment,s),r=!0)},o(s){G(n.$$.fragment,s),r=!1},d(s){s&&A(e),J(n)}}}class It extends te{constructor(e){super(),ee(this,e,null,kt,W,{})}}const K=class{constructor(e,n){P(this,"url");P(this,"headers");P(this,"payload");P(this,"method");P(this,"withCredentials");P(this,"listeners");P(this,"xhr");P(this,"readyState");P(this,"progress");P(this,"chunk");this.url=e,n=n||{},this.headers=n.headers||{},this.payload=n.payload!==void 0?n.payload:"",this.method=n.method||this.payload&&"POST"||"GET",this.withCredentials=!!n.withCredentials,this.listeners={},this.xhr=null,this.readyState=K.INITIALIZING,this.progress=0,this.chunk=""}addEventListener(e,n){this.listeners[e]===void 0&&(this.listeners[e]=[]),this.listeners[e].indexOf(n)===-1&&this.listeners[e].push(n)}removeEventListener(e,n){if(this.listeners[e]===void 0)return;const r=this.listeners[e].filter(s=>s!==n);r.length===0?delete this.listeners[e]:this.listeners[e]=r}dispatchEvent(e){if(!e)return!0;e.source=this;const n="on"+e.type;return this.hasOwnProperty(n)&&(this[n].call(this,e),e.defaultPrevented)?!1:this.listeners[e.type]?this.listeners[e.type].every(r=>(r(e),!e.defaultPrevented)):!0}_setReadyState(e){const n=new CustomEvent("readystatechange");n.readyState=e,this.readyState=e,this.dispatchEvent(n)}_onStreamFailure(e){var r;const n=new CustomEvent("error");n.data=(r=e.currentTarget)==null?void 0:r.response,this.dispatchEvent(n),this.close()}_onStreamAbort(e){this.dispatchEvent(new CustomEvent("abort")),this.close()}_onStreamProgress(e){if(!this.xhr)return;if(this.xhr.status!==200){this._onStreamFailure(e);return}this.readyState==K.CONNECTING&&(this.dispatchEvent(new CustomEvent("open")),this._setReadyState(K.OPEN));const n=this.xhr.responseText.substring(this.progress);this.progress+=n.length,n.split(/(\r\n|\r|\n){2}/g).forEach(r=>{r.trim().length===0?(this.dispatchEvent(this._parseEventChunk(this.chunk.trim())),this.chunk=""):this.chunk+=r})}_onStreamLoaded(e){this._onStreamProgress(e),this.dispatchEvent(this._parseEventChunk(this.chunk)),this.chunk=""}_parseEventChunk(e){if(!e||e.length===0)return null;const n={id:null,retry:null,data:"",event:"message"};e.split(/\n|\r\n|\r/).forEach(s=>{s=s.trimEnd();const l=s.indexOf(K.FIELD_SEPARATOR);if(l<=0)return;const a=s.substring(0,l);if(!(a in n))return;const o=s.substring(l+1).trimLeft();a==="data"?n[a]+=o:n[a]=o});const r=new CustomEvent(n.event);return r.data=n.data,r.id=n.id,r}_checkStreamClosed(){this.xhr&&this.xhr.readyState===XMLHttpRequest.DONE&&this._setReadyState(K.CLOSED)}stream(){this._setReadyState(K.CONNECTING),this.xhr=new XMLHttpRequest,this.xhr.addEventListener("progress",this._onStreamProgress.bind(this)),this.xhr.addEventListener("load",this._onStreamLoaded.bind(this)),this.xhr.addEventListener("readystatechange",this._checkStreamClosed.bind(this)),this.xhr.addEventListener("error",this._onStreamFailure.bind(this)),this.xhr.addEventListener("abort",this._onStreamAbort.bind(this)),this.xhr.open(this.method,this.url);for(const e in this.headers)this.xhr.setRequestHeader(e,this.headers[e]);this.xhr.withCredentials=this.withCredentials,this.xhr.send(this.payload)}close(){var e;this.readyState!==K.CLOSED&&((e=this.xhr)==null||e.abort(),this.xhr=null,this._setReadyState(K.CLOSED))}};let z=K;P(z,"INITIALIZING",-1),P(z,"CONNECTING",0),P(z,"OPEN",1),P(z,"CLOSED",2),P(z,"FIELD_SEPARATOR",":");function Et(t){let e,n,r,s,l,a;const o=t[3].default,i=$e(o,t,t[2],null);return{c(){e=b("div"),n=b("input"),r=I(),s=b("label"),l=b("label"),i&&i.c(),c(n,"type","checkbox"),c(n,"id",t[0]),c(n,"class","modal-toggle btn btn-sm btn-outline btn-square ml-2"),n.checked=t[1],c(l,"for",""),c(l,"class","modal-box relative w-11/12 max-w-3xl h-1/2"),c(s,"for",t[0]),c(s,"class","modal cursor-pointer"),c(e,"class","llmirage-modal svelte-1he9h6k")},m(u,p){x(u,e,p),m(e,n),m(e,r),m(e,s),m(s,l),i&&i.m(l,null),a=!0},p(u,[p]){(!a||p&1)&&c(n,"id",u[0]),(!a||p&2)&&(n.checked=u[1]),i&&i.p&&(!a||p&4)&&Ge(i,o,u,u[2],a?Ke(o,u[2],p,null):ze(u[2]),null),(!a||p&1)&&c(s,"for",u[0])},i(u){a||(B(i,u),a=!0)},o(u){G(i,u),a=!1},d(u){u&&A(e),i&&i.d(u)}}}function St(t,e,n){let{$$slots:r={},$$scope:s}=e,{id:l}=e,{isInitiallyOpen:a}=e;return t.$$set=o=>{"id"in o&&n(0,l=o.id),"isInitiallyOpen"in o&&n(1,a=o.isInitiallyOpen),"$$scope"in o&&n(2,s=o.$$scope)},[l,a,s,r]}class Lt extends te{constructor(e){super(),ee(this,e,St,Et,W,{id:0,isInitiallyOpen:1})}}function Ot(t){let e;return{c(){e=Z("path"),c(e,"stroke-linecap","round"),c(e,"stroke-linejoin","round"),c(e,"d","M6 18L18 6M6 6l12 12")},m(n,r){x(n,e,r)},d(n){n&&A(e)}}}function Mt(t){let e;return{c(){e=Z("path"),c(e,"stroke-linecap","round"),c(e,"stroke-linejoin","round"),c(e,"d","M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99")},m(n,r){x(n,e,r)},d(n){n&&A(e)}}}function Nt(t){let e,n;return e=new It({}),{c(){Q(e.$$.fragment)},m(r,s){Y(e,r,s),n=!0},i(r){n||(B(e.$$.fragment,r),n=!0)},o(r){G(e.$$.fragment,r),n=!1},d(r){J(e,r)}}}function Ct(t){let e,n,r,s,l,a,o,i,u,p,d,h,f,v,_,L,M,j,U,E,H,N,w,S,oe,ce;function de(g,k){return g[3]?Ot:Mt}let y=de(t),O=y(t);return f=new Re({props:{onStar:t[12],className:"btn btn-sm btn-square btn-outline border-l-0 rounded-none hidden sm:flex",isStarred:t[1].starred}}),H=new Lt({props:{id:"settings-modal",isInitiallyOpen:t[7],$$slots:{default:[Nt]},$$scope:{ctx:t}}}),{c(){e=b("section"),n=b("div"),r=b("button"),r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path></svg>',s=I(),l=b("button"),l.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>',a=I(),o=b("button"),i=Z("svg"),O.c(),p=I(),d=b("input"),h=I(),Q(f.$$.fragment),v=I(),_=b("input"),L=I(),M=b("button"),M.textContent="Go",j=I(),U=b("label"),U.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>',E=I(),Q(H.$$.fragment),N=I(),w=b("div"),c(r,"class","btn btn-sm btn-outline border-r-0"),R(r,"btn-disabled",!t[5]),c(l,"class","btn btn-sm btn-outline"),R(l,"btn-disabled",!t[6]),c(n,"class","btn-group btn-group-horizontal mr-2"),c(i,"xmlns","http://www.w3.org/2000/svg"),c(i,"fill","none"),c(i,"viewBox","0 0 24 24"),c(i,"stroke-width","1.5"),c(i,"stroke","currentColor"),c(i,"class","w-4 h-4"),c(o,"class","btn btn-sm btn-outline btn-square mr-2 hidden sm:flex"),o.disabled=u=t[1].url.length===0,c(d,"type","search"),c(d,"class","input input-sm input-bordered basis-36 shrink text-ellipsis overflow-hidden whitespace-nowrap grow rounded-r-none border-r-0 svelte-1hpafni"),c(d,"placeholder","Enter a URL..."),c(_,"type","date"),c(_,"class","input input-sm input-bordered rounded-none border-l-0 basis-36 shrink-0 hidden sm:block svelte-1hpafni"),c(M,"class","btn btn-sm btn-primary rounded-l-none rounded-r-md"),R(M,"loading",t[3]),R(M,"btn-disabled",t[1].url.length===0),c(U,"for","settings-modal"),c(U,"class","btn btn-sm btn-square btn-outline ml-2"),c(e,"id","llmirage-top-bar"),c(e,"class","flex justify-center items-center p-2 z-50 bg-white svelte-1hpafni"),c(w,"id","content")},m(g,k){x(g,e,k),m(e,n),m(n,r),m(n,s),m(n,l),m(e,a),m(e,o),m(o,i),O.m(i,null),m(e,p),m(e,d),F(d,t[1].url),m(e,h),Y(f,e,null),m(e,v),m(e,_),F(_,t[1].date),m(e,L),m(e,M),m(e,j),m(e,U),x(g,E,k),Y(H,g,k),x(g,N,k),x(g,w,k),t[20](w),S=!0,oe||(ce=[T(r,"click",t[15]),T(l,"click",t[16]),T(o,"click",t[10]),T(d,"input",t[17]),T(_,"input",t[18]),T(M,"click",t[19])],oe=!0)},p(g,[k]){(!S||k&32)&&R(r,"btn-disabled",!g[5]),(!S||k&64)&&R(l,"btn-disabled",!g[6]),y!==(y=de(g))&&(O.d(1),O=y(g),O&&(O.c(),O.m(i,null))),(!S||k&2&&u!==(u=g[1].url.length===0))&&(o.disabled=u),k&2&&d.value!==g[1].url&&F(d,g[1].url);const D={};k&2&&(D.isStarred=g[1].starred),f.$set(D),k&2&&F(_,g[1].date),(!S||k&8)&&R(M,"loading",g[3]),(!S||k&2)&&R(M,"btn-disabled",g[1].url.length===0);const ne={};k&128&&(ne.isInitiallyOpen=g[7]),k&33554432&&(ne.$$scope={dirty:k,ctx:g}),H.$set(ne)},i(g){S||(B(f.$$.fragment,g),B(H.$$.fragment,g),S=!0)},o(g){G(f.$$.fragment,g),G(H.$$.fragment,g),S=!1},d(g){g&&A(e),O.d(),J(f),g&&A(E),J(H,g),g&&A(N),g&&A(w),t[20](null),oe=!1,V(ce)}}}function At(t,e,n){let r="",s,l=!1,a=[],o={},i=0,u=null,p=!1,d=!1,h=!1,f=window.matchMedia("(prefers-color-scheme: dark)").matches,v=0,_={uuid:"",url:"",date:new Date().toISOString().split("T")[0],starred:!1};q.subscribe(y=>{if(n(2,r=y.OPENAI_API_KEY),a=[...y.history],n(4,i=y.historyIndex),n(5,p=i>0),n(6,d=i<a.length-1),n(14,f=y.darkMode),v=y.temperature,n(7,h||(h=r.trim().length===0)),i<a.length){const O=a[i];n(13,o={...y.cache});const g=y.cache[O];g!=null&&n(1,_={uuid:O,url:g.url,date:g.date,starred:g.starred})}});const L=(y={})=>{const O={uuid:st(),url:_.url,date:_.date,starred:_.starred,...y};return n(1,_=O),O},M=({uuid:y,url:O,date:g},k)=>{n(3,l=!1),q.update(D=>({version:D.version,OPENAI_API_KEY:D.OPENAI_API_KEY,cache:{...D.cache,[y]:{uuid:y,date:g,url:O,content:k,timestamp:Date.now(),starred:!1}},history:[y,...D.history],historyIndex:0,darkMode:f,temperature:D.temperature}))},j=async({uuid:y,url:O,date:g})=>{if(O.trim().length===0)return;n(0,s.innerHTML="",s);let k="<main>";n(3,l=!0);const D=new z("https://api.openai.com/v1/chat/completions",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},method:"POST",payload:JSON.stringify({model:"gpt-3.5-turbo",temperature:v,stream:!0,messages:[{role:"system",content:Qe`
              You act as an HTML content generator for a website at a given URL and time.
              The generated page should make sense and be a good representation of the website at the given date,
              in terms of content, style, color palette etc...
              Do not include scripts, images, svgs or lorem ipsums, only the template and inline styles using tailwind css (already imported).
              The styles should look beautiful.
              Images should be replaced with a placeholder rectangle containing the image's alt text.
              Do not add any explanations, just generate the HTML content for the website.
              If the date is in the future, imagine what the website will look like.
              If the date is in the past, imagine what the website looked like or would have looked like.
              If some placeholder text is needed, generate real-looking text.
        `},{role:"user",content:`url: https://${O}, date: ${g}`}]})});u&&u.close(),u=D;const ne=ye=>{if(_.uuid!==y)D.removeEventListener("message",ne),D.close();else if(ye.data==="[DONE]")M(_,k);else{const we=JSON.parse(ye.data).choices[0].delta;"content"in we&&(k+=we.content,n(0,s.innerHTML=k,s))}};D.addEventListener("message",ne),D.stream()},U=()=>{l?(n(3,l=!1),u==null||u.close()):j(L())},E=y=>{q.update(O=>({...O,historyIndex:y}))},H=()=>{q.update(y=>({...y,cache:{...y.cache,[_.uuid]:{...y.cache[_.uuid],starred:!_.starred}}}))},N=()=>E(i-1),w=()=>E(i+1);function S(){_.url=this.value,n(1,_)}function oe(){_.date=this.value,n(1,_)}const ce=()=>{r.length===0?alert("Please set your OpenAI API key in the settings."):j(L())};function de(y){ge[y?"unshift":"push"](()=>{s=y,n(0,s),n(1,_),n(13,o)})}return t.$$.update=()=>{t.$$.dirty&2&&(_.url.startsWith("https://")||_.url.startsWith("http://"))&&n(1,_.url=_.url.replace(/^(https?:\/\/)/,""),_),t.$$.dirty&8195&&s!=null&&_.uuid in o&&n(0,s.innerHTML=o[_.uuid].content,s),t.$$.dirty&16384&&document.querySelector("html").setAttribute("data-theme",f?"dark":"light")},[s,_,r,l,i,p,d,h,L,j,U,E,H,o,f,N,w,S,oe,ce,de]}class Pt extends te{constructor(e){super(),ee(this,e,At,Ct,W,{})}}new Pt({target:document.getElementById("app")});