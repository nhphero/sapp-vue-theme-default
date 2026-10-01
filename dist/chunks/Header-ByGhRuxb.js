import { defineComponent as Ce, inject as Se, computed as p, ref as y, watch as G, onMounted as Me, openBlock as o, createElementBlock as l, createElementVNode as a, unref as r, Fragment as k, normalizeClass as U, toDisplayString as c, createCommentVNode as u, createStaticVNode as ze, createBlock as m, resolveDynamicComponent as g, withCtx as x, renderList as S, createVNode as h, createTextVNode as K, withKeys as Le, withModifiers as W } from "vue";
import { useRouter as Ee, useRoute as Ve } from "vue-router";
import { LayoutGrid as V, Check as le, ChevronDown as D, User as Ne, Palette as Te, LogOut as Re, Star as Ie, Database as Oe, AppWindow as Ue, Terminal as De, Cpu as Fe, Box as Pe, Zap as je, Layers as Be, Globe as Ge, Shield as Ke } from "lucide-vue-next";
import { SUPERAPP_EVENTS as We } from "@nhphero/vue-sapp/contracts";
import { _ as ie } from "./LocaleFlag.vue_vue_type_script_setup_true_lang-D2eeZNym.js";
import { _ as re } from "./UserAvatar.vue_vue_type_script_setup_true_lang-AXBFwsc7.js";
import { _ as He } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const Je = { class: "w-full bg-background sticky top-0 z-[100] transition-colors duration-300" }, Xe = { class: "page-container h-(--header-h) flex items-center justify-between gap-4" }, Ye = { class: "flex items-center gap-3 min-w-0" }, Ze = ["title"], Qe = ["src", "alt"], qe = ["src", "alt"], et = {
  key: 2,
  class: "hidden lg:block text-[10px] font-bold uppercase tracking-[0.2em] text-faint border-l border-border-soft pl-3"
}, tt = { class: "flex items-center gap-2" }, st = { class: "hidden md:flex items-center gap-1 flex-nowrap shrink-0" }, at = ["title", "aria-label"], ot = { class: "w-52" }, nt = { class: "pop-head" }, lt = ["aria-selected", "onClick"], it = { class: "flex items-center gap-2.5" }, rt = {
  type: "button",
  class: "h-9 flex items-center gap-2 pl-2.5 pr-1.5 rounded-lg hover:bg-muted cursor-pointer transition-colors outline-none",
  "data-testid": "user-menu"
}, ct = { class: "hidden lg:block text-sm font-semibold text-foreground whitespace-nowrap" }, dt = { class: "w-60" }, ut = { class: "flex items-center gap-3 px-2 py-2.5 mb-1 border-b border-border-soft" }, pt = { class: "min-w-0" }, mt = { class: "text-sm font-semibold text-foreground truncate" }, vt = { class: "text-xs text-faint truncate" }, gt = { class: "app-band" }, ht = { class: "page-container flex items-stretch gap-3" }, ft = { class: "flex items-stretch shrink-0" }, bt = ["title", "aria-label"], _t = {
  class: "text-sm font-semibold text-foreground whitespace-nowrap",
  "data-testid": "current-app"
}, yt = ["title"], kt = { class: "w-[720px] max-w-[calc(100vw-32px)]" }, xt = {
  key: 0,
  class: "recent-apps",
  "data-testid": "apps-recent"
}, wt = { class: "pop-head" }, $t = { class: "recent-apps__row" }, At = ["title", "onClick"], Ct = { class: "truncate" }, St = {
  key: 1,
  class: "px-3 py-6 text-sm text-faint text-center"
}, Mt = ["data-testid"], zt = {
  key: 0,
  class: "pop-head flex items-center gap-1.5"
}, Lt = { class: "text-faint font-normal" }, Et = { class: "px-2 pb-1 grid gap-1 sm:grid-cols-2 lg:grid-cols-3" }, Vt = ["onClick", "onKeydown", "aria-current"], Nt = { class: "min-w-0 flex-1" }, Tt = { class: "block text-sm font-semibold truncate group-hover:text-primary transition-colors" }, Rt = { class: "block text-xs text-muted-foreground truncate" }, It = ["aria-pressed", "aria-label", "onClick"], Ot = {
  key: 0,
  class: "app-band__sep self-center h-5 w-px shrink-0"
}, Ut = {
  key: 1,
  class: "tabs tabs--band min-w-0 overflow-x-auto no-scrollbar",
  role: "tablist",
  "data-testid": "app-nav"
}, Dt = ["aria-selected", "onClick"], Ft = {
  key: 1,
  class: "badge"
}, Pt = ["aria-selected", "data-testid"], jt = {
  key: 1,
  class: "band-group__current"
}, Bt = {
  class: "min-w-56 flex flex-col",
  role: "menu"
}, Gt = ["aria-selected", "disabled", "aria-disabled", "onClick"], Kt = { class: "flex-1" }, ce = "sapp:recent-apps", Wt = 5, de = 10, Ht = /* @__PURE__ */ Ce({
  __name: "Header",
  setup(Jt) {
    const d = Se("$superApp"), M = d, z = Ee(), H = Ve(), L = M.$appState, J = M.$themeConfig, b = p(() => M.$config?.branding ?? null), X = p(() => J?.state?.mode === "dark" || J?.state?.mode === "system" && window.matchMedia?.("(prefers-color-scheme: dark)").matches), w = M.$i18n, F = y(!1), ue = { vi: "Tiếng Việt", en: "English", ja: "日本語", ko: "한국어", zh: "中文", fr: "Français", de: "Deutsch" }, pe = (e) => {
      w?.setLocale(e), F.value = !1;
    }, Y = p(
      () => ae.value.map((e) => ({ key: `app:${e.id}`, id: e.id, label: e.label, detail: e.detail, icon: e.icon, run: () => Ae(e.path) }))
    ), Z = p(() => d?.getModuleState?.("home", { favorites: [] })), Q = p(() => Z.value?.favorites ?? []), q = (e) => Q.value.includes(e), me = (e) => Z.value?.toggleFavorite?.(e), ee = (e) => {
      const t = (e || "").trim().toLowerCase(), s = ($) => !t || `${$.label} ${$.detail || ""} ${$.id}`.toLowerCase().includes(t), i = Y.value.filter(s), n = ($) => {
        const O = Q.value.indexOf($.key);
        return O === -1 ? Number.MAX_SAFE_INTEGER : O;
      }, C = [...i].sort(($, O) => n($) - n(O));
      return C.length ? [{ key: "apps", label: "", tiles: C }] : [];
    }, ve = p(() => {
      const e = Number(M.state?.platformConfig?.apps?.recentCount);
      return Number.isFinite(e) ? Math.min(de, Math.max(0, Math.round(e))) : Wt;
    }), N = y((() => {
      try {
        const e = JSON.parse(localStorage.getItem(ce) || "[]");
        return Array.isArray(e) ? e.filter((t) => typeof t == "string") : [];
      } catch {
        return [];
      }
    })()), ge = (e) => {
      N.value = [e, ...N.value.filter((t) => t !== e)].slice(0, de + 1);
      try {
        localStorage.setItem(ce, JSON.stringify(N.value));
      } catch {
      }
    }, te = (e) => {
      const t = (e || "").trim().toLowerCase();
      return N.value.filter((s) => s !== _.value.id).map((s) => Y.value.find((i) => i.id === s)).filter((s) => !!s && (!t || `${s.label} ${s.detail || ""} ${s.id}`.toLowerCase().includes(t))).slice(0, ve.value);
    }, P = y(!1), he = (e) => {
      P.value = e;
    }, T = y(!1);
    y(!1);
    const v = y(null), A = y([]), R = y([]), fe = {
      Shield: Ke,
      Globe: Ge,
      Layers: Be,
      LayoutGrid: V,
      Zap: je,
      Box: Pe,
      Cpu: Fe,
      Terminal: De,
      AppWindow: Ue,
      Database: Oe
    }, be = (e) => e ? fe[e] || V : V, se = () => {
      typeof d?.getRegisteredApps == "function" && (R.value = d.getRegisteredApps());
    }, _e = ["superadmin", "admin"], ye = p(() => d?.$policy?.can?.("role", _e) ?? !1), ae = p(() => (R.value.length > 0 ? R.value : [
      { id: "workspace", name: "Workspace Hub", url: "http://localhost:4409", icon: "Globe", description: "Logic Orchestration", isEnabled: !0 },
      { id: "admin", name: "Admin Management", url: "http://localhost:4403", icon: "Shield", description: "Platform Governance", isEnabled: !0 }
    ]).filter((t) => t.isEnabled !== !1).filter((t) => t.id !== "admin" || ye.value).map((t) => ({
      id: t.id,
      label: t.name,
      // Routes follow the slug (changeable); the id stays the key.
      path: typeof d.appPath == "function" ? d.appPath(t.id, t.id === "admin" ? "apps" : "") : `/app/${t.slug || t.id}${t.id === "admin" ? "/apps" : ""}`,
      icon: be(t.icon),
      detail: t.description || "Micro-Frontend App"
    }))), f = d.getModuleState("shell.nav", { moduleId: "", title: "", icon: null, items: [], active: "", navigate: null }), oe = p(() => H.path.startsWith("/app/")), _ = p(() => {
      let e = oe.value ? L.current_app : null;
      e === "expose" && (e = "workspace");
      const t = e && ae.value.find((s) => s.id === e);
      return t || (e && f.title ? { id: e, label: f.title, icon: f.icon || V } : { id: "default", label: w?.t("shell.apps") ?? "Apps", icon: V });
    }), ne = p(() => oe.value && f.items.length > 0);
    G(() => _.value.id, (e) => {
      e && e !== "default" && ge(e);
    }, { immediate: !0 });
    const E = y(""), j = y("");
    G(() => [_.value.id, _.value.version], async ([e]) => {
      if (E.value = "", j.value = "", !e || e === "default" || typeof d.loadAppManifest != "function") return;
      const t = await d.loadAppManifest(e);
      if (_.value.id !== e) return;
      const s = t ? String(t.version ?? "dev") : "", i = d.getRegisteredApps?.().find((n) => n.id === e);
      E.value = s && i?.channel === "stable" ? "stable" : s, j.value = E.value === "stable" ? `stable · ${s}` : s;
    }, { immediate: !0 });
    const ke = p(() => {
      const e = [];
      for (const t of f.items) {
        if (!t.group) {
          e.push({ group: null, item: t });
          continue;
        }
        const s = e.find((i) => i.group === t.group);
        s ? (s.items.push(t), s.icon ??= t.groupIcon) : e.push({ group: t.group, icon: t.groupIcon, items: [t] });
      }
      return e;
    }), B = (e) => e.find((t) => f.active === t.path) ?? null, I = p({
      get: () => L.current_workspace,
      set: (e) => {
        L.current_workspace = e;
      }
    });
    p(() => A.value.find((e) => String(e.id) === String(I.value)) || A.value[0]), G(() => H.params.moduleId, (e) => {
      const t = Array.isArray(e) ? e[0] : e, s = t && (d.findAppByRoute?.(t)?.id ?? t);
      s && L.current_app !== s && (L.current_app = s);
    }, { immediate: !0 });
    const xe = async () => {
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
    const we = async () => {
      try {
        const e = await d.doAction("workspace.list");
        A.value = e || [];
        const t = A.value.find((s) => String(s.id) === String(I.value));
        (!I.value || !t) && A.value.length > 0 && (I.value = String(A.value[0].id));
      } catch {
      }
    }, $e = async () => {
      d.emit?.(We.AUTH_LOGOUT);
      try {
        d.doAction("auth.logout"), localStorage.removeItem("accessToken"), z.push("/login").catch(() => {
          window.location.href = "/login";
        });
      } catch {
        localStorage.removeItem("accessToken"), window.location.href = "/login";
      }
    }, Ae = (e) => {
      P.value = !1, z.push(e);
    };
    return Me(() => {
      xe(), we(), se(), typeof d?.on == "function" && d.on("apps:updated", (e) => {
        Array.isArray(e) ? R.value = e : se();
      });
    }), (e, t) => (o(), l("header", Je, [
      a("div", Xe, [
        a("div", Ye, [
          a("div", {
            class: "flex items-center gap-3 cursor-pointer group/logo",
            "data-testid": "brand",
            title: b.value?.name,
            onClick: t[0] || (t[0] = (s) => r(z).push(b.value?.homePath || "/"))
          }, [
            b.value?.logo ? (o(), l(k, { key: 0 }, [
              X.value && b.value.logoDark ? (o(), l("img", {
                key: 0,
                src: b.value.logoDark,
                alt: b.value.name,
                class: "h-7 w-auto max-w-[200px] object-contain"
              }, null, 8, Qe)) : (o(), l("span", {
                key: 1,
                class: U(["inline-flex items-center rounded-md", X.value && "bg-white/95 px-2 py-1"])
              }, [
                a("img", {
                  src: b.value.logo,
                  alt: b.value.name,
                  class: "h-7 w-auto max-w-[200px] object-contain"
                }, null, 8, qe)
              ], 2)),
              b.value.tagline ? (o(), l("span", et, c(b.value.tagline), 1)) : u("", !0)
            ], 64)) : (o(), l(k, { key: 1 }, [
              t[8] || (t[8] = ze('<div class="relative" data-v-c84cf0f7><div class="w-9 h-9 bg-primary rounded-xl flex items-center justify-center relative z-10 transition-transform group-hover/logo:scale-110 shadow-xl border border-border-soft" data-v-c84cf0f7><span class="text-primary-foreground font-black text-xs tracking-tighter" data-v-c84cf0f7>MP</span></div></div><div class="flex flex-col text-left" data-v-c84cf0f7><span class="text-[11px] font-black uppercase tracking-[0.4em] text-foreground group-hover/logo:text-primary transition-colors leading-none mb-1" data-v-c84cf0f7>Antigravity</span><span class="text-[9px] font-black uppercase tracking-[0.2em] text-faint" data-v-c84cf0f7>Core OS v5</span></div>', 2))
            ], 64))
          ], 8, Ze)
        ]),
        a("div", tt, [
          a("div", st, [
            r(w) ? (o(), m(g(e.$c("ui.dropdown")), {
              key: 0,
              modelValue: F.value,
              "onUpdate:modelValue": t[1] || (t[1] = (s) => F.value = s),
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
                  h(ie, {
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
                a("div", ot, [
                  a("div", nt, c(e.$t("shell.language")), 1),
                  (o(!0), l(k, null, S(r(w).availableLocales, (s) => (o(), l("button", {
                    key: s,
                    type: "button",
                    class: "pop-item justify-between whitespace-nowrap",
                    "aria-selected": r(w).locale === s,
                    onClick: (i) => pe(s)
                  }, [
                    a("span", it, [
                      h(ie, {
                        locale: s,
                        size: 22
                      }, null, 8, ["locale"]),
                      a("span", null, c(ue[s] ?? s), 1)
                    ]),
                    r(w).locale === s ? (o(), m(r(le), {
                      key: 0,
                      size: 14,
                      class: "text-primary"
                    })) : u("", !0)
                  ], 8, lt))), 128))
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])) : u("", !0)
          ]),
          t[10] || (t[10] = a("div", { class: "h-6 w-px bg-border-soft mx-1 hidden md:block" }, null, -1)),
          (o(), m(g(e.$c("ui.dropdown")), {
            modelValue: T.value,
            "onUpdate:modelValue": t[4] || (t[4] = (s) => T.value = s),
            align: "right"
          }, {
            trigger: x(() => [
              a("button", rt, [
                a("span", ct, c(v.value?.username || "User"), 1),
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
              a("div", dt, [
                a("div", ut, [
                  h(re, {
                    src: v.value?.avatar,
                    name: v.value?.username || "User",
                    size: 36,
                    rounded: "lg"
                  }, null, 8, ["src", "name"]),
                  a("div", pt, [
                    a("div", mt, c(v.value?.username), 1),
                    a("div", vt, c(v.value?.email || v.value?.role), 1)
                  ])
                ]),
                a("button", {
                  type: "button",
                  class: "pop-item",
                  "data-testid": "menu-profile",
                  onClick: t[2] || (t[2] = (s) => {
                    r(z).push("/account/profile"), T.value = !1;
                  })
                }, [
                  h(r(Ne), {
                    size: 15,
                    class: "text-muted-foreground"
                  }),
                  a("span", null, c(e.$t("shell.profile")), 1)
                ]),
                a("button", {
                  type: "button",
                  class: "pop-item",
                  onClick: t[3] || (t[3] = (s) => {
                    r(z).push("/system/theme"), T.value = !1;
                  })
                }, [
                  h(r(Te), {
                    size: 15,
                    class: "text-muted-foreground"
                  }),
                  a("span", null, c(e.$t("system.themeStudio", { default: "Theme Studio" })), 1)
                ]),
                t[9] || (t[9] = a("div", { class: "pop-sep" }, null, -1)),
                a("button", {
                  type: "button",
                  class: "pop-item danger",
                  onClick: $e
                }, [
                  h(r(Re), { size: 15 }),
                  a("span", null, c(e.$t("shell.logout")), 1)
                ])
              ])
            ]),
            _: 1
          }, 8, ["modelValue"]))
        ])
      ]),
      a("div", gt, [
        a("div", ht, [
          a("div", ft, [
            (o(), m(g(e.$c("ui.dropdown")), {
              class: "app-switch",
              modelValue: P.value,
              "onUpdate:modelValue": t[5] || (t[5] = (s) => he(s)),
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
                    class: U(["w-7 h-7 rounded-md grid place-items-center shrink-0 transition-colors", _.value.id === "default" ? "bg-muted text-muted-foreground" : "bg-primary-soft text-primary"])
                  }, [
                    (o(), m(g(_.value.icon), { size: 16 }))
                  ], 2),
                  a("span", _t, c(_.value.label), 1),
                  E.value ? (o(), l("span", {
                    key: 0,
                    class: "app-version",
                    "data-testid": "current-app-version",
                    title: j.value
                  }, c(E.value), 9, yt)) : u("", !0),
                  h(r(D), {
                    size: 14,
                    class: "text-faint group-hover/app:text-foreground transition-colors"
                  })
                ], 8, bt)
              ]),
              content: x(({ query: s }) => [
                a("div", kt, [
                  te(s).length ? (o(), l("section", xt, [
                    a("div", wt, c(e.$t("shell.recent")), 1),
                    a("div", $t, [
                      (o(!0), l(k, null, S(te(s), (i) => (o(), l("button", {
                        key: i.key,
                        type: "button",
                        class: "recent-apps__item",
                        title: i.detail,
                        "data-testid": "recent-app",
                        onClick: (n) => i.run()
                      }, [
                        (o(), m(g(i.icon), {
                          size: 14,
                          "stroke-width": "1.75"
                        })),
                        a("span", Ct, c(i.label), 1)
                      ], 8, At))), 128))
                    ])
                  ])) : u("", !0),
                  ee(s).length ? u("", !0) : (o(), l("div", St, c(e.$t("common.empty")), 1)),
                  (o(!0), l(k, null, S(ee(s), (i) => (o(), l("section", {
                    key: i.key,
                    class: "pt-1 last:pb-3",
                    "data-testid": `apps-section-${i.key}`
                  }, [
                    i.label ? (o(), l("div", zt, [
                      K(c(i.label), 1),
                      a("span", Lt, c(i.tiles.length), 1)
                    ])) : u("", !0),
                    a("div", Et, [
                      (o(!0), l(k, null, S(i.tiles, (n) => (o(), l("div", {
                        key: n.key,
                        role: "button",
                        tabindex: "0",
                        onClick: (C) => n.run(),
                        onKeydown: Le((C) => n.run(), ["enter"]),
                        class: "group relative flex items-center gap-3 rounded-lg px-2.5 py-2 text-left hover:bg-muted transition-colors min-w-0 cursor-pointer",
                        "aria-current": n.id === _.value.id ? "true" : void 0
                      }, [
                        a("span", {
                          class: U(["w-8 h-8 rounded-lg grid place-items-center shrink-0 transition-colors group-hover:bg-primary-soft group-hover:text-primary", n.id === _.value.id ? "bg-primary-soft text-primary" : "bg-muted text-muted-foreground"])
                        }, [
                          (o(), m(g(n.icon), {
                            size: 16,
                            "stroke-width": "1.75"
                          }))
                        ], 2),
                        a("span", Nt, [
                          a("span", Tt, c(n.label), 1),
                          a("span", Rt, c(n.detail), 1)
                        ]),
                        a("button", {
                          type: "button",
                          class: "icon-btn shrink-0 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 aria-pressed:opacity-100",
                          style: { width: "28px", height: "28px" },
                          "aria-pressed": q(n.key),
                          "aria-label": e.$t("shell.toggleFavorite"),
                          "data-testid": "tile-star",
                          onClick: W((C) => me(n.key), ["stop"])
                        }, [
                          h(r(Ie), {
                            size: 14,
                            class: U(q(n.key) ? "fill-warning text-warning" : "text-faint")
                          }, null, 8, ["class"])
                        ], 8, It)
                      ], 40, Vt))), 128))
                    ])
                  ], 8, Mt))), 128))
                ])
              ]),
              _: 1
            }, 8, ["modelValue", "search-placeholder"]))
          ]),
          ne.value ? (o(), l("div", Ot)) : u("", !0),
          ne.value ? (o(), l("nav", Ut, [
            (o(!0), l(k, null, S(ke.value, (s) => (o(), l(k, {
              key: s.group ?? s.item.path
            }, [
              s.group === null ? (o(), l("button", {
                key: 0,
                type: "button",
                class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                role: "tab",
                "aria-selected": r(f).active === s.item.path,
                onMousedown: t[6] || (t[6] = W(() => {
                }, ["prevent"])),
                onClick: (i) => r(f).navigate?.(s.item.path)
              }, [
                s.item.icon ? (o(), m(g(s.item.icon), {
                  key: 0,
                  size: 13
                })) : u("", !0),
                K(" " + c(s.item.label) + " ", 1),
                s.item.badge !== void 0 ? (o(), l("span", Ft, c(s.item.badge), 1)) : u("", !0)
              ], 40, Dt)) : (o(), m(g(e.$c("ui.popover")), {
                key: 1,
                class: "band-group",
                align: "start"
              }, {
                default: x(({ close: i }) => [
                  (o(), m(g(e.$c("ui.popover-trigger")), { class: "band-group__trigger" }, {
                    default: x(() => [
                      a("button", {
                        type: "button",
                        class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                        role: "tab",
                        "aria-selected": !!B(s.items),
                        "aria-haspopup": "menu",
                        onMousedown: t[7] || (t[7] = W(() => {
                        }, ["prevent"])),
                        "data-testid": `app-nav-group-${s.group}`
                      }, [
                        s.icon ? (o(), m(g(s.icon), {
                          key: 0,
                          size: 13
                        })) : u("", !0),
                        K(" " + c(s.group) + " ", 1),
                        B(s.items) ? (o(), l("span", jt, "· " + c(B(s.items).label), 1)) : u("", !0),
                        h(r(D), { size: 12 })
                      ], 40, Pt)
                    ]),
                    _: 2
                  }, 1024)),
                  (o(), m(g(e.$c("ui.popover-content")), {
                    align: "start",
                    class: "p-1"
                  }, {
                    default: x(() => [
                      a("div", Bt, [
                        (o(!0), l(k, null, S(s.items, (n) => (o(), l("button", {
                          key: n.path,
                          type: "button",
                          class: "pop-item whitespace-nowrap",
                          role: "menuitem",
                          "aria-selected": r(f).active === n.path,
                          disabled: n.disabled,
                          "aria-disabled": n.disabled || void 0,
                          onClick: (C) => {
                            i(), r(f).navigate?.(n.path);
                          }
                        }, [
                          n.icon ? (o(), m(g(n.icon), {
                            key: 0,
                            size: 15,
                            class: "text-muted-foreground"
                          })) : u("", !0),
                          a("span", Kt, c(n.label), 1),
                          r(f).active === n.path ? (o(), m(r(le), {
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
}), as = /* @__PURE__ */ He(Ht, [["__scopeId", "data-v-c84cf0f7"]]);
export {
  as as default
};
//# sourceMappingURL=Header-ByGhRuxb.js.map
