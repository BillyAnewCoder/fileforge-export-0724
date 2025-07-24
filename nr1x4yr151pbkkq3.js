import {r as u, j as e, f as re, M as r, L as ae, h as K, u as ns, d as Se, e as mt, p as os, n as is, at as ls} from "./juy90og0wtbp77qa.js";
import {P as g, B as V, a4 as rs, a9 as x, k as gt, dW as ft, l_ as ht, l$ as qe, ag as ge, a5 as cs, C as ce, aG as Pe, e$ as yt, gb as ds, by as nt, m0 as Le, fv as Mt, fw as xt, fx as _t, fy as bt, fB as Ct, c as us, a7 as ps, j7 as Pt, al as ot, L as Ye, b as Ve, cC as me, e as fe, ae as ms, fX as pe, fY as le, m1 as gs, m2 as St, m3 as jt, m4 as vt, dG as be, m5 as Qe, fo as z, m6 as fs, lr as hs, ls as ys, R as wt, g as Ms, bK as xs, eJ as Fe, eK as Et, b0 as _s, m7 as bs, f as it, D as kt, bv as Tt, eL as Cs, s as Ps, N as Ss, ar as lt, fC as js, m8 as vs} from "./dc2xxjkicf2pz0mj.js";
import {S as ws} from "./fkdark0ezkwwm12s.js";
import {fP as Es, pA as Oe, kd as ks, pB as At, pC as ue, I as $e, H as ze, P as Ke, pD as Ts, ll as As, pE as Nt, pF as Q, mM as Ns, G as Is, aO as It, pG as Ce, pH as Ds, pI as Ae, F as Us, pJ as Ze, ou as Dt, hN as Ls, fp as Fs, pK as Rs, aM as Os, aH as Bs, aL as Gs, U as Ws, aN as Hs, fQ as Ys, hx as Vs} from "./ckp56qklot786ulr.js";
import {u as Ut, S as $s} from "./ffq4y6btupy3ovkt.js";
import {C as rt} from "./k41q6x5mdrghtds7.js";
import {a as zs, b as Ks, M as qs} from "./nqj34k5dky4x5suq.js";
const Qs = t => u.createElement("svg", {
    width: 21,
    height: 20,
    viewBox: "0 0 21 20",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t
}, u.createElement("path", {
    d: "M10.2441 10.7759C12.7597 10.8965 14.8838 12.8648 14.8838 15.0601C14.8838 15.4273 14.586 15.7251 14.2188 15.7251H5.78125C5.41399 15.7251 5.11623 15.4273 5.11621 15.0601C5.11621 12.7959 7.37906 10.77 10 10.77L10.2441 10.7759Z"
}), u.createElement("path", {
    d: "M0 14.436C0 11.5616 3.13043 10.5652 5.2998 11.4478C4.37179 12.4185 3.78619 13.6736 3.78613 15.0601L3.78809 15.1011H0.665039C0.298096 15.1011 0.000527744 14.8029 0 14.436Z"
}), u.createElement("path", {
    d: "M14.7988 11.5532C16.969 10.4969 20.3301 11.4561 20.3301 14.436C20.3295 14.8029 20.032 15.1011 19.665 15.1011H16.2119L16.2139 15.0601C16.2138 13.7223 15.6689 12.5079 14.7988 11.5532Z"
}), u.createElement("path", {
    d: "M3.4248 5.00146C4.85516 5.00146 6.01454 6.16098 6.01465 7.59131C6.01454 9.02164 4.85516 10.1812 3.4248 10.1812C1.99454 10.181 0.835068 9.02157 0.834961 7.59131C0.835066 6.16105 1.99454 5.00157 3.4248 5.00146Z"
}), u.createElement("path", {
    d: "M16.5703 5.00146C18.0006 5.00157 19.1601 6.16105 19.1602 7.59131C19.16 9.02157 18.0006 10.181 16.5703 10.1812C15.14 10.1812 13.9806 9.02164 13.9805 7.59131C13.9806 6.16098 15.14 5.00146 16.5703 5.00146Z"
}), u.createElement("path", {
    d: "M10 4.27002C11.6099 4.27002 12.915 5.57515 12.915 7.18506C12.915 8.79497 11.6099 10.1001 10 10.1001C8.39009 10.1001 7.08496 8.79497 7.08496 7.18506C7.08496 5.57515 8.39009 4.27002 10 4.27002Z"
}));
function Zs({value: t, onChange: a}) {
    return e.jsx(ws, {
        value: t,
        onChange: a,
        ariaLabel: ye.toggleArialabel,
        leftItem: {
            ariaLabel: ye.togglePersonalArialabel,
            label: ye.togglePersonalLabel,
            value: "personal"
        },
        rightItem: {
            ariaLabel: ye.toggleBusinessArialabel,
            label: ye.toggleBusinessLabel,
            value: "business"
        }
    })
}
const ye = re({
    toggleArialabel: {
        id: "U4v2Gf",
        defaultMessage: "Toggle for switching between Personal and Business plans"
    },
    togglePersonalArialabel: {
        id: "6Wikht",
        defaultMessage: "Toggle for switching to Personal plans"
    },
    toggleBusinessArialabel: {
        id: "uzlEV0",
        defaultMessage: "Toggle for switching to Business plans"
    },
    togglePersonalLabel: {
        id: "cGDsaD",
        defaultMessage: "Personal"
    },
    toggleBusinessLabel: {
        id: "sgisa2",
        defaultMessage: "Business"
    }
})
  , Je = () => {
    g.logEvent("Account Portal: Click Get Help")
}
;
function Js(t) {
    if (rs(t))
        return "secondary";
    switch (t) {
    case x.FREE:
        return "green";
    case x.PLUS:
        return "green";
    case x.TEAM:
        return "primary";
    case x.PRO:
        return "primary"
    }
}
function De({isCurrentPlan: t=!1, planType: a, disabled: s, loading: n=!1, onClick: i, children: l, testId: o, activeColor: p, ...f}) {
    return e.jsx(V, {
        fullWidth: !0,
        size: "large",
        color: t ? "secondary" : p || Js(a),
        disabled: s,
        loading: n,
        onClick: i,
        "data-testid": o,
        className: s ? "bg-token-sidebar-surface-tertiary text-token-text-primary hover:bg-token-sidebar-surface-tertiary dark:bg-token-text-tertiary border-none font-semibold" : "font-semibold",
        ...f,
        children: l
    })
}
function Xe(t, a) {
    const [s,n] = u.useState(!1);
    u.useEffect( () => {
        if (!s) {
            n(!0);
            return
        }
        t ? g.logEventWithStatsig("Email Verify Popup Shown", "chatgpt_email_verify_popup_shown", a) : g.logEventWithStatsig("Email Verify Popup Hidden", "chatgpt_email_verify_popup_hidden", a)
    }
    , [t])
}
function Lt({ctx: t, shouldLogExposure: a}) {
    return gt(t, "2273762597", {
        disableExposureLog: !a
    })
}
function Xs({ctx: t, shouldLogExposure: a}) {
    return Lt({
        ctx: t,
        shouldLogExposure: a
    }).get("web_plus_intro_offer_coupon", "none")
}
function ea({ctx: t, shouldLogExposure: a}) {
    return Lt({
        ctx: t,
        shouldLogExposure: a
    }).get("is_plus_intro_offer_enabled", !1)
}
const ta = ({billingDetails: t}) => {
    const {data: a} = ft()
      , s = ht(a)
      , n = Es();
    return e.jsx(Oe, {
        planName: "free",
        pricingPlan: n,
        showForLine: !s,
        callToActionButton: e.jsx(V, {
            color: "secondary",
            disabled: !0,
            size: "large",
            className: "bg-token-sidebar-surface-tertiary text-token-text-primary hover:bg-token-sidebar-surface-tertiary dark:bg-token-text-tertiary dark:text-token-text-primary dark:hover:bg-token-text-tertiary border-none font-semibold",
            children: e.jsx(r, {
                ...n.callToAction.inactive
            })
        }),
        additionalLinks: [e.jsx(r, {
            ...sa.haveExistingPlan,
            values: {
                link: i => e.jsx(ae, {
                    target: "_blank",
                    to: qe,
                    onClick: Je,
                    className: "underline",
                    children: i
                }, "row-plus-plan-help-link")
            }
        }, "existing-plan-help")],
        billingDetails: t
    })
}
  , sa = re({
    haveExistingPlan: {
        id: "FreeColumn.haveExistingPlan",
        defaultMessage: "Have an existing plan? See <link>billing help</link>"
    }
})
  , aa = x.PLUS;
