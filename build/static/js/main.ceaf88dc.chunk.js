(this.webpackJsonppixabayfinder=this.webpackJsonppixabayfinder||[]).push([[0],{61:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(0),a=t.n(i),c=t(27),o=t.n(c),d=t(4),u=t(13),s=t.n(u),b=t(28),p=t(9),l=t(14),x=t(10),m=t(5),g=t(29),h=t.n(g);function j(){var n=Object(d.a)(["\n  display: block;\n  width: 100%;\n  min-height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid gray;\n  appearance: none;\n  border-radius: 0.25rem;\n  margin-bottom: 10px;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n\n  &:focus {\n    border-color: #0275d8;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px lightblue;\n    outline: 0 none;\n  }\n"]);return j=function(){return n},n}function f(){var n=Object(d.a)(["\n  padding: 20px;\n\n  img {\n    height: 300px;\n  }\n"]);return f=function(){return n},n}function O(){var n=Object(d.a)(["\n  grid-column-start: 3;\n  grid-column-end: 5;\n  @media (max-width: 1900px) {\n    grid-column-start: 1;\n    grid-column-end: 5;\n  }\n"]);return O=function(){return n},n}function v(){var n=Object(d.a)(["\n  margin-top: 30px;\n"]);return v=function(){return n},n}function y(){var n=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  @media (max-width: 1900px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  @media (max-width: 560px) {\n    grid-template-columns: 1fr;\n  }\n"]);return y=function(){return n},n}function w(){var n=Object(d.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n"]);return w=function(){return n},n}function k(){var n=Object(d.a)(["\n  margin: 10px;\n  text-align: center;\n"]);return k=function(){return n},n}var q=function(){var n=Object(i.useState)({query:""}),e=Object(x.a)(n,2),t=e[0],a=e[1],c=Object(i.useState)([]),o=Object(x.a)(c,2),d=o[0],u=o[1],m=Object(i.useState)(!1),g=Object(x.a)(m,2),j=g[0],f=g[1],O=function(){var n=Object(b.a)(s.a.mark((function n(e){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,f(!1),n.next=4,h()({url:"https://pixabay.com/api/?key=18269871-9984b5717c4bef14378a76910&q="+e+"&image_type=photo&pretty=true"}).then((function(n){return u(n.data)})).catch((function(n){return u(n)}));case 4:f(!0),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(z,{children:[Object(r.jsx)("h1",{children:"PixaBay Finder"}),Object(r.jsx)(S,{children:Object(r.jsx)(B,{children:Object(r.jsx)(I,{id:"query",name:"query",placeholder:"Type here",value:t.query,onChange:function(n){a(Object(l.a)(Object(l.a)({},t),{},Object(p.a)({},n.target.name,n.target.value))),O(n.target.value)}})})}),Object(r.jsx)(F,{children:t.query?d.totalHits>0?j?d.hits.map((function(n,e){return Object(r.jsx)(H,{children:Object(r.jsx)("a",{"data-lightbox":"mygallery",href:n.largeImageURL,children:Object(r.jsx)("img",{src:n.webformatURL,alt:""})})},e)})):Object(r.jsx)("div",{className:"spinner"}):Object(r.jsx)(C,{children:"No images found"}):""}),Object(r.jsx)("i",{children:"Created by Fadi Hanna."})]})})},z=m.b.div(k()),S=m.b.div(w()),F=m.b.div(y()),B=m.b.div(v()),C=m.b.div(O()),H=m.b.div(f()),I=m.b.input(j());function J(){var n=Object(d.a)(['\n  * \n  {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: 0;\n  }\n\n  .spinner:after {\n    content: "";\n    box-sizing: border-box;\n    position: absolute;\n    top: 40%;\n    left: 50%;\n    height: 60px;\n    width: 60px;\n    margin-top: -30px;\n    margin-left: -30px;\n    border-radius: 50%;\n    border: 3px solid lightgray;\n    border-top-color: #0275d8;\n    animation: spinner 0.7s linear infinite;\n  }\n\n  @keyframes spinner {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n\n\n  img\n  {\n    width: 100%;\n    max-width: 100%;\n    height: auto;\n  }\n\n  @media (max-width: 1500px)\n  {\n    body\n    {\n      margin: 0;\n      padding: 0;\n      font-size: 100%;\n      width: 100%;\n    }\n\n  }\n\n']);return J=function(){return n},n}var L=Object(m.a)(J()),N=t(33);o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsxs)(N.a,{children:[Object(r.jsx)(L,{}),Object(r.jsx)(q,{})]})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.ceaf88dc.chunk.js.map