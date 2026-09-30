import { defineComponent as u, computed as m, openBlock as s, createBlock as o, unref as i, normalizeClass as p, withCtx as f, renderSlot as l } from "vue";
import { Primitive as c } from "radix-vue";
import { Loader2 as g } from "lucide-vue-next";
import { cn as y } from "../index.js";
const B = /* @__PURE__ */ u({
  __name: "Button",
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    as: { default: "button" },
    asChild: { type: Boolean, default: !1 },
    class: {},
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    type: { default: "button" }
  },
  setup(t) {
    const e = t, n = {
      default: "",
      outline: "",
      secondary: "",
      warning: "",
      primary: "primary",
      premium: "primary",
      danger: "danger",
      destructive: "danger",
      ghost: "ghost",
      minimal: "ghost",
      link: "link"
    }, d = {
      default: "",
      sm: "sm",
      lg: "lg",
      icon: "icon",
      "icon-sm": "icon sm",
      "icon-lg": "icon lg"
    }, r = m(() => y("btn", n[e.variant] ?? "", d[e.size] ?? "", e.class));
    return (a, b) => (s(), o(i(c), {
      as: a.as,
      "as-child": a.asChild,
      type: a.as === "button" ? a.type : void 0,
      disabled: a.disabled || a.loading,
      "aria-busy": a.loading || void 0,
      class: p(r.value)
    }, {
      default: f(() => [
        a.loading ? (s(), o(i(g), {
          key: 0,
          size: 14,
          class: "animate-spin",
          "aria-hidden": "true"
        })) : l(a.$slots, "icon", { key: 1 }),
        l(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "aria-busy", "class"]));
  }
});
export {
  B as _
};
//# sourceMappingURL=Button.vue_vue_type_script_setup_true_lang-BPGu9kgg.js.map
