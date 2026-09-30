import { defineComponent as E, inject as $, computed as N, ref as I, openBlock as r, createBlock as g, Teleport as A, createVNode as m, Transition as B, withCtx as F, unref as s, createElementBlock as u, createElementVNode as t, toDisplayString as l, Fragment as d, renderList as c, createTextVNode as h, createCommentVNode as f, normalizeStyle as _ } from "vue";
import { Palette as M, X as P, Maximize2 as V, RotateCcw as D, Check as x, Copy as O } from "lucide-vue-next";
import { _ as j } from "./LocaleFlag.vue_vue_type_script_setup_true_lang-D2eeZNym.js";
import { _ as X } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const H = {
  key: 0,
  class: "tp-panel",
  role: "dialog",
  "aria-label": "Tuỳ chỉnh giao diện"
}, R = { class: "tp-head" }, W = { class: "tp-note" }, q = { class: "tp-body" }, G = {
  key: 0,
  class: "tp-row"
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
}, ct = ["aria-pressed", "onClick"], ht = { class: "tp-row" }, mt = { class: "tp-out" }, bt = ["value"], vt = { class: "tp-row" }, _t = { class: "tp-out" }, yt = ["value"], gt = { class: "tp-row" }, ft = ["value"], kt = ["label"], $t = ["value"], Ct = ["label"], wt = ["value"], Tt = { class: "tp-actions" }, Lt = /* @__PURE__ */ E({
  __name: "ThemePanel",
  setup(zt) {
    const a = $("$themeConfig"), k = $("$superApp"), b = k?.$i18n, C = { vi: "Tiếng Việt", en: "English" }, w = () => {
      a.toggle(!1), k?.$router?.push("/system/theme");
    }, i = a.state, T = [
      { id: "light", label: "theme.light" },
      { id: "dark", label: "theme.dark" },
      { id: "system", label: "theme.system" }
    ], L = [{ v: 0.9, label: "theme.compact" }, { v: 1, label: "theme.normal" }, { v: 1.1, label: "theme.spacious" }], z = N(() => !!i.brand && !a.swatches.some((o) => o.hex.toLowerCase() === i.brand.toLowerCase())), v = I(!1), S = async () => {
      try {
        await navigator.clipboard.writeText(a.exportTokens()), v.value = !0, setTimeout(() => v.value = !1, 1400);
      } catch {
      }
    }, y = (o, n, e) => `${(o - n) / (e - n) * 100}%`;
    return (o, n) => (r(), g(A, { to: "body" }, [
      m(B, { name: "tp" }, {
        default: F(() => [
          s(a).open ? (r(), u("aside", H, [
            t("header", R, [
              m(s(M), { size: 16 }),
              t("b", null, l(o.$t("shell.theme")), 1),
              t("span", W, l(o.$t("theme.savedOnDevice")), 1),
              t("button", {
                type: "button",
                class: "icon-btn",
                "aria-label": "Đóng",
                onClick: n[0] || (n[0] = (e) => s(a).toggle(!1))
              }, [
                m(s(P), { size: 16 })
              ])
            ]),
            t("div", q, [
              s(b) ? (r(), u("div", G, [
                t("span", null, l(o.$t("shell.language")), 1),
                t("div", J, [
                  (r(!0), u(d, null, c(s(b).availableLocales, (e) => (r(), u("button", {
                    key: e,
                    type: "button",
                    class: "flex items-center justify-center gap-1.5",
                    "aria-pressed": s(b).locale === e,
                    onClick: (p) => s(b).setLocale(e)
                  }, [
                    m(j, {
                      locale: e,
                      size: 16
                    }, null, 8, ["locale"]),
                    h(l(C[e] ?? e), 1)
                  ], 8, K))), 128))
                ])
              ])) : f("", !0),
              t("div", Q, [
                t("span", null, l(o.$t("theme.mode")), 1),
                t("div", U, [
                  (r(), u(d, null, c(T, (e) => t("button", {
                    key: e.id,
                    type: "button",
                    "aria-pressed": s(i).mode === e.id,
                    onClick: (p) => s(a).set({ mode: e.id })
                  }, l(o.$t(e.label)), 9, Y)), 64))
                ])
              ]),
              t("div", Z, [
                t("span", null, l(o.$t("theme.brand")), 1),
                t("div", tt, [
                  (r(!0), u(d, null, c(s(a).swatches, (e) => (r(), u("button", {
                    key: e.hex,
                    type: "button",
                    class: "tp-swatch",
                    title: e.name,
                    style: _({ background: e.hex }),
                    "aria-pressed": s(i).brand.toLowerCase() === e.hex.toLowerCase(),
                    onClick: (p) => s(a).set({ brand: e.hex })
                  }, null, 12, et))), 128)),
                  t("label", {
                    class: "tp-custom",
                    "aria-pressed": z.value,
                    title: "Màu tuỳ chọn"
                  }, [
                    t("input", {
                      type: "color",
                      value: s(i).brand || "#256B65",
                      onInput: n[1] || (n[1] = (e) => s(a).set({ brand: e.target.value }))
                    }, null, 40, ot)
                  ], 8, st),
                  s(i).brand ? (r(), u("button", {
                    key: 0,
                    type: "button",
                    class: "btn ghost sm",
                    onClick: n[2] || (n[2] = (e) => s(a).set({ brand: "" }))
                  }, "Mặc định")) : f("", !0)
                ])
              ]),
              t("div", nt, [
                t("span", null, [
                  h(l(o.$t("theme.fontSize")) + " ", 1),
                  t("output", lt, l(Math.round(s(i).font * 100)) + "%", 1)
                ]),
                t("input", {
                  class: "tp-range",
                  type: "range",
                  min: "0.85",
                  max: "1.2",
                  step: "0.05",
                  value: s(i).font,
                  style: _({ "--tp-fill": y(s(i).font, 0.85, 1.2) }),
                  onInput: n[3] || (n[3] = (e) => s(a).set({ font: Number(e.target.value) }))
                }, null, 44, at),
                n[8] || (n[8] = t("div", { class: "tp-scale" }, [
                  t("i", null, "Aa"),
                  t("i", null, "Aa")
                ], -1))
              ]),
              t("div", it, [
                t("span", null, l(o.$t("theme.density")), 1),
                t("div", rt, [
                  (r(), u(d, null, c(L, (e) => t("button", {
                    key: e.v,
                    type: "button",
                    "aria-pressed": s(i).density === e.v,
                    onClick: (p) => s(a).set({ density: e.v })
                  }, l(o.$t(e.label)), 9, ut)), 64))
                ])
              ]),
              t("div", pt, [
                t("span", null, l(o.$t("theme.surface")), 1),
                t("div", dt, [
                  (r(!0), u(d, null, c(s(a).surfaces, (e) => (r(), u("button", {
                    key: e.id,
                    type: "button",
                    "aria-pressed": s(i).surface === e.id,
                    onClick: (p) => s(a).set({ surface: e.id })
                  }, l(o.$t(e.label)), 9, ct))), 128))
                ])
              ]),
              t("div", ht, [
                t("span", null, [
                  h(l(o.$t("theme.radius")) + " ", 1),
                  t("output", mt, l(s(i).radius) + "px", 1)
                ]),
                t("input", {
                  class: "tp-range",
                  type: "range",
                  min: "0",
                  max: "14",
                  step: "1",
                  value: s(i).radius,
                  style: _({ "--tp-fill": y(s(i).radius, 0, 14) }),
                  onInput: n[4] || (n[4] = (e) => s(a).set({ radius: Number(e.target.value) }))
                }, null, 44, bt)
              ]),
              t("div", vt, [
                t("span", null, [
                  h(l(o.$t("theme.shadow")) + " ", 1),
                  t("output", _t, l(s(i).shadow.toFixed(1)) + "×", 1)
                ]),
                t("input", {
                  class: "tp-range",
                  type: "range",
                  min: "0",
                  max: "2",
                  step: "0.25",
                  value: s(i).shadow,
                  style: _({ "--tp-fill": y(s(i).shadow, 0, 2) }),
                  onInput: n[5] || (n[5] = (e) => s(a).set({ shadow: Number(e.target.value) }))
                }, null, 44, yt)
              ]),
              t("div", gt, [
                t("span", null, l(o.$t("theme.font")), 1),
                t("select", {
                  class: "input",
                  value: s(i).fontFamily,
                  onChange: n[6] || (n[6] = (e) => s(a).set({ fontFamily: e.target.value }))
                }, [
                  t("optgroup", {
                    label: o.$t("theme.fontsLocal")
                  }, [
                    (r(!0), u(d, null, c(s(a).fontStacks, (e, p) => (r(), u("option", {
                      key: p,
                      value: p
                    }, l(p), 9, $t))), 128))
                  ], 8, kt),
                  t("optgroup", {
                    label: o.$t("theme.fontsWeb")
                  }, [
                    (r(!0), u(d, null, c(s(a).webFonts, (e, p) => (r(), u("option", {
                      key: p,
                      value: p
                    }, l(p), 9, wt))), 128))
                  ], 8, Ct)
                ], 40, ft)
              ]),
              n[9] || (n[9] = t("div", { class: "tp-preview card" }, [
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
            ]),
            t("footer", Tt, [
              t("button", {
                type: "button",
                class: "btn sm",
                title: "Theme Studio",
                onClick: w
              }, [
                m(s(V), { size: 14 }),
                h(" " + l(o.$t("theme.fullPage")), 1)
              ]),
              t("button", {
                type: "button",
                class: "btn sm",
                onClick: n[7] || (n[7] = (e) => s(a).reset())
              }, [
                m(s(D), { size: 14 }),
                h(" " + l(o.$t("theme.reset")), 1)
              ]),
              t("button", {
                type: "button",
                class: "btn sm",
                onClick: S
              }, [
                v.value ? (r(), g(s(x), {
                  key: 0,
                  size: 14,
                  class: "text-success"
                })) : (r(), g(s(O), {
                  key: 1,
                  size: 14
                })),
                h(" " + l(v.value ? o.$t("theme.copied") : o.$t("theme.exportTokens")), 1)
              ])
            ])
          ])) : f("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), At = /* @__PURE__ */ X(Lt, [["__scopeId", "data-v-ac70d8ff"]]);
export {
  At as default
};
//# sourceMappingURL=ThemePanel-BGYFWrcC.js.map
