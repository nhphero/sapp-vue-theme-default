import { defineComponent as b, inject as g, ref as p, shallowRef as w, onMounted as _, watch as k, openBlock as a, createElementBlock as f, createBlock as h, resolveDynamicComponent as y, withCtx as A, createElementVNode as l, createCommentVNode as c, toDisplayString as M, markRaw as I } from "vue";
import { useRoute as C } from "vue-router";
import { _ as E } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const P = { class: "app-container w-full h-full flex-1 flex flex-col min-h-0 overflow-hidden bg-muted transition-colors" }, $ = {
  id: "module-viewport",
  class: "flex-1 w-full h-full flex flex-col overflow-hidden min-h-0"
}, B = {
  key: 1,
  class: "absolute inset-0 flex items-center justify-center p-10 bg-white/80 backdrop-blur-md z-50"
}, D = { class: "max-w-md p-8 bg-card border border-red-500/20 rounded-2xl shadow-2xl flex flex-col items-center text-center" }, N = { class: "text-[12px] font-medium text-faint leading-relaxed mb-6" }, S = {
  key: 2,
  class: "absolute inset-0 flex items-center justify-center bg-muted z-50"
}, j = /* @__PURE__ */ b({
  __name: "AppContainer",
  setup(R) {
    const x = C(), s = g("$superApp"), i = p(!1), n = p(null), u = w(null), d = p(null), m = async () => {
      const o = x.params.moduleId;
      if (!o || Array.isArray(o) && o.length === 0) {
        n.value = "Invalid Module Path";
        return;
      }
      const r = Array.isArray(o) ? o : o.split("/").filter(Boolean), e = r[0], v = r.slice(1).join("/");
      if (e === "admin") {
        const t = JSON.parse(localStorage.getItem("user") || "{}");
        if (!["ADMIN", "SUPERADMIN"].includes(t.role)) {
          console.error("🛡️ [Security] Unauthorized attempt to mount ADMIN module by role:", t.role), n.value = "Security Breach: Your current role does not have permission to access the Administration module.";
          return;
        }
      }
      if (d.value === e && i.value)
        try {
          s.runPathAction(e, v);
          return;
        } catch (t) {
          console.warn("Path action failed, attempting full reload...", t);
        }
      i.value = !1, n.value = null, u.value = null, d.value = e;
      try {
        await s.resolveModule(e);
        const t = s.getModuleEntry(e);
        if (!t) throw new Error(`Module [${e}] loaded but registered no entry component (expected"${e}.main" via registerModuleEntry / createMiniApp).`);
        u.value = I(t), s.runPathAction(e, v), i.value = !0;
      } catch (t) {
        console.error("❌ Failed to mount module:", t), n.value = `Module [${e}] failed to respond: ${t.message}`, d.value = null;
      }
    };
    return _(() => {
      m();
    }), k(() => x.params.moduleId, () => {
      m();
    }), (o, r) => (a(), f("div", P, [
      o.$c("ModulePageLayout") ? (a(), h(y(o.$c("ModulePageLayout")), {
        key: 0,
        class: "flex-1 w-full h-full min-h-0"
      }, {
        default: A(() => [
          l("div", $, [
            u.value ? (a(), h(y(u.value), {
              key: 0,
              class: "flex-1 w-full h-full min-h-0 flex flex-col"
            })) : c("", !0)
          ])
        ]),
        _: 1
      })) : c("", !0),
      n.value ? (a(), f("div", B, [
        l("div", D, [
          r[0] || (r[0] = l("div", { class: "w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6" }, [
            l("span", { class: "text-red-500 font-black text-2xl" }, "!")
          ], -1)),
          r[1] || (r[1] = l("h2", { class: "text-[14px] font-black uppercase tracking-[0.2em] text-red-500 mb-2" }, "Bridge Access Denied", -1)),
          l("p", N, M(n.value), 1),
          l("button", {
            onClick: m,
            class: "px-6 py-2 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
          }, " Retry Connection ")
        ])
      ])) : c("", !0),
      !i.value && !n.value ? (a(), f("div", S, r[2] || (r[2] = [
        l("div", { class: "flex flex-col items-center gap-6" }, [
          l("div", { class: "w-12 h-12 border-4 border-slate-950/10 border-t-slate-950 rounded-full animate-spin" }),
          l("span", { class: "text-[10px] font-black uppercase tracking-[0.3em] text-faint animate-pulse italic" }, "Establishing Bridge...")
        ], -1)
      ]))) : c("", !0)
    ]));
  }
}), V = /* @__PURE__ */ E(j, [["__scopeId", "data-v-c6dd5389"]]);
export {
  V as default
};
//# sourceMappingURL=AppContainer-LSa7vCxm.js.map
