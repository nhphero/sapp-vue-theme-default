import { defineComponent as A, inject as M, ref as d, shallowRef as k, provide as C, onBeforeUnmount as S, onMounted as P, watch as E, openBlock as s, createElementBlock as x, createBlock as b, resolveDynamicComponent as w, withCtx as I, createElementVNode as a, createCommentVNode as p, toDisplayString as B, markRaw as $ } from "vue";
import { useRoute as N, useRouter as R } from "vue-router";
import { C as D } from "./cssScope-E8ixhRbx.js";
import { _ as j } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const z = { class: "app-container w-full h-full flex-1 flex flex-col min-h-0 overflow-hidden bg-muted transition-colors" }, L = ["data-mfe"], U = {
  key: 1,
  class: "absolute inset-0 flex items-center justify-center p-10 bg-white/80 backdrop-blur-md z-50"
}, q = { class: "max-w-md p-8 bg-card border border-red-500/20 rounded-2xl shadow-2xl flex flex-col items-center text-center" }, O = { class: "text-[12px] font-medium text-faint leading-relaxed mb-6" }, V = {
  key: 2,
  class: "absolute inset-0 flex items-center justify-center bg-muted z-50"
}, Y = /* @__PURE__ */ A({
  __name: "AppContainer",
  setup(F) {
    const i = N(), _ = R(), t = M("$superApp"), u = d(!1), n = d(null), c = k(null), f = d(null), m = d("");
    C(D, m);
    const y = (o) => {
      m.value = o, t?.state && (t.state.activeCssScope = o);
    };
    S(() => y(""));
    const h = async () => {
      const o = i.params.moduleId;
      if (!o || Array.isArray(o) && o.length === 0) {
        n.value = "Invalid Module Path";
        return;
      }
      const l = Array.isArray(o) ? o : o.split("/").filter(Boolean), e = t.findAppByRoute?.(l[0])?.id ?? l[0], v = l.slice(1).join("/"), g = typeof t.appPath == "function" ? t.appPath(e).split("/")[2] : l[0];
      if (g && l[0] !== g) {
        _.replace({ path: t.appPath(e, v), query: i.query, hash: i.hash });
        return;
      }
      if (e === "admin" || t.getApp?.(e)?.code === "admin") {
        const r = JSON.parse(localStorage.getItem("user") || "{}");
        if (!["ADMIN", "SUPERADMIN"].includes(r.role)) {
          console.error("🛡️ [Security] Unauthorized attempt to mount ADMIN module by role:", r.role), n.value = "Security Breach: Your current role does not have permission to access the Administration module.";
          return;
        }
      }
      if (f.value === e && u.value)
        try {
          t.runPathAction(e, v);
          return;
        } catch (r) {
          console.warn("Path action failed, attempting full reload...", r);
        }
      u.value = !1, n.value = null, c.value = null, f.value = e;
      try {
        await t.resolveModule(e);
        const r = t.getModuleEntry(e);
        if (!r) throw new Error(`Module [${e}] loaded but registered no entry component (expected"${e}.main" via registerModuleEntry / createMiniApp).`);
        y(t.getModuleCssScope?.(e) ?? e), c.value = $(r), t.runPathAction(e, v), u.value = !0;
      } catch (r) {
        console.error("❌ Failed to mount module:", r), n.value = `Module [${e}] failed to respond: ${r.message}`, f.value = null;
      }
    };
    return P(() => {
      h();
    }), E(() => i.params.moduleId, () => {
      h();
    }), (o, l) => (s(), x("div", z, [
      o.$c("ModulePageLayout") ? (s(), b(w(o.$c("ModulePageLayout")), {
        key: 0,
        class: "flex-1 w-full h-full min-h-0"
      }, {
        default: I(() => [
          a("div", {
            id: "module-viewport",
            "data-mfe": m.value || void 0,
            class: "flex-1 w-full h-full flex flex-col overflow-hidden min-h-0"
          }, [
            c.value ? (s(), b(w(c.value), {
              key: 0,
              class: "flex-1 w-full h-full min-h-0 flex flex-col"
            })) : p("", !0)
          ], 8, L)
        ]),
        _: 1
      })) : p("", !0),
      n.value ? (s(), x("div", U, [
        a("div", q, [
          l[0] || (l[0] = a("div", { class: "w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6" }, [
            a("span", { class: "text-red-500 font-black text-2xl" }, "!")
          ], -1)),
          l[1] || (l[1] = a("h2", { class: "text-[14px] font-black uppercase tracking-[0.2em] text-red-500 mb-2" }, "Bridge Access Denied", -1)),
          a("p", O, B(n.value), 1),
          a("button", {
            onClick: h,
            class: "px-6 py-2 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
          }, " Retry Connection ")
        ])
      ])) : p("", !0),
      !u.value && !n.value ? (s(), x("div", V, l[2] || (l[2] = [
        a("div", { class: "flex flex-col items-center gap-6" }, [
          a("div", { class: "w-12 h-12 border-4 border-slate-950/10 border-t-slate-950 rounded-full animate-spin" }),
          a("span", { class: "text-[10px] font-black uppercase tracking-[0.3em] text-faint animate-pulse italic" }, "Establishing Bridge...")
        ], -1)
      ]))) : p("", !0)
    ]));
  }
}), Q = /* @__PURE__ */ j(Y, [["__scopeId", "data-v-3587092a"]]);
export {
  Q as default
};
//# sourceMappingURL=AppContainer-irTvFfYX.js.map
