(()=>{"use strict";var e,a,f,c,d,b={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=b,r.c=t,e=[],r.O=(a,f,c,d)=>{if(!f){var b=1/0;for(i=0;i<e.length;i++){f=e[i][0],c=e[i][1],d=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&d||b>=d)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,d<b&&(b=d));if(t){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[f,c,d]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);r.r(d);var b={};a=a||[null,f({}),f([]),f(f)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,r.d(d,b),d},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({2:"31164292",45:"edf05d6f",52:"51586b61",53:"935f2afb",137:"15ecec0c",226:"ddbe7e08",319:"0e20d6ba",368:"17f3a678",402:"595bceb7",414:"51fef6a6",436:"b92fd8fb",463:"57ad0373",490:"94cda289",593:"5ba5562e",624:"7679f16a",658:"70b9e1c4",682:"c1b9e179",753:"56176cb7",813:"db6450a5",854:"d2dab062",989:"bf8fd6e1",994:"9ed25fdf",996:"366ce9e3",1026:"cb04335d",1106:"a1a96a80",1239:"6298db91",1364:"73066efe",1377:"88d3729f",1563:"047daebc",1594:"e0c068ad",1656:"c013df7a",1709:"de302e60",1755:"c8132f00",1782:"5fa6a68a",1891:"901e5b8b",1994:"234c4976",2047:"cee33c21",2073:"361f5954",2098:"14c864d6",2154:"1cd13a73",2156:"f6b780ed",2196:"551b9209",2237:"a4ef6d63",2493:"c995e4ff",2657:"62bf9ccd",2687:"46c29b32",2709:"70fec715",2720:"dae5f993",2759:"b70e6244",2760:"d5436dae",2832:"c52288f1",2836:"fed4995a",2983:"3f548f9b",3103:"e03613ee",3143:"f1e3f8b2",3166:"8ee4ef5c",3182:"f58021e2",3409:"3756a017",3626:"6b43aaa2",3651:"5d11e88f",3671:"9e53ac5d",3853:"59880946",3870:"2bc68e75",3895:"b37415c5",3908:"42cc3bf8",3959:"86a66052",3960:"6489c427",4024:"62e78d7e",4043:"b539e210",4179:"10bb97bd",4219:"7d1cc8ea",4280:"c97cdd8a",4321:"b5be0c4f",4357:"598aa86b",4368:"5cdae859",4465:"3938a769",4503:"6b998a5f",4507:"44e828f8",4519:"9b944eab",4733:"09ad883f",4761:"4e6fa676",4772:"5e860f49",4793:"e860c0e5",4938:"4243c28a",4956:"b081dbd3",4976:"e5f77a18",4990:"2a37f99f",5164:"20b88e67",5287:"8d8ae2f2",5304:"133832f5",5310:"fe2e5fd8",5346:"fabe50e5",5363:"f070768b",5372:"99fa0635",5375:"5d3b6b72",5393:"3462560b",5504:"2b0567f7",5554:"14be4abb",5678:"7a6fa86c",5720:"d311cc77",6087:"ffe9e0ad",6117:"e7ffc5cb",6188:"8cb569ed",6318:"49b07f50",6458:"c80bdb30",6478:"134dafd6",6538:"b58a278a",6791:"68710641",6888:"fc1698f7",6946:"d7d2e458",6968:"114b163e",6974:"f636bd8e",7002:"b0945a5b",7077:"3865c0e4",7139:"50e890bc",7185:"26d0bfe2",7395:"408855ca",7492:"0d701208",7527:"4a7adf24",7610:"c75a7a89",7634:"c9382d3e",7734:"d4a6eff3",7840:"e2e8f6b9",7908:"7791ca05",7910:"c4cbe28a",7918:"17896441",7920:"1a4e3797",7925:"b24c68cb",7928:"016240a3",7967:"bb8e241d",7991:"7f30ff9f",7993:"1a3d0b38",8120:"3190d275",8158:"fa772a0e",8185:"93a93bb6",8215:"26c30c50",8257:"74cdb07e",8306:"0e80a5d6",8309:"77629af0",8420:"8badac58",8496:"6c735029",8580:"87c10deb",8692:"f2da3cdd",8815:"89545c75",8969:"1df1770f",9176:"c2a8d8cd",9289:"a14fd0d4",9309:"48668c4c",9514:"1be78505",9574:"43c46248",9664:"24b9612b",9786:"47915633",9863:"ab53124f"}[e]||e)+"."+{2:"984250ae",45:"a2c8975e",52:"858f9be0",53:"4d45ad9c",118:"f086678f",137:"a1aba05b",226:"ad309133",319:"487bfe00",368:"e9d04d1d",402:"807b668c",414:"6610597e",436:"e56708cb",463:"93357791",490:"1b8f9a74",511:"6b7af6f3",593:"2c3494ee",624:"ab799f63",658:"608f231e",682:"db426a18",753:"1031f895",813:"437b6d62",854:"40b55454",989:"1164b46b",994:"12582ee0",996:"58d84500",1026:"063bcd29",1106:"eacf7252",1144:"365b509b",1239:"759d909e",1364:"884294cc",1377:"b2a59aba",1563:"1c675448",1594:"3a62d098",1656:"b2d9c5ef",1709:"ceda6eda",1755:"d7643094",1782:"35554537",1891:"bf010419",1994:"4f7a535e",2047:"486d9afa",2073:"277829c7",2098:"44dafe48",2154:"6b38a4b0",2156:"34613988",2196:"96874aa1",2237:"11f5bde5",2493:"da464f58",2657:"ec420ba0",2664:"0d1470f9",2687:"98d3570b",2709:"ea3f8a7a",2720:"c6a06a90",2759:"fead40ab",2760:"3de0e3ff",2832:"5b3d5bc0",2836:"de0e6c26",2983:"6f33633e",3103:"189752a4",3143:"f50edb2b",3166:"d5d52503",3182:"9ca656eb",3409:"42a7d6c2",3626:"5c441862",3651:"67a5b93d",3671:"02c6af38",3853:"77d02c55",3870:"8db51527",3895:"eadaf740",3908:"f8bce17c",3959:"0d2884f2",3960:"a95b0217",4024:"82b6770f",4043:"8c6c25e7",4179:"25a4f1a3",4219:"e033e81f",4248:"37e6ab5b",4280:"f1ad6070",4321:"82c03646",4357:"171ede01",4368:"a52b90c8",4465:"c8fc488e",4503:"0ae45106",4507:"ba3eb246",4519:"9d399e45",4733:"ac2e7930",4761:"fc0e1d40",4772:"8d1f17a2",4793:"7e8bef3c",4938:"6c45f061",4956:"6caf47fe",4976:"d5736eb0",4990:"80603227",5164:"5d7da7d1",5287:"b49b88b0",5304:"dd8b68bb",5310:"5af67ea8",5346:"fe7b0ccf",5363:"9664d18f",5372:"578fcaed",5375:"9cc19d4a",5393:"a645bd04",5504:"618b2bc5",5554:"87ee61cf",5678:"a200afe2",5720:"977a1c28",6087:"3919253e",6117:"9c7cf7dd",6188:"21ea5238",6318:"20947409",6458:"2b913b9d",6478:"46394a2d",6538:"13544b07",6791:"421609ed",6888:"9705214c",6946:"21ed5ab7",6968:"e2aa8459",6974:"826dc92c",7002:"3a2df397",7077:"ba83b857",7139:"935a783b",7185:"d68ba5bc",7395:"4624278b",7492:"4defe1c2",7527:"e03bf70e",7610:"0d5d1d3f",7634:"f7b9f776",7734:"dcebd0cb",7840:"f1192e9e",7908:"8a5cf9ac",7910:"d6f02664",7918:"03705839",7920:"2cf088e7",7925:"40bd6277",7928:"fc05f492",7936:"6f933266",7967:"290123a4",7991:"10289942",7993:"4dd192f4",8120:"efab8c40",8158:"c10ed348",8185:"c89793c3",8215:"dd0a1ec7",8257:"3ced417b",8306:"27e5f1d6",8309:"689dfe36",8420:"b07a9921",8496:"cf0c1efb",8580:"3641d58e",8692:"c3f3a85a",8815:"046a388a",8969:"420e57bc",9176:"767e3d07",9289:"2ba63723",9309:"cbe78aed",9514:"efa55ca1",9574:"1443e718",9664:"c933aeea",9786:"88dd6aec",9863:"60aa8145",9964:"2d41dc84"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},d="adguard-knowledge-base:",r.l=(e,a,f,b)=>{if(c[e])c[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==d+f){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",d+f),t.src=e),c[e]=[a];var l=(a,f)=>{t.onerror=t.onload=null,clearTimeout(s);var d=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/KnowledgeBase/it/",r.gca=function(e){return e={17896441:"7918",31164292:"2",47915633:"9786",59880946:"3853",68710641:"6791",edf05d6f:"45","51586b61":"52","935f2afb":"53","15ecec0c":"137",ddbe7e08:"226","0e20d6ba":"319","17f3a678":"368","595bceb7":"402","51fef6a6":"414",b92fd8fb:"436","57ad0373":"463","94cda289":"490","5ba5562e":"593","7679f16a":"624","70b9e1c4":"658",c1b9e179:"682","56176cb7":"753",db6450a5:"813",d2dab062:"854",bf8fd6e1:"989","9ed25fdf":"994","366ce9e3":"996",cb04335d:"1026",a1a96a80:"1106","6298db91":"1239","73066efe":"1364","88d3729f":"1377","047daebc":"1563",e0c068ad:"1594",c013df7a:"1656",de302e60:"1709",c8132f00:"1755","5fa6a68a":"1782","901e5b8b":"1891","234c4976":"1994",cee33c21:"2047","361f5954":"2073","14c864d6":"2098","1cd13a73":"2154",f6b780ed:"2156","551b9209":"2196",a4ef6d63:"2237",c995e4ff:"2493","62bf9ccd":"2657","46c29b32":"2687","70fec715":"2709",dae5f993:"2720",b70e6244:"2759",d5436dae:"2760",c52288f1:"2832",fed4995a:"2836","3f548f9b":"2983",e03613ee:"3103",f1e3f8b2:"3143","8ee4ef5c":"3166",f58021e2:"3182","3756a017":"3409","6b43aaa2":"3626","5d11e88f":"3651","9e53ac5d":"3671","2bc68e75":"3870",b37415c5:"3895","42cc3bf8":"3908","86a66052":"3959","6489c427":"3960","62e78d7e":"4024",b539e210:"4043","10bb97bd":"4179","7d1cc8ea":"4219",c97cdd8a:"4280",b5be0c4f:"4321","598aa86b":"4357","5cdae859":"4368","3938a769":"4465","6b998a5f":"4503","44e828f8":"4507","9b944eab":"4519","09ad883f":"4733","4e6fa676":"4761","5e860f49":"4772",e860c0e5:"4793","4243c28a":"4938",b081dbd3:"4956",e5f77a18:"4976","2a37f99f":"4990","20b88e67":"5164","8d8ae2f2":"5287","133832f5":"5304",fe2e5fd8:"5310",fabe50e5:"5346",f070768b:"5363","99fa0635":"5372","5d3b6b72":"5375","3462560b":"5393","2b0567f7":"5504","14be4abb":"5554","7a6fa86c":"5678",d311cc77:"5720",ffe9e0ad:"6087",e7ffc5cb:"6117","8cb569ed":"6188","49b07f50":"6318",c80bdb30:"6458","134dafd6":"6478",b58a278a:"6538",fc1698f7:"6888",d7d2e458:"6946","114b163e":"6968",f636bd8e:"6974",b0945a5b:"7002","3865c0e4":"7077","50e890bc":"7139","26d0bfe2":"7185","408855ca":"7395","0d701208":"7492","4a7adf24":"7527",c75a7a89:"7610",c9382d3e:"7634",d4a6eff3:"7734",e2e8f6b9:"7840","7791ca05":"7908",c4cbe28a:"7910","1a4e3797":"7920",b24c68cb:"7925","016240a3":"7928",bb8e241d:"7967","7f30ff9f":"7991","1a3d0b38":"7993","3190d275":"8120",fa772a0e:"8158","93a93bb6":"8185","26c30c50":"8215","74cdb07e":"8257","0e80a5d6":"8306","77629af0":"8309","8badac58":"8420","6c735029":"8496","87c10deb":"8580",f2da3cdd:"8692","89545c75":"8815","1df1770f":"8969",c2a8d8cd:"9176",a14fd0d4:"9289","48668c4c":"9309","1be78505":"9514","43c46248":"9574","24b9612b":"9664",ab53124f:"9863"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,f)=>{var c=r.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var d=new Promise(((f,d)=>c=e[a]=[f,d]));f.push(c[2]=d);var b=r.p+r.u(a),t=new Error;r.l(b,(f=>{if(r.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var d=f&&("load"===f.type?"missing":f.type),b=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+d+": "+b+")",t.name="ChunkLoadError",t.type=d,t.request=b,c[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var c,d,b=f[0],t=f[1],o=f[2],n=0;if(b.some((a=>0!==e[a]))){for(c in t)r.o(t,c)&&(r.m[c]=t[c]);if(o)var i=o(r)}for(a&&a(f);n<b.length;n++)d=b[n],r.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return r.O(i)},f=self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();