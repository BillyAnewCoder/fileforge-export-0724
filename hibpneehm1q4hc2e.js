import {r as l, j as e, M as g, n as fe, h as De, f as je} from "./juy90og0wtbp77qa.js";
import {n as xe, A as Se, c5 as Be, c6 as Le, c7 as We, a0 as B, a1 as Ce, aw as Pe, c8 as Ie, c9 as Re, ca as Ee, cb as Te, cc as Ge, cd as Ue, ce as Ve, cf as He, cg as qe, ch as ze, ci as _e, cj as Fe, ck as Ye, cl as Ke, cm as Qe, cn as Ze, co as Je, cp as Xe, cq as $e, cr as et, cs as tt, ct as ot, cu as st, cv as at, cw as nt, cx as it, cy as rt, cz as lt, cA as ct, cB as dt, cC as ut, cD as ft, cE as mt, cF as gt, cG as pt, cH as ht, cI as Mt, cJ as bt, cK as xt, cL as St, cM as Ct, cN as At, o as kt, ae as j, U as me, cO as ge, cP as yt, cQ as Nt} from "./ckp56qklot786ulr.js";
import {i as vt, j as wt, e as L, f as Ae, c7 as Ot, fj as pe, bf as Dt, C as ke, B as he, k4 as jt, cG as Bt, cE as Lt, cB as Wt, ak as Pt, cr as It, a8 as Rt, iZ as Et, kx as Me, i_ as Tt, aq as Gt} from "./dc2xxjkicf2pz0mj.js";
import {u as Ut, I as Vt} from "./iacposgqe14fuloa.js";
import {u as Ht} from "./o6wb3ptvu0bk81yq.js";
import {u as qt} from "./o7zrzew6ugefv8n2.js";
const zt = "https://help.openai.com/en/articles/11752874-chatgpt-agent#h_beedf96566"
  , _t = () => {
    const {eligible: t, isLoading: o} = xe(Se.hasSeenn7jupdNux)
      , a = vt(wt)
      , i = L();
    return !Ae(i, "3014776572") || a ? "hide" : o ? "loading" : t ? "show" : "hide"
}
  , Ft = ({onClose: t, clientThreadId: o}) => {
    const {markAsViewed: a} = xe(Se.hasSeenn7jupdNux)
      , i = Ht()
      , n = Ot()
      , d = Be(pe, o)
      , p = L()
      , M = Dt(p, "2302071098")
      , A = M.get("videoUrl", "https://persistent.oaistatic.com/deep-research/nuxx.070152025.mp4")
      , k = M.get("posterUrl", "https://persistent.oaistatic.com/deep-research/nuxx.070152025.jpg")
      , [b,y] = l.useState(!1)
      , x = () => {
        a(),
        t()
    }
      , N = () => {
        a(),
        t(),
        d && n(pe, {
            analyticsMetadata: {
                clientThreadId: o
            }
        }),
        i.focus()
    }
    ;
    return e.jsxs(ke, {
        testId: "modal-agent-nux",
        isOpen: !0,
        noPadding: !0,
        onClose: x,
        showCloseButton: !0,
        size: "custom",
        type: "success",
        className: "max-w-md",
        title: e.jsx(g, {
            id: "RCOyGW",
            defaultMessage: "Introducing agent mode"
        }),
        visuallyHiddenHeader: !0,
        children: [e.jsxs("div", {
            className: "relative aspect-16/9 w-full",
            children: [!b && e.jsx("img", {
                src: k,
                alt: "",
                className: "pointer-events-none absolute inset-0 h-full w-full object-cover object-bottom transition-opacity duration-300"
            }), e.jsx("video", {
                src: A,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: "pointer-events-none h-full w-full object-cover object-bottom",
                onLoadedData: () => y(!0)
            })]
        }), e.jsxs("div", {
            className: "flex flex-col gap-4 px-8 pt-6 pb-8 text-center",
            children: [e.jsx("div", {
                className: "text-xl font-medium",
                children: e.jsx(g, {
                    id: "RCOyGW",
                    defaultMessage: "Introducing agent mode"
                })
            }), e.jsx("div", {
                className: "text-token-text-secondary",
                children: e.jsx(g, {
                    id: "v0jGzu",
                    defaultMessage: "ChatGPT can now do work on its own computer, from research and spreadsheets to booking reservations and more."
                })
            }), e.jsx("div", {
                className: "text-token-text-secondary text-xs",
                children: e.jsx(g, {
                    id: "xNONtd",
                    defaultMessage: "Agent mode uses a remote browser and takes screenshots. You can take control at any time. Agent mode has privacy risks. <link>Learn more</link>",
                    values: {
                        link: S => e.jsx("a", {
                            href: zt,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "cursor-pointer underline",
                            children: S
                        })
                    }
                })
            }), e.jsx("div", {
                className: "mt-4 flex w-full justify-center gap-3",
                children: e.jsxs("div", {
                    className: "mx-auto flex w-fit max-w-full min-w-[260px] justify-center gap-3",
                    children: [e.jsx(he, {
                        color: "secondary",
                        onClick: x,
                        className: "min-w-0 flex-1",
                        children: e.jsx(g, {
                            id: "1u5Z3t",
                            defaultMessage: "Not now"
                        })
                    }), e.jsx(he, {
                        color: "primary",
                        onClick: N,
                        className: "min-w-0 flex-1",
                        children: e.jsx(g, {
                            id: "WqzFRe",
                            defaultMessage: "Try it"
                        })
                    })]
                })
            })]
        })]
    })
}
  , Yt = ({onClose: t}) => {
    const o = De()
      , a = B(Ce.isBusinessWorkspace)
      , i = B(d => d.currentWorkspace)
      , n = a ? o.formatMessage(be.workspaceWelcome, {
        workspaceName: i?.name
    }) : "ChatGPT";
    return e.jsx(ke, {
        testId: "modal-onboarding",
        isOpen: !0,
        onClose: Gt,
        type: "success",
        title: n,
        size: "custom",
        noPadding: !0,
        className: "max-w-3xl",
        description: o.formatMessage(be.personalOnboardingSubheading),
        children: e.jsx(yt, {
            onClose: t,
            scope: Nt.Personal
        })
    })
}
  , Kt = ({onClose: t}) => {
    const o = Tt.useStore();
    return l.useEffect( () => (o.setOnCloseSideEffect(t),
    o.setManualVisibility(!0),
    () => {
        o.setManualVisibility(!1)
    }
    ), [t, o]),
    null
}
;
function oo({clientThreadId: t, page: o}) {
    const [a,i] = l.useState(0)
      , {hasSeenOnboardingDate: n} = Le()
      , {hasSeenTeamOwnerOnboardingDate: d} = We()
      , p = B(Ce.isBusinessWorkspace)
      , [M,A] = l.useState(!1)
      , k = fe()
      , b = jt(k)
      , {data: y, isPending: x, isEnabled: N} = Pe()
      , S = Ie(y, x && N)
      , W = Bt()
      , P = Lt()
      , I = Wt()
      , [ye,v] = Pt(t, s => [!s || s.isLoading, s?.conversationOrigin])
      , w = ye && !!t
      , {data: r, isError: h} = It()
      , O = Rt(r)
      , u = r != null
      , R = r && r?.accountItems.length > 1 && r.currentAccountId == null
      , E = r?.accountItems.some(s => s.isPersonalAccount())
      , T = !!r?.accountItems && r.accountItems.length > 0 && r.accountItems.every( ({canAccessWithCurrentSession: s}) => !s)
      , {eligible: G, isLoading: U} = Re()
      , Ne = L()
      , V = Ae(Ne, "1542198993")
      , {punchOutRequireLoginInfo: H} = Ee()
      , {state: q} = Te()
      , {isOpen: z, isLoading: _} = Ge()
      , {isOpen: F, isLoading: Y} = Ue()
      , {isOpen: K, isLoading: Q} = Ve()
      , {isOpen: Z, isLoading: J} = He()
      , {state: X} = qe()
      , $ = ze()
      , ee = Ut()
      , te = _e()
      , oe = Fe()
      , se = Ye()
      , ae = Ke()
      , ne = Qe()
      , ie = Ze()
      , D = _t()
      , {isOpen: re, isLoading: le} = Je()
      , {isOpen: ve} = qt()
      , {shouldShowCookieBanner: ce, isCookieConsentBannerLoading: de} = Et()
      , m = l.useMemo( () => [{
        Component: Xe,
        visibility: ["chat", "codex"],
        getModalState: () => H ? "show" : "hide",
        isDeferrable: !1
    }, {
        Component: $e,
        visibility: ["chat", "codex"],
        getModalState: () => q,
        isDeferrable: !1
    }, {
        Component: et,
        visibility: ["chat"],
        getModalState: () => X,
        isDeferrable: !1
    }, {
        Component: tt,
        visibility: ["chat"],
        getModalState: () => le ? "loading" : re ? "show" : "hide",
        isDeferrable: !1
    }, {
        Component: ot,
        visibility: ["chat"],
        getModalState: () => te,
        isDeferrable: !0
    }, {
        Component: st,
        visibility: ["chat"],
        getModalState: () => _ || w ? "loading" : v === Me.APPLE ? "hide" : z ? "show" : "hide",
        isDeferrable: !0
    }, {
        Component: at,
        visibility: ["chat"],
        getModalState: () => J || w ? "loading" : v === Me.APPLE ? "hide" : Z ? "show" : "hide",
        isDeferrable: !0
    }, {
        Component: Kt,
        visibility: ["chat", "codex"],
        getModalState: () => de ? "loading" : ce ? "show" : "hide",
        isDeferrable: !1
    }, {
        Component: Yt,
        visibility: ["chat"],
        getModalState: () => p || b ? "hide" : n === null ? "loading" : n === !1 ? "show" : "hide",
        isDeferrable: !0
    }, {
        Component: nt,
        visibility: ["chat", "codex"],
        getModalState: () => h ? "hide" : R ? "show" : u ? "hide" : "loading",
        isDeferrable: !1
    }, {
        Component: it,
        visibility: ["chat", "codex"],
        getModalState: () => W !== null ? "show" : h || u ? "hide" : "loading",
        isDeferrable: !1
    }, {
        Component: rt,
        visibility: ["chat", "codex"],
        getModalState: () => P !== null ? "show" : h || u ? "hide" : "loading",
        isDeferrable: !1
    }, {
        Component: lt,
        visibility: ["chat", "codex"],
        getModalState: () => I != null ? "show" : h || u ? "hide" : "loading",
        isDeferrable: !1
    }, {
        Component: ct,
        visibility: ["chat", "codex"],
        getModalState: () => u ? T ? "show" : "hide" : "loading",
        isDeferrable: !1
    }, {
        Component: dt,
        visibility: ["chat", "codex"],
        getModalState: () => Y ? "loading" : F ? "show" : "hide",
        isDeferrable: !1
    }, {
        Component: ut,
        visibility: ["chat", "codex"],
        getModalState: () => Q ? "loading" : K ? "show" : "hide",
        isDeferrable: !1
    }, {
        Component: ft,
        visibility: ["chat", "codex"],
        getModalState: () => "hide",
        isDeferrable: !1
    }, {
        Component: mt,
        visibility: ["chat", "codex"],
        getModalState: () => !O?.isTeam() || !O?.isOwnerOfAccount() || !E ? "hide" : !u || d === null ? "loading" : d === !1 ? "show" : "hide",
        isDeferrable: !1
    }, {
        Component: gt,
        visibility: ["chat", "codex"],
        getModalState: () => p ? n === null ? "loading" : n === !1 ? "show" : "hide" : "hide",
        isDeferrable: !0
    }, {
        Component: pt,
        visibility: ["chat"],
        getModalState: () => U ? "loading" : G && V ? "show" : "hide",
        isDeferrable: !1
    }, {
        Component: ht,
        visibility: ["chat", "codex"],
        getModalState: () => S,
        isDeferrable: !1
    }, {
        Component: Mt,
        visibility: ["chat"],
        getModalState: () => $,
        isDeferrable: !1
    }, {
        Component: f => t && e.jsx(Vt, {
            clientThreadId: t,
            ...f
        }),
        visibility: ["chat"],
        getModalState: () => ee,
        isDeferrable: !1
    }, {
        Component: bt,
        visibility: ["chat"],
        getModalState: () => oe,
        isDeferrable: !1
    }, {
        Component: xt,
        visibility: ["chat"],
        getModalState: () => se,
        isDeferrable: !1
    }, {
        Component: St,
        visibility: ["chat"],
        getModalState: () => ae,
        isDeferrable: !1
    }, {
        Component: Ct,
        visibility: ["chat"],
        getModalState: () => ne,
        isDeferrable: !1
    }, {
        Component: At,
        visibility: ["chat"],
        getModalState: () => ie,
        isDeferrable: !0
    }, ...D ? [{
        Component: f => t && e.jsx(Ft, {
            clientThreadId: t,
            ...f
        }),
        visibility: ["chat"],
        getModalState: () => D,
        isDeferrable: !1
    }] : []].filter(f => f.visibility.includes(o)), [o, H, q, X, le, re, te, _, w, v, z, J, Z, de, ce, p, b, n, h, R, u, W, P, I, T, Y, F, Q, K, O, E, d, U, G, V, S, $, t, ee, oe, se, ae, ne, ie, D])[a]
      , we = M;
    let c;
    m && (m.isDeferrable && we ? c = "hide" : m.Component ? c = m.getModalState() : c = "hide"),
    l.useEffect( () => {
        c === "hide" && i(a + 1)
    }
    , [a, c]);
    const {pathname: C} = fe()
      , ue = l.useRef(C);
    if (l.useEffect( () => {
        ue.current !== C && (ue.current = C,
        i(0))
    }
    , [C]),
    l.useEffect( () => {
        const s = c === "show"
          , f = kt.getState().activeModals.has(j.BlockingInitialComponent);
        s !== f && (s ? me.openModal(j.BlockingInitialComponent) : me.closeModal(j.BlockingInitialComponent))
    }
    , [c]),
    m == null)
        return ge.trackNamespace(ge.NS_COMPOSER),
        e.jsx("span", {
            "data-testid": "blocking-initial-modals-done",
            className: "hidden"
        });
    if (c !== "show" || ve)
        return null;
    const Oe = m.Component;
    return e.jsx(Oe, {
        onClose: () => {
            A(!0),
            i(s => s + 1)
        }
    })
}
const be = je({
    workspaceWelcome: {
        id: "BlockingInitialModals.workspaceWelcome",
        defaultMessage: "Welcome to the {workspaceName} workspace"
    },
    personalOnboardingSubheading: {
        id: "BlockingInitialModals.personalOnboardingSubheading",
        defaultMessage: "Tips for getting started"
    }
});
export {oo as B};
//# sourceMappingURL=hibpneehm1q4hc2e.js.map
