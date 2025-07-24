import {F as u} from "./i25tj1x8nxr6c3yn.js";
import {P as t, D as c, al as y, s as m, N as E, c as I, bp as b, a5 as S, e as A, f as h} from "./dc2xxjkicf2pz0mj.js";
import {av as q, hs as w} from "./ckp56qklot786ulr.js";
import {r as p, v as g} from "./juy90og0wtbp77qa.js";
let a = ""
  , o = "";
const d = new Set
  , i = {
    setSessionId(e) {
        a = e
    },
    setQuerySessionId(e) {
        d.clear(),
        o = e
    },
    logClick(e, n, s) {
        c.addAction("fannypack.web.click", {
            index: n,
            source: s
        }),
        t.logEvent("FannyPack: Click result", {
            fanny_pack_session_id: a,
            fanny_pack_query_session_id: o,
            conversationId: e,
            index: n,
            source: s
        }),
        y.logEvent("chatgpt_fannypack_click", n, {
            index: String(n),
            source: s
        })
    },
    logClose(e) {
        t.logEvent("FannyPack: Close", {
            fanny_pack_session_id: a,
            source: e
        })
    },
    logOpen(e) {
        m.count(E.DEFAULT, "conversation_search.open", [{
            key: "source",
            value: e
        }]),
        c.addAction("fannypack.web.open", {
            source: e
        }),
        t.logEvent("FannyPack: Open", {
            fanny_pack_session_id: a,
            source: e
        }),
        y.logEvent("chatgpt_fannypack_open", e)
    },
    logQuery() {
        c.addAction("fannypack.web.query"),
        t.logEvent("FannyPack: Query", {
            fanny_pack_session_id: a,
            fanny_pack_query_session_id: o
        }),
        y.logEvent("chatgpt_fannypack_query")
    },
    logQueryError() {
        c.addError("fannypack.web.query_error"),
        t.logEvent("FannyPack: Query Error", {
            fanny_pack_session_id: a,
            fanny_pack_query_session_id: o
        })
    },
    logQueryMore() {
        c.addAction("fannypack.web.queryMore"),
        t.logEvent("FannyPack: Query Fetch More", {
            fanny_pack_session_id: a,
            fanny_pack_query_session_id: o
        }),
        y.logEvent("chatgpt_fannypack_query_more")
    },
    logNoResults() {
        t.logEvent("FannyPack: No results", {
            fanny_pack_session_id: a,
            fanny_pack_query_session_id: o
        })
    },
    logImpression(e, n, s) {
        d.has(s) || (d.add(s),
        t.logEvent("FannyPack: Impression", {
            fanny_pack_session_id: a,
            fanny_pack_query_session_id: o,
            source: e,
            index: n,
            conversation_id: s
        }))
    }
}
  , C = {
    isActive: !1,
    query: "",
    activeIndex: void 0,
    mouseInteractionsDisabled: !1
}
  , _ = I(b( () => ({
    ...C
})))
  , f = _.getState
  , l = _.setState
  , K = {
    getQuery: (e=f()) => e.query,
    getMouseInteractionsDisabled: () => f().mouseInteractionsDisabled
}
  , v = {
    setIsActive: e => {
        l({
            isActive: e
        })
    }
    ,
    setQuery: e => {
        l({
            query: e
        })
    }
    ,
    setActiveIndex: e => {
        l(n => {
            n.activeIndex = e,
            n.mouseInteractionsDisabled = !0
        }
        )
    }
    ,
    setMouseInteractionsDisabled: e => {
        l(n => {
            n.mouseInteractionsDisabled = e
        }
        )
    }
};
function D(e) {
    return (w() ? e.metaKey : e.ctrlKey) && e.key === "k"
}
function Q() {
    const e = S()
      , {isFannyPackEnabled: n} = q()
      , s = _(r => r.isActive)
      , P = A()
      , k = h(P, "1422501431");
    p.useEffect( () => {
        n && e && (k ? u.setCurrentAccountV2(e) : u.setCurrentAccount(e),
        u.init())
    }
    , [e, k, n]),
    p.useEffect( () => {
        if (n) {
            const r = F => {
                D(F) && (s ? i.logClose("shortcut") : (i.setSessionId(g()),
                i.logOpen("shortcut")),
                v.setIsActive(!s))
            }
            ;
            return window.addEventListener("keydown", r),
            () => {
                window.removeEventListener("keydown", r)
            }
        }
    }
    , [s, n])
}
function M() {
    v.setIsActive(!0),
    i.setSessionId(g()),
    i.logOpen("button")
}
const j = Object.freeze(Object.defineProperty({
    __proto__: null,
    openFannyPackSearch: M,
    useInitializeFannyPackHandler: Q
}, Symbol.toStringTag, {
    value: "Module"
}));
export {v as F, i as a, K as b, Q as c, j as d, _ as u};
//# sourceMappingURL=ob2tjua6eqphhfrf.js.map
