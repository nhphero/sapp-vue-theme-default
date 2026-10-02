import { defineComponent as E, inject as f, computed as N, ref as I, openBlock as a, createBlock as k, Teleport as A, createVNode as b, Transition as B, withCtx as F, unref as s, createElementBlock as r, createElementVNode as t, toDisplayString as l, normalizeClass as M, Fragment as p, renderList as c, createTextVNode as h, createCommentVNode as m, normalizeStyle as y } from "vue";
import { Palette as P, X as V, Maximize2 as D, RotateCcw as O, Check as j, Copy as X } from "lucide-vue-next";
import { L as H } from "./LocaleFlag-C6SPRotW.js";
import { _ as R } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const W = {
  key: 0,
  class: "tp-panel",
  role: "dialog",
  "aria-label": "Tuỳ chỉnh giao diện"
}, q = { class: "tp-head" }, G = { class: "tp-note" }, J = {
  key: 0,
  class: "tp-row tp-lang"
}, K = {
  class: "tp-seg",
  role: "group"
}, Q = ["aria-pressed", "onClick"], U = { class: "tp-row" }, Y = {
  class: "tp-seg",
  role: "group"
}, Z = ["aria-pressed", "onClick"], x = { class: "tp-row" }, tt = { class: "tp-swatches" }, et = ["title", "aria-pressed", "onClick"], st = ["aria-pressed"], ot = ["value"], nt = { class: "tp-row" }, lt = { class: "tp-out" }, at = ["value"], it = { class: "tp-row" }, rt = {
  class: "tp-seg",
  role: "group"
}, ut = ["aria-pressed", "onClick"], dt = { class: "tp-row" }, pt = {
  class: "tp-seg",
  role: "group"
}, ct = ["aria-pressed", "onClick"], ht = { class: "tp-row" }, bt = {
  class: "tp-seg",
  role: "group"
}, mt = ["aria-pressed", "onClick"], vt = {
  key: 1,
  class: "tp-row"
}, _t = {
  class: "tp-seg",
  role: "group"
}, yt = ["aria-pressed", "onClick"], gt = {
  key: 2,
  class: "tp-row"
}, kt = {
  class: "tp-seg",
  role: "group"
}, $t = ["aria-pressed", "onClick"], ft = { class: "tp-row" }, Ct = { class: "tp-out" }, wt = ["value"], Lt = { class: "tp-row" }, Tt = { class: "tp-out" }, zt = ["value"], St = { class: "tp-row" }, Et = ["value"], Nt = ["label"], It = ["value"], At = ["label"], Bt = ["value"], Ft = { class: "tp-actions" }, Mt = ["disabled"], Pt = /* @__PURE__ */ E({
  __name: "ThemePanel",
  setup(Vt) {
    const o = f("$themeConfig"), $ = f("$superApp"), v = $?.$i18n, C = { vi: "Tiếng Việt", en: "English" }, w = () => {
      o.toggle(!1), $?.$router?.push("/system/theme");
    }, u = o.state, L = [
      { id: "light", label: "theme.light" },
      { id: "dark", label: "theme.dark" },
      { id: "system", label: "theme.system" }
    ], T = [{ v: 0.9, label: "theme.compact" }, { v: 1, label: "theme.normal" }, { v: 1.1, label: "theme.spacious" }], z = N(() => !!u.brand && !o.swatches.some((n) => n.hex.toLowerCase() === u.brand.toLowerCase())), _ = I(!1), S = async () => {
      try {
        await navigator.clipboard.writeText(o.exportTokens()), _.value = !0, setTimeout(() => _.value = !1, 1400);
      } catch {
      }
    }, g = (n, i, e) => `${(n - i) / (e - i) * 100}%`;
    return (n, i) => (a(), k(A, { to: "body" }, [
      b(B, { name: "tp" }, {
        default: F(() => [
          s(o).open ? (a(), r("aside", W, [
            t("header", q, [
              b(s(P), { size: 16 }),
              t("b", null, l(n.$t("shell.theme")), 1),
              t("span", G, l(s(o).locked ? n.$t("theme.locked") : n.$t("theme.savedOnDevice")), 1),
              t("button", {
                type: "button",
                class: "icon-btn",
                "aria-label": "Đóng",
                onClick: i[0] || (i[0] = (e) => s(o).toggle(!1))
              }, [
                b(s(V), { size: 16 })
              ])
            ]),
            t("div", {
              class: M(["tp-body", { "is-locked": s(o).locked }])
            }, [
              s(v) ? (a(), r("div", J, [
                t("span", null, l(n.$t("shell.language")), 1),
                t("div", K, [
                  (a(!0), r(p, null, c(s(v).availableLocales, (e) => (a(), r("button", {
                    key: e,
                    type: "button",
                    class: "flex items-center justify-center gap-1.5",
                    "aria-pressed": s(v).locale === e,
                    onClick: (d) => s(v).setLocale(e)
                  }, [
                    b(H, {
                      locale: e,
                      size: 16
                    }, null, 8, ["locale"]),
                    h(l(C[e] ?? e), 1)
                  ], 8, Q))), 128))
                ])
              ])) : m("", !0),
              t("div", U, [
                t("span", null, l(n.$t("theme.mode")), 1),
                t("div", Y, [
                  (a(), r(p, null, c(L, (e) => t("button", {
                    key: e.id,
                    type: "button",
                    "aria-pressed": s(u).mode === e.id,
                    onClick: (d) => s(o).set({ mode: e.id })
                  }, l(n.$t(e.label)), 9, Z)), 64))
                ])
              ]),
              t("div", x, [
                t("span", null, l(n.$t("theme.brand")), 1),
                t("div", tt, [
                  (a(!0), r(p, null, c(s(o).swatches, (e) => (a(), r("button", {
                    key: e.hex,
                    type: "button",
                    class: "tp-swatch",
                    title: e.name,
                    style: y({ background: e.hex }),
                    "aria-pressed": s(u).brand.toLowerCase() === e.hex.toLowerCase(),
                    onClick: (d) => s(o).set({ brand: e.hex })
                  }, null, 12, et))), 128)),
                  t("label", {
                    class: "tp-custom",
                    "aria-pressed": z.value,
                    title: "Màu tuỳ chọn"
                  }, [
                    t("input", {
                      type: "color",
                      value: s(u).brand || "#256B65",
                      onInput: i[1] || (i[1] = (e) => s(o).set({ brand: e.target.value }))
                    }, null, 40, ot)
                  ], 8, st),
                  s(u).brand ? (a(), r("button", {
                    key: 0,
                    type: "button",
                    class: "btn ghost sm",
                    onClick: i[2] || (i[2] = (e) => s(o).set({ brand: "" }))
                  }, "Mặc định")) : m("", !0)
                ])
              ]),
              t("div", nt, [
                t("span", null, [
                  h(l(n.$t("theme.fontSize")) + " ", 1),
                  t("output", lt, l(Math.round(s(u).font * 100)) + "%", 1)
                ]),
                t("input", {
                  class: "tp-range",
                  type: "range",
                  min: "0.85",
                  max: "1.2",
                  step: "0.05",
                  value: s(u).font,
                  style: y({ "--tp-fill": g(s(u).font, 0.85, 1.2) }),
                  onInput: i[3] || (i[3] = (e) => s(o).set({ font: Number(e.target.value) }))
                }, null, 44, at),
                i[8] || (i[8] = t("div", { class: "tp-scale" }, [
                  t("i", null, "Aa"),
                  t("i", null, "Aa")
                ], -1))
              ]),
              t("div", it, [
                t("span", null, l(n.$t("theme.density")), 1),
                t("div", rt, [
                  (a(), r(p, null, c(T, (e) => t("button", {
                    key: e.v,
                    type: "button",
                    "aria-pressed": s(u).density === e.v,
                    onClick: (d) => s(o).set({ density: e.v })
                  }, l(n.$t(e.label)), 9, ut)), 64))
                ])
              ]),
              t("div", dt, [
                t("span", null, l(n.$t("theme.surface")), 1),
                t("div", pt, [
                  (a(!0), r(p, null, c(s(o).surfaces, (e) => (a(), r("button", {
                    key: e.id,
                    type: "button",
                    "aria-pressed": s(u).surface === e.id,
                    onClick: (d) => s(o).set({ surface: e.id })
                  }, l(n.$t(e.label)), 9, ct))), 128))
                ])
              ]),
              t("div", ht, [
                t("span", null, l(n.$t("theme.contrast")), 1),
                t("div", bt, [
                  (a(!0), r(p, null, c(s(o).contrasts, (e) => (a(), r("button", {
                    key: e.id,
                    type: "button",
                    "aria-pressed": s(u).contrast === e.id,
                    onClick: (d) => s(o).set({ contrast: e.id })
                  }, l(n.$t(e.label)), 9, mt))), 128))
                ])
              ]),
              s(o).controls ? (a(), r("div", vt, [
                t("span", null, l(n.$t("theme.control")), 1),
                t("div", _t, [
                  (a(!0), r(p, null, c(s(o).controls, (e) => (a(), r("button", {
                    key: e.v,
                    type: "button",
                    "aria-pressed": s(u).control === e.v,
                    onClick: (d) => s(o).set({ control: e.v })
                  }, l(n.$t(e.label)), 9, yt))), 128))
                ])
              ])) : m("", !0),
              s(o).headers ? (a(), r("div", gt, [
                t("span", null, l(n.$t("theme.header")), 1),
                t("div", kt, [
                  (a(!0), r(p, null, c(s(o).headers, (e) => (a(), r("button", {
                    key: e.id,
                    type: "button",
                    "aria-pressed": s(u).header === e.id,
                    onClick: (d) => s(o).set({ header: e.id })
                  }, l(n.$t(e.label)), 9, $t))), 128))
                ])
              ])) : m("", !0),
              t("div", ft, [
                t("span", null, [
                  h(l(n.$t("theme.radius")) + " ", 1),
                  t("output", Ct, l(s(u).radius) + "px", 1)
                ]),
                t("input", {
                  class: "tp-range",
                  type: "range",
                  min: "0",
                  max: "14",
                  step: "1",
                  value: s(u).radius,
                  style: y({ "--tp-fill": g(s(u).radius, 0, 14) }),
                  onInput: i[4] || (i[4] = (e) => s(o).set({ radius: Number(e.target.value) }))
                }, null, 44, wt)
              ]),
              t("div", Lt, [
                t("span", null, [
                  h(l(n.$t("theme.shadow")) + " ", 1),
                  t("output", Tt, l(s(u).shadow.toFixed(1)) + "×", 1)
                ]),
                t("input", {
                  class: "tp-range",
                  type: "range",
                  min: "0",
                  max: "2",
                  step: "0.25",
                  value: s(u).shadow,
                  style: y({ "--tp-fill": g(s(u).shadow, 0, 2) }),
                  onInput: i[5] || (i[5] = (e) => s(o).set({ shadow: Number(e.target.value) }))
                }, null, 44, zt)
              ]),
              t("div", St, [
                t("span", null, l(n.$t("theme.font")), 1),
                t("select", {
                  class: "input",
                  value: s(u).fontFamily,
                  onChange: i[6] || (i[6] = (e) => s(o).set({ fontFamily: e.target.value }))
                }, [
                  t("optgroup", {
                    label: n.$t("theme.fontsLocal")
                  }, [
                    (a(!0), r(p, null, c(s(o).fontStacks, (e, d) => (a(), r("option", {
                      key: d,
                      value: d
                    }, l(d), 9, It))), 128))
                  ], 8, Nt),
                  t("optgroup", {
                    label: n.$t("theme.fontsWeb")
                  }, [
                    (a(!0), r(p, null, c(s(o).webFonts, (e, d) => (a(), r("option", {
                      key: d,
                      value: d
                    }, l(d), 9, Bt))), 128))
                  ], 8, At)
                ], 40, Et)
              ]),
              i[9] || (i[9] = t("div", { class: "tp-preview card" }, [
                t("div", { class: "flex items-center gap-2 flex-wrap" }, [
                  t("button", {
                    type: "button",
                    class: "btn primary sm"
                  }, "Chính"),
                  t("button", {
                    type: "button",
                    class: "btn sm"
                  }, "Phụ"),
                  t("button", {
                    type: "button",
                    class: "btn danger sm"
                  }, "Xoá"),
                  t("span", { class: "badge ok" }, "Hoạt động"),
                  t("span", { class: "badge warn" }, "Chờ duyệt")
                ]),
                t("input", {
                  class: "input sm",
                  placeholder: "Ô nhập liệu",
                  style: { "margin-top": "var(--sp-2)" }
                })
              ], -1))
            ], 2),
            t("footer", Ft, [
              t("button", {
                type: "button",
                class: "btn sm",
                title: "Theme Studio",
                onClick: w
              }, [
                b(s(D), { size: 14 }),
                h(" " + l(n.$t("theme.fullPage")), 1)
              ]),
              t("button", {
                type: "button",
                class: "btn sm",
                disabled: s(o).locked,
                onClick: i[7] || (i[7] = (e) => s(o).reset())
              }, [
                b(s(O), { size: 14 }),
                h(" " + l(n.$t("theme.reset")), 1)
              ], 8, Mt),
              t("button", {
                type: "button",
                class: "btn sm",
                onClick: S
              }, [
                _.value ? (a(), k(s(j), {
                  key: 0,
                  size: 14,
                  class: "text-success"
                })) : (a(), k(s(X), {
                  key: 1,
                  size: 14
                })),
                h(" " + l(_.value ? n.$t("theme.copied") : n.$t("theme.exportTokens")), 1)
              ])
            ])
          ])) : m("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Ht = /* @__PURE__ */ R(Pt, [["__scopeId", "data-v-f3d56309"]]);
export {
  Ht as default
};
//# sourceMappingURL=ThemePanel-Di-Yg5oa.js.map
