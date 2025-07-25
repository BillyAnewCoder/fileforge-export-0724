var F, p, T, z, S, G = -1, v = function(t) {
    addEventListener("pageshow", function(e) {
        e.persisted && (G = e.timeStamp,
        t(e))
    }, !0)
}, M = function() {
    var t = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
    if (t && t.responseStart > 0 && t.responseStart < performance.now())
        return t
}, w = function() {
    var t = M();
    return t && t.activationStart || 0
}, s = function(t, e) {
    var r = M()
      , i = "navigate";
    return G >= 0 ? i = "back-forward-cache" : r && (document.prerendering || w() > 0 ? i = "prerender" : document.wasDiscarded ? i = "restore" : r.type && (i = r.type.replace(/_/g, "-"))),
    {
        name: t,
        value: e === void 0 ? -1 : e,
        rating: "good",
        delta: 0,
        entries: [],
        id: "v4-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
        navigationType: i
    }
}, h = function(t, e, r) {
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(t)) {
            var i = new PerformanceObserver(function(n) {
                Promise.resolve().then(function() {
                    e(n.getEntries())
                })
            }
            );
            return i.observe(Object.assign({
                type: t,
                buffered: !0
            }, r || {})),
            i
        }
    } catch {}
}, f = function(t, e, r, i) {
    var n, a;
    return function(u) {
        e.value >= 0 && (u || i) && ((a = e.value - (n || 0)) || n === void 0) && (n = e.value,
        e.delta = a,
        e.rating = function(c, o) {
            return c > o[1] ? "poor" : c > o[0] ? "needs-improvement" : "good"
        }(e.value, r),
        t(e))
    }
}, k = function(t) {
    requestAnimationFrame(function() {
        return requestAnimationFrame(function() {
            return t()
        })
    })
}, y = function(t) {
    document.addEventListener("visibilitychange", function() {
        document.visibilityState === "hidden" && t()
    })
}, I = function(t) {
    var e = !1;
    return function() {
        e || (t(),
        e = !0)
    }
}, m = -1, B = function() {
    return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0
}, b = function(t) {
    document.visibilityState === "hidden" && m > -1 && (m = t.type === "visibilitychange" ? t.timeStamp : 0,
    Z())
}, x = function() {
    addEventListener("visibilitychange", b, !0),
    addEventListener("prerenderingchange", b, !0)
}, Z = function() {
    removeEventListener("visibilitychange", b, !0),
    removeEventListener("prerenderingchange", b, !0)
}, D = function() {
    return m < 0 && (m = B(),
    x(),
    v(function() {
        setTimeout(function() {
            m = B(),
            x()
        }, 0)
    })),
    {
        get firstHiddenTime() {
            return m
        }
    }
}, E = function(t) {
    document.prerendering ? addEventListener("prerenderingchange", function() {
        return t()
    }, !0) : t()
}, R = [1800, 3e3], $ = function(t, e) {
    e = e || {},
    E(function() {
        var r, i = D(), n = s("FCP"), a = h("paint", function(u) {
            u.forEach(function(c) {
                c.name === "first-contentful-paint" && (a.disconnect(),
                c.startTime < i.firstHiddenTime && (n.value = Math.max(c.startTime - w(), 0),
                n.entries.push(c),
                r(!0)))
            })
        });
        a && (r = f(t, n, R, e.reportAllChanges),
        v(function(u) {
            n = s("FCP"),
            r = f(t, n, R, e.reportAllChanges),
            k(function() {
                n.value = performance.now() - u.timeStamp,
                r(!0)
            })
        }))
    })
}, H = [.1, .25], ct = function(t, e) {
    e = e || {},
    $(I(function() {
        var r, i = s("CLS", 0), n = 0, a = [], u = function(o) {
            o.forEach(function(d) {
                if (!d.hadRecentInput) {
                    var X = a[0]
                      , Y = a[a.length - 1];
                    n && d.startTime - Y.startTime < 1e3 && d.startTime - X.startTime < 5e3 ? (n += d.value,
                    a.push(d)) : (n = d.value,
                    a = [d])
                }
            }),
            n > i.value && (i.value = n,
            i.entries = a,
            r())
        }, c = h("layout-shift", u);
        c && (r = f(t, i, H, e.reportAllChanges),
        y(function() {
            u(c.takeRecords()),
            r(!0)
        }),
        v(function() {
            n = 0,
            i = s("CLS", 0),
            r = f(t, i, H, e.reportAllChanges),
            k(function() {
                return r()
            })
        }),
        setTimeout(r, 0))
    }))
}, J = 0, P = 1 / 0, C = 0, tt = function(t) {
    t.forEach(function(e) {
        e.interactionId && (P = Math.min(P, e.interactionId),
        C = Math.max(C, e.interactionId),
        J = C ? (C - P) / 7 + 1 : 0)
    })
}, K = function() {
    return F ? J : performance.interactionCount || 0
}, et = function() {
    "interactionCount"in performance || F || (F = h("event", tt, {
        type: "event",
        buffered: !0,
        durationThreshold: 0
    }))
}, l = [], L = new Map, Q = 0, nt = function() {
    var t = Math.min(l.length - 1, Math.floor((K() - Q) / 50));
    return l[t]
}, rt = [], it = function(t) {
    if (rt.forEach(function(n) {
        return n(t)
    }),
    t.interactionId || t.entryType === "first-input") {
        var e = l[l.length - 1]
          , r = L.get(t.interactionId);
        if (r || l.length < 10 || t.duration > e.latency) {
            if (r)
                t.duration > r.latency ? (r.entries = [t],
                r.latency = t.duration) : t.duration === r.latency && t.startTime === r.entries[0].startTime && r.entries.push(t);
            else {
                var i = {
                    id: t.interactionId,
                    latency: t.duration,
                    entries: [t]
                };
                L.set(i.id, i),
                l.push(i)
            }
            l.sort(function(n, a) {
                return a.latency - n.latency
            }),
            l.length > 10 && l.splice(10).forEach(function(n) {
                return L.delete(n.id)
            })
        }
    }
}, U = function(t) {
    var e = self.requestIdleCallback || self.setTimeout
      , r = -1;
    return t = I(t),
    document.visibilityState === "hidden" ? t() : (r = e(t),
    y(t)),
    r
}, N = [200, 500], st = function(t, e) {
    "PerformanceEventTiming"in self && "interactionId"in PerformanceEventTiming.prototype && (e = e || {},
    E(function() {
        var r;
        et();
        var i, n = s("INP"), a = function(c) {
            U(function() {
                c.forEach(it);
                var o = nt();
                o && o.latency !== n.value && (n.value = o.latency,
                n.entries = o.entries,
                i())
            })
        }, u = h("event", a, {
            durationThreshold: (r = e.durationThreshold) !== null && r !== void 0 ? r : 40
        });
        i = f(t, n, N, e.reportAllChanges),
        u && (u.observe({
            type: "first-input",
            buffered: !0
        }),
        y(function() {
            a(u.takeRecords()),
            i(!0)
        }),
        v(function() {
            Q = K(),
            l.length = 0,
            L.clear(),
            n = s("INP"),
            i = f(t, n, N, e.reportAllChanges)
        }))
    }))
}, q = [2500, 4e3], A = {}, ft = function(t, e) {
    e = e || {},
    E(function() {
        var r, i = D(), n = s("LCP"), a = function(o) {
            e.reportAllChanges || (o = o.slice(-1)),
            o.forEach(function(d) {
                d.startTime < i.firstHiddenTime && (n.value = Math.max(d.startTime - w(), 0),
                n.entries = [d],
                r())
            })
        }, u = h("largest-contentful-paint", a);
        if (u) {
            r = f(t, n, q, e.reportAllChanges);
            var c = I(function() {
                A[n.id] || (a(u.takeRecords()),
                u.disconnect(),
                A[n.id] = !0,
                r(!0))
            });
            ["keydown", "click"].forEach(function(o) {
                addEventListener(o, function() {
                    return U(c)
                }, {
                    once: !0,
                    capture: !0
                })
            }),
            y(c),
            v(function(o) {
                n = s("LCP"),
                r = f(t, n, q, e.reportAllChanges),
                k(function() {
                    n.value = performance.now() - o.timeStamp,
                    A[n.id] = !0,
                    r(!0)
                })
            })
        }
    })
}, O = [800, 1800], ot = function t(e) {
    document.prerendering ? E(function() {
        return t(e)
    }) : document.readyState !== "complete" ? addEventListener("load", function() {
        return t(e)
    }, !0) : setTimeout(e, 0)
}, dt = function(t, e) {
    e = e || {};
    var r = s("TTFB")
      , i = f(t, r, O, e.reportAllChanges);
    ot(function() {
        var n = M();
        n && (r.value = Math.max(n.responseStart - w(), 0),
        r.entries = [n],
        i(!0),
        v(function() {
            r = s("TTFB", 0),
            (i = f(t, r, O, e.reportAllChanges))(!0)
        }))
    })
}, g = {
    passive: !0,
    capture: !0
}, at = new Date, j = function(t, e) {
    p || (p = e,
    T = t,
    z = new Date,
    W(removeEventListener),
    V())
}, V = function() {
    if (T >= 0 && T < z - at) {
        var t = {
            entryType: "first-input",
            name: p.type,
            target: p.target,
            cancelable: p.cancelable,
            startTime: p.timeStamp,
            processingStart: p.timeStamp + T
        };
        S.forEach(function(e) {
            e(t)
        }),
        S = []
    }
}, ut = function(t) {
    if (t.cancelable) {
        var e = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
        t.type == "pointerdown" ? function(r, i) {
            var n = function() {
                j(r, i),
                u()
            }
              , a = function() {
                u()
            }
              , u = function() {
                removeEventListener("pointerup", n, g),
                removeEventListener("pointercancel", a, g)
            };
            addEventListener("pointerup", n, g),
            addEventListener("pointercancel", a, g)
        }(e, t) : j(e, t)
    }
}, W = function(t) {
    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(e) {
        return t(e, ut, g)
    })
}, _ = [100, 300], lt = function(t, e) {
    e = e || {},
    E(function() {
        var r, i = D(), n = s("FID"), a = function(o) {
            o.startTime < i.firstHiddenTime && (n.value = o.processingStart - o.startTime,
            n.entries.push(o),
            r(!0))
        }, u = function(o) {
            o.forEach(a)
        }, c = h("first-input", u);
        r = f(t, n, _, e.reportAllChanges),
        c && (y(I(function() {
            u(c.takeRecords()),
            c.disconnect()
        })),
        v(function() {
            var o;
            n = s("FID"),
            r = f(t, n, _, e.reportAllChanges),
            S = [],
            T = -1,
            p = null,
            W(addEventListener),
            o = a,
            S.push(o),
            V()
        }))
    })
};
export {H as CLSThresholds, R as FCPThresholds, _ as FIDThresholds, N as INPThresholds, q as LCPThresholds, O as TTFBThresholds, ct as onCLS, $ as onFCP, lt as onFID, st as onINP, ft as onLCP, dt as onTTFB};
//# sourceMappingURL=lq790ciry1z0b5jk.js.map
