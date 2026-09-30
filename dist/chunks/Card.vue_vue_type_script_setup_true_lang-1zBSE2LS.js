import { defineComponent as l, openBlock as o, createElementBlock as p, normalizeClass as n, unref as t, renderSlot as a } from "vue";
import { cn as c } from "../index.js";
const z = /* @__PURE__ */ l({
  __name: "Card",
  props: {
    class: {},
    size: {}
  },
  setup(e) {
    const s = e;
    return (r, i) => (o(), p("div", {
      class: n(t(c)(
        "card",
        {
          "p-xs": s.size === "xs",
          "p-sm": s.size === "sm",
          "p-md": s.size === "md",
          "p-lg": s.size === "lg",
          "p-xl": s.size === "xl",
          "p-2xl": s.size === "2xl"
        },
        s.class
      ))
    }, [
      a(r.$slots, "default")
    ], 2));
  }
});
export {
  z as _
};
//# sourceMappingURL=Card.vue_vue_type_script_setup_true_lang-1zBSE2LS.js.map
