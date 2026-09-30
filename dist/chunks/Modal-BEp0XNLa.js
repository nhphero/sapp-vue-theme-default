import { defineComponent as w, computed as m, openBlock as o, createBlock as _, Transition as v, withCtx as k, createElementBlock as l, withModifiers as b, normalizeStyle as c, createElementVNode as a, renderSlot as d, toDisplayString as p, createCommentVNode as s, createVNode as g, unref as z } from "vue";
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
    const t = x, n = u, f = m(() => !!(t.modelValue || t.show)), i = () => {
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
    }, h = m(() => t.maxWidth ? r[t.maxWidth] ?? t.maxWidth.replace(/^max-w-\[(.+)\]$/, "$1") : r[t.size ?? "md"]), y = (e) => {
      e.key === "Escape" && i();
    };
    return (e, D) => (o(), _(v, { name: "modal" }, {
      default: k(() => [
        f.value ? (o(), l("div", {
          key: 0,
          class: "overlay",
          "data-portal": "",
          style: c({ zIndex: t.zIndex }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": e.title,
          tabindex: "-1",
          onClick: b(i, ["self"]),
          onKeydown: y
        }, [
          a("div", {
            class: "modal flex flex-col gap-4",
            style: c({ maxWidth: h.value })
          }, [
            e.title || e.$slots.header ? (o(), l("div", B, [
              d(e.$slots, "header", {}, () => [
                a("div", C, [
                  a("h3", I, p(e.title), 1),
                  e.description ? (o(), l("p", S, p(e.description), 1)) : s("", !0)
                ])
              ], !0),
              a("button", {
                type: "button",
                class: "icon-btn -mr-2 -mt-1",
                "aria-label": "Đóng",
                onClick: i
              }, [
                g(z(V), { size: 18 })
              ])
            ])) : s("", !0),
            a("div", E, [
              d(e.$slots, "default", {}, void 0, !0)
            ]),
            e.$slots.footer ? (o(), l("div", M, [
              d(e.$slots, "footer", {}, void 0, !0)
            ])) : s("", !0)
          ], 4)
        ], 44, $)) : s("", !0)
      ]),
      _: 3
    }));
  }
}), H = /* @__PURE__ */ W(N, [["__scopeId", "data-v-77a76ece"]]);
export {
  H as default
};
//# sourceMappingURL=Modal-BEp0XNLa.js.map
