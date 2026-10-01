import { defineComponent as H, computed as k, ref as r, watch as D, onBeforeUnmount as j, openBlock as n, createBlock as C, unref as i, normalizeProps as O, mergeProps as Y, withCtx as R, renderSlot as G, createElementBlock as d, normalizeClass as p, createElementVNode as v, withKeys as J, withModifiers as Q, toDisplayString as E, createVNode as S, Teleport as W, Transition as X, normalizeStyle as Z, withDirectives as ee, vModelText as te, createCommentVNode as b, Fragment as ae, renderList as oe, nextTick as M } from "vue";
import { u as le } from "./cssScope-E8ixhRbx.js";
import { useForwardPropsEmits as ne, SelectRoot as se } from "radix-vue";
import { ChevronDown as re, Search as ie, Check as ue } from "lucide-vue-next";
import { cn as P } from "../index.js";
import { _ as de } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const ce = ["disabled", "aria-expanded", "aria-invalid"], pe = ["data-portal"], ve = {
  key: 0,
  class: "pop-search"
}, fe = ["placeholder"], me = { class: "overflow-y-auto min-h-0" }, he = ["aria-selected", "aria-disabled", "data-hi", "onMouseenter", "onClick"], we = { class: "truncate" }, ye = {
  key: 0,
  class: "px-3 py-4 text-sm text-faint text-center"
}, ke = /* @__PURE__ */ H({
  __name: "Select",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    defaultValue: {},
    modelValue: {},
    dir: {},
    name: {},
    autocomplete: {},
    disabled: { type: Boolean },
    required: { type: Boolean },
    options: {},
    placeholder: {},
    showSearch: { type: Boolean, default: !1 },
    searchPlaceholder: {},
    size: {},
    invalid: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue", "update:open", "change"],
  setup(q, { emit: A }) {
    const K = le(), s = q, g = A, N = ne(s, g), T = k(() => Array.isArray(s.options)), f = k(() => (s.options ?? []).map((e) => typeof e == "string" ? { label: e, value: e } : e)), z = k(() => f.value.find((e) => e.value === s.modelValue)), a = r(!1), c = r(""), o = r(0), m = r(null), V = r(null), h = r(null), w = r({ top: 0, left: 0, width: 0 }), y = k(() => {
      const e = c.value.trim().toLowerCase();
      return e ? f.value.filter((t) => `${t.label} ${t.value}`.toLowerCase().includes(e)) : f.value;
    }), u = () => {
      const e = m.value?.getBoundingClientRect();
      if (!e) return;
      const t = window.innerHeight - e.bottom;
      w.value = { top: t < 240 && e.top > t ? e.top - 4 : e.bottom + 4, left: e.left, width: e.width }, L.value = t < 240 && e.top > t;
    }, L = r(!1), B = async () => {
      s.disabled || (a.value = !a.value, a.value && (c.value = "", o.value = Math.max(0, f.value.findIndex((e) => e.value === s.modelValue)), u(), await M(), s.showSearch ? V.value?.focus() : h.value?.focus()));
    }, U = () => {
      a.value = !1, m.value?.focus();
    }, $ = (e) => {
      e.disabled || (g("update:modelValue", e.value), g("change", e.value), a.value = !1);
    }, I = (e) => {
      if (e.key === "Escape") {
        e.preventDefault(), U();
        return;
      }
      if (e.key === "ArrowDown")
        e.preventDefault(), o.value = Math.min(y.value.length - 1, o.value + 1);
      else if (e.key === "ArrowUp")
        e.preventDefault(), o.value = Math.max(0, o.value - 1);
      else if (e.key === "Enter") {
        e.preventDefault();
        const t = y.value[o.value];
        t && $(t);
      } else return;
      M(() => h.value?.querySelector('[data-hi="true"]')?.scrollIntoView({ block: "nearest" }));
    };
    D(c, () => {
      o.value = 0;
    });
    const x = (e) => {
      const t = e.target;
      m.value?.contains(t) || h.value?.contains(t) || (a.value = !1);
    };
    return D(a, (e) => {
      e ? (document.addEventListener("mousedown", x, !0), window.addEventListener("scroll", u, !0), window.addEventListener("resize", u)) : (document.removeEventListener("mousedown", x, !0), window.removeEventListener("scroll", u, !0), window.removeEventListener("resize", u));
    }), j(() => {
      document.removeEventListener("mousedown", x, !0), window.removeEventListener("scroll", u, !0), window.removeEventListener("resize", u);
    }), (e, t) => T.value ? (n(), d("div", {
      key: 1,
      class: p(i(P)("relative", s.class)),
      "data-select": ""
    }, [
      v("button", {
        ref_key: "triggerRef",
        ref: m,
        type: "button",
        disabled: e.disabled,
        "aria-expanded": a.value,
        "aria-haspopup": "listbox",
        "aria-invalid": e.invalid || void 0,
        class: p(i(P)("input flex items-center justify-between gap-2 text-left cursor-pointer", e.size === "sm" && "sm", e.size === "lg" && "lg")),
        onClick: B,
        onKeydown: t[0] || (t[0] = J(Q((l) => !a.value && B(), ["prevent"]), ["down"]))
      }, [
        v("span", {
          class: p(["truncate", !z.value && "text-faint"])
        }, E(z.value?.label ?? e.placeholder ?? "—"), 3),
        S(i(re), {
          size: 14,
          class: p(["shrink-0 text-faint transition-transform", a.value && "rotate-180"])
        }, null, 8, ["class"])
      ], 42, ce),
      (n(), C(W, { to: "body" }, [
        S(X, { name: "pop" }, {
          default: R(() => [
            a.value ? (n(), d("div", {
              key: 0,
              ref_key: "panelRef",
              ref: h,
              "data-portal": i(K),
              tabindex: "-1",
              role: "listbox",
              class: "pop fixed z-[500] outline-none flex flex-col",
              style: Z({ top: `${w.value.top}px`, left: `${w.value.left}px`, width: `${w.value.width}px`, maxHeight: "280px", transform: L.value ? "translateY(-100%)" : void 0 }),
              onKeydown: I
            }, [
              e.showSearch ? (n(), d("div", ve, [
                S(i(ie), {
                  size: 14,
                  class: "text-faint shrink-0"
                }),
                ee(v("input", {
                  ref_key: "searchRef",
                  ref: V,
                  "onUpdate:modelValue": t[1] || (t[1] = (l) => c.value = l),
                  type: "search",
                  autocomplete: "off",
                  placeholder: e.searchPlaceholder || e.$t?.("common.search") || "Search…"
                }, null, 8, fe), [
                  [te, c.value]
                ])
              ])) : b("", !0),
              v("div", me, [
                (n(!0), d(ae, null, oe(y.value, (l, _) => (n(), d("button", {
                  key: l.value,
                  type: "button",
                  role: "option",
                  class: p(["pop-item", _ === o.value && "hi"]),
                  "aria-selected": l.value === e.modelValue,
                  "aria-disabled": l.disabled || void 0,
                  "data-hi": _ === o.value || void 0,
                  onMouseenter: (F) => o.value = _,
                  onClick: (F) => $(l)
                }, [
                  v("span", we, E(l.label), 1),
                  l.value === e.modelValue ? (n(), C(i(ue), {
                    key: 0,
                    size: 14,
                    class: "ml-auto text-primary shrink-0"
                  })) : b("", !0)
                ], 42, he))), 128)),
                y.value.length ? b("", !0) : (n(), d("div", ye, E(e.$t?.("common.empty") || "No results"), 1))
              ])
            ], 44, pe)) : b("", !0)
          ]),
          _: 1
        })
      ]))
    ], 2)) : (n(), C(i(se), O(Y({ key: 0 }, i(N))), {
      default: R(() => [
        G(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16));
  }
}), Se = /* @__PURE__ */ de(ke, [["__scopeId", "data-v-58fab78e"]]);
export {
  Se as default
};
//# sourceMappingURL=Select-Br3bDwg3.js.map
