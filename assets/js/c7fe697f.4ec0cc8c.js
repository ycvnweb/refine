"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56583],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=o,f=m["".concat(s,".").concat(c)]||m[c]||d[c]||n;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},251:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=a(87462),o=(a(67294),a(3905)),n=a(43208),i=a(76210);const l={title:"How to Multipart File Upload Using FormData with HTML",description:"In this guide, I'm going to show you how to multipart files upload with using HTML and JavaScript",slug:"how-to-multipart-upload",authors:"melih",tags:["JavaScript","multipart/form-data","multipart-upload","file-upload"],image:"https://refine.dev/img/refine_social.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/how-to-multipart-upload",source:"@site/blog/2021-12-27-multipart-upload.md",title:"How to Multipart File Upload Using FormData with HTML",description:"In this guide, I'm going to show you how to multipart files upload with using HTML and JavaScript",date:"2021-12-27T00:00:00.000Z",formattedDate:"December 27, 2021",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"},{label:"multipart/form-data",permalink:"/blog/tags/multipart-form-data"},{label:"multipart-upload",permalink:"/blog/tags/multipart-upload"},{label:"file-upload",permalink:"/blog/tags/file-upload"}],readingTime:3.63,truncated:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"How to Multipart File Upload Using FormData with HTML",description:"In this guide, I'm going to show you how to multipart files upload with using HTML and JavaScript",slug:"how-to-multipart-upload",authors:"melih",tags:["JavaScript","multipart/form-data","multipart-upload","file-upload"],image:"https://refine.dev/img/refine_social.png",hide_table_of_contents:!1},prevItem:{title:"How to Import CSV File with React",permalink:"/blog/how-to-import-csv"},nextItem:{title:"How to upload files from your HTML form using Base64 encoding",permalink:"/blog/how-to-base64-upload"}},u={authorsImageUrls:[void 0]},d=[{value:"What is Multipart Upload Request?",id:"what-is-multipart-upload-request",level:2},{value:"Example",id:"example",level:2},{value:"Are You Looking React Web Framework?",id:"are-you-looking-react-web-framework",level:2},{value:"How to Multipart Upload with Refine?",id:"how-to-multipart-upload-with-refine",level:2},{value:"Refine Multipart Upload Live Codesandbox Example",id:"refine-multipart-upload-live-codesandbox-example",level:2}],m={toc:d};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this guide, we will look at how we can upload a file from HTML form data to a server with the multipart-upload method. Multipart-Upload is commonly used method for sending files or data to a server."),(0,o.kt)("h2",{id:"what-is-multipart-upload-request"},"What is Multipart Upload Request?"),(0,o.kt)("p",null,"A multipart request is a HTTP request that HTTP clients construct to send files and data over to a HTTP Server. It is commonly used by browsers and HTTP clients to upload files to the server."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"We will take a file from the user with ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData"},"FormData")," and send it to the server. First, let's create our fields for the user to choose a file using HTML form."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n    <div class="container">\n        <h1>Multipart File Upload</h1>\n        <form id="form" enctype="multipart/form-data">\n            <div class="input-group">\n                <label for="files">Select files</label>\n                <input id="file" type="file" multiple />\n            </div>\n            <button class="submit-btn" type="submit">Upload</button>\n        </form>\n    </div>\n    <script src="index.js"><\/script>\n</body>\n')),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:n.Z,alt:"upload_screen"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Here we simply created an input and a button. With these HTML elements we have created, we can get the file chosen by the user."),(0,o.kt)("p",null,"Let's make a request with JavaScript and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch")," to send the selected files to the server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const form = document.getElementById("form");\nconst inputFile = document.getElementById("file");\n\nconst formData = new FormData();\n\nconst handleSubmit = (event) => {\n    event.preventDefault();\n\n    for (const file of inputFile.files) {\n        formData.append("files", file);\n    }\n\n    fetch("http://localhost:8080/files", {\n        method: "post",\n        body: formData,\n    }).catch((error) => ("Something went wrong!", error));\n};\n\nform.addEventListener("submit", handleSubmit);\n')),(0,o.kt)("p",null,"We added the file we received from the user with the input file to FormData. We then created a request to send this FormData object to the server."),(0,o.kt)("p",null,"Now, let's create a simple server using ",(0,o.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"Express")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/expressjs/multer"},"Multer")," in order to see that the files we sent are received by the server successfully."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Multer: JavaScript middleware for handling multipart/form-data , which is used for uploading files."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=server.js",title:"server.js"},'import express from "express";\nimport cors from "cors";\nimport multer from "multer";\n\nconst app = express();\n\n//Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins\napp.use(cors());\n\nconst storage = multer.diskStorage({\n    destination: (req, file, cb) => {\n        cb(null, __dirname + "/uploads");\n    },\n    filename: (req, file, cb) => {\n        cb(null, file.originalname);\n    },\n});\n\nconst Data = multer({ storage: storage });\n\napp.post("/files", Data.any("files"), (req, res) => {\n    if (res.status(200)) {\n        console.log("Your file has been uploaded successfully.");\n        console.log(req.files);\n        res.json({ message: "Successfully uploaded files" });\n        res.end();\n    }\n});\n\napp.listen(8000, () => {\n    console.log("Server is running");\n});\n')),(0,o.kt)("p",null,"As you can see, we have created our multer structure and a simple server to run locally in order to manage and receive FormData."),(0,o.kt)("p",null,"The requests we created to send files by JavaScript will now be sent to our local server."),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:i.Z,alt:"upload overview"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"are-you-looking-react-web-framework"},"Are You Looking React Web Framework?"),(0,o.kt)("p",null,"A React-based framework for building internal tools, rapidly. ",(0,o.kt)("strong",{parentName:"p"},"refine")," offers lots of out-of-the box functionality for rapid development, without compromising extreme customizability. Use-cases include, but are not limited to admin panels, B2B applications and dashboards."),(0,o.kt)("p",null,"\u2699\ufe0f Zero-configuration: One-line setup with superplate. It takes less than a minute to start a project."),(0,o.kt)("p",null,"\ud83d\udce6 Out-of-the-box : Routing, networking, authentication, state management, i18n and UI."),(0,o.kt)("p",null,"\ud83d\udd0c Backend Agnostic : Connects to any custom backend. Built-in support for REST API, Strapi, NestJs CRUD, Hasura, Nhost, Airtable, Medusa, Supabase, Appwrite and Altogic."),(0,o.kt)("p",null,"\ud83d\udcdd Native Typescript Core : You can always opt-out for plain JavaScript."),(0,o.kt)("p",null,"\ud83d\udd18 Headless : Works with any UI framework"),(0,o.kt)("p",null,"\ud83d\udc1c Enterprise UI : Works seamlessly with Ant Design System. (Support for multiple UI frameworks is on the Roadmap)"),(0,o.kt)("p",null,"\ud83d\udcdd Boilerplate-free Code : Keeps your codebase clean and readable."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/getting-started/overview/"},"Refer to the ",(0,o.kt)("strong",{parentName:"a"},"refine")," documentation for more information. \u2192")," "),(0,o.kt)("h2",{id:"how-to-multipart-upload-with-refine"},"How to Multipart Upload with Refine?"),(0,o.kt)("p",null,"The Multipart file upload process with ",(0,o.kt)("strong",{parentName:"p"},"refine")," is very simple. How to use it is explained step by step in the guide and example. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/upload/multipart-upload/"},"Refer to the ",(0,o.kt)("strong",{parentName:"a"},"refine")," Multipart Upload guide for more information. \u2192")," "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/examples/upload/multipartUpload"},"View Source")),(0,o.kt)("h2",{id:"refine-multipart-upload-live-codesandbox-example"},"Refine Multipart Upload Live Codesandbox Example"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/github/pankod/refine/tree/master/examples/upload/antd/multipart?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-multipart-upload-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}c.isMDXComponent=!0},76210:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/overview-93463ee8dff6175d1891322d7f17f94d.gif"},43208:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/upload-c767bc3a5d2ca279027ae80842009a90.png"}}]);