import { defineComponent as s, inject as p, openBlock as i, createElementBlock as l, withModifiers as c, unref as r, renderSlot as f } from "vue";
const d = /* @__PURE__ */ s({
  __name: "PopoverTrigger",
  setup(u) {
    const { toggle: e } = p("popover");
    return (t, o) => (i(), l("div", {
      onClick: o[0] || (o[0] = c(
        //@ts-ignore
        (...n) => r(e) && r(e)(...n),
        ["stop"]
      )),
      class: "cursor-pointer"
    }, [
      f(t.$slots, "default")
    ]));
  }
});
export {
  d as default
};
//# sourceMappingURL=PopoverTrigger-CTa-i7wG.js.map
