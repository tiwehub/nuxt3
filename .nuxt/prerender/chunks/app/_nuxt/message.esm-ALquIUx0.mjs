import { s as script$3 } from './index.esm-wE1WpYh0.mjs';
import { s as script$2, a as script$1$1 } from './index.esm-t_BQhpxL.mjs';
import { s as script$5 } from './index.esm-3ymHAsXg.mjs';
import { s as script$4 } from './index.esm-korr-hHP.mjs';
import { B as BaseStyle, R as Ripple } from '../server.mjs';
import { s as script$6 } from './basecomponent.esm-FBg8lKHy.mjs';
import { resolveComponent, resolveDirective, openBlock, createBlock, Transition, mergeProps, withCtx, withDirectives, createElementVNode, renderSlot, createElementBlock, resolveDynamicComponent, createCommentVNode, vShow } from 'file://D:/OSPanel/home/profiline/node_modules/vue/index.mjs';
import './baseicon.esm-h4FmBV-m.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/ofetch/dist/node.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/hookable/dist/index.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/unctx/dist/index.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/h3/dist/index.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/unhead/dist/index.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/ufo/dist/index.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/defu/dist/defu.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/vue/server-renderer/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/destr/dist/index.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/scule/dist/index.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/klona/dist/index.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/ohash/dist/index.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/unstorage/dist/index.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/unstorage/drivers/memory.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/OSPanel/home/profiline/node_modules/pathe/dist/index.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/ipx/dist/index.mjs';

var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return "p-message p-component p-message-" + props.severity;
  },
  wrapper: "p-message-wrapper",
  icon: "p-message-icon",
  text: "p-message-text",
  closeButton: "p-message-close p-link",
  closeIcon: "p-message-close-icon"
};
var MessageStyle = BaseStyle.extend({
  name: "message",
  classes
});
var script$1 = {
  name: "BaseMessage",
  "extends": script$6,
  props: {
    severity: {
      type: String,
      "default": "info"
    },
    closable: {
      type: Boolean,
      "default": true
    },
    sticky: {
      type: Boolean,
      "default": true
    },
    life: {
      type: Number,
      "default": 3e3
    },
    icon: {
      type: String,
      "default": void 0
    },
    closeIcon: {
      type: String,
      "default": void 0
    },
    closeButtonProps: {
      type: null,
      "default": null
    }
  },
  style: MessageStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "Message",
  "extends": script$1,
  emits: ["close", "life-end"],
  timeout: null,
  data: function data() {
    return {
      visible: true
    };
  },
  watch: {
    sticky: function sticky(newValue) {
      if (!newValue) {
        this.closeAfterDelay();
      }
    }
  },
  mounted: function mounted() {
    if (!this.sticky) {
      this.closeAfterDelay();
    }
  },
  methods: {
    close: function close(event) {
      this.visible = false;
      this.$emit("close", event);
    },
    closeAfterDelay: function closeAfterDelay() {
      var _this = this;
      setTimeout(function() {
        _this.visible = false;
        _this.$emit("life-end");
      }, this.life);
    }
  },
  computed: {
    iconComponent: function iconComponent() {
      return {
        info: script$2,
        success: script$3,
        warn: script$1$1,
        error: script$4
      }[this.severity];
    },
    closeAriaLabel: function closeAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    }
  },
  directives: {
    ripple: Ripple
  },
  components: {
    TimesIcon: script$5,
    InfoCircleIcon: script$2,
    CheckIcon: script$3,
    ExclamationTriangleIcon: script$1$1,
    TimesCircleIcon: script$4
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1 = ["aria-label"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_TimesIcon = resolveComponent("TimesIcon");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createBlock(Transition, mergeProps({
    name: "p-message",
    appear: ""
  }, _ctx.ptm("transition")), {
    "default": withCtx(function() {
      return [withDirectives(createElementVNode("div", mergeProps({
        "class": _ctx.cx("root"),
        role: "alert",
        "aria-live": "assertive",
        "aria-atomic": "true"
      }, _ctx.ptm("root")), [_ctx.$slots.container ? renderSlot(_ctx.$slots, "container", {
        key: 0,
        onClose: $options.close,
        closeCallback: $options.close
      }) : (openBlock(), createElementBlock("div", mergeProps({
        key: 1,
        "class": _ctx.cx("wrapper")
      }, _ctx.ptm("wrapper")), [renderSlot(_ctx.$slots, "messageicon", {
        "class": "p-message-icon"
      }, function() {
        return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.icon ? "span" : $options.iconComponent), mergeProps({
          "class": [_ctx.cx("icon"), _ctx.icon]
        }, _ctx.ptm("icon")), null, 16, ["class"]))];
      }), createElementVNode("div", mergeProps({
        "class": ["p-message-text", _ctx.cx("text")]
      }, _ctx.ptm("text")), [renderSlot(_ctx.$slots, "default")], 16), _ctx.closable ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
        key: 0,
        "class": _ctx.cx("closeButton"),
        "aria-label": $options.closeAriaLabel,
        type: "button",
        onClick: _cache[0] || (_cache[0] = function($event) {
          return $options.close($event);
        })
      }, _objectSpread(_objectSpread(_objectSpread({}, _ctx.closeButtonProps), _ctx.ptm("button")), _ctx.ptm("closeButton"))), [renderSlot(_ctx.$slots, "closeicon", {}, function() {
        return [_ctx.closeIcon ? (openBlock(), createElementBlock("i", mergeProps({
          key: 0,
          "class": [_ctx.cx("closeIcon"), _ctx.closeIcon]
        }, _objectSpread(_objectSpread({}, _ctx.ptm("buttonIcon")), _ctx.ptm("closeIcon"))), null, 16)) : (openBlock(), createBlock(_component_TimesIcon, mergeProps({
          key: 1,
          "class": [_ctx.cx("closeIcon"), _ctx.closeIcon]
        }, _objectSpread(_objectSpread({}, _ctx.ptm("buttonIcon")), _ctx.ptm("closeIcon"))), null, 16, ["class"]))];
      })], 16, _hoisted_1)), [[_directive_ripple]]) : createCommentVNode("", true)], 16))], 16), [[vShow, $data.visible]])];
    }),
    _: 3
  }, 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=message.esm-ALquIUx0.mjs.map
