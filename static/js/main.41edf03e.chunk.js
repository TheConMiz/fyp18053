(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{219:function(e,t,a){e.exports=a(369)},369:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),i=a.n(l),c=a(17),o=a(18),s=a(20),h=a(19),u=a(21),m=a(55),p=a(131),d=a(73),g=a.n(d),E=a(133),f=a.n(E),b=a(26),y=a.n(b),v=a(52),O=a.n(v),w=a(53),j=a.n(w),k=a(54),C=a.n(k),S=a(57),N=a.n(S),x=a(134),M=a.n(x),T=a(135),L=a.n(T),A=a(25),G=a.n(A),P=a(9),I=a(138),B=a.n(I),R=a(136),V=a.n(R),W=a(137),D=a.n(W),U=a(72),J=a.n(U),Y=a(71),z=a.n(Y),F=a(139),H=a.n(F),$=a(56),_=a.n($),q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleMenuOpen=function(){a.setState(function(e){return{drawer:!a.state.drawer}})},a.handleListClicks=function(e){console.log(e)},a.state={drawer:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=(t.theme,r.a.createElement("div",null,r.a.createElement("div",{className:a.appDrawer},r.a.createElement(O.a,{subheader:r.a.createElement(z.a,{component:"div"},"FYP18053")},r.a.createElement(y.a,null),["Turing","von Neumann","Sorting Algorithms"].map(function(t,a){return r.a.createElement(j.a,{button:!0,key:t,onClick:e.handleMenuOpen},r.a.createElement(C.a,{primary:t}))})),r.a.createElement(y.a,null),r.a.createElement(O.a,null,["About Us"].map(function(t,a){return r.a.createElement(j.a,{button:!0,key:t,onClick:e.handleMenuOpen},r.a.createElement(C.a,{primary:t}))})))));return r.a.createElement("div",{className:a.root},r.a.createElement(J.a,null),r.a.createElement(f.a,{className:a.appBar},r.a.createElement(M.a,null,r.a.createElement(_.a,{title:"Open Menu",interactive:!0,placement:"bottom-end"},r.a.createElement("div",null,r.a.createElement(N.a,{color:"secondary",className:a.menuButton,"aria-label":"Open Menu",onClick:this.handleMenuOpen},r.a.createElement(L.a,null)))),r.a.createElement(G.a,{variant:"h6",color:"secondary",noWrap:!0,className:a.typography},"FYP18053"),r.a.createElement(_.a,{title:"Toggle Lights",interactive:!0},r.a.createElement(N.a,{color:"secondary",className:a.lights,onClick:this.props.handleLightChange,"aria-label":"Toggle Lights"},this.props.light?r.a.createElement(D.a,null):r.a.createElement(V.a,null))),r.a.createElement(_.a,{title:"Settings",interactive:!0,placement:"bottom-start"},r.a.createElement(N.a,{color:"secondary",className:a.settingsIcon,"aria-label":"My Settings"},r.a.createElement(B.a,null))))),r.a.createElement("nav",{className:a.appDrawer},r.a.createElement(H.a,{smUp:!0,implementation:"css"},r.a.createElement(g.a,{container:this.props.container,anchor:"left",open:this.state.drawer,onOpen:this.handleMenuOpen,onClose:this.handleMenuOpen},n))))}}]),t}(r.a.Component),K=Object(P.withStyles)(function(e){return{root:{display:"flex"},menuButton:{marginRight:20,marginLeft:-12},appBar:{marginLeft:240},typography:{marginRight:20,flexGrow:1},settingsIcon:{marginRight:-12},lights:{margin:e.spacing.unit},appDrawer:Object(p.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0})}},{withTheme:!0})(q),Q={palette:{type:"light",primary:{main:"#afe2f7"},secondary:{main:"#002f39"}},typography:{useNextVariants:!0}},X={palette:{type:"dark",primary:{main:"#002f39"},secondary:{main:"#afe2f7"},typography:{useNextVariants:!0}}},Z=a(140),ee=a.n(Z),te=(a(355),a(356),a(92)),ae=a.n(te),ne=a(74),re=a.n(ne),le=a(46),ie=a.n(le),ce=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={value:"// This is some default text"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes;e.theme;return r.a.createElement("div",null,r.a.createElement(ae.a,{className:t.codeView,elevation:7},r.a.createElement(ee.a,{width:"550px",height:"440px",wrapEnabled:!0,fontSize:14,className:t.codeEditor,theme:this.props.light?"github":"solarized_dark",highlightActiveLine:!0,editorProps:{$blockScrolling:1/0},enableBasicAutocompletion:!1,value:this.state.value,setAutoScrollEditorIntoView:!0,setUseWrapMode:!0,indentedSoftWrap:!0}),r.a.createElement(ie.a,{label:"Toggle Editor Mode",labelPlacement:"start",control:r.a.createElement(re.a,null)})))}}]),t}(r.a.Component),oe=Object(P.withStyles)(function(e){return{codeView:{flexGrow:1,width:570,height:500,padding:e.spacing.unit}}},{withTheme:!0})(ce),se=a(75),he=a.n(se),ue=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(he.a,{className:e.card,elevation:7},r.a.createElement(G.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Help Widget"),r.a.createElement(y.a,null),r.a.createElement(G.a,{component:"p"},"This widget provides context-based tips"))}}]),t}(r.a.Component),me=Object(P.withStyles)(function(e){return{card:{flexGrow:1,width:570,height:136,padding:e.spacing.unit}}})(ue),pe=a(41),de=a.n(pe),ge=a(28),Ee=a.n(ge),fe=a(30),be=a.n(fe),ye=a(31),ve=a.n(ye),Oe=a(33),we=a.n(Oe),je=a(142),ke=a.n(je),Ce=a(143),Se=a.n(Ce),Ne=a(145),xe=a.n(Ne),Me=a(141),Te=a.n(Me),Le=a(144),Ae=a.n(Le),Ge=a(76),Pe=(r.a.Component,a(47)),Ie=a.n(Pe),Be=a(51),Re=a.n(Be),Ve=a(49),We=a.n(Ve),De=a(50),Ue=a.n(De),Je=a(48),Ye=a.n(Je),ze=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleRunPause=function(){a.setState(function(e){return{run:!a.state.run}}),console.log(a.state.run)},a.handleScriptMenuToggle=function(){},a.handleArrayGeneration=function(){a.setState(function(e){return{open:!a.state.open}})},a.state={run:!1,open:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes;e.theme;return r.a.createElement("div",{className:t.root},r.a.createElement(Ee.a,{className:t.paper,elevation:7},r.a.createElement(ve.a,{color:"secondary"},r.a.createElement(we.a,{title:"Previous"},r.a.createElement(Te.a,null))),r.a.createElement(ve.a,{color:"secondary",onClick:this.handleRunPause},r.a.createElement(we.a,{title:this.state.run?"Pause":"Run"},this.state.run?r.a.createElement(Se.a,null):r.a.createElement(ke.a,null))),r.a.createElement(ve.a,{color:"secondary"},r.a.createElement(we.a,{title:"Next"},r.a.createElement(Ae.a,null))),r.a.createElement(ve.a,{color:"secondary",className:t.button},r.a.createElement(we.a,{title:"Reset"},r.a.createElement(xe.a,null))),r.a.createElement(be.a,{onClick:this.handleScriptMenuToggle,variant:"contained",color:"primary",className:t.button},r.a.createElement(Ge.a,{color:"secondary"},"View Scripts")),r.a.createElement(be.a,{onClick:this.handleArrayGeneration,variant:"contained",color:"primary",className:t.button},r.a.createElement(Ge.a,{color:"secondary"},"Generate Array")),r.a.createElement(y.a,null),r.a.createElement("div",{className:t.contextLog},r.a.createElement(Ge.a,{color:"secondary"},"Number of Steps: ",r.a.createElement("br",null),"Log:")),r.a.createElement(Ie.a,{open:this.state.open,onClose:this.handleArrayGeneration},r.a.createElement(Ye.a,null,"Generate your Array"),r.a.createElement(We.a,null,r.a.createElement(Ue.a,null,"You can set my maximum width and whether to adapt or not.")),r.a.createElement(Re.a,null,r.a.createElement(be.a,{onClick:this.handleArrayGeneration,color:"secondary"},"Confirm")))))}}]),t}(r.a.Component),Fe=Object(P.withStyles)(function(e){return{root:{flexGrow:1},paper:{flexGrow:1,padding:e.spacing.unit,width:570},contextLog:{padding:e.spacing.unit},button:{margin:e.spacing.unit}}},{withTheme:!0})(ze),He=a(146),$e=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={light:a.props.light},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"componentDidUpdate",value:function(){}},{key:"drawChart",value:function(){var e=this,t=this.props.data,a=He.a(".test").append("svg").attr("width",this.props.width).attr("height",this.props.height).style("margin-left",10).style("margin-right",10);a.selectAll("rect").data(t).enter().append("rect").attr("x",function(a,n){return n*(e.props.width/t.length)}).attr("y",function(t,a){return e.props.height-10*t-3}).attr("width",this.props.width/t.length-5).attr("height",function(e,t){return 10*e}),a.attr("fill","orange")}},{key:"render",value:function(){return r.a.createElement("div",{className:"test"})}}]),t}(r.a.Component),_e=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={data:[12,5,6,3,9,10,2,3],width:550,height:480,id:"test"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(Ee.a,{className:e.root,elevation:7},r.a.createElement($e,{data:this.state.data,width:this.state.width,height:this.state.height,id:this.state.id}),r.a.createElement(y.a,null))}}]),t}(r.a.Component),qe=Object(P.withStyles)(function(e){return{root:{width:570,height:500}}},{withTheme:!0})(_e),Ke=Object(P.createMuiTheme)(Q),Qe=Object(P.createMuiTheme)(X),Xe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleLightChange=function(){a.setState(function(e){return{light:!a.state.light}})},a.state={light:!0},a.handleLightChange=a.handleLightChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){localStorage.getItem("light")&&this.setState({light:JSON.parse(localStorage.getItem("light"))})}},{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("light",JSON.stringify(t.light))}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(P.MuiThemeProvider,{theme:this.state.light?Ke:Qe},r.a.createElement(K,{handleLightChange:this.handleLightChange,light:this.state.light}),r.a.createElement("div",{style:{marginTop:"90px"}}),r.a.createElement(de.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center",spacing:24},r.a.createElement(de.a,{item:!0},r.a.createElement(qe,{light:this.state.light})),r.a.createElement(de.a,{item:!0},r.a.createElement(oe,{light:this.state.light})),r.a.createElement(de.a,{item:!0},r.a.createElement(Fe,null)),r.a.createElement(de.a,{item:!0},r.a.createElement(me,null)))))}}]),t}(r.a.Component),Ze=Object(P.withStyles)(function(e){return{root:{flexGrow:1}}})(Xe),et=a(370);i.a.render(r.a.createElement(et.a,null,r.a.createElement(Ze,null)),document.getElementById("root"))}},[[219,1,2]]]);
//# sourceMappingURL=main.41edf03e.chunk.js.map