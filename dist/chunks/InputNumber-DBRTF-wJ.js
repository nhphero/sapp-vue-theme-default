import { defineComponent as b, openBlock as v, createElementBlock as x, normalizeClass as _, unref as o, createElementVNode as a, createVNode as u, mergeProps as V } from "vue";
import { useVModel as h } from "@vueuse/core";
import { Minus as g, Plus as C } from "lucide-vue-next";
import { cn as i } from "../index.js";
import { _ as N } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const y = ["value"], k = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "InputNumber",
  props: {
    defaultValue: {},
    modelValue: {},
    min: {},
    max: {},
    step: {},
    class: {},
    containerClass: {}
  },
  emits: ["update:modelValue"],
  setup(m, { emit: c }) {
    const e = m, r = h(e, "modelValue", c, { passive: !0, defaultValue: e.defaultValue ?? 0 }), l = e.step ?? 1, n = (t) => e.min !== void 0 && t < e.min ? e.min : e.max !== void 0 && t > e.max ? e.max : t, d = () => {
      r.value = n((r.value ?? 0) - l);
    }, p = () => {
      r.value = n((r.value ?? 0) + l);
    }, f = (t) => {
      const s = parseFloat(t.target.value);
      isNaN(s) || (r.value = n(s));
    };
    return (t, s) => (v(), x("div", {
      class: _(o(i)("input flex items-stretch p-0 overflow-hidden", e.containerClass))
    }, [
      a("button", {
        type: "button",
        class: "w-9 flex items-center justify-center text-faint hover:bg-muted hover:text-foreground border-r border-border-soft",
        "aria-label": "Giảm",
        onClick: d
      }, [
        u(o(g), { size: 12 })
      ]),
      a("input", V({
        type: "number",
        value: o(r)
      }, t.$attrs, {
        onInput: f,
        class: o(i)("flex-1 min-w-0 bg-transparent border-0 outline-none text-center text-sm tabular-nums px-2", e.class)
      }), null, 16, y),
      a("button", {
        type: "button",
        class: "w-9 flex items-center justify-center text-faint hover:bg-muted hover:text-foreground border-l border-border-soft",
        "aria-label": "Tăng",
        onClick: p
      }, [
        u(o(C), { size: 12 })
      ])
    ], 2));
  }
}), M = /* @__PURE__ */ N(k, [["__scopeId", "data-v-2dfaf9f3"]]);
export {
  M as default
};
//# sourceMappingURL=InputNumber-DBRTF-wJ.js.map
