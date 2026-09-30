import { defineComponent as d, ref as m, watch as p, computed as o, openBlock as t, createElementBlock as s, normalizeStyle as c, normalizeClass as f, Fragment as g, createTextVNode as h, toDisplayString as v } from "vue";
const y = ["title", "aria-label"], z = ["src", "alt"], w = /* @__PURE__ */ d({
  __name: "UserAvatar",
  props: {
    src: {},
    name: {},
    size: { default: 36 },
    rounded: { default: "full" }
  },
  setup(a) {
    const l = a, r = m(!1);
    p(() => l.src, () => {
      r.value = !1;
    });
    const i = o(() => !!l.src && !r.value), u = o(() => {
      const e = (l.name || "").trim().split(/\s+/).filter(Boolean);
      return (e.length >= 2 ? e[0][0] + e[e.length - 1][0] : (e[0] || "?").slice(0, 2)).toUpperCase();
    });
    return (e, n) => (t(), s("span", {
      class: f(["inline-grid place-items-center overflow-hidden shrink-0 bg-primary text-primary-foreground font-bold select-none", e.rounded === "full" ? "rounded-full" : "rounded-lg"]),
      style: c({ width: e.size + "px", height: e.size + "px", fontSize: Math.round(e.size * 0.38) + "px" }),
      title: e.name,
      role: "img",
      "aria-label": e.name
    }, [
      i.value ? (t(), s("img", {
        key: 0,
        src: e.src,
        alt: e.name || "",
        class: "w-full h-full object-cover",
        onError: n[0] || (n[0] = (b) => r.value = !0)
      }, null, 40, z)) : (t(), s(g, { key: 1 }, [
        h(v(u.value), 1)
      ], 64))
    ], 14, y));
  }
});
export {
  w as _
};
//# sourceMappingURL=UserAvatar.vue_vue_type_script_setup_true_lang-AXBFwsc7.js.map
