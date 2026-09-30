import { defineComponent as k, openBlock as s, createElementBlock as l, createVNode as a, unref as e, withCtx as r, Fragment as d, renderList as c, createBlock as u, normalizeClass as m, createTextVNode as h, toDisplayString as p, renderSlot as _, createElementVNode as i } from "vue";
import { MoreHorizontal as $ } from "lucide-vue-next";
import { _ as v } from "./Table.vue_vue_type_script_setup_true_lang-B6hTJqjQ.js";
import { _ as w } from "./TableHeader.vue_vue_type_script_setup_true_lang-C0Hh1Mmv.js";
import { _ as g } from "./TableRow.vue_vue_type_script_setup_true_lang-C-QiXqG1.js";
import { _ as x } from "./TableHead.vue_vue_type_script_setup_true_lang-CkOF1w1W.js";
import { _ as V } from "./TableBody.vue_vue_type_script_setup_true_lang-DtbGt7Iu.js";
import { _ as y } from "./TableCell.vue_vue_type_script_setup_true_lang-DdbcZ00t.js";
const z = { class: "w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden" }, B = { class: "text-[14px] font-medium leading-relaxed tracking-tight" }, C = { class: "w-8 h-8 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground cursor-pointer transition-all" }, L = /* @__PURE__ */ k({
  __name: "ErpDataGrid",
  props: {
    headers: {},
    rows: {}
  },
  setup(E) {
    return (n, f) => (s(), l("div", z, [
      a(e(v), null, {
        default: r(() => [
          a(e(w), null, {
            default: r(() => [
              a(e(g), { class: "hover:bg-transparent border-b" }, {
                default: r(() => [
                  (s(!0), l(d, null, c(n.headers, (t) => (s(), u(e(x), {
                    key: t.key,
                    class: m([[t.width || "", t.align === "right" ? "text-right" : t.align === "center" ? "text-center" : ""], "h-14 font-black uppercase tracking-[0.2em] text-[10px] text-muted-foreground/60 px-8"])
                  }, {
                    default: r(() => [
                      h(p(t.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["class"]))), 128)),
                  a(e(x), { class: "w-[50px] px-8 h-14" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          a(e(V), null, {
            default: r(() => [
              (s(!0), l(d, null, c(n.rows, (t, b) => (s(), u(e(g), {
                key: b,
                class: "group transition-all duration-200"
              }, {
                default: r(() => [
                  (s(!0), l(d, null, c(n.headers, (o) => (s(), u(e(y), {
                    key: o.key,
                    class: m([[o.align === "right" ? "text-right" : o.align === "center" ? "text-center" : ""], "px-8 py-6"])
                  }, {
                    default: r(() => [
                      _(n.$slots, `cell(${o.key})`, { row: t }, () => [
                        i("span", B, p(t[o.key]), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"]))), 128)),
                  a(e(y), { class: "px-8 py-6 text-right" }, {
                    default: r(() => [
                      _(n.$slots, "actions", { row: t }, () => [
                        i("div", C, [
                          a(e($), { size: 16 })
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 3
          })
        ]),
        _: 3
      }),
      f[0] || (f[0] = i("div", { class: "px-8 py-4 bg-muted/10 border-t border-border/50 flex justify-center" }, [
        i("span", { class: "text-[9px] font-black text-muted-foreground/30 uppercase tracking-[0.6em]" }, "System Registry Integrity Verified")
      ], -1))
    ]));
  }
});
export {
  L as default
};
//# sourceMappingURL=ErpDataGrid-A4UGQwRU.js.map
