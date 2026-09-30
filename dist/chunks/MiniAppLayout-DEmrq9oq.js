import { defineComponent as z, inject as L, computed as r, watch as N, onBeforeUnmount as A, openBlock as s, createElementBlock as n, createElementVNode as l, normalizeClass as T, createBlock as v, resolveDynamicComponent as p, toDisplayString as c, createCommentVNode as i, Fragment as _, renderList as y, renderSlot as h, createTextVNode as V, markRaw as k } from "vue";
import { LayoutGrid as w } from "lucide-vue-next";
const D = ["data-variant"], E = {
  key: 0,
  class: "w-[220px] shrink-0 py-6 pr-6 border-r border-border-soft flex flex-col min-h-0 overflow-auto"
}, I = { class: "flex items-center gap-3 px-2 mb-4" }, M = { class: "w-9 h-9 rounded-lg bg-primary-soft text-primary grid place-items-center shrink-0" }, O = { class: "min-w-0" }, F = { class: "text-sm font-semibold leading-tight truncate" }, G = {
  key: 0,
  class: "text-xs text-faint truncate"
}, R = { class: "flex flex-col gap-0.5" }, U = ["aria-current", "onClick"], q = { class: "truncate" }, H = {
  key: 1,
  class: "badge ml-auto"
}, J = {
  key: 0,
  class: "mt-auto pt-4"
}, K = { class: "flex-1 min-w-0 min-h-0 overflow-auto py-6" }, P = {
  key: 0,
  class: "flex items-start justify-between gap-4 mb-5"
}, Q = { class: "min-w-0" }, W = { class: "text-xl font-semibold leading-tight truncate" }, X = {
  key: 0,
  class: "text-sm text-muted-foreground mt-0.5"
}, Y = {
  key: 0,
  class: "flex items-center gap-2 shrink-0"
}, Z = {
  key: 1,
  class: "tabs mb-5",
  role: "tablist"
}, tt = ["aria-selected", "onClick"], et = {
  key: 1,
  class: "badge"
}, ot = /* @__PURE__ */ z({
  __name: "MiniAppLayout",
  props: {
    title: {},
    subtitle: {},
    icon: {},
    nav: { default: () => [] },
    active: {},
    pageTitle: {},
    pageSubtitle: {},
    variant: { default: "shell" },
    contained: { type: Boolean, default: !0 }
  },
  emits: ["navigate"],
  setup(x, { emit: C }) {
    const e = x, $ = C, b = L("$superApp", null), g = r(
      () => typeof e.icon == "string" ? b?.getComponent?.(`ui.icon.${e.icon.toLowerCase()}`) || w : e.icon || w
    ), B = r(() => e.contained ? "page-container" : "w-full px-6"), d = (t) => e.active === t, u = (t) => $("navigate", t), S = r(() => e.nav.find((t) => d(t.path))), m = r(() => e.variant === "tabs" ? e.title : e.pageTitle ?? S.value?.label ?? e.title), f = r(() => e.variant === "tabs" ? e.subtitle : e.pageSubtitle), o = b?.getModuleState?.("shell.nav", { moduleId: "", title: "", icon: null, items: [], active: "", navigate: null });
    return N(() => [e.nav, e.active, e.variant, e.title, e.icon], () => {
      if (o) {
        if (e.variant !== "shell") {
          o.items.length && Object.assign(o, { title: "", icon: null, items: [], active: "", navigate: null });
          return;
        }
        o.title = e.title ?? "", o.icon = k(g.value), o.items = e.nav.map((t) => ({ label: t.label, path: t.path, badge: t.badge, icon: t.icon ? k(t.icon) : void 0 })), o.active = e.active ?? "", o.navigate = u;
      }
    }, { immediate: !0, deep: !0 }), A(() => {
      o && e.variant === "shell" && Object.assign(o, { title: "", icon: null, items: [], active: "", navigate: null });
    }), (t, st) => (s(), n("div", {
      class: "mini-layout flex flex-col h-full min-h-0 bg-background",
      "data-variant": t.variant
    }, [
      l("div", {
        class: T([B.value, "flex flex-1 min-h-0 gap-8"])
      }, [
        t.variant === "sidebar" ? (s(), n("aside", E, [
          l("div", I, [
            l("span", M, [
              (s(), v(p(g.value), { size: 18 }))
            ]),
            l("div", O, [
              l("div", F, c(t.title), 1),
              t.subtitle ? (s(), n("div", G, c(t.subtitle), 1)) : i("", !0)
            ])
          ]),
          l("nav", R, [
            (s(!0), n(_, null, y(t.nav, (a) => (s(), n("button", {
              key: a.path,
              type: "button",
              class: "nav-item w-full text-left",
              "aria-current": d(a.path) ? "page" : void 0,
              onClick: (j) => u(a.path)
            }, [
              a.icon ? (s(), v(p(a.icon), {
                key: 0,
                size: 16
              })) : i("", !0),
              l("span", q, c(a.label), 1),
              a.badge !== void 0 ? (s(), n("span", H, c(a.badge), 1)) : i("", !0)
            ], 8, U))), 128))
          ]),
          t.$slots.footer ? (s(), n("div", J, [
            h(t.$slots, "footer")
          ])) : i("", !0)
        ])) : i("", !0),
        l("main", K, [
          m.value || t.$slots.actions ? (s(), n("div", P, [
            l("div", Q, [
              l("h1", W, c(m.value), 1),
              f.value ? (s(), n("p", X, c(f.value), 1)) : i("", !0)
            ]),
            t.$slots.actions ? (s(), n("div", Y, [
              h(t.$slots, "actions")
            ])) : i("", !0)
          ])) : i("", !0),
          t.variant === "tabs" && t.nav.length ? (s(), n("nav", Z, [
            (s(!0), n(_, null, y(t.nav, (a) => (s(), n("button", {
              key: a.path,
              type: "button",
              class: "tab inline-flex items-center gap-1.5",
              role: "tab",
              "aria-selected": d(a.path),
              onClick: (j) => u(a.path)
            }, [
              a.icon ? (s(), v(p(a.icon), {
                key: 0,
                size: 14
              })) : i("", !0),
              V(" " + c(a.label) + " ", 1),
              a.badge !== void 0 ? (s(), n("span", et, c(a.badge), 1)) : i("", !0)
            ], 8, tt))), 128))
          ])) : i("", !0),
          h(t.$slots, "default")
        ])
      ], 2)
    ], 8, D));
  }
});
export {
  ot as default
};
//# sourceMappingURL=MiniAppLayout-DEmrq9oq.js.map
