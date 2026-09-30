import { defineComponent as o, computed as s, openBlock as c, createElementBlock as d, normalizeClass as l, renderSlot as m } from "vue";
import { cn as u } from "../index.js";
const g = /* @__PURE__ */ o({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(a) {
    const e = a, n = {
      default: "primary",
      primary: "primary",
      muted: "muted",
      secondary: "muted",
      outline: "outline",
      success: "ok",
      ok: "ok",
      warning: "warn",
      warn: "warn",
      danger: "danger",
      destructive: "danger",
      info: "info"
    }, r = s(() => u("badge", n[e.variant ?? "default"] ?? "muted", e.class));
    return (t, i) => (c(), d("span", {
      class: l(r.value)
    }, [
      m(t.$slots, "default")
    ], 2));
  }
});
export {
  g as default
};
//# sourceMappingURL=Badge-ZzsVRpNl.js.map
