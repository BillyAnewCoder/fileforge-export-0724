import {j as n, A as z, m as ee, h as _, r as i, M as $, g as te, e as se, b as ne, v as ae, R as oe, c as P} from "./juy90og0wtbp77qa.js";
import {by as I, ar as j, g as re, aA as ce, P as ie, j8 as le, a$ as V, e as A, bf as G, R as ue, f as B, C as de, a5 as fe, e$ as me} from "./dc2xxjkicf2pz0mj.js";
import {u as he, F as K} from "./i25tj1x8nxr6c3yn.js";
import {u as N, F as k, a as C, b as xe} from "./ob2tjua6eqphhfrf.js";
import {ee as X, cX as ge, o7 as ye, U as pe, rp as ve, rq as ke, hn as J, d as we, eF as je} from "./ckp56qklot786ulr.js";
function be({children: t, rootClassName: e, className: a, description: s, icon: c, isOpen: o=!1, onClose: r, primaryButton: u, secondaryButton: d, size: y="normal", title: f, type: m, noPadding: x=!1, hideSeparator: g=!1, showCloseButton: p=!1, shouldIgnoreClickOutside: l=!1, closeButton: v, isScrollable: b=!0, position: S="center", removePopoverStyling: L=!1, showOverlayBackground: q=!0, shadow: O="normal"}) {
    const F = !!f
      , R = !!t
      , H = F && R && !g;
    return n.jsx(z, {
        children: o && n.jsx(I.Root, {
            testId: "modal-fanny-pack",
            isOpen: !0,
            onClose: r,
            shouldIgnoreClickOutside: l,
            className: e,
            children: n.jsx(I.Overlay, {
                showBackground: q,
                children: n.jsxs(Ce, {
                    size: y,
                    position: S,
                    className: j("flex flex-col focus:outline-hidden", {
                        "max-w-md": y === "normal"
                    }, a),
                    removePopoverStyling: L,
                    shadow: O,
                    children: [n.jsx(I.Header, {
                        icon: c,
                        title: f,
                        type: m,
                        closeButton: p && (v ?? n.jsx(re, {
                            onClick: () => r(!0)
                        })),
                        description: s,
                        hasSeparator: H
                    }), n.jsxs("div", {
                        className: j("grow", b ? "overflow-y-auto" : "overflow-y-hidden", {
                            "p-4 sm:p-6": y !== "fullscreen" && !x,
                            "md:pt-0!": !R
                        }),
                        children: [t, u != null || d != null ? n.jsx(I.Actions, {
                            primaryButton: u,
                            secondaryButton: d,
                            modalHasContent: R
                        }) : null]
                    })]
                })
            })
        })
    })
}
function Ce({className: t, children: e, position: a="center", size: s, removePopoverStyling: c=!1, shadow: o="normal"}) {
    return n.jsx(ee.div, {
        initial: {
            opacity: 0,
            y: 6
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: 14
        },
        transition: {
            duration: .175,
            ease: "easeInOut",
            exit: {
                opacity: {
                    duration: .1,
                    ease: "easeOut"
                },
                y: {
                    duration: .175,
                    ease: "easeOut"
                }
            }
        },
        className: j("z-50 h-full w-full overflow-y-auto", s !== "fullscreen" && "grid grid-cols-[10px_1fr_10px]", s !== "fullscreen" && a === "center" && "grid-rows-[minmax(10px,1fr)_auto_minmax(10px,1fr)] md:grid-rows-[minmax(20px,1fr)_auto_minmax(20px,1fr)]", s !== "fullscreen" && a === "bottom" && "grid-rows-[minmax(10px,1fr)_auto_10px] md:grid-rows-[minmax(20px,1fr)_auto_20px]"),
        children: n.jsx(ce, {
            className: j(!c && "popover", "bg-token-main-surface-primary relative start-1/2 col-auto col-start-2 row-auto row-start-2 h-full w-full text-start ltr:-translate-x-1/2 rtl:translate-x-1/2", s !== "fullscreen" && "rounded-2xl", o === "normal" && "shadow-xl", t),
            children: e
        })
    })
}
function Ne() {
    const t = _()
      , e = N(s => s.query)
      , a = i.useRef(null);
    return n.jsx("input", {
        className: "placeholder:text-token-text-tertiary w-full border-none bg-transparent focus:border-transparent focus:ring-0 focus:outline-hidden",
        placeholder: t.formatMessage({
            id: "FannyPack.SearchPlaceholder",
            defaultMessage: "Search chats..."
        }),
        onChange: s => k.setQuery(s.target.value),
        onKeyDown: s => {
            !s.shiftKey && (s.key === "ArrowUp" || s.key === "ArrowDown") && s.preventDefault()
        }
        ,
        value: e,
        ref: a
    })
}
function E({className: t, isActive: e=!1, icon: a, children: s, onClick: c, onMouseEnter: o, onMouseLeave: r}) {
    const u = N(d => d.mouseInteractionsDisabled);
    return n.jsx("div", {
        className: j("cursor-pointer", t),
        onMouseEnter: u ? void 0 : o,
        onMouseLeave: u ? void 0 : r,
        onClick: c,
        children: n.jsxs("div", {
            className: j("group relative flex items-center rounded-xl px-4 py-3", e && "dark:bg-token-main-surface-secondary bg-[#f4f4f4]"),
            children: [a, n.jsx("div", {
                className: j("relative grow overflow-hidden whitespace-nowrap", a ? "ps-2" : ""),
                children: s
            })]
        })
    })
}
function W(t) {
    return t.formatMessage({
        id: "fannyPack.DefaultChatTitle",
        defaultMessage: "New chat"
    })
}
function Se({historyResult: t, index: e}) {
    const a = _()
      , {item: s, onSelect: c} = t
      , o = N(r => r.activeIndex);
    return n.jsx(E, {
        isActive: o === e,
        icon: n.jsx(X, {
            className: "icon"
        }),
        onClick: () => {
            C.logClick(s.id, e, "history"),
            c && c()
        }
        ,
        onMouseEnter: () => k.setActiveIndex(e),
        onMouseLeave: () => k.setActiveIndex(void 0),
        children: n.jsx("div", {
            className: "text-sm",
            children: s.title ?? W(a)
        })
    })
}
function Re({labelResult: t}) {
    return n.jsx("div", {
        className: "group text-token-text-tertiary relative my-2 px-4 pt-2 text-xs leading-4",
        children: t.text
    })
}
function Me({newChatResult: t, query: e=void 0, index: a}) {
    const {onSelect: s} = t
      , c = N(o => o.activeIndex);
    return n.jsx(E, {
        isActive: c === a,
        onClick: () => {
            ie.logNewChatButtonClicked({
                location: "Fanny Pack"
            }),
            s && s()
        }
        ,
        onMouseEnter: () => k.setActiveIndex(a),
        onMouseLeave: () => k.setActiveIndex(void 0),
        icon: n.jsx(ge, {
            className: "icon"
        }),
        children: n.jsx("div", {
            className: "text-sm",
            children: e ? n.jsx($, {
                id: "iQsutJ",
                defaultMessage: 'New chat "{query}"',
                values: {
                    query: e
                }
            }) : n.jsx($, {
                id: "FannyPack.NewChat",
                defaultMessage: "New chat"
            })
        })
    })
}
function Pe(t) {
    return i.useMemo( () => {
        if (!t)
            return null;
        const e = new Date(t * 1e3)
          , a = new Date;
        return e.toDateString() === a.toDateString() ? "Today" : new Date(new Date().setDate(a.getDate() - 1)).toDateString() === e.toDateString() ? "Yesterday" : e.getFullYear() === a.getFullYear() ? e.toLocaleDateString(void 0, {
            month: "short",
            day: "numeric"
        }) : e.toLocaleDateString(void 0, {
            year: "2-digit",
            month: "numeric",
            day: "numeric"
        })
    }
    , [t])
}
var T, Y;
function Ee() {
    if (Y)
        return T;
    Y = 1;
    var t = le()
      , e = /[\\^$.*+?()[\]{}|]/g
      , a = RegExp(e.source);
    function s(c) {
        return c = t(c),
        c && a.test(c) ? c.replace(e, "\\$&") : c
    }
    return T = s,
    T
}
var Fe = Ee();
const Ie = te(Fe)
  , _e = 8;
