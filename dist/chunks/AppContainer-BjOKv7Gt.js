import { defineComponent as C, inject as I, ref as i, shallowRef as P, provide as E, onBeforeUnmount as B, onActivated as $, onDeactivated as D, onMounted as N, watch as R, openBlock as c, createElementBlock as g, createBlock as _, resolveDynamicComponent as M, withCtx as j, createElementVNode as l, createCommentVNode as f, toDisplayString as z, markRaw as L } from "vue";
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
    const s = O(), k = U(), o = I("$superApp"), d = i(!1), n = i(null), p = P(null), u = i(null), v = i("");
    E(q, v);
    const h = (t) => {
      v.value = t, o?.state && (o.state.activeCssScope = t);
    };
    B(() => h(""));
    const m = async () => {
      const t = s.params.moduleId;
      if (!t || Array.isArray(t) && t.length === 0) {
        n.value = "Invalid Module Path";
        return;
      }
      const a = Array.isArray(t) ? t : t.split("/").filter(Boolean), e = o.findAppByRoute?.(a[0])?.id ?? a[0], y = a.slice(1).join("/"), A = typeof o.appPath == "function" ? o.appPath(e).split("/")[2] : a[0];
      if (A && a[0] !== A) {
        k.replace({ path: o.appPath(e, y), query: s.query, hash: s.hash });
        return;
      }
      if (e === "admin" || o.getApp?.(e)?.code === "admin") {
        const r = JSON.parse(localStorage.getItem("user") || "{}");
        if (!["ADMIN", "SUPERADMIN"].includes(r.role)) {
          console.error("🛡️ [Security] Unauthorized attempt to mount ADMIN module by role:", r.role), n.value = "Security Breach: Your current role does not have permission to access the Administration module.";
          return;
        }
      }
      if (u.value === e && d.value)
        try {
          o.runPathAction(e, y);
          return;
        } catch (r) {
          console.warn("Path action failed, attempting full reload...", r);
        }
      d.value = !1, n.value = null, p.value = null, u.value = e;
      try {
        await o.resolveModule(e);
        const r = o.getModuleEntry(e);
        if (!r) throw new Error(`Module [${e}] loaded but registered no entry component (expected"${e}.main" via registerModuleEntry / createMiniApp).`);
        h(o.getModuleCssScope?.(e) ?? e), p.value = L(r), o.runPathAction(e, y), d.value = !0, o.$hook?.emit?.("app.mount", { appId: e, moduleId: e });
      } catch (r) {
        console.error("❌ Failed to mount module:", r), n.value = `Module [${e}] failed to respond: ${r.message}`, u.value = null;
      }
    }, x = i(!0);
    let b = !1;
    const w = () => {
      const t = s.params.moduleId;
      return (Array.isArray(t) ? t[0] : String(t ?? "").split("/")[0]) ?? "";
    }, S = w();
    return $(() => {
      if (x.value = !0, !b) {
        b = !0;
        return;
      }
      u.value && h(o.getModuleCssScope?.(u.value) ?? u.value), m();
    }), D(() => {
      x.value = !1;
    }), N(() => {
      m();
    }), R(() => s.params.moduleId, () => {
      !x.value || s.name !== "AppGateway" || w() !== S || m();
    }), (t, a) => (c(), g("div", Y, [
      t.$c("ModulePageLayout") ? (c(), _(M(t.$c("ModulePageLayout")), {
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
            })) : f("", !0)
          ], 8, F)
        ]),
        _: 1
      })) : f("", !0),
      n.value ? (c(), g("div", G, [
        l("div", J, [
          a[0] || (a[0] = l("div", { class: "w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6" }, [
            l("span", { class: "text-red-500 font-black text-2xl" }, "!")
          ], -1)),
          a[1] || (a[1] = l("h2", { class: "text-[14px] font-black uppercase tracking-[0.2em] text-red-500 mb-2" }, "Bridge Access Denied", -1)),
          l("p", K, z(n.value), 1),
          l("button", {
            onClick: m,
            class: "px-6 py-2 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
          }, " Retry Connection ")
        ])
      ])) : f("", !0),
      !d.value && !n.value ? (c(), g("div", H, a[2] || (a[2] = [
        l("div", { class: "flex flex-col items-center gap-6" }, [
          l("div", { class: "w-12 h-12 border-4 border-slate-950/10 border-t-slate-950 rounded-full animate-spin" }),
          l("span", { class: "text-[10px] font-black uppercase tracking-[0.3em] text-faint animate-pulse italic" }, "Establishing Bridge...")
        ], -1)
      ]))) : f("", !0)
    ]));
  }
}), te = /* @__PURE__ */ V(Q, [["__scopeId", "data-v-93f11ad5"]]);
export {
  te as default
};
//# sourceMappingURL=AppContainer-BjOKv7Gt.js.map
