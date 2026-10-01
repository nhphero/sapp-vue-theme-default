import { defineComponent as ye, inject as _e, computed as p, ref as k, watch as te, onMounted as ke, openBlock as o, createElementBlock as l, createElementVNode as s, unref as i, Fragment as x, normalizeClass as D, toDisplayString as r, createCommentVNode as u, createStaticVNode as xe, createBlock as m, resolveDynamicComponent as f, withCtx as y, renderList as M, createVNode as v, createTextVNode as R, withKeys as we, withModifiers as G } from "vue";
import { useRouter as $e, useRoute as Ae } from "vue-router";
import { LayoutGrid as V, Check as ae, ChevronDown as O, User as Se, Palette as Ce, LogOut as ze, Star as Le, Database as Me, AppWindow as Ve, Terminal as Ee, Cpu as Ie, Box as Ne, Zap as Ue, Layers as Te, Globe as De, Shield as Oe } from "lucide-vue-next";
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
}, at = { class: "hidden lg:block text-sm font-semibold text-foreground whitespace-nowrap" }, st = { class: "w-60" }, ot = { class: "flex items-center gap-3 px-2 py-2.5 mb-1 border-b border-border-soft" }, nt = { class: "min-w-0" }, lt = { class: "text-sm font-semibold text-foreground truncate" }, it = { class: "text-xs text-faint truncate" }, rt = { class: "app-band" }, ct = { class: "page-container flex items-stretch gap-3" }, dt = { class: "flex items-stretch shrink-0" }, ut = ["title", "aria-label"], pt = {
  class: "text-sm font-semibold text-foreground whitespace-nowrap",
  "data-testid": "current-app"
}, mt = ["title"], gt = { class: "w-[720px] max-w-[calc(100vw-32px)]" }, vt = {
  key: 0,
  class: "px-3 py-6 text-sm text-faint text-center"
}, ht = ["data-testid"], ft = {
  key: 0,
  class: "pop-head flex items-center gap-1.5"
}, bt = { class: "text-faint font-normal" }, yt = { class: "px-2 pb-1 grid gap-1 sm:grid-cols-2 lg:grid-cols-3" }, _t = ["onClick", "onKeydown", "aria-current"], kt = { class: "min-w-0 flex-1" }, xt = { class: "block text-sm font-semibold truncate group-hover:text-primary transition-colors" }, wt = { class: "block text-xs text-muted-foreground truncate" }, $t = ["aria-pressed", "aria-label", "onClick"], At = {
  key: 0,
  class: "app-band__sep self-center h-5 w-px shrink-0"
}, St = {
  key: 1,
  class: "tabs tabs--band min-w-0 overflow-x-auto no-scrollbar",
  role: "tablist",
  "data-testid": "app-nav"
}, Ct = ["aria-selected", "onClick"], zt = {
  key: 1,
  class: "badge"
}, Lt = ["aria-selected", "data-testid"], Mt = {
  key: 1,
  class: "band-group__current"
}, Vt = {
  class: "min-w-56 flex flex-col",
  role: "menu"
}, Et = ["aria-selected", "disabled", "aria-disabled", "onClick"], It = { class: "flex-1" }, Nt = /* @__PURE__ */ ye({
  __name: "Header",
  setup(Ut) {
    const c = _e("$superApp"), E = c, C = $e(), B = Ae(), z = E.$appState, W = E.$themeConfig, b = p(() => E.$config?.branding ?? null), H = p(() => W?.state?.mode === "dark" || W?.state?.mode === "system" && window.matchMedia?.("(prefers-color-scheme: dark)").matches), w = E.$i18n, F = k(!1), ne = { vi: "Tiếng Việt", en: "English", ja: "日本語", ko: "한국어", zh: "中文", fr: "Français", de: "Deutsch" }, le = (e) => {
      w?.setLocale(e), F.value = !1;
    }, ie = p(
      () => Y.value.map((e) => ({ key: `app:${e.id}`, id: e.id, label: e.label, detail: e.detail, icon: e.icon, run: () => be(e.path) }))
    ), K = p(() => c?.getModuleState?.("home", { favorites: [] })), J = p(() => K.value?.favorites ?? []), X = (e) => J.value.includes(e), re = (e) => K.value?.toggleFavorite?.(e), Z = (e) => {
      const t = (e || "").trim().toLowerCase(), a = ($) => !t || `${$.label} ${$.detail || ""} ${$.id}`.toLowerCase().includes(t), d = ie.value.filter(a), n = ($) => {
        const T = J.value.indexOf($.key);
        return T === -1 ? Number.MAX_SAFE_INTEGER : T;
      }, S = [...d].sort(($, T) => n($) - n(T));
      return S.length ? [{ key: "apps", label: "", tiles: S }] : [];
    }, j = k(!1), ce = (e) => {
      j.value = e;
    }, I = k(!1);
    k(!1);
    const g = k(null), A = k([]), N = k([]), de = {
      Shield: Oe,
      Globe: De,
      Layers: Te,
      LayoutGrid: V,
      Zap: Ue,
      Box: Ne,
      Cpu: Ie,
      Terminal: Ee,
      AppWindow: Ve,
      Database: Me
    }, ue = (e) => e ? de[e] || V : V, Q = () => {
      typeof c?.getRegisteredApps == "function" && (N.value = c.getRegisteredApps());
    }, pe = ["superadmin", "admin"], me = p(() => c?.$policy?.can?.("role", pe) ?? !1), Y = p(() => (N.value.length > 0 ? N.value : [
      { id: "workspace", name: "Workspace Hub", url: "http://localhost:4409", icon: "Globe", description: "Logic Orchestration", isEnabled: !0 },
      { id: "admin", name: "Admin Management", url: "http://localhost:4403", icon: "Shield", description: "Platform Governance", isEnabled: !0 }
    ]).filter((t) => t.isEnabled !== !1).filter((t) => t.id !== "admin" || me.value).map((t) => ({
      id: t.id,
      label: t.name,
      path: t.id === "admin" ? "/app/admin/apps" : `/app/${t.id}`,
      icon: ue(t.icon),
      detail: t.description || "Micro-Frontend App"
    }))), h = c.getModuleState("shell.nav", { moduleId: "", title: "", icon: null, items: [], active: "", navigate: null }), q = p(() => B.path.startsWith("/app/")), _ = p(() => {
      let e = q.value ? z.current_app : null;
      e === "expose" && (e = "workspace");
      const t = e && Y.value.find((a) => a.id === e);
      return t || (e && h.title ? { id: e, label: h.title, icon: h.icon || V } : { id: "default", label: w?.t("shell.apps") ?? "Apps", icon: V });
    }), ee = p(() => q.value && h.items.length > 0), L = k("");
    te(() => [_.value.id, _.value.version], async ([e]) => {
      if (L.value = "", !e || e === "default" || typeof c.loadAppManifest != "function") return;
      const t = await c.loadAppManifest(e);
      _.value.id === e && (L.value = t ? String(t.version ?? "dev") : "");
    }, { immediate: !0 });
    const ge = p(() => {
      const e = [];
      for (const t of h.items) {
        if (!t.group) {
          e.push({ group: null, item: t });
          continue;
        }
        const a = e.find((d) => d.group === t.group);
        a ? (a.items.push(t), a.icon ??= t.groupIcon) : e.push({ group: t.group, icon: t.groupIcon, items: [t] });
      }
      return e;
    }), P = (e) => e.find((t) => h.active === t.path) ?? null, U = p({
      get: () => z.current_workspace,
      set: (e) => {
        z.current_workspace = e;
      }
    });
    p(() => A.value.find((e) => String(e.id) === String(U.value)) || A.value[0]), te(() => B.params.moduleId, (e) => {
      const t = Array.isArray(e) ? e[0] : e;
      t && z.current_app !== t && (z.current_app = t);
    }, { immediate: !0 });
    const ve = async () => {
      try {
        g.value = await c.doAction("auth.me");
      } catch {
        try {
          g.value = JSON.parse(localStorage.getItem("user") || "null");
        } catch {
        }
      }
    };
    c.on?.("auth:profile-updated", (e) => {
      g.value = { ...g.value || {}, ...e };
    });
    const he = async () => {
      try {
        const e = await c.doAction("workspace.list");
        A.value = e || [];
        const t = A.value.find((a) => String(a.id) === String(U.value));
        (!U.value || !t) && A.value.length > 0 && (U.value = String(A.value[0].id));
      } catch {
      }
    }, fe = async () => {
      c.emit?.(Fe.AUTH_LOGOUT);
      try {
        c.doAction("auth.logout"), localStorage.removeItem("accessToken"), C.push("/login").catch(() => {
          window.location.href = "/login";
        });
      } catch {
        localStorage.removeItem("accessToken"), window.location.href = "/login";
      }
    }, be = (e) => {
      j.value = !1, C.push(e);
    };
    return ke(() => {
      ve(), he(), Q(), typeof c?.on == "function" && c.on("apps:updated", (e) => {
        Array.isArray(e) ? N.value = e : Q();
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
            b.value?.logo ? (o(), l(x, { key: 0 }, [
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
              b.value.tagline ? (o(), l("span", Ke, r(b.value.tagline), 1)) : u("", !0)
            ], 64)) : (o(), l(x, { key: 1 }, [
              t[8] || (t[8] = xe('<div class="relative" data-v-ca8584c6><div class="w-9 h-9 bg-primary rounded-xl flex items-center justify-center relative z-10 transition-transform group-hover/logo:scale-110 shadow-xl border border-border-soft" data-v-ca8584c6><span class="text-primary-foreground font-black text-xs tracking-tighter" data-v-ca8584c6>MP</span></div></div><div class="flex flex-col text-left" data-v-ca8584c6><span class="text-[11px] font-black uppercase tracking-[0.4em] text-foreground group-hover/logo:text-primary transition-colors leading-none mb-1" data-v-ca8584c6>Antigravity</span><span class="text-[9px] font-black uppercase tracking-[0.2em] text-faint" data-v-ca8584c6>Core OS v5</span></div>', 2))
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
              trigger: y(() => [
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
              content: y(() => [
                s("div", Qe, [
                  s("div", Ye, r(e.$t("shell.language")), 1),
                  (o(!0), l(x, null, M(i(w).availableLocales, (a) => (o(), l("button", {
                    key: a,
                    type: "button",
                    class: "pop-item justify-between whitespace-nowrap",
                    "aria-selected": i(w).locale === a,
                    onClick: (d) => le(a)
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
                    })) : u("", !0)
                  ], 8, qe))), 128))
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])) : u("", !0)
          ]),
          t[10] || (t[10] = s("div", { class: "h-6 w-px bg-border-soft mx-1 hidden md:block" }, null, -1)),
          (o(), m(f(e.$c("ui.dropdown")), {
            modelValue: I.value,
            "onUpdate:modelValue": t[4] || (t[4] = (a) => I.value = a),
            align: "right"
          }, {
            trigger: y(() => [
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
            content: y(() => [
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
                    i(C).push("/account/profile"), I.value = !1;
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
                    i(C).push("/system/theme"), I.value = !1;
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
        s("div", ct, [
          s("div", dt, [
            (o(), m(f(e.$c("ui.dropdown")), {
              class: "app-switch",
              modelValue: j.value,
              "onUpdate:modelValue": t[5] || (t[5] = (a) => ce(a)),
              search: "",
              "search-placeholder": e.$t("shell.searchApps")
            }, {
              trigger: y(() => [
                s("button", {
                  type: "button",
                  class: "app-chip flex items-center gap-2 transition-colors outline-none group/app",
                  title: e.$t("shell.apps"),
                  "aria-label": e.$t("shell.apps"),
                  "data-testid": "apps-switch"
                }, [
                  s("span", {
                    class: D(["w-7 h-7 rounded-md grid place-items-center shrink-0 transition-colors", _.value.id === "default" ? "bg-muted text-muted-foreground" : "bg-primary-soft text-primary"])
                  }, [
                    (o(), m(f(_.value.icon), { size: 16 }))
                  ], 2),
                  s("span", pt, r(_.value.label), 1),
                  L.value ? (o(), l("span", {
                    key: 0,
                    class: "app-version",
                    "data-testid": "current-app-version",
                    title: L.value
                  }, r(L.value), 9, mt)) : u("", !0),
                  v(i(O), {
                    size: 14,
                    class: "text-faint group-hover/app:text-foreground transition-colors"
                  })
                ], 8, ut)
              ]),
              content: y(({ query: a }) => [
                s("div", gt, [
                  Z(a).length ? u("", !0) : (o(), l("div", vt, r(e.$t("common.empty")), 1)),
                  (o(!0), l(x, null, M(Z(a), (d) => (o(), l("section", {
                    key: d.key,
                    class: "pt-1 last:pb-3",
                    "data-testid": `apps-section-${d.key}`
                  }, [
                    d.label ? (o(), l("div", ft, [
                      R(r(d.label), 1),
                      s("span", bt, r(d.tiles.length), 1)
                    ])) : u("", !0),
                    s("div", yt, [
                      (o(!0), l(x, null, M(d.tiles, (n) => (o(), l("div", {
                        key: n.key,
                        role: "button",
                        tabindex: "0",
                        onClick: (S) => n.run(),
                        onKeydown: we((S) => n.run(), ["enter"]),
                        class: "group relative flex items-center gap-3 rounded-lg px-2.5 py-2 text-left hover:bg-muted transition-colors min-w-0 cursor-pointer",
                        "aria-current": n.id === _.value.id ? "true" : void 0
                      }, [
                        s("span", {
                          class: D(["w-8 h-8 rounded-lg grid place-items-center shrink-0 transition-colors group-hover:bg-primary-soft group-hover:text-primary", n.id === _.value.id ? "bg-primary-soft text-primary" : "bg-muted text-muted-foreground"])
                        }, [
                          (o(), m(f(n.icon), {
                            size: 16,
                            "stroke-width": "1.75"
                          }))
                        ], 2),
                        s("span", kt, [
                          s("span", xt, r(n.label), 1),
                          s("span", wt, r(n.detail), 1)
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
                        ], 8, $t)
                      ], 40, _t))), 128))
                    ])
                  ], 8, ht))), 128))
                ])
              ]),
              _: 1
            }, 8, ["modelValue", "search-placeholder"]))
          ]),
          ee.value ? (o(), l("div", At)) : u("", !0),
          ee.value ? (o(), l("nav", St, [
            (o(!0), l(x, null, M(ge.value, (a) => (o(), l(x, {
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
                onClick: (d) => i(h).navigate?.(a.item.path)
              }, [
                a.item.icon ? (o(), m(f(a.item.icon), {
                  key: 0,
                  size: 13
                })) : u("", !0),
                R(" " + r(a.item.label) + " ", 1),
                a.item.badge !== void 0 ? (o(), l("span", zt, r(a.item.badge), 1)) : u("", !0)
              ], 40, Ct)) : (o(), m(f(e.$c("ui.popover")), {
                key: 1,
                class: "band-group",
                align: "start"
              }, {
                default: y(({ close: d }) => [
                  (o(), m(f(e.$c("ui.popover-trigger")), { class: "band-group__trigger" }, {
                    default: y(() => [
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
                        })) : u("", !0),
                        R(" " + r(a.group) + " ", 1),
                        P(a.items) ? (o(), l("span", Mt, "· " + r(P(a.items).label), 1)) : u("", !0),
                        v(i(O), { size: 12 })
                      ], 40, Lt)
                    ]),
                    _: 2
                  }, 1024)),
                  (o(), m(f(e.$c("ui.popover-content")), {
                    align: "start",
                    class: "p-1"
                  }, {
                    default: y(() => [
                      s("div", Vt, [
                        (o(!0), l(x, null, M(a.items, (n) => (o(), l("button", {
                          key: n.path,
                          type: "button",
                          class: "pop-item whitespace-nowrap",
                          role: "menuitem",
                          "aria-selected": i(h).active === n.path,
                          disabled: n.disabled,
                          "aria-disabled": n.disabled || void 0,
                          onClick: (S) => {
                            d(), i(h).navigate?.(n.path);
                          }
                        }, [
                          n.icon ? (o(), m(f(n.icon), {
                            key: 0,
                            size: 15,
                            class: "text-muted-foreground"
                          })) : u("", !0),
                          s("span", It, r(n.label), 1),
                          i(h).active === n.path ? (o(), m(i(ae), {
                            key: 1,
                            size: 14,
                            class: "text-primary"
                          })) : u("", !0)
                        ], 8, Et))), 128))
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
}), Gt = /* @__PURE__ */ je(Nt, [["__scopeId", "data-v-ca8584c6"]]);
export {
  Gt as default
};
//# sourceMappingURL=Header-DTIb5xbx.js.map
