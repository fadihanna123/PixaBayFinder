(this.webpackJsonppixabayfinder=this.webpackJsonppixabayfinder||[]).push([[0],{62:function(n,e,t){"use strict";t.r(e);var a,r,i,c=t(0),s=t.n(c),d=t(27),o=t.n(d),b=t(4),l=t(10),p=t(5),h=t(9),g=t(13),x=t(14),u=t.n(x),m=t(28),j=t(29),O=t.n(j),f=t(1),y=function(n){var e=n.setSearch,t=n.search,a=n.setLoading,r=n.setList,i=function(){var n=Object(m.a)(u.a.mark((function n(e){var t,i;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(!0),n.next=4,O()({url:"https://pixabay.com/api/?key=18269871-9984b5717c4bef14378a76910&q="+e+"&image_type=photo&pretty=true"});case 4:t=n.sent,i=t.data,r(i),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.response);case 12:return n.prev=12,a(!0),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(e){return n.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(L,{children:Object(f.jsx)(S,{children:Object(f.jsx)(z,{id:"query",name:"query",placeholder:"Type here",value:t.query,onChange:function(n){e(Object(g.a)(Object(g.a)({},t),{},Object(h.a)({},n.target.name,n.target.value))),i(n.target.value)}})})})})};y.defaultProps={search:{query:""},setSearch:{query:""}};var w,v,k,q=y,L=p.b.div(a||(a=Object(b.a)(["\n  display: grid;\n  width: 40%;\n  margin: 0 auto;\n\n  @media (max-width: 1900px) {\n    width: 100%;\n  }\n"]))),S=p.b.div(r||(r=Object(b.a)(["\n  margin-top: 30px;\n\n  @media (min-width: 900px) and (max-width: 1900px) {\n    display: grid;\n    width: 50%;\n    margin: 0 auto;\n  }\n"]))),z=p.b.input(i||(i=Object(b.a)(["\n  display: block;\n  width: 100%;\n  min-height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid gray;\n  appearance: none;\n  border-radius: 0.25rem;\n  margin-bottom: 10px;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n\n  &:focus {\n    border-color: #0275d8;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px lightblue;\n    outline: 0 none;\n  }\n"]))),F=function(n){var e=n.search,t=n.list,a=n.loading;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(J,{children:e.query?t&&t.totalHits>0?a?t.hits.map((function(n,e){return Object(f.jsx)(H,{children:Object(f.jsx)("a",{"data-lightbox":"mygallery",href:n.largeImageURL,children:Object(f.jsx)("img",{src:n.webformatURL,alt:""})})},e)})):Object(f.jsx)("div",{className:"spinner"}):Object(f.jsx)(I,{children:"No images found!"}):""})})};F.defaultProps={search:{query:""},list:{},loading:!1};var P,B,C=F,H=p.b.div(w||(w=Object(b.a)(["\n  padding: 20px;\n  img {\n    height: 300px;\n  }\n"]))),I=p.b.div(v||(v=Object(b.a)(["\n  grid-column-start: 3;\n  grid-column-end: 5;\n  @media (max-width: 1900px) {\n    grid-column-start: 1;\n    grid-column-end: 5;\n  }\n"]))),J=p.b.div(k||(k=Object(b.a)(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  @media (max-width: 1900px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  @media (max-width: 560px) {\n    grid-template-columns: 1fr;\n  }\n"]))),N=function(){var n=Object(c.useState)({query:""}),e=Object(l.a)(n,2),t=e[0],a=e[1],r=Object(c.useState)(),i=Object(l.a)(r,2),s=i[0],d=i[1],o=Object(c.useState)(!1),b=Object(l.a)(o,2),p=b[0],h=b[1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(R,{children:[Object(f.jsx)("h1",{children:"PixaBay Finder"}),Object(f.jsx)(q,{list:s,search:t,setSearch:a,loading:p,setList:d,setLoading:h}),Object(f.jsx)(C,{list:s,search:t,setSearch:a,loading:p,setList:d,setLoading:h}),Object(f.jsx)("i",{children:"Created by Fadi Hanna."})]})})},R=p.b.div(P||(P=Object(b.a)(["\n  margin: 10px;\n  text-align: center;\n"]))),U=Object(p.a)(B||(B=Object(b.a)(['\n  * \n  {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: 0;\n    font-size: 100%;\n  }\n\n  .spinner:after {\n    content: "";\n    box-sizing: border-box;\n    position: absolute;\n    top: 40%;\n    left: 50%;\n    height: 60px;\n    width: 60px;\n    margin-top: -30px;\n    margin-left: -30px;\n    border-radius: 50%;\n    border: 3px solid lightgray;\n    border-top-color: #0275d8;\n    animation: spinner 0.7s linear infinite;\n  }\n\n  @keyframes spinner {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n\n\n  img\n  {\n    width: 100%;\n    max-width: 100%;\n    height: auto;\n  }\n\n  @media (max-width: 1500px)\n  {\n    body\n    {\n      margin: 0;\n      padding: 0;\n      font-size: 100%;\n      width: 100%;\n    }\n\n  }\n\n']))),E=t(33);o.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsxs)(E.a,{children:[Object(f.jsx)(U,{}),Object(f.jsx)(N,{})]})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.8a4e3f5f.chunk.js.map