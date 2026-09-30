import { defineComponent as w, computed as y, openBlock as l, createElementBlock as s, normalizeStyle as r, normalizeClass as o, unref as u, Fragment as h, renderList as k, createElementVNode as i, createStaticVNode as m } from "vue";
import { cn as d } from "../index.js";
const z = /* @__PURE__ */ w({
  __name: "Skeleton",
  props: {
    variant: { default: "text" },
    lines: { default: 1 },
    size: { default: 36 },
    width: {},
    height: {},
    rows: { default: 5 },
    cols: { default: 4 },
    class: {}
  },
  setup(f) {
    const a = f, b = y(() => Array.from({ length: a.lines }, (e, n) => a.lines > 1 && n === a.lines - 1 ? "60%" : "100%")), p = y(() => Array.from({ length: a.cols }, (e, n) => ["45%", "80%", "60%", "35%", "50%", "70%"][n % 6]));
    return (e, n) => e.variant === "text" ? (l(), s("div", {
      key: 0,
      class: o(u(d)("flex flex-col gap-2", a.class)),
      style: r({ width: e.width }),
      "aria-busy": "true",
      "aria-hidden": "true"
    }, [
      (l(!0), s(h, null, k(b.value, (t, c) => (l(), s("span", {
        key: c,
        class: "skeleton block",
        style: r({ width: t, height: e.height || "0.9em" })
      }, null, 4))), 128))
    ], 6)) : e.variant === "circle" ? (l(), s("span", {
      key: 1,
      class: o(u(d)("skeleton inline-block rounded-full shrink-0", a.class)),
      style: r({ width: `${e.size}px`, height: `${e.size}px` }),
      "aria-busy": "true",
      "aria-hidden": "true"
    }, null, 6)) : e.variant === "rect" ? (l(), s("span", {
      key: 2,
      class: o(u(d)("skeleton block", a.class)),
      style: r({ width: e.width || "100%", height: e.height || "120px" }),
      "aria-busy": "true",
      "aria-hidden": "true"
    }, null, 6)) : e.variant === "table" ? (l(), s("div", {
      key: 3,
      class: o(u(d)("table-wrap", a.class)),
      "aria-busy": "true",
      "aria-hidden": "true"
    }, [
      i("table", null, [
        i("thead", null, [
          i("tr", null, [
            (l(!0), s(h, null, k(e.cols, (t) => (l(), s("th", { key: t }, [
              i("span", {
                class: "skeleton block h-3",
                style: r({ width: p.value[t - 1] })
              }, null, 4)
            ]))), 128))
          ])
        ]),
        i("tbody", null, [
          (l(!0), s(h, null, k(e.rows, (t) => (l(), s("tr", { key: t }, [
            (l(!0), s(h, null, k(e.cols, (c) => (l(), s("td", { key: c }, [
              i("span", {
                class: "skeleton block h-3.5",
                style: r({ width: p.value[(c + t) % e.cols] })
              }, null, 4)
            ]))), 128))
          ]))), 128))
        ])
      ])
    ], 2)) : (l(), s("div", {
      key: 4,
      class: o(u(d)("card flex flex-col gap-3", a.class)),
      "aria-busy": "true",
      "aria-hidden": "true"
    }, n[0] || (n[0] = [
      m('<span class="skeleton block h-4 w-1/3"></span><span class="skeleton block h-3 w-full"></span><span class="skeleton block h-3 w-full"></span><span class="skeleton block h-3 w-2/3"></span><div class="flex gap-2 mt-2"><span class="skeleton block h-8 w-24"></span><span class="skeleton block h-8 w-20"></span></div>', 5)
    ]), 2));
  }
});
export {
  z as default
};
//# sourceMappingURL=Skeleton-CfLyDGWt.js.map
