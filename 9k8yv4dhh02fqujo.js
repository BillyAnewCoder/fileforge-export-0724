import {j as c, m as p} from "./juy90og0wtbp77qa.js";
import {ar as u, iJ as E} from "./dc2xxjkicf2pz0mj.js";
import {lT as y, dw as f, lU as _, dx as R, Q as m, lV as I} from "./ckp56qklot786ulr.js";
const M = ({gap: s, padding: t=4, size: i=3}) => c.jsx(p.div, {
    className: u("grid h-full max-w-full flex-1 grid-cols-3 items-center"),
    style: {
        gap: s,
        padding: t
    },
    children: y(3, r => c.jsx(p.div, {
        className: "dark:bg-white-400 aspect-square rounded-full bg-gray-400",
        animate: {
            translateY: ["0%", "-50%", "0%", "0%", "0%"]
        },
        style: {
            translateX: .5,
            width: i,
            height: i
        },
        transition: {
            repeat: 1 / 0,
            type: "keyframes",
            delay: r / 10,
            duration: .7
        }
    }, r))
});
var o = (s => (s.javascript = "javascript",
s.typescript = "typescript",
s.bash = "bash",
s.zsh = "zsh",
s.html = "html",
s.css = "css",
s.python = "python",
s.json = "json",
s.sql = "sql",
s.go = "go",
s.yaml = "yaml",
s.java = "java",
s.rust = "rust",
s.cpp = "cpp",
s.swift = "swift",
s.php = "php",
s.xml = "xml",
s.ruby = "ruby",
s.haskell = "haskell",
s.kotlin = "kotlin",
s.csharp = "csharp",
s.c = "c",
s.objectivec = "objectivec",
s.r = "r",
s.lua = "lua",
s.dart = "dart",
s.scala = "scala",
s.perl = "perl",
s.commonlisp = "commonlisp",
s.clojure = "clojure",
s.ocaml = "ocaml",
s.powershell = "powershell",
s.verilog = "verilog",
s.dockerfile = "dockerfile",
s.vue = "vue",
s.other = "other",
s))(o || {});
function G(s) {
    if (f(s))
        switch (s) {
        case R.CODE_REACT:
            return "typescript";
        default:
            return _(s.replace(/^code\//, ""), Object.values(o), "other")
        }
}
const N = 36
  , F = -24
  , b = 280
  , U = b + N
  , X = 40;
var D = (s => (s.COLLAPSED = "collapsed",
s.EXPANDED = "expanded",
s))(D || {});
function S(s) {
    return "children"in s
}
const j = s => s.type === "text" && "value"in s && typeof s.value == "string"
  , l = "hiveTranscript"
  , h = /(::hiveTranscript\{([^}]+)\})/g
  , O = /\btimestamp\s*=\s*["']?(\d+)["']?(?=\s|,|$)/
  , w = () => s => {
    m(s, t => {
        if (t.type !== "paragraph" && t.type !== "tableCell" || !S(t) || !Array.isArray(t.children))
            return;
        const i = [];
        for (const r of t.children)
            if (j(r) && r.value.includes(`::${l}`)) {
                let e = 0, a;
                for (; (a = h.exec(r.value)) != null; ) {
                    a.index > e && i.push({
                        type: "text",
                        value: r.value.slice(e, a.index)
                    });
                    const v = a[2]
                      , n = O.exec(v)?.[1];
                    n && Number.isInteger(Number(n)) && i.push({
                        type: "textDirective",
                        name: l,
                        attributes: {
                            timestamp: n
                        },
                        data: {
                            hName: l,
                            hProperties: {
                                timestamp: n
                            }
                        },
                        children: [],
                        position: r.position
                    }),
                    e = h.lastIndex
                }
                e < r.value.length && i.push({
                    type: "text",
                    value: r.value.slice(e)
                })
            } else
                i.push(r);
        t.children = i
    }
    )
}
  , q = Object.freeze(Object.defineProperty({
    __proto__: null,
    HIVE_LOG_DIRECTIVE_NAME: l,
    hiveLogDirectivePlugin: w
}, Symbol.toStringTag, {
    value: "Module"
}))
  , A = [E, l]
  , $ = () => s => {
    m(s, "textDirective", t => {
        A.includes(t.name) || (t.type = "text",
        t.value = `:${t.name}`)
    }
    )
}
;
class P {
    constructor(t) {
        this.params = t
    }
    get isReadonly() {
        return Object.values(this.params).some(t => !!t)
    }
    get isHistoricalVersion() {
        return !!this.params.isHistoricalVersion
    }
    get isStreaming() {
        return !!this.params.isTextdocStreaming || !!this.params.isRequestActive
    }
    get isTextdocStreaming() {
        return !!this.params.isTextdocStreaming
    }
    get isStreamingFromNative() {
        return this.isStreaming && this.params.streamingSource === I.NATIVE
    }
    get isRestoring() {
        return !!this.params.isRestoring
    }
    get isShowingChanges() {
        return !!this.params.isShowingChanges
    }
    get isReadonlyFromQueryParam() {
        return !!this.params.isReadonlyFromQueryParam
    }
}
const Q = s => new P(s);
export {X as C, b as E, D as G, l as H, M as T, G as a, U as b, o as c, F as d, N as e, $ as f, Q as g, A as h, S as i, w as j, q as k};
//# sourceMappingURL=9k8yv4dhh02fqujo.js.map
