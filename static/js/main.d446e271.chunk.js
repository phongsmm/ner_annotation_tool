(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{108:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},120:function(e,t,a){e.exports=a(150)},125:function(e,t,a){},150:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(38),c=a.n(s),r=(a(125),a(87)),i=a.n(r),l=a(107),p=a(62),u=a(63),d=a(24),m=a(76),h=a(82),g=a(108),b=a.n(g),v=(a(92),a(93),a(167)),f=a(151),E=a(170),k=a(171),y=a(165),O=a(166),x=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleOpen=function(){return n.setState({portalopen:!0,pick:{begin:0,end:0},text:"\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21"})},n.handleClose=function(){return n.setState({portalopen:!1})},n.state={pick:{begin:0,end:0},portalopen:!1,text:"\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21"},n.handle=n.handle.bind(Object(d.a)(n)),n.Updatestate=n.Updatestate.bind(Object(d.a)(n)),n.textareahandle=n.textareahandle.bind(Object(d.a)(n)),n.Updatebg=n.Updatebg.bind(Object(d.a)(n)),n.checktext=n.checktext.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componenWillUnmount",value:function(){}},{key:"componentDidUpdate",value:function(e){}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.prop!==e.posts}},{key:"handle",value:function(e){this.props.setState({txt:e.target.value})}},{key:"Updatestate",value:function(e,t){e.mentions.map((function(e){return console.log("".concat(e.text,":").concat(e.type," ( ").concat(e.location.begin,",").concat(e.location.end,")")),""}))}},{key:"textareahandle",value:function(){var e,t,a=window.getSelection(),n=a.getRangeAt(0);console.log(n.startOffset,n.endOffset,a.toString()),e=n.startOffset,t=n.endOffset,this.setState({pick:{begin:e,end:t},text:a.toString()})}},{key:"checktext",value:function(){return""===this.state.text?"":this.state.text}},{key:"Updatebg",value:function(e){var t=e.text,a=[],n=[],s=[],c=[];e.mentions.sort((function(e,t){return e.location.begin-t.location.begin})).map((function(e,a){return n.push(o.a.createElement("span",{key:"child : "+a,className:e.type},t.slice(e.location.begin,e.location.end))),s.push(e.location.begin),c.push(e.location.end),[]}));for(var r=0;r<=n.length;r++)0===r?(a.push(o.a.createElement("span",{key:"normal :"+r},t.slice(0,s[r]))),a.push(n[r])):(a.push(o.a.createElement("span",{key:"normal :"+r},t.slice(c[r-1],s[r]))),a.push(n[r]));return a}},{key:"render",value:function(){for(var e=this,t=[],a=this.props.currentpage*this.props.postperpage,n=a-this.props.postperpage,s=this.props.posts.slice(n,a),c=1;c<=Math.ceil(this.props.posts.length/this.props.postperpage);c++)t.push(c);var r=this.state.portalopen.portalopen;return o.a.createElement("div",null,s.map((function(t,a){return[o.a.createElement("div",{key:"a"+t.id},o.a.createElement("div",{className:"ui grid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"thirteen wide column"},o.a.createElement("div",{className:"ui card"},o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"description"}," ",o.a.createElement("p",null,e.Updatebg(t))," ")))),o.a.createElement("div",{className:"column"},o.a.createElement(v.a,{closeOnTriggerClick:!0,onOpen:e.handleOpen,onClose:e.handleClose,openOnTriggerClick:!0,trigger:o.a.createElement(f.a,{className:"ui primary button",key:"b"+t.id,onClick:function(){e.Updatestate(t,a)},content:"EDIT",negative:r,positive:!r})},o.a.createElement(E.a,{style:{left:"40%",position:"fixed",top:"50%",zIndex:1e3}},o.a.createElement(k.a,null,"\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e23\u0e2b\u0e31\u0e2a\u0e17\u0e35\u0e48 ",t.id),o.a.createElement("p",{onMouseUp:e.textareahandle},t.text),o.a.createElement("button",{className:"ui primary button"}," POST"),o.a.createElement(y.a,{placeholder:"\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21",value:e.state.text,style:{width:"45%",marginRight:"5px"}}),o.a.createElement("button",{className:"ui  button",disabled:!0},e.state.pick.begin),o.a.createElement("button",{className:"ui  button",disabled:!0},e.state.pick.end)))))))]})),o.a.createElement("div",{className:"mt-30 mb-20"},o.a.createElement(O.a,{ellipsisItem:null,activePage:this.props.currentpage,totalPages:t.length,onPageChange:this.props.Changepage})))}}]),a}(o.a.Component),N=a(89),j=a.n(N),w=a(60),C=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={txt:"",posts:[],currentpage:1,postperpage:10,datatotal:0,tags:{Person:0,Location:0,Organization:0,JobTitle:0,Facility:0,GeographicFeature:0,Product:0,Date:0,Time:0,Duration:0,Measure:0,Money:0,Ordinal:0,Number:0,Percent:0,Address:0,PhoneNumber:0,EmailAddress:0,URL:0,IPAddress:0,Hashtag:0,TwitterHandle:0}},n.Changepage=n.Changepage.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("http://localhost:8000/get/");case 2:return t=e.sent,this.setState({posts:t.data}),e.next=6,j.a.get("http://localhost:8000/list/");case 6:a=e.sent,this.setState({tags:{Person:a.data.Person}});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componenWillUnmount",value:function(){}},{key:"Changepage",value:function(e,t){this.setState({currentpage:t.activePage})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",null,o.a.createElement("div",{className:"ui attached tabular menu"},o.a.createElement("a",{href:"!#",className:"active item"},o.a.createElement("i",{"aria-hidden":"true",className:"users icon"}),"NER (annotation tool) "),o.a.createElement("a",{href:"!#",className:"item"},"Data",o.a.createElement("div",{className:"ui label"},this.state.posts.length)),o.a.createElement("button",{className:"ui button"},"Add ")),o.a.createElement("div",{className:"ui bottom attached segment active tab color-black"}," ",o.a.createElement(w.a,{color:"blue"},"Person : ",this.state.tags.Person," "))),o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"}),o.a.createElement(x,Object.assign({},this.state,{Changepage:this.Changepage}))))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.d446e271.chunk.js.map