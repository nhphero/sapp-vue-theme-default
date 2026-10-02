import { defineComponent as $, inject as y, openBlock as s, createElementBlock as m, createElementVNode as n, toDisplayString as l, createVNode as d, unref as g, withDirectives as h, withKeys as P, isRef as k, vModelText as C, createBlock as p, resolveDynamicComponent as i, withCtx as u, Fragment as S, renderList as V, createTextVNode as N, renderSlot as T } from "vue";
import { ChevronLeft as B, ChevronRight as j } from "lucide-vue-next";
const D = { class: "pagination justify-between px-4 py-2 shrink-0 bg-card border-t border-border-soft" }, z = { class: "flex items-center gap-2" }, A = { class: "text-sm text-muted-foreground whitespace-nowrap" }, E = ["disabled"], K = { class: "input sm flex items-center gap-1 w-auto px-2" }, L = { class: "text-sm font-semibold tabular-nums" }, R = ["disabled"], U = { class: "flex items-center gap-2" }, x = { class: "text-sm text-muted-foreground whitespace-nowrap" }, M = /* @__PURE__ */ $({
  __name: "SimplePagination",
  props: {
    source: {}
  },
  setup(b) {
    const r = b, f = y("$superApp"), { ref: v, watch: w } = f.$vue, a = v(r.source.pagination.page);
    w(() => r.source.pagination.page, (e) => {
      a.value = e;
    });
    const c = () => {
      const e = Number(a.value);
      e >= 1 && e <= r.source.pagination.totalPages ? r.source.setPage(e) : a.value = r.source.pagination.page;
    };
    return (e, t) => (s(), m("div", D, [
      n("div", z, [
        n("span", A, l(e.$t("common.page")), 1),
        n("button", {
          type: "button",
          class: "btn icon sm",
          "aria-label": "Trang trước",
          disabled: e.source.pagination.page <= 1 || e.source.pagination.loading,
          onClick: t[0] || (t[0] = (o) => e.source.setPage(e.source.pagination.page - 1))
        }, [
          d(g(B), { size: 14 })
        ], 8, E),
        n("div", K, [
          h(n("input", {
            type: "number",
            "onUpdate:modelValue": t[1] || (t[1] = (o) => k(a) ? a.value = o : null),
            onKeydown: P(c, ["enter"]),
            onBlur: c,
            class: "w-8 bg-transparent border-0 outline-none text-center text-sm font-semibold text-primary tabular-nums p-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          }, null, 544), [
            [C, g(a)]
          ]),
          t[4] || (t[4] = n("span", { class: "text-sm text-faint" }, "/", -1)),
          n("span", L, l(e.source.pagination.totalPages), 1)
        ]),
        n("button", {
          type: "button",
          class: "btn icon sm",
          "aria-label": "Trang sau",
          disabled: e.source.pagination.page >= e.source.pagination.totalPages || e.source.pagination.loading,
          onClick: t[2] || (t[2] = (o) => e.source.setPage(e.source.pagination.page + 1))
        }, [
          d(g(j), { size: 14 })
        ], 8, R)
      ]),
      n("div", U, [
        n("span", x, l(e.$t("common.perPage")), 1),
        (s(), p(i(e.$c("form.select")), {
          modelValue: String(e.source.pagination.pageSize),
          "onUpdate:modelValue": t[3] || (t[3] = (o) => e.source.setPageSize(Number(o)))
        }, {
          default: u(() => [
            (s(), p(i(e.$c("form.select-trigger")), { class: "control-sm" }, {
              default: u(() => [
                (s(), p(i(e.$c("form.select-value"))))
              ]),
              _: 1
            })),
            (s(), p(i(e.$c("form.select-content")), null, {
              default: u(() => [
                (s(), m(S, null, V([20, 50, 100, 200, 500], (o) => d(i(e.$c("form.select-item")), {
                  key: o,
                  value: String(o)
                }, {
                  default: u(() => [
                    N(l(o), 1)
                  ]),
                  _: 2
                }, 1032, ["value"])), 64))
              ]),
              _: 1
            }))
          ]),
          _: 1
        }, 8, ["modelValue"])),
        T(e.$slots, "end")
      ])
    ]));
  }
});
export {
  M as default
};
//# sourceMappingURL=SimplePagination-Dz9OfQYH.js.map
