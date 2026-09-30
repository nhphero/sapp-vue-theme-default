import { defineComponent as ye, inject as he, openBlock as o, createElementBlock as u, normalizeClass as p, unref as r, createElementVNode as l, renderSlot as C, createBlock as m, resolveDynamicComponent as b, createCommentVNode as f, toDisplayString as y, normalizeStyle as ke, Fragment as H, renderList as J, withModifiers as ee, withCtx as S, isRef as xe, createTextVNode as P } from "vue";
import { ClipboardList as we, Filter as Ce, ArrowLeft as Se, ArrowRight as $e, EyeOff as ze, ChevronUp as De, ChevronDown as Le, ChevronsUpDown as Re, Loader2 as Me } from "lucide-vue-next";
import { _ as Ve } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const je = ["data-variant"], Te = { class: "flex items-center gap-4" }, Ue = { class: "flex items-center gap-2" }, Fe = {
  key: 1,
  class: "px-3.5 py-2.5 border-b border-border bg-card flex items-center justify-between shrink-0"
}, Oe = { class: "flex items-center gap-3" }, Ie = { class: "flex items-center gap-2 pl-4 border-l border-border ml-1" }, Ne = { class: "text-[11px] font-mono font-bold text-primary tabular-nums" }, Ae = { class: "flex items-center gap-4" }, Be = ["checked", "indeterminate"], Ee = {
  key: 1,
  class: "sticky top-0 left-0 z-40 bg-muted/95 backdrop-blur-md border-b-2 border-r-2 border-border w-14 min-w-[56px] px-3 py-2 text-[10px] font-medium tracking-widest text-faint font-bold text-center"
}, He = ["onClick", "onContextmenu"], Je = { class: "flex items-center justify-between gap-2 w-full" }, Pe = { class: "relative" }, Ke = {
  key: 0,
  class: "absolute inset-0 z-20 bg-background/40 backdrop-blur-[1px] flex items-center justify-center pointer-events-none transition-opacity duration-300"
}, Xe = ["data-state"], Ye = ["checked", "onChange"], We = {
  key: 1,
  class: "sticky left-0 z-20 w-14 min-w-[56px] px-3 py-2.5 border-r-2 border-b border-border/30 text-center font-mono text-[10px] text-muted-foreground/60 !bg-white group-hover/row:!bg-slate-50 group-hover/row:text-primary transition-colors"
}, qe = ["onDblclick", "title"], Ge = {
  key: 1,
  class: "h-64 flex flex-col items-center justify-center opacity-40"
}, Qe = { class: "flex items-center justify-between w-full pr-8" }, Ze = { class: "flex flex-col gap-1" }, _e = { class: "text-xs font-black uppercase tracking-widest text-primary" }, et = { class: "text-[9px] text-muted-foreground uppercase font-black tracking-tighter opacity-50" }, tt = { class: "flex flex-col gap-4 max-h-[60vh] py-2" }, st = { class: "flex-1 flex flex-col" }, rt = {
  key: 0,
  class: "mt-3 flex items-center gap-2 px-1"
}, ot = {
  key: 1,
  class: "mt-3 flex items-center gap-2 px-1 opacity-50"
}, lt = { class: "flex items-center gap-3 w-full justify-between px-1" }, at = { class: "flex items-center gap-2" }, nt = { class: "flex items-center gap-3" }, it = { class: "flex items-center gap-2" }, ut = /* @__PURE__ */ ye({
  __name: "DataTable",
  props: {
    source: {},
    maxHeight: {},
    paginationPosition: { default: "bottom" },
    allowCustomColumns: { type: Boolean, default: !1 },
    showSearch: { type: Boolean, default: !0 },
    variant: { default: "grid" },
    showSelect: { type: Boolean, default: !1 },
    selected: { default: () => [] },
    rowKey: {}
  },
  emits: ["filter-by-value", "update:selected"],
  setup(te, { emit: se }) {
    const n = te, $ = he("$superApp");
    if (!$)
      throw new Error("🚨 [DataTable] Critical: SuperApp bridge not found.");
    const { ref: c, computed: R, watch: re } = $.$vue, i = R(() => n.variant === "clean"), K = R(() => {
      const e = n.source.columns.value.filter((a) => !n.source.hiddenColumns.value.includes(a)), t = e.filter((a) => n.source.stickyLeft.value.includes(a)), s = e.filter((a) => n.source.stickyRight.value.includes(a)), d = e.filter((a) => !n.source.stickyLeft.value.includes(a) && !n.source.stickyRight.value.includes(a));
      return [...t, ...d, ...s];
    }), M = (e) => n.source.stickyLeft.value.includes(e), V = (e) => n.source.stickyRight.value.includes(e), v = c(null), j = c(!1), X = c(0), Y = c(0), W = c(0), q = c(0), oe = (e) => {
      if (!v.value || e.button !== 0) return;
      const t = e.target;
      t.closest("button") || t.closest("input") || t.closest("a") || (window.getSelection()?.removeAllRanges(), j.value = !0, X.value = e.pageX - v.value.offsetLeft, Y.value = e.pageY - v.value.offsetTop, W.value = v.value.scrollLeft, q.value = v.value.scrollTop);
    }, le = (e) => {
      if (!j.value || !v.value) return;
      e.preventDefault();
      const t = e.pageX - v.value.offsetLeft, s = e.pageY - v.value.offsetTop, d = (t - X.value) * 1.5, a = (s - Y.value) * 1.5;
      v.value.scrollLeft = W.value - d, v.value.scrollTop = q.value - a;
    }, G = () => {
      j.value = !1;
    }, O = c(!1), T = c(""), U = c(""), F = c(""), I = c(0), z = c(!1), Q = (e) => {
      if (typeof e != "string") return !1;
      const t = e.trim();
      if (!t.startsWith("{") && !t.startsWith("[")) return !1;
      try {
        const s = JSON.parse(t);
        return typeof s == "object" && s !== null;
      } catch {
        return !1;
      }
    }, ae = (e, t, s) => {
      T.value = e;
      const d = t === null ? "" : String(t);
      if (U.value = d, I.value = s, Q(d))
        try {
          F.value = JSON.stringify(JSON.parse(d), null, 2), z.value = !0;
        } catch {
          F.value = d, z.value = !1;
        }
      else
        F.value = d, z.value = !1;
      h.value = z.value ? F.value : U.value, O.value = !0;
    }, Z = c(!1), h = c(""), D = c(!1), ne = async () => {
      if (n.source.onCellUpdate) {
        D.value = !0;
        try {
          const e = n.source.displayItems.value[I.value];
          await n.source.onCellUpdate({
            column: T.value,
            value: h.value,
            row: e,
            index: I.value
          }), e[T.value] = h.value, U.value = h.value, $.$toast?.success("Record Updated", "Database entry synchronized successfully."), Z.value = !1, O.value = !1;
        } catch (e) {
          $.$message?.error("Update Failed", e.message || "An error occurred during synchronization.");
        } finally {
          D.value = !1;
        }
      }
    }, N = () => {
      O.value = !1, Z.value = !1;
    }, ie = () => {
      navigator.clipboard.writeText(z.value ? F.value : U.value), $.$message?.success("Copied", "Value copied to clipboard");
    }, ue = (e) => {
      const t = n.source.params.sortField, s = n.source.params.sortOrder;
      t === e ? s === "asc" ? n.source.setSort(e, "desc") : s === "desc" ? n.source.setSort(e, null) : n.source.setSort(e, "asc") : n.source.setSort(e, "asc");
    }, L = (e) => {
      if (!e) return "text-left";
      const t = e.toLowerCase().trim();
      return t === "id" || t === "#" || t === "code" || t === "sku" || t === "status" || t === "role" || t === "type" || t === "gender" || t === "uom" || t === "tax" ? "text-center" : t.includes("amount") || t.includes("price") || t.includes("total") || t.includes("qty") || t.includes("quantity") || t.includes("discount") || t.includes("vat") ? "text-right" : "text-left";
    }, de = (e) => {
      if (e == null) return e;
      const t = String(e);
      return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(t) ? t.replace(/[Zz]$|\+00:00$/, "").replace(/\.\d{3}$/, "").replace("T", " ") : e;
    }, A = se, k = (e) => typeof n.rowKey == "function" ? n.rowKey(e) : n.rowKey ? e?.[n.rowKey] : e, x = c([...n.selected]);
    re(() => n.selected, (e) => {
      x.value = [...e || []];
    });
    const B = (e) => {
      x.value = e, A("update:selected", e);
    }, w = (e) => x.value.some((t) => k(t) === k(e)), ce = (e) => B(w(e) ? x.value.filter((t) => k(t) !== k(e)) : [...x.value, e]), E = R(() => n.source.displayItems.value.length > 0 && n.source.displayItems.value.every(w)), pe = R(() => !E.value && n.source.displayItems.value.some(w)), fe = () => {
      const e = n.source.displayItems.value;
      E.value ? B(x.value.filter((t) => !e.some((s) => k(s) === k(t)))) : B([...x.value, ...e.filter((t) => !w(t))]);
    }, me = () => {
      A("filter-by-value", {
        column: T.value,
        value: U.value
      }), N();
    }, _ = c(null), g = c(""), be = (e, t) => {
      g.value = t, _.value?.open(e);
    }, ve = () => {
      if (!g.value) return;
      const e = n.source.displayItems.value.map((s) => {
        const d = s[g.value];
        return d === null ? "NULL" : String(d);
      }), t = e.join(`
`);
      navigator.clipboard.writeText(t), $.$message?.success("Column Copied", `${e.length} row values copied to clipboard.`);
    }, ge = R(() => [
      {
        label: `Copy Column: ${g.value}`,
        icon: we,
        action: ve,
        shortcut: "⌘C"
      },
      {
        label: "Add Filter",
        icon: Ce,
        action: () => A("filter-by-value", { column: g.value, value: "" })
      },
      {
        label: "Pin Left",
        icon: Se,
        action: () => n.source.toggleSticky(g.value, "left"),
        disabled: M(g.value)
      },
      {
        label: "Pin Right",
        icon: $e,
        action: () => n.source.toggleSticky(g.value, "right"),
        disabled: V(g.value)
      },
      {
        label: "Hide Column",
        icon: ze,
        variant: "danger",
        action: () => n.source.hiddenColumns.value.push(g.value)
      }
    ]);
    return (e, t) => (o(), u("div", {
      class: p(["flex-1 min-h-0 flex flex-col bg-transparent overflow-hidden", r(i) ? "gap-3" : "rounded-xl border border-border"]),
      "data-variant": e.variant
    }, [
      e.showSearch || e.$slots["toolbar-left"] || e.$slots["toolbar-actions"] ? (o(), u("div", {
        key: 0,
        class: p(["flex items-center justify-between shrink-0 overflow-x-auto no-scrollbar", r(i) ? "" : "px-4 py-3 border-b border-border bg-muted/20"])
      }, [
        l("div", Te, [
          C(e.$slots, "toolbar-left", {}, void 0, !0),
          e.showSearch ? (o(), m(b(e.$c("ui.search-input")), {
            key: 0,
            modelValue: e.source.searchQuery.value,
            "onUpdate:modelValue": t[0] || (t[0] = (s) => e.source.searchQuery.value = s),
            placeholder: "Search results in current page...",
            "show-clear": !0,
            class: "max-w-sm h-9"
          }, null, 8, ["modelValue"])) : f("", !0),
          C(e.$slots, "toolbar-extra", {}, void 0, !0)
        ]),
        l("div", Ue, [
          C(e.$slots, "toolbar-actions", {}, void 0, !0),
          r(i) && e.allowCustomColumns ? (o(), m(b(e.$c("display.column-settings")), {
            key: 0,
            source: e.source
          }, null, 8, ["source"])) : f("", !0)
        ])
      ], 2)) : f("", !0),
      C(e.$slots, "after-toolbar", {}, void 0, !0),
      !r(i) && (e.allowCustomColumns || e.source.items.value.length > 0) ? (o(), u("div", Fe, [
        l("div", Oe, [
          e.allowCustomColumns ? (o(), m(b(e.$c("display.column-settings")), {
            key: 0,
            source: e.source
          }, null, 8, ["source"])) : f("", !0),
          C(e.$slots, "nav-left", {}, void 0, !0),
          l("div", Ie, [
            t[4] || (t[4] = l("span", { class: "text-[9px] text-faint uppercase font-bold tracking-widest" }, "Total:", -1)),
            l("span", Ne, y(e.source.pagination.total.toLocaleString()), 1)
          ])
        ]),
        l("div", Ae, [
          C(e.$slots, "nav-extra", {}, void 0, !0),
          e.source.items.value.length > 0 ? (o(), m(b(e.$c("display.simple-pagination")), {
            key: 0,
            source: e.source,
            variant: "minimal",
            class: "!px-0 !py-0 bg-transparent border-none"
          }, null, 8, ["source"])) : f("", !0)
        ])
      ])) : f("", !0),
      l("div", {
        ref_key: "containerRef",
        ref: v,
        class: p(["data-grid-container flex-1 overflow-auto relative scrollbar-bold transition-shadow", [
          r(i) && "table-wrap bg-card",
          r(j) ? "cursor-grabbing select-none" : "cursor-grab",
          { "shadow-inner": r(j) }
        ]]),
        style: ke({ maxHeight: e.maxHeight || "100%", height: "100%" }),
        onMousedown: oe,
        onMousemove: le,
        onMouseup: G,
        onMouseleave: G
      }, [
        e.source.displayItems.value.length > 0 ? (o(), u("table", {
          key: 0,
          class: p(["w-full table-auto min-w-max", r(i) ? "border-collapse" : "border-separate border-spacing-0"])
        }, [
          l("thead", null, [
            l("tr", null, [
              e.showSelect ? (o(), u("th", {
                key: 0,
                class: p(["sticky top-0 left-0 z-40 w-10 min-w-[40px] px-3 py-2 text-center", r(i) ? "border-b border-border-soft" : "bg-muted/95 backdrop-blur-md border-b-2 border-r border-border"])
              }, [
                l("input", {
                  type: "checkbox",
                  class: "accent-primary w-4 h-4 cursor-pointer align-middle",
                  checked: r(E),
                  indeterminate: r(pe),
                  "aria-label": "select page",
                  "data-testid": "select-all",
                  onChange: t[1] || (t[1] = (s) => fe())
                }, null, 40, Be)
              ], 2)) : f("", !0),
              r(i) ? f("", !0) : (o(), u("th", Ee, " # ")),
              (o(!0), u(H, null, J(r(K), (s) => (o(), u("th", {
                key: s,
                class: p(["sticky top-0 z-10 cursor-pointer transition-colors select-none group", [
                  r(i) ? "px-3 py-2 border-b border-border-soft hover:brightness-110" : "bg-muted/95 backdrop-blur-md px-4 py-2.5 border-b-2 border-r border-border min-w-[150px] hover:bg-muted",
                  {
                    "w-[80px] min-w-[80px]": s.toLowerCase().trim() === "id",
                    "min-w-[180px]": s.toLowerCase().includes("date") || s.toLowerCase().includes("time"),
                    "bg-primary/[0.08]": !r(i) && e.source.params.sortField === s,
                    sorted: r(i) && e.source.params.sortField === s,
                    "sticky left-[56px] z-30 bg-muted border-r-2 border-border": !r(i) && M(s),
                    "sticky right-0 z-30 bg-muted border-l-2 border-border": !r(i) && V(s),
                    "sticky left-0 z-30": r(i) && M(s),
                    "sticky right-0 z-30": r(i) && V(s)
                  }
                ]]),
                onClick: (d) => ue(s),
                onContextmenu: ee((d) => be(d, s), ["prevent"])
              }, [
                l("div", Je, [
                  l("span", {
                    class: p(["text-[10px] font-medium tracking-wider font-bold transition-colors truncate flex-1", [L(s), r(i) ? "text-inherit" : "text-muted-foreground group-hover:text-primary"]])
                  }, y(s), 3),
                  l("div", {
                    class: p(["w-4 h-4 flex items-center justify-center shrink-0 transition-all duration-200", [
                      e.source.params.sortField === s ? "opacity-100 scale-110" : r(i) ? "opacity-70 group-hover:opacity-100" : "opacity-20 group-hover:opacity-40"
                    ]])
                  }, [
                    e.source.params.sortField === s && e.source.params.sortOrder === "asc" ? (o(), m(r(De), {
                      key: 0,
                      size: 12,
                      class: p(r(i) ? "text-inherit" : "text-primary")
                    }, null, 8, ["class"])) : e.source.params.sortField === s && e.source.params.sortOrder === "desc" ? (o(), m(r(Le), {
                      key: 1,
                      size: 12,
                      class: p(r(i) ? "text-inherit" : "text-primary")
                    }, null, 8, ["class"])) : (o(), m(r(Re), {
                      key: 2,
                      size: 10
                    }))
                  ], 2)
                ])
              ], 42, He))), 128))
            ])
          ]),
          l("tbody", Pe, [
            e.source.pagination.loading ? (o(), u("div", Ke, t[5] || (t[5] = [
              l("div", { class: "flex flex-col items-center gap-3" }, [
                l("div", { class: "w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" })
              ], -1)
            ]))) : f("", !0),
            (o(!0), u(H, null, J(e.source.displayItems.value, (s, d) => (o(), u("tr", {
              key: d,
              class: p(["transition-all group/row", [r(i) ? "bg-card hover:bg-muted" : "hover:bg-muted/30", !r(i) && e.showSelect && w(s) && "bg-primary/5"]]),
              "data-state": e.showSelect && w(s) ? "selected" : void 0
            }, [
              e.showSelect ? (o(), u("td", {
                key: 0,
                class: p(["sticky left-0 z-20 w-10 min-w-[40px] px-3 text-center", r(i) ? "py-2 border-b border-border-soft bg-inherit" : "py-2.5 border-r border-b border-border/30 !bg-white"]),
                onClick: t[2] || (t[2] = ee(() => {
                }, ["stop"]))
              }, [
                (o(), u("input", {
                  type: "checkbox",
                  key: String(k(s)),
                  class: "accent-primary w-4 h-4 cursor-pointer align-middle",
                  checked: w(s),
                  "data-testid": "select-row",
                  onChange: (a) => ce(s)
                }, null, 40, Ye))
              ], 2)) : f("", !0),
              r(i) ? f("", !0) : (o(), u("td", We, y((e.source.pagination.page - 1) * e.source.pagination.pageSize + d + 1), 1)),
              (o(!0), u(H, null, J(r(K), (a) => (o(), u("td", {
                key: a,
                class: p(["max-w-[300px] cursor-pointer transition-colors", [
                  r(i) ? "px-3 py-2 border-b border-border-soft" : "px-4 py-2.5 border-r border-b border-border/60 active:bg-primary/5 hover:bg-muted/40",
                  r(i) ? {
                    "sticky left-0 z-10 bg-inherit": M(a),
                    "sticky right-0 z-10 bg-inherit": V(a)
                  } : {
                    "sticky left-[56px] z-10 !bg-white  group-hover/row:!bg-slate-50  border-r-2 border-border": M(a),
                    "sticky right-0 z-10 !bg-white  group-hover/row:!bg-slate-50  border-l-2 border-border": V(a)
                  }
                ]]),
                onDblclick: (dt) => ae(a, s[a], d),
                title: s[a] === null ? "NULL" : String(s[a])
              }, [
                s[a] === null ? (o(), u("span", {
                  key: 0,
                  class: p(["text-[11px] font-mono italic text-muted-foreground/30 block w-full truncate", L(a)])
                }, "NULL", 2)) : C(e.$slots, `cell-${a}`, {
                  key: 1,
                  value: s[a],
                  row: s,
                  column: a,
                  index: d
                }, () => [
                  Q(String(s[a])) ? (o(), u("div", {
                    key: 0,
                    class: p(["flex items-center gap-2 w-full overflow-hidden", L(a) === "text-center" ? "justify-center" : L(a) === "text-right" ? "justify-end" : "justify-start"])
                  }, [
                    t[6] || (t[6] = l("span", { class: "shrink-0 px-1.5 py-0.5 rounded-[4px] bg-primary/10 text-primary text-[8px] font-medium leading-none border border-primary/20 uppercase tracking-tighter" }, "JSON", -1)),
                    l("span", {
                      class: p(["text-[11px] font-mono truncate opacity-80", L(a)])
                    }, y(s[a]), 3)
                  ], 2)) : (o(), u("div", {
                    key: 1,
                    class: p(["text-[11px] font-mono text-foreground/90 truncate", L(a)])
                  }, y(de(s[a])), 3))
                ], !0)
              ], 42, qe))), 128))
            ], 10, Xe))), 128))
          ])
        ], 2)) : f("", !0),
        e.source.displayItems.value.length === 0 && !e.source.pagination.loading ? (o(), u("div", Ge, t[7] || (t[7] = [
          l("div", { class: "w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 border border-border/50" }, [
            l("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-6 w-6 text-muted-foreground",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              l("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: "M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4"
              })
            ])
          ], -1),
          l("p", { class: "text-xs text-muted-foreground uppercase tracking-wider font-medium" }, "No Records Found", -1)
        ]))) : f("", !0)
      ], 38),
      e.paginationPosition === "bottom" || e.paginationPosition === "both" ? (o(), m(b(e.$c("display.simple-pagination")), {
        key: 2,
        source: e.source,
        class: p(r(i) ? "!border-0 !bg-transparent !px-0 !py-0" : "border-t bg-muted/5 font-medium")
      }, null, 8, ["source", "class"])) : f("", !0),
      (o(), m(b(e.$c("ui.modal")), {
        show: r(O),
        onClose: N,
        maxWidth: "max-w-4xl"
      }, {
        header: S(() => [
          l("div", Qe, [
            l("div", Ze, [
              l("h3", _e, y(r(T)), 1),
              l("span", et, "Row #" + y(r(I) + 1) + " • " + y(r(z) ? "Structured Object" : "Raw Data"), 1)
            ])
          ])
        ]),
        footer: S(() => [
          l("div", lt, [
            l("div", at, [
              (o(), m(b(e.$c("ui.button")), {
                variant: "ghost",
                size: "sm",
                onClick: N,
                class: "text-[10px] font-black uppercase tracking-widest px-8 hover:bg-muted",
                disabled: r(D)
              }, {
                default: S(() => [
                  P(y(e.source.onCellUpdate ? "Discard" : "Close"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]))
            ]),
            l("div", nt, [
              (o(), m(b(e.$c("ui.button")), {
                variant: "outline",
                size: "sm",
                onClick: me
              }, {
                default: S(() => t[10] || (t[10] = [
                  P(" Filter by this value ")
                ])),
                _: 1
              })),
              e.source.onCellUpdate ? f("", !0) : (o(), m(b(e.$c("ui.button")), {
                key: 0,
                variant: "outline",
                size: "sm",
                onClick: ie
              }, {
                default: S(() => t[11] || (t[11] = [
                  P(" Copy Value ")
                ])),
                _: 1
              })),
              e.source.onCellUpdate ? (o(), m(b(e.$c("ui.button")), {
                key: 1,
                variant: "default",
                size: "sm",
                onClick: ne,
                disabled: r(D)
              }, {
                default: S(() => [
                  l("div", it, [
                    r(D) ? (o(), m(r(Me), {
                      key: 0,
                      size: 14,
                      class: "animate-spin"
                    })) : f("", !0),
                    l("span", null, y(r(D) ? "COMMITTING..." : "COMMIT CHANGES"), 1)
                  ])
                ]),
                _: 1
              }, 8, ["disabled"])) : f("", !0)
            ])
          ])
        ]),
        default: S(() => [
          l("div", tt, [
            l("div", st, [
              (o(), m(b(e.$c("form.textarea")), {
                modelValue: r(h),
                "onUpdate:modelValue": t[3] || (t[3] = (s) => xe(h) ? h.value = s : null),
                readonly: !e.source.onCellUpdate,
                "auto-size": { minRows: 5, maxRows: 18 },
                class: "w-full font-mono text-[13px]",
                placeholder: "Enter value..."
              }, null, 8, ["modelValue", "readonly"])),
              e.source.onCellUpdate ? (o(), u("div", rt, t[8] || (t[8] = [
                l("div", { class: "w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" }, null, -1),
                l("span", { class: "text-[10px] text-amber-600 font-black uppercase tracking-widest italic" }, " Direct write mode active • Changes will commit to remote provider ", -1)
              ]))) : (o(), u("div", ot, t[9] || (t[9] = [
                l("div", { class: "w-1.5 h-1.5 rounded-full bg-slate-400" }, null, -1),
                l("span", { class: "text-[10px] text-faint font-black uppercase tracking-widest italic" }, " Read-only context • Modification disabled for this result set ", -1)
              ])))
            ])
          ])
        ]),
        _: 1
      }, 40, ["show"])),
      (o(), m(b(e.$c("ui.context-menu")), {
        ref_key: "headerContextMenuRef",
        ref: _,
        options: r(ge)
      }, null, 8, ["options"]))
    ], 10, je));
  }
}), mt = /* @__PURE__ */ Ve(ut, [["__scopeId", "data-v-67018bae"]]);
export {
  mt as default
};
//# sourceMappingURL=DataTable-DCFx8TGK.js.map
