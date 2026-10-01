import { defineComponent as c, openBlock as p, createBlock as d, unref as e, withCtx as o, createVNode as s, mergeProps as u, renderSlot as f } from "vue";
import { u as m } from "./cssScope-E8ixhRbx.js";
import { useForwardPropsEmits as w, SelectPortal as h, SelectContent as y, SelectViewport as g } from "radix-vue";
import { cn as B } from "../index.js";
const k = /* @__PURE__ */ c({
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
  setup(a, { emit: i }) {
    const n = m(), t = a, r = w(t, i);
    return (l, _) => (p(), d(e(h), null, {
      default: o(() => [
        s(e(y), u(e(r), {
          "data-portal": e(n),
          class: e(B)("pop relative z-[500] max-h-[280px] overflow-hidden min-w-[var(--radix-select-trigger-width)]", t.class)
        }), {
          default: o(() => [
            s(e(g), null, {
              default: o(() => [
                f(l.$slots, "default")
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 16, ["data-portal", "class"])
      ]),
      _: 3
    }));
  }
});
export {
  k as default
};
//# sourceMappingURL=SelectContent-DJPU2Dbi.js.map
