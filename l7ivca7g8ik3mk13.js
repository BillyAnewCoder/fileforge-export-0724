import {oX as G, oY as h, eD as Z, oZ as A, o_ as Y} from "./ckp56qklot786ulr.js";
import {D as W, a as U, Z as p} from "./jy1u8exw8iz2slve.js";
import {ar as u, c as H, eF as X, B as K, dF as q, cl as g} from "./dc2xxjkicf2pz0mj.js";
import {r as l, j as o, m as k, h as z, A as J} from "./juy90og0wtbp77qa.js";
import {T as Q, E as $, d as F, e as tt} from "./9k8yv4dhh02fqujo.js";
import {S as et} from "./f76gy0b8ieo4s693.js";
function Mt(t, e, n) {
    const r = new Map;
    return t.forEach( (a, s) => {
        const c = G(a, e, n);
        c && r.set(s, c)
    }
    ),
    r
}
function nt(t, e) {
    return {
        "bg-yellow-100 dark:bg-yellow-400": !0,
        "bg-yellow-400/40 dark:bg-yellow-400/50": t && !e,
        "bg-yellow-400/60 dark:bg-yellow-500/70": e,
        "bg-yellow-100 dark:bg-yellow-400/30": !t && !e
    }
}
const ot = {
    "bg-transparent!": !0
};
function Ot({isHovered: t, isFocused: e, isCode: n, diffStatus: r}) {
    return u(n ? U : W, "cursor-text group is-comment transition-colors", {
        ...r === h.REMOVED ? ot : nt(t, e)
    }, "group-[.is-comment]:bg-opacity-40")
}
function St(t, e) {
    return t.map(n => {
        const r = e.get(n.id);
        return r ? {
            ...n,
            at: r
        } : null
    }
    ).filter(Z)
}
var rt = (t => (t.ASK = "ask",
t.CREATE_TEXTDOC = "create_textdoc",
t.COMMENT = "comment",
t.EDIT = "edit",
t))(rt || {})
  , at = (t => (t.SELECTION = "selection",
t.BLOCK = "block",
t))(at || {});
function _t(t) {
    return t?.type === "selection"
}
const st = H( () => ({
    commentingOn: null,
    hoveredCommentId: null,
    focusedCommentId: null,
    visibleBlockCommentLauncher_DEBUG_ONLY: null,
    hoveredBlockCommentLauncherPos: null
}))
  , {setState: m, getInitialState: lt} = st
  , it = {
    reset: () => m(lt()),
    startCommentingOn: t => m(e => ({
        ...e,
        commentingOn: t
    })),
    cancelCommentingOn: () => m(t => ({
        ...t,
        commentingOn: null
    })),
    focusComment: t => m(e => ({
        ...e,
        focusedCommentId: t
    })),
    blurComment: () => m(t => ({
        ...t,
        focusedCommentId: null
    })),
    mouseEnterComment: t => m(e => ({
        ...e,
        hoveredCommentId: t
    })),
    mouseLeaveComment: () => m(t => ({
        ...t,
        hoveredCommentId: null
    })),
    mouseEnterBlock: t => m(e => ({
        ...e,
        hoveredBlockCommentLauncherPos: t
    })),
    mouseLeaveBlock: () => m(t => ({
        ...t,
        hoveredBlockCommentLauncherPos: null
    })),
    setVisibleBlockComment_DEBUG_ONLY: t => m(e => ({
        ...e,
        visibleBlockCommentLauncher_DEBUG_ONLY: t
    }))
}
  , ct = t => l.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    "data-rtl-flip": "",
    ...t
}, l.createElement("path", {
    d: "M3.16504 9.99969C3.16523 6.49039 6.18893 3.58173 10 3.58173C13.8111 3.58173 16.8348 6.49039 16.835 9.99969C16.835 11.4535 16.3206 12.7965 15.4473 13.8766C15.3248 14.0282 15.2747 14.2262 15.3105 14.4177C15.4061 14.9255 15.5407 15.4197 15.6953 15.904C15.068 15.8203 14.4632 15.6959 13.8721 15.528L13.7461 15.5056C13.6191 15.4949 13.4909 15.5208 13.377 15.5817C12.3827 16.1135 11.2308 16.4186 10 16.4186C6.18881 16.4186 3.16504 13.5091 3.16504 9.99969ZM1.83496 9.99969C1.83496 14.3143 5.52692 17.7487 10 17.7487C11.356 17.7487 12.6371 17.4332 13.7656 16.8757C14.6851 17.118 15.6308 17.2694 16.626 17.3307C16.8517 17.3446 17.0693 17.2426 17.2031 17.0602C17.337 16.8778 17.3682 16.6397 17.2871 16.4284L17.0801 15.863C16.9176 15.3953 16.7809 14.9297 16.6777 14.4606C17.6128 13.202 18.165 11.6626 18.165 9.99969C18.1649 5.68526 14.473 2.25165 10 2.25165C5.52703 2.25165 1.83515 5.68526 1.83496 9.99969Z"
}), l.createElement("path", {
    d: "M10 6.33499C9.63277 6.33503 9.33496 6.63279 9.33496 7.00003V9.33499L7 9.34866L6.86621 9.36234C6.56317 9.42429 6.33504 9.69237 6.33496 10.0137C6.33504 10.335 6.56319 10.6031 6.86621 10.6651L7 10.6787L9.33496 10.6651V13C9.33505 13.3672 9.63282 13.665 10 13.6651C10.3672 13.6651 10.665 13.3672 10.665 13V10.6651L13 10.6787C13.3672 10.6787 13.665 10.3809 13.665 10.0137C13.665 9.64651 13.3672 9.34866 13 9.34866L10.665 9.33499V7.00003C10.665 6.63276 10.3673 6.33499 10 6.33499Z"
}))
  , mt = t => l.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    "data-rtl-flip": "",
    ...t
}, l.createElement("path", {
    d: "M3.16504 9.99969C3.16523 6.49039 6.18893 3.58173 10 3.58173C13.8111 3.58173 16.8348 6.49039 16.835 9.99969C16.835 11.4535 16.3206 12.7965 15.4473 13.8766C15.3248 14.0282 15.2747 14.2262 15.3105 14.4177C15.4061 14.9255 15.5407 15.4197 15.6953 15.904C15.068 15.8203 14.4632 15.6959 13.8721 15.528L13.7461 15.5056C13.6191 15.4949 13.4909 15.5208 13.377 15.5817C12.3827 16.1135 11.2308 16.4186 10 16.4186C6.18881 16.4186 3.16504 13.5091 3.16504 9.99969ZM1.83496 9.99969C1.83496 14.3143 5.52692 17.7487 10 17.7487C11.356 17.7487 12.6371 17.4332 13.7656 16.8757C14.6851 17.118 15.6308 17.2694 16.626 17.3307C16.8517 17.3446 17.0693 17.2426 17.2031 17.0602C17.337 16.8778 17.3682 16.6397 17.2871 16.4284L17.0801 15.863C16.9176 15.3953 16.7809 14.9297 16.6777 14.4606C17.6128 13.202 18.165 11.6626 18.165 9.99969C18.1649 5.68526 14.473 2.25165 10 2.25165C5.52703 2.25165 1.83515 5.68526 1.83496 9.99969Z"
}));
function ut(t) {
    switch (t) {
    case "dark_gray":
        return {
            normal: "text-token-text-secondary dark:text-white-400",
            hover: "cursor-pointer hover:text-token-text-primary group-hover:text-token-text-primary"
        };
    case "light_gray":
        return {
            normal: "text-gray-400",
            hover: "cursor-pointer hover:text-token-text-secondary group-hover:text-token-text-secondary"
        };
    case "error":
        return {
            normal: "text-red-500",
            hover: "cursor-pointer hover:text-red-500 group-hover:text-red-500"
        }
    }
}
function b({children: t, className: e, onClick: n, isClickable: r=!1, theme: a="dark_gray"}) {
    const s = ut(a)
      , c = (n != null || r) && s.hover;
    return o.jsxs("div", {
        className: u("icon relative inline-block transition-opacity", e, c, s.normal),
        onClick: n,
        children: [t ? o.jsx(mt, {
            className: "icon"
        }) : o.jsx(ct, {
            className: "icon"
        }), o.jsx("span", {
            className: u("absolute inset-0 flex items-center justify-center text-[8px] font-black", c, s.normal),
            children: t
        })]
    })
}
function M() {
    return o.jsx(b, {
        theme: "light_gray",
        children: o.jsx(Q, {})
    })
}
function dt({count: t, isLoading: e, onClick: n, isError: r=!1}) {
    return e ? o.jsx(M, {}) : o.jsx(b, {
        onClick: n,
        theme: r ? "error" : "dark_gray",
        children: t
    })
}
function Dt({isLoading: t=!1, onClick: e}) {
    return t ? o.jsx(M, {}) : o.jsx(b, {
        isClickable: !0,
        onClick: e,
        theme: "light_gray"
    })
}
const O = {
    type: "spring",
    bounce: .12,
    duration: .5
}
  , S = "opacity-50"
  , Bt = ({position: t="absolute", count: e, offsetY: n, isLoading: r=!1, onClick: a, isError: s=!1}) => o.jsx(k.div, {
    className: u("flex", t, p.collapsedComment),
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    style: {
        translateY: n
    },
    transition: O,
    exit: {
        opacity: 0
    },
    children: o.jsx(dt, {
        count: e,
        isLoading: r,
        onClick: a,
        isError: s
    })
})
  , Ct = ({isFocused: t, isHovered: e}) => {
    const n = t || e ? "grow font-medium text-token-text-primary transition-colors" : "grow font-medium text-token-text-secondary transition-colors"
      , r = t || e ? "opacity-100 transition" : "opacity-75 transition";
    return o.jsxs(o.Fragment, {
        children: [o.jsx("div", {
            className: r,
            children: o.jsx("div", {
                className: "gizmo-bot-avatar rounded-full",
                children: o.jsx(A, {
                    iconName: "openai"
                })
            })
        }), o.jsx("span", {
            className: n,
            children: "ChatGPT"
        })]
    })
}
  , ft = ({comment: {diffStatus: t, content: e}, isFocused: n, isSomeCommentFocused: r, isHovered: a}) => {
    const s = t === h.REMOVED;
    return o.jsx("div", {
        className: u("text-token-text-primary mt-2 transition-all", {
            "opacity-80": !n && !r && !a && !s,
            "opacity-40": !n && r && !a && !s,
            [S]: s
        }),
        children: o.jsx(Y, {
            text: e
        })
    })
}
  , xt = ({acceptButtonLabel: t, position: e="absolute", left: n, right: r, comment: a, disableAnimations: s=!1, onClick: c, onMouseEnter: y, onMouseLeave: v, onAccept: w, onDismiss: N, translateY: x, isFocused: i=!1, isSomeCommentFocused: d=!1, disableActions: C=!1, isHovered: f=!1}, _) => {
    const [j,L] = l.useState(!1)
      , D = a.diffStatus === h.ADDED
      , I = a.diffStatus === h.REMOVED
      , B = a.diffStatus != null
      , P = () => {
        L(!0),
        y?.()
    }
      , R = () => {
        L(!1),
        v?.()
    }
      , T = z()
      , V = i || j && !d;
    return o.jsx(k.div, {
        ref: _,
        className: u(e, p.expandedComment, {
            "cursor-default": i,
            "cursor-pointer": !i,
            [p.expandedCommentFocused]: i,
            [p.expandedCommentHovered]: f
        }),
        style: {
            left: n,
            right: r
        },
        initial: s ? !1 : {
            translateY: x,
            scale: .85,
            opacity: 0
        },
        animate: s ? void 0 : {
            translateY: x,
            scale: i ? 1 : .97,
            opacity: 1
        },
        exit: s ? void 0 : {
            scale: .85,
            opacity: 0,
            filter: "blur(16px)"
        },
        transition: O,
        onClick: c,
        onMouseEnter: C ? void 0 : P,
        onMouseLeave: C ? void 0 : R,
        "data-comment-id": a.id,
        children: o.jsxs("div", {
            className: u("flex min-h-8 flex-col overflow-hidden rounded-2xl border p-4 pt-2 text-start text-sm transition-all", {
                "border-transparent bg-gray-50 dark:bg-gray-800": !i && !f,
                "border-token-border-default bg-token-main-surface-primary": f && !i,
                "border-token-border-default bg-token-main-surface-primary shadow-xl": i || j && !d,
                "relative after:absolute after:start-0 after:top-0 after:bottom-0 after:w-1": B,
                "after:bg-green-500": D,
                "after:bg-red-500": I
            }),
            style: {
                width: $
            },
            children: [o.jsxs("div", {
                className: u("flex h-8 flex-row items-center gap-2.5", {
                    [S]: I
                }),
                children: [o.jsx(Ct, {
                    isFocused: i,
                    isHovered: f
                }), o.jsx("button", {
                    className: u("text-token-text-secondary -me-1 rounded-full bg-transparent p-1", {
                        "hover:text-token-text-primary cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700": !C,
                        "cursor-not-allowed": C
                    }),
                    onClick: N,
                    disabled: C,
                    "aria-label": T.formatMessage({
                        id: "fYDa3C",
                        defaultMessage: "Dismiss comment"
                    }),
                    children: o.jsx(X, {
                        className: "icon-sm"
                    })
                })]
            }), o.jsx(ft, {
                comment: a,
                isFocused: i,
                isHovered: f,
                isSomeCommentFocused: d
            }), o.jsx(J, {
                initial: !1,
                children: V && o.jsx(k.div, {
                    initial: s ? !1 : {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto",
                        transition: {
                            opacity: {
                                delay: .14,
                                duration: .2
                            },
                            height: {
                                bounce: 0,
                                duration: .2
                            }
                        }
                    },
                    exit: s ? void 0 : {
                        opacity: 0,
                        height: 0,
                        transition: {
                            opacity: {
                                duration: .08
                            },
                            height: {
                                bounce: 0,
                                duration: .2
                            }
                        }
                    },
                    className: "flex items-center justify-start",
                    children: o.jsx("div", {
                        className: "mt-2.5",
                        children: o.jsx(K, {
                            color: "secondary",
                            onClick: w,
                            disabled: C,
                            children: t ?? T.formatMessage({
                                id: "WIW5OL",
                                defaultMessage: "Apply"
                            })
                        })
                    })
                })
            })]
        })
    })
}
  , pt = l.forwardRef(xt)
  , Pt = ({offsetY: t, opensOverDocument: e=!1, disableActions: n=!1, isFocused: r=!1, isSomeCommentFocused: a=!1, onAccept: s, onClick: c, onDismiss: y, onMouseEnter: v, onMouseLeave: w, comment: N, isHovered: x=!1}) => {
    const i = l.useRef(null);
    return l.useEffect( () => q(document, {
        mousedown: ({target: d}) => {
            d instanceof HTMLElement && !d.closest("[data-comment-id]") && !i.current?.contains(d) && it.blurComment()
        }
    })),
    o.jsx(pt, {
        ref: i,
        comment: N,
        disableActions: n,
        onAccept: s,
        onDismiss: y,
        onMouseEnter: v,
        onMouseLeave: w,
        isSomeCommentFocused: a,
        isHovered: x,
        onClick: c,
        translateY: t,
        isFocused: r,
        left: e ? void 0 : tt,
        right: e ? F : void 0
    })
}
;
function E(t) {
    if (t.type.name !== "text") {
        const {start: a, end: s} = t.attrs;
        return a == null || s == null ? null : {
            start: a,
            end: s
        }
    }
    const e = t.marks.find(a => a.type.name === et.proseMirrorMarkName());
    if (!e)
        return null;
    const {start: n, end: r} = e.attrs;
    return n == null || r == null ? null : {
        start: n,
        end: r
    }
}
function ht(t, e) {
    const {parent: n, textOffset: r} = e
      , a = t.nodeAt(e.pos);
    if (!a)
        return g(E(n)).end;
    const {start: s} = g(E(a));
    return s + r
}
function gt(t, e) {
    const n = t.nodeAt(e.pos);
    if (n) {
        const {start: r} = g(E(n));
        return r + e.textOffset
    }
    return g(E(e.parent)).end
}
function Rt(t, e) {
    const n = new Map;
    for (const [r,a] of e) {
        const s = ht(t, t.resolve(a.start))
          , c = gt(t, t.resolve(a.end));
        n.set(r, {
            start: s,
            end: c
        })
    }
    return n
}
const Et = l.createContext( () => null)
  , yt = l.createContext(null)
  , vt = l.createContext(0)
  , Vt = () => l.useContext(Et)
  , Gt = () => l.useContext(yt)
  , Zt = () => l.useContext(vt)
  , wt = l.createContext( () => null)
  , Nt = l.createContext(null)
  , At = l.createContext(0)
  , Yt = () => l.useContext(wt)
  , Wt = () => l.useContext(Nt);
export {it as C, Pt as E, rt as S, Mt as a, Vt as b, Ot as c, Gt as d, Zt as e, st as f, gt as g, Yt as h, E as i, at as j, Wt as k, _t as l, Et as m, yt as n, vt as o, ht as p, Dt as q, Bt as r, M as s, pt as t, St as u, Rt as v, wt as w, Nt as x, At as y};
//# sourceMappingURL=l7ivca7g8ik3mk13.js.map
