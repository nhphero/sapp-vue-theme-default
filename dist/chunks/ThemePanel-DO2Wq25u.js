import { defineComponent as E, inject as $, computed as N, ref as I, openBlock as r, createBlock as g, Teleport as A, createVNode as m, Transition as B, withCtx as F, unref as e, createElementBlock as u, createElementVNode as t, toDisplayString as a, normalizeClass as M, Fragment as d, renderList as c, createTextVNode as h, createCommentVNode as f, normalizeStyle as y } from "vue";
import { Palette as P, X as V, Maximize2 as D, RotateCcw as O, Check as j, Copy as x } from "lucide-vue-next";
import { _ as X } from "./LocaleFlag.vue_vue_type_script_setup_true_lang-D2eeZNym.js";
import { _ as H } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const R = {
  key: 0,
  class: "tp-panel",
  role: "dialog",
  "aria-label": "Tuỳ chỉnh giao diện"
}, W = { class: "tp-head" }, q = { class: "tp-note" }, G = {
  key: 0,
  class: "tp-row tp-lang"
}, J = {
  class: "tp-seg",
  role: "group"
}, K = ["aria-pressed", "onClick"], Q = { class: "tp-row" }, U = {
  class: "tp-seg",
  role: "group"
}, Y = ["aria-pressed", "onClick"], Z = { class: "tp-row" }, tt = { class: "tp-swatches" }, et = ["title", "aria-pressed", "onClick"], st = ["aria-pressed"], ot = ["value"], nt = { class: "tp-row" }, lt = { class: "tp-out" }, at = ["value"], it = { class: "tp-row" }, rt = {
  class: "tp-seg",
  role: "group"
}, ut = ["aria-pressed", "onClick"], pt = { class: "tp-row" }, dt = {
  class: "tp-seg",
  role: "group"
}, ct = ["aria-pressed", "onClick"], ht = { class: "tp-row" }, mt = { class: "tp-out" }, bt = ["value"], vt = { class: "tp-row" }, yt = { class: "tp-out" }, _t = ["value"], gt = { class: "tp-row" }, ft = ["value"], kt = ["label"], $t = ["value"], Ct = ["label"], wt = ["value"], Tt = { class: "tp-actions" }, Lt = ["disabled"], zt = /* @__PURE__ */ E({
  __name: "ThemePanel",
  setup(St) {
    const n = $("$themeConfig"), k = $("$superApp"), b = k?.$i18n, C = { vi: "Tiếng Việt", en: "English" }, w = () => {
      n.toggle(!1), k?.$router?.push("/system/theme");
    }, i = n.state, T = [
      { id: "light", label: "theme.light" },
      { id: "dark", label: "theme.dark" },
      { id: "system", label: "theme.system" }
    ], L = [{ v: 0.9, label: "theme.compact" }, { v: 1, label: "theme.normal" }, { v: 1.1, label: "theme.spacious" }], z = N(() => !!i.brand && !n.swatches.some((o) => o.hex.toLowerCase() === i.brand.toLowerCase())), v = I(!1), S = async () => {
      try {
        await navigator.clipboard.writeText(n.exportTokens()), v.value = !0, setTimeout(() => v.value = !1, 1400);
      } catch {
      }
    }, _ = (o, l, s) => `${(o - l) / (s - l) * 100}%`;
    return (o, l) => (r(), g(A, { to: "body" }, [
      m(B, { name: "tp" }, {
        default: F(() => [
          e(n).open ? (r(), u("aside", R, [
            t("header", W, [
              m(e(P), { size: 16 }),
              t("b", null, a(o.$t("shell.theme")), 1),
              t("span", q, a(e(n).locked ? o.$t("theme.locked") : o.$t("theme.savedOnDevice")), 1),
              t("button", {
                type: "button",
                class: "icon-btn",
                "aria-label": "Đóng",
                onClick: l[0] || (l[0] = (s) => e(n).toggle(!1))
              }, [
                m(e(V), { size: 16 })
              ])
            ]),
            t("div", {
              class: M(["tp-body", { "is-locked": e(n).locked }])
            }, [
              e(b) ? (r(), u("div", G, [
                t("span", null, a(o.$t("shell.language")), 1),
                t("div", J, [
                  (r(!0), u(d, null, c(e(b).availableLocales, (s) => (r(), u("button", {
                    key: s,
                    type: "button",
                    class: "flex items-center justify-center gap-1.5",
                    "aria-pressed": e(b).locale === s,
                    onClick: (p) => e(b).setLocale(s)
                  }, [
                    m(X, {
                      locale: s,
                      size: 16
                    }, null, 8, ["locale"]),
                    h(a(C[s] ?? s), 1)
                  ], 8, K))), 128))
                ])
              ])) : f("", !0),
              t("div", Q, [
                t("span", null, a(o.$t("theme.mode")), 1),
                t("div", U, [
                  (r(), u(d, null, c(T, (s) => t("button", {
                    key: s.id,
                    type: "button",
                    "aria-pressed": e(i).mode === s.id,
                    onClick: (p) => e(n).set({ mode: s.id })
                  }, a(o.$t(s.label)), 9, Y)), 64))
                ])
              ]),
              t("div", Z, [
                t("span", null, a(o.$t("theme.brand")), 1),
                t("div", tt, [
                  (r(!0), u(d, null, c(e(n).swatches, (s) => (r(), u("button", {
                    key: s.hex,
                    type: "button",
                    class: "tp-swatch",
                    title: s.name,
                    style: y({ background: s.hex }),
                    "aria-pressed": e(i).brand.toLowerCase() === s.hex.toLowerCase(),
                    onClick: (p) => e(n).set({ brand: s.hex })
                  }, null, 12, et))), 128)),
                  t("label", {
                    class: "tp-custom",
                    "aria-pressed": z.value,
                    title: "Màu tuỳ chọn"
                  }, [
                    t("input", {
                      type: "color",
                      value: e(i).brand || "#256B65",
                      onInput: l[1] || (l[1] = (s) => e(n).set({ brand: s.target.value }))
                    }, null, 40, ot)
                  ], 8, st),
                  e(i).brand ? (r(), u("button", {
                    key: 0,
                    type: "button",
                    class: "btn ghost sm",
                    onClick: l[2] || (l[2] = (s) => e(n).set({ brand: "" }))
                  }, "Mặc định")) : f("", !0)
                ])
              ]),
              t("div", nt, [
                t("span", null, [
                  h(a(o.$t("theme.fontSize")) + " ", 1),
                  t("output", lt, a(Math.round(e(i).font * 100)) + "%", 1)
                ]),
                t("input", {
                  class: "tp-range",
                  type: "range",
                  min: "0.85",
                  max: "1.2",
                  step: "0.05",
                  value: e(i).font,
                  style: y({ "--tp-fill": _(e(i).font, 0.85, 1.2) }),
                  onInput: l[3] || (l[3] = (s) => e(n).set({ font: Number(s.target.value) }))
                }, null, 44, at),
                l[8] || (l[8] = t("div", { class: "tp-scale" }, [
                  t("i", null, "Aa"),
                  t("i", null, "Aa")
                ], -1))
              ]),
              t("div", it, [
                t("span", null, a(o.$t("theme.density")), 1),
                t("div", rt, [
                  (r(), u(d, null, c(L, (s) => t("button", {
                    key: s.v,
                    type: "button",
                    "aria-pressed": e(i).density === s.v,
                    onClick: (p) => e(n).set({ density: s.v })
                  }, a(o.$t(s.label)), 9, ut)), 64))
                ])
              ]),
              t("div", pt, [
                t("span", null, a(o.$t("theme.surface")), 1),
                t("div", dt, [
                  (r(!0), u(d, null, c(e(n).surfaces, (s) => (r(), u("button", {
                    key: s.id,
                    type: "button",
                    "aria-pressed": e(i).surface === s.id,
                    onClick: (p) => e(n).set({ surface: s.id })
                  }, a(o.$t(s.label)), 9, ct))), 128))
                ])
              ]),
              t("div", ht, [
                t("span", null, [
                  h(a(o.$t("theme.radius")) + " ", 1),
                  t("output", mt, a(e(i).radius) + "px", 1)
                ]),
                t("input", {
                  class: "tp-range",
                  type: "range",
                  min: "0",
                  max: "14",
                  step: "1",
                  value: e(i).radius,
                  style: y({ "--tp-fill": _(e(i).radius, 0, 14) }),
                  onInput: l[4] || (l[4] = (s) => e(n).set({ radius: Number(s.target.value) }))
                }, null, 44, bt)
              ]),
              t("div", vt, [
                t("span", null, [
                  h(a(o.$t("theme.shadow")) + " ", 1),
                  t("output", yt, a(e(i).shadow.toFixed(1)) + "×", 1)
                ]),
                t("input", {
                  class: "tp-range",
                  type: "range",
                  min: "0",
                  max: "2",
                  step: "0.25",
                  value: e(i).shadow,
                  style: y({ "--tp-fill": _(e(i).shadow, 0, 2) }),
                  onInput: l[5] || (l[5] = (s) => e(n).set({ shadow: Number(s.target.value) }))
                }, null, 44, _t)
              ]),
              t("div", gt, [
                t("span", null, a(o.$t("theme.font")), 1),
                t("select", {
                  class: "input",
                  value: e(i).fontFamily,
                  onChange: l[6] || (l[6] = (s) => e(n).set({ fontFamily: s.target.value }))
                }, [
                  t("optgroup", {
                    label: o.$t("theme.fontsLocal")
                  }, [
                    (r(!0), u(d, null, c(e(n).fontStacks, (s, p) => (r(), u("option", {
                      key: p,
                      value: p
                    }, a(p), 9, $t))), 128))
                  ], 8, kt),
                  t("optgroup", {
                    label: o.$t("theme.fontsWeb")
                  }, [
                    (r(!0), u(d, null, c(e(n).webFonts, (s, p) => (r(), u("option", {
                      key: p,
                      value: p
                    }, a(p), 9, wt))), 128))
                  ], 8, Ct)
                ], 40, ft)
              ]),
              l[9] || (l[9] = t("div", { class: "tp-preview card" }, [
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
            t("footer", Tt, [
              t("button", {
                type: "button",
                class: "btn sm",
                title: "Theme Studio",
                onClick: w
              }, [
                m(e(D), { size: 14 }),
                h(" " + a(o.$t("theme.fullPage")), 1)
              ]),
              t("button", {
                type: "button",
                class: "btn sm",
                disabled: e(n).locked,
                onClick: l[7] || (l[7] = (s) => e(n).reset())
              }, [
                m(e(O), { size: 14 }),
                h(" " + a(o.$t("theme.reset")), 1)
              ], 8, Lt),
              t("button", {
                type: "button",
                class: "btn sm",
                onClick: S
              }, [
                v.value ? (r(), g(e(j), {
                  key: 0,
                  size: 14,
                  class: "text-success"
                })) : (r(), g(e(x), {
                  key: 1,
                  size: 14
                })),
                h(" " + a(v.value ? o.$t("theme.copied") : o.$t("theme.exportTokens")), 1)
              ])
            ])
          ])) : f("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Bt = /* @__PURE__ */ H(zt, [["__scopeId", "data-v-ba5f41d0"]]);
export {
  Bt as default
};
//# sourceMappingURL=ThemePanel-DO2Wq25u.js.map
