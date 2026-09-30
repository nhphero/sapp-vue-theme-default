import { defineComponent as i, openBlock as a, createElementBlock as r, renderSlot as p, Fragment as u, createVNode as o, withCtx as t, unref as m, createTextVNode as c, createCommentVNode as f } from "vue";
import { Search as _, Filter as V } from "lucide-vue-next";
import { _ as h } from "./Input.vue_vue_type_script_setup_true_lang-C7VCutHC.js";
import { _ as v } from "./Button.vue_vue_type_script_setup_true_lang-BPGu9kgg.js";
const $ = { class: "toolbar w-full" }, w = /* @__PURE__ */ i({
  __name: "ErpActionBar",
  props: {
    modelValue: {},
    placeholder: {}
  },
  emits: ["update:modelValue"],
  setup(k, { emit: n }) {
    const s = n, d = (e) => s("update:modelValue", e.target.value);
    return (e, l) => (a(), r("div", $, [
      p(e.$slots, "default"),
      e.$slots.default ? f("", !0) : (a(), r(u, { key: 0 }, [
        o(h, {
          placeholder: e.placeholder || "Tìm…",
          "model-value": e.modelValue,
          "container-class": "flex-1",
          onInput: d
        }, {
          prefix: t(() => [
            o(m(_), { size: 14 })
          ]),
          _: 1
        }, 8, ["placeholder", "model-value"]),
        o(v, { variant: "default" }, {
          icon: t(() => [
            o(m(V), { size: 14 })
          ]),
          default: t(() => [
            l[0] || (l[0] = c(" Lọc "))
          ]),
          _: 1
        })
      ], 64))
    ]));
  }
});
export {
  w as default
};
//# sourceMappingURL=ErpActionBar-DR8NVTx-.js.map
