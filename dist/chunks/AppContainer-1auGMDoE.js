import { defineComponent as C, inject as P, ref as i, shallowRef as I, provide as E, onBeforeUnmount as B, onActivated as $, onDeactivated as D, onMounted as N, watch as R, openBlock as c, createElementBlock as g, createBlock as _, resolveDynamicComponent as M, withCtx as j, createElementVNode as l, createCommentVNode as m, toDisplayString as z, markRaw as L } from "vue";
import { useRoute as O, useRouter as U } from "vue-router";
import { C as q } from "./cssScope-E8ixhRbx.js";
import { _ as V } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const Y = { class: "app-container w-full h-full flex-1 flex flex-col min-h-0 overflow-hidden bg-muted transition-colors" }, F = ["data-mfe"], G = {
  key: 1,
  class: "absolute inset-0 flex items-center justify-center p-10 bg-white/80 backdrop-blur-md z-50"
}, J = { class: "max-w-md p-8 bg-card border border-red-500/20 rounded-2xl shadow-2xl flex flex-col items-center text-center" }, K = { class: "text-[12px] font-medium text-faint leading-relaxed mb-6" }, H = {
  key: 2,
  class: "absolute inset-0 flex items-center justify-center bg-muted z-50"
}, Q = /* @__PURE__ */ C({
  __name: "AppContainer",
  setup(T) {
    const s = O(), S = U(), o = P("$superApp"), d = i(!1), n = i(null), p = I(null), u = i(null), v = i("");
    E(q, v);
    const h = (e) => {
      v.value = e, o?.state && (o.state.activeCssScope = e);
    };
    B(() => h(""));
    const f = async () => {
      const e = s.params.moduleId;
      if (!e || Array.isArray(e) && e.length === 0) {
        n.value = "Invalid Module Path";
        return;
      }
      const r = Array.isArray(e) ? e : e.split("/").filter(Boolean), t = o.findAppByRoute?.(r[0])?.id ?? r[0], y = r.slice(1).join("/"), A = typeof o.appPath == "function" ? o.appPath(t).split("/")[2] : r[0];
      if (A && r[0] !== A) {
        S.replace({ path: o.appPath(t, y), query: s.query, hash: s.hash });
        return;
      }
      if (t === "admin" || o.getApp?.(t)?.code === "admin") {
        const a = JSON.parse(localStorage.getItem("user") || "{}");
        if (!["ADMIN", "SUPERADMIN"].includes(a.role)) {
          console.error("🛡️ [Security] Unauthorized attempt to mount ADMIN module by role:", a.role), n.value = "Security Breach: Your current role does not have permission to access the Administration module.";
          return;
        }
      }
      if (u.value === t && d.value)
        try {
          o.runPathAction(t, y);
          return;
        } catch (a) {
          console.warn("Path action failed, attempting full reload...", a);
        }
      d.value = !1, n.value = null, p.value = null, u.value = t;
      try {
        await o.resolveModule(t);
        const a = o.getModuleEntry(t);
        if (!a) throw new Error(`Module [${t}] loaded but registered no entry component (expected"${t}.main" via registerModuleEntry / createMiniApp).`);
        h(o.getModuleCssScope?.(t) ?? t), p.value = L(a), o.runPathAction(t, y), d.value = !0;
      } catch (a) {
        console.error("❌ Failed to mount module:", a), n.value = `Module [${t}] failed to respond: ${a.message}`, u.value = null;
      }
    }, x = i(!0);
    let b = !1;
    const w = () => {
      const e = s.params.moduleId;
      return (Array.isArray(e) ? e[0] : String(e ?? "").split("/")[0]) ?? "";
    }, k = w();
    return $(() => {
      if (x.value = !0, !b) {
        b = !0;
        return;
      }
      u.value && h(o.getModuleCssScope?.(u.value) ?? u.value), f();
    }), D(() => {
      x.value = !1;
    }), N(() => {
      f();
    }), R(() => s.params.moduleId, () => {
      !x.value || s.name !== "AppGateway" || w() !== k || f();
    }), (e, r) => (c(), g("div", Y, [
      e.$c("ModulePageLayout") ? (c(), _(M(e.$c("ModulePageLayout")), {
        key: 0,
        class: "flex-1 w-full h-full min-h-0"
      }, {
        default: j(() => [
          l("div", {
            id: "module-viewport",
            "data-mfe": v.value || void 0,
            class: "flex-1 w-full h-full flex flex-col overflow-hidden min-h-0"
          }, [
            p.value ? (c(), _(M(p.value), {
              key: 0,
              class: "flex-1 w-full h-full min-h-0 flex flex-col"
            })) : m("", !0)
          ], 8, F)
        ]),
        _: 1
      })) : m("", !0),
      n.value ? (c(), g("div", G, [
        l("div", J, [
          r[0] || (r[0] = l("div", { class: "w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6" }, [
            l("span", { class: "text-red-500 font-black text-2xl" }, "!")
          ], -1)),
          r[1] || (r[1] = l("h2", { class: "text-[14px] font-black uppercase tracking-[0.2em] text-red-500 mb-2" }, "Bridge Access Denied", -1)),
          l("p", K, z(n.value), 1),
          l("button", {
            onClick: f,
            class: "px-6 py-2 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
          }, " Retry Connection ")
        ])
      ])) : m("", !0),
      !d.value && !n.value ? (c(), g("div", H, r[2] || (r[2] = [
        l("div", { class: "flex flex-col items-center gap-6" }, [
          l("div", { class: "w-12 h-12 border-4 border-slate-950/10 border-t-slate-950 rounded-full animate-spin" }),
          l("span", { class: "text-[10px] font-black uppercase tracking-[0.3em] text-faint animate-pulse italic" }, "Establishing Bridge...")
        ], -1)
      ]))) : m("", !0)
    ]));
  }
}), te = /* @__PURE__ */ V(Q, [["__scopeId", "data-v-6e23a020"]]);
export {
  te as default
};
//# sourceMappingURL=AppContainer-1auGMDoE.js.map
