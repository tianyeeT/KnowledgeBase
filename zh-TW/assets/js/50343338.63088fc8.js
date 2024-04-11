"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6627],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||n;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3290:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(7462),o=(r(7294),r(4137));const n={title:"Network",sidebar_position:9},i=void 0,l={unversionedId:"adguard-for-mac/features/network",id:"adguard-for-mac/features/network",title:"Network",description:"This article is about AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/adguard-for-mac/features/network.md",sourceDirName:"adguard-for-mac/features",slug:"/adguard-for-mac/features/network",permalink:"/KnowledgeBase/zh-TW/adguard-for-mac/features/network",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/features/network.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Network",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Extensions",permalink:"/KnowledgeBase/zh-TW/adguard-for-mac/features/extensions"},next:{title:"Features overview",permalink:"/KnowledgeBase/zh-TW/adguard-for-mac/overview"}},s={},c=[{value:"General",id:"general",level:2},{value:"Automatically filter applications",id:"automatically-filter-applications",level:3},{value:"Filter HTTPS protocol",id:"filter-https-protocol",level:3},{value:"Outbound proxy",id:"outbound-proxy",level:2},{value:"HTTP proxy",id:"http-proxy",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This article is about AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,o.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,o.kt)("h2",{id:"general"},"General"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/network.png",alt:"Network"})),(0,o.kt)("h3",{id:"automatically-filter-applications"},"Automatically filter applications"),(0,o.kt)("p",null,"By default, AdGuard blocks ads and trackers in most browsers (",(0,o.kt)("a",{parentName:"p",href:"/adguard-for-mac/solving-problems/tor-filtering"},"Tor Browser is an exception"),"). This setting allows AdGuard to block ads in apps as well."),(0,o.kt)("p",null,"To manage filtered apps, click ",(0,o.kt)("em",{parentName:"p"},"Applications"),"."),(0,o.kt)("h3",{id:"filter-https-protocol"},"Filter HTTPS protocol"),(0,o.kt)("p",null,"This setting allows AdGuard to filter the secure HTTPS protocol, which is currently used by most websites and apps. By default, websites with potentially sensitive information, such as banking services, are not filtered. To manage HTTPS exclusions, click ",(0,o.kt)("em",{parentName:"p"},"Exclusions"),"."),(0,o.kt)("p",null,"By default, AdGuard doesn\u2019t filter websites with Extended Validation (EV) certificates. If needed, you can enable the ",(0,o.kt)("em",{parentName:"p"},"Filter websites with EV certificates")," option."),(0,o.kt)("h2",{id:"outbound-proxy"},"Outbound proxy"),(0,o.kt)("p",null,"You can set up AdGuard to route all your device\u2019s traffic through your proxy server."),(0,o.kt)("h2",{id:"http-proxy"},"HTTP proxy"),(0,o.kt)("p",null,"You can use AdGuard as an HTTP proxy server. This will allow you to filter traffic on other devices connected to the proxy."),(0,o.kt)("p",null,"Make sure your Mac and your other device are connected to the same network and enter the proxy port on the device you want to route through your proxy server (usually in the network settings). To filter HTTPS traffic as well, ",(0,o.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"transfer AdGuard\u2019s proxy certificate")," to this device. ",(0,o.kt)("a",{parentName:"p",href:"/guides/proxy-certificate"},"Learn more about installing a proxy certificate")))}d.isMDXComponent=!0}}]);