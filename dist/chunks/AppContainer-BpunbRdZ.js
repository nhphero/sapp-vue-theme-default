import { defineComponent as w, inject as _, ref as c, shallowRef as A, provide as M, onBeforeUnmount as k, onMounted as C, watch as S, openBlock as s, createElementBlock as v, createBlock as g, resolveDynamicComponent as y, withCtx as E, createElementVNode as l, createCommentVNode as d, toDisplayString as I, markRaw as P } from "vue";
import { useRoute as B } from "vue-router";
import { C as $ } from "./cssScope-E8ixhRbx.js";
import { _ as D } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const N = { class: "app-container w-full h-full flex-1 flex flex-col min-h-0 overflow-hidden bg-muted transition-colors" }, j = ["data-mfe"], R = {
  key: 1,
  class: "absolute inset-0 flex items-center justify-center p-10 bg-white/80 backdrop-blur-md z-50"
}, z = { class: "max-w-md p-8 bg-card border border-red-500/20 rounded-2xl shadow-2xl flex flex-col items-center text-center" }, L = { class: "text-[12px] font-medium text-faint leading-relaxed mb-6" }, U = {
  key: 2,
  class: "absolute inset-0 flex items-center justify-center bg-muted z-50"
}, O = /* @__PURE__ */ w({
  __name: "AppContainer",
  setup(V) {
    const x = B(), n = _("$superApp"), i = c(!1), a = c(null), u = A(null), m = c(null), p = c("");
    M($, p);
    const h = (e) => {
      p.value = e, n?.state && (n.state.activeCssScope = e);
    };
    k(() => h(""));
    const f = async () => {
      const e = x.params.moduleId;
      if (!e || Array.isArray(e) && e.length === 0) {
        a.value = "Invalid Module Path";
        return;
      }
      const r = Array.isArray(e) ? e : e.split("/").filter(Boolean), t = r[0], b = r.slice(1).join("/");
      if (t === "admin") {
        const o = JSON.parse(localStorage.getItem("user") || "{}");
        if (!["ADMIN", "SUPERADMIN"].includes(o.role)) {
          console.error("🛡️ [Security] Unauthorized attempt to mount ADMIN module by role:", o.role), a.value = "Security Breach: Your current role does not have permission to access the Administration module.";
          return;
        }
      }
      if (m.value === t && i.value)
        try {
          n.runPathAction(t, b);
          return;
        } catch (o) {
          console.warn("Path action failed, attempting full reload...", o);
        }
      i.value = !1, a.value = null, u.value = null, m.value = t;
      try {
        await n.resolveModule(t);
        const o = n.getModuleEntry(t);
        if (!o) throw new Error(`Module [${t}] loaded but registered no entry component (expected"${t}.main" via registerModuleEntry / createMiniApp).`);
        h(n.getModuleCssScope?.(t) ?? t), u.value = P(o), n.runPathAction(t, b), i.value = !0;
      } catch (o) {
        console.error("❌ Failed to mount module:", o), a.value = `Module [${t}] failed to respond: ${o.message}`, m.value = null;
      }
    };
    return C(() => {
      f();
    }), S(() => x.params.moduleId, () => {
      f();
    }), (e, r) => (s(), v("div", N, [
      e.$c("ModulePageLayout") ? (s(), g(y(e.$c("ModulePageLayout")), {
        key: 0,
        class: "flex-1 w-full h-full min-h-0"
      }, {
        default: E(() => [
          l("div", {
            id: "module-viewport",
            "data-mfe": p.value || void 0,
            class: "flex-1 w-full h-full flex flex-col overflow-hidden min-h-0"
          }, [
            u.value ? (s(), g(y(u.value), {
              key: 0,
              class: "flex-1 w-full h-full min-h-0 flex flex-col"
            })) : d("", !0)
          ], 8, j)
        ]),
        _: 1
      })) : d("", !0),
      a.value ? (s(), v("div", R, [
        l("div", z, [
          r[0] || (r[0] = l("div", { class: "w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6" }, [
            l("span", { class: "text-red-500 font-black text-2xl" }, "!")
          ], -1)),
          r[1] || (r[1] = l("h2", { class: "text-[14px] font-black uppercase tracking-[0.2em] text-red-500 mb-2" }, "Bridge Access Denied", -1)),
          l("p", L, I(a.value), 1),
          l("button", {
            onClick: f,
            class: "px-6 py-2 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
          }, " Retry Connection ")
        ])
      ])) : d("", !0),
      !i.value && !a.value ? (s(), v("div", U, r[2] || (r[2] = [
        l("div", { class: "flex flex-col items-center gap-6" }, [
          l("div", { class: "w-12 h-12 border-4 border-slate-950/10 border-t-slate-950 rounded-full animate-spin" }),
          l("span", { class: "text-[10px] font-black uppercase tracking-[0.3em] text-faint animate-pulse italic" }, "Establishing Bridge...")
        ], -1)
      ]))) : d("", !0)
    ]));
  }
}), q = /* @__PURE__ */ D(O, [["__scopeId", "data-v-55e35266"]]);
export {
  q as default
};
//# sourceMappingURL=AppContainer-BpunbRdZ.js.map
