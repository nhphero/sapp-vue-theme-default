import { defineComponent as _, inject as C, ref as a, onMounted as z, onUnmounted as E, openBlock as i, createBlock as m, Teleport as $, createElementBlock as l, withModifiers as v, createElementVNode as c, normalizeStyle as L, Fragment as M, renderList as B, normalizeClass as A, resolveDynamicComponent as D, createCommentVNode as p, toDisplayString as f } from "vue";
const R = ["disabled", "aria-disabled", "onClick"], j = { class: "flex items-center gap-2" }, H = {
  key: 0,
  class: "text-xs text-faint font-mono"
}, T = /* @__PURE__ */ _({
  __name: "ContextMenu",
  props: {
    options: {}
  },
  setup(w, { expose: x }) {
    const h = w, y = C("$superApp"), d = a(!1), s = a(0), r = a(0), u = a(null), b = (o) => {
      o.preventDefault(), d.value = !0, s.value = o.clientX, r.value = o.clientY, y.$vue.nextTick(() => {
        if (!u.value) return;
        const t = u.value.getBoundingClientRect();
        s.value + t.width > window.innerWidth && (s.value = window.innerWidth - t.width - 10), r.value + t.height > window.innerHeight && (r.value = window.innerHeight - t.height - 10);
      });
    }, n = () => {
      d.value = !1;
    }, g = (o) => {
      o(), n();
    };
    return x({ open: b, close: n }), z(() => {
      window.addEventListener("scroll", n, !0), window.addEventListener("resize", n);
    }), E(() => {
      window.removeEventListener("scroll", n, !0), window.removeEventListener("resize", n);
    }), (o, t) => (i(), m($, { to: "body" }, [
      d.value ? (i(), l("div", {
        key: 0,
        class: "fixed inset-0 z-[9999]",
        "data-portal": "",
        onMousedown: n,
        onContextmenu: v(n, ["prevent"])
      }, [
        c("div", {
          ref_key: "menuRef",
          ref: u,
          class: "pop absolute min-w-[200px]",
          role: "menu",
          style: L({ left: `${s.value}px`, top: `${r.value}px` }),
          onMousedown: t[0] || (t[0] = v(() => {
          }, ["stop"]))
        }, [
          (i(!0), l(M, null, B(h.options, (e, k) => (i(), l("button", {
            key: k,
            type: "button",
            role: "menuitem",
            class: A(["pop-item justify-between", { danger: e.variant === "danger", "text-primary": e.variant === "primary" }]),
            disabled: e.disabled,
            "aria-disabled": e.disabled || void 0,
            onClick: (N) => g(e.action)
          }, [
            c("span", j, [
              e.icon ? (i(), m(D(e.icon), {
                key: 0,
                size: 14,
                class: "text-faint"
              })) : p("", !0),
              c("span", null, f(e.label), 1)
            ]),
            e.shortcut ? (i(), l("span", H, f(e.shortcut), 1)) : p("", !0)
          ], 10, R))), 128))
        ], 36)
      ], 32)) : p("", !0)
    ]));
  }
});
export {
  T as default
};
//# sourceMappingURL=ContextMenu-B4gNeut2.js.map
