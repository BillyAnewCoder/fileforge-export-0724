const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/foru57xd139ner19.js", "assets/juy90og0wtbp77qa.js", "assets/dc2xxjkicf2pz0mj.js", "assets/root-fv49dn40.css", "assets/ckp56qklot786ulr.js", "assets/conversation-small-j9iamy23.css", "assets/h0zoartyn6ddtvom.js", "assets/BusinessesMap-oeh39yix.css"]))) => i.map(i => d[i]);
import {r as P, h as Xe, j as w, M as ne, g as Zi, a as Ki, m as Qi, R as _i, f as ji, x as Yt, c as es} from "./juy90og0wtbp77qa.js";
import {ey as ns, eU as ts, ls as rs, vx as $, vy as be, vz as B, vA as Ye, vB as ce, vC as Ee, vD as te, vE as tt, vF as de, vG as xe, s2 as Oe, vH as os, vI as is, vJ as ss, s1 as sr, vK as xt, s3 as Lt, vL as vt, vM as Mt, vN as Tt, vO as ze, vP as Ge, vQ as er, vR as nr, vS as ls, vT as fs, vU as us, vV as as, vW as cs, vX as Mo, vY as Do, vZ as Fo, v_ as Jo, v$ as wt, w0 as ds, w1 as hs, pQ as gs, w2 as Uo, w3 as ps, w4 as ms, ke as mn, es as vs, s4 as Bo, w5 as Mr, w6 as ys, s5 as Ns, bR as Es, k8 as xs, d3 as Ts, ju as ws, w7 as Is, w8 as ks, w9 as Rs, wa as Cs, b$ as Wo, c0 as Os, wb as Dr, W as Ss, ec as As, a2 as Fr, s7 as Ps, fu as Ls, wc as Ms, j3 as lr, wd as Xo, mq as Vo, we as Ds, wf as Fs, t5 as Js, wg as Us, wh as Bs, wi as Ws, wj as It, wk as kt, eE as Xs, wl as Jr, wm as Ur, wn as Vs, wo as Hs, wp as qs, wq as Br, wr as $t, jf as Ho, ws as _e, pN as zs, wt as Gs, wu as bs, wv as Ys, fn as $s, a5 as an, hj as Zs, ww as Wr, wx as Ks, wy as Qs, wz as _s, wA as js, wB as el, wC as nl, wD as tl, wE as rl, wF as ol, wG as il, wH as sl, wI as ll, wJ as fl, wK as ul, wL as al, wM as cl, wN as dl, wO as hl, wP as gl, wQ as pl, wR as ml, wS as vl, wT as yl, ml as Nl, wU as El, wV as xl, wW as Tl, wX as wl, wY as Il, kw as Xr, wZ as kl, fp as Rl, w_ as Cl, w$ as Ol, x0 as Sl, x1 as Al, x2 as Pl, x3 as Ll, x4 as Ml, m4 as Dl, x5 as Fl, kf as Jl} from "./ckp56qklot786ulr.js";
import {u as qo, R as zo, a as Go, b as Ul, I as Bl, c as Wl, C as Xl, d as Vl, e as Hl, f as ql, M as zl, r as Gl} from "./llrie03z1kvfi4vu.js";
import {ak as bo, aS as Dt, D as Ze, b2 as Yo, ec as bl, B as it, e as ft, f as Ft, bf as Yl, ag as fr, g5 as $o, c5 as $l, ar as we, aG as Zo, hB as Zl, by as Vr, aA as Kl, d2 as Ql, aD as _l, aE as jl, dG as Ko, hz as ef, np as nf, lq as Qo, af as tf, ay as Jt, fr as ur, jb as rt, bv as _o, bh as rf, nq as of, hJ as sf, aF as lf, hS as ff, as as uf, at as af, hH as jo, P as cf, b3 as df, iJ as hf, k as gf, dX as pf} from "./dc2xxjkicf2pz0mj.js";
import {f as mf, c as vf, d as yf} from "./o6wb3ptvu0bk81yq.js";
import {P as Nf} from "./dmfmxszxfbs8gsbx.js";
import {W as Ef} from "./dq2hdjj12gdqq0p1.js";
import {u as xf, a as Tf} from "./ezqsz68yx4uzdtqb.js";
import {v as Hr, C as wf, A as If, a as kf, L as Rf, B as Cf, p as Of, b as Sf, c as Af, P as Pf, d as Lf, i as Mf, e as Df} from "./mre9dehcylnm0d4q.js";
const Cg = e => {
    const [n,t] = P.useState(null);
    return bo(e, o => {
        if (n)
            return n;
        const s = Yo.findNode(o, c => c.message.metadata?.visited_risky_domain !== void 0);
        return s?.message.metadata?.visited_risky_domain ? (t(s?.message.metadata?.visited_risky_domain),
        s.message.metadata?.visited_risky_domain) : null
    }
    )
}
  , Ff = (e, n) => {
    const {clientThreadId: t} = P.useContext(mf)
      , r = n || Dt(t)
      , o = P.useMemo( () => e ? [e] : [], [e]);
    return ns(o, void 0, r)[0]?.data?.url
}
  , Og = e => {
    const [n,t] = P.useState(e);
    return P.useEffect( () => {
        if (!e || e === n)
            return;
        const r = new Image;
        return r.src = e,
        r.onload = () => t(e),
        r.onerror = () => console.warn("failed to load", e),
        () => {
            r.src = "",
            r.onload = null,
            r.onerror = null
        }
    }
    , [e, n]),
    n
}
  , Jf = e => e.replace(/^wwws?\./, "")
  , Uf = ["localhost", "127.0.0.1", "newtab"];
function Bf(e) {
    try {
        return new URL(e)
    } catch (n) {
        return Ze.addError(n),
        null
    }
}
function Sg(e) {
    const n = e?.vmMetadata?.url;
    if (!n)
        return {
            domain: null,
            origin: null
        };
    if (n.startsWith("data:"))
        return {
            domain: null,
            origin: null
        };
    const t = Bf(n);
    if (!t)
        return {
            domain: null,
            origin: null
        };
    if (Uf.includes(t.hostname))
        return {
            domain: null,
            origin: null
        };
    const r = t.origin;
    return {
        domain: Jf(t.hostname),
        origin: r
    }
}
function Wf({citation: e, clientThreadId: n, nodeType: t}) {
    const r = Xe()
      , o = Dt(n)
      , s = Ff(e.screenshot_asset_pointer, o);
    return t === "containerDirective" && r.formatMessage({
        id: "4/Vs6a",
        defaultMessage: "Cited Screenshot"
    }),
    w.jsx(ts, {
        side: "top",
        triggerButton: w.jsx("span", {
            className: "inline-flex items-center font-bold",
            children: w.jsx(ne, {
                id: "qUxKU1",
                defaultMessage: "{startChar}screenshot {icon}{endChar}",
                values: {
                    startChar: "「",
                    icon: w.jsx(rs, {
                        className: "mb-1 inline-block size-5"
                    }),
                    endChar: "」"
                }
            })
        }),
        className: "max-w-xl",
        children: s ? w.jsx("img", {
            className: "w-xl max-w-screen",
            src: s,
            alt: r.formatMessage({
                id: "4/Vs6a",
                defaultMessage: "Cited Screenshot"
            })
        }) : w.jsx("div", {
            className: "text-sm",
            children: w.jsx(ne, {
                id: "BUdJTR",
                defaultMessage: "Screenshot not available"
            })
        })
    })
}
var tr = (e => (e[e.TYPE_UNSET = 0] = "TYPE_UNSET",
e[e.TEXT = 1] = "TEXT",
e[e.TEXT_GROUP = 2] = "TEXT_GROUP",
e[e.IMAGE = 3] = "IMAGE",
e[e.CHART = 4] = "CHART",
e[e.SHAPE = 5] = "SHAPE",
e[e.CHART_REFERENCE = 6] = "CHART_REFERENCE",
e[e.IMAGE_REFERENCE = 7] = "IMAGE_REFERENCE",
e[e.VIDEO_REFERENCE = 8] = "VIDEO_REFERENCE",
e[e.TABLE = 9] = "TABLE",
e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED",
e))(tr || {});
function Xf(e) {
    switch (e) {
    case 0:
    case "TYPE_UNSET":
        return 0;
    case 1:
    case "TEXT":
        return 1;
    case 2:
    case "TEXT_GROUP":
        return 2;
    case 3:
    case "IMAGE":
        return 3;
    case 4:
    case "CHART":
        return 4;
    case 5:
    case "SHAPE":
        return 5;
    case 6:
    case "CHART_REFERENCE":
        return 6;
    case 7:
    case "IMAGE_REFERENCE":
        return 7;
    case 8:
    case "VIDEO_REFERENCE":
        return 8;
    case 9:
    case "TABLE":
        return 9;
    case -1:
    case "UNRECOGNIZED":
    default:
        return -1
    }
}
function Vf(e) {
    switch (e) {
    case 0:
        return "TYPE_UNSET";
    case 1:
        return "TEXT";
    case 2:
        return "TEXT_GROUP";
    case 3:
        return "IMAGE";
    case 4:
        return "CHART";
    case 5:
        return "SHAPE";
    case 6:
        return "CHART_REFERENCE";
    case 7:
        return "IMAGE_REFERENCE";
    case 8:
        return "VIDEO_REFERENCE";
    case 9:
        return "TABLE";
    case -1:
    default:
        return "UNRECOGNIZED"
    }
}
var ei = (e => (e[e.EFFECT_TYPE_UNSET = 0] = "EFFECT_TYPE_UNSET",
e[e.OUTER_SHADOW = 1] = "OUTER_SHADOW",
e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED",
e))(ei || {});
function Hf(e) {
    switch (e) {
    case 0:
    case "EFFECT_TYPE_UNSET":
        return 0;
    case 1:
    case "OUTER_SHADOW":
        return 1;
    case -1:
    case "UNRECOGNIZED":
    default:
        return -1
    }
}
function qf(e) {
    switch (e) {
    case 0:
        return "EFFECT_TYPE_UNSET";
    case 1:
        return "OUTER_SHADOW";
    case -1:
    default:
        return "UNRECOGNIZED"
    }
}
var yt = (e => (e[e.UNKNOWN = 0] = "UNKNOWN",
e[e.RECTANGLE = 1] = "RECTANGLE",
e[e.ELLIPSE = 2] = "ELLIPSE",
e[e.ROUND_RECT = 3] = "ROUND_RECT",
e[e.POLYGON = 4] = "POLYGON",
e[e.LINE = 5] = "LINE",
e[e.ARROW = 6] = "ARROW",
e[e.DIAMOND = 7] = "DIAMOND",
e[e.TRAPEZOID = 8] = "TRAPEZOID",
e[e.STAR = 9] = "STAR",
e[e.HEART = 10] = "HEART",
e[e.PENTAGON = 11] = "PENTAGON",
e[e.CIRCLE = 12] = "CIRCLE",
e[e.OVAL = 13] = "OVAL",
e[e.WEDGE = 14] = "WEDGE",
e[e.RHOMBUS = 15] = "RHOMBUS",
e[e.TRIANGLE = 16] = "TRIANGLE",
e[e.DOWN_ARROW = 17] = "DOWN_ARROW",
e[e.UP_ARROW = 18] = "UP_ARROW",
e[e.LEFT_ARROW = 19] = "LEFT_ARROW",
e[e.RIGHT_ARROW = 20] = "RIGHT_ARROW",
e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED",
e))(yt || {});
function zf(e) {
    switch (e) {
    case 0:
    case "UNKNOWN":
        return 0;
    case 1:
    case "RECTANGLE":
        return 1;
    case 2:
    case "ELLIPSE":
        return 2;
    case 3:
    case "ROUND_RECT":
        return 3;
    case 4:
    case "POLYGON":
        return 4;
    case 5:
    case "LINE":
        return 5;
    case 6:
    case "ARROW":
        return 6;
    case 7:
    case "DIAMOND":
        return 7;
    case 8:
    case "TRAPEZOID":
        return 8;
    case 9:
    case "STAR":
        return 9;
    case 10:
    case "HEART":
        return 10;
    case 11:
    case "PENTAGON":
        return 11;
    case 12:
    case "CIRCLE":
        return 12;
    case 13:
    case "OVAL":
        return 13;
    case 14:
    case "WEDGE":
        return 14;
    case 15:
    case "RHOMBUS":
        return 15;
    case 16:
    case "TRIANGLE":
        return 16;
    case 17:
    case "DOWN_ARROW":
        return 17;
    case 18:
    case "UP_ARROW":
        return 18;
    case 19:
    case "LEFT_ARROW":
        return 19;
    case 20:
    case "RIGHT_ARROW":
        return 20;
    case -1:
    case "UNRECOGNIZED":
    default:
        return -1
    }
}
function Gf(e) {
    switch (e) {
    case 0:
        return "UNKNOWN";
    case 1:
        return "RECTANGLE";
    case 2:
        return "ELLIPSE";
    case 3:
        return "ROUND_RECT";
    case 4:
        return "POLYGON";
    case 5:
        return "LINE";
    case 6:
        return "ARROW";
    case 7:
        return "DIAMOND";
    case 8:
        return "TRAPEZOID";
    case 9:
        return "STAR";
    case 10:
        return "HEART";
    case 11:
        return "PENTAGON";
    case 12:
        return "CIRCLE";
    case 13:
        return "OVAL";
    case 14:
        return "WEDGE";
    case 15:
        return "RHOMBUS";
    case 16:
        return "TRIANGLE";
    case 17:
        return "DOWN_ARROW";
    case 18:
        return "UP_ARROW";
    case 19:
        return "LEFT_ARROW";
    case 20:
        return "RIGHT_ARROW";
    case -1:
    default:
        return "UNRECOGNIZED"
    }
}
function qr() {
    return {
        slides: [],
        theme: void 0,
        layouts: [],
        charts: []
    }
}
const ni = {
    encode(e, n=new $) {
        for (const t of e.slides)
            De.encode(t, n.uint32(10).fork()).join();
        e.theme !== void 0 && En.encode(e.theme, n.uint32(18).fork()).join();
        for (const t of e.layouts)
            wn.encode(t, n.uint32(26).fork()).join();
        for (const t of e.charts)
            be.encode(t, n.uint32(74).fork()).join();
        return n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = qr();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.slides.push(De.decode(t, t.uint32()));
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.theme = En.decode(t, t.uint32());
                    continue
                }
            case 3:
                {
                    if (s !== 26)
                        break;
                    o.layouts.push(wn.decode(t, t.uint32()));
                    continue
                }
            case 9:
                {
                    if (s !== 74)
                        break;
                    o.charts.push(be.decode(t, t.uint32()));
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            slides: globalThis.Array.isArray(e?.slides) ? e.slides.map(n => De.fromJSON(n)) : [],
            theme: J(e.theme) ? En.fromJSON(e.theme) : void 0,
            layouts: globalThis.Array.isArray(e?.layouts) ? e.layouts.map(n => wn.fromJSON(n)) : [],
            charts: globalThis.Array.isArray(e?.charts) ? e.charts.map(n => be.fromJSON(n)) : []
        }
    },
    toJSON(e) {
        const n = {};
        return e.slides?.length && (n.slides = e.slides.map(t => De.toJSON(t))),
        e.theme !== void 0 && (n.theme = En.toJSON(e.theme)),
        e.layouts?.length && (n.layouts = e.layouts.map(t => wn.toJSON(t))),
        e.charts?.length && (n.charts = e.charts.map(t => be.toJSON(t))),
        n
    },
    create(e) {
        return ni.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = qr();
        return n.slides = e.slides?.map(t => De.fromPartial(t)) || [],
        n.theme = e.theme !== void 0 && e.theme !== null ? En.fromPartial(e.theme) : void 0,
        n.layouts = e.layouts?.map(t => wn.fromPartial(t)) || [],
        n.charts = e.charts?.map(t => be.fromPartial(t)) || [],
        n
    }
};
function zr() {
    return {
        colorScheme: void 0,
        backgroundFillStyleList: [],
        lineStyleList: [],
        effectStyleList: []
    }
}
const En = {
    encode(e, n=new $) {
        e.colorScheme !== void 0 && xn.encode(e.colorScheme, n.uint32(10).fork()).join();
        for (const t of e.backgroundFillStyleList)
            ce.encode(t, n.uint32(18).fork()).join();
        for (const t of e.lineStyleList)
            Ee.encode(t, n.uint32(26).fork()).join();
        for (const t of e.effectStyleList)
            Sn.encode(t, n.uint32(34).fork()).join();
        return n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = zr();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.colorScheme = xn.decode(t, t.uint32());
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.backgroundFillStyleList.push(ce.decode(t, t.uint32()));
                    continue
                }
            case 3:
                {
                    if (s !== 26)
                        break;
                    o.lineStyleList.push(Ee.decode(t, t.uint32()));
                    continue
                }
            case 4:
                {
                    if (s !== 34)
                        break;
                    o.effectStyleList.push(Sn.decode(t, t.uint32()));
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            colorScheme: J(e.colorScheme) ? xn.fromJSON(e.colorScheme) : void 0,
            backgroundFillStyleList: globalThis.Array.isArray(e?.backgroundFillStyleList) ? e.backgroundFillStyleList.map(n => ce.fromJSON(n)) : [],
            lineStyleList: globalThis.Array.isArray(e?.lineStyleList) ? e.lineStyleList.map(n => Ee.fromJSON(n)) : [],
            effectStyleList: globalThis.Array.isArray(e?.effectStyleList) ? e.effectStyleList.map(n => Sn.fromJSON(n)) : []
        }
    },
    toJSON(e) {
        const n = {};
        return e.colorScheme !== void 0 && (n.colorScheme = xn.toJSON(e.colorScheme)),
        e.backgroundFillStyleList?.length && (n.backgroundFillStyleList = e.backgroundFillStyleList.map(t => ce.toJSON(t))),
        e.lineStyleList?.length && (n.lineStyleList = e.lineStyleList.map(t => Ee.toJSON(t))),
        e.effectStyleList?.length && (n.effectStyleList = e.effectStyleList.map(t => Sn.toJSON(t))),
        n
    },
    create(e) {
        return En.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = zr();
        return n.colorScheme = e.colorScheme !== void 0 && e.colorScheme !== null ? xn.fromPartial(e.colorScheme) : void 0,
        n.backgroundFillStyleList = e.backgroundFillStyleList?.map(t => ce.fromPartial(t)) || [],
        n.lineStyleList = e.lineStyleList?.map(t => Ee.fromPartial(t)) || [],
        n.effectStyleList = e.effectStyleList?.map(t => Sn.fromPartial(t)) || [],
        n
    }
};
function Gr() {
    return {
        name: "",
        colors: []
    }
}
const xn = {
    encode(e, n=new $) {
        e.name !== "" && n.uint32(10).string(e.name);
        for (const t of e.colors)
            Tn.encode(t, n.uint32(18).fork()).join();
        return n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = Gr();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.name = t.string();
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.colors.push(Tn.decode(t, t.uint32()));
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            name: J(e.name) ? globalThis.String(e.name) : "",
            colors: globalThis.Array.isArray(e?.colors) ? e.colors.map(n => Tn.fromJSON(n)) : []
        }
    },
    toJSON(e) {
        const n = {};
        return e.name !== "" && (n.name = e.name),
        e.colors?.length && (n.colors = e.colors.map(t => Tn.toJSON(t))),
        n
    },
    create(e) {
        return xn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = Gr();
        return n.name = e.name ?? "",
        n.colors = e.colors?.map(t => Tn.fromPartial(t)) || [],
        n
    }
};
function br() {
    return {
        name: "",
        color: void 0
    }
}
const Tn = {
    encode(e, n=new $) {
        return e.name !== "" && n.uint32(10).string(e.name),
        e.color !== void 0 && xe.encode(e.color, n.uint32(18).fork()).join(),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = br();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.name = t.string();
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.color = xe.decode(t, t.uint32());
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            name: J(e.name) ? globalThis.String(e.name) : "",
            color: J(e.color) ? xe.fromJSON(e.color) : void 0
        }
    },
    toJSON(e) {
        const n = {};
        return e.name !== "" && (n.name = e.name),
        e.color !== void 0 && (n.color = xe.toJSON(e.color)),
        n
    },
    create(e) {
        return Tn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = br();
        return n.name = e.name ?? "",
        n.color = e.color !== void 0 && e.color !== null ? xe.fromPartial(e.color) : void 0,
        n
    }
};
function Yr() {
    return {
        id: "",
        innerXml: "",
        outerXml: "",
        name: "",
        type: "",
        background: void 0,
        elements: [],
        bodyLevelStyles: [],
        titleLevelStyles: [],
        otherLevelStyles: [],
        parentLayoutId: ""
    }
}
const wn = {
    encode(e, n=new $) {
        e.id !== "" && n.uint32(10).string(e.id),
        e.innerXml !== "" && n.uint32(50).string(e.innerXml),
        e.outerXml !== "" && n.uint32(58).string(e.outerXml),
        e.name !== "" && n.uint32(66).string(e.name),
        e.type !== "" && n.uint32(74).string(e.type),
        e.background !== void 0 && Ye.encode(e.background, n.uint32(82).fork()).join();
        for (const t of e.elements)
            me.encode(t, n.uint32(90).fork()).join();
        for (const t of e.bodyLevelStyles)
            te.encode(t, n.uint32(98).fork()).join();
        for (const t of e.titleLevelStyles)
            te.encode(t, n.uint32(106).fork()).join();
        for (const t of e.otherLevelStyles)
            te.encode(t, n.uint32(114).fork()).join();
        return e.parentLayoutId !== "" && n.uint32(122).string(e.parentLayoutId),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = Yr();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.id = t.string();
                    continue
                }
            case 6:
                {
                    if (s !== 50)
                        break;
                    o.innerXml = t.string();
                    continue
                }
            case 7:
                {
                    if (s !== 58)
                        break;
                    o.outerXml = t.string();
                    continue
                }
            case 8:
                {
                    if (s !== 66)
                        break;
                    o.name = t.string();
                    continue
                }
            case 9:
                {
                    if (s !== 74)
                        break;
                    o.type = t.string();
                    continue
                }
            case 10:
                {
                    if (s !== 82)
                        break;
                    o.background = Ye.decode(t, t.uint32());
                    continue
                }
            case 11:
                {
                    if (s !== 90)
                        break;
                    o.elements.push(me.decode(t, t.uint32()));
                    continue
                }
            case 12:
                {
                    if (s !== 98)
                        break;
                    o.bodyLevelStyles.push(te.decode(t, t.uint32()));
                    continue
                }
            case 13:
                {
                    if (s !== 106)
                        break;
                    o.titleLevelStyles.push(te.decode(t, t.uint32()));
                    continue
                }
            case 14:
                {
                    if (s !== 114)
                        break;
                    o.otherLevelStyles.push(te.decode(t, t.uint32()));
                    continue
                }
            case 15:
                {
                    if (s !== 122)
                        break;
                    o.parentLayoutId = t.string();
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            id: J(e.id) ? globalThis.String(e.id) : "",
            innerXml: J(e.innerXml) ? globalThis.String(e.innerXml) : "",
            outerXml: J(e.outerXml) ? globalThis.String(e.outerXml) : "",
            name: J(e.name) ? globalThis.String(e.name) : "",
            type: J(e.type) ? globalThis.String(e.type) : "",
            background: J(e.background) ? Ye.fromJSON(e.background) : void 0,
            elements: globalThis.Array.isArray(e?.elements) ? e.elements.map(n => me.fromJSON(n)) : [],
            bodyLevelStyles: globalThis.Array.isArray(e?.bodyLevelStyles) ? e.bodyLevelStyles.map(n => te.fromJSON(n)) : [],
            titleLevelStyles: globalThis.Array.isArray(e?.titleLevelStyles) ? e.titleLevelStyles.map(n => te.fromJSON(n)) : [],
            otherLevelStyles: globalThis.Array.isArray(e?.otherLevelStyles) ? e.otherLevelStyles.map(n => te.fromJSON(n)) : [],
            parentLayoutId: J(e.parentLayoutId) ? globalThis.String(e.parentLayoutId) : ""
        }
    },
    toJSON(e) {
        const n = {};
        return e.id !== "" && (n.id = e.id),
        e.innerXml !== "" && (n.innerXml = e.innerXml),
        e.outerXml !== "" && (n.outerXml = e.outerXml),
        e.name !== "" && (n.name = e.name),
        e.type !== "" && (n.type = e.type),
        e.background !== void 0 && (n.background = Ye.toJSON(e.background)),
        e.elements?.length && (n.elements = e.elements.map(t => me.toJSON(t))),
        e.bodyLevelStyles?.length && (n.bodyLevelStyles = e.bodyLevelStyles.map(t => te.toJSON(t))),
        e.titleLevelStyles?.length && (n.titleLevelStyles = e.titleLevelStyles.map(t => te.toJSON(t))),
        e.otherLevelStyles?.length && (n.otherLevelStyles = e.otherLevelStyles.map(t => te.toJSON(t))),
        e.parentLayoutId !== "" && (n.parentLayoutId = e.parentLayoutId),
        n
    },
    create(e) {
        return wn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = Yr();
        return n.id = e.id ?? "",
        n.innerXml = e.innerXml ?? "",
        n.outerXml = e.outerXml ?? "",
        n.name = e.name ?? "",
        n.type = e.type ?? "",
        n.background = e.background !== void 0 && e.background !== null ? Ye.fromPartial(e.background) : void 0,
        n.elements = e.elements?.map(t => me.fromPartial(t)) || [],
        n.bodyLevelStyles = e.bodyLevelStyles?.map(t => te.fromPartial(t)) || [],
        n.titleLevelStyles = e.titleLevelStyles?.map(t => te.fromPartial(t)) || [],
        n.otherLevelStyles = e.otherLevelStyles?.map(t => te.fromPartial(t)) || [],
        n.parentLayoutId = e.parentLayoutId ?? "",
        n
    }
};
function $r() {
    return {
        index: 0,
        useLayoutId: "",
        elements: [],
        widthEmu: 0,
        heightEmu: 0,
        innerXml: "",
        outerXml: "",
        background: void 0,
        id: "",
        notesSlide: void 0
    }
}
const De = {
    encode(e, n=new $) {
        e.index !== 0 && n.uint32(8).int32(e.index),
        e.useLayoutId !== "" && n.uint32(18).string(e.useLayoutId);
        for (const t of e.elements)
            me.encode(t, n.uint32(26).fork()).join();
        return e.widthEmu !== 0 && n.uint32(40).int64(e.widthEmu),
        e.heightEmu !== 0 && n.uint32(48).int64(e.heightEmu),
        e.innerXml !== "" && n.uint32(58).string(e.innerXml),
        e.outerXml !== "" && n.uint32(66).string(e.outerXml),
        e.background !== void 0 && Ye.encode(e.background, n.uint32(82).fork()).join(),
        e.id !== "" && n.uint32(90).string(e.id),
        e.notesSlide !== void 0 && De.encode(e.notesSlide, n.uint32(98).fork()).join(),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = $r();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 8)
                        break;
                    o.index = t.int32();
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.useLayoutId = t.string();
                    continue
                }
            case 3:
                {
                    if (s !== 26)
                        break;
                    o.elements.push(me.decode(t, t.uint32()));
                    continue
                }
            case 5:
                {
                    if (s !== 40)
                        break;
                    o.widthEmu = co(t.int64());
                    continue
                }
            case 6:
                {
                    if (s !== 48)
                        break;
                    o.heightEmu = co(t.int64());
                    continue
                }
            case 7:
                {
                    if (s !== 58)
                        break;
                    o.innerXml = t.string();
                    continue
                }
            case 8:
                {
                    if (s !== 66)
                        break;
                    o.outerXml = t.string();
                    continue
                }
            case 10:
                {
                    if (s !== 82)
                        break;
                    o.background = Ye.decode(t, t.uint32());
                    continue
                }
            case 11:
                {
                    if (s !== 90)
                        break;
                    o.id = t.string();
                    continue
                }
            case 12:
                {
                    if (s !== 98)
                        break;
                    o.notesSlide = De.decode(t, t.uint32());
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            index: J(e.index) ? globalThis.Number(e.index) : 0,
            useLayoutId: J(e.useLayoutId) ? globalThis.String(e.useLayoutId) : "",
            elements: globalThis.Array.isArray(e?.elements) ? e.elements.map(n => me.fromJSON(n)) : [],
            widthEmu: J(e.widthEmu) ? globalThis.Number(e.widthEmu) : 0,
            heightEmu: J(e.heightEmu) ? globalThis.Number(e.heightEmu) : 0,
            innerXml: J(e.innerXml) ? globalThis.String(e.innerXml) : "",
            outerXml: J(e.outerXml) ? globalThis.String(e.outerXml) : "",
            background: J(e.background) ? Ye.fromJSON(e.background) : void 0,
            id: J(e.id) ? globalThis.String(e.id) : "",
            notesSlide: J(e.notesSlide) ? De.fromJSON(e.notesSlide) : void 0
        }
    },
    toJSON(e) {
        const n = {};
        return e.index !== 0 && (n.index = Math.round(e.index)),
        e.useLayoutId !== "" && (n.useLayoutId = e.useLayoutId),
        e.elements?.length && (n.elements = e.elements.map(t => me.toJSON(t))),
        e.widthEmu !== 0 && (n.widthEmu = Math.round(e.widthEmu)),
        e.heightEmu !== 0 && (n.heightEmu = Math.round(e.heightEmu)),
        e.innerXml !== "" && (n.innerXml = e.innerXml),
        e.outerXml !== "" && (n.outerXml = e.outerXml),
        e.background !== void 0 && (n.background = Ye.toJSON(e.background)),
        e.id !== "" && (n.id = e.id),
        e.notesSlide !== void 0 && (n.notesSlide = De.toJSON(e.notesSlide)),
        n
    },
    create(e) {
        return De.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = $r();
        return n.index = e.index ?? 0,
        n.useLayoutId = e.useLayoutId ?? "",
        n.elements = e.elements?.map(t => me.fromPartial(t)) || [],
        n.widthEmu = e.widthEmu ?? 0,
        n.heightEmu = e.heightEmu ?? 0,
        n.innerXml = e.innerXml ?? "",
        n.outerXml = e.outerXml ?? "",
        n.background = e.background !== void 0 && e.background !== null ? Ye.fromPartial(e.background) : void 0,
        n.id = e.id ?? "",
        n.notesSlide = e.notesSlide !== void 0 && e.notesSlide !== null ? De.fromPartial(e.notesSlide) : void 0,
        n
    }
};
function Zr() {
    return {
        bbox: void 0,
        zIndex: 0,
        innerXml: "",
        outerXml: "",
        shape: void 0,
        image: void 0,
        chartReference: void 0,
        video: void 0,
        table: void 0,
        paragraphs: [],
        name: "",
        type: 0,
        placeholderIndex: 0,
        placeholderType: "",
        textStyle: void 0,
        effects: [],
        children: [],
        levelsStyles: [],
        fill: void 0,
        lineReference: void 0,
        fillReference: void 0,
        effectReference: void 0,
        fontReference: void 0,
        hyperlink: void 0
    }
}
const me = {
    encode(e, n=new $) {
        e.bbox !== void 0 && tt.encode(e.bbox, n.uint32(10).fork()).join(),
        e.zIndex !== 0 && n.uint32(16).int32(e.zIndex),
        e.innerXml !== "" && n.uint32(58).string(e.innerXml),
        e.outerXml !== "" && n.uint32(66).string(e.outerXml),
        e.shape !== void 0 && Pn.encode(e.shape, n.uint32(34).fork()).join(),
        e.image !== void 0 && Ln.encode(e.image, n.uint32(42).fork()).join(),
        e.chartReference !== void 0 && In.encode(e.chartReference, n.uint32(146).fork()).join(),
        e.video !== void 0 && Mn.encode(e.video, n.uint32(162).fork()).join(),
        e.table !== void 0 && kn.encode(e.table, n.uint32(170).fork()).join();
        for (const t of e.paragraphs)
            Fe.encode(t, n.uint32(50).fork()).join();
        e.name !== "" && n.uint32(82).string(e.name),
        e.type !== 0 && n.uint32(88).int32(e.type),
        e.placeholderIndex !== 0 && n.uint32(96).int32(e.placeholderIndex),
        e.placeholderType !== "" && n.uint32(106).string(e.placeholderType),
        e.textStyle !== void 0 && de.encode(e.textStyle, n.uint32(114).fork()).join();
        for (const t of e.effects)
            Ue.encode(t, n.uint32(122).fork()).join();
        for (const t of e.children)
            me.encode(t, n.uint32(138).fork()).join();
        for (const t of e.levelsStyles)
            te.encode(t, n.uint32(130).fork()).join();
        return e.fill !== void 0 && ce.encode(e.fill, n.uint32(154).fork()).join(),
        e.lineReference !== void 0 && ue.encode(e.lineReference, n.uint32(178).fork()).join(),
        e.fillReference !== void 0 && ue.encode(e.fillReference, n.uint32(186).fork()).join(),
        e.effectReference !== void 0 && ue.encode(e.effectReference, n.uint32(194).fork()).join(),
        e.fontReference !== void 0 && ue.encode(e.fontReference, n.uint32(202).fork()).join(),
        e.hyperlink !== void 0 && Je.encode(e.hyperlink, n.uint32(210).fork()).join(),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = Zr();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.bbox = tt.decode(t, t.uint32());
                    continue
                }
            case 2:
                {
                    if (s !== 16)
                        break;
                    o.zIndex = t.int32();
                    continue
                }
            case 7:
                {
                    if (s !== 58)
                        break;
                    o.innerXml = t.string();
                    continue
                }
            case 8:
                {
                    if (s !== 66)
                        break;
                    o.outerXml = t.string();
                    continue
                }
            case 4:
                {
                    if (s !== 34)
                        break;
                    o.shape = Pn.decode(t, t.uint32());
                    continue
                }
            case 5:
                {
                    if (s !== 42)
                        break;
                    o.image = Ln.decode(t, t.uint32());
                    continue
                }
            case 18:
                {
                    if (s !== 146)
                        break;
                    o.chartReference = In.decode(t, t.uint32());
                    continue
                }
            case 20:
                {
                    if (s !== 162)
                        break;
                    o.video = Mn.decode(t, t.uint32());
                    continue
                }
            case 21:
                {
                    if (s !== 170)
                        break;
                    o.table = kn.decode(t, t.uint32());
                    continue
                }
            case 6:
                {
                    if (s !== 50)
                        break;
                    o.paragraphs.push(Fe.decode(t, t.uint32()));
                    continue
                }
            case 10:
                {
                    if (s !== 82)
                        break;
                    o.name = t.string();
                    continue
                }
            case 11:
                {
                    if (s !== 88)
                        break;
                    o.type = t.int32();
                    continue
                }
            case 12:
                {
                    if (s !== 96)
                        break;
                    o.placeholderIndex = t.int32();
                    continue
                }
            case 13:
                {
                    if (s !== 106)
                        break;
                    o.placeholderType = t.string();
                    continue
                }
            case 14:
                {
                    if (s !== 114)
                        break;
                    o.textStyle = de.decode(t, t.uint32());
                    continue
                }
            case 15:
                {
                    if (s !== 122)
                        break;
                    o.effects.push(Ue.decode(t, t.uint32()));
                    continue
                }
            case 17:
                {
                    if (s !== 138)
                        break;
                    o.children.push(me.decode(t, t.uint32()));
                    continue
                }
            case 16:
                {
                    if (s !== 130)
                        break;
                    o.levelsStyles.push(te.decode(t, t.uint32()));
                    continue
                }
            case 19:
                {
                    if (s !== 154)
                        break;
                    o.fill = ce.decode(t, t.uint32());
                    continue
                }
            case 22:
                {
                    if (s !== 178)
                        break;
                    o.lineReference = ue.decode(t, t.uint32());
                    continue
                }
            case 23:
                {
                    if (s !== 186)
                        break;
                    o.fillReference = ue.decode(t, t.uint32());
                    continue
                }
            case 24:
                {
                    if (s !== 194)
                        break;
                    o.effectReference = ue.decode(t, t.uint32());
                    continue
                }
            case 25:
                {
                    if (s !== 202)
                        break;
                    o.fontReference = ue.decode(t, t.uint32());
                    continue
                }
            case 26:
                {
                    if (s !== 210)
                        break;
                    o.hyperlink = Je.decode(t, t.uint32());
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            bbox: J(e.bbox) ? tt.fromJSON(e.bbox) : void 0,
            zIndex: J(e.zIndex) ? globalThis.Number(e.zIndex) : 0,
            innerXml: J(e.innerXml) ? globalThis.String(e.innerXml) : "",
            outerXml: J(e.outerXml) ? globalThis.String(e.outerXml) : "",
            shape: J(e.shape) ? Pn.fromJSON(e.shape) : void 0,
            image: J(e.image) ? Ln.fromJSON(e.image) : void 0,
            chartReference: J(e.chartReference) ? In.fromJSON(e.chartReference) : void 0,
            video: J(e.video) ? Mn.fromJSON(e.video) : void 0,
            table: J(e.table) ? kn.fromJSON(e.table) : void 0,
            paragraphs: globalThis.Array.isArray(e?.paragraphs) ? e.paragraphs.map(n => Fe.fromJSON(n)) : [],
            name: J(e.name) ? globalThis.String(e.name) : "",
            type: J(e.type) ? Xf(e.type) : 0,
            placeholderIndex: J(e.placeholderIndex) ? globalThis.Number(e.placeholderIndex) : 0,
            placeholderType: J(e.placeholderType) ? globalThis.String(e.placeholderType) : "",
            textStyle: J(e.textStyle) ? de.fromJSON(e.textStyle) : void 0,
            effects: globalThis.Array.isArray(e?.effects) ? e.effects.map(n => Ue.fromJSON(n)) : [],
            children: globalThis.Array.isArray(e?.children) ? e.children.map(n => me.fromJSON(n)) : [],
            levelsStyles: globalThis.Array.isArray(e?.levelsStyles) ? e.levelsStyles.map(n => te.fromJSON(n)) : [],
            fill: J(e.fill) ? ce.fromJSON(e.fill) : void 0,
            lineReference: J(e.lineReference) ? ue.fromJSON(e.lineReference) : void 0,
            fillReference: J(e.fillReference) ? ue.fromJSON(e.fillReference) : void 0,
            effectReference: J(e.effectReference) ? ue.fromJSON(e.effectReference) : void 0,
            fontReference: J(e.fontReference) ? ue.fromJSON(e.fontReference) : void 0,
            hyperlink: J(e.hyperlink) ? Je.fromJSON(e.hyperlink) : void 0
        }
    },
    toJSON(e) {
        const n = {};
        return e.bbox !== void 0 && (n.bbox = tt.toJSON(e.bbox)),
        e.zIndex !== 0 && (n.zIndex = Math.round(e.zIndex)),
        e.innerXml !== "" && (n.innerXml = e.innerXml),
        e.outerXml !== "" && (n.outerXml = e.outerXml),
        e.shape !== void 0 && (n.shape = Pn.toJSON(e.shape)),
        e.image !== void 0 && (n.image = Ln.toJSON(e.image)),
        e.chartReference !== void 0 && (n.chartReference = In.toJSON(e.chartReference)),
        e.video !== void 0 && (n.video = Mn.toJSON(e.video)),
        e.table !== void 0 && (n.table = kn.toJSON(e.table)),
        e.paragraphs?.length && (n.paragraphs = e.paragraphs.map(t => Fe.toJSON(t))),
        e.name !== "" && (n.name = e.name),
        e.type !== 0 && (n.type = Vf(e.type)),
        e.placeholderIndex !== 0 && (n.placeholderIndex = Math.round(e.placeholderIndex)),
        e.placeholderType !== "" && (n.placeholderType = e.placeholderType),
        e.textStyle !== void 0 && (n.textStyle = de.toJSON(e.textStyle)),
        e.effects?.length && (n.effects = e.effects.map(t => Ue.toJSON(t))),
        e.children?.length && (n.children = e.children.map(t => me.toJSON(t))),
        e.levelsStyles?.length && (n.levelsStyles = e.levelsStyles.map(t => te.toJSON(t))),
        e.fill !== void 0 && (n.fill = ce.toJSON(e.fill)),
        e.lineReference !== void 0 && (n.lineReference = ue.toJSON(e.lineReference)),
        e.fillReference !== void 0 && (n.fillReference = ue.toJSON(e.fillReference)),
        e.effectReference !== void 0 && (n.effectReference = ue.toJSON(e.effectReference)),
        e.fontReference !== void 0 && (n.fontReference = ue.toJSON(e.fontReference)),
        e.hyperlink !== void 0 && (n.hyperlink = Je.toJSON(e.hyperlink)),
        n
    },
    create(e) {
        return me.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = Zr();
        return n.bbox = e.bbox !== void 0 && e.bbox !== null ? tt.fromPartial(e.bbox) : void 0,
        n.zIndex = e.zIndex ?? 0,
        n.innerXml = e.innerXml ?? "",
        n.outerXml = e.outerXml ?? "",
        n.shape = e.shape !== void 0 && e.shape !== null ? Pn.fromPartial(e.shape) : void 0,
        n.image = e.image !== void 0 && e.image !== null ? Ln.fromPartial(e.image) : void 0,
        n.chartReference = e.chartReference !== void 0 && e.chartReference !== null ? In.fromPartial(e.chartReference) : void 0,
        n.video = e.video !== void 0 && e.video !== null ? Mn.fromPartial(e.video) : void 0,
        n.table = e.table !== void 0 && e.table !== null ? kn.fromPartial(e.table) : void 0,
        n.paragraphs = e.paragraphs?.map(t => Fe.fromPartial(t)) || [],
        n.name = e.name ?? "",
        n.type = e.type ?? 0,
        n.placeholderIndex = e.placeholderIndex ?? 0,
        n.placeholderType = e.placeholderType ?? "",
        n.textStyle = e.textStyle !== void 0 && e.textStyle !== null ? de.fromPartial(e.textStyle) : void 0,
        n.effects = e.effects?.map(t => Ue.fromPartial(t)) || [],
        n.children = e.children?.map(t => me.fromPartial(t)) || [],
        n.levelsStyles = e.levelsStyles?.map(t => te.fromPartial(t)) || [],
        n.fill = e.fill !== void 0 && e.fill !== null ? ce.fromPartial(e.fill) : void 0,
        n.lineReference = e.lineReference !== void 0 && e.lineReference !== null ? ue.fromPartial(e.lineReference) : void 0,
        n.fillReference = e.fillReference !== void 0 && e.fillReference !== null ? ue.fromPartial(e.fillReference) : void 0,
        n.effectReference = e.effectReference !== void 0 && e.effectReference !== null ? ue.fromPartial(e.effectReference) : void 0,
        n.fontReference = e.fontReference !== void 0 && e.fontReference !== null ? ue.fromPartial(e.fontReference) : void 0,
        n.hyperlink = e.hyperlink !== void 0 && e.hyperlink !== null ? Je.fromPartial(e.hyperlink) : void 0,
        n
    }
};
function Kr() {
    return {
        index: "",
        color: void 0
    }
}
const ue = {
    encode(e, n=new $) {
        return e.index !== "" && n.uint32(10).string(e.index),
        e.color !== void 0 && xe.encode(e.color, n.uint32(18).fork()).join(),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = Kr();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.index = t.string();
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.color = xe.decode(t, t.uint32());
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            index: J(e.index) ? globalThis.String(e.index) : "",
            color: J(e.color) ? xe.fromJSON(e.color) : void 0
        }
    },
    toJSON(e) {
        const n = {};
        return e.index !== "" && (n.index = e.index),
        e.color !== void 0 && (n.color = xe.toJSON(e.color)),
        n
    },
    create(e) {
        return ue.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = Kr();
        return n.index = e.index ?? "",
        n.color = e.color !== void 0 && e.color !== null ? xe.fromPartial(e.color) : void 0,
        n
    }
};
function Qr() {
    return {
        id: ""
    }
}
const In = {
    encode(e, n=new $) {
        return e.id !== "" && n.uint32(10).string(e.id),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = Qr();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.id = t.string();
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            id: J(e.id) ? globalThis.String(e.id) : ""
        }
    },
    toJSON(e) {
        const n = {};
        return e.id !== "" && (n.id = e.id),
        n
    },
    create(e) {
        return In.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = Qr();
        return n.id = e.id ?? "",
        n
    }
};
function _r() {
    return {
        rows: [],
        columnWidths: []
    }
}
const kn = {
    encode(e, n=new $) {
        for (const t of e.rows)
            Cn.encode(t, n.uint32(10).fork()).join();
        n.uint32(18).fork();
        for (const t of e.columnWidths)
            n.int32(t);
        return n.join(),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = _r();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.rows.push(Cn.decode(t, t.uint32()));
                    continue
                }
            case 2:
                {
                    if (s === 16) {
                        o.columnWidths.push(t.int32());
                        continue
                    }
                    if (s === 18) {
                        const c = t.uint32() + t.pos;
                        for (; t.pos < c; )
                            o.columnWidths.push(t.int32());
                        continue
                    }
                    break
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            rows: globalThis.Array.isArray(e?.rows) ? e.rows.map(n => Cn.fromJSON(n)) : [],
            columnWidths: globalThis.Array.isArray(e?.columnWidths) ? e.columnWidths.map(n => globalThis.Number(n)) : []
        }
    },
    toJSON(e) {
        const n = {};
        return e.rows?.length && (n.rows = e.rows.map(t => Cn.toJSON(t))),
        e.columnWidths?.length && (n.columnWidths = e.columnWidths.map(t => Math.round(t))),
        n
    },
    create(e) {
        return kn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = _r();
        return n.rows = e.rows?.map(t => Cn.fromPartial(t)) || [],
        n.columnWidths = e.columnWidths?.map(t => t) || [],
        n
    }
};
function jr() {
    return {
        text: "",
        textStyle: void 0,
        paragraphs: [],
        levelsStyles: [],
        fill: void 0,
        lines: []
    }
}
const Rn = {
    encode(e, n=new $) {
        e.text !== "" && n.uint32(10).string(e.text),
        e.textStyle !== void 0 && de.encode(e.textStyle, n.uint32(18).fork()).join();
        for (const t of e.paragraphs)
            Fe.encode(t, n.uint32(26).fork()).join();
        for (const t of e.levelsStyles)
            te.encode(t, n.uint32(34).fork()).join();
        e.fill !== void 0 && ce.encode(e.fill, n.uint32(42).fork()).join();
        for (const t of e.lines)
            Ee.encode(t, n.uint32(50).fork()).join();
        return n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = jr();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.text = t.string();
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.textStyle = de.decode(t, t.uint32());
                    continue
                }
            case 3:
                {
                    if (s !== 26)
                        break;
                    o.paragraphs.push(Fe.decode(t, t.uint32()));
                    continue
                }
            case 4:
                {
                    if (s !== 34)
                        break;
                    o.levelsStyles.push(te.decode(t, t.uint32()));
                    continue
                }
            case 5:
                {
                    if (s !== 42)
                        break;
                    o.fill = ce.decode(t, t.uint32());
                    continue
                }
            case 6:
                {
                    if (s !== 50)
                        break;
                    o.lines.push(Ee.decode(t, t.uint32()));
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            text: J(e.text) ? globalThis.String(e.text) : "",
            textStyle: J(e.textStyle) ? de.fromJSON(e.textStyle) : void 0,
            paragraphs: globalThis.Array.isArray(e?.paragraphs) ? e.paragraphs.map(n => Fe.fromJSON(n)) : [],
            levelsStyles: globalThis.Array.isArray(e?.levelsStyles) ? e.levelsStyles.map(n => te.fromJSON(n)) : [],
            fill: J(e.fill) ? ce.fromJSON(e.fill) : void 0,
            lines: globalThis.Array.isArray(e?.lines) ? e.lines.map(n => Ee.fromJSON(n)) : []
        }
    },
    toJSON(e) {
        const n = {};
        return e.text !== "" && (n.text = e.text),
        e.textStyle !== void 0 && (n.textStyle = de.toJSON(e.textStyle)),
        e.paragraphs?.length && (n.paragraphs = e.paragraphs.map(t => Fe.toJSON(t))),
        e.levelsStyles?.length && (n.levelsStyles = e.levelsStyles.map(t => te.toJSON(t))),
        e.fill !== void 0 && (n.fill = ce.toJSON(e.fill)),
        e.lines?.length && (n.lines = e.lines.map(t => Ee.toJSON(t))),
        n
    },
    create(e) {
        return Rn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = jr();
        return n.text = e.text ?? "",
        n.textStyle = e.textStyle !== void 0 && e.textStyle !== null ? de.fromPartial(e.textStyle) : void 0,
        n.paragraphs = e.paragraphs?.map(t => Fe.fromPartial(t)) || [],
        n.levelsStyles = e.levelsStyles?.map(t => te.fromPartial(t)) || [],
        n.fill = e.fill !== void 0 && e.fill !== null ? ce.fromPartial(e.fill) : void 0,
        n.lines = e.lines?.map(t => Ee.fromPartial(t)) || [],
        n
    }
};
function eo() {
    return {
        cells: [],
        heightEmu: 0
    }
}
const Cn = {
    encode(e, n=new $) {
        for (const t of e.cells)
            Rn.encode(t, n.uint32(10).fork()).join();
        return e.heightEmu !== 0 && n.uint32(16).int32(e.heightEmu),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = eo();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.cells.push(Rn.decode(t, t.uint32()));
                    continue
                }
            case 2:
                {
                    if (s !== 16)
                        break;
                    o.heightEmu = t.int32();
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            cells: globalThis.Array.isArray(e?.cells) ? e.cells.map(n => Rn.fromJSON(n)) : [],
            heightEmu: J(e.heightEmu) ? globalThis.Number(e.heightEmu) : 0
        }
    },
    toJSON(e) {
        const n = {};
        return e.cells?.length && (n.cells = e.cells.map(t => Rn.toJSON(t))),
        e.heightEmu !== 0 && (n.heightEmu = Math.round(e.heightEmu)),
        n
    },
    create(e) {
        return Cn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = eo();
        return n.cells = e.cells?.map(t => Rn.fromPartial(t)) || [],
        n.heightEmu = e.heightEmu ?? 0,
        n
    }
};
function no() {
    return {
        runs: [],
        textStyle: void 0
    }
}
const Fe = {
    encode(e, n=new $) {
        for (const t of e.runs)
            On.encode(t, n.uint32(10).fork()).join();
        return e.textStyle !== void 0 && de.encode(e.textStyle, n.uint32(18).fork()).join(),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = no();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.runs.push(On.decode(t, t.uint32()));
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.textStyle = de.decode(t, t.uint32());
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            runs: globalThis.Array.isArray(e?.runs) ? e.runs.map(n => On.fromJSON(n)) : [],
            textStyle: J(e.textStyle) ? de.fromJSON(e.textStyle) : void 0
        }
    },
    toJSON(e) {
        const n = {};
        return e.runs?.length && (n.runs = e.runs.map(t => On.toJSON(t))),
        e.textStyle !== void 0 && (n.textStyle = de.toJSON(e.textStyle)),
        n
    },
    create(e) {
        return Fe.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = no();
        return n.runs = e.runs?.map(t => On.fromPartial(t)) || [],
        n.textStyle = e.textStyle !== void 0 && e.textStyle !== null ? de.fromPartial(e.textStyle) : void 0,
        n
    }
};
function to() {
    return {
        text: "",
        textStyle: void 0,
        hyperlink: void 0
    }
}
const On = {
    encode(e, n=new $) {
        return e.text !== "" && n.uint32(10).string(e.text),
        e.textStyle !== void 0 && de.encode(e.textStyle, n.uint32(18).fork()).join(),
        e.hyperlink !== void 0 && Je.encode(e.hyperlink, n.uint32(26).fork()).join(),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = to();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.text = t.string();
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.textStyle = de.decode(t, t.uint32());
                    continue
                }
            case 3:
                {
                    if (s !== 26)
                        break;
                    o.hyperlink = Je.decode(t, t.uint32());
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            text: J(e.text) ? globalThis.String(e.text) : "",
            textStyle: J(e.textStyle) ? de.fromJSON(e.textStyle) : void 0,
            hyperlink: J(e.hyperlink) ? Je.fromJSON(e.hyperlink) : void 0
        }
    },
    toJSON(e) {
        const n = {};
        return e.text !== "" && (n.text = e.text),
        e.textStyle !== void 0 && (n.textStyle = de.toJSON(e.textStyle)),
        e.hyperlink !== void 0 && (n.hyperlink = Je.toJSON(e.hyperlink)),
        n
    },
    create(e) {
        return On.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = to();
        return n.text = e.text ?? "",
        n.textStyle = e.textStyle !== void 0 && e.textStyle !== null ? de.fromPartial(e.textStyle) : void 0,
        n.hyperlink = e.hyperlink !== void 0 && e.hyperlink !== null ? Je.fromPartial(e.hyperlink) : void 0,
        n
    }
};
function ro() {
    return {
        uri: "",
        isExternal: !1,
        action: ""
    }
}
const Je = {
    encode(e, n=new $) {
        return e.uri !== "" && n.uint32(10).string(e.uri),
        e.isExternal !== !1 && n.uint32(16).bool(e.isExternal),
        e.action !== "" && n.uint32(26).string(e.action),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = ro();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.uri = t.string();
                    continue
                }
            case 2:
                {
                    if (s !== 16)
                        break;
                    o.isExternal = t.bool();
                    continue
                }
            case 3:
                {
                    if (s !== 26)
                        break;
                    o.action = t.string();
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            uri: J(e.uri) ? globalThis.String(e.uri) : "",
            isExternal: J(e.isExternal) ? globalThis.Boolean(e.isExternal) : !1,
            action: J(e.action) ? globalThis.String(e.action) : ""
        }
    },
    toJSON(e) {
        const n = {};
        return e.uri !== "" && (n.uri = e.uri),
        e.isExternal !== !1 && (n.isExternal = e.isExternal),
        e.action !== "" && (n.action = e.action),
        n
    },
    create(e) {
        return Je.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = ro();
        return n.uri = e.uri ?? "",
        n.isExternal = e.isExternal ?? !1,
        n.action = e.action ?? "",
        n
    }
};
function oo() {
    return {
        effects: []
    }
}
const Sn = {
    encode(e, n=new $) {
        for (const t of e.effects)
            Ue.encode(t, n.uint32(10).fork()).join();
        return n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = oo();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.effects.push(Ue.decode(t, t.uint32()));
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            effects: globalThis.Array.isArray(e?.effects) ? e.effects.map(n => Ue.fromJSON(n)) : []
        }
    },
    toJSON(e) {
        const n = {};
        return e.effects?.length && (n.effects = e.effects.map(t => Ue.toJSON(t))),
        n
    },
    create(e) {
        return Sn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = oo();
        return n.effects = e.effects?.map(t => Ue.fromPartial(t)) || [],
        n
    }
};
function io() {
    return {
        type: 0,
        shadow: void 0
    }
}
const Ue = {
    encode(e, n=new $) {
        return e.type !== 0 && n.uint32(8).int32(e.type),
        e.shadow !== void 0 && An.encode(e.shadow, n.uint32(18).fork()).join(),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = io();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 8)
                        break;
                    o.type = t.int32();
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.shadow = An.decode(t, t.uint32());
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            type: J(e.type) ? Hf(e.type) : 0,
            shadow: J(e.shadow) ? An.fromJSON(e.shadow) : void 0
        }
    },
    toJSON(e) {
        const n = {};
        return e.type !== 0 && (n.type = qf(e.type)),
        e.shadow !== void 0 && (n.shadow = An.toJSON(e.shadow)),
        n
    },
    create(e) {
        return Ue.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = io();
        return n.type = e.type ?? 0,
        n.shadow = e.shadow !== void 0 && e.shadow !== null ? An.fromPartial(e.shadow) : void 0,
        n
    }
};
function so() {
    return {
        color: void 0,
        blurRadius: 0,
        distance: 0,
        direction: 0
    }
}
const An = {
    encode(e, n=new $) {
        return e.color !== void 0 && xe.encode(e.color, n.uint32(18).fork()).join(),
        e.blurRadius !== 0 && n.uint32(24).int32(e.blurRadius),
        e.distance !== 0 && n.uint32(32).int32(e.distance),
        e.direction !== 0 && n.uint32(40).int32(e.direction),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = so();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.color = xe.decode(t, t.uint32());
                    continue
                }
            case 3:
                {
                    if (s !== 24)
                        break;
                    o.blurRadius = t.int32();
                    continue
                }
            case 4:
                {
                    if (s !== 32)
                        break;
                    o.distance = t.int32();
                    continue
                }
            case 5:
                {
                    if (s !== 40)
                        break;
                    o.direction = t.int32();
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            color: J(e.color) ? xe.fromJSON(e.color) : void 0,
            blurRadius: J(e.blurRadius) ? globalThis.Number(e.blurRadius) : 0,
            distance: J(e.distance) ? globalThis.Number(e.distance) : 0,
            direction: J(e.direction) ? globalThis.Number(e.direction) : 0
        }
    },
    toJSON(e) {
        const n = {};
        return e.color !== void 0 && (n.color = xe.toJSON(e.color)),
        e.blurRadius !== 0 && (n.blurRadius = Math.round(e.blurRadius)),
        e.distance !== 0 && (n.distance = Math.round(e.distance)),
        e.direction !== 0 && (n.direction = Math.round(e.direction)),
        n
    },
    create(e) {
        return An.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = so();
        return n.color = e.color !== void 0 && e.color !== null ? xe.fromPartial(e.color) : void 0,
        n.blurRadius = e.blurRadius ?? 0,
        n.distance = e.distance ?? 0,
        n.direction = e.direction ?? 0,
        n
    }
};
function lo() {
    return {
        geometry: 0,
        fill: void 0,
        line: void 0
    }
}
const Pn = {
    encode(e, n=new $) {
        return e.geometry !== 0 && n.uint32(8).int32(e.geometry),
        e.fill !== void 0 && ce.encode(e.fill, n.uint32(42).fork()).join(),
        e.line !== void 0 && Ee.encode(e.line, n.uint32(50).fork()).join(),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = lo();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 8)
                        break;
                    o.geometry = t.int32();
                    continue
                }
            case 5:
                {
                    if (s !== 42)
                        break;
                    o.fill = ce.decode(t, t.uint32());
                    continue
                }
            case 6:
                {
                    if (s !== 50)
                        break;
                    o.line = Ee.decode(t, t.uint32());
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            geometry: J(e.geometry) ? zf(e.geometry) : 0,
            fill: J(e.fill) ? ce.fromJSON(e.fill) : void 0,
            line: J(e.line) ? Ee.fromJSON(e.line) : void 0
        }
    },
    toJSON(e) {
        const n = {};
        return e.geometry !== 0 && (n.geometry = Gf(e.geometry)),
        e.fill !== void 0 && (n.fill = ce.toJSON(e.fill)),
        e.line !== void 0 && (n.line = Ee.toJSON(e.line)),
        n
    },
    create(e) {
        return Pn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = lo();
        return n.geometry = e.geometry ?? 0,
        n.fill = e.fill !== void 0 && e.fill !== null ? ce.fromPartial(e.fill) : void 0,
        n.line = e.line !== void 0 && e.line !== null ? Ee.fromPartial(e.line) : void 0,
        n
    }
};
function fo() {
    return {
        geometry: "",
        cropLeft: 0,
        cropTop: 0,
        cropRight: 0,
        cropBottom: 0
    }
}
const Be = {
    encode(e, n=new $) {
        return e.geometry !== "" && n.uint32(10).string(e.geometry),
        e.cropLeft !== 0 && n.uint32(16).uint32(e.cropLeft),
        e.cropTop !== 0 && n.uint32(24).uint32(e.cropTop),
        e.cropRight !== 0 && n.uint32(32).uint32(e.cropRight),
        e.cropBottom !== 0 && n.uint32(40).uint32(e.cropBottom),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = fo();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.geometry = t.string();
                    continue
                }
            case 2:
                {
                    if (s !== 16)
                        break;
                    o.cropLeft = t.uint32();
                    continue
                }
            case 3:
                {
                    if (s !== 24)
                        break;
                    o.cropTop = t.uint32();
                    continue
                }
            case 4:
                {
                    if (s !== 32)
                        break;
                    o.cropRight = t.uint32();
                    continue
                }
            case 5:
                {
                    if (s !== 40)
                        break;
                    o.cropBottom = t.uint32();
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            geometry: J(e.geometry) ? globalThis.String(e.geometry) : "",
            cropLeft: J(e.cropLeft) ? globalThis.Number(e.cropLeft) : 0,
            cropTop: J(e.cropTop) ? globalThis.Number(e.cropTop) : 0,
            cropRight: J(e.cropRight) ? globalThis.Number(e.cropRight) : 0,
            cropBottom: J(e.cropBottom) ? globalThis.Number(e.cropBottom) : 0
        }
    },
    toJSON(e) {
        const n = {};
        return e.geometry !== "" && (n.geometry = e.geometry),
        e.cropLeft !== 0 && (n.cropLeft = Math.round(e.cropLeft)),
        e.cropTop !== 0 && (n.cropTop = Math.round(e.cropTop)),
        e.cropRight !== 0 && (n.cropRight = Math.round(e.cropRight)),
        e.cropBottom !== 0 && (n.cropBottom = Math.round(e.cropBottom)),
        n
    },
    create(e) {
        return Be.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = fo();
        return n.geometry = e.geometry ?? "",
        n.cropLeft = e.cropLeft ?? 0,
        n.cropTop = e.cropTop ?? 0,
        n.cropRight = e.cropRight ?? 0,
        n.cropBottom = e.cropBottom ?? 0,
        n
    }
};
function uo() {
    return {
        contentType: "",
        data: new Uint8Array(0),
        mask: void 0,
        alt: ""
    }
}
const Ln = {
    encode(e, n=new $) {
        return e.contentType !== "" && n.uint32(10).string(e.contentType),
        e.data.length !== 0 && n.uint32(18).bytes(e.data),
        e.mask !== void 0 && Be.encode(e.mask, n.uint32(26).fork()).join(),
        e.alt !== "" && n.uint32(34).string(e.alt),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = uo();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.contentType = t.string();
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.data = t.bytes();
                    continue
                }
            case 3:
                {
                    if (s !== 26)
                        break;
                    o.mask = Be.decode(t, t.uint32());
                    continue
                }
            case 4:
                {
                    if (s !== 34)
                        break;
                    o.alt = t.string();
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            contentType: J(e.contentType) ? globalThis.String(e.contentType) : "",
            data: J(e.data) ? ti(e.data) : new Uint8Array(0),
            mask: J(e.mask) ? Be.fromJSON(e.mask) : void 0,
            alt: J(e.alt) ? globalThis.String(e.alt) : ""
        }
    },
    toJSON(e) {
        const n = {};
        return e.contentType !== "" && (n.contentType = e.contentType),
        e.data.length !== 0 && (n.data = ri(e.data)),
        e.mask !== void 0 && (n.mask = Be.toJSON(e.mask)),
        e.alt !== "" && (n.alt = e.alt),
        n
    },
    create(e) {
        return Ln.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = uo();
        return n.contentType = e.contentType ?? "",
        n.data = e.data ?? new Uint8Array(0),
        n.mask = e.mask !== void 0 && e.mask !== null ? Be.fromPartial(e.mask) : void 0,
        n.alt = e.alt ?? "",
        n
    }
};
function ao() {
    return {
        contentType: "",
        data: new Uint8Array(0),
        mask: void 0,
        alt: ""
    }
}
const Mn = {
    encode(e, n=new $) {
        return e.contentType !== "" && n.uint32(10).string(e.contentType),
        e.data.length !== 0 && n.uint32(18).bytes(e.data),
        e.mask !== void 0 && Be.encode(e.mask, n.uint32(26).fork()).join(),
        e.alt !== "" && n.uint32(34).string(e.alt),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = ao();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.contentType = t.string();
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.data = t.bytes();
                    continue
                }
            case 3:
                {
                    if (s !== 26)
                        break;
                    o.mask = Be.decode(t, t.uint32());
                    continue
                }
            case 4:
                {
                    if (s !== 34)
                        break;
                    o.alt = t.string();
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            contentType: J(e.contentType) ? globalThis.String(e.contentType) : "",
            data: J(e.data) ? ti(e.data) : new Uint8Array(0),
            mask: J(e.mask) ? Be.fromJSON(e.mask) : void 0,
            alt: J(e.alt) ? globalThis.String(e.alt) : ""
        }
    },
    toJSON(e) {
        const n = {};
        return e.contentType !== "" && (n.contentType = e.contentType),
        e.data.length !== 0 && (n.data = ri(e.data)),
        e.mask !== void 0 && (n.mask = Be.toJSON(e.mask)),
        e.alt !== "" && (n.alt = e.alt),
        n
    },
    create(e) {
        return Mn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = ao();
        return n.contentType = e.contentType ?? "",
        n.data = e.data ?? new Uint8Array(0),
        n.mask = e.mask !== void 0 && e.mask !== null ? Be.fromPartial(e.mask) : void 0,
        n.alt = e.alt ?? "",
        n
    }
};
function ti(e) {
    if (globalThis.Buffer)
        return Uint8Array.from(globalThis.Buffer.from(e, "base64"));
    {
        const n = globalThis.atob(e)
          , t = new Uint8Array(n.length);
        for (let r = 0; r < n.length; ++r)
            t[r] = n.charCodeAt(r);
        return t
    }
}
function ri(e) {
    if (globalThis.Buffer)
        return globalThis.Buffer.from(e).toString("base64");
    {
        const n = [];
        return e.forEach(t => {
            n.push(globalThis.String.fromCharCode(t))
        }
        ),
        globalThis.btoa(n.join(""))
    }
}
function co(e) {
    const n = globalThis.Number(e.toString());
    if (n > globalThis.Number.MAX_SAFE_INTEGER)
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    if (n < globalThis.Number.MIN_SAFE_INTEGER)
        throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
    return n
}
function J(e) {
    return e != null
}
function ho() {
    return {
        sheets: [],
        styles: void 0
    }
}
const oi = {
    encode(e, n=new $) {
        for (const t of e.sheets)
            Fn.encode(t, n.uint32(10).fork()).join();
        return e.styles !== void 0 && Gn.encode(e.styles, n.uint32(18).fork()).join(),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = ho();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.sheets.push(Fn.decode(t, t.uint32()));
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.styles = Gn.decode(t, t.uint32());
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            sheets: globalThis.Array.isArray(e?.sheets) ? e.sheets.map(n => Fn.fromJSON(n)) : [],
            styles: W(e.styles) ? Gn.fromJSON(e.styles) : void 0
        }
    },
    toJSON(e) {
        const n = {};
        return e.sheets?.length && (n.sheets = e.sheets.map(t => Fn.toJSON(t))),
        e.styles !== void 0 && (n.styles = Gn.toJSON(e.styles)),
        n
    },
    create(e) {
        return oi.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = ho();
        return n.sheets = e.sheets?.map(t => Fn.fromPartial(t)) || [],
        n.styles = e.styles !== void 0 && e.styles !== null ? Gn.fromPartial(e.styles) : void 0,
        n
    }
};
function go() {
    return {
        rowId: "",
        colId: "",
        colOffset: "",
        rowOffset: ""
    }
}
const Me = {
    encode(e, n=new $) {
        return e.rowId !== "" && n.uint32(10).string(e.rowId),
        e.colId !== "" && n.uint32(18).string(e.colId),
        e.colOffset !== "" && n.uint32(26).string(e.colOffset),
        e.rowOffset !== "" && n.uint32(34).string(e.rowOffset),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = go();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.rowId = t.string();
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.colId = t.string();
                    continue
                }
            case 3:
                {
                    if (s !== 26)
                        break;
                    o.colOffset = t.string();
                    continue
                }
            case 4:
                {
                    if (s !== 34)
                        break;
                    o.rowOffset = t.string();
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            rowId: W(e.rowId) ? globalThis.String(e.rowId) : "",
            colId: W(e.colId) ? globalThis.String(e.colId) : "",
            colOffset: W(e.colOffset) ? globalThis.String(e.colOffset) : "",
            rowOffset: W(e.rowOffset) ? globalThis.String(e.rowOffset) : ""
        }
    },
    toJSON(e) {
        const n = {};
        return e.rowId !== "" && (n.rowId = e.rowId),
        e.colId !== "" && (n.colId = e.colId),
        e.colOffset !== "" && (n.colOffset = e.colOffset),
        e.rowOffset !== "" && (n.rowOffset = e.rowOffset),
        n
    },
    create(e) {
        return Me.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = go();
        return n.rowId = e.rowId ?? "",
        n.colId = e.colId ?? "",
        n.colOffset = e.colOffset ?? "",
        n.rowOffset = e.rowOffset ?? "",
        n
    }
};
function po() {
    return {
        fromAnchor: void 0,
        toAnchor: void 0,
        chart: void 0
    }
}
const Dn = {
    encode(e, n=new $) {
        return e.fromAnchor !== void 0 && Me.encode(e.fromAnchor, n.uint32(10).fork()).join(),
        e.toAnchor !== void 0 && Me.encode(e.toAnchor, n.uint32(18).fork()).join(),
        e.chart !== void 0 && be.encode(e.chart, n.uint32(26).fork()).join(),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = po();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.fromAnchor = Me.decode(t, t.uint32());
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.toAnchor = Me.decode(t, t.uint32());
                    continue
                }
            case 3:
                {
                    if (s !== 26)
                        break;
                    o.chart = be.decode(t, t.uint32());
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            fromAnchor: W(e.fromAnchor) ? Me.fromJSON(e.fromAnchor) : void 0,
            toAnchor: W(e.toAnchor) ? Me.fromJSON(e.toAnchor) : void 0,
            chart: W(e.chart) ? be.fromJSON(e.chart) : void 0
        }
    },
    toJSON(e) {
        const n = {};
        return e.fromAnchor !== void 0 && (n.fromAnchor = Me.toJSON(e.fromAnchor)),
        e.toAnchor !== void 0 && (n.toAnchor = Me.toJSON(e.toAnchor)),
        e.chart !== void 0 && (n.chart = be.toJSON(e.chart)),
        n
    },
    create(e) {
        return Dn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = po();
        return n.fromAnchor = e.fromAnchor !== void 0 && e.fromAnchor !== null ? Me.fromPartial(e.fromAnchor) : void 0,
        n.toAnchor = e.toAnchor !== void 0 && e.toAnchor !== null ? Me.fromPartial(e.toAnchor) : void 0,
        n.chart = e.chart !== void 0 && e.chart !== null ? be.fromPartial(e.chart) : void 0,
        n
    }
};
function mo() {
    return {
        index: 0,
        name: "",
        rows: [],
        innerXml: "",
        outerXml: "",
        columns: [],
        defaultRowHeight: 0,
        charts: [],
        defaultColWidth: 0,
        showGridLines: void 0
    }
}
const Fn = {
    encode(e, n=new $) {
        e.index !== 0 && n.uint32(8).int32(e.index),
        e.name !== "" && n.uint32(18).string(e.name);
        for (const t of e.rows)
            Jn.encode(t, n.uint32(26).fork()).join();
        e.innerXml !== "" && n.uint32(34).string(e.innerXml),
        e.outerXml !== "" && n.uint32(42).string(e.outerXml);
        for (const t of e.columns)
            Bn.encode(t, n.uint32(50).fork()).join();
        e.defaultRowHeight !== 0 && n.uint32(61).float(e.defaultRowHeight);
        for (const t of e.charts)
            Dn.encode(t, n.uint32(66).fork()).join();
        return e.defaultColWidth !== 0 && n.uint32(77).float(e.defaultColWidth),
        e.showGridLines !== void 0 && n.uint32(80).bool(e.showGridLines),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = mo();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 8)
                        break;
                    o.index = t.int32();
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.name = t.string();
                    continue
                }
            case 3:
                {
                    if (s !== 26)
                        break;
                    o.rows.push(Jn.decode(t, t.uint32()));
                    continue
                }
            case 4:
                {
                    if (s !== 34)
                        break;
                    o.innerXml = t.string();
                    continue
                }
            case 5:
                {
                    if (s !== 42)
                        break;
                    o.outerXml = t.string();
                    continue
                }
            case 6:
                {
                    if (s !== 50)
                        break;
                    o.columns.push(Bn.decode(t, t.uint32()));
                    continue
                }
            case 7:
                {
                    if (s !== 61)
                        break;
                    o.defaultRowHeight = t.float();
                    continue
                }
            case 8:
                {
                    if (s !== 66)
                        break;
                    o.charts.push(Dn.decode(t, t.uint32()));
                    continue
                }
            case 9:
                {
                    if (s !== 77)
                        break;
                    o.defaultColWidth = t.float();
                    continue
                }
            case 10:
                {
                    if (s !== 80)
                        break;
                    o.showGridLines = t.bool();
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            index: W(e.index) ? globalThis.Number(e.index) : 0,
            name: W(e.name) ? globalThis.String(e.name) : "",
            rows: globalThis.Array.isArray(e?.rows) ? e.rows.map(n => Jn.fromJSON(n)) : [],
            innerXml: W(e.innerXml) ? globalThis.String(e.innerXml) : "",
            outerXml: W(e.outerXml) ? globalThis.String(e.outerXml) : "",
            columns: globalThis.Array.isArray(e?.columns) ? e.columns.map(n => Bn.fromJSON(n)) : [],
            defaultRowHeight: W(e.defaultRowHeight) ? globalThis.Number(e.defaultRowHeight) : 0,
            charts: globalThis.Array.isArray(e?.charts) ? e.charts.map(n => Dn.fromJSON(n)) : [],
            defaultColWidth: W(e.defaultColWidth) ? globalThis.Number(e.defaultColWidth) : 0,
            showGridLines: W(e.showGridLines) ? globalThis.Boolean(e.showGridLines) : void 0
        }
    },
    toJSON(e) {
        const n = {};
        return e.index !== 0 && (n.index = Math.round(e.index)),
        e.name !== "" && (n.name = e.name),
        e.rows?.length && (n.rows = e.rows.map(t => Jn.toJSON(t))),
        e.innerXml !== "" && (n.innerXml = e.innerXml),
        e.outerXml !== "" && (n.outerXml = e.outerXml),
        e.columns?.length && (n.columns = e.columns.map(t => Bn.toJSON(t))),
        e.defaultRowHeight !== 0 && (n.defaultRowHeight = e.defaultRowHeight),
        e.charts?.length && (n.charts = e.charts.map(t => Dn.toJSON(t))),
        e.defaultColWidth !== 0 && (n.defaultColWidth = e.defaultColWidth),
        e.showGridLines !== void 0 && (n.showGridLines = e.showGridLines),
        n
    },
    create(e) {
        return Fn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = mo();
        return n.index = e.index ?? 0,
        n.name = e.name ?? "",
        n.rows = e.rows?.map(t => Jn.fromPartial(t)) || [],
        n.innerXml = e.innerXml ?? "",
        n.outerXml = e.outerXml ?? "",
        n.columns = e.columns?.map(t => Bn.fromPartial(t)) || [],
        n.defaultRowHeight = e.defaultRowHeight ?? 0,
        n.charts = e.charts?.map(t => Dn.fromPartial(t)) || [],
        n.defaultColWidth = e.defaultColWidth ?? 0,
        n.showGridLines = e.showGridLines ?? void 0,
        n
    }
};
function vo() {
    return {
        index: 0,
        cells: [],
        height: 0,
        customHeight: !1
    }
}
const Jn = {
    encode(e, n=new $) {
        e.index !== 0 && n.uint32(8).int32(e.index);
        for (const t of e.cells)
            Un.encode(t, n.uint32(18).fork()).join();
        return e.height !== 0 && n.uint32(29).float(e.height),
        e.customHeight !== !1 && n.uint32(32).bool(e.customHeight),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = vo();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 8)
                        break;
                    o.index = t.int32();
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.cells.push(Un.decode(t, t.uint32()));
                    continue
                }
            case 3:
                {
                    if (s !== 29)
                        break;
                    o.height = t.float();
                    continue
                }
            case 4:
                {
                    if (s !== 32)
                        break;
                    o.customHeight = t.bool();
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            index: W(e.index) ? globalThis.Number(e.index) : 0,
            cells: globalThis.Array.isArray(e?.cells) ? e.cells.map(n => Un.fromJSON(n)) : [],
            height: W(e.height) ? globalThis.Number(e.height) : 0,
            customHeight: W(e.customHeight) ? globalThis.Boolean(e.customHeight) : !1
        }
    },
    toJSON(e) {
        const n = {};
        return e.index !== 0 && (n.index = Math.round(e.index)),
        e.cells?.length && (n.cells = e.cells.map(t => Un.toJSON(t))),
        e.height !== 0 && (n.height = e.height),
        e.customHeight !== !1 && (n.customHeight = e.customHeight),
        n
    },
    create(e) {
        return Jn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = vo();
        return n.index = e.index ?? 0,
        n.cells = e.cells?.map(t => Un.fromPartial(t)) || [],
        n.height = e.height ?? 0,
        n.customHeight = e.customHeight ?? !1,
        n
    }
};
function yo() {
    return {
        address: "",
        value: "",
        formula: "",
        dataType: "",
        styleIndex: 0
    }
}
const Un = {
    encode(e, n=new $) {
        return e.address !== "" && n.uint32(10).string(e.address),
        e.value !== "" && n.uint32(18).string(e.value),
        e.formula !== "" && n.uint32(26).string(e.formula),
        e.dataType !== "" && n.uint32(34).string(e.dataType),
        e.styleIndex !== 0 && n.uint32(40).int32(e.styleIndex),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = yo();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.address = t.string();
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.value = t.string();
                    continue
                }
            case 3:
                {
                    if (s !== 26)
                        break;
                    o.formula = t.string();
                    continue
                }
            case 4:
                {
                    if (s !== 34)
                        break;
                    o.dataType = t.string();
                    continue
                }
            case 5:
                {
                    if (s !== 40)
                        break;
                    o.styleIndex = t.int32();
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            address: W(e.address) ? globalThis.String(e.address) : "",
            value: W(e.value) ? globalThis.String(e.value) : "",
            formula: W(e.formula) ? globalThis.String(e.formula) : "",
            dataType: W(e.dataType) ? globalThis.String(e.dataType) : "",
            styleIndex: W(e.styleIndex) ? globalThis.Number(e.styleIndex) : 0
        }
    },
    toJSON(e) {
        const n = {};
        return e.address !== "" && (n.address = e.address),
        e.value !== "" && (n.value = e.value),
        e.formula !== "" && (n.formula = e.formula),
        e.dataType !== "" && (n.dataType = e.dataType),
        e.styleIndex !== 0 && (n.styleIndex = Math.round(e.styleIndex)),
        n
    },
    create(e) {
        return Un.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = yo();
        return n.address = e.address ?? "",
        n.value = e.value ?? "",
        n.formula = e.formula ?? "",
        n.dataType = e.dataType ?? "",
        n.styleIndex = e.styleIndex ?? 0,
        n
    }
};
function No() {
    return {
        min: 0,
        max: 0,
        width: 0,
        customWidth: !1
    }
}
const Bn = {
    encode(e, n=new $) {
        return e.min !== 0 && n.uint32(8).int32(e.min),
        e.max !== 0 && n.uint32(16).int32(e.max),
        e.width !== 0 && n.uint32(29).float(e.width),
        e.customWidth !== !1 && n.uint32(32).bool(e.customWidth),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = No();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 8)
                        break;
                    o.min = t.int32();
                    continue
                }
            case 2:
                {
                    if (s !== 16)
                        break;
                    o.max = t.int32();
                    continue
                }
            case 3:
                {
                    if (s !== 29)
                        break;
                    o.width = t.float();
                    continue
                }
            case 4:
                {
                    if (s !== 32)
                        break;
                    o.customWidth = t.bool();
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            min: W(e.min) ? globalThis.Number(e.min) : 0,
            max: W(e.max) ? globalThis.Number(e.max) : 0,
            width: W(e.width) ? globalThis.Number(e.width) : 0,
            customWidth: W(e.customWidth) ? globalThis.Boolean(e.customWidth) : !1
        }
    },
    toJSON(e) {
        const n = {};
        return e.min !== 0 && (n.min = Math.round(e.min)),
        e.max !== 0 && (n.max = Math.round(e.max)),
        e.width !== 0 && (n.width = e.width),
        e.customWidth !== !1 && (n.customWidth = e.customWidth),
        n
    },
    create(e) {
        return Bn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = No();
        return n.min = e.min ?? 0,
        n.max = e.max ?? 0,
        n.width = e.width ?? 0,
        n.customWidth = e.customWidth ?? !1,
        n
    }
};
function Eo() {
    return {
        size: 0,
        color: "",
        name: "",
        family: 0,
        scheme: "",
        bold: !1,
        italic: !1
    }
}
const Wn = {
    encode(e, n=new $) {
        return e.size !== 0 && n.uint32(8).int32(e.size),
        e.color !== "" && n.uint32(18).string(e.color),
        e.name !== "" && n.uint32(26).string(e.name),
        e.family !== 0 && n.uint32(32).int32(e.family),
        e.scheme !== "" && n.uint32(42).string(e.scheme),
        e.bold !== !1 && n.uint32(48).bool(e.bold),
        e.italic !== !1 && n.uint32(56).bool(e.italic),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = Eo();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 8)
                        break;
                    o.size = t.int32();
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.color = t.string();
                    continue
                }
            case 3:
                {
                    if (s !== 26)
                        break;
                    o.name = t.string();
                    continue
                }
            case 4:
                {
                    if (s !== 32)
                        break;
                    o.family = t.int32();
                    continue
                }
            case 5:
                {
                    if (s !== 42)
                        break;
                    o.scheme = t.string();
                    continue
                }
            case 6:
                {
                    if (s !== 48)
                        break;
                    o.bold = t.bool();
                    continue
                }
            case 7:
                {
                    if (s !== 56)
                        break;
                    o.italic = t.bool();
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            size: W(e.size) ? globalThis.Number(e.size) : 0,
            color: W(e.color) ? globalThis.String(e.color) : "",
            name: W(e.name) ? globalThis.String(e.name) : "",
            family: W(e.family) ? globalThis.Number(e.family) : 0,
            scheme: W(e.scheme) ? globalThis.String(e.scheme) : "",
            bold: W(e.bold) ? globalThis.Boolean(e.bold) : !1,
            italic: W(e.italic) ? globalThis.Boolean(e.italic) : !1
        }
    },
    toJSON(e) {
        const n = {};
        return e.size !== 0 && (n.size = Math.round(e.size)),
        e.color !== "" && (n.color = e.color),
        e.name !== "" && (n.name = e.name),
        e.family !== 0 && (n.family = Math.round(e.family)),
        e.scheme !== "" && (n.scheme = e.scheme),
        e.bold !== !1 && (n.bold = e.bold),
        e.italic !== !1 && (n.italic = e.italic),
        n
    },
    create(e) {
        return Wn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = Eo();
        return n.size = e.size ?? 0,
        n.color = e.color ?? "",
        n.name = e.name ?? "",
        n.family = e.family ?? 0,
        n.scheme = e.scheme ?? "",
        n.bold = e.bold ?? !1,
        n.italic = e.italic ?? !1,
        n
    }
};
function xo() {
    return {
        patternType: "",
        fgColor: "",
        bgColor: ""
    }
}
const Xn = {
    encode(e, n=new $) {
        return e.patternType !== "" && n.uint32(10).string(e.patternType),
        e.fgColor !== "" && n.uint32(18).string(e.fgColor),
        e.bgColor !== "" && n.uint32(26).string(e.bgColor),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = xo();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.patternType = t.string();
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.fgColor = t.string();
                    continue
                }
            case 3:
                {
                    if (s !== 26)
                        break;
                    o.bgColor = t.string();
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            patternType: W(e.patternType) ? globalThis.String(e.patternType) : "",
            fgColor: W(e.fgColor) ? globalThis.String(e.fgColor) : "",
            bgColor: W(e.bgColor) ? globalThis.String(e.bgColor) : ""
        }
    },
    toJSON(e) {
        const n = {};
        return e.patternType !== "" && (n.patternType = e.patternType),
        e.fgColor !== "" && (n.fgColor = e.fgColor),
        e.bgColor !== "" && (n.bgColor = e.bgColor),
        n
    },
    create(e) {
        return Xn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = xo();
        return n.patternType = e.patternType ?? "",
        n.fgColor = e.fgColor ?? "",
        n.bgColor = e.bgColor ?? "",
        n
    }
};
function To() {
    return {
        style: "",
        color: ""
    }
}
const ae = {
    encode(e, n=new $) {
        return e.style !== "" && n.uint32(10).string(e.style),
        e.color !== "" && n.uint32(18).string(e.color),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = To();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.style = t.string();
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.color = t.string();
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            style: W(e.style) ? globalThis.String(e.style) : "",
            color: W(e.color) ? globalThis.String(e.color) : ""
        }
    },
    toJSON(e) {
        const n = {};
        return e.style !== "" && (n.style = e.style),
        e.color !== "" && (n.color = e.color),
        n
    },
    create(e) {
        return ae.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = To();
        return n.style = e.style ?? "",
        n.color = e.color ?? "",
        n
    }
};
function wo() {
    return {
        left: void 0,
        right: void 0,
        top: void 0,
        bottom: void 0
    }
}
const Vn = {
    encode(e, n=new $) {
        return e.left !== void 0 && ae.encode(e.left, n.uint32(10).fork()).join(),
        e.right !== void 0 && ae.encode(e.right, n.uint32(18).fork()).join(),
        e.top !== void 0 && ae.encode(e.top, n.uint32(26).fork()).join(),
        e.bottom !== void 0 && ae.encode(e.bottom, n.uint32(34).fork()).join(),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = wo();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.left = ae.decode(t, t.uint32());
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.right = ae.decode(t, t.uint32());
                    continue
                }
            case 3:
                {
                    if (s !== 26)
                        break;
                    o.top = ae.decode(t, t.uint32());
                    continue
                }
            case 4:
                {
                    if (s !== 34)
                        break;
                    o.bottom = ae.decode(t, t.uint32());
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            left: W(e.left) ? ae.fromJSON(e.left) : void 0,
            right: W(e.right) ? ae.fromJSON(e.right) : void 0,
            top: W(e.top) ? ae.fromJSON(e.top) : void 0,
            bottom: W(e.bottom) ? ae.fromJSON(e.bottom) : void 0
        }
    },
    toJSON(e) {
        const n = {};
        return e.left !== void 0 && (n.left = ae.toJSON(e.left)),
        e.right !== void 0 && (n.right = ae.toJSON(e.right)),
        e.top !== void 0 && (n.top = ae.toJSON(e.top)),
        e.bottom !== void 0 && (n.bottom = ae.toJSON(e.bottom)),
        n
    },
    create(e) {
        return Vn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = wo();
        return n.left = e.left !== void 0 && e.left !== null ? ae.fromPartial(e.left) : void 0,
        n.right = e.right !== void 0 && e.right !== null ? ae.fromPartial(e.right) : void 0,
        n.top = e.top !== void 0 && e.top !== null ? ae.fromPartial(e.top) : void 0,
        n.bottom = e.bottom !== void 0 && e.bottom !== null ? ae.fromPartial(e.bottom) : void 0,
        n
    }
};
function Io() {
    return {
        id: 0,
        formatCode: ""
    }
}
const Hn = {
    encode(e, n=new $) {
        return e.id !== 0 && n.uint32(8).int32(e.id),
        e.formatCode !== "" && n.uint32(18).string(e.formatCode),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = Io();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 8)
                        break;
                    o.id = t.int32();
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.formatCode = t.string();
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            id: W(e.id) ? globalThis.Number(e.id) : 0,
            formatCode: W(e.formatCode) ? globalThis.String(e.formatCode) : ""
        }
    },
    toJSON(e) {
        const n = {};
        return e.id !== 0 && (n.id = Math.round(e.id)),
        e.formatCode !== "" && (n.formatCode = e.formatCode),
        n
    },
    create(e) {
        return Hn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = Io();
        return n.id = e.id ?? 0,
        n.formatCode = e.formatCode ?? "",
        n
    }
};
function ko() {
    return {
        numFmtId: void 0,
        fontId: void 0,
        fillId: void 0,
        borderId: void 0,
        xfId: void 0,
        applyFill: void 0,
        applyFont: void 0,
        applyBorder: void 0,
        applyAlignment: void 0,
        horizontalAlignment: void 0,
        verticalAlignment: void 0
    }
}
const We = {
    encode(e, n=new $) {
        return e.numFmtId !== void 0 && n.uint32(8).int32(e.numFmtId),
        e.fontId !== void 0 && n.uint32(16).int32(e.fontId),
        e.fillId !== void 0 && n.uint32(24).int32(e.fillId),
        e.borderId !== void 0 && n.uint32(32).int32(e.borderId),
        e.xfId !== void 0 && n.uint32(40).int32(e.xfId),
        e.applyFill !== void 0 && n.uint32(48).bool(e.applyFill),
        e.applyFont !== void 0 && n.uint32(56).bool(e.applyFont),
        e.applyBorder !== void 0 && n.uint32(64).bool(e.applyBorder),
        e.applyAlignment !== void 0 && n.uint32(72).bool(e.applyAlignment),
        e.horizontalAlignment !== void 0 && n.uint32(82).string(e.horizontalAlignment),
        e.verticalAlignment !== void 0 && n.uint32(90).string(e.verticalAlignment),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = ko();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 8)
                        break;
                    o.numFmtId = t.int32();
                    continue
                }
            case 2:
                {
                    if (s !== 16)
                        break;
                    o.fontId = t.int32();
                    continue
                }
            case 3:
                {
                    if (s !== 24)
                        break;
                    o.fillId = t.int32();
                    continue
                }
            case 4:
                {
                    if (s !== 32)
                        break;
                    o.borderId = t.int32();
                    continue
                }
            case 5:
                {
                    if (s !== 40)
                        break;
                    o.xfId = t.int32();
                    continue
                }
            case 6:
                {
                    if (s !== 48)
                        break;
                    o.applyFill = t.bool();
                    continue
                }
            case 7:
                {
                    if (s !== 56)
                        break;
                    o.applyFont = t.bool();
                    continue
                }
            case 8:
                {
                    if (s !== 64)
                        break;
                    o.applyBorder = t.bool();
                    continue
                }
            case 9:
                {
                    if (s !== 72)
                        break;
                    o.applyAlignment = t.bool();
                    continue
                }
            case 10:
                {
                    if (s !== 82)
                        break;
                    o.horizontalAlignment = t.string();
                    continue
                }
            case 11:
                {
                    if (s !== 90)
                        break;
                    o.verticalAlignment = t.string();
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            numFmtId: W(e.numFmtId) ? globalThis.Number(e.numFmtId) : void 0,
            fontId: W(e.fontId) ? globalThis.Number(e.fontId) : void 0,
            fillId: W(e.fillId) ? globalThis.Number(e.fillId) : void 0,
            borderId: W(e.borderId) ? globalThis.Number(e.borderId) : void 0,
            xfId: W(e.xfId) ? globalThis.Number(e.xfId) : void 0,
            applyFill: W(e.applyFill) ? globalThis.Boolean(e.applyFill) : void 0,
            applyFont: W(e.applyFont) ? globalThis.Boolean(e.applyFont) : void 0,
            applyBorder: W(e.applyBorder) ? globalThis.Boolean(e.applyBorder) : void 0,
            applyAlignment: W(e.applyAlignment) ? globalThis.Boolean(e.applyAlignment) : void 0,
            horizontalAlignment: W(e.horizontalAlignment) ? globalThis.String(e.horizontalAlignment) : void 0,
            verticalAlignment: W(e.verticalAlignment) ? globalThis.String(e.verticalAlignment) : void 0
        }
    },
    toJSON(e) {
        const n = {};
        return e.numFmtId !== void 0 && (n.numFmtId = Math.round(e.numFmtId)),
        e.fontId !== void 0 && (n.fontId = Math.round(e.fontId)),
        e.fillId !== void 0 && (n.fillId = Math.round(e.fillId)),
        e.borderId !== void 0 && (n.borderId = Math.round(e.borderId)),
        e.xfId !== void 0 && (n.xfId = Math.round(e.xfId)),
        e.applyFill !== void 0 && (n.applyFill = e.applyFill),
        e.applyFont !== void 0 && (n.applyFont = e.applyFont),
        e.applyBorder !== void 0 && (n.applyBorder = e.applyBorder),
        e.applyAlignment !== void 0 && (n.applyAlignment = e.applyAlignment),
        e.horizontalAlignment !== void 0 && (n.horizontalAlignment = e.horizontalAlignment),
        e.verticalAlignment !== void 0 && (n.verticalAlignment = e.verticalAlignment),
        n
    },
    create(e) {
        return We.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = ko();
        return n.numFmtId = e.numFmtId ?? void 0,
        n.fontId = e.fontId ?? void 0,
        n.fillId = e.fillId ?? void 0,
        n.borderId = e.borderId ?? void 0,
        n.xfId = e.xfId ?? void 0,
        n.applyFill = e.applyFill ?? void 0,
        n.applyFont = e.applyFont ?? void 0,
        n.applyBorder = e.applyBorder ?? void 0,
        n.applyAlignment = e.applyAlignment ?? void 0,
        n.horizontalAlignment = e.horizontalAlignment ?? void 0,
        n.verticalAlignment = e.verticalAlignment ?? void 0,
        n
    }
};
function Ro() {
    return {
        index: 0,
        format: void 0
    }
}
const qn = {
    encode(e, n=new $) {
        return e.index !== 0 && n.uint32(8).int32(e.index),
        e.format !== void 0 && We.encode(e.format, n.uint32(18).fork()).join(),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = Ro();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 8)
                        break;
                    o.index = t.int32();
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.format = We.decode(t, t.uint32());
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            index: W(e.index) ? globalThis.Number(e.index) : 0,
            format: W(e.format) ? We.fromJSON(e.format) : void 0
        }
    },
    toJSON(e) {
        const n = {};
        return e.index !== 0 && (n.index = Math.round(e.index)),
        e.format !== void 0 && (n.format = We.toJSON(e.format)),
        n
    },
    create(e) {
        return qn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = Ro();
        return n.index = e.index ?? 0,
        n.format = e.format !== void 0 && e.format !== null ? We.fromPartial(e.format) : void 0,
        n
    }
};
function Co() {
    return {
        index: 0,
        name: "",
        builtinId: "",
        xfId: void 0
    }
}
const zn = {
    encode(e, n=new $) {
        return e.index !== 0 && n.uint32(8).int32(e.index),
        e.name !== "" && n.uint32(18).string(e.name),
        e.builtinId !== "" && n.uint32(26).string(e.builtinId),
        e.xfId !== void 0 && n.uint32(32).int32(e.xfId),
        n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = Co();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 8)
                        break;
                    o.index = t.int32();
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.name = t.string();
                    continue
                }
            case 3:
                {
                    if (s !== 26)
                        break;
                    o.builtinId = t.string();
                    continue
                }
            case 4:
                {
                    if (s !== 32)
                        break;
                    o.xfId = t.int32();
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            index: W(e.index) ? globalThis.Number(e.index) : 0,
            name: W(e.name) ? globalThis.String(e.name) : "",
            builtinId: W(e.builtinId) ? globalThis.String(e.builtinId) : "",
            xfId: W(e.xfId) ? globalThis.Number(e.xfId) : void 0
        }
    },
    toJSON(e) {
        const n = {};
        return e.index !== 0 && (n.index = Math.round(e.index)),
        e.name !== "" && (n.name = e.name),
        e.builtinId !== "" && (n.builtinId = e.builtinId),
        e.xfId !== void 0 && (n.xfId = Math.round(e.xfId)),
        n
    },
    create(e) {
        return zn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = Co();
        return n.index = e.index ?? 0,
        n.name = e.name ?? "",
        n.builtinId = e.builtinId ?? "",
        n.xfId = e.xfId ?? void 0,
        n
    }
};
function Oo() {
    return {
        fonts: [],
        fills: [],
        cellXfs: [],
        borders: [],
        cellStyles: [],
        cellStyleXfs: [],
        numberFormats: []
    }
}
const Gn = {
    encode(e, n=new $) {
        for (const t of e.fonts)
            Wn.encode(t, n.uint32(10).fork()).join();
        for (const t of e.fills)
            Xn.encode(t, n.uint32(18).fork()).join();
        for (const t of e.cellXfs)
            We.encode(t, n.uint32(26).fork()).join();
        for (const t of e.borders)
            Vn.encode(t, n.uint32(34).fork()).join();
        for (const t of e.cellStyles)
            zn.encode(t, n.uint32(42).fork()).join();
        for (const t of e.cellStyleXfs)
            qn.encode(t, n.uint32(50).fork()).join();
        for (const t of e.numberFormats)
            Hn.encode(t, n.uint32(58).fork()).join();
        return n
    },
    decode(e, n) {
        const t = e instanceof B ? e : new B(e);
        let r = n === void 0 ? t.len : t.pos + n;
        const o = Oo();
        for (; t.pos < r; ) {
            const s = t.uint32();
            switch (s >>> 3) {
            case 1:
                {
                    if (s !== 10)
                        break;
                    o.fonts.push(Wn.decode(t, t.uint32()));
                    continue
                }
            case 2:
                {
                    if (s !== 18)
                        break;
                    o.fills.push(Xn.decode(t, t.uint32()));
                    continue
                }
            case 3:
                {
                    if (s !== 26)
                        break;
                    o.cellXfs.push(We.decode(t, t.uint32()));
                    continue
                }
            case 4:
                {
                    if (s !== 34)
                        break;
                    o.borders.push(Vn.decode(t, t.uint32()));
                    continue
                }
            case 5:
                {
                    if (s !== 42)
                        break;
                    o.cellStyles.push(zn.decode(t, t.uint32()));
                    continue
                }
            case 6:
                {
                    if (s !== 50)
                        break;
                    o.cellStyleXfs.push(qn.decode(t, t.uint32()));
                    continue
                }
            case 7:
                {
                    if (s !== 58)
                        break;
                    o.numberFormats.push(Hn.decode(t, t.uint32()));
                    continue
                }
            }
            if ((s & 7) === 4 || s === 0)
                break;
            t.skip(s & 7)
        }
        return o
    },
    fromJSON(e) {
        return {
            fonts: globalThis.Array.isArray(e?.fonts) ? e.fonts.map(n => Wn.fromJSON(n)) : [],
            fills: globalThis.Array.isArray(e?.fills) ? e.fills.map(n => Xn.fromJSON(n)) : [],
            cellXfs: globalThis.Array.isArray(e?.cellXfs) ? e.cellXfs.map(n => We.fromJSON(n)) : [],
            borders: globalThis.Array.isArray(e?.borders) ? e.borders.map(n => Vn.fromJSON(n)) : [],
            cellStyles: globalThis.Array.isArray(e?.cellStyles) ? e.cellStyles.map(n => zn.fromJSON(n)) : [],
            cellStyleXfs: globalThis.Array.isArray(e?.cellStyleXfs) ? e.cellStyleXfs.map(n => qn.fromJSON(n)) : [],
            numberFormats: globalThis.Array.isArray(e?.numberFormats) ? e.numberFormats.map(n => Hn.fromJSON(n)) : []
        }
    },
    toJSON(e) {
        const n = {};
        return e.fonts?.length && (n.fonts = e.fonts.map(t => Wn.toJSON(t))),
        e.fills?.length && (n.fills = e.fills.map(t => Xn.toJSON(t))),
        e.cellXfs?.length && (n.cellXfs = e.cellXfs.map(t => We.toJSON(t))),
        e.borders?.length && (n.borders = e.borders.map(t => Vn.toJSON(t))),
        e.cellStyles?.length && (n.cellStyles = e.cellStyles.map(t => zn.toJSON(t))),
        e.cellStyleXfs?.length && (n.cellStyleXfs = e.cellStyleXfs.map(t => qn.toJSON(t))),
        e.numberFormats?.length && (n.numberFormats = e.numberFormats.map(t => Hn.toJSON(t))),
        n
    },
    create(e) {
        return Gn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        const n = Oo();
        return n.fonts = e.fonts?.map(t => Wn.fromPartial(t)) || [],
        n.fills = e.fills?.map(t => Xn.fromPartial(t)) || [],
        n.cellXfs = e.cellXfs?.map(t => We.fromPartial(t)) || [],
        n.borders = e.borders?.map(t => Vn.fromPartial(t)) || [],
        n.cellStyles = e.cellStyles?.map(t => zn.fromPartial(t)) || [],
        n.cellStyleXfs = e.cellStyleXfs?.map(t => qn.fromPartial(t)) || [],
        n.numberFormats = e.numberFormats?.map(t => Hn.fromPartial(t)) || [],
        n
    }
};
function W(e) {
    return e != null
}
const Zt = new Map;
let gt = null;
function bf(e, n, t, r) {
    if (/\bwidth\s*=|\bheight\s*=/.test(e))
        return new Blob([e],{
            type: "image/svg+xml"
        });
    const o = e.replace(/<svg\b([^>]*)>/, `<svg$1 width="${t}" height="${r}">`);
    return new Blob([o],{
        type: "image/svg+xml"
    })
}
async function ii(e) {
    if (!e.image)
        throw new Error("no image on element");
    const n = `${e.image.data.byteLength}_${e.image.contentType}`
      , t = Zt.get(n);
    if (!t)
        if (e.image.contentType === "image/svg+xml") {
            const r = Math.round((e.bbox?.widthEmu ?? 1) * Oe)
              , o = Math.round((e.bbox?.heightEmu ?? 1) * Oe)
              , s = window.devicePixelRatio || 1
              , c = bf(new TextDecoder().decode(e.image.data), e.image.contentType, r, o)
              , g = URL.createObjectURL(c)
              , h = new Image;
            h.src = g,
            await h.decode();
            const f = createImageBitmap(h, {
                resizeWidth: r * s,
                resizeHeight: o * s
            });
            return URL.revokeObjectURL(g),
            Zt.set(n, f),
            f
        } else {
            const r = new Blob([e.image.data],{
                type: e.image.contentType
            })
              , o = createImageBitmap(r);
            return Zt.set(n, o),
            o
        }
    return t
}
async function Yf(e, n, t, r) {
    if (!e.image)
        return;
    const {x: o, y: s, width: c, height: g} = sr(e, t, r)
      , h = await ii(e);
    if (!h)
        return;
    let f = 0
      , i = 0
      , l = h.width
      , u = h.height;
    const a = e.image.mask;
    if (a) {
        const p = N => N / 1e5
          , d = h.width
          , m = h.height;
        f += p(a.cropLeft) * d,
        i += p(a.cropTop) * m,
        l -= (p(a.cropLeft) + p(a.cropRight)) * d,
        u -= (p(a.cropTop) + p(a.cropBottom)) * m
    }
    n.drawImage(h, f, i, l, u, o, s, c, g)
}
function $f(e) {
    if (gt)
        return gt;
    if (!e)
        return {
            colorMap: {},
            lineStyleMap: {},
            effectMap: {}
        };
    const n = {};
    if (e.colorScheme) {
        for (const o of e.colorScheme.colors)
            o.color && (n[o.name] = o.color.lastColor ? `#${o.color.lastColor}` : `#${o.color.value}`);
        n.bg1 = n.lt1,
        n.bg2 = n.lt2
    }
    const t = {};
    for (const [o,s] of e.lineStyleList.entries())
        t[o + 1] = s;
    const r = {};
    for (const [o,s] of e.effectStyleList.entries())
        r[o + 1] = s;
    return gt = {
        colorMap: n,
        lineStyleMap: t,
        effectMap: r
    },
    gt
}
function Zf(e, n, t) {
    let r = e.background;
    if (r?.fill?.color)
        return xt(r.fill.color, t);
    if (r || (r = n.layouts.find(o => o.id === e.useLayoutId)?.background),
    r?.ref?.index) {
        const o = r.ref.index - 1001
          , c = n.theme?.backgroundFillStyleList[o]?.color;
        if (c) {
            const g = {
                ...c,
                value: r.ref.schemeColor
            };
            return xt(g, t)
        }
    }
    return t.colorMap.bg1
}
async function si(e, n, t, r) {
    const o = $f(n.theme)
      , s = e.widthEmu * Oe
      , c = e.heightEmu * Oe;
    t.save();
    const g = Zf(e, n, o);
    t.fillStyle = g ?? "transparent",
    t.fillRect(0, 0, s, c);
    const h = [...e.elements].sort( (f, i) => f.zIndex - i.zIndex);
    await Promise.all(h.filter(f => f.image).map(f => ii(f)));
    for (const f of h)
        if (f.image && await Yf(f, t, n, e),
        f.type === tr.CHART_REFERENCE && os(f, t, n, e),
        f.type === tr.TABLE && is(f, t, n, o, e),
        f.shape && Kf(f, t, n, e, o),
        f.paragraphs && f.paragraphs.length > 0 && ss(f, t, n, o, e, r),
        r && f.hyperlink) {
            const {x: i, y: l, width: u, height: a} = sr(f, n, e);
            r.push({
                x: i,
                y: l,
                width: u,
                height: a,
                url: f.hyperlink.uri,
                action: f.hyperlink.action
            })
        }
    t.restore()
}
function Kf(e, n, t, r, o) {
    if (!e.shape)
        return;
    const {fill: s, line: c, geometry: g} = e.shape
      , {x: h, y: f, width: i, height: l} = sr(e, t, r);
    let u = c?.widthEmu ? c.widthEmu * Oe : 0;
    if (n.save(),
    n.fillStyle = xt(s?.color, o) ?? "transparent",
    e.lineReference) {
        const a = o.lineStyleMap[e.lineReference.index];
        n.strokeStyle = "solid",
        u ||= a?.widthEmu ? a.widthEmu * Oe : u
    }
    switch (e.effectReference && o.effectMap[e.effectReference.index].effects.forEach(p => {
        if (p.type === ei.OUTER_SHADOW) {
            const d = p.shadow?.color ? xt(p.shadow.color, o) : "transparent";
            n.shadowColor = d ?? "transparent",
            n.shadowBlur = p.shadow?.blurRadius ? p.shadow.blurRadius * Oe : 0,
            n.shadowOffsetX = p.shadow?.distance ? p.shadow.distance * Oe : 0,
            n.shadowOffsetY = p.shadow?.distance ? p.shadow.distance * Oe : 0
        }
    }
    ),
    n.beginPath(),
    g) {
    case yt.RECTANGLE:
    case yt.ROUND_RECT:
        {
            l === 0 ? (n.moveTo(h, f),
            n.lineTo(h + i, f)) : i === 0 ? (n.moveTo(h, f),
            n.lineTo(h, f + l)) : n.rect(h, f, i, l);
            break
        }
    case yt.ELLIPSE:
        {
            const a = i / 2
              , p = l / 2;
            n.ellipse(h + a, f + p, a, p, 0, 0, Math.PI * 2);
            break
        }
    default:
        n.restore();
        return
    }
    n.fill(),
    n.restore(),
    n.strokeStyle = u && c?.fill?.color?.value ? `#${c.fill.color.value}` : "transparent",
    n.lineWidth = u,
    u && n.stroke(),
    n.restore()
}
function Qf({startIndex: e, walnutId: n, onExit: t}) {
    const {presentationMap: r} = Lt()
      , o = r[n]
      , {presentation: s} = o
      , [c,g] = P.useState(e)
      , h = P.useRef(null)
      , f = P.useRef(null);
    P.useEffect( () => {
        const p = f.current;
        if (!p)
            return;
        p.requestFullscreen?.().catch(m => {
            Ze.addError(m)
        }
        );
        const d = () => {
            document.fullscreenElement || t()
        }
        ;
        return document.addEventListener("fullscreenchange", d),
        () => {
            document.removeEventListener("fullscreenchange", d),
            document.fullscreenElement && document.exitFullscreen().catch(m => {
                Ze.addError(m)
            }
            )
        }
    }
    , [t]);
    const i = s ? s.slides[c] : void 0;
    P.useEffect( () => {
        if (!s || !i || !h.current)
            return;
        const p = h.current.getContext("2d");
        if (!p)
            return;
        const d = i.widthEmu * Oe
          , m = i.heightEmu * Oe
          , N = window.devicePixelRatio || 1;
        h.current.width = d * N,
        h.current.height = m * N,
        p.resetTransform(),
        p.scale(N, N),
        si(i, s, p)
    }
    , [i, s]);
    const l = P.useCallback( () => {
        s && g(p => Math.min(p + 1, s.slides.length - 1))
    }
    , [s])
      , u = P.useCallback( () => g(p => Math.max(p - 1, 0)), [])
      , a = P.useCallback(p => {
        switch (p.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
        case "Enter":
            l();
            break;
        case "ArrowLeft":
        case "ArrowUp":
            u();
            break;
        case "Escape":
            document.fullscreenElement ? document.exitFullscreen().catch(d => {
                Ze.addError(d)
            }
            ) : t();
            break
        }
    }
    , [l, u, t]);
    return P.useEffect( () => (window.addEventListener("keydown", a),
    () => window.removeEventListener("keydown", a)), [a]),
    w.jsx("div", {
        ref: f,
        className: "fixed inset-0 flex items-center justify-center p-6",
        onClick: l,
        children: w.jsx("canvas", {
            ref: h,
            className: "max-h-full max-w-full bg-white"
        })
    })
}
var _f = vt.exports, So;
function jf() {
    return So ? vt.exports : (So = 1,
    function(e, n) {
        (function(t, r) {
            e.exports = r()
        }
        )(_f, function() {
            var t = function(r, o) {
                var s = Array.prototype.concat
                  , c = Array.prototype.slice
                  , g = Object.prototype.toString;
                function h(T, v) {
                    var y = T > v ? T : v;
                    return r.pow(10, 17 - ~~(r.log(y > 0 ? y : -y) * r.LOG10E))
                }
                var f = Array.isArray || function(v) {
                    return g.call(v) === "[object Array]"
                }
                ;
                function i(T) {
                    return g.call(T) === "[object Function]"
                }
                function l(T) {
                    return typeof T == "number" ? T - T === 0 : !1
                }
                function u(T) {
                    return s.apply([], T)
                }
                function a() {
                    return new a._init(arguments)
                }
                a.fn = a.prototype,
                a._init = function(v) {
                    if (f(v[0]))
                        if (f(v[0][0])) {
                            i(v[1]) && (v[0] = a.map(v[0], v[1]));
                            for (var y = 0; y < v[0].length; y++)
                                this[y] = v[0][y];
                            this.length = v[0].length
                        } else
                            this[0] = i(v[1]) ? a.map(v[0], v[1]) : v[0],
                            this.length = 1;
                    else if (l(v[0]))
                        this[0] = a.seq.apply(null, v),
                        this.length = 1;
                    else {
                        if (v[0]instanceof a)
                            return a(v[0].toArray());
                        this[0] = [],
                        this.length = 1
                    }
                    return this
                }
                ,
                a._init.prototype = a.prototype,
                a._init.constructor = a,
                a.utils = {
                    calcRdx: h,
                    isArray: f,
                    isFunction: i,
                    isNumber: l,
                    toVector: u
                },
                a._random_fn = r.random,
                a.setRandom = function(v) {
                    if (typeof v != "function")
                        throw new TypeError("fn is not a function");
                    a._random_fn = v
                }
                ,
                a.extend = function(v) {
                    var y, I;
                    if (arguments.length === 1) {
                        for (I in v)
                            a[I] = v[I];
                        return this
                    }
                    for (y = 1; y < arguments.length; y++)
                        for (I in arguments[y])
                            v[I] = arguments[y][I];
                    return v
                }
                ,
                a.rows = function(v) {
                    return v.length || 1
                }
                ,
                a.cols = function(v) {
                    return v[0].length || 1
                }
                ,
                a.dimensions = function(v) {
                    return {
                        rows: a.rows(v),
                        cols: a.cols(v)
                    }
                }
                ,
                a.row = function(v, y) {
                    return f(y) ? y.map(function(I) {
                        return a.row(v, I)
                    }) : v[y]
                }
                ,
                a.rowa = function(v, y) {
                    return a.row(v, y)
                }
                ,
                a.col = function(v, y) {
                    if (f(y)) {
                        var I = a.arange(v.length).map(function() {
                            return new Array(y.length)
                        });
                        return y.forEach(function(C, M) {
                            a.arange(v.length).forEach(function(L) {
                                I[L][M] = v[L][C]
                            })
                        }),
                        I
                    }
                    for (var x = new Array(v.length), O = 0; O < v.length; O++)
                        x[O] = [v[O][y]];
                    return x
                }
                ,
                a.cola = function(v, y) {
                    return a.col(v, y).map(function(I) {
                        return I[0]
                    })
                }
                ,
                a.diag = function(v) {
                    for (var y = a.rows(v), I = new Array(y), x = 0; x < y; x++)
                        I[x] = [v[x][x]];
                    return I
                }
                ,
                a.antidiag = function(v) {
                    for (var y = a.rows(v) - 1, I = new Array(y), x = 0; y >= 0; y--,
                    x++)
                        I[x] = [v[x][y]];
                    return I
                }
                ,
                a.transpose = function(v) {
                    var y = [], I, x, O, C, M;
                    for (f(v[0]) || (v = [v]),
                    x = v.length,
                    O = v[0].length,
                    M = 0; M < O; M++) {
                        for (I = new Array(x),
                        C = 0; C < x; C++)
                            I[C] = v[C][M];
                        y.push(I)
                    }
                    return y.length === 1 ? y[0] : y
                }
                ,
                a.map = function(v, y, I) {
                    var x, O, C, M, L;
                    for (f(v[0]) || (v = [v]),
                    O = v.length,
                    C = v[0].length,
                    M = I ? v : new Array(O),
                    x = 0; x < O; x++)
                        for (M[x] || (M[x] = new Array(C)),
                        L = 0; L < C; L++)
                            M[x][L] = y(v[x][L], x, L);
                    return M.length === 1 ? M[0] : M
                }
                ,
                a.cumreduce = function(v, y, I) {
                    var x, O, C, M, L;
                    for (f(v[0]) || (v = [v]),
                    O = v.length,
                    C = v[0].length,
                    M = I ? v : new Array(O),
                    x = 0; x < O; x++)
                        for (M[x] || (M[x] = new Array(C)),
                        C > 0 && (M[x][0] = v[x][0]),
                        L = 1; L < C; L++)
                            M[x][L] = y(M[x][L - 1], v[x][L]);
                    return M.length === 1 ? M[0] : M
                }
                ,
                a.alter = function(v, y) {
                    return a.map(v, y, !0)
                }
                ,
                a.create = function(v, y, I) {
                    var x = new Array(v), O, C;
                    for (i(y) && (I = y,
                    y = v),
                    O = 0; O < v; O++)
                        for (x[O] = new Array(y),
                        C = 0; C < y; C++)
                            x[O][C] = I(O, C);
                    return x
                }
                ;
                function p() {
                    return 0
                }
                a.zeros = function(v, y) {
                    return l(y) || (y = v),
                    a.create(v, y, p)
                }
                ;
                function d() {
                    return 1
                }
                a.ones = function(v, y) {
                    return l(y) || (y = v),
                    a.create(v, y, d)
                }
                ,
                a.rand = function(v, y) {
                    return l(y) || (y = v),
                    a.create(v, y, a._random_fn)
                }
                ;
                function m(T, v) {
                    return T === v ? 1 : 0
                }
                a.identity = function(v, y) {
                    return l(y) || (y = v),
                    a.create(v, y, m)
                }
                ,
                a.symmetric = function(v) {
                    var y = v.length, I, x;
                    if (v.length !== v[0].length)
                        return !1;
                    for (I = 0; I < y; I++)
                        for (x = 0; x < y; x++)
                            if (v[x][I] !== v[I][x])
                                return !1;
                    return !0
                }
                ,
                a.clear = function(v) {
                    return a.alter(v, p)
                }
                ,
                a.seq = function(v, y, I, x) {
                    i(x) || (x = !1);
                    var O = [], C = h(v, y), M = (y * C - v * C) / ((I - 1) * C), L = v, X;
                    for (X = 0; L <= y && X < I; X++,
                    L = (v * C + M * C * X) / C)
                        O.push(x ? x(L, X) : L);
                    return O
                }
                ,
                a.arange = function(v, y, I) {
                    var x = [], O;
                    if (I = I || 1,
                    y === o && (y = v,
                    v = 0),
                    v === y || I === 0)
                        return [];
                    if (v < y && I < 0)
                        return [];
                    if (v > y && I > 0)
                        return [];
                    if (I > 0)
                        for (O = v; O < y; O += I)
                            x.push(O);
                    else
                        for (O = v; O > y; O += I)
                            x.push(O);
                    return x
                }
                ,
                a.slice = function() {
                    function T(y, I, x, O) {
                        var C, M = [], L = y.length;
                        if (I === o && x === o && O === o)
                            return a.copy(y);
                        if (I = I || 0,
                        x = x || y.length,
                        I = I >= 0 ? I : L + I,
                        x = x >= 0 ? x : L + x,
                        O = O || 1,
                        I === x || O === 0)
                            return [];
                        if (I < x && O < 0)
                            return [];
                        if (I > x && O > 0)
                            return [];
                        if (O > 0)
                            for (C = I; C < x; C += O)
                                M.push(y[C]);
                        else
                            for (C = I; C > x; C += O)
                                M.push(y[C]);
                        return M
                    }
                    function v(y, I) {
                        var x, O;
                        if (I = I || {},
                        l(I.row)) {
                            if (l(I.col))
                                return y[I.row][I.col];
                            var C = a.rowa(y, I.row);
                            return x = I.col || {},
                            T(C, x.start, x.end, x.step)
                        }
                        if (l(I.col)) {
                            var M = a.cola(y, I.col);
                            return O = I.row || {},
                            T(M, O.start, O.end, O.step)
                        }
                        O = I.row || {},
                        x = I.col || {};
                        var L = T(y, O.start, O.end, O.step);
                        return L.map(function(X) {
                            return T(X, x.start, x.end, x.step)
                        })
                    }
                    return v
                }(),
                a.sliceAssign = function(v, y, I) {
                    var x, O;
                    if (l(y.row)) {
                        if (l(y.col))
                            return v[y.row][y.col] = I;
                        y.col = y.col || {},
                        y.col.start = y.col.start || 0,
                        y.col.end = y.col.end || v[0].length,
                        y.col.step = y.col.step || 1,
                        x = a.arange(y.col.start, r.min(v.length, y.col.end), y.col.step);
                        var C = y.row;
                        return x.forEach(function(L, X) {
                            v[C][L] = I[X]
                        }),
                        v
                    }
                    if (l(y.col)) {
                        y.row = y.row || {},
                        y.row.start = y.row.start || 0,
                        y.row.end = y.row.end || v.length,
                        y.row.step = y.row.step || 1,
                        O = a.arange(y.row.start, r.min(v[0].length, y.row.end), y.row.step);
                        var M = y.col;
                        return O.forEach(function(L, X) {
                            v[L][M] = I[X]
                        }),
                        v
                    }
                    return I[0].length === o && (I = [I]),
                    y.row.start = y.row.start || 0,
                    y.row.end = y.row.end || v.length,
                    y.row.step = y.row.step || 1,
                    y.col.start = y.col.start || 0,
                    y.col.end = y.col.end || v[0].length,
                    y.col.step = y.col.step || 1,
                    O = a.arange(y.row.start, r.min(v.length, y.row.end), y.row.step),
                    x = a.arange(y.col.start, r.min(v[0].length, y.col.end), y.col.step),
                    O.forEach(function(L, X) {
                        x.forEach(function(Y, z) {
                            v[L][Y] = I[X][z]
                        })
                    }),
                    v
                }
                ,
                a.diagonal = function(v) {
                    var y = a.zeros(v.length, v.length);
                    return v.forEach(function(I, x) {
                        y[x][x] = I
                    }),
                    y
                }
                ,
                a.copy = function(v) {
                    return v.map(function(y) {
                        return l(y) ? y : y.map(function(I) {
                            return I
                        })
                    })
                }
                ;
                var N = a.prototype;
                return N.length = 0,
                N.push = Array.prototype.push,
                N.sort = Array.prototype.sort,
                N.splice = Array.prototype.splice,
                N.slice = Array.prototype.slice,
                N.toArray = function() {
                    return this.length > 1 ? c.call(this) : c.call(this)[0]
                }
                ,
                N.map = function(v, y) {
                    return a(a.map(this, v, y))
                }
                ,
                N.cumreduce = function(v, y) {
                    return a(a.cumreduce(this, v, y))
                }
                ,
                N.alter = function(v) {
                    return a.alter(this, v),
                    this
                }
                ,
                function(T) {
                    for (var v = 0; v < T.length; v++)
                        (function(y) {
                            N[y] = function(I) {
                                var x = this, O;
                                return I ? (setTimeout(function() {
                                    I.call(x, N[y].call(x))
                                }),
                                this) : (O = a[y](this),
                                f(O) ? a(O) : O)
                            }
                        }
                        )(T[v])
                }("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),
                function(T) {
                    for (var v = 0; v < T.length; v++)
                        (function(y) {
                            N[y] = function(I, x) {
                                var O = this;
                                return x ? (setTimeout(function() {
                                    x.call(O, N[y].call(O, I))
                                }),
                                this) : a(a[y](this, I))
                            }
                        }
                        )(T[v])
                }("row col".split(" ")),
                function(T) {
                    for (var v = 0; v < T.length; v++)
                        (function(y) {
                            N[y] = function() {
                                return a(a[y].apply(null, arguments))
                            }
                        }
                        )(T[v])
                }("create zeros ones rand identity".split(" ")),
                a
            }(Math);
            return function(r, o) {
                var s = r.utils.isFunction;
                function c(f, i) {
                    return f - i
                }
                function g(f, i, l) {
                    return o.max(i, o.min(f, l))
                }
                r.sum = function(i) {
                    for (var l = 0, u = i.length; --u >= 0; )
                        l += i[u];
                    return l
                }
                ,
                r.sumsqrd = function(i) {
                    for (var l = 0, u = i.length; --u >= 0; )
                        l += i[u] * i[u];
                    return l
                }
                ,
                r.sumsqerr = function(i) {
                    for (var l = r.mean(i), u = 0, a = i.length, p; --a >= 0; )
                        p = i[a] - l,
                        u += p * p;
                    return u
                }
                ,
                r.sumrow = function(i) {
                    for (var l = 0, u = i.length; --u >= 0; )
                        l += i[u];
                    return l
                }
                ,
                r.product = function(i) {
                    for (var l = 1, u = i.length; --u >= 0; )
                        l *= i[u];
                    return l
                }
                ,
                r.min = function(i) {
                    for (var l = i[0], u = 0; ++u < i.length; )
                        i[u] < l && (l = i[u]);
                    return l
                }
                ,
                r.max = function(i) {
                    for (var l = i[0], u = 0; ++u < i.length; )
                        i[u] > l && (l = i[u]);
                    return l
                }
                ,
                r.unique = function(i) {
                    for (var l = {}, u = [], a = 0; a < i.length; a++)
                        l[i[a]] || (l[i[a]] = !0,
                        u.push(i[a]));
                    return u
                }
                ,
                r.mean = function(i) {
                    return r.sum(i) / i.length
                }
                ,
                r.meansqerr = function(i) {
                    return r.sumsqerr(i) / i.length
                }
                ,
                r.geomean = function(i) {
                    var l = i.map(o.log)
                      , u = r.mean(l);
                    return o.exp(u)
                }
                ,
                r.median = function(i) {
                    var l = i.length
                      , u = i.slice().sort(c);
                    return l & 1 ? u[l / 2 | 0] : (u[l / 2 - 1] + u[l / 2]) / 2
                }
                ,
                r.cumsum = function(i) {
                    return r.cumreduce(i, function(l, u) {
                        return l + u
                    })
                }
                ,
                r.cumprod = function(i) {
                    return r.cumreduce(i, function(l, u) {
                        return l * u
                    })
                }
                ,
                r.diff = function(i) {
                    var l = [], u = i.length, a;
                    for (a = 1; a < u; a++)
                        l.push(i[a] - i[a - 1]);
                    return l
                }
                ,
                r.rank = function(f) {
                    var i, l = [], u = {};
                    for (i = 0; i < f.length; i++) {
                        var a = f[i];
                        u[a] ? u[a]++ : (u[a] = 1,
                        l.push(a))
                    }
                    var p = l.sort(c)
                      , d = {}
                      , m = 1;
                    for (i = 0; i < p.length; i++) {
                        var a = p[i]
                          , N = u[a]
                          , T = m
                          , v = m + N - 1
                          , y = (T + v) / 2;
                        d[a] = y,
                        m += N
                    }
                    return f.map(function(I) {
                        return d[I]
                    })
                }
                ,
                r.mode = function(i) {
                    var l = i.length, u = i.slice().sort(c), a = 1, p = 0, d = 0, m = [], N;
                    for (N = 0; N < l; N++)
                        u[N] === u[N + 1] ? a++ : (a > p ? (m = [u[N]],
                        p = a,
                        d = 0) : a === p && (m.push(u[N]),
                        d++),
                        a = 1);
                    return d === 0 ? m[0] : m
                }
                ,
                r.range = function(i) {
                    return r.max(i) - r.min(i)
                }
                ,
                r.variance = function(i, l) {
                    return r.sumsqerr(i) / (i.length - (l ? 1 : 0))
                }
                ,
                r.pooledvariance = function(i) {
                    var l = i.reduce(function(a, p) {
                        return a + r.sumsqerr(p)
                    }, 0)
                      , u = i.reduce(function(a, p) {
                        return a + p.length
                    }, 0);
                    return l / (u - i.length)
                }
                ,
                r.deviation = function(f) {
                    for (var i = r.mean(f), l = f.length, u = new Array(l), a = 0; a < l; a++)
                        u[a] = f[a] - i;
                    return u
                }
                ,
                r.stdev = function(i, l) {
                    return o.sqrt(r.variance(i, l))
                }
                ,
                r.pooledstdev = function(i) {
                    return o.sqrt(r.pooledvariance(i))
                }
                ,
                r.meandev = function(i) {
                    for (var l = r.mean(i), u = [], a = i.length - 1; a >= 0; a--)
                        u.push(o.abs(i[a] - l));
                    return r.mean(u)
                }
                ,
                r.meddev = function(i) {
                    for (var l = r.median(i), u = [], a = i.length - 1; a >= 0; a--)
                        u.push(o.abs(i[a] - l));
                    return r.median(u)
                }
                ,
                r.coeffvar = function(i) {
                    return r.stdev(i) / r.mean(i)
                }
                ,
                r.quartiles = function(i) {
                    var l = i.length
                      , u = i.slice().sort(c);
                    return [u[o.round(l / 4) - 1], u[o.round(l / 2) - 1], u[o.round(l * 3 / 4) - 1]]
                }
                ,
                r.quantiles = function(i, l, u, a) {
                    var p = i.slice().sort(c), d = [l.length], m = i.length, N, T, v, y, I, x;
                    for (typeof u > "u" && (u = 3 / 8),
                    typeof a > "u" && (a = 3 / 8),
                    N = 0; N < l.length; N++)
                        T = l[N],
                        v = u + T * (1 - u - a),
                        y = m * T + v,
                        I = o.floor(g(y, 1, m - 1)),
                        x = g(y - I, 0, 1),
                        d[N] = (1 - x) * p[I - 1] + x * p[I];
                    return d
                }
                ,
                r.percentile = function(i, l, u) {
                    var a = i.slice().sort(c)
                      , p = l * (a.length + (u ? 1 : -1)) + (u ? 0 : 1)
                      , d = parseInt(p)
                      , m = p - d;
                    return d + 1 < a.length ? a[d - 1] + m * (a[d] - a[d - 1]) : a[d - 1]
                }
                ,
                r.percentileOfScore = function(i, l, u) {
                    var a = 0, p = i.length, d = !1, m, N;
                    for (u === "strict" && (d = !0),
                    N = 0; N < p; N++)
                        m = i[N],
                        (d && m < l || !d && m <= l) && a++;
                    return a / p
                }
                ,
                r.histogram = function(i, l) {
                    l = l || 4;
                    var u = r.min(i), a = (r.max(i) - u) / l, p = i.length, d = [], m;
                    for (m = 0; m < l; m++)
                        d[m] = 0;
                    for (m = 0; m < p; m++)
                        d[o.min(o.floor((i[m] - u) / a), l - 1)] += 1;
                    return d
                }
                ,
                r.covariance = function(i, l) {
                    var u = r.mean(i), a = r.mean(l), p = i.length, d = new Array(p), m;
                    for (m = 0; m < p; m++)
                        d[m] = (i[m] - u) * (l[m] - a);
                    return r.sum(d) / (p - 1)
                }
                ,
                r.corrcoeff = function(i, l) {
                    return r.covariance(i, l) / r.stdev(i, 1) / r.stdev(l, 1)
                }
                ,
                r.spearmancoeff = function(f, i) {
                    return f = r.rank(f),
                    i = r.rank(i),
                    r.corrcoeff(f, i)
                }
                ,
                r.stanMoment = function(i, l) {
                    for (var u = r.mean(i), a = r.stdev(i), p = i.length, d = 0, m = 0; m < p; m++)
                        d += o.pow((i[m] - u) / a, l);
                    return d / i.length
                }
                ,
                r.skewness = function(i) {
                    return r.stanMoment(i, 3)
                }
                ,
                r.kurtosis = function(i) {
                    return r.stanMoment(i, 4) - 3
                }
                ;
                var h = r.prototype;
                (function(f) {
                    for (var i = 0; i < f.length; i++)
                        (function(l) {
                            h[l] = function(u, a) {
                                var p = []
                                  , d = 0
                                  , m = this;
                                if (s(u) && (a = u,
                                u = !1),
                                a)
                                    return setTimeout(function() {
                                        a.call(m, h[l].call(m, u))
                                    }),
                                    this;
                                if (this.length > 1) {
                                    for (m = u === !0 ? this : this.transpose(); d < m.length; d++)
                                        p[d] = r[l](m[d]);
                                    return p
                                }
                                return r[l](this[0], u)
                            }
                        }
                        )(f[i])
                }
                )("cumsum cumprod".split(" ")),
                function(f) {
                    for (var i = 0; i < f.length; i++)
                        (function(l) {
                            h[l] = function(u, a) {
                                var p = []
                                  , d = 0
                                  , m = this;
                                if (s(u) && (a = u,
                                u = !1),
                                a)
                                    return setTimeout(function() {
                                        a.call(m, h[l].call(m, u))
                                    }),
                                    this;
                                if (this.length > 1) {
                                    for (l !== "sumrow" && (m = u === !0 ? this : this.transpose()); d < m.length; d++)
                                        p[d] = r[l](m[d]);
                                    return u === !0 ? r[l](r.utils.toVector(p)) : p
                                }
                                return r[l](this[0], u)
                            }
                        }
                        )(f[i])
                }("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),
                function(f) {
                    for (var i = 0; i < f.length; i++)
                        (function(l) {
                            h[l] = function() {
                                var u = [], a = 0, p = this, d = Array.prototype.slice.call(arguments), m;
                                if (s(d[d.length - 1])) {
                                    m = d[d.length - 1];
                                    var N = d.slice(0, d.length - 1);
                                    return setTimeout(function() {
                                        m.call(p, h[l].apply(p, N))
                                    }),
                                    this
                                } else {
                                    m = void 0;
                                    var T = function(y) {
                                        return r[l].apply(p, [y].concat(d))
                                    }
                                }
                                if (this.length > 1) {
                                    for (p = p.transpose(); a < p.length; a++)
                                        u[a] = T(p[a]);
                                    return u
                                }
                                return T(this[0])
                            }
                        }
                        )(f[i])
                }("quantiles percentileOfScore".split(" "))
            }(t, Math),
            function(r, o) {
                r.gammaln = function(c) {
                    var g = 0, h = [76.18009172947146, -86.50532032941678, 24.01409824083091, -1.231739572450155, .001208650973866179, -5395239384953e-18], f = 1.000000000190015, i, l, u;
                    for (u = (l = i = c) + 5.5,
                    u -= (i + .5) * o.log(u); g < 6; g++)
                        f += h[g] / ++l;
                    return o.log(2.5066282746310007 * f / i) - u
                }
                ,
                r.loggam = function(c) {
                    var g, h, f, i, l, u, a, p = [.08333333333333333, -.002777777777777778, .0007936507936507937, -.0005952380952380952, .0008417508417508418, -.001917526917526918, .00641025641025641, -.02955065359477124, .1796443723688307, -1.3924322169059];
                    if (g = c,
                    a = 0,
                    c == 1 || c == 2)
                        return 0;
                    for (c <= 7 && (a = o.floor(7 - c),
                    g = c + a),
                    h = 1 / (g * g),
                    f = 2 * o.PI,
                    l = p[9],
                    u = 8; u >= 0; u--)
                        l *= h,
                        l += p[u];
                    if (i = l / g + .5 * o.log(f) + (g - .5) * o.log(g) - g,
                    c <= 7)
                        for (u = 1; u <= a; u++)
                            i -= o.log(g - 1),
                            g -= 1;
                    return i
                }
                ,
                r.gammafn = function(c) {
                    var g = [-1.716185138865495, 24.76565080557592, -379.80425647094563, 629.3311553128184, 866.9662027904133, -31451.272968848367, -36144.413418691176, 66456.14382024054], h = [-30.8402300119739, 315.35062697960416, -1015.1563674902192, -3107.771671572311, 22538.11842098015, 4755.846277527881, -134659.9598649693, -115132.2596755535], f = !1, i = 0, l = 0, u = 0, a = c, p, d, m, N;
                    if (c > 171.6243769536076)
                        return 1 / 0;
                    if (a <= 0)
                        if (N = a % 1 + 36e-17,
                        N)
                            f = (a & 1 ? -1 : 1) * o.PI / o.sin(o.PI * N),
                            a = 1 - a;
                        else
                            return 1 / 0;
                    for (m = a,
                    a < 1 ? d = a++ : d = (a -= i = (a | 0) - 1) - 1,
                    p = 0; p < 8; ++p)
                        u = (u + g[p]) * d,
                        l = l * d + h[p];
                    if (N = u / l + 1,
                    m < a)
                        N /= m;
                    else if (m > a)
                        for (p = 0; p < i; ++p)
                            N *= a,
                            a++;
                    return f && (N = f / N),
                    N
                }
                ,
                r.gammap = function(c, g) {
                    return r.lowRegGamma(c, g) * r.gammafn(c)
                }
                ,
                r.lowRegGamma = function(c, g) {
                    var h = r.gammaln(c), f = c, i = 1 / c, l = i, u = g + 1 - c, a = 1 / 1e-30, p = 1 / u, d = p, m = 1, N = -~(o.log(c >= 1 ? c : 1 / c) * 8.5 + c * .4 + 17), T;
                    if (g < 0 || c <= 0)
                        return NaN;
                    if (g < c + 1) {
                        for (; m <= N; m++)
                            i += l *= g / ++f;
                        return i * o.exp(-g + c * o.log(g) - h)
                    }
                    for (; m <= N; m++)
                        T = -m * (m - c),
                        u += 2,
                        p = T * p + u,
                        a = u + T / a,
                        p = 1 / p,
                        d *= p * a;
                    return 1 - d * o.exp(-g + c * o.log(g) - h)
                }
                ,
                r.factorialln = function(c) {
                    return c < 0 ? NaN : r.gammaln(c + 1)
                }
                ,
                r.factorial = function(c) {
                    return c < 0 ? NaN : r.gammafn(c + 1)
                }
                ,
                r.combination = function(c, g) {
                    return c > 170 || g > 170 ? o.exp(r.combinationln(c, g)) : r.factorial(c) / r.factorial(g) / r.factorial(c - g)
                }
                ,
                r.combinationln = function(c, g) {
                    return r.factorialln(c) - r.factorialln(g) - r.factorialln(c - g)
                }
                ,
                r.permutation = function(c, g) {
                    return r.factorial(c) / r.factorial(c - g)
                }
                ,
                r.betafn = function(c, g) {
                    if (!(c <= 0 || g <= 0))
                        return c + g > 170 ? o.exp(r.betaln(c, g)) : r.gammafn(c) * r.gammafn(g) / r.gammafn(c + g)
                }
                ,
                r.betaln = function(c, g) {
                    return r.gammaln(c) + r.gammaln(g) - r.gammaln(c + g)
                }
                ,
                r.betacf = function(c, g, h) {
                    var f = 1e-30, i = 1, l = g + h, u = g + 1, a = g - 1, p = 1, d = 1 - l * c / u, m, N, T, v;
                    for (o.abs(d) < f && (d = f),
                    d = 1 / d,
                    v = d; i <= 100 && (m = 2 * i,
                    N = i * (h - i) * c / ((a + m) * (g + m)),
                    d = 1 + N * d,
                    o.abs(d) < f && (d = f),
                    p = 1 + N / p,
                    o.abs(p) < f && (p = f),
                    d = 1 / d,
                    v *= d * p,
                    N = -(g + i) * (l + i) * c / ((g + m) * (u + m)),
                    d = 1 + N * d,
                    o.abs(d) < f && (d = f),
                    p = 1 + N / p,
                    o.abs(p) < f && (p = f),
                    d = 1 / d,
                    T = d * p,
                    v *= T,
                    !(o.abs(T - 1) < 3e-7)); i++)
                        ;
                    return v
                }
                ,
                r.gammapinv = function(c, g) {
                    var h = 0, f = g - 1, i = 1e-8, l = r.gammaln(g), u, a, p, d, m, N, T;
                    if (c >= 1)
                        return o.max(100, g + 100 * o.sqrt(g));
                    if (c <= 0)
                        return 0;
                    for (g > 1 ? (N = o.log(f),
                    T = o.exp(f * (N - 1) - l),
                    m = c < .5 ? c : 1 - c,
                    p = o.sqrt(-2 * o.log(m)),
                    u = (2.30753 + p * .27061) / (1 + p * (.99229 + p * .04481)) - p,
                    c < .5 && (u = -u),
                    u = o.max(.001, g * o.pow(1 - 1 / (9 * g) - u / (3 * o.sqrt(g)), 3))) : (p = 1 - g * (.253 + g * .12),
                    c < p ? u = o.pow(c / p, 1 / g) : u = 1 - o.log(1 - (c - p) / (1 - p))); h < 12; h++) {
                        if (u <= 0)
                            return 0;
                        if (a = r.lowRegGamma(g, u) - c,
                        g > 1 ? p = T * o.exp(-(u - f) + f * (o.log(u) - N)) : p = o.exp(-u + f * o.log(u) - l),
                        d = a / p,
                        u -= p = d / (1 - .5 * o.min(1, d * ((g - 1) / u - 1))),
                        u <= 0 && (u = .5 * (u + p)),
                        o.abs(p) < i * u)
                            break
                    }
                    return u
                }
                ,
                r.erf = function(c) {
                    var g = [-1.3026537197817094, .6419697923564902, .019476473204185836, -.00956151478680863, -.000946595344482036, .000366839497852761, 42523324806907e-18, -20278578112534e-18, -1624290004647e-18, 130365583558e-17, 15626441722e-18, -85238095915e-18, 6529054439e-18, 5059343495e-18, -991364156e-18, -227365122e-18, 96467911e-18, 2394038e-18, -6886027e-18, 894487e-18, 313092e-18, -112708e-18, 381e-18, 7106e-18, -1523e-18, -94e-18, 121e-18, -28e-18], h = g.length - 1, f = !1, i = 0, l = 0, u, a, p, d;
                    for (c < 0 && (c = -c,
                    f = !0),
                    u = 2 / (2 + c),
                    a = 4 * u - 2; h > 0; h--)
                        p = i,
                        i = a * i - l + g[h],
                        l = p;
                    return d = u * o.exp(-c * c + .5 * (g[0] + a * i) - l),
                    f ? d - 1 : 1 - d
                }
                ,
                r.erfc = function(c) {
                    return 1 - r.erf(c)
                }
                ,
                r.erfcinv = function(c) {
                    var g = 0, h, f, i, l;
                    if (c >= 2)
                        return -100;
                    if (c <= 0)
                        return 100;
                    for (l = c < 1 ? c : 2 - c,
                    i = o.sqrt(-2 * o.log(l / 2)),
                    h = -.70711 * ((2.30753 + i * .27061) / (1 + i * (.99229 + i * .04481)) - i); g < 2; g++)
                        f = r.erfc(h) - l,
                        h += f / (1.1283791670955126 * o.exp(-h * h) - h * f);
                    return c < 1 ? h : -h
                }
                ,
                r.ibetainv = function(c, g, h) {
                    var f = 1e-8, i = g - 1, l = h - 1, u = 0, a, p, d, m, N, T, v, y, I, x, O;
                    if (c <= 0)
                        return 0;
                    if (c >= 1)
                        return 1;
                    for (g >= 1 && h >= 1 ? (d = c < .5 ? c : 1 - c,
                    m = o.sqrt(-2 * o.log(d)),
                    v = (2.30753 + m * .27061) / (1 + m * (.99229 + m * .04481)) - m,
                    c < .5 && (v = -v),
                    y = (v * v - 3) / 6,
                    I = 2 / (1 / (2 * g - 1) + 1 / (2 * h - 1)),
                    x = v * o.sqrt(y + I) / I - (1 / (2 * h - 1) - 1 / (2 * g - 1)) * (y + 5 / 6 - 2 / (3 * I)),
                    v = g / (g + h * o.exp(2 * x))) : (a = o.log(g / (g + h)),
                    p = o.log(h / (g + h)),
                    m = o.exp(g * a) / g,
                    N = o.exp(h * p) / h,
                    x = m + N,
                    c < m / x ? v = o.pow(g * x * c, 1 / g) : v = 1 - o.pow(h * x * (1 - c), 1 / h)),
                    O = -r.gammaln(g) - r.gammaln(h) + r.gammaln(g + h); u < 10; u++) {
                        if (v === 0 || v === 1)
                            return v;
                        if (T = r.ibeta(v, g, h) - c,
                        m = o.exp(i * o.log(v) + l * o.log(1 - v) + O),
                        N = T / m,
                        v -= m = N / (1 - .5 * o.min(1, N * (i / v - l / (1 - v)))),
                        v <= 0 && (v = .5 * (v + m)),
                        v >= 1 && (v = .5 * (v + m + 1)),
                        o.abs(m) < f * v && u > 0)
                            break
                    }
                    return v
                }
                ,
                r.ibeta = function(c, g, h) {
                    var f = c === 0 || c === 1 ? 0 : o.exp(r.gammaln(g + h) - r.gammaln(g) - r.gammaln(h) + g * o.log(c) + h * o.log(1 - c));
                    return c < 0 || c > 1 ? !1 : c < (g + 1) / (g + h + 2) ? f * r.betacf(c, g, h) / g : 1 - f * r.betacf(1 - c, h, g) / h
                }
                ,
                r.randn = function(c, g) {
                    var h, f, i, l, u;
                    if (g || (g = c),
                    c)
                        return r.create(c, g, function() {
                            return r.randn()
                        });
                    do
                        h = r._random_fn(),
                        f = 1.7156 * (r._random_fn() - .5),
                        i = h - .449871,
                        l = o.abs(f) + .386595,
                        u = i * i + l * (.196 * l - .25472 * i);
                    while (u > .27597 && (u > .27846 || f * f > -4 * o.log(h) * h * h));
                    return f / h
                }
                ,
                r.randg = function(c, g, h) {
                    var f = c, i, l, u, a, p, d;
                    if (h || (h = g),
                    c || (c = 1),
                    g)
                        return d = r.zeros(g, h),
                        d.alter(function() {
                            return r.randg(c)
                        }),
                        d;
                    c < 1 && (c += 1),
                    i = c - 1 / 3,
                    l = 1 / o.sqrt(9 * i);
                    do {
                        do
                            p = r.randn(),
                            a = 1 + l * p;
                        while (a <= 0);
                        a = a * a * a,
                        u = r._random_fn()
                    } while (u > 1 - .331 * o.pow(p, 4) && o.log(u) > .5 * p * p + i * (1 - a + o.log(a)));
                    if (c == f)
                        return i * a;
                    do
                        u = r._random_fn();
                    while (u === 0);
                    return o.pow(u, 1 / f) * i * a
                }
                ,
                function(s) {
                    for (var c = 0; c < s.length; c++)
                        (function(g) {
                            r.fn[g] = function() {
                                return r(r.map(this, function(h) {
                                    return r[g](h)
                                }))
                            }
                        }
                        )(s[c])
                }("gammaln gammafn factorial factorialln".split(" ")),
                function(s) {
                    for (var c = 0; c < s.length; c++)
                        (function(g) {
                            r.fn[g] = function() {
                                return r(r[g].apply(null, arguments))
                            }
                        }
                        )(s[c])
                }("randn".split(" "))
            }(t, Math),
            function(r, o) {
                (function(f) {
                    for (var i = 0; i < f.length; i++)
                        (function(l) {
                            r[l] = function u(a, p, d) {
                                return this instanceof u ? (this._a = a,
                                this._b = p,
                                this._c = d,
                                this) : new u(a,p,d)
                            }
                            ,
                            r.fn[l] = function(u, a, p) {
                                var d = r[l](u, a, p);
                                return d.data = this,
                                d
                            }
                            ,
                            r[l].prototype.sample = function(u) {
                                var a = this._a
                                  , p = this._b
                                  , d = this._c;
                                return u ? r.alter(u, function() {
                                    return r[l].sample(a, p, d)
                                }) : r[l].sample(a, p, d)
                            }
                            ,
                            function(u) {
                                for (var a = 0; a < u.length; a++)
                                    (function(p) {
                                        r[l].prototype[p] = function(d) {
                                            var m = this._a
                                              , N = this._b
                                              , T = this._c;
                                            return !d && d !== 0 && (d = this.data),
                                            typeof d != "number" ? r.fn.map.call(d, function(v) {
                                                return r[l][p](v, m, N, T)
                                            }) : r[l][p](d, m, N, T)
                                        }
                                    }
                                    )(u[a])
                            }("pdf cdf inv".split(" ")),
                            function(u) {
                                for (var a = 0; a < u.length; a++)
                                    (function(p) {
                                        r[l].prototype[p] = function() {
                                            return r[l][p](this._a, this._b, this._c)
                                        }
                                    }
                                    )(u[a])
                            }("mean median mode variance".split(" "))
                        }
                        )(f[i])
                }
                )("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),
                r.extend(r.beta, {
                    pdf: function(i, l, u) {
                        return i > 1 || i < 0 ? 0 : l == 1 && u == 1 ? 1 : l < 512 && u < 512 ? o.pow(i, l - 1) * o.pow(1 - i, u - 1) / r.betafn(l, u) : o.exp((l - 1) * o.log(i) + (u - 1) * o.log(1 - i) - r.betaln(l, u))
                    },
                    cdf: function(i, l, u) {
                        return i > 1 || i < 0 ? (i > 1) * 1 : r.ibeta(i, l, u)
                    },
                    inv: function(i, l, u) {
                        return r.ibetainv(i, l, u)
                    },
                    mean: function(i, l) {
                        return i / (i + l)
                    },
                    median: function(i, l) {
                        return r.ibetainv(.5, i, l)
                    },
                    mode: function(i, l) {
                        return (i - 1) / (i + l - 2)
                    },
                    sample: function(i, l) {
                        var u = r.randg(i);
                        return u / (u + r.randg(l))
                    },
                    variance: function(i, l) {
                        return i * l / (o.pow(i + l, 2) * (i + l + 1))
                    }
                }),
                r.extend(r.centralF, {
                    pdf: function(i, l, u) {
                        var a, p, d;
                        return i < 0 ? 0 : l <= 2 ? i === 0 && l < 2 ? 1 / 0 : i === 0 && l === 2 ? 1 : 1 / r.betafn(l / 2, u / 2) * o.pow(l / u, l / 2) * o.pow(i, l / 2 - 1) * o.pow(1 + l / u * i, -(l + u) / 2) : (a = l * i / (u + i * l),
                        p = u / (u + i * l),
                        d = l * p / 2,
                        d * r.binomial.pdf((l - 2) / 2, (l + u - 2) / 2, a))
                    },
                    cdf: function(i, l, u) {
                        return i < 0 ? 0 : r.ibeta(l * i / (l * i + u), l / 2, u / 2)
                    },
                    inv: function(i, l, u) {
                        return u / (l * (1 / r.ibetainv(i, l / 2, u / 2) - 1))
                    },
                    mean: function(i, l) {
                        return l > 2 ? l / (l - 2) : void 0
                    },
                    mode: function(i, l) {
                        return i > 2 ? l * (i - 2) / (i * (l + 2)) : void 0
                    },
                    sample: function(i, l) {
                        var u = r.randg(i / 2) * 2
                          , a = r.randg(l / 2) * 2;
                        return u / i / (a / l)
                    },
                    variance: function(i, l) {
                        if (!(l <= 4))
                            return 2 * l * l * (i + l - 2) / (i * (l - 2) * (l - 2) * (l - 4))
                    }
                }),
                r.extend(r.cauchy, {
                    pdf: function(i, l, u) {
                        return u < 0 ? 0 : u / (o.pow(i - l, 2) + o.pow(u, 2)) / o.PI
                    },
                    cdf: function(i, l, u) {
                        return o.atan((i - l) / u) / o.PI + .5
                    },
                    inv: function(f, i, l) {
                        return i + l * o.tan(o.PI * (f - .5))
                    },
                    median: function(i) {
                        return i
                    },
                    mode: function(i) {
                        return i
                    },
                    sample: function(i, l) {
                        return r.randn() * o.sqrt(1 / (2 * r.randg(.5))) * l + i
                    }
                }),
                r.extend(r.chisquare, {
                    pdf: function(i, l) {
                        return i < 0 ? 0 : i === 0 && l === 2 ? .5 : o.exp((l / 2 - 1) * o.log(i) - i / 2 - l / 2 * o.log(2) - r.gammaln(l / 2))
                    },
                    cdf: function(i, l) {
                        return i < 0 ? 0 : r.lowRegGamma(l / 2, i / 2)
                    },
                    inv: function(f, i) {
                        return 2 * r.gammapinv(f, .5 * i)
                    },
                    mean: function(f) {
                        return f
                    },
                    median: function(i) {
                        return i * o.pow(1 - 2 / (9 * i), 3)
                    },
                    mode: function(i) {
                        return i - 2 > 0 ? i - 2 : 0
                    },
                    sample: function(i) {
                        return r.randg(i / 2) * 2
                    },
                    variance: function(i) {
                        return 2 * i
                    }
                }),
                r.extend(r.exponential, {
                    pdf: function(i, l) {
                        return i < 0 ? 0 : l * o.exp(-l * i)
                    },
                    cdf: function(i, l) {
                        return i < 0 ? 0 : 1 - o.exp(-l * i)
                    },
                    inv: function(f, i) {
                        return -o.log(1 - f) / i
                    },
                    mean: function(f) {
                        return 1 / f
                    },
                    median: function(f) {
                        return 1 / f * o.log(2)
                    },
                    mode: function() {
                        return 0
                    },
                    sample: function(i) {
                        return -1 / i * o.log(r._random_fn())
                    },
                    variance: function(f) {
                        return o.pow(f, -2)
                    }
                }),
                r.extend(r.gamma, {
                    pdf: function(i, l, u) {
                        return i < 0 ? 0 : i === 0 && l === 1 ? 1 / u : o.exp((l - 1) * o.log(i) - i / u - r.gammaln(l) - l * o.log(u))
                    },
                    cdf: function(i, l, u) {
                        return i < 0 ? 0 : r.lowRegGamma(l, i / u)
                    },
                    inv: function(f, i, l) {
                        return r.gammapinv(f, i) * l
                    },
                    mean: function(f, i) {
                        return f * i
                    },
                    mode: function(i, l) {
                        if (i > 1)
                            return (i - 1) * l
                    },
                    sample: function(i, l) {
                        return r.randg(i) * l
                    },
                    variance: function(i, l) {
                        return i * l * l
                    }
                }),
                r.extend(r.invgamma, {
                    pdf: function(i, l, u) {
                        return i <= 0 ? 0 : o.exp(-(l + 1) * o.log(i) - u / i - r.gammaln(l) + l * o.log(u))
                    },
                    cdf: function(i, l, u) {
                        return i <= 0 ? 0 : 1 - r.lowRegGamma(l, u / i)
                    },
                    inv: function(f, i, l) {
                        return l / r.gammapinv(1 - f, i)
                    },
                    mean: function(f, i) {
                        return f > 1 ? i / (f - 1) : void 0
                    },
                    mode: function(i, l) {
                        return l / (i + 1)
                    },
                    sample: function(i, l) {
                        return l / r.randg(i)
                    },
                    variance: function(i, l) {
                        if (!(i <= 2))
                            return l * l / ((i - 1) * (i - 1) * (i - 2))
                    }
                }),
                r.extend(r.kumaraswamy, {
                    pdf: function(i, l, u) {
                        return i === 0 && l === 1 ? u : i === 1 && u === 1 ? l : o.exp(o.log(l) + o.log(u) + (l - 1) * o.log(i) + (u - 1) * o.log(1 - o.pow(i, l)))
                    },
                    cdf: function(i, l, u) {
                        return i < 0 ? 0 : i > 1 ? 1 : 1 - o.pow(1 - o.pow(i, l), u)
                    },
                    inv: function(i, l, u) {
                        return o.pow(1 - o.pow(1 - i, 1 / u), 1 / l)
                    },
                    mean: function(f, i) {
                        return i * r.gammafn(1 + 1 / f) * r.gammafn(i) / r.gammafn(1 + 1 / f + i)
                    },
                    median: function(i, l) {
                        return o.pow(1 - o.pow(2, -1 / l), 1 / i)
                    },
                    mode: function(i, l) {
                        if (i >= 1 && l >= 1 && i !== 1 && l !== 1)
                            return o.pow((i - 1) / (i * l - 1), 1 / i)
                    },
                    variance: function() {
                        throw new Error("variance not yet implemented")
                    }
                }),
                r.extend(r.lognormal, {
                    pdf: function(i, l, u) {
                        return i <= 0 ? 0 : o.exp(-o.log(i) - .5 * o.log(2 * o.PI) - o.log(u) - o.pow(o.log(i) - l, 2) / (2 * u * u))
                    },
                    cdf: function(i, l, u) {
                        return i < 0 ? 0 : .5 + .5 * r.erf((o.log(i) - l) / o.sqrt(2 * u * u))
                    },
                    inv: function(f, i, l) {
                        return o.exp(-1.4142135623730951 * l * r.erfcinv(2 * f) + i)
                    },
                    mean: function(i, l) {
                        return o.exp(i + l * l / 2)
                    },
                    median: function(i) {
                        return o.exp(i)
                    },
                    mode: function(i, l) {
                        return o.exp(i - l * l)
                    },
                    sample: function(i, l) {
                        return o.exp(r.randn() * l + i)
                    },
                    variance: function(i, l) {
                        return (o.exp(l * l) - 1) * o.exp(2 * i + l * l)
                    }
                }),
                r.extend(r.noncentralt, {
                    pdf: function(i, l, u) {
                        var a = 1e-14;
                        return o.abs(u) < a ? r.studentt.pdf(i, l) : o.abs(i) < a ? o.exp(r.gammaln((l + 1) / 2) - u * u / 2 - .5 * o.log(o.PI * l) - r.gammaln(l / 2)) : l / i * (r.noncentralt.cdf(i * o.sqrt(1 + 2 / l), l + 2, u) - r.noncentralt.cdf(i, l, u))
                    },
                    cdf: function(i, l, u) {
                        var a = 1e-14
                          , p = 200;
                        if (o.abs(u) < a)
                            return r.studentt.cdf(i, l);
                        var d = !1;
                        i < 0 && (d = !0,
                        u = -u);
                        for (var m = r.normal.cdf(-u, 0, 1), N = a + 1, T = N, v = i * i / (i * i + l), y = 0, I = o.exp(-u * u / 2), x = o.exp(-u * u / 2 - .5 * o.log(2) - r.gammaln(3 / 2)) * u; y < p || T > a || N > a; )
                            T = N,
                            y > 0 && (I *= u * u / (2 * y),
                            x *= u * u / (2 * (y + 1 / 2))),
                            N = I * r.beta.cdf(v, y + .5, l / 2) + x * r.beta.cdf(v, y + 1, l / 2),
                            m += .5 * N,
                            y++;
                        return d ? 1 - m : m
                    }
                }),
                r.extend(r.normal, {
                    pdf: function(i, l, u) {
                        return o.exp(-.5 * o.log(2 * o.PI) - o.log(u) - o.pow(i - l, 2) / (2 * u * u))
                    },
                    cdf: function(i, l, u) {
                        return .5 * (1 + r.erf((i - l) / o.sqrt(2 * u * u)))
                    },
                    inv: function(f, i, l) {
                        return -1.4142135623730951 * l * r.erfcinv(2 * f) + i
                    },
                    mean: function(f) {
                        return f
                    },
                    median: function(i) {
                        return i
                    },
                    mode: function(f) {
                        return f
                    },
                    sample: function(i, l) {
                        return r.randn() * l + i
                    },
                    variance: function(f, i) {
                        return i * i
                    }
                }),
                r.extend(r.pareto, {
                    pdf: function(i, l, u) {
                        return i < l ? 0 : u * o.pow(l, u) / o.pow(i, u + 1)
                    },
                    cdf: function(i, l, u) {
                        return i < l ? 0 : 1 - o.pow(l / i, u)
                    },
                    inv: function(i, l, u) {
                        return l / o.pow(1 - i, 1 / u)
                    },
                    mean: function(i, l) {
                        if (!(l <= 1))
                            return l * o.pow(i, l) / (l - 1)
                    },
                    median: function(i, l) {
                        return i * (l * o.SQRT2)
                    },
                    mode: function(i) {
                        return i
                    },
                    variance: function(f, i) {
                        if (!(i <= 2))
                            return f * f * i / (o.pow(i - 1, 2) * (i - 2))
                    }
                }),
                r.extend(r.studentt, {
                    pdf: function(i, l) {
                        return l = l > 1e100 ? 1e100 : l,
                        1 / (o.sqrt(l) * r.betafn(.5, l / 2)) * o.pow(1 + i * i / l, -((l + 1) / 2))
                    },
                    cdf: function(i, l) {
                        var u = l / 2;
                        return r.ibeta((i + o.sqrt(i * i + l)) / (2 * o.sqrt(i * i + l)), u, u)
                    },
                    inv: function(f, i) {
                        var l = r.ibetainv(2 * o.min(f, 1 - f), .5 * i, .5);
                        return l = o.sqrt(i * (1 - l) / l),
                        f > .5 ? l : -l
                    },
                    mean: function(i) {
                        return i > 1 ? 0 : void 0
                    },
                    median: function() {
                        return 0
                    },
                    mode: function() {
                        return 0
                    },
                    sample: function(i) {
                        return r.randn() * o.sqrt(i / (2 * r.randg(i / 2)))
                    },
                    variance: function(i) {
                        return i > 2 ? i / (i - 2) : i > 1 ? 1 / 0 : void 0
                    }
                }),
                r.extend(r.weibull, {
                    pdf: function(i, l, u) {
                        return i < 0 || l < 0 || u < 0 ? 0 : u / l * o.pow(i / l, u - 1) * o.exp(-o.pow(i / l, u))
                    },
                    cdf: function(i, l, u) {
                        return i < 0 ? 0 : 1 - o.exp(-o.pow(i / l, u))
                    },
                    inv: function(f, i, l) {
                        return i * o.pow(-o.log(1 - f), 1 / l)
                    },
                    mean: function(f, i) {
                        return f * r.gammafn(1 + 1 / i)
                    },
                    median: function(i, l) {
                        return i * o.pow(o.log(2), 1 / l)
                    },
                    mode: function(i, l) {
                        return l <= 1 ? 0 : i * o.pow((l - 1) / l, 1 / l)
                    },
                    sample: function(i, l) {
                        return i * o.pow(-o.log(r._random_fn()), 1 / l)
                    },
                    variance: function(i, l) {
                        return i * i * r.gammafn(1 + 2 / l) - o.pow(r.weibull.mean(i, l), 2)
                    }
                }),
                r.extend(r.uniform, {
                    pdf: function(i, l, u) {
                        return i < l || i > u ? 0 : 1 / (u - l)
                    },
                    cdf: function(i, l, u) {
                        return i < l ? 0 : i < u ? (i - l) / (u - l) : 1
                    },
                    inv: function(f, i, l) {
                        return i + f * (l - i)
                    },
                    mean: function(i, l) {
                        return .5 * (i + l)
                    },
                    median: function(i, l) {
                        return r.mean(i, l)
                    },
                    mode: function() {
                        throw new Error("mode is not yet implemented")
                    },
                    sample: function(i, l) {
                        return i / 2 + l / 2 + (l / 2 - i / 2) * (2 * r._random_fn() - 1)
                    },
                    variance: function(i, l) {
                        return o.pow(l - i, 2) / 12
                    }
                });
                function s(f, i, l, u) {
                    for (var a = 0, p = 1, d = 1, m = 1, N = 0, T = 0, v; o.abs((d - T) / d) > u; )
                        T = d,
                        v = -(i + N) * (i + l + N) * f / (i + 2 * N) / (i + 2 * N + 1),
                        a = d + v * a,
                        p = m + v * p,
                        N = N + 1,
                        v = N * (l - N) * f / (i + 2 * N - 1) / (i + 2 * N),
                        d = a + v * d,
                        m = p + v * m,
                        a = a / m,
                        p = p / m,
                        d = d / m,
                        m = 1;
                    return d / i
                }
                r.extend(r.binomial, {
                    pdf: function(i, l, u) {
                        return u === 0 || u === 1 ? l * u === i ? 1 : 0 : r.combination(l, i) * o.pow(u, i) * o.pow(1 - u, l - i)
                    },
                    cdf: function(i, l, u) {
                        var a, p = 1e-10;
                        if (i < 0)
                            return 0;
                        if (i >= l)
                            return 1;
                        if (u < 0 || u > 1 || l <= 0)
                            return NaN;
                        i = o.floor(i);
                        var d = u
                          , m = i + 1
                          , N = l - i
                          , T = m + N
                          , v = o.exp(r.gammaln(T) - r.gammaln(N) - r.gammaln(m) + m * o.log(d) + N * o.log(1 - d));
                        return d < (m + 1) / (T + 2) ? a = v * s(d, m, N, p) : a = 1 - v * s(1 - d, N, m, p),
                        o.round((1 - a) * (1 / p)) / (1 / p)
                    }
                }),
                r.extend(r.negbin, {
                    pdf: function(i, l, u) {
                        return i !== i >>> 0 ? !1 : i < 0 ? 0 : r.combination(i + l - 1, l - 1) * o.pow(1 - u, i) * o.pow(u, l)
                    },
                    cdf: function(i, l, u) {
                        var a = 0
                          , p = 0;
                        if (i < 0)
                            return 0;
                        for (; p <= i; p++)
                            a += r.negbin.pdf(p, l, u);
                        return a
                    }
                }),
                r.extend(r.hypgeom, {
                    pdf: function(i, l, u, a) {
                        if (i !== i | 0)
                            return !1;
                        if (i < 0 || i < u - (l - a))
                            return 0;
                        if (i > a || i > u)
                            return 0;
                        if (u * 2 > l)
                            return a * 2 > l ? r.hypgeom.pdf(l - u - a + i, l, l - u, l - a) : r.hypgeom.pdf(a - i, l, l - u, a);
                        if (a * 2 > l)
                            return r.hypgeom.pdf(u - i, l, u, l - a);
                        if (u < a)
                            return r.hypgeom.pdf(i, l, a, u);
                        for (var p = 1, d = 0, m = 0; m < i; m++) {
                            for (; p > 1 && d < a; )
                                p *= 1 - u / (l - d),
                                d++;
                            p *= (a - m) * (u - m) / ((m + 1) * (l - u - a + m + 1))
                        }
                        for (; d < a; d++)
                            p *= 1 - u / (l - d);
                        return o.min(1, o.max(0, p))
                    },
                    cdf: function(i, l, u, a) {
                        if (i < 0 || i < u - (l - a))
                            return 0;
                        if (i >= a || i >= u)
                            return 1;
                        if (u * 2 > l)
                            return a * 2 > l ? r.hypgeom.cdf(l - u - a + i, l, l - u, l - a) : 1 - r.hypgeom.cdf(a - i - 1, l, l - u, a);
                        if (a * 2 > l)
                            return 1 - r.hypgeom.cdf(u - i - 1, l, u, l - a);
                        if (u < a)
                            return r.hypgeom.cdf(i, l, a, u);
                        for (var p = 1, d = 1, m = 0, N = 0; N < i; N++) {
                            for (; p > 1 && m < a; ) {
                                var T = 1 - u / (l - m);
                                d *= T,
                                p *= T,
                                m++
                            }
                            d *= (a - N) * (u - N) / ((N + 1) * (l - u - a + N + 1)),
                            p += d
                        }
                        for (; m < a; m++)
                            p *= 1 - u / (l - m);
                        return o.min(1, o.max(0, p))
                    }
                }),
                r.extend(r.poisson, {
                    pdf: function(i, l) {
                        return l < 0 || i % 1 !== 0 || i < 0 ? 0 : o.pow(l, i) * o.exp(-l) / r.factorial(i)
                    },
                    cdf: function(i, l) {
                        var u = []
                          , a = 0;
                        if (i < 0)
                            return 0;
                        for (; a <= i; a++)
                            u.push(r.poisson.pdf(a, l));
                        return r.sum(u)
                    },
                    mean: function(f) {
                        return f
                    },
                    variance: function(f) {
                        return f
                    },
                    sampleSmall: function(i) {
                        var l = 1
                          , u = 0
                          , a = o.exp(-i);
                        do
                            u++,
                            l *= r._random_fn();
                        while (l > a);
                        return u - 1
                    },
                    sampleLarge: function(i) {
                        var l = i, u, a, p, d, m, N, T, v, y, I;
                        for (d = o.sqrt(l),
                        m = o.log(l),
                        T = .931 + 2.53 * d,
                        N = -.059 + .02483 * T,
                        v = 1.1239 + 1.1328 / (T - 3.4),
                        y = .9277 - 3.6224 / (T - 2); ; ) {
                            if (a = o.random() - .5,
                            p = o.random(),
                            I = .5 - o.abs(a),
                            u = o.floor((2 * N / I + T) * a + l + .43),
                            I >= .07 && p <= y)
                                return u;
                            if (!(u < 0 || I < .013 && p > I) && o.log(p) + o.log(v) - o.log(N / (I * I) + T) <= -l + u * m - r.loggam(u + 1))
                                return u
                        }
                    },
                    sample: function(i) {
                        return i < 10 ? this.sampleSmall(i) : this.sampleLarge(i)
                    }
                }),
                r.extend(r.triangular, {
                    pdf: function(i, l, u, a) {
                        return u <= l || a < l || a > u ? NaN : i < l || i > u ? 0 : i < a ? 2 * (i - l) / ((u - l) * (a - l)) : i === a ? 2 / (u - l) : 2 * (u - i) / ((u - l) * (u - a))
                    },
                    cdf: function(i, l, u, a) {
                        return u <= l || a < l || a > u ? NaN : i <= l ? 0 : i >= u ? 1 : i <= a ? o.pow(i - l, 2) / ((u - l) * (a - l)) : 1 - o.pow(u - i, 2) / ((u - l) * (u - a))
                    },
                    inv: function(i, l, u, a) {
                        return u <= l || a < l || a > u ? NaN : i <= (a - l) / (u - l) ? l + (u - l) * o.sqrt(i * ((a - l) / (u - l))) : l + (u - l) * (1 - o.sqrt((1 - i) * (1 - (a - l) / (u - l))))
                    },
                    mean: function(i, l, u) {
                        return (i + l + u) / 3
                    },
                    median: function(i, l, u) {
                        if (u <= (i + l) / 2)
                            return l - o.sqrt((l - i) * (l - u)) / o.sqrt(2);
                        if (u > (i + l) / 2)
                            return i + o.sqrt((l - i) * (u - i)) / o.sqrt(2)
                    },
                    mode: function(i, l, u) {
                        return u
                    },
                    sample: function(i, l, u) {
                        var a = r._random_fn();
                        return a < (u - i) / (l - i) ? i + o.sqrt(a * (l - i) * (u - i)) : l - o.sqrt((1 - a) * (l - i) * (l - u))
                    },
                    variance: function(i, l, u) {
                        return (i * i + l * l + u * u - i * l - i * u - l * u) / 18
                    }
                }),
                r.extend(r.arcsine, {
                    pdf: function(i, l, u) {
                        return u <= l ? NaN : i <= l || i >= u ? 0 : 2 / o.PI * o.pow(o.pow(u - l, 2) - o.pow(2 * i - l - u, 2), -.5)
                    },
                    cdf: function(i, l, u) {
                        return i < l ? 0 : i < u ? 2 / o.PI * o.asin(o.sqrt((i - l) / (u - l))) : 1
                    },
                    inv: function(f, i, l) {
                        return i + (.5 - .5 * o.cos(o.PI * f)) * (l - i)
                    },
                    mean: function(i, l) {
                        return l <= i ? NaN : (i + l) / 2
                    },
                    median: function(i, l) {
                        return l <= i ? NaN : (i + l) / 2
                    },
                    mode: function() {
                        throw new Error("mode is not yet implemented")
                    },
                    sample: function(i, l) {
                        return (i + l) / 2 + (l - i) / 2 * o.sin(2 * o.PI * r.uniform.sample(0, 1))
                    },
                    variance: function(i, l) {
                        return l <= i ? NaN : o.pow(l - i, 2) / 8
                    }
                });
                function c(f) {
                    return f / o.abs(f)
                }
                r.extend(r.laplace, {
                    pdf: function(i, l, u) {
                        return u <= 0 ? 0 : o.exp(-o.abs(i - l) / u) / (2 * u)
                    },
                    cdf: function(i, l, u) {
                        return u <= 0 ? 0 : i < l ? .5 * o.exp((i - l) / u) : 1 - .5 * o.exp(-(i - l) / u)
                    },
                    mean: function(f) {
                        return f
                    },
                    median: function(f) {
                        return f
                    },
                    mode: function(f) {
                        return f
                    },
                    variance: function(f, i) {
                        return 2 * i * i
                    },
                    sample: function(i, l) {
                        var u = r._random_fn() - .5;
                        return i - l * c(u) * o.log(1 - 2 * o.abs(u))
                    }
                });
                function g(f, i, l) {
                    var u = 12
                      , a = 6
                      , p = -30
                      , d = -50
                      , m = 60
                      , N = 8
                      , T = 3
                      , v = 2
                      , y = 3
                      , I = [.9815606342467192, .9041172563704749, .7699026741943047, .5873179542866175, .3678314989981802, .1252334085114689]
                      , x = [.04717533638651183, .10693932599531843, .16007832854334622, .20316742672306592, .2334925365383548, .24914704581340277]
                      , O = f * .5;
                    if (O >= N)
                        return 1;
                    var C = 2 * r.normal.cdf(O, 0, 1, 1, 0) - 1;
                    C >= o.exp(d / l) ? C = o.pow(C, l) : C = 0;
                    var M;
                    f > T ? M = v : M = y;
                    for (var L = O, X = (N - O) / M, Y = L + X, z = 0, Q = l - 1, Ne = 1; Ne <= M; Ne++) {
                        for (var Ie = 0, Z = .5 * (Y + L), K = .5 * (Y - L), ge = 1; ge <= u; ge++) {
                            var oe, fe;
                            a < ge ? (oe = u - ge + 1,
                            fe = I[oe - 1]) : (oe = ge,
                            fe = -I[oe - 1]);
                            var ie = K * fe
                              , F = Z + ie
                              , H = F * F;
                            if (H > m)
                                break;
                            var G = 2 * r.normal.cdf(F, 0, 1, 1, 0)
                              , _ = 2 * r.normal.cdf(F, f, 1, 1, 0)
                              , se = G * .5 - _ * .5;
                            se >= o.exp(p / Q) && (se = x[oe - 1] * o.exp(-(.5 * H)) * o.pow(se, Q),
                            Ie += se)
                        }
                        Ie *= 2 * K * l / o.sqrt(2 * o.PI),
                        z += Ie,
                        L = Y,
                        Y += X
                    }
                    return C += z,
                    C <= o.exp(p / i) ? 0 : (C = o.pow(C, i),
                    C >= 1 ? 1 : C)
                }
                function h(f, i, l) {
                    var u = .322232421088
                      , a = .099348462606
                      , p = -1
                      , d = .588581570495
                      , m = -.342242088547
                      , N = .531103462366
                      , T = -.204231210125
                      , v = .10353775285
                      , y = -453642210148e-16
                      , I = .0038560700634
                      , x = .8832
                      , O = .2368
                      , C = 1.208
                      , M = 1.4142
                      , L = 120
                      , X = .5 - .5 * f
                      , Y = o.sqrt(o.log(1 / (X * X)))
                      , z = Y + ((((Y * y + T) * Y + m) * Y + p) * Y + u) / ((((Y * I + v) * Y + N) * Y + d) * Y + a);
                    l < L && (z += (z * z * z + z) / l / 4);
                    var Q = x - O * z;
                    return l < L && (Q += -1.214 / l + C * z / l),
                    z * (Q * o.log(i - 1) + M)
                }
                r.extend(r.tukey, {
                    cdf: function(i, l, u) {
                        var a = 1
                          , p = l
                          , d = 16
                          , m = 8
                          , N = -30
                          , T = 1e-14
                          , v = 100
                          , y = 800
                          , I = 5e3
                          , x = 25e3
                          , O = 1
                          , C = .5
                          , M = .25
                          , L = .125
                          , X = [.9894009349916499, .9445750230732326, .8656312023878318, .755404408355003, .6178762444026438, .45801677765722737, .2816035507792589, .09501250983763744]
                          , Y = [.027152459411754096, .062253523938647894, .09515851168249279, .12462897125553388, .14959598881657674, .16915651939500254, .18260341504492358, .1894506104550685];
                        if (i <= 0)
                            return 0;
                        if (u < 2 || a < 1 || p < 2)
                            return NaN;
                        if (!Number.isFinite(i))
                            return 1;
                        if (u > x)
                            return g(i, a, p);
                        var z = u * .5, Q = z * o.log(u) - u * o.log(2) - r.gammaln(z), Ne = z - 1, Ie = u * .25, Z;
                        u <= v ? Z = O : u <= y ? Z = C : u <= I ? Z = M : Z = L,
                        Q += o.log(Z);
                        for (var K = 0, ge = 1; ge <= 50; ge++) {
                            for (var oe = 0, fe = (2 * ge - 1) * Z, ie = 1; ie <= d; ie++) {
                                var F, H;
                                m < ie ? (F = ie - m - 1,
                                H = Q + Ne * o.log(fe + X[F] * Z) - (X[F] * Z + fe) * Ie) : (F = ie - 1,
                                H = Q + Ne * o.log(fe - X[F] * Z) + (X[F] * Z - fe) * Ie);
                                var G;
                                if (H >= N) {
                                    m < ie ? G = i * o.sqrt((X[F] * Z + fe) * .5) : G = i * o.sqrt((-(X[F] * Z) + fe) * .5);
                                    var _ = g(G, a, p)
                                      , se = _ * Y[F] * o.exp(H);
                                    oe += se
                                }
                            }
                            if (ge * Z >= 1 && oe <= T)
                                break;
                            K += oe
                        }
                        if (oe > T)
                            throw new Error("tukey.cdf failed to converge");
                        return K > 1 && (K = 1),
                        K
                    },
                    inv: function(f, i, l) {
                        var u = 1
                          , a = i
                          , p = 1e-4
                          , d = 50;
                        if (l < 2 || u < 1 || a < 2)
                            return NaN;
                        if (f < 0 || f > 1)
                            return NaN;
                        if (f === 0)
                            return 0;
                        if (f === 1)
                            return 1 / 0;
                        var m = h(f, a, l), N = r.tukey.cdf(m, i, l) - f, T;
                        N > 0 ? T = o.max(0, m - 1) : T = m + 1;
                        for (var v = r.tukey.cdf(T, i, l) - f, y, I = 1; I < d; I++) {
                            y = T - v * (T - m) / (v - N),
                            N = v,
                            m = T,
                            y < 0 && (y = 0,
                            v = -f),
                            v = r.tukey.cdf(y, i, l) - f,
                            T = y;
                            var x = o.abs(T - m);
                            if (x < p)
                                return y
                        }
                        throw new Error("tukey.inv failed to converge")
                    }
                })
            }(t, Math),
            function(r, o) {
                var s = Array.prototype.push
                  , c = r.utils.isArray;
                function g(h) {
                    return c(h) || h instanceof r
                }
                r.extend({
                    add: function(f, i) {
                        return g(i) ? (g(i[0]) || (i = [i]),
                        r.map(f, function(l, u, a) {
                            return l + i[u][a]
                        })) : r.map(f, function(l) {
                            return l + i
                        })
                    },
                    subtract: function(f, i) {
                        return g(i) ? (g(i[0]) || (i = [i]),
                        r.map(f, function(l, u, a) {
                            return l - i[u][a] || 0
                        })) : r.map(f, function(l) {
                            return l - i
                        })
                    },
                    divide: function(f, i) {
                        return g(i) ? (g(i[0]) || (i = [i]),
                        r.multiply(f, r.inv(i))) : r.map(f, function(l) {
                            return l / i
                        })
                    },
                    multiply: function(f, i) {
                        var l, u, a, p, d, m, N, T;
                        if (f.length === void 0 && i.length === void 0)
                            return f * i;
                        if (d = f.length,
                        m = f[0].length,
                        N = r.zeros(d, a = g(i) ? i[0].length : m),
                        T = 0,
                        g(i)) {
                            for (; T < a; T++)
                                for (l = 0; l < d; l++) {
                                    for (p = 0,
                                    u = 0; u < m; u++)
                                        p += f[l][u] * i[u][T];
                                    N[l][T] = p
                                }
                            return d === 1 && T === 1 ? N[0][0] : N
                        }
                        return r.map(f, function(v) {
                            return v * i
                        })
                    },
                    outer: function(f, i) {
                        return r.multiply(f.map(function(l) {
                            return [l]
                        }), [i])
                    },
                    dot: function(f, i) {
                        g(f[0]) || (f = [f]),
                        g(i[0]) || (i = [i]);
                        for (var l = f[0].length === 1 && f.length !== 1 ? r.transpose(f) : f, u = i[0].length === 1 && i.length !== 1 ? r.transpose(i) : i, a = [], p = 0, d = l.length, m = l[0].length, N, T; p < d; p++) {
                            for (a[p] = [],
                            N = 0,
                            T = 0; T < m; T++)
                                N += l[p][T] * u[p][T];
                            a[p] = N
                        }
                        return a.length === 1 ? a[0] : a
                    },
                    pow: function(f, i) {
                        return r.map(f, function(l) {
                            return o.pow(l, i)
                        })
                    },
                    exp: function(f) {
                        return r.map(f, function(i) {
                            return o.exp(i)
                        })
                    },
                    log: function(f) {
                        return r.map(f, function(i) {
                            return o.log(i)
                        })
                    },
                    abs: function(f) {
                        return r.map(f, function(i) {
                            return o.abs(i)
                        })
                    },
                    norm: function(f, i) {
                        var l = 0
                          , u = 0;
                        for (isNaN(i) && (i = 2),
                        g(f[0]) && (f = f[0]); u < f.length; u++)
                            l += o.pow(o.abs(f[u]), i);
                        return o.pow(l, 1 / i)
                    },
                    angle: function(f, i) {
                        return o.acos(r.dot(f, i) / (r.norm(f) * r.norm(i)))
                    },
                    aug: function(f, i) {
                        var l = [], u;
                        for (u = 0; u < f.length; u++)
                            l.push(f[u].slice());
                        for (u = 0; u < l.length; u++)
                            s.apply(l[u], i[u]);
                        return l
                    },
                    inv: function(f) {
                        for (var i = f.length, l = f[0].length, u = r.identity(i, l), a = r.gauss_jordan(f, u), p = [], d = 0, m; d < i; d++)
                            for (p[d] = [],
                            m = l; m < a[0].length; m++)
                                p[d][m - l] = a[d][m];
                        return p
                    },
                    det: function h(f) {
                        if (f.length === 2)
                            return f[0][0] * f[1][1] - f[0][1] * f[1][0];
                        for (var i = 0, l = 0; l < f.length; l++) {
                            for (var u = [], a = 1; a < f.length; a++) {
                                u[a - 1] = [];
                                for (var p = 0; p < f.length; p++)
                                    p < l ? u[a - 1][p] = f[a][p] : p > l && (u[a - 1][p - 1] = f[a][p])
                            }
                            var d = l % 2 ? -1 : 1;
                            i += h(u) * f[0][l] * d
                        }
                        return i
                    },
                    gauss_elimination: function(f, i) {
                        var l = 0, u = 0, a = f.length, p = f[0].length, d = 1, m = 0, N = [], T, v, y, I;
                        for (f = r.aug(f, i),
                        T = f[0].length,
                        l = 0; l < a; l++) {
                            for (v = f[l][l],
                            u = l,
                            I = l + 1; I < p; I++)
                                v < o.abs(f[I][l]) && (v = f[I][l],
                                u = I);
                            if (u != l)
                                for (I = 0; I < T; I++)
                                    y = f[l][I],
                                    f[l][I] = f[u][I],
                                    f[u][I] = y;
                            for (u = l + 1; u < a; u++)
                                for (d = f[u][l] / f[l][l],
                                I = l; I < T; I++)
                                    f[u][I] = f[u][I] - d * f[l][I]
                        }
                        for (l = a - 1; l >= 0; l--) {
                            for (m = 0,
                            u = l + 1; u <= a - 1; u++)
                                m = m + N[u] * f[l][u];
                            N[l] = (f[l][T - 1] - m) / f[l][l]
                        }
                        return N
                    },
                    gauss_jordan: function(f, i) {
                        var l = r.aug(f, i), u = l.length, a = l[0].length, p = 0, d, m, N;
                        for (m = 0; m < u; m++) {
                            var T = m;
                            for (N = m + 1; N < u; N++)
                                o.abs(l[N][m]) > o.abs(l[T][m]) && (T = N);
                            var v = l[m];
                            for (l[m] = l[T],
                            l[T] = v,
                            N = m + 1; N < u; N++)
                                for (p = l[N][m] / l[m][m],
                                d = m; d < a; d++)
                                    l[N][d] -= l[m][d] * p
                        }
                        for (m = u - 1; m >= 0; m--) {
                            for (p = l[m][m],
                            N = 0; N < m; N++)
                                for (d = a - 1; d > m - 1; d--)
                                    l[N][d] -= l[m][d] * l[N][m] / p;
                            for (l[m][m] /= p,
                            d = u; d < a; d++)
                                l[m][d] /= p
                        }
                        return l
                    },
                    triaUpSolve: function(f, i) {
                        var l = f[0].length, u = r.zeros(1, l)[0], a, p = !1;
                        return i[0].length != null && (i = i.map(function(d) {
                            return d[0]
                        }),
                        p = !0),
                        r.arange(l - 1, -1, -1).forEach(function(d) {
                            a = r.arange(d + 1, l).map(function(m) {
                                return u[m] * f[d][m]
                            }),
                            u[d] = (i[d] - r.sum(a)) / f[d][d]
                        }),
                        p ? u.map(function(d) {
                            return [d]
                        }) : u
                    },
                    triaLowSolve: function(f, i) {
                        var l = f[0].length, u = r.zeros(1, l)[0], a, p = !1;
                        return i[0].length != null && (i = i.map(function(d) {
                            return d[0]
                        }),
                        p = !0),
                        r.arange(l).forEach(function(d) {
                            a = r.arange(d).map(function(m) {
                                return f[d][m] * u[m]
                            }),
                            u[d] = (i[d] - r.sum(a)) / f[d][d]
                        }),
                        p ? u.map(function(d) {
                            return [d]
                        }) : u
                    },
                    lu: function(f) {
                        var i = f.length, l = r.identity(i), u = r.zeros(f.length, f[0].length), a;
                        return r.arange(i).forEach(function(p) {
                            u[0][p] = f[0][p]
                        }),
                        r.arange(1, i).forEach(function(p) {
                            r.arange(p).forEach(function(d) {
                                a = r.arange(d).map(function(m) {
                                    return l[p][m] * u[m][d]
                                }),
                                l[p][d] = (f[p][d] - r.sum(a)) / u[d][d]
                            }),
                            r.arange(p, i).forEach(function(d) {
                                a = r.arange(p).map(function(m) {
                                    return l[p][m] * u[m][d]
                                }),
                                u[p][d] = f[a.length][d] - r.sum(a)
                            })
                        }),
                        [l, u]
                    },
                    cholesky: function(f) {
                        var i = f.length, l = r.zeros(f.length, f[0].length), u;
                        return r.arange(i).forEach(function(a) {
                            u = r.arange(a).map(function(p) {
                                return o.pow(l[a][p], 2)
                            }),
                            l[a][a] = o.sqrt(f[a][a] - r.sum(u)),
                            r.arange(a + 1, i).forEach(function(p) {
                                u = r.arange(a).map(function(d) {
                                    return l[a][d] * l[p][d]
                                }),
                                l[p][a] = (f[a][p] - r.sum(u)) / l[a][a]
                            })
                        }),
                        l
                    },
                    gauss_jacobi: function(f, i, l, u) {
                        for (var a = 0, p = 0, d = f.length, m = [], N = [], T = [], v, y, I, x; a < d; a++)
                            for (m[a] = [],
                            N[a] = [],
                            T[a] = [],
                            p = 0; p < d; p++)
                                a > p ? (m[a][p] = f[a][p],
                                N[a][p] = T[a][p] = 0) : a < p ? (N[a][p] = f[a][p],
                                m[a][p] = T[a][p] = 0) : (T[a][p] = f[a][p],
                                m[a][p] = N[a][p] = 0);
                        for (I = r.multiply(r.multiply(r.inv(T), r.add(m, N)), -1),
                        y = r.multiply(r.inv(T), i),
                        v = l,
                        x = r.add(r.multiply(I, l), y),
                        a = 2; o.abs(r.norm(r.subtract(x, v))) > u; )
                            v = x,
                            x = r.add(r.multiply(I, v), y),
                            a++;
                        return x
                    },
                    gauss_seidel: function(f, i, l, u) {
                        for (var a = 0, p = f.length, d = [], m = [], N = [], T, v, y, I, x; a < p; a++)
                            for (d[a] = [],
                            m[a] = [],
                            N[a] = [],
                            T = 0; T < p; T++)
                                a > T ? (d[a][T] = f[a][T],
                                m[a][T] = N[a][T] = 0) : a < T ? (m[a][T] = f[a][T],
                                d[a][T] = N[a][T] = 0) : (N[a][T] = f[a][T],
                                d[a][T] = m[a][T] = 0);
                        for (I = r.multiply(r.multiply(r.inv(r.add(N, d)), m), -1),
                        y = r.multiply(r.inv(r.add(N, d)), i),
                        v = l,
                        x = r.add(r.multiply(I, l), y),
                        a = 2; o.abs(r.norm(r.subtract(x, v))) > u; )
                            v = x,
                            x = r.add(r.multiply(I, v), y),
                            a = a + 1;
                        return x
                    },
                    SOR: function(f, i, l, u, a) {
                        for (var p = 0, d = f.length, m = [], N = [], T = [], v, y, I, x, O; p < d; p++)
                            for (m[p] = [],
                            N[p] = [],
                            T[p] = [],
                            v = 0; v < d; v++)
                                p > v ? (m[p][v] = f[p][v],
                                N[p][v] = T[p][v] = 0) : p < v ? (N[p][v] = f[p][v],
                                m[p][v] = T[p][v] = 0) : (T[p][v] = f[p][v],
                                m[p][v] = N[p][v] = 0);
                        for (x = r.multiply(r.inv(r.add(T, r.multiply(m, a))), r.subtract(r.multiply(T, 1 - a), r.multiply(N, a))),
                        I = r.multiply(r.multiply(r.inv(r.add(T, r.multiply(m, a))), i), a),
                        y = l,
                        O = r.add(r.multiply(x, l), I),
                        p = 2; o.abs(r.norm(r.subtract(O, y))) > u; )
                            y = O,
                            O = r.add(r.multiply(x, y), I),
                            p++;
                        return O
                    },
                    householder: function(f) {
                        for (var i = f.length, l = f[0].length, u = 0, a = [], p = [], d, m, N, T, v; u < i - 1; u++) {
                            for (d = 0,
                            T = u + 1; T < l; T++)
                                d += f[T][u] * f[T][u];
                            for (v = f[u + 1][u] > 0 ? -1 : 1,
                            d = v * o.sqrt(d),
                            m = o.sqrt((d * d - f[u + 1][u] * d) / 2),
                            a = r.zeros(i, 1),
                            a[u + 1][0] = (f[u + 1][u] - d) / (2 * m),
                            N = u + 2; N < i; N++)
                                a[N][0] = f[N][u] / (2 * m);
                            p = r.subtract(r.identity(i, l), r.multiply(r.multiply(a, r.transpose(a)), 2)),
                            f = r.multiply(p, r.multiply(f, p))
                        }
                        return f
                    },
                    QR: function() {
                        var h = r.sum
                          , f = r.arange;
                        function i(l) {
                            var u = l.length
                              , a = l[0].length
                              , p = r.zeros(a, a);
                            l = r.copy(l);
                            var d, m, N;
                            for (m = 0; m < a; m++) {
                                for (p[m][m] = o.sqrt(h(f(u).map(function(T) {
                                    return l[T][m] * l[T][m]
                                }))),
                                d = 0; d < u; d++)
                                    l[d][m] = l[d][m] / p[m][m];
                                for (N = m + 1; N < a; N++)
                                    for (p[m][N] = h(f(u).map(function(T) {
                                        return l[T][m] * l[T][N]
                                    })),
                                    d = 0; d < u; d++)
                                        l[d][N] = l[d][N] - l[d][m] * p[m][N]
                            }
                            return [l, p]
                        }
                        return i
                    }(),
                    lstsq: function() {
                        function h(i) {
                            i = r.copy(i);
                            var l = i.length
                              , u = r.identity(l);
                            return r.arange(l - 1, -1, -1).forEach(function(a) {
                                r.sliceAssign(u, {
                                    row: a
                                }, r.divide(r.slice(u, {
                                    row: a
                                }), i[a][a])),
                                r.sliceAssign(i, {
                                    row: a
                                }, r.divide(r.slice(i, {
                                    row: a
                                }), i[a][a])),
                                r.arange(a).forEach(function(p) {
                                    var d = r.multiply(i[p][a], -1)
                                      , m = r.slice(i, {
                                        row: p
                                    })
                                      , N = r.multiply(r.slice(i, {
                                        row: a
                                    }), d);
                                    r.sliceAssign(i, {
                                        row: p
                                    }, r.add(m, N));
                                    var T = r.slice(u, {
                                        row: p
                                    })
                                      , v = r.multiply(r.slice(u, {
                                        row: a
                                    }), d);
                                    r.sliceAssign(u, {
                                        row: p
                                    }, r.add(T, v))
                                })
                            }),
                            u
                        }
                        function f(i, l) {
                            var u = !1;
                            l[0].length === void 0 && (l = l.map(function(x) {
                                return [x]
                            }),
                            u = !0);
                            var a = r.QR(i)
                              , p = a[0]
                              , d = a[1]
                              , m = i[0].length
                              , N = r.slice(p, {
                                col: {
                                    end: m
                                }
                            })
                              , T = r.slice(d, {
                                row: {
                                    end: m
                                }
                            })
                              , v = h(T)
                              , y = r.transpose(N);
                            y[0].length === void 0 && (y = [y]);
                            var I = r.multiply(r.multiply(v, y), l);
                            return I.length === void 0 && (I = [[I]]),
                            u ? I.map(function(x) {
                                return x[0]
                            }) : I
                        }
                        return f
                    }(),
                    jacobi: function(f) {
                        for (var i = 1, l = f.length, u = r.identity(l, l), a = [], p, d, m, N, T, v, y, I; i === 1; ) {
                            for (v = f[0][1],
                            N = 0,
                            T = 1,
                            d = 0; d < l; d++)
                                for (m = 0; m < l; m++)
                                    d != m && v < o.abs(f[d][m]) && (v = o.abs(f[d][m]),
                                    N = d,
                                    T = m);
                            for (f[N][N] === f[T][T] ? y = f[N][T] > 0 ? o.PI / 4 : -o.PI / 4 : y = o.atan(2 * f[N][T] / (f[N][N] - f[T][T])) / 2,
                            I = r.identity(l, l),
                            I[N][N] = o.cos(y),
                            I[N][T] = -o.sin(y),
                            I[T][N] = o.sin(y),
                            I[T][T] = o.cos(y),
                            u = r.multiply(u, I),
                            p = r.multiply(r.multiply(r.inv(I), f), I),
                            f = p,
                            i = 0,
                            d = 1; d < l; d++)
                                for (m = 1; m < l; m++)
                                    d != m && o.abs(f[d][m]) > .001 && (i = 1)
                        }
                        for (d = 0; d < l; d++)
                            a.push(f[d][d]);
                        return [u, a]
                    },
                    rungekutta: function(f, i, l, u, a, p) {
                        var d, m, N, T, v;
                        if (p === 2)
                            for (; u <= l; )
                                d = i * f(u, a),
                                m = i * f(u + i, a + d),
                                N = a + (d + m) / 2,
                                a = N,
                                u = u + i;
                        if (p === 4)
                            for (; u <= l; )
                                d = i * f(u, a),
                                m = i * f(u + i / 2, a + d / 2),
                                T = i * f(u + i / 2, a + m / 2),
                                v = i * f(u + i, a + T),
                                N = a + (d + 2 * m + 2 * T + v) / 6,
                                a = N,
                                u = u + i;
                        return a
                    },
                    romberg: function(f, i, l, u) {
                        for (var a = 0, p = (l - i) / 2, d = [], m = [], N = [], T, v, y, I, x; a < u / 2; ) {
                            for (x = f(i),
                            y = i,
                            I = 0; y <= l; y = y + p,
                            I++)
                                d[I] = y;
                            for (T = d.length,
                            y = 1; y < T - 1; y++)
                                x += (y % 2 !== 0 ? 4 : 2) * f(d[y]);
                            x = p / 3 * (x + f(l)),
                            N[a] = x,
                            p /= 2,
                            a++
                        }
                        for (v = N.length,
                        T = 1; v !== 1; ) {
                            for (y = 0; y < v - 1; y++)
                                m[y] = (o.pow(4, T) * N[y + 1] - N[y]) / (o.pow(4, T) - 1);
                            v = m.length,
                            N = m,
                            m = [],
                            T++
                        }
                        return N
                    },
                    richardson: function(f, i, l, u) {
                        function a(O, C) {
                            for (var M = 0, L = O.length, X; M < L; M++)
                                O[M] === C && (X = M);
                            return X
                        }
                        for (var p = o.abs(l - f[a(f, l) + 1]), d = 0, m = [], N = [], T, v, y, I, x; u >= p; )
                            T = a(f, l + u),
                            v = a(f, l),
                            m[d] = (i[T] - 2 * i[v] + i[2 * v - T]) / (u * u),
                            u /= 2,
                            d++;
                        for (I = m.length,
                        y = 1; I != 1; ) {
                            for (x = 0; x < I - 1; x++)
                                N[x] = (o.pow(4, y) * m[x + 1] - m[x]) / (o.pow(4, y) - 1);
                            I = N.length,
                            m = N,
                            N = [],
                            y++
                        }
                        return m
                    },
                    simpson: function(f, i, l, u) {
                        for (var a = (l - i) / u, p = f(i), d = [], m = i, N = 0, T = 1, v; m <= l; m = m + a,
                        N++)
                            d[N] = m;
                        for (v = d.length; T < v - 1; T++)
                            p += (T % 2 !== 0 ? 4 : 2) * f(d[T]);
                        return a / 3 * (p + f(l))
                    },
                    hermite: function(f, i, l, u) {
                        for (var a = f.length, p = 0, d = 0, m = [], N = [], T = [], v = [], y; d < a; d++) {
                            for (m[d] = 1,
                            y = 0; y < a; y++)
                                d != y && (m[d] *= (u - f[y]) / (f[d] - f[y]));
                            for (N[d] = 0,
                            y = 0; y < a; y++)
                                d != y && (N[d] += 1 / (f[d] - f[y]));
                            T[d] = (1 - 2 * (u - f[d]) * N[d]) * (m[d] * m[d]),
                            v[d] = (u - f[d]) * (m[d] * m[d]),
                            p += T[d] * i[d] + v[d] * l[d]
                        }
                        return p
                    },
                    lagrange: function(f, i, l) {
                        for (var u = 0, a = 0, p, d, m = f.length; a < m; a++) {
                            for (d = i[a],
                            p = 0; p < m; p++)
                                a != p && (d *= (l - f[p]) / (f[a] - f[p]));
                            u += d
                        }
                        return u
                    },
                    cubic_spline: function(f, i, l) {
                        for (var u = f.length, a = 0, p, d = [], m = [], N = [], T = [], v = [], y = [], I = []; a < u - 1; a++)
                            v[a] = f[a + 1] - f[a];
                        for (N[0] = 0,
                        a = 1; a < u - 1; a++)
                            N[a] = 3 / v[a] * (i[a + 1] - i[a]) - 3 / v[a - 1] * (i[a] - i[a - 1]);
                        for (a = 1; a < u - 1; a++)
                            d[a] = [],
                            m[a] = [],
                            d[a][a - 1] = v[a - 1],
                            d[a][a] = 2 * (v[a - 1] + v[a]),
                            d[a][a + 1] = v[a],
                            m[a][0] = N[a];
                        for (T = r.multiply(r.inv(d), m),
                        p = 0; p < u - 1; p++)
                            y[p] = (i[p + 1] - i[p]) / v[p] - v[p] * (T[p + 1][0] + 2 * T[p][0]) / 3,
                            I[p] = (T[p + 1][0] - T[p][0]) / (3 * v[p]);
                        for (p = 0; p < u && !(f[p] > l); p++)
                            ;
                        return p -= 1,
                        i[p] + (l - f[p]) * y[p] + r.sq(l - f[p]) * T[p] + (l - f[p]) * r.sq(l - f[p]) * I[p]
                    },
                    gauss_quadrature: function() {
                        throw new Error("gauss_quadrature not yet implemented")
                    },
                    PCA: function(f) {
                        var i = f.length, l = f[0].length, u = 0, a, p, d = [], m = [], N = [], T = [], v = [], y = [], I = [], x = [], O = [], C = [];
                        for (u = 0; u < i; u++)
                            d[u] = r.sum(f[u]) / l;
                        for (u = 0; u < l; u++)
                            for (I[u] = [],
                            a = 0; a < i; a++)
                                I[u][a] = f[a][u] - d[a];
                        for (I = r.transpose(I),
                        u = 0; u < i; u++)
                            for (x[u] = [],
                            a = 0; a < i; a++)
                                x[u][a] = r.dot([I[u]], [I[a]]) / (l - 1);
                        for (N = r.jacobi(x),
                        O = N[0],
                        m = N[1],
                        C = r.transpose(O),
                        u = 0; u < m.length; u++)
                            for (a = u; a < m.length; a++)
                                m[u] < m[a] && (p = m[u],
                                m[u] = m[a],
                                m[a] = p,
                                T = C[u],
                                C[u] = C[a],
                                C[a] = T);
                        for (y = r.transpose(I),
                        u = 0; u < i; u++)
                            for (v[u] = [],
                            a = 0; a < y.length; a++)
                                v[u][a] = r.dot([C[u]], [y[a]]);
                        return [f, m, C, v]
                    }
                }),
                function(h) {
                    for (var f = 0; f < h.length; f++)
                        (function(i) {
                            r.fn[i] = function(l, u) {
                                var a = this;
                                return u ? (setTimeout(function() {
                                    u.call(a, r.fn[i].call(a, l))
                                }, 15),
                                this) : typeof r[i](this, l) == "number" ? r[i](this, l) : r(r[i](this, l))
                            }
                        }
                        )(h[f])
                }("add divide multiply subtract dot pow exp log abs norm angle".split(" "))
            }(t, Math),
            function(r, o) {
                var s = [].slice
                  , c = r.utils.isNumber
                  , g = r.utils.isArray;
                r.extend({
                    zscore: function() {
                        var i = s.call(arguments);
                        return c(i[1]) ? (i[0] - i[1]) / i[2] : (i[0] - r.mean(i[1])) / r.stdev(i[1], i[2])
                    },
                    ztest: function() {
                        var i = s.call(arguments), l;
                        return g(i[1]) ? (l = r.zscore(i[0], i[1], i[3]),
                        i[2] === 1 ? r.normal.cdf(-o.abs(l), 0, 1) : r.normal.cdf(-o.abs(l), 0, 1) * 2) : i.length > 2 ? (l = r.zscore(i[0], i[1], i[2]),
                        i[3] === 1 ? r.normal.cdf(-o.abs(l), 0, 1) : r.normal.cdf(-o.abs(l), 0, 1) * 2) : (l = i[0],
                        i[1] === 1 ? r.normal.cdf(-o.abs(l), 0, 1) : r.normal.cdf(-o.abs(l), 0, 1) * 2)
                    }
                }),
                r.extend(r.fn, {
                    zscore: function(i, l) {
                        return (i - this.mean()) / this.stdev(l)
                    },
                    ztest: function(i, l, u) {
                        var a = o.abs(this.zscore(i, u));
                        return l === 1 ? r.normal.cdf(-a, 0, 1) : r.normal.cdf(-a, 0, 1) * 2
                    }
                }),
                r.extend({
                    tscore: function() {
                        var i = s.call(arguments);
                        return i.length === 4 ? (i[0] - i[1]) / (i[2] / o.sqrt(i[3])) : (i[0] - r.mean(i[1])) / (r.stdev(i[1], !0) / o.sqrt(i[1].length))
                    },
                    ttest: function() {
                        var i = s.call(arguments), l;
                        return i.length === 5 ? (l = o.abs(r.tscore(i[0], i[1], i[2], i[3])),
                        i[4] === 1 ? r.studentt.cdf(-l, i[3] - 1) : r.studentt.cdf(-l, i[3] - 1) * 2) : c(i[1]) ? (l = o.abs(i[0]),
                        i[2] == 1 ? r.studentt.cdf(-l, i[1] - 1) : r.studentt.cdf(-l, i[1] - 1) * 2) : (l = o.abs(r.tscore(i[0], i[1])),
                        i[2] == 1 ? r.studentt.cdf(-l, i[1].length - 1) : r.studentt.cdf(-l, i[1].length - 1) * 2)
                    }
                }),
                r.extend(r.fn, {
                    tscore: function(i) {
                        return (i - this.mean()) / (this.stdev(!0) / o.sqrt(this.cols()))
                    },
                    ttest: function(i, l) {
                        return l === 1 ? 1 - r.studentt.cdf(o.abs(this.tscore(i)), this.cols() - 1) : r.studentt.cdf(-o.abs(this.tscore(i)), this.cols() - 1) * 2
                    }
                }),
                r.extend({
                    anovafscore: function() {
                        var i = s.call(arguments), l, u, a, p, d, m, N, T;
                        if (i.length === 1) {
                            for (d = new Array(i[0].length),
                            N = 0; N < i[0].length; N++)
                                d[N] = i[0][N];
                            i = d
                        }
                        for (u = new Array,
                        N = 0; N < i.length; N++)
                            u = u.concat(i[N]);
                        for (a = r.mean(u),
                        l = 0,
                        N = 0; N < i.length; N++)
                            l = l + i[N].length * o.pow(r.mean(i[N]) - a, 2);
                        for (l /= i.length - 1,
                        m = 0,
                        N = 0; N < i.length; N++)
                            for (p = r.mean(i[N]),
                            T = 0; T < i[N].length; T++)
                                m += o.pow(i[N][T] - p, 2);
                        return m /= u.length - i.length,
                        l / m
                    },
                    anovaftest: function() {
                        var i = s.call(arguments), l, u, a, p;
                        if (c(i[0]))
                            return 1 - r.centralF.cdf(i[0], i[1], i[2]);
                        var d = r.anovafscore(i);
                        for (l = i.length - 1,
                        a = 0,
                        p = 0; p < i.length; p++)
                            a = a + i[p].length;
                        return u = a - l - 1,
                        1 - r.centralF.cdf(d, l, u)
                    },
                    ftest: function(i, l, u) {
                        return 1 - r.centralF.cdf(i, l, u)
                    }
                }),
                r.extend(r.fn, {
                    anovafscore: function() {
                        return r.anovafscore(this.toArray())
                    },
                    anovaftes: function() {
                        var i = 0, l;
                        for (l = 0; l < this.length; l++)
                            i = i + this[l].length;
                        return r.ftest(this.anovafscore(), this.length - 1, i - this.length)
                    }
                }),
                r.extend({
                    qscore: function() {
                        var i = s.call(arguments), l, u, a, p, d;
                        return c(i[0]) ? (l = i[0],
                        u = i[1],
                        a = i[2],
                        p = i[3],
                        d = i[4]) : (l = r.mean(i[0]),
                        u = r.mean(i[1]),
                        a = i[0].length,
                        p = i[1].length,
                        d = i[2]),
                        o.abs(l - u) / (d * o.sqrt((1 / a + 1 / p) / 2))
                    },
                    qtest: function() {
                        var i = s.call(arguments), l;
                        i.length === 3 ? (l = i[0],
                        i = i.slice(1)) : i.length === 7 ? (l = r.qscore(i[0], i[1], i[2], i[3], i[4]),
                        i = i.slice(5)) : (l = r.qscore(i[0], i[1], i[2]),
                        i = i.slice(3));
                        var u = i[0]
                          , a = i[1];
                        return 1 - r.tukey.cdf(l, a, u - a)
                    },
                    tukeyhsd: function(i) {
                        for (var l = r.pooledstdev(i), u = i.map(function(T) {
                            return r.mean(T)
                        }), a = i.reduce(function(T, v) {
                            return T + v.length
                        }, 0), p = [], d = 0; d < i.length; ++d)
                            for (var m = d + 1; m < i.length; ++m) {
                                var N = r.qtest(u[d], u[m], i[d].length, i[m].length, l, a, i.length);
                                p.push([[d, m], N])
                            }
                        return p
                    }
                }),
                r.extend({
                    normalci: function() {
                        var i = s.call(arguments), l = new Array(2), u;
                        return i.length === 4 ? u = o.abs(r.normal.inv(i[1] / 2, 0, 1) * i[2] / o.sqrt(i[3])) : u = o.abs(r.normal.inv(i[1] / 2, 0, 1) * r.stdev(i[2]) / o.sqrt(i[2].length)),
                        l[0] = i[0] - u,
                        l[1] = i[0] + u,
                        l
                    },
                    tci: function() {
                        var i = s.call(arguments), l = new Array(2), u;
                        return i.length === 4 ? u = o.abs(r.studentt.inv(i[1] / 2, i[3] - 1) * i[2] / o.sqrt(i[3])) : u = o.abs(r.studentt.inv(i[1] / 2, i[2].length - 1) * r.stdev(i[2], !0) / o.sqrt(i[2].length)),
                        l[0] = i[0] - u,
                        l[1] = i[0] + u,
                        l
                    },
                    significant: function(i, l) {
                        return i < l
                    }
                }),
                r.extend(r.fn, {
                    normalci: function(i, l) {
                        return r.normalci(i, l, this.toArray())
                    },
                    tci: function(i, l) {
                        return r.tci(i, l, this.toArray())
                    }
                });
                function h(f, i, l, u) {
                    if (f > 1 || l > 1 || f <= 0 || l <= 0)
                        throw new Error("Proportions should be greater than 0 and less than 1");
                    var a = (f * i + l * u) / (i + u)
                      , p = o.sqrt(a * (1 - a) * (1 / i + 1 / u));
                    return (f - l) / p
                }
                r.extend(r.fn, {
                    oneSidedDifferenceOfProportions: function(i, l, u, a) {
                        var p = h(i, l, u, a);
                        return r.ztest(p, 1)
                    },
                    twoSidedDifferenceOfProportions: function(i, l, u, a) {
                        var p = h(i, l, u, a);
                        return r.ztest(p, 2)
                    }
                })
            }(t, Math),
            t.models = function() {
                function r(h) {
                    var f = h[0].length
                      , i = t.arange(f).map(function(l) {
                        var u = t.arange(f).filter(function(a) {
                            return a !== l
                        });
                        return o(t.col(h, l).map(function(a) {
                            return a[0]
                        }), t.col(h, u))
                    });
                    return i
                }
                function o(h, f) {
                    var i = h.length
                      , l = f[0].length - 1
                      , u = i - l - 1
                      , a = t.lstsq(f, h)
                      , p = t.multiply(f, a.map(function(I) {
                        return [I]
                    })).map(function(I) {
                        return I[0]
                    })
                      , d = t.subtract(h, p)
                      , m = t.mean(h)
                      , N = t.sum(p.map(function(I) {
                        return Math.pow(I - m, 2)
                    }))
                      , T = t.sum(h.map(function(I, x) {
                        return Math.pow(I - p[x], 2)
                    }))
                      , v = N + T
                      , y = N / v;
                    return {
                        exog: f,
                        endog: h,
                        nobs: i,
                        df_model: l,
                        df_resid: u,
                        coef: a,
                        predict: p,
                        resid: d,
                        ybar: m,
                        SST: v,
                        SSE: N,
                        SSR: T,
                        R2: y
                    }
                }
                function s(h) {
                    var f = r(h.exog)
                      , i = Math.sqrt(h.SSR / h.df_resid)
                      , l = f.map(function(m) {
                        var N = m.SST
                          , T = m.R2;
                        return i / Math.sqrt(N * (1 - T))
                    })
                      , u = h.coef.map(function(m, N) {
                        return (m - 0) / l[N]
                    })
                      , a = u.map(function(m) {
                        var N = t.studentt.cdf(m, h.df_resid);
                        return (N > .5 ? 1 - N : N) * 2
                    })
                      , p = t.studentt.inv(.975, h.df_resid)
                      , d = h.coef.map(function(m, N) {
                        var T = p * l[N];
                        return [m - T, m + T]
                    });
                    return {
                        se: l,
                        t: u,
                        p: a,
                        sigmaHat: i,
                        interval95: d
                    }
                }
                function c(h) {
                    var f = h.R2 / h.df_model / ((1 - h.R2) / h.df_resid)
                      , i = function(u, a, p) {
                        return t.beta.cdf(u / (p / a + u), a / 2, p / 2)
                    }
                      , l = 1 - i(f, h.df_model, h.df_resid);
                    return {
                        F_statistic: f,
                        pvalue: l
                    }
                }
                function g(h, f) {
                    var i = o(h, f)
                      , l = s(i)
                      , u = c(i)
                      , a = 1 - (1 - i.R2) * ((i.nobs - 1) / i.df_resid);
                    return i.t = l,
                    i.f = u,
                    i.adjust_R2 = a,
                    i
                }
                return {
                    ols: g
                }
            }(),
            t.extend({
                buildxmatrix: function() {
                    for (var o = new Array(arguments.length), s = 0; s < arguments.length; s++) {
                        var c = [1];
                        o[s] = c.concat(arguments[s])
                    }
                    return t(o)
                },
                builddxmatrix: function() {
                    for (var o = new Array(arguments[0].length), s = 0; s < arguments[0].length; s++) {
                        var c = [1];
                        o[s] = c.concat(arguments[0][s])
                    }
                    return t(o)
                },
                buildjxmatrix: function(o) {
                    for (var s = new Array(o.length), c = 0; c < o.length; c++)
                        s[c] = o[c];
                    return t.builddxmatrix(s)
                },
                buildymatrix: function(o) {
                    return t(o).transpose()
                },
                buildjymatrix: function(o) {
                    return o.transpose()
                },
                matrixmult: function(o, s) {
                    var c, g, h, f, i;
                    if (o.cols() == s.rows()) {
                        if (s.rows() > 1) {
                            for (f = [],
                            c = 0; c < o.rows(); c++)
                                for (f[c] = [],
                                g = 0; g < s.cols(); g++) {
                                    for (i = 0,
                                    h = 0; h < o.cols(); h++)
                                        i += o.toArray()[c][h] * s.toArray()[h][g];
                                    f[c][g] = i
                                }
                            return t(f)
                        }
                        for (f = [],
                        c = 0; c < o.rows(); c++)
                            for (f[c] = [],
                            g = 0; g < s.cols(); g++) {
                                for (i = 0,
                                h = 0; h < o.cols(); h++)
                                    i += o.toArray()[c][h] * s.toArray()[g];
                                f[c][g] = i
                            }
                        return t(f)
                    }
                },
                regress: function(o, s) {
                    var c = t.xtranspxinv(o)
                      , g = o.transpose()
                      , h = t.matrixmult(t(c), g);
                    return t.matrixmult(h, s)
                },
                regresst: function(o, s, c) {
                    var g = t.regress(o, s)
                      , h = {};
                    h.anova = {};
                    var f = t.jMatYBar(o, g);
                    h.yBar = f;
                    var i = s.mean();
                    h.anova.residuals = t.residuals(s, f),
                    h.anova.ssr = t.ssr(f, i),
                    h.anova.msr = h.anova.ssr / (o[0].length - 1),
                    h.anova.sse = t.sse(s, f),
                    h.anova.mse = h.anova.sse / (s.length - (o[0].length - 1) - 1),
                    h.anova.sst = t.sst(s, i),
                    h.anova.mst = h.anova.sst / (s.length - 1),
                    h.anova.r2 = 1 - h.anova.sse / h.anova.sst,
                    h.anova.r2 < 0 && (h.anova.r2 = 0),
                    h.anova.fratio = h.anova.msr / h.anova.mse,
                    h.anova.pvalue = t.anovaftest(h.anova.fratio, o[0].length - 1, s.length - (o[0].length - 1) - 1),
                    h.anova.rmse = Math.sqrt(h.anova.mse),
                    h.anova.r2adj = 1 - h.anova.mse / h.anova.mst,
                    h.anova.r2adj < 0 && (h.anova.r2adj = 0),
                    h.stats = new Array(o[0].length);
                    for (var l = t.xtranspxinv(o), u, a, p, d = 0; d < g.length; d++)
                        u = Math.sqrt(h.anova.mse * Math.abs(l[d][d])),
                        a = Math.abs(g[d] / u),
                        p = t.ttest(a, s.length - o[0].length - 1, c),
                        h.stats[d] = [g[d], u, a, p];
                    return h.regress = g,
                    h
                },
                xtranspx: function(o) {
                    return t.matrixmult(o.transpose(), o)
                },
                xtranspxinv: function(o) {
                    var s = t.matrixmult(o.transpose(), o)
                      , c = t.inv(s);
                    return c
                },
                jMatYBar: function(o, s) {
                    var c = t.matrixmult(o, s);
                    return new t(c)
                },
                residuals: function(o, s) {
                    return t.matrixsubtract(o, s)
                },
                ssr: function(o, s) {
                    for (var c = 0, g = 0; g < o.length; g++)
                        c += Math.pow(o[g] - s, 2);
                    return c
                },
                sse: function(o, s) {
                    for (var c = 0, g = 0; g < o.length; g++)
                        c += Math.pow(o[g] - s[g], 2);
                    return c
                },
                sst: function(o, s) {
                    for (var c = 0, g = 0; g < o.length; g++)
                        c += Math.pow(o[g] - s, 2);
                    return c
                },
                matrixsubtract: function(o, s) {
                    for (var c = new Array(o.length), g = 0; g < o.length; g++) {
                        c[g] = new Array(o[g].length);
                        for (var h = 0; h < o[g].length; h++)
                            c[g][h] = o[g][h] - s[g][h]
                    }
                    return t(c)
                }
            }),
            t.jStat = t,
            t
        })
    }(vt),
    vt.exports)
}
var eu = jf();
const D = Zi(eu)
  , ar = new Error("#NULL!")
  , pe = new Error("#DIV/0!")
  , k = new Error("#VALUE!")
  , Yn = new Error("#REF!")
  , Ut = new Error("#NAME?")
  , R = new Error("#NUM!")
  , V = new Error("#N/A")
  , cr = new Error("#ERROR!")
  , li = new Error("#GETTING_DATA");
var nu = Object.freeze({
    __proto__: null,
    data: li,
    div0: pe,
    error: cr,
    na: V,
    name: Ut,
    nil: ar,
    num: R,
    ref: Yn,
    value: k
});
let nn = !1;
function tu() {
    nn = !0
}
function ru() {
    nn = !1
}
function fi(e) {
    e < 60 && (e += 1);
    const t = Math.floor(e - 25569) * 86400
      , r = new Date(t * 1e3)
      , o = e - Math.floor(e) + 1e-7;
    let s = Math.floor(86400 * o);
    const c = s % 60;
    s -= c;
    const g = Math.floor(s / (60 * 60))
      , h = Math.floor(s / 60) % 60;
    let f = r.getUTCDate()
      , i = r.getUTCMonth();
    return e >= 60 && e < 61 && (f = 29,
    i = 1),
    new Date(r.getUTCFullYear(),i,f,g,h,c)
}
function je(e) {
    const n = new Date(1900,0,1)
      , t = e > -22038912e5 ? 2 : 1;
    return Math.ceil((e - n) / 864e5) + t
}
var ou = Object.freeze({
    __proto__: null,
    dateToSerial: je,
    get returnSerial() {
        return nn
    },
    serialToDate: fi,
    useDate: ru,
    useSerial: tu
});
const iu = "="
  , su = [">", ">=", "<", "<=", "=", "<>"]
  , ui = "operator"
  , ai = "literal"
  , lu = [ui, ai]
  , Nt = ui
  , ln = ai;
function Ke(e, n) {
    if (lu.indexOf(n) === -1)
        throw new Error("Unsupported token type: " + n);
    return {
        value: e,
        type: n
    }
}
function fu(e) {
    return typeof e != "string" || /^\d+(\.\d+)?$/.test(e) && (e = e.indexOf(".") === -1 ? parseInt(e, 10) : parseFloat(e)),
    e
}
function uu(e) {
    const n = e.length
      , t = [];
    let r = 0
      , o = ""
      , s = "";
    for (; r < n; ) {
        const c = e.charAt(r);
        switch (c) {
        case ">":
        case "<":
        case "=":
            s = s + c,
            o.length > 0 && (t.push(o),
            o = "");
            break;
        default:
            s.length > 0 && (t.push(s),
            s = ""),
            o = o + c;
            break
        }
        r++
    }
    return o.length > 0 && t.push(o),
    s.length > 0 && t.push(s),
    t
}
function au(e) {
    let n = "";
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        r === 0 && su.indexOf(o) >= 0 ? t.push(Ke(o, Nt)) : n += o
    }
    return n.length > 0 && t.push(Ke(fu(n), ln)),
    t.length > 0 && t[0].type !== Nt && t.unshift(Ke(iu, Nt)),
    t
}
function cu(e) {
    const n = [];
    let t;
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        switch (o.type) {
        case Nt:
            t = o.value;
            break;
        case ln:
            n.push(o.value);
            break
        }
    }
    return du(n, t)
}
function du(e, n) {
    let t = !1;
    switch (n) {
    case ">":
        t = e[0] > e[1];
        break;
    case ">=":
        t = e[0] >= e[1];
        break;
    case "<":
        t = e[0] < e[1];
        break;
    case "<=":
        t = e[0] <= e[1];
        break;
    case "=":
        t = e[0] == e[1];
        break;
    case "<>":
        t = e[0] != e[1];
        break
    }
    return t
}
function $n(e) {
    return au(uu(e))
}
const Zn = cu;
function Bt(e) {
    const n = [];
    return ve(e, t => {
        n.push(t)
    }
    ),
    n
}
function ve(e, n) {
    let t = -1;
    const r = e.length;
    for (; ++t < r && n(e[t], t, e) !== !1; )
        ;
    return e
}
function dr(e) {
    let n = e.length, t;
    for (; n--; )
        if (t = e[n],
        typeof t != "number") {
            if (t === !0) {
                e[n] = 1;
                continue
            }
            if (t === !1) {
                e[n] = 0;
                continue
            }
            if (typeof t == "string") {
                const r = E(t);
                e[n] = r instanceof Error ? 0 : r
            }
        }
    return e
}
function ci(e, n) {
    if (!e)
        return k;
    (!e.every(o => Array.isArray(o)) || e.length === 0) && (e = [[...e]]),
    e.map( (o, s) => {
        o.map( (c, g) => {
            c || (e[s][g] = 0)
        }
        )
    }
    );
    const t = e.reduce( (o, s, c) => s.length > e[o].length ? c : o, 0)
      , r = e[t].length;
    return e.map(o => [...o, ...Array(r - o.length).fill(0)])
}
function A() {
    let e;
    if (arguments.length === 1) {
        const n = arguments[0];
        e = gu(n) ? Bt.apply(null, arguments) : [n]
    } else
        e = Array.from(arguments);
    for (; !pu(e); )
        e = rr(e);
    return e
}
function rr(e) {
    return !e || !e.reduce ? [e] : e.reduce( (n, t) => {
        const r = Array.isArray(n)
          , o = Array.isArray(t);
        return r && o ? n.concat(t) : r ? (n.push(t),
        n) : o ? [n].concat(t) : [n, t]
    }
    )
}
function hu(e, n) {
    return n = n || 1,
    !e || typeof e.slice != "function" ? e : e.slice(0, e.length - n)
}
function gu(e) {
    return e != null && typeof e.length == "number" && typeof e != "string"
}
function pu(e) {
    if (!e)
        return !1;
    for (let n = 0; n < e.length; ++n)
        if (Array.isArray(e[n]))
            return !1;
    return !0
}
function re(e, n) {
    return n = n || 1,
    !e || typeof e.slice != "function" ? e : e.slice(n)
}
function Rt(e) {
    return e ? e[0].map( (n, t) => e.map(r => r[t])) : k
}
function Pe(e, n) {
    let t = null;
    return ve(e, (r, o) => {
        if (r[0] === n)
            return t = o,
            !1
    }
    ),
    t ?? k
}
function q() {
    for (let e = 0; e < arguments.length; e++)
        if (arguments[e]instanceof Error)
            return arguments[e]
}
function S() {
    let e = arguments.length;
    for (; e--; )
        if (arguments[e]instanceof Error)
            return !0;
    return !1
}
function di(e) {
    return Math.round(e * 1e14) / 1e14
}
function tn() {
    return A.apply(null, arguments).filter(n => typeof n == "number")
}
function hr(e) {
    if (typeof e == "boolean" || e instanceof Error)
        return e;
    if (typeof e == "number")
        return e !== 0;
    if (typeof e == "string") {
        const n = e.toUpperCase();
        if (n === "TRUE")
            return !0;
        if (n === "FALSE")
            return !1
    }
    return e instanceof Date && !isNaN(e) ? !0 : k
}
function b(e) {
    if (!isNaN(e)) {
        if (e instanceof Date)
            return new Date(e);
        const n = parseFloat(e);
        return n < 0 || n >= 2958466 ? R : fi(n)
    }
    return typeof e == "string" && (e = /(\d{4})-(\d\d?)-(\d\d?)$/.test(e) ? new Date(e + "T00:00:00.000") : new Date(e),
    !isNaN(e)) ? e : k
}
function hi(e) {
    let n = e.length, t;
    for (; n--; ) {
        if (t = b(e[n]),
        t === k)
            return t;
        e[n] = t
    }
    return e
}
function E(e) {
    return e instanceof Error ? e : e == null ? 0 : (typeof e == "boolean" && (e = +e),
    !isNaN(e) && e !== "" ? parseFloat(e) : k)
}
function U(e) {
    let n;
    if (!e || (n = e.length) === 0)
        return k;
    let t;
    for (; n--; ) {
        if (e[n]instanceof Error)
            return e[n];
        if (t = E(e[n]),
        t instanceof Error)
            return t;
        e[n] = t
    }
    return e
}
function le(e) {
    return e instanceof Error ? e : e == null ? "" : e.toString()
}
function Wt() {
    let e = arguments.length;
    for (; e--; )
        if (typeof arguments[e] == "string")
            return !0;
    return !1
}
function Xt() {
    const e = Bt(arguments)
      , n = U(A(e.shift()));
    if (n instanceof Error)
        return n;
    const t = e
      , r = t.length / 2;
    for (let s = 0; s < r; s++)
        t[s * 2] = A(t[s * 2]);
    let o = [];
    for (let s = 0; s < n.length; s++) {
        let c = !1;
        for (let g = 0; g < r; g++) {
            const h = t[g * 2][s]
              , f = t[g * 2 + 1]
              , i = f === void 0 || f === "*";
            let l = !1;
            if (i)
                l = !0;
            else {
                const u = $n(f + "")
                  , a = [Ke(h, ln)].concat(u);
                l = Zn(a)
            }
            if (!l) {
                c = !1;
                break
            }
            c = !0
        }
        c && o.push(n[s])
    }
    return o
}
function vn(e) {
    return e != null
}
const gi = {};
gi.TYPE = e => {
    switch (e) {
    case ar:
        return 1;
    case pe:
        return 2;
    case k:
        return 3;
    case Yn:
        return 4;
    case Ut:
        return 5;
    case R:
        return 6;
    case V:
        return 7;
    case li:
        return 8
    }
    return V
}
;
function mu(e) {
    return e === null
}
function pi(e) {
    return [k, Yn, pe, R, Ut, ar].indexOf(e) >= 0 || typeof e == "number" && (isNaN(e) || !isFinite(e))
}
function Vt(e) {
    return pi(e) || e === V
}
function vu(e) {
    return !(Math.floor(Math.abs(e)) & 1)
}
function mi(e) {
    return e === !0 || e === !1
}
function yu(e) {
    return e === V
}
function Nu(e) {
    return typeof e != "string"
}
function Ht(e) {
    return typeof e == "number" && !isNaN(e) && isFinite(e)
}
function Eu(e) {
    return !!(Math.floor(Math.abs(e)) & 1)
}
function vi(e) {
    return typeof e == "string"
}
function xu(e) {
    return Ht(e) ? e : e instanceof Date ? e.getTime() : e === !0 ? 1 : e === !1 ? 0 : Vt(e) ? e : 0
}
function Tu() {
    return V
}
function wu(e) {
    if (Ht(e))
        return 1;
    if (vi(e))
        return 2;
    if (mi(e))
        return 4;
    if (Vt(e))
        return 16;
    if (Array.isArray(e))
        return 64
}
function Iu() {
    if (arguments.length < 2)
        return V;
    const e = arguments[0];
    return e < 1 || e > 254 || arguments.length < e + 1 ? k : arguments[e]
}
function ku(e, n) {
    if (arguments.length !== 2)
        return V;
    if (n < 0)
        return R;
    if (!(e instanceof Array) || typeof n != "number")
        return k;
    if (e.length !== 0)
        return D.col(e, n)
}
function Ru(e) {
    return arguments.length !== 1 ? V : e instanceof Array ? e.length === 0 ? 0 : D.cols(e) : k
}
function Cu(e, n, t, r) {
    return yi(e, Rt(n), t, r)
}
function Ou(e, n, t) {
    const r = q(e, n, t);
    if (r)
        return r;
    if (!Array.isArray(e))
        return k;
    const o = e.length > 0 && !Array.isArray(e[0]);
    return o && !t ? (t = n,
    n = 1) : (t = t || 1,
    n = n || 1),
    t < 0 || n < 0 ? k : o && n === 1 && t <= e.length ? e[t - 1] : n <= e.length && t <= e[n - 1].length ? e[n - 1][t - 1] : Yn
}
function Su(e, n, t) {
    n = A(n),
    t = t ? A(t) : n;
    const r = typeof e == "number";
    let o = V;
    for (let s = 0; s < n.length; s++) {
        if (n[s] === e)
            return t[s];
        if (r && n[s] <= e || typeof n[s] == "string" && n[s].localeCompare(e) < 0)
            o = t[s];
        else if (r && n[s] > e)
            return o
    }
    return o
}
function Au(e, n, t) {
    if (!e && e !== 0 || !n || (arguments.length === 2 && (t = 1),
    n = A(n),
    !(n instanceof Array)) || t !== -1 && t !== 0 && t !== 1)
        return V;
    let r, o;
    for (let s = 0; s < n.length; s++)
        if (t === 1) {
            if (n[s] === e)
                return s + 1;
            n[s] < e && (o ? n[s] > o && (r = s + 1,
            o = n[s]) : (r = s + 1,
            o = n[s]))
        } else if (t === 0) {
            if (typeof e == "string" && typeof n[s] == "string") {
                const c = e.toLowerCase().replace(/\?/g, ".").replace(/\*/g, ".*").replace(/~/g, "\\").replace(/\+/g, "\\+").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\[/g, "\\[").replace(/\]/g, "\\]");
                if (new RegExp("^" + c + "$").test(n[s].toLowerCase()))
                    return s + 1
            } else if (n[s] === e)
                return s + 1
        } else if (t === -1) {
            if (n[s] === e)
                return s + 1;
            n[s] > e && (o ? n[s] < o && (r = s + 1,
            o = n[s]) : (r = s + 1,
            o = n[s]))
        }
    return r || V
}
function Pu(e) {
    return arguments.length !== 1 ? V : e instanceof Array ? e.length === 0 ? 0 : D.rows(e) : k
}
function Lu(e, n=1, t=1, r=!1) {
    if (!e || !Array.isArray(e))
        return V;
    if (e.length === 0)
        return 0;
    if (n = E(n),
    !n || n < 1 || (t = E(t),
    t !== 1 && t !== -1))
        return k;
    if (r = hr(r),
    typeof r != "boolean")
        return Ut;
    const o = g => g.sort( (h, f) => (h = le(h[n - 1]),
    f = le(f[n - 1]),
    t === 1 ? h < f ? t * -1 : t : h > f ? t : t * -1))
      , s = ci(e)
      , c = r ? Rt(s) : s;
    return n >= 1 && n <= c[0].length ? r ? Rt(o(c)) : o(c) : k
}
function Mu(e) {
    if (!e)
        return V;
    const n = ci(e);
    return Rt(n)
}
function gr() {
    const e = [];
    for (let n = 0; n < arguments.length; ++n) {
        let t = !1;
        const r = arguments[n];
        for (let o = 0; o < e.length && (t = e[o] === r,
        !t); ++o)
            ;
        t || e.push(r)
    }
    return e
}
function yi(e, n, t, r) {
    if (!n || !t)
        return V;
    r = !(r === 0 || r === !1);
    let o = V
      , s = !1;
    const c = typeof e == "number"
      , g = typeof e == "string" ? e.toLowerCase() : e;
    for (let h = 0; h < n.length; h++) {
        const f = n[h]
          , i = typeof f[0] == "string" ? f[0].toLowerCase() : f[0];
        if (i === g) {
            o = t < f.length + 1 ? f[t - 1] : Yn;
            break
        } else
            !s && (c && r && i <= e || r && typeof i == "string" && i.localeCompare(e) < 0) && (o = t < f.length + 1 ? f[t - 1] : Yn);
        c && i > e && (s = !0)
    }
    return o
}
function Ni(e) {
    return e = E(e),
    e === 0 ? k : e instanceof Error ? e : String.fromCharCode(e)
}
function Du(e) {
    if (S(e))
        return e;
    e = e || "";
    const n = /[\0-\x1F]/g;
    return e.replace(n, "")
}
function Ei(e) {
    if (S(e))
        return e;
    e = e || "";
    let n = e.charCodeAt(0);
    return isNaN(n) && (n = k),
    n
}
function xi() {
    const e = A(arguments)
      , n = q.apply(void 0, e);
    if (n)
        return n;
    let t = 0;
    for (; (t = e.indexOf(!0)) > -1; )
        e[t] = "TRUE";
    let r = 0;
    for (; (r = e.indexOf(!1)) > -1; )
        e[r] = "FALSE";
    return e.join("")
}
const Fu = xi;
function Ju(e, n=2) {
    if (e = E(e),
    isNaN(e))
        return k;
    e = Mi(e, n);
    const t = {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: n >= 0 ? n : 0,
        maximumFractionDigits: n >= 0 ? n : 0
    }
      , r = e.toLocaleString("en-US", t);
    return e < 0 ? "$(" + r.slice(2) + ")" : r
}
function Uu(e, n) {
    if (arguments.length !== 2)
        return V;
    const t = q(e, n);
    return t || (e = le(e),
    n = le(n),
    e === n)
}
function Bu(e, n, t) {
    if (arguments.length < 2)
        return V;
    e = le(e),
    n = le(n),
    t = t === void 0 ? 0 : t;
    const r = n.indexOf(e, t - 1);
    return r === -1 ? k : r + 1
}
function Ti(e, n=2, t=!1) {
    if (e = E(e),
    isNaN(e) || (n = E(n),
    isNaN(n)))
        return k;
    if (n < 0) {
        const r = Math.pow(10, -n);
        e = Math.round(e / r) * r
    } else
        e = e.toFixed(n);
    if (t)
        e = e.toString().replace(/,/g, "");
    else {
        const r = e.toString().split(".");
        r[0] = r[0].replace(/\B(?=(\d{3})+$)/g, ","),
        e = r.join(".")
    }
    return e
}
function Wu(e, n) {
    const t = q(e, n);
    return t || (e = le(e),
    n = n === void 0 ? 1 : n,
    n = E(n),
    n instanceof Error || typeof e != "string" ? k : e.substring(0, n))
}
function Xu(e) {
    return arguments.length === 0 ? cr : e instanceof Error ? e : Array.isArray(e) ? k : le(e).length
}
function Vu(e) {
    return arguments.length !== 1 ? k : (e = le(e),
    S(e) ? e : e.toLowerCase())
}
function Hu(e, n, t) {
    if (n == null)
        return k;
    if (n = E(n),
    t = E(t),
    S(n, t) || typeof e != "string")
        return t;
    const r = n - 1
      , o = r + t;
    return e.substring(r, o)
}
function qu(e, n, t) {
    return e = vn(e) ? e : "",
    typeof e == "number" ? e : typeof e != "string" ? V : (n = typeof n > "u" ? "." : n,
    t = typeof t > "u" ? "," : t,
    Number(e.replace(n, ".").replace(t, "")))
}
function zu(e) {
    return S(e) ? e : isNaN(e) && typeof e == "number" ? k : (e = le(e),
    e.replace(/\w\S*/g, n => n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()))
}
function Gu(e, n, t, r) {
    return n = E(n),
    t = E(t),
    S(n, t) || typeof e != "string" || typeof r != "string" ? k : e.substr(0, n - 1) + r + e.substr(n - 1 + t)
}
function Ae(e, n) {
    const t = q(e, n);
    return t || (e = le(e),
    n = E(n),
    n instanceof Error ? n : new Array(n + 1).join(e))
}
function bu(e, n) {
    const t = q(e, n);
    return t || (e = le(e),
    n = n === void 0 ? 1 : n,
    n = E(n),
    n instanceof Error ? n : e.substring(e.length - n))
}
function Yu(e, n, t) {
    let r;
    return typeof e != "string" || typeof n != "string" ? k : (t = t === void 0 ? 0 : t,
    r = n.toLowerCase().indexOf(e.toLowerCase(), t - 1) + 1,
    r === 0 ? k : r)
}
function $u(e, n, t, r) {
    if (arguments.length < 3)
        return V;
    if (!e || !n)
        return e;
    if (r === void 0)
        return e.split(n).join(t);
    {
        if (r = Math.floor(Number(r)),
        Number.isNaN(r) || r <= 0)
            return k;
        let o = 0
          , s = 0;
        for (; o > -1 && e.indexOf(n, o) > -1; )
            if (o = e.indexOf(n, o + 1),
            s++,
            o > -1 && s === r)
                return e.substring(0, o) + t + e.substring(o + n.length);
        return e
    }
}
function Re(e) {
    return e instanceof Error || typeof e == "string" ? e : ""
}
function Zu(e, n) {
    if (e === void 0 || e instanceof Error || n instanceof Error)
        return V;
    if (e instanceof Date)
        return e.toISOString().slice(0, 10);
    if (n == null)
        return "";
    if (typeof n == "number")
        return String(n);
    if (typeof n != "string")
        return k;
    const t = n.startsWith("$") ? "$" : ""
      , r = n.endsWith("%");
    n = n.replace(/%/g, "").replace(/\$/g, "");
    const o = n.includes(".") ? n.split(".")[1].match(/0/g).length : 0
      , s = !n.includes(",");
    return r && (e = e * 100),
    e = Ti(e, o, s),
    e.startsWith("-") ? (e = e.replace("-", ""),
    e = "-" + t + e) : e = t + e,
    r && (e = e + "%"),
    e
}
function Ku(e, n, ...t) {
    if (typeof n != "boolean" && (n = hr(n)),
    arguments.length < 3)
        return V;
    e = e ?? "";
    let r = A(t)
      , o = n ? r.filter(s => s) : r;
    if (Array.isArray(e)) {
        e = A(e);
        let s = o.map(g => [g])
          , c = 0;
        for (let g = 0; g < s.length - 1; g++)
            s[g].push(e[c]),
            c++,
            c === e.length && (c = 0);
        return o = A(s),
        o.join("")
    }
    return o.join(e)
}
function Qu(e) {
    return e = le(e),
    e instanceof Error ? e : e.replace(/\s+/g, " ").trim()
}
const _u = Ni
  , ju = Ei;
function ea(e) {
    return e = le(e),
    e instanceof Error ? e : e.toUpperCase()
}
function na(e) {
    const n = q(e);
    if (n)
        return n;
    if (typeof e == "number")
        return e;
    if (vn(e) || (e = ""),
    typeof e != "string")
        return k;
    const t = /(%)$/.test(e) || /^(%)/.test(e);
    if (e = e.replace(/^[^0-9-]{0,3}/, ""),
    e = e.replace(/[^0-9]{0,3}$/, ""),
    e = e.replace(/[ ,]/g, ""),
    e === "")
        return 0;
    let r = Number(e);
    return isNaN(r) ? k : (r = r || 0,
    t && (r = r * .01),
    r)
}
const ta = 2.5066282746310002;
function ra() {
    const n = A(arguments).filter(vn);
    if (n.length === 0)
        return R;
    const t = U(n);
    return t instanceof Error ? t : D.sum(D(t).subtract(D.mean(t)).abs()[0]) / t.length
}
function cn() {
    const n = A(arguments).filter(vn);
    if (n.length === 0)
        return pe;
    const t = q.apply(void 0, n);
    if (t)
        return t;
    const r = tn(n)
      , o = r.length;
    let s = 0, c = 0, g;
    for (let h = 0; h < o; h++)
        s += r[h],
        c += 1;
    return g = s / c,
    isNaN(g) && (g = R),
    g
}
function pr() {
    const n = A(arguments).filter(vn);
    if (n.length === 0)
        return pe;
    const t = q.apply(void 0, n);
    if (t)
        return t;
    const r = n
      , o = r.length;
    let s = 0, c = 0, g;
    for (let h = 0; h < o; h++) {
        const f = r[h];
        typeof f == "number" && (s += f),
        f === !0 && s++,
        f !== null && c++
    }
    return g = s / c,
    isNaN(g) && (g = R),
    g
}
function oa(e, n, t) {
    if (arguments.length <= 1)
        return V;
    t = t || e;
    const o = A(t).filter(vn);
    if (t = U(o),
    e = A(e),
    t instanceof Error)
        return t;
    let s = 0
      , c = 0;
    const g = n === void 0 || n === "*"
      , h = g ? null : $n(n + "");
    for (let f = 0; f < e.length; f++) {
        const i = e[f];
        if (g)
            c += t[f],
            s++;
        else {
            const l = [Ke(i, ln)].concat(h);
            Zn(l) && (c += t[f],
            s++)
        }
    }
    return c / s
}
function ia() {
    const e = Xt(...arguments)
      , t = e.reduce( (r, o) => r + o, 0) / e.length;
    return isNaN(t) ? 0 : t
}
const ut = {};
ut.DIST = function(e, n, t, r, o, s) {
    return arguments.length < 4 || (o = o === void 0 ? 0 : o,
    s = s === void 0 ? 1 : s,
    e = E(e),
    n = E(n),
    t = E(t),
    o = E(o),
    s = E(s),
    S(e, n, t, o, s)) ? k : (e = (e - o) / (s - o),
    r ? D.beta.cdf(e, n, t) : D.beta.pdf(e, n, t))
}
;
ut.INV = (e, n, t, r, o) => (r = r === void 0 ? 0 : r,
o = o === void 0 ? 1 : o,
e = E(e),
n = E(n),
t = E(t),
r = E(r),
o = E(o),
S(e, n, t, r, o) ? k : D.beta.inv(e, n, t) * (o - r) + r);
const Kn = {};
Kn.DIST = (e, n, t, r) => (e = E(e),
n = E(n),
t = E(t),
r = E(r),
S(e, n, t, r) ? k : r ? D.binomial.cdf(e, n, t) : D.binomial.pdf(e, n, t));
Kn.DIST.RANGE = (e, n, t, r) => {
    if (r = r === void 0 ? t : r,
    e = E(e),
    n = E(n),
    t = E(t),
    r = E(r),
    S(e, n, t, r))
        return k;
    let o = 0;
    for (let s = t; s <= r; s++)
        o += bn(e, s) * Math.pow(n, s) * Math.pow(1 - n, e - s);
    return o
}
;
Kn.INV = (e, n, t) => {
    if (e = E(e),
    n = E(n),
    t = E(t),
    S(e, n, t))
        return k;
    let r = 0;
    for (; r <= e; ) {
        if (D.binomial.cdf(r, e, n) >= t)
            return r;
        r++
    }
}
;
const Ve = {};
Ve.DIST = (e, n, t) => (e = E(e),
n = E(n),
S(e, n) ? k : t ? D.chisquare.cdf(e, n) : D.chisquare.pdf(e, n));
Ve.DIST.RT = (e, n) => !e | !n ? V : e < 1 || n > Math.pow(10, 10) ? R : typeof e != "number" || typeof n != "number" ? k : 1 - D.chisquare.cdf(e, n);
Ve.INV = (e, n) => (e = E(e),
n = E(n),
S(e, n) ? k : D.chisquare.inv(e, n));
Ve.INV.RT = (e, n) => !e | !n ? V : e < 0 || e > 1 || n < 1 || n > Math.pow(10, 10) ? R : typeof e != "number" || typeof n != "number" ? k : D.chisquare.inv(1 - e, n);
Ve.TEST = function(e, n) {
    if (arguments.length !== 2)
        return V;
    if (!(e instanceof Array) || !(n instanceof Array) || e.length !== n.length || e[0] && n[0] && e[0].length !== n[0].length)
        return k;
    const t = e.length;
    let r, o, s;
    for (o = 0; o < t; o++)
        e[o]instanceof Array || (r = e[o],
        e[o] = [],
        e[o].push(r)),
        n[o]instanceof Array || (r = n[o],
        n[o] = [],
        n[o].push(r));
    const c = e[0].length
      , g = c === 1 ? t - 1 : (t - 1) * (c - 1);
    let h = 0;
    const f = Math.PI;
    for (o = 0; o < t; o++)
        for (s = 0; s < c; s++)
            h += Math.pow(e[o][s] - n[o][s], 2) / n[o][s];
    function i(l, u) {
        let a = Math.exp(-.5 * l);
        u % 2 === 1 && (a = a * Math.sqrt(2 * l / f));
        let p = u;
        for (; p >= 2; )
            a = a * l / p,
            p = p - 2;
        let d = a
          , m = u;
        for (; d > 1e-10 * a; )
            m = m + 2,
            d = d * l / m,
            a = a + d;
        return 1 - a
    }
    return Math.round(i(h, g) * 1e6) / 1e6
}
;
const mr = {};
mr.NORM = (e, n, t) => (e = E(e),
n = E(n),
t = E(t),
S(e, n, t) ? k : D.normalci(1, e, n, t)[1] - 1);
mr.T = (e, n, t) => (e = E(e),
n = E(n),
t = E(t),
S(e, n, t) ? k : D.tci(1, e, n, t)[1] - 1);
function sa(e, n) {
    return e = U(A(e)),
    n = U(A(n)),
    S(e, n) ? k : D.corrcoeff(e, n)
}
function st() {
    const e = A(arguments);
    return tn(e).length
}
function lt() {
    const e = A(arguments);
    return e.length - wi(e)
}
function wi() {
    const e = A(arguments);
    let n = 0, t;
    for (let r = 0; r < e.length; r++)
        t = e[r],
        (t == null || t === "") && n++;
    return n
}
function la(e, n) {
    if (e = A(e),
    n === void 0 || n === "*")
        return e.length;
    let r = 0;
    const o = $n(n + "");
    for (let s = 0; s < e.length; s++) {
        const c = e[s]
          , g = [Ke(c, ln)].concat(o);
        Zn(g) && r++
    }
    return r
}
function fa() {
    const e = Bt(arguments)
      , n = new Array(A(e[0]).length);
    for (let r = 0; r < n.length; r++)
        n[r] = !0;
    for (let r = 0; r < e.length; r += 2) {
        const o = A(e[r])
          , s = e[r + 1];
        if (!(s === void 0 || s === "*")) {
            const g = $n(s + "");
            for (let h = 0; h < o.length; h++) {
                const f = o[h]
                  , i = [Ke(f, ln)].concat(g);
                n[h] = n[h] && Zn(i)
            }
        }
    }
    let t = 0;
    for (let r = 0; r < n.length; r++)
        n[r] && t++;
    return t
}
const Qn = {};
Qn.P = (e, n) => {
    if (e = U(A(e)),
    n = U(A(n)),
    S(e, n))
        return k;
    const t = D.mean(e)
      , r = D.mean(n);
    let o = 0;
    const s = e.length;
    for (let c = 0; c < s; c++)
        o += (e[c] - t) * (n[c] - r);
    return o / s
}
;
Qn.S = (e, n) => (e = U(A(e)),
n = U(A(n)),
S(e, n) ? k : D.covariance(e, n));
function ua() {
    const e = U(A(arguments));
    if (e instanceof Error)
        return e;
    const n = D.mean(e);
    let t = 0;
    for (let r = 0; r < e.length; r++)
        t += Math.pow(e[r] - n, 2);
    return t
}
const vr = {};
vr.DIST = (e, n, t) => (e = E(e),
n = E(n),
S(e, n) ? k : t ? D.exponential.cdf(e, n) : D.exponential.pdf(e, n));
const He = {};
He.DIST = (e, n, t, r) => (e = E(e),
n = E(n),
t = E(t),
S(e, n, t) ? k : r ? D.centralF.cdf(e, n, t) : D.centralF.pdf(e, n, t));
He.DIST.RT = function(e, n, t) {
    return arguments.length !== 3 ? V : e < 0 || n < 1 || t < 1 ? R : typeof e != "number" || typeof n != "number" || typeof t != "number" ? k : 1 - D.centralF.cdf(e, n, t)
}
;
He.INV = (e, n, t) => (e = E(e),
n = E(n),
t = E(t),
S(e, n, t) ? k : e <= 0 || e > 1 ? R : D.centralF.inv(e, n, t));
He.INV.RT = function(e, n, t) {
    return arguments.length !== 3 ? V : e < 0 || e > 1 || n < 1 || n > Math.pow(10, 10) || t < 1 || t > Math.pow(10, 10) ? R : typeof e != "number" || typeof n != "number" || typeof t != "number" ? k : D.centralF.inv(1 - e, n, t)
}
;
He.TEST = (e, n) => {
    if (!e || !n || !(e instanceof Array) || !(n instanceof Array))
        return V;
    if (e.length < 2 || n.length < 2)
        return pe;
    const t = (g, h) => {
        let f = 0;
        for (let i = 0; i < g.length; i++)
            f += Math.pow(g[i] - h, 2);
        return f
    }
      , r = en(e) / e.length
      , o = en(n) / n.length
      , s = t(e, r) / (e.length - 1)
      , c = t(n, o) / (n.length - 1);
    return s / c
}
;
function aa(e) {
    return e = E(e),
    e instanceof Error ? e : Math.log((1 + e) / (1 - e)) / 2
}
function ca(e) {
    if (e = E(e),
    e instanceof Error)
        return e;
    const n = Math.exp(2 * e);
    return (n - 1) / (n + 1)
}
function Ii(e, n, t) {
    if (e = E(e),
    n = U(A(n)),
    t = U(A(t)),
    S(e, n, t))
        return k;
    const r = D.mean(t)
      , o = D.mean(n)
      , s = t.length;
    let c = 0
      , g = 0;
    for (let i = 0; i < s; i++)
        c += (t[i] - r) * (n[i] - o),
        g += Math.pow(t[i] - r, 2);
    const h = c / g;
    return o - h * r + h * e
}
function da(e, n) {
    if (e = U(A(e)),
    n = U(A(n)),
    S(e, n))
        return k;
    const t = e.length
      , r = n.length
      , o = [];
    for (let s = 0; s <= r; s++) {
        o[s] = 0;
        for (let c = 0; c < t; c++)
            s === 0 ? e[c] <= n[0] && (o[0] += 1) : s < r ? e[c] > n[s - 1] && e[c] <= n[s] && (o[s] += 1) : s === r && e[c] > n[r - 1] && (o[r] += 1)
    }
    return o
}
function at(e) {
    return e = E(e),
    e instanceof Error ? e : e === 0 || parseInt(e, 10) === e && e < 0 ? R : D.gammafn(e)
}
at.DIST = function(e, n, t, r) {
    return arguments.length !== 4 ? V : e < 0 || n <= 0 || t <= 0 || typeof e != "number" || typeof n != "number" || typeof t != "number" ? k : r ? D.gamma.cdf(e, n, t, !0) : D.gamma.pdf(e, n, t, !1)
}
;
at.INV = function(e, n, t) {
    return arguments.length !== 3 ? V : e < 0 || e > 1 || n <= 0 || t <= 0 ? R : typeof e != "number" || typeof n != "number" || typeof t != "number" ? k : D.gamma.inv(e, n, t)
}
;
function yr(e) {
    return e = E(e),
    e instanceof Error ? e : D.gammaln(e)
}
yr.PRECISE = function(e) {
    return arguments.length !== 1 ? V : e <= 0 ? R : typeof e != "number" ? k : D.gammaln(e)
}
;
function ha(e) {
    return e = E(e),
    e instanceof Error ? e : D.normal.cdf(e, 0, 1) - .5
}
function ga() {
    const e = U(A(arguments));
    return e instanceof Error ? e : D.geomean(e)
}
function pa(e, n, t, r) {
    if (e = U(A(e)),
    e instanceof Error)
        return e;
    let o;
    if (n === void 0)
        for (n = [],
        o = 1; o <= e.length; o++)
            n.push(o);
    if (t === void 0 && (t = n),
    n = U(A(n)),
    t = U(A(t)),
    S(n, t))
        return k;
    r === void 0 && (r = !0);
    const s = e.length;
    let c = 0
      , g = 0
      , h = 0
      , f = 0;
    for (o = 0; o < s; o++) {
        const a = n[o]
          , p = Math.log(e[o]);
        c += a,
        g += p,
        h += a * p,
        f += a * a
    }
    c /= s,
    g /= s,
    h /= s,
    f /= s;
    let i, l;
    r ? (i = (h - c * g) / (f - c * c),
    l = g - i * c) : (i = h / f,
    l = 0);
    const u = [];
    for (o = 0; o < t.length; o++)
        u.push(Math.exp(l + i * t[o]));
    return u
}
function ma() {
    const e = U(A(arguments));
    if (e instanceof Error)
        return e;
    const n = e.length;
    let t = 0;
    for (let r = 0; r < n; r++)
        t += 1 / e[r];
    return n / t
}
const Nr = {};
Nr.DIST = (e, n, t, r, o) => {
    if (e = E(e),
    n = E(n),
    t = E(t),
    r = E(r),
    S(e, n, t, r))
        return k;
    function s(g, h, f, i) {
        return bn(f, g) * bn(i - f, h - g) / bn(i, h)
    }
    function c(g, h, f, i) {
        let l = 0;
        for (let u = 0; u <= g; u++)
            l += s(u, h, f, i);
        return l
    }
    return o ? c(e, n, t, r) : s(e, n, t, r)
}
;
function va(e, n) {
    return e = U(e),
    n = U(n),
    S(e, n) ? k : e.length !== n.length ? V : Ii(0, e, n)
}
function ya() {
    const e = U(A(arguments));
    if (e instanceof Error)
        return e;
    const n = D.mean(e)
      , t = e.length;
    let r = 0;
    for (let o = 0; o < t; o++)
        r += Math.pow(e[o] - n, 4);
    return r = r / Math.pow(D.stdev(e, !0), 4),
    t * (t + 1) / ((t - 1) * (t - 2) * (t - 3)) * r - 3 * (t - 1) * (t - 1) / ((t - 2) * (t - 3))
}
function ki(e, n) {
    const t = q.apply(void 0, e);
    return t || (S(n) ? n : (e = tn(A(e)),
    n = E(n),
    n < 0 || e.length < n ? k : e.sort( (r, o) => o - r)[n - 1]))
}
function Er(e, n) {
    if (e = U(A(e)),
    n = U(A(n)),
    S(e, n))
        return k;
    const t = D.mean(e)
      , r = D.mean(n)
      , o = n.length;
    let s = 0
      , c = 0;
    for (let f = 0; f < o; f++)
        s += (n[f] - r) * (e[f] - t),
        c += Math.pow(n[f] - r, 2);
    const g = s / c
      , h = t - g * r;
    return [g, h]
}
function Na(e, n) {
    if (e = U(A(e)),
    n = U(A(n)),
    S(e, n) || e.length !== n.length)
        return k;
    for (let r = 0; r < e.length; r++)
        e[r] = Math.log(e[r]);
    const t = Er(e, n);
    return t[0] = Math.round(Math.exp(t[0]) * 1e6) / 1e6,
    t[1] = Math.round(Math.exp(t[1]) * 1e6) / 1e6,
    t
}
const _n = {};
_n.DIST = (e, n, t, r) => (e = E(e),
n = E(n),
t = E(t),
S(e, n, t) ? k : r ? D.lognormal.cdf(e, n, t) : D.lognormal.pdf(e, n, t));
_n.INV = (e, n, t) => (e = E(e),
n = E(n),
t = E(t),
S(e, n, t) ? k : D.lognormal.inv(e, n, t));
function Ct() {
    const e = A(arguments)
      , n = q.apply(void 0, e);
    if (n)
        return n;
    const t = tn(e);
    return t.length === 0 ? 0 : Math.max.apply(Math, t)
}
function Ea() {
    const e = A(arguments)
      , n = q.apply(void 0, e);
    if (n)
        return n;
    let t = dr(e);
    return t = t.map(r => r ?? 0),
    t.length === 0 ? 0 : Math.max.apply(Math, t)
}
function xa() {
    const e = Xt(...arguments);
    return e.length === 0 ? 0 : Math.max.apply(Math, e)
}
function Ri() {
    const e = A(arguments)
      , n = q.apply(void 0, e);
    if (n)
        return n;
    const t = dr(e);
    let r = D.median(t);
    return isNaN(r) && (r = R),
    r
}
function Ot() {
    const e = A(arguments)
      , n = q.apply(void 0, e);
    if (n)
        return n;
    const t = tn(e);
    return t.length === 0 ? 0 : Math.min.apply(Math, t)
}
function Ta() {
    const e = A(arguments)
      , n = q.apply(void 0, e);
    if (n)
        return n;
    let t = dr(e);
    return t = t.map(r => r ?? 0),
    t.length === 0 ? 0 : Math.min.apply(Math, t)
}
function wa() {
    const e = Xt(...arguments);
    return e.length === 0 ? 0 : Math.min.apply(Math, e)
}
const dn = {};
dn.MULT = function() {
    const e = U(A(arguments));
    if (e instanceof Error)
        return e;
    const n = e.length
      , t = {};
    let r = [], o = 0, s;
    for (let c = 0; c < n; c++)
        s = e[c],
        t[s] = t[s] ? t[s] + 1 : 1,
        t[s] > o && (o = t[s],
        r = []),
        t[s] === o && (r[r.length] = s);
    return r
}
;
dn.SNGL = function() {
    const e = U(A(arguments));
    return e instanceof Error ? e : dn.MULT(e).sort( (n, t) => n - t)[0]
}
;
const xr = {};
xr.DIST = (e, n, t, r) => (e = E(e),
n = E(n),
t = E(t),
S(e, n, t) ? k : r ? D.negbin.cdf(e, n, t) : D.negbin.pdf(e, n, t));
const qe = {};
qe.DIST = (e, n, t, r) => (e = E(e),
n = E(n),
t = E(t),
S(e, n, t) ? k : t <= 0 ? R : r ? D.normal.cdf(e, n, t) : D.normal.pdf(e, n, t));
qe.INV = (e, n, t) => (e = E(e),
n = E(n),
t = E(t),
S(e, n, t) ? k : D.normal.inv(e, n, t));
qe.S = {};
qe.S.DIST = (e, n) => (e = E(e),
e instanceof Error ? k : n ? D.normal.cdf(e, 0, 1) : D.normal.pdf(e, 0, 1));
qe.S.INV = e => (e = E(e),
e instanceof Error ? k : D.normal.inv(e, 0, 1));
function Ci(e, n) {
    if (n = U(A(n)),
    e = U(A(e)),
    S(n, e))
        return k;
    const t = D.mean(e)
      , r = D.mean(n)
      , o = e.length;
    let s = 0
      , c = 0
      , g = 0;
    for (let h = 0; h < o; h++)
        s += (e[h] - t) * (n[h] - r),
        c += Math.pow(e[h] - t, 2),
        g += Math.pow(n[h] - r, 2);
    return s / Math.sqrt(c * g)
}
const Se = {};
Se.EXC = (e, n) => {
    if (e = U(A(e)),
    n = E(n),
    S(e, n))
        return k;
    e = e.sort( (s, c) => s - c);
    const t = e.length;
    if (n < 1 / (t + 1) || n > 1 - 1 / (t + 1))
        return R;
    const r = n * (t + 1) - 1
      , o = Math.floor(r);
    return di(r === o ? e[r] : e[o] + (r - o) * (e[o + 1] - e[o]))
}
;
Se.INC = (e, n) => {
    if (e = U(A(e)),
    n = E(n),
    S(e, n))
        return k;
    e = e.sort( (s, c) => s - c);
    const t = e.length
      , r = n * (t - 1)
      , o = Math.floor(r);
    return di(r === o ? e[r] : e[o] + (r - o) * (e[o + 1] - e[o]))
}
;
const ct = {};
ct.EXC = (e, n, t) => {
    if (t = t === void 0 ? 3 : t,
    e = U(A(e)),
    n = E(n),
    t = E(t),
    S(e, n, t))
        return k;
    e = e.sort( (i, l) => i - l);
    const r = gr.apply(null, e)
      , o = e.length
      , s = r.length
      , c = Math.pow(10, t);
    let g = 0
      , h = !1
      , f = 0;
    for (; !h && f < s; )
        n === r[f] ? (g = (e.indexOf(r[f]) + 1) / (o + 1),
        h = !0) : n >= r[f] && (n < r[f + 1] || f === s - 1) && (g = (e.indexOf(r[f]) + 1 + (n - r[f]) / (r[f + 1] - r[f])) / (o + 1),
        h = !0),
        f++;
    return Math.floor(g * c) / c
}
;
ct.INC = (e, n, t) => {
    if (t = t === void 0 ? 3 : t,
    e = U(A(e)),
    n = E(n),
    t = E(t),
    S(e, n, t))
        return k;
    e = e.sort( (i, l) => i - l);
    const r = gr.apply(null, e)
      , o = e.length
      , s = r.length
      , c = Math.pow(10, t);
    let g = 0
      , h = !1
      , f = 0;
    for (; !h && f < s; )
        n === r[f] ? (g = e.indexOf(r[f]) / (o - 1),
        h = !0) : n >= r[f] && (n < r[f + 1] || f === s - 1) && (g = (e.indexOf(r[f]) + (n - r[f]) / (r[f + 1] - r[f])) / (o - 1),
        h = !0),
        f++;
    return Math.floor(g * c) / c
}
;
function Ia(e, n) {
    return e = E(e),
    n = E(n),
    S(e, n) ? k : Qe(e) / Qe(e - n)
}
function ka(e, n) {
    return e = E(e),
    n = E(n),
    S(e, n) ? k : Math.pow(e, n)
}
function Ra(e) {
    return e = E(e),
    e instanceof Error ? k : Math.exp(-.5 * e * e) / ta
}
const Tr = {};
Tr.DIST = (e, n, t) => (e = E(e),
n = E(n),
S(e, n) ? k : t ? D.poisson.cdf(e, n) : D.poisson.pdf(e, n));
function Ca(e, n, t, r) {
    if (t === void 0)
        return 0;
    if (r = r === void 0 ? t : r,
    e = U(A(e)),
    n = U(A(n)),
    t = E(t),
    r = E(r),
    S(e, n, t, r))
        return k;
    if (t === r)
        return e.indexOf(t) >= 0 ? n[e.indexOf(t)] : 0;
    const o = e.sort( (g, h) => g - h)
      , s = o.length;
    let c = 0;
    for (let g = 0; g < s; g++)
        o[g] >= t && o[g] <= r && (c += n[e.indexOf(o[g])]);
    return c
}
const hn = {};
hn.EXC = (e, n) => {
    if (e = U(tn(A(e))),
    n = E(n),
    S(e, n))
        return k;
    switch (n) {
    case 1:
        return Se.EXC(e, .25);
    case 2:
        return Se.EXC(e, .5);
    case 3:
        return Se.EXC(e, .75);
    default:
        return R
    }
}
;
hn.INC = (e, n) => {
    if (e = U(tn(A(e))),
    n = E(n),
    S(e, n))
        return k;
    switch (n) {
    case 1:
        return Se.INC(e, .25);
    case 2:
        return Se.INC(e, .5);
    case 3:
        return Se.INC(e, .75);
    default:
        return R
    }
}
;
const dt = {};
dt.AVG = (e, n, t) => {
    if (e = E(e),
    n = U(A(n)),
    S(e, n))
        return k;
    n = A(n),
    t = t || !1;
    const r = t ? (c, g) => c - g : (c, g) => g - c;
    n = n.sort(r);
    const o = n.length;
    let s = 0;
    for (let c = 0; c < o; c++)
        n[c] === e && s++;
    return s > 1 ? (2 * n.indexOf(e) + s + 1) / 2 : n.indexOf(e) + 1
}
;
dt.EQ = (e, n, t) => {
    if (e = E(e),
    n = U(A(n)),
    S(e, n))
        return k;
    t = t || !1;
    const r = t ? (o, s) => o - s : (o, s) => s - o;
    return n = n.sort(r),
    n.indexOf(e) + 1
}
;
function Oa(e, n) {
    if (arguments.length !== 2)
        return V;
    if (n < 0)
        return R;
    if (!(e instanceof Array) || typeof n != "number")
        return k;
    if (e.length !== 0)
        return D.row(e, n)
}
function Sa(e, n) {
    return e = U(A(e)),
    n = U(A(n)),
    S(e, n) ? k : Math.pow(Ci(e, n), 2)
}
function wr() {
    const e = U(A(arguments));
    if (e instanceof Error)
        return e;
    const n = D.mean(e)
      , t = e.length;
    let r = 0;
    for (let o = 0; o < t; o++)
        r += Math.pow(e[o] - n, 3);
    return t * r / ((t - 1) * (t - 2) * Math.pow(D.stdev(e, !0), 3))
}
wr.P = function() {
    const e = U(A(arguments));
    if (e instanceof Error)
        return e;
    const n = D.mean(e)
      , t = e.length;
    let r = 0
      , o = 0;
    for (let s = 0; s < t; s++)
        o += Math.pow(e[s] - n, 3),
        r += Math.pow(e[s] - n, 2);
    return o = o / t,
    r = r / t,
    o / Math.pow(r, 3 / 2)
}
;
function Aa(e, n) {
    if (e = U(A(e)),
    n = U(A(n)),
    S(e, n))
        return k;
    const t = D.mean(n)
      , r = D.mean(e)
      , o = n.length;
    let s = 0
      , c = 0;
    for (let g = 0; g < o; g++)
        s += (n[g] - t) * (e[g] - r),
        c += Math.pow(n[g] - t, 2);
    return s / c
}
function Oi(e, n) {
    return e = U(A(e)),
    n = E(n),
    S(e, n) ? e : e.sort( (t, r) => t - r)[n - 1]
}
function Pa(e, n, t) {
    return e = E(e),
    n = E(n),
    t = E(t),
    S(e, n, t) ? k : (e - n) / t
}
const ke = {};
ke.P = function() {
    const e = Te.P.apply(this, arguments);
    let n = Math.sqrt(e);
    return isNaN(n) && (n = R),
    n
}
;
ke.S = function() {
    const e = Te.S.apply(this, arguments);
    return Math.sqrt(e)
}
;
function La() {
    const e = Si.apply(this, arguments);
    return Math.sqrt(e)
}
function Ma() {
    const e = Ai.apply(this, arguments);
    let n = Math.sqrt(e);
    return isNaN(n) && (n = R),
    n
}
function Da(e, n) {
    if (e = U(A(e)),
    n = U(A(n)),
    S(e, n))
        return k;
    const t = D.mean(n)
      , r = D.mean(e)
      , o = n.length;
    let s = 0
      , c = 0
      , g = 0;
    for (let h = 0; h < o; h++)
        s += Math.pow(e[h] - r, 2),
        c += (n[h] - t) * (e[h] - r),
        g += Math.pow(n[h] - t, 2);
    return Math.sqrt((s - c * c / g) / (o - 2))
}
Re.DIST = (e, n, t) => t !== 1 && t !== 2 ? R : t === 1 ? Re.DIST.RT(e, n) : Re.DIST["2T"](e, n);
Re.DIST["2T"] = function(e, n) {
    return arguments.length !== 2 ? V : e < 0 || n < 1 ? R : typeof e != "number" || typeof n != "number" ? k : (1 - D.studentt.cdf(e, n)) * 2
}
;
Re.DIST.RT = function(e, n) {
    return arguments.length !== 2 ? V : e < 0 || n < 1 ? R : typeof e != "number" || typeof n != "number" ? k : 1 - D.studentt.cdf(e, n)
}
;
Re.INV = (e, n) => (e = E(e),
n = E(n),
S(e, n) ? k : D.studentt.inv(e, n));
Re.INV["2T"] = (e, n) => (e = E(e),
n = E(n),
e <= 0 || e > 1 || n < 1 ? R : S(e, n) ? k : Math.abs(D.studentt.inv(e / 2, n)));
Re.TEST = (e, n) => {
    if (e = U(A(e)),
    n = U(A(n)),
    S(e, n))
        return k;
    const t = D.mean(e)
      , r = D.mean(n);
    let o = 0, s = 0, c;
    for (c = 0; c < e.length; c++)
        o += Math.pow(e[c] - t, 2);
    for (c = 0; c < n.length; c++)
        s += Math.pow(n[c] - r, 2);
    o = o / (e.length - 1),
    s = s / (n.length - 1);
    const g = Math.abs(t - r) / Math.sqrt(o / e.length + s / n.length);
    return Re.DIST["2T"](g, e.length + n.length - 2)
}
;
function Fa(e, n, t) {
    if (e = U(A(e)),
    n = U(A(n)),
    t = U(A(t)),
    S(e, n, t))
        return k;
    const r = Er(e, n)
      , o = r[0]
      , s = r[1]
      , c = [];
    return t.forEach(g => {
        c.push(o * g + s)
    }
    ),
    c
}
function Ja(e, n) {
    if (e = U(A(e)),
    n = E(n),
    S(e, n))
        return k;
    const t = gn(e.length * n, 2) / 2;
    return D.mean(hu(re(e.sort( (r, o) => r - o), t), t))
}
const Te = {};
Te.P = function() {
    const e = tn(A(arguments))
      , n = e.length;
    let t = 0;
    const r = cn(e);
    let o;
    for (let s = 0; s < n; s++)
        t += Math.pow(e[s] - r, 2);
    return o = t / n,
    isNaN(o) && (o = R),
    o
}
;
Te.S = function() {
    const e = tn(A(arguments))
      , n = e.length;
    let t = 0;
    const r = cn(e);
    for (let o = 0; o < n; o++)
        t += Math.pow(e[o] - r, 2);
    return t / (n - 1)
}
;
function Si() {
    const e = A(arguments)
      , n = e.length;
    let t = 0
      , r = 0;
    const o = pr(e);
    for (let s = 0; s < n; s++) {
        const c = e[s];
        typeof c == "number" ? t += Math.pow(c - o, 2) : c === !0 ? t += Math.pow(1 - o, 2) : t += Math.pow(0 - o, 2),
        c !== null && r++
    }
    return t / (r - 1)
}
function Ai() {
    const e = A(arguments)
      , n = e.length;
    let t = 0
      , r = 0;
    const o = pr(e);
    let s;
    for (let c = 0; c < n; c++) {
        const g = e[c];
        typeof g == "number" ? t += Math.pow(g - o, 2) : g === !0 ? t += Math.pow(1 - o, 2) : t += Math.pow(0 - o, 2),
        g !== null && r++
    }
    return s = t / r,
    isNaN(s) && (s = R),
    s
}
const Ir = {};
Ir.DIST = (e, n, t, r) => (e = E(e),
n = E(n),
t = E(t),
S(e, n, t) ? k : r ? 1 - Math.exp(-Math.pow(e / t, n)) : Math.pow(e, n - 1) * Math.exp(-Math.pow(e / t, n)) * n / Math.pow(t, n));
const kr = {};
kr.TEST = (e, n, t) => {
    if (e = U(A(e)),
    n = E(n),
    S(e, n))
        return k;
    t = t || ke.S(e);
    const r = e.length;
    return 1 - qe.S.DIST((cn(e) - n) / (t / Math.sqrt(r)), !0)
}
;
function Ua(e) {
    return e = E(e),
    e instanceof Error ? e : Math.abs(e)
}
function Ba(e) {
    if (e = E(e),
    e instanceof Error)
        return e;
    let n = Math.acos(e);
    return isNaN(n) && (n = R),
    n
}
function Wa(e) {
    if (e = E(e),
    e instanceof Error)
        return e;
    let n = Math.log(e + Math.sqrt(e * e - 1));
    return isNaN(n) && (n = R),
    n
}
function Xa(e) {
    return e = E(e),
    e instanceof Error ? e : Math.atan(1 / e)
}
function Va(e) {
    if (e = E(e),
    e instanceof Error)
        return e;
    let n = .5 * Math.log((e + 1) / (e - 1));
    return isNaN(n) && (n = R),
    n
}
function Ha(e, n, t, r) {
    if (e = E(e),
    n = E(e),
    S(e, n))
        return k;
    switch (e) {
    case 1:
        return cn(t);
    case 2:
        return st(t);
    case 3:
        return lt(t);
    case 4:
        return Ct(t);
    case 5:
        return Ot(t);
    case 6:
        return St(t);
    case 7:
        return ke.S(t);
    case 8:
        return ke.P(t);
    case 9:
        return en(t);
    case 10:
        return Te.S(t);
    case 11:
        return Te.P(t);
    case 12:
        return Ri(t);
    case 13:
        return dn.SNGL(t);
    case 14:
        return ki(t, r);
    case 15:
        return Oi(t, r);
    case 16:
        return Se.INC(t, r);
    case 17:
        return hn.INC(t, r);
    case 18:
        return Se.EXC(t, r);
    case 19:
        return hn.EXC(t, r)
    }
}
function qa(e) {
    if (e == null)
        return 0;
    if (e instanceof Error)
        return e;
    if (!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(e))
        return k;
    let n = 0;
    return e.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, t => {
        n += {
            M: 1e3,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        }[t]
    }
    ),
    n
}
function za(e) {
    if (e = E(e),
    e instanceof Error)
        return e;
    let n = Math.asin(e);
    return isNaN(n) && (n = R),
    n
}
function Ga(e) {
    return e = E(e),
    e instanceof Error ? e : Math.log(e + Math.sqrt(e * e + 1))
}
function ba(e) {
    return e = E(e),
    e instanceof Error ? e : Math.atan(e)
}
function Ya(e, n) {
    e = E(e),
    n = E(n);
    const t = q(e, n);
    return t || Math.atan2(e, n)
}
function $a(e) {
    if (e = E(e),
    e instanceof Error)
        return e;
    let n = Math.log((1 + e) / (1 - e)) / 2;
    return isNaN(n) && (n = R),
    n
}
function Za(e, n, t) {
    e = E(e),
    n = E(n),
    t = E(t);
    const r = q(e, n, t);
    if (r)
        return r;
    if (n === 0)
        return R;
    const o = e.toString(n);
    return new Array(Math.max(t + 1 - o.length, 0)).join("0") + o
}
function on(e, n) {
    e = E(e),
    n = E(n);
    const t = q(e, n);
    return t || (n === 0 ? 0 : e > 0 && n < 0 ? R : Math.ceil(e / n) * n)
}
on.MATH = (e, n, t=0) => {
    n === void 0 && (n = e > 0 ? 1 : -1),
    e = E(e),
    n = E(n),
    t = E(t);
    const r = q(e, n, t);
    return r || (n === 0 ? 0 : (n = Math.abs(n),
    t === 0 || e > 0 ? Math.ceil(e / n) * n : Math.floor(e / n) * n))
}
;
on.PRECISE = (e, n) => on.MATH(e, n);
function bn(e, n) {
    e = E(e),
    n = E(n);
    const t = q(e, n);
    return t || (e < n ? R : Qe(e) / (Qe(n) * Qe(e - n)))
}
function Ka(e, n) {
    e = E(e),
    n = E(n);
    const t = q(e, n);
    return t || (e < n ? R : e === 0 && n === 0 ? 1 : bn(e + n - 1, e - 1))
}
function Qa(e) {
    return e = E(e),
    e instanceof Error ? e : Math.cos(e)
}
function _a(e) {
    return e = E(e),
    e instanceof Error ? e : (Math.exp(e) + Math.exp(-e)) / 2
}
function ja(e) {
    return e = E(e),
    e instanceof Error ? e : e === 0 ? pe : 1 / Math.tan(e)
}
function ec(e) {
    if (e = E(e),
    e instanceof Error)
        return e;
    if (e === 0)
        return pe;
    const n = Math.exp(2 * e);
    return (n + 1) / (n - 1)
}
function nc(e) {
    return e = E(e),
    e instanceof Error ? e : e === 0 ? pe : 1 / Math.sin(e)
}
function tc(e) {
    return e = E(e),
    e instanceof Error ? e : e === 0 ? pe : 2 / (Math.exp(e) - Math.exp(-e))
}
function rc(e, n) {
    if (arguments.length < 2)
        return V;
    e = e || "0",
    n = E(n);
    const t = q(e, n);
    if (t)
        return t;
    if (n === 0)
        return R;
    const r = parseInt(e, n);
    return isNaN(r) ? R : r
}
function oc(e) {
    return e = E(e),
    e instanceof Error ? e : e * 180 / Math.PI
}
function ic(e) {
    return e = E(e),
    e instanceof Error ? e : on.MATH(e, -2, -1)
}
function sc(e) {
    return arguments.length < 1 ? V : arguments.length > 1 ? cr : (e = E(e),
    e instanceof Error || (e = Math.exp(e)),
    e)
}
const pt = [];
function Qe(e) {
    if (e = E(e),
    e instanceof Error)
        return e;
    const n = Math.floor(e);
    return n === 0 || n === 1 ? 1 : (pt[n] > 0 || (pt[n] = Qe(n - 1) * n),
    pt[n])
}
function Pi(e) {
    if (e = E(e),
    e instanceof Error)
        return e;
    const n = Math.floor(e);
    return n <= 0 ? 1 : n * Pi(n - 2)
}
function gn(e, n) {
    e = E(e),
    n = E(n);
    const t = q(e, n);
    return t || (n ? e > 0 && n < 0 ? R : Math.floor(e / n) * n : pe)
}
gn.MATH = (e, n=1, t=0) => {
    e = E(e),
    n = E(n),
    t = E(t);
    const r = q(e, n, t);
    return r || (n === 0 ? 0 : (n = Math.abs(n),
    t === 0 || e > 0 ? Math.floor(e / n) * n : Math.ceil(e / n) * n))
}
;
gn.PRECISE = (e, n) => gn.MATH(e, n);
function lc() {
    const e = U(A(arguments));
    if (e instanceof Error)
        return e;
    const n = e.length
      , t = e[0];
    let r = t < 0 ? -t : t;
    for (let o = 1; o < n; o++) {
        const s = e[o];
        let c = s < 0 ? -s : s;
        for (; r && c; )
            r > c ? r %= c : c %= r;
        r += c
    }
    return r
}
function fc(e) {
    return e = E(e),
    e instanceof Error ? e : Math.floor(e)
}
const uc = {
    CEILING: on
};
function ac() {
    const e = U(A(arguments));
    if (e instanceof Error)
        return e;
    for (var n, t, r, o, s = 1; (r = e.pop()) !== void 0; ) {
        if (r === 0)
            return 0;
        for (; r > 1; ) {
            if (r % 2) {
                for (n = 3,
                t = Math.floor(Math.sqrt(r)); n <= t && r % n; n += 2)
                    ;
                o = n <= t ? n : r
            } else
                o = 2;
            for (r /= o,
            s *= o,
            n = e.length; n; e[--n] % o === 0 && (e[n] /= o) === 1 && e.splice(n, 1))
                ;
        }
    }
    return s
}
function cc(e) {
    return e = E(e),
    e instanceof Error ? e : e === 0 ? R : Math.log(e)
}
function dc(e, n) {
    e = E(e),
    n = n ? E(n) : 10;
    const t = q(e, n);
    return t || (e === 0 || n === 0 ? R : Math.log(e) / Math.log(n))
}
function hc(e) {
    return e = E(e),
    e instanceof Error ? e : e === 0 ? R : Math.log(e) / Math.log(10)
}
function gc(e, n) {
    return !Array.isArray(e) || !Array.isArray(n) || e.some(r => !r.length) || n.some(r => !r.length) || rr(e).some(r => typeof r != "number") || rr(n).some(r => typeof r != "number") || e[0].length !== n.length ? k : Array(e.length).fill(0).map( () => Array(n[0].length).fill(0)).map( (r, o) => r.map( (s, c) => e[o].reduce( (g, h, f) => g + h * n[f][c], 0)))
}
function pc(e, n) {
    e = E(e),
    n = E(n);
    const t = q(e, n);
    if (t)
        return t;
    if (n === 0)
        return pe;
    let r = Math.abs(e % n);
    return r = e < 0 ? n - r : r,
    n > 0 ? r : -r
}
function mc(e, n) {
    e = E(e),
    n = E(n);
    const t = q(e, n);
    return t || (e * n === 0 ? 0 : e * n < 0 ? R : Math.round(e / n) * n)
}
function vc() {
    const e = U(A(arguments));
    if (e instanceof Error)
        return e;
    let n = 0
      , t = 1;
    for (let r = 0; r < e.length; r++)
        n += e[r],
        t *= Qe(e[r]);
    return Qe(n) / t
}
function yc(e) {
    return arguments.length > 1 ? V : (e = parseInt(e),
    !e || e <= 0 ? k : Array(e).fill(0).map( () => Array(e).fill(0)).map( (n, t) => (n[t] = 1,
    n)))
}
function Nc(e) {
    if (e = E(e),
    e instanceof Error)
        return e;
    let n = Math.ceil(Math.abs(e));
    return n = n & 1 ? n : n + 1,
    e >= 0 ? n : -n
}
function Ec() {
    return Math.PI
}
function Li(e, n) {
    e = E(e),
    n = E(n);
    const t = q(e, n);
    if (t)
        return t;
    if (e === 0 && n === 0)
        return R;
    const r = Math.pow(e, n);
    return isNaN(r) ? R : r
}
function St() {
    const n = A(arguments).filter(o => o != null);
    if (n.length === 0)
        return 0;
    const t = U(n);
    if (t instanceof Error)
        return t;
    let r = 1;
    for (let o = 0; o < t.length; o++)
        r *= t[o];
    return r
}
function xc(e, n) {
    e = E(e),
    n = E(n);
    const t = q(e, n);
    return t || parseInt(e / n, 10)
}
function Tc(e) {
    return e = E(e),
    e instanceof Error ? e : e * Math.PI / 180
}
function wc() {
    return Math.random()
}
function Ic(e, n) {
    e = E(e),
    n = E(n);
    const t = q(e, n);
    return t || e + Math.ceil((n - e + 1) * Math.random()) - 1
}
function kc(e) {
    if (e = E(e),
    e instanceof Error)
        return e;
    const n = String(e).split("")
      , t = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let r = ""
      , o = 3;
    for (; o--; )
        r = (t[+n.pop() + o * 10] || "") + r;
    return new Array(+n.join("") + 1).join("M") + r
}
function Mi(e, n) {
    e = E(e),
    n = E(n);
    const t = q(e, n);
    return t || +(Math.round(+(e + "e" + n)) + "e" + n * -1)
}
function Rc(e, n) {
    e = E(e),
    n = E(n);
    const t = q(e, n);
    return t || (e > 0 ? 1 : -1) * Math.floor(Math.abs(e) * Math.pow(10, n)) / Math.pow(10, n)
}
function Cc(e, n) {
    e = E(e),
    n = E(n);
    const t = q(e, n);
    return t || (e > 0 ? 1 : -1) * Math.ceil(Math.abs(e) * Math.pow(10, n)) / Math.pow(10, n)
}
function Oc(e) {
    return e = E(e),
    e instanceof Error ? e : 1 / Math.cos(e)
}
function Sc(e) {
    return e = E(e),
    e instanceof Error ? e : 2 / (Math.exp(e) + Math.exp(-e))
}
function Ac(e, n, t, r) {
    if (e = E(e),
    n = E(n),
    t = E(t),
    r = U(r),
    S(e, n, t, r))
        return k;
    let o = r[0] * Math.pow(e, n);
    for (let s = 1; s < r.length; s++)
        o += r[s] * Math.pow(e, n + s * t);
    return o
}
function Pc(e) {
    return e = E(e),
    e instanceof Error ? e : e < 0 ? -1 : e === 0 ? 0 : 1
}
function Lc(e) {
    return e = E(e),
    e instanceof Error ? e : Math.sin(e)
}
function Mc(e) {
    return e = E(e),
    e instanceof Error ? e : (Math.exp(e) - Math.exp(-e)) / 2
}
function Dc(e) {
    return e = E(e),
    e instanceof Error ? e : e < 0 ? R : Math.sqrt(e)
}
function Fc(e) {
    return e = E(e),
    e instanceof Error ? e : Math.sqrt(e * Math.PI)
}
function Jc(e, n) {
    if (e = E(e),
    e instanceof Error)
        return e;
    switch (e) {
    case 1:
        return cn(n);
    case 2:
        return st(n);
    case 3:
        return lt(n);
    case 4:
        return Ct(n);
    case 5:
        return Ot(n);
    case 6:
        return St(n);
    case 7:
        return ke.S(n);
    case 8:
        return ke.P(n);
    case 9:
        return en(n);
    case 10:
        return Te.S(n);
    case 11:
        return Te.P(n);
    case 101:
        return cn(n);
    case 102:
        return st(n);
    case 103:
        return lt(n);
    case 104:
        return Ct(n);
    case 105:
        return Ot(n);
    case 106:
        return St(n);
    case 107:
        return ke.S(n);
    case 108:
        return ke.P(n);
    case 109:
        return en(n);
    case 110:
        return Te.S(n);
    case 111:
        return Te.P(n)
    }
}
function en() {
    let e = 0;
    return ve(Bt(arguments), n => {
        if (e instanceof Error)
            return !1;
        if (n instanceof Error)
            e = n;
        else if (typeof n == "number")
            e += n;
        else if (typeof n == "string") {
            const t = parseFloat(n);
            !isNaN(t) && (e += t)
        } else if (Array.isArray(n)) {
            const t = en.apply(null, n);
            t instanceof Error ? e = t : e += t
        }
    }
    ),
    e
}
function Uc(e, n, t) {
    if (e = A(e),
    t = t ? A(t) : e,
    e instanceof Error)
        return e;
    if (n == null || n instanceof Error)
        return 0;
    let r = 0;
    const o = n === "*"
      , s = o ? null : $n(n + "");
    for (let c = 0; c < e.length; c++) {
        const g = e[c]
          , h = t[c];
        if (o)
            r += g;
        else {
            const f = [Ke(g, ln)].concat(s);
            r += Zn(f) ? h : 0
        }
    }
    return r
}
function Bc() {
    const e = Xt(...arguments);
    return en(e)
}
function Wc() {
    if (!arguments || arguments.length === 0)
        return k;
    const e = arguments.length + 1;
    let n = 0, t, r, o, s;
    for (let c = 0; c < arguments[0].length; c++)
        if (arguments[0][c]instanceof Array)
            for (let g = 0; g < arguments[0][c].length; g++) {
                for (t = 1,
                r = 1; r < e; r++) {
                    const h = arguments[r - 1][c][g];
                    if (h instanceof Error)
                        return h;
                    if (s = E(h),
                    s instanceof Error)
                        return s;
                    t *= s
                }
                n += t
            }
        else {
            for (t = 1,
            r = 1; r < e; r++) {
                const g = arguments[r - 1][c];
                if (g instanceof Error)
                    return g;
                if (o = E(g),
                o instanceof Error)
                    return o;
                t *= o
            }
            n += t
        }
    return n
}
function Xc() {
    const e = U(A(arguments));
    if (e instanceof Error)
        return e;
    let n = 0;
    const t = e.length;
    for (let r = 0; r < t; r++)
        n += Ht(e[r]) ? e[r] * e[r] : 0;
    return n
}
function Vc(e, n) {
    if (e = U(A(e)),
    n = U(A(n)),
    S(e, n))
        return k;
    let t = 0;
    for (let r = 0; r < e.length; r++)
        t += e[r] * e[r] - n[r] * n[r];
    return t
}
function Hc(e, n) {
    if (e = U(A(e)),
    n = U(A(n)),
    S(e, n))
        return k;
    let t = 0;
    e = U(A(e)),
    n = U(A(n));
    for (let r = 0; r < e.length; r++)
        t += e[r] * e[r] + n[r] * n[r];
    return t
}
function qc(e, n) {
    if (e = U(A(e)),
    n = U(A(n)),
    S(e, n))
        return k;
    let t = 0;
    e = A(e),
    n = A(n);
    for (let r = 0; r < e.length; r++)
        t += Math.pow(e[r] - n[r], 2);
    return t
}
function zc(e) {
    return e = E(e),
    e instanceof Error ? e : Math.tan(e)
}
function Gc(e) {
    if (e = E(e),
    e instanceof Error)
        return e;
    const n = Math.exp(2 * e);
    return (n - 1) / (n + 1)
}
function bc(e, n) {
    e = E(e),
    n = E(n);
    const t = q(e, n);
    return t || (e > 0 ? 1 : -1) * Math.floor(Math.abs(e) * Math.pow(10, n)) / Math.pow(10, n)
}
function Yc(e, n) {
    if (arguments.length !== 2)
        return V;
    e = E(e),
    n = E(n);
    const t = q(e, n);
    return t || e + n
}
function $c(e, n) {
    if (arguments.length !== 2)
        return V;
    e = E(e),
    n = E(n);
    const t = q(e, n);
    return t || (n === 0 ? pe : e / n)
}
function Zc(e, n) {
    return arguments.length !== 2 ? V : e instanceof Error ? e : n instanceof Error ? n : (e === null && (e = void 0),
    n === null && (n = void 0),
    e === n)
}
function Kc(e, n) {
    if (arguments.length !== 2)
        return V;
    if (e instanceof Error)
        return e;
    if (n instanceof Error)
        return n;
    Wt(e, n) ? (e = le(e),
    n = le(n)) : (e = E(e),
    n = E(n));
    const t = q(e, n);
    return t || e > n
}
function Qc(e, n) {
    if (arguments.length !== 2)
        return V;
    Wt(e, n) ? (e = le(e),
    n = le(n)) : (e = E(e),
    n = E(n));
    const t = q(e, n);
    return t || e >= n
}
function _c(e, n) {
    if (arguments.length !== 2)
        return V;
    Wt(e, n) ? (e = le(e),
    n = le(n)) : (e = E(e),
    n = E(n));
    const t = q(e, n);
    return t || e < n
}
function jc(e, n) {
    if (arguments.length !== 2)
        return V;
    Wt(e, n) ? (e = le(e),
    n = le(n)) : (e = E(e),
    n = E(n));
    const t = q(e, n);
    return t || e <= n
}
function ed(e, n) {
    if (arguments.length !== 2)
        return V;
    e = E(e),
    n = E(n);
    const t = q(e, n);
    return t || e - n
}
function nd(e, n) {
    if (arguments.length !== 2)
        return V;
    e = E(e),
    n = E(n);
    const t = q(e, n);
    return t || e * n
}
function td(e, n) {
    return arguments.length !== 2 ? V : e instanceof Error ? e : n instanceof Error ? n : (e === null && (e = void 0),
    n === null && (n = void 0),
    e !== n)
}
function rd(e, n) {
    return arguments.length !== 2 ? V : Li(e, n)
}
var od = Object.freeze({
    __proto__: null,
    ADD: Yc,
    DIVIDE: $c,
    EQ: Zc,
    GT: Kc,
    GTE: Qc,
    LT: _c,
    LTE: jc,
    MINUS: ed,
    MULTIPLY: nd,
    NE: td,
    POW: rd
});
const id = [void 0, 0, 1, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, 1, 2, 3, 4, 5, 6, 0]
  , sd = [[], [1, 2, 3, 4, 5, 6, 7], [7, 1, 2, 3, 4, 5, 6], [6, 0, 1, 2, 3, 4, 5], [], [], [], [], [], [], [], [7, 1, 2, 3, 4, 5, 6], [6, 7, 1, 2, 3, 4, 5], [5, 6, 7, 1, 2, 3, 4], [4, 5, 6, 7, 1, 2, 3], [3, 4, 5, 6, 7, 1, 2], [2, 3, 4, 5, 6, 7, 1], [1, 2, 3, 4, 5, 6, 7]]
  , At = [[], [6, 0], [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], void 0, void 0, void 0, [0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6]];
function ld(e, n, t) {
    let r;
    return e = E(e),
    n = E(n),
    t = E(t),
    S(e, n, t) ? r = k : (r = new Date(e,n - 1,t),
    r.getFullYear() < 0 && (r = R)),
    nn ? je(r) : r
}
function rn(e, n, t) {
    t = t.toUpperCase(),
    e = b(e),
    n = b(n);
    const r = e.getFullYear()
      , o = e.getMonth()
      , s = e.getDate()
      , c = n.getFullYear()
      , g = n.getMonth()
      , h = n.getDate();
    let f;
    switch (t) {
    case "Y":
        f = Math.floor(Rr(e, n));
        break;
    case "D":
        f = fn(n, e);
        break;
    case "M":
        f = g - o + 12 * (c - r),
        h < s && f--;
        break;
    case "MD":
        s <= h ? f = h - s : (g === 0 ? (e.setFullYear(c - 1),
        e.setMonth(12)) : (e.setFullYear(c),
        e.setMonth(g - 1)),
        f = fn(n, e));
        break;
    case "YM":
        f = g - o + 12 * (c - r),
        h < s && f--,
        f = f % 12;
        break;
    case "YD":
        g > o || g === o && h < s ? e.setFullYear(c) : e.setFullYear(c - 1),
        f = fn(n, e);
        break
    }
    return f
}
function fd(e) {
    if (typeof e != "string")
        return k;
    const n = Date.parse(e);
    if (isNaN(n))
        return k;
    const t = new Date(e);
    return nn ? je(t) : t
}
function ud(e) {
    const n = b(e);
    return n instanceof Error ? n : n.getDate()
}
function Pt(e) {
    const n = new Date(e);
    return n.setHours(0, 0, 0, 0),
    n
}
function fn(e, n) {
    return e = b(e),
    n = b(n),
    e instanceof Error ? e : n instanceof Error ? n : je(Pt(e)) - je(Pt(n))
}
function sn(e, n, t) {
    if (t = hr(t || "false"),
    e = b(e),
    n = b(n),
    e instanceof Error)
        return e;
    if (n instanceof Error)
        return n;
    if (t instanceof Error)
        return t;
    const r = e.getMonth();
    let o = n.getMonth(), s, c;
    if (t)
        s = e.getDate() === 31 ? 30 : e.getDate(),
        c = n.getDate() === 31 ? 30 : n.getDate();
    else {
        const g = new Date(e.getFullYear(),r + 1,0).getDate()
          , h = new Date(n.getFullYear(),o + 1,0).getDate();
        s = e.getDate() === g ? 30 : e.getDate(),
        n.getDate() === h ? s < 30 ? (o++,
        c = 1) : c = 30 : c = n.getDate()
    }
    return 360 * (n.getFullYear() - e.getFullYear()) + 30 * (o - r) + (c - s)
}
function ad(e, n) {
    if (e = b(e),
    e instanceof Error)
        return e;
    if (isNaN(n))
        return k;
    let t = e.getDate();
    e.setDate(1),
    n = parseInt(n, 10),
    e.setMonth(e.getMonth() + n);
    let r = e.getMonth();
    if (t > 28) {
        let o = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][r]
          , s = e.getFullYear();
        r === 1 && (s % 4 === 0 && s % 100 !== 0 || s % 400 === 0) && (o = 29),
        t = Math.min(t, o)
    }
    return e.setDate(t),
    nn ? je(e) : e
}
function cd(e, n) {
    if (e = b(e),
    e instanceof Error)
        return e;
    if (isNaN(n))
        return k;
    n = parseInt(n, 10);
    const t = new Date(e.getFullYear(),e.getMonth() + n + 1,0);
    return nn ? je(t) : t
}
function dd(e) {
    return e = b(e),
    e instanceof Error ? e : e.getHours()
}
function Di(e) {
    if (e = b(e),
    e instanceof Error)
        return e;
    e = Pt(e),
    e.setDate(e.getDate() + 4 - (e.getDay() || 7));
    const n = new Date(e.getFullYear(),0,1);
    return Math.ceil(((e - n) / 864e5 + 1) / 7)
}
function hd(e) {
    return e = b(e),
    e instanceof Error ? e : e.getMinutes()
}
function gd(e) {
    return e = b(e),
    e instanceof Error ? e : e.getMonth() + 1
}
function qt(e, n, t) {
    return qt.INTL(e, n, 1, t)
}
qt.INTL = (e, n, t, r) => {
    if (e = b(e),
    e instanceof Error)
        return e;
    if (n = b(n),
    n instanceof Error)
        return n;
    let o = !1;
    const s = []
      , c = [1, 2, 3, 4, 5, 6, 0]
      , g = new RegExp("^[0|1]{7}$");
    if (t === void 0)
        t = At[1];
    else if (typeof t == "string" && g.test(t)) {
        o = !0,
        t = t.split("");
        for (let l = 0; l < t.length; l++)
            t[l] === "1" && s.push(c[l])
    } else
        t = At[t];
    if (!(t instanceof Array))
        return k;
    r === void 0 ? r = [] : r instanceof Array || (r = [r]);
    for (let l = 0; l < r.length; l++) {
        const u = b(r[l]);
        if (u instanceof Error)
            return u;
        r[l] = u
    }
    const h = Math.round((n - e) / (1e3 * 60 * 60 * 24)) + 1;
    let f = h;
    const i = e;
    for (let l = 0; l < h; l++) {
        const u = new Date().getTimezoneOffset() > 0 ? i.getUTCDay() : i.getDay();
        let a = o ? s.includes(u) : u === t[0] || u === t[1];
        for (let p = 0; p < r.length; p++) {
            const d = r[p];
            if (d.getDate() === i.getDate() && d.getMonth() === i.getMonth() && d.getFullYear() === i.getFullYear()) {
                a = !0;
                break
            }
        }
        a && f--,
        i.setDate(i.getDate() + 1)
    }
    return f
}
;
function pd() {
    return nn ? je(new Date) : new Date
}
function md(e) {
    return e = b(e),
    e instanceof Error ? e : e.getSeconds()
}
function vd(e, n, t) {
    return e = E(e),
    n = E(n),
    t = E(t),
    S(e, n, t) ? k : e < 0 || n < 0 || t < 0 ? R : (3600 * e + 60 * n + t) / 86400
}
function yd(e) {
    return e = b(e),
    e instanceof Error ? e : (3600 * e.getHours() + 60 * e.getMinutes() + e.getSeconds()) / 86400
}
function Nd() {
    const e = Pt(new Date);
    return nn ? je(e) : e
}
function Ed(e, n) {
    if (e = b(e),
    e instanceof Error)
        return e;
    n === void 0 && (n = 1);
    const t = e.getDay();
    return sd[n][t]
}
function xd(e, n) {
    if (e = b(e),
    e instanceof Error)
        return e;
    if (n === void 0 && (n = 1),
    n === 21)
        return Di(e);
    const t = id[n];
    let r = new Date(e.getFullYear(),0,1);
    const o = r.getDay() < t ? 1 : 0;
    return r -= Math.abs(r.getDay() - t) * 24 * 60 * 60 * 1e3,
    Math.floor((e - r) / (1e3 * 60 * 60 * 24) / 7 + 1) + o
}
function zt(e, n, t) {
    return zt.INTL(e, n, 1, t)
}
zt.INTL = (e, n, t, r) => {
    if (e = b(e),
    e instanceof Error)
        return e;
    if (n = E(n),
    n instanceof Error)
        return n;
    if (t === void 0 ? t = At[1] : t = At[t],
    !(t instanceof Array))
        return k;
    r === void 0 ? r = [] : r instanceof Array || (r = [r]);
    for (let c = 0; c < r.length; c++) {
        const g = b(r[c]);
        if (g instanceof Error)
            return g;
        r[c] = g
    }
    let o = 0;
    const s = Math.sign(n);
    for (; o < n * s; ) {
        e.setDate(e.getDate() + s);
        const c = e.getDay();
        if (!(c === t[0] || c === t[1])) {
            for (let g = 0; g < r.length; g++) {
                const h = r[g];
                if (h.getDate() === e.getDate() && h.getMonth() === e.getMonth() && h.getFullYear() === e.getFullYear()) {
                    o--;
                    break
                }
            }
            o++
        }
    }
    return e.getFullYear() < 1900 ? k : e
}
;
function Td(e) {
    return e = b(e),
    e instanceof Error ? e : e.getFullYear()
}
function Kt(e) {
    return new Date(e,1,29).getMonth() === 1
}
function mt(e, n) {
    return Math.ceil((n - e) / 1e3 / 60 / 60 / 24)
}
function Rr(e, n, t) {
    if (e = b(e),
    e instanceof Error)
        return e;
    if (n = b(n),
    n instanceof Error)
        return n;
    t = t || 0;
    let r = e.getDate();
    const o = e.getMonth() + 1
      , s = e.getFullYear();
    let c = n.getDate();
    const g = n.getMonth() + 1
      , h = n.getFullYear();
    switch (t) {
    case 0:
        return r === 31 && c === 31 ? (r = 30,
        c = 30) : r === 31 ? r = 30 : r === 30 && c === 31 && (c = 30),
        (c + g * 30 + h * 360 - (r + o * 30 + s * 360)) / 360;
    case 1:
        {
            const f = (p, d) => {
                const m = p.getFullYear()
                  , N = new Date(m,2,1);
                if (Kt(m) && p < N && d >= N)
                    return !0;
                const T = d.getFullYear()
                  , v = new Date(T,2,1);
                return Kt(T) && d >= v && p < v
            }
            ;
            let i = 365;
            if (s === h || s + 1 === h && (o > g || o === g && r >= c))
                return (s === h && Kt(s) || f(e, n) || g === 1 && c === 29) && (i = 366),
                mt(e, n) / i;
            const l = h - s + 1
              , a = (new Date(h + 1,0,1) - new Date(s,0,1)) / 1e3 / 60 / 60 / 24 / l;
            return mt(e, n) / a
        }
    case 2:
        return mt(e, n) / 360;
    case 3:
        return mt(e, n) / 365;
    case 4:
        return (c + g * 30 + h * 360 - (r + o * 30 + s * 360)) / 360
    }
}
function Cr(e) {
    return /^[01]{1,10}$/.test(e)
}
function wd(e, n) {
    return e = E(e),
    n = E(n),
    S(e, n) ? k : Mt.besseli(e, n)
}
function Id(e, n) {
    return e = E(e),
    n = E(n),
    S(e, n) ? k : Mt.besselj(e, n)
}
function kd(e, n) {
    return e = E(e),
    n = E(n),
    S(e, n) ? k : Mt.besselk(e, n)
}
function Rd(e, n) {
    return e = E(e),
    n = E(n),
    S(e, n) ? k : Mt.bessely(e, n)
}
function Cd(e) {
    if (!Cr(e))
        return R;
    const n = parseInt(e, 2)
      , t = e.toString();
    return t.length === 10 && t.substring(0, 1) === "1" ? parseInt(t.substring(1), 2) - 512 : n
}
function Od(e, n) {
    if (!Cr(e))
        return R;
    const t = e.toString();
    if (t.length === 10 && t.substring(0, 1) === "1")
        return (0xfffffffe00 + parseInt(t.substring(1), 2)).toString(16);
    const r = parseInt(e, 2).toString(16);
    return n === void 0 ? r : isNaN(n) ? k : n < 0 ? R : (n = Math.floor(n),
    n >= r.length ? Ae("0", n - r.length) + r : R)
}
function Sd(e, n) {
    if (!Cr(e))
        return R;
    const t = e.toString();
    if (t.length === 10 && t.substring(0, 1) === "1")
        return (1073741312 + parseInt(t.substring(1), 2)).toString(8);
    const r = parseInt(e, 2).toString(8);
    return n === void 0 ? r : isNaN(n) ? k : n < 0 ? R : (n = Math.floor(n),
    n >= r.length ? Ae("0", n - r.length) + r : R)
}
function Ad(e, n) {
    return e = E(e),
    n = E(n),
    S(e, n) ? k : e < 0 || n < 0 || Math.floor(e) !== e || Math.floor(n) !== n || e > 0xffffffffffff || n > 0xffffffffffff ? R : e & n
}
function Pd(e, n) {
    return e = E(e),
    n = E(n),
    S(e, n) ? k : e < 0 || Math.floor(e) !== e || e > 0xffffffffffff || Math.abs(n) > 53 ? R : n >= 0 ? e << n : e >> -n
}
function Ld(e, n) {
    return e = E(e),
    n = E(n),
    S(e, n) ? k : e < 0 || n < 0 || Math.floor(e) !== e || Math.floor(n) !== n || e > 0xffffffffffff || n > 0xffffffffffff ? R : e | n
}
function Md(e, n) {
    return e = E(e),
    n = E(n),
    S(e, n) ? k : e < 0 || Math.floor(e) !== e || e > 0xffffffffffff || Math.abs(n) > 53 ? R : n >= 0 ? e >> n : e << -n
}
function Dd(e, n) {
    return e = E(e),
    n = E(n),
    S(e, n) ? k : e < 0 || n < 0 || Math.floor(e) !== e || Math.floor(n) !== n || e > 0xffffffffffff || n > 0xffffffffffff ? R : e ^ n
}
function ye(e, n, t) {
    if (e = E(e),
    n = E(n),
    S(e, n))
        return e;
    if (t = t === void 0 ? "i" : t,
    t !== "i" && t !== "j")
        return k;
    if (e === 0 && n === 0)
        return 0;
    if (e === 0)
        return n === 1 ? t : n.toString() + t;
    if (n === 0)
        return e.toString();
    {
        const r = n > 0 ? "+" : "";
        return e.toString() + r + (n === 1 ? t : n.toString() + t)
    }
}
function Fd(e, n, t) {
    if (e = E(e),
    e instanceof Error)
        return e;
    const r = [["a.u. of action", "?", null, "action", !1, !1, 105457168181818e-48], ["a.u. of charge", "e", null, "electric_charge", !1, !1, 160217653141414e-33], ["a.u. of energy", "Eh", null, "energy", !1, !1, 435974417757576e-32], ["a.u. of length", "a?", null, "length", !1, !1, 529177210818182e-25], ["a.u. of mass", "m?", null, "mass", !1, !1, 910938261616162e-45], ["a.u. of time", "?/Eh", null, "time", !1, !1, 241888432650516e-31], ["admiralty knot", "admkn", null, "speed", !1, !0, .514773333], ["ampere", "A", null, "electric_current", !0, !1, 1], ["ampere per meter", "A/m", null, "magnetic_field_intensity", !0, !1, 1], ["ångström", "Å", ["ang"], "length", !1, !0, 1e-10], ["are", "ar", null, "area", !1, !0, 100], ["astronomical unit", "ua", null, "length", !1, !1, 149597870691667e-25], ["bar", "bar", null, "pressure", !1, !1, 1e5], ["barn", "b", null, "area", !1, !1, 1e-28], ["becquerel", "Bq", null, "radioactivity", !0, !1, 1], ["bit", "bit", ["b"], "information", !1, !0, 1], ["btu", "BTU", ["btu"], "energy", !1, !0, 1055.05585262], ["byte", "byte", null, "information", !1, !0, 8], ["candela", "cd", null, "luminous_intensity", !0, !1, 1], ["candela per square metre", "cd/m?", null, "luminance", !0, !1, 1], ["coulomb", "C", null, "electric_charge", !0, !1, 1], ["cubic ångström", "ang3", ["ang^3"], "volume", !1, !0, 1e-30], ["cubic foot", "ft3", ["ft^3"], "volume", !1, !0, .028316846592], ["cubic inch", "in3", ["in^3"], "volume", !1, !0, 16387064e-12], ["cubic light-year", "ly3", ["ly^3"], "volume", !1, !0, 846786664623715e-61], ["cubic metre", "m3", ["m^3"], "volume", !0, !0, 1], ["cubic mile", "mi3", ["mi^3"], "volume", !1, !0, 416818182544058e-5], ["cubic nautical mile", "Nmi3", ["Nmi^3"], "volume", !1, !0, 6352182208], ["cubic Pica", "Pica3", ["Picapt3", "Pica^3", "Picapt^3"], "volume", !1, !0, 758660370370369e-22], ["cubic yard", "yd3", ["yd^3"], "volume", !1, !0, .764554857984], ["cup", "cup", null, "volume", !1, !0, .0002365882365], ["dalton", "Da", ["u"], "mass", !1, !1, 166053886282828e-41], ["day", "d", ["day"], "time", !1, !0, 86400], ["degree", "°", null, "angle", !1, !1, .0174532925199433], ["degrees Rankine", "Rank", null, "temperature", !1, !0, .555555555555556], ["dyne", "dyn", ["dy"], "force", !1, !0, 1e-5], ["electronvolt", "eV", ["ev"], "energy", !1, !0, 1.60217656514141], ["ell", "ell", null, "length", !1, !0, 1.143], ["erg", "erg", ["e"], "energy", !1, !0, 1e-7], ["farad", "F", null, "electric_capacitance", !0, !1, 1], ["fluid ounce", "oz", null, "volume", !1, !0, 295735295625e-16], ["foot", "ft", null, "length", !1, !0, .3048], ["foot-pound", "flb", null, "energy", !1, !0, 1.3558179483314], ["gal", "Gal", null, "acceleration", !1, !1, .01], ["gallon", "gal", null, "volume", !1, !0, .003785411784], ["gauss", "G", ["ga"], "magnetic_flux_density", !1, !0, 1], ["grain", "grain", null, "mass", !1, !0, 647989e-10], ["gram", "g", null, "mass", !1, !0, .001], ["gray", "Gy", null, "absorbed_dose", !0, !1, 1], ["gross registered ton", "GRT", ["regton"], "volume", !1, !0, 2.8316846592], ["hectare", "ha", null, "area", !1, !0, 1e4], ["henry", "H", null, "inductance", !0, !1, 1], ["hertz", "Hz", null, "frequency", !0, !1, 1], ["horsepower", "HP", ["h"], "power", !1, !0, 745.69987158227], ["horsepower-hour", "HPh", ["hh", "hph"], "energy", !1, !0, 2684519538e-3], ["hour", "h", ["hr"], "time", !1, !0, 3600], ["imperial gallon (U.K.)", "uk_gal", null, "volume", !1, !0, .00454609], ["imperial hundredweight", "lcwt", ["uk_cwt", "hweight"], "mass", !1, !0, 50.802345], ["imperial quart (U.K)", "uk_qt", null, "volume", !1, !0, .0011365225], ["imperial ton", "brton", ["uk_ton", "LTON"], "mass", !1, !0, 1016.046909], ["inch", "in", null, "length", !1, !0, .0254], ["international acre", "uk_acre", null, "area", !1, !0, 4046.8564224], ["IT calorie", "cal", null, "energy", !1, !0, 4.1868], ["joule", "J", null, "energy", !0, !0, 1], ["katal", "kat", null, "catalytic_activity", !0, !1, 1], ["kelvin", "K", ["kel"], "temperature", !0, !0, 1], ["kilogram", "kg", null, "mass", !0, !0, 1], ["knot", "kn", null, "speed", !1, !0, .514444444444444], ["light-year", "ly", null, "length", !1, !0, 9460730472580800], ["litre", "L", ["l", "lt"], "volume", !1, !0, .001], ["lumen", "lm", null, "luminous_flux", !0, !1, 1], ["lux", "lx", null, "illuminance", !0, !1, 1], ["maxwell", "Mx", null, "magnetic_flux", !1, !1, 1e-18], ["measurement ton", "MTON", null, "volume", !1, !0, 1.13267386368], ["meter per hour", "m/h", ["m/hr"], "speed", !1, !0, .00027777777777778], ["meter per second", "m/s", ["m/sec"], "speed", !0, !0, 1], ["meter per second squared", "m?s??", null, "acceleration", !0, !1, 1], ["parsec", "pc", ["parsec"], "length", !1, !0, 0x6da012f958ee1c], ["meter squared per second", "m?/s", null, "kinematic_viscosity", !0, !1, 1], ["metre", "m", null, "length", !0, !0, 1], ["miles per hour", "mph", null, "speed", !1, !0, .44704], ["millimetre of mercury", "mmHg", null, "pressure", !1, !1, 133.322], ["minute", "?", null, "angle", !1, !1, .000290888208665722], ["minute", "min", ["mn"], "time", !1, !0, 60], ["modern teaspoon", "tspm", null, "volume", !1, !0, 5e-6], ["mole", "mol", null, "amount_of_substance", !0, !1, 1], ["morgen", "Morgen", null, "area", !1, !0, 2500], ["n.u. of action", "?", null, "action", !1, !1, 105457168181818e-48], ["n.u. of mass", "m?", null, "mass", !1, !1, 910938261616162e-45], ["n.u. of speed", "c?", null, "speed", !1, !1, 299792458], ["n.u. of time", "?/(me?c??)", null, "time", !1, !1, 128808866778687e-35], ["nautical mile", "M", ["Nmi"], "length", !1, !0, 1852], ["newton", "N", null, "force", !0, !0, 1], ["œrsted", "Oe ", null, "magnetic_field_intensity", !1, !1, 79.5774715459477], ["ohm", "Ω", null, "electric_resistance", !0, !1, 1], ["ounce mass", "ozm", null, "mass", !1, !0, .028349523125], ["pascal", "Pa", null, "pressure", !0, !1, 1], ["pascal second", "Pa?s", null, "dynamic_viscosity", !0, !1, 1], ["pferdestärke", "PS", null, "power", !1, !0, 735.49875], ["phot", "ph", null, "illuminance", !1, !1, 1e-4], ["pica (1/6 inch)", "pica", null, "length", !1, !0, .00035277777777778], ["pica (1/72 inch)", "Pica", ["Picapt"], "length", !1, !0, .00423333333333333], ["poise", "P", null, "dynamic_viscosity", !1, !1, .1], ["pond", "pond", null, "force", !1, !0, .00980665], ["pound force", "lbf", null, "force", !1, !0, 4.4482216152605], ["pound mass", "lbm", null, "mass", !1, !0, .45359237], ["quart", "qt", null, "volume", !1, !0, .000946352946], ["radian", "rad", null, "angle", !0, !1, 1], ["second", "?", null, "angle", !1, !1, 484813681109536e-20], ["second", "s", ["sec"], "time", !0, !0, 1], ["short hundredweight", "cwt", ["shweight"], "mass", !1, !0, 45.359237], ["siemens", "S", null, "electrical_conductance", !0, !1, 1], ["sievert", "Sv", null, "equivalent_dose", !0, !1, 1], ["slug", "sg", null, "mass", !1, !0, 14.59390294], ["square ångström", "ang2", ["ang^2"], "area", !1, !0, 1e-20], ["square foot", "ft2", ["ft^2"], "area", !1, !0, .09290304], ["square inch", "in2", ["in^2"], "area", !1, !0, 64516e-8], ["square light-year", "ly2", ["ly^2"], "area", !1, !0, 895054210748189e17], ["square meter", "m?", null, "area", !0, !0, 1], ["square mile", "mi2", ["mi^2"], "area", !1, !0, 2589988110336e-6], ["square nautical mile", "Nmi2", ["Nmi^2"], "area", !1, !0, 3429904], ["square Pica", "Pica2", ["Picapt2", "Pica^2", "Picapt^2"], "area", !1, !0, 1792111111111e-17], ["square yard", "yd2", ["yd^2"], "area", !1, !0, .83612736], ["statute mile", "mi", null, "length", !1, !0, 1609.344], ["steradian", "sr", null, "solid_angle", !0, !1, 1], ["stilb", "sb", null, "luminance", !1, !1, 1e-4], ["stokes", "St", null, "kinematic_viscosity", !1, !1, 1e-4], ["stone", "stone", null, "mass", !1, !0, 6.35029318], ["tablespoon", "tbs", null, "volume", !1, !0, 147868e-10], ["teaspoon", "tsp", null, "volume", !1, !0, 492892e-11], ["tesla", "T", null, "magnetic_flux_density", !0, !0, 1], ["thermodynamic calorie", "c", null, "energy", !1, !0, 4.184], ["ton", "ton", null, "mass", !1, !0, 907.18474], ["tonne", "t", null, "mass", !1, !1, 1e3], ["U.K. pint", "uk_pt", null, "volume", !1, !0, .00056826125], ["U.S. bushel", "bushel", null, "volume", !1, !0, .03523907], ["U.S. oil barrel", "barrel", null, "volume", !1, !0, .158987295], ["U.S. pint", "pt", ["us_pt"], "volume", !1, !0, .000473176473], ["U.S. survey mile", "survey_mi", null, "length", !1, !0, 1609.347219], ["U.S. survey/statute acre", "us_acre", null, "area", !1, !0, 4046.87261], ["volt", "V", null, "voltage", !0, !1, 1], ["watt", "W", null, "power", !0, !0, 1], ["watt-hour", "Wh", ["wh"], "energy", !1, !0, 3600], ["weber", "Wb", null, "magnetic_flux", !0, !1, 1], ["yard", "yd", null, "length", !1, !0, .9144], ["year", "yr", null, "time", !1, !0, 31557600]]
      , o = {
        Yi: ["yobi", 80, 12089258196146292e8, "Yi", "yotta"],
        Zi: ["zebi", 70, 11805916207174113e5, "Zi", "zetta"],
        Ei: ["exbi", 60, 1152921504606847e3, "Ei", "exa"],
        Pi: ["pebi", 50, 0x4000000000000, "Pi", "peta"],
        Ti: ["tebi", 40, 1099511627776, "Ti", "tera"],
        Gi: ["gibi", 30, 1073741824, "Gi", "giga"],
        Mi: ["mebi", 20, 1048576, "Mi", "mega"],
        ki: ["kibi", 10, 1024, "ki", "kilo"]
    }
      , s = {
        Y: ["yotta", 1e24, "Y"],
        Z: ["zetta", 1e21, "Z"],
        E: ["exa", 1e18, "E"],
        P: ["peta", 1e15, "P"],
        T: ["tera", 1e12, "T"],
        G: ["giga", 1e9, "G"],
        M: ["mega", 1e6, "M"],
        k: ["kilo", 1e3, "k"],
        h: ["hecto", 100, "h"],
        e: ["dekao", 10, "e"],
        d: ["deci", .1, "d"],
        c: ["centi", .01, "c"],
        m: ["milli", .001, "m"],
        u: ["micro", 1e-6, "u"],
        n: ["nano", 1e-9, "n"],
        p: ["pico", 1e-12, "p"],
        f: ["femto", 1e-15, "f"],
        a: ["atto", 1e-18, "a"],
        z: ["zepto", 1e-21, "z"],
        y: ["yocto", 1e-24, "y"]
    };
    let c = null, g = null, h = n, f = t, i = 1, l = 1, u;
    for (let a = 0; a < r.length; a++)
        u = r[a][2] === null ? [] : r[a][2],
        (r[a][1] === h || u.indexOf(h) >= 0) && (c = r[a]),
        (r[a][1] === f || u.indexOf(f) >= 0) && (g = r[a]);
    if (c === null) {
        const a = o[n.substring(0, 2)];
        let p = s[n.substring(0, 1)];
        n.substring(0, 2) === "da" && (p = ["dekao", 10, "da"]),
        a ? (i = a[2],
        h = n.substring(2)) : p && (i = p[1],
        h = n.substring(p[2].length));
        for (let d = 0; d < r.length; d++)
            u = r[d][2] === null ? [] : r[d][2],
            (r[d][1] === h || u.indexOf(h) >= 0) && (c = r[d])
    }
    if (g === null) {
        const a = o[t.substring(0, 2)];
        let p = s[t.substring(0, 1)];
        t.substring(0, 2) === "da" && (p = ["dekao", 10, "da"]),
        a ? (l = a[2],
        f = t.substring(2)) : p && (l = p[1],
        f = t.substring(p[2].length));
        for (let d = 0; d < r.length; d++)
            u = r[d][2] === null ? [] : r[d][2],
            (r[d][1] === f || u.indexOf(f) >= 0) && (g = r[d])
    }
    return c === null || g === null || c[3] !== g[3] ? V : e * c[6] * i / (g[6] * l)
}
function Jd(e, n) {
    if (e = E(e),
    e instanceof Error)
        return e;
    if (!/^-?[0-9]{1,3}$/.test(e) || e < -512 || e > 511)
        return R;
    if (e < 0)
        return "1" + Ae("0", 9 - (512 + e).toString(2).length) + (512 + e).toString(2);
    const t = parseInt(e, 10).toString(2);
    return typeof n > "u" ? t : isNaN(n) ? k : n < 0 ? R : (n = Math.floor(n),
    n >= t.length ? Ae("0", n - t.length) + t : R)
}
function Ud(e, n) {
    if (e = E(e),
    e instanceof Error)
        return e;
    if (!/^-?[0-9]{1,12}$/.test(e) || e < -549755813888 || e > 549755813887)
        return R;
    if (e < 0)
        return (1099511627776 + e).toString(16);
    const t = parseInt(e, 10).toString(16);
    return typeof n > "u" ? t : isNaN(n) ? k : n < 0 ? R : (n = Math.floor(n),
    n >= t.length ? Ae("0", n - t.length) + t : R)
}
function Bd(e, n) {
    if (e = E(e),
    e instanceof Error)
        return e;
    if (!/^-?[0-9]{1,9}$/.test(e) || e < -536870912 || e > 536870911)
        return R;
    if (e < 0)
        return (1073741824 + e).toString(8);
    const t = parseInt(e, 10).toString(8);
    return typeof n > "u" ? t : isNaN(n) ? k : n < 0 ? R : (n = Math.floor(n),
    n >= t.length ? Ae("0", n - t.length) + t : R)
}
function Wd(e, n) {
    return n = n === void 0 ? 0 : n,
    e = E(e),
    n = E(n),
    S(e, n) ? k : e === n ? 1 : 0
}
function Fi(e, n) {
    return n = n === void 0 ? 0 : n,
    e = E(e),
    n = E(n),
    S(e, n) ? k : D.erf(e)
}
function Ji(e) {
    return isNaN(e) ? k : D.erfc(e)
}
function Xd(e, n) {
    return n = n || 0,
    e = E(e),
    S(n, e) ? e : e >= n ? 1 : 0
}
function Vd(e, n) {
    if (!/^[0-9A-Fa-f]{1,10}$/.test(e))
        return R;
    const t = e.length === 10 && e.substring(0, 1).toLowerCase() === "f"
      , r = t ? parseInt(e, 16) - 1099511627776 : parseInt(e, 16);
    if (r < -512 || r > 511)
        return R;
    if (t)
        return "1" + Ae("0", 9 - (512 + r).toString(2).length) + (512 + r).toString(2);
    const o = r.toString(2);
    return n === void 0 ? o : isNaN(n) ? k : n < 0 ? R : (n = Math.floor(n),
    n >= o.length ? Ae("0", n - o.length) + o : R)
}
function Hd(e) {
    if (!/^[0-9A-Fa-f]{1,10}$/.test(e))
        return R;
    const n = parseInt(e, 16);
    return n >= 549755813888 ? n - 1099511627776 : n
}
function qd(e, n) {
    if (!/^[0-9A-Fa-f]{1,10}$/.test(e))
        return R;
    const t = parseInt(e, 16);
    if (t > 536870911 && t < 0xffe0000000)
        return R;
    if (t >= 0xffe0000000)
        return (t - 0xffc0000000).toString(8);
    const r = t.toString(8);
    return n === void 0 ? r : isNaN(n) ? k : n < 0 ? R : (n = Math.floor(n),
    n >= r.length ? Ae("0", n - r.length) + r : R)
}
function Or(e) {
    const n = ee(e)
      , t = j(e);
    return S(n, t) ? k : Math.sqrt(Math.pow(n, 2) + Math.pow(t, 2))
}
function j(e) {
    if (e === void 0 || e === !0 || e === !1)
        return k;
    if (e === 0 || e === "0")
        return 0;
    if (["i", "j"].indexOf(e) >= 0)
        return 1;
    e = e + "",
    e = e.replace("+i", "+1i").replace("-i", "-1i").replace("+j", "+1j").replace("-j", "-1j");
    let n = e.indexOf("+")
      , t = e.indexOf("-");
    n === 0 && (n = e.indexOf("+", 1)),
    t === 0 && (t = e.indexOf("-", 1));
    const r = e.substring(e.length - 1, e.length)
      , o = r === "i" || r === "j";
    return n >= 0 || t >= 0 ? o ? n >= 0 ? isNaN(e.substring(0, n)) || isNaN(e.substring(n + 1, e.length - 1)) ? R : Number(e.substring(n + 1, e.length - 1)) : isNaN(e.substring(0, t)) || isNaN(e.substring(t + 1, e.length - 1)) ? R : -Number(e.substring(t + 1, e.length - 1)) : R : o ? isNaN(e.substring(0, e.length - 1)) ? R : e.substring(0, e.length - 1) : isNaN(e) ? R : 0
}
function Sr(e) {
    const n = ee(e)
      , t = j(e);
    return S(n, t) ? k : n === 0 && t === 0 ? pe : n === 0 && t > 0 ? Math.PI / 2 : n === 0 && t < 0 ? -Math.PI / 2 : t === 0 && n > 0 ? 0 : t === 0 && n < 0 ? -Math.PI : n > 0 ? Math.atan(t / n) : n < 0 && t >= 0 ? Math.atan(t / n) + Math.PI : Math.atan(t / n) - Math.PI
}
function zd(e) {
    const n = ee(e)
      , t = j(e);
    if (S(n, t))
        return k;
    let r = e.substring(e.length - 1);
    return r = r === "i" || r === "j" ? r : "i",
    t !== 0 ? ye(n, -t, r) : e
}
function Gt(e) {
    const n = ee(e)
      , t = j(e);
    if (S(n, t))
        return k;
    let r = e.substring(e.length - 1);
    return r = r === "i" || r === "j" ? r : "i",
    ye(Math.cos(n) * (Math.exp(t) + Math.exp(-t)) / 2, -Math.sin(n) * (Math.exp(t) - Math.exp(-t)) / 2, r)
}
function Ui(e) {
    const n = ee(e)
      , t = j(e);
    if (S(n, t))
        return k;
    let r = e.substring(e.length - 1);
    return r = r === "i" || r === "j" ? r : "i",
    ye(Math.cos(t) * (Math.exp(n) + Math.exp(-n)) / 2, Math.sin(t) * (Math.exp(n) - Math.exp(-n)) / 2, r)
}
function Gd(e) {
    const n = ee(e)
      , t = j(e);
    return S(n, t) ? k : yn(Gt(e), bt(e))
}
function yn(e, n) {
    const t = ee(e)
      , r = j(e)
      , o = ee(n)
      , s = j(n);
    if (S(t, r, o, s))
        return k;
    const c = e.substring(e.length - 1)
      , g = n.substring(n.length - 1);
    let h = "i";
    if ((c === "j" || g === "j") && (h = "j"),
    o === 0 && s === 0)
        return R;
    const f = o * o + s * s;
    return ye((t * o + r * s) / f, (r * o - t * s) / f, h)
}
function bd(e) {
    const n = ee(e)
      , t = j(e);
    if (S(n, t))
        return k;
    let r = e.substring(e.length - 1);
    r = r === "i" || r === "j" ? r : "i";
    const o = Math.exp(n);
    return ye(o * Math.cos(t), o * Math.sin(t), r)
}
function Yd(e) {
    const n = ee(e)
      , t = j(e);
    if (S(n, t))
        return k;
    let r = e.substring(e.length - 1);
    return r = r === "i" || r === "j" ? r : "i",
    ye(Math.log(Math.sqrt(n * n + t * t)), Math.atan(t / n), r)
}
function $d(e) {
    const n = ee(e)
      , t = j(e);
    if (S(n, t))
        return k;
    let r = e.substring(e.length - 1);
    return r = r === "i" || r === "j" ? r : "i",
    ye(Math.log(Math.sqrt(n * n + t * t)) / Math.log(10), Math.atan(t / n) / Math.log(10), r)
}
function Zd(e) {
    const n = ee(e)
      , t = j(e);
    if (S(n, t))
        return k;
    let r = e.substring(e.length - 1);
    return r = r === "i" || r === "j" ? r : "i",
    ye(Math.log(Math.sqrt(n * n + t * t)) / Math.log(2), Math.atan(t / n) / Math.log(2), r)
}
function Kd(e, n) {
    n = E(n);
    const t = ee(e)
      , r = j(e);
    if (S(n, t, r))
        return k;
    let o = e.substring(e.length - 1);
    o = o === "i" || o === "j" ? o : "i";
    const s = Math.pow(Or(e), n)
      , c = Sr(e);
    return ye(s * Math.cos(n * c), s * Math.sin(n * c), o)
}
function Qd() {
    let e = arguments[0];
    if (!arguments.length)
        return k;
    for (let n = 1; n < arguments.length; n++) {
        const t = ee(e)
          , r = j(e)
          , o = ee(arguments[n])
          , s = j(arguments[n]);
        if (S(t, r, o, s))
            return k;
        e = ye(t * o - r * s, t * s + r * o)
    }
    return e
}
function ee(e) {
    if (e === void 0 || e === !0 || e === !1)
        return k;
    if (e === 0 || e === "0" || ["i", "+i", "1i", "+1i", "-i", "-1i", "j", "+j", "1j", "+1j", "-j", "-1j"].indexOf(e) >= 0)
        return 0;
    e = e + "";
    let n = e.indexOf("+")
      , t = e.indexOf("-");
    n === 0 && (n = e.indexOf("+", 1)),
    t === 0 && (t = e.indexOf("-", 1));
    const r = e.substring(e.length - 1, e.length)
      , o = r === "i" || r === "j";
    return n >= 0 || t >= 0 ? o ? n >= 0 ? isNaN(e.substring(0, n)) || isNaN(e.substring(n + 1, e.length - 1)) ? R : Number(e.substring(0, n)) : isNaN(e.substring(0, t)) || isNaN(e.substring(t + 1, e.length - 1)) ? R : Number(e.substring(0, t)) : R : o ? isNaN(e.substring(0, e.length - 1)) ? R : 0 : isNaN(e) ? R : e
}
function _d(e) {
    if (e === !0 || e === !1)
        return k;
    const n = ee(e)
      , t = j(e);
    return S(n, t) ? k : yn("1", Gt(e))
}
function jd(e) {
    const n = ee(e)
      , t = j(e);
    return S(n, t) ? k : yn("1", Ui(e))
}
function bt(e) {
    const n = ee(e)
      , t = j(e);
    if (S(n, t))
        return k;
    let r = e.substring(e.length - 1);
    return r = r === "i" || r === "j" ? r : "i",
    ye(Math.sin(n) * (Math.exp(t) + Math.exp(-t)) / 2, Math.cos(n) * (Math.exp(t) - Math.exp(-t)) / 2, r)
}
function Bi(e) {
    const n = ee(e)
      , t = j(e);
    if (S(n, t))
        return k;
    let r = e.substring(e.length - 1);
    return r = r === "i" || r === "j" ? r : "i",
    ye(Math.cos(t) * (Math.exp(n) - Math.exp(-n)) / 2, Math.sin(t) * (Math.exp(n) + Math.exp(-n)) / 2, r)
}
function e0(e) {
    const n = ee(e)
      , t = j(e);
    if (S(n, t))
        return k;
    let r = e.substring(e.length - 1);
    r = r === "i" || r === "j" ? r : "i";
    const o = Math.sqrt(Or(e))
      , s = Sr(e);
    return ye(o * Math.cos(s / 2), o * Math.sin(s / 2), r)
}
function n0(e) {
    if (e === !0 || e === !1)
        return k;
    const n = ee(e)
      , t = j(e);
    return S(n, t) ? R : yn("1", bt(e))
}
function t0(e) {
    if (e === !0 || e === !1)
        return k;
    const n = ee(e)
      , t = j(e);
    return S(n, t) ? R : yn("1", Bi(e))
}
function r0(e, n) {
    const t = ee(e)
      , r = j(e)
      , o = ee(n)
      , s = j(n);
    if (S(t, r, o, s))
        return k;
    const c = e.substring(e.length - 1)
      , g = n.substring(n.length - 1);
    let h = "i";
    return (c === "j" || g === "j") && (h = "j"),
    ye(t - o, r - s, h)
}
function o0() {
    if (!arguments.length)
        return k;
    const e = A(arguments);
    let n = 0
      , t = 0;
    for (const r of e) {
        const o = +ee(r)
          , s = +j(r);
        if (S(o, s))
            return k;
        n += o,
        t += s
    }
    return ye(n, t, "i")
}
function i0(e) {
    if (e === !0 || e === !1)
        return k;
    const n = ee(e)
      , t = j(e);
    return S(n, t) ? k : yn(bt(e), Gt(e))
}
function s0(e, n) {
    if (!/^[0-7]{1,10}$/.test(e))
        return R;
    const t = e.length === 10 && e.substring(0, 1) === "7"
      , r = t ? parseInt(e, 8) - 1073741824 : parseInt(e, 8);
    if (r < -512 || r > 511)
        return R;
    if (t)
        return "1" + Ae("0", 9 - (512 + r).toString(2).length) + (512 + r).toString(2);
    const o = r.toString(2);
    return typeof n > "u" ? o : isNaN(n) ? k : n < 0 ? R : (n = Math.floor(n),
    n >= o.length ? Ae("0", n - o.length) + o : R)
}
function l0(e) {
    if (!/^[0-7]{1,10}$/.test(e))
        return R;
    const n = parseInt(e, 8);
    return n >= 536870912 ? n - 1073741824 : n
}
function f0(e, n) {
    if (!/^[0-7]{1,10}$/.test(e))
        return R;
    const t = parseInt(e, 8);
    if (t >= 536870912)
        return "ff" + (t + 3221225472).toString(16);
    const r = t.toString(16);
    return n === void 0 ? r : isNaN(n) ? k : n < 0 ? R : (n = Math.floor(n),
    n >= r.length ? Ae("0", n - r.length) + r : R)
}
const u0 = ut.DIST
  , a0 = ut.INV
  , c0 = Kn.DIST
  , d0 = on.MATH
  , h0 = on.PRECISE
  , g0 = Ve.DIST
  , p0 = Ve.DIST.RT
  , m0 = Ve.INV
  , v0 = Ve.INV.RT
  , y0 = Ve.TEST
  , N0 = Qn.P
  , E0 = Qn.P
  , x0 = Qn.S
  , T0 = Kn.INV
  , w0 = Ji.PRECISE
  , I0 = Fi.PRECISE
  , k0 = vr.DIST
  , R0 = He.DIST
  , C0 = He.DIST.RT
  , O0 = He.INV
  , S0 = He.INV.RT
  , A0 = gn.MATH
  , P0 = gn.PRECISE
  , L0 = He.TEST
  , M0 = at.DIST
  , D0 = at.INV
  , F0 = yr.PRECISE
  , J0 = Nr.DIST
  , U0 = _n.INV
  , B0 = _n.DIST
  , W0 = _n.INV
  , X0 = dn.MULT
  , V0 = dn.SNGL
  , H0 = xr.DIST
  , q0 = qt.INTL
  , z0 = qe.DIST
  , G0 = qe.INV
  , b0 = qe.S.DIST
  , Y0 = qe.S.INV
  , $0 = Se.EXC
  , Z0 = Se.INC
  , K0 = ct.EXC
  , Q0 = ct.INC
  , _0 = Tr.DIST
  , j0 = hn.EXC
  , eh = hn.INC
  , nh = dt.AVG
  , th = dt.EQ
  , rh = wr.P
  , oh = ke.P
  , ih = ke.S
  , sh = Re.DIST
  , lh = Re.DIST.RT
  , fh = Re.INV
  , uh = Re.TEST
  , ah = Te.P
  , ch = Te.S
  , dh = Ir.DIST
  , hh = zt.INTL
  , gh = kr.TEST;
function Ar(e) {
    const n = [];
    return ve(e, t => {
        t && n.push(t)
    }
    ),
    n
}
function Le(e, n) {
    const t = {};
    for (let s = 1; s < e[0].length; ++s)
        t[s] = !0;
    let r = n[0].length;
    for (let s = 1; s < n.length; ++s)
        n[s].length > r && (r = n[s].length);
    for (let s = 1; s < e.length; ++s)
        for (let c = 1; c < e[s].length; ++c) {
            let g = !1
              , h = !1;
            for (let f = 0; f < n.length; ++f) {
                const i = n[f];
                if (i.length < r)
                    continue;
                const l = i[0];
                if (e[s][0] === l) {
                    h = !0;
                    for (let u = 1; u < i.length; ++u)
                        if (!g)
                            if (i[u] === void 0 || i[u] === "*")
                                g = !0;
                            else {
                                const p = $n(i[u] + "")
                                  , d = [Ke(e[s][c], ln)].concat(p);
                                g = Zn(d)
                            }
                }
            }
            h && (t[c] = t[c] && g)
        }
    const o = [];
    for (let s = 0; s < e[0].length; ++s)
        t[s] && o.push(s - 1);
    return o
}
function ph(e, n, t) {
    if (isNaN(n) && typeof n != "string")
        return k;
    const r = Le(e, t);
    let o = [];
    if (typeof n == "string") {
        const c = Pe(e, n);
        o = re(e[c])
    } else
        o = re(e[n]);
    let s = 0;
    return ve(r, c => {
        s += o[c]
    }
    ),
    r.length === 0 ? pe : s / r.length
}
function mh(e, n, t) {
    if (isNaN(n) && typeof n != "string")
        return k;
    const r = Le(e, t);
    let o = [];
    if (typeof n == "string") {
        const c = Pe(e, n);
        o = re(e[c])
    } else
        o = re(e[n]);
    const s = [];
    return ve(r, c => {
        s.push(o[c])
    }
    ),
    st(s)
}
function vh(e, n, t) {
    if (isNaN(n) && typeof n != "string")
        return k;
    const r = Le(e, t);
    let o = [];
    if (typeof n == "string") {
        const c = Pe(e, n);
        o = re(e[c])
    } else
        o = re(e[n]);
    const s = [];
    return ve(r, c => {
        s.push(o[c])
    }
    ),
    lt(s)
}
function yh(e, n, t) {
    if (isNaN(n) && typeof n != "string")
        return k;
    const r = Le(e, t);
    let o = [];
    if (typeof n == "string") {
        const s = Pe(e, n);
        o = re(e[s])
    } else
        o = re(e[n]);
    return r.length === 0 ? k : r.length > 1 ? R : o[r[0]]
}
function Nh(e, n, t) {
    if (isNaN(n) && typeof n != "string")
        return k;
    const r = Le(e, t);
    let o = [];
    if (typeof n == "string") {
        const c = Pe(e, n);
        o = re(e[c])
    } else
        o = re(e[n]);
    let s = o[r[0]];
    return ve(r, c => {
        s < o[c] && (s = o[c])
    }
    ),
    s
}
function Eh(e, n, t) {
    if (isNaN(n) && typeof n != "string")
        return k;
    const r = Le(e, t);
    let o = [];
    if (typeof n == "string") {
        const c = Pe(e, n);
        o = re(e[c])
    } else
        o = re(e[n]);
    let s = o[r[0]];
    return ve(r, c => {
        s > o[c] && (s = o[c])
    }
    ),
    s
}
function xh(e, n, t) {
    if (isNaN(n) && typeof n != "string")
        return k;
    const r = Le(e, t);
    let o = [];
    if (typeof n == "string") {
        const g = Pe(e, n);
        o = re(e[g])
    } else
        o = re(e[n]);
    let s = [];
    ve(r, g => {
        s.push(o[g])
    }
    ),
    s = Ar(s);
    let c = 1;
    return ve(s, g => {
        c *= g
    }
    ),
    c
}
function Th(e, n, t) {
    if (isNaN(n) && typeof n != "string")
        return k;
    const r = Le(e, t);
    let o = [];
    if (typeof n == "string") {
        const c = Pe(e, n);
        o = re(e[c])
    } else
        o = re(e[n]);
    let s = [];
    return ve(r, c => {
        s.push(o[c])
    }
    ),
    s = Ar(s),
    ke.S(s)
}
function wh(e, n, t) {
    if (isNaN(n) && typeof n != "string")
        return k;
    const r = Le(e, t);
    let o = [];
    if (typeof n == "string") {
        const c = Pe(e, n);
        o = re(e[c])
    } else
        o = re(e[n]);
    let s = [];
    return ve(r, c => {
        s.push(o[c])
    }
    ),
    s = Ar(s),
    ke.P(s)
}
function Ih(e, n, t) {
    if (isNaN(n) && typeof n != "string")
        return k;
    const r = Le(e, t);
    let o = [];
    if (typeof n == "string") {
        const c = Pe(e, n);
        o = re(e[c])
    } else
        o = re(e[n]);
    const s = [];
    return ve(r, c => {
        s.push(o[c])
    }
    ),
    en(s)
}
function kh(e, n, t) {
    if (isNaN(n) && typeof n != "string")
        return k;
    const r = Le(e, t);
    let o = [];
    if (typeof n == "string") {
        const c = Pe(e, n);
        o = re(e[c])
    } else
        o = re(e[n]);
    const s = [];
    return ve(r, c => {
        s.push(o[c])
    }
    ),
    Te.S(s)
}
function Rh(e, n, t) {
    if (isNaN(n) && typeof n != "string")
        return k;
    const r = Le(e, t);
    let o = [];
    if (typeof n == "string") {
        const c = Pe(e, n);
        o = re(e[c])
    } else
        o = re(e[n]);
    const s = [];
    return ve(r, c => {
        s.push(o[c])
    }
    ),
    Te.P(s)
}
function Qt(e) {
    return e && e.getTime && !isNaN(e.getTime())
}
function _t(e) {
    return e instanceof Date ? e : new Date(e)
}
function Ch(e, n, t) {
    let r = b(n);
    for (r.setFullYear(e.getFullYear()),
    r < e && r.setFullYear(r.getFullYear() + 1); r > e; )
        r.setMonth(r.getMonth() + -12 / t);
    return r
}
function Wi(e) {
    return e = E(e),
    [1, 2, 4].indexOf(e) === -1 ? R : e
}
function Xi(e) {
    return e = E(e),
    [0, 1, 2, 3, 4].indexOf(e) === -1 ? R : e
}
function Oh(e, n, t, r, o, s, c) {
    return e = _t(e),
    n = _t(n),
    t = _t(t),
    s = Wi(s),
    c = Xi(c),
    q(s, c) ? R : !Qt(e) || !Qt(n) || !Qt(t) ? k : r <= 0 || o <= 0 || t <= e ? R : (o = o || 0,
    c = c || 0,
    o * r * Rr(e, t, c))
}
function Sh(e, n, t, r) {
    if (r = Xi(r),
    t = Wi(t),
    e = b(e),
    n = b(n),
    q(e, n))
        return k;
    if (q(t, r) || e >= n)
        return R;
    if (r === 1) {
        let s = Ch(e, n, t)
          , c = b(s);
        return c.setMonth(c.getMonth() + 12 / t),
        rn(s, c, "D")
    }
    let o;
    switch (r) {
    case 0:
    case 2:
    case 4:
        o = 360;
        break;
    case 3:
        o = 365;
        break;
    default:
        return R
    }
    return o / t
}
function Ah(e, n, t, r, o, s) {
    if (e = E(e),
    n = E(n),
    t = E(t),
    S(e, n, t))
        return k;
    if (e <= 0 || n <= 0 || t <= 0 || r < 1 || o < 1 || r > o || s !== 0 && s !== 1)
        return R;
    const c = ht(e, n, t, 0, s);
    let g = 0;
    r === 1 && (s === 0 && (g = -t),
    r++);
    for (let h = r; h <= o; h++)
        g += s === 1 ? pn(e, h - 2, c, t, 1) - c : pn(e, h - 1, c, t, 0);
    return g *= e,
    g
}
function Ph(e, n, t, r, o, s) {
    if (e = E(e),
    n = E(n),
    t = E(t),
    S(e, n, t))
        return k;
    if (e <= 0 || n <= 0 || t <= 0 || r < 1 || o < 1 || r > o || s !== 0 && s !== 1)
        return R;
    const c = ht(e, n, t, 0, s);
    let g = 0;
    r === 1 && (g = s === 0 ? c + t * e : c,
    r++);
    for (let h = r; h <= o; h++)
        g += s > 0 ? c - (pn(e, h - 2, c, t, 1) - c) * e : c - pn(e, h - 1, c, t, 0) * e;
    return g
}
function Lh(e, n, t, r, o) {
    if (o = o === void 0 ? 12 : o,
    e = E(e),
    n = E(n),
    t = E(t),
    r = E(r),
    o = E(o),
    S(e, n, t, r, o))
        return k;
    if (e < 0 || n < 0 || t < 0 || r < 0 || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].indexOf(o) === -1 || r > t)
        return R;
    if (n >= e)
        return 0;
    const s = (1 - Math.pow(n / e, 1 / t)).toFixed(3)
      , c = e * s * o / 12;
    let g = c
      , h = 0;
    const f = r === t ? t - 1 : r;
    for (let i = 2; i <= f; i++)
        h = (e - g) * s,
        g += h;
    return r === 1 ? c : r === t ? (e - g) * s : h
}
function Mh(e, n, t, r, o) {
    if (o = o === void 0 ? 2 : o,
    e = E(e),
    n = E(n),
    t = E(t),
    r = E(r),
    o = E(o),
    S(e, n, t, r, o))
        return k;
    if (e < 0 || n < 0 || t < 0 || r < 0 || o <= 0 || r > t)
        return R;
    if (n >= e)
        return 0;
    let s = 0
      , c = 0;
    for (let g = 1; g <= r; g++)
        c = Math.min((e - s) * (o / t), e - n - s),
        s += c;
    return c
}
function Dh(e, n, t, r, o) {
    if (e = b(e),
    n = b(n),
    t = E(t),
    r = E(r),
    o = E(o),
    o = o || 0,
    S(e, n, t, r, o))
        return k;
    if (t <= 0 || r <= 0)
        return R;
    if (e >= n)
        return k;
    let s, c;
    switch (o) {
    case 0:
        s = 360,
        c = sn(e, n, !1);
        break;
    case 1:
        s = 365,
        c = rn(e, n, "D");
        break;
    case 2:
        s = 360,
        c = rn(e, n, "D");
        break;
    case 3:
        s = 365,
        c = rn(e, n, "D");
        break;
    case 4:
        s = 360,
        c = sn(e, n, !0);
        break;
    default:
        return R
    }
    return (r - t) / r * s / c
}
function Fh(e, n) {
    if (e = E(e),
    n = E(n),
    S(e, n))
        return k;
    if (n < 0)
        return R;
    if (n >= 0 && n < 1)
        return pe;
    n = parseInt(n, 10);
    let t = parseInt(e, 10);
    t += e % 1 * Math.pow(10, Math.ceil(Math.log(n) / Math.LN10)) / n;
    const r = Math.pow(10, Math.ceil(Math.log(n) / Math.LN2) + 1);
    return t = Math.round(t * r) / r,
    t
}
function Jh(e, n) {
    if (e = E(e),
    n = E(n),
    S(e, n))
        return k;
    if (n < 0)
        return R;
    if (n >= 0 && n < 1)
        return pe;
    n = parseInt(n, 10);
    let t = parseInt(e, 10);
    return t += e % 1 * Math.pow(10, -Math.ceil(Math.log(n) / Math.LN10)) * n,
    t
}
function Uh(e, n) {
    return e = E(e),
    n = E(n),
    S(e, n) ? k : e <= 0 || n < 1 ? R : (n = parseInt(n, 10),
    Math.pow(1 + e / n, n) - 1)
}
function pn(e, n, t, r, o) {
    if (r = r || 0,
    o = o || 0,
    e = E(e),
    n = E(n),
    t = E(t),
    r = E(r),
    o = E(o),
    S(e, n, t, r, o))
        return k;
    let s;
    if (e === 0)
        s = r + t * n;
    else {
        const c = Math.pow(1 + e, n);
        s = o === 1 ? r * c + t * (1 + e) * (c - 1) / e : r * c + t * (c - 1) / e
    }
    return -s
}
function Bh(e, n) {
    if (e = E(e),
    n = U(A(n)),
    S(e, n))
        return k;
    const t = n.length;
    let r = e;
    for (let o = 0; o < t; o++)
        r *= 1 + n[o];
    return r
}
function Vi(e, n, t, r, o, s) {
    if (o = o || 0,
    s = s || 0,
    e = E(e),
    n = E(n),
    t = E(t),
    r = E(r),
    o = E(o),
    s = E(s),
    S(e, n, t, r, o, s))
        return k;
    const c = ht(e, t, r, o, s);
    return (n === 1 ? s === 1 ? 0 : -r : s === 1 ? pn(e, n - 2, c, r, 1) - c : pn(e, n - 1, c, r, 0)) * e
}
function Wh(e, n) {
    if (n = typeof n == "number" ? n : typeof n > "u" ? .1 : E(n),
    e = A(e).filter(vn),
    e = U(e),
    S(e, n))
        return k;
    const t = new Float64Array(e.length);
    let r = !1
      , o = !1;
    for (let f = 0; f < e.length; f++)
        t[f] = e[f],
        t[f] > 0 && (r = !0),
        t[f] < 0 && (o = !0);
    if (!r || !o)
        return R;
    const s = f => {
        f <= -1 && (f = -.999999999);
        let i = t[0];
        const l = 1 + f;
        let u = 1;
        for (let a = 1; a < t.length; a++)
            u *= l,
            i += t[a] / u;
        return i
    }
      , c = new Map
      , g = function(f) {
        const i = Math.round(f * 1e10) / 1e10;
        if (c.has(i))
            return c.get(i);
        const l = s(i);
        return c.set(i, l),
        l
    };
    return function() {
        let l = n
          , u = l
          , a = 0;
        for (; a < 1e3; ) {
            const T = g(l);
            if (Math.abs(T) < 1e-10)
                return l;
            if (a > 0 && Math.abs(l - u) < 1e-10 * 10)
                break;
            const v = Math.max(1e-4, Math.abs(l * 1e-4))
              , y = (g(l + v) - T) / v;
            if (Math.abs(y) < 1e-10)
                break;
            u = l;
            const I = T / y
              , x = Math.max(.1, Math.abs(l) * .5);
            Math.abs(I) > x ? l -= Math.sign(I) * x : l -= I,
            l <= -1 && (l = -.99999999),
            l > 1e3 && (l = 1e3),
            a++
        }
        let p = g(l);
        if (Math.abs(p) < 1e-10)
            return l;
        let d, m;
        if (p > 0) {
            for (d = l,
            m = l + .1; g(m) > 0 && m < 1e3; )
                m = m * 2 + .1;
            if (m >= 1e3)
                return l
        } else {
            for (m = l,
            d = Math.max(-.99999999, l - .1); g(d) < 0 && d > -.99999999; )
                d = Math.max(-.99999999, d - .1);
            if (d <= -.99999999)
                return l
        }
        let N;
        for (let T = 0; T < 1e3; T++) {
            N = (d + m) / 2;
            const v = g(N);
            if (Math.abs(v) < 1e-10 || Math.abs(m - d) < 1e-10)
                return N;
            v * g(d) < 0 ? m = N : d = N
        }
        return N
    }()
}
function Xh(e, n, t, r) {
    return e = E(e),
    n = E(n),
    t = E(t),
    r = E(r),
    S(e, n, t, r) ? k : r * e * (n / t - 1)
}
function Vh(e, n, t) {
    if (e = U(A(e)),
    n = E(n),
    t = E(t),
    S(e, n, t))
        return k;
    const r = e.length
      , o = []
      , s = [];
    for (let h = 0; h < r; h++)
        e[h] < 0 ? o.push(e[h]) : s.push(e[h]);
    const c = -or(t, s) * Math.pow(1 + t, r - 1)
      , g = or(n, o) * (1 + n);
    return Math.pow(c / g, 1 / (r - 1)) - 1
}
function Hh(e, n) {
    return e = E(e),
    n = E(n),
    S(e, n) ? k : e <= 0 || n < 1 ? R : (n = parseInt(n, 10),
    (Math.pow(e + 1, 1 / n) - 1) * n)
}
function qh(e, n, t, r, o) {
    if (o = o === void 0 ? 0 : o,
    r = r === void 0 ? 0 : r,
    e = E(e),
    n = E(n),
    t = E(t),
    r = E(r),
    o = E(o),
    S(e, n, t, r, o))
        return k;
    if (e === 0)
        return -(t + r) / n;
    {
        const s = n * (1 + e * o) - r * e
          , c = t * e + n * (1 + e * o);
        return Math.log(s / c) / Math.log(1 + e)
    }
}
function or() {
    const e = U(A(arguments));
    if (e instanceof Error)
        return e;
    const n = e[0];
    let t = 0;
    for (let r = 1; r < e.length; r++)
        t += e[r] / Math.pow(1 + n, r);
    return t
}
function zh(e, n, t) {
    return e = E(e),
    n = E(n),
    t = E(t),
    S(e, n, t) ? k : e <= 0 ? R : (Math.log(t) - Math.log(n)) / Math.log(1 + e)
}
function ht(e, n, t, r, o) {
    if (r = r || 0,
    o = o || 0,
    e = E(e),
    n = E(n),
    t = E(t),
    r = E(r),
    o = E(o),
    S(e, n, t, r, o))
        return k;
    let s;
    if (e === 0)
        s = (t + r) / n;
    else {
        const c = Math.pow(1 + e, n);
        s = o === 1 ? (r * e / (c - 1) + t * e / (1 - 1 / c)) / (1 + e) : r * e / (c - 1) + t * e / (1 - 1 / c)
    }
    return -s
}
function Gh(e, n, t, r, o, s) {
    return o = o || 0,
    s = s || 0,
    e = E(e),
    t = E(t),
    r = E(r),
    o = E(o),
    s = E(s),
    S(e, t, r, o, s) ? k : ht(e, t, r, o, s) - Vi(e, n, t, r, o, s)
}
function bh(e, n, t, r, o) {
    if (e = b(e),
    n = b(n),
    t = E(t),
    r = E(r),
    o = E(o),
    o = o || 0,
    S(e, n, t, r, o))
        return k;
    if (t <= 0 || r <= 0)
        return R;
    if (e >= n)
        return k;
    let s, c;
    switch (o) {
    case 0:
        s = 360,
        c = sn(e, n, !1);
        break;
    case 1:
        s = 365,
        c = rn(e, n, "D");
        break;
    case 2:
        s = 360,
        c = rn(e, n, "D");
        break;
    case 3:
        s = 365,
        c = rn(e, n, "D");
        break;
    case 4:
        s = 360,
        c = sn(e, n, !0);
        break;
    default:
        return R
    }
    return r - t * r * c / s
}
function Yh(e, n, t, r, o) {
    return r = r || 0,
    o = o || 0,
    e = E(e),
    n = E(n),
    t = E(t),
    r = E(r),
    o = E(o),
    S(e, n, t, r, o) ? k : e === 0 ? -t * n - r : ((1 - Math.pow(1 + e, n)) / e * t * (1 + e * o) - r) / Math.pow(1 + e, n)
}
function $h(e, n, t, r, o, s) {
    if (s = s === void 0 ? .1 : s,
    r = r === void 0 ? 0 : r,
    o = o === void 0 ? 0 : o,
    e = E(e),
    n = E(n),
    t = E(t),
    r = E(r),
    o = E(o),
    s = E(s),
    S(e, n, t, r, o, s))
        return k;
    const c = 1e-10
      , g = 100;
    let h = s;
    o = o ? 1 : 0;
    for (let f = 0; f < g; f++) {
        if (h <= -1)
            return R;
        let i, l;
        if (Math.abs(h) < c ? i = t * (1 + e * h) + n * (1 + h * o) * e + r : (l = Math.pow(1 + h, e),
        i = t * l + n * (1 / h + o) * (l - 1) + r),
        Math.abs(i) < c)
            return h;
        let u;
        if (Math.abs(h) < c)
            u = t * e + n * o * e;
        else {
            l = Math.pow(1 + h, e);
            const a = e * Math.pow(1 + h, e - 1);
            u = t * a + n * (1 / h + o) * a + n * (-1 / (h * h)) * (l - 1)
        }
        h -= i / u
    }
    return h
}
function Zh(e, n, t) {
    return e = E(e),
    n = E(n),
    t = E(t),
    S(e, n, t) ? k : e === 0 || n === 0 ? R : Math.pow(t / n, 1 / e) - 1
}
function Kh(e, n, t) {
    return e = E(e),
    n = E(n),
    t = E(t),
    S(e, n, t) ? k : t === 0 ? R : (e - n) / t
}
function Qh(e, n, t, r) {
    return e = E(e),
    n = E(n),
    t = E(t),
    r = E(r),
    S(e, n, t, r) ? k : t === 0 || r < 1 || r > t ? R : (r = parseInt(r, 10),
    (e - n) * (t - r + 1) * 2 / (t * (t + 1)))
}
function _h(e, n, t) {
    return e = b(e),
    n = b(n),
    t = E(t),
    S(e, n, t) ? k : t <= 0 || e > n || n - e > 365 * 24 * 60 * 60 * 1e3 ? R : 365 * t / (360 - t * sn(e, n, !1))
}
function jh(e, n, t) {
    return e = b(e),
    n = b(n),
    t = E(t),
    S(e, n, t) ? k : t <= 0 || e > n || n - e > 365 * 24 * 60 * 60 * 1e3 ? R : 100 * (1 - t * sn(e, n, !1) / 360)
}
function e1(e, n, t) {
    return e = b(e),
    n = b(n),
    t = E(t),
    S(e, n, t) ? k : t <= 0 || e > n || n - e > 365 * 24 * 60 * 60 * 1e3 ? R : (100 - t) * 360 / (t * sn(e, n, !1))
}
function n1(e, n, t) {
    if (e = U(A(e)),
    n = hi(A(n)),
    t = E(t),
    S(e, n, t))
        return k;
    const r = (a, p, d) => {
        const m = d + 1;
        let N = a[0];
        for (let T = 1; T < a.length; T++)
            N += a[T] / Math.pow(m, fn(p[T], p[0]) / 365);
        return N
    }
      , o = (a, p, d) => {
        const m = d + 1;
        let N = 0;
        for (let T = 1; T < a.length; T++) {
            const v = fn(p[T], p[0]) / 365;
            N -= v * a[T] / Math.pow(m, v + 1)
        }
        return N
    }
    ;
    let s = !1
      , c = !1;
    for (let a = 0; a < e.length; a++)
        e[a] > 0 && (s = !0),
        e[a] < 0 && (c = !0);
    if (!s || !c)
        return R;
    t = t || .1;
    let g = t;
    const h = 1e-10;
    let f, i, l, u = !0;
    do
        l = r(e, n, g),
        f = g - l / o(e, n, g),
        i = Math.abs(f - g),
        g = f,
        u = i > h && Math.abs(l) > h;
    while (u);
    return g
}
function t1(e, n, t) {
    if (e = E(e),
    n = U(A(n)),
    t = hi(A(t)),
    S(e, n, t))
        return k;
    let r = 0;
    for (let o = 0; o < n.length; o++)
        r += n[o] / Math.pow(1 + e, fn(t[o], t[0]) / 365);
    return r
}
function r1() {
    const e = A(arguments);
    let n = k;
    for (let t = 0; t < e.length; t++) {
        if (e[t]instanceof Error)
            return e[t];
        e[t] === void 0 || e[t] === null || typeof e[t] == "string" || (n === k && (n = !0),
        e[t] || (n = !1))
    }
    return n
}
function o1() {
    return !1
}
function i1(e, n, t) {
    return e instanceof Error ? e : (n = arguments.length >= 2 ? n : !0,
    n == null && (n = 0),
    t = arguments.length === 3 ? t : !1,
    t == null && (t = 0),
    e ? n : t)
}
function s1() {
    for (let e = 0; e < arguments.length / 2; e++)
        if (arguments[e * 2])
            return arguments[e * 2 + 1];
    return V
}
function l1(e, n) {
    return Vt(e) ? n : e
}
function f1(e, n) {
    return e === V ? n : e
}
function u1(e) {
    return typeof e == "string" ? k : e instanceof Error ? e : !e
}
function a1() {
    const e = A(arguments);
    let n = k;
    for (let t = 0; t < e.length; t++) {
        if (e[t]instanceof Error)
            return e[t];
        e[t] === void 0 || e[t] === null || typeof e[t] == "string" || (n === k && (n = !1),
        e[t] && (n = !0))
    }
    return n
}
function c1() {
    return !0
}
function d1() {
    const e = A(arguments);
    let n = k;
    for (let t = 0; t < e.length; t++) {
        if (e[t]instanceof Error)
            return e[t];
        e[t] === void 0 || e[t] === null || typeof e[t] == "string" || (n === k && (n = 0),
        e[t] && n++)
    }
    return n === k ? n : !!(Math.floor(Math.abs(n)) & 1)
}
function h1() {
    let e;
    if (arguments.length > 0) {
        const n = arguments[0]
          , t = arguments.length - 1
          , r = Math.floor(t / 2);
        let o = !1;
        const s = t % 2 !== 0
          , c = t % 2 === 0 ? null : arguments[arguments.length - 1];
        if (r) {
            for (let g = 0; g < r; g++)
                if (n === arguments[g * 2 + 1]) {
                    e = arguments[g * 2 + 2],
                    o = !0;
                    break
                }
        }
        o || (e = s ? c : V)
    } else
        e = k;
    return e
}
const g1 = {
    errors: nu,
    symbols: od,
    date: ou
}
  , Hi = Object.freeze(Object.defineProperty({
    __proto__: null,
    ABS: Ua,
    ACCRINT: Oh,
    ACOS: Ba,
    ACOSH: Wa,
    ACOT: Xa,
    ACOTH: Va,
    AGGREGATE: Ha,
    AND: r1,
    ARABIC: qa,
    ASIN: za,
    ASINH: Ga,
    ATAN: ba,
    ATAN2: Ya,
    ATANH: $a,
    AVEDEV: ra,
    AVERAGE: cn,
    AVERAGEA: pr,
    AVERAGEIF: oa,
    AVERAGEIFS: ia,
    BASE: Za,
    BESSELI: wd,
    BESSELJ: Id,
    BESSELK: kd,
    BESSELY: Rd,
    BETA: ut,
    BETADIST: u0,
    BETAINV: a0,
    BIN2DEC: Cd,
    BIN2HEX: Od,
    BIN2OCT: Sd,
    BINOM: Kn,
    BINOMDIST: c0,
    BITAND: Ad,
    BITLSHIFT: Pd,
    BITOR: Ld,
    BITRSHIFT: Md,
    BITXOR: Dd,
    CEILING: on,
    CEILINGMATH: d0,
    CEILINGPRECISE: h0,
    CHAR: Ni,
    CHIDIST: g0,
    CHIDISTRT: p0,
    CHIINV: m0,
    CHIINVRT: v0,
    CHISQ: Ve,
    CHITEST: y0,
    CHOOSE: Iu,
    CLEAN: Du,
    CODE: Ei,
    COLUMN: ku,
    COLUMNS: Ru,
    COMBIN: bn,
    COMBINA: Ka,
    COMPLEX: ye,
    CONCAT: Fu,
    CONCATENATE: xi,
    CONFIDENCE: mr,
    CONVERT: Fd,
    CORREL: sa,
    COS: Qa,
    COSH: _a,
    COT: ja,
    COTH: ec,
    COUNT: st,
    COUNTA: lt,
    COUNTBLANK: wi,
    COUNTIF: la,
    COUNTIFS: fa,
    COUPDAYS: Sh,
    COVAR: N0,
    COVARIANCE: Qn,
    COVARIANCEP: E0,
    COVARIANCES: x0,
    CRITBINOM: T0,
    CSC: nc,
    CSCH: tc,
    CUMIPMT: Ah,
    CUMPRINC: Ph,
    DATE: ld,
    DATEDIF: rn,
    DATEVALUE: fd,
    DAVERAGE: ph,
    DAY: ud,
    DAYS: fn,
    DAYS360: sn,
    DB: Lh,
    DCOUNT: mh,
    DCOUNTA: vh,
    DDB: Mh,
    DEC2BIN: Jd,
    DEC2HEX: Ud,
    DEC2OCT: Bd,
    DECIMAL: rc,
    DEGREES: oc,
    DELTA: Wd,
    DEVSQ: ua,
    DGET: yh,
    DISC: Dh,
    DMAX: Nh,
    DMIN: Eh,
    DOLLAR: Ju,
    DOLLARDE: Fh,
    DOLLARFR: Jh,
    DPRODUCT: xh,
    DSTDEV: Th,
    DSTDEVP: wh,
    DSUM: Ih,
    DVAR: kh,
    DVARP: Rh,
    EDATE: ad,
    EFFECT: Uh,
    EOMONTH: cd,
    ERF: Fi,
    ERFC: Ji,
    ERFCPRECISE: w0,
    ERFPRECISE: I0,
    ERROR: gi,
    EVEN: ic,
    EXACT: Uu,
    EXP: sc,
    EXPON: vr,
    EXPONDIST: k0,
    F: He,
    FACT: Qe,
    FACTDOUBLE: Pi,
    FALSE: o1,
    FDIST: R0,
    FDISTRT: C0,
    FIND: Bu,
    FINV: O0,
    FINVRT: S0,
    FISHER: aa,
    FISHERINV: ca,
    FIXED: Ti,
    FLOOR: gn,
    FLOORMATH: A0,
    FLOORPRECISE: P0,
    FORECAST: Ii,
    FREQUENCY: da,
    FTEST: L0,
    FV: pn,
    FVSCHEDULE: Bh,
    GAMMA: at,
    GAMMADIST: M0,
    GAMMAINV: D0,
    GAMMALN: yr,
    GAMMALNPRECISE: F0,
    GAUSS: ha,
    GCD: lc,
    GEOMEAN: ga,
    GESTEP: Xd,
    GROWTH: pa,
    HARMEAN: ma,
    HEX2BIN: Vd,
    HEX2DEC: Hd,
    HEX2OCT: qd,
    HLOOKUP: Cu,
    HOUR: dd,
    HYPGEOM: Nr,
    HYPGEOMDIST: J0,
    IF: i1,
    IFERROR: l1,
    IFNA: f1,
    IFS: s1,
    IMABS: Or,
    IMAGINARY: j,
    IMARGUMENT: Sr,
    IMCONJUGATE: zd,
    IMCOS: Gt,
    IMCOSH: Ui,
    IMCOT: Gd,
    IMCSC: n0,
    IMCSCH: t0,
    IMDIV: yn,
    IMEXP: bd,
    IMLN: Yd,
    IMLOG10: $d,
    IMLOG2: Zd,
    IMPOWER: Kd,
    IMPRODUCT: Qd,
    IMREAL: ee,
    IMSEC: _d,
    IMSECH: jd,
    IMSIN: bt,
    IMSINH: Bi,
    IMSQRT: e0,
    IMSUB: r0,
    IMSUM: o0,
    IMTAN: i0,
    INDEX: Ou,
    INT: fc,
    INTERCEPT: va,
    IPMT: Vi,
    IRR: Wh,
    ISBLANK: mu,
    ISERR: pi,
    ISERROR: Vt,
    ISEVEN: vu,
    ISLOGICAL: mi,
    ISNA: yu,
    ISNONTEXT: Nu,
    ISNUMBER: Ht,
    ISO: uc,
    ISODD: Eu,
    ISOWEEKNUM: Di,
    ISPMT: Xh,
    ISTEXT: vi,
    KURT: ya,
    LARGE: ki,
    LCM: ac,
    LEFT: Wu,
    LEN: Xu,
    LINEST: Er,
    LN: cc,
    LOG: dc,
    LOG10: hc,
    LOGEST: Na,
    LOGINV: U0,
    LOGNORM: _n,
    LOGNORMDIST: B0,
    LOGNORMINV: W0,
    LOOKUP: Su,
    LOWER: Vu,
    MATCH: Au,
    MAX: Ct,
    MAXA: Ea,
    MAXIFS: xa,
    MEDIAN: Ri,
    MID: Hu,
    MIN: Ot,
    MINA: Ta,
    MINIFS: wa,
    MINUTE: hd,
    MIRR: Vh,
    MMULT: gc,
    MOD: pc,
    MODE: dn,
    MODEMULT: X0,
    MODESNGL: V0,
    MONTH: gd,
    MROUND: mc,
    MULTINOMIAL: vc,
    MUNIT: yc,
    N: xu,
    NA: Tu,
    NEGBINOM: xr,
    NEGBINOMDIST: H0,
    NETWORKDAYS: qt,
    NETWORKDAYSINTL: q0,
    NOMINAL: Hh,
    NORM: qe,
    NORMDIST: z0,
    NORMINV: G0,
    NORMSDIST: b0,
    NORMSINV: Y0,
    NOT: u1,
    NOW: pd,
    NPER: qh,
    NPV: or,
    NUMBERVALUE: qu,
    OCT2BIN: s0,
    OCT2DEC: l0,
    OCT2HEX: f0,
    ODD: Nc,
    OR: a1,
    PDURATION: zh,
    PEARSON: Ci,
    PERCENTILE: Se,
    PERCENTILEEXC: $0,
    PERCENTILEINC: Z0,
    PERCENTRANK: ct,
    PERCENTRANKEXC: K0,
    PERCENTRANKINC: Q0,
    PERMUT: Ia,
    PERMUTATIONA: ka,
    PHI: Ra,
    PI: Ec,
    PMT: ht,
    POISSON: Tr,
    POISSONDIST: _0,
    POWER: Li,
    PPMT: Gh,
    PRICEDISC: bh,
    PROB: Ca,
    PRODUCT: St,
    PROPER: zu,
    PV: Yh,
    QUARTILE: hn,
    QUARTILEEXC: j0,
    QUARTILEINC: eh,
    QUOTIENT: xc,
    RADIANS: Tc,
    RAND: wc,
    RANDBETWEEN: Ic,
    RANK: dt,
    RANKAVG: nh,
    RANKEQ: th,
    RATE: $h,
    REPLACE: Gu,
    REPT: Ae,
    RIGHT: bu,
    ROMAN: kc,
    ROUND: Mi,
    ROUNDDOWN: Rc,
    ROUNDUP: Cc,
    ROW: Oa,
    ROWS: Pu,
    RRI: Zh,
    RSQ: Sa,
    SEARCH: Yu,
    SEC: Oc,
    SECH: Sc,
    SECOND: md,
    SERIESSUM: Ac,
    SIGN: Pc,
    SIN: Lc,
    SINH: Mc,
    SKEW: wr,
    SKEWP: rh,
    SLN: Kh,
    SLOPE: Aa,
    SMALL: Oi,
    SORT: Lu,
    SQRT: Dc,
    SQRTPI: Fc,
    STANDARDIZE: Pa,
    STDEV: ke,
    STDEVA: La,
    STDEVP: oh,
    STDEVPA: Ma,
    STDEVS: ih,
    STEYX: Da,
    SUBSTITUTE: $u,
    SUBTOTAL: Jc,
    SUM: en,
    SUMIF: Uc,
    SUMIFS: Bc,
    SUMPRODUCT: Wc,
    SUMSQ: Xc,
    SUMX2MY2: Vc,
    SUMX2PY2: Hc,
    SUMXMY2: qc,
    SWITCH: h1,
    SYD: Qh,
    T: Re,
    TAN: zc,
    TANH: Gc,
    TBILLEQ: _h,
    TBILLPRICE: jh,
    TBILLYIELD: e1,
    TDIST: sh,
    TDISTRT: lh,
    TEXT: Zu,
    TEXTJOIN: Ku,
    TIME: vd,
    TIMEVALUE: yd,
    TINV: fh,
    TODAY: Nd,
    TRANSPOSE: Mu,
    TREND: Fa,
    TRIM: Qu,
    TRIMMEAN: Ja,
    TRUE: c1,
    TRUNC: bc,
    TTEST: uh,
    TYPE: wu,
    UNICHAR: _u,
    UNICODE: ju,
    UNIQUE: gr,
    UPPER: ea,
    VALUE: na,
    VAR: Te,
    VARA: Si,
    VARP: ah,
    VARPA: Ai,
    VARS: ch,
    VLOOKUP: yi,
    WEEKDAY: Ed,
    WEEKNUM: xd,
    WEIBULL: Ir,
    WEIBULLDIST: dh,
    WORKDAY: zt,
    WORKDAYINTL: hh,
    XIRR: n1,
    XNPV: t1,
    XOR: d1,
    YEAR: Td,
    YEARFRAC: Rr,
    Z: kr,
    ZTEST: gh,
    utils: g1
}, Symbol.toStringTag, {
    value: "Module"
}));
function p1(e, n=50, t=50) {
    const r = {
        SheetNames: [],
        Sheets: {}
    };
    for (const o of e.sheets) {
        r.SheetNames.push(o.name);
        const s = {};
        for (const c of o.rows)
            if (!(c.index > n))
                for (const g of c.cells) {
                    const h = /^[A-Z]+/.exec(g.address);
                    if (!h)
                        continue;
                    const f = h[0];
                    let i = 0;
                    for (let u = 0; u < f.length; u++)
                        i = i * 26 + (f.charCodeAt(u) - 64);
                    if (i > t)
                        continue;
                    const l = {};
                    if (g.value !== "") {
                        const u = Number(g.value);
                        l.v = Number.isNaN(u) ? g.value : u
                    }
                    g.formula && (l.f = g.formula),
                    s[g.address] = l
                }
        r.Sheets[o.name] = s
    }
    Tt.import_functions(Hi);
    try {
        Tt(r, {
            continue_after_error: !0
        })
    } catch (o) {
        Ze.addError(o)
    }
    for (const o of e.sheets) {
        const s = r.Sheets[o.name];
        for (const c of o.rows)
            if (!(c.index > n)) {
                for (const g of c.cells)
                    if (g.formula && g.value === "") {
                        const h = s[g.address]?.v;
                        g.value = h != null ? String(h) : "This formula is not supported in web preview. Please download to open in your preferred software for the best results."
                    }
            }
    }
}
const qi = /([$]?[A-Z]+[$]?\d+)/g;
function m1(e) {
    return Array.from(new Set(e.match(qi) ?? []))
}
const v1 = as().domain(Array.from({
    length: 12
}, (e, n) => n.toString())).range(cs);
function ir(e, n) {
    if (e.value === "" || e.value == null)
        return "";
    const t = n[e.styleIndex ?? 0] ?? {};
    if (t.numberFormatCode) {
        const r = Number(e.value);
        if (!Number.isNaN(r))
            try {
                return us.format(t.numberFormatCode, r)
            } catch (o) {
                return Ze.addError(o),
                e.value
            }
    }
    return e.value
}
function zi(e, n, t, r, o, s, c, g, h, f, i, l, u, a, p, d) {
    function m(C, M, L) {
        let X = t[M];
        if (!C)
            return X;
        let Y = M + 1;
        for (; L > X && Y < t.length; ) {
            const z = Y;
            if (C.cells.find(Ne => er(Ne.address) === z)?.value)
                break;
            X += t[Y],
            Y++
        }
        return X
    }
    e.save(),
    e.scale(i, i);
    const N = [0];
    for (let C = 0; C < t.length; C++)
        N[C + 1] = N[C] + t[C];
    const T = [0];
    for (let C = 0; C < r.length; C++)
        T[C + 1] = T[C] + r[C];
    const v = Math.max(0, N.findIndex(C => C >= o) - 1)
      , y = Math.min(t.length - 1, N.findIndex(C => C >= o + c / i) + 1)
      , I = Math.max(0, T.findIndex(C => C >= s) - 1)
      , x = Math.min(r.length - 1, T.findIndex(C => C >= s + g / i) + 1);
    e.clearRect(0, 0, c / i, g / i),
    e.fillStyle = "white",
    e.fillRect(0, 0, c / i, g / i);
    const O = new Map;
    for (const C of n.rows)
        O.set(C.index - 1, C);
    for (let C = I; C <= x; C++) {
        const M = O.get(C)
          , L = ze + T[C] - s
          , X = r[C];
        for (let Y = v; Y <= y; Y++) {
            const z = Ge + N[Y] - o
              , Q = t[Y]
              , Ne = M?.cells.find(K => er(K.address) === Y)
              , Ie = `${nr(Y)}${C + 1}`
              , Z = l[Ne?.styleIndex ?? 0] ?? {};
            if (Z.fill && (e.fillStyle = Z.fill,
            e.fillRect(z, L, Q, X)),
            p.has(`${n.name}:${Ie}`) && (e.fillStyle = "#eeeeee",
            e.fillRect(z, L, Q, X)),
            d && h === C && f === Y && (e.fillStyle = "rgba(255,255,0,0.2)",
            e.fillRect(z, L, Q, X)),
            n.showGridLines !== !1 && (e.strokeStyle = "#ccc",
            e.lineWidth = 1,
            e.strokeRect(z, L, Q, X)),
            Z.borders) {
                const K = Z.borders;
                K.top && (e.strokeStyle = K.top,
                e.beginPath(),
                e.moveTo(z, L),
                e.lineTo(z + Q, L),
                e.stroke()),
                K.bottom && (e.strokeStyle = K.bottom,
                e.beginPath(),
                e.moveTo(z, L + X),
                e.lineTo(z + Q, L + X),
                e.stroke()),
                K.left && (e.strokeStyle = K.left,
                e.beginPath(),
                e.moveTo(z, L),
                e.lineTo(z, L + X),
                e.stroke()),
                K.right && (e.strokeStyle = K.right,
                e.beginPath(),
                e.moveTo(z + Q, L),
                e.lineTo(z + Q, L + X),
                e.stroke())
            }
            if (a.has(Ie)) {
                const K = u[Ie];
                K && (e.save(),
                e.fillStyle = K + "22",
                e.fillRect(z, L, Q, X),
                e.restore(),
                e.strokeStyle = K,
                e.lineWidth = 2,
                e.strokeRect(z, L, Q, X))
            }
            if (Ne) {
                e.save(),
                e.fillStyle = Z.textColor ?? "black",
                e.font = ls(Z.font);
                const K = Z.align ?? "left";
                e.textAlign = K,
                e.textBaseline = "middle";
                const ge = ir(Ne, l)
                  , oe = e.measureText(ge).width
                  , fe = z;
                let ie = Q;
                K === "left" && (ie = m(M, Y, oe)),
                e.beginPath(),
                e.rect(fe, L, ie, X),
                e.clip();
                let F = z + 4;
                K === "center" ? F = z + Q / 2 : K === "right" && (F = z + Q - 4),
                e.fillText(ge, F, L + X / 2),
                e.restore()
            }
        }
    }
    fs(e, n, N, T, o, s, c / i, g / i),
    e.textAlign = "center",
    e.textBaseline = "middle",
    e.font = "12px sans-serif";
    for (let C = v; C <= y; C++) {
        const M = Ge + N[C] - o
          , L = t[C];
        e.fillStyle = f === C ? "#e0e0e0" : "#f5f5f5",
        e.fillRect(M, 0, L, ze),
        e.strokeStyle = "#ccc",
        e.lineWidth = 1,
        e.strokeRect(M, 0, L, ze),
        e.fillStyle = "#333",
        e.fillText(nr(C), M + L / 2, ze / 2)
    }
    for (let C = I; C <= x; C++) {
        const M = ze + T[C] - s
          , L = r[C];
        e.fillStyle = h === C ? "#e0e0e0" : "#f5f5f5",
        e.fillRect(0, M, Ge, L),
        e.strokeStyle = "#ccc",
        e.lineWidth = 1,
        e.strokeRect(0, M, Ge, L),
        e.fillStyle = "#333",
        e.fillText((C + 1).toString(), Ge / 2, M + L / 2)
    }
    if (e.fillStyle = "#f5f5f5",
    e.fillRect(0, 0, Ge, ze),
    e.strokeStyle = "#ccc",
    e.lineWidth = 1,
    e.strokeRect(0, 0, Ge, ze),
    h != null && f != null) {
        const C = Ge + N[f] - o
          , M = ze + T[h] - s;
        e.strokeStyle = "dodgerblue",
        e.lineWidth = 2,
        e.strokeRect(C, M, t[f], r[h])
    }
    e.restore()
}
function Ag({workbook: e, selectedSheetIdx: n}) {
    const {focusedWalnutId: t, setSelectedSheetIdx: r} = Lt()
      , [o,s] = P.useState(n)
      , [c,g] = P.useState({})
      , [h,f] = P.useState(!1)
      , [i,l] = P.useState([])
      , u = P.useRef(new Set)
      , [a,p] = P.useState({})
      , d = e.sheets[o]
      , m = P.useMemo( () => Mo(e), [e])
      , N = P.useMemo( () => {
        const H = Array(500).fill(Do);
        for (const G of d.columns) {
            const _ = Fo(G.width);
            for (let se = G.min - 1; se < G.max; se++)
                H[se] = _
        }
        return H
    }
    , [d.columns])
      , T = P.useMemo( () => {
        const H = d.defaultRowHeight && d.defaultRowHeight !== 0 ? d.defaultRowHeight : Jo
          , G = Array(500).fill(wt(H));
        for (const _ of d.rows)
            (_.customHeight || _.height !== 0) && _.height != null && (G[_.index - 1] = wt(_.height));
        return G
    }
    , [d])
      , [v,y] = P.useState(0)
      , [I,x] = P.useState("")
      , O = P.useRef(null)
      , C = P.useRef(null)
      , [M,L] = P.useState(1)
      , [X,Y] = P.useState("A1")
      , z = er(X)
      , Q = ds(X);
    function Ne() {
        if (f(!0),
        !I.startsWith("="))
            return;
        const F = m1(I);
        l(F),
        p(Object.fromEntries(F.map( (H, G) => [H, v1(G.toString())])))
    }
    function Ie() {
        f(!1),
        l([]),
        p({})
    }
    P.useEffect( () => {
        f(!1),
        l([])
    }
    , [X, d]);
    const Z = P.useCallback( () => {
        const F = C.current
          , H = O.current;
        if (!F || !H)
            return;
        const G = F.getContext("2d");
        if (!G)
            return;
        const _ = H.clientWidth
          , se = H.clientHeight;
        F.width = _ * window.devicePixelRatio,
        F.height = se * window.devicePixelRatio,
        F.style.width = `${_}px`,
        F.style.height = `${se}px`,
        G.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0),
        zi(G, d, N, T, H.scrollLeft, H.scrollTop, _, se, Q, z, M, m, a, new Set(i), u.current, h)
    }
    , [d, N, T, Q, z, M, m, a, i, h]);
    bl( () => {
        Z()
    }
    ),
    P.useEffect( () => {
        const F = O.current;
        if (!F)
            return;
        const H = () => Z()
          , G = () => Z();
        return F.addEventListener("scroll", H),
        window.addEventListener("resize", G),
        () => {
            F.removeEventListener("scroll", H),
            window.removeEventListener("resize", G)
        }
    }
    , [Z]);
    function K(F) {
        const H = O.current
          , G = C.current;
        if (!G || !H)
            return;
        const _ = G.getBoundingClientRect()
          , se = F.clientX - _.left
          , he = F.clientY - _.top
          , Ce = H.scrollLeft + se / M - Ge
          , jn = H.scrollTop + he / M - ze;
        if (Ce < 0 || jn < 0)
            return;
        let et = 0
          , nt = 0;
        for (; nt < N.length && et + N[nt] <= Ce; )
            et += N[nt],
            nt++;
        et = 0;
        let Nn = 0;
        for (; Nn < T.length && et + T[Nn] <= jn; )
            et += T[Nn],
            Nn++;
        Y(`${nr(nt)}${Nn + 1}`),
        y(Nn)
    }
    P.useEffect( () => {
        const F = d.rows[v]?.cells.find(H => H.address === X);
        x(F ? F.formula ? `= ${F.formula}` : ir(F, m) : "")
    }
    , [v, X, d.rows, m]);
    function ge(F) {
        F.ctrlKey && (F.preventDefault(),
        L(H => Math.min(4, Math.max(.5, H - F.deltaY * .001))))
    }
    hs({
        cols: N.length,
        rows: T.length,
        selected: {
            address: X
        },
        setSelected: (F, H) => {
            y(F),
            Y(H)
        }
        ,
        enabled: !0
    }),
    P.useEffect( () => {
        const F = {
            SheetNames: [],
            Sheets: {}
        };
        for (const G of e.sheets) {
            F.SheetNames.push(G.name);
            const _ = {};
            for (const se of G.rows)
                for (const he of se.cells) {
                    const Ce = {};
                    if (he.value !== "") {
                        const jn = Number(he.value);
                        Ce.v = Number.isNaN(jn) ? he.value : jn
                    }
                    he.formula && (Ce.f = he.formula),
                    _[he.address] = Ce
                }
            F.Sheets[G.name] = _
        }
        Tt.import_functions(Hi);
        try {
            Tt(F, {
                continue_after_error: !0
            })
        } catch (G) {
            Ze.addError(G)
        }
        for (const G of e.sheets) {
            const _ = F.Sheets[G.name];
            for (const se of G.rows)
                for (const he of se.cells)
                    if (he.formula && he.value === "") {
                        const Ce = _[he.address]?.v;
                        Ce != null ? he.value = String(Ce) : he.value = "This formula is not supported in web preview. Please download the original file to view it fully."
                    }
        }
        const H = d.rows[v]?.cells.find(G => G.address === X);
        H && x(H.formula ? `= ${H.formula}` : ir(H, m)),
        Z()
    }
    , [e, v, X, Z, d, m]);
    function oe(F) {
        const H = O.current;
        if (H) {
            g(_ => ({
                ..._,
                [o]: {
                    left: H.scrollLeft,
                    top: H.scrollTop
                }
            }));
            const G = c[o];
            H.scrollLeft = G?.left ?? 0,
            H.scrollTop = G?.top ?? 0
        }
        s(F),
        t && r(t, F)
    }
    const fe = N.reduce( (F, H) => F + H, 0) + Ge
      , ie = T.reduce( (F, H) => F + H, 0) + ze;
    return w.jsxs("div", {
        className: "flex h-full flex-col overflow-hidden",
        children: [w.jsxs("div", {
            ref: O,
            className: "relative flex-1 overflow-auto",
            onWheel: ge,
            children: [w.jsx("canvas", {
                ref: C,
                className: "sticky start-0 top-0",
                onMouseDown: K
            }), w.jsx("div", {
                style: {
                    width: fe * M,
                    height: ie * M
                }
            })]
        }), w.jsxs("div", {
            className: "bg-token-bg-tertiary flex flex-row items-center gap-2 p-2 text-sm",
            children: [w.jsx("div", {
                className: "text-token-text-secondary w-14 px-2 text-center text-xs font-medium",
                children: X
            }), w.jsxs("div", {
                className: "relative w-full",
                children: [h && w.jsx("div", {
                    className: "pointer-events-none absolute inset-0 flex items-center px-3 py-1 text-xs whitespace-pre",
                    children: I.split(qi).map( (F, H) => a[F] ? w.jsx("span", {
                        style: {
                            color: a[F]
                        },
                        children: F
                    }, H) : F)
                }), w.jsx("input", {
                    type: "text",
                    readOnly: !0,
                    value: I,
                    className: "bg-token-bg-secondary w-full rounded-md border-none px-3 py-1 text-xs",
                    onFocus: Ne,
                    onBlur: Ie
                })]
            }), w.jsx(gs, {
                options: [.25, .5, .75, 1, 1.5, 2, 3, 4].map(F => ({
                    label: `${F * 100}%`,
                    value: F.toString()
                })),
                value: void 0,
                placeholder: `${Math.round(M * 100)}%`,
                onValueChange: F => L(Number(F)),
                triggerClassName: "text-xs w-16 h-6"
            })]
        }), w.jsx("div", {
            className: "flex flex-row overflow-x-auto p-2 pt-0",
            children: e.sheets.map( (F, H) => w.jsx("button", {
                onClick: () => oe(H),
                className: ["rounded-b-md px-3 py-3 text-xs font-medium whitespace-nowrap", H === o ? "text-token-text-primary bg-token-bg-tertiary" : "text-token-text-secondary hover:text-token-text-primary"].join(" "),
                children: F.name
            }, F.name))
        }), !1]
    })
}
async function y1(e, n, t=404, r=0) {
    const o = Uo(r)
      , s = e.widthEmu * Oe
      , c = e.heightEmu * Oe
      , g = Math.min(1, t / Math.max(s, c))
      , h = Math.round(s * g * o)
      , f = Math.round(c * g * o)
      , i = new OffscreenCanvas(h,f)
      , l = i.getContext("2d");
    if (!l)
        throw new Error("Failed to create 2D context");
    l.scale(o * g, o * g),
    await si(e, n, l, []);
    const u = await i.convertToBlob({
        type: "image/png"
    });
    return new Promise(a => {
        const p = new FileReader;
        p.onload = () => a(p.result),
        p.readAsDataURL(u)
    }
    )
}
async function N1(e, n=20, t=10, r=0, o) {
    const s = Uo(r)
      , c = 80
      , g = 20;
    p1(o, 50, 50);
    const h = new OffscreenCanvas(t * c * s,n * g * s)
      , f = h.getContext("2d");
    if (!f)
        return Promise.resolve("");
    f.scale(s, s);
    const l = Array(50).fill(Do);
    for (const m of e.columns) {
        const N = Fo(m.width);
        for (let T = m.min - 1; T < m.max; T++)
            l[T] = N
    }
    const a = Array(50).fill(wt(e.defaultRowHeight || Jo));
    for (const m of e.rows)
        m.customHeight && (a[m.index - 1] = wt(m.height));
    const p = Mo(o);
    zi(f, e, l, a, 0, 0, 800, 400, null, null, 1, p, {}, new Set, new Set, !1);
    const d = await h.convertToBlob({
        type: "image/png"
    });
    return new Promise(m => {
        const N = new FileReader;
        N.onload = () => m(N.result),
        N.readAsDataURL(d)
    }
    )
}
const E1 = ({walnutId: e, isLoading: n, isError: t, isInShareModal: r, errorMessage: o, handleDownloadClick: s}) => {
    const {presentationMap: c, setSelectedSlideIdx: g} = Lt()
      , h = c[e]?.presentation
      , f = c[e]?.workbook
      , i = c[e]?.selectedSlideIdx
      , [l,u] = P.useState([])
      , [a,p] = P.useState(!1);
    if (P.useEffect( () => {
        h && (async () => {
            const N = await Promise.all(h.slides.map(T => y1(T, h)));
            u(N)
        }
        )()
    }
    , [h]),
    P.useEffect( () => {
        f && (async () => {
            const N = await Promise.all(f.sheets.map(T => N1(T, 20, 10, 0, f)));
            u(N)
        }
        )()
    }
    , [f]),
    t || o === "fileTooLarge")
        return w.jsxs("div", {
            className: "flex h-[250px] flex-col items-center justify-center gap-2 text-center",
            children: [w.jsx("div", {
                className: "text-token-text-primary max-w-[80%] text-xs",
                children: w.jsx(ne, {
                    id: "YMbrlR",
                    defaultMessage: "Preview not available."
                })
            }), w.jsx(it, {
                color: "ghost",
                size: "small",
                as: "button",
                onClick: N => s(N),
                children: w.jsx(ne, {
                    id: "GjJtUJ",
                    defaultMessage: "Download"
                })
            })]
        });
    if (n || !h && !f || !l.length)
        return w.jsx("div", {
            className: "flex h-[250px] items-center justify-center gap-2",
            children: w.jsx("div", {
                className: "border-token-border-heavy h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"
            })
        });
    const d = () => {
        g(e, N => N > 0 ? N - 1 : l.length - 1)
    }
      , m = () => {
        g(e, N => N < l.length - 1 ? N + 1 : 0)
    }
    ;
    return w.jsxs("div", {
        className: "relative flex flex-col items-center",
        children: [h && w.jsx(ps, {
            goPrev: d,
            goNext: m,
            setIsPlaying: p,
            thumbnails: l,
            selectedSlideIdx: i
        }), w.jsx("img", {
            src: l[i],
            alt: "",
            className: "m-0 rounded border",
            style: {
                background: "#fff"
            }
        }), h && a && w.jsx(Qf, {
            startIndex: 0,
            onExit: () => p(!1),
            walnutId: e
        }), r && w.jsx("div", {
            className: "from-token-main-surface-primary pointer-events-none absolute start-0 end-0 bottom-0 z-10 h-40 bg-gradient-to-t to-transparent",
            "data-testid": "walnut-mini-player-share-gradient"
        })]
    })
}
  , x1 = ({citation: e, clientThreadId: n, messageId: t}) => {
    const r = ms()
      , [o,s] = P.useState(!1)
      , [c,g] = P.useState(null)
      , [h,f] = P.useState(!1)
      , i = !!P.useContext(mn)?.message.metadata?.is_standalone_share_attachment
      , l = vs()
      , {presentationMap: u, updatePresentationMap: a, open: p} = Lt()
      , d = ft()
      , m = Dt(n)
      , N = Ft(d, "3154019201") && !!m
      , T = Yl(d, "2888003541").value
      , v = Number(T?.max_bytes ?? 3e7)
      , y = fr()
      , I = P.useRef(null)
      , x = P.useCallback(oe => {
        y.danger(oe, {
            toastId: "w_failed_to_download_file"
        })
    }
    , [y])
      , O = !!e.file_id
      , C = Bo(!1, n, e.file_id, () => {}
    , x)
      , M = u[e.file_id]?.presentation
      , L = u[e.file_id]?.workbook
      , X = P.useCallback(async oe => {
        if (n !== void 0) {
            oe.preventDefault();
            const {data: fe} = await C.refetch();
            if (fe === void 0 || fe?.status !== "success") {
                y.danger("Failed to download file");
                return
            }
            const ie = document.createElement("a");
            ie.href = fe.download_url,
            ie.click()
        }
    }
    , [n, C, y])
      , {refetch: Y} = C
      , z = $o();
    P.useEffect( () => {
        I.current?.abort();
        const oe = new AbortController;
        return I.current = oe,
        s(!0),
        (async () => {
            let fe = !1;
            try {
                const {data: ie} = await Y();
                if (ie === void 0 || ie?.status !== "success") {
                    y.danger("Failed to download file");
                    return
                }
                const F = await fetch(ie.download_url, {
                    headers: z ? {} : $l(),
                    signal: oe.signal
                });
                if (!F.ok)
                    throw new Error(`HTTP ${F.status}`);
                const H = await F.blob();
                if (v !== 0 && H.size > v) {
                    f(!0),
                    g("fileTooLarge"),
                    fe = !0;
                    return
                }
                const G = new Uint8Array(await H.arrayBuffer())
                  , _ = Mr(e.file_name) ?? "pptx"
                  , se = await r;
                if (_ === "pptx") {
                    const he = se.PptxReader.ExtractSlidesProto(G, !1)
                      , Ce = ni.decode(he);
                    a(e.file_id, {
                        fileBlob: H,
                        fileName: e.file_name,
                        presentation: Ce,
                        workbook: null,
                        selectedSlideIdx: 0,
                        selectedSheetIdx: 0
                    })
                } else {
                    const he = se.XlsxReader.ExtractXlsxProto(G, !1)
                      , Ce = oi.decode(he);
                    a(e.file_id, {
                        fileBlob: H,
                        fileName: e.file_name,
                        presentation: null,
                        workbook: Ce,
                        selectedSlideIdx: 0,
                        selectedSheetIdx: 0
                    })
                }
            } catch (ie) {
                ie.name !== "AbortError" && (f(!0),
                Ze.addError(ie, {
                    file_id: e.file_id
                }))
            } finally {
                s(!1),
                l && !fe && p(e.file_id)
            }
        }
        )(),
        () => {
            I.current?.abort()
        }
    }
    , [Y, y, a, e.file_name, e.file_id, l, p, v, z, r]);
    function Q(oe) {
        oe.preventDefault(),
        p(e.file_id)
    }
    const {onClick: Ne, isLoading: Ie, isEnabled: Z} = ys({
        clientThreadId: n,
        messageId: t,
        fileId: e.file_id,
        fileName: e.file_name,
        processedMarkdownInfo: null,
        isStandaloneAttachment: !0
    })
      , K = i && !l
      , ge = Mr(e.file_name);
    return w.jsxs("div", {
        className: we("border-token-border-light flex max-w-[calc(0.8*var(--thread-content-max-width,40rem))] flex-col overflow-hidden rounded-lg border", i && "mx-auto my-0"),
        children: [w.jsxs("div", {
            className: "text-token-text-secondary border-token-border-light flex flex-row justify-between gap-4 border-b p-2",
            children: [w.jsxs("div", {
                className: "flex flex-row items-center gap-2 overflow-hidden",
                children: [w.jsx(Ns, {
                    fileName: e.file_name
                }), w.jsx("div", {
                    className: "truncate text-sm font-medium",
                    children: ge === "pptx" ? w.jsx(ne, {
                        id: "HTIcmf",
                        defaultMessage: "Presentation"
                    }) : w.jsx(ne, {
                        id: "pftlup",
                        defaultMessage: "Spreadsheet"
                    })
                })]
            }), w.jsxs("div", {
                className: "text-token-text-tertiary flex flex-row items-center",
                children: [!K && w.jsxs(w.Fragment, {
                    children: [O && w.jsx("button", {
                        className: "hover:text-token-text-secondary hover:bg-token-bg-tertiary rounded-full p-1",
                        onClick: X,
                        children: w.jsx(Es, {})
                    }), w.jsx("button", {
                        className: "hover:text-token-text-secondary hover:bg-token-bg-tertiary rounded-full p-1",
                        disabled: !M && !L,
                        onClick: Q,
                        children: w.jsx(xs, {})
                    })]
                }), N && !!t && Z && w.jsx("button", {
                    className: "hover:text-token-text-secondary hover:bg-token-bg-tertiary rounded-full p-1",
                    disabled: !Z,
                    onClick: Ne,
                    children: Ie ? w.jsx(Zo, {
                        className: "size-4"
                    }) : w.jsx(Ts, {
                        className: "size-4"
                    })
                })]
            })]
        }), w.jsxs("div", {
            className: "bg-token-bg-secondary group relative p-2",
            children: [w.jsx(E1, {
                walnutId: e.file_id,
                isLoading: o,
                isError: h,
                isInShareModal: K,
                errorMessage: c,
                handleDownloadClick: X
            }), K && w.jsx("div", {
                className: "absolute end-5 top-46 z-10 inline-flex flex-shrink-0 items-end justify-end",
                children: w.jsx(ws, {
                    className: we("inline h-4 w-24 text-end")
                })
            })]
        })]
    })
}
  , T1 = new Set(["jpg", "jpeg", "png", "gif", "webp", "svg"])
  , w1 = e => {
    const n = e.split(".").pop();
    return n ? T1.has(n) : !1
}
;
function I1({citation: e, clientThreadId: n, messageId: t}) {
    const r = ft();
    return Is(e.file_name) && Ft(r, "3392860057") ? w.jsx(x1, {
        citation: e,
        clientThreadId: n,
        messageId: t,
        children: e.label ?? e.file_name
    }) : ks(e.file_name) ? w.jsx(Rs, {
        citation: e,
        clientThreadId: n,
        messageId: t
    }) : w.jsx(k1, {
        citation: e,
        clientThreadId: n,
        messageId: t
    })
}
function k1({citation: e, clientThreadId: n}) {
    const t = Dt(n)
      , r = fr()
      , o = P.useCallback(c => {
        r.danger(c, {
            toastId: "fcoa_renderer_failed_to_download_file"
        })
    }
    , [r])
      , {data: s} = Bo(!0, t, e.file_id, void 0, o);
    return w1(e.file_name) && s?.download_url ? w.jsx("img", {
        src: s?.download_url,
        alt: e.label ?? e.file_name,
        className: "max-h-[350px] max-w-screen"
    }) : w.jsx("a", {
        href: s?.download_url,
        children: e.label ?? e.file_name
    })
}
function R1({citationIndex: e, clientThreadId: n, nodeType: t, messageId: r}) {
    const o = parseInt(e, 10)
      , s = P.useContext(mn);
    if (!s)
        return null;
    const c = s.n7jupdCrefs?.[o];
    if (!c)
        return null;
    switch (c.type) {
    case "clipboard":
        return w.jsx(Cs, {
            citation: c
        });
    case "computer_output":
        return w.jsx(Wf, {
            citation: c,
            clientThreadId: n,
            nodeType: t
        });
    case "file":
        return w.jsx(I1, {
            citation: c,
            clientThreadId: n,
            messageId: r
        });
    case "invalid":
        return null
    }
}
function C1({title: e, prompt: n, environmentId: t, branch: r, contentId: o, hasHitRateLimit: s}) {
    const [c,g] = P.useState(!1)
      , h = Zl()
      , {setEnvironmentId: f, setBranch: i} = Wo()
      , {refetch: l} = Os()
      , u = Xe()
      , a = fr()
      , p = Dr(y => y.tasks[o])
      , d = Dr(y => y.store)
      , {mutate: m, isPending: N} = Ki({
        mutationFn: () => Ss.createNewTask(t, r, n, !1).catch(y => {
            throw a.danger({
                id: "wham.whamComposer.failedToCreateTask",
                defaultMessage: "Failed to create task",
                description: "Toast text shown when a task failed to create."
            }, {
                id: `suggestion-${o}`,
                duration: 5,
                hasCloseButton: !0,
                toastId: "wham_proposed_task_failed_to_create_task"
            }),
            y
        }
        ),
        onSuccess: async y => {
            await l(),
            T(y)
        }
    })
      , T = y => {
        try {
            const I = y.task.id
              , x = y.turn.id
              , O = `/codex/tasks/${I}`;
            d({
                contentId: o,
                prompt: n,
                scheduledTaskId: I,
                turnId: x,
                url: O
            }),
            g(!1)
        } catch {}
    }
      , v = !t || !r || N || s;
    return w.jsxs("div", {
        className: we("mt-1 mb-3 flex w-full items-center rounded-xl px-3 py-3", p ? "bg-token-bg-secondary border border-transparent" : "bg-token-bg-primary border-token-border-default border shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)]"),
        children: [w.jsxs("div", {
            className: we("group flex flex-1 items-center gap-1", !p && "-my-3 py-3", !p && !v && "cursor-pointer"),
            onClick: () => {
                v || p || (f(t),
                i(r),
                g(!0),
                Fr.recordProposedTaskClicked("edit"))
            }
            ,
            children: [w.jsxs("div", {
                className: "flex flex-col gap-0.5",
                children: [w.jsx("span", {
                    className: "text-token-text-tertiary text-xs",
                    children: w.jsx(ne, {
                        id: "wham.whamProposedTask.title",
                        defaultMessage: "Suggested task"
                    })
                }), w.jsx("span", {
                    className: we("text-sm font-medium", p && "text-token-text-tertiary"),
                    children: e
                })]
            }), !v && !p && w.jsx(As, {
                className: "icon-sm text-token-text-secondary mb-0.5 cursor-pointer self-end opacity-0 transition-opacity group-hover:opacity-100"
            })]
        }), w.jsx("div", {
            className: "flex items-center justify-end gap-2 text-xs",
            children: p ? w.jsx(it, {
                size: "small",
                color: "secondary",
                as: "a",
                to: p?.url,
                openNewTab: !0,
                children: w.jsx("span", {
                    className: "text-token-text-primary font-medium",
                    children: w.jsx(ne, {
                        id: "lwqFNG",
                        defaultMessage: "View task"
                    })
                })
            }) : w.jsx(O1, {
                prompt: s ? u.formatMessage({
                    id: "wham.proposedTask.hitRateLimit",
                    defaultMessage: "You have reached your rate limit"
                }) : n,
                tooltipEnabled: !p && !c,
                children: w.jsx(it, {
                    size: "small",
                    color: "secondary",
                    disabled: v,
                    onClick: () => {
                        Fr.recordProposedTaskClicked("create"),
                        m()
                    }
                    ,
                    children: w.jsxs("div", {
                        className: "flex items-center gap-0.5",
                        children: [w.jsx(ne, {
                            id: "b2N2Y8",
                            defaultMessage: "Start task"
                        }), N ? w.jsx(Zo, {
                            className: "icon-xs me-[2px]"
                        }) : w.jsx(Ps, {
                            className: "icon-sm"
                        })]
                    })
                })
            })
        }), w.jsx(Vr.Root, {
            testId: "modal-task-stub-composer",
            isOpen: c,
            onClose: () => g(!1),
            children: w.jsx(Vr.Overlay, {
                children: w.jsx("div", {
                    className: "flex h-full w-full items-center justify-center",
                    onClick: y => {
                        y.stopPropagation(),
                        y.preventDefault()
                    }
                    ,
                    children: w.jsxs(Kl, {
                        className: "w-3xl focus:outline-hidden",
                        onEscapeKeyDown: y => {
                            y.stopPropagation(),
                            g(!1)
                        }
                        ,
                        children: [w.jsxs(Ql, {
                            children: [w.jsx(_l, {
                                children: w.jsx(ne, {
                                    id: "wham.proposedTaskModel.title",
                                    defaultMessage: "Kick off a new Codex task"
                                })
                            }), w.jsx(jl, {
                                children: w.jsx(ne, {
                                    id: "wham.proposedTaskModel.description",
                                    defaultMessage: "Codex can propose new follow up tasks"
                                })
                            })]
                        }), w.jsx(Qi.div, {
                            initial: {
                                opacity: 0,
                                translateY: 20
                            },
                            animate: {
                                opacity: 1,
                                translateY: 0
                            },
                            transition: {
                                duration: h ? 0 : .25
                            },
                            children: w.jsxs("div", {
                                className: "flex flex-col items-center gap-8",
                                children: [w.jsx("h1", {
                                    className: "text-token-text-primary dark text-token-text-primary text-[28px] font-semibold",
                                    children: w.jsx(ne, {
                                        id: "wham.proposedTaskModal.title",
                                        defaultMessage: "Edit suggested task"
                                    })
                                }), w.jsx(S1, {
                                    prompt: n,
                                    onSuccess: T
                                })]
                            })
                        })]
                    })
                })
            })
        })]
    })
}
function O1({prompt: e, tooltipEnabled: n, children: t}) {
    return n ? w.jsx(Ko, {
        side: "right",
        label: w.jsx("span", {
            className: "block p-2 text-start whitespace-pre-wrap",
            children: e
        }),
        wide: !0,
        children: t
    }) : t
}
function S1({prompt: e, onSuccess: n}) {
    const t = ef()
      , r = P.useMemo( () => t ? new Nf(vf()) : new Ls, [t]);
    return P.useEffect( () => {
        r.setText(e.trimEnd())
    }
    , [r, e]),
    w.jsx(yf.Provider, {
        value: r,
        children: w.jsx(Ef, {
            isBigBoxMode: !0,
            expanded: !0,
            disableDuringSubmit: !0,
            onSuccess: n
        })
    })
}
function A1({title: e, prompt: n}) {
    const t = P.useContext(Ms)
      , r = Wo(s => s.getRateLimit()?.remaining === 0)
      , o = P.useMemo( () => P1(`${t?.taskId}:${e}:${n}`), [t?.taskId, e, n]);
    return !t || !t.environmentId || !t.branch ? null : w.jsx(C1, {
        title: e,
        prompt: n,
        environmentId: t.environmentId,
        branch: t.branch,
        contentId: o,
        hasHitRateLimit: r
    })
}
function P1(e) {
    let n = 5381;
    for (let t = 0; t < e.length; t++)
        n = (n << 5) + n ^ e.charCodeAt(t);
    return (n >>> 0).toString(16).padStart(8, "0")
}
function L1({attribution: e, wordFadeType: n}) {
    const t = P.useContext(mn)
      , r = Ds(t?.message.id, e.attributable_index)
      , o = Fs();
    return w.jsx(F1, {
        isHighlighted: r,
        isDebugMode: o && !1,
        content: e.alt ?? "",
        attributableIndex: e.attributable_index,
        attributions: void 0,
        attributionsDebug: void 0,
        wordFadeType: n
    })
}
const M1 = P.memo(lr);
function D1({content: e, isHighlighted: n, isDebugMode: t, attributableIndex: r, attributions: o, attributionsDebug: s, wordFadeType: c}) {
    const g = c === "indexed"
      , h = Xo()
      , f = P.useMemo( () => g ? {
        handlers: {
            text: (u, a, p) => {
                const d = [];
                for (const m of h(a.value))
                    d.push({
                        type: "element",
                        tagName: "span",
                        properties: {
                            className: Vo.fadeIn
                        },
                        children: [{
                            type: "text",
                            value: m
                        }]
                    });
                return d
            }
        }
    } : void 0, [g, h])
      , i = P.useMemo( () => ({
        p: ({children: u}) => w.jsx(w.Fragment, {
            children: u
        })
    }), [])
      , l = w.jsx(M1, {
        rehypePlugins: Go,
        remarkPlugins: zo,
        urlTransform: qo,
        remarkRehypeOptions: f,
        components: i,
        children: e
    });
    return w.jsx(J1, {
        isHighlighted: n,
        children: l
    })
}
const F1 = _i.memo(D1);
function J1({isHighlighted: e, className: n, children: t}) {
    return w.jsx("span", {
        className: we("relative", "-mx-px my-[-0.2rem] rounded px-px py-[0.2rem]", e && "bg-[#FCECC1] dark:bg-[#64572A]", "transition-colors duration-100 ease-in-out", n),
        children: t
    })
}
const Ao = 24;
function U1(e) {
    const n = e.split(".");
    let t = e;
    return n.length > 1 && n.slice(0, -1).some(r => r.length > 0) && (t = n.slice(0, -1).join(".")),
    t.length > Ao && (t = t.slice(0, Ao - 1) + "…"),
    t
}
function B1({fileRef: e, index: n, trackContentReferenceEvent: t}) {
    const r = nf()
      , o = P.useContext(mn)
      , s = P.useMemo( () => ({
        source: e.source,
        index: n
    }), [e.source, n]);
    P.useEffect( () => {
        t("File Citation Shown", "file_citation_shown", "file", s)
    }
    , []);
    const c = P.useCallback(l => {
        l ? t("File Citation Hovered", "file_citation_hovered", "file", s) : t("File Citation Unhovered", "file_citation_unhovered", "file", s)
    }
    , [s, t])
      , g = P.useCallback( () => {
        t("File Citation Clicked", "file_citation_clicked", "file", s)
    }
    , [s, t])
      , h = P.useCallback( () => {
        t("File Citation Followup Clicked", "file_citation_followup_clicked", "file", s)
    }
    , [s, t])
      , f = P.useCallback( () => r(e.id, e.name), [r, e.id, e.name])
      , i = bo(o?.analyticsMetadata.clientThreadId ?? Qo, l => l?.mode);
    return Js(i) ? i.gizmo_id && tf(i.gizmo_id) ? w.jsx("span", {
        className: we(Us, "ms-1"),
        title: e.name,
        children: U1(e.name)
    }) : null : w.jsx(W1, {
        fileItem: e,
        onClickDownloadFile: f,
        trackCloudLinkClick: g,
        trackFileCitationFollowup: h,
        trackTooltipOpenChange: c
    })
}
function W1({className: e, fileItem: n, onClickDownloadFile: t, trackCloudLinkClick: r, trackFileCitationFollowup: o, trackTooltipOpenChange: s}) {
    const c = Xe()
      , g = ft()
      , {fileName: h, fileTypeDisplayName: f, fileTypeIcon: i, url: l, snippet: u} = Bs(n, "h-[16px] w-[16px] object-contain", g, c)
      , a = we("ms-1 flex h-[22px] items-center rounded-xl px-2 relative bottom-[-2px]", "bg-[#f4f4f4] text-token-text-secondary! hover:bg-token-bg-secondary dark:bg-token-main-surface-secondary dark:hover:bg-token-bg-secondary", e)
      , p = w.jsx("span", {
        className: "relative inline-flex items-center",
        children: l ? w.jsx(ur, {
            href: l,
            className: a,
            onClick: r,
            children: i
        }) : w.jsx("button", {
            onClick: t,
            className: a,
            children: i
        })
    });
    return w.jsx(X1, {
        contentType: f,
        fileId: n.id,
        href: l,
        icon: i,
        name: h,
        snippet: u,
        trackFileCitationFollowup: o,
        trackTooltipOpenChange: s,
        children: p
    })
}
function X1({children: e, className: n, contentType: t, fileId: r, href: o, icon: s, name: c, snippet: g, trackFileCitationFollowup: h, trackTooltipOpenChange: f}) {
    const i = Jt()
      , u = P.useContext(mn)?.clientThreadId ?? Qo
      , a = $o()
      , p = ft()
      , d = Ft(p, "733205176")
      , m = xf(u, r, c, o)
      , N = P.useCallback( (T, v) => {
        v.length && (m(T, v),
        h?.())
    }
    , [m, h]);
    return w.jsx(Ko, {
        label: w.jsxs(w.Fragment, {
            children: [w.jsxs(ur, {
                href: o,
                className: we("text-token-text-primary flex max-w-80 flex-col gap-1 text-start text-xs font-normal no-underline!", n),
                children: [w.jsxs("div", {
                    className: "flex items-center gap-1.5",
                    children: [w.jsx("div", {
                        className: "h-4 w-4 shrink-0 overflow-hidden rounded-full",
                        children: s
                    }), w.jsx("div", {
                        className: "text-token-text-primary truncate",
                        children: t
                    })]
                }), w.jsx("div", {
                    className: "line-clamp-2 text-sm font-medium break-all",
                    children: c
                }), g && w.jsx("div", {
                    className: "text-token-text-secondary line-clamp-2 text-sm",
                    children: g
                })]
            }), a || d ? null : w.jsx("div", {
                className: "flex w-full cursor-pointer flex-row items-center gap-2 pt-3 text-sm",
                children: w.jsx(Tf, {
                    sendReply: N
                })
            })]
        }),
        align: "start",
        cornerRadius: "xl",
        customBorderClassName: "border-token-border-default border",
        customPaddingClassName: "p-3",
        delayDuration: 150,
        interactive: !0,
        onOpenChange: f,
        side: "bottom",
        theme: i ? "default" : "white",
        wide: !0,
        children: e
    })
}
var jt = {
    line: {
        color: "#F66",
        width: 1,
        dashPattern: []
    },
    sync: {
        enabled: !0,
        group: 1,
        suppressTooltips: !1
    },
    zoom: {
        enabled: !0,
        zoomboxBackgroundColor: "rgba(66,133,244,0.2)",
        zoomboxBorderColor: "#48F",
        zoomButtonText: "Reset Zoom",
        zoomButtonClass: "reset-zoom"
    },
    snap: {
        enabled: !1
    },
    callbacks: {
        beforeZoom: function(e, n) {
            return !0
        },
        afterZoom: function(e, n) {}
    }
}
  , V1 = {
    id: "crosshair",
    afterInit: function(e) {
        if (e.config.options.scales.x) {
            var n = e.config.options.scales.x.type;
            if (!(n !== "linear" && n !== "time" && n !== "category" && n !== "logarithmic")) {
                e.options.plugins.crosshair === void 0 && (e.options.plugins.crosshair = jt),
                e.crosshair = {
                    enabled: !1,
                    suppressUpdate: !1,
                    x: null,
                    originalData: [],
                    originalXRange: {},
                    dragStarted: !1,
                    dragStartX: null,
                    dragEndX: null,
                    suppressTooltips: !1,
                    ignoreNextEvents: 0,
                    reset: function() {
                        this.resetZoom(e, !1, !1)
                    }
                    .bind(this)
                };
                var t = this.getOption(e, "sync", "enabled");
                t && (e.crosshair.syncEventHandler = function(r) {
                    this.handleSyncEvent(e, r)
                }
                .bind(this),
                e.crosshair.resetZoomEventHandler = function(r) {
                    var o = this.getOption(e, "sync", "group");
                    r.chartId !== e.id && r.syncGroup === o && this.resetZoom(e, !0)
                }
                .bind(this),
                window.addEventListener("sync-event", e.crosshair.syncEventHandler),
                window.addEventListener("reset-zoom-event", e.crosshair.resetZoomEventHandler)),
                e.panZoom = this.panZoom.bind(this, e)
            }
        }
    },
    afterDestroy: function(e) {
        var n = this.getOption(e, "sync", "enabled");
        n && (window.removeEventListener("sync-event", e.crosshair.syncEventHandler),
        window.removeEventListener("reset-zoom-event", e.crosshair.resetZoomEventHandler))
    },
    panZoom: function(e, n) {
        if (e.crosshair.originalData.length !== 0) {
            var t = e.crosshair.end - e.crosshair.start
              , r = e.crosshair.min
              , o = e.crosshair.max;
            n < 0 ? (e.crosshair.start = Math.max(e.crosshair.start + n, r),
            e.crosshair.end = e.crosshair.start === r ? r + t : e.crosshair.end + n) : (e.crosshair.end = Math.min(e.crosshair.end + n, e.crosshair.max),
            e.crosshair.start = e.crosshair.end === o ? o - t : e.crosshair.start + n),
            this.doZoom(e, e.crosshair.start, e.crosshair.end)
        }
    },
    getOption: function(e, n, t) {
        return Hr(e.options.plugins.crosshair[n] ? e.options.plugins.crosshair[n][t] : void 0, jt[n][t])
    },
    getXScale: function(e) {
        return e.data.datasets.length ? e.scales[e.getDatasetMeta(0).xAxisID] : null
    },
    getYScale: function(e) {
        return e.scales[e.getDatasetMeta(0).yAxisID]
    },
    handleSyncEvent: function(e, n) {
        var t = this.getOption(e, "sync", "group");
        if (n.chartId !== e.id && n.syncGroup === t) {
            var r = this.getXScale(e);
            if (r) {
                var o = n.original.native.buttons === void 0 ? n.original.native.which : n.original.native.buttons;
                n.original.type === "mouseup" && (o = 0);
                var s = {
                    type: n.original.type == "click" ? "mousemove" : n.original.type,
                    chart: e,
                    x: r.getPixelForValue(n.xValue),
                    y: n.original.y,
                    native: {
                        buttons: o
                    },
                    stop: !0
                };
                e._eventHandler(s)
            }
        }
    },
    afterEvent: function(e, n) {
        if (e.config.options.scales.x.length == 0)
            return;
        let t = n.event;
        var r = e.config.options.scales.x.type;
        if (!(r !== "linear" && r !== "time" && r !== "category" && xscaleType !== "logarithmic")) {
            var o = this.getXScale(e);
            if (o) {
                if (e.crosshair.ignoreNextEvents > 0) {
                    e.crosshair.ignoreNextEvents -= 1;
                    return
                }
                var s = t.native.buttons === void 0 ? t.native.which : t.native.buttons;
                t.native.type === "mouseup" && (s = 0);
                var c = this.getOption(e, "sync", "enabled")
                  , g = this.getOption(e, "sync", "group");
                if (!t.stop && c) {
                    var n = new CustomEvent("sync-event");
                    n.chartId = e.id,
                    n.syncGroup = g,
                    n.original = t,
                    n.xValue = o.getValueForPixel(t.x),
                    window.dispatchEvent(n)
                }
                var h = this.getOption(e, "sync", "suppressTooltips");
                if (e.crosshair.suppressTooltips = t.stop && h,
                e.crosshair.enabled = t.type !== "mouseout" && t.x > o.getPixelForValue(o.min) && t.x < o.getPixelForValue(o.max),
                !e.crosshair.enabled && !e.crosshair.suppressUpdate)
                    return t.x > o.getPixelForValue(o.max) && (e.crosshair.suppressUpdate = !0,
                    e.update("none")),
                    e.crosshair.dragStarted = !1,
                    !1;
                e.crosshair.suppressUpdate = !1;
                var f = this.getOption(e, "zoom", "enabled");
                if (s === 1 && !e.crosshair.dragStarted && f && (e.crosshair.dragStartX = t.x,
                e.crosshair.dragStarted = !0),
                e.crosshair.dragStarted && s === 0) {
                    e.crosshair.dragStarted = !1;
                    var i = o.getValueForPixel(e.crosshair.dragStartX)
                      , l = o.getValueForPixel(e.crosshair.x);
                    Math.abs(e.crosshair.dragStartX - e.crosshair.x) > 1 && this.doZoom(e, i, l),
                    e.update("none")
                }
                e.crosshair.x = t.x,
                e.draw()
            }
        }
    },
    afterDraw: function(e) {
        if (e.crosshair.enabled)
            return e.crosshair.dragStarted ? this.drawZoombox(e) : (this.drawTraceLine(e),
            this.interpolateValues(e),
            this.drawTracePoints(e)),
            !0
    },
    beforeTooltipDraw: function(e) {
        return !e.crosshair.dragStarted && !e.crosshair.suppressTooltips
    },
    resetZoom: function(e) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
          , t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        if (t) {
            if (e.crosshair.originalData.length > 0)
                for (var r = 0; r < e.data.datasets.length; r++) {
                    var o = e.data.datasets[r];
                    o.data = e.crosshair.originalData.shift(0)
                }
            e.crosshair.originalXRange.min ? (e.options.scales.x.min = e.crosshair.originalXRange.min,
            e.crosshair.originalXRange.min = null) : delete e.options.scales.x.min,
            e.crosshair.originalXRange.max ? (e.options.scales.x.max = e.crosshair.originalXRange.max,
            e.crosshair.originalXRange.max = null) : delete e.options.scales.x.max
        }
        e.crosshair.button && e.crosshair.button.parentNode && (e.crosshair.button.parentNode.removeChild(e.crosshair.button),
        e.crosshair.button = !1);
        var s = this.getOption(e, "sync", "enabled");
        if (!n && t && s) {
            var c = this.getOption(e, "sync", "group")
              , g = new CustomEvent("reset-zoom-event");
            g.chartId = e.id,
            g.syncGroup = c,
            window.dispatchEvent(g)
        }
        t && e.update("none")
    },
    doZoom: function(e, n, t) {
        if (n > t) {
            var r = n;
            n = t,
            t = r
        }
        var o = Hr(e.options.plugins.crosshair.callbacks ? e.options.plugins.crosshair.callbacks.beforeZoom : void 0, jt.callbacks.beforeZoom);
        if (!o(n, t))
            return !1;
        if (e.crosshair.dragStarted = !1,
        e.options.scales.x.min && e.crosshair.originalData.length === 0 && (e.crosshair.originalXRange.min = e.options.scales.x.min),
        e.options.scales.x.max && e.crosshair.originalData.length === 0 && (e.crosshair.originalXRange.max = e.options.scales.x.max),
        !e.crosshair.button) {
            var s = document.createElement("button")
              , c = this.getOption(e, "zoom", "zoomButtonText")
              , g = this.getOption(e, "zoom", "zoomButtonClass")
              , h = document.createTextNode(c);
            s.appendChild(h),
            s.className = g,
            s.addEventListener("click", function() {
                this.resetZoom(e)
            }
            .bind(this)),
            e.canvas.parentNode.appendChild(s),
            e.crosshair.button = s
        }
        e.options.scales.x.min = n,
        e.options.scales.x.max = t;
        var f = e.crosshair.originalData.length === 0
          , i = e.config.options.scales.x.type !== "category";
        if (i)
            for (var l = 0; l < e.data.datasets.length; l++) {
                var u = []
                  , a = 0
                  , p = !1
                  , d = !1;
                f && (e.crosshair.originalData[l] = e.data.datasets[l].data);
                for (var m = e.crosshair.originalData[l], N = 0; N < m.length; N++) {
                    var T = m[N]
                      , v = T.x !== void 0 ? T.x : NaN;
                    v >= n && !p && a > 0 && (u.push(m[a - 1]),
                    p = !0),
                    v >= n && v <= t && u.push(T),
                    v > t && !d && a < m.length && (u.push(T),
                    d = !0),
                    a += 1
                }
                e.data.datasets[l].data = u
            }
        if (e.crosshair.start = n,
        e.crosshair.end = t,
        f) {
            var y = this.getXScale(e);
            e.crosshair.min = y.min,
            e.crosshair.max = y.max
        }
        e.crosshair.ignoreNextEvents = 2,
        e.update("none");
        var I = this.getOption(e, "callbacks", "afterZoom");
        I(n, t)
    },
    drawZoombox: function(e) {
        var n = this.getYScale(e)
          , t = this.getOption(e, "zoom", "zoomboxBorderColor")
          , r = this.getOption(e, "zoom", "zoomboxBackgroundColor");
        e.ctx.beginPath(),
        e.ctx.rect(e.crosshair.dragStartX, n.getPixelForValue(n.max), e.crosshair.x - e.crosshair.dragStartX, n.getPixelForValue(n.min) - n.getPixelForValue(n.max)),
        e.ctx.lineWidth = 1,
        e.ctx.strokeStyle = t,
        e.ctx.fillStyle = r,
        e.ctx.fill(),
        e.ctx.fillStyle = "",
        e.ctx.stroke(),
        e.ctx.closePath()
    },
    drawTraceLine: function(e) {
        var n = this.getYScale(e)
          , t = this.getOption(e, "line", "width")
          , r = this.getOption(e, "line", "color")
          , o = this.getOption(e, "line", "dashPattern")
          , s = this.getOption(e, "snap", "enabled")
          , c = e.crosshair.x;
        s && e._active.length && (c = e._active[0].element.x),
        e.ctx.beginPath(),
        e.ctx.setLineDash(o),
        e.ctx.moveTo(c, n.getPixelForValue(n.max)),
        e.ctx.lineWidth = t,
        e.ctx.strokeStyle = r,
        e.ctx.lineTo(c, n.getPixelForValue(n.min)),
        e.ctx.stroke(),
        e.ctx.setLineDash([])
    },
    drawTracePoints: function(e) {
        for (var n = 0; n < e.data.datasets.length; n++) {
            var t = e.data.datasets[n]
              , r = e.getDatasetMeta(n)
              , o = e.scales[r.yAxisID];
            r.hidden || !t.interpolate || (e.ctx.beginPath(),
            e.ctx.arc(e.crosshair.x, o.getPixelForValue(t.interpolatedValue), 3, 0, 2 * Math.PI, !1),
            e.ctx.fillStyle = "white",
            e.ctx.lineWidth = 2,
            e.ctx.strokeStyle = t.borderColor,
            e.ctx.fill(),
            e.ctx.stroke())
        }
    },
    interpolateValues: function(e) {
        for (var n = 0; n < e.data.datasets.length; n++) {
            var t = e.data.datasets[n]
              , r = e.getDatasetMeta(n)
              , o = e.scales[r.xAxisID]
              , s = o.getValueForPixel(e.crosshair.x);
            if (!(r.hidden || !t.interpolate)) {
                var c = t.data
                  , g = c.findIndex(function(l) {
                    return l.x >= s
                })
                  , h = c[g - 1]
                  , f = c[g];
                if (e.data.datasets[n].steppedLine && h)
                    t.interpolatedValue = h.y;
                else if (h && f) {
                    var i = (f.y - h.y) / (f.x - h.x);
                    t.interpolatedValue = h.y + (s - h.x) * i
                } else
                    t.interpolatedValue = NaN
            }
        }
    }
};
wf.register(If, kf, Rf, Cf, Of, Sf, Af, Pf, Lf, V1, Mf);
const H1 = 100
  , Po = {
    color: "#b4b4b4",
    font: {
        size: 10,
        weight: "600",
        family: "Menlo"
    }
};
function q1({isUp: e, histories: n, selectedInterval: t, setHighlightedPrice: r, latestTradingPeriod: o, timezone: s}) {
    return w.jsx(w.Fragment, {
        children: n && t && o ? w.jsx(z1, {
            isUp: e,
            histories: n,
            selectedInterval: t,
            latestTradingPeriod: o,
            timezone: s,
            setHighlightedPrice: r
        }) : w.jsx(rt, {
            className: "h-full",
            index: 1,
            width: 100
        })
    })
}
function z1({isUp: e, histories: n, selectedInterval: t, latestTradingPeriod: r, timezone: o, setHighlightedPrice: s}) {
    const [c,g] = P.useState(null)
      , [h,f] = P.useState(!1)
      , i = t === "1d"
      , l = P.useMemo( () => {
        let y = n.quotes[t].filter(I => I.close >= 0);
        if (i && r) {
            const I = r.regular.start_timestamp
              , x = r.regular.end_timestamp;
            if (y = y.filter(O => O.timestamp >= I && O.timestamp <= x),
            y.length === 0 || y[y.length - 1].timestamp < x) {
                let C = y.length > 0 ? y[y.length - 1].timestamp : I - 600;
                for (; C < x; )
                    C += 600,
                    y.push({
                        timestamp: C,
                        close: null
                    })
            }
        }
        return y
    }
    , [n, t, i, r])
      , u = Ws[t]
      , {formatTimestampTooltip: a, maxTicksLimit: p, useUtc: d=!1} = u
      , m = Xe()
      , N = _o()
      , T = Jt()
      , v = P.useMemo( () => {
        const {formatTimestampLabel: y, lineTension: I} = u;
        return {
            labels: l.map(x => y(m, x.timestamp, d ? "UTC" : o)),
            datasets: [{
                data: l.map(x => x.close),
                borderColor: e ? It() : kt(),
                pointRadius: 0,
                pointHoverRadius: 4,
                pointStyle: "circle",
                pointBackgroundColor: e ? It() : kt(),
                pointHoverBorderWidth: 2,
                pointHoverBorderColor: "rgba(255, 255, 255, 1)",
                backgroundColor: function(x) {
                    const {ctx: O, chartArea: C} = x.chart;
                    if (C)
                        return b1(O, C, e)
                },
                fill: !0,
                borderWidth: 2,
                lineTension: I ?? .4
            }]
        }
    }
    , [u, l, e, d, o, m]);
    return w.jsx("div", {
        className: "flex h-full flex-col gap-6",
        children: w.jsxs("div", {
            className: "relative h-full",
            onMouseEnter: () => f(!0),
            onMouseLeave: () => {
                f(!1),
                s(null)
            }
            ,
            children: [w.jsx(Df, {
                options: {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    interaction: {
                        intersect: !1,
                        mode: "index"
                    },
                    hover: {
                        mode: h ? "index" : "point"
                    },
                    animation: !1,
                    scales: {
                        x: {
                            afterBuildTicks: y => {
                                if (y.ticks.length > p)
                                    if (i)
                                        y.ticks = y.ticks.filter( (I, x) => l[x].timestamp % (N ? 3600 : 7200) === 0);
                                    else {
                                        const I = Math.ceil(y.ticks.length / (p - 1));
                                        y.ticks = y.ticks.filter( (x, O) => O > 0 && (O % I === 0 || O === y.ticks.length - 1))
                                    }
                            }
                            ,
                            grid: {
                                display: !1
                            },
                            ticks: {
                                ...Po,
                                align: "end"
                            }
                        },
                        y: {
                            ticks: {
                                ...Po,
                                maxTicksLimit: 7
                            },
                            border: {
                                display: !1
                            },
                            grid: {
                                color: T ? "rgba(255, 255, 255, 0.1)" : "rgba(229, 229, 229, 0.5)"
                            }
                        }
                    },
                    plugins: {
                        datalabels: {
                            display: !1
                        },
                        legend: {
                            display: !1
                        },
                        tooltip: {
                            enabled: !1,
                            animation: !1,
                            displayColors: !1,
                            callbacks: {
                                title: function(y) {
                                    const I = y[0];
                                    if (!I)
                                        return "";
                                    const x = l[I.dataIndex]?.timestamp;
                                    return x ? a(m, x, d ? "UTC" : o) : ""
                                }
                            },
                            external: ({tooltip: y}) => {
                                h && y.opacity > 0 && s(ot(y.dataPoints?.[0]?.parsed?.y ?? 0)),
                                g(I => {
                                    const x = y.chart.width
                                      , O = y.caretX > x - H1;
                                    return !I || I.x !== y.caretX || I.y !== y.caretY || I.opacity !== y.opacity || I.flip !== O ? {
                                        ...I,
                                        x: y.caretX,
                                        y: y.caretY,
                                        dateLabel: y.title?.[0],
                                        value: ot(y.dataPoints?.[0]?.parsed?.y ?? 0),
                                        opacity: y.opacity,
                                        flip: O
                                    } : I
                                }
                                )
                            }
                        },
                        dropShadow: !1,
                        crosshair: {
                            line: {
                                color: T ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)",
                                width: .5
                            },
                            zoom: {
                                enabled: !1
                            }
                        }
                    }
                },
                data: v
            }), w.jsx(G1, {
                tooltipData: c
            })]
        })
    })
}
function G1({tooltipData: e}) {
    return !e || !e.opacity ? null : w.jsx("div", {
        style: {
            left: e.x - 5,
            top: 10,
            transform: "translate(-50%, -50%)"
        },
        className: we("text-token-main-surface-primary dark:bg-token-main-surface-secondary pointer-events-none absolute translate-y-[-100%] rounded-lg bg-black px-2 py-1 font-mono font-semibold whitespace-nowrap dark:text-white"),
        children: w.jsx("div", {
            className: "text-xs",
            children: e.dateLabel
        })
    })
}
function b1(e, n, t) {
    const r = e.createLinearGradient(0, n.top, 0, n.bottom);
    return r.addColorStop(0, t ? It(.4) : kt(.4)),
    r.addColorStop(1, t ? It(0) : kt(0)),
    r
}
function ot(e) {
    return new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(e)
}
function Y1({data: e, priceChange: n, highlightedPrice: t, extendedPriceChange: r, url: o}) {
    function s(c, g="intraday", h=null) {
        const {isUp: f, changePercentage: i, changeLabel: l, changeAmount: u} = c
          , a = Math.abs(i).toFixed(2)
          , p = ot(u);
        return w.jsxs("span", {
            className: "flex min-w-0 items-center gap-1",
            children: [g === "extended_hours" && h != null && w.jsx("span", {
                className: "font-semibold",
                children: w.jsx(ne, {
                    id: "HWwWpW",
                    defaultMessage: "{price}",
                    values: {
                        price: h
                    }
                })
            }), w.jsx("span", {
                className: we("font-semibold", f ? Jr : Ur),
                children: w.jsx(ne, {
                    id: "3x4Lkl",
                    defaultMessage: "{sign}{changeAmount}",
                    values: {
                        changeAmount: p,
                        sign: f ? "+" : ""
                    }
                })
            }), w.jsx("span", {
                className: we("font-semibold", f ? Jr : Ur),
                children: w.jsx(ne, {
                    id: "MbfF1T",
                    defaultMessage: "({sign}{changePercentage}%)",
                    values: {
                        changePercentage: a,
                        sign: f ? "+" : "-"
                    }
                })
            }), g === "extended_hours" ? w.jsx("span", {
                className: "text-token-text-primary min-w-0 truncate",
                children: l
            }) : w.jsx("span", {
                className: "text-token-text-primary min-w-0 truncate",
                children: l
            })]
        })
    }
    return w.jsxs("div", {
        children: [w.jsx("div", {
            className: "mt-2 text-sm",
            children: e ? w.jsx(ne, {
                id: "+2WHuv",
                defaultMessage: "{name} ({ticker})",
                values: {
                    name: e.asset.name,
                    ticker: e.asset.ticker
                }
            }) : w.jsx("div", {
                className: "w-32 font-medium",
                children: w.jsx(rt, {
                    index: 9,
                    width: 100
                })
            })
        }), w.jsx("div", {
            className: "text-token-text-tertiary text-sm",
            children: e ? w.jsx(w.Fragment, {
                children: o != null && w.jsxs(w.Fragment, {
                    children: [" · ", w.jsx(ur, {
                        href: o,
                        className: "text-token-link hover:underline",
                        children: Xs(o, "hostname")
                    })]
                })
            }) : w.jsx("div", {
                className: "mt-2 w-36",
                children: w.jsx(rt, {
                    index: 6,
                    width: 100
                })
            })
        }), w.jsx("div", {
            className: "mt-2 flex text-4xl font-semibold",
            children: e ? w.jsx(ne, {
                id: "s+1uly",
                defaultMessage: "{price}",
                values: {
                    price: t ?? ot(e.price.price)
                }
            }) : w.jsx("div", {
                className: "w-32",
                children: w.jsx(rt, {
                    index: 0,
                    width: 100
                })
            })
        }), w.jsx("div", {
            className: "mt-2 flex items-center justify-start gap-1 text-sm",
            children: n ? s(n) : w.jsx("div", {
                className: "mt-2 w-40",
                children: w.jsx(rt, {
                    index: 3,
                    width: 100
                })
            })
        }), w.jsx("div", {
            className: "mt-0.5 flex items-center justify-start gap-1 text-sm",
            children: e?.price?.extended_price != null && r != null && s(r, "extended_hours", ot(e.price.extended_price))
        })]
    })
}
function $1({contentReference: e, trackContentReferenceEvent: n}) {
    const t = Xe();
    P.useEffect( () => {
        n("Search Content Reference Shown", "search_content_reference_shown", "stock")
    }
    , [n]);
    const r = Vs(e?.stock?.histories)
      , o = e?.stock
      , [s,c] = P.useState(r)
      , [g,h] = P.useState(null)
      , f = s === "1d"
      , i = o?.histories?.quotes?.[s ?? ""]?.[0]
      , l = s && s in Et ? s : void 0
      , u = o && (i && !f ? {
        changePercentage: (o.price.price - i.close) / i.close * 100,
        changeAmount: o.price.price - i.close,
        changeLabel: l ? t.formatMessage(Et[l]) : "",
        isUp: o.price.price > i.close
    } : o.price.change_percent && o.price.change ? {
        changePercentage: o.price.change_percent * 100,
        changeAmount: o.price.change,
        changeLabel: K1(o.price.latest_trade_timestamp, o.asset.timezone, t),
        isUp: o.price.change ? o.price.change > 0 : !1
    } : null)
      , a = o && o.price.extended_price != null && o.price.extended_change_percent != null && o.price.extended_change != null ? {
        changePercentage: o.price.extended_change_percent * 100,
        changeAmount: o.price.extended_change,
        changeLabel: t.formatMessage(Z1(o.price.market_status) ?? Et.extended),
        isUp: o.price.extended_change > 0
    } : null
      , {fiftyTwoWeekHigh: p, fiftyTwoWeekLow: d} = P.useMemo( () => {
        const T = o?.histories?.quotes["1y"];
        if (!T)
            return {
                fiftyTwoWeekHigh: null,
                fiftyTwoWeekLow: null
            };
        const v = T.map(I => I.high).filter(I => I != null)
          , y = T.map(I => I.low).filter(I => I != null);
        return {
            fiftyTwoWeekHigh: v.length > 0 ? Math.max(...v) : null,
            fiftyTwoWeekLow: y.length > 0 ? Math.min(...y) : null
        }
    }
    , [o?.histories?.quotes])
      , m = o?.price.open_price && o.price.intraday_high && o.price.intraday_low && o.price.intraday_volume && p && d ? {
        openPrice: o.price.open_price,
        intradayHigh: o.price.intraday_high,
        intradayLow: o.price.intraday_low,
        intradayVolume: o.price.intraday_volume,
        fiftyTwoWeekHigh: p,
        fiftyTwoWeekLow: d,
        marketCap: o.metrics?.market_cap ?? void 0,
        peRatio: o.metrics?.pe_ratio ?? void 0,
        eps: o.metrics?.eps ?? void 0
    } : null
      , N = m != null;
    return w.jsxs("div", {
        className: we("border-token-border-default mb-2 flex min-h-[480px] flex-col gap-8 rounded-lg border"),
        children: [w.jsxs("div", {
            className: "mx-6 flex flex-wrap items-end justify-between",
            children: [w.jsx(Y1, {
                data: o ?? null,
                highlightedPrice: g,
                priceChange: u ?? null,
                extendedPriceChange: a ?? null,
                url: e?.url ?? null
            }), w.jsx("div", {
                className: "mt-4",
                children: w.jsx(Hs, {
                    selectedInterval: s,
                    onSelectHistoryInterval: c,
                    histories: o?.histories
                })
            })]
        }), w.jsx("div", {
            className: "mx-6 h-[340px]",
            children: w.jsx(q1, {
                isUp: u?.isUp ?? !1,
                selectedInterval: s,
                histories: o?.histories,
                setHighlightedPrice: h,
                onSelectHistoryInterval: T => c(T),
                latestTradingPeriod: o?.asset.latest_trading_period,
                timezone: o?.asset.timezone ?? null
            })
        }), N && w.jsx("div", {
            className: "-mt-4",
            children: w.jsx(qs, {
                metrics: m
            })
        })]
    })
}
function Z1(e) {
    if (e == null)
        return null;
    const n = e.toLowerCase();
    return n === "premarket" || n === "open" ? Yt({
        id: "By+pvF",
        defaultMessage: "Pre-Market"
    }) : n === "afterhours" || n === "closed" ? Yt({
        id: "aLCg3c",
        defaultMessage: "After Hours"
    }) : Yt({
        id: "2p526c",
        defaultMessage: "Extended Hours"
    })
}
function K1(e, n, t) {
    function r(o, s) {
        const g = $t(new Date, s)
          , h = t.formatDate(g, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        })
          , f = Br(o * 1e3)
          , i = $t(f, s)
          , l = t.formatDate(i, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        });
        return h === l
    }
    if (!e || !n || r(e, n))
        return t.formatMessage(Et["1d"]);
    {
        const o = Br(e * 1e3)
          , s = $t(o, n);
        return t.formatDate(s, {
            month: "long",
            day: "numeric"
        })
    }
}
const Et = ji({
    "1d": {
        id: "SMdcuo",
        defaultMessage: "Today"
    },
    extended: {
        id: "2p526c",
        defaultMessage: "Extended Hours"
    },
    "5d": {
        id: "HCA6lr",
        defaultMessage: "Past 5 days"
    },
    "1m": {
        id: "DJpPMq",
        defaultMessage: "Past month"
    },
    "6m": {
        id: "1mUJ2L",
        defaultMessage: "Past 6 months"
    },
    ytd: {
        id: "b9KkhV",
        defaultMessage: "Year to date"
    },
    "1y": {
        id: "XnvD9A",
        defaultMessage: "Past year"
    },
    "5y": {
        id: "DfI1RB",
        defaultMessage: "Past 5 years"
    },
    max: {
        id: "WzOhuU",
        defaultMessage: "Max"
    }
})
  , Q1 = Ho("ChevronDownFilled", "1em", ["M15.8 7.73c.28.3.27.78-.03 1.06l-5.25 5a.75.75 0 0 1-1.04 0l-5.25-5a.75.75 0 0 1 1.04-1.08L10 12.2l4.73-4.5a.75.75 0 0 1 1.06.02Z"])
  , _1 = Ho("ChevronLeftFilled", "1em", ["M12.27 15.8a.75.75 0 0 1-1.06-.03l-5-5.25a.75.75 0 0 1 0-1.04l5-5.25a.75.75 0 1 1 1.08 1.04L7.8 10l4.5 4.73c.29.3.28.78-.02 1.06Z"])
  , j1 = 7
  , Lo = 8
  , eg = P.memo(function({weatherResults: n, dateRange: t, turnIndex: r, trackContentReferenceEvent: o}) {
    const [s,c] = cg()
      , g = rg(n);
    P.useEffect( () => {
        o("Search Content Reference Shown", "search_content_reference_shown", "forecast")
    }
    , [o]);
    const {daily: h, hourly: f, historical: i} = n;
    let l = "daily";
    if (t || f && h.length < 2)
        l = "hourly";
    else if (h.length > 0)
        l = "daily";
    else if (i && i?.length > 0)
        l = "historical";
    else
        return null;
    return w.jsxs("div", {
        className: "relative",
        children: [g ? w.jsxs(w.Fragment, {
            children: [w.jsx(tg, {
                weatherResults: n
            }), w.jsx(og, {
                weatherResults: n,
                temperatureUnit: s,
                setTemperatureUnit: c
            })]
        }) : w.jsx("div", {
            className: "bg-token-main-surface-primary absolute end-0 top-3 z-10 rounded-sm",
            children: w.jsx(Gi, {
                onTemperatureUnitChange: c,
                temperatureUnit: s
            })
        }), w.jsx(fg, {
            turnIndex: r
        }), l === "hourly" && w.jsx(ig, {
            weatherResults: n,
            temperatureUnit: s,
            dateRange: t
        }), l === "daily" && w.jsx(sg, {
            dailyForecast: h.slice(0, j1),
            temperatureUnit: s
        }), l === "historical" && w.jsx(lg, {
            historical: i,
            temperatureUnit: s
        })]
    })
});
function ng({weatherAlert: e}) {
    const [n,t] = P.useState(!1)
      , r = Xe()
      , o = _o()
      , s = _e(e.start_timestamp, e.utc_offset_sec)
      , c = e.end_timestamp ? _e(e.end_timestamp, e.utc_offset_sec) : null
      , g = w.jsxs(w.Fragment, {
        children: [w.jsx("div", {
            children: w.jsx(ne, {
                id: "JnuGPS",
                defaultMessage: "{start}{separator}{end}",
                values: {
                    start: r.formatDate(s, {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric"
                    }),
                    separator: c ? " - " : "",
                    end: c ? r.formatDate(c, {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric"
                    }) : ""
                }
            })
        }), w.jsx("div", {
            children: e.summary
        })]
    });
    return w.jsxs("button", {
        className: "my-2 flex w-full flex-col gap-2 rounded-xl border border-red-200 bg-red-100 px-4 py-3 text-start text-sm text-red-800",
        onClick: () => t(!n),
        children: [w.jsxs("div", {
            className: "flex w-full items-center gap-4",
            children: [w.jsx(ff, {
                className: "h-9 w-9 shrink-0"
            }), w.jsxs("div", {
                className: "flex flex-col",
                children: [w.jsx("div", {
                    className: "font-bold",
                    children: w.jsx(ne, {
                        id: "y+fy/l",
                        defaultMessage: "Severe Weather: {name}",
                        values: {
                            name: e.name
                        }
                    })
                }), o && g]
            }), w.jsx("div", {
                className: "grow"
            }), w.jsx("div", {
                className: "opacity-30",
                children: n ? w.jsx(_1, {
                    className: "icon-lg"
                }) : w.jsx(Q1, {
                    className: "icon-lg"
                })
            })]
        }), n && e.details && w.jsxs(w.Fragment, {
            children: [!o && g, w.jsx("div", {
                className: "mt-1 whitespace-pre-wrap",
                children: e.details.trim()
            })]
        })]
    })
}
function tg({weatherResults: e}) {
    const {severe: n} = e;
    return n ? w.jsx("div", {
        className: "my-2",
        children: n.map( (t, r) => w.jsx(ng, {
            weatherAlert: t
        }, r))
    }) : null
}
function rg(e) {
    const {historical: n, daily: t, hourly: r, current: o} = e;
    if (!o)
        return !1;
    let s = !1;
    const c = _e(o.timestamp, o.utc_offset_sec);
    for (const g of [n, t, r])
        g && (s = s || g?.some(h => of(c, _e(h.timestamp, h.utc_offset_sec))));
    return s
}
function og({weatherResults: e, temperatureUnit: n, setTemperatureUnit: t}) {
    const r = Xe()
      , {current: o} = e;
    if (!o)
        return null;
    const s = o.temperature.current
      , c = o.description
      , g = s != null && c && " · ";
    return w.jsxs("div", {
        className: "not-prose flex items-center gap-4",
        children: [w.jsxs("div", {
            className: "grow",
            children: [w.jsxs("div", {
                className: "text-lg font-semibold",
                children: [s != null && w.jsx(ne, {
                    id: "FiwByI",
                    defaultMessage: "Currently {temperature}",
                    values: {
                        temperature: un(r, s, n)
                    }
                }), g, c.description]
            }), w.jsx("div", {
                className: "text-token-text-secondary",
                children: ag(e.location)
            })]
        }), w.jsxs("div", {
            className: "flex",
            children: [w.jsx(Gi, {
                onTemperatureUnitChange: t,
                temperatureUnit: n
            }), w.jsx(Lr, {
                weatherDescriptionData: c,
                isNight: o.night
            })]
        })]
    })
}
function Pr({children: e}) {
    return w.jsx("div", {
        className: "no-scrollbar not-prose mt-1 overflow-auto sm:overflow-hidden",
        children: w.jsx(an.Root, {
            className: "min-w-0",
            children: w.jsx(an.Body, {
                className: "border-token-border-medium border-b-[0.5px] [&_tr:last-child]:border-b-0",
                children: e
            })
        })
    })
}
function ig({weatherResults: e, temperatureUnit: n, dateRange: t}) {
    const r = Xe()
      , {hourly: o, current: s} = e;
    let c = o ?? [];
    t && (c = c.filter(i => i.timestamp >= t.start_timestamp && i.timestamp < t.end_timestamp));
    const [g,h] = P.useState(!1)
      , f = c.length > Lo;
    if (!g && f) {
        const i = c[0]
          , l = _e(i.timestamp, i.utc_offset_sec);
        let u = !1;
        if (s) {
            const a = _e(s.timestamp, s.utc_offset_sec);
            l.getTime() - a.getTime() > 8 * 60 * 60 * 1e3 && c.length > 18 && (c = c.slice(7, 18),
            u = !0)
        }
        u || (c = c.slice(0, Lo))
    }
    return w.jsxs(Pr, {
        children: [c.map( (i, l) => w.jsxs(an.Row, {
            children: [w.jsxs($e, {
                className: "w-44",
                children: [w.jsx(Lr, {
                    weatherDescriptionData: i.description,
                    isNight: i.night,
                    size: "small"
                }), w.jsx("div", {
                    className: "ms-3 whitespace-nowrap",
                    children: w.jsx("span", {
                        className: "lowercase",
                        children: ug(r, i)
                    })
                })]
            }), w.jsx($e, {
                className: "w-[60px] tabular-nums",
                children: w.jsx("div", {
                    children: un(r, i.temperature.current, n)
                })
            }), w.jsx($e, {
                children: i.description.description
            })]
        }, l)), f && w.jsx(an.Row, {
            children: w.jsx($e, {
                className: "w-44",
                children: w.jsx(it, {
                    color: "secondary",
                    onClick: () => h(!g),
                    size: "small",
                    children: g ? w.jsx(ne, {
                        id: "KoC8Ym",
                        defaultMessage: "Show less"
                    }) : w.jsx(ne, {
                        id: "X8F8Y/",
                        defaultMessage: "Show more"
                    })
                })
            })
        })]
    })
}
function sg({dailyForecast: e, temperatureUnit: n}) {
    const t = Xe();
    return w.jsx(Pr, {
        children: e.map( (r, o) => w.jsxs(an.Row, {
            children: [w.jsxs($e, {
                className: "w-[7.5rem] min-w-[7.5rem]",
                children: [w.jsx(Lr, {
                    weatherDescriptionData: r.description,
                    isNight: r.night,
                    size: "small"
                }), w.jsx("div", {
                    className: "ms-3 whitespace-nowrap",
                    children: Zs(t, _e(r.timestamp, r.utc_offset_sec))
                })]
            }), w.jsxs($e, {
                className: "tabular-nums",
                children: [w.jsx("div", {
                    children: un(t, r.temperature.max, n)
                }), w.jsx("div", {
                    className: "text-token-text-secondary ms-1",
                    children: un(t, r.temperature.min, n)
                })]
            }), w.jsx($e, {
                className: "min-w-80",
                children: r.description.description
            })]
        }, o))
    })
}
function lg({historical: e, temperatureUnit: n}) {
    const t = Xe();
    return e ? w.jsx(Pr, {
        children: e.map( (r, o) => {
            const s = _e(r.timestamp, r.utc_offset_sec);
            return w.jsxs(an.Row, {
                children: [w.jsx($e, {
                    className: "w-[250px]",
                    children: w.jsx("div", {
                        className: "ms-3 whitespace-nowrap",
                        children: t.formatDate(s, {
                            weekday: "long",
                            month: "short",
                            day: "numeric"
                        })
                    })
                }), w.jsx($e, {
                    className: "tabular-nums",
                    children: r.temperature.max && r.temperature.min ? w.jsxs(w.Fragment, {
                        children: [w.jsx("div", {
                            children: un(t, r.temperature.max, n)
                        }), w.jsx("div", {
                            className: "text-token-text-secondary ms-1",
                            children: un(t, r.temperature.min, n)
                        })]
                    }) : w.jsx("div", {
                        children: un(t, r.temperature.current, n)
                    })
                }), w.jsx($e, {})]
            }, o)
        }
        )
    }) : null
}
function $e({className: e, children: n}) {
    return w.jsx(an.Cell, {
        className: we("border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0!", e),
        divClassName: "items-start leading-relaxed",
        children: n
    })
}
function fg({turnIndex: e}) {
    const n = Gs(r => r.thread?.turns[e]?.use_location)
      , [t] = bs();
    return !t.useLocation && n ? w.jsx("div", {
        className: "mt-3",
        children: w.jsx(it, {
            color: "secondary",
            icon: Ys,
            onClick: () => {
                $s.setSettingsModalOpen(!0)
            }
            ,
            children: w.jsx(ne, {
                id: "f47VEc",
                defaultMessage: "Share precise location"
            })
        })
    }) : null
}
function Gi({temperatureUnit: e, onTemperatureUnitChange: n}) {
    const t = r => e === r ? "font-bold" : "font-light";
    return w.jsx(sf, {
        size: "small",
        triggerButton: w.jsx("button", {
            className: "text-token-text-tertiary hover:text-token-text-primary flex items-center justify-center p-1.5",
            children: w.jsx(zs, {
                className: "icon-sm"
            })
        }),
        children: w.jsxs(lf.Item, {
            onClick: () => {
                n(e === "C" ? "F" : "C")
            }
            ,
            className: "text-token-text-primary",
            children: [w.jsx(ne, {
                id: "bQIoe/",
                defaultMessage: "Temperature"
            }), w.jsxs("div", {
                className: "flex items-center",
                children: [w.jsx("div", {
                    className: t("F"),
                    children: w.jsx(ne, {
                        id: "bvDeBB",
                        defaultMessage: "°F"
                    })
                }), w.jsx("div", {
                    className: "mx-1 h-4 border-s border-gray-300"
                }), w.jsx("div", {
                    className: t("C"),
                    children: w.jsx(ne, {
                        id: "iNiz6O",
                        defaultMessage: "°C"
                    })
                })]
            })]
        })
    })
}
function Lr({weatherDescriptionData: e, isNight: n=!1, size: t="normal"}) {
    const r = Jt()
      , o = t === "small" ? 30 : 50;
    return w.jsx("img", {
        draggable: !1,
        alt: e.description,
        src: Ks({
            weatherCode: e.id,
            isDarkMode: r,
            isNight: n
        }).src,
        width: o,
        height: o
    })
}
function ug(e, n) {
    const t = _e(n.timestamp, n.utc_offset_sec);
    return e.formatDate(t, {
        hour: "numeric"
    })
}
function un(e, n, t) {
    return n == null ? "-" : t ? Wr(t ?? "F", n) : Wr(bi(e), n)
}
function bi(e) {
    const n = ["en-US", "en-BZ", "en-BS", "en-KY", "en-PW"]
      , t = e.locale || "en-US";
    return n.includes(t) ? "F" : "C"
}
function ag(e) {
    const n = e.name.split(",").map(t => t.trim());
    return e.country && !n.includes(e.country) && n.push(e.country),
    n.join(", ")
}
const cg = () => {
    const e = Xe()
      , [n,t] = rf("USER_TEMPERATURE_UNIT", bi(e), r => ["F", "C"].includes(r));
    return [n, t]
}
  , dg = uf( () => af( () => import("./foru57xd139ner19.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])).then(e => e.BusinessesMap));
function hg(e) {
    "use forget";
    const n = es.c(117)
      , {index: t, FormattedText: r, node: o, wordFadeType: s} = e
      , c = parseInt(t, 10)
      , g = P.useContext(mn)
      , h = Qs(g?.analyticsMetadata)
      , f = P.useRef(!1);
    if (g == null)
        return null;
    const {contentReferences: i, onShowSearchResults: l, numImageResults: u, analyticsMetadata: a, message: p} = g
      , d = i?.[c];
    if (!d || a.turnIndex === void 0 || d.type === void 0)
        return null;
    let m;
    n[0] === Symbol.for("react.memo_cache_sentinel") ? (m = {
        img: pg
    },
    n[0] = m) : m = n[0];
    let N;
    n[1] !== d.alt ? (N = w.jsx(lr, {
        components: m,
        children: d.alt
    }),
    n[1] = d.alt,
    n[2] = N) : N = n[2];
    const T = N;
    let v = null;
    e: switch (d.type) {
    case "title_citation":
        {
            let x;
            n[3] !== d || n[4] !== h ? (x = w.jsx(yl, {
                metadata: d,
                trackContentReferenceEvent: h
            }),
            n[3] = d,
            n[4] = h,
            n[5] = x) : x = n[5],
            v = x;
            break e
        }
    case "location_search":
        {
            let x;
            n[6] !== d || n[7] !== h ? (x = w.jsx(vl, {
                metadata: d,
                trackContentReferenceEvent: h
            }),
            n[6] = d,
            n[7] = h,
            n[8] = x) : x = n[8],
            v = x;
            break e
        }
    case "time":
        {
            let x;
            n[9] !== d || n[10] !== h ? (x = w.jsx(ml, {
                metadata: d,
                trackContentReferenceEvent: h
            }),
            n[9] = d,
            n[10] = h,
            n[11] = x) : x = n[11],
            v = x;
            break e
        }
    case "image_v2":
        {
            const x = u ?? 0;
            let O;
            n[12] !== a || n[13] !== d || n[14] !== h || n[15] !== x ? (O = w.jsx(pl, {
                metadata: d,
                numImageResults: x,
                analyticsMetadata: a,
                trackContentReferenceEvent: h
            }),
            n[12] = a,
            n[13] = d,
            n[14] = h,
            n[15] = x,
            n[16] = O) : O = n[16],
            v = O;
            break e
        }
    case "nav_list":
        {
            let x;
            n[17] !== d || n[18] !== h ? (x = w.jsx(gl, {
                metadata: d,
                trackContentReferenceEvent: h
            }),
            n[17] = d,
            n[18] = h,
            n[19] = x) : x = n[19],
            v = x;
            break e
        }
    case "file_navlist":
        {
            let x;
            n[20] !== d || n[21] !== h ? (x = w.jsx(hl, {
                metadata: d,
                trackContentReferenceEvent: h
            }),
            n[20] = d,
            n[21] = h,
            n[22] = x) : x = n[22],
            v = x;
            break e
        }
    case "file":
        {
            let x;
            n[23] !== d || n[24] !== h || n[25] !== c ? (x = w.jsx(B1, {
                fileRef: d,
                index: c,
                trackContentReferenceEvent: h
            }),
            n[23] = d,
            n[24] = h,
            n[25] = c,
            n[26] = x) : x = n[26],
            v = x;
            break e
        }
    case "grouped_webpages_model_predicted_fallback":
        {
            let x;
            n[27] !== d || n[28] !== g.message.id || n[29] !== h || n[30] !== c || n[31] !== o ? (x = w.jsx(ol, {
                webpageRef: d,
                node: o,
                trackContentReferenceEvent: h,
                messageId: g.message.id,
                index: c
            }),
            n[27] = d,
            n[28] = g.message.id,
            n[29] = h,
            n[30] = c,
            n[31] = o,
            n[32] = x) : x = n[32],
            v = x;
            break e
        }
    case "grouped_webpages":
        {
            let x;
            n[33] !== d || n[34] !== g.message.id || n[35] !== h || n[36] !== c || n[37] !== o ? (x = w.jsx(rl, {
                webpageRef: d,
                node: o,
                trackContentReferenceEvent: h,
                messageId: g.message.id,
                index: c
            }),
            n[33] = d,
            n[34] = g.message.id,
            n[35] = h,
            n[36] = c,
            n[37] = o,
            n[38] = x) : x = n[38],
            v = x;
            break e
        }
    case "tldr":
        break e;
    case "navigation":
        {
            let x;
            n[39] !== d || n[40] !== h || n[41] !== l ? (x = w.jsx(dl, {
                navigation: d,
                onShowSearchResults: l,
                trackContentReferenceEvent: h
            }),
            n[39] = d,
            n[40] = h,
            n[41] = l,
            n[42] = x) : x = n[42],
            v = x;
            break e
        }
    case "stock":
        {
            let x;
            n[43] !== d || n[44] !== h ? (x = w.jsx($1, {
                contentReference: d,
                trackContentReferenceEvent: h
            }),
            n[43] = d,
            n[44] = h,
            n[45] = x) : x = n[45],
            v = x;
            break e
        }
    case "calculator":
        {
            let x;
            n[46] !== d || n[47] !== h ? (x = w.jsx(cl, {
                data: d,
                trackContentReferenceEvent: h
            }),
            n[46] = d,
            n[47] = h,
            n[48] = x) : x = n[48],
            v = x;
            break e
        }
    case "python":
    case "container":
        {
            let x;
            n[49] !== a.turnIndex || n[50] !== d || n[51] !== g.clientThreadId ? (x = w.jsx(tl, {
                clientThreadId: g.clientThreadId,
                turnIndex: a.turnIndex,
                contentReference: d
            }),
            n[49] = a.turnIndex,
            n[50] = d,
            n[51] = g.clientThreadId,
            n[52] = x) : x = n[52],
            v = x;
            break e
        }
    case "code_execution":
        {
            let x;
            n[53] !== r || n[54] !== d || n[55] !== h ? (x = w.jsx(al, {
                FormattedText: r,
                displayInfo: d,
                trackContentReferenceEvent: h
            }),
            n[53] = r,
            n[54] = d,
            n[55] = h,
            n[56] = x) : x = n[56],
            v = x;
            break e
        }
    case "forecast":
        {
            let x;
            n[57] !== a || n[58] !== d.date_range || n[59] !== d.forecast || n[60] !== h ? (x = d?.forecast && w.jsx(eg, {
                weatherResults: d.forecast,
                dateRange: d.date_range,
                turnIndex: a.turnIndex,
                trackContentReferenceEvent: h
            }),
            n[57] = a,
            n[58] = d.date_range,
            n[59] = d.forecast,
            n[60] = h,
            n[61] = x) : x = n[61],
            v = x;
            break e
        }
    case "businesses_map":
        {
            let x;
            n[62] !== d || n[63] !== h ? (x = w.jsx(dg, {
                contentReference: d,
                trackContentReferenceEvent: h
            }),
            n[62] = d,
            n[63] = h,
            n[64] = x) : x = n[64],
            v = x;
            break e
        }
    case "video":
        {
            let x;
            n[65] !== d || n[66] !== h ? (x = w.jsx(ul, {
                video: d,
                trackContentReferenceEvent: h
            }),
            n[65] = d,
            n[66] = h,
            n[67] = x) : x = n[67],
            v = x;
            break e
        }
    case "sports_standings":
        {
            let x;
            n[68] !== d || n[69] !== h ? (x = w.jsx(fl, {
                standingsRef: d,
                trackContentReferenceEvent: h
            }),
            n[68] = d,
            n[69] = h,
            n[70] = x) : x = n[70],
            v = x;
            break e
        }
    case "sports_schedule":
        {
            let x;
            n[71] !== d || n[72] !== h ? (x = w.jsx(ll, {
                scheduleRef: d,
                trackContentReferenceEvent: h
            }),
            n[71] = d,
            n[72] = h,
            n[73] = x) : x = n[73],
            v = x;
            break e
        }
    case "attribution":
        {
            let x;
            n[74] !== d || n[75] !== s ? (x = w.jsx(L1, {
                attribution: d,
                wordFadeType: s
            }),
            n[74] = d,
            n[75] = s,
            n[76] = x) : x = n[76],
            v = x;
            break e
        }
    case "debug":
        {
            let x;
            n[77] !== d ? (x = Object.entries(d).map(gg),
            n[77] = d,
            n[78] = x) : x = n[78];
            let O;
            n[79] !== x ? (O = w.jsx(w.Fragment, {
                children: x
            }),
            n[79] = x,
            n[80] = O) : O = n[80],
            v = O;
            break e
        }
    case "image_inline":
        {
            let x;
            n[81] !== d || n[82] !== g.clientThreadId || n[83] !== h || n[84] !== p ? (x = p.metadata?.b1de6e2_rm ? w.jsx(el, {
                reference: d,
                clientThreadId: g.clientThreadId,
                trackContentReferenceEvent: h,
                message: p
            }) : w.jsx(nl, {
                reference: d,
                clientThreadId: g.clientThreadId,
                trackContentReferenceEvent: h,
                message: p
            }),
            n[81] = d,
            n[82] = g.clientThreadId,
            n[83] = h,
            n[84] = p,
            n[85] = x) : x = n[85],
            v = x;
            break e
        }
    case "image_group":
        {
            let x;
            n[86] !== a || n[87] !== d || n[88] !== h ? (x = null,
            n[86] = a,
            n[87] = d,
            n[88] = h,
            n[89] = x) : x = n[89],
            v = x;
            break e
        }
    case "product_entity":
        {
            let x;
            n[90] !== a.turnIndex || n[91] !== d || n[92] !== g.clientThreadId || n[93] !== g.message.id || n[94] !== h ? (x = w.jsx(js, {
                contentReference: d,
                clientThreadId: g.clientThreadId,
                messageId: g.message.id,
                turnIndex: a.turnIndex,
                trackContentReferenceEvent: h
            }),
            n[90] = a.turnIndex,
            n[91] = d,
            n[92] = g.clientThreadId,
            n[93] = g.message.id,
            n[94] = h,
            n[95] = x) : x = n[95],
            v = x;
            break e
        }
    case "checkout_confirmation":
        {
            let x;
            n[96] !== d || n[97] !== h ? (x = null,
            n[96] = d,
            n[97] = h,
            n[98] = x) : x = n[98],
            v = x;
            break e
        }
    case "products":
        {
            let x;
            n[99] !== a || n[100] !== d || n[101] !== g.clientThreadId || n[102] !== g.message.id ? (x = w.jsx(_s, {
                contentReference: d,
                clientThreadId: g.clientThreadId,
                messageId: g.message.id,
                turnIndex: a.turnIndex,
                analyticsMetadata: a
            }),
            n[99] = a,
            n[100] = d,
            n[101] = g.clientThreadId,
            n[102] = g.message.id,
            n[103] = x) : x = n[103],
            v = x;
            break e
        }
    case "product_reviews":
        {
            let x;
            n[104] !== d || n[105] !== h ? (x = w.jsx(sl, {
                contentReference: d,
                disableAnimation: !0,
                trackContentReferenceEvent: h
            }),
            n[104] = d,
            n[105] = h,
            n[106] = x) : x = n[106],
            v = x;
            break e
        }
    case "product_rationale":
        {
            let x;
            n[107] !== d || n[108] !== h ? (x = w.jsx(il, {
                contentReference: d,
                trackContentReferenceEvent: h,
                disableAnimation: !0
            }),
            n[107] = d,
            n[108] = h,
            n[109] = x) : x = n[109],
            v = x;
            break e
        }
    case "sources_footnote":
        return null
    }
    let y;
    n[110] !== T || n[111] !== d || n[112] !== h ? (y = x => (f.current || (h("Search Content Reference Failed", "search_content_reference_failed", d.type),
    Ze.addError(`Error rendering content reference: ${d.type}`, {
        ...x,
        contentReference: d
    }),
    f.current = !0),
    d?.alt ? T : w.jsx("span", {
        className: `errored-object-${d.type}`
    })),
    n[110] = T,
    n[111] = d,
    n[112] = h,
    n[113] = y) : y = n[113];
    let I;
    return n[114] !== v || n[115] !== y ? (I = w.jsx(jo, {
        name: "content-reference-renderer",
        fallback: y,
        children: v
    }),
    n[114] = v,
    n[115] = y,
    n[116] = I) : I = n[116],
    I
}
function gg(e) {
    const [n,t] = e;
    return w.jsx("sub", {
        className: "ms-1 w-fit rounded-md border-2 border-solid border-orange-500 px-1 leading-none",
        children: t
    }, n)
}
function pg(e) {
    const {src: n, alt: t} = e;
    return w.jsx("img", {
        src: n,
        alt: t,
        className: "max-h-28"
    })
}
function mg(e) {
    const {src: n, clientThreadId: t, ...r} = e
      , o = pf(t)
      , s = P.useContext(mn)
      , c = Jl(o, n, s?.useSafeUrls);
    return c == null ? w.jsx("div", {}) : w.jsx("img", {
        ...r,
        src: c
    })
}
function vg(e) {
    return w.jsx(hg, {
        ...e,
        FormattedText: Yi
    })
}
function Yi({size: e="medium", children: n, className: t, clientThreadId: r, messageId: o, isActivelyStreaming: s=!1, componentOverrides: c, isDeepResearchResultMessage: g, forceDarkMode: h, disableWordFade: f}) {
    const i = Jt() || h
      , {wordFadeType: l} = Nl()
      , u = P.useMemo( () => ({
        pre: ({children: y, "data-start": I, "data-end": x, "data-is-last-node": O}) => w.jsx("pre", {
            className: "overflow-visible!",
            "data-start": I,
            "data-end": x,
            "data-is-last-node": O,
            children: y
        }),
        code: y => w.jsx(Dl, {
            ...y,
            clientThreadId: r
        }),
        [hf]: y => w.jsx(vg, {
            wordFadeType: l,
            ...y
        }),
        [Ml]: y => r == null ? null : w.jsx(R1, {
            ...y,
            clientThreadId: r,
            messageId: o
        }),
        [Ll]: Il,
        [Pl]: wl,
        [Al]: Tl,
        [Sl]: A1,
        a: y => {
            const {node: I, children: x, ...O} = y
              , C = I?.properties?.href;
            if (typeof C == "string" && C.startsWith(Xr))
                return r != null && o != null ? w.jsx(Cl, {
                    ...O,
                    clientThreadId: r,
                    messageId: o,
                    href: C,
                    children: x
                }) : null;
            if (typeof C == "string" && C === Bl) {
                const M = I?.children?.map(L => typeof L.value == "string" ? L.value : "").join("").trim();
                return w.jsx(Wl, {
                    ...y,
                    text: M,
                    clientThreadId: r,
                    messageId: o,
                    className: "cursor-pointer"
                })
            }
            if (typeof C == "string" && C === Xl) {
                const M = I?.children?.map(L => typeof L.value == "string" ? L.value : "").join("").trim();
                return w.jsx(Vl, {
                    ...y,
                    text: M,
                    clientThreadId: r,
                    messageId: o
                })
            }
            if (typeof C == "string" && C === Hl) {
                const M = I?.children?.map(L => typeof L.value == "string" ? L.value : "").join("").trim();
                return w.jsx(ql, {
                    ...y,
                    text: M,
                    clientThreadId: r,
                    messageId: o
                })
            }
            return C && typeof C == "string" && Ol(C) ? x : w.jsx(zl, {
                ...y,
                clientThreadId: r,
                messageId: o
            })
        }
        ,
        table: ({node: y, ...I}) => w.jsx(kl, {
            ...I,
            onClickCopy: x => {
                cf.logEvent("ChatGPT Table Copy Clicked");
                const O = r != null && o != null ? Yo.getNode(df(r), o).message : void 0;
                Rl(Ul(y.markdownSource, O?.metadata?.content_references), void 0, x)
            }
        }),
        td: xl,
        img: ({node: y, ...I}) => {
            const x = y?.properties?.src;
            return typeof x == "string" && (x.startsWith(Xr) || x.startsWith("attachment:")) ? null : w.jsx(mg, {
                ...I,
                clientThreadId: r
            })
        }
        ,
        ...l === "delay" ? El : [],
        ...c
    }), [c, r, o, l])
      , a = P.useMemo( () => s && n ? Fl(n) : n ?? "", [n, s])
      , p = ft()
      , d = Ft(p, "1839283687")
      , m = gf(p, "3070823306")
      , N = Xo()
      , T = P.useMemo( () => [...Go, [Gl, a]], [a])
      , v = P.useMemo( () => l === "indexed" && !f ? {
        handlers: {
            text: (y, I, x) => {
                const O = [];
                for (const C of N(I.value))
                    O.push({
                        type: "element",
                        tagName: "span",
                        properties: {
                            className: Vo.fadeIn
                        },
                        children: [{
                            type: "text",
                            value: C
                        }]
                    });
                return O
            }
        }
    } : void 0, [l, N, f]);
    return d ? !1 : w.jsx(jo, {
        name: "formatted_text_error",
        fallback: () => w.jsx(w.Fragment, {
            children: a
        }),
        children: w.jsx($i, {
            rehypePlugins: T,
            remarkPlugins: zo,
            remarkRehypeOptions: v,
            className: we(t, "markdown prose dark:prose-invert w-full break-words", i ? "dark" : "light", e === "small" && "prose-xs", g && "deep-research-result", m.get("new_markdown", !1) && "markdown-new-styling", m.get("hidden_hrs", !1) && "markdown-new-styling-hidden-hrs"),
            urlTransform: qo,
            components: u,
            children: a
        })
    })
}
const $i = P.memo(lr)
  , Pg = Object.freeze(Object.defineProperty({
    __proto__: null,
    FormattedText: Yi,
    ReactMarkdownMemo: $i
}, Symbol.toStringTag, {
    value: "Module"
}));
export {Yi as F, Ag as S, Cg as a, Qf as b, Og as c, si as d, Bf as e, Pg as f, Sg as g, y1 as s, Ff as u};
//# sourceMappingURL=f5x7owcyj5iwmbsb.js.map
