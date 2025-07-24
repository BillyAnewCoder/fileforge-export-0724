import {ke as q, kf as J, kg as j, kh as V, ki as Q, kj as Z, kk as O, dA as P, fS as ee, el as te, kl as ne, km as se, kn as B, ko as oe, kp as ae, kq as re, kr as ie, ks as ce, kt as le, ku as R, kv as ue, Q as S, kw as pe, kx as w, ky as W, kz as de, kA as fe, kB as ke, kC as _e, eE as me} from "./ckp56qklot786ulr.js";
import {ie as E, P as d, C as ge, by as he, B as xe, D as ye, e as L, dX as Ce, eJ as ve, ar as Se, b0 as be, s as C, N as v, f as H, c8 as Ee, $ as we, eR as Le, lo as Me, S as Re, iJ as I, lp as Ne} from "./dc2xxjkicf2pz0mj.js";
import {r as x, h as De, j as l, M as N, R as M} from "./juy90og0wtbp77qa.js";
import {b as Te, u as Ae} from "./o6wb3ptvu0bk81yq.js";
import {a as Ue} from "./jsgl3b1bt1ozctr5.js";
import {u as G} from "./dmfmxszxfbs8gsbx.js";
import {k as D} from "./pc2givv05uuq8g6l.js";
function Fe({onClose: t, url: e, onAction: n, onActionAborted: r}) {
    const s = x.useRef(!1)
      , a = De()
      , {clientThreadId: i} = Te()
      , c = {
        ...E({
            clientThreadId: i
        }),
        url: e,
        link_type: "text",
        section: "safe-link-modal"
    };
    x.useEffect( () => {
        d.logEventWithStatsig("Safe Link Warning Modal Shown", "chatgpt_safe_link_warning_modal_shown")
    }
    , []);
    const u = async () => {
        s.current = !0;
        try {
            await navigator.clipboard.writeText(e),
            d.logEventWithStatsig("Safe Link Warning Modal Copy Clicked", "chatgpt_safe_link_warning_modal_copy_clicked"),
            d.logEventWithStatsig("link_action", "link_action", {
                ...c,
                action: "copy"
            })
        } catch (h) {
            ye.addError(h)
        }
        n?.("copy"),
        t()
    }
      , m = () => {
        s.current = !0,
        d.logEventWithStatsig("Safe Link Warning Modal Open Clicked", "chatgpt_safe_link_warning_modal_open_clicked"),
        d.logEventWithStatsig("link_action", "link_action", {
            ...c,
            action: "click"
        }),
        n?.("open"),
        t()
    }
      , p = () => {
        s.current || (d.logEventWithStatsig("Safe Link Warning Modal Canceled", "chatgpt_safe_link_warning_modal_canceled"),
        r?.()),
        s.current = !1,
        t()
    }
    ;
    let g = ""
      , f = e
      , k = "";
    try {
        f = new URL(e).hostname;
        const _ = e.indexOf(f);
        _ !== -1 && (g = e.substring(0, _),
        k = e.substring(_ + f.length))
    } catch {}
    return l.jsxs(ge, {
        testId: "modal-safe-link-warning",
        isOpen: !0,
        hideSeparator: !0,
        onClose: p,
        showCloseButton: !0,
        type: "warning",
        title: l.jsx("div", {
            className: "flex items-center gap-2",
            children: a.formatMessage({
                id: "KXMlta",
                defaultMessage: "This link isn't verified"
            })
        }),
        primaryButton: l.jsx(xe, {
            as: "link",
            openNewTab: !0,
            rel: "noopener noreferer",
            color: "primary",
            onClick: m,
            to: e,
            children: a.formatMessage({
                id: "gMzmDW",
                defaultMessage: "Open link"
            })
        }),
        secondaryButton: l.jsx(he.Button, {
            title: a.formatMessage({
                id: "YGLt71",
                defaultMessage: "Copy link"
            }),
            color: "secondary",
            onClick: u
        }),
        children: [l.jsxs("p", {
            className: "text-token-text-secondary mb-6 text-sm text-pretty",
            children: [l.jsx(N, {
                defaultMessage: "Make sure you trust this link before proceeding. If you don't recognize the URL, don't open the link to access the site.",
                id: "safe-link-warning-modal-description"
            }), l.jsx("a", {
                className: "hover:text-token-link-hover ps-1 underline underline-offset-1",
                href: "https://help.openai.com/en/articles/10984597-chatgpt-generated-links",
                target: "_blank",
                rel: "noopener noreferrer",
                children: l.jsx(N, {
                    id: "xNvPsR",
                    defaultMessage: "Learn more"
                })
            })]
        }), l.jsxs("div", {
            className: "mb-2 text-sm break-all",
            children: [l.jsx("span", {
                className: "text-token-text-secondary",
                children: g
            }), l.jsx("span", {
                className: "text-token-text-primary font-medium",
                children: f
            }), l.jsx("span", {
                className: "text-token-text-secondary",
                children: k
            })]
        })]
    })
}
const T = {}
  , A = {}
  , U = {};
