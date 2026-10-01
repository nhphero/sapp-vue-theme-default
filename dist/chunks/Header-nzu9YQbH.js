import { defineComponent as Ae, inject as Ce, computed as p, ref as y, watch as G, onMounted as Se, openBlock as o, createElementBlock as n, createElementVNode as s, unref as r, Fragment as k, normalizeClass as U, toDisplayString as i, createCommentVNode as u, createStaticVNode as Me, createBlock as m, resolveDynamicComponent as g, withCtx as x, renderList as S, createVNode as h, createTextVNode as B, withKeys as ze, withModifiers as K } from "vue";
import { useRouter as Le, useRoute as Ee } from "vue-router";
import { LayoutGrid as N, Check as ne, ChevronDown as D, User as Ne, Palette as Ve, LogOut as Te, Star as Ie, Database as Oe, AppWindow as Re, Terminal as Ue, Cpu as De, Box as Fe, Zap as je, Layers as Pe, Globe as Ge, Shield as Be } from "lucide-vue-next";
import { SUPERAPP_EVENTS as Ke } from "@nhphero/vue-sapp/contracts";
import { _ as le } from "./LocaleFlag.vue_vue_type_script_setup_true_lang-D2eeZNym.js";
import { _ as re } from "./UserAvatar.vue_vue_type_script_setup_true_lang-AXBFwsc7.js";
import { _ as We } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const He = { class: "w-full bg-background sticky top-0 z-[100] transition-colors duration-300" }, Je = { class: "page-container h-(--header-h) flex items-center justify-between gap-4" }, Xe = { class: "flex items-center gap-3 min-w-0" }, Ye = ["title"], Ze = ["src", "alt"], Qe = ["src", "alt"], qe = {
  key: 2,
  class: "hidden lg:block text-[10px] font-bold uppercase tracking-[0.2em] text-faint border-l border-border-soft pl-3"
}, et = { class: "flex items-center gap-2" }, tt = { class: "hidden md:flex items-center gap-1 flex-nowrap shrink-0" }, at = ["title", "aria-label"], st = { class: "w-52" }, ot = { class: "pop-head" }, nt = ["aria-selected", "onClick"], lt = { class: "flex items-center gap-2.5" }, rt = {
  type: "button",
  class: "h-9 flex items-center gap-2 pl-2.5 pr-1.5 rounded-lg hover:bg-muted cursor-pointer transition-colors outline-none",
  "data-testid": "user-menu"
}, it = { class: "hidden lg:block text-sm font-semibold text-foreground whitespace-nowrap" }, ct = { class: "w-60" }, dt = { class: "flex items-center gap-3 px-2 py-2.5 mb-1 border-b border-border-soft" }, ut = { class: "min-w-0" }, pt = { class: "text-sm font-semibold text-foreground truncate" }, mt = { class: "text-xs text-faint truncate" }, vt = { class: "app-band" }, gt = { class: "page-container flex items-stretch gap-3" }, ht = { class: "flex items-stretch shrink-0" }, ft = ["title", "aria-label"], bt = {
  class: "text-sm font-semibold text-foreground whitespace-nowrap",
  "data-testid": "current-app"
}, _t = ["title"], yt = { class: "w-[720px] max-w-[calc(100vw-32px)]" }, kt = {
  key: 0,
  class: "recent-apps",
  "data-testid": "apps-recent"
}, xt = { class: "pop-head" }, wt = { class: "recent-apps__row" }, $t = ["title", "onClick"], At = { class: "truncate" }, Ct = {
  key: 1,
  class: "px-3 py-6 text-sm text-faint text-center"
}, St = ["data-testid"], Mt = {
  key: 0,
  class: "pop-head flex items-center gap-1.5"
}, zt = { class: "text-faint font-normal" }, Lt = { class: "px-2 pb-1 grid gap-1 sm:grid-cols-2 lg:grid-cols-3" }, Et = ["onClick", "onKeydown", "aria-current"], Nt = { class: "min-w-0 flex-1" }, Vt = { class: "block text-sm font-semibold truncate group-hover:text-primary transition-colors" }, Tt = { class: "block text-xs text-muted-foreground truncate" }, It = ["aria-pressed", "aria-label", "onClick"], Ot = {
  key: 0,
  class: "app-band__sep self-center h-5 w-px shrink-0"
}, Rt = {
  key: 1,
  class: "tabs tabs--band min-w-0 overflow-x-auto no-scrollbar",
  role: "tablist",
  "data-testid": "app-nav"
}, Ut = ["aria-selected", "onClick"], Dt = {
  key: 1,
  class: "badge"
}, Ft = ["aria-selected", "data-testid"], jt = {
  key: 1,
  class: "band-group__current"
}, Pt = {
  class: "min-w-56 flex flex-col",
  role: "menu"
}, Gt = ["aria-selected", "disabled", "aria-disabled", "onClick"], Bt = { class: "flex-1" }, ie = "sapp:recent-apps", Kt = 5, ce = 10, Wt = /* @__PURE__ */ Ae({
  __name: "Header",
  setup(Ht) {
    const d = Ce("$superApp"), M = d, z = Le(), W = Ee(), L = M.$appState, H = M.$themeConfig, b = p(() => M.$config?.branding ?? null), J = p(() => H?.state?.mode === "dark" || H?.state?.mode === "system" && window.matchMedia?.("(prefers-color-scheme: dark)").matches), w = M.$i18n, F = y(!1), de = { vi: "Tiếng Việt", en: "English", ja: "日本語", ko: "한국어", zh: "中文", fr: "Français", de: "Deutsch" }, ue = (e) => {
      w?.setLocale(e), F.value = !1;
    }, X = p(
      () => ae.value.map((e) => ({ key: `app:${e.id}`, id: e.id, label: e.label, detail: e.detail, icon: e.icon, run: () => $e(e.path) }))
    ), Y = p(() => d?.getModuleState?.("home", { favorites: [] })), Z = p(() => Y.value?.favorites ?? []), Q = (e) => Z.value.includes(e), pe = (e) => Y.value?.toggleFavorite?.(e), q = (e) => {
      const t = (e || "").trim().toLowerCase(), a = ($) => !t || `${$.label} ${$.detail || ""} ${$.id}`.toLowerCase().includes(t), c = X.value.filter(a), l = ($) => {
        const R = Z.value.indexOf($.key);
        return R === -1 ? Number.MAX_SAFE_INTEGER : R;
      }, C = [...c].sort(($, R) => l($) - l(R));
      return C.length ? [{ key: "apps", label: "", tiles: C }] : [];
    }, me = p(() => {
      const e = Number(M.state?.platformConfig?.apps?.recentCount);
      return Number.isFinite(e) ? Math.min(ce, Math.max(0, Math.round(e))) : Kt;
    }), V = y((() => {
      try {
        const e = JSON.parse(localStorage.getItem(ie) || "[]");
        return Array.isArray(e) ? e.filter((t) => typeof t == "string") : [];
      } catch {
        return [];
      }
    })()), ve = (e) => {
      V.value = [e, ...V.value.filter((t) => t !== e)].slice(0, ce + 1);
      try {
        localStorage.setItem(ie, JSON.stringify(V.value));
      } catch {
      }
    }, ee = (e) => {
      const t = (e || "").trim().toLowerCase();
      return V.value.filter((a) => a !== _.value.id).map((a) => X.value.find((c) => c.id === a)).filter((a) => !!a && (!t || `${a.label} ${a.detail || ""} ${a.id}`.toLowerCase().includes(t))).slice(0, me.value);
    }, j = y(!1), ge = (e) => {
      j.value = e;
    }, T = y(!1);
    y(!1);
    const v = y(null), A = y([]), I = y([]), he = {
      Shield: Be,
      Globe: Ge,
      Layers: Pe,
      LayoutGrid: N,
      Zap: je,
      Box: Fe,
      Cpu: De,
      Terminal: Ue,
      AppWindow: Re,
      Database: Oe
    }, fe = (e) => e ? he[e] || N : N, te = () => {
      typeof d?.getRegisteredApps == "function" && (I.value = d.getRegisteredApps());
    }, be = ["superadmin", "admin"], _e = p(() => d?.$policy?.can?.("role", be) ?? !1), ae = p(() => (I.value.length > 0 ? I.value : [
      { id: "workspace", name: "Workspace Hub", url: "http://localhost:4409", icon: "Globe", description: "Logic Orchestration", isEnabled: !0 },
      { id: "admin", name: "Admin Management", url: "http://localhost:4403", icon: "Shield", description: "Platform Governance", isEnabled: !0 }
    ]).filter((t) => t.isEnabled !== !1).filter((t) => t.id !== "admin" || _e.value).map((t) => ({
      id: t.id,
      label: t.name,
      path: t.id === "admin" ? "/app/admin/apps" : `/app/${t.id}`,
      icon: fe(t.icon),
      detail: t.description || "Micro-Frontend App"
    }))), f = d.getModuleState("shell.nav", { moduleId: "", title: "", icon: null, items: [], active: "", navigate: null }), se = p(() => W.path.startsWith("/app/")), _ = p(() => {
      let e = se.value ? L.current_app : null;
      e === "expose" && (e = "workspace");
      const t = e && ae.value.find((a) => a.id === e);
      return t || (e && f.title ? { id: e, label: f.title, icon: f.icon || N } : { id: "default", label: w?.t("shell.apps") ?? "Apps", icon: N });
    }), oe = p(() => se.value && f.items.length > 0);
    G(() => _.value.id, (e) => {
      e && e !== "default" && ve(e);
    }, { immediate: !0 });
    const E = y("");
    G(() => [_.value.id, _.value.version], async ([e]) => {
      if (E.value = "", !e || e === "default" || typeof d.loadAppManifest != "function") return;
      const t = await d.loadAppManifest(e);
      _.value.id === e && (E.value = t ? String(t.version ?? "dev") : "");
    }, { immediate: !0 });
    const ye = p(() => {
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
    }), P = (e) => e.find((t) => f.active === t.path) ?? null, O = p({
      get: () => L.current_workspace,
      set: (e) => {
        L.current_workspace = e;
      }
    });
    p(() => A.value.find((e) => String(e.id) === String(O.value)) || A.value[0]), G(() => W.params.moduleId, (e) => {
      const t = Array.isArray(e) ? e[0] : e;
      t && L.current_app !== t && (L.current_app = t);
    }, { immediate: !0 });
    const ke = async () => {
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
    const xe = async () => {
      try {
        const e = await d.doAction("workspace.list");
        A.value = e || [];
        const t = A.value.find((a) => String(a.id) === String(O.value));
        (!O.value || !t) && A.value.length > 0 && (O.value = String(A.value[0].id));
      } catch {
      }
    }, we = async () => {
      d.emit?.(Ke.AUTH_LOGOUT);
      try {
        d.doAction("auth.logout"), localStorage.removeItem("accessToken"), z.push("/login").catch(() => {
          window.location.href = "/login";
        });
      } catch {
        localStorage.removeItem("accessToken"), window.location.href = "/login";
      }
    }, $e = (e) => {
      j.value = !1, z.push(e);
    };
    return Se(() => {
      ke(), xe(), te(), typeof d?.on == "function" && d.on("apps:updated", (e) => {
        Array.isArray(e) ? I.value = e : te();
      });
    }), (e, t) => (o(), n("header", He, [
      s("div", Je, [
        s("div", Xe, [
          s("div", {
            class: "flex items-center gap-3 cursor-pointer group/logo",
            "data-testid": "brand",
            title: b.value?.name,
            onClick: t[0] || (t[0] = (a) => r(z).push(b.value?.homePath || "/"))
          }, [
            b.value?.logo ? (o(), n(k, { key: 0 }, [
              J.value && b.value.logoDark ? (o(), n("img", {
                key: 0,
                src: b.value.logoDark,
                alt: b.value.name,
                class: "h-7 w-auto max-w-[200px] object-contain"
              }, null, 8, Ze)) : (o(), n("span", {
                key: 1,
                class: U(["inline-flex items-center rounded-md", J.value && "bg-white/95 px-2 py-1"])
              }, [
                s("img", {
                  src: b.value.logo,
                  alt: b.value.name,
                  class: "h-7 w-auto max-w-[200px] object-contain"
                }, null, 8, Qe)
              ], 2)),
              b.value.tagline ? (o(), n("span", qe, i(b.value.tagline), 1)) : u("", !0)
            ], 64)) : (o(), n(k, { key: 1 }, [
              t[8] || (t[8] = Me('<div class="relative" data-v-3aa0ef2e><div class="w-9 h-9 bg-primary rounded-xl flex items-center justify-center relative z-10 transition-transform group-hover/logo:scale-110 shadow-xl border border-border-soft" data-v-3aa0ef2e><span class="text-primary-foreground font-black text-xs tracking-tighter" data-v-3aa0ef2e>MP</span></div></div><div class="flex flex-col text-left" data-v-3aa0ef2e><span class="text-[11px] font-black uppercase tracking-[0.4em] text-foreground group-hover/logo:text-primary transition-colors leading-none mb-1" data-v-3aa0ef2e>Antigravity</span><span class="text-[9px] font-black uppercase tracking-[0.2em] text-faint" data-v-3aa0ef2e>Core OS v5</span></div>', 2))
            ], 64))
          ], 8, Ye)
        ]),
        s("div", et, [
          s("div", tt, [
            r(w) ? (o(), m(g(e.$c("ui.dropdown")), {
              key: 0,
              modelValue: F.value,
              "onUpdate:modelValue": t[1] || (t[1] = (a) => F.value = a),
              align: "right"
            }, {
              trigger: x(() => [
                s("button", {
                  type: "button",
                  class: "h-9 px-2 rounded-lg flex items-center gap-1 whitespace-nowrap shrink-0 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors outline-none",
                  title: e.$t("shell.language"),
                  "aria-label": e.$t("shell.language"),
                  "data-testid": "lang-switch"
                }, [
                  h(le, {
                    locale: r(w).locale,
                    size: 20
                  }, null, 8, ["locale"]),
                  h(r(D), {
                    size: 13,
                    class: "text-faint"
                  })
                ], 8, at)
              ]),
              content: x(() => [
                s("div", st, [
                  s("div", ot, i(e.$t("shell.language")), 1),
                  (o(!0), n(k, null, S(r(w).availableLocales, (a) => (o(), n("button", {
                    key: a,
                    type: "button",
                    class: "pop-item justify-between whitespace-nowrap",
                    "aria-selected": r(w).locale === a,
                    onClick: (c) => ue(a)
                  }, [
                    s("span", lt, [
                      h(le, {
                        locale: a,
                        size: 22
                      }, null, 8, ["locale"]),
                      s("span", null, i(de[a] ?? a), 1)
                    ]),
                    r(w).locale === a ? (o(), m(r(ne), {
                      key: 0,
                      size: 14,
                      class: "text-primary"
                    })) : u("", !0)
                  ], 8, nt))), 128))
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])) : u("", !0)
          ]),
          t[10] || (t[10] = s("div", { class: "h-6 w-px bg-border-soft mx-1 hidden md:block" }, null, -1)),
          (o(), m(g(e.$c("ui.dropdown")), {
            modelValue: T.value,
            "onUpdate:modelValue": t[4] || (t[4] = (a) => T.value = a),
            align: "right"
          }, {
            trigger: x(() => [
              s("button", rt, [
                s("span", it, i(v.value?.username || "User"), 1),
                h(re, {
                  src: v.value?.avatar,
                  name: v.value?.username || "User",
                  size: 28,
                  rounded: "lg"
                }, null, 8, ["src", "name"]),
                h(r(D), {
                  size: 13,
                  class: "text-faint"
                })
              ])
            ]),
            content: x(() => [
              s("div", ct, [
                s("div", dt, [
                  h(re, {
                    src: v.value?.avatar,
                    name: v.value?.username || "User",
                    size: 36,
                    rounded: "lg"
                  }, null, 8, ["src", "name"]),
                  s("div", ut, [
                    s("div", pt, i(v.value?.username), 1),
                    s("div", mt, i(v.value?.email || v.value?.role), 1)
                  ])
                ]),
                s("button", {
                  type: "button",
                  class: "pop-item",
                  "data-testid": "menu-profile",
                  onClick: t[2] || (t[2] = (a) => {
                    r(z).push("/account/profile"), T.value = !1;
                  })
                }, [
                  h(r(Ne), {
                    size: 15,
                    class: "text-muted-foreground"
                  }),
                  s("span", null, i(e.$t("shell.profile")), 1)
                ]),
                s("button", {
                  type: "button",
                  class: "pop-item",
                  onClick: t[3] || (t[3] = (a) => {
                    r(z).push("/system/theme"), T.value = !1;
                  })
                }, [
                  h(r(Ve), {
                    size: 15,
                    class: "text-muted-foreground"
                  }),
                  s("span", null, i(e.$t("system.themeStudio", { default: "Theme Studio" })), 1)
                ]),
                t[9] || (t[9] = s("div", { class: "pop-sep" }, null, -1)),
                s("button", {
                  type: "button",
                  class: "pop-item danger",
                  onClick: we
                }, [
                  h(r(Te), { size: 15 }),
                  s("span", null, i(e.$t("shell.logout")), 1)
                ])
              ])
            ]),
            _: 1
          }, 8, ["modelValue"]))
        ])
      ]),
      s("div", vt, [
        s("div", gt, [
          s("div", ht, [
            (o(), m(g(e.$c("ui.dropdown")), {
              class: "app-switch",
              modelValue: j.value,
              "onUpdate:modelValue": t[5] || (t[5] = (a) => ge(a)),
              search: "",
              "search-placeholder": e.$t("shell.searchApps")
            }, {
              trigger: x(() => [
                s("button", {
                  type: "button",
                  class: "app-chip flex items-center gap-2 transition-colors outline-none group/app",
                  title: e.$t("shell.apps"),
                  "aria-label": e.$t("shell.apps"),
                  "data-testid": "apps-switch"
                }, [
                  s("span", {
                    class: U(["w-7 h-7 rounded-md grid place-items-center shrink-0 transition-colors", _.value.id === "default" ? "bg-muted text-muted-foreground" : "bg-primary-soft text-primary"])
                  }, [
                    (o(), m(g(_.value.icon), { size: 16 }))
                  ], 2),
                  s("span", bt, i(_.value.label), 1),
                  E.value ? (o(), n("span", {
                    key: 0,
                    class: "app-version",
                    "data-testid": "current-app-version",
                    title: E.value
                  }, i(E.value), 9, _t)) : u("", !0),
                  h(r(D), {
                    size: 14,
                    class: "text-faint group-hover/app:text-foreground transition-colors"
                  })
                ], 8, ft)
              ]),
              content: x(({ query: a }) => [
                s("div", yt, [
                  ee(a).length ? (o(), n("section", kt, [
                    s("div", xt, i(e.$t("shell.recent")), 1),
                    s("div", wt, [
                      (o(!0), n(k, null, S(ee(a), (c) => (o(), n("button", {
                        key: c.key,
                        type: "button",
                        class: "recent-apps__item",
                        title: c.detail,
                        "data-testid": "recent-app",
                        onClick: (l) => c.run()
                      }, [
                        (o(), m(g(c.icon), {
                          size: 14,
                          "stroke-width": "1.75"
                        })),
                        s("span", At, i(c.label), 1)
                      ], 8, $t))), 128))
                    ])
                  ])) : u("", !0),
                  q(a).length ? u("", !0) : (o(), n("div", Ct, i(e.$t("common.empty")), 1)),
                  (o(!0), n(k, null, S(q(a), (c) => (o(), n("section", {
                    key: c.key,
                    class: "pt-1 last:pb-3",
                    "data-testid": `apps-section-${c.key}`
                  }, [
                    c.label ? (o(), n("div", Mt, [
                      B(i(c.label), 1),
                      s("span", zt, i(c.tiles.length), 1)
                    ])) : u("", !0),
                    s("div", Lt, [
                      (o(!0), n(k, null, S(c.tiles, (l) => (o(), n("div", {
                        key: l.key,
                        role: "button",
                        tabindex: "0",
                        onClick: (C) => l.run(),
                        onKeydown: ze((C) => l.run(), ["enter"]),
                        class: "group relative flex items-center gap-3 rounded-lg px-2.5 py-2 text-left hover:bg-muted transition-colors min-w-0 cursor-pointer",
                        "aria-current": l.id === _.value.id ? "true" : void 0
                      }, [
                        s("span", {
                          class: U(["w-8 h-8 rounded-lg grid place-items-center shrink-0 transition-colors group-hover:bg-primary-soft group-hover:text-primary", l.id === _.value.id ? "bg-primary-soft text-primary" : "bg-muted text-muted-foreground"])
                        }, [
                          (o(), m(g(l.icon), {
                            size: 16,
                            "stroke-width": "1.75"
                          }))
                        ], 2),
                        s("span", Nt, [
                          s("span", Vt, i(l.label), 1),
                          s("span", Tt, i(l.detail), 1)
                        ]),
                        s("button", {
                          type: "button",
                          class: "icon-btn shrink-0 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 aria-pressed:opacity-100",
                          style: { width: "28px", height: "28px" },
                          "aria-pressed": Q(l.key),
                          "aria-label": e.$t("shell.toggleFavorite"),
                          "data-testid": "tile-star",
                          onClick: K((C) => pe(l.key), ["stop"])
                        }, [
                          h(r(Ie), {
                            size: 14,
                            class: U(Q(l.key) ? "fill-warning text-warning" : "text-faint")
                          }, null, 8, ["class"])
                        ], 8, It)
                      ], 40, Et))), 128))
                    ])
                  ], 8, St))), 128))
                ])
              ]),
              _: 1
            }, 8, ["modelValue", "search-placeholder"]))
          ]),
          oe.value ? (o(), n("div", Ot)) : u("", !0),
          oe.value ? (o(), n("nav", Rt, [
            (o(!0), n(k, null, S(ye.value, (a) => (o(), n(k, {
              key: a.group ?? a.item.path
            }, [
              a.group === null ? (o(), n("button", {
                key: 0,
                type: "button",
                class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                role: "tab",
                "aria-selected": r(f).active === a.item.path,
                onMousedown: t[6] || (t[6] = K(() => {
                }, ["prevent"])),
                onClick: (c) => r(f).navigate?.(a.item.path)
              }, [
                a.item.icon ? (o(), m(g(a.item.icon), {
                  key: 0,
                  size: 13
                })) : u("", !0),
                B(" " + i(a.item.label) + " ", 1),
                a.item.badge !== void 0 ? (o(), n("span", Dt, i(a.item.badge), 1)) : u("", !0)
              ], 40, Ut)) : (o(), m(g(e.$c("ui.popover")), {
                key: 1,
                class: "band-group",
                align: "start"
              }, {
                default: x(({ close: c }) => [
                  (o(), m(g(e.$c("ui.popover-trigger")), { class: "band-group__trigger" }, {
                    default: x(() => [
                      s("button", {
                        type: "button",
                        class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                        role: "tab",
                        "aria-selected": !!P(a.items),
                        "aria-haspopup": "menu",
                        onMousedown: t[7] || (t[7] = K(() => {
                        }, ["prevent"])),
                        "data-testid": `app-nav-group-${a.group}`
                      }, [
                        a.icon ? (o(), m(g(a.icon), {
                          key: 0,
                          size: 13
                        })) : u("", !0),
                        B(" " + i(a.group) + " ", 1),
                        P(a.items) ? (o(), n("span", jt, "· " + i(P(a.items).label), 1)) : u("", !0),
                        h(r(D), { size: 12 })
                      ], 40, Ft)
                    ]),
                    _: 2
                  }, 1024)),
                  (o(), m(g(e.$c("ui.popover-content")), {
                    align: "start",
                    class: "p-1"
                  }, {
                    default: x(() => [
                      s("div", Pt, [
                        (o(!0), n(k, null, S(a.items, (l) => (o(), n("button", {
                          key: l.path,
                          type: "button",
                          class: "pop-item whitespace-nowrap",
                          role: "menuitem",
                          "aria-selected": r(f).active === l.path,
                          disabled: l.disabled,
                          "aria-disabled": l.disabled || void 0,
                          onClick: (C) => {
                            c(), r(f).navigate?.(l.path);
                          }
                        }, [
                          l.icon ? (o(), m(g(l.icon), {
                            key: 0,
                            size: 15,
                            class: "text-muted-foreground"
                          })) : u("", !0),
                          s("span", Bt, i(l.label), 1),
                          r(f).active === l.path ? (o(), m(r(ne), {
                            key: 1,
                            size: 14,
                            class: "text-primary"
                          })) : u("", !0)
                        ], 8, Gt))), 128))
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
}), aa = /* @__PURE__ */ We(Wt, [["__scopeId", "data-v-3aa0ef2e"]]);
export {
  aa as default
};
//# sourceMappingURL=Header-nzu9YQbH.js.map
