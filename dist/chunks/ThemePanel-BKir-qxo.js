import { defineComponent as E, inject as $, computed as N, ref as x, openBlock as r, createBlock as _, Teleport as I, createVNode as c, Transition as A, withCtx as B, unref as e, createElementBlock as u, createElementVNode as t, toDisplayString as a, Fragment as m, renderList as h, createTextVNode as d, createCommentVNode as f, normalizeStyle as y } from "vue";
import { Palette as M, X as P, Maximize2 as V, RotateCcw as D, Check as F, Copy as O } from "lucide-vue-next";
import { _ as j } from "./LocaleFlag.vue_vue_type_script_setup_true_lang-D2eeZNym.js";
import { _ as X } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const H = {
  key: 0,
  class: "tp-panel",
  role: "dialog",
  "aria-label": "Tuỳ chỉnh giao diện"
}, R = { class: "tp-head" }, q = { class: "tp-note" }, G = { class: "tp-body" }, J = {
  key: 0,
  class: "tp-row"
}, K = {
  class: "tp-seg",
  role: "group"
}, Q = ["aria-pressed", "onClick"], U = { class: "tp-row" }, W = {
  class: "tp-seg",
  role: "group"
}, Y = ["aria-pressed", "onClick"], Z = { class: "tp-row" }, tt = { class: "tp-swatches" }, et = ["title", "aria-pressed", "onClick"], st = ["aria-pressed"], ot = ["value"], nt = { class: "tp-row" }, at = { class: "tp-out" }, lt = ["value"], it = { class: "tp-row" }, rt = {
  class: "tp-seg",
  role: "group"
}, ut = ["aria-pressed", "onClick"], pt = { class: "tp-row" }, dt = { class: "tp-out" }, ct = ["value"], mt = { class: "tp-row" }, ht = { class: "tp-out" }, bt = ["value"], vt = { class: "tp-row" }, yt = ["value"], gt = ["value"], _t = { class: "tp-actions" }, ft = /* @__PURE__ */ E({
  __name: "ThemePanel",
  setup(kt) {
    const l = $("$themeConfig"), k = $("$superApp"), b = k?.$i18n, C = { vi: "Tiếng Việt", en: "English" }, w = () => {
      l.toggle(!1), k?.$router?.push("/system/theme");
    }, i = l.state, T = [
      { id: "light", label: "theme.light" },
      { id: "dark", label: "theme.dark" },
      { id: "system", label: "theme.system" }
    ], L = [{ v: 0.9, label: "theme.compact" }, { v: 1, label: "theme.normal" }, { v: 1.1, label: "theme.spacious" }], z = N(() => !!i.brand && !l.swatches.some((n) => n.hex.toLowerCase() === i.brand.toLowerCase())), v = x(!1), S = async () => {
      try {
        await navigator.clipboard.writeText(l.exportTokens()), v.value = !0, setTimeout(() => v.value = !1, 1400);
      } catch {
      }
    }, g = (n, o, s) => `${(n - o) / (s - o) * 100}%`;
    return (n, o) => (r(), _(I, { to: "body" }, [
      c(A, { name: "tp" }, {
        default: B(() => [
          e(l).open ? (r(), u("aside", H, [
            t("header", R, [
              c(e(M), { size: 16 }),
              t("b", null, a(n.$t("shell.theme")), 1),
              t("span", q, a(n.$t("theme.savedOnDevice")), 1),
              t("button", {
                type: "button",
                class: "icon-btn",
                "aria-label": "Đóng",
                onClick: o[0] || (o[0] = (s) => e(l).toggle(!1))
              }, [
                c(e(P), { size: 16 })
              ])
            ]),
            t("div", G, [
              e(b) ? (r(), u("div", J, [
                t("span", null, a(n.$t("shell.language")), 1),
                t("div", K, [
                  (r(!0), u(m, null, h(e(b).availableLocales, (s) => (r(), u("button", {
                    key: s,
                    type: "button",
                    class: "flex items-center justify-center gap-1.5",
                    "aria-pressed": e(b).locale === s,
                    onClick: (p) => e(b).setLocale(s)
                  }, [
                    c(j, {
                      locale: s,
                      size: 16
                    }, null, 8, ["locale"]),
                    d(a(C[s] ?? s), 1)
                  ], 8, Q))), 128))
                ])
              ])) : f("", !0),
              t("div", U, [
                t("span", null, a(n.$t("theme.mode")), 1),
                t("div", W, [
                  (r(), u(m, null, h(T, (s) => t("button", {
                    key: s.id,
                    type: "button",
                    "aria-pressed": e(i).mode === s.id,
                    onClick: (p) => e(l).set({ mode: s.id })
                  }, a(n.$t(s.label)), 9, Y)), 64))
                ])
              ]),
              t("div", Z, [
                t("span", null, a(n.$t("theme.brand")), 1),
                t("div", tt, [
                  (r(!0), u(m, null, h(e(l).swatches, (s) => (r(), u("button", {
                    key: s.hex,
                    type: "button",
                    class: "tp-swatch",
                    title: s.name,
                    style: y({ background: s.hex }),
                    "aria-pressed": e(i).brand.toLowerCase() === s.hex.toLowerCase(),
                    onClick: (p) => e(l).set({ brand: s.hex })
                  }, null, 12, et))), 128)),
                  t("label", {
                    class: "tp-custom",
                    "aria-pressed": z.value,
                    title: "Màu tuỳ chọn"
                  }, [
                    t("input", {
                      type: "color",
                      value: e(i).brand || "#256B65",
                      onInput: o[1] || (o[1] = (s) => e(l).set({ brand: s.target.value }))
                    }, null, 40, ot)
                  ], 8, st),
                  e(i).brand ? (r(), u("button", {
                    key: 0,
                    type: "button",
                    class: "btn ghost sm",
                    onClick: o[2] || (o[2] = (s) => e(l).set({ brand: "" }))
                  }, "Mặc định")) : f("", !0)
                ])
              ]),
              t("div", nt, [
                t("span", null, [
                  d(a(n.$t("theme.fontSize")) + " ", 1),
                  t("output", at, a(Math.round(e(i).font * 100)) + "%", 1)
                ]),
                t("input", {
                  class: "tp-range",
                  type: "range",
                  min: "0.85",
                  max: "1.2",
                  step: "0.05",
                  value: e(i).font,
                  style: y({ "--tp-fill": g(e(i).font, 0.85, 1.2) }),
                  onInput: o[3] || (o[3] = (s) => e(l).set({ font: Number(s.target.value) }))
                }, null, 44, lt),
                o[8] || (o[8] = t("div", { class: "tp-scale" }, [
                  t("i", null, "Aa"),
                  t("i", null, "Aa")
                ], -1))
              ]),
              t("div", it, [
                t("span", null, a(n.$t("theme.density")), 1),
                t("div", rt, [
                  (r(), u(m, null, h(L, (s) => t("button", {
                    key: s.v,
                    type: "button",
                    "aria-pressed": e(i).density === s.v,
                    onClick: (p) => e(l).set({ density: s.v })
                  }, a(n.$t(s.label)), 9, ut)), 64))
                ])
              ]),
              t("div", pt, [
                t("span", null, [
                  d(a(n.$t("theme.radius")) + " ", 1),
                  t("output", dt, a(e(i).radius) + "px", 1)
                ]),
                t("input", {
                  class: "tp-range",
                  type: "range",
                  min: "0",
                  max: "14",
                  step: "1",
                  value: e(i).radius,
                  style: y({ "--tp-fill": g(e(i).radius, 0, 14) }),
                  onInput: o[4] || (o[4] = (s) => e(l).set({ radius: Number(s.target.value) }))
                }, null, 44, ct)
              ]),
              t("div", mt, [
                t("span", null, [
                  d(a(n.$t("theme.shadow")) + " ", 1),
                  t("output", ht, a(e(i).shadow.toFixed(1)) + "×", 1)
                ]),
                t("input", {
                  class: "tp-range",
                  type: "range",
                  min: "0",
                  max: "2",
                  step: "0.25",
                  value: e(i).shadow,
                  style: y({ "--tp-fill": g(e(i).shadow, 0, 2) }),
                  onInput: o[5] || (o[5] = (s) => e(l).set({ shadow: Number(s.target.value) }))
                }, null, 44, bt)
              ]),
              t("div", vt, [
                t("span", null, a(n.$t("theme.font")), 1),
                t("select", {
                  class: "input",
                  value: e(i).fontFamily,
                  onChange: o[6] || (o[6] = (s) => e(l).set({ fontFamily: s.target.value }))
                }, [
                  (r(!0), u(m, null, h(e(l).fontStacks, (s, p) => (r(), u("option", {
                    key: p,
                    value: p
                  }, a(p), 9, gt))), 128))
                ], 40, yt)
              ]),
              o[9] || (o[9] = t("div", { class: "tp-preview card" }, [
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
            t("footer", _t, [
              t("button", {
                type: "button",
                class: "btn sm",
                title: "Theme Studio",
                onClick: w
              }, [
                c(e(V), { size: 14 }),
                d(" " + a(n.$t("theme.fullPage")), 1)
              ]),
              t("button", {
                type: "button",
                class: "btn sm",
                onClick: o[7] || (o[7] = (s) => e(l).reset())
              }, [
                c(e(D), { size: 14 }),
                d(" " + a(n.$t("theme.reset")), 1)
              ]),
              t("button", {
                type: "button",
                class: "btn sm",
                onClick: S
              }, [
                v.value ? (r(), _(e(F), {
                  key: 0,
                  size: 14,
                  class: "text-success"
                })) : (r(), _(e(O), {
                  key: 1,
                  size: 14
                })),
                d(" " + a(v.value ? n.$t("theme.copied") : n.$t("theme.exportTokens")), 1)
              ])
            ])
          ])) : f("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Lt = /* @__PURE__ */ X(ft, [["__scopeId", "data-v-fffbfdbe"]]);
export {
  Lt as default
};
//# sourceMappingURL=ThemePanel-BKir-qxo.js.map
