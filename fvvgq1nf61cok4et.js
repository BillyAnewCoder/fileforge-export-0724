import {r as h, h as b, j as e, M as f, a as C} from "./juy90og0wtbp77qa.js";
import {a7 as S, C as R, ag as I, B as y, h8 as U, jZ as u, aF as j, ar as A, en as D, aG as E, eW as L} from "./dc2xxjkicf2pz0mj.js";
import {S as O} from "./bcuewx2asswh85ed.js";
import {S as z} from "./nvghkpv0zy449sx8.js";
import {ad as X} from "./ckp56qklot786ulr.js";
function T({accountId: a, connectionId: n, isOpen: t, objectType: s, onClose: i}) {
    const [o,c] = h.useState(null)
      , [x,g] = h.useState([])
      , [p,d] = h.useState(!1)
      , [l,r] = h.useState(!1)
      , m = S()
      , _ = b()
      , k = m?.isPersonalAccount() ?? !1
      , N = async P => {
        d(!0),
        r(!1);
        try {
            const M = k ? await u.user_connection_list_item_scopes(n, s, P) : await u.admin_connection_list_item_scopes(a, n, s, P);
            c(M.page_token ?? null),
            g(F => [...F, ...M.object_selections.map(B => B.object_handle)])
        } catch {
            r(!0)
        } finally {
            d(!1)
        }
    }
      , w = () => {
        c(null),
        d(!1),
        g([]),
        r(!1),
        N(null)
    }
      , v = h.useRef(!1);
    return h.useEffect( () => {
        v.current || (v.current = !0,
        w())
    }
    , []),
    e.jsx(R, {
        testId: "modal-connection-blocked-items",
        isOpen: t,
        onClose: i,
        type: "success",
        size: "custom",
        className: "max-w-xl",
        showCloseButton: !0,
        title: _.formatMessage({
            id: "BVUVRc",
            defaultMessage: "Block items"
        }),
        children: e.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [e.jsx("p", {
                className: "text-token-text-secondary text-sm",
                children: e.jsx(f, {
                    id: "LYXIh1",
                    defaultMessage: "Found something that shouldn't be synced? You can block items here to prevent them from being synced or shown in search results."
                })
            }), e.jsx(Z, {
                accountId: a,
                connectionId: n,
                objectType: s,
                onItemBlocked: w
            }), e.jsx(q, {
                accountId: a,
                connectionId: n,
                hasError: l,
                hasMoreItems: o != null,
                isLoading: p,
                loadMoreItems: () => N(o),
                objectHandles: x,
                objectType: s,
                onItemUnblocked: w
            })]
        })
    })
}
function q({connectionId: a, accountId: n, objectHandles: t, isLoading: s, hasError: i, hasMoreItems: o, loadMoreItems: c, onItemUnblocked: x, objectType: g}) {
    return e.jsxs("div", {
        children: [e.jsx("h3", {
            className: "mb-2 font-medium",
            children: e.jsx(f, {
                id: "gimLZo",
                defaultMessage: "Currently blocked items"
            })
        }), i ? e.jsxs("div", {
            className: "flex flex-col items-center justify-center gap-2",
            children: [e.jsx("div", {
                className: "text-token-text-error",
                children: e.jsx(f, {
                    id: "3BZzpX",
                    defaultMessage: "Something went wrong"
                })
            }), e.jsx("div", {
                children: e.jsx(y, {
                    color: "secondary",
                    icon: z,
                    onClick: c,
                    children: e.jsx(f, {
                        id: "fFd9RR",
                        defaultMessage: "Try again"
                    })
                })
            })]
        }) : e.jsxs(e.Fragment, {
            children: [t.length > 0 || s ? e.jsx("ul", {
                className: "flex flex-col gap-1",
                children: t.map(p => e.jsx(K, {
                    connectionId: a,
                    accountId: n,
                    objectType: g,
                    objectHandle: p,
                    onItemUnblocked: x
                }, p))
            }) : e.jsx("p", {
                className: "text-token-text-secondary text-sm",
                children: e.jsx(f, {
                    id: "IGg+fh",
                    defaultMessage: "No items are currently being blocked."
                })
            }), s ? e.jsx(U, {
                lines: 1
            }) : o && e.jsx(y, {
                color: "ghost",
                icon: O,
                onClick: c,
                children: e.jsx(f, {
                    id: "g+Tw+y",
                    defaultMessage: "See more"
                })
            })]
        })]
    })
}
function K({connectionId: a, accountId: n, objectHandle: t, onItemUnblocked: s, objectType: i}) {
    const o = I()
      , c = b();
    return e.jsx(V, {
        scopeChangeIcon: X,
        scopeChangeLabel: c.formatMessage({
            id: "yaj/om",
            defaultMessage: "Unblock item"
        }),
        scopeChangeTarget: "include",
        objectHandle: t,
        objectType: i,
        onError: () => {
            o.danger(c.formatMessage({
                id: "yRm6yX",
                defaultMessage: "Failed to unblock item. Please try again later."
            }), {
                loggingTitle: "Failed to unblock item. Please try again later.",
                toastId: "blocked_items_modal",
                loggingDescription: "Failed to unblock item"
            })
        }
        ,
        onScopeUpdated: () => {
            o.success(c.formatMessage({
                id: "Xot/uQ",
                defaultMessage: "Item successfully unblocked."
            })),
            s()
        }
        ,
        connectionId: a,
        accountId: n
    })
}
function V({connectionId: a, accountId: n, objectType: t, objectHandle: s, scopeChangeTarget: i, scopeChangeLabel: o, scopeChangeIcon: c, onScopeUpdated: x, onError: g}) {
    const d = S()?.isPersonalAccount() ?? !1
      , [l,r] = h.useState(!1)
      , {isPending: m, mutate: _} = C({
        mutationFn: async () => i === "exclude" ? d ? await u.user_connection_block_items(a, t, [s]) : await u.admin_connection_block_items(n, a, t, [s]) : d ? await u.user_connection_unblock_items(a, t, [s]) : await u.admin_connection_unblock_items(n, a, t, [s]),
        mutationKey: ["admin_connection_update_item_scope", a, t, i, s],
        onSuccess: () => {
            x(),
            r(!1)
        }
        ,
        onError: () => {
            r(!1),
            g()
        }
    });
    return e.jsxs("li", {
        className: "group hover:bg-token-surface-hover flex w-full flex-row rounded-xl px-4 py-1 text-sm",
        children: [e.jsx("span", {
            className: "flex-1",
            children: s
        }), e.jsxs(j.Root, {
            open: l || m,
            onOpenChange: r,
            children: [e.jsx(j.Trigger, {
                className: A("h-6 flex-0 group-hover:visible", !l && "invisible"),
                children: e.jsx(D, {
                    className: "icon-sm"
                })
            }), e.jsx(j.Portal, {
                children: e.jsx(j.Content, {
                    size: "small",
                    children: e.jsx(j.Item, {
                        icon: m ? E : c,
                        onSelect: () => _(),
                        disabled: m,
                        children: o
                    })
                })
            })]
        })]
    })
}
function Z({accountId: a, connectionId: n, objectType: t, onItemBlocked: s}) {
    const i = I()
      , o = b();
    return e.jsxs("div", {
        className: "flex flex-col gap-2",
        children: [e.jsx("h3", {
            className: "font-medium",
            children: e.jsx(f, {
                id: "dU+IPT",
                defaultMessage: "Block an item"
            })
        }), e.jsx("p", {
            className: "text-token-text-secondary text-sm",
            children: e.jsx(f, {
                id: "y6yn/t",
                defaultMessage: "Enter the ID or URL of the item you want to block."
            })
        }), e.jsx(G, {
            accountId: a,
            connectionId: n,
            objectType: t,
            onSuccess: () => {
                i.success(o.formatMessage({
                    id: "Q+KnAh",
                    defaultMessage: "Item successfully blocked."
                })),
                s()
            }
            ,
            onError: () => {
                i.danger(o.formatMessage({
                    id: "UH92LU",
                    defaultMessage: "Failed to block item. Please try again later."
                }), {
                    toastId: "blocked_items_modal",
                    loggingTitle: "Failed to block item. Please try again later.",
                    loggingDescription: "Toast message shown when an item (e.g. file, channel, document, etc.) that the admin requested to block from syncing was unable to be blocked."
                })
            }
            ,
            targetScopeSelection: "exclude",
            buttonLabel: e.jsx(f, {
                id: "5FIVI9",
                defaultMessage: "Block"
            })
        })]
    })
}
function G({accountId: a, buttonLabel: n, connectionId: t, objectType: s, onError: i, onSuccess: o, placeholder: c, targetScopeSelection: x}) {
    const g = S()
      , p = b()
      , d = g?.isPersonalAccount() ?? !1
      , [l,r] = h.useState("")
      , {isPending: m, mutate: _} = C({
        mutationFn: async () => {
            if (l.trim())
                return x === "exclude" ? d ? await u.user_connection_block_items(t, s, [l]) : await u.admin_connection_block_items(a, t, s, [l]) : d ? await u.user_connection_unblock_items(t, s, [l]) : await u.admin_connection_unblock_items(a, t, s, [l])
        }
        ,
        mutationKey: ["admin_connection_update_item_scope", t, s, x, l],
        onSuccess: () => {
            o(),
            r("")
        }
        ,
        onError: i
    });
    return e.jsx("form", {
        onSubmit: k => {
            k.preventDefault(),
            l.trim() && _()
        }
        ,
        children: e.jsxs("div", {
            className: "flex w-full flex-row gap-2",
            children: [e.jsx(L, {
                type: "text",
                className: "flex-1",
                name: "objectHandle",
                ariaLabel: "object handle",
                value: l,
                onChange: k => r(k.target.value),
                placeholder: c ?? p.formatMessage({
                    id: "sPUyj/",
                    defaultMessage: "ID or URL"
                }),
                disabled: m
            }), e.jsx(y, {
                color: "primary",
                type: "button",
                onClick: () => _(),
                loading: m,
                disabled: m || !l.trim(),
                className: "flex-0",
                children: n
            })]
        })
    })
}
export {T as C, V as I, G as U};
//# sourceMappingURL=fvvgq1nf61cok4et.js.map
