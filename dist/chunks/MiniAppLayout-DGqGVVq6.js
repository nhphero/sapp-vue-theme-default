import { defineComponent as O, inject as E, computed as d, ref as G, watch as F, onBeforeUnmount as H, openBlock as n, createElementBlock as o, createElementVNode as r, normalizeClass as P, createBlock as h, resolveDynamicComponent as g, toDisplayString as u, createCommentVNode as l, Fragment as m, renderList as x, createVNode as R, unref as U, withDirectives as W, vShow as q, renderSlot as w, createTextVNode as J, markRaw as C } from "vue";
import { LayoutGrid as N, ChevronDown as K } from "lucide-vue-next";
import { _ as Q } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const X = ["data-variant"], Y = {
  key: 0,
  class: "w-[220px] shrink-0 py-6 pr-6 border-r border-border-soft flex flex-col min-h-0 overflow-auto"
}, Z = { class: "flex items-center gap-3 px-2 mb-4" }, ee = { class: "w-9 h-9 rounded-lg bg-primary-soft text-primary grid place-items-center shrink-0" }, te = { class: "min-w-0" }, ae = { class: "text-sm font-semibold leading-tight truncate" }, ne = {
  key: 0,
  class: "text-xs text-faint truncate"
}, se = { class: "flex flex-col gap-0.5" }, oe = ["aria-current", "onClick"], ie = { class: "truncate" }, le = {
  key: 1,
  class: "badge ml-auto"
}, re = {
  key: 1,
  class: "mini-nav-group"
}, ue = ["aria-expanded", "onClick"], ce = { class: "truncate" }, de = { class: "flex flex-col gap-0.5" }, pe = ["aria-current", "onClick"], ve = { class: "truncate" }, he = {
  key: 1,
  class: "badge ml-auto"
}, ge = {
  key: 0,
  class: "mt-auto pt-4"
}, me = { class: "flex-1 min-w-0 min-h-0 overflow-auto py-6 flex flex-col" }, fe = {
  key: 0,
  class: "flex items-start justify-between gap-4 mb-5"
}, be = { class: "min-w-0" }, _e = {
  key: 0,
  class: "text-xl font-semibold leading-tight truncate"
}, ye = {
  key: 1,
  class: "text-sm text-muted-foreground mt-0.5"
}, ke = {
  key: 0,
  class: "flex items-center gap-2 shrink-0"
}, xe = {
  key: 1,
  class: "tabs mb-5",
  role: "tablist"
}, we = ["aria-selected", "onClick"], Ce = {
  key: 1,
  class: "badge"
}, $e = /* @__PURE__ */ O({
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
  setup(j, { emit: L }) {
    const a = j, T = L, $ = E("$superApp", null), S = d(
      () => typeof a.icon == "string" ? $?.getComponent?.(`ui.icon.${a.icon.toLowerCase()}`) || N : a.icon || N
    ), A = d(() => a.contained ? "page-container" : "w-full px-6"), f = (e) => (e ?? "").split("/").filter(Boolean).join("/"), b = d(() => {
      const e = f(a.active);
      let s = null;
      for (const t of a.nav) {
        const i = f(t.path);
        (i === e || i !== "" && e.startsWith(`${i}/`)) && (s === null || i.length > s.length) && (s = i);
      }
      return s;
    }), p = (e) => b.value !== null && f(e) === b.value, v = (e) => {
      a.nav.find((s) => s.path === e)?.disabled || T("navigate", e);
    }, z = d(() => a.nav.find((e) => p(e.path))), D = d(() => {
      const e = [];
      for (const s of a.nav) {
        if (!s.group) {
          e.push({ group: null, item: s });
          continue;
        }
        const t = e.find((i) => i.group === s.group);
        t ? t.items.push(s) : e.push({ group: s.group, items: [s] });
      }
      return e;
    }), _ = G(/* @__PURE__ */ new Set()), B = (e, s) => !_.value.has(e) || s.some((t) => p(t.path)), V = (e) => {
      const s = new Set(_.value);
      s.has(e) ? s.delete(e) : s.add(e), _.value = s;
    }, y = d(() => a.variant === "tabs" ? a.title : a.pageTitle ?? z.value?.label ?? a.title), I = d(() => a.variant === "tabs" ? a.subtitle : a.pageSubtitle), k = d(() => !y.value || a.pageTitle === "" ? !1 : a.variant === "shell" && a.pageTitle == null ? y.value !== z.value?.label : !0), c = $?.getModuleState?.("shell.nav", { moduleId: "", title: "", icon: null, items: [], active: "", navigate: null });
    return F(() => [a.nav, a.active, a.variant, a.title, a.icon], () => {
      if (c) {
        if (a.variant !== "shell") {
          c.items.length && Object.assign(c, { title: "", icon: null, items: [], active: "", navigate: null });
          return;
        }
        c.title = a.title ?? "", c.icon = C(S.value), c.items = a.nav.map((e) => ({
          label: e.label,
          path: e.path,
          badge: e.badge,
          group: e.group,
          disabled: e.disabled,
          icon: e.icon ? C(e.icon) : void 0,
          groupIcon: e.groupIcon ? C(e.groupIcon) : void 0
        })), c.active = b.value ?? "", c.navigate = v;
      }
    }, { immediate: !0, deep: !0 }), H(() => {
      c && a.variant === "shell" && Object.assign(c, { title: "", icon: null, items: [], active: "", navigate: null });
    }), (e, s) => (n(), o("div", {
      class: "mini-layout flex flex-col h-full min-h-0 bg-background",
      "data-variant": e.variant
    }, [
      r("div", {
        class: P([A.value, "flex flex-1 min-h-0 gap-8"])
      }, [
        e.variant === "sidebar" ? (n(), o("aside", Y, [
          r("div", Z, [
            r("span", ee, [
              (n(), h(g(S.value), { size: 18 }))
            ]),
            r("div", te, [
              r("div", ae, u(e.title), 1),
              e.subtitle ? (n(), o("div", ne, u(e.subtitle), 1)) : l("", !0)
            ])
          ]),
          r("nav", se, [
            (n(!0), o(m, null, x(D.value, (t) => (n(), o(m, {
              key: t.group ?? t.item.path
            }, [
              t.group === null ? (n(), o("button", {
                key: 0,
                type: "button",
                class: "nav-item w-full text-left",
                "aria-current": p(t.item.path) ? "page" : void 0,
                onClick: (i) => v(t.item.path)
              }, [
                t.item.icon ? (n(), h(g(t.item.icon), {
                  key: 0,
                  size: 16
                })) : l("", !0),
                r("span", ie, u(t.item.label), 1),
                t.item.badge !== void 0 ? (n(), o("span", le, u(t.item.badge), 1)) : l("", !0)
              ], 8, oe)) : (n(), o("div", re, [
                r("button", {
                  type: "button",
                  class: "mini-nav-group__head",
                  "aria-expanded": B(t.group, t.items),
                  onClick: (i) => V(t.group)
                }, [
                  r("span", ce, u(t.group), 1),
                  R(U(K), {
                    size: 14,
                    class: "mini-nav-group__chevron"
                  })
                ], 8, ue),
                W(r("div", de, [
                  (n(!0), o(m, null, x(t.items, (i) => (n(), o("button", {
                    key: i.path,
                    type: "button",
                    class: "nav-item w-full text-left",
                    "aria-current": p(i.path) ? "page" : void 0,
                    onClick: (M) => v(i.path)
                  }, [
                    i.icon ? (n(), h(g(i.icon), {
                      key: 0,
                      size: 16
                    })) : l("", !0),
                    r("span", ve, u(i.label), 1),
                    i.badge !== void 0 ? (n(), o("span", he, u(i.badge), 1)) : l("", !0)
                  ], 8, pe))), 128))
                ], 512), [
                  [q, B(t.group, t.items)]
                ])
              ]))
            ], 64))), 128))
          ]),
          e.$slots.footer ? (n(), o("div", ge, [
            w(e.$slots, "footer", {}, void 0, !0)
          ])) : l("", !0)
        ])) : l("", !0),
        r("main", me, [
          k.value || e.$slots.actions ? (n(), o("div", fe, [
            r("div", be, [
              k.value ? (n(), o("h1", _e, u(y.value), 1)) : l("", !0),
              k.value && I.value ? (n(), o("p", ye, u(I.value), 1)) : l("", !0)
            ]),
            e.$slots.actions ? (n(), o("div", ke, [
              w(e.$slots, "actions", {}, void 0, !0)
            ])) : l("", !0)
          ])) : l("", !0),
          e.variant === "tabs" && e.nav.length ? (n(), o("nav", xe, [
            (n(!0), o(m, null, x(e.nav, (t) => (n(), o("button", {
              key: t.path,
              type: "button",
              class: "tab inline-flex items-center gap-1.5",
              role: "tab",
              "aria-selected": p(t.path),
              onClick: (i) => v(t.path)
            }, [
              t.icon ? (n(), h(g(t.icon), {
                key: 0,
                size: 14
              })) : l("", !0),
              J(" " + u(t.label) + " ", 1),
              t.badge !== void 0 ? (n(), o("span", Ce, u(t.badge), 1)) : l("", !0)
            ], 8, we))), 128))
          ])) : l("", !0),
          w(e.$slots, "default", {}, void 0, !0)
        ])
      ], 2)
    ], 8, X));
  }
}), Ne = /* @__PURE__ */ Q($e, [["__scopeId", "data-v-2a44b343"]]);
export {
  Ne as default
};
//# sourceMappingURL=MiniAppLayout-DGqGVVq6.js.map
