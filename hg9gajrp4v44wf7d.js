import {h as v, r as c, j as e, M as l, f as _} from "./juy90og0wtbp77qa.js";
import {aC as i, ag as I, bd as O, b8 as f, b9 as M, D as P, C as B, iB as k, B as m, dc as N} from "./dc2xxjkicf2pz0mj.js";
import {aw as F, ax as T, ay as U, az as z, aA as D, ae as C, U as G} from "./ckp56qklot786ulr.js";
function q() {
    return D(C.CookieManagement) ? e.jsx(L, {
        onClose: () => {
            G.closeModal(C.CookieManagement)
        }
    }) : null
}
function L({onClose: d}) {
    const s = v()
      , u = I()
      , {isUnauthenticated: t} = O()
      , {data: p} = F()
      , r = p?.serverPrimedAllowBrowserStorageValue ?? !1
      , j = p?.isStorageComplianceEnabled ?? !1
      , A = T({
        serverPrimedAllowBrowserStorageValue: r,
        enabled: j && !t
    })
      , [w,g] = c.useState(r)
      , E = t ? w : A
      , n = o => {
        f.setBooleanCookie(M.AllowNonessential, o, {
            maxAge: z,
            domain: N
        }),
        t ? g(o) : S.mutateAsync({
            analytics_cookies_accepted: o
        }, {
            onSuccess() {
                u.success(s.formatMessage(a.updateSuccess))
            },
            onError() {
                u.danger(a.updateFailure, {
                    toastId: "manage_cookies_modal"
                })
            }
        })
    }
    ;
    c.useEffect( () => {
        if (t) {
            const o = f.getBooleanCookie(M.AllowNonessential) ?? r;
            g(o)
        }
    }
    , [t, r]),
    c.useEffect( () => {
        P.addAction("privacy_policy.show_manage_cookies_modal")
    }
    , []);
    const S = U();
    return e.jsx(B, {
        testId: "modal-manage-cookies",
        type: "success",
        isOpen: !0,
        onClose: d,
        title: s.formatMessage(a.title),
        showCloseButton: !0,
        children: e.jsxs("div", {
            className: "text-token-text-secondary text-sm",
            children: [e.jsx(l, {
                ...a.description,
                values: {
                    cookiePolicy: o => e.jsx("a", {
                        className: "underline",
                        href: "https://openai.com/policies/privacy-policy",
                        children: o
                    })
                }
            }), e.jsxs(h, {
                children: [e.jsxs(x, {
                    children: [e.jsx(y, {
                        children: s.formatMessage(a.preference1title)
                    }), e.jsx(b, {
                        children: s.formatMessage(a.preference1desc)
                    })]
                }), e.jsx(k, {
                    checked: !0,
                    disabled: !0,
                    "aria-label": s.formatMessage(a.preference1toggle)
                })]
            }), e.jsxs(h, {
                children: [e.jsxs(x, {
                    children: [e.jsx(y, {
                        children: s.formatMessage(a.preference2title)
                    }), e.jsx(b, {
                        children: s.formatMessage(a.preference2desc)
                    })]
                }), e.jsx(k, {
                    onCheckedChange: n,
                    checked: E,
                    "aria-label": s.formatMessage(a.preference2toggle)
                })]
            }), e.jsxs("div", {
                className: "flex justify-end gap-3 border-t border-black/10 pt-4 dark:border-white/10",
                children: [e.jsx(m, {
                    color: "secondary",
                    onClick: () => n(!1),
                    children: e.jsx(l, {
                        ...a.reject
                    })
                }), e.jsx(m, {
                    color: "secondary",
                    onClick: () => n(!0),
                    children: e.jsx(l, {
                        ...a.accept
                    })
                })]
            })]
        })
    })
}
const h = i.div`flex gap-4 border-t last:border-b border-black/10 dark:border-white/10 py-4 mt-4 text-token-text-secondary`
  , x = i.div`flex gap-2 flex-col `
  , y = i.p`font-semibold text-sm text-token-text-primary`
  , b = i.p`text-xs`
  , a = _({
    title: {
        id: "ManageCookiesModal.title",
        defaultMessage: "Manage cookies"
    },
    description: {
        id: "ManageCookiesModal.description",
        defaultMessage: "OpenAI uses cookies to improve your experience and analyze site traffic. For more information, read our <cookiePolicy>cookie policy</cookiePolicy>."
    },
    preference1title: {
        id: "ManageCookiesModal.preference1title",
        defaultMessage: "Essential"
    },
    preference1desc: {
        id: "ManageCookiesModal.preference1desc.0",
        defaultMessage: "These cookies are required to operate our Services. For example, they allow us to authenticate users or enable specific features within the Services, including for security purposes."
    },
    preference1toggle: {
        id: "ManageCookiesModal.preference1toggle",
        defaultMessage: "Allow essential cookies"
    },
    preference2title: {
        id: "ManageCookiesModal.preference2title",
        defaultMessage: "Analytics"
    },
    preference2desc: {
        id: "ManageCookiesModal.preference2desc.0",
        defaultMessage: "These cookies help us analyze and understand how our Services perform and are used, such as the number of users, how they interact with our Services, and time spent using the Services."
    },
    preference2toggle: {
        id: "ManageCookiesModal.preference2toggle",
        defaultMessage: "Allow analytics cookies"
    },
    reject: {
        id: "ManageCookiesModal.reject",
        defaultMessage: "Reject all"
    },
    accept: {
        id: "ManageCookiesModal.accept",
        defaultMessage: "Accept all"
    },
    updateSuccess: {
        id: "ManageCookiesModal.updateSuccess",
        defaultMessage: "Your cookie preferences were updated successfully"
    },
    updateFailure: {
        id: "ManageCookiesModal.updateFailure",
        defaultMessage: "Unable to update cookie preferences. Try again later."
    }
});
export {L as M, q as a};
//# sourceMappingURL=hg9gajrp4v44wf7d.js.map
