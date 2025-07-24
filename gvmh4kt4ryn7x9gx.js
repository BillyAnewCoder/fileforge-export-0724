import {j as s, r as p, M as x, f as ue, L as je, X as Ke, m as Ve, e as ge, u as qe, c as J, h as oe, v as Ne, am as Ye} from "./juy90og0wtbp77qa.js";
import {B as V, P as T, e as se, f as de, ar as L, cz as Xe, aC as Re, dG as fe, hJ as Ge, aF as me, en as Je, cF as Ze, a5 as be, aG as Me, be as es, cs as K, L as ss, b as ts, a7 as Te, lq as rs, ac as os, hp as as, j1 as is, fQ as Le, iN as ns, iO as ls, kt as cs} from "./dc2xxjkicf2pz0mj.js";
import {l1 as ds, ag as Ee, d9 as ms, l2 as us, M as Ae, l3 as gs, l4 as fs, l5 as hs, bz as X, l6 as ps, jr as xe, ap as te, ec as xs, ea as ke, e9 as Se, a6 as ys, dQ as vs, aC as Z, l7 as js, iN as we, hX as bs, e4 as ks, eF as Ss, e7 as ws, fN as _e, l8 as Ns, l9 as zs, hf as De, la as Cs, lb as Ps, lc as Rs, ld as Gs, hg as Ms, d6 as Ts, jP as Ls, dO as ce, le as ze, bB as Oe, S as Y, cW as Es} from "./ckp56qklot786ulr.js";
import {N as As} from "./g8shiwm7jpd74xmd.js";
import {P as _s} from "./iiyyoj0wgh5vo89i.js";
import {d as Ds, G as We, a as Ie} from "./btouzu0b6h5eiejj.js";
import {G as Os} from "./oednpha5s5kodcso.js";
import {G as Ws} from "./debx62351e4myexq.js";
function Is({href: t, children: e, onClickTrackingEventName: r, onClick: a}) {
    function o() {
        r && T.logEvent(r),
        a?.()
    }
    return t ? s.jsx(V, {
        as: "link",
        to: t,
        onClick: o,
        size: "large",
        children: e
    }) : s.jsx(V, {
        onClick: o,
        size: "large",
        children: e
    })
}
function Tt({gizmo: t}) {
    const e = ds(t)
      , [r,a] = p.useState(!1)
      , o = se()
      , i = de(o, "1855896025")
      , c = Ee();
    return s.jsxs("div", {
        className: "flex h-full flex-col",
        children: [s.jsx(ye, {
            redirectUrl: e
        }), s.jsxs("div", {
            className: "flex grow flex-col items-center justify-center p-2",
            children: [s.jsx(Ds, {
                gizmo: t,
                isAnon: !0,
                children: s.jsxs("div", {
                    className: "mt-7 flex flex-col items-center gap-4",
                    children: [s.jsx(Is, {
                        onClick: () => c({
                            callbackUrl: e
                        }),
                        children: s.jsx(x, {
                            id: "gizmo.anonLandingPage.login",
                            defaultMessage: "Sign up to chat"
                        })
                    }), s.jsxs("div", {
                        className: "text-token-text-tertiary flex gap-2 text-sm whitespace-nowrap",
                        children: [s.jsx("div", {
                            children: s.jsx(x, {
                                id: "gizmo.anonLandingPage.loginSubtext",
                                defaultMessage: "Sign up or Log in to chat"
                            })
                        }), i && s.jsxs(s.Fragment, {
                            children: ["|", s.jsx("div", {
                                onClick: () => a(!0),
                                className: "cursor-pointer",
                                children: s.jsx(x, {
                                    id: "gizmo.anonLandingPage.report",
                                    defaultMessage: "Report illegal content"
                                })
                            })]
                        })]
                    })]
                })
            }), r && s.jsx(Os, {
                onClose: () => a(!1),
                gizmoId: t.gizmo.id
            })]
        })]
    })
}
function ye({redirectUrl: t, className: e}) {
    const r = Ee()
      , a = ms(Fs.signUpCta);
    return s.jsxs("div", {
        className: L("flex items-center justify-between px-7 py-4", e),
        children: [s.jsx(Us, {}), s.jsx(V, {
            color: "primary",
            onClick: () => r({
                callbackUrl: t
            }),
            children: s.jsx(x, {
                ...a
            })
        })]
    })
}
function Us() {
    return s.jsx(je, {
        to: "/",
        children: s.jsx(Xe, {
            className: "h-8 w-8"
        })
    })
}
const Fs = ue({
    signUpCta: {
        id: "gizmo.anonLandingPage.signup",
        defaultMessage: "Sign up"
    }
});
let ee = null;
function Bs() {
    return ee || (ee = document.createElement("div"),
    ee.setAttribute("portal-container", ""),
    document.body.append(ee)),
    ee || null
}
function Hs(t) {
    const {children: e} = t
      , r = Bs();
    return r && Ke.createPortal(e, r)
}
function re({delay: t, animateTap: e=!0, children: r}) {
    return s.jsx(Ve.div, {
        whileTap: {
            scale: e ? .98 : void 0
        },
        initial: {
            opacity: 0,
            translateY: 5
        },
        animate: {
            opacity: 1,
            translateY: 0,
            transition: {
                duration: .3,
                ease: "easeIn",
                delay: t ?? 0
            }
        },
        children: r
    })
}
var Qs = (t => (t.Enabled = "enabled",
t.ComingSoon = "coming-soon",
t))(Qs || {});
function $s({gizmoResource: t}) {
    const e = t.gizmo.vanity_metrics?.num_conversations_str
      , r = t.gizmo.share_recipient ?? Z.Private
      , a = js(r);
    return s.jsxs("div", {
        children: [t.gizmo.share_recipient !== Z.Private && e != null ? s.jsxs("div", {
            className: "flex items-center gap-1",
            children: [s.jsx(we, {
                className: "icon-sm"
            }), s.jsx("span", {
                children: s.jsx(x, {
                    ...qs.conversationCountStrLabel,
                    values: {
                        numConvos: e
                    }
                })
            })]
        }) : void 0, s.jsxs("div", {
            className: "flex items-center gap-1",
            children: [r === Z.Link || r === Z.Marketplace ? s.jsx(bs, {
                className: "icon-sm shrink-0"
            }) : r === Z.Workspace ? s.jsx(ks, {
                className: "icon-sm shrink-0"
            }) : s.jsx(Ze, {
                className: "icon-sm shrink-0"
            }), s.jsx("span", {
                className: "line-clamp-1",
                children: a
            })]
        })]
    })
}
function Lt({gizmoResource: t, canRemoveRecent: e}) {
    const r = se()
      , a = ge()
      , {canEdit: o} = gs(t)
      , {canDelete: i} = fs(t)
      , c = hs(t)
      , l = !!t.gizmo.tags?.includes(X.FirstParty);
    return s.jsx(Ue, {
        href: c ? xe(t.gizmo.id) : te(r, t),
        icon: s.jsx(Se, {
            isFirstParty: l,
            src: t?.gizmo.display.profile_picture_url ?? void 0,
            className: "h-[42px] w-[42px] shrink-0"
        }),
        title: t.gizmo.display.name || ps,
        isDraft: c,
        description: t.gizmo.display.description ?? "",
        byline: o ? s.jsx($s, {
            gizmoResource: t
        }) : s.jsx(ke, {
            gizmo: t
        }),
        buttons: s.jsxs(s.Fragment, {
            children: [o && s.jsx(fe, {
                label: s.jsx(x, {
                    id: "gizmo.gpt.grid.EditGPT",
                    defaultMessage: "Edit GPT"
                }),
                className: "flex justify-center",
                side: "top",
                children: s.jsx("button", {
                    className: "text-token-text-primary rounded-lg px-3 py-2 transition-transform duration-100 ease-in hover:bg-white active:scale-[0.9] dark:bg-transparent dark:hover:bg-gray-700",
                    onClick: () => {
                        a(xe(t.gizmo.id))
                    }
                    ,
                    children: s.jsx(xs, {
                        className: "icon-sm"
                    })
                })
            }), s.jsx(Vs, {
                gizmoResource: t,
                canDelete: i,
                canRemoveRecent: e
            })]
        })
    })
}
const Ks = Re.div`flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-dashed
${ ({$disabled: t}) => t ? "" : "border-token-border-default bg-token-main-surface-secondary"}`;
function Et({type: t}) {
    const e = us()
      , r = t === "coming-soon";
    return s.jsxs(fe, {
        disabled: !r,
        label: s.jsx(x, {
            id: "gizmo.gpt.grid.CreateGPTComingSoon",
            defaultMessage: "GPT creation will be available in the coming weeks"
        }),
        triggerAs: null,
        children: [s.jsx(Ue, {
            href: e,
            disabled: r,
            icon: s.jsx(Ks, {
                $disabled: r,
                children: s.jsx(Ae, {
                    className: L("icon-sm", r && "opacity-30")
                })
            }),
            title: s.jsx("div", {
                className: "flex items-center gap-1",
                children: s.jsx(x, {
                    id: "gizmo.gpt.grid.CreateGPT",
                    defaultMessage: "Create a GPT"
                })
            }),
            description: "Customize a version of ChatGPT for a specific purpose",
            byline: r ? s.jsx("div", {
                className: "flex items-center justify-end",
                children: s.jsx("div", {
                    className: "flex items-center",
                    children: s.jsx(x, {
                        id: "gizmo.gpt.grid.ComingSoon",
                        defaultMessage: "Coming soon"
                    })
                })
            }) : void 0
        }), s.jsx("div", {
            className: "h-px bg-gray-100 dark:bg-gray-700"
        })]
    })
}
function Ue({href: t, icon: e, title: r, isDraft: a=!1, description: o, byline: i, buttons: c, disabled: l, className: f}) {
    const g = L("flex items-center px-2 py-4 rounded-xl", l ? "" : "hover:bg-token-main-surface-secondary", f)
      , y = s.jsxs(s.Fragment, {
        children: [s.jsxs("div", {
            className: "flex grow items-center overflow-hidden md:w-3/5 md:grow-0",
            children: [e, s.jsxs("div", {
                className: L("grow overflow-hidden ps-4 pe-9 leading-tight", l ? "opacity-50" : "hover:cursor-pointer"),
                children: [s.jsxs("div", {
                    className: "flex items-center gap-1",
                    children: [s.jsx("span", {
                        className: "font-semibold",
                        children: r
                    }), a && s.jsx(fe, {
                        label: s.jsx(x, {
                            id: "gizmo.gpt.grid.Draft",
                            defaultMessage: "Draft"
                        }),
                        className: "flex justify-center",
                        side: "top",
                        children: s.jsx("div", {
                            className: "m-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gray-200 dark:bg-gray-600"
                        })
                    })]
                }), s.jsx("div", {
                    className: "line-clamp-2 overflow-hidden text-sm break-words text-ellipsis",
                    children: o
                }), i != null && s.jsx("div", {
                    className: "text-token-text-tertiary text-sm text-ellipsis md:hidden",
                    children: i
                })]
            })]
        }), i != null && s.jsx("div", {
            className: "text-token-text-tertiary hidden flex-1 text-sm text-ellipsis md:block",
            children: i
        }), c != null && s.jsx("div", {
            onClick: v => {
                v.preventDefault()
            }
            ,
            onPointerDownCapture: v => {
                v.stopPropagation()
            }
            ,
            className: "flex h-9 shrink-0 justify-end gap-2 font-semibold md:w-[100px]",
            children: c
        })]
    });
    return l ? s.jsx(re, {
        children: s.jsx("span", {
            className: g,
            children: y
        })
    }) : s.jsx(re, {
        children: s.jsx(je, {
            className: g,
            to: t,
            children: y
        })
    })
}
function Vs({gizmoResource: t, canDelete: e, canRemoveRecent: r}) {
    const [a,o] = p.useState(!1)
      , [i,c] = p.useState(!1)
      , l = qe();
    return !e && !r ? null : s.jsxs(s.Fragment, {
        children: [s.jsxs(Ge, {
            side: "top",
            contentAlign: "end",
            sideOffset: 8,
            open: i,
            onOpenChange: f => c(f),
            triggerButton: s.jsx("button", {
                color: "secondary",
                className: "text-token-text-primary rounded-lg bg-transparent px-3 py-2 duration-100 ease-in hover:bg-white active:scale-[0.9] dark:bg-transparent dark:hover:bg-gray-700",
                onClick: () => {
                    c(f => !f)
                }
                ,
                children: s.jsx(Je, {
                    className: "icon"
                })
            }),
            children: [e && s.jsx(me.Item, {
                color: "danger",
                onClick: () => {
                    o(!0)
                }
                ,
                icon: ys,
                children: s.jsx(x, {
                    id: "gizmo.gpt.grid.DeleteGPT",
                    defaultMessage: "Delete GPT"
                })
            }), r && s.jsx(me.Item, {
                onClick: () => {
                    vs.removeFromRecent(l, t.gizmo.id)
                }
                ,
                children: s.jsx(x, {
                    id: "gizmo.gpt.grid.RemoveFromRecent",
                    defaultMessage: "Remove from Recent"
                })
            })]
        }), a && s.jsx(Hs, {
            children: s.jsx(Ws, {
                gizmoId: t.gizmo.id,
                onSuccess: () => {
                    o(!1)
                }
                ,
                onClose: () => {
                    o(!1)
                }
            })
        })]
    })
}
const qs = ue({
    conversationCountStrLabel: {
        id: "gizmo.gpt.grid.conversationCountStrLabel",
        defaultMessage: "{numConvos} Chats"
    }
});
function Fe({gizmo: t, children: e, onClick: r, onModalOpen: a, onModalClose: o, selectOnly: i, className: c}) {
    const l = se()
      , f = de(l, "1825130190")
      , [g,y] = p.useState(!1);
    return i ? s.jsx("a", {
        className: L("gizmo-link cursor-pointer", c),
        href: "#",
        onClick: v => {
            v.preventDefault(),
            r?.(v)
        }
        ,
        children: e
    }) : f ? s.jsxs(s.Fragment, {
        children: [g && s.jsx(We, {
            gizmoId: t.gizmo.id,
            creatorId: t.gizmo.author.user_id,
            onClose: () => {
                y(!1),
                o?.()
            }
            ,
            children: s.jsx(Ie, {
                as: "link",
                to: te(l, t)
            })
        }), s.jsx("a", {
            className: L("gizmo-link cursor-pointer", c),
            href: "#",
            onClick: v => {
                v.preventDefault(),
                r?.(v),
                y(!0),
                a?.()
            }
            ,
            children: e
        })]
    }) : s.jsx(je, {
        to: te(l, t),
        className: L("gizmo-link", c),
        target: "_blank",
        onClick: r,
        children: e
    })
}
function Ys(t) {
    "use forget";
    const e = J.c(28)
      , {placeholder: r, effectiveRole: a, onSelect: o, popoverClassName: i} = t
      , c = oe()
      , [l,f] = p.useState("ALL")
      , [g,y] = p.useState("")
      , [v,j] = p.useState("")
      , [n,h] = p.useState(null)
      , b = be()?.isWorkspaceAccount()
      , N = se();
    let m;
    e[0] !== N ? (m = de(N, "3054422710"),
    e[0] = N,
    e[1] = m) : m = e[1];
    const w = b !== void 0 && b && m;
    let z, u;
    e[2] !== g ? (z = () => {
        const G = setTimeout( () => {
            j(g)
        }
        , 250);
        return () => {
            clearTimeout(G)
        }
    }
    ,
    u = [g],
    e[2] = g,
    e[3] = z,
    e[4] = u) : (z = e[3],
    u = e[4]),
    p.useEffect(z, u);
    const k = se()
      , C = ge();
    let F;
    e[5] !== o || e[6] !== C || e[7] !== k ? (F = G => {
        if (o) {
            o(G);
            return
        }
        if (!de(k, "1825130190")) {
            const q = te(k, G);
            C(q);
            return
        }
        h(G)
    }
    ,
    e[5] = o,
    e[6] = C,
    e[7] = k,
    e[8] = F) : F = e[8];
    const _ = F;
    let D;
    e[9] === Symbol.for("react.memo_cache_sentinel") ? (D = s.jsx(Ss, {
        className: "text-token-text-tertiary icon absolute start-5 top-1/2 z-30 -translate-y-1/2"
    }),
    e[9] = D) : D = e[9];
    let O;
    e[10] !== c || e[11] !== r || e[12] !== i || e[13] !== g ? (O = (G, E) => s.jsxs(ws, {
        label: r ?? c.formatMessage(U.discoverySearch),
        inputClassName: "bg-token-main-surface-primary! py-4 px-3 rounded-xl font-normal text-base! ps-12",
        popoverClassName: L("-top-3! border-token-border-default! rounded-xl", i ?? "bg-token-main-surface-primary!"),
        className: "border-token-border-default! rounded-xl! p-0! ring-0!",
        name: "search",
        inputValue: g,
        onInputChange: y,
        onTabChange: q => f(q === "WORKSPACE" ? "WORKSPACE" : "ALL"),
        suggestions: G,
        RenderTab: Js,
        children: [E, E == null && s.jsx("div", {
            className: "w-full py-4",
            children: s.jsx(Zs, {})
        })]
    }),
    e[10] = c,
    e[11] = r,
    e[12] = i,
    e[13] = g,
    e[14] = O) : O = e[14];
    let P;
    e[15] !== l || e[16] !== v || e[17] !== a || e[18] !== _ || e[19] !== w || e[20] !== O ? (P = s.jsx(et, {
        activeTab: l,
        query: v,
        effectiveRole: a,
        setPopoverForceOpen: Xs,
        onSelect: _,
        showWorkspaceResults: w,
        renderCombobox: O
    }),
    e[15] = l,
    e[16] = v,
    e[17] = a,
    e[18] = _,
    e[19] = w,
    e[20] = O,
    e[21] = P) : P = e[21];
    let B;
    e[22] !== n || e[23] !== k ? (B = n && s.jsx(We, {
        gizmoId: n.gizmo.id,
        creatorId: n.gizmo.author.user_id,
        onClose: () => {
            h(null)
        }
        ,
        children: s.jsx(Ie, {
            as: "link",
            to: te(k, n)
        })
    }),
    e[22] = n,
    e[23] = k,
    e[24] = B) : B = e[24];
    let W;
    return e[25] !== P || e[26] !== B ? (W = s.jsxs("div", {
        className: "relative z-0",
        children: [D, P, B]
    }),
    e[25] = P,
    e[26] = B,
    e[27] = W) : W = e[27],
    W
}
function Xs() {}
function Js(t) {
    "use forget";
    const e = J.c(4)
      , {tab: r} = t
      , a = _e();
    if (r === "ALL") {
        let o;
        return e[0] === Symbol.for("react.memo_cache_sentinel") ? (o = s.jsx(x, {
            ...U.discoveryAllResultsHeader
        }),
        e[0] = o) : o = e[0],
        o
    }
    if (r === "WORKSPACE") {
        let o;
        return e[1] !== a ? (o = s.jsx(x, {
            ...U.discoveryWorkspaceResultsHeader,
            values: {
                workspaceName: a
            }
        }),
        e[1] = a,
        e[2] = o) : o = e[2],
        o
    }
    if (r === "discoverySearchRecentlyUsed") {
        let o;
        return e[3] === Symbol.for("react.memo_cache_sentinel") ? (o = s.jsx(x, {
            ...U.discoverySearchRecentlyUsed
        }),
        e[3] = o) : o = e[3],
        o
    }
    return r
}
function Zs() {
    return s.jsx("div", {
        className: "flex items-center justify-center py-1",
        children: s.jsx(Me, {})
    })
}
function et(t) {
    "use forget";
    const e = J.c(20)
      , {activeTab: r, query: a, effectiveRole: o, setPopoverForceOpen: i, showWorkspaceResults: c, onSelect: l, renderCombobox: f} = t;
    let g;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (g = [],
    e[0] = g) : g = e[0],
    p.useEffect(rt, g);
    const {data: y, isLoading: v} = Ns(a)
      , {data: j, isLoading: n} = zs(a, c);
    let h;
    e[1] === Symbol.for("react.memo_cache_sentinel") ? (h = {
        cutId: "recent",
        limit: 3
    },
    e[1] = h) : h = e[1];
    const {data: b, isLoading: N} = De(h)
      , m = y?.items
      , M = y?.cursor
      , w = j?.items
      , z = j?.cursor;
    let u;
    e[2] !== b?.pages ? (u = b?.pages.flatMap(st) ?? [],
    e[2] = b?.pages,
    e[3] = u) : u = e[3];
    let k;
    return e[4] !== r || e[5] !== o || e[6] !== N || e[7] !== v || e[8] !== n || e[9] !== l || e[10] !== a || e[11] !== f || e[12] !== i || e[13] !== c || e[14] !== m || e[15] !== M || e[16] !== w || e[17] !== z || e[18] !== u ? (k = s.jsx(ot, {
        debouncedQuery: a,
        searchResults: m,
        isLoadingSearch: v,
        searchResultsCursor: M,
        showWorkspaceResults: c,
        workspaceSearchResults: w,
        workspaceSearchResultsCursor: z,
        isLoadingWorkspaceSearch: n,
        isLoadingRecent: N,
        recent: u,
        effectiveRole: o,
        setPopoverForceOpen: i,
        onSelect: l,
        activeTab: r,
        renderCombobox: f
    }),
    e[4] = r,
    e[5] = o,
    e[6] = N,
    e[7] = v,
    e[8] = n,
    e[9] = l,
    e[10] = a,
    e[11] = f,
    e[12] = i,
    e[13] = c,
    e[14] = m,
    e[15] = M,
    e[16] = w,
    e[17] = z,
    e[18] = u,
    e[19] = k) : k = e[19],
    k
}
function st(t) {
    return t.list.items.map(tt)
}
function tt(t) {
    return t.resource
}
function rt() {
    T.logEvent("Search Start")
}
function ot(t) {
    "use forget";
    const e = J.c(25)
      , {activeTab: r, debouncedQuery: a, searchResults: o, isLoadingSearch: i, searchResultsCursor: c, showWorkspaceResults: l, workspaceSearchResults: f, workspaceSearchResultsCursor: g, isLoadingWorkspaceSearch: y, recent: v, isLoadingRecent: j, effectiveRole: n, setPopoverForceOpen: h, onSelect: b, renderCombobox: N} = t;
    let m;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (m = Ne(),
    e[0] = m) : m = e[0];
    const M = p.useRef(m);
    let w;
    e[1] === Symbol.for("react.memo_cache_sentinel") ? (w = [],
    e[1] = w) : w = e[1],
    p.useEffect(at, w);
    let z, u;
    e[2] !== a || e[3] !== i || e[4] !== o ? (z = () => {
        !i && o && (M.current = Ne(),
        o.length > 0 ? Promise.all(o.map( (F, _) => {
            T.logEvent("Search Display Result", {
                search_id: M.current,
                gizmo_id: F.gizmo.id,
                position: _,
                query: a
            })
        }
        )) : T.logEvent("Search No Results", {
            query: a
        }))
    }
    ,
    u = [o, i, a],
    e[2] = a,
    e[3] = i,
    e[4] = o,
    e[5] = z,
    e[6] = u) : (z = e[5],
    u = e[6]),
    p.useEffect(z, u);
    let k;
    e[7] !== v ? (k = v ?? [],
    e[7] = v,
    e[8] = k) : k = e[8];
    let C;
    return e[9] !== r || e[10] !== a || e[11] !== n || e[12] !== j || e[13] !== i || e[14] !== y || e[15] !== b || e[16] !== N || e[17] !== o || e[18] !== c || e[19] !== h || e[20] !== l || e[21] !== k || e[22] !== f || e[23] !== g ? (C = s.jsx(it, {
        query: a,
        activeTab: r,
        searchIdRef: M,
        searchResults: o,
        searchResultsCursor: c,
        isLoadingSearch: i,
        showWorkspaceResults: l,
        workspaceSearchResults: f,
        workspaceSearchResultsCursor: g,
        isLoadingWorkspaceSearch: y,
        isLoadingRecent: j,
        recentSearchResults: k,
        setPopoverForceOpen: h,
        effectiveRole: n,
        onSelect: b,
        renderCombobox: N
    }),
    e[9] = r,
    e[10] = a,
    e[11] = n,
    e[12] = j,
    e[13] = i,
    e[14] = y,
    e[15] = b,
    e[16] = N,
    e[17] = o,
    e[18] = c,
    e[19] = h,
    e[20] = l,
    e[21] = k,
    e[22] = f,
    e[23] = g,
    e[24] = C) : C = e[24],
    C
}
function at() {
    T.logEvent("Search Start")
}
function pe(t) {
    "use forget";
    const e = J.c(6)
      , {children: r, onClick: a, isSelected: o, isClickable: i} = t
      , c = `text-token-text-tertiary px-3 pb-2 text-xs ${o ? "border-b-2 font-bold" : "font-semibold"} ${i ? "cursor-pointer" : ""}`;
    let l;
    e[0] !== a ? (l = () => {
        a?.()
    }
    ,
    e[0] = a,
    e[1] = l) : l = e[1];
    let f;
    return e[2] !== r || e[3] !== c || e[4] !== l ? (f = s.jsx("div", {
        className: c,
        onClick: l,
        children: r
    }),
    e[2] = r,
    e[3] = c,
    e[4] = l,
    e[5] = f) : f = e[5],
    f
}
function it(t) {
    "use forget";
    const e = J.c(74)
      , {query: r, searchIdRef: a, isLoadingRecent: o, searchResults: i, searchResultsCursor: c, isLoadingSearch: l, showWorkspaceResults: f, workspaceSearchResults: g, workspaceSearchResultsCursor: y, isLoadingWorkspaceSearch: v, recentSearchResults: j, setPopoverForceOpen: n, activeTab: h, effectiveRole: b, onSelect: N, renderCombobox: m} = t;
    let M;
    e[0] !== i ? (M = i === void 0 ? [] : i,
    e[0] = i,
    e[1] = M) : M = e[1];
    const w = M;
    let z;
    e[2] !== g ? (z = g === void 0 ? [] : g,
    e[2] = g,
    e[3] = z) : z = e[3];
    const u = z
      , k = es()
      , [C,F] = p.useState(!1)
      , _ = Cs(r, C, h === "WORKSPACE", h === "WORKSPACE" ? y : c);
    let D;
    e[4] !== _.data?.pages ? (D = _.data?.pages.flatMap(ct) ?? [],
    e[4] = _.data?.pages,
    e[5] = D) : D = e[5];
    let O;
    e[6] !== _ || e[7] !== D ? (O = {
        ..._,
        data: D
    },
    e[6] = _,
    e[7] = D,
    e[8] = O) : O = e[8];
    const {data: P, hasNextPage: B, fetchNextPage: W, isFetchingNextPage: G, isError: E} = O
      , [q,Qe] = p.useState(P.length)
      , $e = p.useRef(null);
    let ae, ie;
    e[9] !== q || e[10] !== P.length ? (ae = () => {
        P.length > q && (Qe(P.length),
        $e.current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        }))
    }
    ,
    ie = [P.length, q],
    e[9] = q,
    e[10] = P.length,
    e[11] = ae,
    e[12] = ie) : (ae = e[11],
    ie = e[12]),
    p.useEffect(ae, ie);
    let ne;
    e[13] !== b || e[14] !== k || e[15] !== N || e[16] !== r || e[17] !== a ? (ne = (d, S) => {
        const R = d.gizmo.vanity_metrics?.num_conversations_str
          , H = d.gizmo.tags?.includes(X.WorkspaceDisabled) && b !== K.OWNER;
        return {
            id: d.gizmo.id,
            className: L("group flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-white/10", H && "opacity-50 hover:opacity-100"),
            focusedClassName: "bg-gray-50 dark:bg-white/10",
            onClick: () => {
                N ? N(d) : T.logEvent("Store Click Gizmo", {
                    search_id: a.current,
                    gizmo_id: d.gizmo.id,
                    position: S,
                    query: r,
                    section: "search"
                })
            }
            ,
            children: s.jsx(mt, {
                resource: d,
                grayedOut: H ?? !1,
                isScreenSm: k,
                numConvos: R
            })
        }
    }
    ,
    e[13] = b,
    e[14] = k,
    e[15] = N,
    e[16] = r,
    e[17] = a,
    e[18] = ne) : ne = e[18];
    const Q = ne;
    if (r === "" && j && j.length > 0) {
        let d;
        return e[19] !== Q || e[20] !== j || e[21] !== m ? (d = m({
            discoverySearchRecentlyUsed: j.map(Q)
        }, null),
        e[19] = Q,
        e[20] = j,
        e[21] = m,
        e[22] = d) : d = e[22],
        d
    }
    if (r === "" && o) {
        let d;
        return e[23] !== m ? (d = m([], null),
        e[23] = m,
        e[24] = d) : d = e[24],
        d
    }
    if (r === "") {
        let d;
        if (e[25] !== m) {
            let S;
            e[27] === Symbol.for("react.memo_cache_sentinel") ? (S = s.jsx(pe, {
                onClick: void 0,
                isSelected: void 0,
                isClickable: !1,
                children: s.jsx(x, {
                    ...U.discoverySearchRecentlyUsedEmpty
                })
            }),
            e[27] = S) : S = e[27],
            d = m([], S),
            e[25] = m,
            e[26] = d
        } else
            d = e[26];
        return d
    }
    if (r !== "" && !l && h === "ALL" && (w == null || w.length === 0)) {
        let d;
        if (e[28] !== m) {
            let S;
            e[30] === Symbol.for("react.memo_cache_sentinel") ? (S = s.jsx("div", {
                className: "text-token-text-tertiary mt-4 px-3 pb-2 text-xs font-semibold",
                children: s.jsx(x, {
                    ...U.discoveryNoResultsSearch
                })
            }),
            e[30] = S) : S = e[30],
            d = m([], S),
            e[28] = m,
            e[29] = d
        } else
            d = e[29];
        return d
    }
    if (r !== "" && !v && h === "WORKSPACE" && (u == null || u.length === 0)) {
        let d;
        if (e[31] !== m) {
            let S;
            e[33] === Symbol.for("react.memo_cache_sentinel") ? (S = s.jsx("div", {
                className: "text-token-text-tertiary mt-4 px-3 pb-2 text-xs font-semibold",
                children: s.jsx(x, {
                    ...U.discoveryNoResultsSearch
                })
            }),
            e[33] = S) : S = e[33],
            d = m([], S),
            e[31] = m,
            e[32] = d
        } else
            d = e[32];
        return d
    }
    if (f) {
        if (r !== "" && !l && !v && (!w || w.length === 0) && (!u || u.length === 0)) {
            let d;
            if (e[34] !== m) {
                let S;
                e[36] === Symbol.for("react.memo_cache_sentinel") ? (S = s.jsx("div", {
                    className: "mx-2",
                    children: s.jsx(pe, {
                        onClick: void 0,
                        isSelected: void 0,
                        isClickable: !1,
                        children: s.jsx(x, {
                            ...U.discoveryNoResultsSearch
                        })
                    })
                }),
                e[36] = S) : S = e[36],
                d = m([], S),
                e[34] = m,
                e[35] = d
            } else
                d = e[35];
            return d
        }
    } else {
        if (l) {
            let d;
            return e[37] !== m ? (d = m([], null),
            e[37] = m,
            e[38] = d) : d = e[38],
            d
        }
        if (r !== "" && !l && (!w || w.length === 0)) {
            let d;
            if (e[39] !== m) {
                let S;
                e[41] === Symbol.for("react.memo_cache_sentinel") ? (S = s.jsx("div", {
                    className: "mx-2",
                    children: s.jsx(pe, {
                        onClick: void 0,
                        isSelected: void 0,
                        isClickable: !1,
                        children: s.jsx(x, {
                            ...U.discoveryNoResultsSearch
                        })
                    })
                }),
                e[41] = S) : S = e[41],
                d = m([], S),
                e[39] = m,
                e[40] = d
            } else
                d = e[40];
            return d
        }
    }
    let le;
    if (e[42] !== W || e[43] !== B || e[44] !== E || e[45] !== G || e[46] !== C || e[47] !== P || e[48] !== Q || e[49] !== m || e[50] !== w || e[51] !== c || e[52] !== n || e[53] !== u || e[54] !== y) {
        let d = [];
        if (w) {
            const R = w.map(Q);
            d = [...d, ...R]
        }
        if (w && P) {
            const R = P.map(Q);
            d = [...d, ...R]
        }
        if ((!C && P.length === 0 || B || G || E) && c != null) {
            let R;
            e[56] !== W || e[57] !== n ? (R = () => {
                F(!0),
                W(),
                n?.(!0)
            }
            ,
            e[56] = W,
            e[57] = n,
            e[58] = R) : R = e[58];
            const H = E ? "danger-outline" : "secondary";
            let I;
            e[59] !== E ? (I = E ? s.jsx(x, {
                ...U.discoveryLoadMoreError
            }) : s.jsx(x, {
                ...U.discoveryLoadMore
            }),
            e[59] = E,
            e[60] = I) : I = e[60];
            let $;
            e[61] !== G || e[62] !== H || e[63] !== I ? ($ = s.jsx(V, {
                color: H,
                onClick: lt,
                loading: G,
                fullWidth: !0,
                className: "mt-2 md:mt-3",
                children: I
            }),
            e[61] = G,
            e[62] = H,
            e[63] = I,
            e[64] = $) : $ = e[64];
            const he = {
                id: "all-load-more-button",
                className: "",
                onClick: R,
                children: $
            };
            d = [...d, he]
        }
        const S = {
            ALL: d
        };
        if (u) {
            const R = u.map(Q);
            S.WORKSPACE = R
        }
        if (u && P) {
            const R = P.map(Q);
            S.WORKSPACE = [...S.WORKSPACE, ...R]
        }
        if ((!C && P.length === 0 || B || G || E) && y != null) {
            let R;
            e[65] !== W || e[66] !== n ? (R = () => {
                F(!0),
                W(),
                n?.(!0)
            }
            ,
            e[65] = W,
            e[66] = n,
            e[67] = R) : R = e[67];
            const H = E ? "danger-outline" : "secondary";
            let I;
            e[68] !== E ? (I = E ? s.jsx(x, {
                ...U.discoveryLoadMoreError
            }) : s.jsx(x, {
                ...U.discoveryLoadMore
            }),
            e[68] = E,
            e[69] = I) : I = e[69];
            let $;
            e[70] !== G || e[71] !== H || e[72] !== I ? ($ = s.jsx(V, {
                color: H,
                onClick: nt,
                fullWidth: !0,
                className: "mt-2 md:mt-3",
                loading: G,
                children: I
            }),
            e[70] = G,
            e[71] = H,
            e[72] = I,
            e[73] = $) : $ = e[73];
            const he = {
                id: "workspace-load-more-button",
                className: "",
                onClick: R,
                children: $
            };
            S.WORKSPACE = [...S.WORKSPACE, he]
        }
        le = m(S, null),
        e[42] = W,
        e[43] = B,
        e[44] = E,
        e[45] = G,
        e[46] = C,
        e[47] = P,
        e[48] = Q,
        e[49] = m,
        e[50] = w,
        e[51] = c,
        e[52] = n,
        e[53] = u,
        e[54] = y,
        e[55] = le
    } else
        le = e[55];
    return le
}
function nt() {}
function lt() {}
function ct(t) {
    return t.items.map(dt)
}
function dt(t) {
    return t
}
function mt(t) {
    "use forget";
    const e = J.c(25)
      , {resource: r, grayedOut: a, isScreenSm: o, numConvos: i} = t
      , c = !!r.gizmo.tags?.includes(X.FirstParty)
      , l = r.gizmo.display.profile_picture_url ?? void 0
      , f = a && "grayscale group-hover:grayscale-0";
    let g;
    e[0] !== f ? (g = L("h-8 w-8 shrink-0", f),
    e[0] = f,
    e[1] = g) : g = e[1];
    let y;
    e[2] !== c || e[3] !== l || e[4] !== g ? (y = s.jsx(Se, {
        isFirstParty: c,
        src: l,
        className: g
    }),
    e[2] = c,
    e[3] = l,
    e[4] = g,
    e[5] = y) : y = e[5];
    let v;
    e[6] !== r.gizmo.display.name ? (v = s.jsx("div", {
        className: "flex flex-row items-end space-x-2",
        children: s.jsx("span", {
            className: "shrink-0 truncate text-sm font-semibold",
            children: r.gizmo.display.name
        })
    }),
    e[6] = r.gizmo.display.name,
    e[7] = v) : v = e[7];
    let j;
    e[8] !== o || e[9] !== r.gizmo.display.description ? (j = o && s.jsx("span", {
        className: "text-token-text-tertiary max-w-md truncate text-xs",
        children: r.gizmo.display.description
    }),
    e[8] = o,
    e[9] = r.gizmo.display.description,
    e[10] = j) : j = e[10];
    let n;
    e[11] !== r ? (n = s.jsx("div", {
        className: "-mt-1",
        children: s.jsx(ke, {
            gizmo: r,
            className: "text-token-text-tertiary truncate text-xs",
            hideLink: !0
        })
    }),
    e[11] = r,
    e[12] = n) : n = e[12];
    let h;
    e[13] !== i ? (h = i && s.jsxs("div", {
        className: "text-token-text-tertiary flex items-center gap-1 font-semibold",
        style: {
            marginTop: "-2px"
        },
        children: [s.jsx(we, {
            className: "icon-xs"
        }), s.jsx("span", {
            className: "line-clamp-1 text-xs",
            children: i
        })]
    }),
    e[13] = i,
    e[14] = h) : h = e[14];
    let b;
    e[15] !== n || e[16] !== h ? (b = s.jsxs("div", {
        className: "flex items-center gap-2",
        children: [n, h]
    }),
    e[15] = n,
    e[16] = h,
    e[17] = b) : b = e[17];
    let N;
    e[18] !== b || e[19] !== v || e[20] !== j ? (N = s.jsxs("div", {
        className: "flex flex-col space-y-1 truncate",
        children: [v, j, b]
    }),
    e[18] = b,
    e[19] = v,
    e[20] = j,
    e[21] = N) : N = e[21];
    let m;
    return e[22] !== N || e[23] !== y ? (m = s.jsxs(s.Fragment, {
        children: [y, N]
    }),
    e[22] = N,
    e[23] = y,
    e[24] = m) : m = e[24],
    m
}
const U = ue({
    discoveryAllResultsHeader: {
        id: "gizmo.discovery.AllResultsHeader",
        defaultMessage: "All"
    },
    discoveryWorkspaceResultsHeader: {
        id: "gizmo.discovery.workspaceResultsHeaderName",
        defaultMessage: "{workspaceName} workspace"
    },
    discoveryNoResultsSearch: {
        id: "gizmo.discovery.search.empty",
        defaultMessage: "No results found"
    },
    discoverySearch: {
        id: "gizmo.discovery.search",
        defaultMessage: "Search GPTs"
    },
    discoverySearchRecentlyUsed: {
        id: "gizmo.discovery.search.recentlyUsed",
        defaultMessage: "Recently Used"
    },
    discoverySearchRecentlyUsedEmpty: {
        id: "gizmo.discovery.search.recentlyUsedEmpty",
        defaultMessage: "No recently used GPTs"
    },
    discoveryLoadMore: {
        id: "gizmo.discovery.loadMore",
        defaultMessage: "See more"
    },
    discoveryLoadMoreError: {
        id: "gizmo.discovery.loadMoreError",
        defaultMessage: "Error loading more"
    }
})
  , Be = Re.div`grid grid-cols-1 gap-x-1.5 gap-y-1 md:gap-x-2 md:gap-y-1.5 lg:grid-cols-2 lg:gap-x-3 lg:gap-y-2.5`
  , ve = "gpt_store";
