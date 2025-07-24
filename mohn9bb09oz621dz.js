import {h as ie, r as o, j as t, M as C, A as ve, m as O, v as jt, f as be, au as Nt, as as Ct, d as Me} from "./juy90og0wtbp77qa.js";
import {k5 as Tt, k6 as Rt, oR as kt, dN as Ke, xh as _t, xi as Mt, jJ as At, t as Ae, lM as Oe, dx as K, hV as Ot, hW as Lt, hY as It, hZ as Dt, eV as Pt, i0 as Bt, a6 as Ft, vu as W, n as Ut, A as Pe, e6 as $t, dw as Ze, dA as Ht, ec as Je, bJ as Be} from "./ckp56qklot786ulr.js";
import {C as Qe, by as Fe, dG as Ee, B as oe, g8 as Wt, f0 as qt, D as xe, s as J, N as Q, ar as P, ag as Gt, L as et, b as tt, R as de, A as zt, nu as Vt, dF as Yt, j0 as Xt, ei as Kt, cu as Zt, hA as Jt, hx as Qt, g4 as es, nv as ts, e$ as Le, cD as ss, dM as ke, cl as ns, gt as as, P as rs, aS as os, kG as is, hX as ls, eR as cs, ec as ds, aC as V, bv as us, g as fs, dC as ms, e as ps, f as xs} from "./dc2xxjkicf2pz0mj.js";
import {u as st} from "./f5uxfkqdhg7743lt.js";
import {T as Ie, a as nt} from "./9k8yv4dhh02fqujo.js";
import {M as N, b as we, c as me, d as gs, C as hs, e as Se, E as ee, L as Ue, i as ys, a as vs} from "./h52yy5f95o7r9b4p.js";
import {s as bs, r as Es, t as ws, S as le} from "./l7ivca7g8ik3mk13.js";
import {L as Ss} from "./gy64pge8qevmvg7e.js";
import {N as js} from "./jy1u8exw8iz2slve.js";
import {S as Ns} from "./mia7txooqhkpbw7w.js";
import {u as Cs} from "./dmfmxszxfbs8gsbx.js";
import {u as Te, f as Ts, n as at} from "./gr34ca5bfgzamfz1.js";
const rt = ({origin: e, url: s}) => t.jsxs("div", {
    "aria-label": s,
    className: "w-full min-w-0 pe-4 text-start whitespace-nowrap",
    children: [t.jsx("span", {
        "aria-hidden": !0,
        className: "text-token-text-primary",
        children: e
    }), t.jsx("span", {
        "aria-hidden": !0,
        className: "text-token-text-tertiary",
        children: s.replace(e, "")
    })]
})
  , Rs = ({request: e, isDenied: s=!1, onClick: n}) => {
    const [{width: a},r] = st();
    return t.jsxs("button", {
        ref: r,
        className: "group relative z-0 my-1 flex w-full items-center",
        onClick: n,
        children: [t.jsx("div", {
            className: "sticky start-0 z-[-1] w-0",
            children: t.jsx("div", {
                className: "absolute top-0 hidden h-8 -translate-y-1/2 bg-gray-100 group-hover:block",
                style: {
                    width: a
                }
            })
        }), t.jsx("div", {
            className: "bg-token-main-surface-primary text-token-text-secondary sticky start-0 z-10 flex h-8 shrink-0 items-center px-2 group-hover:bg-gray-100",
            children: s ? t.jsx(kt, {
                className: "icon text-red-500"
            }) : t.jsx(qt, {
                className: "icon text-green-500"
            })
        }), t.jsx(rt, {
            ...e
        })]
    })
}
  , ks = ({title: e, requests: s}) => {
    const n = ie()
      , [a,r] = o.useState( () => new Set)
      , i = () => {
        for (const {requestId: l, approve: c, deny: m} of s)
            a.has(l) ? m() : c()
    }
      , u = () => {
        for (const l of s)
            l.deny()
    }
      , f = l => {
        r(c => {
            const m = new Set(c);
            return m.has(l) ? m.delete(l) : m.add(l),
            m
        }
        )
    }
      , d = s.length - a.size;
    return t.jsx(Qe, {
        testId: "modal-confirm-fetch-request",
        isOpen: !0,
        shouldIgnoreClickOutside: !0,
        onClose: i,
        type: "success",
        title: t.jsxs("div", {
            className: "flex justify-between",
            children: [t.jsx("span", {
                className: "text-xl",
                children: t.jsx(C, {
                    id: "VmMpF1",
                    defaultMessage: "Allow network access?"
                })
            }), t.jsx(Ee, {
                side: "top",
                contentClassName: "max-w-2xs!",
                label: t.jsx(C, {
                    id: "WT7tgj",
                    defaultMessage: "Learn more about network requests in canvas"
                }),
                children: t.jsx(oe, {
                    icon: Wt,
                    openNewTab: !0,
                    onClick: () => Tt.logButtonClick(Rt.LEARN_MODE_ABOUT_NETWORK_REQUESTS),
                    as: "a",
                    color: "ghost",
                    size: "small",
                    className: "text-token-text-secondary aspect-square p-1!",
                    to: "https://help.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it#h_cd52fdbc16"
                })
            })]
        }),
        description: t.jsxs("div", {
            className: "mt-3 flex flex-col gap-3",
            children: [t.jsx("span", {
                className: "text-token-text-primary block",
                children: t.jsx(C, {
                    id: "qk11AX",
                    defaultMessage: "{title} is trying to connect to the network. If you don’t recognize {numRequests, plural, one {this request} other {any of these requests}}, don’t allow this app access to the network.",
                    values: {
                        title: `"${e}"`,
                        numRequests: s.length
                    }
                })
            }), t.jsx("div", {
                className: "flex max-w-full flex-col",
                children: s.length > 1 ? t.jsx("ul", {
                    className: "border-token-border-default relative flex max-h-48 flex-col overflow-x-auto overflow-y-auto rounded-lg border",
                    children: s.map(l => {
                        const {requestId: c} = l;
                        return t.jsx("li", {
                            children: t.jsx(Rs, {
                                request: l,
                                isDenied: a.has(c),
                                onClick: () => f(c)
                            })
                        }, c)
                    }
                    )
                }) : t.jsx("div", {
                    className: "no-scrollbar bg-token-main-surface-secondary overflow-x-auto rounded-lg p-2",
                    children: t.jsx(rt, {
                        ...s[0]
                    })
                })
            })]
        }),
        primaryButton: t.jsx(Fe.Button, {
            disabled: d === 0,
            title: s.length > 1 ? n.formatMessage({
                id: "xpKkWv",
                defaultMessage: "Allow selected ({count})"
            }, {
                count: d
            }) : n.formatMessage({
                id: "ZeMrpd",
                defaultMessage: "Allow"
            }),
            color: "primary",
            onClick: i
        }),
        secondaryButton: t.jsx(Fe.Button, {
            title: n.formatMessage({
                id: "TjJzqR",
                defaultMessage: "{count, plural, one {Deny} other {Deny all}}"
            }, {
                count: s.length
            }),
            color: "secondary",
            onClick: u
        })
    })
}
  , _s = ({instrument: e}) => {
    switch (e.type) {
    case "hist":
        return J.hist(Q.WEB_SANDBOX, e.label, e.tags, e.value);
    case "count":
        return J.count(Q.WEB_SANDBOX, e.label, e.tags, e.count);
    case "error":
        return xe.addError(e.error)
    }
}
  , ot = ({size: e=60, thickness: s=1 / 16, checkpoints: n, activeCheckpointId: a, isComplete: r=!1, onTransitionComplete: i, color: u}) => {
    const [f,d] = o.useState(0)
      , l = n.findIndex(g => g.id === a)
      , c = o.useRef(null)
      , m = n[l];
    o.useEffect( () => {
        if (!m || r)
            return;
        const g = n.length
          , x = l * 100 / g
          , v = (l + 1) * 100 / g;
        d(x);
        let w = null
          , y = null;
        const p = 5 / m.estimatedTime
          , b = _ => {
            y == null && (y = _);
            const L = _ - y;
            if (L !== 0) {
                const R = v - x
                  , I = x + R * (1 - Math.exp(-p * L));
                d(Math.min(I, v - 1e-4))
            }
            w = window.setTimeout( () => {
                c.current = requestAnimationFrame(b)
            }
            , 16)
        }
        ;
        return c.current = requestAnimationFrame(b),
        () => {
            w != null && window.clearTimeout(w),
            c.current != null && cancelAnimationFrame(c.current)
        }
    }
    , [l, r]);
    const h = () => {
        r && i?.()
    }
    ;
    return t.jsx(Ke, {
        sizeOverride: e,
        className: P(u == null && "text-primary", u === "dark" && "text-back", u === "light" && "text-white"),
        thickness: s,
        backgroundStrokeClassName: P(u == null && "stroke-[rgba(0,0,0,0.1)] dark:stroke-[rgba(0,0,0,0.32)]", u === "dark" && "stroke-[rgba(0,0,0,0.32)]", u === "light" && "stroke-[rgba(0,0,0,0.1)] "),
        percentage: r ? 100 : f,
        onTransitionEnd: h,
        transitionDuration: "50ms",
        transitionTimingFunction: "cubic-bezier(0.55, 0, 1, 1)"
    })
}
  , Ms = ({checkpoints: e, activeCheckpointId: s, isIndeterminate: n=!1, isComplete: a}) => {
    const [r,i] = o.useState(a);
    return o.useEffect( () => {
        i(a)
    }
    , [s]),
    t.jsx(ve, {
        children: (s != null && !r || n) && t.jsxs(O.div, {
            initial: {
                opacity: 0
            },
            exit: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            className: "bg-token-main-surface-primary absolute end-2 bottom-2 flex items-center gap-2 rounded-full px-3 py-1.5 shadow-lg",
            children: [n ? t.jsx(Ke, {
                percentage: 30,
                thickness: 1 / 12,
                className: "text-primary animate-spin",
                backgroundStrokeClassName: "dark:stroke-[rgba(255,255,255,0.4)] stroke-[rgba(0,0,0,0.1)]",
                sizeOverride: 12
            }) : s && t.jsx(ot, {
                size: 12,
                thickness: 1 / 12,
                checkpoints: e,
                activeCheckpointId: s,
                isComplete: a,
                onTransitionComplete: () => i(!0)
            }), t.jsxs("span", {
                className: "text-token-text-secondary flex items-baseline text-sm",
                children: [t.jsx(C, {
                    id: "zfcWbe",
                    defaultMessage: "Updating"
                }), t.jsx(Ie, {
                    gap: 1.5,
                    padding: 2,
                    size: 2
                })]
            })]
        })
    })
}
;
function As(e) {
    let s = null;
    const n = [];
    let a = !1;
    return e.on("message", r => {
        s ? (s({
            value: r,
            done: a
        }),
        s = null) : n.push(r),
        r.type === N.RUN_COMPLETE && (a = !0)
    }
    ),
    {
        [Symbol.asyncIterator]() {
            return this
        },
        next() {
            if (n.length > 0) {
                const r = n.shift();
                return Promise.resolve({
                    value: r,
                    done: a
                })
            }
            return a ? Promise.resolve({
                value: void 0,
                done: a
            }) : new Promise(r => {
                s = r
            }
            )
        }
    }
}
function $e() {
    let e = null;
    const s = new Promise(n => e = n);
    return {
        resolve: e,
        promise: s
    }
}
const it = () => {
    const [e,s] = o.useState($e);
    return [e, o.useCallback( () => s($e()), [])]
}
  , lt = () => _t(et.getItem(tt.CODE_EXECUTION_DOMAIN_ALLOW_LIST), s => Mt(s, {
    origin: Ae,
    expiresAt: At
}), []).filter( ({expiresAt: s}) => s >= Date.now())
  , He = (e, s) => {
    const {origin: n} = new URL(e);
    let a = [...hs];
    const r = lt().map( ({origin: i}) => i);
    return s && (a = a.concat(r)),
    a.includes(n)
}
  , Os = ({sessionId: e, networkAccessDeniedMessage: s, disableNetworkRequests: n, unsafeAllowAllNetworkRequests: a}) => {
    const r = Gt()
      , i = ie()
      , u = o.useRef(null)
      , f = o.useRef(null)
      , d = o.useRef(null)
      , [l,c] = o.useState([])
      , m = o.useCallback(y => f.current?.postMessage(y), [])
      , h = o.useCallback(y => d.current?.postMessage(y), []);
    o.useEffect( () => () => {
        h({
            type: we.DISCONNECT,
            sessionId: e
        })
    }
    , [e]);
    const g = o.useCallback( ({url: y, requestId: p}) => {
        try {
            if (a || He(y, !n))
                return h({
                    type: we.FETCH_RESPONSE,
                    isApproved: !0,
                    requestId: p
                });
            if (n)
                return r.danger(s ?? i.formatMessage({
                    id: "Lp7cKY",
                    defaultMessage: "Network access is disabled."
                }), {
                    loggingTitle: "Network access is disabled.",
                    toastId: "network_access_denied"
                });
            J.count(Q.WEB_SANDBOX, "network_access_requested");
            const {origin: b} = new URL(y)
              , _ = R => {
                J.count(Q.WEB_SANDBOX, `network_access_request.${R ? "allow" : "deny"}`),
                h({
                    type: we.FETCH_RESPONSE,
                    isApproved: R,
                    requestId: p
                }),
                c(I => I.filter(M => !a && !He(M.url, !n) && M.requestId !== p))
            }
              , L = () => {
                et.setItem(tt.CODE_EXECUTION_DOMAIN_ALLOW_LIST, [...lt(), {
                    origin: b,
                    expiresAt: Date.now() + 90 * 24 * 60 * 60 * 1e3
                }]),
                _(!0)
            }
            ;
            c(R => [...R, {
                url: y,
                origin: b,
                requestId: p,
                approve: L,
                deny: () => _(!1)
            }])
        } catch (b) {
            xe.addError(b),
            h({
                type: we.FETCH_RESPONSE,
                isApproved: !1,
                requestId: p
            })
        }
    }
    , [n, h, r, s, i, a])
      , [x,v] = it()
      , w = o.useCallback(async (y, p) => {
        if (y.type === me.SW_NOT_SUPPORTED)
            J.count(Q.WEB_SANDBOX, "sw_not_supported"),
            x.resolve?.();
        else {
            f.current = p[0],
            d.current = p[1],
            d.current.onmessage = b => {
                b.data.type === "ready" ? x.resolve?.() : g(b.data)
            }
            ;
            try {
                const {token: b} = await de.safeGet("/public/code_execution_challenge", {
                    authOption: zt.Anonymous,
                    parameters: {
                        query: {
                            relay_client_id: y.clientId
                        }
                    }
                });
                m({
                    type: gs.SW_RECONNECT_RESPONSE,
                    reconnectId: y.reconnectId,
                    sessionId: e,
                    token: b
                })
            } catch (b) {
                xe.addError(b)
            }
        }
    }
    , [g, m, x, e]);
    return {
        relayRef: u,
        relayInitPromise: x,
        resetRelayInitPromise: v,
        handleMessageFromRelay: w,
        pendingFetchRequests: l
    }
}
  , Ls = "https://persistent.oaistatic.com/canvas/loop-swirl.mp4"
  , Is = "https://persistent.oaistatic.com/canvas/loop-swirl-poster.jpg"
  , ue = 90
  , Ds = ({title: e, checkpoints: s, activeCheckpointId: n, isComplete: a, onTransitionComplete: r}) => {
    const [i,u] = o.useState(!1)
      , f = s.findIndex(c => c.id === n)
      , d = s[f]
      , l = () => {
        r?.(),
        u(!0)
    }
    ;
    return t.jsx(O.div, {
        className: "relative flex h-full w-full items-center justify-center",
        transition: {
            type: "spring",
            bounce: 0
        },
        children: t.jsxs(O.div, {
            className: "flex -translate-y-12 flex-col items-center gap-3",
            style: {
                minWidth: ue,
                height: ue
            },
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                type: "spring",
                duration: .5,
                bounce: 0
            },
            children: [t.jsxs(O.div, {
                className: "bg-token-main-surface-primary absolute overflow-hidden rounded-3xl shadow-2xl",
                initial: !1,
                animate: {
                    width: ue,
                    height: ue,
                    opacity: i ? 0 : 1
                },
                transition: {
                    type: "spring",
                    duration: .56,
                    bounce: 0
                },
                children: [t.jsx("video", {
                    muted: !0,
                    loop: !0,
                    autoPlay: !0,
                    playsInline: !0,
                    src: Ls,
                    poster: Is,
                    className: P("absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-200")
                }), t.jsx("div", {
                    className: P("relative z-10 flex h-full w-full items-center justify-center", i ? "opacity-0" : "opacity-100"),
                    children: t.jsx(ot, {
                        color: "light",
                        checkpoints: s,
                        activeCheckpointId: n,
                        isComplete: a,
                        onTransitionComplete: l,
                        thickness: 1 / 12
                    })
                })]
            }), t.jsxs(O.div, {
                className: P("flex flex-col items-center transition-opacity duration-200", a ? "opacity-0" : "opacity-100"),
                style: {
                    translateY: ue + 20
                },
                children: [t.jsx("span", {
                    className: "text-token-text-primary font-semibold",
                    children: e
                }), d && t.jsx(O.span, {
                    className: "text-token-text-secondary flex items-baseline",
                    children: t.jsx("span", {
                        className: "loading-shimmer",
                        children: d.label
                    })
                })]
            })]
        })
    })
}
  , We = ({sessionId: e}) => "?" + [`sessionId=${e}`, ""].filter(Boolean).join("&")
  , qe = [{
    id: ee.INITIALIZING,
    label: "Initializing environment",
    estimatedTime: 1e3
}, {
    id: ee.INSTALLING_PACKAGES,
    label: "Installing packages",
    estimatedTime: 2e3
}, {
    id: ee.RUNNING_CODE,
    label: "Ready",
    estimatedTime: 1
}]
  , Ps = () => Kt() ? "ios" : Zt() ? "windows" : Jt() ? "android" : Qt() ? "safari" : es() || ts() ? "chrome" : "unknown"
  , Bs = ({isShare: e=!1, disableNetworkRequests: s=!1, unsafeAllowAllNetworkRequests: n=!1, networkAccessDeniedMessage: a, visuallyHidden: r=!1, isCodeUpdating: i=!1, enableTransition: u=!1, disablePermissions: f=!1, title: d, onChangeBackgroundColor: l}, c) => {
    const [m,h] = o.useState(0)
      , [g] = o.useState( () => crypto.randomUUID())
      , {pendingFetchRequests: x, handleMessageFromRelay: v, relayInitPromise: w, resetRelayInitPromise: y, relayRef: p} = Os({
        sessionId: g,
        disableNetworkRequests: s,
        networkAccessDeniedMessage: a,
        unsafeAllowAllNetworkRequests: n
    })
      , b = o.useRef(null)
      , [_,L] = it()
      , R = o.useMemo( () => Promise.all([_.promise, w.promise]), [_, w])
      , [I,M] = o.useState(null)
      , [q,G] = o.useState(!1)
      , Y = o.useRef(null)
      , H = o.useRef(new Map)
      , U = o.useRef(null)
      , T = o.useCallback(E => {
        Y.current?.postMessage(E)
    }
    , [])
      , k = o.useCallback( () => {
        const E = H.current.keys();
        M(null),
        G(!1),
        l?.(null);
        for (const j of E)
            T({
                type: Se.STOP_CODE,
                runId: j
            });
        U.current = null
    }
    , [T, l])
      , ne = o.useCallback( () => {
        y(),
        L(),
        h(E => E + 1),
        M(null),
        G(!1),
        U.current = null
    }
    , [y, L])
      , B = o.useCallback(async function*({code: E, language: j}) {
        if (M(ee.INITIALIZING),
        J.count(Q.WEB_SANDBOX, `${j}.eval`),
        await R,
        H.current.size !== 0)
            return k();
        const D = jt()
          , A = new Vt;
        H.current.set(D, A);
        const Z = {
            code: E,
            language: j,
            type: Se.RUN_CODE,
            runId: D
        };
        U.current = {
            runId: D,
            language: j
        },
        T(Z);
        for await(const F of As(A))
            F && F.type === N.ENVIRONMENT_STATUS && (M(F.status),
            u || G(F.status === ee.RUNNING_CODE)),
            F?.type === N.ERROR ? J.count(Q.WEB_SANDBOX, `${j}.error`) : F?.type === N.RUN_COMPLETE && F.wasFatalError && J.count(Q.WEB_SANDBOX, `${j}.fatal_runtime_error`),
            F && !Oe([N.READY], F.type) && (yield F);
        M(null),
        G(!1),
        H.current.delete(D)
    }, [R, u, T, k])
      , z = o.useCallback(async E => {
        await R,
        T({
            type: Se.PREPARE_ENVIRONMENT,
            language: E
        })
    }
    , [R, T])
      , X = E => {
        U.current && T({
            type: Se.RUN_CODE,
            code: E,
            ...U.current
        })
    }
    ;
    o.useImperativeHandle(c, () => ({
        stop: k,
        evalAsync: B,
        updateCode: X,
        prepareEnvironment: z
    })),
    o.useEffect( () => Yt(window, {
        message: E => {
            const {data: j, ports: D} = E
              , {type: A} = j
              , Z = E.source === p.current?.contentWindow
              , F = E.source === b.current?.contentWindow;
            if (!Z && !F)
                return;
            if (A === N.ENVIRONMENT_ERROR)
                return xe.addError("Code execution environment error", j.error),
                j.error.name === "ServiceWorker" && J.count(Q.WEB_SANDBOX, "service_worker_connection_failure", [{
                    key: "agent",
                    value: Ps()
                }, {
                    key: "is_share",
                    value: String(e)
                }]),
                j.runId != null && j.runId === U.current?.runId && J.count(Q.WEB_SANDBOX, `${U.current.language}.environment_error`),
                ne();
            if (Z && (j.type === me.SW_NOT_SUPPORTED || j.type === me.SW_RECONNECT))
                return v(j, D);
            if (Z || !F || A === me.SW_RECONNECT || A === me.SW_NOT_SUPPORTED)
                return;
            if (Y.current = D[0],
            A === N.READY)
                return _.resolve?.();
            if (A === N.SET_BACKGROUND_COLOR)
                return l?.(j.backgroundColor);
            if (A === N.INSTRUMENT)
                return _s(j);
            const {runId: $} = j
              , ae = $ && H.current.get($);
            ae ? ae.emit("message", j) : xe.addError("Code execution error: missing event emitter", {
                messageData: E.data
            })
        }
    }), [l, ne, v, w, p, _, g, e]);
    const te = {
        type: "spring",
        duration: q && u ? .56 : 0,
        delay: q ? .12 : 0,
        bounce: 0
    }
      , S = f ? "" : "midi";
    return t.jsxs(Xt, {
        children: [t.jsx("iframe", {
            title: "relay",
            "aria-hidden": "true",
            className: "fixed h-0 w-0",
            allow: S,
            ref: p,
            src: `${Ue}/relay.html${We({
                sessionId: g
            })}`
        }, `relay-${m}`), t.jsxs("div", {
            className: P("relative flex", r ? "fixed h-0 w-0" : "h-full w-full"),
            children: [!r && I != null && u && t.jsx(Ds, {
                isComplete: I === ee.RUNNING_CODE,
                onTransitionComplete: () => G(!0),
                activeCheckpointId: I,
                title: d,
                checkpoints: qe
            }), t.jsx(O.div, {
                className: P("bg-token-main-surface-primary absolute inset-0 m-auto origin-center overflow-hidden", q ? "pointer-events-auto" : "pointer-events-none"),
                animate: {
                    opacity: q ? 1 : 0,
                    ...q ? {
                        scale: 1
                    } : {
                        scale: .95
                    }
                },
                transition: te,
                children: t.jsx(O.iframe, {
                    title: d,
                    className: "h-full w-full overflow-hidden",
                    transition: te,
                    "aria-hidden": r ? "true" : void 0,
                    allow: S,
                    src: `${Ue}/index.html${We({
                        sessionId: g
                    })}`,
                    sandbox: "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms",
                    ref: b,
                    tabIndex: -1
                }, `sandbox-${m}`)
            }), q && t.jsx(Ms, {
                isIndeterminate: i,
                isComplete: I === ee.RUNNING_CODE,
                activeCheckpointId: I,
                checkpoints: qe
            })]
        }), x.length > 0 && t.jsx(ks, {
            title: d,
            requests: x
        })]
    })
}
  , Yn = o.forwardRef(Bs);
