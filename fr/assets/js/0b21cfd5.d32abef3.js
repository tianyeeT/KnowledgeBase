"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[193],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(r),f=o,m=c["".concat(p,".").concat(f)]||c[f]||u[f]||n;return r?a.createElement(m,l(l({ref:t},d),{},{components:r})):a.createElement(m,l({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9915:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=r(7462),o=(r(7294),r(4137));const n={title:"Firewall",sidebar_position:1},l=void 0,i={unversionedId:"adguard-for-android/features/protection/firewall/firewall",id:"adguard-for-android/features/protection/firewall/firewall",title:"Firewall",description:"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/adguard-for-android/features/protection/firewall/firewall.md",sourceDirName:"adguard-for-android/features/protection/firewall",slug:"/adguard-for-android/features/protection/firewall/",permalink:"/KnowledgeBase/fr/adguard-for-android/features/protection/firewall/",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/features/protection/firewall/firewall.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Firewall",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"DNS protection",permalink:"/KnowledgeBase/fr/adguard-for-android/features/protection/dns-protection"},next:{title:"Quick actions",permalink:"/KnowledgeBase/fr/adguard-for-android/features/protection/firewall/quick-actions"}},p={},s=[{value:"Global firewall rules",id:"global-firewall-rules",level:4},{value:"Custom firewall rules",id:"custom-firewall-rules",level:4}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,o.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,o.kt)("p",null,"The Firewall module can be accessed by tapping the ",(0,o.kt)("em",{parentName:"p"},"Protection")," tab (second-left icon at the bottom of the screen) and then selecting ",(0,o.kt)("em",{parentName:"p"},"Firewall"),"."),(0,o.kt)("p",null,"This feature helps manage Internet access for specific apps installed on your device and for the device in general."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/gdn94firewall.png",alt:"Firewall *mobile_border"})),(0,o.kt)("h4",{id:"global-firewall-rules"},"Global firewall rules"),(0,o.kt)("p",null,"This section allows you to control Internet access for the entire device."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/4zx2nhglobal_rules.png",alt:"Global firewall rules *mobile_border"})),(0,o.kt)("p",null,"These rules apply to all apps on your device unless you've set custom rules for them."),(0,o.kt)("h4",{id:"custom-firewall-rules"},"Custom firewall rules"),(0,o.kt)("p",null,"In this section, you can control Internet access for specific apps \u2014 restrict permissions for those that you don\u2019t find trustworthy, or, on the contrary, unblock the ones you want to circumvent the global firewall rules."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("em",{parentName:"p"},"Custom firewall rules"),". Under ",(0,o.kt)("em",{parentName:"p"},"Apps with custom rules"),", tap ",(0,o.kt)("em",{parentName:"p"},"Add app"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/qkxpecustom_rules.png",alt:"Custom firewall rules *mobile_border"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the app for which you want to set individual rules."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/2db47fadding_app.png",alt:"Adding an app to Custom firewall rules *mobile_border"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("em",{parentName:"p"},"Available custom rules"),", select the ones you want to configure and tap the \u201c+\u201d icon. The rules will now appear in ",(0,o.kt)("em",{parentName:"p"},"Applied custom rules"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/6fzjladded_rule.png",alt:"Added rule *mobile_border"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you need to block a specific type of connection, toggle the switch to the left. If you want to allow it, leave the switch enabled. ",(0,o.kt)("strong",{parentName:"p"},"Custom rules override global ones"),": any changes you make in ",(0,o.kt)("em",{parentName:"p"},"Global firewall rules")," will not affect this app."))),(0,o.kt)("p",null,"To delete a rule or app from ",(0,o.kt)("em",{parentName:"p"},"Custom rules"),", swipe it to the left."))}u.isMDXComponent=!0}}]);