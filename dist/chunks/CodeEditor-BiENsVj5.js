import { defineComponent as Z, inject as G, openBlock as S, createElementBlock as R, createElementVNode as j, unref as m, createBlock as Y, resolveDynamicComponent as K, normalizeClass as Q, createCommentVNode as X } from "vue";
import { Check as ee, Copy as te } from "lucide-vue-next";
import { basicSetup as oe, EditorView as b } from "codemirror";
import { keymap as ae, ViewPlugin as ne, Decoration as O } from "@codemirror/view";
import { Compartment as P, EditorState as A } from "@codemirror/state";
import { toggleComment as le, indentWithTab as re, copyLineDown as E, deleteLine as ie } from "@codemirror/commands";
import { autocompletion as $, startCompletion as se } from "@codemirror/autocomplete";
const ce = { class: "code-editor-wrapper h-full flex flex-col relative group" }, de = {
  key: 0,
  class: "absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 translate-y-1 group-hover:translate-y-0"
}, ue = ["title"], we = /* @__PURE__ */ Z({
  __name: "CodeEditor",
  props: {
    modelValue: {},
    language: {},
    readonly: { type: Boolean },
    placeholder: {},
    context: {},
    completions: {},
    onAutocomplete: { type: Function },
    onChange: { type: Function },
    showCopy: { type: Boolean },
    wrap: { type: Boolean },
    hideBuilder: { type: Boolean },
    autofocus: { type: Boolean }
  },
  emits: ["update:modelValue", "execute", "open-builder", "shortcut", "ready"],
  setup(D, { expose: z, emit: F }) {
    const y = G("$superApp"), { ref: x, reactive: pe, onMounted: L, watch: w, onUnmounted: q, nextTick: W } = y.$vue, a = D, p = F, g = x(null);
    let e = null;
    const C = x(null), V = new P(), f = x(!1), N = async () => {
      try {
        await navigator.clipboard.writeText(String(a.modelValue || "")), f.value = !0, setTimeout(() => {
          f.value = !1;
        }, 2e3), y.$toast.success("COPIED TO CLIPBOARD");
      } catch {
        y.$toast.error("FAILED TO COPY");
      }
    }, M = (n) => ne.fromClass(class {
      decorations;
      constructor(t) {
        this.decorations = this.highlight(t.state.doc.toString());
      }
      update(t) {
        (t.docChanged || t.viewportChanged) && (this.decorations = this.highlight(t.state.doc.toString()));
      }
      highlight(t) {
        const o = [];
        return t ? ([
          { regex: /\/\/.*/g, class: "text-faint  italic" },
          // Line Comments
          { regex: /\/\*[\s\S]*?\*\//g, class: "text-faint  italic" },
          // Block Comments
          { regex: /"(?:\\.|[^\\"])*"(?=\s*:)|'[^']*'(?=\s*:)/g, class: "text-amber-600  font-bold" },
          // Quoted Keys
          { regex: /\b[a-zA-Z_]\w*(?=\s*:)/g, class: "text-amber-600  font-bold" },
          // Unquoted Keys (JS Objects)
          { regex: /"(?:\\.|[^\\"])*"(?!\s*:)|'(?:\\.|[^\\'])*'|`(?:\\.|[^\\`])*`/g, class: "text-emerald-600 " },
          // Strings
          { regex: /\b(export|default|async|function|await|const|let|var|return|try|catch|if|else|for|while|new|import|from|class|extends|await)\b/g, class: "text-indigo-600  font-black" },
          // JS Keywords
          { regex: /\b(true|false|null|undefined)\b/g, class: "text-rose-600  font-black" },
          // Constants
          { regex: /\b\d+(\.\d+)?\b/g, class: "text-sky-600 " },
          // Numbers
          { regex: /\b[a-zA-Z_]\w*(?=\s*\()/g, class: "text-blue-600  font-bold" },
          // Function Calls
          { regex: /(<!--.*?-->|<\?.*?\?>|<\/?[a-zA-Z][\w:-]*)/g, class: "text-indigo-600  font-bold" },
          // HTML Tags
          { regex: /(<%[=-]?|%>)/g, class: "text-blue-600  font-black" }
          // EJS Tags
        ].forEach((d) => {
          let i;
          for (; (i = d.regex.exec(t)) !== null; )
            o.push(O.mark({ class: d.class }).range(i.index, i.index + i[0].length));
        }), O.set(o.sort((d, i) => d.from - i.from))) : O.none;
      }
    }, {
      decorations: (t) => t.decorations
    }), _ = async (n) => {
      if (a.onAutocomplete) {
        const l = a.onAutocomplete(n);
        if (l) return l;
      }
      const t = n.matchBefore(/[\w.]*$/);
      if (console.log("📝 [CodeEditor] customCompletions", {
        text: t?.text,
        explicit: n.explicit,
        hasRules: !!a.completions?.rules
      }), !t && !n.explicit && !a.completions?.rules || !t) return null;
      const o = n.matchBefore(/<%[=-]?\s*[\w.]*$/);
      if (o) {
        const l = [
          { label: "data", type: "variable", detail: "EJS Root Data" },
          { label: "input", type: "variable", detail: "Alias for data" },
          { label: "if", type: "keyword" },
          { label: "else", type: "keyword" },
          { label: "forEach", type: "function", detail: "Array loop" }
        ];
        if (a.context) {
          const d = typeof a.context == "string" ? JSON.parse(a.context) : a.context;
          Object.keys(d).forEach((i) => {
            l.push({ label: `data.${i}`, type: "property", detail: "Context Variable" }), l.push({ label: `input.${i}`, type: "property", detail: "Context Variable" });
          });
        }
        return {
          from: o.from + (o.text.indexOf("%") + 2),
          options: l.filter((d) => d.label.toLowerCase().includes(o.text.split(/<%[=-]?\s*/).pop()?.toLowerCase() || ""))
        };
      }
      if (a.language === "javascript") {
        const l = t.text.lastIndexOf("."), d = {
          request: {
            properties: [
              { label: "body", detail: "Request payload" },
              { label: "query", detail: "URL query params" },
              { label: "params", detail: "Path params" },
              { label: "param", detail: "Alias of params" },
              { label: "headers", detail: "HTTP headers" },
              { label: "method", detail: "Original HTTP method" },
              { label: "path", detail: "Full resolved endpoint path" },
              { label: "endpoint", detail: "Full resolved endpoint path" },
              { label: "url", detail: "Exposure slug" }
            ],
            methods: [
              { label: "end", detail: "(data: any) => Response" },
              { label: "input", detail: "(key?: string, defaultValue?: any) => any" },
              { label: "route", detail: "(key?: string, defaultValue?: any) => any" },
              { label: "multipart", detail: "() => Promise<MultipartForm>" },
              { label: "forward", detail: "(overrides?: any) => Integration request options" }
            ]
          },
          context: {
            methods: [
              { label: "integration", detail: "(alias: string) => Integration client" },
              { label: "auth", detail: "(alias?: string) => Auth integration client" },
              { label: "action", detail: "(slug: string, params?: any) => Promise<any>" },
              { label: "variable", detail: "(key: string, defaultValue?: any) => any" },
              { label: "log", detail: "(data: any, level?: string) => void" }
            ]
          }
        }, i = a.completions?.objects || d;
        if (a.completions?.rules)
          for (const r of a.completions.rules) {
            const c = n.matchBefore(r.pattern);
            if (c) {
              let s = typeof r.options == "function" ? r.options(c, n) : r.options;
              if (s instanceof Promise && (s = await s), !s || Array.isArray(s) && s.length === 0)
                continue;
              const k = c.text.match(/\.[\w]*$/), u = c.text.match(/['"]/), U = c.text.match(/\(/);
              let h = 0;
              return k ? h = c.text.lastIndexOf(".") + 1 : u ? h = c.text.lastIndexOf(u[0]) + 1 : U && (h = c.text.lastIndexOf("(") + 1), console.log("✅ [CodeEditor] Rule Matched! Returning options:", s.length), {
                from: c.from + h,
                options: s
              };
            }
          }
        if (l !== -1) {
          const r = t.text.substring(0, l), c = t.text.substring(l + 1).toLowerCase(), s = i[r];
          if (s) {
            const k = [
              ...(s.properties || []).map((u) => ({ ...u, type: "property" })),
              ...(s.methods || []).map((u) => ({ ...u, type: "method" }))
            ];
            return {
              from: t.from + l + 1,
              options: k.filter((u) => u.label.toLowerCase().includes(c))
            };
          }
        }
        const H = a.completions?.keywords || [
          "if",
          "else",
          "return",
          "async",
          "await",
          "try",
          "catch",
          "const",
          "let"
        ], J = [
          ...Object.keys(i).map((r) => ({ label: r, type: "variable", detail: `Global Object: ${r}` })),
          ...H.map((r) => ({ label: r, type: "keyword" })),
          { label: "Date", type: "variable" },
          { label: "JSON", type: "variable" },
          { label: "Math", type: "variable" }
        ];
        return {
          from: t.from,
          options: J.filter((r) => r.label.toLowerCase().includes(t.text.toLowerCase()))
        };
      }
      return null;
    }, B = new P(), v = () => {
      if (!g.value) return;
      e && e.destroy();
      const n = [
        oe,
        V.of(a.language ? [M(a.language)] : []),
        A.languageData.of(() => [{ commentTokens: { line: "//", block: { open: "/*", close: "*/" } } }]),
        B.of($({ override: [_] })),
        ae.of([
          {
            key: "Mod-/",
            run: le
          },
          re,
          {
            key: "Mod-i",
            run: (o) => (se(o), !0)
          },
          {
            key: "Mod-d",
            run: (o) => (E(o), p("shortcut", "Mod-d"), !0)
          },
          {
            key: "Mod-Shift-k",
            run: (o) => (ie(o), p("shortcut", "Mod-Shift-k"), !0)
          },
          {
            key: "Alt-Shift-f",
            run: (o) => (p("shortcut", "Alt-Shift-f"), !0)
          }
        ]),
        b.updateListener.of((o) => {
          if (o.docChanged) {
            const l = o.state.doc.toString();
            p("update:modelValue", l), a.onChange?.(l);
          }
          o.selectionSet && (C.value = {
            from: o.state.selection.main.from,
            to: o.state.selection.main.to
          });
        }),
        b.theme({
          "&": { height: "100%", fontSize: "13px", backgroundColor: "transparent", color: "currentColor" },
          ".cm-scroller": { overflow: "auto", fontFamily: "var(--font-family-mono, monospace)" },
          ".cm-content": { padding: "10px 0" },
          "&.cm-focused": { outline: "none" },
          ".cm-gutters": {
            backgroundColor: "transparent",
            borderRight: "1px solid rgba(255,255,255,0.05)",
            color: "#64748b",
            opacity: "1"
          },
          ".cm-activeLine": { backgroundColor: "rgba(255,255,255,0.02)" },
          ".cm-activeLineGutter": { backgroundColor: "transparent", color: "var(--primary, #4f46e5)", fontWeight: "bold" }
        }),
        A.readOnly.of(!!a.readonly),
        a.wrap ? b.lineWrapping : []
      ], t = A.create({
        doc: String(a.modelValue || ""),
        extensions: n
      });
      e = new b({
        state: t,
        parent: g.value
      });
    };
    w(() => a.modelValue, (n) => {
      if (e && n !== e.state.doc.toString()) {
        const t = n?.length || 0, o = Math.min(e.state.selection.main.anchor, t), l = Math.min(e.state.selection.main.head, t);
        e.dispatch({
          changes: { from: 0, to: e.state.doc.length, insert: n || "" },
          selection: { anchor: o, head: l },
          scrollIntoView: !1
        });
      }
    }), w(() => a.language, (n) => {
      e && n && e.dispatch({
        effects: V.reconfigure([M()])
      });
    }), w(() => a.completions, () => {
      e && (console.log("🔄 [CodeEditor] Updating Completion Compartment"), e.dispatch({
        effects: B.reconfigure($({ override: [_] }))
      }));
    }, { deep: !0 }), L(() => {
      W(() => {
        g.value && v();
      });
    }), q(() => {
      e && e.destroy();
    });
    const I = (n, t) => {
      if (!e) return;
      e.focus();
      const o = t || C.value || { from: e.state.selection.main.from, to: e.state.selection.main.to };
      console.log("🚀 [CodeEditor] Inserting snippet at:", o), e.dispatch({
        changes: { from: o.from, to: o.to, insert: n },
        selection: { anchor: o.from + n.length },
        scrollIntoView: !0
      });
    }, T = () => e ? C.value || { from: e.state.selection.main.from, to: e.state.selection.main.to } : null;
    return L(() => {
      a.autofocus ? setTimeout(() => {
        v();
      }, 100) : v(), p("ready", {
        focus: () => e?.focus(),
        insertCode: I,
        getSelection: T,
        getValue: () => e?.state.doc.toString() || "",
        duplicateLine: () => e && E(e)
      });
    }), z({
      focus: () => e?.focus(),
      insertCode: I,
      getSelection: T,
      getValue: () => e?.state.doc.toString() || "",
      duplicateLine: () => e && E(e)
    }), (n, t) => (S(), R("div", ce, [
      j("div", {
        ref_key: "editorRef",
        ref: g,
        class: "code-editor-container h-full w-full overflow-hidden bg-transparent"
      }, null, 512),
      n.showCopy ? (S(), R("div", de, [
        j("button", {
          onClick: N,
          class: "p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-border-soft backdrop-blur-md shadow-lg transition-all active:scale-95",
          title: m(f) ? "Copied!" : "Copy to clipboard"
        }, [
          (S(), Y(K(m(f) ? m(ee) : m(te)), {
            size: 14,
            class: Q(m(f) ? "text-emerald-500 animate-in zoom-in" : "text-faint")
          }, null, 8, ["class"]))
        ], 8, ue)
      ])) : X("", !0)
    ]));
  }
});
export {
  we as default
};
//# sourceMappingURL=CodeEditor-BiENsVj5.js.map
