import { defineComponent as V, ref as w, watch as M, onMounted as P, openBlock as n, createElementBlock as s, toDisplayString as u, createCommentVNode as p, createElementVNode as r, Fragment as C, renderList as N, normalizeStyle as U, withDirectives as i, vModelCheckbox as E, vModelText as f, createVNode as m, unref as h, createTextVNode as L } from "vue";
import { Trash2 as B, Plus as I } from "lucide-vue-next";
import { _ as S } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const T = { class: "flex flex-col gap-3 w-full" }, z = {
  key: 0,
  class: "text-[10px] font-black uppercase tracking-[0.2em] text-faint mb-1"
}, D = { class: "flex flex-col gap-2" }, j = { class: "flex items-center gap-2 shrink-0" }, F = ["onUpdate:modelValue"], $ = { class: "flex-1 grid grid-cols-2 gap-2" }, A = { class: "relative" }, K = ["onUpdate:modelValue", "placeholder"], O = { class: "relative" }, q = ["onUpdate:modelValue", "placeholder"], G = ["onClick"], H = {
  key: 0,
  class: "text-[9px] text-faint italic text-center py-4 opacity-60"
}, J = /* @__PURE__ */ V({
  __name: "ListManager",
  props: {
    modelValue: {},
    title: {},
    keyPlaceholder: {},
    valuePlaceholder: {},
    addButtonLabel: {}
  },
  emits: ["update:modelValue"],
  setup(b, { emit: v }) {
    const g = b, x = v, l = w([]), y = () => {
      const e = [], t = Object.entries(g.modelValue || {});
      t.length > 0 && t.forEach(([o, d]) => {
        e.push({
          id: Math.random().toString(36).substring(7),
          key: o,
          value: d,
          enabled: !0
        });
      }), l.value = e;
    }, c = () => {
      const e = {};
      l.value.forEach((t) => {
        t.enabled && t.key.trim() && (e[t.key.trim()] = t.value);
      }), x("update:modelValue", e);
    }, _ = () => {
      l.value.push({
        id: Math.random().toString(36).substring(7),
        key: "",
        value: "",
        enabled: !0
      });
    }, k = (e) => {
      l.value = l.value.filter((t) => t.id !== e), c();
    };
    return M(l, c, { deep: !0 }), P(y), (e, t) => (n(), s("div", T, [
      e.title ? (n(), s("div", z, u(e.title), 1)) : p("", !0),
      r("div", D, [
        (n(!0), s(C, null, N(l.value, (o, d) => (n(), s("div", {
          key: o.id,
          class: "group flex items-center gap-3 animate-in slide-in-from-left-2 duration-300",
          style: U({ transitionDelay: `${d * 50}ms` })
        }, [
          r("div", j, [
            i(r("input", {
              type: "checkbox",
              "onUpdate:modelValue": (a) => o.enabled = a,
              class: "w-4 h-4 rounded border-border text-primary focus:ring-primary/20 transition-all cursor-pointer"
            }, null, 8, F), [
              [E, o.enabled]
            ])
          ]),
          r("div", $, [
            r("div", A, [
              i(r("input", {
                "onUpdate:modelValue": (a) => o.key = a,
                placeholder: e.keyPlaceholder || "Key",
                class: "w-full h-9 px-4 text-[11px] font-bold bg-card border border-border-soft rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all outline-none"
              }, null, 8, K), [
                [f, o.key]
              ])
            ]),
            r("div", O, [
              i(r("input", {
                "onUpdate:modelValue": (a) => o.value = a,
                placeholder: e.valuePlaceholder || "Value",
                class: "w-full h-9 px-4 text-[11px] bg-muted border border-border-soft rounded-lg focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              }, null, 8, q), [
                [f, o.value]
              ])
            ])
          ]),
          r("button", {
            onClick: (a) => k(o.id),
            class: "p-2 text-faint hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
          }, [
            m(h(B), { size: 14 })
          ], 8, G)
        ], 4))), 128)),
        r("button", {
          onClick: _,
          class: "mt-1 flex items-center justify-center gap-2 py-2.5 border-2 border-dashed border-border-soft rounded-xl text-[10px] font-black uppercase tracking-widest text-faint hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all w-full"
        }, [
          m(h(I), {
            size: 14,
            "stroke-width": "3"
          }),
          L(" " + u(e.addButtonLabel || "Add New Entry"), 1)
        ]),
        l.value.length === 0 ? (n(), s("div", H, " No active entries configured. ")) : p("", !0)
      ])
    ]));
  }
}), X = /* @__PURE__ */ S(J, [["__scopeId", "data-v-c0fdb02d"]]);
export {
  X as default
};
//# sourceMappingURL=ListManager-BbjjcqOm.js.map
