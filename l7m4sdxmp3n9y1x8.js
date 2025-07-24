import {gp as rt, gq as ce, gr as x, gs as ot, gt as at, gu as d, gv as l, gw as n, gx as se, gy as ie, gz as lt, gA as nt, gB as ct, gC as st, gD as it, gE as ut, gF as ft, gG as vt, gH as gt, gI as dt, gJ as mt, gK as xe, gL as ht, gM as pt, gN as Ke, gO as bt, gP as Me, gQ as St, gR as f, gS as Tt, gT as Ct, gU as wt, gV as Et, gW as yt} from "./ckp56qklot786ulr.js";
import {r as c, R as S} from "./juy90og0wtbp77qa.js";
function Le(v, t) {
    var g = bt(v);
    if (Me) {
        var m = Me(v);
        t && (m = St(m).call(m, function(p) {
            return Ke(v, p).enumerable
        })),
        g.push.apply(g, m)
    }
    return g
}
function $e(v) {
    for (var t = 1; t < arguments.length; t++) {
        var g = arguments[t] != null ? arguments[t] : {};
        if (t % 2) {
            var m;
            ie(m = Le(Object(g), !0)).call(m, function(h) {
                mt(v, h, g[h])
            })
        } else if (xe)
            ht(v, xe(g));
        else {
            var p;
            ie(p = Le(Object(g))).call(p, function(h) {
                pt(v, h, Ke(g, h))
            })
        }
    }
    return v
}
var Ht = function() {
    return 1 / 0
}
  , De = 17
  , _t = "bottom"
  , C = "top"
  , Ve = 1
  , Bt = 34
  , je = {};
