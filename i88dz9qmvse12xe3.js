import {R as _, r as c, s as Ie, j as b, M as $e, A as Gt, m as Mn, h as Bt, f as kn} from "./juy90og0wtbp77qa.js";
import {dG as Jt, D as Qt, ec as Nn, ag as An, e$ as On, g8 as Tn, B as zt, e as jn, f as Ln, C as In, hH as Bn} from "./dc2xxjkicf2pz0mj.js";
import {s1 as vt, s2 as P, s3 as pt, s4 as zn, qr as Pn, s5 as Fn, bR as Wn, s6 as $n, s7 as Hn, s8 as Un} from "./ckp56qklot786ulr.js";
import {s as Xn, d as _n, S as Yn, b as Vn} from "./f5x7owcyj5iwmbsb.js";
import "./llrie03z1kvfi4vu.js";
import "./o6wb3ptvu0bk81yq.js";
import "./dmfmxszxfbs8gsbx.js";
import "./jsgl3b1bt1ozctr5.js";
import "./pc2givv05uuq8g6l.js";
import "./dq2hdjj12gdqq0p1.js";
import "./ezqsz68yx4uzdtqb.js";
import "./mre9dehcylnm0d4q.js";
const nt = "#3B82F6"
  , ue = 12;
function Fe(e, t) {
    return e.width / (t.widthEmu * P)
}
function Kn(e, t, n) {
    return t >= e.x && t <= e.x + e.width && n >= e.y && n <= e.y + e.height
}
function Zt(e, t, n, r, s) {
    if (!e)
        return null;
    const o = tn(e, t, n);
    return ["nw", "ne", "sw", "se"].find(i => Kn(o[i], r, s)) ?? null
}
function en(e, t, n, r) {
    return [...e.elements].sort( (s, o) => o.zIndex - s.zIndex).find( ({bbox: s}) => {
        if (!s)
            return !1;
        const {xEmu: o, yEmu: i, widthEmu: l, heightEmu: a} = s
          , u = o * P
          , f = i * P
          , d = l * P
          , g = a * P;
        return n >= u && n <= u + d && r >= f && r <= f + g
    }
    ) ?? null
}
function qn(e, t, n, r, s, o) {
    e.save(),
    e.lineJoin = "miter";
    const i = (l, a, u, f=null) => {
        const {x: d, y: g, width: v, height: y} = vt(l, t, o);
        f && e.setLineDash(f),
        e.lineWidth = a,
        e.strokeStyle = u,
        e.strokeRect(d, g, v, y),
        e.setLineDash([])
    }
    ;
    if (n && n !== r && i(n, 2, nt),
    r && !s) {
        i(r, 2, nt);
        const l = tn(r, t, o);
        Object.values(l).forEach(a => {
            e.fillStyle = "#FFFFFF",
            e.strokeStyle = nt,
            e.lineWidth = 2,
            e.fillRect(a.x, a.y, a.width, a.height),
            e.strokeRect(a.x, a.y, a.width, a.height)
        }
        )
    }
    e.restore()
}
function tn(e, t, n) {
    const {x: r, y: s, width: o, height: i} = vt(e, t, n)
      , l = ue / 2;
    return {
        nw: new DOMRect(r - l,s - l,ue,ue),
        ne: new DOMRect(r + o - l,s - l,ue,ue),
        sw: new DOMRect(r - l,s + i - l,ue,ue),
        se: new DOMRect(r + o - l,s + i - l,ue,ue)
    }
}
const Gn = _[typeof document < "u" && document.createElement !== void 0 ? "useLayoutEffect" : "useEffect"]
  , Jn = e => {
    const t = c.useRef(e);
    return c.useEffect( () => {
        t.current = e
    }
    ),
    t
}
;
function Qn() {}
function Zn(e, t, n={}) {
    const r = tr(n.polyfill)
      , s = Jn(t);
    return Gn( () => {
        let o = !1;
        const i = e && "current"in e ? e.current : e;
        if (!i)
            return Qn;
        function l(a, u) {
            o || s.current(a, u)
        }
        return r.subscribe(i, l),
        () => {
            o = !0,
            r.unsubscribe(i, l)
        }
    }
    , [e, r, s]),
    r.observer
}
function er(e) {
    let t = !1
      , n = [];
    const r = new Map
      , s = new (e || window.ResizeObserver)( (o, i) => {
        n = n.concat(o);
        function l() {
            const a = new Set;
            for (let u = 0; u < n.length; u++) {
                if (a.has(n[u].target))
                    continue;
                a.add(n[u].target);
                const f = r.get(n[u].target);
                f?.forEach(d => d(n[u], i))
            }
            n = [],
            t = !1
        }
        t || window.requestAnimationFrame(l),
        t = !0
    }
    );
    return {
        observer: s,
        subscribe(o, i) {
            var l;
            s.observe(o);
            const a = (l = r.get(o)) !== null && l !== void 0 ? l : [];
            a.push(i),
            r.set(o, a)
        },
        unsubscribe(o, i) {
            var l;
            const a = (l = r.get(o)) !== null && l !== void 0 ? l : [];
            if (a.length === 1) {
                s.unobserve(o),
                r.delete(o);
                return
            }
            const u = a.indexOf(i);
            u !== -1 && a.splice(u, 1),
            r.set(o, a)
        }
    }
}
let rt;
const tr = e => rt || (rt = er(e));
function nr(e, t, n, r) {
    var s = this
      , o = c.useRef(null)
      , i = c.useRef(0)
      , l = c.useRef(0)
      , a = c.useRef(null)
      , u = c.useRef([])
      , f = c.useRef()
      , d = c.useRef()
      , g = c.useRef(e)
      , v = c.useRef(!0);
    g.current = e;
    var y = typeof window < "u"
      , h = !t && t !== 0 && y;
    if (typeof e != "function")
        throw new TypeError("Expected a function");
    t = +t || 0;
    var p = !!(n = n || {}).leading
      , w = !("trailing"in n) || !!n.trailing
      , m = "maxWait"in n
      , D = "debounceOnServer"in n && !!n.debounceOnServer
      , S = m ? Math.max(+n.maxWait || 0, t) : null;
    c.useEffect(function() {
        return v.current = !0,
        function() {
            v.current = !1
        }
    }, []);
    var k = c.useMemo(function() {
        var C = function(R) {
            var O = u.current
              , ne = f.current;
            return u.current = f.current = null,
            i.current = R,
            l.current = l.current || R,
            d.current = g.current.apply(ne, O)
        }
          , E = function(R, O) {
            h && cancelAnimationFrame(a.current),
            a.current = h ? requestAnimationFrame(R) : setTimeout(R, O)
        }
          , x = function(R) {
            if (!v.current)
                return !1;
            var O = R - o.current;
            return !o.current || O >= t || O < 0 || m && R - i.current >= S
        }
          , N = function(R) {
            return a.current = null,
            w && u.current ? C(R) : (u.current = f.current = null,
            d.current)
        }
          , j = function R() {
            var O = Date.now();
            if (p && l.current === i.current && T(),
            x(O))
                return N(O);
            if (v.current) {
                var ne = t - (O - o.current)
                  , xe = m ? Math.min(ne, S - (O - i.current)) : ne;
                E(R, xe)
            }
        }
          , T = function() {
            r && r({})
        }
          , A = function() {
            if (y || D) {
                var R = Date.now()
                  , O = x(R);
                if (u.current = [].slice.call(arguments),
                f.current = s,
                o.current = R,
                O) {
                    if (!a.current && v.current)
                        return i.current = o.current,
                        E(j, t),
                        p ? C(o.current) : d.current;
                    if (m)
                        return E(j, t),
                        C(o.current)
                }
                return a.current || E(j, t),
                d.current
            }
        };
        return A.cancel = function() {
            a.current && (h ? cancelAnimationFrame(a.current) : clearTimeout(a.current)),
            i.current = 0,
            u.current = o.current = f.current = a.current = null
        }
        ,
        A.isPending = function() {
            return !!a.current
        }
        ,
        A.flush = function() {
            return a.current ? N(Date.now()) : d.current
        }
        ,
        A
    }, [p, m, t, S, w, h, y, D, r]);
    return k
}
function rr(e, t) {
    return e === t
}
function or(e, t, n) {
    var r = rr
      , s = c.useRef(e)
      , o = c.useState({})[1]
      , i = nr(c.useCallback(function(a) {
        s.current = a,
        o({})
    }, [o]), t, n, o)
      , l = c.useRef(e);
    return r(l.current, e) || (i(e),
    l.current = e),
    [s.current, i]
}
function sr(e, t=100) {
    const [n,r] = c.useState({
        width: 0,
        height: 0
    });
    Zn(e, o => {
        const {width: i, height: l} = o.contentRect;
        r({
            width: i,
            height: l
        })
    }
    );
    const [s] = or(n, t);
    return s
}
const ir = (e, t, n, r, s, o, i) => c.useCallback(l => {
    if (!e || !t || !n.current || !r.current)
        return;
    const a = l.currentTarget.getBoundingClientRect()
      , u = Fe(a, t)
      , f = n.current.getBoundingClientRect()
      , d = r.current.getBoundingClientRect()
      , g = d.left - f.left
      , v = d.top - f.top
      , y = (l.clientX - a.left) / u
      , h = (l.clientY - a.top) / u
      , p = o.find(C => y >= C.x && y <= C.x + C.width && h >= C.y && h <= C.y + C.height);
    if (!p)
        return;
    if (l.stopPropagation(),
    p.action === "ppaction://hlinksldjump") {
        const C = p.url.match(/slide(\d+)\.xml$/);
        if (C) {
            const E = Number(C[1]) - 1;
            E >= 0 && E < e.slides.length && i(E)
        }
        return
    }
    const w = p.x * u + g
      , m = (p.x + p.width) * u + g
      , D = (p.y + p.height / 2) * u + v
      , S = f.width - m >= w ? "right" : "left"
      , k = S === "right" ? m : w;
    s({
        url: p.url,
        x: k,
        y: D,
        placement: S
    })
}
, [e, t, o, r, s, n, i])
  , lr = (e, t, n, r, s, o, i, l, a) => c.useCallback(u => {
    if (!e || !t || !n.current || !r.current)
        return;
    const f = u.currentTarget.getBoundingClientRect()
      , d = Fe(f, t)
      , g = (u.clientX - f.left) / d
      , v = (u.clientY - f.top) / d;
    if (!s)
        return;
    let y = "move"
      , h = null;
    o && (h = Zt(o, e, t, g, v),
    h && (y = "resize"));
    const p = y === "move" ? en(t, e, g, v) : o;
    if (!p) {
        i(null),
        l(null);
        return
    }
    i(p),
    l(p);
    const {x: w, y: m, width: D, height: S} = vt(p, e, t);
    a({
        element: p,
        origin: {
            x: w,
            y: m,
            w: D,
            h: S
        },
        mouseStart: {
            x: g,
            y: v
        },
        mode: y,
        corner: h,
        preserveRatio: u.shiftKey,
        moved: !1
    })
}
, [e, t, o, s, r, a, l, i, n])
  , cr = (e, t, n, r, s, o, i, l) => c.useCallback(a => {
    if (!e || !t || !n.current)
        return;
    if (r) {
        if (!r.element.bbox)
            return;
        const h = a.currentTarget.getBoundingClientRect()
          , p = Fe(h, t)
          , w = (a.clientX - h.left) / p
          , m = (a.clientY - h.top) / p
          , D = w - r.mouseStart.x
          , S = m - r.mouseStart.y;
        if (r.mode === "move") {
            if (D === 0 && S === 0)
                return;
            r.element.bbox.xEmu = (r.origin.x + D) / P,
            r.element.bbox.yEmu = (r.origin.y + S) / P
        } else if (r.mode === "resize") {
            const k = r.preserveRatio || a.shiftKey
              , {x: C, y: E, w: x, h: N} = r.origin;
            let j = C
              , T = E
              , A = x
              , R = N;
            const O = x / N;
            switch (r.corner) {
            case "nw":
                j = C + D,
                T = E + S,
                A = x - D,
                R = N - S;
                break;
            case "ne":
                T = E + S,
                A = x + D,
                R = N - S;
                break;
            case "sw":
                j = C + D,
                A = x - D,
                R = N + S;
                break;
            case "se":
            default:
                A = x + D,
                R = N + S;
                break
            }
            k && (Math.abs(A / R) > O ? R = A / O : A = R * O,
            (r.corner === "nw" || r.corner === "sw") && (j = C + (x - A)),
            (r.corner === "nw" || r.corner === "ne") && (T = E + (N - R))),
            A = Math.max(1, A),
            R = Math.max(1, R),
            r.element.bbox.xEmu = j / P,
            r.element.bbox.yEmu = T / P,
            r.element.bbox.widthEmu = A / P,
            r.element.bbox.heightEmu = R / P
        }
        s({
            ...r,
            moved: !0
        });
        return
    }
    const u = a.currentTarget.getBoundingClientRect()
      , f = Fe(u, t)
      , d = (a.clientX - u.left) / f
      , g = (a.clientY - u.top) / f
      , v = Zt(o, e, t, d, g);
    v ? (n.current.style.cursor = `${v}-resize`,
    i(o)) : (n.current.style.cursor = "",
    i(en(t, e, d, g)));
    const y = l.find(h => d >= h.x && d <= h.x + h.width && g >= h.y && g <= h.y + h.height);
    n.current.style.cursor = y ? "pointer" : ""
}
, [e, t, r, o, n, i, s, l])
  , ar = (e, t, n) => {
    c.useEffect( () => {
        if (!e.current)
            return;
        const r = e.current;
        if (r.querySelectorAll("video[data-slide-video]").forEach(o => {
            const i = o.dataset.url;
            i && (URL.revokeObjectURL(i),
            o.remove())
        }
        ),
        !t)
            return;
        const s = Fe(r.getBoundingClientRect(), t);
        t.elements.filter(o => o.video).forEach(o => {
            if (!o.bbox)
                return;
            const {xEmu: i, yEmu: l, widthEmu: a, heightEmu: u} = o.bbox;
            if (!o.video)
                return;
            const f = new Blob([o.video.data],{
                type: o.video.contentType
            })
              , d = URL.createObjectURL(f)
              , g = document.createElement("video");
            g.src = d,
            g.dataset.slideVideo = "true",
            g.dataset.url = d,
            g.autoplay = !0,
            g.loop = !0,
            g.muted = !0,
            g.playsInline = !0,
            Object.assign(g.style, {
                position: "absolute",
                left: `${i * P * s}px`,
                top: `${l * P * s}px`,
                width: `${a * P * s}px`,
                height: `${u * P * s}px`,
                objectFit: "cover",
                zIndex: o.zIndex.toString(),
                pointerEvents: "none"
            }),
            r.appendChild(g)
        }
        )
    }
    , [t, n, e])
}
  , Qe = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Se(e) {
    const t = Object.prototype.toString.call(e);
    return t === "[object Window]" || t === "[object global]"
}
function bt(e) {
    return "nodeType"in e
}
function Y(e) {
    var t, n;
    return e ? Se(e) ? e : bt(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window
}
function mt(e) {
    const {Document: t} = Y(e);
    return e instanceof t
}
function He(e) {
    return Se(e) ? !1 : e instanceof Y(e).HTMLElement
}
function nn(e) {
    return e instanceof Y(e).SVGElement
}
function Me(e) {
    return e ? Se(e) ? e.document : bt(e) ? mt(e) ? e : He(e) || nn(e) ? e.ownerDocument : document : document : document
}
const me = Qe ? c.useLayoutEffect : c.useEffect;
function wt(e) {
    const t = c.useRef(e);
    return me( () => {
        t.current = e
    }
    ),
    c.useCallback(function() {
        for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
            r[s] = arguments[s];
        return t.current == null ? void 0 : t.current(...r)
    }, [])
}
function ur() {
    const e = c.useRef(null)
      , t = c.useCallback( (r, s) => {
        e.current = setInterval(r, s)
    }
    , [])
      , n = c.useCallback( () => {
        e.current !== null && (clearInterval(e.current),
        e.current = null)
    }
    , []);
    return [t, n]
}
function xt(e, t) {
    t === void 0 && (t = [e]);
    const n = c.useRef(e);
    return me( () => {
        n.current !== e && (n.current = e)
    }
    , t),
    n
}
function Ue(e, t) {
    const n = c.useRef();
    return c.useMemo( () => {
        const r = e(n.current);
        return n.current = r,
        r
    }
    , [...t])
}
function at(e) {
    const t = wt(e)
      , n = c.useRef(null)
      , r = c.useCallback(s => {
        s !== n.current && t?.(s, n.current),
        n.current = s
    }
    , []);
    return [n, r]
}
function ut(e) {
    const t = c.useRef();
    return c.useEffect( () => {
        t.current = e
    }
    , [e]),
    t.current
}
let ot = {};
function yt(e, t) {
    return c.useMemo( () => {
        if (t)
            return t;
        const n = ot[e] == null ? 0 : ot[e] + 1;
        return ot[e] = n,
        e + "-" + n
    }
    , [e, t])
}
function rn(e) {
    return function(t) {
        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
            r[s - 1] = arguments[s];
        return r.reduce( (o, i) => {
            const l = Object.entries(i);
            for (const [a,u] of l) {
                const f = o[a];
                f != null && (o[a] = f + e * u)
            }
            return o
        }
        , {
            ...t
        })
    }
}
const Ce = rn(1)
  , qe = rn(-1);
function dr(e) {
    return "clientX"in e && "clientY"in e
}
function on(e) {
    if (!e)
        return !1;
    const {KeyboardEvent: t} = Y(e.target);
    return t && e instanceof t
}
function fr(e) {
    if (!e)
        return !1;
    const {TouchEvent: t} = Y(e.target);
    return t && e instanceof t
}
function dt(e) {
    if (fr(e)) {
        if (e.touches && e.touches.length) {
            const {clientX: t, clientY: n} = e.touches[0];
            return {
                x: t,
                y: n
            }
        } else if (e.changedTouches && e.changedTouches.length) {
            const {clientX: t, clientY: n} = e.changedTouches[0];
            return {
                x: t,
                y: n
            }
        }
    }
    return dr(e) ? {
        x: e.clientX,
        y: e.clientY
    } : null
}
const Pt = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function hr(e) {
    return e.matches(Pt) ? e : e.querySelector(Pt)
}
const gr = {
    display: "none"
};
function vr(e) {
    let {id: t, value: n} = e;
    return _.createElement("div", {
        id: t,
        style: gr
    }, n)
}
function pr(e) {
    let {id: t, announcement: n, ariaLiveType: r="assertive"} = e;
    const s = {
        position: "fixed",
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        margin: -1,
        border: 0,
        padding: 0,
        overflow: "hidden",
        clip: "rect(0 0 0 0)",
        clipPath: "inset(100%)",
        whiteSpace: "nowrap"
    };
    return _.createElement("div", {
        id: t,
        style: s,
        role: "status",
        "aria-live": r,
        "aria-atomic": !0
    }, n)
}
function br() {
    const [e,t] = c.useState("");
    return {
        announce: c.useCallback(r => {
            r != null && t(r)
        }
        , []),
        announcement: e
    }
}
const sn = c.createContext(null);
function mr(e) {
    const t = c.useContext(sn);
    c.useEffect( () => {
        if (!t)
            throw new Error("useDndMonitor must be used within a children of <DndContext>");
        return t(e)
    }
    , [e, t])
}
function wr() {
    const [e] = c.useState( () => new Set)
      , t = c.useCallback(r => (e.add(r),
    () => e.delete(r)), [e]);
    return [c.useCallback(r => {
        let {type: s, event: o} = r;
        e.forEach(i => {
            var l;
            return (l = i[s]) == null ? void 0 : l.call(i, o)
        }
        )
    }
    , [e]), t]
}
const xr = {
    draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}
  , yr = {
    onDragStart(e) {
        let {active: t} = e;
        return "Picked up draggable item " + t.id + "."
    },
    onDragOver(e) {
        let {active: t, over: n} = e;
        return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area."
    },
    onDragEnd(e) {
        let {active: t, over: n} = e;
        return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped."
    },
    onDragCancel(e) {
        let {active: t} = e;
        return "Dragging was cancelled. Draggable item " + t.id + " was dropped."
    }
};
function Er(e) {
    let {announcements: t=yr, container: n, hiddenTextDescribedById: r, screenReaderInstructions: s=xr} = e;
    const {announce: o, announcement: i} = br()
      , l = yt("DndLiveRegion")
      , [a,u] = c.useState(!1);
    if (c.useEffect( () => {
        u(!0)
    }
    , []),
    mr(c.useMemo( () => ({
        onDragStart(d) {
            let {active: g} = d;
            o(t.onDragStart({
                active: g
            }))
        },
        onDragMove(d) {
            let {active: g, over: v} = d;
            t.onDragMove && o(t.onDragMove({
                active: g,
                over: v
            }))
        },
        onDragOver(d) {
            let {active: g, over: v} = d;
            o(t.onDragOver({
                active: g,
                over: v
            }))
        },
        onDragEnd(d) {
            let {active: g, over: v} = d;
            o(t.onDragEnd({
                active: g,
                over: v
            }))
        },
        onDragCancel(d) {
            let {active: g, over: v} = d;
            o(t.onDragCancel({
                active: g,
                over: v
            }))
        }
    }), [o, t])),
    !a)
        return null;
    const f = _.createElement(_.Fragment, null, _.createElement(vr, {
        id: r,
        value: s.draggable
    }), _.createElement(pr, {
        id: l,
        announcement: i
    }));
    return n ? Ie.createPortal(f, n) : f
}
var U;
(function(e) {
    e.DragStart = "dragStart",
    e.DragMove = "dragMove",
    e.DragEnd = "dragEnd",
    e.DragCancel = "dragCancel",
    e.DragOver = "dragOver",
    e.RegisterDroppable = "registerDroppable",
    e.SetDroppableDisabled = "setDroppableDisabled",
    e.UnregisterDroppable = "unregisterDroppable"
}
)(U || (U = {}));
function Ge() {}
function Dr(e, t) {
    return c.useMemo( () => ({
        sensor: e,
        options: t ?? {}
    }), [e, t])
}
function Rr() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return c.useMemo( () => [...t].filter(r => r != null), [...t])
}
const te = Object.freeze({
    x: 0,
    y: 0
});
function Cr(e, t) {
    let {data: {value: n}} = e
      , {data: {value: r}} = t;
    return r - n
}
function Sr(e, t) {
    if (!e || e.length === 0)
        return null;
    const [n] = e;
    return n[t]
}
function Mr(e, t) {
    const n = Math.max(t.top, e.top)
      , r = Math.max(t.left, e.left)
      , s = Math.min(t.left + t.width, e.left + e.width)
      , o = Math.min(t.top + t.height, e.top + e.height)
      , i = s - r
      , l = o - n;
    if (r < s && n < o) {
        const a = t.width * t.height
          , u = e.width * e.height
          , f = i * l
          , d = f / (a + u - f);
        return Number(d.toFixed(4))
    }
    return 0
}
const kr = e => {
    let {collisionRect: t, droppableRects: n, droppableContainers: r} = e;
    const s = [];
    for (const o of r) {
        const {id: i} = o
          , l = n.get(i);
        if (l) {
            const a = Mr(l, t);
            a > 0 && s.push({
                id: i,
                data: {
                    droppableContainer: o,
                    value: a
                }
            })
        }
    }
    return s.sort(Cr)
}
;
function Nr(e, t, n) {
    return {
        ...e,
        scaleX: t && n ? t.width / n.width : 1,
        scaleY: t && n ? t.height / n.height : 1
    }
}
function ln(e, t) {
    return e && t ? {
        x: e.left - t.left,
        y: e.top - t.top
    } : te
}
function Ar(e) {
    return function(n) {
        for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            s[o - 1] = arguments[o];
        return s.reduce( (i, l) => ({
            ...i,
            top: i.top + e * l.y,
            bottom: i.bottom + e * l.y,
            left: i.left + e * l.x,
            right: i.right + e * l.x
        }), {
            ...n
        })
    }
}
const Or = Ar(1);
function Tr(e) {
    if (e.startsWith("matrix3d(")) {
        const t = e.slice(9, -1).split(/, /);
        return {
            x: +t[12],
            y: +t[13],
            scaleX: +t[0],
            scaleY: +t[5]
        }
    } else if (e.startsWith("matrix(")) {
        const t = e.slice(7, -1).split(/, /);
        return {
            x: +t[4],
            y: +t[5],
            scaleX: +t[0],
            scaleY: +t[3]
        }
    }
    return null
}
function jr(e, t, n) {
    const r = Tr(t);
    if (!r)
        return e;
    const {scaleX: s, scaleY: o, x: i, y: l} = r
      , a = e.left - i - (1 - s) * parseFloat(n)
      , u = e.top - l - (1 - o) * parseFloat(n.slice(n.indexOf(" ") + 1))
      , f = s ? e.width / s : e.width
      , d = o ? e.height / o : e.height;
    return {
        width: f,
        height: d,
        top: u,
        right: a + f,
        bottom: u + d,
        left: a
    }
}
const Lr = {
    ignoreTransform: !1
};
function Xe(e, t) {
    t === void 0 && (t = Lr);
    let n = e.getBoundingClientRect();
    if (t.ignoreTransform) {
        const {transform: u, transformOrigin: f} = Y(e).getComputedStyle(e);
        u && (n = jr(n, u, f))
    }
    const {top: r, left: s, width: o, height: i, bottom: l, right: a} = n;
    return {
        top: r,
        left: s,
        width: o,
        height: i,
        bottom: l,
        right: a
    }
}
function Ft(e) {
    return Xe(e, {
        ignoreTransform: !0
    })
}
function Ir(e) {
    const t = e.innerWidth
      , n = e.innerHeight;
    return {
        top: 0,
        left: 0,
        right: t,
        bottom: n,
        width: t,
        height: n
    }
}
function Br(e, t) {
    return t === void 0 && (t = Y(e).getComputedStyle(e)),
    t.position === "fixed"
}
function zr(e, t) {
    t === void 0 && (t = Y(e).getComputedStyle(e));
    const n = /(auto|scroll|overlay)/;
    return ["overflow", "overflowX", "overflowY"].some(s => {
        const o = t[s];
        return typeof o == "string" ? n.test(o) : !1
    }
    )
}
function Et(e, t) {
    const n = [];
    function r(s) {
        if (t != null && n.length >= t || !s)
            return n;
        if (mt(s) && s.scrollingElement != null && !n.includes(s.scrollingElement))
            return n.push(s.scrollingElement),
            n;
        if (!He(s) || nn(s) || n.includes(s))
            return n;
        const o = Y(e).getComputedStyle(s);
        return s !== e && zr(s, o) && n.push(s),
        Br(s, o) ? n : r(s.parentNode)
    }
    return e ? r(e) : n
}
function cn(e) {
    const [t] = Et(e, 1);
    return t ?? null
}
function st(e) {
    return !Qe || !e ? null : Se(e) ? e : bt(e) ? mt(e) || e === Me(e).scrollingElement ? window : He(e) ? e : null : null
}
function an(e) {
    return Se(e) ? e.scrollX : e.scrollLeft
}
function un(e) {
    return Se(e) ? e.scrollY : e.scrollTop
}
function ft(e) {
    return {
        x: an(e),
        y: un(e)
    }
}
var F;
(function(e) {
    e[e.Forward = 1] = "Forward",
    e[e.Backward = -1] = "Backward"
}
)(F || (F = {}));
function dn(e) {
    return !Qe || !e ? !1 : e === document.scrollingElement
}
function fn(e) {
    const t = {
        x: 0,
        y: 0
    }
      , n = dn(e) ? {
        height: window.innerHeight,
        width: window.innerWidth
    } : {
        height: e.clientHeight,
        width: e.clientWidth
    }
      , r = {
        x: e.scrollWidth - n.width,
        y: e.scrollHeight - n.height
    }
      , s = e.scrollTop <= t.y
      , o = e.scrollLeft <= t.x
      , i = e.scrollTop >= r.y
      , l = e.scrollLeft >= r.x;
    return {
        isTop: s,
        isLeft: o,
        isBottom: i,
        isRight: l,
        maxScroll: r,
        minScroll: t
    }
}
const Pr = {
    x: .2,
    y: .2
};
function Fr(e, t, n, r, s) {
    let {top: o, left: i, right: l, bottom: a} = n;
    r === void 0 && (r = 10),
    s === void 0 && (s = Pr);
    const {isTop: u, isBottom: f, isLeft: d, isRight: g} = fn(e)
      , v = {
        x: 0,
        y: 0
    }
      , y = {
        x: 0,
        y: 0
    }
      , h = {
        height: t.height * s.y,
        width: t.width * s.x
    };
    return !u && o <= t.top + h.height ? (v.y = F.Backward,
    y.y = r * Math.abs((t.top + h.height - o) / h.height)) : !f && a >= t.bottom - h.height && (v.y = F.Forward,
    y.y = r * Math.abs((t.bottom - h.height - a) / h.height)),
    !g && l >= t.right - h.width ? (v.x = F.Forward,
    y.x = r * Math.abs((t.right - h.width - l) / h.width)) : !d && i <= t.left + h.width && (v.x = F.Backward,
    y.x = r * Math.abs((t.left + h.width - i) / h.width)),
    {
        direction: v,
        speed: y
    }
}
function Wr(e) {
    if (e === document.scrollingElement) {
        const {innerWidth: o, innerHeight: i} = window;
        return {
            top: 0,
            left: 0,
            right: o,
            bottom: i,
            width: o,
            height: i
        }
    }
    const {top: t, left: n, right: r, bottom: s} = e.getBoundingClientRect();
    return {
        top: t,
        left: n,
        right: r,
        bottom: s,
        width: e.clientWidth,
        height: e.clientHeight
    }
}
function hn(e) {
    return e.reduce( (t, n) => Ce(t, ft(n)), te)
}
function $r(e) {
    return e.reduce( (t, n) => t + an(n), 0)
}
function Hr(e) {
    return e.reduce( (t, n) => t + un(n), 0)
}
function Ur(e, t) {
    if (t === void 0 && (t = Xe),
    !e)
        return;
    const {top: n, left: r, bottom: s, right: o} = t(e);
    cn(e) && (s <= 0 || o <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
        block: "center",
        inline: "center"
    })
}
const Xr = [["x", ["left", "right"], $r], ["y", ["top", "bottom"], Hr]];
class Dt {
    constructor(t, n) {
        this.rect = void 0,
        this.width = void 0,
        this.height = void 0,
        this.top = void 0,
        this.bottom = void 0,
        this.right = void 0,
        this.left = void 0;
        const r = Et(n)
          , s = hn(r);
        this.rect = {
            ...t
        },
        this.width = t.width,
        this.height = t.height;
        for (const [o,i,l] of Xr)
            for (const a of i)
                Object.defineProperty(this, a, {
                    get: () => {
                        const u = l(r)
                          , f = s[o] - u;
                        return this.rect[a] + f
                    }
                    ,
                    enumerable: !0
                });
        Object.defineProperty(this, "rect", {
            enumerable: !1
        })
    }
}
class Be {
    constructor(t) {
        this.target = void 0,
        this.listeners = [],
        this.removeAll = () => {
            this.listeners.forEach(n => {
                var r;
                return (r = this.target) == null ? void 0 : r.removeEventListener(...n)
            }
            )
        }
        ,
        this.target = t
    }
    add(t, n, r) {
        var s;
        (s = this.target) == null || s.addEventListener(t, n, r),
        this.listeners.push([t, n, r])
    }
}
function _r(e) {
    const {EventTarget: t} = Y(e);
    return e instanceof t ? e : Me(e)
}
function it(e, t) {
    const n = Math.abs(e.x)
      , r = Math.abs(e.y);
    return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x"in t && "y"in t ? n > t.x && r > t.y : "x"in t ? n > t.x : "y"in t ? r > t.y : !1
}
var Z;
(function(e) {
    e.Click = "click",
    e.DragStart = "dragstart",
    e.Keydown = "keydown",
    e.ContextMenu = "contextmenu",
    e.Resize = "resize",
    e.SelectionChange = "selectionchange",
    e.VisibilityChange = "visibilitychange"
}
)(Z || (Z = {}));
function Wt(e) {
    e.preventDefault()
}
function Yr(e) {
    e.stopPropagation()
}
var I;
(function(e) {
    e.Space = "Space",
    e.Down = "ArrowDown",
    e.Right = "ArrowRight",
    e.Left = "ArrowLeft",
    e.Up = "ArrowUp",
    e.Esc = "Escape",
    e.Enter = "Enter",
    e.Tab = "Tab"
}
)(I || (I = {}));
const gn = {
    start: [I.Space, I.Enter],
    cancel: [I.Esc],
    end: [I.Space, I.Enter, I.Tab]
}
  , Vr = (e, t) => {
    let {currentCoordinates: n} = t;
    switch (e.code) {
    case I.Right:
        return {
            ...n,
            x: n.x + 25
        };
    case I.Left:
        return {
            ...n,
            x: n.x - 25
        };
    case I.Down:
        return {
            ...n,
            y: n.y + 25
        };
    case I.Up:
        return {
            ...n,
            y: n.y - 25
        }
    }
}
;
class vn {
    constructor(t) {
        this.props = void 0,
        this.autoScrollEnabled = !1,
        this.referenceCoordinates = void 0,
        this.listeners = void 0,
        this.windowListeners = void 0,
        this.props = t;
        const {event: {target: n}} = t;
        this.props = t,
        this.listeners = new Be(Me(n)),
        this.windowListeners = new Be(Y(n)),
        this.handleKeyDown = this.handleKeyDown.bind(this),
        this.handleCancel = this.handleCancel.bind(this),
        this.attach()
    }
    attach() {
        this.handleStart(),
        this.windowListeners.add(Z.Resize, this.handleCancel),
        this.windowListeners.add(Z.VisibilityChange, this.handleCancel),
        setTimeout( () => this.listeners.add(Z.Keydown, this.handleKeyDown))
    }
    handleStart() {
        const {activeNode: t, onStart: n} = this.props
          , r = t.node.current;
        r && Ur(r),
        n(te)
    }
    handleKeyDown(t) {
        if (on(t)) {
            const {active: n, context: r, options: s} = this.props
              , {keyboardCodes: o=gn, coordinateGetter: i=Vr, scrollBehavior: l="smooth"} = s
              , {code: a} = t;
            if (o.end.includes(a)) {
                this.handleEnd(t);
                return
            }
            if (o.cancel.includes(a)) {
                this.handleCancel(t);
                return
            }
            const {collisionRect: u} = r.current
              , f = u ? {
                x: u.left,
                y: u.top
            } : te;
            this.referenceCoordinates || (this.referenceCoordinates = f);
            const d = i(t, {
                active: n,
                context: r.current,
                currentCoordinates: f
            });
            if (d) {
                const g = qe(d, f)
                  , v = {
                    x: 0,
                    y: 0
                }
                  , {scrollableAncestors: y} = r.current;
                for (const h of y) {
                    const p = t.code
                      , {isTop: w, isRight: m, isLeft: D, isBottom: S, maxScroll: k, minScroll: C} = fn(h)
                      , E = Wr(h)
                      , x = {
                        x: Math.min(p === I.Right ? E.right - E.width / 2 : E.right, Math.max(p === I.Right ? E.left : E.left + E.width / 2, d.x)),
                        y: Math.min(p === I.Down ? E.bottom - E.height / 2 : E.bottom, Math.max(p === I.Down ? E.top : E.top + E.height / 2, d.y))
                    }
                      , N = p === I.Right && !m || p === I.Left && !D
                      , j = p === I.Down && !S || p === I.Up && !w;
                    if (N && x.x !== d.x) {
                        const T = h.scrollLeft + g.x
                          , A = p === I.Right && T <= k.x || p === I.Left && T >= C.x;
                        if (A && !g.y) {
                            h.scrollTo({
                                left: T,
                                behavior: l
                            });
                            return
                        }
                        A ? v.x = h.scrollLeft - T : v.x = p === I.Right ? h.scrollLeft - k.x : h.scrollLeft - C.x,
                        v.x && h.scrollBy({
                            left: -v.x,
                            behavior: l
                        });
                        break
                    } else if (j && x.y !== d.y) {
                        const T = h.scrollTop + g.y
                          , A = p === I.Down && T <= k.y || p === I.Up && T >= C.y;
                        if (A && !g.x) {
                            h.scrollTo({
                                top: T,
                                behavior: l
                            });
                            return
                        }
                        A ? v.y = h.scrollTop - T : v.y = p === I.Down ? h.scrollTop - k.y : h.scrollTop - C.y,
                        v.y && h.scrollBy({
                            top: -v.y,
                            behavior: l
                        });
                        break
                    }
                }
                this.handleMove(t, Ce(qe(d, this.referenceCoordinates), v))
            }
        }
    }
    handleMove(t, n) {
        const {onMove: r} = this.props;
        t.preventDefault(),
        r(n)
    }
    handleEnd(t) {
        const {onEnd: n} = this.props;
        t.preventDefault(),
        this.detach(),
        n()
    }
    handleCancel(t) {
        const {onCancel: n} = this.props;
        t.preventDefault(),
        this.detach(),
        n()
    }
    detach() {
        this.listeners.removeAll(),
        this.windowListeners.removeAll()
    }
}
vn.activators = [{
    eventName: "onKeyDown",
    handler: (e, t, n) => {
        let {keyboardCodes: r=gn, onActivation: s} = t
          , {active: o} = n;
        const {code: i} = e.nativeEvent;
        if (r.start.includes(i)) {
            const l = o.activatorNode.current;
            return l && e.target !== l ? !1 : (e.preventDefault(),
            s?.({
                event: e.nativeEvent
            }),
            !0)
        }
        return !1
    }
}];
function $t(e) {
    return !!(e && "distance"in e)
}
function Ht(e) {
    return !!(e && "delay"in e)
}
class Rt {
    constructor(t, n, r) {
        var s;
        r === void 0 && (r = _r(t.event.target)),
        this.props = void 0,
        this.events = void 0,
        this.autoScrollEnabled = !0,
        this.document = void 0,
        this.activated = !1,
        this.initialCoordinates = void 0,
        this.timeoutId = null,
        this.listeners = void 0,
        this.documentListeners = void 0,
        this.windowListeners = void 0,
        this.props = t,
        this.events = n;
        const {event: o} = t
          , {target: i} = o;
        this.props = t,
        this.events = n,
        this.document = Me(i),
        this.documentListeners = new Be(this.document),
        this.listeners = new Be(r),
        this.windowListeners = new Be(Y(i)),
        this.initialCoordinates = (s = dt(o)) != null ? s : te,
        this.handleStart = this.handleStart.bind(this),
        this.handleMove = this.handleMove.bind(this),
        this.handleEnd = this.handleEnd.bind(this),
        this.handleCancel = this.handleCancel.bind(this),
        this.handleKeydown = this.handleKeydown.bind(this),
        this.removeTextSelection = this.removeTextSelection.bind(this),
        this.attach()
    }
    attach() {
        const {events: t, props: {options: {activationConstraint: n, bypassActivationConstraint: r}}} = this;
        if (this.listeners.add(t.move.name, this.handleMove, {
            passive: !1
        }),
        this.listeners.add(t.end.name, this.handleEnd),
        t.cancel && this.listeners.add(t.cancel.name, this.handleCancel),
        this.windowListeners.add(Z.Resize, this.handleCancel),
        this.windowListeners.add(Z.DragStart, Wt),
        this.windowListeners.add(Z.VisibilityChange, this.handleCancel),
        this.windowListeners.add(Z.ContextMenu, Wt),
        this.documentListeners.add(Z.Keydown, this.handleKeydown),
        n) {
            if (r != null && r({
                event: this.props.event,
                activeNode: this.props.activeNode,
                options: this.props.options
            }))
                return this.handleStart();
            if (Ht(n)) {
                this.timeoutId = setTimeout(this.handleStart, n.delay),
                this.handlePending(n);
                return
            }
            if ($t(n)) {
                this.handlePending(n);
                return
            }
        }
        this.handleStart()
    }
    detach() {
        this.listeners.removeAll(),
        this.windowListeners.removeAll(),
        setTimeout(this.documentListeners.removeAll, 50),
        this.timeoutId !== null && (clearTimeout(this.timeoutId),
        this.timeoutId = null)
    }
    handlePending(t, n) {
        const {active: r, onPending: s} = this.props;
        s(r, t, this.initialCoordinates, n)
    }
    handleStart() {
        const {initialCoordinates: t} = this
          , {onStart: n} = this.props;
        t && (this.activated = !0,
        this.documentListeners.add(Z.Click, Yr, {
            capture: !0
        }),
        this.removeTextSelection(),
        this.documentListeners.add(Z.SelectionChange, this.removeTextSelection),
        n(t))
    }
    handleMove(t) {
        var n;
        const {activated: r, initialCoordinates: s, props: o} = this
          , {onMove: i, options: {activationConstraint: l}} = o;
        if (!s)
            return;
        const a = (n = dt(t)) != null ? n : te
          , u = qe(s, a);
        if (!r && l) {
            if ($t(l)) {
                if (l.tolerance != null && it(u, l.tolerance))
                    return this.handleCancel();
                if (it(u, l.distance))
                    return this.handleStart()
            }
            if (Ht(l) && it(u, l.tolerance))
                return this.handleCancel();
            this.handlePending(l, u);
            return
        }
        t.cancelable && t.preventDefault(),
        i(a)
    }
    handleEnd() {
        const {onAbort: t, onEnd: n} = this.props;
        this.detach(),
        this.activated || t(this.props.active),
        n()
    }
    handleCancel() {
        const {onAbort: t, onCancel: n} = this.props;
        this.detach(),
        this.activated || t(this.props.active),
        n()
    }
    handleKeydown(t) {
        t.code === I.Esc && this.handleCancel()
    }
    removeTextSelection() {
        var t;
        (t = this.document.getSelection()) == null || t.removeAllRanges()
    }
}
const Kr = {
    cancel: {
        name: "pointercancel"
    },
    move: {
        name: "pointermove"
    },
    end: {
        name: "pointerup"
    }
};
class Ct extends Rt {
    constructor(t) {
        const {event: n} = t
          , r = Me(n.target);
        super(t, Kr, r)
    }
}
Ct.activators = [{
    eventName: "onPointerDown",
    handler: (e, t) => {
        let {nativeEvent: n} = e
          , {onActivation: r} = t;
        return !n.isPrimary || n.button !== 0 ? !1 : (r?.({
            event: n
        }),
        !0)
    }
}];
const qr = {
    move: {
        name: "mousemove"
    },
    end: {
        name: "mouseup"
    }
};
var ht;
(function(e) {
    e[e.RightClick = 2] = "RightClick"
}
)(ht || (ht = {}));
class Gr extends Rt {
    constructor(t) {
        super(t, qr, Me(t.event.target))
    }
}
Gr.activators = [{
    eventName: "onMouseDown",
    handler: (e, t) => {
        let {nativeEvent: n} = e
          , {onActivation: r} = t;
        return n.button === ht.RightClick ? !1 : (r?.({
            event: n
        }),
        !0)
    }
}];
const lt = {
    cancel: {
        name: "touchcancel"
    },
    move: {
        name: "touchmove"
    },
    end: {
        name: "touchend"
    }
};
class Jr extends Rt {
    constructor(t) {
        super(t, lt)
    }
    static setup() {
        return window.addEventListener(lt.move.name, t, {
            capture: !1,
            passive: !1
        }),
        function() {
            window.removeEventListener(lt.move.name, t)
        }
        ;
        function t() {}
    }
}
Jr.activators = [{
    eventName: "onTouchStart",
    handler: (e, t) => {
        let {nativeEvent: n} = e
          , {onActivation: r} = t;
        const {touches: s} = n;
        return s.length > 1 ? !1 : (r?.({
            event: n
        }),
        !0)
    }
}];
var ze;
(function(e) {
    e[e.Pointer = 0] = "Pointer",
    e[e.DraggableRect = 1] = "DraggableRect"
}
)(ze || (ze = {}));
var Je;
(function(e) {
    e[e.TreeOrder = 0] = "TreeOrder",
    e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder"
}
)(Je || (Je = {}));
function Qr(e) {
    let {acceleration: t, activator: n=ze.Pointer, canScroll: r, draggingRect: s, enabled: o, interval: i=5, order: l=Je.TreeOrder, pointerCoordinates: a, scrollableAncestors: u, scrollableAncestorRects: f, delta: d, threshold: g} = e;
    const v = eo({
        delta: d,
        disabled: !o
    })
      , [y,h] = ur()
      , p = c.useRef({
        x: 0,
        y: 0
    })
      , w = c.useRef({
        x: 0,
        y: 0
    })
      , m = c.useMemo( () => {
        switch (n) {
        case ze.Pointer:
            return a ? {
                top: a.y,
                bottom: a.y,
                left: a.x,
                right: a.x
            } : null;
        case ze.DraggableRect:
            return s
        }
    }
    , [n, s, a])
      , D = c.useRef(null)
      , S = c.useCallback( () => {
        const C = D.current;
        if (!C)
            return;
        const E = p.current.x * w.current.x
          , x = p.current.y * w.current.y;
        C.scrollBy(E, x)
    }
    , [])
      , k = c.useMemo( () => l === Je.TreeOrder ? [...u].reverse() : u, [l, u]);
    c.useEffect( () => {
        if (!o || !u.length || !m) {
            h();
            return
        }
        for (const C of k) {
            if (r?.(C) === !1)
                continue;
            const E = u.indexOf(C)
              , x = f[E];
            if (!x)
                continue;
            const {direction: N, speed: j} = Fr(C, x, m, t, g);
            for (const T of ["x", "y"])
                v[T][N[T]] || (j[T] = 0,
                N[T] = 0);
            if (j.x > 0 || j.y > 0) {
                h(),
                D.current = C,
                y(S, i),
                p.current = j,
                w.current = N;
                return
            }
        }
        p.current = {
            x: 0,
            y: 0
        },
        w.current = {
            x: 0,
            y: 0
        },
        h()
    }
    , [t, S, r, h, o, i, JSON.stringify(m), JSON.stringify(v), y, u, k, f, JSON.stringify(g)])
}
const Zr = {
    x: {
        [F.Backward]: !1,
        [F.Forward]: !1
    },
    y: {
        [F.Backward]: !1,
        [F.Forward]: !1
    }
};
function eo(e) {
    let {delta: t, disabled: n} = e;
    const r = ut(t);
    return Ue(s => {
        if (n || !r || !s)
            return Zr;
        const o = {
            x: Math.sign(t.x - r.x),
            y: Math.sign(t.y - r.y)
        };
        return {
            x: {
                [F.Backward]: s.x[F.Backward] || o.x === -1,
                [F.Forward]: s.x[F.Forward] || o.x === 1
            },
            y: {
                [F.Backward]: s.y[F.Backward] || o.y === -1,
                [F.Forward]: s.y[F.Forward] || o.y === 1
            }
        }
    }
    , [n, t, r])
}
function to(e, t) {
    const n = t != null ? e.get(t) : void 0
      , r = n ? n.node.current : null;
    return Ue(s => {
        var o;
        return t == null ? null : (o = r ?? s) != null ? o : null
    }
    , [r, t])
}
function no(e, t) {
    return c.useMemo( () => e.reduce( (n, r) => {
        const {sensor: s} = r
          , o = s.activators.map(i => ({
            eventName: i.eventName,
            handler: t(i.handler, r)
        }));
        return [...n, ...o]
    }
    , []), [e, t])
}
var We;
(function(e) {
    e[e.Always = 0] = "Always",
    e[e.BeforeDragging = 1] = "BeforeDragging",
    e[e.WhileDragging = 2] = "WhileDragging"
}
)(We || (We = {}));
var gt;
(function(e) {
    e.Optimized = "optimized"
}
)(gt || (gt = {}));
const Ut = new Map;
function ro(e, t) {
    let {dragging: n, dependencies: r, config: s} = t;
    const [o,i] = c.useState(null)
      , {frequency: l, measure: a, strategy: u} = s
      , f = c.useRef(e)
      , d = p()
      , g = xt(d)
      , v = c.useCallback(function(w) {
        w === void 0 && (w = []),
        !g.current && i(m => m === null ? w : m.concat(w.filter(D => !m.includes(D))))
    }, [g])
      , y = c.useRef(null)
      , h = Ue(w => {
        if (d && !n)
            return Ut;
        if (!w || w === Ut || f.current !== e || o != null) {
            const m = new Map;
            for (let D of e) {
                if (!D)
                    continue;
                if (o && o.length > 0 && !o.includes(D.id) && D.rect.current) {
                    m.set(D.id, D.rect.current);
                    continue
                }
                const S = D.node.current
                  , k = S ? new Dt(a(S),S) : null;
                D.rect.current = k,
                k && m.set(D.id, k)
            }
            return m
        }
        return w
    }
    , [e, o, n, d, a]);
    return c.useEffect( () => {
        f.current = e
    }
    , [e]),
    c.useEffect( () => {
        d || v()
    }
    , [n, d]),
    c.useEffect( () => {
        o && o.length > 0 && i(null)
    }
    , [JSON.stringify(o)]),
    c.useEffect( () => {
        d || typeof l != "number" || y.current !== null || (y.current = setTimeout( () => {
            v(),
            y.current = null
        }
        , l))
    }
    , [l, d, v, ...r]),
    {
        droppableRects: h,
        measureDroppableContainers: v,
        measuringScheduled: o != null
    };
    function p() {
        switch (u) {
        case We.Always:
            return !1;
        case We.BeforeDragging:
            return n;
        default:
            return !n
        }
    }
}
function pn(e, t) {
    return Ue(n => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e])
}
function oo(e, t) {
    return pn(e, t)
}
function so(e) {
    let {callback: t, disabled: n} = e;
    const r = wt(t)
      , s = c.useMemo( () => {
        if (n || typeof window > "u" || typeof window.MutationObserver > "u")
            return;
        const {MutationObserver: o} = window;
        return new o(r)
    }
    , [r, n]);
    return c.useEffect( () => () => s?.disconnect(), [s]),
    s
}
function St(e) {
    let {callback: t, disabled: n} = e;
    const r = wt(t)
      , s = c.useMemo( () => {
        if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
            return;
        const {ResizeObserver: o} = window;
        return new o(r)
    }
    , [n]);
    return c.useEffect( () => () => s?.disconnect(), [s]),
    s
}
function io(e) {
    return new Dt(Xe(e),e)
}
function Xt(e, t, n) {
    t === void 0 && (t = io);
    const [r,s] = c.useState(null);
    function o() {
        s(a => {
            if (!e)
                return null;
            if (e.isConnected === !1) {
                var u;
                return (u = a ?? n) != null ? u : null
            }
            const f = t(e);
            return JSON.stringify(a) === JSON.stringify(f) ? a : f
        }
        )
    }
    const i = so({
        callback(a) {
            if (e)
                for (const u of a) {
                    const {type: f, target: d} = u;
                    if (f === "childList" && d instanceof HTMLElement && d.contains(e)) {
                        o();
                        break
                    }
                }
        }
    })
      , l = St({
        callback: o
    });
    return me( () => {
        o(),
        e ? (l?.observe(e),
        i?.observe(document.body, {
            childList: !0,
            subtree: !0
        })) : (l?.disconnect(),
        i?.disconnect())
    }
    , [e]),
    r
}
function lo(e) {
    const t = pn(e);
    return ln(e, t)
}
const _t = [];
function co(e) {
    const t = c.useRef(e)
      , n = Ue(r => e ? r && r !== _t && e && t.current && e.parentNode === t.current.parentNode ? r : Et(e) : _t, [e]);
    return c.useEffect( () => {
        t.current = e
    }
    , [e]),
    n
}
function ao(e) {
    const [t,n] = c.useState(null)
      , r = c.useRef(e)
      , s = c.useCallback(o => {
        const i = st(o.target);
        i && n(l => l ? (l.set(i, ft(i)),
        new Map(l)) : null)
    }
    , []);
    return c.useEffect( () => {
        const o = r.current;
        if (e !== o) {
            i(o);
            const l = e.map(a => {
                const u = st(a);
                return u ? (u.addEventListener("scroll", s, {
                    passive: !0
                }),
                [u, ft(u)]) : null
            }
            ).filter(a => a != null);
            n(l.length ? new Map(l) : null),
            r.current = e
        }
        return () => {
            i(e),
            i(o)
        }
        ;
        function i(l) {
            l.forEach(a => {
                const u = st(a);
                u?.removeEventListener("scroll", s)
            }
            )
        }
    }
    , [s, e]),
    c.useMemo( () => e.length ? t ? Array.from(t.values()).reduce( (o, i) => Ce(o, i), te) : hn(e) : te, [e, t])
}
function Yt(e, t) {
    t === void 0 && (t = []);
    const n = c.useRef(null);
    return c.useEffect( () => {
        n.current = null
    }
    , t),
    c.useEffect( () => {
        const r = e !== te;
        r && !n.current && (n.current = e),
        !r && n.current && (n.current = null)
    }
    , [e]),
    n.current ? qe(e, n.current) : te
}
function uo(e) {
    c.useEffect( () => {
        if (!Qe)
            return;
        const t = e.map(n => {
            let {sensor: r} = n;
            return r.setup == null ? void 0 : r.setup()
        }
        );
        return () => {
            for (const n of t)
                n?.()
        }
    }
    , e.map(t => {
        let {sensor: n} = t;
        return n
    }
    ))
}
function fo(e, t) {
    return c.useMemo( () => e.reduce( (n, r) => {
        let {eventName: s, handler: o} = r;
        return n[s] = i => {
            o(i, t)
        }
        ,
        n
    }
    , {}), [e, t])
}
function bn(e) {
    return c.useMemo( () => e ? Ir(e) : null, [e])
}
const Vt = [];
function ho(e, t) {
    t === void 0 && (t = Xe);
    const [n] = e
      , r = bn(n ? Y(n) : null)
      , [s,o] = c.useState(Vt);
    function i() {
        o( () => e.length ? e.map(a => dn(a) ? r : new Dt(t(a),a)) : Vt)
    }
    const l = St({
        callback: i
    });
    return me( () => {
        l?.disconnect(),
        i(),
        e.forEach(a => l?.observe(a))
    }
    , [e]),
    s
}
function go(e) {
    if (!e)
        return null;
    if (e.children.length > 1)
        return e;
    const t = e.children[0];
    return He(t) ? t : e
}
function vo(e) {
    let {measure: t} = e;
    const [n,r] = c.useState(null)
      , s = c.useCallback(u => {
        for (const {target: f} of u)
            if (He(f)) {
                r(d => {
                    const g = t(f);
                    return d ? {
                        ...d,
                        width: g.width,
                        height: g.height
                    } : g
                }
                );
                break
            }
    }
    , [t])
      , o = St({
        callback: s
    })
      , i = c.useCallback(u => {
        const f = go(u);
        o?.disconnect(),
        f && o?.observe(f),
        r(f ? t(f) : null)
    }
    , [t, o])
      , [l,a] = at(i);
    return c.useMemo( () => ({
        nodeRef: l,
        rect: n,
        setRef: a
    }), [n, l, a])
}
const po = [{
    sensor: Ct,
    options: {}
}, {
    sensor: vn,
    options: {}
}]
  , bo = {
    current: {}
}
  , Ke = {
    draggable: {
        measure: Ft
    },
    droppable: {
        measure: Ft,
        strategy: We.WhileDragging,
        frequency: gt.Optimized
    },
    dragOverlay: {
        measure: Xe
    }
};
class Pe extends Map {
    get(t) {
        var n;
        return t != null && (n = super.get(t)) != null ? n : void 0
    }
    toArray() {
        return Array.from(this.values())
    }
    getEnabled() {
        return this.toArray().filter(t => {
            let {disabled: n} = t;
            return !n
        }
        )
    }
    getNodeFor(t) {
        var n, r;
        return (n = (r = this.get(t)) == null ? void 0 : r.node.current) != null ? n : void 0
    }
}
const mo = {
    activatorEvent: null,
    active: null,
    activeNode: null,
    activeNodeRect: null,
    collisions: null,
    containerNodeRect: null,
    draggableNodes: new Map,
    droppableRects: new Map,
    droppableContainers: new Pe,
    over: null,
    dragOverlay: {
        nodeRef: {
            current: null
        },
        rect: null,
        setRef: Ge
    },
    scrollableAncestors: [],
    scrollableAncestorRects: [],
    measuringConfiguration: Ke,
    measureDroppableContainers: Ge,
    windowRect: null,
    measuringScheduled: !1
}
  , wo = {
    activatorEvent: null,
    activators: [],
    active: null,
    activeNodeRect: null,
    ariaDescribedById: {
        draggable: ""
    },
    dispatch: Ge,
    draggableNodes: new Map,
    over: null,
    measureDroppableContainers: Ge
}
  , Mt = c.createContext(wo)
  , xo = c.createContext(mo);
