import { defineComponent as u, inject as f, computed as _, openBlock as t, createElementBlock as o, createVNode as s, TransitionGroup as g, withCtx as h, Fragment as x, renderList as C, normalizeClass as v, createBlock as w, resolveDynamicComponent as y, unref as i, createElementVNode as a, toDisplayString as k } from "vue";
import { AlertTriangle as b, Info as c, AlertCircle as T, CheckCircle2 as z, X as N } from "lucide-vue-next";
import { _ as B } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const E = {
  class: "fixed top-4 right-4 z-[99999] flex flex-col gap-2 w-full max-w-[380px] pointer-events-none",
  "aria-live": "polite"
}, I = { class: "body text-sm font-medium truncate" }, S = ["onClick"], A = /* @__PURE__ */ u({
  __name: "ToastContainer",
  setup(D) {
    const n = f("ui-store"), l = _(() => n?.toasts || []), m = { success: z, error: T, info: c, warning: b }, p = { success: "success", error: "danger", info: "info", warning: "warning" }, d = (r) => n?.removeToast(r);
    return (r, O) => (t(), o("div", E, [
      s(g, { name: "toast" }, {
        default: h(() => [
          (t(!0), o(x, null, C(l.value, (e) => (t(), o("div", {
            key: e.id,
            class: v(["alert pointer-events-auto shadow-lg items-center", p[e.type] || "info"]),
            role: "status"
          }, [
            (t(), w(y(m[e.type] || i(c)), {
              size: 16,
              "stroke-width": "2",
              "aria-hidden": "true"
            })),
            a("span", I, k(e.message), 1),
            a("button", {
              type: "button",
              class: "icon-btn -my-2 -mr-2",
              style: { width: "28px", height: "28px" },
              "aria-label": "Đóng",
              onClick: (V) => d(e.id)
            }, [
              s(i(N), { size: 14 })
            ], 8, S)
          ], 2))), 128))
        ]),
        _: 1
      })
    ]));
  }
}), L = /* @__PURE__ */ B(A, [["__scopeId", "data-v-df6688b9"]]);
export {
  L as default
};
//# sourceMappingURL=ToastContainer-JGwl3S_m.js.map
