import {r as l, ao as $, p as Z, h as tt, j as n, A as et, m as C} from "./juy90og0wtbp77qa.js";
import {jJ as st, lA as at, lB as H, dy as ot, C as g, lC as nt, lD as it, jF as rt, fc as ct, lE as dt, u as U, lF as lt, lG as ut, k7 as mt, lH as pt, lI as ht, lJ as ft, lK as D, lL as G, k5 as gt, lM as xt, lN as Ct, ds as M, lO as O, U as W, lP as k, lQ as vt, lR as Tt, cW as bt, lS as wt} from "./ckp56qklot786ulr.js";
import {iR as _, L, ak as V, b2 as w, b5 as It, kq as yt, gT as St, it as P, hH as Et, lC as At, kA as _t} from "./dc2xxjkicf2pz0mj.js";
import {L as Nt} from "./du2o33bqvziie5hn.js";
import {T as Rt} from "./hz1pk536k4y9lgd9.js";
import {g as Ft} from "./btagl6w1gub4aw61.js";
import "./jy1u8exw8iz2slve.js";
import "./l7m4sdxmp3n9y1x8.js";
import "./9k8yv4dhh02fqujo.js";
import "./f5uxfkqdhg7743lt.js";
import "./e2fyqefjfccaah4p.js";
import "./mohn9bb09oz621dz.js";
import "./h52yy5f95o7r9b4p.js";
import "./l7ivca7g8ik3mk13.js";
import "./f76gy0b8ieo4s693.js";
import "./gy64pge8qevmvg7e.js";
import "./mia7txooqhkpbw7w.js";
import "./dmfmxszxfbs8gsbx.js";
import "./gr34ca5bfgzamfz1.js";
import "./nmh9rh1es9yfc7rh.js";
import "./gn1kkezdsm9hi3t4.js";
import "./m1q7suu3m36z180t.js";
import "./koc3vass6n6349vp.js";
import "./ejiu40t686c7js51.js";
import "./n6h2c0196v3vnzav.js";
import "./pbd6thieshvvjfa0.js";
import "./nc631yunytu8n0fx.js";
import "./kd37t55r0pqrdrzh.js";
import "./f5x7owcyj5iwmbsb.js";
import "./llrie03z1kvfi4vu.js";
import "./o6wb3ptvu0bk81yq.js";
import "./jsgl3b1bt1ozctr5.js";
import "./pc2givv05uuq8g6l.js";
import "./dq2hdjj12gdqq0p1.js";
import "./ezqsz68yx4uzdtqb.js";
import "./mre9dehcylnm0d4q.js";
import "./ck00y48d3yzt8bq3.js";
import "./cwcmrfhs9uzogy8q.js";
import "./mq5kqcvga15eqze5.js";
import "./bk8slwxjkdlmxjxm.js";
import "./lzfgwrifvgqibt3v.js";
import "./m36qabefvxegdn1g.js";
import "./g8shiwm7jpd74xmd.js";
import "./btouzu0b6h5eiejj.js";
import "./iacposgqe14fuloa.js";
import "./o7zrzew6ugefv8n2.js";
import "./abebcwj1m9mup3z6.js";
import "./nqj34k5dky4x5suq.js";
import "./hort3ndd4wla0a2j.js";
import "./hczymk9ojq2shlcf.js";
import "./hisrfv493df9w8hp.js";
import "./iiyyoj0wgh5vo89i.js";
import "./fj1zlpb3ugj147t8.js";
const z = "oai/apps/canmoreSidebarWidth"
  , Mt = .25
  , jt = 400
  , B = 400;