function na({isOpen: t, onClose: a, onCancelationComplete: s, analyticsParams: n}) {
    const i = K()
      , l = ge()
      , o = cs()
      , {data: p, isLoading: f} = ks()
      , c = At(o?.id)
      , m = u.useMemo( () => ({
        ...n,
        planType: aa
    }), [n])
      , h = u.useCallback( () => {
        a(),
        c.isSuccess || g.logEventWithStatsig("Cancel Plus: Closed cancel modal without cancellation", "cancel_plus_modal_abort", m)
    }
    , [a, c.isSuccess, m])
      , d = async () => {
        if (!o)
            throw new Error("No account!");
        g.logEventWithStatsig("Cancel Plus: Clicked button to cancel plan", "cancel_plus_modal_confirm", m),
        await c.mutateAsync(o?.id, {
            onError: () => {
                l.danger(R.cancelFailure, {
                    duration: 2,
                    toastId: "cancel_plus_modal"
                }),
                g.logEventWithStatsig("Cancel Plus: Something errored while cancelling", "cancel_plus_modal_error", m)
            }
            ,
            onSuccess: () => {
                g.logEventWithStatsig("Cancel Plus: Request to cancel was successful", "cancel_plus_modal_success", m),
                s?.(),
                l.info(i.formatMessage(R.cancelSuccess), {
                    duration: 2
                }),
                a()
            }
        })
    }
    ;
    u.useEffect( () => {
        c.isSuccess
    }
    , [c.isSuccess, a]);
    const _ = p?.active_until;
    return e.jsx(ce, {
        testId: "modal-cancel-plus",
        type: "success",
        onClose: h,
        isOpen: t,
        className: "",
        title: e.jsx(r, {
            ...R.cancelPlan
        }),
        children: f || !o ? e.jsx(Pe, {}) : c.isSuccess ? e.jsx(r, {
            ...R.cancelSuccess
        }) : e.jsxs("div", {
            children: [e.jsxs("div", {
                className: "text-sm",
                children: [!!_ && e.jsx("p", {
                    className: "mb-4",
                    children: e.jsx(r, {
                        ...R.planActiveUntil,
                        values: {
                            expirationDate: new Date(_)
                        }
                    })
                }), e.jsx("p", {
                    className: "mb-2",
                    children: e.jsx(r, {
                        ...R.cancelListHeader
                    })
                }), e.jsx("div", {
                    children: la.map(C => e.jsxs("div", {
                        className: "text-l mb-2 flex justify-start gap-2",
                        children: [e.jsx(yt, {
                            className: "h-5 w-5 shrink-0 align-top text-gray-500"
                        }), e.jsx("span", {
                            children: e.jsx(r, {
                                ...C,
                                values: {
                                    learnMoreLink: oa,
                                    mainModel: ia
                                }
                            })
                        })]
                    }, C.id))
                })]
            }), e.jsxs("div", {
                className: "mt-8 flex justify-end gap-2",
                children: [e.jsx(V, {
                    onClick: h,
                    color: "secondary",
                    children: e.jsx(r, {
                        ...R.closeModal
                    })
                }), e.jsx(V, {
                    color: "danger",
                    onClick: d,
                    disabled: c.isPending || c.isSuccess,
                    children: e.jsx(r, {
                        ...c.isPending ? R.cancellingInProgress : R.cancelButton
                    })
                })]
            })]
        })
    })
}
const oa = t => e.jsx("a", {
    target: "_blank",
    href: "https://help.openai.com/en/articles/9280126-what-happens-to-my-gpts-if-i-cancel-my-subscription",
    rel: "noreferrer",
    className: "underline",
    children: t
})
  , ia = "GPT-4"
  , R = re({
    cancelPlan: {
        id: "cancelPlusModal.cancelPlan",
        defaultMessage: "Cancel your Plus subscription?"
    },
    cancelListHeader: {
        id: "cancelPlusModal.cancelText",
        defaultMessage: "When your subscription ends, you'll no longer have:"
    },
    planActiveUntil: {
        id: "cancelPlusModal.planActiveUntil",
        defaultMessage: "If you cancel your subscription, you’ll be downgraded to the free plan on {expirationDate, date, long}."
    },
    cancelButton: {
        id: "cancelPlusModal.cancelButton",
        defaultMessage: "Cancel subscription"
    },
    cancellingInProgress: {
        id: "cancelPlusModal.cancellingInProgress",
        defaultMessage: "Cancelling..."
    },
    cancelSuccess: {
        id: "cancelPlusModal.cancelSuccess",
        defaultMessage: "Successfully cancelled your plan. Sorry to see you go!"
    },
    cancelFailure: {
        id: "cancelPlusModal.cancelFailure",
        defaultMessage: "Something went wrong while cancelling your plan. Please reach out to support"
    },
    lostFeatureGPTModels: {
        id: "0w7d5w",
        defaultMessage: "Access to {mainModel} and {liteModel}"
    },
    lostFeatureGPTModelSingular: {
        id: "cancelPlusModal.lostFeature.gptModelSingular",
        defaultMessage: "Access to {mainModel}"
    },
    lostFeatureNewModelUsageLimits: {
        id: "TjftEV",
        defaultMessage: "Higher usage limits for {limitedModel}"
    },
    lostFeatureDataAnalysisV2: {
        id: "cancelPlusModal.lostFeature.dataAnalysisV2",
        defaultMessage: "Access to advanced data analysis, file uploads, vision, and web browsing"
    },
    lostFeatureDataAnalysisLimits: {
        id: "dlGufV",
        defaultMessage: "Higher usage limits for advanced data analysis, file uploads, vision, and web browsing"
    },
    lostFeatureImageGeneration: {
        id: "cancelPlusModal.lostFeature.imageGeneration",
        defaultMessage: "DALL·E image generation"
    },
    lostFeatureCustomGPTs: {
        id: "cancelPlusModal.lostFeature.customGPTs",
        defaultMessage: "Custom GPT creation"
    },
    lostFeaturePersonalGPTs: {
        id: "cancelPlusModal.lostFeature.personalGPTs",
        defaultMessage: "GPTs you’ve created (<learnMoreLink>learn more</learnMoreLink>)"
    },
    closeModal: {
        id: "cancelPlusModal.close",
        defaultMessage: "Close"
    }
})
  , la = [R.lostFeatureGPTModelSingular, R.lostFeatureDataAnalysisV2, R.lostFeatureImageGeneration, R.lostFeatureCustomGPTs, R.lostFeaturePersonalGPTs];
