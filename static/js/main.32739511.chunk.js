(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){e.exports=a(248)},112:function(e,t,a){},248:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),i=a(37),o=a(38),s=a(40),u=a(39),m=a(41),h=(a(112),a(94)),p=a(105),g=a.n(p),E=a(98),d=a.n(E),f=a(57),b=a.n(f),v=a(56),O=a.n(v),w=a(58),y=a.n(w),k=a(59),C=a.n(k),j=a(43),N=a.n(j),L=a(99),M=a.n(L),T=a(100),B=a.n(T),x=a(55),A=a.n(x),S=a(23),D=a(103),P=a.n(D),R=a(102),F=a.n(R),J=a(101),U=a.n(J),Y=a(97),G=a.n(Y),I=a(96),W=a.n(I),q=a(104),z=a.n(q),H=a(42),K=a.n(H),Q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleLightChange=function(){a.setState(function(e){return{light:!a.state.light}})},a.handleMenuOpen=function(){a.setState(function(e){return{drawer:!a.state.drawer}})},a.handleListClicks=function(e){console.log(e)},a.state={light:a.props.light,drawer:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=(t.theme,r.a.createElement("div",null,r.a.createElement("div",{className:a.appDrawer},r.a.createElement(O.a,{subheader:r.a.createElement(W.a,{component:"div"},"FYP18053")},r.a.createElement(b.a,null),["Turing","von Neumann"].map(function(t,a){return r.a.createElement(y.a,{button:!0,key:t,onClick:function(){return e.handleListClicks(t)}},r.a.createElement(C.a,{primary:t}))})),r.a.createElement(b.a,null),r.a.createElement(O.a,null,["About Us"].map(function(t,a){return r.a.createElement(y.a,{button:!0,key:t,onClick:function(){return e.handleListClicks(t)}},r.a.createElement(C.a,{primary:t}))})))));return r.a.createElement("div",{className:a.root},r.a.createElement(G.a,null),r.a.createElement(d.a,{className:a.appBar},r.a.createElement(M.a,null,r.a.createElement(K.a,{title:"Open Menu",interactive:!0},r.a.createElement(N.a,{color:"inherit",className:a.menuButton,"aria-label":"Open Menu",onClick:this.handleMenuOpen},r.a.createElement(B.a,null))),r.a.createElement(A.a,{variant:"h6",color:"inherit",noWrap:!0,className:a.typography},"FYP18053"),r.a.createElement(K.a,{title:"Toggle Lights",interactive:!0},r.a.createElement(N.a,{color:"inherit",className:a.lights,onClick:this.handleLightChange,"aria-label":"Toggle Lights"},this.state.light?r.a.createElement(F.a,null):r.a.createElement(U.a,null))),r.a.createElement(K.a,{title:"Account",interactive:!0},r.a.createElement(N.a,{color:"inherit",className:a.accountCircle,"aria-label":"My Account"},r.a.createElement(P.a,null))))),r.a.createElement("nav",{className:a.appDrawer},r.a.createElement(z.a,{smUp:!0,implementation:"css"},r.a.createElement(g.a,{container:this.props.container,anchor:"left",open:this.state.drawer,onClose:this.handleMenuOpen},n))))}}]),t}(r.a.Component),V=Object(S.withStyles)(function(e){return{root:{display:"flex"},menuButton:{marginRight:20,marginLeft:-12},appBar:{marginLeft:240},typography:{marginRight:20,flexGrow:1},accountCircle:{marginRight:-12},lights:{margin:e.spacing.unit},appDrawer:Object(h.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0})}},{withTheme:!0})(Q),X=a(106),Z=a.n(X),$=Object(S.createMuiTheme)({palette:{primary:Z.a,type:"light",secondary:{main:"#5c6bc0"}}}),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={light:!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S.MuiThemeProvider,{theme:$},r.a.createElement(V,null)))}}]),t}(r.a.Component);c.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[107,2,1]]]);
//# sourceMappingURL=main.32739511.chunk.js.map