function Nt(v, t) {
    return v(),
    dt(v, t)
}
function Fe(v) {
    var t = v.mode
      , g = v.target
      , m = g.offsetHeight
      , p = g.scrollHeight
      , h = g.scrollTop
      , E = p - h - m < Ve
      , r = h < Ve
      , H = t === C ? r : E
      , M = t !== C ? r : E;
    return {
        atBottom: E,
        atEnd: H,
        atStart: M,
        atTop: r
    }
}
function U(v, t) {
    return v === (t === C ? 0 : "100%")
}
var ue = function(t) {
    var g = t.checkInterval
      , m = t.children
      , p = t.debounce
      , h = t.debug
      , E = t.initialScrollBehavior
      , r = t.mode
      , H = t.nonce
      , M = t.scroller
      , s = c.useMemo(function() {
        return rt("<ScrollToBottom>", {
            force: h
        })
    }, [h]);
    r = r === C ? C : _t;
    var L = c.useRef(0)
      , W = c.useRef(E)
      , We = ce(r === C ? 0 : "100%")
      , Y = x(We, 3)
      , O = Y[0]
      , z = Y[1]
      , $ = Y[2]
      , ze = ce(null)
      , X = x(ze, 3)
      , b = X[0]
      , ve = X[1]
      , w = X[2]
      , Z = c.useRef(0)
      , A = c.useRef(0)
      , q = c.useRef(0)
      , qe = c.useState(!0)
      , ge = x(qe, 2)
      , de = ge[0]
      , me = ge[1]
      , Ge = c.useState(!0)
      , he = x(Ge, 2)
      , pe = he[0]
      , be = he[1]
      , Je = c.useState(!0)
      , Se = x(Je, 2)
      , Te = Se[0]
      , Ce = Se[1]
      , Qe = c.useState(!1)
      , we = x(Qe, 2)
      , Ee = we[0]
      , ye = we[1]
      , Ye = ce(!0)
      , ee = x(Ye, 3)
      , te = ee[0]
      , _ = ee[1]
      , B = ee[2]
      , K = c.useRef([])
      , He = c.useCallback(function(e) {
        var a = w.current;
        return K.current.push(e),
        a && e({
            scrollTop: a.scrollTop
        }),
        function() {
            var o = K.current
              , i = ot(o).call(o, e);
            ~i && at(o).call(o, i, 1)
        }
    }, [K, w])
      , re = c.useCallback(function() {
        var e = $.current;
        s(function() {
            var a;
            return d(a = ["%cSpineTo%c: %conEnd%c is fired."]).call(a, l(n("magenta")), l(n("orange")), [{
                animateTo: e
            }])
        }),
        L.current = se(),
        U(e, r) || _(!1),
        z(null)
    }, [$, s, L, r, z, _])
      , N = c.useCallback(function(e) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , o = a.behavior
          , i = w.current;
        if (typeof e != "number" && e !== "100%")
            return console.warn('react-scroll-to-bottom: Arguments passed to scrollTo() must be either number or "100%".');
        s(function() {
            var u;
            return [d(u = ["%cscrollTo%c: Will scroll to %c".concat(typeof e == "number" ? e + "px" : e.replace(/%/g, "%%"), "%c")]).call(u, l(n("lime", "")), l(n("purple"))), {
                behavior: o,
                nextAnimateTo: e,
                target: i
            }]
        }),
        o === "auto" ? (re(),
        i && (i.scrollTop = e === "100%" ? i.scrollHeight - i.offsetHeight : e)) : (o !== "smooth" && console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollTo". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'),
        z(e)),
        U(e, r) && (s(function() {
            var u;
            return [d(u = ["%cscrollTo%c: Scrolling to end, will set sticky to %ctrue%c."]).call(u, l(n("lime", "")), l(n("purple"))), [{
                mode: r,
                nextAnimateTo: e
            }]]
        }),
        _(!0))
    }, [s, re, r, z, _, w])
      , D = c.useCallback(function() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , a = e.behavior;
        s(function() {
            var o;
            return d(o = ["%cscrollToBottom%c: Called"]).call(o, l(n("yellow", "")))
        }),
        a !== "smooth" && console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToBottom". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'),
        N("100%", {
            behavior: a || "smooth"
        })
    }, [s, N])
      , V = c.useCallback(function() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , a = e.behavior;
        s(function() {
            var o;
            return d(o = ["%cscrollToTop%c: Called"]).call(o, l(n("yellow", "")))
        }),
        a !== "smooth" && console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToTop". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'),
        N(0, {
            behavior: a || "smooth"
        })
    }, [s, N])
      , _e = c.useCallback(function() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , a = e.behavior;
        s(function() {
            var i;
            return d(i = ["%cscrollToEnd%c: Called"]).call(i, l(n("yellow", "")))
        }),
        a !== "smooth" && console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToEnd". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.');
        var o = {
            behavior: a || "smooth"
        };
        r === C ? V(o) : D(o)
    }, [s, r, D, V])
      , Be = c.useCallback(function() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , a = e.behavior;
        s(function() {
            var i;
            return d(i = ["%cscrollToStart%c: Called"]).call(i, l(n("yellow", "")))
        }),
        a !== "smooth" && console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToStart". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.');
        var o = {
            behavior: a || "smooth"
        };
        r === C ? D(o) : V(o)
    }, [s, r, D, V])
      , G = c.useCallback(function() {
        var e = w.current;
        if (e) {
            if (W.current === "auto") {
                s(function() {
                    var I;
                    return d(I = ["%ctarget changed%c: Initial scroll"]).call(I, l(n("blue")))
                }),
                e.scrollTop = r === C ? 0 : e.scrollHeight - e.offsetHeight,
                W.current = !1;
                return
            }
            var a = Z.current, o = e.offsetHeight, i = e.scrollHeight, u = e.scrollTop, y = r === C ? 0 : Math.max(0, i - o - u), P = Math.max(0, a - u), J = M({
                maxValue: y,
                minValue: P,
                offsetHeight: o,
                scrollHeight: i,
                scrollTop: u
            }), R = Math.max(0, Math.min(y, J)), T;
            r === C || R !== y ? T = u + R : T = "100%",
            s(function() {
                var I, j, F;
                return [d(I = [d(j = d(F = "%cscrollToSticky%c: Will animate from %c".concat(a, "px%c to %c")).call(F, typeof T == "number" ? T + "px" : T.replace(/%/g, "%%"), "%c (%c")).call(j, (T === "100%" ? y : T) + a, "px%c)")]).call(I, l(n("orange")), l(n("purple")), l(n("purple")), l(n("purple"))), {
                    animateFrom: a,
                    maxValue: y,
                    minValue: P,
                    nextAnimateTo: T,
                    nextValue: R,
                    offsetHeight: o,
                    rawNextValue: J,
                    scrollHeight: i,
                    scrollTop: u
                }]
            }),
            N(T, {
                behavior: "smooth"
            })
        }
    }, [Z, s, r, M, N, w])
      , Xe = c.useCallback(function(e) {
        var a, o = e.timeStampLow, i = $.current, u = w.current, y = i !== null;
        if (!(o <= L.current || !u)) {
            var P = Fe({
                mode: r,
                target: u
            })
              , J = P.atBottom
              , R = P.atEnd
              , T = P.atStart
              , I = P.atTop;
            me(J),
            be(R),
            ye(T),
            Ce(I);
            var j = u.offsetHeight
              , F = u.scrollHeight
              , Re = A.current
              , Oe = q.current
              , le = j !== Re
              , ne = F !== Oe;
            if (le && (A.current = j),
            ne && (q.current = F),
            !le && !ne) {
                var Q = y && U(i, r) || R;
                B.current !== Q && (s(function() {
                    var k, Pe, Ie, ke;
                    return [d(k = ["%conScroll%c: %csetSticky%c(%c".concat(Q, "%c)")]).call(k, l(n("red")), l(n("red")), l(n("purple"))), d(Pe = [d(Ie = d(ke = "(animating = %c".concat(y, "%c && isEnd = %c")).call(ke, U(i, r), "%c) || atEnd = %c")).call(Ie, R, "%c")]).call(Pe, l(n("purple")), l(n("purple")), l(n("purple")), [{
                        animating: y,
                        animateTo: i,
                        atEnd: R,
                        mode: r,
                        offsetHeight: u.offsetHeight,
                        scrollHeight: u.scrollHeight,
                        sticky: B.current,
                        nextSticky: Q
                    }])]
                }),
                _(Q))
            } else
                B.current && (s(function() {
                    var k;
                    return [d(k = ["%conScroll%c: Size changed while sticky, calling %cscrollToSticky()%c"]).call(k, l(n("red")), l(n("orange")), [{
                        offsetHeightChanged: le,
                        scrollHeightChanged: ne
                    }]), {
                        nextOffsetHeight: j,
                        prevOffsetHeight: Re,
                        nextScrollHeight: F,
                        prevScrollHeight: Oe
                    }]
                }),
                G());
            var tt = u.scrollTop;
            ie(a = K.current).call(a, function(k) {
                return k({
                    scrollTop: tt
                })
            })
        }
    }, [$, s, L, r, A, q, K, G, me, be, ye, Ce, _, B, w]);
    c.useEffect(function() {
        if (b) {
            var e = !1
              , a = Nt(function() {
                var o = w.current
                  , i = $.current !== null;
                B.current ? Fe({
                    mode: r,
                    target: o
                }).atEnd ? e = !1 : e ? se() - e > Bt && (i || (Z.current = o.scrollTop,
                s(function() {
                    var u;
                    return d(u = ["%cInterval check%c: Should sticky but not at end, calling %cscrollToSticky()%c to scroll"]).call(u, l(n("navy")), l(n("orange")))
                }),
                G()),
                e = !1) : e = se() : o.scrollHeight <= o.offsetHeight && !B.current && (s(function() {
                    var u;
                    return [d(u = ["%cInterval check%c: Container is emptied, setting sticky back to %ctrue%c"]).call(u, l(n("navy")), l(n("purple"))), [{
                        offsetHeight: o.offsetHeight,
                        scrollHeight: o.scrollHeight,
                        sticky: B.current
                    }]]
                }),
                _(!0))
            }, Math.max(De, g) || De);
            return function() {
                return clearInterval(a)
            }
        }
    }, [$, g, s, r, G, _, B, b, w]);
    var Ne = c.useMemo(function() {
        var e = je[H] || (je[H] = lt({
            key: "react-scroll-to-bottom--css-" + nt(),
            nonce: H
        }));
        return function(a) {
            return e.css(a) + ""
        }
    }, [H])
      , Ze = c.useMemo(function() {
        return {
            observeScrollPosition: He,
            setTarget: ve,
            styleToClassName: Ne
        }
    }, [He, ve, Ne])
      , oe = c.useMemo(function() {
        return {
            atBottom: de,
            atEnd: pe,
            atStart: Ee,
            atTop: Te,
            mode: r
        }
    }, [de, pe, Ee, Te, r])
      , ae = c.useMemo(function() {
        var e = O !== null;
        return {
            animating: e,
            animatingToEnd: e && U(O, r),
            sticky: te
        }
    }, [O, r, te])
      , Ae = c.useMemo(function() {
        return $e($e({}, oe), ae)
    }, [oe, ae])
      , et = c.useMemo(function() {
        return {
            scrollTo: N,
            scrollToBottom: D,
            scrollToEnd: _e,
            scrollToStart: Be,
            scrollToTop: V
        }
    }, [N, D, _e, Be, V]);
    return c.useEffect(function() {
        if (b) {
            var e = function() {
                q.current = b.scrollHeight
            };
            return b.addEventListener("focus", e, {
                capture: !0,
                passive: !0
            }),
            function() {
                return b.removeEventListener("focus", e)
            }
        }
    }, [b]),
    s(function() {
        var e;
        return [d(e = ["%cRender%c: Render"]).call(e, l(n("cyan", ""))), {
            animateTo: O,
            animating: O !== null,
            sticky: te,
            target: b
        }]
    }),
    S.createElement(ct.Provider, {
        value: Ze
    }, S.createElement(st.Provider, {
        value: et
    }, S.createElement(it.Provider, {
        value: Ae
    }, S.createElement(ut.Provider, {
        value: oe
    }, S.createElement(ft.Provider, {
        value: ae
    }, m, b && S.createElement(vt, {
        debounce: p,
        name: "scroll",
        onEvent: Xe,
        target: b
    }), b && O !== null && S.createElement(gt, {
        name: "scrollTop",
        onEnd: re,
        target: b,
        value: O
    }))))))
};
ue.defaultProps = {
    checkInterval: 100,
    children: void 0,
    debounce: 17,
    debug: void 0,
    initialScrollBehavior: "smooth",
    mode: void 0,
    nonce: void 0,
    scroller: Ht
};
ue.propTypes = {
    checkInterval: f.number,
    children: f.any,
    debounce: f.number,
    debug: f.bool,
    initialScrollBehavior: f.oneOf(["auto", "smooth"]),
    mode: f.oneOf(["bottom", "top"]),
    nonce: f.string,
    scroller: f.func
};
var Rt = {
    position: "relative"
}
  , fe = function(t) {
    var g = t.children
      , m = t.className
      , p = t.followButtonClassName
      , h = t.scrollViewClassName
      , E = Tt()(Rt);
    return S.createElement("div", {
        className: Ct(E, (m || "") + "")
    }, S.createElement(wt, {
        className: (h || "") + ""
    }, g), S.createElement(Et, {
        className: (p || "") + ""
    }))
};
fe.defaultProps = {
    children: void 0,
    className: void 0,
    followButtonClassName: void 0,
    scrollViewClassName: void 0
};
fe.propTypes = {
    children: f.any,
    className: f.string,
    followButtonClassName: f.string,
    scrollViewClassName: f.string
};
var Ue = function(t) {
    var g = t.checkInterval
      , m = t.children
      , p = t.className
      , h = t.debounce
      , E = t.debug
      , r = t.followButtonClassName
      , H = t.initialScrollBehavior
      , M = t.mode
      , s = t.nonce
      , L = t.scroller
      , W = t.scrollViewClassName;
    return S.createElement(ue, {
        checkInterval: g,
        debounce: h,
        debug: E,
        initialScrollBehavior: H,
        mode: M,
        nonce: s,
        scroller: L
    }, S.createElement(fe, {
        className: p,
        followButtonClassName: r,
        scrollViewClassName: W
    }, m))
};
Ue.defaultProps = {
    checkInterval: void 0,
    children: void 0,
    className: void 0,
    debounce: void 0,
    debug: void 0,
    followButtonClassName: void 0,
    initialScrollBehavior: "smooth",
    mode: void 0,
    nonce: void 0,
    scroller: void 0,
    scrollViewClassName: void 0
};
Ue.propTypes = {
    checkInterval: f.number,
    children: f.any,
    className: f.string,
    debounce: f.number,
    debug: f.bool,
    followButtonClassName: f.string,
    initialScrollBehavior: f.oneOf(["auto", "smooth"]),
    mode: f.oneOf(["bottom", "top"]),
    nonce: f.string,
    scroller: f.func,
    scrollViewClassName: f.string
};
yt();
export {Ue as B};
//# sourceMappingURL=l7m4sdxmp3n9y1x8.js.map
