import{R as te,U,Z as G,S as u,T as h,V as ie,ac as ne,W as se,i as K,X as le,t as o,v as c,x as O,Y as r,a1 as g,a2 as w,z as R,A as F,a5 as re,a3 as I,a4 as x,$ as v,y as S,a7 as q,a6 as oe,J as C,a0 as W,B as M,a9 as ae,aa as ue,ae as Z}from"./entry.4JUXFAXZ.js";import de from"./checkbox.esm.0GwzOUzy.js";import{s as ce}from"./index.esm.N4O8niOc.js";import{s as pe}from"./index.esm.zmkvUMaq.js";import{s as he}from"./index.esm.5f_kXI2a.js";import{s as fe}from"./index.esm.sCdC_Kum.js";import{s as me}from"./index.esm.KVu84gKh.js";import{s as ye}from"./index.esm.KeL-Y3Ss.js";import{O as ge}from"./overlayeventbus.esm.-SEeY5fp.js";import{s as be}from"./portal.esm.OpERwJoa.js";import Oe from"./virtualscroller.esm.QNpIVaYe.js";import{s as ve}from"./basecomponent.esm.ITTx6yMy.js";import"./baseicon.esm.Ao9NWvyi.js";var Ie={root:function(e){var i=e.props;return{position:i.appendTo==="self"?"relative":void 0}}},Se={root:function(e){var i=e.instance,n=e.props;return["p-multiselect p-component p-inputwrapper",{"p-multiselect-chip":n.display==="chip","p-disabled":n.disabled,"p-invalid":n.invalid,"p-variant-filled":n.variant?n.variant==="filled":i.$primevue.config.inputStyle==="filled","p-focus":i.focused,"p-inputwrapper-filled":n.modelValue&&n.modelValue.length,"p-inputwrapper-focus":i.focused||i.overlayVisible,"p-overlay-open":i.overlayVisible}]},labelContainer:"p-multiselect-label-container",label:function(e){var i=e.instance,n=e.props;return["p-multiselect-label",{"p-placeholder":i.label===n.placeholder,"p-multiselect-label-empty":!n.placeholder&&(!n.modelValue||n.modelValue.length===0)}]},token:"p-multiselect-token",tokenLabel:"p-multiselect-token-label",removeTokenIcon:"p-multiselect-token-icon",trigger:"p-multiselect-trigger",loadingIcon:"p-multiselect-trigger-icon",dropdownIcon:"p-multiselect-trigger-icon",panel:function(e){e.props;var i=e.instance;return["p-multiselect-panel p-component",{"p-ripple-disabled":i.$primevue.config.ripple===!1}]},header:"p-multiselect-header",filterContainer:"p-multiselect-filter-container",filterInput:function(e){var i=e.props,n=e.instance;return["p-multiselect-filter p-inputtext p-component",{"p-variant-filled":i.variant?i.variant==="filled":n.$primevue.config.inputStyle==="filled"}]},filterIcon:"p-multiselect-filter-icon",closeButton:"p-multiselect-close p-link",closeIcon:"p-multiselect-close-icon",wrapper:"p-multiselect-items-wrapper",list:"p-multiselect-items p-component",itemGroup:"p-multiselect-item-group",item:function(e){var i=e.instance,n=e.option,l=e.index,s=e.getItemOptions,d=e.props;return["p-multiselect-item",{"p-highlight":i.isSelected(n)&&d.highlightOnSelect,"p-focus":i.focusedOptionIndex===i.getOptionIndex(l,s),"p-disabled":i.isOptionDisabled(n)}]},emptyMessage:"p-multiselect-empty-message"},ke=te.extend({name:"multiselect",classes:Se,inlineStyles:Ie}),Le={name:"BaseMultiSelect",extends:ve,props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"200px"},placeholder:String,variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:Boolean,inputId:{type:String,default:null},inputProps:{type:null,default:null},panelClass:{type:String,default:null},panelStyle:{type:null,default:null},panelProps:{type:null,default:null},filterInputProps:{type:null,default:null},closeButtonProps:{type:null,default:null},dataKey:null,filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},display:{type:String,default:"comma"},selectedItemsLabel:{type:String,default:"{0} items selected"},maxSelectedLabels:{type:Number,default:null},selectionLimit:{type:Number,default:null},showToggleAll:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},checkboxIcon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},filterIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},removeTokenIcon:{type:String,default:void 0},selectAll:{type:Boolean,default:null},resetFilterOnHide:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},autoFilterFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},highlightOnSelect:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:ke,provide:function(){return{$parentInstance:this}}};function D(t){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(t)}function J(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),i.push.apply(i,n)}return i}function X(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?J(Object(i),!0).forEach(function(n){$(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):J(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function $(t,e,i){return e=Ve(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Ve(t){var e=we(t,"string");return D(e)=="symbol"?e:String(e)}function we(t,e){if(D(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e||"default");if(D(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Y(t){return Te(t)||Ce(t)||Fe(t)||xe()}function xe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fe(t,e){if(t){if(typeof t=="string")return j(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return j(t,e)}}function Ce(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Te(t){if(Array.isArray(t))return j(t)}function j(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var Ke={name:"MultiSelect",extends:Le,emits:["update:modelValue","change","focus","blur","before-show","before-hide","show","hide","filter","selectall-change"],outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,list:null,virtualScroller:null,startRangeIndex:-1,searchTimeout:null,searchValue:"",selectOnFocus:!1,data:function(){return{id:this.$attrs.id,clicked:!1,focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1}},watch:{"$attrs.id":function(e){this.id=e||U()},options:function(){this.autoUpdateModel()}},mounted:function(){this.id=this.id||U(),this.autoUpdateModel()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(G.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(e,i){return this.virtualScrollerDisabled?e:i&&i(e).index},getOptionLabel:function(e){return this.optionLabel?u.resolveFieldData(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?u.resolveFieldData(e,this.optionValue):e},getOptionRenderKey:function(e){return this.dataKey?u.resolveFieldData(e,this.dataKey):this.getOptionLabel(e)},getHeaderCheckboxPTOptions:function(e){return this.ptm(e,{context:{selected:this.allSelected}})},getCheckboxPTOptions:function(e,i,n,l){return this.ptm(l,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(n,i),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.maxSelectionLimitReached&&!this.isSelected(e)?!0:this.optionDisabled?u.resolveFieldData(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return u.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return u.resolveFieldData(e,this.optionGroupChildren)},getAriaPosInset:function(e){var i=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(n){return i.isOptionGroup(n)}).length:e)+1},show:function(e){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),e&&h.focus(this.$refs.focusInput)},hide:function(e){var i=this,n=function(){i.$emit("before-hide"),i.overlayVisible=!1,i.clicked=!1,i.focusedOptionIndex=-1,i.searchValue="",i.resetFilterOnHide&&(i.filterValue=null),e&&h.focus(i.$refs.focusInput)};setTimeout(function(){n()},0)},onFocus:function(e){this.disabled||(this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",e))},onBlur:function(e){this.clicked=!1,this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",e)},onKeyDown:function(e){var i=this;if(this.disabled){e.preventDefault();return}var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(e);break;default:if(e.code==="KeyA"&&n){var l=this.visibleOptions.filter(function(s){return i.isValidOption(s)}).map(function(s){return i.getOptionValue(s)});this.updateModel(e,l),e.preventDefault();break}!n&&u.isPrintableCharacter(e.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(e),e.preventDefault());break}this.clicked=!1},onContainerClick:function(e){this.disabled||this.loading||((!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.clicked=!0)},onFirstHiddenFocus:function(e){var i=e.relatedTarget===this.$refs.focusInput?h.getFirstFocusableElement(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;h.focus(i)},onLastHiddenFocus:function(e){var i=e.relatedTarget===this.$refs.focusInput?h.getLastFocusableElement(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;h.focus(i)},onCloseClick:function(){this.hide(!0)},onOptionSelect:function(e,i){var n=this,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!(this.disabled||this.isOptionDisabled(i))){var d=this.isSelected(i),m=null;d?m=this.modelValue.filter(function(y){return!u.equals(y,n.getOptionValue(i),n.equalityKey)}):m=[].concat(Y(this.modelValue||[]),[this.getOptionValue(i)]),this.updateModel(e,m),l!==-1&&(this.focusedOptionIndex=l),s&&h.focus(this.$refs.focusInput)}},onOptionMouseMove:function(e,i){this.focusOnHover&&this.changeFocusedOptionIndex(e,i)},onOptionSelectRange:function(e){var i=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;if(n===-1&&(n=this.findNearestSelectedOptionIndex(l,!0)),l===-1&&(l=this.findNearestSelectedOptionIndex(n)),n!==-1&&l!==-1){var s=Math.min(n,l),d=Math.max(n,l),m=this.visibleOptions.slice(s,d+1).filter(function(y){return i.isValidOption(y)}).map(function(y){return i.getOptionValue(y)});this.updateModel(e,m)}},onFilterChange:function(e){var i=e.target.value;this.filterValue=i,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:e,value:i}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break}},onFilterBlur:function(){this.focusedOptionIndex=-1},onFilterUpdated:function(){this.overlayVisible&&this.alignOverlay()},onOverlayClick:function(e){ge.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(!this.overlayVisible)this.show();else{var i=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex,i),this.changeFocusedOptionIndex(e,i)}e.preventDefault()},onArrowUpKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(e.altKey&&!i)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var n=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,n,this.startRangeIndex),this.changeFocusedOptionIndex(e,n),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;i&&(this.focusedOptionIndex=-1)},onHomeKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=e.currentTarget;if(i){var l=n.value.length;n.setSelectionRange(0,e.shiftKey?l:0),this.focusedOptionIndex=-1}else{var s=e.metaKey||e.ctrlKey,d=this.findFirstOptionIndex();e.shiftKey&&s&&this.onOptionSelectRange(e,d,this.startRangeIndex),this.changeFocusedOptionIndex(e,d),!this.overlayVisible&&this.show()}e.preventDefault()},onEndKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=e.currentTarget;if(i){var l=n.value.length;n.setSelectionRange(e.shiftKey?0:l,l),this.focusedOptionIndex=-1}else{var s=e.metaKey||e.ctrlKey,d=this.findLastOptionIndex();e.shiftKey&&s&&this.onOptionSelectRange(e,this.startRangeIndex,d),this.changeFocusedOptionIndex(e,d),!this.overlayVisible&&this.show()}e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.overlayVisible?this.focusedOptionIndex!==-1&&(e.shiftKey?this.onOptionSelectRange(e,this.focusedOptionIndex):this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex])):(this.focusedOptionIndex=-1,this.onArrowDownKey(e)),e.preventDefault()},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;i||(this.overlayVisible&&this.hasFocusableElements()?(h.focus(e.shiftKey?this.$refs.lastHiddenFocusableElementOnOverlay:this.$refs.firstHiddenFocusableElementOnOverlay),e.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onShiftKey:function(){this.startRangeIndex=this.focusedOptionIndex},onOverlayEnter:function(e){G.set("overlay",e,this.$primevue.config.zIndex.overlay),h.addStyles(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.scrollInView(),this.autoFilterFocus&&h.focus(this.$refs.filterInput)},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(e){G.clear(e)},alignOverlay:function(){this.appendTo==="self"?h.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=h.getOuterWidth(this.$el)+"px",h.absolutePosition(this.overlay,this.$el))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(i){e.overlayVisible&&e.isOutsideClicked(i)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new ie(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!h.isTouchDevice()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked:function(e){return!(this.$el.isSameNode(e.target)||this.$el.contains(e.target)||this.overlay&&this.overlay.contains(e.target))},getLabelByValue:function(e){var i=this,n=this.optionGroupLabel?this.flatOptions(this.options):this.options||[],l=n.find(function(s){return!i.isOptionGroup(s)&&u.equals(i.getOptionValue(s),e,i.equalityKey)});return l?this.getOptionLabel(l):null},getSelectedItemsLabel:function(){var e=/{(.*?)}/,i=this.selectedItemsLabel||this.$primevue.config.locale.selectionMessage;return e.test(i)?i.replace(i.match(e)[0],this.modelValue.length+""):i},onToggleAll:function(e){var i=this;if(this.selectAll!==null)this.$emit("selectall-change",{originalEvent:e,checked:!this.allSelected});else{var n=this.allSelected?[]:this.visibleOptions.filter(function(l){return i.isValidOption(l)}).map(function(l){return i.getOptionValue(l)});this.updateModel(e,n)}},removeOption:function(e,i){var n=this,l=this.modelValue.filter(function(s){return!u.equals(s,i,n.equalityKey)});this.updateModel(e,l)},clearFilter:function(){this.filterValue=null},hasFocusableElements:function(){return h.getFocusableElements(this.overlay,':not([data-p-hidden-focusable="true"])').length>0},isOptionMatched:function(e){var i;return this.isValidOption(e)&&((i=this.getOptionLabel(e))===null||i===void 0?void 0:i.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)))},isValidOption:function(e){return u.isNotEmpty(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isEquals:function(e,i){return u.equals(e,i,this.equalityKey)},isSelected:function(e){var i=this,n=this.getOptionValue(e);return(this.modelValue||[]).some(function(l){return i.isEquals(l,n)})},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(i){return e.isValidOption(i)})},findLastOptionIndex:function(){var e=this;return u.findLastIndex(this.visibleOptions,function(i){return e.isValidOption(i)})},findNextOptionIndex:function(e){var i=this,n=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(l){return i.isValidOption(l)}):-1;return n>-1?n+e+1:e},findPrevOptionIndex:function(e){var i=this,n=e>0?u.findLastIndex(this.visibleOptions.slice(0,e),function(l){return i.isValidOption(l)}):-1;return n>-1?n:e},findSelectedOptionIndex:function(){var e=this;if(this.hasSelectedOption){for(var i=function(){var d=e.modelValue[l],m=e.visibleOptions.findIndex(function(y){return e.isValidSelectedOption(y)&&e.isEquals(d,e.getOptionValue(y))});if(m>-1)return{v:m}},n,l=this.modelValue.length-1;l>=0;l--)if(n=i(),n)return n.v}return-1},findFirstSelectedOptionIndex:function(){var e=this;return this.hasSelectedOption?this.visibleOptions.findIndex(function(i){return e.isValidSelectedOption(i)}):-1},findLastSelectedOptionIndex:function(){var e=this;return this.hasSelectedOption?u.findLastIndex(this.visibleOptions,function(i){return e.isValidSelectedOption(i)}):-1},findNextSelectedOptionIndex:function(e){var i=this,n=this.hasSelectedOption&&e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(l){return i.isValidSelectedOption(l)}):-1;return n>-1?n+e+1:-1},findPrevSelectedOptionIndex:function(e){var i=this,n=this.hasSelectedOption&&e>0?u.findLastIndex(this.visibleOptions.slice(0,e),function(l){return i.isValidSelectedOption(l)}):-1;return n>-1?n:-1},findNearestSelectedOptionIndex:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=-1;return this.hasSelectedOption&&(i?(n=this.findPrevSelectedOptionIndex(e),n=n===-1?this.findNextSelectedOptionIndex(e):n):(n=this.findNextSelectedOptionIndex(e),n=n===-1?this.findPrevSelectedOptionIndex(e):n)),n>-1?n:e},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions:function(e){var i=this;this.searchValue=(this.searchValue||"")+e.key;var n=-1;u.isNotEmpty(this.searchValue)&&(this.focusedOptionIndex!==-1?(n=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(l){return i.isOptionMatched(l)}),n=n===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(function(l){return i.isOptionMatched(l)}):n+this.focusedOptionIndex):n=this.visibleOptions.findIndex(function(l){return i.isOptionMatched(l)}),n===-1&&this.focusedOptionIndex===-1&&(n=this.findFirstFocusedOptionIndex()),n!==-1&&this.changeFocusedOptionIndex(e,n)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){i.searchValue="",i.searchTimeout=null},500)},changeFocusedOptionIndex:function(e,i){this.focusedOptionIndex!==i&&(this.focusedOptionIndex=i,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[i]))},scrollInView:function(){var e=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var n=i!==-1?"".concat(e.id,"_").concat(i):e.focusedOptionId,l=h.findSingle(e.list,'li[id="'.concat(n,'"]'));l?l.scrollIntoView&&l.scrollIntoView({block:"nearest",inline:"nearest"}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(i!==-1?i:e.focusedOptionIndex)})},autoUpdateModel:function(){if(this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption){this.focusedOptionIndex=this.findFirstFocusedOptionIndex();var e=this.getOptionValue(this.visibleOptions[this.focusedOptionIndex]);this.updateModel(null,[e])}},updateModel:function(e,i){this.$emit("update:modelValue",i),this.$emit("change",{originalEvent:e,value:i})},flatOptions:function(e){var i=this;return(e||[]).reduce(function(n,l,s){n.push({optionGroup:l,group:!0,index:s});var d=i.getOptionGroupChildren(l);return d&&d.forEach(function(m){return n.push(m)}),n},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,i){this.list=e,i&&i(e)},virtualScrollerRef:function(e){this.virtualScroller=e}},computed:{visibleOptions:function(){var e=this,i=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];if(this.filterValue){var n=ne.filter(i,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(this.optionGroupLabel){var l=this.options||[],s=[];return l.forEach(function(d){var m=e.getOptionGroupChildren(d),y=m.filter(function(H){return n.includes(H)});y.length>0&&s.push(X(X({},d),{},$({},typeof e.optionGroupChildren=="string"?e.optionGroupChildren:"items",Y(y))))}),this.flatOptions(s)}return n}return i},label:function(){var e;if(this.modelValue&&this.modelValue.length){if(u.isNotEmpty(this.maxSelectedLabels)&&this.modelValue.length>this.maxSelectedLabels)return this.getSelectedItemsLabel();e="";for(var i=0;i<this.modelValue.length;i++)i!==0&&(e+=", "),e+=this.getLabelByValue(this.modelValue[i])}else e=this.placeholder;return e},chipSelectedItems:function(){return u.isNotEmpty(this.maxSelectedLabels)&&this.modelValue&&this.modelValue.length>this.maxSelectedLabels?this.modelValue.slice(0,this.maxSelectedLabels):this.modelValue},allSelected:function(){var e=this;return this.selectAll!==null?this.selectAll:u.isNotEmpty(this.visibleOptions)&&this.visibleOptions.every(function(i){return e.isOptionGroup(i)||e.isOptionDisabled(i)||e.isSelected(i)})},hasSelectedOption:function(){return u.isNotEmpty(this.modelValue)},equalityKey:function(){return this.optionValue?null:this.dataKey},searchFields:function(){return this.filterFields||[this.optionLabel]},maxSelectionLimitReached:function(){return this.selectionLimit&&this.modelValue&&this.modelValue.length===this.selectionLimit},filterResultMessageText:function(){return u.isNotEmpty(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText:function(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText:function(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}",this.modelValue.length):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(i){return!e.isOptionGroup(i)}).length},toggleAllAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria[this.allSelected?"selectAll":"unselectAll"]:void 0},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions}},directives:{ripple:se},components:{Checkbox:de,VirtualScroller:Oe,Portal:be,TimesIcon:me,SearchIcon:he,TimesCircleIcon:ye,ChevronDownIcon:pe,SpinnerIcon:fe,CheckIcon:ce}};function E(t){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(t)}function Q(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),i.push.apply(i,n)}return i}function L(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Q(Object(i),!0).forEach(function(n){N(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Q(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function N(t,e,i){return e=Me(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Me(t){var e=De(t,"string");return E(e)=="symbol"?e:String(e)}function De(t,e){if(E(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e||"default");if(E(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Ee=["id","disabled","placeholder","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant"],Ae=["onClick"],Pe=["value","placeholder","aria-owns","aria-activedescendant"],Re=["aria-label"],He=["id"],Be=["id"],Ge=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-highlight","data-p-focused","data-p-disabled"];function je(t,e,i,n,l,s){var d=K("TimesCircleIcon"),m=K("SpinnerIcon"),y=K("Checkbox"),H=K("VirtualScroller"),_=K("Portal"),z=le("ripple");return o(),c("div",r({ref:"container",class:t.cx("root"),onClick:e[12]||(e[12]=function(){return s.onContainerClick&&s.onContainerClick.apply(s,arguments)})},t.ptm("root")),[O("div",r({class:"p-hidden-accessible"},t.ptm("hiddenInputWrapper"),{"data-p-hidden-accessible":!0}),[O("input",r({ref:"focusInput",id:t.inputId,type:"text",readonly:"",disabled:t.disabled,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":l.overlayVisible,"aria-controls":l.id+"_list","aria-activedescendant":l.focused?s.focusedOptionId:void 0,onFocus:e[0]||(e[0]=function(){return s.onFocus&&s.onFocus.apply(s,arguments)}),onBlur:e[1]||(e[1]=function(){return s.onBlur&&s.onBlur.apply(s,arguments)}),onKeydown:e[2]||(e[2]=function(){return s.onKeyDown&&s.onKeyDown.apply(s,arguments)})},L(L({},t.inputProps),t.ptm("hiddenInput"))),null,16,Ee)],16),O("div",r({class:t.cx("labelContainer")},t.ptm("labelContainer")),[O("div",r({class:t.cx("label")},t.ptm("label")),[g(t.$slots,"value",{value:t.modelValue,placeholder:t.placeholder},function(){return[t.display==="comma"?(o(),c(C,{key:0},[M(S(s.label||"empty"),1)],64)):t.display==="chip"?(o(),c(C,{key:1},[(o(!0),c(C,null,W(s.chipSelectedItems,function(a){return o(),c("div",r({key:s.getLabelByValue(a),class:t.cx("token")},t.ptm("token")),[g(t.$slots,"chip",{value:a},function(){return[O("span",r({class:t.cx("tokenLabel")},t.ptm("tokenLabel")),S(s.getLabelByValue(a)),17)]}),t.disabled?v("",!0):g(t.$slots,"removetokenicon",{key:0,class:w(t.cx("removeTokenIcon")),item:a,onClick:function(T){return s.removeOption(T,a)},removeCallback:function(T){return s.removeOption(T,a)}},function(){return[t.removeTokenIcon?(o(),c("span",r({key:0,class:[t.cx("removeTokenIcon"),t.removeTokenIcon],onClick:Z(function(k){return s.removeOption(k,a)},["stop"])},t.ptm("removeTokenIcon")),null,16,Ae)):(o(),I(d,r({key:1,class:t.cx("removeTokenIcon"),onClick:Z(function(k){return s.removeOption(k,a)},["stop"])},t.ptm("removeTokenIcon")),null,16,["class","onClick"]))]})],16)}),128)),!t.modelValue||t.modelValue.length===0?(o(),c(C,{key:0},[M(S(t.placeholder||"empty"),1)],64)):v("",!0)],64)):v("",!0)]})],16)],16),O("div",r({class:t.cx("trigger")},t.ptm("trigger")),[t.loading?g(t.$slots,"loadingicon",{key:0,class:w(t.cx("loadingIcon"))},function(){return[t.loadingIcon?(o(),c("span",r({key:0,class:[t.cx("loadingIcon"),"pi-spin",t.loadingIcon],"aria-hidden":"true"},t.ptm("loadingIcon")),null,16)):(o(),I(m,r({key:1,class:t.cx("loadingIcon"),spin:"","aria-hidden":"true"},t.ptm("loadingIcon")),null,16,["class"]))]}):g(t.$slots,"dropdownicon",{key:1,class:w(t.cx("dropdownIcon"))},function(){return[(o(),I(x(t.dropdownIcon?"span":"ChevronDownIcon"),r({class:[t.cx("dropdownIcon"),t.dropdownIcon],"aria-hidden":"true"},t.ptm("dropdownIcon")),null,16,["class"]))]})],16),R(_,{appendTo:t.appendTo},{default:F(function(){return[R(re,r({name:"p-connected-overlay",onEnter:s.onOverlayEnter,onAfterEnter:s.onOverlayAfterEnter,onLeave:s.onOverlayLeave,onAfterLeave:s.onOverlayAfterLeave},t.ptm("transition")),{default:F(function(){return[l.overlayVisible?(o(),c("div",r({key:0,ref:s.overlayRef,style:t.panelStyle,class:[t.cx("panel"),t.panelClass],onClick:e[10]||(e[10]=function(){return s.onOverlayClick&&s.onOverlayClick.apply(s,arguments)}),onKeydown:e[11]||(e[11]=function(){return s.onOverlayKeyDown&&s.onOverlayKeyDown.apply(s,arguments)})},L(L({},t.panelProps),t.ptm("panel"))),[O("span",r({ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:e[3]||(e[3]=function(){return s.onFirstHiddenFocus&&s.onFirstHiddenFocus.apply(s,arguments)})},t.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16),g(t.$slots,"header",{value:t.modelValue,options:s.visibleOptions}),t.showToggleAll&&t.selectionLimit==null||t.filter?(o(),c("div",r({key:0,class:t.cx("header")},t.ptm("header")),[t.showToggleAll&&t.selectionLimit==null?(o(),I(y,{key:0,modelValue:s.allSelected,binary:!0,disabled:t.disabled,variant:t.variant,"aria-label":s.toggleAllAriaLabel,onChange:s.onToggleAll,unstyled:t.unstyled,pt:s.getHeaderCheckboxPTOptions("headerCheckbox")},{icon:F(function(a){return[t.$slots.headercheckboxicon?(o(),I(x(t.$slots.headercheckboxicon),{key:0,checked:a.checked,class:w(a.class)},null,8,["checked","class"])):a.checked?(o(),I(x(t.checkboxIcon?"span":"CheckIcon"),r({key:1,class:[a.class,N({},t.checkboxIcon,a.checked)]},s.getHeaderCheckboxPTOptions("headerCheckbox.icon")),null,16,["class"])):v("",!0)]}),_:1},8,["modelValue","disabled","variant","aria-label","onChange","unstyled","pt"])):v("",!0),t.filter?(o(),c("div",r({key:1,class:t.cx("filterContainer")},t.ptm("filterContainer")),[O("input",r({ref:"filterInput",type:"text",value:l.filterValue,onVnodeMounted:e[4]||(e[4]=function(){return s.onFilterUpdated&&s.onFilterUpdated.apply(s,arguments)}),class:t.cx("filterInput"),placeholder:t.filterPlaceholder,role:"searchbox",autocomplete:"off","aria-owns":l.id+"_list","aria-activedescendant":s.focusedOptionId,onKeydown:e[5]||(e[5]=function(){return s.onFilterKeyDown&&s.onFilterKeyDown.apply(s,arguments)}),onBlur:e[6]||(e[6]=function(){return s.onFilterBlur&&s.onFilterBlur.apply(s,arguments)}),onInput:e[7]||(e[7]=function(){return s.onFilterChange&&s.onFilterChange.apply(s,arguments)})},L(L({},t.filterInputProps),t.ptm("filterInput"))),null,16,Pe),g(t.$slots,"filtericon",{class:w(t.cx("filterIcon"))},function(){return[(o(),I(x(t.filterIcon?"span":"SearchIcon"),r({class:[t.cx("filterIcon"),t.filterIcon]},t.ptm("filterIcon")),null,16,["class"]))]})],16)):v("",!0),t.filter?(o(),c("span",r({key:2,role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenFilterResult"),{"data-p-hidden-accessible":!0}),S(s.filterResultMessageText),17)):v("",!0),q((o(),c("button",r({class:t.cx("closeButton"),"aria-label":s.closeAriaLabel,onClick:e[8]||(e[8]=function(){return s.onCloseClick&&s.onCloseClick.apply(s,arguments)}),type:"button"},L(L({},t.closeButtonProps),t.ptm("closeButton"))),[g(t.$slots,"closeicon",{class:w(t.cx("closeIcon"))},function(){return[(o(),I(x(t.closeIcon?"span":"TimesIcon"),r({class:[t.cx("closeIcon"),t.closeIcon]},t.ptm("closeIcon")),null,16,["class"]))]})],16,Re)),[[z]])],16)):v("",!0),O("div",r({class:t.cx("wrapper"),style:{"max-height":s.virtualScrollerDisabled?t.scrollHeight:""}},t.ptm("wrapper")),[R(H,r({ref:s.virtualScrollerRef},t.virtualScrollerOptions,{items:s.visibleOptions,style:{height:t.scrollHeight},tabindex:-1,disabled:s.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),oe({content:F(function(a){var k=a.styleClass,T=a.contentRef,A=a.items,b=a.getItemOptions,ee=a.contentStyle,P=a.itemSize;return[O("ul",r({ref:function(f){return s.listRef(f,T)},id:l.id+"_list",class:[t.cx("list"),k],style:ee,role:"listbox","aria-multiselectable":"true"},t.ptm("list")),[(o(!0),c(C,null,W(A,function(p,f){return o(),c(C,{key:s.getOptionRenderKey(p,s.getOptionIndex(f,b))},[s.isOptionGroup(p)?(o(),c("li",r({key:0,id:l.id+"_"+s.getOptionIndex(f,b),style:{height:P?P+"px":void 0},class:t.cx("itemGroup"),role:"option"},t.ptm("itemGroup")),[g(t.$slots,"optiongroup",{option:p.optionGroup,index:s.getOptionIndex(f,b)},function(){return[M(S(s.getOptionGroupLabel(p.optionGroup)),1)]})],16,Be)):q((o(),c("li",r({key:1,id:l.id+"_"+s.getOptionIndex(f,b),style:{height:P?P+"px":void 0},class:t.cx("item",{option:p,index:f,getItemOptions:b}),role:"option","aria-label":s.getOptionLabel(p),"aria-selected":s.isSelected(p),"aria-disabled":s.isOptionDisabled(p),"aria-setsize":s.ariaSetSize,"aria-posinset":s.getAriaPosInset(s.getOptionIndex(f,b)),onClick:function(B){return s.onOptionSelect(B,p,s.getOptionIndex(f,b),!0)},onMousemove:function(B){return s.onOptionMouseMove(B,s.getOptionIndex(f,b))}},s.getCheckboxPTOptions(p,b,f,"item"),{"data-p-highlight":s.isSelected(p),"data-p-focused":l.focusedOptionIndex===s.getOptionIndex(f,b),"data-p-disabled":s.isOptionDisabled(p)}),[R(y,{modelValue:s.isSelected(p),binary:!0,tabindex:-1,variant:t.variant,unstyled:t.unstyled,pt:s.getCheckboxPTOptions(p,b,f,"itemCheckbox")},{icon:F(function(V){return[t.$slots.itemcheckboxicon?(o(),I(x(t.$slots.itemcheckboxicon),{key:0,checked:V.checked,class:w(V.class)},null,8,["checked","class"])):V.checked?(o(),I(x(t.checkboxIcon?"span":"CheckIcon"),r({key:1,class:[V.class,N({},t.checkboxIcon,V.checked)]},s.getCheckboxPTOptions(p,b,f,"itemCheckbox.icon")),null,16,["class"])):v("",!0)]}),_:2},1032,["modelValue","variant","unstyled","pt"]),g(t.$slots,"option",{option:p,index:s.getOptionIndex(f,b)},function(){return[O("span",ae(ue(t.ptm("option"))),S(s.getOptionLabel(p)),17)]})],16,Ge)),[[z]])],64)}),128)),l.filterValue&&(!A||A&&A.length===0)?(o(),c("li",r({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[g(t.$slots,"emptyfilter",{},function(){return[M(S(s.emptyFilterMessageText),1)]})],16)):!t.options||t.options&&t.options.length===0?(o(),c("li",r({key:1,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[g(t.$slots,"empty",{},function(){return[M(S(s.emptyMessageText),1)]})],16)):v("",!0)],16,He)]}),_:2},[t.$slots.loader?{name:"loader",fn:F(function(a){var k=a.options;return[g(t.$slots,"loader",{options:k})]}),key:"0"}:void 0]),1040,["items","style","disabled","pt"])],16),g(t.$slots,"footer",{value:t.modelValue,options:s.visibleOptions}),!t.options||t.options&&t.options.length===0?(o(),c("span",r({key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenEmptyMessage"),{"data-p-hidden-accessible":!0}),S(s.emptyMessageText),17)):v("",!0),O("span",r({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),S(s.selectedMessageText),17),O("span",r({ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:e[9]||(e[9]=function(){return s.onLastHiddenFocus&&s.onLastHiddenFocus.apply(s,arguments)})},t.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16)],16)):v("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}Ke.render=je;export{Ke as default};
