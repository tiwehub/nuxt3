import { s as script$2 } from './basecomponent.esm-FBg8lKHy.mjs';
import { B as BaseStyle } from '../server.mjs';
import { openBlock, createElementBlock, mergeProps } from 'file://D:/OSPanel/home/profiline/node_modules/vue/index.mjs';
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
    var instance = _ref.instance, props = _ref.props;
    return ["p-inputtext p-component", {
      "p-filled": instance.filled,
      "p-inputtext-sm": props.size === "small",
      "p-inputtext-lg": props.size === "large",
      "p-invalid": props.invalid,
      "p-variant-filled": props.variant ? props.variant === "filled" : instance.$primevue.config.inputStyle === "filled"
    }];
  }
};
var InputTextStyle = BaseStyle.extend({
  name: "inputtext",
  classes
});
var script$1 = {
  name: "BaseInputText",
  "extends": script$2,
  props: {
    modelValue: null,
    size: {
      type: String,
      "default": null
    },
    invalid: {
      type: Boolean,
      "default": false
    },
    variant: {
      type: String,
      "default": null
    }
  },
  style: InputTextStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "InputText",
  "extends": script$1,
  emits: ["update:modelValue"],
  methods: {
    getPTOptions: function getPTOptions(key) {
      return this.ptm(key, {
        context: {
          filled: this.filled,
          disabled: this.$attrs.disabled || this.$attrs.disabled === ""
        }
      });
    },
    onInput: function onInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  },
  computed: {
    filled: function filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    }
  }
};
var _hoisted_1 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", mergeProps({
    "class": _ctx.cx("root"),
    value: _ctx.modelValue,
    onInput: _cache[0] || (_cache[0] = function() {
      return $options.onInput && $options.onInput.apply($options, arguments);
    })
  }, $options.getPTOptions("root")), null, 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=inputtext.esm-m44z4Bnr.mjs.map
