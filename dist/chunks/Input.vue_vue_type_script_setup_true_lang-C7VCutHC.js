import { defineComponent as p, openBlock as l, createElementBlock as i, normalizeClass as c, unref as o, renderSlot as a, createCommentVNode as r, withDirectives as v, createElementVNode as V, mergeProps as $, isRef as y, vModelDynamic as h } from "vue";
import { useVModel as C } from "@vueuse/core";
import { cn as u } from "../index.js";
const g = {
  key: 0,
  class: "absolute left-2.5 flex items-center justify-center pointer-events-none text-faint"
}, k = ["aria-invalid"], z = {
  key: 1,
  class: "absolute right-2.5 flex items-center justify-center text-faint"
}, w = /* @__PURE__ */ p({
  inheritAttrs: !1,
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {},
    containerClass: {},
    size: {},
    invalid: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(m, { emit: f }) {
    const s = m, t = C(s, "modelValue", f, { passive: !0, defaultValue: s.defaultValue });
    return (e, n) => (l(), i("div", {
      class: c(o(u)("relative flex items-center w-full", s.containerClass))
    }, [
      e.$slots.prefix ? (l(), i("div", g, [
        a(e.$slots, "prefix")
      ])) : r("", !0),
      v(V("input", $({
        "onUpdate:modelValue": n[0] || (n[0] = (d) => y(t) ? t.value = d : null)
      }, e.$attrs, {
        "aria-invalid": e.invalid || void 0,
        class: o(u)("input", e.size === "sm" && "sm", e.size === "lg" && "lg", e.$slots.prefix && "pl-9", e.$slots.suffix && "pr-9", s.class)
      }), null, 16, k), [
        [h, o(t)]
      ]),
      e.$slots.suffix ? (l(), i("div", z, [
        a(e.$slots, "suffix")
      ])) : r("", !0)
    ], 2));
  }
});
export {
  w as _
};
//# sourceMappingURL=Input.vue_vue_type_script_setup_true_lang-C7VCutHC.js.map
