(this["webpackJsonpunsubscribe-client"]=this["webpackJsonpunsubscribe-client"]||[]).push([[0],{136:function(n,e,t){},212:function(n,e,t){"use strict";t.r(e);var i,r,a,o,c=t(0),d=t.n(c),l=t(23),s=t.n(l),b=(t(136),t(72)),u=t(94),h=t(73),j=(t(137),t(215)),f=t(216),p=t(25);function x(n){var e=n.children,t=n.href;return Object(p.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:e})}var g=[{title:"Service Name",dataIndex:"name"},{title:"Expired Date",dataIndex:"rechargeDate"},{title:"Subscription Info Page",dataIndex:"link",render:function(n){return Object(p.jsx)(x,{href:n,children:"Go to page"})}}];var O=function(){var n=Object(c.useState)(!1),e=Object(u.a)(n,2),t=e[0],i=e[1],r=Object(c.useState)([]),a=Object(u.a)(r,2),o=a[0],d=a[1],l=Object(c.useState)([]),s=Object(u.a)(l,2),b=s[0],h=s[1];return document.addEventListener("filldatafromextension",(function(n){if(console.log(n.detail),n.detail){var e,t,i=n.detail;(null===(e=i.data)||void 0===e?void 0:e.length)&&d(i.data),(null===(t=i.targetSites)||void 0===t?void 0:t.length)&&h(i.targetSites)}})),Object(p.jsxs)(v,{children:[Object(p.jsxs)("div",{id:"main-content",children:[Object(p.jsx)("h1",{children:"Subscription info"}),Object(p.jsx)(j.a,{dataSource:o,columns:g})]}),Object(p.jsx)(m,{children:Object(p.jsx)(k,{onClick:function(){return i(!0)}})}),Object(p.jsx)(f.a,{visible:t,footer:null,onCancel:function(){return i(!1)},children:b.map((function(n){return Object(p.jsx)(x,{href:n.url,children:Object(p.jsx)(S,{children:n.name})})}))})]})},v=h.a.div(i||(i=Object(b.a)(["\n  padding: 40px;\n"]))),m=h.a.div(r||(r=Object(b.a)(["\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n"]))),k=h.a.div(a||(a=Object(b.a)(['\n  position: relative;\n  border-radius: 50%;\n  background-color: #b7bcba;\n  margin: 0 50px 50px auto;\n  width: 56px;\n  height: 56px;\n  cursor: pointer;\n\n  &::before {\n    position: absolute;\n    content: "";\n    width: 20px;\n    height: 3px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n  }\n\n  &::after {\n    position: absolute;\n    content: "";\n    width: 20px;\n    height: 3px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(90deg);\n    background-color: white;\n  }\n']))),S=h.a.div(o||(o=Object(b.a)(["\n  display: block;\n  padding: 16px;\n  width: 80%;\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.15);\n  }\n"]))),w=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,217)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),i(n),r(n),a(n),o(n)}))};s.a.render(Object(p.jsx)(d.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root")),w()}},[[212,1,2]]]);
//# sourceMappingURL=main.84931dfc.chunk.js.map