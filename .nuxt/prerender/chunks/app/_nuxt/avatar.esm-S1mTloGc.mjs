import { B as BaseStyle } from '../server.mjs';
import { s as script$2 } from './basecomponent.esm-FBg8lKHy.mjs';
import { openBlock, createElementBlock, mergeProps, renderSlot, toDisplayString, createBlock, resolveDynamicComponent, normalizeClass, createCommentVNode } from 'file://D:/OSPanel/home/profiline/node_modules/vue/index.mjs';
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
    return ["p-avatar p-component", {
      "p-avatar-image": props.image != null,
      "p-avatar-circle": props.shape === "circle",
      "p-avatar-lg": props.size === "large",
      "p-avatar-xl": props.size === "xlarge"
    }];
  },
  label: "p-avatar-text",
  icon: "p-avatar-icon"
};
var AvatarStyle = BaseStyle.extend({
  name: "avatar",
  classes
});
var script$1 = {
  name: "BaseAvatar",
  "extends": script$2,
  props: {
    label: {
      type: String,
      "default": null
    },
    icon: {
      type: String,
      "default": null
    },
    image: {
      type: String,
      "default": null
    },
    size: {
      type: String,
      "default": "normal"
    },
    shape: {
      type: String,
      "default": "square"
    },
    ariaLabelledby: {
      type: String,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    }
  },
  style: AvatarStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "Avatar",
  "extends": script$1,
  emits: ["error"],
  methods: {
    onError: function onError(event) {
      this.$emit("error", event);
    }
  }
};
var _hoisted_1 = ["aria-labelledby", "aria-label"];
var _hoisted_2 = ["src", "alt"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel
  }, _ctx.ptm("root")), [renderSlot(_ctx.$slots, "default", {}, function() {
    return [_ctx.label ? (openBlock(), createElementBlock("span", mergeProps({
      key: 0,
      "class": _ctx.cx("label")
    }, _ctx.ptm("label")), toDisplayString(_ctx.label), 17)) : _ctx.$slots.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.icon), {
      key: 1,
      "class": normalizeClass(_ctx.cx("icon"))
    }, null, 8, ["class"])) : _ctx.icon ? (openBlock(), createElementBlock("span", mergeProps({
      key: 2,
      "class": [_ctx.cx("icon"), _ctx.icon]
    }, _ctx.ptm("icon")), null, 16)) : _ctx.image ? (openBlock(), createElementBlock("img", mergeProps({
      key: 3,
      src: _ctx.image,
      alt: _ctx.ariaLabel,
      onError: _cache[0] || (_cache[0] = function() {
        return $options.onError && $options.onError.apply($options, arguments);
      })
    }, _ctx.ptm("image")), null, 16, _hoisted_2)) : createCommentVNode("", true)];
  })], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=avatar.esm-S1mTloGc.mjs.map