function yo() {
    return {
        draggable: {
            active: null,
            initialCoordinates: {
                x: 0,
                y: 0
            },
            nodes: new Map,
            translate: {
                x: 0,
                y: 0
            }
        },
        droppable: {
            containers: new Pe
        }
    }
}
function Eo(e, t) {
    switch (t.type) {
    case U.DragStart:
        return {
            ...e,
            draggable: {
                ...e.draggable,
                initialCoordinates: t.initialCoordinates,
                active: t.active
            }
        };
    case U.DragMove:
        return e.draggable.active == null ? e : {
            ...e,
            draggable: {
                ...e.draggable,
                translate: {
                    x: t.coordinates.x - e.draggable.initialCoordinates.x,
                    y: t.coordinates.y - e.draggable.initialCoordinates.y
                }
            }
        };
    case U.DragEnd:
    case U.DragCancel:
        return {
            ...e,
            draggable: {
                ...e.draggable,
                active: null,
                initialCoordinates: {
                    x: 0,
                    y: 0
                },
                translate: {
                    x: 0,
                    y: 0
                }
            }
        };
    case U.RegisterDroppable:
        {
            const {element: n} = t
              , {id: r} = n
              , s = new Pe(e.droppable.containers);
            return s.set(r, n),
            {
                ...e,
                droppable: {
                    ...e.droppable,
                    containers: s
                }
            }
        }
    case U.SetDroppableDisabled:
        {
            const {id: n, key: r, disabled: s} = t
              , o = e.droppable.containers.get(n);
            if (!o || r !== o.key)
                return e;
            const i = new Pe(e.droppable.containers);
            return i.set(n, {
                ...o,
                disabled: s
            }),
            {
                ...e,
                droppable: {
                    ...e.droppable,
                    containers: i
                }
            }
        }
    case U.UnregisterDroppable:
        {
            const {id: n, key: r} = t
              , s = e.droppable.containers.get(n);
            if (!s || r !== s.key)
                return e;
            const o = new Pe(e.droppable.containers);
            return o.delete(n),
            {
                ...e,
                droppable: {
                    ...e.droppable,
                    containers: o
                }
            }
        }
    default:
        return e
    }
}
function Do(e) {
    let {disabled: t} = e;
    const {active: n, activatorEvent: r, draggableNodes: s} = c.useContext(Mt)
      , o = ut(r)
      , i = ut(n?.id);
    return c.useEffect( () => {
        if (!t && !r && o && i != null) {
            if (!on(o) || document.activeElement === o.target)
                return;
            const l = s.get(i);
            if (!l)
                return;
            const {activatorNode: a, node: u} = l;
            if (!a.current && !u.current)
                return;
            requestAnimationFrame( () => {
                for (const f of [a.current, u.current]) {
                    if (!f)
                        continue;
                    const d = hr(f);
                    if (d) {
                        d.focus();
                        break
                    }
                }
            }
            )
        }
    }
    , [r, t, s, i, o]),
    null
}
function Ro(e, t) {
    let {transform: n, ...r} = t;
    return e != null && e.length ? e.reduce( (s, o) => o({
        transform: s,
        ...r
    }), n) : n
}
function Co(e) {
    return c.useMemo( () => ({
        draggable: {
            ...Ke.draggable,
            ...e?.draggable
        },
        droppable: {
            ...Ke.droppable,
            ...e?.droppable
        },
        dragOverlay: {
            ...Ke.dragOverlay,
            ...e?.dragOverlay
        }
    }), [e?.draggable, e?.droppable, e?.dragOverlay])
}
function So(e) {
    let {activeNode: t, measure: n, initialRect: r, config: s=!0} = e;
    const o = c.useRef(!1)
      , {x: i, y: l} = typeof s == "boolean" ? {
        x: s,
        y: s
    } : s;
    me( () => {
        if (!i && !l || !t) {
            o.current = !1;
            return
        }
        if (o.current || !r)
            return;
        const u = t?.node.current;
        if (!u || u.isConnected === !1)
            return;
        const f = n(u)
          , d = ln(f, r);
        if (i || (d.x = 0),
        l || (d.y = 0),
        o.current = !0,
        Math.abs(d.x) > 0 || Math.abs(d.y) > 0) {
            const g = cn(u);
            g && g.scrollBy({
                top: d.y,
                left: d.x
            })
        }
    }
    , [t, i, l, r, n])
}
const mn = c.createContext({
    ...te,
    scaleX: 1,
    scaleY: 1
});
var be;
(function(e) {
    e[e.Uninitialized = 0] = "Uninitialized",
    e[e.Initializing = 1] = "Initializing",
    e[e.Initialized = 2] = "Initialized"
}
)(be || (be = {}));
const Mo = c.memo(function(t) {
    var n, r, s, o;
    let {id: i, accessibility: l, autoScroll: a=!0, children: u, sensors: f=po, collisionDetection: d=kr, measuring: g, modifiers: v, ...y} = t;
    const h = c.useReducer(Eo, void 0, yo)
      , [p,w] = h
      , [m,D] = wr()
      , [S,k] = c.useState(be.Uninitialized)
      , C = S === be.Initialized
      , {draggable: {active: E, nodes: x, translate: N}, droppable: {containers: j}} = p
      , T = E != null ? x.get(E) : null
      , A = c.useRef({
        initial: null,
        translated: null
    })
      , R = c.useMemo( () => {
        var H;
        return E != null ? {
            id: E,
            data: (H = T?.data) != null ? H : bo,
            rect: A
        } : null
    }
    , [E, T])
      , O = c.useRef(null)
      , [ne,xe] = c.useState(null)
      , [ee,_e] = c.useState(null)
      , ie = xt(y, Object.values(y))
      , ke = yt("DndDescribedBy", i)
      , Ne = c.useMemo( () => j.getEnabled(), [j])
      , le = Co(g)
      , {droppableRects: de, measureDroppableContainers: ye, measuringScheduled: L} = ro(Ne, {
        dragging: C,
        dependencies: [N.x, N.y],
        config: le.droppable
    })
      , M = to(x, E)
      , X = c.useMemo( () => ee ? dt(ee) : null, [ee])
      , B = Sn()
      , W = oo(M, le.draggable.measure);
    So({
        activeNode: E != null ? x.get(E) : null,
        config: B.layoutShiftCompensation,
        initialRect: W,
        measure: le.draggable.measure
    });
    const z = Xt(M, le.draggable.measure, W)
      , J = Xt(M ? M.parentElement : null)
      , re = c.useRef({
        activatorEvent: null,
        active: null,
        activeNode: M,
        collisionRect: null,
        collisions: null,
        droppableRects: de,
        draggableNodes: x,
        draggingNode: null,
        draggingNodeRect: null,
        droppableContainers: j,
        over: null,
        scrollableAncestors: [],
        scrollAdjustedTranslate: null
    })
      , Ae = j.getNodeFor((n = re.current.over) == null ? void 0 : n.id)
      , V = vo({
        measure: le.dragOverlay.measure
    })
      , we = (r = V.nodeRef.current) != null ? r : M
      , ce = C ? (s = V.rect) != null ? s : z : null
      , kt = !!(V.nodeRef.current && V.rect)
      , Nt = lo(kt ? null : z)
      , Ze = bn(we ? Y(we) : null)
      , fe = co(C ? Ae ?? M : null)
      , Ye = ho(fe)
      , Ve = Ro(v, {
        transform: {
            x: N.x - Nt.x,
            y: N.y - Nt.y,
            scaleX: 1,
            scaleY: 1
        },
        activatorEvent: ee,
        active: R,
        activeNodeRect: z,
        containerNodeRect: J,
        draggingNodeRect: ce,
        over: re.current.over,
        overlayNodeRect: V.rect,
        scrollableAncestors: fe,
        scrollableAncestorRects: Ye,
        windowRect: Ze
    })
      , At = X ? Ce(X, N) : null
      , Ot = ao(fe)
      , wn = Yt(Ot)
      , xn = Yt(Ot, [z])
      , Ee = Ce(Ve, wn)
      , De = ce ? Or(ce, Ve) : null
      , Oe = R && De ? d({
        active: R,
        collisionRect: De,
        droppableRects: de,
        droppableContainers: Ne,
        pointerCoordinates: At
    }) : null
      , Tt = Sr(Oe, "id")
      , [he,jt] = c.useState(null)
      , yn = kt ? Ve : Ce(Ve, xn)
      , En = Nr(yn, (o = he?.rect) != null ? o : null, z)
      , et = c.useRef(null)
      , Lt = c.useCallback( (H, K) => {
        let {sensor: q, options: ge} = K;
        if (O.current == null)
            return;
        const Q = x.get(O.current);
        if (!Q)
            return;
        const G = H.nativeEvent
          , oe = new q({
            active: O.current,
            activeNode: Q,
            event: G,
            options: ge,
            context: re,
            onAbort($) {
                if (!x.get($))
                    return;
                const {onDragAbort: se} = ie.current
                  , ae = {
                    id: $
                };
                se?.(ae),
                m({
                    type: "onDragAbort",
                    event: ae
                })
            },
            onPending($, ve, se, ae) {
                if (!x.get($))
                    return;
                const {onDragPending: je} = ie.current
                  , pe = {
                    id: $,
                    constraint: ve,
                    initialCoordinates: se,
                    offset: ae
                };
                je?.(pe),
                m({
                    type: "onDragPending",
                    event: pe
                })
            },
            onStart($) {
                const ve = O.current;
                if (ve == null)
                    return;
                const se = x.get(ve);
                if (!se)
                    return;
                const {onDragStart: ae} = ie.current
                  , Te = {
                    activatorEvent: G,
                    active: {
                        id: ve,
                        data: se.data,
                        rect: A
                    }
                };
                Ie.unstable_batchedUpdates( () => {
                    ae?.(Te),
                    k(be.Initializing),
                    w({
                        type: U.DragStart,
                        initialCoordinates: $,
                        active: ve
                    }),
                    m({
                        type: "onDragStart",
                        event: Te
                    }),
                    xe(et.current),
                    _e(G)
                }
                )
            },
            onMove($) {
                w({
                    type: U.DragMove,
                    coordinates: $
                })
            },
            onEnd: Re(U.DragEnd),
            onCancel: Re(U.DragCancel)
        });
        et.current = oe;
        function Re($) {
            return async function() {
                const {active: se, collisions: ae, over: Te, scrollAdjustedTranslate: je} = re.current;
                let pe = null;
                if (se && je) {
                    const {cancelDrop: Le} = ie.current;
                    pe = {
                        activatorEvent: G,
                        active: se,
                        collisions: ae,
                        delta: je,
                        over: Te
                    },
                    $ === U.DragEnd && typeof Le == "function" && await Promise.resolve(Le(pe)) && ($ = U.DragCancel)
                }
                O.current = null,
                Ie.unstable_batchedUpdates( () => {
                    w({
                        type: $
                    }),
                    k(be.Uninitialized),
                    jt(null),
                    xe(null),
                    _e(null),
                    et.current = null;
                    const Le = $ === U.DragEnd ? "onDragEnd" : "onDragCancel";
                    if (pe) {
                        const tt = ie.current[Le];
                        tt?.(pe),
                        m({
                            type: Le,
                            event: pe
                        })
                    }
                }
                )
            }
        }
    }
    , [x])
      , Dn = c.useCallback( (H, K) => (q, ge) => {
        const Q = q.nativeEvent
          , G = x.get(ge);
        if (O.current !== null || !G || Q.dndKit || Q.defaultPrevented)
            return;
        const oe = {
            active: G
        };
        H(q, K.options, oe) === !0 && (Q.dndKit = {
            capturedBy: K.sensor
        },
        O.current = ge,
        Lt(q, K))
    }
    , [x, Lt])
      , It = no(f, Dn);
    uo(f),
    me( () => {
        z && S === be.Initializing && k(be.Initialized)
    }
    , [z, S]),
    c.useEffect( () => {
        const {onDragMove: H} = ie.current
          , {active: K, activatorEvent: q, collisions: ge, over: Q} = re.current;
        if (!K || !q)
            return;
        const G = {
            active: K,
            activatorEvent: q,
            collisions: ge,
            delta: {
                x: Ee.x,
                y: Ee.y
            },
            over: Q
        };
        Ie.unstable_batchedUpdates( () => {
            H?.(G),
            m({
                type: "onDragMove",
                event: G
            })
        }
        )
    }
    , [Ee.x, Ee.y]),
    c.useEffect( () => {
        const {active: H, activatorEvent: K, collisions: q, droppableContainers: ge, scrollAdjustedTranslate: Q} = re.current;
        if (!H || O.current == null || !K || !Q)
            return;
        const {onDragOver: G} = ie.current
          , oe = ge.get(Tt)
          , Re = oe && oe.rect.current ? {
            id: oe.id,
            rect: oe.rect.current,
            data: oe.data,
            disabled: oe.disabled
        } : null
          , $ = {
            active: H,
            activatorEvent: K,
            collisions: q,
            delta: {
                x: Q.x,
                y: Q.y
            },
            over: Re
        };
        Ie.unstable_batchedUpdates( () => {
            jt(Re),
            G?.($),
            m({
                type: "onDragOver",
                event: $
            })
        }
        )
    }
    , [Tt]),
    me( () => {
        re.current = {
            activatorEvent: ee,
            active: R,
            activeNode: M,
            collisionRect: De,
            collisions: Oe,
            droppableRects: de,
            draggableNodes: x,
            draggingNode: we,
            draggingNodeRect: ce,
            droppableContainers: j,
            over: he,
            scrollableAncestors: fe,
            scrollAdjustedTranslate: Ee
        },
        A.current = {
            initial: ce,
            translated: De
        }
    }
    , [R, M, Oe, De, x, we, ce, de, j, he, fe, Ee]),
    Qr({
        ...B,
        delta: N,
        draggingRect: De,
        pointerCoordinates: At,
        scrollableAncestors: fe,
        scrollableAncestorRects: Ye
    });
    const Rn = c.useMemo( () => ({
        active: R,
        activeNode: M,
        activeNodeRect: z,
        activatorEvent: ee,
        collisions: Oe,
        containerNodeRect: J,
        dragOverlay: V,
        draggableNodes: x,
        droppableContainers: j,
        droppableRects: de,
        over: he,
        measureDroppableContainers: ye,
        scrollableAncestors: fe,
        scrollableAncestorRects: Ye,
        measuringConfiguration: le,
        measuringScheduled: L,
        windowRect: Ze
    }), [R, M, z, ee, Oe, J, V, x, j, de, he, ye, fe, Ye, le, L, Ze])
      , Cn = c.useMemo( () => ({
        activatorEvent: ee,
        activators: It,
        active: R,
        activeNodeRect: z,
        ariaDescribedById: {
            draggable: ke
        },
        dispatch: w,
        draggableNodes: x,
        over: he,
        measureDroppableContainers: ye
    }), [ee, It, R, z, w, ke, x, he, ye]);
    return _.createElement(sn.Provider, {
        value: D
    }, _.createElement(Mt.Provider, {
        value: Cn
    }, _.createElement(xo.Provider, {
        value: Rn
    }, _.createElement(mn.Provider, {
        value: En
    }, u)), _.createElement(Do, {
        disabled: l?.restoreFocus === !1
    })), _.createElement(Er, {
        ...l,
        hiddenTextDescribedById: ke
    }));
    function Sn() {
        const H = ne?.autoScrollEnabled === !1
          , K = typeof a == "object" ? a.enabled === !1 : a === !1
          , q = C && !H && !K;
        return typeof a == "object" ? {
            ...a,
            enabled: q
        } : {
            enabled: q
        }
    }
})
  , ko = c.createContext(null)
  , Kt = "button"
  , No = "Draggable";
