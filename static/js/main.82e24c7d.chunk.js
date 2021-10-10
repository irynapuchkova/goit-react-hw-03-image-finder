(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{34:function(e,n,t){},80:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(6),o=t.n(i),c=(t(34),t(7)),s=t.n(c),p=t(18),l=t(10),d=t(11),u=t(12),b=t(14),h=t(13),g=(t(36),t(15)),x=(t(37),t(17)),f=t.n(x);f.a.defaults.baseURL="https://pixabay.com/api";var m,j,v,O,w,y,k,S=function(){var e=Object(l.a)(s.a.mark((function e(n,t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/?q=".concat(n,"&page=").concat(t,"&key=").concat("22640715-8f791d5797d8fe249801e9206","&").concat("image_type=photo&orientation=horizontal&per_page=12","&fields=").concat("id;webformatURL;largeImageURL;tags"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),C=t(3),E=t(4),I=E.a.div(m||(m=Object(C.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),R=E.a.div(j||(j=Object(C.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),q=E.a.form(v||(v=Object(C.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),z=E.a.button(O||(O=Object(C.a)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),U=E.a.label(w||(w=Object(C.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),L=E.a.input(y||(y=Object(C.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n  }\n"]))),V=t(1);function M(e){var n=e.onSubmit;return Object(V.jsx)(R,{children:Object(V.jsxs)(q,{onSubmit:function(e){e.preventDefault(),n(e.target.elements.inputValue.value)},children:[Object(V.jsx)(z,{type:"submit",children:Object(V.jsx)(U,{children:"Search"})}),Object(V.jsx)(L,{type:"text",name:"inputValue",autocomplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}var A,F,T,B=E.a.ul(k||(k=Object(C.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),N=E.a.div(A||(A=Object(C.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),Y=E.a.img(F||(F=Object(C.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"])));function D(e){var n=e.src,t=e.tags,a=e.onClick;return Object(V.jsx)(N,{children:Object(V.jsx)(Y,{src:n,alt:t,onClick:a})})}function K(e){var n=e.data,t=e.onSelect;return Object(V.jsx)(V.Fragment,{children:Object(V.jsx)(B,{children:n.map((function(e){var n=e.id,a=e.webformatURL,r=e.largeImageURL,i=e.tags;return Object(V.jsx)("li",{children:Object(V.jsx)(D,{src:a||r,alt:i,onClick:function(){return t(r)}})},n)}))})})}var P,G,H=E.a.button(T||(T=Object(C.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  display: flex;\n\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  /* text-align: center; */\n  /* display: inline-block; */\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n"])));function J(e){var n=e.onClick;return Object(V.jsx)(H,{type:"button",onClick:n,children:"Load more"})}var Q=E.a.div(P||(P=Object(C.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),_=E.a.div(G||(G=Object(C.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),W=document.querySelector("#modal-root"),X=function(e){Object(b.a)(t,e);var n=Object(h.a)(t);function t(){var e;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).handleKeydown=function(n){"Escape"===n.code&&e.props.onClose()},e.handleBackdrop=function(n){n.currentTarget===n.target&&e.props.onClose()},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(i.createPortal)(Object(V.jsx)(Q,{onClick:this.handleBackdrop,children:Object(V.jsx)(_,{children:this.props.children})}),W)}}]),t}(a.Component),Z=t(28),$=t.n(Z);function ee(){return Object(V.jsx)($.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});var ne=function(e){Object(b.a)(t,e);var n=Object(h.a)(t);function t(){var e;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={inputValue:"",images:[],loading:!1,page:1,selectedImg:null,reqStatus:"idle"},e.handleSearchbarSubmit=function(n){e.setState({inputValue:n})},e.loadMore=function(n){n.currentTarget===n.target&&e.setState((function(e){return{page:e.page+1}}))},e.toggleModal=function(){e.setState((function(e){return{selectedImg:!e.selectedImg}}))},e.onSelectedImg=function(n){e.setState({selectedImg:n})},e}return Object(u.a)(t,[{key:"componentDidUpdate",value:function(){var e=Object(l.a)(s.a.mark((function e(n,t){var a,r,i,o,c,l,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.state,r=a.inputValue,i=a.page,""!==this.state.inputValue.trim()){e.next=3;break}return e.abrupt("return",Object(g.b)("PlEASE ENTER YOUR QUERY",{autoClose:2e3}));case 3:if(t.inputValue===r){e.next=20;break}return e.prev=4,this.setState({reqStatus:"pending",images:[],page:1}),e.next=8,S(r,i);case 8:if(o=e.sent,c=o.hits,this.setState({images:c}),0!==c.length){e.next=13;break}return e.abrupt("return",Object(g.b)("THERE IS NO IMAGES ON QUERY. TRY AGAIN",{autoClose:2e3}));case 13:this.setState({reqStatus:"resolved"}),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),this.setState({reqStatus:"rejected"}),console.error(e.t0.message);case 20:if(t.page===i||t.inputValue!==r){e.next=35;break}return e.prev=21,this.setState({reqStatus:"pending"}),e.next=25,S(r,i);case 25:l=e.sent,d=l.hits,this.setState({reqStatus:"resolved"}),this.setState((function(e){return{images:[].concat(Object(p.a)(e.images),Object(p.a)(d))}})),e.next=35;break;case 31:e.prev=31,e.t1=e.catch(21),this.setState({reqStatus:"rejected"}),console.error(e.t1.message);case 35:case"end":return e.stop()}}),e,this,[[4,16],[21,31]])})));return function(n,t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.images,t=e.selectedImg,a=e.reqStatus,r=n.length>=12;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(I,{children:Object(V.jsx)(M,{onSubmit:this.handleSearchbarSubmit})}),"pending"===a&&Object(V.jsx)(ee,{}),Object(V.jsx)(K,{data:n,onSelect:this.onSelectedImg}),r&&Object(V.jsx)(J,{onClick:this.loadMore}),Object(V.jsx)(g.a,{role:"alert"}),t&&Object(V.jsx)(X,{onClose:this.toggleModal,children:Object(V.jsx)("img",{src:t,alt:""})})]})}}]),t}(a.Component);o.a.render(Object(V.jsx)(r.a.StrictMode,{children:Object(V.jsx)(ne,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.82e24c7d.chunk.js.map