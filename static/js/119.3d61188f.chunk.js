"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[119],{8119:function(e,s,n){n.r(s),n.d(s,{default:function(){return f}});var a=n(8687),r=n(4484),i=(n(2791),{dialog:"Messages_dialog__KgQZ7",active:"Messages_active__BYTj8",linkedText:"Messages_linkedText__FGkvY",dialogs:"Messages_dialogs__Ix-N8",dialogsItems:"Messages_dialogsItems__S2ey1",message:"Messages_message__-emGv",messages:"Messages_messages__vdkTO",leftSide:"Messages_leftSide__EMHzp",text:"Messages_text__yyUM6",rightSide:"Messages_rightSide__jpdjW",textBox:"Messages_textBox__2WUaG"}),t=n(1241),c=n(184),d=function(e){return(0,c.jsxs)("div",{className:i.dialog,children:[(0,c.jsx)(t.Z,{to:"/messages/"+e.id,activeClassName:i.active,className:i.linkedImage,children:(0,c.jsx)("img",{src:e.img,alt:"Id: ".concat(e.id)})}),(0,c.jsx)(t.Z,{to:"/messages/"+e.id,activeClassName:i.active,className:i.linkedText,children:e.name})]})},o=function(e){return 0===e.id?(0,c.jsxs)("div",{className:"".concat(i.message," ").concat(i.rightSide),children:[(0,c.jsx)("div",{}),(0,c.jsx)("b",{className:i.text,children:e.message}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{})]}):(0,c.jsxs)("div",{className:"".concat(i.message," ").concat(i.leftSide),children:[(0,c.jsx)("div",{}),(0,c.jsx)("b",{className:i.text,children:e.message})]})},l=n(6139),m=n(704),u=n(5304),g=n(7492),x=(0,m.Z)({form:"AddMessageForm"})((function(e){return(0,c.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,c.jsx)("div",{children:(0,c.jsx)(l.Z,{validate:[(0,u.D)(100),u.C],component:g.Kx,name:"newMessageBody",placeholder:"Enter your message"})}),(0,c.jsx)("div",{children:(0,c.jsx)("button",{children:"send"})})]})})),_=function(e){var s=e.messagesPage.dialogs.map((function(e){return(0,c.jsx)(d,{name:e.name,id:e.id,img:e.img})})),n=e.messagesPage.messages.map((function(e){return(0,c.jsx)(o,{message:e.message,id:e.id})}));return(0,c.jsxs)("div",{className:i.dialogs,children:[(0,c.jsx)("div",{className:i.dialogsItems,children:s}),(0,c.jsxs)("div",{className:i.messages,children:[(0,c.jsx)("div",{children:n}),(0,c.jsx)("div",{className:i.textBox,children:(0,c.jsx)(x,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})})]})]})},f=(0,n(7781).qC)((0,a.$j)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{sendMessage:function(s){e((0,r.$h)(s))},changeSendMessage:function(s){e((0,r.dQ)(s))}}})))(_)},7492:function(e,s,n){n.d(s,{Gr:function(){return g},II:function(){return m},Kx:function(){return u}});var a=n(8683),r=n(5987),i=(n(2791),n(7344)),t=n(6139),c=n(184),d=["input","meta","child"],o=["input","meta","child"],l=function(e){var s=e.meta,n=e.children,a=s.error&&s.touched;return(0,c.jsxs)("div",{className:i.Z.formControl+" "+(a?i.Z.error:""),children:[(0,c.jsx)("div",{children:n}),a?(0,c.jsx)("span",{children:s.error}):null]})},m=function(e){var s=e.input,n=(e.meta,e.child,(0,r.Z)(e,d));return(0,c.jsx)(l,(0,a.Z)((0,a.Z)({},e),{},{children:(0,c.jsx)("input",(0,a.Z)((0,a.Z)({},s),n))}))},u=function(e){var s=e.input,n=(e.meta,e.child,(0,r.Z)(e,o));return(0,c.jsxs)(l,(0,a.Z)((0,a.Z)({},e),{},{children:[" ",(0,c.jsx)("textarea",(0,a.Z)((0,a.Z)({},s),n))]}))},g=function(e,s,n,r,i,d){return(0,c.jsxs)("div",{children:[(0,c.jsx)(t.Z,(0,a.Z)({validate:e,placeholder:s,name:n,component:r},i))," ",d]})}},5304:function(e,s,n){n.d(s,{C:function(){return a},D:function(){return r}});var a=function(e){if(!e)return"Field is required"},r=function(e){return function(s){if(s&&s.length>e)return"Max length is ".concat(e," symbols")}}},7344:function(e,s){s.Z={formControl:"FormsControls_formControl__IUy0G",error:"FormsControls_error__jIoDy",formSummaryError:"FormsControls_formSummaryError__BjeyB"}}}]);
//# sourceMappingURL=119.3d61188f.chunk.js.map