function Ae(t) {
    return t.isArchived ? {
        titleClassName: "text-sm text-token-text-tertiary",
        titleHighlightedClassName: "text-token-text-secondary font-semibold",
        messageClassName: "text-xs text-token-text-tertiary",
        messageHighlightedClassName: "text-token-text-secondary font-medium"
    } : {
        titleClassName: "text-sm text-token-text-primary",
        titleHighlightedClassName: "text-token-text-primary font-semibold",
        messageClassName: "text-xs text-token-text-secondary",
        messageHighlightedClassName: "text-token-text-primary font-medium"
    }
}
function U({text: t, textToHighlight: e, shouldAdjustStart: a=!1, highlightClassName: s}) {
    const c = i.useMemo( () => {
        if (!a || !e)
            return t;
        const r = t.toLowerCase().indexOf(e?.toLowerCase());
        if (r === -1)
            return t;
        const u = Math.max(r - _e, 0)
          , d = t.substring(u);
        return u === 0 ? d : "…" + d
    }
    , [t, e, a])
      , o = i.useMemo( () => {
        const r = new RegExp(`(${Ie(e)})`,"gi");
        return c.split(r)
    }
    , [c, e]);
    return !e || e.length === 0 ? n.jsx("span", {
        children: t
    }) : n.jsx("div", {
        className: "truncate",
        children: o.map( (r, u) => r.toLowerCase() === e.toLowerCase() ? n.jsx("span", {
            className: s,
            children: r
        }, u) : r)
    })
}
function De({searchResult: t, index: e, elementRef: a}) {
    const {item: s, onSelect: c, query: o} = t
      , r = _()
      , u = Pe(s.updateTime)
      , d = Ae(s)
      , f = N(x => x.activeIndex) === e
      , m = i.useRef(null);
    return i.useEffect( () => {
        let x;
        const g = setTimeout( () => {
            x = new IntersectionObserver(p => {
                p.forEach(l => {
                    l.isIntersecting && (C.logImpression(s.source, e, s.conversationId),
                    x && x.disconnect())
                }
                )
            }
            ,{
                threshold: .5
            }),
            m.current && x.observe(m.current)
        }
        , 250);
        return () => {
            x && x.disconnect(),
            clearTimeout(g)
        }
    }
    , [m, s, o, e]),
    n.jsx("div", {
        ref: m,
        children: n.jsx(E, {
            isActive: f,
            icon: s.isArchived ? n.jsx(ye, {
                className: "icon text-token-text-tertiary"
            }) : n.jsx(X, {
                className: "icon"
            }),
            onClick: () => {
                C.logClick(s.conversationId, e, s.source),
                c && c()
            }
            ,
            onMouseEnter: () => k.setActiveIndex(e),
            onMouseLeave: () => k.setActiveIndex(void 0),
            children: n.jsxs("div", {
                className: "flex items-center",
                ref: a,
                children: [n.jsxs("div", {
                    className: "relative grow overflow-hidden whitespace-nowrap",
                    children: [n.jsx("div", {
                        className: d.titleClassName,
                        children: n.jsx(U, {
                            text: s.title && s.title.length > 0 ? s.title : W(r),
                            textToHighlight: o.length >= 3 ? o : void 0,
                            highlightClassName: d.titleHighlightedClassName
                        })
                    }), n.jsx("div", {
                        className: j("pt-1", d.messageClassName),
                        children: n.jsx(U, {
                            text: s.snippet ?? "",
                            textToHighlight: o.length >= 3 ? o : void 0,
                            shouldAdjustStart: !0,
                            highlightClassName: d.messageHighlightedClassName
                        })
                    })]
                }), f && n.jsx("div", {
                    className: "text-token-text-secondary ps-6 text-xs",
                    children: u
                })]
            })
        })
    })
}
function D() {
    return i.useMemo( () => ({
        closeFannyPackModal: t => {
            C.logClose(t),
            k.setIsActive(!1)
        }
    }), [])
}
function Q() {
    const t = se()
      , e = V()
      , {closeFannyPackModal: a} = D();
    return i.useCallback(s => {
        e && pe.closeActiveSidebar(),
        t(s),
        a("click")
    }
    , [t, a, e])
}
function Le() {
    const {conversations: t} = ve(i.useMemo( () => ({}), []))
      , e = A()
      , a = G(e, "550560761").value
      , s = Number(a?.history_results_limit ?? 6)
      , c = i.useMemo( () => t.slice(0, Math.min(t.length, s)), [t, s])
      , o = ke(c, 0)
      , r = Q()
      , u = i.useMemo( () => ({
        kind: "newChat",
        onSelect: () => {
            r("/")
        }
    }), [r]);
    return i.useMemo( () => {
        const y = [u];
        return y.push(...[o.recent, o.dynamicMonths, o.dynamicYears].reduce( (f, m) => (Object.entries(m).forEach( ([x,{items: g, label: p}]) => {
            g.length > 0 && (f.push({
                kind: "label",
                text: p
            }),
            g.forEach(l => {
                f.push({
                    kind: "history",
                    onSelect: () => {
                        r(J(l.id))
                    }
                    ,
                    item: l
                })
            }
            ))
        }
        ),
        f), [])),
        y
    }
    , [u, o, r])
}
async function qe({query: t, cursor: e}) {
    return ue.safeGet("/conversations/search", {
        parameters: {
            query: {
                query: t,
                cursor: e
            }
        }
    })
}
function Oe() {
    const t = N(h => h.query)
      , e = Q()
      , [a,s] = i.useState("")
      , [c,o] = i.useState(!1)
      , r = i.useRef(we(h => {
        o(!1),
        s(h)
    }
    , 250)).current
      , u = i.useCallback(h => {
        h !== a && (o(!0),
        r(h))
    }
    , [a, r]);
    i.useEffect( () => {
        u(t)
    }
    , [t, u]);
    const {data: d, isError: y, isLoading: f, isFetchingNextPage: m, hasNextPage: x, fetchNextPage: g} = ne({
        queryKey: ["conversationSearch", {
            query: a
        }],
        queryFn: ({pageParam: h}) => qe({
            query: a,
            cursor: h
        }),
        initialPageParam: "",
        getNextPageParam: h => h.cursor ?? void 0,
        enabled: !!a
    });
    i.useEffect( () => {
        f && C.logQuery()
    }
    , [f]),
    i.useEffect( () => {
        y && C.logQueryError()
    }
    , [y]),
    i.useEffect( () => {
        m && C.logQueryMore()
    }
    , [m]);
    const p = i.useMemo( () => d?.pages.flatMap(h => h.items) ?? [], [d])
      , l = i.useRef(null)
      , v = i.useCallback(h => {
        f || h == null || (l.current?.disconnect(),
        l.current = new IntersectionObserver(w => {
            w[0].isIntersecting && !m && x && g()
        }
        ),
        l.current.observe(h))
    }
    , [f, m, x, g]);
    i.useEffect( () => () => {
        l.current?.disconnect()
    }
    , []);
    const b = p && a === t
      , S = t.length > 0 && (c || f || m)
      , L = A()
      , q = G(L, "550560761").value
      , O = Number(q?.local_results_limit ?? 0)
      , F = he(t, O)
      , R = i.useMemo( () => {
        const h = F;
        return b && p.forEach(w => {
            h.has(w.conversation_id) || h.set(w.conversation_id, {
                conversationId: w.conversation_id,
                nodeId: w.current_node_id,
                title: w.title,
                isArchived: w.is_archived,
                updateTime: w.update_time,
                snippet: w.payload.snippet,
                source: "remote"
            })
        }
        ),
        Array.from(h.values())
    }
    , [F, p, b]);
    return {
        searchResults: i.useMemo( () => R.map(h => ({
            kind: "search",
            onSelect: () => {
                e(`${J(h.conversationId)}?src=history_search`)
            }
            ,
            item: h,
            query: t
        })), [R, e, t]),
        shouldShowLoading: S,
        infiniteScrollTriggerElementRef: v
    }
}
function Te(t, e, a) {
    switch (t.kind) {
    case "history":
        return n.jsx(Se, {
            historyResult: t,
            index: e
        });
    case "label":
        return n.jsx(Re, {
            labelResult: t
        });
    case "loading":
        return n.jsx(He, {
            loadingResults: t
        });
    case "newChat":
        return n.jsx(Me, {
            newChatResult: t,
            query: t.query,
            index: e
        });
    case "noResults":
        return n.jsx(Qe, {});
    case "search":
        return n.jsx(De, {
            searchResult: t,
            index: e,
            elementRef: a
        })
    }
}
function $e(t, e) {
    const a = i.useCallback( () => {
        for (let o = (t ?? -1) + 1; o < e.length; o++)
            if (e[o].onSelect)
                return o;
        return t
    }
    , [t, e])
      , s = i.useCallback( () => {
        for (let o = (t ?? e.length) - 1; o >= 0; o--)
            if (e[o].onSelect)
                return o;
        return t
    }
    , [t, e])
      , c = i.useCallback( () => {
        t !== void 0 && e[t] && e[t].onSelect && e[t].onSelect()
    }
    , [t, e]);
    i.useEffect( () => {
        const o = r => {
            r.isComposing || (r.key === "ArrowUp" && !r.shiftKey ? k.setActiveIndex(s()) : r.key === "ArrowDown" && !r.shiftKey ? k.setActiveIndex(a()) : (r.key === "Enter" || r.key === "Return") && (r.preventDefault(),
            c()))
        }
        ;
        return window.addEventListener("keydown", o),
        () => {
            window.removeEventListener("keydown", o)
        }
    }
    , [s, a, c]),
    i.useEffect( () => {
        const o = () => {
            xe.getMouseInteractionsDisabled() && k.setMouseInteractionsDisabled(!1)
        }
        ;
        return window.addEventListener("mousemove", o),
        () => {
            window.removeEventListener("mousemove", o)
        }
    }
    , [])
}
function Be(t, e) {
    const a = i.useRef([]);
    return i.useEffect( () => {
        a.current = e.map( () => oe.createRef())
    }
    , [e]),
    i.useEffect( () => {
        a.current.forEach( (s, c) => {
            t === c && s?.current && s.current.scrollIntoView({
                behavior: "instant",
                block: "nearest"
            })
        }
        )
    }
    , [t, a]),
    a
}
function Qe() {
    return n.jsx(E, {
        className: "text-token-text-tertiary text-sm",
        icon: n.jsx(je, {
            className: "icon"
        }),
        children: n.jsx($, {
            id: "FannyPack.Noresults",
            defaultMessage: "No results"
        })
    })
}
function M() {
    return n.jsx(E, {
        icon: n.jsx("div", {
            className: "loading-results-shimmer bg-token-main-surface-secondary h-[14px] w-[14px] rounded-full"
        }),
        children: n.jsxs("div", {
            className: "flex min-h-[40px] flex-col justify-center",
            children: [n.jsx("div", {
                className: "loading-results-shimmer bg-token-main-surface-secondary h-2 w-1/4 rounded-full"
            }), n.jsx("div", {
                className: "loading-results-shimmer bg-token-main-surface-secondary mt-3 h-2 w-1/2 rounded-full"
            })]
        })
    })
}
function He({loadingResults: t}) {
    return t.shouldShowMultiple ? n.jsxs(n.Fragment, {
        children: [n.jsx(M, {}), n.jsx(M, {}), n.jsx(M, {}), n.jsx(M, {}), n.jsx(M, {})]
    }) : n.jsx(M, {})
}
function Ke() {
    const t = Q()
      , {searchResults: e, shouldShowLoading: a, infiniteScrollTriggerElementRef: s} = Oe()
      , c = Le()
      , o = N(l => l.query)
      , r = o.length > 0
      , u = A()
      , d = B(u, "1741586789");
    i.useEffect( () => {
        C.setQuerySessionId(ae())
    }
    , [o]);
    const y = i.useMemo( () => ({
        kind: "newChat",
        query: o,
        onSelect: () => {
            t(`/?q=${o}`)
        }
    }), [o, t])
      , f = i.useMemo( () => {
        const l = [];
        return o && d && l.push(y),
        r ? l.push(...e) : l.push(...c),
        a ? l.push({
            kind: "loading",
            shouldShowMultiple: l.length === 0
        }) : l.length === 0 && l.push({
            kind: "noResults"
        }),
        l
    }
    , [o, d, y, r, a, e, c])
      , m = N(l => l.activeIndex);
    $e(m, f);
    const x = Be(m, f)
      , g = i.useRef(null);
    i.useEffect( () => {
        k.setActiveIndex(0),
        g.current && (g.current.scrollTop = 0)
    }
    , [o]);
    const p = i.useRef(!0);
    return i.useEffect( () => {
        p.current && !a && f.length === 1 && f[0].kind === "noResults" && C.logNoResults(),
        p.current = a
    }
    , [a, f]),
    n.jsx("div", {
        ref: g,
        children: n.jsx("ol", {
            className: "mx-2",
            children: f.map( (l, v) => n.jsx("li", {
                ref: x.current[v],
                children: Te(l, v, v === f.length - 1 ? s : void 0)
            }, v))
        })
    })
}
function et() {
    "use forget";
    const t = P.c(3)
      , e = N(Ye)
      , a = V();
    let s;
    return t[0] !== e || t[1] !== a ? (s = a ? n.jsx(Ve, {
        isOpen: e
    }) : n.jsx(Ge, {
        isOpen: e
    }),
    t[0] = e,
    t[1] = a,
    t[2] = s) : s = t[2],
    s
}
function Ye(t) {
    return t.isActive
}
function Ue(t) {
    "use forget";
    const e = P.c(9)
      , {onClick: a, className: s} = t
      , c = _();
    let o;
    e[0] !== s ? (o = j("hover:bg-token-main-surface-secondary focus-visible:ring-token-text-quaternary dark:hover:bg-token-main-surface-tertiary flex items-center justify-center rounded-full bg-transparent p-1 focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-transparent focus-visible:outline-hidden", s),
    e[0] = s,
    e[1] = o) : o = e[1];
    let r;
    e[2] !== c ? (r = c.formatMessage({
        id: "Px7S/2",
        defaultMessage: "Close"
    }),
    e[2] = c,
    e[3] = r) : r = e[3];
    let u;
    e[4] === Symbol.for("react.memo_cache_sentinel") ? (u = n.jsx(me, {
        className: "icon text-token-text-tertiary hover:text-token-text-primary"
    }),
    e[4] = u) : u = e[4];
    let d;
    return e[5] !== a || e[6] !== o || e[7] !== r ? (d = n.jsx("button", {
        className: o,
        "aria-label": r,
        onClick: a,
        children: u
    }),
    e[5] = a,
    e[6] = o,
    e[7] = r,
    e[8] = d) : d = e[8],
    d
}
function Z(t) {
    "use forget";
    const e = P.c(19)
      , {className: a} = t
      , {closeFannyPackModal: s} = D()
      , c = fe()
      , o = i.useRef(!1)
      , r = A();
    let u;
    e[0] !== r ? (u = B(r, "3678527908"),
    e[0] = r,
    e[1] = u) : u = e[1];
    const d = u;
    let y;
    e[2] !== r ? (y = B(r, "1422501431"),
    e[2] = r,
    e[3] = y) : y = e[3];
    const f = y;
    let m, x;
    e[4] !== c || e[5] !== d || e[6] !== f ? (m = () => {
        !o.current && d && c && (f ? K.setCurrentAccountV2(c) : K.setCurrentAccount(c),
        o.current = !0)
    }
    ,
    x = [d, c, f],
    e[4] = c,
    e[5] = d,
    e[6] = f,
    e[7] = m,
    e[8] = x) : (m = e[7],
    x = e[8]),
    i.useEffect(m, x);
    let g;
    e[9] !== a ? (g = j("flex flex-col", a),
    e[9] = a,
    e[10] = g) : g = e[10];
    let p;
    e[11] === Symbol.for("react.memo_cache_sentinel") ? (p = n.jsx(Ne, {}),
    e[11] = p) : p = e[11];
    let l;
    e[12] !== s ? (l = n.jsxs("div", {
        className: "ms-6 me-4 flex max-h-[64px] min-h-[64px] items-center justify-between",
        children: [p, n.jsx(Ue, {
            className: "ms-4",
            onClick: () => {
                s("button")
            }
        })]
    }),
    e[12] = s,
    e[13] = l) : l = e[13];
    let v;
    e[14] === Symbol.for("react.memo_cache_sentinel") ? (v = n.jsx("hr", {
        className: "border-token-border-default"
    }),
    e[14] = v) : v = e[14];
    let b;
    e[15] === Symbol.for("react.memo_cache_sentinel") ? (b = n.jsx("div", {
        className: "my-2 grow overflow-y-auto",
        children: n.jsx(Ke, {})
    }),
    e[15] = b) : b = e[15];
    let S;
    return e[16] !== g || e[17] !== l ? (S = n.jsxs("div", {
        className: g,
        children: [l, v, b]
    }),
    e[16] = g,
    e[17] = l,
    e[18] = S) : S = e[18],
    S
}
function Ve(t) {
    "use forget";
    const e = P.c(6)
      , {isOpen: a} = t
      , {closeFannyPackModal: s} = D();
    let c;
    e[0] !== s ? (c = () => {
        s("modal")
    }
    ,
    e[0] = s,
    e[1] = c) : c = e[1];
    let o;
    e[2] === Symbol.for("react.memo_cache_sentinel") ? (o = n.jsx(Z, {}),
    e[2] = o) : o = e[2];
    let r;
    return e[3] !== a || e[4] !== c ? (r = n.jsx(de, {
        testId: "modal-fanny-pack-mobile",
        isOpen: a,
        onClose: c,
        size: "fullscreen",
        showCloseButton: !0,
        type: "success",
        noPadding: !0,
        children: o
    }),
    e[3] = a,
    e[4] = c,
    e[5] = r) : r = e[5],
    r
}
function Ge(t) {
    "use forget";
    const e = P.c(6)
      , {isOpen: a} = t
      , {closeFannyPackModal: s} = D();
    let c;
    e[0] !== s ? (c = () => {
        s("modal")
    }
    ,
    e[0] = s,
    e[1] = c) : c = e[1];
    let o;
    e[2] === Symbol.for("react.memo_cache_sentinel") ? (o = n.jsx(Z, {
        className: "max-h-[440px] min-h-[440px]"
    }),
    e[2] = o) : o = e[2];
    let r;
    return e[3] !== a || e[4] !== c ? (r = n.jsx(be, {
        className: "border-token-border-default border bg-clip-padding shadow-[0_14px_62px_0_rgba(0,0,0,0.25)] md:max-w-[680px] md:min-w-[680px]",
        isOpen: a,
        onClose: c,
        showCloseButton: !0,
        type: "success",
        noPadding: !0,
        showOverlayBackground: !1,
        shadow: "custom",
        children: o
    }),
    e[3] = a,
    e[4] = c,
    e[5] = r) : r = e[5],
    r
}
export {et as FannyPackModalContainer};
//# sourceMappingURL=lktsc8kwl95mtpuw.js.map
