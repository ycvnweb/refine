"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2365],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),m=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=i,g=u["".concat(c,".").concat(d)]||u[d]||s[d]||r;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85681:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));const r={title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",slug:"build-admin-panel-with-material-ui-and-strapi",authors:"necati",tags:["refine","fundamentals","react","javascript","low-code","internal-tools","crud","material-ui","mui"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-07-21-admin-panel-with-materialui-and-strapi/social.png",featured_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-07-21-admin-panel-with-materialui-and-strapi/featured.png",is_featured:!0,hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",source:"@site/blog/2022-07-21-admin-panel-with-materialui-and-strapi.md",title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",date:"2022-07-21T00:00:00.000Z",formattedDate:"July 21, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"fundamentals",permalink:"/blog/tags/fundamentals"},{label:"react",permalink:"/blog/tags/react"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"low-code",permalink:"/blog/tags/low-code"},{label:"internal-tools",permalink:"/blog/tags/internal-tools"},{label:"crud",permalink:"/blog/tags/crud"},{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"mui",permalink:"/blog/tags/mui"}],readingTime:16.64,hasTruncateMarker:!0,authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],frontMatter:{title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",slug:"build-admin-panel-with-material-ui-and-strapi",authors:"necati",tags:["refine","fundamentals","react","javascript","low-code","internal-tools","crud","material-ui","mui"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-07-21-admin-panel-with-materialui-and-strapi/social.png",featured_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-07-21-admin-panel-with-materialui-and-strapi/featured.png",is_featured:!0,hide_table_of_contents:!1},prevItem:{title:"Mocking API calls in React Tests with Nock",permalink:"/blog/mocking-api-calls-in-react"},nextItem:{title:"Become a Refine guest technical writer",permalink:"/blog/refine-writer-program"},relatedPosts:[{title:"Javascript Currying - Variadic Currying",permalink:"/blog/javascript-variadic-currying",formattedDate:"August 28, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.82,date:"2022-08-28T00:00:00.000Z"},{title:"The Advantages and Disadvantages of Working on Open Source Projects",permalink:"/blog/open-source-advantages-disadvantages",formattedDate:"April 29, 2022",authors:[{name:"Melih \xd6zkalay",title:"Frontend Developer",url:"https://github.com/ozkalai",imageURL:"https://github.com/ozkalai.png",key:"ozkalai"}],readingTime:6.215,date:"2022-04-29T00:00:00.000Z"},{title:"ReactJS Frameworks You Should Know Before Start Developing B2B/Internal Application",permalink:"/blog/best-internal-tool-react-frameworks",formattedDate:"March 16, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.51,date:"2022-03-16T00:00:00.000Z"}],authorPosts:[{title:"refine Joins the Hacktoberfest Fun",permalink:"/blog/hacktoberfest-refine",formattedDate:"October 4, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:.88,date:"2022-10-04T00:00:00.000Z"},{title:"Become a Refine guest technical writer",permalink:"/blog/refine-writer-program",formattedDate:"July 20, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:6.68,date:"2022-07-20T00:00:00.000Z"},{title:"We\u2019ve raised $1M in Seed Funding! \ud83d\ude80 \ud83d\ude80 \ud83d\ude80",permalink:"/blog/weve-raised-dollar1m-seed-funding",formattedDate:"June 10, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:.74,date:"2022-06-10T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2}],p={toc:m};function s(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"We will build an ",(0,i.kt)("strong",{parentName:"p"},"admin panel")," that supports ",(0,i.kt)("strong",{parentName:"p"},"CRUD")," operations, has built-in ",(0,i.kt)("strong",{parentName:"p"},"authentication"),", and a ",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/mutation-mode/"},"mutation mode"),"  feature using industry-standard best tools. "),(0,i.kt)("p",null,"Industry-standard tools and practices can be hard to reach and time-consuming to maintain on your own. Frameworks can save you time by doing these jobs for you. So, we'll use powerful frameworks including  ",(0,i.kt)("a",{parentName:"p",href:"https://mui.com"},"Material UI"),", ",(0,i.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/"},"refine")," to build a high-quality admin panel."))}s.isMDXComponent=!0}}]);