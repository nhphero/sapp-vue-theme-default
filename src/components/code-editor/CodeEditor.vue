<script setup lang="ts">
import { inject } from 'vue';
import { Copy, Check } from 'lucide-vue-next';
import { EditorView, basicSetup } from 'codemirror';
import { keymap } from '@codemirror/view';
import { EditorState, Compartment } from '@codemirror/state';
import { indentWithTab, copyLineDown, deleteLine, toggleComment } from '@codemirror/commands';
import { autocompletion, CompletionContext, startCompletion } from '@codemirror/autocomplete';
import { Decoration, ViewPlugin, DecorationSet } from '@codemirror/view';

const superApp = inject<any>('$superApp');
const { ref, reactive, onMounted, watch, onUnmounted, nextTick } = superApp.$vue;

const props = defineProps<{
  modelValue: string;
  language?: 'json' | 'html' | 'javascript' | 'sql' | string;
  readonly?: boolean;
  placeholder?: string;
  context?: any; // EJS Data Context for autocomplete
  completions?: {
    objects?: Record<string, any>;
    keywords?: string[];
    rules?: Array<{
      pattern: RegExp;
      options: any[] | ((match: any, ctx: any) => any);
    }>;
  };
  onAutocomplete?: (ctx: any) => any;
  onChange?: (value: string) => void;
  showCopy?: boolean;
  wrap?: boolean;
  hideBuilder?: boolean;
  autofocus?: boolean;
}>();

const emit = defineEmits(['update:modelValue', 'execute', 'open-builder', 'shortcut', 'ready']);

const editorRef = ref(null);
let view: any = null;
const lastSelection = ref(null as any);
const languageConf = new Compartment();
const copied = ref(false);

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(String(props.modelValue || ''));
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
    superApp.$message.success('COPIED TO CLIPBOARD');
  } catch (err: any) {
    superApp.$message.error('FAILED TO COPY');
  }
};

// 🎨 NATIVE HIGH-SPEED HIGHLIGHTER (Build-less & Stable)
// This avoids version conflicts with CDN-loaded packages by using only local dependencies.
const createHighlighter = (lang: string) => ViewPlugin.fromClass(class {
  decorations: DecorationSet;

  constructor(view: EditorView) {
    this.decorations = this.highlight(view.state.doc.toString());
  }

  update(update: any) {
    if (update.docChanged || update.viewportChanged) {
      this.decorations = this.highlight(update.state.doc.toString());
    }
  }

  highlight(text: string) {
    const marks: any[] = [];
    if (!text) return Decoration.none;

    // Standard JS / JSON / EJS Highlighting patterns
    const patterns = [
      { regex: /\/\/.*/g, class: 'text-faint  italic' },                         // Line Comments
      { regex: /\/\*[\s\S]*?\*\//g, class: 'text-faint  italic' },                // Block Comments
      { regex: /"(?:\\.|[^\\"])*"(?=\s*:)|'[^']*'(?=\s*:)/g, class: 'text-amber-600  font-bold' }, // Quoted Keys
      { regex: /\b[a-zA-Z_]\w*(?=\s*:)/g, class: 'text-amber-600  font-bold' },      // Unquoted Keys (JS Objects)
      { regex: /"(?:\\.|[^\\"])*"(?!\s*:)|'(?:\\.|[^\\'])*'|`(?:\\.|[^\\`])*`/g, class: 'text-emerald-600 ' }, // Strings
      { regex: /\b(export|default|async|function|await|const|let|var|return|try|catch|if|else|for|while|new|import|from|class|extends|await)\b/g, class: 'text-indigo-600  font-black' }, // JS Keywords
      { regex: /\b(true|false|null|undefined)\b/g, class: 'text-rose-600  font-black' }, // Constants
      { regex: /\b\d+(\.\d+)?\b/g, class: 'text-sky-600 ' },                          // Numbers
      { regex: /\b[a-zA-Z_]\w*(?=\s*\()/g, class: 'text-blue-600  font-bold' },      // Function Calls
      { regex: /(<!--.*?-->|<\?.*?\?>|<\/?[a-zA-Z][\w:-]*)/g, class: 'text-indigo-600  font-bold' }, // HTML Tags
      { regex: /(<%[=-]?|%>)/g, class: 'text-blue-600  font-black' }                 // EJS Tags
    ];

    patterns.forEach(p => {
      let m;
      while ((m = p.regex.exec(text)) !== null) {
        marks.push(Decoration.mark({ class: p.class }).range(m.index, m.index + m[0].length));
      }
    });

    return Decoration.set(marks.sort((a, b) => a.from - b.from));
  }
}, {
  decorations: v => v.decorations
});

