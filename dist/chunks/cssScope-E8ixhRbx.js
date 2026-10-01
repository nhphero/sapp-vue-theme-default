import { inject as s, computed as o } from "vue";
const c = "sappCssScope";
function n(e = {}) {
  const p = s(c, null), t = s("$superApp", null);
  return o(() => p?.value ?? (e.active ? t?.state?.activeCssScope ?? "" : ""));
}
export {
  c as C,
  n as u
};
//# sourceMappingURL=cssScope-E8ixhRbx.js.map
