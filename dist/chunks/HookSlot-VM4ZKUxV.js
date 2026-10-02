import { defineComponent as c, inject as u, computed as m, openBlock as t, createBlock as a, resolveDynamicComponent as r, withCtx as d, createElementBlock as i, Fragment as k, renderList as f, mergeProps as h, createCommentVNode as g } from "vue";
const C = /* @__PURE__ */ c({
  __name: "HookSlot",
  props: {
    name: {},
    tag: { default: "div" },
    context: { default: () => ({}) }
  },
  setup(s) {
    const l = s, p = u("$superApp"), n = m(() => p?.$hook?.entries?.(l.name) ?? []);
    return (o, _) => n.value.length ? (t(), a(r(o.tag), {
      key: 0,
      class: "hook-slot",
      "data-hook-slot": o.name
    }, {
      default: d(() => [
        (t(!0), i(k, null, f(n.value, (e) => (t(), a(r(e.component), h({
          key: e.id,
          ref_for: !0
        }, { ...o.context, ...e.props ?? {} }, {
          "data-hook-entry": e.id
        }), null, 16, ["data-hook-entry"]))), 128))
      ]),
      _: 1
    }, 8, ["data-hook-slot"])) : g("", !0);
  }
});
export {
  C as default
};
//# sourceMappingURL=HookSlot-VM4ZKUxV.js.map