function ut(t, e) {
    e.scrollLeft > t.offsetLeft ? e.scrollBy({
        left: t.offsetLeft - e.scrollLeft - 20,
        behavior: "smooth"
    }) : e.scrollLeft + e.clientWidth < t.offsetLeft + t.clientWidth && e.scrollBy({
        left: t.offsetLeft + t.clientWidth - e.clientWidth - e.scrollLeft + 20,
        behavior: "smooth"
    })
}
function At({anon: t}) {
    const [e] = p.useState( () => ss.getItem(ts.GizmoDiscoveryLocale))
      , r = Te()
      , [a,o] = p.useState(!1)
      , i = r?.isOwnerOfAccount() && !a ? K.OWNER : K.STANDARD;
    return s.jsx(gt, {
        anon: t,
        currAccount: r,
        requestedLocale: e,
        effectiveRole: i,
        setPretendStandardUser: o
    })
}
function gt({anon: t, currAccount: e, requestedLocale: r, effectiveRole: a, setPretendStandardUser: o}) {
    const [i,c] = p.useState(void 0)
      , l = !!t || e?.isPersonalAccount() && !0
      , {data: f, isLoading: g, isError: y} = Rs(r, l);
    p.useEffect( () => {
        f && c({
            locale: f.locale,
            workspace_filtered: f.workspace_filtered,
            cuts: f.cuts.map(j => ({
                info: j.info,
                list: {
                    items: j.list.items.map(n => n.resource),
                    cursor: j.list.cursor
                }
            }))
        })
    }
    , [f]);
    const v = (...j) => {
        const n = De(...j);
        return {
            ...n,
            data: n.data?.pages.flatMap(h => h.list.items.map(b => b.resource)) ?? []
        }
    }
    ;
    return s.jsx(ht, {
        anon: t,
        discoveryLanding: i,
        isLoading: g,
        isError: y,
        effectiveRole: a,
        setPretendStandardUser: o,
        useFetchMoreQuery: v
    })
}
function ft(t, e) {
    if (t)
        return s.jsx(ce, {
            type: "info",
            children: s.jsx(x, {
                ...A.discoveryResidencyRestriction
            })
        });
    switch (e) {
    case "allow_none":
        return s.jsx(ce, {
            type: "info",
            children: s.jsx(x, {
                ...A.discoveryThirdPartyDisabled
            })
        });
    case "allow_specific":
        return s.jsx(ce, {
            type: "info",
            children: s.jsx(x, {
                ...A.discoveryThirdPartySpecific
            })
        });
    default:
        return null
    }
}
function ht({anon: t, discoveryLanding: e, isLoading: r, isError: a, effectiveRole: o, setPretendStandardUser: i, useFetchMoreQuery: c}) {
    const l = Te()
      , f = os(l?.getWorkspaceId())
      , g = p.useRef({})
      , [y,v] = p.useState({})
      , j = p.useMemo( () => Ls(as(e?.cuts.map(u => ({
        id: u.info.id,
        name: u.info.display_group
    }))), "name"), [e])
      , n = p.useRef(null)
      , h = j.find(u => y[u.id]) ?? j[0];
    p.useEffect( () => {
        const u = g.current
          , k = new IntersectionObserver(C => {
            C.forEach(F => {
                for (const _ of j) {
                    const D = u[_.id];
                    D != null && F.target === D && v(O => ({
                        ...O,
                        [_.id]: F.isIntersecting
                    }))
                }
            }
            )
        }
        ,{
            root: null,
            rootMargin: "-96px",
            threshold: .1
        });
        return Object.values(u).forEach(C => {
            C != null && k.observe(C)
        }
        ),
        () => {
            Object.values(u).forEach(C => {
                C != null && k.unobserve(C)
            }
            )
        }
    }
    , [g, j]);
    const b = p.useRef(null)
      , N = s.jsx("div", {
        className: "flex h-full w-full items-center justify-center",
        children: a ? s.jsx(ce, {
            type: "danger",
            children: s.jsx(x, {
                ...A.discoveryError
            })
        }) : s.jsx(Me, {})
    })
      , m = l?.data.residencyRegion != null && l.data.residencyRegion !== "no_constraint" && l.data.residencyRegion !== "us"
      , M = f.data?.allow_third_party_gpts
      , w = ft(m, M)
      , z = s.jsxs("div", {
        className: "screen-arch:w-full mx-auto max-w-3xl overflow-x-clip px-4",
        children: [s.jsx(pt, {}), s.jsxs("div", {
            className: "bg-token-bg-primary sticky top-14 z-30 -mt-2 mb-12 flex flex-col gap-6 pt-2 [@media(min-width:1560px)]:top-0",
            children: [!t && s.jsx(Ys, {}), s.jsx("div", {
                ref: n,
                className: "scroll-mt-28"
            }), w, j.length > 0 && s.jsx(xt, {
                displayGroups: j,
                currentDisplayGroup: h,
                scrollToDisplayGroup: u => {
                    (g.current[u.id] ?? n.current).scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    })
                }
            })]
        }), e?.cuts.map(u => u.info.display_type === "featured" ? s.jsx(bt, {
            info: u.info,
            items: u.list.items,
            ref: k => {
                k != null && (g.current[u.info.id] = k)
            }
            ,
            effectiveRole: o
        }, u.info.id) : s.jsx(St, {
            info: u.info,
            items: u.list.items,
            cursor: u.list.cursor ?? void 0,
            ref: k => {
                k != null && (g.current[u.info.id] = k)
            }
            ,
            anon: t,
            effectiveRole: o,
            useFetchMoreQuery: c
        }, u.info.id)) ?? []]
    });
    return r || a ? s.jsxs(s.Fragment, {
        children: [t ? s.jsx(ye, {
            redirectUrl: ze(),
            className: "bg-token-main-surface-primary sticky top-0 z-30 h-14"
        }) : s.jsx(Ce, {}), N]
    }) : s.jsxs("div", {
        ref: b,
        className: "h-full overflow-y-auto",
        children: [t ? s.jsx(ye, {
            redirectUrl: ze(),
            className: "bg-token-main-surface-primary sticky top-0 z-30 h-14"
        }) : s.jsxs(s.Fragment, {
            children: [l?.isWorkspaceAccount() && s.jsx(vt, {
                role: o,
                onPretendStandardUser: u => {
                    i(u)
                }
            }), s.jsx(Ce, {})]
        }), z, e?.workspace_filtered && !l?.isOwnerOfAccount() && s.jsx(yt, {})]
    })
}
function pt() {
    return s.jsxs("div", {
        className: "mb-6",
        children: [s.jsx("div", {
            className: "my-2 text-center text-3xl font-bold md:my-4 md:text-5xl",
            children: s.jsx(x, {
                ...A.discoverySplashHeader
            })
        }), s.jsx("div", {
            className: "text-token-text-secondary mx-auto w-full text-center text-sm md:text-lg md:leading-tight",
            children: s.jsx(x, {
                ...A.discoverySplashDescription
            })
        })]
    })
}
function xt({displayGroups: t, currentDisplayGroup: e, scrollToDisplayGroup: r}) {
    const a = p.useRef(null)
      , o = oe()
      , i = (...n) => o.formatMessage(...n)
      , c = p.useRef({})
      , [l,f] = p.useState(!1);
    p.useEffect( () => {
        if (l || e == null)
            return;
        const h = c.current[e.id];
        if (h == null)
            return;
        const b = a.current;
        b != null && ut(h, b)
    }
    , [e, l]);
    const [g,y] = p.useState(!1)
      , [v,j] = p.useState(!1);
    return p.useEffect( () => {
        const n = a.current
          , h = () => {
            n != null && (y(n.scrollLeft > 0),
            j(n.scrollLeft + n.clientWidth < n.scrollWidth))
        }
        ;
        return n?.addEventListener("scroll", h),
        window.addEventListener("resize", h),
        h(),
        () => {
            n?.removeEventListener("scroll", h),
            window.removeEventListener("resize", h)
        }
    }
    , [a]),
    s.jsxs("div", {
        className: "bg-token-main-surface-primary sticky top-14 z-10 -ms-4 w-screen py-2 text-sm md:ms-0 md:w-full md:pb-0",
        children: [g && s.jsx("div", {
            className: "absolute start-0 top-2 hidden h-full items-end bg-linear-to-r from-white from-50% to-transparent pe-8 md:block dark:from-gray-800",
            children: s.jsx("button", {
                className: "mt-2 rounded-full bg-gray-100 p-1 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-white/20",
                onClick: () => {
                    a.current != null && a.current.scrollBy({
                        left: -400,
                        behavior: "smooth"
                    })
                }
                ,
                children: s.jsx(ns, {
                    className: "icon-sm"
                })
            })
        }), s.jsx("div", {
            className: "no-scrollbar flex scroll-m-5 gap-1.5 overflow-x-auto md:overflow-hidden",
            ref: a,
            children: t.map(n => s.jsx("div", {
                className: L("md:text-token-text-primary cursor-pointer scroll-mx-5 rounded-3xl px-3 py-2 whitespace-nowrap select-none first:ms-4 last:me-4 md:bg-transparent md:px-2 md:first:ms-0 md:last:me-0", n.id === e?.id ? "border-token-text-primary text-token-main-surface-primary bg-black md:rounded-none md:border-b-2 dark:bg-gray-100 dark:md:bg-transparent" : "bg-token-main-surface-secondary hover:text-token-text-primary md:text-token-text-tertiary hover:bg-gray-100 md:rounded-lg md:hover:bg-gray-50 dark:hover:bg-white/20 dark:md:bg-transparent dark:md:hover:bg-gray-700"),
                onClick: () => {
                    f(!0),
                    r(n),
                    setTimeout( () => {
                        f(!1)
                    }
                    , 1e3),
                    T.logEvent("Store Click Category", {
                        category: n.id
                    })
                }
                ,
                ref: h => {
                    h != null && (c.current[n.id] = h)
                }
                ,
                children: i({
                    id: `gizmo.categoryName.${n.name}`,
                    defaultMessage: n.name,
                    description: "store category"
                })
            }, n.id))
        }), v && s.jsx("div", {
            className: "absolute end-0 top-2 hidden h-full bg-linear-to-l from-white from-50% to-transparent ps-8 md:block dark:from-gray-800",
            children: s.jsx("button", {
                className: "mt-2 rounded-full bg-gray-100 p-1 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-white/10",
                onClick: () => {
                    a.current != null && a.current.scrollBy({
                        left: 400,
                        behavior: "smooth"
                    })
                }
                ,
                children: s.jsx(ls, {
                    className: "icon-sm"
                })
            })
        })]
    })
}
function yt() {
    const t = oe()
      , e = _e()
      , r = Es();
    return s.jsxs("div", {
        className: L("bg-token-main-surface-secondary text-token-text-secondary screen-arch:static fixed bottom-0 flex w-full items-center justify-center gap-2 p-3 text-sm", r && "md:w-[calc(100%-16rem)]"),
        children: [s.jsx(Oe, {
            className: "icon-sm"
        }), t.formatMessage(A.discoveryThirdPartyGPTsDisabled, {
            workspaceName: e
        })]
    })
}
function vt({role: t, onPretendStandardUser: e}) {
    const r = oe();
    return cs() ? s.jsxs("div", {
        className: "h-52px flex w-full items-center justify-center gap-2 bg-gray-100 p-3 text-sm dark:bg-gray-700",
        children: [s.jsx(Oe, {
            className: "icon-sm"
        }), s.jsx(x, {
            id: "gizmo.discovery.browsingAsOwner",
            defaultMessage: "You're viewing as a <b>workspace member</b>",
            values: {
                b: o => s.jsxs(Y.Root, {
                    defaultValue: t,
                    onValueChange: i => {
                        e(i === K.STANDARD)
                    }
                    ,
                    children: [s.jsxs(Y.Trigger, {
                        className: "-mx-2 -my-2 bg-transparent px-1 font-semibold",
                        children: [s.jsx(fe, {
                            disabled: t !== K.OWNER,
                            label: r.formatMessage({
                                id: "gizmo.discovery.browsingAsOwnerTooltip",
                                defaultMessage: "Owners can access all third-party GPTs, even if they haven’t been approved."
                            }),
                            side: "bottom",
                            triggerAs: null,
                            children: s.jsx(Y.Value, {})
                        }), s.jsx(Y.Icon, {})]
                    }), s.jsx(Y.Portal, {
                        children: s.jsxs(Y.Content, {
                            children: [s.jsx(Y.Item, {
                                value: K.OWNER,
                                children: s.jsx(x, {
                                    id: "gizmo.discovery.browsingOwnerRole",
                                    defaultMessage: "workspace owner"
                                })
                            }), s.jsx(Y.Item, {
                                value: K.STANDARD,
                                children: s.jsx(x, {
                                    id: "gizmo.discovery.browsingMemberRole",
                                    defaultMessage: "workspace member"
                                })
                            })]
                        })
                    })]
                })
            }
        })]
    }) : null
}
function Ce({isMobile: t=!1}) {
    const e = xe()
      , r = ge()
      , a = oe()
      , {canCreate: o, isLoading: i} = Gs()
      , l = be()?.planType ?? "unknown"
      , f = () => {
        o ? (T.logEvent("Store Create Gizmo"),
        r(e)) : (T.logUpsellGetPlusButtonClicked({
            location: ve,
            type: "create_gpt",
            plan_type: l
        }),
        Le(r, "Gizmo Discovery page upsell"))
    }
    ;
    return s.jsx(s.Fragment, {
        children: s.jsxs(Ms, {
            className: L("z-30 flex w-full items-center justify-between whitespace-nowrap", t && "ps-2 pe-0", !t && "max-md:hidden"),
            children: [s.jsxs("div", {
                className: "flex items-center gap-1",
                children: [s.jsx("div", {
                    className: "hidden md:flex",
                    children: s.jsx(As, {
                        clientThreadId: rs
                    })
                }), s.jsx("h1", {
                    className: "px-2 text-lg font-normal select-none [text-box-trim:trim-both] [view-transition-name:var(--vt-tool-page-title)]",
                    children: s.jsx(x, {
                        id: "h8AzQb",
                        defaultMessage: "Explore GPTs"
                    })
                })]
            }), s.jsxs("div", {
                className: "flex items-center gap-2",
                children: [s.jsxs("div", {
                    className: "hidden items-center gap-2 md:flex",
                    children: [o && s.jsx(V, {
                        color: "ghost",
                        onClick: () => {
                            r("/gpts/mine"),
                            T.logEvent("Store My Gizmos")
                        }
                        ,
                        children: s.jsx(x, {
                            ...A.discoveryMyGPTs
                        })
                    }), s.jsx(jt, {
                        canCreateGPTs: o,
                        loadingPermissions: i,
                        createUrl: e
                    })]
                }), s.jsx("div", {
                    className: "md:hidden",
                    children: s.jsxs(Ge, {
                        contentAlign: "end",
                        triggerButton: s.jsx(Ts, {
                            "aria-label": a.formatMessage({
                                id: "pdxBIm",
                                defaultMessage: "Open actions menu"
                            })
                        }),
                        children: [o && s.jsx(me.Item, {
                            onClick: () => {
                                r("/gpts/mine"),
                                T.logEvent("Store My Gizmos")
                            }
                            ,
                            children: s.jsx(x, {
                                ...A.discoveryMyGPTs
                            })
                        }), s.jsx(me.Item, {
                            onClick: f,
                            children: s.jsx(x, {
                                ...A.discoveryCreateGPT
                            })
                        })]
                    })
                }), s.jsx("div", {
                    className: "hidden md:block",
                    children: s.jsx(_s, {})
                })]
            })]
        })
    })
}
const jt = ({canCreateGPTs: t, loadingPermissions: e, createUrl: r}) => {
    const [a,o] = p.useState(!1)
      , i = p.useRef(void 0)
      , c = is()
      , l = be()
      , f = l?.isFree()
      , g = l?.isWorkspaceAccount()
      , y = l?.planType ?? "unknown"
      , v = "create_gpt"
      , j = () => {
        t || (T.logPopoverHover({
            location: ve,
            type: v,
            plan_type: y
        }),
        clearTimeout(i.current),
        o(!0))
    }
      , n = () => {
        t || (i.current = c(function() {
            o(!1)
        }, 300))
    }
      , h = ge()
      , b = () => {
        T.logUpsellGetPlusButtonClicked({
            location: ve,
            type: v,
            plan_type: y
        }),
        Le(h, "Gizmo Discovery page upsell")
    }
      , N = t ? () => T.logEvent("Store Create Gizmo") : m => m.preventDefault();
    return s.jsxs("div", {
        onMouseEnter: j,
        onMouseLeave: n,
        className: "screen-arch:flex screen-arch:items-center relative",
        children: [s.jsx(V, {
            color: "secondary",
            disabled: !t,
            visuallyDisabled: !t,
            onClick: N,
            as: "link",
            to: r,
            icon: Ae,
            "data-testid": "create-gpt-discovery-button",
            loading: e,
            children: s.jsx(x, {
                ...A.discoveryCreateGPT
            })
        }), !t && a && s.jsx("div", {
            className: "border-token-border-default bg-token-main-surface-primary screen-arch:top-12 absolute end-0 z-10 mt-2 w-64 rounded-lg border p-3 text-sm shadow-lg",
            children: f ? s.jsxs(s.Fragment, {
                children: [s.jsx("p", {
                    className: "from-token-text-tertiary mb-2 text-start font-normal break-words whitespace-normal",
                    children: s.jsx(x, {
                        ...A.createGPTUpsell
                    })
                }), s.jsx(V, {
                    color: "secondary",
                    onClick: b,
                    size: "small",
                    children: s.jsx(x, {
                        ...A.createGPTUpsellButtonLabel
                    })
                })]
            }) : g ? s.jsx("p", {
                className: "from-token-text-tertiary mb-2 text-start font-normal break-words whitespace-normal",
                children: s.jsx(x, {
                    ...A.createGPTDisabledByAdmin
                })
            }) : null
        })]
    })
}
  , bt = p.forwardRef(function({info: e, items: r, effectiveRole: a}, o) {
    return s.jsx(He, {
        title: e.title,
        description: e.description,
        ref: o,
        children: s.jsx(Be, {
            children: r.map( (i, c) => s.jsx(kt, {
                resource: i,
                effectiveRole: a
            }, `${c}-${i.gizmo.id}`))
        })
    })
});
function kt({resource: t, effectiveRole: e}) {
    const r = t.gizmo.vanity_metrics?.num_conversations_str
      , a = t.gizmo.tags?.includes(X.WorkspaceDisabled) && e !== K.OWNER;
    return s.jsx(re, {
        children: s.jsxs(Fe, {
            gizmo: t,
            className: L("group flex h-24 items-center gap-5 overflow-hidden rounded-xl bg-gray-50 px-7 py-8 hover:bg-gray-100 md:h-32 lg:h-36 dark:bg-gray-700 dark:hover:bg-white/10", a && "opacity-50 hover:opacity-100"),
            onClick: () => {
                T.logEvent("Store Click Gizmo", {
                    gizmo_id: t.gizmo.id,
                    section: "featured"
                })
            }
            ,
            children: [s.jsx(Se, {
                isFirstParty: !!t.gizmo.tags?.includes(X.FirstParty),
                src: t.gizmo.display.profile_picture_url ?? void 0,
                className: L("h-16 w-16 shrink-0 md:h-24 md:w-24", a && "grayscale group-hover:grayscale-0")
            }), s.jsxs("div", {
                className: "flex flex-col",
                children: [s.jsx("div", {
                    className: "line-clamp-2 font-semibold md:text-lg",
                    children: t.gizmo.display.name
                }), s.jsx("span", {
                    className: "line-clamp-2 text-xs md:line-clamp-3",
                    children: t.gizmo.display.description
                }), s.jsxs("div", {
                    className: "text-token-text-tertiary mt-1 line-clamp-1 flex justify-start gap-1 text-xs",
                    children: [s.jsx(ke, {
                        gizmo: t,
                        className: "text-xs",
                        hideLink: !0
                    }), r && s.jsxs(s.Fragment, {
                        children: [s.jsx("span", {
                            className: "text-[10px]",
                            children: "•"
                        }), s.jsx(we, {
                            className: "mt-0.5 h-3 w-3"
                        }), r]
                    })]
                })]
            })]
        })
    })
}
const St = p.forwardRef(function({info: e, items: r, cursor: a, anon: o, effectiveRole: i, useFetchMoreQuery: c}, l) {
    const [f,g] = p.useState(r.length === 0)
      , {data: y, hasNextPage: v, fetchNextPage: j, isFetchingNextPage: n, isError: h} = c({
        cutId: e.id,
        locale: e.locale,
        limit: 6,
        cursor: a,
        enabled: f
    });
    p.useEffect( () => {
        r.length === 0 && j()
    }
    , [j, r.length]);
    const [b,N] = p.useState(y.length)
      , m = p.useRef(null)
      , M = Ye(.1);
    return p.useEffect( () => {
        y.length > b && (N(y.length),
        m.current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        }))
    }
    , [y.length, b]),
    s.jsxs(He, {
        title: e.title,
        description: e.description,
        ref: l,
        children: [s.jsxs(Be, {
            children: [r.map( (w, z) => s.jsx(Pe, {
                resource: w,
                rank: z + 1,
                cutId: e.id,
                effectiveRole: i
            }, z)), y.map( (w, z) => s.jsx(Pe, {
                resource: w,
                rank: r.length + z + 1,
                cutId: e.id,
                delay: M(z - b, y.length - b),
                effectiveRole: i
            }, z))]
        }), (!f || v || n || h) && !o && a != null && s.jsx(V, {
            color: h ? "danger-outline" : "secondary",
            onClick: () => {
                g(!0),
                T.logEvent("Store Load More", {
                    section: e.id
                }),
                j()
            }
            ,
            fullWidth: !0,
            className: "mt-2 md:mt-3",
            loading: n,
            children: h ? s.jsx(x, {
                ...A.discoveryLoadMoreError
            }) : s.jsx(x, {
                ...A.discoveryLoadMore
            })
        }), s.jsx("div", {
            ref: m
        })]
    })
});
function Pe({resource: t, rank: e, cutId: r, delay: a, effectiveRole: o}) {
    const i = t.gizmo.tags?.includes(X.WorkspaceDisabled) && o !== K.OWNER
      , c = t.gizmo.tags?.includes(X.FirstParty);
    return s.jsx(re, {
        delay: a,
        children: s.jsxs(Fe, {
            gizmo: t,
            className: L("group hover:bg-token-main-surface-secondary flex h-[104px] items-center gap-2.5 overflow-hidden rounded-xl px-1 py-4 md:px-3 md:py-4 lg:px-3", i && "opacity-50 hover:opacity-100"),
            onClick: () => {
                T.logEvent("Store Click Gizmo", {
                    gizmo_id: t.gizmo.id,
                    position: e,
                    section: c ? "first_party" : r
                })
            }
            ,
            children: [s.jsx("div", {
                className: "text-md flex w-8 shrink-0 items-center justify-center font-semibold",
                children: e
            }), s.jsx(Ps, {
                resource: t,
                grayedOut: i
            })]
        }, t.gizmo.id)
    })
}
const He = p.forwardRef(function({title: e, description: r, className: a, children: o}, i) {
    return s.jsxs("div", {
        ref: i,
        className: "h-fit scroll-mt-28 last:min-h-[calc(100vh-8rem)]",
        children: [s.jsxs(re, {
            animateTap: !1,
            children: [s.jsx("div", {
                className: "text-xl font-semibold md:text-2xl",
                children: e
            }), r && s.jsx("div", {
                className: "text-token-text-tertiary text-sm md:text-base",
                children: r
            })]
        }), s.jsx("div", {
            className: L("mt-4 mb-10", a),
            children: o
        })]
    })
})
  , A = ue({
    discoveryAllResultsHeader: {
        id: "gizmo.discovery.AllResultsHeader",
        defaultMessage: "All"
    },
    discoveryWorkspaceResultsHeader: {
        id: "gizmo.discovery.workspaceResultsHeaderName",
        defaultMessage: "{workspaceName} workspace"
    },
    discoveryEmpty: {
        id: "gizmo.discovery.empty",
        defaultMessage: "Nothing to discover"
    },
    discoveryNoResultsSearch: {
        id: "gizmo.discovery.search.empty",
        defaultMessage: "No results found"
    },
    discoveryError: {
        id: "gizmo.discovery.error",
        defaultMessage: "Error loading GPTs"
    },
    discoverySearch: {
        id: "gizmo.discovery.search",
        defaultMessage: "Search GPTs"
    },
    discoverySearchSmall: {
        id: "gizmo.discovery.searchSmall",
        defaultMessage: "Search"
    },
    discoverySearchRecentlyUsed: {
        id: "gizmo.discovery.search.recentlyUsed",
        defaultMessage: "Recently Used"
    },
    discoverySearchRecentlyUsedEmpty: {
        id: "gizmo.discovery.search.recentlyUsedEmpty",
        defaultMessage: "No recently used GPTs"
    },
    discoverySearchResults: {
        id: "gizmo.discovery.search.results",
        defaultMessage: "Search Results"
    },
    discoveryLoadMore: {
        id: "gizmo.discovery.loadMore",
        defaultMessage: "See more"
    },
    discoveryLoadMoreError: {
        id: "gizmo.discovery.loadMoreError",
        defaultMessage: "Error loading more"
    },
    discoveryMyGPTs: {
        id: "gizmo.discovery.myGPTs",
        defaultMessage: "My GPTs"
    },
    discoveryCreateGPT: {
        id: "gizmo.discovery.createGPT",
        defaultMessage: "Create"
    },
    discoveryThirdPartyGPTsDisabled: {
        id: "gizmo.discovery.thirdPartyGPTsDisabled",
        defaultMessage: "Your admin has blocked GPTs created outside {workspaceName}."
    },
    discoverySplashHeader: {
        id: "gizmo.discovery.splashHeader",
        defaultMessage: "GPTs"
    },
    discoverySplashDescription: {
        id: "gizmo.discovery.splashDescription",
        defaultMessage: "Discover and create custom versions of ChatGPT that combine instructions, extra knowledge, and any combination of skills."
    },
    discoveryGlobalViewOn: {
        id: "gizmo.discovery.globalViewOn",
        defaultMessage: "Global View On"
    },
    discoveryGlobalViewOff: {
        id: "gizmo.discovery.globalViewOff",
        defaultMessage: "Global View Off"
    },
    createdAgoLabel: {
        id: "gizmo.discovery.createdAgoLabel",
        defaultMessage: "Created {createdAgo}"
    },
    createGPTUpsell: {
        id: "gizmo.discovery.createGPTUpsell",
        defaultMessage: "Get ChatGPT Plus to create and share your own GPTs"
    },
    createGPTUpsellButtonLabel: {
        id: "gizmo.discovery.createGPTUpsellButtonLabel",
        defaultMessage: "Get Plus"
    },
    createGPTDisabledByAdmin: {
        id: "bOPXXW",
        defaultMessage: "Your admin has disabled the ability to create GPTs."
    },
    discoveryResidencyRestriction: {
        id: "gizmo.discovery.residencyRestriction",
        defaultMessage: "To comply with data residency requirements, only GPTs created within your workspace are accessible. All third-party GPTs are not available."
    },
    discoveryThirdPartyDisabled: {
        id: "gizmo.discovery.thirdPartyDisabled",
        defaultMessage: "Your admin has disabled all third-party GPTs. Only workspace GPTs are available."
    },
    discoveryThirdPartySpecific: {
        id: "gizmo.discovery.thirdPartySpecific",
        defaultMessage: "Your admin has disabled most third-party GPTs, except for specific ones that have been explicitly approved. Workspace GPTs are available."
    }
});
export {Et as C, Ce as G, Ys as a, At as b, Qs as c, Lt as d, Tt as e, Is as f};
//# sourceMappingURL=gvmh4kt4ryn7x9gx.js.map
