"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[8275],{4137:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>v});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(o),v=n,m=c["".concat(i,".").concat(v)]||c[v]||d[v]||a;return o?r.createElement(m,s(s({ref:t},u),{},{components:o})):r.createElement(m,s({ref:t},u))}));function v(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<a;p++)s[p]=o[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},7101:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=o(7462),n=(o(7294),o(4137));const a={title:"N\xedzko\xfarov\u0148ov\xe1 nastaven\xed",sidebar_position:6},s=void 0,l={unversionedId:"adguard-for-ios/features/low-level-settings",id:"adguard-for-ios/features/low-level-settings",title:"N\xedzko\xfarov\u0148ov\xe1 nastaven\xed",description:"Tento \u010dl\xe1nek popisuje AdGuard pro iOS, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li se pod\xedvat, jak to funguje, st\xe1hn\u011bte si AdGuard pro Android",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/adguard-for-ios/features/low-level-settings.md",sourceDirName:"adguard-for-ios/features",slug:"/adguard-for-ios/features/low-level-settings",permalink:"/KnowledgeBase/cs/adguard-for-ios/features/low-level-settings",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-ios/features/low-level-settings.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"N\xedzko\xfarov\u0148ov\xe1 nastaven\xed",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Assistant",permalink:"/KnowledgeBase/cs/adguard-for-ios/features/assistant"},next:{title:"Dal\u0161\xed funkce",permalink:"/KnowledgeBase/cs/adguard-for-ios/features/other-features"}},i={},p=[{value:"Block IPv6",id:"blockipv6",level:3},{value:"Bootstrap and Fallback servers",id:"bootstrap-fallback",level:3}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Tento \u010dl\xe1nek popisuje AdGuard pro iOS, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li se pod\xedvat, jak to funguje, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"st\xe1hn\u011bte si AdGuard pro Android"))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/ios_lowlevel.PNG",alt:"Low-level settings *mobile_border"})),(0,n.kt)("p",null,"To open the ",(0,n.kt)("em",{parentName:"p"},"Low-level settings"),", go to ",(0,n.kt)("em",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"General")," \u2192 (Enable ",(0,n.kt)("em",{parentName:"p"},"Advanced mode")," if it's off) \u2192 ",(0,n.kt)("em",{parentName:"p"},"Advanced settings")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Low-level settings"),"."),(0,n.kt)("p",null,"Nastaven\xed v t\xe9to \u010d\xe1sti je v\u011bt\u0161inou lep\u0161\xed ponechat beze zm\u011bny: pou\u017e\xedvejte je pouze v p\u0159\xedpad\u011b, \u017ee jste si jisti t\xedm, co d\u011bl\xe1te, nebo pokud v\xe1s o to po\u017e\xe1dal t\xfdm podpory. N\u011bkter\xe1 nastaven\xed v\u0161ak lze zm\u011bnit bez jak\xe9hokoli rizika."),(0,n.kt)("h3",{id:"blockipv6"},"Block IPv6"),(0,n.kt)("p",null,"Na ka\u017ed\xfd dotaz DNS odeslan\xfd za \xfa\u010delem z\xedsk\xe1n\xed adresy IPv6 vr\xe1t\xed na\u0161e aplikace pr\xe1zdnou odpov\u011b\u010f (jako by tato adresa IPv6 neexistovala). Nyn\xed existuje mo\u017enost nevracet adresy IPv6. Na tomto m\xedst\u011b se popis t\xe9to funkce st\xe1v\xe1 p\u0159\xedli\u0161 technick\xfdm: konfigurace nebo zak\xe1z\xe1n\xed protokolu IPv6 je v\xfdhradn\xed dom\xe9nou pokro\u010dil\xfdch u\u017eivatel\u016f. Pokud pat\u0159\xedte mezi n\u011b, bude dobr\xe9 v\u011bd\u011bt, \u017ee tuto funkci nyn\xed m\xe1me, pokud ne \u2014 nen\xed t\u0159eba se do n\xed no\u0159it."),(0,n.kt)("h3",{id:"bootstrap-fallback"},"Bootstrap and Fallback servers"),(0,n.kt)("p",null,"Z\xe1lo\u017en\xed server je z\xe1lo\u017en\xed DNS server. Pokud jste vybrali DNS server a n\u011bco se s n\xedm stalo, je t\u0159eba nastavit z\xe1lo\u017en\xed server DNS, dokud hlavn\xed server neodpov\xed."),(0,n.kt)("p",null,"S Bootstrap serverem je to trochu slo\u017eit\u011bj\u0161\xed. Aby mohl AdGuard pro iOS pou\u017e\xedvat vlastn\xed zabezpe\u010den\xfd DNS server, mus\xed na\u0161e aplikace nejprve z\xedskat jeho IP adresu. K tomuto \xfa\u010delu se ve v\xfdchoz\xedm nastaven\xed pou\u017e\xedv\xe1 syst\xe9m DNS, ale n\u011bkdy to z r\u016fzn\xfdch d\u016fvod\u016f nen\xed mo\u017en\xe9. V takov\xfdch p\u0159\xedpadech lze k z\xedsk\xe1n\xed IP adresy vybran\xe9ho zabezpe\u010den\xe9ho serveru DNS pou\u017e\xedt Bootstrap. Zde jsou dva p\u0159\xedklady, kter\xe9 ilustruj\xed, kdy m\u016f\u017ee pomoci vlastn\xed server Bootstrap:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Pokud v\xfdchoz\xed syst\xe9mov\xfd DNS server nevrac\xed IP adresu zabezpe\u010den\xe9ho serveru DNS a nen\xed mo\u017en\xe9 pou\u017e\xedt zabezpe\u010den\xfd server."),(0,n.kt)("li",{parentName:"ol"},"Pokud se sou\u010dasn\u011b pou\u017e\xedv\xe1 na\u0161e aplikace a s\xed\u0165 VPN t\u0159et\xed strany a nen\xed mo\u017en\xe9 pou\u017e\xedt syst\xe9mov\xfd DNS jako Bootstrap.")))}d.isMDXComponent=!0}}]);