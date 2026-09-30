import { defineComponent as w, computed as r, openBlock as o, createBlock as _, Transition as v, withCtx as b, createElementBlock as s, withModifiers as k, normalizeStyle as c, createElementVNode as l, renderSlot as d, toDisplayString as p, createCommentVNode as a, createVNode as g, unref as z } from "vue";
import { X as V } from "lucide-vue-next";
import { _ as W } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const $ = ["aria-label"], B = {
  key: 0,
  class: "flex items-start justify-between gap-4"
}, C = { class: "min-w-0" }, I = { class: "modal-title" }, S = {
  key: 0,
  class: "modal-desc"
}, E = { class: "modal-body flex flex-col min-h-0" }, M = {
  key: 1,
  class: "actions !mt-2"
}, N = /* @__PURE__ */ w({
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
  setup(x, { emit: u }) {
    const t = x, n = u, f = r(() => !!(t.modelValue || t.show)), i = () => {
      n("update:modelValue", !1), n("close");
    }, m = {
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
    }, h = r(() => t.maxWidth ? m[t.maxWidth] ?? t.maxWidth.replace(/^max-w-\[(.+)\]$/, "$1") : m[t.size ?? "md"]), y = (e) => {
      e.key === "Escape" && i();
    };
    return (e, D) => (o(), _(v, { name: "modal" }, {
      default: b(() => [
        f.value ? (o(), s("div", {
          key: 0,
          class: "overlay",
          style: c({ zIndex: t.zIndex }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": e.title,
          tabindex: "-1",
          onClick: k(i, ["self"]),
          onKeydown: y
        }, [
          l("div", {
            class: "modal flex flex-col gap-4",
            style: c({ maxWidth: h.value })
          }, [
            e.title || e.$slots.header ? (o(), s("div", B, [
              d(e.$slots, "header", {}, () => [
                l("div", C, [
                  l("h3", I, p(e.title), 1),
                  e.description ? (o(), s("p", S, p(e.description), 1)) : a("", !0)
                ])
              ], !0),
              l("button", {
                type: "button",
                class: "icon-btn -mr-2 -mt-1",
                "aria-label": "Đóng",
                onClick: i
              }, [
                g(z(V), { size: 18 })
              ])
            ])) : a("", !0),
            l("div", E, [
              d(e.$slots, "default", {}, void 0, !0)
            ]),
            e.$slots.footer ? (o(), s("div", M, [
              d(e.$slots, "footer", {}, void 0, !0)
            ])) : a("", !0)
          ], 4)
        ], 44, $)) : a("", !0)
      ]),
      _: 3
    }));
  }
}), H = /* @__PURE__ */ W(N, [["__scopeId", "data-v-3a19f5b9"]]);
export {
  H as default
};
//# sourceMappingURL=Modal-Bh_xjaON.js.map
