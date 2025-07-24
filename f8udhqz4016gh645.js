const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/betoebd8a198rzf3.js", "assets/dc2xxjkicf2pz0mj.js", "assets/juy90og0wtbp77qa.js", "assets/root-fv49dn40.css", "assets/ckp56qklot786ulr.js", "assets/conversation-small-j9iamy23.css", "assets/ec9s4r12axh2q1y0.js", "assets/erwmzqwu5c1n7nza.js", "assets/o7zrzew6ugefv8n2.js", "assets/dmfmxszxfbs8gsbx.js", "assets/hibpneehm1q4hc2e.js", "assets/iacposgqe14fuloa.js", "assets/o6wb3ptvu0bk81yq.js", "assets/abebcwj1m9mup3z6.js", "assets/nqj34k5dky4x5suq.js", "assets/hort3ndd4wla0a2j.js", "assets/jsgl3b1bt1ozctr5.js", "assets/ck00y48d3yzt8bq3.js", "assets/hczymk9ojq2shlcf.js", "assets/g8shiwm7jpd74xmd.js", "assets/btouzu0b6h5eiejj.js", "assets/hisrfv493df9w8hp.js", "assets/iiyyoj0wgh5vo89i.js", "assets/gxo2ppc4wrdtmw6p.js", "assets/cpgn1czk8eq48vzk.js", "assets/l7m4sdxmp3n9y1x8.js", "assets/f5x7owcyj5iwmbsb.js", "assets/llrie03z1kvfi4vu.js", "assets/pc2givv05uuq8g6l.js", "assets/dq2hdjj12gdqq0p1.js", "assets/ezqsz68yx4uzdtqb.js", "assets/mre9dehcylnm0d4q.js", "assets/kd37t55r0pqrdrzh.js", "assets/fdo3memgsa0u55b8.js", "assets/icu9d2zdwlcy45kn.js", "assets/clbhua3y9f3awxpf.js", "assets/cir7oqlbi88or9cr.js", "assets/z7ibstnufyeh5ynh.js", "assets/mqbq480d7doniaxg.js", "assets/g4tl5lt9yqf20m4s.js"]))) => i.map(i => d[i]);
import {au as Me, iU as Ne, as as we, at as Te, e as Ve, aY as Re, l6 as ze, aS as ke, l7 as Le, e9 as Ie, cV as Se, ae as De, al as Ge, ek as Ue, b3 as Be, $ as Ke, bT as We, k2 as He, R as Qe} from "./dc2xxjkicf2pz0mj.js";
import {j as s, r as o, A as Ye, m as ye, c as qe, n as Oe, p as $e, u as Je} from "./juy90og0wtbp77qa.js";
import {i4 as Xe, i5 as Ze, hP as Ae, hK as et, bx as Pe, by as Fe, c$ as tt, i6 as st, a0 as it, a1 as at, i7 as ot, i8 as rt, i9 as nt, ia as lt, ib as ct, ic as dt, ag as ft, id as ut, ie as mt, ig as ht, dL as gt, ih as pt, ii as xt, eq as bt, K as vt, ij as jt, ik as Ct, il as Et, im as _t, io as Pt, ip as wt, iq as Tt, T as kt, ir as It} from "./ckp56qklot786ulr.js";
import {b as St, u as yt} from "./o7zrzew6ugefv8n2.js";
import {B as Ot} from "./hibpneehm1q4hc2e.js";
import {u as At, a as Ft} from "./g8shiwm7jpd74xmd.js";
import {P as Mt} from "./gxo2ppc4wrdtmw6p.js";
import {C as Nt} from "./fdo3memgsa0u55b8.js";
import {a as Vt, C as Rt} from "./o6wb3ptvu0bk81yq.js";
import {M as zt} from "./clbhua3y9f3awxpf.js";
function Lt({clientThreadId: a}) {
    const e = At();
    return s.jsxs(s.Fragment, {
        children: [e && s.jsx(Ft, {}), s.jsx(Dt, {
            clientThreadId: a
        })]
    })
}
function Dt({clientThreadId: a}) {
    const e = o.useContext(Xe)
      , [i,n] = o.useState(!!e?.postWithProfile && e.postWithProfile.post.attachments && e.postWithProfile.post.attachments.every(d => d.kind === "media_generation"));
    return !e?.postWithProfile || !i ? null : s.jsx(Me, {
        clientThreadId: a,
        children: s.jsx(Mt, {
            clientThreadId: a,
            postWithProfile: e.postWithProfile,
            onClose: () => n(!1)
        })
    })
}
const Gt = 450;
function Ut({children: a, clientThreadId: e, isOpen: i, onClose: n, type: d}) {
    return s.jsx(Ye, {
        children: i && s.jsx(Ne, {
            children: s.jsx(Ze.Provider, {
                value: {
                    isEmbeddedInFocusedView: !0,
                    type: d
                },
                children: s.jsxs("div", {
                    className: "absolute inset-0 flex flex-col",
                    children: [s.jsx(ye.div, {
                        className: "bg-token-main-surface-secondary h-full w-full",
                        ...Ae
                    }), s.jsxs("div", {
                        className: "absolute inset-0 flex",
                        children: [s.jsx("div", {
                            className: "grow overflow-auto",
                            children: a
                        }), s.jsx(ye.div, {
                            className: "border-token-border-medium bg-token-main-surface-primary relative shrink-0 border-s",
                            style: {
                                width: Gt
                            },
                            ...Ae,
                            children: s.jsx("div", {
                                className: "h-[100vh] pb-4",
                                children: s.jsx(zt, {
                                    clientThreadId: e,
                                    hideHeader: !0,
                                    hideDisclaimer: !0,
                                    messagesVerticalAlign: "bottom"
                                }, e)
                            })
                        })]
                    })]
                })
            })
        })
    })
}
const Bt = we( () => Te( () => import("./betoebd8a198rzf3.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])))
  , Kt = we( () => Te( () => import("./erwmzqwu5c1n7nza.js"), __vite__mapDeps([7, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37])).then(a => a.ImageEditor));
function Wt({clientThreadId: a}) {
    const e = et();
    o.useEffect( () => {
        Pe.close()
    }
    , [a]);
    let i;
    return e?.type === Fe.ADAVisualization ? i = s.jsx(Bt, {
        clientThreadId: a,
        visualization: e.visualization
    }) : e?.type === Fe.Image && (i = s.jsx(Kt, {
        clientThreadId: a,
        messageId: e.messageId,
        image: e.image,
        allImages: e.allImages
    }, e.image.asset_pointer)),
    s.jsx(Ut, {
        clientThreadId: a,
        isOpen: e != null,
        onClose: Pe.close,
        type: e?.type,
        children: i
    })
}
var Ht = {};
const Qt = ({children: a}) => s.jsx(s.Fragment, {
    children: a
})
  , Yt = we( () => Te( () => import("./mqbq480d7doniaxg.js"), __vite__mapDeps([38, 2, 1, 3, 4, 5, 12, 9, 8, 35, 20, 11, 13, 14, 15, 16, 17, 18, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 19, 22, 39])));
function ns(a) {
    "use forget";
    const e = qe.c(105)
      , {urlThreadId: i, clientThreadId: n, prefetchSearch: d} = a
      , f = Ve()
      , l = Re()
      , y = ze()
      , T = Oe()
      , [k] = $e();
    let O;
    e[0] !== n || e[1] !== i ? (O = () => {
        if (i !== void 0) {
            const r = i;
            return Le(r) ?? r
        }
        return n !== void 0 ? n : Ie()
    }
    ,
    e[0] = n,
    e[1] = i,
    e[2] = O) : O = e[2];
    const [t,I] = o.useState(O);
    i !== void 0 && t !== i && (ke(t) === i || I(i));
    let A;
    e[3] !== t || e[4] !== f ? (A = tt(f, t),
    e[3] = t,
    e[4] = f,
    e[5] = A) : A = e[5];
    const ve = A
      , je = Oe();
    let F;
    e[6] !== je ? (F = st(je),
    e[6] = je,
    e[7] = F) : F = e[7];
    const Ce = F;
    let M;
    e[8] !== t || e[9] !== i ? (M = () => {
        i === void 0 && ke(t) !== void 0 && I(Ie())
    }
    ,
    e[8] = t,
    e[9] = i,
    e[10] = M) : M = e[10];
    let N;
    e[11] !== t || e[12] !== Ce || e[13] !== i ? (N = [i, t, Ce],
    e[11] = t,
    e[12] = Ce,
    e[13] = i,
    e[14] = N) : N = e[14],
    o.useEffect(M, N);
    const Ee = it(at.workspaceId)
      , {eligible: V, isLoading: R, markAsViewed: z} = ot()
      , L = rt()
      , {eligible: D, isLoading: G, markAsViewed: U} = nt()
      , B = lt()
      , {eligible: K, isLoading: W, markAsViewed: H} = ct()
      , Q = dt()
      , Y = ft();
    let q, $;
    e[15] !== Y ? (q = () => {
        mt(!0).then(r => {
            r.force_login && Y({
                authType: "login"
            }),
            ht.initializeAndGatherData(r),
            gt.initializeAndGatherData(r)
        }
        )
    }
    ,
    $ = [Y],
    e[15] = Y,
    e[16] = q,
    e[17] = $) : (q = e[16],
    $ = e[17]),
    o.useEffect(q, $);
    let J, X;
    e[18] !== y || e[19] !== l || e[20] !== k ? (J = () => {
        const r = k.get(pt) === "true"
          , S = k.get(xt) === "true";
        S !== y && Se.setIsAnonModeEnabled(S),
        l !== r && Se.setIsTemporaryChatEnabled(r)
    }
    ,
    X = [l, y, k],
    e[18] = y,
    e[19] = l,
    e[20] = k,
    e[21] = J,
    e[22] = X) : (J = e[21],
    X = e[22]),
    o.useEffect(J, X);
    let Z;
    e[23] !== T.state ? (Z = () => {
        T.state?.focusObject && Pe.setFocusedObject(T.state.focusObject)
    }
    ,
    e[23] = T.state,
    e[24] = Z) : Z = e[24];
    const _e = T.state?.focusObject;
    let ee;
    e[25] !== _e ? (ee = [_e],
    e[25] = _e,
    e[26] = ee) : ee = e[26],
    o.useEffect(Z, ee);
    let te, se;
    e[27] !== V || e[28] !== R || e[29] !== z || e[30] !== L ? (te = () => {
        !R && V && (z(),
        L())
    }
    ,
    se = [V, R, z, L],
    e[27] = V,
    e[28] = R,
    e[29] = z,
    e[30] = L,
    e[31] = te,
    e[32] = se) : (te = e[31],
    se = e[32]),
    o.useEffect(te, se);
    let ie, ae;
    e[33] !== D || e[34] !== G || e[35] !== U || e[36] !== B ? (ie = () => {
        !G && D && (U(),
        B())
    }
    ,
    ae = [D, G, U, B],
    e[33] = D,
    e[34] = G,
    e[35] = U,
    e[36] = B,
    e[37] = ie,
    e[38] = ae) : (ie = e[37],
    ae = e[38]),
    o.useEffect(ie, ae);
    let oe, re;
    e[39] !== K || e[40] !== W || e[41] !== H || e[42] !== Q ? (oe = () => {
        !W && K && (H(),
        Q())
    }
    ,
    re = [K, W, H, Q],
    e[39] = K,
    e[40] = W,
    e[41] = H,
    e[42] = Q,
    e[43] = oe,
    e[44] = re) : (oe = e[43],
    re = e[44]),
    o.useEffect(oe, re),
    St(t);
    const c = Je();
    let ne, le;
    e[45] !== f || e[46] !== c ? (ne = () => {
        De(f) && Ge.checkGate("1661641186") && c.fetchQuery({
            queryKey: ["recent", "images", "bootstrap"],
            queryFn: qt
        })
    }
    ,
    le = [c, f],
    e[45] = f,
    e[46] = c,
    e[47] = ne,
    e[48] = le) : (ne = e[47],
    le = e[48]),
    o.useEffect(ne, le);
    let ce, de;
    e[49] !== l || e[50] !== c ? (ce = () => Ue(We, {
        completionFinished: r => {
            if (r.serverThreadId != null && !l) {
                const S = Be(r.serverThreadId)?.mode;
                S?.kind === Ke.GizmoInteraction && bt.handleGizmoInteracted(c, S.gizmo_id)
            }
        }
    }),
    de = [l, c],
    e[49] = l,
    e[50] = c,
    e[51] = ce,
    e[52] = de) : (ce = e[51],
    de = e[52]),
    o.useEffect(ce, de);
    let u;
    e[53] !== t || e[54] !== Ee ? (u = s.jsx(Ot, {
        clientThreadId: t,
        page: "chat"
    }, Ee),
    e[53] = t,
    e[54] = Ee,
    e[55] = u) : u = e[55];
    let m;
    e[56] !== t ? (m = s.jsx($t, {
        clientThreadId: t,
        setClientThreadId: I
    }),
    e[56] = t,
    e[57] = m) : m = e[57];
    let fe, ue, me;
    e[58] === Symbol.for("react.memo_cache_sentinel") ? (fe = s.jsx(vt, {}),
    ue = s.jsx(jt, {}),
    me = s.jsx(Ct, {}),
    e[58] = fe,
    e[59] = ue,
    e[60] = me) : (fe = e[58],
    ue = e[59],
    me = e[60]);
    let he;
    e[61] === Symbol.for("react.memo_cache_sentinel") ? (he = s.jsx(Et, {}),
    e[61] = he) : he = e[61];
    let h;
    e[62] !== t || e[63] !== i ? (h = s.jsx(Nt, {
        urlThreadId: i,
        clientThreadId: t,
        setClientThreadId: I
    }),
    e[62] = t,
    e[63] = i,
    e[64] = h) : h = e[64];
    let g;
    e[65] !== t ? (g = s.jsx(Lt, {
        clientThreadId: t
    }),
    e[65] = t,
    e[66] = g) : g = e[66];
    let p;
    e[67] !== t || e[68] !== d || e[69] !== h || e[70] !== g ? (p = s.jsxs(Vt, {
        clientThreadId: t,
        setClientThreadId: I,
        prefetchSearchPromises: d,
        children: [he, h, g]
    }),
    e[67] = t,
    e[68] = d,
    e[69] = h,
    e[70] = g,
    e[71] = p) : p = e[71];
    let x;
    e[72] !== t || e[73] !== u || e[74] !== m || e[75] !== p ? (x = s.jsxs(Rt, {
        clientThreadId: t,
        children: [u, m, fe, ue, me, p]
    }),
    e[72] = t,
    e[73] = u,
    e[74] = m,
    e[75] = p,
    e[76] = x) : x = e[76];
    let b, v;
    e[77] !== t ? (b = s.jsx(Wt, {
        clientThreadId: t
    }),
    v = s.jsx(_t, {
        clientThreadId: t
    }),
    e[77] = t,
    e[78] = b,
    e[79] = v) : (b = e[78],
    v = e[79]);
    let ge;
    e[80] === Symbol.for("react.memo_cache_sentinel") ? (ge = s.jsx(Pt, {}),
    e[80] = ge) : ge = e[80];
    let j;
    e[81] !== t ? (j = s.jsx(wt, {
        clientThreadId: t
    }),
    e[81] = t,
    e[82] = j) : j = e[82];
    let pe;
    e[83] === Symbol.for("react.memo_cache_sentinel") ? (pe = s.jsx(Tt, {}),
    e[83] = pe) : pe = e[83];
    let C;
    e[84] !== t || e[85] !== x || e[86] !== b || e[87] !== v || e[88] !== j ? (C = s.jsxs(Me, {
        clientThreadId: t,
        children: [x, b, v, ge, j, pe]
    }),
    e[84] = t,
    e[85] = x,
    e[86] = b,
    e[87] = v,
    e[88] = j,
    e[89] = C) : C = e[89];
    let E;
    e[90] !== t || e[91] !== C ? (E = s.jsx(kt, {
        clientThreadId: t,
        children: C
    }),
    e[90] = t,
    e[91] = C,
    e[92] = E) : E = e[92];
    let _;
    e[93] !== t || e[94] !== E ? (_ = s.jsx(Qt, {
        clientThreadId: t,
        children: E
    }),
    e[93] = t,
    e[94] = E,
    e[95] = _) : _ = e[95];
    let P;
    e[96] !== t || e[97] !== _ ? (P = s.jsx(It, {
        clientThreadId: t,
        children: _
    }),
    e[96] = t,
    e[97] = _,
    e[98] = P) : P = e[98];
    let xe;
    e[99] === Symbol.for("react.memo_cache_sentinel") ? (xe = !1,
    e[99] = xe) : xe = e[99];
    let w;
    e[100] !== P ? (w = s.jsxs(He, {
        children: [P, xe]
    }),
    e[100] = P,
    e[101] = w) : w = e[101];
    let be;
    return e[102] !== ve || e[103] !== w ? (be = s.jsx(ut.Provider, {
        value: ve,
        children: w
    }),
    e[102] = ve,
    e[103] = w,
    e[104] = be) : be = e[104],
    be
}
function qt() {
    return Qe.safeGet("/images/bootstrap", {})
}
function $t({clientThreadId: a, setClientThreadId: e}) {
    const {isOpen: i, isLoading: n} = yt();
    return !n && i ? s.jsx(Yt, {
        clientThreadId: a,
        setClientThreadId: e
    }) : null
}
typeof window < "u" && (window._g = Ht.GOKU_SERVICE);
export {ns as C, Gt as F};
//# sourceMappingURL=f8udhqz4016gh645.js.map
