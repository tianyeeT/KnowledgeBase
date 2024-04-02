"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7601],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,m=p["".concat(s,".").concat(f)]||p[f]||l[f]||a;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},857:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var o=r(7462),n=(r(7294),r(4137));const a={title:"Rooted devices",sidebar_position:7},i=void 0,d={unversionedId:"adguard-for-android/features/rooted",id:"adguard-for-android/features/rooted",title:"Rooted devices",description:"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Chcete-li se pod\xedvat, jak to funguje, st\xe1hn\u011bte si AdGuard pro Android",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/adguard-for-android/features/rooted.md",sourceDirName:"adguard-for-android/features",slug:"/adguard-for-android/features/rooted",permalink:"/KnowledgeBase/cs/adguard-for-android/features/rooted",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/features/rooted.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Rooted devices",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Free vs. full version",permalink:"/KnowledgeBase/cs/adguard-for-android/features/free-vs-full"},next:{title:"Integrace s AdGuard VPN",permalink:"/KnowledgeBase/cs/adguard-for-android/features/integration-with-vpn"}},s={},u=[],c={toc:u};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Chcete-li se pod\xedvat, jak to funguje, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"st\xe1hn\u011bte si AdGuard pro Android"))),(0,n.kt)("p",null,"Vzhledem k bezpe\u010dnostn\xedm opat\u0159en\xedm OS Android jsou n\u011bkter\xe9 funkce AdGuardu dostupn\xe9 pouze na za\u0159\xedzen\xedch s p\u0159\xedstupem root. Zde je jejich seznam:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HTTPS filtering in most apps")," requires ",(0,n.kt)("a",{parentName:"li",href:"/adguard-for-android/features/settings#security-certificates"},"installing a CA certificate into the system store"),", as most apps do not trust certificates in the user store. Instalace certifik\xe1tu do syst\xe9mov\xe9ho \xfalo\u017ei\u0161t\u011b je mo\u017en\xe1 pouze na za\u0159\xedzen\xedch s p\u0159\xedstupem root"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"/adguard-for-android/features/settings#routing-mode"},(0,n.kt)("strong",{parentName:"a"},"Automatic proxy")," routing mode")," requires root access due to Android's restrictions on system-wide traffic filtering"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"/adguard-for-android/features/settings#routing-mode"},(0,n.kt)("strong",{parentName:"a"},"Manual proxy")," routing mode")," requires root access on Android 10 and above as it's no longer possible to determine the name of the app associated with a connection filtered by AdGuard")))}l.isMDXComponent=!0}}]);