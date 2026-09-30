import { defineComponent as d, inject as l, ref as f, openBlock as c, createElementBlock as C, withModifiers as x, normalizeStyle as b, normalizeClass as h, unref as a, createBlock as i } from "vue";
import { Check as k, Copy as v } from "lucide-vue-next";
import { cn as _ } from "../index.js";
const z = /* @__PURE__ */ d({
  __name: "ButtonCopy",
  props: {
    text: {},
    toastMessage: {},
    class: {},
    style: {}
  },
  emits: ["copy-success"],
  setup(p, { emit: u }) {
    const e = p, n = l("$superApp"), r = l("$toast"), m = u, o = f(!1), y = async () => {
      if (e.text)
        try {
          if (navigator.clipboard?.writeText)
            await navigator.clipboard.writeText(e.text);
          else {
            const s = document.createElement("textarea");
            s.value = e.text, document.body.appendChild(s), s.select(), document.execCommand("copy"), document.body.removeChild(s);
          }
          o.value = !0, setTimeout(() => {
            o.value = !1;
          }, 1400);
          const t = e.toastMessage || "Đã copy";
          r?.success ? r.success(t) : n?.$toast?.success && n.$toast.success(t), m("copy-success", t);
        } catch (t) {
          console.error("Copy failed:", t);
        }
    };
    return (t, s) => (c(), C("button", {
      type: "button",
      class: h(a(_)("btn icon sm", e.class)),
      style: b(e.style),
      title: "Copy",
      "aria-label": "Copy",
      onClick: x(y, ["stop"])
    }, [
      o.value ? (c(), i(a(k), {
        key: 0,
        size: 14,
        class: "text-success"
      })) : (c(), i(a(v), {
        key: 1,
        size: 14
      }))
    ], 6));
  }
});
export {
  z as default
};
//# sourceMappingURL=ButtonCopy-DHLLo4Pm.js.map
