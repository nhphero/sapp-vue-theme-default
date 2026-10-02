import { defineComponent as y, inject as k, computed as s, openBlock as o, createElementBlock as a, createBlock as d, resolveDynamicComponent as m, normalizeStyle as b, createElementVNode as i, createVNode as r, unref as f, toDisplayString as c, createTextVNode as u } from "vue";
import { FileText as z, ExternalLink as B, Download as $ } from "lucide-vue-next";
import { _ as V } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const j = {
  class: "file-view",
  "data-testid": "file-view"
}, C = ["src", "title"], D = {
  key: 3,
  class: "file-view__card"
}, F = { class: "file-view__icon" }, E = { class: "file-view__meta" }, M = { class: "file-view__name" }, N = { class: "file-view__hint" }, A = ["href"], I = ["href", "download"], L = /* @__PURE__ */ y({
  __name: "FileView",
  props: {
    file: {},
    mode: { default: "view" },
    height: { default: "70vh" }
  },
  setup(h) {
    const l = h, v = k("$superApp"), p = s(() => v?.$hook?.resolve?.("file.viewer", l.file) ?? null), n = s(() => (l.file?.name?.split(".").pop() ?? "").toLowerCase()), _ = s(() => (l.file?.type ?? "").startsWith("image/") || ["png", "jpg", "jpeg", "gif", "webp", "svg", "bmp"].includes(n.value)), w = s(() => l.file?.type === "application/pdf" || n.value === "pdf"), g = s(() => {
      const e = l.file?.size;
      return e ? e >= 1048576 ? `${(e / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(e / 1024))} KB` : "";
    });
    return (e, t) => (o(), a("div", j, [
      p.value?.component ? (o(), d(m(p.value.component), {
        key: 0,
        file: e.file,
        mode: e.mode,
        height: e.height
      }, null, 8, ["file", "mode", "height"])) : _.value ? (o(), d(m(e.$c("display.image")), {
        key: 1,
        src: e.file.url,
        alt: e.file.name,
        class: "file-view__image"
      }, null, 8, ["src", "alt"])) : w.value ? (o(), a("iframe", {
        key: 2,
        src: e.file.url,
        title: e.file.name,
        class: "file-view__frame",
        style: b({ height: e.height })
      }, null, 12, C)) : (o(), a("div", D, [
        i("span", F, [
          r(f(z), { size: 22 })
        ]),
        i("span", E, [
          i("span", M, c(e.file.name), 1),
          i("span", N, c([n.value.toUpperCase(), g.value].filter(Boolean).join(" · ")) + " — no viewer installed for this kind of file", 1)
        ]),
        i("a", {
          class: "btn sm",
          href: e.file.url,
          target: "_blank",
          rel: "noopener"
        }, [
          r(f(B), { size: 14 }),
          t[0] || (t[0] = u(" Open"))
        ], 8, A),
        i("a", {
          class: "btn sm",
          href: e.file.url,
          download: e.file.name
        }, [
          r(f($), { size: 14 }),
          t[1] || (t[1] = u(" Download"))
        ], 8, I)
      ]))
    ]));
  }
}), O = /* @__PURE__ */ V(L, [["__scopeId", "data-v-ce81dbd4"]]);
export {
  O as default
};
//# sourceMappingURL=FileView-ClQ5htBe.js.map
