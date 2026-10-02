import { defineComponent as Te, computed as h, ref as b, inject as Pe, watch as K, onMounted as Ke, openBlock as s, createElementBlock as n, createElementVNode as l, normalizeClass as z, createBlock as p, Teleport as ue, resolveDynamicComponent as v, withCtx as w, toDisplayString as d, createCommentVNode as u, Fragment as g, renderList as x, createTextVNode as Y, withKeys as Fe, withModifiers as Q, createVNode as _, unref as r, createStaticVNode as Be } from "vue";
import { appIcon as He } from "../index.js";
import { useRouter as Ge, useRoute as Je } from "vue-router";
import { LayoutGrid as pe, Star as We, ChevronDown as F, Check as ve, User as Ye, Palette as Qe, LogOut as Xe, PanelLeftOpen as Ze, PanelLeftClose as qe } from "lucide-vue-next";
import { SUPERAPP_EVENTS as et } from "@nhphero/vue-sapp/contracts";
import { _ as me } from "./LocaleFlag.vue_vue_type_script_setup_true_lang-D2eeZNym.js";
import { _ as he } from "./UserAvatar.vue_vue_type_script_setup_true_lang-AXBFwsc7.js";
import { _ as tt } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const at = { class: "shell-head w-full sticky top-0 z-[100]" }, st = { class: "shell-header w-full transition-colors duration-300" }, lt = ["title", "aria-label"], nt = {
  class: "text-sm font-semibold text-foreground whitespace-nowrap",
  "data-testid": "current-app"
}, ot = ["title"], it = { class: "apps-menu" }, rt = { class: "apps-menu__all" }, dt = {
  key: 0,
  class: "px-3 py-6 text-sm text-faint text-center"
}, ct = ["data-testid"], ut = {
  key: 0,
  class: "pop-head flex items-center gap-1.5"
}, pt = { class: "text-faint font-normal" }, vt = { class: "apps-list" }, mt = ["aria-current", "onClick", "onKeydown"], ht = { class: "apps-item__icon" }, gt = { class: "apps-item__text" }, ft = { class: "apps-item__name" }, bt = { class: "truncate" }, _t = ["title"], yt = ["title"], kt = ["aria-pressed", "aria-label", "onClick"], wt = { class: "flex items-center justify-center min-w-0" }, xt = ["title"], St = ["src", "alt"], $t = ["src", "alt"], At = { class: "flex items-center gap-2 justify-self-end" }, Ct = {
  key: 0,
  class: "flex items-center gap-1",
  "data-testid": "app-band-end"
}, Lt = { class: "hidden md:flex items-center gap-1 flex-nowrap shrink-0" }, zt = ["title", "aria-label"], Et = { class: "w-52" }, Vt = { class: "pop-head" }, Dt = ["aria-selected", "onClick"], Mt = { class: "flex items-center gap-2.5" }, Ot = {
  type: "button",
  class: "h-9 flex items-center gap-2 pl-2.5 pr-1.5 rounded-lg hdr-btn cursor-pointer transition-colors outline-none",
  "data-testid": "user-menu"
}, Nt = { class: "hidden lg:block text-sm font-semibold hdr-ink whitespace-nowrap" }, It = { class: "w-60" }, Ut = { class: "flex items-center gap-3 px-2 py-2.5 mb-1 border-b border-border-soft" }, Rt = { class: "min-w-0" }, jt = { class: "text-sm font-semibold text-foreground truncate" }, Tt = { class: "text-xs text-faint truncate" }, Pt = {
  key: 0,
  class: "app-band"
}, Kt = { class: "page-container flex items-stretch gap-3" }, Ft = {
  key: 0,
  class: "tabs tabs--band min-w-0 overflow-x-auto no-scrollbar",
  role: "tablist",
  "data-testid": "app-nav"
}, Bt = ["aria-selected", "onClick"], Ht = {
  key: 1,
  class: "badge"
}, Gt = ["aria-selected", "data-testid"], Jt = {
  key: 1,
  class: "band-group__current"
}, Wt = {
  class: "min-w-56 flex flex-col",
  role: "menu"
}, Yt = ["aria-selected", "disabled", "aria-disabled", "onClick"], Qt = { class: "flex-1" }, Xt = {
  key: 1,
  class: "app-band__end",
  "data-testid": "app-band-end"
}, Zt = ["aria-current", "title", "onClick"], qt = {
  key: 1,
  class: "side-initial"
}, ea = { class: "side-label" }, ta = {
  key: 2,
  class: "badge side-label"
}, aa = ["data-testid"], sa = { class: "nav-group side-label" }, la = ["disabled", "aria-disabled", "aria-current", "title", "onClick"], na = {
  key: 1,
  class: "side-initial"
}, oa = { class: "side-label" }, ia = ["aria-pressed", "title"], ra = {
  key: 0,
  class: "side-label"
}, ge = "sapp:sidebar-collapsed", fe = "sapp:app-last-used", be = "sapp:recent-apps", da = /* @__PURE__ */ Te({
  __name: "Header",
  props: {
    layout: { default: "band" }
  },
  setup(_e) {
    const ye = _e, A = h(() => ye.layout === "sidebar"), y = b((() => {
      try {
        return localStorage.getItem(ge) === "true";
      } catch {
        return !1;
      }
    })()), ke = () => {
      y.value = !y.value;
      try {
        localStorage.setItem(ge, String(y.value));
      } catch {
      }
    }, c = Pe("$superApp"), V = c, D = Ge(), X = Je(), M = V.$appState, B = V.$themeConfig, S = h(() => V.$config?.branding ?? null), we = h(() => B?.state?.mode === "dark" || B?.state?.mode === "system" && window.matchMedia?.("(prefers-color-scheme: dark)").matches), xe = ["brand", "gradient", "dark"], Z = h(() => we.value || xe.includes(B?.state?.header)), C = V.$i18n, H = b(!1), Se = { vi: "Tiếng Việt", en: "English", ja: "日本語", ko: "한국어", zh: "中文", fr: "Français", de: "Deutsch" }, $e = (e) => {
      C?.setLocale(e), H.value = !1;
    }, Ae = h(
      () => se.value.map((e) => ({ key: `app:${e.id}`, id: e.id, label: e.label, detail: e.detail, icon: e.icon, run: () => je(e.path) }))
    ), q = h(() => c?.getModuleState?.("home", { favorites: [] })), Ce = h(() => q.value?.favorites ?? []), N = (e) => Ce.value.includes(e), Le = (e) => q.value?.toggleFavorite?.(e), ee = (e) => {
      const a = (e || "").trim().toLowerCase(), t = (k) => !a || `${k.label} ${k.detail || ""} ${k.id}`.toLowerCase().includes(a), i = [...Ae.value.filter(t)].sort((k, W) => {
        const de = Number(N(W.key)) - Number(N(k.key));
        if (de !== 0) return de;
        const ce = (L.value[W.id] ?? 0) - (L.value[k.id] ?? 0);
        return ce !== 0 ? ce : String(k.label).localeCompare(String(W.label));
      });
      return i.length ? [{ key: "apps", label: "", tiles: i }] : [];
    }, L = b((() => {
      try {
        const e = JSON.parse(localStorage.getItem(fe) || "null");
        if (e && typeof e == "object" && !Array.isArray(e))
          return Object.fromEntries(Object.entries(e).filter(([, o]) => typeof o == "number"));
        const a = JSON.parse(localStorage.getItem(be) || "[]"), t = Date.now();
        return Array.isArray(a) ? Object.fromEntries(a.filter((o) => typeof o == "string").map((o, i) => [o, t - i * 1e3])) : {};
      } catch {
        return {};
      }
    })()), ze = (e) => {
      L.value = { ...L.value, [e]: Date.now() };
      try {
        localStorage.setItem(fe, JSON.stringify(L.value)), localStorage.removeItem(be);
      } catch {
      }
    }, te = (e) => {
      const a = L.value[e];
      return a ? V.$f?.formatRelative?.(new Date(a).toISOString()) ?? new Date(a).toLocaleString() : "";
    }, I = b(!1), Ee = (e) => {
      I.value = e;
    }, U = b(!1);
    b(!1);
    const f = b(null), E = b([]), R = b([]), Ve = (e) => He(e), ae = () => {
      typeof c?.getRegisteredApps == "function" && (R.value = c.getRegisteredApps());
    }, De = ["superadmin", "admin"], Me = h(() => c?.$policy?.can?.("role", De) ?? !1), se = h(() => (R.value.length > 0 ? R.value : [
      { id: "workspace", name: "Workspace Hub", url: "http://localhost:4409", icon: "Globe", description: "Logic Orchestration", isEnabled: !0 },
      { id: "admin", name: "Admin Management", url: "http://localhost:4403", icon: "Shield", description: "Platform Governance", isEnabled: !0 }
    ]).filter((a) => a.isEnabled !== !1).filter((a) => (a.code ?? a.id) !== "admin" || Me.value).map((a) => ({
      id: a.id,
      label: a.name,
      // Routes follow the slug (changeable); the id stays the key.
      path: typeof c.appPath == "function" ? c.appPath(a.id, (a.code ?? a.id) === "admin" ? "apps" : "") : `/app/${a.slug || a.id}`,
      icon: Ve(a.icon),
      detail: a.description || "Micro-Frontend App"
    }))), j = c.getModuleState("shell.band", { end: [] }), m = c.getModuleState("shell.nav", { moduleId: "", title: "", icon: null, items: [], active: "", navigate: null }), le = h(() => X.path.startsWith("/app/")), $ = h(() => {
      let e = le.value ? M.current_app : null;
      e === "expose" && (e = "workspace");
      const a = e && se.value.find((t) => t.id === e);
      return a || (e && m.title ? { id: e, label: m.title, icon: m.icon || pe } : { id: "default", label: C?.t("shell.apps") ?? "Apps", icon: pe });
    }), ne = h(() => le.value && m.items.length > 0);
    K(() => $.value.id, (e) => {
      e && e !== "default" && ze(e);
    }, { immediate: !0 });
    const oe = async (e) => {
      if (!e || e === "default" || typeof c.loadAppManifest != "function") return null;
      const a = await c.loadAppManifest(e);
      if (!a) return null;
      const t = String(a.version ?? "dev");
      return c.getRegisteredApps?.().find((i) => i.id === e)?.channel === "stable" ? { label: "stable", title: `stable · ${t}` } : { label: t, title: t };
    }, T = b(""), G = b("");
    K(() => [$.value.id, $.value.version], async ([e]) => {
      T.value = "", G.value = "";
      const a = await oe(e);
      $.value.id !== e || !a || (T.value = a.label, G.value = a.title);
    }, { immediate: !0 });
    const O = b({}), Oe = () => {
      for (const e of Ne()) {
        const a = `${e.id}@${e.version ?? ""}`;
        ie.has(a) || (ie.add(a), oe(e.id).then((t) => {
          t && (O.value = { ...O.value, [e.id]: t });
        }));
      }
    }, ie = /* @__PURE__ */ new Set(), Ne = () => typeof c?.getRegisteredApps == "function" ? c.getRegisteredApps() : [];
    K(I, (e) => {
      e && Oe();
    });
    const re = h(() => {
      const e = [];
      for (const a of m.items) {
        if (!a.group) {
          e.push({ group: null, item: a });
          continue;
        }
        const t = e.find((o) => o.group === a.group);
        t ? (t.items.push(a), t.icon ??= a.groupIcon) : e.push({ group: a.group, icon: a.groupIcon, items: [a] });
      }
      return e;
    }), J = (e) => e.find((a) => m.active === a.path) ?? null, P = h({
      get: () => M.current_workspace,
      set: (e) => {
        M.current_workspace = e;
      }
    });
    h(() => E.value.find((e) => String(e.id) === String(P.value)) || E.value[0]), K(() => X.params.moduleId, (e) => {
      const a = Array.isArray(e) ? e[0] : e, t = a && (c.findAppByRoute?.(a)?.id ?? a);
      t && M.current_app !== t && (M.current_app = t);
    }, { immediate: !0 });
    const Ie = async () => {
      try {
        f.value = await c.doAction("auth.me");
      } catch {
        try {
          f.value = JSON.parse(localStorage.getItem("user") || "null");
        } catch {
        }
      }
    };
    c.on?.("auth:profile-updated", (e) => {
      f.value = { ...f.value || {}, ...e };
    });
    const Ue = async () => {
      try {
        const e = await c.doAction("workspace.list");
        E.value = e || [];
        const a = E.value.find((t) => String(t.id) === String(P.value));
        (!P.value || !a) && E.value.length > 0 && (P.value = String(E.value[0].id));
      } catch {
      }
    }, Re = async () => {
      c.emit?.(et.AUTH_LOGOUT);
      try {
        c.doAction("auth.logout"), localStorage.removeItem("accessToken"), D.push("/login").catch(() => {
          window.location.href = "/login";
        });
      } catch {
        localStorage.removeItem("accessToken"), window.location.href = "/login";
      }
    }, je = (e) => {
      I.value = !1, D.push(e);
    };
    return Ke(() => {
      Ie(), Ue(), ae(), typeof c?.on == "function" && c.on("apps:updated", (e) => {
        Array.isArray(e) ? R.value = e : ae();
      });
    }), (e, a) => (s(), n("div", at, [
      l("header", st, [
        l("div", {
          class: z(["shell-header__row shell-header__wide", A.value && "is-sidebar"])
        }, [
          l("div", {
            class: z(["flex items-center min-w-0 justify-self-start", A.value && "hidden"])
          }, [
            (s(), p(ue, {
              defer: "",
              to: "#shell-sidebar",
              disabled: !A.value
            }, [
              l("div", {
                class: z(["flex items-center shrink-0 min-w-0", A.value && ["side-switch", y.value && "is-collapsed"]])
              }, [
                (s(), p(v(e.$c("ui.dropdown")), {
                  class: "app-switch",
                  modelValue: I.value,
                  "onUpdate:modelValue": a[0] || (a[0] = (t) => Ee(t)),
                  search: "",
                  "search-placeholder": e.$t("shell.searchApps")
                }, {
                  trigger: w(() => [
                    l("button", {
                      type: "button",
                      class: "app-chip flex items-center gap-2 transition-colors outline-none group/app",
                      title: e.$t("shell.apps"),
                      "aria-label": e.$t("shell.apps"),
                      "data-testid": "apps-switch"
                    }, [
                      l("span", {
                        class: z(["w-7 h-7 rounded-md grid place-items-center shrink-0 transition-colors", $.value.id === "default" ? "bg-muted text-muted-foreground" : "bg-primary-soft text-primary"])
                      }, [
                        (s(), p(v($.value.icon), { size: 16 }))
                      ], 2),
                      l("span", nt, d($.value.label), 1),
                      T.value ? (s(), n("span", {
                        key: 0,
                        class: "app-version",
                        "data-testid": "current-app-version",
                        title: G.value
                      }, d(T.value), 9, ot)) : u("", !0),
                      _(r(F), {
                        size: 14,
                        class: "text-faint group-hover/app:text-foreground transition-colors"
                      })
                    ], 8, lt)
                  ]),
                  content: w(({ query: t }) => [
                    l("div", it, [
                      l("div", rt, [
                        ee(t).length ? u("", !0) : (s(), n("div", dt, d(e.$t("common.empty")), 1)),
                        (s(!0), n(g, null, x(ee(t), (o) => (s(), n("section", {
                          key: o.key,
                          class: "pt-1 last:pb-3",
                          "data-testid": `apps-section-${o.key}`
                        }, [
                          o.label ? (s(), n("div", ut, [
                            Y(d(o.label), 1),
                            l("span", pt, d(o.tiles.length), 1)
                          ])) : u("", !0),
                          l("div", vt, [
                            (s(!0), n(g, null, x(o.tiles, (i) => (s(), n("div", {
                              key: i.key,
                              role: "button",
                              tabindex: "0",
                              class: "apps-item group",
                              "aria-current": i.id === $.value.id ? "true" : void 0,
                              onClick: (k) => i.run(),
                              onKeydown: Fe((k) => i.run(), ["enter"])
                            }, [
                              l("span", ht, [
                                (s(), p(v(i.icon), {
                                  size: 16,
                                  "stroke-width": "1.75"
                                }))
                              ]),
                              l("span", gt, [
                                l("span", ft, [
                                  l("span", bt, d(i.label), 1),
                                  O.value[i.id] ? (s(), n("span", {
                                    key: 0,
                                    class: "tile-version",
                                    title: O.value[i.id].title,
                                    "data-testid": "tile-version"
                                  }, d(O.value[i.id].label), 9, _t)) : u("", !0)
                                ])
                              ]),
                              te(i.id) ? (s(), n("span", {
                                key: 0,
                                class: "apps-item__used",
                                title: new Date(L.value[i.id]).toLocaleString(),
                                "data-testid": "tile-last-used"
                              }, d(te(i.id)), 9, yt)) : u("", !0),
                              l("button", {
                                type: "button",
                                class: "icon-btn apps-item__star",
                                "aria-pressed": N(i.key),
                                "aria-label": e.$t("shell.toggleFavorite"),
                                "data-testid": "tile-star",
                                onClick: Q((k) => Le(i.key), ["stop"])
                              }, [
                                _(r(We), {
                                  size: 14,
                                  class: z(N(i.key) ? "fill-warning text-warning" : "text-faint")
                                }, null, 8, ["class"])
                              ], 8, kt)
                            ], 40, mt))), 128))
                          ])
                        ], 8, ct))), 128))
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue", "search-placeholder"]))
              ], 2)
            ], 8, ["disabled"]))
          ], 2),
          l("div", wt, [
            l("div", {
              class: "flex items-center gap-3 cursor-pointer group/logo",
              "data-testid": "brand",
              title: S.value?.name,
              onClick: a[1] || (a[1] = (t) => r(D).push(S.value?.homePath || "/"))
            }, [
              S.value?.logo ? (s(), n(g, { key: 0 }, [
                Z.value && S.value.logoDark ? (s(), n("img", {
                  key: 0,
                  src: S.value.logoDark,
                  alt: S.value.name,
                  class: "h-7 w-auto max-w-[200px] object-contain"
                }, null, 8, St)) : (s(), n("span", {
                  key: 1,
                  class: z(["inline-flex items-center rounded-md", Z.value && "bg-white/95 px-2 py-1"])
                }, [
                  l("img", {
                    src: S.value.logo,
                    alt: S.value.name,
                    class: "h-7 w-auto max-w-[200px] object-contain"
                  }, null, 8, $t)
                ], 2))
              ], 64)) : (s(), n(g, { key: 1 }, [
                a[8] || (a[8] = Be('<div class="relative" data-v-899d8b0d><div class="w-9 h-9 bg-primary rounded-xl flex items-center justify-center relative z-10 transition-transform group-hover/logo:scale-110 shadow-xl border border-border-soft" data-v-899d8b0d><span class="text-primary-foreground font-black text-xs tracking-tighter" data-v-899d8b0d>MP</span></div></div><div class="flex flex-col text-left" data-v-899d8b0d><span class="text-[11px] font-black uppercase tracking-[0.4em] hdr-ink transition-colors leading-none mb-1" data-v-899d8b0d>Antigravity</span><span class="text-[9px] font-black uppercase tracking-[0.2em] hdr-faint" data-v-899d8b0d>Core OS v5</span></div>', 2))
              ], 64))
            ], 8, xt)
          ]),
          l("div", At, [
            A.value && r(j).end?.length ? (s(), n("div", Ct, [
              (s(!0), n(g, null, x(r(j).end, (t, o) => (s(), p(v(t), { key: o }))), 128))
            ])) : u("", !0),
            l("div", Lt, [
              r(C) ? (s(), p(v(e.$c("ui.dropdown")), {
                key: 0,
                modelValue: H.value,
                "onUpdate:modelValue": a[2] || (a[2] = (t) => H.value = t),
                align: "right"
              }, {
                trigger: w(() => [
                  l("button", {
                    type: "button",
                    class: "h-9 px-2 rounded-lg flex items-center gap-1 whitespace-nowrap shrink-0 hdr-btn transition-colors outline-none",
                    title: e.$t("shell.language"),
                    "aria-label": e.$t("shell.language"),
                    "data-testid": "lang-switch"
                  }, [
                    _(me, {
                      locale: r(C).locale,
                      size: 20
                    }, null, 8, ["locale"]),
                    _(r(F), {
                      size: 13,
                      class: "hdr-faint"
                    })
                  ], 8, zt)
                ]),
                content: w(() => [
                  l("div", Et, [
                    l("div", Vt, d(e.$t("shell.language")), 1),
                    (s(!0), n(g, null, x(r(C).availableLocales, (t) => (s(), n("button", {
                      key: t,
                      type: "button",
                      class: "pop-item justify-between whitespace-nowrap",
                      "aria-selected": r(C).locale === t,
                      onClick: (o) => $e(t)
                    }, [
                      l("span", Mt, [
                        _(me, {
                          locale: t,
                          size: 22
                        }, null, 8, ["locale"]),
                        l("span", null, d(Se[t] ?? t), 1)
                      ]),
                      r(C).locale === t ? (s(), p(r(ve), {
                        key: 0,
                        size: 14,
                        class: "text-primary"
                      })) : u("", !0)
                    ], 8, Dt))), 128))
                  ])
                ]),
                _: 1
              }, 8, ["modelValue"])) : u("", !0)
            ]),
            a[10] || (a[10] = l("div", { class: "h-6 w-px hdr-sep mx-1 hidden md:block" }, null, -1)),
            (s(), p(v(e.$c("ui.dropdown")), {
              modelValue: U.value,
              "onUpdate:modelValue": a[5] || (a[5] = (t) => U.value = t),
              align: "right"
            }, {
              trigger: w(() => [
                l("button", Ot, [
                  l("span", Nt, d(f.value?.username || "User"), 1),
                  _(he, {
                    src: f.value?.avatar,
                    name: f.value?.username || "User",
                    size: 28,
                    rounded: "lg"
                  }, null, 8, ["src", "name"]),
                  _(r(F), {
                    size: 13,
                    class: "hdr-faint"
                  })
                ])
              ]),
              content: w(() => [
                l("div", It, [
                  l("div", Ut, [
                    _(he, {
                      src: f.value?.avatar,
                      name: f.value?.username || "User",
                      size: 36,
                      rounded: "lg"
                    }, null, 8, ["src", "name"]),
                    l("div", Rt, [
                      l("div", jt, d(f.value?.username), 1),
                      l("div", Tt, d(f.value?.email || f.value?.role), 1)
                    ])
                  ]),
                  l("button", {
                    type: "button",
                    class: "pop-item",
                    "data-testid": "menu-profile",
                    onClick: a[3] || (a[3] = (t) => {
                      r(D).push("/account/profile"), U.value = !1;
                    })
                  }, [
                    _(r(Ye), {
                      size: 15,
                      class: "text-muted-foreground"
                    }),
                    l("span", null, d(e.$t("shell.profile")), 1)
                  ]),
                  l("button", {
                    type: "button",
                    class: "pop-item",
                    onClick: a[4] || (a[4] = (t) => {
                      r(D).push("/system/theme"), U.value = !1;
                    })
                  }, [
                    _(r(Qe), {
                      size: 15,
                      class: "text-muted-foreground"
                    }),
                    l("span", null, d(e.$t("system.themeStudio", { default: "Theme Studio" })), 1)
                  ]),
                  a[9] || (a[9] = l("div", { class: "pop-sep" }, null, -1)),
                  l("button", {
                    type: "button",
                    class: "pop-item danger",
                    onClick: Re
                  }, [
                    _(r(Xe), { size: 15 }),
                    l("span", null, d(e.$t("shell.logout")), 1)
                  ])
                ])
              ]),
              _: 1
            }, 8, ["modelValue"]))
          ])
        ], 2)
      ]),
      A.value ? u("", !0) : (s(), n("div", Pt, [
        l("div", Kt, [
          ne.value ? (s(), n("nav", Ft, [
            (s(!0), n(g, null, x(re.value, (t) => (s(), n(g, {
              key: t.group ?? t.item.path
            }, [
              t.group === null ? (s(), n("button", {
                key: 0,
                type: "button",
                class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                role: "tab",
                "aria-selected": r(m).active === t.item.path,
                onMousedown: a[6] || (a[6] = Q(() => {
                }, ["prevent"])),
                onClick: (o) => r(m).navigate?.(t.item.path)
              }, [
                t.item.icon ? (s(), p(v(t.item.icon), {
                  key: 0,
                  size: 13
                })) : u("", !0),
                Y(" " + d(t.item.label) + " ", 1),
                t.item.badge !== void 0 ? (s(), n("span", Ht, d(t.item.badge), 1)) : u("", !0)
              ], 40, Bt)) : (s(), p(v(e.$c("ui.popover")), {
                key: 1,
                class: "band-group",
                align: "start"
              }, {
                default: w(({ close: o }) => [
                  (s(), p(v(e.$c("ui.popover-trigger")), { class: "band-group__trigger" }, {
                    default: w(() => [
                      l("button", {
                        type: "button",
                        class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                        role: "tab",
                        "aria-selected": !!J(t.items),
                        "aria-haspopup": "menu",
                        onMousedown: a[7] || (a[7] = Q(() => {
                        }, ["prevent"])),
                        "data-testid": `app-nav-group-${t.group}`
                      }, [
                        t.icon ? (s(), p(v(t.icon), {
                          key: 0,
                          size: 13
                        })) : u("", !0),
                        Y(" " + d(t.group) + " ", 1),
                        J(t.items) ? (s(), n("span", Jt, "· " + d(J(t.items).label), 1)) : u("", !0),
                        _(r(F), { size: 12 })
                      ], 40, Gt)
                    ]),
                    _: 2
                  }, 1024)),
                  (s(), p(v(e.$c("ui.popover-content")), {
                    align: "start",
                    class: "p-1"
                  }, {
                    default: w(() => [
                      l("div", Wt, [
                        (s(!0), n(g, null, x(t.items, (i) => (s(), n("button", {
                          key: i.path,
                          type: "button",
                          class: "pop-item whitespace-nowrap",
                          role: "menuitem",
                          "aria-selected": r(m).active === i.path,
                          disabled: i.disabled,
                          "aria-disabled": i.disabled || void 0,
                          onClick: (k) => {
                            o(), r(m).navigate?.(i.path);
                          }
                        }, [
                          i.icon ? (s(), p(v(i.icon), {
                            key: 0,
                            size: 15,
                            class: "text-muted-foreground"
                          })) : u("", !0),
                          l("span", Qt, d(i.label), 1),
                          r(m).active === i.path ? (s(), p(r(ve), {
                            key: 1,
                            size: 14,
                            class: "text-primary"
                          })) : u("", !0)
                        ], 8, Yt))), 128))
                      ])
                    ]),
                    _: 2
                  }, 1024))
                ]),
                _: 2
              }, 1024))
            ], 64))), 128))
          ])) : u("", !0),
          r(j).end?.length ? (s(), n("div", Xt, [
            (s(!0), n(g, null, x(r(j).end, (t, o) => (s(), p(v(t), { key: o }))), 128))
          ])) : u("", !0)
        ])
      ])),
      A.value ? (s(), p(ue, {
        key: 1,
        defer: "",
        to: "#shell-sidebar"
      }, [
        l("nav", {
          class: z(["side-nav", y.value && "is-collapsed"]),
          "data-testid": "app-nav"
        }, [
          ne.value ? (s(!0), n(g, { key: 0 }, x(re.value, (t) => (s(), n(g, {
            key: t.group ?? t.item.path
          }, [
            t.group === null ? (s(), n("button", {
              key: 0,
              type: "button",
              class: "nav-item side-item",
              "aria-current": r(m).active === t.item.path ? "page" : void 0,
              title: y.value ? t.item.label : void 0,
              onClick: (o) => r(m).navigate?.(t.item.path)
            }, [
              t.item.icon ? (s(), p(v(t.item.icon), { key: 0 })) : (s(), n("span", qt, d(String(t.item.label).charAt(0)), 1)),
              l("span", ea, d(t.item.label), 1),
              t.item.badge !== void 0 ? (s(), n("span", ta, d(t.item.badge), 1)) : u("", !0)
            ], 8, Zt)) : (s(), n("div", {
              key: 1,
              class: "side-group",
              "data-testid": `app-nav-group-${t.group}`
            }, [
              l("div", sa, d(t.group), 1),
              (s(!0), n(g, null, x(t.items, (o) => (s(), n("button", {
                key: o.path,
                type: "button",
                class: "nav-item side-item",
                disabled: o.disabled,
                "aria-disabled": o.disabled || void 0,
                "aria-current": r(m).active === o.path ? "page" : void 0,
                title: y.value ? o.label : void 0,
                onClick: (i) => r(m).navigate?.(o.path)
              }, [
                o.icon ? (s(), p(v(o.icon), { key: 0 })) : (s(), n("span", na, d(String(o.label).charAt(0)), 1)),
                l("span", oa, d(o.label), 1)
              ], 8, la))), 128))
            ], 8, aa))
          ], 64))), 128)) : u("", !0)
        ], 2),
        l("button", {
          type: "button",
          class: "side-collapse",
          "aria-pressed": y.value,
          title: y.value ? "Expand the sidebar" : "Collapse the sidebar",
          "data-testid": "sidebar-collapse",
          onClick: ke
        }, [
          (s(), p(v(y.value ? r(Ze) : r(qe)), { size: 16 })),
          y.value ? u("", !0) : (s(), n("span", ra, "Collapse"))
        ], 8, ia)
      ])) : u("", !0)
    ]));
  }
}), ya = /* @__PURE__ */ tt(da, [["__scopeId", "data-v-899d8b0d"]]);
export {
  ya as default
};
//# sourceMappingURL=Header-CRdJd2j4.js.map