function Ao(e) {
    let {id: t, data: n, disabled: r=!1, attributes: s} = e;
    const o = yt(No)
      , {activators: i, activatorEvent: l, active: a, activeNodeRect: u, ariaDescribedById: f, draggableNodes: d, over: g} = c.useContext(Mt)
      , {role: v=Kt, roleDescription: y="draggable", tabIndex: h=0} = s ?? {}
      , p = a?.id === t
      , w = c.useContext(p ? mn : ko)
      , [m,D] = at()
      , [S,k] = at()
      , C = fo(i, t)
      , E = xt(n);
    me( () => (d.set(t, {
        id: t,
        key: o,
        node: m,
        activatorNode: S,
        data: E
    }),
    () => {
        const N = d.get(t);
        N && N.key === o && d.delete(t)
    }
    ), [d, t]);
    const x = c.useMemo( () => ({
        role: v,
        tabIndex: h,
        "aria-disabled": r,
        "aria-pressed": p && v === Kt ? !0 : void 0,
        "aria-roledescription": y,
        "aria-describedby": f.draggable
    }), [r, v, h, p, y, f.draggable]);
    return {
        active: a,
        activatorEvent: l,
        activeNodeRect: u,
        attributes: x,
        isDragging: p,
        listeners: r ? void 0 : C,
        node: m,
        over: g,
        setNodeRef: D,
        setActivatorNodeRef: k,
        transform: w
    }
}
const Oo = 40
  , qt = 20;
