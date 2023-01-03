"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3405],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),m=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return n?o.createElement(h,s(s({ref:t},p),{},{components:n})):o.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var m=2;m<i;m++)s[m]=n[m];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>m});var o=n(87462),a=(n(67294),n(3905));const i={title:"React useMemo hook guide with examples",description:"Improve the React app performance with useMemo() hook",slug:"react-usememo",authors:"abdullah_numan",tags:["react","memoization","usememo","performance"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-16-react-use-memo/social.jpg",hide_table_of_contents:!1},s=void 0,r={permalink:"/blog/react-usememo",source:"@site/blog/2022-09-16-react-use-memo.md",title:"React useMemo hook guide with examples",description:"Improve the React app performance with useMemo() hook",date:"2022-09-16T00:00:00.000Z",formattedDate:"September 16, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"memoization",permalink:"/blog/tags/memoization"},{label:"usememo",permalink:"/blog/tags/usememo"},{label:"performance",permalink:"/blog/tags/performance"}],readingTime:5.335,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"React useMemo hook guide with examples",description:"Improve the React app performance with useMemo() hook",slug:"react-usememo",authors:"abdullah_numan",tags:["react","memoization","usememo","performance"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-16-react-use-memo/social.jpg",hide_table_of_contents:!1},prevItem:{title:"Material UI Grid System in React",permalink:"/blog/material-ui-grid"},nextItem:{title:"React memo guide with examples",permalink:"/blog/react-memo-guide"},relatedPosts:[{title:"A Guide on Material UI AutoComplete in React",permalink:"/blog/material-ui-autocomplete-component",formattedDate:"October 19, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:14.075,date:"2022-10-19T00:00:00.000Z"},{title:"How to use Material UI Tooltip",permalink:"/blog/material-ui-tooltip-component",formattedDate:"November 29, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:8.38,date:"2022-11-29T00:00:00.000Z"},{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",permalink:"/blog/refine-react-admin-invoice-genarator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:10.975,date:"2022-02-22T00:00:00.000Z"}],authorPosts:[{title:"How to Use JavaScript Array some",permalink:"/blog/javascript-some-method",formattedDate:"October 25, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.015,date:"2022-10-25T00:00:00.000Z"},{title:"How to Use JavaScript Slice Method",permalink:"/blog/javascript-slice",formattedDate:"October 17, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.215,date:"2022-10-17T00:00:00.000Z"},{title:"How to Use Tailwind CSS Grid",permalink:"/blog/tailwind-grid",formattedDate:"October 21, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.41,date:"2022-10-21T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"Project Content Overview",id:"project-content-overview",level:3},{value:"Resource Intensive Functions",id:"resource-intensive-functions",level:2},{value:"Enter <code>useMemo()</code>",id:"enter-usememo",level:2},{value:"useMemo Dependencies",id:"usememo-dependencies",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Example",id:"example",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=p("PromotionBanner"),u=p("StackblitzExample"),d={toc:m};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This post is about how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," hook in React."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations."),(0,a.kt)("p",null,"In this post, we dive into the details of the ",(0,a.kt)("strong",{parentName:"p"},"useMemo")," hook with an extension of the example demonstrated in the previous post titled ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/blog/react-memo-guide/"},"Memoization using React memo"),"."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#resource-intensive-functions"},"Resource Intensive Functions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#enter-usememo"},"Enter ",(0,a.kt)("inlineCode",{parentName:"a"},"useMemo()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#usememo-dependencies"},"useMemo Dependencies")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#conclusion"},"Conclusion"))),(0,a.kt)("h3",{id:"project-content-overview"},"Project Content Overview"),(0,a.kt)("p",null,"The example app is based on the idea of a list of posts on a blog. There are several components involving a user seeing the latest posts and a list of the user's posts. Allow yourself some time to understand the components individually, their relationships, their state changes, and how props are passed through. It is crucial to pay close attention to how the change of a parent's state triggers the re-render of its descendants."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#live-stackblitz-example"},"Here you can find the example app's live code")),(0,a.kt)("p",null,"The discussion of this article is focused on optimizing performance by memoizing the value of resource-intensive functions, such as a sorting function. In React, we do this with the ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," hook."),(0,a.kt)("h2",{id:"resource-intensive-functions"},"Resource Intensive Functions"),(0,a.kt)("p",null,"We're going to jump back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog />")," component for this example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Blog.jsx"',title:'"src/components/Blog.jsx"'},"import React, { useEffect, useState } from 'react';\nimport fetchUpdatedPosts from '../fetch/fetchUpdatedPosts';\nimport allPosts from './../data/allPosts.json';\nimport sortPosts from '../utils/sortPosts';\nimport LatestPost from './LatestPost';\nimport UserPostsIndex from './UserPostsIndex';\n\nconst Blog = ({ signedIn }) => {\n  const [updatedPosts, setUpdatedPosts] = useState(allPosts);\n  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());\n\n  const getLatestPosts = () => {\n    const posts = fetchUpdatedPosts();\n    setUpdatedPosts(posts);\n  };\n\n const sortedPosts = sortPosts(updatedPosts);\n\n  useEffect(\n    () => {\n      const id = setInterval(\n        () => setLocalTime(new Date().toLocaleTimeString()),\n        1000\n      );\n      return () => clearInterval(id);\n    },\n    []\n  );\n\n  console.log('Rendering Blog component');\n\n  return (\n    <div className=\"container\">\n      <h1>Memoization in React</h1>\n      <div>\n        <div>\n          { /* More JSX code here... */ }\n          <LatestPost signedIn={signedIn} post={sortedPosts[0]} />\n        </div>\n        <UserPostsIndex signedIn={signedIn}/>\n      </div>\n    </div>\n  );\n};\n\nexport default React.memo(Blog);\n")),(0,a.kt)("p",null,"We'd like to focus particularly on the ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()")," utility function which can get expensive if passed a long array of posts. "),(0,a.kt)("p",null,"At the moment, we are only sorting 101 items returned from ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchUpdatedPosts()"),", but in an actual application, the number can be much higher and consume resources at scale. Thus it is an expensive function."),(0,a.kt)("p",null,"If we look inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect()")," hook, we are updating the locale time string and storing it in ",(0,a.kt)("inlineCode",{parentName:"p"},"localTime")," for our clock. ",(0,a.kt)("inlineCode",{parentName:"p"},"localTime")," updates every second, and at each state, change triggers a re-render of ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog />"),". The clock does not represent a genuine UI feature for us here, but it is there to make a point about how frequent re-renders complicate things with expensive utility functions."),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()")," logs ",(0,a.kt)("inlineCode",{parentName:"p"},"Sorting posts...")," to the console and returns a sorted array from the passed in an array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/utils/sortPosts"',title:'"src/utils/sortPosts"'},"const sortPosts = posts => {\n  console.log('Sorting posts...');\n  return posts.sort((a, b) => b.id - a.id);\n};\n\nexport default sortPosts;\n")),(0,a.kt)("p",null,"If we look at the console, we see that ",(0,a.kt)("inlineCode",{parentName:"p"},"Sorting posts...")," is being logged at 1000ms intervals, i.e. with the tick of our clock:"),(0,a.kt)("div",{class:"img-container","align-items":"center"},(0,a.kt)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-16-react-use-memo/usememo1.png",alt:"usememo1"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"This shows ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()")," is called at every re-render of ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog />"),". An expensive function, invoked every second for no obvious reason, is too much of an ask from the app. We don't want ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()")," to be called if ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," is not changed."),(0,a.kt)("hr",null),(0,a.kt)(c,{title:"CRUD apps are just boring!",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/diagram.png",description:(0,a.kt)("div",null,"Meet the headless, React-based solution to build sleek CRUD applications.  refine eliminates the repetitive tasks demanded by CRUD operations and provides industry standard solutions for critical parts like authentication, access control, routing, networking, state management, and i18n.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Try"," ",(0,a.kt)("a",{href:"https://github.com/refinedev/refine",target:"_blank"},"refine")," ","to rapidly build your next ",(0,a.kt)("b",null,"CRUD")," project, whether ","it's"," an admin panel, dashboard, internal tool or storefront."),mdxType:"PromotionBanner"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"enter-usememo"},"Enter ",(0,a.kt)("inlineCode",{parentName:"h2"},"useMemo()")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," helps us memoize the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()")," when ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," doesn't change. Let's use the memoized function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/components/Blog.jsx"',title:'"src/components/Blog.jsx"'},"-- const sortedPosts = sortPosts(updatedPosts);\n//highlight-next-line\n++ const sortedPosts = useMemo(() => sortPosts(updatedPosts), [updatedPosts]);\n")),(0,a.kt)("p",null,"Checking our console, we can see that ",(0,a.kt)("inlineCode",{parentName:"p"},"Sorting posts...")," has been logged only once, indicating only one invocation of ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()"),":"),(0,a.kt)("div",{class:"img-container","align-items":"center"},(0,a.kt)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-16-react-use-memo/usememo2.png",alt:"usememo2"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"This gives us a huge performance gain."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"usememo-dependencies"},"useMemo Dependencies"),(0,a.kt)("p",null,"Notice the dependency of ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," as the second argument, ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts"),". We are asking the hook to renew the memo when ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," changes. Let's try to change the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts"),":"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog/>")," component, we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"Get Latest Post")," button, which is used to fetch latest posts on demand. Every time ",(0,a.kt)("inlineCode",{parentName:"p"},"Get Latest Post")," button is clicked, ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," is updated with the invocation of ",(0,a.kt)("inlineCode",{parentName:"p"},"getLatestPosts()"),". "),(0,a.kt)("p",null,"If the state of ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," is changed, a re-render of ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog />")," is triggered, which leads to a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()")," with the new value of ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," passed in."),(0,a.kt)("p",null,"If we check our console while clicking the button, we can clearly see ",(0,a.kt)("inlineCode",{parentName:"p"},"Sorting posts...")," being logged for each click:"),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container","align-items":"center"},(0,a.kt)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-16-react-use-memo/usememo3.png",alt:"usememo3"})),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"It is important to notice that, if we remove the dependency from ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()")," will not be invoked when ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," change:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"  const sortedPosts = useMemo(() => sortPosts(updatedPosts), []);\n")),(0,a.kt)("p",{parentName:"admonition"},"There is no sorting going on when we need it:"),(0,a.kt)("div",{class:"img-container","align-items":"center"},(0,a.kt)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-16-react-use-memo/usememo4.png",alt:"usememo4"})),(0,a.kt)("br",null)),(0,a.kt)("br",null),(0,a.kt)("p",null,"It is also important to know that ",(0,a.kt)("strong",{parentName:"p"},"useMemo")," returns a value, as opposed to a function. This is what differentiates it from the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook, which returns a memoized function. So, ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," is preferred for memoizing a value rather than a callback function."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this article, we looked into the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," hook and found out it plays a crucial role in optimizing the performance of our app by memoizing an expensive utility function. We saw that it is important to specify the dependency of ",(0,a.kt)("strong",{parentName:"p"},"useMemo"),"  so that the memo is renewed when the state of dependency changes."),(0,a.kt)("p",null,"In the next post, we will demonstrate the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord-banner.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(u,{path:"blog-react-memoization-memo",mdxType:"StackblitzExample"}))}h.isMDXComponent=!0}}]);