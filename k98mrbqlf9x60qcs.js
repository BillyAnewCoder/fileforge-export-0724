import {h as I, j as e, M as o, r as M, n as ge, e as Ee} from "./juy90og0wtbp77qa.js";
import {aG as xe, aH as w, aI as G, aJ as ve, aK as x, aL as Ae, aM as K, U as ke, aN as U, aO as he, e as fe, aP as pe, aQ as Le, ac as Be, aR as Oe, B as oe, aS as le, aT as R, aU as ie, aV as ce} from "./ckp56qklot786ulr.js";
import {aC as Re, ar as Q, a7 as X, e as Ue, eJ as Ie, ag as ye, P as k, C as re, cz as De, cC as H, D as J} from "./dc2xxjkicf2pz0mj.js";
import {c as Fe} from "./iej0cupg2dqkmejt.js";
import {u as Z, P as We} from "./ffq4y6btupy3ovkt.js";
import {u as Se} from "./nqj34k5dky4x5suq.js";
const y = Ae;
var je = (n => (n.FLEXIBLE = "month",
n.ANNUAL = "year",
n))(je || {});
const Y = Fe(je)
  , Pe = "team-pricing-seat-selection"
  , z = "team-pricing-seat-selection-direct"
  , $ = "numSeats"
  , q = "selectedPlan"
  , me = "promo_campaign"
  , Ke = n => {
    const r = M.useRef(!1)
      , S = ge()
      , f = S.hash.split("#")[1] === Pe || S.hash.split("#")[1] === z
      , u = X()
      , i = !r.current && f && u && !n
      , t = Ue()
      , p = Ie(t, "4250628994", {
        disableExposureLog: !i
    }).get("enabled", !1)
      , {initialBillingDetails: g} = Se(u, !0)
      , m = K()
      , {data: a, isLoading: d} = Z(m ?? "");
    M.useEffect( () => {
        p && i && (ke.setPurchaseWorkspaceData({
            minimumSeats: U,
            billingDetails: g,
            promoData: a
        }),
        r.current = !0)
    }
    , [u, g, f, n, m, a, d, p, i])
}
  , de = Re.p`text-base font-medium mb-3`
  , Te = ({isOpen: n, onClose: r, onSubmit: S, minimumSeats: f, billingDetails: u, isDirectFlow: i=!1, promoData: t=void 0}) => {
    const p = X()
      , g = K()
      , {data: m} = Z(g ?? "");
    !t && m && (t = m);
    const a = t?.coupon === w && t.state === "eligible"
      , d = new URLSearchParams(window.location.search)
      , j = d.get($)
      , l = d.get(q)
      , h = a ? "month" : l && Y(l) ? l : "month"
      , [s,N] = M.useState(h)
      , [E,L] = M.useState(!1)
      , P = I()
      , [C,ee] = M.useState(j && !isNaN(parseInt(j, 10)) ? parseInt(j, 10) : Math.max(Le, f))
      , D = Math.max(f, U)
      , {flexibleBillingPlan: be, annualBillingPlan: te} = xe(u.currency);
    let T = be;
    a && (T = {
        ...T,
        cost: {
            ...y.team1dollarMonthlyCost
        },
        costStructure: {
            ...y.team1dollarMonthlyStructure,
            defaultMessage: `then ${P.formatMessage(T.currencySign)}${T.monthlyCost} monthly per seat`,
            id: "promo.team1dollar.monthlyPlanStructure",
            description: "Subsequent pricing description for team1dollar promo. Describing the monthly then the annual price after."
        }
    });
    const B = t?.coupon === w && t.state === "not_eligible"
      , O = t?.coupon === w && t.state === "temporary_disabled"
      , se = t?.coupon === w && t.state === "offline"
      , b = Be(isNaN(C) ? 0 : C, D, Oe)
      , v = M.useMemo( () => p?.subscriptionAnalyticsParams, [p]);
    M.useEffect( () => {
        k.logEvent("Account Pay: Select Team Plan Modal Show", v)
    }
    , [v]);
    const ae = c => {
        switch (c) {
        case "month":
            k.logEvent("Account Pay: Team Plan Selection Clicked", {
                ...v,
                buttonType: "Continue",
                numberOfSeats: C,
                planLength: ce.MONTHLY
            });
            break;
        case "year":
            k.logEvent("Account Pay: Select Team Plan Modal Clicked", {
                ...v,
                buttonType: "Continue",
                numberOfSeats: C,
                planLength: ce.ANNUAL
            });
            break
        }
    }
      , ne = (c, A) => {
        k.logEventWithStatsig("Account Pay: Select Team Plan Modal Clicked", "chatgpt_select_team_plan_modal_continue_to_billing_clicked", {
            ...v,
            buttonType: "Continue",
            numberOfSeats: A,
            planLength: c
        }),
        J.addAction("chatgpt_funnel.team_plan_modal_checkout_initiated", {
            planLength: c,
            numberOfSeats: A.toString(),
            accountId: p?.id
        }),
        t?.coupon === w && t.state === "eligible" && We.logCouponApplied(t.coupon)
    }
      , F = () => {
        k.logEvent("Account Pay: Select Team Plan Modal Dismiss", v)
    }
      , _ = ge()
      , W = M.useMemo( () => _.hash.split("#")[1] === z, [_.hash]);
    return M.useEffect( () => {
        const c = new URLSearchParams;
        c.set($, b.toString()),
        c.set(q, s),
        t?.coupon && c.set(me, t.coupon);
        const A = i || W ? `#${z}` : `#${Pe}`
          , Me = `${_.pathname}?${c.toString()}${A}`
          , V = new URL(window.location.href).searchParams
          , Ne = V.get($) === b.toString()
          , _e = V.get(q) === s
          , we = t?.coupon == null || V.get(me) === t.coupon
          , Ce = window.location.hash === A;
        (!Ne || !_e || !we || !Ce) && window.history.pushState({
            from: _.pathname + _.search
        }, "", Me)
    }
    , [b, i, W, _.pathname, _.search, _.hash, s, t?.coupon]),
    i || W ? e.jsx(re, {
        testId: "modal-workspace-purchase",
        type: "success",
        isOpen: n,
        onClose: () => {
            r(),
            F()
        }
        ,
        size: "fullscreen",
        noPadding: !0,
        removePopoverStyling: !0,
        showCloseButton: !0,
        children: e.jsxs("div", {
            className: "grid grid-flow-row grid-cols-1 md:h-full md:grid-cols-2",
            children: [e.jsx("div", {
                className: "flex-column col-span-1 flex justify-center p-5 md:grid-cols-2",
                children: e.jsxs("div", {
                    className: "flex w-full max-w-[400px] flex-col items-center",
                    children: [e.jsx(De, {
                        className: "mt-8 mb-6 h-8 w-8 md:fixed md:start-4 md:top-4 md:mt-0 md:h-6 md:w-6"
                    }), (B || O || se) && e.jsx("div", {
                        className: "mb-4 w-full",
                        children: e.jsx(oe, {
                            content: P.formatMessage(B ? y.team1dollarNotEligible : O ? y.team1dollarTemporarilyDisabled : y.team1dollarOffline),
                            type: "info"
                        })
                    }), e.jsx("div", {
                        className: "mb-8 text-3xl font-medium md:mt-[120px]",
                        children: e.jsx(o, {
                            id: "selectTeamPlanModal.title",
                            defaultMessage: "Pick your plan"
                        })
                    }), e.jsxs(le, {
                        className: Q("col-span-3 mb-6 grid w-full gap-4 md:col-span-2", "md:grid-cols-2"),
                        defaultValue: s,
                        onValueChange: c => {
                            Y(c) && (N(c),
                            ae(c))
                        }
                        ,
                        children: [e.jsx(R, {
                            billingType: "year",
                            ...te,
                            selectedValue: s,
                            hideSavingsMessage: a,
                            hideDetails: !0
                        }), e.jsx(R, {
                            billingType: "month",
                            ...T,
                            selectedValue: s,
                            hideDetails: !0,
                            showWelcomeOfferLabel: t?.state === "eligible",
                            promoDisclaimer: t?.state === "eligible" && e.jsx(o, {
                                ...y.team1dollarPromoDisclaimer,
                                values: {
                                    currencySign: P.formatMessage(T.currencySign),
                                    cost: T.monthlyCost
                                }
                            })
                        })]
                    }), e.jsx(ie, {
                        numSeats: C,
                        minSeats: D,
                        setNumSeats: ee
                    }), e.jsx("div", {
                        className: "text-token-text-secondary self-start text-xs",
                        children: P.formatMessage({
                            id: "selectTeamPlanModal.seatsDescription",
                            defaultMessage: "Add more seats at any time. Minimum of {minSeats} seats."
                        }, {
                            minSeats: U
                        })
                    })]
                })
            }), e.jsx("div", {
                className: "col-span-3 flex h-full flex-col items-center overflow-hidden p-6 md:col-span-1 md:shadow-lg",
                children: e.jsxs("div", {
                    className: "flex w-full max-w-[400px] flex-col md:mt-[120px]",
                    children: [e.jsx(de, {
                        className: "mb-8 text-xl font-medium",
                        children: e.jsx(o, {
                            ...x.summaryTitle
                        })
                    }), e.jsx(ue, {
                        numSeats: b,
                        selectedPlan: s,
                        billingDetails: u,
                        totalLabel: x.allPlansTodayTotal,
                        billDate: e.jsx(o, {
                            ...x.today
                        }),
                        promoData: t
                    }), e.jsx(H, {
                        title: P.formatMessage(x.continueToBillingButton),
                        onClick: async () => {
                            L(!0),
                            ne(s, b),
                            await S(s, b),
                            L(!1)
                        }
                        ,
                        disabled: !1,
                        loading: E,
                        color: "green",
                        className: "w-full rounded-xl"
                    }), e.jsx(H, {
                        title: P.formatMessage(x.cancel),
                        onClick: () => {
                            r(),
                            F()
                        }
                        ,
                        color: "ghost",
                        className: "mt-4 w-full rounded-xl"
                    })]
                })
            })]
        })
    }) : e.jsxs(re, {
        testId: "modal-select-team-plan",
        type: "success",
        isOpen: n,
        onClose: () => {
            r(),
            F()
        }
        ,
        size: "custom",
        noPadding: !0,
        removePopoverStyling: !0,
        className: "max-w-4xl",
        showCloseButton: !0,
        hasSeparator: !0,
        title: P.formatMessage(x.selectTeamPlanModalTitle),
        children: [(B || O || se) && e.jsx("div", {
            className: "px-5 pt-4",
            children: e.jsx(oe, {
                content: P.formatMessage(B ? y.team1dollarNotEligible : O ? y.team1dollarTemporarilyDisabled : y.team1dollarOffline),
                type: "info"
            })
        }), e.jsxs("div", {
            className: "grid grid-flow-row grid-cols-3",
            children: [e.jsxs("div", {
                className: "flex-column col-span-3 p-5 md:col-span-2 md:grid-cols-2",
                children: [e.jsx(ie, {
                    numSeats: C,
                    minSeats: D,
                    setNumSeats: ee
                }), t?.coupon === w && t.state === "eligible" && s === "month" && C > G && e.jsx("div", {
                    className: "text-token-text-secondary mt-1 self-start text-xs",
                    children: e.jsx(o, {
                        ...y.team1dollarOverSeatsDisclaimer
                    })
                }), e.jsxs(le, {
                    className: Q("col-span-3 mt-5 grid gap-4 md:col-span-2", "md:grid-cols-2"),
                    defaultValue: s,
                    onValueChange: c => {
                        Y(c) && (N(c),
                        ae(c))
                    }
                    ,
                    children: [e.jsx(R, {
                        billingType: "year",
                        ...te,
                        selectedValue: s,
                        hideSavingsMessage: a
                    }), e.jsx(R, {
                        billingType: "month",
                        ...T,
                        selectedValue: s,
                        showWelcomeOfferLabel: a,
                        promoDisclaimer: a && e.jsx(o, {
                            ...y.team1dollarPromoDisclaimer,
                            values: {
                                currencySign: P.formatMessage(T.currencySign),
                                cost: T.monthlyCost
                            }
                        })
                    })]
                })]
            }), e.jsxs("div", {
                className: "border-token-main-surface-tertiary bg-token-main-surface-secondary col-span-3 flex h-full flex-col overflow-hidden border-s p-6 md:col-span-1",
                children: [e.jsx(de, {
                    children: e.jsx(o, {
                        ...x.summaryTitle
                    })
                }), e.jsx(ue, {
                    numSeats: b,
                    selectedPlan: s,
                    billingDetails: u,
                    totalLabel: x.allPlansTodayTotal,
                    billDate: e.jsx(o, {
                        ...x.today
                    }),
                    promoData: t
                }), e.jsx(H, {
                    title: P.formatMessage(x.continueToBillingButton),
                    onClick: async () => {
                        L(!0),
                        ne(s, b),
                        await S(s, b),
                        L(!1)
                    }
                    ,
                    disabled: !1,
                    loading: E,
                    color: "primary",
                    className: "w-full rounded-xl"
                })]
            })]
        })]
    })
}
  , ue = ({numSeats: n, selectedPlan: r, billingDetails: S, totalLabel: f, billDate: u, promoData: i}) => {
    const t = I()
      , {flexibleBillingPlan: p, annualBillingPlan: g} = xe(S.currency)
      , m = p
      , a = r === "month" ? m : g
      , d = ve[r]
      , j = (n || 0) * (r === "year" ? g.monthlyCost * 12 : m.monthlyCost);
    let l = (n || 0) * a.unitCost
      , h = j - l
      , s = 0
      , N = j
      , E = !1;
    return i?.coupon === w && i.state === "eligible" && r === "month" && (E = !0,
    n <= G ? (s = 1,
    N = n * m.monthlyCost,
    h = N - s,
    l = s) : (s = 1 + (n - G) * m.monthlyCost,
    N = n * m.monthlyCost,
    h = N - s,
    l = s)),
    e.jsxs("div", {
        className: "flex grow flex-col text-sm",
        children: [e.jsxs("div", {
            className: "text-token-text-secondary flex w-full justify-between text-sm",
            children: [e.jsx("div", {
                className: "flex",
                children: e.jsx(o, {
                    ...d.name
                })
            }), e.jsx("div", {
                className: "flex",
                children: e.jsx(o, {
                    ...x.allPlansPreDiscountTotal,
                    values: {
                        currencySign: t.formatMessage(a.currencySign),
                        preDiscountTotalAmount: j.toLocaleString()
                    }
                })
            })]
        }), e.jsxs("div", {
            className: "text-token-text-tertiary flex w-full justify-between text-xs",
            children: [e.jsx("div", {
                className: "flex",
                children: e.jsx(o, {
                    ...d.breakdown,
                    values: {
                        numSeats: n
                    }
                })
            }), e.jsx("div", {
                className: "flex",
                children: e.jsx(o, {
                    ...x.breakdownAmount,
                    values: {
                        currencySign: t.formatMessage(a.currencySign),
                        amount: a.monthlyCost
                    }
                })
            })]
        }), e.jsxs("div", {
            className: "text-token-text-secondary mt-3 flex w-full justify-between text-sm",
            children: [e.jsx("div", {
                className: "flex",
                children: e.jsx(o, {
                    ...x.planDiscountLabel
                })
            }), e.jsx("div", {
                className: Q("flex", h > 0 && "font-medium text-[#10A37F]"),
                children: e.jsx(o, {
                    ...d.discountAmount,
                    values: {
                        currencySign: t.formatMessage(m.currencySign),
                        discountAmount: h.toLocaleString()
                    }
                })
            })]
        }), i?.coupon === w && i.state === "eligible" && r === "month" && e.jsx("div", {
            className: "text-token-text-tertiary text-xs",
            children: e.jsx(o, {
                ...y.team1dollarBelowDiscount
            })
        }), d.discountDescription && g.discountedMonthlyCost < g.monthlyCost && r === "year" && e.jsx("div", {
            className: "text-token-text-tertiary text-xs",
            children: e.jsx(o, {
                ...d.discountDescription,
                values: {
                    discountPercentage: Math.floor((1 - g.discountedMonthlyCost / g.monthlyCost) * 100)
                }
            })
        }), e.jsx("hr", {
            className: "border-token-border-default my-3"
        }), e.jsxs("div", {
            className: "flex w-full justify-between text-base font-medium",
            children: [e.jsx("div", {
                className: "flex",
                children: e.jsx(o, {
                    ...f
                })
            }), e.jsx("div", {
                className: "flex",
                children: E ? e.jsxs(e.Fragment, {
                    children: [t.formatMessage(a.currencyCode), " ", t.formatMessage(a.currencySign), l.toLocaleString()]
                }) : e.jsx(o, {
                    ...d.total,
                    values: {
                        currencyCode: t.formatMessage(a.currencyCode),
                        currencySign: t.formatMessage(a.currencySign),
                        totalAmount: l.toLocaleString()
                    }
                })
            })]
        }), e.jsx("div", {
            className: "text-token-text-tertiary mb-8 text-xs",
            children: E ? e.jsx(e.Fragment, {
                children: e.jsx("div", {
                    className: "text-token-text-tertiary mt-2 text-xs",
                    children: e.jsx(o, {
                        id: "vgDSPO",
                        defaultMessage: "After promotional period {currencySign}{amount} per month",
                        values: {
                            currencySign: t.formatMessage(m.currencySign),
                            amount: N.toLocaleString()
                        }
                    })
                })
            }) : e.jsx(o, {
                ...d.billed,
                values: {
                    billDate: u
                }
            })
        })]
    })
}
;
function Xe() {
    const n = X()
      , r = Ee()
      , {prepareCheckoutSession: S, navigateToCheckout: f} = he()
      , {initialBillingDetails: u} = Se(n, !0)
      , i = I()
      , t = fe()
      , p = pe(i, void 0, t)
      , g = ye()
      , m = K()
      , {data: a} = Z(m ?? "")
      , d = async (l, h) => {
        try {
            const s = await S({
                plan_name: "chatgptteamplan",
                team_plan_data: {
                    workspace_name: p,
                    price_interval: l,
                    seat_quantity: h
                },
                billing_details: u,
                promo_campaign: l === "month" ? a?.coupon : null
            });
            await f(s)
        } catch (s) {
            J.addError(s),
            g.warning(i.formatMessage(x.paymentErrorWarning), {
                hasCloseButton: !0
            })
        }
    }
      , j = () => {
        r("/")
    }
    ;
    return e.jsx(Te, {
        isOpen: !0,
        onClose: j,
        onSubmit: (l, h) => d(l, h),
        isDirectFlow: !0,
        minimumSeats: U,
        billingDetails: u,
        promoData: a
    })
}
const Je = ({isOpen: n, onClose: r, minimumSeats: S, billingDetails: f, existingAccount: u=void 0, promoData: i=void 0}) => {
    const t = I()
      , p = ye()
      , g = fe()
      , {prepareCheckoutSession: m, navigateToCheckout: a} = he()
      , d = pe(t, u, g)
      , j = async (l, h) => {
        try {
            const s = await m({
                plan_name: "chatgptteamplan",
                team_plan_data: {
                    workspace_name: d,
                    price_interval: l,
                    seat_quantity: h,
                    existing_workspace_id: u?.id
                },
                billing_details: f,
                cancel_url: window.location.href,
                promo_campaign: l === "month" ? i?.coupon : null
            });
            await a(s)
        } catch (s) {
            J.addError(s),
            p.warning(t.formatMessage(x.paymentErrorWarning), {
                hasCloseButton: !0
            })
        }
    }
    ;
    return e.jsx(Te, {
        isOpen: n,
        onClose: r,
        onSubmit: (l, h) => j(l, h),
        minimumSeats: S,
        billingDetails: f,
        promoData: i
    })
}
;
export {ue as B, Xe as T, Je as a, Ke as u};
//# sourceMappingURL=k98mrbqlf9x60qcs.js.map
