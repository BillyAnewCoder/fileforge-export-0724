import {R as k, h as w, d as L, r as o, f as j, j as e, M as p, m as F, a as U} from "./juy90og0wtbp77qa.js";
import {a7 as G, ag as v, D as N, C as W, by as q, dh as H, B as E, ar as O, R as I, c as K, e as X, P as D, dG as z, b0 as Q} from "./dc2xxjkicf2pz0mj.js";
import {aO as V, dm as Y, dn as J, ac as Z, dp as P, ad as $, M as ee, dq as te, dr as se, U as ae} from "./ckp56qklot786ulr.js";
import {u as re} from "./nqj34k5dky4x5suq.js";
const ne = "https://help.openai.com/en/articles/11481834"
  , oe = ({onClose: t}) => {
    const [s,C] = k.useState(2500)
      , [r,h] = k.useState(!1)
      , {prepareCheckoutSession: _, navigateToCheckout: b} = V()
      , g = G()
      , {initialBillingDetails: f} = re(g, !0)
      , S = g?.mustGetSubscriptionBillingCurrency("CreditPurchaseModal") ?? "USD"
      , d = v()
      , u = w()
      , {data: l} = L({
        queryKey: ["creditPurchaseRateCard"],
        queryFn: () => I.safeGet("/subscriptions/credit-purchase-rate-card"),
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
        refetchOnMount: !1
    })
      , T = o.useCallback(async () => {
        if (!r) {
            h(!0);
            try {
                const c = g?.id;
                if (!c)
                    throw new Error("No account_id found");
                const B = await _({
                    credit_purchase_data: {
                        quantity: s,
                        unit: "credit",
                        account_id: c
                    },
                    billing_details: f
                });
                await b(B)
            } catch (c) {
                N.addError(c),
                d.warning(u.formatMessage(m.paymentErrorWarning), {
                    hasCloseButton: !0
                })
            } finally {
                h(!1)
            }
        }
    }
    , [f, u, r, b, s, _, d, g])
      , M = Y(s, 300)
      , A = c => !l || !l[c].price ? "N/A" : Math.round(M / parseFloat(l[c].price)).toLocaleString();
    return e.jsxs(W, {
        isOpen: !0,
        onClose: t,
        type: "success",
        size: "custom",
        noPadding: !0,
        className: "max-w-xl",
        showCloseButton: !0,
        testId: "modal-credit-purchase-modal",
        children: [e.jsx(q.Header, {
            title: e.jsx(p, {
                ...m.title
            })
        }), e.jsxs("div", {
            className: "flex flex-col px-6",
            children: [e.jsx("div", {
                className: "text-token-text-secondary text-sm",
                children: e.jsx(p, {
                    ...m.description,
                    values: {
                        link: c => e.jsx(H, {
                            href: ne,
                            target: "_blank",
                            children: c
                        })
                    }
                })
            }), e.jsx("div", {
                className: "mt-6",
                children: e.jsx(ie, {
                    minCredits: 500,
                    maxCredits: 1e5,
                    increment: 250,
                    centsPerCredit: 4,
                    currency: S,
                    numCredits: s,
                    setNumCredits: C
                })
            }), l && e.jsxs(F.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "bg-token-bg-tertiary text-token-text-secondary mt-4 flex w-full gap-2 rounded-lg p-3 text-sm",
                children: [e.jsx(J, {}), e.jsx(p, {
                    ...m.amountToAddDescription,
                    values: {
                        deepResearchCount: A("deep_research_completion"),
                        gpto3ChatCount: A("chat_completion_o3"),
                        gpt45ChatCount: A("chat_completion_4_5")
                    }
                })]
            })]
        }), e.jsx(q.Actions, {
            className: "sm:p-2 md:p-6",
            secondaryButton: e.jsx(E, {
                disabled: r,
                onClick: t,
                color: "secondary",
                children: e.jsx(p, {
                    ...m.cancel
                })
            }),
            primaryButton: e.jsx(E, {
                loading: r,
                onClick: () => T(),
                color: "primary",
                children: e.jsx(p, {
                    ...m.next
                })
            })
        })]
    })
}
;
function ie({numCredits: t, minCredits: a, maxCredits: i, increment: n, centsPerCredit: x, currency: y, setNumCredits: s}) {
    const C = o.useRef(null);
    o.useEffect( () => {
        C.current?.focus()
    }
    , [C]);
    const r = o.useRef(null)
      , h = o.useRef(0)
      , _ = o.useCallback(d => {
        s(u => Z(u + d, a, i))
    }
    , [i, a, s])
      , b = o.useCallback(d => {
        const M = 300 - d * 50;
        return M > 25 ? M : 25
    }
    , [])
      , g = o.useCallback(d => {
        _(d),
        h.current = 0;
        const u = () => {
            h.current += 1,
            _(d);
            const l = b(h.current);
            r.current = setTimeout(u, l)
        }
        ;
        r.current = setTimeout(u, b(h.current))
    }
    , [_, b])
      , f = o.useCallback( () => {
        r.current && (clearTimeout(r.current),
        r.current = null)
    }
    , [])
      , S = t * x / 100;
    return e.jsxs("div", {
        className: "mb-3 flex w-full flex-col",
        children: [e.jsx("label", {
            className: "mb-1 flex text-base font-medium",
            htmlFor: "Credits",
            children: e.jsx(p, {
                ...m.amountToAdd
            })
        }), e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [e.jsxs("div", {
                className: "relative w-full",
                children: [e.jsx("span", {
                    className: "text-token-text-secondary pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-sm",
                    children: e.jsx(p, {
                        ...m.numCredits,
                        values: {
                            numCredits: t
                        }
                    })
                }), e.jsx("input", {
                    ref: C,
                    name: "Credits",
                    value: S.toLocaleString("en-US", {
                        style: "currency",
                        currency: y,
                        maximumFractionDigits: 2
                    }),
                    disabled: !0,
                    autoFocus: !0,
                    tabIndex: 0,
                    className: "bg-token-bg-primary text-token-text-primary m-0 h-12 w-full appearance-none rounded-lg border border-gray-200 px-2 py-0 ps-5 text-start text-sm shadow-none ring-transparent outline-hidden focus:border-black focus:ring-black dark:border-gray-700 dark:focus:border-white dark:focus:ring-white"
                })]
            }), e.jsxs("div", {
                className: "flex gap-2",
                children: [e.jsx(P, {
                    disabled: t <= a,
                    onMouseDown: () => g(-n),
                    onMouseUp: f,
                    onMouseLeave: f,
                    children: e.jsx($, {
                        className: O("icon", t <= a && "text-token-text-tertiary")
                    })
                }), e.jsx(P, {
                    disabled: t >= i,
                    onMouseDown: () => g(n),
                    onMouseUp: f,
                    onMouseLeave: f,
                    children: e.jsx(ee, {
                        className: "icon"
                    })
                })]
            })]
        })]
    })
}
const m = j({
    title: {
        id: "components.business.CreditPurchaseModal.title",
        defaultMessage: "Buy more credits for your team"
    },
    description: {
        id: "components.business.CreditPurchaseModal.description",
        defaultMessage: "Give your team continued access to advanced features after hitting plan limits. Credits valid for 12 months. Advanced voice mode excluded. <link>View rate card</link>."
    },
    amountToAdd: {
        id: "components.business.CreditPurchaseModal.amountToAdd",
        defaultMessage: "Amount to add"
    },
    amountToAddDescription: {
        id: "components.business.CreditPurchaseModal.amountToAddDescription",
        defaultMessage: "Equal to {deepResearchCount} deep research tasks, {gpto3ChatCount} o3 messages, or {gpt45ChatCount} GPT-4.5 messages."
    },
    numCredits: {
        id: "components.business.CreditPurchaseModal.numCredits",
        defaultMessage: "{numCredits, plural, one {# credit} other {# credits}}"
    },
    paymentErrorWarning: {
        id: "components.business.CreditPurchaseModal.paymentErrorWarning",
        defaultMessage: "The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."
    },
    cancel: {
        id: "components.business.CreditPurchaseModal.cancel",
        defaultMessage: "Cancel"
    },
    next: {
        id: "components.business.CreditPurchaseModal.next",
        defaultMessage: "Next"
    }
})
  , Ce = t => {
    switch (t) {
    case "wham":
        return "wham";
    case "deep_research":
        return "deep_research";
    case "image_gen":
        return "image_gen";
    case "gpt-4-5":
        return "gpt-4-5";
    default:
        return null
    }
}
  , de = K(t => ({
    hasRequestedCredits: te(),
    setHasRequestedCredits: a => t( () => ({
        hasRequestedCredits: a
    }))
}))
  , ce = () => {
    const t = v()
      , a = w()
      , {hasRequestedCredits: i, setHasRequestedCredits: n} = de()
      , {mutate: x, isPending: y} = U({
        mutationFn: s => I.safePost("/credits/pleas", {
            requestBody: {
                product: s
            }
        }),
        onError: s => {
            N.addError(new Error("Error occurred while submitting credit plea request",{
                cause: s
            })),
            t.danger(R.errorRequestCredits, {
                toastId: "teams_credit_plea_button"
            })
        }
        ,
        onSuccess: () => {
            n(!0),
            t.success(a.formatMessage(R.successRequestCredits)),
            se(),
            ae.setThreadModelPickerAlertDot(!1)
        }
    });
    return {
        submitCreditPleaRequest: x,
        hasRequestedCredits: i,
        isPending: y
    }
}
  , he = ({trigger: t, ...a}) => {
    const i = X();
    o.useEffect( () => {
        D.logEventWithStatsig("ChatGPT Credits: Add Credits Button Shown", "chatgpt_credits_add_credits_button_shown", {
            trigger: t
        })
    }
    , [t]);
    const n = () => {
        D.logEventWithStatsig("ChatGPT Credits: Add Credits Clicked", "chatgpt_credits_add_credits_clicked"),
        Q(i, oe)
    }
    ;
    return e.jsx(E, {
        color: "primary",
        onClick: n,
        ...a,
        children: e.jsx(p, {
            ...R.addCredits
        })
    })
}
  , ge = ({creditConsumingProduct: t, trigger: a, ...i}) => {
    const n = w()
      , {submitCreditPleaRequest: x, isPending: y, hasRequestedCredits: s} = ce();
    o.useEffect( () => {
        D.logEventWithStatsig("ChatGPT Credits: Notify Admin Button Shown", "chatgpt_credits_notify_admin_button_shown", {
            trigger: a,
            creditConsumingProduct: t
        })
    }
    , [t, a]);
    const C = () => {
        s || (x(t),
        D.logEventWithStatsig("ChatGPT Credits: Notify Admin Clicked", "chatgpt_credits_notify_admin_clicked"))
    }
      , r = e.jsx(E, {
        loading: y,
        color: s ? "secondary" : "primary",
        disabled: s,
        onClick: C,
        ...i,
        children: s ? n.formatMessage(R.requested) : n.formatMessage(R.notifyAdmin)
    });
    return s ? e.jsx(z, {
        className: "w-auto whitespace-nowrap",
        withArrow: !0,
        labelTextAlign: "left",
        contentClassName: "w-[180px]",
        side: "right",
        label: n.formatMessage(R.alreadyRequested),
        children: r
    }) : r
}
  , R = j({
    notifyAdmin: {
        id: "prompt-textarea.teamsCreditRequestBanner.notifyAdmin",
        defaultMessage: "Notify admin"
    },
    addCredits: {
        id: "prompt-textarea.teamsCreditRequestBanner.addCredits",
        defaultMessage: "Add credits"
    },
    requested: {
        id: "prompt-textarea.teamsCreditRequestBanner.requested",
        defaultMessage: "Requested"
    },
    errorRequestCredits: {
        id: "prompt-textarea.teamsCreditRequestBanner.error",
        defaultMessage: "Error occurred while submitting credit request"
    },
    successRequestCredits: {
        id: "prompt-textarea.teamsCreditRequestBanner.success",
        defaultMessage: "Request sent to your admin"
    },
    alreadyRequested: {
        id: "prompt-textarea.teamsCreditRequestBanner.alreadyRequested",
        defaultMessage: "You’ve already notified your admin"
    }
});
export {he as A, ge as C, oe as a, Ce as g};
//# sourceMappingURL=hort3ndd4wla0a2j.js.map
