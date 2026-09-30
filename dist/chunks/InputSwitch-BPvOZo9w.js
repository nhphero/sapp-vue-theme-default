import { defineComponent as h, computed as r, openBlock as l, createElementBlock as i, normalizeClass as c, toDisplayString as m, createCommentVNode as o, createElementVNode as f, createBlock as y, unref as g } from "vue";
import { Loader2 as k } from "lucide-vue-next";
import { _ as v } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const S = ["aria-busy"], V = {
  key: 0,
  class: "label",
  style: { "margin-right": "var(--sp-1)" }
}, x = ["checked", "disabled"], B = /* @__PURE__ */ h({
  __name: "InputSwitch",
  props: {
    modelValue: { type: [Boolean, String, Number], default: !1 },
    label: { type: String, default: "" },
    trueValue: { type: [Boolean, String, Number], default: !0 },
    falseValue: { type: [Boolean, String, Number], default: !1 },
    trueLabel: { type: String, default: "Active" },
    falseLabel: { type: String, default: "Inactive" },
    showStatus: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: b }) {
    const t = e, s = b, n = r(() => t.modelValue === t.trueValue), u = r(() => t.disabled || t.loading), p = (d) => {
      if (u.value) return;
      const a = d.target.checked ? t.trueValue : t.falseValue;
      s("update:modelValue", a), s("change", a);
    };
    return (d, a) => (l(), i("label", {
      class: c(["switch", { "opacity-55": e.disabled, "switch--loading": e.loading }]),
      "aria-busy": e.loading || void 0
    }, [
      e.label ? (l(), i("span", V, m(e.label), 1)) : o("", !0),
      f("input", {
        type: "checkbox",
        role: "switch",
        checked: n.value,
        disabled: u.value,
        onChange: p
      }, null, 40, x),
      a[0] || (a[0] = f("span", {
        class: "track",
        "aria-hidden": "true"
      }, null, -1)),
      e.loading ? (l(), y(g(k), {
        key: 1,
        size: 14,
        class: "switch__spinner animate-spin text-primary",
        "aria-hidden": "true"
      })) : o("", !0),
      e.showStatus ? (l(), i("span", {
        key: 2,
        class: c(["text-xs", n.value ? "text-primary font-semibold" : "text-faint"])
      }, m(n.value ? e.trueLabel : e.falseLabel), 3)) : o("", !0)
    ], 10, S));
  }
}), C = /* @__PURE__ */ v(B, [["__scopeId", "data-v-cdeb7b87"]]);
export {
  C as default
};
//# sourceMappingURL=InputSwitch-BPvOZo9w.js.map
