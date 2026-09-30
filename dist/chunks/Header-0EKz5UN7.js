import { defineComponent as ce, inject as de, computed as u, ref as g, watch as X, onMounted as ue, openBlock as a, createElementBlock as r, createElementVNode as s, unref as l, Fragment as L, normalizeClass as N, toDisplayString as i, createCommentVNode as b, createStaticVNode as pe, createBlock as y, resolveDynamicComponent as x, withCtx as w, createTextVNode as F, renderList as T, withKeys as ve, withModifiers as ge, createVNode as p } from "vue";
import { useRouter as me, useRoute as he } from "vue-router";
import { LayoutGrid as _, Database as fe, AppWindow as be, Terminal as ye, Cpu as ke, Box as xe, Zap as we, Layers as _e, Globe as $e, Shield as Ce, Star as Ae, ChevronDown as B, Check as Se, User as Le, Palette as ze, LogOut as Me } from "lucide-vue-next";
import { _ as Y } from "./LocaleFlag.vue_vue_type_script_setup_true_lang-D2eeZNym.js";
import { _ as q } from "./UserAvatar.vue_vue_type_script_setup_true_lang-AXBFwsc7.js";
const Ve = { class: "w-full bg-card sticky top-0 z-[100] transition-colors duration-300" }, Ie = { class: "page-container h-(--header-h) flex items-center justify-between gap-4" }, De = { class: "flex items-center gap-3 min-w-0" }, Ee = ["title"], Ne = ["src", "alt"], Ue = ["src", "alt"], je = {
  key: 2,
  class: "hidden lg:block text-[10px] font-bold uppercase tracking-[0.2em] text-faint border-l border-border-soft pl-3"
}, Fe = ["title", "aria-label"], Te = {
  class: "text-sm font-semibold text-foreground whitespace-nowrap",
  "data-testid": "current-app"
}, Be = { class: "w-[720px] max-w-[calc(100vw-32px)]" }, Oe = {
  class: "tabs px-2",
  role: "tablist"
}, Pe = ["aria-selected"], Re = {
  key: 0,
  class: "text-faint font-normal"
}, We = ["aria-selected"], Ge = { class: "text-faint font-normal" }, Ke = {
  key: 0,
  class: "px-3 py-6 text-sm text-faint text-center"
}, He = {
  key: 1,
  class: "px-2 pt-2 pb-4 grid gap-1 sm:grid-cols-2 lg:grid-cols-3"
}, Je = ["onClick", "onKeydown", "aria-current"], Ze = { class: "min-w-0 flex-1" }, Qe = { class: "block text-sm font-semibold truncate group-hover:text-primary transition-colors" }, Xe = { class: "block text-xs text-muted-foreground truncate" }, Ye = ["aria-pressed", "aria-label", "onClick"], qe = { class: "flex items-center gap-2" }, et = { class: "hidden md:flex items-center gap-1 flex-nowrap shrink-0" }, tt = ["title", "aria-label"], st = { class: "w-52" }, ot = { class: "pop-head" }, at = ["aria-selected", "onClick"], nt = { class: "flex items-center gap-2.5" }, lt = {
  type: "button",
  class: "h-9 flex items-center gap-2 pl-2.5 pr-1.5 rounded-lg hover:bg-muted cursor-pointer transition-colors outline-none",
  "data-testid": "user-menu"
}, it = { class: "hidden lg:block text-sm font-semibold text-foreground whitespace-nowrap" }, rt = { class: "w-60" }, ct = { class: "flex items-center gap-3 px-2 py-2.5 mb-1 border-b border-border-soft" }, dt = { class: "min-w-0" }, ut = { class: "text-sm font-semibold text-foreground truncate" }, pt = { class: "text-xs text-faint truncate" }, vt = {
  key: 0,
  class: "page-container tabs h-10 items-end",
  role: "tablist",
  "data-testid": "app-nav"
}, gt = ["aria-selected", "onClick"], mt = {
  key: 1,
  class: "badge"
}, wt = /* @__PURE__ */ ce({
  __name: "Header",
  setup(ht) {
    const d = de("$superApp"), z = d, $ = me(), O = he(), C = z.$appState, P = z.$themeConfig, v = u(() => z.$config?.branding ?? null), R = u(() => P?.state?.mode === "dark" || P?.state?.mode === "system" && window.matchMedia?.("(prefers-color-scheme: dark)").matches), m = z.$i18n, U = g(!1), ee = { vi: "Tiếng Việt", en: "English", ja: "日本語", ko: "한국어", zh: "中文", fr: "Français", de: "Deutsch" }, te = (t) => {
      m?.setLocale(t), U.value = !1;
    }, M = u(() => {
      const t = J.value.map((e) => ({ key: `app:${e.id}`, id: e.id, label: e.label, detail: e.detail, icon: e.icon, run: () => re(e.path) }));
      for (const e of d?.skills ?? []) {
        if (e.category === "Apps" || t.some((n) => n.key === `app:${e.id.split(".")[0]}`)) continue;
        const o = typeof e.icon == "string" ? d.getComponent?.(`ui.icon.${e.icon.toLowerCase()}`) || K(e.icon) : e.icon || _;
        t.push({ key: `skill:${e.id}`, id: e.id, label: e.name, detail: e.description || e.category, icon: o, run: () => {
          A.value = !1, e.handler();
        } });
      }
      return t;
    }), W = u(() => d?.getModuleState?.("home", { favorites: [] })), V = u(() => W.value?.favorites ?? []), j = (t) => V.value.includes(t), se = (t) => W.value?.toggleFavorite?.(t), h = g("all"), G = (t) => {
      const e = (t || "").trim().toLowerCase(), o = e ? M.value : h.value === "favorites" ? M.value.filter((n) => j(n.key)) : M.value;
      return e ? o.filter((n) => `${n.label} ${n.detail || ""} ${n.id}`.toLowerCase().includes(e)) : o;
    }, A = g(!1);
    X(A, (t) => {
      t && (h.value = V.value.length ? "favorites" : "all");
    });
    const I = g(!1);
    g(!1);
    const c = g(null), k = g([]), D = g([]), oe = {
      Shield: Ce,
      Globe: $e,
      Layers: _e,
      LayoutGrid: _,
      Zap: we,
      Box: xe,
      Cpu: ke,
      Terminal: ye,
      AppWindow: be,
      Database: fe
    }, K = (t) => t ? oe[t] || _ : _, H = () => {
      typeof d?.getRegisteredApps == "function" && (D.value = d.getRegisteredApps());
    }, J = u(() => (D.value.length > 0 ? D.value : [
      { id: "workspace", name: "Workspace Hub", url: "http://localhost:4409", icon: "Globe", description: "Logic Orchestration", isEnabled: !0 },
      { id: "admin", name: "Admin Management", url: "http://localhost:4403", icon: "Shield", description: "Platform Governance", isEnabled: !0 }
    ]).filter((e) => e.isEnabled !== !1).filter((e) => e.id === "admin" ? c.value?.role === "ADMIN" || c.value?.role === "SUPERADMIN" : !0).map((e) => ({
      id: e.id,
      label: e.name,
      path: e.id === "admin" ? "/app/admin/apps" : `/app/${e.id}`,
      icon: K(e.icon),
      detail: e.description || "Micro-Frontend App"
    }))), f = d.getModuleState("shell.nav", { moduleId: "", title: "", icon: null, items: [], active: "", navigate: null }), Z = u(() => O.path.startsWith("/app/")), S = u(() => {
      let t = Z.value ? C.current_app : null;
      t === "expose" && (t = "workspace");
      const e = t && J.value.find((o) => o.id === t);
      return e || (t && f.title ? { id: t, label: f.title, icon: f.icon || _ } : { id: "default", label: m?.t("shell.apps") ?? "Apps", icon: _ });
    }), ae = u(() => Z.value && f.items.length > 0), E = u({
      get: () => C.current_workspace,
      set: (t) => {
        C.current_workspace = t;
      }
    });
    u(() => k.value.find((t) => String(t.id) === String(E.value)) || k.value[0]), X(() => O.params.moduleId, (t) => {
      const e = Array.isArray(t) ? t[0] : t;
      e && C.current_app !== e && (C.current_app = e);
    }, { immediate: !0 });
    const ne = async () => {
      try {
        c.value = await d.doAction("auth.me");
      } catch {
        try {
          c.value = JSON.parse(localStorage.getItem("user") || "null");
        } catch {
        }
      }
    };
    d.on?.("auth:profile-updated", (t) => {
      c.value = { ...c.value || {}, ...t };
    });
    const le = async () => {
      try {
        const t = await d.doAction("workspace.list");
        k.value = t || [];
        const e = k.value.find((o) => String(o.id) === String(E.value));
        (!E.value || !e) && k.value.length > 0 && (E.value = String(k.value[0].id));
      } catch {
      }
    }, ie = async () => {
      try {
        d.doAction("auth.logout"), localStorage.removeItem("accessToken"), $.push("/login").catch(() => {
          window.location.href = "/login";
        });
      } catch {
        localStorage.removeItem("accessToken"), window.location.href = "/login";
      }
    }, re = (t) => {
      A.value = !1, $.push(t);
    };
    return ue(() => {
      ne(), le(), H(), typeof d?.on == "function" && d.on("apps:updated", (t) => {
        Array.isArray(t) ? D.value = t : H();
      });
    }), (t, e) => (a(), r("header", Ve, [
      s("div", Ie, [
        s("div", De, [
          s("div", {
            class: "flex items-center gap-3 cursor-pointer group/logo",
            "data-testid": "brand",
            title: v.value?.name,
            onClick: e[0] || (e[0] = (o) => l($).push(v.value?.homePath || "/"))
          }, [
            v.value?.logo ? (a(), r(L, { key: 0 }, [
              R.value && v.value.logoDark ? (a(), r("img", {
                key: 0,
                src: v.value.logoDark,
                alt: v.value.name,
                class: "h-7 w-auto max-w-[200px] object-contain"
              }, null, 8, Ne)) : (a(), r("span", {
                key: 1,
                class: N(["inline-flex items-center rounded-md", R.value && "bg-white/95 px-2 py-1"])
              }, [
                s("img", {
                  src: v.value.logo,
                  alt: v.value.name,
                  class: "h-7 w-auto max-w-[200px] object-contain"
                }, null, 8, Ue)
              ], 2)),
              v.value.tagline ? (a(), r("span", je, i(v.value.tagline), 1)) : b("", !0)
            ], 64)) : (a(), r(L, { key: 1 }, [
              e[8] || (e[8] = pe('<div class="relative"><div class="w-9 h-9 bg-primary rounded-xl flex items-center justify-center relative z-10 transition-transform group-hover/logo:scale-110 shadow-xl border border-border-soft"><span class="text-primary-foreground font-black text-xs tracking-tighter">MP</span></div></div><div class="flex flex-col text-left"><span class="text-[11px] font-black uppercase tracking-[0.4em] text-foreground group-hover/logo:text-primary transition-colors leading-none mb-1">Antigravity</span><span class="text-[9px] font-black uppercase tracking-[0.2em] text-faint">Core OS v5</span></div>', 2))
            ], 64))
          ], 8, Ee),
          e[9] || (e[9] = s("div", { class: "h-6 w-px bg-border-soft" }, null, -1)),
          (a(), y(x(t.$c("ui.dropdown")), {
            modelValue: A.value,
            "onUpdate:modelValue": e[3] || (e[3] = (o) => A.value = o),
            search: "",
            "search-placeholder": t.$t("shell.searchApps")
          }, {
            trigger: w(() => [
              s("button", {
                type: "button",
                class: "h-9 pl-1.5 pr-2 rounded-lg flex items-center gap-2 hover:bg-muted transition-colors outline-none group/app",
                title: t.$t("shell.apps"),
                "aria-label": t.$t("shell.apps"),
                "data-testid": "apps-switch"
              }, [
                s("span", {
                  class: N(["w-7 h-7 rounded-md grid place-items-center shrink-0 transition-colors", S.value.id === "default" ? "bg-muted text-muted-foreground" : "bg-primary-soft text-primary"])
                }, [
                  (a(), y(x(S.value.icon), { size: 16 }))
                ], 2),
                s("span", Te, i(S.value.label), 1),
                p(l(B), {
                  size: 14,
                  class: "text-faint group-hover/app:text-foreground transition-colors"
                })
              ], 8, Fe)
            ]),
            content: w(({ query: o }) => [
              s("div", Be, [
                s("div", Oe, [
                  s("button", {
                    type: "button",
                    class: "tab inline-flex items-center gap-1.5",
                    role: "tab",
                    "aria-selected": h.value === "favorites",
                    onClick: e[1] || (e[1] = (n) => h.value = "favorites")
                  }, [
                    F(i(t.$t("shell.favorites")), 1),
                    V.value.length ? (a(), r("span", Re, i(V.value.length), 1)) : b("", !0)
                  ], 8, Pe),
                  s("button", {
                    type: "button",
                    class: "tab inline-flex items-center gap-1.5",
                    role: "tab",
                    "aria-selected": h.value === "all",
                    onClick: e[2] || (e[2] = (n) => h.value = "all")
                  }, [
                    F(i(t.$t("shell.all")), 1),
                    s("span", Ge, i(M.value.length), 1)
                  ], 8, We)
                ]),
                G(o).length ? (a(), r("div", He, [
                  (a(!0), r(L, null, T(G(o), (n) => (a(), r("div", {
                    key: n.key,
                    role: "button",
                    tabindex: "0",
                    onClick: (Q) => n.run(),
                    onKeydown: ve((Q) => n.run(), ["enter"]),
                    class: "group relative flex items-center gap-3 rounded-lg px-2.5 py-2 text-left hover:bg-muted transition-colors min-w-0 cursor-pointer",
                    "aria-current": n.id === S.value.id ? "true" : void 0
                  }, [
                    s("span", {
                      class: N(["w-8 h-8 rounded-lg grid place-items-center shrink-0 transition-colors group-hover:bg-primary-soft group-hover:text-primary", n.id === S.value.id ? "bg-primary-soft text-primary" : "bg-muted text-muted-foreground"])
                    }, [
                      (a(), y(x(n.icon), {
                        size: 16,
                        "stroke-width": "1.75"
                      }))
                    ], 2),
                    s("span", Ze, [
                      s("span", Qe, i(n.label), 1),
                      s("span", Xe, i(n.detail), 1)
                    ]),
                    s("button", {
                      type: "button",
                      class: "icon-btn shrink-0 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 aria-pressed:opacity-100",
                      style: { width: "28px", height: "28px" },
                      "aria-pressed": j(n.key),
                      "aria-label": t.$t("shell.toggleFavorite"),
                      "data-testid": "tile-star",
                      onClick: ge((Q) => se(n.key), ["stop"])
                    }, [
                      p(l(Ae), {
                        size: 14,
                        class: N(j(n.key) ? "fill-warning text-warning" : "text-faint")
                      }, null, 8, ["class"])
                    ], 8, Ye)
                  ], 40, Je))), 128))
                ])) : (a(), r("div", Ke, i(h.value === "favorites" && !o ? t.$t("shell.favoritesEmpty") : t.$t("common.empty")), 1))
              ])
            ]),
            _: 1
          }, 8, ["modelValue", "search-placeholder"]))
        ]),
        s("div", qe, [
          s("div", et, [
            l(m) ? (a(), y(x(t.$c("ui.dropdown")), {
              key: 0,
              modelValue: U.value,
              "onUpdate:modelValue": e[4] || (e[4] = (o) => U.value = o),
              align: "right"
            }, {
              trigger: w(() => [
                s("button", {
                  type: "button",
                  class: "h-9 px-2 rounded-lg flex items-center gap-1 whitespace-nowrap shrink-0 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors outline-none",
                  title: t.$t("shell.language"),
                  "aria-label": t.$t("shell.language"),
                  "data-testid": "lang-switch"
                }, [
                  p(Y, {
                    locale: l(m).locale,
                    size: 20
                  }, null, 8, ["locale"]),
                  p(l(B), {
                    size: 13,
                    class: "text-faint"
                  })
                ], 8, tt)
              ]),
              content: w(() => [
                s("div", st, [
                  s("div", ot, i(t.$t("shell.language")), 1),
                  (a(!0), r(L, null, T(l(m).availableLocales, (o) => (a(), r("button", {
                    key: o,
                    type: "button",
                    class: "pop-item justify-between whitespace-nowrap",
                    "aria-selected": l(m).locale === o,
                    onClick: (n) => te(o)
                  }, [
                    s("span", nt, [
                      p(Y, {
                        locale: o,
                        size: 22
                      }, null, 8, ["locale"]),
                      s("span", null, i(ee[o] ?? o), 1)
                    ]),
                    l(m).locale === o ? (a(), y(l(Se), {
                      key: 0,
                      size: 14,
                      class: "text-primary"
                    })) : b("", !0)
                  ], 8, at))), 128))
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])) : b("", !0)
          ]),
          e[11] || (e[11] = s("div", { class: "h-6 w-px bg-border-soft mx-1 hidden md:block" }, null, -1)),
          (a(), y(x(t.$c("ui.dropdown")), {
            modelValue: I.value,
            "onUpdate:modelValue": e[7] || (e[7] = (o) => I.value = o),
            align: "right"
          }, {
            trigger: w(() => [
              s("button", lt, [
                s("span", it, i(c.value?.username || "User"), 1),
                p(q, {
                  src: c.value?.avatar,
                  name: c.value?.username || "User",
                  size: 28,
                  rounded: "lg"
                }, null, 8, ["src", "name"]),
                p(l(B), {
                  size: 13,
                  class: "text-faint"
                })
              ])
            ]),
            content: w(() => [
              s("div", rt, [
                s("div", ct, [
                  p(q, {
                    src: c.value?.avatar,
                    name: c.value?.username || "User",
                    size: 36,
                    rounded: "lg"
                  }, null, 8, ["src", "name"]),
                  s("div", dt, [
                    s("div", ut, i(c.value?.username), 1),
                    s("div", pt, i(c.value?.email || c.value?.role), 1)
                  ])
                ]),
                s("button", {
                  type: "button",
                  class: "pop-item",
                  "data-testid": "menu-profile",
                  onClick: e[5] || (e[5] = (o) => {
                    l($).push("/account/profile"), I.value = !1;
                  })
                }, [
                  p(l(Le), {
                    size: 15,
                    class: "text-muted-foreground"
                  }),
                  s("span", null, i(t.$t("shell.profile")), 1)
                ]),
                s("button", {
                  type: "button",
                  class: "pop-item",
                  onClick: e[6] || (e[6] = (o) => {
                    l($).push("/system/theme"), I.value = !1;
                  })
                }, [
                  p(l(ze), {
                    size: 15,
                    class: "text-muted-foreground"
                  }),
                  s("span", null, i(t.$t("system.themeStudio", { default: "Theme Studio" })), 1)
                ]),
                e[10] || (e[10] = s("div", { class: "pop-sep" }, null, -1)),
                s("button", {
                  type: "button",
                  class: "pop-item danger",
                  onClick: ie
                }, [
                  p(l(Me), { size: 15 }),
                  s("span", null, i(t.$t("shell.logout")), 1)
                ])
              ])
            ]),
            _: 1
          }, 8, ["modelValue"]))
        ])
      ]),
      ae.value ? (a(), r("nav", vt, [
        (a(!0), r(L, null, T(l(f).items, (o) => (a(), r("button", {
          key: o.path,
          type: "button",
          class: "tab inline-flex items-center gap-1.5",
          role: "tab",
          "aria-selected": l(f).active === o.path,
          onClick: (n) => l(f).navigate?.(o.path)
        }, [
          o.icon ? (a(), y(x(o.icon), {
            key: 0,
            size: 14
          })) : b("", !0),
          F(" " + i(o.label) + " ", 1),
          o.badge !== void 0 ? (a(), r("span", mt, i(o.badge), 1)) : b("", !0)
        ], 8, gt))), 128))
      ])) : b("", !0)
    ]));
  }
});
export {
  wt as default
};
//# sourceMappingURL=Header-0EKz5UN7.js.map
