import {j6 as f, ag as _, L as i, b as l, a7 as y, al as C, P, fN as d} from "./dc2xxjkicf2pz0mj.js";
import {mM as h, p0 as E} from "./ckp56qklot786ulr.js";
import {e as T, p as v, h as R, u as S, r as I, f as M} from "./juy90og0wtbp77qa.js";
var L = {};
const p = {
    oiw216z: `${L.VITE_OIW216Z_SERVICE_URL ?? "https://sora.com"}/subscription`,
    vza493q: d,
    students: E(!0)
}
  , A = f(function() {
    const o = T()
      , [n] = v()
      , c = _()
      , r = R()
      , u = S()
      , e = i.getItem(l.CheckoutFrom)
      , s = y();
    return I.useEffect( () => {
        const m = "free"
          , t = n.get("plan_type") ?? "plus"
          , g = h(t);
        if (t === "plus" && C.logEvent("chatgpt_plus_payment_success_page"),
        P.logPaymentSuccess({
            plan_type: t
        }),
        s != null)
            if (s.planType === m)
                u.invalidateQueries({
                    queryKey: ["account-status"]
                });
            else {
                let a = r.formatMessage(w.paymentConfirmationToastMessage, {
                    planName: g
                });
                e && p[e] ? (i.removeItem(l.CheckoutFrom),
                e === "students" && (a = null),
                window.location.href = p[e]) : o("/#pricing"),
                a && c.success(a, {
                    duration: 5
                })
            }
    }
    , [o, n, c, r, u, e, s]),
    null
})
  , w = M({
    paymentConfirmationToastMessage: {
        id: "Payments.success.toast",
        defaultMessage: "You're now subscribed to ChatGPT {planName}"
    }
});
export {p as C, A as p};
//# sourceMappingURL=k41q6x5mdrghtds7.js.map
