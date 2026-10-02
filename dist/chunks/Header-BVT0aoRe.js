import { defineComponent as De, inject as Ne, computed as p, ref as _, watch as j, onMounted as Oe, openBlock as n, createElementBlock as l, createElementVNode as a, createBlock as m, resolveDynamicComponent as h, withCtx as y, toDisplayString as c, createCommentVNode as u, Fragment as k, renderList as C, createTextVNode as H, withKeys as Ue, withModifiers as G, createVNode as f, unref as i, normalizeClass as J, createStaticVNode as Re } from "vue";
import { appIcon as je } from "../index.js";
import { useRouter as Ie, useRoute as Te } from "vue-router";
import { LayoutGrid as ie, Star as Pe, ChevronDown as I, Check as re, User as Ke, Palette as Fe, LogOut as Be } from "lucide-vue-next";
import { SUPERAPP_EVENTS as He } from "@nhphero/vue-sapp/contracts";
import { _ as de } from "./LocaleFlag.vue_vue_type_script_setup_true_lang-D2eeZNym.js";
import { _ as ce } from "./UserAvatar.vue_vue_type_script_setup_true_lang-AXBFwsc7.js";
import { _ as Ge } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const Je = { class: "shell-header w-full sticky top-0 z-[100] transition-colors duration-300" }, We = { class: "shell-header__row shell-header__wide" }, Ye = { class: "flex items-center min-w-0 justify-self-start" }, Qe = { class: "flex items-center shrink-0 min-w-0" }, Xe = ["title", "aria-label"], Ze = {
  class: "text-sm font-semibold text-foreground whitespace-nowrap",
  "data-testid": "current-app"
}, qe = ["title"], et = { class: "apps-menu" }, tt = { class: "apps-menu__all" }, st = {
  key: 0,
  class: "px-3 py-6 text-sm text-faint text-center"
}, at = ["data-testid"], nt = {
  key: 0,
  class: "pop-head flex items-center gap-1.5"
}, ot = { class: "text-faint font-normal" }, lt = { class: "apps-list" }, it = ["aria-current", "onClick", "onKeydown"], rt = { class: "apps-item__icon" }, dt = { class: "apps-item__text" }, ct = { class: "apps-item__name" }, ut = { class: "truncate" }, pt = ["title"], mt = ["title"], vt = ["aria-pressed", "aria-label", "onClick"], ht = { class: "flex items-center justify-center min-w-0" }, ft = ["title"], gt = ["src", "alt"], bt = ["src", "alt"], _t = { class: "flex items-center gap-2 justify-self-end" }, yt = { class: "hidden md:flex items-center gap-1 flex-nowrap shrink-0" }, kt = ["title", "aria-label"], wt = { class: "w-52" }, xt = { class: "pop-head" }, $t = ["aria-selected", "onClick"], St = { class: "flex items-center gap-2.5" }, At = {
  type: "button",
  class: "h-9 flex items-center gap-2 pl-2.5 pr-1.5 rounded-lg hdr-btn cursor-pointer transition-colors outline-none",
  "data-testid": "user-menu"
}, Ct = { class: "hidden lg:block text-sm font-semibold hdr-ink whitespace-nowrap" }, Lt = { class: "w-60" }, zt = { class: "flex items-center gap-3 px-2 py-2.5 mb-1 border-b border-border-soft" }, Et = { class: "min-w-0" }, Vt = { class: "text-sm font-semibold text-foreground truncate" }, Mt = { class: "text-xs text-faint truncate" }, Dt = { class: "app-band" }, Nt = { class: "page-container flex items-stretch gap-3" }, Ot = {
  key: 0,
  class: "tabs tabs--band min-w-0 overflow-x-auto no-scrollbar",
  role: "tablist",
  "data-testid": "app-nav"
}, Ut = ["aria-selected", "onClick"], Rt = {
  key: 1,
  class: "badge"
}, jt = ["aria-selected", "data-testid"], It = {
  key: 1,
  class: "band-group__current"
}, Tt = {
  class: "min-w-56 flex flex-col",
  role: "menu"
}, Pt = ["aria-selected", "disabled", "aria-disabled", "onClick"], Kt = { class: "flex-1" }, Ft = {
  key: 1,
  class: "app-band__end",
  "data-testid": "app-band-end"
}, ue = "sapp:app-last-used", pe = "sapp:recent-apps", Bt = /* @__PURE__ */ De({
  __name: "Header",
  setup(Ht) {
    const r = Ne("$superApp"), L = r, z = Ie(), W = Te(), E = L.$appState, T = L.$themeConfig, w = p(() => L.$config?.branding ?? null), me = p(() => T?.state?.mode === "dark" || T?.state?.mode === "system" && window.matchMedia?.("(prefers-color-scheme: dark)").matches), ve = ["brand", "gradient", "dark"], Y = p(() => me.value || ve.includes(T?.state?.header)), $ = L.$i18n, P = _(!1), he = { vi: "Tiếng Việt", en: "English", ja: "日本語", ko: "한국어", zh: "中文", fr: "Français", de: "Deutsch" }, fe = (e) => {
      $?.setLocale(e), P.value = !1;
    }, ge = p(
      () => ee.value.map((e) => ({ key: `app:${e.id}`, id: e.id, label: e.label, detail: e.detail, icon: e.icon, run: () => Me(e.path) }))
    ), Q = p(() => r?.getModuleState?.("home", { favorites: [] })), be = p(() => Q.value?.favorites ?? []), M = (e) => be.value.includes(e), _e = (e) => Q.value?.toggleFavorite?.(e), X = (e) => {
      const t = (e || "").trim().toLowerCase(), s = (b) => !t || `${b.label} ${b.detail || ""} ${b.id}`.toLowerCase().includes(t), o = [...ge.value.filter(s)].sort((b, B) => {
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
          return Object.fromEntries(Object.entries(e).filter(([, d]) => typeof d == "number"));
        const t = JSON.parse(localStorage.getItem(pe) || "[]"), s = Date.now();
        return Array.isArray(t) ? Object.fromEntries(t.filter((d) => typeof d == "string").map((d, o) => [d, s - o * 1e3])) : {};
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
    }))), te = r.getModuleState("shell.band", { end: [] }), g = r.getModuleState("shell.nav", { moduleId: "", title: "", icon: null, items: [], active: "", navigate: null }), se = p(() => W.path.startsWith("/app/")), x = p(() => {
      let e = se.value ? E.current_app : null;
      e === "expose" && (e = "workspace");
      const t = e && ee.value.find((s) => s.id === e);
      return t || (e && g.title ? { id: e, label: g.title, icon: g.icon || ie } : { id: "default", label: $?.t("shell.apps") ?? "Apps", icon: ie });
    }), Se = p(() => se.value && g.items.length > 0);
    j(() => x.value.id, (e) => {
      e && e !== "default" && ye(e);
    }, { immediate: !0 });
    const ae = async (e) => {
      if (!e || e === "default" || typeof r.loadAppManifest != "function") return null;
      const t = await r.loadAppManifest(e);
      if (!t) return null;
      const s = String(t.version ?? "dev");
      return r.getRegisteredApps?.().find((o) => o.id === e)?.channel === "stable" ? { label: "stable", title: `stable · ${s}` } : { label: s, title: s };
    }, U = _(""), K = _("");
    j(() => [x.value.id, x.value.version], async ([e]) => {
      U.value = "", K.value = "";
      const t = await ae(e);
      x.value.id !== e || !t || (U.value = t.label, K.value = t.title);
    }, { immediate: !0 });
    const V = _({}), Ae = () => {
      for (const e of Ce()) {
        const t = `${e.id}@${e.version ?? ""}`;
        ne.has(t) || (ne.add(t), ae(e.id).then((s) => {
          s && (V.value = { ...V.value, [e.id]: s });
        }));
      }
    }, ne = /* @__PURE__ */ new Set(), Ce = () => typeof r?.getRegisteredApps == "function" ? r.getRegisteredApps() : [];
    j(D, (e) => {
      e && Ae();
    });
    const Le = p(() => {
      const e = [];
      for (const t of g.items) {
        if (!t.group) {
          e.push({ group: null, item: t });
          continue;
        }
        const s = e.find((d) => d.group === t.group);
        s ? (s.items.push(t), s.icon ??= t.groupIcon) : e.push({ group: t.group, icon: t.groupIcon, items: [t] });
      }
      return e;
    }), F = (e) => e.find((t) => g.active === t.path) ?? null, R = p({
      get: () => E.current_workspace,
      set: (e) => {
        E.current_workspace = e;
      }
    });
    p(() => A.value.find((e) => String(e.id) === String(R.value)) || A.value[0]), j(() => W.params.moduleId, (e) => {
      const t = Array.isArray(e) ? e[0] : e, s = t && (r.findAppByRoute?.(t)?.id ?? t);
      s && E.current_app !== s && (E.current_app = s);
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
        const t = A.value.find((s) => String(s.id) === String(R.value));
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
      a("div", We, [
        a("div", Ye, [
          a("div", Qe, [
            (n(), m(h(e.$c("ui.dropdown")), {
              class: "app-switch",
              modelValue: D.value,
              "onUpdate:modelValue": t[0] || (t[0] = (s) => ke(s)),
              search: "",
              "search-placeholder": e.$t("shell.searchApps")
            }, {
              trigger: y(() => [
                a("button", {
                  type: "button",
                  class: "app-chip flex items-center gap-2 transition-colors outline-none group/app",
                  title: e.$t("shell.apps"),
                  "aria-label": e.$t("shell.apps"),
                  "data-testid": "apps-switch"
                }, [
                  a("span", {
                    class: J(["w-7 h-7 rounded-md grid place-items-center shrink-0 transition-colors", x.value.id === "default" ? "bg-muted text-muted-foreground" : "bg-primary-soft text-primary"])
                  }, [
                    (n(), m(h(x.value.icon), { size: 16 }))
                  ], 2),
                  a("span", Ze, c(x.value.label), 1),
                  U.value ? (n(), l("span", {
                    key: 0,
                    class: "app-version",
                    "data-testid": "current-app-version",
                    title: K.value
                  }, c(U.value), 9, qe)) : u("", !0),
                  f(i(I), {
                    size: 14,
                    class: "text-faint group-hover/app:text-foreground transition-colors"
                  })
                ], 8, Xe)
              ]),
              content: y(({ query: s }) => [
                a("div", et, [
                  a("div", tt, [
                    X(s).length ? u("", !0) : (n(), l("div", st, c(e.$t("common.empty")), 1)),
                    (n(!0), l(k, null, C(X(s), (d) => (n(), l("section", {
                      key: d.key,
                      class: "pt-1 last:pb-3",
                      "data-testid": `apps-section-${d.key}`
                    }, [
                      d.label ? (n(), l("div", nt, [
                        H(c(d.label), 1),
                        a("span", ot, c(d.tiles.length), 1)
                      ])) : u("", !0),
                      a("div", lt, [
                        (n(!0), l(k, null, C(d.tiles, (o) => (n(), l("div", {
                          key: o.key,
                          role: "button",
                          tabindex: "0",
                          class: "apps-item group",
                          "aria-current": o.id === x.value.id ? "true" : void 0,
                          onClick: (b) => o.run(),
                          onKeydown: Ue((b) => o.run(), ["enter"])
                        }, [
                          a("span", rt, [
                            (n(), m(h(o.icon), {
                              size: 16,
                              "stroke-width": "1.75"
                            }))
                          ]),
                          a("span", dt, [
                            a("span", ct, [
                              a("span", ut, c(o.label), 1),
                              V.value[o.id] ? (n(), l("span", {
                                key: 0,
                                class: "tile-version",
                                title: V.value[o.id].title,
                                "data-testid": "tile-version"
                              }, c(V.value[o.id].label), 9, pt)) : u("", !0)
                            ])
                          ]),
                          Z(o.id) ? (n(), l("span", {
                            key: 0,
                            class: "apps-item__used",
                            title: new Date(S.value[o.id]).toLocaleString(),
                            "data-testid": "tile-last-used"
                          }, c(Z(o.id)), 9, mt)) : u("", !0),
                          a("button", {
                            type: "button",
                            class: "icon-btn apps-item__star",
                            "aria-pressed": M(o.key),
                            "aria-label": e.$t("shell.toggleFavorite"),
                            "data-testid": "tile-star",
                            onClick: G((b) => _e(o.key), ["stop"])
                          }, [
                            f(i(Pe), {
                              size: 14,
                              class: J(M(o.key) ? "fill-warning text-warning" : "text-faint")
                            }, null, 8, ["class"])
                          ], 8, vt)
                        ], 40, it))), 128))
                      ])
                    ], 8, at))), 128))
                  ])
                ])
              ]),
              _: 1
            }, 8, ["modelValue", "search-placeholder"]))
          ])
        ]),
        a("div", ht, [
          a("div", {
            class: "flex items-center gap-3 cursor-pointer group/logo",
            "data-testid": "brand",
            title: w.value?.name,
            onClick: t[1] || (t[1] = (s) => i(z).push(w.value?.homePath || "/"))
          }, [
            w.value?.logo ? (n(), l(k, { key: 0 }, [
              Y.value && w.value.logoDark ? (n(), l("img", {
                key: 0,
                src: w.value.logoDark,
                alt: w.value.name,
                class: "h-7 w-auto max-w-[200px] object-contain"
              }, null, 8, gt)) : (n(), l("span", {
                key: 1,
                class: J(["inline-flex items-center rounded-md", Y.value && "bg-white/95 px-2 py-1"])
              }, [
                a("img", {
                  src: w.value.logo,
                  alt: w.value.name,
                  class: "h-7 w-auto max-w-[200px] object-contain"
                }, null, 8, bt)
              ], 2))
            ], 64)) : (n(), l(k, { key: 1 }, [
              t[8] || (t[8] = Re('<div class="relative" data-v-af45a99d><div class="w-9 h-9 bg-primary rounded-xl flex items-center justify-center relative z-10 transition-transform group-hover/logo:scale-110 shadow-xl border border-border-soft" data-v-af45a99d><span class="text-primary-foreground font-black text-xs tracking-tighter" data-v-af45a99d>MP</span></div></div><div class="flex flex-col text-left" data-v-af45a99d><span class="text-[11px] font-black uppercase tracking-[0.4em] hdr-ink transition-colors leading-none mb-1" data-v-af45a99d>Antigravity</span><span class="text-[9px] font-black uppercase tracking-[0.2em] hdr-faint" data-v-af45a99d>Core OS v5</span></div>', 2))
            ], 64))
          ], 8, ft)
        ]),
        a("div", _t, [
          a("div", yt, [
            i($) ? (n(), m(h(e.$c("ui.dropdown")), {
              key: 0,
              modelValue: P.value,
              "onUpdate:modelValue": t[2] || (t[2] = (s) => P.value = s),
              align: "right"
            }, {
              trigger: y(() => [
                a("button", {
                  type: "button",
                  class: "h-9 px-2 rounded-lg flex items-center gap-1 whitespace-nowrap shrink-0 hdr-btn transition-colors outline-none",
                  title: e.$t("shell.language"),
                  "aria-label": e.$t("shell.language"),
                  "data-testid": "lang-switch"
                }, [
                  f(de, {
                    locale: i($).locale,
                    size: 20
                  }, null, 8, ["locale"]),
                  f(i(I), {
                    size: 13,
                    class: "hdr-faint"
                  })
                ], 8, kt)
              ]),
              content: y(() => [
                a("div", wt, [
                  a("div", xt, c(e.$t("shell.language")), 1),
                  (n(!0), l(k, null, C(i($).availableLocales, (s) => (n(), l("button", {
                    key: s,
                    type: "button",
                    class: "pop-item justify-between whitespace-nowrap",
                    "aria-selected": i($).locale === s,
                    onClick: (d) => fe(s)
                  }, [
                    a("span", St, [
                      f(de, {
                        locale: s,
                        size: 22
                      }, null, 8, ["locale"]),
                      a("span", null, c(he[s] ?? s), 1)
                    ]),
                    i($).locale === s ? (n(), m(i(re), {
                      key: 0,
                      size: 14,
                      class: "text-primary"
                    })) : u("", !0)
                  ], 8, $t))), 128))
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])) : u("", !0)
          ]),
          t[10] || (t[10] = a("div", { class: "h-6 w-px hdr-sep mx-1 hidden md:block" }, null, -1)),
          (n(), m(h(e.$c("ui.dropdown")), {
            modelValue: N.value,
            "onUpdate:modelValue": t[5] || (t[5] = (s) => N.value = s),
            align: "right"
          }, {
            trigger: y(() => [
              a("button", At, [
                a("span", Ct, c(v.value?.username || "User"), 1),
                f(ce, {
                  src: v.value?.avatar,
                  name: v.value?.username || "User",
                  size: 28,
                  rounded: "lg"
                }, null, 8, ["src", "name"]),
                f(i(I), {
                  size: 13,
                  class: "hdr-faint"
                })
              ])
            ]),
            content: y(() => [
              a("div", Lt, [
                a("div", zt, [
                  f(ce, {
                    src: v.value?.avatar,
                    name: v.value?.username || "User",
                    size: 36,
                    rounded: "lg"
                  }, null, 8, ["src", "name"]),
                  a("div", Et, [
                    a("div", Vt, c(v.value?.username), 1),
                    a("div", Mt, c(v.value?.email || v.value?.role), 1)
                  ])
                ]),
                a("button", {
                  type: "button",
                  class: "pop-item",
                  "data-testid": "menu-profile",
                  onClick: t[3] || (t[3] = (s) => {
                    i(z).push("/account/profile"), N.value = !1;
                  })
                }, [
                  f(i(Ke), {
                    size: 15,
                    class: "text-muted-foreground"
                  }),
                  a("span", null, c(e.$t("shell.profile")), 1)
                ]),
                a("button", {
                  type: "button",
                  class: "pop-item",
                  onClick: t[4] || (t[4] = (s) => {
                    i(z).push("/system/theme"), N.value = !1;
                  })
                }, [
                  f(i(Fe), {
                    size: 15,
                    class: "text-muted-foreground"
                  }),
                  a("span", null, c(e.$t("system.themeStudio", { default: "Theme Studio" })), 1)
                ]),
                t[9] || (t[9] = a("div", { class: "pop-sep" }, null, -1)),
                a("button", {
                  type: "button",
                  class: "pop-item danger",
                  onClick: Ve
                }, [
                  f(i(Be), { size: 15 }),
                  a("span", null, c(e.$t("shell.logout")), 1)
                ])
              ])
            ]),
            _: 1
          }, 8, ["modelValue"]))
        ])
      ]),
      a("div", Dt, [
        a("div", Nt, [
          Se.value ? (n(), l("nav", Ot, [
            (n(!0), l(k, null, C(Le.value, (s) => (n(), l(k, {
              key: s.group ?? s.item.path
            }, [
              s.group === null ? (n(), l("button", {
                key: 0,
                type: "button",
                class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                role: "tab",
                "aria-selected": i(g).active === s.item.path,
                onMousedown: t[6] || (t[6] = G(() => {
                }, ["prevent"])),
                onClick: (d) => i(g).navigate?.(s.item.path)
              }, [
                s.item.icon ? (n(), m(h(s.item.icon), {
                  key: 0,
                  size: 13
                })) : u("", !0),
                H(" " + c(s.item.label) + " ", 1),
                s.item.badge !== void 0 ? (n(), l("span", Rt, c(s.item.badge), 1)) : u("", !0)
              ], 40, Ut)) : (n(), m(h(e.$c("ui.popover")), {
                key: 1,
                class: "band-group",
                align: "start"
              }, {
                default: y(({ close: d }) => [
                  (n(), m(h(e.$c("ui.popover-trigger")), { class: "band-group__trigger" }, {
                    default: y(() => [
                      a("button", {
                        type: "button",
                        class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                        role: "tab",
                        "aria-selected": !!F(s.items),
                        "aria-haspopup": "menu",
                        onMousedown: t[7] || (t[7] = G(() => {
                        }, ["prevent"])),
                        "data-testid": `app-nav-group-${s.group}`
                      }, [
                        s.icon ? (n(), m(h(s.icon), {
                          key: 0,
                          size: 13
                        })) : u("", !0),
                        H(" " + c(s.group) + " ", 1),
                        F(s.items) ? (n(), l("span", It, "· " + c(F(s.items).label), 1)) : u("", !0),
                        f(i(I), { size: 12 })
                      ], 40, jt)
                    ]),
                    _: 2
                  }, 1024)),
                  (n(), m(h(e.$c("ui.popover-content")), {
                    align: "start",
                    class: "p-1"
                  }, {
                    default: y(() => [
                      a("div", Tt, [
                        (n(!0), l(k, null, C(s.items, (o) => (n(), l("button", {
                          key: o.path,
                          type: "button",
                          class: "pop-item whitespace-nowrap",
                          role: "menuitem",
                          "aria-selected": i(g).active === o.path,
                          disabled: o.disabled,
                          "aria-disabled": o.disabled || void 0,
                          onClick: (b) => {
                            d(), i(g).navigate?.(o.path);
                          }
                        }, [
                          o.icon ? (n(), m(h(o.icon), {
                            key: 0,
                            size: 15,
                            class: "text-muted-foreground"
                          })) : u("", !0),
                          a("span", Kt, c(o.label), 1),
                          i(g).active === o.path ? (n(), m(i(re), {
                            key: 1,
                            size: 14,
                            class: "text-primary"
                          })) : u("", !0)
                        ], 8, Pt))), 128))
                      ])
                    ]),
                    _: 2
                  }, 1024))
                ]),
                _: 2
              }, 1024))
            ], 64))), 128))
          ])) : u("", !0),
          i(te).end?.length ? (n(), l("div", Ft, [
            (n(!0), l(k, null, C(i(te).end, (s, d) => (n(), m(h(s), { key: d }))), 128))
          ])) : u("", !0)
        ])
      ])
    ]));
  }
}), ts = /* @__PURE__ */ Ge(Bt, [["__scopeId", "data-v-af45a99d"]]);
export {
  ts as default
};
//# sourceMappingURL=Header-BVT0aoRe.js.map
