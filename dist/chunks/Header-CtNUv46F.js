import { defineComponent as Pe, computed as h, ref as b, inject as Ke, watch as N, onBeforeUnmount as Be, onMounted as Fe, openBlock as s, createElementBlock as n, createElementVNode as l, normalizeClass as z, createBlock as p, Teleport as pe, resolveDynamicComponent as v, withCtx as x, toDisplayString as d, createCommentVNode as u, Fragment as g, renderList as S, createTextVNode as Y, withKeys as He, withModifiers as Q, createVNode as _, unref as r, createStaticVNode as Ge } from "vue";
import { appIcon as Je } from "../index.js";
import { useRouter as We, useRoute as Ye } from "vue-router";
import { LayoutGrid as ve, Star as Qe, ChevronDown as B, Check as me, User as Xe, Palette as Ze, LogOut as qe, PanelLeftOpen as et, PanelLeftClose as tt } from "lucide-vue-next";
import { SUPERAPP_EVENTS as at } from "@nhphero/vue-sapp/contracts";
import { _ as he } from "./LocaleFlag.vue_vue_type_script_setup_true_lang-D2eeZNym.js";
import { _ as ge } from "./UserAvatar.vue_vue_type_script_setup_true_lang-AXBFwsc7.js";
import { _ as st } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const lt = { class: "shell-head w-full sticky top-0 z-[100]" }, nt = { class: "shell-header w-full transition-colors duration-300" }, ot = ["title", "aria-label"], it = {
  class: "text-sm font-semibold text-foreground whitespace-nowrap",
  "data-testid": "current-app"
}, rt = ["title"], dt = { class: "apps-menu" }, ct = { class: "apps-menu__all" }, ut = {
  key: 0,
  class: "px-3 py-6 text-sm text-faint text-center"
}, pt = ["data-testid"], vt = {
  key: 0,
  class: "pop-head flex items-center gap-1.5"
}, mt = { class: "text-faint font-normal" }, ht = { class: "apps-list" }, gt = ["aria-current", "onClick", "onKeydown"], ft = { class: "apps-item__icon" }, bt = { class: "apps-item__text" }, _t = { class: "apps-item__name" }, yt = { class: "truncate" }, kt = ["title"], wt = ["title"], xt = ["aria-pressed", "aria-label", "onClick"], St = { class: "flex items-center justify-center min-w-0" }, $t = ["title"], At = ["src", "alt"], Ct = ["src", "alt"], Lt = { class: "flex items-center gap-2 justify-self-end" }, zt = {
  key: 0,
  class: "flex items-center gap-1",
  "data-testid": "app-band-end"
}, Et = { class: "hidden md:flex items-center gap-1 flex-nowrap shrink-0" }, Vt = ["title", "aria-label"], Mt = { class: "w-52" }, Dt = { class: "pop-head" }, Ot = ["aria-selected", "onClick"], Nt = { class: "flex items-center gap-2.5" }, Ut = {
  type: "button",
  class: "h-9 flex items-center gap-2 pl-2.5 pr-1.5 rounded-lg hdr-btn cursor-pointer transition-colors outline-none",
  "data-testid": "user-menu"
}, It = { class: "hidden lg:block text-sm font-semibold hdr-ink whitespace-nowrap" }, Rt = { class: "w-60" }, jt = { class: "flex items-center gap-3 px-2 py-2.5 mb-1 border-b border-border-soft" }, Tt = { class: "min-w-0" }, Pt = { class: "text-sm font-semibold text-foreground truncate" }, Kt = { class: "text-xs text-faint truncate" }, Bt = {
  key: 0,
  class: "app-band"
}, Ft = { class: "page-container flex items-stretch gap-3" }, Ht = {
  key: 0,
  class: "tabs tabs--band min-w-0 overflow-x-auto no-scrollbar",
  role: "tablist",
  "data-testid": "app-nav"
}, Gt = ["aria-selected", "onClick"], Jt = {
  key: 1,
  class: "badge"
}, Wt = ["aria-selected", "data-testid"], Yt = {
  key: 1,
  class: "band-group__current"
}, Qt = {
  class: "min-w-56 flex flex-col",
  role: "menu"
}, Xt = ["aria-selected", "disabled", "aria-disabled", "onClick"], Zt = { class: "flex-1" }, qt = {
  key: 1,
  class: "app-band__end",
  "data-testid": "app-band-end"
}, ea = ["aria-current", "title", "onClick"], ta = {
  key: 1,
  class: "side-initial"
}, aa = { class: "side-label" }, sa = {
  key: 2,
  class: "badge side-label"
}, la = ["data-testid"], na = { class: "nav-group side-label" }, oa = ["disabled", "aria-disabled", "aria-current", "title", "onClick"], ia = {
  key: 1,
  class: "side-initial"
}, ra = { class: "side-label" }, da = ["aria-pressed", "title"], ca = {
  key: 0,
  class: "side-label"
}, fe = "sapp:sidebar-collapsed", be = "sapp:app-last-used", _e = "sapp:recent-apps", ua = /* @__PURE__ */ Pe({
  __name: "Header",
  props: {
    layout: { default: "band" }
  },
  setup(ye) {
    const ke = ye, w = h(() => ke.layout === "sidebar"), y = b((() => {
      try {
        return localStorage.getItem(fe) === "true";
      } catch {
        return !1;
      }
    })()), we = () => {
      y.value = !y.value;
      try {
        localStorage.setItem(fe, String(y.value));
      } catch {
      }
    }, c = Ke("$superApp"), X = c.getModuleState("shell.layout", { sidebar: !1 });
    N(w, (e) => {
      X.sidebar = e;
    }, { immediate: !0 }), Be(() => {
      w.value && (X.sidebar = !1);
    });
    const V = c, M = We(), Z = Ye(), D = V.$appState, F = V.$themeConfig, $ = h(() => V.$config?.branding ?? null), xe = h(() => F?.state?.mode === "dark" || F?.state?.mode === "system" && window.matchMedia?.("(prefers-color-scheme: dark)").matches), Se = ["brand", "gradient", "dark"], q = h(() => xe.value || Se.includes(F?.state?.header)), C = V.$i18n, H = b(!1), $e = { vi: "Tiếng Việt", en: "English", ja: "日本語", ko: "한국어", zh: "中文", fr: "Français", de: "Deutsch" }, Ae = (e) => {
      C?.setLocale(e), H.value = !1;
    }, Ce = h(
      () => le.value.map((e) => ({ key: `app:${e.id}`, id: e.id, label: e.label, detail: e.detail, icon: e.icon, run: () => Te(e.path) }))
    ), ee = h(() => c?.getModuleState?.("home", { favorites: [] })), Le = h(() => ee.value?.favorites ?? []), U = (e) => Le.value.includes(e), ze = (e) => ee.value?.toggleFavorite?.(e), te = (e) => {
      const a = (e || "").trim().toLowerCase(), t = (k) => !a || `${k.label} ${k.detail || ""} ${k.id}`.toLowerCase().includes(a), i = [...Ce.value.filter(t)].sort((k, W) => {
        const ce = Number(U(W.key)) - Number(U(k.key));
        if (ce !== 0) return ce;
        const ue = (L.value[W.id] ?? 0) - (L.value[k.id] ?? 0);
        return ue !== 0 ? ue : String(k.label).localeCompare(String(W.label));
      });
      return i.length ? [{ key: "apps", label: "", tiles: i }] : [];
    }, L = b((() => {
      try {
        const e = JSON.parse(localStorage.getItem(be) || "null");
        if (e && typeof e == "object" && !Array.isArray(e))
          return Object.fromEntries(Object.entries(e).filter(([, o]) => typeof o == "number"));
        const a = JSON.parse(localStorage.getItem(_e) || "[]"), t = Date.now();
        return Array.isArray(a) ? Object.fromEntries(a.filter((o) => typeof o == "string").map((o, i) => [o, t - i * 1e3])) : {};
      } catch {
        return {};
      }
    })()), Ee = (e) => {
      L.value = { ...L.value, [e]: Date.now() };
      try {
        localStorage.setItem(be, JSON.stringify(L.value)), localStorage.removeItem(_e);
      } catch {
      }
    }, ae = (e) => {
      const a = L.value[e];
      return a ? V.$f?.formatRelative?.(new Date(a).toISOString()) ?? new Date(a).toLocaleString() : "";
    }, I = b(!1), Ve = (e) => {
      I.value = e;
    }, R = b(!1);
    b(!1);
    const f = b(null), E = b([]), j = b([]), Me = (e) => Je(e), se = () => {
      typeof c?.getRegisteredApps == "function" && (j.value = c.getRegisteredApps());
    }, De = ["superadmin", "admin"], Oe = h(() => c?.$policy?.can?.("role", De) ?? !1), le = h(() => (j.value.length > 0 ? j.value : [
      { id: "workspace", name: "Workspace Hub", url: "http://localhost:4409", icon: "Globe", description: "Logic Orchestration", isEnabled: !0 },
      { id: "admin", name: "Admin Management", url: "http://localhost:4403", icon: "Shield", description: "Platform Governance", isEnabled: !0 }
    ]).filter((a) => a.isEnabled !== !1).filter((a) => (a.code ?? a.id) !== "admin" || Oe.value).map((a) => ({
      id: a.id,
      label: a.name,
      // Routes follow the slug (changeable); the id stays the key.
      path: typeof c.appPath == "function" ? c.appPath(a.id, (a.code ?? a.id) === "admin" ? "apps" : "") : `/app/${a.slug || a.id}`,
      icon: Me(a.icon),
      detail: a.description || "Micro-Frontend App"
    }))), T = c.getModuleState("shell.band", { end: [] }), m = c.getModuleState("shell.nav", { moduleId: "", title: "", icon: null, items: [], active: "", navigate: null }), ne = h(() => Z.path.startsWith("/app/")), A = h(() => {
      let e = ne.value ? D.current_app : null;
      e === "expose" && (e = "workspace");
      const a = e && le.value.find((t) => t.id === e);
      return a || (e && m.title ? { id: e, label: m.title, icon: m.icon || ve } : { id: "default", label: C?.t("shell.apps") ?? "Apps", icon: ve });
    }), oe = h(() => ne.value && m.items.length > 0);
    N(() => A.value.id, (e) => {
      e && e !== "default" && Ee(e);
    }, { immediate: !0 });
    const ie = async (e) => {
      if (!e || e === "default" || typeof c.loadAppManifest != "function") return null;
      const a = await c.loadAppManifest(e);
      if (!a) return null;
      const t = String(a.version ?? "dev");
      return c.getRegisteredApps?.().find((i) => i.id === e)?.channel === "stable" ? { label: "stable", title: `stable · ${t}` } : { label: t, title: t };
    }, P = b(""), G = b("");
    N(() => [A.value.id, A.value.version], async ([e]) => {
      P.value = "", G.value = "";
      const a = await ie(e);
      A.value.id !== e || !a || (P.value = a.label, G.value = a.title);
    }, { immediate: !0 });
    const O = b({}), Ne = () => {
      for (const e of Ue()) {
        const a = `${e.id}@${e.version ?? ""}`;
        re.has(a) || (re.add(a), ie(e.id).then((t) => {
          t && (O.value = { ...O.value, [e.id]: t });
        }));
      }
    }, re = /* @__PURE__ */ new Set(), Ue = () => typeof c?.getRegisteredApps == "function" ? c.getRegisteredApps() : [];
    N(I, (e) => {
      e && Ne();
    });
    const de = h(() => {
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
    }), J = (e) => e.find((a) => m.active === a.path) ?? null, K = h({
      get: () => D.current_workspace,
      set: (e) => {
        D.current_workspace = e;
      }
    });
    h(() => E.value.find((e) => String(e.id) === String(K.value)) || E.value[0]), N(() => Z.params.moduleId, (e) => {
      const a = Array.isArray(e) ? e[0] : e, t = a && (c.findAppByRoute?.(a)?.id ?? a);
      t && D.current_app !== t && (D.current_app = t);
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
    const Re = async () => {
      try {
        const e = await c.doAction("workspace.list");
        E.value = e || [];
        const a = E.value.find((t) => String(t.id) === String(K.value));
        (!K.value || !a) && E.value.length > 0 && (K.value = String(E.value[0].id));
      } catch {
      }
    }, je = async () => {
      c.emit?.(at.AUTH_LOGOUT);
      try {
        c.doAction("auth.logout"), localStorage.removeItem("accessToken"), M.push("/login").catch(() => {
          window.location.href = "/login";
        });
      } catch {
        localStorage.removeItem("accessToken"), window.location.href = "/login";
      }
    }, Te = (e) => {
      I.value = !1, M.push(e);
    };
    return Fe(() => {
      Ie(), Re(), se(), typeof c?.on == "function" && c.on("apps:updated", (e) => {
        Array.isArray(e) ? j.value = e : se();
      });
    }), (e, a) => (s(), n("div", lt, [
      l("header", nt, [
        l("div", {
          class: z(["shell-header__row shell-header__wide", w.value && "is-sidebar"])
        }, [
          l("div", {
            class: z(["flex items-center min-w-0 justify-self-start", w.value && "hidden"])
          }, [
            (s(), p(pe, {
              defer: "",
              to: "#shell-sidebar",
              disabled: !w.value
            }, [
              l("div", {
                class: z(["flex items-center shrink-0 min-w-0", w.value && ["side-switch", y.value && "is-collapsed"]])
              }, [
                (s(), p(v(e.$c("ui.dropdown")), {
                  class: "app-switch",
                  modelValue: I.value,
                  "onUpdate:modelValue": a[0] || (a[0] = (t) => Ve(t)),
                  search: "",
                  "search-placeholder": e.$t("shell.searchApps")
                }, {
                  trigger: x(() => [
                    l("button", {
                      type: "button",
                      class: "app-chip flex items-center gap-2 transition-colors outline-none group/app",
                      title: e.$t("shell.apps"),
                      "aria-label": e.$t("shell.apps"),
                      "data-testid": "apps-switch"
                    }, [
                      l("span", {
                        class: z(["w-7 h-7 rounded-md grid place-items-center shrink-0 transition-colors", A.value.id === "default" ? "bg-muted text-muted-foreground" : "bg-primary-soft text-primary"])
                      }, [
                        (s(), p(v(A.value.icon), { size: 16 }))
                      ], 2),
                      l("span", it, d(A.value.label), 1),
                      P.value ? (s(), n("span", {
                        key: 0,
                        class: "app-version",
                        "data-testid": "current-app-version",
                        title: G.value
                      }, d(P.value), 9, rt)) : u("", !0),
                      _(r(B), {
                        size: 14,
                        class: "text-faint group-hover/app:text-foreground transition-colors"
                      })
                    ], 8, ot)
                  ]),
                  content: x(({ query: t }) => [
                    l("div", dt, [
                      l("div", ct, [
                        te(t).length ? u("", !0) : (s(), n("div", ut, d(e.$t("common.empty")), 1)),
                        (s(!0), n(g, null, S(te(t), (o) => (s(), n("section", {
                          key: o.key,
                          class: "pt-1 last:pb-3",
                          "data-testid": `apps-section-${o.key}`
                        }, [
                          o.label ? (s(), n("div", vt, [
                            Y(d(o.label), 1),
                            l("span", mt, d(o.tiles.length), 1)
                          ])) : u("", !0),
                          l("div", ht, [
                            (s(!0), n(g, null, S(o.tiles, (i) => (s(), n("div", {
                              key: i.key,
                              role: "button",
                              tabindex: "0",
                              class: "apps-item group",
                              "aria-current": i.id === A.value.id ? "true" : void 0,
                              onClick: (k) => i.run(),
                              onKeydown: He((k) => i.run(), ["enter"])
                            }, [
                              l("span", ft, [
                                (s(), p(v(i.icon), {
                                  size: 16,
                                  "stroke-width": "1.75"
                                }))
                              ]),
                              l("span", bt, [
                                l("span", _t, [
                                  l("span", yt, d(i.label), 1),
                                  O.value[i.id] ? (s(), n("span", {
                                    key: 0,
                                    class: "tile-version",
                                    title: O.value[i.id].title,
                                    "data-testid": "tile-version"
                                  }, d(O.value[i.id].label), 9, kt)) : u("", !0)
                                ])
                              ]),
                              ae(i.id) ? (s(), n("span", {
                                key: 0,
                                class: "apps-item__used",
                                title: new Date(L.value[i.id]).toLocaleString(),
                                "data-testid": "tile-last-used"
                              }, d(ae(i.id)), 9, wt)) : u("", !0),
                              l("button", {
                                type: "button",
                                class: "icon-btn apps-item__star",
                                "aria-pressed": U(i.key),
                                "aria-label": e.$t("shell.toggleFavorite"),
                                "data-testid": "tile-star",
                                onClick: Q((k) => ze(i.key), ["stop"])
                              }, [
                                _(r(Qe), {
                                  size: 14,
                                  class: z(U(i.key) ? "fill-warning text-warning" : "text-faint")
                                }, null, 8, ["class"])
                              ], 8, xt)
                            ], 40, gt))), 128))
                          ])
                        ], 8, pt))), 128))
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue", "search-placeholder"]))
              ], 2)
            ], 8, ["disabled"]))
          ], 2),
          l("div", St, [
            l("div", {
              class: "flex items-center gap-3 cursor-pointer group/logo",
              "data-testid": "brand",
              title: $.value?.name,
              onClick: a[1] || (a[1] = (t) => r(M).push($.value?.homePath || "/"))
            }, [
              $.value?.logo ? (s(), n(g, { key: 0 }, [
                q.value && $.value.logoDark ? (s(), n("img", {
                  key: 0,
                  src: $.value.logoDark,
                  alt: $.value.name,
                  class: "h-7 w-auto max-w-[200px] object-contain"
                }, null, 8, At)) : (s(), n("span", {
                  key: 1,
                  class: z(["inline-flex items-center rounded-md", q.value && "bg-white/95 px-2 py-1"])
                }, [
                  l("img", {
                    src: $.value.logo,
                    alt: $.value.name,
                    class: "h-7 w-auto max-w-[200px] object-contain"
                  }, null, 8, Ct)
                ], 2))
              ], 64)) : (s(), n(g, { key: 1 }, [
                a[8] || (a[8] = Ge('<div class="relative" data-v-5c02d83b><div class="w-9 h-9 bg-primary rounded-xl flex items-center justify-center relative z-10 transition-transform group-hover/logo:scale-110 shadow-xl border border-border-soft" data-v-5c02d83b><span class="text-primary-foreground font-black text-xs tracking-tighter" data-v-5c02d83b>MP</span></div></div><div class="flex flex-col text-left" data-v-5c02d83b><span class="text-[11px] font-black uppercase tracking-[0.4em] hdr-ink transition-colors leading-none mb-1" data-v-5c02d83b>Antigravity</span><span class="text-[9px] font-black uppercase tracking-[0.2em] hdr-faint" data-v-5c02d83b>Core OS v5</span></div>', 2))
              ], 64))
            ], 8, $t)
          ]),
          l("div", Lt, [
            w.value && r(T).end?.length ? (s(), n("div", zt, [
              (s(!0), n(g, null, S(r(T).end, (t, o) => (s(), p(v(t), { key: o }))), 128))
            ])) : u("", !0),
            l("div", Et, [
              r(C) ? (s(), p(v(e.$c("ui.dropdown")), {
                key: 0,
                modelValue: H.value,
                "onUpdate:modelValue": a[2] || (a[2] = (t) => H.value = t),
                align: "right"
              }, {
                trigger: x(() => [
                  l("button", {
                    type: "button",
                    class: "h-9 px-2 rounded-lg flex items-center gap-1 whitespace-nowrap shrink-0 hdr-btn transition-colors outline-none",
                    title: e.$t("shell.language"),
                    "aria-label": e.$t("shell.language"),
                    "data-testid": "lang-switch"
                  }, [
                    _(he, {
                      locale: r(C).locale,
                      size: 20
                    }, null, 8, ["locale"]),
                    _(r(B), {
                      size: 13,
                      class: "hdr-faint"
                    })
                  ], 8, Vt)
                ]),
                content: x(() => [
                  l("div", Mt, [
                    l("div", Dt, d(e.$t("shell.language")), 1),
                    (s(!0), n(g, null, S(r(C).availableLocales, (t) => (s(), n("button", {
                      key: t,
                      type: "button",
                      class: "pop-item justify-between whitespace-nowrap",
                      "aria-selected": r(C).locale === t,
                      onClick: (o) => Ae(t)
                    }, [
                      l("span", Nt, [
                        _(he, {
                          locale: t,
                          size: 22
                        }, null, 8, ["locale"]),
                        l("span", null, d($e[t] ?? t), 1)
                      ]),
                      r(C).locale === t ? (s(), p(r(me), {
                        key: 0,
                        size: 14,
                        class: "text-primary"
                      })) : u("", !0)
                    ], 8, Ot))), 128))
                  ])
                ]),
                _: 1
              }, 8, ["modelValue"])) : u("", !0)
            ]),
            a[10] || (a[10] = l("div", { class: "h-6 w-px hdr-sep mx-1 hidden md:block" }, null, -1)),
            (s(), p(v(e.$c("ui.dropdown")), {
              modelValue: R.value,
              "onUpdate:modelValue": a[5] || (a[5] = (t) => R.value = t),
              align: "right"
            }, {
              trigger: x(() => [
                l("button", Ut, [
                  l("span", It, d(f.value?.username || "User"), 1),
                  _(ge, {
                    src: f.value?.avatar,
                    name: f.value?.username || "User",
                    size: 28,
                    rounded: "lg"
                  }, null, 8, ["src", "name"]),
                  _(r(B), {
                    size: 13,
                    class: "hdr-faint"
                  })
                ])
              ]),
              content: x(() => [
                l("div", Rt, [
                  l("div", jt, [
                    _(ge, {
                      src: f.value?.avatar,
                      name: f.value?.username || "User",
                      size: 36,
                      rounded: "lg"
                    }, null, 8, ["src", "name"]),
                    l("div", Tt, [
                      l("div", Pt, d(f.value?.username), 1),
                      l("div", Kt, d(f.value?.email || f.value?.role), 1)
                    ])
                  ]),
                  l("button", {
                    type: "button",
                    class: "pop-item",
                    "data-testid": "menu-profile",
                    onClick: a[3] || (a[3] = (t) => {
                      r(M).push("/account/profile"), R.value = !1;
                    })
                  }, [
                    _(r(Xe), {
                      size: 15,
                      class: "text-muted-foreground"
                    }),
                    l("span", null, d(e.$t("shell.profile")), 1)
                  ]),
                  l("button", {
                    type: "button",
                    class: "pop-item",
                    onClick: a[4] || (a[4] = (t) => {
                      r(M).push("/system/theme"), R.value = !1;
                    })
                  }, [
                    _(r(Ze), {
                      size: 15,
                      class: "text-muted-foreground"
                    }),
                    l("span", null, d(e.$t("system.themeStudio", { default: "Theme Studio" })), 1)
                  ]),
                  a[9] || (a[9] = l("div", { class: "pop-sep" }, null, -1)),
                  l("button", {
                    type: "button",
                    class: "pop-item danger",
                    onClick: je
                  }, [
                    _(r(qe), { size: 15 }),
                    l("span", null, d(e.$t("shell.logout")), 1)
                  ])
                ])
              ]),
              _: 1
            }, 8, ["modelValue"]))
          ])
        ], 2)
      ]),
      w.value ? u("", !0) : (s(), n("div", Bt, [
        l("div", Ft, [
          oe.value ? (s(), n("nav", Ht, [
            (s(!0), n(g, null, S(de.value, (t) => (s(), n(g, {
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
                t.item.badge !== void 0 ? (s(), n("span", Jt, d(t.item.badge), 1)) : u("", !0)
              ], 40, Gt)) : (s(), p(v(e.$c("ui.popover")), {
                key: 1,
                class: "band-group",
                align: "start"
              }, {
                default: x(({ close: o }) => [
                  (s(), p(v(e.$c("ui.popover-trigger")), { class: "band-group__trigger" }, {
                    default: x(() => [
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
                        J(t.items) ? (s(), n("span", Yt, "· " + d(J(t.items).label), 1)) : u("", !0),
                        _(r(B), { size: 12 })
                      ], 40, Wt)
                    ]),
                    _: 2
                  }, 1024)),
                  (s(), p(v(e.$c("ui.popover-content")), {
                    align: "start",
                    class: "p-1"
                  }, {
                    default: x(() => [
                      l("div", Qt, [
                        (s(!0), n(g, null, S(t.items, (i) => (s(), n("button", {
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
                          l("span", Zt, d(i.label), 1),
                          r(m).active === i.path ? (s(), p(r(me), {
                            key: 1,
                            size: 14,
                            class: "text-primary"
                          })) : u("", !0)
                        ], 8, Xt))), 128))
                      ])
                    ]),
                    _: 2
                  }, 1024))
                ]),
                _: 2
              }, 1024))
            ], 64))), 128))
          ])) : u("", !0),
          r(T).end?.length ? (s(), n("div", qt, [
            (s(!0), n(g, null, S(r(T).end, (t, o) => (s(), p(v(t), { key: o }))), 128))
          ])) : u("", !0)
        ])
      ])),
      w.value ? (s(), p(pe, {
        key: 1,
        defer: "",
        to: "#shell-sidebar"
      }, [
        l("nav", {
          class: z(["side-nav", y.value && "is-collapsed"]),
          "data-testid": "app-nav"
        }, [
          oe.value ? (s(!0), n(g, { key: 0 }, S(de.value, (t) => (s(), n(g, {
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
              t.item.icon ? (s(), p(v(t.item.icon), { key: 0 })) : (s(), n("span", ta, d(String(t.item.label).charAt(0)), 1)),
              l("span", aa, d(t.item.label), 1),
              t.item.badge !== void 0 ? (s(), n("span", sa, d(t.item.badge), 1)) : u("", !0)
            ], 8, ea)) : (s(), n("div", {
              key: 1,
              class: "side-group",
              "data-testid": `app-nav-group-${t.group}`
            }, [
              l("div", na, d(t.group), 1),
              (s(!0), n(g, null, S(t.items, (o) => (s(), n("button", {
                key: o.path,
                type: "button",
                class: "nav-item side-item",
                disabled: o.disabled,
                "aria-disabled": o.disabled || void 0,
                "aria-current": r(m).active === o.path ? "page" : void 0,
                title: y.value ? o.label : void 0,
                onClick: (i) => r(m).navigate?.(o.path)
              }, [
                o.icon ? (s(), p(v(o.icon), { key: 0 })) : (s(), n("span", ia, d(String(o.label).charAt(0)), 1)),
                l("span", ra, d(o.label), 1)
              ], 8, oa))), 128))
            ], 8, la))
          ], 64))), 128)) : u("", !0)
        ], 2),
        l("button", {
          type: "button",
          class: "side-collapse",
          "aria-pressed": y.value,
          title: y.value ? "Expand the sidebar" : "Collapse the sidebar",
          "data-testid": "sidebar-collapse",
          onClick: we
        }, [
          (s(), p(v(y.value ? r(et) : r(tt)), { size: 16 })),
          y.value ? u("", !0) : (s(), n("span", ca, "Collapse"))
        ], 8, da)
      ])) : u("", !0)
    ]));
  }
}), wa = /* @__PURE__ */ st(ua, [["__scopeId", "data-v-5c02d83b"]]);
export {
  wa as default
};
//# sourceMappingURL=Header-CtNUv46F.js.map
