import { defineComponent as r, openBlock as a, createBlock as l, unref as n, normalizeProps as p, guardReactiveProps as s, withCtx as c, renderSlot as u } from "vue";
import { SelectValue as d } from "radix-vue";
const _ = /* @__PURE__ */ r({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (t, f) => (a(), l(n(d), p(s(o)), {
      default: c(() => [
        u(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  _ as default
};
//# sourceMappingURL=SelectValue-Bo98YXZE.js.map
