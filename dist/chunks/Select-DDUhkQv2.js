import { defineComponent as F, computed as k, ref as r, watch as D, onBeforeUnmount as H, openBlock as n, createBlock as _, unref as u, normalizeProps as j, mergeProps as O, withCtx as R, renderSlot as Y, createElementBlock as d, normalizeClass as v, createElementVNode as p, withKeys as G, withModifiers as J, toDisplayString as z, createVNode as C, Teleport as Q, Transition as W, normalizeStyle as X, withDirectives as Z, vModelText as ee, createCommentVNode as b, Fragment as te, renderList as ae, nextTick as M } from "vue";
import { useForwardPropsEmits as le, SelectRoot as oe } from "radix-vue";
import { ChevronDown as ne, Search as se, Check as re } from "lucide-vue-next";
import { cn as P } from "../index.js";
import { _ as ie } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const ue = ["disabled", "aria-expanded", "aria-invalid"], de = {
  key: 0,
  class: "pop-search"
}, ce = ["placeholder"], ve = { class: "overflow-y-auto min-h-0" }, pe = ["aria-selected", "aria-disabled", "data-hi", "onMouseenter", "onClick"], fe = { class: "truncate" }, me = {
  key: 0,
  class: "px-3 py-4 text-sm text-faint text-center"
}, he = /* @__PURE__ */ F({
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
    const s = q, g = A, K = le(s, g), N = k(() => Array.isArray(s.options)), f = k(() => (s.options ?? []).map((e) => typeof e == "string" ? { label: e, value: e } : e)), V = k(() => f.value.find((e) => e.value === s.modelValue)), a = r(!1), c = r(""), l = r(0), m = r(null), L = r(null), h = r(null), w = r({ top: 0, left: 0, width: 0 }), y = k(() => {
      const e = c.value.trim().toLowerCase();
      return e ? f.value.filter((t) => `${t.label} ${t.value}`.toLowerCase().includes(e)) : f.value;
    }), i = () => {
      const e = m.value?.getBoundingClientRect();
      if (!e) return;
      const t = window.innerHeight - e.bottom;
      w.value = { top: t < 240 && e.top > t ? e.top - 4 : e.bottom + 4, left: e.left, width: e.width }, S.value = t < 240 && e.top > t;
    }, S = r(!1), B = async () => {
      s.disabled || (a.value = !a.value, a.value && (c.value = "", l.value = Math.max(0, f.value.findIndex((e) => e.value === s.modelValue)), i(), await M(), s.showSearch ? L.value?.focus() : h.value?.focus()));
    }, T = () => {
      a.value = !1, m.value?.focus();
    }, $ = (e) => {
      e.disabled || (g("update:modelValue", e.value), g("change", e.value), a.value = !1);
    }, U = (e) => {
      if (e.key === "Escape") {
        e.preventDefault(), T();
        return;
      }
      if (e.key === "ArrowDown")
        e.preventDefault(), l.value = Math.min(y.value.length - 1, l.value + 1);
      else if (e.key === "ArrowUp")
        e.preventDefault(), l.value = Math.max(0, l.value - 1);
      else if (e.key === "Enter") {
        e.preventDefault();
        const t = y.value[l.value];
        t && $(t);
      } else return;
      M(() => h.value?.querySelector('[data-hi="true"]')?.scrollIntoView({ block: "nearest" }));
    };
    D(c, () => {
      l.value = 0;
    });
    const x = (e) => {
      const t = e.target;
      m.value?.contains(t) || h.value?.contains(t) || (a.value = !1);
    };
    return D(a, (e) => {
      e ? (document.addEventListener("mousedown", x, !0), window.addEventListener("scroll", i, !0), window.addEventListener("resize", i)) : (document.removeEventListener("mousedown", x, !0), window.removeEventListener("scroll", i, !0), window.removeEventListener("resize", i));
    }), H(() => {
      document.removeEventListener("mousedown", x, !0), window.removeEventListener("scroll", i, !0), window.removeEventListener("resize", i);
    }), (e, t) => N.value ? (n(), d("div", {
      key: 1,
      class: v(u(P)("relative", s.class)),
      "data-select": ""
    }, [
      p("button", {
        ref_key: "triggerRef",
        ref: m,
        type: "button",
        disabled: e.disabled,
        "aria-expanded": a.value,
        "aria-haspopup": "listbox",
        "aria-invalid": e.invalid || void 0,
        class: v(u(P)("input flex items-center justify-between gap-2 text-left cursor-pointer", e.size === "sm" && "sm", e.size === "lg" && "lg")),
        onClick: B,
        onKeydown: t[0] || (t[0] = G(J((o) => !a.value && B(), ["prevent"]), ["down"]))
      }, [
        p("span", {
          class: v(["truncate", !V.value && "text-faint"])
        }, z(V.value?.label ?? e.placeholder ?? "—"), 3),
        C(u(ne), {
          size: 14,
          class: v(["shrink-0 text-faint transition-transform", a.value && "rotate-180"])
        }, null, 8, ["class"])
      ], 42, ue),
      (n(), _(Q, { to: "body" }, [
        C(W, { name: "pop" }, {
          default: R(() => [
            a.value ? (n(), d("div", {
              key: 0,
              ref_key: "panelRef",
              ref: h,
              "data-portal": "",
              tabindex: "-1",
              role: "listbox",
              class: "pop fixed z-[500] outline-none flex flex-col",
              style: X({ top: `${w.value.top}px`, left: `${w.value.left}px`, width: `${w.value.width}px`, maxHeight: "280px", transform: S.value ? "translateY(-100%)" : void 0 }),
              onKeydown: U
            }, [
              e.showSearch ? (n(), d("div", de, [
                C(u(se), {
                  size: 14,
                  class: "text-faint shrink-0"
                }),
                Z(p("input", {
                  ref_key: "searchRef",
                  ref: L,
                  "onUpdate:modelValue": t[1] || (t[1] = (o) => c.value = o),
                  type: "search",
                  autocomplete: "off",
                  placeholder: e.searchPlaceholder || e.$t?.("common.search") || "Search…"
                }, null, 8, ce), [
                  [ee, c.value]
                ])
              ])) : b("", !0),
              p("div", ve, [
                (n(!0), d(te, null, ae(y.value, (o, E) => (n(), d("button", {
                  key: o.value,
                  type: "button",
                  role: "option",
                  class: v(["pop-item", E === l.value && "hi"]),
                  "aria-selected": o.value === e.modelValue,
                  "aria-disabled": o.disabled || void 0,
                  "data-hi": E === l.value || void 0,
                  onMouseenter: (I) => l.value = E,
                  onClick: (I) => $(o)
                }, [
                  p("span", fe, z(o.label), 1),
                  o.value === e.modelValue ? (n(), _(u(re), {
                    key: 0,
                    size: 14,
                    class: "ml-auto text-primary shrink-0"
                  })) : b("", !0)
                ], 42, pe))), 128)),
                y.value.length ? b("", !0) : (n(), d("div", me, z(e.$t?.("common.empty") || "No results"), 1))
              ])
            ], 36)) : b("", !0)
          ]),
          _: 1
        })
      ]))
    ], 2)) : (n(), _(u(oe), j(O({ key: 0 }, u(K))), {
      default: R(() => [
        Y(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16));
  }
}), xe = /* @__PURE__ */ ie(he, [["__scopeId", "data-v-aee3f2b3"]]);
export {
  xe as default
};
//# sourceMappingURL=Select-DDUhkQv2.js.map
