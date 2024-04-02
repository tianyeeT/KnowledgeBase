"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9967],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),s=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),k=n,c=u["".concat(i,".").concat(k)]||u[k]||m[k]||r;return a?o.createElement(c,p(p({ref:t},d),{},{components:a})):o.createElement(c,p({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,p=new Array(r);p[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var s=2;s<r;s++)p[s]=a[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8896:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=a(7462),n=(a(7294),a(4137));const r={title:"Jak z\xedskat syst\xe9mov\xe9 z\xe1znamy",sidebar_position:4},p=void 0,l={unversionedId:"adguard-for-android/solving-problems/logcat",id:"adguard-for-android/solving-problems/logcat",title:"Jak z\xedskat syst\xe9mov\xe9 z\xe1znamy",description:"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Chcete-li zjistit, jak funguje, st\xe1hn\u011bte si aplikaci AdGuard",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/logcat.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/logcat",permalink:"/KnowledgeBase/cs/adguard-for-android/solving-problems/logcat",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/logcat.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Jak z\xedskat syst\xe9mov\xe9 z\xe1znamy",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Jak automatizovat AdGuard pro Android",permalink:"/KnowledgeBase/cs/adguard-for-android/solving-problems/tasker"},next:{title:"Jak z\xedskat soubory HAR",permalink:"/KnowledgeBase/cs/adguard-for-android/solving-problems/har"}},i={},s=[{value:"Zachycen\xed hl\xe1\u0161en\xed o chyb\u011b ze za\u0159\xedzen\xed",id:"zachycen\xed-hl\xe1\u0161en\xed-o-chyb\u011b-ze-za\u0159\xedzen\xed",level:2},{value:"Zachycen\xed hl\xe1\u0161en\xed o chyb\u011b prost\u0159ednictv\xedm Logcat",id:"zachycen\xed-hl\xe1\u0161en\xed-o-chyb\u011b-prost\u0159ednictv\xedm-logcat",level:2},{value:"Alternativn\xed zp\u016fsob pro u\u017eivatele s p\u0159\xedstupem ROOT",id:"alternativn\xed-zp\u016fsob-pro-u\u017eivatele-s-p\u0159\xedstupem-root",level:3}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Chcete-li zjistit, jak funguje, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"st\xe1hn\u011bte si aplikaci AdGuard"))),(0,n.kt)("p",null,"N\u011bkdy nemus\xed b\u011b\u017en\xfd z\xe1znam sta\u010dit k identifikaci p\u016fvodu probl\xe9mu. V takov\xfdch p\u0159\xedpadech je nutn\xfd syst\xe9mov\xfd z\xe1znam. N\xed\u017ee jsou uvedeny pokyny, jak je shrom\xe1\u017edit a z\xedskat: prost\u0159ednictv\xedm mo\u017enost\xed pro v\xfdvoj\xe1\u0159e a Logcat."),(0,n.kt)("h2",{id:"zachycen\xed-hl\xe1\u0161en\xed-o-chyb\u011b-ze-za\u0159\xedzen\xed"},"Zachycen\xed hl\xe1\u0161en\xed o chyb\u011b ze za\u0159\xedzen\xed"),(0,n.kt)("p",null,"Chcete-li z\xedskat hl\xe1\u0161en\xed o chyb\u011b p\u0159\xedmo ze za\u0159\xedzen\xed, postupujte takto:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ujist\u011bte se, \u017ee m\xe1te zapnut\xe9 ",(0,n.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/run/device.html#developer-device-options"},"Mo\u017enosti pro v\xfdvoj\xe1\u0159e"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"V ",(0,n.kt)("strong",{parentName:"p"},"Mo\u017enostech pro v\xfdvoj\xe1\u0159e")," klepn\u011bte na ",(0,n.kt)("strong",{parentName:"p"},"Vytvo\u0159it hl\xe1\u0161en\xed o chyb\u011b"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png",alt:"Bug report *mobile"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Vyberte po\u017eadovan\xfd typ hl\xe1\u0161en\xed o chyb\u011b a klepn\u011bte na ",(0,n.kt)("strong",{parentName:"p"},"Nahl\xe1sit"),"."),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Po chv\xedli se zobraz\xed ozn\xe1men\xed, \u017ee hl\xe1\u0161en\xed o chyb\u011b je p\u0159ipraveno (viz obr\xe1zek 2).")))),(0,n.kt)("p",null,":::"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"![Bug report *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png)\n")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Chcete-li sd\xedlet hl\xe1\u0161en\xed o chyb\u011b, klepn\u011bte na ozn\xe1men\xed."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png",alt:"Bug report *mobile_border"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ode\u0161lete tento protokol na\u0161emu t\xfdmu podpory."),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"N\xe1\u0161 t\xfdm podpory zpracuje va\u0161i \u017e\xe1dost mnohem rychleji, pokud ve zpr\xe1v\u011b uvedete \u010d\xedslo HelpDesk nebo \u010d\xedslo probl\xe9mu GitHub.")))),(0,n.kt)("p",null,":::"),(0,n.kt)("h2",{id:"zachycen\xed-hl\xe1\u0161en\xed-o-chyb\u011b-prost\u0159ednictv\xedm-logcat"},"Zachycen\xed hl\xe1\u0161en\xed o chyb\u011b prost\u0159ednictv\xedm Logcat"),(0,n.kt)("p",null,"Na za\u0159\xedzen\xedch se syst\xe9mem Android 7 a ni\u017e\u0161\xedm nen\xed mo\u017en\xe9 automaticky odes\xedlat hl\xe1\u0161en\xed o chyb\xe1ch. Pak je m\u016f\u017eete zachytit ru\u010dn\u011b pomoc\xed Logcat \u2014 standardn\xedho n\xe1stroje p\u0159\xedkazov\xe9ho \u0159\xe1dku syst\xe9mu Android, kter\xfd vyp\xed\u0161e z\xe1znamy syst\xe9mov\xfdch zpr\xe1v."),(0,n.kt)("p",null,"Postupujte podle t\u011bchto pokyn\u016f:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u010c\xe1st #1: p\u0159\xedprava za\u0159\xedzen\xed")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"P\u0159epn\u011bte za\u0159\xedzen\xed do re\u017eimu pro v\xfdvoj\xe1\u0159e. Postupujte takto: p\u0159ejd\u011bte do ",(0,n.kt)("strong",{parentName:"p"},"Nastaven\xed")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"O za\u0159\xedzen\xed")," \u2192 klepn\u011bte na ",(0,n.kt)("strong",{parentName:"p"},"\u010c\xedslo sestaven\xed")," 7kr\xe1t.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"P\u0159ejd\u011bte na ",(0,n.kt)("strong",{parentName:"p"},"Mo\u017enosti pro v\xfdvoj\xe1\u0159e"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Zapn\u011bte ",(0,n.kt)("strong",{parentName:"p"},"USB lad\u011bn\xed"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navy\u0161te ",(0,n.kt)("strong",{parentName:"p"},"velikost vyrovn\xe1vac\xed pam\u011bti")," na 4 MB."))),(0,n.kt)("p",null,"4 MB by m\u011blo sta\u010dit na ulo\u017een\xed z\xe1znam\u016f, kter\xe9 pot\u0159ebujeme, dokud nebudete schopni prov\xe9st druhou \u010d\xe1st (z\xedsk\xe1n\xed z\xe1znam\u016f ze za\u0159\xedzen\xed);"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u010c\xe1st #2: reprodukujte probl\xe9m")),(0,n.kt)("p",null,"Po dokon\u010den\xed prvn\xed \u010d\xe1sti je d\u016fle\u017eit\xe9 probl\xe9m reprodukovat."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reprodukujte probl\xe9m.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Zapamatujte si/zapi\u0161te si datum a \u010das reprodukce a pozd\u011bji je uve\u010fte v e-mailu pro na\u0161i podporu."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u010c\xe1st #3: z\xedsk\xe1n\xed z\xe1znamu")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"P\u0159ipojte za\u0159\xedzen\xed k po\u010d\xedta\u010di pomoc\xed kabelu USB.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"St\xe1hn\u011bte ",(0,n.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/releases/platform-tools#downloads"},"Android SDK Platform Tools"),". V \u010d\xe1sti Stahov\xe1n\xed vyberte p\u0159\xedslu\u0161n\xfd odkaz ke sta\u017een\xed pro v\xe1\u0161 opera\u010dn\xed syst\xe9m. Po klepnut\xed na odkaz se st\xe1hne soubor ZIP. Soubory ADB (Android Debug Bridge) m\u016f\u017eete ze souboru ZIP rozbalit a ulo\u017eit kamkoli chcete.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Otestujte, zda ADB funguje spr\xe1vn\u011b: p\u0159ipojte za\u0159\xedzen\xed Android k po\u010d\xedta\u010di pomoc\xed kabelu USB, otev\u0159ete p\u0159\xedkazov\xfd \u0159\xe1dek, prost\u0159ed\xed PowerShell nebo Terminal a spus\u0165te n\xe1sleduj\xedc\xed p\u0159\xedkaz:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"adb devices")),(0,n.kt)("p",{parentName:"li"},"P\u0159\xedklad \xfasp\u011b\u0161n\xe9ho v\xfdsledku:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/logcat/logcat_step-3.png",alt:"Step 3"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Pot\xe9 spus\u0165te n\xe1sleduj\xedc\xed p\u0159\xedkaz (vlo\u017ete p\u0159\xedslu\u0161nou cestu):"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"adb logcat -v threadtime -d > C:\\Program Files\\platform-tools\\logs.txt")),(0,n.kt)("p",{parentName:"li"},"Po\u0161lete vytvo\u0159en\xfd ",(0,n.kt)("inlineCode",{parentName:"p"},"txt")," soubor a \u010das, kdy byl probl\xe9m reprodukov\xe1n (z \u010d\xe1sti #2) na\u0161emu t\xfdmu podpory na adresu ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"."))),(0,n.kt)("h3",{id:"alternativn\xed-zp\u016fsob-pro-u\u017eivatele-s-p\u0159\xedstupem-root"},"Alternativn\xed zp\u016fsob pro u\u017eivatele s p\u0159\xedstupem ROOT"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"St\xe1hn\u011bte a spus\u0165te ",(0,n.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.pluscubed.matlog"},"Logcat"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"V menu vyberte ",(0,n.kt)("strong",{parentName:"p"},"Zaznamenat"),". Zvolte n\xe1zev souboru protokolu nebo stiskn\u011bte ",(0,n.kt)("strong",{parentName:"p"},"OK"),". Nyn\xed m\u016f\u017eete stisknout tla\u010d\xedtko ",(0,n.kt)("strong",{parentName:"p"},"Dom\u016f"),", CatLog bude pokra\u010dovat v nahr\xe1v\xe1n\xed z\xe1znamu na pozad\xed.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Znovu reprodukujte probl\xe9m.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Otev\u0159ete CatLog a stiskn\u011bte ",(0,n.kt)("strong",{parentName:"p"},"Ukon\u010dit z\xe1znam")," v menu.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ode\u0161lete tento protokol na\u0161emu t\xfdmu podpory."))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"N\xe1\u0161 t\xfdm podpory zpracuje va\u0161i \u017e\xe1dost mnohem rychleji, pokud ve zpr\xe1v\u011b uvedete \u010d\xedslo HelpDesk nebo \u010d\xedslo probl\xe9mu GitHub.")))}m.isMDXComponent=!0}}]);