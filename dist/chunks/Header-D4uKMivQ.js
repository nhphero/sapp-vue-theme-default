import { defineComponent as Pe, computed as h, ref as _, inject as Ke, watch as F, onMounted as Fe, openBlock as s, createElementBlock as o, createElementVNode as n, normalizeClass as I, createBlock as p, resolveDynamicComponent as v, withCtx as x, toDisplayString as d, createCommentVNode as c, Fragment as g, renderList as w, createTextVNode as Q, withKeys as Be, withModifiers as X, createVNode as b, unref as i, createStaticVNode as He, Teleport as Ge } from "vue";
import { appIcon as Je } from "../index.js";
import { useRouter as We, useRoute as Ye } from "vue-router";
import { LayoutGrid as ue, Star as pe, ChevronDown as B, Check as ve, User as Qe, Palette as Xe, LogOut as Ze, PanelLeftOpen as qe, PanelLeftClose as et } from "lucide-vue-next";
import { SUPERAPP_EVENTS as tt } from "@nhphero/vue-sapp/contracts";
import { _ as he } from "./LocaleFlag.vue_vue_type_script_setup_true_lang-D2eeZNym.js";
import { _ as me } from "./UserAvatar.vue_vue_type_script_setup_true_lang-AXBFwsc7.js";
import { _ as at } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const st = { class: "shell-head w-full sticky top-0 z-[100]" }, nt = { class: "shell-header w-full transition-colors duration-300" }, ot = {
  key: 0,
  class: "flex items-center min-w-0 justify-self-start"
}, lt = { class: "flex items-center shrink-0 min-w-0" }, it = ["title", "aria-label"], rt = {
  class: "text-sm font-semibold text-foreground whitespace-nowrap",
  "data-testid": "current-app"
}, dt = ["title"], ct = { class: "apps-menu" }, ut = { class: "apps-menu__all" }, pt = {
  key: 0,
  class: "px-3 py-6 text-sm text-faint text-center"
}, vt = ["data-testid"], ht = {
  key: 0,
  class: "pop-head flex items-center gap-1.5"
}, mt = { class: "text-faint font-normal" }, gt = { class: "apps-list" }, ft = ["aria-current", "onClick", "onKeydown"], _t = { class: "apps-item__icon" }, bt = { class: "apps-item__text" }, yt = { class: "apps-item__name" }, kt = { class: "truncate" }, wt = ["title"], xt = ["title"], $t = ["aria-pressed", "aria-label", "onClick"], St = { class: "flex items-center justify-center min-w-0" }, At = ["title"], Ct = ["src", "alt"], Lt = ["src", "alt"], zt = { class: "flex items-center gap-2 justify-self-end" }, Et = {
  key: 0,
  class: "flex items-center gap-1",
  "data-testid": "app-band-end"
}, Vt = { class: "hidden md:flex items-center gap-1 flex-nowrap shrink-0" }, Dt = ["title", "aria-label"], Mt = { class: "w-52" }, Ot = { class: "pop-head" }, Nt = ["aria-selected", "onClick"], It = { class: "flex items-center gap-2.5" }, Ut = {
  type: "button",
  class: "h-9 flex items-center gap-2 pl-2.5 pr-1.5 rounded-lg hdr-btn cursor-pointer transition-colors outline-none",
  "data-testid": "user-menu"
}, Rt = { class: "hidden lg:block text-sm font-semibold hdr-ink whitespace-nowrap" }, Tt = { class: "w-60" }, jt = { class: "flex items-center gap-3 px-2 py-2.5 mb-1 border-b border-border-soft" }, Pt = { class: "min-w-0" }, Kt = { class: "text-sm font-semibold text-foreground truncate" }, Ft = { class: "text-xs text-faint truncate" }, Bt = {
  key: 0,
  class: "app-band"
}, Ht = { class: "page-container flex items-stretch gap-3" }, Gt = {
  key: 0,
  class: "tabs tabs--band min-w-0 overflow-x-auto no-scrollbar",
  role: "tablist",
  "data-testid": "app-nav"
}, Jt = ["aria-selected", "onClick"], Wt = {
  key: 1,
  class: "badge"
}, Yt = ["aria-selected", "data-testid"], Qt = {
  key: 1,
  class: "band-group__current"
}, Xt = {
  class: "min-w-56 flex flex-col",
  role: "menu"
}, Zt = ["aria-selected", "disabled", "aria-disabled", "onClick"], qt = { class: "flex-1" }, ea = {
  key: 1,
  class: "app-band__end",
  "data-testid": "app-band-end"
}, ta = ["aria-label"], aa = { class: "side-rail__apps" }, sa = ["title", "aria-current", "onClick"], na = { class: "side-app__icon" }, oa = { class: "side-app__label" }, la = ["aria-pressed", "title"], ia = {
  key: 0,
  class: "side-panel"
}, ra = {
  class: "side-panel__head",
  "data-testid": "current-app"
}, da = { class: "side-panel__title" }, ca = ["title"], ua = {
  class: "side-nav",
  "data-testid": "app-nav"
}, pa = ["aria-current", "onClick"], va = { class: "side-label" }, ha = {
  key: 1,
  class: "badge"
}, ma = ["data-testid"], ga = { class: "nav-group" }, fa = ["disabled", "aria-disabled", "aria-current", "onClick"], _a = { class: "side-label" }, ge = "sapp:sidebar-collapsed", fe = "sapp:app-last-used", _e = "sapp:recent-apps", ba = /* @__PURE__ */ Pe({
  __name: "Header",
  props: {
    layout: { default: "band" }
  },
  setup(be) {
    const ye = be, E = h(() => ye.layout === "sidebar"), $ = _((() => {
      try {
        return localStorage.getItem(ge) === "true";
      } catch {
        return !1;
      }
    })()), ke = () => {
      $.value = !$.value;
      try {
        localStorage.setItem(ge, String($.value));
      } catch {
      }
    }, u = Ke("$superApp"), V = u, D = We(), Z = Ye(), M = V.$appState, H = V.$themeConfig, S = h(() => V.$config?.branding ?? null), we = h(() => H?.state?.mode === "dark" || H?.state?.mode === "system" && window.matchMedia?.("(prefers-color-scheme: dark)").matches), xe = ["brand", "gradient", "dark"], q = h(() => we.value || xe.includes(H?.state?.header)), A = V.$i18n, G = _(!1), $e = { vi: "Tiếng Việt", en: "English", ja: "日本語", ko: "한국어", zh: "中文", fr: "Français", de: "Deutsch" }, Se = (e) => {
      A?.setLocale(e), G.value = !1;
    }, Ae = h(
      () => se.value.map((e) => ({ key: `app:${e.id}`, id: e.id, label: e.label, detail: e.detail, icon: e.icon, run: () => je(e.path) }))
    ), ee = h(() => u?.getModuleState?.("home", { favorites: [] })), Ce = h(() => ee.value?.favorites ?? []), O = (e) => Ce.value.includes(e), Le = (e) => ee.value?.toggleFavorite?.(e), J = (e) => {
      const a = (e || "").trim().toLowerCase(), t = (y) => !a || `${y.label} ${y.detail || ""} ${y.id}`.toLowerCase().includes(a), r = [...Ae.value.filter(t)].sort((y, Y) => {
        const de = Number(O(Y.key)) - Number(O(y.key));
        if (de !== 0) return de;
        const ce = (C.value[Y.id] ?? 0) - (C.value[y.id] ?? 0);
        return ce !== 0 ? ce : String(y.label).localeCompare(String(Y.label));
      });
      return r.length ? [{ key: "apps", label: "", tiles: r }] : [];
    }, C = _((() => {
      try {
        const e = JSON.parse(localStorage.getItem(fe) || "null");
        if (e && typeof e == "object" && !Array.isArray(e))
          return Object.fromEntries(Object.entries(e).filter(([, l]) => typeof l == "number"));
        const a = JSON.parse(localStorage.getItem(_e) || "[]"), t = Date.now();
        return Array.isArray(a) ? Object.fromEntries(a.filter((l) => typeof l == "string").map((l, r) => [l, t - r * 1e3])) : {};
      } catch {
        return {};
      }
    })()), ze = (e) => {
      C.value = { ...C.value, [e]: Date.now() };
      try {
        localStorage.setItem(fe, JSON.stringify(C.value)), localStorage.removeItem(_e);
      } catch {
      }
    }, te = (e) => {
      const a = C.value[e];
      return a ? V.$f?.formatRelative?.(new Date(a).toISOString()) ?? new Date(a).toLocaleString() : "";
    }, U = _(!1), Ee = (e) => {
      U.value = e;
    }, R = _(!1);
    _(!1);
    const f = _(null), L = _([]), T = _([]), Ve = (e) => Je(e), ae = () => {
      typeof u?.getRegisteredApps == "function" && (T.value = u.getRegisteredApps());
    }, De = ["superadmin", "admin"], Me = h(() => u?.$policy?.can?.("role", De) ?? !1), se = h(() => (T.value.length > 0 ? T.value : [
      { id: "workspace", name: "Workspace Hub", url: "http://localhost:4409", icon: "Globe", description: "Logic Orchestration", isEnabled: !0 },
      { id: "admin", name: "Admin Management", url: "http://localhost:4403", icon: "Shield", description: "Platform Governance", isEnabled: !0 }
    ]).filter((a) => a.isEnabled !== !1).filter((a) => (a.code ?? a.id) !== "admin" || Me.value).map((a) => ({
      id: a.id,
      label: a.name,
      // Routes follow the slug (changeable); the id stays the key.
      path: typeof u.appPath == "function" ? u.appPath(a.id, (a.code ?? a.id) === "admin" ? "apps" : "") : `/app/${a.slug || a.id}`,
      icon: Ve(a.icon),
      detail: a.description || "Micro-Frontend App"
    }))), j = u.getModuleState("shell.band", { end: [] }), m = u.getModuleState("shell.nav", { moduleId: "", title: "", icon: null, items: [], active: "", navigate: null }), ne = h(() => Z.path.startsWith("/app/")), k = h(() => {
      let e = ne.value ? M.current_app : null;
      e === "expose" && (e = "workspace");
      const a = e && se.value.find((t) => t.id === e);
      return a || (e && m.title ? { id: e, label: m.title, icon: m.icon || ue } : { id: "default", label: A?.t("shell.apps") ?? "Apps", icon: ue });
    }), oe = h(() => ne.value && m.items.length > 0), Oe = h(() => J("")[0]?.tiles ?? []);
    F(() => k.value.id, (e) => {
      e && e !== "default" && ze(e);
    }, { immediate: !0 });
    const le = async (e) => {
      if (!e || e === "default" || typeof u.loadAppManifest != "function") return null;
      const a = await u.loadAppManifest(e);
      if (!a) return null;
      const t = String(a.version ?? "dev");
      return u.getRegisteredApps?.().find((r) => r.id === e)?.channel === "stable" ? { label: "stable", title: `stable · ${t}` } : { label: t, title: t };
    }, z = _(""), P = _("");
    F(() => [k.value.id, k.value.version], async ([e]) => {
      z.value = "", P.value = "";
      const a = await le(e);
      k.value.id !== e || !a || (z.value = a.label, P.value = a.title);
    }, { immediate: !0 });
    const N = _({}), Ne = () => {
      for (const e of Ie()) {
        const a = `${e.id}@${e.version ?? ""}`;
        ie.has(a) || (ie.add(a), le(e.id).then((t) => {
          t && (N.value = { ...N.value, [e.id]: t });
        }));
      }
    }, ie = /* @__PURE__ */ new Set(), Ie = () => typeof u?.getRegisteredApps == "function" ? u.getRegisteredApps() : [];
    F(U, (e) => {
      e && Ne();
    });
    const re = h(() => {
      const e = [];
      for (const a of m.items) {
        if (!a.group) {
          e.push({ group: null, item: a });
          continue;
        }
        const t = e.find((l) => l.group === a.group);
        t ? (t.items.push(a), t.icon ??= a.groupIcon) : e.push({ group: a.group, icon: a.groupIcon, items: [a] });
      }
      return e;
    }), W = (e) => e.find((a) => m.active === a.path) ?? null, K = h({
      get: () => M.current_workspace,
      set: (e) => {
        M.current_workspace = e;
      }
    });
    h(() => L.value.find((e) => String(e.id) === String(K.value)) || L.value[0]), F(() => Z.params.moduleId, (e) => {
      const a = Array.isArray(e) ? e[0] : e, t = a && (u.findAppByRoute?.(a)?.id ?? a);
      t && M.current_app !== t && (M.current_app = t);
    }, { immediate: !0 });
    const Ue = async () => {
      try {
        f.value = await u.doAction("auth.me");
      } catch {
        try {
          f.value = JSON.parse(localStorage.getItem("user") || "null");
        } catch {
        }
      }
    };
    u.on?.("auth:profile-updated", (e) => {
      f.value = { ...f.value || {}, ...e };
    });
    const Re = async () => {
      try {
        const e = await u.doAction("workspace.list");
        L.value = e || [];
        const a = L.value.find((t) => String(t.id) === String(K.value));
        (!K.value || !a) && L.value.length > 0 && (K.value = String(L.value[0].id));
      } catch {
      }
    }, Te = async () => {
      u.emit?.(tt.AUTH_LOGOUT);
      try {
        u.doAction("auth.logout"), localStorage.removeItem("accessToken"), D.push("/login").catch(() => {
          window.location.href = "/login";
        });
      } catch {
        localStorage.removeItem("accessToken"), window.location.href = "/login";
      }
    }, je = (e) => {
      U.value = !1, D.push(e);
    };
    return Fe(() => {
      Ue(), Re(), ae(), typeof u?.on == "function" && u.on("apps:updated", (e) => {
        Array.isArray(e) ? T.value = e : ae();
      });
    }), (e, a) => (s(), o("div", st, [
      n("header", nt, [
        n("div", {
          class: I(["shell-header__row shell-header__wide", E.value && "is-sidebar"])
        }, [
          E.value ? c("", !0) : (s(), o("div", ot, [
            n("div", lt, [
              (s(), p(v(e.$c("ui.dropdown")), {
                class: "app-switch",
                modelValue: U.value,
                "onUpdate:modelValue": a[0] || (a[0] = (t) => Ee(t)),
                search: "",
                "search-placeholder": e.$t("shell.searchApps")
              }, {
                trigger: x(() => [
                  n("button", {
                    type: "button",
                    class: "app-chip flex items-center gap-2 transition-colors outline-none group/app",
                    title: e.$t("shell.apps"),
                    "aria-label": e.$t("shell.apps"),
                    "data-testid": "apps-switch"
                  }, [
                    n("span", {
                      class: I(["w-7 h-7 rounded-md grid place-items-center shrink-0 transition-colors", k.value.id === "default" ? "bg-muted text-muted-foreground" : "bg-primary-soft text-primary"])
                    }, [
                      (s(), p(v(k.value.icon), { size: 16 }))
                    ], 2),
                    n("span", rt, d(k.value.label), 1),
                    z.value ? (s(), o("span", {
                      key: 0,
                      class: "app-version",
                      "data-testid": "current-app-version",
                      title: P.value
                    }, d(z.value), 9, dt)) : c("", !0),
                    b(i(B), {
                      size: 14,
                      class: "text-faint group-hover/app:text-foreground transition-colors"
                    })
                  ], 8, it)
                ]),
                content: x(({ query: t }) => [
                  n("div", ct, [
                    n("div", ut, [
                      J(t).length ? c("", !0) : (s(), o("div", pt, d(e.$t("common.empty")), 1)),
                      (s(!0), o(g, null, w(J(t), (l) => (s(), o("section", {
                        key: l.key,
                        class: "pt-1 last:pb-3",
                        "data-testid": `apps-section-${l.key}`
                      }, [
                        l.label ? (s(), o("div", ht, [
                          Q(d(l.label), 1),
                          n("span", mt, d(l.tiles.length), 1)
                        ])) : c("", !0),
                        n("div", gt, [
                          (s(!0), o(g, null, w(l.tiles, (r) => (s(), o("div", {
                            key: r.key,
                            role: "button",
                            tabindex: "0",
                            class: "apps-item group",
                            "aria-current": r.id === k.value.id ? "true" : void 0,
                            onClick: (y) => r.run(),
                            onKeydown: Be((y) => r.run(), ["enter"])
                          }, [
                            n("span", _t, [
                              (s(), p(v(r.icon), {
                                size: 16,
                                "stroke-width": "1.75"
                              }))
                            ]),
                            n("span", bt, [
                              n("span", yt, [
                                n("span", kt, d(r.label), 1),
                                N.value[r.id] ? (s(), o("span", {
                                  key: 0,
                                  class: "tile-version",
                                  title: N.value[r.id].title,
                                  "data-testid": "tile-version"
                                }, d(N.value[r.id].label), 9, wt)) : c("", !0)
                              ])
                            ]),
                            te(r.id) ? (s(), o("span", {
                              key: 0,
                              class: "apps-item__used",
                              title: new Date(C.value[r.id]).toLocaleString(),
                              "data-testid": "tile-last-used"
                            }, d(te(r.id)), 9, xt)) : c("", !0),
                            n("button", {
                              type: "button",
                              class: "icon-btn apps-item__star",
                              "aria-pressed": O(r.key),
                              "aria-label": e.$t("shell.toggleFavorite"),
                              "data-testid": "tile-star",
                              onClick: X((y) => Le(r.key), ["stop"])
                            }, [
                              b(i(pe), {
                                size: 14,
                                class: I(O(r.key) ? "fill-warning text-warning" : "text-faint")
                              }, null, 8, ["class"])
                            ], 8, $t)
                          ], 40, ft))), 128))
                        ])
                      ], 8, vt))), 128))
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "search-placeholder"]))
            ])
          ])),
          n("div", St, [
            n("div", {
              class: "flex items-center gap-3 cursor-pointer group/logo",
              "data-testid": "brand",
              title: S.value?.name,
              onClick: a[1] || (a[1] = (t) => i(D).push(S.value?.homePath || "/"))
            }, [
              S.value?.logo ? (s(), o(g, { key: 0 }, [
                q.value && S.value.logoDark ? (s(), o("img", {
                  key: 0,
                  src: S.value.logoDark,
                  alt: S.value.name,
                  class: "h-7 w-auto max-w-[200px] object-contain"
                }, null, 8, Ct)) : (s(), o("span", {
                  key: 1,
                  class: I(["inline-flex items-center rounded-md", q.value && "bg-white/95 px-2 py-1"])
                }, [
                  n("img", {
                    src: S.value.logo,
                    alt: S.value.name,
                    class: "h-7 w-auto max-w-[200px] object-contain"
                  }, null, 8, Lt)
                ], 2))
              ], 64)) : (s(), o(g, { key: 1 }, [
                a[8] || (a[8] = He('<div class="relative" data-v-c8e4e62d><div class="w-9 h-9 bg-primary rounded-xl flex items-center justify-center relative z-10 transition-transform group-hover/logo:scale-110 shadow-xl border border-border-soft" data-v-c8e4e62d><span class="text-primary-foreground font-black text-xs tracking-tighter" data-v-c8e4e62d>MP</span></div></div><div class="flex flex-col text-left" data-v-c8e4e62d><span class="text-[11px] font-black uppercase tracking-[0.4em] hdr-ink transition-colors leading-none mb-1" data-v-c8e4e62d>Antigravity</span><span class="text-[9px] font-black uppercase tracking-[0.2em] hdr-faint" data-v-c8e4e62d>Core OS v5</span></div>', 2))
              ], 64))
            ], 8, At)
          ]),
          n("div", zt, [
            E.value && i(j).end?.length ? (s(), o("div", Et, [
              (s(!0), o(g, null, w(i(j).end, (t, l) => (s(), p(v(t), { key: l }))), 128))
            ])) : c("", !0),
            n("div", Vt, [
              i(A) ? (s(), p(v(e.$c("ui.dropdown")), {
                key: 0,
                modelValue: G.value,
                "onUpdate:modelValue": a[2] || (a[2] = (t) => G.value = t),
                align: "right"
              }, {
                trigger: x(() => [
                  n("button", {
                    type: "button",
                    class: "h-9 px-2 rounded-lg flex items-center gap-1 whitespace-nowrap shrink-0 hdr-btn transition-colors outline-none",
                    title: e.$t("shell.language"),
                    "aria-label": e.$t("shell.language"),
                    "data-testid": "lang-switch"
                  }, [
                    b(he, {
                      locale: i(A).locale,
                      size: 20
                    }, null, 8, ["locale"]),
                    b(i(B), {
                      size: 13,
                      class: "hdr-faint"
                    })
                  ], 8, Dt)
                ]),
                content: x(() => [
                  n("div", Mt, [
                    n("div", Ot, d(e.$t("shell.language")), 1),
                    (s(!0), o(g, null, w(i(A).availableLocales, (t) => (s(), o("button", {
                      key: t,
                      type: "button",
                      class: "pop-item justify-between whitespace-nowrap",
                      "aria-selected": i(A).locale === t,
                      onClick: (l) => Se(t)
                    }, [
                      n("span", It, [
                        b(he, {
                          locale: t,
                          size: 22
                        }, null, 8, ["locale"]),
                        n("span", null, d($e[t] ?? t), 1)
                      ]),
                      i(A).locale === t ? (s(), p(i(ve), {
                        key: 0,
                        size: 14,
                        class: "text-primary"
                      })) : c("", !0)
                    ], 8, Nt))), 128))
                  ])
                ]),
                _: 1
              }, 8, ["modelValue"])) : c("", !0)
            ]),
            a[10] || (a[10] = n("div", { class: "h-6 w-px hdr-sep mx-1 hidden md:block" }, null, -1)),
            (s(), p(v(e.$c("ui.dropdown")), {
              modelValue: R.value,
              "onUpdate:modelValue": a[5] || (a[5] = (t) => R.value = t),
              align: "right"
            }, {
              trigger: x(() => [
                n("button", Ut, [
                  n("span", Rt, d(f.value?.username || "User"), 1),
                  b(me, {
                    src: f.value?.avatar,
                    name: f.value?.username || "User",
                    size: 28,
                    rounded: "lg"
                  }, null, 8, ["src", "name"]),
                  b(i(B), {
                    size: 13,
                    class: "hdr-faint"
                  })
                ])
              ]),
              content: x(() => [
                n("div", Tt, [
                  n("div", jt, [
                    b(me, {
                      src: f.value?.avatar,
                      name: f.value?.username || "User",
                      size: 36,
                      rounded: "lg"
                    }, null, 8, ["src", "name"]),
                    n("div", Pt, [
                      n("div", Kt, d(f.value?.username), 1),
                      n("div", Ft, d(f.value?.email || f.value?.role), 1)
                    ])
                  ]),
                  n("button", {
                    type: "button",
                    class: "pop-item",
                    "data-testid": "menu-profile",
                    onClick: a[3] || (a[3] = (t) => {
                      i(D).push("/account/profile"), R.value = !1;
                    })
                  }, [
                    b(i(Qe), {
                      size: 15,
                      class: "text-muted-foreground"
                    }),
                    n("span", null, d(e.$t("shell.profile")), 1)
                  ]),
                  n("button", {
                    type: "button",
                    class: "pop-item",
                    onClick: a[4] || (a[4] = (t) => {
                      i(D).push("/system/theme"), R.value = !1;
                    })
                  }, [
                    b(i(Xe), {
                      size: 15,
                      class: "text-muted-foreground"
                    }),
                    n("span", null, d(e.$t("system.themeStudio", { default: "Theme Studio" })), 1)
                  ]),
                  a[9] || (a[9] = n("div", { class: "pop-sep" }, null, -1)),
                  n("button", {
                    type: "button",
                    class: "pop-item danger",
                    onClick: Te
                  }, [
                    b(i(Ze), { size: 15 }),
                    n("span", null, d(e.$t("shell.logout")), 1)
                  ])
                ])
              ]),
              _: 1
            }, 8, ["modelValue"]))
          ])
        ], 2)
      ]),
      E.value ? c("", !0) : (s(), o("div", Bt, [
        n("div", Ht, [
          oe.value ? (s(), o("nav", Gt, [
            (s(!0), o(g, null, w(re.value, (t) => (s(), o(g, {
              key: t.group ?? t.item.path
            }, [
              t.group === null ? (s(), o("button", {
                key: 0,
                type: "button",
                class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                role: "tab",
                "aria-selected": i(m).active === t.item.path,
                onMousedown: a[6] || (a[6] = X(() => {
                }, ["prevent"])),
                onClick: (l) => i(m).navigate?.(t.item.path)
              }, [
                t.item.icon ? (s(), p(v(t.item.icon), {
                  key: 0,
                  size: 13
                })) : c("", !0),
                Q(" " + d(t.item.label) + " ", 1),
                t.item.badge !== void 0 ? (s(), o("span", Wt, d(t.item.badge), 1)) : c("", !0)
              ], 40, Jt)) : (s(), p(v(e.$c("ui.popover")), {
                key: 1,
                class: "band-group",
                align: "start"
              }, {
                default: x(({ close: l }) => [
                  (s(), p(v(e.$c("ui.popover-trigger")), { class: "band-group__trigger" }, {
                    default: x(() => [
                      n("button", {
                        type: "button",
                        class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                        role: "tab",
                        "aria-selected": !!W(t.items),
                        "aria-haspopup": "menu",
                        onMousedown: a[7] || (a[7] = X(() => {
                        }, ["prevent"])),
                        "data-testid": `app-nav-group-${t.group}`
                      }, [
                        t.icon ? (s(), p(v(t.icon), {
                          key: 0,
                          size: 13
                        })) : c("", !0),
                        Q(" " + d(t.group) + " ", 1),
                        W(t.items) ? (s(), o("span", Qt, "· " + d(W(t.items).label), 1)) : c("", !0),
                        b(i(B), { size: 12 })
                      ], 40, Yt)
                    ]),
                    _: 2
                  }, 1024)),
                  (s(), p(v(e.$c("ui.popover-content")), {
                    align: "start",
                    class: "p-1"
                  }, {
                    default: x(() => [
                      n("div", Xt, [
                        (s(!0), o(g, null, w(t.items, (r) => (s(), o("button", {
                          key: r.path,
                          type: "button",
                          class: "pop-item whitespace-nowrap",
                          role: "menuitem",
                          "aria-selected": i(m).active === r.path,
                          disabled: r.disabled,
                          "aria-disabled": r.disabled || void 0,
                          onClick: (y) => {
                            l(), i(m).navigate?.(r.path);
                          }
                        }, [
                          r.icon ? (s(), p(v(r.icon), {
                            key: 0,
                            size: 15,
                            class: "text-muted-foreground"
                          })) : c("", !0),
                          n("span", qt, d(r.label), 1),
                          i(m).active === r.path ? (s(), p(i(ve), {
                            key: 1,
                            size: 14,
                            class: "text-primary"
                          })) : c("", !0)
                        ], 8, Zt))), 128))
                      ])
                    ]),
                    _: 2
                  }, 1024))
                ]),
                _: 2
              }, 1024))
            ], 64))), 128))
          ])) : c("", !0),
          i(j).end?.length ? (s(), o("div", ea, [
            (s(!0), o(g, null, w(i(j).end, (t, l) => (s(), p(v(t), { key: l }))), 128))
          ])) : c("", !0)
        ])
      ])),
      E.value ? (s(), p(Ge, {
        key: 1,
        defer: "",
        to: "#shell-sidebar"
      }, [
        n("div", {
          class: I(["side", $.value && "is-collapsed"])
        }, [
          n("nav", {
            class: "side-rail",
            "aria-label": e.$t("shell.apps"),
            "data-testid": "app-rail"
          }, [
            n("div", aa, [
              (s(!0), o(g, null, w(Oe.value, (t) => (s(), o("button", {
                key: t.key,
                type: "button",
                class: "side-app",
                title: t.label,
                "aria-current": t.id === k.value.id ? "page" : void 0,
                "data-testid": "rail-app",
                onClick: (l) => t.run()
              }, [
                n("span", na, [
                  (s(), p(v(t.icon), {
                    size: 18,
                    "stroke-width": "1.75"
                  }))
                ]),
                n("span", oa, d(t.label), 1),
                O(t.key) ? (s(), p(i(pe), {
                  key: 0,
                  size: 9,
                  class: "side-app__fav"
                })) : c("", !0)
              ], 8, sa))), 128))
            ]),
            n("button", {
              type: "button",
              class: "side-collapse",
              "aria-pressed": $.value,
              title: $.value ? "Show the menu" : "Hide the menu",
              "data-testid": "sidebar-collapse",
              onClick: ke
            }, [
              (s(), p(v($.value ? i(qe) : i(et)), { size: 16 }))
            ], 8, la)
          ], 8, ta),
          !$.value && oe.value ? (s(), o("div", ia, [
            n("div", ra, [
              n("span", da, d(k.value.label), 1),
              z.value ? (s(), o("span", {
                key: 0,
                class: "app-version",
                title: P.value,
                "data-testid": "current-app-version"
              }, d(z.value), 9, ca)) : c("", !0)
            ]),
            n("nav", ua, [
              (s(!0), o(g, null, w(re.value, (t) => (s(), o(g, {
                key: t.group ?? t.item.path
              }, [
                t.group === null ? (s(), o("button", {
                  key: 0,
                  type: "button",
                  class: "nav-item side-item",
                  "aria-current": i(m).active === t.item.path ? "page" : void 0,
                  onClick: (l) => i(m).navigate?.(t.item.path)
                }, [
                  t.item.icon ? (s(), p(v(t.item.icon), { key: 0 })) : c("", !0),
                  n("span", va, d(t.item.label), 1),
                  t.item.badge !== void 0 ? (s(), o("span", ha, d(t.item.badge), 1)) : c("", !0)
                ], 8, pa)) : (s(), o("div", {
                  key: 1,
                  class: "side-group",
                  "data-testid": `app-nav-group-${t.group}`
                }, [
                  n("div", ga, d(t.group), 1),
                  (s(!0), o(g, null, w(t.items, (l) => (s(), o("button", {
                    key: l.path,
                    type: "button",
                    class: "nav-item side-item",
                    disabled: l.disabled,
                    "aria-disabled": l.disabled || void 0,
                    "aria-current": i(m).active === l.path ? "page" : void 0,
                    onClick: (r) => i(m).navigate?.(l.path)
                  }, [
                    l.icon ? (s(), p(v(l.icon), { key: 0 })) : c("", !0),
                    n("span", _a, d(l.label), 1)
                  ], 8, fa))), 128))
                ], 8, ma))
              ], 64))), 128))
            ])
          ])) : c("", !0)
        ], 2)
      ])) : c("", !0)
    ]));
  }
}), Ea = /* @__PURE__ */ at(ba, [["__scopeId", "data-v-c8e4e62d"]]);
export {
  Ea as default
};
//# sourceMappingURL=Header-D4uKMivQ.js.map
