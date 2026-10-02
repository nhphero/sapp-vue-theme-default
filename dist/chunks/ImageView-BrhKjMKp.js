import { defineComponent as z, ref as g, watch as E, computed as O, onBeforeUnmount as B, openBlock as s, createElementBlock as _, withKeys as I, withModifiers as m, normalizeClass as K, normalizeStyle as b, createBlock as k, unref as r, Teleport as M, createElementVNode as i, toDisplayString as h, createVNode as c, createCommentVNode as V } from "vue";
import { ImageOff as Z, ZoomOut as $, ZoomIn as L, ExternalLink as N, X as S } from "lucide-vue-next";
import { _ as D } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const T = ["role", "tabindex", "title", "onKeydown"], j = ["src", "alt"], F = ["aria-label"], U = { class: "image-viewer__bar" }, X = { class: "image-viewer__title" }, q = { class: "image-viewer__zoom" }, A = ["disabled"], G = ["disabled"], H = ["href"], J = ["src", "alt"], P = /* @__PURE__ */ z({
  __name: "ImageView",
  props: {
    src: { default: "" },
    alt: { default: "" },
    fit: { default: "contain" },
    preview: { type: Boolean, default: !0 }
  },
  setup(C) {
    const w = C, f = g(!1), d = g(!1), o = g(1), a = [0.5, 0.75, 1, 1.5, 2, 3];
    E(() => w.src, () => {
      d.value = !1;
    });
    const l = O(() => w.preview && !!w.src && !d.value), p = (e) => {
      e.key === "Escape" ? v() : e.key === "+" || e.key === "=" ? u(1) : e.key === "-" && u(-1);
    };
    function y() {
      l.value && (o.value = 1, f.value = !0, window.addEventListener("keydown", p));
    }
    function v() {
      f.value = !1, window.removeEventListener("keydown", p);
    }
    function u(e) {
      const t = a.indexOf(o.value);
      o.value = a[Math.min(a.length - 1, Math.max(0, (t === -1 ? 2 : t) + e))];
    }
    return B(() => window.removeEventListener("keydown", p)), (e, t) => (s(), _("span", {
      class: K(["image-view", l.value && "is-previewable"]),
      role: l.value ? "button" : void 0,
      tabindex: l.value ? 0 : void 0,
      title: l.value ? e.alt ? `${e.alt} — click to view` : "Click to view" : e.alt,
      "data-testid": "image-view",
      onClick: y,
      onKeydown: I(m(y, ["prevent"]), ["enter"])
    }, [
      e.src && !d.value ? (s(), _("img", {
        key: 0,
        src: e.src,
        alt: e.alt,
        style: b({ objectFit: e.fit }),
        onError: t[0] || (t[0] = (n) => d.value = !0)
      }, null, 44, j)) : (s(), k(r(Z), {
        key: 1,
        size: 20,
        class: "image-view__empty",
        "aria-hidden": "true"
      })),
      (s(), k(M, { to: "body" }, [
        f.value ? (s(), _("div", {
          key: 0,
          class: "image-viewer",
          role: "dialog",
          "aria-modal": "true",
          "aria-label": e.alt || "Image",
          "data-testid": "image-viewer",
          onClick: t[4] || (t[4] = m((n) => n.target === n.currentTarget && v(), ["stop"])),
          onKeydown: t[5] || (t[5] = m(() => {
          }, ["stop"]))
        }, [
          i("div", U, [
            i("span", X, h(e.alt), 1),
            i("span", q, h(Math.round(o.value * 100)) + "%", 1),
            i("button", {
              type: "button",
              class: "image-viewer__btn",
              title: "Zoom out (−)",
              disabled: o.value <= a[0],
              onClick: t[1] || (t[1] = (n) => u(-1))
            }, [
              c(r($), { size: 16 })
            ], 8, A),
            i("button", {
              type: "button",
              class: "image-viewer__btn",
              title: "Zoom in (+)",
              disabled: o.value >= a[a.length - 1],
              onClick: t[2] || (t[2] = (n) => u(1))
            }, [
              c(r(L), { size: 16 })
            ], 8, G),
            i("a", {
              class: "image-viewer__btn",
              href: e.src || void 0,
              target: "_blank",
              rel: "noopener",
              title: "Open the original"
            }, [
              c(r(N), { size: 16 })
            ], 8, H),
            i("button", {
              type: "button",
              class: "image-viewer__btn",
              title: "Close (Esc)",
              "data-testid": "image-viewer-close",
              onClick: v
            }, [
              c(r(S), { size: 18 })
            ])
          ]),
          i("div", {
            class: "image-viewer__stage",
            onClick: m(v, ["self"])
          }, [
            i("img", {
              src: e.src || void 0,
              alt: e.alt,
              class: "image-viewer__img",
              style: b({ transform: `scale(${o.value})` }),
              onDblclick: t[3] || (t[3] = (n) => o.value = o.value === 1 ? 2 : 1)
            }, null, 44, J)
          ])
        ], 40, F)) : V("", !0)
      ]))
    ], 42, T));
  }
}), Y = /* @__PURE__ */ D(P, [["__scopeId", "data-v-0d259d08"]]);
export {
  Y as default
};
//# sourceMappingURL=ImageView-BrhKjMKp.js.map
