import {r as n, j as s, m as h, M as f} from "./juy90og0wtbp77qa.js";
import {e as y, B as T, $ as w, eR as x, fj as p, ak as C, aS as v, R as P, b2 as S} from "./dc2xxjkicf2pz0mj.js";
import {r as E} from "./dmfmxszxfbs8gsbx.js";
const i = 118
  , k = e => {
    const t = C(e, c => S.getCurrentNode(c)?.message);
    if (!t || !j(t) || t.metadata?.auto_proceed_cancelled)
        return !1;
    const o = Date.now()
      , r = (t.create_time ?? Date.now() / 1e3) * 1e3;
    return Math.max(0, Math.ceil(i - (o - r) / 1e3)) > 0
}
;
function j(e) {
    return !!(e.metadata?.n7jupd_message && e.channel === "commentary" && e.end_turn === !0)
}
async function N(e) {
    const t = v(e);
    if (t)
        return await P.safePost("/conversation/{conversation_id}/agent/cancel_auto_proceed", {
            parameters: {
                path: {
                    conversation_id: t
                }
            }
        })
}
const O = ({lastMessage: e, clientThreadId: t}) => {
    const o = y()
      , r = n.useRef((e.create_time ?? Date.now() / 1e3) * 1e3)
      , {initialTimeLeft: a, initialProgress: c} = n.useMemo( () => {
        const d = Date.now()
          , M = r.current
          , m = Math.ceil(i - (d - M) / 1e3)
          , _ = (i - m) / i;
        return {
            initialTimeLeft: m,
            initialProgress: _
        }
    }
    , [])
      , [u,l] = n.useState(!1);
    n.useEffect( () => {
        if (a <= 0) {
            l(!0);
            return
        }
        const d = setTimeout( () => l(!0), a * 1e3);
        return () => clearTimeout(d)
    }
    , [a]);
    const g = async () => {
        l(!0),
        await E({
            ctx: o,
            clientThreadId: t,
            eventSource: "mouse",
            promptMessage: x("Please proceed. Do not ask any additional follow-up questions.", {
                is_auto_proceed_message: !0,
                system_hints: [p]
            }),
            parentMessageId: e.id,
            completionMetadata: {
                systemHints: [p],
                conversationMode: {
                    kind: w.PrimaryAssistant
                }
            }
        })
    }
    ;
    return a < -30 ? null : s.jsx("div", {
        className: "my-2 flex",
        children: s.jsxs(T, {
            onClick: g,
            disabled: u,
            className: "relative min-w-32 overflow-hidden bg-gray-500 px-4 opacity-90 transition-all hover:opacity-100",
            children: [s.jsx(h.div, {
                className: "btn-primary pointer-none absolute inset-0 -z-10 block",
                initial: {
                    scaleX: c
                },
                animate: {
                    scaleX: 1
                },
                transition: {
                    duration: a,
                    ease: "linear",
                    type: "tween"
                },
                layout: !1,
                style: {
                    transformOrigin: "0% 50%",
                    width: "100%",
                    willChange: "transform",
                    transform: "translateZ(0)"
                }
            }), u ? s.jsx(f, {
                id: "clarification.loading",
                defaultMessage: "Proceeding..."
            }) : s.jsx(f, {
                id: "clarification.modelContinueMessage",
                defaultMessage: "Continue"
            })]
        })
    })
}
;
export {O as C, N as c, j as i, k as u};
//# sourceMappingURL=ck00y48d3yzt8bq3.js.map
