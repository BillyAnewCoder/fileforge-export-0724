import {aQ as b, kJ as E, aR as P, e as A, dX as G, dY as w, h5 as D, eJ as I, f as k, D as C, a5 as O, b3 as q, cr as H, e5 as B, bf as F, L as N, b as K} from "./dc2xxjkicf2pz0mj.js";
import {dj as V, dG as x, dH as z, dz as W, dI as J, dJ as j, dK as _, dL as Q, dM as $} from "./ckp56qklot786ulr.js";
import {r as u, p as X} from "./juy90og0wtbp77qa.js";
import {g as Y} from "./hisrfv493df9w8hp.js";
function Z({ctx: e, clientThreadId: t, threadState: o, searchParams: s, planType: r, isModelSticky: c, hasPlusFeatures: i}) {
    if (o?.modelId)
        return o.modelId;
    if (!b(t))
        return;
    const n = s?.get("model");
    if (n && !V(e, n))
        return n;
    const a = x();
    return a && !V(e, a) && c ? a : z(r, i)
}
function ce(e, t) {
    if (!t || !e)
        return E.SHORT_LABEL;
    const o = t.categories.find( ({defaultModel: s, supportedModels: r}) => s === e || r?.includes(e));
    return o == null ? E.SHORT_LABEL : o.renderHeaderType ?? E.SHORT_LABEL
}
function ie(e, t) {
    return !t || !e ? !1 : !!t.groups.find( ({modelIds: s}) => s.includes(e))?.group
}
function ue(e, t, o, s="short") {
    if (e !== void 0) {
        if (t) {
            const {modelLabel: r, fullModelLabel: c} = Y(e, t);
            return s === "short" ? r : c
        }
        switch (e) {
        case "auto":
            return "";
        case "gpt-4o":
            return s === "short" ? "4o" : "GPT-4o";
        case "gpt-4o-mini":
            return s === "short" ? "4o mini" : "GPT-4o mini";
        case "gpt-4o-jawbone":
            return o.formatMessage({
                id: "8y5npr",
                defaultMessage: "Tasks"
            });
        case "gpt-4":
            return s === "short" ? "4" : "GPT-4";
        case "gpt-4-5":
            return s === "short" ? "4.5" : "GPT-4.5";
        case "o1":
            return "o1";
        case "o1-pro":
            return "o1 pro";
        case "o3-mini":
        case "o3-mini-high":
        case "o4-mini":
        case "o4-mini-high":
        case "o3":
            return e;
        default:
            return
        }
    }
}
const p = P(void 0)
  , M = 1e3 * 60 * 9
  , ee = P([]);
function te(e) {
    const t = A()
      , o = O()?.planType
      , [s] = X()
      , r = G(e)
      , c = r && q(r)
      , i = $()
      , {data: n} = H()
      , a = n && B(n);
    return Z({
        ctx: t,
        clientThreadId: e,
        threadState: c,
        searchParams: s,
        planType: o,
        isModelSticky: !!i,
        hasPlusFeatures: a
    })
}
function se(e) {
    const t = F(e, "2943229081")
      , o = I(e, "3529298638").get("enabled", !1)
      , s = t.get("require-voice-used-recently", !1);
    if (o && !s)
        return _.debug("User using transceiver and recency not required, prefetch OK"),
        !0;
    const r = t.get("voice-used-within-past-days", 7)
      , c = r * 24 * 60 * 60 * 1e3
      , i = N.getItem(K.VoiceLastUsed)
      , n = i ? new Date(i) : null
      , a = n ? n.getTime() > Date.now() - c : !1;
    return _.debug(`User ${a ? "passes" : "fails"} recency requirement, prefetch ${a ? "OK" : "SKIP"}`, {
        voiceUsedWithinDays: r,
        lastUsedVoiceDate: n
    }),
    a
}
const de = ({conversationId: e}) => {
    const t = A()
      , {voiceName: o} = W()
      , s = G(e)
      , r = J()
      , c = u.useRef(!1)
      , i = j(m => m.isVoiceModeActive)
      , n = w()
      , a = te(e) ?? D
      , g = u.useMemo( () => {
        const m = I(t, "3529298638").get("enabled", !1)
          , y = k(t, "2209667701")
          , d = m || y
          , S = se(t)
          , l = !!n
          , f = [];
        return f.push(!d && "gate-disabled"),
        f.push(!S && "not-voice-used-recently"),
        f.push(l && "is-custom-gpt"),
        f.filter(U => typeof U == "string")
    }
    , [t, n])
      , h = u.useMemo( () => ({
        conversation_id: s ?? null,
        requested_voice_mode: "advanced",
        gizmo_id: n ?? null,
        voice: o ?? null,
        requested_default_model: a
    }), [s, o, n, a])
      , [R,v] = u.useState(!0)
      , L = u.useRef(void 0)
      , T = u.useRef(void 0);
    return u.useEffect( () => {
        v(!0)
    }
    , [h]),
    u.useEffect( () => {
        ee.set(g),
        g.length > 0 && p.set(void 0);
        const m = !i && g.length === 0 && R
          , y = c.current;
        !m || y || (c.current = !0,
        _.debug("Prefetching voice status"),
        r(h, "voice-status-cache").then(d => {
            const {chatreq: S} = d;
            p.set({
                ...d,
                proofOfWorkPromise: new Promise( (l, f) => {
                    S ? Q.getEnforcementToken(S).then(l).catch(f) : l(null)
                }
                )
            }),
            L.current = Date.now(),
            v(!1),
            clearTimeout(T.current),
            T.current = setTimeout( () => {
                const l = L.current ?? 0;
                Date.now() - l >= M && (p.set(void 0),
                v(!0),
                C.addAction("voice-status-cache-stale", {
                    conversationId: h.conversation_id
                }))
            }
            , M)
        }
        ).catch(d => {
            d.code === "conversation_not_found" ? C.addAction("voice-status-cache-conversation-not-found", {
                conversationId: h.conversation_id
            }) : C.addError(new Error("Voice status cache failed"), d),
            p.set(void 0)
        }
        ).finally( () => {
            c.current = !1
        }
        ))
    }
    , [r, h, g, i, R]),
    u.useEffect( () => () => {
        clearTimeout(T.current)
    }
    , []),
    null
}
;
export {de as V, ce as a, ie as b, Z as c, ee as d, p as e, ue as g};
//# sourceMappingURL=cir7oqlbi88or9cr.js.map
