import{s as p}from"./index.esm.N4O8niOc.js";import{s as c,a as l}from"./index.esm.u3v-9EWM.js";import{s as m}from"./index.esm.KeL-Y3Ss.js";import{s as u}from"./basecomponent.esm.ITTx6yMy.js";import{R as d,t as i,v as f,a1 as o,x as v,Y as t,a3 as $,a4 as g,B as y}from"./entry.4JUXFAXZ.js";import"./baseicon.esm.Ao9NWvyi.js";var h={root:function(s){var n=s.props,r=s.instance;return["p-inline-message p-component p-inline-message-"+n.severity,{"p-inline-message-icon-only":!r.$slots.default}]},icon:function(s){var n=s.props;return["p-inline-message-icon",n.icon]},text:"p-inline-message-text"},B=d.extend({name:"inlinemessage",classes:h}),x={name:"BaseInlineMessage",extends:u,props:{severity:{type:String,default:"error"},icon:{type:String,default:void 0}},style:B,provide:function(){return{$parentInstance:this}}},S={name:"InlineMessage",extends:x,timeout:null,data:function(){return{visible:!0}},mounted:function(){var s=this;this.sticky||setTimeout(function(){s.visible=!1},this.life)},computed:{iconComponent:function(){return{info:c,success:p,warn:l,error:m}[this.severity]}}};function k(e,s,n,r,C,a){return i(),f("div",t({role:"alert","aria-live":"assertive","aria-atomic":"true",class:e.cx("root")},e.ptm("root")),[o(e.$slots,"icon",{},function(){return[(i(),$(g(e.icon?"span":a.iconComponent),t({class:e.cx("icon")},e.ptm("icon")),null,16,["class"]))]}),v("span",t({class:e.cx("text")},e.ptm("text")),[o(e.$slots,"default",{},function(){return[y(" ")]})],16)],16)}S.render=k;export{S as default};