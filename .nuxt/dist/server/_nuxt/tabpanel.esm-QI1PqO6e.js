import { s as script$2 } from "./basecomponent.esm-FBg8lKHy.js";
import { renderSlot } from "vue";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "devalue";
import "vue/server-renderer";
var TabPanelStyle = {};
var script$1 = {
  name: "BaseTabPanel",
  "extends": script$2,
  props: {
    header: null,
    headerStyle: null,
    headerClass: null,
    headerProps: null,
    headerActionProps: null,
    contentStyle: null,
    contentClass: null,
    contentProps: null,
    disabled: Boolean
  },
  style: TabPanelStyle
};
var script = {
  name: "TabPanel",
  "extends": script$1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
script.render = render;
export {
  script as default
};
//# sourceMappingURL=tabpanel.esm-QI1PqO6e.js.map
