import {r as L, h as x, e as T, j as e, d as Z, f as X, M as I} from "./juy90og0wtbp77qa.js";
import {bY as J, cR as ee, bo as se, cS as te, b0 as ae, cT as ne, bJ as b, cU as oe, cV as ie, cW as re, U as P, cX as ce, cY as le, cZ as de, c_ as ue, c$ as fe, d0 as ge, d1 as he, d2 as me, d3 as O, d4 as xe, d5 as pe, d6 as be, d7 as ve, cO as B, ag as Ne, d8 as ye, d9 as Se, da as Me} from "./ckp56qklot786ulr.js";
import {c as je, bp as Ce, e as h, aV as R, k as j, R as D, A as _e, f as ke, gt as we, hM as Fe, fO as Ue, C as Ie, bw as Oe, bx as Be, f6 as Ee, eR as Ae, aU as Le, dG as v, bd as H, ar as y, dX as Te, ak as Pe, aQ as Re, bk as De, aY as He, ae as S, B as M, P as E, b2 as A} from "./dc2xxjkicf2pz0mj.js";
import {b as ze, c as Ge} from "./btouzu0b6h5eiejj.js";
import {P as qe} from "./iiyyoj0wgh5vo89i.js";
import {u as Ve} from "./dmfmxszxfbs8gsbx.js";
import {b as z} from "./o6wb3ptvu0bk81yq.js";
const p = je(Ce( () => ({
    feedItems: [],
    hasUnreadNotifications: !1,
    isModalOpen: !1
})))
  , We = p.getState
  , N = p.setState
  , Ke = {
    getHasUnreadNotifications: (s=We()) => s.hasUnreadNotifications
}
  , g = {
    setIsModalOpen: s => {
        N({
            isModalOpen: s
        })
    }
    ,
    setHasUnreadNotifications: s => {
        N({
            hasUnreadNotifications: s
        })
    }
    ,
    bulkLoadFeedItems: s => {
        N(a => {
            a.feedItems = s
        }
        )
    }
};
function Qe() {
    const s = C()
      , a = p(Ke.getHasUnreadNotifications);
    return s && a
}
function G(s, a, t, o) {
    const r = h()
      , i = Qe()
      , d = R( () => {
        const f = te(r);
        return Array.from(f).some(u => u.asyncStatus$()?.value === Le.UNREAD)
    }
    );
    return t && i || o && d ? s : a
}
function C() {
    const s = h();
    return j(s, "3606233934", {
        disableExposureLog: !0
    }).get("enable_notifications_feed")
}
function ls() {
    const s = C()
      , a = p(t => t.isModalOpen);
    return s && a
}
function Ye() {
    const s = C()
      , a = Z({
        queryKey: ["fetch-notifications-feed"],
        queryFn: async () => {
            const t = await D.safeGet("/notifications/feed");
            return g.bulkLoadFeedItems(t.items),
            g.setHasUnreadNotifications(t.has_unreads),
            t.items
        }
        ,
        enabled: s
    });
    return {
        isLoading: a.isLoading,
        isFetching: a.isFetching
    }
}
function ds() {
    const s = x()
      , a = G(ne, ae, !0, !1)
      , t = s.formatMessage({
        id: "1UHY6w",
        defaultMessage: "Notifications"
    });
    return Ye(),
    e.jsx(v, {
        label: t,
        className: "group",
        children: e.jsx(b, {
            icon: a,
            onClick: () => g.setIsModalOpen(!0),
            "aria-label": t
        })
    })
}
function $e({item: s, onClose: a}) {
    const o = {
        announcement: ee
    }[s.type];
    let r = null;
    try {
        const n = new Date(s.created_at);
        r = se({
            date: n
        })
    } catch {}
    const {clientThreadId: i} = z()
      , d = Ve(i)
      , f = T()
      , u = n => {
        if (s.action?.type === "show_conversation")
            a(),
            f(s.action.conversation_id);
        else if (s.action?.type === "new_conversation") {
            const c = s.action;
            c.prefilled_message && (d({
                sourceEvent: n,
                promptMessage: Ae(c.prefilled_message),
                requestedModelId: c.model_slug ?? void 0
            }),
            a())
        }
    }
    ;
    return e.jsxs("button", {
        className: "border-token-border-default flex w-full items-center justify-start gap-3 overflow-hidden border-t py-4 first-of-type:border-none",
        onClick: u,
        disabled: !s.action,
        children: [e.jsx("div", {
            className: "relative",
            children: o && e.jsx(o, {
                className: "icon"
            })
        }), e.jsxs("div", {
            className: "flex h-5 shrink grow basis-0 items-center justify-between",
            children: [e.jsx("div", {
                className: "text-token-text-primary text-sm leading-tight font-normal",
                children: s.message
            }), e.jsx("div", {
                className: "flex items-center justify-start gap-1",
                children: e.jsx("div", {
                    className: "text-token-text-tertiary text-sm leading-tight font-normal",
                    children: r ?? ""
                })
            })]
        })]
    })
}
function us() {
    const {feedItems: s, isModalOpen: a} = p();
    L.useEffect( () => {
        a && (g.setHasUnreadNotifications(!1),
        D.safePost("/notifications/feed/read", {
            authOption: _e.SendIfAvailable
        }))
    }
    , [a]);
    const t = x()
      , o = T()
      , r = h()
      , i = ke(r, "3325813340")
      , d = new Date
      , f = we(s, n => {
        const c = new Date(n.created_at);
        if (Fe(c))
            return "today";
        const l = Ue(d, c);
        return l <= 7 ? "last_7_days" : l <= 30 ? "last_30_days" : "more_than_30_days"
    }
    )
      , u = n => {
        switch (n) {
        case "today":
            return t.formatMessage({
                id: "zlkA39",
                defaultMessage: "Today"
            });
        case "last_7_days":
            return t.formatMessage({
                id: "FW89A4",
                defaultMessage: "Last 7 days"
            });
        case "last_30_days":
            return t.formatMessage({
                id: "2s3h/P",
                defaultMessage: "Last 30 days"
            });
        case "more_than_30_days":
            return t.formatMessage({
                id: "yArZiR",
                defaultMessage: "More than 30 days"
            })
        }
    }
    ;
    return e.jsx(Ie, {
        testId: "modal-notifications-feed",
        isOpen: a,
        onClose: () => {
            g.setIsModalOpen(!1)
        }
        ,
        type: "success",
        size: "custom",
        className: "max-w-3xl",
        children: e.jsxs("div", {
            className: "flex flex-col gap-y-10",
            children: [e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [e.jsx("h2", {
                    className: "text-2xl font-bold",
                    children: t.formatMessage({
                        id: "kWt8Cx",
                        defaultMessage: "Notifications"
                    })
                }), i && e.jsx(J, {
                    icon: e.jsx(Ee, {
                        className: "icon"
                    }),
                    onClick: () => {
                        o(Oe(Be.Notifications))
                    }
                    ,
                    label: t.formatMessage({
                        id: "mZVh0S",
                        defaultMessage: "Notifications settings"
                    })
                })]
            }), Object.entries(f).map( ([n,c]) => e.jsxs("div", {
                children: [e.jsx("h3", {
                    className: "text-lg font-bold",
                    children: u(n)
                }), c.map(l => e.jsx($e, {
                    item: l,
                    onClose: () => g.setIsModalOpen(!1)
                }, l.id))]
            }, n))]
        })
    })
}
function fs({showShareButton: s, showProfileDropdown: a, clientThreadId: t}) {
    const o = h()
      , r = fe(o, t)
      , i = Te(t)
      , d = x()
      , f = j(o, "1547743984")
      , [u,n,c,l,_] = Pe(t, m => [A.hasUserMessage(m), A.getGizmoId(m), Me(m), m?.title, m?.is_do_not_remember])
      , k = R( () => r.asyncStatus$()?.value)
      , q = L.useMemo( () => ze({
        clientThreadId: t,
        gizmoId: n,
        conversationTitle: l,
        conversationAsyncStatus: k,
        isDoNotRemember: _
    }), [t, n, l, k, _])
      , V = Re(t)
      , {prefetchSearchPromises: W} = z()
      , K = W != null
      , Q = f.get("show_share_button_text", !1)
      , w = d.formatMessage({
        id: "GizmoInformation.shareChat",
        defaultMessage: "Share"
    })
      , F = () => P.openSharingModal(i)
      , Y = ge(n)
      , $ = De();
    He();
    const {isUnauthenticated: U} = H();
    return e.jsxs(e.Fragment, {
        children: [S(o) ? e.jsx(he, {}) : null, S(o) && $?.includes("caterpillar") && e.jsx(me, {}), null, s && i && e.jsx(e.Fragment, {
            children: Q ? e.jsx(M, {
                onClick: F,
                icon: O,
                label: w,
                "data-testid": "share-chat-button",
                color: "ghost",
                className: "text-token-text-primary",
                style: {
                    viewTransitionName: "var(--vt_share_chat_wide_button)"
                },
                children: w
            }) : e.jsx(v, {
                label: d.formatMessage({
                    id: "CPEfES",
                    defaultMessage: "Share chat"
                }),
                children: e.jsx(b, {
                    "data-testid": "share-chat-button",
                    onClick: F,
                    icon: O,
                    style: {
                        viewTransitionName: "var(--vt_share_chat_compact_button)"
                    }
                })
            })
        }), e.jsxs("div", {
            className: "flex items-center",
            children: [!U && !n && V && !K && !u && e.jsx(e.Fragment, {
                children: e.jsx(xe, {
                    clientThreadId: t
                })
            }), e.jsx(pe, {}), i != null && !U ? e.jsx(Ge, {
                conversation: q,
                inMainScreen: !0,
                isActiveConversation: !0,
                inChatWindow: !0,
                children: e.jsx(be, {
                    "aria-label": d.formatMessage({
                        id: "9Mk/E3",
                        defaultMessage: "Open conversation options"
                    }),
                    "data-testid": "conversation-options-button"
                })
            }) : n && Y ? e.jsx(e.Fragment, {
                children: e.jsx(ve, {
                    gizmoId: n
                })
            }) : null, a && e.jsx(Ze, {
                clientThreadId: t
            })]
        })]
    })
}
const Ze = ({clientThreadId: s}) => {
    const a = h();
    return B.markStart("LoginOrProfileMenu"),
    B.markRendered("LoginOrProfileMenu"),
    e.jsxs(e.Fragment, {
        children: [!S(a) && e.jsx(es, {}), e.jsx(qe, {
            clientThreadId: s
        })]
    })
}
;
function Xe({onClick: s, className: a, testId: t}) {
    const r = x().formatMessage({
        id: "OFyxqj",
        defaultMessage: "New chat"
    });
    return e.jsx(v, {
        label: r,
        className: y("flex", a),
        children: e.jsx(b, {
            onClick: i => le(i, s),
            icon: ce,
            "aria-label": r,
            "data-testid": t,
            as: "link"
        })
    })
}
function gs({clientThreadId: s, hideNewChat: a=!1}) {
    const t = oe({
        clientThreadId: s,
        location: "Navigation actions"
    });
    return ie() ? e.jsxs("div", {
        className: "flex items-center",
        children: [e.jsx(Je, {}), !a && e.jsx(Xe, {
            onClick: t
        })]
    }) : null
}
function Je() {
    const s = x()
      , a = re()
      , {isUnauthenticated: t} = H()
      , o = G(ue, de, !1, !0);
    return t || a ? null : e.jsx(v, {
        label: s.formatMessage({
            id: "cElEQV",
            defaultMessage: "Open sidebar"
        }),
        className: "flex",
        children: e.jsx(b, {
            "aria-label": s.formatMessage({
                id: "pV/Etp",
                defaultMessage: "Open sidebar"
            }),
            onClick: () => {
                P.setSidebarOpen(!0)
            }
            ,
            icon: o
        })
    })
}
function es() {
    const s = h()
      , a = Ne()
      , t = ye()
      , o = Se(ss.signUpCta)
      , i = j(s, "3637408529").get("is_desktop_primary_auth_button_on_right", !1)
      , d = () => {
        a({
            authType: "login",
            callback: l => {
                E.logLogInButtonClicked({
                    location: "Chat header",
                    provider: l
                })
            }
        })
    }
      , f = () => {
        a({
            authType: "signup",
            callback: l => {
                E.logSignUpButtonClicked({
                    location: "Chat header",
                    provider: l
                })
            }
        })
    }
      , u = e.jsx(M, {
        onClick: d,
        color: t ? "primary" : "secondary",
        "data-testid": "login-button",
        className: y(!t && "screen-arch:hidden md:screen-arch:flex"),
        children: e.jsx(I, {
            id: "B1SN7b",
            defaultMessage: "Log in"
        })
    }, "login")
      , n = e.jsx(M, {
        color: t ? "secondary" : "primary",
        onClick: f,
        "data-testid": "signup-button",
        className: y(t && "screen-arch:hidden md:screen-arch:flex"),
        children: e.jsx(I, {
            ...o
        })
    }, "signup")
      , c = t ? [u, n] : [n, u];
    return e.jsx("div", {
        className: "flex items-center justify-center gap-2",
        children: i ? c.reverse() : c
    })
}
const ss = X({
    signUpCta: {
        id: "P6cySK",
        defaultMessage: "Sign up"
    }
});
export {fs as C, Je as E, Ze as L, gs as N, us as a, G as b, C as c, ds as d, Xe as e, es as f, ls as u};
//# sourceMappingURL=g8shiwm7jpd74xmd.js.map
