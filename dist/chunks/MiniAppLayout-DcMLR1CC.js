import { defineComponent as W, inject as q, computed as d, ref as J, watch as M, onBeforeUnmount as D, onActivated as K, openBlock as s, createElementBlock as n, createElementVNode as r, normalizeClass as Q, createBlock as f, resolveDynamicComponent as b, toDisplayString as u, createCommentVNode as i, Fragment as _, renderList as S, createVNode as X, unref as Y, withDirectives as Z, vShow as ee, renderSlot as N, createTextVNode as te, markRaw as j } from "vue";
import { LayoutGrid as O, ChevronDown as ae } from "lucide-vue-next";
import { _ as se } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const le = ["data-variant"], ne = {
  key: 0,
  class: "mini-aside w-[220px] shrink-0 py-6 pr-6 border-r border-border-soft flex flex-col"
}, oe = { class: "flex items-center gap-3 px-2 mb-4" }, ie = { class: "w-9 h-9 rounded-lg bg-primary-soft text-primary grid place-items-center shrink-0" }, re = { class: "min-w-0" }, ue = { class: "text-sm font-semibold leading-tight truncate" }, ce = {
  key: 0,
  class: "text-xs text-faint truncate"
}, de = { class: "flex flex-col gap-0.5" }, pe = ["aria-current", "onClick"], ve = { class: "truncate" }, he = {
  key: 1,
  class: "badge ml-auto"
}, ge = {
  key: 1,
  class: "mini-nav-group"
}, me = ["aria-expanded", "onClick"], fe = { class: "truncate" }, be = { class: "flex flex-col gap-0.5" }, _e = ["aria-current", "onClick"], ye = { class: "truncate" }, ke = {
  key: 1,
  class: "badge ml-auto"
}, xe = {
  key: 0,
  class: "mt-auto pt-4"
}, we = { class: "flex-1 min-w-0 py-6 flex flex-col" }, Ce = {
  key: 0,
  class: "flex items-start justify-between gap-4 mb-5"
}, $e = { class: "min-w-0" }, Se = {
  key: 0,
  class: "text-xl font-semibold leading-tight truncate"
}, Ne = {
  key: 1,
  class: "text-sm text-muted-foreground mt-0.5"
}, je = {
  key: 0,
  class: "flex items-center gap-2 shrink-0"
}, ze = {
  key: 1,
  class: "tabs mb-5",
  role: "tablist"
}, Be = ["aria-selected", "onClick"], Ie = {
  key: 1,
  class: "badge"
}, Le = /* @__PURE__ */ W({
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
  setup(V, { emit: P }) {
    const a = V, E = P, g = q("$superApp", null), z = d(
      () => typeof a.icon == "string" ? g?.getComponent?.(`ui.icon.${a.icon.toLowerCase()}`) || O : a.icon || O
    ), G = d(() => a.contained ? "page-container" : "w-full px-6"), y = (e) => (e ?? "").split("/").filter(Boolean).join("/"), k = d(() => {
      const e = y(a.active);
      let l = null;
      for (const t of a.nav) {
        const o = y(t.path);
        (o === e || o !== "" && e.startsWith(`${o}/`)) && (l === null || o.length > l.length) && (l = o);
      }
      return l;
    }), h = (e) => k.value !== null && y(e) === k.value, m = (e) => {
      a.nav.find((l) => l.path === e)?.disabled || E("navigate", e);
    }, x = d(() => a.nav.find((e) => h(e.path))), F = d(() => {
      const e = [];
      for (const l of a.nav) {
        if (!l.group) {
          e.push({ group: null, item: l });
          continue;
        }
        const t = e.find((o) => o.group === l.group);
        t ? t.items.push(l) : e.push({ group: l.group, items: [l] });
      }
      return e;
    }), w = J(/* @__PURE__ */ new Set()), B = (e, l) => !w.value.has(e) || l.some((t) => h(t.path)), H = (e) => {
      const l = new Set(w.value);
      l.has(e) ? l.delete(e) : l.add(e), w.value = l;
    }, C = d(() => a.variant === "tabs" ? a.title : a.pageTitle ?? x.value?.label ?? a.title), I = d(() => a.variant === "tabs" ? a.subtitle : a.pageSubtitle), $ = d(() => !C.value || a.pageTitle === "" ? !1 : p.value === "shell" && a.pageTitle == null ? C.value !== x.value?.label : !0), R = g?.getModuleState?.("shell.layout", { sidebar: !1 }), p = d(() => a.variant === "sidebar" && R?.sidebar ? "shell" : a.variant), c = g?.getModuleState?.("shell.nav", { moduleId: "", title: "", icon: null, items: [], active: "", navigate: null }), L = () => {
      if (c) {
        if (p.value !== "shell") {
          c.items.length && Object.assign(c, { title: "", icon: null, items: [], active: "", navigate: null });
          return;
        }
        c.title = a.title ?? "", c.icon = j(z.value), c.items = a.nav.map((e) => ({
          label: e.label,
          path: e.path,
          badge: e.badge,
          group: e.group,
          disabled: e.disabled,
          icon: e.icon ? j(e.icon) : void 0,
          groupIcon: e.groupIcon ? j(e.groupIcon) : void 0
        })), c.active = k.value ?? "", c.navigate = m;
      }
    };
    M(() => [a.nav, a.active, p.value, a.title, a.icon], L, { immediate: !0, deep: !0 });
    const v = g?.getModuleState?.("shell.page", { app: "", name: "" }), T = d(() => a.pageTitle || x.value?.label || a.title || ""), A = () => {
      v && (v.app = a.title ?? "", v.name = T.value);
    };
    return M(T, A, { immediate: !0 }), D(() => {
      v && v.app === (a.title ?? "") && Object.assign(v, { app: "", name: "" });
    }), K(() => {
      L(), A();
    }), D(() => {
      c && a.variant === "shell" && Object.assign(c, { title: "", icon: null, items: [], active: "", navigate: null });
    }), (e, l) => (s(), n("div", {
      class: "mini-layout flex flex-col h-full min-h-0 overflow-y-auto overflow-x-hidden bg-background",
      "data-variant": p.value
    }, [
      r("div", {
        class: Q([G.value, "flex flex-1 gap-8"])
      }, [
        p.value === "sidebar" ? (s(), n("aside", ne, [
          r("div", oe, [
            r("span", ie, [
              (s(), f(b(z.value), { size: 18 }))
            ]),
            r("div", re, [
              r("div", ue, u(e.title), 1),
              e.subtitle ? (s(), n("div", ce, u(e.subtitle), 1)) : i("", !0)
            ])
          ]),
          r("nav", de, [
            (s(!0), n(_, null, S(F.value, (t) => (s(), n(_, {
              key: t.group ?? t.item.path
            }, [
              t.group === null ? (s(), n("button", {
                key: 0,
                type: "button",
                class: "nav-item w-full text-left",
                "aria-current": h(t.item.path) ? "page" : void 0,
                onClick: (o) => m(t.item.path)
              }, [
                t.item.icon ? (s(), f(b(t.item.icon), {
                  key: 0,
                  size: 16
                })) : i("", !0),
                r("span", ve, u(t.item.label), 1),
                t.item.badge !== void 0 ? (s(), n("span", he, u(t.item.badge), 1)) : i("", !0)
              ], 8, pe)) : (s(), n("div", ge, [
                r("button", {
                  type: "button",
                  class: "mini-nav-group__head",
                  "aria-expanded": B(t.group, t.items),
                  onClick: (o) => H(t.group)
                }, [
                  r("span", fe, u(t.group), 1),
                  X(Y(ae), {
                    size: 14,
                    class: "mini-nav-group__chevron"
                  })
                ], 8, me),
                Z(r("div", be, [
                  (s(!0), n(_, null, S(t.items, (o) => (s(), n("button", {
                    key: o.path,
                    type: "button",
                    class: "nav-item w-full text-left",
                    "aria-current": h(o.path) ? "page" : void 0,
                    onClick: (U) => m(o.path)
                  }, [
                    o.icon ? (s(), f(b(o.icon), {
                      key: 0,
                      size: 16
                    })) : i("", !0),
                    r("span", ye, u(o.label), 1),
                    o.badge !== void 0 ? (s(), n("span", ke, u(o.badge), 1)) : i("", !0)
                  ], 8, _e))), 128))
                ], 512), [
                  [ee, B(t.group, t.items)]
                ])
              ]))
            ], 64))), 128))
          ]),
          e.$slots.footer ? (s(), n("div", xe, [
            N(e.$slots, "footer", {}, void 0, !0)
          ])) : i("", !0)
        ])) : i("", !0),
        r("main", we, [
          $.value || e.$slots.actions ? (s(), n("div", Ce, [
            r("div", $e, [
              $.value ? (s(), n("h1", Se, u(C.value), 1)) : i("", !0),
              $.value && I.value ? (s(), n("p", Ne, u(I.value), 1)) : i("", !0)
            ]),
            e.$slots.actions ? (s(), n("div", je, [
              N(e.$slots, "actions", {}, void 0, !0)
            ])) : i("", !0)
          ])) : i("", !0),
          p.value === "tabs" && e.nav.length ? (s(), n("nav", ze, [
            (s(!0), n(_, null, S(e.nav, (t) => (s(), n("button", {
              key: t.path,
              type: "button",
              class: "tab inline-flex items-center gap-1.5",
              role: "tab",
              "aria-selected": h(t.path),
              onClick: (o) => m(t.path)
            }, [
              t.icon ? (s(), f(b(t.icon), {
                key: 0,
                size: 14
              })) : i("", !0),
              te(" " + u(t.label) + " ", 1),
              t.badge !== void 0 ? (s(), n("span", Ie, u(t.badge), 1)) : i("", !0)
            ], 8, Be))), 128))
          ])) : i("", !0),
          N(e.$slots, "default", {}, void 0, !0)
        ])
      ], 2)
    ], 8, le));
  }
}), De = /* @__PURE__ */ se(Le, [["__scopeId", "data-v-130c9265"]]);
export {
  De as default
};
//# sourceMappingURL=MiniAppLayout-DcMLR1CC.js.map
