(this.webpackJsonppixabayfinder=this.webpackJsonppixabayfinder||[]).push([[0],{70:function(n,e,t){"use strict";t.r(e);t(41);var i,a,r,o,c,d,s,b,l,j=t(35),p=t.n(j),h=t(6),u=t(14),x=t.n(u),m=t(1),g=t(4),O=Object(g.b)({key:"searchFormState",default:{query:""}}),f=Object(g.b)({key:"listState",default:null}),y=Object(g.b)({key:"loadingState",default:!1}),v=Object(g.b)({key:"errorState",default:""}),w=t(7),k=t(2),q=function(){var n=Object(g.c)(O),e=Object(m.a)(n,1)[0],t=Object(g.c)(f),i=Object(m.a)(t,1)[0],a=Object(g.c)(v),r=Object(m.a)(a,1)[0],o=Object(g.c)(y),c=Object(m.a)(o,1)[0];return Object(k.jsxs)("main",{children:[0===(null===i||void 0===i?void 0:i.hits.length)||void 0===(null===i||void 0===i?void 0:i.hits.length)||""===e.query?"":Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("b",{"data-aos":"flip-left",children:"Results found:"})," ",null===i||void 0===i?void 0:i.hits.length]}),Object(k.jsx)(R,{children:e.query?i&&i.totalHits>0?r?Object(k.jsx)(z,{children:r}):c?i.hits.map((function(n,e){return Object(k.jsx)(S,{"data-aos":"zoom-in",children:Object(k.jsx)("a",{"data-lightbox":"mygallery",href:n.largeImageURL,children:Object(k.jsx)("img",{src:n.webformatURL,alt:""})})},e)})):Object(k.jsx)("div",{className:"spinner"}):Object(k.jsx)(F,{children:"No images found! \ud83d\ude14"}):""})]})},z=w.b.div(i||(i=Object(h.a)(["\n  color: red;\n  transition: 0.3s;\n"]))),S=w.b.div(a||(a=Object(h.a)(["\n  padding: 0;\n  overflow: hidden;\n  border: 1px solid black;\n  border-radius: 50%;\n  margin: 10px;\n  transition: 0.3s;\n\n  img {\n    max-width: 100%;\n    height: 100%;\n    transition: 0.3s;\n  }\n"]))),F=w.b.div(r||(r=Object(h.a)(["\n  grid-column-start: 3;\n  grid-column-end: 5;\n  transition: 0.3s;\n\n  @media (max-width: 1900px) {\n    grid-column-start: 1;\n    grid-column-end: 5;\n  }\n"]))),R=w.b.div(o||(o=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  transition: 0.3s;\n\n  @media (max-width: 1900px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  @media (max-width: 560px) {\n    grid-template-columns: 1fr;\n  }\n"]))),C=t(11),L=t(3),U=t(9),B=t.n(U),H=t(19),I=w.b.div(c||(c=Object(h.a)(["\n  display: grid;\n  width: 40%;\n  margin: 0 auto;\n  transition: 0.3s;\n\n  @media (max-width: 1900px) {\n    width: 100%;\n  }\n"]))),J=w.b.div(d||(d=Object(h.a)(["\n  margin-top: 30px;\n  transition: 0.3s;\n\n  @media (min-width: 900px) and (max-width: 1900px) {\n    display: grid;\n    width: 50%;\n    margin: 0 auto;\n  }\n"]))),N=w.b.input(s||(s=Object(h.a)(["\n  display: block;\n  width: 100%;\n  min-height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid gray;\n  appearance: none;\n  border-radius: 0.25rem;\n  margin-bottom: 10px;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: 0.3s;\n\n  &:focus {\n    border-color: #0275d8;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px lightblue;\n    outline: 0 none;\n    transition: 0.3s;\n  }\n"]))),T=Object(w.a)(b||(b=Object(h.a)(['\n  * \n  {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: 0;\n    font-size: 100%;\n    transition: 0.3s;\n  }\n\n  .spinner:after {\n    content: "";\n    box-sizing: border-box;\n    position: absolute;\n    top: 40%;\n    left: 50%;\n    height: 60px;\n    width: 60px;\n    margin-top: -30px;\n    margin-left: -30px;\n    border-radius: 50%;\n    border: 3px solid lightgray;\n    border-top-color: #0275d8;\n    animation: spinner 0.7s linear infinite;\n  }\n\n  @keyframes spinner {\n    to {\n      transform: rotate(360deg);  \n      transition: 0.3s;\n    }\n  }\n\n\n  img\n  {\n    width: 100%;\n    max-width: 100%;\n    height: auto;\n    transition: 0.3s;\n  }\n\n  @media (max-width: 1500px)\n  {\n    body\n    {\n      margin: 0;\n      padding: 0;\n      font-size: 100%;\n      width: 100%;\n    }\n\n  }\n\n']))),E=t(39),M=function(){var n=Object(g.c)(y),e=Object(m.a)(n,2)[1],t=Object(g.c)(f),i=Object(m.a)(t,2)[1],a=Object(g.c)(v),r=Object(m.a)(a,2)[1],o=Object(g.c)(O),c=Object(m.a)(o,2),d=c[0],s=c[1],b=function(){var n=Object(H.a)(B.a.mark((function n(t){var a,o;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e(!0),n.next=4,x()({url:"?key=x&q="+t+"&image_type=photo&pretty=true"});case 4:a=n.sent,o=a.data,i(o),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),r(n.t0.message);case 12:return n.prev=12,e(!0),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(e){return n.apply(this,arguments)}}();return Object(k.jsx)(I,{"data-aos":"zoom-in",children:Object(k.jsx)(J,{children:Object(k.jsx)(N,{id:"query",name:"query",placeholder:"Type here",value:d.query,onChange:function(n){s&&s(Object(L.a)(Object(L.a)({},d),{},Object(C.a)({},n.target.name,n.target.value))),Object(E.a)(b(n.target.value),1500)},list:"bros"})})})},P=function(){return Object(k.jsx)("footer",{"data-aos":"fade-down-right",children:Object(k.jsx)("i",{children:"Created by Fadi Hanna."})})};x.a.defaults.baseURL="https://pixabay.com/api/",x.a.defaults.headers["Content-Type"]="application/json";var _=function(){return Object(k.jsxs)(A,{children:[Object(k.jsx)("h1",{"data-aos":"flip-left",children:"PixaBay Finder"}),Object(k.jsx)(M,{}),Object(k.jsx)(q,{}),Object(k.jsx)(P,{})]})},A=w.b.div(l||(l=Object(h.a)(["\n  margin: 10px;\n  text-align: center;\n  transition: 0.3s;\n"]))),D=t(0),G=t.n(D),K=t(20),Q=t.n(K),V=t(40);p.a.init(),Q.a.render(Object(k.jsx)(G.a.StrictMode,{children:Object(k.jsxs)(V.a,{children:[Object(k.jsx)(T,{}),Object(k.jsx)(g.a,{children:Object(k.jsx)(_,{})})]})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.04f3a86c.chunk.js.map