"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[333],{4137:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2208:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=t(7462),i=(t(7294),t(4137));const a={title:"Filterung im Tor-Browser einrichten",sidebar_position:10},o=void 0,l={unversionedId:"adguard-for-mac/solving-problems/tor-filtering",id:"adguard-for-mac/solving-problems/tor-filtering",title:"Filterung im Tor-Browser einrichten",description:"This article is about AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. Um zu sehen, wie die App funktioniert, laden Sie AdGuard f\xfcr Mac herunter",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/tor-filtering.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/tor-filtering",permalink:"/KnowledgeBase/de/adguard-for-mac/solving-problems/tor-filtering",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/tor-filtering.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Filterung im Tor-Browser einrichten",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Erweiterte Einstellungen",permalink:"/KnowledgeBase/de/adguard-for-mac/solving-problems/advanced-settings"},next:{title:"Werbeblockierung",permalink:"/KnowledgeBase/de/adguard-for-android/features/protection/ad-blocking"}},s={},d=[],u={toc:d};function c(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This article is about AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. Um zu sehen, wie die App funktioniert, ",(0,i.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"laden Sie AdGuard f\xfcr Mac herunter"))),(0,i.kt)("p",null,"Standardm\xe4\xdfig ist der Tor-Browser in der Liste der von AdGuard gefilterten Apps enthalten. Um es zu filtern, muss AdGuard jedoch die Sicherheitseinstellungen von Tor \xe4ndern. Dadurch vertraut Tor dem CA-Zertifikat von AdGuard."),(0,i.kt)("p",null,"Wenn Sie sich entscheiden, den Tor-Browser zu filtern, und ihn in ",(0,i.kt)("em",{parentName:"p"},"Preferences")," \u2192 ",(0,i.kt)("em",{parentName:"p"},"Netzwerk")," \u2192 ",(0,i.kt)("em",{parentName:"p"},"Anwendungen")," aktivieren, wird Ihnen AdGuard dieses Dialogfeld zeigen:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/tor-setup.png",alt:"AdGuard-Dialogfeld"})),(0,i.kt)("p",null,"Durch die Aktualisierung der Tor-Einstellungen stellt AdGuard Folgendes ein:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"security.enterprise_roots.enabled"),": true"),(0,i.kt)("p",null,"Dadurch wird Tor Stammzertifikate vertrauen. ",(0,i.kt)("a",{parentName:"p",href:"https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox"},"Mehr erfahren")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"security.cert_pinning.enforcement_level"),": 1"),(0,i.kt)("p",null,"Public Key Pinning ist eine Sicherheitsma\xdfnahme, mit der Websites sicherstellen k\xf6nnen, dass die Verbindung zwischen einer Website und einem Benutzer authentisch ist. Dabei ver\xf6ffentlicht die Website eine Liste mit \xf6ffentlichen Schl\xfcsseln oder Pins, denen sie vertraut. Wenn die Erzwingungsebene auf 1 festgelegt ist, wird das Anheften f\xfcr benutzerdefinierte Zertifizierungsstellen nicht erzwungen. ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning"},"Mehr erfahren")),(0,i.kt)("p",null,"Um die \xc4nderungen zu \xfcbernehmen, m\xfcssen Sie den Tor-Browser neu starten."),(0,i.kt)("p",null,"Wenn Sie diese Einstellungen manuell \xe4ndern, wird die Tor-Filterung gestoppt."))}c.isMDXComponent=!0}}]);