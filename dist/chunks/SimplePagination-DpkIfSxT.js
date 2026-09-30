import { defineComponent as $, inject as k, openBlock as s, createElementBlock as m, createElementVNode as n, toDisplayString as l, createVNode as c, unref as g, withDirectives as y, withKeys as P, isRef as h, vModelText as x, createBlock as p, resolveDynamicComponent as r, withCtx as u, Fragment as C, renderList as V, createTextVNode as S } from "vue";
import { ChevronLeft as N, ChevronRight as T } from "lucide-vue-next";
const B = { class: "pagination justify-between px-4 py-2 shrink-0 bg-card border-t border-border-soft" }, j = { class: "flex items-center gap-2" }, D = { class: "text-xs text-faint uppercase tracking-wide" }, z = ["disabled"], A = { class: "input sm flex items-center gap-1 w-auto px-2" }, E = { class: "text-xs font-semibold tabular-nums" }, K = ["disabled"], L = { class: "flex items-center gap-2" }, R = { class: "text-xs text-faint uppercase tracking-wide" }, I = /* @__PURE__ */ $({
  __name: "SimplePagination",
  props: {
    source: {}
  },
  setup(b) {
    const i = b, f = k("$superApp"), { ref: v, watch: w } = f.$vue, o = v(i.source.pagination.page);
    w(() => i.source.pagination.page, (e) => {
      o.value = e;
    });
    const d = () => {
      const e = Number(o.value);
      e >= 1 && e <= i.source.pagination.totalPages ? i.source.setPage(e) : o.value = i.source.pagination.page;
    };
    return (e, t) => (s(), m("div", B, [
      n("div", j, [
        n("span", D, l(e.$t("common.page")), 1),
        n("button", {
          type: "button",
          class: "btn icon sm",
          "aria-label": "Trang trước",
          disabled: e.source.pagination.page <= 1 || e.source.pagination.loading,
          onClick: t[0] || (t[0] = (a) => e.source.setPage(e.source.pagination.page - 1))
        }, [
          c(g(N), { size: 14 })
        ], 8, z),
        n("div", A, [
          y(n("input", {
            type: "number",
            "onUpdate:modelValue": t[1] || (t[1] = (a) => h(o) ? o.value = a : null),
            onKeydown: P(d, ["enter"]),
            onBlur: d,
            class: "w-8 bg-transparent border-0 outline-none text-center text-xs font-semibold text-primary tabular-nums p-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          }, null, 544), [
            [x, g(o)]
          ]),
          t[4] || (t[4] = n("span", { class: "text-xs text-faint" }, "/", -1)),
          n("span", E, l(e.source.pagination.totalPages), 1)
        ]),
        n("button", {
          type: "button",
          class: "btn icon sm",
          "aria-label": "Trang sau",
          disabled: e.source.pagination.page >= e.source.pagination.totalPages || e.source.pagination.loading,
          onClick: t[2] || (t[2] = (a) => e.source.setPage(e.source.pagination.page + 1))
        }, [
          c(g(T), { size: 14 })
        ], 8, K)
      ]),
      n("div", L, [
        n("span", R, l(e.$t("common.perPage")), 1),
        (s(), p(r(e.$c("form.select")), {
          modelValue: String(e.source.pagination.pageSize),
          "onUpdate:modelValue": t[3] || (t[3] = (a) => e.source.setPageSize(Number(a)))
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
                (s(), m(C, null, V([20, 50, 100, 200, 500], (a) => c(r(e.$c("form.select-item")), {
                  key: a,
                  value: String(a)
                }, {
                  default: u(() => [
                    S(l(a), 1)
                  ]),
                  _: 2
                }, 1032, ["value"])), 64))
              ]),
              _: 1
            }))
          ]),
          _: 1
        }, 8, ["modelValue"]))
      ])
    ]));
  }
});
export {
  I as default
};
//# sourceMappingURL=SimplePagination-DpkIfSxT.js.map
