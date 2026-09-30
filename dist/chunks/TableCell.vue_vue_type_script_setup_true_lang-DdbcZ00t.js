import { defineComponent as s, openBlock as r, createElementBlock as t, normalizeClass as l, unref as a, renderSlot as c } from "vue";
import { cn as m } from "../index.js";
const _ = /* @__PURE__ */ s({
  __name: "TableCell",
  props: {
    class: {},
    num: { type: Boolean }
  },
  setup(n) {
    const e = n;
    return (o, p) => (r(), t("td", {
      class: l(a(m)(e.num && "num", e.class))
    }, [
      c(o.$slots, "default")
    ], 2));
  }
});
export {
  _
};
//# sourceMappingURL=TableCell.vue_vue_type_script_setup_true_lang-DdbcZ00t.js.map
