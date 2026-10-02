import { defineComponent as je, computed as m, ref as x, inject as Te, watch as O, onBeforeUnmount as Pe, onMounted as Ke, openBlock as a, createElementBlock as n, createElementVNode as l, normalizeClass as L, createBlock as p, Teleport as pe, resolveDynamicComponent as v, withCtx as $, toDisplayString as d, createCommentVNode as c, Fragment as g, renderList as S, createTextVNode as W, withKeys as Fe, withModifiers as Q, createVNode as b, unref as r, createStaticVNode as Be } from "vue";
import { appIcon as He } from "../index.js";
import { useRouter as Je, useRoute as Ye } from "vue-router";
import { LayoutGrid as ve, Star as Ge, ChevronDown as T, Check as he, User as We, Palette as Qe, LogOut as Xe, PanelLeftOpen as Ze, PanelLeftClose as qe } from "lucide-vue-next";
import { SUPERAPP_EVENTS as et } from "@nhphero/vue-sapp/contracts";
import { L as me } from "./LocaleFlag-C6SPRotW.js";
import { _ as ge } from "./UserAvatar.vue_vue_type_script_setup_true_lang-AXBFwsc7.js";
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
}, pt = { class: "text-faint font-normal" }, vt = { class: "apps-list" }, ht = ["aria-current", "onClick", "onKeydown"], mt = { class: "apps-item__icon" }, gt = { class: "apps-item__text" }, ft = { class: "apps-item__name" }, bt = { class: "truncate" }, _t = ["title"], yt = ["title"], kt = ["aria-pressed", "aria-label", "onClick"], wt = { class: "flex items-center justify-center min-w-0" }, xt = ["title"], $t = ["src", "alt"], St = ["src", "alt"], At = {
  key: 2,
  class: "hidden lg:block hdr-tagline border-l hdr-line"
}, Ct = { class: "flex items-center gap-2 justify-self-end" }, Lt = {
  key: 0,
  class: "flex items-center gap-1",
  "data-testid": "app-band-end"
}, zt = { class: "hidden md:flex items-center gap-1 flex-nowrap shrink-0" }, Et = ["title", "aria-label"], Vt = { class: "w-52" }, Dt = { class: "pop-head" }, Mt = ["aria-selected", "onClick"], Ot = { class: "flex items-center gap-2.5" }, Nt = {
  type: "button",
  class: "h-9 flex items-center gap-2 pl-2.5 pr-1.5 rounded-lg hdr-btn cursor-pointer transition-colors outline-none",
  "data-testid": "user-menu"
}, Ut = { class: "hidden lg:block text-sm font-semibold hdr-ink whitespace-nowrap" }, It = { class: "w-60" }, Rt = { class: "flex items-center gap-3 px-2 py-2.5 mb-1 border-b border-border-soft" }, jt = { class: "min-w-0" }, Tt = { class: "text-sm font-semibold text-foreground truncate" }, Pt = { class: "text-xs text-faint truncate" }, Kt = { class: "page-container flex items-stretch gap-3" }, Ft = {
  key: 0,
  id: "shell-band-switch",
  class: "flex items-center shrink-0"
}, Bt = {
  key: 1,
  class: "app-band__sep",
  "aria-hidden": "true"
}, Ht = {
  key: 2,
  class: "tabs tabs--band min-w-0 overflow-x-auto no-scrollbar",
  role: "tablist",
  "data-testid": "app-nav"
}, Jt = ["aria-selected", "onClick"], Yt = {
  key: 1,
  class: "badge"
}, Gt = ["aria-selected", "data-testid"], Wt = {
  key: 1,
  class: "band-group__current"
}, Qt = {
  class: "min-w-56 flex flex-col",
  role: "menu"
}, Xt = ["aria-selected", "disabled", "aria-disabled", "onClick"], Zt = { class: "flex-1" }, qt = {
  key: 3,
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
}, fe = "sapp:sidebar-collapsed", be = "sapp:app-last-used", _e = "sapp:recent-apps", ua = /* @__PURE__ */ je({
  __name: "Header",
  props: {
    layout: { default: "band" }
  },
  setup(ye) {
    const X = ye, k = m(() => X.layout === "sidebar"), A = m(() => X.layout === "classic"), _ = x((() => {
      try {
        return localStorage.getItem(fe) === "true";
      } catch {
        return !1;
      }
    })()), ke = () => {
      _.value = !_.value;
      try {
        localStorage.setItem(fe, String(_.value));
      } catch {
      }
    }, u = Te("$superApp"), Z = u.getModuleState("shell.layout", { sidebar: !1 });
    O(k, (e) => {
      Z.sidebar = e;
    }, { immediate: !0 }), Pe(() => {
      k.value && (Z.sidebar = !1);
    });
    const V = u, D = Je(), q = Ye(), P = V.$appState, K = V.$themeConfig, w = m(() => V.$config?.branding ?? null), we = m(() => K?.state?.mode === "dark" || K?.state?.mode === "system" && window.matchMedia?.("(prefers-color-scheme: dark)").matches), xe = ["brand", "gradient", "dark"], ee = m(() => we.value || xe.includes(K?.state?.header)), z = V.$i18n, F = x(!1), $e = { vi: "Tiếng Việt", en: "English", ja: "日本語", ko: "한국어", zh: "中文", fr: "Français", de: "Deutsch" }, Se = (e) => {
      z?.setLocale(e), F.value = !1;
    }, Ae = m(
      () => ne.value.map((e) => ({ key: `app:${e.id}`, id: e.id, label: e.label, detail: e.detail, icon: e.icon, run: () => Re(e.path) }))
    ), te = m(() => u?.getModuleState?.("home", { favorites: [] })), Ce = m(() => te.value?.favorites ?? []), N = (e) => Ce.value.includes(e), Le = (e) => te.value?.toggleFavorite?.(e), ae = (e) => {
      const s = (e || "").trim().toLowerCase(), t = (y) => !s || `${y.label} ${y.detail || ""} ${y.id}`.toLowerCase().includes(s), i = [...Ae.value.filter(t)].sort((y, G) => {
        const ce = Number(N(G.key)) - Number(N(y.key));
        if (ce !== 0) return ce;
        const ue = (E.value[G.id] ?? 0) - (E.value[y.id] ?? 0);
        return ue !== 0 ? ue : String(y.label).localeCompare(String(G.label));
      });
      return i.length ? [{ key: "apps", label: "", tiles: i }] : [];
    }, E = x((() => {
      try {
        const e = JSON.parse(localStorage.getItem(be) || "null");
        if (e && typeof e == "object" && !Array.isArray(e))
          return Object.fromEntries(Object.entries(e).filter(([, o]) => typeof o == "number"));
        const s = JSON.parse(localStorage.getItem(_e) || "[]"), t = Date.now();
        return Array.isArray(s) ? Object.fromEntries(s.filter((o) => typeof o == "string").map((o, i) => [o, t - i * 1e3])) : {};
      } catch {
        return {};
      }
    })()), ze = (e) => {
      E.value = { ...E.value, [e]: Date.now() };
      try {
        localStorage.setItem(be, JSON.stringify(E.value)), localStorage.removeItem(_e);
      } catch {
      }
    }, se = (e) => {
      const s = E.value[e];
      return s ? V.$f?.formatRelative?.(new Date(s).toISOString()) ?? new Date(s).toLocaleString() : "";
    }, U = x(!1), Ee = (e) => {
      U.value = e;
    }, I = x(!1), f = x(null), B = x([]), Ve = (e) => He(e), le = () => {
      typeof u?.getRegisteredApps == "function" && (B.value = u.getRegisteredApps());
    }, De = ["superadmin", "admin"], Me = m(() => u?.$policy?.can?.("role", De) ?? !1), ne = m(() => B.value.filter((e) => e.isEnabled !== !1).filter((e) => (e.code ?? e.id) !== "admin" || Me.value).map((e) => ({
      id: e.id,
      label: e.name,
      // Routes follow the slug (changeable); the id stays the key.
      path: typeof u.appPath == "function" ? u.appPath(e.id, (e.code ?? e.id) === "admin" ? "apps" : "") : `/app/${e.slug || e.id}`,
      icon: Ve(e.icon),
      detail: e.description || "Micro-Frontend App"
    }))), R = u.getModuleState("shell.band", { end: [] }), h = u.getModuleState("shell.nav", { moduleId: "", title: "", icon: null, items: [], active: "", navigate: null }), oe = m(() => q.path.startsWith("/app/")), C = m(() => {
      const e = oe.value ? P.current_app : null, s = e && ne.value.find((t) => t.id === e);
      return s || (e && h.title ? { id: e, label: h.title, icon: h.icon || ve } : { id: "default", label: z?.t("shell.apps") ?? "Apps", icon: ve });
    }), H = m(() => oe.value && h.items.length > 0);
    O(() => C.value.id, (e) => {
      e && e !== "default" && ze(e);
    }, { immediate: !0 });
    const ie = async (e) => {
      if (!e || e === "default" || typeof u.loadAppManifest != "function") return null;
      const s = await u.loadAppManifest(e);
      if (!s) return null;
      const t = String(s.version ?? "dev");
      return u.getRegisteredApps?.().find((i) => i.id === e)?.channel === "stable" ? { label: "stable", title: `stable · ${t}` } : { label: t, title: t };
    }, j = x(""), J = x("");
    O(() => [C.value.id, C.value.version], async ([e]) => {
      j.value = "", J.value = "";
      const s = await ie(e);
      C.value.id !== e || !s || (j.value = s.label, J.value = s.title);
    }, { immediate: !0 });
    const M = x({}), Oe = () => {
      for (const e of Ne()) {
        const s = `${e.id}@${e.version ?? ""}`;
        re.has(s) || (re.add(s), ie(e.id).then((t) => {
          t && (M.value = { ...M.value, [e.id]: t });
        }));
      }
    }, re = /* @__PURE__ */ new Set(), Ne = () => typeof u?.getRegisteredApps == "function" ? u.getRegisteredApps() : [];
    O(U, (e) => {
      e && Oe();
    });
    const de = m(() => {
      const e = [];
      for (const s of h.items) {
        if (!s.group) {
          e.push({ group: null, item: s });
          continue;
        }
        const t = e.find((o) => o.group === s.group);
        t ? (t.items.push(s), t.icon ??= s.groupIcon) : e.push({ group: s.group, icon: s.groupIcon, items: [s] });
      }
      return e;
    }), Y = (e) => e.find((s) => h.active === s.path) ?? null;
    O(() => q.params.moduleId, (e) => {
      const s = Array.isArray(e) ? e[0] : e, t = s && (u.findAppByRoute?.(s)?.id ?? s);
      t && P.current_app !== t && (P.current_app = t);
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
    const Ie = async () => {
      u.emit?.(et.AUTH_LOGOUT);
      try {
        u.doAction("auth.logout"), localStorage.removeItem("accessToken"), D.push("/login").catch(() => {
          window.location.href = "/login";
        });
      } catch {
        localStorage.removeItem("accessToken"), window.location.href = "/login";
      }
    }, Re = (e) => {
      U.value = !1, D.push(e);
    };
    return Ke(() => {
      Ue(), le(), typeof u?.on == "function" && u.on("apps:updated", (e) => {
        Array.isArray(e) ? B.value = e : le();
      });
    }), (e, s) => (a(), n("div", at, [
      l("header", st, [
        l("div", {
          class: L(["shell-header__row shell-header__wide", [k.value && "is-sidebar", A.value && "is-classic"]])
        }, [
          l("div", {
            class: L(["flex items-center min-w-0 justify-self-start", (k.value || A.value) && "hidden"])
          }, [
            (a(), p(pe, {
              defer: "",
              to: k.value ? "#shell-sidebar" : "#shell-band-switch",
              disabled: !k.value && !A.value
            }, [
              l("div", {
                class: L(["flex items-center shrink-0 min-w-0", [k.value && ["side-switch", _.value && "is-collapsed"], A.value && "band-switch"]])
              }, [
                (a(), p(v(e.$c("ui.dropdown")), {
                  class: "app-switch",
                  modelValue: U.value,
                  "onUpdate:modelValue": s[0] || (s[0] = (t) => Ee(t)),
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
                        (a(), p(v(C.value.icon), { size: 16 }))
                      ], 2),
                      l("span", nt, d(C.value.label), 1),
                      j.value ? (a(), n("span", {
                        key: 0,
                        class: "app-version",
                        "data-testid": "current-app-version",
                        title: J.value
                      }, d(j.value), 9, ot)) : c("", !0),
                      b(r(T), {
                        size: 14,
                        class: "text-faint group-hover/app:text-foreground transition-colors"
                      })
                    ], 8, lt)
                  ]),
                  content: $(({ query: t }) => [
                    l("div", it, [
                      l("div", rt, [
                        ae(t).length ? c("", !0) : (a(), n("div", dt, d(e.$t("common.empty")), 1)),
                        (a(!0), n(g, null, S(ae(t), (o) => (a(), n("section", {
                          key: o.key,
                          class: "pt-1 last:pb-3",
                          "data-testid": `apps-section-${o.key}`
                        }, [
                          o.label ? (a(), n("div", ut, [
                            W(d(o.label), 1),
                            l("span", pt, d(o.tiles.length), 1)
                          ])) : c("", !0),
                          l("div", vt, [
                            (a(!0), n(g, null, S(o.tiles, (i) => (a(), n("div", {
                              key: i.key,
                              role: "button",
                              tabindex: "0",
                              class: "apps-item group",
                              "aria-current": i.id === C.value.id ? "true" : void 0,
                              onClick: (y) => i.run(),
                              onKeydown: Fe((y) => i.run(), ["enter"])
                            }, [
                              l("span", mt, [
                                (a(), p(v(i.icon), {
                                  size: 16,
                                  "stroke-width": "1.75"
                                }))
                              ]),
                              l("span", gt, [
                                l("span", ft, [
                                  l("span", bt, d(i.label), 1),
                                  M.value[i.id] ? (a(), n("span", {
                                    key: 0,
                                    class: "tile-version",
                                    title: M.value[i.id].title,
                                    "data-testid": "tile-version"
                                  }, d(M.value[i.id].label), 9, _t)) : c("", !0)
                                ])
                              ]),
                              se(i.id) ? (a(), n("span", {
                                key: 0,
                                class: "apps-item__used",
                                title: new Date(E.value[i.id]).toLocaleString(),
                                "data-testid": "tile-last-used"
                              }, d(se(i.id)), 9, yt)) : c("", !0),
                              l("button", {
                                type: "button",
                                class: "icon-btn apps-item__star",
                                "aria-pressed": N(i.key),
                                "aria-label": e.$t("shell.toggleFavorite"),
                                "data-testid": "tile-star",
                                onClick: Q((y) => Le(i.key), ["stop"])
                              }, [
                                b(r(Ge), {
                                  size: 14,
                                  class: L(N(i.key) ? "fill-warning text-warning" : "text-faint")
                                }, null, 8, ["class"])
                              ], 8, kt)
                            ], 40, ht))), 128))
                          ])
                        ], 8, ct))), 128))
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue", "search-placeholder"]))
              ], 2)
            ], 8, ["to", "disabled"]))
          ], 2),
          l("div", wt, [
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
                }, null, 8, $t)) : (a(), n("span", {
                  key: 1,
                  class: L(["inline-flex items-center rounded-md", ee.value && "bg-white/95 px-2 py-1"])
                }, [
                  l("img", {
                    src: w.value.logo,
                    alt: w.value.name,
                    class: "h-7 w-auto max-w-[200px] object-contain"
                  }, null, 8, St)
                ], 2)),
                A.value && w.value.tagline ? (a(), n("span", At, d(w.value.tagline), 1)) : c("", !0)
              ], 64)) : (a(), n(g, { key: 1 }, [
                s[8] || (s[8] = Be('<div class="relative" data-v-5cd2c294><div class="w-9 h-9 bg-primary rounded-xl flex items-center justify-center relative z-10 transition-transform group-hover/logo:scale-110 shadow-xl border border-border-soft" data-v-5cd2c294><span class="text-primary-foreground font-black text-xs tracking-tighter" data-v-5cd2c294>MP</span></div></div><div class="flex flex-col text-left" data-v-5cd2c294><span class="text-[11px] font-black uppercase tracking-[0.4em] hdr-ink transition-colors leading-none mb-1" data-v-5cd2c294>Antigravity</span><span class="text-[9px] font-black uppercase tracking-[0.2em] hdr-faint" data-v-5cd2c294>Core OS v5</span></div>', 2))
              ], 64))
            ], 8, xt)
          ]),
          l("div", Ct, [
            k.value && r(R).end?.length ? (a(), n("div", Lt, [
              (a(!0), n(g, null, S(r(R).end, (t, o) => (a(), p(v(t), { key: o }))), 128))
            ])) : c("", !0),
            l("div", zt, [
              r(z) ? (a(), p(v(e.$c("ui.dropdown")), {
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
                    b(me, {
                      locale: r(z).locale,
                      size: 20
                    }, null, 8, ["locale"]),
                    b(r(T), {
                      size: 13,
                      class: "hdr-faint"
                    })
                  ], 8, Et)
                ]),
                content: $(() => [
                  l("div", Vt, [
                    l("div", Dt, d(e.$t("shell.language")), 1),
                    (a(!0), n(g, null, S(r(z).availableLocales, (t) => (a(), n("button", {
                      key: t,
                      type: "button",
                      class: "pop-item justify-between whitespace-nowrap",
                      "aria-selected": r(z).locale === t,
                      onClick: (o) => Se(t)
                    }, [
                      l("span", Ot, [
                        b(me, {
                          locale: t,
                          size: 22
                        }, null, 8, ["locale"]),
                        l("span", null, d($e[t] ?? t), 1)
                      ]),
                      r(z).locale === t ? (a(), p(r(he), {
                        key: 0,
                        size: 14,
                        class: "text-primary"
                      })) : c("", !0)
                    ], 8, Mt))), 128))
                  ])
                ]),
                _: 1
              }, 8, ["modelValue"])) : c("", !0)
            ]),
            s[10] || (s[10] = l("div", { class: "h-6 w-px hdr-sep mx-1 hidden md:block" }, null, -1)),
            (a(), p(v(e.$c("ui.dropdown")), {
              modelValue: I.value,
              "onUpdate:modelValue": s[5] || (s[5] = (t) => I.value = t),
              align: "right"
            }, {
              trigger: $(() => [
                l("button", Nt, [
                  l("span", Ut, d(f.value?.username || "User"), 1),
                  b(ge, {
                    src: f.value?.avatar,
                    name: f.value?.username || "User",
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
                l("div", It, [
                  l("div", Rt, [
                    b(ge, {
                      src: f.value?.avatar,
                      name: f.value?.username || "User",
                      size: 36,
                      rounded: "lg"
                    }, null, 8, ["src", "name"]),
                    l("div", jt, [
                      l("div", Tt, d(f.value?.username), 1),
                      l("div", Pt, d(f.value?.email || f.value?.role), 1)
                    ])
                  ]),
                  l("button", {
                    type: "button",
                    class: "pop-item",
                    "data-testid": "menu-profile",
                    onClick: s[3] || (s[3] = (t) => {
                      r(D).push("/account/profile"), I.value = !1;
                    })
                  }, [
                    b(r(We), {
                      size: 15,
                      class: "text-muted-foreground"
                    }),
                    l("span", null, d(e.$t("shell.profile")), 1)
                  ]),
                  l("button", {
                    type: "button",
                    class: "pop-item",
                    onClick: s[4] || (s[4] = (t) => {
                      r(D).push("/system/theme"), I.value = !1;
                    })
                  }, [
                    b(r(Qe), {
                      size: 15,
                      class: "text-muted-foreground"
                    }),
                    l("span", null, d(e.$t("system.themeStudio", { default: "Theme Studio" })), 1)
                  ]),
                  s[9] || (s[9] = l("div", { class: "pop-sep" }, null, -1)),
                  l("button", {
                    type: "button",
                    class: "pop-item danger",
                    onClick: Ie
                  }, [
                    b(r(Xe), { size: 15 }),
                    l("span", null, d(e.$t("shell.logout")), 1)
                  ])
                ])
              ]),
              _: 1
            }, 8, ["modelValue"]))
          ])
        ], 2)
      ]),
      k.value ? c("", !0) : (a(), n("div", {
        key: 0,
        class: L(["app-band", A.value && "app-band--classic"])
      }, [
        l("div", Kt, [
          A.value ? (a(), n("div", Ft)) : c("", !0),
          A.value && H.value ? (a(), n("div", Bt)) : c("", !0),
          H.value ? (a(), n("nav", Ht, [
            (a(!0), n(g, null, S(de.value, (t) => (a(), n(g, {
              key: t.group ?? t.item.path
            }, [
              t.group === null ? (a(), n("button", {
                key: 0,
                type: "button",
                class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                role: "tab",
                "aria-selected": r(h).active === t.item.path,
                onMousedown: s[6] || (s[6] = Q(() => {
                }, ["prevent"])),
                onClick: (o) => r(h).navigate?.(t.item.path)
              }, [
                t.item.icon ? (a(), p(v(t.item.icon), {
                  key: 0,
                  size: 13
                })) : c("", !0),
                W(" " + d(t.item.label) + " ", 1),
                t.item.badge !== void 0 ? (a(), n("span", Yt, d(t.item.badge), 1)) : c("", !0)
              ], 40, Jt)) : (a(), p(v(e.$c("ui.popover")), {
                key: 1,
                class: "band-group",
                align: "start"
              }, {
                default: $(({ close: o }) => [
                  (a(), p(v(e.$c("ui.popover-trigger")), { class: "band-group__trigger" }, {
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
                        t.icon ? (a(), p(v(t.icon), {
                          key: 0,
                          size: 13
                        })) : c("", !0),
                        W(" " + d(t.group) + " ", 1),
                        Y(t.items) ? (a(), n("span", Wt, "· " + d(Y(t.items).label), 1)) : c("", !0),
                        b(r(T), { size: 12 })
                      ], 40, Gt)
                    ]),
                    _: 2
                  }, 1024)),
                  (a(), p(v(e.$c("ui.popover-content")), {
                    align: "start",
                    class: "p-1"
                  }, {
                    default: $(() => [
                      l("div", Qt, [
                        (a(!0), n(g, null, S(t.items, (i) => (a(), n("button", {
                          key: i.path,
                          type: "button",
                          class: "pop-item whitespace-nowrap",
                          role: "menuitem",
                          "aria-selected": r(h).active === i.path,
                          disabled: i.disabled,
                          "aria-disabled": i.disabled || void 0,
                          onClick: (y) => {
                            o(), r(h).navigate?.(i.path);
                          }
                        }, [
                          i.icon ? (a(), p(v(i.icon), {
                            key: 0,
                            size: 15,
                            class: "text-muted-foreground"
                          })) : c("", !0),
                          l("span", Zt, d(i.label), 1),
                          r(h).active === i.path ? (a(), p(r(he), {
                            key: 1,
                            size: 14,
                            class: "text-primary"
                          })) : c("", !0)
                        ], 8, Xt))), 128))
                      ])
                    ]),
                    _: 2
                  }, 1024))
                ]),
                _: 2
              }, 1024))
            ], 64))), 128))
          ])) : c("", !0),
          r(R).end?.length ? (a(), n("div", qt, [
            (a(!0), n(g, null, S(r(R).end, (t, o) => (a(), p(v(t), { key: o }))), 128))
          ])) : c("", !0)
        ])
      ], 2)),
      k.value ? (a(), p(pe, {
        key: 1,
        defer: "",
        to: "#shell-sidebar"
      }, [
        l("nav", {
          class: L(["side-nav", _.value && "is-collapsed"]),
          "data-testid": "app-nav"
        }, [
          H.value ? (a(!0), n(g, { key: 0 }, S(de.value, (t) => (a(), n(g, {
            key: t.group ?? t.item.path
          }, [
            t.group === null ? (a(), n("button", {
              key: 0,
              type: "button",
              class: "nav-item side-item",
              "aria-current": r(h).active === t.item.path ? "page" : void 0,
              title: _.value ? t.item.label : void 0,
              onClick: (o) => r(h).navigate?.(t.item.path)
            }, [
              t.item.icon ? (a(), p(v(t.item.icon), { key: 0 })) : (a(), n("span", ta, d(String(t.item.label).charAt(0)), 1)),
              l("span", aa, d(t.item.label), 1),
              t.item.badge !== void 0 ? (a(), n("span", sa, d(t.item.badge), 1)) : c("", !0)
            ], 8, ea)) : (a(), n("div", {
              key: 1,
              class: "side-group",
              "data-testid": `app-nav-group-${t.group}`
            }, [
              l("div", na, d(t.group), 1),
              (a(!0), n(g, null, S(t.items, (o) => (a(), n("button", {
                key: o.path,
                type: "button",
                class: "nav-item side-item",
                disabled: o.disabled,
                "aria-disabled": o.disabled || void 0,
                "aria-current": r(h).active === o.path ? "page" : void 0,
                title: _.value ? o.label : void 0,
                onClick: (i) => r(h).navigate?.(o.path)
              }, [
                o.icon ? (a(), p(v(o.icon), { key: 0 })) : (a(), n("span", ia, d(String(o.label).charAt(0)), 1)),
                l("span", ra, d(o.label), 1)
              ], 8, oa))), 128))
            ], 8, la))
          ], 64))), 128)) : c("", !0)
        ], 2),
        l("button", {
          type: "button",
          class: "side-collapse",
          "aria-pressed": _.value,
          title: _.value ? "Expand the sidebar" : "Collapse the sidebar",
          "data-testid": "sidebar-collapse",
          onClick: ke
        }, [
          (a(), p(v(_.value ? r(Ze) : r(qe)), { size: 16 })),
          _.value ? c("", !0) : (a(), n("span", ca, "Collapse"))
        ], 8, da)
      ])) : c("", !0)
    ]));
  }
}), wa = /* @__PURE__ */ tt(ua, [["__scopeId", "data-v-5cd2c294"]]);
export {
  wa as default
};
//# sourceMappingURL=Header-C1Ly-7-P.js.map