function F(t, e) {
    return `${t}::${e}`
}
function je({node: t, onClick: e, children: n, clientThreadId: r, messageId: s, href: a, disableSafeURLs: i, ...o}) {
    let c = e;
    const u = t?.properties?.href
      , m = x.useContext(q)
      , p = L()
      , g = Ce(r)
      , f = J(g, a, m?.useSafeUrls && !i)
      , k = ve(p, "387775177")
      , h = !i && f === void 0 && k.get("enable-copy-and-open", !1);
    return s != null && typeof u == "string" && u.includes("/bing/redirect") && (T[s] || (d.logEvent("Browsing Show Bing Link", {
        id: s,
        content: u
    }),
    T[s] = !0),
    c = _ => {
        A[s] || (d.logEvent("Browsing Click Bing Link", {
            id: s,
            content: u
        }),
        A[s] = !0),
        e?.(_)
    }
    ),
    c = _ => {
        const y = "" + u;
        if (s && !U[F(s, y)]) {
            const b = f || h ? "URL Clicked Allowed" : "URL Clicked Blocked";
            d.logEvent(b, {
                id: s,
                content: y
            }),
            U[F(s, y)] = !0
        }
        e?.(_),
        h && a && be(p, Fe, {
            url: a
        })
    }
    ,
    l.jsx(l.Fragment, {
        children: l.jsx("a", {
            onClick: c,
            ...o,
            className: Se(o.className, h && "cursor-pointer"),
            href: f,
            rel: "noopener",
            children: n
        })
    })
}
const it = "w";
function Oe({messageId: t, clientThreadId: e, text: n, children: r, ...s}) {
    const i = `${window.location.origin}?q=${encodeURIComponent(n)}`
      , o = Ue()
      , c = x.useCallback(async u => {
        u.preventDefault(),
        C.count(v.DEFAULT, "instant_follow_up_anchor_clicked"),
        d.logEventWithStatsig("Instant Follow Up Anchor Clicked", "chatgpt_instant_follow_up_anchor_clicked", {
            clientThreadId: e,
            messageId: t
        }),
        o(u, {
            text: n,
            type: j.Reply
        }, [], 0)
    }
    , [e, t, n, o]);
    return l.jsx(je, {
        ...s,
        href: i,
        disableSafeURLs: !0,
        clientThreadId: e,
        messageId: t,
        className: "cursor-pointer",
        onClick: c,
        children: r
    })
}
const ct = M.memo(Oe)
  , Pe = {}
  , Be = [];
