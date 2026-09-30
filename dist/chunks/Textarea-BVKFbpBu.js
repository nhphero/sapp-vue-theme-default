import { defineComponent as r, withDirectives as u, openBlock as d, createElementBlock as m, normalizeClass as p, unref as t, isRef as c, vModelText as f } from "vue";
import { useVModel as v } from "@vueuse/core";
import { cn as V } from "../index.js";
const x = ["aria-invalid"], M = /* @__PURE__ */ r({
  __name: "Textarea",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {},
    invalid: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: i }) {
    const e = o, a = v(e, "modelValue", i, { passive: !0, defaultValue: e.defaultValue });
    return (s, l) => u((d(), m("textarea", {
      "onUpdate:modelValue": l[0] || (l[0] = (n) => c(a) ? a.value = n : null),
      "aria-invalid": s.invalid || void 0,
      class: p(t(V)("input textarea", e.class))
    }, null, 10, x)), [
      [f, t(a)]
    ]);
  }
});
export {
  M as default
};
//# sourceMappingURL=Textarea-BVKFbpBu.js.map