function ct(e) {
    return e.includes("'react'") || e.includes('"react"')
}
function Fs(e, s) {
    switch (e) {
    case K.CODE_HTML:
    case K.CODE_REACT:
        return !0;
    case K.CODE_JAVASCRIPT:
    case K.CODE_TYPESCRIPT:
        return ct(s);
    default:
        return !1
    }
}
function Us(e) {
    return Oe([K.CODE_PYTHON], e)
}
function $s(e, s) {
    let n = nt(e) ?? null;
    return (ct(s) || e === K.CODE_REACT) && (n = "react"),
    n && ys(n) ? n : null
}
const Hs = ({onClose: e, title: s, actions: n, showBorder: a=!1}) => t.jsxs("div", {
    className: P("bg-token-main-surface-primary flex items-center justify-between border-b py-2 ps-2 pe-2.5", {
        "border-token-border-xlight": a,
        "border-transparent": !a
    }),
    children: [t.jsx("div", {
        className: "text-token-text-primary flex items-center gap-2 ps-4 text-sm select-none",
        children: s
    }), t.jsxs("div", {
        className: "flex items-center gap-2",
        children: [n.map( ({tooltip: r, icon: i, onClick: u}, f) => {
            const d = t.jsx(oe, {
                size: "small",
                color: "ghost",
                as: "button",
                className: "text-token-text-primary aspect-square p-1!",
                icon: i,
                onClick: u
            }, f);
            return r ? t.jsx(Ee, {
                label: r,
                children: d
            }, f) : d
        }
        ), t.jsx(oe, {
            size: "small",
            color: "ghost",
            as: "button",
            className: "text-token-text-primary aspect-square p-1!",
            onClick: e,
            icon: Le
        })]
    })]
})
  , Ws = ({onDrag: e, onDragEnd: s, onDoubleClick: n}) => t.jsx(O.div, {
    drag: "y",
    className: "bg-token-text-quaternary absolute top-[-2px] z-10 h-[4px] w-full cursor-ns-resize opacity-0",
    whileHover: {
        opacity: .5
    },
    whileDrag: {
        opacity: .75,
        height: "8px",
        top: "-4px"
    },
    transition: {
        type: "tween",
        duration: .1
    },
    style: {
        x: 0,
        y: 0,
        transform: "translateY(0px)"
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
    onDrag: (a, r) => {
        e?.(r)
    }
    ,
    onDragEnd: s,
    onDoubleClick: n
})
  , qs = ({textdocTitle: e, onClickViewConsole: s, onClickFix: n, onDismiss: a}) => t.jsxs(O.div, {
    initial: {
        scale: .95,
        opacity: 0
    },
    exit: {
        scale: .95,
        opacity: 0
    },
    animate: {
        scale: 1,
        opacity: 1
    },
    transition: {
        type: "spring",
        bounce: .12,
        duration: .3
    },
    className: "border-token-border-default bg-token-main-surface-primary absolute end-2 bottom-2 flex w-fit max-w-80 flex-col gap-4 rounded-xl border px-4 py-4 shadow-xl",
    children: [t.jsxs("div", {
        className: "flex items-start",
        children: [t.jsxs("div", {
            className: "flex flex-col gap-1",
            children: [t.jsx("div", {
                className: "text-sm font-semibold",
                children: t.jsx(C, {
                    id: "ObCQBq",
                    defaultMessage: "Cannot preview your code"
                })
            }), t.jsx("div", {
                className: "text-sm",
                children: t.jsx(C, {
                    id: "3ZeoP8",
                    defaultMessage: "An error occured while trying to run {name}",
                    values: {
                        name: e
                    }
                })
            })]
        }), t.jsx(oe, {
            size: "small",
            color: "ghost",
            as: "button",
            className: "text-token-text-tertiary -m-1! aspect-square p-0!",
            onClick: a,
            icon: Le
        })]
    }), t.jsxs("div", {
        className: "flex items-center justify-end gap-2",
        children: [t.jsx(oe, {
            size: "small",
            color: "secondary",
            onClick: s,
            children: t.jsx(C, {
                id: "Fch32I",
                defaultMessage: "View console"
            })
        }), t.jsx(oe, {
            size: "small",
            color: "primary",
            onClick: n,
            children: t.jsx(C, {
                id: "HRfYX0",
                defaultMessage: "Fix bug"
            })
        })]
    })]
})
  , dt = (e, {name: s, message: n, line: a, stack: r}) => {
    const i = a != null ? `

Error occured in:
${e.split(`
`).slice(a - 1, a + 1).join(`
`)}` : "";
    return `${s}: ${n}

Stack:
${r.join("")}${i}`
}
  , Re = new Ss({
    capacity: 5
})
  , Gs = async (e, s, n) => {
    const a = dt(s, n.error)
      , r = Ae(Re.get(a));
    if (Re.get(a))
        return r;
    const {hint: i} = await de.safePost("/textdoc/{textdoc_id}/code/hint", {
        parameters: {
            path: {
                textdoc_id: e
            }
        },
        requestBody: {
            error: a,
            line: n.error.line ?? -1
        }
    });
    return Re.set(a, i),
    i
}
  , ut = e => Oe([N.ERROR, N.LOG, N.OUTPUT], e.type)
  , ft = e => e.type === N.OUTPUT && mt(e.output)
  , mt = e => typeof e == "string" && e.startsWith("data:image/png;")
  , pe = ({as: e="li", contentBefore: s, contentAfter: n, disableEntryAnimation: a=!1, hasHint: r=!1, bottomBorder: i=!1, isHintOpen: u=!1, isSticky: f=!1, onClick: d, children: l}) => {
    const c = !!d
      , m = e === "div" ? O.div : O.li;
    return t.jsxs(m, {
        initial: a ? !1 : {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: .32
        },
        role: c ? "button" : void 0,
        className: P("bg-token-main-surface-primary flex items-start justify-between py-1.5 ps-6 pe-4 font-mono text-sm whitespace-pre", i && "border-token-border-xlight border-b", f && "sticky top-0 z-10", c && "cursor-pointer", c && r && "hover:bg-red-500/10", c && !r && "hover:bg-gray-50 dark:hover:bg-gray-700", r && u && "bg-red-500/10"),
        onClick: c ? d : void 0,
        children: [s && t.jsx("div", {
            className: "me-3 flex h-6 w-5 items-start",
            children: s
        }), t.jsx("div", {
            className: "flex min-h-6 min-w-0 flex-1 items-start justify-start gap-2 leading-6",
            children: l
        }), n && t.jsx("div", {
            className: "ms-3 flex min-h-6 items-start leading-6",
            children: n
        })]
    })
}
;
var se = (e => (e.LOADING = "loading",
e.READY = "ready",
e.RESOLVED = "resolved",
e))(se || {});
const pt = ({hint: e, onClickFix: s, isOpen: n, onOpenChange: a}) => {
    const r = o.useRef(null)
      , i = ie();
    return e ? t.jsx("div", {
        className: "relative flex items-center font-sans",
        onClick: u => u.stopPropagation(),
        children: t.jsxs(Ot, {
            open: n,
            onOpenChange: a,
            children: [t.jsx(Lt, {
                asChild: !0,
                ref: r,
                children: e.status === "resolved" ? t.jsx("div", {
                    className: "flex h-5 w-5 items-center",
                    children: t.jsx(ss, {
                        className: "text-token-text-tertiary",
                        size: 16
                    })
                }) : t.jsx("button", {
                    className: "h-5 w-5",
                    disabled: e.status === "loading",
                    children: e.status === "loading" ? t.jsx(bs, {}) : t.jsx(Es, {
                        position: "static",
                        isError: !0,
                        count: 1,
                        offsetY: 0
                    })
                })
            }), t.jsx(ve, {
                children: n && t.jsx(It, {
                    forceMount: !0,
                    container: r.current?.ownerDocument.body,
                    children: t.jsx(Dt, {
                        side: "top",
                        align: "start",
                        alignOffset: -4,
                        sideOffset: 10,
                        children: t.jsx(ws, {
                            position: "static",
                            translateY: 0,
                            right: 0,
                            isFocused: !0,
                            onDismiss: () => a?.(!1),
                            onAccept: u => {
                                a?.(!1),
                                s?.(u)
                            }
                            ,
                            comment: e,
                            acceptButtonLabel: i.formatMessage({
                                id: "Dl9vBh",
                                defaultMessage: "Fix bug"
                            })
                        })
                    })
                })
            })]
        })
    }) : t.jsx("div", {
        className: "w-5"
    })
}
  , zs = "module:"
  , _e = ({log: e, isDisabled: s=!1, onClick: n}) => t.jsx("div", {
    className: "flex items-center",
    children: "line"in e && e.line != null && t.jsxs("button", {
        onClick: () => e.line != null && n?.(e.line),
        className: "text-token-text-tertiary select-none enabled:hover:underline",
        disabled: s,
        children: [zs, e.line]
    })
})
  , Vs = ({isPreview: e=!1, log: s, level: n}) => t.jsxs("span", {
    className: P("text-token-text-primary flex min-w-0 flex-wrap gap-1", e ? "shrink truncate" : "whitespace-pre-wrap", n === "warn" && "text-yellow-600"),
    children: [n === "warn" && "[warn]: ", typeof s == "string" ? s : s.map( (a, r) => t.jsx(vs, {
        isPreview: e,
        value: a
    }, r))]
})
  , xt = ({error: e, isPreview: s=!1, isResolved: n=!1}) => {
    const a = e.name + ":";
    return t.jsxs("span", {
        className: P("whitespace-pre-wrap", n ? "text-token-text-primary" : "text-red-500"),
        children: [t.jsx("span", {
            className: "font-semibold",
            children: a
        }), " ", e.message, t.jsx("div", {
            children: e.stack.length > 0 && !s ? e.stack.join(`
`) : ""
        })]
    })
}
  , Ys = ({output: e, isPreview: s=!1}) => {
    const n = ie();
    return e == null ? null : mt(e) ? t.jsx("img", {
        alt: n.formatMessage(Ks.imgAlt),
        className: P(s && "border-token-border-xlight h-6 rounded-lg border"),
        src: e
    }) : t.jsx("span", {
        className: "flex items-center gap-2",
        children: Ae(e)
    })
}
  , De = ({log: e, isHintResolved: s, isPreview: n=!1}) => {
    switch (e.type) {
    case N.LOG:
        return t.jsx(Vs, {
            isPreview: n,
            ...e
        });
    case N.ERROR:
        return t.jsx(xt, {
            isPreview: n,
            isResolved: s,
            ...e
        });
    case N.OUTPUT:
        return t.jsx(Ys, {
            isPreview: n,
            ...e
        });
    default:
        return null
    }
}
  , Xs = ({log: e, isStale: s=!1, onClickFix: n, onClickLineNumber: a, hint: r}) => {
    const [i,u] = o.useState(!1);
    if (e.type === N.RUN_COMPLETE)
        return null;
    const f = r?.status === se.RESOLVED
      , d = e.type === N.ERROR && r?.status === se.READY;
    return t.jsx(pe, {
        hasHint: d,
        isHintOpen: i,
        bottomBorder: !0,
        onClick: r && !f && ( () => u(!0)),
        contentBefore: t.jsx(pt, {
            hint: r,
            isOpen: i,
            onOpenChange: u,
            onClickFix: l => e.type === N.ERROR && r && n?.(l, r.id, e.error)
        }),
        contentAfter: t.jsx(_e, {
            log: e,
            isDisabled: s,
            onClick: a
        }),
        children: t.jsx(De, {
            log: e,
            isHintResolved: f
        })
    })
}
  , Ks = be({
    imgAlt: {
        id: "L6t7Yb",
        defaultMessage: "Plot"
    },
    ranCode: {
        id: "ffa9Nt",
        defaultMessage: "Ran code"
    },
    askForHelp: {
        id: "wMZco9",
        defaultMessage: "Ask ChatGPT for help"
    },
    askForFix: {
        id: "A9pxgT",
        defaultMessage: "Fix it for me"
    }
})
  , Zs = ({timestamp: e, duration: s}) => {
    const [,n] = o.useState(0);
    o.useEffect( () => {
        setInterval( () => {
            n(i => i + 1)
        }
        , 5e3)
    }
    , []);
    const a = Date.now()
      , r = Math.round((a - e) / 1e3);
    return t.jsx(Ee, {
        label: t.jsx(C, {
            id: "bFO21A",
            defaultMessage: "Code ran {count, plural, =0 {instantly} one {in # second} other {in # seconds}}",
            values: {
                count: Math.floor(s / 1e3)
            }
        }),
        children: t.jsx("span", {
            className: "text-token-text-tertiary",
            children: r >= 60 ? t.jsx(Nt, {
                value: -r,
                updateIntervalInSeconds: 60,
                numeric: "auto"
            }) : t.jsx(C, {
                id: "bRCEFN",
                defaultMessage: "Just now"
            })
        })
    })
}
  , gt = ({isComplete: e, timestamp: s, duration: n}) => e && s != null && n != null ? t.jsx(Zs, {
    timestamp: s,
    duration: n
}) : e && n == null ? t.jsx("span", {
    className: "text-token-text-tertiary",
    children: t.jsx(C, {
        id: "EMebM9",
        defaultMessage: "Stopped"
    })
}) : t.jsx(Ie, {
    gap: 2
})
  , Js = e => {
    switch (e) {
    case ee.INITIALIZING:
        return t.jsx(C, {
            id: "J183Z0",
            defaultMessage: "initializing environment"
        });
    case ee.INSTALLING_PACKAGES:
        return t.jsx(C, {
            id: "21sQ8o",
            defaultMessage: "installing packages"
        });
    case ee.RUNNING_CODE:
        return t.jsx(C, {
            id: "nHITHk",
            defaultMessage: "running code"
        })
    }
}
  , Ne = ({message: e, isComplete: s, statusLogs: n}) => {
    const a = ke(n);
    return t.jsxs("span", {
        className: "flex items-center",
        children: [t.jsx("span", {
            className: "text-token-text-secondary font-semibold",
            children: t.jsx(C, {
                ...e
            })
        }), !s && a && t.jsxs(O.span, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                delay: .3,
                duration: .1
            },
            className: "text-token-text-tertiary ms-2 flex items-baseline",
            children: [Js(a.status), t.jsx(Ie, {
                gap: 2,
                size: 2
            })]
        })]
    })
}
  , Qs = ({children: e, firstLog: s, lastLog: n, isHintResolved: a, duration: r, isComplete: i=!1, isLast: u=!1, statusLogs: f}) => {
    const [d,l] = o.useState(!0)
      , [c,m] = o.useState(!1)
      , h = o.useRef(null)
      , g = () => {
        l(!d)
    }
    ;
    return o.useEffect( () => {
        const {current: x} = h;
        if (!x)
            return;
        const v = new IntersectionObserver(w => {
            w[0].intersectionRatio === 0 ? m(!0) : m(!1)
        }
        ,{
            threshold: 0
        });
        return v.observe(x),
        () => v.unobserve(x)
    }
    , []),
    t.jsxs("li", {
        className: "relative flex flex-col",
        children: [t.jsx("div", {
            "aria-hidden": "true",
            className: "pointer-events-none absolute h-[1px] bg-transparent",
            ref: h
        }), t.jsxs(pe, {
            as: "div",
            disableEntryAnimation: !0,
            isSticky: !0,
            bottomBorder: c || !u && !d,
            contentAfter: t.jsx(gt, {
                isComplete: i,
                duration: r,
                timestamp: s?.timestamp
            }),
            contentBefore: t.jsx("button", {
                className: "text-token-text-tertiary",
                onClick: () => g(),
                children: t.jsx(Pt, {
                    className: P("icon transition-transform", d && "rotate-90")
                })
            }),
            onClick: () => g(),
            children: [t.jsx(Ne, {
                isComplete: i,
                message: Ce.run,
                statusLogs: f
            }), !d && n && t.jsx(De, {
                isPreview: !0,
                isHintResolved: a,
                log: n
            })]
        }), d && e]
    })
}
  , en = ({runMessages: e, onClickFix: s, onClickLineNumber: n, hints: a, isStale: r, isLast: i, includeContentBefore: u=!1}) => {
    const [f,d] = o.useState(!1)
      , l = e.filter(p => p.type === N.ENVIRONMENT_STATUS)
      , c = e.filter(ut)
      , m = ke(e)
      , h = m?.type === N.RUN_COMPLETE
      , g = h ? m.duration : null
      , x = c[0];
    if (h) {
        if (c.length === 0)
            return t.jsx(pe, {
                isHintOpen: f,
                bottomBorder: !0,
                contentBefore: u,
                contentAfter: t.jsx(gt, {
                    isComplete: h,
                    duration: g,
                    timestamp: x?.timestamp
                }),
                children: t.jsx(Ne, {
                    isComplete: h,
                    message: Ce.success,
                    statusLogs: l
                })
            });
        if (c.length === 1 && x?.type === N.ERROR) {
            const p = a.get(x.id);
            return t.jsxs(pe, {
                hasHint: !!p,
                isHintOpen: f,
                bottomBorder: !0,
                contentBefore: (u || !!p) && t.jsx(pt, {
                    hint: p,
                    isOpen: f,
                    onOpenChange: d,
                    onClickFix: b => s?.(b, x.id, x.error)
                }),
                contentAfter: t.jsx(_e, {
                    log: x,
                    isDisabled: r,
                    onClick: n
                }),
                onClick: p && p.status !== se.RESOLVED && ( () => d(!0)),
                children: [t.jsx(Ne, {
                    isComplete: h,
                    message: Ce.run,
                    statusLogs: l
                }), t.jsx(xt, {
                    isResolved: p?.status === se.RESOLVED,
                    ...x
                })]
            })
        } else if (c.length === 1 && x && !ft(c[0]))
            return t.jsxs(pe, {
                bottomBorder: !0,
                contentBefore: u,
                contentAfter: t.jsx(_e, {
                    log: x,
                    isDisabled: r,
                    onClick: n
                }),
                children: [t.jsx(Ne, {
                    isComplete: h,
                    message: Ce.run,
                    statusLogs: l
                }), t.jsx(De, {
                    log: x
                })]
            })
    }
    const v = ke(c.filter(p => p.type !== N.RUN_COMPLETE))
      , y = (v && a.get(v.id))?.status === se.RESOLVED;
    return t.jsx(Qs, {
        statusLogs: l,
        firstLog: x ?? null,
        lastLog: v ?? null,
        duration: g,
        isComplete: h,
        isHintResolved: y,
        isLast: i,
        children: t.jsx("ol", {
            children: c.map(p => t.jsx(Xs, {
                log: p,
                isStale: r,
                onClickLineNumber: n,
                onClickFix: s,
                hint: a.get(p.id)
            }, p.id))
        })
    })
}
  , Ce = be({
    success: {
        id: "laZI5H",
        defaultMessage: "Run successfully"
    },
    run: {
        id: "o7dgBT",
        defaultMessage: "Run"
    }
})
  , tn = `You're a professional developer highly skilled in debugging. The user ran the textdoc's code, and an error was thrown.
Please think carefully about how to fix the error`
  , sn = (e, s, n) => {
    const a = dt(e, n);
    return `
${tn}, and then rewrite the textdoc to fix it.

- NEVER change existing test cases unless they're clearly wrong.
- ALWAYS add more test cases if there aren't any yet.
- ALWAYS ask the user what the expected behavior is in the chat if the code is not clear.

${s ? `# Hint

${s}

` : ""}
# Error

${a}`.trim()
}
  , nn = ({codeRunMessages: e, scrollRef: s, onClose: n, onClickLineNumber: a, onClickFix: r, title: i, headerActions: u, lastRunId: f, hints: d}) => {
    const l = d.size > 0
      , c = o.useMemo( () => Object.entries(as(e, "runId")), [e])
      , m = c.some( ([,h]) => {
        const g = h.filter(ut);
        return g.length > 1 || g.length === 1 && ft(g[0])
    }
    );
    return t.jsxs(t.Fragment, {
        children: [t.jsx(Hs, {
            title: i,
            actions: u,
            onClose: n,
            showBorder: e.length > 0
        }), t.jsx("div", {
            ref: s,
            className: "bg-token-main-surface-primary flex flex-1 flex-col-reverse overflow-auto",
            children: t.jsx("ol", {
                className: "flex flex-1 flex-col justify-start pb-4",
                children: t.jsx(ve, {
                    children: c.map( ([h,g], x) => t.jsx(en, {
                        runMessages: g,
                        includeContentBefore: m || l,
                        onClickFix: r,
                        onClickLineNumber: a,
                        hints: d,
                        isStale: h !== f,
                        isLast: x === c.length - 1
                    }, h))
                })
            })
        })]
    })
}
  , an = ({sandboxRef: e, textdocContent: s, textdocTitle: n, textdocId: a, isOpen: r, isTextdocAttachedPending: i, headerActions: u=[], highlightLine: f, createTextdocTurn: d, onOpenChange: l}, c) => {
    const [m,h] = o.useState(!1)
      , [g,x] = o.useState(!1)
      , [v,w] = o.useState([])
      , [y,p] = o.useState(0)
      , [b,_] = o.useState(null)
      , [L,R] = o.useState(null)
      , [I,M] = o.useState( () => new Map)
      , [q,G] = o.useState(320)
      , Y = o.useRef(null)
      , H = ie();
    o.useEffect( () => R(null), [s]);
    const U = v.filter(S => [N.LOG, N.ERROR, N.OUTPUT].includes(S.type)).length;
    o.useEffect( () => {
        r && p(U)
    }
    , [r]);
    const T = o.useMemo( () => {
        for (let S = v.length - 1; S >= 0; S--) {
            const E = v[S];
            if (E.runId !== L)
                return null;
            if (E.type === N.ERROR)
                return E
        }
        return null
    }
    , [v, L])
      , k = (S, E, j) => {
        const D = I.get(E);
        if (D) {
            const {id: A, content: Z} = D;
            M(F => {
                const $ = new Map(F);
                return $.set(A, {
                    id: A,
                    content: Z,
                    status: se.RESOLVED
                }),
                $
            }
            )
        }
        _(E),
        d({
            sourceEvent: S,
            action: le.EDIT,
            userMessageType: W.CONSOLE,
            content: sn(s, D?.content ?? null, j)
        })
    }
      , ne = async (S, E) => {
        if (!i) {
            M(j => {
                const D = new Map(j);
                return D.set(S, {
                    id: S,
                    status: se.LOADING,
                    content: ""
                }),
                D
            }
            );
            try {
                const j = await Gs(a, s, E);
                M(D => {
                    const A = new Map(D);
                    return A.set(S, {
                        id: S,
                        status: se.READY,
                        content: j
                    }),
                    A
                }
                )
            } catch {
                M(D => {
                    const A = new Map(D);
                    return A.delete(S),
                    A
                }
                )
            }
        }
    }
      , B = async (S, E) => {
        const j = $s(S, E)
          , D = Fs(S, E)
          , A = Us(S);
        if (!j || !A && !D)
            return;
        A && l?.(!0),
        x(!0),
        w($ => $.map(ae => ({
            ...ae,
            isStale: !0
        })));
        let Z = !1;
        const F = ns(e.current).evalAsync({
            code: E,
            language: j
        });
        for await(const $ of F) {
            if ($.type === N.RUN_START && requestAnimationFrame( () => {
                Y.current?.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }
            ),
            $.type === N.ERROR) {
                if ($.line != null) {
                    const {line: ae} = $;
                    requestAnimationFrame( () => f(ae))
                }
                Z = !0,
                ne($.id, $)
            }
            R($.runId),
            w(ae => [...ae, {
                ...$,
                isStale: !1
            }])
        }
        Z && l?.(!0),
        x(!1)
    }
    ;
    o.useImperativeHandle(c, () => ({
        runCode: B,
        stopCode: () => e.current?.stop()
    }));
    const z = !r && g
      , X = z && T && T.id !== b
      , te = !X && z && U > y;
    return t.jsxs(ve, {
        children: [m && t.jsx("div", {
            className: "pointer-events-auto absolute inset-0 bg-transparent"
        }, "drag-overlay"), te && t.jsx(O.button, {
            initial: {
                scale: .95,
                opacity: 0
            },
            exit: {
                scale: .95,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            transition: {
                type: "spring",
                bounce: .12,
                duration: .3
            },
            className: "bg-token-main-surface-primary hover:bg-token-main-surface-secondary absolute end-2 bottom-2 flex items-center gap-2 rounded-full px-3 py-1.5 shadow-lg",
            onClick: () => l?.(!0),
            children: t.jsxs("span", {
                className: "text-token-text-secondary flex items-center gap-1 text-sm",
                children: [t.jsx(Bt, {
                    className: "icon-sm"
                }), t.jsx(C, {
                    id: "etzFTa",
                    defaultMessage: "{numLogs, plural, one {{numLogs} message} other {{numLogs} messages}}",
                    values: {
                        numLogs: U
                    }
                })]
            })
        }, "view-console"), X && t.jsx(qs, {
            textdocTitle: n,
            onClickViewConsole: () => l?.(!0),
            onDismiss: () => _(T.id),
            onClickFix: S => {
                k(S, T.id, T.error)
            }
        }, "error-modal"), r && t.jsxs(O.div, {
            initial: {
                translateY: "100%",
                opacity: 0
            },
            animate: {
                translateY: "0%",
                opacity: 1
            },
            exit: {
                translateY: "100%",
                opacity: 0
            },
            transition: {
                type: "spring",
                bounce: 0,
                duration: .48
            },
            className: "border-token-border-default relative z-10 w-full border-t shadow-[0px_0px_32px_rgba(0,0,0,0.08)]",
            children: [t.jsx(Ws, {
                onDragEnd: () => h(!1),
                onDrag: ({delta: {y: S}}) => {
                    h(!0),
                    G(E => E - S)
                }
            }), t.jsx("div", {
                className: "flex flex-col",
                style: {
                    height: q
                },
                children: t.jsx(nn, {
                    scrollRef: Y,
                    codeRunMessages: v,
                    onClose: () => l?.(!1),
                    onClickLineNumber: f,
                    onClickFix: k,
                    title: H.formatMessage({
                        id: "P9VJDk",
                        defaultMessage: "Console"
                    }),
                    headerActions: [...u, {
                        tooltip: H.formatMessage({
                            id: "gAICYK",
                            defaultMessage: "Clear console"
                        }),
                        icon: Ft,
                        onClick: () => {
                            p(0),
                            w([]),
                            M(new Map)
                        }
                    }],
                    lastRunId: L,
                    hints: I
                })
            })]
        }, "console")]
    })
}
  , Xn = o.forwardRef(an)
  , rn = e => o.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...e
}, o.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 2.08496C14.3713 2.08496 17.915 5.62867 17.915 10C17.915 14.3713 14.3713 17.915 10 17.915C5.62867 17.915 2.08496 14.3713 2.08496 10C2.08496 5.62867 5.62867 2.08496 10 2.08496ZM9.22461 7.13086C8.68075 6.78163 7.96613 7.17202 7.96582 7.81836V12.1816C7.96613 12.828 8.68075 13.2184 9.22461 12.8691L12.6182 10.6875C13.1184 10.3657 13.1184 9.6343 12.6182 9.3125L9.22461 7.13086Z"
}));
function Kn({isDisabled: e=!1, isCodePreviewable: s=!1, isCodeRunning: n, disabledTooltip: a, clientThreadId: r, textdocType: i, onClick: u}) {
    const [f,d] = o.useState(n)
      , l = Ut(Pe.hasSeenCanvasCodeExecutionNux)
      , [{width: c},m] = st();
    o.useEffect( () => {
        let p = null;
        return !n || s ? d(n) : (p = setTimeout( () => {
            d(n)
        }
        , 200),
        () => clearTimeout(p))
    }
    , [n, s]);
    const h = () => ({
        conversation_id: r ? os(r) : void 0
    })
      , g = () => {
        rs.logEventWithStatsig("Canvas Run Code Button Clicked", "chatgpt_canvas_run_code_button_clicked", h()),
        setTimeout( () => u?.())
    }
      , x = t.jsx(O.button, {
        disabled: e || n && !f,
        onClick: g,
        className: P("btn rounded-full border transition-colors", f ? P(js, "border-transparent") : "border-token-border-default hover:bg-token-surface-hover bg-transparent"),
        animate: {
            width: c ?? 0
        },
        initial: {
            width: c ?? 0
        },
        transition: {
            type: "spring",
            bounce: .24,
            duration: .4
        },
        children: t.jsx("div", {
            ref: m,
            children: f ? t.jsxs(O.div, {
                className: "flex items-center gap-2 px-3 sm:px-4",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .3
                },
                children: [t.jsx(Ns, {
                    className: "icon"
                }), t.jsx("span", {
                    className: "hidden sm:inline",
                    children: t.jsx(C, {
                        ...fe.stopCode
                    })
                })]
            }) : t.jsxs(O.div, {
                className: "flex items-center gap-2 px-3 sm:px-4",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .3
                },
                children: [t.jsx(rn, {
                    className: "icon"
                }), t.jsx("span", {
                    className: "hidden sm:inline",
                    children: t.jsx(C, {
                        ...s ? fe.previewCode : fe.runCode
                    })
                })]
            })
        })
    })
      , v = !l.isLoading && l.eligible
      , w = e && a ? a : n ? null : t.jsx(C, {
        ...s ? fe.previewCodeTooltip : fe.runCodeTooltip
    })
      , y = o.useMemo( () => {
        if (!i)
            return "canvas";
        switch (i) {
        case K.CODE_JAVASCRIPT:
            return "JavaScript";
        case K.CODE_TYPESCRIPT:
            return "TypeScript";
        case K.CODE_HTML:
            return "HTML";
        case K.CODE_PYTHON:
            return "Python";
        case K.CODE_REACT:
            return "React"
        }
        return nt(i) ?? "canvas"
    }
    , [i]);
    return v ? t.jsx($t, {
        announcementKey: Pe.hasSeenCanvasCodeExecutionNux,
        show: !0,
        side: "bottom",
        align: "end",
        theme: "bright",
        dismissOnOutsideClick: !0,
        badge: "new",
        title: s ? t.jsx(C, {
            id: "O8VBVO",
            defaultMessage: "Preview your output"
        }) : t.jsx(C, {
            id: "2sN/zT",
            defaultMessage: "Run {language}",
            values: {
                language: y
            }
        }),
        description: s ? t.jsx(C, {
            id: "CMJOVI",
            defaultMessage: "Run your code to see how it looks and interact with the output."
        }) : t.jsx(C, {
            id: "ew1tTJ",
            defaultMessage: "See your output and get help debugging without leaving the canvas."
        }),
        onDismiss: l.markAsViewed,
        sideOffset: 0,
        children: x
    }) : w ? t.jsx(Ee, {
        label: w,
        children: x
    }) : x
}
const fe = be({
    previewCode: {
        id: "a08baM",
        defaultMessage: "Preview"
    },
    runCode: {
        id: "O/1aYA",
        defaultMessage: "Run"
    },
    stopCode: {
        id: "nCwG4+",
        defaultMessage: "Stop"
    },
    runCodeTooltip: {
        id: "UeNB/S",
        defaultMessage: "See output and debug"
    },
    previewCodeTooltip: {
        id: "XLZZHl",
        defaultMessage: "Preview your output"
    }
})
  , on = /\s/
  , ln = 30;
