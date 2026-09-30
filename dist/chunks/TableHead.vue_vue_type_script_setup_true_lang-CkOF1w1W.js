import { defineComponent as s, openBlock as r, createElementBlock as t, normalizeClass as a, unref as l, renderSlot as c } from "vue";
import { cn as m } from "../index.js";
const _ = /* @__PURE__ */ s({
  __name: "TableHead",
  props: {
    class: {},
    num: { type: Boolean }
  },
  setup(n) {
    const e = n;
    return (o, p) => (r(), t("th", {
      class: a(l(m)(e.num && "num", e.class))
    }, [
      c(o.$slots, "default")
    ], 2));
  }
});
export {
  _
};
//# sourceMappingURL=TableHead.vue_vue_type_script_setup_true_lang-CkOF1w1W.js.map
