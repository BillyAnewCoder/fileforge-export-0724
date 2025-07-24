import {eD as k} from "./ckp56qklot786ulr.js";
import {a as H, u as A, C as d, c as y} from "./l7ivca7g8ik3mk13.js";
import {H as D} from "./jy1u8exw8iz2slve.js";
import {S as u, b as c, E as f, D as i} from "./gn1kkezdsm9hi3t4.js";
function P(e, t) {
    const n = L(e);
    if (n.length === 0)
        return t;
    let o = t;
    return n.forEach(s => {
        o = F(s, o)
    }
    ),
    o
}
function F(e, t) {
    return H(t, {
        start: e.fromA,
        end: e.toA
    }, w(e))
}
function w(e) {
    const {fromA: t, toA: n, fromB: o, toB: s} = e;
    return s - o - (n - t)
}
function L(e) {
    const t = []
      , n = (o, s, r, a) => {
        t.push({
            fromA: o,
            toA: s,
            fromB: r,
            toB: a
        })
    }
    ;
    return e.changes.iterChangedRanges(n, !0),
    t
}
function O(e, t) {
    const n = Array.from(e.keys())
      , o = Array.from(t.keys());
    if (n.length !== o.length)
        return !1;
    n.sort(),
    o.sort();
    for (let s = 0; s < n.length; s++)
        if (n[s] !== o[s])
            return !1;
    for (const s of n) {
        const r = e.get(s)
          , a = t.get(s);
        if (!r || !a || r.start !== a.start || r.end !== a.end)
            return !1
    }
    return !0
}
const S = u.define()
  , R = u.define()
  , b = u.define()
  , B = u.define();
function T(e) {
    return new Map(e.map(t => [t.id, t.at]))
}
const m = c.define({
    create() {
        return null
    },
    update(e, t) {
        for (const n of t.effects)
            if (n.is(S))
                return n.value;
        return e
    }
})
  , l = c.define({
    create() {
        return []
    },
    update(e, t) {
        for (const a of t.effects)
            if (a.is(R))
                return a.value;
        const n = e
          , o = T(n)
          , s = P(t, o);
        return O(o, s) ? n : A(n, s)
    }
})
  , C = c.define({
    create() {
        return null
    },
    update(e, t) {
        for (const n of t.effects)
            if (n.is(b))
                return n.value;
        return e
    }
})
  , g = c.define({
    create() {
        return null
    },
    update(e, t) {
        for (const n of t.effects)
            if (n.is(B))
                return n.value;
        return e
    }
});
function h(e) {
    if (!e || e.to - e.from === 0)
        return i.none;
    const t = i.mark({
        class: D.code
    });
    return i.set([t.range(e.from, e.to)])
}
function p(e, t, n) {
    if (e.length === 0)
        return i.none;
    const s = [...e].sort( (r, a) => r.at.start - a.at.start).map(r => {
        if (r.at.end - r.at.start === 0)
            return null;
        const a = r.id === t
          , v = r.id === n
          , E = y({
            isHovered: a,
            isFocused: v,
            isCode: !0,
            diffStatus: r.diffStatus
        });
        return i.mark({
            class: E,
            attributes: {
                "data-comment-id": r.id
            }
        }).range(r.at.start, r.at.end)
    }
    ).filter(k);
    return i.set(s)
}
const j = c.define({
    create(e) {
        const t = e.field(m, !1);
        return h(t ?? null)
    },
    update(e, t) {
        const n = t.state.field(m, !1);
        return h(n ?? null)
    },
    provide: e => f.decorations.from(e)
})
  , x = c.define({
    create(e) {
        const t = e.field(l, !1)
          , n = e.field(C, !1)
          , o = e.field(g, !1);
        return p(t ?? [], n ?? null, o ?? null)
    },
    update(e, t) {
        const n = t.state.field(l, !1)
          , o = t.state.field(C, !1)
          , s = t.state.field(g, !1);
        return p(n ?? [], o ?? null, s ?? null)
    },
    provide: e => f.decorations.from(e)
});
function G(e) {
    e.state.selection.main.empty && e.dispatch({
        effects: S.of(null)
    })
}
function I(e) {
    let t = e.dataset.commentId;
    for (let n = 0; n < 10 && !t && e.parentElement; n++)
        e = e.parentElement,
        t = e.dataset.commentId;
    return t
}
function M(e) {
    const t = e.target
      , n = I(t);
    n && d.focusComment(n)
}
function N(e) {
    const t = e.target
      , n = I(t);
    n ? d.mouseEnterComment(n) : d.mouseLeaveComment()
}
function J(e, t=null, n=null) {
    return [l.init( () => e), m, C.init( () => t), g.init( () => n), j, x, f.updateListener.of(o => {
        o.selectionSet && G(o.view)
    }
    ), f.domEventHandlers({
        click: M,
        mouseover: N
    })]
}
export {S as a, b, J as c, B as d, l as e, R as s};
//# sourceMappingURL=nmh9rh1es9yfc7rh.js.map
