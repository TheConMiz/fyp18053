(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{243:function(t,e,a){t.exports=a(406)},404:function(t,e,a){},405:function(t,e,a){},406:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(28),s=a.n(i),o=a(16),c=a(17),l=a(20),u=a(18),p=a(19),h=a(36),m=a(168),d=a(95),g=a.n(d),f=a(175),b=a.n(f),S=a(29),y=a.n(S),v=a(45),E=a.n(v),O=a(71),k=a.n(O),w=a(176),j=a.n(w),C=a(177),x=a.n(C),T=a(33),N=a.n(T),L=a(10),I=a(94),M=a.n(I),q=a(92),P=a.n(q),A=a(178),R=a.n(A),V=a(70),D=a.n(V),B=a(49),z=a.n(B),G=a(30),W=a.n(G),_=a(181),Q=a(171),H=a.n(Q),F=a(172),U=a.n(F),J=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={snackbar:!1},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.classes;return r.a.createElement(D.a,{title:"Toggle Lights",placement:"bottom"},r.a.createElement(k.a,{color:"secondary",className:t.lights,onClick:this.props.handleLightChange,"aria-label":"Toggle Lights"},this.props.light?r.a.createElement(U.a,null):r.a.createElement(H.a,null)))}}]),e}(r.a.Component),$=Object(L.withStyles)(function(t){return{lights:{margin:t.spacing.unit}}},{withTheme:!0})(J),K=a(173),X=a.n(K),Y=a(174),Z=a.n(Y),tt=a(93),et=a.n(tt),at=a(407),nt=a(411),rt=a(182),it=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).handleMenuOpen=function(){a.setState(function(t){return{drawer:!a.state.drawer}})},a.handleAboutOpen=function(){a.setState(function(t){return{about:!a.state.about}})},a.state={drawer:!1,modes:a.props.modes,about:!1},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this,e=this.props,a=e.classes,n=e.modes,i=r.a.createElement("div",null,r.a.createElement("div",{className:a.appDrawer},r.a.createElement(z.a,{subheader:r.a.createElement(P.a,{component:"div"},"Learn+")},r.a.createElement(y.a,null),n.map(function(e,n){return r.a.createElement(W.a,{className:a.menuItem,button:!0,key:e,onClick:function(){t.handleMenuOpen()},component:at.a,to:e.replace(/\s/g,"_").toLowerCase()},r.a.createElement(E.a,{primary:e}))})),r.a.createElement(y.a,null),r.a.createElement(z.a,null,r.a.createElement(W.a,{className:a.menuItem,button:!0,onClick:function(){t.handleAboutOpen()}},r.a.createElement(E.a,{primary:"About"}),this.state.about?r.a.createElement(X.a,null):r.a.createElement(Z.a,null)),r.a.createElement(et.a,{in:this.state.about,timeout:"auto",unmountOnExit:!0},r.a.createElement(z.a,null,r.a.createElement(W.a,{className:a.nestedItem,component:"a",target:"_blank",href:"https://github.com/TheConMiz/fyp18053"},r.a.createElement(rt.a,null),r.a.createElement(E.a,{primary:"View Repository",inset:!0})))))));return r.a.createElement("div",{className:a.root},r.a.createElement(M.a,null),r.a.createElement(b.a,{className:a.appBar},r.a.createElement(j.a,null,r.a.createElement(D.a,{title:"Open Menu",placement:"bottom"},r.a.createElement("div",null,r.a.createElement(k.a,{color:"secondary",className:a.menuButton,onClick:this.handleMenuOpen},r.a.createElement(x.a,null)))),r.a.createElement(N.a,{variant:"h6",color:"secondary",noWrap:!0,className:a.typography},"Learn+"),r.a.createElement($,{light:this.props.light,handleLightChange:this.props.handleLightChange}))),r.a.createElement("nav",{className:a.appDrawer},r.a.createElement(R.a,{smUp:!0,implementation:"css"},r.a.createElement(g.a,{container:this.props.container,anchor:"left",open:this.state.drawer,onOpen:this.handleMenuOpen,onClose:this.handleMenuOpen},i))))}}]),e}(r.a.Component),st=Object(_.a)(Object(L.withStyles)(function(t){return{root:{display:"flex"},menuButton:{marginRight:20,marginLeft:-12},appBar:{marginLeft:240},typography:{marginRight:20,flexGrow:1,align:"center"},settingsIcon:{marginRight:-12},nestedItem:{paddingLeft:t.spacing.unit},menuItem:{"&:focus":{backgroundColor:t.palette.primary.main,"& $primary, & $icon":{color:t.palette.common.white}}},appDrawer:Object(m.a)({},t.breakpoints.up("sm"),{width:240,flexShrink:0})}},{withTheme:!0}),nt.a)(it),ot=a(27),ct=a.n(ot),lt=a(25),ut=a.n(lt),pt=a(37),ht=a.n(pt),mt=a(39),dt=a.n(mt),gt=a(99),ft=a.n(gt),bt=a(100),St=a.n(bt),yt=a(23),vt=a.n(yt),Et=a(21),Ot=a(59),kt=a.n(Ot),wt=a(31),jt=a.n(wt),Ct=a(60),xt=a.n(Ct),Tt=a(58),Nt=a.n(Tt),Lt=a(46),It=a.n(Lt),Mt=a(68),qt=a.n(Mt),Pt=a(40),At=a.n(Pt),Rt=a(41),Vt=a.n(Rt),Dt=a(35),Bt=a.n(Dt),zt=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).scriptMenuOpen=function(){a.setState({scriptMenu:!a.state.scriptMenu})},a.stateMenuOpen=function(){a.setState({stateMenu:!a.state.stateMenu})},a.instructionsMenuOpen=function(){a.setState({instructionsMenu:!a.state.instructionsMenu})},a.state={scriptMenu:!1,stateMenu:!1,instructionsMenu:!1},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this,e=this.props.classes;return r.a.createElement(ct.a,{className:e.controlPaper,elevation:7},r.a.createElement(ht.a,{color:"secondary",onClick:function(){t.props.startMachine()},disabled:this.props.play},r.a.createElement(dt.a,{title:"Start"},r.a.createElement(ft.a,null))),r.a.createElement(ht.a,{color:"secondary",onClick:function(){t.props.setPlay(!1),"Endless 1/0s"===t.props.currentScript?t.props.endless10Setter():"Increment by 1"===t.props.currentScript?t.props.incrementOneSetter():"Ping-Pong"===t.props.currentScript?t.props.genericSetter():console.log("Nothing to set")}},r.a.createElement(dt.a,{title:"Reset"},r.a.createElement(St.a,null))),r.a.createElement(vt.a,{className:e.button,color:"primary",variant:"contained",onClick:this.scriptMenuOpen},r.a.createElement(Et.a,{color:"secondary"},"Scripts")),r.a.createElement(vt.a,{className:e.button,color:"primary",variant:"contained",onClick:this.stateMenuOpen},r.a.createElement(Et.a,{color:"secondary"},"Machine States")),r.a.createElement(vt.a,{className:e.button,color:"primary",variant:"contained",onClick:this.instructionsMenuOpen},r.a.createElement(Et.a,{color:"secondary"},"Instructions")),r.a.createElement(It.a,{open:this.state.scriptMenu,className:e.dialog},r.a.createElement(jt.a,{component:"fieldset",className:e.formControl},r.a.createElement(Et.a,{className:e.typography,variant:"h6",color:"secondary",align:"center"},"Select Script"),r.a.createElement(y.a,null),r.a.createElement(Nt.a,{name:"scriptsMenu",className:e.radio,value:this.props.currentScript,onChange:function(e){return t.props.setScript(e.target.value)}},this.props.scriptList.map(function(t,e){return r.a.createElement(kt.a,{value:t,key:e,control:r.a.createElement(xt.a,{color:"secondary"}),label:t})}))),r.a.createElement(vt.a,{className:e.button,onClick:this.scriptMenuOpen,variant:"contained",color:"primary"},r.a.createElement(Et.a,{color:"secondary"},"Confirm"))),r.a.createElement(It.a,{open:this.state.stateMenu,className:e.dialog,scroll:"body"},r.a.createElement(jt.a,{component:"fieldset",className:e.formControl},r.a.createElement(Et.a,{className:e.typography,variant:"h6",color:"secondary",align:"center"},"States"),r.a.createElement(y.a,null),this.props.stateList.map(function(t,e){return r.a.createElement(qt.a,{key:t},r.a.createElement(E.a,{primary:t}))})),r.a.createElement(vt.a,{className:e.button,variant:"contained",color:"primary",onClick:this.props.addStates},r.a.createElement(Et.a,{color:"secondary"},"Add State")),r.a.createElement(vt.a,{className:e.button,variant:"contained",color:"primary",disabled:1===this.props.stateList.length,onClick:this.props.removeStates},r.a.createElement(Et.a,{color:"secondary"},"Remove State")),r.a.createElement(vt.a,{className:e.button,onClick:this.stateMenuOpen,variant:"contained",color:"primary"},r.a.createElement(Et.a,{color:"secondary"},"Confirm"))),r.a.createElement(It.a,{open:this.state.instructionsMenu,className:e.dialog,scroll:"body"},r.a.createElement(jt.a,{component:"fieldset",className:e.formControl},r.a.createElement(Et.a,{className:e.typography,variant:"h6",color:"secondary",align:"center"},"Instructions"),r.a.createElement(y.a,null),this.props.instructions.map(function(a,i){return r.a.createElement(n.Fragment,{key:i},r.a.createElement(Et.a,{className:e.typography,variant:"h6",color:"secondary",align:"center"},"Instruction ",i),r.a.createElement(jt.a,{className:e.formControl},r.a.createElement(At.a,{shrink:!0},"State"),r.a.createElement(Vt.a,{value:a.state,onChange:function(e){a.state=e.target.value,t.props.setInstruction(a,i)},input:r.a.createElement(Bt.a,{name:"state",id:"state"})},t.props.stateList.map(function(t,e){return r.a.createElement(W.a,{key:e,value:t},t)}))),r.a.createElement(jt.a,{className:e.formControl},r.a.createElement(At.a,{shrink:!0},"If Read"),r.a.createElement(Vt.a,{value:a.ifRead,onChange:function(e){a.ifRead=e.target.value,t.props.setInstruction(a,i)},input:r.a.createElement(Bt.a,{name:"ifRead",id:"ifRead"})},t.props.dataList.map(function(t,e){return r.a.createElement(W.a,{key:e,value:t},t)}))),r.a.createElement(jt.a,{className:e.formControl},r.a.createElement(At.a,{shrink:!0},"Write"),r.a.createElement(Vt.a,{value:a.write,onChange:function(e){a.write=e.target.value,t.props.setInstruction(a,i)},input:r.a.createElement(Bt.a,{name:"write",id:"write"})},t.props.dataList.map(function(t,e){return r.a.createElement(W.a,{key:e,value:t},t)}))),r.a.createElement(jt.a,{className:e.formControl},r.a.createElement(At.a,{shrink:!0},"Next State"),r.a.createElement(Vt.a,{value:a.goTo,onChange:function(e){a.goTo=e.target.value,t.props.setInstruction(a,i)},input:r.a.createElement(Bt.a,{name:"nextState",id:"nextState"})},t.props.stateList.map(function(t,e){return r.a.createElement(W.a,{key:e,value:t},t)}))),r.a.createElement(jt.a,{className:e.formControl},r.a.createElement(At.a,{shrink:!0},"Tape Move"),r.a.createElement(Vt.a,{value:a.moveTape,onChange:function(e){a.moveTape=e.target.value,t.props.setInstruction(a,i)},input:r.a.createElement(Bt.a,{name:"tapeMove",id:"tapeMove"})},t.props.moveList.map(function(t,e){return r.a.createElement(W.a,{key:e,value:t},t)}))))})),r.a.createElement(vt.a,{className:e.button,variant:"contained",color:"primary",onClick:this.props.addInstruction},r.a.createElement(Et.a,{color:"secondary"},"Add Instruction")),r.a.createElement(vt.a,{className:e.button,variant:"contained",color:"primary",disabled:1===this.props.instructions.length,onClick:this.props.removeInstruction},r.a.createElement(Et.a,{color:"secondary"},"Remove Instruction")),r.a.createElement(vt.a,{className:e.button,onClick:this.instructionsMenuOpen,variant:"contained",color:"primary"},r.a.createElement(Et.a,{color:"secondary"},"Confirm"))),this.props.error?r.a.createElement(Et.a,{className:e.typography,color:"secondary",variant:"h7"},"Possible Error: Check the instructions, and click Reset"):"")}}]),e}(r.a.Component),Gt=Object(L.withStyles)(function(t){return{controlPaper:{width:570,flexGrow:1,padding:2*t.spacing.unit},button:{margin:t.spacing.unit},typography:{padding:t.spacing.unit},dialog:{flexGrow:1,padding:2*t.spacing.unit},radio:{padding:2*t.spacing.unit},textField:{margin:t.spacing.unit,width:100},statePaper:{width:570,padding:2*t.spacing.unit},formControl:{margin:t.spacing.unit,flexGrow:1}}},{withTheme:!0})(zt),Wt=a(101),_t=a.n(Wt),Qt=(a(165),a(166),a(167),a(72)),Ht=a.n(Qt),Ft=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.classes;return r.a.createElement(Ht.a,{className:t.root,elevation:7},r.a.createElement(_t.a,{width:"550px",height:"480px",wrapEnabled:!0,onLoad:this.onLoad,onChange:this.onChange,mode:"javascript",fontSize:18,theme:this.props.light?"github":"solarized_dark",highlightActiveLine:!0,editorProps:{$blockScrolling:1/0},readOnly:!0,value:"// Turing Machine",setAutoScrollEditorIntoView:!0,setUseWrapMode:!0,indentedSoftWrap:!0}))}}]),e}(r.a.Component),Ut=Object(L.withStyles)(function(t){return{root:{flexGrow:1,width:570,height:500,padding:t.spacing.unit}}},{withTheme:!0})(Ft),Jt=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).classes=a.props,a.state={},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this,e=this.props.classes;return r.a.createElement(ct.a,{className:e.tapePaper},r.a.createElement(y.a,null),this.props.tapeArray.map(function(a,n){return r.a.createElement(vt.a,{className:e.button,key:n,color:n===t.props.tapePosition?"primary":"secondary",variant:"contained",onClick:function(){return t.props.play?console.log("Tape Locked"):t.props.changeCell(n)}},"blank"===a?"":a)}),r.a.createElement(y.a,null))}}]),e}(r.a.Component),$t=Object(L.withStyles)(function(t){return{tapePaper:{maxWidth:900,padding:1.5*t.spacing.unit,flexGrow:1},button:{margin:t.spacing.unit,width:10,height:50}}},{withTheme:!0})(Jt),Kt=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={error:null,info:null},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"componentDidCatch",value:function(t,e){this.setState({error:t,info:e})}},{key:"render",value:function(){return this.state.info?r.a.createElement("div",null,"Error. Refresh the Page!"):this.props.children}}]),e}(r.a.Component),Xt=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).addStates=function(){var t=a.state.stateList.slice();t.push("q"+t.length),a.setState({stateList:t}),console.log(a.state.stateList)},a.removeStates=function(){var t=a.state.stateList.slice();t.pop(),a.setState({stateList:t}),console.log(a.state.stateList)},a.setScript=function(t){"Endless 1/0s"===t?a.endless10Setter():"Increment by 1"===t?a.incrementOneSetter():"Ping-Pong"===t?a.genericSetter():console.log("Nothing to set"),a.setState({currentScript:t})},a.addInstruction=function(){var t=a.state.instructions.slice();t.push({state:"q0",ifRead:"blank",write:"0",goTo:"q0",moveTape:"right"}),a.setState({instructions:t})},a.removeInstruction=function(){var t=a.state.instructions.slice();t.pop(),console.log(t),a.setState({instructions:t})},a.setInstruction=function(t,e){var n=a.state.instructions.slice();n[e]=t,a.setState({instructions:n})},a.changeCell=function(t){console.log(t);var e=a.state.tapeArray.slice();"0"===e[t]?e[t]="1":"1"===e[t]?e[t]="blank":e[t]="0",a.setState({tapeArray:e})},a.setPlay=function(t){a.setState({play:t})},a.setError=function(t){a.setState({error:t})},a.endless10Setter=function(){a.setState({stateList:["q0","q1","q2","q3"]}),a.setState({instructions:[{state:"q0",ifRead:"blank",write:"0",goTo:"q1",moveTape:"right"},{state:"q1",ifRead:"blank",write:"blank",goTo:"q2",moveTape:"right"},{state:"q2",ifRead:"blank",write:"1",goTo:"q3",moveTape:"right"},{state:"q3",ifRead:"blank",write:"blank",goTo:"q0",moveTape:"right"}]}),a.setState({tapeArray:["blank","blank","blank","blank","blank","blank","blank","blank","blank","blank"]}),a.setState({startState:"q0"}),a.setState({currentState:"q0"}),a.setState({tapePosition:0}),a.setState({play:!1})},a.incrementOneSetter=function(){a.setState({stateList:["q0","q1","q2"]}),a.setState({instructions:[{state:"q0",ifRead:"1",write:"1",goTo:"q0",moveTape:"right"},{state:"q0",ifRead:"0",write:"0",goTo:"q0",moveTape:"right"},{state:"q0",ifRead:"blank",write:"blank",goTo:"q1",moveTape:"left"},{state:"q1",ifRead:"1",write:"0",goTo:"q1",moveTape:"left"},{state:"q1",ifRead:"0",write:"1",goTo:"q2",moveTape:"halt"}]}),a.setState({tapeArray:["blank","blank","blank","1","0","1","1","blank","blank","blank"]}),a.setState({startState:"q0"}),a.setState({currentState:"q0"}),a.setState({tapePosition:3}),a.setState({play:!1})},a.genericSetter=function(){a.setState({stateList:["q0","q1"]}),a.setState({instructions:[{state:"q0",ifRead:"0",write:"0",goTo:"q0",moveTape:"right"},{state:"q0",ifRead:"1",write:"1",goTo:"q1",moveTape:"left"},{state:"q1",ifRead:"0",write:"0",goTo:"q1",moveTape:"left"},{state:"q1",ifRead:"1",write:"1",goTo:"q0",moveTape:"right"}]}),a.setState({tapeArray:["1","0","0","0","0","0","0","0","0","1"]}),a.setState({startState:"q0"}),a.setState({currentState:"q0"}),a.setState({tapePosition:4}),a.setState({play:!1})},a.startMachine=function(){var t=a.state.instructions.slice().find(function(t){return t.state===a.state.currentState&&t.ifRead===a.state.tapeArray[a.state.tapePosition]});if(void 0===t)throw a.setState({play:!0}),a.setState({error:!0}),new Error("Incomplete Instructions: Click Reset");"halt"===t.moveTape&&(a.setState({play:!0}),console.log("HALT"));var e=a.state.tapeArray.slice();e[a.state.tapePosition]=t.write;var n=a.state.tapePosition+("left"===t.moveTape?-1:1);n<0?(e=["blank"].concat(e),n=0):n>a.state.tapeArray.length-1&&e.push("blank");a.setState({currentState:t.goTo,tapeArray:e,tapePosition:n})},a.state={scriptList:["Endless 1/0s","Increment by 1","Ping-Pong"],currentScript:"Endless 1/0s",moveList:["right","left","halt"],instructions:[],dataList:["0","1","blank"],stateList:["q0","q1"],startState:"q0",currentState:"q0",tapeArray:["1","0","0","0","0","0","0","0","0","1"],tapePosition:4,play:!1,editor:!1,error:!1},a.startMachine=a.startMachine.bind(Object(h.a)(Object(h.a)(a))),a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.endless10Setter()}},{key:"render",value:function(){var t=this.props.classes;return r.a.createElement(Kt,null,r.a.createElement(ut.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center",spacing:24},r.a.createElement(ut.a,null,r.a.createElement($t,{dataList:this.state.dataList,instructions:this.state.instructions,currentScript:this.state.currentScript,moveList:this.state.moveList,tapeArray:this.state.tapeArray,changeCell:this.changeCell,tapePosition:this.state.tapePosition,play:this.state.play})),r.a.createElement(ut.a,{item:!0},r.a.createElement(Ut,{light:this.props.light,currentScript:this.state.currentScript})),r.a.createElement(ut.a,{item:!0},r.a.createElement("div",null,r.a.createElement(Gt,{dataList:this.state.dataList,addData:this.addData,removeData:this.removeData,scriptList:this.state.scriptList,currentScript:this.state.currentScript,setScript:this.setScript,stateList:this.state.stateList,addStates:this.addStates,removeStates:this.removeStates,moveList:this.state.moveList,instructions:this.state.instructions,addInstruction:this.addInstruction,removeInstruction:this.removeInstruction,setInstruction:this.setInstruction,endless10Setter:this.endless10Setter,incrementOneSetter:this.incrementOneSetter,genericSetter:this.genericSetter,setPlay:this.setPlay,play:this.state.play,startMachine:this.startMachine,error:this.state.error,setError:this.setError}),r.a.createElement("div",{style:{marginTop:"24px"}}),r.a.createElement(ct.a,{className:t.controlPaper,elevation:7},r.a.createElement(N.a,{color:"secondary",variant:"h5",gutterBottom:!0},"References"),r.a.createElement(N.a,{component:"a",target:"_blank",href:"https://www.google.com"},"THIS IS SOME TEXT"))))))}}]),e}(r.a.Component),Yt=Object(L.withStyles)(function(t){return{controlPaper:{width:570,flexGrow:1,padding:2*t.spacing.unit},button:{margin:t.spacing.unit}}},{withTheme:!0})(Xt),Zt=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={svgWidth:550,svgHeight:480},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement(Yt,{width:this.state.svgWidth,height:this.state.svgHeight,light:this.props.light})}}]),e}(r.a.Component),te=function(t){function e(t){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).call(this,t))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,"VON NEUMANN")}}]),e}(r.a.Component),ee=a(103),ae=a(22),ne=a(125),re=a.n(ne),ie=a(73),se=a.n(ie);a(96);var oe=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).scriptMenuOpen=function(){a.setState({scriptMenu:!a.state.scriptMenu})},a.state={scriptMenu:!1,selection:""},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this,e=this.props.classes;return r.a.createElement(ct.a,{className:e.controlPaper,elevation:7},r.a.createElement(ht.a,{color:"secondary",onClick:function(){"Bubble"===t.props.currentScript?t.props.bubbleSort():"Insertion"===t.props.currentScript?t.props.insertionSort():"Selection"===t.props.currentScript?t.props.selectionSort():"Quick"===t.props.currentScript?t.props.quickSort():console.log("No script selected"),t.props.setPlay()},disabled:this.props.play},r.a.createElement(dt.a,{title:"Start"},r.a.createElement(ft.a,null))),r.a.createElement(ht.a,{color:"secondary",disabled:!this.props.play,onClick:function(){t.props.stopLoop(),t.props.setPlay()}},r.a.createElement(dt.a,{title:"Stop"},r.a.createElement(re.a,null))),r.a.createElement(ht.a,{color:"secondary",className:e.button,disabled:this.props.play,onClick:this.props.shuffleBarChart},r.a.createElement(dt.a,{title:"Reset"},r.a.createElement(St.a,null))),r.a.createElement(vt.a,{className:e.button,color:"primary",variant:"contained",onClick:this.scriptMenuOpen,disabled:this.props.play},r.a.createElement(Et.a,{color:"secondary"},"Scripts")),r.a.createElement(It.a,{open:this.state.scriptMenu,className:e.dialog},r.a.createElement(jt.a,{component:"fieldset",className:e.formControl},r.a.createElement(Et.a,{className:e.typography,variant:"h6",color:"secondary",align:"center"},"Select Script"),r.a.createElement(y.a,null),r.a.createElement(Nt.a,{name:"scriptsMenu",className:e.radio,value:this.props.currentScript,onChange:function(e){return t.props.setScript(e.target.value)}},this.props.scripts.map(function(t,e){return r.a.createElement(kt.a,{value:t,key:e,control:r.a.createElement(xt.a,{color:"secondary"}),label:t+" Sort"})}))),r.a.createElement(vt.a,{className:e.button,onClick:this.scriptMenuOpen,variant:"contained",color:"primary"},r.a.createElement(Et.a,{color:"secondary"},"Confirm"))),r.a.createElement(se.a,{id:"speed",label:"Set Interval",type:"number",className:e.textField,InputLabelProps:{shrink:!0},value:this.props.speed,margin:"normal",variant:"outlined",onChange:function(e){return t.props.setSpeed(e.target.value)},disabled:this.props.play,helperText:"The smaller, the quicker!"}),r.a.createElement(se.a,{id:"dataSize",label:"Set Data Size",type:"number",className:e.textField,InputLabelProps:{shrink:!0},value:this.props.dataSize,margin:"normal",variant:"outlined",disabled:this.props.play,onChange:function(e){return t.props.setDataSize(e.target.value)},helperText:"Reset after changing value!"}))}}]),e}(r.a.Component),ce=Object(L.withStyles)(function(t){return{simView:{width:570,padding:t.spacing.unit,flexGrow:1},controlPaper:{width:570,flexGrow:1,padding:2*t.spacing.unit},button:{margin:t.spacing.unit},typography:{padding:t.spacing.unit},dialog:{flexGrow:1,padding:2*t.spacing.unit},radio:{padding:2*t.spacing.unit},textField:{margin:t.spacing.unit,width:100}}},{withTheme:!0})(oe),le=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={bubbleValue:"// Bubble Sort: Time Complexity of O(n^2)\nfunction bubbleSort(arrayOfValues) {    \n    // For each value in the arrayOfValues...\n    for (var i = 0; i < arrayOfValues.length; ++i) {\n\n        // Consider only the unsorted arrayOfValues.length - i values\n        for (var j = 0; j < arrayOfValues.length - i; ++j) {\n            \n            // If current value greater than the next value, then swap the two\n            if (arrayOfValues[j] > arrayOfValues[j + 1]) {\n                \n                swap(arrayOfValues[j], arrayOfValues[j + 1]);\n            }\n        }\n    }\n}",insertionValue:"// Insertion Sort: Time Complexity of O(n^2)\nfunction insertionSort(arrayOfValues) {\n    var currentKey;\n    for (var i = 0; i < arrayOfValues; ++i) {\n        currentKey = arrayOfValues[i];\n        var j = i - 1;\n\n        while (j >= 0 && arrayOfValues[j] > currentKey) {\n            \n        }\n\n    }\n}\n",quickValue:"// Quick Sort: Time Complexity of O(n^2)\nfunction quickSort(arrayOfValues) {\n    \n}",selectionValue:"// Selection Sort: Time Complexity of O(n^2)\nfunction selectionSort(arrayOfValues) {\n    \n}"},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.classes;return r.a.createElement(Ht.a,{className:t.root,elevation:7},r.a.createElement(_t.a,{width:"550px",height:"480px",wrapEnabled:!0,onLoad:this.onLoad,onChange:this.onChange,mode:"javascript",fontSize:15,tabSize:4,theme:this.props.light?"github":"solarized_dark",highlightActiveLine:!0,editorProps:{$blockScrolling:1/0},readOnly:!0,value:"Bubble"===this.props.currentScript?this.state.bubbleValue:"Insertion"===this.props.currentScript?this.state.insertionValue:"Quick"===this.props.currentScript?this.state.quickValue:"Selection"===this.props.currentScript?this.state.selectionValue:"// No Script selected...",setAutoScrollEditorIntoView:!0,setUseWrapMode:!0,indentedSoftWrap:!0}))}}]),e}(r.a.Component),ue=Object(L.withStyles)(function(t){return{root:{flexGrow:1,width:570,height:500,padding:t.spacing.unit}}},{withTheme:!0})(le),pe=(a(404),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).loop=[],a.xScale=[],a.yScale=[],a.setScales=function(t){a.yScale=ae.d().domain([0,ae.a(t)]).range([0,a.props.height-20]),a.xScale=ae.c().domain(ae.b(0,t.length)).range([0,a.props.width]).paddingInner(.2)},a.stopLoop=function(){clearInterval(a.loop),a.loop={},ae.e(".barChart").selectAll("rect").attr("class","")},a.setPlay=function(){a.setState({play:!a.state.play})},a.setScript=function(t){a.setState({currentScript:t}),console.log(a.state.currentScript)},a.setDataSize=function(t){a.setState({dataSize:t}),console.log(a.state.dataSize)},a.setSpeed=function(t){a.setState({speed:t}),console.log(a.state.speed)},a.initBarChart=function(t){a.setScales(t),ae.e(".barChart").selectAll("rect").data(t).enter().append("rect").attr("x",function(t,e){return a.xScale(e)}).attr("y",function(t,e){return a.props.height-a.yScale(t)}).attr("width",a.xScale.bandwidth()).transition().duration(a.state.speed).attr("height",function(t,e){return a.yScale(t)}).attr("id",function(t,e){return"rect-"+e}),ae.e(".barChart").selectAll("text").data(t).enter().append("text").attr("x",function(t,e){return a.xScale(e)+a.xScale.bandwidth()/2}).attr("y",function(t,e){return a.props.height-a.yScale(t)-20}).attr("dy","1em").attr("opacity",.7).attr("id",function(t,e){return"label-"+e}).text(function(t){return t}),a.setState({data:t})},a.shuffleBarChart=function(){var t=ae.f(ae.b(a.state.dataSize)).map(function(t){return t+1});a.setScales(t),ae.e(".barChart").selectAll("rect").remove(),ae.e(".barChart").selectAll("text").remove(),a.initBarChart(t)},a.bubbleSort=function(){var t=a.state.data.slice();a.setScales(t);var e=0,n=0;a.loop=setInterval(function(){!function(){if(!(n>=t.length-1)){if(e===t.length-1-n&&(e=0,++n),t[e]>t[e+1]){var a=[t[e+1],t[e]];t[e]=a[0],t[e+1]=a[1]}++e}}(),ae.e(".barChart").selectAll("rect").data(t,function(t){return t}).classed("activeBubble",function(t,a){return a===e||a+1===e}).classed("completedBubble",function(e,a){return a>=t.length-n}).transition().duration(a.state.speed).attr("x",function(t,e){return a.xScale(e)}),ae.e(".barChart").selectAll("text").data(t,function(t){return t}).transition().duration(a.state.speed).attr("x",function(t,e){return a.xScale(e)+a.xScale.bandwidth()/2})},a.state.speed),a.setState({data:t})},a.insertionSort=function(){var t=a.state.data.slice();a.setScales(t);var e=1,n=1,r=!1;a.loop=setInterval(function(){!function(){if((r||0===e)&&(e=n,r=!1),!(n>t.length)){if(t[e]<t[e-1]){var a=[t[e-1],t[e]];t[e]=a[0],t[e-1]=a[1]}else r=!0;e===n&&++n,--e}}(),ae.e(".barChart").selectAll("rect").data(t,function(t){return t}).classed("activeInsertion",function(a,r){return n<=t.length&&(r===e+1||r===e)}).classed("completedInsertion",function(t,e){return e<n}).transition().duration(a.state.speed).attr("x",function(t,e){return a.xScale(e)}),ae.e(".barChart").selectAll("text").data(t,function(t){return t}).transition().duration(a.state.speed).attr("x",function(t,e){return a.xScale(e)+a.xScale.bandwidth()/2})},a.state.speed),a.setState({data:t})},a.selectionSort=function(){var t=a.state.data.slice();a.setScales(t);var e=0,n=0,r=0,i=!1;a.loop=setInterval(function(){!function(){if(e!==t.length){if(i&&(i=!1,r=n=e),t[++n]<t[r]&&(r=n),n===t.length-1){var a=[t[r],t[e]];t[e]=a[0],t[r]=a[1],++e,i=!0}e===t.length-1&&++e}}(),ae.e(".barChart").selectAll("rect").data(t,function(t){return t}).classed("activeSelection",function(a,i){return e!==t.length&&(i===n||i===r)}).classed("completedSelection",function(t,a){return a<e}).transition().duration(a.state.speed).attr("x",function(t,e){return a.xScale(e)}),ae.e(".barChart").selectAll("text").data(t,function(t){return t}).transition().duration(a.state.speed).attr("x",function(t,e){return a.xScale(e)+a.xScale.bandwidth()/2})},a.state.speed),a.setState({data:t})},a.quickSort=function(){var t=a.state.data.slice();a.setScales(t);var e,n,r,i,s=[[0,t.length-1]];a.loop=setInterval(function(){!function a(){if(!e){if(!s.length)return;e=s.shift(),n=e[0]+Math.floor((e[1]-e[0])*Math.random()),r=e[0],i=e[1]}if(r===i)return n-1-e[0]>0&&s.push([e[0],n-1]),e[1]-(n+1)>0&&s.push([n+1,e[1]]),r=i=e=n=void 0,void a();if(t[r]<t[n])++r;else if(t[i]>t[n])--i;else{var o=[t[i],t[r]];t[r]=o[0],t[i]=o[1],n===r?n=i:n===i&&(n=r)}}(),ae.e(".barChart").selectAll("rect").data(t,function(t){return t}).classed("activeQuick",function(t,a){return e&&a>=e[0]&&a<=e[1]}).classed("pivotQuick",function(t,e){return e===n}).classed("highlightQuick",function(t,e){return e===i||e===r}).classed("completedQuick",function(t,a){return function(t){if(!e&&!s.length)return!0;return[e].concat(s).every(function(e){var a=Object(ee.a)(e,2),n=a[0],r=a[1];return t<n||r<t})}(a)}).transition().duration(a.state.speed).attr("x",function(t,e){return a.xScale(e)}),ae.e(".barChart").selectAll("text").data(t,function(t){return t}).transition().duration(a.state.speed).attr("x",function(t,e){return a.xScale(e)+a.xScale.bandwidth()/2})},a.state.speed),a.setState({data:t})},a.state={data:[],dataSize:10,play:!1,speed:250,currentScript:"Bubble",scripts:["Bubble","Insertion","Quick","Selection"]},a.state.data=ae.f(ae.b(a.state.dataSize)).map(function(t){return t+1}),a.setScript=a.setScript.bind(Object(h.a)(Object(h.a)(a))),a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.initBarChart(this.state.data.slice())}},{key:"render",value:function(){var t=this.props.classes;return r.a.createElement(ut.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center",spacing:24},r.a.createElement(ut.a,{item:!0},r.a.createElement(ct.a,{className:t.simView,elevation:7},r.a.createElement("svg",{width:this.props.width,height:this.props.height},r.a.createElement("g",{className:"barChart"})),r.a.createElement(y.a,null))),r.a.createElement(ut.a,{item:!0},r.a.createElement(ue,{light:this.props.light,currentScript:this.state.currentScript})),r.a.createElement(ut.a,{item:!0},r.a.createElement(ce,{stopLoop:this.stopLoop,shuffleBarChart:this.shuffleBarChart,play:this.state.play,setPlay:this.setPlay,speed:this.state.speed,dataSize:this.state.dataSize,setSpeed:this.setSpeed,setDataSize:this.setDataSize,bubbleSort:this.bubbleSort,insertionSort:this.insertionSort,mergeSort:this.mergeSort,selectionSort:this.selectionSort,quickSort:this.quickSort,scripts:this.state.scripts,currentScript:this.state.currentScript,setScript:this.setScript})),r.a.createElement(ut.a,{item:!0},r.a.createElement(ct.a,{className:t.controlPaper,elevation:7},r.a.createElement(N.a,{color:"secondary",variant:"h5",gutterBottom:!0},"References"),r.a.createElement(N.a,{component:"a",target:"_blank",href:"https://www.google.com"},"THIS IS SOME TEXT"))))}}]),e}(r.a.Component)),he=Object(L.withStyles)(function(t){return{simView:{width:570,padding:t.spacing.unit,flexGrow:1},controlPaper:{width:570,flexGrow:1,padding:2*t.spacing.unit},codeView:{width:570,flexGrow:1,padding:2*t.spacing.unit},button:{margin:t.spacing.unit}}},{withTheme:!0})(pe),me=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={svgWidth:550,svgHeight:480},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement(he,{width:this.state.svgWidth,height:this.state.svgHeight,light:this.props.light})}}]),e}(r.a.Component),de=a(104),ge=a.n(de),fe=(a(405),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).typingDone=function(){a.setState({typingDone:!a.state.typingDone}),console.log(" DONE")},a.state={typingDone:!1},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){this.props.classes;return r.a.createElement(ut.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:40},r.a.createElement(ut.a,{item:!0},r.a.createElement("div",{style:{marginTop:"240px"}})),r.a.createElement(ut.a,{item:!0},r.a.createElement(ge.a,{className:"Typist-header",avgTypingSpeed:40,startDelay:1e3,onTypingDone:this.typingDone},r.a.createElement("span",null,"Learnt"),r.a.createElement(ge.a.Backspace,{count:1,delay:700}),r.a.createElement(ge.a.Delay,{ms:250}),r.a.createElement("span",null,"+"))),r.a.createElement(ut.a,{item:!0},r.a.createElement(vt.a,{color:"primary",variant:"contained",component:at.a,to:"/turing_machine"},r.a.createElement(Et.a,{color:"secondary"},"Click to Begin"))))}}]),e}(r.a.Component)),be=Object(L.withStyles)(function(t){return{button:{margin:t.spacing.unit,align:"center"}}})(fe),Se=a(410),ye=a(408),ve=Object(L.createMuiTheme)({palette:{type:"light",primary:{main:"#afe2f7"},secondary:{main:"#045a6d"}},typography:{useNextVariants:!0}}),Ee=Object(L.createMuiTheme)({palette:{type:"dark",primary:{main:"#045a6d"},secondary:{main:"#afe2f7"},typography:{useNextVariants:!0}}}),Oe=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).handleLightChange=function(){a.setState(function(t){return{light:!a.state.light}}),console.log("Light: "+a.state.light)},a.state={light:!0,modes:["Turing Machine","von Neumann Architecture","Sorting Algorithms"]},a.handleLightChange=a.handleLightChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"componentWillMount",value:function(){localStorage.getItem("light")&&this.setState({light:JSON.parse(localStorage.getItem("light"))})}},{key:"componentWillUpdate",value:function(t,e){localStorage.setItem("light",JSON.stringify(e.light))}},{key:"render",value:function(){var t=this,e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(L.MuiThemeProvider,{theme:this.state.light?ve:Ee},r.a.createElement(st,{handleLightChange:this.handleLightChange,light:this.state.light,modes:this.state.modes}),r.a.createElement("div",{style:{marginTop:"90px"}}),r.a.createElement(Se.a,null,r.a.createElement(ye.a,{exact:!0,path:"/sorting_algorithms",render:function(){return r.a.createElement(me,{light:t.state.light})}}),r.a.createElement(ye.a,{exact:!0,path:"/turing_machine",render:function(){return r.a.createElement(Zt,{light:t.state.light})}}),r.a.createElement(ye.a,{exact:!0,path:"/von_neumann_architecture",render:function(){return r.a.createElement(te,null)}}),r.a.createElement(ye.a,{exact:!0,path:"/",render:function(){return r.a.createElement(be,null)}}))))}}]),e}(r.a.Component),ke=Object(L.withStyles)(function(t){return{root:{flexGrow:1}}})(Oe),we=a(409);s.a.render(r.a.createElement(we.a,{basename:"/"},r.a.createElement(ke,null)),document.getElementById("root"))}},[[243,1,2]]]);
//# sourceMappingURL=main.62cda424.chunk.js.map