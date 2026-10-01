import { defineComponent as p, inject as d, onMounted as f, openBlock as s, createElementBlock as u, Fragment as h, createElementVNode as E, unref as T, createBlock as _, createCommentVNode as k } from "vue";
import { THEME as y } from "../index.js";
import C from "./ThemePanel-DO2Wq25u.js";
const N = /* @__PURE__ */ p({
  __name: "ThemeConnector",
  setup(g) {
    const n = d("$themeConfig", null), l = () => {
      const o = document.documentElement, e = (a, r = "") => {
        Object.entries(a).forEach(([c, t]) => {
          const m = r ? `${r}-${c}` : c;
          if (typeof t == "object" && t !== null)
            e(t, m);
          else {
            const i = `--erp-${m.replace(/\./g, "-")}`;
            o.style.setProperty(i, t);
          }
        });
      };
      e(y);
    };
    return f(() => {
      l(), n?.apply();
    }), (o, e) => (s(), u(h, null, [
      e[0] || (e[0] = E("div", {
        class: "theme-connector-anchor hidden",
        "aria-hidden": "true"
      }, null, -1)),
      T(n) ? (s(), _(C, { key: 0 })) : k("", !0)
    ], 64));
  }
});
export {
  N as default
};
//# sourceMappingURL=ThemeConnector-CUumAtRR.js.map
