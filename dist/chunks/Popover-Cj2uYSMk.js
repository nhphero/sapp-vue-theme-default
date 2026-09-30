import { defineComponent as c, ref as r, provide as d, onMounted as p, onUnmounted as u, openBlock as f, createElementBlock as v, renderSlot as g } from "vue";
const _ = /* @__PURE__ */ c({
  __name: "Popover",
  props: {
    align: {}
  },
  setup(i) {
    const s = i, e = r(!1), n = r(null), a = () => {
      e.value = !e.value;
    }, t = () => {
      e.value = !1;
    };
    d("popover", {
      isOpen: e,
      toggle: a,
      close: t,
      align: s.align || "center",
      triggerRef: n
    });
    const l = (o) => {
      n.value && !n.value.contains(o.target) && t();
    };
    return p(() => {
      window.addEventListener("click", l);
    }), u(() => {
      window.removeEventListener("click", l);
    }), (o, m) => (f(), v("div", {
      class: "relative inline-block",
      ref_key: "triggerRef",
      ref: n
    }, [
      g(o.$slots, "default")
    ], 512));
  }
});
export {
  _ as default
};
//# sourceMappingURL=Popover-Cj2uYSMk.js.map
