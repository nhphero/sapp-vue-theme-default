import { defineComponent as R, inject as U, computed as d, ref as W, watch as L, onBeforeUnmount as D, onActivated as q, openBlock as n, createElementBlock as o, createElementVNode as r, normalizeClass as J, createBlock as g, resolveDynamicComponent as m, toDisplayString as c, createCommentVNode as l, Fragment as f, renderList as $, createVNode as K, unref as Q, withDirectives as X, vShow as Y, renderSlot as S, createTextVNode as Z, markRaw as N } from "vue";
import { LayoutGrid as M, ChevronDown as ee } from "lucide-vue-next";
import { _ as te } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const ae = ["data-variant"], ne = {
  key: 0,
  class: "mini-aside w-[220px] shrink-0 py-6 pr-6 border-r border-border-soft flex flex-col"
}, se = { class: "flex items-center gap-3 px-2 mb-4" }, oe = { class: "w-9 h-9 rounded-lg bg-primary-soft text-primary grid place-items-center shrink-0" }, ie = { class: "min-w-0" }, le = { class: "text-sm font-semibold leading-tight truncate" }, re = {
  key: 0,
  class: "text-xs text-faint truncate"
}, ce = { class: "flex flex-col gap-0.5" }, ue = ["aria-current", "onClick"], de = { class: "truncate" }, pe = {
  key: 1,
  class: "badge ml-auto"
}, ve = {
  key: 1,
  class: "mini-nav-group"
}, he = ["aria-expanded", "onClick"], ge = { class: "truncate" }, me = { class: "flex flex-col gap-0.5" }, fe = ["aria-current", "onClick"], be = { class: "truncate" }, _e = {
  key: 1,
  class: "badge ml-auto"
}, ye = {
  key: 0,
  class: "mt-auto pt-4"
}, ke = { class: "flex-1 min-w-0 py-6 flex flex-col" }, xe = {
  key: 0,
  class: "flex items-start justify-between gap-4 mb-5"
}, we = { class: "min-w-0" }, Ce = {
  key: 0,
  class: "text-xl font-semibold leading-tight truncate"
}, $e = {
  key: 1,
  class: "text-sm text-muted-foreground mt-0.5"
}, Se = {
  key: 0,
  class: "flex items-center gap-2 shrink-0"
}, Ne = {
  key: 1,
  class: "tabs mb-5",
  role: "tablist"
}, je = ["aria-selected", "onClick"], ze = {
  key: 1,
  class: "badge"
}, Be = /* @__PURE__ */ R({
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
  setup(O, { emit: V }) {
    const a = O, P = V, b = U("$superApp", null), j = d(
      () => typeof a.icon == "string" ? b?.getComponent?.(`ui.icon.${a.icon.toLowerCase()}`) || M : a.icon || M
    ), E = d(() => a.contained ? "page-container" : "w-full px-6"), _ = (e) => (e ?? "").split("/").filter(Boolean).join("/"), y = d(() => {
      const e = _(a.active);
      let s = null;
      for (const t of a.nav) {
        const i = _(t.path);
        (i === e || i !== "" && e.startsWith(`${i}/`)) && (s === null || i.length > s.length) && (s = i);
      }
      return s;
    }), v = (e) => y.value !== null && _(e) === y.value, h = (e) => {
      a.nav.find((s) => s.path === e)?.disabled || P("navigate", e);
    }, k = d(() => a.nav.find((e) => v(e.path))), G = d(() => {
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
    }), x = W(/* @__PURE__ */ new Set()), z = (e, s) => !x.value.has(e) || s.some((t) => v(t.path)), F = (e) => {
      const s = new Set(x.value);
      s.has(e) ? s.delete(e) : s.add(e), x.value = s;
    }, w = d(() => a.variant === "tabs" ? a.title : a.pageTitle ?? k.value?.label ?? a.title), B = d(() => a.variant === "tabs" ? a.subtitle : a.pageSubtitle), C = d(() => !w.value || a.pageTitle === "" ? !1 : a.variant === "shell" && a.pageTitle == null ? w.value !== k.value?.label : !0), u = b?.getModuleState?.("shell.nav", { moduleId: "", title: "", icon: null, items: [], active: "", navigate: null }), I = () => {
      if (u) {
        if (a.variant !== "shell") {
          u.items.length && Object.assign(u, { title: "", icon: null, items: [], active: "", navigate: null });
          return;
        }
        u.title = a.title ?? "", u.icon = N(j.value), u.items = a.nav.map((e) => ({
          label: e.label,
          path: e.path,
          badge: e.badge,
          group: e.group,
          disabled: e.disabled,
          icon: e.icon ? N(e.icon) : void 0,
          groupIcon: e.groupIcon ? N(e.groupIcon) : void 0
        })), u.active = y.value ?? "", u.navigate = h;
      }
    };
    L(() => [a.nav, a.active, a.variant, a.title, a.icon], I, { immediate: !0, deep: !0 });
    const p = b?.getModuleState?.("shell.page", { app: "", name: "" }), T = d(() => a.pageTitle || k.value?.label || a.title || ""), A = () => {
      p && (p.app = a.title ?? "", p.name = T.value);
    };
    return L(T, A, { immediate: !0 }), D(() => {
      p && p.app === (a.title ?? "") && Object.assign(p, { app: "", name: "" });
    }), q(() => {
      I(), A();
    }), D(() => {
      u && a.variant === "shell" && Object.assign(u, { title: "", icon: null, items: [], active: "", navigate: null });
    }), (e, s) => (n(), o("div", {
      class: "mini-layout flex flex-col h-full min-h-0 overflow-y-auto overflow-x-hidden bg-background",
      "data-variant": e.variant
    }, [
      r("div", {
        class: J([E.value, "flex flex-1 gap-8"])
      }, [
        e.variant === "sidebar" ? (n(), o("aside", ne, [
          r("div", se, [
            r("span", oe, [
              (n(), g(m(j.value), { size: 18 }))
            ]),
            r("div", ie, [
              r("div", le, c(e.title), 1),
              e.subtitle ? (n(), o("div", re, c(e.subtitle), 1)) : l("", !0)
            ])
          ]),
          r("nav", ce, [
            (n(!0), o(f, null, $(G.value, (t) => (n(), o(f, {
              key: t.group ?? t.item.path
            }, [
              t.group === null ? (n(), o("button", {
                key: 0,
                type: "button",
                class: "nav-item w-full text-left",
                "aria-current": v(t.item.path) ? "page" : void 0,
                onClick: (i) => h(t.item.path)
              }, [
                t.item.icon ? (n(), g(m(t.item.icon), {
                  key: 0,
                  size: 16
                })) : l("", !0),
                r("span", de, c(t.item.label), 1),
                t.item.badge !== void 0 ? (n(), o("span", pe, c(t.item.badge), 1)) : l("", !0)
              ], 8, ue)) : (n(), o("div", ve, [
                r("button", {
                  type: "button",
                  class: "mini-nav-group__head",
                  "aria-expanded": z(t.group, t.items),
                  onClick: (i) => F(t.group)
                }, [
                  r("span", ge, c(t.group), 1),
                  K(Q(ee), {
                    size: 14,
                    class: "mini-nav-group__chevron"
                  })
                ], 8, he),
                X(r("div", me, [
                  (n(!0), o(f, null, $(t.items, (i) => (n(), o("button", {
                    key: i.path,
                    type: "button",
                    class: "nav-item w-full text-left",
                    "aria-current": v(i.path) ? "page" : void 0,
                    onClick: (H) => h(i.path)
                  }, [
                    i.icon ? (n(), g(m(i.icon), {
                      key: 0,
                      size: 16
                    })) : l("", !0),
                    r("span", be, c(i.label), 1),
                    i.badge !== void 0 ? (n(), o("span", _e, c(i.badge), 1)) : l("", !0)
                  ], 8, fe))), 128))
                ], 512), [
                  [Y, z(t.group, t.items)]
                ])
              ]))
            ], 64))), 128))
          ]),
          e.$slots.footer ? (n(), o("div", ye, [
            S(e.$slots, "footer", {}, void 0, !0)
          ])) : l("", !0)
        ])) : l("", !0),
        r("main", ke, [
          C.value || e.$slots.actions ? (n(), o("div", xe, [
            r("div", we, [
              C.value ? (n(), o("h1", Ce, c(w.value), 1)) : l("", !0),
              C.value && B.value ? (n(), o("p", $e, c(B.value), 1)) : l("", !0)
            ]),
            e.$slots.actions ? (n(), o("div", Se, [
              S(e.$slots, "actions", {}, void 0, !0)
            ])) : l("", !0)
          ])) : l("", !0),
          e.variant === "tabs" && e.nav.length ? (n(), o("nav", Ne, [
            (n(!0), o(f, null, $(e.nav, (t) => (n(), o("button", {
              key: t.path,
              type: "button",
              class: "tab inline-flex items-center gap-1.5",
              role: "tab",
              "aria-selected": v(t.path),
              onClick: (i) => h(t.path)
            }, [
              t.icon ? (n(), g(m(t.icon), {
                key: 0,
                size: 14
              })) : l("", !0),
              Z(" " + c(t.label) + " ", 1),
              t.badge !== void 0 ? (n(), o("span", ze, c(t.badge), 1)) : l("", !0)
            ], 8, je))), 128))
          ])) : l("", !0),
          S(e.$slots, "default", {}, void 0, !0)
        ])
      ], 2)
    ], 8, ae));
  }
}), Le = /* @__PURE__ */ te(Be, [["__scopeId", "data-v-1b1ba4c3"]]);
export {
  Le as default
};
//# sourceMappingURL=MiniAppLayout-Cmd1kJV6.js.map