function Ge(e, s) {
    const n = e.indexOf(s);
    return n === -1 ? !1 : e.indexOf(s, n + s.length) === -1
}
function re(e, s) {
    return on.test(e[s])
}
function ze(e, s, n=!1) {
    if (s === 0 || n && re(e, s - 1))
        return s;
    for (; s > 0 && re(e, s - 1); )
        s--;
    for (; s > 0 && !re(e, s - 1); )
        s--;
    return re(e, s) && s++,
    s
}
function Ve(e, s, n=!1) {
    if (s === e.length || n && re(e, s))
        return s;
    for (; s < e.length && re(e, s); )
        s++;
    for (; s < e.length && !re(e, s); )
        s++;
    return re(e, s - 1) && s--,
    s
}
function cn(e, s, n=!0, a=ln) {
    if (e.start < 0 || e.end > s.length || e.start > e.end)
        throw new Error("Invalid commentSourceRange provided.");
    const r = s.substring(e.start, e.end);
    let i = e.start
      , u = e.end;
    n && (i = ze(s, i, !0),
    u = Ve(s, u, !0));
    let f = s.substring(i, e.start)
      , d = s.substring(e.end, u)
      , l = `${f}${r}${d}`;
    if (Ge(s, l) && (a == null || l.length >= a))
        return {
            before: f,
            after: d,
            allSurrounding: l
        };
    let c = i
      , m = u
      , h = !0;
    for (; h && (a == null || l.length < a); ) {
        let g = !1;
        const x = c > 0 ? ze(s, c) : c;
        x < c && (c = x,
        g = !0);
        const v = m < s.length ? Ve(s, m) : m;
        if (v > m && (m = v,
        g = !0),
        g) {
            const w = s.substring(c, e.start)
              , y = s.substring(e.end, m)
              , p = `${w}${r}${y}`;
            if (Ge(s, p) && (a == null || p.length >= a))
                return {
                    before: w,
                    after: y,
                    allSurrounding: p
                };
            f = w,
            d = y,
            l = p
        } else
            h = !1
    }
    return {
        before: f,
        after: d,
        allSurrounding: l
    }
}
const ge = "# Context"
  , he = "# Instructions";
