import { defineComponent as t, openBlock as n, createElementBlock as c, normalizeClass as s, unref as l, createElementVNode as p, renderSlot as m } from "vue";
import { cn as a } from "../index.js";
const _ = /* @__PURE__ */ t({
  __name: "Table",
  props: {
    class: {},
    wrapClass: {}
  },
  setup(r) {
    const e = r;
    return (o, f) => (n(), c("div", {
      class: s(l(a)("table-wrap w-full", e.wrapClass))
    }, [
      p("table", {
        class: s(l(a)("w-full", e.class))
      }, [
        m(o.$slots, "default")
      ], 2)
    ], 2));
  }
});
export {
  _
};
//# sourceMappingURL=Table.vue_vue_type_script_setup_true_lang-B6hTJqjQ.js.map
