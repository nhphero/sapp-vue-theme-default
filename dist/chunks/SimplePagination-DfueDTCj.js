import { defineComponent as $, inject as k, openBlock as s, createElementBlock as m, createElementVNode as n, toDisplayString as l, createVNode as d, unref as c, withDirectives as y, withKeys as P, isRef as h, vModelText as x, createBlock as p, resolveDynamicComponent as r, withCtx as u, Fragment as C, renderList as S, createTextVNode as V, renderSlot as N } from "vue";
import { ChevronLeft as T, ChevronRight as B } from "lucide-vue-next";
const j = { class: "pagination justify-between px-4 py-2 shrink-0 bg-card border-t border-border-soft" }, D = { class: "flex items-center gap-2" }, z = { class: "text-xs text-faint uppercase tracking-wide" }, A = ["disabled"], E = { class: "input sm flex items-center gap-1 w-auto px-2" }, K = { class: "text-xs font-semibold tabular-nums" }, L = ["disabled"], R = { class: "flex items-center gap-2" }, U = { class: "text-xs text-faint uppercase tracking-wide" }, M = /* @__PURE__ */ $({
  __name: "SimplePagination",
  props: {
    source: {}
  },
  setup(b) {
    const i = b, f = k("$superApp"), { ref: v, watch: w } = f.$vue, a = v(i.source.pagination.page);
    w(() => i.source.pagination.page, (e) => {
      a.value = e;
    });
    const g = () => {
      const e = Number(a.value);
      e >= 1 && e <= i.source.pagination.totalPages ? i.source.setPage(e) : a.value = i.source.pagination.page;
    };
    return (e, t) => (s(), m("div", j, [
      n("div", D, [
        n("span", z, l(e.$t("common.page")), 1),
        n("button", {
          type: "button",
          class: "btn icon sm",
          "aria-label": "Trang trước",
          disabled: e.source.pagination.page <= 1 || e.source.pagination.loading,
          onClick: t[0] || (t[0] = (o) => e.source.setPage(e.source.pagination.page - 1))
        }, [
          d(c(T), { size: 14 })
        ], 8, A),
        n("div", E, [
          y(n("input", {
            type: "number",
            "onUpdate:modelValue": t[1] || (t[1] = (o) => h(a) ? a.value = o : null),
            onKeydown: P(g, ["enter"]),
            onBlur: g,
            class: "w-8 bg-transparent border-0 outline-none text-center text-xs font-semibold text-primary tabular-nums p-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          }, null, 544), [
            [x, c(a)]
          ]),
          t[4] || (t[4] = n("span", { class: "text-xs text-faint" }, "/", -1)),
          n("span", K, l(e.source.pagination.totalPages), 1)
        ]),
        n("button", {
          type: "button",
          class: "btn icon sm",
          "aria-label": "Trang sau",
          disabled: e.source.pagination.page >= e.source.pagination.totalPages || e.source.pagination.loading,
          onClick: t[2] || (t[2] = (o) => e.source.setPage(e.source.pagination.page + 1))
        }, [
          d(c(B), { size: 14 })
        ], 8, L)
      ]),
      n("div", R, [
        n("span", U, l(e.$t("common.perPage")), 1),
        (s(), p(r(e.$c("form.select")), {
          modelValue: String(e.source.pagination.pageSize),
          "onUpdate:modelValue": t[3] || (t[3] = (o) => e.source.setPageSize(Number(o)))
        }, {
          default: u(() => [
            (s(), p(r(e.$c("form.select-trigger")), { class: "sm min-w-[72px] w-auto" }, {
              default: u(() => [
                (s(), p(r(e.$c("form.select-value"))))
              ]),
              _: 1
            })),
            (s(), p(r(e.$c("form.select-content")), null, {
              default: u(() => [
                (s(), m(C, null, S([20, 50, 100, 200, 500], (o) => d(r(e.$c("form.select-item")), {
                  key: o,
                  value: String(o)
                }, {
                  default: u(() => [
                    V(l(o), 1)
                  ]),
                  _: 2
                }, 1032, ["value"])), 64))
              ]),
              _: 1
            }))
          ]),
          _: 1
        }, 8, ["modelValue"])),
        N(e.$slots, "end")
      ])
    ]));
  }
});
export {
  M as default
};
//# sourceMappingURL=SimplePagination-DfueDTCj.js.map
