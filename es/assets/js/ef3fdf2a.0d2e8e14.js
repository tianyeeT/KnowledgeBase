"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6638],{4137:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=n,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return t?a.createElement(m,i(i({ref:r},d),{},{components:t})):a.createElement(m,i({ref:r},d))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7750:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(7462),n=(t(7294),t(4137));const o={title:"Configurar el filtrado en Tor Browser",sidebar_position:10},i=void 0,l={unversionedId:"adguard-for-mac/solving-problems/tor-filtering",id:"adguard-for-mac/solving-problems/tor-filtering",title:"Configurar el filtrado en Tor Browser",description:"This article is about AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/tor-filtering.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/tor-filtering",permalink:"/KnowledgeBase/es/adguard-for-mac/solving-problems/tor-filtering",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/tor-filtering.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Configurar el filtrado en Tor Browser",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Advanced Settings guide",permalink:"/KnowledgeBase/es/adguard-for-mac/solving-problems/advanced-settings"},next:{title:"Bloqueo de anuncios",permalink:"/KnowledgeBase/es/adguard-for-android/features/protection/ad-blocking"}},s={},c=[],d={toc:c};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article is about AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,n.kt)("p",null,"De forma predeterminada, Tor Browser se agrega a la lista de aplicaciones filtradas de AdGuard. Sin embargo, para filtrarlo, AdGuard necesita cambiar la configuraci\xf3n de seguridad de Tor. Esto har\xe1 que Tor conf\xede en el certificado CA de AdGuard."),(0,n.kt)("p",null,"Si decides filtrar el Tor y lo tienes sleccionado en ",(0,n.kt)("em",{parentName:"p"},"Preferencias")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Red")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Aplicaciones"),", AdGuard te mostrar\xe1 este cuadro de di\xe1logo:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/tor-setup.png",alt:"AdGuard dialog box"})),(0,n.kt)("p",null,"Al actualizar la configuraci\xf3n de Tor, AdGuard establecer\xe1 lo siguiente:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"security.enterprise_roots.enabled"),": true"),(0,n.kt)("p",null,"This setting will cause Tor to trust root certificates. ",(0,n.kt)("a",{parentName:"p",href:"https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox"},"M\xe1s informaci\xf3n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"security.cert_pinning.enforcement_level"),": 1"),(0,n.kt)("p",null,"Public Key Pinning is a security measure that allows websites to ensure that the connection between a website and a user is authentic. Esto implica que el sitio web publique una lista de claves p\xfablicas, o pins, en los que conf\xeda. Con el nivel de aplicaci\xf3n establecido en 1, los pins no se aplican para los CA personalizados. ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning"},"M\xe1s informaci\xf3n")),(0,n.kt)("p",null,"Para aplicar los cambios, deber\xe1s reiniciar el Tor Browser."),(0,n.kt)("p",null,"If you manually change these settings, Tor filtering will be stopped."))}u.isMDXComponent=!0}}]);