// 🔮 CUSTOM JS/EJS AUTOCOMPLETE
const customCompletions = async (ctx: CompletionContext) => {
  // 🚀 PARENT OVERRIDE (Maximum Dynamic Control)
  if (props.onAutocomplete) {
    const customResult = props.onAutocomplete(ctx);
    if (customResult) return customResult;
  }

  const word = ctx.matchBefore(/[\w.]*$/);
  console.log('📝 [CodeEditor] customCompletions', { 
    text: word?.text, 
    explicit: ctx.explicit,
    hasRules: !!props.completions?.rules 
  });
  // 🛡️ Only block if NO word AND NOT explicit AND NO rules exist (rules handle their own matches)
  if (!word && !ctx.explicit && !props.completions?.rules) return null;
  if (!word) return null; // 🛡️ Safety for subsequent logic


  // 1. EJS Autocomplete (Original logic)
  const ejsWord = ctx.matchBefore(/<%[=-]?\s*[\w.]*$/);
  if (ejsWord) {
    const options: any[] = [
      { label: 'data', type: 'variable', detail: 'EJS Root Data' },
      { label: 'input', type: 'variable', detail: 'Alias for data' },
      { label: 'if', type: 'keyword' },
      { label: 'else', type: 'keyword' },
      { label: 'forEach', type: 'function', detail: 'Array loop' },
    ];
    
    if (props.context) {
       const data = typeof props.context === 'string' ? JSON.parse(props.context) : props.context;
       Object.keys(data).forEach(key => {
          options.push({ label: `data.${key}`, type: 'property', detail: 'Context Variable' });
          options.push({ label: `input.${key}`, type: 'property', detail: 'Context Variable' });
       });
    }

    return {
      from: ejsWord.from + (ejsWord.text.indexOf('%') + 2), 
      options: options.filter(o => o.label.toLowerCase().includes(ejsWord.text.split(/<%[=-]?\s*/).pop()?.toLowerCase() || ''))
    };
  }

  // 2. JavaScript Exposure Autocomplete
  if (props.language === 'javascript') {
    const dotIndex = word.text.lastIndexOf('.');
    
    // Default objects if not provided via props
    const defaultObjects: any = {
      request: {
        properties: [
          { label: 'body', detail: 'Request payload' },
          { label: 'query', detail: 'URL query params' },
          { label: 'params', detail: 'Path params' },
          { label: 'param', detail: 'Alias of params' },
          { label: 'headers', detail: 'HTTP headers' },
          { label: 'method', detail: 'Original HTTP method' },
          { label: 'path', detail: 'Full resolved endpoint path' },
          { label: 'endpoint', detail: 'Full resolved endpoint path' },
          { label: 'url', detail: 'Exposure slug' }
        ],
        methods: [
          { label: 'end', detail: '(data: any) => Response' },
          { label: 'input', detail: '(key?: string, defaultValue?: any) => any' },
          { label: 'route', detail: '(key?: string, defaultValue?: any) => any' },
          { label: 'multipart', detail: '() => Promise<MultipartForm>' },
          { label: 'forward', detail: '(overrides?: any) => Integration request options' }
        ]
      },
      context: {
        methods: [
          { label: 'integration', detail: '(alias: string) => Integration client' },
          { label: 'auth', detail: '(alias?: string) => Auth integration client' },
          { label: 'action', detail: '(slug: string, params?: any) => Promise<any>' },
          { label: 'variable', detail: '(key: string, defaultValue?: any) => any' },
          { label: 'log', detail: '(data: any, level?: string) => void' }
        ]
      }
    };

    const completionObjects = props.completions?.objects || defaultObjects;

    // 🚀 DYNAMIC RULES (Managed by Parent Component)
    // Rules should be checked FIRST to allow overriding default behavior for specific patterns
    if (props.completions?.rules) {
      for (const rule of props.completions.rules) {
        const match = ctx.matchBefore(rule.pattern);
        if (match) {
          let resolvedOptions = typeof rule.options === 'function' ? (rule.options as any)(match, ctx) : rule.options;
          
          // ⏳ Support ASYNC options (e.g. for fetching database tables)
          if (resolvedOptions instanceof Promise) {
            resolvedOptions = await resolvedOptions;
          }

          if (!resolvedOptions || (Array.isArray(resolvedOptions) && resolvedOptions.length === 0)) {
            continue;
          }

          // 🎯 Intelligent Offset Calculation
          const dotMatch = match.text.match(/\.[\w]*$/);
          const quoteMatch = match.text.match(/['"]/);
          const parenMatch = match.text.match(/\(/);
          
          let startOffset = 0;
          if (dotMatch) {
            startOffset = match.text.lastIndexOf('.') + 1;
          } else if (quoteMatch) {
            startOffset = match.text.lastIndexOf(quoteMatch[0]) + 1;
          } else if (parenMatch) {
            startOffset = match.text.lastIndexOf('(') + 1;
          }

          console.log('✅ [CodeEditor] Rule Matched! Returning options:', resolvedOptions.length);
          return {
            from: match.from + startOffset,
            options: resolvedOptions
          };
        }
      }
    }

    if (dotIndex !== -1) {
      const parent = word.text.substring(0, dotIndex);
      const subWord = word.text.substring(dotIndex + 1).toLowerCase();
      const obj = completionObjects[parent];
      
      if (obj) {
        const options: any[] = [
          ...(obj.properties || []).map((p: any) => ({ ...p, type: 'property' })),
          ...(obj.methods || []).map((m: any) => ({ ...m, type: 'method' }))
        ];

        return {
          from: word.from + dotIndex + 1,
          options: options.filter(o => o.label.toLowerCase().includes(subWord))
        };
      }
    }

    // Root completions
    const keywords = props.completions?.keywords || [
      'if', 'else', 'return', 'async', 'await', 'try', 'catch', 'const', 'let'
    ];

    const options = [
      ...Object.keys(completionObjects).map(key => ({ label: key, type: 'variable', detail: `Global Object: ${key}` })),
      ...keywords.map(k => ({ label: k, type: 'keyword' })),
      { label: 'Date', type: 'variable' },
      { label: 'JSON', type: 'variable' },
      { label: 'Math', type: 'variable' },
    ];

    return {
      from: word.from,
      options: options.filter(o => o.label.toLowerCase().includes(word.text.toLowerCase()))
    };
  }

  return null;
};

const completionConf = new Compartment();

const initEditor = () => {
  if (!editorRef.value) return;
  
  if (view) view.destroy();

  const extensions: any[] = [
    basicSetup,
    languageConf.of(props.language ? [createHighlighter(props.language)] : []),
    EditorState.languageData.of(() => [{ commentTokens: { line: '//', block: { open: '/*', close: '*/' } } }]),
    completionConf.of(autocompletion({ override: [customCompletions] })),
    keymap.of([
      {
        key:"Mod-/",
        run: toggleComment
      },
      indentWithTab,
      {
        key:"Mod-i",
        run: (view) => {
          startCompletion(view);
          return true;
        }
      },
      {
        key:"Mod-d",
        run: (view) => {
          copyLineDown(view);
          emit('shortcut', 'Mod-d');
          return true;
        }
      },
      {
        key:"Mod-Shift-k",
        run: (view) => {
          deleteLine(view);
          emit('shortcut', 'Mod-Shift-k');
          return true;
        }
      },
      {
        key:"Alt-Shift-f",
        run: (view) => {
          emit('shortcut', 'Alt-Shift-f');
          return true;
        }
      }
    ]),
    EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        const value = update.state.doc.toString();
        emit('update:modelValue', value);
        props.onChange?.(value);
      }
      if (update.selectionSet) {
        lastSelection.value = { 
          from: update.state.selection.main.from, 
          to: update.state.selection.main.to 
        };
      }
    }),
    EditorView.theme({
      '&': { height: '100%', fontSize: '13px', backgroundColor: 'transparent', color: 'currentColor' },
      '.cm-scroller': { overflow: 'auto', fontFamily: 'var(--font-family-mono, monospace)' },
      '.cm-content': { padding: '10px 0' },
      '&.cm-focused': { outline: 'none' },
      '.cm-gutters': { 
        backgroundColor: 'transparent',
        borderRight: '1px solid rgba(255,255,255,0.05)',
        color: '#64748b',
        opacity: '1'
      },
      '.cm-activeLine': { backgroundColor: 'rgba(255,255,255,0.02)' },
      '.cm-activeLineGutter': { backgroundColor: 'transparent', color: 'var(--primary, #4f46e5)', fontWeight: 'bold' }
    }),
    EditorState.readOnly.of(!!props.readonly),
    props.wrap ? EditorView.lineWrapping : []
  ];

  const state = EditorState.create({
    doc: String(props.modelValue || ''),
    extensions
  });

  view = new EditorView({
    state,
    parent: editorRef.value
  });
};

