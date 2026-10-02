import { defineComponent as y, inject as x, computed as C, openBlock as r, createElementBlock as c, createBlock as n, resolveDynamicComponent as l, withCtx as i, normalizeClass as u, createVNode as p, unref as d, createElementVNode as o, isRef as k, Fragment as w, renderList as $, toDisplayString as S, withModifiers as v, createCommentVNode as g } from "vue";
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
    buttonClass: { default: "" }
  },
  setup(b) {
    const h = b, a = x("$superApp").$vue.ref(""), m = C(() => {
      const e = h.source.columns.value || [];
      if (!a.value) return e;
      const s = a.value.toLowerCase();
      return e.filter((t) => t.toLowerCase().includes(s));
    });
    return (e, s) => e.source.columns.value.length ? (r(), c("div", R, [
      (r(), n(l(e.$c("ui.popover")), null, {
        default: i(() => [
          (r(), n(l(e.$c("ui.popover-trigger")), null, {
            default: i(() => [
              (r(), n(l(e.$c("ui.button")), {
                variant: e.variant,
                size: "sm",
                class: u([e.buttonClass, "group"])
              }, {
                default: i(() => [
                  p(d(z), {
                    size: 13,
                    class: "opacity-60 group-hover:text-primary transition-colors"
                  }),
                  s[3] || (s[3] = o("span", null, "Columns", -1))
                ]),
                _: 1
              }, 8, ["variant", "class"]))
            ]),
            _: 1
          })),
          (r(), n(l(e.$c("ui.popover-content")), {
            align: "end",
            class: "w-80 p-0 bg-card border-border shadow-2xl rounded-2xl overflow-hidden flex flex-col"
          }, {
            default: i(() => [
              o("div", N, [
                o("div", j, [
                  s[5] || (s[5] = o("span", { class: "text-xs font-semibold text-muted-foreground" }, "Columns Settings", -1)),
                  o("div", B, [
                    o("button", {
                      onClick: s[0] || (s[0] = (t) => e.source.hiddenColumns.value = []),
                      class: "text-xs font-bold text-primary hover:underline"
                    }, "Show All"),
                    s[4] || (s[4] = o("span", { class: "text-xs text-muted-foreground/30" }, "/", -1)),
                    o("button", {
                      onClick: s[1] || (s[1] = (t) => e.source.hiddenColumns.value = [...e.source.columns.value]),
                      class: "text-xs font-bold text-muted-foreground hover:text-danger transition-colors"
                    }, "Hide All")
                  ])
                ]),
                o("div", D, [
                  (r(), n(l(e.$c("ui.search-input")), {
                    modelValue: d(a),
                    "onUpdate:modelValue": s[2] || (s[2] = (t) => k(a) ? a.value = t : null),
                    placeholder: "Search column names...",
                    "show-clear": !0,
                    class: "bg-background border-border/40 group-hover:border-primary/30 transition-shadow shadow-sm"
                  }, null, 8, ["modelValue"]))
                ])
              ]),
              o("div", E, [
                (r(!0), c(w, null, $(m.value, (t) => (r(), c("div", {
                  key: t,
                  class: "flex items-center justify-between px-2.5 py-1.5 rounded-xl hover:bg-muted/50 transition-all group/col-item"
                }, [
                  o("div", {
                    class: "flex items-center gap-3 min-w-0 cursor-pointer flex-1",
                    onClick: (f) => e.source.toggleColumn(t)
                  }, [
                    o("div", {
                      class: u(["w-7 h-4 rounded-full p-0.5 transition-all border border-border shrink-0", e.source.hiddenColumns.value.includes(t) ? "bg-sunken" : "bg-primary shadow-[0_2px_8px_rgba(var(--primary-rgb),0.3)]"])
                    }, [
                      o("div", {
                        class: u(["w-2.5 h-2.5 rounded-full bg-card shadow-sm transition-transform", e.source.hiddenColumns.value.includes(t) ? "translate-x-0" : "translate-x-3"])
                      }, null, 2)
                    ], 2),
                    o("span", {
                      class: u(["text-xs font-medium truncate transition-colors", e.source.hiddenColumns.value.includes(t) ? "opacity-40 line-through text-faint" : "text-muted-foreground "])
                    }, S(t), 3)
                  ], 8, P),
                  o("div", q, [
                    (r(), n(l(e.$c("ui.button")), {
                      variant: "ghost",
                      size: "icon",
                      class: u({ "text-primary bg-primary/10 opacity-100": e.source.stickyLeft.value.includes(t) }),
                      title: "Pin to Left",
                      onClick: v((f) => e.source.toggleSticky(t, e.source.stickyLeft.value.includes(t) ? "none" : "left"), ["stop"])
                    }, {
                      default: i(() => [
                        p(d(A), { size: 12 })
                      ]),
                      _: 2
                    }, 1032, ["class", "onClick"])),
                    (r(), n(l(e.$c("ui.button")), {
                      variant: "ghost",
                      size: "icon",
                      class: u({ "text-primary bg-primary/10 opacity-100": e.source.stickyRight.value.includes(t) }),
                      title: "Pin to Right",
                      onClick: v((f) => e.source.toggleSticky(t, e.source.stickyRight.value.includes(t) ? "none" : "right"), ["stop"])
                    }, {
                      default: i(() => [
                        p(d(L), { size: 12 })
                      ]),
                      _: 2
                    }, 1032, ["class", "onClick"]))
                  ])
                ]))), 128)),
                m.value.length === 0 ? (r(), c("div", F, [
                  p(d(V), {
                    size: 20,
                    class: "mx-auto mb-2"
                  }),
                  s[6] || (s[6] = o("p", { class: "text-xs font-medium" }, "No columns found", -1))
                ])) : g("", !0)
              ])
            ]),
            _: 1
          }))
        ]),
        _: 1
      }))
    ])) : g("", !0);
  }
});
export {
  G as default
};
//# sourceMappingURL=ColumnSettings-Bv6YxjSC.js.map
