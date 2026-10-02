/**
 * 🪝 `shell.hook-slot` — renders what packages put in a slot of `$hook` (contracts/hooks.ts):
 *
 *   <component :is="$c('shell.hook-slot')" name="shell.menu.end" class="flex items-center gap-1" />
 *
 * Each entry's component with its props, in order; an entry whose `when()` is false is left out. The
 * slot draws nothing when it is empty (no wrapper either), so themes can place slots anywhere. `context`
 * is handed to every entry as a prop (e.g. the user menu passes `close`).
 */
type __VLS_Props = {
    name: string;
    tag?: string;
    context?: Record<string, unknown>;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    tag: string;
    context: Record<string, unknown>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=HookSlot.vue.d.ts.map