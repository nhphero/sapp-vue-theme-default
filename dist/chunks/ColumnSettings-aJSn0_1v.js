import { defineComponent as w, inject as k, computed as x, openBlock as r, createElementBlock as i, createBlock as n, resolveDynamicComponent as l, withCtx as a, normalizeClass as u, createVNode as m, unref as p, createElementVNode as o, isRef as $, Fragment as S, renderList as z, toDisplayString as A, withModifiers as g, createCommentVNode as c } from "vue";
import { Settings2 as L, ArrowLeft as V, ArrowRight as R, Search as B } from "lucide-vue-next";
import { _ as N } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const j = {
  key: 0,
  class: "flex items-center"
}, W = { class: "px-3 py-3 border-b border-border bg-muted/20 flex flex-col gap-2.5" }, D = { class: "flex items-center justify-between px-1" }, E = { class: "flex items-center gap-1.5" }, P = { class: "relative group" }, U = { class: "max-h-[450px] overflow-y-auto custom-scrollbar p-2 pb-4 flex flex-col gap-0.5" }, q = ["onClick"], F = { class: "flex items-center gap-1 transition-opacity" }, H = {
  key: 0,
  class: "py-10 text-center opacity-30"
}, I = {
  key: 0,
  class: "cs-footer"
}, M = {
  key: 0,
  class: "cs-row"
}, G = /* @__PURE__ */ w({
  __name: "ColumnSettings",
  props: {
    source: {},
    variant: { default: "outline" },
    buttonClass: { default: "" },
    bordered: { type: Boolean, default: void 0 },
    hasWidths: { type: Boolean, default: !1 }
  },
  emits: ["update:bordered", "reset-widths"],
  setup(h, { emit: y }) {
    const C = h, f = y, d = k("$superApp").$vue.ref(""), v = x(() => {
      const e = C.source.columns.value || [];
      if (!d.value) return e;
      const t = d.value.toLowerCase();
      return e.filter((s) => s.toLowerCase().includes(t));
    });
    return (e, t) => e.source.columns.value.length ? (r(), i("div", j, [
      (r(), n(l(e.$c("ui.popover")), null, {
        default: a(() => [
          (r(), n(l(e.$c("ui.popover-trigger")), null, {
            default: a(() => [
              (r(), n(l(e.$c("ui.button")), {
                variant: e.variant,
                size: "sm",
                class: u([e.buttonClass, "group"])
              }, {
                default: a(() => [
                  m(p(L), {
                    size: 13,
                    class: "opacity-60 group-hover:text-primary transition-colors"
                  }),
                  t[5] || (t[5] = o("span", null, "Columns", -1))
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
            default: a(() => [
              o("div", W, [
                o("div", D, [
                  t[7] || (t[7] = o("span", { class: "text-xs font-semibold text-muted-foreground" }, "Columns Settings", -1)),
                  o("div", E, [
                    o("button", {
                      onClick: t[0] || (t[0] = (s) => e.source.hiddenColumns.value = []),
                      class: "text-xs font-bold text-primary hover:underline"
                    }, "Show All"),
                    t[6] || (t[6] = o("span", { class: "text-xs text-muted-foreground/30" }, "/", -1)),
                    o("button", {
                      onClick: t[1] || (t[1] = (s) => e.source.hiddenColumns.value = [...e.source.columns.value]),
                      class: "text-xs font-bold text-muted-foreground hover:text-danger transition-colors"
                    }, "Hide All")
                  ])
                ]),
                o("div", P, [
                  (r(), n(l(e.$c("ui.search-input")), {
                    modelValue: p(d),
                    "onUpdate:modelValue": t[2] || (t[2] = (s) => $(d) ? d.value = s : null),
                    placeholder: "Search column names...",
                    "show-clear": !0,
                    class: "bg-background border-border/40 group-hover:border-primary/30 transition-shadow shadow-sm"
                  }, null, 8, ["modelValue"]))
                ])
              ]),
              o("div", U, [
                (r(!0), i(S, null, z(v.value, (s) => (r(), i("div", {
                  key: s,
                  class: "flex items-center justify-between px-2.5 py-1.5 rounded-xl hover:bg-muted/50 transition-all group/col-item"
                }, [
                  o("div", {
                    class: "flex items-center gap-3 min-w-0 cursor-pointer flex-1",
                    onClick: (b) => e.source.toggleColumn(s)
                  }, [
                    o("div", {
                      class: u(["w-7 h-4 rounded-full p-0.5 transition-all border border-border shrink-0", e.source.hiddenColumns.value.includes(s) ? "bg-sunken" : "bg-primary shadow-[0_2px_8px_rgba(var(--primary-rgb),0.3)]"])
                    }, [
                      o("div", {
                        class: u(["w-2.5 h-2.5 rounded-full bg-card shadow-sm transition-transform", e.source.hiddenColumns.value.includes(s) ? "translate-x-0" : "translate-x-3"])
                      }, null, 2)
                    ], 2),
                    o("span", {
                      class: u(["text-xs font-medium truncate transition-colors", e.source.hiddenColumns.value.includes(s) ? "opacity-40 line-through text-faint" : "text-muted-foreground "])
                    }, A(s), 3)
                  ], 8, q),
                  o("div", F, [
                    (r(), n(l(e.$c("ui.button")), {
                      variant: "ghost",
                      size: "icon",
                      class: u({ "text-primary bg-primary/10 opacity-100": e.source.stickyLeft.value.includes(s) }),
                      title: "Pin to Left",
                      onClick: g((b) => e.source.toggleSticky(s, e.source.stickyLeft.value.includes(s) ? "none" : "left"), ["stop"])
                    }, {
                      default: a(() => [
                        m(p(V), { size: 12 })
                      ]),
                      _: 2
                    }, 1032, ["class", "onClick"])),
                    (r(), n(l(e.$c("ui.button")), {
                      variant: "ghost",
                      size: "icon",
                      class: u({ "text-primary bg-primary/10 opacity-100": e.source.stickyRight.value.includes(s) }),
                      title: "Pin to Right",
                      onClick: g((b) => e.source.toggleSticky(s, e.source.stickyRight.value.includes(s) ? "none" : "right"), ["stop"])
                    }, {
                      default: a(() => [
                        m(p(R), { size: 12 })
                      ]),
                      _: 2
                    }, 1032, ["class", "onClick"]))
                  ])
                ]))), 128)),
                v.value.length === 0 ? (r(), i("div", H, [
                  m(p(B), {
                    size: 20,
                    class: "mx-auto mb-2"
                  }),
                  t[8] || (t[8] = o("p", { class: "text-xs font-medium" }, "No columns found", -1))
                ])) : c("", !0)
              ]),
              e.bordered !== void 0 || e.hasWidths ? (r(), i("div", I, [
                e.bordered !== void 0 ? (r(), i("label", M, [
                  t[9] || (t[9] = o("span", null, "Show borders", -1)),
                  (r(), n(l(e.$c("form.switch")), {
                    "model-value": e.bordered,
                    "data-testid": "table-borders",
                    "onUpdate:modelValue": t[3] || (t[3] = (s) => f("update:bordered", !!s))
                  }, null, 8, ["model-value"]))
                ])) : c("", !0),
                e.hasWidths ? (r(), i("button", {
                  key: 1,
                  type: "button",
                  class: "cs-reset",
                  "data-testid": "table-reset-widths",
                  onClick: t[4] || (t[4] = (s) => f("reset-widths"))
                }, "Reset column widths")) : c("", !0)
              ])) : c("", !0)
            ]),
            _: 1
          }))
        ]),
        _: 1
      }))
    ])) : c("", !0);
  }
}), T = /* @__PURE__ */ N(G, [["__scopeId", "data-v-385c351c"]]);
export {
  T as default
};
//# sourceMappingURL=ColumnSettings-aJSn0_1v.js.map