function q(t) {
    return t - jt
}
function E(t, s) {
    return $(B, q(t), s ?? Mt * t)
}
function Dt() {
    const t = _.useState(_.selectWindowWidth)
      , s = E(t, st(L.DANGER_SECRET_FOLDERS_ONLY_getItem(z)))
      , a = K()
      , [e,i] = l.useState(s);
    l.useEffect( () => {
        (e < B || e > q(t)) && i(E(t, e))
    }
    , [t]);
    function r(u) {
        i(p => E(t, p += u.delta.x))
    }
    function o(u) {
        i(u),
        L.DANGER_SECRET_FOLDERS_ONLY_setItem(z, u)
    }
    function c() {
        const u = E(t, void 0);
        o(u)
    }
    const d = `calc(100vw - ${e}px)`;
    return a ? {
        chatWidth: e,
        canvasWidth: t - e,
        canvasWidthCalc: d,
        viewportWidth: t,
        handleDrag: r,
        handleDoubleClick: c,
        persist: o
    } : {
        chatWidth: 0,
        canvasWidth: t,
        canvasWidthCalc: "100vw",
        viewportWidth: t,
        handleDrag: () => {}
        ,
        handleDoubleClick: () => {}
        ,
        persist: () => {}
    }
}
function K(t) {
    const s = _.useState(_.selectWindowWidth);
    return (t ?? s) > 1e3
}
const F = "sharedCanvas";
function Ot() {
    const [t,s] = Z()
      , a = t.get(F)
      , e = tt();
    l.useEffect( () => {
        const i = a && at.createRemixTempTextdoc(a, e);
        if (!i)
            return;
        requestAnimationFrame( () => {
            H(i)
        }
        );
        const r = new URLSearchParams(t);
        r.delete(F),
        s(r);
        const o = new URL(window.location.href);
        o.searchParams.delete(F),
        history.replaceState(null, "", o)
    }
    , [a, t, s, e])
}
const Wt = "textdocId"
  , kt = t => {
    const a = new URLSearchParams(window.location.search).get(Wt)
      , e = V(t, i => w.findNode(i, ({message: r}) => {
        const o = r.metadata?.canvas;
        return o?.create_source === ot.HIVE && (a ? o?.textdoc_id === a : !0)
    }
    )?.message.metadata?.canvas?.textdoc_id);
    l.useEffect( () => {
        e && requestAnimationFrame( () => {
            H(e)
        }
        )
    }
    , [e])
}
;
function Lt(t, s) {
    let a;
    return s?.type === g.Textdoc ? s.textdocId.startsWith(nt) || (a = {
        type: "canvas_textdoc",
        id: s.textdocId
    }) : s?.type === g.Kanzi && (a = {
        type: "canvas_kanzi",
        id: s.kanziTurnId
    }),
    it(t, {
        promptMessage: {
            metadata: {
                open_in_canvas_view: a
            }
        }
    })
}
const Y = ({isFullScreen: t=!1, clientThreadId: s, focusedObject: a, onClose: e, isAnimating: i=!1, width: r}) => {
    const {setTargetedContent: o} = rt()
      , c = l.useRef(!1);
    if (l.useEffect( () => (c.current && o(void 0),
    c.current = !0,
    () => {
        c.current = !1
    }
    ), [a]),
    a == null)
        return null;
    switch (a.type) {
    case g.Textdoc:
        return n.jsx(Rt, {
            isFullScreen: t,
            onClose: e,
            clientThreadId: s,
            focusedTextdoc: a,
            isAnimating: i,
            width: r
        });
    case g.Kanzi:
        break;
    case g.ADAVisualization:
        return null
    }
}
  , Pt = 300
  , zt = t => {
    switch (t?.type) {
    case g.Textdoc:
        return t.textdocId;
    case g.Kanzi:
        return null;
    default:
        return null
    }
}
;
function Ht(t, s) {
    const [a,e,i,r] = V(t, m => [w.getRequestId(m), w.getConversationLastTurn(m), w.isMessageTurnEnded(m), w.getVariantIds(m).length > 1])
      , o = ct(a)
      , c = dt()
      , d = U()
      , [u,p] = l.useMemo( () => {
        if (e && r)
            return [void 0, null];
        if (s === !0)
            return [void 0, null];
        let m;
        return !i && e && (m = It(e.messageGroups, v => v.type !== yt)),
        Ut({
            groupedMessage: m,
            currentlyFocusedObject: d,
            isRequestActive: o,
            latestTextdocId: c
        })
    }
    , [i, e, r, d, s, o, c])
      , I = p != null
      , T = zt(p)
      , N = lt("canvas");
    l.useEffect( () => {
        if (p && u && !St() && (N(),
        ut(p, u),
        p.type === g.Textdoc)) {
            const {textdocId: m} = p
              , v = Ft(m);
            mt(document.getElementById(v))
        }
    }
    , [I, T])
}
function Ut({groupedMessage: t, currentlyFocusedObject: s, isRequestActive: a, latestTextdocId: e}) {
    switch (t?.type) {
    case P.Canmore:
        {
            const [i,r] = t.messages;
            if (!pt(i))
                break;
            const o = ht(a, i, r ?? null)
              , c = o.textdocId ?? e;
            if (c && (o.function === ft.CreateTextdoc ? (o.content ?? "").length > Pt || o.status === D.WAITING : o.status === D.STREAMING))
                return [o.messageId, {
                    type: g.Textdoc,
                    textdocId: c
                }];
            break
        }
    case P.kanzi:
        break
    }
    return [void 0, null]
}
const A = {
    type: "spring",
    bounce: .12,
    duration: .64
}
  , Gt = {
    type: "spring",
    bounce: 0,
    duration: .58
}
  , f = {
    duration: 0
}
  , Vt = ({clientThreadId: t, focusedObject: s, onClose: a}) => {
    const {chatWidth: e, canvasWidthCalc: i, handleDrag: r, handleDoubleClick: o, persist: c} = Dt()
      , d = M()
      , [u,p] = l.useState(!d)
      , [I,T] = l.useState(!1)
      , N = d ? f : A
      , m = d ? f : Gt
      , v = vt( ({rect: h}) => h)
      , {windowHeight: b, windowWidth: y} = _t(h => h, {
        windowWidth: 0,
        windowHeight: 0
    });
    let x = v ?? {
        top: 0,
        left: e,
        width: y - e,
        height: b
    }
      , j = !1;
    if (v && (x.top < 0 || x.top + x.height > b)) {
        j = !0;
        const h = {
            width: (y - e) * .75,
            height: b * .75
        };
        x = {
            top: b / 2 - h.height / 2,
            left: (y - e - h.width) / 2 + e,
            width: h.width,
            height: h.height
        }
    }
    const S = v?.borderRadius
      , R = Tt()
      , X = R?.history != null || R?.showChangesAtVersion != null
      , J = bt();
    return n.jsxs(n.Fragment, {
        children: [X && n.jsx(Nt, {
            onClick: () => wt(R.textdocId),
            zIndexKey: "chatOverlay"
        }), n.jsxs(C.div, {
            initial: {
                marginInlineEnd: J ? -260 : 0
            },
            animate: {
                marginInlineEnd: 0
            },
            transition: m,
            children: [n.jsx(C.div, {
                initial: {
                    opacity: 1
                },
                animate: {
                    opacity: 0
                },
                exit: {
                    opacity: [1, 0]
                },
                transition: d ? f : {
                    ...A,
                    delay: .22
                },
                className: "bg-token-main-surface-primary pointer-events-none absolute start-0 top-0 z-20 h-full w-full"
            }), n.jsx(C.div, {
                className: "relative z-20 h-full",
                style: {
                    width: i
                },
                exit: {
                    width: 0
                },
                transition: d ? f : {
                    type: "spring",
                    bounce: 0,
                    duration: .1
                }
            })]
        }), n.jsx(C.div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: d ? f : void 0,
            className: "pointer-events-none absolute start-0 top-0 z-10 h-full w-full bg-black/[0.025] dark:bg-transparent"
        }), n.jsx(C.div, {
            className: "bg-token-bg-primary absolute start-0 z-20 h-full overflow-hidden transition-shadow",
            initial: {
                borderRadius: S,
                boxShadow: "0px 12px 32px 0px rgba(0, 0, 0, 0.064)",
                opacity: j ? 0 : 1,
                x: x.left,
                y: x.top,
                height: x.height,
                width: x.width
            },
            animate: {
                opacity: 1,
                x: e,
                y: 0,
                width: i,
                height: b,
                borderRadius: 0,
                boxShadow: "0px 0px 18px rgba(0,0,0,0.075)"
            },
            exit: {
                scale: .64,
                opacity: 0,
                filter: "blur(12px)",
                transition: d ? f : {
                    opacity: {
                        duration: .14,
                        bounce: .1
                    }
                },
                borderRadius: S,
                boxShadow: "0px 12px 32px 0px rgba(0, 0, 0, 0.064)"
            },
            transition: I || d ? f : A,
            onAnimationComplete: () => p(!1),
            children: n.jsx(C.div, {
                className: "dark:border-token-border-medium h-full overflow-hidden border-s border-gray-100",
                initial: {
                    borderRadius: S
                },
                animate: {
                    borderRadius: 0
                },
                exit: {
                    borderRadius: S
                },
                transition: N,
                children: n.jsxs("div", {
                    className: "h-full",
                    children: [n.jsx(C.div, {
                        drag: "x",
                        className: "bg-token-text-quaternary absolute start-[-2px] z-10 h-full w-[4px] cursor-ew-resize opacity-0",
                        whileHover: {
                            opacity: .5
                        },
                        whileDrag: {
                            opacity: .75,
                            width: "8px",
                            left: "-4px"
                        },
                        transition: d ? f : {
                            type: "tween",
                            duration: .1
                        },
                        style: {
                            x: 0,
                            y: 0,
                            transform: "translateX(0px)"
                        },
                        dragMomentum: !1,
                        dragSnapToOrigin: !1,
                        dragElastic: !1,
                        dragConstraints: {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        },
                        onPointerDown: () => T(!0),
                        onPointerUp: () => T(!1),
                        onDrag: (h, Q) => r(Q),
                        onDragEnd: () => {
                            T(!1),
                            c(e)
                        }
                        ,
                        onDoubleClick: () => o()
                    }), I && n.jsx("div", {
                        className: "absolute inset-0 z-10"
                    }), n.jsx(Y, {
                        onClose: a,
                        clientThreadId: t,
                        isAnimating: !d && u,
                        focusedObject: s,
                        width: y - e
                    })]
                })
            })
        })]
    })
}
  , Bt = l.memo(Vt)
  , qt = ({clientThreadId: t, focusedObject: s, onClose: a}) => {
    const e = M();
    return n.jsx(At, {
        open: !0,
        className: "fixed inset-0 z-50 h-full w-full",
        children: n.jsx(C.div, {
            className: "z-40 h-full w-full overflow-hidden shadow-xl md:border-gray-100 md:dark:border-gray-700",
            initial: {
                scale: .98
            },
            animate: {
                scale: 1
            },
            transition: e ? f : A,
            children: n.jsx(Y, {
                isFullScreen: !0,
                clientThreadId: t,
                focusedObject: s,
                onClose: a
            })
        })
    })
}
  , Kt = ({clientThreadId: t, overrideWidth: s, isAutoFocusDisabled: a=!1}) => {
    const e = U()
      , i = K(s) && !xt(Ct, e?.type)
      , r = M();
    Ht(t, a || r),
    Ot(),
    kt(t),
    l.useEffect( () => {
        G()
    }
    , [t]);
    const o = e && (i ? n.jsx(Bt, {
        clientThreadId: t,
        onClose: k,
        focusedObject: e
    }, "canvas-sidebar") : n.jsx(qt, {
        clientThreadId: t,
        onClose: k,
        focusedObject: e
    }, "canvas-modal"));
    l.useEffect( () => {
        if (e)
            return O(d => Lt(d, e)),
            () => O(null)
    }
    , [e]);
    const c = o != null;
    return l.useEffect( () => (W.setActiveStageSidebar(c),
    () => {
        c && W.setActiveStageSidebar(!1)
    }
    ), [c]),
    r ? n.jsx("div", {
        children: o
    }, t) : n.jsx(et, {
        children: o
    }, t)
}
  , Ke = t => {
    const s = l.useRef(null);
    return n.jsx(Et, {
        ref: s,
        onError: (a, e) => {
            G(),
            setTimeout( () => {
                s.current?.resetErrorBoundary()
            }
            ),
            gt.logError("Error boundary hit", a, {
                componentStack: e
            })
        }
        ,
        name: "canmore-focused-view",
        children: n.jsx(Kt, {
            ...t
        })
    })
}
;
export {Ke as CanvasFocusedViewManager};
//# sourceMappingURL=orl5qr6pdfh8qbcx.js.map
