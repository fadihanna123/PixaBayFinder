(this.webpackJsonppixabayfinder=this.webpackJsonppixabayfinder||[]).push([[0],{62:function(n,e,t){"use strict";t.r(e);var r,a,i,s=t(0),c=t.n(s),d=t(28),o=t.n(d),b=t(4),l=t(10),p=t(8),h=t.n(p),u=t(5),x=t(1),j=function(n){var e=n.search,t=n.list,r=n.loading,a=n.error;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(w,{children:e.query?t&&t.totalHits>0?a?Object(x.jsx)("div",{style:{color:"red"},children:a}):r?t.hits.map((function(n,e){return Object(x.jsx)(y,{children:Object(x.jsx)("a",{"data-lightbox":"mygallery",href:n.largeImageURL,children:Object(x.jsx)("img",{src:n.webformatURL,alt:""})})},e)})):Object(x.jsx)("div",{className:"spinner"}):Object(x.jsx)(v,{children:"No images found!"}):""})})};j.defaultProps={search:{query:""},list:{},loading:!1,error:""};var g,m,O,f=j,y=u.b.div(r||(r=Object(b.a)(["\n  padding: 20px;\n  img {\n    height: 300px;\n  }\n"]))),v=u.b.div(a||(a=Object(b.a)(["\n  grid-column-start: 3;\n  grid-column-end: 5;\n  @media (max-width: 1900px) {\n    grid-column-start: 1;\n    grid-column-end: 5;\n  }\n"]))),w=u.b.div(i||(i=Object(b.a)(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  @media (max-width: 1900px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  @media (max-width: 560px) {\n    grid-template-columns: 1fr;\n  }\n"]))),k=t(11),q=t(14),S=t(15),L=t.n(S),z=t(32),E=function(n){var e=n.search,t=n.setSearch,r=n.setLoading,a=n.setList,i=n.setError,s=function(){var n=Object(z.a)(L.a.mark((function n(e){var t,s;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r&&r(!0),n.next=4,h()({url:"?key=18269871-9984b5717c4bef14378a76910&q="+e+"&image_type=photo&pretty=true"});case 4:t=n.sent,s=t.data,a&&a(s),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),i&&i(n.t0.message);case 12:return n.prev=12,r&&r(!0),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(e){return n.apply(this,arguments)}}();return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(P,{children:Object(x.jsx)(R,{children:Object(x.jsx)(U,{id:"query",name:"query",placeholder:"Type here",value:e.query,onChange:function(n){t&&t(Object(q.a)(Object(q.a)({},e),{},Object(k.a)({},n.target.name,n.target.value))),s(n.target.value)}})})})})};E.defaultProps={search:{query:""},setSearch:{query:""},setError:""};var F,C=E,P=u.b.div(g||(g=Object(b.a)(["\n  display: grid;\n  width: 40%;\n  margin: 0 auto;\n\n  @media (max-width: 1900px) {\n    width: 100%;\n  }\n"]))),R=u.b.div(m||(m=Object(b.a)(["\n  margin-top: 30px;\n\n  @media (min-width: 900px) and (max-width: 1900px) {\n    display: grid;\n    width: 50%;\n    margin: 0 auto;\n  }\n"]))),U=u.b.input(O||(O=Object(b.a)(["\n  display: block;\n  width: 100%;\n  min-height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid gray;\n  appearance: none;\n  border-radius: 0.25rem;\n  margin-bottom: 10px;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n\n  &:focus {\n    border-color: #0275d8;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px lightblue;\n    outline: 0 none;\n  }\n"])));h.a.defaults.baseURL="https://pixabay.com/api/",h.a.defaults.headers["Content-Type"]="application/json";var B,H=function(){var n=Object(s.useState)(""),e=Object(l.a)(n,2),t=e[0],r=e[1],a=Object(s.useState)({query:""}),i=Object(l.a)(a,2),c=i[0],d=i[1],o=Object(s.useState)(),b=Object(l.a)(o,2),p=b[0],h=b[1],u=Object(s.useState)(!1),j=Object(l.a)(u,2),g=j[0],m=j[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(I,{children:[Object(x.jsx)("h1",{children:"PixaBay Finder"}),Object(x.jsx)(C,{search:c,setSearch:d,setList:h,setLoading:m,setError:r}),Object(x.jsx)(f,{error:t,setError:r,list:p,search:c,loading:g}),Object(x.jsx)("i",{children:"Created by Fadi Hanna."})]})})},I=u.b.div(F||(F=Object(b.a)(["\n  margin: 10px;\n  text-align: center;\n"]))),J=Object(u.a)(B||(B=Object(b.a)(['\n  * \n  {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: 0;\n    font-size: 100%;\n  }\n\n  .spinner:after {\n    content: "";\n    box-sizing: border-box;\n    position: absolute;\n    top: 40%;\n    left: 50%;\n    height: 60px;\n    width: 60px;\n    margin-top: -30px;\n    margin-left: -30px;\n    border-radius: 50%;\n    border: 3px solid lightgray;\n    border-top-color: #0275d8;\n    animation: spinner 0.7s linear infinite;\n  }\n\n  @keyframes spinner {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n\n\n  img\n  {\n    width: 100%;\n    max-width: 100%;\n    height: auto;\n  }\n\n  @media (max-width: 1500px)\n  {\n    body\n    {\n      margin: 0;\n      padding: 0;\n      font-size: 100%;\n      width: 100%;\n    }\n\n  }\n\n']))),N=t(33);o.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsxs)(N.a,{children:[Object(x.jsx)(J,{}),Object(x.jsx)(H,{})]})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.4064d757.chunk.js.map