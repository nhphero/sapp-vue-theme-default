import { defineComponent as u, computed as l, openBlock as o, createElementBlock as s, normalizeClass as f, unref as a, createBlock as v, resolveDynamicComponent as k, createElementVNode as y, toDisplayString as b, createCommentVNode as n, renderSlot as g, createVNode as h } from "vue";
import { AlertCircle as C, AlertTriangle as _, CheckCircle2 as x, Info as B, X as w } from "lucide-vue-next";
import { cn as z } from "../index.js";
const A = { class: "body" }, N = { key: 0 }, V = { key: 1 }, I = /* @__PURE__ */ u({
  __name: "Alert",
  props: {
    variant: {},
    class: {},
    title: {},
    dismissible: { type: Boolean }
  },
  emits: ["close"],
  setup(c, { emit: m }) {
    const t = c, d = m, r = l(() => {
      const e = t.variant ?? "info";
      return e === "error" || e === "destructive" ? "danger" : e;
    }), p = l(() => ({ info: B, success: x, warning: _, danger: C })[r.value]);
    return (e, i) => (o(), s("div", {
      class: f(a(z)("alert", r.value, t.class)),
      role: "status"
    }, [
      (o(), v(k(p.value), {
        size: 16,
        "stroke-width": "2",
        "aria-hidden": "true"
      })),
      y("span", A, [
        t.title ? (o(), s("b", N, b(t.title), 1)) : n("", !0),
        e.$slots.default ? (o(), s("small", V, [
          g(e.$slots, "default")
        ])) : n("", !0)
      ]),
      t.dismissible ? (o(), s("button", {
        key: 0,
        type: "button",
        class: "icon-btn",
        style: { width: "28px", height: "28px", margin: "-4px -8px -4px 0" },
        "aria-label": "Đóng",
        onClick: i[0] || (i[0] = ($) => d("close"))
      }, [
        h(a(w), { size: 14 })
      ])) : n("", !0)
    ], 2));
  }
});
export {
  I as default
};
//# sourceMappingURL=Alert-DylOuBAF.js.map
