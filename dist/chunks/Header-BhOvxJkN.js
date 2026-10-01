import { defineComponent as _e, inject as ye, computed as u, ref as x, watch as te, onMounted as xe, openBlock as o, createElementBlock as l, createElementVNode as s, unref as i, Fragment as k, normalizeClass as D, toDisplayString as r, createCommentVNode as p, createStaticVNode as ke, createBlock as m, resolveDynamicComponent as f, withCtx as _, renderList as L, createVNode as v, createTextVNode as R, withKeys as we, withModifiers as G } from "vue";
import { useRouter as $e, useRoute as Ae } from "vue-router";
import { LayoutGrid as M, Check as ae, ChevronDown as O, User as Se, Palette as Ce, LogOut as ze, Star as Le, Database as Me, AppWindow as Ve, Terminal as Ee, Cpu as Ie, Box as Ne, Zap as Ue, Layers as Te, Globe as De, Shield as Oe } from "lucide-vue-next";
import { SUPERAPP_EVENTS as Fe } from "@nhphero/vue-sapp/contracts";
import { _ as se } from "./LocaleFlag.vue_vue_type_script_setup_true_lang-D2eeZNym.js";
import { _ as oe } from "./UserAvatar.vue_vue_type_script_setup_true_lang-AXBFwsc7.js";
import { _ as je } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const Pe = { class: "w-full bg-background sticky top-0 z-[100] transition-colors duration-300" }, Re = { class: "page-container h-(--header-h) flex items-center justify-between gap-4" }, Ge = { class: "flex items-center gap-3 min-w-0" }, Be = ["title"], We = ["src", "alt"], He = ["src", "alt"], Ke = {
  key: 2,
  class: "hidden lg:block text-[10px] font-bold uppercase tracking-[0.2em] text-faint border-l border-border-soft pl-3"
}, Je = { class: "flex items-center gap-2" }, Xe = { class: "hidden md:flex items-center gap-1 flex-nowrap shrink-0" }, Ze = ["title", "aria-label"], Qe = { class: "w-52" }, Ye = { class: "pop-head" }, qe = ["aria-selected", "onClick"], et = { class: "flex items-center gap-2.5" }, tt = {
  type: "button",
  class: "h-9 flex items-center gap-2 pl-2.5 pr-1.5 rounded-lg hover:bg-muted cursor-pointer transition-colors outline-none",
  "data-testid": "user-menu"
}, at = { class: "hidden lg:block text-sm font-semibold text-foreground whitespace-nowrap" }, st = { class: "w-60" }, ot = { class: "flex items-center gap-3 px-2 py-2.5 mb-1 border-b border-border-soft" }, nt = { class: "min-w-0" }, lt = { class: "text-sm font-semibold text-foreground truncate" }, it = { class: "text-xs text-faint truncate" }, rt = { class: "app-band" }, dt = { class: "page-container flex items-stretch gap-3" }, ct = { class: "flex items-stretch shrink-0" }, pt = ["title", "aria-label"], ut = { class: "flex flex-col items-start min-w-0 leading-tight" }, mt = {
  class: "text-sm font-semibold text-foreground whitespace-nowrap",
  "data-testid": "current-app"
}, gt = {
  key: 0,
  class: "app-version text-faint font-mono whitespace-nowrap",
  "data-testid": "current-app-version"
}, vt = { class: "w-[720px] max-w-[calc(100vw-32px)]" }, ht = {
  key: 0,
  class: "px-3 py-6 text-sm text-faint text-center"
}, ft = ["data-testid"], bt = {
  key: 0,
  class: "pop-head flex items-center gap-1.5"
}, _t = { class: "text-faint font-normal" }, yt = { class: "px-2 pb-1 grid gap-1 sm:grid-cols-2 lg:grid-cols-3" }, xt = ["onClick", "onKeydown", "aria-current"], kt = { class: "min-w-0 flex-1" }, wt = { class: "block text-sm font-semibold truncate group-hover:text-primary transition-colors" }, $t = { class: "block text-xs text-muted-foreground truncate" }, At = ["aria-pressed", "aria-label", "onClick"], St = {
  key: 0,
  class: "app-band__sep self-center h-5 w-px shrink-0"
}, Ct = {
  key: 1,
  class: "tabs tabs--band min-w-0 overflow-x-auto no-scrollbar",
  role: "tablist",
  "data-testid": "app-nav"
}, zt = ["aria-selected", "onClick"], Lt = {
  key: 1,
  class: "badge"
}, Mt = ["aria-selected", "data-testid"], Vt = {
  key: 1,
  class: "band-group__current"
}, Et = {
  class: "min-w-56 flex flex-col",
  role: "menu"
}, It = ["aria-selected", "disabled", "aria-disabled", "onClick"], Nt = { class: "flex-1" }, Ut = /* @__PURE__ */ _e({
  __name: "Header",
  setup(Tt) {
    const d = ye("$superApp"), V = d, C = $e(), B = Ae(), z = V.$appState, W = V.$themeConfig, b = u(() => V.$config?.branding ?? null), H = u(() => W?.state?.mode === "dark" || W?.state?.mode === "system" && window.matchMedia?.("(prefers-color-scheme: dark)").matches), w = V.$i18n, F = x(!1), ne = { vi: "Tiếng Việt", en: "English", ja: "日本語", ko: "한국어", zh: "中文", fr: "Français", de: "Deutsch" }, le = (e) => {
      w?.setLocale(e), F.value = !1;
    }, ie = u(
      () => Y.value.map((e) => ({ key: `app:${e.id}`, id: e.id, label: e.label, detail: e.detail, icon: e.icon, run: () => be(e.path) }))
    ), K = u(() => d?.getModuleState?.("home", { favorites: [] })), J = u(() => K.value?.favorites ?? []), X = (e) => J.value.includes(e), re = (e) => K.value?.toggleFavorite?.(e), Z = (e) => {
      const t = (e || "").trim().toLowerCase(), a = ($) => !t || `${$.label} ${$.detail || ""} ${$.id}`.toLowerCase().includes(t), c = ie.value.filter(a), n = ($) => {
        const T = J.value.indexOf($.key);
        return T === -1 ? Number.MAX_SAFE_INTEGER : T;
      }, S = [...c].sort(($, T) => n($) - n(T));
      return S.length ? [{ key: "apps", label: "", tiles: S }] : [];
    }, j = x(!1), de = (e) => {
      j.value = e;
    }, E = x(!1);
    x(!1);
    const g = x(null), A = x([]), I = x([]), ce = {
      Shield: Oe,
      Globe: De,
      Layers: Te,
      LayoutGrid: M,
      Zap: Ue,
      Box: Ne,
      Cpu: Ie,
      Terminal: Ee,
      AppWindow: Ve,
      Database: Me
    }, pe = (e) => e ? ce[e] || M : M, Q = () => {
      typeof d?.getRegisteredApps == "function" && (I.value = d.getRegisteredApps());
    }, ue = ["superadmin", "admin"], me = u(() => d?.$policy?.can?.("role", ue) ?? !1), Y = u(() => (I.value.length > 0 ? I.value : [
      { id: "workspace", name: "Workspace Hub", url: "http://localhost:4409", icon: "Globe", description: "Logic Orchestration", isEnabled: !0 },
      { id: "admin", name: "Admin Management", url: "http://localhost:4403", icon: "Shield", description: "Platform Governance", isEnabled: !0 }
    ]).filter((t) => t.isEnabled !== !1).filter((t) => t.id !== "admin" || me.value).map((t) => ({
      id: t.id,
      label: t.name,
      path: t.id === "admin" ? "/app/admin/apps" : `/app/${t.id}`,
      icon: pe(t.icon),
      detail: t.description || "Micro-Frontend App"
    }))), h = d.getModuleState("shell.nav", { moduleId: "", title: "", icon: null, items: [], active: "", navigate: null }), q = u(() => B.path.startsWith("/app/")), y = u(() => {
      let e = q.value ? z.current_app : null;
      e === "expose" && (e = "workspace");
      const t = e && Y.value.find((a) => a.id === e);
      return t || (e && h.title ? { id: e, label: h.title, icon: h.icon || M } : { id: "default", label: w?.t("shell.apps") ?? "Apps", icon: M });
    }), ee = u(() => q.value && h.items.length > 0), N = x("");
    te(() => [y.value.id, y.value.version], async ([e]) => {
      if (N.value = "", !e || e === "default" || typeof d.loadAppManifest != "function") return;
      const t = await d.loadAppManifest(e);
      y.value.id === e && (N.value = t ? String(t.version ?? "dev") : "");
    }, { immediate: !0 });
    const ge = u(() => {
      const e = [];
      for (const t of h.items) {
        if (!t.group) {
          e.push({ group: null, item: t });
          continue;
        }
        const a = e.find((c) => c.group === t.group);
        a ? (a.items.push(t), a.icon ??= t.groupIcon) : e.push({ group: t.group, icon: t.groupIcon, items: [t] });
      }
      return e;
    }), P = (e) => e.find((t) => h.active === t.path) ?? null, U = u({
      get: () => z.current_workspace,
      set: (e) => {
        z.current_workspace = e;
      }
    });
    u(() => A.value.find((e) => String(e.id) === String(U.value)) || A.value[0]), te(() => B.params.moduleId, (e) => {
      const t = Array.isArray(e) ? e[0] : e;
      t && z.current_app !== t && (z.current_app = t);
    }, { immediate: !0 });
    const ve = async () => {
      try {
        g.value = await d.doAction("auth.me");
      } catch {
        try {
          g.value = JSON.parse(localStorage.getItem("user") || "null");
        } catch {
        }
      }
    };
    d.on?.("auth:profile-updated", (e) => {
      g.value = { ...g.value || {}, ...e };
    });
    const he = async () => {
      try {
        const e = await d.doAction("workspace.list");
        A.value = e || [];
        const t = A.value.find((a) => String(a.id) === String(U.value));
        (!U.value || !t) && A.value.length > 0 && (U.value = String(A.value[0].id));
      } catch {
      }
    }, fe = async () => {
      d.emit?.(Fe.AUTH_LOGOUT);
      try {
        d.doAction("auth.logout"), localStorage.removeItem("accessToken"), C.push("/login").catch(() => {
          window.location.href = "/login";
        });
      } catch {
        localStorage.removeItem("accessToken"), window.location.href = "/login";
      }
    }, be = (e) => {
      j.value = !1, C.push(e);
    };
    return xe(() => {
      ve(), he(), Q(), typeof d?.on == "function" && d.on("apps:updated", (e) => {
        Array.isArray(e) ? I.value = e : Q();
      });
    }), (e, t) => (o(), l("header", Pe, [
      s("div", Re, [
        s("div", Ge, [
          s("div", {
            class: "flex items-center gap-3 cursor-pointer group/logo",
            "data-testid": "brand",
            title: b.value?.name,
            onClick: t[0] || (t[0] = (a) => i(C).push(b.value?.homePath || "/"))
          }, [
            b.value?.logo ? (o(), l(k, { key: 0 }, [
              H.value && b.value.logoDark ? (o(), l("img", {
                key: 0,
                src: b.value.logoDark,
                alt: b.value.name,
                class: "h-7 w-auto max-w-[200px] object-contain"
              }, null, 8, We)) : (o(), l("span", {
                key: 1,
                class: D(["inline-flex items-center rounded-md", H.value && "bg-white/95 px-2 py-1"])
              }, [
                s("img", {
                  src: b.value.logo,
                  alt: b.value.name,
                  class: "h-7 w-auto max-w-[200px] object-contain"
                }, null, 8, He)
              ], 2)),
              b.value.tagline ? (o(), l("span", Ke, r(b.value.tagline), 1)) : p("", !0)
            ], 64)) : (o(), l(k, { key: 1 }, [
              t[8] || (t[8] = ke('<div class="relative" data-v-2773290d><div class="w-9 h-9 bg-primary rounded-xl flex items-center justify-center relative z-10 transition-transform group-hover/logo:scale-110 shadow-xl border border-border-soft" data-v-2773290d><span class="text-primary-foreground font-black text-xs tracking-tighter" data-v-2773290d>MP</span></div></div><div class="flex flex-col text-left" data-v-2773290d><span class="text-[11px] font-black uppercase tracking-[0.4em] text-foreground group-hover/logo:text-primary transition-colors leading-none mb-1" data-v-2773290d>Antigravity</span><span class="text-[9px] font-black uppercase tracking-[0.2em] text-faint" data-v-2773290d>Core OS v5</span></div>', 2))
            ], 64))
          ], 8, Be)
        ]),
        s("div", Je, [
          s("div", Xe, [
            i(w) ? (o(), m(f(e.$c("ui.dropdown")), {
              key: 0,
              modelValue: F.value,
              "onUpdate:modelValue": t[1] || (t[1] = (a) => F.value = a),
              align: "right"
            }, {
              trigger: _(() => [
                s("button", {
                  type: "button",
                  class: "h-9 px-2 rounded-lg flex items-center gap-1 whitespace-nowrap shrink-0 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors outline-none",
                  title: e.$t("shell.language"),
                  "aria-label": e.$t("shell.language"),
                  "data-testid": "lang-switch"
                }, [
                  v(se, {
                    locale: i(w).locale,
                    size: 20
                  }, null, 8, ["locale"]),
                  v(i(O), {
                    size: 13,
                    class: "text-faint"
                  })
                ], 8, Ze)
              ]),
              content: _(() => [
                s("div", Qe, [
                  s("div", Ye, r(e.$t("shell.language")), 1),
                  (o(!0), l(k, null, L(i(w).availableLocales, (a) => (o(), l("button", {
                    key: a,
                    type: "button",
                    class: "pop-item justify-between whitespace-nowrap",
                    "aria-selected": i(w).locale === a,
                    onClick: (c) => le(a)
                  }, [
                    s("span", et, [
                      v(se, {
                        locale: a,
                        size: 22
                      }, null, 8, ["locale"]),
                      s("span", null, r(ne[a] ?? a), 1)
                    ]),
                    i(w).locale === a ? (o(), m(i(ae), {
                      key: 0,
                      size: 14,
                      class: "text-primary"
                    })) : p("", !0)
                  ], 8, qe))), 128))
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])) : p("", !0)
          ]),
          t[10] || (t[10] = s("div", { class: "h-6 w-px bg-border-soft mx-1 hidden md:block" }, null, -1)),
          (o(), m(f(e.$c("ui.dropdown")), {
            modelValue: E.value,
            "onUpdate:modelValue": t[4] || (t[4] = (a) => E.value = a),
            align: "right"
          }, {
            trigger: _(() => [
              s("button", tt, [
                s("span", at, r(g.value?.username || "User"), 1),
                v(oe, {
                  src: g.value?.avatar,
                  name: g.value?.username || "User",
                  size: 28,
                  rounded: "lg"
                }, null, 8, ["src", "name"]),
                v(i(O), {
                  size: 13,
                  class: "text-faint"
                })
              ])
            ]),
            content: _(() => [
              s("div", st, [
                s("div", ot, [
                  v(oe, {
                    src: g.value?.avatar,
                    name: g.value?.username || "User",
                    size: 36,
                    rounded: "lg"
                  }, null, 8, ["src", "name"]),
                  s("div", nt, [
                    s("div", lt, r(g.value?.username), 1),
                    s("div", it, r(g.value?.email || g.value?.role), 1)
                  ])
                ]),
                s("button", {
                  type: "button",
                  class: "pop-item",
                  "data-testid": "menu-profile",
                  onClick: t[2] || (t[2] = (a) => {
                    i(C).push("/account/profile"), E.value = !1;
                  })
                }, [
                  v(i(Se), {
                    size: 15,
                    class: "text-muted-foreground"
                  }),
                  s("span", null, r(e.$t("shell.profile")), 1)
                ]),
                s("button", {
                  type: "button",
                  class: "pop-item",
                  onClick: t[3] || (t[3] = (a) => {
                    i(C).push("/system/theme"), E.value = !1;
                  })
                }, [
                  v(i(Ce), {
                    size: 15,
                    class: "text-muted-foreground"
                  }),
                  s("span", null, r(e.$t("system.themeStudio", { default: "Theme Studio" })), 1)
                ]),
                t[9] || (t[9] = s("div", { class: "pop-sep" }, null, -1)),
                s("button", {
                  type: "button",
                  class: "pop-item danger",
                  onClick: fe
                }, [
                  v(i(ze), { size: 15 }),
                  s("span", null, r(e.$t("shell.logout")), 1)
                ])
              ])
            ]),
            _: 1
          }, 8, ["modelValue"]))
        ])
      ]),
      s("div", rt, [
        s("div", dt, [
          s("div", ct, [
            (o(), m(f(e.$c("ui.dropdown")), {
              class: "app-switch",
              modelValue: j.value,
              "onUpdate:modelValue": t[5] || (t[5] = (a) => de(a)),
              search: "",
              "search-placeholder": e.$t("shell.searchApps")
            }, {
              trigger: _(() => [
                s("button", {
                  type: "button",
                  class: "app-chip flex items-center gap-2 transition-colors outline-none group/app",
                  title: e.$t("shell.apps"),
                  "aria-label": e.$t("shell.apps"),
                  "data-testid": "apps-switch"
                }, [
                  s("span", {
                    class: D(["w-7 h-7 rounded-md grid place-items-center shrink-0 transition-colors", y.value.id === "default" ? "bg-muted text-muted-foreground" : "bg-primary-soft text-primary"])
                  }, [
                    (o(), m(f(y.value.icon), { size: 16 }))
                  ], 2),
                  s("span", ut, [
                    s("span", mt, r(y.value.label), 1),
                    N.value ? (o(), l("span", gt, r(N.value), 1)) : p("", !0)
                  ]),
                  v(i(O), {
                    size: 14,
                    class: "text-faint group-hover/app:text-foreground transition-colors"
                  })
                ], 8, pt)
              ]),
              content: _(({ query: a }) => [
                s("div", vt, [
                  Z(a).length ? p("", !0) : (o(), l("div", ht, r(e.$t("common.empty")), 1)),
                  (o(!0), l(k, null, L(Z(a), (c) => (o(), l("section", {
                    key: c.key,
                    class: "pt-1 last:pb-3",
                    "data-testid": `apps-section-${c.key}`
                  }, [
                    c.label ? (o(), l("div", bt, [
                      R(r(c.label), 1),
                      s("span", _t, r(c.tiles.length), 1)
                    ])) : p("", !0),
                    s("div", yt, [
                      (o(!0), l(k, null, L(c.tiles, (n) => (o(), l("div", {
                        key: n.key,
                        role: "button",
                        tabindex: "0",
                        onClick: (S) => n.run(),
                        onKeydown: we((S) => n.run(), ["enter"]),
                        class: "group relative flex items-center gap-3 rounded-lg px-2.5 py-2 text-left hover:bg-muted transition-colors min-w-0 cursor-pointer",
                        "aria-current": n.id === y.value.id ? "true" : void 0
                      }, [
                        s("span", {
                          class: D(["w-8 h-8 rounded-lg grid place-items-center shrink-0 transition-colors group-hover:bg-primary-soft group-hover:text-primary", n.id === y.value.id ? "bg-primary-soft text-primary" : "bg-muted text-muted-foreground"])
                        }, [
                          (o(), m(f(n.icon), {
                            size: 16,
                            "stroke-width": "1.75"
                          }))
                        ], 2),
                        s("span", kt, [
                          s("span", wt, r(n.label), 1),
                          s("span", $t, r(n.detail), 1)
                        ]),
                        s("button", {
                          type: "button",
                          class: "icon-btn shrink-0 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 aria-pressed:opacity-100",
                          style: { width: "28px", height: "28px" },
                          "aria-pressed": X(n.key),
                          "aria-label": e.$t("shell.toggleFavorite"),
                          "data-testid": "tile-star",
                          onClick: G((S) => re(n.key), ["stop"])
                        }, [
                          v(i(Le), {
                            size: 14,
                            class: D(X(n.key) ? "fill-warning text-warning" : "text-faint")
                          }, null, 8, ["class"])
                        ], 8, At)
                      ], 40, xt))), 128))
                    ])
                  ], 8, ft))), 128))
                ])
              ]),
              _: 1
            }, 8, ["modelValue", "search-placeholder"]))
          ]),
          ee.value ? (o(), l("div", St)) : p("", !0),
          ee.value ? (o(), l("nav", Ct, [
            (o(!0), l(k, null, L(ge.value, (a) => (o(), l(k, {
              key: a.group ?? a.item.path
            }, [
              a.group === null ? (o(), l("button", {
                key: 0,
                type: "button",
                class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                role: "tab",
                "aria-selected": i(h).active === a.item.path,
                onMousedown: t[6] || (t[6] = G(() => {
                }, ["prevent"])),
                onClick: (c) => i(h).navigate?.(a.item.path)
              }, [
                a.item.icon ? (o(), m(f(a.item.icon), {
                  key: 0,
                  size: 13
                })) : p("", !0),
                R(" " + r(a.item.label) + " ", 1),
                a.item.badge !== void 0 ? (o(), l("span", Lt, r(a.item.badge), 1)) : p("", !0)
              ], 40, zt)) : (o(), m(f(e.$c("ui.popover")), {
                key: 1,
                class: "band-group",
                align: "start"
              }, {
                default: _(({ close: c }) => [
                  (o(), m(f(e.$c("ui.popover-trigger")), { class: "band-group__trigger" }, {
                    default: _(() => [
                      s("button", {
                        type: "button",
                        class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                        role: "tab",
                        "aria-selected": !!P(a.items),
                        "aria-haspopup": "menu",
                        onMousedown: t[7] || (t[7] = G(() => {
                        }, ["prevent"])),
                        "data-testid": `app-nav-group-${a.group}`
                      }, [
                        a.icon ? (o(), m(f(a.icon), {
                          key: 0,
                          size: 13
                        })) : p("", !0),
                        R(" " + r(a.group) + " ", 1),
                        P(a.items) ? (o(), l("span", Vt, "· " + r(P(a.items).label), 1)) : p("", !0),
                        v(i(O), { size: 12 })
                      ], 40, Mt)
                    ]),
                    _: 2
                  }, 1024)),
                  (o(), m(f(e.$c("ui.popover-content")), {
                    align: "start",
                    class: "p-1"
                  }, {
                    default: _(() => [
                      s("div", Et, [
                        (o(!0), l(k, null, L(a.items, (n) => (o(), l("button", {
                          key: n.path,
                          type: "button",
                          class: "pop-item whitespace-nowrap",
                          role: "menuitem",
                          "aria-selected": i(h).active === n.path,
                          disabled: n.disabled,
                          "aria-disabled": n.disabled || void 0,
                          onClick: (S) => {
                            c(), i(h).navigate?.(n.path);
                          }
                        }, [
                          n.icon ? (o(), m(f(n.icon), {
                            key: 0,
                            size: 15,
                            class: "text-muted-foreground"
                          })) : p("", !0),
                          s("span", Nt, r(n.label), 1),
                          i(h).active === n.path ? (o(), m(i(ae), {
                            key: 1,
                            size: 14,
                            class: "text-primary"
                          })) : p("", !0)
                        ], 8, It))), 128))
                      ])
                    ]),
                    _: 2
                  }, 1024))
                ]),
                _: 2
              }, 1024))
            ], 64))), 128))
          ])) : p("", !0)
        ])
      ])
    ]));
  }
}), Bt = /* @__PURE__ */ je(Ut, [["__scopeId", "data-v-2773290d"]]);
export {
  Bt as default
};
//# sourceMappingURL=Header-BhOvxJkN.js.map
