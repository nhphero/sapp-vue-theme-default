import { defineComponent as De, inject as Ne, computed as p, ref as _, watch as j, onMounted as Oe, openBlock as n, createElementBlock as l, createElementVNode as s, createBlock as m, resolveDynamicComponent as h, withCtx as k, toDisplayString as d, createCommentVNode as u, Fragment as w, renderList as C, createTextVNode as H, withKeys as Ue, withModifiers as G, createVNode as g, unref as i, normalizeClass as J, createStaticVNode as Re } from "vue";
import { appIcon as je } from "../index.js";
import { useRouter as Ie, useRoute as Te } from "vue-router";
import { LayoutGrid as ie, Star as Pe, ChevronDown as I, Check as re, User as Ke, Palette as Fe, LogOut as Be } from "lucide-vue-next";
import { SUPERAPP_EVENTS as He } from "@nhphero/vue-sapp/contracts";
import { _ as ce } from "./LocaleFlag.vue_vue_type_script_setup_true_lang-D2eeZNym.js";
import { _ as de } from "./UserAvatar.vue_vue_type_script_setup_true_lang-AXBFwsc7.js";
import { _ as Ge } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const Je = { class: "shell-header w-full sticky top-0 z-[100] transition-colors duration-300" }, We = { class: "shell-header__row shell-header__wide" }, Ye = { class: "flex items-center min-w-0 justify-self-start" }, Qe = { class: "flex items-center shrink-0 min-w-0" }, Xe = ["title", "aria-label"], Ze = {
  class: "text-sm font-semibold text-foreground whitespace-nowrap",
  "data-testid": "current-app"
}, qe = ["title"], et = { class: "apps-menu" }, tt = { class: "apps-menu__all" }, at = {
  key: 0,
  class: "px-3 py-6 text-sm text-faint text-center"
}, st = ["data-testid"], nt = {
  key: 0,
  class: "pop-head flex items-center gap-1.5"
}, ot = { class: "text-faint font-normal" }, lt = { class: "apps-list" }, it = ["aria-current", "onClick", "onKeydown"], rt = { class: "apps-item__icon" }, ct = { class: "apps-item__text" }, dt = { class: "apps-item__name" }, ut = { class: "truncate" }, pt = ["title"], mt = ["title"], vt = ["aria-pressed", "aria-label", "onClick"], ht = { class: "flex items-center justify-center min-w-0" }, gt = ["title"], ft = ["src", "alt"], bt = ["src", "alt"], _t = {
  key: 2,
  class: "hidden lg:block text-[10px] font-bold uppercase tracking-[0.2em] hdr-faint border-l hdr-line pl-3"
}, yt = { class: "flex items-center gap-2 justify-self-end" }, kt = { class: "hidden md:flex items-center gap-1 flex-nowrap shrink-0" }, wt = ["title", "aria-label"], xt = { class: "w-52" }, $t = { class: "pop-head" }, St = ["aria-selected", "onClick"], At = { class: "flex items-center gap-2.5" }, Ct = {
  type: "button",
  class: "h-9 flex items-center gap-2 pl-2.5 pr-1.5 rounded-lg hdr-btn cursor-pointer transition-colors outline-none",
  "data-testid": "user-menu"
}, Lt = { class: "hidden lg:block text-sm font-semibold hdr-ink whitespace-nowrap" }, zt = { class: "w-60" }, Et = { class: "flex items-center gap-3 px-2 py-2.5 mb-1 border-b border-border-soft" }, Vt = { class: "min-w-0" }, Mt = { class: "text-sm font-semibold text-foreground truncate" }, Dt = { class: "text-xs text-faint truncate" }, Nt = { class: "app-band" }, Ot = { class: "page-container flex items-stretch gap-3" }, Ut = {
  key: 0,
  class: "tabs tabs--band min-w-0 overflow-x-auto no-scrollbar",
  role: "tablist",
  "data-testid": "app-nav"
}, Rt = ["aria-selected", "onClick"], jt = {
  key: 1,
  class: "badge"
}, It = ["aria-selected", "data-testid"], Tt = {
  key: 1,
  class: "band-group__current"
}, Pt = {
  class: "min-w-56 flex flex-col",
  role: "menu"
}, Kt = ["aria-selected", "disabled", "aria-disabled", "onClick"], Ft = { class: "flex-1" }, Bt = {
  key: 1,
  class: "app-band__end",
  "data-testid": "app-band-end"
}, ue = "sapp:app-last-used", pe = "sapp:recent-apps", Ht = /* @__PURE__ */ De({
  __name: "Header",
  setup(Gt) {
    const r = Ne("$superApp"), L = r, z = Ie(), W = Te(), E = L.$appState, T = L.$themeConfig, y = p(() => L.$config?.branding ?? null), me = p(() => T?.state?.mode === "dark" || T?.state?.mode === "system" && window.matchMedia?.("(prefers-color-scheme: dark)").matches), ve = ["brand", "gradient", "dark"], Y = p(() => me.value || ve.includes(T?.state?.header)), $ = L.$i18n, P = _(!1), he = { vi: "Tiếng Việt", en: "English", ja: "日本語", ko: "한국어", zh: "中文", fr: "Français", de: "Deutsch" }, ge = (e) => {
      $?.setLocale(e), P.value = !1;
    }, fe = p(
      () => ee.value.map((e) => ({ key: `app:${e.id}`, id: e.id, label: e.label, detail: e.detail, icon: e.icon, run: () => Me(e.path) }))
    ), Q = p(() => r?.getModuleState?.("home", { favorites: [] })), be = p(() => Q.value?.favorites ?? []), M = (e) => be.value.includes(e), _e = (e) => Q.value?.toggleFavorite?.(e), X = (e) => {
      const t = (e || "").trim().toLowerCase(), a = (b) => !t || `${b.label} ${b.detail || ""} ${b.id}`.toLowerCase().includes(t), o = [...fe.value.filter(a)].sort((b, B) => {
        const oe = Number(M(B.key)) - Number(M(b.key));
        if (oe !== 0) return oe;
        const le = (S.value[B.id] ?? 0) - (S.value[b.id] ?? 0);
        return le !== 0 ? le : String(b.label).localeCompare(String(B.label));
      });
      return o.length ? [{ key: "apps", label: "", tiles: o }] : [];
    }, S = _((() => {
      try {
        const e = JSON.parse(localStorage.getItem(ue) || "null");
        if (e && typeof e == "object" && !Array.isArray(e))
          return Object.fromEntries(Object.entries(e).filter(([, c]) => typeof c == "number"));
        const t = JSON.parse(localStorage.getItem(pe) || "[]"), a = Date.now();
        return Array.isArray(t) ? Object.fromEntries(t.filter((c) => typeof c == "string").map((c, o) => [c, a - o * 1e3])) : {};
      } catch {
        return {};
      }
    })()), ye = (e) => {
      S.value = { ...S.value, [e]: Date.now() };
      try {
        localStorage.setItem(ue, JSON.stringify(S.value)), localStorage.removeItem(pe);
      } catch {
      }
    }, Z = (e) => {
      const t = S.value[e];
      return t ? L.$f?.formatRelative?.(new Date(t).toISOString()) ?? new Date(t).toLocaleString() : "";
    }, D = _(!1), ke = (e) => {
      D.value = e;
    }, N = _(!1);
    _(!1);
    const v = _(null), A = _([]), O = _([]), we = (e) => je(e), q = () => {
      typeof r?.getRegisteredApps == "function" && (O.value = r.getRegisteredApps());
    }, xe = ["superadmin", "admin"], $e = p(() => r?.$policy?.can?.("role", xe) ?? !1), ee = p(() => (O.value.length > 0 ? O.value : [
      { id: "workspace", name: "Workspace Hub", url: "http://localhost:4409", icon: "Globe", description: "Logic Orchestration", isEnabled: !0 },
      { id: "admin", name: "Admin Management", url: "http://localhost:4403", icon: "Shield", description: "Platform Governance", isEnabled: !0 }
    ]).filter((t) => t.isEnabled !== !1).filter((t) => (t.code ?? t.id) !== "admin" || $e.value).map((t) => ({
      id: t.id,
      label: t.name,
      // Routes follow the slug (changeable); the id stays the key.
      path: typeof r.appPath == "function" ? r.appPath(t.id, (t.code ?? t.id) === "admin" ? "apps" : "") : `/app/${t.slug || t.id}`,
      icon: we(t.icon),
      detail: t.description || "Micro-Frontend App"
    }))), te = r.getModuleState("shell.band", { end: [] }), f = r.getModuleState("shell.nav", { moduleId: "", title: "", icon: null, items: [], active: "", navigate: null }), ae = p(() => W.path.startsWith("/app/")), x = p(() => {
      let e = ae.value ? E.current_app : null;
      e === "expose" && (e = "workspace");
      const t = e && ee.value.find((a) => a.id === e);
      return t || (e && f.title ? { id: e, label: f.title, icon: f.icon || ie } : { id: "default", label: $?.t("shell.apps") ?? "Apps", icon: ie });
    }), Se = p(() => ae.value && f.items.length > 0);
    j(() => x.value.id, (e) => {
      e && e !== "default" && ye(e);
    }, { immediate: !0 });
    const se = async (e) => {
      if (!e || e === "default" || typeof r.loadAppManifest != "function") return null;
      const t = await r.loadAppManifest(e);
      if (!t) return null;
      const a = String(t.version ?? "dev");
      return r.getRegisteredApps?.().find((o) => o.id === e)?.channel === "stable" ? { label: "stable", title: `stable · ${a}` } : { label: a, title: a };
    }, U = _(""), K = _("");
    j(() => [x.value.id, x.value.version], async ([e]) => {
      U.value = "", K.value = "";
      const t = await se(e);
      x.value.id !== e || !t || (U.value = t.label, K.value = t.title);
    }, { immediate: !0 });
    const V = _({}), Ae = () => {
      for (const e of Ce()) {
        const t = `${e.id}@${e.version ?? ""}`;
        ne.has(t) || (ne.add(t), se(e.id).then((a) => {
          a && (V.value = { ...V.value, [e.id]: a });
        }));
      }
    }, ne = /* @__PURE__ */ new Set(), Ce = () => typeof r?.getRegisteredApps == "function" ? r.getRegisteredApps() : [];
    j(D, (e) => {
      e && Ae();
    });
    const Le = p(() => {
      const e = [];
      for (const t of f.items) {
        if (!t.group) {
          e.push({ group: null, item: t });
          continue;
        }
        const a = e.find((c) => c.group === t.group);
        a ? (a.items.push(t), a.icon ??= t.groupIcon) : e.push({ group: t.group, icon: t.groupIcon, items: [t] });
      }
      return e;
    }), F = (e) => e.find((t) => f.active === t.path) ?? null, R = p({
      get: () => E.current_workspace,
      set: (e) => {
        E.current_workspace = e;
      }
    });
    p(() => A.value.find((e) => String(e.id) === String(R.value)) || A.value[0]), j(() => W.params.moduleId, (e) => {
      const t = Array.isArray(e) ? e[0] : e, a = t && (r.findAppByRoute?.(t)?.id ?? t);
      a && E.current_app !== a && (E.current_app = a);
    }, { immediate: !0 });
    const ze = async () => {
      try {
        v.value = await r.doAction("auth.me");
      } catch {
        try {
          v.value = JSON.parse(localStorage.getItem("user") || "null");
        } catch {
        }
      }
    };
    r.on?.("auth:profile-updated", (e) => {
      v.value = { ...v.value || {}, ...e };
    });
    const Ee = async () => {
      try {
        const e = await r.doAction("workspace.list");
        A.value = e || [];
        const t = A.value.find((a) => String(a.id) === String(R.value));
        (!R.value || !t) && A.value.length > 0 && (R.value = String(A.value[0].id));
      } catch {
      }
    }, Ve = async () => {
      r.emit?.(He.AUTH_LOGOUT);
      try {
        r.doAction("auth.logout"), localStorage.removeItem("accessToken"), z.push("/login").catch(() => {
          window.location.href = "/login";
        });
      } catch {
        localStorage.removeItem("accessToken"), window.location.href = "/login";
      }
    }, Me = (e) => {
      D.value = !1, z.push(e);
    };
    return Oe(() => {
      ze(), Ee(), q(), typeof r?.on == "function" && r.on("apps:updated", (e) => {
        Array.isArray(e) ? O.value = e : q();
      });
    }), (e, t) => (n(), l("header", Je, [
      s("div", We, [
        s("div", Ye, [
          s("div", Qe, [
            (n(), m(h(e.$c("ui.dropdown")), {
              class: "app-switch",
              modelValue: D.value,
              "onUpdate:modelValue": t[0] || (t[0] = (a) => ke(a)),
              search: "",
              "search-placeholder": e.$t("shell.searchApps")
            }, {
              trigger: k(() => [
                s("button", {
                  type: "button",
                  class: "app-chip flex items-center gap-2 transition-colors outline-none group/app",
                  title: e.$t("shell.apps"),
                  "aria-label": e.$t("shell.apps"),
                  "data-testid": "apps-switch"
                }, [
                  s("span", {
                    class: J(["w-7 h-7 rounded-md grid place-items-center shrink-0 transition-colors", x.value.id === "default" ? "bg-muted text-muted-foreground" : "bg-primary-soft text-primary"])
                  }, [
                    (n(), m(h(x.value.icon), { size: 16 }))
                  ], 2),
                  s("span", Ze, d(x.value.label), 1),
                  U.value ? (n(), l("span", {
                    key: 0,
                    class: "app-version",
                    "data-testid": "current-app-version",
                    title: K.value
                  }, d(U.value), 9, qe)) : u("", !0),
                  g(i(I), {
                    size: 14,
                    class: "text-faint group-hover/app:text-foreground transition-colors"
                  })
                ], 8, Xe)
              ]),
              content: k(({ query: a }) => [
                s("div", et, [
                  s("div", tt, [
                    X(a).length ? u("", !0) : (n(), l("div", at, d(e.$t("common.empty")), 1)),
                    (n(!0), l(w, null, C(X(a), (c) => (n(), l("section", {
                      key: c.key,
                      class: "pt-1 last:pb-3",
                      "data-testid": `apps-section-${c.key}`
                    }, [
                      c.label ? (n(), l("div", nt, [
                        H(d(c.label), 1),
                        s("span", ot, d(c.tiles.length), 1)
                      ])) : u("", !0),
                      s("div", lt, [
                        (n(!0), l(w, null, C(c.tiles, (o) => (n(), l("div", {
                          key: o.key,
                          role: "button",
                          tabindex: "0",
                          class: "apps-item group",
                          "aria-current": o.id === x.value.id ? "true" : void 0,
                          onClick: (b) => o.run(),
                          onKeydown: Ue((b) => o.run(), ["enter"])
                        }, [
                          s("span", rt, [
                            (n(), m(h(o.icon), {
                              size: 16,
                              "stroke-width": "1.75"
                            }))
                          ]),
                          s("span", ct, [
                            s("span", dt, [
                              s("span", ut, d(o.label), 1),
                              V.value[o.id] ? (n(), l("span", {
                                key: 0,
                                class: "tile-version",
                                title: V.value[o.id].title,
                                "data-testid": "tile-version"
                              }, d(V.value[o.id].label), 9, pt)) : u("", !0)
                            ])
                          ]),
                          Z(o.id) ? (n(), l("span", {
                            key: 0,
                            class: "apps-item__used",
                            title: new Date(S.value[o.id]).toLocaleString(),
                            "data-testid": "tile-last-used"
                          }, d(Z(o.id)), 9, mt)) : u("", !0),
                          s("button", {
                            type: "button",
                            class: "icon-btn apps-item__star",
                            "aria-pressed": M(o.key),
                            "aria-label": e.$t("shell.toggleFavorite"),
                            "data-testid": "tile-star",
                            onClick: G((b) => _e(o.key), ["stop"])
                          }, [
                            g(i(Pe), {
                              size: 14,
                              class: J(M(o.key) ? "fill-warning text-warning" : "text-faint")
                            }, null, 8, ["class"])
                          ], 8, vt)
                        ], 40, it))), 128))
                      ])
                    ], 8, st))), 128))
                  ])
                ])
              ]),
              _: 1
            }, 8, ["modelValue", "search-placeholder"]))
          ])
        ]),
        s("div", ht, [
          s("div", {
            class: "flex items-center gap-3 cursor-pointer group/logo",
            "data-testid": "brand",
            title: y.value?.name,
            onClick: t[1] || (t[1] = (a) => i(z).push(y.value?.homePath || "/"))
          }, [
            y.value?.logo ? (n(), l(w, { key: 0 }, [
              Y.value && y.value.logoDark ? (n(), l("img", {
                key: 0,
                src: y.value.logoDark,
                alt: y.value.name,
                class: "h-7 w-auto max-w-[200px] object-contain"
              }, null, 8, ft)) : (n(), l("span", {
                key: 1,
                class: J(["inline-flex items-center rounded-md", Y.value && "bg-white/95 px-2 py-1"])
              }, [
                s("img", {
                  src: y.value.logo,
                  alt: y.value.name,
                  class: "h-7 w-auto max-w-[200px] object-contain"
                }, null, 8, bt)
              ], 2)),
              y.value.tagline ? (n(), l("span", _t, d(y.value.tagline), 1)) : u("", !0)
            ], 64)) : (n(), l(w, { key: 1 }, [
              t[8] || (t[8] = Re('<div class="relative" data-v-26aaecbd><div class="w-9 h-9 bg-primary rounded-xl flex items-center justify-center relative z-10 transition-transform group-hover/logo:scale-110 shadow-xl border border-border-soft" data-v-26aaecbd><span class="text-primary-foreground font-black text-xs tracking-tighter" data-v-26aaecbd>MP</span></div></div><div class="flex flex-col text-left" data-v-26aaecbd><span class="text-[11px] font-black uppercase tracking-[0.4em] hdr-ink transition-colors leading-none mb-1" data-v-26aaecbd>Antigravity</span><span class="text-[9px] font-black uppercase tracking-[0.2em] hdr-faint" data-v-26aaecbd>Core OS v5</span></div>', 2))
            ], 64))
          ], 8, gt)
        ]),
        s("div", yt, [
          s("div", kt, [
            i($) ? (n(), m(h(e.$c("ui.dropdown")), {
              key: 0,
              modelValue: P.value,
              "onUpdate:modelValue": t[2] || (t[2] = (a) => P.value = a),
              align: "right"
            }, {
              trigger: k(() => [
                s("button", {
                  type: "button",
                  class: "h-9 px-2 rounded-lg flex items-center gap-1 whitespace-nowrap shrink-0 hdr-btn transition-colors outline-none",
                  title: e.$t("shell.language"),
                  "aria-label": e.$t("shell.language"),
                  "data-testid": "lang-switch"
                }, [
                  g(ce, {
                    locale: i($).locale,
                    size: 20
                  }, null, 8, ["locale"]),
                  g(i(I), {
                    size: 13,
                    class: "hdr-faint"
                  })
                ], 8, wt)
              ]),
              content: k(() => [
                s("div", xt, [
                  s("div", $t, d(e.$t("shell.language")), 1),
                  (n(!0), l(w, null, C(i($).availableLocales, (a) => (n(), l("button", {
                    key: a,
                    type: "button",
                    class: "pop-item justify-between whitespace-nowrap",
                    "aria-selected": i($).locale === a,
                    onClick: (c) => ge(a)
                  }, [
                    s("span", At, [
                      g(ce, {
                        locale: a,
                        size: 22
                      }, null, 8, ["locale"]),
                      s("span", null, d(he[a] ?? a), 1)
                    ]),
                    i($).locale === a ? (n(), m(i(re), {
                      key: 0,
                      size: 14,
                      class: "text-primary"
                    })) : u("", !0)
                  ], 8, St))), 128))
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])) : u("", !0)
          ]),
          t[10] || (t[10] = s("div", { class: "h-6 w-px hdr-sep mx-1 hidden md:block" }, null, -1)),
          (n(), m(h(e.$c("ui.dropdown")), {
            modelValue: N.value,
            "onUpdate:modelValue": t[5] || (t[5] = (a) => N.value = a),
            align: "right"
          }, {
            trigger: k(() => [
              s("button", Ct, [
                s("span", Lt, d(v.value?.username || "User"), 1),
                g(de, {
                  src: v.value?.avatar,
                  name: v.value?.username || "User",
                  size: 28,
                  rounded: "lg"
                }, null, 8, ["src", "name"]),
                g(i(I), {
                  size: 13,
                  class: "hdr-faint"
                })
              ])
            ]),
            content: k(() => [
              s("div", zt, [
                s("div", Et, [
                  g(de, {
                    src: v.value?.avatar,
                    name: v.value?.username || "User",
                    size: 36,
                    rounded: "lg"
                  }, null, 8, ["src", "name"]),
                  s("div", Vt, [
                    s("div", Mt, d(v.value?.username), 1),
                    s("div", Dt, d(v.value?.email || v.value?.role), 1)
                  ])
                ]),
                s("button", {
                  type: "button",
                  class: "pop-item",
                  "data-testid": "menu-profile",
                  onClick: t[3] || (t[3] = (a) => {
                    i(z).push("/account/profile"), N.value = !1;
                  })
                }, [
                  g(i(Ke), {
                    size: 15,
                    class: "text-muted-foreground"
                  }),
                  s("span", null, d(e.$t("shell.profile")), 1)
                ]),
                s("button", {
                  type: "button",
                  class: "pop-item",
                  onClick: t[4] || (t[4] = (a) => {
                    i(z).push("/system/theme"), N.value = !1;
                  })
                }, [
                  g(i(Fe), {
                    size: 15,
                    class: "text-muted-foreground"
                  }),
                  s("span", null, d(e.$t("system.themeStudio", { default: "Theme Studio" })), 1)
                ]),
                t[9] || (t[9] = s("div", { class: "pop-sep" }, null, -1)),
                s("button", {
                  type: "button",
                  class: "pop-item danger",
                  onClick: Ve
                }, [
                  g(i(Be), { size: 15 }),
                  s("span", null, d(e.$t("shell.logout")), 1)
                ])
              ])
            ]),
            _: 1
          }, 8, ["modelValue"]))
        ])
      ]),
      s("div", Nt, [
        s("div", Ot, [
          Se.value ? (n(), l("nav", Ut, [
            (n(!0), l(w, null, C(Le.value, (a) => (n(), l(w, {
              key: a.group ?? a.item.path
            }, [
              a.group === null ? (n(), l("button", {
                key: 0,
                type: "button",
                class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                role: "tab",
                "aria-selected": i(f).active === a.item.path,
                onMousedown: t[6] || (t[6] = G(() => {
                }, ["prevent"])),
                onClick: (c) => i(f).navigate?.(a.item.path)
              }, [
                a.item.icon ? (n(), m(h(a.item.icon), {
                  key: 0,
                  size: 13
                })) : u("", !0),
                H(" " + d(a.item.label) + " ", 1),
                a.item.badge !== void 0 ? (n(), l("span", jt, d(a.item.badge), 1)) : u("", !0)
              ], 40, Rt)) : (n(), m(h(e.$c("ui.popover")), {
                key: 1,
                class: "band-group",
                align: "start"
              }, {
                default: k(({ close: c }) => [
                  (n(), m(h(e.$c("ui.popover-trigger")), { class: "band-group__trigger" }, {
                    default: k(() => [
                      s("button", {
                        type: "button",
                        class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                        role: "tab",
                        "aria-selected": !!F(a.items),
                        "aria-haspopup": "menu",
                        onMousedown: t[7] || (t[7] = G(() => {
                        }, ["prevent"])),
                        "data-testid": `app-nav-group-${a.group}`
                      }, [
                        a.icon ? (n(), m(h(a.icon), {
                          key: 0,
                          size: 13
                        })) : u("", !0),
                        H(" " + d(a.group) + " ", 1),
                        F(a.items) ? (n(), l("span", Tt, "· " + d(F(a.items).label), 1)) : u("", !0),
                        g(i(I), { size: 12 })
                      ], 40, It)
                    ]),
                    _: 2
                  }, 1024)),
                  (n(), m(h(e.$c("ui.popover-content")), {
                    align: "start",
                    class: "p-1"
                  }, {
                    default: k(() => [
                      s("div", Pt, [
                        (n(!0), l(w, null, C(a.items, (o) => (n(), l("button", {
                          key: o.path,
                          type: "button",
                          class: "pop-item whitespace-nowrap",
                          role: "menuitem",
                          "aria-selected": i(f).active === o.path,
                          disabled: o.disabled,
                          "aria-disabled": o.disabled || void 0,
                          onClick: (b) => {
                            c(), i(f).navigate?.(o.path);
                          }
                        }, [
                          o.icon ? (n(), m(h(o.icon), {
                            key: 0,
                            size: 15,
                            class: "text-muted-foreground"
                          })) : u("", !0),
                          s("span", Ft, d(o.label), 1),
                          i(f).active === o.path ? (n(), m(i(re), {
                            key: 1,
                            size: 14,
                            class: "text-primary"
                          })) : u("", !0)
                        ], 8, Kt))), 128))
                      ])
                    ]),
                    _: 2
                  }, 1024))
                ]),
                _: 2
              }, 1024))
            ], 64))), 128))
          ])) : u("", !0),
          i(te).end?.length ? (n(), l("div", Bt, [
            (n(!0), l(w, null, C(i(te).end, (a, c) => (n(), m(h(a), { key: c }))), 128))
          ])) : u("", !0)
        ])
      ])
    ]));
  }
}), aa = /* @__PURE__ */ Ge(Ht, [["__scopeId", "data-v-26aaecbd"]]);
export {
  aa as default
};
//# sourceMappingURL=Header-DCFXwTr1.js.map
