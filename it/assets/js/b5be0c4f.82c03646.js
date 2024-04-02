"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[4321],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3286:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var a=r(7462),n=(r(7294),r(4137));const o={title:"DNS protection",sidebar_position:4},i=void 0,d={unversionedId:"adguard-for-android/features/protection/dns-protection",id:"adguard-for-android/features/protection/dns-protection",title:"DNS protection",description:"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-for-android/features/protection/dns-protection.md",sourceDirName:"adguard-for-android/features/protection",slug:"/adguard-for-android/features/protection/dns-protection",permalink:"/KnowledgeBase/it/adguard-for-android/features/protection/dns-protection",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/features/protection/dns-protection.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"DNS protection",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Annoyance blocking",permalink:"/KnowledgeBase/it/adguard-for-android/features/protection/annoyance-blocking"},next:{title:"Firewall",permalink:"/KnowledgeBase/it/adguard-for-android/features/protection/firewall/"}},s={},l=[{value:"DNS server",id:"dns-server",level:4},{value:"DNS filters",id:"dns-filters",level:4}],p={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,n.kt)("p",null,"The DNS protection module can be accessed by tapping the ",(0,n.kt)("em",{parentName:"p"},"Protection")," tab (second-left icon at the bottom of the screen) and then selecting ",(0,n.kt)("em",{parentName:"p"},"DNS protection"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"DNS protection works differently from regular ad and tracker blocking. You cam ",(0,n.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering/#how-does-dns-filtering-work"},"learn more about it and how it works from a dedicated article"))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"DNS protection")," allows you to filter DNS requests with the help of a selected DNS server, DNS filters, and user rules:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Some DNS servers have blocklists that help block DNS requests to potentially harmful domains")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In addition to DNS servers, AdGuard can filter DNS requests on its own using a special DNS filter. It contains a large list of ad and tracking domains \u2014 requests to them are rerouted to a blackhole server")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can also block and unblock domains by creating user rules. You might need to consult our article about ",(0,n.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering-syntax/"},"DNS filtering rule syntax")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png",alt:"DNS protection *mobile_border"})),(0,n.kt)("h4",{id:"dns-server"},"DNS server"),(0,n.kt)("p",null,"In this section, you can select a DNS server to resolve DNS requests, block ads and trackers, and encrypt DNS traffic. Tap a server to read its full description and select a protocol. If you didn't find the desired server, you can add it manually:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Tap ",(0,n.kt)("em",{parentName:"p"},"Add DNS server")," and enter the server address (or addresses)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Alternatively, you can select a DNS server from the ",(0,n.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-providers/"},"list of known DNS providers")," and tap ",(0,n.kt)("em",{parentName:"p"},"Add to AdGuard")," next to it")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you're using a private AdGuard DNS server, you can add it to AdGuard from the ",(0,n.kt)("a",{parentName:"p",href:"https://adguard-dns.io/dashboard/"},"dashboard")))),(0,n.kt)("p",null,"By default, ",(0,n.kt)("em",{parentName:"p"},"Automatic DNS")," is selected. It sets a DNS server based on your AdGuard and device settings. If you have ",(0,n.kt)("a",{parentName:"p",href:"/adguard-for-android/features/integration-with-vpn"},"integration with AdGuard VPN")," or another SOCKS5 proxy enabled, it connects to ",(0,n.kt)("em",{parentName:"p"},"AdGuard DNS Non-filtering")," or any other server you specify. In all other cases, it connects to the DNS server selected in your device settings."),(0,n.kt)("h4",{id:"dns-filters"},"DNS filters"),(0,n.kt)("p",null,"This section allows you to add custom DNS filters and DNS filtering rules. You can find more filters at ",(0,n.kt)("a",{parentName:"p",href:"https://filterlists.com/"},"filterlists.com"),"."))}c.isMDXComponent=!0}}]);