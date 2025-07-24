import {r as k, j as t, M as C, c as y, e as ue, h as q, f as tt, m as de, A as Te, R as xe} from "./juy90og0wtbp77qa.js";
import {m as ke, oa as st, en as ot, ob as Me, e3 as nt, oc as Ie, iZ as it, le as at, od as rt, oe as lt, of as _e, nx as ct, eC as R, nw as dt, n as be, A as oe, cW as fe, e6 as ut, nR as ft, nS as le, d0 as gt, cO as D, og as ht, oh as Oe, oi as ne, oj as mt, ok as pt, ol as xt, bJ as Le, cZ as Pe, U as ae, ah as ze, cY as bt, d8 as Ae, ag as ge, d9 as Ee, om as St, on as jt, oo as vt, op as yt, oq as Ct, or as wt, aj as Nt, os as Tt, ot as kt, o as re, d4 as Mt, ou as Ue, ov as It, ln as _t, ow as Ot, cV as Lt, ox as Pt, oy as zt, oz as At, oA as Et, oB as Ut} from "./ckp56qklot786ulr.js";
import {e as L, a7 as Bt, f as Be, lQ as Gt, dA as Ge, fK as Dt, hH as De, L as Re, b as Fe, aF as ce, P as E, en as He, lP as Rt, ar as M, b0 as Ft, dG as J, cf as Ht, a$ as $t, bv as $e, g0 as Wt, ae as he, dX as Kt, fM as We, aY as Vt, j0 as F, e$ as Xt, B as ie, al as Se, eJ as me, lR as Yt, ir as je, b8 as Qt, b9 as Jt, kw as Zt, a5 as qt, cW as es, bd as Ke, ak as ts, hz as ss, k as os, b2 as ns, bg as is, hB as as, az as rs, aA as ls, d2 as cs, aD as ds, aE as us, s as Ve, N as Xe, aw as fs, av as gs, iY as hs, jf as ms, jg as ve} from "./dc2xxjkicf2pz0mj.js";
import {f as pe, u as ps, S as xs} from "./btouzu0b6h5eiejj.js";
import {c as bs, d as Ss, e as Ye, b as js} from "./g8shiwm7jpd74xmd.js";
import {S as Qe} from "./iiyyoj0wgh5vo89i.js";
function vs({currentGizmoId: s}) {
    "use forget";
    const e = L()
      , a = Bt()
      , o = Be(e, "3925590552")
      , r = ke()
      , {data: {gizmos: n=[]}={}} = st()
      , {topGizmos: i, remainingGizmos: l, hasUserCreatedGPTs: m} = k.useMemo( () => {
        const f = r ? n.filter(g => !Gt(g.resource)) : n
          , {topGizmos: d, remainingGizmos: u} = ot(f, o)
          , c = u.some(g => g.resource.gizmo.author.user_id === a?.authUserId);
        return {
            topGizmos: d,
            remainingGizmos: u,
            hasUserCreatedGPTs: c
        }
    }
    , [n, r, o, a]);
    if (!a || Ge(e))
        return null;
    const p = (f=!0) => t.jsx(De, {
        name: "GizmoSidebarList",
        children: t.jsx(ys, {
            currentGizmoId: s,
            maxToShowOnLoad: 4,
            isUnifiedGptDropdownGrouping: o,
            showTopLevelGizmos: f,
            topGizmos: i,
            remainingGizmos: l,
            hasUserCreatedGPTs: m
        })
    });
    return t.jsxs(t.Fragment, {
        children: [p(), o && (l.length > 0 || m ? t.jsx(Me, {
            label: t.jsx(C, {
                id: "gizmo.exploreStoreEnabled.short",
                defaultMessage: "GPTs"
            }),
            icon: nt,
            highlightTrailing: t.jsx(Dt, {
                className: "icon-sm",
                "aria-hidden": "true"
            }),
            children: p(!1)
        }) : t.jsx(Ie, {}))]
    })
}
const ys = s => {
    "use forget";
    const e = y.c(28)
      , {currentGizmoId: a, maxToShowOnLoad: o, isUnifiedGptDropdownGrouping: r, showTopLevelGizmos: n, topGizmos: i, remainingGizmos: l, hasUserCreatedGPTs: m} = s
      , [p,f] = k.useState(!(Re.getItem(Fe.IsGptListCollapsed) ?? !0))
      , d = Math.max(i.length, o);
    let u;
    e[0] !== l || e[1] !== i ? (u = [...i, ...l],
    e[0] = l,
    e[1] = i,
    e[2] = u) : u = e[2];
    let c = u;
    const g = c.length > d;
    if (g && !p && !r) {
        let x;
        e[3] !== c || e[4] !== d ? (x = c.slice(0, d - 1),
        e[3] = c,
        e[4] = d,
        e[5] = x) : x = e[5],
        c = x
    } else if (r) {
        let x;
        e[6] !== l || e[7] !== n || e[8] !== i ? (x = n ? [...i] : [...l],
        e[6] = l,
        e[7] = n,
        e[8] = i,
        e[9] = x) : x = e[9],
        c = x
    }
    let S;
    e[10] !== a || e[11] !== r || e[12] !== c || e[13] !== n ? (S = c.map(x => t.jsx(pe, {
        gizmo: x.resource,
        isActive: x.resource.gizmo.id === a,
        flair: x.flair.kind,
        inGPTDropdown: r && !n
    }, x.resource.gizmo.id)),
    e[10] = a,
    e[11] = r,
    e[12] = c,
    e[13] = n,
    e[14] = S) : S = e[14];
    let h;
    e[15] !== m || e[16] !== r || e[17] !== c.length || e[18] !== n ? (h = r && !n && t.jsxs(t.Fragment, {
        children: [c.length > 0 && t.jsx(ce.Separator, {}), t.jsx(ce.LinkItem, {
            to: at(),
            icon: it,
            active: location.pathname === "/gpts",
            "data-testid": "explore-gpts-button",
            label: t.jsx(C, {
                id: "Dn83AT",
                defaultMessage: "Explore GPTs"
            })
        }), m && t.jsx(ce.LinkItem, {
            onClick: Cs,
            to: lt(),
            icon: rt,
            active: location.pathname === "/gpts/mine",
            label: t.jsx(C, {
                id: "Az178v",
                defaultMessage: "My GPTs"
            })
        })]
    }),
    e[15] = m,
    e[16] = r,
    e[17] = c.length,
    e[18] = n,
    e[19] = h) : h = e[19];
    let b;
    e[20] !== r || e[21] !== g || e[22] !== p ? (b = !r && g && t.jsx(_e, {
        onClick: x => {
            x.preventDefault(),
            f(ws)
        }
        ,
        icon: He,
        children: p ? t.jsx(C, {
            id: "GizmoSidebarList.showLess",
            defaultMessage: "Show less"
        }) : t.jsx(C, {
            id: "GizmoSidebarList.showMoreItems",
            defaultMessage: "Show more"
        })
    }),
    e[20] = r,
    e[21] = g,
    e[22] = p,
    e[23] = b) : b = e[23];
    let j;
    return e[24] !== S || e[25] !== h || e[26] !== b ? (j = t.jsxs(t.Fragment, {
        children: [S, h, b]
    }),
    e[24] = S,
    e[25] = h,
    e[26] = b,
    e[27] = j) : j = e[27],
    j
}
;
function Cs() {
    E.logEvent("Sidebar Click My GPTs")
}
function ws(s) {
    const e = !s;
    return Re.setItem(Fe.IsGptListCollapsed, !e),
    e
}
function Ns({hasProjects: s}) {
    const e = ue()
      , a = q()
      , o = L()
      , [r,n] = k.useState(!1)
      , {onDropConversation: i, canDropConversation: l} = ps("sidebar_header_plus")
      , {eligibleNux: m} = Ts({
        hasProjects: s
    })
      , {canCreate: p} = Rt()
      , f = t.jsx(_e, {
        className: M(r && "bg-token-bg-tertiary"),
        onDragEnter: d => {
            l && (d.preventDefault(),
            n(!0))
        }
        ,
        onDrop: d => {
            l && (d.preventDefault(),
            d.stopPropagation(),
            n(!1),
            i())
        }
        ,
        onDragLeave: () => {
            n(!1)
        }
        ,
        disabled: !p,
        icon: ct,
        onClick: () => {
            Ft(o, ({onClose: d}) => t.jsx(dt, {
                onClose: d,
                onSuccess: u => {
                    u && e(`/g/${u}/project`)
                }
            })),
            m && m.announcement.markAsViewed(),
            E.logEventWithStatsig("Projects: Create Open", "chatgpt_web_projects_create_open", {
                source: "sidebar_row_button"
            })
        }
        ,
        children: t.jsx(C, {
            ...R.newProjectButton
        })
    });
    return p ? t.jsx(ks, {
        nux: m,
        children: f
    }) : t.jsx(J, {
        label: a.formatMessage(R.createProjectDisabledByAdmin),
        children: f
    })
}
function Ts({hasProjects: s}) {
    const e = q()
      , a = L()
      , o = Ht(a).checkGate("2711769261")
      , r = be(oe.hasSeenProjectsWebNuxTooltip)
      , n = be(oe.hasSeenProjectsUpdateNuxTooltip)
      , i = s && o && !n.isLoading && n.eligible
      , l = !i && !n.isLoading && !r.isLoading && r.eligible
      , m = {
        announcement: n,
        description: e.formatMessage(R.projectsUpdateTooltipDescription),
        key: oe.hasSeenProjectsUpdateNuxTooltip,
        title: e.formatMessage(R.projectsUpdateTooltipTitle)
    }
      , p = {
        announcement: r,
        description: e.formatMessage(R.projectsNuxTooltipDescription),
        key: oe.hasSeenProjectsWebNuxTooltip,
        title: e.formatMessage(R.projectsNuxTooltipTitle)
    };
    let f = null;
    return i ? f = m : l && (f = p),
    {
        eligibleNux: f,
        projectUpdateTooltip: m,
        projectTooltip: p,
        showProjectUpdateTooltip: i,
        showProjectTooltip: l
    }
}
function ks({children: s, nux: e}) {
    const a = fe()
      , o = $t()
      , r = $e();
    return !e || o || !r || !a ? t.jsx(t.Fragment, {
        children: s
    }) : t.jsx(ut, {
        announcementKey: e.key,
        theme: "bright",
        side: "right",
        show: !0,
        badge: "new",
        dismissOnOutsideClick: !0,
        title: e.title,
        description: e.description,
        onDismiss: e.announcement.markAsViewed,
        sideOffset: -5,
        children: s
    })
}
function Ms({currentGizmoId: s}) {
    return t.jsx(Me, {
        label: t.jsx(C, {
            ...R.seeMoreProjectItems
        }),
        icon: He,
        children: t.jsx(xs, {
            currentGizmoId: s,
            inSidebarFlyout: !0
        })
    })
}
function Is({snorlaxes: s, currentGizmoId: e}) {
    return t.jsx(t.Fragment, {
        children: s.map(a => t.jsx(pe, {
            gizmo: a.gizmo,
            isActive: a.gizmo.gizmo.id === e
        }, a.gizmo.gizmo.id))
    })
}
function _s({currentGizmoId: s}) {
    const {snorlaxes: e, data: a, isLoading: o, isError: r, refetch: n, hasNextPage: i} = ft()
      , l = e.slice(0, le)
      , m = gt(s);
    L();
    const p = k.useRef(!1)
      , [f,d] = k.useState(!0)
      , u = k.useCallback(function(x) {
        x && d(!1),
        n()
    }, [n, d])
      , c = r || a === void 0 && !o && p.current;
    D.markStart("SnorlaxSidebarList", D.NS_SIDEBAR),
    a != null && !o && D.markRendered("SnorlaxSidebarList", D.NS_SIDEBAR),
    a === void 0 && !o && !p.current && (p.current = !0,
    u(!1));
    const S = e?.find(j => j.gizmo.gizmo.id === s)
      , h = l.some(j => j.gizmo.gizmo.id === s)
      , b = e && (e?.length > (!m || h ? le : le + 1) || i);
    return t.jsxs(t.Fragment, {
        children: [c && t.jsx(ht, {
            showRetry: f,
            refetch: u
        }), !c && t.jsx(Oe, {
            id: "snorlax-heading",
            children: !o && t.jsxs(t.Fragment, {
                children: [t.jsx(Ns, {
                    hasProjects: e?.length > 0
                }), !1, t.jsx(Is, {
                    snorlaxes: l,
                    currentGizmoId: s
                }), S && !h && t.jsx(pe, {
                    gizmo: S.gizmo,
                    isActive: !0
                }), b && t.jsx(Ms, {
                    currentGizmoId: s
                })]
            })
        })]
    })
}
function Os(s) {
    "use forget";
    const e = y.c(5)
      , {clientThreadId: a, onNewThread: o} = s
      , r = Kt(a)
      , n = We(a)
      , i = Vt()
      , l = ke()
      , m = i ? void 0 : r;
    let p;
    return e[0] !== n || e[1] !== l || e[2] !== o || e[3] !== m ? (p = t.jsx(Ls, {
        currentGizmoId: n,
        activeId: m,
        isSnorlaxEnabled: l,
        onNewThread: o
    }),
    e[0] = n,
    e[1] = l,
    e[2] = o,
    e[3] = m,
    e[4] = p) : p = e[4],
    p
}
function Ls(s) {
    "use forget";
    const e = y.c(18)
      , {currentGizmoId: a, activeId: o, isSnorlaxEnabled: r, onNewThread: n} = s
      , i = L();
    let l;
    e[0] !== i ? (l = Be(i, "3925590552"),
    e[0] = i,
    e[1] = l) : l = e[1];
    const m = l;
    let p;
    e[2] !== n ? (p = t.jsx(pt, {
        onNewThread: n
    }),
    e[2] = n,
    e[3] = p) : p = e[3];
    let f;
    e[4] !== m || e[5] !== i || e[6] !== a || e[7] !== r ? (f = !Ge(i) && t.jsxs(t.Fragment, {
        children: [t.jsxs(Oe, {
            first: !0,
            children: [t.jsx(mt, {}), !m && t.jsx(Ie, {}), t.jsx(De, {
                name: "GPTsSidebarList",
                children: t.jsx(vs, {
                    currentGizmoId: a
                })
            })]
        }), r && t.jsx(_s, {
            currentGizmoId: a
        })]
    }),
    e[4] = m,
    e[5] = i,
    e[6] = a,
    e[7] = r,
    e[8] = f) : f = e[8];
    let d;
    e[9] === Symbol.for("react.memo_cache_sentinel") ? (d = null,
    e[9] = d) : d = e[9];
    let u;
    e[10] !== o ? (u = t.jsx(xt, {
        activeId: o
    }),
    e[10] = o,
    e[11] = u) : u = e[11];
    let c;
    e[12] !== f || e[13] !== u ? (c = t.jsx(F, {
        fallback: null,
        children: t.jsxs(k.Suspense, {
            children: [f, d, u]
        })
    }),
    e[12] = f,
    e[13] = u,
    e[14] = c) : c = e[14];
    let g;
    return e[15] !== p || e[16] !== c ? (g = t.jsxs(t.Fragment, {
        children: [p, c]
    }),
    e[15] = p,
    e[16] = c,
    e[17] = g) : g = e[17],
    g
}
function fo(s) {
    "use forget";
    const e = y.c(4)
      , {clientThreadId: a, onNewThread: o} = s
      , r = L();
    let n;
    return e[0] !== a || e[1] !== r || e[2] !== o ? (n = he(r) ? t.jsx(Os, {
        clientThreadId: a,
        onNewThread: o
    }) : null,
    e[0] = a,
    e[1] = r,
    e[2] = o,
    e[3] = n) : n = e[3],
    n
}
function Ps(s) {
    "use forget";
    const e = y.c(22)
      , {onNewThread: a} = s
      , o = q()
      , r = Wt(As)
      , n = bs();
    let i;
    e[0] !== o ? (i = o.formatMessage({
        id: "Q6nsOM",
        defaultMessage: "Close sidebar"
    }),
    e[0] = o,
    e[1] = i) : i = e[1];
    const l = i
      , m = k.useContext(ne)
      , p = fe()
      , f = r?.visible && r.getTitlebarAreaRect().left > 0 ? "justify-end" : "justify-between";
    let d;
    e[2] !== f ? (d = M("h-header-height flex items-center", f),
    e[2] = f,
    e[3] = d) : d = e[3];
    let u;
    e[4] !== a ? (u = t.jsx(Es, {
        onNewThread: a
    }),
    e[4] = a,
    e[5] = u) : u = e[5];
    let c;
    e[6] !== n ? (c = n && t.jsx(Ss, {}),
    e[6] = n,
    e[7] = c) : c = e[7];
    const g = m === "popover" || p
      , S = m === "popover" ? "stage-popover-sidebar" : "stage-slideover-sidebar";
    let h;
    e[8] !== l || e[9] !== g || e[10] !== S ? (h = t.jsx(Le, {
        className: "no-draggable cursor-w-resize rtl:cursor-e-resize",
        color: "tertiary",
        "aria-expanded": g,
        "aria-controls": S,
        "aria-label": l,
        onClick: zs,
        icon: Pe,
        mobileIcon: Xt,
        "data-testid": "close-sidebar-button"
    }),
    e[8] = l,
    e[9] = g,
    e[10] = S,
    e[11] = h) : h = e[11];
    let b;
    e[12] !== l || e[13] !== h ? (b = t.jsx(J, {
        label: l,
        triggerAs: null,
        children: h
    }),
    e[12] = l,
    e[13] = h,
    e[14] = b) : b = e[14];
    let j;
    e[15] !== c || e[16] !== b ? (j = t.jsxs("div", {
        className: "flex",
        children: [c, b]
    }),
    e[15] = c,
    e[16] = b,
    e[17] = j) : j = e[17];
    let x;
    return e[18] !== j || e[19] !== d || e[20] !== u ? (x = t.jsxs("div", {
        id: "sidebar-header",
        className: d,
        children: [u, j]
    }),
    e[18] = j,
    e[19] = d,
    e[20] = u,
    e[21] = x) : x = e[21],
    x
}
function zs() {
    ae.setSidebarOpen(!1)
}
function As() {
    return navigator.windowControlsOverlay
}
function Es({onNewThread: s, testId: e}) {
    const a = q();
    return t.jsx(Le, {
        onClick: o => {
            const r = o.currentTarget.closest("nav");
            if (r && r.scrollTop > 0) {
                r.scrollTo({
                    top: 0,
                    behavior: "smooth"
                }),
                o.preventDefault();
                return
            }
            bt(o, s)
        }
        ,
        icon: ze,
        iconClassName: "icon-lg",
        color: "primary",
        "aria-label": a.formatMessage({
            id: "H6SRdK",
            defaultMessage: "Home"
        }),
        "data-testid": e,
        as: "link"
    })
}
function go({navHeader: s, children: e, className: a}) {
    const o = q()
      , r = L()
      , n = me(r, "786015841").get("enabled", !1);
    return t.jsxs(t.Fragment, {
        children: [t.jsx(Yt, {
            asChild: !0,
            children: t.jsx("h2", {
                children: t.jsx(C, {
                    ...Z.chatHistoryLabel
                })
            })
        }), t.jsxs(Us, {
            className: M("relative flex h-full w-full flex-1 flex-col overflow-y-auto transition-opacity duration-500", a),
            "aria-label": o.formatMessage(Z.chatHistoryLabel),
            children: [t.jsx("div", {
                className: "bg-token-bg-elevated-secondary short:group-data-scrolled-from-top/scrollport:shadow-(--sharp-edge-top-shadow) sticky top-0 z-30",
                children: t.jsx("div", {
                    className: "touch:px-1.5 px-2",
                    children: s
                })
            }), e, n ? t.jsxs(t.Fragment, {
                children: [t.jsx("div", {
                    className: "grow"
                }), t.jsx(ye, {})]
            }) : t.jsxs(F, {
                children: [t.jsx("div", {
                    className: "grow"
                }), t.jsx(ye, {})]
            })]
        })]
    })
}
const Us = ({className: s, children: e, ...a}) => {
    const o = k.useRef(null)
      , r = k.useCallback( () => {
        const n = o.current;
        n && (je(n, "data-scrolled-from-top", n.scrollTop > 0),
        je(n, "data-scrolled-from-end", n.scrollTop < n.scrollHeight - n.clientHeight - 1))
    }
    , []);
    return k.useEffect( () => {
        const n = o.current;
        if (!n)
            return;
        const i = new ResizeObserver(r);
        return i.observe(n),
        () => i.disconnect()
    }
    , [r]),
    t.jsx("nav", {
        className: M("group/scrollport", s),
        onScroll: r,
        ref: o,
        ...a,
        children: e
    })
}
;
function ye() {
    const [s] = k.useState( () => {
        const i = Qt.getCookie(Jt.Workspace);
        return typeof i == "string" && i !== Zt
    }
    )
      , e = qt()
      , a = L()
      , o = !he(a)
      , r = !$e()
      , n = me(a, "786015841").get("enabled", !1);
    return !n && s && !e || !n && !e ? null : o ? t.jsx(Je, {}) : t.jsxs("div", {
        className: "bg-token-bg-elevated-secondary sticky bottom-0 z-30 py-1.5 group-data-scrolled-from-end/scrollport:shadow-(--sharp-edge-bottom-shadow) empty:hidden",
        children: [t.jsxs(F, {
            children: [t.jsx(St, {}), !n && t.jsx(jt, {})]
        }), (r || n) && t.jsx(Qe, {})]
    })
}
const Je = () => {
    const s = Ae()
      , e = ge()
      , a = Ee(Z.unauthSignupCta)
      , o = () => {
        e({
            authType: "login",
            callback: l => {
                E.logLogInButtonClicked({
                    location: "Sidebar bottom unit",
                    provider: l
                }),
                Se.logEvent("chatgpt_sidebar_login_button_clicked")
            }
        })
    }
      , r = () => {
        e({
            authType: "signup",
            callback: l => {
                E.logSignUpButtonClicked({
                    location: "Sidebar bottom unit",
                    provider: l
                }),
                Se.logEvent("chatgpt_sidebar_signup_button_clicked")
            }
        })
    }
      , n = t.jsx(ie, {
        as: "button",
        size: "medium",
        color: s ? "secondary" : "primary",
        "data-testid": "signup-button",
        onClick: r,
        children: t.jsx(C, {
            ...a
        })
    }, "signup-button")
      , i = t.jsx(ie, {
        as: "button",
        size: "medium",
        color: s ? "primary" : "secondary",
        "data-testid": "login-button",
        onClick: o,
        children: t.jsx(C, {
            ...Z.unauthLoginCta
        })
    }, "login-button");
    return t.jsxs("div", {
        className: "bg-token-bg-elevated-secondary sticky bottom-0 z-30 p-2",
        children: [t.jsxs("div", {
            className: "mt-2 mb-4",
            children: [t.jsx("p", {
                className: "text-token-text-primary mb-1 text-sm font-semibold",
                children: t.jsx(C, {
                    ...s ? Z.logInOrSignUp : Z.signUpOrLogIn
                })
            }), t.jsx("p", {
                className: "text-token-text-secondary text-sm",
                children: t.jsx(C, {
                    id: "tr+zlt",
                    defaultMessage: "Get smarter responses, upload files and images, and save your conversations."
                })
            })]
        }), t.jsx("div", {
            className: "flex flex-row items-start gap-2",
            children: s ? [i, n] : [n, i]
        })]
    })
}
  , Z = tt({
    chatHistoryLabel: {
        id: "NavigationContent.chatHistoryLabel",
        defaultMessage: "Chat history"
    },
    signInToChat: {
        id: "NavigationContent.signInToChat",
        defaultMessage: "Sign in to ChatGPT"
    },
    signUpOrLogIn: {
        id: "NavigationContent.signUpOrLogIn",
        defaultMessage: "Sign up or log in"
    },
    logInOrSignUp: {
        id: "NavigationContent.logInOrSignUp",
        defaultMessage: "Log in or sign up for free"
    },
    unauthSignupCta: {
        id: "NavigationContent.unauthSignupCta",
        defaultMessage: "Sign up"
    },
    unauthLoginCta: {
        id: "NavigationContent.unauthLoginCta",
        defaultMessage: "Log in"
    }
})
  , Bs = () => {
    const s = ue();
    return t.jsxs("div", {
        className: "flex h-full flex-col gap-2 p-3",
        children: [t.jsx(Ps, {
            onNewThread: () => {
                vt(s)
            }
        }), t.jsx(Gs, {}), t.jsx("div", {
            className: "flex items-center justify-center",
            children: t.jsx(Je, {})
        })]
    })
}
  , Ze = "border border-token-border-xlight bg-token-sidebar-surface-secondary";
