import { defineComponent as h, inject as k, computed as i, openBlock as a, createElementBlock as o, createStaticVNode as l, createElementVNode as n, Fragment as y, renderList as _, normalizeClass as d, createBlock as f, resolveDynamicComponent as w, toDisplayString as A, unref as S, createCommentVNode as I } from "vue";
import { useRouter as N, useRoute as C } from "vue-router";
import { Database as D, Globe as M, Settings as j, ChevronRight as E } from "lucide-vue-next";
import { _ as R } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const z = { class: "w-[280px] h-full flex flex-col border-r border-border-soft bg-muted transition-colors duration-500" }, B = { class: "flex-1 px-4 py-6 flex flex-col gap-1 overflow-y-auto custom-scrollbar" }, P = ["onClick"], V = { class: "flex items-center gap-3" }, L = /* @__PURE__ */ h({
  __name: "Sidebar",
  setup(W) {
    const c = N(), p = C(), u = k("$superApp"), x = [
      { id: "admin", label: "Admin Management", icon: D, path: "/app/admin/integrations", moduleId: "admin" },
      { id: "workspace", label: "Workspace Management", icon: M, path: "/app/workspace", moduleId: "workspace" },
      { id: "settings", label: "System Settings", icon: j, path: "/settings" }
    ], m = JSON.parse(localStorage.getItem("user") || "{}"), v = i(() => ["ADMIN", "SUPERADMIN"].includes(m.role)), g = i(() => x.filter((e) => e.id === "admin" && !v.value ? !1 : e.moduleId ? u.isModuleActive(e.moduleId) : !0)), b = (e) => {
      c.push(e);
    }, r = (e) => p.path.startsWith(e);
    return (e, s) => (a(), o("aside", z, [
      s[0] || (s[0] = l('<div class="h-14 px-6 flex items-center gap-3 border-b border-border-soft" data-v-41f3ff25><div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center" data-v-41f3ff25><span class="text-primary-foreground font-extrabold text-xs" data-v-41f3ff25>CN</span></div><div class="flex flex-col" data-v-41f3ff25><span class="text-[10px] font-black uppercase tracking-[0.2em] text-foreground" data-v-41f3ff25>Admin Console</span><span class="text-[8px] font-bold text-faint uppercase tracking-widest" data-v-41f3ff25>v2.4.0 (Enterprise)</span></div></div>', 1)),
      n("nav", B, [
        (a(!0), o(y, null, _(g.value, (t) => (a(), o("button", {
          key: t.id,
          onClick: ($) => b(t.id),
          class: d(["group w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300", r(t.path) ? "bg-primary shadow-lg shadow-primary/20 " : "hover:bg-sunken "])
        }, [
          n("div", V, [
            (a(), f(w(t.icon), {
              size: 18,
              class: d(r(t.path) ? "text-primary-foreground " : "text-faint group-hover:text-foreground ")
            }, null, 8, ["class"])),
            n("span", {
              class: d(["text-[12px] font-bold tracking-tight", r(t.path) ? "text-primary-foreground " : "text-faint group-hover:text-muted-foreground "])
            }, A(t.label), 3)
          ]),
          r(t.path) ? (a(), f(S(E), {
            key: 0,
            size: 14,
            class: "text-white/50"
          })) : I("", !0)
        ], 10, P))), 128))
      ]),
      s[1] || (s[1] = l('<div class="p-4 border-t border-border-soft bg-white/30" data-v-41f3ff25><div class="flex items-center gap-3 p-3 rounded-2xl bg-card border border-border-soft shadow-sm" data-v-41f3ff25><div class="w-10 h-10 rounded-xl bg-muted flex items-center justify-center font-black text-faint text-sm" data-v-41f3ff25>PN</div><div class="flex flex-col" data-v-41f3ff25><span class="text-[11px] font-black uppercase text-foreground" data-v-41f3ff25>Phuong.NH</span><span class="text-[9px] font-bold text-faint uppercase tracking-tighter" data-v-41f3ff25>System Architect</span></div></div></div>', 1))
    ]));
  }
}), O = /* @__PURE__ */ R(L, [["__scopeId", "data-v-41f3ff25"]]);
export {
  O as default
};
//# sourceMappingURL=Sidebar-CCmpwaOA.js.map
