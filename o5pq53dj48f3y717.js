import {g as D} from "./juy90og0wtbp77qa.js";
import {H as G, G as H, aM as P, aN as w, lD as J, lE as V, x as W, hU as X, j8 as Y, aC as Z} from "./dc2xxjkicf2pz0mj.js";
import {lW as M, lX as $, lY as B} from "./ckp56qklot786ulr.js";
var I, C;
function K() {
    if (C)
        return I;
    C = 1;
    var r = G()
      , a = H()
      , t = "[object RegExp]";
    function f(i) {
        return a(i) && r(i) == t
    }
    return I = f,
    I
}
var z, y;
function Q() {
    if (y)
        return z;
    y = 1;
    var r = K()
      , a = P()
      , t = w()
      , f = t && t.isRegExp
      , i = f ? a(f) : r;
    return z = i,
    z
}
var T, A;
function ee() {
    if (A)
        return T;
    A = 1;
    var r = J()
      , a = r("length");
    return T = a,
    T
}
var m, k;
function re() {
    if (k)
        return m;
    k = 1;
    var r = "\\ud800-\\udfff"
      , a = "\\u0300-\\u036f"
      , t = "\\ufe20-\\ufe2f"
      , f = "\\u20d0-\\u20ff"
      , i = a + t + f
      , S = "\\ufe0e\\ufe0f"
      , h = "[" + r + "]"
      , v = "[" + i + "]"
      , l = "\\ud83c[\\udffb-\\udfff]"
      , E = "(?:" + v + "|" + l + ")"
      , R = "[^" + r + "]"
      , b = "(?:\\ud83c[\\udde6-\\uddff]){2}"
      , _ = "[\\ud800-\\udbff][\\udc00-\\udfff]"
      , n = "\\u200d"
      , o = E + "?"
      , d = "[" + S + "]?"
      , c = "(?:" + n + "(?:" + [R, b, _].join("|") + ")" + d + o + ")*"
      , e = d + o + c
      , q = "(?:" + [R + v + "?", v, b, _, h].join("|") + ")"
      , g = RegExp(l + "(?=" + l + ")|" + q + e, "g");
    function u(s) {
        for (var x = g.lastIndex = 0; g.test(s); )
            ++x;
        return x
    }
    return m = u,
    m
}
var p, F;
function ie() {
    if (F)
        return p;
    F = 1;
    var r = ee()
      , a = M()
      , t = re();
    function f(i) {
        return a(i) ? t(i) : r(i)
    }
    return p = f,
    p
}
var U, L;
function ae() {
    if (L)
        return U;
    L = 1;
    var r = V()
      , a = $()
      , t = M()
      , f = W()
      , i = Q()
      , S = ie()
      , h = B()
      , v = X()
      , l = Y()
      , E = 30
      , R = "..."
      , b = /\w*$/;
    function _(n, o) {
        var d = E
          , c = R;
        if (f(o)) {
            var e = "separator"in o ? o.separator : e;
            d = "length"in o ? v(o.length) : d,
            c = "omission"in o ? r(o.omission) : c
        }
        n = l(n);
        var q = n.length;
        if (t(n)) {
            var g = h(n);
            q = g.length
        }
        if (d >= q)
            return n;
        var u = d - S(c);
        if (u < 1)
            return c;
        var s = g ? a(g, 0, u).join("") : n.slice(0, u);
        if (e === void 0)
            return s + c;
        if (g && (u += s.length - u),
        i(e)) {
            if (n.slice(u).search(e)) {
                var x, N = s;
                for (e.global || (e = RegExp(e.source, l(b.exec(e)) + "g")),
                e.lastIndex = 0; x = e.exec(N); )
                    var j = x.index;
                s = s.slice(0, j === void 0 ? u : j)
            }
        } else if (n.indexOf(r(e), u) != u) {
            var O = s.lastIndexOf(e);
            O > -1 && (s = s.slice(0, O))
        }
        return s + c
    }
    return U = _,
    U
}
var ne = ae();
const fe = D(ne);
Z.div`flex h-full items-center justify-center pb-8 text-sm text-token-text-tertiary rounded-lg border border-token-border-default`;
export {fe as t};
//# sourceMappingURL=o5pq53dj48f3y717.js.map
