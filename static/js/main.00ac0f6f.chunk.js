(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{229:function(e,t,a){e.exports=a(375)},375:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),i=a.n(l),c=a(11),o=a(12),s=a(14),h=a(13),u=a(15),p=a(32),m=a(137),d=a(69),g=a.n(d),b=a(144),O=a.n(b),f=a(26),E=a.n(f),j=a(52),y=a.n(j),v=a(36),w=a.n(v),C=a(145),k=a.n(C),S=a(146),N=a.n(S),x=a(30),L=a.n(x),T=a(5),M=a(68),R=a.n(M),G=a(67),H=a.n(G),I=a(147),A=a.n(I),P=a(35),B=a.n(P),U=a(50),J=a.n(U),W=a(51),D=a.n(W),V=a(157),z=a(140),F=a.n(z),_=a(141),Y=a.n(_),$=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleSnackBar=function(){},a.state={snackbar:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(B.a,{title:"Toggle Lights",placement:"bottom"},r.a.createElement(w.a,{color:"secondary",className:e.lights,onClick:this.props.handleLightChange,"aria-label":"Toggle Lights"},this.props.light?r.a.createElement(Y.a,null):r.a.createElement(F.a,null)))}}]),t}(r.a.Component),q=Object(T.withStyles)(function(e){return{lights:{margin:e.spacing.unit}}},{withTheme:!0})($),K=a(142),Q=a.n(K),X=a(143),Z=a.n(X),ee=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(B.a,{title:"Helper Mode",placement:"bottom"},r.a.createElement(w.a,{color:"secondary",className:e.helper,onClick:this.props.handleHelperChange},this.props.helper?r.a.createElement(Z.a,null):r.a.createElement(Q.a,null)))}}]),t}(r.a.Component),te=Object(T.withStyles)(function(e){return{helper:{margin:e.spacing.unit},toast:{backgroundColor:"primary"}}},{withTheme:!0})(ee),ae=a(376),ne=a(379),re=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleMenuOpen=function(){a.setState(function(e){return{drawer:!a.state.drawer}})},a.handleListClicks=function(e){console.log(e)},a.state={drawer:!1,modes:a.props.modes},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.modes,l=t.pathname,i=r.a.createElement("div",null,r.a.createElement("div",{className:a.appDrawer},r.a.createElement(J.a,{subheader:r.a.createElement(H.a,{component:"div"},"FYP18053")},r.a.createElement(E.a,null),n.map(function(t,a){return r.a.createElement(D.a,{button:!0,key:t,onClick:e.handleMenuOpen,component:ae.a,to:t.replace(/\s/g,"_").toLowerCase()},r.a.createElement(y.a,{primary:t}))})),r.a.createElement(E.a,null),r.a.createElement(J.a,null,["About Us"].map(function(t,a){return r.a.createElement(D.a,{button:!0,key:t,onClick:e.handleMenuOpen,component:ae.a,to:t.replace(/\s/g,"_").toLowerCase(),selected:"/about_us"===l},r.a.createElement(y.a,{primary:t}))}))));return r.a.createElement("div",{className:a.root},r.a.createElement(R.a,null),r.a.createElement(O.a,{className:a.appBar},r.a.createElement(k.a,null,r.a.createElement(B.a,{title:"Open Menu",placement:"bottom"},r.a.createElement("div",null,r.a.createElement(w.a,{color:"secondary",className:a.menuButton,onClick:this.handleMenuOpen},r.a.createElement(N.a,null)))),r.a.createElement(L.a,{variant:"h6",color:"secondary",noWrap:!0,className:a.typography},"FYP18053"),r.a.createElement(q,{light:this.props.light,handleLightChange:this.props.handleLightChange}),r.a.createElement(te,{helper:this.props.helper,handleHelperChange:this.props.handleHelperChange}))),r.a.createElement("nav",{className:a.appDrawer},r.a.createElement(A.a,{smUp:!0,implementation:"css"},r.a.createElement(g.a,{container:this.props.container,anchor:"left",open:this.state.drawer,onOpen:this.handleMenuOpen,onClose:this.handleMenuOpen},i))))}}]),t}(r.a.Component),le=Object(V.a)(Object(T.withStyles)(function(e){return{root:{display:"flex"},menuButton:{marginRight:20,marginLeft:-12},appBar:{marginLeft:240},typography:{marginRight:20,flexGrow:1},settingsIcon:{marginRight:-12},appDrawer:Object(m.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0})}},{withTheme:!0}),ne.a)(re),ie={palette:{type:"light",primary:{main:"#afe2f7"},secondary:{main:"#002f39"}},typography:{useNextVariants:!0}},ce={palette:{type:"dark",primary:{main:"#002f39"},secondary:{main:"#afe2f7"},typography:{useNextVariants:!0}}},oe=a(150),se=a.n(oe),he=(a(366),a(367),a(101)),ue=a.n(he),pe=a(71),me=a.n(pe),de=a(70),ge=a.n(de),be=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleReadOnly=function(){a.setState=function(e){return{readOnly:!a.state.readOnly}},console.log(a.state.readOnly)},a.state={value:"// This is some default text",readOnly:!0},a.handleReadOnly=a.handleReadOnly.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes;e.theme;return console.log(this.props.match.url),r.a.createElement("div",null,r.a.createElement(ue.a,{className:t.codeView,elevation:7},r.a.createElement(se.a,{width:"550px",height:"440px",wrapEnabled:!0,fontSize:14,className:t.codeEditor,theme:this.props.light?"github":"solarized_dark",highlightActiveLine:!0,editorProps:{$blockScrolling:1/0},setOptions:{enableBasicAutocompletion:!1,readOnly:this.state.readOnly},value:"/turing"==this.props.match.url?"TURING":"LEL",setAutoScrollEditorIntoView:!0,setUseWrapMode:!0,indentedSoftWrap:!0}),r.a.createElement(ge.a,{label:"Toggle Editor Mode",labelPlacement:"start",control:r.a.createElement(me.a,{onClick:this.handleReadOnly})})))}}]),t}(r.a.Component),Oe=Object(T.withStyles)(function(e){return{codeView:{flexGrow:1,width:570,height:500,padding:e.spacing.unit}}},{withTheme:!0})(be),fe=a(72),Ee=a.n(fe),je=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(Ee.a,{className:e.card,elevation:7},r.a.createElement(L.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Help Widget"),r.a.createElement(E.a,null),r.a.createElement(L.a,{component:"p"},"This widget provides context-based tips"))}}]),t}(r.a.Component),ye=Object(T.withStyles)(function(e){return{card:{flexGrow:1,width:570,height:136,padding:e.spacing.unit}}})(je),ve=a(44),we=a.n(ve),Ce=a(378),ke=a(377),Se=a(42),Ne=a.n(Se),xe=a(73),Le=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleArrayGeneration=function(){a.setState(function(e){return{open:!a.state.open}})},a.state={menuOpen:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(Ne.a,{onClick:this.handleArrayGeneration,variant:"contained",color:"primary",className:e.button},r.a.createElement(xe.a,{color:"secondary"},"Generate Array"))}}]),t}(r.a.Component),Te=Object(T.withStyles)(function(e){return{button:{margin:e.spacing.unit}}},{withTheme:!0})(Le),Me=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={menuOpen:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(Ne.a,{onClick:this.handleScriptsList,variant:"contained",color:"primary",className:e.button},r.a.createElement(xe.a,{color:"secondary"},"Select Script"))}}]),t}(r.a.Component),Re=Object(T.withStyles)(function(e){return{button:{margin:e.spacing.unit}}},{withTheme:!0})(Me),Ge=a(29),He=a.n(Ge),Ie=a(31),Ae=a.n(Ie),Pe=a(37),Be=a.n(Pe),Ue=a(152),Je=a.n(Ue),We=a(153),De=a.n(We),Ve=a(155),ze=a.n(Ve),Fe=a(151),_e=a.n(Fe),Ye=a(154),$e=a.n(Ye),qe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleRunPause=function(){a.setState(function(e){return{run:!a.state.run}}),console.log(a.state.run)},a.state={run:!1,open:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(He.a,{className:e.paper,elevation:7},r.a.createElement(Ae.a,{color:"secondary"},r.a.createElement(Be.a,{title:"Previous"},r.a.createElement(_e.a,null))),r.a.createElement(Ae.a,{color:"secondary",onClick:this.handleRunPause},r.a.createElement(Be.a,{title:this.state.run?"Pause":"Run"},this.state.run?r.a.createElement(De.a,null):r.a.createElement(Je.a,null))),r.a.createElement(Ae.a,{color:"secondary"},r.a.createElement(Be.a,{title:"Next"},r.a.createElement($e.a,null))),r.a.createElement(Ae.a,{color:"secondary",className:e.button},r.a.createElement(Be.a,{title:"Reset"},r.a.createElement(ze.a,null))),r.a.createElement(Re,null),r.a.createElement(Te,null)))}}]),t}(r.a.Component),Ke=Object(T.withStyles)(function(e){return{root:{flexGrow:1},paper:{flexGrow:1,padding:e.spacing.unit,width:570},contextLog:{padding:e.spacing.unit},button:{margin:e.spacing.unit},textField:{margin:e.spacing.unit,width:135,flexGrow:1}}},{withTheme:!0})(qe),Qe=a(156),Xe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={light:a.props.light},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"componentDidUpdate",value:function(){}},{key:"drawChart",value:function(){var e=this,t=this.props.data,a=Qe.a(".test").append("svg").attr("width",this.props.width).attr("height",this.props.height).style("margin-left",10).style("margin-right",10);a.selectAll("rect").data(t).enter().append("rect").attr("x",function(a,n){return n*(e.props.width/t.length)}).attr("y",function(t,a){return e.props.height-10*t-3}).attr("width",this.props.width/t.length-5).attr("height",function(e,t){return 10*e}),a.attr("fill","orange")}},{key:"render",value:function(){return r.a.createElement("div",{className:"test"})}}]),t}(r.a.Component),Ze=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={data:[5,5,5,5,5,5,5,5]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return console.log(this.props.match.url),r.a.createElement(He.a,{className:e.root,elevation:7},r.a.createElement(Xe,{data:this.state.data,width:this.state.width,height:this.state.height,id:this.state.id}),r.a.createElement(E.a,null))}}]),t}(r.a.Component),et=Object(T.withStyles)(function(e){return{root:{width:570,height:500}}},{withTheme:!0})(Ze),tt=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(h.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"Hello"))}}]),t}(r.a.Component),at=Object(T.createMuiTheme)(ie),nt=Object(T.createMuiTheme)(ce),rt=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleLightChange=function(){a.setState(function(e){return{light:!a.state.light}}),console.log("Light: "+a.state.light)},a.handleHelperChange=function(){a.setState(function(e){return{helper:!a.state.helper}}),console.log("Helper: "+a.state.helper)},a.state={light:!0,helper:!1,modes:["Turing","von Neumann","Sorting","About Us"]},a.handleLightChange=a.handleLightChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){localStorage.getItem("light")&&this.setState({light:JSON.parse(localStorage.getItem("light")),helper:JSON.parse(localStorage.getItem("helper"))})}},{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("light",JSON.stringify(t.light)),localStorage.setItem("helper",JSON.stringify(t.helper))}},{key:"render",value:function(){var e=this,t=this.props.classes,a=new RegExp("/$"),n=new RegExp("/.[a-z]+.[a-z]+");return r.a.createElement(Ce.a,null,r.a.createElement("div",{className:t.root},r.a.createElement(T.MuiThemeProvider,{theme:this.state.light?at:nt},r.a.createElement(le,{handleLightChange:this.handleLightChange,light:this.state.light,handleHelperChange:this.handleHelperChange,helper:this.state.helper,modes:this.state.modes}),r.a.createElement("div",{style:{marginTop:"90px"}}),r.a.createElement(ke.a,{Route:!0,exact:!0,path:a,render:function(){return r.a.createElement(tt,null)}}),r.a.createElement(ke.a,{exact:!0,path:n,render:function(t){return r.a.createElement(we.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center",spacing:24},r.a.createElement(we.a,{item:!0},r.a.createElement(et,Object.assign({},t,{light:e.state.light}))),r.a.createElement(we.a,{item:!0},r.a.createElement(Oe,Object.assign({},t,{light:e.state.light}))),r.a.createElement(we.a,{item:!0},r.a.createElement(Ke,t)),r.a.createElement(we.a,{item:!0},r.a.createElement(ye,t)))}}))))}}]),t}(r.a.Component),lt=Object(T.withStyles)(function(e){return{root:{flexGrow:1}}})(rt);i.a.render(r.a.createElement(lt,null),document.getElementById("root"))}},[[229,1,2]]]);
//# sourceMappingURL=main.00ac0f6f.chunk.js.map