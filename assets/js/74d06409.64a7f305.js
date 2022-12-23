"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12233],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Creating a React search bar and content filtering components",description:"Article about how to create Search bar and filter component in React",slug:"react-search-bar-and-filtering",authors:"madars_biss",tags:["react","refine","search-bar","filtering"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-26-react-content-filtering/refine-filter-social.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/react-search-bar-and-filtering",source:"@site/blog/2022-08-26-react-content-filtering.md",title:"Creating a React search bar and content filtering components",description:"Article about how to create Search bar and filter component in React",date:"2022-08-26T00:00:00.000Z",formattedDate:"August 26, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"refine",permalink:"/blog/tags/refine"},{label:"search-bar",permalink:"/blog/tags/search-bar"},{label:"filtering",permalink:"/blog/tags/filtering"}],readingTime:14.51,hasTruncateMarker:!0,authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],frontMatter:{title:"Creating a React search bar and content filtering components",description:"Article about how to create Search bar and filter component in React",slug:"react-search-bar-and-filtering",authors:"madars_biss",tags:["react","refine","search-bar","filtering"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-26-react-content-filtering/refine-filter-social.png",hide_table_of_contents:!1},prevItem:{title:"Javascript Currying - Variadic Currying",permalink:"/blog/javascript-variadic-currying"},nextItem:{title:"MUI Icons in React",permalink:"/blog/mui-icons-in-react"},relatedPosts:[{title:"Using Material UI DataGrid component with refine app",permalink:"/blog/mui-datagrid-refine",formattedDate:"August 23, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:16.355,date:"2022-08-23T00:00:00.000Z"},{title:"How to use Conditional Rendering in React",permalink:"/blog/react-conditional-rendering",formattedDate:"December 14, 2022",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:10.595,date:"2022-12-14T00:00:00.000Z"},{title:"How to use Material UI Tooltip",permalink:"/blog/material-ui-tooltip-component",formattedDate:"November 29, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:8.38,date:"2022-11-29T00:00:00.000Z"}],authorPosts:[]},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Why refine framework?",id:"why-refine-framework",level:2},{value:"App wireframe",id:"app-wireframe",level:2},{value:"Setting up the refine",id:"setting-up-the-refine",level:2},{value:"Add global styling",id:"add-global-styling",level:2},{value:"Creating the components",id:"creating-the-components",level:2},{value:"Creating a filter box",id:"creating-a-filter-box",level:3},{value:"Creating a search bar",id:"creating-a-search-bar",level:3},{value:"Content card",id:"content-card",level:3},{value:"Implementing the logic",id:"implementing-the-logic",level:2},{value:"Testing the app",id:"testing-the-app",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Example",id:"example",level:2}],c=(d="StackblitzExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const m={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Filtering systems are common for most modern web applications. They are especially useful if there are large amounts of data. They allow users to save time and easily access the information they are looking for."),(0,r.kt)("p",null,"You will often meet various implementations in e-commerce stores, human resource management systems, video/blogging platforms, and many other sites."),(0,r.kt)("p",null,"Steps we'll cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#why-refine-framework"},"Why refine framework?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#app-wireframe"},"App wireframe")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setting-up-the-refine"},"Setting up the refine")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#add-global-styling"},"Add global styling")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#creating-the-components"},"Creating the components"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#creating-a-filter-box"},"Creating a filter box")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#creating-a-search-bar"},"Creating a search bar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#content-card"},"Content card")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#implementing-the-logic"},"Implementing the logic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#testing-the-app"},"Testing the app")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#conclusion"},"Conclusion"))),(0,r.kt)("p",null,"Today we will be building a filtering system that will let us sort the results through filter buttons and custom search queries."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-26-react-content-filtering/demo.png",alt:"demo"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"We will use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine")," framework, which is based on React and allows users to build tools rapidly."),(0,r.kt)("h2",{id:"why-refine-framework"},"Why refine framework?"),(0,r.kt)("p",null,"Every refine project is easy to set up since it allows users to use the interactive terminal wizard. It takes less than a minute, with complete user control and no trade-offs between speed and flexibility."),(0,r.kt)("p",null,"refine also comes with a built-in data provider, meaning we will not have to look for any external sources of data. The data to filter will be easy to access via their built-in API."),(0,r.kt)("p",null,"Another advantage of the refine for this project will be their component structure. For example, it will allow us to easily create a standard layout component and integrate it from the root."),(0,r.kt)("h2",{id:"app-wireframe"},"App wireframe"),(0,r.kt)("p",null,"The whole application will be wrapped in the layout component."),(0,r.kt)("p",null,"We will place the filtering UI on the top section of the app. There will be separate filter buttons for different types of content and a search bar, allowing users to narrow down their searches."),(0,r.kt)("p",null,"The content cards will be listed directly below.\nWhen putting everything into the wireframe, we get the following schema:"),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-26-react-content-filtering/wireframe.png",alt:"wireframe"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"setting-up-the-refine"},"Setting up the refine"),(0,r.kt)("p",null,"The recommended way to set up the refine project is to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/superplate"},"superplate"),", which will let us configure the refine boilerplate."),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"npx superplate-cli -p refine-react tutorial")," and select your package manager, project name, user interface framework, router, data, auth provider, and internationalization library."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-26-react-content-filtering/terminal.png",alt:"terminal"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Change the working directory to the newly created folder by running ",(0,r.kt)("inlineCode",{parentName:"p"},"cd tutorial")," and then run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev")," to start the refine development server."),(0,r.kt)("p",null,"Within seconds it should automatically bring up your default browser with the preview of the app. If it does not, open the browser manually and navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-26-react-content-filtering/boilerplate.png",alt:"boilerplate"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"add-global-styling"},"Add global styling"),(0,r.kt)("p",null,"refine is a headless Framework, so it does not include UI Components by default.\nHowever, refine supports Materil UI and Antdesign for quick and easy solutions."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/#introduction"},"Refer to refine tutorials for UI implementation examples")),(0,r.kt)("p",null,"We will create our custom styles."),(0,r.kt)("p",null,"In order to create the global style rules for the app, navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," directory, create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"styles.css"),", and include the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/styles.css"',title:'"src/styles.css"'},'@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Montserrat", sans-serif;\n}\n\nbody {\n  padding: 20px;\n  height: 100vh;\n  background-color: #fee140;\n  background-image: linear-gradient(90deg, #fee140 0%, #fa709a 100%);\n}\n')),(0,r.kt)("p",null,"We set some default margin, padding, and box-sizing rules for the application so that the app looks the same on different browsers. We also imported ",(0,r.kt)("a",{parentName:"p",href:"https://fonts.google.com/"},"Montserrat")," font."),(0,r.kt)("p",null,"For the body, we set some padding for the mobile screens, set the height to always fill the screen, and added a nice gradient based on orange and pink shades."),(0,r.kt)("p",null,"Finally, include the style sheet in the ",(0,r.kt)("inlineCode",{parentName:"p"},"index.tsx")," file, which should then look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'import React from "react";\nimport ReactDOM from "react-dom";\nimport "styles.css";\n\nimport App from "./App";\n\nReactDOM.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>,\n  document.getElementById("root")\n);\n')),(0,r.kt)("h2",{id:"creating-the-components"},"Creating the components"),(0,r.kt)("p",null,"In this section, we will create a seperate folder for components and style them. We will use the terminal to create all the necessary files we designed in the wireframing phase to save time."),(0,r.kt)("p",null,"To do that, run the command: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd src && mkdir components && cd components && touch Filter.tsx Filter.module.css Search.tsx Search.module.css Card.tsx Card.module.css \n")),(0,r.kt)("h3",{id:"creating-a-filter-box"},"Creating a filter box"),(0,r.kt)("p",null,"To create a filter component used to select the content based on its type - draft, published, or rejected, open the ",(0,r.kt)("inlineCode",{parentName:"p"},"Filter.tsx")," file and include the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/components/Filter.tsx"',title:'"src/components/Filter.tsx"'},'import styles from "./Filter.module.css";\n\nconst capitalize = (str: string) =>\n  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();\n\nexport const Filter = ({\n  title,\n  isActive,\n  onClick,\n}: {\n  title: string;\n  isActive: boolean;\n  onClick: React.MouseEventHandler;\n}) => {\n  return (\n    <div\n      className={styles.wrapper}\n      onClick={onClick}\n      style={{ backgroundColor: `${isActive ? "lavender" : "white"}` }}\n    >\n      <div\n        className={styles.circle}\n        style={{\n          borderColor: `${\n            title === "draft"\n              ? "gold"\n              : title === "rejected"\n              ? "tomato"\n              : "limegreen"\n          }`,\n        }}\n      ></div>\n      <h3 className={styles.title}>{capitalize(title)}</h3>\n    </div>\n  );\n};\n')),(0,r.kt)("p",null,"We first imported the style sheet file to style the filter button."),(0,r.kt)("p",null,"Then we created a capitalize function that we will use to capitalize the filter name used in the button."),(0,r.kt)("p",null,"We used the ",(0,r.kt)("inlineCode",{parentName:"p"},"isActive")," prop to decide whether or not the filter is active and assigned the background color accordingly using the JavaScript template syntax."),(0,r.kt)("p",null,"We also used the title prop to assign the filter type and give a specific color tag to it. The title prop is also used for the name of the filter."),(0,r.kt)("p",null,"Finally, we used the onClick prop, which will control the behavior when the filter button is pressed. We will pass it in in the later phase of the tutorial when implementing the main logic."),(0,r.kt)("p",null,"To style the filter button, open the ",(0,r.kt)("inlineCode",{parentName:"p"},"Filter.module.css")," file and include the following rules:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/components/Filter.module.css"',title:'"src/components/Filter.module.css"'},".wrapper {\n  display: flex;\n  padding: 10px 20px;\n  margin-bottom: 20px;\n  background-color: white;\n  align-items: center;\n  border-radius: 10px;\n  transition: transform 0.2s;\n}\n\n.wrapper:hover {\n  cursor: pointer;\n  transform: scale(1.05);\n}\n\n.title {\n  text-align: left;\n}\n\n.circle {\n  display: flex;\n  width: 20px;\n  height: 20px;\n  margin-right: 30px;\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 5px;\n}\n")),(0,r.kt)("p",null,"We first set the flex layout for the component, with some padding and margin. Then we set the background color of the button to be white and aligned the items vertically."),(0,r.kt)("p",null,"Then we implemented the hover effect, where the button gets zoomed in when the user moves the cursor over the button."),(0,r.kt)("p",null,"We set the button's title to be positioned left for the button's contents. For the color tag, we used a flex layout, added static width and height, set some margins, and described the border parameters."),(0,r.kt)("br",null),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://github.com/refinedev/refine"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/github-support-banner.png",alt:"github support banner"}))),(0,r.kt)("h3",{id:"creating-a-search-bar"},"Creating a search bar"),(0,r.kt)("p",null,"To create a search component used to filter the content based on the custom user search queries, open the ",(0,r.kt)("inlineCode",{parentName:"p"},"Search.tsx")," file and include the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/components/Search.tsx"',title:'"src/components/Search.tsx"'},'import styles from "./Search.module.css";\n\nexport const Search = ({\n  onChange,\n}: {\n  onChange: React.ChangeEventHandler;\n}) => {\n  return (\n    <input\n      className={styles.search}\n      type="text"\n      onChange={onChange}\n      placeholder="Search by the title ..."\n    />\n  );\n};\n')),(0,r.kt)("p",null,"We first imported the style sheet to style the search box."),(0,r.kt)("p",null,"Then we set the type of the input to be text, added some placeholder text to be displayed when there is no input as well as using the ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," prop, which will determine the behavior when the user enters the input."),(0,r.kt)("p",null,"To style the search bar, open the ",(0,r.kt)("inlineCode",{parentName:"p"},"Search.module.css")," file and include the following rules:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/components/Search.module.css"',title:'"src/components/Search.module.css"'},".search {\n  width: 100%;\n  margin-bottom: 50px;\n  padding: 20px;\n  border: none;\n  border-radius: 10px;\n  font-size: 20px;\n}\n")),(0,r.kt)("p",null,"We set the search bar to use all the available with of the parent wrapper, added some margin and padding, removed the default border, set the search box to be rounded, and defined the specific font size."),(0,r.kt)("h3",{id:"content-card"},"Content card"),(0,r.kt)("p",null,"To create a content card used to display the content, open the ",(0,r.kt)("inlineCode",{parentName:"p"},"Card.tsx")," file and include the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/components/Card.tsx"',title:'"src/components/Card.tsx"'},'import styles from "./Card.module.css";\n\nimport { motion } from "framer-motion";\n\nexport const Card = ({ title, status }: { title: string; status: string }) => {\n  return (\n    <motion.div\n      className={styles.wrapper}\n      animate={{ opacity: 1 }}\n      initial={{ opacity: 0 }}\n      exit={{ opacity: 0 }}\n    >\n      <div\n        className={styles.circle}\n        style={{\n          borderColor: `${\n            status === "draft"\n              ? "gold"\n              : status === "rejected"\n              ? "tomato"\n              : "limegreen"\n          }`,\n        }}\n      ></div>\n      <h3 className={styles.title}>{title}</h3>\n    </motion.div>\n  );\n};\n')),(0,r.kt)("p",null,"We first imported the style sheet to style the content card."),(0,r.kt)("p",null,"Then we imported the ",(0,r.kt)("inlineCode",{parentName:"p"},"framer-motion")," library to animate the cards when the filters are being applied. We passed it to the wrapper ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," and set it to animate from invisible to fully visible on entry and back to invisible on exit."),(0,r.kt)("p",null,"We used the ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," prop to assign a specific color tag to each card."),(0,r.kt)("p",null,"Finally, we made use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," prop to display the content of the card."),(0,r.kt)("p",null,"To style the content card, open the ",(0,r.kt)("inlineCode",{parentName:"p"},"Card.module.css")," file and include the following rules:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/components/Card.module.css"',title:'"src/components/Card.module.css"'},".wrapper {\n  display: grid;\n  grid-template-columns: 50px auto;\n  padding: 20px;\n  margin-bottom: 20px;\n  background-color: white;\n  font-weight: bold;\n  align-items: center;\n  border-radius: 10px;\n}\n\n.wrapper:hover {\n  cursor: pointer;\n}\n\n.circle {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-style: solid;\n  border-width: 5px;\n  border-radius: 50%;\n}\n")),(0,r.kt)("p",null,"We set the content card to use a grid layout that includes two columns. We also added some padding and margin, set the background color to white, bolded the font, centered everything vertically, and assigned slightly rounded borders."),(0,r.kt)("p",null,"We also improved the UX by changing the cursor to the pointer when the user hovers over the content cards."),(0,r.kt)("p",null,"For the color tag, we used an inline-block layout with specified width and height and set custom border properties."),(0,r.kt)("h2",{id:"implementing-the-logic"},"Implementing the logic"),(0,r.kt)("p",null,"While still on the ",(0,r.kt)("inlineCode",{parentName:"p"},"components")," folder, run a terminal command ",(0,r.kt)("inlineCode",{parentName:"p"},"touch Posts.tsx Posts.module.css")," to create the file for the logic of the app and style it."),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"Posts.tsx")," and include the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/components/Posts.tsx"',title:'"src/components/Posts.tsx"'},'import { useState } from "react";\nimport { useMany } from "@pankod/refine-core";\n\nimport { Filter } from "./Filter";\nimport { Search } from "./Search";\nimport { Card } from "./Card";\n\nimport { motion, AnimatePresence } from "framer-motion";\nimport styles from "./Posts.module.css";\n\nexport const Posts = () => {\n  const [inputValue, setInputValue] = useState("");\n  const [activeFilter, setActiveFilter] = useState("");\n\n  const posts = useMany<{\n    id: number;\n    title: string;\n    status: string;\n  }>({\n    resource: "posts",\n    ids: Array.from(Array(8).keys()).slice(1),\n  }).data?.data;\n\n  const filters: string[] = ["published", "draft", "rejected"];\n\n  return (\n    <motion.div>\n      <div className={styles.filters}>\n        {filters.map((filter, index) => {\n          return (\n            <Filter\n              key={index}\n              title={filter}\n              isActive={filter === activeFilter}\n              onClick={(e: React.MouseEvent) => {\n                const el = e.target as HTMLElement;\n                el.textContent?.toLowerCase() !== activeFilter\n                  ? setActiveFilter(filter)\n                  : setActiveFilter("");\n              }}\n            />\n          );\n        })}\n      </div>\n      <Search\n        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {\n          setInputValue(e.target.value);\n        }}\n      />\n      <AnimatePresence>\n        {posts\n          ?.filter((el) =>\n            el.title.toLowerCase().includes(inputValue.toLowerCase())\n          )\n          .filter((e) => e.status.includes(activeFilter))\n          .map((post: { title: string; status: string }, index: number) => {\n            return <Card key={index} title={post.title} status={post.status} />;\n          })}\n      </AnimatePresence>\n    </motion.div>\n  );\n};\n')),(0,r.kt)("p",null,"We first imported the ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," hook to track the state of the app. Then we imported the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/core/hooks/data/useMany/"},(0,r.kt)("inlineCode",{parentName:"a"},"useMany"))," hook from refine to access the records of the integrated data API."),(0,r.kt)("p",null,"Then we imported all the components we created in the earlier phase of the tutorial, as well as the ",(0,r.kt)("inlineCode",{parentName:"p"},"framer-motion")," library for animations and custom style rules to style the layout."),(0,r.kt)("p",null,"We used the ",(0,r.kt)("inlineCode",{parentName:"p"},"inputValue")," variable to store the current state of the search input and the ",(0,r.kt)("inlineCode",{parentName:"p"},"activeFilter")," variable to track the currently active filter."),(0,r.kt)("p",null,"Next, we accessed the ",(0,r.kt)("inlineCode",{parentName:"p"},"posts")," route of the API and made sure we fetch data from it. We also created ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," array to define the filters that we will be using."),(0,r.kt)("p",null,"We first looped through all the filter elements and displayed them using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Filter/>")," component. We passed the ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," prop to show the name of the filter, the ",(0,r.kt)("inlineCode",{parentName:"p"},"isActive")," prop to show whether or not the particular filter is active, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"onClick")," prop to make an inactive filter active in the case of a click event and the other way around."),(0,r.kt)("p",null,"Then we displayed the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Search/>")," component and passed the ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," prop to it, which updates the ",(0,r.kt)("inlineCode",{parentName:"p"},"inputValue")," variable each time the user enters any value in the search bar."),(0,r.kt)("p",null,"Finally, we looped through the posts and used the ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," method to display only content values that include the results from the currently active search query and includes the type of currently active filter. We passed the ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," prop to display the content and the ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," prop to assign the type of each ",(0,r.kt)("inlineCode",{parentName:"p"},"<Card>")," component being rendered."),(0,r.kt)("p",null,"Notice that we also wrapped the whole ",(0,r.kt)("inlineCode",{parentName:"p"},"<Card>")," component into the ",(0,r.kt)("inlineCode",{parentName:"p"},"<AnimatePresence>")," tags imported from the ",(0,r.kt)("inlineCode",{parentName:"p"},"framer-motion")," library. Thanks to these tags, we will be able to provide the initial and exit transformations we assigned to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Card>")," component in the previous section."),(0,r.kt)("p",null,"We also need to create a layout wrapper for the filters. To do that, open the ",(0,r.kt)("inlineCode",{parentName:"p"},"Posts.module.css")," file and include the following rules:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/components/Post.module.css"',title:'"src/components/Post.module.css"'},".filters {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n@media only screen and (max-width: 650px) {\n  .filters {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n}\n")),(0,r.kt)("p",null,"We first created a grid layout with three equally wide columns for each filter and assigned some gap between them."),(0,r.kt)("p",null,"Then we made a media rule to the layout to switch to the single column layout for the smaller screens, meaning each of the filter buttons will be shown directly above each other. We also removed the gap between them since each individual filter component already comes with the margin on the bottom."),(0,r.kt)("p",null,"Now switch one level up to the ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," root and include the following code in the ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport { Posts } from "components/Posts";\n\nfunction App() {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[{ name: "posts", list: Posts }]}\n      Layout={({ children }) => (\n        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>\n          <div>{children}</div>\n        </div>\n      )}\n    />\n  );\n}\n\nexport default App;\n')),(0,r.kt)("p",null,"This is the root file of the refine app, where we passed ",(0,r.kt)("inlineCode",{parentName:"p"},"routeProvider")," for the routing, ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," to access the data API, and included the resources on the ",(0,r.kt)("inlineCode",{parentName:"p"},"posts")," route to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Posts")," component we created in the previous step of the tutorial."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Dataproviders are refine components making it possible to consume different API's and data services conveniently. "),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/core/providers/data-provider/"},"Refer to the dataProvider documentation for detailed usage. \u2192"))),(0,r.kt)("p",null,"Finally, we used the ",(0,r.kt)("inlineCode",{parentName:"p"},"Layout")," to create the main wrapper for the app. We set it to never exceed a certain width and centered it on the screen horizontally. All the content of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Layout")," were directly passed in as the ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," prop."),(0,r.kt)("h2",{id:"testing-the-app"},"Testing the app"),(0,r.kt)("p",null,"Check if your development server is still running in the terminal. If it is not run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev")," to start it again."),(0,r.kt)("p",null,"First, we will test the functionality of the filter buttons."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-26-react-content-filtering/filters.gif",alt:"filters"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"If the filter button is pressed, only the corresponding cards of that category is filtered. If the filter is already active and is pressed again, the filter is disabled and all the records are shown."),(0,r.kt)("p",null,"Now type in some search queries in the search bar."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-26-react-content-filtering/search.gif",alt:"search"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Search results are fully dynamic, meaning the filtering is updated each time you add a new character to the query."),(0,r.kt)("p",null,"Finally, let's test the app on different screen sizes."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-26-react-content-filtering/mobile.gif",alt:"mobile"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this tutorial, we first designed the overall layout for the app, then set up the refine project and created the global style rules. Then we created the individual components, put together the logic, and passed it to the refine app."),(0,r.kt)("p",null,"Two different types of content filtering (filter buttons and search bar) were implemented. In order to improve the overall user experience, we used the Framer motion library to add some great animations."),(0,r.kt)("p",null,"Feel free to modify the app with your own custom features. Play around with different color schemes, layouts, and font families. Also, since refine comes with a rich data provider, feel free to extend the content card with description, author, dates, or even images."),(0,r.kt)("br",null),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://discord.gg/refine"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(c,{path:"blog-refine-filtering",mdxType:"StackblitzExample"}),(0,r.kt)("hr",null),(0,r.kt)("div",{style:{backgroundColor:"#F8F8F8",padding:"18px",borderRadius:"10px"}},(0,r.kt)("div",{style:{fontSize:"32px",fontWeight:"700",lineHeight:"1.4",marginBottom:"25px"}},"Stop wasting your time copy/pasting your table code all over your application!"),(0,r.kt)("p",null,"Meet the headless, React-based solution to build sleek ",(0,r.kt)("strong",{parentName:"p"},"CRUD")," applications. With refine, you can be confident that your codebase will always stay clean and boilerplate-free."),(0,r.kt)("p",null,"Try ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine")," to rapidly build your next ",(0,r.kt)("strong",{parentName:"p"},"CRUD")," project, whether it's an admin panel, dashboard, internal tool or storefront."),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://github.com/refinedev/refine"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/generic_banner.png",alt:"refine blog logo"}))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," is an open-source, React-based framework for building CRUD applications without constraints. It\u2019s headless by design and seamlessly works with ",(0,r.kt)("strong",{parentName:"p"},"any custom design")," or ",(0,r.kt)("strong",{parentName:"p"},"UI framework")," you favor. For convenience, it ships with ready-made integrations for ",(0,r.kt)("strong",{parentName:"p"},"Ant Design System, Material UI and Mantine UI"),"."),(0,r.kt)("p",null,"It can ",(0,r.kt)("strong",{parentName:"p"},"speed up your development time up to 3X")," without compromising freedom on styling, customization and project workflow."),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine GitHub repository")," for more information, demos, tutorials, and example projects.")))}h.isMDXComponent=!0}}]);