import { defineComponent as c, openBlock as n, createElementBlock as o, normalizeClass as l, unref as p, createElementVNode as t, renderSlot as s, toDisplayString as i, createCommentVNode as d } from "vue";
import { cn as m } from "../index.js";
const f = { class: "flex items-center gap-2 min-w-0" }, u = { class: "title truncate" }, _ = {
  key: 0,
  class: "text-xs text-faint truncate"
}, h = { class: "flex items-center gap-1" }, C = /* @__PURE__ */ c({
  __name: "SectionHeader",
  props: {
    title: {},
    description: {},
    class: {}
  },
  setup(r) {
    const a = r;
    return (e, k) => (n(), o("div", {
      class: l(p(m)("section-header shrink-0 w-full", a.class))
    }, [
      t("div", f, [
        s(e.$slots, "icon"),
        s(e.$slots, "title", {}, () => [
          t("span", u, i(e.title), 1),
          e.description ? (n(), o("span", _, "· " + i(e.description), 1)) : d("", !0)
        ])
      ]),
      t("div", h, [
        s(e.$slots, "actions")
      ])
    ], 2));
  }
});
export {
  C as default
};
//# sourceMappingURL=SectionHeader-C8ufun_t.js.map
