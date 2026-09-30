import { defineComponent as d, inject as m, openBlock as o, createElementBlock as s, createElementVNode as n, Fragment as p, renderList as f, normalizeClass as h, toDisplayString as _, createCommentVNode as b } from "vue";
import { useRouter as g, useRoute as x } from "vue-router";
const k = { class: "module-header w-full bg-card border-b border-border-soft transition-colors" }, v = { class: "w-full h-11 px-10 flex items-center justify-between" }, V = { class: "h-full flex items-center gap-10" }, y = ["onClick"], C = { class: "text-[10px] font-black uppercase tracking-[0.3em] transition-all group-hover:translate-y-[-1px]" }, $ = {
  key: 0,
  class: "absolute bottom-0 left-0 right-0 h-[2px] bg-primary animate-in zoom-in-x duration-500"
}, E = /* @__PURE__ */ d({
  __name: "ModuleHeader",
  props: {
    items: {},
    modelValue: {}
  },
  emits: ["update:modelValue", "openCommandPalette"],
  setup(j, { emit: l }) {
    const a = l, r = g(), i = x();
    m("$superApp");
    const c = (t) => {
      if (a("update:modelValue", t), r) {
        const e = i.path.split("/").filter(Boolean).slice(0, 2).join("/");
        r.push(`/${e}/${t}`);
      }
    };
    return (t, u) => (o(), s("div", k, [
      n("div", v, [
        n("nav", V, [
          (o(!0), s(p, null, f(t.items, (e) => (o(), s("button", {
            key: e.id,
            onClick: (w) => c(e.id),
            class: h(["h-full flex items-center relative transition-all group", t.modelValue === e.id ? "text-foreground font-black" : "text-faint hover:text-foreground "])
          }, [
            n("span", C, _(e.label), 1),
            t.modelValue === e.id ? (o(), s("div", $)) : b("", !0)
          ], 10, y))), 128))
        ])
      ])
    ]));
  }
});
export {
  E as default
};
//# sourceMappingURL=ModuleHeader-BnrOpukT.js.map
