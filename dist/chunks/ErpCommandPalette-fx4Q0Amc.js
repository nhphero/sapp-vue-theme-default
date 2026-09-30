import { defineComponent as h, inject as _, ref as c, computed as k, onMounted as w, onUnmounted as S, openBlock as a, createBlock as u, Teleport as C, createElementBlock as r, createElementVNode as e, createVNode as E, unref as A, withDirectives as N, vModelText as D, Fragment as M, renderList as z, resolveDynamicComponent as L, toDisplayString as p, createCommentVNode as m } from "vue";
import { Layout as f, Zap as j, Settings as I, Search as K } from "lucide-vue-next";
import { _ as P } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const T = {
  key: 0,
  class: "fixed inset-0 z-[999] flex items-start justify-center pt-[15vh] px-4"
}, V = { class: "relative w-full max-w-2xl bg-card border border-border-soft rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-200" }, $ = { class: "h-14 px-5 flex items-center gap-4 border-b border-border-soft" }, B = { class: "max-h-[60vh] overflow-y-auto p-2 flex flex-col gap-1 custom-scrollbar" }, O = ["onClick"], U = { class: "flex items-center gap-4" }, G = { class: "w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-faint group-hover:text-foreground transition-all" }, F = { class: "flex flex-col" }, J = { class: "text-[13px] font-bold text-foreground leading-none" }, Q = { class: "text-[10px] font-bold text-faint uppercase tracking-widest mt-1" }, R = /* @__PURE__ */ h({
  __name: "ErpCommandPalette",
  setup(W) {
    const g = _("$superApp"), s = c(!1), l = c(""), i = () => {
      s.value = !s.value;
    }, x = JSON.parse(localStorage.getItem("user") || "{}"), v = ["ADMIN", "SUPERADMIN"].includes(x.role), b = k(() => {
      const t = [
        { id: "m.workspace", label: "Go to Workspace Management", icon: f, category: "Navigation" },
        { id: "action.clear-cache", label: "Clear System Cache", icon: j, category: "Actions" }
      ];
      return v && (t.unshift({ id: "m.admin", label: "Go to Admin Management", icon: f, category: "Navigation" }), t.push({ id: "action.settings", label: "Open System Settings", icon: I, category: "Settings" })), t;
    }), d = (t) => {
      (t.metaKey || t.ctrlKey) && t.key === "k" && (t.preventDefault(), i()), t.key === "Escape" && s.value && (s.value = !1);
    };
    w(() => {
      window.addEventListener("keydown", d), g.registerCommand({
        id: "core.toggle-palette",
        name: "Toggle Command Palette",
        category: "System",
        handler: i
      });
    }), S(() => {
      window.removeEventListener("keydown", d);
    });
    const y = (t) => {
      console.log("🚀 Executing:", t.id), s.value = !1;
    };
    return (t, o) => (a(), u(C, { to: "body" }, [
      s.value ? (a(), r("div", T, [
        e("div", {
          class: "absolute inset-0 bg-slate-950/40 backdrop-blur-sm animate-in fade-in duration-300",
          onClick: o[0] || (o[0] = (n) => s.value = !1)
        }),
        e("div", V, [
          e("div", $, [
            E(A(K), {
              size: 18,
              class: "text-faint"
            }),
            N(e("input", {
              "onUpdate:modelValue": o[1] || (o[1] = (n) => l.value = n),
              placeholder: "Type a command or search hub...",
              class: "flex-1 bg-transparent border-none outline-none text-foreground text-[14px] font-medium",
              autofocus: ""
            }, null, 512), [
              [D, l.value]
            ]),
            o[2] || (o[2] = e("kbd", { class: "px-2 py-1 bg-muted rounded border border-border-soft text-[9px] font-black tracking-widest uppercase" }, "Esc", -1))
          ]),
          e("div", B, [
            (a(!0), r(M, null, z(b.value, (n) => (a(), r("div", {
              key: n.id,
              onClick: (Z) => y(n),
              class: "flex items-center justify-between px-4 py-3 rounded-xl hover:bg-muted cursor-pointer transition-all group"
            }, [
              e("div", U, [
                e("div", G, [
                  (a(), u(L(n.icon), { size: 16 }))
                ]),
                e("div", F, [
                  e("span", J, p(n.label), 1),
                  e("span", Q, p(n.category), 1)
                ])
              ]),
              m("", !0)
            ], 8, O))), 128))
          ]),
          o[3] || (o[3] = e("div", { class: "px-5 py-3 bg-muted border-t border-border-soft flex items-center gap-4" }, [
            e("div", { class: "flex items-center gap-1.5 grayscale opacity-50" }, [
              e("div", { class: "w-2 h-2 rounded-full bg-green-500 animate-pulse" }),
              e("span", { class: "text-[9px] font-black uppercase tracking-tighter" }, "System Kernel v2.4.0 (Synchronized)")
            ])
          ], -1))
        ])
      ])) : m("", !0)
    ]));
  }
}), Y = /* @__PURE__ */ P(R, [["__scopeId", "data-v-f3dd53c7"]]);
export {
  Y as default
};
//# sourceMappingURL=ErpCommandPalette-fx4Q0Amc.js.map
