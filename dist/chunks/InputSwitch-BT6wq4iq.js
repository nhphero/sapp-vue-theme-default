import { defineComponent as b, computed as p, openBlock as n, createElementBlock as s, normalizeClass as i, toDisplayString as d, createCommentVNode as r, createElementVNode as c } from "vue";
const h = {
  key: 0,
  class: "label",
  style: { "margin-right": "var(--sp-1)" }
}, y = ["checked", "disabled"], V = /* @__PURE__ */ b({
  __name: "InputSwitch",
  props: {
    modelValue: { type: [Boolean, String, Number], default: !1 },
    label: { type: String, default: "" },
    trueValue: { type: [Boolean, String, Number], default: !0 },
    falseValue: { type: [Boolean, String, Number], default: !1 },
    trueLabel: { type: String, default: "Active" },
    falseLabel: { type: String, default: "Inactive" },
    showStatus: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: m }) {
    const t = e, u = m, l = p(() => t.modelValue === t.trueValue), f = (o) => {
      if (t.disabled) return;
      const a = o.target.checked ? t.trueValue : t.falseValue;
      u("update:modelValue", a), u("change", a);
    };
    return (o, a) => (n(), s("label", {
      class: i(["switch", { "opacity-55": e.disabled }])
    }, [
      e.label ? (n(), s("span", h, d(e.label), 1)) : r("", !0),
      c("input", {
        type: "checkbox",
        role: "switch",
        checked: l.value,
        disabled: e.disabled,
        onChange: f
      }, null, 40, y),
      a[0] || (a[0] = c("span", {
        class: "track",
        "aria-hidden": "true"
      }, null, -1)),
      e.showStatus ? (n(), s("span", {
        key: 1,
        class: i(["text-xs", l.value ? "text-primary font-semibold" : "text-faint"])
      }, d(l.value ? e.trueLabel : e.falseLabel), 3)) : r("", !0)
    ], 2));
  }
});
export {
  V as default
};
//# sourceMappingURL=InputSwitch-BT6wq4iq.js.map
