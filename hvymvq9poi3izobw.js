const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/m1u9di7jj8hu2lt1.js", "assets/dc2xxjkicf2pz0mj.js", "assets/juy90og0wtbp77qa.js", "assets/root-fv49dn40.css", "assets/jkj3t5vegfseom8s.js", "assets/gbytyrxq7s6h1uzd.js", "assets/okkj3my0355ooax9.js", "assets/myf70zg6q6t9salj.js", "assets/fm2k0zsjlk5u8n0g.js", "assets/ebowva1iyqw5n8qm.js"]))) => i.map(i => d[i]);
import {at as F} from "./dc2xxjkicf2pz0mj.js";
import {aw as De, _, Y as Ar, Z as Et, aj as R, ay as q} from "./juy90og0wtbp77qa.js";
var We = function(n, e) {
    return We = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, r) {
        t.__proto__ = r
    }
    || function(t, r) {
        for (var i in r)
            Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
    }
    ,
    We(n, e)
};
function z(n, e) {
    if (typeof e != "function" && e !== null)
        throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    We(n, e);
    function t() {
        this.constructor = n
    }
    n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype,
    new t)
}
var y = function() {
    return y = Object.assign || function(e) {
        for (var t, r = 1, i = arguments.length; r < i; r++) {
            t = arguments[r];
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }
        return e
    }
    ,
    y.apply(this, arguments)
};
function xr(n, e) {
    var t = {};
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
    if (n != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(n); i < r.length; i++)
            e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[i]) && (t[r[i]] = n[r[i]]);
    return t
}
function m(n, e, t, r) {
    function i(o) {
        return o instanceof t ? o : new t(function(u) {
            u(o)
        }
        )
    }
    return new (t || (t = Promise))(function(o, u) {
        function a(l) {
            try {
                s(r.next(l))
            } catch (f) {
                u(f)
            }
        }
        function c(l) {
            try {
                s(r.throw(l))
            } catch (f) {
                u(f)
            }
        }
        function s(l) {
            l.done ? o(l.value) : i(l.value).then(a, c)
        }
        s((r = r.apply(n, e || [])).next())
    }
    )
}
function b(n, e) {
    var t = {
        label: 0,
        sent: function() {
            if (o[0] & 1)
                throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    }, r, i, o, u;
    return u = {
        next: a(0),
        throw: a(1),
        return: a(2)
    },
    typeof Symbol == "function" && (u[Symbol.iterator] = function() {
        return this
    }
    ),
    u;
    function a(s) {
        return function(l) {
            return c([s, l])
        }
    }
    function c(s) {
        if (r)
            throw new TypeError("Generator is already executing.");
        for (; u && (u = 0,
        s[0] && (t = 0)),
        t; )
            try {
                if (r = 1,
                i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i),
                0) : i.next) && !(o = o.call(i, s[1])).done)
                    return o;
                switch (i = 0,
                o && (s = [s[0] & 2, o.value]),
                s[0]) {
                case 0:
                case 1:
                    o = s;
                    break;
                case 4:
                    return t.label++,
                    {
                        value: s[1],
                        done: !1
                    };
                case 5:
                    t.label++,
                    i = s[1],
                    s = [0];
                    continue;
                case 7:
                    s = t.ops.pop(),
                    t.trys.pop();
                    continue;
                default:
                    if (o = t.trys,
                    !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                        t = 0;
                        continue
                    }
                    if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
                        t.label = s[1];
                        break
                    }
                    if (s[0] === 6 && t.label < o[1]) {
                        t.label = o[1],
                        o = s;
                        break
                    }
                    if (o && t.label < o[2]) {
                        t.label = o[2],
                        t.ops.push(s);
                        break
                    }
                    o[2] && t.ops.pop(),
                    t.trys.pop();
                    continue
                }
                s = e.call(n, t)
            } catch (l) {
                s = [6, l],
                i = 0
            } finally {
                r = o = 0
            }
        if (s[0] & 5)
            throw s[1];
        return {
            value: s[0] ? s[1] : void 0,
            done: !0
        }
    }
}
function A(n, e, t) {
    if (t || arguments.length === 2)
        for (var r = 0, i = e.length, o; r < i; r++)
            (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)),
            o[r] = e[r]);
    return n.concat(o || Array.prototype.slice.call(e))
}
function $e(n, e, t) {
    e.split && (e = e.split("."));
    for (var r = 0, i = e.length, o = n, u, a; r < i && (a = "" + e[r++],
    !(a === "__proto__" || a === "constructor" || a === "prototype")); )
        o = o[a] = r === i ? t : typeof (u = o[a]) == typeof e ? u : e[r] * 0 !== 0 || ~("" + e[r]).indexOf(".") ? {} : []
}
var Mr = function(n, e) {
    return Object.keys(n).filter(function(t) {
        return e(t, n[t])
    }).reduce(function(t, r) {
        return t[r] = n[r],
        t
    }, {})
}
  , ne = function(n) {
    De(e, n);
    function e(t, r) {
        var i = n.call(this, "".concat(t, " ").concat(r)) || this;
        return i.field = t,
        i
    }
    return e
}(Error);
function oe(n) {
    return typeof n == "string"
}
function Qe(n) {
    return typeof n == "number"
}
function de(n) {
    return typeof n == "function"
}
function Cr(n) {
    return n != null
}
function j(n) {
    return Object.prototype.toString.call(n).slice(8, -1).toLowerCase() === "object"
}
var rt = "is not a string"
  , nt = "is not an object"
  , kr = "is nil";
