import { defineComponent as De, inject as Ne, computed as p, ref as _, watch as I, onMounted as Oe, openBlock as n, createElementBlock as l, createElementVNode as s, unref as i, Fragment as k, normalizeClass as H, toDisplayString as r, createCommentVNode as u, createStaticVNode as Ue, createBlock as m, resolveDynamicComponent as h, withCtx as w, renderList as C, createVNode as g, createTextVNode as G, withKeys as Re, withModifiers as J } from "vue";
import { appIcon as Ie } from "../index.js";
import { useRouter as Te, useRoute as je } from "vue-router";
import { LayoutGrid as re, Check as ce, ChevronDown as T, User as Pe, Palette as Ke, LogOut as Fe, Star as Be } from "lucide-vue-next";
import { SUPERAPP_EVENTS as He } from "@nhphero/vue-sapp/contracts";
import { _ as de } from "./LocaleFlag.vue_vue_type_script_setup_true_lang-D2eeZNym.js";
import { _ as ue } from "./UserAvatar.vue_vue_type_script_setup_true_lang-AXBFwsc7.js";
import { _ as Ge } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const Je = { class: "shell-header w-full sticky top-0 z-[100] transition-colors duration-300" }, We = { class: "page-container shell-header__row flex items-center justify-between gap-4" }, Ye = { class: "flex items-center gap-3 min-w-0" }, Qe = ["title"], Xe = ["src", "alt"], Ze = ["src", "alt"], qe = {
  key: 2,
  class: "hidden lg:block text-[10px] font-bold uppercase tracking-[0.2em] hdr-faint border-l hdr-line pl-3"
}, et = { class: "flex items-center gap-2" }, tt = { class: "hidden md:flex items-center gap-1 flex-nowrap shrink-0" }, at = ["title", "aria-label"], st = { class: "w-52" }, nt = { class: "pop-head" }, ot = ["aria-selected", "onClick"], lt = { class: "flex items-center gap-2.5" }, it = {
  type: "button",
  class: "h-9 flex items-center gap-2 pl-2.5 pr-1.5 rounded-lg hdr-btn cursor-pointer transition-colors outline-none",
  "data-testid": "user-menu"
}, rt = { class: "hidden lg:block text-sm font-semibold hdr-ink whitespace-nowrap" }, ct = { class: "w-60" }, dt = { class: "flex items-center gap-3 px-2 py-2.5 mb-1 border-b border-border-soft" }, ut = { class: "min-w-0" }, pt = { class: "text-sm font-semibold text-foreground truncate" }, mt = { class: "text-xs text-faint truncate" }, vt = { class: "app-band" }, ht = { class: "page-container flex items-stretch gap-3" }, gt = { class: "flex items-stretch shrink-0" }, ft = ["title", "aria-label"], bt = {
  class: "text-sm font-semibold text-foreground whitespace-nowrap",
  "data-testid": "current-app"
}, _t = ["title"], yt = { class: "apps-menu" }, kt = { class: "apps-menu__all" }, wt = {
  key: 0,
  class: "px-3 py-6 text-sm text-faint text-center"
}, xt = ["data-testid"], $t = {
  key: 0,
  class: "pop-head flex items-center gap-1.5"
}, St = { class: "text-faint font-normal" }, At = { class: "apps-list" }, Ct = ["aria-current", "onClick", "onKeydown"], Lt = { class: "apps-item__icon" }, zt = { class: "apps-item__text" }, Et = { class: "apps-item__name" }, Vt = { class: "truncate" }, Mt = ["title"], Dt = {
  key: 0,
  class: "apps-item__detail"
}, Nt = ["title"], Ot = ["aria-pressed", "aria-label", "onClick"], Ut = {
  key: 0,
  class: "app-band__sep shrink-0"
}, Rt = {
  key: 1,
  class: "tabs tabs--band min-w-0 overflow-x-auto no-scrollbar",
  role: "tablist",
  "data-testid": "app-nav"
}, It = ["aria-selected", "onClick"], Tt = {
  key: 1,
  class: "badge"
}, jt = ["aria-selected", "data-testid"], Pt = {
  key: 1,
  class: "band-group__current"
}, Kt = {
  class: "min-w-56 flex flex-col",
  role: "menu"
}, Ft = ["aria-selected", "disabled", "aria-disabled", "onClick"], Bt = { class: "flex-1" }, Ht = {
  key: 2,
  class: "app-band__end",
  "data-testid": "app-band-end"
}, pe = "sapp:app-last-used", me = "sapp:recent-apps", Gt = /* @__PURE__ */ De({
  __name: "Header",
  setup(Jt) {
    const c = Ne("$superApp"), L = c, z = Te(), W = je(), E = L.$appState, j = L.$themeConfig, y = p(() => L.$config?.branding ?? null), ve = p(() => j?.state?.mode === "dark" || j?.state?.mode === "system" && window.matchMedia?.("(prefers-color-scheme: dark)").matches), he = ["brand", "gradient", "dark"], Y = p(() => ve.value || he.includes(j?.state?.header)), $ = L.$i18n, P = _(!1), ge = { vi: "Tiếng Việt", en: "English", ja: "日本語", ko: "한국어", zh: "中文", fr: "Français", de: "Deutsch" }, fe = (e) => {
      $?.setLocale(e), P.value = !1;
    }, be = p(
      () => ee.value.map((e) => ({ key: `app:${e.id}`, id: e.id, label: e.label, detail: e.detail, icon: e.icon, run: () => Me(e.path) }))
    ), Q = p(() => c?.getModuleState?.("home", { favorites: [] })), _e = p(() => Q.value?.favorites ?? []), M = (e) => _e.value.includes(e), ye = (e) => Q.value?.toggleFavorite?.(e), X = (e) => {
      const t = (e || "").trim().toLowerCase(), a = (b) => !t || `${b.label} ${b.detail || ""} ${b.id}`.toLowerCase().includes(t), o = [...be.value.filter(a)].sort((b, B) => {
        const le = Number(M(B.key)) - Number(M(b.key));
        if (le !== 0) return le;
        const ie = (S.value[B.id] ?? 0) - (S.value[b.id] ?? 0);
        return ie !== 0 ? ie : String(b.label).localeCompare(String(B.label));
      });
      return o.length ? [{ key: "apps", label: "", tiles: o }] : [];
    }, S = _((() => {
      try {
        const e = JSON.parse(localStorage.getItem(pe) || "null");
        if (e && typeof e == "object" && !Array.isArray(e))
          return Object.fromEntries(Object.entries(e).filter(([, d]) => typeof d == "number"));
        const t = JSON.parse(localStorage.getItem(me) || "[]"), a = Date.now();
        return Array.isArray(t) ? Object.fromEntries(t.filter((d) => typeof d == "string").map((d, o) => [d, a - o * 1e3])) : {};
      } catch {
        return {};
      }
    })()), ke = (e) => {
      S.value = { ...S.value, [e]: Date.now() };
      try {
        localStorage.setItem(pe, JSON.stringify(S.value)), localStorage.removeItem(me);
      } catch {
      }
    }, Z = (e) => {
      const t = S.value[e];
      return t ? L.$f?.formatRelative?.(new Date(t).toISOString()) ?? new Date(t).toLocaleString() : "";
    }, D = _(!1), we = (e) => {
      D.value = e;
    }, N = _(!1);
    _(!1);
    const v = _(null), A = _([]), O = _([]), xe = (e) => Ie(e), q = () => {
      typeof c?.getRegisteredApps == "function" && (O.value = c.getRegisteredApps());
    }, $e = ["superadmin", "admin"], Se = p(() => c?.$policy?.can?.("role", $e) ?? !1), ee = p(() => (O.value.length > 0 ? O.value : [
      { id: "workspace", name: "Workspace Hub", url: "http://localhost:4409", icon: "Globe", description: "Logic Orchestration", isEnabled: !0 },
      { id: "admin", name: "Admin Management", url: "http://localhost:4403", icon: "Shield", description: "Platform Governance", isEnabled: !0 }
    ]).filter((t) => t.isEnabled !== !1).filter((t) => (t.code ?? t.id) !== "admin" || Se.value).map((t) => ({
      id: t.id,
      label: t.name,
      // Routes follow the slug (changeable); the id stays the key.
      path: typeof c.appPath == "function" ? c.appPath(t.id, (t.code ?? t.id) === "admin" ? "apps" : "") : `/app/${t.slug || t.id}`,
      icon: xe(t.icon),
      detail: t.description || "Micro-Frontend App"
    }))), te = c.getModuleState("shell.band", { end: [] }), f = c.getModuleState("shell.nav", { moduleId: "", title: "", icon: null, items: [], active: "", navigate: null }), ae = p(() => W.path.startsWith("/app/")), x = p(() => {
      let e = ae.value ? E.current_app : null;
      e === "expose" && (e = "workspace");
      const t = e && ee.value.find((a) => a.id === e);
      return t || (e && f.title ? { id: e, label: f.title, icon: f.icon || re } : { id: "default", label: $?.t("shell.apps") ?? "Apps", icon: re });
    }), se = p(() => ae.value && f.items.length > 0);
    I(() => x.value.id, (e) => {
      e && e !== "default" && ke(e);
    }, { immediate: !0 });
    const ne = async (e) => {
      if (!e || e === "default" || typeof c.loadAppManifest != "function") return null;
      const t = await c.loadAppManifest(e);
      if (!t) return null;
      const a = String(t.version ?? "dev");
      return c.getRegisteredApps?.().find((o) => o.id === e)?.channel === "stable" ? { label: "stable", title: `stable · ${a}` } : { label: a, title: a };
    }, U = _(""), K = _("");
    I(() => [x.value.id, x.value.version], async ([e]) => {
      U.value = "", K.value = "";
      const t = await ne(e);
      x.value.id !== e || !t || (U.value = t.label, K.value = t.title);
    }, { immediate: !0 });
    const V = _({}), Ae = () => {
      for (const e of Ce()) {
        const t = `${e.id}@${e.version ?? ""}`;
        oe.has(t) || (oe.add(t), ne(e.id).then((a) => {
          a && (V.value = { ...V.value, [e.id]: a });
        }));
      }
    }, oe = /* @__PURE__ */ new Set(), Ce = () => typeof c?.getRegisteredApps == "function" ? c.getRegisteredApps() : [];
    I(D, (e) => {
      e && Ae();
    });
    const Le = p(() => {
      const e = [];
      for (const t of f.items) {
        if (!t.group) {
          e.push({ group: null, item: t });
          continue;
        }
        const a = e.find((d) => d.group === t.group);
        a ? (a.items.push(t), a.icon ??= t.groupIcon) : e.push({ group: t.group, icon: t.groupIcon, items: [t] });
      }
      return e;
    }), F = (e) => e.find((t) => f.active === t.path) ?? null, R = p({
      get: () => E.current_workspace,
      set: (e) => {
        E.current_workspace = e;
      }
    });
    p(() => A.value.find((e) => String(e.id) === String(R.value)) || A.value[0]), I(() => W.params.moduleId, (e) => {
      const t = Array.isArray(e) ? e[0] : e, a = t && (c.findAppByRoute?.(t)?.id ?? t);
      a && E.current_app !== a && (E.current_app = a);
    }, { immediate: !0 });
    const ze = async () => {
      try {
        v.value = await c.doAction("auth.me");
      } catch {
        try {
          v.value = JSON.parse(localStorage.getItem("user") || "null");
        } catch {
        }
      }
    };
    c.on?.("auth:profile-updated", (e) => {
      v.value = { ...v.value || {}, ...e };
    });
    const Ee = async () => {
      try {
        const e = await c.doAction("workspace.list");
        A.value = e || [];
        const t = A.value.find((a) => String(a.id) === String(R.value));
        (!R.value || !t) && A.value.length > 0 && (R.value = String(A.value[0].id));
      } catch {
      }
    }, Ve = async () => {
      c.emit?.(He.AUTH_LOGOUT);
      try {
        c.doAction("auth.logout"), localStorage.removeItem("accessToken"), z.push("/login").catch(() => {
          window.location.href = "/login";
        });
      } catch {
        localStorage.removeItem("accessToken"), window.location.href = "/login";
      }
    }, Me = (e) => {
      D.value = !1, z.push(e);
    };
    return Oe(() => {
      ze(), Ee(), q(), typeof c?.on == "function" && c.on("apps:updated", (e) => {
        Array.isArray(e) ? O.value = e : q();
      });
    }), (e, t) => (n(), l("header", Je, [
      s("div", We, [
        s("div", Ye, [
          s("div", {
            class: "flex items-center gap-3 cursor-pointer group/logo",
            "data-testid": "brand",
            title: y.value?.name,
            onClick: t[0] || (t[0] = (a) => i(z).push(y.value?.homePath || "/"))
          }, [
            y.value?.logo ? (n(), l(k, { key: 0 }, [
              Y.value && y.value.logoDark ? (n(), l("img", {
                key: 0,
                src: y.value.logoDark,
                alt: y.value.name,
                class: "h-7 w-auto max-w-[200px] object-contain"
              }, null, 8, Xe)) : (n(), l("span", {
                key: 1,
                class: H(["inline-flex items-center rounded-md", Y.value && "bg-white/95 px-2 py-1"])
              }, [
                s("img", {
                  src: y.value.logo,
                  alt: y.value.name,
                  class: "h-7 w-auto max-w-[200px] object-contain"
                }, null, 8, Ze)
              ], 2)),
              y.value.tagline ? (n(), l("span", qe, r(y.value.tagline), 1)) : u("", !0)
            ], 64)) : (n(), l(k, { key: 1 }, [
              t[8] || (t[8] = Ue('<div class="relative" data-v-414a7c3f><div class="w-9 h-9 bg-primary rounded-xl flex items-center justify-center relative z-10 transition-transform group-hover/logo:scale-110 shadow-xl border border-border-soft" data-v-414a7c3f><span class="text-primary-foreground font-black text-xs tracking-tighter" data-v-414a7c3f>MP</span></div></div><div class="flex flex-col text-left" data-v-414a7c3f><span class="text-[11px] font-black uppercase tracking-[0.4em] hdr-ink transition-colors leading-none mb-1" data-v-414a7c3f>Antigravity</span><span class="text-[9px] font-black uppercase tracking-[0.2em] hdr-faint" data-v-414a7c3f>Core OS v5</span></div>', 2))
            ], 64))
          ], 8, Qe)
        ]),
        s("div", et, [
          s("div", tt, [
            i($) ? (n(), m(h(e.$c("ui.dropdown")), {
              key: 0,
              modelValue: P.value,
              "onUpdate:modelValue": t[1] || (t[1] = (a) => P.value = a),
              align: "right"
            }, {
              trigger: w(() => [
                s("button", {
                  type: "button",
                  class: "h-9 px-2 rounded-lg flex items-center gap-1 whitespace-nowrap shrink-0 hdr-btn transition-colors outline-none",
                  title: e.$t("shell.language"),
                  "aria-label": e.$t("shell.language"),
                  "data-testid": "lang-switch"
                }, [
                  g(de, {
                    locale: i($).locale,
                    size: 20
                  }, null, 8, ["locale"]),
                  g(i(T), {
                    size: 13,
                    class: "hdr-faint"
                  })
                ], 8, at)
              ]),
              content: w(() => [
                s("div", st, [
                  s("div", nt, r(e.$t("shell.language")), 1),
                  (n(!0), l(k, null, C(i($).availableLocales, (a) => (n(), l("button", {
                    key: a,
                    type: "button",
                    class: "pop-item justify-between whitespace-nowrap",
                    "aria-selected": i($).locale === a,
                    onClick: (d) => fe(a)
                  }, [
                    s("span", lt, [
                      g(de, {
                        locale: a,
                        size: 22
                      }, null, 8, ["locale"]),
                      s("span", null, r(ge[a] ?? a), 1)
                    ]),
                    i($).locale === a ? (n(), m(i(ce), {
                      key: 0,
                      size: 14,
                      class: "text-primary"
                    })) : u("", !0)
                  ], 8, ot))), 128))
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])) : u("", !0)
          ]),
          t[10] || (t[10] = s("div", { class: "h-6 w-px hdr-sep mx-1 hidden md:block" }, null, -1)),
          (n(), m(h(e.$c("ui.dropdown")), {
            modelValue: N.value,
            "onUpdate:modelValue": t[4] || (t[4] = (a) => N.value = a),
            align: "right"
          }, {
            trigger: w(() => [
              s("button", it, [
                s("span", rt, r(v.value?.username || "User"), 1),
                g(ue, {
                  src: v.value?.avatar,
                  name: v.value?.username || "User",
                  size: 28,
                  rounded: "lg"
                }, null, 8, ["src", "name"]),
                g(i(T), {
                  size: 13,
                  class: "hdr-faint"
                })
              ])
            ]),
            content: w(() => [
              s("div", ct, [
                s("div", dt, [
                  g(ue, {
                    src: v.value?.avatar,
                    name: v.value?.username || "User",
                    size: 36,
                    rounded: "lg"
                  }, null, 8, ["src", "name"]),
                  s("div", ut, [
                    s("div", pt, r(v.value?.username), 1),
                    s("div", mt, r(v.value?.email || v.value?.role), 1)
                  ])
                ]),
                s("button", {
                  type: "button",
                  class: "pop-item",
                  "data-testid": "menu-profile",
                  onClick: t[2] || (t[2] = (a) => {
                    i(z).push("/account/profile"), N.value = !1;
                  })
                }, [
                  g(i(Pe), {
                    size: 15,
                    class: "text-muted-foreground"
                  }),
                  s("span", null, r(e.$t("shell.profile")), 1)
                ]),
                s("button", {
                  type: "button",
                  class: "pop-item",
                  onClick: t[3] || (t[3] = (a) => {
                    i(z).push("/system/theme"), N.value = !1;
                  })
                }, [
                  g(i(Ke), {
                    size: 15,
                    class: "text-muted-foreground"
                  }),
                  s("span", null, r(e.$t("system.themeStudio", { default: "Theme Studio" })), 1)
                ]),
                t[9] || (t[9] = s("div", { class: "pop-sep" }, null, -1)),
                s("button", {
                  type: "button",
                  class: "pop-item danger",
                  onClick: Ve
                }, [
                  g(i(Fe), { size: 15 }),
                  s("span", null, r(e.$t("shell.logout")), 1)
                ])
              ])
            ]),
            _: 1
          }, 8, ["modelValue"]))
        ])
      ]),
      s("div", vt, [
        s("div", ht, [
          s("div", gt, [
            (n(), m(h(e.$c("ui.dropdown")), {
              class: "app-switch",
              modelValue: D.value,
              "onUpdate:modelValue": t[5] || (t[5] = (a) => we(a)),
              search: "",
              "search-placeholder": e.$t("shell.searchApps")
            }, {
              trigger: w(() => [
                s("button", {
                  type: "button",
                  class: "app-chip flex items-center gap-2 transition-colors outline-none group/app",
                  title: e.$t("shell.apps"),
                  "aria-label": e.$t("shell.apps"),
                  "data-testid": "apps-switch"
                }, [
                  s("span", {
                    class: H(["w-7 h-7 rounded-md grid place-items-center shrink-0 transition-colors", x.value.id === "default" ? "bg-muted text-muted-foreground" : "bg-primary-soft text-primary"])
                  }, [
                    (n(), m(h(x.value.icon), { size: 16 }))
                  ], 2),
                  s("span", bt, r(x.value.label), 1),
                  U.value ? (n(), l("span", {
                    key: 0,
                    class: "app-version",
                    "data-testid": "current-app-version",
                    title: K.value
                  }, r(U.value), 9, _t)) : u("", !0),
                  g(i(T), {
                    size: 14,
                    class: "text-faint group-hover/app:text-foreground transition-colors"
                  })
                ], 8, ft)
              ]),
              content: w(({ query: a }) => [
                s("div", yt, [
                  s("div", kt, [
                    X(a).length ? u("", !0) : (n(), l("div", wt, r(e.$t("common.empty")), 1)),
                    (n(!0), l(k, null, C(X(a), (d) => (n(), l("section", {
                      key: d.key,
                      class: "pt-1 last:pb-3",
                      "data-testid": `apps-section-${d.key}`
                    }, [
                      d.label ? (n(), l("div", $t, [
                        G(r(d.label), 1),
                        s("span", St, r(d.tiles.length), 1)
                      ])) : u("", !0),
                      s("div", At, [
                        (n(!0), l(k, null, C(d.tiles, (o) => (n(), l("div", {
                          key: o.key,
                          role: "button",
                          tabindex: "0",
                          class: "apps-item group",
                          "aria-current": o.id === x.value.id ? "true" : void 0,
                          onClick: (b) => o.run(),
                          onKeydown: Re((b) => o.run(), ["enter"])
                        }, [
                          s("span", Lt, [
                            (n(), m(h(o.icon), {
                              size: 16,
                              "stroke-width": "1.75"
                            }))
                          ]),
                          s("span", zt, [
                            s("span", Et, [
                              s("span", Vt, r(o.label), 1),
                              V.value[o.id] ? (n(), l("span", {
                                key: 0,
                                class: "tile-version",
                                title: V.value[o.id].title,
                                "data-testid": "tile-version"
                              }, r(V.value[o.id].label), 9, Mt)) : u("", !0)
                            ]),
                            o.detail ? (n(), l("span", Dt, r(o.detail), 1)) : u("", !0)
                          ]),
                          Z(o.id) ? (n(), l("span", {
                            key: 0,
                            class: "apps-item__used",
                            title: new Date(S.value[o.id]).toLocaleString(),
                            "data-testid": "tile-last-used"
                          }, r(Z(o.id)), 9, Nt)) : u("", !0),
                          s("button", {
                            type: "button",
                            class: "icon-btn apps-item__star",
                            "aria-pressed": M(o.key),
                            "aria-label": e.$t("shell.toggleFavorite"),
                            "data-testid": "tile-star",
                            onClick: J((b) => ye(o.key), ["stop"])
                          }, [
                            g(i(Be), {
                              size: 14,
                              class: H(M(o.key) ? "fill-warning text-warning" : "text-faint")
                            }, null, 8, ["class"])
                          ], 8, Ot)
                        ], 40, Ct))), 128))
                      ])
                    ], 8, xt))), 128))
                  ])
                ])
              ]),
              _: 1
            }, 8, ["modelValue", "search-placeholder"]))
          ]),
          se.value ? (n(), l("div", Ut)) : u("", !0),
          se.value ? (n(), l("nav", Rt, [
            (n(!0), l(k, null, C(Le.value, (a) => (n(), l(k, {
              key: a.group ?? a.item.path
            }, [
              a.group === null ? (n(), l("button", {
                key: 0,
                type: "button",
                class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                role: "tab",
                "aria-selected": i(f).active === a.item.path,
                onMousedown: t[6] || (t[6] = J(() => {
                }, ["prevent"])),
                onClick: (d) => i(f).navigate?.(a.item.path)
              }, [
                a.item.icon ? (n(), m(h(a.item.icon), {
                  key: 0,
                  size: 13
                })) : u("", !0),
                G(" " + r(a.item.label) + " ", 1),
                a.item.badge !== void 0 ? (n(), l("span", Tt, r(a.item.badge), 1)) : u("", !0)
              ], 40, It)) : (n(), m(h(e.$c("ui.popover")), {
                key: 1,
                class: "band-group",
                align: "start"
              }, {
                default: w(({ close: d }) => [
                  (n(), m(h(e.$c("ui.popover-trigger")), { class: "band-group__trigger" }, {
                    default: w(() => [
                      s("button", {
                        type: "button",
                        class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                        role: "tab",
                        "aria-selected": !!F(a.items),
                        "aria-haspopup": "menu",
                        onMousedown: t[7] || (t[7] = J(() => {
                        }, ["prevent"])),
                        "data-testid": `app-nav-group-${a.group}`
                      }, [
                        a.icon ? (n(), m(h(a.icon), {
                          key: 0,
                          size: 13
                        })) : u("", !0),
                        G(" " + r(a.group) + " ", 1),
                        F(a.items) ? (n(), l("span", Pt, "· " + r(F(a.items).label), 1)) : u("", !0),
                        g(i(T), { size: 12 })
                      ], 40, jt)
                    ]),
                    _: 2
                  }, 1024)),
                  (n(), m(h(e.$c("ui.popover-content")), {
                    align: "start",
                    class: "p-1"
                  }, {
                    default: w(() => [
                      s("div", Kt, [
                        (n(!0), l(k, null, C(a.items, (o) => (n(), l("button", {
                          key: o.path,
                          type: "button",
                          class: "pop-item whitespace-nowrap",
                          role: "menuitem",
                          "aria-selected": i(f).active === o.path,
                          disabled: o.disabled,
                          "aria-disabled": o.disabled || void 0,
                          onClick: (b) => {
                            d(), i(f).navigate?.(o.path);
                          }
                        }, [
                          o.icon ? (n(), m(h(o.icon), {
                            key: 0,
                            size: 15,
                            class: "text-muted-foreground"
                          })) : u("", !0),
                          s("span", Bt, r(o.label), 1),
                          i(f).active === o.path ? (n(), m(i(ce), {
                            key: 1,
                            size: 14,
                            class: "text-primary"
                          })) : u("", !0)
                        ], 8, Ft))), 128))
                      ])
                    ]),
                    _: 2
                  }, 1024))
                ]),
                _: 2
              }, 1024))
            ], 64))), 128))
          ])) : u("", !0),
          i(te).end?.length ? (n(), l("div", Ht, [
            (n(!0), l(k, null, C(i(te).end, (a, d) => (n(), m(h(a), { key: d }))), 128))
          ])) : u("", !0)
        ])
      ])
    ]));
  }
}), sa = /* @__PURE__ */ Ge(Gt, [["__scopeId", "data-v-414a7c3f"]]);
export {
  sa as default
};
//# sourceMappingURL=Header-BF--5OU6.js.map
