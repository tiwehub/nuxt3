import{O as F}from"./overlayeventbus.esm.-SEeY5fp.js";import{s as H}from"./portal.esm.OpERwJoa.js";import{R as V,U as x,Z as O,T as l,V as R,S as j,Y as u,W as B,X as M,t as r,v as d,x as L,a7 as N,a3 as h,a2 as U,a4 as w,$ as f,y as T,i as S,A as C,z as Z,a5 as W,a1 as I,J as m,a0 as P,B as q}from"./entry.4JUXFAXZ.js";import{s as D}from"./basecomponent.esm.ITTx6yMy.js";var J={root:function(e){var i=e.instance,s=e.props;return["p-menu p-component",{"p-menu-overlay":s.popup,"p-ripple-disabled":i.$primevue.config.ripple===!1}]},start:"p-menu-start",menu:"p-menu-list p-reset",submenuHeader:"p-submenu-header",separator:"p-menuitem-separator",end:"p-menu-end",menuitem:function(e){var i=e.instance;return["p-menuitem",{"p-focus":i.id===i.focusedOptionId,"p-disabled":i.disabled()}]},content:"p-menuitem-content",action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text"},X=V.extend({name:"menu",classes:J}),Y={name:"BaseMenu",extends:D,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:X,provide:function(){return{$parentInstance:this}}},z={name:"Menuitem",hostName:"Menu",extends:D,inheritAttrs:!1,emits:["item-click"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,i){return e&&e.item?j.getItemValue(e.item[i]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var i=this.getItemProp(this.item,"command");i&&i({originalEvent:e,item:this.item.item}),this.$emit("item-click",{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:u({class:this.cx("action"),tabindex:"-1","aria-hidden":!0},this.getPTOptions("action")),icon:u({class:[this.cx("icon"),e.icon]},this.getPTOptions("icon")),label:u({class:this.cx("label")},this.getPTOptions("label"))}}},directives:{ripple:B}},G=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],Q=["href","target"];function _(t,e,i,s,a,n){var y=M("ripple");return n.visible()?(r(),d("li",u({key:0,id:i.id,class:[t.cx("menuitem"),i.item.class],role:"menuitem",style:i.item.style,"aria-label":n.label(),"aria-disabled":n.disabled()},n.getPTOptions("menuitem"),{"data-p-focused":n.isItemFocused(),"data-p-disabled":n.disabled()||!1}),[L("div",u({class:t.cx("content"),onClick:e[0]||(e[0]=function(v){return n.onItemClick(v)})},n.getPTOptions("content")),[i.templates.item?i.templates.item?(r(),h(w(i.templates.item),{key:1,item:i.item,label:n.label(),props:n.getMenuItemProps(i.item)},null,8,["item","label","props"])):f("",!0):N((r(),d("a",u({key:0,href:i.item.url,class:t.cx("action"),target:i.item.target,tabindex:"-1","aria-hidden":"true"},n.getPTOptions("action")),[i.templates.itemicon?(r(),h(w(i.templates.itemicon),{key:0,item:i.item,class:U([t.cx("icon"),i.item.icon])},null,8,["item","class"])):i.item.icon?(r(),d("span",u({key:1,class:[t.cx("icon"),i.item.icon]},n.getPTOptions("icon")),null,16)):f("",!0),L("span",u({class:t.cx("label")},n.getPTOptions("label")),T(n.label()),17)],16,Q)),[[y]])],16)],16,G)):f("",!0)}z.render=_;function E(t){return ie(t)||te(t)||ee(t)||$()}function $(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(t,e){if(t){if(typeof t=="string")return k(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return k(t,e)}}function te(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ie(t){if(Array.isArray(t))return k(t)}function k(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}var ne={name:"Menu",extends:Y,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(e){this.id=e||x()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||x(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&O.clear(this.container),this.container=null},methods:{itemClick:function(e){var i=e.item;this.disabled(i)||(i.command&&i.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},onListFocus:function(e){this.focused=!0,this.popup||(this.selectedOptionIndex!==-1?(this.changeFocusedOptionIndex(this.selectedOptionIndex),this.selectedOptionIndex=-1):this.changeFocusedOptionIndex(0)),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.popup&&(l.focus(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var i=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(i),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)l.focus(this.target),this.hide(),e.preventDefault();else{var i=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(i),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(l.find(this.container,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),e.preventDefault()},onEnterKey:function(e){var i=l.findSingle(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),s=i&&l.findSingle(i,'a[data-pc-section="action"]');this.popup&&l.focus(this.target),s?s.click():i&&i.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var i=l.find(this.container,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),s=E(i).findIndex(function(a){return a.id===e});return s>-1?s+1:0},findPrevOptionIndex:function(e){var i=l.find(this.container,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),s=E(i).findIndex(function(a){return a.id===e});return s>-1?s-1:0},changeFocusedOptionIndex:function(e){var i=l.find(this.container,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),s=e>=i.length?i.length-1:e<0?0:e;s>-1&&(this.focusedOptionIndex=i[s].getAttribute("id"))},toggle:function(e){this.overlayVisible?this.hide():this.show(e)},show:function(e){this.overlayVisible=!0,this.target=e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){l.addStyles(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&O.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&(l.focus(this.list),this.changeFocusedOptionIndex(0)),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&O.clear(e)},alignOverlay:function(){l.absolutePosition(this.container,this.target);var e=l.getOuterWidth(this.target);e>l.getOuterWidth(this.container)&&(this.container.style.minWidth=l.getOuterWidth(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(i){var s=e.container&&!e.container.contains(i.target),a=!(e.target&&(e.target===i.target||e.target.contains(i.target)));e.overlayVisible&&s&&a?e.hide():!e.popup&&s&&a&&(e.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new R(this.target,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!l.isTouchDevice()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},onOverlayClick:function(e){F.emit("overlay-click",{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:z,Portal:H}};function b(t){"@babel/helpers - typeof";return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(t)}function A(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),i.push.apply(i,s)}return i}function K(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?A(Object(i),!0).forEach(function(s){se(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):A(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function se(t,e,i){return e=re(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function re(t){var e=ae(t,"string");return b(e)=="symbol"?e:String(e)}function ae(t,e){if(b(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,e||"default");if(b(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var oe=["id"],le=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],ue=["id"];function de(t,e,i,s,a,n){var y=S("PVMenuitem"),v=S("Portal");return r(),h(v,{appendTo:t.appendTo,disabled:!t.popup},{default:C(function(){return[Z(W,u({name:"p-connected-overlay",onEnter:n.onEnter,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave},t.ptm("transition")),{default:C(function(){return[!t.popup||a.overlayVisible?(r(),d("div",u({key:0,ref:n.containerRef,id:a.id,class:t.cx("root"),onClick:e[3]||(e[3]=function(){return n.onOverlayClick&&n.onOverlayClick.apply(n,arguments)})},K(K({},t.$attrs),t.ptm("root"))),[t.$slots.start?(r(),d("div",u({key:0,class:t.cx("start")},t.ptm("start")),[I(t.$slots,"start")],16)):f("",!0),L("ul",u({ref:n.listRef,id:a.id+"_list",class:t.cx("menu"),role:"menu",tabindex:t.tabindex,"aria-activedescendant":a.focused?n.focusedOptionId:void 0,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return n.onListFocus&&n.onListFocus.apply(n,arguments)}),onBlur:e[1]||(e[1]=function(){return n.onListBlur&&n.onListBlur.apply(n,arguments)}),onKeydown:e[2]||(e[2]=function(){return n.onListKeyDown&&n.onListKeyDown.apply(n,arguments)})},t.ptm("menu")),[(r(!0),d(m,null,P(t.model,function(o,c){return r(),d(m,{key:n.label(o)+c.toString()},[o.items&&n.visible(o)&&!o.separator?(r(),d(m,{key:0},[o.items?(r(),d("li",u({key:0,id:a.id+"_"+c,class:[t.cx("submenuHeader"),o.class],role:"none"},t.ptm("submenuHeader")),[I(t.$slots,"submenuheader",{item:o},function(){return[q(T(n.label(o)),1)]})],16,ue)):f("",!0),(r(!0),d(m,null,P(o.items,function(p,g){return r(),d(m,{key:p.label+c+"_"+g},[n.visible(p)&&!p.separator?(r(),h(y,{key:0,id:a.id+"_"+c+"_"+g,item:p,templates:t.$slots,focusedOptionId:n.focusedOptionId,onItemClick:n.itemClick,pt:t.pt},null,8,["id","item","templates","focusedOptionId","onItemClick","pt"])):n.visible(p)&&p.separator?(r(),d("li",u({key:"separator"+c+g,class:[t.cx("separator"),o.class],style:p.style,role:"separator"},t.ptm("separator")),null,16)):f("",!0)],64)}),128))],64)):n.visible(o)&&o.separator?(r(),d("li",u({key:"separator"+c.toString(),class:[t.cx("separator"),o.class],style:o.style,role:"separator"},t.ptm("separator")),null,16)):(r(),h(y,{key:n.label(o)+c.toString(),id:a.id+"_"+c,item:o,index:c,templates:t.$slots,focusedOptionId:n.focusedOptionId,onItemClick:n.itemClick,pt:t.pt},null,8,["id","item","index","templates","focusedOptionId","onItemClick","pt"]))],64)}),128))],16,le),t.$slots.end?(r(),d("div",u({key:1,class:t.cx("end")},t.ptm("end")),[I(t.$slots,"end")],16)):f("",!0)],16,oe)):f("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}ne.render=de;export{ne as default};
