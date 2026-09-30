import { defineComponent as f, openBlock as a, createElementBlock as r, normalizeClass as n, unref as l, createElementVNode as i, renderSlot as h, createVNode as c, withDirectives as V, isRef as v, vModelText as k, createCommentVNode as w } from "vue";
import { useVModel as C } from "@vueuse/core";
import { Search as b, X as y } from "lucide-vue-next";
import { cn as z } from "../index.js";
const S = { class: "absolute left-2.5 flex items-center justify-center text-faint pointer-events-none" }, x = ["placeholder"], M = /* @__PURE__ */ f({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: {},
    class: {},
    iconSize: {},
    showClear: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: m }) {
    const o = u, e = C(o, "modelValue", m, { passive: !0, defaultValue: "" }), p = () => {
      e.value = "";
    };
    return (t, s) => (a(), r("div", {
      class: n(l(z)("relative flex items-center w-full shrink-0", o.class))
    }, [
      i("div", S, [
        h(t.$slots, "icon", {}, () => [
          c(l(b), {
            size: t.iconSize || 14,
            "stroke-width": "2"
          }, null, 8, ["size"])
        ])
      ]),
      V(i("input", {
        "onUpdate:modelValue": s[0] || (s[0] = (d) => v(e) ? e.value = d : null),
        type: "search",
        placeholder: t.placeholder || "Tìm…",
        autocomplete: "off",
        class: n(["input sm pl-8", { "pr-8": t.showClear }])
      }, null, 10, x), [
        [k, l(e)]
      ]),
      t.showClear && l(e) ? (a(), r("button", {
        key: 0,
        type: "button",
        class: "icon-btn absolute right-0.5",
        style: { width: "28px", height: "28px" },
        "aria-label": "Xoá tìm kiếm",
        onClick: p
      }, [
        c(l(y), { size: 12 })
      ])) : w("", !0)
    ], 2));
  }
});
export {
  M as default
};
//# sourceMappingURL=SearchInput-CHiFQN2g.js.map
