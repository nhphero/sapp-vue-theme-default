import { defineComponent as s, openBlock as a, createElementBlock as n, normalizeClass as r, unref as l, renderSlot as c } from "vue";
import { cn as p } from "../index.js";
const d = ["data-state"], f = /* @__PURE__ */ s({
  __name: "TableRow",
  props: {
    class: {},
    selected: { type: Boolean }
  },
  setup(t) {
    const o = t;
    return (e, i) => (a(), n("tr", {
      "data-state": e.selected ? "selected" : void 0,
      class: r(l(p)("transition-colors", o.class))
    }, [
      c(e.$slots, "default")
    ], 10, d));
  }
});
export {
  f as _
};
//# sourceMappingURL=TableRow.vue_vue_type_script_setup_true_lang-C-QiXqG1.js.map
