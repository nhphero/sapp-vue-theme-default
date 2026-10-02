import { defineComponent as Pe, computed as h, ref as x, inject as Ke, watch as N, onBeforeUnmount as Fe, onMounted as Be, openBlock as a, createElementBlock as n, createElementVNode as l, normalizeClass as L, createBlock as c, Teleport as he, resolveDynamicComponent as v, withCtx as $, toDisplayString as d, createCommentVNode as u, Fragment as g, renderList as S, createTextVNode as W, withKeys as He, withModifiers as Q, createVNode as b, unref as r, createStaticVNode as Je } from "vue";
import { appIcon as Ye } from "../index.js";
import { useRouter as Ge, useRoute as We } from "vue-router";
import { LayoutGrid as me, Star as Qe, ChevronDown as T, Check as ge, User as Xe, Palette as Ze, LogOut as qe, PanelLeftOpen as et, PanelLeftClose as tt } from "lucide-vue-next";
import { SUPERAPP_EVENTS as at } from "@nhphero/vue-sapp/contracts";
import { L as fe } from "./LocaleFlag-C6SPRotW.js";
import { _ as be } from "./UserAvatar.vue_vue_type_script_setup_true_lang-AXBFwsc7.js";
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
}, ht = { class: "text-faint font-normal" }, mt = { class: "apps-list" }, gt = ["aria-current", "onClick", "onKeydown"], ft = { class: "apps-item__icon" }, bt = { class: "apps-item__text" }, _t = { class: "apps-item__name" }, yt = { class: "truncate" }, kt = ["title"], wt = ["title"], xt = ["aria-pressed", "aria-label", "onClick"], $t = { class: "flex items-center justify-center min-w-0" }, St = ["title"], At = ["src", "alt"], Ct = ["src", "alt"], Lt = {
  key: 2,
  class: "hidden lg:block hdr-tagline border-l hdr-line"
}, zt = { class: "flex items-center gap-2 justify-self-end" }, Et = {
  key: 0,
  class: "flex items-center gap-1",
  "data-testid": "app-band-end"
}, Vt = { class: "hidden md:flex items-center gap-1 flex-nowrap shrink-0" }, Dt = ["title", "aria-label"], Mt = { class: "w-52" }, Ot = { class: "pop-head" }, Nt = ["aria-selected", "onClick"], Ut = { class: "flex items-center gap-2.5" }, It = {
  type: "button",
  class: "h-9 flex items-center gap-2 pl-2.5 pr-1.5 rounded-lg hdr-btn cursor-pointer transition-colors outline-none",
  "data-testid": "user-menu"
}, Rt = { class: "hidden lg:block text-sm font-semibold hdr-ink whitespace-nowrap" }, jt = { class: "w-60" }, Tt = { class: "flex items-center gap-3 px-2 py-2.5 mb-1 border-b border-border-soft" }, Pt = { class: "min-w-0" }, Kt = { class: "text-sm font-semibold text-foreground truncate" }, Ft = { class: "text-xs text-faint truncate" }, Bt = { class: "page-container flex items-stretch gap-3" }, Ht = {
  key: 0,
  id: "shell-band-switch",
  class: "flex items-center shrink-0"
}, Jt = {
  key: 1,
  class: "app-band__sep",
  "aria-hidden": "true"
}, Yt = {
  key: 2,
  class: "tabs tabs--band min-w-0 overflow-x-auto no-scrollbar",
  role: "tablist",
  "data-testid": "app-nav"
}, Gt = ["aria-selected", "onClick"], Wt = {
  key: 1,
  class: "badge"
}, Qt = ["aria-selected", "data-testid"], Xt = {
  key: 1,
  class: "band-group__current"
}, Zt = {
  class: "min-w-56 flex flex-col",
  role: "menu"
}, qt = ["aria-selected", "disabled", "aria-disabled", "onClick"], ea = { class: "flex-1" }, ta = {
  key: 3,
  class: "app-band__end",
  "data-testid": "app-band-end"
}, aa = ["aria-current", "title", "onClick"], sa = {
  key: 1,
  class: "side-initial"
}, la = { class: "side-label" }, na = {
  key: 2,
  class: "badge side-label"
}, oa = ["data-testid"], ia = { class: "nav-group side-label" }, ra = ["disabled", "aria-disabled", "aria-current", "title", "onClick"], da = {
  key: 1,
  class: "side-initial"
}, ca = { class: "side-label" }, ua = ["aria-pressed", "title"], pa = {
  key: 0,
  class: "side-label"
}, _e = "sapp:sidebar-collapsed", ye = "sapp:app-last-used", ke = "sapp:recent-apps", va = /* @__PURE__ */ Pe({
  __name: "Header",
  props: {
    layout: { default: "band" }
  },
  setup(we) {
    const X = we, k = h(() => X.layout === "sidebar"), A = h(() => X.layout === "classic"), f = x((() => {
      try {
        return localStorage.getItem(_e) === "true";
      } catch {
        return !1;
      }
    })()), xe = () => {
      f.value = !f.value;
      try {
        localStorage.setItem(_e, String(f.value));
      } catch {
      }
    }, p = Ke("$superApp"), Z = p.getModuleState("shell.layout", { sidebar: !1 });
    N(k, (e) => {
      Z.sidebar = e;
    }, { immediate: !0 }), Fe(() => {
      k.value && (Z.sidebar = !1);
    });
    const V = p, D = Ge(), q = We(), P = V.$appState, K = V.$themeConfig, w = h(() => V.$config?.branding ?? null), $e = h(() => K?.state?.mode === "dark" || K?.state?.mode === "system" && window.matchMedia?.("(prefers-color-scheme: dark)").matches), Se = ["brand", "gradient", "dark"], ee = h(() => $e.value || Se.includes(K?.state?.header)), z = V.$i18n, F = x(!1), Ae = { vi: "Tiếng Việt", en: "English", ja: "日本語", ko: "한국어", zh: "中文", fr: "Français", de: "Deutsch" }, Ce = (e) => {
      z?.setLocale(e), F.value = !1;
    }, Le = h(
      () => ne.value.map((e) => ({ key: `app:${e.id}`, id: e.id, label: e.label, detail: e.detail, icon: e.icon, run: () => Te(e.path) }))
    ), te = h(() => p?.getModuleState?.("home", { favorites: [] })), ze = h(() => te.value?.favorites ?? []), U = (e) => ze.value.includes(e), Ee = (e) => te.value?.toggleFavorite?.(e), ae = (e) => {
      const s = (e || "").trim().toLowerCase(), t = (y) => !s || `${y.label} ${y.detail || ""} ${y.id}`.toLowerCase().includes(s), i = [...Le.value.filter(t)].sort((y, G) => {
        const pe = Number(U(G.key)) - Number(U(y.key));
        if (pe !== 0) return pe;
        const ve = (E.value[G.id] ?? 0) - (E.value[y.id] ?? 0);
        return ve !== 0 ? ve : String(y.label).localeCompare(String(G.label));
      });
      return i.length ? [{ key: "apps", label: "", tiles: i }] : [];
    }, E = x((() => {
      try {
        const e = JSON.parse(localStorage.getItem(ye) || "null");
        if (e && typeof e == "object" && !Array.isArray(e))
          return Object.fromEntries(Object.entries(e).filter(([, o]) => typeof o == "number"));
        const s = JSON.parse(localStorage.getItem(ke) || "[]"), t = Date.now();
        return Array.isArray(s) ? Object.fromEntries(s.filter((o) => typeof o == "string").map((o, i) => [o, t - i * 1e3])) : {};
      } catch {
        return {};
      }
    })()), Ve = (e) => {
      E.value = { ...E.value, [e]: Date.now() };
      try {
        localStorage.setItem(ye, JSON.stringify(E.value)), localStorage.removeItem(ke);
      } catch {
      }
    }, se = (e) => {
      const s = E.value[e];
      return s ? V.$f?.formatRelative?.(new Date(s).toISOString()) ?? new Date(s).toLocaleString() : "";
    }, I = x(!1), De = (e) => {
      I.value = e;
    }, M = x(!1), _ = x(null), B = x([]), Me = (e) => Ye(e), le = () => {
      typeof p?.getRegisteredApps == "function" && (B.value = p.getRegisteredApps());
    }, Oe = ["superadmin", "admin"], Ne = h(() => p?.$policy?.can?.("role", Oe) ?? !1), ne = h(() => B.value.filter((e) => e.isEnabled !== !1).filter((e) => (e.code ?? e.id) !== "admin" || Ne.value).map((e) => ({
      id: e.id,
      label: e.name,
      // Routes follow the slug (changeable); the id stays the key.
      path: typeof p.appPath == "function" ? p.appPath(e.id, (e.code ?? e.id) === "admin" ? "apps" : "") : `/app/${e.slug || e.id}`,
      icon: Me(e.icon),
      detail: e.description || "Micro-Frontend App"
    }))), R = p.getModuleState("shell.band", { end: [] }), oe = h(() => p?.$hook?.entries?.("shell.menu.end")?.length ?? 0), m = p.getModuleState("shell.nav", { moduleId: "", title: "", icon: null, items: [], active: "", navigate: null }), ie = h(() => q.path.startsWith("/app/")), C = h(() => {
      const e = ie.value ? P.current_app : null, s = e && ne.value.find((t) => t.id === e);
      return s || (e && m.title ? { id: e, label: m.title, icon: m.icon || me } : { id: "default", label: z?.t("shell.apps") ?? "Apps", icon: me });
    }), H = h(() => ie.value && m.items.length > 0);
    N(() => C.value.id, (e) => {
      e && e !== "default" && Ve(e);
    }, { immediate: !0 });
    const re = async (e) => {
      if (!e || e === "default" || typeof p.loadAppManifest != "function") return null;
      const s = await p.loadAppManifest(e);
      if (!s) return null;
      const t = String(s.version ?? "dev");
      return p.getRegisteredApps?.().find((i) => i.id === e)?.channel === "stable" ? { label: "stable", title: `stable · ${t}` } : { label: t, title: t };
    }, j = x(""), J = x("");
    N(() => [C.value.id, C.value.version], async ([e]) => {
      j.value = "", J.value = "";
      const s = await re(e);
      C.value.id !== e || !s || (j.value = s.label, J.value = s.title);
    }, { immediate: !0 });
    const O = x({}), Ue = () => {
      for (const e of Ie()) {
        const s = `${e.id}@${e.version ?? ""}`;
        de.has(s) || (de.add(s), re(e.id).then((t) => {
          t && (O.value = { ...O.value, [e.id]: t });
        }));
      }
    }, de = /* @__PURE__ */ new Set(), Ie = () => typeof p?.getRegisteredApps == "function" ? p.getRegisteredApps() : [];
    N(I, (e) => {
      e && Ue();
    });
    const ce = h(() => {
      const e = [];
      for (const s of m.items) {
        if (!s.group) {
          e.push({ group: null, item: s });
          continue;
        }
        const t = e.find((o) => o.group === s.group);
        t ? (t.items.push(s), t.icon ??= s.groupIcon) : e.push({ group: s.group, icon: s.groupIcon, items: [s] });
      }
      return e;
    }), Y = (e) => e.find((s) => m.active === s.path) ?? null;
    N(() => q.params.moduleId, (e) => {
      const s = Array.isArray(e) ? e[0] : e, t = s && (p.findAppByRoute?.(s)?.id ?? s);
      t && P.current_app !== t && (P.current_app = t);
    }, { immediate: !0 });
    const Re = async () => {
      try {
        _.value = await p.doAction("auth.me");
      } catch {
        try {
          _.value = JSON.parse(localStorage.getItem("user") || "null");
        } catch {
        }
      }
    };
    p.on?.("auth:profile-updated", (e) => {
      _.value = { ..._.value || {}, ...e };
    });
    const ue = h(() => _.value?.avatar || p?.$authState?.user?.avatar || null), je = async () => {
      p.emit?.(at.AUTH_LOGOUT);
      try {
        p.doAction("auth.logout"), localStorage.removeItem("accessToken"), D.push("/login").catch(() => {
          window.location.href = "/login";
        });
      } catch {
        localStorage.removeItem("accessToken"), window.location.href = "/login";
      }
    }, Te = (e) => {
      I.value = !1, D.push(e);
    };
    return Be(() => {
      Re(), le(), typeof p?.on == "function" && p.on("apps:updated", (e) => {
        Array.isArray(e) ? B.value = e : le();
      });
    }), (e, s) => (a(), n("div", lt, [
      l("header", nt, [
        l("div", {
          class: L(["shell-header__row shell-header__wide", [k.value && "is-sidebar", A.value && "is-classic"]])
        }, [
          l("div", {
            class: L(["flex items-center min-w-0 justify-self-start", (k.value || A.value) && "hidden"])
          }, [
            (a(), c(he, {
              defer: "",
              to: k.value ? "#shell-sidebar" : "#shell-band-switch",
              disabled: !k.value && !A.value
            }, [
              l("div", {
                class: L(["flex items-center shrink-0 min-w-0", [k.value && ["side-switch", f.value && "is-collapsed"], A.value && "band-switch"]])
              }, [
                (a(), c(v(e.$c("ui.dropdown")), {
                  class: "app-switch",
                  modelValue: I.value,
                  "onUpdate:modelValue": s[0] || (s[0] = (t) => De(t)),
                  search: "",
                  "search-placeholder": e.$t("shell.searchApps")
                }, {
                  trigger: $(() => [
                    l("button", {
                      type: "button",
                      class: "app-chip flex items-center gap-2 transition-colors outline-none group/app",
                      title: e.$t("shell.apps"),
                      "aria-label": e.$t("shell.apps"),
                      "data-testid": "apps-switch"
                    }, [
                      l("span", {
                        class: L(["w-7 h-7 rounded-md grid place-items-center shrink-0 transition-colors", C.value.id === "default" ? "bg-muted text-muted-foreground" : "bg-primary-soft text-primary"])
                      }, [
                        (a(), c(v(C.value.icon), { size: 16 }))
                      ], 2),
                      l("span", it, d(C.value.label), 1),
                      j.value ? (a(), n("span", {
                        key: 0,
                        class: "app-version",
                        "data-testid": "current-app-version",
                        title: J.value
                      }, d(j.value), 9, rt)) : u("", !0),
                      b(r(T), {
                        size: 14,
                        class: "text-faint group-hover/app:text-foreground transition-colors"
                      })
                    ], 8, ot)
                  ]),
                  content: $(({ query: t }) => [
                    l("div", dt, [
                      l("div", ct, [
                        ae(t).length ? u("", !0) : (a(), n("div", ut, d(e.$t("common.empty")), 1)),
                        (a(!0), n(g, null, S(ae(t), (o) => (a(), n("section", {
                          key: o.key,
                          class: "pt-1 last:pb-3",
                          "data-testid": `apps-section-${o.key}`
                        }, [
                          o.label ? (a(), n("div", vt, [
                            W(d(o.label), 1),
                            l("span", ht, d(o.tiles.length), 1)
                          ])) : u("", !0),
                          l("div", mt, [
                            (a(!0), n(g, null, S(o.tiles, (i) => (a(), n("div", {
                              key: i.key,
                              role: "button",
                              tabindex: "0",
                              class: "apps-item group",
                              "aria-current": i.id === C.value.id ? "true" : void 0,
                              onClick: (y) => i.run(),
                              onKeydown: He((y) => i.run(), ["enter"])
                            }, [
                              l("span", ft, [
                                (a(), c(v(i.icon), {
                                  size: 16,
                                  "stroke-width": "1.75"
                                }))
                              ]),
                              l("span", bt, [
                                l("span", _t, [
                                  l("span", yt, d(i.label), 1),
                                  O.value[i.id] ? (a(), n("span", {
                                    key: 0,
                                    class: "tile-version",
                                    title: O.value[i.id].title,
                                    "data-testid": "tile-version"
                                  }, d(O.value[i.id].label), 9, kt)) : u("", !0)
                                ])
                              ]),
                              se(i.id) ? (a(), n("span", {
                                key: 0,
                                class: "apps-item__used",
                                title: new Date(E.value[i.id]).toLocaleString(),
                                "data-testid": "tile-last-used"
                              }, d(se(i.id)), 9, wt)) : u("", !0),
                              l("button", {
                                type: "button",
                                class: "icon-btn apps-item__star",
                                "aria-pressed": U(i.key),
                                "aria-label": e.$t("shell.toggleFavorite"),
                                "data-testid": "tile-star",
                                onClick: Q((y) => Ee(i.key), ["stop"])
                              }, [
                                b(r(Qe), {
                                  size: 14,
                                  class: L(U(i.key) ? "fill-warning text-warning" : "text-faint")
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
            ], 8, ["to", "disabled"]))
          ], 2),
          l("div", $t, [
            l("div", {
              class: "flex items-center gap-3 cursor-pointer group/logo",
              "data-testid": "brand",
              title: w.value?.name,
              onClick: s[1] || (s[1] = (t) => r(D).push(w.value?.homePath || "/"))
            }, [
              w.value?.logo ? (a(), n(g, { key: 0 }, [
                ee.value && w.value.logoDark ? (a(), n("img", {
                  key: 0,
                  src: w.value.logoDark,
                  alt: w.value.name,
                  class: "h-7 w-auto max-w-[200px] object-contain"
                }, null, 8, At)) : (a(), n("span", {
                  key: 1,
                  class: L(["inline-flex items-center rounded-md", ee.value && "bg-white/95 px-2 py-1"])
                }, [
                  l("img", {
                    src: w.value.logo,
                    alt: w.value.name,
                    class: "h-7 w-auto max-w-[200px] object-contain"
                  }, null, 8, Ct)
                ], 2)),
                A.value && w.value.tagline ? (a(), n("span", Lt, d(w.value.tagline), 1)) : u("", !0)
              ], 64)) : (a(), n(g, { key: 1 }, [
                s[8] || (s[8] = Je('<div class="relative" data-v-165944ea><div class="w-9 h-9 bg-primary rounded-xl flex items-center justify-center relative z-10 transition-transform group-hover/logo:scale-110 shadow-xl border border-border-soft" data-v-165944ea><span class="text-primary-foreground font-black text-xs tracking-tighter" data-v-165944ea>MP</span></div></div><div class="flex flex-col text-left" data-v-165944ea><span class="text-[11px] font-black uppercase tracking-[0.4em] hdr-ink transition-colors leading-none mb-1" data-v-165944ea>Antigravity</span><span class="text-[9px] font-black uppercase tracking-[0.2em] hdr-faint" data-v-165944ea>Core OS v5</span></div>', 2))
              ], 64))
            ], 8, St),
            (a(), c(v(e.$c("shell.hook-slot")), {
              name: "shell.header.start",
              class: "flex items-center gap-1 ml-3"
            }))
          ]),
          l("div", zt, [
            k.value && (r(R).end?.length || oe.value) ? (a(), n("div", Et, [
              (a(), c(v(e.$c("shell.hook-slot")), {
                name: "shell.menu.end",
                class: "flex items-center gap-1"
              })),
              (a(!0), n(g, null, S(r(R).end, (t, o) => (a(), c(v(t), { key: o }))), 128))
            ])) : u("", !0),
            (a(), c(v(e.$c("shell.hook-slot")), {
              name: "shell.header.end",
              class: "flex items-center gap-1"
            })),
            l("div", Vt, [
              r(z) ? (a(), c(v(e.$c("ui.dropdown")), {
                key: 0,
                modelValue: F.value,
                "onUpdate:modelValue": s[2] || (s[2] = (t) => F.value = t),
                align: "right"
              }, {
                trigger: $(() => [
                  l("button", {
                    type: "button",
                    class: "h-9 px-2 rounded-lg flex items-center gap-1 whitespace-nowrap shrink-0 hdr-btn transition-colors outline-none",
                    title: e.$t("shell.language"),
                    "aria-label": e.$t("shell.language"),
                    "data-testid": "lang-switch"
                  }, [
                    b(fe, {
                      locale: r(z).locale,
                      size: 20
                    }, null, 8, ["locale"]),
                    b(r(T), {
                      size: 13,
                      class: "hdr-faint"
                    })
                  ], 8, Dt)
                ]),
                content: $(() => [
                  l("div", Mt, [
                    l("div", Ot, d(e.$t("shell.language")), 1),
                    (a(!0), n(g, null, S(r(z).availableLocales, (t) => (a(), n("button", {
                      key: t,
                      type: "button",
                      class: "pop-item justify-between whitespace-nowrap",
                      "aria-selected": r(z).locale === t,
                      onClick: (o) => Ce(t)
                    }, [
                      l("span", Ut, [
                        b(fe, {
                          locale: t,
                          size: 22
                        }, null, 8, ["locale"]),
                        l("span", null, d(Ae[t] ?? t), 1)
                      ]),
                      r(z).locale === t ? (a(), c(r(ge), {
                        key: 0,
                        size: 14,
                        class: "text-primary"
                      })) : u("", !0)
                    ], 8, Nt))), 128))
                  ])
                ]),
                _: 1
              }, 8, ["modelValue"])) : u("", !0)
            ]),
            s[10] || (s[10] = l("div", { class: "h-6 w-px hdr-sep mx-1 hidden md:block" }, null, -1)),
            (a(), c(v(e.$c("ui.dropdown")), {
              modelValue: M.value,
              "onUpdate:modelValue": s[5] || (s[5] = (t) => M.value = t),
              align: "right"
            }, {
              trigger: $(() => [
                l("button", It, [
                  l("span", Rt, d(_.value?.username || "User"), 1),
                  b(be, {
                    src: ue.value,
                    name: _.value?.username || "User",
                    size: 28,
                    rounded: "lg"
                  }, null, 8, ["src", "name"]),
                  b(r(T), {
                    size: 13,
                    class: "hdr-faint"
                  })
                ])
              ]),
              content: $(() => [
                l("div", jt, [
                  l("div", Tt, [
                    b(be, {
                      src: ue.value,
                      name: _.value?.username || "User",
                      size: 36,
                      rounded: "lg"
                    }, null, 8, ["src", "name"]),
                    l("div", Pt, [
                      l("div", Kt, d(_.value?.username), 1),
                      l("div", Ft, d(_.value?.email || _.value?.role), 1)
                    ])
                  ]),
                  l("button", {
                    type: "button",
                    class: "pop-item",
                    "data-testid": "menu-profile",
                    onClick: s[3] || (s[3] = (t) => {
                      r(D).push("/account/profile"), M.value = !1;
                    })
                  }, [
                    b(r(Xe), {
                      size: 15,
                      class: "text-muted-foreground"
                    }),
                    l("span", null, d(e.$t("shell.profile")), 1)
                  ]),
                  l("button", {
                    type: "button",
                    class: "pop-item",
                    onClick: s[4] || (s[4] = (t) => {
                      r(D).push("/system/theme"), M.value = !1;
                    })
                  }, [
                    b(r(Ze), {
                      size: 15,
                      class: "text-muted-foreground"
                    }),
                    l("span", null, d(e.$t("system.themeStudio", { default: "Theme Studio" })), 1)
                  ]),
                  (a(), c(v(e.$c("shell.hook-slot")), {
                    name: "shell.user-menu",
                    tag: "div",
                    class: "flex flex-col",
                    context: { close: () => M.value = !1 }
                  }, null, 8, ["context"])),
                  s[9] || (s[9] = l("div", { class: "pop-sep" }, null, -1)),
                  l("button", {
                    type: "button",
                    class: "pop-item danger",
                    onClick: je
                  }, [
                    b(r(qe), { size: 15 }),
                    l("span", null, d(e.$t("shell.logout")), 1)
                  ])
                ])
              ]),
              _: 1
            }, 8, ["modelValue"]))
          ])
        ], 2)
      ]),
      k.value ? u("", !0) : (a(), n("div", {
        key: 0,
        class: L(["app-band", A.value && "app-band--classic"])
      }, [
        l("div", Bt, [
          A.value ? (a(), n("div", Ht)) : u("", !0),
          A.value && H.value ? (a(), n("div", Jt)) : u("", !0),
          H.value ? (a(), n("nav", Yt, [
            (a(!0), n(g, null, S(ce.value, (t) => (a(), n(g, {
              key: t.group ?? t.item.path
            }, [
              t.group === null ? (a(), n("button", {
                key: 0,
                type: "button",
                class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                role: "tab",
                "aria-selected": r(m).active === t.item.path,
                onMousedown: s[6] || (s[6] = Q(() => {
                }, ["prevent"])),
                onClick: (o) => r(m).navigate?.(t.item.path)
              }, [
                t.item.icon ? (a(), c(v(t.item.icon), {
                  key: 0,
                  size: 13
                })) : u("", !0),
                W(" " + d(t.item.label) + " ", 1),
                t.item.badge !== void 0 ? (a(), n("span", Wt, d(t.item.badge), 1)) : u("", !0)
              ], 40, Gt)) : (a(), c(v(e.$c("ui.popover")), {
                key: 1,
                class: "band-group",
                align: "start"
              }, {
                default: $(({ close: o }) => [
                  (a(), c(v(e.$c("ui.popover-trigger")), { class: "band-group__trigger" }, {
                    default: $(() => [
                      l("button", {
                        type: "button",
                        class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                        role: "tab",
                        "aria-selected": !!Y(t.items),
                        "aria-haspopup": "menu",
                        onMousedown: s[7] || (s[7] = Q(() => {
                        }, ["prevent"])),
                        "data-testid": `app-nav-group-${t.group}`
                      }, [
                        t.icon ? (a(), c(v(t.icon), {
                          key: 0,
                          size: 13
                        })) : u("", !0),
                        W(" " + d(t.group) + " ", 1),
                        Y(t.items) ? (a(), n("span", Xt, "· " + d(Y(t.items).label), 1)) : u("", !0),
                        b(r(T), { size: 12 })
                      ], 40, Qt)
                    ]),
                    _: 2
                  }, 1024)),
                  (a(), c(v(e.$c("ui.popover-content")), {
                    align: "start",
                    class: "p-1"
                  }, {
                    default: $(() => [
                      l("div", Zt, [
                        (a(!0), n(g, null, S(t.items, (i) => (a(), n("button", {
                          key: i.path,
                          type: "button",
                          class: "pop-item whitespace-nowrap",
                          role: "menuitem",
                          "aria-selected": r(m).active === i.path,
                          disabled: i.disabled,
                          "aria-disabled": i.disabled || void 0,
                          onClick: (y) => {
                            o(), r(m).navigate?.(i.path);
                          }
                        }, [
                          i.icon ? (a(), c(v(i.icon), {
                            key: 0,
                            size: 15,
                            class: "text-muted-foreground"
                          })) : u("", !0),
                          l("span", ea, d(i.label), 1),
                          r(m).active === i.path ? (a(), c(r(ge), {
                            key: 1,
                            size: 14,
                            class: "text-primary"
                          })) : u("", !0)
                        ], 8, qt))), 128))
                      ])
                    ]),
                    _: 2
                  }, 1024))
                ]),
                _: 2
              }, 1024))
            ], 64))), 128))
          ])) : u("", !0),
          r(R).end?.length || oe.value ? (a(), n("div", ta, [
            (a(), c(v(e.$c("shell.hook-slot")), {
              name: "shell.menu.end",
              class: "flex items-center gap-1"
            })),
            (a(!0), n(g, null, S(r(R).end, (t, o) => (a(), c(v(t), { key: o }))), 128))
          ])) : u("", !0)
        ])
      ], 2)),
      k.value ? (a(), c(he, {
        key: 1,
        defer: "",
        to: "#shell-sidebar"
      }, [
        l("nav", {
          class: L(["side-nav", f.value && "is-collapsed"]),
          "data-testid": "app-nav"
        }, [
          H.value ? (a(!0), n(g, { key: 0 }, S(ce.value, (t) => (a(), n(g, {
            key: t.group ?? t.item.path
          }, [
            t.group === null ? (a(), n("button", {
              key: 0,
              type: "button",
              class: "nav-item side-item",
              "aria-current": r(m).active === t.item.path ? "page" : void 0,
              title: f.value ? t.item.label : void 0,
              onClick: (o) => r(m).navigate?.(t.item.path)
            }, [
              t.item.icon ? (a(), c(v(t.item.icon), { key: 0 })) : (a(), n("span", sa, d(String(t.item.label).charAt(0)), 1)),
              l("span", la, d(t.item.label), 1),
              t.item.badge !== void 0 ? (a(), n("span", na, d(t.item.badge), 1)) : u("", !0)
            ], 8, aa)) : (a(), n("div", {
              key: 1,
              class: "side-group",
              "data-testid": `app-nav-group-${t.group}`
            }, [
              l("div", ia, d(t.group), 1),
              (a(!0), n(g, null, S(t.items, (o) => (a(), n("button", {
                key: o.path,
                type: "button",
                class: "nav-item side-item",
                disabled: o.disabled,
                "aria-disabled": o.disabled || void 0,
                "aria-current": r(m).active === o.path ? "page" : void 0,
                title: f.value ? o.label : void 0,
                onClick: (i) => r(m).navigate?.(o.path)
              }, [
                o.icon ? (a(), c(v(o.icon), { key: 0 })) : (a(), n("span", da, d(String(o.label).charAt(0)), 1)),
                l("span", ca, d(o.label), 1)
              ], 8, ra))), 128))
            ], 8, oa))
          ], 64))), 128)) : u("", !0)
        ], 2),
        f.value ? u("", !0) : (a(), c(v(e.$c("shell.hook-slot")), {
          key: 0,
          name: "shell.sidebar.bottom",
          class: "side-hooks"
        })),
        l("button", {
          type: "button",
          class: "side-collapse",
          "aria-pressed": f.value,
          title: f.value ? "Expand the sidebar" : "Collapse the sidebar",
          "data-testid": "sidebar-collapse",
          onClick: xe
        }, [
          (a(), c(v(f.value ? r(et) : r(tt)), { size: 16 })),
          f.value ? u("", !0) : (a(), n("span", pa, "Collapse"))
        ], 8, ua)
      ])) : u("", !0)
    ]));
  }
}), $a = /* @__PURE__ */ st(va, [["__scopeId", "data-v-165944ea"]]);
export {
  $a as default
};
//# sourceMappingURL=Header-Bq7w5ZrJ.js.map
