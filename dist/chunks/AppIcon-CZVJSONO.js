import { defineComponent as r, computed as s, openBlock as i, createBlock as p, resolveDynamicComponent as a } from "vue";
import { appIcon as c } from "../index.js";
const l = /* @__PURE__ */ r({
  __name: "AppIcon",
  props: {
    name: {},
    size: { default: 16 },
    strokeWidth: { default: 1.75 }
  },
  setup(o) {
    const t = o, n = s(() => c(t.name));
    return (e, m) => (i(), p(a(n.value), {
      size: e.size,
      "stroke-width": e.strokeWidth,
      "aria-hidden": "true"
    }, null, 8, ["size", "stroke-width"]));
  }
});
export {
  l as default
};
//# sourceMappingURL=AppIcon-CZVJSONO.js.map
