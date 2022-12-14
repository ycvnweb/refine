"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),g=i,u=m["".concat(o,".").concat(g)]||m[g]||p[g]||l;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const l={title:"How to Use Tailwind CSS Grid",description:"We look at how to implement responsive layouts with CSS Grid using TailwindCSS Grid classes.",slug:"tailwind-grid",authors:"abdullah_numan",tags:["tailwind","tailwind-grid","css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-21-tailwind-grid/social.png",hide_table_of_contents:!1},r=void 0,s={permalink:"/blog/tailwind-grid",source:"@site/blog/2022-10-21-tailwind-grid.md",title:"How to Use Tailwind CSS Grid",description:"We look at how to implement responsive layouts with CSS Grid using TailwindCSS Grid classes.",date:"2022-10-21T00:00:00.000Z",formattedDate:"October 21, 2022",tags:[{label:"tailwind",permalink:"/blog/tags/tailwind"},{label:"tailwind-grid",permalink:"/blog/tags/tailwind-grid"},{label:"css",permalink:"/blog/tags/css"}],readingTime:10.41,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"How to Use Tailwind CSS Grid",description:"We look at how to implement responsive layouts with CSS Grid using TailwindCSS Grid classes.",slug:"tailwind-grid",authors:"abdullah_numan",tags:["tailwind","tailwind-grid","css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-21-tailwind-grid/social.png",hide_table_of_contents:!1},prevItem:{title:"A Guide to useContext and React Context API",permalink:"/blog/usecontext-and-react-context"},nextItem:{title:"A Guide on Material UI AutoComplete in React",permalink:"/blog/material-ui-autocomplete-component"},relatedPosts:[{title:"Creating a Responsive React Navbar with Tailwind CSS",permalink:"/blog/react-navbar-responsive-tailwind",formattedDate:"October 7, 2022",authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],readingTime:8.485,date:"2022-10-07T00:00:00.000Z"},{title:"Material UI Grid System in React",permalink:"/blog/material-ui-grid",formattedDate:"September 18, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:13.13,date:"2022-09-18T00:00:00.000Z"},{title:"CSS Grid vs Flexbox - A brief guide",permalink:"/blog/css-grid-vs-flexbox",formattedDate:"August 30, 2022",authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],readingTime:7.415,date:"2022-08-30T00:00:00.000Z"}],authorPosts:[{title:"A Guide on TypeScript Omit Type",permalink:"/blog/typescript-omit-utility-type",formattedDate:"October 3, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.505,date:"2022-10-03T00:00:00.000Z"},{title:"A Detailed Guide on TypeScript Pick Type",permalink:"/blog/typescript-pick-utility-type",formattedDate:"September 30, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.53,date:"2022-09-30T00:00:00.000Z"},{title:"Javascript Currying - Variadic Currying",permalink:"/blog/javascript-variadic-currying",formattedDate:"August 28, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.82,date:"2022-08-28T00:00:00.000Z"}]},o={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"What is Tailwind Grid System",id:"what-is-tailwind-grid-system",level:2},{value:"Project Goals",id:"project-goals",level:2},{value:"Project Setup",id:"project-setup",level:2},{value:"Basic Tailwind Grid Example",id:"basic-tailwind-grid-example",level:2},{value:"Add Grid Formatting Context",id:"add-grid-formatting-context",level:2},{value:"Column Numbers",id:"column-numbers",level:3},{value:"Grid Gap",id:"grid-gap",level:3},{value:"Responsive Column Numbers",id:"responsive-column-numbers",level:3},{value:"Size and Placement",id:"size-and-placement",level:2},{value:"Setting Size with Span",id:"setting-size-with-span",level:3},{value:"Placement",id:"placement",level:3},{value:"Grid Rows",id:"grid-rows",level:2},{value:"Span Rows",id:"span-rows",level:3},{value:"Reorder Regions",id:"reorder-regions",level:2},{value:"Customizing TailwindCSS Theme",id:"customizing-tailwindcss-theme",level:2},{value:"Conclusion",id:"conclusion",level:2}],c=(p="PromotionBanner",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var p;const m={toc:d};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In this article we look at how to implement responsive layouts with CSS Grid using ",(0,i.kt)("strong",{parentName:"p"},"TailwindCSS Grid")," classes."),(0,i.kt)("p",null,"TailwindCSS, or just Tailwind, is a CSS framework used for rapidly building websites. It comes with a core set of already defined CSS utility classes that can be composed and easily custom configured afterwards to implement any design with respect to repsonsivenes, layout and themes."),(0,i.kt)("p",null,"It is possible to build multi column layouts using Tailwind with its Flexbox classes by dividing the width of the container with ",(0,i.kt)("inlineCode",{parentName:"p"},"w-{fraction}")," classes. However, with versions 1.2 and above, we can build highly elaborate layouts with Tailwind's CSS Grid classes."),(0,i.kt)("p",null,"Steps we'll cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#what-is-tailwind-grid-system"},"What is Tailwind Grid System")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#basic-tailwind-grid-example"},"Basic Tailwind Grid Example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#add-grid-formatting-context"},"Add Grid Formatting Context"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#column-numbers"},"Column Numbers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#grid-gap"},"Grid Gap")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#responsive-column-numbers"},"Responsive Column Numbers")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#size-and-placement"},"Size and Placement"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#setting-size-with-span"},"Setting Size with Span")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#placement"},"Placement")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#grid-rows"},"Grid Rows"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#span-rows"},"Span Rows")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#reorder-regions"},"Reorder Regions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#customizing-tailwindcss-theme"},"Customizing TailwindCSS Theme"))),(0,i.kt)("h2",{id:"what-is-tailwind-grid-system"},"What is Tailwind Grid System"),(0,i.kt)("p",null,"Unlike Twitter's Bootstrap and Foundation, that still use flexbox to implement their 12 column layout under the hood, Tailwind uses CSS Grid to allow us build responsive and highly customizable layouts of any number of columns and rows. It ships with CSS classes that implement a CSS Grid container with names like ",(0,i.kt)("inlineCode",{parentName:"p"},"grid"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"grid-cols-{n}")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"grid-rows-{n}"),", etc. It also comes with Grid child classes that helps us define grid behavior of child elements of the grid with classes like ",(0,i.kt)("inlineCode",{parentName:"p"},"col-span-{n}"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"row-span-{n}"),", and so on."),(0,i.kt)("p",null," Tailwind's default configuration allows a maximum of 12 columns on a screen. It can be customized from the ",(0,i.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file. Many other options related to Tailwind's CSS Grid classes can be altered according to our taste and needs. In this post, we are going to explore extending the number of columns to 16."),(0,i.kt)("p",null," In this post, mostly, we will be playing with responsive application of ",(0,i.kt)("strong",{parentName:"p"},"Tailwind Grid")," classes that allow us to change layouts after a certain breakpoint, such as using ",(0,i.kt)("inlineCode",{parentName:"p"},"grid-cols-3 md:grid-cols-3"),"."),(0,i.kt)("p",null," I recommend following the documentation for Grid classes starting from ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/grid-template-columns"},"this section")," of TailwindCSS references and those that follow."),(0,i.kt)("h2",{id:"project-goals"},"Project Goals"),(0,i.kt)("p",null," We'll implement a simple layout having a navbar, a side content area, a main content area and a footer. It will consist of three columns and five rows."),(0,i.kt)("p",null," We'll start from scratch with a set of ",(0,i.kt)("inlineCode",{parentName:"p"},"div"),"s that follow the Block Formatting Context or ",(0,i.kt)("strong",{parentName:"p"},"BFC"),", and then gradually cover the concepts related to ",(0,i.kt)("strong",{parentName:"p"},"Grid Formatting Context")," by introducing new classes according to our needs."),(0,i.kt)("h2",{id:"project-setup"},"Project Setup"),(0,i.kt)("p",null," Before we begin though, in order to get things ready, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to a folder of your choice and clone ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/anewman15/tailwindcss-grid"},"this repo")),(0,i.kt)("li",{parentName:"ol"},"Open the cloned repository. It is important that it has the Live Server added and enabled."),(0,i.kt)("li",{parentName:"ol"},"Install dependencies with ",(0,i.kt)("inlineCode",{parentName:"li"},"npx tailwindcss -i ./src/styles.css -o ./dist/styles.css --watch")),(0,i.kt)("li",{parentName:"ol"},"Start Live Server and navigate to the port number. Or just click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Go Live")," button at the bottom right corner of the your code editor:")),(0,i.kt)("h2",{id:"basic-tailwind-grid-example"},"Basic Tailwind Grid Example"),(0,i.kt)("p",null," First, we have the following ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," document that is linked to the TailwindCSS styles in the ",(0,i.kt)("inlineCode",{parentName:"p"},"<head>"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- index.html --\x3e\n<!DOCTYPE html>\n<html lang="en">\n <head>\n   <meta charset="UTF-8">\n   <meta http-equiv="X-UA-Compatible" content="IE=edge">\n   <meta name="viewport" content="width=device-width, initial-scale=1.0">\n <link href="/dist/styles.css" rel="stylesheet">\n <title>Document</title>\n </head>\n <body>\n   <div class="container m-auto">\n     <div class="tile bg-teal-500">\n       <h1 class="tile-marker">ONE</h1>\n     </div>\n     <div class="tile bg-amber-500">\n       <h1 class="tile-marker">TWO</h1>\n     </div>\n     <div class="tile bg-yellow-500">\n       <h1 class="tile-marker">THREE</h1>\n     </div>\n     <div class="tile bg-lime-600">\n       <h1 class="tile-marker">FOUR</h1>\n     </div>\n     <div class="tile bg-green-600">\n       <h1 class="tile-marker">FIVE</h1>\n     </div>\n     <div class="tile bg-emerald-500">\n       <h1 class="tile-marker">SIX</h1>\n     </div>\n     <div class="tile bg-teal-500">\n       <h1 class="tile-marker">SEVEN</h1>\n     </div>\n     <div class="tile bg-purple-500">\n       <h1 class="tile-marker">EIGHT</h1>\n     </div>\n     <div class="tile bg-pink-500">\n       <h1 class="tile-marker">NINE</h1>\n     </div>\n   </div>\n </body>\n</html>\n')),(0,i.kt)("h2",{id:"add-grid-formatting-context"},"Add Grid Formatting Context"),(0,i.kt)("p",null,"If we introduce ",(0,i.kt)("inlineCode",{parentName:"p"},"grid")," class to the container ",(0,i.kt)("inlineCode",{parentName:"p"},"div"),", nothing happens:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container m-auto grid">\n')),(0,i.kt)("p",null,"That's because the default ",(0,i.kt)("inlineCode",{parentName:"p"},"grid")," has only one column."),(0,i.kt)("h3",{id:"column-numbers"},"Column Numbers"),(0,i.kt)("p",null,"Let's add three explicit columns:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container m-auto grid grid-cols-3">\n')),(0,i.kt)("p",null,"Now, we have all the ",(0,i.kt)("inlineCode",{parentName:"p"},"div"),"s flowed into 3 columns according to Grid Formatting Context:"),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-21-tailwind-grid/tailwind-grid-1.png",alt:"tailwind grid 1"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"Notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"grid-cols-3")," just divides the screen into 3 equal parts of each ",(0,i.kt)("inlineCode",{parentName:"p"},"1fr")," as with: ",(0,i.kt)("inlineCode",{parentName:"p"},"grid-template-columns: repeat(3, minmax(0, 1fr));"),"."),(0,i.kt)("h3",{id:"grid-gap"},"Grid Gap"),(0,i.kt)("p",null,"Let's add some gap with ",(0,i.kt)("inlineCode",{parentName:"p"},"gap-{size}")," class. We have to set it to the grid container:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container m-auto grid grid-cols-3 gap-4">\n')),(0,i.kt)("p",null,"Now we have a gap between the children ",(0,i.kt)("inlineCode",{parentName:"p"},"div"),"s:"),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-21-tailwind-grid/tailwind-grid-3.png",alt:"tailwind grid 2"})),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"responsive-column-numbers"},"Responsive Column Numbers"),(0,i.kt)("p",null,"We can add columns at larger breakpoints:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container m-auto grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">\n')),(0,i.kt)("p",null,"Here, we're using Tailwind's default breakpoints at ",(0,i.kt)("inlineCode",{parentName:"p"},"md:\t768px")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"lg:\t1024px"),". We can see the number of columns increasing at ",(0,i.kt)("inlineCode",{parentName:"p"},"768px")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"1024px"),":"),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-21-tailwind-grid/tailwind-grid-4.gif",alt:"tailwind grid 4"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"It's important to notice that Tailwind's responsive classes such as ",(0,i.kt)("inlineCode",{parentName:"p"},"md")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"lg")," do not represent screensizes, but rather mobile-first breakpoints. So ",(0,i.kt)("inlineCode",{parentName:"p"},"grid-cols-3")," lays out 3 columns for all screen sizes, but since column numbers change after ",(0,i.kt)("inlineCode",{parentName:"p"},"md")," we get 5 columns ",(0,i.kt)("strong",{parentName:"p"},"after")," that screen size. And because it changes again after ",(0,i.kt)("inlineCode",{parentName:"p"},"lg")," we get 8. It doesn't change afterwards, so we continue getting 8 columns even in ",(0,i.kt)("inlineCode",{parentName:"p"},"xl"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"2xl")," screen sizes."),(0,i.kt)("h2",{id:"size-and-placement"},"Size and Placement"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tailwind's CSS Grid")," sizing and placing classes gives us more control over how many columns a section should span and where we want to start and end it."),(0,i.kt)("h3",{id:"setting-size-with-span"},"Setting Size with Span"),(0,i.kt)("p",null,"Below, we place the first ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," as a navbar. We are doing this with ",(0,i.kt)("inlineCode",{parentName:"p"},"col-span-{n}")," for each screen size. We have to make sure it starts at the beginning of the grid and spans the entire screen at each screen size:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="tile bg-teal-500 col-span-3 md:col-span-5 lg:col-span-8">\n  <h1 class="tile-marker">ONE</h1>\n</div>\n')),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-21-tailwind-grid/tailwind-grid-5.gif",alt:"tailwind grid 5"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"We can refactor the above ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="tile bg-teal-500 col-span-full">\n  <h1 class="tile-marker">ONE</h1>\n</div>\n')),(0,i.kt)("p",null,"We can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"col-start-{n}")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"col-end-{n}")," to achieve this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="tile bg-teal-500 col-start-1 col-end-4 md:col-start-1 md:col-end-6 lg:col-start-1 lg:col-end-9">\n  <h1 class="tile-marker">ONE</h1>\n</div>\n')),(0,i.kt)("p",null,"But look at the double responsive classes for at each breakpoint for each of start and end:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"md:col-start-1 md:col-end-6 lg:col-start-1 lg:col-end-9\n")),(0,i.kt)("p",null,"They are not very DRY. ",(0,i.kt)("inlineCode",{parentName:"p"},"col-span-{n}")," classes are better for setting the size."),(0,i.kt)("p",null,"Let's set some more sizes. The width of the second and third ",(0,i.kt)("inlineCode",{parentName:"p"},"div"),"s like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="tile bg-amber-500 col-span-1 md:col-span-2 lg:col-span-3">\n  <h1 class="tile-marker">TWO</h1>\n</div>\n<div class="tile bg-yellow-500 col-span-2 md:col-span-3 lg:col-span-5">\n  <h1 class="tile-marker">THREE</h1>\n</div>\n')),(0,i.kt)("h3",{id:"placement"},"Placement"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"col-span-{n}")," classes provide limited freedom to place ",(0,i.kt)("inlineCode",{parentName:"p"},"div"),"s inside the grid container, whereas ",(0,i.kt)("inlineCode",{parentName:"p"},"col-start-{n}")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"col-end-{n}")," leads to a lot of repetition when responsive classes are used."),(0,i.kt)("p",null,"We can combine start classes with span classes to write more succinct code. Start classes can be used to ",(0,i.kt)("strong",{parentName:"p"},"place")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," and span classes can be used to define its width and height."),(0,i.kt)("p",null,"Let's see an instance of it with the fourth ",(0,i.kt)("inlineCode",{parentName:"p"},"div"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="tile bg-lime-600 lg:col-start-4 lg:col-span-2">\n  <h1 class="tile-marker">FOUR</h1>\n</div>\n')),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-21-tailwind-grid/tailwind-grid-6.png",alt:"tailwind grid 6"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"As we can see, at ",(0,i.kt)("inlineCode",{parentName:"p"},"lg")," and onward the fourth ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," starts at column four and spans two columns to the right."),(0,i.kt)("p",null,"OK."),(0,i.kt)("p",null,"Now if we look closely at the layout, we see that everything is haphazard and it is still not a well set and usable grid to work with - as the last two ",(0,i.kt)("inlineCode",{parentName:"p"},"div"),"s seem to be isolated from the rest. This is because, we have applied the half of the equation: only Grid ",(0,i.kt)("strong",{parentName:"p"},"column")," classes. The other half involves the Grid ",(0,i.kt)("strong",{parentName:"p"},"rows"),"."),(0,i.kt)("hr",null),(0,i.kt)(c,{title:"Small dev teams love this React framework!",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/generic_banner.png",mdxType:"PromotionBanner"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"grid-rows"},"Grid Rows"),(0,i.kt)("p",null,"If we want to have finer control over the Grid, we need to explicitly set the number of rows, just like we have the columns. We'll do this by introducing ",(0,i.kt)("inlineCode",{parentName:"p"},"grid-rows-{n}"),"."),(0,i.kt)("p",null,"For our grid, we want 5 rows. The number of rows has been defined implicitly so far, but we want to define it explicitly this time. So, we add ",(0,i.kt)("inlineCode",{parentName:"p"},"grid-rows-5")," to our container:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container m-auto grid grid-cols-3 grid-rows-5 md:grid-cols-5 lg:grid-cols-8 gap-4">\n')),(0,i.kt)("p",null,"Now, we can go ahead and set the last ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," to become a footer. This footer will be placed to the bottom row. To the left side on smaller screens but span the entire bottom row after ",(0,i.kt)("inlineCode",{parentName:"p"},"md"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="tile bg-pink-500 row-start-5 md:col-span-full">\n  <h1 class="tile-marker">NINE</h1>\n</div>\n')),(0,i.kt)("p",null,"Here, ",(0,i.kt)("inlineCode",{parentName:"p"},"row-start-5")," tells the footer to be placed to the bottom row. It looks like this:"),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-21-tailwind-grid/tailwind-grid-7.gif",alt:"tailwind grid 7"})),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"span-rows"},"Span Rows"),(0,i.kt)("p",null,"We can go further and make it more structured. Let's make the second ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," span the left side of the grid - between the navbar and the footer. We can do this by choosing the second row as the starting point of the ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," and ending at 5:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="tile bg-amber-500 row-start-2 row-end-5 col-span-1 md:col-span-2 lg:col-span-3">\n  <h1 class="tile-marker">TWO</h1>\n</div>\n')),(0,i.kt)("p",null,"We have it shaping into a better website layout:"),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-21-tailwind-grid/tailwind-grid-8.gif",alt:"tailwind grid 8"})),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"reorder-regions"},"Reorder Regions"),(0,i.kt)("p",null,"We can change the order of a region by altering the the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"row-start-{n}")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"col-start-{n}"),". The second ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," could be an ad section which we want to display at the bottom on smaller screens and at the top on larger screens. Let's set its order at smaller screens first and then change it at ",(0,i.kt)("inlineCode",{parentName:"p"},"md"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="tile bg-yellow-500 row-start-4 row-end-5 md:row-start-2 md:row-end-3 col-span-2 md:col-span-3 lg:col-span-5">\n  <h1 class="tile-marker">THREE</h1>\n</div>\n')),(0,i.kt)("p",null,"We have something looking like this:"),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-21-tailwind-grid/tailwind-grid-9.gif",alt:"tailwind grid 4"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"And the final ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- index.html --\x3e\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <link href="/dist/styles.css" rel="stylesheet">\n  <title>Document</title>\n  </head>\n  <body>\n    <div class="container m-auto grid grid-cols-3 grid-rows-5 md:grid-cols-5 lg:grid-cols-8 gap-4">\n      <div class="tile bg-teal-500 col-span-full">\n        <h1 class="tile-marker">ONE</h1>\n      </div>\n      <div class="tile bg-amber-500 row-start-2 row-end-5 col-span-1 md:col-span-2 lg:col-span-3">\n        <h1 class="tile-marker">TWO</h1>\n      </div>\n      <div class="tile bg-yellow-500 row-start-4 row-end-5 md:row-start-2 md:row-end-3 col-span-2 md:col-span-3 lg:col-span-5">\n        <h1 class="tile-marker">THREE</h1>\n      </div>\n      <div class="tile bg-lime-600 lg:col-start-4 lg:col-span-2">\n        <h1 class="tile-marker">FOUR</h1>\n      </div>\n      <div class="tile bg-green-600">\n        <h1 class="tile-marker">FIVE</h1>\n      </div>\n      <div class="tile bg-emerald-500">\n        <h1 class="tile-marker">SIX</h1>\n      </div>\n      <div class="tile bg-teal-500">\n        <h1 class="tile-marker">SEVEN</h1>\n      </div>\n      <div class="tile bg-purple-500">\n        <h1 class="tile-marker">EIGHT</h1>\n      </div>\n      <div class="tile bg-pink-500 row-start-5 md:col-span-full">\n        <h1 class="tile-marker">NINE</h1>\n      </div>\n    </div>\n  </body>\n</html>\n')),(0,i.kt)("h2",{id:"customizing-tailwindcss-theme"},"Customizing TailwindCSS Theme"),(0,i.kt)("p",null,"As mentioned above, ",(0,i.kt)("strong",{parentName:"p"},"TailwindCSS Grid")," configuration can be changed according to our needs."),(0,i.kt)("p",null,"Let's say for some reason we want to set the maximum number of Tailwind's grid columns to be 16. This means we will need to be able to generate all the ",(0,i.kt)("inlineCode",{parentName:"p"},"grid-cols-{n}")," classes starting from ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," 0 to 16. This also means we will need to generate all the ",(0,i.kt)("inlineCode",{parentName:"p"},"col-start-{n}")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"col-end-{n}")," classes."),(0,i.kt)("p",null,"We can generate these classes by extending the related properties in the ",(0,i.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file. For our purposes, the ",(0,i.kt)("inlineCode",{parentName:"p"},"gridTemplateColumns"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"gridColumnStart")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"gridColumnEnd")," properties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// tailwin.config.js\n\nmodule.exports = {\n  theme: {\n    extend: {\n      gridTemplateColumns: {\n        // Simple 16 column grid\n        '16': 'repeat(16, minmax(0, 1fr))',\n      },\n       gridColumnStart: {\n        '13': '13',\n        '14': '14',\n        '15': '15',\n        '16': '16',\n        '17': '17',\n      },\n      gridColumnEnd: {\n        '13': '13',\n        '14': '14',\n        '15': '15',\n        '16': '16',\n        '17': '17',\n      }\n    }\n  }\n}\n")),(0,i.kt)("p",null,"This will make all the relevant grid classes available for us to use."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this article, we built a simple responsive layout using ",(0,i.kt)("strong",{parentName:"p"},"Tailwind's CSS Grid")," classes. These classes allow us to set the number of columns and rows explicitly, and help us make the layout responsive by allowing us to reset them at larger breakpoints."),(0,i.kt)("p",null,"We can also easily alter the size and placement of a given section with ",(0,i.kt)("strong",{parentName:"p"},"Tailwind Grid"),". Reordering of sections at different breakpoints are also commonly done. And perhaps more conveniently, Tailwind allows us to customize many of the properties for generating classes we need so that we can build fluid and responsive layouts according to our individual needs."))}g.isMDXComponent=!0}}]);