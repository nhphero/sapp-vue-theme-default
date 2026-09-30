import { defineComponent as s, openBlock as n, createElementBlock as t, normalizeClass as a, unref as c, renderSlot as l } from "vue";
import { cn as p } from "../index.js";
const d = /* @__PURE__ */ s({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const o = e;
    return (r, m) => (n(), t("thead", {
      class: a(c(p)(o.class))
    }, [
      l(r.$slots, "default")
    ], 2));
  }
});
export {
  d as _
};
//# sourceMappingURL=TableHeader.vue_vue_type_script_setup_true_lang-C0Hh1Mmv.js.map
