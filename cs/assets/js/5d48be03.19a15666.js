"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1858],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3815:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var a=r(7462),n=(r(7294),r(4137));const o={title:"DNS ochrana",sidebar_position:4},i=void 0,d={unversionedId:"adguard-for-android/features/protection/dns-protection",id:"adguard-for-android/features/protection/dns-protection",title:"DNS ochrana",description:"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Chcete-li se pod\xedvat, jak to funguje, st\xe1hn\u011bte si AdGuard pro Android",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/adguard-for-android/features/protection/dns-protection.md",sourceDirName:"adguard-for-android/features/protection",slug:"/adguard-for-android/features/protection/dns-protection",permalink:"/KnowledgeBase/cs/adguard-for-android/features/protection/dns-protection",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/features/protection/dns-protection.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"DNS ochrana",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Blokov\xe1n\xed obt\u011b\u017eov\xe1n\xed",permalink:"/KnowledgeBase/cs/adguard-for-android/features/protection/annoyance-blocking"},next:{title:"Firewall",permalink:"/KnowledgeBase/cs/adguard-for-android/features/protection/firewall/"}},l={},s=[{value:"DNS server",id:"dns-server",level:4},{value:"DNS filtry",id:"dns-filtry",level:4}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Chcete-li se pod\xedvat, jak to funguje, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"st\xe1hn\u011bte si AdGuard pro Android"))),(0,n.kt)("p",null,"The DNS protection module can be accessed by tapping the ",(0,n.kt)("em",{parentName:"p"},"Protection")," tab (second-left icon at the bottom of the screen) and then selecting ",(0,n.kt)("em",{parentName:"p"},"DNS protection"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"DNS protection works differently from regular ad and tracker blocking. You cam ",(0,n.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering/#how-does-dns-filtering-work"},"learn more about it and how it works from a dedicated article"))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"DNS protection")," allows you to filter DNS requests with the help of a selected DNS server, DNS filters, and user rules:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"N\u011bkter\xe9 DNS servery maj\xed seznamy blokov\xe1n\xed, kter\xe9 pom\xe1haj\xed blokovat DNS po\u017eadavky na potenci\xe1ln\u011b \u0161kodliv\xe9 dom\xe9ny")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Krom\u011b DNS server\u016f m\u016f\u017ee AdGuard filtrovat DNS po\u017eadavky s\xe1m pomoc\xed speci\xe1ln\xedho DNS filtru. Obsahuje velk\xfd seznam reklamn\xedch a sledovac\xedch dom\xe9n \u2014 po\u017eadavky na n\u011b jsou p\u0159esm\u011brov\xe1ny do "\u010dern\xe9 d\xedry" serveru')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Dom\xe9ny m\u016f\u017eete tak\xe9 blokovat a odblokovat vytvo\u0159en\xedm u\u017eivatelsk\xfdch pravidel. You might need to consult our article about ",(0,n.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering-syntax/"},"DNS filtering rule syntax")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png",alt:"DNS protection *mobile_border"})),(0,n.kt)("h4",{id:"dns-server"},"DNS server"),(0,n.kt)("p",null,"V t\xe9to \u010d\xe1sti m\u016f\u017eete vybrat DNS server pro \u0159e\u0161en\xed DNS po\u017eadavk\u016f, blokov\xe1n\xed reklam a sl\xeddi\u010d\u016f a \u0161ifrov\xe1n\xed DNS p\u0159enos\u016f. Klepnut\xedm na server si p\u0159e\u010dt\u011bte jeho cel\xfd popis a vyberte protokol. Pokud jste po\u017eadovan\xfd server nena\u0161li, m\u016f\u017eete jej p\u0159idat ru\u010dn\u011b:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Tap ",(0,n.kt)("em",{parentName:"p"},"Add DNS server")," and enter the server address (or addresses)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Alternatively, you can select a DNS server from the ",(0,n.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-providers/"},"list of known DNS providers")," and tap ",(0,n.kt)("em",{parentName:"p"},"Add to AdGuard")," next to it")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you're using a private AdGuard DNS server, you can add it to AdGuard from the ",(0,n.kt)("a",{parentName:"p",href:"https://adguard-dns.io/dashboard/"},"dashboard")))),(0,n.kt)("p",null,"By default, ",(0,n.kt)("em",{parentName:"p"},"Automatic DNS")," is selected. Nastav\xed DNS server na z\xe1klad\u011b AdGuardu a nastaven\xed za\u0159\xedzen\xed. If you have ",(0,n.kt)("a",{parentName:"p",href:"/adguard-for-android/features/integration-with-vpn"},"integration with AdGuard VPN")," or another SOCKS5 proxy enabled, it connects to ",(0,n.kt)("em",{parentName:"p"},"AdGuard DNS Non-filtering")," or any other server you specify. Ve v\u0161ech ostatn\xedch p\u0159\xedpadech se p\u0159ipojuje k DNS serveru vybran\xe9mu v nastaven\xed za\u0159\xedzen\xed."),(0,n.kt)("h4",{id:"dns-filtry"},"DNS filtry"),(0,n.kt)("p",null,"Tato \u010d\xe1st umo\u017e\u0148uje p\u0159id\xe1vat vlastn\xed DNS filtry a pravidla DNS filtrov\xe1n\xed. You can find more filters at ",(0,n.kt)("a",{parentName:"p",href:"https://filterlists.com/"},"filterlists.com"),"."))}u.isMDXComponent=!0}}]);