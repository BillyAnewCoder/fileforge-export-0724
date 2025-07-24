import {r as _, R as st, j as C} from "./juy90og0wtbp77qa.js";
import {e as E, b6 as V, kZ as lt, k_ as at, k as G, hr as ct, k$ as Y, ku as Z, l0 as ut} from "./dc2xxjkicf2pz0mj.js";
import {gh as dt, gi as ht, gj as B, gk as k, S as O} from "./ckp56qklot786ulr.js";
var mt = typeof performance == "object" && typeof performance.now == "function"
  , A = mt ? function() {
    return performance.now()
}
: function() {
    return Date.now()
}
;
function $(r) {
    cancelAnimationFrame(r.id)
}
function ft(r, e) {
    var o = A();
    function s() {
        A() - o >= e ? r.call(null) : a.id = requestAnimationFrame(s)
    }
    var a = {
        id: requestAnimationFrame(s)
    };
    return a
}
var L = -1;
function q(r) {
    if (r === void 0 && (r = !1),
    L === -1 || r) {
        var e = document.createElement("div")
          , o = e.style;
        o.width = "50px",
        o.height = "50px",
        o.overflow = "scroll",
        document.body.appendChild(e),
        L = e.offsetWidth - e.clientWidth,
        document.body.removeChild(e)
    }
    return L
}
var R = null;
function H(r) {
    if (r === void 0 && (r = !1),
    R === null || r) {
        var e = document.createElement("div")
          , o = e.style;
        o.width = "50px",
        o.height = "50px",
        o.overflow = "scroll",
        o.direction = "rtl";
        var s = document.createElement("div")
          , a = s.style;
        return a.width = "100px",
        a.height = "100px",
        e.appendChild(s),
        document.body.appendChild(e),
        e.scrollLeft > 0 ? R = "positive-descending" : (e.scrollLeft = 1,
        e.scrollLeft === 0 ? R = "negative" : R = "positive-ascending"),
        document.body.removeChild(e),
        R
    }
    return R
}
var pt = 150
  , gt = function(e, o) {
    return e
};
function St(r) {
    var e, o = r.getItemOffset, s = r.getEstimatedTotalSize, a = r.getItemSize, g = r.getOffsetForIndexAndAlignment, S = r.getStartIndexForOffset, m = r.getStopIndexForStartIndex, I = r.initInstanceProps, v = r.shouldResetStyleCacheOnItemSizeChange, T = r.validateProps;
    return e = function(x) {
        dt(w, x);
        function w(p) {
            var t;
            return t = x.call(this, p) || this,
            t._instanceProps = I(t.props, B(t)),
            t._outerRef = void 0,
            t._resetIsScrollingTimeoutId = null,
            t.state = {
                instance: B(t),
                isScrolling: !1,
                scrollDirection: "forward",
                scrollOffset: typeof t.props.initialScrollOffset == "number" ? t.props.initialScrollOffset : 0,
                scrollUpdateWasRequested: !1
            },
            t._callOnItemsRendered = void 0,
            t._callOnItemsRendered = k(function(i, n, l, u) {
                return t.props.onItemsRendered({
                    overscanStartIndex: i,
                    overscanStopIndex: n,
                    visibleStartIndex: l,
                    visibleStopIndex: u
                })
            }),
            t._callOnScroll = void 0,
            t._callOnScroll = k(function(i, n, l) {
                return t.props.onScroll({
                    scrollDirection: i,
                    scrollOffset: n,
                    scrollUpdateWasRequested: l
                })
            }),
            t._getItemStyle = void 0,
            t._getItemStyle = function(i) {
                var n = t.props, l = n.direction, u = n.itemSize, h = n.layout, c = t._getItemStyleCache(v && u, v && h, v && l), d;
                if (c.hasOwnProperty(i))
                    d = c[i];
                else {
                    var f = o(t.props, i, t._instanceProps)
                      , b = a(t.props, i, t._instanceProps)
                      , z = l === "horizontal" || h === "horizontal"
                      , D = l === "rtl"
                      , M = z ? f : 0;
                    c[i] = d = {
                        position: "absolute",
                        left: D ? void 0 : M,
                        right: D ? M : void 0,
                        top: z ? 0 : f,
                        height: z ? "100%" : b,
                        width: z ? b : "100%"
                    }
                }
                return d
            }
            ,
            t._getItemStyleCache = void 0,
            t._getItemStyleCache = k(function(i, n, l) {
                return {}
            }),
            t._onScrollHorizontal = function(i) {
                var n = i.currentTarget
                  , l = n.clientWidth
                  , u = n.scrollLeft
                  , h = n.scrollWidth;
                t.setState(function(c) {
                    if (c.scrollOffset === u)
                        return null;
                    var d = t.props.direction
                      , f = u;
                    if (d === "rtl")
                        switch (H()) {
                        case "negative":
                            f = -u;
                            break;
                        case "positive-descending":
                            f = h - l - u;
                            break
                        }
                    return f = Math.max(0, Math.min(f, h - l)),
                    {
                        isScrolling: !0,
                        scrollDirection: c.scrollOffset < f ? "forward" : "backward",
                        scrollOffset: f,
                        scrollUpdateWasRequested: !1
                    }
                }, t._resetIsScrollingDebounced)
            }
            ,
            t._onScrollVertical = function(i) {
                var n = i.currentTarget
                  , l = n.clientHeight
                  , u = n.scrollHeight
                  , h = n.scrollTop;
                t.setState(function(c) {
                    if (c.scrollOffset === h)
                        return null;
                    var d = Math.max(0, Math.min(h, u - l));
                    return {
                        isScrolling: !0,
                        scrollDirection: c.scrollOffset < d ? "forward" : "backward",
                        scrollOffset: d,
                        scrollUpdateWasRequested: !1
                    }
                }, t._resetIsScrollingDebounced)
            }
            ,
            t._outerRefSetter = function(i) {
                var n = t.props.outerRef;
                t._outerRef = i,
                typeof n == "function" ? n(i) : n != null && typeof n == "object" && n.hasOwnProperty("current") && (n.current = i)
            }
            ,
            t._resetIsScrollingDebounced = function() {
                t._resetIsScrollingTimeoutId !== null && $(t._resetIsScrollingTimeoutId),
                t._resetIsScrollingTimeoutId = ft(t._resetIsScrolling, pt)
            }
            ,
            t._resetIsScrolling = function() {
                t._resetIsScrollingTimeoutId = null,
                t.setState({
                    isScrolling: !1
                }, function() {
                    t._getItemStyleCache(-1, null)
                })
            }
            ,
            t
        }
        w.getDerivedStateFromProps = function(t, i) {
            return vt(t, i),
            T(t),
            null
        }
        ;
        var y = w.prototype;
        return y.scrollTo = function(t) {
            t = Math.max(0, t),
            this.setState(function(i) {
                return i.scrollOffset === t ? null : {
                    scrollDirection: i.scrollOffset < t ? "forward" : "backward",
                    scrollOffset: t,
                    scrollUpdateWasRequested: !0
                }
            }, this._resetIsScrollingDebounced)
        }
        ,
        y.scrollToItem = function(t, i) {
            i === void 0 && (i = "auto");
            var n = this.props
              , l = n.itemCount
              , u = n.layout
              , h = this.state.scrollOffset;
            t = Math.max(0, Math.min(t, l - 1));
            var c = 0;
            if (this._outerRef) {
                var d = this._outerRef;
                u === "vertical" ? c = d.scrollWidth > d.clientWidth ? q() : 0 : c = d.scrollHeight > d.clientHeight ? q() : 0
            }
            this.scrollTo(g(this.props, t, i, h, this._instanceProps, c))
        }
        ,
        y.componentDidMount = function() {
            var t = this.props
              , i = t.direction
              , n = t.initialScrollOffset
              , l = t.layout;
            if (typeof n == "number" && this._outerRef != null) {
                var u = this._outerRef;
                i === "horizontal" || l === "horizontal" ? u.scrollLeft = n : u.scrollTop = n
            }
            this._callPropsCallbacks()
        }
        ,
        y.componentDidUpdate = function() {
            var t = this.props
              , i = t.direction
              , n = t.layout
              , l = this.state
              , u = l.scrollOffset
              , h = l.scrollUpdateWasRequested;
            if (h && this._outerRef != null) {
                var c = this._outerRef;
                if (i === "horizontal" || n === "horizontal")
                    if (i === "rtl")
                        switch (H()) {
                        case "negative":
                            c.scrollLeft = -u;
                            break;
                        case "positive-ascending":
                            c.scrollLeft = u;
                            break;
                        default:
                            var d = c.clientWidth
                              , f = c.scrollWidth;
                            c.scrollLeft = f - d - u;
                            break
                        }
                    else
                        c.scrollLeft = u;
                else
                    c.scrollTop = u
            }
            this._callPropsCallbacks()
        }
        ,
        y.componentWillUnmount = function() {
            this._resetIsScrollingTimeoutId !== null && $(this._resetIsScrollingTimeoutId)
        }
        ,
        y.render = function() {
            var t = this.props
              , i = t.children
              , n = t.className
              , l = t.direction
              , u = t.height
              , h = t.innerRef
              , c = t.innerElementType
              , d = t.innerTagName
              , f = t.itemCount
              , b = t.itemData
              , z = t.itemKey
              , D = z === void 0 ? gt : z
              , M = t.layout
              , Q = t.outerElementType
              , X = t.outerTagName
              , tt = t.style
              , et = t.useIsScrolling
              , rt = t.width
              , W = this.state.isScrolling
              , F = l === "horizontal" || M === "horizontal"
              , it = F ? this._onScrollHorizontal : this._onScrollVertical
              , N = this._getRangeToRender()
              , nt = N[0]
              , ot = N[1]
              , U = [];
            if (f > 0)
                for (var P = nt; P <= ot; P++)
                    U.push(_.createElement(i, {
                        data: b,
                        key: D(P, b),
                        index: P,
                        isScrolling: et ? W : void 0,
                        style: this._getItemStyle(P)
                    }));
            var j = s(this.props, this._instanceProps);
            return _.createElement(Q || X || "div", {
                className: n,
                onScroll: it,
                ref: this._outerRefSetter,
                style: ht({
                    position: "relative",
                    height: u,
                    width: rt,
                    overflow: "auto",
                    WebkitOverflowScrolling: "touch",
                    willChange: "transform",
                    direction: l
                }, tt)
            }, _.createElement(c || d || "div", {
                children: U,
                ref: h,
                style: {
                    height: F ? "100%" : j,
                    pointerEvents: W ? "none" : void 0,
                    width: F ? j : "100%"
                }
            }))
        }
        ,
        y._callPropsCallbacks = function() {
            if (typeof this.props.onItemsRendered == "function") {
                var t = this.props.itemCount;
                if (t > 0) {
                    var i = this._getRangeToRender()
                      , n = i[0]
                      , l = i[1]
                      , u = i[2]
                      , h = i[3];
                    this._callOnItemsRendered(n, l, u, h)
                }
            }
            if (typeof this.props.onScroll == "function") {
                var c = this.state
                  , d = c.scrollDirection
                  , f = c.scrollOffset
                  , b = c.scrollUpdateWasRequested;
                this._callOnScroll(d, f, b)
            }
        }
        ,
        y._getRangeToRender = function() {
            var t = this.props
              , i = t.itemCount
              , n = t.overscanCount
              , l = this.state
              , u = l.isScrolling
              , h = l.scrollDirection
              , c = l.scrollOffset;
            if (i === 0)
                return [0, 0, 0, 0];
            var d = S(this.props, c, this._instanceProps)
              , f = m(this.props, d, c, this._instanceProps)
              , b = !u || h === "backward" ? Math.max(1, n) : 1
              , z = !u || h === "forward" ? Math.max(1, n) : 1;
            return [Math.max(0, d - b), Math.max(0, Math.min(i - 1, f + z)), d, f]
        }
        ,
        w
    }(_.PureComponent),
    e.defaultProps = {
        direction: "ltr",
        itemData: void 0,
        layout: "vertical",
        overscanCount: 2,
        useIsScrolling: !1
    },
    e
}
var vt = function(e, o) {
    e.children,
    e.direction,
    e.height,
    e.layout,
    e.innerTagName,
    e.outerTagName,
    e.width,
    o.instance
}
  , yt = St({
    getItemOffset: function(e, o) {
        var s = e.itemSize;
        return o * s
    },
    getItemSize: function(e, o) {
        var s = e.itemSize;
        return s
    },
    getEstimatedTotalSize: function(e) {
        var o = e.itemCount
          , s = e.itemSize;
        return s * o
    },
    getOffsetForIndexAndAlignment: function(e, o, s, a, g, S) {
        var m = e.direction
          , I = e.height
          , v = e.itemCount
          , T = e.itemSize
          , x = e.layout
          , w = e.width
          , y = m === "horizontal" || x === "horizontal"
          , p = y ? w : I
          , t = Math.max(0, v * T - p)
          , i = Math.min(t, o * T)
          , n = Math.max(0, o * T - p + T + S);
        switch (s === "smart" && (a >= n - p && a <= i + p ? s = "auto" : s = "center"),
        s) {
        case "start":
            return i;
        case "end":
            return n;
        case "center":
            {
                var l = Math.round(n + (i - n) / 2);
                return l < Math.ceil(p / 2) ? 0 : l > t + Math.floor(p / 2) ? t : l
            }
        case "auto":
        default:
            return a >= n && a <= i ? a : a < n ? n : i
        }
    },
    getStartIndexForOffset: function(e, o) {
        var s = e.itemCount
          , a = e.itemSize;
        return Math.max(0, Math.min(s - 1, Math.floor(o / a)))
    },
    getStopIndexForStartIndex: function(e, o, s) {
        var a = e.direction
          , g = e.height
          , S = e.itemCount
          , m = e.itemSize
          , I = e.layout
          , v = e.width
          , T = a === "horizontal" || I === "horizontal"
          , x = o * m
          , w = T ? v : g
          , y = Math.ceil((w + s - x) / m);
        return Math.max(0, Math.min(S - 1, o + y - 1))
    },
    initInstanceProps: function(e) {},
    shouldResetStyleCacheOnItemSizeChange: !0,
    validateProps: function(e) {
        e.itemSize
    }
});
function It({onChange: r, value: e}) {
    const o = E()
      , s = V(o)
      , a = _.useMemo( () => lt(s.locale), [s.locale])
      , g = _.useMemo( () => at.filter(m => m !== e), [e])
      , S = 480;
    return C.jsx("div", {
        children: C.jsxs(O.Root, {
            value: e,
            onValueChange: r,
            children: [C.jsxs(O.Trigger, {
                children: [C.jsx(O.Value, {}), C.jsx(O.Icon, {})]
            }), C.jsx(O.Portal, {
                children: C.jsxs(O.Content, {
                    position: "popper",
                    style: {
                        maxHeight: S,
                        width: 200
                    },
                    children: [C.jsx(O.Item, {
                        value: e,
                        children: a(e)
                    }), C.jsx(O.Separator, {}), C.jsx(yt, {
                        className: "no-scrollbar",
                        height: S - 80,
                        itemCount: g.length,
                        itemSize: 50,
                        layout: "vertical",
                        width: "100%",
                        overscanCount: 20,
                        itemKey: m => g[m],
                        children: ({index: m, style: I}) => {
                            const v = g[m];
                            return C.jsx(O.Item, {
                                value: v,
                                style: I,
                                children: a(v)
                            })
                        }
                    })]
                })
            })]
        })
    })
}
const zt = st.memo(It)
  , Ct = new Map([[ut, "is_pricing_enabled_for_inr"]]);
