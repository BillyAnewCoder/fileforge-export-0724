import {l1 as k, l2 as A} from "./dc2xxjkicf2pz0mj.js";
import {r as d} from "./juy90og0wtbp77qa.js";
import {i as I} from "./nc631yunytu8n0fx.js";
var B = function(e) {
    var t = d.useRef(e);
    return I(function() {
        t.current = e
    }),
    t
}
  , L = function(e, t) {
    if (typeof e == "function") {
        e(t);
        return
    }
    e.current = t
}
  , M = function(e, t) {
    var r = d.useRef();
    return d.useCallback(function(i) {
        e.current = i,
        r.current && L(r.current, null),
        r.current = t,
        t && L(t, i)
    }, [t])
}
  , R = {
    "min-height": "0",
    "max-height": "none",
    height: "0",
    visibility: "hidden",
    overflow: "hidden",
    position: "absolute",
    "z-index": "-1000",
    top: "0",
    right: "0"
}
  , N = function(e) {
    Object.keys(R).forEach(function(t) {
        e.style.setProperty(t, R[t], "important")
    })
}
  , H = N
  , o = null
  , C = function(e, t) {
    var r = e.scrollHeight;
    return t.sizingStyle.boxSizing === "border-box" ? r + t.borderSize : r - t.paddingSize
};
function $(n, e, t, r) {
    t === void 0 && (t = 1),
    r === void 0 && (r = 1 / 0),
    o || (o = document.createElement("textarea"),
    o.setAttribute("tabindex", "-1"),
    o.setAttribute("aria-hidden", "true"),
    H(o)),
    o.parentNode === null && document.body.appendChild(o);
    var i = n.paddingSize
      , s = n.borderSize
      , a = n.sizingStyle
      , g = a.boxSizing;
    Object.keys(a).forEach(function(v) {
        var p = v;
        o.style[p] = a[p]
    }),
    H(o),
    o.value = e;
    var u = C(o, n);
    o.value = e,
    u = C(o, n),
    o.value = "x";
    var l = o.scrollHeight - i
      , h = l * t;
    g === "border-box" && (h = h + i + s),
    u = Math.max(h, u);
    var c = l * r;
    return g === "border-box" && (c = c + i + s),
    u = Math.min(c, u),
    [u, l]
}
var w = function() {}
  , _ = function(e, t) {
    return e.reduce(function(r, i) {
        return r[i] = t[i],
        r
    }, {})
}
  , j = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "tabSize", "textIndent", "textRendering", "textTransform", "width", "wordBreak"]
  , P = !!document.documentElement.currentStyle
  , O = function(e) {
    var t = window.getComputedStyle(e);
    if (t === null)
        return null;
    var r = _(j, t)
      , i = r.boxSizing;
    if (i === "")
        return null;
    P && i === "border-box" && (r.width = parseFloat(r.width) + parseFloat(r.borderRightWidth) + parseFloat(r.borderLeftWidth) + parseFloat(r.paddingRight) + parseFloat(r.paddingLeft) + "px");
    var s = parseFloat(r.paddingBottom) + parseFloat(r.paddingTop)
      , a = parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth);
    return {
        sizingStyle: r,
        paddingSize: s,
        borderSize: a
    }
}
  , Y = O;
function E(n, e, t) {
    var r = B(t);
    d.useLayoutEffect(function() {
        var i = function(a) {
            return r.current(a)
        };
        if (n)
            return n.addEventListener(e, i),
            function() {
                return n.removeEventListener(e, i)
            }
    }, [])
}
var G = function(e) {
    E(window, "resize", e)
}
  , U = function(e) {
    E(document.fonts, "loadingdone", e)
}
  , X = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"]
  , Z = function(e, t) {
    var r = e.cacheMeasurements
      , i = e.maxRows
      , s = e.minRows
      , a = e.onChange
      , g = a === void 0 ? w : a
      , u = e.onHeightChange
      , l = u === void 0 ? w : u
      , h = k(e, X)
      , c = h.value !== void 0
      , v = d.useRef(null)
      , p = M(v, t)
      , z = d.useRef(0)
      , S = d.useRef()
      , b = function() {
        var f = v.current
          , x = r && S.current ? S.current : Y(f);
        if (x) {
            S.current = x;
            var y = $(x, f.value || f.placeholder || "x", s, i)
              , m = y[0]
              , W = y[1];
            z.current !== m && (z.current = m,
            f.style.setProperty("height", m + "px", "important"),
            l(m, {
                rowHeight: W
            }))
        }
    }
      , T = function(f) {
        c || b(),
        g(f)
    };
    return d.useLayoutEffect(b),
    G(b),
    U(b),
    d.createElement("textarea", A({}, h, {
        onChange: T,
        ref: p
    }))
}
  , K = d.forwardRef(Z);
export {K as i};
//# sourceMappingURL=pbd6thieshvvjfa0.js.map