function Dr(n) {
    if (!Cr(n))
        throw new ne("Event",kr);
    if (typeof n != "object")
        throw new ne("Event",nt)
}
function Fr(n) {
    if (!oe(n.type))
        throw new ne(".type",rt)
}
function jr(n) {
    if (!oe(n.event))
        throw new ne(".event",rt)
}
function Tr(n) {
    if (!j(n.properties))
        throw new ne(".properties",nt)
}
function Rr(n) {
    if (!j(n.traits))
        throw new ne(".traits",nt)
}
function qr(n) {
    if (!oe(n.messageId))
        throw new ne(".messageId",rt)
}
function Nr(n) {
    Dr(n),
    Fr(n),
    qr(n),
    n.type === "track" && (jr(n),
    Tr(n)),
    ["group", "identify"].includes(n.type) && Rr(n)
}
var Lr = function() {
    function n(e) {
        var t, r;
        this.settings = e,
        this.createMessageId = e.createMessageId,
        this.onEventMethodCall = (t = e.onEventMethodCall) !== null && t !== void 0 ? t : function() {}
        ,
        this.onFinishedEvent = (r = e.onFinishedEvent) !== null && r !== void 0 ? r : function() {}
    }
    return n
}()
  , zr = function() {
    function n(e) {
        this.settings = new Lr(e)
    }
    return n.prototype.track = function(e, t, r, i) {
        return this.settings.onEventMethodCall({
            type: "track",
            options: r
        }),
        this.normalize(_(_({}, this.baseEvent()), {
            event: e,
            type: "track",
            properties: t ?? {},
            options: _({}, r),
            integrations: _({}, i)
        }))
    }
    ,
    n.prototype.page = function(e, t, r, i, o) {
        var u;
        this.settings.onEventMethodCall({
            type: "page",
            options: i
        });
        var a = {
            type: "page",
            properties: _({}, r),
            options: _({}, i),
            integrations: _({}, o)
        };
        return e !== null && (a.category = e,
        a.properties = (u = a.properties) !== null && u !== void 0 ? u : {},
        a.properties.category = e),
        t !== null && (a.name = t),
        this.normalize(_(_({}, this.baseEvent()), a))
    }
    ,
    n.prototype.screen = function(e, t, r, i, o) {
        this.settings.onEventMethodCall({
            type: "screen",
            options: i
        });
        var u = {
            type: "screen",
            properties: _({}, r),
            options: _({}, i),
            integrations: _({}, o)
        };
        return e !== null && (u.category = e),
        t !== null && (u.name = t),
        this.normalize(_(_({}, this.baseEvent()), u))
    }
    ,
    n.prototype.identify = function(e, t, r, i) {
        return this.settings.onEventMethodCall({
            type: "identify",
            options: r
        }),
        this.normalize(_(_({}, this.baseEvent()), {
            type: "identify",
            userId: e,
            traits: t ?? {},
            options: _({}, r),
            integrations: i
        }))
    }
    ,
    n.prototype.group = function(e, t, r, i) {
        return this.settings.onEventMethodCall({
            type: "group",
            options: r
        }),
        this.normalize(_(_({}, this.baseEvent()), {
            type: "group",
            traits: t ?? {},
            options: _({}, r),
            integrations: _({}, i),
            groupId: e
        }))
    }
    ,
    n.prototype.alias = function(e, t, r, i) {
        this.settings.onEventMethodCall({
            type: "alias",
            options: r
        });
        var o = {
            userId: e,
            type: "alias",
            options: _({}, r),
            integrations: _({}, i)
        };
        return t !== null && (o.previousId = t),
        e === void 0 ? this.normalize(_(_({}, o), this.baseEvent())) : this.normalize(_(_({}, this.baseEvent()), o))
    }
    ,
    n.prototype.baseEvent = function() {
        return {
            integrations: {},
            options: {}
        }
    }
    ,
    n.prototype.context = function(e) {
        var t, r = ["userId", "anonymousId", "timestamp", "messageId"];
        delete e.integrations;
        var i = Object.keys(e)
          , o = (t = e.context) !== null && t !== void 0 ? t : {}
          , u = {};
        return i.forEach(function(a) {
            a !== "context" && (r.includes(a) ? $e(u, a, e[a]) : $e(o, a, e[a]))
        }),
        [o, u]
    }
    ,
    n.prototype.normalize = function(e) {
        var t, r, i = Object.keys((t = e.integrations) !== null && t !== void 0 ? t : {}).reduce(function(d, v) {
            var h, p;
            return _(_({}, d), (h = {},
            h[v] = !!(!((p = e.integrations) === null || p === void 0) && p[v]),
            h))
        }, {});
        e.options = Mr(e.options || {}, function(d, v) {
            return v !== void 0
        });
        var o = _(_({}, i), (r = e.options) === null || r === void 0 ? void 0 : r.integrations)
          , u = e.options ? this.context(e.options) : []
          , a = u[0]
          , c = u[1]
          , s = e.options
          , l = Ar(e, ["options"])
          , f = _(_(_(_({
            timestamp: new Date
        }, l), {
            context: a,
            integrations: o
        }), c), {
            messageId: s.messageId || this.settings.createMessageId()
        });
        return this.settings.onFinishedEvent(f),
        Nr(f),
        f
    }
    ,
    n
}();
function Br(n, e) {
    return new Promise(function(t, r) {
        var i = setTimeout(function() {
            r(Error("Promise timed out"))
        }, e);
        n.then(function(o) {
            return clearTimeout(i),
            t(o)
        }).catch(r)
    }
    )
}
function Ur(n) {
    return new Promise(function(e) {
        return setTimeout(e, n)
    }
    )
}
function Kr(n, e, t) {
    var r = function() {
        try {
            return Promise.resolve(e(n))
        } catch (i) {
            return Promise.reject(i)
        }
    };
    return Ur(t).then(function() {
        return Br(r(), 1e3)
    }).catch(function(i) {
        n?.log("warn", "Callback Error", {
            error: i
        }),
        n?.stats.increment("callback_error")
    }).then(function() {
        return n
    })
}
var Ht = function() {
    var n, e, t = !1, r = new Promise(function(i, o) {
        n = function() {
            for (var u = [], a = 0; a < arguments.length; a++)
                u[a] = arguments[a];
            t = !0,
            i.apply(void 0, u)
        }
        ,
        e = function() {
            for (var u = [], a = 0; a < arguments.length; a++)
                u[a] = arguments[a];
            t = !0,
            o.apply(void 0, u)
        }
    }
    );
    return {
        resolve: n,
        reject: e,
        promise: r,
        isSettled: function() {
            return t
        }
    }
}
  , it = function() {
    function n(e) {
        var t;
        this.callbacks = {},
        this.warned = !1,
        this.maxListeners = (t = e?.maxListeners) !== null && t !== void 0 ? t : 10
    }
    return n.prototype.warnIfPossibleMemoryLeak = function(e) {
        this.warned || this.maxListeners && this.callbacks[e].length > this.maxListeners && (console.warn("Event Emitter: Possible memory leak detected; ".concat(String(e), " has exceeded ").concat(this.maxListeners, " listeners.")),
        this.warned = !0)
    }
    ,
    n.prototype.on = function(e, t) {
        return this.callbacks[e] ? (this.callbacks[e].push(t),
        this.warnIfPossibleMemoryLeak(e)) : this.callbacks[e] = [t],
        this
    }
    ,
    n.prototype.once = function(e, t) {
        var r = this
          , i = function() {
            for (var o = [], u = 0; u < arguments.length; u++)
                o[u] = arguments[u];
            r.off(e, i),
            t.apply(r, o)
        };
        return this.on(e, i),
        this
    }
    ,
    n.prototype.off = function(e, t) {
        var r, i = (r = this.callbacks[e]) !== null && r !== void 0 ? r : [], o = i.filter(function(u) {
            return u !== t
        });
        return this.callbacks[e] = o,
        this
    }
    ,
    n.prototype.emit = function(e) {
        for (var t = this, r, i = [], o = 1; o < arguments.length; o++)
            i[o - 1] = arguments[o];
        var u = (r = this.callbacks[e]) !== null && r !== void 0 ? r : [];
        return u.forEach(function(a) {
            a.apply(t, i)
        }),
        this
    }
    ,
    n
}();
function Vr(n) {
    var e = Math.random() + 1
      , t = n.minTimeout
      , r = t === void 0 ? 500 : t
      , i = n.factor
      , o = i === void 0 ? 2 : i
      , u = n.attempt
      , a = n.maxTimeout
      , c = a === void 0 ? 1 / 0 : a;
    return Math.min(e * r * Math.pow(o, u), c)
}
var Zt = "onRemoveFromFuture", ot = function(n) {
    De(e, n);
    function e(t, r, i) {
        var o = n.call(this) || this;
        return o.future = [],
        o.maxAttempts = t,
        o.queue = r,
        o.seen = i ?? {},
        o
    }
    return e.prototype.push = function() {
        for (var t = this, r = [], i = 0; i < arguments.length; i++)
            r[i] = arguments[i];
        var o = r.map(function(u) {
            var a = t.updateAttempts(u);
            return a > t.maxAttempts || t.includes(u) ? !1 : (t.queue.push(u),
            !0)
        });
        return this.queue = this.queue.sort(function(u, a) {
            return t.getAttempts(u) - t.getAttempts(a)
        }),
        o
    }
    ,
    e.prototype.pushWithBackoff = function(t, r) {
        var i = this;
        if (r === void 0 && (r = 0),
        r == 0 && this.getAttempts(t) === 0)
            return this.push(t)[0];
        var o = this.updateAttempts(t);
        if (o > this.maxAttempts || this.includes(t))
            return !1;
        var u = Vr({
            attempt: o - 1
        });
        return r > 0 && u < r && (u = r),
        setTimeout(function() {
            i.queue.push(t),
            i.future = i.future.filter(function(a) {
                return a.id !== t.id
            }),
            i.emit(Zt)
        }, u),
        this.future.push(t),
        !0
    }
    ,
    e.prototype.getAttempts = function(t) {
        var r;
        return (r = this.seen[t.id]) !== null && r !== void 0 ? r : 0
    }
    ,
    e.prototype.updateAttempts = function(t) {
        return this.seen[t.id] = this.getAttempts(t) + 1,
        this.getAttempts(t)
    }
    ,
    e.prototype.includes = function(t) {
        return this.queue.includes(t) || this.future.includes(t) || !!this.queue.find(function(r) {
            return r.id === t.id
        }) || !!this.future.find(function(r) {
            return r.id === t.id
        })
    }
    ,
    e.prototype.pop = function() {
        return this.queue.shift()
    }
    ,
    Object.defineProperty(e.prototype, "length", {
        get: function() {
            return this.queue.length
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "todo", {
        get: function() {
            return this.queue.length + this.future.length
        },
        enumerable: !1,
        configurable: !0
    }),
    e
}(it), re = 256, xe = [], me;
for (; re--; )
    xe[re] = (re + 256).toString(16).substring(1);
function at() {
    var n = 0, e, t = "";
    if (!me || re + 16 > 256) {
        for (me = Array(n = 256); n--; )
            me[n] = 256 * Math.random() | 0;
        n = re = 0
    }
    for (; n < 16; n++)
        e = me[re + n],
        n == 6 ? t += xe[e & 15 | 64] : n == 8 ? t += xe[e & 63 | 128] : t += xe[e],
        n & 1 && n > 1 && n < 11 && (t += "-");
    return re++,
    t
}
var Gr = function() {
    function n() {
        this._logs = []
    }
    return n.prototype.log = function(e, t, r) {
        var i = new Date;
        this._logs.push({
            level: e,
            message: t,
            time: i,
            extras: r
        })
    }
    ,
    Object.defineProperty(n.prototype, "logs", {
        get: function() {
            return this._logs
        },
        enumerable: !1,
        configurable: !0
    }),
    n.prototype.flush = function() {
        if (this.logs.length > 1) {
            var e = this._logs.reduce(function(t, r) {
                var i, o, u, a = _(_({}, r), {
                    json: JSON.stringify(r.extras, null, " "),
                    extras: r.extras
                });
                delete a.time;
                var c = (u = (o = r.time) === null || o === void 0 ? void 0 : o.toISOString()) !== null && u !== void 0 ? u : "";
                return t[c] && (c = "".concat(c, "-").concat(Math.random())),
                _(_({}, t), (i = {},
                i[c] = a,
                i))
            }, {});
            console.table ? console.table(e) : console.log(e)
        } else
            this.logs.forEach(function(t) {
                var r = t.level
                  , i = t.message
                  , o = t.extras;
                r === "info" || r === "debug" ? console.log(i, o ?? "") : console[r](i, o ?? "")
            });
        this._logs = []
    }
    ,
    n
}()
  , Jr = function(n) {
    var e = {
        gauge: "g",
        counter: "c"
    };
    return e[n]
}
  , Xt = function() {
    function n() {
        this.metrics = []
    }
    return n.prototype.increment = function(e, t, r) {
        t === void 0 && (t = 1),
        this.metrics.push({
            metric: e,
            value: t,
            tags: r ?? [],
            type: "counter",
            timestamp: Date.now()
        })
    }
    ,
    n.prototype.gauge = function(e, t, r) {
        this.metrics.push({
            metric: e,
            value: t,
            tags: r ?? [],
            type: "gauge",
            timestamp: Date.now()
        })
    }
    ,
    n.prototype.flush = function() {
        var e = this.metrics.map(function(t) {
            return _(_({}, t), {
                tags: t.tags.join(",")
            })
        });
        console.table ? console.table(e) : console.log(e),
        this.metrics = []
    }
    ,
    n.prototype.serialize = function() {
        return this.metrics.map(function(e) {
            return {
                m: e.metric,
                v: e.value,
                t: e.tags,
                k: Jr(e.type),
                e: e.timestamp
            }
        })
    }
    ,
    n
}()
  , Wr = function(n) {
    De(e, n);
    function e() {
        return n !== null && n.apply(this, arguments) || this
    }
    return e.prototype.gauge = function() {}
    ,
    e.prototype.increment = function() {}
    ,
    e.prototype.flush = function() {}
    ,
    e.prototype.serialize = function() {
        return []
    }
    ,
    e
}(Xt)
  , ie = function() {
    function n(e) {
        var t, r, i;
        this.retry = (t = e.retry) !== null && t !== void 0 ? t : !0,
        this.type = (r = e.type) !== null && r !== void 0 ? r : "plugin Error",
        this.reason = (i = e.reason) !== null && i !== void 0 ? i : ""
    }
    return n
}()
  , Ce = function() {
    function n(e, t, r, i) {
        t === void 0 && (t = at()),
        r === void 0 && (r = new Wr),
        i === void 0 && (i = new Gr),
        this.attempts = 0,
        this.event = e,
        this._id = t,
        this.logger = i,
        this.stats = r
    }
    return n.system = function() {}
    ,
    n.prototype.isSame = function(e) {
        return e.id === this.id
    }
    ,
    n.prototype.cancel = function(e) {
        throw e || new ie({
            reason: "Context Cancel"
        })
    }
    ,
    n.prototype.log = function(e, t, r) {
        this.logger.log(e, t, r)
    }
    ,
    Object.defineProperty(n.prototype, "id", {
        get: function() {
            return this._id
        },
        enumerable: !1,
        configurable: !0
    }),
    n.prototype.updateEvent = function(e, t) {
        var r;
        if (e.split(".")[0] === "integrations") {
            var i = e.split(".")[1];
            if (((r = this.event.integrations) === null || r === void 0 ? void 0 : r[i]) === !1)
                return this.event
        }
        return $e(this.event, e, t),
        this.event
    }
    ,
    n.prototype.failedDelivery = function() {
        return this._failedDelivery
    }
    ,
    n.prototype.setFailedDelivery = function(e) {
        this._failedDelivery = e
    }
    ,
    n.prototype.logs = function() {
        return this.logger.logs
    }
    ,
    n.prototype.flush = function() {
        this.logger.flush(),
        this.stats.flush()
    }
    ,
    n.prototype.toJSON = function() {
        return {
            id: this._id,
            event: this.event,
            logs: this.logger.logs,
            metrics: this.stats.metrics
        }
    }
    ,
    n
}();
function $r(n, e) {
    var t = {};
    return n.forEach(function(r) {
        var i, o = void 0;
        {
            var u = r[e];
            o = typeof u != "string" ? JSON.stringify(u) : u
        }
        o !== void 0 && (t[o] = Et(Et([], (i = t[o]) !== null && i !== void 0 ? i : [], !0), [r], !1))
    }),
    t
}
var Qr = function(n) {
    return typeof n == "object" && n !== null && "then"in n && typeof n.then == "function"
}
  , Hr = function() {
    var n, e, t = 0;
    return {
        done: function() {
            return n
        },
        run: function(r) {
            var i = r();
            return Qr(i) && (++t === 1 && (n = new Promise(function(o) {
                return e = o
            }
            )),
            i.finally(function() {
                return --t === 0 && e()
            })),
            i
        }
    }
};
function Zr(n) {
    return R(this, void 0, void 0, function() {
        var e;
        return q(this, function(t) {
            switch (t.label) {
            case 0:
                return t.trys.push([0, 2, , 3]),
                [4, n()];
            case 1:
                return [2, t.sent()];
            case 2:
                return e = t.sent(),
                [2, Promise.reject(e)];
            case 3:
                return [2]
            }
        })
    })
}
function ye(n, e) {
    n.log("debug", "plugin", {
        plugin: e.name
    });
    var t = new Date().getTime()
      , r = e[n.event.type];
    if (r === void 0)
        return Promise.resolve(n);
    var i = Zr(function() {
        return r.apply(e, [n])
    }).then(function(o) {
        var u = new Date().getTime() - t;
        return o.stats.gauge("plugin_time", u, ["plugin:".concat(e.name)]),
        o
    }).catch(function(o) {
        if (o instanceof ie && o.type === "middleware_cancellation")
            throw o;
        return o instanceof ie ? (n.log("warn", o.type, {
            plugin: e.name,
            error: o
        }),
        o) : (n.log("error", "plugin Error", {
            plugin: e.name,
            error: o
        }),
        n.stats.increment("plugin_error", 1, ["plugin:".concat(e.name)]),
        o)
    });
    return i
}
function Xr(n, e) {
    return ye(n, e).then(function(t) {
        if (t instanceof Ce)
            return t;
        n.log("debug", "Context canceled"),
        n.stats.increment("context_canceled"),
        n.cancel(t)
    })
}
var Yr = function(n) {
    De(e, n);
    function e(t) {
        var r = n.call(this) || this;
        return r.criticalTasks = Hr(),
        r.plugins = [],
        r.failedInitializations = [],
        r.flushing = !1,
        r.queue = t,
        r.queue.on(Zt, function() {
            r.scheduleFlush(0)
        }),
        r
    }
    return e.prototype.register = function(t, r, i) {
        return R(this, void 0, void 0, function() {
            var o, u, a = this;
            return q(this, function(c) {
                switch (c.label) {
                case 0:
                    return this.plugins.push(r),
                    o = function(s) {
                        a.failedInitializations.push(r.name),
                        a.emit("initialization_failure", r),
                        console.warn(r.name, s),
                        t.log("warn", "Failed to load destination", {
                            plugin: r.name,
                            error: s
                        }),
                        a.plugins = a.plugins.filter(function(l) {
                            return l !== r
                        })
                    }
                    ,
                    r.type === "destination" && r.name !== "Segment.io" ? (r.load(t, i).catch(o),
                    [3, 4]) : [3, 1];
                case 1:
                    return c.trys.push([1, 3, , 4]),
                    [4, r.load(t, i)];
                case 2:
                    return c.sent(),
                    [3, 4];
                case 3:
                    return u = c.sent(),
                    o(u),
                    [3, 4];
                case 4:
                    return [2]
                }
            })
        })
    }
    ,
    e.prototype.deregister = function(t, r, i) {
        return R(this, void 0, void 0, function() {
            var o;
            return q(this, function(u) {
                switch (u.label) {
                case 0:
                    return u.trys.push([0, 3, , 4]),
                    r.unload ? [4, Promise.resolve(r.unload(t, i))] : [3, 2];
                case 1:
                    u.sent(),
                    u.label = 2;
                case 2:
                    return this.plugins = this.plugins.filter(function(a) {
                        return a.name !== r.name
                    }),
                    [3, 4];
                case 3:
                    return o = u.sent(),
                    t.log("warn", "Failed to unload destination", {
                        plugin: r.name,
                        error: o
                    }),
                    [3, 4];
                case 4:
                    return [2]
                }
            })
        })
    }
    ,
    e.prototype.dispatch = function(t) {
        return R(this, void 0, void 0, function() {
            var r;
            return q(this, function(i) {
                return t.log("debug", "Dispatching"),
                t.stats.increment("message_dispatched"),
                this.queue.push(t),
                r = this.subscribeToDelivery(t),
                this.scheduleFlush(0),
                [2, r]
            })
        })
    }
    ,
    e.prototype.subscribeToDelivery = function(t) {
        return R(this, void 0, void 0, function() {
            var r = this;
            return q(this, function(i) {
                return [2, new Promise(function(o) {
                    var u = function(a, c) {
                        a.isSame(t) && (r.off("flush", u),
                        o(a))
                    };
                    r.on("flush", u)
                }
                )]
            })
        })
    }
    ,
    e.prototype.dispatchSingle = function(t) {
        return R(this, void 0, void 0, function() {
            var r = this;
            return q(this, function(i) {
                return t.log("debug", "Dispatching"),
                t.stats.increment("message_dispatched"),
                this.queue.updateAttempts(t),
                t.attempts = 1,
                [2, this.deliver(t).catch(function(o) {
                    var u = r.enqueuRetry(o, t);
                    return u ? r.subscribeToDelivery(t) : (t.setFailedDelivery({
                        reason: o
                    }),
                    t)
                })]
            })
        })
    }
    ,
    e.prototype.isEmpty = function() {
        return this.queue.length === 0
    }
    ,
    e.prototype.scheduleFlush = function(t) {
        var r = this;
        t === void 0 && (t = 500),
        !this.flushing && (this.flushing = !0,
        setTimeout(function() {
            r.flush().then(function() {
                setTimeout(function() {
                    r.flushing = !1,
                    r.queue.length && r.scheduleFlush(0)
                }, 0)
            })
        }, t))
    }
    ,
    e.prototype.deliver = function(t) {
        return R(this, void 0, void 0, function() {
            var r, i, o, u;
            return q(this, function(a) {
                switch (a.label) {
                case 0:
                    return [4, this.criticalTasks.done()];
                case 1:
                    a.sent(),
                    r = Date.now(),
                    a.label = 2;
                case 2:
                    return a.trys.push([2, 4, , 5]),
                    [4, this.flushOne(t)];
                case 3:
                    return t = a.sent(),
                    i = Date.now() - r,
                    this.emit("delivery_success", t),
                    t.stats.gauge("delivered", i),
                    t.log("debug", "Delivered", t.event),
                    [2, t];
                case 4:
                    throw o = a.sent(),
                    u = o,
                    t.log("error", "Failed to deliver", u),
                    this.emit("delivery_failure", t, u),
                    t.stats.increment("delivery_failed"),
                    o;
                case 5:
                    return [2]
                }
            })
        })
    }
    ,
    e.prototype.enqueuRetry = function(t, r) {
        var i = !(t instanceof ie) || t.retry;
        return i ? this.queue.pushWithBackoff(r) : !1
    }
    ,
    e.prototype.flush = function() {
        return R(this, void 0, void 0, function() {
            var t, r, i;
            return q(this, function(o) {
                switch (o.label) {
                case 0:
                    if (this.queue.length === 0)
                        return [2, []];
                    if (t = this.queue.pop(),
                    !t)
                        return [2, []];
                    t.attempts = this.queue.getAttempts(t),
                    o.label = 1;
                case 1:
                    return o.trys.push([1, 3, , 4]),
                    [4, this.deliver(t)];
                case 2:
                    return t = o.sent(),
                    this.emit("flush", t, !0),
                    [3, 4];
                case 3:
                    return r = o.sent(),
                    i = this.enqueuRetry(r, t),
                    i || (t.setFailedDelivery({
                        reason: r
                    }),
                    this.emit("flush", t, !1)),
                    [2, []];
                case 4:
                    return [2, [t]]
                }
            })
        })
    }
    ,
    e.prototype.isReady = function() {
        return !0
    }
    ,
    e.prototype.availableExtensions = function(t) {
        var r = this.plugins.filter(function(v) {
            var h, p, w;
            if (v.type !== "destination" && v.name !== "Segment.io")
                return !0;
            var g = void 0;
            return (h = v.alternativeNames) === null || h === void 0 || h.forEach(function(S) {
                t[S] !== void 0 && (g = t[S])
            }),
            (w = (p = t[v.name]) !== null && p !== void 0 ? p : g) !== null && w !== void 0 ? w : (v.name === "Segment.io" ? !0 : t.All) !== !1
        })
          , i = $r(r, "type")
          , o = i.before
          , u = o === void 0 ? [] : o
          , a = i.enrichment
          , c = a === void 0 ? [] : a
          , s = i.destination
          , l = s === void 0 ? [] : s
          , f = i.after
          , d = f === void 0 ? [] : f;
        return {
            before: u,
            enrichment: c,
            destinations: l,
            after: d
        }
    }
    ,
    e.prototype.flushOne = function(t) {
        var r, i;
        return R(this, void 0, void 0, function() {
            var o, u, a, c, s, l, h, f, d, v, h, p, w, g, S;
            return q(this, function(E) {
                switch (E.label) {
                case 0:
                    if (!this.isReady())
                        throw new Error("Not ready");
                    t.attempts > 1 && this.emit("delivery_retry", t),
                    o = this.availableExtensions((r = t.event.integrations) !== null && r !== void 0 ? r : {}),
                    u = o.before,
                    a = o.enrichment,
                    c = 0,
                    s = u,
                    E.label = 1;
                case 1:
                    return c < s.length ? (l = s[c],
                    [4, Xr(t, l)]) : [3, 4];
                case 2:
                    h = E.sent(),
                    h instanceof Ce && (t = h),
                    this.emit("message_enriched", t, l),
                    E.label = 3;
                case 3:
                    return c++,
                    [3, 1];
                case 4:
                    f = 0,
                    d = a,
                    E.label = 5;
                case 5:
                    return f < d.length ? (v = d[f],
                    [4, ye(t, v)]) : [3, 8];
                case 6:
                    h = E.sent(),
                    h instanceof Ce && (t = h),
                    this.emit("message_enriched", t, v),
                    E.label = 7;
                case 7:
                    return f++,
                    [3, 5];
                case 8:
                    return p = this.availableExtensions((i = t.event.integrations) !== null && i !== void 0 ? i : {}),
                    w = p.destinations,
                    g = p.after,
                    [4, new Promise(function(I, O) {
                        setTimeout(function() {
                            var P = w.map(function(k) {
                                return ye(t, k)
                            });
                            Promise.all(P).then(I).catch(O)
                        }, 0)
                    }
                    )];
                case 9:
                    return E.sent(),
                    t.stats.increment("message_delivered"),
                    this.emit("message_delivered", t),
                    S = g.map(function(I) {
                        return ye(t, I)
                    }),
                    [4, Promise.all(S)];
                case 10:
                    return E.sent(),
                    [2, t]
                }
            })
        })
    }
    ,
    e
}(it)
  , en = function(n, e) {
    var t = Date.now() - n;
    return Math.max((e ?? 300) - t, 0)
};
function tn(n, e, t, r) {
    return R(this, void 0, void 0, function() {
        var i, o;
        return q(this, function(u) {
            switch (u.label) {
            case 0:
                return t.emit("dispatch_start", n),
                i = Date.now(),
                e.isEmpty() ? [4, e.dispatchSingle(n)] : [3, 2];
            case 1:
                return o = u.sent(),
                [3, 4];
            case 2:
                return [4, e.dispatch(n)];
            case 3:
                o = u.sent(),
                u.label = 4;
            case 4:
                return r?.callback ? [4, Kr(o, r.callback, en(i, r.timeout))] : [3, 6];
            case 5:
                o = u.sent(),
                u.label = 6;
            case 6:
                return r?.debug && o.flush(),
                [2, o]
            }
        })
    })
}
function Yt(n, e, t, r) {
    var i, o = [n, e, t, r], u = j(n) ? n.event : n;
    if (!u || !oe(u))
        throw new Error("Event missing");
    var a = j(n) ? (i = n.properties) !== null && i !== void 0 ? i : {} : j(e) ? e : {}
      , c = {};
    de(t) || (c = t ?? {}),
    j(n) && !de(e) && (c = e ?? {});
    var s = o.find(de);
    return [u, a, c, s]
}
function He(n, e, t, r, i) {
    var o, u, a = null, c = null, s = [n, e, t, r, i], l = s.filter(oe);
    l[0] !== void 0 && l[1] !== void 0 && (a = l[0],
    c = l[1]),
    l.length === 1 && (a = null,
    c = l[0]);
    var f = s.find(de)
      , d = s.filter(function(p) {
        return c === null ? j(p) : j(p) || p === null
    })
      , v = (o = d[0]) !== null && o !== void 0 ? o : {}
      , h = (u = d[1]) !== null && u !== void 0 ? u : {};
    return [a, c, v, h, f]
}
var Ze = function(n) {
    return function() {
        for (var e, t, r, i = [], o = 0; o < arguments.length; o++)
            i[o] = arguments[o];
        for (var u = {}, a = ["callback", "options", "traits", "id"], c = 0, s = i; c < s.length; c++) {
            var l = s[c]
              , f = a.pop();
            if (f === "id") {
                if (oe(l) || Qe(l)) {
                    u.id = l.toString();
                    continue
                }
                if (l == null)
                    continue;
                f = a.pop()
            }
            if ((f === "traits" || f === "options") && (l == null || j(l)) && (u[f] = l),
            de(l)) {
                u.callback = l;
                break
            }
        }
        return [(e = u.id) !== null && e !== void 0 ? e : n.id(), (t = u.traits) !== null && t !== void 0 ? t : {}, (r = u.options) !== null && r !== void 0 ? r : {}, u.callback]
    }
};
function er(n, e, t, r) {
    Qe(n) && (n = n.toString()),
    Qe(e) && (e = e.toString());
    var i = [n, e, t, r]
      , o = i.filter(oe)
      , u = o[0]
      , a = u === void 0 ? n : u
      , c = o[1]
      , s = c === void 0 ? null : c
      , l = i.filter(j)[0]
      , f = l === void 0 ? {} : l
      , d = i.find(de);
    return [a, s, f, d]
}
function ut() {
    return typeof window < "u"
}
function zi() {
    return !ut()
}
function rn() {
    return ut() ? window.navigator.onLine : !0
}
function ge() {
    return !rn()
}
function nn(n, e) {
    return e = e || {},
    new Promise(function(t, r) {
        var i = new XMLHttpRequest
          , o = []
          , u = []
          , a = {}
          , c = function() {
            return {
                ok: (i.status / 100 | 0) == 2,
                statusText: i.statusText,
                status: i.status,
                url: i.responseURL,
                text: function() {
                    return Promise.resolve(i.responseText)
                },
                json: function() {
                    return Promise.resolve(i.responseText).then(JSON.parse)
                },
                blob: function() {
                    return Promise.resolve(new Blob([i.response]))
                },
                clone: c,
                headers: {
                    keys: function() {
                        return o
                    },
                    entries: function() {
                        return u
                    },
                    get: function(l) {
                        return a[l.toLowerCase()]
                    },
                    has: function(l) {
                        return l.toLowerCase()in a
                    }
                }
            }
        };
        for (var s in i.open(e.method || "get", n, !0),
        i.onload = function() {
            i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(l, f, d) {
                o.push(f = f.toLowerCase()),
                u.push([f, d]),
                a[f] = a[f] ? a[f] + "," + d : d
            }),
            t(c())
        }
        ,
        i.onerror = r,
        i.withCredentials = e.credentials == "include",
        e.headers)
            i.setRequestHeader(s, e.headers[s]);
        i.send(e.body || null)
    }
    )
}
var st = function() {
    return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : null
}
  , Fe = function() {
    for (var n = [], e = 0; e < arguments.length; e++)
        n[e] = arguments[e];
    var t = st();
    return (t && t.fetch || nn).apply(void 0, n)
}
  , je = "1.73.0"
  , tr = "api.segment.io/v1"
  , on = function(n, e, t) {
    var r = e.reduce(function(i, o) {
        var u = o.split(":")
          , a = u[0]
          , c = u[1];
        return i[a] = c,
        i
    }, {});
    return {
        type: "Counter",
        metric: n,
        value: 1,
        tags: y(y({}, r), {
            library: "analytics.js",
            library_version: "npm:next-".concat(je)
        })
    }
};
function Ne(n) {
    console.error("Error sending segment performance metrics", n)
}
var an = function() {
    function n(e) {
        var t = this, r, i, o, u, a;
        if (this.host = (r = e?.host) !== null && r !== void 0 ? r : tr,
        this.sampleRate = (i = e?.sampleRate) !== null && i !== void 0 ? i : 1,
        this.flushTimer = (o = e?.flushTimer) !== null && o !== void 0 ? o : 30 * 1e3,
        this.maxQueueSize = (u = e?.maxQueueSize) !== null && u !== void 0 ? u : 20,
        this.protocol = (a = e?.protocol) !== null && a !== void 0 ? a : "https",
        this.queue = [],
        this.sampleRate > 0) {
            var c = !1
              , s = function() {
                c || (c = !0,
                t.flush().catch(Ne),
                c = !1,
                setTimeout(s, t.flushTimer))
            };
            s()
        }
    }
    return n.prototype.increment = function(e, t) {
        if (e.includes("analytics_js.") && t.length !== 0 && !(Math.random() > this.sampleRate) && !(this.queue.length >= this.maxQueueSize)) {
            var r = on(e, t);
            this.queue.push(r),
            e.includes("error") && this.flush().catch(Ne)
        }
    }
    ,
    n.prototype.flush = function() {
        return m(this, void 0, void 0, function() {
            var e = this;
            return b(this, function(t) {
                switch (t.label) {
                case 0:
                    return this.queue.length <= 0 ? [2] : [4, this.send().catch(function(r) {
                        Ne(r),
                        e.sampleRate = 0
                    })];
                case 1:
                    return t.sent(),
                    [2]
                }
            })
        })
    }
    ,
    n.prototype.send = function() {
        return m(this, void 0, void 0, function() {
            var e, t, r;
            return b(this, function(i) {
                return e = {
                    series: this.queue
                },
                this.queue = [],
                t = {
                    "Content-Type": "text/plain"
                },
                r = "".concat(this.protocol, "://").concat(this.host, "/m"),
                [2, Fe(r, {
                    headers: t,
                    body: JSON.stringify(e),
                    method: "POST"
                })]
            })
        })
    }
    ,
    n
}(), be, rr = function(n) {
    z(e, n);
    function e() {
        return n !== null && n.apply(this, arguments) || this
    }
    return e.initRemoteMetrics = function(t) {
        be = new an(t)
    }
    ,
    e.prototype.increment = function(t, r, i) {
        n.prototype.increment.call(this, t, r, i),
        be?.increment(t, i ?? [])
    }
    ,
    e
}(Xt), N = function(n) {
    z(e, n);
    function e(t, r) {
        return n.call(this, t, r, new rr) || this
    }
    return e.system = function() {
        return new this({
            type: "track",
            event: "system"
        })
    }
    ,
    e
}(Ce), nr = "bpc", ir = function(n, e, t, r, i, o) {
    return {
        __t: nr,
        c: e,
        p: r,
        u: n,
        s: t,
        t: i,
        r: o
    }
}, un = Object.keys(ir("", "", "", "", "", ""));
function sn(n) {
    if (!j(n) || n.__t !== nr)
        return !1;
    for (var e in n)
        if (!un.includes(e))
            return !1;
    return !0
}
var cn = function(n, e) {
    return n.indexOf("?") > -1 ? n : n + e
}
  , ln = function(n) {
    var e = n.indexOf("#");
    return e === -1 ? n : n.slice(0, e)
}
  , fn = function(n) {
    try {
        return new URL(n).pathname
    } catch {
        return n[0] === "/" ? n : "/" + n
    }
}
  , or = function(n) {
    var e = n.c
      , t = n.p
      , r = n.s
      , i = n.u
      , o = n.r
      , u = n.t
      , a = e ? fn(e) : t
      , c = e ? cn(e, r) : ln(i);
    return {
        path: a,
        referrer: o,
        search: r,
        title: u,
        url: c
    }
}
  , ar = function() {
    var n = document.querySelector("link[rel='canonical']");
    return ir(location.href, n && n.getAttribute("href") || void 0, location.search, location.pathname, document.title, document.referrer)
}
  , dn = function() {
    return or(ar())
};
function vn(n, e) {
    return Object.assign.apply(Object, A([{}], e.map(function(t) {
        var r;
        if (n && Object.prototype.hasOwnProperty.call(n, t))
            return r = {},
            r[t] = n[t],
            r
    }), !1))
}
var se = function(n, e) {
    e === void 0 && (e = dn());
    var t = n.context, r;
    n.type === "page" && (r = n.properties && vn(n.properties, Object.keys(e)),
    n.properties = y(y(y({}, e), n.properties), n.name ? {
        name: n.name
    } : {})),
    t.page = y(y(y({}, e), r), t.page)
}
  , ur = function(n) {
    z(e, n);
    function e(t) {
        var r = n.call(this, {
            createMessageId: function() {
                return "ajs-next-".concat(Date.now(), "-").concat(at())
            },
            onEventMethodCall: function(i) {
                var o = i.options;
                r.maybeUpdateAnonId(o)
            },
            onFinishedEvent: function(i) {
                return r.addIdentity(i),
                i
            }
        }) || this;
        return r.user = t,
        r
    }
    return e.prototype.maybeUpdateAnonId = function(t) {
        t?.anonymousId && this.user.anonymousId(t.anonymousId)
    }
    ,
    e.prototype.addIdentity = function(t) {
        this.user.id() && (t.userId = this.user.id()),
        this.user.anonymousId() && (t.anonymousId = this.user.anonymousId())
    }
    ,
    e.prototype.track = function(t, r, i, o, u) {
        var a = n.prototype.track.call(this, t, r, i, o);
        return se(a, u),
        a
    }
    ,
    e.prototype.page = function(t, r, i, o, u, a) {
        var c = n.prototype.page.call(this, t, r, i, o, u);
        return se(c, a),
        c
    }
    ,
    e.prototype.screen = function(t, r, i, o, u, a) {
        var c = n.prototype.screen.call(this, t, r, i, o, u);
        return se(c, a),
        c
    }
    ,
    e.prototype.identify = function(t, r, i, o, u) {
        var a = n.prototype.identify.call(this, t, r, i, o);
        return se(a, u),
        a
    }
    ,
    e.prototype.group = function(t, r, i, o, u) {
        var a = n.prototype.group.call(this, t, r, i, o);
        return se(a, u),
        a
    }
    ,
    e.prototype.alias = function(t, r, i, o, u) {
        var a = n.prototype.alias.call(this, t, r, i, o);
        return se(a, u),
        a
    }
    ,
    e
}(zr)
  , sr = function(n) {
    return "addMiddleware"in n && n.type === "destination"
}
  , L = {
    getItem: function() {},
    setItem: function() {},
    removeItem: function() {}
};
try {
    L = ut() && window.localStorage ? window.localStorage : L
} catch (n) {
    console.warn("Unable to access localStorage", n)
}
function cr(n) {
    var e = L.getItem(n);
    return (e ? JSON.parse(e) : []).map(function(t) {
        return new N(t.event,t.id)
    })
}
function hn(n, e) {
    var t = cr(n)
      , r = A(A([], e, !0), t, !0)
      , i = r.reduce(function(o, u) {
        var a;
        return y(y({}, o), (a = {},
        a[u.id] = u,
        a))
    }, {});
    L.setItem(n, JSON.stringify(Object.values(i)))
}
function lr(n) {
    var e = L.getItem(n);
    return e ? JSON.parse(e) : {}
}
function pn(n, e) {
    var t = lr(n);
    L.setItem(n, JSON.stringify(y(y({}, t), e)))
}
function It(n) {
    L.removeItem(n)
}
var yn = function() {
    return new Date().getTime()
};
function Xe(n, e, t) {
    t === void 0 && (t = 0);
    var r = 50
      , i = "persisted-queue:v1:".concat(n, ":lock")
      , o = function(s) {
        return new Date().getTime() > s
    }
      , u = L.getItem(i)
      , a = u ? JSON.parse(u) : null
      , c = a === null || o(a);
    if (c) {
        L.setItem(i, JSON.stringify(yn() + r)),
        e(),
        L.removeItem(i);
        return
    }
    !c && t < 3 ? setTimeout(function() {
        Xe(n, e, t + 1)
    }, r) : console.error("Unable to retrieve lock")
}
var ct = function(n) {
    z(e, n);
    function e(t, r) {
        var i = n.call(this, t, []) || this
          , o = "persisted-queue:v1:".concat(r, ":items")
          , u = "persisted-queue:v1:".concat(r, ":seen")
          , a = []
          , c = {};
        return Xe(r, function() {
            try {
                a = cr(o),
                c = lr(u),
                It(o),
                It(u),
                i.queue = A(A([], a, !0), i.queue, !0),
                i.seen = y(y({}, c), i.seen)
            } catch (s) {
                console.error(s)
            }
        }),
        window.addEventListener("pagehide", function() {
            if (i.todo > 0) {
                var s = A(A([], i.queue, !0), i.future, !0);
                try {
                    Xe(r, function() {
                        hn(o, s),
                        pn(u, i.seen)
                    })
                } catch (l) {
                    console.error(l)
                }
            }
        }),
        i
    }
    return e
}(ot)
  , gn = function(n) {
    z(e, n);
    function e(t) {
        return n.call(this, typeof t == "string" ? new ct(4,t) : t) || this
    }
    return e.prototype.flush = function() {
        return m(this, void 0, void 0, function() {
            return b(this, function(t) {
                return ge() ? [2, []] : [2, n.prototype.flush.call(this)]
            })
        })
    }
    ,
    e
}(Yr);
function lt(n) {
    for (var e = n.constructor.prototype, t = 0, r = Object.getOwnPropertyNames(e); t < r.length; t++) {
        var i = r[t];
        if (i !== "constructor") {
            var o = Object.getOwnPropertyDescriptor(n.constructor.prototype, i);
            o && typeof o.value == "function" && (n[i] = n[i].bind(n))
        }
    }
    return n
}
/*! js-cookie v3.0.1 | MIT */
function _e(n) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t)
            n[r] = t[r]
    }
    return n
}
var mn = {
    read: function(n) {
        return n[0] === '"' && (n = n.slice(1, -1)),
        n.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function(n) {
        return encodeURIComponent(n).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
    }
};
function Ye(n, e) {
    function t(i, o, u) {
        if (!(typeof document > "u")) {
            u = _e({}, e, u),
            typeof u.expires == "number" && (u.expires = new Date(Date.now() + u.expires * 864e5)),
            u.expires && (u.expires = u.expires.toUTCString()),
            i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var a = "";
            for (var c in u)
                u[c] && (a += "; " + c,
                u[c] !== !0 && (a += "=" + u[c].split(";")[0]));
            return document.cookie = i + "=" + n.write(o, i) + a
        }
    }
    function r(i) {
        if (!(typeof document > "u" || arguments.length && !i)) {
            for (var o = document.cookie ? document.cookie.split("; ") : [], u = {}, a = 0; a < o.length; a++) {
                var c = o[a].split("=")
                  , s = c.slice(1).join("=");
                try {
                    var l = decodeURIComponent(c[0]);
                    if (u[l] = n.read(s, l),
                    i === l)
                        break
                } catch {}
            }
            return i ? u[i] : u
        }
    }
    return Object.create({
        set: t,
        get: r,
        remove: function(i, o) {
            t(i, "", _e({}, o, {
                expires: -1
            }))
        },
        withAttributes: function(i) {
            return Ye(this.converter, _e({}, this.attributes, i))
        },
        withConverter: function(i) {
            return Ye(_e({}, this.converter, i), this.attributes)
        }
    }, {
        attributes: {
            value: Object.freeze(e)
        },
        converter: {
            value: Object.freeze(n)
        }
    })
}
var B = Ye(mn, {
    path: "/"
});
function bn(n) {
    var e = n.hostname
      , t = e.split(".")
      , r = t[t.length - 1]
      , i = [];
    if (t.length === 4 && parseInt(r, 10) > 0 || t.length <= 1)
        return i;
    for (var o = t.length - 2; o >= 0; --o)
        i.push(t.slice(o).join("."));
    return i
}
function _n(n) {
    try {
        return new URL(n)
    } catch {
        return
    }
}
function fr(n) {
    var e = _n(n);
    if (e)
        for (var t = bn(e), r = 0; r < t.length; ++r) {
            var i = "__tld__"
              , o = t[r]
              , u = {
                domain: "." + o
            };
            try {
                if (B.set(i, "1", u),
                B.get(i))
                    return B.remove(i, u),
                    o
            } catch {
                return
            }
        }
}
var wn = 365
  , dr = function() {
    function n(e) {
        e === void 0 && (e = n.defaults),
        this.options = y(y({}, n.defaults), e)
    }
    return Object.defineProperty(n, "defaults", {
        get: function() {
            return {
                maxage: wn,
                domain: fr(window.location.href),
                path: "/",
                sameSite: "Lax"
            }
        },
        enumerable: !1,
        configurable: !0
    }),
    n.prototype.opts = function() {
        return {
            sameSite: this.options.sameSite,
            expires: this.options.maxage,
            domain: this.options.domain,
            path: this.options.path,
            secure: this.options.secure
        }
    }
    ,
    n.prototype.get = function(e) {
        var t;
        try {
            var r = B.get(e);
            if (r == null)
                return null;
            try {
                return (t = JSON.parse(r)) !== null && t !== void 0 ? t : null
            } catch {
                return r ?? null
            }
        } catch {
            return null
        }
    }
    ,
    n.prototype.set = function(e, t) {
        typeof t == "string" ? B.set(e, t, this.opts()) : t === null ? B.remove(e, this.opts()) : B.set(e, JSON.stringify(t), this.opts())
    }
    ,
    n.prototype.remove = function(e) {
        return B.remove(e, this.opts())
    }
    ,
    n
}()
  , Sn = function() {
    function n() {}
    return n.prototype.localStorageWarning = function(e, t) {
        console.warn("Unable to access ".concat(e, ", localStorage may be ").concat(t))
    }
    ,
    n.prototype.get = function(e) {
        var t;
        try {
            var r = localStorage.getItem(e);
            if (r === null)
                return null;
            try {
                return (t = JSON.parse(r)) !== null && t !== void 0 ? t : null
            } catch {
                return r ?? null
            }
        } catch {
            return this.localStorageWarning(e, "unavailable"),
            null
        }
    }
    ,
    n.prototype.set = function(e, t) {
        try {
            localStorage.setItem(e, JSON.stringify(t))
        } catch {
            this.localStorageWarning(e, "full")
        }
    }
    ,
    n.prototype.remove = function(e) {
        try {
            return localStorage.removeItem(e)
        } catch {
            this.localStorageWarning(e, "unavailable")
        }
    }
    ,
    n
}()
  , ft = function() {
    function n() {
        this.cache = {}
    }
    return n.prototype.get = function(e) {
        var t;
        return (t = this.cache[e]) !== null && t !== void 0 ? t : null
    }
    ,
    n.prototype.set = function(e, t) {
        this.cache[e] = t
    }
    ,
    n.prototype.remove = function(e) {
        delete this.cache[e]
    }
    ,
    n
}()
  , C = {
    Cookie: "cookie",
    LocalStorage: "localStorage",
    Memory: "memory"
};
function vr(n) {
    return n && n.stores && Array.isArray(n.stores) && n.stores.every(function(e) {
        return Object.values(C).includes(e)
    })
}
function En(n) {
    return typeof n == "object" && n.name !== void 0
}
var Le = function(n, e, t, r) {
    console.warn("".concat(n.constructor.name, ": Can't ").concat(e, ' key "').concat(t, '" | Err: ').concat(r))
}
  , K = function() {
    function n(e) {
        this.stores = e
    }
    return n.prototype.get = function(e) {
        for (var t = null, r = 0, i = this.stores; r < i.length; r++) {
            var o = i[r];
            try {
                if (t = o.get(e),
                t != null)
                    return t
            } catch (u) {
                Le(o, "get", e, u)
            }
        }
        return null
    }
    ,
    n.prototype.set = function(e, t) {
        this.stores.forEach(function(r) {
            try {
                r.set(e, t)
            } catch (i) {
                Le(r, "set", e, i)
            }
        })
    }
    ,
    n.prototype.clear = function(e) {
        this.stores.forEach(function(t) {
            try {
                t.remove(e)
            } catch (r) {
                Le(t, "remove", e, r)
            }
        })
    }
    ,
    n.prototype.getAndSync = function(e) {
        var t = this.get(e)
          , r = typeof t == "number" ? t.toString() : t;
        return this.set(e, r),
        r
    }
    ,
    n
}();
function et(n) {
    var e = n.map(function(t) {
        var r, i;
        switch (En(t) ? (r = t.name,
        i = t.settings) : r = t,
        r) {
        case C.Cookie:
            return new dr(i);
        case C.LocalStorage:
            return new Sn;
        case C.Memory:
            return new ft;
        default:
            throw new Error("Unknown Store Type: ".concat(t))
        }
    });
    return e
}
function hr(n, e) {
    return n.map(function(t) {
        return e && t === C.Cookie ? {
            name: t,
            settings: e
        } : t
    })
}
var J = {
    persist: !0,
    cookie: {
        key: "ajs_user_id",
        oldKey: "ajs_user"
    },
    localStorage: {
        key: "ajs_user_traits"
    }
}
  , dt = function() {
    function n(e, t) {
        e === void 0 && (e = J);
        var r = this, i, o, u, a;
        this.options = {},
        this.id = function(s) {
            if (r.options.disable)
                return null;
            var l = r.identityStore.getAndSync(r.idKey);
            if (s !== void 0) {
                r.identityStore.set(r.idKey, s);
                var f = s !== l && l !== null && s !== null;
                f && r.anonymousId(null)
            }
            var d = r.identityStore.getAndSync(r.idKey);
            if (d)
                return d;
            var v = r.legacyUserStore.get(J.cookie.oldKey);
            return v ? typeof v == "object" ? v.id : v : null
        }
        ,
        this.anonymousId = function(s) {
            var l, f;
            if (r.options.disable)
                return null;
            if (s === void 0) {
                var d = (l = r.identityStore.getAndSync(r.anonKey)) !== null && l !== void 0 ? l : (f = r.legacySIO()) === null || f === void 0 ? void 0 : f[0];
                if (d)
                    return d
            }
            return s === null ? (r.identityStore.set(r.anonKey, null),
            r.identityStore.getAndSync(r.anonKey)) : (r.identityStore.set(r.anonKey, s ?? at()),
            r.identityStore.getAndSync(r.anonKey))
        }
        ,
        this.traits = function(s) {
            var l;
            if (!r.options.disable)
                return s === null && (s = {}),
                s && r.traitsStore.set(r.traitsKey, s ?? {}),
                (l = r.traitsStore.get(r.traitsKey)) !== null && l !== void 0 ? l : {}
        }
        ,
        this.options = y(y({}, J), e),
        this.cookieOptions = t,
        this.idKey = (o = (i = e.cookie) === null || i === void 0 ? void 0 : i.key) !== null && o !== void 0 ? o : J.cookie.key,
        this.traitsKey = (a = (u = e.localStorage) === null || u === void 0 ? void 0 : u.key) !== null && a !== void 0 ? a : J.localStorage.key,
        this.anonKey = "ajs_anonymous_id",
        this.identityStore = this.createStorage(this.options, t),
        this.legacyUserStore = this.createStorage(this.options, t, function(s) {
            return s === C.Cookie
        }),
        this.traitsStore = this.createStorage(this.options, t, function(s) {
            return s !== C.Cookie
        });
        var c = this.legacyUserStore.get(J.cookie.oldKey);
        c && typeof c == "object" && (c.id && this.id(c.id),
        c.traits && this.traits(c.traits)),
        lt(this)
    }
    return n.prototype.legacySIO = function() {
        var e = this.legacyUserStore.get("_sio");
        if (!e)
            return null;
        var t = e.split("----")
          , r = t[0]
          , i = t[1];
        return [r, i]
    }
    ,
    n.prototype.identify = function(e, t) {
        if (!this.options.disable) {
            t = t ?? {};
            var r = this.id();
            (r === null || r === e) && (t = y(y({}, this.traits()), t)),
            e && this.id(e),
            this.traits(t)
        }
    }
    ,
    n.prototype.logout = function() {
        this.anonymousId(null),
        this.id(null),
        this.traits({})
    }
    ,
    n.prototype.reset = function() {
        this.logout(),
        this.identityStore.clear(this.idKey),
        this.identityStore.clear(this.anonKey),
        this.traitsStore.clear(this.traitsKey)
    }
    ,
    n.prototype.load = function() {
        return new n(this.options,this.cookieOptions)
    }
    ,
    n.prototype.save = function() {
        return !0
    }
    ,
    n.prototype.createStorage = function(e, t, r) {
        var i = [C.LocalStorage, C.Cookie, C.Memory];
        return e.disable ? new K([]) : e.persist ? (e.storage !== void 0 && e.storage !== null && vr(e.storage) && (i = e.storage.stores),
        e.localStorageFallbackDisabled && (i = i.filter(function(o) {
            return o !== C.LocalStorage
        })),
        r && (i = i.filter(r)),
        new K(et(hr(i, t)))) : new K([new ft])
    }
    ,
    n.defaults = J,
    n
}()
  , Ot = {
    persist: !0,
    cookie: {
        key: "ajs_group_id"
    },
    localStorage: {
        key: "ajs_group_properties"
    }
}
  , pr = function(n) {
    z(e, n);
    function e(t, r) {
        t === void 0 && (t = Ot);
        var i = n.call(this, y(y({}, Ot), t), r) || this;
        return i.anonymousId = function(o) {}
        ,
        lt(i),
        i
    }
    return e
}(dt)
  , vt = "analytics";
function ht() {
    return window[vt]
}
function In(n) {
    vt = n
}
function On(n) {
    window[vt] = n
}
var Pn = function(n) {
    return typeof n == "object" && n !== null && "then"in n && typeof n.then == "function"
}
  , yr = function(n, e, t) {
    t.getAndRemove(n).forEach(function(r) {
        Te(e, r).catch(console.error)
    })
}
  , An = function(n, e) {
    return m(void 0, void 0, void 0, function() {
        var t, r, i;
        return b(this, function(o) {
            switch (o.label) {
            case 0:
                t = 0,
                r = e.getAndRemove("addSourceMiddleware"),
                o.label = 1;
            case 1:
                return t < r.length ? (i = r[t],
                [4, Te(n, i).catch(console.error)]) : [3, 4];
            case 2:
                o.sent(),
                o.label = 3;
            case 3:
                return t++,
                [3, 1];
            case 4:
                return [2]
            }
        })
    })
}
  , xn = function(n, e) {
    return m(void 0, void 0, void 0, function() {
        var t, r, i;
        return b(this, function(o) {
            switch (o.label) {
            case 0:
                t = 0,
                r = e.getAndRemove("register"),
                o.label = 1;
            case 1:
                return t < r.length ? (i = r[t],
                [4, Te(n, i).catch(console.error)]) : [3, 4];
            case 2:
                o.sent(),
                o.label = 3;
            case 3:
                return t++,
                [3, 1];
            case 4:
                return [2]
            }
        })
    })
}
  , Mn = yr.bind(void 0, "on")
  , Cn = yr.bind(void 0, "setAnonymousId")
  , kn = function(n, e) {
    Object.keys(e.calls).forEach(function(t) {
        e.getAndRemove(t).forEach(function(r) {
            setTimeout(function() {
                Te(n, r).catch(console.error)
            }, 0)
        })
    })
}
  , ce = function(n) {
    if (gr(n)) {
        var e = n.pop();
        return or(e)
    }
}
  , gr = function(n) {
    var e = n[n.length - 1];
    return sn(e)
}
  , tt = function() {
    function n(e, t, r, i) {
        r === void 0 && (r = function() {}
        ),
        i === void 0 && (i = console.error),
        this.method = e,
        this.resolve = r,
        this.reject = i,
        this.called = !1,
        this.args = t
    }
    return n
}()
  , Dn = function() {
    function n() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        this._callMap = {},
        this.add.apply(this, e)
    }
    return Object.defineProperty(n.prototype, "calls", {
        get: function() {
            return this._pushSnippetWindowBuffer(),
            this._callMap
        },
        set: function(e) {
            this._callMap = e
        },
        enumerable: !1,
        configurable: !0
    }),
    n.prototype.get = function(e) {
        var t;
        return (t = this.calls[e]) !== null && t !== void 0 ? t : []
    }
    ,
    n.prototype.getAndRemove = function(e) {
        var t = this.get(e);
        return this.calls[e] = [],
        t
    }
    ,
    n.prototype.add = function() {
        for (var e = this, t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
        t.forEach(function(i) {
            var o = ["track", "screen", "alias", "group", "page", "identify"];
            o.includes(i.method) && !gr(i.args) && (i.args = A(A([], i.args, !0), [ar()], !1)),
            e.calls[i.method] ? e.calls[i.method].push(i) : e.calls[i.method] = [i]
        })
    }
    ,
    n.prototype.clear = function() {
        this._pushSnippetWindowBuffer(),
        this.calls = {}
    }
    ,
    n.prototype.toArray = function() {
        var e;
        return (e = []).concat.apply(e, Object.values(this.calls))
    }
    ,
    n.prototype._pushSnippetWindowBuffer = function() {}
    ,
    n
}();
function Te(n, e) {
    return m(this, void 0, void 0, function() {
        var t, r;
        return b(this, function(i) {
            switch (i.label) {
            case 0:
                return i.trys.push([0, 3, , 4]),
                e.called ? [2, void 0] : (e.called = !0,
                t = n[e.method].apply(n, e.args),
                Pn(t) ? [4, t] : [3, 2]);
            case 1:
                i.sent(),
                i.label = 2;
            case 2:
                return e.resolve(t),
                [3, 4];
            case 3:
                return r = i.sent(),
                e.reject(r),
                [3, 4];
            case 4:
                return [2]
            }
        })
    })
}
var Fn = function() {
    function n(e) {
        var t = this;
        this.trackSubmit = this._createMethod("trackSubmit"),
        this.trackClick = this._createMethod("trackClick"),
        this.trackLink = this._createMethod("trackLink"),
        this.pageView = this._createMethod("pageview"),
        this.identify = this._createMethod("identify"),
        this.reset = this._createMethod("reset"),
        this.group = this._createMethod("group"),
        this.track = this._createMethod("track"),
        this.ready = this._createMethod("ready"),
        this.alias = this._createMethod("alias"),
        this.debug = this._createChainableMethod("debug"),
        this.page = this._createMethod("page"),
        this.once = this._createChainableMethod("once"),
        this.off = this._createChainableMethod("off"),
        this.on = this._createChainableMethod("on"),
        this.addSourceMiddleware = this._createMethod("addSourceMiddleware"),
        this.setAnonymousId = this._createMethod("setAnonymousId"),
        this.addDestinationMiddleware = this._createMethod("addDestinationMiddleware"),
        this.screen = this._createMethod("screen"),
        this.register = this._createMethod("register"),
        this.deregister = this._createMethod("deregister"),
        this.user = this._createMethod("user"),
        this.VERSION = je,
        this._preInitBuffer = new Dn,
        this._promise = e(this._preInitBuffer),
        this._promise.then(function(r) {
            var i = r[0]
              , o = r[1];
            t.instance = i,
            t.ctx = o
        }).catch(function() {})
    }
    return n.prototype.then = function() {
        for (var e, t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
        return (e = this._promise).then.apply(e, t)
    }
    ,
    n.prototype.catch = function() {
        for (var e, t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
        return (e = this._promise).catch.apply(e, t)
    }
    ,
    n.prototype.finally = function() {
        for (var e, t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
        return (e = this._promise).finally.apply(e, t)
    }
    ,
    n.prototype._createMethod = function(e) {
        var t = this;
        return function() {
            for (var r, i = [], o = 0; o < arguments.length; o++)
                i[o] = arguments[o];
            if (t.instance) {
                var u = (r = t.instance)[e].apply(r, i);
                return Promise.resolve(u)
            }
            return new Promise(function(a, c) {
                t._preInitBuffer.add(new tt(e,i,a,c))
            }
            )
        }
    }
    ,
    n.prototype._createChainableMethod = function(e) {
        var t = this;
        return function() {
            for (var r, i = [], o = 0; o < arguments.length; o++)
                i[o] = arguments[o];
            return t.instance ? ((r = t.instance)[e].apply(r, i),
            t) : (t._preInitBuffer.add(new tt(e,i)),
            t)
        }
    }
    ,
    n
}()
  , U = "This is being deprecated and will be not be available in future releases of Analytics JS"
  , ze = st()
  , Be = ze?.analytics;
function jn(n, e, t) {
    e === void 0 && (e = !1),
    t === void 0 && (t = !1);
    var r = e ? 10 : 1
      , i = t ? new ot(r,[]) : new ct(r,n);
    return new gn(i)
}
var Tn = function() {
    function n(e) {
        var t;
        this.timeout = 300,
        this.writeKey = e.writeKey,
        this.cdnSettings = (t = e.cdnSettings) !== null && t !== void 0 ? t : {
            integrations: {},
            edgeFunction: {}
        }
    }
    return n
}();
function T() {
    console.warn(U)
}
var pt = function(n) {
    z(e, n);
    function e(t, r, i, o, u) {
        var a = this, c, s;
        a = n.call(this) || this,
        a._debug = !1,
        a.initialized = !1,
        a.user = function() {
            return a._user
        }
        ,
        a.init = a.initialize.bind(a),
        a.log = T,
        a.addIntegrationMiddleware = T,
        a.listeners = T,
        a.addEventListener = T,
        a.removeAllListeners = T,
        a.removeListener = T,
        a.removeEventListener = T,
        a.hasListeners = T,
        a.add = T,
        a.addIntegration = T;
        var l = r?.cookie
          , f = (c = r?.disableClientPersistence) !== null && c !== void 0 ? c : !1;
        a.settings = new Tn(t),
        a.queue = i ?? jn("".concat(t.writeKey, ":event-queue"), r?.retryQueue, f);
        var d = r?.storage;
        return a._universalStorage = a.createStore(f, d, l),
        a._user = o ?? new dt(y({
            persist: !f,
            storage: r?.storage
        }, r?.user),l).load(),
        a._group = u ?? new pr(y({
            persist: !f,
            storage: r?.storage
        }, r?.group),l).load(),
        a.eventFactory = new ur(a._user),
        a.integrations = (s = r?.integrations) !== null && s !== void 0 ? s : {},
        a.options = r ?? {},
        lt(a),
        a
    }
    return e.prototype.createStore = function(t, r, i) {
        return t ? new K([new ft]) : r && vr(r) ? new K(et(hr(r.stores, i))) : new K(et([C.LocalStorage, {
            name: C.Cookie,
            settings: i
        }, C.Memory]))
    }
    ,
    Object.defineProperty(e.prototype, "storage", {
        get: function() {
            return this._universalStorage
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.track = function() {
        for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
        return m(this, void 0, void 0, function() {
            var i, o, u, a, c, s, l, f = this;
            return b(this, function(d) {
                return i = ce(t),
                o = Yt.apply(void 0, t),
                u = o[0],
                a = o[1],
                c = o[2],
                s = o[3],
                l = this.eventFactory.track(u, a, c, this.integrations, i),
                [2, this._dispatch(l, s).then(function(v) {
                    return f.emit("track", u, v.event.properties, v.event.options),
                    v
                })]
            })
        })
    }
    ,
    e.prototype.page = function() {
        for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
        return m(this, void 0, void 0, function() {
            var i, o, u, a, c, s, l, f, d = this;
            return b(this, function(v) {
                return i = ce(t),
                o = He.apply(void 0, t),
                u = o[0],
                a = o[1],
                c = o[2],
                s = o[3],
                l = o[4],
                f = this.eventFactory.page(u, a, c, s, this.integrations, i),
                [2, this._dispatch(f, l).then(function(h) {
                    return d.emit("page", u, a, h.event.properties, h.event.options),
                    h
                })]
            })
        })
    }
    ,
    e.prototype.identify = function() {
        for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
        return m(this, void 0, void 0, function() {
            var i, o, u, a, c, s, l, f = this;
            return b(this, function(d) {
                return i = ce(t),
                o = Ze(this._user).apply(void 0, t),
                u = o[0],
                a = o[1],
                c = o[2],
                s = o[3],
                this._user.identify(u, a),
                l = this.eventFactory.identify(this._user.id(), this._user.traits(), c, this.integrations, i),
                [2, this._dispatch(l, s).then(function(v) {
                    return f.emit("identify", v.event.userId, v.event.traits, v.event.options),
                    v
                })]
            })
        })
    }
    ,
    e.prototype.group = function() {
        for (var t = this, r = [], i = 0; i < arguments.length; i++)
            r[i] = arguments[i];
        var o = ce(r);
        if (r.length === 0)
            return this._group;
        var u = Ze(this._group).apply(void 0, r)
          , a = u[0]
          , c = u[1]
          , s = u[2]
          , l = u[3];
        this._group.identify(a, c);
        var f = this._group.id()
          , d = this._group.traits()
          , v = this.eventFactory.group(f, d, s, this.integrations, o);
        return this._dispatch(v, l).then(function(h) {
            return t.emit("group", h.event.groupId, h.event.traits, h.event.options),
            h
        })
    }
    ,
    e.prototype.alias = function() {
        for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
        return m(this, void 0, void 0, function() {
            var i, o, u, a, c, s, l, f = this;
            return b(this, function(d) {
                return i = ce(t),
                o = er.apply(void 0, t),
                u = o[0],
                a = o[1],
                c = o[2],
                s = o[3],
                l = this.eventFactory.alias(u, a, c, this.integrations, i),
                [2, this._dispatch(l, s).then(function(v) {
                    return f.emit("alias", u, a, v.event.options),
                    v
                })]
            })
        })
    }
    ,
    e.prototype.screen = function() {
        for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
        return m(this, void 0, void 0, function() {
            var i, o, u, a, c, s, l, f, d = this;
            return b(this, function(v) {
                return i = ce(t),
                o = He.apply(void 0, t),
                u = o[0],
                a = o[1],
                c = o[2],
                s = o[3],
                l = o[4],
                f = this.eventFactory.screen(u, a, c, s, this.integrations, i),
                [2, this._dispatch(f, l).then(function(h) {
                    return d.emit("screen", u, a, h.event.properties, h.event.options),
                    h
                })]
            })
        })
    }
    ,
    e.prototype.trackClick = function() {
        for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
        return m(this, void 0, void 0, function() {
            var i, o;
            return b(this, function(u) {
                switch (u.label) {
                case 0:
                    return [4, F( () => import("./m1u9di7jj8hu2lt1.js"), __vite__mapDeps([0, 1, 2, 3]))];
                case 1:
                    return i = u.sent(),
                    [2, (o = i.link).call.apply(o, A([this], t, !1))]
                }
            })
        })
    }
    ,
    e.prototype.trackLink = function() {
        for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
        return m(this, void 0, void 0, function() {
            var i, o;
            return b(this, function(u) {
                switch (u.label) {
                case 0:
                    return [4, F( () => import("./m1u9di7jj8hu2lt1.js"), __vite__mapDeps([0, 1, 2, 3]))];
                case 1:
                    return i = u.sent(),
                    [2, (o = i.link).call.apply(o, A([this], t, !1))]
                }
            })
        })
    }
    ,
    e.prototype.trackSubmit = function() {
        for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
        return m(this, void 0, void 0, function() {
            var i, o;
            return b(this, function(u) {
                switch (u.label) {
                case 0:
                    return [4, F( () => import("./m1u9di7jj8hu2lt1.js"), __vite__mapDeps([0, 1, 2, 3]))];
                case 1:
                    return i = u.sent(),
                    [2, (o = i.form).call.apply(o, A([this], t, !1))]
                }
            })
        })
    }
    ,
    e.prototype.trackForm = function() {
        for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
        return m(this, void 0, void 0, function() {
            var i, o;
            return b(this, function(u) {
                switch (u.label) {
                case 0:
                    return [4, F( () => import("./m1u9di7jj8hu2lt1.js"), __vite__mapDeps([0, 1, 2, 3]))];
                case 1:
                    return i = u.sent(),
                    [2, (o = i.form).call.apply(o, A([this], t, !1))]
                }
            })
        })
    }
    ,
    e.prototype.register = function() {
        for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
        return m(this, void 0, void 0, function() {
            var i, o, u = this;
            return b(this, function(a) {
                switch (a.label) {
                case 0:
                    return i = N.system(),
                    o = t.map(function(c) {
                        return u.queue.register(i, c, u)
                    }),
                    [4, Promise.all(o)];
                case 1:
                    return a.sent(),
                    [2, i]
                }
            })
        })
    }
    ,
    e.prototype.deregister = function() {
        for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
        return m(this, void 0, void 0, function() {
            var i, o, u = this;
            return b(this, function(a) {
                switch (a.label) {
                case 0:
                    return i = N.system(),
                    o = t.map(function(c) {
                        var s = u.queue.plugins.find(function(l) {
                            return l.name === c
                        });
                        if (s)
                            return u.queue.deregister(i, s, u);
                        i.log("warn", "plugin ".concat(c, " not found"))
                    }),
                    [4, Promise.all(o)];
                case 1:
                    return a.sent(),
                    [2, i]
                }
            })
        })
    }
    ,
    e.prototype.debug = function(t) {
        return t === !1 && localStorage.getItem("debug") && localStorage.removeItem("debug"),
        this._debug = t,
        this
    }
    ,
    e.prototype.reset = function() {
        this._user.reset(),
        this._group.reset(),
        this.emit("reset")
    }
    ,
    e.prototype.timeout = function(t) {
        this.settings.timeout = t
    }
    ,
    e.prototype._dispatch = function(t, r) {
        return m(this, void 0, void 0, function() {
            var i;
            return b(this, function(o) {
                return i = new N(t),
                ge() && !this.options.retryQueue ? [2, i] : [2, tn(i, this.queue, this, {
                    callback: r,
                    debug: this._debug,
                    timeout: this.settings.timeout
                })]
            })
        })
    }
    ,
    e.prototype.addSourceMiddleware = function(t) {
        return m(this, void 0, void 0, function() {
            var r = this;
            return b(this, function(i) {
                switch (i.label) {
                case 0:
                    return [4, this.queue.criticalTasks.run(function() {
                        return m(r, void 0, void 0, function() {
                            var o, u, a;
                            return b(this, function(c) {
                                switch (c.label) {
                                case 0:
                                    return [4, F( () => Promise.resolve().then( () => ci), void 0)];
                                case 1:
                                    return o = c.sent().sourceMiddlewarePlugin,
                                    u = {},
                                    this.queue.plugins.forEach(function(s) {
                                        if (s.type === "destination")
                                            return u[s.name] = !0
                                    }),
                                    a = o(t, u),
                                    [4, this.register(a)];
                                case 2:
                                    return c.sent(),
                                    [2]
                                }
                            })
                        })
                    })];
                case 1:
                    return i.sent(),
                    [2, this]
                }
            })
        })
    }
    ,
    e.prototype.addDestinationMiddleware = function(t) {
        for (var r = [], i = 1; i < arguments.length; i++)
            r[i - 1] = arguments[i];
        return this.queue.plugins.filter(sr).forEach(function(o) {
            (t === "*" || o.name.toLowerCase() === t.toLowerCase()) && o.addMiddleware.apply(o, r)
        }),
        Promise.resolve(this)
    }
    ,
    e.prototype.setAnonymousId = function(t) {
        return this._user.anonymousId(t)
    }
    ,
    e.prototype.queryString = function(t) {
        return m(this, void 0, void 0, function() {
            var r;
            return b(this, function(i) {
                switch (i.label) {
                case 0:
                    return this.options.useQueryString === !1 ? [2, []] : [4, F( () => import("./jkj3t5vegfseom8s.js"), __vite__mapDeps([4, 1, 2, 3]))];
                case 1:
                    return r = i.sent().queryString,
                    [2, r(this, t)]
                }
            })
        })
    }
    ,
    e.prototype.use = function(t) {
        return t(this),
        this
    }
    ,
    e.prototype.ready = function(t) {
        return t === void 0 && (t = function(r) {
            return r
        }
        ),
        m(this, void 0, void 0, function() {
            return b(this, function(r) {
                return [2, Promise.all(this.queue.plugins.map(function(i) {
                    return i.ready ? i.ready() : Promise.resolve()
                })).then(function(i) {
                    return t(i),
                    i
                })]
            })
        })
    }
    ,
    e.prototype.noConflict = function() {
        return console.warn(U),
        On(Be ?? this),
        this
    }
    ,
    e.prototype.normalize = function(t) {
        return console.warn(U),
        this.eventFactory.normalize(t)
    }
    ,
    Object.defineProperty(e.prototype, "failedInitializations", {
        get: function() {
            return console.warn(U),
            this.queue.failedInitializations
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "VERSION", {
        get: function() {
            return je
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.initialize = function(t, r) {
        return m(this, void 0, void 0, function() {
            return b(this, function(i) {
                return console.warn(U),
                [2, Promise.resolve(this)]
            })
        })
    }
    ,
    e.prototype.pageview = function(t) {
        return m(this, void 0, void 0, function() {
            return b(this, function(r) {
                switch (r.label) {
                case 0:
                    return console.warn(U),
                    [4, this.page({
                        path: t
                    })];
                case 1:
                    return r.sent(),
                    [2, this]
                }
            })
        })
    }
    ,
    Object.defineProperty(e.prototype, "plugins", {
        get: function() {
            var t;
            return console.warn(U),
            (t = this._plugins) !== null && t !== void 0 ? t : {}
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "Integrations", {
        get: function() {
            console.warn(U);
            var t = this.queue.plugins.filter(function(r) {
                return r.type === "destination"
            }).reduce(function(r, i) {
                var o = "".concat(i.name.toLowerCase().replace(".", "").split(" ").join("-"), "Integration")
                  , u = window[o];
                if (!u)
                    return r;
                var a = u.Integration;
                return a ? (r[i.name] = a,
                r) : (r[i.name] = u,
                r)
            }, {});
            return t
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.push = function(t) {
        var r = this
          , i = t.shift();
        i && !r[i] || r[i].apply(this, t)
    }
    ,
    e
}(it)
  , Pt = function(n) {
    z(e, n);
    function e() {
        var t = n.call(this, {
            writeKey: ""
        }, {
            disableClientPersistence: !0
        }) || this;
        return t.initialized = !0,
        t
    }
    return e
}(pt)
  , At = {};
function mr() {
    return typeof process > "u" || !At ? {} : At
}
var Rn = /(https:\/\/.*)\/analytics\.js\/v1\/(?:.*?)\/(?:platform|analytics.*)?/, qn = function() {
    var n, e = Array.prototype.slice.call(document.querySelectorAll("script"));
    return e.forEach(function(t) {
        var r, i = (r = t.getAttribute("src")) !== null && r !== void 0 ? r : "", o = Rn.exec(i);
        o && o[1] && (n = o[1])
    }),
    n
}, Me, Nn = function() {
    var n, e = Me ?? ((n = ht()) === null || n === void 0 ? void 0 : n._cdn);
    return e
}, Ln = function(n) {
    var e = ht();
    e && (e._cdn = n),
    Me = n
}, yt = function() {
    var n = Nn();
    if (n)
        return n;
    var e = qn();
    return e || "https://cdn.segment.com"
}, Bi = function() {
    var n = yt();
    return "".concat(n, "/next-integrations")
};
function zn(n, e) {
    var t, r = Object.entries((t = e.integrations) !== null && t !== void 0 ? t : {}).reduce(function(i, o) {
        var u, a, c = o[0], s = o[1];
        return typeof s == "object" ? y(y({}, i), (u = {},
        u[c] = s,
        u)) : y(y({}, i), (a = {},
        a[c] = {},
        a))
    }, {});
    return Object.entries(n.integrations).reduce(function(i, o) {
        var u, a = o[0], c = o[1];
        return y(y({}, i), (u = {},
        u[a] = y(y({}, c), r[a]),
        u))
    }, {})
}
function Bn(n) {
    try {
        return decodeURIComponent(n.replace(/\+/g, " "))
    } catch {
        return n
    }
}
function Un(n) {
    return m(this, void 0, void 0, function() {
        var e;
        return b(this, function(t) {
            return e = navigator.userAgentData,
            e ? n ? [2, e.getHighEntropyValues(n).catch(function() {
                return e.toJSON()
            })] : [2, e.toJSON()] : [2, void 0]
        })
    })
}
var ve;
function Kn() {
    if (ve)
        return ve;
    var n = fr(window.location.href);
    return ve = {
        expires: 31536e6,
        secure: !1,
        path: "/"
    },
    n && (ve.domain = n),
    ve
}
function Vn(n) {
    var e = {
        btid: "dataxu",
        urid: "millennial-media"
    };
    n.startsWith("?") && (n = n.substring(1)),
    n = n.replace(/\?/g, "&");
    for (var t = n.split("&"), r = 0, i = t; r < i.length; r++) {
        var o = i[r]
          , u = o.split("=")
          , a = u[0]
          , c = u[1];
        if (e[a])
            return {
                id: c,
                type: e[a]
            }
    }
}
function Gn(n) {
    return n.startsWith("?") && (n = n.substring(1)),
    n = n.replace(/\?/g, "&"),
    n.split("&").reduce(function(e, t) {
        var r = t.split("=")
          , i = r[0]
          , o = r[1]
          , u = o === void 0 ? "" : o;
        if (i.includes("utm_") && i.length > 4) {
            var a = i.slice(4);
            a === "campaign" && (a = "name"),
            e[a] = Bn(u)
        }
        return e
    }, {})
}
function Jn() {
    var n = B.get("_ga");
    if (n && n.startsWith("amp"))
        return n
}
function Wn(n, e, t) {
    var r, i = new K(t ? [] : [new dr(Kn())]), o = i.get("s:context.referrer"), u = (r = Vn(n)) !== null && r !== void 0 ? r : o;
    u && (e && (e.referrer = y(y({}, e.referrer), u)),
    i.set("s:context.referrer", u))
}
var $n = function(n) {
    try {
        var e = new URLSearchParams;
        return Object.entries(n).forEach(function(t) {
            var r = t[0]
              , i = t[1];
            Array.isArray(i) ? i.forEach(function(o) {
                return e.append(r, o)
            }) : e.append(r, i)
        }),
        e.toString()
    } catch {
        return ""
    }
}
  , Qn = function() {
    function n() {
        var e = this;
        this.name = "Page Enrichment",
        this.type = "before",
        this.version = "0.1.0",
        this.isLoaded = function() {
            return !0
        }
        ,
        this.load = function(t, r) {
            return m(e, void 0, void 0, function() {
                var i;
                return b(this, function(o) {
                    switch (o.label) {
                    case 0:
                        this.instance = r,
                        o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]),
                        i = this,
                        [4, Un(this.instance.options.highEntropyValuesClientHints)];
                    case 2:
                        return i.userAgentData = o.sent(),
                        [3, 4];
                    case 3:
                        return o.sent(),
                        [3, 4];
                    case 4:
                        return [2, Promise.resolve()]
                    }
                })
            })
        }
        ,
        this.enrich = function(t) {
            var r, i, o = t.event.context, u = o.page.search || "", a = typeof u == "object" ? $n(u) : u;
            o.userAgent = navigator.userAgent,
            o.userAgentData = e.userAgentData;
            var c = navigator.userLanguage || navigator.language;
            typeof o.locale > "u" && typeof c < "u" && (o.locale = c),
            (r = o.library) !== null && r !== void 0 || (o.library = {
                name: "analytics.js",
                version: "".concat("npm:next", "-").concat(je)
            }),
            a && !o.campaign && (o.campaign = Gn(a));
            var s = Jn();
            s && (o.amp = {
                id: s
            }),
            Wn(a, o, (i = e.instance.options.disableClientPersistence) !== null && i !== void 0 ? i : !1);
            try {
                o.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
            } catch {}
            return t
        }
        ,
        this.track = this.enrich,
        this.identify = this.enrich,
        this.page = this.enrich,
        this.group = this.enrich,
        this.alias = this.enrich,
        this.screen = this.enrich
    }
    return n
}()
  , Hn = new Qn;
function br(n) {
    var e = Array.prototype.slice.call(window.document.querySelectorAll("script"));
    return e.find(function(t) {
        return t.src === n
    })
}
function Ue(n, e) {
    var t = br(n);
    if (t !== void 0) {
        var r = t?.getAttribute("status");
        if (r === "loaded")
            return Promise.resolve(t);
        if (r === "loading")
            return new Promise(function(i, o) {
                t.addEventListener("load", function() {
                    return i(t)
                }),
                t.addEventListener("error", function(u) {
                    return o(u)
                })
            }
            )
    }
    return new Promise(function(i, o) {
        var u, a = window.document.createElement("script");
        a.type = "text/javascript",
        a.src = n,
        a.async = !0,
        a.setAttribute("status", "loading");
        for (var c = 0, s = Object.entries({}); c < s.length; c++) {
            var l = s[c]
              , f = l[0]
              , d = l[1];
            a.setAttribute(f, d)
        }
        a.onload = function() {
            a.onerror = a.onload = null,
            a.setAttribute("status", "loaded"),
            i(a)
        }
        ,
        a.onerror = function() {
            a.onerror = a.onload = null,
            a.setAttribute("status", "error"),
            o(new Error("Failed to load ".concat(n)))
        }
        ;
        var v = window.document.querySelector("script");
        v ? (u = v.parentElement) === null || u === void 0 || u.insertBefore(a, v) : window.document.head.appendChild(a)
    }
    )
}
function Ui(n) {
    var e = br(n);
    return e !== void 0 && e.remove(),
    Promise.resolve()
}
var he = {}, W = {}, le = {}, Ke = {
    exports: {}
}, xt;
function Re() {
    return xt || (xt = 1,
    function(n) {
        n.exports = e(t),
        n.exports.find = n.exports,
        n.exports.replace = function(a, c, s, l) {
            return e(i).call(this, a, c, s, l),
            a
        }
        ,
        n.exports.del = function(a, c, s) {
            return e(r).call(this, a, c, null, s),
            a
        }
        ;
        function e(a) {
            return function(c, s, l, f) {
                var d = f && u(f.normalizer) ? f.normalizer : o;
                s = d(s);
                for (var v, h = !1; !h; )
                    p();
                function p() {
                    for (v in c) {
                        var w = d(v);
                        if (s.indexOf(w) === 0) {
                            var g = s.substr(w.length);
                            if (g.charAt(0) === "." || g.length === 0) {
                                s = g.substr(1);
                                var S = c[v];
                                if (S == null) {
                                    h = !0;
                                    return
                                }
                                if (!s.length) {
                                    h = !0;
                                    return
                                }
                                c = S;
                                return
                            }
                        }
                    }
                    v = void 0,
                    h = !0
                }
                if (v)
                    return c == null ? c : a(c, v, l)
            }
        }
        function t(a, c) {
            if (a.hasOwnProperty(c))
                return a[c]
        }
        function r(a, c) {
            return a.hasOwnProperty(c) && delete a[c],
            a
        }
        function i(a, c, s) {
            return a.hasOwnProperty(c) && (a[c] = s),
            a
        }
        function o(a) {
            return a.replace(/[^a-zA-Z0-9\.]+/g, "").toLowerCase()
        }
        function u(a) {
            return typeof a == "function"
        }
    }(Ke)),
    Ke.exports
}
var Mt;
function Zn() {
    if (Mt)
        return le;
    Mt = 1;
    var n = le && le.__importDefault || function(i) {
        return i && i.__esModule ? i : {
            default: i
        }
    }
    ;
    Object.defineProperty(le, "__esModule", {
        value: !0
    });
    var e = n(Re());
    function t(i, o) {
        return function() {
            var u = this.traits()
              , a = this.properties ? this.properties() : {};
            return e.default(u, "address." + i) || e.default(u, i) || (o ? e.default(u, "address." + o) : null) || (o ? e.default(u, o) : null) || e.default(a, "address." + i) || e.default(a, i) || (o ? e.default(a, "address." + o) : null) || (o ? e.default(a, o) : null)
        }
    }
    function r(i) {
        i.zip = t("postalCode", "zip"),
        i.country = t("country"),
        i.street = t("street"),
        i.state = t("state"),
        i.city = t("city"),
        i.region = t("region")
    }
    return le.default = r,
    le
}
var pe = {}, Ct;
function Xn() {
    if (Ct)
        return pe;
    Ct = 1,
    Object.defineProperty(pe, "__esModule", {
        value: !0
    }),
    pe.clone = void 0;
    function n(e) {
        if (typeof e != "object")
            return e;
        if (Object.prototype.toString.call(e) === "[object Object]") {
            var t = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = n(e[r]));
            return t
        } else
            return Array.isArray(e) ? e.map(n) : e
    }
    return pe.clone = n,
    pe
}
var we = {}, kt;
function Yn() {
    if (kt)
        return we;
    kt = 1,
    Object.defineProperty(we, "__esModule", {
        value: !0
    });
    var n = {
        Salesforce: !0
    };
    function e(t) {
        return !n[t]
    }
    return we.default = e,
    we
}
var Se = {}, Dt;
function _r() {
    if (Dt)
        return Se;
    Dt = 1;
    var n = /^(\d{4})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:([ T])(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
    return Se.parse = function(e) {
        var t = [1, 5, 6, 7, 11, 12]
          , r = n.exec(e)
          , i = 0;
        if (!r)
            return new Date(e);
        for (var o = 0, u; u = t[o]; o++)
            r[u] = parseInt(r[u], 10) || 0;
        r[2] = parseInt(r[2], 10) || 1,
        r[3] = parseInt(r[3], 10) || 1,
        r[2]--,
        r[8] = r[8] ? (r[8] + "00").substring(0, 3) : 0,
        r[4] === " " ? i = new Date().getTimezoneOffset() : r[9] !== "Z" && r[10] && (i = r[11] * 60 + r[12],
        r[10] === "+" && (i = 0 - i));
        var a = Date.UTC(r[1], r[2], r[3], r[5], r[6] + i, r[7], r[8]);
        return new Date(a)
    }
    ,
    Se.is = function(e, t) {
        return typeof e != "string" || t && /^\d{4}-\d{2}-\d{2}/.test(e) === !1 ? !1 : n.test(e)
    }
    ,
    Se
}
var Ee = {}, Ft;
function ei() {
    if (Ft)
        return Ee;
    Ft = 1;
    var n = /\d{13}/;
    return Ee.is = function(e) {
        return n.test(e)
    }
    ,
    Ee.parse = function(e) {
        return e = parseInt(e, 10),
        new Date(e)
    }
    ,
    Ee
}
var Ie = {}, jt;
function ti() {
    if (jt)
        return Ie;
    jt = 1;
    var n = /\d{10}/;
    return Ie.is = function(e) {
        return n.test(e)
    }
    ,
    Ie.parse = function(e) {
        var t = parseInt(e, 10) * 1e3;
        return new Date(t)
    }
    ,
    Ie
}
var Ve, Tt;
function gt() {
    if (Tt)
        return Ve;
    Tt = 1;
    var n = _r()
      , e = ei()
      , t = ti()
      , r = Object.prototype
      , i = r.toString;
    function o(c) {
        return i.call(c) === "[object Date]"
    }
    function u(c) {
        return i.call(c) === "[object Number]"
    }
    Ve = function(s) {
        return o(s) ? s : u(s) ? new Date(a(s)) : n.is(s) ? n.parse(s) : e.is(s) ? e.parse(s) : t.is(s) ? t.parse(s) : new Date(s)
    }
    ;
    function a(c) {
        return c < 315576e5 ? c * 1e3 : c
    }
    return Ve
}
var Ge, Rt;
function ri() {
    if (Rt)
        return Ge;
    Rt = 1;
    var n = _r();
    Ge = e;
    function e(i, o) {
        return o === void 0 && (o = !0),
        i && typeof i == "object" ? t(i, o) : Array.isArray(i) ? r(i, o) : n.is(i, o) ? n.parse(i) : i
    }
    function t(i, o) {
        return Object.keys(i).forEach(function(u) {
            i[u] = e(i[u], o)
        }),
        i
    }
    function r(i, o) {
        return i.forEach(function(u, a) {
            i[a] = e(u, o)
        }),
        i
    }
    return Ge
}
var qt;
function ae() {
    if (qt)
        return W;
    qt = 1;
    var n = W && W.__importDefault || function(l) {
        return l && l.__esModule ? l : {
            default: l
        }
    }
    ;
    Object.defineProperty(W, "__esModule", {
        value: !0
    }),
    W.Facade = void 0;
    var e = n(Zn())
      , t = Xn()
      , r = n(Yn())
      , i = n(gt())
      , o = n(Re())
      , u = n(ri());
    function a(l, f) {
        f = f || {},
        this.raw = t.clone(l),
        "clone"in f || (f.clone = !0),
        f.clone && (l = t.clone(l)),
        "traverse"in f || (f.traverse = !0),
        "timestamp"in l ? l.timestamp = i.default(l.timestamp) : l.timestamp = new Date,
        f.traverse && u.default(l),
        this.opts = f,
        this.obj = l
    }
    W.Facade = a;
    var c = a.prototype;
    c.proxy = function(l) {
        var f = l.split(".");
        l = f.shift();
        var d = this[l] || this.obj[l];
        return d && (typeof d == "function" && (d = d.call(this) || {}),
        f.length === 0 ? this.opts.clone ? s(d) : d : (d = o.default(d, f.join(".")),
        this.opts.clone ? s(d) : d))
    }
    ,
    c.field = function(l) {
        var f = this.obj[l];
        return this.opts.clone ? s(f) : f
    }
    ,
    a.proxy = function(l) {
        return function() {
            return this.proxy(l)
        }
    }
    ,
    a.field = function(l) {
        return function() {
            return this.field(l)
        }
    }
    ,
    a.multi = function(l) {
        return function() {
            var f = this.proxy(l + "s");
            if (Array.isArray(f))
                return f;
            var d = this.proxy(l);
            return d && (d = [this.opts.clone ? t.clone(d) : d]),
            d || []
        }
    }
    ,
    a.one = function(l) {
        return function() {
            var f = this.proxy(l);
            if (f)
                return f;
            var d = this.proxy(l + "s");
            if (Array.isArray(d))
                return d[0]
        }
    }
    ,
    c.json = function() {
        var l = this.opts.clone ? t.clone(this.obj) : this.obj;
        return this.type && (l.type = this.type()),
        l
    }
    ,
    c.rawEvent = function() {
        return this.raw
    }
    ,
    c.options = function(l) {
        var f = this.obj.options || this.obj.context || {}
          , d = this.opts.clone ? t.clone(f) : f;
        if (!l)
            return d;
        if (this.enabled(l)) {
            var v = this.integrations()
              , h = v[l] || o.default(v, l);
            return typeof h != "object" && (h = o.default(this.options(), l)),
            typeof h == "object" ? h : {}
        }
    }
    ,
    c.context = c.options,
    c.enabled = function(l) {
        var f = this.proxy("options.providers.all");
        typeof f != "boolean" && (f = this.proxy("options.all")),
        typeof f != "boolean" && (f = this.proxy("integrations.all")),
        typeof f != "boolean" && (f = !0);
        var d = f && r.default(l)
          , v = this.integrations();
        if (v.providers && v.providers.hasOwnProperty(l) && (d = v.providers[l]),
        v.hasOwnProperty(l)) {
            var h = v[l];
            typeof h == "boolean" ? d = h : d = !0
        }
        return !!d
    }
    ,
    c.integrations = function() {
        return this.obj.integrations || this.proxy("options.providers") || this.options()
    }
    ,
    c.active = function() {
        var l = this.proxy("options.active");
        return l == null && (l = !0),
        l
    }
    ,
    c.anonymousId = function() {
        return this.field("anonymousId") || this.field("sessionId")
    }
    ,
    c.sessionId = c.anonymousId,
    c.groupId = a.proxy("options.groupId"),
    c.traits = function(l) {
        var f = this.proxy("options.traits") || {}
          , d = this.userId();
        l = l || {},
        d && (f.id = d);
        for (var v in l)
            if (Object.prototype.hasOwnProperty.call(l, v)) {
                var h = this[v] == null ? this.proxy("options.traits." + v) : this[v]();
                if (h == null)
                    continue;
                f[l[v]] = h,
                delete f[v]
            }
        return f
    }
    ,
    c.library = function() {
        var l = this.proxy("options.library");
        return l ? typeof l == "string" ? {
            name: l,
            version: null
        } : l : {
            name: "unknown",
            version: null
        }
    }
    ,
    c.device = function() {
        var l = this.proxy("context.device");
        (typeof l != "object" || l === null) && (l = {});
        var f = this.library().name;
        return l.type || (f.indexOf("ios") > -1 && (l.type = "ios"),
        f.indexOf("android") > -1 && (l.type = "android")),
        l
    }
    ,
    c.userAgent = a.proxy("context.userAgent"),
    c.timezone = a.proxy("context.timezone"),
    c.timestamp = a.field("timestamp"),
    c.channel = a.field("channel"),
    c.ip = a.proxy("context.ip"),
    c.userId = a.field("userId"),
    e.default(c);
    function s(l) {
        return t.clone(l)
    }
    return W
}
var $ = {}, Oe = {
    exports: {}
}, Nt;
function ue() {
    return Nt || (Nt = 1,
    typeof Object.create == "function" ? Oe.exports = function(e, t) {
        t && (e.super_ = t,
        e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }))
    }
    : Oe.exports = function(e, t) {
        if (t) {
            e.super_ = t;
            var r = function() {};
            r.prototype = t.prototype,
            e.prototype = new r,
            e.prototype.constructor = e
        }
    }
    ),
    Oe.exports
}
var Lt;
function ni() {
    if (Lt)
        return $;
    Lt = 1;
    var n = $ && $.__importDefault || function(i) {
        return i && i.__esModule ? i : {
            default: i
        }
    }
    ;
    Object.defineProperty($, "__esModule", {
        value: !0
    }),
    $.Alias = void 0;
    var e = n(ue())
      , t = ae();
    function r(i, o) {
        t.Facade.call(this, i, o)
    }
    return $.Alias = r,
    e.default(r, t.Facade),
    r.prototype.action = function() {
        return "alias"
    }
    ,
    r.prototype.type = r.prototype.action,
    r.prototype.previousId = function() {
        return this.field("previousId") || this.field("from")
    }
    ,
    r.prototype.from = r.prototype.previousId,
    r.prototype.userId = function() {
        return this.field("userId") || this.field("to")
    }
    ,
    r.prototype.to = r.prototype.userId,
    $
}
var Q = {}, Pe = {}, zt;
function qe() {
    if (zt)
        return Pe;
    zt = 1,
    Object.defineProperty(Pe, "__esModule", {
        value: !0
    });
    var n = /.+\@.+\..+/;
    function e(t) {
        return n.test(t)
    }
    return Pe.default = e,
    Pe
}
var Bt;
function ii() {
    if (Bt)
        return Q;
    Bt = 1;
    var n = Q && Q.__importDefault || function(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    ;
    Object.defineProperty(Q, "__esModule", {
        value: !0
    }),
    Q.Group = void 0;
    var e = n(ue())
      , t = n(qe())
      , r = n(gt())
      , i = ae();
    function o(a, c) {
        i.Facade.call(this, a, c)
    }
    Q.Group = o,
    e.default(o, i.Facade);
    var u = o.prototype;
    return u.action = function() {
        return "group"
    }
    ,
    u.type = u.action,
    u.groupId = i.Facade.field("groupId"),
    u.created = function() {
        var a = this.proxy("traits.createdAt") || this.proxy("traits.created") || this.proxy("properties.createdAt") || this.proxy("properties.created");
        if (a)
            return r.default(a)
    }
    ,
    u.email = function() {
        var a = this.proxy("traits.email");
        if (a)
            return a;
        var c = this.groupId();
        if (t.default(c))
            return c
    }
    ,
    u.traits = function(a) {
        var c = this.properties()
          , s = this.groupId();
        a = a || {},
        s && (c.id = s);
        for (var l in a)
            if (Object.prototype.hasOwnProperty.call(a, l)) {
                var f = this[l] == null ? this.proxy("traits." + l) : this[l]();
                if (f == null)
                    continue;
                c[a[l]] = f,
                delete c[l]
            }
        return c
    }
    ,
    u.name = i.Facade.proxy("traits.name"),
    u.industry = i.Facade.proxy("traits.industry"),
    u.employees = i.Facade.proxy("traits.employees"),
    u.properties = function() {
        return this.field("traits") || this.field("properties") || {}
    }
    ,
    Q
}
var H = {}, Ut;
function wr() {
    if (Ut)
        return H;
    Ut = 1;
    var n = H && H.__importDefault || function(s) {
        return s && s.__esModule ? s : {
            default: s
        }
    }
    ;
    Object.defineProperty(H, "__esModule", {
        value: !0
    }),
    H.Identify = void 0;
    var e = ae()
      , t = n(Re())
      , r = n(ue())
      , i = n(qe())
      , o = n(gt())
      , u = function(s) {
        return s.trim()
    };
    function a(s, l) {
        e.Facade.call(this, s, l)
    }
    H.Identify = a,
    r.default(a, e.Facade);
    var c = a.prototype;
    return c.action = function() {
        return "identify"
    }
    ,
    c.type = c.action,
    c.traits = function(s) {
        var l = this.field("traits") || {}
          , f = this.userId();
        s = s || {},
        f && (l.id = f);
        for (var d in s) {
            var v = this[d] == null ? this.proxy("traits." + d) : this[d]();
            v != null && (l[s[d]] = v,
            d !== s[d] && delete l[d])
        }
        return l
    }
    ,
    c.email = function() {
        var s = this.proxy("traits.email");
        if (s)
            return s;
        var l = this.userId();
        if (i.default(l))
            return l
    }
    ,
    c.created = function() {
        var s = this.proxy("traits.created") || this.proxy("traits.createdAt");
        if (s)
            return o.default(s)
    }
    ,
    c.companyCreated = function() {
        var s = this.proxy("traits.company.created") || this.proxy("traits.company.createdAt");
        if (s)
            return o.default(s)
    }
    ,
    c.companyName = function() {
        return this.proxy("traits.company.name")
    }
    ,
    c.name = function() {
        var s = this.proxy("traits.name");
        if (typeof s == "string")
            return u(s);
        var l = this.firstName()
          , f = this.lastName();
        if (l && f)
            return u(l + " " + f)
    }
    ,
    c.firstName = function() {
        var s = this.proxy("traits.firstName");
        if (typeof s == "string")
            return u(s);
        var l = this.proxy("traits.name");
        if (typeof l == "string")
            return u(l).split(" ")[0]
    }
    ,
    c.lastName = function() {
        var s = this.proxy("traits.lastName");
        if (typeof s == "string")
            return u(s);
        var l = this.proxy("traits.name");
        if (typeof l == "string") {
            var f = u(l).indexOf(" ");
            if (f !== -1)
                return u(l.substr(f + 1))
        }
    }
    ,
    c.uid = function() {
        return this.userId() || this.username() || this.email()
    }
    ,
    c.description = function() {
        return this.proxy("traits.description") || this.proxy("traits.background")
    }
    ,
    c.age = function() {
        var s = this.birthday()
          , l = t.default(this.traits(), "age");
        if (l != null)
            return l;
        if (s instanceof Date) {
            var f = new Date;
            return f.getFullYear() - s.getFullYear()
        }
    }
    ,
    c.avatar = function() {
        var s = this.traits();
        return t.default(s, "avatar") || t.default(s, "photoUrl") || t.default(s, "avatarUrl")
    }
    ,
    c.position = function() {
        var s = this.traits();
        return t.default(s, "position") || t.default(s, "jobTitle")
    }
    ,
    c.username = e.Facade.proxy("traits.username"),
    c.website = e.Facade.one("traits.website"),
    c.websites = e.Facade.multi("traits.website"),
    c.phone = e.Facade.one("traits.phone"),
    c.phones = e.Facade.multi("traits.phone"),
    c.address = e.Facade.proxy("traits.address"),
    c.gender = e.Facade.proxy("traits.gender"),
    c.birthday = e.Facade.proxy("traits.birthday"),
    H
}
var Z = {}, Kt;
function mt() {
    if (Kt)
        return Z;
    Kt = 1;
    var n = Z && Z.__importDefault || function(s) {
        return s && s.__esModule ? s : {
            default: s
        }
    }
    ;
    Object.defineProperty(Z, "__esModule", {
        value: !0
    }),
    Z.Track = void 0;
    var e = n(ue())
      , t = ae()
      , r = wr()
      , i = n(qe())
      , o = n(Re());
    function u(s, l) {
        t.Facade.call(this, s, l)
    }
    Z.Track = u,
    e.default(u, t.Facade);
    var a = u.prototype;
    a.action = function() {
        return "track"
    }
    ,
    a.type = a.action,
    a.event = t.Facade.field("event"),
    a.value = t.Facade.proxy("properties.value"),
    a.category = t.Facade.proxy("properties.category"),
    a.id = t.Facade.proxy("properties.id"),
    a.productId = function() {
        return this.proxy("properties.product_id") || this.proxy("properties.productId")
    }
    ,
    a.promotionId = function() {
        return this.proxy("properties.promotion_id") || this.proxy("properties.promotionId")
    }
    ,
    a.cartId = function() {
        return this.proxy("properties.cart_id") || this.proxy("properties.cartId")
    }
    ,
    a.checkoutId = function() {
        return this.proxy("properties.checkout_id") || this.proxy("properties.checkoutId")
    }
    ,
    a.paymentId = function() {
        return this.proxy("properties.payment_id") || this.proxy("properties.paymentId")
    }
    ,
    a.couponId = function() {
        return this.proxy("properties.coupon_id") || this.proxy("properties.couponId")
    }
    ,
    a.wishlistId = function() {
        return this.proxy("properties.wishlist_id") || this.proxy("properties.wishlistId")
    }
    ,
    a.reviewId = function() {
        return this.proxy("properties.review_id") || this.proxy("properties.reviewId")
    }
    ,
    a.orderId = function() {
        return this.proxy("properties.id") || this.proxy("properties.order_id") || this.proxy("properties.orderId")
    }
    ,
    a.sku = t.Facade.proxy("properties.sku"),
    a.tax = t.Facade.proxy("properties.tax"),
    a.name = t.Facade.proxy("properties.name"),
    a.price = t.Facade.proxy("properties.price"),
    a.total = t.Facade.proxy("properties.total"),
    a.repeat = t.Facade.proxy("properties.repeat"),
    a.coupon = t.Facade.proxy("properties.coupon"),
    a.shipping = t.Facade.proxy("properties.shipping"),
    a.discount = t.Facade.proxy("properties.discount"),
    a.shippingMethod = function() {
        return this.proxy("properties.shipping_method") || this.proxy("properties.shippingMethod")
    }
    ,
    a.paymentMethod = function() {
        return this.proxy("properties.payment_method") || this.proxy("properties.paymentMethod")
    }
    ,
    a.description = t.Facade.proxy("properties.description"),
    a.plan = t.Facade.proxy("properties.plan"),
    a.subtotal = function() {
        var s = o.default(this.properties(), "subtotal")
          , l = this.total() || this.revenue();
        if (s)
            return s;
        if (!l)
            return 0;
        if (this.total()) {
            var f = this.tax();
            f && (l -= f),
            f = this.shipping(),
            f && (l -= f),
            f = this.discount(),
            f && (l += f)
        }
        return l
    }
    ,
    a.products = function() {
        var s = this.properties()
          , l = o.default(s, "products");
        return Array.isArray(l) ? l.filter(function(f) {
            return f !== null
        }) : []
    }
    ,
    a.quantity = function() {
        var s = this.obj.properties || {};
        return s.quantity || 1
    }
    ,
    a.currency = function() {
        var s = this.obj.properties || {};
        return s.currency || "USD"
    }
    ,
    a.referrer = function() {
        return this.proxy("context.referrer.url") || this.proxy("context.page.referrer") || this.proxy("properties.referrer")
    }
    ,
    a.query = t.Facade.proxy("options.query"),
    a.properties = function(s) {
        var l = this.field("properties") || {};
        s = s || {};
        for (var f in s)
            if (Object.prototype.hasOwnProperty.call(s, f)) {
                var d = this[f] == null ? this.proxy("properties." + f) : this[f]();
                if (d == null)
                    continue;
                l[s[f]] = d,
                delete l[f]
            }
        return l
    }
    ,
    a.username = function() {
        return this.proxy("traits.username") || this.proxy("properties.username") || this.userId() || this.sessionId()
    }
    ,
    a.email = function() {
        var s = this.proxy("traits.email") || this.proxy("properties.email") || this.proxy("options.traits.email");
        if (s)
            return s;
        var l = this.userId();
        if (i.default(l))
            return l
    }
    ,
    a.revenue = function() {
        var s = this.proxy("properties.revenue")
          , l = this.event()
          , f = /^[ _]?completed[ _]?order[ _]?|^[ _]?order[ _]?completed[ _]?$/i;
        return !s && l && l.match(f) && (s = this.proxy("properties.total")),
        c(s)
    }
    ,
    a.cents = function() {
        var s = this.revenue();
        return typeof s != "number" ? this.value() || 0 : s * 100
    }
    ,
    a.identify = function() {
        var s = this.json();
        return s.traits = this.traits(),
        new r.Identify(s,this.opts)
    }
    ;
    function c(s) {
        if (s) {
            if (typeof s == "number")
                return s;
            if (typeof s == "string" && (s = s.replace(/\$/g, ""),
            s = parseFloat(s),
            !isNaN(s)))
                return s
        }
    }
    return Z
}
var X = {}, Vt;
function Sr() {
    if (Vt)
        return X;
    Vt = 1;
    var n = X && X.__importDefault || function(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    ;
    Object.defineProperty(X, "__esModule", {
        value: !0
    }),
    X.Page = void 0;
    var e = n(ue())
      , t = ae()
      , r = mt()
      , i = n(qe());
    function o(a, c) {
        t.Facade.call(this, a, c)
    }
    X.Page = o,
    e.default(o, t.Facade);
    var u = o.prototype;
    return u.action = function() {
        return "page"
    }
    ,
    u.type = u.action,
    u.category = t.Facade.field("category"),
    u.name = t.Facade.field("name"),
    u.title = t.Facade.proxy("properties.title"),
    u.path = t.Facade.proxy("properties.path"),
    u.url = t.Facade.proxy("properties.url"),
    u.referrer = function() {
        return this.proxy("context.referrer.url") || this.proxy("context.page.referrer") || this.proxy("properties.referrer")
    }
    ,
    u.properties = function(a) {
        var c = this.field("properties") || {}
          , s = this.category()
          , l = this.name();
        a = a || {},
        s && (c.category = s),
        l && (c.name = l);
        for (var f in a)
            if (Object.prototype.hasOwnProperty.call(a, f)) {
                var d = this[f] == null ? this.proxy("properties." + f) : this[f]();
                if (d == null)
                    continue;
                c[a[f]] = d,
                f !== a[f] && delete c[f]
            }
        return c
    }
    ,
    u.email = function() {
        var a = this.proxy("context.traits.email") || this.proxy("properties.email");
        if (a)
            return a;
        var c = this.userId();
        if (i.default(c))
            return c
    }
    ,
    u.fullName = function() {
        var a = this.category()
          , c = this.name();
        return c && a ? a + " " + c : c
    }
    ,
    u.event = function(a) {
        return a ? "Viewed " + a + " Page" : "Loaded a Page"
    }
    ,
    u.track = function(a) {
        var c = this.json();
        return c.event = this.event(a),
        c.timestamp = this.timestamp(),
        c.properties = this.properties(),
        new r.Track(c,this.opts)
    }
    ,
    X
}
var Y = {}, Gt;
function oi() {
    if (Gt)
        return Y;
    Gt = 1;
    var n = Y && Y.__importDefault || function(o) {
        return o && o.__esModule ? o : {
            default: o
        }
    }
    ;
    Object.defineProperty(Y, "__esModule", {
        value: !0
    }),
    Y.Screen = void 0;
    var e = n(ue())
      , t = Sr()
      , r = mt();
    function i(o, u) {
        t.Page.call(this, o, u)
    }
    return Y.Screen = i,
    e.default(i, t.Page),
    i.prototype.action = function() {
        return "screen"
    }
    ,
    i.prototype.type = i.prototype.action,
    i.prototype.event = function(o) {
        return o ? "Viewed " + o + " Screen" : "Loaded a Screen"
    }
    ,
    i.prototype.track = function(o) {
        var u = this.json();
        return u.event = this.event(o),
        u.timestamp = this.timestamp(),
        u.properties = this.properties(),
        new r.Track(u,this.opts)
    }
    ,
    Y
}
var ee = {}, Jt;
function ai() {
    if (Jt)
        return ee;
    Jt = 1;
    var n = ee && ee.__importDefault || function(i) {
        return i && i.__esModule ? i : {
            default: i
        }
    }
    ;
    Object.defineProperty(ee, "__esModule", {
        value: !0
    }),
    ee.Delete = void 0;
    var e = n(ue())
      , t = ae();
    function r(i, o) {
        t.Facade.call(this, i, o)
    }
    return ee.Delete = r,
    e.default(r, t.Facade),
    r.prototype.type = function() {
        return "delete"
    }
    ,
    ee
}
var Wt;
function ui() {
    return Wt || (Wt = 1,
    function(n) {
        var e = he && he.__assign || function() {
            return e = Object.assign || function(l) {
                for (var f, d = 1, v = arguments.length; d < v; d++) {
                    f = arguments[d];
                    for (var h in f)
                        Object.prototype.hasOwnProperty.call(f, h) && (l[h] = f[h])
                }
                return l
            }
            ,
            e.apply(this, arguments)
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.Delete = n.Screen = n.Page = n.Track = n.Identify = n.Group = n.Alias = n.Facade = void 0;
        var t = ae();
        Object.defineProperty(n, "Facade", {
            enumerable: !0,
            get: function() {
                return t.Facade
            }
        });
        var r = ni();
        Object.defineProperty(n, "Alias", {
            enumerable: !0,
            get: function() {
                return r.Alias
            }
        });
        var i = ii();
        Object.defineProperty(n, "Group", {
            enumerable: !0,
            get: function() {
                return i.Group
            }
        });
        var o = wr();
        Object.defineProperty(n, "Identify", {
            enumerable: !0,
            get: function() {
                return o.Identify
            }
        });
        var u = mt();
        Object.defineProperty(n, "Track", {
            enumerable: !0,
            get: function() {
                return u.Track
            }
        });
        var a = Sr();
        Object.defineProperty(n, "Page", {
            enumerable: !0,
            get: function() {
                return a.Page
            }
        });
        var c = oi();
        Object.defineProperty(n, "Screen", {
            enumerable: !0,
            get: function() {
                return c.Screen
            }
        });
        var s = ai();
        Object.defineProperty(n, "Delete", {
            enumerable: !0,
            get: function() {
                return s.Delete
            }
        }),
        n.default = e(e({}, t.Facade), {
            Alias: r.Alias,
            Group: i.Group,
            Identify: o.Identify,
            Track: u.Track,
            Page: a.Page,
            Screen: c.Screen,
            Delete: s.Delete
        })
    }(he)),
    he
}
var te = ui();
function ke(n, e) {
    var t = new te.Facade(n,e);
    return n.type === "track" && (t = new te.Track(n,e)),
    n.type === "identify" && (t = new te.Identify(n,e)),
    n.type === "page" && (t = new te.Page(n,e)),
    n.type === "alias" && (t = new te.Alias(n,e)),
    n.type === "group" && (t = new te.Group(n,e)),
    n.type === "screen" && (t = new te.Screen(n,e)),
    Object.defineProperty(t, "obj", {
        value: n,
        writable: !0
    }),
    t
}
function Er(n, e, t) {
    return m(this, void 0, void 0, function() {
        function r(s, l) {
            return m(this, void 0, void 0, function() {
                var f, d, v;
                return b(this, function(h) {
                    switch (h.label) {
                    case 0:
                        return f = !1,
                        d = null,
                        [4, l({
                            payload: ke(s, {
                                clone: !0,
                                traverse: !1
                            }),
                            integration: n,
                            next: function(p) {
                                f = !0,
                                p === null && (d = null),
                                p && (d = p.obj)
                            }
                        })];
                    case 1:
                        return h.sent(),
                        !f && d !== null && (d = d,
                        d.integrations = y(y({}, s.integrations), (v = {},
                        v[n] = !1,
                        v))),
                        [2, d]
                    }
                })
            })
        }
        var i, o, u, a, c;
        return b(this, function(s) {
            switch (s.label) {
            case 0:
                i = ke(e, {
                    clone: !0,
                    traverse: !1
                }).rawEvent(),
                o = 0,
                u = t,
                s.label = 1;
            case 1:
                return o < u.length ? (a = u[o],
                [4, r(i, a)]) : [3, 4];
            case 2:
                if (c = s.sent(),
                c === null)
                    return [2, null];
                i = c,
                s.label = 3;
            case 3:
                return o++,
                [3, 1];
            case 4:
                return [2, i]
            }
        })
    })
}
function si(n, e) {
    function t(r) {
        return m(this, void 0, void 0, function() {
            var i;
            return b(this, function(o) {
                switch (o.label) {
                case 0:
                    return i = !1,
                    [4, n({
                        payload: ke(r.event, {
                            clone: !0,
                            traverse: !1
                        }),
                        integrations: e ?? {},
                        next: function(u) {
                            i = !0,
                            u && (r.event = u.obj)
                        }
                    })];
                case 1:
                    if (o.sent(),
                    !i)
                        throw new ie({
                            retry: !1,
                            type: "middleware_cancellation",
                            reason: "Middleware `next` function skipped"
                        });
                    return [2, r]
                }
            })
        })
    }
    return {
        name: "Source Middleware ".concat(n.name),
        type: "before",
        version: "0.1.0",
        isLoaded: function() {
            return !0
        },
        load: function(r) {
            return Promise.resolve(r)
        },
        track: t,
        page: t,
        identify: t,
        alias: t,
        group: t
    }
}
const ci = Object.freeze(Object.defineProperty({
    __proto__: null,
    applyDestinationMiddleware: Er,
    sourceMiddlewarePlugin: si
}, Symbol.toStringTag, {
    value: "Module"
}));
function Ae(n, e) {
    var t = e.methodName
      , r = e.integrationName
      , i = e.type
      , o = e.didError
      , u = o === void 0 ? !1 : o;
    n.stats.increment("analytics_js.integration.invoke".concat(u ? ".error" : ""), 1, ["method:".concat(t), "integration_name:".concat(r), "type:".concat(i)])
}
var li = function() {
    function n(e, t) {
        this.version = "1.0.0",
        this.alternativeNames = [],
        this.loadPromise = Ht(),
        this.middleware = [],
        this.alias = this._createMethod("alias"),
        this.group = this._createMethod("group"),
        this.identify = this._createMethod("identify"),
        this.page = this._createMethod("page"),
        this.screen = this._createMethod("screen"),
        this.track = this._createMethod("track"),
        this.action = t,
        this.name = e,
        this.type = t.type,
        this.alternativeNames.push(t.name)
    }
    return n.prototype.addMiddleware = function() {
        for (var e, t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
        this.type === "destination" && (e = this.middleware).push.apply(e, t)
    }
    ,
    n.prototype.transform = function(e) {
        return m(this, void 0, void 0, function() {
            var t;
            return b(this, function(r) {
                switch (r.label) {
                case 0:
                    return [4, Er(this.name, e.event, this.middleware)];
                case 1:
                    return t = r.sent(),
                    t === null && e.cancel(new ie({
                        retry: !1,
                        reason: "dropped by destination middleware"
                    })),
                    [2, new N(t)]
                }
            })
        })
    }
    ,
    n.prototype._createMethod = function(e) {
        var t = this;
        return function(r) {
            return m(t, void 0, void 0, function() {
                var i, o;
                return b(this, function(u) {
                    switch (u.label) {
                    case 0:
                        return this.action[e] ? (i = r,
                        this.type !== "destination" ? [3, 2] : [4, this.transform(r)]) : [2, r];
                    case 1:
                        i = u.sent(),
                        u.label = 2;
                    case 2:
                        return u.trys.push([2, 5, , 6]),
                        [4, this.ready()];
                    case 3:
                        if (!u.sent())
                            throw new Error("Something prevented the destination from getting ready");
                        return Ae(r, {
                            integrationName: this.action.name,
                            methodName: e,
                            type: "action"
                        }),
                        [4, this.action[e](i)];
                    case 4:
                        return u.sent(),
                        [3, 6];
                    case 5:
                        throw o = u.sent(),
                        Ae(r, {
                            integrationName: this.action.name,
                            methodName: e,
                            type: "action",
                            didError: !0
                        }),
                        o;
                    case 6:
                        return [2, r]
                    }
                })
            })
        }
    }
    ,
    n.prototype.isLoaded = function() {
        return this.action.isLoaded()
    }
    ,
    n.prototype.ready = function() {
        return m(this, void 0, void 0, function() {
            return b(this, function(e) {
                switch (e.label) {
                case 0:
                    return e.trys.push([0, 2, , 3]),
                    [4, this.loadPromise.promise];
                case 1:
                    return e.sent(),
                    [2, !0];
                case 2:
                    return e.sent(),
                    [2, !1];
                case 3:
                    return [2]
                }
            })
        })
    }
    ,
    n.prototype.load = function(e, t) {
        return m(this, void 0, void 0, function() {
            var r, i, o, u;
            return b(this, function(a) {
                switch (a.label) {
                case 0:
                    if (this.loadPromise.isSettled())
                        return [2, this.loadPromise.promise];
                    a.label = 1;
                case 1:
                    return a.trys.push([1, 3, , 4]),
                    Ae(e, {
                        integrationName: this.action.name,
                        methodName: "load",
                        type: "action"
                    }),
                    r = this.action.load(e, t),
                    o = (i = this.loadPromise).resolve,
                    [4, r];
                case 2:
                    return o.apply(i, [a.sent()]),
                    [2, r];
                case 3:
                    throw u = a.sent(),
                    Ae(e, {
                        integrationName: this.action.name,
                        methodName: "load",
                        type: "action",
                        didError: !0
                    }),
                    this.loadPromise.reject(u),
                    u;
                case 4:
                    return [2]
                }
            })
        })
    }
    ,
    n.prototype.unload = function(e, t) {
        var r, i;
        return (i = (r = this.action).unload) === null || i === void 0 ? void 0 : i.call(r, e, t)
    }
    ,
    n
}();
function fi(n) {
    if (!Array.isArray(n))
        throw new Error("Not a valid list of plugins");
    var e = ["load", "isLoaded", "name", "version", "type"];
    return n.forEach(function(t) {
        e.forEach(function(r) {
            var i;
            if (t[r] === void 0)
                throw new Error("Plugin: ".concat((i = t.name) !== null && i !== void 0 ? i : "unknown", " missing required function ").concat(r))
        })
    }),
    !0
}
function di(n, e) {
    var t = n[e.creationName]
      , r = n[e.name];
    return n.All === !1 && !t && !r || t === !1 || r === !1
}
function vi(n, e) {
    return m(this, void 0, void 0, function() {
        var t, r, i, o, u, a;
        return b(this, function(c) {
            switch (c.label) {
            case 0:
                if (c.trys.push([0, 9, , 10]),
                t = new RegExp("https://cdn.segment.(com|build)"),
                r = yt(),
                !e)
                    return [3, 6];
                i = n.url.split("/"),
                o = i[i.length - 2],
                u = n.url.replace(o, btoa(o).replace(/=/g, "")),
                c.label = 1;
            case 1:
                return c.trys.push([1, 3, , 5]),
                [4, Ue(u.replace(t, r))];
            case 2:
                return c.sent(),
                [3, 5];
            case 3:
                return c.sent(),
                [4, Ue(n.url.replace(t, r))];
            case 4:
                return c.sent(),
                [3, 5];
            case 5:
                return [3, 8];
            case 6:
                return [4, Ue(n.url.replace(t, r))];
            case 7:
                c.sent(),
                c.label = 8;
            case 8:
                return typeof window[n.libraryName] == "function" ? [2, window[n.libraryName]] : [3, 10];
            case 9:
                throw a = c.sent(),
                console.error("Failed to create PluginFactory", n),
                a;
            case 10:
                return [2]
            }
        })
    })
}
function hi(n, e, t, r, i, o) {
    var u, a, c;
    return m(this, void 0, void 0, function() {
        var s, l, f, d = this;
        return b(this, function(v) {
            switch (v.label) {
            case 0:
                return s = [],
                l = (a = (u = n.middlewareSettings) === null || u === void 0 ? void 0 : u.routingRules) !== null && a !== void 0 ? a : [],
                f = ((c = n.remotePlugins) !== null && c !== void 0 ? c : []).map(function(h) {
                    return m(d, void 0, void 0, function() {
                        var p, w, g, S, E, I;
                        return b(this, function(O) {
                            switch (O.label) {
                            case 0:
                                if (di(e, h))
                                    return [2];
                                O.label = 1;
                            case 1:
                                return O.trys.push([1, 6, , 7]),
                                w = o?.find(function(P) {
                                    var k = P.pluginName;
                                    return k === h.name
                                }),
                                w ? [3, 3] : [4, vi(h, r?.obfuscate)];
                            case 2:
                                w = O.sent(),
                                O.label = 3;
                            case 3:
                                return p = w,
                                p ? [4, p(y(y({}, h.settings), t[h.name]))] : [3, 5];
                            case 4:
                                g = O.sent(),
                                S = Array.isArray(g) ? g : [g],
                                fi(S),
                                E = l.filter(function(P) {
                                    return P.destinationName === h.creationName
                                }),
                                S.forEach(function(P) {
                                    var k = new li(h.creationName,P);
                                    E.length && i && k.addMiddleware(i),
                                    s.push(k)
                                }),
                                O.label = 5;
                            case 5:
                                return [3, 7];
                            case 6:
                                return I = O.sent(),
                                console.warn("Failed to load Remote Plugin", I),
                                [3, 7];
                            case 7:
                                return [2]
                            }
                        })
                    })
                }),
                [4, Promise.all(f)];
            case 1:
                return v.sent(),
                [2, s.filter(Boolean)]
            }
        })
    })
}
var pi = function(n) {
    var e = !1;
    window.addEventListener("pagehide", function() {
        e || (e = !0,
        n(e))
    }),
    document.addEventListener("visibilitychange", function() {
        if (document.visibilityState == "hidden") {
            if (e)
                return;
            e = !0
        } else
            e = !1;
        n(e)
    })
}
  , Ir = function(n) {
    z(e, n);
    function e(t, r) {
        var i = n.call(this, t) || this;
        return i.retryTimeout = r,
        i.name = "RateLimitError",
        i
    }
    return e
}(Error)
  , yi = 500
  , gi = 64;
function bt(n) {
    var e = encodeURI(JSON.stringify(n)).split(/%..|./).length - 1;
    return e / 1024
}
function mi(n) {
    return bt(n) >= yi - 50
}
function bi(n) {
    return bt(n) >= gi - 10
}
function _i(n) {
    var e = []
      , t = 0;
    return n.forEach(function(r) {
        var i = bt(e[t]);
        i >= 64 && t++,
        e[t] ? e[t].push(r) : e[t] = [r]
    }),
    e
}
function wi(n, e) {
    var t, r, i = [], o = !1, u = (t = e?.size) !== null && t !== void 0 ? t : 10, a = (r = e?.timeout) !== null && r !== void 0 ? r : 5e3, c = 0;
    function s(h) {
        var p;
        if (h.length !== 0) {
            var w = (p = h[0]) === null || p === void 0 ? void 0 : p.writeKey
              , g = h.map(function(S) {
                var E = S;
                E.sentAt;
                var I = xr(E, ["sentAt"]);
                return I
            });
            return Fe("https://".concat(n, "/b"), {
                keepalive: e?.keepalive || o,
                headers: {
                    "Content-Type": "text/plain"
                },
                method: "post",
                body: JSON.stringify({
                    writeKey: w,
                    batch: g,
                    sentAt: new Date().toISOString()
                })
            }).then(function(S) {
                var E;
                if (S.status >= 500)
                    throw new Error("Bad response from server: ".concat(S.status));
                if (S.status === 429) {
                    var I = (E = S.headers) === null || E === void 0 ? void 0 : E.get("x-ratelimit-reset")
                      , O = typeof I == "string" ? parseInt(I) * 1e3 : a;
                    throw new Ir("Rate limit exceeded: ".concat(S.status),O)
                }
            })
        }
    }
    function l(h) {
        var p;
        return h === void 0 && (h = 1),
        m(this, void 0, void 0, function() {
            var w;
            return b(this, function(g) {
                return i.length ? (w = i,
                i = [],
                [2, (p = s(w)) === null || p === void 0 ? void 0 : p.catch(function(S) {
                    var E, I = N.system();
                    I.log("error", "Error sending batch", S),
                    h <= ((E = e?.maxRetries) !== null && E !== void 0 ? E : 10) && (S.name === "RateLimitError" && (c = S.retryTimeout),
                    i.push.apply(i, w),
                    i.map(function(O) {
                        if ("_metadata"in O) {
                            var P = O;
                            P._metadata = y(y({}, P._metadata), {
                                retryCount: h
                            })
                        }
                    }),
                    d(h + 1))
                })]) : [2]
            })
        })
    }
    var f;
    function d(h) {
        h === void 0 && (h = 1),
        !f && (f = setTimeout(function() {
            f = void 0,
            l(h).catch(console.error)
        }, c || a),
        c = 0)
    }
    pi(function(h) {
        if (o = h,
        o && i.length) {
            var p = _i(i).map(s);
            Promise.all(p).catch(console.error)
        }
    });
    function v(h, p) {
        return m(this, void 0, void 0, function() {
            var w;
            return b(this, function(g) {
                return i.push(p),
                w = i.length >= u || mi(i) || e?.keepalive && bi(i),
                [2, w || o ? l() : d()]
            })
        })
    }
    return {
        dispatch: v
    }
}
function Si(n) {
    function e(t, r) {
        return Fe(t, {
            keepalive: n?.keepalive,
            headers: {
                "Content-Type": "text/plain"
            },
            method: "post",
            body: JSON.stringify(r)
        }).then(function(i) {
            var o;
            if (i.status >= 500)
                throw new Error("Bad response from server: ".concat(i.status));
            if (i.status === 429) {
                var u = (o = i.headers) === null || o === void 0 ? void 0 : o.get("x-ratelimit-reset")
                  , a = u ? parseInt(u) * 1e3 : 5e3;
                throw new Ir("Rate limit exceeded: ".concat(i.status),a)
            }
        })
    }
    return {
        dispatch: e
    }
}
function Ei(n, e, t, r, i) {
    var o, u = n.user();
    delete e.options,
    e.writeKey = t?.apiKey,
    e.userId = e.userId || u.id(),
    e.anonymousId = e.anonymousId || u.anonymousId(),
    e.sentAt = new Date;
    var a = n.queue.failedInitializations || [];
    a.length > 0 && (e._metadata = {
        failedInitializations: a
    }),
    i != null && (i.attempts > 1 && (e._metadata = y(y({}, e._metadata), {
        retryCount: i.attempts
    })),
    i.attempts++);
    var c = []
      , s = [];
    for (var l in r) {
        var f = r[l];
        l === "Segment.io" && c.push(l),
        f.bundlingStatus === "bundled" && c.push(l),
        f.bundlingStatus === "unbundled" && s.push(l)
    }
    for (var d = 0, v = t?.unbundledIntegrations || []; d < v.length; d++) {
        var h = v[d];
        s.includes(h) || s.push(h)
    }
    var p = (o = t?.maybeBundledConfigIds) !== null && o !== void 0 ? o : {}
      , w = [];
    return c.sort().forEach(function(g) {
        var S;
        ((S = p[g]) !== null && S !== void 0 ? S : []).forEach(function(E) {
            w.push(E)
        })
    }),
    t?.addBundledMetadata !== !1 && (e._metadata = y(y({}, e._metadata), {
        bundled: c.sort(),
        unbundled: s.sort(),
        bundledIds: w
    })),
    e
}
var Ii = function(n, e) {
    return m(void 0, void 0, void 0, function() {
        var t;
        return b(this, function(r) {
            return t = function(i) {
                return m(void 0, void 0, void 0, function() {
                    var o;
                    return b(this, function(u) {
                        switch (u.label) {
                        case 0:
                            return n(i) ? (o = t,
                            [4, e()]) : [3, 2];
                        case 1:
                            return [2, o.apply(void 0, [u.sent()])];
                        case 2:
                            return [2]
                        }
                    })
                })
            }
            ,
            [2, t(void 0)]
        })
    })
};
function Oi(n, e) {
    return m(this, void 0, void 0, function() {
        var t, r = this;
        return b(this, function(i) {
            switch (i.label) {
            case 0:
                return t = [],
                ge() ? [2, e] : [4, Ii(function() {
                    return e.length > 0 && !ge()
                }, function() {
                    return m(r, void 0, void 0, function() {
                        var o, u, a;
                        return b(this, function(c) {
                            switch (c.label) {
                            case 0:
                                return o = e.pop(),
                                o ? [4, ye(o, n)] : [2];
                            case 1:
                                return u = c.sent(),
                                a = u instanceof N,
                                a || t.push(o),
                                [2]
                            }
                        })
                    })
                })];
            case 1:
                return i.sent(),
                t.map(function(o) {
                    return e.pushWithBackoff(o)
                }),
                [2, e]
            }
        })
    })
}
function fe(n, e, t, r) {
    var i = this;
    n || setTimeout(function() {
        return m(i, void 0, void 0, function() {
            var o, u;
            return b(this, function(a) {
                switch (a.label) {
                case 0:
                    return o = !0,
                    [4, Oi(t, e)];
                case 1:
                    return u = a.sent(),
                    o = !1,
                    e.todo > 0 && r(o, u, t, r),
                    [2]
                }
            })
        })
    }, Math.random() * 5e3)
}
function Pi(n, e) {
    var t, r, i, o, u = n.user();
    return e.previousId = (i = (r = (t = e.previousId) !== null && t !== void 0 ? t : e.from) !== null && r !== void 0 ? r : u.id()) !== null && i !== void 0 ? i : u.anonymousId(),
    e.userId = (o = e.userId) !== null && o !== void 0 ? o : e.to,
    delete e.from,
    delete e.to,
    e
}
function Or(n, e, t) {
    var r, i, o;
    window.addEventListener("pagehide", function() {
        a.push.apply(a, Array.from(c)),
        c.clear()
    });
    var u = (r = e?.apiKey) !== null && r !== void 0 ? r : ""
      , a = n.options.disableClientPersistence ? new ot(n.queue.queue.maxAttempts,[]) : new ct(n.queue.queue.maxAttempts,"".concat(u, ":dest-Segment.io"))
      , c = new Set
      , s = !1
      , l = (i = e?.apiHost) !== null && i !== void 0 ? i : tr
      , f = (o = e?.protocol) !== null && o !== void 0 ? o : "https"
      , d = "".concat(f, "://").concat(l)
      , v = e?.deliveryStrategy
      , h = v?.strategy === "batching" ? wi(l, v.config) : Si(v?.config);
    function p(g) {
        return m(this, void 0, void 0, function() {
            var S, E;
            return b(this, function(I) {
                return ge() ? (a.push(g),
                fe(s, a, w, fe),
                [2, g]) : (c.add(g),
                S = g.event.type.charAt(0),
                E = ke(g.event).json(),
                g.event.type === "track" && delete E.traits,
                g.event.type === "alias" && (E = Pi(n, E)),
                [2, h.dispatch("".concat(d, "/").concat(S), Ei(n, E, e, t, g)).then(function() {
                    return g
                }).catch(function(O) {
                    if (g.log("error", "Error sending event", O),
                    O.name === "RateLimitError") {
                        var P = O.retryTimeout;
                        a.pushWithBackoff(g, P)
                    } else
                        a.pushWithBackoff(g);
                    return fe(s, a, w, fe),
                    g
                }).finally(function() {
                    c.delete(g)
                })])
            })
        })
    }
    var w = {
        name: "Segment.io",
        type: "destination",
        version: "0.1.0",
        isLoaded: function() {
            return !0
        },
        load: function() {
            return Promise.resolve()
        },
        track: p,
        identify: p,
        page: p,
        alias: p,
        group: p,
        screen: p
    };
    return a.todo && fe(s, a, w, fe),
    w
}
var Je, $t, Ai = st(), Qt = (Je = ($t = Ai).__SEGMENT_INSPECTOR__) !== null && Je !== void 0 ? Je : $t.__SEGMENT_INSPECTOR__ = {}, xi = function(n) {
    var e;
    return (e = Qt.attach) === null || e === void 0 ? void 0 : e.call(Qt, n)
};
function Mi(n, e) {
    var t = e ?? yt();
    return Fe("".concat(t, "/v1/projects/").concat(n, "/settings")).then(function(r) {
        return r.ok ? r.json() : r.text().then(function(i) {
            throw new Error(i)
        })
    }).catch(function(r) {
        throw console.error(r.message),
        r
    })
}
function Ci(n) {
    return mr().NODE_ENV !== "test" && Object.keys(n.integrations).length > 1
}
function ki(n) {
    var e, t, r;
    return mr().NODE_ENV !== "test" && ((r = (t = (e = n.middlewareSettings) === null || e === void 0 ? void 0 : e.routingRules) === null || t === void 0 ? void 0 : t.length) !== null && r !== void 0 ? r : 0) > 0
}
function Di(n, e) {
    Cn(n, e),
    Mn(n, e)
}
function Fi(n, e) {
    return m(this, void 0, void 0, function() {
        return b(this, function(t) {
            switch (t.label) {
            case 0:
                return [4, An(n, e)];
            case 1:
                return t.sent(),
                kn(n, e),
                [2]
            }
        })
    })
}
function ji(n, e, t, r, i, o, u) {
    var a, c, s;
    return i === void 0 && (i = []),
    m(this, void 0, void 0, function() {
        var l, f, d, v, h, p, w, g, S, E, I, O, P, k, V, D = this;
        return b(this, function(x) {
            switch (x.label) {
            case 0:
                return Di(t, u),
                l = i?.filter(function(M) {
                    return typeof M == "object"
                }),
                f = i?.filter(function(M) {
                    return typeof M == "function" && typeof M.pluginName == "string"
                }),
                ki(e) ? [4, F( () => import("./lro4l4xv2rzlaxz6.js"), []).then(function(M) {
                    return M.tsubMiddleware(e.middlewareSettings.routingRules)
                })] : [3, 2];
            case 1:
                return v = x.sent(),
                [3, 3];
            case 2:
                v = void 0,
                x.label = 3;
            case 3:
                return d = v,
                Ci(e) || o.length > 0 ? [4, F( () => import("./gbytyrxq7s6h1uzd.js"), __vite__mapDeps([5, 6, 1, 2, 3])).then(function(M) {
                    return M.ajsDestinations(n, e, t.integrations, r, d, o)
                })] : [3, 5];
            case 4:
                return p = x.sent(),
                [3, 6];
            case 5:
                p = [],
                x.label = 6;
            case 6:
                return h = p,
                e.legacyVideoPluginsEnabled ? [4, F( () => import("./myf70zg6q6t9salj.js"), __vite__mapDeps([7, 1, 2, 3])).then(function(M) {
                    return M.loadLegacyVideoPlugins(t)
                })] : [3, 8];
            case 7:
                x.sent(),
                x.label = 8;
            case 8:
                return !((a = r.plan) === null || a === void 0) && a.track ? [4, F( () => import("./fm2k0zsjlk5u8n0g.js"), __vite__mapDeps([8, 6, 1, 2, 3])).then(function(M) {
                    var G;
                    return M.schemaFilter((G = r.plan) === null || G === void 0 ? void 0 : G.track, e)
                })] : [3, 10];
            case 9:
                return g = x.sent(),
                [3, 11];
            case 10:
                g = void 0,
                x.label = 11;
            case 11:
                return w = g,
                S = zn(e, r),
                [4, hi(e, t.integrations, S, r, d, f).catch(function() {
                    return []
                })];
            case 12:
                return E = x.sent(),
                I = A(A([Hn], h, !0), E, !0),
                w && I.push(w),
                O = ((c = r.integrations) === null || c === void 0 ? void 0 : c.All) === !1 && !r.integrations["Segment.io"] || r.integrations && r.integrations["Segment.io"] === !1,
                O ? [3, 14] : (k = (P = I).push,
                [4, Or(t, S["Segment.io"], e.integrations)]);
            case 13:
                k.apply(P, [x.sent()]),
                x.label = 14;
            case 14:
                return [4, t.register.apply(t, A(A([], I, !1), l, !1))];
            case 15:
                return V = x.sent(),
                [4, xn(t, u)];
            case 16:
                return x.sent(),
                Object.entries((s = e.enabledMiddleware) !== null && s !== void 0 ? s : {}).some(function(M) {
                    var G = M[1];
                    return G
                }) ? [4, F( () => import("./ebowva1iyqw5n8qm.js"), __vite__mapDeps([9, 1, 2, 3])).then(function(M) {
                    var G = M.remoteMiddlewares;
                    return m(D, void 0, void 0, function() {
                        var _t, wt;
                        return b(this, function(St) {
                            switch (St.label) {
                            case 0:
                                return [4, G(V, e, r.obfuscate)];
                            case 1:
                                return _t = St.sent(),
                                wt = _t.map(function(Pr) {
                                    return t.addSourceMiddleware(Pr)
                                }),
                                [2, Promise.all(wt)]
                            }
                        })
                    })
                })] : [3, 18];
            case 17:
                x.sent(),
                x.label = 18;
            case 18:
                return [2, V]
            }
        })
    })
}
function Ti(n, e, t) {
    var r, i, o, u, a, c, s, l, f, d;
    return e === void 0 && (e = {}),
    m(this, void 0, void 0, function() {
        var v, h, p, w, g, S, E, I, O, P, k, V;
        return b(this, function(D) {
            switch (D.label) {
            case 0:
                return e.disable === !0 ? [2, [new Pt, N.system()]] : (e.globalAnalyticsKey && In(e.globalAnalyticsKey),
                n.cdnURL && Ln(n.cdnURL),
                e.initialPageview && t.add(new tt("page",[])),
                (r = n.cdnSettings) !== null && r !== void 0 ? (h = r,
                [3, 3]) : [3, 1]);
            case 1:
                return [4, Mi(n.writeKey, n.cdnURL)];
            case 2:
                h = D.sent(),
                D.label = 3;
            case 3:
                return v = h,
                e.updateCDNSettings && (v = e.updateCDNSettings(v)),
                typeof e.disable != "function" ? [3, 5] : [4, e.disable(v)];
            case 4:
                if (p = D.sent(),
                p)
                    return [2, [new Pt, N.system()]];
                D.label = 5;
            case 5:
                return w = (o = (i = v.integrations["Segment.io"]) === null || i === void 0 ? void 0 : i.retryQueue) !== null && o !== void 0 ? o : !0,
                e = y({
                    retryQueue: w
                }, e),
                g = new pt(y(y({}, n), {
                    cdnSettings: v
                }),e),
                xi(g),
                S = (u = n.plugins) !== null && u !== void 0 ? u : [],
                E = (a = n.classicIntegrations) !== null && a !== void 0 ? a : [],
                I = (c = e.integrations) === null || c === void 0 ? void 0 : c["Segment.io"],
                rr.initRemoteMetrics(y(y({}, v.metrics), {
                    host: (s = I?.apiHost) !== null && s !== void 0 ? s : (l = v.metrics) === null || l === void 0 ? void 0 : l.host,
                    protocol: I?.protocol
                })),
                [4, ji(n.writeKey, v, g, e, S, E, t)];
            case 6:
                return O = D.sent(),
                P = (f = window.location.search) !== null && f !== void 0 ? f : "",
                k = (d = window.location.hash) !== null && d !== void 0 ? d : "",
                V = P.length ? P : k.replace(/(?=#).*(?=\?)/, ""),
                V.includes("ajs_") ? [4, g.queryString(V).catch(console.error)] : [3, 8];
            case 7:
                D.sent(),
                D.label = 8;
            case 8:
                return g.initialized = !0,
                g.emit("initialize", n, e),
                [4, Fi(g, t)];
            case 9:
                return D.sent(),
                [2, [g, O]]
            }
        })
    })
}
var Ri = function(n) {
    z(e, n);
    function e() {
        var t = this
          , r = Ht()
          , i = r.promise
          , o = r.resolve;
        return t = n.call(this, function(u) {
            return i.then(function(a) {
                var c = a[0]
                  , s = a[1];
                return Ti(c, s, u)
            })
        }) || this,
        t._resolveLoadStart = function(u, a) {
            return o([u, a])
        }
        ,
        t
    }
    return e.prototype.load = function(t, r) {
        return r === void 0 && (r = {}),
        this._resolveLoadStart(t, r),
        this
    }
    ,
    e.load = function(t, r) {
        return r === void 0 && (r = {}),
        new e().load(t, r)
    }
    ,
    e.standalone = function(t, r) {
        return e.load({
            writeKey: t
        }, r).then(function(i) {
            return i[0]
        })
    }
    ,
    e
}(Fn)
  , qi = function() {
    function n() {}
    return n.load = function() {
        return Promise.reject(new Error("AnalyticsNode is not available in browsers."))
    }
    ,
    n
}();
const Ki = Object.freeze(Object.defineProperty({
    __proto__: null,
    Analytics: pt,
    AnalyticsBrowser: Ri,
    AnalyticsNode: qi,
    Context: N,
    ContextCancelation: ie,
    EventFactory: ur,
    Group: pr,
    UniversalStorage: K,
    User: dt,
    getGlobalAnalytics: ht,
    isDestinationPluginWithAddMiddleware: sr,
    resolveAliasArguments: er,
    resolveArguments: Yt,
    resolvePageArguments: He,
    resolveUserArguments: Ze,
    segmentio: Or
}, Symbol.toStringTag, {
    value: "Module"
}));
export {ie as C, ot as P, m as _, b as a, y as b, Bn as c, j as d, A as e, ge as f, Bi as g, Er as h, zi as i, te as j, Ht as k, Ue as l, zn as m, ct as n, Ii as o, Br as p, ye as q, Ae as r, N as s, rn as t, Ui as u, Ki as v};
//# sourceMappingURL=hvymvq9poi3izobw.js.map
