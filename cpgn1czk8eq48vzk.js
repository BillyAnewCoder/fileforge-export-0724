import {c as b, j as c} from "./juy90og0wtbp77qa.js";
import {C as L} from "./o6wb3ptvu0bk81yq.js";
import {k2 as M, au as N, S as X} from "./dc2xxjkicf2pz0mj.js";
import {V as Y, X as Z, Y as z, Z as A, $ as B} from "./ckp56qklot786ulr.js";
import {P as J} from "./iacposgqe14fuloa.js";
function oe(q) {
    "use forget";
    const e = b.c(36)
      , {clientThreadId: t, currentModelId: h, onRequestCompletion: n, onClose: x, activeImage: C, inpainting: D, currentDrawnShape: F, getImageData: V, onCancelInpaint: G} = q
      , I = D === void 0 ? !1 : D
      , P = F === void 0 ? null : F;
    let d;
    e[0] !== C ? (d = C ?? {},
    e[0] = C,
    e[1] = d) : d = e[1];
    const {assetPointer: $, transformationId: p, height: H, width: R} = d
      , v = H === void 0 ? 0 : H
      , j = R === void 0 ? 0 : R;
    let k;
    const T = $ ?? "";
    let f;
    e[2] !== p ? (f = {
        dalle: {
            gen_id: p
        },
        generation: {
            gen_id: p
        }
    },
    e[2] = p,
    e[3] = f) : f = e[3];
    const S = f;
    let o;
    e[4] !== v || e[5] !== T || e[6] !== S || e[7] !== j ? (o = {
        asset_pointer: T,
        metadata: S,
        height: v,
        width: j
    },
    e[4] = v,
    e[5] = T,
    e[6] = S,
    e[7] = j,
    e[8] = o) : o = e[8];
    const w = G ?? Q
      , y = V ?? O;
    let g;
    e[9] !== P || e[10] !== o || e[11] !== w || e[12] !== y ? (g = {
        image: o,
        currentDrawnShape: P,
        onCleared: w,
        getImageData: y
    },
    e[9] = P,
    e[10] = o,
    e[11] = w,
    e[12] = y,
    e[13] = g) : g = e[13],
    k = g,
    Y(k);
    const _ = G ?? K;
    let i;
    e[14] !== I || e[15] !== _ ? (i = {
        isImageGenEditor: !1,
        isInpainting: I,
        onCancelInpaint: _
    },
    e[14] = I,
    e[15] = _,
    e[16] = i) : i = e[16];
    let r;
    e[17] !== n ? (r = E => n(Z(E)),
    e[17] = n,
    e[18] = r) : r = e[18];
    let s;
    e[19] !== x || e[20] !== n ? (s = async E => {
        n(await z(E)),
        x()
    }
    ,
    e[19] = x,
    e[20] = n,
    e[21] = s) : s = e[21];
    let a;
    e[22] !== t || e[23] !== h || e[24] !== r || e[25] !== s ? (a = c.jsx(A, {
        children: c.jsx(J, {
            clientThreadId: t,
            isNewThread: !0,
            currentModelId: h,
            onContinueGenerating: r,
            onRequestCompletion: s,
            hideHeader: !0
        })
    }),
    e[22] = t,
    e[23] = h,
    e[24] = r,
    e[25] = s,
    e[26] = a) : a = e[26];
    let l;
    e[27] !== t || e[28] !== a ? (l = c.jsx(M, {
        children: c.jsx(N, {
            clientThreadId: t,
            forcedSystemHintType: X.PictureV2,
            children: a
        })
    }),
    e[27] = t,
    e[28] = a,
    e[29] = l) : l = e[29];
    let m;
    e[30] !== t || e[31] !== l ? (m = c.jsx(L, {
        clientThreadId: t,
        children: l
    }),
    e[30] = t,
    e[31] = l,
    e[32] = m) : m = e[32];
    let u;
    return e[33] !== i || e[34] !== m ? (u = c.jsx(B, {
        value: i,
        children: m
    }),
    e[33] = i,
    e[34] = m,
    e[35] = u) : u = e[35],
    u
}
function K() {}
function O() {}
function Q() {}
export {oe as I};
//# sourceMappingURL=cpgn1czk8eq48vzk.js.map
