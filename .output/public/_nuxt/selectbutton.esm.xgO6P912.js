import{R as g,T as f,S as d,W as v,X as S,t as h,v as p,J as O,a0 as x,Y as b,a7 as w,a1 as D,x as I,y as T,a2 as V}from"./entry.4JUXFAXZ.js";import{s as A}from"./basecomponent.esm.ITTx6yMy.js";var B={root:function(t){var n=t.props;return["p-selectbutton p-buttonset p-component",{"p-disabled":n.disabled,"p-invalid":n.invalid}]},button:function(t){var n=t.instance,a=t.option;return["p-button p-component",{"p-highlight":n.isSelected(a),"p-disabled":n.isOptionDisabled(a)}]},label:"p-button-label"},K=g.extend({name:"selectbutton",classes:B}),k={name:"BaseSelectButton",extends:A,props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,unselectable:{type:Boolean,default:!0},allowEmpty:{type:Boolean,default:!0},invalid:{type:Boolean,default:!1},disabled:Boolean,dataKey:null,ariaLabelledby:{type:String,default:null}},style:K,provide:function(){return{$parentInstance:this}}};function L(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=m(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var a=0,l=function(){};return{s:l,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(u){throw u},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r=!0,s=!1,i;return{s:function(){n=n.call(e)},n:function(){var u=n.next();return r=u.done,u},e:function(u){s=!0,i=u},f:function(){try{!r&&n.return!=null&&n.return()}finally{if(s)throw i}}}}function F(e){return E(e)||C(e)||m(e)||q()}function q(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(e,t){if(e){if(typeof e=="string")return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}}function C(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function E(e){if(Array.isArray(e))return y(e)}function y(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var $={name:"SelectButton",extends:k,emits:["update:modelValue","focus","blur","change"],data:function(){return{focusedIndex:0}},mounted:function(){this.defaultTabIndexes()},methods:{defaultTabIndexes:function(){for(var t=f.find(this.$refs.container,'[data-pc-section="button"]'),n=f.findSingle(this.$refs.container,'[data-p-highlight="true"]'),a=0;a<t.length;a++)(f.getAttribute(t[a],"data-p-highlight")===!0&&d.equals(t[a],n)||n===null&&a==0)&&(this.focusedIndex=a)},getOptionLabel:function(t){return this.optionLabel?d.resolveFieldData(t,this.optionLabel):t},getOptionValue:function(t){return this.optionValue?d.resolveFieldData(t,this.optionValue):t},getOptionRenderKey:function(t){return this.dataKey?d.resolveFieldData(t,this.dataKey):this.getOptionLabel(t)},getPTOptions:function(t,n){return this.ptm(n,{context:{active:this.isSelected(t),disabled:this.isOptionDisabled(t),option:t}})},isOptionDisabled:function(t){return this.optionDisabled?d.resolveFieldData(t,this.optionDisabled):!1},onOptionSelect:function(t,n,a){var l=this;if(!(this.disabled||this.isOptionDisabled(n))){var r=this.isSelected(n);if(!(r&&!(this.unselectable&&this.allowEmpty))){var s=this.getOptionValue(n),i;this.multiple?r?i=this.modelValue.filter(function(o){return!d.equals(o,s,l.equalityKey)}):i=this.modelValue?[].concat(F(this.modelValue),[s]):[s]:i=r?null:s,this.focusedIndex=a,this.$emit("update:modelValue",i),this.$emit("change",{event:t,value:i})}}},isSelected:function(t){var n=!1,a=this.getOptionValue(t);if(this.multiple){if(this.modelValue){var l=L(this.modelValue),r;try{for(l.s();!(r=l.n()).done;){var s=r.value;if(d.equals(s,a,this.equalityKey)){n=!0;break}}}catch(i){l.e(i)}finally{l.f()}}}else n=d.equals(this.modelValue,a,this.equalityKey);return n},onKeydown:function(t,n,a){switch(t.code){case"Space":{this.onOptionSelect(t,n,a),t.preventDefault();break}case"ArrowDown":case"ArrowRight":{this.changeTabIndexes(t,"next"),t.preventDefault();break}case"ArrowUp":case"ArrowLeft":{this.changeTabIndexes(t,"prev"),t.preventDefault();break}}},changeTabIndexes:function(t,n){for(var a,l,r=0;r<=this.$refs.container.children.length-1;r++)this.$refs.container.children[r].getAttribute("tabindex")==="0"&&(a={elem:this.$refs.container.children[r],index:r});n==="prev"?a.index===0?l=this.$refs.container.children.length-1:l=a.index-1:a.index===this.$refs.container.children.length-1?l=0:l=a.index+1,this.focusedIndex=l,this.$refs.container.children[l].focus()},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t,n){t.target&&t.relatedTarget&&t.target.parentElement!==t.relatedTarget.parentElement&&this.defaultTabIndexes(),this.$emit("blur",t,n)}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey}},directives:{ripple:v}},R=["aria-labelledby"],j=["tabindex","aria-label","role","aria-checked","aria-disabled","onClick","onKeydown","onBlur","data-p-highlight","data-p-disabled"];function P(e,t,n,a,l,r){var s=S("ripple");return h(),p("div",b({ref:"container",class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptm("root")),[(h(!0),p(O,null,x(e.options,function(i,o){return w((h(),p("div",b({key:r.getOptionRenderKey(i),tabindex:o===l.focusedIndex?"0":"-1","aria-label":r.getOptionLabel(i),role:e.multiple?"checkbox":"radio","aria-checked":r.isSelected(i),"aria-disabled":e.optionDisabled,class:e.cx("button",{option:i}),onClick:function(c){return r.onOptionSelect(c,i,o)},onKeydown:function(c){return r.onKeydown(c,i,o)},onFocus:t[0]||(t[0]=function(u){return r.onFocus(u)}),onBlur:function(c){return r.onBlur(c,i)}},r.getPTOptions(i,"button"),{"data-p-highlight":r.isSelected(i),"data-p-disabled":r.isOptionDisabled(i)}),[D(e.$slots,"option",{option:i,index:o,class:V(e.cx("label"))},function(){return[I("span",b({class:e.cx("label")},r.getPTOptions(i,"label")),T(r.getOptionLabel(i)),17)]})],16,j)),[[s]])}),128))],16,R)}$.render=P;export{$ as default};