function ye(e, s, n) {
    if (s == null || n == null)
        return `The user is referring to the entire text of "${e}".`;
    const a = `
## Selected Text
The user has selected this text in "${e}" in particular:
${s}
`.trim();
    return n.allSurrounding === s ? a : `
${a}

## Surrounding Context
Here is the surrounding context:
${n.allSurrounding}
`.trim()
}
function ht(e, s) {
    return e == null || s == null ? "entire document" : e === s.allSurrounding ? "selected text" : "surrounding context"
}
function yt(e) {
    return `For the update pattern, create a regex which exactly matches the ${e}. Edit just this string in order to fullfill the user's request. NEVER rewrite the entire document. Instead, ALWAYS edit ONLY the ${e}. The only exception to this rule is if the ${e} includes markdown lists or tables. In that case, fully rewrite the document using ".*" as the regex update pattern.`.trim()
}
function dn(e, s, n, a) {
    if (!Ze(s) && n && a) {
        const r = ht(n, a);
        return `
${ge}
The user requests that you directly edit the document.

${ye(e, n, a)}

${he}
Use the update_textdoc tool to make this edit. ${yt(r)}`.trim()
    }
    return `
${ge}
The user requests that you directly edit the document.

${ye(e, n, a)}

${he}
Use the update_textdoc tool to make this edit. You MUST fully rewrite the entire document by using ".*" as the update regex pattern.`.trim()
}
function un(e, s, n) {
    return `
${ge}
The user requests that you add comments about some text.

${ye(e, s, n)}

${he}
Do not respond to the user's question directly, just leave comments.`.trim()
}
function fn(e, s) {
    return Ze(e) ? s === "entire document" ? ` If you choose to update the ${s}, you MUST fully rewrite the ${s} by using ".*" as the update regex pattern.` : ` If you choose to update the ${s}, you MUST fully rewrite the entire document by using ".*" as the update regex pattern. When you do so, ONLY modify the ${s} and rewrite other sections exactly as is, except for parts that must change based on this update` : s === "entire document" ? "" : ` If you choose to update the ${s}, follow these instructions: ${yt(s)}`
}
function mn(e, s, n, a) {
    const r = ht(n, a)
      , i = fn(s, r);
    return `
${ge}
${ye(e, n, a)}

${he}
The user would like you perform one of the following actions:
- Update the ${r} via the \`update_textdoc\` tool.${i}
- Explain the selected text via chat, or answer a general question about the selected text (no tool call required).
- Comment on the ${r} with feedback via the \`comment_textdoc\` tool. This should only be used if the user very explicitly asks for feedback, critique, or comments.

Based on the user's request, choose the appropriate action.
`.trim()
}
function pn(e, s, n) {
    return `
${ge}
${ye(e, s, n)}

${he}
The user would like you to create a new textdoc.
`.trim()
}
function xn(e, s, n, a=null, r=null) {
    switch (n) {
    case le.ASK:
        return mn(e, s, a, r);
    case le.CREATE_TEXTDOC:
        return pn(e, a, r);
    case le.EDIT:
        return dn(e, s, a, r);
    case le.COMMENT:
        return un(e, a, r)
    }
}
function gn(e) {
    switch (e) {
    case W.ACCELERATOR:
    case W.CONSOLE:
    case W.ACCEPT_COMMENT:
    case W.HIVE_SPEAKER_EDIT:
        return !0;
    case W.ASK_CHATGPT:
    case W.FULL_SCREEN_SUBMIT:
        return !1
    }
}
function hn(e, s) {
    switch (s) {
    case W.ASK_CHATGPT:
    case W.ACCEPT_COMMENT:
    case W.FULL_SCREEN_SUBMIT:
        return e.formatMessage(vn.askChatGPT);
    case W.ACCELERATOR:
    case W.CONSOLE:
    case W.HIVE_SPEAKER_EDIT:
        return
    }
}
const yn = (e, s) => {
    const n = ie()
      , a = Ht(e)
      , r = Cs(e)
      , i = is();
    return o.useCallback(async ({content: u, sourceRange: f, action: d, userMessageType: l, acceleratorMetadata: c, selectionMetadata: m, sourceEvent: h}) => {
        if (s?.versionInt == null || i)
            return;
        const {textdocId: g, type: x, versionInt: v, content: w} = s;
        let y, p = null;
        f && f.start !== f.end && (y = w.slice(f.start, f.end),
        p = cn(f, w));
        const b = xn(g, x, d, y, p)
          , L = ls(b, {
            exclude_after_next_user_message: !0
        });
        r({
            sourceEvent: h,
            promptMessage: cs(u, {
                canvas: {
                    textdoc_id: g,
                    textdoc_type: x,
                    version: v,
                    textdoc_content_length: w.length,
                    user_message_type: l,
                    accelerator_metadata: c,
                    selection_metadata: m
                },
                is_visually_hidden_from_conversation: gn(l),
                targeted_reply: y,
                targeted_reply_label: hn(n, l),
                open_in_canvas_view: {
                    type: "canvas_textdoc",
                    id: g
                }
            }),
            completionMetadata: a ? {
                conversationMode: a
            } : void 0,
            appendMessages: [L]
        })
    }
    , [s, i, r, a, n])
}
  , vn = be({
    askChatGPT: {
        id: "h5ANdM",
        defaultMessage: "Asked ChatGPT"
    }
})
  , bn = (e, s, n=1) => {
    Ct(e.scrollTop, s, {
        duration: n,
        ease: "easeInOut",
        onUpdate: a => {
            e.scrollTop = a
        }
    })
}
  , vt = V.div`flex w-full grow flex-col gap-1 rounded-xl p-2 pe-5 text-sm`
  , En = V.input`ms-[-2px] w-auto rounded-none border-none bg-[#E5F3FF] p-0 px-0.5 text-sm font-semibold outline-none focus:outline-none`
  , wn = V(O.span)`start border-token-text-tertiary absolute -bottom-0.5 w-full origin-left border-b border-solid`
  , Sn = V(O.span)`start border-token-text-tertiary absolute -bottom-0.5 w-full border-b border-dashed`
  , je = V.div`w-full loading-results-shimmer bg-token-bg-secondary h-2 rounded-full`
  , jn = () => t.jsxs(vt, {
    className: "gap-2",
    children: [" ", t.jsx(je, {
        className: "w-[48px]"
    }), " ", t.jsx(je, {}), " ", t.jsx(je, {}), " ", t.jsx(je, {
        className: "w-1/2"
    })]
})
  , Nn = {
    initial: {
        scaleX: 0,
        opacity: 1
    },
    animate: {
        scaleX: 1,
        opacity: 0,
        transition: {
            scaleX: {
                duration: .85,
                ease: [.65, 0, .35, 1]
            },
            opacity: {
                delay: .85,
                duration: .1
            }
        }
    }
}
  , Cn = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            delay: .85,
            duration: .1
        }
    }
};
V.div`ms-2 rounded-full px-2 py-0.5 text-xs font-medium`;
const bt = ({speakerId: e, content: s, range: n, filterDecision: a, isEditing: r, isSaving: i, containerRef: u, measuredTextContainerRef: f, isEditingEnabled: d}) => {
    const l = o.useRef(null)
      , {setSpeakers: c, setEditingSpeaker: m, hoveringSpeakerId: h, setHoveringSpeakerId: g, speakers: x, editingSpeaker: v, enableDebugger: w} = Te.getState()
      , y = Te(k => k.currentTime)
      , p = n.max == null ? y === n.min : y >= n.min && y <= n.max;
    o.useEffect( () => {
        if (p && l.current && u.current) {
            const k = u.current
              , ne = l.current
              , B = k.getBoundingClientRect().top
              , X = ne.getBoundingClientRect().top - B + k.scrollTop - 20;
            bn(k, X, .3)
        }
    }
    , [n.min, n.max, p, u]);
    const b = x.get(e)
      , _ = !!b?.storedName && b.storedName !== b?.placeholderName || (b?.isEdited ?? !1)
      , L = b?.name ?? b?.storedName ?? b?.placeholderName ?? "Unidentified Speaker"
      , R = o.useRef(null)
      , I = e === v?.id
      , M = e === h
      , [q,G] = o.useState(!1)
      , [Y,H] = o.useState(!1);
    o.useEffect( () => {
        R.current && (!I || !Y || (R.current?.focus(),
        _ && (R.current.value = L)))
    }
    , [_, I, Y, L]),
    ds( () => {
        if (f?.current && R.current) {
            const k = f.current.offsetWidth;
            R.current.style.width = `${k}px`
        }
    }
    , [v?.name]);
    const U = o.useCallback( () => {
        if (!v || !b)
            return;
        m(null),
        H(!1),
        G(!1),
        g(null);
        const k = x.set(e, {
            ...b,
            name: v.name ? v.name : b.placeholderName,
            isEdited: !!v.name
        });
        c(k)
    }
    , [v, b, m, g, x, e, c])
      , T = !r || i;
    return t.jsxs(vt, {
        ref: l,
        className: P(p && "animate-[hive-log-fadeout_0.3s_1.5s_forwards] bg-blue-500/10", !1, !1),
        children: [!1, t.jsxs("div", {
            className: "mb-[1px] flex w-full items-center justify-between",
            children: [d && (I ? t.jsx(En, {
                ref: R,
                disabled: !Y,
                onBlur: U,
                className: P(!I && "hidden w-0"),
                placeholder: b?.isEdited ? void 0 : b?.placeholderName,
                value: v?.name,
                onKeyDown: k => {
                    k.key === "Enter" && U()
                }
                ,
                onChange: k => m({
                    id: e,
                    name: k.target.value
                })
            }) : t.jsxs("div", {
                className: "flex items-center gap-1",
                children: [t.jsxs("div", {
                    onClick: () => {
                        T || (m({
                            id: e,
                            name: _ ? L : ""
                        }),
                        H(!0))
                    }
                    ,
                    onMouseEnter: () => {
                        T || (g(e),
                        G(!0))
                    }
                    ,
                    onMouseLeave: () => {
                        T || (g(null),
                        G(!1))
                    }
                    ,
                    className: P("relative flex font-semibold transition-colors", {
                        "text-blue-400!": M && !T
                    }, {
                        "cursor-pointer": !T
                    }, {
                        "text-token-text-tertiary": !T && !_
                    }),
                    children: [L, !T && !_ && t.jsxs(t.Fragment, {
                        children: [t.jsx(wn, {
                            ...Nn
                        }), t.jsx(Sn, {
                            ...Cn,
                            className: P(M && !T && "border-blue-400!")
                        })]
                    })]
                }), q && !T && t.jsx(Je, {
                    className: "h-4 w-4 text-blue-400"
                }), !1]
            })), t.jsx("div", {
                className: "text-xs text-[#5D5D5D]",
                children: Ts(n.min)
            })]
        }), t.jsx("div", {
            className: "flex",
            children: s
        })]
    })
}
  , Tn = e => Me({
    queryKey: ["sharedHiveLog", e],
    queryFn: () => de.safeGet("/hive/textdoc/shared/{shared_textdoc_id}/transcript", {
        parameters: {
            path: {
                shared_textdoc_id: e
            }
        }
    }),
    select: at
})
  , Rn = e => Me({
    queryKey: ["hiveLog", e],
    queryFn: () => de.safeGet("/hive/{hive_id}/transcript", {
        parameters: {
            path: {
                hive_id: e
            }
        }
    }),
    enabled: !!e,
    select: at
})
  , kn = () => Me({
    queryKey: ["hiveLogPrompts"],
    queryFn: () => de.safeGet("/hive/prompts"),
    enabled: !0
})
  , _n = (e, s) => de.safePost("/hive/{hive_id}/speakers", {
    parameters: {
        path: {
            hive_id: e
        }
    },
    requestBody: {
        speakers: s
    }
})
  , Mn = V.div`invisible absolute start-0 top-0 rounded-md border px-0.5 text-sm font-semibold whitespace-pre`
  , An = (e, s) => !s || !e ? "" : s.isEdited || e.name && e.name !== s.placeholderName ? e.name : s.placeholderName
  , Et = () => t.jsx(ms, {
    children: t.jsx(C, {
        ...ce.researchPreview
    })
})
  , On = V.div`flex h-full w-full max-w-[360px] min-w-[240px] flex-col border-l border-gray-200`
  , Ln = V.div`flex w-full max-w-[360px] min-w-[240px] flex-col border-l border-gray-200`
  , In = V.div`bg-token-bg-primary mt-[0.5px] flex h-18 w-full items-center justify-between border-b-[0.5px] border-gray-200 p-4`
  , wt = V.div`flex h-full w-full flex-col gap-2 overflow-y-auto p-2`
  , Ye = V(O.div)`flex items-center gap-2`
  , Xe = {
    initial: {
        opacity: 0,
        y: -4
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .2
        }
    },
    exit: {
        opacity: 0,
        y: -4,
        transition: {
            duration: .2
        }
    }
}
  , Zn = "ts"
  , Jn = ({sharedTextDocId: e}) => {
    const s = Tn(e)
      , n = o.useRef(null)
      , a = us()
      , {selectedFilters: r, isOpen: i, currentTime: u, closeSidebar: f} = Te()
      , d = o.useMemo( () => s.data?.filter( ({filterDecision: m}) => !m || r?.includes(m)), [s.data, r]);
    if (s.isError)
        return null;
    const l = t.jsxs("div", {
        className: "text-token-text-secondary flex items-center gap-1.5 px-2 py-2 text-base font-medium md:px-0",
        children: [t.jsx(C, {
            ...ce.transcript
        }), t.jsx(Et, {})]
    })
      , c = t.jsxs(t.Fragment, {
        children: [s.isLoading && Array.from({
            length: 16
        }).map( (m, h) => t.jsx(jn, {}, `loading-${h}`)), d?.map(m => t.jsx(bt, {
            isEditingEnabled: !1,
            containerRef: n,
            ...m
        }, St(m)))]
    });
    return !i || !u ? null : a ? t.jsxs(Ln, {
        children: [t.jsxs(In, {
            children: [l, t.jsx(fs, {
                onClick: f
            })]
        }), t.jsx(wt, {
            ref: n,
            children: c
        })]
    }) : t.jsx(Qe, {
        contentRef: n,
        testId: "modal-shared-canvas-transcript-modal",
        isOpen: i,
        title: l,
        contentClassName: "overflow-y-auto gap-2 p-2 flex flex-col",
        showCloseButton: !0,
        onClose: f,
        children: c
    })
}
  , Qn = ({hiveId: e, clientThreadId: s, ts: n, textdocVersion: a}) => {
    const r = Rn(e)
      , i = kn()
      , u = ie()
      , [f,d] = o.useState(!1)
      , l = o.useRef(null)
      , c = ps()
      , m = xs(c, "2986567482")
      , {isOpen: h, closeSidebar: g, openSidebar: x, setCurrentTime: v, speakers: w, setSpeakers: y, editingSpeaker: p, enableDebugger: b, setEnableDebugger: _, selectedFilters: L, setSelectedFilters: R} = Te();
    o.useEffect( () => {
        n !== void 0 && (x(),
        v(n))
    }
    , [n, x, v]);
    const I = o.useRef(null)
      , [M,q] = o.useState(!1)
      , G = yn(s, a);
    if (r.isLoading || i.isLoading || r.isError || i.isError || !r.data || !i.data)
        return null;
    const Y = p ? w.get(p.id) : null
      , H = Array.from(w.values()).some( ({isEdited: B}) => B)
      , U = () => {
        const B = new Map(Array.from(w.entries()).map( ([z,X]) => [z, {
            ...X,
            name: void 0,
            isEdited: !1
        }]));
        y(B),
        d(!1)
    }
      , T = B => {
        if (!i.data.speaker_edits)
            return;
        const z = i.data.speaker_edits.replace("{speakers}", JSON.stringify(Array.from(w.entries())));
        return G({
            sourceEvent: B,
            action: le.EDIT,
            content: z,
            userMessageType: W.HIVE_SPEAKER_EDIT,
            selectionMetadata: void 0
        })
    }
      , k = async B => {
        if (H) {
            q(!0);
            try {
                const z = [];
                Array.from(w.entries()).forEach( ([S,E]) => {
                    !E.isEdited || !E.name || z.push({
                        id: S,
                        updated_name: E.name
                    })
                }
                );
                const X = await _n(e, z);
                if (!X)
                    throw new Error("Failed to update hive content");
                const te = new Map(w);
                for (const S of X.updated_speakers) {
                    if (!te.has(S.id))
                        continue;
                    const E = te.get(S.id);
                    E && te.set(S.id, {
                        ...E,
                        storedName: S.updated_name,
                        isEdited: !1
                    })
                }
                await T(B),
                y(te),
                d(!1)
            } catch {} finally {
                q(!1)
            }
        }
    }
      , ne = r.data.filter( ({filterDecision: B}) => !B || L?.includes(B));
    return t.jsxs(On, {
        className: P(h ? "visible" : "invisible hidden"),
        children: [t.jsxs("div", {
            className: "flex h-14 w-full items-center justify-between border-b border-gray-200 p-4",
            children: [t.jsxs("div", {
                className: "text-token-text-secondary group/debug flex items-center gap-1.5 py-2 text-base font-medium",
                children: [t.jsx(C, {
                    ...ce[f ? "edit" : "transcript"]
                }), t.jsx(Et, {}), !1]
            }), t.jsx("div", {
                className: "flex h-10 items-center gap-2",
                children: t.jsx(ve, {
                    mode: "wait",
                    children: f ? t.jsxs(Ye, {
                        ...Xe,
                        children: [t.jsx(oe, {
                            onClick: U,
                            color: "secondary",
                            disabled: M,
                            children: t.jsx(C, {
                                ...ce.cancelButton
                            })
                        }), t.jsx(oe, {
                            color: "primary",
                            onClick: k,
                            disabled: !H,
                            loading: M,
                            children: t.jsx(C, {
                                ...ce.saveButton
                            })
                        })]
                    }, "edit-buttons") : t.jsxs(Ye, {
                        ...Xe,
                        children: [m && t.jsx(Ee, {
                            className: "h-10",
                            label: u.formatMessage(ce.editButtonTooltip),
                            children: t.jsx(Be, {
                                icon: Je,
                                onClick: () => d(!0)
                            })
                        }), t.jsx(Be, {
                            icon: Le,
                            onClick: () => g()
                        })]
                    }, "non-edit-buttons")
                })
            })]
        }), !1, t.jsxs(wt, {
            ref: l,
            children: [m && p && t.jsx(Mn, {
                ref: I,
                children: An(p, Y)
            }), ne.map(B => t.jsx(bt, {
                isEditingEnabled: m,
                measuredTextContainerRef: I,
                containerRef: l,
                isEditing: f,
                isSaving: M,
                ...B
            }, St(B)))]
        })]
    })
}
  , St = e => {
    const {speakerId: s, content: n, range: a} = e;
    return `${s}-${a.min}-${a.max}-${n.slice(0, 2)}`
}
  , ce = be({
    researchPreview: {
        id: "HiveLogSidebar.researchPreview",
        defaultMessage: "Research Preview"
    },
    edit: {
        id: "HiveLogSidebar.edit",
        defaultMessage: "Edit"
    },
    transcript: {
        id: "HiveLogSidebar.transcript",
        defaultMessage: "Transcript"
    },
    editButtonTooltip: {
        id: "HiveLogSidebar.editButtonTooltip",
        defaultMessage: "Edit speakers"
    },
    cancelButton: {
        id: "HiveLogSidebar.cancelButton",
        defaultMessage: "Cancel"
    },
    saveButton: {
        id: "HiveLogSidebar.saveButton",
        defaultMessage: "Save"
    }
});
export {Yn as C, Zn as H, Jn as S, Kn as T, Us as a, Xn as b, Qn as c, $s as g, Fs as i, yn as u};
//# sourceMappingURL=mohn9bb09oz621dz.js.map