function Ft({isOpen: t, onClose: a, onContinue: s, analyticsParams: n}) {
    u.useEffect( () => {
        t && g.logEventWithStatsig("Mobile Subscription Warning Modal Shown", "chatgpt_mobile_subscription_warning_modal_shown", n)
    }
    , [n, t]);
    const i = () => {
        g.logEventWithStatsig("Mobile Subscription Warning Modal Continue Clicked", "chatgpt_mobile_subscription_warning_modal_continue_clicked", n),
        s()
    }
      , l = () => {
        g.logEventWithStatsig("Mobile Subscription Warning Modal Close Clicked", "chatgpt_mobile_subscription_warning_modal_close_clicked", n),
        a()
    }
    ;
    return e.jsx(ce, {
        testId: "modal-mobile-subscription-warning",
        isOpen: t,
        onClose: l,
        type: "warning",
        icon: ds,
        title: e.jsx(r, {
            ...Ne.checkSubscriptionHeader
        }),
        primaryButton: e.jsx(nt.Button, {
            title: Ne.dismissModal.defaultMessage,
            color: "primary",
            onClick: l
        }),
        secondaryButton: e.jsx(nt.Button, {
            title: Ne.continueToNextStep.defaultMessage,
            color: "secondary",
            onClick: i
        }),
        children: e.jsx("span", {
            className: "gap-2 text-gray-600",
            children: Ne.checkSubscriptionBody.defaultMessage
        })
    })
}
const Ne = re({
    checkSubscriptionHeader: {
        id: "mobileSubscriptionWarningModal.checkSubscriptionHeader",
        defaultMessage: "Check your App Store subscription"
    },
    checkSubscriptionBody: {
        id: "mobileSubscriptionWarningModal.checkSubscriptionBody",
        defaultMessage: "Your subscription through the Apple App Store is currently on pause due to a payment issue. Please resolve that issue to resume using ChatGPT Plus and avoid duplicate charges."
    },
    dismissModal: {
        id: "mobileSubscriptionWarningModal.dismissModal",
        defaultMessage: "Cancel"
    },
    continueToNextStep: {
        id: "mobileSubscriptionWarningModal.continueToNextStep",
        defaultMessage: "I understand, continue anyways"
    }
});
function Oa(t, a, s, n) {
    let i, l;
    n === Mt ? (i = ze,
    l = xt) : n === _t ? (i = Ke,
    l = bt) : (i = $e,
    l = Ct);
    const o = i * a;
    let p;
    if ("percentage"in s)
        p = o * (1 - s.percentage / 100);
    else if ("value"in s)
        p = o - s.value;
    else
        throw new Error("Invalid discount type");
    return {
        formattedDiscountedCost: t.formatNumber(p, {
            style: "currency",
            currency: n,
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        }),
        currencySymbol: l
    }
}
function Rt(t, a, s, n) {
    const i = {
        ...a
    };
    let l;
    if (n && (n.period === "year" ? n.num_periods === 1 ? l = t.formatMessage({
        id: "pricingPlanConstants.promoCostSubtitleForSingleYear",
        defaultMessage: "for the first year"
    }) : l = t.formatMessage({
        id: "pricingPlanConstants.promoCostSubtitleForPluralYears",
        defaultMessage: "for the first {num_years} years"
    }, {
        num_years: n.num_periods
    }) : n.num_periods === 1 ? l = t.formatMessage({
        id: "pricingPlanConstants.promoCostSubtitleForSingleMonth",
        defaultMessage: "for the first month"
    }) : l = t.formatMessage({
        id: "pricingPlanConstants.promoCostSubtitleForPluralMonths",
        defaultMessage: "for the first {num_months} months"
    }, {
        num_months: n.num_periods
    })),
    i.costDuration = {
        id: "promoCostDuration",
        defaultMessage: l,
        description: "Cost duration for promo plan"
    },
    "percentage"in s || "discount_type"in s && s.discount_type === Le.PERCENTAGE) {
        const o = ("percentage"in s ? s.percentage : s.amount) / 100;
        i.costInDollars = {
            id: "discountedCost",
            defaultMessage: ue((1 - o) * $e).toString()
        },
        i.costInEuros = {
            id: "discountedCostEuros",
            defaultMessage: ue((1 - o) * ze).toString()
        },
        i.costInPounds = {
            id: "discountedCostPounds",
            defaultMessage: ue((1 - o) * Ke).toString()
        }
    } else if ("value"in s || s.discount_type === Le.FIXED) {
        const o = "value"in s ? s.value : s.amount;
        i.costInDollars = {
            id: "discountedCost",
            defaultMessage: ue($e - o).toString()
        },
        i.costInEuros = {
            id: "discountedCostEuros",
            defaultMessage: ue(ze - o).toString()
        },
        i.costInPounds = {
            id: "discountedCostPounds",
            defaultMessage: ue(Ke - o).toString()
        }
    }
    return i
}
const et = us(t => ({
    recentlyDowngraded: !1,
    recentlyUpgraded: !1,
    recentlyCanceled: !1,
    setRecentlyDowngraded: a => t({
        recentlyDowngraded: a
    }),
    setRecentlyUpgraded: a => t({
        recentlyUpgraded: a
    }),
    setRecentlyCanceled: a => t({
        recentlyCanceled: a
    })
}));
function Ot(t) {
    switch (t) {
    case x.FREE:
        return "chatgptfreeplan";
    case x.PLUS:
        return "chatgptplusplan";
    case x.PRO:
        return "chatgptpro";
    case x.TEAM:
        return "chatgptteamplan";
    default:
        throw new Error(`Invalid plan type: ${t}`)
    }
}
function Bt({isOpen: t, onClose: a, accountId: s, initialPlanType: n, updatedPlanType: i, billingDetails: l}) {
    const o = K()
      , p = ge()
      , f = ps()
      , [c,m] = u.useState(!1)
      , h = n === i
      , d = n === x.PLUS && i === x.PRO
      , _ = Ot(i);
    u.useEffect( () => {
        g.logTogglePlanManagementModal({
            isOpen: !0
        })
    }
    , []);
    const C = () => {
        g.logTogglePlanManagementModal({
            isOpen: !1
        }),
        a()
    }
      , S = Ts(s)
      , w = As(s)
      , Z = At(s)
      , {data: j, isError: T, isLoading: W} = Nt(s, void 0, _);
    !h && T && (f?.planType === x.TEAM ? p.warning(o.formatMessage({
        id: "planManagement.errorUpgradingTeam",
        defaultMessage: "Updates to Pro aren't yet supported for users with Team subscriptions"
    }), {
        hasCloseButton: !0
    }) : p.warning(o.formatMessage({
        id: "planManagement.errorFetchingPreview",
        defaultMessage: "There was a problem updating your subscription"
    }), {
        hasCloseButton: !0
    }),
    a());
    const b = v => {
        const k = Pt(new Date, v);
        return new Intl.DateTimeFormat(o.locale,{
            year: "numeric",
            month: "short",
            day: "numeric"
        }).format(k)
    }
      , O = f?.getDaysUntilPlanRenews()
      , M = O ? b(O) : ""
      , {recentlyCanceled: H, setRecentlyUpgraded: D, setRecentlyDowngraded: $} = et()
      , P = f?.willRenewSubscription() || H
      , [q,ne] = u.useState(!1)
      , J = ns();
    if (!f)
        return null;
    const X = async v => {
        m(!0);
        try {
            if (h)
                await w.mutateAsync(s),
                p.success(M === "" ? o.formatMessage({
                    id: "planManagement.successfullyRenewedSubscription2",
                    defaultMessage: "Your subscription has been renewed."
                }) : o.formatMessage({
                    id: "planManagement.successfullyRenewedSubscription",
                    defaultMessage: "Your subscription has been renewed. Your subscription will auto-renew on {renewalDate}."
                }, {
                    renewalDate: M
                }), {
                    hasCloseButton: !0
                }),
                g.logEvent("Renew Plan Success", {
                    planType: v
                }),
                ot.logEvent("chatgpt_renew_plan_success", null, {
                    planType: v
                });
            else {
                if (P || (await w.mutateAsync(s),
                ne(!0)),
                await S.mutateAsync({
                    accountId: s,
                    updatedPlan: _,
                    updatedPriceInterval: void 0,
                    updatedSeats: void 0
                }),
                v !== i) {
                    const N = d ? "Upgrade Plan Success" : "Downgrade Plan Success"
                      , I = d ? "chatgpt_upgrade_plan_success" : "chatgpt_downgrade_plan_success";
                    g.logEvent(N, {
                        fromPlan: v,
                        toPlan: i
                    }),
                    ot.logEvent(I, null, {
                        fromPlan: v,
                        toPlan: i
                    }),
                    d ? D(!0) : $(!0)
                }
                const te = j?.renewal_date ? new Date(j?.renewal_date).toLocaleDateString(o.locale, {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                }) : "N/A"
                  , y = d ? o.formatMessage({
                    id: "planManagement.successfullyUpdatedSubscription",
                    defaultMessage: "You're now subscribed to ChatGPT Pro"
                }) : o.formatMessage({
                    id: "planManagement.updatedSubscriptionToPlus",
                    defaultMessage: "Your subscription has been updated. Your subscription will change to Plus on {renewalDateFormatted}."
                }, {
                    renewalDateFormatted: te
                });
                localStorage.setItem(`subscriptionUpdateMessage_${f.id}`, y)
            }
            J.invalidateQueries({
                queryKey: ["account-status"]
            });
            const k = Ye.getItem(Ve.CheckoutFrom);
            k && rt[k] && (Ye.removeItem(Ve.CheckoutFrom),
            window.location.href = rt[k]),
            a()
        } catch (k) {
            k?.detail?.error_type === "card_declined" ? p.warning(o.formatMessage({
                id: "planManagement.cardDeclinedError",
                defaultMessage: "Payment error. Your card may be invalid or authentication may be needed."
            }), {
                hasCloseButton: !0
            }) : p.warning(o.formatMessage({
                id: "planManagement.errorUpdatingSubscription",
                defaultMessage: "There was a problem updating your subscription"
            }), {
                hasCloseButton: !0
            }),
            q && await Z.mutateAsync(s),
            a()
        } finally {
            m(!1)
        }
    }
      , [ee,A,B] = ha(l.currency);
    return e.jsx(ce, {
        testId: "modal-plan-management",
        type: "success",
        isOpen: t,
        onClose: C,
        size: "custom",
        noPadding: !0,
        className: "max-w-xl",
        showCloseButton: !0,
        title: o.formatMessage({
            id: "planManagementModal.title",
            defaultMessage: "Confirm changes"
        }),
        removePopoverStyling: !0,
        children: W ? e.jsx(Gt, {}) : h && f ? e.jsx(fa, {
            account: f,
            renewalDate: M,
            handleUpdate: () => X(n),
            isUpdating: c,
            onClose: C,
            plusCost: ee,
            proCost: A,
            currencySymbol: B
        }) : T || !j ? null : d ? e.jsx(ca, {
            accountId: s,
            handleUpdate: () => X(n),
            isUpdating: c,
            onClose: C,
            currencySymbol: B
        }) : e.jsx(ga, {
            renewalDate: j.renewal_date,
            handleUpdate: () => X(n),
            isUpdating: c,
            onClose: C,
            plusCost: ee,
            currencySymbol: B
        })
    })
}
function Gt() {
    return e.jsx("div", {
        className: "flex items-center justify-center p-6",
        children: e.jsx(Pe, {})
    })
}
function ra({adjustmentMessage: t, proratedCreditMessage: a, proratedCreditInfoMessage: s}) {
    return e.jsxs("div", {
        children: [e.jsxs("div", {
            className: "mt-4 flex justify-between",
            children: [e.jsx("span", {
                className: "font-semibold",
                children: t
            }), e.jsx("span", {
                className: "font-semibold text-green-600",
                children: a
            })]
        }), e.jsx("span", {
            className: "text-token-text-secondary text-sm",
            children: s
        })]
    })
}
function ca({accountId: t, handleUpdate: a, isUpdating: s, onClose: n, currencySymbol: i}) {
    const l = K()
      , {data: o, isError: p, isLoading: f} = Nt(t, void 0, Ot(x.PRO));
    if (f)
        return e.jsx(Gt, {});
    if (p || !o)
        return null;
    const c = da(o, l, i);
    return e.jsxs("div", {
        className: "p-6",
        children: [e.jsx(ua, {
            data: o,
            currencySymbol: i
        }), c.filter(m => m.value !== 0).map( (m, h) => e.jsx(ra, {
            adjustmentMessage: m.adjustmentMessage,
            proratedCreditMessage: m.proratedCreditMessage,
            proratedCreditInfoMessage: m.proratedCreditInfoMessage
        }, h)), e.jsx("hr", {
            className: "mt-4 mb-4"
        }), e.jsx(pa, {
            data: o,
            currencySymbol: i
        }), o.default_payment_method && e.jsxs(e.Fragment, {
            children: [e.jsx("hr", {
                className: "mt-4 mb-4"
            }), e.jsx(ma, {
                defaultPaymentMethod: o.default_payment_method
            })]
        }), e.jsxs("div", {
            className: "mt-8 flex justify-end gap-2",
            children: [e.jsx(me, {
                title: l.formatMessage({
                    id: "planUpgradeModal.cancel",
                    defaultMessage: "Cancel"
                }),
                color: "secondary",
                onClick: n
            }), e.jsx(me, {
                title: l.formatMessage({
                    id: "planUpgradeModal.payNow",
                    defaultMessage: "Pay now"
                }),
                color: "primary",
                onClick: a,
                loading: s
            })]
        })]
    })
}
function da(t, a, s) {
    return [{
        adjustmentMessage: e.jsx(r, {
            id: "planUpgradeModal.adjustment",
            defaultMessage: "Adjustment"
        }),
        proratedCreditMessage: e.jsx(r, {
            id: "planUpgradeModal.proratedCredit",
            defaultMessage: "-{currencySign}{adjustment}",
            values: {
                currencySign: a.formatMessage(s.sign),
                adjustment: (-t.negative_line_item_total / 100).toFixed(2)
            }
        }),
        proratedCreditInfoMessage: e.jsx(r, {
            id: "planUpgradeModal.proratedCreditInfo",
            defaultMessage: "Prorated credit for the remainder of your Plus subscription"
        }),
        value: t.negative_line_item_total
    }, {
        adjustmentMessage: e.jsx(r, {
            id: "planUpgradeModal.discount",
            defaultMessage: "Adjustment"
        }),
        proratedCreditMessage: e.jsx(r, {
            id: "planUpgradeModal.discountAmount",
            defaultMessage: "-{currencySign}{discount}",
            values: {
                currencySign: a.formatMessage(s.sign),
                discount: (t.discount_amount / 100).toFixed(2)
            }
        }),
        proratedCreditInfoMessage: e.jsx(r, {
            id: "planUpgradeModal.discountInfo",
            defaultMessage: "Account discount applied"
        }),
        value: t.discount_amount
    }, {
        adjustmentMessage: e.jsx(r, {
            id: "planUpgradeModal.credits",
            defaultMessage: "Adjustments"
        }),
        proratedCreditMessage: e.jsx(r, {
            id: "planUpgradeModal.creditsAmount",
            defaultMessage: "-{currencySign}{credits}",
            values: {
                currencySign: a.formatMessage(s.sign),
                credits: (t.applied_balance / 100).toFixed(2)
            }
        }),
        proratedCreditInfoMessage: e.jsx(r, {
            id: "planUpgradeModal.creditsInfo",
            defaultMessage: "Credits applied"
        }),
        value: t.applied_balance
    }]
}
function ua({data: t, currencySymbol: a}) {
    const s = K();
    return e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
            className: "flex justify-between",
            children: [e.jsx("span", {
                className: "font-semibold",
                children: e.jsx(r, {
                    id: "planUpgradeModal.subscription",
                    defaultMessage: "ChatGPT Pro subscription"
                })
            }), e.jsx("span", {
                className: "font-semibold",
                children: e.jsx(r, {
                    id: "planUpgradeModal.subscriptionCost",
                    defaultMessage: "{currencySign}{totalCost}",
                    values: {
                        currencySign: s.formatMessage(a.sign),
                        totalCost: (t.positive_line_item_total / 100).toFixed(2)
                    }
                })
            })]
        }), e.jsx("span", {
            className: "text-token-text-secondary text-sm",
            children: e.jsx(r, {
                id: "planUpgradeModal.billingCycle",
                defaultMessage: "Billed monthly, starting today"
            })
        })]
    })
}
function pa({data: t, currencySymbol: a}) {
    const s = K();
    return e.jsxs(e.Fragment, {
        children: [t.amount_due.tax_amount > 0 && e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                className: "mt-4 flex justify-between",
                children: [e.jsx("span", {
                    className: "font-semibold",
                    children: e.jsx(r, {
                        id: "planUpgradeModal.subTotal",
                        defaultMessage: "Subtotal"
                    })
                }), e.jsx("span", {
                    children: e.jsx(r, {
                        id: "planUpgradeModal.subtotalPrice",
                        defaultMessage: "{currencySign}{totalCost}",
                        values: {
                            currencySign: s.formatMessage(a.sign),
                            totalCost: (t.amount_due.amount_excluding_tax / 100).toFixed(2)
                        }
                    })
                })]
            }), e.jsxs("div", {
                className: "mt-2 flex justify-between",
                children: [e.jsxs("span", {
                    className: "font-semibold",
                    children: [e.jsx(r, {
                        id: "planUpgradeModal.tax",
                        defaultMessage: "Tax"
                    }), e.jsx("span", {
                        className: "text-token-text-secondary font-normal",
                        children: e.jsx(r, {
                            id: "planUpgradeModal.taxPercent",
                            defaultMessage: " {taxPercent}%",
                            values: {
                                taxPercent: (t.amount_due.tax_amount / t.amount_due.amount_excluding_tax * 100).toFixed(0)
                            }
                        })
                    })]
                }), e.jsx("span", {
                    children: e.jsx(r, {
                        id: "planUpgradeModal.taxAmount",
                        defaultMessage: "{currencySign}{tax}",
                        values: {
                            currencySign: s.formatMessage(a.sign),
                            tax: (t.amount_due.tax_amount / 100).toFixed(2)
                        }
                    })
                })]
            })]
        }), e.jsxs("div", {
            className: "mt-2 flex justify-between",
            children: [e.jsx("span", {
                className: "font-semibold",
                children: e.jsx(r, {
                    id: "planUpgradeModal.totalDueToday",
                    defaultMessage: "Total due today"
                })
            }), e.jsx("span", {
                className: "font-semibold",
                children: e.jsx(r, {
                    id: "planUpgradeModal.totalDueTodayAmount",
                    defaultMessage: "{currencySign}{totalCost}",
                    values: {
                        currencySign: s.formatMessage(a.sign),
                        totalCost: (t.amount_due.amount / 100).toFixed(2)
                    }
                })
            })]
        })]
    })
}
function ma({defaultPaymentMethod: t}) {
    return e.jsxs("div", {
        className: "flex justify-between",
        children: [e.jsx("span", {
            className: "font-semibold",
            children: e.jsx(r, {
                id: "planUpgradeModal.paymentMethod",
                defaultMessage: "Payment Method"
            })
        }), e.jsxs("span", {
            className: "text-token-text-secondary",
            children: [t.card_brand?.toUpperCase(), " *", t.card_last4]
        })]
    })
}
function ga({renewalDate: t, handleUpdate: a, isUpdating: s, onClose: n, plusCost: i, currencySymbol: l}) {
    const o = K()
      , p = t ? new Date(t).toLocaleDateString(o.locale, {
        year: "numeric",
        month: "long",
        day: "numeric"
    }) : "N/A";
    return e.jsx(e.Fragment, {
        children: e.jsxs("div", {
            className: "p-6",
            children: [e.jsx("p", {
                className: "text-token-text-secondary",
                children: e.jsx(r, {
                    id: "planDowngradeModal.currentSubscription",
                    defaultMessage: "Your current Pro subscription will remain active until {renewalDateFormatted}, when it will change to Plus.",
                    values: {
                        renewalDateFormatted: p
                    }
                })
            }), e.jsxs("div", {
                className: "bg-token-main-surface-secondary mt-4 rounded-md p-4",
                children: [e.jsxs("div", {
                    className: "flex justify-between",
                    children: [e.jsx("span", {
                        className: "font-semibold",
                        children: e.jsx(r, {
                            id: "planDowngradeModal.newPlan",
                            defaultMessage: "ChatGPT Plus"
                        })
                    }), e.jsx("span", {
                        className: "text-token-text-secondary",
                        children: e.jsx(r, {
                            id: "planDowngradeModal.newPlanCost",
                            defaultMessage: "{currencyCode} {currencySign}{plusCost}/month",
                            values: {
                                currencyCode: o.formatMessage(l.code),
                                currencySign: o.formatMessage(l.sign),
                                plusCost: o.formatMessage(i)
                            }
                        })
                    })]
                }), e.jsx("span", {
                    className: "text-token-text-secondary",
                    children: e.jsx(r, {
                        id: "planDowngradeModal.billingStart",
                        defaultMessage: "Billing will start on {renewalDateFormatted}",
                        values: {
                            renewalDateFormatted: p
                        }
                    })
                })]
            }), e.jsxs("div", {
                className: "mt-8 flex justify-end gap-2",
                children: [e.jsx(me, {
                    title: o.formatMessage({
                        id: "planDowngradeModal.cancel",
                        defaultMessage: "Cancel"
                    }),
                    color: "secondary",
                    onClick: n
                }), e.jsx(me, {
                    title: o.formatMessage({
                        id: "planDowngradeModal.confirm",
                        defaultMessage: "Confirm"
                    }),
                    color: "primary",
                    onClick: a,
                    loading: s
                })]
            })]
        })
    })
}
function fa({account: t, renewalDate: a, handleUpdate: s, isUpdating: n, onClose: i, plusCost: l, proCost: o, currencySymbol: p}) {
    const f = K()
      , c = t.data.subscriptionStatus.planType
      , m = Ns(c.toLowerCase())
      , h = m === "Pro" ? o : l;
    return e.jsx(e.Fragment, {
        children: e.jsxs("div", {
            className: "p-6",
            children: [e.jsx("p", {
                className: "text-token-text-secondary",
                children: e.jsx(r, {
                    id: "planRenewalModal.currentSubscription",
                    defaultMessage: "Your current {planName} subscription will auto-renew on {renewalDate}.",
                    values: {
                        planName: m,
                        renewalDate: a
                    }
                })
            }), e.jsxs("div", {
                className: "bg-token-main-surface-secondary mt-4 rounded-md p-4",
                children: [e.jsxs("div", {
                    className: "flex justify-between",
                    children: [e.jsx("span", {
                        className: "font-semibold",
                        children: e.jsx(r, {
                            id: "planRenewalModal.newPlan",
                            defaultMessage: "ChatGPT {planName}",
                            values: {
                                planName: m
                            }
                        })
                    }), e.jsx("span", {
                        className: "text-token-text-secondary",
                        children: e.jsx(r, {
                            id: "planRenewalModal.newPlanCost",
                            defaultMessage: "{currencyCode} {currencySign}{planCost}/month",
                            values: {
                                currencyCode: f.formatMessage(p.code),
                                currencySign: f.formatMessage(p.sign),
                                planCost: f.formatMessage(h)
                            }
                        })
                    })]
                }), e.jsx("span", {
                    className: "text-token-text-secondary",
                    children: e.jsx(r, {
                        id: "planRenewalModal.billingStart",
                        defaultMessage: "Billing will auto-renew on {renewalDate}",
                        values: {
                            renewalDate: a
                        }
                    })
                })]
            }), e.jsxs("div", {
                className: "mt-8 flex justify-end gap-2",
                children: [e.jsx(me, {
                    title: f.formatMessage({
                        id: "planRenewalModal.cancel",
                        defaultMessage: "Cancel"
                    }),
                    color: "secondary",
                    onClick: i
                }), e.jsx(me, {
                    title: f.formatMessage({
                        id: "planRenewalModal.confirm",
                        defaultMessage: "Confirm"
                    }),
                    color: "primary",
                    onClick: s,
                    loading: n
                })]
            })]
        })
    })
}
function ha(t) {
    return t == Mt ? [Q.plus.plusCostInEuros, Q.pro.proCostInEuros, xt] : t == _t ? [Q.plus.plusCostInPounds, Q.pro.proCostInPounds, bt] : [Q.plus.plusCost, Q.pro.proCost, Ct]
}
const Me = x.PLUS
  , ya = () => Se({
    queryKey: ["has-app-store-subscription-in-billing-retry"],
    queryFn: async () => await wt.safeGet("/subscriptions/has_app_store_subscription_in_billing_retry")
});
function Wt(t, a) {
    const s = t.data.subscriptionStatus.planType
      , n = t.getNextPlanType();
    let i = t.getDaysUntilPlanChanges()
      , l = n === x.PLUS && s === x.PRO;
    return a && !l && (i = t.getDaysUntilPlanRenews(),
    l = !0),
    {
        daysUntilPlanChanges: i,
        isDowngradeScheduled: l
    }
}
function Ue(t, a) {
    const s = Pt(new Date, t);
    return new Intl.DateTimeFormat(a,{
        year: "numeric",
        month: "short",
        day: "numeric"
    }).format(s)
}
function Ma(t, a, s) {
    let n;
    switch (t) {
    case "month":
        n = ys(new Date, a);
        break;
    case "year":
        n = hs(new Date, a);
        break
    }
    return new Intl.DateTimeFormat(s,{
        year: "numeric",
        month: "short",
        day: "numeric"
    }).format(n)
}
function ct(t) {
    return fs.includes(t) ? t : "USD"
}
function xa(t, a, s) {
    if (t === "plus-10-for-3-months")
        switch (s.currency) {
        case "USD":
            {
                const n = {
                    value: 10,
                    currency_code: ct(s.currency)
                };
                return {
                    plan_name: pe.PLUS,
                    title: "",
                    summary: a.formatMessage(Ae.plusSummary),
                    discount: n,
                    duration: {
                        num_periods: 3,
                        period: "month"
                    },
                    price_period: "recurring",
                    promotion_type: "discount",
                    promotion_type_label: null
                }
            }
        case "EUR":
        case "GBP":
            return {
                plan_name: pe.PLUS,
                title: "",
                summary: a.formatMessage(Ae.plusSummary),
                discount: {
                    percentage: 52.18
                },
                duration: {
                    num_periods: 3,
                    period: "month"
                },
                price_period: "recurring",
                promotion_type: "discount",
                promotion_type_label: null
            };
        case "INR":
            return null
        }
    else if (t === "plus-10-for-12-mos")
        switch (s.currency) {
        case "USD":
            {
                const n = {
                    value: 10,
                    currency_code: ct(s.currency)
                };
                return {
                    plan_name: pe.PLUS,
                    title: "",
                    summary: a.formatMessage(Ae.plusSummary),
                    discount: n,
                    duration: {
                        num_periods: 12,
                        period: "month"
                    },
                    price_period: "recurring",
                    promotion_type: "discount",
                    promotion_type_label: null
                }
            }
        case "EUR":
        case "GBP":
            return {
                plan_name: pe.PLUS,
                title: "",
                summary: a.formatMessage(Ae.plusSummary),
                discount: {
                    percentage: 52.18
                },
                duration: {
                    num_periods: 12,
                    period: "month"
                },
                price_period: "recurring",
                promotion_type: "discount",
                promotion_type_label: null
            };
        case "INR":
            return null
        }
    return null
}
const _a = ({analyticsParams: t, className: a, currentAccount: s, planLoading: n, isPromoLoading: i, onUpgradeButtonClick: l, setPlanLoading: o, plusPricingPlan: p=null, shouldShowAdditionalLinks: f=!0, billingDetails: c, promoCode: m=null, promoMetadata: h=null, onClose: d, disableForMobile: _=!1, shouldShowMemoryUpsell: C=!1, type: S}) => {
    const {data: w} = ft()
      , {data: Z, refetch: j} = Se(Ze)
      , {data: {value: T}={}} = ya()
      , W = s.features
      , b = fe()
      , O = !ms(b)
      , M = K()
      , H = ge()
      , [D,$] = u.useState(!1);
    let P = p || Is({
        shouldShowMemoryUpsell: C
    });
    const q = Xs({
        ctx: b,
        shouldLogExposure: !1
    })
      , {data: ne} = Ut(q);
    h == null && ne?.coupon === q && ne?.state === "eligible" && ea({
        ctx: b,
        shouldLogExposure: !0
    }) && (h = xa(q, M, c),
    m = q);
    const J = u.useRef(!1)
      , [X,ee] = u.useState(!1)
      , [A,B] = u.useState(!1)
      , [v,k] = u.useState(!1)
      , {recentlyDowngraded: te, recentlyCanceled: y, setRecentlyCanceled: N} = et();
    let I = [];
    const se = s.isOrWasPaidCustomer()
      , je = s.hasPaidSubscription()
      , U = je && s.isPlus()
      , ve = je && s.isPro()
      , de = s.getLastActiveSubscription()
      , Y = gt(b, "3950229590")
      , {prepareCheckoutSession: oe, navigateToCheckout: Ht} = It()
      , tt = ht(w)
      , Be = W.includes("disable_plus_upgrade_ui") && !se
      , Yt = W.includes("show_cancel_plus_ui")
      , {daysUntilPlanChanges: st, isDowngradeScheduled: Vt} = Wt(s, te)
      , L = u.useMemo( () => ({
        ...t,
        promoCode: m,
        planType: Me,
        isUpgradeUiDisabled: Be
    }), [t, m, Be])
      , $t = !!Z?.email
      , he = u.useRef(new Map)
      , Ge = u.useRef(null);
    u.useEffect( () => {
        if (!U && Y.get("enabled_prefetch_checkout_for_plus", !1)) {
            const G = {
                plan_name: pe.PLUS,
                billing_details: c,
                promo_code: m
            }
              , F = JSON.stringify(G);
            if (!he.current.has(F)) {
                g.logEventWithStatsig("Account Pay: Prefetch Checkout Session", "chatgpt_account_payment_modal_prefetch_checkout_session", L),
                he.current.clear();
                const ie = Y.get("skip_sentinel_checkout", !1)
                  , Te = oe(G, {
                    skipSentinelCheckout: ie
                });
                he.current.set(F, Te)
            }
        }
    }
    , [oe, L, c, m, W, U, Y]);
    const zt = () => {
        const G = {
            plan_name: pe.PLUS,
            billing_details: c,
            promo_code: m
        }
          , F = he.current.get(JSON.stringify(G));
        if (F)
            return g.logEventWithStatsig("Account Pay: Using Prefetched Checkout Session", "chatgpt_account_payment_modal_using_prefetched_checkout_session", L),
            F;
        g.logEventWithStatsig("Account Pay: Click to Fetch Checkout Session", "chatgpt_account_payment_modal_click_to_fetch_checkout_session", L),
        he.current.clear();
        const ie = Y.get("skip_sentinel_checkout", !1);
        return oe(G, {
            skipSentinelCheckout: ie
        })
    }
      , Kt = async ({skipEmailCheck: G}) => {
        if (!$t && !G) {
            k(!0);
            return
        }
        o(x.PLUS),
        g.logEvent("Account Pay: Payment Checkout Clicked", L),
        z(b, "chatgpt_account_payment_modal_upgrade_button_click", Me),
        Ge.current = Date.now();
        try {
            const F = await zt();
            let ie;
            Ge.current && (ie = Date.now() - Ge.current),
            g.logEvent("Account Pay: Navigating to Payment Checkout", {
                ...L,
                url: F.url ?? "",
                latency_ms: ie
            });
            const Te = {
                url: String(F.url ?? "")
            };
            ie !== void 0 && (Te.latency_ms = ie.toString()),
            z(b, "chatgpt_account_payment_modal_navigating_to_checkout", Me, Te),
            await Ht(F)
        } catch {
            H.warning(M.formatMessage(E.paymentErrorWarning), {
                hasCloseButton: !0
            })
        }
        o(null)
    }
      , qt = () => {
        $(!0),
        g.logEventWithStatsig("Cancel Plus: Opened cancel modal", "cancel_plus_start", {
            ...L,
            cancel_start_source: "manage plan"
        })
    }
      , Qt = () => {
        g.logEvent("Account Portal: Click iOS Manage Subscription", L)
    }
      , Zt = () => {
        g.logEvent("Account Portal: Click Android Manage Subscription", L)
    }
      , Jt = U && de.purchase_origin_platform === le.MOBILE_IOS
      , Xt = U && de.purchase_origin_platform === le.MOBILE_ANDROID
      , es = U && (de.purchase_origin_platform === le.WEBAPP || de.purchase_origin_platform === le.GRANTED) && s.hasCustomerObject() && !y && U && s.willRenewSubscription();
    tt && !U && I.push(e.jsx(ae, {
        to: gs,
        target: "_blank",
        className: "px-2 underline",
        children: e.jsx(r, {
            ...E.limitsApply
        })
    }, "row-plus-plan-usage-limits")),
    Jt && I.push(e.jsx(ae, {
        to: St,
        target: "_blank",
        onClick: Qt,
        className: "px-2 underline",
        children: M.formatMessage(Ce.manageSubscriptionIos.callToAction)
    }, "row-plus-plan-manage-ios")),
    Xt && I.push(e.jsx(ae, {
        to: jt,
        target: "_blank",
        onClick: Zt,
        children: M.formatMessage(Ce.manageSubscriptionAndroid.callToAction)
    }, "row-plus-plan-manage-android")),
    es && Yt && I.push(e.jsxs("button", {
        children: [e.jsx("span", {
            onClick: qt,
            className: "cursor-pointer px-2 underline",
            children: e.jsx(r, {
                ...Ce.cancelSubscriptionWeb.callToAction
            })
        }), e.jsx(na, {
            isOpen: D,
            onClose: () => $(!1),
            onCancelationComplete: () => N(!0),
            analyticsParams: L
        })]
    }, "row-cancel-subscription-link")),
    U && se && I.push(e.jsx(ae, {
        target: "_blank",
        to: qe,
        onClick: Je,
        className: "px-2 underline",
        children: e.jsx(r, {
            ...E.billingHelp
        })
    }, "row-plus-plan-help-link"));
    const We = ({skipAppStoreSubscriptionInBillingRetryCheck: G=!1, skipEmailCheck: F=!1}={}) => {
        if (T && !G)
            return ee(!0);
        if (l)
            return l(c, L);
        ve ? (g.logEvent("Account Pay: Payment Checkout Clicked", L),
        z(b, "chatgpt_account_payment_modal_upgrade_button_click", Me),
        B(!0)) : Kt({
            skipEmailCheck: F
        })
    }
      , we = (G, F) => e.jsx(De, {
        planType: Me,
        isCurrentPlan: U && !Ee,
        disabled: G,
        onClick: F,
        testId: "select-plan-button-plus-upgrade",
        activeColor: ve ? "secondary" : ts ? "primary" : void 0,
        children: n === x.PLUS && !A ? e.jsx(Pe, {}) : Ee && U && P.callToAction.promo ? M.formatMessage(P.callToAction.promo) : U ? M.formatMessage(P.callToAction.active) : at && O && P.callToAction.inactiveUnauthenticated ? M.formatMessage(P.callToAction.inactiveUnauthenticated) : M.formatMessage(P.callToAction.inactive)
    });
    Xe(v, {
        plan: L
    });
    const Ee = h != null
      , ts = h?.promotion_type === "student_discount"
      , at = h != null && "referrer_name"in h
      , ss = (!U || Ee) && n == null;
    I = Ee ? [] : I;
    let He = null;
    const ke = s.getDaysUntilPlanDiscountExpires();
    if (h != null ? P = ba(M, P, h, c.currency) : s.data.subscriptionStatus.discount && (P.cost = Rt(M, P.cost, s.data.subscriptionStatus.discount),
    h == null && (P.summary = Q.plus.plusSummaryWithDiscount,
    s.data.subscriptionStatus.discount.discount_type === Le.PERCENTAGE && (He = {
        discount: {
            percentage: s.data.subscriptionStatus.discount.amount,
            expires_at: ke ? Ue(ke, M.locale) : void 0
        }
    }),
    s.data.subscriptionStatus.discount.discount_type === Le.FIXED && (He = {
        discount: {
            value: s.data.subscriptionStatus.discount.amount,
            expires_at: ke ? Ue(ke, M.locale) : void 0
        }
    }))),
    i != null && i)
        return null;
    const as = Ca(s);
    return e.jsxs(e.Fragment, {
        children: [e.jsx(Oe, {
            planName: "plus",
            elementId: vt,
            pricingPlan: P,
            showForLine: !U && !tt,
            callToActionButton: Be ? e.jsx("div", {
                className: "relative w-full",
                children: e.jsx(be, {
                    side: "bottom",
                    sideOffset: 20,
                    label: M.formatMessage(E.highDemandDisabledText),
                    children: we(!0, () => {}
                    )
                })
            }) : _ && as ? e.jsx("div", {
                children: e.jsx(be, {
                    side: "top",
                    sideOffset: 20,
                    label: M.formatMessage({
                        id: "I2JCGZ",
                        defaultMessage: "Mobile subscriptions are currently not eligible for this promotion."
                    }),
                    onOpenChange: G => {
                        G && !J.current && (at && Ds.logMobileSubscriptionTooltipOpen(),
                        J.current = !0)
                    }
                    ,
                    children: e.jsx("div", {
                        children: we(!0, () => {}
                        )
                    })
                })
            }) : e.jsxs("div", {
                children: [st && Vt ? e.jsx(be, {
                    side: "top",
                    sideOffset: 20,
                    label: e.jsx(r, {
                        id: "8/N1rV",
                        defaultMessage: "Your subscription will change to Plus on {date}.",
                        values: {
                            date: Ue(st, M.locale)
                        }
                    }),
                    children: we(!0, () => {}
                    )
                }) : we(!ss, We), e.jsx(Ft, {
                    isOpen: X,
                    onClose: () => ee(!1),
                    onContinue: () => We({
                        skipAppStoreSubscriptionInBillingRetryCheck: !0
                    }),
                    analyticsParams: L
                }), A && e.jsx(Bt, {
                    isOpen: A,
                    onClose: () => B(!1),
                    accountId: s.id,
                    initialPlanType: x.PRO,
                    updatedPlanType: x.PLUS,
                    billingDetails: c
                })]
            }),
            secondaryCallToActionButton: S === "promo" ? e.jsx(V, {
                size: "large",
                color: "secondary",
                onClick: d,
                children: e.jsx(r, {
                    ...E.notNow
                })
            }) : null,
            additionalLinks: f ? I : [],
            type: S,
            promoMetadata: h,
            activeDiscountMetadata: He,
            billingDetails: c,
            className: a
        }), e.jsx(ce, {
            testId: "modal-add-email",
            isOpen: v,
            onClose: () => k(!1),
            type: "success",
            className: "max-w-sm",
            children: e.jsx(Qe, {
                enterEmailTitle: M.formatMessage(E.addEmailTitle),
                enterEmailDescription: M.formatMessage(E.addEmailDescription),
                onVerified: () => {
                    j(),
                    k(!1),
                    We({
                        skipEmailCheck: !0
                    })
                }
                ,
                cancelFlowButton: e.jsx(V, {
                    className: "w-full rounded-md",
                    color: "secondary",
                    onClick: () => k(!1),
                    children: e.jsx(r, {
                        ...E.cancelAddEmail
                    })
                })
            })
        })]
    })
}
;
function ba(t, a, s, n) {
    const {costTitle: i, currencySymbol: l} = Us(a, n)
      , o = i?.defaultMessage?.toString() ?? "20"
      , p = s.duration?.period ?? "month"
      , f = s.duration?.num_periods ?? 1
      , c = Ma(p, f, t.locale)
      , m = Rt(t, a.cost, s.discount, s.duration ?? {
        num_periods: 1,
        period: "month"
    })
      , h = l.code.defaultMessage?.toString() ?? "USD"
      , d = t.formatNumber(parseFloat(o) || 0, {
        style: "currency",
        currency: h,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
    let _;
    switch (p) {
    case "month":
        f === 1 ? _ = t.formatMessage(E.promoPlanDisclaimerForSingleMonth, {
            date: c,
            cost: d
        }) : _ = t.formatMessage(E.promoPlanDisclaimerForPluralMonths, {
            num_months: f,
            date: c,
            cost: d
        });
        break;
    case "year":
        f === 1 ? _ = t.formatMessage(E.promoPlanDisclaimerForSingleYear, {
            date: c,
            cost: d
        }) : _ = t.formatMessage(E.promoPlanDisclaimerForPluralYears, {
            num_years: f,
            date: c,
            cost: d
        });
        break;
    case "hour":
        throw new Error("Period 'hour' is not supported")
    }
    const C = "<article>" + t.formatMessage(E.termsApply) + "</article> " + _;
    return a = {
        ...a,
        summary: {
            id: "promoSummary",
            defaultMessage: s.summary
        },
        disclaimer: {
            id: "promoDisclaimer",
            defaultMessage: C,
            article: "https://help.openai.com/en/articles/10492689-chatgpt-plus-promotions-referrals"
        },
        cost: m,
        callToAction: {
            ...a.callToAction,
            promo: {
                id: "pricingPlanConstants.promo.callToAction",
                defaultMessage: "Apply to My Subscription",
                description: "Payment call to action for existing subscribers adding a discount to their plan"
            }
        }
    },
    a
}
function Ca(t) {
    const a = t.hasPaidSubscription()
      , s = t.getLastActiveSubscription()
      , n = a && s.purchase_origin_platform === le.MOBILE_IOS
      , i = a && s.purchase_origin_platform === le.MOBILE_ANDROID;
    return n || i
}
const E = re({
    promoPlanDisclaimerForPluralMonths: {
        id: "pricingPlanConstants.promoPlanDisclaimerForPluralMonths",
        defaultMessage: "Promo pricing applies for {num_months} months. Starting {date}, ChatGPT Plus will continue at {cost}/month. Cancel anytime."
    },
    promoPlanDisclaimerForSingleMonth: {
        id: "pricingPlanConstants.promoPlanDisclaimerForSingleMonth",
        defaultMessage: "Promo pricing applies for 1 month. Starting {date}, ChatGPT Plus will continue at {cost}/month. Cancel anytime."
    },
    promoPlanDisclaimerForPluralYears: {
        id: "pricingPlanConstants.promoPlanDisclaimerForPluralYears",
        defaultMessage: "Promo pricing applies for {num_years} years. Starting {date}, ChatGPT Plus will continue at {cost}/year. Cancel anytime."
    },
    promoPlanDisclaimerForSingleYear: {
        id: "pricingPlanConstants.promoPlanDisclaimerForSingleYear",
        defaultMessage: "Promo pricing applies for 1 year. Starting {date}, ChatGPT Plus will continue at {cost}/year. Cancel anytime."
    },
    termsApply: {
        id: "pricingPlanConstants.termsApply",
        defaultMessage: "Terms apply."
    },
    addEmailTitle: {
        id: "AccountPaymentModal.addEmailTitle",
        defaultMessage: "Email required"
    },
    addEmailDescription: {
        id: "AccountPaymentModal.addEmailDescription",
        defaultMessage: "You'll be able to login with this email. It will also be used for account updates (like password resets) and information about OpenAI services."
    },
    cancelAddEmail: {
        id: "AccountPaymentModal.cancelAddEmail",
        defaultMessage: "Cancel"
    },
    haveExistingPlan: {
        id: "AccountPaymentModal.haveExistingPlan",
        defaultMessage: "Have an existing plan?"
    },
    billingHelp: {
        id: "AccountPaymentModel.billingHelp",
        defaultMessage: "I need help with a billing issue"
    },
    paymentErrorWarning: {
        id: "AccountPaymentModal.paymentErrorWarning",
        defaultMessage: "The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."
    },
    accountErrorWarning: {
        id: "AccountPaymentModal.accountErrorWarning",
        defaultMessage: "The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com."
    },
    limitsApply: {
        id: "xda4i3",
        defaultMessage: "Limits apply"
    },
    notNow: {
        id: "AccountPaymentModal.notNow",
        defaultMessage: "Not Now"
    },
    highDemandDisabledText: {
        id: "AccountPaymentModal.highDemandDisabledText",
        defaultMessage: "Due to high demand, we've temporarily paused upgrades."
    }
})
  , dt = "openai.com/team/fj3ilksf"
  , ut = "https://persistent.oaistatic.com/chatgpt/team_refer_admin_banner.png"
  , Pa = ({...t}) => {
    const a = K()
      , s = fe()
      , n = ge()
      , [i,l] = u.useState(!1);
    Dt( () => {
        g.logEvent("Teams: Admin Refer Modal Opened"),
        z(s, "chatgpt_teams_admin_refer_modal_opened")
    }
    ),
    u.useEffect( () => {
        if (i) {
            const m = setTimeout( () => {
                l(!1)
            }
            , 2e3);
            return () => clearTimeout(m)
        }
    }
    , [i]);
    const [o,p] = u.useState(!1);
    u.useEffect( () => {
        const m = new Image;
        m.src = ut,
        m.onload = () => p(!0)
    }
    , []);
    const f = async () => {
        g.logEvent("Teams: Admin Refer Modal Copy Link Clicked"),
        z(s, "chatgpt_teams_admin_refer_modal_link_copied"),
        await Fs(dt),
        n.success(a.formatMessage(Q.team.teamCopyLinkSuccess)),
        l(!0)
    }
      , c = () => {
        g.logEvent("Teams: Admin Refer Modal Closed"),
        z(s, "chatgpt_teams_admin_refer_modal_closed"),
        t.onClose()
    }
    ;
    return o ? e.jsxs(ce, {
        isOpen: !0,
        onClose: c,
        showCloseButton: !1,
        className: "max-w-md",
        contentClassName: "p-0!",
        testId: "modal-team-refer-admin-modal",
        children: [e.jsx("div", {
            className: "absolute end-4 top-4 z-50",
            children: e.jsx(Ms, {
                className: "text-token-text-secondary ring-0! outline-0! hover:bg-transparent focus:ring-0! focus:ring-offset-0! focus:outline-0! dark:hover:bg-transparent",
                onClick: c
            })
        }), e.jsx("img", {
            src: ut,
            className: "h-[230px] w-full object-cover object-top",
            alt: ""
        }), e.jsxs("div", {
            className: "flex flex-col items-center p-8",
            children: [e.jsx("div", {
                className: "font text-xl font-medium",
                children: e.jsx(r, {
                    ...Ie.title
                })
            }), e.jsx("div", {
                className: "mt-2 w-full text-center text-base",
                children: e.jsx(r, {
                    ...Ie.description
                })
            }), e.jsx("div", {
                className: "mt-6 w-full justify-center rounded-3xl border-[1px] border-[#C2EAE3] bg-[#F4FCFB] p-5 text-center font-medium",
                children: dt
            }), e.jsx(V, {
                className: "mt-3 w-full",
                icon: Ls,
                color: i ? "secondary" : "primary",
                onClick: f,
                children: e.jsx(r, {
                    ...i ? Ie.linkCopied : Ie.copyLink
                })
            })]
        })]
    }) : null
}
  , Ie = re({
    title: {
        id: "pricing.team.referAdmin.title",
        defaultMessage: "Get your company to cover this"
    },
    description: {
        defaultMessage: "Want to use ChatGPT for work? Share this link so your company can set up a Team plan.",
        id: "pricing.team.referAdmin.description"
    },
    linkCopied: {
        defaultMessage: "Link copied!",
        id: "pricing.team.referAdmin.linkCopied"
    },
    copyLink: {
        defaultMessage: "Copy link",
        id: "pricing.team.referAdmin.copyLink"
    }
})
  , xe = x.TEAM
  , Sa = ({analyticsParams: t, planLoading: a, billingDetails: s}) => {
    const {data: n, refetch: i} = Se(Ze)
      , l = K()
      , o = fe()
      , p = xs(o)
      , f = mt()
      , [c,m] = u.useState(!1)
      , h = p?.isTeam()
      , d = p?.isPlus()
      , _ = {
        ...t,
        planType: xe
    }
      , C = !!n?.email
      , S = Fe(o, "2019561465").get("enabled", !1);
    let w = Rs(S);
    const Z = Os()
      , {data: j} = Ut(Z ?? "")
      , T = Gs
      , W = j?.coupon === Bs && j?.state === "eligible";
    let b = null;
    W && (w = {
        ...w,
        cost: {
            ...w.cost,
            costInDollars: T.promoCost,
            costInPounds: T.promoCost,
            costInEuros: T.promoCost,
            costDuration: T.promoCostDuration
        },
        disclaimer: T.team1dollarPromoDisclaimer
    },
    b = {
        plan_name: "chatgptteamplan",
        title: "",
        summary: "",
        discount: {
            value: 0,
            currency_code: "USD"
        },
        duration: {
            num_periods: 1,
            period: "month"
        },
        price_period: "recurring",
        promotion_type: "discount",
        promotion_type_label: null
    });
    const O = H => {
        if (!C && !H) {
            m(!0);
            return
        }
        g.logEvent("Account Pay: Payment Checkout Clicked", _),
        z(o, "chatgpt_account_payment_modal_upgrade_button_click", xe),
        Ws.setPurchaseWorkspaceData({
            minimumSeats: Hs,
            billingDetails: s,
            promoData: j?.state === "eligible" ? j : void 0
        }),
        bs(f)
    }
    ;
    Xe(c, {
        plan: _
    });
    const M = Fe(o, "2215056542").get("variant", "control");
    return e.jsxs(e.Fragment, {
        children: [e.jsx(Oe, {
            planName: "team",
            elementId: Et,
            pricingPlan: w,
            promoData: j,
            promoMetadata: b,
            callToActionButton: e.jsxs("div", {
                className: "flex flex-col gap-2",
                children: [h && e.jsx(De, {
                    planType: xe,
                    isCurrentPlan: !0,
                    disabled: a != null || h,
                    onClick: () => O(),
                    testId: "select-plan-button-teams-upgrade",
                    children: l.formatMessage(w.callToAction.active)
                }), e.jsx("div", {
                    className: "w-full",
                    children: e.jsx(De, {
                        planType: xe,
                        disabled: a != null,
                        onClick: () => O(),
                        testId: "select-plan-button-teams-create",
                        children: h || d ? l.formatMessage(w.callToAction.create) : l.formatMessage(w.callToAction.inactive)
                    })
                }), !h && M !== "control" && e.jsx(De, {
                    icon: $s,
                    planType: xe,
                    color: "secondary",
                    disabled: a != null,
                    onClick: () => _s(o, Pa),
                    testId: "select-plan-button-teams-refer-admin",
                    children: l.formatMessage(M === "variant-1" ? Q.team.teamPlanReferManager : Q.team.teamPlanReferAdmin)
                })]
            }),
            billingDetails: s
        }), e.jsx(ce, {
            testId: "modal-add-email",
            isOpen: c,
            onClose: () => m(!1),
            type: "success",
            className: "max-w-sm",
            children: e.jsx(Qe, {
                enterEmailTitle: l.formatMessage(E.addEmailTitle),
                enterEmailDescription: l.formatMessage(E.addEmailDescription),
                onVerified: async () => {
                    m(!1),
                    await i(),
                    O(!0)
                }
            })
        })]
    })
}
  , ja = () => Se({
    queryKey: ["has-app-store-subscription-in-billing-retry"],
    queryFn: async () => await wt.safeGet("/subscriptions/has_app_store_subscription_in_billing_retry")
})
  , _e = "pro"
  , va = ({analyticsParams: t, currentAccount: a, planLoading: s, onSubmit: n, setPlanLoading: i, billingDetails: l, variant: o}) => {
    const {data: p, isError: f} = ja()
      , c = fe()
      , {data: m, refetch: h} = Se(Ze)
      , d = K()
      , _ = ge()
      , [C] = os()
      , S = C.get("checkout_from")
      , [w,Z] = u.useState(!1)
      , [j,T] = u.useState(!1)
      , [W,b] = u.useState(!1)
      , O = a.getLastActiveSubscription()
      , M = a.isOrWasPaidCustomer()
      , H = a.hasPaidSubscription()
      , D = H && a.isPro()
      , $ = !!m?.email
      , {prepareCheckoutSession: P, navigateToCheckout: q} = It()
      , {recentlyDowngraded: ne} = et()
      , {daysUntilPlanChanges: J, isDowngradeScheduled: X} = Wt(a, ne)
      , ee = it(c, "1719651090")
      , A = Ys({
        isOperatorEnabled: ee
    })
      , B = []
      , v = {
        ...t,
        planType: _e
    }
      , k = H && O.purchase_origin_platform === le.MOBILE_IOS
      , te = H && O.purchase_origin_platform === le.MOBILE_ANDROID
      , y = async Y => {
        if (!$ && !Y) {
            b(!0);
            return
        }
        i(x.PRO),
        g.logEvent("Account Pay: Payment Checkout Clicked", v),
        z(c, "chatgpt_account_payment_modal_upgrade_button_click", _e);
        try {
            const oe = await P({
                plan_name: "chatgptpro",
                billing_details: l
            });
            n?.(),
            g.logEvent("Account Pay: Navigating to Payment Checkout", {
                ...v,
                url: oe.url ?? ""
            }),
            z(c, "chatgpt_account_payment_modal_navigating_to_checkout", _e, {
                url: oe.url ?? ""
            }),
            S === "vza493q" && Ye.setItem(Ve.CheckoutFrom, S),
            await q(oe)
        } catch {
            _.warning(d.formatMessage(E.paymentErrorWarning), {
                hasCloseButton: !0
            })
        }
        i(null)
    }
      , N = () => {
        g.logEvent("Account Portal: Click iOS Manage Subscription", v)
    }
      , I = () => {
        g.logEvent("Account Portal: Click Android Manage Subscription", v)
    }
    ;
    D && k && B.push(e.jsx(ae, {
        to: St,
        target: "_blank",
        onClick: N,
        className: "px-2 underline",
        children: d.formatMessage(Ce.manageSubscriptionIos.callToAction)
    }, "row-plus-plan-manage-ios")),
    D && te && B.push(e.jsx(ae, {
        to: jt,
        target: "_blank",
        onClick: I,
        children: d.formatMessage(Ce.manageSubscriptionAndroid.callToAction)
    }, "row-plus-plan-manage-android")),
    M && B.push(e.jsx(ae, {
        target: "_blank",
        to: qe,
        onClick: Je,
        className: "px-2 underline",
        children: e.jsx(r, {
            ...E.billingHelp
        })
    }, "row-plus-plan-help-link"));
    const se = function() {
        Z(!w)
    }
      , je = function() {
        T(!j)
    }
      , U = it(c, "1382475798")
      , ve = async () => {
        let Y = a.hasPaidSubscription() && a.isPlus();
        U && (Y = Y && !a.isActiveSubscriptionGratis()),
        Y ? (g.logEvent("Account Pay: Payment Checkout Clicked", v),
        z(c, "chatgpt_account_payment_modal_upgrade_button_click", _e),
        T(!0)) : await y()
    }
      , de = f || !p || !p.value ? ve : () => {
        se()
    }
    ;
    return Xe(W, {
        plan: v
    }),
    e.jsxs(e.Fragment, {
        children: [e.jsx(Oe, {
            planName: "pro",
            pricingPlan: A,
            showForLine: !1,
            callToActionButton: e.jsxs("div", {
                children: [a.isWorkspacePlan() && o === "operator" ? e.jsx(V, {
                    fullWidth: !0,
                    size: "large",
                    color: "primary",
                    disabled: !0,
                    "data-testid": "select-plan-button-pro-upgrade",
                    children: d.formatMessage(pt.switchToPersonalAccount)
                }) : k || te ? e.jsx(be, {
                    side: "top",
                    sideOffset: 20,
                    label: d.formatMessage(pt.switchToMobile),
                    onOpenChange: Y => {
                        Y && (g.logEvent("Account Pay: Show Mobile Subscription Tooltip", v),
                        z(c, "chatgpt_account_payment_modal_show_mobile_subscription_tooltip", _e))
                    }
                    ,
                    children: e.jsx(V, {
                        fullWidth: !0,
                        size: "large",
                        color: "primary",
                        disabled: !0,
                        "data-testid": "select-plan-button-pro-upgrade",
                        children: d.formatMessage(A.callToAction.inactive)
                    })
                }) : X && J ? e.jsx(be, {
                    side: "top",
                    sideOffset: 20,
                    label: e.jsx(r, {
                        id: "jgTAPh",
                        defaultMessage: "Your subscription will remain active until {date}, when it will change to Plus.",
                        values: {
                            date: Ue(J, d.locale)
                        }
                    }),
                    children: e.jsx(V, {
                        fullWidth: !0,
                        size: "large",
                        color: "primary",
                        disabled: D || s != null,
                        "data-testid": "select-plan-button-pro-upgrade",
                        className: D || s != null ? "bg-token-sidebar-surface-tertiary text-token-text-primary hover:bg-token-sidebar-surface-tertiary dark:bg-token-text-tertiary dark:text-token-text-primary dark:hover:bg-token-text-tertiary border-none font-semibold" : "",
                        children: s === x.PRO && !j ? e.jsx(Pe, {}) : D ? d.formatMessage(A.callToAction.active) : d.formatMessage(A.callToAction.inactive)
                    })
                }) : e.jsx(V, {
                    fullWidth: !0,
                    size: "large",
                    color: "primary",
                    disabled: D || s != null,
                    onClick: de,
                    "data-testid": "select-plan-button-pro-upgrade",
                    className: D || s != null ? "bg-token-sidebar-surface-tertiary text-token-text-primary hover:bg-token-sidebar-surface-tertiary dark:bg-token-text-tertiary dark:text-token-text-primary dark:hover:bg-token-text-tertiary border-none font-semibold" : "",
                    children: s === x.PRO && !j ? e.jsx(Pe, {}) : D ? d.formatMessage(A.callToAction.active) : d.formatMessage(A.callToAction.inactive)
                }), e.jsx(Ft, {
                    isOpen: w,
                    onClose: se,
                    onContinue: y,
                    analyticsParams: v
                }), j && e.jsx(Bt, {
                    isOpen: j,
                    onClose: je,
                    accountId: a.id,
                    initialPlanType: x.PLUS,
                    updatedPlanType: x.PRO,
                    billingDetails: l
                })]
            }),
            additionalLinks: B,
            className: "bg-token-main-surface-primary",
            billingDetails: l
        }), e.jsx(ce, {
            testId: "modal-add-email",
            isOpen: W,
            onClose: () => b(!1),
            type: "success",
            className: "max-w-sm",
            children: e.jsx(Qe, {
                enterEmailTitle: d.formatMessage(E.addEmailTitle),
                enterEmailDescription: d.formatMessage(E.addEmailDescription),
                onVerified: () => {
                    h(),
                    b(!1),
                    y(!0)
                }
                ,
                cancelFlowButton: e.jsx(V, {
                    className: "w-full rounded-md",
                    color: "secondary",
                    onClick: () => b(!1),
                    children: e.jsx(r, {
                        ...E.cancelAddEmail
                    })
                })
            })
        })]
    })
}
  , pt = re({
    switchToPersonalAccount: {
        id: "y5FjSF",
        defaultMessage: "Switch to a personal account to upgrade"
    },
    switchToMobile: {
        id: "gbjsg6",
        defaultMessage: "It looks like you already have an active mobile subscription. Switch to your mobile app to upgrade"
    }
});
function wa({analyticsParams: t, currentAccount: a, planLoading: s, selectedTab: n, setPlanLoading: i, shouldSplitBetweenPersonalAndBusiness: l, isEnterpriseEnabled: o, billingDetails: p, variant: f, scrollExperimentVariant: c, shouldShowMemoryUpsell: m, onClose: h}) {
    const d = []
      , _ = a.hasPaidSubscription()
      , C = _ || c === "remove_free_column";
    return f === "operator" ? (_ && a.isPlus() && d.push("plus"),
    d.push("pro")) : l ? n === "personal" ? (C || d.push("free"),
    d.push("plus"),
    d.push("pro")) : d.push("team") : (C || d.push("free"),
    (!a.isTeam() || !a.isEnterprisey() && o) && (d.push("plus"),
    d.push("pro")),
    d.push("team")),
    d.length === 0 && kt.addError(new Error("Account payment modal missing columns")),
    d.map(S => {
        switch (S) {
        case "free":
            return e.jsx(ta, {
                billingDetails: p
            }, S);
        case "plus":
            return e.jsx(_a, {
                analyticsParams: t,
                currentAccount: a,
                setPlanLoading: i,
                planLoading: s,
                billingDetails: p,
                shouldShowMemoryUpsell: m,
                onClose: h,
                type: a.isFree() ? "highlight" : "standard"
            }, S);
        case "team":
            return e.jsx(Sa, {
                analyticsParams: t,
                billingDetails: p,
                currentAccount: a,
                planLoading: s
            }, S);
        case "pro":
            return e.jsx(va, {
                analyticsParams: t,
                currentAccount: a,
                setPlanLoading: i,
                planLoading: s,
                billingDetails: p,
                variant: f
            }, S)
        }
    }
    )
}
const Ea = ({defaultTab: t}) => {
    const s = !Tt()
      , n = fe();
    return s && t === "personal" ? Fe(n, "69414132").get("variant", "control") : null
}
;
function Ba({currentAccount: t, defaultTab: a="personal", hasEnterpriseFooter: s=!0, onClose: n, subtitle: i, title: l, variant: o="default"}) {
    const [p,f] = u.useState(null)
      , c = is()
      , m = ls()
      , h = Ea({
        defaultTab: a
    })
      , d = Tt()
      , _ = fe()
      , C = Fe(_, "2330365894", {
        disableExposureLog: d
    }).get("enabled", !1)
      , S = (d || C) && o !== "operator"
      , w = u.useMemo( () => ({
        ...t.subscriptionAnalyticsParams,
        referrer: document.referrer
    }), [t])
      , Z = mt()
      , j = ge()
      , T = u.useCallback( () => {
        g.logEvent("Account Pay: Close Account Payment Modal", w),
        n()
    }
    , [w, n])
      , W = Vs();
    u.useEffect( () => {
        const y = localStorage.getItem(`subscriptionUpdateMessage_${t.id}`);
        if (y) {
            localStorage.removeItem(`subscriptionUpdateMessage_${t.id}`),
            j.success(y, {
                hasCloseButton: !0
            });
            const N = setTimeout( () => {
                T()
            }
            , 5e3);
            return () => {
                clearTimeout(N)
            }
        }
    }
    , [t.id, j, T]);
    const [b,O] = u.useState(a)
      , {country: M, setCountry: H, userCountry: D} = zs()
      , $ = ka({
        currentAccount: t,
        selectedTab: b
    })
      , P = Ks({
        country: $ ? M : vs,
        currentAccount: t,
        location: "AccountPaymentModal",
        shouldUsePaidSubscriptionBillingCurrency: b === "personal"
    });
    Dt( () => {
        const y = c.state?.[Cs]
          , N = c.key;
        y && Z({
            hash: c.hash,
            search: c.search
        }, {
            replace: !0,
            state: {}
        }),
        Ps.count(Ss.DEFAULT, "chatgpt_account_payment_modal_show", [{
            key: "location",
            value: y
        }, {
            key: "locationKey",
            value: N
        }, {
            key: "navigationType",
            value: m
        }, {
            key: "initialTab",
            value: a
        }, {
            key: "initialCountrySelectorCountry",
            value: M
        }, {
            key: "selectedCountry",
            value: P.country ?? ""
        }, {
            key: "selectedCurrency",
            value: P.currency ?? ""
        }, {
            key: "userCountry",
            value: D ?? ""
        }, {
            key: "isCountrySelectorEnabled",
            value: String($)
        }]),
        g.logEventWithStatsig("Account Pay: Account Payment Modal Show", "chatgpt_account_payment_modal_show", {
            ...w,
            initialTab: a,
            location: y,
            locationKey: N,
            navigationType: m,
            initialCountrySelectorCountry: M,
            selectedCountry: P.country ?? "",
            selectedCurrency: P.currency ?? "",
            userCountry: D ?? "",
            isCountrySelectorEnabled: $
        })
    }
    );
    const q = u.useCallback(y => {
        kt.addAction("chatgpt_selected_country_changed_in_pricing_modal", {
            old_selected_country: M,
            new_selected_country: y
        }),
        g.logEventWithStatsig("Selected country changed in pricing modal", "chatgpt_selected_country_changed_in_pricing_modal", {
            old_selected_country: M,
            new_selected_country: y
        }),
        H(y)
    }
    , [M, H])
      , ne = y => {
        O(y),
        g.logEventWithStatsig("Account Pay: Account Payment Modal Toggle Clicked", "chatgpt_account_payment_modal_toggle_clicked", {
            selectedTab: y
        })
    }
      , J = 136
      , [X,ee] = u.useState()
      , A = u.useRef(null);
    u.useEffect( () => {
        const y = () => {
            if (A.current) {
                const N = document.documentElement.clientHeight
                  , I = A.current.getBoundingClientRect().height
                  , se = N - I;
                ee(Math.max(se, J))
            }
        }
        ;
        return y(),
        window.addEventListener("resize", y),
        () => window.removeEventListener("resize", y)
    }
    , [b]);
    const B = wa({
        analyticsParams: w,
        currentAccount: t,
        planLoading: p,
        selectedTab: b,
        setPlanLoading: f,
        shouldSplitBetweenPersonalAndBusiness: S,
        isEnterpriseEnabled: !1,
        billingDetails: P,
        variant: o,
        scrollExperimentVariant: h,
        shouldShowMemoryUpsell: W,
        onClose: n
    })
      , v = Ta({
        defaultTitle: l,
        hasProSubscription: t.isPro()
    })
      , k = u.useRef(!1)
      , te = u.useRef(!1);
    return u.useEffect( () => {
        const y = document.getElementById(vt);
        y?.scrollIntoView && !te.current && h === "scroll_to_plus" && (y.scrollIntoView({
            behavior: "smooth"
        }),
        te.current = !0)
    }
    , [h]),
    u.useEffect( () => {
        if (C)
            return;
        const y = document.getElementById(Et);
        if (!(!y || !y.scrollIntoView || k.current)) {
            if (A.current && !S && a === "business")
                y.scrollIntoView({
                    behavior: "smooth"
                }),
                g.logEvent("Account Pay: Account Payment Modal Scroll", {
                    selectedTab: "business",
                    scrollSource: "auto"
                }),
                k.current = !0;
            else if (!S) {
                const N = new IntersectionObserver(I => {
                    I.some(se => se.isIntersecting) && (g.logEvent("Account Pay: Account Payment Modal Scroll", {
                        selectedTab: "business",
                        scrollSource: "manual"
                    }),
                    k.current = !0,
                    N.disconnect())
                }
                ,{
                    root: null,
                    threshold: .5
                });
                return N.observe(y),
                () => N.disconnect()
            }
        }
    }
    , [t, a, C, S]),
    e.jsxs(ce, {
        testId: "modal-account-payment",
        size: "fullscreen",
        isOpen: !0,
        onClose: T,
        type: "success",
        className: "flex flex-col",
        removePopoverStyling: !0,
        children: [e.jsxs("div", {
            ref: A,
            children: [e.jsxs("div", {
                className: "relative grid grid-cols-[1fr_auto_1fr] px-6 py-4 md:pt-[4.5rem] md:pb-10",
                children: [e.jsx("div", {}), e.jsxs("div", {
                    className: "my-1 flex flex-col items-center justify-center md:mt-0 md:mb-0",
                    children: [e.jsx("div", {
                        className: "text-2xl font-semibold md:text-3xl",
                        children: e.jsx(r, {
                            ...v
                        })
                    }), i ? e.jsx("div", {
                        className: "text-token-text-secondary mt-3 mb-1",
                        children: e.jsx(r, {
                            ...i
                        })
                    }) : null]
                }), e.jsx("button", {
                    className: "text-token-text-primary justify-self-end opacity-50 transition hover:opacity-75 md:absolute md:end-6 md:top-6",
                    onClick: () => {
                        T()
                    }
                    ,
                    children: e.jsx(yt, {
                        className: lt({
                            "h-5 w-5": !d,
                            "icon-lg": d
                        })
                    })
                })]
            }), t.isPersonalAccount() && S ? e.jsx("div", {
                className: "mb-3 flex justify-center md:mb-10",
                children: e.jsx("div", {
                    className: "w-[fit-content]",
                    children: e.jsx(Zs, {
                        value: b,
                        onChange: ne
                    })
                })
            }) : null, e.jsx("div", {
                className: "flex flex-col justify-center gap-4 px-3 py-3 md:min-h-[30rem] md:flex-row md:gap-0 md:py-0",
                children: B
            })]
        }), e.jsxs("div", {
            className: "relative grid grid-cols-[1fr_auto_1fr]",
            style: {
                height: `${X}px`
            },
            children: [e.jsx("div", {}), s ? e.jsxs("span", {
                className: "text-token-text-secondary mt-8 mb-12 flex flex-col items-center justify-start gap-2 text-sm md:mt-8 md:mb-8",
                children: [e.jsx(Qs, {}), e.jsxs("div", {
                    className: "flex flex-col items-center justify-center",
                    children: [e.jsx(r, {
                        ...Re.needMoreCapabilities
                    }), e.jsx("div", {
                        children: e.jsx(r, {
                            ...Re.seeChatGptEnterprise,
                            values: {
                                link: y => e.jsx(ae, {
                                    target: "_blank",
                                    to: js,
                                    onClick: () => {
                                        g.logEventWithStatsig("Account Pay: Click see enterprise link from Modal", "chatgpt_account_payment_modal_enterprise_link_clicked")
                                    }
                                    ,
                                    className: "mx-1 underline",
                                    children: y
                                })
                            }
                        })
                    })]
                })]
            }) : null, e.jsx("span", {
                "data-testid": "country-selector-in-pricing-modal",
                className: lt({
                    hidden: !$
                }, "text-token-text-primary justify-self-end opacity-50 transition hover:opacity-75 md:absolute md:end-4 md:bottom-4"),
                children: e.jsx(qs, {
                    onChange: q,
                    value: M
                })
            })]
        })]
    })
}
function ka({currentAccount: t, selectedTab: a}) {
    return !!(!t.hasPaidSubscription() || (t.isPlus() || t.isPro()) && a === "business" || t.isTeam())
}
function Ta({defaultTitle: t, hasProSubscription: a}) {
    return t || (a ? Re.proModalTitle : Re.modalTitle)
}
const Re = re({
    modalTitle: {
        id: "AccountPaymentModal.modalTitle",
        defaultMessage: "Upgrade your plan"
    },
    proModalTitle: {
        id: "AccountPaymentModal.proModalTitle",
        defaultMessage: "Choose your plan"
    },
    modalFooterCapabilities: {
        id: "AccountPaymentModal.modalFooterCapabilities",
        defaultMessage: "Need more capabilities? See <link> ChatGPT Enterprise </link>"
    },
    needMoreCapabilities: {
        id: "SdJWr7",
        defaultMessage: "Need more capabilities for your business?"
    },
    seeChatGptEnterprise: {
        id: "7C5fuF",
        defaultMessage: "See<link>ChatGPT Enterprise</link>"
    },
    promoNotEligibleMessage: {
        id: "AccountPaymentModal.promoNotEligibleMessage",
        defaultMessage: "Thanks for being a susbcriber. Since you already use ChatGPT Plus, you're not eligible for this offer."
    }
});
export {Ba as A, _a as P, pa as T, ha as a, ra as b, ma as c, Bt as d, Oa as g, Je as h};
//# sourceMappingURL=nr1x4yr151pbkkq3.js.map