function Ot(r, e) {
    const o = E()
      , a = G(o, "3768341700").get("is_country_selector_enabled", !1)
      , g = a
      , S = ct();
    let m = "";
    "userCountry"in S && (m = S.userCountry);
    const I = Y({
        country: m,
        shouldUseDefaultCountryCode: !g
    });
    let v = {
        country: I,
        currency: Z(I, J(o))
    };
    if (r?.hasPaidSubscription() && e) {
        const x = r?.mustGetSubscriptionBillingCurrency("AccountPaymentModal");
        x && (v = {
            currency: x
        })
    }
    return {
        userCountry: m,
        isCountrySelectorEnabled: g,
        countryWithFallback: I,
        initialBillingDetails: v
    }
}
function wt({country: r, currentAccount: e, location: o, shouldUsePaidSubscriptionBillingCurrency: s=!0}) {
    const a = E()
      , g = _.useMemo( () => J(a), [a])
      , [S,m] = _.useState( () => K({
        country: r,
        currentAccount: e,
        location: o,
        shouldUsePaidSubscriptionBillingCurrency: s,
        pricingRolloutCountries: g
    }));
    return _.useEffect( () => {
        m(K({
            country: r,
            currentAccount: e,
            location: o,
            shouldUsePaidSubscriptionBillingCurrency: s,
            pricingRolloutCountries: g
        }))
    }
    , [r, e, o, s, g]),
    S
}
function Rt() {
    const r = E()
      , e = V(r)
      , o = "userCountry"in e ? e.userCountry : null
      , [s,a] = _.useState(Y({
        country: o,
        shouldUseDefaultCountryCode: !1
    }));
    return {
        country: s,
        setCountry: a,
        userCountry: o
    }
}
function K({country: r, currentAccount: e, location: o, shouldUsePaidSubscriptionBillingCurrency: s, pricingRolloutCountries: a}) {
    return e.hasPaidSubscription() && s ? {
        currency: e.mustGetSubscriptionBillingCurrency(o)
    } : _t(r, a ?? [])
}
function _t(r, e) {
    return {
        country: r,
        currency: Z(r, e)
    }
}
function J(r) {
    const e = G(r, "3768341700")
      , o = [];
    for (const [s,a] of Ct)
        e.get(a, !1) && o.push(s);
    return o
}
export {zt as M, Rt as a, wt as b, Ot as u};
//# sourceMappingURL=nqj34k5dky4x5suq.js.map
