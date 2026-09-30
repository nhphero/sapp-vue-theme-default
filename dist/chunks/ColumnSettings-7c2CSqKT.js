import { defineComponent as y, inject as x, computed as k, openBlock as s, createElementBlock as p, createBlock as n, resolveDynamicComponent as l, withCtx as i, normalizeClass as a, createVNode as c, unref as d, createElementVNode as o, isRef as w, Fragment as C, renderList as $, toDisplayString as S, withModifiers as f, createCommentVNode as v } from "vue";
import { Settings2 as z, ArrowLeft as A, ArrowRight as L, Search as V } from "lucide-vue-next";
const R = {
  key: 0,
  class: "flex items-center"
}, N = { class: "px-3 py-3 border-b border-border bg-muted/20 flex flex-col gap-2.5" }, j = { class: "flex items-center justify-between px-1" }, B = { class: "flex items-center gap-1.5" }, D = { class: "relative group" }, E = { class: "max-h-[450px] overflow-y-auto custom-scrollbar p-2 pb-4 flex flex-col gap-0.5" }, P = ["onClick"], q = { class: "flex items-center gap-1 transition-opacity" }, F = {
  key: 0,
  class: "py-10 text-center opacity-30"
}, G = /* @__PURE__ */ y({
  __name: "ColumnSettings",
  props: {
    source: {},
    variant: { default: "outline" },
    buttonClass: { default: "h-8 px-3 gap-2 text-[10px] font-medium uppercase tracking-wider bg-background border-border shadow-sm hover:border-primary/40 transition-all rounded-lg" }
  },
  setup(b) {
    const h = b, u = x("$superApp").$vue.ref(""), m = k(() => {
      const e = h.source.columns.value || [];
      if (!u.value) return e;
      const r = u.value.toLowerCase();
      return e.filter((t) => t.toLowerCase().includes(r));
    });
    return (e, r) => e.source.columns.value.length ? (s(), p("div", R, [
      (s(), n(l(e.$c("ui.popover")), null, {
        default: i(() => [
          (s(), n(l(e.$c("ui.popover-trigger")), null, {
            default: i(() => [
              (s(), n(l(e.$c("ui.button")), {
                variant: e.variant,
                size: "sm",
                class: a([e.buttonClass, "group"])
              }, {
                default: i(() => [
                  c(d(z), {
                    size: 13,
                    class: "opacity-60 group-hover:text-primary transition-colors"
                  }),
                  r[3] || (r[3] = o("span", null, "Columns", -1))
                ]),
                _: 1
              }, 8, ["variant", "class"]))
            ]),
            _: 1
          })),
          (s(), n(l(e.$c("ui.popover-content")), {
            align: "end",
            class: "w-80 p-0 bg-card border-border shadow-2xl rounded-2xl overflow-hidden flex flex-col"
          }, {
            default: i(() => [
              o("div", N, [
                o("div", j, [
                  r[5] || (r[5] = o("span", { class: "text-[9px] font-black text-muted-foreground uppercase tracking-widest" }, "Columns Settings", -1)),
                  o("div", B, [
                    o("button", {
                      onClick: r[0] || (r[0] = (t) => e.source.hiddenColumns.value = []),
                      class: "text-[9px] font-bold text-primary hover:underline uppercase tracking-tighter"
                    }, "Show All"),
                    r[4] || (r[4] = o("span", { class: "text-[9px] text-muted-foreground/30" }, "/", -1)),
                    o("button", {
                      onClick: r[1] || (r[1] = (t) => e.source.hiddenColumns.value = [...e.source.columns.value]),
                      class: "text-[9px] font-bold text-muted-foreground hover:text-red-500 uppercase tracking-tighter transition-colors"
                    }, "Hide All")
                  ])
                ]),
                o("div", D, [
                  (s(), n(l(e.$c("ui.search-input")), {
                    modelValue: d(u),
                    "onUpdate:modelValue": r[2] || (r[2] = (t) => w(u) ? u.value = t : null),
                    placeholder: "Search column names...",
                    "show-clear": !0,
                    class: "bg-background border-border/40 group-hover:border-primary/30 transition-shadow shadow-sm"
                  }, null, 8, ["modelValue"]))
                ])
              ]),
              o("div", E, [
                (s(!0), p(C, null, $(m.value, (t) => (s(), p("div", {
                  key: t,
                  class: "flex items-center justify-between px-2.5 py-1.5 rounded-xl hover:bg-muted/50 transition-all group/col-item"
                }, [
                  o("div", {
                    class: "flex items-center gap-3 min-w-0 cursor-pointer flex-1",
                    onClick: (g) => e.source.toggleColumn(t)
                  }, [
                    o("div", {
                      class: a(["w-7 h-4 rounded-full p-0.5 transition-all border border-border shrink-0", e.source.hiddenColumns.value.includes(t) ? "bg-sunken" : "bg-primary shadow-[0_2px_8px_rgba(var(--primary-rgb),0.3)]"])
                    }, [
                      o("div", {
                        class: a(["w-2.5 h-2.5 rounded-full bg-card shadow-sm transition-transform", e.source.hiddenColumns.value.includes(t) ? "translate-x-0" : "translate-x-3"])
                      }, null, 2)
                    ], 2),
                    o("span", {
                      class: a(["text-[11px] font-medium truncate transition-colors", e.source.hiddenColumns.value.includes(t) ? "opacity-40 line-through text-faint" : "text-muted-foreground "])
                    }, S(t), 3)
                  ], 8, P),
                  o("div", q, [
                    (s(), n(l(e.$c("ui.button")), {
                      variant: "ghost",
                      size: "icon",
                      class: a(["h-6 w-6 rounded-md hover:bg-primary/10", { "text-primary bg-primary/10 opacity-100": e.source.stickyLeft.value.includes(t) }]),
                      title: "Pin to Left",
                      onClick: f((g) => e.source.toggleSticky(t, e.source.stickyLeft.value.includes(t) ? "none" : "left"), ["stop"])
                    }, {
                      default: i(() => [
                        c(d(A), { size: 12 })
                      ]),
                      _: 2
                    }, 1032, ["class", "onClick"])),
                    (s(), n(l(e.$c("ui.button")), {
                      variant: "ghost",
                      size: "icon",
                      class: a(["h-6 w-6 rounded-md hover:bg-primary/10", { "text-primary bg-primary/10 opacity-100": e.source.stickyRight.value.includes(t) }]),
                      title: "Pin to Right",
                      onClick: f((g) => e.source.toggleSticky(t, e.source.stickyRight.value.includes(t) ? "none" : "right"), ["stop"])
                    }, {
                      default: i(() => [
                        c(d(L), { size: 12 })
                      ]),
                      _: 2
                    }, 1032, ["class", "onClick"]))
                  ])
                ]))), 128)),
                m.value.length === 0 ? (s(), p("div", F, [
                  c(d(V), {
                    size: 20,
                    class: "mx-auto mb-2"
                  }),
                  r[6] || (r[6] = o("p", { class: "text-[10px] font-medium uppercase tracking-wider" }, "No columns found", -1))
                ])) : v("", !0)
              ])
            ]),
            _: 1
          }))
        ]),
        _: 1
      }))
    ])) : v("", !0);
  }
});
export {
  G as default
};
//# sourceMappingURL=ColumnSettings-7c2CSqKT.js.map
