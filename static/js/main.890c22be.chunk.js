(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{126:function(e,t,a){},141:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},156:function(e,t,a){e.exports=a(186)},161:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(54),l=a.n(r),o=(a(161),a(60)),i=a.n(o),c=a(118),u=a(87),p=a(88),d=a(17),h=a(109),m=a(114),g=a(141),b=a.n(g),k=(a(126),a(127),a(37)),v=a.n(k),y=a(205),f=a(187),E=a(207),x=a(208),P=a(209),N=a(201),O=a(203),S=a(212),T=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleOpen=function(){return n.setState({portalopen:!0,pick:{begin:0,end:0},text:"\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21"})},n.state={pick:{begin:0,end:0},portalopen:!1,text:"\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21",seltag:"Location",error:{status:!1,msg:""},reload:!1},n.handle=n.handle.bind(Object(d.a)(n)),n.textareahandle=n.textareahandle.bind(Object(d.a)(n)),n.Updatebg=n.Updatebg.bind(Object(d.a)(n)),n.checktext=n.checktext.bind(Object(d.a)(n)),n.tag_select=n.tag_select.bind(Object(d.a)(n)),n.doPut=n.doPut.bind(Object(d.a)(n)),n.confirm=n.confirm.bind(Object(d.a)(n)),n.handleClose=n.handleClose.bind(Object(d.a)(n)),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){null!=document.getElementById("checkmark")&&(document.getElementById("checkmark").style.display="none");e.setState({error:{msg:""}})}),4e3)}},{key:"componenWillUnmount",value:function(){}},{key:"componentDidUpdate",value:function(e){}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.prop!==e.posts}},{key:"handle",value:function(e){this.props.setState({txt:e.target.value})}},{key:"confirm",value:function(e){this.setState({error:{status:!1,msg:""}})}},{key:"reload",value:function(){window.location.reload()}},{key:"handleClose",value:function(){this.setState({portalopen:!1}),this.state.reload&&this.reload()}},{key:"doPut",value:function(e){var t=0,a=[],n=!1;(0===this.state.pick.begin&&0===this.state.pick.end||this.state.pick.begin===this.state.pick.end)&&(t+=1,this.setState({error:{status:!0,msg:"Please Select Text"}})),e.mentions.map((function(e){return a.push("".concat(e.location.begin,",").concat(e.location.end)),[]}));for(var s="".concat(this.state.pick.begin,",").concat(this.state.pick.end),r=0;r<=a.length;r++)a[r]===s&&(n=!0);0===t&&!0===n?(this.checkmark(),v.a.put("".concat(this.props.Url_settype).concat(e.id,"/").concat(this.state.pick.begin,"/").concat(this.state.pick.end,"/").concat(this.state.seltag)),this.setState({reload:!0})):this.setState({error:{status:!0,msg:"Tags Not Found"}})}},{key:"doPost",value:function(e){var t=this,a=0;if((0===this.state.pick.begin&&0===this.state.pick.end||this.state.pick.begin===this.state.pick.end)&&(a+=1,this.setState({error:{status:!0,msg:"Please Select Text"}})),e.mentions.map((function(e){return e.location.begin===t.state.pick.begin&&e.location.end===t.state.pick.end&&(a+=1,t.setState({error:{status:!0,msg:"This Tag already exists!"}})),[]})),0===a){var n=e;n.mentions.push({location:{begin:this.state.pick.begin,end:this.state.pick.end},text:this.state.text,type:this.state.seltag}),v.a.put("".concat(this.props.Url_update).concat(e.id),n),this.checkmark()}}},{key:"doDelete",value:function(e){var t=0,a=[],n=!1;(0===this.state.pick.begin&&0===this.state.pick.end||this.state.pick.begin===this.state.pick.end)&&(t+=1,this.setState({error:{status:!0,msg:"Please Select Text"}})),e.mentions.map((function(e){return a.push("".concat(e.location.begin,",").concat(e.location.end)),[]}));for(var s="".concat(this.state.pick.begin,",").concat(this.state.pick.end),r=0;r<=a.length;r++)a[r]===s&&(n=!0);0===t&&!0===n?(this.checkmark(),v.a.delete("".concat(this.props.Url_unset).concat(e.id,"/").concat(this.state.pick.begin,"/").concat(this.state.pick.end)),this.setState({reload:!0})):this.setState({error:{status:!0,msg:"Tags Not Found"}})}},{key:"checkmark",value:function(){try{document.getElementById("checkmark").style.display="block"}catch(e){console.log(e)}}},{key:"textareahandle",value:function(){var e,t,a=window.getSelection(),n=a.getRangeAt(0);console.log(n.startOffset,n.endOffset,a.toString()),e=n.startOffset,t=n.endOffset,this.setState({pick:{begin:e,end:t},text:a.toString()})}},{key:"tag_select",value:function(e){this.setState({seltag:e.value})}},{key:"checktext",value:function(){return""===this.state.text?"":this.state.text}},{key:"Updatebg",value:function(e){var t=e.text,a=[],n=[],r=[],l=[];e.mentions.sort((function(e,t){return e.location.begin-t.location.begin})).map((function(e,a){return n.push(s.a.createElement("span",{key:"child : "+a,className:e.type},t.slice(e.location.begin,e.location.end))),r.push(e.location.begin),l.push(e.location.end),[]}));for(var o=0;o<=n.length;o++)0===o?(a.push(s.a.createElement("span",{key:"normal :"+o},t.slice(0,r[o]))),a.push(n[o])):(a.push(s.a.createElement("span",{key:"normal :"+o},t.slice(l[o-1],r[o]))),a.push(n[o]));return a}},{key:"render",value:function(){for(var e=this,t=[],a=this.props.currentpage*this.props.postperpage,n=a-this.props.postperpage,r=this.props.posts.slice(n,a),l=1;l<=Math.ceil(this.props.posts.length/this.props.postperpage);l++)t.push(l);var o=this.state.portalopen.portalopen,i=[{key:"A",value:"Address",text:"Address"},{key:"Da",value:"Date",text:"Date"},{key:"Du",value:"Duration",text:"Duration"},{key:"E",value:"EmailAddress",text:"EmailAddress"},{key:"F",value:"Facility",text:"Facility"},{key:"G",value:"GeographicFeature",text:"GeographicFeature"},{key:"H",value:"Hashtag",text:"Hashtag"},{key:"J",value:"JobTitle",text:"JobTitle"},{key:"L",value:"Location",text:"Location"},{key:"I",value:"IPAddress",text:"IPAddress"},{key:"Me",value:"Measure",text:"Measure"},{key:"Mo",value:"Money",text:"Money"},{key:"N",value:"Number",text:"Number"},{key:"Ord",value:"Ordinal",text:"Ordinal"},{key:"Org",value:"Organization",text:"Organization"},{key:"Pers",value:"Person",text:"Person"},{key:"Perc",value:"Percent",text:"Percent"},{key:"Pro",value:"Product",text:"Product"},{key:"Pho",value:"PhoneNumber",text:"PhoneNumber"},{key:"Tw",value:"TwitterHandle",text:"TwitterHandle"},{key:"Ti",value:"Time",text:"Time"},{key:"URL",value:"URL",text:"URL"}];return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"breakline"}),r.map((function(t,a){return[s.a.createElement("div",{className:"box",key:"x"+t.id},s.a.createElement("div",{className:"ui card",key:"a"+t.id},s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"description"}," ",s.a.createElement("p",null,e.Updatebg(t))))),s.a.createElement("div",{style:{position:"relative",buttom:"60px",left:"200px",top:"-100px"}},s.a.createElement(y.a,{onOpen:e.handleOpen,onClose:e.handleClose,openOnTriggerClick:!0,trigger:s.a.createElement(f.a,{key:"b"+t.id,content:"EDIT",negative:o,positive:!o})},s.a.createElement(E.a,{style:{left:"30%",position:"fixed",top:"20%",zIndex:1e3,width:"40%",minHeight:"230px"}},s.a.createElement(x.a,null,"\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e23\u0e2b\u0e31\u0e2a\u0e17\u0e35\u0e48 ",t.id),s.a.createElement(P.a,{columns:2,divided:!0,style:{marginRight:"5px",marginLeft:"5px"}},s.a.createElement(P.a.Row,null,s.a.createElement(E.a,{style:{width:"90%"}},"  ",s.a.createElement("p",{onMouseUp:e.textareahandle},t.text),"   "),s.a.createElement("i",{id:"checkmark",className:"check circle outline icon",style:{color:"green",fontSize:"150%",marginTop:"3%",marginLeft:"2%",display:"none"}}),s.a.createElement("p",{style:{color:"red",marginLeft:"5%"}},e.state.error.msg)),s.a.createElement(P.a.Row,null,s.a.createElement(P.a.Column,null,s.a.createElement(N.a,{placeholder:"\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21",value:e.state.text,style:{width:"100%"}})),s.a.createElement(P.a.Column,null,s.a.createElement(f.a,{disabled:!0},e.state.pick.begin),s.a.createElement(f.a,{disabled:!0},e.state.pick.end))),s.a.createElement(P.a.Row,null," ",s.a.createElement(O.a,{placeholder:"State",fluid:!0,search:!0,selection:!0,options:i,style:{MarginTop:"10%"},onChange:function(t,a){return e.tag_select(a)}})),s.a.createElement(P.a.Row,null,s.a.createElement(f.a,{className:"ui primary button",onClick:function(){return e.doPost(t)}}," POST"),s.a.createElement(f.a,{className:"ui yellow button",onClick:function(){return e.doPut(t)}}," PUT"),s.a.createElement(f.a,{className:"ui red button",onClick:function(){return e.doDelete(t)}}," DELETE")))))))]})),s.a.createElement(S.a,{ellipsisItem:null,activePage:this.props.currentpage,totalPages:t.length,onPageChange:this.props.Changepage}))}}]),a}(s.a.Component),w=a(210),L=a(204),I=a(202),D=a(85),C=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleOpen=function(){return n.setState({portalopen:!0})},n.state={txt:"",posts:[],currentpage:1,postperpage:5,datatotal:0,portalopen:!1,reload:!1,textarea:"",input:0,success:"",error:{status:!1,msg:""},tags:{Person:0,Location:0,Organization:0,JobTitle:0,Facility:0,GeographicFeature:0,Product:0,Date:0,Time:0,Duration:0,Measure:0,Money:0,Ordinal:0,Number:0,Percent:0,Address:0,PhoneNumber:0,EmailAddress:0,URL:0,IPAddress:0,Hashtag:0,TwitterHandle:0},Url_get:"https://fastapi-nlp.herokuapp.com/get/",Url_add:"https://fastapi-nlp.herokuapp.com/add/",Url_list:"https://fastapi-nlp.herokuapp.com/list/",Url_update:"https://fastapi-nlp.herokuapp.com/update/",Url_unset:"https://fastapi-nlp.herokuapp.com/unset/",Url_delete:"https://fastapi-nlp.herokuapp.com/delete/",Url_settype:"https://fastapi-nlp.herokuapp.com/settype/"},n.Changepage=n.Changepage.bind(Object(d.a)(n)),n.handleClose=n.handleClose.bind(Object(d.a)(n)),n.doPost=n.doPost.bind(Object(d.a)(n)),n.doDelete=n.doDelete.bind(Object(d.a)(n)),n.handletextarea=n.handletextarea.bind(Object(d.a)(n)),n.handleInput=n.handleInput.bind(Object(d.a)(n)),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(i.a.mark((function e(){var t,a,n=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(this.state.Url_get);case 2:return t=e.sent,this.setState({posts:t.data}),e.next=6,v.a.get(this.state.Url_list);case 6:a=e.sent,this.setState({tags:{Person:a.data.Person,Location:a.data.Location,Organization:a.data.Organization,JobTitle:a.data.JobTitle,Facility:a.data.Facility,GeographicFeature:a.data.GeographicFeature,Product:a.data.Product,Date:a.data.Date,Time:a.data.Time,Duration:a.data.Duration,Measure:a.data.Measure,Money:a.data.Money,Ordinal:a.data.Ordinal,Number:a.data.Number,Percent:a.data.Percent,Address:a.data.Address,PhoneNumber:a.data.PhoneNumber,EmailAddress:a.data.EmailAddress,URL:a.data.URL,IPAddress:a.data.IPAddress,Hashtag:a.data.Hashtag,TwitterHandle:a.data.TwitterHandle}}),setInterval((function(){n.setState({error:{msg:""},success:""})}),4e3);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componenWillUnmount",value:function(){}},{key:"Changepage",value:function(e,t){this.setState({currentpage:t.activePage})}},{key:"doPost",value:function(){var e=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.state.textarea.length<2)){e.next=4;break}this.setState({error:{status:!0,msg:"Please Input a Sentence"}}),e.next=18;break;case 4:if(!(this.state.input.length<1)&&Number.isInteger(parseInt(this.state.input))){e.next=8;break}this.setState({error:{status:!0,msg:"Please Input a ID"}}),e.next=18;break;case 8:return e.prev=8,e.next=11,v.a.post("".concat(this.state.Url_add),{id:this.state.input,text:this.state.textarea,mentions:[]});case 11:t=e.sent,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(8),console.log(e.t0);case 17:"ID Exists"===t.data.Alert?this.setState({error:{status:!0,msg:"ID already exists"}}):this.setState({success:"Success insert ID: ".concat(this.state.input),reload:!0});case 18:case"end":return e.stop()}}),e,this,[[8,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"doDelete",value:function(){var e=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.state.input.length<1)&&Number.isInteger(parseInt(this.state.input))){e.next=4;break}this.setState({error:{status:!0,msg:"Please Input a ID"}}),e.next=14;break;case 4:return e.prev=4,e.next=7,v.a.delete("".concat(this.state.Url_delete).concat(this.state.input));case 7:t=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),console.log(e.t0);case 13:"ID NOT FOUND!"===t.data.Alert?this.setState({error:{status:!0,msg:"ID NOT FOUND!"}}):this.setState({success:"Success remove ID: ".concat(this.state.input),reload:!0});case 14:case"end":return e.stop()}}),e,this,[[4,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"reload",value:function(){window.location.reload()}},{key:"handleClose",value:function(){this.setState({portalopen:!1}),this.state.reload&&this.reload()}},{key:"handletextarea",value:function(e,t){this.setState({textarea:t.value})}},{key:"handleInput",value:function(e,t){this.setState({input:t.value})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",null,s.a.createElement(w.a,{size:"small"},s.a.createElement("img",{alt:"",src:b.a,className:"App-logo",style:{width:"50px",height:"40px",position:"relative"}}),s.a.createElement(w.a.Item,{name:"Ner-Annotation tool",active:!1,onClick:function(){}}),s.a.createElement(w.a.Item,{name:"Total : ",active:!1,onClick:function(){}}),s.a.createElement(w.a.Item,{name:"[ ".concat(this.state.posts.length," ]"),active:!1,onClick:function(){}}),s.a.createElement(y.a,{onOpen:this.handleOpen,onClose:this.handleClose,openOnTriggerClick:!0,trigger:s.a.createElement("button",{style:{backgroundColor:"#58d629",borderStyle:"none",color:"white",fontWeight:"bold",fontSize:"15px"}}," MANAGE ")},s.a.createElement(E.a,{style:{left:"30%",position:"fixed",top:"20%",zIndex:1e3,width:"40%",minHeight:"250px"}},s.a.createElement(x.a,null,"NER MANAGE"),s.a.createElement(P.a,null,s.a.createElement(P.a.Column,null,s.a.createElement(P.a.Row,null,s.a.createElement(L.a,null,s.a.createElement(I.a,{placeholder:"\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21",style:{maxHeight:250},onChange:this.handletextarea})),s.a.createElement("p",{style:{color:"red"}}," ",this.state.error.msg," "),s.a.createElement("p",{style:{color:"green"}}," ",this.state.success)),s.a.createElement(P.a.Row,{style:{marginTop:"5px"}},s.a.createElement(N.a,{label:{basic:!0,content:"ID"},labelPosition:"right",placeholder:"Enter ID",onChange:this.handleInput})),s.a.createElement(P.a.Row,{style:{marginTop:"5px"}},s.a.createElement(f.a,{positive:!0,onClick:this.doPost},"POST"),s.a.createElement(f.a,{negative:!0,onClick:this.doDelete},"Delete")))))),s.a.createElement("button",{style:{backgroundColor:"#35b6e7",borderStyle:"none",color:"white",fontWeight:"bold",fontSize:"15px"}}," DATA ")),s.a.createElement(P.a,{style:{marginTop:"2px",marginLeft:"2px",marginRight:"2px"},centered:!0},s.a.createElement(P.a.Row,null,s.a.createElement(D.a,{color:"blue",className:"Label"},"Person : ",this.state.tags.Person," "),s.a.createElement(D.a,{color:"blue",className:"Label"},"Location : ",this.state.tags.Location," "),s.a.createElement(D.a,{color:"blue",className:"Label"},"Organization : ",this.state.tags.Organization," "),s.a.createElement(D.a,{color:"blue",className:"Label"},"JobTitle : ",this.state.tags.JobTitle," "),s.a.createElement(D.a,{color:"blue",className:"Label"},"Facility : ",this.state.tags.Facility," "),s.a.createElement(D.a,{color:"blue",className:"Label"},"GeographicFeature : ",this.state.tags.GeographicFeature," "),s.a.createElement(D.a,{color:"blue",className:"Label"},"Product : ",this.state.tags.Product," "),s.a.createElement(D.a,{color:"blue",className:"Label"},"Date : ",this.state.tags.Date," "),s.a.createElement(D.a,{color:"blue",className:"Label"},"Time : ",this.state.tags.Time," "),s.a.createElement(D.a,{color:"blue",className:"Label"},"Duration : ",this.state.tags.Duration," "),s.a.createElement(D.a,{color:"blue",className:"Label"},"Measure : ",this.state.tags.Measure," ")),s.a.createElement(P.a.Row,null,s.a.createElement(D.a,{color:"blue",className:"Label"},"Money : ",this.state.tags.Money," "),s.a.createElement(D.a,{color:"blue",className:"Label"},"Ordinal : ",this.state.tags.Ordinal," "),s.a.createElement(D.a,{color:"blue",className:"Label"},"Number : ",this.state.tags.Number," "),s.a.createElement(D.a,{color:"blue",className:"Label"},"Percent : ",this.state.tags.Percent," "),s.a.createElement(D.a,{color:"blue",className:"Label"},"Address : ",this.state.tags.Address," "),s.a.createElement(D.a,{color:"blue",className:"Label"},"PhoneNumber : ",this.state.tags.PhoneNumber," "),s.a.createElement(D.a,{color:"blue",className:"Label"},"EmailAddress : ",this.state.tags.EmailAddress," "),s.a.createElement(D.a,{color:"blue",className:"Label"},"URL : ",this.state.tags.URL," "),s.a.createElement(D.a,{color:"blue",className:"Label"},"IPAddress : ",this.state.tags.IPAddress," "),s.a.createElement(D.a,{color:"blue",className:"Label"},"Hashtag : ",this.state.tags.Hashtag," "),s.a.createElement(D.a,{color:"blue",className:"Label"},"TwitterHandle : ",this.state.tags.TwitterHandle," ")))),s.a.createElement(T,Object.assign({},this.state,{Changepage:this.Changepage})))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[156,1,2]]]);
//# sourceMappingURL=main.890c22be.chunk.js.map