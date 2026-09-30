import { defineComponent as u, openBlock as l, createElementBlock as s, Fragment as f, renderList as m, createBlock as n, normalizeClass as t, withCtx as p, createElementVNode as r, resolveDynamicComponent as g, toDisplayString as d, normalizeStyle as h } from "vue";
import { _ as b } from "./Card.vue_vue_type_script_setup_true_lang-1zBSE2LS.js";
const x = { class: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 select-none w-full" }, _ = { class: "flex flex-col justify-between h-full" }, v = { class: "flex items-center justify-between" }, w = { class: "flex flex-col gap-1" }, y = { class: "h-1 w-full bg-muted rounded-full overflow-hidden mt-1" }, z = /* @__PURE__ */ u({
  __name: "ErpEntitySelector",
  props: {
    items: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(k, { emit: a }) {
    const i = a, c = (o) => {
      i("update:modelValue", o);
    };
    return (o, V) => (l(), s("div", x, [
      (l(!0), s(f, null, m(o.items, (e) => (l(), n(b, {
        key: e.id,
        onClick: (C) => c(e.id),
        class: t(["flex flex-col p-6 bg-card border rounded-2xl transition-all cursor-pointer group shadow-sm hover:shadow-md h-32", o.modelValue === e.id ? "border-foreground  ring-2 ring-border " : "border-border-soft  hover:border-border "])
      }, {
        default: p(() => [
          r("div", _, [
            r("div", v, [
              r("div", {
                class: t(["w-10 h-10 rounded-xl bg-muted flex items-center justify-center transition-colors group-hover:scale-110 duration-500", { "bg-primary text-primary-foreground  shadow-lg shadow-primary/20": o.modelValue === e.id }])
              }, [
                (l(), n(g(e.icon), {
                  size: 20,
                  "stroke-width": "2.5"
                }))
              ], 2),
              r("span", {
                class: t(["text-[28px] font-mono tabular-nums font-black tracking-tighter leading-none", o.modelValue === e.id ? "text-foreground " : "text-faint "])
              }, d(e.count), 3)
            ]),
            r("div", w, [
              r("span", {
                class: t(["text-[10px] font-black uppercase tracking-[0.2em] text-faint group-hover:text-foreground transition-colors", { "text-foreground ": o.modelValue === e.id }])
              }, d(e.label), 3),
              r("div", y, [
                r("div", {
                  class: "h-full bg-primary transition-all duration-700 rounded-full",
                  style: h({ width: o.modelValue === e.id ? "100%" : "20%" })
                }, null, 4)
              ])
            ])
          ])
        ]),
        _: 2
      }, 1032, ["onClick", "class"]))), 128))
    ]));
  }
});
export {
  z as default
};
//# sourceMappingURL=ErpEntitySelector-XLEStx_M.js.map
