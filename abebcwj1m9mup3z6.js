import {h as D, e as B, r as N, j as f, f as O} from "./juy90og0wtbp77qa.js";
import {n as y, A as x, E as Y, B as A, F as b, G as M, P, H as v, I as L} from "./ckp56qklot786ulr.js";
import {u as I} from "./nqj34k5dky4x5suq.js";
import {L as g, b as p, a7 as U, P as h, al as _, fD as R, fx as w, fv as k} from "./dc2xxjkicf2pz0mj.js";
const S = x.hasDismissedPromoRedemption
  , C = "month"
  , F = "year"
  , E = "hour";
function z() {
    const {eligible: e} = y(S);
    return g.getItem(p.PromoCode) ? e : !1
}
function J() {
    const e = D()
      , {markAsViewed: t} = y(S)
      , n = B()
      , o = U()
      , {initialBillingDetails: r} = I(o, !0)
      , l = g.getItem(p.PromoCode)
      , {promoMetadata: a} = Y(l)
      , i = a != null;
    if (N.useEffect( () => {
        i && (h.logEvent("Promo Redemption Banner Shown", {
            promoCode: l
        }),
        _.logEvent("chatgpt_promo_redemption_banner_shown"))
    }
    , [i, l]),
    !i)
        return null;
    const d = j(e, r, a)
      , m = H(e, r, a)
      , s = f.jsxs("div", {
        className: "grow",
        children: [f.jsx("div", {
            className: "mb-0.5 font-semibold",
            children: d
        }), f.jsx("span", {
            className: "text-token-text-secondary",
            children: m
        })]
    });
    return f.jsx(A, {
        onPrimaryCtaClick: () => {
            const u = g.getItem(p.PromoCode);
            g.removeItem(p.PromoCode),
            t(),
            n(`/p/${u}#pricing`),
            h.logEvent("Promo Redemption Banner Redeem Button Clicked", {
                promoCode: u
            }),
            _.logEvent("chatgpt_promo_redemption_banner_redeem_button_clicked")
        }
        ,
        primaryCtaText: e.formatMessage(c.bannerPrimaryCta),
        onDismiss: t,
        content: s
    })
}
function G(e) {
    const t = e.currency;
    let n;
    switch (t) {
    case k:
        n = v;
        break;
    case w:
        n = P;
        break;
    default:
        n = P
    }
    return n
}
function T(e, t) {
    const {discount: n} = t;
    let o = G(e);
    if ("percentage"in n)
        o = (1 - n?.percentage / 100) * L;
    else if ("value"in n) {
        const r = n?.value;
        o -= r
    }
    return o
}
function j(e, t, n) {
    const {discount: o, duration: r} = n
      , {currencySymbol: l} = b(M(), t.currency)
      , a = r ? r.period : C
      , i = r ? r.num_periods : 1;
    if ("percentage"in o) {
        const d = o?.percentage;
        return e.formatMessage(c.bannerTitleForPercentageDiscount, {
            discount: d
        })
    } else if ("value"in o) {
        const d = T(t, n)
          , m = l.code.defaultMessage?.toString() ?? R
          , s = e.formatNumber(d, {
            style: "currency",
            currency: m,
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        });
        let u;
        switch (a) {
        case C:
            i === 1 ? u = e.formatMessage(c.bannerTitleForSingleMonth, {
                cost: s
            }) : u = e.formatMessage(c.bannerTitleForPluralMonths, {
                cost: s,
                num_months: i
            });
            break;
        case F:
            i === 1 ? u = e.formatMessage(c.bannerTitleForSingleYear, {
                cost: s
            }) : u = e.formatMessage(c.bannerTitleForPluralYears, {
                cost: s,
                num_years: i
            });
            break;
        case E:
            throw new Error("Period 'hour' is not supported")
        }
        return u
    }
}
function H(e, t, n) {
    const {duration: o} = n
      , {currencySymbol: r} = b(M(), t.currency)
      , l = o ? o.period : C
      , a = o ? o.num_periods : 1
      , i = r.code.defaultMessage?.toString() ?? R
      , d = T(t, n)
      , m = e.formatNumber(d, {
        style: "currency",
        currency: i,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
    let s;
    switch (l) {
    case C:
        a === 1 ? s = e.formatMessage(c.bannerContentForSingleMonth, {
            cost: m
        }) : s = e.formatMessage(c.bannerContentForPluralMonths, {
            num_months: a,
            cost: m
        });
        break;
    case F:
        a === 1 ? s = e.formatMessage(c.bannerContentForSingleYear, {
            cost: m
        }) : s = e.formatMessage(c.bannerContentForPluralYears, {
            num_years: a,
            cost: m
        });
        break;
    case E:
        throw new Error("Period 'hour' is not supported")
    }
    return s
}
const c = O({
    bannerTitleForPluralMonths: {
        id: "promoRedemptionBannerTitleForPluralMonths",
        defaultMessage: "Get Plus for {cost}/month for the first {num_months} months"
    },
    bannerTitleForSingleMonth: {
        id: "promoRedemptionBannerTitleForSingleMonth",
        defaultMessage: "Get Plus for {cost}/month for the first month"
    },
    bannerTitleForPluralYears: {
        id: "promoRedemptionBannerTitleForPluralYears",
        defaultMessage: "Get Plus for {cost}/year for the first {num_years} years"
    },
    bannerTitleForSingleYear: {
        id: "promoRedemptionBannerTitleForSingleYear",
        defaultMessage: "Get Plus for {cost}/year for the first year"
    },
    bannerTitleForPercentageDiscount: {
        id: "promoRedemptionBannerTitleForPercentageDiscount",
        defaultMessage: "Finish redeeming your {discount}% off code for Plus"
    },
    bannerContentForPluralMonths: {
        id: "promoRedemptionBannerContentForPluralMonths",
        defaultMessage: "Get {num_months} months of expanded access for only {cost} per month."
    },
    bannerContentForSingleMonth: {
        id: "promoRedemptionBannerContentForSingleMonth",
        defaultMessage: "Get 1 month of expanded access for only {cost} per month."
    },
    bannerContentForPluralYears: {
        id: "promoRedemptionBannerContentForPluralYears",
        defaultMessage: "Get {num_years} years of expanded access for only {cost} per year."
    },
    bannerContentForSingleYear: {
        id: "promoRedemptionBannerContentForSingleYear",
        defaultMessage: "Get 1 year of expanded access for only {cost} per year."
    },
    bannerPrimaryCta: {
        id: "promoRedemptionBannerPrimaryCta",
        defaultMessage: "Redeem"
    }
});
export {J as P, S as a, z as u};
//# sourceMappingURL=abebcwj1m9mup3z6.js.map
