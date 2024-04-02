"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[325],{4137:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var r=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var d=r.createContext({}),u=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},l=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=s,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||o;return a?r.createElement(f,n(n({ref:t},l),{},{components:a})):r.createElement(f,n({ref:t},l))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,n=new Array(o);n[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:s,n[1]=i;for(var u=2;u<o;u++)n[u]=a[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},176:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(7462),s=(a(7294),a(4137));const o={title:"Statistiken",sidebar_position:3},n=void 0,i={unversionedId:"adguard-for-android/features/statistics",id:"adguard-for-android/features/statistics",title:"Statistiken",description:"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-android/features/statistics.md",sourceDirName:"adguard-for-android/features",slug:"/adguard-for-android/features/statistics",permalink:"/KnowledgeBase/de/adguard-for-android/features/statistics",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/features/statistics.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Statistiken",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"App management",permalink:"/KnowledgeBase/de/adguard-for-android/features/app-management"},next:{title:"Einstellungen",permalink:"/KnowledgeBase/de/adguard-for-android/features/settings"}},d={},u=[{value:"Requests",id:"requests",level:3},{value:"Data usage",id:"data-usage",level:3},{value:"Apps",id:"apps",level:3},{value:"Companies",id:"companies",level:3},{value:"DNS statistics",id:"dns-statistics",level:3},{value:"Battery usage",id:"battery-usage",level:3}],l={toc:u};function p(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,s.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,s.kt)("p",null,"The ",(0,s.kt)("em",{parentName:"p"},"Statistics")," module can be accessed by tapping the ",(0,s.kt)("em",{parentName:"p"},"Statistics")," tab (fourth icon from the left at the bottom of the screen). This feature gives you a complete picture of what is happening with the traffic on your device: how many requests are being sent and to which companies, how much data is being uploaded and downloaded, what requests are being blocked, and more. You can choose to display the statistics for the selected time period: 24 hours, 7 days, 30 days, or all time."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/czy5rStatistics.jpeg?mw=1360",alt:"Statistics *mobile_border"})),(0,s.kt)("p",null,"The stats are categorized into different sections."),(0,s.kt)("h3",{id:"requests"},"Requests"),(0,s.kt)("p",null,"This section shows the number of blocked ads, trackers, and the total number of requests. You can filter requests by data type: mobile data, Wi-Fi, or all data combined."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Recent activity"),", formerly known as ",(0,s.kt)("em",{parentName:"p"},"Filtering log"),", shows the last 10,000 requests processed by AdGuard. Tap three-dots menu (\u22ee) and then ",(0,s.kt)("em",{parentName:"p"},"Customize")," to filter requests by status (",(0,s.kt)("em",{parentName:"p"},"regular"),", ",(0,s.kt)("em",{parentName:"p"},"blocked"),", ",(0,s.kt)("em",{parentName:"p"},"modified"),", or ",(0,s.kt)("em",{parentName:"p"},"allowlisted"),") or origin (",(0,s.kt)("em",{parentName:"p"},"first-party")," or ",(0,s.kt)("em",{parentName:"p"},"third-party"),")."),(0,s.kt)("p",null,"You can tap a request to view its details and add a blocking or unblocking rule in one tap."),(0,s.kt)("h3",{id:"data-usage"},"Data usage"),(0,s.kt)("p",null,"This section shows the amount of downloaded and uploaded data and saved traffic for the selected data type (mobile data, Wi-Fi, or all). Tap ",(0,s.kt)("em",{parentName:"p"},"saved"),", ",(0,s.kt)("em",{parentName:"p"},"uploaded"),", or ",(0,s.kt)("em",{parentName:"p"},"downloaded")," to view the graph of data usage over time."),(0,s.kt)("h3",{id:"apps"},"Apps"),(0,s.kt)("p",null,"This section displays stats for all apps installed on your device. You can sort apps by the number of blocked ads or trackers or by the number of sent requests."),(0,s.kt)("p",null,"Tap ",(0,s.kt)("em",{parentName:"p"},"View all apps")," to expand the list of your apps, sorted by the number of ads, trackers, or requests."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/toq0mkScreenshot_20230627-235219_AdGuard.jpg",alt:"List of apps *mobile_border"})),(0,s.kt)("p",null,"If you tap an app, you can see its full stats: the requests it sends and the domains and companies it reaches out to."),(0,s.kt)("h3",{id:"companies"},"Companies"),(0,s.kt)("p",null,"This section displays companies that your device reaches out to. What does it mean? AdGuard detects the domains your device sends requests to and determines which companies they belong to. A database of companies can be found on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/companiesdb"},"GitHub"),"."),(0,s.kt)("h3",{id:"dns-statistics"},"DNS statistics"),(0,s.kt)("p",null,"This section shows data about the requests handled by ",(0,s.kt)("em",{parentName:"p"},"DNS protection"),". You can see the total number of requests sent and how many were blocked by AdGuard in figures and graphs. You'll also find statistics on the amount of traffic saved and data downloaded and uploaded."),(0,s.kt)("h3",{id:"battery-usage"},"Battery usage"),(0,s.kt)("p",null,"This section displays statistics on the device resources used by AdGuard during the last 24 hours. The data may differ from the stats displayed in your device settings. This happens because the system attributes the traffic of all filtered apps to AdGuard. Thus, the device shows that AdGuard consumes more resources than it actually does. ",(0,s.kt)("a",{parentName:"p",href:"/adguard-for-android/solving-problems/battery/"},"Read more about battery and traffic consumption issues"),"."))}p.isMDXComponent=!0}}]);