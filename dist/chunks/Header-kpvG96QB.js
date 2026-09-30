import { defineComponent as fe, inject as be, computed as p, ref as w, watch as ye, onMounted as _e, openBlock as o, createElementBlock as l, createElementVNode as a, unref as i, Fragment as _, normalizeClass as T, toDisplayString as r, createCommentVNode as u, createStaticVNode as ke, createBlock as m, resolveDynamicComponent as f, withCtx as y, renderList as L, createVNode as h, createTextVNode as P, withKeys as xe, withModifiers as R } from "vue";
import { useRouter as we, useRoute as $e } from "vue-router";
import { LayoutGrid as M, Check as ee, ChevronDown as D, User as Ae, Palette as Se, LogOut as Ce, Star as ze, Database as Le, AppWindow as Me, Terminal as Ve, Cpu as Ee, Box as Ie, Zap as Ne, Layers as Ue, Globe as Te, Shield as De } from "lucide-vue-next";
import { SUPERAPP_EVENTS as Oe } from "@nhphero/vue-sapp/contracts";
import { _ as te } from "./LocaleFlag.vue_vue_type_script_setup_true_lang-D2eeZNym.js";
import { _ as se } from "./UserAvatar.vue_vue_type_script_setup_true_lang-AXBFwsc7.js";
import { _ as Fe } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const je = { class: "w-full bg-background sticky top-0 z-[100] transition-colors duration-300" }, Pe = { class: "page-container h-(--header-h) flex items-center justify-between gap-4" }, Re = { class: "flex items-center gap-3 min-w-0" }, Ge = ["title"], Be = ["src", "alt"], We = ["src", "alt"], He = {
  key: 2,
  class: "hidden lg:block text-[10px] font-bold uppercase tracking-[0.2em] text-faint border-l border-border-soft pl-3"
}, Ke = { class: "flex items-center gap-2" }, Je = { class: "hidden md:flex items-center gap-1 flex-nowrap shrink-0" }, Xe = ["title", "aria-label"], Ze = { class: "w-52" }, Qe = { class: "pop-head" }, Ye = ["aria-selected", "onClick"], qe = { class: "flex items-center gap-2.5" }, et = {
  type: "button",
  class: "h-9 flex items-center gap-2 pl-2.5 pr-1.5 rounded-lg hover:bg-muted cursor-pointer transition-colors outline-none",
  "data-testid": "user-menu"
}, tt = { class: "hidden lg:block text-sm font-semibold text-foreground whitespace-nowrap" }, st = { class: "w-60" }, at = { class: "flex items-center gap-3 px-2 py-2.5 mb-1 border-b border-border-soft" }, ot = { class: "min-w-0" }, nt = { class: "text-sm font-semibold text-foreground truncate" }, lt = { class: "text-xs text-faint truncate" }, it = { class: "app-band" }, rt = { class: "page-container flex items-stretch gap-3" }, dt = { class: "flex items-stretch shrink-0" }, ct = ["title", "aria-label"], pt = {
  class: "text-sm font-semibold text-foreground whitespace-nowrap",
  "data-testid": "current-app"
}, ut = { class: "w-[720px] max-w-[calc(100vw-32px)]" }, mt = {
  key: 0,
  class: "px-3 py-6 text-sm text-faint text-center"
}, gt = ["data-testid"], ht = {
  key: 0,
  class: "pop-head flex items-center gap-1.5"
}, vt = { class: "text-faint font-normal" }, ft = { class: "px-2 pb-1 grid gap-1 sm:grid-cols-2 lg:grid-cols-3" }, bt = ["onClick", "onKeydown", "aria-current"], yt = { class: "min-w-0 flex-1" }, _t = { class: "block text-sm font-semibold truncate group-hover:text-primary transition-colors" }, kt = { class: "block text-xs text-muted-foreground truncate" }, xt = ["aria-pressed", "aria-label", "onClick"], wt = {
  key: 0,
  class: "app-band__sep self-center h-5 w-px shrink-0"
}, $t = {
  key: 1,
  class: "tabs tabs--band min-w-0 overflow-x-auto no-scrollbar",
  role: "tablist",
  "data-testid": "app-nav"
}, At = ["aria-selected", "onClick"], St = {
  key: 1,
  class: "badge"
}, Ct = ["aria-selected", "data-testid"], zt = {
  key: 1,
  class: "band-group__current"
}, Lt = {
  class: "min-w-56 flex flex-col",
  role: "menu"
}, Mt = ["aria-selected", "disabled", "aria-disabled", "onClick"], Vt = { class: "flex-1" }, Et = /* @__PURE__ */ fe({
  __name: "Header",
  setup(It) {
    const c = be("$superApp"), V = c, S = we(), G = $e(), C = V.$appState, B = V.$themeConfig, b = p(() => V.$config?.branding ?? null), W = p(() => B?.state?.mode === "dark" || B?.state?.mode === "system" && window.matchMedia?.("(prefers-color-scheme: dark)").matches), k = V.$i18n, O = w(!1), ae = { vi: "Tiếng Việt", en: "English", ja: "日本語", ko: "한국어", zh: "中文", fr: "Français", de: "Deutsch" }, oe = (e) => {
      k?.setLocale(e), O.value = !1;
    }, ne = p(
      () => Q.value.map((e) => ({ key: `app:${e.id}`, id: e.id, label: e.label, detail: e.detail, icon: e.icon, run: () => ve(e.path) }))
    ), H = p(() => c?.getModuleState?.("home", { favorites: [] })), K = p(() => H.value?.favorites ?? []), J = (e) => K.value.includes(e), le = (e) => H.value?.toggleFavorite?.(e), X = (e) => {
      const t = (e || "").trim().toLowerCase(), s = (x) => !t || `${x.label} ${x.detail || ""} ${x.id}`.toLowerCase().includes(t), d = ne.value.filter(s), n = (x) => {
        const U = K.value.indexOf(x.key);
        return U === -1 ? Number.MAX_SAFE_INTEGER : U;
      }, A = [...d].sort((x, U) => n(x) - n(U));
      return A.length ? [{ key: "apps", label: "", tiles: A }] : [];
    }, F = w(!1), ie = (e) => {
      F.value = e;
    }, E = w(!1);
    w(!1);
    const g = w(null), $ = w([]), I = w([]), re = {
      Shield: De,
      Globe: Te,
      Layers: Ue,
      LayoutGrid: M,
      Zap: Ne,
      Box: Ie,
      Cpu: Ee,
      Terminal: Ve,
      AppWindow: Me,
      Database: Le
    }, de = (e) => e ? re[e] || M : M, Z = () => {
      typeof c?.getRegisteredApps == "function" && (I.value = c.getRegisteredApps());
    }, ce = ["superadmin", "admin"], pe = p(() => c?.$policy?.can?.("role", ce) ?? !1), Q = p(() => (I.value.length > 0 ? I.value : [
      { id: "workspace", name: "Workspace Hub", url: "http://localhost:4409", icon: "Globe", description: "Logic Orchestration", isEnabled: !0 },
      { id: "admin", name: "Admin Management", url: "http://localhost:4403", icon: "Shield", description: "Platform Governance", isEnabled: !0 }
    ]).filter((t) => t.isEnabled !== !1).filter((t) => t.id !== "admin" || pe.value).map((t) => ({
      id: t.id,
      label: t.name,
      path: t.id === "admin" ? "/app/admin/apps" : `/app/${t.id}`,
      icon: de(t.icon),
      detail: t.description || "Micro-Frontend App"
    }))), v = c.getModuleState("shell.nav", { moduleId: "", title: "", icon: null, items: [], active: "", navigate: null }), Y = p(() => G.path.startsWith("/app/")), z = p(() => {
      let e = Y.value ? C.current_app : null;
      e === "expose" && (e = "workspace");
      const t = e && Q.value.find((s) => s.id === e);
      return t || (e && v.title ? { id: e, label: v.title, icon: v.icon || M } : { id: "default", label: k?.t("shell.apps") ?? "Apps", icon: M });
    }), q = p(() => Y.value && v.items.length > 0), ue = p(() => {
      const e = [];
      for (const t of v.items) {
        if (!t.group) {
          e.push({ group: null, item: t });
          continue;
        }
        const s = e.find((d) => d.group === t.group);
        s ? (s.items.push(t), s.icon ??= t.groupIcon) : e.push({ group: t.group, icon: t.groupIcon, items: [t] });
      }
      return e;
    }), j = (e) => e.find((t) => v.active === t.path) ?? null, N = p({
      get: () => C.current_workspace,
      set: (e) => {
        C.current_workspace = e;
      }
    });
    p(() => $.value.find((e) => String(e.id) === String(N.value)) || $.value[0]), ye(() => G.params.moduleId, (e) => {
      const t = Array.isArray(e) ? e[0] : e;
      t && C.current_app !== t && (C.current_app = t);
    }, { immediate: !0 });
    const me = async () => {
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
    const ge = async () => {
      try {
        const e = await c.doAction("workspace.list");
        $.value = e || [];
        const t = $.value.find((s) => String(s.id) === String(N.value));
        (!N.value || !t) && $.value.length > 0 && (N.value = String($.value[0].id));
      } catch {
      }
    }, he = async () => {
      c.emit?.(Oe.AUTH_LOGOUT);
      try {
        c.doAction("auth.logout"), localStorage.removeItem("accessToken"), S.push("/login").catch(() => {
          window.location.href = "/login";
        });
      } catch {
        localStorage.removeItem("accessToken"), window.location.href = "/login";
      }
    }, ve = (e) => {
      F.value = !1, S.push(e);
    };
    return _e(() => {
      me(), ge(), Z(), typeof c?.on == "function" && c.on("apps:updated", (e) => {
        Array.isArray(e) ? I.value = e : Z();
      });
    }), (e, t) => (o(), l("header", je, [
      a("div", Pe, [
        a("div", Re, [
          a("div", {
            class: "flex items-center gap-3 cursor-pointer group/logo",
            "data-testid": "brand",
            title: b.value?.name,
            onClick: t[0] || (t[0] = (s) => i(S).push(b.value?.homePath || "/"))
          }, [
            b.value?.logo ? (o(), l(_, { key: 0 }, [
              W.value && b.value.logoDark ? (o(), l("img", {
                key: 0,
                src: b.value.logoDark,
                alt: b.value.name,
                class: "h-7 w-auto max-w-[200px] object-contain"
              }, null, 8, Be)) : (o(), l("span", {
                key: 1,
                class: T(["inline-flex items-center rounded-md", W.value && "bg-white/95 px-2 py-1"])
              }, [
                a("img", {
                  src: b.value.logo,
                  alt: b.value.name,
                  class: "h-7 w-auto max-w-[200px] object-contain"
                }, null, 8, We)
              ], 2)),
              b.value.tagline ? (o(), l("span", He, r(b.value.tagline), 1)) : u("", !0)
            ], 64)) : (o(), l(_, { key: 1 }, [
              t[8] || (t[8] = ke('<div class="relative" data-v-d9203755><div class="w-9 h-9 bg-primary rounded-xl flex items-center justify-center relative z-10 transition-transform group-hover/logo:scale-110 shadow-xl border border-border-soft" data-v-d9203755><span class="text-primary-foreground font-black text-xs tracking-tighter" data-v-d9203755>MP</span></div></div><div class="flex flex-col text-left" data-v-d9203755><span class="text-[11px] font-black uppercase tracking-[0.4em] text-foreground group-hover/logo:text-primary transition-colors leading-none mb-1" data-v-d9203755>Antigravity</span><span class="text-[9px] font-black uppercase tracking-[0.2em] text-faint" data-v-d9203755>Core OS v5</span></div>', 2))
            ], 64))
          ], 8, Ge)
        ]),
        a("div", Ke, [
          a("div", Je, [
            i(k) ? (o(), m(f(e.$c("ui.dropdown")), {
              key: 0,
              modelValue: O.value,
              "onUpdate:modelValue": t[1] || (t[1] = (s) => O.value = s),
              align: "right"
            }, {
              trigger: y(() => [
                a("button", {
                  type: "button",
                  class: "h-9 px-2 rounded-lg flex items-center gap-1 whitespace-nowrap shrink-0 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors outline-none",
                  title: e.$t("shell.language"),
                  "aria-label": e.$t("shell.language"),
                  "data-testid": "lang-switch"
                }, [
                  h(te, {
                    locale: i(k).locale,
                    size: 20
                  }, null, 8, ["locale"]),
                  h(i(D), {
                    size: 13,
                    class: "text-faint"
                  })
                ], 8, Xe)
              ]),
              content: y(() => [
                a("div", Ze, [
                  a("div", Qe, r(e.$t("shell.language")), 1),
                  (o(!0), l(_, null, L(i(k).availableLocales, (s) => (o(), l("button", {
                    key: s,
                    type: "button",
                    class: "pop-item justify-between whitespace-nowrap",
                    "aria-selected": i(k).locale === s,
                    onClick: (d) => oe(s)
                  }, [
                    a("span", qe, [
                      h(te, {
                        locale: s,
                        size: 22
                      }, null, 8, ["locale"]),
                      a("span", null, r(ae[s] ?? s), 1)
                    ]),
                    i(k).locale === s ? (o(), m(i(ee), {
                      key: 0,
                      size: 14,
                      class: "text-primary"
                    })) : u("", !0)
                  ], 8, Ye))), 128))
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])) : u("", !0)
          ]),
          t[10] || (t[10] = a("div", { class: "h-6 w-px bg-border-soft mx-1 hidden md:block" }, null, -1)),
          (o(), m(f(e.$c("ui.dropdown")), {
            modelValue: E.value,
            "onUpdate:modelValue": t[4] || (t[4] = (s) => E.value = s),
            align: "right"
          }, {
            trigger: y(() => [
              a("button", et, [
                a("span", tt, r(g.value?.username || "User"), 1),
                h(se, {
                  src: g.value?.avatar,
                  name: g.value?.username || "User",
                  size: 28,
                  rounded: "lg"
                }, null, 8, ["src", "name"]),
                h(i(D), {
                  size: 13,
                  class: "text-faint"
                })
              ])
            ]),
            content: y(() => [
              a("div", st, [
                a("div", at, [
                  h(se, {
                    src: g.value?.avatar,
                    name: g.value?.username || "User",
                    size: 36,
                    rounded: "lg"
                  }, null, 8, ["src", "name"]),
                  a("div", ot, [
                    a("div", nt, r(g.value?.username), 1),
                    a("div", lt, r(g.value?.email || g.value?.role), 1)
                  ])
                ]),
                a("button", {
                  type: "button",
                  class: "pop-item",
                  "data-testid": "menu-profile",
                  onClick: t[2] || (t[2] = (s) => {
                    i(S).push("/account/profile"), E.value = !1;
                  })
                }, [
                  h(i(Ae), {
                    size: 15,
                    class: "text-muted-foreground"
                  }),
                  a("span", null, r(e.$t("shell.profile")), 1)
                ]),
                a("button", {
                  type: "button",
                  class: "pop-item",
                  onClick: t[3] || (t[3] = (s) => {
                    i(S).push("/system/theme"), E.value = !1;
                  })
                }, [
                  h(i(Se), {
                    size: 15,
                    class: "text-muted-foreground"
                  }),
                  a("span", null, r(e.$t("system.themeStudio", { default: "Theme Studio" })), 1)
                ]),
                t[9] || (t[9] = a("div", { class: "pop-sep" }, null, -1)),
                a("button", {
                  type: "button",
                  class: "pop-item danger",
                  onClick: he
                }, [
                  h(i(Ce), { size: 15 }),
                  a("span", null, r(e.$t("shell.logout")), 1)
                ])
              ])
            ]),
            _: 1
          }, 8, ["modelValue"]))
        ])
      ]),
      a("div", it, [
        a("div", rt, [
          a("div", dt, [
            (o(), m(f(e.$c("ui.dropdown")), {
              class: "app-switch",
              modelValue: F.value,
              "onUpdate:modelValue": t[5] || (t[5] = (s) => ie(s)),
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
                    class: T(["w-7 h-7 rounded-md grid place-items-center shrink-0 transition-colors", z.value.id === "default" ? "bg-muted text-muted-foreground" : "bg-primary-soft text-primary"])
                  }, [
                    (o(), m(f(z.value.icon), { size: 16 }))
                  ], 2),
                  a("span", pt, r(z.value.label), 1),
                  h(i(D), {
                    size: 14,
                    class: "text-faint group-hover/app:text-foreground transition-colors"
                  })
                ], 8, ct)
              ]),
              content: y(({ query: s }) => [
                a("div", ut, [
                  X(s).length ? u("", !0) : (o(), l("div", mt, r(e.$t("common.empty")), 1)),
                  (o(!0), l(_, null, L(X(s), (d) => (o(), l("section", {
                    key: d.key,
                    class: "pt-1 last:pb-3",
                    "data-testid": `apps-section-${d.key}`
                  }, [
                    d.label ? (o(), l("div", ht, [
                      P(r(d.label), 1),
                      a("span", vt, r(d.tiles.length), 1)
                    ])) : u("", !0),
                    a("div", ft, [
                      (o(!0), l(_, null, L(d.tiles, (n) => (o(), l("div", {
                        key: n.key,
                        role: "button",
                        tabindex: "0",
                        onClick: (A) => n.run(),
                        onKeydown: xe((A) => n.run(), ["enter"]),
                        class: "group relative flex items-center gap-3 rounded-lg px-2.5 py-2 text-left hover:bg-muted transition-colors min-w-0 cursor-pointer",
                        "aria-current": n.id === z.value.id ? "true" : void 0
                      }, [
                        a("span", {
                          class: T(["w-8 h-8 rounded-lg grid place-items-center shrink-0 transition-colors group-hover:bg-primary-soft group-hover:text-primary", n.id === z.value.id ? "bg-primary-soft text-primary" : "bg-muted text-muted-foreground"])
                        }, [
                          (o(), m(f(n.icon), {
                            size: 16,
                            "stroke-width": "1.75"
                          }))
                        ], 2),
                        a("span", yt, [
                          a("span", _t, r(n.label), 1),
                          a("span", kt, r(n.detail), 1)
                        ]),
                        a("button", {
                          type: "button",
                          class: "icon-btn shrink-0 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 aria-pressed:opacity-100",
                          style: { width: "28px", height: "28px" },
                          "aria-pressed": J(n.key),
                          "aria-label": e.$t("shell.toggleFavorite"),
                          "data-testid": "tile-star",
                          onClick: R((A) => le(n.key), ["stop"])
                        }, [
                          h(i(ze), {
                            size: 14,
                            class: T(J(n.key) ? "fill-warning text-warning" : "text-faint")
                          }, null, 8, ["class"])
                        ], 8, xt)
                      ], 40, bt))), 128))
                    ])
                  ], 8, gt))), 128))
                ])
              ]),
              _: 1
            }, 8, ["modelValue", "search-placeholder"]))
          ]),
          q.value ? (o(), l("div", wt)) : u("", !0),
          q.value ? (o(), l("nav", $t, [
            (o(!0), l(_, null, L(ue.value, (s) => (o(), l(_, {
              key: s.group ?? s.item.path
            }, [
              s.group === null ? (o(), l("button", {
                key: 0,
                type: "button",
                class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                role: "tab",
                "aria-selected": i(v).active === s.item.path,
                onMousedown: t[6] || (t[6] = R(() => {
                }, ["prevent"])),
                onClick: (d) => i(v).navigate?.(s.item.path)
              }, [
                s.item.icon ? (o(), m(f(s.item.icon), {
                  key: 0,
                  size: 13
                })) : u("", !0),
                P(" " + r(s.item.label) + " ", 1),
                s.item.badge !== void 0 ? (o(), l("span", St, r(s.item.badge), 1)) : u("", !0)
              ], 40, At)) : (o(), m(f(e.$c("ui.popover")), {
                key: 1,
                class: "band-group",
                align: "start"
              }, {
                default: y(({ close: d }) => [
                  (o(), m(f(e.$c("ui.popover-trigger")), { class: "band-group__trigger" }, {
                    default: y(() => [
                      a("button", {
                        type: "button",
                        class: "tab inline-flex items-center gap-1.5 whitespace-nowrap",
                        role: "tab",
                        "aria-selected": !!j(s.items),
                        "aria-haspopup": "menu",
                        onMousedown: t[7] || (t[7] = R(() => {
                        }, ["prevent"])),
                        "data-testid": `app-nav-group-${s.group}`
                      }, [
                        s.icon ? (o(), m(f(s.icon), {
                          key: 0,
                          size: 13
                        })) : u("", !0),
                        P(" " + r(s.group) + " ", 1),
                        j(s.items) ? (o(), l("span", zt, "· " + r(j(s.items).label), 1)) : u("", !0),
                        h(i(D), { size: 12 })
                      ], 40, Ct)
                    ]),
                    _: 2
                  }, 1024)),
                  (o(), m(f(e.$c("ui.popover-content")), {
                    align: "start",
                    class: "p-1"
                  }, {
                    default: y(() => [
                      a("div", Lt, [
                        (o(!0), l(_, null, L(s.items, (n) => (o(), l("button", {
                          key: n.path,
                          type: "button",
                          class: "pop-item whitespace-nowrap",
                          role: "menuitem",
                          "aria-selected": i(v).active === n.path,
                          disabled: n.disabled,
                          "aria-disabled": n.disabled || void 0,
                          onClick: (A) => {
                            d(), i(v).navigate?.(n.path);
                          }
                        }, [
                          n.icon ? (o(), m(f(n.icon), {
                            key: 0,
                            size: 15,
                            class: "text-muted-foreground"
                          })) : u("", !0),
                          a("span", Vt, r(n.label), 1),
                          i(v).active === n.path ? (o(), m(i(ee), {
                            key: 1,
                            size: 14,
                            class: "text-primary"
                          })) : u("", !0)
                        ], 8, Mt))), 128))
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
}), Pt = /* @__PURE__ */ Fe(Et, [["__scopeId", "data-v-d9203755"]]);
export {
  Pt as default
};
//# sourceMappingURL=Header-kpvG96QB.js.map
