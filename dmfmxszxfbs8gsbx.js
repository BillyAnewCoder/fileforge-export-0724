import {rr as gi, k0 as To, rs as Mo, gX as wo, gY as No, d as Br, rt as Oo, ru as Eo, rv as Do, rw as Ao, rx as yi, ry as Si, rz as Io, rA as Ro, rB as Lr, rC as vo, rD as Po, rE as Fo, mR as zo, mV as Bo, rF as Lo, hm as Vo, rG as ki, rH as qo, rI as _o, rJ as Ko, rK as Jo, rL as He, rM as Wo, hB as Uo, rN as Ho, rO as $o, rP as Go, rQ as jo, rR as Vr, rS as Yo, rT as Xo, rU as Qo, rV as bi, rW as Zo, lx as el, rX as tl, rY as nl, ie as il, rZ as rl, ig as xi, dL as Ci, r_ as sl, r$ as ol} from "./ckp56qklot786ulr.js";
import {jo as ll, mz as al, cf as cl, hW as hl, bf as qr, h as dl, mA as Ti, mB as fl, aR as rt, e as _r, f as Un, ic as ul, eP as pl, aV as ml, ak as gl, P as $e, s as Ge, N as je, b3 as yt, b2 as H, R as yl, A as Sl, iM as kl, bq as Mi, ae as wi, aT as Ni, bA as Z, cd as En, bX as St, bD as De, eb as Oi, cb as bl, mC as xl, aS as Ei, mD as Cl, cl as Tl, aQ as Ml, al as hn, bW as dn, mE as wl, d as fn, k as Nl, c3 as Di, ip as Ol, mF as El, mG as Dl, ib as un, ia as Ai, bT as qt, bU as Al, e6 as Il, aU as ye, aX as Ae, iz as Ii, bM as Rl, iq as vl, fU as Pl, mH as Fl, mI as zl, eJ as Bl, mJ as Ll, cc as Vl, mK as ql, br as _l, bC as Ri, fj as Kl, mL as vi, fo as Jl, D as Wl, aW as Ul} from "./dc2xxjkicf2pz0mj.js";
import {r as se} from "./juy90og0wtbp77qa.js";
function Kr(i, e, t) {
    for (let n = 0; ; n++) {
        if (n == i.childCount || n == e.childCount)
            return i.childCount == e.childCount ? null : t;
        let r = i.child(n)
          , s = e.child(n);
        if (r == s) {
            t += r.nodeSize;
            continue
        }
        if (!r.sameMarkup(s))
            return t;
        if (r.isText && r.text != s.text) {
            for (let o = 0; r.text[o] == s.text[o]; o++)
                t++;
            return t
        }
        if (r.content.size || s.content.size) {
            let o = Kr(r.content, s.content, t + 1);
            if (o != null)
                return o
        }
        t += r.nodeSize
    }
}
function Jr(i, e, t, n) {
    for (let r = i.childCount, s = e.childCount; ; ) {
        if (r == 0 || s == 0)
            return r == s ? null : {
                a: t,
                b: n
            };
        let o = i.child(--r)
          , l = e.child(--s)
          , a = o.nodeSize;
        if (o == l) {
            t -= a,
            n -= a;
            continue
        }
        if (!o.sameMarkup(l))
            return {
                a: t,
                b: n
            };
        if (o.isText && o.text != l.text) {
            let c = 0
              , h = Math.min(o.text.length, l.text.length);
            for (; c < h && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
                c++,
                t--,
                n--;
            return {
                a: t,
                b: n
            }
        }
        if (o.content.size || l.content.size) {
            let c = Jr(o.content, l.content, t - 1, n - 1);
            if (c)
                return c
        }
        t -= a,
        n -= a
    }
}
class y {
    constructor(e, t) {
        if (this.content = e,
        this.size = t || 0,
        t == null)
            for (let n = 0; n < e.length; n++)
                this.size += e[n].nodeSize
    }
    nodesBetween(e, t, n, r=0, s) {
        for (let o = 0, l = 0; l < t; o++) {
            let a = this.content[o]
              , c = l + a.nodeSize;
            if (c > e && n(a, r + l, s || null, o) !== !1 && a.content.size) {
                let h = l + 1;
                a.nodesBetween(Math.max(0, e - h), Math.min(a.content.size, t - h), n, r + h)
            }
            l = c
        }
    }
    descendants(e) {
        this.nodesBetween(0, this.size, e)
    }
    textBetween(e, t, n, r) {
        let s = ""
          , o = !0;
        return this.nodesBetween(e, t, (l, a) => {
            let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? r ? typeof r == "function" ? r(l) : r : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
            l.isBlock && (l.isLeaf && c || l.isTextblock) && n && (o ? o = !1 : s += n),
            s += c
        }
        , 0),
        s
    }
    append(e) {
        if (!e.size)
            return this;
        if (!this.size)
            return e;
        let t = this.lastChild
          , n = e.firstChild
          , r = this.content.slice()
          , s = 0;
        for (t.isText && t.sameMarkup(n) && (r[r.length - 1] = t.withText(t.text + n.text),
        s = 1); s < e.content.length; s++)
            r.push(e.content[s]);
        return new y(r,this.size + e.size)
    }
    cut(e, t=this.size) {
        if (e == 0 && t == this.size)
            return this;
        let n = []
          , r = 0;
        if (t > e)
            for (let s = 0, o = 0; o < t; s++) {
                let l = this.content[s]
                  , a = o + l.nodeSize;
                a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))),
                n.push(l),
                r += l.nodeSize),
                o = a
            }
        return new y(n,r)
    }
    cutByIndex(e, t) {
        return e == t ? y.empty : e == 0 && t == this.content.length ? this : new y(this.content.slice(e, t))
    }
    replaceChild(e, t) {
        let n = this.content[e];
        if (n == t)
            return this;
        let r = this.content.slice()
          , s = this.size + t.nodeSize - n.nodeSize;
        return r[e] = t,
        new y(r,s)
    }
    addToStart(e) {
        return new y([e].concat(this.content),this.size + e.nodeSize)
    }
    addToEnd(e) {
        return new y(this.content.concat(e),this.size + e.nodeSize)
    }
    eq(e) {
        if (this.content.length != e.content.length)
            return !1;
        for (let t = 0; t < this.content.length; t++)
            if (!this.content[t].eq(e.content[t]))
                return !1;
        return !0
    }
    get firstChild() {
        return this.content.length ? this.content[0] : null
    }
    get lastChild() {
        return this.content.length ? this.content[this.content.length - 1] : null
    }
    get childCount() {
        return this.content.length
    }
    child(e) {
        let t = this.content[e];
        if (!t)
            throw new RangeError("Index " + e + " out of range for " + this);
        return t
    }
    maybeChild(e) {
        return this.content[e] || null
    }
    forEach(e) {
        for (let t = 0, n = 0; t < this.content.length; t++) {
            let r = this.content[t];
            e(r, n, t),
            n += r.nodeSize
        }
    }
    findDiffStart(e, t=0) {
        return Kr(this, e, t)
    }
    findDiffEnd(e, t=this.size, n=e.size) {
        return Jr(this, e, t, n)
    }
    findIndex(e, t=-1) {
        if (e == 0)
            return Bt(0, e);
        if (e == this.size)
            return Bt(this.content.length, e);
        if (e > this.size || e < 0)
            throw new RangeError(`Position ${e} outside of fragment (${this})`);
        for (let n = 0, r = 0; ; n++) {
            let s = this.child(n)
              , o = r + s.nodeSize;
            if (o >= e)
                return o == e || t > 0 ? Bt(n + 1, o) : Bt(n, r);
            r = o
        }
    }
    toString() {
        return "<" + this.toStringInner() + ">"
    }
    toStringInner() {
        return this.content.join(", ")
    }
    toJSON() {
        return this.content.length ? this.content.map(e => e.toJSON()) : null
    }
    static fromJSON(e, t) {
        if (!t)
            return y.empty;
        if (!Array.isArray(t))
            throw new RangeError("Invalid input for Fragment.fromJSON");
        return new y(t.map(e.nodeFromJSON))
    }
    static fromArray(e) {
        if (!e.length)
            return y.empty;
        let t, n = 0;
        for (let r = 0; r < e.length; r++) {
            let s = e[r];
            n += s.nodeSize,
            r && s.isText && e[r - 1].sameMarkup(s) ? (t || (t = e.slice(0, r)),
            t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s)
        }
        return new y(t || e,n)
    }
    static from(e) {
        if (!e)
            return y.empty;
        if (e instanceof y)
            return e;
        if (Array.isArray(e))
            return this.fromArray(e);
        if (e.attrs)
            return new y([e],e.nodeSize);
        throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""))
    }
}
y.empty = new y([],0);
const pn = {
    index: 0,
    offset: 0
};
function Bt(i, e) {
    return pn.index = i,
    pn.offset = e,
    pn
}
function Ht(i, e) {
    if (i === e)
        return !0;
    if (!(i && typeof i == "object") || !(e && typeof e == "object"))
        return !1;
    let t = Array.isArray(i);
    if (Array.isArray(e) != t)
        return !1;
    if (t) {
        if (i.length != e.length)
            return !1;
        for (let n = 0; n < i.length; n++)
            if (!Ht(i[n], e[n]))
                return !1
    } else {
        for (let n in i)
            if (!(n in e) || !Ht(i[n], e[n]))
                return !1;
        for (let n in e)
            if (!(n in i))
                return !1
    }
    return !0
}
class M {
    constructor(e, t) {
        this.type = e,
        this.attrs = t
    }
    addToSet(e) {
        let t, n = !1;
        for (let r = 0; r < e.length; r++) {
            let s = e[r];
            if (this.eq(s))
                return e;
            if (this.type.excludes(s.type))
                t || (t = e.slice(0, r));
            else {
                if (s.type.excludes(this.type))
                    return e;
                !n && s.type.rank > this.type.rank && (t || (t = e.slice(0, r)),
                t.push(this),
                n = !0),
                t && t.push(s)
            }
        }
        return t || (t = e.slice()),
        n || t.push(this),
        t
    }
    removeFromSet(e) {
        for (let t = 0; t < e.length; t++)
            if (this.eq(e[t]))
                return e.slice(0, t).concat(e.slice(t + 1));
        return e
    }
    isInSet(e) {
        for (let t = 0; t < e.length; t++)
            if (this.eq(e[t]))
                return !0;
        return !1
    }
    eq(e) {
        return this == e || this.type == e.type && Ht(this.attrs, e.attrs)
    }
    toJSON() {
        let e = {
            type: this.type.name
        };
        for (let t in this.attrs) {
            e.attrs = this.attrs;
            break
        }
        return e
    }
    static fromJSON(e, t) {
        if (!t)
            throw new RangeError("Invalid input for Mark.fromJSON");
        let n = e.marks[t.type];
        if (!n)
            throw new RangeError(`There is no mark type ${t.type} in this schema`);
        let r = n.create(t.attrs);
        return n.checkAttrs(r.attrs),
        r
    }
    static sameSet(e, t) {
        if (e == t)
            return !0;
        if (e.length != t.length)
            return !1;
        for (let n = 0; n < e.length; n++)
            if (!e[n].eq(t[n]))
                return !1;
        return !0
    }
    static setFrom(e) {
        if (!e || Array.isArray(e) && e.length == 0)
            return M.none;
        if (e instanceof M)
            return [e];
        let t = e.slice();
        return t.sort( (n, r) => n.type.rank - r.type.rank),
        t
    }
}
M.none = [];
class $t extends Error {
}
class S {
    constructor(e, t, n) {
        this.content = e,
        this.openStart = t,
        this.openEnd = n
    }
    get size() {
        return this.content.size - this.openStart - this.openEnd
    }
    insertAt(e, t) {
        let n = Ur(this.content, e + this.openStart, t);
        return n && new S(n,this.openStart,this.openEnd)
    }
    removeBetween(e, t) {
        return new S(Wr(this.content, e + this.openStart, t + this.openStart),this.openStart,this.openEnd)
    }
    eq(e) {
        return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd
    }
    toString() {
        return this.content + "(" + this.openStart + "," + this.openEnd + ")"
    }
    toJSON() {
        if (!this.content.size)
            return null;
        let e = {
            content: this.content.toJSON()
        };
        return this.openStart > 0 && (e.openStart = this.openStart),
        this.openEnd > 0 && (e.openEnd = this.openEnd),
        e
    }
    static fromJSON(e, t) {
        if (!t)
            return S.empty;
        let n = t.openStart || 0
          , r = t.openEnd || 0;
        if (typeof n != "number" || typeof r != "number")
            throw new RangeError("Invalid input for Slice.fromJSON");
        return new S(y.fromJSON(e, t.content),n,r)
    }
    static maxOpen(e, t=!0) {
        let n = 0
          , r = 0;
        for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild)
            n++;
        for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild)
            r++;
        return new S(e,n,r)
    }
}
S.empty = new S(y.empty,0,0);
function Wr(i, e, t) {
    let {index: n, offset: r} = i.findIndex(e)
      , s = i.maybeChild(n)
      , {index: o, offset: l} = i.findIndex(t);
    if (r == e || s.isText) {
        if (l != t && !i.child(o).isText)
            throw new RangeError("Removing non-flat range");
        return i.cut(0, e).append(i.cut(t))
    }
    if (n != o)
        throw new RangeError("Removing non-flat range");
    return i.replaceChild(n, s.copy(Wr(s.content, e - r - 1, t - r - 1)))
}
function Ur(i, e, t, n) {
    let {index: r, offset: s} = i.findIndex(e)
      , o = i.maybeChild(r);
    if (s == e || o.isText)
        return i.cut(0, e).append(t).append(i.cut(e));
    let l = Ur(o.content, e - s - 1, t);
    return l && i.replaceChild(r, o.copy(l))
}
function Hl(i, e, t) {
    if (t.openStart > i.depth)
        throw new $t("Inserted content deeper than insertion position");
    if (i.depth - t.openStart != e.depth - t.openEnd)
        throw new $t("Inconsistent open depths");
    return Hr(i, e, t, 0)
}
function Hr(i, e, t, n) {
    let r = i.index(n)
      , s = i.node(n);
    if (r == e.index(n) && n < i.depth - t.openStart) {
        let o = Hr(i, e, t, n + 1);
        return s.copy(s.content.replaceChild(r, o))
    } else if (t.content.size)
        if (!t.openStart && !t.openEnd && i.depth == n && e.depth == n) {
            let o = i.parent
              , l = o.content;
            return ze(o, l.cut(0, i.parentOffset).append(t.content).append(l.cut(e.parentOffset)))
        } else {
            let {start: o, end: l} = $l(t, i);
            return ze(s, Gr(i, o, l, e, n))
        }
    else
        return ze(s, Gt(i, e, n))
}
function $r(i, e) {
    if (!e.type.compatibleContent(i.type))
        throw new $t("Cannot join " + e.type.name + " onto " + i.type.name)
}
function Dn(i, e, t) {
    let n = i.node(t);
    return $r(n, e.node(t)),
    n
}
function Fe(i, e) {
    let t = e.length - 1;
    t >= 0 && i.isText && i.sameMarkup(e[t]) ? e[t] = i.withText(e[t].text + i.text) : e.push(i)
}
function kt(i, e, t, n) {
    let r = (e || i).node(t)
      , s = 0
      , o = e ? e.index(t) : r.childCount;
    i && (s = i.index(t),
    i.depth > t ? s++ : i.textOffset && (Fe(i.nodeAfter, n),
    s++));
    for (let l = s; l < o; l++)
        Fe(r.child(l), n);
    e && e.depth == t && e.textOffset && Fe(e.nodeBefore, n)
}
function ze(i, e) {
    return i.type.checkContent(e),
    i.copy(e)
}
function Gr(i, e, t, n, r) {
    let s = i.depth > r && Dn(i, e, r + 1)
      , o = n.depth > r && Dn(t, n, r + 1)
      , l = [];
    return kt(null, i, r, l),
    s && o && e.index(r) == t.index(r) ? ($r(s, o),
    Fe(ze(s, Gr(i, e, t, n, r + 1)), l)) : (s && Fe(ze(s, Gt(i, e, r + 1)), l),
    kt(e, t, r, l),
    o && Fe(ze(o, Gt(t, n, r + 1)), l)),
    kt(n, null, r, l),
    new y(l)
}
function Gt(i, e, t) {
    let n = [];
    if (kt(null, i, t, n),
    i.depth > t) {
        let r = Dn(i, e, t + 1);
        Fe(ze(r, Gt(i, e, t + 1)), n)
    }
    return kt(e, null, t, n),
    new y(n)
}
function $l(i, e) {
    let t = e.depth - i.openStart
      , r = e.node(t).copy(i.content);
    for (let s = t - 1; s >= 0; s--)
        r = e.node(s).copy(y.from(r));
    return {
        start: r.resolveNoCache(i.openStart + t),
        end: r.resolveNoCache(r.content.size - i.openEnd - t)
    }
}
class Tt {
    constructor(e, t, n) {
        this.pos = e,
        this.path = t,
        this.parentOffset = n,
        this.depth = t.length / 3 - 1
    }
    resolveDepth(e) {
        return e == null ? this.depth : e < 0 ? this.depth + e : e
    }
    get parent() {
        return this.node(this.depth)
    }
    get doc() {
        return this.node(0)
    }
    node(e) {
        return this.path[this.resolveDepth(e) * 3]
    }
    index(e) {
        return this.path[this.resolveDepth(e) * 3 + 1]
    }
    indexAfter(e) {
        return e = this.resolveDepth(e),
        this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1)
    }
    start(e) {
        return e = this.resolveDepth(e),
        e == 0 ? 0 : this.path[e * 3 - 1] + 1
    }
    end(e) {
        return e = this.resolveDepth(e),
        this.start(e) + this.node(e).content.size
    }
    before(e) {
        if (e = this.resolveDepth(e),
        !e)
            throw new RangeError("There is no position before the top-level node");
        return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1]
    }
    after(e) {
        if (e = this.resolveDepth(e),
        !e)
            throw new RangeError("There is no position after the top-level node");
        return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize
    }
    get textOffset() {
        return this.pos - this.path[this.path.length - 1]
    }
    get nodeAfter() {
        let e = this.parent
          , t = this.index(this.depth);
        if (t == e.childCount)
            return null;
        let n = this.pos - this.path[this.path.length - 1]
          , r = e.child(t);
        return n ? e.child(t).cut(n) : r
    }
    get nodeBefore() {
        let e = this.index(this.depth)
          , t = this.pos - this.path[this.path.length - 1];
        return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1)
    }
    posAtIndex(e, t) {
        t = this.resolveDepth(t);
        let n = this.path[t * 3]
          , r = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
        for (let s = 0; s < e; s++)
            r += n.child(s).nodeSize;
        return r
    }
    marks() {
        let e = this.parent
          , t = this.index();
        if (e.content.size == 0)
            return M.none;
        if (this.textOffset)
            return e.child(t).marks;
        let n = e.maybeChild(t - 1)
          , r = e.maybeChild(t);
        if (!n) {
            let l = n;
            n = r,
            r = l
        }
        let s = n.marks;
        for (var o = 0; o < s.length; o++)
            s[o].type.spec.inclusive === !1 && (!r || !s[o].isInSet(r.marks)) && (s = s[o--].removeFromSet(s));
        return s
    }
    marksAcross(e) {
        let t = this.parent.maybeChild(this.index());
        if (!t || !t.isInline)
            return null;
        let n = t.marks
          , r = e.parent.maybeChild(e.index());
        for (var s = 0; s < n.length; s++)
            n[s].type.spec.inclusive === !1 && (!r || !n[s].isInSet(r.marks)) && (n = n[s--].removeFromSet(n));
        return n
    }
    sharedDepth(e) {
        for (let t = this.depth; t > 0; t--)
            if (this.start(t) <= e && this.end(t) >= e)
                return t;
        return 0
    }
    blockRange(e=this, t) {
        if (e.pos < this.pos)
            return e.blockRange(this);
        for (let n = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); n >= 0; n--)
            if (e.pos <= this.end(n) && (!t || t(this.node(n))))
                return new Yl(this,e,n);
        return null
    }
    sameParent(e) {
        return this.pos - this.parentOffset == e.pos - e.parentOffset
    }
    max(e) {
        return e.pos > this.pos ? e : this
    }
    min(e) {
        return e.pos < this.pos ? e : this
    }
    toString() {
        let e = "";
        for (let t = 1; t <= this.depth; t++)
            e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
        return e + ":" + this.parentOffset
    }
    static resolve(e, t) {
        if (!(t >= 0 && t <= e.content.size))
            throw new RangeError("Position " + t + " out of range");
        let n = []
          , r = 0
          , s = t;
        for (let o = e; ; ) {
            let {index: l, offset: a} = o.content.findIndex(s)
              , c = s - a;
            if (n.push(o, l, r + a),
            !c || (o = o.child(l),
            o.isText))
                break;
            s = c - 1,
            r += a + 1
        }
        return new Tt(t,n,s)
    }
    static resolveCached(e, t) {
        let n = Pi.get(e);
        if (n)
            for (let s = 0; s < n.elts.length; s++) {
                let o = n.elts[s];
                if (o.pos == t)
                    return o
            }
        else
            Pi.set(e, n = new Gl);
        let r = n.elts[n.i] = Tt.resolve(e, t);
        return n.i = (n.i + 1) % jl,
        r
    }
}
class Gl {
    constructor() {
        this.elts = [],
        this.i = 0
    }
}
const jl = 12
  , Pi = new WeakMap;
class Yl {
    constructor(e, t, n) {
        this.$from = e,
        this.$to = t,
        this.depth = n
    }
    get start() {
        return this.$from.before(this.depth + 1)
    }
    get end() {
        return this.$to.after(this.depth + 1)
    }
    get parent() {
        return this.$from.node(this.depth)
    }
    get startIndex() {
        return this.$from.index(this.depth)
    }
    get endIndex() {
        return this.$to.indexAfter(this.depth)
    }
}
const Xl = Object.create(null);
class ae {
    constructor(e, t, n, r=M.none) {
        this.type = e,
        this.attrs = t,
        this.marks = r,
        this.content = n || y.empty
    }
    get nodeSize() {
        return this.isLeaf ? 1 : 2 + this.content.size
    }
    get childCount() {
        return this.content.childCount
    }
    child(e) {
        return this.content.child(e)
    }
    maybeChild(e) {
        return this.content.maybeChild(e)
    }
    forEach(e) {
        this.content.forEach(e)
    }
    nodesBetween(e, t, n, r=0) {
        this.content.nodesBetween(e, t, n, r, this)
    }
    descendants(e) {
        this.nodesBetween(0, this.content.size, e)
    }
    get textContent() {
        return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "")
    }
    textBetween(e, t, n, r) {
        return this.content.textBetween(e, t, n, r)
    }
    get firstChild() {
        return this.content.firstChild
    }
    get lastChild() {
        return this.content.lastChild
    }
    eq(e) {
        return this == e || this.sameMarkup(e) && this.content.eq(e.content)
    }
    sameMarkup(e) {
        return this.hasMarkup(e.type, e.attrs, e.marks)
    }
    hasMarkup(e, t, n) {
        return this.type == e && Ht(this.attrs, t || e.defaultAttrs || Xl) && M.sameSet(this.marks, n || M.none)
    }
    copy(e=null) {
        return e == this.content ? this : new ae(this.type,this.attrs,e,this.marks)
    }
    mark(e) {
        return e == this.marks ? this : new ae(this.type,this.attrs,this.content,e)
    }
    cut(e, t=this.content.size) {
        return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t))
    }
    slice(e, t=this.content.size, n=!1) {
        if (e == t)
            return S.empty;
        let r = this.resolve(e)
          , s = this.resolve(t)
          , o = n ? 0 : r.sharedDepth(t)
          , l = r.start(o)
          , c = r.node(o).content.cut(r.pos - l, s.pos - l);
        return new S(c,r.depth - o,s.depth - o)
    }
    replace(e, t, n) {
        return Hl(this.resolve(e), this.resolve(t), n)
    }
    nodeAt(e) {
        for (let t = this; ; ) {
            let {index: n, offset: r} = t.content.findIndex(e);
            if (t = t.maybeChild(n),
            !t)
                return null;
            if (r == e || t.isText)
                return t;
            e -= r + 1
        }
    }
    childAfter(e) {
        let {index: t, offset: n} = this.content.findIndex(e);
        return {
            node: this.content.maybeChild(t),
            index: t,
            offset: n
        }
    }
    childBefore(e) {
        if (e == 0)
            return {
                node: null,
                index: 0,
                offset: 0
            };
        let {index: t, offset: n} = this.content.findIndex(e);
        if (n < e)
            return {
                node: this.content.child(t),
                index: t,
                offset: n
            };
        let r = this.content.child(t - 1);
        return {
            node: r,
            index: t - 1,
            offset: n - r.nodeSize
        }
    }
    resolve(e) {
        return Tt.resolveCached(this, e)
    }
    resolveNoCache(e) {
        return Tt.resolve(this, e)
    }
    rangeHasMark(e, t, n) {
        let r = !1;
        return t > e && this.nodesBetween(e, t, s => (n.isInSet(s.marks) && (r = !0),
        !r)),
        r
    }
    get isBlock() {
        return this.type.isBlock
    }
    get isTextblock() {
        return this.type.isTextblock
    }
    get inlineContent() {
        return this.type.inlineContent
    }
    get isInline() {
        return this.type.isInline
    }
    get isText() {
        return this.type.isText
    }
    get isLeaf() {
        return this.type.isLeaf
    }
    get isAtom() {
        return this.type.isAtom
    }
    toString() {
        if (this.type.spec.toDebugString)
            return this.type.spec.toDebugString(this);
        let e = this.type.name;
        return this.content.size && (e += "(" + this.content.toStringInner() + ")"),
        jr(this.marks, e)
    }
    contentMatchAt(e) {
        let t = this.type.contentMatch.matchFragment(this.content, 0, e);
        if (!t)
            throw new Error("Called contentMatchAt on a node with invalid content");
        return t
    }
    canReplace(e, t, n=y.empty, r=0, s=n.childCount) {
        let o = this.contentMatchAt(e).matchFragment(n, r, s)
          , l = o && o.matchFragment(this.content, t);
        if (!l || !l.validEnd)
            return !1;
        for (let a = r; a < s; a++)
            if (!this.type.allowsMarks(n.child(a).marks))
                return !1;
        return !0
    }
    canReplaceWith(e, t, n, r) {
        if (r && !this.type.allowsMarks(r))
            return !1;
        let s = this.contentMatchAt(e).matchType(n)
          , o = s && s.matchFragment(this.content, t);
        return o ? o.validEnd : !1
    }
    canAppend(e) {
        return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type)
    }
    check() {
        this.type.checkContent(this.content),
        this.type.checkAttrs(this.attrs);
        let e = M.none;
        for (let t = 0; t < this.marks.length; t++) {
            let n = this.marks[t];
            n.type.checkAttrs(n.attrs),
            e = n.addToSet(e)
        }
        if (!M.sameSet(e, this.marks))
            throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map(t => t.type.name)}`);
        this.content.forEach(t => t.check())
    }
    toJSON() {
        let e = {
            type: this.type.name
        };
        for (let t in this.attrs) {
            e.attrs = this.attrs;
            break
        }
        return this.content.size && (e.content = this.content.toJSON()),
        this.marks.length && (e.marks = this.marks.map(t => t.toJSON())),
        e
    }
    static fromJSON(e, t) {
        if (!t)
            throw new RangeError("Invalid input for Node.fromJSON");
        let n;
        if (t.marks) {
            if (!Array.isArray(t.marks))
                throw new RangeError("Invalid mark data for Node.fromJSON");
            n = t.marks.map(e.markFromJSON)
        }
        if (t.type == "text") {
            if (typeof t.text != "string")
                throw new RangeError("Invalid text node in JSON");
            return e.text(t.text, n)
        }
        let r = y.fromJSON(e, t.content)
          , s = e.nodeType(t.type).create(t.attrs, r, n);
        return s.type.checkAttrs(s.attrs),
        s
    }
}
ae.prototype.text = void 0;
class jt extends ae {
    constructor(e, t, n, r) {
        if (super(e, t, null, r),
        !n)
            throw new RangeError("Empty text nodes are not allowed");
        this.text = n
    }
    toString() {
        return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : jr(this.marks, JSON.stringify(this.text))
    }
    get textContent() {
        return this.text
    }
    textBetween(e, t) {
        return this.text.slice(e, t)
    }
    get nodeSize() {
        return this.text.length
    }
    mark(e) {
        return e == this.marks ? this : new jt(this.type,this.attrs,this.text,e)
    }
    withText(e) {
        return e == this.text ? this : new jt(this.type,this.attrs,e,this.marks)
    }
    cut(e=0, t=this.text.length) {
        return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t))
    }
    eq(e) {
        return this.sameMarkup(e) && this.text == e.text
    }
    toJSON() {
        let e = super.toJSON();
        return e.text = this.text,
        e
    }
}
function jr(i, e) {
    for (let t = i.length - 1; t >= 0; t--)
        e = i[t].type.name + "(" + e + ")";
    return e
}
class Ve {
    constructor(e) {
        this.validEnd = e,
        this.next = [],
        this.wrapCache = []
    }
    static parse(e, t) {
        let n = new Ql(e,t);
        if (n.next == null)
            return Ve.empty;
        let r = Yr(n);
        n.next && n.err("Unexpected trailing text");
        let s = sa(ra(r));
        return oa(s, n),
        s
    }
    matchType(e) {
        for (let t = 0; t < this.next.length; t++)
            if (this.next[t].type == e)
                return this.next[t].next;
        return null
    }
    matchFragment(e, t=0, n=e.childCount) {
        let r = this;
        for (let s = t; r && s < n; s++)
            r = r.matchType(e.child(s).type);
        return r
    }
    get inlineContent() {
        return this.next.length != 0 && this.next[0].type.isInline
    }
    get defaultType() {
        for (let e = 0; e < this.next.length; e++) {
            let {type: t} = this.next[e];
            if (!(t.isText || t.hasRequiredAttrs()))
                return t
        }
        return null
    }
    compatible(e) {
        for (let t = 0; t < this.next.length; t++)
            for (let n = 0; n < e.next.length; n++)
                if (this.next[t].type == e.next[n].type)
                    return !0;
        return !1
    }
    fillBefore(e, t=!1, n=0) {
        let r = [this];
        function s(o, l) {
            let a = o.matchFragment(e, n);
            if (a && (!t || a.validEnd))
                return y.from(l.map(c => c.createAndFill()));
            for (let c = 0; c < o.next.length; c++) {
                let {type: h, next: d} = o.next[c];
                if (!(h.isText || h.hasRequiredAttrs()) && r.indexOf(d) == -1) {
                    r.push(d);
                    let f = s(d, l.concat(h));
                    if (f)
                        return f
                }
            }
            return null
        }
        return s(this, [])
    }
    findWrapping(e) {
        for (let n = 0; n < this.wrapCache.length; n += 2)
            if (this.wrapCache[n] == e)
                return this.wrapCache[n + 1];
        let t = this.computeWrapping(e);
        return this.wrapCache.push(e, t),
        t
    }
    computeWrapping(e) {
        let t = Object.create(null)
          , n = [{
            match: this,
            type: null,
            via: null
        }];
        for (; n.length; ) {
            let r = n.shift()
              , s = r.match;
            if (s.matchType(e)) {
                let o = [];
                for (let l = r; l.type; l = l.via)
                    o.push(l.type);
                return o.reverse()
            }
            for (let o = 0; o < s.next.length; o++) {
                let {type: l, next: a} = s.next[o];
                !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!r.type || a.validEnd) && (n.push({
                    match: l.contentMatch,
                    type: l,
                    via: r
                }),
                t[l.name] = !0)
            }
        }
        return null
    }
    get edgeCount() {
        return this.next.length
    }
    edge(e) {
        if (e >= this.next.length)
            throw new RangeError(`There's no ${e}th edge in this content match`);
        return this.next[e]
    }
    toString() {
        let e = [];
        function t(n) {
            e.push(n);
            for (let r = 0; r < n.next.length; r++)
                e.indexOf(n.next[r].next) == -1 && t(n.next[r].next)
        }
        return t(this),
        e.map( (n, r) => {
            let s = r + (n.validEnd ? "*" : " ") + " ";
            for (let o = 0; o < n.next.length; o++)
                s += (o ? ", " : "") + n.next[o].type.name + "->" + e.indexOf(n.next[o].next);
            return s
        }
        ).join(`
`)
    }
}
Ve.empty = new Ve(!0);
class Ql {
    constructor(e, t) {
        this.string = e,
        this.nodeTypes = t,
        this.inline = null,
        this.pos = 0,
        this.tokens = e.split(/\s*(?=\b|\W|$)/),
        this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(),
        this.tokens[0] == "" && this.tokens.shift()
    }
    get next() {
        return this.tokens[this.pos]
    }
    eat(e) {
        return this.next == e && (this.pos++ || !0)
    }
    err(e) {
        throw new SyntaxError(e + " (in content expression '" + this.string + "')")
    }
}
function Yr(i) {
    let e = [];
    do
        e.push(Zl(i));
    while (i.eat("|"));
    return e.length == 1 ? e[0] : {
        type: "choice",
        exprs: e
    }
}
function Zl(i) {
    let e = [];
    do
        e.push(ea(i));
    while (i.next && i.next != ")" && i.next != "|");
    return e.length == 1 ? e[0] : {
        type: "seq",
        exprs: e
    }
}
function ea(i) {
    let e = ia(i);
    for (; ; )
        if (i.eat("+"))
            e = {
                type: "plus",
                expr: e
            };
        else if (i.eat("*"))
            e = {
                type: "star",
                expr: e
            };
        else if (i.eat("?"))
            e = {
                type: "opt",
                expr: e
            };
        else if (i.eat("{"))
            e = ta(i, e);
        else
            break;
    return e
}
function Fi(i) {
    /\D/.test(i.next) && i.err("Expected number, got '" + i.next + "'");
    let e = Number(i.next);
    return i.pos++,
    e
}
function ta(i, e) {
    let t = Fi(i)
      , n = t;
    return i.eat(",") && (i.next != "}" ? n = Fi(i) : n = -1),
    i.eat("}") || i.err("Unclosed braced range"),
    {
        type: "range",
        min: t,
        max: n,
        expr: e
    }
}
function na(i, e) {
    let t = i.nodeTypes
      , n = t[e];
    if (n)
        return [n];
    let r = [];
    for (let s in t) {
        let o = t[s];
        o.groups.indexOf(e) > -1 && r.push(o)
    }
    return r.length == 0 && i.err("No node type or group '" + e + "' found"),
    r
}
function ia(i) {
    if (i.eat("(")) {
        let e = Yr(i);
        return i.eat(")") || i.err("Missing closing paren"),
        e
    } else if (/\W/.test(i.next))
        i.err("Unexpected token '" + i.next + "'");
    else {
        let e = na(i, i.next).map(t => (i.inline == null ? i.inline = t.isInline : i.inline != t.isInline && i.err("Mixing inline and block content"),
        {
            type: "name",
            value: t
        }));
        return i.pos++,
        e.length == 1 ? e[0] : {
            type: "choice",
            exprs: e
        }
    }
}
function ra(i) {
    let e = [[]];
    return r(s(i, 0), t()),
    e;
    function t() {
        return e.push([]) - 1
    }
    function n(o, l, a) {
        let c = {
            term: a,
            to: l
        };
        return e[o].push(c),
        c
    }
    function r(o, l) {
        o.forEach(a => a.to = l)
    }
    function s(o, l) {
        if (o.type == "choice")
            return o.exprs.reduce( (a, c) => a.concat(s(c, l)), []);
        if (o.type == "seq")
            for (let a = 0; ; a++) {
                let c = s(o.exprs[a], l);
                if (a == o.exprs.length - 1)
                    return c;
                r(c, l = t())
            }
        else if (o.type == "star") {
            let a = t();
            return n(l, a),
            r(s(o.expr, a), a),
            [n(a)]
        } else if (o.type == "plus") {
            let a = t();
            return r(s(o.expr, l), a),
            r(s(o.expr, a), a),
            [n(a)]
        } else {
            if (o.type == "opt")
                return [n(l)].concat(s(o.expr, l));
            if (o.type == "range") {
                let a = l;
                for (let c = 0; c < o.min; c++) {
                    let h = t();
                    r(s(o.expr, a), h),
                    a = h
                }
                if (o.max == -1)
                    r(s(o.expr, a), a);
                else
                    for (let c = o.min; c < o.max; c++) {
                        let h = t();
                        n(a, h),
                        r(s(o.expr, a), h),
                        a = h
                    }
                return [n(a)]
            } else {
                if (o.type == "name")
                    return [n(l, void 0, o.value)];
                throw new Error("Unknown expr type")
            }
        }
    }
}
function Xr(i, e) {
    return e - i
}
function zi(i, e) {
    let t = [];
    return n(e),
    t.sort(Xr);
    function n(r) {
        let s = i[r];
        if (s.length == 1 && !s[0].term)
            return n(s[0].to);
        t.push(r);
        for (let o = 0; o < s.length; o++) {
            let {term: l, to: a} = s[o];
            !l && t.indexOf(a) == -1 && n(a)
        }
    }
}
function sa(i) {
    let e = Object.create(null);
    return t(zi(i, 0));
    function t(n) {
        let r = [];
        n.forEach(o => {
            i[o].forEach( ({term: l, to: a}) => {
                if (!l)
                    return;
                let c;
                for (let h = 0; h < r.length; h++)
                    r[h][0] == l && (c = r[h][1]);
                zi(i, a).forEach(h => {
                    c || r.push([l, c = []]),
                    c.indexOf(h) == -1 && c.push(h)
                }
                )
            }
            )
        }
        );
        let s = e[n.join(",")] = new Ve(n.indexOf(i.length - 1) > -1);
        for (let o = 0; o < r.length; o++) {
            let l = r[o][1].sort(Xr);
            s.next.push({
                type: r[o][0],
                next: e[l.join(",")] || t(l)
            })
        }
        return s
    }
}
function oa(i, e) {
    for (let t = 0, n = [i]; t < n.length; t++) {
        let r = n[t]
          , s = !r.validEnd
          , o = [];
        for (let l = 0; l < r.next.length; l++) {
            let {type: a, next: c} = r.next[l];
            o.push(a.name),
            s && !(a.isText || a.hasRequiredAttrs()) && (s = !1),
            n.indexOf(c) == -1 && n.push(c)
        }
        s && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)")
    }
}
function Qr(i) {
    let e = Object.create(null);
    for (let t in i) {
        let n = i[t];
        if (!n.hasDefault)
            return null;
        e[t] = n.default
    }
    return e
}
function Zr(i, e) {
    let t = Object.create(null);
    for (let n in i) {
        let r = e && e[n];
        if (r === void 0) {
            let s = i[n];
            if (s.hasDefault)
                r = s.default;
            else
                throw new RangeError("No value supplied for attribute " + n)
        }
        t[n] = r
    }
    return t
}
function es(i, e, t, n) {
    for (let r in e)
        if (!(r in i))
            throw new RangeError(`Unsupported attribute ${r} for ${t} of type ${r}`);
    for (let r in i) {
        let s = i[r];
        s.validate && s.validate(e[r])
    }
}
function ts(i, e) {
    let t = Object.create(null);
    if (e)
        for (let n in e)
            t[n] = new aa(i,n,e[n]);
    return t
}
let Bi = class ns {
    constructor(e, t, n) {
        this.name = e,
        this.schema = t,
        this.spec = n,
        this.markSet = null,
        this.groups = n.group ? n.group.split(" ") : [],
        this.attrs = ts(e, n.attrs),
        this.defaultAttrs = Qr(this.attrs),
        this.contentMatch = null,
        this.inlineContent = null,
        this.isBlock = !(n.inline || e == "text"),
        this.isText = e == "text"
    }
    get isInline() {
        return !this.isBlock
    }
    get isTextblock() {
        return this.isBlock && this.inlineContent
    }
    get isLeaf() {
        return this.contentMatch == Ve.empty
    }
    get isAtom() {
        return this.isLeaf || !!this.spec.atom
    }
    get whitespace() {
        return this.spec.whitespace || (this.spec.code ? "pre" : "normal")
    }
    hasRequiredAttrs() {
        for (let e in this.attrs)
            if (this.attrs[e].isRequired)
                return !0;
        return !1
    }
    compatibleContent(e) {
        return this == e || this.contentMatch.compatible(e.contentMatch)
    }
    computeAttrs(e) {
        return !e && this.defaultAttrs ? this.defaultAttrs : Zr(this.attrs, e)
    }
    create(e=null, t, n) {
        if (this.isText)
            throw new Error("NodeType.create can't construct text nodes");
        return new ae(this,this.computeAttrs(e),y.from(t),M.setFrom(n))
    }
    createChecked(e=null, t, n) {
        return t = y.from(t),
        this.checkContent(t),
        new ae(this,this.computeAttrs(e),t,M.setFrom(n))
    }
    createAndFill(e=null, t, n) {
        if (e = this.computeAttrs(e),
        t = y.from(t),
        t.size) {
            let o = this.contentMatch.fillBefore(t);
            if (!o)
                return null;
            t = o.append(t)
        }
        let r = this.contentMatch.matchFragment(t)
          , s = r && r.fillBefore(y.empty, !0);
        return s ? new ae(this,e,t.append(s),M.setFrom(n)) : null
    }
    validContent(e) {
        let t = this.contentMatch.matchFragment(e);
        if (!t || !t.validEnd)
            return !1;
        for (let n = 0; n < e.childCount; n++)
            if (!this.allowsMarks(e.child(n).marks))
                return !1;
        return !0
    }
    checkContent(e) {
        if (!this.validContent(e))
            throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`)
    }
    checkAttrs(e) {
        es(this.attrs, e, "node", this.name)
    }
    allowsMarkType(e) {
        return this.markSet == null || this.markSet.indexOf(e) > -1
    }
    allowsMarks(e) {
        if (this.markSet == null)
            return !0;
        for (let t = 0; t < e.length; t++)
            if (!this.allowsMarkType(e[t].type))
                return !1;
        return !0
    }
    allowedMarks(e) {
        if (this.markSet == null)
            return e;
        let t;
        for (let n = 0; n < e.length; n++)
            this.allowsMarkType(e[n].type) ? t && t.push(e[n]) : t || (t = e.slice(0, n));
        return t ? t.length ? t : M.none : e
    }
    static compile(e, t) {
        let n = Object.create(null);
        e.forEach( (s, o) => n[s] = new ns(s,t,o));
        let r = t.spec.topNode || "doc";
        if (!n[r])
            throw new RangeError("Schema is missing its top node type ('" + r + "')");
        if (!n.text)
            throw new RangeError("Every schema needs a 'text' type");
        for (let s in n.text.attrs)
            throw new RangeError("The text node type should not have attributes");
        return n
    }
}
;
function la(i, e, t) {
    let n = t.split("|");
    return r => {
        let s = r === null ? "null" : typeof r;
        if (n.indexOf(s) < 0)
            throw new RangeError(`Expected value of type ${n} for attribute ${e} on type ${i}, got ${s}`)
    }
}
class aa {
    constructor(e, t, n) {
        this.hasDefault = Object.prototype.hasOwnProperty.call(n, "default"),
        this.default = n.default,
        this.validate = typeof n.validate == "string" ? la(e, t, n.validate) : n.validate
    }
    get isRequired() {
        return !this.hasDefault
    }
}
class nn {
    constructor(e, t, n, r) {
        this.name = e,
        this.rank = t,
        this.schema = n,
        this.spec = r,
        this.attrs = ts(e, r.attrs),
        this.excluded = null;
        let s = Qr(this.attrs);
        this.instance = s ? new M(this,s) : null
    }
    create(e=null) {
        return !e && this.instance ? this.instance : new M(this,Zr(this.attrs, e))
    }
    static compile(e, t) {
        let n = Object.create(null)
          , r = 0;
        return e.forEach( (s, o) => n[s] = new nn(s,r++,t,o)),
        n
    }
    removeFromSet(e) {
        for (var t = 0; t < e.length; t++)
            e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)),
            t--);
        return e
    }
    isInSet(e) {
        for (let t = 0; t < e.length; t++)
            if (e[t].type == this)
                return e[t]
    }
    checkAttrs(e) {
        es(this.attrs, e, "mark", this.name)
    }
    excludes(e) {
        return this.excluded.indexOf(e) > -1
    }
}
class ud {
    constructor(e) {
        this.linebreakReplacement = null,
        this.cached = Object.create(null);
        let t = this.spec = {};
        for (let r in e)
            t[r] = e[r];
        t.nodes = gi.from(e.nodes),
        t.marks = gi.from(e.marks || {}),
        this.nodes = Bi.compile(this.spec.nodes, this),
        this.marks = nn.compile(this.spec.marks, this);
        let n = Object.create(null);
        for (let r in this.nodes) {
            if (r in this.marks)
                throw new RangeError(r + " can not be both a node and a mark");
            let s = this.nodes[r]
              , o = s.spec.content || ""
              , l = s.spec.marks;
            if (s.contentMatch = n[o] || (n[o] = Ve.parse(o, this.nodes)),
            s.inlineContent = s.contentMatch.inlineContent,
            s.spec.linebreakReplacement) {
                if (this.linebreakReplacement)
                    throw new RangeError("Multiple linebreak nodes defined");
                if (!s.isInline || !s.isLeaf)
                    throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
                this.linebreakReplacement = s
            }
            s.markSet = l == "_" ? null : l ? Li(this, l.split(" ")) : l == "" || !s.inlineContent ? [] : null
        }
        for (let r in this.marks) {
            let s = this.marks[r]
              , o = s.spec.excludes;
            s.excluded = o == null ? [s] : o == "" ? [] : Li(this, o.split(" "))
        }
        this.nodeFromJSON = this.nodeFromJSON.bind(this),
        this.markFromJSON = this.markFromJSON.bind(this),
        this.topNodeType = this.nodes[this.spec.topNode || "doc"],
        this.cached.wrappings = Object.create(null)
    }
    node(e, t=null, n, r) {
        if (typeof e == "string")
            e = this.nodeType(e);
        else if (e instanceof Bi) {
            if (e.schema != this)
                throw new RangeError("Node type from different schema used (" + e.name + ")")
        } else
            throw new RangeError("Invalid node type: " + e);
        return e.createChecked(t, n, r)
    }
    text(e, t) {
        let n = this.nodes.text;
        return new jt(n,n.defaultAttrs,e,M.setFrom(t))
    }
    mark(e, t) {
        return typeof e == "string" && (e = this.marks[e]),
        e.create(t)
    }
    nodeFromJSON(e) {
        return ae.fromJSON(this, e)
    }
    markFromJSON(e) {
        return M.fromJSON(this, e)
    }
    nodeType(e) {
        let t = this.nodes[e];
        if (!t)
            throw new RangeError("Unknown node type: " + e);
        return t
    }
}
function Li(i, e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let r = e[n]
          , s = i.marks[r]
          , o = s;
        if (s)
            t.push(s);
        else
            for (let l in i.marks) {
                let a = i.marks[l];
                (r == "_" || a.spec.group && a.spec.group.split(" ").indexOf(r) > -1) && t.push(o = a)
            }
        if (!o)
            throw new SyntaxError("Unknown mark type: '" + e[n] + "'")
    }
    return t
}
function ca(i) {
    return i.tag != null
}
function ha(i) {
    return i.style != null
}
class Mt {
    constructor(e, t) {
        this.schema = e,
        this.rules = t,
        this.tags = [],
        this.styles = [];
        let n = this.matchedStyles = [];
        t.forEach(r => {
            if (ca(r))
                this.tags.push(r);
            else if (ha(r)) {
                let s = /[^=]*/.exec(r.style)[0];
                n.indexOf(s) < 0 && n.push(s),
                this.styles.push(r)
            }
        }
        ),
        this.normalizeLists = !this.tags.some(r => {
            if (!/^(ul|ol)\b/.test(r.tag) || !r.node)
                return !1;
            let s = e.nodes[r.node];
            return s.contentMatch.matchType(s)
        }
        )
    }
    parse(e, t={}) {
        let n = new qi(this,t,!1);
        return n.addAll(e, t.from, t.to),
        n.finish()
    }
    parseSlice(e, t={}) {
        let n = new qi(this,t,!0);
        return n.addAll(e, t.from, t.to),
        S.maxOpen(n.finish())
    }
    matchTag(e, t, n) {
        for (let r = n ? this.tags.indexOf(n) + 1 : 0; r < this.tags.length; r++) {
            let s = this.tags[r];
            if (ua(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || t.matchesContext(s.context))) {
                if (s.getAttrs) {
                    let o = s.getAttrs(e);
                    if (o === !1)
                        continue;
                    s.attrs = o || void 0
                }
                return s
            }
        }
    }
    matchStyle(e, t, n, r) {
        for (let s = r ? this.styles.indexOf(r) + 1 : 0; s < this.styles.length; s++) {
            let o = this.styles[s]
              , l = o.style;
            if (!(l.indexOf(e) != 0 || o.context && !n.matchesContext(o.context) || l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
                if (o.getAttrs) {
                    let a = o.getAttrs(t);
                    if (a === !1)
                        continue;
                    o.attrs = a || void 0
                }
                return o
            }
        }
    }
    static schemaRules(e) {
        let t = [];
        function n(r) {
            let s = r.priority == null ? 50 : r.priority
              , o = 0;
            for (; o < t.length; o++) {
                let l = t[o];
                if ((l.priority == null ? 50 : l.priority) < s)
                    break
            }
            t.splice(o, 0, r)
        }
        for (let r in e.marks) {
            let s = e.marks[r].spec.parseDOM;
            s && s.forEach(o => {
                n(o = _i(o)),
                o.mark || o.ignore || o.clearMark || (o.mark = r)
            }
            )
        }
        for (let r in e.nodes) {
            let s = e.nodes[r].spec.parseDOM;
            s && s.forEach(o => {
                n(o = _i(o)),
                o.node || o.ignore || o.mark || (o.node = r)
            }
            )
        }
        return t
    }
    static fromSchema(e) {
        return e.cached.domParser || (e.cached.domParser = new Mt(e,Mt.schemaRules(e)))
    }
}
const is = {
    address: !0,
    article: !0,
    aside: !0,
    blockquote: !0,
    canvas: !0,
    dd: !0,
    div: !0,
    dl: !0,
    fieldset: !0,
    figcaption: !0,
    figure: !0,
    footer: !0,
    form: !0,
    h1: !0,
    h2: !0,
    h3: !0,
    h4: !0,
    h5: !0,
    h6: !0,
    header: !0,
    hgroup: !0,
    hr: !0,
    li: !0,
    noscript: !0,
    ol: !0,
    output: !0,
    p: !0,
    pre: !0,
    section: !0,
    table: !0,
    tfoot: !0,
    ul: !0
}
  , da = {
    head: !0,
    noscript: !0,
    object: !0,
    script: !0,
    style: !0,
    title: !0
}
  , rs = {
    ol: !0,
    ul: !0
}
  , Yt = 1
  , Xt = 2
  , _t = 4;
function Vi(i, e, t) {
    return e != null ? (e ? Yt : 0) | (e === "full" ? Xt : 0) : i && i.whitespace == "pre" ? Yt | Xt : t & -5
}
class Lt {
    constructor(e, t, n, r, s, o, l) {
        this.type = e,
        this.attrs = t,
        this.marks = n,
        this.pendingMarks = r,
        this.solid = s,
        this.options = l,
        this.content = [],
        this.activeMarks = M.none,
        this.stashMarks = [],
        this.match = o || (l & _t ? null : e.contentMatch)
    }
    findWrapping(e) {
        if (!this.match) {
            if (!this.type)
                return [];
            let t = this.type.contentMatch.fillBefore(y.from(e));
            if (t)
                this.match = this.type.contentMatch.matchFragment(t);
            else {
                let n = this.type.contentMatch, r;
                return (r = n.findWrapping(e.type)) ? (this.match = n,
                r) : null
            }
        }
        return this.match.findWrapping(e.type)
    }
    finish(e) {
        if (!(this.options & Yt)) {
            let n = this.content[this.content.length - 1], r;
            if (n && n.isText && (r = /[ \t\r\n\u000c]+$/.exec(n.text))) {
                let s = n;
                n.text.length == r[0].length ? this.content.pop() : this.content[this.content.length - 1] = s.withText(s.text.slice(0, s.text.length - r[0].length))
            }
        }
        let t = y.from(this.content);
        return !e && this.match && (t = t.append(this.match.fillBefore(y.empty, !0))),
        this.type ? this.type.create(this.attrs, t, this.marks) : t
    }
    popFromStashMark(e) {
        for (let t = this.stashMarks.length - 1; t >= 0; t--)
            if (e.eq(this.stashMarks[t]))
                return this.stashMarks.splice(t, 1)[0]
    }
    applyPending(e) {
        for (let t = 0, n = this.pendingMarks; t < n.length; t++) {
            let r = n[t];
            (this.type ? this.type.allowsMarkType(r.type) : pa(r.type, e)) && !r.isInSet(this.activeMarks) && (this.activeMarks = r.addToSet(this.activeMarks),
            this.pendingMarks = r.removeFromSet(this.pendingMarks))
        }
    }
    inlineContext(e) {
        return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !is.hasOwnProperty(e.parentNode.nodeName.toLowerCase())
    }
}
class qi {
    constructor(e, t, n) {
        this.parser = e,
        this.options = t,
        this.isOpen = n,
        this.open = 0;
        let r = t.topNode, s, o = Vi(null, t.preserveWhitespace, 0) | (n ? _t : 0);
        r ? s = new Lt(r.type,r.attrs,M.none,M.none,!0,t.topMatch || r.type.contentMatch,o) : n ? s = new Lt(null,null,M.none,M.none,!0,null,o) : s = new Lt(e.schema.topNodeType,null,M.none,M.none,!0,null,o),
        this.nodes = [s],
        this.find = t.findPositions,
        this.needsBlock = !1
    }
    get top() {
        return this.nodes[this.open]
    }
    addDOM(e) {
        e.nodeType == 3 ? this.addTextNode(e) : e.nodeType == 1 && this.addElement(e)
    }
    withStyleRules(e, t) {
        let n = e.style;
        if (!n || !n.length)
            return t();
        let r = this.readStyles(e.style);
        if (!r)
            return;
        let[s,o] = r
          , l = this.top;
        for (let a = 0; a < o.length; a++)
            this.removePendingMark(o[a], l);
        for (let a = 0; a < s.length; a++)
            this.addPendingMark(s[a]);
        t();
        for (let a = 0; a < s.length; a++)
            this.removePendingMark(s[a], l);
        for (let a = 0; a < o.length; a++)
            this.addPendingMark(o[a])
    }
    addTextNode(e) {
        let t = e.nodeValue
          , n = this.top;
        if (n.options & Xt || n.inlineContext(e) || /[^ \t\r\n\u000c]/.test(t)) {
            if (n.options & Yt)
                n.options & Xt ? t = t.replace(/\r\n?/g, `
`) : t = t.replace(/\r?\n|\r/g, " ");
            else if (t = t.replace(/[ \t\r\n\u000c]+/g, " "),
            /^[ \t\r\n\u000c]/.test(t) && this.open == this.nodes.length - 1) {
                let r = n.content[n.content.length - 1]
                  , s = e.previousSibling;
                (!r || s && s.nodeName == "BR" || r.isText && /[ \t\r\n\u000c]$/.test(r.text)) && (t = t.slice(1))
            }
            t && this.insertNode(this.parser.schema.text(t)),
            this.findInText(e)
        } else
            this.findInside(e)
    }
    addElement(e, t) {
        let n = e.nodeName.toLowerCase(), r;
        rs.hasOwnProperty(n) && this.parser.normalizeLists && fa(e);
        let s = this.options.ruleFromNode && this.options.ruleFromNode(e) || (r = this.parser.matchTag(e, this, t));
        if (s ? s.ignore : da.hasOwnProperty(n))
            this.findInside(e),
            this.ignoreFallback(e);
        else if (!s || s.skip || s.closeParent) {
            s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (e = s.skip);
            let o, l = this.top, a = this.needsBlock;
            if (is.hasOwnProperty(n))
                l.content.length && l.content[0].isInline && this.open && (this.open--,
                l = this.top),
                o = !0,
                l.type || (this.needsBlock = !0);
            else if (!e.firstChild) {
                this.leafFallback(e);
                return
            }
            s && s.skip ? this.addAll(e) : this.withStyleRules(e, () => this.addAll(e)),
            o && this.sync(l),
            this.needsBlock = a
        } else
            this.withStyleRules(e, () => {
                this.addElementByRule(e, s, s.consuming === !1 ? r : void 0)
            }
            )
    }
    leafFallback(e) {
        e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`))
    }
    ignoreFallback(e) {
        e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"))
    }
    readStyles(e) {
        let t = M.none
          , n = M.none;
        if (e.length)
            for (let r = 0; r < this.parser.matchedStyles.length; r++) {
                let s = this.parser.matchedStyles[r]
                  , o = e.getPropertyValue(s);
                if (o)
                    for (let l = void 0; ; ) {
                        let a = this.parser.matchStyle(s, o, this, l);
                        if (!a)
                            break;
                        if (a.ignore)
                            return null;
                        if (a.clearMark ? this.top.pendingMarks.concat(this.top.activeMarks).forEach(c => {
                            a.clearMark(c) && (n = c.addToSet(n))
                        }
                        ) : t = this.parser.schema.marks[a.mark].create(a.attrs).addToSet(t),
                        a.consuming === !1)
                            l = a;
                        else
                            break
                    }
            }
        return [t, n]
    }
    addElementByRule(e, t, n) {
        let r, s, o;
        t.node ? (s = this.parser.schema.nodes[t.node],
        s.isLeaf ? this.insertNode(s.create(t.attrs)) || this.leafFallback(e) : r = this.enter(s, t.attrs || null, t.preserveWhitespace)) : (o = this.parser.schema.marks[t.mark].create(t.attrs),
        this.addPendingMark(o));
        let l = this.top;
        if (s && s.isLeaf)
            this.findInside(e);
        else if (n)
            this.addElement(e, n);
        else if (t.getContent)
            this.findInside(e),
            t.getContent(e, this.parser.schema).forEach(a => this.insertNode(a));
        else {
            let a = e;
            typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement),
            this.findAround(e, a, !0),
            this.addAll(a)
        }
        r && this.sync(l) && this.open--,
        o && this.removePendingMark(o, l)
    }
    addAll(e, t, n) {
        let r = t || 0;
        for (let s = t ? e.childNodes[t] : e.firstChild, o = n == null ? null : e.childNodes[n]; s != o; s = s.nextSibling,
        ++r)
            this.findAtPoint(e, r),
            this.addDOM(s);
        this.findAtPoint(e, r)
    }
    findPlace(e) {
        let t, n;
        for (let r = this.open; r >= 0; r--) {
            let s = this.nodes[r]
              , o = s.findWrapping(e);
            if (o && (!t || t.length > o.length) && (t = o,
            n = s,
            !o.length) || s.solid)
                break
        }
        if (!t)
            return !1;
        this.sync(n);
        for (let r = 0; r < t.length; r++)
            this.enterInner(t[r], null, !1);
        return !0
    }
    insertNode(e) {
        if (e.isInline && this.needsBlock && !this.top.type) {
            let t = this.textblockFromContext();
            t && this.enterInner(t)
        }
        if (this.findPlace(e)) {
            this.closeExtra();
            let t = this.top;
            t.applyPending(e.type),
            t.match && (t.match = t.match.matchType(e.type));
            let n = t.activeMarks;
            for (let r = 0; r < e.marks.length; r++)
                (!t.type || t.type.allowsMarkType(e.marks[r].type)) && (n = e.marks[r].addToSet(n));
            return t.content.push(e.mark(n)),
            !0
        }
        return !1
    }
    enter(e, t, n) {
        let r = this.findPlace(e.create(t));
        return r && this.enterInner(e, t, !0, n),
        r
    }
    enterInner(e, t=null, n=!1, r) {
        this.closeExtra();
        let s = this.top;
        s.applyPending(e),
        s.match = s.match && s.match.matchType(e);
        let o = Vi(e, r, s.options);
        s.options & _t && s.content.length == 0 && (o |= _t),
        this.nodes.push(new Lt(e,t,s.activeMarks,s.pendingMarks,n,null,o)),
        this.open++
    }
    closeExtra(e=!1) {
        let t = this.nodes.length - 1;
        if (t > this.open) {
            for (; t > this.open; t--)
                this.nodes[t - 1].content.push(this.nodes[t].finish(e));
            this.nodes.length = this.open + 1
        }
    }
    finish() {
        return this.open = 0,
        this.closeExtra(this.isOpen),
        this.nodes[0].finish(this.isOpen || this.options.topOpen)
    }
    sync(e) {
        for (let t = this.open; t >= 0; t--)
            if (this.nodes[t] == e)
                return this.open = t,
                !0;
        return !1
    }
    get currentPos() {
        this.closeExtra();
        let e = 0;
        for (let t = this.open; t >= 0; t--) {
            let n = this.nodes[t].content;
            for (let r = n.length - 1; r >= 0; r--)
                e += n[r].nodeSize;
            t && e++
        }
        return e
    }
    findAtPoint(e, t) {
        if (this.find)
            for (let n = 0; n < this.find.length; n++)
                this.find[n].node == e && this.find[n].offset == t && (this.find[n].pos = this.currentPos)
    }
    findInside(e) {
        if (this.find)
            for (let t = 0; t < this.find.length; t++)
                this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos)
    }
    findAround(e, t, n) {
        if (e != t && this.find)
            for (let r = 0; r < this.find.length; r++)
                this.find[r].pos == null && e.nodeType == 1 && e.contains(this.find[r].node) && t.compareDocumentPosition(this.find[r].node) & (n ? 2 : 4) && (this.find[r].pos = this.currentPos)
    }
    findInText(e) {
        if (this.find)
            for (let t = 0; t < this.find.length; t++)
                this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset))
    }
    matchesContext(e) {
        if (e.indexOf("|") > -1)
            return e.split(/\s*\|\s*/).some(this.matchesContext, this);
        let t = e.split("/")
          , n = this.options.context
          , r = !this.isOpen && (!n || n.parent.type == this.nodes[0].type)
          , s = -(n ? n.depth + 1 : 0) + (r ? 0 : 1)
          , o = (l, a) => {
            for (; l >= 0; l--) {
                let c = t[l];
                if (c == "") {
                    if (l == t.length - 1 || l == 0)
                        continue;
                    for (; a >= s; a--)
                        if (o(l - 1, a))
                            return !0;
                    return !1
                } else {
                    let h = a > 0 || a == 0 && r ? this.nodes[a].type : n && a >= s ? n.node(a - s).type : null;
                    if (!h || h.name != c && h.groups.indexOf(c) == -1)
                        return !1;
                    a--
                }
            }
            return !0
        }
        ;
        return o(t.length - 1, this.open)
    }
    textblockFromContext() {
        let e = this.options.context;
        if (e)
            for (let t = e.depth; t >= 0; t--) {
                let n = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
                if (n && n.isTextblock && n.defaultAttrs)
                    return n
            }
        for (let t in this.parser.schema.nodes) {
            let n = this.parser.schema.nodes[t];
            if (n.isTextblock && n.defaultAttrs)
                return n
        }
    }
    addPendingMark(e) {
        let t = ma(e, this.top.pendingMarks);
        t && this.top.stashMarks.push(t),
        this.top.pendingMarks = e.addToSet(this.top.pendingMarks)
    }
    removePendingMark(e, t) {
        for (let n = this.open; n >= 0; n--) {
            let r = this.nodes[n];
            if (r.pendingMarks.lastIndexOf(e) > -1)
                r.pendingMarks = e.removeFromSet(r.pendingMarks);
            else {
                r.activeMarks = e.removeFromSet(r.activeMarks);
                let o = r.popFromStashMark(e);
                o && r.type && r.type.allowsMarkType(o.type) && (r.activeMarks = o.addToSet(r.activeMarks))
            }
            if (r == t)
                break
        }
    }
}
function fa(i) {
    for (let e = i.firstChild, t = null; e; e = e.nextSibling) {
        let n = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
        n && rs.hasOwnProperty(n) && t ? (t.appendChild(e),
        e = t) : n == "li" ? t = e : n && (t = null)
    }
}
function ua(i, e) {
    return (i.matches || i.msMatchesSelector || i.webkitMatchesSelector || i.mozMatchesSelector).call(i, e)
}
function _i(i) {
    let e = {};
    for (let t in i)
        e[t] = i[t];
    return e
}
function pa(i, e) {
    let t = e.schema.nodes;
    for (let n in t) {
        let r = t[n];
        if (!r.allowsMarkType(i))
            continue;
        let s = []
          , o = l => {
            s.push(l);
            for (let a = 0; a < l.edgeCount; a++) {
                let {type: c, next: h} = l.edge(a);
                if (c == e || s.indexOf(h) < 0 && o(h))
                    return !0
            }
        }
        ;
        if (o(r.contentMatch))
            return !0
    }
}
function ma(i, e) {
    for (let t = 0; t < e.length; t++)
        if (i.eq(e[t]))
            return e[t]
}
class st {
    constructor(e, t) {
        this.nodes = e,
        this.marks = t
    }
    serializeFragment(e, t={}, n) {
        n || (n = mn(t).createDocumentFragment());
        let r = n
          , s = [];
        return e.forEach(o => {
            if (s.length || o.marks.length) {
                let l = 0
                  , a = 0;
                for (; l < s.length && a < o.marks.length; ) {
                    let c = o.marks[a];
                    if (!this.marks[c.type.name]) {
                        a++;
                        continue
                    }
                    if (!c.eq(s[l][0]) || c.type.spec.spanning === !1)
                        break;
                    l++,
                    a++
                }
                for (; l < s.length; )
                    r = s.pop()[1];
                for (; a < o.marks.length; ) {
                    let c = o.marks[a++]
                      , h = this.serializeMark(c, o.isInline, t);
                    h && (s.push([c, r]),
                    r.appendChild(h.dom),
                    r = h.contentDOM || h.dom)
                }
            }
            r.appendChild(this.serializeNodeInner(o, t))
        }
        ),
        n
    }
    serializeNodeInner(e, t) {
        let {dom: n, contentDOM: r} = Kt(mn(t), this.nodes[e.type.name](e), null, e.attrs);
        if (r) {
            if (e.isLeaf)
                throw new RangeError("Content hole not allowed in a leaf node spec");
            this.serializeFragment(e.content, t, r)
        }
        return n
    }
    serializeNode(e, t={}) {
        let n = this.serializeNodeInner(e, t);
        for (let r = e.marks.length - 1; r >= 0; r--) {
            let s = this.serializeMark(e.marks[r], e.isInline, t);
            s && ((s.contentDOM || s.dom).appendChild(n),
            n = s.dom)
        }
        return n
    }
    serializeMark(e, t, n={}) {
        let r = this.marks[e.type.name];
        return r && Kt(mn(n), r(e, t), null, e.attrs)
    }
    static renderSpec(e, t, n=null, r) {
        return Kt(e, t, n, r)
    }
    static fromSchema(e) {
        return e.cached.domSerializer || (e.cached.domSerializer = new st(this.nodesFromSchema(e),this.marksFromSchema(e)))
    }
    static nodesFromSchema(e) {
        let t = Ki(e.nodes);
        return t.text || (t.text = n => n.text),
        t
    }
    static marksFromSchema(e) {
        return Ki(e.marks)
    }
}
function Ki(i) {
    let e = {};
    for (let t in i) {
        let n = i[t].spec.toDOM;
        n && (e[t] = n)
    }
    return e
}
function mn(i) {
    return i.document || window.document
}
const Ji = new WeakMap;
function ga(i) {
    let e = Ji.get(i);
    return e === void 0 && Ji.set(i, e = ya(i)),
    e
}
function ya(i) {
    let e = null;
    function t(n) {
        if (n && typeof n == "object")
            if (Array.isArray(n))
                if (typeof n[0] == "string")
                    e || (e = []),
                    e.push(n);
                else
                    for (let r = 0; r < n.length; r++)
                        t(n[r]);
            else
                for (let r in n)
                    t(n[r])
    }
    return t(i),
    e
}
function Kt(i, e, t, n) {
    if (typeof e == "string")
        return {
            dom: i.createTextNode(e)
        };
    if (e.nodeType != null)
        return {
            dom: e
        };
    if (e.dom && e.dom.nodeType != null)
        return e;
    let r = e[0], s;
    if (typeof r != "string")
        throw new RangeError("Invalid array passed to renderSpec");
    if (n && (s = ga(n)) && s.indexOf(e) > -1)
        throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
    let o = r.indexOf(" ");
    o > 0 && (t = r.slice(0, o),
    r = r.slice(o + 1));
    let l, a = t ? i.createElementNS(t, r) : i.createElement(r), c = e[1], h = 1;
    if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
        h = 2;
        for (let d in c)
            if (c[d] != null) {
                let f = d.indexOf(" ");
                f > 0 ? a.setAttributeNS(d.slice(0, f), d.slice(f + 1), c[d]) : a.setAttribute(d, c[d])
            }
    }
    for (let d = h; d < e.length; d++) {
        let f = e[d];
        if (f === 0) {
            if (d < e.length - 1 || d > h)
                throw new RangeError("Content hole must be the only child of its parent node");
            return {
                dom: a,
                contentDOM: a
            }
        } else {
            let {dom: p, contentDOM: u} = Kt(i, f, t, n);
            if (a.appendChild(p),
            u) {
                if (l)
                    throw new RangeError("Multiple content holes");
                l = u
            }
        }
    }
    return {
        dom: a,
        contentDOM: l
    }
}
const ss = 65535
  , ls = Math.pow(2, 16);
function Sa(i, e) {
    return i + e * ls
}
function Wi(i) {
    return i & ss
}
function ka(i) {
    return (i - (i & ss)) / ls
}
const as = 1
  , cs = 2
  , Jt = 4
  , hs = 8;
class An {
    constructor(e, t, n) {
        this.pos = e,
        this.delInfo = t,
        this.recover = n
    }
    get deleted() {
        return (this.delInfo & hs) > 0
    }
    get deletedBefore() {
        return (this.delInfo & (as | Jt)) > 0
    }
    get deletedAfter() {
        return (this.delInfo & (cs | Jt)) > 0
    }
    get deletedAcross() {
        return (this.delInfo & Jt) > 0
    }
}
class j {
    constructor(e, t=!1) {
        if (this.ranges = e,
        this.inverted = t,
        !e.length && j.empty)
            return j.empty
    }
    recover(e) {
        let t = 0
          , n = Wi(e);
        if (!this.inverted)
            for (let r = 0; r < n; r++)
                t += this.ranges[r * 3 + 2] - this.ranges[r * 3 + 1];
        return this.ranges[n * 3] + t + ka(e)
    }
    mapResult(e, t=1) {
        return this._map(e, t, !1)
    }
    map(e, t=1) {
        return this._map(e, t, !0)
    }
    _map(e, t, n) {
        let r = 0
          , s = this.inverted ? 2 : 1
          , o = this.inverted ? 1 : 2;
        for (let l = 0; l < this.ranges.length; l += 3) {
            let a = this.ranges[l] - (this.inverted ? r : 0);
            if (a > e)
                break;
            let c = this.ranges[l + s]
              , h = this.ranges[l + o]
              , d = a + c;
            if (e <= d) {
                let f = c ? e == a ? -1 : e == d ? 1 : t : t
                  , p = a + r + (f < 0 ? 0 : h);
                if (n)
                    return p;
                let u = e == (t < 0 ? a : d) ? null : Sa(l / 3, e - a)
                  , m = e == a ? cs : e == d ? as : Jt;
                return (t < 0 ? e != a : e != d) && (m |= hs),
                new An(p,m,u)
            }
            r += h - c
        }
        return n ? e + r : new An(e + r,0,null)
    }
    touches(e, t) {
        let n = 0
          , r = Wi(t)
          , s = this.inverted ? 2 : 1
          , o = this.inverted ? 1 : 2;
        for (let l = 0; l < this.ranges.length; l += 3) {
            let a = this.ranges[l] - (this.inverted ? n : 0);
            if (a > e)
                break;
            let c = this.ranges[l + s]
              , h = a + c;
            if (e <= h && l == r * 3)
                return !0;
            n += this.ranges[l + o] - c
        }
        return !1
    }
    forEach(e) {
        let t = this.inverted ? 2 : 1
          , n = this.inverted ? 1 : 2;
        for (let r = 0, s = 0; r < this.ranges.length; r += 3) {
            let o = this.ranges[r]
              , l = o - (this.inverted ? s : 0)
              , a = o + (this.inverted ? 0 : s)
              , c = this.ranges[r + t]
              , h = this.ranges[r + n];
            e(l, l + c, a, a + h),
            s += h - c
        }
    }
    invert() {
        return new j(this.ranges,!this.inverted)
    }
    toString() {
        return (this.inverted ? "-" : "") + JSON.stringify(this.ranges)
    }
    static offset(e) {
        return e == 0 ? j.empty : new j(e < 0 ? [0, -e, 0] : [0, 0, e])
    }
}
j.empty = new j([]);
class bt {
    constructor(e=[], t, n=0, r=e.length) {
        this.maps = e,
        this.mirror = t,
        this.from = n,
        this.to = r
    }
    slice(e=0, t=this.maps.length) {
        return new bt(this.maps,this.mirror,e,t)
    }
    copy() {
        return new bt(this.maps.slice(),this.mirror && this.mirror.slice(),this.from,this.to)
    }
    appendMap(e, t) {
        this.to = this.maps.push(e),
        t != null && this.setMirror(this.maps.length - 1, t)
    }
    appendMapping(e) {
        for (let t = 0, n = this.maps.length; t < e.maps.length; t++) {
            let r = e.getMirror(t);
            this.appendMap(e.maps[t], r != null && r < t ? n + r : void 0)
        }
    }
    getMirror(e) {
        if (this.mirror) {
            for (let t = 0; t < this.mirror.length; t++)
                if (this.mirror[t] == e)
                    return this.mirror[t + (t % 2 ? -1 : 1)]
        }
    }
    setMirror(e, t) {
        this.mirror || (this.mirror = []),
        this.mirror.push(e, t)
    }
    appendMappingInverted(e) {
        for (let t = e.maps.length - 1, n = this.maps.length + e.maps.length; t >= 0; t--) {
            let r = e.getMirror(t);
            this.appendMap(e.maps[t].invert(), r != null && r > t ? n - r - 1 : void 0)
        }
    }
    invert() {
        let e = new bt;
        return e.appendMappingInverted(this),
        e
    }
    map(e, t=1) {
        if (this.mirror)
            return this._map(e, t, !0);
        for (let n = this.from; n < this.to; n++)
            e = this.maps[n].map(e, t);
        return e
    }
    mapResult(e, t=1) {
        return this._map(e, t, !1)
    }
    _map(e, t, n) {
        let r = 0;
        for (let s = this.from; s < this.to; s++) {
            let o = this.maps[s]
              , l = o.mapResult(e, t);
            if (l.recover != null) {
                let a = this.getMirror(s);
                if (a != null && a > s && a < this.to) {
                    s = a,
                    e = this.maps[a].recover(l.recover);
                    continue
                }
            }
            r |= l.delInfo,
            e = l.pos
        }
        return n ? e : new An(e,r,null)
    }
}
const gn = Object.create(null);
class q {
    getMap() {
        return j.empty
    }
    merge(e) {
        return null
    }
    static fromJSON(e, t) {
        if (!t || !t.stepType)
            throw new RangeError("Invalid input for Step.fromJSON");
        let n = gn[t.stepType];
        if (!n)
            throw new RangeError(`No step type ${t.stepType} defined`);
        return n.fromJSON(e, t)
    }
    static jsonID(e, t) {
        if (e in gn)
            throw new RangeError("Duplicate use of step JSON ID " + e);
        return gn[e] = t,
        t.prototype.jsonID = e,
        t
    }
}
class I {
    constructor(e, t) {
        this.doc = e,
        this.failed = t
    }
    static ok(e) {
        return new I(e,null)
    }
    static fail(e) {
        return new I(null,e)
    }
    static fromReplace(e, t, n, r) {
        try {
            return I.ok(e.replace(t, n, r))
        } catch (s) {
            if (s instanceof $t)
                return I.fail(s.message);
            throw s
        }
    }
}
function Hn(i, e, t) {
    let n = [];
    for (let r = 0; r < i.childCount; r++) {
        let s = i.child(r);
        s.content.size && (s = s.copy(Hn(s.content, e, s))),
        s.isInline && (s = e(s, t, r)),
        n.push(s)
    }
    return y.fromArray(n)
}
class ke extends q {
    constructor(e, t, n) {
        super(),
        this.from = e,
        this.to = t,
        this.mark = n
    }
    apply(e) {
        let t = e.slice(this.from, this.to)
          , n = e.resolve(this.from)
          , r = n.node(n.sharedDepth(this.to))
          , s = new S(Hn(t.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), r),t.openStart,t.openEnd);
        return I.fromReplace(e, this.from, this.to, s)
    }
    invert() {
        return new le(this.from,this.to,this.mark)
    }
    map(e) {
        let t = e.mapResult(this.from, 1)
          , n = e.mapResult(this.to, -1);
        return t.deleted && n.deleted || t.pos >= n.pos ? null : new ke(t.pos,n.pos,this.mark)
    }
    merge(e) {
        return e instanceof ke && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new ke(Math.min(this.from, e.from),Math.max(this.to, e.to),this.mark) : null
    }
    toJSON() {
        return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
        }
    }
    static fromJSON(e, t) {
        if (typeof t.from != "number" || typeof t.to != "number")
            throw new RangeError("Invalid input for AddMarkStep.fromJSON");
        return new ke(t.from,t.to,e.markFromJSON(t.mark))
    }
}
q.jsonID("addMark", ke);
class le extends q {
    constructor(e, t, n) {
        super(),
        this.from = e,
        this.to = t,
        this.mark = n
    }
    apply(e) {
        let t = e.slice(this.from, this.to)
          , n = new S(Hn(t.content, r => r.mark(this.mark.removeFromSet(r.marks)), e),t.openStart,t.openEnd);
        return I.fromReplace(e, this.from, this.to, n)
    }
    invert() {
        return new ke(this.from,this.to,this.mark)
    }
    map(e) {
        let t = e.mapResult(this.from, 1)
          , n = e.mapResult(this.to, -1);
        return t.deleted && n.deleted || t.pos >= n.pos ? null : new le(t.pos,n.pos,this.mark)
    }
    merge(e) {
        return e instanceof le && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new le(Math.min(this.from, e.from),Math.max(this.to, e.to),this.mark) : null
    }
    toJSON() {
        return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
        }
    }
    static fromJSON(e, t) {
        if (typeof t.from != "number" || typeof t.to != "number")
            throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
        return new le(t.from,t.to,e.markFromJSON(t.mark))
    }
}
q.jsonID("removeMark", le);
class be extends q {
    constructor(e, t) {
        super(),
        this.pos = e,
        this.mark = t
    }
    apply(e) {
        let t = e.nodeAt(this.pos);
        if (!t)
            return I.fail("No node at mark step's position");
        let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
        return I.fromReplace(e, this.pos, this.pos + 1, new S(y.from(n),0,t.isLeaf ? 0 : 1))
    }
    invert(e) {
        let t = e.nodeAt(this.pos);
        if (t) {
            let n = this.mark.addToSet(t.marks);
            if (n.length == t.marks.length) {
                for (let r = 0; r < t.marks.length; r++)
                    if (!t.marks[r].isInSet(n))
                        return new be(this.pos,t.marks[r]);
                return new be(this.pos,this.mark)
            }
        }
        return new et(this.pos,this.mark)
    }
    map(e) {
        let t = e.mapResult(this.pos, 1);
        return t.deletedAfter ? null : new be(t.pos,this.mark)
    }
    toJSON() {
        return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
        }
    }
    static fromJSON(e, t) {
        if (typeof t.pos != "number")
            throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
        return new be(t.pos,e.markFromJSON(t.mark))
    }
}
q.jsonID("addNodeMark", be);
class et extends q {
    constructor(e, t) {
        super(),
        this.pos = e,
        this.mark = t
    }
    apply(e) {
        let t = e.nodeAt(this.pos);
        if (!t)
            return I.fail("No node at mark step's position");
        let n = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
        return I.fromReplace(e, this.pos, this.pos + 1, new S(y.from(n),0,t.isLeaf ? 0 : 1))
    }
    invert(e) {
        let t = e.nodeAt(this.pos);
        return !t || !this.mark.isInSet(t.marks) ? this : new be(this.pos,this.mark)
    }
    map(e) {
        let t = e.mapResult(this.pos, 1);
        return t.deletedAfter ? null : new et(t.pos,this.mark)
    }
    toJSON() {
        return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
        }
    }
    static fromJSON(e, t) {
        if (typeof t.pos != "number")
            throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
        return new et(t.pos,e.markFromJSON(t.mark))
    }
}
q.jsonID("removeNodeMark", et);
class L extends q {
    constructor(e, t, n, r=!1) {
        super(),
        this.from = e,
        this.to = t,
        this.slice = n,
        this.structure = r
    }
    apply(e) {
        return this.structure && In(e, this.from, this.to) ? I.fail("Structure replace would overwrite content") : I.fromReplace(e, this.from, this.to, this.slice)
    }
    getMap() {
        return new j([this.from, this.to - this.from, this.slice.size])
    }
    invert(e) {
        return new L(this.from,this.from + this.slice.size,e.slice(this.from, this.to))
    }
    map(e) {
        let t = e.mapResult(this.from, 1)
          , n = e.mapResult(this.to, -1);
        return t.deletedAcross && n.deletedAcross ? null : new L(t.pos,Math.max(t.pos, n.pos),this.slice)
    }
    merge(e) {
        if (!(e instanceof L) || e.structure || this.structure)
            return null;
        if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
            let t = this.slice.size + e.slice.size == 0 ? S.empty : new S(this.slice.content.append(e.slice.content),this.slice.openStart,e.slice.openEnd);
            return new L(this.from,this.to + (e.to - e.from),t,this.structure)
        } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
            let t = this.slice.size + e.slice.size == 0 ? S.empty : new S(e.slice.content.append(this.slice.content),e.slice.openStart,this.slice.openEnd);
            return new L(e.from,this.to,t,this.structure)
        } else
            return null
    }
    toJSON() {
        let e = {
            stepType: "replace",
            from: this.from,
            to: this.to
        };
        return this.slice.size && (e.slice = this.slice.toJSON()),
        this.structure && (e.structure = !0),
        e
    }
    static fromJSON(e, t) {
        if (typeof t.from != "number" || typeof t.to != "number")
            throw new RangeError("Invalid input for ReplaceStep.fromJSON");
        return new L(t.from,t.to,S.fromJSON(e, t.slice),!!t.structure)
    }
}
q.jsonID("replace", L);
class Y extends q {
    constructor(e, t, n, r, s, o, l=!1) {
        super(),
        this.from = e,
        this.to = t,
        this.gapFrom = n,
        this.gapTo = r,
        this.slice = s,
        this.insert = o,
        this.structure = l
    }
    apply(e) {
        if (this.structure && (In(e, this.from, this.gapFrom) || In(e, this.gapTo, this.to)))
            return I.fail("Structure gap-replace would overwrite content");
        let t = e.slice(this.gapFrom, this.gapTo);
        if (t.openStart || t.openEnd)
            return I.fail("Gap is not a flat range");
        let n = this.slice.insertAt(this.insert, t.content);
        return n ? I.fromReplace(e, this.from, this.to, n) : I.fail("Content does not fit in gap")
    }
    getMap() {
        return new j([this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert])
    }
    invert(e) {
        let t = this.gapTo - this.gapFrom;
        return new Y(this.from,this.from + this.slice.size + t,this.from + this.insert,this.from + this.insert + t,e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from),this.gapFrom - this.from,this.structure)
    }
    map(e) {
        let t = e.mapResult(this.from, 1)
          , n = e.mapResult(this.to, -1)
          , r = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1)
          , s = this.to == this.gapTo ? n.pos : e.map(this.gapTo, 1);
        return t.deletedAcross && n.deletedAcross || r < t.pos || s > n.pos ? null : new Y(t.pos,n.pos,r,s,this.slice,this.insert,this.structure)
    }
    toJSON() {
        let e = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert
        };
        return this.slice.size && (e.slice = this.slice.toJSON()),
        this.structure && (e.structure = !0),
        e
    }
    static fromJSON(e, t) {
        if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
            throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
        return new Y(t.from,t.to,t.gapFrom,t.gapTo,S.fromJSON(e, t.slice),t.insert,!!t.structure)
    }
}
q.jsonID("replaceAround", Y);
function In(i, e, t) {
    let n = i.resolve(e)
      , r = t - e
      , s = n.depth;
    for (; r > 0 && s > 0 && n.indexAfter(s) == n.node(s).childCount; )
        s--,
        r--;
    if (r > 0) {
        let o = n.node(s).maybeChild(n.indexAfter(s));
        for (; r > 0; ) {
            if (!o || o.isLeaf)
                return !0;
            o = o.firstChild,
            r--
        }
    }
    return !1
}
function ba(i, e, t, n) {
    let r = [], s = [], o, l;
    i.doc.nodesBetween(e, t, (a, c, h) => {
        if (!a.isInline)
            return;
        let d = a.marks;
        if (!n.isInSet(d) && h.type.allowsMarkType(n.type)) {
            let f = Math.max(c, e)
              , p = Math.min(c + a.nodeSize, t)
              , u = n.addToSet(d);
            for (let m = 0; m < d.length; m++)
                d[m].isInSet(u) || (o && o.to == f && o.mark.eq(d[m]) ? o.to = p : r.push(o = new le(f,p,d[m])));
            l && l.to == f ? l.to = p : s.push(l = new ke(f,p,n))
        }
    }
    ),
    r.forEach(a => i.step(a)),
    s.forEach(a => i.step(a))
}
function xa(i, e, t, n) {
    let r = []
      , s = 0;
    i.doc.nodesBetween(e, t, (o, l) => {
        if (!o.isInline)
            return;
        s++;
        let a = null;
        if (n instanceof nn) {
            let c = o.marks, h;
            for (; h = n.isInSet(c); )
                (a || (a = [])).push(h),
                c = h.removeFromSet(c)
        } else
            n ? n.isInSet(o.marks) && (a = [n]) : a = o.marks;
        if (a && a.length) {
            let c = Math.min(l + o.nodeSize, t);
            for (let h = 0; h < a.length; h++) {
                let d = a[h], f;
                for (let p = 0; p < r.length; p++) {
                    let u = r[p];
                    u.step == s - 1 && d.eq(r[p].style) && (f = u)
                }
                f ? (f.to = c,
                f.step = s) : r.push({
                    style: d,
                    from: Math.max(l, e),
                    to: c,
                    step: s
                })
            }
        }
    }
    ),
    r.forEach(o => i.step(new le(o.from,o.to,o.style)))
}
function ds(i, e, t, n=t.contentMatch, r=!0) {
    let s = i.doc.nodeAt(e)
      , o = []
      , l = e + 1;
    for (let a = 0; a < s.childCount; a++) {
        let c = s.child(a)
          , h = l + c.nodeSize
          , d = n.matchType(c.type);
        if (!d)
            o.push(new L(l,h,S.empty));
        else {
            n = d;
            for (let f = 0; f < c.marks.length; f++)
                t.allowsMarkType(c.marks[f].type) || i.step(new le(l,h,c.marks[f]));
            if (r && c.isText && t.whitespace != "pre") {
                let f, p = /\r?\n|\r/g, u;
                for (; f = p.exec(c.text); )
                    u || (u = new S(y.from(t.schema.text(" ", t.allowedMarks(c.marks))),0,0)),
                    o.push(new L(l + f.index,l + f.index + f[0].length,u))
            }
        }
        l = h
    }
    if (!n.validEnd) {
        let a = n.fillBefore(y.empty, !0);
        i.replace(l, l, new S(a,0,0))
    }
    for (let a = o.length - 1; a >= 0; a--)
        i.step(o[a])
}
function Ca(i, e, t) {
    return (e == 0 || i.canReplace(e, i.childCount)) && (t == i.childCount || i.canReplace(0, t))
}
function $n(i) {
    let t = i.parent.content.cutByIndex(i.startIndex, i.endIndex);
    for (let n = i.depth; ; --n) {
        let r = i.$from.node(n)
          , s = i.$from.index(n)
          , o = i.$to.indexAfter(n);
        if (n < i.depth && r.canReplace(s, o, t))
            return n;
        if (n == 0 || r.type.spec.isolating || !Ca(r, s, o))
            break
    }
    return null
}
function Ta(i, e, t) {
    let {$from: n, $to: r, depth: s} = e
      , o = n.before(s + 1)
      , l = r.after(s + 1)
      , a = o
      , c = l
      , h = y.empty
      , d = 0;
    for (let u = s, m = !1; u > t; u--)
        m || n.index(u) > 0 ? (m = !0,
        h = y.from(n.node(u).copy(h)),
        d++) : a--;
    let f = y.empty
      , p = 0;
    for (let u = s, m = !1; u > t; u--)
        m || r.after(u + 1) < r.end(u) ? (m = !0,
        f = y.from(r.node(u).copy(f)),
        p++) : c++;
    i.step(new Y(a,c,o,l,new S(h.append(f),d,p),h.size - d,!0))
}
function Ma(i, e, t=null, n=i) {
    let r = wa(i, e)
      , s = r && Na(n, e);
    return s ? r.map(Ui).concat({
        type: e,
        attrs: t
    }).concat(s.map(Ui)) : null
}
function Ui(i) {
    return {
        type: i,
        attrs: null
    }
}
function wa(i, e) {
    let {parent: t, startIndex: n, endIndex: r} = i
      , s = t.contentMatchAt(n).findWrapping(e);
    if (!s)
        return null;
    let o = s.length ? s[0] : e;
    return t.canReplaceWith(n, r, o) ? s : null
}
function Na(i, e) {
    let {parent: t, startIndex: n, endIndex: r} = i
      , s = t.child(n)
      , o = e.contentMatch.findWrapping(s.type);
    if (!o)
        return null;
    let a = (o.length ? o[o.length - 1] : e).contentMatch;
    for (let c = n; a && c < r; c++)
        a = a.matchType(t.child(c).type);
    return !a || !a.validEnd ? null : o
}
function Oa(i, e, t) {
    let n = y.empty;
    for (let o = t.length - 1; o >= 0; o--) {
        if (n.size) {
            let l = t[o].type.contentMatch.matchFragment(n);
            if (!l || !l.validEnd)
                throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper")
        }
        n = y.from(t[o].type.create(t[o].attrs, n))
    }
    let r = e.start
      , s = e.end;
    i.step(new Y(r,s,r,s,new S(n,0,0),t.length,!0))
}
function Ea(i, e, t, n, r) {
    if (!n.isTextblock)
        throw new RangeError("Type given to setBlockType should be a textblock");
    let s = i.steps.length;
    i.doc.nodesBetween(e, t, (o, l) => {
        if (o.isTextblock && !o.hasMarkup(n, r) && Ia(i.doc, i.mapping.slice(s).map(l), n)) {
            let a = null;
            if (n.schema.linebreakReplacement) {
                let f = n.whitespace == "pre"
                  , p = !!n.contentMatch.matchType(n.schema.linebreakReplacement);
                f && !p ? a = !1 : !f && p && (a = !0)
            }
            a === !1 && Aa(i, o, l, s),
            ds(i, i.mapping.slice(s).map(l, 1), n, void 0, a === null);
            let c = i.mapping.slice(s)
              , h = c.map(l, 1)
              , d = c.map(l + o.nodeSize, 1);
            return i.step(new Y(h,d,h + 1,d - 1,new S(y.from(n.create(r, null, o.marks)),0,0),1,!0)),
            a === !0 && Da(i, o, l, s),
            !1
        }
    }
    )
}
function Da(i, e, t, n) {
    e.forEach( (r, s) => {
        if (r.isText) {
            let o, l = /\r?\n|\r/g;
            for (; o = l.exec(r.text); ) {
                let a = i.mapping.slice(n).map(t + 1 + s + o.index);
                i.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create())
            }
        }
    }
    )
}
function Aa(i, e, t, n) {
    e.forEach( (r, s) => {
        if (r.type == r.type.schema.linebreakReplacement) {
            let o = i.mapping.slice(n).map(t + 1 + s);
            i.replaceWith(o, o + 1, e.type.schema.text(`
`))
        }
    }
    )
}
function Ia(i, e, t) {
    let n = i.resolve(e)
      , r = n.index();
    return n.parent.canReplaceWith(r, r + 1, t)
}
function Ra(i, e, t, n, r) {
    let s = i.doc.nodeAt(e);
    if (!s)
        throw new RangeError("No node at given position");
    t || (t = s.type);
    let o = t.create(n, null, r || s.marks);
    if (s.isLeaf)
        return i.replaceWith(e, e + s.nodeSize, o);
    if (!t.validContent(s.content))
        throw new RangeError("Invalid content for node type " + t.name);
    i.step(new Y(e,e + s.nodeSize,e + 1,e + s.nodeSize - 1,new S(y.from(o),0,0),1,!0))
}
function Wt(i, e, t=1, n) {
    let r = i.resolve(e)
      , s = r.depth - t
      , o = n && n[n.length - 1] || r.parent;
    if (s < 0 || r.parent.type.spec.isolating || !r.parent.canReplace(r.index(), r.parent.childCount) || !o.type.validContent(r.parent.content.cutByIndex(r.index(), r.parent.childCount)))
        return !1;
    for (let c = r.depth - 1, h = t - 2; c > s; c--,
    h--) {
        let d = r.node(c)
          , f = r.index(c);
        if (d.type.spec.isolating)
            return !1;
        let p = d.content.cutByIndex(f, d.childCount)
          , u = n && n[h + 1];
        u && (p = p.replaceChild(0, u.type.create(u.attrs)));
        let m = n && n[h] || d;
        if (!d.canReplace(f + 1, d.childCount) || !m.type.validContent(p))
            return !1
    }
    let l = r.indexAfter(s)
      , a = n && n[0];
    return r.node(s).canReplaceWith(l, l, a ? a.type : r.node(s + 1).type)
}
function va(i, e, t=1, n) {
    let r = i.doc.resolve(e)
      , s = y.empty
      , o = y.empty;
    for (let l = r.depth, a = r.depth - t, c = t - 1; l > a; l--,
    c--) {
        s = y.from(r.node(l).copy(s));
        let h = n && n[c];
        o = y.from(h ? h.type.create(h.attrs, o) : r.node(l).copy(o))
    }
    i.step(new L(e,e,new S(s.append(o),t,t),!0))
}
function fs(i, e) {
    let t = i.resolve(e)
      , n = t.index();
    return Pa(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(n, n + 1)
}
function Pa(i, e) {
    return !!(i && e && !i.isLeaf && i.canAppend(e))
}
function Fa(i, e, t) {
    let n = new L(e - t,e + t,S.empty,!0);
    i.step(n)
}
function za(i, e, t) {
    let n = i.resolve(e);
    if (n.parent.canReplaceWith(n.index(), n.index(), t))
        return e;
    if (n.parentOffset == 0)
        for (let r = n.depth - 1; r >= 0; r--) {
            let s = n.index(r);
            if (n.node(r).canReplaceWith(s, s, t))
                return n.before(r + 1);
            if (s > 0)
                return null
        }
    if (n.parentOffset == n.parent.content.size)
        for (let r = n.depth - 1; r >= 0; r--) {
            let s = n.indexAfter(r);
            if (n.node(r).canReplaceWith(s, s, t))
                return n.after(r + 1);
            if (s < n.node(r).childCount)
                return null
        }
    return null
}
function Ba(i, e, t) {
    let n = i.resolve(e);
    if (!t.content.size)
        return e;
    let r = t.content;
    for (let s = 0; s < t.openStart; s++)
        r = r.firstChild.content;
    for (let s = 1; s <= (t.openStart == 0 && t.size ? 2 : 1); s++)
        for (let o = n.depth; o >= 0; o--) {
            let l = o == n.depth ? 0 : n.pos <= (n.start(o + 1) + n.end(o + 1)) / 2 ? -1 : 1
              , a = n.index(o) + (l > 0 ? 1 : 0)
              , c = n.node(o)
              , h = !1;
            if (s == 1)
                h = c.canReplace(a, a, r);
            else {
                let d = c.contentMatchAt(a).findWrapping(r.firstChild.type);
                h = d && c.canReplaceWith(a, a, d[0])
            }
            if (h)
                return l == 0 ? n.pos : l < 0 ? n.before(o + 1) : n.after(o + 1)
        }
    return null
}
function Gn(i, e, t=e, n=S.empty) {
    if (e == t && !n.size)
        return null;
    let r = i.resolve(e)
      , s = i.resolve(t);
    return us(r, s, n) ? new L(e,t,n) : new La(r,s,n).fit()
}
function us(i, e, t) {
    return !t.openStart && !t.openEnd && i.start() == e.start() && i.parent.canReplace(i.index(), e.index(), t.content)
}
class La {
    constructor(e, t, n) {
        this.$from = e,
        this.$to = t,
        this.unplaced = n,
        this.frontier = [],
        this.placed = y.empty;
        for (let r = 0; r <= e.depth; r++) {
            let s = e.node(r);
            this.frontier.push({
                type: s.type,
                match: s.contentMatchAt(e.indexAfter(r))
            })
        }
        for (let r = e.depth; r > 0; r--)
            this.placed = y.from(e.node(r).copy(this.placed))
    }
    get depth() {
        return this.frontier.length - 1
    }
    fit() {
        for (; this.unplaced.size; ) {
            let c = this.findFittable();
            c ? this.placeNodes(c) : this.openMore() || this.dropNode()
        }
        let e = this.mustMoveInline()
          , t = this.placed.size - this.depth - this.$from.depth
          , n = this.$from
          , r = this.close(e < 0 ? this.$to : n.doc.resolve(e));
        if (!r)
            return null;
        let s = this.placed
          , o = n.depth
          , l = r.depth;
        for (; o && l && s.childCount == 1; )
            s = s.firstChild.content,
            o--,
            l--;
        let a = new S(s,o,l);
        return e > -1 ? new Y(n.pos,e,this.$to.pos,this.$to.end(),a,t) : a.size || n.pos != this.$to.pos ? new L(n.pos,r.pos,a) : null
    }
    findFittable() {
        let e = this.unplaced.openStart;
        for (let t = this.unplaced.content, n = 0, r = this.unplaced.openEnd; n < e; n++) {
            let s = t.firstChild;
            if (t.childCount > 1 && (r = 0),
            s.type.spec.isolating && r <= n) {
                e = n;
                break
            }
            t = s.content
        }
        for (let t = 1; t <= 2; t++)
            for (let n = t == 1 ? e : this.unplaced.openStart; n >= 0; n--) {
                let r, s = null;
                n ? (s = yn(this.unplaced.content, n - 1).firstChild,
                r = s.content) : r = this.unplaced.content;
                let o = r.firstChild;
                for (let l = this.depth; l >= 0; l--) {
                    let {type: a, match: c} = this.frontier[l], h, d = null;
                    if (t == 1 && (o ? c.matchType(o.type) || (d = c.fillBefore(y.from(o), !1)) : s && a.compatibleContent(s.type)))
                        return {
                            sliceDepth: n,
                            frontierDepth: l,
                            parent: s,
                            inject: d
                        };
                    if (t == 2 && o && (h = c.findWrapping(o.type)))
                        return {
                            sliceDepth: n,
                            frontierDepth: l,
                            parent: s,
                            wrap: h
                        };
                    if (s && c.matchType(s.type))
                        break
                }
            }
    }
    openMore() {
        let {content: e, openStart: t, openEnd: n} = this.unplaced
          , r = yn(e, t);
        return !r.childCount || r.firstChild.isLeaf ? !1 : (this.unplaced = new S(e,t + 1,Math.max(n, r.size + t >= e.size - n ? t + 1 : 0)),
        !0)
    }
    dropNode() {
        let {content: e, openStart: t, openEnd: n} = this.unplaced
          , r = yn(e, t);
        if (r.childCount <= 1 && t > 0) {
            let s = e.size - t <= t + r.size;
            this.unplaced = new S(ft(e, t - 1, 1),t - 1,s ? t - 1 : n)
        } else
            this.unplaced = new S(ft(e, t, 1),t,n)
    }
    placeNodes({sliceDepth: e, frontierDepth: t, parent: n, inject: r, wrap: s}) {
        for (; this.depth > t; )
            this.closeFrontierNode();
        if (s)
            for (let m = 0; m < s.length; m++)
                this.openFrontierNode(s[m]);
        let o = this.unplaced
          , l = n ? n.content : o.content
          , a = o.openStart - e
          , c = 0
          , h = []
          , {match: d, type: f} = this.frontier[t];
        if (r) {
            for (let m = 0; m < r.childCount; m++)
                h.push(r.child(m));
            d = d.matchFragment(r)
        }
        let p = l.size + e - (o.content.size - o.openEnd);
        for (; c < l.childCount; ) {
            let m = l.child(c)
              , g = d.matchType(m.type);
            if (!g)
                break;
            c++,
            (c > 1 || a == 0 || m.content.size) && (d = g,
            h.push(ps(m.mark(f.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? p : -1)))
        }
        let u = c == l.childCount;
        u || (p = -1),
        this.placed = ut(this.placed, t, y.from(h)),
        this.frontier[t].match = d,
        u && p < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
        for (let m = 0, g = l; m < p; m++) {
            let k = g.lastChild;
            this.frontier.push({
                type: k.type,
                match: k.contentMatchAt(k.childCount)
            }),
            g = k.content
        }
        this.unplaced = u ? e == 0 ? S.empty : new S(ft(o.content, e - 1, 1),e - 1,p < 0 ? o.openEnd : e - 1) : new S(ft(o.content, e, c),o.openStart,o.openEnd)
    }
    mustMoveInline() {
        if (!this.$to.parent.isTextblock)
            return -1;
        let e = this.frontier[this.depth], t;
        if (!e.type.isTextblock || !Sn(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
            return -1;
        let {depth: n} = this.$to
          , r = this.$to.after(n);
        for (; n > 1 && r == this.$to.end(--n); )
            ++r;
        return r
    }
    findCloseLevel(e) {
        e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
            let {match: n, type: r} = this.frontier[t]
              , s = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1))
              , o = Sn(e, t, r, n, s);
            if (o) {
                for (let l = t - 1; l >= 0; l--) {
                    let {match: a, type: c} = this.frontier[l]
                      , h = Sn(e, l, c, a, !0);
                    if (!h || h.childCount)
                        continue e
                }
                return {
                    depth: t,
                    fit: o,
                    move: s ? e.doc.resolve(e.after(t + 1)) : e
                }
            }
        }
    }
    close(e) {
        let t = this.findCloseLevel(e);
        if (!t)
            return null;
        for (; this.depth > t.depth; )
            this.closeFrontierNode();
        t.fit.childCount && (this.placed = ut(this.placed, t.depth, t.fit)),
        e = t.move;
        for (let n = t.depth + 1; n <= e.depth; n++) {
            let r = e.node(n)
              , s = r.type.contentMatch.fillBefore(r.content, !0, e.index(n));
            this.openFrontierNode(r.type, r.attrs, s)
        }
        return e
    }
    openFrontierNode(e, t=null, n) {
        let r = this.frontier[this.depth];
        r.match = r.match.matchType(e),
        this.placed = ut(this.placed, this.depth, y.from(e.create(t, n))),
        this.frontier.push({
            type: e,
            match: e.contentMatch
        })
    }
    closeFrontierNode() {
        let t = this.frontier.pop().match.fillBefore(y.empty, !0);
        t.childCount && (this.placed = ut(this.placed, this.frontier.length, t))
    }
}
function ft(i, e, t) {
    return e == 0 ? i.cutByIndex(t, i.childCount) : i.replaceChild(0, i.firstChild.copy(ft(i.firstChild.content, e - 1, t)))
}
function ut(i, e, t) {
    return e == 0 ? i.append(t) : i.replaceChild(i.childCount - 1, i.lastChild.copy(ut(i.lastChild.content, e - 1, t)))
}
function yn(i, e) {
    for (let t = 0; t < e; t++)
        i = i.firstChild.content;
    return i
}
function ps(i, e, t) {
    if (e <= 0)
        return i;
    let n = i.content;
    return e > 1 && (n = n.replaceChild(0, ps(n.firstChild, e - 1, n.childCount == 1 ? t - 1 : 0))),
    e > 0 && (n = i.type.contentMatch.fillBefore(n).append(n),
    t <= 0 && (n = n.append(i.type.contentMatch.matchFragment(n).fillBefore(y.empty, !0)))),
    i.copy(n)
}
function Sn(i, e, t, n, r) {
    let s = i.node(e)
      , o = r ? i.indexAfter(e) : i.index(e);
    if (o == s.childCount && !t.compatibleContent(s.type))
        return null;
    let l = n.fillBefore(s.content, !0, o);
    return l && !Va(t, s.content, o) ? l : null
}
function Va(i, e, t) {
    for (let n = t; n < e.childCount; n++)
        if (!i.allowsMarks(e.child(n).marks))
            return !0;
    return !1
}
function qa(i) {
    return i.spec.defining || i.spec.definingForContent
}
function _a(i, e, t, n) {
    if (!n.size)
        return i.deleteRange(e, t);
    let r = i.doc.resolve(e)
      , s = i.doc.resolve(t);
    if (us(r, s, n))
        return i.step(new L(e,t,n));
    let o = gs(r, i.doc.resolve(t));
    o[o.length - 1] == 0 && o.pop();
    let l = -(r.depth + 1);
    o.unshift(l);
    for (let f = r.depth, p = r.pos - 1; f > 0; f--,
    p--) {
        let u = r.node(f).type.spec;
        if (u.defining || u.definingAsContext || u.isolating)
            break;
        o.indexOf(f) > -1 ? l = f : r.before(f) == p && o.splice(1, 0, -f)
    }
    let a = o.indexOf(l)
      , c = []
      , h = n.openStart;
    for (let f = n.content, p = 0; ; p++) {
        let u = f.firstChild;
        if (c.push(u),
        p == n.openStart)
            break;
        f = u.content
    }
    for (let f = h - 1; f >= 0; f--) {
        let p = c[f]
          , u = qa(p.type);
        if (u && !p.sameMarkup(r.node(Math.abs(l) - 1)))
            h = f;
        else if (u || !p.type.isTextblock)
            break
    }
    for (let f = n.openStart; f >= 0; f--) {
        let p = (f + h + 1) % (n.openStart + 1)
          , u = c[p];
        if (u)
            for (let m = 0; m < o.length; m++) {
                let g = o[(m + a) % o.length]
                  , k = !0;
                g < 0 && (k = !1,
                g = -g);
                let w = r.node(g - 1)
                  , v = r.index(g - 1);
                if (w.canReplaceWith(v, v, u.type, u.marks))
                    return i.replace(r.before(g), k ? s.after(g) : t, new S(ms(n.content, 0, n.openStart, p),p,n.openEnd))
            }
    }
    let d = i.steps.length;
    for (let f = o.length - 1; f >= 0 && (i.replace(e, t, n),
    !(i.steps.length > d)); f--) {
        let p = o[f];
        p < 0 || (e = r.before(p),
        t = s.after(p))
    }
}
function ms(i, e, t, n, r) {
    if (e < t) {
        let s = i.firstChild;
        i = i.replaceChild(0, s.copy(ms(s.content, e + 1, t, n, s)))
    }
    if (e > n) {
        let s = r.contentMatchAt(0)
          , o = s.fillBefore(i).append(i);
        i = o.append(s.matchFragment(o).fillBefore(y.empty, !0))
    }
    return i
}
function Ka(i, e, t, n) {
    if (!n.isInline && e == t && i.doc.resolve(e).parent.content.size) {
        let r = za(i.doc, e, n.type);
        r != null && (e = t = r)
    }
    i.replaceRange(e, t, new S(y.from(n),0,0))
}
function Ja(i, e, t) {
    let n = i.doc.resolve(e)
      , r = i.doc.resolve(t)
      , s = gs(n, r);
    for (let o = 0; o < s.length; o++) {
        let l = s[o]
          , a = o == s.length - 1;
        if (a && l == 0 || n.node(l).type.contentMatch.validEnd)
            return i.delete(n.start(l), r.end(l));
        if (l > 0 && (a || n.node(l - 1).canReplace(n.index(l - 1), r.indexAfter(l - 1))))
            return i.delete(n.before(l), r.after(l))
    }
    for (let o = 1; o <= n.depth && o <= r.depth; o++)
        if (e - n.start(o) == n.depth - o && t > n.end(o) && r.end(o) - t != r.depth - o)
            return i.delete(n.before(o), t);
    i.delete(e, t)
}
function gs(i, e) {
    let t = []
      , n = Math.min(i.depth, e.depth);
    for (let r = n; r >= 0; r--) {
        let s = i.start(r);
        if (s < i.pos - (i.depth - r) || e.end(r) > e.pos + (e.depth - r) || i.node(r).type.spec.isolating || e.node(r).type.spec.isolating)
            break;
        (s == e.start(r) || r == i.depth && r == e.depth && i.parent.inlineContent && e.parent.inlineContent && r && e.start(r - 1) == s - 1) && t.push(r)
    }
    return t
}
class Qe extends q {
    constructor(e, t, n) {
        super(),
        this.pos = e,
        this.attr = t,
        this.value = n
    }
    apply(e) {
        let t = e.nodeAt(this.pos);
        if (!t)
            return I.fail("No node at attribute step's position");
        let n = Object.create(null);
        for (let s in t.attrs)
            n[s] = t.attrs[s];
        n[this.attr] = this.value;
        let r = t.type.create(n, null, t.marks);
        return I.fromReplace(e, this.pos, this.pos + 1, new S(y.from(r),0,t.isLeaf ? 0 : 1))
    }
    getMap() {
        return j.empty
    }
    invert(e) {
        return new Qe(this.pos,this.attr,e.nodeAt(this.pos).attrs[this.attr])
    }
    map(e) {
        let t = e.mapResult(this.pos, 1);
        return t.deletedAfter ? null : new Qe(t.pos,this.attr,this.value)
    }
    toJSON() {
        return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value
        }
    }
    static fromJSON(e, t) {
        if (typeof t.pos != "number" || typeof t.attr != "string")
            throw new RangeError("Invalid input for AttrStep.fromJSON");
        return new Qe(t.pos,t.attr,t.value)
    }
}
q.jsonID("attr", Qe);
class wt extends q {
    constructor(e, t) {
        super(),
        this.attr = e,
        this.value = t
    }
    apply(e) {
        let t = Object.create(null);
        for (let r in e.attrs)
            t[r] = e.attrs[r];
        t[this.attr] = this.value;
        let n = e.type.create(t, e.content, e.marks);
        return I.ok(n)
    }
    getMap() {
        return j.empty
    }
    invert(e) {
        return new wt(this.attr,e.attrs[this.attr])
    }
    map(e) {
        return this
    }
    toJSON() {
        return {
            stepType: "docAttr",
            attr: this.attr,
            value: this.value
        }
    }
    static fromJSON(e, t) {
        if (typeof t.attr != "string")
            throw new RangeError("Invalid input for DocAttrStep.fromJSON");
        return new wt(t.attr,t.value)
    }
}
q.jsonID("docAttr", wt);
let tt = class extends Error {
}
;
tt = function i(e) {
    let t = Error.call(this, e);
    return t.__proto__ = i.prototype,
    t
}
;
tt.prototype = Object.create(Error.prototype);
tt.prototype.constructor = tt;
tt.prototype.name = "TransformError";
class Wa {
    constructor(e) {
        this.doc = e,
        this.steps = [],
        this.docs = [],
        this.mapping = new bt
    }
    get before() {
        return this.docs.length ? this.docs[0] : this.doc
    }
    step(e) {
        let t = this.maybeStep(e);
        if (t.failed)
            throw new tt(t.failed);
        return this
    }
    maybeStep(e) {
        let t = e.apply(this.doc);
        return t.failed || this.addStep(e, t.doc),
        t
    }
    get docChanged() {
        return this.steps.length > 0
    }
    addStep(e, t) {
        this.docs.push(this.doc),
        this.steps.push(e),
        this.mapping.appendMap(e.getMap()),
        this.doc = t
    }
    replace(e, t=e, n=S.empty) {
        let r = Gn(this.doc, e, t, n);
        return r && this.step(r),
        this
    }
    replaceWith(e, t, n) {
        return this.replace(e, t, new S(y.from(n),0,0))
    }
    delete(e, t) {
        return this.replace(e, t, S.empty)
    }
    insert(e, t) {
        return this.replaceWith(e, e, t)
    }
    replaceRange(e, t, n) {
        return _a(this, e, t, n),
        this
    }
    replaceRangeWith(e, t, n) {
        return Ka(this, e, t, n),
        this
    }
    deleteRange(e, t) {
        return Ja(this, e, t),
        this
    }
    lift(e, t) {
        return Ta(this, e, t),
        this
    }
    join(e, t=1) {
        return Fa(this, e, t),
        this
    }
    wrap(e, t) {
        return Oa(this, e, t),
        this
    }
    setBlockType(e, t=e, n, r=null) {
        return Ea(this, e, t, n, r),
        this
    }
    setNodeMarkup(e, t, n=null, r) {
        return Ra(this, e, t, n, r),
        this
    }
    setNodeAttribute(e, t, n) {
        return this.step(new Qe(e,t,n)),
        this
    }
    setDocAttribute(e, t) {
        return this.step(new wt(e,t)),
        this
    }
    addNodeMark(e, t) {
        return this.step(new be(e,t)),
        this
    }
    removeNodeMark(e, t) {
        if (!(t instanceof M)) {
            let n = this.doc.nodeAt(e);
            if (!n)
                throw new RangeError("No node at position " + e);
            if (t = t.isInSet(n.marks),
            !t)
                return this
        }
        return this.step(new et(e,t)),
        this
    }
    split(e, t=1, n) {
        return va(this, e, t, n),
        this
    }
    addMark(e, t, n) {
        return ba(this, e, t, n),
        this
    }
    removeMark(e, t, n) {
        return xa(this, e, t, n),
        this
    }
    clearIncompatible(e, t, n) {
        return ds(this, e, t, n),
        this
    }
}
const kn = Object.create(null);
class C {
    constructor(e, t, n) {
        this.$anchor = e,
        this.$head = t,
        this.ranges = n || [new Ua(e.min(t),e.max(t))]
    }
    get anchor() {
        return this.$anchor.pos
    }
    get head() {
        return this.$head.pos
    }
    get from() {
        return this.$from.pos
    }
    get to() {
        return this.$to.pos
    }
    get $from() {
        return this.ranges[0].$from
    }
    get $to() {
        return this.ranges[0].$to
    }
    get empty() {
        let e = this.ranges;
        for (let t = 0; t < e.length; t++)
            if (e[t].$from.pos != e[t].$to.pos)
                return !1;
        return !0
    }
    content() {
        return this.$from.doc.slice(this.from, this.to, !0)
    }
    replace(e, t=S.empty) {
        let n = t.content.lastChild
          , r = null;
        for (let l = 0; l < t.openEnd; l++)
            r = n,
            n = n.lastChild;
        let s = e.steps.length
          , o = this.ranges;
        for (let l = 0; l < o.length; l++) {
            let {$from: a, $to: c} = o[l]
              , h = e.mapping.slice(s);
            e.replaceRange(h.map(a.pos), h.map(c.pos), l ? S.empty : t),
            l == 0 && Gi(e, s, (n ? n.isInline : r && r.isTextblock) ? -1 : 1)
        }
    }
    replaceWith(e, t) {
        let n = e.steps.length
          , r = this.ranges;
        for (let s = 0; s < r.length; s++) {
            let {$from: o, $to: l} = r[s]
              , a = e.mapping.slice(n)
              , c = a.map(o.pos)
              , h = a.map(l.pos);
            s ? e.deleteRange(c, h) : (e.replaceRangeWith(c, h, t),
            Gi(e, n, t.isInline ? -1 : 1))
        }
    }
    static findFrom(e, t, n=!1) {
        let r = e.parent.inlineContent ? new T(e) : Ye(e.node(0), e.parent, e.pos, e.index(), t, n);
        if (r)
            return r;
        for (let s = e.depth - 1; s >= 0; s--) {
            let o = t < 0 ? Ye(e.node(0), e.node(s), e.before(s + 1), e.index(s), t, n) : Ye(e.node(0), e.node(s), e.after(s + 1), e.index(s) + 1, t, n);
            if (o)
                return o
        }
        return null
    }
    static near(e, t=1) {
        return this.findFrom(e, t) || this.findFrom(e, -t) || new X(e.node(0))
    }
    static atStart(e) {
        return Ye(e, e, 0, 0, 1) || new X(e)
    }
    static atEnd(e) {
        return Ye(e, e, e.content.size, e.childCount, -1) || new X(e)
    }
    static fromJSON(e, t) {
        if (!t || !t.type)
            throw new RangeError("Invalid input for Selection.fromJSON");
        let n = kn[t.type];
        if (!n)
            throw new RangeError(`No selection type ${t.type} defined`);
        return n.fromJSON(e, t)
    }
    static jsonID(e, t) {
        if (e in kn)
            throw new RangeError("Duplicate use of selection JSON ID " + e);
        return kn[e] = t,
        t.prototype.jsonID = e,
        t
    }
    getBookmark() {
        return T.between(this.$anchor, this.$head).getBookmark()
    }
}
C.prototype.visible = !0;
class Ua {
    constructor(e, t) {
        this.$from = e,
        this.$to = t
    }
}
let Hi = !1;
function $i(i) {
    !Hi && !i.parent.inlineContent && (Hi = !0,
    console.warn("TextSelection endpoint not pointing into a node with inline content (" + i.parent.type.name + ")"))
}
class T extends C {
    constructor(e, t=e) {
        $i(e),
        $i(t),
        super(e, t)
    }
    get $cursor() {
        return this.$anchor.pos == this.$head.pos ? this.$head : null
    }
    map(e, t) {
        let n = e.resolve(t.map(this.head));
        if (!n.parent.inlineContent)
            return C.near(n);
        let r = e.resolve(t.map(this.anchor));
        return new T(r.parent.inlineContent ? r : n,n)
    }
    replace(e, t=S.empty) {
        if (super.replace(e, t),
        t == S.empty) {
            let n = this.$from.marksAcross(this.$to);
            n && e.ensureMarks(n)
        }
    }
    eq(e) {
        return e instanceof T && e.anchor == this.anchor && e.head == this.head
    }
    getBookmark() {
        return new rn(this.anchor,this.head)
    }
    toJSON() {
        return {
            type: "text",
            anchor: this.anchor,
            head: this.head
        }
    }
    static fromJSON(e, t) {
        if (typeof t.anchor != "number" || typeof t.head != "number")
            throw new RangeError("Invalid input for TextSelection.fromJSON");
        return new T(e.resolve(t.anchor),e.resolve(t.head))
    }
    static create(e, t, n=t) {
        let r = e.resolve(t);
        return new this(r,n == t ? r : e.resolve(n))
    }
    static between(e, t, n) {
        let r = e.pos - t.pos;
        if ((!n || r) && (n = r >= 0 ? 1 : -1),
        !t.parent.inlineContent) {
            let s = C.findFrom(t, n, !0) || C.findFrom(t, -n, !0);
            if (s)
                t = s.$head;
            else
                return C.near(t, n)
        }
        return e.parent.inlineContent || (r == 0 ? e = t : (e = (C.findFrom(e, -n, !0) || C.findFrom(e, n, !0)).$anchor,
        e.pos < t.pos != r < 0 && (e = t))),
        new T(e,t)
    }
}
C.jsonID("text", T);
class rn {
    constructor(e, t) {
        this.anchor = e,
        this.head = t
    }
    map(e) {
        return new rn(e.map(this.anchor),e.map(this.head))
    }
    resolve(e) {
        return T.between(e.resolve(this.anchor), e.resolve(this.head))
    }
}
class b extends C {
    constructor(e) {
        let t = e.nodeAfter
          , n = e.node(0).resolve(e.pos + t.nodeSize);
        super(e, n),
        this.node = t
    }
    map(e, t) {
        let {deleted: n, pos: r} = t.mapResult(this.anchor)
          , s = e.resolve(r);
        return n ? C.near(s) : new b(s)
    }
    content() {
        return new S(y.from(this.node),0,0)
    }
    eq(e) {
        return e instanceof b && e.anchor == this.anchor
    }
    toJSON() {
        return {
            type: "node",
            anchor: this.anchor
        }
    }
    getBookmark() {
        return new jn(this.anchor)
    }
    static fromJSON(e, t) {
        if (typeof t.anchor != "number")
            throw new RangeError("Invalid input for NodeSelection.fromJSON");
        return new b(e.resolve(t.anchor))
    }
    static create(e, t) {
        return new b(e.resolve(t))
    }
    static isSelectable(e) {
        return !e.isText && e.type.spec.selectable !== !1
    }
}
b.prototype.visible = !1;
C.jsonID("node", b);
class jn {
    constructor(e) {
        this.anchor = e
    }
    map(e) {
        let {deleted: t, pos: n} = e.mapResult(this.anchor);
        return t ? new rn(n,n) : new jn(n)
    }
    resolve(e) {
        let t = e.resolve(this.anchor)
          , n = t.nodeAfter;
        return n && b.isSelectable(n) ? new b(t) : C.near(t)
    }
}
class X extends C {
    constructor(e) {
        super(e.resolve(0), e.resolve(e.content.size))
    }
    replace(e, t=S.empty) {
        if (t == S.empty) {
            e.delete(0, e.doc.content.size);
            let n = C.atStart(e.doc);
            n.eq(e.selection) || e.setSelection(n)
        } else
            super.replace(e, t)
    }
    toJSON() {
        return {
            type: "all"
        }
    }
    static fromJSON(e) {
        return new X(e)
    }
    map(e) {
        return new X(e)
    }
    eq(e) {
        return e instanceof X
    }
    getBookmark() {
        return Ha
    }
}
C.jsonID("all", X);
const Ha = {
    map() {
        return this
    },
    resolve(i) {
        return new X(i)
    }
};
function Ye(i, e, t, n, r, s=!1) {
    if (e.inlineContent)
        return T.create(i, t);
    for (let o = n - (r > 0 ? 0 : 1); r > 0 ? o < e.childCount : o >= 0; o += r) {
        let l = e.child(o);
        if (l.isAtom) {
            if (!s && b.isSelectable(l))
                return b.create(i, t - (r < 0 ? l.nodeSize : 0))
        } else {
            let a = Ye(i, l, t + r, r < 0 ? l.childCount : 0, r, s);
            if (a)
                return a
        }
        t += l.nodeSize * r
    }
    return null
}
function Gi(i, e, t) {
    let n = i.steps.length - 1;
    if (n < e)
        return;
    let r = i.steps[n];
    if (!(r instanceof L || r instanceof Y))
        return;
    let s = i.mapping.maps[n], o;
    s.forEach( (l, a, c, h) => {
        o == null && (o = h)
    }
    ),
    i.setSelection(C.near(i.doc.resolve(o), t))
}
const ji = 1
  , Yi = 2
  , Xi = 4;
class $a extends Wa {
    constructor(e) {
        super(e.doc),
        this.curSelectionFor = 0,
        this.updated = 0,
        this.meta = Object.create(null),
        this.time = Date.now(),
        this.curSelection = e.selection,
        this.storedMarks = e.storedMarks
    }
    get selection() {
        return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)),
        this.curSelectionFor = this.steps.length),
        this.curSelection
    }
    setSelection(e) {
        if (e.$from.doc != this.doc)
            throw new RangeError("Selection passed to setSelection must point at the current document");
        return this.curSelection = e,
        this.curSelectionFor = this.steps.length,
        this.updated = (this.updated | ji) & -3,
        this.storedMarks = null,
        this
    }
    get selectionSet() {
        return (this.updated & ji) > 0
    }
    setStoredMarks(e) {
        return this.storedMarks = e,
        this.updated |= Yi,
        this
    }
    ensureMarks(e) {
        return M.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e),
        this
    }
    addStoredMark(e) {
        return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()))
    }
    removeStoredMark(e) {
        return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()))
    }
    get storedMarksSet() {
        return (this.updated & Yi) > 0
    }
    addStep(e, t) {
        super.addStep(e, t),
        this.updated = this.updated & -3,
        this.storedMarks = null
    }
    setTime(e) {
        return this.time = e,
        this
    }
    replaceSelection(e) {
        return this.selection.replace(this, e),
        this
    }
    replaceSelectionWith(e, t=!0) {
        let n = this.selection;
        return t && (e = e.mark(this.storedMarks || (n.empty ? n.$from.marks() : n.$from.marksAcross(n.$to) || M.none))),
        n.replaceWith(this, e),
        this
    }
    deleteSelection() {
        return this.selection.replace(this),
        this
    }
    insertText(e, t, n) {
        let r = this.doc.type.schema;
        if (t == null)
            return e ? this.replaceSelectionWith(r.text(e), !0) : this.deleteSelection();
        {
            if (n == null && (n = t),
            n = n ?? t,
            !e)
                return this.deleteRange(t, n);
            let s = this.storedMarks;
            if (!s) {
                let o = this.doc.resolve(t);
                s = n == t ? o.marks() : o.marksAcross(this.doc.resolve(n))
            }
            return this.replaceRangeWith(t, n, r.text(e, s)),
            this.selection.empty || this.setSelection(C.near(this.selection.$to)),
            this
        }
    }
    setMeta(e, t) {
        return this.meta[typeof e == "string" ? e : e.key] = t,
        this
    }
    getMeta(e) {
        return this.meta[typeof e == "string" ? e : e.key]
    }
    get isGeneric() {
        for (let e in this.meta)
            return !1;
        return !0
    }
    scrollIntoView() {
        return this.updated |= Xi,
        this
    }
    get scrolledIntoView() {
        return (this.updated & Xi) > 0
    }
}
function Qi(i, e) {
    return !e || !i ? i : i.bind(e)
}
class pt {
    constructor(e, t, n) {
        this.name = e,
        this.init = Qi(t.init, n),
        this.apply = Qi(t.apply, n)
    }
}
const Ga = [new pt("doc",{
    init(i) {
        return i.doc || i.schema.topNodeType.createAndFill()
    },
    apply(i) {
        return i.doc
    }
}), new pt("selection",{
    init(i, e) {
        return i.selection || C.atStart(e.doc)
    },
    apply(i) {
        return i.selection
    }
}), new pt("storedMarks",{
    init(i) {
        return i.storedMarks || null
    },
    apply(i, e, t, n) {
        return n.selection.$cursor ? i.storedMarks : null
    }
}), new pt("scrollToSelection",{
    init() {
        return 0
    },
    apply(i, e) {
        return i.scrolledIntoView ? e + 1 : e
    }
})];
class bn {
    constructor(e, t) {
        this.schema = e,
        this.plugins = [],
        this.pluginsByKey = Object.create(null),
        this.fields = Ga.slice(),
        t && t.forEach(n => {
            if (this.pluginsByKey[n.key])
                throw new RangeError("Adding different instances of a keyed plugin (" + n.key + ")");
            this.plugins.push(n),
            this.pluginsByKey[n.key] = n,
            n.spec.state && this.fields.push(new pt(n.key,n.spec.state,n))
        }
        )
    }
}
class mt {
    constructor(e) {
        this.config = e
    }
    get schema() {
        return this.config.schema
    }
    get plugins() {
        return this.config.plugins
    }
    apply(e) {
        return this.applyTransaction(e).state
    }
    filterTransaction(e, t=-1) {
        for (let n = 0; n < this.config.plugins.length; n++)
            if (n != t) {
                let r = this.config.plugins[n];
                if (r.spec.filterTransaction && !r.spec.filterTransaction.call(r, e, this))
                    return !1
            }
        return !0
    }
    applyTransaction(e) {
        if (!this.filterTransaction(e))
            return {
                state: this,
                transactions: []
            };
        let t = [e]
          , n = this.applyInner(e)
          , r = null;
        for (; ; ) {
            let s = !1;
            for (let o = 0; o < this.config.plugins.length; o++) {
                let l = this.config.plugins[o];
                if (l.spec.appendTransaction) {
                    let a = r ? r[o].n : 0
                      , c = r ? r[o].state : this
                      , h = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, c, n);
                    if (h && n.filterTransaction(h, o)) {
                        if (h.setMeta("appendedTransaction", e),
                        !r) {
                            r = [];
                            for (let d = 0; d < this.config.plugins.length; d++)
                                r.push(d < o ? {
                                    state: n,
                                    n: t.length
                                } : {
                                    state: this,
                                    n: 0
                                })
                        }
                        t.push(h),
                        n = n.applyInner(h),
                        s = !0
                    }
                    r && (r[o] = {
                        state: n,
                        n: t.length
                    })
                }
            }
            if (!s)
                return {
                    state: n,
                    transactions: t
                }
        }
    }
    applyInner(e) {
        if (!e.before.eq(this.doc))
            throw new RangeError("Applying a mismatched transaction");
        let t = new mt(this.config)
          , n = this.config.fields;
        for (let r = 0; r < n.length; r++) {
            let s = n[r];
            t[s.name] = s.apply(e, this[s.name], this, t)
        }
        return t
    }
    get tr() {
        return new $a(this)
    }
    static create(e) {
        let t = new bn(e.doc ? e.doc.type.schema : e.schema,e.plugins)
          , n = new mt(t);
        for (let r = 0; r < t.fields.length; r++)
            n[t.fields[r].name] = t.fields[r].init(e, n);
        return n
    }
    reconfigure(e) {
        let t = new bn(this.schema,e.plugins)
          , n = t.fields
          , r = new mt(t);
        for (let s = 0; s < n.length; s++) {
            let o = n[s].name;
            r[o] = this.hasOwnProperty(o) ? this[o] : n[s].init(e, r)
        }
        return r
    }
    toJSON(e) {
        let t = {
            doc: this.doc.toJSON(),
            selection: this.selection.toJSON()
        };
        if (this.storedMarks && (t.storedMarks = this.storedMarks.map(n => n.toJSON())),
        e && typeof e == "object")
            for (let n in e) {
                if (n == "doc" || n == "selection")
                    throw new RangeError("The JSON fields `doc` and `selection` are reserved");
                let r = e[n]
                  , s = r.spec.state;
                s && s.toJSON && (t[n] = s.toJSON.call(r, this[r.key]))
            }
        return t
    }
    static fromJSON(e, t, n) {
        if (!t)
            throw new RangeError("Invalid input for EditorState.fromJSON");
        if (!e.schema)
            throw new RangeError("Required config field 'schema' missing");
        let r = new bn(e.schema,e.plugins)
          , s = new mt(r);
        return r.fields.forEach(o => {
            if (o.name == "doc")
                s.doc = ae.fromJSON(e.schema, t.doc);
            else if (o.name == "selection")
                s.selection = C.fromJSON(s.doc, t.selection);
            else if (o.name == "storedMarks")
                t.storedMarks && (s.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
            else {
                if (n)
                    for (let l in n) {
                        let a = n[l]
                          , c = a.spec.state;
                        if (a.key == o.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
                            s[o.name] = c.fromJSON.call(a, e, t[l], s);
                            return
                        }
                    }
                s[o.name] = o.init(e, s)
            }
        }
        ),
        s
    }
}
function ys(i, e, t) {
    for (let n in i) {
        let r = i[n];
        r instanceof Function ? r = r.bind(e) : n == "handleDOMEvents" && (r = ys(r, e, {})),
        t[n] = r
    }
    return t
}
class Ne {
    constructor(e) {
        this.spec = e,
        this.props = {},
        e.props && ys(e.props, this, this.props),
        this.key = e.key ? e.key.key : Ss("plugin")
    }
    getState(e) {
        return e[this.key]
    }
}
const xn = Object.create(null);
function Ss(i) {
    return i in xn ? i + "$" + ++xn[i] : (xn[i] = 0,
    i + "$")
}
class ot {
    constructor(e="key") {
        this.key = Ss(e)
    }
    get(e) {
        return e.config.pluginsByKey[this.key]
    }
    getState(e) {
        return e[this.key]
    }
}
const ks = new ot("transactionEventPlugin")
  , Zi = "prosemirrorDispatchTransaction";
function er(i, e) {
    const {eventTarget: t} = ks.getState(i.state);
    return t.addEventListener(Zi, e),
    () => {
        t.removeEventListener(Zi, e)
    }
}
function pd(i) {
    return new Ne({
        key: ks,
        state: {
            init() {
                return {
                    eventTarget: i
                }
            },
            apply(e, t) {
                return t
            }
        }
    })
}
const Ut = new ot("customKeymapPlugin");
function ja(i, e) {
    i.dispatch(i.state.tr.setMeta(Ut, {
        handlers: e
    }))
}
function md(i={
    handlers: {}
}) {
    return new Ne({
        key: Ut,
        state: {
            init() {
                return {
                    ...i
                }
            },
            apply(e, t) {
                const n = e.getMeta(Ut);
                return n ? {
                    ...t,
                    ...n
                } : t
            }
        },
        props: {
            handleKeyDown(e, t) {
                if (ll(t))
                    return !1;
                const r = Ut.getState(e.state).handlers[t.key];
                return r ? r(t) : !1
            }
        }
    })
}
const bs = new ot("contentReference")
  , gd = i => {
    const e = al(i).map( ({newContentReference: t}) => t);
    return new Ne({
        key: bs,
        state: {
            init: (t, {doc: n}) => ({
                displayedContentReferences: e
            }),
            apply: (t, n) => n
        },
        props: {}
    })
}
  , xs = (i, e) => i.selection.empty ? !1 : (e && e(i.tr.deleteSelection().scrollIntoView()),
!0);
function Ya(i, e) {
    let {$cursor: t} = i.selection;
    return !t || (e ? !e.endOfTextblock("backward", i) : t.parentOffset > 0) ? null : t
}
const Yn = (i, e, t) => {
    let n = Ya(i, t);
    if (!n)
        return !1;
    let r = Cs(n);
    if (!r) {
        let o = n.blockRange()
          , l = o && $n(o);
        return l == null ? !1 : (e && e(i.tr.lift(o, l).scrollIntoView()),
        !0)
    }
    let s = r.nodeBefore;
    if (!s.type.spec.isolating && Os(i, r, e))
        return !0;
    if (n.parent.content.size == 0 && (nt(s, "end") || b.isSelectable(s))) {
        let o = Gn(i.doc, n.before(), n.after(), S.empty);
        if (o && o.slice.size < o.to - o.from) {
            if (e) {
                let l = i.tr.step(o);
                l.setSelection(nt(s, "end") ? C.findFrom(l.doc.resolve(l.mapping.map(r.pos, -1)), -1) : b.create(l.doc, r.pos - s.nodeSize)),
                e(l.scrollIntoView())
            }
            return !0
        }
    }
    return s.isAtom && r.depth == n.depth - 1 ? (e && e(i.tr.delete(r.pos - s.nodeSize, r.pos).scrollIntoView()),
    !0) : !1
}
;
function nt(i, e, t=!1) {
    for (let n = i; n; n = e == "start" ? n.firstChild : n.lastChild) {
        if (n.isTextblock)
            return !0;
        if (t && n.childCount != 1)
            return !1
    }
    return !1
}
const Xa = (i, e, t) => {
    let {$head: n, empty: r} = i.selection
      , s = n;
    if (!r)
        return !1;
    if (n.parent.isTextblock) {
        if (t ? !t.endOfTextblock("backward", i) : n.parentOffset > 0)
            return !1;
        s = Cs(n)
    }
    let o = s && s.nodeBefore;
    return !o || !b.isSelectable(o) ? !1 : (e && e(i.tr.setSelection(b.create(i.doc, s.pos - o.nodeSize)).scrollIntoView()),
    !0)
}
;
function Cs(i) {
    if (!i.parent.type.spec.isolating)
        for (let e = i.depth - 1; e >= 0; e--) {
            if (i.index(e) > 0)
                return i.doc.resolve(i.before(e + 1));
            if (i.node(e).type.spec.isolating)
                break
        }
    return null
}
function Qa(i, e) {
    let {$cursor: t} = i.selection;
    return !t || (e ? !e.endOfTextblock("forward", i) : t.parentOffset < t.parent.content.size) ? null : t
}
const Za = (i, e, t) => {
    let n = Qa(i, t);
    if (!n)
        return !1;
    let r = Ts(n);
    if (!r)
        return !1;
    let s = r.nodeAfter;
    if (Os(i, r, e))
        return !0;
    if (n.parent.content.size == 0 && (nt(s, "start") || b.isSelectable(s))) {
        let o = Gn(i.doc, n.before(), n.after(), S.empty);
        if (o && o.slice.size < o.to - o.from) {
            if (e) {
                let l = i.tr.step(o);
                l.setSelection(nt(s, "start") ? C.findFrom(l.doc.resolve(l.mapping.map(r.pos)), 1) : b.create(l.doc, l.mapping.map(r.pos))),
                e(l.scrollIntoView())
            }
            return !0
        }
    }
    return s.isAtom && r.depth == n.depth - 1 ? (e && e(i.tr.delete(r.pos, r.pos + s.nodeSize).scrollIntoView()),
    !0) : !1
}
  , ec = (i, e, t) => {
    let {$head: n, empty: r} = i.selection
      , s = n;
    if (!r)
        return !1;
    if (n.parent.isTextblock) {
        if (t ? !t.endOfTextblock("forward", i) : n.parentOffset < n.parent.content.size)
            return !1;
        s = Ts(n)
    }
    let o = s && s.nodeAfter;
    return !o || !b.isSelectable(o) ? !1 : (e && e(i.tr.setSelection(b.create(i.doc, s.pos)).scrollIntoView()),
    !0)
}
;
function Ts(i) {
    if (!i.parent.type.spec.isolating)
        for (let e = i.depth - 1; e >= 0; e--) {
            let t = i.node(e);
            if (i.index(e) + 1 < t.childCount)
                return i.doc.resolve(i.after(e + 1));
            if (t.type.spec.isolating)
                break
        }
    return null
}
const tc = (i, e) => {
    let {$head: t, $anchor: n} = i.selection;
    return !t.parent.type.spec.code || !t.sameParent(n) ? !1 : (e && e(i.tr.insertText(`
`).scrollIntoView()),
    !0)
}
;
function Xn(i) {
    for (let e = 0; e < i.edgeCount; e++) {
        let {type: t} = i.edge(e);
        if (t.isTextblock && !t.hasRequiredAttrs())
            return t
    }
    return null
}
const nc = (i, e) => {
    let {$head: t, $anchor: n} = i.selection;
    if (!t.parent.type.spec.code || !t.sameParent(n))
        return !1;
    let r = t.node(-1)
      , s = t.indexAfter(-1)
      , o = Xn(r.contentMatchAt(s));
    if (!o || !r.canReplaceWith(s, s, o))
        return !1;
    if (e) {
        let l = t.after()
          , a = i.tr.replaceWith(l, l, o.createAndFill());
        a.setSelection(C.near(a.doc.resolve(l), 1)),
        e(a.scrollIntoView())
    }
    return !0
}
  , Ms = (i, e) => {
    let t = i.selection
      , {$from: n, $to: r} = t;
    if (t instanceof X || n.parent.inlineContent || r.parent.inlineContent)
        return !1;
    let s = Xn(r.parent.contentMatchAt(r.indexAfter()));
    if (!s || !s.isTextblock)
        return !1;
    if (e) {
        let o = (!n.parentOffset && r.index() < r.parent.childCount ? n : r).pos
          , l = i.tr.insert(o, s.createAndFill());
        l.setSelection(T.create(l.doc, o + 1)),
        e(l.scrollIntoView())
    }
    return !0
}
  , ws = (i, e) => {
    let {$cursor: t} = i.selection;
    if (!t || t.parent.content.size)
        return !1;
    if (t.depth > 1 && t.after() != t.end(-1)) {
        let s = t.before();
        if (Wt(i.doc, s))
            return e && e(i.tr.split(s).scrollIntoView()),
            !0
    }
    let n = t.blockRange()
      , r = n && $n(n);
    return r == null ? !1 : (e && e(i.tr.lift(n, r).scrollIntoView()),
    !0)
}
;
function ic(i) {
    return (e, t) => {
        let {$from: n, $to: r} = e.selection;
        if (e.selection instanceof b && e.selection.node.isBlock)
            return !n.parentOffset || !Wt(e.doc, n.pos) ? !1 : (t && t(e.tr.split(n.pos).scrollIntoView()),
            !0);
        if (!n.parent.isBlock)
            return !1;
        if (t) {
            let s = r.parentOffset == r.parent.content.size
              , o = e.tr;
            (e.selection instanceof T || e.selection instanceof X) && o.deleteSelection();
            let l = n.depth == 0 ? null : Xn(n.node(-1).contentMatchAt(n.indexAfter(-1)))
              , a = s && l ? [{
                type: l
            }] : void 0
              , c = Wt(o.doc, o.mapping.map(n.pos), 1, a);
            if (!a && !c && Wt(o.doc, o.mapping.map(n.pos), 1, l ? [{
                type: l
            }] : void 0) && (l && (a = [{
                type: l
            }]),
            c = !0),
            c && (o.split(o.mapping.map(n.pos), 1, a),
            !s && !n.parentOffset && n.parent.type != l)) {
                let h = o.mapping.map(n.before())
                  , d = o.doc.resolve(h);
                l && n.node(-1).canReplaceWith(d.index(), d.index() + 1, l) && o.setNodeMarkup(o.mapping.map(n.before()), l)
            }
            t(o.scrollIntoView())
        }
        return !0
    }
}
const Ns = ic()
  , rc = (i, e) => (e && e(i.tr.setSelection(new X(i.doc))),
!0);
function sc(i, e, t) {
    let n = e.nodeBefore
      , r = e.nodeAfter
      , s = e.index();
    return !n || !r || !n.type.compatibleContent(r.type) ? !1 : !n.content.size && e.parent.canReplace(s - 1, s) ? (t && t(i.tr.delete(e.pos - n.nodeSize, e.pos).scrollIntoView()),
    !0) : !e.parent.canReplace(s, s + 1) || !(r.isTextblock || fs(i.doc, e.pos)) ? !1 : (t && t(i.tr.clearIncompatible(e.pos, n.type, n.contentMatchAt(n.childCount)).join(e.pos).scrollIntoView()),
    !0)
}
function Os(i, e, t) {
    let n = e.nodeBefore, r = e.nodeAfter, s, o;
    if (n.type.spec.isolating || r.type.spec.isolating)
        return !1;
    if (sc(i, e, t))
        return !0;
    let l = e.parent.canReplace(e.index(), e.index() + 1);
    if (l && (s = (o = n.contentMatchAt(n.childCount)).findWrapping(r.type)) && o.matchType(s[0] || r.type).validEnd) {
        if (t) {
            let d = e.pos + r.nodeSize
              , f = y.empty;
            for (let m = s.length - 1; m >= 0; m--)
                f = y.from(s[m].create(null, f));
            f = y.from(n.copy(f));
            let p = i.tr.step(new Y(e.pos - 1,d,e.pos,d,new S(f,1,0),s.length,!0))
              , u = d + 2 * s.length;
            fs(p.doc, u) && p.join(u),
            t(p.scrollIntoView())
        }
        return !0
    }
    let a = C.findFrom(e, 1)
      , c = a && a.$from.blockRange(a.$to)
      , h = c && $n(c);
    if (h != null && h >= e.depth)
        return t && t(i.tr.lift(c, h).scrollIntoView()),
        !0;
    if (l && nt(r, "start", !0) && nt(n, "end")) {
        let d = n
          , f = [];
        for (; f.push(d),
        !d.isTextblock; )
            d = d.lastChild;
        let p = r
          , u = 1;
        for (; !p.isTextblock; p = p.firstChild)
            u++;
        if (d.canReplace(d.childCount, d.childCount, p.content)) {
            if (t) {
                let m = y.empty;
                for (let k = f.length - 1; k >= 0; k--)
                    m = y.from(f[k].copy(m));
                let g = i.tr.step(new Y(e.pos - f.length,e.pos + r.nodeSize,e.pos + u,e.pos + r.nodeSize - u,new S(m,f.length,0),0,!0));
                t(g.scrollIntoView())
            }
            return !0
        }
    }
    return !1
}
function Es(i) {
    return function(e, t) {
        let n = e.selection
          , r = i < 0 ? n.$from : n.$to
          , s = r.depth;
        for (; r.node(s).isInline; ) {
            if (!s)
                return !1;
            s--
        }
        return r.node(s).isTextblock ? (t && t(e.tr.setSelection(T.create(e.doc, i < 0 ? r.start(s) : r.end(s)))),
        !0) : !1
    }
}
const oc = Es(-1)
  , lc = Es(1);
function yd(i, e=null) {
    return function(t, n) {
        let {$from: r, $to: s} = t.selection
          , o = r.blockRange(s)
          , l = o && Ma(o, i, e);
        return l ? (n && n(t.tr.wrap(o, l).scrollIntoView()),
        !0) : !1
    }
}
function Sd(i, e=null) {
    return function(t, n) {
        let r = !1;
        for (let s = 0; s < t.selection.ranges.length && !r; s++) {
            let {$from: {pos: o}, $to: {pos: l}} = t.selection.ranges[s];
            t.doc.nodesBetween(o, l, (a, c) => {
                if (r)
                    return !1;
                if (!(!a.isTextblock || a.hasMarkup(i, e)))
                    if (a.type == i)
                        r = !0;
                    else {
                        let h = t.doc.resolve(c)
                          , d = h.index();
                        r = h.parent.canReplaceWith(d, d + 1, i)
                    }
            }
            )
        }
        if (!r)
            return !1;
        if (n) {
            let s = t.tr;
            for (let o = 0; o < t.selection.ranges.length; o++) {
                let {$from: {pos: l}, $to: {pos: a}} = t.selection.ranges[o];
                s.setBlockType(l, a, i, e)
            }
            n(s.scrollIntoView())
        }
        return !0
    }
}
function ac(i, e, t) {
    for (let n = 0; n < e.length; n++) {
        let {$from: r, $to: s} = e[n]
          , o = r.depth == 0 ? i.inlineContent && i.type.allowsMarkType(t) : !1;
        if (i.nodesBetween(r.pos, s.pos, l => {
            if (o)
                return !1;
            o = l.inlineContent && l.type.allowsMarkType(t)
        }
        ),
        o)
            return !0
    }
    return !1
}
function kd(i, e=null) {
    return function(t, n) {
        let {empty: r, $cursor: s, ranges: o} = t.selection;
        if (r && !s || !ac(t.doc, o, i))
            return !1;
        if (n)
            if (s)
                i.isInSet(t.storedMarks || s.marks()) ? n(t.tr.removeStoredMark(i)) : n(t.tr.addStoredMark(i.create(e)));
            else {
                let l = !1
                  , a = t.tr;
                for (let c = 0; !l && c < o.length; c++) {
                    let {$from: h, $to: d} = o[c];
                    l = t.doc.rangeHasMark(h.pos, d.pos, i)
                }
                for (let c = 0; c < o.length; c++) {
                    let {$from: h, $to: d} = o[c];
                    if (l)
                        a.removeMark(h.pos, d.pos, i);
                    else {
                        let f = h.pos
                          , p = d.pos
                          , u = h.nodeAfter
                          , m = d.nodeBefore
                          , g = u && u.isText ? /^\s*/.exec(u.text)[0].length : 0
                          , k = m && m.isText ? /\s*$/.exec(m.text)[0].length : 0;
                        f + g < p && (f += g,
                        p -= k),
                        a.addMark(f, p, i.create(e))
                    }
                }
                n(a.scrollIntoView())
            }
        return !0
    }
}
function sn(...i) {
    return function(e, t, n) {
        for (let r = 0; r < i.length; r++)
            if (i[r](e, t, n))
                return !0;
        return !1
    }
}
let Cn = sn(xs, Yn, Xa)
  , tr = sn(xs, Za, ec);
const ue = {
    Enter: sn(tc, Ms, ws, Ns),
    "Mod-Enter": nc,
    Backspace: Cn,
    "Mod-Backspace": Cn,
    "Shift-Backspace": Cn,
    Delete: tr,
    "Mod-Delete": tr,
    "Mod-a": rc
}
  , Ds = {
    "Ctrl-h": ue.Backspace,
    "Alt-Backspace": ue["Mod-Backspace"],
    "Ctrl-d": ue.Delete,
    "Ctrl-Alt-Backspace": ue["Mod-Delete"],
    "Alt-Delete": ue["Mod-Delete"],
    "Alt-d": ue["Mod-Delete"],
    "Ctrl-a": oc,
    "Ctrl-e": lc
};
for (let i in ue)
    Ds[i] = ue[i];
const cc = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform ? os.platform() == "darwin" : !1
  , bd = cc ? Ds : ue;
function hc(i) {
    let e = ""
      , t = !1;
    const n = [];
    function r(s) {
        if (t = !1,
        s.type.name === "paragraph")
            return s.descendants(o => r(o)),
            e += `
`,
            t = !0,
            !1;
        if (s.type.name === "command_token") {
            const o = s.textContent;
            return n.push({
                symbol: hl.SystemHint,
                startIndex: e.length,
                endIndex: e.length + o.length
            }),
            e += o,
            !1
        } else
            s.isText && s.text !== void 0 && (e += s.text)
    }
    return i.descendants(s => r(s)),
    t && e.endsWith(`
`) && (e = e.slice(0, -1)),
    {
        content: e,
        metadata: {
            custom_symbol_offsets: n
        }
    }
}
function dc(i) {
    return hc(i.state.doc)
}
const Qn = sn(Ms, ws, Ns);
async function xd(i, e, t=!1) {
    if (t) {
        uc(i, e);
        return
    }
    const {schema: n} = i.state
      , r = e.split(`
`);
    if (i.dispatch(i.state.tr.deleteSelection()),
    i.dispatch(i.state.tr.insertText(r[0])),
    r.length > 1) {
        Qn(i.state, i.dispatch);
        const s = r.slice(1)
          , o = y.fromArray(s.map(a => n.nodes.paragraph.create(null, a === "" ? null : n.text(a))))
          , l = new S(o,0,0);
        i.dispatch(i.state.tr.replaceSelection(l)),
        Yn(i.state, i.dispatch, i)
    }
}
const fc = /oaicite:(\d+)/g;
async function uc(i, e) {
    const {schema: t} = i.state
      , n = e.split(`
`);
    i.dispatch(i.state.tr.deleteSelection());
    const {tr: r} = i.state
      , {$from: s} = r.selection;
    s.parent.isTextblock || (r.insert(s.pos, t.nodes.paragraph.create()),
    i.dispatch(r),
    i.focus());
    const {selection: o} = i.state
      , {$from: l} = o
      , a = n[0]
      , c = nr(a, t, i)
      , h = y.fromArray(c);
    let d = h;
    l.parent.type.validContent(h) || (d = t.nodes.paragraph.create(null, h));
    const f = new S(y.from(d),0,0);
    if (i.dispatch(i.state.tr.replaceSelection(f)),
    n.length > 1) {
        Qn(i.state, i.dispatch);
        const u = n.slice(1).map(k => {
            const w = nr(k, t, i);
            return t.nodes.paragraph.create(null, w)
        }
        )
          , m = y.fromArray(u)
          , g = new S(m,0,0);
        i.dispatch(i.state.tr.replaceSelection(g)),
        Yn(i.state, i.dispatch, i)
    }
}
function nr(i, e, t) {
    const n = [];
    let r = 0, s;
    if (!!!bs.get(t.state))
        return [e.text(i)];
    for (; (s = fc.exec(i)) !== null; ) {
        if (s.index > r) {
            const c = i.slice(r, s.index);
            n.push(e.text(c))
        }
        const l = s[1]
          , a = pc(l, e);
        n.push(a),
        r = s.index + s[0].length
    }
    if (r < i.length) {
        const l = i.slice(r);
        n.push(e.text(l))
    }
    return n
}
function pc(i, e) {
    const t = To({
        value: "oaicite:" + i
    }, e);
    if (t == null)
        throw new Error("Failed to create text node for content reference");
    const n = {
        index: i,
        displayLayout: "inline"
    }
      , r = y.fromArray([t]);
    return e.nodes.contentReference.create(n, r)
}
const Cd = i => cl(i).checkGate("223382091")
  , F = function(i) {
    for (var e = 0; ; e++)
        if (i = i.previousSibling,
        !i)
            return e
}
  , Nt = function(i) {
    let e = i.assignedSlot || i.parentNode;
    return e && e.nodeType == 11 ? e.host : e
};
let Rn = null;
const fe = function(i, e, t) {
    let n = Rn || (Rn = document.createRange());
    return n.setEnd(i, t ?? i.nodeValue.length),
    n.setStart(i, e || 0),
    n
}
  , mc = function() {
    Rn = null
}
  , qe = function(i, e, t, n) {
    return t && (ir(i, e, t, n, -1) || ir(i, e, t, n, 1))
}
  , gc = /^(img|br|input|textarea|hr)$/i;
function ir(i, e, t, n, r) {
    for (; ; ) {
        if (i == t && e == n)
            return !0;
        if (e == (r < 0 ? 0 : oe(i))) {
            let s = i.parentNode;
            if (!s || s.nodeType != 1 || At(i) || gc.test(i.nodeName) || i.contentEditable == "false")
                return !1;
            e = F(i) + (r < 0 ? 0 : 1),
            i = s
        } else if (i.nodeType == 1) {
            if (i = i.childNodes[e + (r < 0 ? -1 : 0)],
            i.contentEditable == "false")
                return !1;
            e = r < 0 ? oe(i) : 0
        } else
            return !1
    }
}
function oe(i) {
    return i.nodeType == 3 ? i.nodeValue.length : i.childNodes.length
}
function yc(i, e) {
    for (; ; ) {
        if (i.nodeType == 3 && e)
            return i;
        if (i.nodeType == 1 && e > 0) {
            if (i.contentEditable == "false")
                return null;
            i = i.childNodes[e - 1],
            e = oe(i)
        } else if (i.parentNode && !At(i))
            e = F(i),
            i = i.parentNode;
        else
            return null
    }
}
function Sc(i, e) {
    for (; ; ) {
        if (i.nodeType == 3 && e < i.nodeValue.length)
            return i;
        if (i.nodeType == 1 && e < i.childNodes.length) {
            if (i.contentEditable == "false")
                return null;
            i = i.childNodes[e],
            e = 0
        } else if (i.parentNode && !At(i))
            e = F(i) + 1,
            i = i.parentNode;
        else
            return null
    }
}
function kc(i, e, t) {
    for (let n = e == 0, r = e == oe(i); n || r; ) {
        if (i == t)
            return !0;
        let s = F(i);
        if (i = i.parentNode,
        !i)
            return !1;
        n = n && s == 0,
        r = r && s == oe(i)
    }
}
function At(i) {
    let e;
    for (let t = i; t && !(e = t.pmViewDesc); t = t.parentNode)
        ;
    return e && e.node && e.node.isBlock && (e.dom == i || e.contentDOM == i)
}
const on = function(i) {
    return i.focusNode && qe(i.focusNode, i.focusOffset, i.anchorNode, i.anchorOffset)
};
function Ie(i, e) {
    let t = document.createEvent("Event");
    return t.initEvent("keydown", !0, !0),
    t.keyCode = i,
    t.key = t.code = e,
    t
}
function bc(i) {
    let e = i.activeElement;
    for (; e && e.shadowRoot; )
        e = e.shadowRoot.activeElement;
    return e
}
function xc(i, e, t) {
    if (i.caretPositionFromPoint)
        try {
            let n = i.caretPositionFromPoint(e, t);
            if (n)
                return {
                    node: n.offsetNode,
                    offset: n.offset
                }
        } catch {}
    if (i.caretRangeFromPoint) {
        let n = i.caretRangeFromPoint(e, t);
        if (n)
            return {
                node: n.startContainer,
                offset: n.startOffset
            }
    }
}
const ce = typeof navigator < "u" ? navigator : null
  , rr = typeof document < "u" ? document : null
  , Oe = ce && ce.userAgent || ""
  , vn = /Edge\/(\d+)/.exec(Oe)
  , As = /MSIE \d/.exec(Oe)
  , Pn = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Oe)
  , G = !!(As || Pn || vn)
  , Ce = As ? document.documentMode : Pn ? +Pn[1] : vn ? +vn[1] : 0
  , ie = !G && /gecko\/(\d+)/i.test(Oe);
ie && +(/Firefox\/(\d+)/.exec(Oe) || [0, 0])[1];
const Fn = !G && /Chrome\/(\d+)/.exec(Oe)
  , V = !!Fn
  , Is = Fn ? +Fn[1] : 0
  , J = !G && !!ce && /Apple Computer/.test(ce.vendor)
  , it = J && (/Mobile\/\w+/.test(Oe) || !!ce && ce.maxTouchPoints > 2)
  , ee = it || (ce ? /Mac/.test(ce.platform) : !1)
  , Cc = ce ? /Win/.test(ce.platform) : !1
  , ne = /Android \d/.test(Oe)
  , It = !!rr && "webkitFontSmoothing"in rr.documentElement.style
  , Tc = It ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function Mc(i) {
    let e = i.defaultView && i.defaultView.visualViewport;
    return e ? {
        left: 0,
        right: e.width,
        top: 0,
        bottom: e.height
    } : {
        left: 0,
        right: i.documentElement.clientWidth,
        top: 0,
        bottom: i.documentElement.clientHeight
    }
}
function de(i, e) {
    return typeof i == "number" ? i : i[e]
}
function wc(i) {
    let e = i.getBoundingClientRect()
      , t = e.width / i.offsetWidth || 1
      , n = e.height / i.offsetHeight || 1;
    return {
        left: e.left,
        right: e.left + i.clientWidth * t,
        top: e.top,
        bottom: e.top + i.clientHeight * n
    }
}
function sr(i, e, t) {
    let n = i.someProp("scrollThreshold") || 0
      , r = i.someProp("scrollMargin") || 5
      , s = i.dom.ownerDocument;
    for (let o = t || i.dom; o; o = Nt(o)) {
        if (o.nodeType != 1)
            continue;
        let l = o
          , a = l == s.body
          , c = a ? Mc(s) : wc(l)
          , h = 0
          , d = 0;
        if (e.top < c.top + de(n, "top") ? d = -(c.top - e.top + de(r, "top")) : e.bottom > c.bottom - de(n, "bottom") && (d = e.bottom - e.top > c.bottom - c.top ? e.top + de(r, "top") - c.top : e.bottom - c.bottom + de(r, "bottom")),
        e.left < c.left + de(n, "left") ? h = -(c.left - e.left + de(r, "left")) : e.right > c.right - de(n, "right") && (h = e.right - c.right + de(r, "right")),
        h || d)
            if (a)
                s.defaultView.scrollBy(h, d);
            else {
                let f = l.scrollLeft
                  , p = l.scrollTop;
                d && (l.scrollTop += d),
                h && (l.scrollLeft += h);
                let u = l.scrollLeft - f
                  , m = l.scrollTop - p;
                e = {
                    left: e.left - u,
                    top: e.top - m,
                    right: e.right - u,
                    bottom: e.bottom - m
                }
            }
        if (a || /^(fixed|sticky)$/.test(getComputedStyle(o).position))
            break
    }
}
function Nc(i) {
    let e = i.dom.getBoundingClientRect(), t = Math.max(0, e.top), n, r;
    for (let s = (e.left + e.right) / 2, o = t + 1; o < Math.min(innerHeight, e.bottom); o += 5) {
        let l = i.root.elementFromPoint(s, o);
        if (!l || l == i.dom || !i.dom.contains(l))
            continue;
        let a = l.getBoundingClientRect();
        if (a.top >= t - 20) {
            n = l,
            r = a.top;
            break
        }
    }
    return {
        refDOM: n,
        refTop: r,
        stack: Rs(i.dom)
    }
}
function Rs(i) {
    let e = []
      , t = i.ownerDocument;
    for (let n = i; n && (e.push({
        dom: n,
        top: n.scrollTop,
        left: n.scrollLeft
    }),
    i != t); n = Nt(n))
        ;
    return e
}
function Oc({refDOM: i, refTop: e, stack: t}) {
    let n = i ? i.getBoundingClientRect().top : 0;
    vs(t, n == 0 ? 0 : n - e)
}
function vs(i, e) {
    for (let t = 0; t < i.length; t++) {
        let {dom: n, top: r, left: s} = i[t];
        n.scrollTop != r + e && (n.scrollTop = r + e),
        n.scrollLeft != s && (n.scrollLeft = s)
    }
}
let We = null;
function Ec(i) {
    if (i.setActive)
        return i.setActive();
    if (We)
        return i.focus(We);
    let e = Rs(i);
    i.focus(We == null ? {
        get preventScroll() {
            return We = {
                preventScroll: !0
            },
            !0
        }
    } : void 0),
    We || (We = !1,
    vs(e, 0))
}
function Ps(i, e) {
    let t, n = 2e8, r, s = 0, o = e.top, l = e.top, a, c;
    for (let h = i.firstChild, d = 0; h; h = h.nextSibling,
    d++) {
        let f;
        if (h.nodeType == 1)
            f = h.getClientRects();
        else if (h.nodeType == 3)
            f = fe(h).getClientRects();
        else
            continue;
        for (let p = 0; p < f.length; p++) {
            let u = f[p];
            if (u.top <= o && u.bottom >= l) {
                o = Math.max(u.bottom, o),
                l = Math.min(u.top, l);
                let m = u.left > e.left ? u.left - e.left : u.right < e.left ? e.left - u.right : 0;
                if (m < n) {
                    t = h,
                    n = m,
                    r = m && t.nodeType == 3 ? {
                        left: u.right < e.left ? u.right : u.left,
                        top: e.top
                    } : e,
                    h.nodeType == 1 && m && (s = d + (e.left >= (u.left + u.right) / 2 ? 1 : 0));
                    continue
                }
            } else
                u.top > e.top && !a && u.left <= e.left && u.right >= e.left && (a = h,
                c = {
                    left: Math.max(u.left, Math.min(u.right, e.left)),
                    top: u.top
                });
            !t && (e.left >= u.right && e.top >= u.top || e.left >= u.left && e.top >= u.bottom) && (s = d + 1)
        }
    }
    return !t && a && (t = a,
    r = c,
    n = 0),
    t && t.nodeType == 3 ? Dc(t, r) : !t || n && t.nodeType == 1 ? {
        node: i,
        offset: s
    } : Ps(t, r)
}
function Dc(i, e) {
    let t = i.nodeValue.length
      , n = document.createRange();
    for (let r = 0; r < t; r++) {
        n.setEnd(i, r + 1),
        n.setStart(i, r);
        let s = me(n, 1);
        if (s.top != s.bottom && Zn(e, s))
            return {
                node: i,
                offset: r + (e.left >= (s.left + s.right) / 2 ? 1 : 0)
            }
    }
    return {
        node: i,
        offset: 0
    }
}
function Zn(i, e) {
    return i.left >= e.left - 1 && i.left <= e.right + 1 && i.top >= e.top - 1 && i.top <= e.bottom + 1
}
function Ac(i, e) {
    let t = i.parentNode;
    return t && /^li$/i.test(t.nodeName) && e.left < i.getBoundingClientRect().left ? t : i
}
function Ic(i, e, t) {
    let {node: n, offset: r} = Ps(e, t)
      , s = -1;
    if (n.nodeType == 1 && !n.firstChild) {
        let o = n.getBoundingClientRect();
        s = o.left != o.right && t.left > (o.left + o.right) / 2 ? 1 : -1
    }
    return i.docView.posFromDOM(n, r, s)
}
function Rc(i, e, t, n) {
    let r = -1;
    for (let s = e, o = !1; s != i.dom; ) {
        let l = i.docView.nearestDesc(s, !0);
        if (!l)
            return null;
        if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM)) {
            let a = l.dom.getBoundingClientRect();
            if (l.node.isBlock && l.parent && (!o && a.left > n.left || a.top > n.top ? r = l.posBefore : (!o && a.right < n.left || a.bottom < n.top) && (r = l.posAfter),
            o = !0),
            !l.contentDOM && r < 0 && !l.node.isText)
                return (l.node.isBlock ? n.top < (a.top + a.bottom) / 2 : n.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter
        }
        s = l.dom.parentNode
    }
    return r > -1 ? r : i.docView.posFromDOM(e, t, -1)
}
function Fs(i, e, t) {
    let n = i.childNodes.length;
    if (n && t.top < t.bottom)
        for (let r = Math.max(0, Math.min(n - 1, Math.floor(n * (e.top - t.top) / (t.bottom - t.top)) - 2)), s = r; ; ) {
            let o = i.childNodes[s];
            if (o.nodeType == 1) {
                let l = o.getClientRects();
                for (let a = 0; a < l.length; a++) {
                    let c = l[a];
                    if (Zn(e, c))
                        return Fs(o, e, c)
                }
            }
            if ((s = (s + 1) % n) == r)
                break
        }
    return i
}
function vc(i, e) {
    let t = i.dom.ownerDocument, n, r = 0, s = xc(t, e.left, e.top);
    s && ({node: n, offset: r} = s);
    let o = (i.root.elementFromPoint ? i.root : t).elementFromPoint(e.left, e.top), l;
    if (!o || !i.dom.contains(o.nodeType != 1 ? o.parentNode : o)) {
        let c = i.dom.getBoundingClientRect();
        if (!Zn(e, c) || (o = Fs(i.dom, e, c),
        !o))
            return null
    }
    if (J)
        for (let c = o; n && c; c = Nt(c))
            c.draggable && (n = void 0);
    if (o = Ac(o, e),
    n) {
        if (ie && n.nodeType == 1 && (r = Math.min(r, n.childNodes.length),
        r < n.childNodes.length)) {
            let h = n.childNodes[r], d;
            h.nodeName == "IMG" && (d = h.getBoundingClientRect()).right <= e.left && d.bottom > e.top && r++
        }
        let c;
        It && r && n.nodeType == 1 && (c = n.childNodes[r - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && r--,
        n == i.dom && r == n.childNodes.length - 1 && n.lastChild.nodeType == 1 && e.top > n.lastChild.getBoundingClientRect().bottom ? l = i.state.doc.content.size : (r == 0 || n.nodeType != 1 || n.childNodes[r - 1].nodeName != "BR") && (l = Rc(i, n, r, e))
    }
    l == null && (l = Ic(i, o, e));
    let a = i.docView.nearestDesc(o, !0);
    return {
        pos: l,
        inside: a ? a.posAtStart - a.border : -1
    }
}
function or(i) {
    return i.top < i.bottom || i.left < i.right
}
function me(i, e) {
    let t = i.getClientRects();
    if (t.length) {
        let n = t[e < 0 ? 0 : t.length - 1];
        if (or(n))
            return n
    }
    return Array.prototype.find.call(t, or) || i.getBoundingClientRect()
}
const Pc = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function zs(i, e, t) {
    let {node: n, offset: r, atom: s} = i.docView.domFromPos(e, t < 0 ? -1 : 1)
      , o = It || ie;
    if (n.nodeType == 3)
        if (o && (Pc.test(n.nodeValue) || (t < 0 ? !r : r == n.nodeValue.length))) {
            let a = me(fe(n, r, r), t);
            if (ie && r && /\s/.test(n.nodeValue[r - 1]) && r < n.nodeValue.length) {
                let c = me(fe(n, r - 1, r - 1), -1);
                if (c.top == a.top) {
                    let h = me(fe(n, r, r + 1), -1);
                    if (h.top != a.top)
                        return dt(h, h.left < c.left)
                }
            }
            return a
        } else {
            let a = r
              , c = r
              , h = t < 0 ? 1 : -1;
            return t < 0 && !r ? (c++,
            h = -1) : t >= 0 && r == n.nodeValue.length ? (a--,
            h = 1) : t < 0 ? a-- : c++,
            dt(me(fe(n, a, c), h), h < 0)
        }
    if (!i.state.doc.resolve(e - (s || 0)).parent.inlineContent) {
        if (s == null && r && (t < 0 || r == oe(n))) {
            let a = n.childNodes[r - 1];
            if (a.nodeType == 1)
                return Tn(a.getBoundingClientRect(), !1)
        }
        if (s == null && r < oe(n)) {
            let a = n.childNodes[r];
            if (a.nodeType == 1)
                return Tn(a.getBoundingClientRect(), !0)
        }
        return Tn(n.getBoundingClientRect(), t >= 0)
    }
    if (s == null && r && (t < 0 || r == oe(n))) {
        let a = n.childNodes[r - 1]
          , c = a.nodeType == 3 ? fe(a, oe(a) - (o ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
        if (c)
            return dt(me(c, 1), !1)
    }
    if (s == null && r < oe(n)) {
        let a = n.childNodes[r];
        for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
            a = a.nextSibling;
        let c = a ? a.nodeType == 3 ? fe(a, 0, o ? 0 : 1) : a.nodeType == 1 ? a : null : null;
        if (c)
            return dt(me(c, -1), !0)
    }
    return dt(me(n.nodeType == 3 ? fe(n) : n, -t), t >= 0)
}
function dt(i, e) {
    if (i.width == 0)
        return i;
    let t = e ? i.left : i.right;
    return {
        top: i.top,
        bottom: i.bottom,
        left: t,
        right: t
    }
}
function Tn(i, e) {
    if (i.height == 0)
        return i;
    let t = e ? i.top : i.bottom;
    return {
        top: t,
        bottom: t,
        left: i.left,
        right: i.right
    }
}
function Bs(i, e, t) {
    let n = i.state
      , r = i.root.activeElement;
    n != e && i.updateState(e),
    r != i.dom && i.focus();
    try {
        return t()
    } finally {
        n != e && i.updateState(n),
        r != i.dom && r && r.focus()
    }
}
function Fc(i, e, t) {
    let n = e.selection
      , r = t == "up" ? n.$from : n.$to;
    return Bs(i, e, () => {
        let {node: s} = i.docView.domFromPos(r.pos, t == "up" ? -1 : 1);
        for (; ; ) {
            let l = i.docView.nearestDesc(s, !0);
            if (!l)
                break;
            if (l.node.isBlock) {
                s = l.contentDOM || l.dom;
                break
            }
            s = l.dom.parentNode
        }
        let o = zs(i, r.pos, 1);
        for (let l = s.firstChild; l; l = l.nextSibling) {
            let a;
            if (l.nodeType == 1)
                a = l.getClientRects();
            else if (l.nodeType == 3)
                a = fe(l, 0, l.nodeValue.length).getClientRects();
            else
                continue;
            for (let c = 0; c < a.length; c++) {
                let h = a[c];
                if (h.bottom > h.top + 1 && (t == "up" ? o.top - h.top > (h.bottom - o.top) * 2 : h.bottom - o.bottom > (o.bottom - h.top) * 2))
                    return !1
            }
        }
        return !0
    }
    )
}
const zc = /[\u0590-\u08ac]/;
function Bc(i, e, t) {
    let {$head: n} = e.selection;
    if (!n.parent.isTextblock)
        return !1;
    let r = n.parentOffset
      , s = !r
      , o = r == n.parent.content.size
      , l = i.domSelection();
    return !zc.test(n.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? s : o : Bs(i, e, () => {
        let {focusNode: a, focusOffset: c, anchorNode: h, anchorOffset: d} = i.domSelectionRange()
          , f = l.caretBidiLevel;
        l.modify("move", t, "character");
        let p = n.depth ? i.docView.domAfterPos(n.before()) : i.dom
          , {focusNode: u, focusOffset: m} = i.domSelectionRange()
          , g = u && !p.contains(u.nodeType == 1 ? u : u.parentNode) || a == u && c == m;
        try {
            l.collapse(h, d),
            a && (a != h || c != d) && l.extend && l.extend(a, c)
        } catch {}
        return f != null && (l.caretBidiLevel = f),
        g
    }
    )
}
let lr = null
  , ar = null
  , cr = !1;
function Lc(i, e, t) {
    return lr == e && ar == t ? cr : (lr = e,
    ar = t,
    cr = t == "up" || t == "down" ? Fc(i, e, t) : Bc(i, e, t))
}
const te = 0
  , hr = 1
  , Re = 2
  , he = 3;
class Rt {
    constructor(e, t, n, r) {
        this.parent = e,
        this.children = t,
        this.dom = n,
        this.contentDOM = r,
        this.dirty = te,
        n.pmViewDesc = this
    }
    matchesWidget(e) {
        return !1
    }
    matchesMark(e) {
        return !1
    }
    matchesNode(e, t, n) {
        return !1
    }
    matchesHack(e) {
        return !1
    }
    parseRule() {
        return null
    }
    stopEvent(e) {
        return !1
    }
    get size() {
        let e = 0;
        for (let t = 0; t < this.children.length; t++)
            e += this.children[t].size;
        return e
    }
    get border() {
        return 0
    }
    destroy() {
        this.parent = void 0,
        this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
        for (let e = 0; e < this.children.length; e++)
            this.children[e].destroy()
    }
    posBeforeChild(e) {
        for (let t = 0, n = this.posAtStart; ; t++) {
            let r = this.children[t];
            if (r == e)
                return n;
            n += r.size
        }
    }
    get posBefore() {
        return this.parent.posBeforeChild(this)
    }
    get posAtStart() {
        return this.parent ? this.parent.posBeforeChild(this) + this.border : 0
    }
    get posAfter() {
        return this.posBefore + this.size
    }
    get posAtEnd() {
        return this.posAtStart + this.size - 2 * this.border
    }
    localPosFromDOM(e, t, n) {
        if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
            if (n < 0) {
                let s, o;
                if (e == this.contentDOM)
                    s = e.childNodes[t - 1];
                else {
                    for (; e.parentNode != this.contentDOM; )
                        e = e.parentNode;
                    s = e.previousSibling
                }
                for (; s && !((o = s.pmViewDesc) && o.parent == this); )
                    s = s.previousSibling;
                return s ? this.posBeforeChild(o) + o.size : this.posAtStart
            } else {
                let s, o;
                if (e == this.contentDOM)
                    s = e.childNodes[t];
                else {
                    for (; e.parentNode != this.contentDOM; )
                        e = e.parentNode;
                    s = e.nextSibling
                }
                for (; s && !((o = s.pmViewDesc) && o.parent == this); )
                    s = s.nextSibling;
                return s ? this.posBeforeChild(o) : this.posAtEnd
            }
        let r;
        if (e == this.dom && this.contentDOM)
            r = t > F(this.contentDOM);
        else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
            r = e.compareDocumentPosition(this.contentDOM) & 2;
        else if (this.dom.firstChild) {
            if (t == 0)
                for (let s = e; ; s = s.parentNode) {
                    if (s == this.dom) {
                        r = !1;
                        break
                    }
                    if (s.previousSibling)
                        break
                }
            if (r == null && t == e.childNodes.length)
                for (let s = e; ; s = s.parentNode) {
                    if (s == this.dom) {
                        r = !0;
                        break
                    }
                    if (s.nextSibling)
                        break
                }
        }
        return r ?? n > 0 ? this.posAtEnd : this.posAtStart
    }
    nearestDesc(e, t=!1) {
        for (let n = !0, r = e; r; r = r.parentNode) {
            let s = this.getDesc(r), o;
            if (s && (!t || s.node))
                if (n && (o = s.nodeDOM) && !(o.nodeType == 1 ? o.contains(e.nodeType == 1 ? e : e.parentNode) : o == e))
                    n = !1;
                else
                    return s
        }
    }
    getDesc(e) {
        let t = e.pmViewDesc;
        for (let n = t; n; n = n.parent)
            if (n == this)
                return t
    }
    posFromDOM(e, t, n) {
        for (let r = e; r; r = r.parentNode) {
            let s = this.getDesc(r);
            if (s)
                return s.localPosFromDOM(e, t, n)
        }
        return -1
    }
    descAt(e) {
        for (let t = 0, n = 0; t < this.children.length; t++) {
            let r = this.children[t]
              , s = n + r.size;
            if (n == e && s != n) {
                for (; !r.border && r.children.length; )
                    r = r.children[0];
                return r
            }
            if (e < s)
                return r.descAt(e - n - r.border);
            n = s
        }
    }
    domFromPos(e, t) {
        if (!this.contentDOM)
            return {
                node: this.dom,
                offset: 0,
                atom: e + 1
            };
        let n = 0
          , r = 0;
        for (let s = 0; n < this.children.length; n++) {
            let o = this.children[n]
              , l = s + o.size;
            if (l > e || o instanceof Vs) {
                r = e - s;
                break
            }
            s = l
        }
        if (r)
            return this.children[n].domFromPos(r - this.children[n].border, t);
        for (let s; n && !(s = this.children[n - 1]).size && s instanceof Ls && s.side >= 0; n--)
            ;
        if (t <= 0) {
            let s, o = !0;
            for (; s = n ? this.children[n - 1] : null,
            !(!s || s.dom.parentNode == this.contentDOM); n--,
            o = !1)
                ;
            return s && t && o && !s.border && !s.domAtom ? s.domFromPos(s.size, t) : {
                node: this.contentDOM,
                offset: s ? F(s.dom) + 1 : 0
            }
        } else {
            let s, o = !0;
            for (; s = n < this.children.length ? this.children[n] : null,
            !(!s || s.dom.parentNode == this.contentDOM); n++,
            o = !1)
                ;
            return s && o && !s.border && !s.domAtom ? s.domFromPos(0, t) : {
                node: this.contentDOM,
                offset: s ? F(s.dom) : this.contentDOM.childNodes.length
            }
        }
    }
    parseRange(e, t, n=0) {
        if (this.children.length == 0)
            return {
                node: this.contentDOM,
                from: e,
                to: t,
                fromOffset: 0,
                toOffset: this.contentDOM.childNodes.length
            };
        let r = -1
          , s = -1;
        for (let o = n, l = 0; ; l++) {
            let a = this.children[l]
              , c = o + a.size;
            if (r == -1 && e <= c) {
                let h = o + a.border;
                if (e >= h && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
                    return a.parseRange(e, t, h);
                e = o;
                for (let d = l; d > 0; d--) {
                    let f = this.children[d - 1];
                    if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(1)) {
                        r = F(f.dom) + 1;
                        break
                    }
                    e -= f.size
                }
                r == -1 && (r = 0)
            }
            if (r > -1 && (c > t || l == this.children.length - 1)) {
                t = c;
                for (let h = l + 1; h < this.children.length; h++) {
                    let d = this.children[h];
                    if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(-1)) {
                        s = F(d.dom);
                        break
                    }
                    t += d.size
                }
                s == -1 && (s = this.contentDOM.childNodes.length);
                break
            }
            o = c
        }
        return {
            node: this.contentDOM,
            from: e,
            to: t,
            fromOffset: r,
            toOffset: s
        }
    }
    emptyChildAt(e) {
        if (this.border || !this.contentDOM || !this.children.length)
            return !1;
        let t = this.children[e < 0 ? 0 : this.children.length - 1];
        return t.size == 0 || t.emptyChildAt(e)
    }
    domAfterPos(e) {
        let {node: t, offset: n} = this.domFromPos(e, 0);
        if (t.nodeType != 1 || n == t.childNodes.length)
            throw new RangeError("No node after pos " + e);
        return t.childNodes[n]
    }
    setSelection(e, t, n, r=!1) {
        let s = Math.min(e, t)
          , o = Math.max(e, t);
        for (let f = 0, p = 0; f < this.children.length; f++) {
            let u = this.children[f]
              , m = p + u.size;
            if (s > p && o < m)
                return u.setSelection(e - p - u.border, t - p - u.border, n, r);
            p = m
        }
        let l = this.domFromPos(e, e ? -1 : 1)
          , a = t == e ? l : this.domFromPos(t, t ? -1 : 1)
          , c = n.getSelection()
          , h = !1;
        if ((ie || J) && e == t) {
            let {node: f, offset: p} = l;
            if (f.nodeType == 3) {
                if (h = !!(p && f.nodeValue[p - 1] == `
`),
                h && p == f.nodeValue.length)
                    for (let u = f, m; u; u = u.parentNode) {
                        if (m = u.nextSibling) {
                            m.nodeName == "BR" && (l = a = {
                                node: m.parentNode,
                                offset: F(m) + 1
                            });
                            break
                        }
                        let g = u.pmViewDesc;
                        if (g && g.node && g.node.isBlock)
                            break
                    }
            } else {
                let u = f.childNodes[p - 1];
                h = u && (u.nodeName == "BR" || u.contentEditable == "false")
            }
        }
        if (ie && c.focusNode && c.focusNode != a.node && c.focusNode.nodeType == 1) {
            let f = c.focusNode.childNodes[c.focusOffset];
            f && f.contentEditable == "false" && (r = !0)
        }
        if (!(r || h && J) && qe(l.node, l.offset, c.anchorNode, c.anchorOffset) && qe(a.node, a.offset, c.focusNode, c.focusOffset))
            return;
        let d = !1;
        if ((c.extend || e == t) && !h) {
            c.collapse(l.node, l.offset);
            try {
                e != t && c.extend(a.node, a.offset),
                d = !0
            } catch {}
        }
        if (!d) {
            if (e > t) {
                let p = l;
                l = a,
                a = p
            }
            let f = document.createRange();
            f.setEnd(a.node, a.offset),
            f.setStart(l.node, l.offset),
            c.removeAllRanges(),
            c.addRange(f)
        }
    }
    ignoreMutation(e) {
        return !this.contentDOM && e.type != "selection"
    }
    get contentLost() {
        return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM)
    }
    markDirty(e, t) {
        for (let n = 0, r = 0; r < this.children.length; r++) {
            let s = this.children[r]
              , o = n + s.size;
            if (n == o ? e <= o && t >= n : e < o && t > n) {
                let l = n + s.border
                  , a = o - s.border;
                if (e >= l && t <= a) {
                    this.dirty = e == n || t == o ? Re : hr,
                    e == l && t == a && (s.contentLost || s.dom.parentNode != this.contentDOM) ? s.dirty = he : s.markDirty(e - l, t - l);
                    return
                } else
                    s.dirty = s.dom == s.contentDOM && s.dom.parentNode == this.contentDOM && !s.children.length ? Re : he
            }
            n = o
        }
        this.dirty = Re
    }
    markParentsDirty() {
        let e = 1;
        for (let t = this.parent; t; t = t.parent,
        e++) {
            let n = e == 1 ? Re : hr;
            t.dirty < n && (t.dirty = n)
        }
    }
    get domAtom() {
        return !1
    }
    get ignoreForCoords() {
        return !1
    }
    isText(e) {
        return !1
    }
}
class Ls extends Rt {
    constructor(e, t, n, r) {
        let s, o = t.type.toDOM;
        if (typeof o == "function" && (o = o(n, () => {
            if (!s)
                return r;
            if (s.parent)
                return s.parent.posBeforeChild(s)
        }
        )),
        !t.type.spec.raw) {
            if (o.nodeType != 1) {
                let l = document.createElement("span");
                l.appendChild(o),
                o = l
            }
            o.contentEditable = "false",
            o.classList.add("ProseMirror-widget")
        }
        super(e, [], o, null),
        this.widget = t,
        this.widget = t,
        s = this
    }
    matchesWidget(e) {
        return this.dirty == te && e.type.eq(this.widget.type)
    }
    parseRule() {
        return {
            ignore: !0
        }
    }
    stopEvent(e) {
        let t = this.widget.spec.stopEvent;
        return t ? t(e) : !1
    }
    ignoreMutation(e) {
        return e.type != "selection" || this.widget.spec.ignoreSelection
    }
    destroy() {
        this.widget.type.destroy(this.dom),
        super.destroy()
    }
    get domAtom() {
        return !0
    }
    get side() {
        return this.widget.type.side
    }
}
class Vc extends Rt {
    constructor(e, t, n, r) {
        super(e, [], t, null),
        this.textDOM = n,
        this.text = r
    }
    get size() {
        return this.text.length
    }
    localPosFromDOM(e, t) {
        return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t
    }
    domFromPos(e) {
        return {
            node: this.textDOM,
            offset: e
        }
    }
    ignoreMutation(e) {
        return e.type === "characterData" && e.target.nodeValue == e.oldValue
    }
}
class _e extends Rt {
    constructor(e, t, n, r) {
        super(e, [], n, r),
        this.mark = t
    }
    static create(e, t, n, r) {
        let s = r.nodeViews[t.type.name]
          , o = s && s(t, r, n);
        return (!o || !o.dom) && (o = st.renderSpec(document, t.type.spec.toDOM(t, n), null, t.attrs)),
        new _e(e,t,o.dom,o.contentDOM || o.dom)
    }
    parseRule() {
        return this.dirty & he || this.mark.type.spec.reparseInView ? null : {
            mark: this.mark.type.name,
            attrs: this.mark.attrs,
            contentElement: this.contentDOM
        }
    }
    matchesMark(e) {
        return this.dirty != he && this.mark.eq(e)
    }
    markDirty(e, t) {
        if (super.markDirty(e, t),
        this.dirty != te) {
            let n = this.parent;
            for (; !n.node; )
                n = n.parent;
            n.dirty < this.dirty && (n.dirty = this.dirty),
            this.dirty = te
        }
    }
    slice(e, t, n) {
        let r = _e.create(this.parent, this.mark, !0, n)
          , s = this.children
          , o = this.size;
        t < o && (s = Ln(s, t, o, n)),
        e > 0 && (s = Ln(s, 0, e, n));
        for (let l = 0; l < s.length; l++)
            s[l].parent = r;
        return r.children = s,
        r
    }
}
class Te extends Rt {
    constructor(e, t, n, r, s, o, l, a, c) {
        super(e, [], s, o),
        this.node = t,
        this.outerDeco = n,
        this.innerDeco = r,
        this.nodeDOM = l
    }
    static create(e, t, n, r, s, o) {
        let l = s.nodeViews[t.type.name], a, c = l && l(t, s, () => {
            if (!a)
                return o;
            if (a.parent)
                return a.parent.posBeforeChild(a)
        }
        , n, r), h = c && c.dom, d = c && c.contentDOM;
        if (t.isText) {
            if (!h)
                h = document.createTextNode(t.text);
            else if (h.nodeType != 3)
                throw new RangeError("Text must be rendered as a DOM text node")
        } else
            h || ({dom: h, contentDOM: d} = st.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs));
        !d && !t.isText && h.nodeName != "BR" && (h.hasAttribute("contenteditable") || (h.contentEditable = "false"),
        t.type.spec.draggable && (h.draggable = !0));
        let f = h;
        return h = Ks(h, n, t),
        c ? a = new qc(e,t,n,r,h,d || null,f,c,s,o + 1) : t.isText ? new ln(e,t,n,r,h,f,s) : new Te(e,t,n,r,h,d || null,f,s,o + 1)
    }
    parseRule() {
        if (this.node.type.spec.reparseInView)
            return null;
        let e = {
            node: this.node.type.name,
            attrs: this.node.attrs
        };
        if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"),
        !this.contentDOM)
            e.getContent = () => this.node.content;
        else if (!this.contentLost)
            e.contentElement = this.contentDOM;
        else {
            for (let t = this.children.length - 1; t >= 0; t--) {
                let n = this.children[t];
                if (this.dom.contains(n.dom.parentNode)) {
                    e.contentElement = n.dom.parentNode;
                    break
                }
            }
            e.contentElement || (e.getContent = () => y.empty)
        }
        return e
    }
    matchesNode(e, t, n) {
        return this.dirty == te && e.eq(this.node) && Bn(t, this.outerDeco) && n.eq(this.innerDeco)
    }
    get size() {
        return this.node.nodeSize
    }
    get border() {
        return this.node.isLeaf ? 0 : 1
    }
    updateChildren(e, t) {
        let n = this.node.inlineContent
          , r = t
          , s = e.composing ? this.localCompositionInfo(e, t) : null
          , o = s && s.pos > -1 ? s : null
          , l = s && s.pos < 0
          , a = new Kc(this,o && o.node,e);
        Uc(this.node, this.innerDeco, (c, h, d) => {
            c.spec.marks ? a.syncToMarks(c.spec.marks, n, e) : c.type.side >= 0 && !d && a.syncToMarks(h == this.node.childCount ? M.none : this.node.child(h).marks, n, e),
            a.placeWidget(c, e, r)
        }
        , (c, h, d, f) => {
            a.syncToMarks(c.marks, n, e);
            let p;
            a.findNodeMatch(c, h, d, f) || l && e.state.selection.from > r && e.state.selection.to < r + c.nodeSize && (p = a.findIndexWithChild(s.node)) > -1 && a.updateNodeAt(c, h, d, p, e) || a.updateNextNode(c, h, d, e, f, r) || a.addNode(c, h, d, e, r),
            r += c.nodeSize
        }
        ),
        a.syncToMarks([], n, e),
        this.node.isTextblock && a.addTextblockHacks(),
        a.destroyRest(),
        (a.changed || this.dirty == Re) && (o && this.protectLocalComposition(e, o),
        qs(this.contentDOM, this.children, e),
        it && Hc(this.dom))
    }
    localCompositionInfo(e, t) {
        let {from: n, to: r} = e.state.selection;
        if (!(e.state.selection instanceof T) || n < t || r > t + this.node.content.size)
            return null;
        let s = e.input.compositionNode;
        if (!s || !this.dom.contains(s.parentNode))
            return null;
        if (this.node.inlineContent) {
            let o = s.nodeValue
              , l = $c(this.node.content, o, n - t, r - t);
            return l < 0 ? null : {
                node: s,
                pos: l,
                text: o
            }
        } else
            return {
                node: s,
                pos: -1,
                text: ""
            }
    }
    protectLocalComposition(e, {node: t, pos: n, text: r}) {
        if (this.getDesc(t))
            return;
        let s = t;
        for (; s.parentNode != this.contentDOM; s = s.parentNode) {
            for (; s.previousSibling; )
                s.parentNode.removeChild(s.previousSibling);
            for (; s.nextSibling; )
                s.parentNode.removeChild(s.nextSibling);
            s.pmViewDesc && (s.pmViewDesc = void 0)
        }
        let o = new Vc(this,s,t,r);
        e.input.compositionNodes.push(o),
        this.children = Ln(this.children, n, n + r.length, e, o)
    }
    update(e, t, n, r) {
        return this.dirty == he || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, n, r),
        !0)
    }
    updateInner(e, t, n, r) {
        this.updateOuterDeco(t),
        this.node = e,
        this.innerDeco = n,
        this.contentDOM && this.updateChildren(r, this.posAtStart),
        this.dirty = te
    }
    updateOuterDeco(e) {
        if (Bn(e, this.outerDeco))
            return;
        let t = this.nodeDOM.nodeType != 1
          , n = this.dom;
        this.dom = _s(this.dom, this.nodeDOM, zn(this.outerDeco, this.node, t), zn(e, this.node, t)),
        this.dom != n && (n.pmViewDesc = void 0,
        this.dom.pmViewDesc = this),
        this.outerDeco = e
    }
    selectNode() {
        this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"),
        (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0)
    }
    deselectNode() {
        this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"),
        (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable"))
    }
    get domAtom() {
        return this.node.isAtom
    }
}
function dr(i, e, t, n, r) {
    Ks(n, e, i);
    let s = new Te(void 0,i,e,t,n,n,n,r,0);
    return s.contentDOM && s.updateChildren(r, 0),
    s
}
class ln extends Te {
    constructor(e, t, n, r, s, o, l) {
        super(e, t, n, r, s, null, o, l, 0)
    }
    parseRule() {
        let e = this.nodeDOM.parentNode;
        for (; e && e != this.dom && !e.pmIsDeco; )
            e = e.parentNode;
        return {
            skip: e || !0
        }
    }
    update(e, t, n, r) {
        return this.dirty == he || this.dirty != te && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t),
        (this.dirty != te || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text,
        r.trackWrites == this.nodeDOM && (r.trackWrites = null)),
        this.node = e,
        this.dirty = te,
        !0)
    }
    inParent() {
        let e = this.parent.contentDOM;
        for (let t = this.nodeDOM; t; t = t.parentNode)
            if (t == e)
                return !0;
        return !1
    }
    domFromPos(e) {
        return {
            node: this.nodeDOM,
            offset: e
        }
    }
    localPosFromDOM(e, t, n) {
        return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, n)
    }
    ignoreMutation(e) {
        return e.type != "characterData" && e.type != "selection"
    }
    slice(e, t, n) {
        let r = this.node.cut(e, t)
          , s = document.createTextNode(r.text);
        return new ln(this.parent,r,this.outerDeco,this.innerDeco,s,s,n)
    }
    markDirty(e, t) {
        super.markDirty(e, t),
        this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = he)
    }
    get domAtom() {
        return !1
    }
    isText(e) {
        return this.node.text == e
    }
}
class Vs extends Rt {
    parseRule() {
        return {
            ignore: !0
        }
    }
    matchesHack(e) {
        return this.dirty == te && this.dom.nodeName == e
    }
    get domAtom() {
        return !0
    }
    get ignoreForCoords() {
        return this.dom.nodeName == "IMG"
    }
}
class qc extends Te {
    constructor(e, t, n, r, s, o, l, a, c, h) {
        super(e, t, n, r, s, o, l, c, h),
        this.spec = a
    }
    update(e, t, n, r) {
        if (this.dirty == he)
            return !1;
        if (this.spec.update) {
            let s = this.spec.update(e, t, n);
            return s && this.updateInner(e, t, n, r),
            s
        } else
            return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, n, r)
    }
    selectNode() {
        this.spec.selectNode ? this.spec.selectNode() : super.selectNode()
    }
    deselectNode() {
        this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode()
    }
    setSelection(e, t, n, r) {
        this.spec.setSelection ? this.spec.setSelection(e, t, n) : super.setSelection(e, t, n, r)
    }
    destroy() {
        this.spec.destroy && this.spec.destroy(),
        super.destroy()
    }
    stopEvent(e) {
        return this.spec.stopEvent ? this.spec.stopEvent(e) : !1
    }
    ignoreMutation(e) {
        return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e)
    }
}
function qs(i, e, t) {
    let n = i.firstChild
      , r = !1;
    for (let s = 0; s < e.length; s++) {
        let o = e[s]
          , l = o.dom;
        if (l.parentNode == i) {
            for (; l != n; )
                n = fr(n),
                r = !0;
            n = n.nextSibling
        } else
            r = !0,
            i.insertBefore(l, n);
        if (o instanceof _e) {
            let a = n ? n.previousSibling : i.lastChild;
            qs(o.contentDOM, o.children, t),
            n = a ? a.nextSibling : i.firstChild
        }
    }
    for (; n; )
        n = fr(n),
        r = !0;
    r && t.trackWrites == i && (t.trackWrites = null)
}
const xt = function(i) {
    i && (this.nodeName = i)
};
xt.prototype = Object.create(null);
const ve = [new xt];
function zn(i, e, t) {
    if (i.length == 0)
        return ve;
    let n = t ? ve[0] : new xt
      , r = [n];
    for (let s = 0; s < i.length; s++) {
        let o = i[s].type.attrs;
        if (o) {
            o.nodeName && r.push(n = new xt(o.nodeName));
            for (let l in o) {
                let a = o[l];
                a != null && (t && r.length == 1 && r.push(n = new xt(e.isInline ? "span" : "div")),
                l == "class" ? n.class = (n.class ? n.class + " " : "") + a : l == "style" ? n.style = (n.style ? n.style + ";" : "") + a : l != "nodeName" && (n[l] = a))
            }
        }
    }
    return r
}
function _s(i, e, t, n) {
    if (t == ve && n == ve)
        return e;
    let r = e;
    for (let s = 0; s < n.length; s++) {
        let o = n[s]
          , l = t[s];
        if (s) {
            let a;
            l && l.nodeName == o.nodeName && r != i && (a = r.parentNode) && a.nodeName.toLowerCase() == o.nodeName || (a = document.createElement(o.nodeName),
            a.pmIsDeco = !0,
            a.appendChild(r),
            l = ve[0]),
            r = a
        }
        _c(r, l || ve[0], o)
    }
    return r
}
function _c(i, e, t) {
    for (let n in e)
        n != "class" && n != "style" && n != "nodeName" && !(n in t) && i.removeAttribute(n);
    for (let n in t)
        n != "class" && n != "style" && n != "nodeName" && t[n] != e[n] && i.setAttribute(n, t[n]);
    if (e.class != t.class) {
        let n = e.class ? e.class.split(" ").filter(Boolean) : []
          , r = t.class ? t.class.split(" ").filter(Boolean) : [];
        for (let s = 0; s < n.length; s++)
            r.indexOf(n[s]) == -1 && i.classList.remove(n[s]);
        for (let s = 0; s < r.length; s++)
            n.indexOf(r[s]) == -1 && i.classList.add(r[s]);
        i.classList.length == 0 && i.removeAttribute("class")
    }
    if (e.style != t.style) {
        if (e.style) {
            let n = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, r;
            for (; r = n.exec(e.style); )
                i.style.removeProperty(r[1])
        }
        t.style && (i.style.cssText += t.style)
    }
}
function Ks(i, e, t) {
    return _s(i, i, ve, zn(e, t, i.nodeType != 1))
}
function Bn(i, e) {
    if (i.length != e.length)
        return !1;
    for (let t = 0; t < i.length; t++)
        if (!i[t].type.eq(e[t].type))
            return !1;
    return !0
}
function fr(i) {
    let e = i.nextSibling;
    return i.parentNode.removeChild(i),
    e
}
class Kc {
    constructor(e, t, n) {
        this.lock = t,
        this.view = n,
        this.index = 0,
        this.stack = [],
        this.changed = !1,
        this.top = e,
        this.preMatch = Jc(e.node.content, e)
    }
    destroyBetween(e, t) {
        if (e != t) {
            for (let n = e; n < t; n++)
                this.top.children[n].destroy();
            this.top.children.splice(e, t - e),
            this.changed = !0
        }
    }
    destroyRest() {
        this.destroyBetween(this.index, this.top.children.length)
    }
    syncToMarks(e, t, n) {
        let r = 0
          , s = this.stack.length >> 1
          , o = Math.min(s, e.length);
        for (; r < o && (r == s - 1 ? this.top : this.stack[r + 1 << 1]).matchesMark(e[r]) && e[r].type.spec.spanning !== !1; )
            r++;
        for (; r < s; )
            this.destroyRest(),
            this.top.dirty = te,
            this.index = this.stack.pop(),
            this.top = this.stack.pop(),
            s--;
        for (; s < e.length; ) {
            this.stack.push(this.top, this.index + 1);
            let l = -1;
            for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
                let c = this.top.children[a];
                if (c.matchesMark(e[s]) && !this.isLocked(c.dom)) {
                    l = a;
                    break
                }
            }
            if (l > -1)
                l > this.index && (this.changed = !0,
                this.destroyBetween(this.index, l)),
                this.top = this.top.children[this.index];
            else {
                let a = _e.create(this.top, e[s], t, n);
                this.top.children.splice(this.index, 0, a),
                this.top = a,
                this.changed = !0
            }
            this.index = 0,
            s++
        }
    }
    findNodeMatch(e, t, n, r) {
        let s = -1, o;
        if (r >= this.preMatch.index && (o = this.preMatch.matches[r - this.preMatch.index]).parent == this.top && o.matchesNode(e, t, n))
            s = this.top.children.indexOf(o, this.index);
        else
            for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
                let c = this.top.children[l];
                if (c.matchesNode(e, t, n) && !this.preMatch.matched.has(c)) {
                    s = l;
                    break
                }
            }
        return s < 0 ? !1 : (this.destroyBetween(this.index, s),
        this.index++,
        !0)
    }
    updateNodeAt(e, t, n, r, s) {
        let o = this.top.children[r];
        return o.dirty == he && o.dom == o.contentDOM && (o.dirty = Re),
        o.update(e, t, n, s) ? (this.destroyBetween(this.index, r),
        this.index++,
        !0) : !1
    }
    findIndexWithChild(e) {
        for (; ; ) {
            let t = e.parentNode;
            if (!t)
                return -1;
            if (t == this.top.contentDOM) {
                let n = e.pmViewDesc;
                if (n) {
                    for (let r = this.index; r < this.top.children.length; r++)
                        if (this.top.children[r] == n)
                            return r
                }
                return -1
            }
            e = t
        }
    }
    updateNextNode(e, t, n, r, s, o) {
        for (let l = this.index; l < this.top.children.length; l++) {
            let a = this.top.children[l];
            if (a instanceof Te) {
                let c = this.preMatch.matched.get(a);
                if (c != null && c != s)
                    return !1;
                let h = a.dom, d, f = this.isLocked(h) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != he && Bn(t, a.outerDeco));
                if (!f && a.update(e, t, n, r))
                    return this.destroyBetween(this.index, l),
                    a.dom != h && (this.changed = !0),
                    this.index++,
                    !0;
                if (!f && (d = this.recreateWrapper(a, e, t, n, r, o)))
                    return this.top.children[this.index] = d,
                    d.contentDOM && (d.dirty = Re,
                    d.updateChildren(r, o + 1),
                    d.dirty = te),
                    this.changed = !0,
                    this.index++,
                    !0;
                break
            }
        }
        return !1
    }
    recreateWrapper(e, t, n, r, s, o) {
        if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content))
            return null;
        let l = Te.create(this.top, t, n, r, s, o);
        if (l.contentDOM) {
            l.children = e.children,
            e.children = [];
            for (let a of l.children)
                a.parent = l
        }
        return e.destroy(),
        l
    }
    addNode(e, t, n, r, s) {
        let o = Te.create(this.top, e, t, n, r, s);
        o.contentDOM && o.updateChildren(r, s + 1),
        this.top.children.splice(this.index++, 0, o),
        this.changed = !0
    }
    placeWidget(e, t, n) {
        let r = this.index < this.top.children.length ? this.top.children[this.index] : null;
        if (r && r.matchesWidget(e) && (e == r.widget || !r.widget.type.toDOM.parentNode))
            this.index++;
        else {
            let s = new Ls(this.top,e,t,n);
            this.top.children.splice(this.index++, 0, s),
            this.changed = !0
        }
    }
    addTextblockHacks() {
        let e = this.top.children[this.index - 1]
          , t = this.top;
        for (; e instanceof _e; )
            t = e,
            e = t.children[t.children.length - 1];
        (!e || !(e instanceof ln) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((J || V) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t),
        this.addHackNode("BR", this.top))
    }
    addHackNode(e, t) {
        if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
            this.index++;
        else {
            let n = document.createElement(e);
            e == "IMG" && (n.className = "ProseMirror-separator",
            n.alt = ""),
            e == "BR" && (n.className = "ProseMirror-trailingBreak");
            let r = new Vs(this.top,[],n,null);
            t != this.top ? t.children.push(r) : t.children.splice(this.index++, 0, r),
            this.changed = !0
        }
    }
    isLocked(e) {
        return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode))
    }
}
function Jc(i, e) {
    let t = e
      , n = t.children.length
      , r = i.childCount
      , s = new Map
      , o = [];
    e: for (; r > 0; ) {
        let l;
        for (; ; )
            if (n) {
                let c = t.children[n - 1];
                if (c instanceof _e)
                    t = c,
                    n = c.children.length;
                else {
                    l = c,
                    n--;
                    break
                }
            } else {
                if (t == e)
                    break e;
                n = t.parent.children.indexOf(t),
                t = t.parent
            }
        let a = l.node;
        if (a) {
            if (a != i.child(r - 1))
                break;
            --r,
            s.set(l, r),
            o.push(l)
        }
    }
    return {
        index: r,
        matched: s,
        matches: o.reverse()
    }
}
function Wc(i, e) {
    return i.type.side - e.type.side
}
function Uc(i, e, t, n) {
    let r = e.locals(i)
      , s = 0;
    if (r.length == 0) {
        for (let c = 0; c < i.childCount; c++) {
            let h = i.child(c);
            n(h, r, e.forChild(s, h), c),
            s += h.nodeSize
        }
        return
    }
    let o = 0
      , l = []
      , a = null;
    for (let c = 0; ; ) {
        let h, d;
        for (; o < r.length && r[o].to == s; ) {
            let g = r[o++];
            g.widget && (h ? (d || (d = [h])).push(g) : h = g)
        }
        if (h)
            if (d) {
                d.sort(Wc);
                for (let g = 0; g < d.length; g++)
                    t(d[g], c, !!a)
            } else
                t(h, c, !!a);
        let f, p;
        if (a)
            p = -1,
            f = a,
            a = null;
        else if (c < i.childCount)
            p = c,
            f = i.child(c++);
        else
            break;
        for (let g = 0; g < l.length; g++)
            l[g].to <= s && l.splice(g--, 1);
        for (; o < r.length && r[o].from <= s && r[o].to > s; )
            l.push(r[o++]);
        let u = s + f.nodeSize;
        if (f.isText) {
            let g = u;
            o < r.length && r[o].from < g && (g = r[o].from);
            for (let k = 0; k < l.length; k++)
                l[k].to < g && (g = l[k].to);
            g < u && (a = f.cut(g - s),
            f = f.cut(0, g - s),
            u = g,
            p = -1)
        } else
            for (; o < r.length && r[o].to < u; )
                o++;
        let m = f.isInline && !f.isLeaf ? l.filter(g => !g.inline) : l.slice();
        n(f, m, e.forChild(s, f), p),
        s = u
    }
}
function Hc(i) {
    if (i.nodeName == "UL" || i.nodeName == "OL") {
        let e = i.style.cssText;
        i.style.cssText = e + "; list-style: square !important",
        window.getComputedStyle(i).listStyle,
        i.style.cssText = e
    }
}
function $c(i, e, t, n) {
    for (let r = 0, s = 0; r < i.childCount && s <= n; ) {
        let o = i.child(r++)
          , l = s;
        if (s += o.nodeSize,
        !o.isText)
            continue;
        let a = o.text;
        for (; r < i.childCount; ) {
            let c = i.child(r++);
            if (s += c.nodeSize,
            !c.isText)
                break;
            a += c.text
        }
        if (s >= t) {
            if (s >= n && a.slice(n - e.length - l, n - l) == e)
                return n - e.length;
            let c = l < n ? a.lastIndexOf(e, n - l - 1) : -1;
            if (c >= 0 && c + e.length + l >= t)
                return l + c;
            if (t == n && a.length >= n + e.length - l && a.slice(n - l, n - l + e.length) == e)
                return n
        }
    }
    return -1
}
function Ln(i, e, t, n, r) {
    let s = [];
    for (let o = 0, l = 0; o < i.length; o++) {
        let a = i[o]
          , c = l
          , h = l += a.size;
        c >= t || h <= e ? s.push(a) : (c < e && s.push(a.slice(0, e - c, n)),
        r && (s.push(r),
        r = void 0),
        h > t && s.push(a.slice(t - c, a.size, n)))
    }
    return s
}
function ei(i, e=null) {
    let t = i.domSelectionRange()
      , n = i.state.doc;
    if (!t.focusNode)
        return null;
    let r = i.docView.nearestDesc(t.focusNode)
      , s = r && r.size == 0
      , o = i.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
    if (o < 0)
        return null;
    let l = n.resolve(o), a, c;
    if (on(t)) {
        for (a = l; r && !r.node; )
            r = r.parent;
        let h = r.node;
        if (r && h.isAtom && b.isSelectable(h) && r.parent && !(h.isInline && kc(t.focusNode, t.focusOffset, r.dom))) {
            let d = r.posBefore;
            c = new b(o == d ? l : n.resolve(d))
        }
    } else {
        let h = i.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
        if (h < 0)
            return null;
        a = n.resolve(h)
    }
    if (!c) {
        let h = e == "pointer" || i.state.selection.head < l.pos && !s ? 1 : -1;
        c = ti(i, a, l, h)
    }
    return c
}
function Js(i) {
    return i.editable ? i.hasFocus() : Us(i) && document.activeElement && document.activeElement.contains(i.dom)
}
function pe(i, e=!1) {
    let t = i.state.selection;
    if (Ws(i, t),
    !!Js(i)) {
        if (!e && i.input.mouseDown && i.input.mouseDown.allowDefault && V) {
            let n = i.domSelectionRange()
              , r = i.domObserver.currentSelection;
            if (n.anchorNode && r.anchorNode && qe(n.anchorNode, n.anchorOffset, r.anchorNode, r.anchorOffset)) {
                i.input.mouseDown.delayedSelectionSync = !0,
                i.domObserver.setCurSelection();
                return
            }
        }
        if (i.domObserver.disconnectSelection(),
        i.cursorWrapper)
            jc(i);
        else {
            let {anchor: n, head: r} = t, s, o;
            ur && !(t instanceof T) && (t.$from.parent.inlineContent || (s = pr(i, t.from)),
            !t.empty && !t.$from.parent.inlineContent && (o = pr(i, t.to))),
            i.docView.setSelection(n, r, i.root, e),
            ur && (s && mr(s),
            o && mr(o)),
            t.visible ? i.dom.classList.remove("ProseMirror-hideselection") : (i.dom.classList.add("ProseMirror-hideselection"),
            "onselectionchange"in document && Gc(i))
        }
        i.domObserver.setCurSelection(),
        i.domObserver.connectSelection()
    }
}
const ur = J || V && Is < 63;
function pr(i, e) {
    let {node: t, offset: n} = i.docView.domFromPos(e, 0)
      , r = n < t.childNodes.length ? t.childNodes[n] : null
      , s = n ? t.childNodes[n - 1] : null;
    if (J && r && r.contentEditable == "false")
        return Mn(r);
    if ((!r || r.contentEditable == "false") && (!s || s.contentEditable == "false")) {
        if (r)
            return Mn(r);
        if (s)
            return Mn(s)
    }
}
function Mn(i) {
    return i.contentEditable = "true",
    J && i.draggable && (i.draggable = !1,
    i.wasDraggable = !0),
    i
}
function mr(i) {
    i.contentEditable = "false",
    i.wasDraggable && (i.draggable = !0,
    i.wasDraggable = null)
}
function Gc(i) {
    let e = i.dom.ownerDocument;
    e.removeEventListener("selectionchange", i.input.hideSelectionGuard);
    let t = i.domSelectionRange()
      , n = t.anchorNode
      , r = t.anchorOffset;
    e.addEventListener("selectionchange", i.input.hideSelectionGuard = () => {
        (t.anchorNode != n || t.anchorOffset != r) && (e.removeEventListener("selectionchange", i.input.hideSelectionGuard),
        setTimeout( () => {
            (!Js(i) || i.state.selection.visible) && i.dom.classList.remove("ProseMirror-hideselection")
        }
        , 20))
    }
    )
}
function jc(i) {
    let e = i.domSelection()
      , t = document.createRange()
      , n = i.cursorWrapper.dom
      , r = n.nodeName == "IMG";
    r ? t.setEnd(n.parentNode, F(n) + 1) : t.setEnd(n, 0),
    t.collapse(!1),
    e.removeAllRanges(),
    e.addRange(t),
    !r && !i.state.selection.visible && G && Ce <= 11 && (n.disabled = !0,
    n.disabled = !1)
}
function Ws(i, e) {
    if (e instanceof b) {
        let t = i.docView.descAt(e.from);
        t != i.lastSelectedViewDesc && (gr(i),
        t && t.selectNode(),
        i.lastSelectedViewDesc = t)
    } else
        gr(i)
}
function gr(i) {
    i.lastSelectedViewDesc && (i.lastSelectedViewDesc.parent && i.lastSelectedViewDesc.deselectNode(),
    i.lastSelectedViewDesc = void 0)
}
function ti(i, e, t, n) {
    return i.someProp("createSelectionBetween", r => r(i, e, t)) || T.between(e, t, n)
}
function yr(i) {
    return i.editable && !i.hasFocus() ? !1 : Us(i)
}
function Us(i) {
    let e = i.domSelectionRange();
    if (!e.anchorNode)
        return !1;
    try {
        return i.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (i.editable || i.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode))
    } catch {
        return !1
    }
}
function Yc(i) {
    let e = i.docView.domFromPos(i.state.selection.anchor, 0)
      , t = i.domSelectionRange();
    return qe(e.node, e.offset, t.anchorNode, t.anchorOffset)
}
function Vn(i, e) {
    let {$anchor: t, $head: n} = i.selection
      , r = e > 0 ? t.max(n) : t.min(n)
      , s = r.parent.inlineContent ? r.depth ? i.doc.resolve(e > 0 ? r.after() : r.before()) : null : r;
    return s && C.findFrom(s, e)
}
function ge(i, e) {
    return i.dispatch(i.state.tr.setSelection(e).scrollIntoView()),
    !0
}
function Sr(i, e, t) {
    let n = i.state.selection;
    if (n instanceof T)
        if (t.indexOf("s") > -1) {
            let {$head: r} = n
              , s = r.textOffset ? null : e < 0 ? r.nodeBefore : r.nodeAfter;
            if (!s || s.isText || !s.isLeaf)
                return !1;
            let o = i.state.doc.resolve(r.pos + s.nodeSize * (e < 0 ? -1 : 1));
            return ge(i, new T(n.$anchor,o))
        } else if (n.empty) {
            if (i.endOfTextblock(e > 0 ? "forward" : "backward")) {
                let r = Vn(i.state, e);
                return r && r instanceof b ? ge(i, r) : !1
            } else if (!(ee && t.indexOf("m") > -1)) {
                let r = n.$head, s = r.textOffset ? null : e < 0 ? r.nodeBefore : r.nodeAfter, o;
                if (!s || s.isText)
                    return !1;
                let l = e < 0 ? r.pos - s.nodeSize : r.pos;
                return s.isAtom || (o = i.docView.descAt(l)) && !o.contentDOM ? b.isSelectable(s) ? ge(i, new b(e < 0 ? i.state.doc.resolve(r.pos - s.nodeSize) : r)) : It ? ge(i, new T(i.state.doc.resolve(e < 0 ? l : l + s.nodeSize))) : !1 : !1
            }
        } else
            return !1;
    else {
        if (n instanceof b && n.node.isInline)
            return ge(i, new T(e > 0 ? n.$to : n.$from));
        {
            let r = Vn(i.state, e);
            return r ? ge(i, r) : !1
        }
    }
}
function Qt(i) {
    return i.nodeType == 3 ? i.nodeValue.length : i.childNodes.length
}
function Ct(i, e) {
    let t = i.pmViewDesc;
    return t && t.size == 0 && (e < 0 || i.nextSibling || i.nodeName != "BR")
}
function Ue(i, e) {
    return e < 0 ? Xc(i) : Qc(i)
}
function Xc(i) {
    let e = i.domSelectionRange()
      , t = e.focusNode
      , n = e.focusOffset;
    if (!t)
        return;
    let r, s, o = !1;
    for (ie && t.nodeType == 1 && n < Qt(t) && Ct(t.childNodes[n], -1) && (o = !0); ; )
        if (n > 0) {
            if (t.nodeType != 1)
                break;
            {
                let l = t.childNodes[n - 1];
                if (Ct(l, -1))
                    r = t,
                    s = --n;
                else if (l.nodeType == 3)
                    t = l,
                    n = t.nodeValue.length;
                else
                    break
            }
        } else {
            if (Hs(t))
                break;
            {
                let l = t.previousSibling;
                for (; l && Ct(l, -1); )
                    r = t.parentNode,
                    s = F(l),
                    l = l.previousSibling;
                if (l)
                    t = l,
                    n = Qt(t);
                else {
                    if (t = t.parentNode,
                    t == i.dom)
                        break;
                    n = 0
                }
            }
        }
    o ? qn(i, t, n) : r && qn(i, r, s)
}
function Qc(i) {
    let e = i.domSelectionRange()
      , t = e.focusNode
      , n = e.focusOffset;
    if (!t)
        return;
    let r = Qt(t), s, o;
    for (; ; )
        if (n < r) {
            if (t.nodeType != 1)
                break;
            let l = t.childNodes[n];
            if (Ct(l, 1))
                s = t,
                o = ++n;
            else
                break
        } else {
            if (Hs(t))
                break;
            {
                let l = t.nextSibling;
                for (; l && Ct(l, 1); )
                    s = l.parentNode,
                    o = F(l) + 1,
                    l = l.nextSibling;
                if (l)
                    t = l,
                    n = 0,
                    r = Qt(t);
                else {
                    if (t = t.parentNode,
                    t == i.dom)
                        break;
                    n = r = 0
                }
            }
        }
    s && qn(i, s, o)
}
function Hs(i) {
    let e = i.pmViewDesc;
    return e && e.node && e.node.isBlock
}
function Zc(i, e) {
    for (; i && e == i.childNodes.length && !At(i); )
        e = F(i) + 1,
        i = i.parentNode;
    for (; i && e < i.childNodes.length; ) {
        let t = i.childNodes[e];
        if (t.nodeType == 3)
            return t;
        if (t.nodeType == 1 && t.contentEditable == "false")
            break;
        i = t,
        e = 0
    }
}
function eh(i, e) {
    for (; i && !e && !At(i); )
        e = F(i),
        i = i.parentNode;
    for (; i && e; ) {
        let t = i.childNodes[e - 1];
        if (t.nodeType == 3)
            return t;
        if (t.nodeType == 1 && t.contentEditable == "false")
            break;
        i = t,
        e = i.childNodes.length
    }
}
function qn(i, e, t) {
    if (e.nodeType != 3) {
        let s, o;
        (o = Zc(e, t)) ? (e = o,
        t = 0) : (s = eh(e, t)) && (e = s,
        t = s.nodeValue.length)
    }
    let n = i.domSelection();
    if (on(n)) {
        let s = document.createRange();
        s.setEnd(e, t),
        s.setStart(e, t),
        n.removeAllRanges(),
        n.addRange(s)
    } else
        n.extend && n.extend(e, t);
    i.domObserver.setCurSelection();
    let {state: r} = i;
    setTimeout( () => {
        i.state == r && pe(i)
    }
    , 50)
}
function kr(i, e) {
    let t = i.state.doc.resolve(e);
    if (!(V || Cc) && t.parent.inlineContent) {
        let r = i.coordsAtPos(e);
        if (e > t.start()) {
            let s = i.coordsAtPos(e - 1)
              , o = (s.top + s.bottom) / 2;
            if (o > r.top && o < r.bottom && Math.abs(s.left - r.left) > 1)
                return s.left < r.left ? "ltr" : "rtl"
        }
        if (e < t.end()) {
            let s = i.coordsAtPos(e + 1)
              , o = (s.top + s.bottom) / 2;
            if (o > r.top && o < r.bottom && Math.abs(s.left - r.left) > 1)
                return s.left > r.left ? "ltr" : "rtl"
        }
    }
    return getComputedStyle(i.dom).direction == "rtl" ? "rtl" : "ltr"
}
function br(i, e, t) {
    let n = i.state.selection;
    if (n instanceof T && !n.empty || t.indexOf("s") > -1 || ee && t.indexOf("m") > -1)
        return !1;
    let {$from: r, $to: s} = n;
    if (!r.parent.inlineContent || i.endOfTextblock(e < 0 ? "up" : "down")) {
        let o = Vn(i.state, e);
        if (o && o instanceof b)
            return ge(i, o)
    }
    if (!r.parent.inlineContent) {
        let o = e < 0 ? r : s
          , l = n instanceof X ? C.near(o, e) : C.findFrom(o, e);
        return l ? ge(i, l) : !1
    }
    return !1
}
function xr(i, e) {
    if (!(i.state.selection instanceof T))
        return !0;
    let {$head: t, $anchor: n, empty: r} = i.state.selection;
    if (!t.sameParent(n))
        return !0;
    if (!r)
        return !1;
    if (i.endOfTextblock(e > 0 ? "forward" : "backward"))
        return !0;
    let s = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
    if (s && !s.isText) {
        let o = i.state.tr;
        return e < 0 ? o.delete(t.pos - s.nodeSize, t.pos) : o.delete(t.pos, t.pos + s.nodeSize),
        i.dispatch(o),
        !0
    }
    return !1
}
function Cr(i, e, t) {
    i.domObserver.stop(),
    e.contentEditable = t,
    i.domObserver.start()
}
function th(i) {
    if (!J || i.state.selection.$head.parentOffset > 0)
        return !1;
    let {focusNode: e, focusOffset: t} = i.domSelectionRange();
    if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
        let n = e.firstChild;
        Cr(i, n, "true"),
        setTimeout( () => Cr(i, n, "false"), 20)
    }
    return !1
}
function nh(i) {
    let e = "";
    return i.ctrlKey && (e += "c"),
    i.metaKey && (e += "m"),
    i.altKey && (e += "a"),
    i.shiftKey && (e += "s"),
    e
}
function ih(i, e) {
    let t = e.keyCode
      , n = nh(e);
    if (t == 8 || ee && t == 72 && n == "c")
        return xr(i, -1) || Ue(i, -1);
    if (t == 46 && !e.shiftKey || ee && t == 68 && n == "c")
        return xr(i, 1) || Ue(i, 1);
    if (t == 13 || t == 27)
        return !0;
    if (t == 37 || ee && t == 66 && n == "c") {
        let r = t == 37 ? kr(i, i.state.selection.from) == "ltr" ? -1 : 1 : -1;
        return Sr(i, r, n) || Ue(i, r)
    } else if (t == 39 || ee && t == 70 && n == "c") {
        let r = t == 39 ? kr(i, i.state.selection.from) == "ltr" ? 1 : -1 : 1;
        return Sr(i, r, n) || Ue(i, r)
    } else {
        if (t == 38 || ee && t == 80 && n == "c")
            return br(i, -1, n) || Ue(i, -1);
        if (t == 40 || ee && t == 78 && n == "c")
            return th(i) || br(i, 1, n) || Ue(i, 1);
        if (n == (ee ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
            return !0
    }
    return !1
}
function $s(i, e) {
    i.someProp("transformCopied", p => {
        e = p(e, i)
    }
    );
    let t = []
      , {content: n, openStart: r, openEnd: s} = e;
    for (; r > 1 && s > 1 && n.childCount == 1 && n.firstChild.childCount == 1; ) {
        r--,
        s--;
        let p = n.firstChild;
        t.push(p.type.name, p.attrs != p.type.defaultAttrs ? p.attrs : null),
        n = p.content
    }
    let o = i.someProp("clipboardSerializer") || st.fromSchema(i.state.schema)
      , l = Zs()
      , a = l.createElement("div");
    a.appendChild(o.serializeFragment(n, {
        document: l
    }));
    let c = a.firstChild, h, d = 0;
    for (; c && c.nodeType == 1 && (h = Qs[c.nodeName.toLowerCase()]); ) {
        for (let p = h.length - 1; p >= 0; p--) {
            let u = l.createElement(h[p]);
            for (; a.firstChild; )
                u.appendChild(a.firstChild);
            a.appendChild(u),
            d++
        }
        c = a.firstChild
    }
    c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${r} ${s}${d ? ` -${d}` : ""} ${JSON.stringify(t)}`);
    let f = i.someProp("clipboardTextSerializer", p => p(e, i)) || e.content.textBetween(0, e.content.size, `

`);
    return {
        dom: a,
        text: f,
        slice: e
    }
}
function Gs(i, e, t, n, r) {
    let s = r.parent.type.spec.code, o, l;
    if (!t && !e)
        return null;
    let a = e && (n || s || !t);
    if (a) {
        if (i.someProp("transformPastedText", f => {
            e = f(e, s || n, i)
        }
        ),
        s)
            return e ? new S(y.from(i.state.schema.text(e.replace(/\r\n?/g, `
`))),0,0) : S.empty;
        let d = i.someProp("clipboardTextParser", f => f(e, r, n, i));
        if (d)
            l = d;
        else {
            let f = r.marks()
              , {schema: p} = i.state
              , u = st.fromSchema(p);
            o = document.createElement("div"),
            e.split(/(?:\r\n?|\n)+/).forEach(m => {
                let g = o.appendChild(document.createElement("p"));
                m && g.appendChild(u.serializeNode(p.text(m, f)))
            }
            )
        }
    } else
        i.someProp("transformPastedHTML", d => {
            t = d(t, i)
        }
        ),
        o = oh(t),
        It && lh(o);
    let c = o && o.querySelector("[data-pm-slice]")
      , h = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
    if (h && h[3])
        for (let d = +h[3]; d > 0; d--) {
            let f = o.firstChild;
            for (; f && f.nodeType != 1; )
                f = f.nextSibling;
            if (!f)
                break;
            o = f
        }
    if (l || (l = (i.someProp("clipboardParser") || i.someProp("domParser") || Mt.fromSchema(i.state.schema)).parseSlice(o, {
        preserveWhitespace: !!(a || h),
        context: r,
        ruleFromNode(f) {
            return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !rh.test(f.parentNode.nodeName) ? {
                ignore: !0
            } : null
        }
    })),
    h)
        l = ah(Tr(l, +h[1], +h[2]), h[4]);
    else if (l = S.maxOpen(sh(l.content, r), !0),
    l.openStart || l.openEnd) {
        let d = 0
          , f = 0;
        for (let p = l.content.firstChild; d < l.openStart && !p.type.spec.isolating; d++,
        p = p.firstChild)
            ;
        for (let p = l.content.lastChild; f < l.openEnd && !p.type.spec.isolating; f++,
        p = p.lastChild)
            ;
        l = Tr(l, d, f)
    }
    return i.someProp("transformPasted", d => {
        l = d(l, i)
    }
    ),
    l
}
const rh = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function sh(i, e) {
    if (i.childCount < 2)
        return i;
    for (let t = e.depth; t >= 0; t--) {
        let r = e.node(t).contentMatchAt(e.index(t)), s, o = [];
        if (i.forEach(l => {
            if (!o)
                return;
            let a = r.findWrapping(l.type), c;
            if (!a)
                return o = null;
            if (c = o.length && s.length && Ys(a, s, l, o[o.length - 1], 0))
                o[o.length - 1] = c;
            else {
                o.length && (o[o.length - 1] = Xs(o[o.length - 1], s.length));
                let h = js(l, a);
                o.push(h),
                r = r.matchType(h.type),
                s = a
            }
        }
        ),
        o)
            return y.from(o)
    }
    return i
}
function js(i, e, t=0) {
    for (let n = e.length - 1; n >= t; n--)
        i = e[n].create(null, y.from(i));
    return i
}
function Ys(i, e, t, n, r) {
    if (r < i.length && r < e.length && i[r] == e[r]) {
        let s = Ys(i, e, t, n.lastChild, r + 1);
        if (s)
            return n.copy(n.content.replaceChild(n.childCount - 1, s));
        if (n.contentMatchAt(n.childCount).matchType(r == i.length - 1 ? t.type : i[r + 1]))
            return n.copy(n.content.append(y.from(js(t, i, r + 1))))
    }
}
function Xs(i, e) {
    if (e == 0)
        return i;
    let t = i.content.replaceChild(i.childCount - 1, Xs(i.lastChild, e - 1))
      , n = i.contentMatchAt(i.childCount).fillBefore(y.empty, !0);
    return i.copy(t.append(n))
}
function _n(i, e, t, n, r, s) {
    let o = e < 0 ? i.firstChild : i.lastChild
      , l = o.content;
    return i.childCount > 1 && (s = 0),
    r < n - 1 && (l = _n(l, e, t, n, r + 1, s)),
    r >= t && (l = e < 0 ? o.contentMatchAt(0).fillBefore(l, s <= r).append(l) : l.append(o.contentMatchAt(o.childCount).fillBefore(y.empty, !0))),
    i.replaceChild(e < 0 ? 0 : i.childCount - 1, o.copy(l))
}
function Tr(i, e, t) {
    return e < i.openStart && (i = new S(_n(i.content, -1, e, i.openStart, 0, i.openEnd),e,i.openEnd)),
    t < i.openEnd && (i = new S(_n(i.content, 1, t, i.openEnd, 0, 0),i.openStart,t)),
    i
}
const Qs = {
    thead: ["table"],
    tbody: ["table"],
    tfoot: ["table"],
    caption: ["table"],
    colgroup: ["table"],
    col: ["table", "colgroup"],
    tr: ["table", "tbody"],
    td: ["table", "tbody", "tr"],
    th: ["table", "tbody", "tr"]
};
let Mr = null;
function Zs() {
    return Mr || (Mr = document.implementation.createHTMLDocument("title"))
}
function oh(i) {
    let e = /^(\s*<meta [^>]*>)*/.exec(i);
    e && (i = i.slice(e[0].length));
    let t = Zs().createElement("div"), n = /<([a-z][^>\s]+)/i.exec(i), r;
    if ((r = n && Qs[n[1].toLowerCase()]) && (i = r.map(s => "<" + s + ">").join("") + i + r.map(s => "</" + s + ">").reverse().join("")),
    t.innerHTML = i,
    r)
        for (let s = 0; s < r.length; s++)
            t = t.querySelector(r[s]) || t;
    return t
}
function lh(i) {
    let e = i.querySelectorAll(V ? "span:not([class]):not([style])" : "span.Apple-converted-space");
    for (let t = 0; t < e.length; t++) {
        let n = e[t];
        n.childNodes.length == 1 && n.textContent == " " && n.parentNode && n.parentNode.replaceChild(i.ownerDocument.createTextNode(" "), n)
    }
}
function ah(i, e) {
    if (!i.size)
        return i;
    let t = i.content.firstChild.type.schema, n;
    try {
        n = JSON.parse(e)
    } catch {
        return i
    }
    let {content: r, openStart: s, openEnd: o} = i;
    for (let l = n.length - 2; l >= 0; l -= 2) {
        let a = t.nodes[n[l]];
        if (!a || a.hasRequiredAttrs())
            break;
        r = y.from(a.create(n[l + 1], r)),
        s++,
        o++
    }
    return new S(r,s,o)
}
const W = {}
  , U = {}
  , ch = {
    touchstart: !0,
    touchmove: !0
};
class hh {
    constructor() {
        this.shiftKey = !1,
        this.mouseDown = null,
        this.lastKeyCode = null,
        this.lastKeyCodeTime = 0,
        this.lastClick = {
            time: 0,
            x: 0,
            y: 0,
            type: ""
        },
        this.lastSelectionOrigin = null,
        this.lastSelectionTime = 0,
        this.lastIOSEnter = 0,
        this.lastIOSEnterFallbackTimeout = -1,
        this.lastFocus = 0,
        this.lastTouch = 0,
        this.lastAndroidDelete = 0,
        this.composing = !1,
        this.compositionNode = null,
        this.composingTimeout = -1,
        this.compositionNodes = [],
        this.compositionEndedAt = -2e8,
        this.compositionID = 1,
        this.compositionPendingChanges = 0,
        this.domChangeCount = 0,
        this.eventHandlers = Object.create(null),
        this.hideSelectionGuard = null
    }
}
function dh(i) {
    for (let e in W) {
        let t = W[e];
        i.dom.addEventListener(e, i.input.eventHandlers[e] = n => {
            uh(i, n) && !ni(i, n) && (i.editable || !(n.type in U)) && t(i, n)
        }
        , ch[e] ? {
            passive: !0
        } : void 0)
    }
    J && i.dom.addEventListener("input", () => null),
    Kn(i)
}
function xe(i, e) {
    i.input.lastSelectionOrigin = e,
    i.input.lastSelectionTime = Date.now()
}
function fh(i) {
    i.domObserver.stop();
    for (let e in i.input.eventHandlers)
        i.dom.removeEventListener(e, i.input.eventHandlers[e]);
    clearTimeout(i.input.composingTimeout),
    clearTimeout(i.input.lastIOSEnterFallbackTimeout)
}
function Kn(i) {
    i.someProp("handleDOMEvents", e => {
        for (let t in e)
            i.input.eventHandlers[t] || i.dom.addEventListener(t, i.input.eventHandlers[t] = n => ni(i, n))
    }
    )
}
function ni(i, e) {
    return i.someProp("handleDOMEvents", t => {
        let n = t[e.type];
        return n ? n(i, e) || e.defaultPrevented : !1
    }
    )
}
function uh(i, e) {
    if (!e.bubbles)
        return !0;
    if (e.defaultPrevented)
        return !1;
    for (let t = e.target; t != i.dom; t = t.parentNode)
        if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
            return !1;
    return !0
}
function ph(i, e) {
    !ni(i, e) && W[e.type] && (i.editable || !(e.type in U)) && W[e.type](i, e)
}
U.keydown = (i, e) => {
    let t = e;
    if (i.input.shiftKey = t.keyCode == 16 || t.shiftKey,
    !to(i, t) && (i.input.lastKeyCode = t.keyCode,
    i.input.lastKeyCodeTime = Date.now(),
    !(ne && V && t.keyCode == 13)))
        if (t.keyCode != 229 && i.domObserver.forceFlush(),
        it && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
            let n = Date.now();
            i.input.lastIOSEnter = n,
            i.input.lastIOSEnterFallbackTimeout = setTimeout( () => {
                i.input.lastIOSEnter == n && (i.someProp("handleKeyDown", r => r(i, Ie(13, "Enter"))),
                i.input.lastIOSEnter = 0)
            }
            , 200)
        } else
            i.someProp("handleKeyDown", n => n(i, t)) || ih(i, t) ? t.preventDefault() : xe(i, "key")
}
;
U.keyup = (i, e) => {
    e.keyCode == 16 && (i.input.shiftKey = !1)
}
;
U.keypress = (i, e) => {
    let t = e;
    if (to(i, t) || !t.charCode || t.ctrlKey && !t.altKey || ee && t.metaKey)
        return;
    if (i.someProp("handleKeyPress", r => r(i, t))) {
        t.preventDefault();
        return
    }
    let n = i.state.selection;
    if (!(n instanceof T) || !n.$from.sameParent(n.$to)) {
        let r = String.fromCharCode(t.charCode);
        !/[\r\n]/.test(r) && !i.someProp("handleTextInput", s => s(i, n.$from.pos, n.$to.pos, r)) && i.dispatch(i.state.tr.insertText(r).scrollIntoView()),
        t.preventDefault()
    }
}
;
function an(i) {
    return {
        left: i.clientX,
        top: i.clientY
    }
}
function mh(i, e) {
    let t = e.x - i.clientX
      , n = e.y - i.clientY;
    return t * t + n * n < 100
}
function ii(i, e, t, n, r) {
    if (n == -1)
        return !1;
    let s = i.state.doc.resolve(n);
    for (let o = s.depth + 1; o > 0; o--)
        if (i.someProp(e, l => o > s.depth ? l(i, t, s.nodeAfter, s.before(o), r, !0) : l(i, t, s.node(o), s.before(o), r, !1)))
            return !0;
    return !1
}
function Ze(i, e, t) {
    i.focused || i.focus();
    let n = i.state.tr.setSelection(e);
    n.setMeta("pointer", !0),
    i.dispatch(n)
}
function gh(i, e) {
    if (e == -1)
        return !1;
    let t = i.state.doc.resolve(e)
      , n = t.nodeAfter;
    return n && n.isAtom && b.isSelectable(n) ? (Ze(i, new b(t)),
    !0) : !1
}
function yh(i, e) {
    if (e == -1)
        return !1;
    let t = i.state.selection, n, r;
    t instanceof b && (n = t.node);
    let s = i.state.doc.resolve(e);
    for (let o = s.depth + 1; o > 0; o--) {
        let l = o > s.depth ? s.nodeAfter : s.node(o);
        if (b.isSelectable(l)) {
            n && t.$from.depth > 0 && o >= t.$from.depth && s.before(t.$from.depth + 1) == t.$from.pos ? r = s.before(t.$from.depth) : r = s.before(o);
            break
        }
    }
    return r != null ? (Ze(i, b.create(i.state.doc, r)),
    !0) : !1
}
function Sh(i, e, t, n, r) {
    return ii(i, "handleClickOn", e, t, n) || i.someProp("handleClick", s => s(i, e, n)) || (r ? yh(i, t) : gh(i, t))
}
function kh(i, e, t, n) {
    return ii(i, "handleDoubleClickOn", e, t, n) || i.someProp("handleDoubleClick", r => r(i, e, n))
}
function bh(i, e, t, n) {
    return ii(i, "handleTripleClickOn", e, t, n) || i.someProp("handleTripleClick", r => r(i, e, n)) || xh(i, t, n)
}
function xh(i, e, t) {
    if (t.button != 0)
        return !1;
    let n = i.state.doc;
    if (e == -1)
        return n.inlineContent ? (Ze(i, T.create(n, 0, n.content.size)),
        !0) : !1;
    let r = n.resolve(e);
    for (let s = r.depth + 1; s > 0; s--) {
        let o = s > r.depth ? r.nodeAfter : r.node(s)
          , l = r.before(s);
        if (o.inlineContent)
            Ze(i, T.create(n, l + 1, l + 1 + o.content.size));
        else if (b.isSelectable(o))
            Ze(i, b.create(n, l));
        else
            continue;
        return !0
    }
}
function ri(i) {
    return Zt(i)
}
const eo = ee ? "metaKey" : "ctrlKey";
W.mousedown = (i, e) => {
    let t = e;
    i.input.shiftKey = t.shiftKey;
    let n = ri(i)
      , r = Date.now()
      , s = "singleClick";
    r - i.input.lastClick.time < 500 && mh(t, i.input.lastClick) && !t[eo] && (i.input.lastClick.type == "singleClick" ? s = "doubleClick" : i.input.lastClick.type == "doubleClick" && (s = "tripleClick")),
    i.input.lastClick = {
        time: r,
        x: t.clientX,
        y: t.clientY,
        type: s
    };
    let o = i.posAtCoords(an(t));
    o && (s == "singleClick" ? (i.input.mouseDown && i.input.mouseDown.done(),
    i.input.mouseDown = new Ch(i,o,t,!!n)) : (s == "doubleClick" ? kh : bh)(i, o.pos, o.inside, t) ? t.preventDefault() : xe(i, "pointer"))
}
;
class Ch {
    constructor(e, t, n, r) {
        this.view = e,
        this.pos = t,
        this.event = n,
        this.flushed = r,
        this.delayedSelectionSync = !1,
        this.mightDrag = null,
        this.startDoc = e.state.doc,
        this.selectNode = !!n[eo],
        this.allowDefault = n.shiftKey;
        let s, o;
        if (t.inside > -1)
            s = e.state.doc.nodeAt(t.inside),
            o = t.inside;
        else {
            let h = e.state.doc.resolve(t.pos);
            s = h.parent,
            o = h.depth ? h.before() : 0
        }
        const l = r ? null : n.target
          , a = l ? e.docView.nearestDesc(l, !0) : null;
        this.target = a && a.dom.nodeType == 1 ? a.dom : null;
        let {selection: c} = e.state;
        (n.button == 0 && s.type.spec.draggable && s.type.spec.selectable !== !1 || c instanceof b && c.from <= o && c.to > o) && (this.mightDrag = {
            node: s,
            pos: o,
            addAttr: !!(this.target && !this.target.draggable),
            setUneditable: !!(this.target && ie && !this.target.hasAttribute("contentEditable"))
        }),
        this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(),
        this.mightDrag.addAttr && (this.target.draggable = !0),
        this.mightDrag.setUneditable && setTimeout( () => {
            this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false")
        }
        , 20),
        this.view.domObserver.start()),
        e.root.addEventListener("mouseup", this.up = this.up.bind(this)),
        e.root.addEventListener("mousemove", this.move = this.move.bind(this)),
        xe(e, "pointer")
    }
    done() {
        this.view.root.removeEventListener("mouseup", this.up),
        this.view.root.removeEventListener("mousemove", this.move),
        this.mightDrag && this.target && (this.view.domObserver.stop(),
        this.mightDrag.addAttr && this.target.removeAttribute("draggable"),
        this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"),
        this.view.domObserver.start()),
        this.delayedSelectionSync && setTimeout( () => pe(this.view)),
        this.view.input.mouseDown = null
    }
    up(e) {
        if (this.done(),
        !this.view.dom.contains(e.target))
            return;
        let t = this.pos;
        this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(an(e))),
        this.updateAllowDefault(e),
        this.allowDefault || !t ? xe(this.view, "pointer") : Sh(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || J && this.mightDrag && !this.mightDrag.node.isAtom || V && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (Ze(this.view, C.near(this.view.state.doc.resolve(t.pos))),
        e.preventDefault()) : xe(this.view, "pointer")
    }
    move(e) {
        this.updateAllowDefault(e),
        xe(this.view, "pointer"),
        e.buttons == 0 && this.done()
    }
    updateAllowDefault(e) {
        !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0)
    }
}
W.touchstart = i => {
    i.input.lastTouch = Date.now(),
    ri(i),
    xe(i, "pointer")
}
;
W.touchmove = i => {
    i.input.lastTouch = Date.now(),
    xe(i, "pointer")
}
;
W.contextmenu = i => ri(i);
function to(i, e) {
    return i.composing ? !0 : J && Math.abs(e.timeStamp - i.input.compositionEndedAt) < 500 ? (i.input.compositionEndedAt = -2e8,
    !0) : !1
}
const Th = ne ? 5e3 : -1;
U.compositionstart = U.compositionupdate = i => {
    if (!i.composing) {
        i.domObserver.flush();
        let {state: e} = i
          , t = e.selection.$from;
        if (e.selection.empty && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some(n => n.type.spec.inclusive === !1)))
            i.markCursor = i.state.storedMarks || t.marks(),
            Zt(i, !0),
            i.markCursor = null;
        else if (Zt(i),
        ie && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
            let n = i.domSelectionRange();
            for (let r = n.focusNode, s = n.focusOffset; r && r.nodeType == 1 && s != 0; ) {
                let o = s < 0 ? r.lastChild : r.childNodes[s - 1];
                if (!o)
                    break;
                if (o.nodeType == 3) {
                    i.domSelection().collapse(o, o.nodeValue.length);
                    break
                } else
                    r = o,
                    s = -1
            }
        }
        i.input.composing = !0
    }
    no(i, Th)
}
;
U.compositionend = (i, e) => {
    i.composing && (i.input.composing = !1,
    i.input.compositionEndedAt = e.timeStamp,
    i.input.compositionPendingChanges = i.domObserver.pendingRecords().length ? i.input.compositionID : 0,
    i.input.compositionNode = null,
    i.input.compositionPendingChanges && Promise.resolve().then( () => i.domObserver.flush()),
    i.input.compositionID++,
    no(i, 20))
}
;
function no(i, e) {
    clearTimeout(i.input.composingTimeout),
    e > -1 && (i.input.composingTimeout = setTimeout( () => Zt(i), e))
}
function io(i) {
    for (i.composing && (i.input.composing = !1,
    i.input.compositionEndedAt = wh()); i.input.compositionNodes.length > 0; )
        i.input.compositionNodes.pop().markParentsDirty()
}
function Mh(i) {
    let e = i.domSelectionRange();
    if (!e.focusNode)
        return null;
    let t = yc(e.focusNode, e.focusOffset)
      , n = Sc(e.focusNode, e.focusOffset);
    if (t && n && t != n) {
        let r = n.pmViewDesc
          , s = i.domObserver.lastChangedTextNode;
        if (t == s || n == s)
            return s;
        if (!r || !r.isText(n.nodeValue))
            return n;
        if (i.input.compositionNode == n) {
            let o = t.pmViewDesc;
            if (!(!o || !o.isText(t.nodeValue)))
                return n
        }
    }
    return t || n
}
function wh() {
    let i = document.createEvent("Event");
    return i.initEvent("event", !0, !0),
    i.timeStamp
}
function Zt(i, e=!1) {
    if (!(ne && i.domObserver.flushingSoon >= 0)) {
        if (i.domObserver.forceFlush(),
        io(i),
        e || i.docView && i.docView.dirty) {
            let t = ei(i);
            return t && !t.eq(i.state.selection) ? i.dispatch(i.state.tr.setSelection(t)) : i.updateState(i.state),
            !0
        }
        return !1
    }
}
function Nh(i, e) {
    if (!i.dom.parentNode)
        return;
    let t = i.dom.parentNode.appendChild(document.createElement("div"));
    t.appendChild(e),
    t.style.cssText = "position: fixed; left: -10000px; top: 10px";
    let n = getSelection()
      , r = document.createRange();
    r.selectNodeContents(e),
    i.dom.blur(),
    n.removeAllRanges(),
    n.addRange(r),
    setTimeout( () => {
        t.parentNode && t.parentNode.removeChild(t),
        i.focus()
    }
    , 50)
}
const Ot = G && Ce < 15 || it && Tc < 604;
W.copy = U.cut = (i, e) => {
    let t = e
      , n = i.state.selection
      , r = t.type == "cut";
    if (n.empty)
        return;
    let s = Ot ? null : t.clipboardData
      , o = n.content()
      , {dom: l, text: a} = $s(i, o);
    s ? (t.preventDefault(),
    s.clearData(),
    s.setData("text/html", l.innerHTML),
    s.setData("text/plain", a)) : Nh(i, l),
    r && i.dispatch(i.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"))
}
;
function Oh(i) {
    return i.openStart == 0 && i.openEnd == 0 && i.content.childCount == 1 ? i.content.firstChild : null
}
function Eh(i, e) {
    if (!i.dom.parentNode)
        return;
    let t = i.input.shiftKey || i.state.selection.$from.parent.type.spec.code
      , n = i.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
    t || (n.contentEditable = "true"),
    n.style.cssText = "position: fixed; left: -10000px; top: 10px",
    n.focus();
    let r = i.input.shiftKey && i.input.lastKeyCode != 45;
    setTimeout( () => {
        i.focus(),
        n.parentNode && n.parentNode.removeChild(n),
        t ? Et(i, n.value, null, r, e) : Et(i, n.textContent, n.innerHTML, r, e)
    }
    , 50)
}
function Et(i, e, t, n, r) {
    let s = Gs(i, e, t, n, i.state.selection.$from);
    if (i.someProp("handlePaste", a => a(i, r, s || S.empty)))
        return !0;
    if (!s)
        return !1;
    let o = Oh(s)
      , l = o ? i.state.tr.replaceSelectionWith(o, n) : i.state.tr.replaceSelection(s);
    return i.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")),
    !0
}
function ro(i) {
    let e = i.getData("text/plain") || i.getData("Text");
    if (e)
        return e;
    let t = i.getData("text/uri-list");
    return t ? t.replace(/\r?\n/g, " ") : ""
}
U.paste = (i, e) => {
    let t = e;
    if (i.composing && !ne)
        return;
    let n = Ot ? null : t.clipboardData
      , r = i.input.shiftKey && i.input.lastKeyCode != 45;
    n && Et(i, ro(n), n.getData("text/html"), r, t) ? t.preventDefault() : Eh(i, t)
}
;
class so {
    constructor(e, t, n) {
        this.slice = e,
        this.move = t,
        this.node = n
    }
}
const oo = ee ? "altKey" : "ctrlKey";
W.dragstart = (i, e) => {
    let t = e
      , n = i.input.mouseDown;
    if (n && n.done(),
    !t.dataTransfer)
        return;
    let r = i.state.selection, s = r.empty ? null : i.posAtCoords(an(t)), o;
    if (!(s && s.pos >= r.from && s.pos <= (r instanceof b ? r.to - 1 : r.to))) {
        if (n && n.mightDrag)
            o = b.create(i.state.doc, n.mightDrag.pos);
        else if (t.target && t.target.nodeType == 1) {
            let d = i.docView.nearestDesc(t.target, !0);
            d && d.node.type.spec.draggable && d != i.docView && (o = b.create(i.state.doc, d.posBefore))
        }
    }
    let l = (o || i.state.selection).content()
      , {dom: a, text: c, slice: h} = $s(i, l);
    (!t.dataTransfer.files.length || !V || Is > 120) && t.dataTransfer.clearData(),
    t.dataTransfer.setData(Ot ? "Text" : "text/html", a.innerHTML),
    t.dataTransfer.effectAllowed = "copyMove",
    Ot || t.dataTransfer.setData("text/plain", c),
    i.dragging = new so(h,!t[oo],o)
}
;
W.dragend = i => {
    let e = i.dragging;
    window.setTimeout( () => {
        i.dragging == e && (i.dragging = null)
    }
    , 50)
}
;
U.dragover = U.dragenter = (i, e) => e.preventDefault();
U.drop = (i, e) => {
    let t = e
      , n = i.dragging;
    if (i.dragging = null,
    !t.dataTransfer)
        return;
    let r = i.posAtCoords(an(t));
    if (!r)
        return;
    let s = i.state.doc.resolve(r.pos)
      , o = n && n.slice;
    o ? i.someProp("transformPasted", u => {
        o = u(o, i)
    }
    ) : o = Gs(i, ro(t.dataTransfer), Ot ? null : t.dataTransfer.getData("text/html"), !1, s);
    let l = !!(n && !t[oo]);
    if (i.someProp("handleDrop", u => u(i, t, o || S.empty, l))) {
        t.preventDefault();
        return
    }
    if (!o)
        return;
    t.preventDefault();
    let a = o ? Ba(i.state.doc, s.pos, o) : s.pos;
    a == null && (a = s.pos);
    let c = i.state.tr;
    if (l) {
        let {node: u} = n;
        u ? u.replace(c) : c.deleteSelection()
    }
    let h = c.mapping.map(a)
      , d = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1
      , f = c.doc;
    if (d ? c.replaceRangeWith(h, h, o.content.firstChild) : c.replaceRange(h, h, o),
    c.doc.eq(f))
        return;
    let p = c.doc.resolve(h);
    if (d && b.isSelectable(o.content.firstChild) && p.nodeAfter && p.nodeAfter.sameMarkup(o.content.firstChild))
        c.setSelection(new b(p));
    else {
        let u = c.mapping.map(a);
        c.mapping.maps[c.mapping.maps.length - 1].forEach( (m, g, k, w) => u = w),
        c.setSelection(ti(i, p, c.doc.resolve(u)))
    }
    i.focus(),
    i.dispatch(c.setMeta("uiEvent", "drop"))
}
;
W.focus = i => {
    i.input.lastFocus = Date.now(),
    i.focused || (i.domObserver.stop(),
    i.dom.classList.add("ProseMirror-focused"),
    i.domObserver.start(),
    i.focused = !0,
    setTimeout( () => {
        i.docView && i.hasFocus() && !i.domObserver.currentSelection.eq(i.domSelectionRange()) && pe(i)
    }
    , 20))
}
;
W.blur = (i, e) => {
    let t = e;
    i.focused && (i.domObserver.stop(),
    i.dom.classList.remove("ProseMirror-focused"),
    i.domObserver.start(),
    t.relatedTarget && i.dom.contains(t.relatedTarget) && i.domObserver.currentSelection.clear(),
    i.focused = !1)
}
;
W.beforeinput = (i, e) => {
    if (V && ne && e.inputType == "deleteContentBackward") {
        i.domObserver.flushSoon();
        let {domChangeCount: n} = i.input;
        setTimeout( () => {
            if (i.input.domChangeCount != n || (i.dom.blur(),
            i.focus(),
            i.someProp("handleKeyDown", s => s(i, Ie(8, "Backspace")))))
                return;
            let {$cursor: r} = i.state.selection;
            r && r.pos > 0 && i.dispatch(i.state.tr.delete(r.pos - 1, r.pos).scrollIntoView())
        }
        , 50)
    }
}
;
for (let i in U)
    W[i] = U[i];
function Dt(i, e) {
    if (i == e)
        return !0;
    for (let t in i)
        if (i[t] !== e[t])
            return !1;
    for (let t in e)
        if (!(t in i))
            return !1;
    return !0
}
class en {
    constructor(e, t) {
        this.toDOM = e,
        this.spec = t || Be,
        this.side = this.spec.side || 0
    }
    map(e, t, n, r) {
        let {pos: s, deleted: o} = e.mapResult(t.from + r, this.side < 0 ? -1 : 1);
        return o ? null : new $(s - n,s - n,this)
    }
    valid() {
        return !0
    }
    eq(e) {
        return this == e || e instanceof en && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Dt(this.spec, e.spec))
    }
    destroy(e) {
        this.spec.destroy && this.spec.destroy(e)
    }
}
class Me {
    constructor(e, t) {
        this.attrs = e,
        this.spec = t || Be
    }
    map(e, t, n, r) {
        let s = e.map(t.from + r, this.spec.inclusiveStart ? -1 : 1) - n
          , o = e.map(t.to + r, this.spec.inclusiveEnd ? 1 : -1) - n;
        return s >= o ? null : new $(s,o,this)
    }
    valid(e, t) {
        return t.from < t.to
    }
    eq(e) {
        return this == e || e instanceof Me && Dt(this.attrs, e.attrs) && Dt(this.spec, e.spec)
    }
    static is(e) {
        return e.type instanceof Me
    }
    destroy() {}
}
class si {
    constructor(e, t) {
        this.attrs = e,
        this.spec = t || Be
    }
    map(e, t, n, r) {
        let s = e.mapResult(t.from + r, 1);
        if (s.deleted)
            return null;
        let o = e.mapResult(t.to + r, -1);
        return o.deleted || o.pos <= s.pos ? null : new $(s.pos - n,o.pos - n,this)
    }
    valid(e, t) {
        let {index: n, offset: r} = e.content.findIndex(t.from), s;
        return r == t.from && !(s = e.child(n)).isText && r + s.nodeSize == t.to
    }
    eq(e) {
        return this == e || e instanceof si && Dt(this.attrs, e.attrs) && Dt(this.spec, e.spec)
    }
    destroy() {}
}
class $ {
    constructor(e, t, n) {
        this.from = e,
        this.to = t,
        this.type = n
    }
    copy(e, t) {
        return new $(e,t,this.type)
    }
    eq(e, t=0) {
        return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to
    }
    map(e, t, n) {
        return this.type.map(e, this, t, n)
    }
    static widget(e, t, n) {
        return new $(e,e,new en(t,n))
    }
    static inline(e, t, n, r) {
        return new $(e,t,new Me(n,r))
    }
    static node(e, t, n, r) {
        return new $(e,t,new si(n,r))
    }
    get spec() {
        return this.type.spec
    }
    get inline() {
        return this.type instanceof Me
    }
    get widget() {
        return this.type instanceof en
    }
}
const Xe = []
  , Be = {};
class O {
    constructor(e, t) {
        this.local = e.length ? e : Xe,
        this.children = t.length ? t : Xe
    }
    static create(e, t) {
        return t.length ? tn(t, e, 0, Be) : B
    }
    find(e, t, n) {
        let r = [];
        return this.findInner(e ?? 0, t ?? 1e9, r, 0, n),
        r
    }
    findInner(e, t, n, r, s) {
        for (let o = 0; o < this.local.length; o++) {
            let l = this.local[o];
            l.from <= t && l.to >= e && (!s || s(l.spec)) && n.push(l.copy(l.from + r, l.to + r))
        }
        for (let o = 0; o < this.children.length; o += 3)
            if (this.children[o] < t && this.children[o + 1] > e) {
                let l = this.children[o] + 1;
                this.children[o + 2].findInner(e - l, t - l, n, r + l, s)
            }
    }
    map(e, t, n) {
        return this == B || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, n || Be)
    }
    mapInner(e, t, n, r, s) {
        let o;
        for (let l = 0; l < this.local.length; l++) {
            let a = this.local[l].map(e, n, r);
            a && a.type.valid(t, a) ? (o || (o = [])).push(a) : s.onRemove && s.onRemove(this.local[l].spec)
        }
        return this.children.length ? Dh(this.children, o || [], e, t, n, r, s) : o ? new O(o.sort(Le),Xe) : B
    }
    add(e, t) {
        return t.length ? this == B ? O.create(e, t) : this.addInner(e, t, 0) : this
    }
    addInner(e, t, n) {
        let r, s = 0;
        e.forEach( (l, a) => {
            let c = a + n, h;
            if (h = ao(t, l, c)) {
                for (r || (r = this.children.slice()); s < r.length && r[s] < a; )
                    s += 3;
                r[s] == a ? r[s + 2] = r[s + 2].addInner(l, h, c + 1) : r.splice(s, 0, a, a + l.nodeSize, tn(h, l, c + 1, Be)),
                s += 3
            }
        }
        );
        let o = lo(s ? co(t) : t, -n);
        for (let l = 0; l < o.length; l++)
            o[l].type.valid(e, o[l]) || o.splice(l--, 1);
        return new O(o.length ? this.local.concat(o).sort(Le) : this.local,r || this.children)
    }
    remove(e) {
        return e.length == 0 || this == B ? this : this.removeInner(e, 0)
    }
    removeInner(e, t) {
        let n = this.children
          , r = this.local;
        for (let s = 0; s < n.length; s += 3) {
            let o, l = n[s] + t, a = n[s + 1] + t;
            for (let h = 0, d; h < e.length; h++)
                (d = e[h]) && d.from > l && d.to < a && (e[h] = null,
                (o || (o = [])).push(d));
            if (!o)
                continue;
            n == this.children && (n = this.children.slice());
            let c = n[s + 2].removeInner(o, l + 1);
            c != B ? n[s + 2] = c : (n.splice(s, 3),
            s -= 3)
        }
        if (r.length) {
            for (let s = 0, o; s < e.length; s++)
                if (o = e[s])
                    for (let l = 0; l < r.length; l++)
                        r[l].eq(o, t) && (r == this.local && (r = this.local.slice()),
                        r.splice(l--, 1))
        }
        return n == this.children && r == this.local ? this : r.length || n.length ? new O(r,n) : B
    }
    forChild(e, t) {
        if (this == B)
            return this;
        if (t.isLeaf)
            return O.empty;
        let n, r;
        for (let l = 0; l < this.children.length; l += 3)
            if (this.children[l] >= e) {
                this.children[l] == e && (n = this.children[l + 2]);
                break
            }
        let s = e + 1
          , o = s + t.content.size;
        for (let l = 0; l < this.local.length; l++) {
            let a = this.local[l];
            if (a.from < o && a.to > s && a.type instanceof Me) {
                let c = Math.max(s, a.from) - s
                  , h = Math.min(o, a.to) - s;
                c < h && (r || (r = [])).push(a.copy(c, h))
            }
        }
        if (r) {
            let l = new O(r.sort(Le),Xe);
            return n ? new Se([l, n]) : l
        }
        return n || B
    }
    eq(e) {
        if (this == e)
            return !0;
        if (!(e instanceof O) || this.local.length != e.local.length || this.children.length != e.children.length)
            return !1;
        for (let t = 0; t < this.local.length; t++)
            if (!this.local[t].eq(e.local[t]))
                return !1;
        for (let t = 0; t < this.children.length; t += 3)
            if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
                return !1;
        return !0
    }
    locals(e) {
        return oi(this.localsInner(e))
    }
    localsInner(e) {
        if (this == B)
            return Xe;
        if (e.inlineContent || !this.local.some(Me.is))
            return this.local;
        let t = [];
        for (let n = 0; n < this.local.length; n++)
            this.local[n].type instanceof Me || t.push(this.local[n]);
        return t
    }
}
O.empty = new O([],[]);
O.removeOverlap = oi;
const B = O.empty;
class Se {
    constructor(e) {
        this.members = e
    }
    map(e, t) {
        const n = this.members.map(r => r.map(e, t, Be));
        return Se.from(n)
    }
    forChild(e, t) {
        if (t.isLeaf)
            return O.empty;
        let n = [];
        for (let r = 0; r < this.members.length; r++) {
            let s = this.members[r].forChild(e, t);
            s != B && (s instanceof Se ? n = n.concat(s.members) : n.push(s))
        }
        return Se.from(n)
    }
    eq(e) {
        if (!(e instanceof Se) || e.members.length != this.members.length)
            return !1;
        for (let t = 0; t < this.members.length; t++)
            if (!this.members[t].eq(e.members[t]))
                return !1;
        return !0
    }
    locals(e) {
        let t, n = !0;
        for (let r = 0; r < this.members.length; r++) {
            let s = this.members[r].localsInner(e);
            if (s.length)
                if (!t)
                    t = s;
                else {
                    n && (t = t.slice(),
                    n = !1);
                    for (let o = 0; o < s.length; o++)
                        t.push(s[o])
                }
        }
        return t ? oi(n ? t : t.sort(Le)) : Xe
    }
    static from(e) {
        switch (e.length) {
        case 0:
            return B;
        case 1:
            return e[0];
        default:
            return new Se(e.every(t => t instanceof O) ? e : e.reduce( (t, n) => t.concat(n instanceof O ? n : n.members), []))
        }
    }
}
function Dh(i, e, t, n, r, s, o) {
    let l = i.slice();
    for (let c = 0, h = s; c < t.maps.length; c++) {
        let d = 0;
        t.maps[c].forEach( (f, p, u, m) => {
            let g = m - u - (p - f);
            for (let k = 0; k < l.length; k += 3) {
                let w = l[k + 1];
                if (w < 0 || f > w + h - d)
                    continue;
                let v = l[k] + h - d;
                p >= v ? l[k + 1] = f <= v ? -2 : -1 : f >= h && g && (l[k] += g,
                l[k + 1] += g)
            }
            d += g
        }
        ),
        h = t.maps[c].map(h, -1)
    }
    let a = !1;
    for (let c = 0; c < l.length; c += 3)
        if (l[c + 1] < 0) {
            if (l[c + 1] == -2) {
                a = !0,
                l[c + 1] = -1;
                continue
            }
            let h = t.map(i[c] + s)
              , d = h - r;
            if (d < 0 || d >= n.content.size) {
                a = !0;
                continue
            }
            let f = t.map(i[c + 1] + s, -1)
              , p = f - r
              , {index: u, offset: m} = n.content.findIndex(d)
              , g = n.maybeChild(u);
            if (g && m == d && m + g.nodeSize == p) {
                let k = l[c + 2].mapInner(t, g, h + 1, i[c] + s + 1, o);
                k != B ? (l[c] = d,
                l[c + 1] = p,
                l[c + 2] = k) : (l[c + 1] = -2,
                a = !0)
            } else
                a = !0
        }
    if (a) {
        let c = Ah(l, i, e, t, r, s, o)
          , h = tn(c, n, 0, o);
        e = h.local;
        for (let d = 0; d < l.length; d += 3)
            l[d + 1] < 0 && (l.splice(d, 3),
            d -= 3);
        for (let d = 0, f = 0; d < h.children.length; d += 3) {
            let p = h.children[d];
            for (; f < l.length && l[f] < p; )
                f += 3;
            l.splice(f, 0, h.children[d], h.children[d + 1], h.children[d + 2])
        }
    }
    return new O(e.sort(Le),l)
}
function lo(i, e) {
    if (!e || !i.length)
        return i;
    let t = [];
    for (let n = 0; n < i.length; n++) {
        let r = i[n];
        t.push(new $(r.from + e,r.to + e,r.type))
    }
    return t
}
function Ah(i, e, t, n, r, s, o) {
    function l(a, c) {
        for (let h = 0; h < a.local.length; h++) {
            let d = a.local[h].map(n, r, c);
            d ? t.push(d) : o.onRemove && o.onRemove(a.local[h].spec)
        }
        for (let h = 0; h < a.children.length; h += 3)
            l(a.children[h + 2], a.children[h] + c + 1)
    }
    for (let a = 0; a < i.length; a += 3)
        i[a + 1] == -1 && l(i[a + 2], e[a] + s + 1);
    return t
}
function ao(i, e, t) {
    if (e.isLeaf)
        return null;
    let n = t + e.nodeSize
      , r = null;
    for (let s = 0, o; s < i.length; s++)
        (o = i[s]) && o.from > t && o.to < n && ((r || (r = [])).push(o),
        i[s] = null);
    return r
}
function co(i) {
    let e = [];
    for (let t = 0; t < i.length; t++)
        i[t] != null && e.push(i[t]);
    return e
}
function tn(i, e, t, n) {
    let r = []
      , s = !1;
    e.forEach( (l, a) => {
        let c = ao(i, l, a + t);
        if (c) {
            s = !0;
            let h = tn(c, l, t + a + 1, n);
            h != B && r.push(a, a + l.nodeSize, h)
        }
    }
    );
    let o = lo(s ? co(i) : i, -t).sort(Le);
    for (let l = 0; l < o.length; l++)
        o[l].type.valid(e, o[l]) || (n.onRemove && n.onRemove(o[l].spec),
        o.splice(l--, 1));
    return o.length || r.length ? new O(o,r) : B
}
function Le(i, e) {
    return i.from - e.from || i.to - e.to
}
function oi(i) {
    let e = i;
    for (let t = 0; t < e.length - 1; t++) {
        let n = e[t];
        if (n.from != n.to)
            for (let r = t + 1; r < e.length; r++) {
                let s = e[r];
                if (s.from == n.from) {
                    s.to != n.to && (e == i && (e = i.slice()),
                    e[r] = s.copy(s.from, n.to),
                    wr(e, r + 1, s.copy(n.to, s.to)));
                    continue
                } else {
                    s.from < n.to && (e == i && (e = i.slice()),
                    e[t] = n.copy(n.from, s.from),
                    wr(e, r, n.copy(s.from, n.to)));
                    break
                }
            }
    }
    return e
}
function wr(i, e, t) {
    for (; e < i.length && Le(t, i[e]) > 0; )
        e++;
    i.splice(e, 0, t)
}
function wn(i) {
    let e = [];
    return i.someProp("decorations", t => {
        let n = t(i.state);
        n && n != B && e.push(n)
    }
    ),
    i.cursorWrapper && e.push(O.create(i.state.doc, [i.cursorWrapper.deco])),
    Se.from(e)
}
const Ih = {
    childList: !0,
    characterData: !0,
    characterDataOldValue: !0,
    attributes: !0,
    attributeOldValue: !0,
    subtree: !0
}
  , Rh = G && Ce <= 11;
class vh {
    constructor() {
        this.anchorNode = null,
        this.anchorOffset = 0,
        this.focusNode = null,
        this.focusOffset = 0
    }
    set(e) {
        this.anchorNode = e.anchorNode,
        this.anchorOffset = e.anchorOffset,
        this.focusNode = e.focusNode,
        this.focusOffset = e.focusOffset
    }
    clear() {
        this.anchorNode = this.focusNode = null
    }
    eq(e) {
        return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset
    }
}
class Ph {
    constructor(e, t) {
        this.view = e,
        this.handleDOMChange = t,
        this.queue = [],
        this.flushingSoon = -1,
        this.observer = null,
        this.currentSelection = new vh,
        this.onCharData = null,
        this.suppressingSelectionUpdates = !1,
        this.lastChangedTextNode = null,
        this.observer = window.MutationObserver && new window.MutationObserver(n => {
            for (let r = 0; r < n.length; r++)
                this.queue.push(n[r]);
            G && Ce <= 11 && n.some(r => r.type == "childList" && r.removedNodes.length || r.type == "characterData" && r.oldValue.length > r.target.nodeValue.length) ? this.flushSoon() : this.flush()
        }
        ),
        Rh && (this.onCharData = n => {
            this.queue.push({
                target: n.target,
                type: "characterData",
                oldValue: n.prevValue
            }),
            this.flushSoon()
        }
        ),
        this.onSelectionChange = this.onSelectionChange.bind(this)
    }
    flushSoon() {
        this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout( () => {
            this.flushingSoon = -1,
            this.flush()
        }
        , 20))
    }
    forceFlush() {
        this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon),
        this.flushingSoon = -1,
        this.flush())
    }
    start() {
        this.observer && (this.observer.takeRecords(),
        this.observer.observe(this.view.dom, Ih)),
        this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData),
        this.connectSelection()
    }
    stop() {
        if (this.observer) {
            let e = this.observer.takeRecords();
            if (e.length) {
                for (let t = 0; t < e.length; t++)
                    this.queue.push(e[t]);
                window.setTimeout( () => this.flush(), 20)
            }
            this.observer.disconnect()
        }
        this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData),
        this.disconnectSelection()
    }
    connectSelection() {
        this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange)
    }
    disconnectSelection() {
        this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange)
    }
    suppressSelectionUpdates() {
        this.suppressingSelectionUpdates = !0,
        setTimeout( () => this.suppressingSelectionUpdates = !1, 50)
    }
    onSelectionChange() {
        if (yr(this.view)) {
            if (this.suppressingSelectionUpdates)
                return pe(this.view);
            if (G && Ce <= 11 && !this.view.state.selection.empty) {
                let e = this.view.domSelectionRange();
                if (e.focusNode && qe(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
                    return this.flushSoon()
            }
            this.flush()
        }
    }
    setCurSelection() {
        this.currentSelection.set(this.view.domSelectionRange())
    }
    ignoreSelectionChange(e) {
        if (!e.focusNode)
            return !0;
        let t = new Set, n;
        for (let s = e.focusNode; s; s = Nt(s))
            t.add(s);
        for (let s = e.anchorNode; s; s = Nt(s))
            if (t.has(s)) {
                n = s;
                break
            }
        let r = n && this.view.docView.nearestDesc(n);
        if (r && r.ignoreMutation({
            type: "selection",
            target: n.nodeType == 3 ? n.parentNode : n
        }))
            return this.setCurSelection(),
            !0
    }
    pendingRecords() {
        if (this.observer)
            for (let e of this.observer.takeRecords())
                this.queue.push(e);
        return this.queue
    }
    flush() {
        let {view: e} = this;
        if (!e.docView || this.flushingSoon > -1)
            return;
        let t = this.pendingRecords();
        t.length && (this.queue = []);
        let n = e.domSelectionRange()
          , r = !this.suppressingSelectionUpdates && !this.currentSelection.eq(n) && yr(e) && !this.ignoreSelectionChange(n)
          , s = -1
          , o = -1
          , l = !1
          , a = [];
        if (e.editable)
            for (let h = 0; h < t.length; h++) {
                let d = this.registerMutation(t[h], a);
                d && (s = s < 0 ? d.from : Math.min(d.from, s),
                o = o < 0 ? d.to : Math.max(d.to, o),
                d.typeOver && (l = !0))
            }
        if (ie && a.length) {
            let h = a.filter(d => d.nodeName == "BR");
            if (h.length == 2) {
                let[d,f] = h;
                d.parentNode && d.parentNode.parentNode == f.parentNode ? f.remove() : d.remove()
            } else {
                let {focusNode: d} = this.currentSelection;
                for (let f of h) {
                    let p = f.parentNode;
                    p && p.nodeName == "LI" && (!d || Bh(e, d) != p) && f.remove()
                }
            }
        }
        let c = null;
        s < 0 && r && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && on(n) && (c = ei(e)) && c.eq(C.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0,
        pe(e),
        this.currentSelection.set(n),
        e.scrollToSelection()) : (s > -1 || r) && (s > -1 && (e.docView.markDirty(s, o),
        Fh(e)),
        this.handleDOMChange(s, o, l, a),
        e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(n) || pe(e),
        this.currentSelection.set(n))
    }
    registerMutation(e, t) {
        if (t.indexOf(e.target) > -1)
            return null;
        let n = this.view.docView.nearestDesc(e.target);
        if (e.type == "attributes" && (n == this.view.docView || e.attributeName == "contenteditable" || e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !n || n.ignoreMutation(e))
            return null;
        if (e.type == "childList") {
            for (let h = 0; h < e.addedNodes.length; h++) {
                let d = e.addedNodes[h];
                t.push(d),
                d.nodeType == 3 && (this.lastChangedTextNode = d)
            }
            if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(e.target))
                return {
                    from: n.posBefore,
                    to: n.posAfter
                };
            let r = e.previousSibling
              , s = e.nextSibling;
            if (G && Ce <= 11 && e.addedNodes.length)
                for (let h = 0; h < e.addedNodes.length; h++) {
                    let {previousSibling: d, nextSibling: f} = e.addedNodes[h];
                    (!d || Array.prototype.indexOf.call(e.addedNodes, d) < 0) && (r = d),
                    (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (s = f)
                }
            let o = r && r.parentNode == e.target ? F(r) + 1 : 0
              , l = n.localPosFromDOM(e.target, o, -1)
              , a = s && s.parentNode == e.target ? F(s) : e.target.childNodes.length
              , c = n.localPosFromDOM(e.target, a, 1);
            return {
                from: l,
                to: c
            }
        } else
            return e.type == "attributes" ? {
                from: n.posAtStart - n.border,
                to: n.posAtEnd + n.border
            } : (this.lastChangedTextNode = e.target,
            {
                from: n.posAtStart,
                to: n.posAtEnd,
                typeOver: e.target.nodeValue == e.oldValue
            })
    }
}
let Nr = new WeakMap
  , Or = !1;
function Fh(i) {
    if (!Nr.has(i) && (Nr.set(i, null),
    ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(i.dom).whiteSpace) !== -1)) {
        if (i.requiresGeckoHackNode = ie,
        Or)
            return;
        console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."),
        Or = !0
    }
}
function Er(i, e) {
    let t = e.startContainer
      , n = e.startOffset
      , r = e.endContainer
      , s = e.endOffset
      , o = i.domAtPos(i.state.selection.anchor);
    return qe(o.node, o.offset, r, s) && ([t,n,r,s] = [r, s, t, n]),
    {
        anchorNode: t,
        anchorOffset: n,
        focusNode: r,
        focusOffset: s
    }
}
function zh(i, e) {
    if (e.getComposedRanges) {
        let r = e.getComposedRanges(i.root)[0];
        if (r)
            return Er(i, r)
    }
    let t;
    function n(r) {
        r.preventDefault(),
        r.stopImmediatePropagation(),
        t = r.getTargetRanges()[0]
    }
    return i.dom.addEventListener("beforeinput", n, !0),
    document.execCommand("indent"),
    i.dom.removeEventListener("beforeinput", n, !0),
    t ? Er(i, t) : null
}
function Bh(i, e) {
    for (let t = e.parentNode; t && t != i.dom; t = t.parentNode) {
        let n = i.docView.nearestDesc(t, !0);
        if (n && n.node.isBlock)
            return t
    }
    return null
}
function Lh(i, e, t) {
    let {node: n, fromOffset: r, toOffset: s, from: o, to: l} = i.docView.parseRange(e, t), a = i.domSelectionRange(), c, h = a.anchorNode;
    if (h && i.dom.contains(h.nodeType == 1 ? h : h.parentNode) && (c = [{
        node: h,
        offset: a.anchorOffset
    }],
    on(a) || c.push({
        node: a.focusNode,
        offset: a.focusOffset
    })),
    V && i.input.lastKeyCode === 8)
        for (let g = s; g > r; g--) {
            let k = n.childNodes[g - 1]
              , w = k.pmViewDesc;
            if (k.nodeName == "BR" && !w) {
                s = g;
                break
            }
            if (!w || w.size)
                break
        }
    let d = i.state.doc
      , f = i.someProp("domParser") || Mt.fromSchema(i.state.schema)
      , p = d.resolve(o)
      , u = null
      , m = f.parse(n, {
        topNode: p.parent,
        topMatch: p.parent.contentMatchAt(p.index()),
        topOpen: !0,
        from: r,
        to: s,
        preserveWhitespace: p.parent.type.whitespace == "pre" ? "full" : !0,
        findPositions: c,
        ruleFromNode: Vh,
        context: p
    });
    if (c && c[0].pos != null) {
        let g = c[0].pos
          , k = c[1] && c[1].pos;
        k == null && (k = g),
        u = {
            anchor: g + o,
            head: k + o
        }
    }
    return {
        doc: m,
        sel: u,
        from: o,
        to: l
    }
}
function Vh(i) {
    let e = i.pmViewDesc;
    if (e)
        return e.parseRule();
    if (i.nodeName == "BR" && i.parentNode) {
        if (J && /^(ul|ol)$/i.test(i.parentNode.nodeName)) {
            let t = document.createElement("div");
            return t.appendChild(document.createElement("li")),
            {
                skip: t
            }
        } else if (i.parentNode.lastChild == i || J && /^(tr|table)$/i.test(i.parentNode.nodeName))
            return {
                ignore: !0
            }
    } else if (i.nodeName == "IMG" && i.getAttribute("mark-placeholder"))
        return {
            ignore: !0
        };
    return null
}
const qh = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function _h(i, e, t, n, r) {
    let s = i.input.compositionPendingChanges || (i.composing ? i.input.compositionID : 0);
    if (i.input.compositionPendingChanges = 0,
    e < 0) {
        let x = i.input.lastSelectionTime > Date.now() - 50 ? i.input.lastSelectionOrigin : null
          , z = ei(i, x);
        if (z && !i.state.selection.eq(z)) {
            if (V && ne && i.input.lastKeyCode === 13 && Date.now() - 100 < i.input.lastKeyCodeTime && i.someProp("handleKeyDown", Q => Q(i, Ie(13, "Enter"))))
                return;
            let A = i.state.tr.setSelection(z);
            x == "pointer" ? A.setMeta("pointer", !0) : x == "key" && A.scrollIntoView(),
            s && A.setMeta("composition", s),
            i.dispatch(A)
        }
        return
    }
    let o = i.state.doc.resolve(e)
      , l = o.sharedDepth(t);
    e = o.before(l + 1),
    t = i.state.doc.resolve(t).after(l + 1);
    let a = i.state.selection, c = Lh(i, e, t), h = i.state.doc, d = h.slice(c.from, c.to), f, p;
    i.input.lastKeyCode === 8 && Date.now() - 100 < i.input.lastKeyCodeTime ? (f = i.state.selection.to,
    p = "end") : (f = i.state.selection.from,
    p = "start"),
    i.input.lastKeyCode = null;
    let u = Wh(d.content, c.doc.content, c.from, f, p);
    if ((it && i.input.lastIOSEnter > Date.now() - 225 || ne) && r.some(x => x.nodeType == 1 && !qh.test(x.nodeName)) && (!u || u.endA >= u.endB) && i.someProp("handleKeyDown", x => x(i, Ie(13, "Enter")))) {
        i.input.lastIOSEnter = 0;
        return
    }
    if (!u)
        if (n && a instanceof T && !a.empty && a.$head.sameParent(a.$anchor) && !i.composing && !(c.sel && c.sel.anchor != c.sel.head))
            u = {
                start: a.from,
                endA: a.to,
                endB: a.to
            };
        else {
            if (c.sel) {
                let x = Dr(i, i.state.doc, c.sel);
                if (x && !x.eq(i.state.selection)) {
                    let z = i.state.tr.setSelection(x);
                    s && z.setMeta("composition", s),
                    i.dispatch(z)
                }
            }
            return
        }
    i.input.domChangeCount++,
    i.state.selection.from < i.state.selection.to && u.start == u.endB && i.state.selection instanceof T && (u.start > i.state.selection.from && u.start <= i.state.selection.from + 2 && i.state.selection.from >= c.from ? u.start = i.state.selection.from : u.endA < i.state.selection.to && u.endA >= i.state.selection.to - 2 && i.state.selection.to <= c.to && (u.endB += i.state.selection.to - u.endA,
    u.endA = i.state.selection.to)),
    G && Ce <= 11 && u.endB == u.start + 1 && u.endA == u.start && u.start > c.from && c.doc.textBetween(u.start - c.from - 1, u.start - c.from + 1) == "  " && (u.start--,
    u.endA--,
    u.endB--);
    let m = c.doc.resolveNoCache(u.start - c.from), g = c.doc.resolveNoCache(u.endB - c.from), k = h.resolve(u.start), w = m.sameParent(g) && m.parent.inlineContent && k.end() >= u.endA, v;
    if ((it && i.input.lastIOSEnter > Date.now() - 225 && (!w || r.some(x => x.nodeName == "DIV" || x.nodeName == "P")) || !w && m.pos < c.doc.content.size && !m.sameParent(g) && (v = C.findFrom(c.doc.resolve(m.pos + 1), 1, !0)) && v.head == g.pos) && i.someProp("handleKeyDown", x => x(i, Ie(13, "Enter")))) {
        i.input.lastIOSEnter = 0;
        return
    }
    if (i.state.selection.anchor > u.start && Jh(h, u.start, u.endA, m, g) && i.someProp("handleKeyDown", x => x(i, Ie(8, "Backspace")))) {
        ne && V && i.domObserver.suppressSelectionUpdates();
        return
    }
    V && ne && u.endB == u.start && (i.input.lastAndroidDelete = Date.now()),
    ne && !w && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == u.endA && (u.endB -= 2,
    g = c.doc.resolveNoCache(u.endB - c.from),
    setTimeout( () => {
        i.someProp("handleKeyDown", function(x) {
            return x(i, Ie(13, "Enter"))
        })
    }
    , 20));
    let _ = u.start, K = u.endA, E, R, P;
    if (w) {
        if (m.pos == g.pos)
            G && Ce <= 11 && m.parentOffset == 0 && (i.domObserver.suppressSelectionUpdates(),
            setTimeout( () => pe(i), 20)),
            E = i.state.tr.delete(_, K),
            R = h.resolve(u.start).marksAcross(h.resolve(u.endA));
        else if (u.endA == u.endB && (P = Kh(m.parent.content.cut(m.parentOffset, g.parentOffset), k.parent.content.cut(k.parentOffset, u.endA - k.start()))))
            E = i.state.tr,
            P.type == "add" ? E.addMark(_, K, P.mark) : E.removeMark(_, K, P.mark);
        else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
            let x = m.parent.textBetween(m.parentOffset, g.parentOffset);
            if (i.someProp("handleTextInput", z => z(i, _, K, x)))
                return;
            E = i.state.tr.insertText(x, _, K)
        }
    }
    if (E || (E = i.state.tr.replace(_, K, c.doc.slice(u.start - c.from, u.endB - c.from))),
    c.sel) {
        let x = Dr(i, E.doc, c.sel);
        x && !(V && ne && i.composing && x.empty && (u.start != u.endB || i.input.lastAndroidDelete < Date.now() - 100) && (x.head == _ || x.head == E.mapping.map(K) - 1) || G && x.empty && x.head == _) && E.setSelection(x)
    }
    R && E.ensureMarks(R),
    s && E.setMeta("composition", s),
    i.dispatch(E.scrollIntoView())
}
function Dr(i, e, t) {
    return Math.max(t.anchor, t.head) > e.content.size ? null : ti(i, e.resolve(t.anchor), e.resolve(t.head))
}
function Kh(i, e) {
    let t = i.firstChild.marks, n = e.firstChild.marks, r = t, s = n, o, l, a;
    for (let h = 0; h < n.length; h++)
        r = n[h].removeFromSet(r);
    for (let h = 0; h < t.length; h++)
        s = t[h].removeFromSet(s);
    if (r.length == 1 && s.length == 0)
        l = r[0],
        o = "add",
        a = h => h.mark(l.addToSet(h.marks));
    else if (r.length == 0 && s.length == 1)
        l = s[0],
        o = "remove",
        a = h => h.mark(l.removeFromSet(h.marks));
    else
        return null;
    let c = [];
    for (let h = 0; h < e.childCount; h++)
        c.push(a(e.child(h)));
    if (y.from(c).eq(i))
        return {
            mark: l,
            type: o
        }
}
function Jh(i, e, t, n, r) {
    if (t - e <= r.pos - n.pos || Nn(n, !0, !1) < r.pos)
        return !1;
    let s = i.resolve(e);
    if (!n.parent.isTextblock) {
        let l = s.nodeAfter;
        return l != null && t == e + l.nodeSize
    }
    if (s.parentOffset < s.parent.content.size || !s.parent.isTextblock)
        return !1;
    let o = i.resolve(Nn(s, !0, !0));
    return !o.parent.isTextblock || o.pos > t || Nn(o, !0, !1) < t ? !1 : n.parent.content.cut(n.parentOffset).eq(o.parent.content)
}
function Nn(i, e, t) {
    let n = i.depth
      , r = e ? i.end() : i.pos;
    for (; n > 0 && (e || i.indexAfter(n) == i.node(n).childCount); )
        n--,
        r++,
        e = !1;
    if (t) {
        let s = i.node(n).maybeChild(i.indexAfter(n));
        for (; s && !s.isLeaf; )
            s = s.firstChild,
            r++
    }
    return r
}
function Wh(i, e, t, n, r) {
    let s = i.findDiffStart(e, t);
    if (s == null)
        return null;
    let {a: o, b: l} = i.findDiffEnd(e, t + i.size, t + e.size);
    if (r == "end") {
        let a = Math.max(0, s - Math.min(o, l));
        n -= o + a - s
    }
    if (o < s && i.size < e.size) {
        let a = n <= s && n >= o ? s - n : 0;
        s -= a,
        s && s < e.size && Ar(e.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1),
        l = s + (l - o),
        o = s
    } else if (l < s) {
        let a = n <= s && n >= l ? s - n : 0;
        s -= a,
        s && s < i.size && Ar(i.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1),
        o = s + (o - l),
        l = s
    }
    return {
        start: s,
        endA: o,
        endB: l
    }
}
function Ar(i) {
    if (i.length != 2)
        return !1;
    let e = i.charCodeAt(0)
      , t = i.charCodeAt(1);
    return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319
}
class Td {
    constructor(e, t) {
        this._root = null,
        this.focused = !1,
        this.trackWrites = null,
        this.mounted = !1,
        this.markCursor = null,
        this.cursorWrapper = null,
        this.lastSelectedViewDesc = void 0,
        this.input = new hh,
        this.prevDirectPlugins = [],
        this.pluginViews = [],
        this.requiresGeckoHackNode = !1,
        this.dragging = null,
        this._props = t,
        this.state = t.state,
        this.directPlugins = t.plugins || [],
        this.directPlugins.forEach(Fr),
        this.dispatch = this.dispatch.bind(this),
        this.dom = e && e.mount || document.createElement("div"),
        e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)),
        this.editable = vr(this),
        Rr(this),
        this.nodeViews = Pr(this),
        this.docView = dr(this.state.doc, Ir(this), wn(this), this.dom, this),
        this.domObserver = new Ph(this, (n, r, s, o) => _h(this, n, r, s, o)),
        this.domObserver.start(),
        dh(this),
        this.updatePluginViews()
    }
    get composing() {
        return this.input.composing
    }
    get props() {
        if (this._props.state != this.state) {
            let e = this._props;
            this._props = {};
            for (let t in e)
                this._props[t] = e[t];
            this._props.state = this.state
        }
        return this._props
    }
    update(e) {
        e.handleDOMEvents != this._props.handleDOMEvents && Kn(this);
        let t = this._props;
        this._props = e,
        e.plugins && (e.plugins.forEach(Fr),
        this.directPlugins = e.plugins),
        this.updateStateInner(e.state, t)
    }
    setProps(e) {
        let t = {};
        for (let n in this._props)
            t[n] = this._props[n];
        t.state = this.state;
        for (let n in e)
            t[n] = e[n];
        this.update(t)
    }
    updateState(e) {
        this.updateStateInner(e, this._props)
    }
    updateStateInner(e, t) {
        var n;
        let r = this.state
          , s = !1
          , o = !1;
        e.storedMarks && this.composing && (io(this),
        o = !0),
        this.state = e;
        let l = r.plugins != e.plugins || this._props.plugins != t.plugins;
        if (l || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
            let p = Pr(this);
            Hh(p, this.nodeViews) && (this.nodeViews = p,
            s = !0)
        }
        (l || t.handleDOMEvents != this._props.handleDOMEvents) && Kn(this),
        this.editable = vr(this),
        Rr(this);
        let a = wn(this)
          , c = Ir(this)
          , h = r.plugins != e.plugins && !r.doc.eq(e.doc) ? "reset" : e.scrollToSelection > r.scrollToSelection ? "to selection" : "preserve"
          , d = s || !this.docView.matchesNode(e.doc, c, a);
        (d || !e.selection.eq(r.selection)) && (o = !0);
        let f = h == "preserve" && o && this.dom.style.overflowAnchor == null && Nc(this);
        if (o) {
            this.domObserver.stop();
            let p = d && (G || V) && !this.composing && !r.selection.empty && !e.selection.empty && Uh(r.selection, e.selection);
            if (d) {
                let u = V ? this.trackWrites = this.domSelectionRange().focusNode : null;
                this.composing && (this.input.compositionNode = Mh(this)),
                (s || !this.docView.update(e.doc, c, a, this)) && (this.docView.updateOuterDeco(c),
                this.docView.destroy(),
                this.docView = dr(e.doc, c, a, this.dom, this)),
                u && !this.trackWrites && (p = !0)
            }
            p || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && Yc(this)) ? pe(this, p) : (Ws(this, e.selection),
            this.domObserver.setCurSelection()),
            this.domObserver.start()
        }
        this.updatePluginViews(r),
        !((n = this.dragging) === null || n === void 0) && n.node && !r.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, r),
        h == "reset" ? this.dom.scrollTop = 0 : h == "to selection" ? this.scrollToSelection() : f && Oc(f)
    }
    scrollToSelection() {
        let e = this.domSelectionRange().focusNode;
        if (!this.someProp("handleScrollToSelection", t => t(this)))
            if (this.state.selection instanceof b) {
                let t = this.docView.domAfterPos(this.state.selection.from);
                t.nodeType == 1 && sr(this, t.getBoundingClientRect(), e)
            } else
                sr(this, this.coordsAtPos(this.state.selection.head, 1), e)
    }
    destroyPluginViews() {
        let e;
        for (; e = this.pluginViews.pop(); )
            e.destroy && e.destroy()
    }
    updatePluginViews(e) {
        if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
            this.prevDirectPlugins = this.directPlugins,
            this.destroyPluginViews();
            for (let t = 0; t < this.directPlugins.length; t++) {
                let n = this.directPlugins[t];
                n.spec.view && this.pluginViews.push(n.spec.view(this))
            }
            for (let t = 0; t < this.state.plugins.length; t++) {
                let n = this.state.plugins[t];
                n.spec.view && this.pluginViews.push(n.spec.view(this))
            }
        } else
            for (let t = 0; t < this.pluginViews.length; t++) {
                let n = this.pluginViews[t];
                n.update && n.update(this, e)
            }
    }
    updateDraggedNode(e, t) {
        let n = e.node
          , r = -1;
        if (this.state.doc.nodeAt(n.from) == n.node)
            r = n.from;
        else {
            let s = n.from + (this.state.doc.content.size - t.doc.content.size);
            (s > 0 && this.state.doc.nodeAt(s)) == n.node && (r = s)
        }
        this.dragging = new so(e.slice,e.move,r < 0 ? void 0 : b.create(this.state.doc, r))
    }
    someProp(e, t) {
        let n = this._props && this._props[e], r;
        if (n != null && (r = t ? t(n) : n))
            return r;
        for (let o = 0; o < this.directPlugins.length; o++) {
            let l = this.directPlugins[o].props[e];
            if (l != null && (r = t ? t(l) : l))
                return r
        }
        let s = this.state.plugins;
        if (s)
            for (let o = 0; o < s.length; o++) {
                let l = s[o].props[e];
                if (l != null && (r = t ? t(l) : l))
                    return r
            }
    }
    hasFocus() {
        if (G) {
            let e = this.root.activeElement;
            if (e == this.dom)
                return !0;
            if (!e || !this.dom.contains(e))
                return !1;
            for (; e && this.dom != e && this.dom.contains(e); ) {
                if (e.contentEditable == "false")
                    return !1;
                e = e.parentElement
            }
            return !0
        }
        return this.root.activeElement == this.dom
    }
    focus() {
        this.domObserver.stop(),
        this.editable && Ec(this.dom),
        pe(this),
        this.domObserver.start()
    }
    get root() {
        let e = this._root;
        if (e == null) {
            for (let t = this.dom.parentNode; t; t = t.parentNode)
                if (t.nodeType == 9 || t.nodeType == 11 && t.host)
                    return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()),
                    this._root = t
        }
        return e || document
    }
    updateRoot() {
        this._root = null
    }
    posAtCoords(e) {
        return vc(this, e)
    }
    coordsAtPos(e, t=1) {
        return zs(this, e, t)
    }
    domAtPos(e, t=0) {
        return this.docView.domFromPos(e, t)
    }
    nodeDOM(e) {
        let t = this.docView.descAt(e);
        return t ? t.nodeDOM : null
    }
    posAtDOM(e, t, n=-1) {
        let r = this.docView.posFromDOM(e, t, n);
        if (r == null)
            throw new RangeError("DOM position not inside the editor");
        return r
    }
    endOfTextblock(e, t) {
        return Lc(this, t || this.state, e)
    }
    pasteHTML(e, t) {
        return Et(this, "", e, !1, t || new ClipboardEvent("paste"))
    }
    pasteText(e, t) {
        return Et(this, e, null, !0, t || new ClipboardEvent("paste"))
    }
    destroy() {
        this.docView && (fh(this),
        this.destroyPluginViews(),
        this.mounted ? (this.docView.update(this.state.doc, [], wn(this), this),
        this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom),
        this.docView.destroy(),
        this.docView = null,
        mc())
    }
    get isDestroyed() {
        return this.docView == null
    }
    dispatchEvent(e) {
        return ph(this, e)
    }
    dispatch(e) {
        let t = this._props.dispatchTransaction;
        t ? t.call(this, e) : this.updateState(this.state.apply(e))
    }
    domSelectionRange() {
        let e = this.domSelection();
        return J && this.root.nodeType === 11 && bc(this.dom.ownerDocument) == this.dom && zh(this, e) || e
    }
    domSelection() {
        return this.root.getSelection()
    }
}
function Ir(i) {
    let e = Object.create(null);
    return e.class = "ProseMirror",
    e.contenteditable = String(i.editable),
    i.someProp("attributes", t => {
        if (typeof t == "function" && (t = t(i.state)),
        t)
            for (let n in t)
                n == "class" ? e.class += " " + t[n] : n == "style" ? e.style = (e.style ? e.style + ";" : "") + t[n] : !e[n] && n != "contenteditable" && n != "nodeName" && (e[n] = String(t[n]))
    }
    ),
    e.translate || (e.translate = "no"),
    [$.node(0, i.state.doc.content.size, e)]
}
function Rr(i) {
    if (i.markCursor) {
        let e = document.createElement("img");
        e.className = "ProseMirror-separator",
        e.setAttribute("mark-placeholder", "true"),
        e.setAttribute("alt", ""),
        i.cursorWrapper = {
            dom: e,
            deco: $.widget(i.state.selection.head, e, {
                raw: !0,
                marks: i.markCursor
            })
        }
    } else
        i.cursorWrapper = null
}
function vr(i) {
    return !i.someProp("editable", e => e(i.state) === !1)
}
function Uh(i, e) {
    let t = Math.min(i.$anchor.sharedDepth(i.head), e.$anchor.sharedDepth(e.head));
    return i.$anchor.start(t) != e.$anchor.start(t)
}
function Pr(i) {
    let e = Object.create(null);
    function t(n) {
        for (let r in n)
            Object.prototype.hasOwnProperty.call(e, r) || (e[r] = n[r])
    }
    return i.someProp("nodeViews", t),
    i.someProp("markViews", t),
    e
}
function Hh(i, e) {
    let t = 0
      , n = 0;
    for (let r in i) {
        if (i[r] != e[r])
            return !0;
        t++
    }
    for (let r in e)
        n++;
    return t != n
}
function Fr(i) {
    if (i.spec.state || i.spec.filterTransaction || i.spec.appendTransaction)
        throw new RangeError("Plugins passed directly to the view must not have a state component")
}
const Md = i => i ? {
    enabled: !!qr(i, "463092697").value?.softmentionEnabled
} : {
    enabled: !1
};
function $h() {
    return {
        trackingKeywordsRegex: void 0,
        decorations: O.empty,
        highlightedKeywords: new Set,
        matchedKeywords: new Set
    }
}
const ho = ({tr: i, regex: e, prevHighlightedKeywords: t, prevMatchedKeywords: n}) => {
    const r = []
      , s = new Set
      , o = new Set;
    return e ? (i.doc.descendants( (l, a) => {
        if (!l.isText || !l.text)
            return;
        const c = l.text;
        for (const h of c.matchAll(e)) {
            if (s.add(h[1]),
            !t.has(h[1]) && n.has(h[1]))
                continue;
            o.add(h[1]);
            const d = a + h.index
              , f = d + h[0].length;
            r.push($.inline(d, f, {
                class: "hint-pill"
            }, {
                keyword: h[1]
            }))
        }
    }
    ),
    {
        decorations: O.create(i.doc, r),
        matchedKeywords: s,
        highlightedKeywords: o
    }) : {
        decorations: O.empty,
        matchedKeywords: s,
        highlightedKeywords: o
    }
}
  , Gh = (i, e) => {
    const {state: t, dispatch: n} = e
      , r = t.tr
      , s = we.getState(t);
    if (s) {
        const o = i.length > 0 ? new RegExp(`\\b(${i.join("|")})\\b`,"gi") : void 0
          , {decorations: l, highlightedKeywords: a, matchedKeywords: c} = ho({
            tr: r,
            regex: o,
            prevHighlightedKeywords: s.highlightedKeywords,
            prevMatchedKeywords: s.matchedKeywords
        });
        r.setMeta(we, {
            ...s,
            trackingKeywordsRegex: o,
            decorations: l,
            highlightedKeywords: a,
            matchedKeywords: c
        })
    }
    n(r)
}
  , jh = (i, e) => {
    if (i.length === 0)
        return;
    const {state: t, dispatch: n} = e
      , r = t.tr
      , s = we.getState(t);
    if (s) {
        const o = s.decorations.remove(s.decorations.find(void 0, void 0, l => l.keyword && i.includes(l.keyword)));
        r.setMeta(we, {
            ...s,
            decorations: o,
            highlightedKeywords: new Set([...s.highlightedKeywords].filter(l => !i.includes(l)))
        })
    }
    n(r)
}
  , we = new ot("keywordPlugin");
function wd() {
    return new Ne({
        key: we,
        state: {
            init() {
                return $h()
            },
            apply(i, e) {
                if (i.getMeta(we))
                    return {
                        ...e,
                        ...i.getMeta(we)
                    };
                if (!i.docChanged)
                    return e;
                const {decorations: t, matchedKeywords: n, highlightedKeywords: r} = ho({
                    tr: i,
                    regex: e.trackingKeywordsRegex,
                    prevHighlightedKeywords: e.highlightedKeywords,
                    prevMatchedKeywords: e.matchedKeywords
                });
                return {
                    ...e,
                    decorations: t,
                    highlightedKeywords: r,
                    matchedKeywords: n
                }
            }
        },
        props: {
            decorations(i) {
                const e = this.getState(i);
                return e ? e.decorations : O.empty
            }
        }
    })
}
const Pe = new ot("menuSelectorPlugin");
function zr(i) {
    i.dispatch(i.state.tr.setMeta(Pe, {
        active: !1,
        onMenuAction: void 0
    }))
}
function Nd(i, e) {
    i.dispatch(i.state.tr.setMeta(Pe, {
        active: !0,
        onMenuAction: e
    }))
}
function Od(i={
    submitKeys: ["Enter", "Tab"],
    cancelKeys: ["Escape"],
    checkStrictMatchKeys: [" "]
}) {
    return new Ne({
        key: Pe,
        state: {
            init() {
                return {
                    ...i,
                    active: !1
                }
            },
            apply(e, t) {
                const n = e.getMeta(Pe);
                return n ? {
                    ...t,
                    ...n
                } : t
            }
        },
        props: {
            handleKeyDown(e, t) {
                const n = Pe.getState(e.state);
                if (!n.active)
                    return !1;
                if (!t.isComposing)
                    return n.submitKeys.includes(t.key) ? (t.preventDefault(),
                    t.stopPropagation(),
                    t.stopImmediatePropagation(),
                    zr(e),
                    n.onMenuAction?.("submit") ?? !0) : n.cancelKeys.includes(t.key) ? (t.preventDefault(),
                    n.onMenuAction?.("cancel"),
                    zr(e),
                    !0) : t.key === "ArrowUp" ? (t.preventDefault(),
                    n.onMenuAction?.("up"),
                    !0) : t.key === "ArrowDown" ? (t.preventDefault(),
                    n.onMenuAction?.("down"),
                    !0) : n.checkStrictMatchKeys.includes(t.key) && n.onMenuAction?.("checkMatch") ? (t.preventDefault(),
                    !0) : !1
            },
            handleDOMEvents: {
                blur: e => {
                    Pe.getState(e.state).onMenuAction?.("cancel")
                }
            }
        }
    })
}
const gt = new ot("placeholderPlugin");
function Ed(i) {
    return new Ne({
        key: gt,
        state: {
            init() {
                return {
                    placeholder: i
                }
            },
            apply(e, t) {
                return e.getMeta(gt) ? {
                    placeholder: e.getMeta(gt).placeholder
                } : t
            }
        },
        props: {
            decorations(e) {
                const {doc: t} = e;
                if (t.childCount === 1 && t.firstChild?.isTextblock && t.firstChild.content.size === 0) {
                    const r = []
                      , {placeholder: s} = gt.getState(e);
                    return e.doc.descendants( (o, l) => {
                        const a = $.node(l, l + o.nodeSize, {
                            class: "placeholder",
                            "data-placeholder": s
                        });
                        r.push(a)
                    }
                    ),
                    O.create(t, r)
                }
            }
        }
    })
}
class Yh extends Mo {
    constructor(e, t) {
        super(),
        this.view = e,
        this.storeOverrides = t,
        this._store = dl( () => ({
            isFocused: !1,
            autocompletions: [],
            showTaggingDropdown: !1,
            waveWidth: 300,
            rateLimitBannerFeature: null,
            isExpanded: !0,
            ...t
        })),
        this.subscribe("focus", () => this._store.setState({
            isFocused: !0
        })),
        this.subscribe("blur", () => this._store.setState({
            isFocused: !1
        }))
    }
    fileInputHandle = null;
    _store;
    get store() {
        return this._store
    }
    _usedDictation = !1;
    _dictationEdited = !1;
    _dictationAssetPointer = null;
    _dictationAssetTTL = null;
    get usedDictation() {
        return this._usedDictation
    }
    set usedDictation(e) {
        this._usedDictation = e
    }
    get dictationEdited() {
        return this._dictationEdited
    }
    set dictationEdited(e) {
        this._dictationEdited = e
    }
    get dictationAssetPointer() {
        return this._dictationAssetPointer
    }
    set dictationAssetPointer(e) {
        this._dictationAssetPointer = e
    }
    get dictationAssetTTL() {
        return this._dictationAssetTTL
    }
    set dictationAssetTTL(e) {
        this._dictationAssetTTL = e
    }
    get element() {
        return this.view.dom
    }
    get document() {
        return this.view.dom.ownerDocument
    }
    isEmpty() {
        const e = this.view.state.doc;
        if (e.childCount === 0)
            return !0;
        if (e.childCount === 1 && e.firstChild?.isTextblock) {
            const t = e.firstChild.content;
            if (t.size === 0)
                return !0;
            if (t.childCount === 1 && t.firstChild?.isText)
                return /^\s*$/.test(t.firstChild.text ?? "")
        }
        return !1
    }
    isEmpty$ = Ti("composer-empty", e => this.subscribe("change", e), () => this.isEmpty());
    isFocused() {
        return this.view.hasFocus()
    }
    isFocused$ = Ti("composer-focused", e => {
        const t = this.subscribe("focus", e)
          , n = this.subscribe("blur", e);
        return () => {
            n(),
            t()
        }
    }
    , () => this.isFocused());
    containsFocus$ = fl( () => this.composerFocusDepth$() > 0);
    composerFocusDepth$ = rt(0);
    lastFocusedDestructor;
    onComposerRootFocus = e => {
        this.lastFocusedDestructor?.(),
        this.composerFocusDepth$.set(s => s + 1);
        const t = () => {
            this.lastFocusedDestructor?.(),
            setTimeout( () => {
                this.composerFocusDepth$.set(s => s - 1)
            }
            , 120)
        }
          , n = e.target;
        n.addEventListener("blur", t);
        const r = new MutationObserver( () => {
            document.documentElement.contains(n) || t()
        }
        );
        r.observe(document.documentElement, {
            childList: !0,
            subtree: !0
        }),
        this.lastFocusedDestructor = () => {
            n.removeEventListener("blur", t),
            r.disconnect(),
            this.lastFocusedDestructor = void 0
        }
    }
    ;
    getComposerFocusTrackingRootProps() {
        return {
            onFocusCapture: this.onComposerRootFocus
        }
    }
    trimLeadingText(e) {
        const n = this.view.state.tr;
        let r = 0;
        return n.doc.descendants( (s, o) => {
            if (s.isText && s.text) {
                if (typeof e == "string" && s.text.startsWith(e))
                    r = e.length;
                else if (e instanceof RegExp) {
                    const l = s.text.match(e);
                    l?.index === 0 && (r = l[0].length)
                }
                if (r) {
                    const l = s.text.substring(r).trimStart();
                    r = s.text.length - l.length,
                    n.delete(o, o + r)
                }
            }
            return !s.isLeaf
        }
        ),
        r > 0 ? (this.view.dispatch(n),
        !0) : !1
    }
    replaceAll(e, t) {
        const r = this.view.state.tr
          , s = [];
        r.doc.descendants( (o, l) => {
            !o.isText || o.text === void 0 || s.push({
                node: o,
                pos: l
            })
        }
        ),
        s.reverse(),
        s.forEach( ({node: o, pos: l}) => {
            !o.isText || o.text === void 0 || o.text.includes(e) && r.insertText(o.text.replaceAll(e, t), l, l + o.text.length)
        }
        ),
        this.view.dispatch(r)
    }
    appendText(e) {
        this.view.dispatch(this.view.state.tr.insertText(e))
    }
    prependParagraph(e) {
        this.view.dispatch(this.view.state.tr.setSelection(T.create(this.view.state.doc, 0))),
        Qn(this.view.state, this.view.dispatch),
        this.view.dispatch(this.view.state.tr.insertText(e, 0))
    }
    delete(e, t) {
        this.view.dispatch(this.view.state.tr.delete(e, t))
    }
    focus() {
        this.view.hasFocus() || (this.view.focus(),
        this.view.dispatch(this.view.state.tr.setSelection(T.atEnd(this.view.state.doc)).scrollIntoView()))
    }
    setText(e) {
        const {tr: t, schema: n} = this.view.state
          , r = e ? n.nodes.paragraph.create(null, n.text(e)) : n.nodes.paragraph.create();
        this.view.dispatch(t.replaceWith(0, this.view.state.doc.content.size, r)),
        this.view.hasFocus() && this.view.dispatch(this.view.state.tr.setSelection(T.atEnd(this.view.state.doc)))
    }
    getContentLength() {
        return this.view.state.doc.content.size
    }
    getCurrentText() {
        return this.view.state.doc.textContent
    }
    hasMultipleLines() {
        let e = 0;
        return this.view.state.doc.descendants(t => {
            t.isBlock && e++
        }
        ),
        e > 1
    }
    getContentToSend() {
        return dc(this.view)
    }
    resize() {}
    isReady() {
        return !!this.view.state.doc
    }
    setPlaceholder(e) {
        this.view.dispatch(this.view.state.tr.setMeta(gt, {
            placeholder: e
        }))
    }
    getSelectionStart() {
        return this.view.state.selection.ranges[0].$from.pos
    }
    setSelection(e, t) {
        this.view.dispatch(this.view.state.tr.setSelection(T.create(this.view.state.doc, e, t))),
        this.view.focus()
    }
    isMenuSelectorActive() {
        return Pe.getState(this.view.state).active
    }
    registerKeyHandlers(e) {
        ja(this.view, e)
    }
    registerFileInput(e) {
        this.fileInputHandle = e
    }
    openFileDialog() {
        this.fileInputHandle?.openFileDialog()
    }
    subscribe(e, t) {
        if (e === "change") {
            const n = () => {
                this.usedDictation && (this._dictationEdited = !0),
                t(void 0)
            }
            ;
            return er(this.view, n)
        }
        return this.view.dom?.addEventListener(e, t, {
            capture: !0
        }),
        () => {
            this.view.dom?.removeEventListener(e, t, {
                capture: !0
            })
        }
    }
    useState(e) {
        return se.useSyncExternalStore(t => er(this.view, t), () => e(this), () => e(this))
    }
    getKeywords() {
        return [...we.getState(this.view.state)?.matchedKeywords ?? []]
    }
    removeKeywordDecorations(e) {
        e.length !== 0 && jh(e, this.view)
    }
    resetTrackingKeywords(e) {
        Gh(e, this.view)
    }
    canShowAutocompletion() {
        return !this.isMenuSelectorActive()
    }
}
const Xh = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function Qh(i) {
    let e = i.split(/-(?!$)/)
      , t = e[e.length - 1];
    t == "Space" && (t = " ");
    let n, r, s, o;
    for (let l = 0; l < e.length - 1; l++) {
        let a = e[l];
        if (/^(cmd|meta|m)$/i.test(a))
            o = !0;
        else if (/^a(lt)?$/i.test(a))
            n = !0;
        else if (/^(c|ctrl|control)$/i.test(a))
            r = !0;
        else if (/^s(hift)?$/i.test(a))
            s = !0;
        else if (/^mod$/i.test(a))
            Xh ? o = !0 : r = !0;
        else
            throw new Error("Unrecognized modifier name: " + a)
    }
    return n && (t = "Alt-" + t),
    r && (t = "Ctrl-" + t),
    o && (t = "Meta-" + t),
    s && (t = "Shift-" + t),
    t
}
function Zh(i) {
    let e = Object.create(null);
    for (let t in i)
        e[Qh(t)] = i[t];
    return e
}
function On(i, e, t=!0) {
    return e.altKey && (i = "Alt-" + i),
    e.ctrlKey && (i = "Ctrl-" + i),
    e.metaKey && (i = "Meta-" + i),
    t && e.shiftKey && (i = "Shift-" + i),
    i
}
function Dd(i) {
    return new Ne({
        props: {
            handleKeyDown: fo(i)
        }
    })
}
function fo(i) {
    let e = Zh(i);
    return function(t, n) {
        let r = wo(n), s, o = e[On(r, n)];
        if (o && o(t.state, t.dispatch, t))
            return !0;
        if (r.length == 1 && r != " ") {
            if (n.shiftKey) {
                let l = e[On(r, n, !1)];
                if (l && l(t.state, t.dispatch, t))
                    return !0
            }
            if ((n.shiftKey || n.altKey || n.metaKey || r.charCodeAt(0) > 127) && (s = No[n.keyCode]) && s != r) {
                let l = e[On(s, n)];
                if (l && l(t.state, t.dispatch, t))
                    return !0
            }
        }
        return !1
    }
}
class D extends C {
    constructor(e) {
        super(e, e)
    }
    map(e, t) {
        let n = e.resolve(t.map(this.head));
        return D.valid(n) ? new D(n) : C.near(n)
    }
    content() {
        return S.empty
    }
    eq(e) {
        return e instanceof D && e.head == this.head
    }
    toJSON() {
        return {
            type: "gapcursor",
            pos: this.head
        }
    }
    static fromJSON(e, t) {
        if (typeof t.pos != "number")
            throw new RangeError("Invalid input for GapCursor.fromJSON");
        return new D(e.resolve(t.pos))
    }
    getBookmark() {
        return new li(this.anchor)
    }
    static valid(e) {
        let t = e.parent;
        if (t.isTextblock || !ed(e) || !td(e))
            return !1;
        let n = t.type.spec.allowGapCursor;
        if (n != null)
            return n;
        let r = t.contentMatchAt(e.index()).defaultType;
        return r && r.isTextblock
    }
    static findGapCursorFrom(e, t, n=!1) {
        e: for (; ; ) {
            if (!n && D.valid(e))
                return e;
            let r = e.pos
              , s = null;
            for (let o = e.depth; ; o--) {
                let l = e.node(o);
                if (t > 0 ? e.indexAfter(o) < l.childCount : e.index(o) > 0) {
                    s = l.child(t > 0 ? e.indexAfter(o) : e.index(o) - 1);
                    break
                } else if (o == 0)
                    return null;
                r += t;
                let a = e.doc.resolve(r);
                if (D.valid(a))
                    return a
            }
            for (; ; ) {
                let o = t > 0 ? s.firstChild : s.lastChild;
                if (!o) {
                    if (s.isAtom && !s.isText && !b.isSelectable(s)) {
                        e = e.doc.resolve(r + s.nodeSize * t),
                        n = !1;
                        continue e
                    }
                    break
                }
                s = o,
                r += t;
                let l = e.doc.resolve(r);
                if (D.valid(l))
                    return l
            }
            return null
        }
    }
}
D.prototype.visible = !1;
D.findFrom = D.findGapCursorFrom;
C.jsonID("gapcursor", D);
class li {
    constructor(e) {
        this.pos = e
    }
    map(e) {
        return new li(e.map(this.pos))
    }
    resolve(e) {
        let t = e.resolve(this.pos);
        return D.valid(t) ? new D(t) : C.near(t)
    }
}
function ed(i) {
    for (let e = i.depth; e >= 0; e--) {
        let t = i.index(e)
          , n = i.node(e);
        if (t == 0) {
            if (n.type.spec.isolating)
                return !0;
            continue
        }
        for (let r = n.child(t - 1); ; r = r.lastChild) {
            if (r.childCount == 0 && !r.inlineContent || r.isAtom || r.type.spec.isolating)
                return !0;
            if (r.inlineContent)
                return !1
        }
    }
    return !0
}
function td(i) {
    for (let e = i.depth; e >= 0; e--) {
        let t = i.indexAfter(e)
          , n = i.node(e);
        if (t == n.childCount) {
            if (n.type.spec.isolating)
                return !0;
            continue
        }
        for (let r = n.child(t); ; r = r.firstChild) {
            if (r.childCount == 0 && !r.inlineContent || r.isAtom || r.type.spec.isolating)
                return !0;
            if (r.inlineContent)
                return !1
        }
    }
    return !0
}
function Ad() {
    return new Ne({
        props: {
            decorations: sd,
            createSelectionBetween(i, e, t) {
                return e.pos == t.pos && D.valid(t) ? new D(t) : null
            },
            handleClick: id,
            handleKeyDown: nd,
            handleDOMEvents: {
                beforeinput: rd
            }
        }
    })
}
const nd = fo({
    ArrowLeft: Vt("horiz", -1),
    ArrowRight: Vt("horiz", 1),
    ArrowUp: Vt("vert", -1),
    ArrowDown: Vt("vert", 1)
});
function Vt(i, e) {
    const t = i == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
    return function(n, r, s) {
        let o = n.selection
          , l = e > 0 ? o.$to : o.$from
          , a = o.empty;
        if (o instanceof T) {
            if (!s.endOfTextblock(t) || l.depth == 0)
                return !1;
            a = !1,
            l = n.doc.resolve(e > 0 ? l.after() : l.before())
        }
        let c = D.findGapCursorFrom(l, e, a);
        return c ? (r && r(n.tr.setSelection(new D(c))),
        !0) : !1
    }
}
function id(i, e, t) {
    if (!i || !i.editable)
        return !1;
    let n = i.state.doc.resolve(e);
    if (!D.valid(n))
        return !1;
    let r = i.posAtCoords({
        left: t.clientX,
        top: t.clientY
    });
    return r && r.inside > -1 && b.isSelectable(i.state.doc.nodeAt(r.inside)) ? !1 : (i.dispatch(i.state.tr.setSelection(new D(n))),
    !0)
}
function rd(i, e) {
    if (e.inputType != "insertCompositionText" || !(i.state.selection instanceof D))
        return !1;
    let {$from: t} = i.state.selection
      , n = t.parent.contentMatchAt(t.index()).findWrapping(i.state.schema.nodes.text);
    if (!n)
        return !1;
    let r = y.empty;
    for (let o = n.length - 1; o >= 0; o--)
        r = y.from(n[o].createAndFill(null, r));
    let s = i.state.tr.replace(t.pos, t.pos, new S(r,0,0));
    return s.setSelection(T.near(s.doc.resolve(t.pos + 1))),
    i.dispatch(s),
    !1
}
function sd(i) {
    if (!(i.selection instanceof D))
        return null;
    let e = document.createElement("div");
    return e.className = "ProseMirror-gapcursor",
    O.create(i.doc, [$.widget(i.selection.head, e, {
        key: "gapcursor"
    })])
}
const uo = rt({})
  , po = rt(void 0)
  , mo = rt(void 0)
  , Jn = rt(0)
  , Wn = rt(0)
  , Id = ({serverThreadId: i, clientThreadId: e, getIsDisabled: t, composerController: n, currentModelId: r, account: s, onReset: o, onInfer: l, isInferEnabledForModel: a}) => {
    const [c,h] = se.useState(!1)
      , d = _r()
      , f = qr(d, "657118093").value
      , p = Number(f?.web_debounce_ms ?? 400)
      , m = Un(d, "209963048") && ["gpt-4o", "auto"].includes(r)
      , g = ul()
      , k = se.useRef(null)
      , v = pl( ({enableInferredJuice: A}) => A) || m || a
      , _ = se.useRef(l);
    _.current = l;
    const K = se.useRef(0)
      , E = se.useRef(0)
      , R = ml( () => mo())
      , P = gl(e, A => A?.modelId)
      , x = se.useCallback(Br(A => {
        if (t())
            return;
        $e.logEventWithStatsig("chatgpt_web_autoswitch_infer_called", "chatgpt_web_autoswitch_infer_called", {
            is_paid_user: s?.hasPaidSubscription()
        });
        const Q = A.length
          , cn = Q < 5 ? "<5" : Q <= 10 ? "5-10" : Q <= 20 ? "10-20" : Q <= 50 ? "30-50" : "50+";
        if (Ge.count(je.DEFAULT, "chatgpt_web_autoswitch_infer_called", {
            prompt_length: cn,
            is_paid_user: s?.hasPaidSubscription() ? "true" : "false"
        }),
        m)
            return;
        const vt = ++K.current
          , lt = Date.now();
        h(lt);
        const Ke = yt(e)
          , at = H.getCurrentNode(Ke);
        yl.safePost("/conversation/infer", {
            requestBody: {
                prompt: A,
                conversation_id: i ?? null,
                is_history_and_training_disabled: g,
                parent_message_id: at.message.id,
                auto_switcher_treatment_override: R,
                model_id: P
            },
            additionalHeaders: {
                "x-conduit-token": k.current ?? ""
            },
            authOption: Sl.SendIfAvailable
        }).then(re => {
            if (k.current = re.conduit_token ?? null,
            t() || E.current > vt || n.getContentToSend().content.length < A.length)
                return;
            E.current = vt;
            const {effort_mode: ct, debug_info: Pt, request_id: Ft} = re;
            Pt && uo.set(Pt),
            Ft && po.set(Ft),
            Jn.set(ht => ht + 1),
            Wn.set(A.length),
            _.current(ct)
        }
        ).finally( () => {
            h(re => re && lt < re ? re : !1)
        }
        )
    }
    , p), [t, i, R, P])
      , z = se.useRef(void 0);
    return se.useEffect( () => {
        if (!v || !(n instanceof Yh)) {
            P && P !== z.current && (z.current = P);
            return
        }
        const A = () => {
            const {content: Q} = n.getContentToSend();
            t() || !v || (Q ? x(Q) : (k.current = null,
            o(),
            h(!1),
            ++K.current,
            E.current = K.current))
        }
        ;
        return P && P !== z.current && (z.current = P,
        A()),
        n.subscribe("change", () => {
            A()
        }
        )
    }
    , [v, t, n, x, l, o, i, g, P]),
    c !== !1
}
;
class od {
    constructor(e, t, n, r, s, o, l, a, c, h, d, f, p, u, m, g, k, w, v, _=!1, K, E=!1, R=!1) {
        this.ctx = e,
        this.requestId = t,
        this.queryClient = n,
        this.initialThread = r,
        this.clientThreadId = s,
        this.parentMessageId = o,
        this.prependMessages = l,
        this.promptMessage = a,
        this.appendMessages = c,
        this.completionType = h,
        this.model = d,
        this.effortMode = f,
        this.eventSource = p,
        this.isHistoryAndTrainingDisabled = u,
        this.startPreflightTime = m,
        this.isSnorlaxEnabledForGizmo = g,
        this.isNewThread = k,
        this.isContinuingFromSharedConversation = w,
        this.turnTracker = v,
        this.isAnonModeEnabled = K,
        this.isContinuableSharedPost = E,
        this.isReasoningSkipped = R,
        this.completionLatencyTracker = new Oo(this.requestId,m),
        this.isFirstCompletionInThread = k || this.isContinuingFromSharedConversation || this.isContinuableSharedPost,
        this.placeholderNodeId = `${kl}${t}`,
        _ && (this.sentNotification = !0)
    }
    isFirstCompletionInThread;
    activeBranchLastMessage;
    messagesToUpdate = {};
    allIncompleteMessageIds = new Set;
    responseThreadId;
    isCompletionBlocked = !1;
    isEitherFlagged = !1;
    sentNotification = !1;
    variantsInStreamInfo;
    blurDuringCompletionTracker = new Eo;
    completionLatencyTracker;
    preflightTime;
    treatCompletionAsAsync = !1;
    realtimeAsyncCompletion = !1;
    resumeToken;
    placeholderNodeId;
    updateBeforeRequest() {
        Do(),
        Ao.incrementUserMessageCount(wi(this.ctx) ? Mi.LoggedIn : Mi.LoggedOut),
        Ni.retainThread(this.clientThreadId),
        Z(this.clientThreadId, e => {
            e.conduitToken = null,
            e.prepareState = null,
            e.lastPrepareTimestamp = null,
            this.completionType === En.Next && H.hasUserMessage(e) && this.promptMessage?.author.role === St.User && (e.scrollToMessageId = this.promptMessage?.id),
            De.updateTree(e, (t, n) => {
                if (this.parentMessageId && (n = H.getNode(e, this.parentMessageId).id),
                this.prependMessages)
                    for (const o of this.prependMessages)
                        n = t.addMessageNode(n, o);
                if (this.promptMessage && (n = t.addMessageNode(n, this.promptMessage)),
                this.appendMessages)
                    for (const o of this.appendMessages)
                        n = t.addMessageNode(n, o);
                const r = this.promptMessage?.metadata?.gizmo_id
                  , s = Oi("", r ? {
                    gizmo_id: r
                } : void 0, {
                    requestId: this.requestId,
                    isPlaceholder: !0
                }, this.placeholderNodeId);
                return n = t.addMessageNode(n, s),
                n
            }
            )
        }
        )
    }
    async sendRequest$({conduitToken: e, turnstileToken: t, proofToken: n, completionMetadata: r, resolvedParentMessageId: s, messages: o, extraStreamParams: l, chatReq: a, profiler: c}) {
        yi(this.clientThreadId, !0);
        const h = new AbortController;
        Si.addRequest(this.requestId, h, this.turnTracker);
        const d = bl()
          , f = Io(this.ctx, {
            conversationOrigin: this.initialThread?.conversationOrigin ?? null,
            model: this.model,
            completionType: this.completionType,
            prepareState: this.initialThread?.prepareState ?? "none",
            conduitToken: e,
            threadId: Ei(this.clientThreadId),
            effortMode: this.effortMode ?? void 0,
            isReasoningSkipped: this.isReasoningSkipped,
            inferRequestId: po(),
            inferDebugInfo: uo(),
            overrideInferTreatment: mo(),
            continueFromSharedConversationId: this.initialThread?.continuingFromSharedConversationId,
            continueFromSharedPostId: this.initialThread?.continuingFromSharedPostId,
            forkFromSharedPost: this.initialThread?.forkFromSharedPost,
            historyDisabled: this.isHistoryAndTrainingDisabled,
            isAnonModeEnabled: this.isAnonModeEnabled,
            parentMessageId: s,
            messages: o,
            chatReq: a,
            turnstileToken: t,
            proofToken: n,
            completionMetadata: r,
            contextualInfo: {
                is_dark_mode: xl(),
                time_since_loaded: Math.floor(performance.now() / 1e3),
                page_height: window.innerHeight,
                page_width: window.innerWidth,
                pixel_ratio: window.devicePixelRatio,
                screen_height: window.screen.height,
                screen_width: window.screen.width
            },
            isOnboardingConversation: r?.isOnboardingConversation,
            forceParagen: d.forceParagen,
            forceParagenModel: d.forceParagen ? d.forceParagenModel.value : void 0,
            forceRateLimit: d.forceRateLimit,
            resetRateLimits: d.resetRateLimits,
            recordRendering: d.recordRendering,
            disableSystemContentToggling: d.rebaseSystemMessageContent != null,
            forceUseSearch: d.forceUseSearch ?? void 0,
            paragenStreamType: d.paragenStreamType,
            paragenCotSummaryDisplay: d.paragenCotSummaryDisplay,
            ...Lr(this.ctx) ? {
                f_completion: !0
            } : {},
            ...Ro() ? {
                f_search: !0
            } : {},
            ...l
        }, this.turnTracker, c, h.signal, this.clientThreadId);
        try {
            for await(const p of f)
                p.type === "connected" ? this.#n(p) : vo(p) && this.#i(p)
        } catch (p) {
            Cl(p) || h.signal.aborted ? this.#m(p) : this.#r(p)
        } finally {
            yi(this.clientThreadId, !1)
        }
    }
    #n(e) {
        const {serverRequestId: t} = e;
        this.turnTracker.onStreamOpen(),
        t && this.turnTracker.onReceivedServerRequestId(t),
        Po(this.requestId, this.model, t, Tl(this.preflightTime))
    }
    #i = e => {
        if (this.activeBranchLastMessage && this.completionLatencyTracker.onResponse(e, this.activeBranchLastMessage, this.responseThreadId),
        this.responseThreadId === void 0 && "conversationId"in e) {
            const t = e.conversationId;
            if (this.responseThreadId = t,
            Ml(this.clientThreadId) && Ei(this.clientThreadId) !== t && (Fo(this.ctx, this.clientThreadId, t),
            $e.logEvent("Attribution: Client Thread to Server Thread", {
                client_thread_id: this.clientThreadId,
                server_thread_id: t
            })),
            this.isContinuingFromSharedConversation && (Z(this.clientThreadId, r => {
                delete r.continuingFromSharedConversationId
            }
            ),
            hn.logEvent("chatgpt_continue_conversation_first_message_sent"),
            $e.logEvent("Continue Conversation: First Message Sent")),
            this.isContinuableSharedPost && Z(this.clientThreadId, r => {
                delete r.continuingFromSharedPostId,
                delete r.forkFromSharedPost
            }
            ),
            this.isFirstCompletionInThread) {
                const r = yt(this.clientThreadId);
                $e.logEvent("Create New Thread"),
                !this.isHistoryAndTrainingDisabled && zo(r?.mode) && wi(this.ctx) && (Bo(this.queryClient, H.getGizmoId(r)),
                r?.disableConversationNavigation || Lo(Vo, this.queryClient, t, this.isSnorlaxEnabledForGizmo))
            }
            const n = {
                id: this.requestId,
                threadId: this.responseThreadId,
                completionType: this.completionType,
                eventSource: this.eventSource,
                model: this.model
            };
            if (this.completionType === En.Next) {
                const r = H.getConversationTurns(this.initialThread)
                  , s = r.length
                  , o = r.filter(a => a.role === St.User)
                  , l = o && o[o.length - 1]?.messages[0];
                if (l?.content.content_type === dn.Text) {
                    const a = l.content.parts.join("").length
                      , c = o?.length ?? 0;
                    n.countConversationTurns = s,
                    n.countUserSubmittedMessages = c,
                    n.countLastUserPromptTextMessageLength = a
                }
            }
            $e.logEvent("Generate Completion", n)
        }
        switch (e.type) {
        case "num_variants_in_stream":
            this.#d(e);
            break;
        case "moderation":
            this.#f(e);
            break;
        case "url_moderation":
            this.#u(e);
            break;
        case "message":
            this.#p(e);
            break;
        case "done":
            this.#e();
            break;
        case "gizmo_inline_review":
            this.#s(e);
            break;
        case "title_generation":
            this.#o(e);
            break;
        case "conversation_detail_metadata":
            this.#l(e);
            break;
        case "beacon_ui_response":
            this.#a(e);
            break;
        case "conversation_async_status":
            this.#c(e);
            break;
        case "resume_conversation_token":
            this.#h(e);
            break
        }
    }
    ;
    #r(e) {
        const t = wl(e)
          , n = t.message
          , r = e instanceof fn ? e.code : void 0
          , s = e instanceof fn ? e.detail?.can_retry : void 0
          , o = n === Di
          , l = o && !this.treatCompletionAsAsync && Nl(this.ctx, "816388808").get("is_network_disconnect_polling_enabled", !1)
          , a = o && !this.treatCompletionAsAsync && Un(this.ctx, "264061553");
        (l || a) && (this.treatCompletionAsAsync = !0),
        this.debouncedUpdateExistingMessages.flush();
        const c = l || a;
        switch (this.treatCompletionAsAsync && n === Di && !c || Z(this.clientThreadId, d => {
            De.updateTree(d, (f, p) => {
                const u = this.variantsInStreamInfo ? H.getParentPromptNode(d)?.id ?? p : p
                  , m = {
                    err: c ? l ? El : Dl : n,
                    errType: c ? "info" : "danger",
                    errCode: c ? Ol.NetworkErrorWithReconnection : r,
                    completionSampleFinishTime: Date.now(),
                    canRetry: c ? !1 : s
                };
                if (f.getNodeIfExists(u)?.message?.content?.content_type !== dn.Text) {
                    const g = Oi("");
                    return g.clientMetadata = {
                        ...g.clientMetadata,
                        ...m
                    },
                    f.addMessageNode(u, g)
                } else
                    f.updateNodeMetadata(u, m)
            }
            )
        }
        ),
        o && $e.logNetworkError({
            source: "request_stream",
            type: c ? l ? "info_polling" : "info_conduit_resume" : "error"
        }),
        r) {
        case Ai.ContentPolicy:
        case Ai.ContentOrTos:
        case un.ModelCapExceeded:
        case un.HistoryDisabledConversationNotFound:
            break;
        default:
            n !== void 0 && hn.logEvent("chatgpt_conversation_error_web", n)
        }
        if (this.blurDuringCompletionTracker.onMessageError(),
        ki(t),
        this.#t(),
        qt.publish({
            kind: "completionFinished",
            serverThreadId: this.responseThreadId
        }),
        e instanceof fn && e.code === un.ModelCapExceeded) {
            const d = e.detail?.clears_in;
            d && (qo(new Date(Date.now() + d * 1e3).toISOString()),
            setTimeout( () => {
                _o()
            }
            , d * 1e3))
        }
    }
    #s({gizmoId: e}) {
        Z(this.clientThreadId, t => {
            t.promptGptRating = {
                gizmoId: e
            }
        }
        )
    }
    #o(e) {
        Ko(this.ctx, e.conversation_id, e.title, Al.Generated),
        this.maybeSendNotification()
    }
    #l(e) {
        const {default_model_slug: t} = e;
        t && Z(this.clientThreadId, n => {
            n.modelId = t
        }
        ),
        Il.updateDetails(e)
    }
    #a(e) {
        Jo.updateDetails(e)
    }
    #c(e) {
        const {async_status: t} = e;
        t === ye.REALTIME && (this.realtimeAsyncCompletion = !0),
        this.responseThreadId && He(this.responseThreadId, {
            source: Ae.SERVER,
            value: t
        }),
        He(this.clientThreadId, {
            source: Ae.SERVER,
            value: t
        })
    }
    #h(e) {
        const {token: t} = e;
        this.resumeToken = t ?? void 0
    }
    #d(e) {
        this.variantsInStreamInfo = e,
        Z(this.clientThreadId, t => {
            De.updateTree(t, (n, r) => {
                const s = H.getParentPromptNode(t) ?? n.getNodeByIdOrMessageId(r);
                n.updateNodeMetadata(s.id, {
                    variantsInStreamInfo: this.variantsInStreamInfo
                })
            }
            )
        }
        )
    }
    #f(e) {
        const {isCompletion: t, flagged: n, blocked: r, disclaimers: s} = e
          , o = !!s?.length && t;
        (n || r || o) && (this.debouncedUpdateExistingMessages.flush(),
        this.isEitherFlagged = !0,
        r && t && (this.isCompletionBlocked = !0),
        Wo(e, this.clientThreadId))
    }
    #u(e) {
        const {conversationId: t, url: n, isSafe: r} = e;
        r && Z(t, s => {
            s.safeUrls.push(n)
        }
        )
    }
    #p({message: e, conversationId: t}) {
        if (this.activeBranchLastMessage = e,
        e?.author.role === St.Tool && e?.author.name === "bio") {
            const n = e.metadata?.gizmo_id;
            setTimeout( () => {
                this.queryClient.invalidateQueries({
                    queryKey: Uo(n)
                })
            }
            , 5e3)
        }
        if (e.metadata?.trigger_async_ux && (this.treatCompletionAsAsync = !0,
        He(this.clientThreadId, {
            source: Ae.SERVER,
            value: ye.STREAMING
        })),
        H.getTree(yt(t)).containsNodeOrMessageId(e.id)) {
            this.messagesToUpdate[e.id] = e,
            this.debouncedUpdateExistingMessages();
            return
        }
        this.debouncedUpdateExistingMessages.flush(),
        Z(this.clientThreadId, n => {
            De.updateTree(n, (r, s) => {
                const o = {
                    requestId: this.requestId
                };
                e.status !== "in_progress" ? o.completionSampleFinishTime = Date.now() : this.allIncompleteMessageIds.add(e.id);
                const l = {
                    ...e,
                    clientMetadata: o
                }
                  , a = e.metadata?.parent_id;
                if (a) {
                    if (this.placeholderNodeId && r.getParent(this.placeholderNodeId).id === r.getNodeByIdOrMessageId(a).id)
                        if (Ii(l)) {
                            r.prependNode(this.placeholderNodeId, l);
                            return
                        } else
                            r.deleteNode(this.placeholderNodeId),
                            this.placeholderNodeId = void 0;
                    return r.addMessageNode(a, l)
                } else {
                    const c = r.findFirst(h => !Ii(h.message));
                    if (c)
                        r.prependNode(c.id, l);
                    else
                        return r.addMessageNode(s, l)
                }
            }
            )
        }
        )
    }
    debouncedUpdateExistingMessages = Br( () => {
        if (this.isCompletionBlocked)
            return;
        const e = Object.values(this.messagesToUpdate);
        e.length !== 0 && (Z(this.clientThreadId, t => {
            De.updateTree(t, n => {
                for (const r of e)
                    n.updateNodeMessage(r.id, r),
                    r.status !== "in_progress" && (n.updateNodeMetadata(r.id, {
                        completionSampleFinishTime: Date.now()
                    }),
                    this.allIncompleteMessageIds.delete(r.id))
            }
            )
        }
        ),
        this.messagesToUpdate = {})
    }
    , 50, {
        leading: !0,
        maxWait: 50
    });
    #m(e) {
        this.debouncedUpdateExistingMessages.flush(),
        Z(this.clientThreadId, t => {
            De.updateTree(t, n => {
                for (const r of this.allIncompleteMessageIds)
                    n.updateNodeMessageMetadata(r, {
                        finish_details: {
                            type: "interrupted"
                        }
                    })
            }
            )
        }
        ),
        this.#e()
    }
    #e() {
        this.debouncedUpdateExistingMessages.flush(),
        this.isEitherFlagged || (this.isFirstCompletionInThread && this.responseThreadId && !this.isHistoryAndTrainingDisabled && !hn.checkGate("2562876640") && Ho(this.ctx, this.responseThreadId, this.model),
        qt.publish({
            kind: "completionFinished",
            serverThreadId: this.responseThreadId
        })),
        qt.publish({
            kind: "createConversation",
            clientThreadId: this.clientThreadId
        }),
        this.blurDuringCompletionTracker.onMessageDone(),
        ki(),
        this.#t()
    }
    maybeSendNotification() {
        if (this.sentNotification)
            return;
        const e = yt(this.clientThreadId)
          , t = e?.title ?? void 0;
        if (!t)
            return;
        const n = H.getCurrentNode(e).message;
        if ($o(n) && !Go(n))
            return;
        const r = n.content
          , s = r?.content_type === dn.Text ? (r.parts[0] ?? "").replace(/[^a-zA-Z0-9\s]/g, "") : void 0;
        jo({
            title: t,
            subtitle: s,
            clientThreadId: this.clientThreadId
        }),
        this.sentNotification = !0
    }
    #t() {
        Z(this.clientThreadId, e => {
            De.updateTree(e, t => {
                for (const n of this.allIncompleteMessageIds)
                    t.updateNodeMetadata(n, {
                        completionSampleFinishTime: Date.now()
                    })
            }
            )
        }
        ),
        this.allIncompleteMessageIds.clear(),
        setTimeout( () => {
            if (this.treatCompletionAsAsync || this.realtimeAsyncCompletion) {
                const e = this.treatCompletionAsAsync ? ye.STREAMING : ye.REALTIME
                  , t = n => {
                    if (!n)
                        return;
                    const r = Vr(this.ctx, n);
                    (r == null || r.source === Ae.CLIENT) && He(n, {
                        source: Ae.SERVER,
                        value: e
                    })
                }
                ;
                t(this.responseThreadId),
                t(this.clientThreadId)
            } else
                He(this.clientThreadId, {
                    source: Ae.CLIENT,
                    value: ye.UNREAD
                });
            this.maybeSendNotification(),
            Si.removeRequest(this.requestId),
            Ni.releaseThread(this.clientThreadId)
        }
        , 0)
    }
}
async function ld({ctx: i, clientThreadId: e, requestedModelId: t, completionType: n=En.Next, sourceEvent: r, eventSource: s, completionMetadata: o, extraStreamParams: l, parentMessageId: a, promptMessage: c, existingMessages: h, prependMessages: d, appendMessages: f, profiler: p, skipNotification: u, effortMode: m, isReasoningSkipped: g, parentMessageIdPromise: k}) {
    const w = Rl(i)
      , v = r?.timeStamp ?? performance.now()
      , _ = s ?? (r ? Yo(r) : "mouse")
      , K = zl()
      , E = `request-${e}-${K}`
      , R = yt(e)
      , {conduitToken: P=null, prepareState: x="none", lastPrepareTimestamp: z=null} = R ?? {}
      , A = t ?? R?.modelId ?? vl(Pl(w)).id
      , Q = H.findNode(R, N => N.message.author.role === St.Assistant || N.message.author.role === St.Tool) == null
      , cn = R?.continuingFromSharedConversationId != null
      , vt = !!R?.continuingFromSharedPostId
      , lt = a ? H.getNode(R, a) : h?.[0] ? H.getParentNode(R, h[0].id) : H.getCurrentNode(R);
    let Ke = lt.message.id ?? lt.id;
    const at = [...h ?? [], ...d ?? [], ...c ? [c] : [], ...f ?? []]
      , re = Xo(i, e)
      , ct = new Qo({
        clientRequestId: E,
        gizmoType: re,
        preflightTime: v,
        isTemporaryChat: Fl()
    });
    if (ct.onUserMessages(at),
    re === bi.PROJECT && Q && !Bl(i, "269676899", {
        disableExposureLog: !0
    }).get("clear_all", !1)) {
        const N = o?.systemHints;
        Ll(i).set(Co => ({
            ...Co,
            [e]: N ?? []
        }))
    }
    const Pt = Vl(i)
      , Ft = ql()
      , ht = new od(i,E,w,R,e,a,d,c,f,n,A,m,_,Pt,v,re === bi.PROJECT,Q,cn,ct,u ?? !1,Ft,vt,g);
    if (_l() && c) {
        const N = Ri(c);
        Zo({
            ctx: i,
            query: N,
            classifier: !0,
            attributions: !0,
            profiler: p
        })
    }
    const ai = el(e)
      , ci = Vr(i, e)?.value === ye.REALTIME
      , hi = H.getConversationLastTurn(R)?.messages.some(N => N.metadata?.n7jupd_message);
    if (ci && !hi) {
        const N = await ai;
        N?.last_message_id && (Ke = N.last_message_id)
    }
    if (qt.publish({
        kind: "requestCompletion"
    }),
    He(e, {
        source: Ae.CLIENT,
        value: o?.systemHints?.includes(Kl) ? ye.REALTIME : ye.STREAMING
    }),
    tl.onCompletionRequestStarted(E),
    ht.updateBeforeRequest(),
    ci && hi) {
        const N = await ai;
        N?.last_message_id && (Ke = N.last_message_id)
    }
    if (k) {
        const N = await k;
        N && (Ke = N)
    }
    const go = Un(i, "3530414009")
      , di = !!o?.prefetchIds?.length
      , yo = performance.now()
      , Ee = []
      , Je = nl() ?? (Ee.push("chatReq"),
    await il());
    Je.force_login && rl(i, {
        authType: "login"
    });
    const So = xi.getEnforcementTokenSync(Je) ?? (Ee.push("turnstile"),
    await xi.getEnforcementToken(Je))
      , ko = performance.now()
      , bo = Ci.getEnforcementTokenSync(Je) ?? (Ee.push("proofofwork"),
    await Ci.getEnforcementToken(Je, {
        forceSync: di && go
    }))
      , xo = String(performance.now() - ko);
    w.getQueriesData(vi()) == null && await w.ensureQueryData(vi());
    const fi = Ee.includes("chatReq") ? "false" : "true"
      , ui = Ee.includes("turnstile") ? "false" : "true"
      , pi = Ee.includes("proofofwork") ? "false" : "true";
    Ge.hist(je.DEFAULT, "chat_req_time", [{
        key: "wasChatReqSync",
        value: fi
    }, {
        key: "wasTurnstileSync",
        value: ui
    }, {
        key: "wasProofofworkSync",
        value: pi
    }], performance.now() - yo),
    Jl(Ul(), {
        eventName: "chatgpt_web_completion_integrity_checks",
        value: Ee.length === 0 ? "true" : "false",
        metadata: {
            wasChatReqSync: fi,
            wasTurnstileSync: ui,
            wasProofofworkSync: pi,
            isPrefetchInitialLoad: di ? "true" : "false",
            powTime: xo
        }
    }),
    sl() && (await ol()).forEach(zt => {
        zt.status === "fulfilled" && zt.value && at.unshift(zt.value)
    }
    ),
    ct.onCompletionStarted(n, A),
    ht.preflightTime = performance.now() - v;
    const mi = Lr(i);
    if (Wl.addFeatureFlagEvaluation("fast_convo", mi),
    mi && z != null) {
        const N = performance.now() - z;
        N <= 6e4 && Ge.hist(je.DEFAULT, "fast_conversation_last_prepare_to_convo_client", [{
            key: "model_id",
            value: A
        }, {
            key: "prepare_state",
            value: String(x)
        }, {
            key: "has_conduit_token",
            value: P != null ? "true" : "false"
        }], N)
    }
    if (m) {
        Ge.hist(je.DEFAULT, "chatgpt_web_autoswitcher_infer_calls_per_message", [], Jn()),
        Jn.set(0);
        const N = Wn();
        N !== 0 && c ? Ge.hist(je.DEFAULT, "chatgpt_web_autoswitcher_prompt_length_difference", [], Ri(c).length - N) : Ge.count(je.DEFAULT, "chatgpt_web_autoswitcher_message_before_infer_completed"),
        Wn.set(0)
    }
    await ht.sendRequest$({
        conduitToken: P,
        turnstileToken: So,
        proofToken: bo,
        completionMetadata: o,
        resolvedParentMessageId: Ke,
        messages: at,
        extraStreamParams: l,
        chatReq: Je,
        profiler: p
    })
}
function Rd(i) {
    const e = _r();
    return se.useCallback(t => ld({
        ctx: e,
        clientThreadId: i,
        ...t
    }), [e, i])
}
export {sn as A, nc as B, kd as C, O as D, Td as E, y as F, S as G, Y as H, C as I, Wt as J, $n as K, Cd as L, bt as M, Yl as N, ke as O, Yh as P, le as Q, L as R, ud as S, T, b as U, X as V, bs as W, Ba as X, gd as Y, Mt as Z, Ne as a, ot as b, mt as c, md as d, Dd as e, pd as f, Md as g, Ad as h, xd as i, bd as j, wd as k, Ma as l, Od as m, hc as n, fs as o, Ed as p, $ as q, ld as r, Sd as s, Zi as t, Rd as u, Nd as v, zr as w, Id as x, yd as y, Ua as z};
//# sourceMappingURL=dmfmxszxfbs8gsbx.js.map
