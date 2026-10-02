import { defineComponent as Je, inject as Xe, openBlock as a, createElementBlock as c, normalizeClass as b, unref as s, createElementVNode as r, renderSlot as S, createBlock as f, resolveDynamicComponent as y, createCommentVNode as p, toDisplayString as g, normalizeStyle as Z, Fragment as ee, renderList as te, withModifiers as U, createVNode as He, createSlots as Ye, withCtx as _, isRef as qe, createTextVNode as se } from "vue";
import { ClipboardList as Ge, Filter as Qe, ArrowLeft as Ze, ArrowRight as et, EyeOff as tt, ChevronUp as st, ChevronDown as ot, ChevronsUpDown as lt, X as rt, Loader2 as at } from "lucide-vue-next";
import { _ as nt } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const it = ["data-variant"], ut = { class: "flex items-center gap-4" }, dt = { class: "flex items-center gap-2" }, ct = {
  key: 1,
  class: "px-3.5 py-2.5 border-b border-border bg-card flex items-center justify-between shrink-0"
}, pt = { class: "flex items-center gap-3" }, vt = { class: "flex items-center gap-2 pl-4 border-l border-border ml-1" }, bt = { class: "text-xs font-mono font-bold text-primary tabular-nums" }, ft = { class: "flex items-center gap-4" }, mt = { class: "dt-fit relative flex flex-col" }, yt = ["checked", "indeterminate"], gt = {
  key: 1,
  class: "sticky top-0 left-0 z-40 bg-muted/95 backdrop-blur-md border-b-2 border-r-2 border-border w-14 min-w-[56px] px-3 py-2 text-xs font-medium text-faint font-bold text-center"
}, ht = ["onClick", "onContextmenu"], kt = ["title", "onMousedown", "onDblclick"], wt = { class: "flex items-center justify-between gap-2 w-full" }, xt = {
  key: 3,
  class: "sort-rank"
}, Ct = { class: "relative" }, St = {
  key: 0,
  class: "absolute inset-0 z-20 bg-background/40 backdrop-blur-[1px] flex items-center justify-center pointer-events-none transition-opacity duration-300"
}, _t = ["data-state"], $t = ["checked", "onChange"], zt = {
  key: 1,
  class: "sticky left-0 z-20 w-14 min-w-[56px] px-3 py-2.5 border-r-2 border-b border-border/30 text-center font-mono text-xs text-muted-foreground/60 !bg-card group-hover/row:!bg-muted group-hover/row:text-primary transition-colors"
}, Lt = ["onDblclick", "title"], Dt = {
  key: 2,
  class: "h-64 flex flex-col items-center justify-center opacity-40"
}, Rt = ["aria-label"], Mt = { class: "bulk-bar__row bulk-bar__row--head" }, Bt = { class: "bulk-bar__count" }, It = { class: "bulk-bar__n tabular-nums" }, Vt = { class: "bulk-bar__label" }, jt = ["title", "aria-label"], Ot = { class: "bulk-bar__row bulk-bar__actions" }, Tt = { class: "flex items-center justify-between w-full pr-8" }, Nt = { class: "flex flex-col gap-1" }, Ut = { class: "text-xs font-semibold text-primary" }, At = { class: "text-xs text-muted-foreground font-semibold opacity-50" }, Et = { class: "flex flex-col gap-4 max-h-[60vh] py-2" }, Ft = { class: "flex-1 flex flex-col" }, Kt = {
  key: 0,
  class: "mt-3 flex items-center gap-2 px-1"
}, Pt = {
  key: 1,
  class: "mt-3 flex items-center gap-2 px-1 opacity-50"
}, Wt = { class: "flex items-center gap-3 w-full justify-between px-1" }, Jt = { class: "flex items-center gap-2" }, Xt = { class: "flex items-center gap-3" }, Ht = { class: "flex items-center gap-2" }, Yt = 56, qt = /* @__PURE__ */ Je({
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
    cellDetail: { type: Boolean, default: !1 },
    bordered: { type: Boolean, default: !1 },
    resizable: { type: Boolean, default: !0 }
  },
  emits: ["filter-by-value", "update:selected"],
  setup(ge, { expose: he, emit: ke }) {
    const d = ge, C = Xe("$superApp");
    if (!C)
      throw new Error("🚨 [DataTable] Critical: SuperApp bridge not found.");
    const { ref: v, computed: w, watch: oe } = C.$vue, u = w(() => d.variant === "clean"), we = d.source ? null : new C.DataTableSource(C, d.fetch, {
      persistId: d.persistId,
      pageSize: d.pageSize ?? 20,
      sort: d.sort
    }), l = w(() => d.source ?? we), A = d.persistId ? `sapp.dt.layout.${d.persistId}` : "";
    function xe() {
      if (!A) return { widths: {} };
      try {
        const e = JSON.parse(localStorage.getItem(A) || "{}");
        return { widths: e && typeof e.widths == "object" ? e.widths : {}, bordered: typeof e?.bordered == "boolean" ? e.bordered : void 0 };
      } catch {
        return { widths: {} };
      }
    }
    const m = v(xe());
    function E() {
      if (A)
        try {
          localStorage.setItem(A, JSON.stringify(m.value));
        } catch {
        }
    }
    const le = w(() => m.value.bordered ?? d.bordered);
    function Ce(e) {
      m.value = { ...m.value, bordered: e }, E();
    }
    const W = (e) => m.value.widths[e], re = (e) => {
      const t = W(e);
      return t ? { width: `${t}px`, minWidth: `${t}px`, maxWidth: `${t}px`, overflow: "hidden" } : void 0;
    };
    function Se(e, t) {
      const o = t.target.closest("th");
      if (!o) return;
      const i = t.clientX, n = o.getBoundingClientRect().width, D = (We) => {
        m.value = { ...m.value, widths: { ...m.value.widths, [e]: Math.max(Yt, Math.round(n + We.clientX - i)) } };
      }, ye = () => {
        window.removeEventListener("mousemove", D), window.removeEventListener("mouseup", ye), document.body.style.removeProperty("cursor"), document.body.style.removeProperty("user-select"), E();
      };
      document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", D), window.addEventListener("mouseup", ye);
    }
    function _e(e) {
      const t = { ...m.value.widths };
      delete t[e], m.value = { ...m.value, widths: t }, E();
    }
    function $e() {
      m.value = { ...m.value, widths: {} }, E();
    }
    function ze(e) {
      const t = l.value.columns.value, o = l.value.params.sort.map((i) => t.indexOf(i.field));
      l.value.columns.value = [...e], l.value.stickyLeft.value = [...d.stickyLeft ?? []], l.value.stickyRight.value = [...d.stickyRight ?? []], l.value.params.sort = l.value.params.sort.map((i, n) => {
        const D = o[n];
        return D < 0 || !e[D] ? i : { field: e[D], order: i.order };
      });
    }
    d.source || oe(
      () => d.columns,
      (e) => {
        !e || e.length === 0 || (ze(e), l.value.refresh());
      },
      { immediate: !0, deep: !0 }
    );
    function Le() {
      return l.value.refresh();
    }
    function De() {
      return l.value.fetch({ page: 1 });
    }
    he({ source: l, refresh: Le, reload: De });
    function J(e) {
      return l.value.params.sort.find((t) => t.field === e) ?? null;
    }
    const X = (e) => !!J(e);
    function ae(e) {
      return l.value.params.sort.length < 2 ? 0 : l.value.params.sort.findIndex((t) => t.field === e) + 1;
    }
    const H = w(() => {
      const e = l.value.columns.value.filter((n) => !l.value.hiddenColumns.value.includes(n)), t = e.filter((n) => l.value.stickyLeft.value.includes(n)), o = e.filter((n) => l.value.stickyRight.value.includes(n)), i = e.filter((n) => !l.value.stickyLeft.value.includes(n) && !l.value.stickyRight.value.includes(n));
      return [...t, ...i, ...o];
    }), I = (e) => l.value.stickyLeft.value.includes(e), ne = (e) => (d.fitColumns ?? []).includes(e), V = (e) => l.value.stickyRight.value.includes(e), h = v(null), j = v(!1), ie = v(0), ue = v(0), de = v(0), ce = v(0), Re = (e) => {
      if (!h.value || e.button !== 0) return;
      const t = e.target;
      t.closest("button") || t.closest("input") || t.closest("a") || (window.getSelection()?.removeAllRanges(), j.value = !0, ie.value = e.pageX - h.value.offsetLeft, ue.value = e.pageY - h.value.offsetTop, de.value = h.value.scrollLeft, ce.value = h.value.scrollTop);
    }, Me = (e) => {
      if (!j.value || !h.value) return;
      e.preventDefault();
      const t = e.pageX - h.value.offsetLeft, o = e.pageY - h.value.offsetTop, i = (t - ie.value) * 1.5, n = (o - ue.value) * 1.5;
      h.value.scrollLeft = de.value - i, h.value.scrollTop = ce.value - n;
    }, pe = () => {
      j.value = !1;
    }, F = v(!1), O = v(""), T = v(""), N = v(""), K = v(0), R = v(!1), ve = (e) => {
      if (typeof e != "string") return !1;
      const t = e.trim();
      if (!t.startsWith("{") && !t.startsWith("[")) return !1;
      try {
        const o = JSON.parse(t);
        return typeof o == "object" && o !== null;
      } catch {
        return !1;
      }
    }, Be = (e, t, o) => {
      if (!d.cellDetail) return;
      O.value = e;
      const i = t === null ? "" : String(t);
      if (T.value = i, K.value = o, ve(i))
        try {
          N.value = JSON.stringify(JSON.parse(i), null, 2), R.value = !0;
        } catch {
          N.value = i, R.value = !1;
        }
      else
        N.value = i, R.value = !1;
      $.value = R.value ? N.value : T.value, F.value = !0;
    }, be = v(!1), $ = v(""), M = v(!1), Ie = async () => {
      if (l.value.onCellUpdate) {
        M.value = !0;
        try {
          const e = l.value.displayItems.value[K.value];
          await l.value.onCellUpdate({
            column: O.value,
            value: $.value,
            row: e,
            index: K.value
          }), e[O.value] = $.value, T.value = $.value, C.$message?.success("Record Updated", "Database entry synchronized successfully."), be.value = !1, F.value = !1;
        } catch (e) {
          C.$message?.error("Update Failed", e.message || "An error occurred during synchronization.");
        } finally {
          M.value = !1;
        }
      }
    }, Y = () => {
      F.value = !1, be.value = !1;
    }, Ve = () => {
      navigator.clipboard.writeText(R.value ? N.value : T.value), C.$message?.success("Copied", "Value copied to clipboard");
    }, je = (e, t) => {
      const o = !!t && (t.shiftKey || t.ctrlKey || t.metaKey);
      l.value.toggleSort(e, o);
    }, B = (e) => {
      if (!e) return "text-left";
      const t = e.toLowerCase().trim();
      return t === "id" || t === "#" || t === "code" || t === "sku" || t === "status" || t === "role" || t === "type" || t === "gender" || t === "uom" || t === "tax" ? "text-center" : t.includes("amount") || t.includes("price") || t.includes("total") || t.includes("qty") || t.includes("quantity") || t.includes("discount") || t.includes("vat") ? "text-right" : "text-left";
    }, Oe = (e) => {
      if (e == null) return e;
      const t = String(e);
      return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(t) ? t.replace(/[Zz]$|\+00:00$/, "").replace(/\.\d{3}$/, "").replace("T", " ") : e;
    }, q = ke, z = (e) => typeof d.rowKey == "function" ? d.rowKey(e) : d.rowKey ? e?.[d.rowKey] : e, x = v([...d.selected]);
    oe(() => d.selected, (e) => {
      x.value = [...e || []];
    });
    const P = (e) => {
      x.value = e, q("update:selected", e);
    }, L = (e) => x.value.some((t) => z(t) === z(e)), Te = (e) => P(L(e) ? x.value.filter((t) => z(t) !== z(e)) : [...x.value, e]), G = w(() => l.value.displayItems.value.length > 0 && l.value.displayItems.value.every(L)), Ne = w(() => !G.value && l.value.displayItems.value.some(L)), Ue = () => {
      const e = l.value.displayItems.value;
      G.value ? P(x.value.filter((t) => !e.some((o) => z(o) === z(t)))) : P([...x.value, ...e.filter((t) => !L(t))]);
    }, Q = w(() => x.value.length), fe = () => P([]), Ae = w(() => d.showSelect && d.showBulkBar && Q.value > 0), Ee = () => {
      q("filter-by-value", {
        column: O.value,
        value: T.value
      }), Y();
    }, me = v(null), k = v(""), Fe = (e, t) => {
      k.value = t, me.value?.open(e);
    }, Ke = () => {
      if (!k.value) return;
      const e = l.value.displayItems.value.map((o) => {
        const i = o[k.value];
        return i === null ? "NULL" : String(i);
      }), t = e.join(`
`);
      navigator.clipboard.writeText(t), C.$message?.success("Column Copied", `${e.length} row values copied to clipboard.`);
    }, Pe = w(() => [
      {
        label: `Copy Column: ${k.value}`,
        icon: Ge,
        action: Ke,
        shortcut: "⌘C"
      },
      {
        label: "Add Filter",
        icon: Qe,
        action: () => q("filter-by-value", { column: k.value, value: "" })
      },
      {
        label: "Pin Left",
        icon: Ze,
        action: () => l.value.toggleSticky(k.value, "left"),
        disabled: I(k.value)
      },
      {
        label: "Pin Right",
        icon: et,
        action: () => l.value.toggleSticky(k.value, "right"),
        disabled: V(k.value)
      },
      {
        label: "Hide Column",
        icon: tt,
        variant: "danger",
        action: () => l.value.hiddenColumns.value.push(k.value)
      }
    ]);
    return (e, t) => (a(), c("div", {
      class: b(["relative flex-1 min-h-0 flex flex-col bg-transparent overflow-hidden", s(u) ? "gap-3" : "rounded-xl border border-border"]),
      "data-variant": e.variant
    }, [
      e.showSearch || e.$slots["toolbar-left"] || e.$slots["toolbar-actions"] ? (a(), c("div", {
        key: 0,
        class: b(["flex items-center justify-between shrink-0 overflow-x-auto no-scrollbar", s(u) ? "" : "px-4 py-3 border-b border-border bg-muted/20"])
      }, [
        r("div", ut, [
          S(e.$slots, "toolbar-left", {}, void 0, !0),
          e.showSearch ? (a(), f(y(e.$c("ui.search-input")), {
            key: 0,
            modelValue: s(l).searchQuery.value,
            "onUpdate:modelValue": t[0] || (t[0] = (o) => s(l).searchQuery.value = o),
            placeholder: "Search results in current page...",
            "show-clear": !0,
            class: "control-lg max-w-full"
          }, null, 8, ["modelValue"])) : p("", !0),
          S(e.$slots, "toolbar-extra", {}, void 0, !0)
        ]),
        r("div", dt, [
          S(e.$slots, "toolbar-actions", {}, void 0, !0),
          s(u) && e.allowCustomColumns && e.paginationPosition === "top" ? (a(), f(y(e.$c("display.column-settings")), {
            key: 0,
            source: s(l)
          }, null, 8, ["source"])) : p("", !0)
        ])
      ], 2)) : p("", !0),
      S(e.$slots, "after-toolbar", {}, void 0, !0),
      !s(u) && (e.allowCustomColumns || s(l).items.value.length > 0) ? (a(), c("div", ct, [
        r("div", pt, [
          e.allowCustomColumns ? (a(), f(y(e.$c("display.column-settings")), {
            key: 0,
            source: s(l)
          }, null, 8, ["source"])) : p("", !0),
          S(e.$slots, "nav-left", {}, void 0, !0),
          r("div", vt, [
            t[5] || (t[5] = r("span", { class: "text-xs text-faint font-bold" }, "Total:", -1)),
            r("span", bt, g(s(l).pagination.total.toLocaleString()), 1)
          ])
        ]),
        r("div", ft, [
          S(e.$slots, "nav-extra", {}, void 0, !0),
          s(l).items.value.length > 0 ? (a(), f(y(e.$c("display.simple-pagination")), {
            key: 0,
            source: s(l),
            variant: "minimal",
            class: "!px-0 !py-0 bg-transparent border-none"
          }, null, 8, ["source"])) : p("", !0)
        ])
      ])) : p("", !0),
      r("div", mt, [
        r("div", {
          ref_key: "containerRef",
          ref: h,
          class: b(["data-grid-container dt-fit overflow-auto relative scrollbar-bold transition-shadow", [
            s(u) && "table-wrap bg-card",
            s(j) ? "cursor-grabbing select-none" : "cursor-grab",
            { "shadow-inner": s(j) }
          ]]),
          style: Z({ maxHeight: e.maxHeight || void 0 }),
          onMousedown: Re,
          onMousemove: Me,
          onMouseup: pe,
          onMouseleave: pe
        }, [
          s(l).displayItems.value.length > 0 ? (a(), c("table", {
            key: 0,
            class: b(["w-full table-auto min-w-max", [s(u) ? "border-collapse" : "border-separate border-spacing-0", s(u) && s(le) && "dt-bordered"]])
          }, [
            r("thead", null, [
              r("tr", null, [
                e.showSelect ? (a(), c("th", {
                  key: 0,
                  class: b(["sticky top-0 left-0 z-40 w-10 min-w-[40px] px-3 py-2 text-center", s(u) ? "border-b border-border-soft" : "bg-muted/95 backdrop-blur-md border-b-2 border-r border-border"])
                }, [
                  r("input", {
                    type: "checkbox",
                    class: "accent-primary w-4 h-4 cursor-pointer align-middle",
                    checked: s(G),
                    indeterminate: s(Ne),
                    "aria-label": "select page",
                    "data-testid": "select-all",
                    onChange: t[1] || (t[1] = (o) => Ue())
                  }, null, 40, yt)
                ], 2)) : p("", !0),
                s(u) ? p("", !0) : (a(), c("th", gt, " # ")),
                (a(!0), c(ee, null, te(s(H), (o) => (a(), c("th", {
                  key: o,
                  class: b(["sticky top-0 z-10 cursor-pointer transition-colors select-none group", [
                    ne(o) && "dt-fit-col",
                    s(u) ? "border-b border-border-soft hover:brightness-110" : "bg-muted/95 backdrop-blur-md px-4 py-2.5 border-b-2 border-r border-border min-w-[150px] hover:bg-muted",
                    {
                      "w-[80px] min-w-[80px]": o.toLowerCase().trim() === "id",
                      "min-w-[180px]": o.toLowerCase().includes("date") || o.toLowerCase().includes("time"),
                      "bg-primary/[0.08]": !s(u) && X(o),
                      sorted: s(u) && X(o),
                      "sticky left-[56px] z-30 bg-muted border-r-2 border-border": !s(u) && I(o),
                      "sticky right-0 z-30 bg-muted border-l-2 border-border": !s(u) && V(o),
                      "sticky left-0 z-30": s(u) && I(o),
                      "sticky right-0 z-30": s(u) && V(o)
                    }
                  ]]),
                  style: Z(re(o)),
                  onClick: (i) => je(o, i),
                  onContextmenu: U((i) => Fe(i, o), ["prevent"])
                }, [
                  e.resizable ? (a(), c("span", {
                    key: 0,
                    class: b(["dt-resize", W(o) && "is-set"]),
                    role: "separator",
                    "aria-orientation": "vertical",
                    title: W(o) ? "Drag to resize · double-click: auto width" : "Drag to resize",
                    onMousedown: U((i) => Se(o, i), ["stop", "prevent"]),
                    onClick: t[2] || (t[2] = U(() => {
                    }, ["stop"])),
                    onDblclick: U((i) => _e(o), ["stop"])
                  }, null, 42, kt)) : p("", !0),
                  r("div", wt, [
                    r("span", {
                      class: b(["transition-colors truncate flex-1", [B(o), s(u) ? "text-inherit" : "text-xs font-bold text-muted-foreground group-hover:text-primary"]])
                    }, g(o), 3),
                    r("div", {
                      class: b(["relative w-4 h-4 flex items-center justify-center shrink-0 transition-all duration-200", [
                        X(o) ? "opacity-100 scale-110" : s(u) ? "opacity-70 group-hover:opacity-100" : "opacity-20 group-hover:opacity-40"
                      ]])
                    }, [
                      J(o)?.order === "asc" ? (a(), f(s(st), {
                        key: 0,
                        size: 12,
                        class: b(s(u) ? "text-inherit" : "text-primary")
                      }, null, 8, ["class"])) : J(o)?.order === "desc" ? (a(), f(s(ot), {
                        key: 1,
                        size: 12,
                        class: b(s(u) ? "text-inherit" : "text-primary")
                      }, null, 8, ["class"])) : (a(), f(s(lt), {
                        key: 2,
                        size: 10
                      })),
                      ae(o) ? (a(), c("span", xt, g(ae(o)), 1)) : p("", !0)
                    ], 2)
                  ])
                ], 46, ht))), 128))
              ])
            ]),
            r("tbody", Ct, [
              s(l).pagination.loading ? (a(), c("div", St, t[6] || (t[6] = [
                r("div", { class: "flex flex-col items-center gap-3" }, [
                  r("div", { class: "w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" })
                ], -1)
              ]))) : p("", !0),
              (a(!0), c(ee, null, te(s(l).displayItems.value, (o, i) => (a(), c("tr", {
                key: i,
                class: b(["transition-all group/row", [s(u) ? "bg-card hover:bg-muted" : "hover:bg-muted/30", !s(u) && e.showSelect && L(o) && "bg-primary/5"]]),
                "data-state": e.showSelect && L(o) ? "selected" : void 0
              }, [
                e.showSelect ? (a(), c("td", {
                  key: 0,
                  class: b(["sticky left-0 z-20 w-10 min-w-[40px] px-3 text-center", s(u) ? "border-b border-border-soft bg-inherit" : "py-2.5 border-r border-b border-border/30 !bg-card"]),
                  onClick: t[3] || (t[3] = U(() => {
                  }, ["stop"]))
                }, [
                  (a(), c("input", {
                    type: "checkbox",
                    key: String(z(o)),
                    class: "accent-primary w-4 h-4 cursor-pointer align-middle",
                    checked: L(o),
                    "data-testid": "select-row",
                    onChange: (n) => Te(o)
                  }, null, 40, $t))
                ], 2)) : p("", !0),
                s(u) ? p("", !0) : (a(), c("td", zt, g((s(l).pagination.page - 1) * s(l).pagination.pageSize + i + 1), 1)),
                (a(!0), c(ee, null, te(s(H), (n) => (a(), c("td", {
                  key: n,
                  class: b(["max-w-[300px] cursor-pointer transition-colors", [
                    ne(n) && "dt-fit-col",
                    s(u) ? "border-b border-border-soft" : "px-4 py-2.5 border-r border-b border-border/60 active:bg-primary/5 hover:bg-muted/40",
                    s(u) ? {
                      "sticky left-0 z-10 bg-inherit": I(n),
                      "sticky right-0 z-10 bg-inherit": V(n)
                    } : {
                      "sticky left-[56px] z-10 !bg-card  group-hover/row:!bg-muted  border-r-2 border-border": I(n),
                      "sticky right-0 z-10 !bg-card  group-hover/row:!bg-muted  border-l-2 border-border": V(n)
                    }
                  ]]),
                  style: Z(re(n)),
                  onDblclick: (D) => Be(n, o[n], i),
                  title: o[n] === null ? "NULL" : String(o[n])
                }, [
                  o[n] === null ? (a(), c("span", {
                    key: 0,
                    class: b(["text-xs font-mono italic text-muted-foreground/30 block w-full truncate", B(n)])
                  }, "NULL", 2)) : S(e.$slots, `cell-${n}`, {
                    key: 1,
                    value: o[n],
                    row: o,
                    column: n,
                    index: i
                  }, () => [
                    ve(String(o[n])) ? (a(), c("div", {
                      key: 0,
                      class: b(["flex items-center gap-2 w-full overflow-hidden", B(n) === "text-center" ? "justify-center" : B(n) === "text-right" ? "justify-end" : "justify-start"])
                    }, [
                      t[7] || (t[7] = r("span", { class: "shrink-0 px-1.5 py-0.5 rounded-[4px] bg-primary/10 text-primary text-[8px] font-medium leading-none border border-primary/20" }, "JSON", -1)),
                      r("span", {
                        class: b(["text-xs font-mono truncate opacity-80", B(n)])
                      }, g(o[n]), 3)
                    ], 2)) : (a(), c("div", {
                      key: 1,
                      class: b(["text-xs font-mono text-foreground/90 truncate", B(n)])
                    }, g(Oe(o[n])), 3))
                  ], !0)
                ], 46, Lt))), 128))
              ], 10, _t))), 128))
            ])
          ], 2)) : p("", !0),
          s(l).displayItems.value.length === 0 && s(l).pagination.loading ? (a(), f(y(e.$c("ui.skeleton")), {
            key: 1,
            variant: "table",
            rows: Math.min(d.pageSize ?? 20, 10),
            cols: Math.max(s(H).length, 1),
            class: "!border-0 !shadow-none !rounded-none",
            "data-testid": "data-table-skeleton"
          }, null, 8, ["rows", "cols"])) : p("", !0),
          s(l).displayItems.value.length === 0 && !s(l).pagination.loading ? (a(), c("div", Dt, t[8] || (t[8] = [
            r("div", { class: "w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 border border-border/50" }, [
              r("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-6 w-6 text-muted-foreground",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                r("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "1.5",
                  d: "M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4"
                })
              ])
            ], -1),
            r("p", { class: "text-xs text-muted-foreground font-medium" }, "No Records Found", -1)
          ]))) : p("", !0)
        ], 38),
        s(Ae) ? (a(), c("div", {
          key: 0,
          class: "bulk-bar",
          role: "toolbar",
          "aria-label": e.bulkBarLabel,
          "data-testid": "bulk-bar"
        }, [
          r("div", Mt, [
            r("div", Bt, [
              r("span", It, g(s(Q)), 1),
              r("span", Vt, g(e.bulkBarLabel), 1)
            ]),
            r("button", {
              type: "button",
              class: "bulk-bar__close",
              title: e.bulkBarClearLabel,
              "aria-label": e.bulkBarClearLabel,
              "data-testid": "bulk-bar-clear",
              onClick: fe
            }, [
              He(s(rt), { size: 14 })
            ], 8, jt)
          ]),
          r("div", Ot, [
            S(e.$slots, "bulk-actions", {
              selected: s(x),
              count: s(Q),
              clear: fe
            }, void 0, !0)
          ])
        ], 8, Rt)) : p("", !0)
      ]),
      e.paginationPosition === "bottom" || e.paginationPosition === "both" ? (a(), f(y(e.$c("display.simple-pagination")), {
        key: 2,
        source: s(l),
        class: b(s(u) ? "!border-0 !bg-transparent !px-0 !py-0" : "border-t bg-muted/5 font-medium")
      }, Ye({ _: 2 }, [
        s(u) && e.allowCustomColumns ? {
          name: "end",
          fn: _(() => [
            (a(), f(y(e.$c("display.column-settings")), {
              source: s(l),
              bordered: s(le),
              "has-widths": !!Object.keys(s(m).widths).length,
              "onUpdate:bordered": Ce,
              onResetWidths: $e
            }, null, 40, ["source", "bordered", "has-widths"]))
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["source", "class"])) : p("", !0),
      (a(), f(y(e.$c("ui.modal")), {
        show: s(F),
        onClose: Y,
        maxWidth: "max-w-4xl"
      }, {
        header: _(() => [
          r("div", Tt, [
            r("div", Nt, [
              r("h3", Ut, g(s(O)), 1),
              r("span", At, "Row #" + g(s(K) + 1) + " • " + g(s(R) ? "Structured Object" : "Raw Data"), 1)
            ])
          ])
        ]),
        footer: _(() => [
          r("div", Wt, [
            r("div", Jt, [
              (a(), f(y(e.$c("ui.button")), {
                variant: "ghost",
                size: "sm",
                onClick: Y,
                class: "text-xs font-semibold px-8 hover:bg-muted",
                disabled: s(M)
              }, {
                default: _(() => [
                  se(g(s(l).onCellUpdate ? "Discard" : "Close"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]))
            ]),
            r("div", Xt, [
              (a(), f(y(e.$c("ui.button")), {
                variant: "outline",
                size: "sm",
                onClick: Ee
              }, {
                default: _(() => t[11] || (t[11] = [
                  se(" Filter by this value ")
                ])),
                _: 1
              })),
              s(l).onCellUpdate ? p("", !0) : (a(), f(y(e.$c("ui.button")), {
                key: 0,
                variant: "outline",
                size: "sm",
                onClick: Ve
              }, {
                default: _(() => t[12] || (t[12] = [
                  se(" Copy Value ")
                ])),
                _: 1
              })),
              s(l).onCellUpdate ? (a(), f(y(e.$c("ui.button")), {
                key: 1,
                variant: "default",
                size: "sm",
                onClick: Ie,
                disabled: s(M)
              }, {
                default: _(() => [
                  r("div", Ht, [
                    s(M) ? (a(), f(s(at), {
                      key: 0,
                      size: 14,
                      class: "animate-spin"
                    })) : p("", !0),
                    r("span", null, g(s(M) ? "COMMITTING..." : "COMMIT CHANGES"), 1)
                  ])
                ]),
                _: 1
              }, 8, ["disabled"])) : p("", !0)
            ])
          ])
        ]),
        default: _(() => [
          r("div", Et, [
            r("div", Ft, [
              (a(), f(y(e.$c("form.textarea")), {
                modelValue: s($),
                "onUpdate:modelValue": t[4] || (t[4] = (o) => qe($) ? $.value = o : null),
                readonly: !s(l).onCellUpdate,
                "auto-size": { minRows: 5, maxRows: 18 },
                class: "w-full font-mono text-[13px]",
                placeholder: "Enter value..."
              }, null, 8, ["modelValue", "readonly"])),
              s(l).onCellUpdate ? (a(), c("div", Kt, t[9] || (t[9] = [
                r("div", { class: "w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" }, null, -1),
                r("span", { class: "text-xs text-amber-600 font-semibold italic" }, " Direct write mode active • Changes will commit to remote provider ", -1)
              ]))) : (a(), c("div", Pt, t[10] || (t[10] = [
                r("div", { class: "w-1.5 h-1.5 rounded-full bg-slate-400" }, null, -1),
                r("span", { class: "text-xs text-faint font-semibold italic" }, " Read-only context • Modification disabled for this result set ", -1)
              ])))
            ])
          ])
        ]),
        _: 1
      }, 40, ["show"])),
      (a(), f(y(e.$c("ui.context-menu")), {
        ref_key: "headerContextMenuRef",
        ref: me,
        options: s(Pe)
      }, null, 8, ["options"]))
    ], 10, it));
  }
}), es = /* @__PURE__ */ nt(qt, [["__scopeId", "data-v-67524dfd"]]);
export {
  es as default
};
//# sourceMappingURL=DataTable-Ttz8kQlc.js.map
