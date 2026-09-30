import { defineComponent as c, ref as r, provide as p, onMounted as u, onUnmounted as d, openBlock as v, createElementBlock as f, renderSlot as g } from "vue";
const _ = /* @__PURE__ */ c({
  __name: "Popover",
  props: {
    align: {}
  },
  setup(i) {
    const s = i, e = r(!1), n = r(null), a = () => {
      e.value = !e.value;
    }, o = () => {
      e.value = !1;
    };
    p("popover", {
      isOpen: e,
      toggle: a,
      close: o,
      align: s.align || "center",
      triggerRef: n
    });
    const l = (t) => {
      n.value && !n.value.contains(t.target) && o();
    };
    return u(() => {
      window.addEventListener("click", l);
    }), d(() => {
      window.removeEventListener("click", l);
    }), (t, m) => (v(), f("div", {
      class: "relative inline-block",
      ref_key: "triggerRef",
      ref: n
    }, [
      g(t.$slots, "default", {
        close: o,
        isOpen: e.value
      })
    ], 512));
  }
});
export {
  _ as default
};
//# sourceMappingURL=Popover-DgBGd8bu.js.map
