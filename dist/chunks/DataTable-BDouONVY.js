import { defineComponent as Be, inject as Ve, openBlock as r, createElementBlock as d, normalizeClass as b, unref as l, createElementVNode as a, renderSlot as C, createBlock as v, resolveDynamicComponent as m, createCommentVNode as p, toDisplayString as g, normalizeStyle as Ie, Fragment as Y, renderList as W, withModifiers as ue, createVNode as Te, createSlots as je, withCtx as S, isRef as Ue, createTextVNode as q } from "vue";
import { ClipboardList as Ne, Filter as Oe, ArrowLeft as Ae, ArrowRight as Fe, EyeOff as Ke, ChevronUp as Ee, ChevronDown as Pe, ChevronsUpDown as He, X as Je, Loader2 as Xe } from "lucide-vue-next";
import { _ as Ye } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const We = ["data-variant"], qe = { class: "flex items-center gap-4" }, Ge = { class: "flex items-center gap-2" }, Qe = {
  key: 1,
  class: "px-3.5 py-2.5 border-b border-border bg-card flex items-center justify-between shrink-0"
}, Ze = { class: "flex items-center gap-3" }, et = { class: "flex items-center gap-2 pl-4 border-l border-border ml-1" }, tt = { class: "text-xs font-mono font-bold text-primary tabular-nums" }, lt = { class: "flex items-center gap-4" }, st = { class: "dt-fit relative flex flex-col" }, ot = ["checked", "indeterminate"], at = {
  key: 1,
  class: "sticky top-0 left-0 z-40 bg-muted/95 backdrop-blur-md border-b-2 border-r-2 border-border w-14 min-w-[56px] px-3 py-2 text-xs font-medium text-faint font-bold text-center"
}, rt = ["onClick", "onContextmenu"], nt = { class: "flex items-center justify-between gap-2 w-full" }, it = {
  key: 3,
  class: "sort-rank"
}, ut = { class: "relative" }, dt = {
  key: 0,
  class: "absolute inset-0 z-20 bg-background/40 backdrop-blur-[1px] flex items-center justify-center pointer-events-none transition-opacity duration-300"
}, ct = ["data-state"], pt = ["checked", "onChange"], ft = {
  key: 1,
  class: "sticky left-0 z-20 w-14 min-w-[56px] px-3 py-2.5 border-r-2 border-b border-border/30 text-center font-mono text-xs text-muted-foreground/60 !bg-card group-hover/row:!bg-muted group-hover/row:text-primary transition-colors"
}, bt = ["onDblclick", "title"], vt = {
  key: 2,
  class: "h-64 flex flex-col items-center justify-center opacity-40"
}, mt = ["aria-label"], gt = { class: "bulk-bar__row bulk-bar__row--head" }, yt = { class: "bulk-bar__count" }, ht = { class: "bulk-bar__n tabular-nums" }, kt = { class: "bulk-bar__label" }, xt = ["title", "aria-label"], wt = { class: "bulk-bar__row bulk-bar__actions" }, Ct = { class: "flex items-center justify-between w-full pr-8" }, St = { class: "flex flex-col gap-1" }, _t = { class: "text-xs font-semibold text-primary" }, $t = { class: "text-xs text-muted-foreground font-semibold opacity-50" }, zt = { class: "flex flex-col gap-4 max-h-[60vh] py-2" }, Lt = { class: "flex-1 flex flex-col" }, Dt = {
  key: 0,
  class: "mt-3 flex items-center gap-2 px-1"
}, Rt = {
  key: 1,
  class: "mt-3 flex items-center gap-2 px-1 opacity-50"
}, Mt = { class: "flex items-center gap-3 w-full justify-between px-1" }, Bt = { class: "flex items-center gap-2" }, Vt = { class: "flex items-center gap-3" }, It = { class: "flex items-center gap-2" }, Tt = /* @__PURE__ */ Be({
  __name: "DataTable",
  props: {
    fetch: {},
    columns: {},
    stickyLeft: {},
    stickyRight: {},
    fitColumns: {},
    persistId: {},
    pageSize: {},
    sort: {},
    source: {},
    maxHeight: {},
    paginationPosition: { default: "bottom" },
    allowCustomColumns: { type: Boolean, default: !1 },
    showSearch: { type: Boolean, default: !0 },
    variant: { default: "grid" },
    showSelect: { type: Boolean, default: !1 },
    selected: { default: () => [] },
    rowKey: {},
    showBulkBar: { type: Boolean, default: !0 },
    bulkBarLabel: { default: "selected" },
    bulkBarClearLabel: { default: "Clear selection" },
    cellDetail: { type: Boolean, default: !1 }
  },
  emits: ["filter-by-value", "update:selected"],
  setup(de, { expose: ce, emit: pe }) {
    const c = de, x = Ve("$superApp");
    if (!x)
      throw new Error("🚨 [DataTable] Critical: SuperApp bridge not found.");
    const { ref: f, computed: w, watch: G } = x.$vue, i = w(() => c.variant === "clean"), fe = c.source ? null : new x.DataTableSource(x, c.fetch, {
      persistId: c.persistId,
      pageSize: c.pageSize ?? 20,
      sort: c.sort
    }), s = w(() => c.source ?? fe);
    function be(e) {
      const t = s.value.columns.value, o = s.value.params.sort.map((u) => t.indexOf(u.field));
      s.value.columns.value = [...e], s.value.stickyLeft.value = [...c.stickyLeft ?? []], s.value.stickyRight.value = [...c.stickyRight ?? []], s.value.params.sort = s.value.params.sort.map((u, n) => {
        const A = o[n];
        return A < 0 || !e[A] ? u : { field: e[A], order: u.order };
      });
    }
    c.source || G(
      () => c.columns,
      (e) => {
        !e || e.length === 0 || (be(e), s.value.refresh());
      },
      { immediate: !0, deep: !0 }
    );
    function ve() {
      return s.value.refresh();
    }
    function me() {
      return s.value.fetch({ page: 1 });
    }
    ce({ source: s, refresh: ve, reload: me });
    function F(e) {
      return s.value.params.sort.find((t) => t.field === e) ?? null;
    }
    const K = (e) => !!F(e);
    function Q(e) {
      return s.value.params.sort.length < 2 ? 0 : s.value.params.sort.findIndex((t) => t.field === e) + 1;
    }
    const E = w(() => {
      const e = s.value.columns.value.filter((n) => !s.value.hiddenColumns.value.includes(n)), t = e.filter((n) => s.value.stickyLeft.value.includes(n)), o = e.filter((n) => s.value.stickyRight.value.includes(n)), u = e.filter((n) => !s.value.stickyLeft.value.includes(n) && !s.value.stickyRight.value.includes(n));
      return [...t, ...u, ...o];
    }), M = (e) => s.value.stickyLeft.value.includes(e), Z = (e) => (c.fitColumns ?? []).includes(e), B = (e) => s.value.stickyRight.value.includes(e), y = f(null), V = f(!1), ee = f(0), te = f(0), le = f(0), se = f(0), ge = (e) => {
      if (!y.value || e.button !== 0) return;
      const t = e.target;
      t.closest("button") || t.closest("input") || t.closest("a") || (window.getSelection()?.removeAllRanges(), V.value = !0, ee.value = e.pageX - y.value.offsetLeft, te.value = e.pageY - y.value.offsetTop, le.value = y.value.scrollLeft, se.value = y.value.scrollTop);
    }, ye = (e) => {
      if (!V.value || !y.value) return;
      e.preventDefault();
      const t = e.pageX - y.value.offsetLeft, o = e.pageY - y.value.offsetTop, u = (t - ee.value) * 1.5, n = (o - te.value) * 1.5;
      y.value.scrollLeft = le.value - u, y.value.scrollTop = se.value - n;
    }, oe = () => {
      V.value = !1;
    }, U = f(!1), I = f(""), T = f(""), j = f(""), N = f(0), L = f(!1), ae = (e) => {
      if (typeof e != "string") return !1;
      const t = e.trim();
      if (!t.startsWith("{") && !t.startsWith("[")) return !1;
      try {
        const o = JSON.parse(t);
        return typeof o == "object" && o !== null;
      } catch {
        return !1;
      }
    }, he = (e, t, o) => {
      if (!c.cellDetail) return;
      I.value = e;
      const u = t === null ? "" : String(t);
      if (T.value = u, N.value = o, ae(u))
        try {
          j.value = JSON.stringify(JSON.parse(u), null, 2), L.value = !0;
        } catch {
          j.value = u, L.value = !1;
        }
      else
        j.value = u, L.value = !1;
      _.value = L.value ? j.value : T.value, U.value = !0;
    }, re = f(!1), _ = f(""), D = f(!1), ke = async () => {
      if (s.value.onCellUpdate) {
        D.value = !0;
        try {
          const e = s.value.displayItems.value[N.value];
          await s.value.onCellUpdate({
            column: I.value,
            value: _.value,
            row: e,
            index: N.value
          }), e[I.value] = _.value, T.value = _.value, x.$message?.success("Record Updated", "Database entry synchronized successfully."), re.value = !1, U.value = !1;
        } catch (e) {
          x.$message?.error("Update Failed", e.message || "An error occurred during synchronization.");
        } finally {
          D.value = !1;
        }
      }
    }, P = () => {
      U.value = !1, re.value = !1;
    }, xe = () => {
      navigator.clipboard.writeText(L.value ? j.value : T.value), x.$message?.success("Copied", "Value copied to clipboard");
    }, we = (e, t) => {
      const o = !!t && (t.shiftKey || t.ctrlKey || t.metaKey);
      s.value.toggleSort(e, o);
    }, R = (e) => {
      if (!e) return "text-left";
      const t = e.toLowerCase().trim();
      return t === "id" || t === "#" || t === "code" || t === "sku" || t === "status" || t === "role" || t === "type" || t === "gender" || t === "uom" || t === "tax" ? "text-center" : t.includes("amount") || t.includes("price") || t.includes("total") || t.includes("qty") || t.includes("quantity") || t.includes("discount") || t.includes("vat") ? "text-right" : "text-left";
    }, Ce = (e) => {
      if (e == null) return e;
      const t = String(e);
      return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(t) ? t.replace(/[Zz]$|\+00:00$/, "").replace(/\.\d{3}$/, "").replace("T", " ") : e;
    }, H = pe, $ = (e) => typeof c.rowKey == "function" ? c.rowKey(e) : c.rowKey ? e?.[c.rowKey] : e, k = f([...c.selected]);
    G(() => c.selected, (e) => {
      k.value = [...e || []];
    });
    const O = (e) => {
      k.value = e, H("update:selected", e);
    }, z = (e) => k.value.some((t) => $(t) === $(e)), Se = (e) => O(z(e) ? k.value.filter((t) => $(t) !== $(e)) : [...k.value, e]), J = w(() => s.value.displayItems.value.length > 0 && s.value.displayItems.value.every(z)), _e = w(() => !J.value && s.value.displayItems.value.some(z)), $e = () => {
      const e = s.value.displayItems.value;
      J.value ? O(k.value.filter((t) => !e.some((o) => $(o) === $(t)))) : O([...k.value, ...e.filter((t) => !z(t))]);
    }, X = w(() => k.value.length), ne = () => O([]), ze = w(() => c.showSelect && c.showBulkBar && X.value > 0), Le = () => {
      H("filter-by-value", {
        column: I.value,
        value: T.value
      }), P();
    }, ie = f(null), h = f(""), De = (e, t) => {
      h.value = t, ie.value?.open(e);
    }, Re = () => {
      if (!h.value) return;
      const e = s.value.displayItems.value.map((o) => {
        const u = o[h.value];
        return u === null ? "NULL" : String(u);
      }), t = e.join(`
`);
      navigator.clipboard.writeText(t), x.$message?.success("Column Copied", `${e.length} row values copied to clipboard.`);
    }, Me = w(() => [
      {
        label: `Copy Column: ${h.value}`,
        icon: Ne,
        action: Re,
        shortcut: "⌘C"
      },
      {
        label: "Add Filter",
        icon: Oe,
        action: () => H("filter-by-value", { column: h.value, value: "" })
      },
      {
        label: "Pin Left",
        icon: Ae,
        action: () => s.value.toggleSticky(h.value, "left"),
        disabled: M(h.value)
      },
      {
        label: "Pin Right",
        icon: Fe,
        action: () => s.value.toggleSticky(h.value, "right"),
        disabled: B(h.value)
      },
      {
        label: "Hide Column",
        icon: Ke,
        variant: "danger",
        action: () => s.value.hiddenColumns.value.push(h.value)
      }
    ]);
    return (e, t) => (r(), d("div", {
      class: b(["relative flex-1 min-h-0 flex flex-col bg-transparent overflow-hidden", l(i) ? "gap-3" : "rounded-xl border border-border"]),
      "data-variant": e.variant
    }, [
      e.showSearch || e.$slots["toolbar-left"] || e.$slots["toolbar-actions"] ? (r(), d("div", {
        key: 0,
        class: b(["flex items-center justify-between shrink-0 overflow-x-auto no-scrollbar", l(i) ? "" : "px-4 py-3 border-b border-border bg-muted/20"])
      }, [
        a("div", qe, [
          C(e.$slots, "toolbar-left", {}, void 0, !0),
          e.showSearch ? (r(), v(m(e.$c("ui.search-input")), {
            key: 0,
            modelValue: l(s).searchQuery.value,
            "onUpdate:modelValue": t[0] || (t[0] = (o) => l(s).searchQuery.value = o),
            placeholder: "Search results in current page...",
            "show-clear": !0,
            class: "control-lg max-w-full"
          }, null, 8, ["modelValue"])) : p("", !0),
          C(e.$slots, "toolbar-extra", {}, void 0, !0)
        ]),
        a("div", Ge, [
          C(e.$slots, "toolbar-actions", {}, void 0, !0),
          l(i) && e.allowCustomColumns && e.paginationPosition === "top" ? (r(), v(m(e.$c("display.column-settings")), {
            key: 0,
            source: l(s)
          }, null, 8, ["source"])) : p("", !0)
        ])
      ], 2)) : p("", !0),
      C(e.$slots, "after-toolbar", {}, void 0, !0),
      !l(i) && (e.allowCustomColumns || l(s).items.value.length > 0) ? (r(), d("div", Qe, [
        a("div", Ze, [
          e.allowCustomColumns ? (r(), v(m(e.$c("display.column-settings")), {
            key: 0,
            source: l(s)
          }, null, 8, ["source"])) : p("", !0),
          C(e.$slots, "nav-left", {}, void 0, !0),
          a("div", et, [
            t[4] || (t[4] = a("span", { class: "text-xs text-faint font-bold" }, "Total:", -1)),
            a("span", tt, g(l(s).pagination.total.toLocaleString()), 1)
          ])
        ]),
        a("div", lt, [
          C(e.$slots, "nav-extra", {}, void 0, !0),
          l(s).items.value.length > 0 ? (r(), v(m(e.$c("display.simple-pagination")), {
            key: 0,
            source: l(s),
            variant: "minimal",
            class: "!px-0 !py-0 bg-transparent border-none"
          }, null, 8, ["source"])) : p("", !0)
        ])
      ])) : p("", !0),
      a("div", st, [
        a("div", {
          ref_key: "containerRef",
          ref: y,
          class: b(["data-grid-container dt-fit overflow-auto relative scrollbar-bold transition-shadow", [
            l(i) && "table-wrap bg-card",
            l(V) ? "cursor-grabbing select-none" : "cursor-grab",
            { "shadow-inner": l(V) }
          ]]),
          style: Ie({ maxHeight: e.maxHeight || void 0 }),
          onMousedown: ge,
          onMousemove: ye,
          onMouseup: oe,
          onMouseleave: oe
        }, [
          l(s).displayItems.value.length > 0 ? (r(), d("table", {
            key: 0,
            class: b(["w-full table-auto min-w-max", l(i) ? "border-collapse" : "border-separate border-spacing-0"])
          }, [
            a("thead", null, [
              a("tr", null, [
                e.showSelect ? (r(), d("th", {
                  key: 0,
                  class: b(["sticky top-0 left-0 z-40 w-10 min-w-[40px] px-3 py-2 text-center", l(i) ? "border-b border-border-soft" : "bg-muted/95 backdrop-blur-md border-b-2 border-r border-border"])
                }, [
                  a("input", {
                    type: "checkbox",
                    class: "accent-primary w-4 h-4 cursor-pointer align-middle",
                    checked: l(J),
                    indeterminate: l(_e),
                    "aria-label": "select page",
                    "data-testid": "select-all",
                    onChange: t[1] || (t[1] = (o) => $e())
                  }, null, 40, ot)
                ], 2)) : p("", !0),
                l(i) ? p("", !0) : (r(), d("th", at, " # ")),
                (r(!0), d(Y, null, W(l(E), (o) => (r(), d("th", {
                  key: o,
                  class: b(["sticky top-0 z-10 cursor-pointer transition-colors select-none group", [
                    Z(o) && "dt-fit-col",
                    l(i) ? "border-b border-border-soft hover:brightness-110" : "bg-muted/95 backdrop-blur-md px-4 py-2.5 border-b-2 border-r border-border min-w-[150px] hover:bg-muted",
                    {
                      "w-[80px] min-w-[80px]": o.toLowerCase().trim() === "id",
                      "min-w-[180px]": o.toLowerCase().includes("date") || o.toLowerCase().includes("time"),
                      "bg-primary/[0.08]": !l(i) && K(o),
                      sorted: l(i) && K(o),
                      "sticky left-[56px] z-30 bg-muted border-r-2 border-border": !l(i) && M(o),
                      "sticky right-0 z-30 bg-muted border-l-2 border-border": !l(i) && B(o),
                      "sticky left-0 z-30": l(i) && M(o),
                      "sticky right-0 z-30": l(i) && B(o)
                    }
                  ]]),
                  onClick: (u) => we(o, u),
                  onContextmenu: ue((u) => De(u, o), ["prevent"])
                }, [
                  a("div", nt, [
                    a("span", {
                      class: b(["transition-colors truncate flex-1", [R(o), l(i) ? "text-inherit" : "text-xs font-bold text-muted-foreground group-hover:text-primary"]])
                    }, g(o), 3),
                    a("div", {
                      class: b(["relative w-4 h-4 flex items-center justify-center shrink-0 transition-all duration-200", [
                        K(o) ? "opacity-100 scale-110" : l(i) ? "opacity-70 group-hover:opacity-100" : "opacity-20 group-hover:opacity-40"
                      ]])
                    }, [
                      F(o)?.order === "asc" ? (r(), v(l(Ee), {
                        key: 0,
                        size: 12,
                        class: b(l(i) ? "text-inherit" : "text-primary")
                      }, null, 8, ["class"])) : F(o)?.order === "desc" ? (r(), v(l(Pe), {
                        key: 1,
                        size: 12,
                        class: b(l(i) ? "text-inherit" : "text-primary")
                      }, null, 8, ["class"])) : (r(), v(l(He), {
                        key: 2,
                        size: 10
                      })),
                      Q(o) ? (r(), d("span", it, g(Q(o)), 1)) : p("", !0)
                    ], 2)
                  ])
                ], 42, rt))), 128))
              ])
            ]),
            a("tbody", ut, [
              l(s).pagination.loading ? (r(), d("div", dt, t[5] || (t[5] = [
                a("div", { class: "flex flex-col items-center gap-3" }, [
                  a("div", { class: "w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" })
                ], -1)
              ]))) : p("", !0),
              (r(!0), d(Y, null, W(l(s).displayItems.value, (o, u) => (r(), d("tr", {
                key: u,
                class: b(["transition-all group/row", [l(i) ? "bg-card hover:bg-muted" : "hover:bg-muted/30", !l(i) && e.showSelect && z(o) && "bg-primary/5"]]),
                "data-state": e.showSelect && z(o) ? "selected" : void 0
              }, [
                e.showSelect ? (r(), d("td", {
                  key: 0,
                  class: b(["sticky left-0 z-20 w-10 min-w-[40px] px-3 text-center", l(i) ? "border-b border-border-soft bg-inherit" : "py-2.5 border-r border-b border-border/30 !bg-card"]),
                  onClick: t[2] || (t[2] = ue(() => {
                  }, ["stop"]))
                }, [
                  (r(), d("input", {
                    type: "checkbox",
                    key: String($(o)),
                    class: "accent-primary w-4 h-4 cursor-pointer align-middle",
                    checked: z(o),
                    "data-testid": "select-row",
                    onChange: (n) => Se(o)
                  }, null, 40, pt))
                ], 2)) : p("", !0),
                l(i) ? p("", !0) : (r(), d("td", ft, g((l(s).pagination.page - 1) * l(s).pagination.pageSize + u + 1), 1)),
                (r(!0), d(Y, null, W(l(E), (n) => (r(), d("td", {
                  key: n,
                  class: b(["max-w-[300px] cursor-pointer transition-colors", [
                    Z(n) && "dt-fit-col",
                    l(i) ? "border-b border-border-soft" : "px-4 py-2.5 border-r border-b border-border/60 active:bg-primary/5 hover:bg-muted/40",
                    l(i) ? {
                      "sticky left-0 z-10 bg-inherit": M(n),
                      "sticky right-0 z-10 bg-inherit": B(n)
                    } : {
                      "sticky left-[56px] z-10 !bg-card  group-hover/row:!bg-muted  border-r-2 border-border": M(n),
                      "sticky right-0 z-10 !bg-card  group-hover/row:!bg-muted  border-l-2 border-border": B(n)
                    }
                  ]]),
                  onDblclick: (A) => he(n, o[n], u),
                  title: o[n] === null ? "NULL" : String(o[n])
                }, [
                  o[n] === null ? (r(), d("span", {
                    key: 0,
                    class: b(["text-xs font-mono italic text-muted-foreground/30 block w-full truncate", R(n)])
                  }, "NULL", 2)) : C(e.$slots, `cell-${n}`, {
                    key: 1,
                    value: o[n],
                    row: o,
                    column: n,
                    index: u
                  }, () => [
                    ae(String(o[n])) ? (r(), d("div", {
                      key: 0,
                      class: b(["flex items-center gap-2 w-full overflow-hidden", R(n) === "text-center" ? "justify-center" : R(n) === "text-right" ? "justify-end" : "justify-start"])
                    }, [
                      t[6] || (t[6] = a("span", { class: "shrink-0 px-1.5 py-0.5 rounded-[4px] bg-primary/10 text-primary text-[8px] font-medium leading-none border border-primary/20" }, "JSON", -1)),
                      a("span", {
                        class: b(["text-xs font-mono truncate opacity-80", R(n)])
                      }, g(o[n]), 3)
                    ], 2)) : (r(), d("div", {
                      key: 1,
                      class: b(["text-xs font-mono text-foreground/90 truncate", R(n)])
                    }, g(Ce(o[n])), 3))
                  ], !0)
                ], 42, bt))), 128))
              ], 10, ct))), 128))
            ])
          ], 2)) : p("", !0),
          l(s).displayItems.value.length === 0 && l(s).pagination.loading ? (r(), v(m(e.$c("ui.skeleton")), {
            key: 1,
            variant: "table",
            rows: Math.min(c.pageSize ?? 20, 10),
            cols: Math.max(l(E).length, 1),
            class: "!border-0 !shadow-none !rounded-none",
            "data-testid": "data-table-skeleton"
          }, null, 8, ["rows", "cols"])) : p("", !0),
          l(s).displayItems.value.length === 0 && !l(s).pagination.loading ? (r(), d("div", vt, t[7] || (t[7] = [
            a("div", { class: "w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 border border-border/50" }, [
              a("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-6 w-6 text-muted-foreground",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                a("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "1.5",
                  d: "M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4"
                })
              ])
            ], -1),
            a("p", { class: "text-xs text-muted-foreground font-medium" }, "No Records Found", -1)
          ]))) : p("", !0)
        ], 38),
        l(ze) ? (r(), d("div", {
          key: 0,
          class: "bulk-bar",
          role: "toolbar",
          "aria-label": e.bulkBarLabel,
          "data-testid": "bulk-bar"
        }, [
          a("div", gt, [
            a("div", yt, [
              a("span", ht, g(l(X)), 1),
              a("span", kt, g(e.bulkBarLabel), 1)
            ]),
            a("button", {
              type: "button",
              class: "bulk-bar__close",
              title: e.bulkBarClearLabel,
              "aria-label": e.bulkBarClearLabel,
              "data-testid": "bulk-bar-clear",
              onClick: ne
            }, [
              Te(l(Je), { size: 14 })
            ], 8, xt)
          ]),
          a("div", wt, [
            C(e.$slots, "bulk-actions", {
              selected: l(k),
              count: l(X),
              clear: ne
            }, void 0, !0)
          ])
        ], 8, mt)) : p("", !0)
      ]),
      e.paginationPosition === "bottom" || e.paginationPosition === "both" ? (r(), v(m(e.$c("display.simple-pagination")), {
        key: 2,
        source: l(s),
        class: b(l(i) ? "!border-0 !bg-transparent !px-0 !py-0" : "border-t bg-muted/5 font-medium")
      }, je({ _: 2 }, [
        l(i) && e.allowCustomColumns ? {
          name: "end",
          fn: S(() => [
            (r(), v(m(e.$c("display.column-settings")), { source: l(s) }, null, 8, ["source"]))
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["source", "class"])) : p("", !0),
      (r(), v(m(e.$c("ui.modal")), {
        show: l(U),
        onClose: P,
        maxWidth: "max-w-4xl"
      }, {
        header: S(() => [
          a("div", Ct, [
            a("div", St, [
              a("h3", _t, g(l(I)), 1),
              a("span", $t, "Row #" + g(l(N) + 1) + " • " + g(l(L) ? "Structured Object" : "Raw Data"), 1)
            ])
          ])
        ]),
        footer: S(() => [
          a("div", Mt, [
            a("div", Bt, [
              (r(), v(m(e.$c("ui.button")), {
                variant: "ghost",
                size: "sm",
                onClick: P,
                class: "text-xs font-semibold px-8 hover:bg-muted",
                disabled: l(D)
              }, {
                default: S(() => [
                  q(g(l(s).onCellUpdate ? "Discard" : "Close"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]))
            ]),
            a("div", Vt, [
              (r(), v(m(e.$c("ui.button")), {
                variant: "outline",
                size: "sm",
                onClick: Le
              }, {
                default: S(() => t[10] || (t[10] = [
                  q(" Filter by this value ")
                ])),
                _: 1
              })),
              l(s).onCellUpdate ? p("", !0) : (r(), v(m(e.$c("ui.button")), {
                key: 0,
                variant: "outline",
                size: "sm",
                onClick: xe
              }, {
                default: S(() => t[11] || (t[11] = [
                  q(" Copy Value ")
                ])),
                _: 1
              })),
              l(s).onCellUpdate ? (r(), v(m(e.$c("ui.button")), {
                key: 1,
                variant: "default",
                size: "sm",
                onClick: ke,
                disabled: l(D)
              }, {
                default: S(() => [
                  a("div", It, [
                    l(D) ? (r(), v(l(Xe), {
                      key: 0,
                      size: 14,
                      class: "animate-spin"
                    })) : p("", !0),
                    a("span", null, g(l(D) ? "COMMITTING..." : "COMMIT CHANGES"), 1)
                  ])
                ]),
                _: 1
              }, 8, ["disabled"])) : p("", !0)
            ])
          ])
        ]),
        default: S(() => [
          a("div", zt, [
            a("div", Lt, [
              (r(), v(m(e.$c("form.textarea")), {
                modelValue: l(_),
                "onUpdate:modelValue": t[3] || (t[3] = (o) => Ue(_) ? _.value = o : null),
                readonly: !l(s).onCellUpdate,
                "auto-size": { minRows: 5, maxRows: 18 },
                class: "w-full font-mono text-[13px]",
                placeholder: "Enter value..."
              }, null, 8, ["modelValue", "readonly"])),
              l(s).onCellUpdate ? (r(), d("div", Dt, t[8] || (t[8] = [
                a("div", { class: "w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" }, null, -1),
                a("span", { class: "text-xs text-amber-600 font-semibold italic" }, " Direct write mode active • Changes will commit to remote provider ", -1)
              ]))) : (r(), d("div", Rt, t[9] || (t[9] = [
                a("div", { class: "w-1.5 h-1.5 rounded-full bg-slate-400" }, null, -1),
                a("span", { class: "text-xs text-faint font-semibold italic" }, " Read-only context • Modification disabled for this result set ", -1)
              ])))
            ])
          ])
        ]),
        _: 1
      }, 40, ["show"])),
      (r(), v(m(e.$c("ui.context-menu")), {
        ref_key: "headerContextMenuRef",
        ref: ie,
        options: l(Me)
      }, null, 8, ["options"]))
    ], 10, We));
  }
}), Ot = /* @__PURE__ */ Ye(Tt, [["__scopeId", "data-v-b3570c41"]]);
export {
  Ot as default
};
//# sourceMappingURL=DataTable-BDouONVY.js.map
