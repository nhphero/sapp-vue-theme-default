import { defineComponent as i, openBlock as o, createElementBlock as r, normalizeStyle as n, normalizeClass as f, renderSlot as t, createCommentVNode as s, createElementVNode as l } from "vue";
import { _ as u } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const h = { class: "module-page-layout w-full h-full flex-1 flex min-h-0 overflow-hidden bg-muted transition-colors duration-500" }, c = { class: "flex-1 flex flex-col min-w-0 h-full relative overflow-hidden" }, b = {
  key: 0,
  class: "shrink-0 z-10 border-b border-border-soft bg-white/80 backdrop-blur-md"
}, m = { class: "flex-1 min-h-0 w-full h-full relative overflow-hidden flex flex-col" }, p = {
  key: 1,
  class: "shrink-0 px-8 py-4 border-t border-border-soft bg-card z-10"
}, _ = /* @__PURE__ */ i({
  __name: "ModulePageLayout",
  props: {
    sidebarWidth: { type: Number, default: 320 }
  },
  setup(a) {
    const d = a;
    return (e, v) => (o(), r("div", h, [
      e.$slots.sidebar ? (o(), r("aside", {
        key: 0,
        class: f(["shrink-0 bg-card flex flex-col h-full z-10 overflow-hidden transition-[width] duration-200 ease-out", d.sidebarWidth > 0 ? "border-r border-border-soft " : "border-r-0"]),
        style: n({ width: `${Math.max(0, d.sidebarWidth)}px` })
      }, [
        t(e.$slots, "sidebar", {}, void 0, !0)
      ], 6)) : s("", !0),
      l("div", c, [
        e.$slots.header ? (o(), r("header", b, [
          t(e.$slots, "header", {}, void 0, !0)
        ])) : s("", !0),
        l("main", m, [
          t(e.$slots, "default", {}, void 0, !0)
        ]),
        e.$slots["footer-actions"] ? (o(), r("footer", p, [
          t(e.$slots, "footer-actions", {}, void 0, !0)
        ])) : s("", !0)
      ])
    ]));
  }
}), k = /* @__PURE__ */ u(_, [["__scopeId", "data-v-048430fd"]]);
export {
  k as default
};
//# sourceMappingURL=ModulePageLayout-CuSYrWur.js.map
