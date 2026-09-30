import { defineComponent as r, openBlock as n, createElementBlock as t, normalizeClass as a, unref as c, renderSlot as l } from "vue";
import { cn as p } from "../index.js";
const d = /* @__PURE__ */ r({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const o = e;
    return (s, m) => (n(), t("tbody", {
      class: a(c(p)(o.class))
    }, [
      l(s.$slots, "default")
    ], 2));
  }
});
export {
  d as _
};
//# sourceMappingURL=TableBody.vue_vue_type_script_setup_true_lang-DtbGt7Iu.js.map