function To({setNotesHeight: e, notesHeight: t, minHeight: n=80}) {
    const r = Rr(Dr(Ct, {
        activationConstraint: {
            distance: 2
        }
    }))
      , s = _.useRef(t)
      , o = _.useRef(t)
      , i = () => {
        o.current = s.current
    }
      , l = ({delta: a}) => {
        if (typeof a?.y != "number")
            return;
        if (o.current === 0) {
            if (-a.y >= qt) {
                const d = Math.max(n, qt);
                e(d),
                s.current = d
            }
            return
        }
        const u = o.current - a.y;
        if (u < Oo) {
            e(0),
            s.current = 0;
            return
        }
        const f = Math.max(n, u);
        e(f),
        s.current = f
    }
    ;
    return b.jsx(Mo, {
        sensors: r,
        onDragStart: i,
        onDragMove: l,
        children: b.jsx(jo, {
            notesHeight: t
        })
    })
}
function jo({notesHeight: e}) {
    const {attributes: t, listeners: n, setNodeRef: r} = Ao({
        id: "speaker-notes-resize-handle"
    });
    return b.jsx(Jt, {
        label: b.jsx($e, {
            id: "eTM8rh",
            defaultMessage: "Drag up to open speaker notes"
        }),
        side: "top",
        disabled: e !== 0,
        children: b.jsx("div", {
            ref: r,
            ...n,
            ...t,
            className: "mx-auto h-2 w-9 cursor-row-resize select-none",
            children: b.jsx("div", {
                className: "h-[3px] w-full rounded bg-gray-300"
            })
        })
    })
}
const Lo = ({slide: e}) => {
    const t = c.useMemo( () => e.notesSlide?.elements.map(r => r.paragraphs.map(s => s.runs.map(o => o.text).join("")).join(`
`)).join(`
`).trim(), [e])
      , n = c.useMemo( () => t && t.length > 0, [t]);
    return b.jsx("div", {
        className: "bg-token-bg-primary h-full w-full overflow-y-auto rounded-md p-4 text-sm",
        children: n ? b.jsx("div", {
            className: "text-token-text-secondary",
            children: t
        }) : b.jsx("div", {
            className: "text-token-text-tertiary",
            children: b.jsx($e, {
                id: "walnut.speaker-notes",
                defaultMessage: "There are no speaker notes for this slide."
            })
        })
    })
}
;
function Io(e, t, n, r) {
    c.useEffect( () => {
        if (!e)
            return;
        const s = o => {
            if (o.key !== "ArrowUp" && o.key !== "ArrowDown")
                return;
            const i = e.slides
              , l = t ? i.indexOf(t) : -1;
            if (l === -1)
                return;
            let a = l;
            if (o.key === "ArrowUp" && l > 0 && (a = l - 1),
            o.key === "ArrowDown" && l < i.length - 1 && (a = l + 1),
            a !== l) {
                n(a);
                const u = r.current[a];
                u?.scrollIntoView({
                    block: "nearest"
                }),
                u?.focus()
            }
            o.preventDefault()
        }
        ;
        return window.addEventListener("keydown", s),
        () => window.removeEventListener("keydown", s)
    }
    , [e, t, n, r])
}
const Bo = 100;
function zo({presentation: e, selectedSlideIdx: t, setSelectedSlideIdx: n, isWalnutV2Enabled: r, isEditing: s, setIsEditing: o}) {
    const i = e.slides[t]
      , [l,a] = c.useState( () => new Array(e.slides.length).fill(null));
    c.useEffect( () => {
        a(new Array(e.slides.length).fill(null))
    }
    , [e]);
    const [u,f] = c.useState(null)
      , [d,g] = c.useState(null)
      , [v,y] = c.useState(null)
      , h = c.useRef([])
      , p = c.useRef(null)
      , w = c.useRef(null)
      , m = c.useRef(null)
      , D = c.useRef(null)
      , S = c.useRef(null)
      , k = c.useRef(null)
      , [C,E] = c.useState([])
      , [x,N] = c.useState(null)
      , [j,T] = c.useState(null)
      , {width: A, height: R} = sr(m, 100)
      , O = c.useCallback(async L => {
        if (l[L] == null)
            try {
                const M = e.slides[L];
                if (!M)
                    return;
                const X = await Xn(M, e);
                a(B => {
                    if (B.length !== e.slides.length || B[L] === X)
                        return B;
                    const W = [...B];
                    return W[L] = X,
                    W
                }
                )
            } catch (M) {
                Qt.addError(M)
            }
    }
    , [e, l])
      , ne = c.useCallback(L => {
        const M = L + 1;
        M < e.slides.length && O(M)
    }
    , [e.slides.length, O]);
    c.useEffect( () => (k.current && k.current.disconnect(),
    k.current = new IntersectionObserver(L => {
        L.forEach(M => {
            const X = M.target
              , B = X.getAttribute("data-index");
            if (!B)
                return;
            const W = Number(B);
            M.isIntersecting && (O(W).then( () => {
                ne(W)
            }
            ),
            k.current?.unobserve(X))
        }
        )
    }
    ,{
        root: S.current,
        rootMargin: "200px 0px",
        threshold: .05
    }),
    h.current.forEach(L => {
        L && k.current?.observe(L)
    }
    ),
    () => k.current?.disconnect()), [e, O, ne]),
    c.useEffect( () => {
        N(null),
        T(null)
    }
    , [A, R]),
    c.useEffect( () => {
        const L = () => {
            N(null),
            T(null)
        }
        ;
        return window.addEventListener("click", L),
        () => window.removeEventListener("click", L)
    }
    , []),
    c.useEffect( () => {
        const L = p.current;
        if (!L || !i || A === 0 || R === 0 || !m.current)
            return;
        const M = i.widthEmu * P
          , X = i.heightEmu * P
          , B = m.current.clientWidth
          , W = m.current.clientHeight
          , z = Math.min(B / M, W / X)
          , J = Math.round(window.devicePixelRatio) || 1
          , re = Math.round(M * z * J)
          , Ae = Math.round(X * z * J);
        L.width !== re && (L.width = re),
        L.height !== Ae && (L.height = Ae);
        const V = L.getContext("2d");
        if (!V)
            return;
        V.resetTransform(),
        V.scale(J * z, J * z);
        let we = !1;
        return (async () => {
            const ce = [];
            await _n(i, e, V, ce),
            !we && (E(ce),
            s && qn(V, e, u, d, v != null, i))
        }
        )(),
        () => {
            we = !0
        }
    }
    , [i, e, u, d, v, A, R, s]),
    Io(e, i ?? null, n, h);
    const xe = ir(e, i, w, p, N, C, n)
      , ee = cr(e, i, p, v, y, d, f, C)
      , _e = () => {
        v || f(null)
    }
      , ie = lr(e, i, w, p, s, d, g, f, y)
      , ke = () => y(null);
    c.useEffect( () => {
        g(null),
        f(null)
    }
    , [i]),
    ar(w, i, e);
    const [Ne,le] = c.useState(Bo)
      , de = A > 0 && R > 0;
    Nn( () => {
        if (!x || !D.current || !w.current)
            return;
        const {x: L, y: M, placement: X} = x
          , B = D.current.getBoundingClientRect()
          , W = w.current.getBoundingClientRect();
        let z = L + (X === "right" ? 0 : -B.width)
          , J = M - B.height;
        z = Math.max(0, Math.min(z, W.width - B.width)),
        J = Math.max(0, Math.min(J, W.height - B.height)),
        T({
            left: z,
            top: J
        })
    }
    , [x]);
    const ye = i?.widthEmu * P / (i?.heightEmu * P);
    return b.jsx("div", {
        className: "flex h-full flex-col gap-4 overflow-hidden",
        children: b.jsxs("div", {
            className: "flex h-full flex-1 flex-row",
            children: [b.jsx("div", {
                ref: S,
                className: "border-token-border-light flex h-full w-full shrink-0 flex-col gap-4 overflow-y-auto border-e p-2 sm:w-[240px]",
                children: e.slides.map( (L, M) => {
                    const X = e.slides[M] === i
                      , B = l[M];
                    return b.jsxs("button", {
                        ref: W => {
                            h.current[M] = W,
                            W && k.current && B == null && k.current.observe(W)
                        }
                        ,
                        "data-index": M,
                        type: "button",
                        onClick: () => n(M),
                        className: `flex w-full gap-3 rounded-md p-2 ${X ? "ring-2 ring-blue-500/60" : ""}`,
                        children: [b.jsx("div", {
                            className: "text-token-text-primary text-sm font-semibold",
                            children: M + 1
                        }), b.jsx("div", {
                            className: "bg-token-bg-secondary border-token-border-light relative w-full overflow-hidden rounded-md border",
                            children: B ? b.jsx("img", {
                                src: B,
                                alt: "",
                                className: "block w-full",
                                draggable: !1
                            }) : b.jsx("div", {
                                className: "w-full animate-pulse bg-gray-200",
                                style: {
                                    aspectRatio: ye
                                }
                            })
                        })]
                    }, M)
                }
                )
            }), b.jsxs("div", {
                className: `bg-token-bg-secondary/20 hidden flex-1 flex-col items-center justify-center overflow-hidden sm:flex ${r ? "pb-16" : ""}`,
                children: [i ? b.jsx("div", {
                    className: "flex w-full flex-1 flex-col items-center justify-center overflow-hidden p-6",
                    ref: m,
                    children: b.jsxs("div", {
                        ref: w,
                        className: `border-token-border-light relative flex items-center justify-center overflow-hidden rounded-md border shadow-md ${de ? "visible" : "invisible"}`,
                        children: [b.jsx("canvas", {
                            ref: p,
                            onMouseMove: ee,
                            onMouseLeave: _e,
                            onMouseDown: ie,
                            onMouseUp: ke,
                            onClick: xe,
                            className: "max-h-full max-w-full select-none"
                        }), b.jsx(Gt, {
                            children: x && b.jsx(Mn.div, {
                                ref: D,
                                initial: {
                                    opacity: 0,
                                    scale: .95
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                exit: {
                                    opacity: 0,
                                    scale: .95
                                },
                                transition: {
                                    duration: .15,
                                    ease: "easeOut"
                                },
                                className: "absolute z-50 max-w-[300px] px-1 py-2 text-xs",
                                style: {
                                    left: j?.left ?? 0,
                                    top: j?.top ?? 0
                                },
                                onClick: () => {
                                    N(null),
                                    T(null)
                                }
                                ,
                                children: b.jsx("div", {
                                    className: "bg-token-bg-primary text-token-text-primary truncate rounded-md px-1 py-2 shadow-md",
                                    children: x.url
                                })
                            })
                        })]
                    })
                }) : b.jsx("span", {
                    className: "text-gray-400",
                    children: b.jsx($e, {
                        id: "load-deck-to-begin",
                        defaultMessage: "Load a slide to begin"
                    })
                }), b.jsx(To, {
                    setNotesHeight: le,
                    notesHeight: Ne
                }), b.jsx("div", {
                    className: "text-token-text-primary w-full px-6 pt-3 pb-6 text-sm",
                    style: {
                        height: `${Ne}px`
                    },
                    children: b.jsx(Lo, {
                        slide: i
                    })
                }), !1]
            })]
        })
    })
}
const ct = kn({
    downloadFileError: {
        id: "postSharingModal.downloadFileError",
        defaultMessage: "Failed to download file. Please try again later."
    },
    title: {
        id: "walnut.title",
        defaultMessage: "Preview"
    },
    tooltip: {
        id: "walnut.tooltip",
        defaultMessage: "This is a web preview and may not reflect exact formatting. Download to open in your preferred software for best results."
    }
})
  , Po = ({onClose: e, onPlay: t, extension: n, contentType: r, clientThreadId: s}) => {
    const o = Bt()
      , i = An()
      , l = r === "presentation"
      , {formatMessage: a} = Bt()
      , u = a(ct.title)
      , f = a(ct.tooltip)
      , {focusedWalnutId: d, presentationMap: g} = pt()
      , v = d ? g[d] : void 0
      , y = v?.fileName ?? (r === "presentation" ? "presentation.pptx" : "spreadsheet.xlsx")
      , h = v?.fileBlob
      , p = o.formatMessage(ct.downloadFileError)
      , w = zn(!1, s, d ?? "", () => {}
    , () => {
        i.danger(p, {
            toastId: "post_sharing_modal_download_error",
            loggingTitle: p,
            loggingDescription: "Error message when a file download fails"
        })
    }
    );
    return b.jsxs("div", {
        className: "text-token-text-secondary border-token-border-light relative flex w-full items-center justify-between border-b px-3 py-2",
        children: [b.jsx("div", {
            className: "z-10",
            children: b.jsx(Pn, {
                onClick: e,
                children: b.jsx(On, {})
            })
        }), b.jsxs("div", {
            className: "absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1",
            children: [b.jsx(Fn, {
                fileName: u ?? null
            }), b.jsx("div", {
                className: "text-token-text-primary flex flex-row items-center truncate text-sm font-medium",
                children: b.jsx(Jt, {
                    label: f,
                    theme: "white",
                    defaultOpen: !0,
                    customBackgroundColorClassName: "bg-[#6B91F1]",
                    labelClassName: "text-white font-light",
                    side: "bottom",
                    children: b.jsxs("div", {
                        className: "flex flex-row items-center",
                        children: [u, b.jsx(Tn, {
                            className: "ms-1 size-4"
                        })]
                    })
                })
            }), n && b.jsx("div", {
                className: "text-token-text-tertiary ms-2 text-sm",
                children: n
            })]
        }), b.jsxs("div", {
            className: "z-10 flex items-center gap-1",
            children: [b.jsx(zt, {
                color: "ghost",
                size: "small",
                onClick: async () => {
                    if (h)
                        $n(h, y);
                    else {
                        const {data: m} = await w.refetch();
                        if (m === void 0 || m?.status !== "success") {
                            i.danger(p, {
                                toastId: "post_sharing_modal_download_error",
                                loggingTitle: p,
                                loggingDescription: "Error message when a file download fails"
                            });
                            return
                        }
                        const D = document.createElement("a");
                        D.href = m.download_url,
                        D.click()
                    }
                }
                ,
                children: b.jsx(Wn, {})
            }), l && b.jsx(zt, {
                color: "primary",
                onClick: t,
                size: "small",
                children: b.jsxs("div", {
                    className: "flex items-center gap-1",
                    children: [b.jsx(Hn, {}), b.jsx("span", {
                        className: "hidden sm:block",
                        children: b.jsx($e, {
                            id: "walnut.play",
                            defaultMessage: "Play Slideshow"
                        })
                    })]
                })
            })]
        })]
    })
}
;
function Fo({isOpen: e, onClose: t, clientThreadId: n}) {
    const [r,s] = c.useState(!1)
      , {presentationMap: o, focusedWalnutId: i, setSelectedSlideIdx: l} = pt()
      , a = jn()
      , u = Ln(a, "3245235608")
      , [f,d] = c.useState(!1)
      , g = i ? o[i] : null
      , {presentation: v, fileName: y, workbook: h} = g ?? {};
    if (!i || !g)
        return null;
    const p = v ? "presentation" : h ? "spreadsheet" : "none";
    return b.jsx(In, {
        testId: "modal-walnut-content",
        type: "success",
        size: "fullscreen",
        isOpen: e,
        onClose: t,
        visuallyHiddenHeader: !0,
        children: b.jsxs("div", {
            className: "flex h-full flex-col overflow-hidden",
            children: [b.jsx(Po, {
                onClose: t,
                onPlay: () => s(!r),
                title: y,
                contentType: p,
                clientThreadId: n
            }), v && !r && b.jsx(zo, {
                presentation: v,
                selectedSlideIdx: g.selectedSlideIdx,
                setSelectedSlideIdx: w => l(i, w),
                isWalnutV2Enabled: u,
                isEditing: f,
                setIsEditing: d
            }), h && !v && !r && b.jsx(Yn, {
                workbook: h,
                selectedSheetIdx: g.selectedSheetIdx
            }), r && v && b.jsx(Vn, {
                startIndex: 0,
                onExit: t,
                walnutId: i
            }), !v && !h && !r && b.jsx("div", {
                className: "flex h-full w-full items-center justify-center",
                children: b.jsx($e, {
                    id: "walnut.noFile",
                    defaultMessage: "No file selected."
                })
            })]
        })
    })
}
const Wo = ({clientThreadId: e}) => {
    const {isOpen: t, close: n} = pt()
      , r = t ? b.jsx(Fo, {
        isOpen: t,
        onClose: n,
        clientThreadId: e
    }) : null;
    return b.jsx(Gt, {
        children: r
    }, e)
}
  , Zo = e => {
    const t = c.useRef(null);
    return b.jsx(Bn, {
        ref: t,
        onError: (n, r) => {
            Un(),
            setTimeout( () => {
                t.current?.resetErrorBoundary()
            }
            ),
            Qt.addError(n, {
                componentStack: r
            })
        }
        ,
        name: "walnut-focused-view",
        children: b.jsx(Wo, {
            ...e
        })
    })
}
;
export {Zo as WalnutFocusedViewManager};
//# sourceMappingURL=i88dz9qmvse12xe3.js.map