function K(t) {
    const e = t || Pe;
    return function(n, r) {
        V(n, "element", function(s, a) {
            const i = Array.isArray(s.properties.className) ? s.properties.className : Be
              , o = i.includes("language-math")
              , c = i.includes("math-display")
              , u = i.includes("math-inline");
            let m = c;
            if (!o && !c && !u)
                return;
            let p = a[a.length - 1]
              , g = s;
            if (s.tagName === "code" && o && p && p.type === "element" && p.tagName === "pre" && (g = p,
            p = a[a.length - 2],
            m = !0),
            !p)
                return;
            const f = Q(g, {
                whitespace: "pre"
            });
            let k;
            try {
                k = D.renderToString(f, {
                    ...e,
                    displayMode: m,
                    throwOnError: !0
                })
            } catch (_) {
                const y = _
                  , b = y.name.toLowerCase();
                r.message("Could not render math with KaTeX", {
                    ancestors: [...a, s],
                    cause: y,
                    place: s.position,
                    ruleId: b,
                    source: "rehype-katex"
                }),
                b === "parseerror" ? k = D.renderToString(f, {
                    ...e,
                    displayMode: m,
                    strict: "ignore",
                    throwOnError: !1
                }) : k = [{
                    type: "element",
                    tagName: "span",
                    properties: {
                        className: ["katex-error"],
                        style: "color:" + (e.errorColor || "#cc0000"),
                        title: String(_)
                    },
                    children: [{
                        type: "text",
                        value: f
                    }]
                }]
            }
            typeof k == "string" && (k = Z(k).children);
            const h = p.children.indexOf(g);
            return p.children.splice(h, 1, ...k),
            O
        })
    }
}
const lt = "f"
  , ut = "dr"
  , z = (t, e, n=!1) => {
    const r = x.useRef(!1);
    x.useEffect( () => {
        r.current || (r.current = !0,
        C.count(v.DEFAULT, "clickable_follow_up_text_shown"),
        n && C.count(v.DEFAULT, "clickable_follow_up_deep_research_text_shown"),
        d.logEventWithStatsig("Clickable Follow Up Text Shown", "chatgpt_clickable_follow_up_text_shown", {
            ...E({
                clientThreadId: t,
                messageId: e
            })
        }))
    }
    , [t, e, n])
}
  , X = ({messageId: t, clientThreadId: e, text: n}) => {
    const r = G(e)
      , s = Ee.useStore()
      , a = P(e);
    z(e, t, !1);
    const i = x.useCallback(o => {
        o.preventDefault(),
        C.count(v.DEFAULT, "clickable_follow_up_text_clicked"),
        d.logEventWithStatsig("Clickable Follow Up Text Clicked", "chatgpt_clickable_follow_up_text_clicked", E({
            clientThreadId: e,
            messageId: t
        }));
        const c = s.getActiveSystemHintType();
        r({
            sourceEvent: o,
            promptMessage: Le(n.toLowerCase(), {
                suggestion_type: j.Reply
            }),
            completionMetadata: {
                systemHints: c ? [c] : [],
                conversationMode: a ?? {
                    kind: we.PrimaryAssistant
                }
            }
        })
    }
    , [e, a, t, s, r, n]);
    return l.jsx("span", {
        className: "decoration-token-text-secondary hover:text-token-text-secondary cursor-pointer underline decoration-dotted decoration-[12%] underline-offset-4 transition-colors duration-200 ease-in-out",
        onClick: i,
        children: n
    })
}
  , We = ({messageId: t, clientThreadId: e, text: n}) => {
    const r = L();
    return H(r, "2723331665") ? l.jsx(X, {
        messageId: t,
        clientThreadId: e,
        text: n
    }) : l.jsx("span", {
        children: n
    })
}
  , pt = M.memo(We)
  , He = ({messageId: t, clientThreadId: e, text: n}) => {
    const r = Ae()
      , {setThreadSystemHintMode: s} = ee()
      , a = !!Me()
      , i = G(e)
      , o = P(e);
    z(e, t, !0);
    const c = x.useCallback(u => {
        u.preventDefault(),
        C.count(v.DEFAULT, "clickable_follow_up_text_clicked"),
        C.count(v.DEFAULT, "clickable_follow_up_deep_research_text_clicked"),
        d.logEventWithStatsig("Clickable Follow Up Text Clicked", "chatgpt_clickable_follow_up_text_clicked", E({
            clientThreadId: e,
            messageId: t
        }));
        const m = {
            clientThreadId: e
        };
        s(Re.Research, !0, m),
        r.focus(),
        r.setText(n)
    }
    , [e, t, n, r, s, o, i]);
    return a ? l.jsx(X, {
        messageId: t,
        clientThreadId: e,
        text: n
    }) : l.jsxs("span", {
        className: "decoration-token-text-secondary hover:text-token-text-secondary cursor-pointer underline decoration-dotted decoration-[12%] underline-offset-4 transition-colors duration-200 ease-in-out",
        onClick: c,
        children: [l.jsx(te, {
            className: "icon me-1 inline-block"
        }), n]
    })
}
  , Ie = ({messageId: t, clientThreadId: e, text: n}) => {
    const r = L();
    return H(r, "2723331665") ? l.jsx(He, {
        messageId: t,
        clientThreadId: e,
        text: n
    }) : l.jsx("span", {
        children: n
    })
}
  , dt = M.memo(Ie)
  , ft = t => (t.startsWith(pe),
t);
function Ge() {
    return t => {
        S(t, "list", e => {
            for (const n of e.children)
                n.spread = !0
        }
        )
    }
}
function kt(t) {
    return e => {
        S(e, n => {
            Object.defineProperties(n, {
                markdownSource: {
                    get() {
                        return t.slice(this.position.start.offset, this.position.end.offset)
                    }
                }
            })
        }
        )
    }
}
const Y = [oe, ae, Ge, [re, {
    singleDollarTextMath: !1
}], ie, ce, le, ...R ? [R] : [], ue, Ke, Xe];
function Ke() {
    return t => {
        S(t, "textDirective", e => {
            e.name !== I && (e.type = "text",
            e.value = `:${e.name}`)
        }
        )
    }
}
const ze = /\u200b/g;
function Xe() {
    return t => {
        S(t, "text", e => {
            e.value = e.value.replace(ze, "")
        }
        )
    }
}
function Ye() {
    return t => {
        const e = t.position?.end.offset;
        S(t, "element", (n, r) => {
            const {position: s} = n;
            if (!s)
                return;
            const {start: a, end: i} = s
              , o = a.offset
              , c = i.offset;
            n.properties ??= {},
            o != null && (n.properties["data-start"] = o),
            c != null && (n.properties["data-end"] = c,
            e === c && (n.properties["data-is-last-node"] = ""),
            r === t.children.length - 1 && (n.properties["data-is-only-node"] = ""))
        }
        )
    }
}
const _t = [K, Ye, ne, [se, {
    target: "_new",
    rel: "noopener noreferrer"
}], B]
  , $e = [[K, {
    output: "mathml"
}], B];
function qe(t, e) {
    const n = Ne(t, e);
    return $(n, e)
}
function $(t, e) {
    const n = w().use(W).use(Y).use([[Qe, e ?? []]]).use(de, {
        rule: "-",
        tightDefinitions: !0,
        handlers: {
            break: () => `
`,
            link: Je
        }
    })
      , r = w().use(fe).use($e).use(ke)
      , s = n.runSync(n.parse(t))
      , a = n.stringify(s)
      , i = r.stringify(r.runSync(s));
    return {
        "text/plain": a,
        "text/html": i
    }
}
const Je = (t, e, n, r) => {
    const s = n.createTracker(r)
      , a = n.enter("link")
      , i = n.enter("label");
    let o = s.move("[");
    return o += s.move(n.containerPhrasing(t, {
        before: o,
        after: "](",
        ...s.current()
    })),
    o += s.move("]("),
    i(),
    o += s.move(t.url.replace(/[\x00-\x1F\x7F-\x9F()"]/g, Ve)),
    t.title && (o += s.move(" " + JSON.stringify(t.title))),
    o += s.move(")"),
    a(),
    o
}
;
function Ve(t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0")
}
function Qe(t) {
    return e => {
        const n = {}
          , r = (s, a) => {
            switch (a.type) {
            case "grouped_webpages":
                {
                    const i = [];
                    for (const o of a.items)
                        if (o.url && o.title) {
                            let c = n[o.url];
                            c || (c = n[o.url] = {
                                type: "definition",
                                identifier: String(Object.keys(n).length + 1),
                                url: o.url,
                                title: o.title
                            }),
                            i.push({
                                type: "linkReference",
                                referenceType: "shortcut",
                                identifier: c.identifier,
                                children: [{
                                    type: "text",
                                    value: o.attribution ?? me(o.url)
                                }]
                            })
                        }
                    return i.length === 0 ? [] : [{
                        type: "text",
                        value: "("
                    }, ...i.flatMap( (o, c, u) => c < u.length - 1 ? [o, {
                        type: "text",
                        value: ", "
                    }] : [o]), {
                        type: "text",
                        value: ")"
                    }]
                }
            case "title_citation":
            case "location_search":
            case "time":
            case "image_v2":
            case "nav_list":
            case "file_navlist":
            case "file":
            case "grouped_webpages_model_predicted_fallback":
            case "tldr":
            case "navigation":
            case "stock":
            case "calculator":
            case "python":
            case "container":
            case "code_execution":
            case "forecast":
            case "businesses_map":
            case "video":
            case "sources_footnote":
            case "sports_standings":
            case "sports_schedule":
            case "attribution":
            case "webpage_extended":
            case "checkout_confirmation":
            case "image_inline":
            case "image_group":
            case "product_entity":
            case "products":
            case "alt_text":
            case "product_reviews":
            case "product_rationale":
                if (a.alt) {
                    const i = w().use(W).use(Y).parse(a.alt);
                    if (s.type !== "textDirective")
                        return i.children;
                    const o = i.children[0];
                    if (o.type === "paragraph")
                        return o.children
                }
                return [];
            case "hidden":
            case "status":
            case "optimistic_image_citation":
            case "webpage":
            case "optimistic_image_inline":
            case "invalid":
            case "attribution_footer":
            case "sports":
            case "grouped_webpages_v2":
                return []
            }
        }
        ;
        S(e, _e, (s, a, i) => {
            if (i == null || a == null)
                return;
            const o = Ze(s, t)
              , c = o ? r(s, o) ?? [s] : [];
            return i.children.splice(a, 1, ...c),
            [O, a + c.length]
        }
        ),
        e.children.push(...Object.values(n))
    }
}
function Ze(t, e) {
    if (t.name === I) {
        const n = t.attributes?.index;
        if (n)
            return e[parseInt(n, 10)]
    }
}
const mt = Object.freeze(Object.defineProperty({
    __proto__: null,
    markdownToClipboardContent: $,
    messageTextToClipboardContent: qe
}, Symbol.toStringTag, {
    value: "Module"
}));
export {lt as C, it as I, je as M, Y as R, _t as a, $ as b, ct as c, pt as d, ut as e, dt as f, mt as g, qe as m, kt as r, ft as u};
//# sourceMappingURL=llrie03z1kvfi4vu.js.map
