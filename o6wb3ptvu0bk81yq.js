import {r as x, c as F, j as y} from "./juy90og0wtbp77qa.js";
import {a as K, b as k, M as z, S as W, g as _, E as Q, c as Z, n as B, i as J, t as X, m as Y, k as ee, d as te, e as ne, f as se, p as re, h as oe, j as H, P as ie, u as ae} from "./dmfmxszxfbs8gsbx.js";
import {cl as le, e as pe, le as ue, aS as ce, dW as de, iq as me, ak as fe, aZ as ge, bd as he} from "./dc2xxjkicf2pz0mj.js";
import {j_ as L, j$ as ve, fb as we, eM as Ce, hK as Me} from "./ckp56qklot786ulr.js";
const xe = 500;
class g {
    constructor(e, t) {
        this.items = e,
        this.eventCount = t
    }
    popEvent(e, t) {
        if (this.eventCount == 0)
            return null;
        let o = this.items.length;
        for (; ; o--)
            if (this.items.get(o - 1).selection) {
                --o;
                break
            }
        let s, r;
        t && (s = this.remapping(o, this.items.length),
        r = s.maps.length);
        let i = e.tr, a, l, u = [], c = [];
        return this.items.forEach( (d, p) => {
            if (!d.step) {
                s || (s = this.remapping(o, p + 1),
                r = s.maps.length),
                r--,
                c.push(d);
                return
            }
            if (s) {
                c.push(new v(d.map));
                let m = d.step.map(s.slice(r)), f;
                m && i.maybeStep(m).doc && (f = i.mapping.maps[i.mapping.maps.length - 1],
                u.push(new v(f,void 0,void 0,u.length + c.length))),
                r--,
                f && s.appendMap(f, r)
            } else
                i.maybeStep(d.step);
            if (d.selection)
                return a = s ? d.selection.map(s.slice(r)) : d.selection,
                l = new g(this.items.slice(0, o).append(c.reverse().concat(u)),this.eventCount - 1),
                !1
        }
        , this.items.length, 0),
        {
            remaining: l,
            transform: i,
            selection: a
        }
    }
    addTransform(e, t, o, s) {
        let r = []
          , i = this.eventCount
          , a = this.items
          , l = !s && a.length ? a.get(a.length - 1) : null;
        for (let c = 0; c < e.steps.length; c++) {
            let d = e.steps[c].invert(e.docs[c]), p = new v(e.mapping.maps[c],d,t), m;
            (m = l && l.merge(p)) && (p = m,
            c ? r.pop() : a = a.slice(0, a.length - 1)),
            r.push(p),
            t && (i++,
            t = void 0),
            s || (l = p)
        }
        let u = i - o.depth;
        return u > be && (a = Te(a, u),
        i -= u),
        new g(a.append(r),i)
    }
    remapping(e, t) {
        let o = new z;
        return this.items.forEach( (s, r) => {
            let i = s.mirrorOffset != null && r - s.mirrorOffset >= e ? o.maps.length - s.mirrorOffset : void 0;
            o.appendMap(s.map, i)
        }
        , e, t),
        o
    }
    addMaps(e) {
        return this.eventCount == 0 ? this : new g(this.items.append(e.map(t => new v(t))),this.eventCount)
    }
    rebased(e, t) {
        if (!this.eventCount)
            return this;
        let o = []
          , s = Math.max(0, this.items.length - t)
          , r = e.mapping
          , i = e.steps.length
          , a = this.eventCount;
        this.items.forEach(p => {
            p.selection && a--
        }
        , s);
        let l = t;
        this.items.forEach(p => {
            let m = r.getMirror(--l);
            if (m == null)
                return;
            i = Math.min(i, m);
            let f = r.maps[m];
            if (p.step) {
                let C = e.steps[m].invert(e.docs[m])
                  , h = p.selection && p.selection.map(r.slice(l + 1, m));
                h && a++,
                o.push(new v(f,C,h))
            } else
                o.push(new v(f))
        }
        , s);
        let u = [];
        for (let p = t; p < i; p++)
            u.push(new v(r.maps[p]));
        let c = this.items.slice(0, s).append(u).append(o)
          , d = new g(c,a);
        return d.emptyItemCount() > xe && (d = d.compress(this.items.length - o.length)),
        d
    }
    emptyItemCount() {
        let e = 0;
        return this.items.forEach(t => {
            t.step || e++
        }
        ),
        e
    }
    compress(e=this.items.length) {
        let t = this.remapping(0, e)
          , o = t.maps.length
          , s = []
          , r = 0;
        return this.items.forEach( (i, a) => {
            if (a >= e)
                s.push(i),
                i.selection && r++;
            else if (i.step) {
                let l = i.step.map(t.slice(o))
                  , u = l && l.getMap();
                if (o--,
                u && t.appendMap(u, o),
                l) {
                    let c = i.selection && i.selection.map(t.slice(o));
                    c && r++;
                    let d = new v(u.invert(),l,c), p, m = s.length - 1;
                    (p = s.length && s[m].merge(d)) ? s[m] = p : s.push(d)
                }
            } else
                i.map && o--
        }
        , this.items.length, 0),
        new g(L.from(s.reverse()),r)
    }
}
g.empty = new g(L.empty,0);
function Te(n, e) {
    let t;
    return n.forEach( (o, s) => {
        if (o.selection && e-- == 0)
            return t = s,
            !1
    }
    ),
    n.slice(t)
}
class v {
    constructor(e, t, o, s) {
        this.map = e,
        this.step = t,
        this.selection = o,
        this.mirrorOffset = s
    }
    merge(e) {
        if (this.step && e.step && !e.selection) {
            let t = e.step.merge(this.step);
            if (t)
                return new v(t.getMap().invert(),t,this.selection)
        }
    }
}
class w {
    constructor(e, t, o, s, r) {
        this.done = e,
        this.undone = t,
        this.prevRanges = o,
        this.prevTime = s,
        this.prevComposition = r
    }
}
const be = 20;
function Ee(n, e, t, o) {
    let s = t.getMeta(M), r;
    if (s)
        return s.historyState;
    t.getMeta(Pe) && (n = new w(n.done,n.undone,null,0,-1));
    let i = t.getMeta("appendedTransaction");
    if (t.steps.length == 0)
        return n;
    if (i && i.getMeta(M))
        return i.getMeta(M).redo ? new w(n.done.addTransform(t, void 0, o, T(e)),n.undone,R(t.mapping.maps),n.prevTime,n.prevComposition) : new w(n.done,n.undone.addTransform(t, void 0, o, T(e)),null,n.prevTime,n.prevComposition);
    if (t.getMeta("addToHistory") !== !1 && !(i && i.getMeta("addToHistory") === !1)) {
        let a = t.getMeta("composition")
          , l = n.prevTime == 0 || !i && n.prevComposition != a && (n.prevTime < (t.time || 0) - o.newGroupDelay || !ye(t, n.prevRanges))
          , u = i ? b(n.prevRanges, t.mapping) : R(t.mapping.maps);
        return new w(n.done.addTransform(t, l ? e.selection.getBookmark() : void 0, o, T(e)),g.empty,u,t.time,a ?? n.prevComposition)
    } else
        return (r = t.getMeta("rebased")) ? new w(n.done.rebased(t, r),n.undone.rebased(t, r),b(n.prevRanges, t.mapping),n.prevTime,n.prevComposition) : new w(n.done.addMaps(t.mapping.maps),n.undone.addMaps(t.mapping.maps),b(n.prevRanges, t.mapping),n.prevTime,n.prevComposition)
}
function ye(n, e) {
    if (!e)
        return !1;
    if (!n.docChanged)
        return !0;
    let t = !1;
    return n.mapping.maps[0].forEach( (o, s) => {
        for (let r = 0; r < e.length; r += 2)
            o <= e[r + 1] && s >= e[r] && (t = !0)
    }
    ),
    t
}
function R(n) {
    let e = [];
    for (let t = n.length - 1; t >= 0 && e.length == 0; t--)
        n[t].forEach( (o, s, r, i) => e.push(r, i));
    return e
}
function b(n, e) {
    if (!n)
        return null;
    let t = [];
    for (let o = 0; o < n.length; o += 2) {
        let s = e.map(n[o], 1)
          , r = e.map(n[o + 1], -1);
        s <= r && t.push(s, r)
    }
    return t
}
function Se(n, e, t) {
    let o = T(e)
      , s = M.get(e).spec.config
      , r = (t ? n.undone : n.done).popEvent(e, o);
    if (!r)
        return null;
    let i = r.selection.resolve(r.transform.doc)
      , a = (t ? n.done : n.undone).addTransform(r.transform, e.selection.getBookmark(), s, o)
      , l = new w(t ? a : r.remaining,t ? r.remaining : a,null,0,-1);
    return r.transform.setSelection(i).setMeta(M, {
        redo: t,
        historyState: l
    })
}
let E = !1
  , j = null;
