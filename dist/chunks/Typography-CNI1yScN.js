import { defineComponent as l, computed as d, openBlock as i, createBlock as c, resolveDynamicComponent as f, normalizeClass as m, withCtx as u, renderSlot as x } from "vue";
const g = /* @__PURE__ */ l({
  __name: "Typography",
  props: {
    variant: { default: "body" },
    color: { default: "default" },
    weight: {},
    as: { default: "span" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(o) {
    const t = o, n = {
      h1: "text-3xl font-bold tracking-tight",
      h2: "text-2xl font-bold tracking-tight",
      h3: "text-lg font-semibold",
      h4: "text-base font-semibold",
      body: "text-sm",
      small: "text-xs",
      label: "text-xs font-semibold uppercase tracking-wide",
      mono: "font-mono text-xs",
      code: "font-mono text-xs bg-muted px-1.5 py-0.5 rounded-sm border border-border-soft"
    }, r = {
      default: "text-foreground",
      muted: "text-muted-foreground",
      faint: "text-faint",
      primary: "text-primary",
      success: "text-success",
      warning: "text-warning",
      error: "text-danger",
      danger: "text-danger",
      white: "text-primary-foreground"
    }, a = {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-bold"
    }, s = d(() => [
      n[t.variant],
      r[t.color],
      t.weight ? a[t.weight] : "",
      t.truncate ? "truncate block" : ""
    ].filter(Boolean).join(" "));
    return (e, p) => (i(), c(f(e.as), {
      class: m(s.value)
    }, {
      default: u(() => [
        x(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  g as default
};
//# sourceMappingURL=Typography-CNI1yScN.js.map
