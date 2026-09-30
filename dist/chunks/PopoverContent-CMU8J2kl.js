import { defineComponent as u, inject as f, ref as v, watch as m, onUnmounted as w, computed as y, openBlock as c, createBlock as x, Teleport as g, createVNode as C, Transition as h, withCtx as E, unref as z, createElementBlock as L, withModifiers as k, normalizeClass as B, normalizeStyle as _, renderSlot as $, createCommentVNode as b } from "vue";
const P = /* @__PURE__ */ u({
  __name: "PopoverContent",
  props: {
    class: {},
    align: {}
  },
  setup(d) {
    const o = d, { isOpen: a, align: i, triggerRef: l } = f("popover"), s = v({
      top: "0px",
      left: "0px",
      minWidth: "200px"
    }), t = () => {
      if (!l.value) return;
      const e = l.value.getBoundingClientRect(), n = o.align || i || "center";
      let r = e.left;
      n === "center" && (r = e.left + e.width / 2), n === "end" && (r = e.left + e.width), s.value = {
        top: `${e.bottom + window.scrollY + 8}px`,
        left: `${r + window.scrollX}px`,
        minWidth: "200px"
      };
    };
    m(a, (e) => {
      e ? (t(), window.addEventListener("scroll", t, !0), window.addEventListener("resize", t)) : (window.removeEventListener("scroll", t, !0), window.removeEventListener("resize", t));
    }), w(() => {
      window.removeEventListener("scroll", t, !0), window.removeEventListener("resize", t);
    });
    const p = y(() => {
      const e = o.align || i || "center";
      return e === "start" ? "" : e === "end" ? "-translate-x-full" : "-translate-x-1/2";
    });
    return (e, n) => (c(), x(g, { to: "body" }, [
      C(h, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-1 opacity-0",
        "enter-to-class": "translate-y-0 opacity-100",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-from-class": "translate-y-0 opacity-100",
        "leave-to-class": "translate-y-1 opacity-0"
      }, {
        default: E(() => [
          z(a) ? (c(), L("div", {
            key: 0,
            "data-portal": "",
            style: _(s.value),
            class: B([
              "pop fixed z-[9999] p-0 overflow-hidden outline-none",
              p.value,
              o.class
            ]),
            onClick: n[0] || (n[0] = k(() => {
            }, ["stop"]))
          }, [
            $(e.$slots, "default")
          ], 6)) : b("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
export {
  P as default
};
//# sourceMappingURL=PopoverContent-CMU8J2kl.js.map