function G({className: s, width: e}) {
    return t.jsx("div", {
        className: M("h-2.5 grow rounded-sm", Ze, s),
        style: {
            maxWidth: e + "px"
        }
    })
}
function Gs() {
    const s = t.jsx("div", {
        className: M("h-4 w-4 shrink-0 grow-0 rounded-full", Ze)
    });
    return t.jsxs("div", {
        className: "mt-2 flex w-full grow flex-col gap-4 overflow-hidden px-2",
        style: {
            maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)"
        },
        children: [t.jsxs("div", {
            className: "flex flex-row items-center justify-start gap-3",
            children: [s, t.jsx(G, {
                width: 80
            })]
        }), t.jsxs("div", {
            className: "flex flex-row items-center justify-start gap-3",
            children: [s, t.jsx(G, {
                width: 120
            })]
        }), t.jsxs("div", {
            className: "flex flex-row items-center justify-start gap-3",
            children: [s, t.jsx(G, {
                width: 100
            })]
        }), t.jsx("div", {
            className: "mt-5 flex flex-row items-center justify-start gap-3",
            children: t.jsx(G, {
                width: 150
            })
        }), t.jsxs("div", {
            className: "flex flex-row items-center justify-start gap-3",
            children: [s, t.jsx(G, {
                width: 50
            })]
        }), t.jsxs("div", {
            className: "flex flex-row items-center justify-start gap-3",
            children: [s, t.jsx(G, {
                width: 100
            })]
        }), t.jsxs("div", {
            className: "mb-5 flex flex-row items-center justify-start gap-3",
            children: [s, t.jsx(G, {
                width: 80
            })]
        }), [120, 180, 160, 100, 90, 190, 140, 120, 180, 170, 100, 120, 180, 150].map( (e, a) => t.jsx("div", {
            className: "flex flex-row items-center justify-start py-1",
            children: t.jsx(G, {
                width: e
            })
        }, a))]
    })
}
function Ds(s) {
    "use forget";
    const e = y.c(57);
    let a, o, r;
    e[0] !== s ? ({onOpen: o, className: a, ...r} = s,
    e[0] = s,
    e[1] = a,
    e[2] = o,
    e[3] = r) : (a = e[1],
    o = e[2],
    r = e[3]);
    const n = ue()
      , i = q()
      , l = L();
    let m;
    e[4] !== l ? (m = me(l, "786015841").get("enabled", !1),
    e[4] = l,
    e[5] = m) : m = e[5];
    const p = m;
    let f;
    e[6] !== a ? (f = M("group/tiny-bar flex h-full w-(--sidebar-rail-width) cursor-e-resize flex-col items-start bg-transparent pb-1.5 motion-safe:transition-colors rtl:cursor-w-resize", a),
    e[6] = a,
    e[7] = f) : f = e[7];
    let d;
    e[8] !== o ? (d = U => {
        U.target === U.currentTarget && o()
    }
    ,
    e[8] = o,
    e[9] = d) : d = e[9];
    let u;
    e[10] !== i ? (u = i.formatMessage({
        id: "GpHrv5",
        defaultMessage: "Open sidebar"
    }),
    e[10] = i,
    e[11] = u) : u = e[11];
    let c;
    e[12] === Symbol.for("react.memo_cache_sentinel") ? (c = t.jsxs(t.Fragment, {
        children: [t.jsx(ze, {
            className: "icon-lg -m-1 group-hover/tiny-bar:hidden group-focus-visible:hidden"
        }), t.jsx(Pe, {
            className: "icon hidden group-hover/tiny-bar:block group-focus-visible:block"
        })]
    }),
    e[12] = c) : c = e[12];
    let g;
    e[13] !== i ? (g = i.formatMessage({
        id: "IaY18K",
        defaultMessage: "Open sidebar"
    }),
    e[13] = i,
    e[14] = g) : g = e[14];
    let S;
    e[15] !== o || e[16] !== g ? (S = t.jsx(es, {
        as: "button",
        className: "cursor-e-resize rtl:cursor-w-resize",
        icon: c,
        "aria-label": g,
        "aria-expanded": !1,
        "aria-controls": "stage-slideover-sidebar",
        iconOnly: !0,
        fillContainer: !0,
        onClick: o
    }),
    e[15] = o,
    e[16] = g,
    e[17] = S) : S = e[17];
    let h;
    e[18] !== u || e[19] !== S ? (h = t.jsx("div", {
        className: "h-header-height flex items-center justify-center",
        children: t.jsx(J, {
            label: u,
            side: "right",
            triggerAs: null,
            sideOffset: 14,
            children: S
        })
    }),
    e[18] = u,
    e[19] = S,
    e[20] = h) : h = e[20];
    let b;
    e[21] !== i ? (b = i.formatMessage({
        id: "6Abeg/",
        defaultMessage: "New chat"
    }),
    e[21] = i,
    e[22] = b) : b = e[22];
    let j;
    e[23] === Symbol.for("react.memo_cache_sentinel") ? (j = yt(!0),
    e[23] = j) : j = e[23];
    let x;
    e[24] !== n ? (x = t.jsx(wt, {
        iconOnly: !0,
        onNewThread: () => Nt(n)
    }),
    e[24] = n,
    e[25] = x) : x = e[25];
    let v;
    e[26] !== x || e[27] !== b ? (v = t.jsx(J, {
        label: b,
        secondaryLabel: j,
        side: "right",
        labelOrientation: "horizontal",
        triggerAs: "div",
        children: x
    }),
    e[26] = x,
    e[27] = b,
    e[28] = v) : v = e[28];
    let w;
    e[29] !== i ? (w = i.formatMessage({
        id: "VUMlGk",
        defaultMessage: "Search chats"
    }),
    e[29] = i,
    e[30] = w) : w = e[30];
    let N;
    e[31] === Symbol.for("react.memo_cache_sentinel") ? (N = Ct(!0),
    e[31] = N) : N = e[31];
    let T;
    e[32] === Symbol.for("react.memo_cache_sentinel") ? (T = t.jsx(Tt, {
        iconOnly: !0
    }),
    e[32] = T) : T = e[32];
    let P;
    e[33] !== w ? (P = t.jsx(J, {
        label: w,
        secondaryLabel: N,
        side: "right",
        labelOrientation: "horizontal",
        triggerAs: "div",
        children: T
    }),
    e[33] = w,
    e[34] = P) : P = e[34];
    let I;
    e[35] !== l || e[36] !== i ? (I = null,
    e[35] = l,
    e[36] = i,
    e[37] = I) : I = e[37];
    let B;
    e[38] !== i ? (B = i.formatMessage({
        id: "JBxuOc",
        defaultMessage: "Library"
    }),
    e[38] = i,
    e[39] = B) : B = e[39];
    let H;
    e[40] === Symbol.for("react.memo_cache_sentinel") ? (H = t.jsx(kt, {
        iconOnly: !0
    }),
    e[40] = H) : H = e[40];
    let z;
    e[41] !== B ? (z = t.jsx(J, {
        label: B,
        side: "right",
        triggerAs: "div",
        children: H
    }),
    e[41] = B,
    e[42] = z) : z = e[42];
    let _;
    e[43] !== v || e[44] !== P || e[45] !== I || e[46] !== z ? (_ = t.jsxs("div", {
        className: "mt-(--sidebar-section-first-margin-top)",
        children: [v, P, I, z]
    }),
    e[43] = v,
    e[44] = P,
    e[45] = I,
    e[46] = z,
    e[47] = _) : _ = e[47];
    let A;
    e[48] !== p ? (A = p && t.jsxs(t.Fragment, {
        children: [t.jsx("div", {
            className: "pointer-events-none flex-grow"
        }), t.jsx("div", {
            className: "mb-1",
            children: t.jsx(Qe, {})
        })]
    }),
    e[48] = p,
    e[49] = A) : A = e[49];
    let O;
    return e[50] !== r || e[51] !== f || e[52] !== _ || e[53] !== A || e[54] !== d || e[55] !== h ? (O = t.jsxs("div", {
        id: "stage-sidebar-tiny-bar",
        className: f,
        onClick: d,
        ...r,
        children: [h, _, A]
    }),
    e[50] = r,
    e[51] = f,
    e[52] = _,
    e[53] = A,
    e[54] = d,
    e[55] = h,
    e[56] = O) : O = e[56],
    O
}
function ho(s) {
    "use forget";
    const e = y.c(2)
      , {onNewChatButtonClick: a} = s
      , {isUnauthenticated: o, isLoading: r} = Ke();
    if (r || !o)
        return null;
    let n;
    return e[0] !== a ? (n = t.jsx(Ye, {
        className: "me-3",
        onClick: () => {
            E.logNewChatButtonClicked({
                location: "Mobile header"
            }),
            a()
        }
    }),
    e[0] = a,
    e[1] = n) : n = e[1],
    n
}
function mo(s) {
    "use forget";
    const e = y.c(9)
      , {onNewChatButtonClick: a, clientThreadId: o} = s
      , {isUnauthenticated: r, isLoading: n} = Ke()
      , i = Ae()
      , l = We(o)
      , m = ts(o, ns.getIsNewConversation)
      , p = ss()
      , f = m && p && !r && !l
      , d = L();
    let u;
    e[0] !== d ? (u = os(d, "2118136551").get("make_signup_sticky", !1),
    e[0] = d,
    e[1] = u) : u = e[1];
    const c = u;
    if (n)
        return null;
    if (r) {
        let b;
        return e[2] !== i || e[3] !== c ? (b = c ? t.jsxs("div", {
            className: "flex items-center justify-center gap-2",
            children: [t.jsx(we, {}), t.jsx(Ce, {})]
        }) : i ? t.jsx(we, {}) : t.jsx(Ce, {}),
        e[2] = i,
        e[3] = c,
        e[4] = b) : b = e[4],
        b
    }
    let g;
    e[5] !== a ? (g = t.jsx(Ye, {
        onClick: () => {
            E.logNewChatButtonClicked({
                location: "Mobile header"
            }),
            a()
        }
    }),
    e[5] = a,
    e[6] = g) : g = e[6];
    const S = g;
    if (!f)
        return S;
    let h;
    return e[7] !== o ? (h = t.jsx(Mt, {
        variant: "secondary",
        clientThreadId: o
    }),
    e[7] = o,
    e[8] = h) : h = e[8],
    h
}
function Ce() {
    "use forget";
    const s = y.c(8)
      , e = ge();
    let a;
    s[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
        id: "navigation.signUpButtonText",
        defaultMessage: "Sign up",
        description: "Button text for Sign up button"
    },
    s[0] = a) : a = s[0];
    const o = Ee(a);
    let r;
    s[1] !== e ? (r = () => {
        e({
            authType: "signup",
            callback: Rs
        })
    }
    ,
    s[1] = e,
    s[2] = r) : r = s[2];
    let n;
    s[3] !== o ? (n = t.jsx(C, {
        ...o
    }),
    s[3] = o,
    s[4] = n) : n = s[4];
    let i;
    return s[5] !== r || s[6] !== n ? (i = t.jsx(ie, {
        as: "button",
        size: "small",
        color: "primary",
        onClick: r,
        children: n
    }),
    s[5] = r,
    s[6] = n,
    s[7] = i) : i = s[7],
    i
}
function Rs(s) {
    E.logSignUpButtonClicked({
        location: "Mobile Chat Stage Header",
        provider: s
    })
}
function we() {
    "use forget";
    const s = y.c(5)
      , e = ge();
    let a;
    s[0] !== e ? (a = () => {
        e({
            authType: "login",
            callback: Fs
        })
    }
    ,
    s[0] = e,
    s[1] = a) : a = s[1];
    let o;
    s[2] === Symbol.for("react.memo_cache_sentinel") ? (o = t.jsx(C, {
        ...is.logInButtonText
    }),
    s[2] = o) : o = s[2];
    let r;
    return s[3] !== a ? (r = t.jsx(ie, {
        as: "button",
        size: "small",
        color: "primary",
        onClick: a,
        "data-testid": "mobile-login-button",
        children: o
    }),
    s[3] = a,
    s[4] = r) : r = s[4],
    r
}
function Fs(s) {
    E.logLogInButtonClicked({
        location: "Mobile Chat Stage Header",
        provider: s
    })
}
function Hs(s) {
    "use forget";
    const e = y.c(7)
      , {onClick: a} = s
      , o = js(Ot, _t, !1, !0)
      , r = re($s);
    let n;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = t.jsx("span", {
        className: "sr-only",
        children: t.jsx(C, {
            id: "navigation.openSidebar",
            defaultMessage: "Open sidebar"
        })
    }),
    e[0] = n) : n = e[0];
    let i;
    e[1] !== o ? (i = t.jsx(o, {
        className: "icon-lg text-token-text-secondary mx-2"
    }),
    e[1] = o,
    e[2] = i) : i = e[2];
    let l;
    return e[3] !== r || e[4] !== a || e[5] !== i ? (l = t.jsxs("button", {
        type: "button",
        className: "hover:text-token-text-primary touch:h-10 touch:w-10 inline-flex h-9 w-9 items-center justify-center rounded-md focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset active:opacity-50",
        onClick: a,
        "data-testid": "open-sidebar-button",
        "aria-expanded": r,
        "aria-controls": "stage-popover-sidebar",
        children: [n, i]
    }),
    e[3] = r,
    e[4] = a,
    e[5] = i,
    e[6] = l) : l = e[6],
    l
}
function $s(s) {
    return s.isPopoverSidebarOpen
}
const Ws = s => {
    "use forget";
    const e = y.c(21)
      , {rightContentExpanded: a, onOpenSidebar: o, children: r, showNavSidebar: n, leftContent: i, rightContent: l, bottomContent: m} = s
      , f = re(Ys) ? "[box-shadow:var(--sharp-edge-top-shadow)]" : "[box-shadow:var(--sharp-edge-top-shadow-placeholder)]";
    let d;
    e[0] !== f ? (d = M("draggable h-header-height bg-token-bg-primary sticky top-0 z-10 flex items-center justify-center border-transparent ps-0 md:hidden", f),
    e[0] = f,
    e[1] = d) : d = e[1];
    let u;
    e[2] !== i || e[3] !== o || e[4] !== n ? (u = (n || i) && t.jsxs("div", {
        className: "no-draggable absolute start-0 top-0 bottom-0 ms-2 inline-flex items-center justify-center",
        children: [n && t.jsx(Hs, {
            onClick: o
        }), i]
    }),
    e[2] = i,
    e[3] = o,
    e[4] = n,
    e[5] = u) : u = e[5];
    let c;
    e[6] !== r ? (c = t.jsx("div", {
        className: "no-draggable",
        children: r
    }),
    e[6] = r,
    e[7] = c) : c = e[7];
    let g;
    e[8] !== l || e[9] !== a ? (g = l && t.jsx("div", {
        className: M("no-draggable absolute end-0 top-0 bottom-0 me-2 inline-flex items-center justify-center", a && "start-10"),
        children: l
    }),
    e[8] = l,
    e[9] = a,
    e[10] = g) : g = e[10];
    let S;
    e[11] !== d || e[12] !== u || e[13] !== c || e[14] !== g ? (S = t.jsxs("div", {
        className: d,
        children: [u, c, g]
    }),
    e[11] = d,
    e[12] = u,
    e[13] = c,
    e[14] = g,
    e[15] = S) : S = e[15];
    let h;
    e[16] !== m ? (h = m && t.jsx("div", {
        className: "no-draggable bg-token-bg-primary flex w-full items-center justify-center md:hidden",
        children: m
    }),
    e[16] = m,
    e[17] = h) : h = e[17];
    let b;
    return e[18] !== S || e[19] !== h ? (b = t.jsxs(t.Fragment, {
        children: [S, h]
    }),
    e[18] = S,
    e[19] = h,
    e[20] = b) : b = e[20],
    b
}
;
function Ks(s) {
    "use forget";
    const e = y.c(4)
      , {isPopover: a, children: o, forceOpenDesktopSidebar: r} = s
      , n = a === void 0 ? !1 : a;
    D.markStart("StageNavigationSidebar"),
    D.markRendered("StageNavigationSidebar");
    let i;
    return e[0] !== o || e[1] !== r || e[2] !== n ? (i = n ? t.jsx(Xs, {
        children: o
    }) : t.jsx(Vs, {
        forceOpenDesktopSidebar: r,
        children: o
    }),
    e[0] = o,
    e[1] = r,
    e[2] = n,
    e[3] = i) : i = e[3],
    i
}
const qe = {
    type: "spring",
    bounce: .1,
    duration: .35
}
  , Ne = {
    ...qe,
    duration: .4
}
  , Vs = s => {
    "use forget";
    const e = y.c(23)
      , {style: a, children: o, forceOpenDesktopSidebar: r} = s;
    Ue(Qs),
    D.trackNamespace(D.NS_SIDEBAR);
    const n = as()
      , i = fe() || r
      , l = n ? It : qe
      , m = i ? "var(--sidebar-width)" : "var(--sidebar-rail-width)"
      , p = i ? "var(--bg-elevated-secondary)" : "var(--bg-primary)";
    let f;
    e[0] !== m || e[1] !== p ? (f = {
        width: m,
        backgroundColor: p
    },
    e[0] = m,
    e[1] = p,
    e[2] = f) : f = e[2];
    const d = i ? "pointer-events-none opacity-0" : "opacity-100"
      , u = i ? "motion-safe:[transition-timing-function:steps(1,end)]" : "motion-safe:[transition-timing-function:steps(1,start)]";
    let c;
    e[3] !== d || e[4] !== u ? (c = M("absolute inset-0", d, u, "motion-safe:transition-opacity motion-safe:duration-150"),
    e[3] = d,
    e[4] = u,
    e[5] = c) : c = e[5];
    let g;
    e[6] !== i || e[7] !== c ? (g = t.jsx(ne.Provider, {
        value: "tiny_bar",
        children: t.jsx(Ds, {
            className: c,
            inert: i,
            onOpen: Js
        })
    }),
    e[6] = i,
    e[7] = c,
    e[8] = g) : g = e[8];
    const S = i ? "opacity-100" : "pointer-events-none opacity-0";
    let h;
    e[9] !== S ? (h = M(S, "motion-safe:transition-opacity motion-safe:duration-150 motion-safe:ease-linear", "bg-token-bg-elevated-secondary h-full w-[var(--sidebar-width)] overflow-x-clip overflow-y-auto text-clip whitespace-nowrap"),
    e[9] = S,
    e[10] = h) : h = e[10];
    const b = !i;
    let j;
    e[11] !== o || e[12] !== h || e[13] !== b ? (j = t.jsx(ne.Provider, {
        value: "expanded_sidebar",
        children: t.jsx("div", {
            className: h,
            inert: b,
            children: o
        })
    }),
    e[11] = o,
    e[12] = h,
    e[13] = b,
    e[14] = j) : j = e[14];
    let x;
    e[15] !== j || e[16] !== g ? (x = t.jsxs("div", {
        className: "relative flex h-full flex-col",
        children: [g, j]
    }),
    e[15] = j,
    e[16] = g,
    e[17] = x) : x = e[17];
    let v;
    return e[18] !== a || e[19] !== l || e[20] !== x || e[21] !== f ? (v = t.jsx(de.div, {
        className: "border-token-border-light z-21 h-full shrink-0 overflow-hidden border-e max-md:hidden",
        transition: l,
        initial: !1,
        animate: f,
        style: a,
        id: "stage-slideover-sidebar",
        children: x
    }),
    e[18] = a,
    e[19] = l,
    e[20] = x,
    e[21] = f,
    e[22] = v) : v = e[22],
    v
}
  , Xs = s => {
    "use forget";
    const e = y.c(11)
      , {children: a} = s;
    Ue(Zs);
    const o = re(qs);
    let r;
    e[0] !== o ? (r = o && t.jsx(rs, {
        asChild: !0,
        children: t.jsx(de.div, {
            className: "fixed inset-0 z-10 bg-gray-50/50 dark:bg-black/50",
            transition: Ne,
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0,
                transition: {
                    duration: .12
                }
            }
        })
    }),
    e[0] = o,
    e[1] = r) : r = e[1];
    let n;
    e[2] !== a || e[3] !== o ? (n = o && t.jsx(ls, {
        asChild: !0,
        onOpenAutoFocus: to,
        children: t.jsxs(de.div, {
            className: "bg-token-sidebar-surface-primary top-banner-visible:bottom-0 top-banner-visible:top-(--top-banner-height,0px) top-banner-visible:h-auto fixed start-0 top-0 z-50 h-full w-[var(--sidebar-width)] max-w-xs border-e border-gray-200 shadow-[0_0_64px_0_rgba(0,0,0,0.07)] [view-transition-name:var(--sidebar-popover)] focus:outline-hidden dark:border-gray-800",
            transition: Ne,
            id: "stage-popover-sidebar",
            initial: {
                translateX: "-100%"
            },
            animate: {
                translateX: "0"
            },
            exit: {
                translateX: "-100%",
                transition: {
                    duration: .12
                }
            },
            children: [t.jsx(cs, {
                asChild: !0,
                children: t.jsxs(ds, {
                    children: [t.jsx(C, {
                        id: "navigation.sidebarTitle",
                        defaultMessage: "Sidebar"
                    }), t.jsx(us, {})]
                })
            }), t.jsx(ne.Provider, {
                value: "popover",
                children: a
            })]
        })
    }),
    e[2] = a,
    e[3] = o,
    e[4] = n) : n = e[4];
    let i;
    e[5] !== r || e[6] !== n ? (i = t.jsx(fs, {
        forceMount: !0,
        children: t.jsxs(Te, {
            children: [r, n]
        })
    }),
    e[5] = r,
    e[6] = n,
    e[7] = i) : i = e[7];
    let l;
    return e[8] !== o || e[9] !== i ? (l = t.jsx(gs, {
        open: o,
        onOpenChange: eo,
        children: i
    }),
    e[8] = o,
    e[9] = i,
    e[10] = l) : l = e[10],
    l
}
;
function Ys(s) {
    return s.isConversationScrolledFromTop
}
function Qs() {
    Ve.count(Xe.DEFAULT, "chatgpt_sidebar_show", {
        key: "type",
        value: "slideover"
    }),
    E.logEvent("Sidebar Show", {
        type: "slideover"
    })
}
function Js() {
    return ae.setSidebarOpen(!0)
}
function Zs() {
    Ve.count(Xe.DEFAULT, "chatgpt_sidebar_show", {
        key: "type",
        value: "popover"
    }),
    E.logEvent("Sidebar Show", {
        type: "popover"
    })
}
function qs(s) {
    return s.isPopoverSidebarOpen
}
function eo(s) {
    ae.setPopoverSidebarOpen(s)
}
function to(s) {
    s.preventDefault()
}
function et(s) {
    "use forget";
    const e = y.c(44)
      , {children: a, hideNavigation: o, mobileHeaderContent: r, mobileHeaderRightContentExpanded: n, mobileHeaderLeftContent: i, mobileHeaderRightContent: l, mobileHeaderBottomContent: m, kaur1br5HeaderContent: p, renderNavSidebar: f, threadFlyout: d, forceOpenDesktopSidebar: u} = s
      , c = o === void 0 ? !1 : o
      , g = u === void 0 ? !1 : u
      , S = L()
      , h = !he(S)
      , b = re(oo)
      , j = hs()
      , x = Lt()
      , v = ms();
    let w, N;
    e[0] !== a ? (w = [],
    N = null,
    xe.Children.forEach(a, se => {
        xe.isValidElement(se) && (se.type === et.Sidebars ? N = se : w.push(se))
    }
    ),
    e[0] = a,
    e[1] = w,
    e[2] = N) : (w = e[1],
    N = e[2]);
    const T = !h && !c && f != null
      , P = !c && (T || h) && !0;
    let I;
    e[3] !== v ? (I = v ? ve(v, "summarizer") : !1,
    e[3] = v,
    e[4] = I) : I = e[4];
    const B = I
      , H = v ? !ve(v, "summarizer") : !1
      , z = j && (B || H);
    let _;
    e[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = t.jsx(F, {
        children: t.jsx(Pt, {})
    }),
    e[5] = _) : _ = e[5];
    const A = b !== "popover-nav" && "z-0";
    let O;
    e[6] !== A ? (O = M("relative flex h-full w-full flex-1 transition-colors", A),
    e[6] = A,
    e[7] = O) : O = e[7];
    let U;
    e[8] !== g || e[9] !== x || e[10] !== h || e[11] !== f || e[12] !== T ? (U = T && t.jsx(Ks, {
        isPopover: x,
        forceOpenDesktopSidebar: g,
        children: h ? t.jsx(Bs, {}) : f?.()
    }),
    e[8] = g,
    e[9] = x,
    e[10] = h,
    e[11] = f,
    e[12] = T,
    e[13] = U) : U = e[13];
    let $;
    e[14] !== U ? ($ = t.jsx(Te, {
        initial: !1,
        children: U
    }),
    e[14] = U,
    e[15] = $) : $ = e[15];
    let W;
    e[16] !== m || e[17] !== r || e[18] !== n || e[19] !== i || e[20] !== l || e[21] !== P || e[22] !== T ? (W = P && t.jsxs(F, {
        children: [t.jsx(zt, {}), t.jsx(Ws, {
            rightContentExpanded: n,
            onOpenSidebar: so,
            showNavSidebar: T,
            leftContent: i,
            rightContent: l,
            bottomContent: m,
            children: r
        })]
    }),
    e[16] = m,
    e[17] = r,
    e[18] = n,
    e[19] = i,
    e[20] = l,
    e[21] = P,
    e[22] = T,
    e[23] = W) : W = e[23];
    let K;
    e[24] !== w ? (K = t.jsx("main", {
        className: "transition-width relative h-full w-full flex-1 overflow-auto",
        id: "main",
        "z-index": "-1",
        children: w
    }),
    e[24] = w,
    e[25] = K) : K = e[25];
    let V;
    e[26] !== p || e[27] !== K || e[28] !== W ? (V = t.jsxs("div", {
        className: "relative flex h-full max-w-full flex-1 flex-col",
        children: [p, W, K]
    }),
    e[26] = p,
    e[27] = K,
    e[28] = W,
    e[29] = V) : V = e[29];
    let X;
    e[30] !== V || e[31] !== $ ? (X = t.jsxs("div", {
        className: "relative flex h-full w-full flex-row",
        children: [$, V]
    }),
    e[30] = V,
    e[31] = $,
    e[32] = X) : X = e[32];
    let Y;
    e[33] !== z || e[34] !== d ? (Y = t.jsx(F, {
        children: t.jsx(At, {
            isExpanded: z,
            children: d
        })
    }),
    e[33] = z,
    e[34] = d,
    e[35] = Y) : Y = e[35];
    let Q;
    e[36] !== N || e[37] !== X || e[38] !== Y || e[39] !== O ? (Q = t.jsxs("div", {
        className: O,
        children: [X, Y, N]
    }),
    e[36] = N,
    e[37] = X,
    e[38] = Y,
    e[39] = O,
    e[40] = Q) : Q = e[40];
    let ee;
    e[41] === Symbol.for("react.memo_cache_sentinel") ? (ee = t.jsxs(F, {
        children: [t.jsx(Et, {}), t.jsx(Ut, {
            useManuallyControlledVisibility: !0
        })]
    }),
    e[41] = ee) : ee = e[41];
    let te;
    return e[42] !== Q ? (te = t.jsxs("div", {
        className: "flex h-full w-full flex-col",
        children: [_, Q, ee]
    }),
    e[42] = Q,
    e[43] = te) : te = e[43],
    te
}
function so() {
    return ae.setSidebarOpen(!0)
}
function oo(s) {
    return s.activeSidebar
}
function no(s) {
    "use forget";
    const e = y.c(2)
      , {children: a} = s;
    let o;
    return e[0] !== a ? (o = t.jsx(t.Fragment, {
        children: a
    }),
    e[0] = a,
    e[1] = o) : o = e[1],
    o
}
et.Sidebars = no;
export {fo as C, go as N, Ls as S, Ps as a, et as b, ho as c, mo as d};
//# sourceMappingURL=icu9d2zdwlcy45kn.js.map
