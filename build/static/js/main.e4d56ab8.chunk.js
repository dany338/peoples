(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(n){n.exports={en:{"Home.welcome":"Welcome Peoples"},es:{"Home.welcome":"Bienvenidos Personas"}}},32:function(n,e){},36:function(n,e,t){n.exports=t.p+"static/media/logo.5d5d9eef.svg"},44:function(n,e,t){n.exports=t(77)},49:function(n,e,t){},50:function(n,e,t){},58:function(n,e){},64:function(n,e){},77:function(n,e,t){"use strict";t.r(e);var a=t(16),r=t(0),o=t.n(r),i=t(18),c=t.n(i),u=(t(49),t(29)),l=t(30),p=t(41),f=t(31),s=t(42),d=t(9),m=(t(50),t(24)),g=t(15),x=t(4),b=t(13),h=t(3);function v(){var n=Object(x.a)(["\n  width: 50px;\n  position: relative;\n  top: 50px;\n  display: inline-block;\n  max-width: 20%;\n  max-height: 40px;\n"]);return v=function(){return n},n}function w(){var n=Object(x.a)(["\n  color: #000000;\n  font-size: 12px;\n  line-height: 20px;\n  font-family: Ebrima;\n  & a {\n    color: #000000;\n  }\n"]);return w=function(){return n},n}function j(){var n=Object(x.a)(["\n  opacity: 1;\n  cursor: pointer;\n  height: 24px;\n  margin: auto;\n  width: 50%;\n"]);return j=function(){return n},n}function O(){var n=Object(x.a)(["\n  color: white;\n  font-size: 2em;\n  width: 40px;\n  height: 40px;\n  padding: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background: #73ff73;\n  border-radius: 10px;\n  box-shadow: 1px 1px 1px #47a947;\n  margin: 20px auto 0;\n"]);return O=function(){return n},n}function E(){var n=Object(x.a)(["\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n  background: #ff7373;\n  border-radius: 10px;\n  box-shadow: 1px 1px 1px #c70202;\n  color: white;\n  font-size: 18px;\n  margin-right: 5px;\n  &:hover {\n    box-shadow: none;\n    margin-top: 1px;\n    margin-left: 1px;\n  }\n"]);return E=function(){return n},n}function y(){var n=Object(x.a)(["\n  width: 90%;\n  background-color: white;\n  border: 1px solid lightgrey;\n  box-shadow: 1px 1px 1px lightgrey;\n  padding: 12px;\n  margin-right: 10px;\n"]);return y=function(){return n},n}function k(){var n=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return k=function(){return n},n}function P(){var n=Object(x.a)(["\n  color: black;\n  font-family: -apple-system, BlinkMacSystemFont, Ebrima, Fira Sans, sans-serif;\n  font-weight: 400;\n  text-transform: uppercase;\n  margin: 70px auto 30px;\n"]);return P=function(){return n},n}function B(){var n=Object(x.a)(["\n  width: 75%;\n  margin: 0 auto;\n  font-weight: bold;\n"]);return B=function(){return n},n}function C(){var n=Object(x.a)(["\n  width: 80%;\n  margin: 0 auto;\n"]);return C=function(){return n},n}function S(){var n=Object(x.a)(["\n  text-align: center;\n  border: 1px solid white;\n  width: 80vw;\n  height: auto;\n  box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.5);\n  background: #f6f6f6;\n  padding-bottom: 60px;\n  margin: 40px auto;\n"]);return S=function(){return n},n}var W=h.default.div(S()),z=h.default.div(C()),H=Object(h.default)(b.Card)(B()),L=h.default.h1(P()),F=h.default.div(k()),I=h.default.p(y()),J=Object(h.default)(b.Button)(E()),M=Object(h.default)(b.Button)(O()),R=h.default.input(j()),A=Object(h.default)(b.Text)(w()),K=Object(h.default)(b.Image)(v()),T=function(n){var e=n.value,t=n.change,a=n.press,r=n.createPeople;return o.a.createElement("div",null,o.a.createElement(R,{type:"text",value:e,onChange:t,onKeyPress:a}),o.a.createElement(M,{onClick:r},"+"))},$=function(n){var e=n.name,t=n.deletePeople;return o.a.createElement(F,null,o.a.createElement(I,null,e),o.a.createElement(J,{onClick:t},"-"))},_=t(36),q=t.n(_),D=function(){var n=Object(r.useState)(""),e=Object(m.a)(n,2),t=e[0],i=e[1],c=Object(r.useState)([{name:"chris bolton"}]),u=Object(m.a)(c,2),l=u[0],p=u[1],f=function(){i(""),p([].concat(Object(a.a)(l),[{name:t}]))};return o.a.createElement(W,null,o.a.createElement(K,{src:q.a,title:"React Logo - App Peoples"}),o.a.createElement(L,null,o.a.createElement(A,{width:1},o.a.createElement(g.a,{id:"Home.welcome",defaultMessage:"Welcome Peoples"}))),o.a.createElement(z,null,o.a.createElement(H,{width:1,p:5,bg:"#f6f6ff",borderRadius:8,boxShadow:"0 2px 16px rgba(0, 0, 0, 0.25)"},l.map(function(n,e){return o.a.createElement($,{key:e,name:n.name,deletePeople:function(){return n=e,void p(l.filter(function(e,t){return t!==n}));var n}})})),o.a.createElement(T,{value:t,change:function(n){i(n.target.value)},press:function(n){""!==n.target.value&&"Enter"===n.key&&f()},createPeople:f})))};D.defaultProps={logo:"./logo.svg"};var G=D,N=function(n){function e(){return Object(u.a)(this,e),Object(p.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(s.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{id:"container"},o.a.createElement(d.a,{exact:!0,path:"/",component:G}))}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=t(20),U=t(39),V=t.n(U),X=t(40),Y=t.n(X),Z=t(19);Object(g.c)([].concat(Object(a.a)(V.a),Object(a.a)(Y.a)));var nn=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage,en=Z[nn.toLowerCase().split(/[_-]+/)[0]]||Z[nn]||Z.en;c.a.render(o.a.createElement(g.b,{locale:nn,messages:en},o.a.createElement(Q.a,null,o.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.e4d56ab8.chunk.js.map