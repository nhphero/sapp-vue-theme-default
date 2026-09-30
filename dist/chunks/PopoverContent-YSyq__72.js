import { defineComponent as w, inject as f, ref as m, watch as v, onUnmounted as x, computed as g, openBlock as c, createBlock as y, Teleport as h, createVNode as C, Transition as E, withCtx as b, unref as z, createElementBlock as L, withModifiers as k, normalizeClass as $, normalizeStyle as B, renderSlot as _, createCommentVNode as H } from "vue";
const N = /* @__PURE__ */ w({
  __name: "PopoverContent",
  props: {
    class: {},
    align: {}
  },
  setup(d) {
    const i = d, { isOpen: r, align: l, triggerRef: a } = f("popover"), s = m({
      top: "0px",
      left: "0px",
      minWidth: "200px"
    }), t = () => {
      if (!a.value) return;
      const e = a.value.getBoundingClientRect(), n = i.align || l || "center";
      let o = e.left;
      n === "center" && (o = e.left + e.width / 2), n === "end" && (o = e.left + e.width);
      const u = window.innerHeight - e.bottom < 360 && e.top > window.innerHeight - e.bottom;
      s.value = u ? { top: "auto", bottom: `${window.innerHeight - e.top + 8}px`, left: `${o + window.scrollX}px`, minWidth: "200px" } : { top: `${e.bottom + window.scrollY + 8}px`, bottom: "auto", left: `${o + window.scrollX}px`, minWidth: "200px" };
    };
    v(r, (e) => {
      e ? (t(), window.addEventListener("scroll", t, !0), window.addEventListener("resize", t)) : (window.removeEventListener("scroll", t, !0), window.removeEventListener("resize", t));
    }), x(() => {
      window.removeEventListener("scroll", t, !0), window.removeEventListener("resize", t);
    });
    const p = g(() => {
      const e = i.align || l || "center";
      return e === "start" ? "" : e === "end" ? "-translate-x-full" : "-translate-x-1/2";
    });
    return (e, n) => (c(), y(h, { to: "body" }, [
      C(E, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-1 opacity-0",
        "enter-to-class": "translate-y-0 opacity-100",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-from-class": "translate-y-0 opacity-100",
        "leave-to-class": "translate-y-1 opacity-0"
      }, {
        default: b(() => [
          z(r) ? (c(), L("div", {
            key: 0,
            "data-portal": "",
            style: B(s.value),
            class: $([
              "pop fixed z-[9999] p-0 overflow-hidden outline-none",
              p.value,
              i.class
            ]),
            onClick: n[0] || (n[0] = k(() => {
            }, ["stop"]))
          }, [
            _(e.$slots, "default")
          ], 6)) : H("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
export {
  N as default
};
//# sourceMappingURL=PopoverContent-YSyq__72.js.map
