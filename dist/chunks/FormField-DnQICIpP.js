import { defineComponent as a, openBlock as r, createElementBlock as l, normalizeClass as n, createElementVNode as s, toDisplayString as o, renderSlot as t, createCommentVNode as i } from "vue";
const d = {
  key: 0,
  class: "error"
}, p = {
  key: 1,
  class: "hint"
}, c = /* @__PURE__ */ a({
  __name: "FormField",
  props: {
    label: {},
    error: { default: "" },
    hint: { default: "" },
    wide: { type: Boolean, default: !1 }
  },
  setup(m) {
    return (e, f) => (r(), l("div", {
      class: n(["field", [{ invalid: !!e.error }, e.wide && "sm:col-span-2"]])
    }, [
      s("label", null, o(e.label), 1),
      t(e.$slots, "default"),
      e.error ? (r(), l("span", d, o(e.error), 1)) : e.hint ? (r(), l("span", p, o(e.hint), 1)) : i("", !0)
    ], 2));
  }
});
export {
  c as default
};
//# sourceMappingURL=FormField-DnQICIpP.js.map
