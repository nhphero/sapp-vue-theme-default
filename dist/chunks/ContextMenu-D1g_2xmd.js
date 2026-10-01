import { defineComponent as C, inject as z, ref as a, onMounted as E, onUnmounted as $, openBlock as s, createBlock as m, Teleport as L, createElementBlock as l, withModifiers as v, unref as M, createElementVNode as c, normalizeStyle as B, Fragment as S, renderList as A, normalizeClass as D, resolveDynamicComponent as R, createCommentVNode as p, toDisplayString as f } from "vue";
import { u as j } from "./cssScope-E8ixhRbx.js";
const H = ["data-portal"], N = ["disabled", "aria-disabled", "onClick"], T = { class: "flex items-center gap-2" }, V = {
  key: 0,
  class: "text-xs text-faint font-mono"
}, U = /* @__PURE__ */ C({
  __name: "ContextMenu",
  props: {
    options: {}
  },
  setup(w, { expose: h }) {
    const x = j(), y = w, _ = z("$superApp"), d = a(!1), i = a(0), r = a(0), u = a(null), b = (o) => {
      o.preventDefault(), d.value = !0, i.value = o.clientX, r.value = o.clientY, _.$vue.nextTick(() => {
        if (!u.value) return;
        const t = u.value.getBoundingClientRect();
        i.value + t.width > window.innerWidth && (i.value = window.innerWidth - t.width - 10), r.value + t.height > window.innerHeight && (r.value = window.innerHeight - t.height - 10);
      });
    }, n = () => {
      d.value = !1;
    }, g = (o) => {
      o(), n();
    };
    return h({ open: b, close: n }), E(() => {
      window.addEventListener("scroll", n, !0), window.addEventListener("resize", n);
    }), $(() => {
      window.removeEventListener("scroll", n, !0), window.removeEventListener("resize", n);
    }), (o, t) => (s(), m(L, { to: "body" }, [
      d.value ? (s(), l("div", {
        key: 0,
        class: "fixed inset-0 z-[9999]",
        "data-portal": M(x),
        onMousedown: n,
        onContextmenu: v(n, ["prevent"])
      }, [
        c("div", {
          ref_key: "menuRef",
          ref: u,
          class: "pop absolute min-w-[200px]",
          role: "menu",
          style: B({ left: `${i.value}px`, top: `${r.value}px` }),
          onMousedown: t[0] || (t[0] = v(() => {
          }, ["stop"]))
        }, [
          (s(!0), l(S, null, A(y.options, (e, k) => (s(), l("button", {
            key: k,
            type: "button",
            role: "menuitem",
            class: D(["pop-item justify-between", { danger: e.variant === "danger", "text-primary": e.variant === "primary" }]),
            disabled: e.disabled,
            "aria-disabled": e.disabled || void 0,
            onClick: (W) => g(e.action)
          }, [
            c("span", T, [
              e.icon ? (s(), m(R(e.icon), {
                key: 0,
                size: 14,
                class: "text-faint"
              })) : p("", !0),
              c("span", null, f(e.label), 1)
            ]),
            e.shortcut ? (s(), l("span", V, f(e.shortcut), 1)) : p("", !0)
          ], 10, N))), 128))
        ], 36)
      ], 40, H)) : p("", !0)
    ]));
  }
});
export {
  U as default
};
//# sourceMappingURL=ContextMenu-D1g_2xmd.js.map
