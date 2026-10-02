import { defineComponent as E, inject as $, computed as N, ref as I, openBlock as i, createBlock as k, Teleport as A, createVNode as b, Transition as B, withCtx as F, unref as s, createElementBlock as u, createElementVNode as e, toDisplayString as l, normalizeClass as M, Fragment as p, renderList as c, createTextVNode as h, createCommentVNode as _, normalizeStyle as y } from "vue";
import { Palette as P, X as V, Maximize2 as D, RotateCcw as O, Check as j, Copy as X } from "lucide-vue-next";
import { _ as H } from "./LocaleFlag.vue_vue_type_script_setup_true_lang-D2eeZNym.js";
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
}, Z = ["aria-pressed", "onClick"], x = { class: "tp-row" }, ee = { class: "tp-swatches" }, te = ["title", "aria-pressed", "onClick"], se = ["aria-pressed"], oe = ["value"], ne = { class: "tp-row" }, le = { class: "tp-out" }, ae = ["value"], ie = { class: "tp-row" }, re = {
  class: "tp-seg",
  role: "group"
}, ue = ["aria-pressed", "onClick"], de = { class: "tp-row" }, pe = {
  class: "tp-seg",
  role: "group"
}, ce = ["aria-pressed", "onClick"], he = { class: "tp-row" }, be = {
  class: "tp-seg",
  role: "group"
}, me = ["aria-pressed", "onClick"], ve = {
  key: 1,
  class: "tp-row"
}, _e = {
  class: "tp-seg",
  role: "group"
}, ye = ["aria-pressed", "onClick"], ge = { class: "tp-row" }, ke = { class: "tp-out" }, fe = ["value"], $e = { class: "tp-row" }, Ce = { class: "tp-out" }, we = ["value"], Te = { class: "tp-row" }, Le = ["value"], ze = ["label"], Se = ["value"], Ee = ["label"], Ne = ["value"], Ie = { class: "tp-actions" }, Ae = ["disabled"], Be = /* @__PURE__ */ E({
  __name: "ThemePanel",
  setup(Fe) {
    const o = $("$themeConfig"), f = $("$superApp"), m = f?.$i18n, C = { vi: "Tiếng Việt", en: "English" }, w = () => {
      o.toggle(!1), f?.$router?.push("/system/theme");
    }, r = o.state, T = [
      { id: "light", label: "theme.light" },
      { id: "dark", label: "theme.dark" },
      { id: "system", label: "theme.system" }
    ], L = [{ v: 0.9, label: "theme.compact" }, { v: 1, label: "theme.normal" }, { v: 1.1, label: "theme.spacious" }], z = N(() => !!r.brand && !o.swatches.some((n) => n.hex.toLowerCase() === r.brand.toLowerCase())), v = I(!1), S = async () => {
      try {
        await navigator.clipboard.writeText(o.exportTokens()), v.value = !0, setTimeout(() => v.value = !1, 1400);
      } catch {
      }
    }, g = (n, a, t) => `${(n - a) / (t - a) * 100}%`;
    return (n, a) => (i(), k(A, { to: "body" }, [
      b(B, { name: "tp" }, {
        default: F(() => [
          s(o).open ? (i(), u("aside", W, [
            e("header", q, [
              b(s(P), { size: 16 }),
              e("b", null, l(n.$t("shell.theme")), 1),
              e("span", G, l(s(o).locked ? n.$t("theme.locked") : n.$t("theme.savedOnDevice")), 1),
              e("button", {
                type: "button",
                class: "icon-btn",
                "aria-label": "Đóng",
                onClick: a[0] || (a[0] = (t) => s(o).toggle(!1))
              }, [
                b(s(V), { size: 16 })
              ])
            ]),
            e("div", {
              class: M(["tp-body", { "is-locked": s(o).locked }])
            }, [
              s(m) ? (i(), u("div", J, [
                e("span", null, l(n.$t("shell.language")), 1),
                e("div", K, [
                  (i(!0), u(p, null, c(s(m).availableLocales, (t) => (i(), u("button", {
                    key: t,
                    type: "button",
                    class: "flex items-center justify-center gap-1.5",
                    "aria-pressed": s(m).locale === t,
                    onClick: (d) => s(m).setLocale(t)
                  }, [
                    b(H, {
                      locale: t,
                      size: 16
                    }, null, 8, ["locale"]),
                    h(l(C[t] ?? t), 1)
                  ], 8, Q))), 128))
                ])
              ])) : _("", !0),
              e("div", U, [
                e("span", null, l(n.$t("theme.mode")), 1),
                e("div", Y, [
                  (i(), u(p, null, c(T, (t) => e("button", {
                    key: t.id,
                    type: "button",
                    "aria-pressed": s(r).mode === t.id,
                    onClick: (d) => s(o).set({ mode: t.id })
                  }, l(n.$t(t.label)), 9, Z)), 64))
                ])
              ]),
              e("div", x, [
                e("span", null, l(n.$t("theme.brand")), 1),
                e("div", ee, [
                  (i(!0), u(p, null, c(s(o).swatches, (t) => (i(), u("button", {
                    key: t.hex,
                    type: "button",
                    class: "tp-swatch",
                    title: t.name,
                    style: y({ background: t.hex }),
                    "aria-pressed": s(r).brand.toLowerCase() === t.hex.toLowerCase(),
                    onClick: (d) => s(o).set({ brand: t.hex })
                  }, null, 12, te))), 128)),
                  e("label", {
                    class: "tp-custom",
                    "aria-pressed": z.value,
                    title: "Màu tuỳ chọn"
                  }, [
                    e("input", {
                      type: "color",
                      value: s(r).brand || "#256B65",
                      onInput: a[1] || (a[1] = (t) => s(o).set({ brand: t.target.value }))
                    }, null, 40, oe)
                  ], 8, se),
                  s(r).brand ? (i(), u("button", {
                    key: 0,
                    type: "button",
                    class: "btn ghost sm",
                    onClick: a[2] || (a[2] = (t) => s(o).set({ brand: "" }))
                  }, "Mặc định")) : _("", !0)
                ])
              ]),
              e("div", ne, [
                e("span", null, [
                  h(l(n.$t("theme.fontSize")) + " ", 1),
                  e("output", le, l(Math.round(s(r).font * 100)) + "%", 1)
                ]),
                e("input", {
                  class: "tp-range",
                  type: "range",
                  min: "0.85",
                  max: "1.2",
                  step: "0.05",
                  value: s(r).font,
                  style: y({ "--tp-fill": g(s(r).font, 0.85, 1.2) }),
                  onInput: a[3] || (a[3] = (t) => s(o).set({ font: Number(t.target.value) }))
                }, null, 44, ae),
                a[8] || (a[8] = e("div", { class: "tp-scale" }, [
                  e("i", null, "Aa"),
                  e("i", null, "Aa")
                ], -1))
              ]),
              e("div", ie, [
                e("span", null, l(n.$t("theme.density")), 1),
                e("div", re, [
                  (i(), u(p, null, c(L, (t) => e("button", {
                    key: t.v,
                    type: "button",
                    "aria-pressed": s(r).density === t.v,
                    onClick: (d) => s(o).set({ density: t.v })
                  }, l(n.$t(t.label)), 9, ue)), 64))
                ])
              ]),
              e("div", de, [
                e("span", null, l(n.$t("theme.surface")), 1),
                e("div", pe, [
                  (i(!0), u(p, null, c(s(o).surfaces, (t) => (i(), u("button", {
                    key: t.id,
                    type: "button",
                    "aria-pressed": s(r).surface === t.id,
                    onClick: (d) => s(o).set({ surface: t.id })
                  }, l(n.$t(t.label)), 9, ce))), 128))
                ])
              ]),
              e("div", he, [
                e("span", null, l(n.$t("theme.contrast")), 1),
                e("div", be, [
                  (i(!0), u(p, null, c(s(o).contrasts, (t) => (i(), u("button", {
                    key: t.id,
                    type: "button",
                    "aria-pressed": s(r).contrast === t.id,
                    onClick: (d) => s(o).set({ contrast: t.id })
                  }, l(n.$t(t.label)), 9, me))), 128))
                ])
              ]),
              s(o).headers ? (i(), u("div", ve, [
                e("span", null, l(n.$t("theme.header")), 1),
                e("div", _e, [
                  (i(!0), u(p, null, c(s(o).headers, (t) => (i(), u("button", {
                    key: t.id,
                    type: "button",
                    "aria-pressed": s(r).header === t.id,
                    onClick: (d) => s(o).set({ header: t.id })
                  }, l(n.$t(t.label)), 9, ye))), 128))
                ])
              ])) : _("", !0),
              e("div", ge, [
                e("span", null, [
                  h(l(n.$t("theme.radius")) + " ", 1),
                  e("output", ke, l(s(r).radius) + "px", 1)
                ]),
                e("input", {
                  class: "tp-range",
                  type: "range",
                  min: "0",
                  max: "14",
                  step: "1",
                  value: s(r).radius,
                  style: y({ "--tp-fill": g(s(r).radius, 0, 14) }),
                  onInput: a[4] || (a[4] = (t) => s(o).set({ radius: Number(t.target.value) }))
                }, null, 44, fe)
              ]),
              e("div", $e, [
                e("span", null, [
                  h(l(n.$t("theme.shadow")) + " ", 1),
                  e("output", Ce, l(s(r).shadow.toFixed(1)) + "×", 1)
                ]),
                e("input", {
                  class: "tp-range",
                  type: "range",
                  min: "0",
                  max: "2",
                  step: "0.25",
                  value: s(r).shadow,
                  style: y({ "--tp-fill": g(s(r).shadow, 0, 2) }),
                  onInput: a[5] || (a[5] = (t) => s(o).set({ shadow: Number(t.target.value) }))
                }, null, 44, we)
              ]),
              e("div", Te, [
                e("span", null, l(n.$t("theme.font")), 1),
                e("select", {
                  class: "input",
                  value: s(r).fontFamily,
                  onChange: a[6] || (a[6] = (t) => s(o).set({ fontFamily: t.target.value }))
                }, [
                  e("optgroup", {
                    label: n.$t("theme.fontsLocal")
                  }, [
                    (i(!0), u(p, null, c(s(o).fontStacks, (t, d) => (i(), u("option", {
                      key: d,
                      value: d
                    }, l(d), 9, Se))), 128))
                  ], 8, ze),
                  e("optgroup", {
                    label: n.$t("theme.fontsWeb")
                  }, [
                    (i(!0), u(p, null, c(s(o).webFonts, (t, d) => (i(), u("option", {
                      key: d,
                      value: d
                    }, l(d), 9, Ne))), 128))
                  ], 8, Ee)
                ], 40, Le)
              ]),
              a[9] || (a[9] = e("div", { class: "tp-preview card" }, [
                e("div", { class: "flex items-center gap-2 flex-wrap" }, [
                  e("button", {
                    type: "button",
                    class: "btn primary sm"
                  }, "Chính"),
                  e("button", {
                    type: "button",
                    class: "btn sm"
                  }, "Phụ"),
                  e("button", {
                    type: "button",
                    class: "btn danger sm"
                  }, "Xoá"),
                  e("span", { class: "badge ok" }, "Hoạt động"),
                  e("span", { class: "badge warn" }, "Chờ duyệt")
                ]),
                e("input", {
                  class: "input sm",
                  placeholder: "Ô nhập liệu",
                  style: { "margin-top": "var(--sp-2)" }
                })
              ], -1))
            ], 2),
            e("footer", Ie, [
              e("button", {
                type: "button",
                class: "btn sm",
                title: "Theme Studio",
                onClick: w
              }, [
                b(s(D), { size: 14 }),
                h(" " + l(n.$t("theme.fullPage")), 1)
              ]),
              e("button", {
                type: "button",
                class: "btn sm",
                disabled: s(o).locked,
                onClick: a[7] || (a[7] = (t) => s(o).reset())
              }, [
                b(s(O), { size: 14 }),
                h(" " + l(n.$t("theme.reset")), 1)
              ], 8, Ae),
              e("button", {
                type: "button",
                class: "btn sm",
                onClick: S
              }, [
                v.value ? (i(), k(s(j), {
                  key: 0,
                  size: 14,
                  class: "text-success"
                })) : (i(), k(s(X), {
                  key: 1,
                  size: 14
                })),
                h(" " + l(v.value ? n.$t("theme.copied") : n.$t("theme.exportTokens")), 1)
              ])
            ])
          ])) : _("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Oe = /* @__PURE__ */ R(Be, [["__scopeId", "data-v-9cfcc838"]]);
export {
  Oe as default
};
//# sourceMappingURL=ThemePanel-x3IBQrbd.js.map
