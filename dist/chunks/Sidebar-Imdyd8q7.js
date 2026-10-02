import { defineComponent as h, inject as y, computed as i, openBlock as r, createElementBlock as o, createStaticVNode as l, createElementVNode as d, Fragment as _, renderList as k, normalizeClass as n, createBlock as c, resolveDynamicComponent as w, toDisplayString as A, unref as S, createCommentVNode as N } from "vue";
import { useRouter as C, useRoute as I } from "vue-router";
import { Database as D, Settings as j, ChevronRight as E } from "lucide-vue-next";
import { _ as M } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const R = { class: "w-[280px] h-full flex flex-col border-r border-border-soft bg-muted transition-colors duration-500" }, z = { class: "flex-1 px-4 py-6 flex flex-col gap-1 overflow-y-auto custom-scrollbar" }, B = ["onClick"], P = { class: "flex items-center gap-3" }, V = /* @__PURE__ */ h({
  __name: "Sidebar",
  setup(L) {
    const p = C(), f = I(), u = y("$superApp"), x = [
      { id: "admin", label: "Admin Management", icon: D, path: "/app/admin/integrations", moduleId: "admin" },
      { id: "settings", label: "System Settings", icon: j, path: "/settings" }
    ], b = JSON.parse(localStorage.getItem("user") || "{}"), m = i(() => ["ADMIN", "SUPERADMIN"].includes(b.role)), v = i(() => x.filter((e) => e.id === "admin" && !m.value ? !1 : e.moduleId ? u.isModuleActive(e.moduleId) : !0)), g = (e) => {
      p.push(e);
    }, a = (e) => f.path.startsWith(e);
    return (e, s) => (r(), o("aside", R, [
      s[0] || (s[0] = l('<div class="h-14 px-6 flex items-center gap-3 border-b border-border-soft" data-v-fd03bde1><div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center" data-v-fd03bde1><span class="text-primary-foreground font-extrabold text-xs" data-v-fd03bde1>CN</span></div><div class="flex flex-col" data-v-fd03bde1><span class="text-[10px] font-black uppercase tracking-[0.2em] text-foreground" data-v-fd03bde1>Admin Console</span><span class="text-[8px] font-bold text-faint uppercase tracking-widest" data-v-fd03bde1>v2.4.0 (Enterprise)</span></div></div>', 1)),
      d("nav", z, [
        (r(!0), o(_, null, k(v.value, (t) => (r(), o("button", {
          key: t.id,
          onClick: ($) => g(t.id),
          class: n(["group w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300", a(t.path) ? "bg-primary shadow-lg shadow-primary/20 " : "hover:bg-sunken "])
        }, [
          d("div", P, [
            (r(), c(w(t.icon), {
              size: 18,
              class: n(a(t.path) ? "text-primary-foreground " : "text-faint group-hover:text-foreground ")
            }, null, 8, ["class"])),
            d("span", {
              class: n(["text-[12px] font-bold tracking-tight", a(t.path) ? "text-primary-foreground " : "text-faint group-hover:text-muted-foreground "])
            }, A(t.label), 3)
          ]),
          a(t.path) ? (r(), c(S(E), {
            key: 0,
            size: 14,
            class: "text-white/50"
          })) : N("", !0)
        ], 10, B))), 128))
      ]),
      s[1] || (s[1] = l('<div class="p-4 border-t border-border-soft bg-white/30" data-v-fd03bde1><div class="flex items-center gap-3 p-3 rounded-2xl bg-card border border-border-soft shadow-sm" data-v-fd03bde1><div class="w-10 h-10 rounded-xl bg-muted flex items-center justify-center font-black text-faint text-sm" data-v-fd03bde1>PN</div><div class="flex flex-col" data-v-fd03bde1><span class="text-[11px] font-black uppercase text-foreground" data-v-fd03bde1>Phuong.NH</span><span class="text-[9px] font-bold text-faint uppercase tracking-tighter" data-v-fd03bde1>System Architect</span></div></div></div>', 1))
    ]));
  }
}), U = /* @__PURE__ */ M(V, [["__scopeId", "data-v-fd03bde1"]]);
export {
  U as default
};
//# sourceMappingURL=Sidebar-Imdyd8q7.js.map
