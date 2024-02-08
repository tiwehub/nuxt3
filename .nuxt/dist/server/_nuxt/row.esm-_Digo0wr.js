import { s as script$1 } from "./basecomponent.esm-FBg8lKHy.js";
import "../server.mjs";
import "vue";
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
var script = {
  name: "Row",
  "extends": script$1,
  inject: ["$rows"],
  mounted: function mounted() {
    var _this$$rows;
    (_this$$rows = this.$rows) === null || _this$$rows === void 0 || _this$$rows.add(this.$);
  },
  unmounted: function unmounted() {
    var _this$$rows2;
    (_this$$rows2 = this.$rows) === null || _this$$rows2 === void 0 || _this$$rows2["delete"](this.$);
  },
  render: function render() {
    return null;
  }
};
export {
  script as default
};
//# sourceMappingURL=row.esm-_Digo0wr.js.map
