import { defineComponent as M, ref as a, computed as b, onBeforeUnmount as A, openBlock as n, createElementBlock as i, Fragment as V, createElementVNode as m, createBlock as v, resolveDynamicComponent as E, createCommentVNode as k, normalizeClass as T, toDisplayString as x, createVNode as L, unref as d, Teleport as q, normalizeStyle as O, withDirectives as U, vModelText as W, renderList as F, nextTick as H } from "vue";
import { ChevronDown as K, Search as Z, Check as j } from "lucide-vue-next";
import { u as G } from "./cssScope-E8ixhRbx.js";
import { APP_ICON_NAMES as z, appIcon as $ } from "../index.js";
import { _ as J } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const Q = ["disabled", "aria-expanded"], X = ["data-portal"], Y = { class: "pop-search" }, ee = ["placeholder"], te = {
  key: 0,
  class: "icon-picker__grid"
}, oe = ["aria-selected", "title", "data-testid", "onClick"], ne = {
  key: 1,
  class: "icon-picker__empty"
}, ae = 360, ie = /* @__PURE__ */ M({
  __name: "IconPicker",
  props: {
    modelValue: {},
    placeholder: { default: "Choose an icon" },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(N, { emit: R }) {
    const h = N, S = R, B = G(), l = a(!1), u = a(""), s = a(null), _ = a(null), w = a(null), p = a({ top: 0, left: 0, width: 0 }), f = b(() => {
      const e = u.value.trim().toLowerCase();
      return e ? z.filter((t) => t.toLowerCase().includes(e.replace(/\s+/g, "")) || t.replace(/([a-z])([A-Z0-9])/g, "$1 $2").toLowerCase().includes(e)) : z;
    });
    function r() {
      const e = s.value?.getBoundingClientRect();
      if (!e) return;
      const t = Math.max(e.width, ae), o = Math.min(e.left, window.innerWidth - t - 8);
      p.value = { top: e.bottom + 4, left: Math.max(8, o), width: t };
    }
    async function D() {
      h.disabled || (u.value = "", r(), l.value = !0, window.addEventListener("scroll", r, !0), window.addEventListener("resize", r), await H(), w.value?.focus());
    }
    function c() {
      l.value = !1, window.removeEventListener("scroll", r, !0), window.removeEventListener("resize", r);
    }
    function y(e) {
      S("update:modelValue", e), c(), s.value?.focus();
    }
    function g(e) {
      const t = e.target;
      !_.value?.contains(t) && !s.value?.contains(t) && c();
    }
    function I() {
      l.value ? c() : D();
    }
    function P(e) {
      e.key === "Escape" ? (e.stopPropagation(), c(), s.value?.focus()) : e.key === "Enter" && f.value.length && (e.preventDefault(), y(f.value[0]));
    }
    window.addEventListener("mousedown", g, !0), A(() => {
      c(), window.removeEventListener("mousedown", g, !0);
    });
    const C = b(() => h.modelValue ? $(h.modelValue) : null);
    return (e, t) => (n(), i(V, null, [
      m("button", {
        ref_key: "triggerRef",
        ref: s,
        type: "button",
        class: "input icon-picker__trigger",
        disabled: e.disabled,
        "aria-expanded": l.value,
        "aria-haspopup": "listbox",
        "data-testid": "icon-picker",
        onClick: I
      }, [
        C.value ? (n(), v(E(C.value), {
          key: 0,
          size: 16,
          class: "shrink-0"
        })) : k("", !0),
        m("span", {
          class: T(["flex-1 min-w-0 truncate text-left", e.modelValue ? "" : "text-faint"])
        }, x(e.modelValue || e.placeholder), 3),
        L(d(K), {
          size: 14,
          class: "shrink-0 text-faint"
        })
      ], 8, Q),
      (n(), v(q, { to: "body" }, [
        l.value ? (n(), i("div", {
          key: 0,
          ref_key: "panelRef",
          ref: _,
          "data-portal": d(B),
          class: "pop icon-picker__panel",
          role: "listbox",
          style: O({ top: `${p.value.top}px`, left: `${p.value.left}px`, width: `${p.value.width}px` }),
          onKeydown: P
        }, [
          m("div", Y, [
            L(d(Z), {
              size: 14,
              class: "text-faint shrink-0"
            }),
            U(m("input", {
              ref_key: "searchRef",
              ref: w,
              "onUpdate:modelValue": t[0] || (t[0] = (o) => u.value = o),
              type: "search",
              placeholder: e.$t?.("common.search") || "Search…",
              autocomplete: "off",
              "data-testid": "icon-picker-search"
            }, null, 8, ee), [
              [W, u.value]
            ])
          ]),
          f.value.length ? (n(), i("div", te, [
            (n(!0), i(V, null, F(f.value, (o) => (n(), i("button", {
              key: o,
              type: "button",
              class: "icon-picker__item",
              role: "option",
              "aria-selected": o === e.modelValue,
              title: o,
              "data-testid": `icon-${o}`,
              onClick: (le) => y(o)
            }, [
              (n(), v(E(d($)(o)), { size: 18 })),
              o === e.modelValue ? (n(), v(d(j), {
                key: 0,
                size: 10,
                class: "icon-picker__check"
              })) : k("", !0)
            ], 8, oe))), 128))
          ])) : (n(), i("div", ne, x(e.$t?.("common.empty") || "Nothing found"), 1))
        ], 44, X)) : k("", !0)
      ]))
    ], 64));
  }
}), pe = /* @__PURE__ */ J(ie, [["__scopeId", "data-v-862eadfe"]]);
export {
  pe as default
};
//# sourceMappingURL=IconPicker-DbgxD0io.js.map
