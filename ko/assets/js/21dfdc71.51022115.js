"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6683],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(r),c=a,g=m["".concat(i,".").concat(c)]||m[c]||u[c]||n;return r?o.createElement(g,l(l({ref:t},d),{},{components:r})):o.createElement(g,l({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<n;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6577:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var o=r(7462),a=(r(7294),r(4137));const n={title:"How to get system logs",sidebar_position:4},l=void 0,p={unversionedId:"adguard-for-android/solving-problems/logcat",id:"adguard-for-android/solving-problems/logcat",title:"How to get system logs",description:"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/logcat.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/logcat",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/logcat",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/logcat.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to get system logs",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to automate AdGuard for Android",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/tasker"},next:{title:"HAR \ud30c\uc77c \uc218\uc9d1 \ubc29\ubc95",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/har"}},i={},s=[{value:"\uae30\uae30\uc5d0\uc11c \ubc84\uadf8 \ubcf4\uace0\uc11c \ubc1b\uae30",id:"\uae30\uae30\uc5d0\uc11c-\ubc84\uadf8-\ubcf4\uace0\uc11c-\ubc1b\uae30",level:2},{value:"Capture a bug report via Logcat",id:"capture-a-bug-report-via-logcat",level:2},{value:"Alternative way for ROOT users",id:"alternative-way-for-root-users",level:3}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,a.kt)("p",null,"Sometimes a regular log may not be sufficient to identify the origin of the problem. In such cases a system log is needed. Below are instructions on how to collect and get it: via Developer options and Logcat."),(0,a.kt)("h2",{id:"\uae30\uae30\uc5d0\uc11c-\ubc84\uadf8-\ubcf4\uace0\uc11c-\ubc1b\uae30"},"\uae30\uae30\uc5d0\uc11c \ubc84\uadf8 \ubcf4\uace0\uc11c \ubc1b\uae30"),(0,a.kt)("p",null,"\uae30\uae30\uc5d0\uc11c \uc9c1\uc811 \ubc84\uadf8 \ubcf4\uace0\uc11c\ub97c \ubc1b\uc73c\ub824\uba74 \ub2e4\uc74c\uc744 \uc218\ud589\ud558\uc2ed\uc2dc\uc624."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Be sure you have ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/run/device.html#developer-device-options"},"Developer options")," enabled.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In ",(0,a.kt)("strong",{parentName:"p"},"Developer options"),", tap ",(0,a.kt)("strong",{parentName:"p"},"Take bug report"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png",alt:"Bug report *mobile"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the type of bug report you want and tap ",(0,a.kt)("strong",{parentName:"p"},"Report"),"."),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"After a moment, you will see a notification that the bug report is ready (see Figure 2).")))),(0,a.kt)("p",null,":::"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"![Bug report *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png)\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To share the bug report, tap the notification."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png",alt:"Bug report *mobile_border"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Send this log to our support team."),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message to support.")))),(0,a.kt)("p",null,":::"),(0,a.kt)("h2",{id:"capture-a-bug-report-via-logcat"},"Capture a bug report via Logcat"),(0,a.kt)("p",null,"On devices with Android 7 and below, it is not possible to send a bug report automatically. Then you can capture it manually via Logcat \u2014 a standard Android command-line tool that dumps a log of system messages."),(0,a.kt)("p",null,"Follow this instruction:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Part #1: prepare the device")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Switch device to the developer mode. To do this: go to ",(0,a.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,a.kt)("strong",{parentName:"p"},"About")," \u2192 tap ",(0,a.kt)("strong",{parentName:"p"},"Build Number")," 7 times.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Developer Options"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable ",(0,a.kt)("strong",{parentName:"p"},"USB debugging"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Increase ",(0,a.kt)("strong",{parentName:"p"},"Logger buffer")," sizes to 4 MB per log buffer."))),(0,a.kt)("p",null,"4 MB should be enough for storing the logs we need until you're able to do the second part (getting the log from the device);"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Part #2: reproduce the problem")),(0,a.kt)("p",null,"It is important to reproduce the problem after you're done with the first part."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ubb38\uc81c\ub97c \uc7ac\ud604\ud569\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Remember/write down the date and time of reproduction and include it in the email to our support later."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Part #3: get the log")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connect your device to a PC with a USB cable.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/releases/platform-tools#downloads"},"Android SDK Platform Tools"),". Choose the appropriate download link for your OS from the Downloads section. Once you tap the link, a ZIP file will be downloaded. You can extract the ADB (Android Debug Bridge) files from the ZIP file and store them wherever you want.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Test whether ADB is working properly: connect your Android device to your computer using a USB cable, open the Command Prompt, PowerShell or Terminal and run the following command:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"adb devices")),(0,a.kt)("p",{parentName:"li"},"An example of a successful result:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/logcat/logcat_step-3.png",alt:"Step 3"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then run the following command (insert the relevant path):"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"adb logcat -v threadtime -d > C:\\Program Files\\platform-tools\\logs.txt")),(0,a.kt)("p",{parentName:"li"},"Email the created ",(0,a.kt)("inlineCode",{parentName:"p"},"txt")," file as well as the time the problem was reproduced (from part #2) to our support team at ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"."))),(0,a.kt)("h3",{id:"alternative-way-for-root-users"},"Alternative way for ROOT users"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download and run ",(0,a.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.pluscubed.matlog"},"Logcat"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose ",(0,a.kt)("strong",{parentName:"p"},"Record")," in the menu. Choose a name for a log file or just press ",(0,a.kt)("strong",{parentName:"p"},"OK"),". Now you can press ",(0,a.kt)("strong",{parentName:"p"},"Home")," button, CatLog will continue recording the log in background.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reproduce the issue.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open CatLog and press ",(0,a.kt)("strong",{parentName:"p"},"Stop record")," in the menu.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Send this log to our support team."))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message to support.")))}u.isMDXComponent=!0}}]);