import { defineComponent as V, ref as r, watch as f, nextTick as _, onMounted as x, onUnmounted as B, openBlock as i, createElementBlock as u, createElementVNode as m, renderSlot as v, createVNode as h, Transition as C, withCtx as D, normalizeClass as E, unref as R, withDirectives as $, withKeys as z, withModifiers as M, vModelText as N, createCommentVNode as w } from "vue";
import { Search as P } from "lucide-vue-next";
import { _ as S } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const T = {
  key: 0,
  class: "pop-search"
}, q = ["placeholder"], K = /* @__PURE__ */ V({
  __name: "Dropdown",
  props: {
    modelValue: { type: Boolean },
    align: {},
    surface: { type: Boolean, default: !0 },
    caret: { type: Boolean, default: !0 },
    search: { type: Boolean, default: !1 },
    searchPlaceholder: {}
  },
  emits: ["update:modelValue"],
  setup(y, { emit: k }) {
    const o = y, n = k, s = r(null), c = r(null), t = r(o.modelValue || !1), a = r("");
    f(t, async (e) => {
      e && (a.value = "", o.search && (await _(), c.value?.focus()));
    }), f(() => o.modelValue, (e) => {
      e !== void 0 && (t.value = e);
    });
    const g = (e) => {
      e.preventDefault(), e.stopPropagation(), t.value = !t.value, n("update:modelValue", t.value);
    }, d = (e) => {
      t.value && s.value && !s.value.contains(e.target) && (t.value = !1, n("update:modelValue", !1));
    };
    return x(() => window.addEventListener("click", d, !0)), B(() => window.removeEventListener("click", d, !0)), (e, l) => (i(), u("div", {
      class: "relative inline-flex",
      ref_key: "containerRef",
      ref: s
    }, [
      m("div", {
        onClick: g,
        class: "cursor-pointer h-full flex items-center min-w-[20px] min-h-[20px]"
      }, [
        v(e.$slots, "trigger", {}, void 0, !0)
      ]),
      h(C, { name: "pop" }, {
        default: D(() => [
          t.value ? (i(), u("div", {
            key: 0,
            class: E(["absolute z-[150] top-[calc(100%+8px)]", [e.align === "right" ? "right-0 pop-caret-right" : "left-0 pop-caret-left", o.surface && "pop", o.caret && o.surface && "pop-caret"]])
          }, [
            o.search ? (i(), u("div", T, [
              h(R(P), {
                size: 14,
                class: "text-faint shrink-0"
              }),
              $(m("input", {
                ref_key: "searchRef",
                ref: c,
                "onUpdate:modelValue": l[0] || (l[0] = (p) => a.value = p),
                type: "search",
                placeholder: e.searchPlaceholder || e.$t?.("common.search") || "Search…",
                autocomplete: "off",
                onKeydown: l[1] || (l[1] = z(M((p) => {
                  t.value = !1, n("update:modelValue", !1);
                }, ["stop"]), ["esc"]))
              }, null, 40, q), [
                [N, a.value]
              ])
            ])) : w("", !0),
            v(e.$slots, "content", { query: a.value }, void 0, !0)
          ], 2)) : w("", !0)
        ]),
        _: 3
      })
    ], 512));
  }
}), b = /* @__PURE__ */ S(K, [["__scopeId", "data-v-898886e6"]]);
export {
  b as default
};
//# sourceMappingURL=Dropdown-wKllpTqE.js.map
