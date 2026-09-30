import { defineComponent as R, ref as T, onMounted as W, watch as _, onBeforeUnmount as E, openBlock as w, createElementBlock as M, normalizeStyle as S, createElementVNode as $ } from "vue";
import { Chart as z } from "chart.js/auto";
const P = /* @__PURE__ */ R({
  __name: "InsightChart",
  props: {
    kind: { default: "bar" },
    series: {},
    labels: {},
    datasets: {},
    target: {},
    height: { default: 160 },
    legend: { type: Boolean, default: !0 },
    format: {},
    palette: {}
  },
  setup(v) {
    const e = v, d = T(null);
    let i = null, c = null;
    const o = (t) => getComputedStyle(document.documentElement).getPropertyValue(t).trim(), g = (t) => t.startsWith("--") ? o(t) : t, x = ["--primary", "--info", "--success", "--warning", "--danger", "--brand-300", "--faint"], k = (t) => e.format ? e.format(t) : Math.abs(t) >= 1e6 ? `${(t / 1e6).toFixed(1)}M` : Math.abs(t) >= 1e3 ? `${(t / 1e3).toFixed(1)}K` : `${t}`, B = () => {
      const t = (e.palette ?? x).map(g), l = o("--muted-foreground"), h = o("--border-soft"), b = o("--font-sans") || "system-ui", y = e.labels ?? e.series?.map((a) => a.label) ?? [], r = e.kind === "donut" || e.kind === "pie", p = r ? e.kind === "donut" ? "doughnut" : "pie" : e.kind === "scatter" ? "scatter" : e.kind === "line" || e.kind === "area" ? "line" : "bar", m = e.datasets ? e.datasets.map((a, f) => {
        const s = a.color ? g(a.color) : t[f % t.length], n = a.kind ?? (e.kind === "line" || e.kind === "area" ? "line" : "bar");
        return {
          type: p === "bar" || p === "line" ? n : void 0,
          label: a.name,
          data: a.data,
          backgroundColor: s,
          borderColor: s,
          borderWidth: n === "line" ? 2 : 0,
          borderRadius: 3,
          maxBarThickness: 36,
          tension: 0.3,
          pointRadius: n === "line" ? 3 : 0,
          pointBackgroundColor: o("--card"),
          pointBorderWidth: 2,
          fill: e.kind === "area" && n === "line" ? { target: "origin", above: s + "22" } : !1,
          borderDash: a.dashed ? [4, 4] : void 0,
          order: n === "line" ? 0 : 1
        };
      }) : [{
        label: "",
        data: (e.series ?? []).map((a) => a.value),
        backgroundColor: r ? (e.series ?? []).map((a, f) => t[f % t.length]) : e.kind === "area" ? t[0] + "33" : t[0],
        borderColor: r ? o("--card") : t[0],
        borderWidth: r || e.kind === "line" || e.kind === "area" ? 2 : 0,
        borderRadius: 3,
        maxBarThickness: 36,
        tension: 0.3,
        pointRadius: 3,
        pointBackgroundColor: o("--card"),
        pointBorderWidth: 2,
        fill: e.kind === "area" ? "origin" : !1
      }];
      e.target !== void 0 && !r && e.kind !== "scatter" && m.push({ type: "line", label: "Target", data: y.map(() => e.target), borderColor: o("--foreground"), borderDash: [6, 4], borderWidth: 1.5, pointRadius: 0, fill: !1, order: -1 });
      const C = e.kind === "stacked";
      return {
        type: p,
        data: { labels: y, datasets: m },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          animation: { duration: 250 },
          plugins: {
            legend: { display: e.legend && (r || m.length > 1), position: r ? "right" : "bottom", labels: { color: l, boxWidth: 10, boxHeight: 10, usePointStyle: !0, pointStyle: "rectRounded", font: { family: b, size: 11 }, filter: (a) => !!a.text } },
            tooltip: { backgroundColor: o("--foreground"), titleColor: o("--background"), bodyColor: o("--background"), padding: 8, cornerRadius: 6, callbacks: { label: (a) => ` ${a.dataset.label ? a.dataset.label + ": " : ""}${k(a.parsed.y ?? a.parsed)}` } }
          },
          scales: r ? {} : {
            x: { stacked: C, grid: { display: !1 }, border: { color: h }, ticks: { color: l, font: { family: b, size: 11 }, maxRotation: 0, autoSkip: !0 } },
            y: { stacked: C, beginAtZero: !0, grid: { color: h }, border: { display: !1 }, ticks: { color: l, font: { family: b, size: 11 }, callback: (a) => k(Number(a)), maxTicksLimit: 5 } }
          },
          cutout: e.kind === "donut" ? "68%" : void 0
        }
      };
    }, u = () => {
      d.value && (i?.destroy(), i = new z(d.value, B()));
    };
    return W(() => {
      u(), c = new MutationObserver(u), c.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme", "style"] });
    }), _(() => [e.kind, e.series, e.labels, e.datasets, e.target], u, { deep: !0 }), E(() => {
      c?.disconnect(), i?.destroy(), i = null;
    }), (t, l) => (w(), M("div", {
      class: "relative w-full",
      style: S({ height: t.height + "px" })
    }, [
      $("canvas", {
        ref_key: "canvas",
        ref: d,
        role: "img"
      }, null, 512)
    ], 4));
  }
});
export {
  P as default
};
//# sourceMappingURL=InsightChart-BlF0mgf_.js.map