watch(() => props.modelValue, (newVal: string) => {
  if (view && newVal !== view.state.doc.toString()) {
    // 🛡️ Clamp selection to avoid RangeError if new document is shorter
    const docLen = newVal?.length || 0;
    const anchor = Math.min(view.state.selection.main.anchor, docLen);
    const head = Math.min(view.state.selection.main.head, docLen);

    view.dispatch({
      changes: { from: 0, to: view.state.doc.length, insert: newVal || '' },
      selection: { anchor, head },
      scrollIntoView: false
    });
  }
});

watch(() => props.language, (newLang: string) => {
  if (view && newLang) {
    view.dispatch({
      effects: languageConf.reconfigure([createHighlighter(newLang)])
    });
  }
});

watch(() => props.completions, () => {
  if (view) {
    console.log('🔄 [CodeEditor] Updating Completion Compartment');
    view.dispatch({
      effects: completionConf.reconfigure(autocompletion({ override: [customCompletions] }))
    });
  }
}, { deep: true });

onMounted(() => {
  nextTick(() => {
    if (editorRef.value) {
      initEditor();
    }
  });
});

onUnmounted(() => {
  if (view) view.destroy();
});

const insertCode = (code: string, position?: { from: number, to: number }) => {
  if (!view) return;
  view.focus();
  
  // Priority: explicit position > tracked selection > current selection
  const selection = position || lastSelection.value || { from: view.state.selection.main.from, to: view.state.selection.main.to };
  
  console.log('🚀 [CodeEditor] Inserting snippet at:', selection);

  view.dispatch({
    changes: { from: selection.from, to: selection.to, insert: code },
    selection: { anchor: selection.from + code.length },
    scrollIntoView: true
  });
};

