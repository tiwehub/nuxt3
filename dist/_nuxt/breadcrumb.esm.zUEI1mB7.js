import{s as g}from"./index.esm.KNnwIu6Y.js";import{s as v}from"./basecomponent.esm.ITTx6yMy.js";import{R as B,Y as a,t as s,v as r,a3 as c,a2 as I,a4 as h,$ as l,y as O,i as b,x as P,J as f,a0 as w,a1 as N,z as y}from"./entry.4JUXFAXZ.js";import"./baseicon.esm.Ao9NWvyi.js";var R={root:"p-breadcrumb p-component",menu:"p-breadcrumb-list",home:"p-breadcrumb-home",separator:"p-menuitem-separator",menuitem:function(i){var t=i.instance;return["p-menuitem",{"p-disabled":t.disabled()}]},action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text"},S=B.extend({name:"breadcrumb",classes:R}),U={name:"BaseBreadcrumb",extends:v,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:S,provide:function(){return{$parentInstance:this}}},k={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:v,props:{item:null,templates:null,index:null},methods:{onClick:function(i){this.item.command&&this.item.command({originalEvent:i,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var i=this.item,t=i.to,m=i.url,o=typeof window<"u"?window.location.pathname:"";return t===o||m===o?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var i=this;return{action:a({class:this.cx("action"),"aria-current":this.isCurrentUrl(),onClick:function(m){return i.onClick(m)}},this.ptm("action",this.ptmOptions)),icon:a({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:a({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},M=["href","target","aria-current"];function V(e,i,t,m,o,n){return n.visible()?(s(),r("li",a({key:0,class:[e.cx("menuitem"),t.item.class]},e.ptm("menuitem",n.ptmOptions)),[t.templates.item?(s(),c(h(t.templates.item),{key:1,item:t.item,label:n.label(),props:n.getMenuItemProps},null,8,["item","label","props"])):(s(),r("a",a({key:0,href:t.item.url||"#",class:e.cx("action"),target:t.item.target,"aria-current":n.isCurrentUrl(),onClick:i[0]||(i[0]=function(){return n.onClick&&n.onClick.apply(n,arguments)})},e.ptm("action",n.ptmOptions)),[t.templates&&t.templates.itemicon?(s(),c(h(t.templates.itemicon),{key:0,item:t.item,class:I(e.cx("icon",n.ptmOptions))},null,8,["item","class"])):t.item.icon?(s(),r("span",a({key:1,class:[e.cx("icon"),t.item.icon]},e.ptm("icon",n.ptmOptions)),null,16)):l("",!0),t.item.label?(s(),r("span",a({key:2,class:e.cx("label")},e.ptm("label",n.ptmOptions)),O(n.label()),17)):l("",!0)],16,M))],16)):l("",!0)}k.render=V;var z={name:"Breadcrumb",extends:U,components:{BreadcrumbItem:k,ChevronRightIcon:g}};function D(e,i,t,m,o,n){var p=b("BreadcrumbItem"),C=b("ChevronRightIcon");return s(),r("nav",a({class:e.cx("root")},e.ptm("root")),[P("ol",a({class:e.cx("menu")},e.ptm("menu")),[e.home?(s(),c(p,a({key:0,item:e.home,class:e.cx("home"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("home")),null,16,["item","class","templates","pt","unstyled"])):l("",!0),(s(!0),r(f,null,w(e.model,function(d,u){return s(),r(f,{key:d.label+"_"+u},[e.home||u!==0?(s(),r("li",a({key:0,class:e.cx("separator")},e.ptm("separator")),[N(e.$slots,"separator",{},function(){return[y(C,a({"aria-hidden":"true"},e.ptm("separatorIcon")),null,16)]})],16)):l("",!0),y(p,{item:d,index:u,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}z.render=D;export{z as default};
