(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(4),i=r.n(o),c=r(2),s=(r(9),r(0));var l=function(e){var t=e.sections,r=e.currentSection,n=e.setCurrentSection,a=e.setDropdownState;console.log(r.name);var o=t.map((function(e,t){var o=r.name===e.name?"block p-0.5 m-0.5 px-2 rounded-sm text-light hover:text-black bg-yellow-200 hover:bg-yellow-300":"block p-0.5 m-0.5 px-2 rounded-sm text-light hover:text-black hover:bg-yellow-100";return Object(s.jsx)("a",{id:e.name,className:o,href:"#"+e.name,onClick:function(){n(e),console.log(e),a("hidden")},children:e.name},e.name)}));return Object(s.jsx)("nav",{id:"menu-dropdown",className:"\r absolute\r right-1\r bg-gray-400\r mt-0.5\r rounded\r pt-2\r p-1\r z-50\r ",children:o})};var d=function(e){var t=e.sections,r=e.currentSection,a=e.setCurrentSection,o=e.dropdownState,i=e.setDropdownState;return Object(n.useEffect)((function(){document.title=r.name}),[r]),Object(s.jsxs)("header",{id:"header",className:"grid grid-cols-12 min-w-screen bg-gray-200 text-light",children:[Object(s.jsx)("h1",{className:"\r col-start-1\r sm:col-start-2\r md:col-start-3\r xl:col-start-4\r text-4xl\r m-4\r whitespace-nowrap\r ",children:"Jake Rankin"}),Object(s.jsx)("div",{className:"\r col-start-12\r md:col-start-11\r xl:col-start-10\r self-center\r flex\r space-between\r m-2\r text-sm\r ",children:Object(s.jsxs)("div",{id:"nav-btn-holder",className:"relative",children:[Object(s.jsx)("button",{id:"nav-btn",onClick:function(e){i("hidden"!==o?"hidden":"")},className:"\r block\r h-8\r w-8\r bg-light\r rounded-lg\r outline-none\r focus:outline-none\r ",children:Object(s.jsx)("i",{className:"\r fas\r fa-bars\r rounded\r outline-none\r focus:outline-none\r mx-1\r text-dark\r "})}),Object(s.jsx)("div",{className:o,children:Object(s.jsx)(l,{sections:t,currentSection:r,setCurrentSection:a,setDropdownState:i})})]})})]})};var u=function(){var e=Object(n.useState)("hidden"),t=Object(c.a)(e,2),r=t[0],a=t[1],o=Object(n.useState)([{name:"about",description:"I am an innovative web developer adept at creating digital products using cutting edge design. Earning a certificate in Full Stack Web Development from University of Wisconsin has developed my skills in Javascript, React, and Node. Cultivated throughout my academic and professional career, my strengths lie in creativity, teamwork, and building projects, such as a websocket drawing app, from ideation to execution. With a bachelor\u2019s degree in fine arts from UW-Milwaukee, I have developed an eye for modern design principles. This makes me capable of executing visually compelling pages that feature user-friendly design and navigation. My sensibility for design and teamwork coupled with a clever resourcefulness makes me a valuable addition to any team."},{name:"projects",description:"A listing of the projects I have worked on."},{name:"contact",description:"Please submit the following form in order to contact me."},{name:"resume",description:"A copy of my resume."}]),i=Object(c.a)(o,1)[0],l=Object(n.useState)(i[0]),u=Object(c.a)(l,2),m=u[0],b=u[1];return Object(s.jsx)("main",{className:"App",children:Object(s.jsx)(d,{sections:i,currentSection:m,setCurrentSection:b,dropdownState:r,setDropdownState:a})})};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root"))},9:function(e,t,r){}},[[11,1,2]]]);
//# sourceMappingURL=main.73067d6a.chunk.js.map