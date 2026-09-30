import { defineComponent as a, openBlock as l, createElementBlock as o, renderSlot as s, createCommentVNode as r, createElementVNode as t } from "vue";
import { _ as d } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const i = { class: "dual-sidebar-layout w-full h-full flex-1 flex flex-col min-h-0 overflow-hidden bg-muted transition-colors duration-500" }, n = {
  key: 0,
  class: "shrink-0 z-20 border-b border-border/50 bg-card shadow-sm relative"
}, f = { class: "flex-1 flex min-h-0 w-full h-full overflow-hidden relative" }, u = {
  key: 0,
  class: "flex flex-col h-full shrink-0 z-10 transition-all duration-300 overflow-hidden bg-transparent"
}, h = {
  key: 1,
  class: "flex flex-col h-full shrink-0 transition-all duration-300 overflow-hidden bg-transparent"
}, c = { class: "flex-1 min-h-0 w-full h-full overflow-hidden flex flex-col relative bg-transparent" }, _ = /* @__PURE__ */ a({
  __name: "DualSidebarLayout",
  setup(b) {
    return (e, m) => (l(), o("div", i, [
      e.$slots.header ? (l(), o("div", n, [
        s(e.$slots, "header", {}, void 0, !0)
      ])) : r("", !0),
      t("div", f, [
        e.$slots.rail ? (l(), o("aside", u, [
          s(e.$slots, "rail", {}, void 0, !0)
        ])) : r("", !0),
        e.$slots.sidebar ? (l(), o("aside", h, [
          s(e.$slots, "sidebar", {}, void 0, !0)
        ])) : r("", !0),
        t("main", c, [
          s(e.$slots, "default", {}, void 0, !0)
        ])
      ])
    ]));
  }
}), w = /* @__PURE__ */ d(_, [["__scopeId", "data-v-ddb13b2b"]]);
export {
  w as default
};
//# sourceMappingURL=DualSidebarLayout-BH2tOx6j.js.map
