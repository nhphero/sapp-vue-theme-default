import { defineComponent as v, computed as m, openBlock as o, createBlock as b, Transition as k, withCtx as g, createElementBlock as a, withModifiers as z, normalizeStyle as c, unref as p, createElementVNode as s, renderSlot as d, toDisplayString as u, createCommentVNode as l, createVNode as V } from "vue";
import { u as W } from "./cssScope-E8ixhRbx.js";
import { X as $ } from "lucide-vue-next";
import { _ as C } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const S = ["data-portal", "aria-label"], B = {
  key: 0,
  class: "flex items-start justify-between gap-4"
}, I = { class: "min-w-0" }, E = { class: "modal-title" }, M = {
  key: 0,
  class: "modal-desc"
}, N = { class: "modal-body flex flex-col min-h-0" }, D = {
  key: 1,
  class: "actions !mt-2"
}, K = /* @__PURE__ */ v({
  __name: "Modal",
  props: {
    show: { type: Boolean },
    modelValue: { type: Boolean },
    title: {},
    description: {},
    maxWidth: {},
    size: {},
    zIndex: { default: 200 }
  },
  emits: ["close", "update:modelValue"],
  setup(x, { emit: f }) {
    const h = W({ active: !0 }), t = x, n = f, y = m(() => !!(t.modelValue || t.show)), i = () => {
      n("update:modelValue", !1), n("close");
    }, r = {
      "max-w-sm": "400px",
      "max-w-md": "450px",
      "max-w-lg": "550px",
      "max-w-xl": "650px",
      "max-w-2xl": "800px",
      "max-w-3xl": "900px",
      "max-w-4xl": "1000px",
      sm: "400px",
      md: "550px",
      lg: "800px",
      xl: "1000px",
      full: "95vw"
    }, w = m(() => t.maxWidth ? r[t.maxWidth] ?? t.maxWidth.replace(/^max-w-\[(.+)\]$/, "$1") : r[t.size ?? "md"]), _ = (e) => {
      e.key === "Escape" && i();
    };
    return (e, T) => (o(), b(k, { name: "modal" }, {
      default: g(() => [
        y.value ? (o(), a("div", {
          key: 0,
          class: "overlay",
          "data-portal": p(h),
          style: c({ zIndex: t.zIndex }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": e.title,
          tabindex: "-1",
          onClick: z(i, ["self"]),
          onKeydown: _
        }, [
          s("div", {
            class: "modal flex flex-col gap-4",
            style: c({ maxWidth: w.value })
          }, [
            e.title || e.$slots.header ? (o(), a("div", B, [
              d(e.$slots, "header", {}, () => [
                s("div", I, [
                  s("h3", E, u(e.title), 1),
                  e.description ? (o(), a("p", M, u(e.description), 1)) : l("", !0)
                ])
              ], !0),
              s("button", {
                type: "button",
                class: "icon-btn -mr-2 -mt-1",
                "aria-label": "Đóng",
                onClick: i
              }, [
                V(p($), { size: 18 })
              ])
            ])) : l("", !0),
            s("div", N, [
              d(e.$slots, "default", {}, void 0, !0)
            ]),
            e.$slots.footer ? (o(), a("div", D, [
              d(e.$slots, "footer", {}, void 0, !0)
            ])) : l("", !0)
          ], 4)
        ], 44, S)) : l("", !0)
      ]),
      _: 3
    }));
  }
}), q = /* @__PURE__ */ C(K, [["__scopeId", "data-v-0b8043df"]]);
export {
  q as default
};
//# sourceMappingURL=Modal-BVG4U5yl.js.map
