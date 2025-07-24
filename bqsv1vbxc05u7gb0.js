import {e as c, f as a, a7 as u, bd as l} from "./dc2xxjkicf2pz0mj.js";
import {u as d} from "./nqj34k5dky4x5suq.js";
import {r as b} from "./juy90og0wtbp77qa.js";
function A() {
    const n = u()
      , {isUnauthenticated: t} = l()
      , e = c()
      , r = a(e, "766296922")
      , s = a(e, "3148583717");
    if (!r)
        return {
            isEnabled: s,
            reason: s ? "none" : "disabled"
        };
    if (t)
        return {
            isEnabled: s,
            reason: s ? "none" : "disabled"
        };
    const i = n?.isDelinquent
      , o = n?.ssoConnectionName;
    return {
        isEnabled: s && !i && !o,
        reason: s ? i ? "delinquent" : o ? "sso" : "none" : "disabled"
    }
}
function E() {
    const n = c();
    return a(n, "1759425419")
}
function p() {
    const n = u()
      , {initialBillingDetails: t} = d(n, !0)
      , e = b.useMemo( () => n?.subscriptionAnalyticsParams ?? {}, [n]);
    return {
        billingDetails: t,
        plusAnalyticsParams: e
    }
}
export {A as a, E as b, p as u};
//# sourceMappingURL=bqsv1vbxc05u7gb0.js.map
