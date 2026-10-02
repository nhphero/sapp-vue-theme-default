import { defineComponent as jr, ref as Ot, watch as Zr, computed as It, openBlock as Pt, createElementBlock as Dt, renderSlot as Pn, createTextVNode as Dn } from "vue";
import { _ as Yr } from "./_plugin-vue_export-helper-CHgC5LLL.js";
function qt() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var xe = qt();
function sr(t) {
  xe = t;
}
var ke = { exec: () => null };
function Ie(t) {
  let e = [];
  return (n) => {
    let i = Math.max(0, Math.min(3, n - 1)), r = e[i];
    return r || (r = t(i), e[i] = r), r;
  };
}
function b(t, e = "") {
  let n = typeof t == "string" ? t : t.source, i = { replace: (r, o) => {
    let c = typeof o == "string" ? o : o.source;
    return c = c.replace($.caret, "$1"), n = n.replace(r, c), i;
  }, getRegex: () => new RegExp(n, e) };
  return i;
}
var Xr = ((t = "") => {
  try {
    return !!new RegExp("(?<=1)(?<!1)" + t);
  } catch {
    return !1;
  }
})(), $ = { codeRemoveIndent: /^(?: {0,3}\t| {1,4})/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, endingSpaceTabChar: /[ \t]$/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, leadingSpaceTab: /^[ \t]+/, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, numericCharacterReference: /&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/g, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (t) => new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: Ie((t) => new RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)), hrRegex: Ie((t) => new RegExp(`^ {0,${t}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)), fencesBeginRegex: Ie((t) => new RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)), headingBeginRegex: Ie((t) => new RegExp(`^ {0,${t}}#`)), htmlBeginRegex: Ie((t) => new RegExp(`^ {0,${t}}(?:</?(?:${We})(?: +|$|/?>)|<(?:script|pre|style|textarea|!--))`, "i")), blockquoteBeginRegex: Ie((t) => new RegExp(`^ {0,${t}}>`)) }, Qr = /^(?:[ \t]*(?:\n|$))+/, Vr = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Kr = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, qe = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Jr = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Wt = / {0,3}(?:[*+-]|\d{1,9}[.)])/, ir = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, or = b(ir).replace(/bull/g, Wt).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), es = b(ir).replace(/bull/g, Wt).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), jt = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/, ts = /^[^\n]+/, Zt = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, ns = b(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Zt).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), rs = b(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g, Wt).getRegex(), We = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Yt = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, ss = b("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Yt).replace("tag", We).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), lr = (t) => b(jt).replace("hr", qe).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", t).replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", We).getRegex(), is = lr(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/), os = lr(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/), ls = b(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", os).getRegex(), Xt = { blockquote: ls, code: Vr, def: ns, fences: Kr, heading: Jr, hr: qe, html: ss, lheading: or, list: rs, newline: Qr, paragraph: is, table: ke, text: ts }, vn = b("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", qe).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", We).getRegex(), as = { ...Xt, lheading: es, table: vn, paragraph: b(jt).replace("hr", qe).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", vn).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", We).getRegex() }, cs = { ...Xt, html: b(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Yt).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: ke, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: b(jt).replace("hr", qe).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", or).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, us = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, ps = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, ar = /^( {2,}|\\)\n(?!\s*$)[ \t]*/, hs = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, se = /[\p{P}\p{S}]/u, ve = /[\s\p{P}\p{S}]/u, je = /[^\s\p{P}\p{S}]/u, fs = b(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, ve).getRegex(), ds = /[\p{Pi}\p{Ps}"']/u, cr = /(?!~)[\p{P}\p{S}]/u, gs = /(?!~)[\s\p{P}\p{S}]/u, ms = /(?:[^\s\p{P}\p{S}]|~)/u, ks = b(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Xr ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), ur = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, bs = b(ur, "u").replace(/punct/g, se).getRegex(), xs = b(ur, "u").replace(/punct/g, cr).getRegex(), Ts = /^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/, _s = b(Ts, "u").replace(/openQuote/g, ds).replace(/punct/g, se).getRegex(), pr = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", ws = b(pr, "gu").replace(/notPunctSpace/g, je).replace(/punctSpace/g, ve).replace(/punct/g, se).getRegex(), ys = b(pr, "gu").replace(/notPunctSpace/g, ms).replace(/punctSpace/g, gs).replace(/punct/g, cr).getRegex(), Ss = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)", As = b(Ss, "gu").replace(/notPunctSpace/g, je).replace(/punctSpace/g, ve).replace(/punct/g, se).getRegex(), Es = b("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, je).replace(/punctSpace/g, ve).replace(/punct/g, se).getRegex(), Rs = "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)", Ls = b(Rs, "gu").replace(/notPunctSpace/g, je).replace(/punctSpace/g, ve).replace(/punct/g, se).getRegex(), Os = b(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, se).getRegex(), Is = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", Ps = b(Is, "gu").replace(/notPunctSpace/g, je).replace(/punctSpace/g, ve).replace(/punct/g, se).getRegex(), Ds = b(/\\(punct)/, "gu").replace(/punct/g, se).getRegex(), vs = b(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Cs = b(Yt).replace("(?:-->|$)", "-->").getRegex(), zs = b("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Cs).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), hr = /\[(?:\\[\s\S]|[^\[\]\\])*\]/, at = b(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets", hr).getRegex(), Ns = b(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", at).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ms = b(/^!?\[(label)\]\[(ref)\]/).replace("label", at).replace("ref", Zt).getRegex(), $s = b(/^!?\[(ref)\](?:\[\])?/).replace("ref", Zt).getRegex(), Cn = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/, Us = b(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets", hr).getRegex(), Fs = b("reflink|nolink(?!\\()", "g").replace("reflink", b(/^!?\[(label)\]\[(ref)\]/).replace("label", Us).replace("ref", Cn).getRegex()).replace("nolink", b(/^!?\[(ref)\](?:\[\])?/).replace("ref", Cn).getRegex()).getRegex(), zn = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Bs = /[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/, Hs = b(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g, Bs).getRegex(), Qt = { _backpedal: ke, anyPunctuation: Ds, autolink: vs, blockSkip: ks, br: ar, code: ps, del: ke, delLDelim: ke, delRDelim: ke, emStrongLDelim: bs, emStrongRDelimAst: ws, emStrongRDelimUnd: Es, escape: us, link: Ns, nolink: $s, punctuation: fs, reflink: Ms, reflinkSearch: Fs, tag: zs, text: hs, url: ke }, Gs = { ...Qt, emStrongLDelim: _s, emStrongRDelimAst: As, emStrongRDelimUnd: Ls, link: b(/^!?\[(label)\]\((.*?)\)/).replace("label", at).getRegex(), reflink: b(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", at).getRegex() }, Ut = { ...Qt, emStrongRDelimAst: ys, emStrongLDelim: xs, delLDelim: Os, delRDelim: Ps, url: b(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol", Hs).replace("protocol", zn).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: b(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol", zn).replace(/emailProtocol/g, /(?:mailto|xmpp):/).getRegex() }, qs = { ...Ut, br: b(ar).replace("{2,}", "*").getRegex(), text: b(Ut.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, ot = { normal: Xt, gfm: as, pedantic: cs }, $e = { normal: Qt, gfm: Ut, breaks: qs, pedantic: Gs }, Ws = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Nn = (t) => Ws[t];
function Z(t, e) {
  if (e) {
    if ($.escapeTest.test(t)) return t.replace($.escapeReplace, Nn);
  } else if ($.escapeTestNoEncode.test(t)) return t.replace($.escapeReplaceNoEncode, Nn);
  return t;
}
function js(t) {
  return t.replace($.numericCharacterReference, (e, n, i) => {
    let r = n === void 0 ? Number.parseInt(i, 16) : Number.parseInt(n, 10);
    return r === 0 || r > 1114111 || r >= 55296 && r <= 57343 ? "�" : String.fromCodePoint(r);
  });
}
function Mn(t) {
  try {
    t = encodeURI(t).replace($.percentDecode, "%");
  } catch {
    return null;
  }
  return t;
}
function $n(t, e) {
  let n = t.replace($.findPipe, (o, c, l) => {
    let f = !1, p = c;
    for (; --p >= 0 && l[p] === "\\"; ) f = !f;
    return f ? "|" : " |";
  }), i = n.split($.splitPipe), r = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !i.at(-1)?.trim() && i.pop(), e) if (i.length > e) i.splice(e);
  else for (; i.length < e; ) i.push("");
  for (; r < i.length; r++) i[r] = i[r].trim().replace($.slashPipe, "|");
  return i;
}
function ce(t, e, n) {
  let i = t.length;
  if (i === 0) return "";
  let r = 0;
  for (; r < i && t.charAt(i - r - 1) === e; )
    r++;
  return t.slice(0, i - r);
}
function Un(t) {
  let e = t.split(`
`), n = e.length - 1;
  for (; n >= 0 && $.blankLine.test(e[n]); ) n--;
  return e.length - n <= 2 ? t : e.slice(0, n + 1).join(`
`);
}
function ct(t) {
  return t.trim().toLowerCase().toUpperCase().toLowerCase();
}
function Zs(t, e) {
  if (t.indexOf(e[1]) === -1) return -1;
  let n = 0;
  for (let i = 0; i < t.length; i++) if (t[i] === "\\") i++;
  else if (t[i] === e[0]) n++;
  else if (t[i] === e[1] && (n--, n < 0)) return i;
  return n > 0 ? -2 : -1;
}
function Fn(t, e = 0) {
  let n = e, i = "";
  for (let r of t) if (r === "	") {
    let o = 4 - n % 4;
    i += " ".repeat(o), n += o;
  } else i += r, n++;
  return i;
}
function Bn(t, e, n, i, r) {
  let o = e.href, c = e.title || null, l = t[1].replace(r.other.outputLinkReplace, "$1"), f = t[0].charAt(0) === "!";
  i.state.inLink = !0;
  let p = i.state.linkEmitted, g = i.state.inRawBlock;
  i.state.linkEmitted = !1;
  let m = i.inlineTokens(l), I = i.state.linkEmitted;
  if (i.state.linkEmitted = p, i.state.inLink = !1, !f) {
    if (I) {
      i.state.inRawBlock = g;
      return;
    }
    i.state.linkEmitted = !0;
  }
  return { type: f ? "image" : "link", raw: n, href: o, title: c, text: l, tokens: m };
}
function Ys(t, e, n) {
  let i = t.match(n.other.indentCodeCompensation);
  if (i === null) return e;
  let r = i[1];
  return e.split(`
`).map((o) => {
    let c = o.match(n.other.beginningSpace);
    if (c === null) return o;
    let [l] = c;
    return o.slice(Math.min(l.length, r.length));
  }).join(`
`);
}
function Hn(t, e, n, i) {
  if (!e.includes("<")) return !1;
  for (let r = 0; r < e.length; r++) {
    if (e[r] === "\\") {
      r++;
      continue;
    }
    if (e[r] === "`") {
      let l = i.inline.code.exec(e.slice(r));
      if (l) {
        r += l[0].length - 1;
        continue;
      }
    }
    if (e[r] !== "<") continue;
    let o = t.slice(n + r), c = i.inline.tag.exec(o) || i.inline.autolink.exec(o);
    if (c) {
      if (c[0].length > e.length - r) return !0;
      r += c[0].length - 1;
    }
  }
  return !1;
}
var ut = class {
  options;
  rules;
  lexer;
  constructor(t) {
    this.options = t || xe;
  }
  space(t) {
    let e = this.rules.block.newline.exec(t);
    if (e && e[0].length > 0) return { type: "space", raw: e[0] };
  }
  code(t) {
    let e = this.rules.block.code.exec(t);
    if (e) {
      let n = this.options.pedantic ? e[0] : Un(e[0]), i = n.replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: n, codeBlockStyle: "indented", text: i };
    }
  }
  fences(t) {
    let e = this.rules.block.fences.exec(t);
    if (e) {
      let n = e[0], i = Ys(n, e[3] || "", this.rules);
      return { type: "code", raw: n, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: i };
    }
  }
  heading(t) {
    let e = this.rules.block.heading.exec(t);
    if (e) {
      let n = e[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let i = ce(n, "#");
        (this.options.pedantic || !i || this.rules.other.endingSpaceTabChar.test(i)) && (n = i.trim());
      }
      return { type: "heading", raw: ce(e[0], `
`), depth: e[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(t) {
    let e = this.rules.block.hr.exec(t);
    if (e) return { type: "hr", raw: ce(e[0], `
`) };
  }
  blockquote(t) {
    let e = this.rules.block.blockquote.exec(t);
    if (e) {
      let n = ce(e[0], `
`).split(`
`), i = "", r = "", o = [];
      for (; n.length > 0; ) {
        let c = !1, l = [], f;
        for (f = 0; f < n.length; f++) if (this.rules.other.blockquoteStart.test(n[f])) l.push(n[f]), c = !0;
        else if (!c) l.push(n[f]);
        else break;
        n = n.slice(f);
        let p = l.join(`
`), g = p.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        i = i ? `${i}
${p}` : p, r = r ? `${r}
${g}` : g;
        let m = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(g, o, !0), this.lexer.state.top = m, n.length === 0) break;
        let I = o.at(-1);
        if (I?.type === "code") break;
        if (I?.type === "blockquote") {
          let E = I, S = n.join(`
`), y = E.raw + `
` + S.replace(this.rules.other.blockquoteSetextReplace2, ""), x = this.blockquote(y);
          o[o.length - 1] = x;
          let z = y.substring(x.raw.length).replace(/^\n/, ""), q = z ? z.split(`
`).length : 0, v = q ? n.slice(0, -q) : n;
          v.length > 0 && (i = `${i}
${v.join(`
`)}`), r = r.substring(0, r.length - E.text.length) + x.text;
          break;
        } else if (I?.type === "list") {
          let E = I, S = E.raw + `
` + n.join(`
`), y = this.list(S);
          o[o.length - 1] = y, i = i.substring(0, i.length - I.raw.length) + y.raw, r = r.substring(0, r.length - E.raw.length) + y.raw, n = S.substring(o.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: i, tokens: o, text: r };
    }
  }
  list(t) {
    let e = this.rules.block.list.exec(t);
    if (e) {
      let n = e[1].trim(), i = n.length > 1, r = { type: "list", raw: "", ordered: i, start: i ? +n.slice(0, -1) : "", loose: !1, items: [] };
      n = i ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = i ? n : "[*+-]");
      let o = this.rules.other.listItemRegex(n), c = !1;
      for (; t; ) {
        let f = !1, p = "", g = "";
        if (!(e = o.exec(t)) || this.rules.block.hr.test(t)) break;
        p = e[0], t = t.substring(p.length);
        let m = e[2].split(`
`, 1)[0], I = e[1].length, E = this.options.pedantic ? Fn(m, I) : m.replace(this.rules.other.leadingSpaceTab, (z) => Fn(z, I)), S = t.split(`
`, 1)[0], y = !E.trim(), x = 0;
        if (this.options.pedantic ? (x = 2, g = E.trimStart()) : y ? x = I + 1 : (x = E.search(this.rules.other.nonSpaceChar), x = x > 4 ? 1 : x, g = E.slice(x), x += I), y && this.rules.other.blankLine.test(S) && (p += S + `
`, t = t.substring(S.length + 1), f = !0), !f) {
          let z = this.rules.other.nextBulletRegex(x), q = this.rules.other.hrRegex(x), v = this.rules.other.fencesBeginRegex(x), B = this.rules.other.headingBeginRegex(x), ie = this.rules.other.htmlBeginRegex(x), Te = this.rules.other.blockquoteBeginRegex(x);
          for (; t; ) {
            let ne = t.split(`
`, 1)[0], re;
            if (S = ne, this.options.pedantic ? (S = S.replace(this.rules.other.listReplaceNesting, "  "), re = S) : re = S.replace(this.rules.other.leadingSpaceTab, (U) => U.replace(this.rules.other.tabCharGlobal, "    ")), v.test(S) || B.test(S) || ie.test(S) || Te.test(S) || z.test(S) || q.test(S)) break;
            if (re.search(this.rules.other.nonSpaceChar) >= x || !S.trim()) g += `
` + re.slice(x);
            else {
              if (y || E.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || v.test(E) || B.test(E) || q.test(E)) break;
              g += `
` + S;
            }
            y = !S.trim(), p += ne + `
`, t = t.substring(ne.length + 1), E = re.slice(x);
          }
        }
        r.loose || (c ? r.loose = !0 : this.rules.other.doubleBlankLine.test(p) && (c = !0)), r.items.push({ type: "list_item", raw: p, task: !!this.options.gfm && this.rules.other.listIsTask.test(g), loose: !1, text: g, tokens: [] }), r.raw += p;
      }
      let l = r.items.at(-1);
      if (l) l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
      else return;
      r.raw = r.raw.trimEnd();
      for (let f of r.items) if (this.lexer.state.top = !1, f.tokens = this.lexer.blockTokens(f.text, []), !r.loose) {
        let p = f.tokens.filter((m) => m.type === "space"), g = p.length > 0 && p.some((m) => this.rules.other.anyLine.test(m.raw));
        r.loose = g;
      }
      for (let f of r.items) {
        let p = f.tokens[0];
        if (f.task && (p?.type === "text" || p?.type === "paragraph")) {
          f.text = f.text.replace(this.rules.other.listReplaceTask, ""), p.raw = p.raw.replace(this.rules.other.listReplaceTask, ""), p.text = p.text.replace(this.rules.other.listReplaceTask, "");
          for (let m = this.lexer.inlineQueue.length - 1; m >= 0; m--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[m].src)) {
            this.lexer.inlineQueue[m].src = this.lexer.inlineQueue[m].src.replace(this.rules.other.listReplaceTask, "");
            break;
          }
          let g = this.rules.other.listTaskCheckbox.exec(f.raw);
          if (g) {
            let m = { type: "checkbox", raw: g[0] + " ", checked: g[0] !== "[ ]" };
            f.checked = m.checked, r.loose ? f.tokens[0] && ["paragraph", "text"].includes(f.tokens[0].type) && "tokens" in f.tokens[0] && f.tokens[0].tokens ? (f.tokens[0].raw = m.raw + f.tokens[0].raw, f.tokens[0].text = m.raw + f.tokens[0].text, f.tokens[0].tokens.unshift(m)) : f.tokens.unshift({ type: "paragraph", raw: m.raw, text: m.raw, tokens: [m] }) : f.tokens.unshift(m);
          }
        } else f.task && (f.task = !1);
      }
      if (r.loose) for (let f of r.items) {
        f.loose = !0;
        for (let p of f.tokens) p.type === "text" && (p.type = "paragraph");
      }
      return r;
    }
  }
  html(t) {
    let e = this.rules.block.html.exec(t);
    if (e) {
      let n = Un(e[0]);
      return { type: "html", block: !0, raw: n, pre: e[1] === "pre" || e[1] === "script" || e[1] === "style", text: n };
    }
  }
  def(t) {
    let e = this.rules.block.def.exec(t);
    if (e) {
      let n = ct(e[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return { type: "def", tag: n, raw: ce(e[0], `
`), href: i, title: r };
    }
  }
  table(t) {
    let e = this.rules.block.table.exec(t);
    if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
    let n = $n(e[1]), i = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], o = { type: "table", raw: ce(e[0], `
`), header: [], align: [], rows: [] };
    if (n.length === i.length) {
      for (let c of i) this.rules.other.tableAlignRight.test(c) ? o.align.push("right") : this.rules.other.tableAlignCenter.test(c) ? o.align.push("center") : this.rules.other.tableAlignLeft.test(c) ? o.align.push("left") : o.align.push(null);
      for (let c = 0; c < n.length; c++) o.header.push({ text: n[c], tokens: this.lexer.inline(n[c]), header: !0, align: o.align[c] });
      for (let c of r) o.rows.push($n(c, o.header.length).map((l, f) => ({ text: l, tokens: this.lexer.inline(l), header: !1, align: o.align[f] })));
      return o;
    }
  }
  lheading(t) {
    let e = this.rules.block.lheading.exec(t);
    if (e) {
      let n = e[1].trim();
      return { type: "heading", raw: ce(e[0], `
`), depth: e[2].charAt(0) === "=" ? 1 : 2, text: n, tokens: this.lexer.inline(n) };
    }
  }
  paragraph(t) {
    let e = this.rules.block.paragraph.exec(t);
    if (e) {
      let n = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
      return { type: "paragraph", raw: e[0], text: n, tokens: this.lexer.inline(n) };
    }
  }
  text(t) {
    let e = this.rules.block.text.exec(t);
    if (e) return { type: "text", raw: e[0], text: e[0], tokens: this.lexer.inline(e[0]) };
  }
  escape(t) {
    let e = this.rules.inline.escape.exec(t);
    if (e) return { type: "escape", raw: e[0], text: e[1] };
  }
  tag(t) {
    let e = this.rules.inline.tag.exec(t);
    if (e) return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: e[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: e[0] };
  }
  link(t) {
    let e = this.rules.inline.link.exec(t);
    if (e) {
      let n = e[0].charAt(0) === "!" ? 2 : 1;
      if (!this.options.pedantic && Hn(t, e[1], n, this.rules)) return;
      let i = e[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(i)) {
        if (!this.rules.other.endAngleBracket.test(i)) return;
        let c = ce(i.slice(0, -1), "\\");
        if ((i.length - c.length) % 2 === 0) return;
      } else {
        let c = Zs(e[2], "()");
        if (c === -2) return;
        if (c > -1) {
          let l = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + c;
          e[2] = e[2].substring(0, c), e[0] = e[0].substring(0, l).trim(), e[3] = "";
        }
      }
      let r = e[2], o = "";
      if (this.options.pedantic) {
        let c = this.rules.other.pedanticHrefTitle.exec(r);
        c && (r = c[1], o = c[3]);
      } else o = e[3] ? e[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(i) ? r = r.slice(1) : r = r.slice(1, -1)), Bn(e, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer, this.rules);
    }
  }
  reflink(t, e) {
    let n;
    if ((n = this.rules.inline.reflink.exec(t)) || (n = this.rules.inline.nolink.exec(t))) {
      let i = n[0].charAt(0) === "!" ? 2 : 1;
      if (!this.options.pedantic && Hn(t, n[1], i, this.rules)) return;
      let r = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), o = e[ct(r)];
      if (!o) {
        let c = n[0].charAt(0);
        return { type: "text", raw: c, text: c };
      }
      return Bn(n, o, n[0], this.lexer, this.rules);
    }
  }
  emStrong(t, e, n = "") {
    let i = this.rules.inline.emStrongLDelim.exec(t);
    if (!(!i || !i[1] && !i[2] && !i[3] && !i[4] || i[4] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(i[1] || i[3]) || !n || this.rules.inline.punctuation.exec(n))) {
      let r = [...i[0]].length - 1, o, c, l = r, f = 0, p = i[0][0], g = n === p, m = p === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (m.lastIndex = 0, e = e.slice(-1 * t.length + r); (i = m.exec(e)) !== null; ) {
        if (o = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !o) continue;
        if (c = [...o].length, i[3] || i[4]) {
          l += c;
          continue;
        } else if (i[5] || i[6]) {
          if (r % 3 && !((r + c) % 3)) {
            f += c;
            continue;
          }
          if (g) break;
        }
        if (l -= c, l > 0) continue;
        c = Math.min(c, c + l + f);
        let I = [...i[0]][0].length, E = t.slice(0, r + i.index + I + c);
        if (Math.min(r, c) % 2) {
          let y = E.slice(1, -1);
          return { type: "em", raw: E, text: y, tokens: this.lexer.inlineTokens(y) };
        }
        let S = E.slice(2, -2);
        return { type: "strong", raw: E, text: S, tokens: this.lexer.inlineTokens(S) };
      }
    }
  }
  codespan(t) {
    let e = this.rules.inline.code.exec(t);
    if (e) {
      let n = e[2].replace(this.rules.other.newLineCharGlobal, " "), i = this.rules.other.nonSpaceChar.test(n), r = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return i && r && (n = n.substring(1, n.length - 1)), { type: "codespan", raw: e[0], text: n };
    }
  }
  br(t) {
    let e = this.rules.inline.br.exec(t);
    if (e) return { type: "br", raw: e[0] };
  }
  del(t, e, n = "") {
    let i = this.rules.inline.delLDelim.exec(t);
    if (i && (!i[1] || !n || this.rules.inline.punctuation.exec(n))) {
      let r = [...i[0]].length - 1, o, c, l = r, f = this.rules.inline.delRDelim;
      for (f.lastIndex = 0, e = e.slice(-1 * t.length + r); (i = f.exec(e)) !== null; ) {
        if (o = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !o || (c = [...o].length, c !== r)) continue;
        if (i[3] || i[4]) {
          l += c;
          continue;
        }
        if (l -= c, l > 0) continue;
        c = Math.min(c, c + l);
        let p = [...i[0]][0].length, g = t.slice(0, r + i.index + p + c), m = g.slice(r, -r);
        return { type: "del", raw: g, text: m, tokens: this.lexer.inlineTokens(m) };
      }
    }
  }
  autolink(t) {
    let e = this.rules.inline.autolink.exec(t);
    if (e) {
      let n, i;
      return e[2] === "@" ? (n = e[1], i = "mailto:" + n) : (n = e[1], i = n), { type: "link", raw: e[0], text: n, href: i, autolink: !0, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  url(t) {
    let e;
    if (e = this.rules.inline.url.exec(t)) {
      let n, i;
      if (e[2] === "@") n = e[0], i = "mailto:" + n;
      else {
        let r;
        do
          r = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
        while (r !== e[0]);
        n = e[0], e[1] === "www." ? i = "http://" + e[0] : i = e[0];
      }
      return { type: "link", raw: e[0], text: n, href: i, autolink: !0, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  inlineText(t) {
    let e = this.rules.inline.text.exec(t);
    if (e) {
      let n = this.lexer.state.inRawBlock;
      return { type: "text", raw: e[0], text: n ? e[0] : js(e[0]), escaped: n };
    }
  }
}, V = class Ft {
  tokens;
  options;
  state;
  inlineQueue;
  tokenizer;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || xe, this.options.tokenizer = this.options.tokenizer || new ut(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, linkEmitted: !1, top: !0 };
    let n = { other: $, block: ot.normal, inline: $e.normal };
    this.options.pedantic ? (n.block = ot.pedantic, n.inline = $e.pedantic) : this.options.gfm && (n.block = ot.gfm, this.options.breaks ? n.inline = $e.breaks : n.inline = $e.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: ot, inline: $e };
  }
  static lex(e, n) {
    return new Ft(n).lex(e);
  }
  static lexInline(e, n) {
    return new Ft(n).inlineTokens(e);
  }
  lex(e) {
    e = e.replace($.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      let i = this.inlineQueue[n];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, n = [], i = !1) {
    this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace($.tabCharGlobal, "    ").replace($.spaceLine, ""));
    let r = 1 / 0;
    for (; e; ) {
      if (e.length < r) r = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      let o;
      if (this.options.extensions?.block?.some((l) => (o = l.call({ lexer: this }, e, n)) ? (e = e.substring(o.raw.length), n.push(o), !0) : !1)) continue;
      if (o = this.tokenizer.space(e)) {
        e = e.substring(o.raw.length);
        let l = n.at(-1);
        o.raw.length === 1 && l !== void 0 ? l.raw += `
` : n.push(o);
        continue;
      }
      if (o = this.tokenizer.code(e)) {
        e = e.substring(o.raw.length);
        let l = n.at(-1);
        l?.type === "paragraph" || l?.type === "text" ? (l.raw += (l.raw.endsWith(`
`) ? "" : `
`) + o.raw, l.text += `
` + o.text, this.inlineQueue.at(-1).src = l.text) : n.push(o);
        continue;
      }
      if (o = this.tokenizer.fences(e)) {
        e = e.substring(o.raw.length), n.push(o);
        continue;
      }
      if (o = this.tokenizer.heading(e)) {
        e = e.substring(o.raw.length), n.push(o);
        continue;
      }
      if (o = this.tokenizer.hr(e)) {
        e = e.substring(o.raw.length), n.push(o);
        continue;
      }
      if (o = this.tokenizer.blockquote(e)) {
        e = e.substring(o.raw.length), n.push(o);
        continue;
      }
      if (o = this.tokenizer.list(e)) {
        e = e.substring(o.raw.length), n.push(o);
        continue;
      }
      if (o = this.tokenizer.html(e)) {
        e = e.substring(o.raw.length), n.push(o);
        continue;
      }
      if (o = this.tokenizer.def(e)) {
        e = e.substring(o.raw.length);
        let l = n.at(-1);
        l?.type === "paragraph" || l?.type === "text" ? (l.raw += (l.raw.endsWith(`
`) ? "" : `
`) + o.raw, l.text += `
` + o.raw, this.inlineQueue.at(-1).src = l.text) : this.tokens.links[o.tag] || (this.tokens.links[o.tag] = { href: o.href, title: o.title }, n.push(o));
        continue;
      }
      if (o = this.tokenizer.table(e)) {
        e = e.substring(o.raw.length), n.push(o);
        continue;
      }
      if (o = this.tokenizer.lheading(e)) {
        e = e.substring(o.raw.length), n.push(o);
        continue;
      }
      let c = e;
      if (this.options.extensions?.startBlock) {
        let l = 1 / 0, f = e.slice(1), p;
        this.options.extensions.startBlock.forEach((g) => {
          p = g.call({ lexer: this }, f), typeof p == "number" && p >= 0 && (l = Math.min(l, p));
        }), l < 1 / 0 && l >= 0 && (c = e.substring(0, l + 1));
      }
      if (this.state.top && (o = this.tokenizer.paragraph(c))) {
        let l = n.at(-1);
        i && l?.type === "paragraph" ? (l.raw += (l.raw.endsWith(`
`) ? "" : `
`) + o.raw, l.text += `
` + o.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = l.text) : n.push(o), i = c.length !== e.length, e = e.substring(o.raw.length);
        continue;
      }
      if (o = this.tokenizer.text(e)) {
        e = e.substring(o.raw.length);
        let l = n.at(-1);
        l?.type === "text" ? (l.raw += (l.raw.endsWith(`
`) ? "" : `
`) + o.raw, l.text += `
` + o.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = l.text) : n.push(o);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return this.state.top = !0, n;
  }
  inline(e, n = []) {
    return this.inlineQueue.push({ src: e, tokens: n }), n;
  }
  linkInText(e) {
    if (!e.includes("[")) return !1;
    let n = this.tokenizer.rules.inline.link;
    for (let i of e.matchAll(this.tokenizer.rules.inline.blockSkip)) if (n.test(i[0]) && e.charAt(i.index - 1) !== "!") return !0;
    for (let i of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)) {
      let r = i[0], o = r.lastIndexOf("[");
      if (!(r.charAt(0) === "!" || !Object.hasOwn(this.tokens.links, ct(r.slice(o + 1, -1)))) && !(o > 1 && this.linkInText(r.slice(1, o - 1)))) return !0;
    }
    return !1;
  }
  inlineTokens(e, n = []) {
    this.tokenizer.lexer = this;
    let i = e;
    if (this.tokens.links && e.includes("[")) {
      let l = this.tokenizer.rules.inline.reflinkSearch, f = (p) => {
        let g = p.lastIndexOf("[");
        if (!Object.hasOwn(this.tokens.links, ct(p.slice(g + 1, -1)))) return p;
        if (g > 1 && p.charAt(0) !== "!") {
          let m = p.slice(1, g - 1);
          if (this.linkInText(m)) return "[" + m.replace(l, f) + "][" + "a".repeat(p.length - g - 2) + "]";
        }
        return "[" + "a".repeat(p.length - 2) + "]";
      };
      i = i.replace(l, f);
    }
    i = i.replace(this.tokenizer.rules.inline.anyPunctuation, (l) => "+".repeat(l.length)), i = i.replace(this.tokenizer.rules.inline.blockSkip, (l, f, p) => {
      let g = p ? p.length : 0;
      return l.slice(0, g) + "[" + "a".repeat(l.length - g - 2) + "]";
    }), i = this.options.hooks?.emStrongMask?.call({ lexer: this }, i) ?? i;
    let r = !1, o = "", c = 1 / 0;
    for (; e; ) {
      if (e.length < c) c = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      r || (o = ""), r = !1;
      let l;
      if (this.options.extensions?.inline?.some((p) => (l = p.call({ lexer: this }, e, n)) ? (e = e.substring(l.raw.length), n.push(l), !0) : !1)) continue;
      if (l = this.tokenizer.escape(e)) {
        e = e.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.tag(e)) {
        e = e.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.link(e)) {
        e = e.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(l.raw.length);
        let p = n.at(-1);
        l.type === "text" && p?.type === "text" ? (p.raw += l.raw, p.text += l.text) : n.push(l);
        continue;
      }
      if (l = this.tokenizer.emStrong(e, i, o)) {
        e = e.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.codespan(e)) {
        e = e.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.br(e)) {
        e = e.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.del(e, i, o)) {
        e = e.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.autolink(e)) {
        e = e.substring(l.raw.length), n.push(l);
        continue;
      }
      if (!this.state.inLink && (l = this.tokenizer.url(e))) {
        e = e.substring(l.raw.length), n.push(l);
        continue;
      }
      let f = e;
      if (this.options.extensions?.startInline) {
        let p = 1 / 0, g = e.slice(1), m;
        this.options.extensions.startInline.forEach((I) => {
          m = I.call({ lexer: this }, g), typeof m == "number" && m >= 0 && (p = Math.min(p, m));
        }), p < 1 / 0 && p >= 0 && (f = e.substring(0, p + 1));
      }
      if (l = this.tokenizer.inlineText(f)) {
        e = e.substring(l.raw.length), l.raw.slice(-1) !== "_" && (o = l.raw.slice(-1)), r = !0;
        let p = n.at(-1);
        p?.type === "text" ? (p.raw += l.raw, p.text += l.text) : n.push(l);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return n;
  }
  infiniteLoopError(e) {
    let n = "Infinite loop on byte: " + e;
    if (this.options.silent) console.error(n);
    else throw new Error(n);
  }
}, pt = class {
  options;
  parser;
  constructor(t) {
    this.options = t || xe;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: e, escaped: n }) {
    let i = (e || "").match($.notSpaceStart)?.[0], r = t ? t.replace($.endingNewline, "") + `
` : "";
    return i ? '<pre><code class="language-' + Z(i) + '">' + (n ? r : Z(r, !0)) + `</code></pre>
` : "<pre><code>" + (n ? r : Z(r, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  def(t) {
    return "";
  }
  heading({ tokens: t, depth: e }) {
    return `<h${e}>${this.parser.parseInline(t)}</h${e}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    let e = t.ordered, n = t.start, i = "";
    for (let c = 0; c < t.items.length; c++) {
      let l = t.items[c];
      i += this.listitem(l);
    }
    let r = e ? "ol" : "ul", o = e && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + r + o + `>
` + i + "</" + r + `>
`;
  }
  listitem(t) {
    return `<li>${this.parser.parse(t.tokens)}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let e = "", n = "";
    for (let r = 0; r < t.header.length; r++) n += this.tablecell(t.header[r]);
    e += this.tablerow({ text: n });
    let i = "";
    for (let r = 0; r < t.rows.length; r++) {
      let o = t.rows[r];
      n = "";
      for (let c = 0; c < o.length; c++) n += this.tablecell(o[c]);
      i += this.tablerow({ text: n });
    }
    return i && (i = `<tbody>${i}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + i + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    let e = this.parser.parseInline(t.tokens), n = t.header ? "th" : "td";
    return (t.align ? `<${n} align="${t.align}">` : `<${n}>`) + e + `</${n}>
`;
  }
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${Z(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: e, text: n, tokens: i, autolink: r }) {
    let o = r ? Z(n, !0) : this.parser.parseInline(i), c = Mn(t);
    if (c === null) return o;
    t = Z(c, r);
    let l = '<a href="' + t + '"';
    return e && (l += ' title="' + Z(e) + '"'), l += ">" + o + "</a>", l;
  }
  image({ href: t, title: e, text: n, tokens: i }) {
    i && (n = this.parser.parseInline(i, this.parser.textRenderer));
    let r = Mn(t);
    if (r === null) return Z(n);
    t = r;
    let o = `<img src="${Z(t)}" alt="${Z(n)}"`;
    return e && (o += ` title="${Z(e)}"`), o += ">", o;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Z(t.text);
  }
}, Vt = class {
  strong({ text: t }) {
    return t;
  }
  em({ text: t }) {
    return t;
  }
  codespan({ text: t }) {
    return t;
  }
  del({ text: t }) {
    return t;
  }
  html({ text: t }) {
    return t;
  }
  text({ text: t }) {
    return t;
  }
  link({ text: t }) {
    return "" + t;
  }
  image({ text: t }) {
    return "" + t;
  }
  br() {
    return "";
  }
  checkbox({ raw: t }) {
    return t;
  }
}, K = class Bt {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || xe, this.options.renderer = this.options.renderer || new pt(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Vt();
  }
  static parse(e, n) {
    return new Bt(n).parse(e);
  }
  static parseInline(e, n) {
    return new Bt(n).parseInline(e);
  }
  parse(e) {
    this.renderer.parser = this;
    let n = "";
    for (let i = 0; i < e.length; i++) {
      let r = e[i];
      if (this.options.extensions?.renderers?.[r.type]) {
        let c = r, l = this.options.extensions.renderers[c.type].call({ parser: this }, c);
        if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "checkbox", "html", "def", "paragraph", "text"].includes(c.type)) {
          n += l || "";
          continue;
        }
      }
      let o = r;
      switch (o.type) {
        case "space": {
          n += this.renderer.space(o);
          break;
        }
        case "hr": {
          n += this.renderer.hr(o);
          break;
        }
        case "heading": {
          n += this.renderer.heading(o);
          break;
        }
        case "code": {
          n += this.renderer.code(o);
          break;
        }
        case "table": {
          n += this.renderer.table(o);
          break;
        }
        case "blockquote": {
          n += this.renderer.blockquote(o);
          break;
        }
        case "list": {
          n += this.renderer.list(o);
          break;
        }
        case "checkbox": {
          n += this.renderer.checkbox(o);
          break;
        }
        case "html": {
          n += this.renderer.html(o);
          break;
        }
        case "def": {
          n += this.renderer.def(o);
          break;
        }
        case "paragraph": {
          n += this.renderer.paragraph(o);
          break;
        }
        case "text": {
          n += this.renderer.text(o);
          break;
        }
        default: {
          let c = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(c), "";
          throw new Error(c);
        }
      }
    }
    return n;
  }
  parseInline(e, n = this.renderer) {
    this.renderer.parser = this;
    let i = "";
    for (let r = 0; r < e.length; r++) {
      let o = e[r];
      if (this.options.extensions?.renderers?.[o.type]) {
        let l = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (l !== !1 || !["escape", "html", "link", "image", "checkbox", "strong", "em", "codespan", "br", "del", "text"].includes(o.type)) {
          i += l || "";
          continue;
        }
      }
      let c = o;
      switch (c.type) {
        case "escape": {
          i += n.text(c);
          break;
        }
        case "html": {
          i += n.html(c);
          break;
        }
        case "link": {
          i += n.link(c);
          break;
        }
        case "image": {
          i += n.image(c);
          break;
        }
        case "checkbox": {
          i += n.checkbox(c);
          break;
        }
        case "strong": {
          i += n.strong(c);
          break;
        }
        case "em": {
          i += n.em(c);
          break;
        }
        case "codespan": {
          i += n.codespan(c);
          break;
        }
        case "br": {
          i += n.br(c);
          break;
        }
        case "del": {
          i += n.del(c);
          break;
        }
        case "text": {
          i += n.text(c);
          break;
        }
        default: {
          let l = 'Token with "' + c.type + '" type was not found.';
          if (this.options.silent) return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return i;
  }
}, He = class {
  options;
  block;
  constructor(t) {
    this.options = t || xe;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
  static passThroughHooksRespectAsync = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(t) {
    return t;
  }
  postprocess(t) {
    return t;
  }
  processAllTokens(t) {
    return t;
  }
  emStrongMask(t) {
    return t;
  }
  provideLexer(t = this.block) {
    return t ? V.lex : V.lexInline;
  }
  provideParser(t = this.block) {
    return t ? K.parse : K.parseInline;
  }
}, fr = class {
  defaults = qt();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = K;
  Renderer = pt;
  TextRenderer = Vt;
  Lexer = V;
  Tokenizer = ut;
  Hooks = He;
  constructor(...t) {
    this.use(...t);
  }
  walkTokens(t, e) {
    let n = [];
    for (let i of t) switch (n = n.concat(e.call(this, i)), i.type) {
      case "table": {
        let r = i;
        for (let o of r.header) n = n.concat(this.walkTokens(o.tokens, e));
        for (let o of r.rows) for (let c of o) n = n.concat(this.walkTokens(c.tokens, e));
        break;
      }
      case "list": {
        let r = i;
        n = n.concat(this.walkTokens(r.items, e));
        break;
      }
      default: {
        let r = i;
        this.defaults.extensions?.childTokens?.[r.type] ? this.defaults.extensions.childTokens[r.type].forEach((o) => {
          let c = r[o].flat(1 / 0);
          n = n.concat(this.walkTokens(c, e));
        }) : r.tokens && (n = n.concat(this.walkTokens(r.tokens, e)));
      }
    }
    return n;
  }
  use(...t) {
    let e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((n) => {
      let i = { ...n };
      if (i.async = this.defaults.async || i.async || !1, n.extensions && (n.extensions.forEach((r) => {
        if (!r.name) throw new Error("extension name required");
        if ("renderer" in r) {
          let o = e.renderers[r.name];
          o ? e.renderers[r.name] = function(...c) {
            let l = r.renderer.apply(this, c);
            return l === !1 && (l = o.apply(this, c)), l;
          } : e.renderers[r.name] = r.renderer;
        }
        if ("tokenizer" in r) {
          if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let o = e[r.level];
          o ? o.unshift(r.tokenizer) : e[r.level] = [r.tokenizer], r.start && (r.level === "block" ? e.startBlock ? e.startBlock.push(r.start) : e.startBlock = [r.start] : r.level === "inline" && (e.startInline ? e.startInline.push(r.start) : e.startInline = [r.start]));
        }
        "childTokens" in r && r.childTokens && (e.childTokens[r.name] = r.childTokens);
      }), i.extensions = e), n.renderer) {
        let r = this.defaults.renderer || new pt(this.defaults);
        for (let o in n.renderer) {
          if (!(o in r)) throw new Error(`renderer '${o}' does not exist`);
          if (["options", "parser"].includes(o)) continue;
          let c = o, l = n.renderer[c], f = r[c];
          r[c] = (...p) => {
            let g = l.apply(r, p);
            return g === !1 && (g = f.apply(r, p)), g || "";
          };
        }
        i.renderer = r;
      }
      if (n.tokenizer) {
        let r = this.defaults.tokenizer || new ut(this.defaults);
        for (let o in n.tokenizer) {
          if (!(o in r)) throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o)) continue;
          let c = o, l = n.tokenizer[c], f = r[c];
          r[c] = (...p) => {
            let g = l.apply(r, p);
            return g === !1 && (g = f.apply(r, p)), g;
          };
        }
        i.tokenizer = r;
      }
      if (n.hooks) {
        let r = this.defaults.hooks || new He();
        for (let o in n.hooks) {
          if (!(o in r)) throw new Error(`hook '${o}' does not exist`);
          if (["options", "block"].includes(o)) continue;
          let c = o, l = n.hooks[c], f = r[c];
          He.passThroughHooks.has(o) ? r[c] = (p) => {
            if (this.defaults.async && He.passThroughHooksRespectAsync.has(o)) return (async () => {
              let m = await l.call(r, p);
              return f.call(r, m);
            })();
            let g = l.call(r, p);
            return f.call(r, g);
          } : r[c] = (...p) => {
            if (this.defaults.async) return (async () => {
              let m = await l.apply(r, p);
              return m === !1 && (m = await f.apply(r, p)), m;
            })();
            let g = l.apply(r, p);
            return g === !1 && (g = f.apply(r, p)), g;
          };
        }
        i.hooks = r;
      }
      if (n.walkTokens) {
        let r = this.defaults.walkTokens, o = n.walkTokens;
        i.walkTokens = function(c) {
          let l = [];
          return l.push(o.call(this, c)), r && (l = l.concat(r.call(this, c))), l;
        };
      }
      this.defaults = { ...this.defaults, ...i };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, e) {
    return V.lex(t, e ?? this.defaults);
  }
  parser(t, e) {
    return K.parse(t, e ?? this.defaults);
  }
  parseMarkdown(t) {
    return (e, n) => {
      let i = { ...n }, r = { ...this.defaults, ...i }, o = this.onError(!!r.silent, !!r.async);
      if (this.defaults.async === !0 && i.async === !1) return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof e > "u" || e === null) return o(new Error("marked(): input parameter is undefined or null"));
      if (typeof e != "string") return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
      if (r.hooks && (r.hooks.options = r, r.hooks.block = t), r.async) return (async () => {
        let c = r.hooks ? await r.hooks.preprocess(e) : e, l = await (r.hooks ? await r.hooks.provideLexer(t) : t ? V.lex : V.lexInline)(c, r), f = r.hooks ? await r.hooks.processAllTokens(l) : l;
        r.walkTokens && await Promise.all(this.walkTokens(f, r.walkTokens));
        let p = await (r.hooks ? await r.hooks.provideParser(t) : t ? K.parse : K.parseInline)(f, r);
        return r.hooks ? await r.hooks.postprocess(p) : p;
      })().catch(o);
      try {
        r.hooks && (e = r.hooks.preprocess(e));
        let c = (r.hooks ? r.hooks.provideLexer(t) : t ? V.lex : V.lexInline)(e, r);
        r.hooks && (c = r.hooks.processAllTokens(c)), r.walkTokens && this.walkTokens(c, r.walkTokens);
        let l = (r.hooks ? r.hooks.provideParser(t) : t ? K.parse : K.parseInline)(c, r);
        return r.hooks && (l = r.hooks.postprocess(l)), l;
      } catch (c) {
        return o(c);
      }
    };
  }
  onError(t, e) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        let i = "<p>An error occurred:</p><pre>" + Z(n.message + "", !0) + "</pre>";
        return e ? Promise.resolve(i) : i;
      }
      if (e) return Promise.reject(n);
      throw n;
    };
  }
}, be = new fr();
function A(t, e) {
  return be.parse(t, e);
}
A.options = A.setOptions = function(t) {
  return be.setOptions(t), A.defaults = be.defaults, sr(A.defaults), A;
};
A.getDefaults = qt;
A.defaults = xe;
function Xs(...t) {
  return be.use(...t), A.defaults = be.defaults, sr(A.defaults), A;
}
A.use = Xs;
A.walkTokens = function(t, e) {
  return be.walkTokens(t, e);
};
A.parseInline = be.parseInline;
A.Parser = K;
A.parser = K.parse;
A.Renderer = pt;
A.TextRenderer = Vt;
A.Lexer = V;
A.lexer = V.lex;
A.Tokenizer = ut;
A.Hooks = He;
A.parse = A;
A.options;
A.setOptions;
A.walkTokens;
A.parseInline;
K.parse;
V.lex;
/*! @license DOMPurify 3.4.16 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.16/LICENSE */
function Gn(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
  return i;
}
function Qs(t) {
  if (Array.isArray(t)) return t;
}
function Vs(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var i, r, o, c, l = [], f = !0, p = !1;
    try {
      if (o = (n = n.call(t)).next, e !== 0) for (; !(f = (i = o.call(n)).done) && (l.push(i.value), l.length !== e); f = !0) ;
    } catch (g) {
      p = !0, r = g;
    } finally {
      try {
        if (!f && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (p) throw r;
      }
    }
    return l;
  }
}
function Ks() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
function Js(t, e) {
  return Qs(t) || Vs(t, e) || ei(t, e) || Ks();
}
function ei(t, e) {
  if (t) {
    if (typeof t == "string") return Gn(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Gn(t, e) : void 0;
  }
}
const dr = Object.entries, qn = Object.setPrototypeOf, ti = Object.isFrozen, ni = Object.getPrototypeOf, ri = Object.getOwnPropertyDescriptor;
let N = Object.freeze, M = Object.seal, Pe = Object.create, gr = typeof Reflect < "u" && Reflect, Ht = gr.apply, Gt = gr.construct;
N || (N = function(e) {
  return e;
});
M || (M = function(e) {
  return e;
});
Ht || (Ht = function(e, n) {
  for (var i = arguments.length, r = new Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++) r[o - 2] = arguments[o];
  return e.apply(n, r);
});
Gt || (Gt = function(e) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
  return new e(...i);
});
const me = C(Array.prototype.forEach), si = C(Array.prototype.lastIndexOf), Wn = C(Array.prototype.pop), Ue = C(Array.prototype.push), ii = C(Array.prototype.splice), De = Array.isArray, Ge = C(String.prototype.toLowerCase), vt = C(String.prototype.toString), jn = C(String.prototype.match), Fe = C(String.prototype.replace), Zn = C(String.prototype.indexOf), oi = C(String.prototype.trim), li = C(Number.prototype.toString), ai = C(Boolean.prototype.toString), Yn = typeof BigInt > "u" ? null : C(BigInt.prototype.toString), Xn = typeof Symbol > "u" ? null : C(Symbol.prototype.toString), G = C(Object.prototype.hasOwnProperty), Be = C(Object.prototype.toString), F = C(RegExp.prototype.test), ue = ci(TypeError);
function C(t) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
    return Ht(t, e, i);
  };
}
function ci(t) {
  return function() {
    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
    return Gt(t, n);
  };
}
function w(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ge;
  if (qn && qn(t, null), !De(e)) return t;
  let i = e.length;
  for (; i--; ) {
    let r = e[i];
    if (typeof r == "string") {
      const o = n(r);
      o !== r && (ti(e) || (e[i] = o), r = o);
    }
    t[r] = !0;
  }
  return t;
}
function ui(t) {
  for (let e = 0; e < t.length; e++) G(t, e) || (t[e] = null);
  return t;
}
function Y(t) {
  const e = Pe(null);
  for (const i of dr(t)) {
    var n = Js(i, 2);
    const r = n[0], o = n[1];
    G(t, r) && (De(o) ? e[r] = ui(o) : o && typeof o == "object" && o.constructor === Object ? e[r] = Y(o) : e[r] = o);
  }
  return e;
}
function pi(t) {
  switch (typeof t) {
    case "string":
      return t;
    case "number":
      return li(t);
    case "boolean":
      return ai(t);
    case "bigint":
      return Yn ? Yn(t) : "0";
    case "symbol":
      return Xn ? Xn(t) : "Symbol()";
    case "undefined":
      return Be(t);
    case "function":
    case "object": {
      if (t === null) return Be(t);
      const e = t, n = Q(e, "toString");
      if (typeof n == "function") {
        const i = n(e);
        return typeof i == "string" ? i : Be(i);
      }
      return Be(t);
    }
    default:
      return Be(t);
  }
}
function Q(t, e) {
  for (; t !== null; ) {
    const i = ri(t, e);
    if (i) {
      if (i.get) return C(i.get);
      if (typeof i.value == "function") return C(i.value);
    }
    t = ni(t);
  }
  function n() {
    return null;
  }
  return n;
}
function hi(t) {
  try {
    return F(t, ""), !0;
  } catch {
    return !1;
  }
}
const Qn = N([
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "content",
  "data",
  "datalist",
  "dd",
  "decorator",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "search",
  "section",
  "select",
  "shadow",
  "slot",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
]), Ct = N([
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "enterkeyhint",
  "exportparts",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "inputmode",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "part",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern"
]), zt = N([
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
]), fi = N([
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
]), Nt = N([
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "mprescripts"
]), di = N([
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
]), Vn = N(["#text"]), Kn = N([
  "accept",
  "action",
  "align",
  "alt",
  "autocapitalize",
  "autocomplete",
  "autopictureinpicture",
  "autoplay",
  "background",
  "bgcolor",
  "border",
  "capture",
  "cellpadding",
  "cellspacing",
  "checked",
  "cite",
  "class",
  "clear",
  "color",
  "cols",
  "colspan",
  "command",
  "commandfor",
  "controls",
  "controlslist",
  "coords",
  "crossorigin",
  "datetime",
  "decoding",
  "default",
  "dir",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "download",
  "draggable",
  "enctype",
  "enterkeyhint",
  "exportparts",
  "face",
  "for",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "id",
  "inert",
  "inputmode",
  "integrity",
  "ismap",
  "kind",
  "label",
  "lang",
  "list",
  "loading",
  "loop",
  "low",
  "max",
  "maxlength",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nonce",
  "noshade",
  "novalidate",
  "nowrap",
  "open",
  "optimum",
  "part",
  "pattern",
  "placeholder",
  "playsinline",
  "popover",
  "popovertarget",
  "popovertargetaction",
  "poster",
  "preload",
  "pubdate",
  "radiogroup",
  "readonly",
  "rel",
  "required",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "spellcheck",
  "scope",
  "selected",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "srclang",
  "start",
  "src",
  "srcset",
  "step",
  "style",
  "summary",
  "tabindex",
  "title",
  "translate",
  "type",
  "usemap",
  "valign",
  "value",
  "width",
  "wrap",
  "xmlns"
]), Mt = N([
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "amplitude",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "exponent",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "intercept",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "mask-type",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "pointer-events",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "slope",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "tablevalues",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-orientation",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "vector-effect",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
]), Jn = N([
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnalign",
  "columnlines",
  "columnspacing",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lquote",
  "lspace",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
]), lt = N([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), gi = M(/{{[\w\W]*|^[\w\W]*}}/g), mi = M(/<%[\w\W]*|^[\w\W]*%>/g), ki = M(/\${[\w\W]*/g), bi = M(/^data-[\-\w.\u00B7-\uFFFF]+$/), xi = M(/^aria-[\-\w]+$/), er = M(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Ti = M(/^(?:\w+script|data):/i), _i = M(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), wi = M(/^html$/i), yi = M(/^[a-z][.\w]*(-[.\w]+)+$/i), tr = M(/<[/\w!]/g), nr = M(/<[/\w]/g), Si = M(/<\/no(script|embed|frames)/i), Ai = M(/\/>/i), j = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  entityNode: 6,
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
}, mr = [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
], Ei = N(w({}, mr)), Ri = function() {
  const t = {};
  return me(mr, (e) => {
    t[e] = M(new RegExp("</" + e + "(?=[\\t\\n\\f\\r />])", "i"));
  }), N(t);
}(), Li = function() {
  return typeof window > "u" ? null : window;
}, Oi = function(e, n) {
  if (typeof e != "object" || typeof e.createPolicy != "function") return null;
  let i = null;
  const r = "data-tt-policy-suffix";
  n && n.hasAttribute(r) && (i = n.getAttribute(r));
  const o = "dompurify" + (i ? "#" + i : "");
  try {
    return e.createPolicy(o, {
      createHTML(c) {
        return c;
      },
      createScriptURL(c) {
        return c;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
}, rr = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
}, pe = function(e, n, i, r) {
  return G(e, n) && De(e[n]) ? w(r.base ? Y(r.base) : {}, e[n], r.transform) : i;
}, $t = function(e, n, i) {
  const r = G(e, n) ? e[n] : void 0;
  return r && typeof r == "object" ? Y(r) : i();
};
function kr() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Li();
  const e = (h) => kr(h);
  if (e.version = "3.4.16", e.removed = [], !t || !t.document || t.document.nodeType !== j.document || !t.Element)
    return e.isSupported = !1, e;
  let n = t.document;
  const i = n, r = i.currentScript;
  t.DocumentFragment;
  const o = t.HTMLTemplateElement, c = t.Node, l = t.Element, f = t.NodeFilter;
  t.NamedNodeMap === void 0 && (t.NamedNodeMap || t.MozNamedAttrMap), t.HTMLFormElement;
  const p = t.DOMParser, g = t.trustedTypes, m = l.prototype, I = Q(m, "cloneNode"), E = Q(m, "remove"), S = Q(m, "removeAttributeNode"), y = Q(m, "nextSibling"), x = Q(m, "childNodes"), z = Q(m, "parentNode"), q = Q(m, "shadowRoot"), v = Q(m, "attributes"), B = c && c.prototype ? Q(c.prototype, "nodeType") : null, ie = c && c.prototype ? Q(c.prototype, "nodeName") : null, Te = c && c.prototype ? Q(c.prototype, "ownerDocument") : null, ne = function(s) {
    return B ? B(s) : s.nodeType;
  }, re = function(s) {
    return ie ? ie(s) : s.nodeName;
  };
  if (typeof o == "function") {
    const h = n.createElement("template");
    h.content && h.content.ownerDocument && (n = h.content.ownerDocument);
  }
  let U, he = "", ht, Kt = !1, Ce = 0;
  const Jt = function() {
    if (Ce > 0) throw ue('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, _e = function(s) {
    Jt(), Ce++;
    try {
      return U.createHTML(s);
    } finally {
      Ce--;
    }
  }, br = function(s) {
    Jt(), Ce++;
    try {
      return U.createScriptURL(s);
    } finally {
      Ce--;
    }
  }, xr = function() {
    return Kt || (ht = Oi(g, r), Kt = !0), ht;
  }, Ze = n, ft = Ze.implementation, en = Ze.createNodeIterator, Tr = Ze.createDocumentFragment, _r = Ze.getElementsByTagName, wr = i.importNode;
  let R = rr();
  e.isSupported = typeof dr == "function" && typeof z == "function" && ft && ft.createHTMLDocument !== void 0;
  const yr = gi, Sr = mi, Ar = ki, Er = bi, Rr = xi, Lr = Ti, tn = _i, Or = yi;
  let nn = er, L = null;
  const dt = w({}, [
    ...Qn,
    ...Ct,
    ...zt,
    ...Nt,
    ...Vn
  ]);
  let O = null;
  const gt = w({}, [
    ...Kn,
    ...Mt,
    ...Jn,
    ...lt
  ]);
  let J = Object.seal(Pe(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), ze = null, rn = null;
  const oe = Object.seal(Pe(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let sn = !0, mt = !0, on = !1, ln = !0, le = !1, fe = !0, de = !1, kt = !1, Ye = null, Xe = null, bt = !1, we = !1, Qe = !1, Ve = !1, an = !0, cn = !1;
  const un = "user-content-";
  let xt = !0, Tt = !1, ye = {}, Se = null;
  const pn = w({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let hn = null;
  const fn = w({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let dn = null;
  const gn = w({}, [
    "alt",
    "class",
    "for",
    "id",
    "label",
    "name",
    "pattern",
    "placeholder",
    "role",
    "summary",
    "title",
    "value",
    "style",
    "xmlns"
  ]), Ke = "http://www.w3.org/1998/Math/MathML", Je = "http://www.w3.org/2000/svg", ee = "http://www.w3.org/1999/xhtml";
  let Ae = ee, _t = !1, wt = null;
  const Ir = w({}, [
    Ke,
    Je,
    ee
  ], vt), mn = N([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let yt = w({}, mn);
  const kn = N(["annotation-xml"]);
  let St = w({}, kn);
  const Pr = w({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let Ne = null;
  const Dr = ["application/xhtml+xml", "text/html"], vr = "text/html";
  let D = null, Ee = null;
  const Cr = n.createElement("form"), bn = function(s) {
    return s instanceof RegExp || s instanceof Function;
  }, At = function() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Ee && Ee === s) return;
    (!s || typeof s != "object") && (s = {}), s = Y(s), Ne = Dr.indexOf(s.PARSER_MEDIA_TYPE) === -1 ? vr : s.PARSER_MEDIA_TYPE, D = Ne === "application/xhtml+xml" ? vt : Ge, L = pe(s, "ALLOWED_TAGS", dt, { transform: D }), O = pe(s, "ALLOWED_ATTR", gt, { transform: D }), wt = pe(s, "ALLOWED_NAMESPACES", Ir, { transform: vt }), dn = pe(s, "ADD_URI_SAFE_ATTR", gn, {
      transform: D,
      base: gn
    }), hn = pe(s, "ADD_DATA_URI_TAGS", fn, {
      transform: D,
      base: fn
    }), Se = pe(s, "FORBID_CONTENTS", pn, { transform: D }), ze = pe(s, "FORBID_TAGS", Y({}), { transform: D }), rn = pe(s, "FORBID_ATTR", Y({}), { transform: D }), ye = G(s, "USE_PROFILES") ? s.USE_PROFILES && typeof s.USE_PROFILES == "object" ? Y(s.USE_PROFILES) : s.USE_PROFILES : !1, sn = s.ALLOW_ARIA_ATTR !== !1, mt = s.ALLOW_DATA_ATTR !== !1, on = s.ALLOW_UNKNOWN_PROTOCOLS || !1, ln = s.ALLOW_SELF_CLOSE_IN_ATTR !== !1, le = s.SAFE_FOR_TEMPLATES || !1, fe = s.SAFE_FOR_XML !== !1, de = s.WHOLE_DOCUMENT || !1, we = s.RETURN_DOM || !1, Qe = s.RETURN_DOM_FRAGMENT || !1, Ve = s.RETURN_TRUSTED_TYPE || !1, bt = s.FORCE_BODY || !1, an = s.SANITIZE_DOM !== !1, cn = s.SANITIZE_NAMED_PROPS || !1, xt = s.KEEP_CONTENT !== !1, Tt = s.IN_PLACE || !1, nn = hi(s.ALLOWED_URI_REGEXP) ? s.ALLOWED_URI_REGEXP : er, Ae = typeof s.NAMESPACE == "string" ? s.NAMESPACE : ee, yt = $t(s, "MATHML_TEXT_INTEGRATION_POINTS", () => w({}, mn)), St = $t(s, "HTML_INTEGRATION_POINTS", () => w({}, kn));
    const a = $t(s, "CUSTOM_ELEMENT_HANDLING", () => Pe(null));
    if (J = Pe(null), G(a, "tagNameCheck") && bn(a.tagNameCheck) && (J.tagNameCheck = a.tagNameCheck), G(a, "attributeNameCheck") && bn(a.attributeNameCheck) && (J.attributeNameCheck = a.attributeNameCheck), G(a, "allowCustomizedBuiltInElements") && typeof a.allowCustomizedBuiltInElements == "boolean" && (J.allowCustomizedBuiltInElements = a.allowCustomizedBuiltInElements), M(J), le && (mt = !1), Qe && (we = !0), ye && (L = w({}, Vn), O = Pe(null), ye.html === !0 && (w(L, Qn), w(O, Kn)), ye.svg === !0 && (w(L, Ct), w(O, Mt), w(O, lt)), ye.svgFilters === !0 && (w(L, zt), w(O, Mt), w(O, lt)), ye.mathMl === !0 && (w(L, Nt), w(O, Jn), w(O, lt))), oe.tagCheck = null, oe.attributeCheck = null, G(s, "ADD_TAGS") && (typeof s.ADD_TAGS == "function" ? oe.tagCheck = s.ADD_TAGS : De(s.ADD_TAGS) && (L === dt && (L = Y(L)), w(L, s.ADD_TAGS, D))), G(s, "ADD_ATTR") && (typeof s.ADD_ATTR == "function" ? oe.attributeCheck = s.ADD_ATTR : De(s.ADD_ATTR) && (O === gt && (O = Y(O)), w(O, s.ADD_ATTR, D))), G(s, "ADD_FORBID_CONTENTS") && De(s.ADD_FORBID_CONTENTS) && (Se === pn && (Se = Y(Se)), w(Se, s.ADD_FORBID_CONTENTS, D)), xt && (L["#text"] = !0), de && w(L, [
      "html",
      "head",
      "body"
    ]), L.table && (w(L, ["tbody"]), delete ze.tbody), s.TRUSTED_TYPES_POLICY) {
      if (typeof s.TRUSTED_TYPES_POLICY.createHTML != "function") throw ue('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof s.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw ue('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const u = U;
      U = s.TRUSTED_TYPES_POLICY;
      try {
        he = _e("");
      } catch (d) {
        throw U = u, d;
      }
    } else s.TRUSTED_TYPES_POLICY === null ? (U = void 0, he = "") : (U === void 0 && (U = xr()), U && typeof he == "string" && (he = _e("")));
    N && N(s), Ee = s;
  }, xn = w({}, [
    ...Ct,
    ...zt,
    ...fi
  ]), Tn = w({}, [...Nt, ...di]), zr = function(s, a, u) {
    return a.namespaceURI === ee ? s === "svg" : a.namespaceURI === Ke ? s === "svg" && (u === "annotation-xml" || yt[u]) : !!xn[s];
  }, Nr = function(s, a, u) {
    return a.namespaceURI === ee ? s === "math" : a.namespaceURI === Je ? s === "math" && St[u] : !!Tn[s];
  }, Mr = function(s, a, u) {
    return a.namespaceURI === Je && !St[u] || a.namespaceURI === Ke && !yt[u] ? !1 : !Tn[s] && (Pr[s] || !xn[s]);
  }, $r = function(s) {
    let a = z(s);
    (!a || !a.tagName) && (a = {
      namespaceURI: Ae,
      tagName: "template"
    });
    const u = Ge(s.tagName), d = Ge(a.tagName);
    return wt[s.namespaceURI] ? s.namespaceURI === Je ? zr(u, a, d) : s.namespaceURI === Ke ? Nr(u, a, d) : s.namespaceURI === ee ? Mr(u, a, d) : !!(Ne === "application/xhtml+xml" && wt[s.namespaceURI]) : !1;
  }, ae = function(s) {
    Ue(e.removed, { element: s });
    try {
      z(s).removeChild(s);
    } catch {
      if (E(s), !z(s)) throw ue("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, _n = function(s, a, u) {
    try {
      S(s, a);
    } catch {
      try {
        s.removeAttribute(u);
      } catch {
      }
    }
  }, et = function(s) {
    tt(s);
    const a = x(s);
    if (a) {
      const d = [];
      me(a, (k) => {
        Ue(d, k);
      }), me(d, (k) => {
        try {
          E(k);
        } catch {
        }
      });
    }
    const u = v(s);
    if (u) for (let d = u.length - 1; d >= 0; --d) {
      const k = u[d], T = k && k.name;
      typeof T == "string" && _n(s, k, T);
    }
  }, ge = function(s, a, u) {
    if (!u) try {
      u = a.getAttributeNode(s);
    } catch {
      u = null;
    }
    Ue(e.removed, {
      attribute: u || null,
      from: a
    });
    try {
      u ? S(a, u) : a.removeAttribute(s);
    } catch {
      try {
        a.removeAttribute(s);
      } catch {
      }
    }
    if (s === "is")
      if (we || Qe) try {
        ae(a);
      } catch {
      }
      else try {
        a.setAttribute(s, "");
      } catch {
      }
  }, Ur = function(s) {
    const a = v(s);
    if (a)
      for (let u = a.length - 1; u >= 0; --u) {
        const d = a[u], k = d && d.name;
        typeof k != "string" || O[D(k)] || _n(s, d, k);
      }
  }, tt = function(s) {
    const a = [s];
    for (; a.length > 0; ) {
      const u = a.pop();
      ne(u) === j.element && Ur(u);
      const d = x(u);
      if (d) for (let k = d.length - 1; k >= 0; --k) a.push(d[k]);
    }
  }, wn = function(s, a) {
    return fe ? s === "patchsrc" ? !0 : s === "for" && a !== "label" && a !== "output" : !1;
  }, Fr = function(s) {
    if (!fe) return;
    const a = [s];
    for (; a.length > 0; ) {
      const u = a.pop(), d = ne(u);
      if (d === j.processingInstruction || d === j.comment && F(nr, u.data)) {
        try {
          E(u);
        } catch {
        }
        continue;
      }
      if (d === j.element) {
        const T = u, _ = D(re(u));
        try {
          T.hasAttribute && T.hasAttribute("patchsrc") && T.removeAttribute("patchsrc"), T.hasAttribute && T.hasAttribute("for") && wn("for", _) && T.removeAttribute("for");
        } catch {
        }
      }
      const k = x(u);
      if (k) for (let T = k.length - 1; T >= 0; --T) a.push(k[T]);
    }
  }, yn = function(s) {
    let a = null, u = null;
    if (bt) s = "<remove></remove>" + s;
    else {
      const T = jn(s, /^[\r\n\t ]+/);
      u = T && T[0];
    }
    Ne === "application/xhtml+xml" && Ae === ee && (s = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + s + "</body></html>");
    const d = U ? _e(s) : s;
    if (Ae === ee) try {
      a = new p().parseFromString(d, Ne);
    } catch {
    }
    if (!a || !a.documentElement) {
      a = ft.createDocument(Ae, "template", null);
      try {
        a.documentElement.innerHTML = _t ? he : d;
      } catch {
      }
    }
    const k = a.body || a.documentElement;
    return s && u && k.insertBefore(n.createTextNode(u), k.childNodes[0] || null), Ae === ee ? _r.call(a, de ? "html" : "body")[0] : de ? a.documentElement : k;
  }, Sn = function(s) {
    const a = Te ? Te(s) : s.ownerDocument;
    return en.call(a || s, s, f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION, null);
  }, nt = function(s) {
    return s = Fe(s, yr, " "), s = Fe(s, Sr, " "), s = Fe(s, Ar, " "), s;
  }, Et = function(s) {
    var a;
    s.normalize();
    const u = Te ? Te(s) : s.ownerDocument, d = en.call(u || s, s, f.SHOW_TEXT | f.SHOW_COMMENT | f.SHOW_CDATA_SECTION | f.SHOW_PROCESSING_INSTRUCTION, null);
    let k = d.nextNode();
    for (; k; )
      k.data = nt(k.data), k = d.nextNode();
    const T = (a = s.querySelectorAll) === null || a === void 0 ? void 0 : a.call(s, "template");
    T && me(T, (_) => {
      Re(_.content) && Et(_.content);
    });
  }, rt = function(s) {
    const a = ie ? ie(s) : null;
    return typeof a != "string" || D(a) !== "form" ? !1 : typeof s.nodeName != "string" || typeof s.textContent != "string" || typeof s.removeChild != "function" || s.attributes !== v(s) || typeof s.removeAttribute != "function" || typeof s.removeAttributeNode != "function" || typeof s.getAttributeNode != "function" || typeof s.setAttribute != "function" || typeof s.namespaceURI != "string" || typeof s.insertBefore != "function" || typeof s.hasChildNodes != "function" || s.nodeType !== B(s) || s.childNodes !== x(s);
  }, Re = function(s) {
    if (!B || typeof s != "object" || s === null) return !1;
    try {
      return B(s) === j.documentFragment;
    } catch {
      return !1;
    }
  }, Me = function(s) {
    if (!B || typeof s != "object" || s === null) return !1;
    try {
      return typeof B(s) == "number";
    } catch {
      return !1;
    }
  };
  function te(h, s, a) {
    h.length !== 0 && me(h, (u) => {
      u.call(e, s, a, Ee);
    });
  }
  const Br = function(s, a) {
    return !!(fe && s.hasChildNodes() && !Me(s.firstElementChild) && F(tr, s.textContent) && F(tr, s.innerHTML) || fe && s.namespaceURI === ee && Ei[a] && (Me(s.firstElementChild) || typeof s.textContent == "string" && F(Ri[a], s.textContent)) || s.nodeType === j.processingInstruction || fe && s.nodeType === j.comment && F(nr, s.data));
  }, st = function(s, a) {
    if (s instanceof RegExp) return F(s, a);
    if (s instanceof Function) {
      for (var u = arguments.length, d = new Array(u > 2 ? u - 2 : 0), k = 2; k < u; k++) d[k - 2] = arguments[k];
      return !!s(a, ...d);
    }
    return !1;
  }, Hr = function(s, a, u) {
    if (!ze[a] && Ln(a) && st(J.tagNameCheck, a)) return !1;
    if (xt && !Se[a]) {
      const d = z(s), k = x(s);
      if (k && d) {
        const T = k.length;
        for (let _ = T - 1; _ >= 0; --_) {
          const P = s === u ? I(k[_], !0) : k[_];
          d.insertBefore(P, y(s));
        }
      }
    }
    return ae(s), !0;
  }, An = function(s, a, u, d) {
    return s.length === 0 ? a : a === u || a === d ? Y(a) : a;
  }, Le = function(s, a) {
    return s === a || z(s) !== null ? !1 : (Tt && tt(s), !0);
  }, En = function(s, a) {
    if (te(R.beforeSanitizeElements, s, null), Le(s, a)) return !0;
    if (rt(s))
      return ae(s), !0;
    const u = D(re(s));
    if (L = An(R.uponSanitizeElement, L, dt, Ye), te(R.uponSanitizeElement, s, {
      tagName: u,
      allowedTags: L
    }), Le(s, a)) return !0;
    if (Br(s, u))
      return ae(s), !0;
    if (ze[u] || !(oe.tagCheck instanceof Function && oe.tagCheck(u)) && !L[u]) {
      const d = Hr(s, u, a);
      return d === !1 && (te(R.afterSanitizeElements, s, null), Le(s, a)) ? !0 : d;
    }
    if (ne(s) === j.element && !$r(s) || (u === "noscript" || u === "noembed" || u === "noframes") && F(Si, s.innerHTML))
      return ae(s), !0;
    if (le && s.nodeType === j.text) {
      const d = nt(s.textContent);
      s.textContent !== d && (Ue(e.removed, { element: s.cloneNode() }), s.textContent = d);
    }
    return te(R.afterSanitizeElements, s, null), Le(s, a);
  }, Rn = function(s, a, u) {
    if (rn[a] || wn(a, s) || an && (a === "id" || a === "name") && (u in n || u in Cr)) return !1;
    const d = O[a] || oe.attributeCheck instanceof Function && oe.attributeCheck(a, s);
    return mt && F(Er, a) || sn && F(Rr, a) ? !0 : d ? dn[a] || F(nn, Fe(u, tn, "")) || (a === "src" || a === "xlink:href" || a === "href") && s !== "script" && Zn(u, "data:") === 0 && hn[s] || on && !F(Lr, Fe(u, tn, "")) ? !0 : !u : Ln(s) && st(J.tagNameCheck, s) && st(J.attributeNameCheck, a, s) || a === "is" && J.allowCustomizedBuiltInElements && st(J.tagNameCheck, u);
  }, Gr = w({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), Ln = function(s) {
    return !Gr[Ge(s)] && F(Or, s);
  }, qr = function(s, a, u, d) {
    if (U && typeof g == "object" && typeof g.getAttributeType == "function" && !u) switch (g.getAttributeType(s, a)) {
      case "TrustedHTML":
        return _e(d);
      case "TrustedScriptURL":
        return br(d);
    }
    return d;
  }, Wr = function(s, a, u, d) {
    try {
      return u ? s.setAttributeNS(u, a, d) : s.setAttribute(a, d), rt(s) ? (ae(s), !1) : !0;
    } catch {
      return ge(a, s), !1;
    }
  }, On = function(s, a) {
    if (te(R.beforeSanitizeAttributes, s, null), Le(s, a)) return;
    const u = s.attributes;
    if (!u || rt(s)) return;
    O = An(R.uponSanitizeAttribute, O, gt, Xe);
    const d = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: O,
      forceKeepAttr: void 0
    };
    let k = u.length;
    const T = D(s.nodeName);
    for (; k--; ) {
      const _ = u[k], P = _.name, X = _.namespaceURI, W = _.value, Oe = D(P), Lt = W;
      let H = P === "value" ? Lt : oi(Lt), In = !1;
      if (d.attrName = Oe, d.attrValue = H, d.keepAttr = !0, d.forceKeepAttr = void 0, te(R.uponSanitizeAttribute, s, d), H = d.attrValue, cn && (Oe === "id" || Oe === "name") && Zn(H, un) !== 0 && (ge(P, s, _), H = un + H, In = !0), fe && F(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, H)) {
        ge(P, s, _);
        continue;
      }
      if (Oe === "attributename" && jn(H, "href")) {
        ge(P, s, _);
        continue;
      }
      if (!d.forceKeepAttr) {
        if (!d.keepAttr) {
          ge(P, s, _);
          continue;
        }
        if (!ln && F(Ai, H)) {
          ge(P, s, _);
          continue;
        }
        if (le && (H = nt(H)), !Rn(T, Oe, H)) {
          ge(P, s, _);
          continue;
        }
        H = qr(T, Oe, X, H), H !== Lt && Wr(s, P, X, H) && In && Wn(e.removed);
      }
    }
    te(R.afterSanitizeAttributes, s, null), Le(s, a);
  }, it = function(s) {
    let a = null;
    const u = Sn(s);
    for (te(R.beforeSanitizeShadowDOM, s, null); a = u.nextNode(); )
      if (te(R.uponSanitizeShadowNode, a, null), En(a, s), On(a, s), Re(a.content) && it(a.content), ne(a) === j.element) {
        const d = q(a);
        Re(d) && (Rt(d), it(d));
      }
    te(R.afterSanitizeShadowDOM, s, null);
  }, Rt = function(s) {
    const a = [{
      node: s,
      shadow: null
    }];
    for (; a.length > 0; ) {
      const u = a.pop();
      if (u.shadow) {
        it(u.shadow);
        continue;
      }
      const d = u.node, k = ne(d) === j.element, T = x(d);
      if (T) for (let _ = T.length - 1; _ >= 0; --_) a.push({
        node: T[_],
        shadow: null
      });
      if (k) {
        const _ = ie ? ie(d) : null;
        if (typeof _ == "string" && D(_) === "template") {
          const P = d.content;
          Re(P) && a.push({
            node: P,
            shadow: null
          });
        }
      }
      if (k) {
        const _ = q(d);
        Re(_) && a.push({
          node: null,
          shadow: _
        }, {
          node: _,
          shadow: null
        });
      }
    }
  };
  return e.sanitize = function(h) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = null, u = null, d = null, k = null;
    if (_t = !h, _t && (h = "<!-->"), typeof h != "string" && !Me(h) && (h = pi(h), typeof h != "string"))
      throw ue("dirty is not a string, aborting");
    if (!e.isSupported) return h;
    kt ? (L = Ye, O = Xe) : At(s), (R.uponSanitizeElement.length > 0 || R.uponSanitizeAttribute.length > 0) && (L = Y(L)), R.uponSanitizeAttribute.length > 0 && (O = Y(O)), e.removed = [];
    const T = Tt && typeof h != "string" && Me(h);
    if (T) {
      Fr(h);
      const X = re(h);
      if (typeof X == "string") {
        const W = D(X);
        if (!L[W] || ze[W])
          throw et(h), ue("root node is forbidden and cannot be sanitized in-place");
      }
      if (rt(h))
        throw et(h), ue("root node is clobbered and cannot be sanitized in-place");
      try {
        Rt(h);
      } catch (W) {
        throw et(h), W;
      }
    } else if (Me(h))
      a = yn("<!---->"), u = a.ownerDocument.importNode(h, !0), u.nodeType === j.element && u.nodeName === "BODY" || u.nodeName === "HTML" ? a = u : a.appendChild(u), Rt(a);
    else {
      if (!we && !le && !de && h.indexOf("<") === -1) return U && Ve ? _e(h) : h;
      if (a = yn(h), !a) return we ? null : Ve ? he : "";
    }
    a && bt && ae(a.firstChild);
    const _ = T ? h : a;
    try {
      const X = Sn(_);
      for (; d = X.nextNode(); )
        En(d, _), On(d, _), Re(d.content) && it(d.content);
    } catch (X) {
      throw T && (et(h), me(e.removed, (W) => {
        W.element && tt(W.element);
      })), X;
    }
    if (T) {
      let X = !1;
      if (me(e.removed, (W) => {
        W.element && (W.element === h && (X = !0), tt(W.element));
      }), X) throw ue("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return le && Et(h), h;
    }
    if (we) {
      if (le && Et(a), Qe)
        for (k = Tr.call(a.ownerDocument); a.firstChild; ) k.appendChild(a.firstChild);
      else k = a;
      return (O.shadowroot || O.shadowrootmode) && (k = wr.call(i, k, !0)), k;
    }
    let P = de ? a.outerHTML : a.innerHTML;
    return de && L["!doctype"] && a.ownerDocument && a.ownerDocument.doctype && a.ownerDocument.doctype.name && F(wi, a.ownerDocument.doctype.name) && (P = "<!DOCTYPE " + a.ownerDocument.doctype.name + `>
` + P), le && (P = nt(P)), U && Ve ? _e(P) : P;
  }, e.setConfig = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    At(h), kt = !0, Ye = L, Xe = O;
  }, e.clearConfig = function() {
    Ee = null, kt = !1, Ye = null, Xe = null, U = ht, he = "";
  }, e.isValidAttribute = function(h, s, a) {
    Ee || At({});
    const u = D(h), d = D(s);
    return Rn(u, d, a);
  }, e.addHook = function(h, s) {
    typeof s == "function" && G(R, h) && Ue(R[h], s);
  }, e.removeHook = function(h, s) {
    if (G(R, h)) {
      if (s !== void 0) {
        const a = si(R[h], s);
        return a === -1 ? void 0 : ii(R[h], a, 1)[0];
      }
      return Wn(R[h]);
    }
  }, e.removeHooks = function(h) {
    G(R, h) && (R[h] = []);
  }, e.removeAllHooks = function() {
    R = rr();
  }, e;
}
var Ii = kr();
const Pi = {
  key: 0,
  class: "sapp-markdown-state"
}, Di = ["innerHTML"], vi = {
  key: 2,
  class: "sapp-markdown-state"
}, Ci = /* @__PURE__ */ jr({
  __name: "Markdown",
  props: {
    source: {},
    url: {},
    baseUrl: {}
  },
  emits: ["loaded", "error"],
  setup(t, { emit: e }) {
    const n = t, i = e, r = Ot(null), o = Ot(!1), c = Ot(null);
    let l = 0;
    async function f(y) {
      const x = ++l;
      if (r.value = null, c.value = null, !y) {
        o.value = !1;
        return;
      }
      o.value = !0;
      try {
        const z = await fetch(y, { cache: "no-cache" });
        if (x !== l) return;
        if (!z.ok) {
          c.value = z.status, i("error", { url: y, status: z.status });
          return;
        }
        r.value = await z.text(), i("loaded", r.value);
      } catch {
        if (x !== l) return;
        c.value = 0, i("error", { url: y, status: 0 });
      } finally {
        x === l && (o.value = !1);
      }
    }
    Zr(() => n.url, f, { immediate: !0 });
    const p = It(() => (n.source !== void 0 && n.source !== null ? n.source : r.value) ?? ""), g = It(() => {
      if (n.baseUrl) return n.baseUrl;
      if (!n.url) return "";
      try {
        return new URL(".", new URL(n.url, location.href)).href;
      } catch {
        return "";
      }
    }), m = /^([a-z][a-z0-9+.-]*:|\/\/|#|\/)/i;
    function I(y) {
      if (!g.value || m.test(y))
        return y;
      try {
        return new URL(y, g.value).href;
      } catch {
        return y;
      }
    }
    const E = new fr({ gfm: !0, breaks: !1 }), S = It(() => {
      if (!p.value) return "";
      const y = E.parse(p.value, { async: !1 }), x = Ii.sanitize(y, { USE_PROFILES: { html: !0 } }), q = new DOMParser().parseFromString(`<div>${x}</div>`, "text/html").body.firstElementChild;
      return q.querySelectorAll("a[href]").forEach((v) => {
        const B = v.getAttribute("href") ?? "";
        B.startsWith("#") || (v.setAttribute("href", I(B)), v.setAttribute("target", "_blank"), v.setAttribute("rel", "noopener noreferrer"));
      }), q.querySelectorAll("img[src]").forEach((v) => v.setAttribute("src", I(v.getAttribute("src") ?? ""))), q.querySelectorAll("thead").forEach((v) => {
        Array.from(v.querySelectorAll("th")).some((B) => B.textContent?.trim()) || v.remove();
      }), q.innerHTML;
    });
    return (y, x) => o.value && !p.value ? (Pt(), Dt("div", Pi, [
      Pn(y.$slots, "loading", {}, () => [
        x[0] || (x[0] = Dn("Loading…"))
      ], !0)
    ])) : S.value ? (Pt(), Dt("div", {
      key: 1,
      class: "sapp-markdown",
      innerHTML: S.value
    }, null, 8, Di)) : (Pt(), Dt("div", vi, [
      Pn(y.$slots, "empty", {
        url: y.url,
        status: c.value
      }, () => [
        x[1] || (x[1] = Dn("Nothing to show."))
      ], !0)
    ]));
  }
}), Mi = /* @__PURE__ */ Yr(Ci, [["__scopeId", "data-v-d78bb07d"]]);
export {
  Mi as default
};
//# sourceMappingURL=Markdown-B7Z-2crI.js.map
