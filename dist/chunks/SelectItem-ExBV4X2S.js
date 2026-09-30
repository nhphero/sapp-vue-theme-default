import { defineComponent as c, openBlock as n, createBlock as p, unref as e, mergeProps as m, withCtx as t, createVNode as o, renderSlot as d } from "vue";
import { useForwardProps as u, SelectItem as i, SelectItemText as f, SelectItemIndicator as _ } from "radix-vue";
import { Check as x } from "lucide-vue-next";
import { cn as I } from "../index.js";
const w = /* @__PURE__ */ c({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(a) {
    const r = a, l = u(r);
    return (s, S) => (n(), p(e(i), m(e(l), {
      class: e(I)("pop-item outline-none", r.class)
    }), {
      default: t(() => [
        o(e(f), null, {
          default: t(() => [
            d(s.$slots, "default")
          ]),
          _: 3
        }),
        o(e(_), { class: "ml-auto text-primary" }, {
          default: t(() => [
            o(e(x), { size: 14 })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  w as default
};
//# sourceMappingURL=SelectItem-ExBV4X2S.js.map
