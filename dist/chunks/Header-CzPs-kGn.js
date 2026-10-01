import { defineComponent as Ve, inject as Ee, computed as p, ref as b, watch as F, onMounted as Ne, openBlock as o, createElementBlock as i, createElementVNode as a, unref as c, Fragment as k, normalizeClass as P, toDisplayString as r, createCommentVNode as u, createStaticVNode as Te, createBlock as v, resolveDynamicComponent as g, withCtx as x, renderList as M, createVNode as h, createTextVNode as W, withKeys as Re, withModifiers as H } from "vue";
import { useRouter as Ie, useRoute as Oe } from "vue-router";
import { LayoutGrid as E, Check as ce, ChevronDown as j, User as Ue, Palette as De, LogOut as Fe, Star as Pe, Database as je, AppWindow as Be, Terminal as Ge, Cpu as Ke, Box as We, Zap as He, Layers as Je, Globe as Xe, Shield as Ye } from "lucide-vue-next";
import { SUPERAPP_EVENTS as Ze } from "@nhphero/vue-sapp/contracts";
import { _ as de } from "./LocaleFlag.vue_vue_type_script_setup_true_lang-D2eeZNym.js";
import { _ as ue } from "./UserAvatar.vue_vue_type_script_setup_true_lang-AXBFwsc7.js";
import { _ as Qe } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const qe = { class: "w-full bg-background sticky top-0 z-[100] transition-colors duration-300" }, et = { class: "page-container h-(--header-h) flex items-center justify-between gap-4" }, tt = { class: "flex items-center gap-3 min-w-0" }, st = ["title"], at = ["src", "alt"], ot = ["src", "alt"], nt = {
  key: 2,
  class: "hidden lg:block text-[10px] font-bold uppercase tracking-[0.2em] text-faint border-l border-border-soft pl-3"
}, it = { class: "flex items-center gap-2" }, lt = { class: "hidden md:flex items-center gap-1 flex-nowrap shrink-0" }, rt = ["title", "aria-label"], ct = { class: "w-52" }, dt = { class: "pop-head" }, ut = ["aria-selected", "onClick"], pt = { class: "flex items-center gap-2.5" }, vt = {
  type: "button",
  class: "h-9 flex items-center gap-2 pl-2.5 pr-1.5 rounded-lg hover:bg-muted cursor-pointer transition-colors outline-none",
  "data-testid": "user-menu"
}, mt = { class: "hidden lg:block text-sm font-semibold text-foreground whitespace-nowrap" }, gt = { class: "w-60" }, ht = { class: "flex items-center gap-3 px-2 py-2.5 mb-1 border-b border-border-soft" }, ft = { class: "min-w-0" }, bt = { class: "text-sm font-semibold text-foreground truncate" }, _t = { class: "text-xs text-faint truncate" }, yt = { class: "app-band" }, kt = { class: "page-container flex items-stretch gap-3" }, xt = { class: "flex items-stretch shrink-0" }, wt = ["title", "aria-label"], $t = {
  class: "text-sm font-semibold text-foreground whitespace-nowrap",
  "data-testid": "current-app"
}, At = ["title"], Ct = { class: "w-[720px] max-w-[calc(100vw-32px)]" }, St = {
  key: 0,
  class: "recent-apps",
  "data-testid": "apps-recent"
}, Mt = { class: "pop-head" }, zt = { class: "recent-apps__row" }, Lt = ["title", "onClick"], Vt = { class: "truncate" }, Et = ["title"], Nt = {
  key: 1,
  class: "px-3 py-6 text-sm text-faint text-center"
}, Tt = ["data-testid"], Rt = {
  key: 0,
  class: "pop-head flex items-center gap-1.5"
}, It = { class: "text-faint font-normal" }, Ot = { class: "px-2 pb-1 grid gap-1 sm:grid-cols-2 lg:grid-cols-3" }, Ut = ["onClick", "onKeydown", "aria-current"], Dt = { class: "min-w-0 flex-1" }, Ft = { class: "flex items-center gap-1.5 min-w-0" }, Pt = { class: "text-sm font-semibold truncate group-hover:text-primary transition-colors" }, jt = ["title"], Bt = { class: "block text-xs text-muted-foreground truncate" }, Gt = ["aria-pressed", "aria-label", "onClick"], Kt = {
  key: 0,
  class: "app-band__sep self-center h-5 w-px shrink-0"
}, Wt = {
  key: 1,
  class: "tabs tabs--band min-w-0 overflow-x-auto no-scrollbar",
  role: "tablist",
  "data-testid": "app-nav"
}, Ht = ["aria-selected", "onClick"], Jt = {
  key: 1,
  class: "badge"
}, Xt = ["aria-selected", "data-testid"], Yt = {
  key: 1,
  class: "band-group__current"
}, Zt = {
  class: "min-w-56 flex flex-col",
  role: "menu"
}, Qt = ["aria-selected", "disabled", "aria-disabled", "onClick"], qt = { class: "flex-1" }, pe = "sapp:recent-apps", es = 5, ve = 10, ts = /* @__PURE__ */ Ve({
  __name: "Header",
  setup(ss) {
    const d = Ee("$superApp"), z = d, L = Ie(), J = Oe(), V = z.$appState, X = z.$themeConfig, _ = p(() => z.$config?.branding ?? null), Y = p(() => X?.state?.mode === "dark" || X?.state?.mode === "system" && window.matchMedia?.("(prefers-color-scheme: dark)").matches), $ = z.$i18n, B = b(!1), me = { vi: "Tiếng Việt", en: "English", ja: "日本語", ko: "한국어", zh: "中文", fr: "Français", de: "Deutsch" }, ge = (e) => {
      $?.setLocale(e), B.value = !1;
    }, Z = p(
      () => oe.value.map((e) => ({ key: `app:${e.id}`, id: e.id, label: e.label, detail: e.detail, icon: e.icon, run: () => Le(e.path) }))
    ), Q = p(() => d?.getModuleState?.("home", { favorites: [] })), q = p(() => Q.value?.favorites ?? []), ee = (e) => q.value.includes(e), he = (e) => Q.value?.toggleFavorite?.(e), te = (e) => {
      const t = (e || "").trim().toLowerCase(), s = (A) => !t || `${A.label} ${A.detail || ""} ${A.id}`.toLowerCase().includes(t), l = Z.value.filter(s), n = (A) => {
        const D = q.value.indexOf(A.key);
        return D === -1 ? Number.MAX_SAFE_INTEGER : D;
      }, S = [...l].sort((A, D) => n(A) - n(D));
      return S.length ? [{ key: "apps", label: "", tiles: S }] : [];
    }, fe = p(() => {
      const e = Number(z.state?.platformConfig?.apps?.recentCount);
      return Number.isFinite(e) ? Math.min(ve, Math.max(0, Math.round(e))) : es;
    }), N = b((() => {
      try {
        const e = JSON.parse(localStorage.getItem(pe) || "[]");
        return Array.isArray(e) ? e.filter((t) => typeof t == "string") : [];
      } catch {
        return [];
      }
    })()), be = (e) => {
      N.value = [e, ...N.value.filter((t) => t !== e)].slice(0, ve + 1);
      try {
        localStorage.setItem(pe, JSON.stringify(N.value));
      } catch {
      }
    }, se = (e) => {
      const t = (e || "").trim().toLowerCase();
      return N.value.filter((s) => s !== y.value.id).map((s) => Z.value.find((l) => l.id === s)).filter((s) => !!s && (!t || `${s.label} ${s.detail || ""} ${s.id}`.toLowerCase().includes(t))).slice(0, fe.value);
    }, T = b(!1), _e = (e) => {
      T.value = e;
    }, R = b(!1);
    b(!1);
    const m = b(null), C = b([]), I = b([]), ye = {
      Shield: Ye,
      Globe: Xe,
      Layers: Je,
      LayoutGrid: E,
      Zap: He,
      Box: We,
      Cpu: Ke,
      Terminal: Ge,
      AppWindow: Be,
      Database: je
    }, ke = (e) => e ? ye[e] || E : E, ae = () => {
      typeof d?.getRegisteredApps == "function" && (I.value = d.getRegisteredApps());
    }, xe = ["superadmin", "admin"], we = p(() => d?.$policy?.can?.("role", xe) ?? !1), oe = p(() => (I.value.length > 0 ? I.value : [
      { id: "workspace", name: "Workspace Hub", url: "http://localhost:4409", icon: "Globe", description: "Logic Orchestration", isEnabled: !0 },
      { id: "admin", name: "Admin Management", url: "http://localhost:4403", icon: "Shield", description: "Platform Governance", isEnabled: !0 }
    ]).filter((t) => t.isEnabled !== !1).filter((t) => (t.code ?? t.id) !== "admin" || we.value).map((t) => ({
      id: t.id,
      label: t.name,
      // Routes follow the slug (changeable); the id stays the key.
      path: typeof d.appPath == "function" ? d.appPath(t.id, (t.code ?? t.id) === "admin" ? "apps" : "") : `/app/${t.slug || t.id}`,
      icon: ke(t.icon),
      detail: t.description || "Micro-Frontend App"
    }))), f = d.getModuleState("shell.nav", { moduleId: "", title: "", icon: null, items: [], active: "", navigate: null }), ne = p(() => J.path.startsWith("/app/")), y = p(() => {
      let e = ne.value ? V.current_app : null;
      e === "expose" && (e = "workspace");
      const t = e && oe.value.find((s) => s.id === e);
      return t || (e && f.title ? { id: e, label: f.title, icon: f.icon || E } : { id: "default", label: $?.t("shell.apps") ?? "Apps", icon: E });
    }), ie = p(() => ne.value && f.items.length > 0);
    F(() => y.value.id, (e) => {
      e && e !== "default" && be(e);
    }, { immediate: !0 });
    const le = async (e) => {
      if (!e || e === "default" || typeof d.loadAppManifest != "function") return null;
      const t = await d.loadAppManifest(e);
      if (!t) return null;
      const s = String(t.version ?? "dev");
      return d.getRegisteredApps?.().find((n) => n.id === e)?.channel === "stable" ? { label: "stable", title: `stable · ${s}` } : { label: s, title: s };
    }, O = b(""), G = b("");
    F(() => [y.value.id, y.value.version], async ([e]) => {
      O.value = "", G.value = "";
      const t = await le(e);
      y.value.id !== e || !t || (O.value = t.label, G.value = t.title);
    }, { immediate: !0 });
    const w = b({}), $e = () => {
      for (const e of Ae()) {
        const t = `${e.id}@${e.version ?? ""}`;
        re.has(t) || (re.add(t), le(e.id).then((s) => {
          s && (w.value = { ...w.value, [e.id]: s });
        }));
      }
    }, re = /* @__PURE__ */ new Set(), Ae = () => typeof d?.getRegisteredApps == "function" ? d.getRegisteredApps() : [];
    F(T, (e) => {
      e && $e();
    });
    const Ce = p(() => {
      const e = [];
      for (const t of f.items) {
        if (!t.group) {
          e.push({ group: null, item: t });
          continue;
        }
        const s = e.find((l) => l.group === t.group);
        s ? (s.items.push(t), s.icon ??= t.groupIcon) : e.push({ group: t.group, icon: t.groupIcon, items: [t] });
      }
      return e;
    }), K = (e) => e.find((t) => f.active === t.path) ?? null, U = p({
      get: () => V.current_workspace,
      set: (e) => {
        V.current_workspace = e;
      }
    });
    p(() => C.value.find((e) => String(e.id) === String(U.value)) || C.value[0]), F(() => J.params.moduleId, (e) => {
      const t = Array.isArray(e) ? e[0] : e, s = t && (d.findAppByRoute?.(t)?.id ?? t);
      s && V.current_app !== s && (V.current_app = s);
    }, { immediate: !0 });
    const Se = async () => {
      try {
        m.value = await d.doAction("auth.me");
      } catch {
        try {
          m.value = JSON.parse(localStorage.getItem("user") || "null");
        } catch {
        }
      }
    };
    d.on?.("auth:profile-updated", (e) => {
      m.value = { ...m.value || {}, ...e };
    });
    const Me = async () => {
      try {
        const e = await d.doAction("workspace.list");
        C.value = e || [];
        const t = C.value.find((s) => String(s.id) === String(U.value));
        (!U.value || !t) && C.value.length > 0 && (U.value = String(C.value[0].id));
      } catch {
      }
    }, ze = async () => {
      d.emit?.(Ze.AUTH_LOGOUT);
      try {
        d.doAction("auth.logout"), localStorage.removeItem("accessToken"), L.push("/login").catch(() => {
          window.location.href = "/login";
        });
      } catch {
        localStorage.removeItem("accessToken"), window.location.href = "/login";
      }
    }, Le = (e) => {
      T.value = !1, L.push(e);
    };
    return Ne(() => {
      Se(), Me(), ae(), typeof d?.on == "function" && d.on("apps:updated", (e) => {
        Array.isArray(e) ? I.value = e : ae();
      });
    }), (e, t) => (o(), i("header", qe, [
      a("div", et, [
        a("div", tt, [
          a("div", {
            class: "flex items-center gap-3 cursor-pointer group/logo",
            "data-testid": "brand",
            title: _.value?.name,
            onClick: t[0] || (t[0] = (s) => c(L).push(_.value?.homePath || "/"))
          }, [
            _.value?.logo ? (o(), i(k, { key: 0 }, [
              Y.value && _.value.logoDark ? (o(), i("img", {
                key: 0,
                src: _.value.logoDark,
                alt: _.value.name,
                class: "h-7 w-auto max-w-[200px] object-contain"
              }, null, 8, at)) : (o(), i("span", {
                key: 1,
                class: P(["inline-flex items-center rounded-md", Y.value && "bg-white/95 px-2 py-1"])
              }, [
                a("img", {
                  src: _.value.logo,
                  alt: _.value.name,
                  class: "h-7 w-auto max-w-[200px] object-contain"
                }, null, 8, ot)
              ], 2)),
              _.value.tagline ? (o(), i("span", nt, r(_.value.tagline), 1)) : u("", !0)
            ], 64)) : (o(), i(k, { key: 1 }, [
              t[8] || (t[8] = Te('<div class="relative" data-v-269e5604><div class="w-9 h-9 bg-primary rounded-xl flex items-center justify-center relative z-10 transition-transform group-hover/logo:scale-110 shadow-xl border border-border-soft" data-v-269e5604><span class="text-primary-foreground font-black text-xs tracking-tighter" data-v-269e5604>MP</span></div></div><div class="flex flex-col text-left" data-v-269e5604><span class="text-[11px] font-black uppercase tracking-[0.4em] text-foreground group-hover/logo:text-primary transition-colors leading-none mb-1" data-v-269e5604>Antigravity</span><span class="text-[9px] font-black uppercase tracking-[0.2em] text-faint" data-v-269e5604>Core OS v5</span></div>', 2))
            ], 64))
          ], 8, st)
        ]),
        a("div", it, [
          a("div", lt, [
            c($) ? (o(), v(g(e.$c("ui.dropdown")), {
              key: 0,
              modelValue: B.value,
              "onUpdate:modelValue": t[1] || (t[1] = (s) => B.value = s),
              align: "right"
            }, {
              trigger: x(() => [
                a("button", {
                  type: "button",
                  class: "h-9 px-2 rounded-lg flex items-center gap-1 whitespace-nowrap shrink-0 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors outline-none",
                  title: e.$t("shell.language"),
                  "aria-label": e.$t("shell.language"),
                  "data-testid": "lang-switch"
                }, [
                  h(de, {
                    locale: c($).locale,
                    size: 20
                  }, null, 8, ["locale"]),
                  h(c(j), {
                    size: 13,
                    class: "text-faint"
                  })
                ], 8, rt)
              ]),
              content: x(() => [
                a("div", ct, [
                  a("div", dt, r(e.$t("shell.language")), 1),
                  (o(!0), i(k, null, M(c($).availableLocales, (s) => (o(), i("button", {
                    key: s,
                    type: "button",
                    class: "pop-item justify-between whitespace-nowrap",
                    "aria-selected": c($).locale === s,
                    onClick: (l) => ge(s)
                  }, [
                    a("span", pt, [
                      h(de, {
                        locale: s,
                        size: 22
                      }, null, 8, ["locale"]),
                      a("span", null, r(me[s] ?? s), 1)
                    ]),
                    c($).locale === s ? (o(), v(c(ce), {
                      key: 0,
                      size: 14,
                      class: "text-primary"
                    })) : u("", !0)
                  ], 8, ut))), 128))
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])) : u("", !0)
          ]),
          t[10] || (t[10] = a("div", { class: "h-6 w-px bg-border-soft mx-1 hidden md:block" }, null, -1)),
          (o(), v(g(e.$c("ui.dropdown")), {
            modelValue: R.value,
            "onUpdate:modelValue": t[4] || (t[4] = (s) => R.value = s),
            align: "right"
          }, {
            trigger: x(() => [
              a("button", vt, [
                a("span", mt, r(m.value?.username || "User"), 1),
                h(ue, {
                  src: m.value?.avatar,
                  name: m.value?.username || "User",
                  size: 28,
                  rounded: "lg"
                }, null, 8, ["src", "name"]),
                h(c(j), {
                  size: 13,
                  class: "text-faint"
                })
              ])
            ]),
            content: x(() => [
              a("div", gt, [
                a("div", ht, [
                  h(ue, {
                    src: m.value?.avatar,
                    name: m.value?.username || "User",
                    size: 36,
                    rounded: "lg"
                  }, null, 8, ["src", "name"]),
                  a("div", ft, [
                    a("div", bt, r(m.value?.username), 1),
                    a("div", _t, r(m.value?.email || m.value?.role), 1)
                  ])
                ]),
                a("button", {
                  type: "button",
                  class: "pop-item",
                  "data-testid": "menu-profile",
                  onClick: t[2] || (t[2] = (s) => {
                    c(L).push("/account/profile"), R.value = !1;
                  })
                }, [
                  h(c(Ue), {
                    size: 15,
                    class: "text-muted-foreground"
                  }),
                  a("span", null, r(e.$t("shell.profile")), 1)
                ]),
                a("button", {
                  type: "button",
                  class: "pop-item",
                  onClick: t[3] || (t[3] = (s) => {
                    c(L).push("/system/theme"), R.value = !1;
                  })
                }, [
                  h(c(De), {
                    size: 15,
                    class: "text-muted-foreground"
                  }),
                  a("span", null, r(e.$t("system.themeStudio", { default: "Theme Studio" })), 1)
                ]),
                t[9] || (t[9] = a("div", { class: "pop-sep" }, null, -1)),
                a("button", {
                  type: "button",
                  class: "pop-item danger",
                  onClick: ze
                }, [
                  h(c(Fe), { size: 15 }),
                  a("span", null, r(e.$t("shell.logout")), 1)
                ])
              ])
            ]),
            _: 1
          }, 8, ["modelValue"]))
        ])
      ]),
      a("div", yt, [
        a("div", kt, [
          a("div", xt, [
            (o(), v(g(e.$c("ui.dropdown")), {
              class: "app-switch",
              modelValue: T.value,
              "onUpdate:modelValue": t[5] || (t[5] = (s) => _e(s)),
              search: "",
              "search-placeholder": e.$t("shell.searchApps")
            }, {
              trigger: x(() => [
                a("button", {
                  type: "button",
                  class: "app-chip flex items-center gap-2 transition-colors outline-none group/app",
                  title: e.$t("shell.apps"),
                  "aria-label": e.$t("shell.apps"),
                  "data-testid": "apps-switch"
                }, [
                  a("span", {
                    class: P(["w-7 h-7 rounded-md grid place-items-center shrink-0 transition-colors", y.value.id === "default" ? "bg-muted text-muted-foreground" : "bg-primary-soft text-primary"])
                  }, [
                    (o(), v(g(y.value.icon), { size: 16 }))
                  ], 2),
                  a("span", $t, r(y.value.label), 1),
                  O.value ? (o(), i("span", {
                    key: 0,
                    class: "app-version",
                    "data-testid": "current-app-version",
                    title: G.value
                  }, r(O.value), 9, At)) : u("", !0),
                  h(c(j), {
                    size: 14,
                    class: "text-faint group-hover/app:text-foreground transition-colors"
                  })
                ], 8, wt)
              ]),
              content: x(({ query: s }) => [
                a("div", Ct, [
                  se(s).length ? (o(), i("section", St, [
                    a("div", Mt, r(e.$t("shell.recent")), 1),
                    a("div", zt, [
                      (o(!0), i(k, null, M(se(s), (l) => (o(), i("button", {
                        key: l.key,
                        type: "button",
                        class: "recent-apps__item",
                        title: l.detail,
                        "data-testid": "recent-app",
                        onClick: (n) => l.run()
                      }, [
                        (o(), v(g(l.icon), {
                          size: 14,
                          "stroke-width": "1.75"
                        })),
                        a("span", Vt, r(l.label), 1),
                        w.value[l.id] ? (o(), i("span", {
                          key: 0,
                          class: "tile-version",
                          title: w.value[l.id].title
                        }, r(w.value[l.id].label), 9, Et)) : u("", !0)
                      ], 8, Lt))), 128))
                    ])
                  ])) : u("", !0),
                  te(s).length ? u("", !0) : (o(), i("div", Nt, r(e.$t("common.empty")), 1)),
                  (o(!0), i(k, null, M(te(s), (l) => (o(), i("section", {
                    key: l.key,
                    class: "pt-1 last:pb-3",
                    "data-testid": `apps-section-${l.key}`
                  }, [
                    l.label ? (o(), i("div", Rt, [
                      W(r(l.label), 1),
                      a("span", It, r(l.tiles.length), 1)
                    ])) : u("", !0),
                    a("div", Ot, [
                      (o(!0), i(k, null, M(l.tiles, (n) => (o(), i("div", {
                        key: n.key,
                        role: "button",
                        tabindex: "0",
                        onClick: (S) => n.run(),
                        onKeydown: Re((S) => n.run(), ["enter"]),
                        class: "group relative flex items-center gap-3 rounded-lg px-2.5 py-2 text-left hover:bg-muted transition-colors min-w-0 cursor-pointer",
                        "aria-current": n.id === y.value.id ? "true" : void 0
                      }, [
                        a("span", {
                          class: P(["w-8 h-8 rounded-lg grid place-items-center shrink-0 transition-colors group-hover:bg-primary-soft group-hover:text-primary", n.id === y.value.id ? "bg-primary-soft text-primary" : "bg-muted text-muted-foreground"])
                        }, [
                          (o(), v(g(n.icon), {
                            size: 16,
                            "stroke-width": "1.75"
                          }))
                        ], 2),
                        a("span", Dt, [
                          a("span", Ft, [
                            a("span", Pt, r(n.label), 1),
                            w.value[n.id] ? (o(), i("span", {
                              key: 0,
                              class: "tile-version",
                              title: w.value[n.id].title,
                              "data-testid": "tile-version"
                            }, r(w.value[n.id].label), 9, jt)) : u("", !0)
                          ]),
                          a("span", Bt, r(n.detail), 1)
                        ]),
                        a("button", {
                          type: "button",
                          class: "icon-btn shrink-0 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 aria-pressed:opacity-100",
                          style: { width: "28px", height: "28px" },
                          "aria-pressed": ee(n.key),
                          "aria-label": e.$t("shell.toggleFavorite"),
                          "data-testid": "tile-star",
                          onClick: H((S) => he(n.key), ["stop"])
                        }, [
                          h(c(Pe), {
                            size: 14,
                            class: P(ee(n.key) ? "fill-warning text-warning" : "text-faint")
                          }, null, 8, ["class"])
                        ], 8, Gt)
                      ], 40, Ut))), 128))
                    ])
                  ], 8, Tt))), 128))
                ])
              ]),
              _: 1
            }, 8, ["modelValue", "search-placeholder"]))
          ]),
          ie.value ? (o(), i("div", Kt)) : u("", !0),
          ie.value ? (o(), i("nav", Wt, [
            (o(!0), i(k, null, M(Ce.value, (s) => (o(), i(k, {
              key: s.group ?? s.item.path
            }, [
              s.group === null ? (o(), i("button", {
                key: 0,
                type: "button",
                class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                role: "tab",
                "aria-selected": c(f).active === s.item.path,
                onMousedown: t[6] || (t[6] = H(() => {
                }, ["prevent"])),
                onClick: (l) => c(f).navigate?.(s.item.path)
              }, [
                s.item.icon ? (o(), v(g(s.item.icon), {
                  key: 0,
                  size: 13
                })) : u("", !0),
                W(" " + r(s.item.label) + " ", 1),
                s.item.badge !== void 0 ? (o(), i("span", Jt, r(s.item.badge), 1)) : u("", !0)
              ], 40, Ht)) : (o(), v(g(e.$c("ui.popover")), {
                key: 1,
                class: "band-group",
                align: "start"
              }, {
                default: x(({ close: l }) => [
                  (o(), v(g(e.$c("ui.popover-trigger")), { class: "band-group__trigger" }, {
                    default: x(() => [
                      a("button", {
                        type: "button",
                        class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                        role: "tab",
                        "aria-selected": !!K(s.items),
                        "aria-haspopup": "menu",
                        onMousedown: t[7] || (t[7] = H(() => {
                        }, ["prevent"])),
                        "data-testid": `app-nav-group-${s.group}`
                      }, [
                        s.icon ? (o(), v(g(s.icon), {
                          key: 0,
                          size: 13
                        })) : u("", !0),
                        W(" " + r(s.group) + " ", 1),
                        K(s.items) ? (o(), i("span", Yt, "· " + r(K(s.items).label), 1)) : u("", !0),
                        h(c(j), { size: 12 })
                      ], 40, Xt)
                    ]),
                    _: 2
                  }, 1024)),
                  (o(), v(g(e.$c("ui.popover-content")), {
                    align: "start",
                    class: "p-1"
                  }, {
                    default: x(() => [
                      a("div", Zt, [
                        (o(!0), i(k, null, M(s.items, (n) => (o(), i("button", {
                          key: n.path,
                          type: "button",
                          class: "pop-item whitespace-nowrap",
                          role: "menuitem",
                          "aria-selected": c(f).active === n.path,
                          disabled: n.disabled,
                          "aria-disabled": n.disabled || void 0,
                          onClick: (S) => {
                            l(), c(f).navigate?.(n.path);
                          }
                        }, [
                          n.icon ? (o(), v(g(n.icon), {
                            key: 0,
                            size: 15,
                            class: "text-muted-foreground"
                          })) : u("", !0),
                          a("span", qt, r(n.label), 1),
                          c(f).active === n.path ? (o(), v(c(ce), {
                            key: 1,
                            size: 14,
                            class: "text-primary"
                          })) : u("", !0)
                        ], 8, Qt))), 128))
                      ])
                    ]),
                    _: 2
                  }, 1024))
                ]),
                _: 2
              }, 1024))
            ], 64))), 128))
          ])) : u("", !0)
        ])
      ])
    ]));
  }
}), us = /* @__PURE__ */ Qe(ts, [["__scopeId", "data-v-269e5604"]]);
export {
  us as default
};
//# sourceMappingURL=Header-CzPs-kGn.js.map