function T(n) {
    let e = n.plugins;
    if (j != e) {
        E = !1,
        j = e;
        for (let t = 0; t < e.length; t++)
            if (e[t].spec.historyPreserveItems) {
                E = !0;
                break
            }
    }
    return E
}
const M = new k("history")
  , Pe = new k("closeHistory");
function De(n={}) {
    return n = {
        depth: n.depth || 100,
        newGroupDelay: n.newGroupDelay || 500
    },
    new K({
        key: M,
        state: {
            init() {
                return new w(g.empty,g.empty,null,0,-1)
            },
            apply(e, t, o) {
                return Ee(t, o, e, n)
            }
        },
        config: n,
        props: {
            handleDOMEvents: {
                beforeinput(e, t) {
                    let o = t.inputType
                      , s = o == "historyUndo" ? A : o == "historyRedo" ? S : null;
                    return s ? (t.preventDefault(),
                    s(e.state, e.dispatch)) : !1
                }
            }
        }
    })
}
function N(n, e) {
    return (t, o) => {
        let s = M.getState(t);
        if (!s || (n ? s.undone : s.done).eventCount == 0)
            return !1;
        if (o) {
            let r = Se(s, t, n);
            r && o(e ? r.scrollIntoView() : r)
        }
        return !0
    }
}
const A = N(!1, !0)
  , S = N(!0, !0)
  , Ie = "command_token"
  , ke = {
    group: "inline",
    inline: !0,
    atom: !0,
    content: "text*",
    attrs: {
        id: "",
        hint: ""
    },
    selectable: !1,
    draggable: !1,
    toDOM: n => ["span", {
        "data-mention-id": n.attrs.id,
        "data-mention-hint": n.attrs.hint,
        class: "hint-pill"
    }, n.attrs.hint],
    parseDOM: [{
        tag: "span[data-mention-id][data-mention-hint]",
        getAttrs: n => {
            const e = n.getAttribute("data-mention-id")
              , t = n.getAttribute("data-mention-hint");
            return {
                id: e,
                hint: t
            }
        }
    }]
};
function Oe(n, e) {
    if (n.depth === 0)
        return;
    const t = n.nodeBefore?.text?.match(/^\/(\w*)$|\s\/(\w+)$/);
    if (t) {
        const o = t[1] ?? t[2]
          , s = n.pos - o.length - 1
          , r = n.pos;
        return o.length > 0 && e ? void 0 : {
            queryText: o,
            range: {
                from: s,
                to: r
            }
        }
    }
}
const P = new k("systemHintPlugin");
function He(n, e) {
    return n.setMeta(P, e),
    n
}
function Ge(n) {
    n.dispatch(He(n.state.tr, {
        ...D(),
        isDismissed: !0
    }))
}
function D() {
    return {
        queryText: "",
        active: !1,
        range: void 0,
        isDismissed: !1
    }
}
function q(n) {
    const {active: e, range: t, queryText: o, onHintMatch: s} = n;
    if (s)
        return s(!e || !t ? void 0 : {
            text: o,
            range: t
        })
}
function Re() {
    return new K({
        key: P,
        state: {
            init() {
                return D()
            },
            apply(n, e, t, o) {
                const s = n.getMeta(P)
                  , r = {
                    ...D(),
                    ...e,
                    ...s
                }
                  , i = n.selection;
                if (i.from !== i.to || o.doc.eq(t.doc))
                    return q(r),
                    r;
                const a = i.$from
                  , l = Oe(a, e.isDismissed);
                return r.active = l != null,
                l && (r.queryText = l.queryText,
                r.range = l.range,
                r.isDismissed = !1),
                q(r),
                r
            }
        }
    })
}
const je = ["p", 0]
  , qe = ["br"]
  , Fe = new W({
    nodes: {
        paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{
                tag: "p",
                preserveWhitespace: "full"
            }],
            toDOM() {
                return je
            }
        },
        text: {
            group: "inline"
        },
        hard_break: {
            inline: !0,
            group: "inline",
            selectable: !1,
            parseDOM: [{
                tag: "br"
            }],
            toDOM() {
                return qe
            }
        },
        [Ie]: ke,
        doc: {
            content: "block+"
        }
    },
    marks: {}
});
function Ke(n=null, e) {
    const t = new EventTarget
      , o = _(e).enabled
      , s = new Q(null,{
        state: Z.create({
            schema: Fe,
            plugins: [De(), Y(), Re(), ...o ? [ee()] : [], te(), ne({
                ...H,
                "Shift-Enter": H.Enter,
                "Mod-z": A,
                "Mod-y": S,
                "Mod-Shift-z": S
            }), se(t), re(""), oe()]
        }),
        dispatchTransaction(r) {
            const i = s.state.apply(r);
            s.updateState(i),
            r.docChanged && t.dispatchEvent(new Event(X))
        },
        handlePaste(r, i) {
            const a = i.clipboardData?.getData("text/plain");
            return a === void 0 ? !1 : (i.defaultPrevented || J(r, a),
            !0)
        },
        clipboardTextSerializer(r) {
            return B(r.content).content
        }
    });
    return n != null && s.state.doc.textContent.trim().length === 0 && s.dispatch(s.state.tr.insertText(n)),
    s
}
const I = x.createContext(null)
  , Le = n => {
    "use forget";
    const e = F.c(10)
      , {children: t, clientThreadId: o, ignoreParentComposerController: s, draftsEnabled: r, isDefaultCollapsed: i} = n
      , a = s === void 0 ? !1 : s
      , l = r === void 0 ? !0 : r
      , u = x.useContext(I)
      , c = pe()
      , {isSingleLine: d} = ve()
      , p = i !== void 0 ? !i : !d;
    let m, f;
    e[0] !== o || e[1] !== u || e[2] !== c || e[3] !== l || e[4] !== a || e[5] !== p ? (f = u && !a ? u : new ie(Ke(l && o ? ue(ce(o))?.content ?? null : null, c),{
        isExpanded: p
    }),
    e[0] = o,
    e[1] = u,
    e[2] = c,
    e[3] = l,
    e[4] = a,
    e[5] = p,
    e[6] = f) : f = e[6],
    m = f;
    const C = m;
    let h;
    return e[7] !== t || e[8] !== C ? (h = y.jsx(I.Provider, {
        value: C,
        children: t
    }),
    e[7] = t,
    e[8] = C,
    e[9] = h) : h = e[9],
    h
}
  , $e = () => {
    "use forget";
    const n = F.c(2)
      , e = x.useContext(I);
    let t;
    return n[0] !== e ? (t = le(e),
    n[0] = e,
    n[1] = t) : t = n[1],
    t
}
;
function V() {
    return {
        clientThreadId: "",
        isLoggedInUser: !1,
        focusedObject: null,
        currentModelId: "",
        isModelLoaded: !1,
        isEmbeddedInFocusedView: !1,
        isInstalledApp: !1,
        onNewThread: () => {
            throw new Error("onNewThread not implemented")
        }
        ,
        onRequestCompletion: () => {
            throw new Error("onRequestCompletion not implemented")
        }
        ,
        resetThread: () => {
            throw new Error("resetThread not implemented")
        }
    }
}
const U = x.createContext(V());
function ze() {
    try {
        return x.use(U)
    } catch {
        return V()
    }
}
function We({children: n, clientThreadId: e, setClientThreadId: t, routeType: o, prefetchSearchPromises: s}) {
    const {createNewThread: r, resetThread: i} = we({
        clientThreadId: e,
        setClientThreadId: t
    })
      , {data: a} = de()
      , l = me(a)
      , u = fe(e, $ => $?.modelId)
      , c = Ce()
      , d = l.id
      , p = u ?? d
      , m = ge()
      , f = Me()
      , {isUnauthenticated: C} = he()
      , h = !C
      , O = ae(e)
      , G = x.useMemo( () => ({
        clientThreadId: e,
        currentModelId: p,
        isModelLoaded: !!u,
        isEmbeddedInFocusedView: c,
        isInstalledApp: m,
        isLoggedInUser: h,
        focusedObject: f,
        onNewThread: r,
        onRequestCompletion: O,
        resetThread: i,
        prefetchSearchPromises: s,
        routeType: o
    }), [e, p, u, c, m, h, f, r, O, i, s, o]);
    return y.jsx(U.Provider, {
        value: G,
        children: y.jsx(Le, {
            clientThreadId: e,
            children: n
        })
    })
}
export {Le as C, We as a, ze as b, Ke as c, I as d, Ge as e, U as f, He as s, $e as u};
//# sourceMappingURL=o6wb3ptvu0bk81yq.js.map
