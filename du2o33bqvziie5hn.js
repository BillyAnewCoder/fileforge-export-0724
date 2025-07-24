const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/dtfhive2hodlq0ri.js", "assets/juy90og0wtbp77qa.js", "assets/oxbvaq32hx04hocl.js", "assets/gn1kkezdsm9hi3t4.js", "assets/ckp56qklot786ulr.js", "assets/dc2xxjkicf2pz0mj.js", "assets/root-fv49dn40.css", "assets/conversation-small-j9iamy23.css", "assets/nmh9rh1es9yfc7rh.js", "assets/l7ivca7g8ik3mk13.js", "assets/jy1u8exw8iz2slve.js", "assets/9k8yv4dhh02fqujo.js", "assets/f76gy0b8ieo4s693.js", "assets/h9ri4w2fyqo4qlva.js", "assets/j2sppl86ksonjlwy.js", "assets/io7lcvt8htau8h6d.js", "assets/dmfmxszxfbs8gsbx.js", "assets/comments-plugin-tah3dlup.css", "assets/f5uxfkqdhg7743lt.js", "assets/codemirror-nauedrd6.css", "assets/n6h2c0196v3vnzav.js", "assets/jsqa2yve28fnwvvj.js", "assets/pbd6thieshvvjfa0.js", "assets/nc631yunytu8n0fx.js", "assets/m1q7suu3m36z180t.js", "assets/l7m4sdxmp3n9y1x8.js", "assets/e2fyqefjfccaah4p.js", "assets/jqdk4ldzigxhqhah.js", "assets/f95fqffr5vb5pioe.js", "assets/o8hspyy2fyv2o9n5.js", "assets/gr34ca5bfgzamfz1.js", "assets/f3gnxwjbhhemaa6w.js", "assets/pc2givv05uuq8g6l.js", "assets/prosemirror-eh65ggsy.css", "assets/koc3vass6n6349vp.js", "assets/ejiu40t686c7js51.js", "assets/llrie03z1kvfi4vu.js", "assets/o6wb3ptvu0bk81yq.js", "assets/jsgl3b1bt1ozctr5.js"]))) => i.map(i => d[i]);
import {j as P, m as tt, A as nt, r as le, h as Ue, f as rt, g as ot, a as at} from "./juy90og0wtbp77qa.js";
import {Z as st, C as Ye} from "./jy1u8exw8iz2slve.js";
import {ar as ae, a$ as Je, e$ as it, as as Ze, at as oe, h8 as We, e as ut, ag as Qe, j1 as ct, cD as lt, aS as ft, D as dt, R as pt, P as Re} from "./dc2xxjkicf2pz0mj.js";
import {bJ as ht, eV as mt, rk as bt, rl as yt, j9 as _t, xI as gt, rm as vt, uN as Tt, dx as A, dt as Et, dw as Ct, du as xt, v3 as Ot, hN as Dt, qL as At, k5 as Se, k6 as Rt, fp as St, xJ as wt, s6 as ge} from "./ckp56qklot786ulr.js";
import {B as It} from "./l7m4sdxmp3n9y1x8.js";
import {b as Mt, h as Lt} from "./9k8yv4dhh02fqujo.js";
import {u as zt} from "./f5uxfkqdhg7743lt.js";
import {r as Pt} from "./e2fyqefjfccaah4p.js";
function Nt({className: e, zIndexKey: t, onClick: n}) {
    return P.jsx(tt.div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: ae("absolute inset-0", e, st[t]),
        onClick: n
    })
}
function Bt({zIndexKey: e, onClick: t}) {
    return P.jsx(Nt, {
        zIndexKey: e,
        onClick: t,
        className: "bg-gray-50/50 dark:bg-black/50"
    })
}
var re = {}, ne = {}, se = {}, we;
function Ft() {
    if (we)
        return se;
    we = 1,
    Object.defineProperty(se, "__esModule", {
        value: !0
    }),
    se.cast = t,
    se.get = n,
    se.set = r;
    const e = 2 ** 32;
    function t(o) {
        return o < 0 ? o + e : o
    }
    function n(o, a) {
        return o >> a & 255
    }
    function r(o, a, i) {
        return o ^ (o ^ i << a) & 255 << a
    }
    return se
}
var Ie;
function me() {
    return Ie || (Ie = 1,
    function(e) {
        var t = ne && ne.__createBinding || (Object.create ? function(d, s, c, _) {
            _ === void 0 && (_ = c);
            var g = Object.getOwnPropertyDescriptor(s, c);
            (!g || ("get"in g ? !s.__esModule : g.writable || g.configurable)) && (g = {
                enumerable: !0,
                get: function() {
                    return s[c]
                }
            }),
            Object.defineProperty(d, _, g)
        }
        : function(d, s, c, _) {
            _ === void 0 && (_ = c),
            d[_] = s[c]
        }
        )
          , n = ne && ne.__setModuleDefault || (Object.create ? function(d, s) {
            Object.defineProperty(d, "default", {
                enumerable: !0,
                value: s
            })
        }
        : function(d, s) {
            d.default = s
        }
        )
          , r = ne && ne.__importStar || function(d) {
            if (d && d.__esModule)
                return d;
            var s = {};
            if (d != null)
                for (var c in d)
                    c !== "default" && Object.prototype.hasOwnProperty.call(d, c) && t(s, d, c);
            return n(s, d),
            s
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.OFFSET_A = e.OFFSET_B = e.OFFSET_G = e.OFFSET_R = void 0,
        e.newColor = f,
        e.from = p,
        e.toNumber = C,
        e.getRed = O,
        e.getGreen = N,
        e.getBlue = B,
        e.getAlpha = x,
        e.setRed = T,
        e.setGreen = D,
        e.setBlue = R,
        e.setAlpha = M;
        const o = r(Ft())
          , {cast: a, get: i, set: l} = o;
        e.OFFSET_R = 24,
        e.OFFSET_G = 16,
        e.OFFSET_B = 8,
        e.OFFSET_A = 0;
        function f(d, s, c, _) {
            return (d << e.OFFSET_R) + (s << e.OFFSET_G) + (c << e.OFFSET_B) + (_ << e.OFFSET_A)
        }
        function p(d) {
            return f(i(d, e.OFFSET_R), i(d, e.OFFSET_G), i(d, e.OFFSET_B), i(d, e.OFFSET_A))
        }
        function C(d) {
            return a(d)
        }
        function O(d) {
            return i(d, e.OFFSET_R)
        }
        function N(d) {
            return i(d, e.OFFSET_G)
        }
        function B(d) {
            return i(d, e.OFFSET_B)
        }
        function x(d) {
            return i(d, e.OFFSET_A)
        }
        function T(d, s) {
            return l(d, e.OFFSET_R, s)
        }
        function D(d, s) {
            return l(d, e.OFFSET_G, s)
        }
        function R(d, s) {
            return l(d, e.OFFSET_B, s)
        }
        function M(d, s) {
            return l(d, e.OFFSET_A, s)
        }
    }(ne)),
    ne
}
var W = {}, j = {}, Me;
function jt() {
    if (Me)
        return j;
    Me = 1,
    Object.defineProperty(j, "__esModule", {
        value: !0
    }),
    j.labToXyzd50 = d,
    j.xyzd50ToLab = s,
    j.oklabToXyzd65 = c,
    j.xyzd65ToOklab = _,
    j.lchToLab = g,
    j.labToLch = S,
    j.displayP3ToXyzd50 = J,
    j.xyzd50ToDisplayP3 = k,
    j.proPhotoToXyzd50 = u,
    j.xyzd50ToProPhoto = E,
    j.adobeRGBToXyzd50 = w,
    j.xyzd50ToAdobeRGB = I,
    j.rec2020ToXyzd50 = X,
    j.xyzd50ToRec2020 = Q,
    j.xyzd50ToD65 = U,
    j.xyzd65ToD50 = ie,
    j.xyzd65TosRGBLinear = $,
    j.xyzd50TosRGBLinear = z,
    j.srgbLinearToXyzd50 = L,
    j.srgbToXyzd50 = G,
    j.xyzd50ToSrgb = Y,
    j.oklchToXyzd50 = te,
    j.xyzd50ToOklch = K;
    const e = .9642
      , t = 1
      , n = .8251;
    function r(m, h) {
        const y = [0, 0, 0];
        for (let v = 0; v < 3; ++v)
            y[v] = m[v][0] * h[0] + m[v][1] * h[1] + m[v][2] * h[2];
        return y
    }
    class o {
        g;
        a;
        b;
        c;
        d;
        e;
        f;
        constructor(h, y, v=0, b=0, F=0, H=0, q=0) {
            this.g = h,
            this.a = y,
            this.b = v,
            this.c = b,
            this.d = F,
            this.e = H,
            this.f = q
        }
        eval(h) {
            const y = h < 0 ? -1 : 1
              , v = h * y;
            return v < this.d ? y * (this.c * v + this.f) : y * (Math.pow(this.a * v + this.b, this.g) + this.e)
        }
    }
    const a = {
        sRGB: new o(2.4,1 / 1.055,.055 / 1.055,1 / 12.92,.04045,0,0),
        sRGB_INVERSE: new o(.416667,1.13728,-0,12.92,.0031308,-.0549698,-0),
        proPhotoRGB: new o(1.8,1),
        proPhotoRGB_INVERSE: new o(.555556,1,-0,0,0,0,0),
        k2Dot2: new o(2.2,1),
        k2Dot2_INVERSE: new o(.454545,1),
        rec2020: new o(2.22222,.909672,.0903276,.222222,.0812429,0,0),
        rec2020_INVERSE: new o(.45,1.23439,-0,4.5,.018054,-.0993195,-0)
    }
      , i = {
        sRGB: [[.436065674, .385147095, .143066406], [.222488403, .716873169, .06060791], [.013916016, .097076416, .714096069]],
        sRGB_INVERSE: [[3.134112151374599, -1.6173924597114966, -.4906334036481285], [-.9787872938826594, 1.9162795854799963, .0334547139520088], [.07198304248352326, -.2289858493321844, 1.4053851325241447]],
        displayP3: [[.515102, .291965, .157153], [.241182, .692236, .0665819], [-.00104941, .0418818, .784378]],
        displayP3_INVERSE: [[2.404045155982687, -.9898986932663839, -.3976317191366333], [-.8422283799266768, 1.7988505115115485, .016048170293157416], [.04818705979712955, -.09737385156228891, 1.2735066448052303]],
        adobeRGB: [[.60974, .20528, .14919], [.31111, .62567, .06322], [.01947, .06087, .74457]],
        adobeRGB_INVERSE: [[1.9625385510109137, -.6106892546501431, -.3413827467482388], [-.9787580455521, 1.9161624707082339, .03341676594241408], [.028696263137883395, -.1406807819331586, 1.349252109991369]],
        rec2020: [[.673459, .165661, .1251], [.279033, .675338, .0456288], [-.00193139, .0299794, .797162]],
        rec2020_INVERSE: [[1.647275201661012, -.3936024771460771, -.23598028884792507], [-.6826176165196962, 1.647617775014935, .01281626807852422], [.029662725298529837, -.06291668721366285, 1.2533964313435522]]
    };
    function l(m) {
        return m * (Math.PI / 180)
    }
    function f(m) {
        return m * (180 / Math.PI)
    }
    function p(m, h, y, v) {
        return [m.eval(h), m.eval(y), m.eval(v)]
    }
    const C = [[.9999999984505198, .39633779217376786, .2158037580607588], [1.0000000088817609, -.10556134232365635, -.06385417477170591], [1.0000000546724108, -.08948418209496575, -1.2914855378640917]]
      , O = [[.2104542553, .7936177849999999, -.0040720468], [1.9779984951000003, -2.4285922049999997, .4505937099000001], [.025904037099999982, .7827717662, -.8086757660000001]]
      , N = [[.8190224432164319, .3619062562801221, -.12887378261216414], [.0329836671980271, .9292868468965546, .03614466816999844], [.048177199566046255, .26423952494422764, .6335478258136937]]
      , B = [[1.226879873374156, -.5578149965554814, .2813910501772159], [-.040575762624313734, 1.1122868293970596, -.07171106666151703], [-.07637294974672144, -.4214933239627915, 1.586924024427242]]
      , x = [[.7976700747153241, .13519395152800417, .03135596341127167], [.28803902352472205, .7118744007923554, 8661179538844252e-20], [2739876695467402e-22, -14405226518969991e-22, .825211112593861]]
      , T = [[1.3459533710138858, -.25561367037652133, -.051116041522131374], [-.544600415668951, 1.5081687311475767, .020535163968720935], [-13975622054109725e-22, 2717590904589903e-21, 1.2118111696814942]]
      , D = [[1.0478573189120088, .022907374491829943, -.050162247377152525], [.029570500050499514, .9904755577034089, -.017061518194840468], [-.00924047197558879, .015052921526981566, .7519708530777581]]
      , R = [[.9555366447632887, -.02306009252137888, .06321844147263304], [-.028315378228764922, 1.009951351591575, .021026001591792402], [.012308773293784308, -.02050053471777469, 1.3301947294775631]]
      , M = [[3.2408089365140573, -1.5375788839307314, -.4985609572551541], [-.9692732213205414, 1.876110235238969, .041560501141251774], [.05567030990267439, -.2040007921971802, 1.0571046720577026]];
    function d(m, h, y) {
        let v = (m + 16) / 116
          , b = v + h / 500
          , F = v - y / 200;
        function H(q) {
            return q <= .20689655172413793 ? 108 / 841 * (q - 16 / 116) : q * q * q
        }
        return b = H(b) * e,
        v = H(v) * t,
        F = H(F) * n,
        [b, v, F]
    }
    function s(m, h, y) {
        function v(q) {
            return q <= .008856451679035631 ? 841 / 108 * q + 16 / 116 : Math.pow(q, 1 / 3)
        }
        m = v(m / e),
        h = v(h / t),
        y = v(y / n);
        const b = 116 * h - 16
          , F = 500 * (m - h)
          , H = 200 * (h - y);
        return [b, F, H]
    }
    function c(m, h, y) {
        const b = r(C, [m, h, y]);
        return b[0] = b[0] * b[0] * b[0],
        b[1] = b[1] * b[1] * b[1],
        b[2] = b[2] * b[2] * b[2],
        r(B, b)
    }
    function _(m, h, y) {
        const b = r(N, [m, h, y]);
        b[0] = Math.pow(b[0], 1 / 3),
        b[1] = Math.pow(b[1], 1 / 3),
        b[2] = Math.pow(b[2], 1 / 3);
        const F = r(O, b);
        return [F[0], F[1], F[2]]
    }
    function g(m, h, y) {
        return y === void 0 ? [m, 0, 0] : [m, h * Math.cos(l(y)), h * Math.sin(l(y))]
    }
    function S(m, h, y) {
        return [m, Math.sqrt(h * h + y * y), f(Math.atan2(y, h))]
    }
    function J(m, h, y) {
        const [v,b,F] = p(a.sRGB, m, h, y)
          , H = [v, b, F];
        return r(i.displayP3, H)
    }
    function k(m, h, y) {
        const v = [m, h, y]
          , b = r(i.displayP3_INVERSE, v);
        return p(a.sRGB_INVERSE, b[0], b[1], b[2])
    }
    function u(m, h, y) {
        const [v,b,F] = p(a.proPhotoRGB, m, h, y);
        return r(x, [v, b, F])
    }
    function E(m, h, y) {
        const b = r(T, [m, h, y]);
        return p(a.proPhotoRGB_INVERSE, b[0], b[1], b[2])
    }
    function w(m, h, y) {
        const [v,b,F] = p(a.k2Dot2, m, h, y)
          , H = [v, b, F];
        return r(i.adobeRGB, H)
    }
    function I(m, h, y) {
        const v = [m, h, y]
          , b = r(i.adobeRGB_INVERSE, v);
        return p(a.k2Dot2_INVERSE, b[0], b[1], b[2])
    }
    function X(m, h, y) {
        const [v,b,F] = p(a.rec2020, m, h, y)
          , H = [v, b, F];
        return r(i.rec2020, H)
    }
    function Q(m, h, y) {
        const v = [m, h, y]
          , b = r(i.rec2020_INVERSE, v);
        return p(a.rec2020_INVERSE, b[0], b[1], b[2])
    }
    function U(m, h, y) {
        return r(R, [m, h, y])
    }
    function ie(m, h, y) {
        return r(D, [m, h, y])
    }
    function $(m, h, y) {
        return r(M, [m, h, y])
    }
    function z(m, h, y) {
        const v = [m, h, y];
        return r(i.sRGB_INVERSE, v)
    }
    function L(m, h, y) {
        const v = [m, h, y];
        return r(i.sRGB, v)
    }
    function G(m, h, y) {
        const [v,b,F] = p(a.sRGB, m, h, y)
          , H = [v, b, F];
        return r(i.sRGB, H)
    }
    function Y(m, h, y) {
        const v = [m, h, y]
          , b = r(i.sRGB_INVERSE, v);
        return p(a.sRGB_INVERSE, b[0], b[1], b[2])
    }
    function te(m, h, y) {
        const [v,b,F] = g(m, h, y)
          , [H,q,ue] = c(v, b, F);
        return ie(H, q, ue)
    }
    function K(m, h, y) {
        const [v,b,F] = U(m, h, y)
          , [H,q,ue] = _(v, b, F);
        return S(H, q, ue)
    }
    return j
}
var Le;
function Gt() {
    if (Le)
        return W;
    Le = 1;
    var e = W && W.__createBinding || (Object.create ? function(u, E, w, I) {
        I === void 0 && (I = w);
        var X = Object.getOwnPropertyDescriptor(E, w);
        (!X || ("get"in X ? !E.__esModule : X.writable || X.configurable)) && (X = {
            enumerable: !0,
            get: function() {
                return E[w]
            }
        }),
        Object.defineProperty(u, I, X)
    }
    : function(u, E, w, I) {
        I === void 0 && (I = w),
        u[I] = E[w]
    }
    )
      , t = W && W.__setModuleDefault || (Object.create ? function(u, E) {
        Object.defineProperty(u, "default", {
            enumerable: !0,
            value: E
        })
    }
    : function(u, E) {
        u.default = E
    }
    )
      , n = W && W.__importStar || function(u) {
        if (u && u.__esModule)
            return u;
        var E = {};
        if (u != null)
            for (var w in u)
                w !== "default" && Object.prototype.hasOwnProperty.call(u, w) && e(E, u, w);
        return t(E, u),
        E
    }
    ;
    Object.defineProperty(W, "__esModule", {
        value: !0
    }),
    W.parse = N,
    W.parseHex = B,
    W.parseColor = T;
    const r = me()
      , o = n(jt())
      , a = 35
      , i = 37
      , l = 103
      , f = 110
      , p = 100
      , C = 101
      , O = ( () => {
        const u = "(\\w+)"
          , E = "[\\s,\\/]"
          , w = "([^\\s,\\/]+)"
          , I = `(?:${E}+${w})`;
        return new RegExp(`${u}\\(
      ${E}*
      ${w}
      ${I}
      ${I}
      ${I}?
      ${I}?
      ${E}*
    \\)`.replace(/\s/g, ""))
    }
    )();
    function N(u) {
        return u.charCodeAt(0) === a ? B(u) : T(u)
    }
    function B(u) {
        let E = 0
          , w = 0
          , I = 0
          , X = 255;
        switch (u.length) {
        case 4:
            {
                E = (x(u.charCodeAt(1)) << 4) + x(u.charCodeAt(1)),
                w = (x(u.charCodeAt(2)) << 4) + x(u.charCodeAt(2)),
                I = (x(u.charCodeAt(3)) << 4) + x(u.charCodeAt(3));
                break
            }
        case 7:
            {
                E = (x(u.charCodeAt(1)) << 4) + x(u.charCodeAt(2)),
                w = (x(u.charCodeAt(3)) << 4) + x(u.charCodeAt(4)),
                I = (x(u.charCodeAt(5)) << 4) + x(u.charCodeAt(6));
                break
            }
        case 9:
            {
                E = (x(u.charCodeAt(1)) << 4) + x(u.charCodeAt(2)),
                w = (x(u.charCodeAt(3)) << 4) + x(u.charCodeAt(4)),
                I = (x(u.charCodeAt(5)) << 4) + x(u.charCodeAt(6)),
                X = (x(u.charCodeAt(7)) << 4) + x(u.charCodeAt(8));
                break
            }
        }
        return (0,
        r.newColor)(E, w, I, X)
    }
    function x(u) {
        return (u & 15) + 9 * (u >> 6)
    }
    function T(u) {
        const E = O.exec(u);
        if (E === null)
            throw new Error(`Color.parse(): invalid CSS color: "${u}"`);
        const w = E[1]
          , I = E[2]
          , X = E[3]
          , Q = E[4]
          , U = E[5]
          , ie = E[6];
        switch (w) {
        case "rgb":
        case "rgba":
            {
                const $ = D(I)
                  , z = D(X)
                  , L = D(Q)
                  , G = U ? R(U) : 255;
                return (0,
                r.newColor)($, z, L, G)
            }
        case "hsl":
        case "hsla":
            {
                const $ = d(I)
                  , z = s(X)
                  , L = s(Q)
                  , G = U ? R(U) : 255;
                let Y, te, K;
                if (z === 0)
                    Y = te = K = Math.round(L * 255);
                else {
                    const m = L < .5 ? L * (1 + z) : L + z - L * z
                      , h = 2 * L - m;
                    Y = Math.round(g(h, m, $ + 1 / 3) * 255),
                    te = Math.round(g(h, m, $) * 255),
                    K = Math.round(g(h, m, $ - 1 / 3) * 255)
                }
                return (0,
                r.newColor)(Y, te, K, G)
            }
        case "hwb":
            {
                const $ = d(I)
                  , z = s(X)
                  , L = s(Q)
                  , G = U ? R(U) : 255
                  , Y = 1
                  , te = .5
                  , K = te + Y - te * Y
                  , m = 2 * te - K;
                let h = Math.round(g(m, K, $ + 1 / 3) * 255)
                  , y = Math.round(g(m, K, $) * 255)
                  , v = Math.round(g(m, K, $ - 1 / 3) * 255);
                return h = S(h, z, L),
                y = S(y, z, L),
                v = S(v, z, L),
                (0,
                r.newColor)(h, y, v, G)
            }
        case "lab":
            {
                const $ = _(I, 100)
                  , z = _(X, 125)
                  , L = _(Q, 125)
                  , G = U ? R(U) : 255;
                return k(G, o.xyzd50ToSrgb(...o.labToXyzd50($, z, L)))
            }
        case "lch":
            {
                const $ = _(I, 100)
                  , z = _(X, 150)
                  , L = d(Q) * 360
                  , G = U ? R(U) : 255;
                return k(G, o.xyzd50ToSrgb(...o.labToXyzd50(...o.lchToLab($, z, L))))
            }
        case "oklab":
            {
                const $ = _(I, 1)
                  , z = _(X, .4)
                  , L = _(Q, .4)
                  , G = U ? R(U) : 255;
                return k(G, o.xyzd50ToSrgb(...o.xyzd65ToD50(...o.oklabToXyzd65($, z, L))))
            }
        case "oklch":
            {
                const $ = c(I)
                  , z = c(X)
                  , L = c(Q)
                  , G = U ? R(U) : 255;
                return k(G, o.xyzd50ToSrgb(...o.oklchToXyzd50($, z, L)))
            }
        case "color":
            {
                const $ = I
                  , z = c(X)
                  , L = c(Q)
                  , G = c(U)
                  , Y = ie ? R(ie) : 255;
                switch ($) {
                case "srgb":
                    return k(Y, [z, L, G]);
                case "srgb-linear":
                    return k(Y, o.xyzd50ToSrgb(...o.srgbLinearToXyzd50(z, L, G)));
                case "display-p3":
                    return k(Y, o.xyzd50ToSrgb(...o.displayP3ToXyzd50(z, L, G)));
                case "a98-rgb":
                    return k(Y, o.xyzd50ToSrgb(...o.adobeRGBToXyzd50(z, L, G)));
                case "prophoto-rgb":
                    return k(Y, o.xyzd50ToSrgb(...o.proPhotoToXyzd50(z, L, G)));
                case "rec2020":
                    return k(Y, o.xyzd50ToSrgb(...o.rec2020ToXyzd50(z, L, G)));
                case "xyz":
                case "xyz-d65":
                    return k(Y, o.xyzd50ToSrgb(...o.xyzd65ToD50(z, L, G)));
                case "xyz-d50":
                    return k(Y, o.xyzd50ToSrgb(z, L, G))
                }
            }
        }
        throw new Error(`Color.parse(): invalid CSS color: "${u}"`)
    }
    function D(u) {
        return u.charCodeAt(u.length - 1) === i ? Math.round(parseFloat(u) / 100 * 255) : Math.round(parseFloat(u))
    }
    function R(u) {
        return Math.round(M(u) * 255)
    }
    function M(u) {
        return u.charCodeAt(0) === f ? 0 : u.charCodeAt(u.length - 1) === i ? parseFloat(u) / 100 : parseFloat(u)
    }
    function d(u) {
        let E = 1;
        switch (u.charCodeAt(u.length - 1)) {
        case C:
            return 0;
        case p:
            {
                u.charCodeAt(Math.max(0, u.length - 4)) === l ? E = 400 : E = 2 * Math.PI;
                break
            }
        case f:
            {
                E = 1;
                break
            }
        default:
            E = 360
        }
        return parseFloat(u) / E
    }
    function s(u) {
        return u.charCodeAt(0) === f ? 0 : parseFloat(u) / 100
    }
    function c(u) {
        return u.charCodeAt(0) === f ? 0 : u.charCodeAt(u.length - 1) === i ? parseFloat(u) / 100 : parseFloat(u)
    }
    function _(u, E) {
        return u.charCodeAt(0) === f ? 0 : u.charCodeAt(u.length - 1) === i ? parseFloat(u) / 100 * E : parseFloat(u)
    }
    function g(u, E, w) {
        return w < 0 && (w += 1),
        w > 1 && (w -= 1),
        w < 1 / 6 ? u + (E - u) * 6 * w : w < 1 / 2 ? E : w < 2 / 3 ? u + (E - u) * (2 / 3 - w) * 6 : u
    }
    function S(u, E, w) {
        let I = u / 255;
        return I *= 1 - E - w,
        I += E,
        Math.round(I * 255)
    }
    function J(u) {
        return Math.max(0, Math.min(255, u))
    }
    function k(u, E) {
        const w = J(Math.round(E[0] * 255))
          , I = J(Math.round(E[1] * 255))
          , X = J(Math.round(E[2] * 255));
        return (0,
        r.newColor)(w, I, X, u)
    }
    return W
}
var V = {}, ze;
function Xt() {
    if (ze)
        return V;
    ze = 1;
    var e = V && V.__createBinding || (Object.create ? function(s, c, _, g) {
        g === void 0 && (g = _);
        var S = Object.getOwnPropertyDescriptor(c, _);
        (!S || ("get"in S ? !c.__esModule : S.writable || S.configurable)) && (S = {
            enumerable: !0,
            get: function() {
                return c[_]
            }
        }),
        Object.defineProperty(s, g, S)
    }
    : function(s, c, _, g) {
        g === void 0 && (g = _),
        s[g] = c[_]
    }
    )
      , t = V && V.__setModuleDefault || (Object.create ? function(s, c) {
        Object.defineProperty(s, "default", {
            enumerable: !0,
            value: c
        })
    }
    : function(s, c) {
        s.default = c
    }
    )
      , n = V && V.__importStar || function(s) {
        if (s && s.__esModule)
            return s;
        var c = {};
        if (s != null)
            for (var _ in s)
                _ !== "default" && Object.prototype.hasOwnProperty.call(s, _) && e(c, s, _);
        return t(c, s),
        c
    }
    ;
    Object.defineProperty(V, "__esModule", {
        value: !0
    }),
    V.format = void 0,
    V.formatHEXA = C,
    V.formatHEX = O,
    V.formatRGBA = N,
    V.toRGBA = B,
    V.formatHSLA = x,
    V.toHSLA = T,
    V.formatHWBA = D,
    V.toHWBA = R;
    const r = n(me())
      , {getRed: o, getGreen: a, getBlue: i, getAlpha: l} = r
      , f = [0, 0, 0]
      , p = Array.from({
        length: 256
    }).map( (s, c) => c.toString(16).padStart(2, "0"));
    V.format = C;
    function C(s) {
        return "#" + p[o(s)] + p[a(s)] + p[i(s)] + p[l(s)]
    }
    function O(s) {
        return "#" + p[o(s)] + p[a(s)] + p[i(s)]
    }
    function N(s) {
        return `rgba(${o(s)} ${a(s)} ${i(s)} / ${l(s) / 255})`
    }
    function B(s) {
        return {
            r: o(s),
            g: a(s),
            b: i(s),
            a: l(s)
        }
    }
    function x(s) {
        M(o(s), a(s), i(s));
        const c = f[0]
          , _ = f[1]
          , g = f[2]
          , S = l(s) / 255;
        return `hsla(${c} ${_}% ${g}% / ${S})`
    }
    function T(s) {
        M(o(s), a(s), i(s));
        const c = f[0]
          , _ = f[1]
          , g = f[2]
          , S = l(s) / 255;
        return {
            h: c,
            s: _,
            l: g,
            a: S
        }
    }
    function D(s) {
        d(o(s), a(s), i(s));
        const c = f[0]
          , _ = f[1]
          , g = f[2]
          , S = l(s) / 255;
        return `hsla(${c} ${_}% ${g}% / ${S})`
    }
    function R(s) {
        d(o(s), a(s), i(s));
        const c = f[0]
          , _ = f[1]
          , g = f[2]
          , S = l(s) / 255;
        return {
            h: c,
            w: _,
            b: g,
            a: S
        }
    }
    function M(s, c, _) {
        s /= 255,
        c /= 255,
        _ /= 255;
        const g = Math.max(s, c, _)
          , S = g - Math.min(s, c, _)
          , J = S ? g === s ? (c - _) / S : g === c ? 2 + (_ - s) / S : 4 + (s - c) / S : 0;
        f[0] = 60 * J < 0 ? 60 * J + 360 : 60 * J,
        f[1] = 100 * (S ? g <= .5 ? S / (2 * g - S) : S / (2 - (2 * g - S)) : 0),
        f[2] = 100 * (2 * g - S) / 2
    }
    function d(s, c, _) {
        s /= 255,
        c /= 255,
        _ /= 255;
        const g = Math.min(s, c, _)
          , S = Math.max(s, c, _)
          , J = 1 - S;
        if (S === g) {
            f[0] = 0,
            f[1] = g,
            f[2] = J;
            return
        }
        let k = s === g ? c - _ : c === g ? _ - s : s - c
          , u = s === g ? 3 : c === g ? 5 : 1;
        f[0] = (u - k / (S - g)) / 6,
        f[1] = g,
        f[2] = J
    }
    return V
}
var Z = {}, Pe;
function $t() {
    if (Pe)
        return Z;
    Pe = 1;
    var e = Z && Z.__createBinding || (Object.create ? function(T, D, R, M) {
        M === void 0 && (M = R);
        var d = Object.getOwnPropertyDescriptor(D, R);
        (!d || ("get"in d ? !D.__esModule : d.writable || d.configurable)) && (d = {
            enumerable: !0,
            get: function() {
                return D[R]
            }
        }),
        Object.defineProperty(T, M, d)
    }
    : function(T, D, R, M) {
        M === void 0 && (M = R),
        T[M] = D[R]
    }
    )
      , t = Z && Z.__setModuleDefault || (Object.create ? function(T, D) {
        Object.defineProperty(T, "default", {
            enumerable: !0,
            value: D
        })
    }
    : function(T, D) {
        T.default = D
    }
    )
      , n = Z && Z.__importStar || function(T) {
        if (T && T.__esModule)
            return T;
        var D = {};
        if (T != null)
            for (var R in T)
                R !== "default" && Object.prototype.hasOwnProperty.call(T, R) && e(D, T, R);
        return t(D, T),
        D
    }
    ;
    Object.defineProperty(Z, "__esModule", {
        value: !0
    }),
    Z.alpha = C,
    Z.darken = O,
    Z.lighten = N,
    Z.blend = B,
    Z.getLuminance = x;
    const r = n(me())
      , {getRed: o, getGreen: a, getBlue: i, getAlpha: l, setAlpha: f, newColor: p} = r;
    function C(T, D) {
        return f(T, Math.round(D * 255))
    }
    function O(T, D) {
        const R = o(T)
          , M = a(T)
          , d = i(T)
          , s = l(T)
          , c = 1 - D;
        return p(R * c, M * c, d * c, s)
    }
    function N(T, D) {
        const R = o(T)
          , M = a(T)
          , d = i(T)
          , s = l(T);
        return p(R + (255 - R) * D, M + (255 - M) * D, d + (255 - d) * D, s)
    }
    function B(T, D, R, M=1) {
        const d = (g, S) => Math.round((g ** (1 / M) * (1 - R) + S ** (1 / M) * R) ** M)
          , s = d(o(T), o(D))
          , c = d(a(T), a(D))
          , _ = d(i(T), i(D));
        return p(s, c, _, 255)
    }
    function x(T) {
        const D = o(T) / 255
          , R = a(T) / 255
          , M = i(T) / 255
          , d = g => g <= .03928 ? g / 12.92 : ((g + .055) / 1.055) ** 2.4
          , s = d(D)
          , c = d(R)
          , _ = d(M);
        return Math.round((.2126 * s + .7152 * c + .0722 * _) * 1e3) / 1e3
    }
    return Z
}
var Ne;
function Ht() {
    return Ne || (Ne = 1,
    function(e) {
        var t = re && re.__createBinding || (Object.create ? function(r, o, a, i) {
            i === void 0 && (i = a);
            var l = Object.getOwnPropertyDescriptor(o, a);
            (!l || ("get"in l ? !o.__esModule : l.writable || l.configurable)) && (l = {
                enumerable: !0,
                get: function() {
                    return o[a]
                }
            }),
            Object.defineProperty(r, i, l)
        }
        : function(r, o, a, i) {
            i === void 0 && (i = a),
            r[i] = o[a]
        }
        )
          , n = re && re.__exportStar || function(r, o) {
            for (var a in r)
                a !== "default" && !Object.prototype.hasOwnProperty.call(o, a) && t(o, r, a)
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        n(me(), e),
        n(Gt(), e),
        n(Xt(), e),
        n($t(), e)
    }(re)),
    re
}
var Be = Ht();
const qt = ({onScroll: e}) => (gt( ({scrollTop: t}) => {
    e?.(t)
}
),
null)
  , kt = ({shouldScrollToTop: e}) => {
    const t = vt();
    return le.useEffect( () => {
        e === !0 && t({
            behavior: "smooth"
        })
    }
    , [e, t]),
    null
}
  , Vt = () => {
    const e = bt();
    le.useEffect( () => {
        e({
            behavior: "smooth"
        })
    }
    , [e]);
    const [t] = yt();
    return t ? null : P.jsx("button", {
        onClick: () => e({
            behavior: "smooth"
        }),
        className: "border-token-border-default bg-token-main-surface-primary text-token-text-secondary absolute end-1/2 bottom-5 z-10 flex h-8 w-8 translate-x-1/2 cursor-pointer items-center justify-center rounded-full border bg-clip-padding",
        children: P.jsx(_t, {
            className: "icon text-token-text-primary"
        })
    })
}
;
function Ut({children: e, onScroll: t, shouldScrollToTop: n, scrollToBottomMode: r="top", isLoading: o=!1, header: a, height: i="auto", overlay: l, hideChildren: f=!1, disableScroll: p=!1, ref: C}) {
    const O = P.jsx("div", {
        className: ae(f ? "hidden" : "block", i === "auto" ? "h-auto" : "h-full"),
        children: e
    });
    return P.jsxs("section", {
        ref: C,
        className: ae("relative flex min-h-0 flex-auto grow flex-col", p && "overflow-hidden"),
        children: [P.jsx(nt, {
            children: o && P.jsx(Bt, {
                zIndexKey: "textdocDiffLoadingOverlay"
            })
        }), !p && P.jsxs(It, {
            followButtonClassName: "hidden",
            initialScrollBehavior: "auto",
            scrollViewClassName: "flex flex-col",
            className: "h-full",
            mode: r,
            children: [a, O, l && P.jsx("div", {
                className: "pointer-events-none w-full flex-1",
                children: l
            }), r === "bottom" && P.jsx(Vt, {}), P.jsx(qt, {
                onScroll: t
            }), P.jsx(kt, {
                shouldScrollToTop: n
            })]
        }), p && P.jsxs(P.Fragment, {
            children: [a, O, l && P.jsx("div", {
                className: "pointer-events-none h-full w-full",
                children: l
            })]
        })]
    })
}
function Yt({className: e, children: t}) {
    return P.jsx("header", {
        className: ae(e, "touch:px-2.5 h-header-height flex flex-none items-center justify-between gap-1 px-2"),
        children: t
    })
}
function Jt({className: e, children: t, size: n="lg", bold: r}) {
    return P.jsx("h2", {
        className: ae(e, "text-token-text-primary truncate", r ? "font-bold" : "font-normal", n === "lg" && "text-lg", n === "base" && "text-base"),
        children: t
    })
}
const Zt = ({onClick: e}) => {
    const n = Je() ? mt : it;
    return P.jsx(ht, {
        icon: n,
        onClick: e
    })
}
  , Fe = e => {
    const {r: t, g: n, b: r} = Be.toRGBA(Be.parse(e));
    return (t * 299 + n * 587 + r * 114) / 1e3 < 125
}
  , be = ({children: e, isPreviewingCode: t=!1, transitionBackground: n=!1, previewBackgroundColor: r=null}) => {
    const o = t && r && Fe(r)
      , a = t && r && !Fe(r);
    return P.jsx("section", {
        className: ae("popover flex h-full w-full flex-col", n && "transition-colors", o && "dark", a && "light", t ? "bg-[rgba(249,249,249,1)] dark:bg-[rgba(33,33,33,1)]" : "bg-transparent"),
        style: {
            backgroundColor: t && r ? r : void 0
        },
        children: e
    })
}
;
be.Title = Jt;
be.CloseButton = Zt;
be.Header = Yt;
be.Content = Ut;
const Wt = Ze( () => oe( () => import("./dtfhive2hodlq0ri.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26])).then(e => e.CodeComposer), {
    loading: () => P.jsx("div", {
        className: Ye.code,
        children: P.jsx("div", {
            className: "h-full w-full px-4",
            children: P.jsx(We, {
                lines: 20
            })
        })
    })
})
  , Rn = e => P.jsx(Wt, {
    ...e
})
  , Sn = (e=[]) => e.filter( ({status: t}) => t !== Tt.DISMISSED);
var Qt = (e => (e.ALL_HIDDEN = "all_hidden",
e.COMMENTS_READONLY = "comments_readonly",
e.ENABLED = "enabled",
e))(Qt || {});
const je = 775
  , Kt = 580
  , en = 36
  , tn = 18
  , wn = 24
  , In = 16
  , nn = ({numLines: e=20}) => {
    const [{width: t},n] = zt()
      , r = Je()
      , o = t >= je + Mt ? je : Kt
      , a = r ? tn : en;
    return P.jsx("div", {
        className: ae(Ye.document, "mt-4"),
        ref: n,
        style: {
            margin: `0 ${a}px`
        },
        children: P.jsx("div", {
            style: {
                width: o
            },
            children: P.jsx(We, {
                lines: e
            })
        })
    })
}
  , rn = Ze( () => oe( () => import("./jqdk4ldzigxhqhah.js"), __vite__mapDeps([27, 1, 28, 5, 6, 14, 3, 4, 7, 13, 11, 15, 16, 12, 9, 10, 17, 29, 30, 18, 31, 32, 33, 20, 21, 22, 23, 34, 35, 25, 26])).then(e => e.DocumentComposer), {
    loading: () => P.jsx(nn, {})
})
  , Mn = e => P.jsx(rn, {
    ...e
});
function ee() {}
ee.prototype = {
    diff: function(t, n) {
        var r, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = o.callback;
        typeof o == "function" && (a = o,
        o = {});
        var i = this;
        function l(s) {
            return s = i.postProcess(s, o),
            a ? (setTimeout(function() {
                a(s)
            }, 0),
            !0) : s
        }
        t = this.castInput(t, o),
        n = this.castInput(n, o),
        t = this.removeEmpty(this.tokenize(t, o)),
        n = this.removeEmpty(this.tokenize(n, o));
        var f = n.length
          , p = t.length
          , C = 1
          , O = f + p;
        o.maxEditLength != null && (O = Math.min(O, o.maxEditLength));
        var N = (r = o.timeout) !== null && r !== void 0 ? r : 1 / 0
          , B = Date.now() + N
          , x = [{
            oldPos: -1,
            lastComponent: void 0
        }]
          , T = this.extractCommon(x[0], n, t, 0, o);
        if (x[0].oldPos + 1 >= p && T + 1 >= f)
            return l(Ge(i, x[0].lastComponent, n, t, i.useLongestToken));
        var D = -1 / 0
          , R = 1 / 0;
        function M() {
            for (var s = Math.max(D, -C); s <= Math.min(R, C); s += 2) {
                var c = void 0
                  , _ = x[s - 1]
                  , g = x[s + 1];
                _ && (x[s - 1] = void 0);
                var S = !1;
                if (g) {
                    var J = g.oldPos - s;
                    S = g && 0 <= J && J < f
                }
                var k = _ && _.oldPos + 1 < p;
                if (!S && !k) {
                    x[s] = void 0;
                    continue
                }
                if (!k || S && _.oldPos < g.oldPos ? c = i.addToPath(g, !0, !1, 0, o) : c = i.addToPath(_, !1, !0, 1, o),
                T = i.extractCommon(c, n, t, s, o),
                c.oldPos + 1 >= p && T + 1 >= f)
                    return l(Ge(i, c.lastComponent, n, t, i.useLongestToken));
                x[s] = c,
                c.oldPos + 1 >= p && (R = Math.min(R, s - 1)),
                T + 1 >= f && (D = Math.max(D, s + 1))
            }
            C++
        }
        if (a)
            (function s() {
                setTimeout(function() {
                    if (C > O || Date.now() > B)
                        return a();
                    M() || s()
                }, 0)
            }
            )();
        else
            for (; C <= O && Date.now() <= B; ) {
                var d = M();
                if (d)
                    return d
            }
    },
    addToPath: function(t, n, r, o, a) {
        var i = t.lastComponent;
        return i && !a.oneChangePerToken && i.added === n && i.removed === r ? {
            oldPos: t.oldPos + o,
            lastComponent: {
                count: i.count + 1,
                added: n,
                removed: r,
                previousComponent: i.previousComponent
            }
        } : {
            oldPos: t.oldPos + o,
            lastComponent: {
                count: 1,
                added: n,
                removed: r,
                previousComponent: i
            }
        }
    },
    extractCommon: function(t, n, r, o, a) {
        for (var i = n.length, l = r.length, f = t.oldPos, p = f - o, C = 0; p + 1 < i && f + 1 < l && this.equals(r[f + 1], n[p + 1], a); )
            p++,
            f++,
            C++,
            a.oneChangePerToken && (t.lastComponent = {
                count: 1,
                previousComponent: t.lastComponent,
                added: !1,
                removed: !1
            });
        return C && !a.oneChangePerToken && (t.lastComponent = {
            count: C,
            previousComponent: t.lastComponent,
            added: !1,
            removed: !1
        }),
        t.oldPos = f,
        p
    },
    equals: function(t, n, r) {
        return r.comparator ? r.comparator(t, n) : t === n || r.ignoreCase && t.toLowerCase() === n.toLowerCase()
    },
    removeEmpty: function(t) {
        for (var n = [], r = 0; r < t.length; r++)
            t[r] && n.push(t[r]);
        return n
    },
    castInput: function(t) {
        return t
    },
    tokenize: function(t) {
        return Array.from(t)
    },
    join: function(t) {
        return t.join("")
    },
    postProcess: function(t) {
        return t
    }
};
function Ge(e, t, n, r, o) {
    for (var a = [], i; t; )
        a.push(t),
        i = t.previousComponent,
        delete t.previousComponent,
        t = i;
    a.reverse();
    for (var l = 0, f = a.length, p = 0, C = 0; l < f; l++) {
        var O = a[l];
        if (O.removed)
            O.value = e.join(r.slice(C, C + O.count)),
            C += O.count;
        else {
            if (!O.added && o) {
                var N = n.slice(p, p + O.count);
                N = N.map(function(B, x) {
                    var T = r[C + x];
                    return T.length > B.length ? T : B
                }),
                O.value = e.join(N)
            } else
                O.value = e.join(n.slice(p, p + O.count));
            p += O.count,
            O.added || (C += O.count)
        }
    }
    return a
}
function Xe(e, t) {
    var n;
    for (n = 0; n < e.length && n < t.length; n++)
        if (e[n] != t[n])
            return e.slice(0, n);
    return e.slice(0, n)
}
function $e(e, t) {
    var n;
    if (!e || !t || e[e.length - 1] != t[t.length - 1])
        return "";
    for (n = 0; n < e.length && n < t.length; n++)
        if (e[e.length - (n + 1)] != t[t.length - (n + 1)])
            return e.slice(-n);
    return e.slice(-n)
}
function Ee(e, t, n) {
    if (e.slice(0, t.length) != t)
        throw Error("string ".concat(JSON.stringify(e), " doesn't start with prefix ").concat(JSON.stringify(t), "; this is a bug"));
    return n + e.slice(t.length)
}
function Ce(e, t, n) {
    if (!t)
        return e + n;
    if (e.slice(-t.length) != t)
        throw Error("string ".concat(JSON.stringify(e), " doesn't end with suffix ").concat(JSON.stringify(t), "; this is a bug"));
    return e.slice(0, -t.length) + n
}
function ce(e, t) {
    return Ee(e, t, "")
}
function de(e, t) {
    return Ce(e, t, "")
}
function He(e, t) {
    return t.slice(0, on(e, t))
}
function on(e, t) {
    var n = 0;
    e.length > t.length && (n = e.length - t.length);
    var r = t.length;
    e.length < t.length && (r = e.length);
    var o = Array(r)
      , a = 0;
    o[0] = 0;
    for (var i = 1; i < r; i++) {
        for (t[i] == t[a] ? o[i] = o[a] : o[i] = a; a > 0 && t[i] != t[a]; )
            a = o[a];
        t[i] == t[a] && a++
    }
    a = 0;
    for (var l = n; l < e.length; l++) {
        for (; a > 0 && e[l] != t[a]; )
            a = o[a];
        e[l] == t[a] && a++
    }
    return a
}
var he = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}"
  , an = new RegExp("[".concat(he, "]+|\\s+|[^").concat(he, "]"),"ug")
  , ye = new ee;
ye.equals = function(e, t, n) {
    return n.ignoreCase && (e = e.toLowerCase(),
    t = t.toLowerCase()),
    e.trim() === t.trim()
}
;
ye.tokenize = function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n;
    if (t.intlSegmenter) {
        if (t.intlSegmenter.resolvedOptions().granularity != "word")
            throw new Error('The segmenter passed must have a granularity of "word"');
        n = Array.from(t.intlSegmenter.segment(e), function(a) {
            return a.segment
        })
    } else
        n = e.match(an) || [];
    var r = []
      , o = null;
    return n.forEach(function(a) {
        /\s/.test(a) ? o == null ? r.push(a) : r.push(r.pop() + a) : /\s/.test(o) ? r[r.length - 1] == o ? r.push(r.pop() + a) : r.push(o + a) : r.push(a),
        o = a
    }),
    r
}
;
ye.join = function(e) {
    return e.map(function(t, n) {
        return n == 0 ? t : t.replace(/^\s+/, "")
    }).join("")
}
;
ye.postProcess = function(e, t) {
    if (!e || t.oneChangePerToken)
        return e;
    var n = null
      , r = null
      , o = null;
    return e.forEach(function(a) {
        a.added ? r = a : a.removed ? o = a : ((r || o) && qe(n, o, r, a),
        n = a,
        r = null,
        o = null)
    }),
    (r || o) && qe(n, o, r, null),
    e
}
;
function qe(e, t, n, r) {
    if (t && n) {
        var o = t.value.match(/^\s*/)[0]
          , a = t.value.match(/\s*$/)[0]
          , i = n.value.match(/^\s*/)[0]
          , l = n.value.match(/\s*$/)[0];
        if (e) {
            var f = Xe(o, i);
            e.value = Ce(e.value, i, f),
            t.value = ce(t.value, f),
            n.value = ce(n.value, f)
        }
        if (r) {
            var p = $e(a, l);
            r.value = Ee(r.value, l, p),
            t.value = de(t.value, p),
            n.value = de(n.value, p)
        }
    } else if (n)
        e && (n.value = n.value.replace(/^\s*/, "")),
        r && (r.value = r.value.replace(/^\s*/, ""));
    else if (e && r) {
        var C = r.value.match(/^\s*/)[0]
          , O = t.value.match(/^\s*/)[0]
          , N = t.value.match(/\s*$/)[0]
          , B = Xe(C, O);
        t.value = ce(t.value, B);
        var x = $e(ce(C, B), N);
        t.value = de(t.value, x),
        r.value = Ee(r.value, C, x),
        e.value = Ce(e.value, C, C.slice(0, C.length - x.length))
    } else if (r) {
        var T = r.value.match(/^\s*/)[0]
          , D = t.value.match(/\s*$/)[0]
          , R = He(D, T);
        t.value = de(t.value, R)
    } else if (e) {
        var M = e.value.match(/\s*$/)[0]
          , d = t.value.match(/^\s*/)[0]
          , s = He(M, d);
        t.value = ce(t.value, s)
    }
}
var sn = new ee;
sn.tokenize = function(e) {
    var t = new RegExp("(\\r?\\n)|[".concat(he, "]+|[^\\S\\n\\r]+|[^").concat(he, "]"),"ug");
    return e.match(t) || []
}
;
var _e = new ee;
_e.tokenize = function(e, t) {
    t.stripTrailingCr && (e = e.replace(/\r\n/g, `
`));
    var n = []
      , r = e.split(/(\n|\r\n)/);
    r[r.length - 1] || r.pop();
    for (var o = 0; o < r.length; o++) {
        var a = r[o];
        o % 2 && !t.newlineIsToken ? n[n.length - 1] += a : n.push(a)
    }
    return n
}
;
_e.equals = function(e, t, n) {
    return n.ignoreWhitespace ? ((!n.newlineIsToken || !e.includes(`
`)) && (e = e.trim()),
    (!n.newlineIsToken || !t.includes(`
`)) && (t = t.trim())) : n.ignoreNewlineAtEof && !n.newlineIsToken && (e.endsWith(`
`) && (e = e.slice(0, -1)),
    t.endsWith(`
`) && (t = t.slice(0, -1))),
    ee.prototype.equals.call(this, e, t, n)
}
;
function un(e, t, n) {
    return _e.diff(e, t, n)
}
var cn = new ee;
cn.tokenize = function(e) {
    return e.split(/(\S.+?[.!?])(?=\s+|$)/)
}
;
var ln = new ee;
ln.tokenize = function(e) {
    return e.split(/([{}:;,]|\s+)/)
}
;
function xe(e) {
    "@babel/helpers - typeof";
    return xe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    xe(e)
}
var fe = new ee;
fe.useLongestToken = !0;
fe.tokenize = _e.tokenize;
fe.castInput = function(e, t) {
    var n = t.undefinedReplacement
      , r = t.stringifyReplacer
      , o = r === void 0 ? function(a, i) {
        return typeof i > "u" ? n : i
    }
    : r;
    return typeof e == "string" ? e : JSON.stringify(Oe(e, null, null, o), o, "  ")
}
;
fe.equals = function(e, t, n) {
    return ee.prototype.equals.call(fe, e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"), n)
}
;
function Oe(e, t, n, r, o) {
    t = t || [],
    n = n || [],
    r && (e = r(o, e));
    var a;
    for (a = 0; a < t.length; a += 1)
        if (t[a] === e)
            return n[a];
    var i;
    if (Object.prototype.toString.call(e) === "[object Array]") {
        for (t.push(e),
        i = new Array(e.length),
        n.push(i),
        a = 0; a < e.length; a += 1)
            i[a] = Oe(e[a], t, n, r, o);
        return t.pop(),
        n.pop(),
        i
    }
    if (e && e.toJSON && (e = e.toJSON()),
    xe(e) === "object" && e !== null) {
        t.push(e),
        i = {},
        n.push(i);
        var l = [], f;
        for (f in e)
            Object.prototype.hasOwnProperty.call(e, f) && l.push(f);
        for (l.sort(),
        a = 0; a < l.length; a += 1)
            f = l[a],
            i[f] = Oe(e[f], t, n, r, f);
        t.pop(),
        n.pop()
    } else
        i = e;
    return i
}
var De = new ee;
De.tokenize = function(e) {
    return e.slice()
}
;
De.join = De.removeEmpty = function(e) {
    return e
}
;
var pe = (e => (e.ADDED = "added",
e.REMOVED = "removed",
e.UNCHANGED = "unchanged",
e))(pe || {});
function Ae(e) {
    if (e === "")
        return 0;
    const t = e.split(`
`).length;
    return e.endsWith(`
`) ? t - 1 : t
}
function fn(e, t) {
    return un(e, t, {
        newlineIsToken: !0
    }).map(r => ({
        count: r.count ?? Ae(r.value),
        value: r.value,
        type: r.added ? "added" : r.removed ? "removed" : "unchanged"
    }))
}
function dn(e) {
    let t = "";
    for (const {type: n, value: r} of e)
        (n === "added" || n === "unchanged") && (t += r);
    return t
}
function pn(e, t) {
    const n = Ae(t)
      , r = bn(e, n);
    return {
        changes: fn(r, t),
        numLinesDiffed: n
    }
}
function hn(e) {
    const t = [...e]
      , n = []
      , r = [];
    for (; t.length > 0; ) {
        const o = t[t.length - 1];
        if (o.type === pe.REMOVED)
            t.pop(),
            o.type === pe.REMOVED && n.unshift(o);
        else if (o.type === pe.ADDED)
            t.pop(),
            r.unshift(o);
        else
            break
    }
    return {
        prunedChanges: [...t, ...r],
        prunedRemovedChanges: n
    }
}
function mn(e, t) {
    const {changes: n, numLinesDiffed: r} = pn(e, t)
      , {prunedChanges: o, prunedRemovedChanges: a} = hn(n)
      , i = dn(o)
      , l = a.map(p => p.value).join(`
`)
      , f = Ke(e, r, "start");
    return {
        content: i + l + f,
        numLinesDiffed: Ae(i)
    }
}
function bn(e, t) {
    if (t <= 0)
        return "";
    let n = 0
      , r = e.length;
    for (let o = 0; o < e.length; o++)
        if (e[o] === `
` && (n++,
        n === t)) {
            r = o + 1;
            break
        }
    return e.substring(0, r)
}
function Ke(e, t, n="start") {
    if (t <= 0)
        return e;
    if (n === "start") {
        let i = 0;
        for (let l = 0; l < e.length; l++)
            if (e[l] === `
` && (i++,
            i === t))
                return e.substring(l + 1);
        return ""
    }
    let r = 0
      , o = -1;
    const a = e.endsWith(`
`) ? t + 1 : t;
    for (let i = e.length - 1; i >= 0; i--)
        if (e[i] === `
` && (r++,
        r === a)) {
            o = i;
            break
        }
    return o === -1 ? "" : e.substring(0, o + 1)
}
function Ln(e, t) {
    const n = e?.type ?? A.LOADING
      , r = e?.content ?? ""
      , o = Et(e);
    if (!Ct(n) || t == null || !o || !xt(e))
        return {
            content: r,
            currentlyStreamingLineIndex: null
        };
    const a = Ke(r, 1, "end");
    if (a === "")
        return {
            content: t.content,
            currentlyStreamingLineIndex: 0
        };
    const i = mn(t.content, a);
    return {
        content: i.content,
        currentlyStreamingLineIndex: i.numLinesDiffed
    }
}
async function et(e) {
    if (Lt.every(l => !e.includes(l)))
        return e;
    const {unified: t} = await oe(async () => {
        const {unified: l} = await import("./ckp56qklot786ulr.js").then(f => f.Au);
        return {
            unified: l
        }
    }
    , __vite__mapDeps([4, 1, 5, 6, 7]))
      , {CANVAS_REMARK_PLUGINS: n} = await oe(async () => {
        const {CANVAS_REMARK_PLUGINS: l} = await import("./o8hspyy2fyv2o9n5.js").then(f => f.p);
        return {
            CANVAS_REMARK_PLUGINS: l
        }
    }
    , __vite__mapDeps([29, 16, 4, 1, 5, 6, 7, 15, 12, 11, 30]))
      , {stripDirectivePlugin: r} = await oe(async () => {
        const {stripDirectivePlugin: l} = await import("./f3gnxwjbhhemaa6w.js");
        return {
            stripDirectivePlugin: l
        }
    }
    , __vite__mapDeps([31, 11, 1, 5, 6, 4, 7]))
      , {hiveLogDirectivePlugin: o} = await oe(async () => {
        const {hiveLogDirectivePlugin: l} = await import("./9k8yv4dhh02fqujo.js").then(f => f.k);
        return {
            hiveLogDirectivePlugin: l
        }
    }
    , __vite__mapDeps([11, 1, 5, 6, 4, 7]))
      , a = t();
    a.use(o).use(r).use(n);
    const i = await a.process(e);
    return String(i).trim()
}
function zn({textdocVersion: e, clientThreadId: t}) {
    const n = ut()
      , r = Ue()
      , o = Qe()
      , [a,i] = le.useState(!1)
      , l = ct()
      , f = Ot(O => e && O?.lastCanvasAssistantMessageById[e.textdocId])
      , p = le.useRef(e?.content ?? "");
    return le.useEffect( () => {
        p.current = e?.content ?? ""
    }
    , [e]),
    {
        handleCopy: O => {
            a || (l(async () => {
                const N = await et(p.current)
                  , B = ft(t);
                e != null && B != null && f != null && At(n, {
                    type: "copy",
                    source: "mouse",
                    location: "canvas",
                    selectedText: N,
                    messageId: f,
                    serverThreadId: B
                }),
                Se.logButtonClick(Rt.COPY, {
                    contentLength: N.length,
                    textdocType: e?.type
                });
                let x = {
                    "text/plain": N
                };
                if (e?.type === A.DOCUMENT)
                    try {
                        const {markdownToClipboardContent: T} = await oe(async () => {
                            const {markdownToClipboardContent: D} = await import("./llrie03z1kvfi4vu.js").then(R => R.g);
                            return {
                                markdownToClipboardContent: D
                            }
                        }
                        , __vite__mapDeps([36, 4, 1, 5, 6, 7, 37, 16, 38, 32]));
                        x = T(N, [])
                    } catch (T) {
                        Se.logError("Error copying rich text", T)
                    }
                St(x, o, O)
            }
            , 0),
            i(!0),
            l( () => i(!1), 2e3))
        }
        ,
        Icon: a ? lt : Dt,
        copyLabel: r.formatMessage(yn.copy)
    }
}
const yn = rt({
    copy: {
        id: "rbIYfo",
        defaultMessage: "Copy"
    }
})
  , ke = {
    [A.CODE_BASH]: {
        filenameExtension: "sh",
        blobType: "text/x-shellscript"
    },
    [A.CODE_ZSH]: {
        filenameExtension: "zsh",
        blobType: "text/x-shellscript"
    },
    [A.CODE_JAVASCRIPT]: {
        filenameExtension: "js",
        blobType: "application/javascript"
    },
    [A.CODE_TYPESCRIPT]: {
        filenameExtension: "ts",
        blobType: "application/typescript"
    },
    [A.CODE_HTML]: {
        filenameExtension: "html",
        blobType: "text/html"
    },
    [A.CODE_CSS]: {
        filenameExtension: "css",
        blobType: "text/css"
    },
    [A.CODE_PYTHON]: {
        filenameExtension: "py",
        blobType: "text/x-python"
    },
    [A.CODE_JSON]: {
        filenameExtension: "json",
        blobType: "application/json"
    },
    [A.CODE_SQL]: {
        filenameExtension: "sql",
        blobType: "application/sql"
    },
    [A.CODE_GO]: {
        filenameExtension: "go",
        blobType: "text/x-go"
    },
    [A.CODE_YAML]: {
        filenameExtension: "yaml",
        blobType: "application/x-yaml"
    },
    [A.CODE_JAVA]: {
        filenameExtension: "java",
        blobType: "text/x-java-source"
    },
    [A.CODE_RUST]: {
        filenameExtension: "rs",
        blobType: "text/rust"
    },
    [A.CODE_CPP]: {
        filenameExtension: "cpp",
        blobType: "text/x-c++src"
    },
    [A.CODE_SWIFT]: {
        filenameExtension: "swift",
        blobType: "text/swift"
    },
    [A.CODE_PHP]: {
        filenameExtension: "php",
        blobType: "application/x-httpd-php"
    },
    [A.CODE_XML]: {
        filenameExtension: "xml",
        blobType: "application/xml"
    },
    [A.CODE_RUBY]: {
        filenameExtension: "rb",
        blobType: "text/x-ruby"
    },
    [A.CODE_HASKELL]: {
        filenameExtension: "hs",
        blobType: "text/x-haskell"
    },
    [A.CODE_KOTLIN]: {
        filenameExtension: "kt",
        blobType: "text/x-kotlin"
    },
    [A.CODE_CSHARP]: {
        filenameExtension: "cs",
        blobType: "text/x-csharp"
    },
    [A.CODE_C]: {
        filenameExtension: "c",
        blobType: "text/x-csrc"
    },
    [A.CODE_OBJECTIVEC]: {
        filenameExtension: "m",
        blobType: "text/x-objectivec"
    },
    [A.CODE_R]: {
        filenameExtension: "r",
        blobType: "text/plain"
    },
    [A.CODE_LUA]: {
        filenameExtension: "lua",
        blobType: "text/x-lua"
    },
    [A.CODE_DART]: {
        filenameExtension: "dart",
        blobType: "text/x-dart"
    },
    [A.CODE_SCALA]: {
        filenameExtension: "scala",
        blobType: "text/x-scala"
    },
    [A.CODE_PERL]: {
        filenameExtension: "pl",
        blobType: "text/x-perl"
    },
    [A.CODE_COMMONLISP]: {
        filenameExtension: "lisp",
        blobType: "text/x-common-lisp"
    },
    [A.CODE_CLOJURE]: {
        filenameExtension: "clj",
        blobType: "text/x-clojure"
    },
    [A.CODE_OCAML]: {
        filenameExtension: "ml",
        blobType: "text/x-ocaml"
    },
    [A.CODE_POWERSHELL]: {
        filenameExtension: "ps1",
        blobType: "text/x-powershell"
    },
    [A.CODE_VERILOG]: {
        filenameExtension: "v",
        blobType: "text/x-verilog"
    },
    [A.CODE_DOCKERFILE]: {
        filenameExtension: "Dockerfile",
        blobType: "text/x-dockerfile"
    },
    [A.CODE_VUE]: {
        filenameExtension: "vue",
        blobType: "text/x-vue"
    },
    [A.CODE_REACT]: {
        filenameExtension: "jsx",
        blobType: "application/javascript"
    },
    [A.CODE_OTHER]: {
        filenameExtension: "txt",
        blobType: "text/plain"
    },
    [A.DOCUMENT]: {
        filenameExtension: "md",
        blobType: "text/markdown"
    },
    [A.LOADING]: {
        filenameExtension: "txt",
        blobType: "text/plain"
    }
};
var ve, Ve;
function _n() {
    if (Ve)
        return ve;
    Ve = 1;
    var e = Pt()
      , t = e(function(n, r, o) {
        return n + (o ? "_" : "") + r.toLowerCase()
    });
    return ve = t,
    ve
}
var gn = _n();
const Te = ot(gn);
function Pn(e) {
    const t = Ue()
      , n = Qe()
      , r = t.formatMessage({
        id: "canvas.downloadFileError",
        defaultMessage: "Failed to download file. Please try again later."
    })
      , {mutate: o, isPending: a} = at({
        mutationFn: async ({textdocId: p, exportType: C}) => {
            const O = await pt.safePost("/export_doc/canvas", {
                requestBody: {
                    textdoc_id: p,
                    export_type: C
                },
                skipJsonTransform: !0
            });
            if (!O.ok)
                throw new Error("Failed to download file");
            return O
        }
        ,
        onSuccess: async (p, {exportType: C}) => {
            const O = await p.blob()
              , N = p.headers.get("Content-Disposition")
              , B = wt(N) ?? `${Te(e.title)}.${C}`;
            ge(O, B)
        }
        ,
        onError: p => {
            n.danger(r, {
                toastId: "textdoc_download_button",
                loggingTitle: r,
                loggingDescription: "Failed to download file"
            }),
            dt.addError(p)
        }
    })
      , i = async p => {
        if (e.type !== A.LOADING && e.type === A.DOCUMENT) {
            let C;
            switch (p) {
            case "md":
                C = "chatgpt_canvas_md_download";
                break;
            case "pdf":
                C = "chatgpt_canvas_pdf_download";
                break;
            case "docx":
                C = "chatgpt_canvas_docx_download";
                break
            }
            if (Re.logEventWithStatsig("ChatGPT Canvas Download", C),
            p === "pdf" || p === "docx")
                o({
                    textdocId: e.textdocId,
                    exportType: p
                });
            else if (p === "md") {
                const {filenameExtension: O, blobType: N} = ke[e.type]
                  , B = await et(e.content)
                  , x = new Blob([B],{
                    type: N
                });
                ge(x, `${Te(e.title)}.${O}`)
            }
        }
    }
      , l = () => {
        const {filenameExtension: p, blobType: C} = ke[e.type];
        if (e.type === A.LOADING)
            return;
        Re.logEventWithStatsig("ChatGPT Canvas Download", "chatgpt_canvas_code_download", {
            blobType: C
        });
        const O = new Blob([e.content],{
            type: C
        });
        ge(O, `${Te(e.title)}.${p}`)
    }
      , f = t.formatMessage({
        id: "canvas.download-button",
        defaultMessage: "Download"
    });
    return {
        handleFileDownload: i,
        handleBlobDownload: l,
        isLoading: a,
        downloadCopyLabel: f,
        isDocument: e.type === A.DOCUMENT
    }
}
export {Rn as A, Qt as C, nn as D, Bt as L, wn as M, Nt as O, In as S, Mn as a, be as b, Pn as c, tn as d, en as e, Sn as f, Ln as g, je as h, Kt as i, zn as u};
//# sourceMappingURL=du2o33bqvziie5hn.js.map
