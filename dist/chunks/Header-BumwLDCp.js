import { defineComponent as Ke, computed as v, ref as b, inject as Be, watch as U, onBeforeUnmount as Fe, onMounted as He, openBlock as s, createElementBlock as n, createElementVNode as l, normalizeClass as L, createBlock as p, Teleport as he, resolveDynamicComponent as h, withCtx as S, toDisplayString as d, createCommentVNode as c, Fragment as g, renderList as $, createTextVNode as X, withKeys as Ge, withModifiers as Z, createVNode as _, unref as r, createStaticVNode as Je } from "vue";
import { appIcon as We } from "../index.js";
import { useRouter as Ye, useRoute as Qe } from "vue-router";
import { LayoutGrid as me, Star as Xe, ChevronDown as F, Check as ge, User as Ze, Palette as qe, LogOut as et, PanelLeftOpen as tt, PanelLeftClose as at } from "lucide-vue-next";
import { SUPERAPP_EVENTS as st } from "@nhphero/vue-sapp/contracts";
import { _ as fe } from "./LocaleFlag.vue_vue_type_script_setup_true_lang-D2eeZNym.js";
import { _ as be } from "./UserAvatar.vue_vue_type_script_setup_true_lang-AXBFwsc7.js";
import { _ as lt } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const nt = { class: "shell-head w-full sticky top-0 z-[100]" }, ot = { class: "shell-header w-full transition-colors duration-300" }, it = ["title", "aria-label"], rt = {
  class: "text-sm font-semibold text-foreground whitespace-nowrap",
  "data-testid": "current-app"
}, dt = ["title"], ct = { class: "apps-menu" }, ut = { class: "apps-menu__all" }, pt = {
  key: 0,
  class: "px-3 py-6 text-sm text-faint text-center"
}, vt = ["data-testid"], ht = {
  key: 0,
  class: "pop-head flex items-center gap-1.5"
}, mt = { class: "text-faint font-normal" }, gt = { class: "apps-list" }, ft = ["aria-current", "onClick", "onKeydown"], bt = { class: "apps-item__icon" }, _t = { class: "apps-item__text" }, yt = { class: "apps-item__name" }, kt = { class: "truncate" }, wt = ["title"], xt = ["title"], St = ["aria-pressed", "aria-label", "onClick"], $t = { class: "flex items-center justify-center min-w-0" }, At = ["title"], Ct = ["src", "alt"], Lt = ["src", "alt"], zt = {
  key: 2,
  class: "hidden lg:block hdr-tagline border-l hdr-line"
}, Et = { class: "flex items-center gap-2 justify-self-end" }, Vt = {
  key: 0,
  class: "flex items-center gap-1",
  "data-testid": "app-band-end"
}, Mt = { class: "hidden md:flex items-center gap-1 flex-nowrap shrink-0" }, Dt = ["title", "aria-label"], Ot = { class: "w-52" }, Nt = { class: "pop-head" }, Ut = ["aria-selected", "onClick"], It = { class: "flex items-center gap-2.5" }, Rt = {
  type: "button",
  class: "h-9 flex items-center gap-2 pl-2.5 pr-1.5 rounded-lg hdr-btn cursor-pointer transition-colors outline-none",
  "data-testid": "user-menu"
}, jt = { class: "hidden lg:block text-sm font-semibold hdr-ink whitespace-nowrap" }, Tt = { class: "w-60" }, Pt = { class: "flex items-center gap-3 px-2 py-2.5 mb-1 border-b border-border-soft" }, Kt = { class: "min-w-0" }, Bt = { class: "text-sm font-semibold text-foreground truncate" }, Ft = { class: "text-xs text-faint truncate" }, Ht = { class: "page-container flex items-stretch gap-3" }, Gt = {
  key: 0,
  id: "shell-band-switch",
  class: "flex items-center shrink-0"
}, Jt = {
  key: 1,
  class: "app-band__sep",
  "aria-hidden": "true"
}, Wt = {
  key: 2,
  class: "tabs tabs--band min-w-0 overflow-x-auto no-scrollbar",
  role: "tablist",
  "data-testid": "app-nav"
}, Yt = ["aria-selected", "onClick"], Qt = {
  key: 1,
  class: "badge"
}, Xt = ["aria-selected", "data-testid"], Zt = {
  key: 1,
  class: "band-group__current"
}, qt = {
  class: "min-w-56 flex flex-col",
  role: "menu"
}, ea = ["aria-selected", "disabled", "aria-disabled", "onClick"], ta = { class: "flex-1" }, aa = {
  key: 3,
  class: "app-band__end",
  "data-testid": "app-band-end"
}, sa = ["aria-current", "title", "onClick"], la = {
  key: 1,
  class: "side-initial"
}, na = { class: "side-label" }, oa = {
  key: 2,
  class: "badge side-label"
}, ia = ["data-testid"], ra = { class: "nav-group side-label" }, da = ["disabled", "aria-disabled", "aria-current", "title", "onClick"], ca = {
  key: 1,
  class: "side-initial"
}, ua = { class: "side-label" }, pa = ["aria-pressed", "title"], va = {
  key: 0,
  class: "side-label"
}, _e = "sapp:sidebar-collapsed", ye = "sapp:app-last-used", ke = "sapp:recent-apps", ha = /* @__PURE__ */ Ke({
  __name: "Header",
  props: {
    layout: { default: "band" }
  },
  setup(we) {
    const q = we, w = v(() => q.layout === "sidebar"), A = v(() => q.layout === "classic"), y = b((() => {
      try {
        return localStorage.getItem(_e) === "true";
      } catch {
        return !1;
      }
    })()), xe = () => {
      y.value = !y.value;
      try {
        localStorage.setItem(_e, String(y.value));
      } catch {
      }
    }, u = Be("$superApp"), ee = u.getModuleState("shell.layout", { sidebar: !1 });
    U(w, (e) => {
      ee.sidebar = e;
    }, { immediate: !0 }), Fe(() => {
      w.value && (ee.sidebar = !1);
    });
    const M = u, D = Ye(), te = Qe(), O = M.$appState, H = M.$themeConfig, x = v(() => M.$config?.branding ?? null), Se = v(() => H?.state?.mode === "dark" || H?.state?.mode === "system" && window.matchMedia?.("(prefers-color-scheme: dark)").matches), $e = ["brand", "gradient", "dark"], ae = v(() => Se.value || $e.includes(H?.state?.header)), z = M.$i18n, G = b(!1), Ae = { vi: "Tiếng Việt", en: "English", ja: "日本語", ko: "한국어", zh: "中文", fr: "Français", de: "Deutsch" }, Ce = (e) => {
      z?.setLocale(e), G.value = !1;
    }, Le = v(
      () => ie.value.map((e) => ({ key: `app:${e.id}`, id: e.id, label: e.label, detail: e.detail, icon: e.icon, run: () => Pe(e.path) }))
    ), se = v(() => u?.getModuleState?.("home", { favorites: [] })), ze = v(() => se.value?.favorites ?? []), I = (e) => ze.value.includes(e), Ee = (e) => se.value?.toggleFavorite?.(e), le = (e) => {
      const a = (e || "").trim().toLowerCase(), t = (k) => !a || `${k.label} ${k.detail || ""} ${k.id}`.toLowerCase().includes(a), i = [...Le.value.filter(t)].sort((k, Q) => {
        const pe = Number(I(Q.key)) - Number(I(k.key));
        if (pe !== 0) return pe;
        const ve = (E.value[Q.id] ?? 0) - (E.value[k.id] ?? 0);
        return ve !== 0 ? ve : String(k.label).localeCompare(String(Q.label));
      });
      return i.length ? [{ key: "apps", label: "", tiles: i }] : [];
    }, E = b((() => {
      try {
        const e = JSON.parse(localStorage.getItem(ye) || "null");
        if (e && typeof e == "object" && !Array.isArray(e))
          return Object.fromEntries(Object.entries(e).filter(([, o]) => typeof o == "number"));
        const a = JSON.parse(localStorage.getItem(ke) || "[]"), t = Date.now();
        return Array.isArray(a) ? Object.fromEntries(a.filter((o) => typeof o == "string").map((o, i) => [o, t - i * 1e3])) : {};
      } catch {
        return {};
      }
    })()), Ve = (e) => {
      E.value = { ...E.value, [e]: Date.now() };
      try {
        localStorage.setItem(ye, JSON.stringify(E.value)), localStorage.removeItem(ke);
      } catch {
      }
    }, ne = (e) => {
      const a = E.value[e];
      return a ? M.$f?.formatRelative?.(new Date(a).toISOString()) ?? new Date(a).toLocaleString() : "";
    }, R = b(!1), Me = (e) => {
      R.value = e;
    }, j = b(!1);
    b(!1);
    const f = b(null), V = b([]), T = b([]), De = (e) => We(e), oe = () => {
      typeof u?.getRegisteredApps == "function" && (T.value = u.getRegisteredApps());
    }, Oe = ["superadmin", "admin"], Ne = v(() => u?.$policy?.can?.("role", Oe) ?? !1), ie = v(() => (T.value.length > 0 ? T.value : [
      { id: "workspace", name: "Workspace Hub", url: "http://localhost:4409", icon: "Globe", description: "Logic Orchestration", isEnabled: !0 },
      { id: "admin", name: "Admin Management", url: "http://localhost:4403", icon: "Shield", description: "Platform Governance", isEnabled: !0 }
    ]).filter((a) => a.isEnabled !== !1).filter((a) => (a.code ?? a.id) !== "admin" || Ne.value).map((a) => ({
      id: a.id,
      label: a.name,
      // Routes follow the slug (changeable); the id stays the key.
      path: typeof u.appPath == "function" ? u.appPath(a.id, (a.code ?? a.id) === "admin" ? "apps" : "") : `/app/${a.slug || a.id}`,
      icon: De(a.icon),
      detail: a.description || "Micro-Frontend App"
    }))), P = u.getModuleState("shell.band", { end: [] }), m = u.getModuleState("shell.nav", { moduleId: "", title: "", icon: null, items: [], active: "", navigate: null }), re = v(() => te.path.startsWith("/app/")), C = v(() => {
      let e = re.value ? O.current_app : null;
      e === "expose" && (e = "workspace");
      const a = e && ie.value.find((t) => t.id === e);
      return a || (e && m.title ? { id: e, label: m.title, icon: m.icon || me } : { id: "default", label: z?.t("shell.apps") ?? "Apps", icon: me });
    }), J = v(() => re.value && m.items.length > 0);
    U(() => C.value.id, (e) => {
      e && e !== "default" && Ve(e);
    }, { immediate: !0 });
    const de = async (e) => {
      if (!e || e === "default" || typeof u.loadAppManifest != "function") return null;
      const a = await u.loadAppManifest(e);
      if (!a) return null;
      const t = String(a.version ?? "dev");
      return u.getRegisteredApps?.().find((i) => i.id === e)?.channel === "stable" ? { label: "stable", title: `stable · ${t}` } : { label: t, title: t };
    }, K = b(""), W = b("");
    U(() => [C.value.id, C.value.version], async ([e]) => {
      K.value = "", W.value = "";
      const a = await de(e);
      C.value.id !== e || !a || (K.value = a.label, W.value = a.title);
    }, { immediate: !0 });
    const N = b({}), Ue = () => {
      for (const e of Ie()) {
        const a = `${e.id}@${e.version ?? ""}`;
        ce.has(a) || (ce.add(a), de(e.id).then((t) => {
          t && (N.value = { ...N.value, [e.id]: t });
        }));
      }
    }, ce = /* @__PURE__ */ new Set(), Ie = () => typeof u?.getRegisteredApps == "function" ? u.getRegisteredApps() : [];
    U(R, (e) => {
      e && Ue();
    });
    const ue = v(() => {
      const e = [];
      for (const a of m.items) {
        if (!a.group) {
          e.push({ group: null, item: a });
          continue;
        }
        const t = e.find((o) => o.group === a.group);
        t ? (t.items.push(a), t.icon ??= a.groupIcon) : e.push({ group: a.group, icon: a.groupIcon, items: [a] });
      }
      return e;
    }), Y = (e) => e.find((a) => m.active === a.path) ?? null, B = v({
      get: () => O.current_workspace,
      set: (e) => {
        O.current_workspace = e;
      }
    });
    v(() => V.value.find((e) => String(e.id) === String(B.value)) || V.value[0]), U(() => te.params.moduleId, (e) => {
      const a = Array.isArray(e) ? e[0] : e, t = a && (u.findAppByRoute?.(a)?.id ?? a);
      t && O.current_app !== t && (O.current_app = t);
    }, { immediate: !0 });
    const Re = async () => {
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
    const je = async () => {
      try {
        const e = await u.doAction("workspace.list");
        V.value = e || [];
        const a = V.value.find((t) => String(t.id) === String(B.value));
        (!B.value || !a) && V.value.length > 0 && (B.value = String(V.value[0].id));
      } catch {
      }
    }, Te = async () => {
      u.emit?.(st.AUTH_LOGOUT);
      try {
        u.doAction("auth.logout"), localStorage.removeItem("accessToken"), D.push("/login").catch(() => {
          window.location.href = "/login";
        });
      } catch {
        localStorage.removeItem("accessToken"), window.location.href = "/login";
      }
    }, Pe = (e) => {
      R.value = !1, D.push(e);
    };
    return He(() => {
      Re(), je(), oe(), typeof u?.on == "function" && u.on("apps:updated", (e) => {
        Array.isArray(e) ? T.value = e : oe();
      });
    }), (e, a) => (s(), n("div", nt, [
      l("header", ot, [
        l("div", {
          class: L(["shell-header__row shell-header__wide", [w.value && "is-sidebar", A.value && "is-classic"]])
        }, [
          l("div", {
            class: L(["flex items-center min-w-0 justify-self-start", (w.value || A.value) && "hidden"])
          }, [
            (s(), p(he, {
              defer: "",
              to: w.value ? "#shell-sidebar" : "#shell-band-switch",
              disabled: !w.value && !A.value
            }, [
              l("div", {
                class: L(["flex items-center shrink-0 min-w-0", [w.value && ["side-switch", y.value && "is-collapsed"], A.value && "band-switch"]])
              }, [
                (s(), p(h(e.$c("ui.dropdown")), {
                  class: "app-switch",
                  modelValue: R.value,
                  "onUpdate:modelValue": a[0] || (a[0] = (t) => Me(t)),
                  search: "",
                  "search-placeholder": e.$t("shell.searchApps")
                }, {
                  trigger: S(() => [
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
                        (s(), p(h(C.value.icon), { size: 16 }))
                      ], 2),
                      l("span", rt, d(C.value.label), 1),
                      K.value ? (s(), n("span", {
                        key: 0,
                        class: "app-version",
                        "data-testid": "current-app-version",
                        title: W.value
                      }, d(K.value), 9, dt)) : c("", !0),
                      _(r(F), {
                        size: 14,
                        class: "text-faint group-hover/app:text-foreground transition-colors"
                      })
                    ], 8, it)
                  ]),
                  content: S(({ query: t }) => [
                    l("div", ct, [
                      l("div", ut, [
                        le(t).length ? c("", !0) : (s(), n("div", pt, d(e.$t("common.empty")), 1)),
                        (s(!0), n(g, null, $(le(t), (o) => (s(), n("section", {
                          key: o.key,
                          class: "pt-1 last:pb-3",
                          "data-testid": `apps-section-${o.key}`
                        }, [
                          o.label ? (s(), n("div", ht, [
                            X(d(o.label), 1),
                            l("span", mt, d(o.tiles.length), 1)
                          ])) : c("", !0),
                          l("div", gt, [
                            (s(!0), n(g, null, $(o.tiles, (i) => (s(), n("div", {
                              key: i.key,
                              role: "button",
                              tabindex: "0",
                              class: "apps-item group",
                              "aria-current": i.id === C.value.id ? "true" : void 0,
                              onClick: (k) => i.run(),
                              onKeydown: Ge((k) => i.run(), ["enter"])
                            }, [
                              l("span", bt, [
                                (s(), p(h(i.icon), {
                                  size: 16,
                                  "stroke-width": "1.75"
                                }))
                              ]),
                              l("span", _t, [
                                l("span", yt, [
                                  l("span", kt, d(i.label), 1),
                                  N.value[i.id] ? (s(), n("span", {
                                    key: 0,
                                    class: "tile-version",
                                    title: N.value[i.id].title,
                                    "data-testid": "tile-version"
                                  }, d(N.value[i.id].label), 9, wt)) : c("", !0)
                                ])
                              ]),
                              ne(i.id) ? (s(), n("span", {
                                key: 0,
                                class: "apps-item__used",
                                title: new Date(E.value[i.id]).toLocaleString(),
                                "data-testid": "tile-last-used"
                              }, d(ne(i.id)), 9, xt)) : c("", !0),
                              l("button", {
                                type: "button",
                                class: "icon-btn apps-item__star",
                                "aria-pressed": I(i.key),
                                "aria-label": e.$t("shell.toggleFavorite"),
                                "data-testid": "tile-star",
                                onClick: Z((k) => Ee(i.key), ["stop"])
                              }, [
                                _(r(Xe), {
                                  size: 14,
                                  class: L(I(i.key) ? "fill-warning text-warning" : "text-faint")
                                }, null, 8, ["class"])
                              ], 8, St)
                            ], 40, ft))), 128))
                          ])
                        ], 8, vt))), 128))
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
              title: x.value?.name,
              onClick: a[1] || (a[1] = (t) => r(D).push(x.value?.homePath || "/"))
            }, [
              x.value?.logo ? (s(), n(g, { key: 0 }, [
                ae.value && x.value.logoDark ? (s(), n("img", {
                  key: 0,
                  src: x.value.logoDark,
                  alt: x.value.name,
                  class: "h-7 w-auto max-w-[200px] object-contain"
                }, null, 8, Ct)) : (s(), n("span", {
                  key: 1,
                  class: L(["inline-flex items-center rounded-md", ae.value && "bg-white/95 px-2 py-1"])
                }, [
                  l("img", {
                    src: x.value.logo,
                    alt: x.value.name,
                    class: "h-7 w-auto max-w-[200px] object-contain"
                  }, null, 8, Lt)
                ], 2)),
                A.value && x.value.tagline ? (s(), n("span", zt, d(x.value.tagline), 1)) : c("", !0)
              ], 64)) : (s(), n(g, { key: 1 }, [
                a[8] || (a[8] = Je('<div class="relative" data-v-cbf41dd4><div class="w-9 h-9 bg-primary rounded-xl flex items-center justify-center relative z-10 transition-transform group-hover/logo:scale-110 shadow-xl border border-border-soft" data-v-cbf41dd4><span class="text-primary-foreground font-black text-xs tracking-tighter" data-v-cbf41dd4>MP</span></div></div><div class="flex flex-col text-left" data-v-cbf41dd4><span class="text-[11px] font-black uppercase tracking-[0.4em] hdr-ink transition-colors leading-none mb-1" data-v-cbf41dd4>Antigravity</span><span class="text-[9px] font-black uppercase tracking-[0.2em] hdr-faint" data-v-cbf41dd4>Core OS v5</span></div>', 2))
              ], 64))
            ], 8, At)
          ]),
          l("div", Et, [
            w.value && r(P).end?.length ? (s(), n("div", Vt, [
              (s(!0), n(g, null, $(r(P).end, (t, o) => (s(), p(h(t), { key: o }))), 128))
            ])) : c("", !0),
            l("div", Mt, [
              r(z) ? (s(), p(h(e.$c("ui.dropdown")), {
                key: 0,
                modelValue: G.value,
                "onUpdate:modelValue": a[2] || (a[2] = (t) => G.value = t),
                align: "right"
              }, {
                trigger: S(() => [
                  l("button", {
                    type: "button",
                    class: "h-9 px-2 rounded-lg flex items-center gap-1 whitespace-nowrap shrink-0 hdr-btn transition-colors outline-none",
                    title: e.$t("shell.language"),
                    "aria-label": e.$t("shell.language"),
                    "data-testid": "lang-switch"
                  }, [
                    _(fe, {
                      locale: r(z).locale,
                      size: 20
                    }, null, 8, ["locale"]),
                    _(r(F), {
                      size: 13,
                      class: "hdr-faint"
                    })
                  ], 8, Dt)
                ]),
                content: S(() => [
                  l("div", Ot, [
                    l("div", Nt, d(e.$t("shell.language")), 1),
                    (s(!0), n(g, null, $(r(z).availableLocales, (t) => (s(), n("button", {
                      key: t,
                      type: "button",
                      class: "pop-item justify-between whitespace-nowrap",
                      "aria-selected": r(z).locale === t,
                      onClick: (o) => Ce(t)
                    }, [
                      l("span", It, [
                        _(fe, {
                          locale: t,
                          size: 22
                        }, null, 8, ["locale"]),
                        l("span", null, d(Ae[t] ?? t), 1)
                      ]),
                      r(z).locale === t ? (s(), p(r(ge), {
                        key: 0,
                        size: 14,
                        class: "text-primary"
                      })) : c("", !0)
                    ], 8, Ut))), 128))
                  ])
                ]),
                _: 1
              }, 8, ["modelValue"])) : c("", !0)
            ]),
            a[10] || (a[10] = l("div", { class: "h-6 w-px hdr-sep mx-1 hidden md:block" }, null, -1)),
            (s(), p(h(e.$c("ui.dropdown")), {
              modelValue: j.value,
              "onUpdate:modelValue": a[5] || (a[5] = (t) => j.value = t),
              align: "right"
            }, {
              trigger: S(() => [
                l("button", Rt, [
                  l("span", jt, d(f.value?.username || "User"), 1),
                  _(be, {
                    src: f.value?.avatar,
                    name: f.value?.username || "User",
                    size: 28,
                    rounded: "lg"
                  }, null, 8, ["src", "name"]),
                  _(r(F), {
                    size: 13,
                    class: "hdr-faint"
                  })
                ])
              ]),
              content: S(() => [
                l("div", Tt, [
                  l("div", Pt, [
                    _(be, {
                      src: f.value?.avatar,
                      name: f.value?.username || "User",
                      size: 36,
                      rounded: "lg"
                    }, null, 8, ["src", "name"]),
                    l("div", Kt, [
                      l("div", Bt, d(f.value?.username), 1),
                      l("div", Ft, d(f.value?.email || f.value?.role), 1)
                    ])
                  ]),
                  l("button", {
                    type: "button",
                    class: "pop-item",
                    "data-testid": "menu-profile",
                    onClick: a[3] || (a[3] = (t) => {
                      r(D).push("/account/profile"), j.value = !1;
                    })
                  }, [
                    _(r(Ze), {
                      size: 15,
                      class: "text-muted-foreground"
                    }),
                    l("span", null, d(e.$t("shell.profile")), 1)
                  ]),
                  l("button", {
                    type: "button",
                    class: "pop-item",
                    onClick: a[4] || (a[4] = (t) => {
                      r(D).push("/system/theme"), j.value = !1;
                    })
                  }, [
                    _(r(qe), {
                      size: 15,
                      class: "text-muted-foreground"
                    }),
                    l("span", null, d(e.$t("system.themeStudio", { default: "Theme Studio" })), 1)
                  ]),
                  a[9] || (a[9] = l("div", { class: "pop-sep" }, null, -1)),
                  l("button", {
                    type: "button",
                    class: "pop-item danger",
                    onClick: Te
                  }, [
                    _(r(et), { size: 15 }),
                    l("span", null, d(e.$t("shell.logout")), 1)
                  ])
                ])
              ]),
              _: 1
            }, 8, ["modelValue"]))
          ])
        ], 2)
      ]),
      w.value ? c("", !0) : (s(), n("div", {
        key: 0,
        class: L(["app-band", A.value && "app-band--classic"])
      }, [
        l("div", Ht, [
          A.value ? (s(), n("div", Gt)) : c("", !0),
          A.value && J.value ? (s(), n("div", Jt)) : c("", !0),
          J.value ? (s(), n("nav", Wt, [
            (s(!0), n(g, null, $(ue.value, (t) => (s(), n(g, {
              key: t.group ?? t.item.path
            }, [
              t.group === null ? (s(), n("button", {
                key: 0,
                type: "button",
                class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                role: "tab",
                "aria-selected": r(m).active === t.item.path,
                onMousedown: a[6] || (a[6] = Z(() => {
                }, ["prevent"])),
                onClick: (o) => r(m).navigate?.(t.item.path)
              }, [
                t.item.icon ? (s(), p(h(t.item.icon), {
                  key: 0,
                  size: 13
                })) : c("", !0),
                X(" " + d(t.item.label) + " ", 1),
                t.item.badge !== void 0 ? (s(), n("span", Qt, d(t.item.badge), 1)) : c("", !0)
              ], 40, Yt)) : (s(), p(h(e.$c("ui.popover")), {
                key: 1,
                class: "band-group",
                align: "start"
              }, {
                default: S(({ close: o }) => [
                  (s(), p(h(e.$c("ui.popover-trigger")), { class: "band-group__trigger" }, {
                    default: S(() => [
                      l("button", {
                        type: "button",
                        class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                        role: "tab",
                        "aria-selected": !!Y(t.items),
                        "aria-haspopup": "menu",
                        onMousedown: a[7] || (a[7] = Z(() => {
                        }, ["prevent"])),
                        "data-testid": `app-nav-group-${t.group}`
                      }, [
                        t.icon ? (s(), p(h(t.icon), {
                          key: 0,
                          size: 13
                        })) : c("", !0),
                        X(" " + d(t.group) + " ", 1),
                        Y(t.items) ? (s(), n("span", Zt, "· " + d(Y(t.items).label), 1)) : c("", !0),
                        _(r(F), { size: 12 })
                      ], 40, Xt)
                    ]),
                    _: 2
                  }, 1024)),
                  (s(), p(h(e.$c("ui.popover-content")), {
                    align: "start",
                    class: "p-1"
                  }, {
                    default: S(() => [
                      l("div", qt, [
                        (s(!0), n(g, null, $(t.items, (i) => (s(), n("button", {
                          key: i.path,
                          type: "button",
                          class: "pop-item whitespace-nowrap",
                          role: "menuitem",
                          "aria-selected": r(m).active === i.path,
                          disabled: i.disabled,
                          "aria-disabled": i.disabled || void 0,
                          onClick: (k) => {
                            o(), r(m).navigate?.(i.path);
                          }
                        }, [
                          i.icon ? (s(), p(h(i.icon), {
                            key: 0,
                            size: 15,
                            class: "text-muted-foreground"
                          })) : c("", !0),
                          l("span", ta, d(i.label), 1),
                          r(m).active === i.path ? (s(), p(r(ge), {
                            key: 1,
                            size: 14,
                            class: "text-primary"
                          })) : c("", !0)
                        ], 8, ea))), 128))
                      ])
                    ]),
                    _: 2
                  }, 1024))
                ]),
                _: 2
              }, 1024))
            ], 64))), 128))
          ])) : c("", !0),
          r(P).end?.length ? (s(), n("div", aa, [
            (s(!0), n(g, null, $(r(P).end, (t, o) => (s(), p(h(t), { key: o }))), 128))
          ])) : c("", !0)
        ])
      ], 2)),
      w.value ? (s(), p(he, {
        key: 1,
        defer: "",
        to: "#shell-sidebar"
      }, [
        l("nav", {
          class: L(["side-nav", y.value && "is-collapsed"]),
          "data-testid": "app-nav"
        }, [
          J.value ? (s(!0), n(g, { key: 0 }, $(ue.value, (t) => (s(), n(g, {
            key: t.group ?? t.item.path
          }, [
            t.group === null ? (s(), n("button", {
              key: 0,
              type: "button",
              class: "nav-item side-item",
              "aria-current": r(m).active === t.item.path ? "page" : void 0,
              title: y.value ? t.item.label : void 0,
              onClick: (o) => r(m).navigate?.(t.item.path)
            }, [
              t.item.icon ? (s(), p(h(t.item.icon), { key: 0 })) : (s(), n("span", la, d(String(t.item.label).charAt(0)), 1)),
              l("span", na, d(t.item.label), 1),
              t.item.badge !== void 0 ? (s(), n("span", oa, d(t.item.badge), 1)) : c("", !0)
            ], 8, sa)) : (s(), n("div", {
              key: 1,
              class: "side-group",
              "data-testid": `app-nav-group-${t.group}`
            }, [
              l("div", ra, d(t.group), 1),
              (s(!0), n(g, null, $(t.items, (o) => (s(), n("button", {
                key: o.path,
                type: "button",
                class: "nav-item side-item",
                disabled: o.disabled,
                "aria-disabled": o.disabled || void 0,
                "aria-current": r(m).active === o.path ? "page" : void 0,
                title: y.value ? o.label : void 0,
                onClick: (i) => r(m).navigate?.(o.path)
              }, [
                o.icon ? (s(), p(h(o.icon), { key: 0 })) : (s(), n("span", ca, d(String(o.label).charAt(0)), 1)),
                l("span", ua, d(o.label), 1)
              ], 8, da))), 128))
            ], 8, ia))
          ], 64))), 128)) : c("", !0)
        ], 2),
        l("button", {
          type: "button",
          class: "side-collapse",
          "aria-pressed": y.value,
          title: y.value ? "Expand the sidebar" : "Collapse the sidebar",
          "data-testid": "sidebar-collapse",
          onClick: xe
        }, [
          (s(), p(h(y.value ? r(tt) : r(at)), { size: 16 })),
          y.value ? c("", !0) : (s(), n("span", va, "Collapse"))
        ], 8, pa)
      ])) : c("", !0)
    ]));
  }
}), $a = /* @__PURE__ */ lt(ha, [["__scopeId", "data-v-cbf41dd4"]]);
export {
  $a as default
};
//# sourceMappingURL=Header-BumwLDCp.js.map
