import { defineComponent as _, inject as v, computed as h, openBlock as o, createElementBlock as m, Fragment as C, renderList as x, createBlock as u, resolveDynamicComponent as l, withCtx as D, mergeProps as S, createCommentVNode as b } from "vue";
import { useUiStore as y } from "../index.js";
import { _ as $ } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const k = {
  key: 0,
  class: "dialog-host-sentinel"
}, z = /* @__PURE__ */ _({
  __name: "DialogProvider",
  setup(w) {
    const a = v("$s"), n = y(), r = h(() => n.activeDialogs), p = (e) => typeof e == "function" ? a.$vue.defineAsyncComponent(e) : e, i = (e) => {
      n.closeDialog(e.id);
    }, d = async (e, c) => {
      e.onSubmit && await e.onSubmit(c), n.closeDialog(e.id);
    };
    return (e, c) => r.value.length > 0 ? (o(), m("div", k, [
      (o(!0), m(C, null, x(r.value, (t, f) => (o(), u(l(e.$c("ui.modal")), {
        key: t.id,
        show: !0,
        title: t.title,
        description: t.description,
        maxWidth: t.maxWidth,
        size: t.size || "md",
        zIndex: 1e4 + f,
        onClose: (s) => i(t)
      }, {
        default: D(() => [
          (o(), u(l(p(t.component)), S({ ref_for: !0 }, t.props || {}, {
            onClose: (s) => i(t),
            onSubmit: (s) => d(t, s)
          }), null, 16, ["onClose", "onSubmit"]))
        ]),
        _: 2
      }, 1064, ["title", "description", "maxWidth", "size", "zIndex", "onClose"]))), 128))
    ])) : b("", !0);
  }
}), W = /* @__PURE__ */ $(z, [["__scopeId", "data-v-d356f78b"]]);
export {
  W as default
};
//# sourceMappingURL=DialogProvider-C21AipJt.js.map
