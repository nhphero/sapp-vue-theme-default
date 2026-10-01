import { defineComponent as m, inject as v, ref as x, watch as g, onUnmounted as y, computed as h, openBlock as c, createBlock as C, Teleport as E, createVNode as b, Transition as z, withCtx as L, unref as p, createElementBlock as _, withModifiers as k, normalizeClass as $, normalizeStyle as B, renderSlot as S, createCommentVNode as H } from "vue";
import { u as W } from "./cssScope-E8ixhRbx.js";
const N = ["data-portal"], T = /* @__PURE__ */ m({
  __name: "PopoverContent",
  props: {
    class: {},
    align: {}
  },
  setup(d) {
    const u = W(), i = d, { isOpen: r, align: s, triggerRef: a } = v("popover"), l = x({
      top: "0px",
      left: "0px",
      minWidth: "200px"
    }), t = () => {
      if (!a.value) return;
      const e = a.value.getBoundingClientRect(), o = i.align || s || "center";
      let n = e.left;
      o === "center" && (n = e.left + e.width / 2), o === "end" && (n = e.left + e.width);
      const w = window.innerHeight - e.bottom < 360 && e.top > window.innerHeight - e.bottom;
      l.value = w ? { top: "auto", bottom: `${window.innerHeight - e.top + 8}px`, left: `${n + window.scrollX}px`, minWidth: "200px" } : { top: `${e.bottom + window.scrollY + 8}px`, bottom: "auto", left: `${n + window.scrollX}px`, minWidth: "200px" };
    };
    g(r, (e) => {
      e ? (t(), window.addEventListener("scroll", t, !0), window.addEventListener("resize", t)) : (window.removeEventListener("scroll", t, !0), window.removeEventListener("resize", t));
    }), y(() => {
      window.removeEventListener("scroll", t, !0), window.removeEventListener("resize", t);
    });
    const f = h(() => {
      const e = i.align || s || "center";
      return e === "start" ? "" : e === "end" ? "-translate-x-full" : "-translate-x-1/2";
    });
    return (e, o) => (c(), C(E, { to: "body" }, [
      b(z, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-1 opacity-0",
        "enter-to-class": "translate-y-0 opacity-100",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-from-class": "translate-y-0 opacity-100",
        "leave-to-class": "translate-y-1 opacity-0"
      }, {
        default: L(() => [
          p(r) ? (c(), _("div", {
            key: 0,
            "data-portal": p(u),
            style: B(l.value),
            class: $([
              "pop fixed z-[9999] p-0 overflow-hidden outline-none",
              f.value,
              i.class
            ]),
            onClick: o[0] || (o[0] = k(() => {
            }, ["stop"]))
          }, [
            S(e.$slots, "default")
          ], 14, N)) : H("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
export {
  T as default
};
//# sourceMappingURL=PopoverContent-0CCuXPfd.js.map
