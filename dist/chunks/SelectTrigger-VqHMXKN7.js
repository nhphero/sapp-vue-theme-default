import { defineComponent as c, openBlock as l, createBlock as p, unref as e, mergeProps as i, withCtx as r, renderSlot as f, createVNode as o } from "vue";
import { useForwardProps as d, SelectTrigger as m, SelectIcon as u } from "radix-vue";
import { ChevronDown as h } from "lucide-vue-next";
import { cn as _ } from "../index.js";
const S = /* @__PURE__ */ c({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(s) {
    const t = s, a = d(t);
    return (n, g) => (l(), p(e(m), i(e(a), {
      class: e(_)("input flex items-center justify-between gap-2 text-left cursor-pointer [&>span]:truncate data-[placeholder]:text-faint", t.class)
    }), {
      default: r(() => [
        f(n.$slots, "default"),
        o(e(u), { "as-child": "" }, {
          default: r(() => [
            o(e(h), {
              size: 14,
              class: "shrink-0 text-faint"
            })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  S as default
};
//# sourceMappingURL=SelectTrigger-VqHMXKN7.js.map
