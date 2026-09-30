import { defineComponent as l, openBlock as c, createBlock as d, unref as e, withCtx as o, createVNode as i, mergeProps as p, renderSlot as f } from "vue";
import { useForwardPropsEmits as u, SelectPortal as m, SelectContent as w, SelectViewport as h } from "radix-vue";
import { cn as y } from "../index.js";
const S = /* @__PURE__ */ l({
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(s, { emit: n }) {
    const t = s, a = u(t, n);
    return (r, B) => (c(), d(e(m), null, {
      default: o(() => [
        i(e(w), p(e(a), {
          "data-portal": "",
          class: e(y)("pop relative z-[500] max-h-[280px] overflow-hidden min-w-[var(--radix-select-trigger-width)]", t.class)
        }), {
          default: o(() => [
            i(e(h), null, {
              default: o(() => [
                f(r.$slots, "default")
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
});
export {
  S as default
};
//# sourceMappingURL=SelectContent-tzsySqUy.js.map
