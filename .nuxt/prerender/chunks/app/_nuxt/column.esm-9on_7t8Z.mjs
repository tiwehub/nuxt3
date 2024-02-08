import { s as script$2 } from './basecomponent.esm-FBg8lKHy.mjs';
import '../server.mjs';
import 'file://D:/OSPanel/home/profiline/node_modules/vue/index.mjs';
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

var ColumnStyle = {};
var script$1 = {
  name: "BaseColumn",
  "extends": script$2,
  props: {
    columnKey: {
      type: null,
      "default": null
    },
    field: {
      type: [String, Function],
      "default": null
    },
    sortField: {
      type: [String, Function],
      "default": null
    },
    filterField: {
      type: [String, Function],
      "default": null
    },
    dataType: {
      type: String,
      "default": "text"
    },
    sortable: {
      type: Boolean,
      "default": false
    },
    header: {
      type: null,
      "default": null
    },
    footer: {
      type: null,
      "default": null
    },
    style: {
      type: null,
      "default": null
    },
    "class": {
      type: String,
      "default": null
    },
    headerStyle: {
      type: null,
      "default": null
    },
    headerClass: {
      type: String,
      "default": null
    },
    bodyStyle: {
      type: null,
      "default": null
    },
    bodyClass: {
      type: String,
      "default": null
    },
    footerStyle: {
      type: null,
      "default": null
    },
    footerClass: {
      type: String,
      "default": null
    },
    showFilterMenu: {
      type: Boolean,
      "default": true
    },
    showFilterOperator: {
      type: Boolean,
      "default": true
    },
    showClearButton: {
      type: Boolean,
      "default": true
    },
    showApplyButton: {
      type: Boolean,
      "default": true
    },
    showFilterMatchModes: {
      type: Boolean,
      "default": true
    },
    showAddButton: {
      type: Boolean,
      "default": true
    },
    filterMatchModeOptions: {
      type: Array,
      "default": null
    },
    maxConstraints: {
      type: Number,
      "default": 2
    },
    excludeGlobalFilter: {
      type: Boolean,
      "default": false
    },
    filterHeaderClass: {
      type: String,
      "default": null
    },
    filterHeaderStyle: {
      type: null,
      "default": null
    },
    filterMenuClass: {
      type: String,
      "default": null
    },
    filterMenuStyle: {
      type: null,
      "default": null
    },
    selectionMode: {
      type: String,
      "default": null
    },
    expander: {
      type: Boolean,
      "default": false
    },
    colspan: {
      type: Number,
      "default": null
    },
    rowspan: {
      type: Number,
      "default": null
    },
    rowReorder: {
      type: Boolean,
      "default": false
    },
    rowReorderIcon: {
      type: String,
      "default": void 0
    },
    reorderableColumn: {
      type: Boolean,
      "default": true
    },
    rowEditor: {
      type: Boolean,
      "default": false
    },
    frozen: {
      type: Boolean,
      "default": false
    },
    alignFrozen: {
      type: String,
      "default": "left"
    },
    exportable: {
      type: Boolean,
      "default": true
    },
    exportHeader: {
      type: String,
      "default": null
    },
    exportFooter: {
      type: String,
      "default": null
    },
    filterMatchMode: {
      type: String,
      "default": null
    },
    hidden: {
      type: Boolean,
      "default": false
    }
  },
  style: ColumnStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "Column",
  "extends": script$1,
  inject: ["$columns"],
  mounted: function mounted() {
    var _this$$columns;
    (_this$$columns = this.$columns) === null || _this$$columns === void 0 || _this$$columns.add(this.$);
  },
  unmounted: function unmounted() {
    var _this$$columns2;
    (_this$$columns2 = this.$columns) === null || _this$$columns2 === void 0 || _this$$columns2["delete"](this.$);
  },
  render: function render() {
    return null;
  }
};

export { script as default };
//# sourceMappingURL=column.esm-9on_7t8Z.mjs.map
