import { defineComponent as Le, inject as Ve, computed as p, ref as b, watch as F, onMounted as Ee, openBlock as o, createElementBlock as i, createElementVNode as a, unref as c, Fragment as k, normalizeClass as P, toDisplayString as r, createCommentVNode as u, createStaticVNode as Ne, createBlock as m, resolveDynamicComponent as g, withCtx as x, renderList as M, createVNode as h, createTextVNode as G, withKeys as Re, withModifiers as H } from "vue";
import { appIcon as Te } from "../index.js";
import { useRouter as Ie, useRoute as Oe } from "vue-router";
import { LayoutGrid as re, Check as ce, ChevronDown as D, User as Ue, Palette as Fe, LogOut as Pe, Star as De } from "lucide-vue-next";
import { SUPERAPP_EVENTS as je } from "@nhphero/vue-sapp/contracts";
import { _ as de } from "./LocaleFlag.vue_vue_type_script_setup_true_lang-D2eeZNym.js";
import { _ as ue } from "./UserAvatar.vue_vue_type_script_setup_true_lang-AXBFwsc7.js";
import { _ as Ke } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const Be = { class: "w-full bg-background sticky top-0 z-[100] transition-colors duration-300" }, Ge = { class: "page-container h-(--header-h) flex items-center justify-between gap-4" }, He = { class: "flex items-center gap-3 min-w-0" }, We = ["title"], Je = ["src", "alt"], Xe = ["src", "alt"], Ye = {
  key: 2,
  class: "hidden lg:block text-[10px] font-bold uppercase tracking-[0.2em] text-faint border-l border-border-soft pl-3"
}, Qe = { class: "flex items-center gap-2" }, Ze = { class: "hidden md:flex items-center gap-1 flex-nowrap shrink-0" }, qe = ["title", "aria-label"], et = { class: "w-52" }, tt = { class: "pop-head" }, st = ["aria-selected", "onClick"], at = { class: "flex items-center gap-2.5" }, ot = {
  type: "button",
  class: "h-9 flex items-center gap-2 pl-2.5 pr-1.5 rounded-lg hover:bg-muted cursor-pointer transition-colors outline-none",
  "data-testid": "user-menu"
}, nt = { class: "hidden lg:block text-sm font-semibold text-foreground whitespace-nowrap" }, it = { class: "w-60" }, lt = { class: "flex items-center gap-3 px-2 py-2.5 mb-1 border-b border-border-soft" }, rt = { class: "min-w-0" }, ct = { class: "text-sm font-semibold text-foreground truncate" }, dt = { class: "text-xs text-faint truncate" }, ut = { class: "app-band" }, pt = { class: "page-container flex items-stretch gap-3" }, mt = { class: "flex items-stretch shrink-0" }, vt = ["title", "aria-label"], gt = {
  class: "text-sm font-semibold text-foreground whitespace-nowrap",
  "data-testid": "current-app"
}, ht = ["title"], ft = { class: "w-[720px] max-w-[calc(100vw-32px)]" }, bt = {
  key: 0,
  class: "recent-apps",
  "data-testid": "apps-recent"
}, _t = { class: "pop-head" }, yt = { class: "recent-apps__row" }, kt = ["title", "onClick"], xt = { class: "truncate" }, wt = ["title"], $t = {
  key: 1,
  class: "px-3 py-6 text-sm text-faint text-center"
}, At = ["data-testid"], Ct = {
  key: 0,
  class: "pop-head flex items-center gap-1.5"
}, St = { class: "text-faint font-normal" }, Mt = { class: "px-2 pb-1 grid gap-1 sm:grid-cols-2 lg:grid-cols-3" }, zt = ["onClick", "onKeydown", "aria-current"], Lt = { class: "min-w-0 flex-1" }, Vt = { class: "flex items-center gap-1.5 min-w-0" }, Et = { class: "text-sm font-semibold truncate group-hover:text-primary transition-colors" }, Nt = ["title"], Rt = { class: "block text-xs text-muted-foreground truncate" }, Tt = ["aria-pressed", "aria-label", "onClick"], It = {
  key: 0,
  class: "app-band__sep self-center h-5 w-px shrink-0"
}, Ot = {
  key: 1,
  class: "tabs tabs--band min-w-0 overflow-x-auto no-scrollbar",
  role: "tablist",
  "data-testid": "app-nav"
}, Ut = ["aria-selected", "onClick"], Ft = {
  key: 1,
  class: "badge"
}, Pt = ["aria-selected", "data-testid"], Dt = {
  key: 1,
  class: "band-group__current"
}, jt = {
  class: "min-w-56 flex flex-col",
  role: "menu"
}, Kt = ["aria-selected", "disabled", "aria-disabled", "onClick"], Bt = { class: "flex-1" }, pe = "sapp:recent-apps", Gt = 5, me = 10, Ht = /* @__PURE__ */ Le({
  __name: "Header",
  setup(Wt) {
    const d = Ve("$superApp"), z = d, L = Ie(), W = Oe(), V = z.$appState, J = z.$themeConfig, _ = p(() => z.$config?.branding ?? null), X = p(() => J?.state?.mode === "dark" || J?.state?.mode === "system" && window.matchMedia?.("(prefers-color-scheme: dark)").matches), $ = z.$i18n, j = b(!1), ve = { vi: "Tiếng Việt", en: "English", ja: "日本語", ko: "한국어", zh: "中文", fr: "Français", de: "Deutsch" }, ge = (e) => {
      $?.setLocale(e), j.value = !1;
    }, Y = p(
      () => ae.value.map((e) => ({ key: `app:${e.id}`, id: e.id, label: e.label, detail: e.detail, icon: e.icon, run: () => ze(e.path) }))
    ), Q = p(() => d?.getModuleState?.("home", { favorites: [] })), Z = p(() => Q.value?.favorites ?? []), q = (e) => Z.value.includes(e), he = (e) => Q.value?.toggleFavorite?.(e), ee = (e) => {
      const t = (e || "").trim().toLowerCase(), s = (A) => !t || `${A.label} ${A.detail || ""} ${A.id}`.toLowerCase().includes(t), l = Y.value.filter(s), n = (A) => {
        const U = Z.value.indexOf(A.key);
        return U === -1 ? Number.MAX_SAFE_INTEGER : U;
      }, S = [...l].sort((A, U) => n(A) - n(U));
      return S.length ? [{ key: "apps", label: "", tiles: S }] : [];
    }, fe = p(() => {
      const e = Number(z.state?.platformConfig?.apps?.recentCount);
      return Number.isFinite(e) ? Math.min(me, Math.max(0, Math.round(e))) : Gt;
    }), E = b((() => {
      try {
        const e = JSON.parse(localStorage.getItem(pe) || "[]");
        return Array.isArray(e) ? e.filter((t) => typeof t == "string") : [];
      } catch {
        return [];
      }
    })()), be = (e) => {
      E.value = [e, ...E.value.filter((t) => t !== e)].slice(0, me + 1);
      try {
        localStorage.setItem(pe, JSON.stringify(E.value));
      } catch {
      }
    }, te = (e) => {
      const t = (e || "").trim().toLowerCase();
      return E.value.filter((s) => s !== y.value.id).map((s) => Y.value.find((l) => l.id === s)).filter((s) => !!s && (!t || `${s.label} ${s.detail || ""} ${s.id}`.toLowerCase().includes(t))).slice(0, fe.value);
    }, N = b(!1), _e = (e) => {
      N.value = e;
    }, R = b(!1);
    b(!1);
    const v = b(null), C = b([]), T = b([]), ye = (e) => Te(e), se = () => {
      typeof d?.getRegisteredApps == "function" && (T.value = d.getRegisteredApps());
    }, ke = ["superadmin", "admin"], xe = p(() => d?.$policy?.can?.("role", ke) ?? !1), ae = p(() => (T.value.length > 0 ? T.value : [
      { id: "workspace", name: "Workspace Hub", url: "http://localhost:4409", icon: "Globe", description: "Logic Orchestration", isEnabled: !0 },
      { id: "admin", name: "Admin Management", url: "http://localhost:4403", icon: "Shield", description: "Platform Governance", isEnabled: !0 }
    ]).filter((t) => t.isEnabled !== !1).filter((t) => (t.code ?? t.id) !== "admin" || xe.value).map((t) => ({
      id: t.id,
      label: t.name,
      // Routes follow the slug (changeable); the id stays the key.
      path: typeof d.appPath == "function" ? d.appPath(t.id, (t.code ?? t.id) === "admin" ? "apps" : "") : `/app/${t.slug || t.id}`,
      icon: ye(t.icon),
      detail: t.description || "Micro-Frontend App"
    }))), f = d.getModuleState("shell.nav", { moduleId: "", title: "", icon: null, items: [], active: "", navigate: null }), oe = p(() => W.path.startsWith("/app/")), y = p(() => {
      let e = oe.value ? V.current_app : null;
      e === "expose" && (e = "workspace");
      const t = e && ae.value.find((s) => s.id === e);
      return t || (e && f.title ? { id: e, label: f.title, icon: f.icon || re } : { id: "default", label: $?.t("shell.apps") ?? "Apps", icon: re });
    }), ne = p(() => oe.value && f.items.length > 0);
    F(() => y.value.id, (e) => {
      e && e !== "default" && be(e);
    }, { immediate: !0 });
    const ie = async (e) => {
      if (!e || e === "default" || typeof d.loadAppManifest != "function") return null;
      const t = await d.loadAppManifest(e);
      if (!t) return null;
      const s = String(t.version ?? "dev");
      return d.getRegisteredApps?.().find((n) => n.id === e)?.channel === "stable" ? { label: "stable", title: `stable · ${s}` } : { label: s, title: s };
    }, I = b(""), K = b("");
    F(() => [y.value.id, y.value.version], async ([e]) => {
      I.value = "", K.value = "";
      const t = await ie(e);
      y.value.id !== e || !t || (I.value = t.label, K.value = t.title);
    }, { immediate: !0 });
    const w = b({}), we = () => {
      for (const e of $e()) {
        const t = `${e.id}@${e.version ?? ""}`;
        le.has(t) || (le.add(t), ie(e.id).then((s) => {
          s && (w.value = { ...w.value, [e.id]: s });
        }));
      }
    }, le = /* @__PURE__ */ new Set(), $e = () => typeof d?.getRegisteredApps == "function" ? d.getRegisteredApps() : [];
    F(N, (e) => {
      e && we();
    });
    const Ae = p(() => {
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
    }), B = (e) => e.find((t) => f.active === t.path) ?? null, O = p({
      get: () => V.current_workspace,
      set: (e) => {
        V.current_workspace = e;
      }
    });
    p(() => C.value.find((e) => String(e.id) === String(O.value)) || C.value[0]), F(() => W.params.moduleId, (e) => {
      const t = Array.isArray(e) ? e[0] : e, s = t && (d.findAppByRoute?.(t)?.id ?? t);
      s && V.current_app !== s && (V.current_app = s);
    }, { immediate: !0 });
    const Ce = async () => {
      try {
        v.value = await d.doAction("auth.me");
      } catch {
        try {
          v.value = JSON.parse(localStorage.getItem("user") || "null");
        } catch {
        }
      }
    };
    d.on?.("auth:profile-updated", (e) => {
      v.value = { ...v.value || {}, ...e };
    });
    const Se = async () => {
      try {
        const e = await d.doAction("workspace.list");
        C.value = e || [];
        const t = C.value.find((s) => String(s.id) === String(O.value));
        (!O.value || !t) && C.value.length > 0 && (O.value = String(C.value[0].id));
      } catch {
      }
    }, Me = async () => {
      d.emit?.(je.AUTH_LOGOUT);
      try {
        d.doAction("auth.logout"), localStorage.removeItem("accessToken"), L.push("/login").catch(() => {
          window.location.href = "/login";
        });
      } catch {
        localStorage.removeItem("accessToken"), window.location.href = "/login";
      }
    }, ze = (e) => {
      N.value = !1, L.push(e);
    };
    return Ee(() => {
      Ce(), Se(), se(), typeof d?.on == "function" && d.on("apps:updated", (e) => {
        Array.isArray(e) ? T.value = e : se();
      });
    }), (e, t) => (o(), i("header", Be, [
      a("div", Ge, [
        a("div", He, [
          a("div", {
            class: "flex items-center gap-3 cursor-pointer group/logo",
            "data-testid": "brand",
            title: _.value?.name,
            onClick: t[0] || (t[0] = (s) => c(L).push(_.value?.homePath || "/"))
          }, [
            _.value?.logo ? (o(), i(k, { key: 0 }, [
              X.value && _.value.logoDark ? (o(), i("img", {
                key: 0,
                src: _.value.logoDark,
                alt: _.value.name,
                class: "h-7 w-auto max-w-[200px] object-contain"
              }, null, 8, Je)) : (o(), i("span", {
                key: 1,
                class: P(["inline-flex items-center rounded-md", X.value && "bg-white/95 px-2 py-1"])
              }, [
                a("img", {
                  src: _.value.logo,
                  alt: _.value.name,
                  class: "h-7 w-auto max-w-[200px] object-contain"
                }, null, 8, Xe)
              ], 2)),
              _.value.tagline ? (o(), i("span", Ye, r(_.value.tagline), 1)) : u("", !0)
            ], 64)) : (o(), i(k, { key: 1 }, [
              t[8] || (t[8] = Ne('<div class="relative" data-v-3b94141e><div class="w-9 h-9 bg-primary rounded-xl flex items-center justify-center relative z-10 transition-transform group-hover/logo:scale-110 shadow-xl border border-border-soft" data-v-3b94141e><span class="text-primary-foreground font-black text-xs tracking-tighter" data-v-3b94141e>MP</span></div></div><div class="flex flex-col text-left" data-v-3b94141e><span class="text-[11px] font-black uppercase tracking-[0.4em] text-foreground group-hover/logo:text-primary transition-colors leading-none mb-1" data-v-3b94141e>Antigravity</span><span class="text-[9px] font-black uppercase tracking-[0.2em] text-faint" data-v-3b94141e>Core OS v5</span></div>', 2))
            ], 64))
          ], 8, We)
        ]),
        a("div", Qe, [
          a("div", Ze, [
            c($) ? (o(), m(g(e.$c("ui.dropdown")), {
              key: 0,
              modelValue: j.value,
              "onUpdate:modelValue": t[1] || (t[1] = (s) => j.value = s),
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
                  h(c(D), {
                    size: 13,
                    class: "text-faint"
                  })
                ], 8, qe)
              ]),
              content: x(() => [
                a("div", et, [
                  a("div", tt, r(e.$t("shell.language")), 1),
                  (o(!0), i(k, null, M(c($).availableLocales, (s) => (o(), i("button", {
                    key: s,
                    type: "button",
                    class: "pop-item justify-between whitespace-nowrap",
                    "aria-selected": c($).locale === s,
                    onClick: (l) => ge(s)
                  }, [
                    a("span", at, [
                      h(de, {
                        locale: s,
                        size: 22
                      }, null, 8, ["locale"]),
                      a("span", null, r(ve[s] ?? s), 1)
                    ]),
                    c($).locale === s ? (o(), m(c(ce), {
                      key: 0,
                      size: 14,
                      class: "text-primary"
                    })) : u("", !0)
                  ], 8, st))), 128))
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])) : u("", !0)
          ]),
          t[10] || (t[10] = a("div", { class: "h-6 w-px bg-border-soft mx-1 hidden md:block" }, null, -1)),
          (o(), m(g(e.$c("ui.dropdown")), {
            modelValue: R.value,
            "onUpdate:modelValue": t[4] || (t[4] = (s) => R.value = s),
            align: "right"
          }, {
            trigger: x(() => [
              a("button", ot, [
                a("span", nt, r(v.value?.username || "User"), 1),
                h(ue, {
                  src: v.value?.avatar,
                  name: v.value?.username || "User",
                  size: 28,
                  rounded: "lg"
                }, null, 8, ["src", "name"]),
                h(c(D), {
                  size: 13,
                  class: "text-faint"
                })
              ])
            ]),
            content: x(() => [
              a("div", it, [
                a("div", lt, [
                  h(ue, {
                    src: v.value?.avatar,
                    name: v.value?.username || "User",
                    size: 36,
                    rounded: "lg"
                  }, null, 8, ["src", "name"]),
                  a("div", rt, [
                    a("div", ct, r(v.value?.username), 1),
                    a("div", dt, r(v.value?.email || v.value?.role), 1)
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
                  h(c(Fe), {
                    size: 15,
                    class: "text-muted-foreground"
                  }),
                  a("span", null, r(e.$t("system.themeStudio", { default: "Theme Studio" })), 1)
                ]),
                t[9] || (t[9] = a("div", { class: "pop-sep" }, null, -1)),
                a("button", {
                  type: "button",
                  class: "pop-item danger",
                  onClick: Me
                }, [
                  h(c(Pe), { size: 15 }),
                  a("span", null, r(e.$t("shell.logout")), 1)
                ])
              ])
            ]),
            _: 1
          }, 8, ["modelValue"]))
        ])
      ]),
      a("div", ut, [
        a("div", pt, [
          a("div", mt, [
            (o(), m(g(e.$c("ui.dropdown")), {
              class: "app-switch",
              modelValue: N.value,
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
                    (o(), m(g(y.value.icon), { size: 16 }))
                  ], 2),
                  a("span", gt, r(y.value.label), 1),
                  I.value ? (o(), i("span", {
                    key: 0,
                    class: "app-version",
                    "data-testid": "current-app-version",
                    title: K.value
                  }, r(I.value), 9, ht)) : u("", !0),
                  h(c(D), {
                    size: 14,
                    class: "text-faint group-hover/app:text-foreground transition-colors"
                  })
                ], 8, vt)
              ]),
              content: x(({ query: s }) => [
                a("div", ft, [
                  te(s).length ? (o(), i("section", bt, [
                    a("div", _t, r(e.$t("shell.recent")), 1),
                    a("div", yt, [
                      (o(!0), i(k, null, M(te(s), (l) => (o(), i("button", {
                        key: l.key,
                        type: "button",
                        class: "recent-apps__item",
                        title: l.detail,
                        "data-testid": "recent-app",
                        onClick: (n) => l.run()
                      }, [
                        (o(), m(g(l.icon), {
                          size: 14,
                          "stroke-width": "1.75"
                        })),
                        a("span", xt, r(l.label), 1),
                        w.value[l.id] ? (o(), i("span", {
                          key: 0,
                          class: "tile-version",
                          title: w.value[l.id].title
                        }, r(w.value[l.id].label), 9, wt)) : u("", !0)
                      ], 8, kt))), 128))
                    ])
                  ])) : u("", !0),
                  ee(s).length ? u("", !0) : (o(), i("div", $t, r(e.$t("common.empty")), 1)),
                  (o(!0), i(k, null, M(ee(s), (l) => (o(), i("section", {
                    key: l.key,
                    class: "pt-1 last:pb-3",
                    "data-testid": `apps-section-${l.key}`
                  }, [
                    l.label ? (o(), i("div", Ct, [
                      G(r(l.label), 1),
                      a("span", St, r(l.tiles.length), 1)
                    ])) : u("", !0),
                    a("div", Mt, [
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
                          (o(), m(g(n.icon), {
                            size: 16,
                            "stroke-width": "1.75"
                          }))
                        ], 2),
                        a("span", Lt, [
                          a("span", Vt, [
                            a("span", Et, r(n.label), 1),
                            w.value[n.id] ? (o(), i("span", {
                              key: 0,
                              class: "tile-version",
                              title: w.value[n.id].title,
                              "data-testid": "tile-version"
                            }, r(w.value[n.id].label), 9, Nt)) : u("", !0)
                          ]),
                          a("span", Rt, r(n.detail), 1)
                        ]),
                        a("button", {
                          type: "button",
                          class: "icon-btn shrink-0 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 aria-pressed:opacity-100",
                          style: { width: "28px", height: "28px" },
                          "aria-pressed": q(n.key),
                          "aria-label": e.$t("shell.toggleFavorite"),
                          "data-testid": "tile-star",
                          onClick: H((S) => he(n.key), ["stop"])
                        }, [
                          h(c(De), {
                            size: 14,
                            class: P(q(n.key) ? "fill-warning text-warning" : "text-faint")
                          }, null, 8, ["class"])
                        ], 8, Tt)
                      ], 40, zt))), 128))
                    ])
                  ], 8, At))), 128))
                ])
              ]),
              _: 1
            }, 8, ["modelValue", "search-placeholder"]))
          ]),
          ne.value ? (o(), i("div", It)) : u("", !0),
          ne.value ? (o(), i("nav", Ot, [
            (o(!0), i(k, null, M(Ae.value, (s) => (o(), i(k, {
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
                s.item.icon ? (o(), m(g(s.item.icon), {
                  key: 0,
                  size: 13
                })) : u("", !0),
                G(" " + r(s.item.label) + " ", 1),
                s.item.badge !== void 0 ? (o(), i("span", Ft, r(s.item.badge), 1)) : u("", !0)
              ], 40, Ut)) : (o(), m(g(e.$c("ui.popover")), {
                key: 1,
                class: "band-group",
                align: "start"
              }, {
                default: x(({ close: l }) => [
                  (o(), m(g(e.$c("ui.popover-trigger")), { class: "band-group__trigger" }, {
                    default: x(() => [
                      a("button", {
                        type: "button",
                        class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                        role: "tab",
                        "aria-selected": !!B(s.items),
                        "aria-haspopup": "menu",
                        onMousedown: t[7] || (t[7] = H(() => {
                        }, ["prevent"])),
                        "data-testid": `app-nav-group-${s.group}`
                      }, [
                        s.icon ? (o(), m(g(s.icon), {
                          key: 0,
                          size: 13
                        })) : u("", !0),
                        G(" " + r(s.group) + " ", 1),
                        B(s.items) ? (o(), i("span", Dt, "· " + r(B(s.items).label), 1)) : u("", !0),
                        h(c(D), { size: 12 })
                      ], 40, Pt)
                    ]),
                    _: 2
                  }, 1024)),
                  (o(), m(g(e.$c("ui.popover-content")), {
                    align: "start",
                    class: "p-1"
                  }, {
                    default: x(() => [
                      a("div", jt, [
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
                          n.icon ? (o(), m(g(n.icon), {
                            key: 0,
                            size: 15,
                            class: "text-muted-foreground"
                          })) : u("", !0),
                          a("span", Bt, r(n.label), 1),
                          c(f).active === n.path ? (o(), m(c(ce), {
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
          ])) : u("", !0)
        ])
      ])
    ]));
  }
}), as = /* @__PURE__ */ Ke(Ht, [["__scopeId", "data-v-3b94141e"]]);
export {
  as as default
};
//# sourceMappingURL=Header-DgtUlo6P.js.map