const getSelection = () => {
  if (!view) return null;
  return lastSelection.value || { from: view.state.selection.main.from, to: view.state.selection.main.to };
};

onMounted(() => {
  if (props.autofocus) {
    setTimeout(() => {
      initEditor();
    }, 100);
  } else {
    initEditor();
  }
  
  // 🎯 Emit the API directly, bypassing Vue's template ref bugs entirely
  emit('ready', {
    focus: () => view?.focus(),
    insertCode,
    getSelection,
    getValue: () => view?.state.doc.toString() || '',
    duplicateLine: () => view && copyLineDown(view)
  });
});

defineExpose({ 
  focus: () => view?.focus(),
  insertCode,
  getSelection,
  getValue: () => view?.state.doc.toString() || '',
  duplicateLine: () => view && copyLineDown(view)
});
</script>

<template>
  <div class="code-editor-wrapper h-full flex flex-col relative group">
    <div 
      ref="editorRef"
      class="code-editor-container h-full w-full overflow-hidden bg-transparent"
    ></div>
    
    <!-- Floating Copy Button -->
    <div 
      v-if="showCopy" 
      class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 translate-y-1 group-hover:translate-y-0"
    >
       <button 
         @click="copyToClipboard" 
         class="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-border-soft  backdrop-blur-md shadow-lg transition-all active:scale-95"
         :title="copied ? 'Copied!' : 'Copy to clipboard'"
       >
         <component 
           :is="copied ? Check : Copy" 
           :size="14" 
           :class="copied ? 'text-emerald-500 animate-in zoom-in' : 'text-faint'" 
         />
       </button>
    </div>
  </div>
</template>

<style>
.code-editor-container .cm-editor {
  height: 100%;
}
.code-editor-container .cm-focused {
  outline: none !important;
}
</style>
