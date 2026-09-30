import { defineComponent as d, inject as l, ref as f, openBlock as c, createElementBlock as C, withModifiers as x, normalizeStyle as g, normalizeClass as b, unref as a, createBlock as i } from "vue";
import { Check as h, Copy as k } from "lucide-vue-next";
import { cn as v } from "../index.js";
const z = /* @__PURE__ */ d({
  __name: "ButtonCopy",
  props: {
    text: {},
    toastMessage: {},
    class: {},
    style: {}
  },
  emits: ["copy-success"],
  setup(p, { emit: m }) {
    const e = p, n = l("$superApp"), r = l("$message"), u = m, o = f(!1), y = async () => {
      if (e.text)
        try {
          if (navigator.clipboard?.writeText)
            await navigator.clipboard.writeText(e.text);
          else {
            const t = document.createElement("textarea");
            t.value = e.text, document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t);
          }
          o.value = !0, setTimeout(() => {
            o.value = !1;
          }, 1400);
          const s = e.toastMessage || "Đã copy";
          r?.success ? r.success(s) : n?.$message?.success && n.$message.success(s), u("copy-success", s);
        } catch (s) {
          console.error("Copy failed:", s);
        }
    };
    return (s, t) => (c(), C("button", {
      type: "button",
      class: b(a(v)("btn icon sm", e.class)),
      style: g(e.style),
      title: "Copy",
      "aria-label": "Copy",
      onClick: x(y, ["stop"])
    }, [
      o.value ? (c(), i(a(h), {
        key: 0,
        size: 14,
        class: "text-success"
      })) : (c(), i(a(k), {
        key: 1,
        size: 14
      }))
    ], 6));
  }
});
export {
  z as default
};
//# sourceMappingURL=ButtonCopy-DsdzXkaa.js.map
