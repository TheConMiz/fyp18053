(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{237:function(e,t,a){e.exports=a(398)},398:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),i=a.n(l),c=a(16),s=a(17),o=a(19),h=a(18),u=a(20),m=a(40),p=a(156),d=a(88),g=a.n(d),E=a(163),b=a.n(E),f=a(31),O=a.n(f),j=a(65),y=a.n(j),v=a(37),w=a.n(v),C=a(164),S=a.n(C),k=a(165),N=a.n(k),x=a(28),T=a.n(x),D=a(9),L=a(87),z=a.n(L),H=a(86),M=a.n(H),R=a(166),I=a.n(R),G=a(36),P=a.n(G),W=a(50),A=a.n(W),B=a(64),J=a.n(B),V=a(174),_=a(159),F=a.n(_),U=a(160),$=a.n(U),Y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={snackbar:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(P.a,{title:"Toggle Lights",placement:"bottom"},r.a.createElement(w.a,{color:"secondary",className:e.lights,onClick:this.props.handleLightChange,"aria-label":"Toggle Lights"},this.props.light?r.a.createElement($.a,null):r.a.createElement(F.a,null)))}}]),t}(r.a.Component),q=Object(D.withStyles)(function(e){return{lights:{margin:e.spacing.unit}}},{withTheme:!0})(Y),K=a(161),Q=a.n(K),X=a(162),Z=a.n(X),ee=a(58),te=a.n(ee),ae=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).handleHelperToggle=function(){a.setState(function(e){return{helper:!a.state.helper}})},a.state={helper:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(n.Fragment,null,r.a.createElement(P.a,{title:"Helper Mode",placement:"bottom"},r.a.createElement(w.a,{color:"secondary",className:e.helper,onClick:this.handleHelperToggle},this.state.helper?r.a.createElement(Z.a,null):r.a.createElement(Q.a,null))),r.a.createElement(te.a,{className:e.helper,anchorOrigin:{vertical:"top",horizontal:"center"},open:this.state.helper,autoHideDuration:5,message:r.a.createElement("span",null,this.state.helper?"Helper Mode has been enabled.":"Helper Mode has been disabled.")}))}}]),t}(r.a.Component),ne=Object(D.withStyles)(function(e){return{helper:{margin:e.spacing.unit},button:{margin:e.spacing.unit}}},{withTheme:!0})(ae),re=a(399),le=a(402),ie=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).handleMenuOpen=function(){a.setState(function(e){return{drawer:!a.state.drawer}})},a.state={drawer:!1,modes:a.props.modes,helper:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.modes,l=t.pathname,i=r.a.createElement("div",null,r.a.createElement("div",{className:a.appDrawer,justifyContent:"center"},r.a.createElement(A.a,{subheader:r.a.createElement(M.a,{component:"div"},"FYP18053")},r.a.createElement(O.a,null),n.map(function(t,a){return r.a.createElement(J.a,{button:!0,key:t,onClick:e.handleMenuOpen,component:re.a,to:t.replace(/\s/g,"_").toLowerCase()},r.a.createElement(y.a,{primary:t}))})),r.a.createElement(O.a,null),r.a.createElement(A.a,null,["About Us"].map(function(t,a){return r.a.createElement(J.a,{button:!0,key:t,onClick:e.handleMenuOpen,component:re.a,to:t.replace(/\s/g,"_").toLowerCase(),selected:"/about_us"===l},r.a.createElement(y.a,{primary:t}))}))));return r.a.createElement("div",{className:a.root},r.a.createElement(z.a,null),r.a.createElement(b.a,{className:a.appBar},r.a.createElement(S.a,null,r.a.createElement(P.a,{title:"Open Menu",placement:"bottom"},r.a.createElement("div",null,r.a.createElement(w.a,{color:"secondary",className:a.menuButton,onClick:this.handleMenuOpen},r.a.createElement(N.a,null)))),r.a.createElement(T.a,{variant:"h6",color:"secondary",noWrap:!0,className:a.typography},"TITLE GOES HERE"),r.a.createElement(q,{light:this.props.light,handleLightChange:this.props.handleLightChange}),r.a.createElement(ne,{helper:this.props.helper,handleHelperChange:this.props.handleHelperChange}))),r.a.createElement("nav",{className:a.appDrawer},r.a.createElement(I.a,{smUp:!0,implementation:"css"},r.a.createElement(g.a,{container:this.props.container,anchor:"left",open:this.state.drawer,onOpen:this.handleMenuOpen,onClose:this.handleMenuOpen},i))))}}]),t}(r.a.Component),ce=Object(V.a)(Object(D.withStyles)(function(e){return{root:{display:"flex"},menuButton:{marginRight:20,marginLeft:-12},appBar:{marginLeft:240},typography:{marginRight:20,flexGrow:1},settingsIcon:{marginRight:-12},appDrawer:Object(p.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),pageTitle:{flexGrow:1,marginLeft:-12}}},{withTheme:!0}),le.a)(ie),se=a(117),oe=a.n(se),he=(a(373),a(374),a(115)),ue=a.n(he),me=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).handleAceEdit=function(){oe.a.session},a.state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(ue.a,{className:e.codeView,elevation:7},r.a.createElement(oe.a,{width:"550px",height:"480px",wrapEnabled:!0,fontSize:14,className:e.codeEditor,theme:this.props.light?"github":"solarized_dark",highlightActiveLine:!0,editorProps:{$blockScrolling:1/0},readOnly:!0,value:"/turing"===this.props.match.url?"The Turing Machine":"/von_neumann"===this.props.match.url?"The von Neumann Architecture":"/sorting"===this.props.match.url?"Sorting Algorithms":"",setAutoScrollEditorIntoView:!0,setUseWrapMode:!0,indentedSoftWrap:!0})))}}]),t}(r.a.Component),pe=Object(D.withStyles)(function(e){return{codeView:{flexGrow:1,width:570,height:500,padding:e.spacing.unit}}},{withTheme:!0})(me),de=a(89),ge=a.n(de),Ee=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(ge.a,{className:e.card,elevation:7},r.a.createElement(T.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Help Widget"),r.a.createElement(O.a,null),r.a.createElement(T.a,{component:"p"},"This widget provides context-based tips"))}}]),t}(r.a.Component),be=Object(D.withStyles)(function(e){return{card:{flexGrow:1,width:570,height:136,padding:e.spacing.unit}}})(Ee),fe=a(33),Oe=a.n(fe),je=a(90),ye=a(59),ve=a.n(ye),we=a(61),Ce=a.n(we),Se=a(60),ke=a.n(Se),Ne=a(62),xe=a.n(Ne),Te=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(n.Fragment,null,r.a.createElement(Oe.a,{variant:"contained",color:"primary",className:e.button},r.a.createElement(je.a,{color:"secondary"},"Generate Data")),r.a.createElement(ve.a,{className:e.dialog},r.a.createElement(ke.a,null,"Generate Data"),r.a.createElement(Ce.a,null,r.a.createElement(xe.a,{color:"primary",placeholder:"1,2,3...",label:"Dataset Values",margin:"normal"}),r.a.createElement(Oe.a,{onClick:this.handleRandomisation,color:"secondary"},"Randomise"),r.a.createElement(Oe.a,{color:"secondary"},"Confirm"))))}}]),t}(r.a.Component),De=Object(D.withStyles)(function(e){return{button:{margin:e.spacing.unit},dialog:{margin:e.spacing.unit,minWidth:550,height:400}}},{withTheme:!0})(Te),Le=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={menuOpen:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(Oe.a,{onClick:this.handleScriptsList,variant:"contained",color:"primary",className:e.button},r.a.createElement(je.a,{color:"secondary"},"Select Script"))}}]),t}(r.a.Component),ze=Object(D.withStyles)(function(e){return{button:{margin:e.spacing.unit}}},{withTheme:!0})(Le),He=a(25),Me=a.n(He),Re=a(38),Ie=a.n(Re),Ge=a(39),Pe=a.n(Ge),We=a(170),Ae=a.n(We),Be=a(171),Je=a.n(Be),Ve=a(173),_e=a.n(Ve),Fe=a(169),Ue=a.n(Fe),$e=a(172),Ye=a.n($e),qe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).handleRunPause=function(){a.setState(function(e){return{run:!a.state.run}}),console.log(a.state.run)},a.state={run:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(Me.a,{className:e.paper,elevation:7},r.a.createElement(Ie.a,{color:"secondary"},r.a.createElement(Pe.a,{title:"Previous"},r.a.createElement(Ue.a,null))),r.a.createElement(Ie.a,{color:"secondary",onClick:this.handleRunPause},r.a.createElement(Pe.a,{title:this.state.run?"Pause":"Run"},this.state.run?r.a.createElement(Je.a,null):r.a.createElement(Ae.a,null))),r.a.createElement(Ie.a,{color:"secondary"},r.a.createElement(Pe.a,{title:"Next"},r.a.createElement(Ye.a,null))),r.a.createElement(Ie.a,{color:"secondary",className:e.button},r.a.createElement(Pe.a,{title:"Reset"},r.a.createElement(_e.a,null))),r.a.createElement(ze,null),"/sorting"==this.props.match.url?r.a.createElement(De,{data:this.state.data,dataSize:this.state.dataSize,handleDataChange:this.handleDataChange}):""))}}]),t}(r.a.Component),Ke=Object(D.withStyles)(function(e){return{root:{flexGrow:1},paper:{flexGrow:1,padding:e.spacing.unit,width:570},contextLog:{padding:e.spacing.unit},button:{margin:e.spacing.unit},textField:{margin:e.spacing.unit,width:135,flexGrow:1}}},{withTheme:!0})(qe),Qe=(a(397),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={light:a.props.light,data:[12,5,14,8,9,16,23,12,12,5,2,8,9,16,23,12,1,1,1]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"componentDidUpdate",value:function(){}},{key:"drawChart",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(r.a.Component)),Xe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={height:470,width:550},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(Me.a,{className:e.root,elevation:7},r.a.createElement(Qe,{data:this.state.data,height:this.state.height,width:this.state.width,className:"test"}),r.a.createElement(O.a,null))}}]),t}(r.a.Component),Ze=Object(D.withStyles)(function(e){return{root:{width:570,height:500}}},{withTheme:!0})(Xe),et=function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(h.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"Hello"))}}]),t}(r.a.Component),tt=a(22),at=a.n(tt),nt=a(401),rt=a(400),lt={palette:{type:"light",primary:{main:"#afe2f7"},secondary:{main:"#002f39"}},typography:{useNextVariants:!0}},it={palette:{type:"dark",primary:{main:"#002f39"},secondary:{main:"#afe2f7"},typography:{useNextVariants:!0}}},ct=Object(D.createMuiTheme)(lt),st=Object(D.createMuiTheme)(it),ot=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).handleLightChange=function(){a.setState(function(e){return{light:!a.state.light}}),console.log("Light: "+a.state.light)},a.handleHelperChange=function(){a.setState(function(e){return{helper:!a.state.helper}}),console.log("Helper: "+a.state.helper)},a.handleDataChange=function(){a.setState(function(e){return{data:!a.state.data}}),console.log("Data Set: "+a.state.data),a.handleDataSizeChange()},a.handleDataSizeChange=function(){a.setState(function(e){return{dataSize:a.state.data.length}}),console.log("Data Size: "+a.state.data)},a.state={light:!0,helper:!1,data:[1,1,1,5,12],dataSize:0,modes:["Turing","von Neumann","Sorting"]},a.handleLightChange=a.handleLightChange.bind(Object(m.a)(Object(m.a)(a))),a.handleHelperChange=a.handleHelperChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){localStorage.getItem("light")&&this.setState({light:JSON.parse(localStorage.getItem("light")),helper:JSON.parse(localStorage.getItem("helper"))})}},{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("light",JSON.stringify(t.light)),localStorage.setItem("helper",JSON.stringify(t.helper))}},{key:"render",value:function(){var e=this,t=this.props.classes;new RegExp("/$"),new RegExp("/.[a-z]+.[a-z]+");return r.a.createElement(nt.a,null,r.a.createElement("div",{className:t.root},r.a.createElement(D.MuiThemeProvider,{theme:this.state.light?ct:st},r.a.createElement(ce,{handleLightChange:this.handleLightChange,light:this.state.light,handleHelperChange:this.handleHelperChange,helper:this.state.helper,modes:this.state.modes}),r.a.createElement("div",{style:{marginTop:"90px"}}),r.a.createElement(rt.a,{Route:!0,exact:!0,path:"/",render:function(){return r.a.createElement(et,null)}}),r.a.createElement(rt.a,{exact:!0,path:"/turing",render:function(t){return r.a.createElement(at.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center",spacing:24},r.a.createElement(at.a,{item:!0},r.a.createElement(Ze,Object.assign({},t,{light:e.state.light}))),r.a.createElement(at.a,{item:!0},r.a.createElement(pe,Object.assign({},t,{light:e.state.light}))),r.a.createElement(at.a,{item:!0},r.a.createElement(Ke,Object.assign({},t,{data:e.state.data,dataSize:e.state.dataSize,handleDataChange:e.handleDataChange}))),r.a.createElement(at.a,{item:!0},r.a.createElement(be,t)))}}),r.a.createElement(rt.a,{exact:!0,path:"/von_neumann",render:function(t){return r.a.createElement(at.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center",spacing:24},r.a.createElement(at.a,{item:!0},r.a.createElement(Ze,Object.assign({},t,{light:e.state.light}))),r.a.createElement(at.a,{item:!0},r.a.createElement(pe,Object.assign({},t,{light:e.state.light}))),r.a.createElement(at.a,{item:!0},r.a.createElement(Ke,Object.assign({},t,{data:e.state.data,dataSize:e.state.dataSize,handleDataChange:e.handleDataChange}))),r.a.createElement(at.a,{item:!0},r.a.createElement(be,t)))}}),r.a.createElement(rt.a,{exact:!0,path:"/sorting",render:function(t){return r.a.createElement(at.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center",spacing:24},r.a.createElement(at.a,{item:!0},r.a.createElement(Ze,Object.assign({},t,{light:e.state.light}))),r.a.createElement(at.a,{item:!0},r.a.createElement(pe,Object.assign({},t,{light:e.state.light}))),r.a.createElement(at.a,{item:!0},r.a.createElement(Ke,Object.assign({},t,{data:e.state.data,dataSize:e.state.dataSize,handleDataChange:e.handleDataChange}))),r.a.createElement(at.a,{item:!0},r.a.createElement(be,t)))}}))))}}]),t}(r.a.Component),ht=Object(D.withStyles)(function(e){return{root:{flexGrow:1}}})(ot);i.a.render(r.a.createElement(ht,null),document.getElementById("root"))}},[[237,1,2]]]);
//# sourceMappingURL=main.2914ef74.chunk.js.map