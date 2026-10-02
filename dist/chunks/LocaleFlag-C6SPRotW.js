import { defineComponent as h, computed as s, openBlock as e, createElementBlock as i, normalizeStyle as d, Fragment as n, createElementVNode as l, createStaticVNode as F, createCommentVNode as k, toDisplayString as g } from "vue";
import { _ as v } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const w = {
  viewBox: "0 0 30 21",
  preserveAspectRatio: "xMidYMid slice"
}, y = /* @__PURE__ */ h({
  __name: "LocaleFlag",
  props: {
    locale: {},
    size: { default: 18 }
  },
  setup(a) {
    const p = a, o = s(() => (p.locale || "").toLowerCase().split(/[-_]/)[0]), u = /* @__PURE__ */ new Set(["vi", "en", "ja", "ko", "zh", "fr", "de"]), f = s(() => u.has(o.value));
    return (r, t) => f.value ? (e(), i("span", {
      key: 0,
      class: "locale-flag",
      style: d({ width: r.size + "px", height: r.size * 0.7 + "px" }),
      "aria-hidden": "true"
    }, [
      (e(), i("svg", w, [
        o.value === "vi" ? (e(), i(n, { key: 0 }, [
          t[0] || (t[0] = l("rect", {
            width: "30",
            height: "21",
            fill: "#DA251D"
          }, null, -1)),
          t[1] || (t[1] = l("polygon", {
            fill: "#FFFF00",
            points: "15,4.2 16.9,9.3 22.3,9.3 17.9,12.5 19.6,17.7 15,14.5 10.4,17.7 12.1,12.5 7.7,9.3 13.1,9.3"
          }, null, -1))
        ], 64)) : o.value === "en" ? (e(), i(n, { key: 1 }, [
          t[2] || (t[2] = F('<rect width="30" height="21" fill="#012169" data-v-7567b3f6></rect><path d="M0,0 L30,21 M30,0 L0,21" stroke="#FFF" stroke-width="4" data-v-7567b3f6></path><path d="M0,0 L30,21 M30,0 L0,21" stroke="#C8102E" stroke-width="2" data-v-7567b3f6></path><path d="M15,0 V21 M0,10.5 H30" stroke="#FFF" stroke-width="6" data-v-7567b3f6></path><path d="M15,0 V21 M0,10.5 H30" stroke="#C8102E" stroke-width="3.5" data-v-7567b3f6></path>', 5))
        ], 64)) : o.value === "ja" ? (e(), i(n, { key: 2 }, [
          t[3] || (t[3] = l("rect", {
            width: "30",
            height: "21",
            fill: "#FFF"
          }, null, -1)),
          t[4] || (t[4] = l("circle", {
            cx: "15",
            cy: "10.5",
            r: "6",
            fill: "#BC002D"
          }, null, -1))
        ], 64)) : o.value === "ko" ? (e(), i(n, { key: 3 }, [
          t[5] || (t[5] = l("rect", {
            width: "30",
            height: "21",
            fill: "#FFF"
          }, null, -1)),
          t[6] || (t[6] = l("circle", {
            cx: "15",
            cy: "10.5",
            r: "6",
            fill: "#CD2E3A"
          }, null, -1)),
          t[7] || (t[7] = l("path", {
            d: "M9,10.5 a6,6 0 0 0 12,0 a3,3 0 0 0 -6,0 a3,3 0 0 1 -6,0",
            fill: "#0047A0"
          }, null, -1))
        ], 64)) : o.value === "zh" ? (e(), i(n, { key: 4 }, [
          t[8] || (t[8] = l("rect", {
            width: "30",
            height: "21",
            fill: "#DE2910"
          }, null, -1)),
          t[9] || (t[9] = l("polygon", {
            fill: "#FFDE00",
            points: "6,3 7.4,6.6 11.2,6.6 8.1,8.8 9.3,12.4 6,10.2 2.7,12.4 3.9,8.8 0.8,6.6 4.6,6.6"
          }, null, -1))
        ], 64)) : o.value === "fr" ? (e(), i(n, { key: 5 }, [
          t[10] || (t[10] = l("rect", {
            width: "10",
            height: "21",
            fill: "#0055A4"
          }, null, -1)),
          t[11] || (t[11] = l("rect", {
            x: "10",
            width: "10",
            height: "21",
            fill: "#FFF"
          }, null, -1)),
          t[12] || (t[12] = l("rect", {
            x: "20",
            width: "10",
            height: "21",
            fill: "#EF4135"
          }, null, -1))
        ], 64)) : o.value === "de" ? (e(), i(n, { key: 6 }, [
          t[13] || (t[13] = l("rect", {
            width: "30",
            height: "7",
            fill: "#000"
          }, null, -1)),
          t[14] || (t[14] = l("rect", {
            y: "7",
            width: "30",
            height: "7",
            fill: "#DD0000"
          }, null, -1)),
          t[15] || (t[15] = l("rect", {
            y: "14",
            width: "30",
            height: "7",
            fill: "#FFCE00"
          }, null, -1))
        ], 64)) : k("", !0)
      ]))
    ], 4)) : (e(), i("span", {
      key: 1,
      class: "inline-flex items-center justify-center rounded-[3px] bg-muted text-faint font-mono font-bold uppercase shrink-0",
      style: d({ width: r.size + "px", height: Math.round(r.size * 0.7) + "px", fontSize: Math.round(r.size * 0.45) + "px" }),
      "aria-hidden": "true"
    }, g(o.value.slice(0, 2)), 5));
  }
}), x = /* @__PURE__ */ v(y, [["__scopeId", "data-v-7567b3f6"]]);
export {
  x as L
};
//# sourceMappingURL=LocaleFlag-C6SPRotW.js.map
