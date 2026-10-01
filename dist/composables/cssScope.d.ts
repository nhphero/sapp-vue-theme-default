import { type ComputedRef } from 'vue';
/**
 * The CSS scope a teleported surface must carry (`data-portal="<key>"`): a mini app's utilities are
 * scoped to `[data-mfe="<key>"], [data-portal="<key>"]` by `mfeScopedCssPlugin`, and a teleported
 * panel leaves the app's viewport.
 *
 * Inside a mini app the Shell's app container provides the key. Outside it, `active` (dialogs: the
 * DialogProvider renders at the Shell root even for a dialog a mini app opened) falls back to the app
 * on screen; otherwise '' — a Shell surface, no app's utilities.
 */
export declare const CSS_SCOPE_KEY = "sappCssScope";
export declare function useCssScope(options?: {
    active?: boolean;
}): ComputedRef<string>;
//# sourceMappingURL=cssScope.d.ts.map