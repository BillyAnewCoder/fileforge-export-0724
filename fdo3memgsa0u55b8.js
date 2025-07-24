const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/orl5qr6pdfh8qbcx.js", "assets/juy90og0wtbp77qa.js", "assets/ckp56qklot786ulr.js", "assets/dc2xxjkicf2pz0mj.js", "assets/root-fv49dn40.css", "assets/conversation-small-j9iamy23.css", "assets/du2o33bqvziie5hn.js", "assets/jy1u8exw8iz2slve.js", "assets/l7m4sdxmp3n9y1x8.js", "assets/9k8yv4dhh02fqujo.js", "assets/f5uxfkqdhg7743lt.js", "assets/e2fyqefjfccaah4p.js", "assets/hz1pk536k4y9lgd9.js", "assets/mohn9bb09oz621dz.js", "assets/h52yy5f95o7r9b4p.js", "assets/l7ivca7g8ik3mk13.js", "assets/f76gy0b8ieo4s693.js", "assets/gy64pge8qevmvg7e.js", "assets/mia7txooqhkpbw7w.js", "assets/dmfmxszxfbs8gsbx.js", "assets/gr34ca5bfgzamfz1.js", "assets/nmh9rh1es9yfc7rh.js", "assets/gn1kkezdsm9hi3t4.js", "assets/m1q7suu3m36z180t.js", "assets/koc3vass6n6349vp.js", "assets/ejiu40t686c7js51.js", "assets/n6h2c0196v3vnzav.js", "assets/pbd6thieshvvjfa0.js", "assets/nc631yunytu8n0fx.js", "assets/kd37t55r0pqrdrzh.js", "assets/f5x7owcyj5iwmbsb.js", "assets/llrie03z1kvfi4vu.js", "assets/o6wb3ptvu0bk81yq.js", "assets/jsgl3b1bt1ozctr5.js", "assets/pc2givv05uuq8g6l.js", "assets/dq2hdjj12gdqq0p1.js", "assets/ezqsz68yx4uzdtqb.js", "assets/mre9dehcylnm0d4q.js", "assets/ck00y48d3yzt8bq3.js", "assets/cwcmrfhs9uzogy8q.js", "assets/mq5kqcvga15eqze5.js", "assets/bk8slwxjkdlmxjxm.js", "assets/lzfgwrifvgqibt3v.js", "assets/m36qabefvxegdn1g.js", "assets/g8shiwm7jpd74xmd.js", "assets/btouzu0b6h5eiejj.js", "assets/iacposgqe14fuloa.js", "assets/o7zrzew6ugefv8n2.js", "assets/abebcwj1m9mup3z6.js", "assets/nqj34k5dky4x5suq.js", "assets/hort3ndd4wla0a2j.js", "assets/hczymk9ojq2shlcf.js", "assets/hisrfv493df9w8hp.js", "assets/iiyyoj0wgh5vo89i.js", "assets/fj1zlpb3ugj147t8.js", "assets/btagl6w1gub4aw61.js", "assets/enk459wlxsccs6k2.js", "assets/jbze7lwlszm657iq.js", "assets/c71ejcosja5zeela.js", "assets/i88dz9qmvse12xe3.js"]))) => i.map(i => d[i]);
import {e as he, dX as Pe, en as We, aF as A, gc as Se, b0 as Ee, e$ as He, cf as $e, dG as xe, P as ie, bv as Ae, aG as ze, ar as _e, lq as Be, au as Ue, S as qe, as as ge, at as me, ak as Ke, ae as Xe, k as Ye, i as Ze, jf as Le, j as Qe, e2 as Je, iY as et, i7 as tt, jg as st, b2 as at} from "./dc2xxjkicf2pz0mj.js";
import {c as R, h as ue, r as O, j as t, M as G, e as it, f as nt} from "./juy90og0wtbp77qa.js";
import {c as lt, d as ot, N as rt, C as ct, a as dt, b as ye} from "./icu9d2zdwlcy45kn.js";
import {T as Ce, M as ht} from "./clbhua3y9f3awxpf.js";
import {kD as gt, kE as mt, bC as ut, kF as Fe, jI as ft, kG as je, bI as be, bJ as pe, ee as xt, hX as Re, eo as bt, bR as pt, bH as _t, bS as vt, kH as jt, kI as St, kJ as we, t as Ie, kK as yt, kL as Ct, kM as wt, kN as It, cW as Mt, kO as Nt, X as Tt, Y as kt, Z as Pt, fb as Et, kP as Ht, kQ as At, kR as Lt, d0 as Ft, kS as Rt, kT as Me, kU as Ne, kV as Ot, kW as Gt, kX as Dt, kY as Vt, kZ as Wt, k_ as $t, he as zt, k$ as Bt, l0 as Ut} from "./ckp56qklot786ulr.js";
import {closeSideChat as qt, supportsWebSideChatHeader as Kt} from "./z7ibstnufyeh5ynh.js";
import {b as Oe, C as Xt} from "./o6wb3ptvu0bk81yq.js";
import {I as Yt} from "./cpgn1czk8eq48vzk.js";
import {P as Zt} from "./iacposgqe14fuloa.js";
import {N as Qt, L as Jt} from "./g8shiwm7jpd74xmd.js";
function es(s) {
    "use forget";
    const e = R.c(32)
      , {clientThreadId: a} = s
      , i = ue()
      , l = he()
      , h = Pe(a)
      , [M,c] = O.useState(!1);
    let o;
    e[0] !== i ? (o = i.formatMessage({
        id: "2Rj8ls",
        defaultMessage: "Open chat menu"
    }),
    e[0] = i,
    e[1] = o) : o = e[1];
    let x;
    e[2] === Symbol.for("react.memo_cache_sentinel") ? (x = t.jsx(We, {
        className: "icon"
    }),
    e[2] = x) : x = e[2];
    let r;
    e[3] !== o ? (r = t.jsx(A.BasicTrigger, {
        asChild: !0,
        children: t.jsx("button", {
            "aria-label": o,
            className: "hover:bg-token-interactive-bg-secondary-hover focus-visible:bg-token-interactive-bg-secondary-hover radix-state-open:bg-token-interactive-bg-secondary-hover flex h-9 w-9 items-center justify-center rounded-[8px] focus-visible:outline-0",
            children: x
        })
    }),
    e[3] = o,
    e[4] = r) : r = e[4];
    let v;
    e[5] === Symbol.for("react.memo_cache_sentinel") ? (v = t.jsx(A.Item, {
        onClick: () => {
            Se.wantsNewConversation$.set(!0),
            Se.selectedConversationId$.set(void 0),
            c(!1)
        }
        ,
        children: t.jsx(G, {
            id: "1dpVjb",
            defaultMessage: "New Chat"
        })
    }),
    e[5] = v) : v = e[5];
    let m;
    e[6] === Symbol.for("react.memo_cache_sentinel") ? (m = t.jsx(A.SubMenuTrigger, {
        children: t.jsx(G, {
            id: "wFQF2X",
            defaultMessage: "Open Chat"
        })
    }),
    e[6] = m) : m = e[6];
    let d;
    e[7] === Symbol.for("react.memo_cache_sentinel") ? (d = () => c(!1),
    e[7] = d) : d = e[7];
    let _;
    e[8] !== h ? (_ = t.jsxs(A.Sub, {
        children: [m, t.jsx(A.Portal, {
            children: t.jsx(A.SubContent, {
                "data-desktop-skip-link-handler": !0,
                className: "max-h-[50dvh] w-72 overflow-y-auto p-0",
                children: t.jsx(gt, {
                    activeId: h,
                    hideOverflowMenu: !0,
                    onSelect: d
                })
            })
        })]
    }),
    e[8] = h,
    e[9] = _) : _ = e[9];
    let S;
    e[10] !== l || e[11] !== h ? (S = () => {
        h && (Ee(l, mt, {
            serverThreadId: h,
            isActiveConversation: !0
        }),
        c(!1))
    }
    ,
    e[10] = l,
    e[11] = h,
    e[12] = S) : S = e[12];
    let y;
    e[13] === Symbol.for("react.memo_cache_sentinel") ? (y = t.jsx(G, {
        id: "jbrmts",
        defaultMessage: "Delete Chat"
    }),
    e[13] = y) : y = e[13];
    let C;
    e[14] !== S ? (C = t.jsx(A.Item, {
        color: "danger",
        onClick: S,
        children: y
    }),
    e[14] = S,
    e[15] = C) : C = e[15];
    let b;
    e[16] !== C || e[17] !== _ ? (b = t.jsx(A.Portal, {
        children: t.jsxs(A.Content, {
            align: "end",
            children: [v, _, C]
        })
    }),
    e[16] = C,
    e[17] = _,
    e[18] = b) : b = e[18];
    let I;
    e[19] !== M || e[20] !== b || e[21] !== r ? (I = t.jsxs(A.Root, {
        open: M,
        onOpenChange: c,
        children: [r, b]
    }),
    e[19] = M,
    e[20] = b,
    e[21] = r,
    e[22] = I) : I = e[22];
    let u;
    e[23] !== i ? (u = i.formatMessage({
        id: "uNAQNe",
        defaultMessage: "Close"
    }),
    e[23] = i,
    e[24] = u) : u = e[24];
    let f;
    e[25] === Symbol.for("react.memo_cache_sentinel") ? (f = () => {
        qt(),
        c(!1)
    }
    ,
    e[25] = f) : f = e[25];
    let w;
    e[26] === Symbol.for("react.memo_cache_sentinel") ? (w = t.jsx(He, {
        className: "icon"
    }),
    e[26] = w) : w = e[26];
    let g;
    e[27] !== u ? (g = t.jsx("button", {
        "aria-label": u,
        onClick: f,
        className: "hover:bg-token-interactive-bg-secondary-hover focus-visible:bg-token-interactive-bg-secondary-hover flex h-9 w-9 items-center justify-center rounded-[8px] focus-visible:outline-0",
        children: w
    }),
    e[27] = u,
    e[28] = g) : g = e[28];
    let p;
    return e[29] !== I || e[30] !== g ? (p = t.jsxs("div", {
        className: "flex h-[44px] items-center justify-between px-1",
        children: [I, g]
    }),
    e[29] = I,
    e[30] = g,
    e[31] = p) : p = e[31],
    p
}
const ts = 5
  , ss = s => {
    "use forget";
    const e = R.c(27)
      , {initialIndex: a, onClose: i, onRequestCompletion: l, clientThreadId: h, currentModelId: M, includeArchived: c, visibilityFilter: o} = s
      , x = ue()
      , r = ut()
      , v = he();
    let m;
    e[0] !== v ? (m = $e(v).checkGate("1520205231"),
    e[0] = v,
    e[1] = m) : m = e[1];
    const d = m
      , {archiveMutation: _} = Fe()
      , S = it()
      , y = ft()
      , {images: C, fetchNextPage: b, hasNextPage: I, isFetchingNextPage: u} = je(c, o);
    let f;
    e[2] !== b || e[3] !== I || e[4] !== C || e[5] !== u ? (f = j => {
        I && j >= Math.max(0, C.length - ts) && !u && b()
    }
    ,
    e[2] = b,
    e[3] = I,
    e[4] = C,
    e[5] = u,
    e[6] = f) : f = e[6];
    const w = f;
    let g;
    e[7] !== _ || e[8] !== d || e[9] !== r || e[10] !== x || e[11] !== S || e[12] !== i || e[13] !== y ? (g = t.jsx(be.LightboxHeaderActions, {
        children: j => {
            const {activeImage: n} = j;
            return t.jsxs("div", {
                className: "flex gap-1 md:gap-2",
                children: [t.jsx(xe, {
                    label: x.formatMessage(F.openInChat),
                    triggerAs: null,
                    children: t.jsx(pe, {
                        className: "aspect-square",
                        icon: xt,
                        onClick: T => {
                            ie.logEventWithStatsig("chatgpt_web_image_library_lightbox_image_open_in_chat_clicked", "chatgpt_web_image_library_lightbox_image_open_in_chat_clicked"),
                            T.preventDefault(),
                            y.addClassToCurrentTransition(["from-lightbox", "to-conversation"]),
                            y.transitionToPage({
                                type: "conversation",
                                value: void 0
                            }, async () => {
                                i(),
                                await S(`/c/${n?.conversationId}?message=${n?.messageId}`, {
                                    preventScrollReset: !0
                                })
                            }
                            )
                        }
                        ,
                        "aria-label": x.formatMessage(F.openInChat)
                    })
                }), d && n && t.jsx(xe, {
                    label: x.formatMessage(n.archived ? F.unarchive : F.archive),
                    triggerAs: null,
                    children: t.jsx(pe, {
                        className: "aspect-square",
                        icon: n.archived ? bt : Re,
                        onClick: () => {
                            ie.logEventWithStatsig(n.archived ? "chatgpt_web_image_library_lightbox_image_unarchive_clicked" : "chatgpt_web_image_library_lightbox_image_archive_clicked", n.archived ? "chatgpt_web_image_library_lightbox_image_unarchive_clicked" : "chatgpt_web_image_library_lightbox_image_archive_clicked"),
                            _.mutate({
                                imageId: n.id,
                                operation: n.archived ? "unarchive" : "archive"
                            })
                        }
                        ,
                        "aria-label": x.formatMessage(n.archived ? F.unarchive : F.archive)
                    })
                }), t.jsx(xe, {
                    label: x.formatMessage(F.download),
                    triggerAs: null,
                    children: t.jsx(pe, {
                        className: "aspect-square",
                        icon: pt,
                        onClick: () => {
                            ie.logEventWithStatsig("chatgpt_web_image_library_lightbox_image_download_clicked", "chatgpt_web_image_library_lightbox_image_download_clicked"),
                            _t({
                                url: n?.url ?? "",
                                fileName: `${n?.title ?? x.formatMessage({
                                    id: "cYxKbe",
                                    defaultMessage: "My ChatGPT image"
                                })}.png`
                            })
                        }
                        ,
                        "aria-label": x.formatMessage(F.download)
                    })
                }), r() && n?.messageId && t.jsx(vt, {
                    assetPointer: n.assetPointer,
                    serverThreadId: n.conversationId,
                    messageId: n.messageId
                })]
            })
        }
    }),
    e[7] = _,
    e[8] = d,
    e[9] = r,
    e[10] = x,
    e[11] = S,
    e[12] = i,
    e[13] = y,
    e[14] = g) : g = e[14];
    let p;
    e[15] !== h || e[16] !== M || e[17] !== i || e[18] !== l ? (p = t.jsx(be.Footer, {
        children: j => {
            const {activeImage: n} = j;
            return t.jsx(Yt, {
                clientThreadId: h,
                currentModelId: M,
                onRequestCompletion: l,
                onClose: i,
                activeImage: n
            })
        }
    }),
    e[15] = h,
    e[16] = M,
    e[17] = i,
    e[18] = l,
    e[19] = p) : p = e[19];
    let N;
    return e[20] !== w || e[21] !== C || e[22] !== a || e[23] !== i || e[24] !== g || e[25] !== p ? (N = t.jsxs(be.Root, {
        images: C,
        initialIndex: a,
        onClose: i,
        onIndexChange: w,
        children: [g, p]
    }),
    e[20] = w,
    e[21] = C,
    e[22] = a,
    e[23] = i,
    e[24] = g,
    e[25] = p,
    e[26] = N) : N = e[26],
    N
}
  , F = nt({
    download: {
        id: "Z23tMl",
        defaultMessage: "Download image"
    },
    openInChat: {
        id: "Eh8G/f",
        defaultMessage: "Open in Chat"
    },
    archive: {
        id: "yOqxdz",
        defaultMessage: "Hide image"
    },
    unarchive: {
        id: "yEUKZl",
        defaultMessage: "Show image"
    }
})
  , Ge = s => {
    "use forget";
    const e = R.c(34)
      , {hasMoreImages: a, count: i, images: l, includeArchived: h, isHiddenView: M, onUnhide: c, isFetchingMore: o, onScrollToEnd: x} = s
      , r = M === void 0 ? !1 : M
      , m = !Ae() ? jt : St
      , d = o ? Math.max(i ?? 0, m) : a ? Math.max((i ?? 0) - (l.length ?? 0), 0) : 0
      , _ = he()
      , {onRequestCompletion: S, clientThreadId: y, currentModelId: C} = Oe()
      , b = ue();
    let I;
    e[0] !== y || e[1] !== _ || e[2] !== C || e[3] !== h || e[4] !== r || e[5] !== S ? (I = j => {
        ie.logEventWithStatsig("chatgpt_web_image_library_lightbox_opened", "chatgpt_web_image_library_lightbox_opened"),
        Ee(_, n => {
            const {onClose: T} = n;
            return t.jsx(ss, {
                onClose: () => {
                    T()
                }
                ,
                initialIndex: j,
                includeArchived: h,
                visibilityFilter: r ? "archived" : "unarchived",
                onRequestCompletion: S,
                clientThreadId: y,
                currentModelId: C
            })
        }
        )
    }
    ,
    e[0] = y,
    e[1] = _,
    e[2] = C,
    e[3] = h,
    e[4] = r,
    e[5] = S,
    e[6] = I) : I = e[6];
    const u = I;
    let f;
    if (e[7] !== l || e[8] !== b || e[9] !== r || e[10] !== x || e[11] !== c || e[12] !== u || e[13] !== d) {
        let j;
        e[15] !== l.length || e[16] !== b || e[17] !== r || e[18] !== x || e[19] !== c || e[20] !== u ? (j = (T, k) => {
            const {id: P, url: E, thumbnail: D, width: fe, height: oe, title: V, assetPointer: L, conversationId: H, messageId: W} = T
              , ne = V === void 0 ? null : V;
            return t.jsxs(we, {
                index: k,
                src: Ie(E),
                onClick: () => u(k),
                thumbnail: Ie(D),
                width: fe,
                height: oe,
                alt: ne,
                children: [!r && H != null && W != null && t.jsx(yt, {
                    imageAssetPointer: L ?? void 0,
                    imageUrl: E ?? void 0,
                    clientThreadId: H,
                    serverThreadId: H,
                    messageId: W,
                    showRatingButtons: !1
                }), r && t.jsxs(t.Fragment, {
                    children: [t.jsx("div", {
                        className: "pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity group-hover/imagegen-image:opacity-100",
                        children: t.jsx("div", {
                            className: "absolute inset-x-0 bottom-0 h-20 bg-linear-to-b from-transparent to-black/30"
                        })
                    }), t.jsx("div", {
                        className: "absolute end-1 bottom-1 z-20 opacity-0 transition-opacity group-hover/imagegen-image:opacity-100",
                        children: t.jsxs("button", {
                            className: "z-11 flex h-10 items-center gap-1 rounded-xl px-2 text-sm font-medium text-white hover:bg-white/15 hover:backdrop-blur-md focus:bg-white/15 focus:backdrop-blur-md",
                            onClick: le => {
                                le.stopPropagation(),
                                c?.(P)
                            }
                            ,
                            "aria-label": b.formatMessage({
                                id: "fjXWf2",
                                defaultMessage: "Unhide image"
                            }),
                            children: [t.jsx(Re, {
                                className: "h-4 w-4"
                            }), t.jsx("span", {
                                className: "max-md:hidden",
                                children: t.jsx(G, {
                                    id: "wEyKC9",
                                    defaultMessage: "Unhide"
                                })
                            })]
                        })
                    })]
                }), k === l.length - 1 && t.jsx(Ct, {
                    onScrollToEnd: x
                })]
            }, P)
        }
        ,
        e[15] = l.length,
        e[16] = b,
        e[17] = r,
        e[18] = x,
        e[19] = c,
        e[20] = u,
        e[21] = j) : j = e[21];
        let n;
        e[22] !== l.length ? (n = (T, k) => {
            const P = l.length + k;
            return t.jsx(we, {
                index: P,
                isPlaceholder: !0
            }, P)
        }
        ,
        e[22] = l.length,
        e[23] = n) : n = e[23],
        f = l.map(j).concat(new Array(d).fill(null).map(n)),
        e[7] = l,
        e[8] = b,
        e[9] = r,
        e[10] = x,
        e[11] = c,
        e[12] = u,
        e[13] = d,
        e[14] = f
    } else
        f = e[14];
    let w;
    e[24] !== f ? (w = t.jsx("div", {
        className: "grid min-h-60 w-full grid-cols-2 gap-1 max-md:gap-0.5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6",
        children: f
    }),
    e[24] = f,
    e[25] = w) : w = e[25];
    let g;
    e[26] !== a || e[27] !== o ? (g = a && o && t.jsx(ze, {}),
    e[26] = a,
    e[27] = o,
    e[28] = g) : g = e[28];
    let p;
    e[29] !== g ? (p = t.jsx("div", {
        className: "flex h-8 items-center justify-center",
        children: g
    }),
    e[29] = g,
    e[30] = p) : p = e[30];
    let N;
    return e[31] !== w || e[32] !== p ? (N = t.jsxs("div", {
        className: "w-full",
        children: [w, p]
    }),
    e[31] = w,
    e[32] = p,
    e[33] = N) : N = e[33],
    N
}
;
function De(s) {
    "use forget";
    const e = R.c(37)
      , {onClose: a} = s
      , {images: i, hasNextPage: l, fetchNextPage: h, isFetchingNextPage: M, isLoading: c} = je(!0, "archived")
      , {archiveMutation: o} = Fe()
      , [x,r] = O.useState(!1)
      , v = ue();
    let m;
    e[0] !== o ? (m = async P => {
        await Promise.all(P.map(E => o.mutateAsync({
            imageId: E,
            operation: "unarchive"
        })))
    }
    ,
    e[0] = o,
    e[1] = m) : m = e[1];
    const d = m;
    let _;
    e[2] !== d || e[3] !== i ? (_ = async () => {
        i.length && (r(!0),
        await d(i.map(as)),
        r(!1))
    }
    ,
    e[2] = d,
    e[3] = i,
    e[4] = _) : _ = e[4];
    const S = _;
    let y;
    e[5] !== v ? (y = v.formatMessage({
        id: "awwvCt",
        defaultMessage: "Close"
    }),
    e[5] = v,
    e[6] = y) : y = e[6];
    let C;
    e[7] === Symbol.for("react.memo_cache_sentinel") ? (C = t.jsx(He, {
        className: "h-5 w-5"
    }),
    e[7] = C) : C = e[7];
    let b;
    e[8] !== a || e[9] !== y ? (b = t.jsx("button", {
        type: "button",
        "aria-label": y,
        onClick: a,
        className: "flex items-center justify-center p-1",
        children: C
    }),
    e[8] = a,
    e[9] = y,
    e[10] = b) : b = e[10];
    let I;
    e[11] === Symbol.for("react.memo_cache_sentinel") ? (I = t.jsx("h1", {
        className: "px-2 text-lg font-normal select-none [text-box-trim:trim-both]",
        children: t.jsx(G, {
            id: "pvfc+c",
            defaultMessage: "Hidden"
        })
    }),
    e[11] = I) : I = e[11];
    let u;
    e[12] !== b ? (u = t.jsxs("div", {
        className: "flex items-center gap-1",
        children: [b, I]
    }),
    e[12] = b,
    e[13] = u) : u = e[13];
    let f;
    e[14] !== S ? (f = !1,
    e[14] = S,
    e[15] = f) : f = e[15];
    let w;
    e[16] !== u || e[17] !== f ? (w = t.jsxs("header", {
        "data-landing-page-load-target": !0,
        className: "h-header-height bg-token-bg-primary sticky top-0 z-20 flex w-full items-center justify-between px-3 py-3",
        children: [u, f]
    }),
    e[16] = u,
    e[17] = f,
    e[18] = w) : w = e[18];
    let g;
    e[19] !== d ? (g = P => d([P]),
    e[19] = d,
    e[20] = g) : g = e[20];
    const p = l ?? !1
      , N = M || c;
    let j;
    e[21] !== h || e[22] !== i || e[23] !== g || e[24] !== p || e[25] !== N ? (j = t.jsx(Ge, {
        images: i,
        count: i.length,
        includeArchived: !0,
        isHiddenView: !0,
        onUnhide: g,
        hasMoreImages: p,
        isFetchingMore: N,
        onScrollToEnd: h
    }),
    e[21] = h,
    e[22] = i,
    e[23] = g,
    e[24] = p,
    e[25] = N,
    e[26] = j) : j = e[26];
    let n;
    e[27] !== x || e[28] !== i.length || e[29] !== c ? (n = i.length === 0 && !x && !c && t.jsx("p", {
        className: "text-token-text-secondary py-8 text-center",
        children: t.jsx(G, {
            id: "BdZGOW",
            defaultMessage: "No hidden images"
        })
    }),
    e[27] = x,
    e[28] = i.length,
    e[29] = c,
    e[30] = n) : n = e[30];
    let T;
    e[31] !== j || e[32] !== n ? (T = t.jsxs("div", {
        className: "w-full max-w-[1800px]",
        children: [j, n]
    }),
    e[31] = j,
    e[32] = n,
    e[33] = T) : T = e[33];
    let k;
    return e[34] !== T || e[35] !== w ? (k = t.jsxs("div", {
        className: "max-md:bg-token-bg-primary flex w-full flex-col items-center max-md:fixed max-md:inset-0 max-md:z-50 max-md:overflow-y-auto",
        children: [w, T]
    }),
    e[34] = T,
    e[35] = w,
    e[36] = k) : k = e[36],
    k
}
function as(s) {
    return s.id
}
function ve(s) {
    "use forget";
    const e = R.c(19)
      , {isMobile: a, onShowHidden: i} = s
      , l = a === void 0 ? !1 : a
      , h = l && "ps-2"
      , M = !l && "h-header-height bg-token-main-surface-primary sticky top-0 z-20 px-3 py-3 max-md:hidden";
    let c;
    e[0] !== h || e[1] !== M ? (c = _e("flex w-full items-center justify-between", h, M),
    e[0] = h,
    e[1] = M,
    e[2] = c) : c = e[2];
    let o;
    e[3] !== l ? (o = !l && t.jsx(Qt, {
        clientThreadId: Be
    }),
    e[3] = l,
    e[4] = o) : o = e[4];
    let x;
    e[5] === Symbol.for("react.memo_cache_sentinel") ? (x = t.jsx("h1", {
        className: "px-2 text-lg font-normal select-none [text-box-trim:trim-both] [view-transition-name:var(--vt-tool-page-title)]",
        children: t.jsx(G, {
            id: "9yCu65",
            defaultMessage: "Library"
        })
    }),
    e[5] = x) : x = e[5];
    let r;
    e[6] !== o ? (r = t.jsxs("div", {
        className: "flex items-center gap-1",
        children: [o, x]
    }),
    e[6] = o,
    e[7] = r) : r = e[7];
    let v;
    e[8] !== i ? (v = t.jsx(wt, {
        onShowHidden: i
    }),
    e[8] = i,
    e[9] = v) : v = e[9];
    let m;
    e[10] !== l ? (m = !l && t.jsx(Jt, {}),
    e[10] = l,
    e[11] = m) : m = e[11];
    let d;
    e[12] !== v || e[13] !== m ? (d = t.jsxs("div", {
        className: "flex items-center gap-2",
        children: [v, m]
    }),
    e[12] = v,
    e[13] = m,
    e[14] = d) : d = e[14];
    let _;
    return e[15] !== d || e[16] !== c || e[17] !== r ? (_ = t.jsxs("header", {
        "data-landing-page-load-target": !0,
        className: c,
        children: [r, d]
    }),
    e[15] = d,
    e[16] = c,
    e[17] = r,
    e[18] = _) : _ = e[18],
    _
}
function is() {
    "use forget";
    const s = R.c(35)
      , [e,a] = O.useState(!1)
      , {images: i, hasNextPage: l, isLoading: h, isFetchingNextPage: M, fetchNextPage: c} = je(!1, "unarchived")
      , {data: o, isLoading: x} = It();
    let r;
    s[0] === Symbol.for("react.memo_cache_sentinel") ? (r = [],
    s[0] = r) : r = s[0],
    O.useEffect(ns, r);
    const v = x
      , m = o?.images_count ?? 0
      , d = !v && !m
      , {onRequestCompletion: _, clientThreadId: S, currentModelId: y} = Oe()
      , C = Mt();
    if (e) {
        let E;
        return s[1] === Symbol.for("react.memo_cache_sentinel") ? (E = t.jsx(De, {
            onClose: () => a(!1)
        }),
        s[1] = E) : E = s[1],
        E
    }
    let b;
    s[2] === Symbol.for("react.memo_cache_sentinel") ? (b = t.jsx(ve, {
        onShowHidden: () => a(!0)
    }),
    s[2] = b) : b = s[2];
    const I = d ? "pt-8" : "max-md:pt-0";
    let u;
    s[3] !== I ? (u = _e("h-full w-full max-w-[1800px]", I),
    s[3] = I,
    s[4] = u) : u = s[4];
    let f;
    s[5] !== c || s[6] !== l || s[7] !== i || s[8] !== m || s[9] !== M || s[10] !== h || s[11] !== d ? (f = d ? t.jsx(Nt, {
        borderless: !0
    }) : t.jsx(Ge, {
        count: m,
        images: i,
        hasMoreImages: l,
        isFetchingMore: M || h,
        onScrollToEnd: c
    }),
    s[5] = c,
    s[6] = l,
    s[7] = i,
    s[8] = m,
    s[9] = M,
    s[10] = h,
    s[11] = d,
    s[12] = f) : f = s[12];
    const w = C ? "w-[calc(100%-var(--sidebar-width))]" : "w-full";
    let g;
    s[13] !== w ? (g = _e("transition-width pointer-events-none fixed end-0 bottom-4 z-10 flex justify-center px-4", w),
    s[13] = w,
    s[14] = g) : g = s[14];
    let p, N;
    s[15] !== _ ? (p = E => _(Tt(E)),
    N = async E => {
        ie.logEventWithStatsig("chatgpt_web_image_library_composer_submitted", "chatgpt_web_image_library_composer_submitted"),
        _(await kt(E))
    }
    ,
    s[15] = _,
    s[16] = p,
    s[17] = N) : (p = s[16],
    N = s[17]);
    let j;
    s[18] !== S || s[19] !== y || s[20] !== p || s[21] !== N ? (j = t.jsx("div", {
        className: "pointer-events-auto w-full max-w-[768px]",
        children: t.jsx(Zt, {
            clientThreadId: S,
            isNewThread: !0,
            layoutMode: "bottom",
            currentModelId: y,
            onContinueGenerating: p,
            onRequestCompletion: N,
            hideHeader: !0
        })
    }),
    s[18] = S,
    s[19] = y,
    s[20] = p,
    s[21] = N,
    s[22] = j) : j = s[22];
    let n;
    s[23] !== g || s[24] !== j ? (n = t.jsx("div", {
        className: g,
        children: j
    }),
    s[23] = g,
    s[24] = j,
    s[25] = n) : n = s[25];
    let T;
    s[26] !== n || s[27] !== f ? (T = t.jsxs(Pt, {
        children: [f, n]
    }),
    s[26] = n,
    s[27] = f,
    s[28] = T) : T = s[28];
    let k;
    s[29] !== S || s[30] !== T ? (k = t.jsx(Ue, {
        clientThreadId: S,
        forcedSystemHintType: qe.PictureV2,
        children: T
    }),
    s[29] = S,
    s[30] = T,
    s[31] = k) : k = s[31];
    let P;
    return s[32] !== k || s[33] !== u ? (P = t.jsxs("div", {
        className: "flex h-full w-full flex-1 flex-col items-center justify-self-center",
        children: [b, t.jsx("div", {
            className: u,
            children: k
        })]
    }),
    s[32] = k,
    s[33] = u,
    s[34] = P) : P = s[34],
    P
}
function ns() {
    ie.logEventWithStatsig("chatgpt_web_image_library_page_viewed", "chatgpt_web_image_library_page_viewed")
}
const ls = ge( () => me( () => import("./orl5qr6pdfh8qbcx.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55])).then(s => s.CanvasFocusedViewManager))
  , Te = ge( () => me( () => import("./enk459wlxsccs6k2.js"), __vite__mapDeps([56, 1, 3, 4, 29, 2, 5, 19, 30, 31, 32, 33, 34, 35, 36, 37, 38, 57])).then(s => s.VNCFocusedViewManager))
  , os = ge( () => me( () => import("./c71ejcosja5zeela.js"), __vite__mapDeps([58, 1, 3, 4, 2, 5])).then(s => s.SearchResultsModal))
  , ke = ge( () => me( () => import("./i88dz9qmvse12xe3.js"), __vite__mapDeps([59, 1, 3, 4, 2, 5, 30, 31, 32, 19, 33, 34, 35, 36, 37])).then(s => s.WalnutFocusedViewManager))
  , rs = () => !1;
function ys(s) {
    "use forget";
    const e = R.c(86)
      , {clientThreadId: a, setClientThreadId: i, urlThreadId: l, threadContent: h} = s;
    let M;
    e[0] !== a || e[1] !== i ? (M = {
        clientThreadId: a,
        setClientThreadId: i
    },
    e[0] = a,
    e[1] = i,
    e[2] = M) : M = e[2];
    const {createNewThread: c, resetThread: o} = Et(M)
      , {pageType: x} = Ht()
      , r = Ae()
      , v = x?.type === "library"
      , m = !1
      , [d,_] = O.useState(!1)
      , S = rs()
      , {shouldShowCenterGetTeamPill: y} = At(a, !1)
      , {shouldShowCenterGetPlusPill: C} = Lt(a, !1);
    let b;
    e[3] !== h || e[4] !== m || e[5] !== v || e[6] !== d ? (b = h ?? (v ? d ? t.jsx(De, {
        onClose: () => _(!1)
    }) : t.jsx(is, {}) : null),
    e[3] = h,
    e[4] = m,
    e[5] = v,
    e[6] = d,
    e[7] = b) : b = e[7];
    const I = b
      , u = Ke(a, ds)
      , f = Ft(u)
      , w = he()
      , g = !Xe(w) && Ye(w, "2118136551").get("make_signup_sticky", !1)
      , [p,N] = Ze(cs)
      , j = p
      , n = p
      , [T,k] = O.useState(!1);
    let P, E;
    e[8] !== N ? (P = () => {
        if (!N) {
            k(!1);
            return
        }
        (async () => {
            const Ve = await Kt();
            k(Ve ?? !1)
        }
        )()
    }
    ,
    E = [N],
    e[8] = N,
    e[9] = P,
    e[10] = E) : (P = e[9],
    E = e[10]),
    O.useEffect(P, E);
    let D;
    e[11] !== a || e[12] !== u || e[13] !== r || e[14] !== f || e[15] !== C || e[16] !== y ? (D = !r && (f || !u) ? t.jsx(Rt, {
        children: y ? t.jsx(Me, {}) : C ? t.jsx(Ne, {}) : t.jsx(Ce, {
            clientThreadId: a,
            inMobileHeader: !0
        })
    }) : y ? t.jsx(Me, {}) : C ? t.jsx(Ne, {}) : t.jsx(Ce, {
        clientThreadId: a,
        inMobileHeader: !0
    }),
    e[11] = a,
    e[12] = u,
    e[13] = r,
    e[14] = f,
    e[15] = C,
    e[16] = y,
    e[17] = D) : D = e[17];
    const fe = D
      , oe = Le()
      , V = oe && oe.clientThreadId === a;
    let L;
    e[18] !== a || e[19] !== o ? (L = t.jsx(hs, {
        clientThreadId: a,
        resetThread: o
    }),
    e[18] = a,
    e[19] = o,
    e[20] = L) : L = e[20];
    let H;
    e[21] !== a || e[22] !== l ? (H = t.jsx(Ot, {
        clientThreadId: a,
        urlThreadId: l
    }),
    e[21] = a,
    e[22] = l,
    e[23] = H) : H = e[23];
    const W = !p
      , ne = v || m || S
      , le = v || m || S || g ? null : fe;
    let $;
    e[24] !== a ? ($ = t.jsx(Gt, {
        clientThreadId: a
    }),
    e[24] = a,
    e[25] = $) : $ = e[25];
    let z;
    e[26] !== o ? (z = t.jsx(lt, {
        onNewChatButtonClick: o
    }),
    e[26] = o,
    e[27] = z) : z = e[27];
    let B;
    e[28] !== a || e[29] !== S || e[30] !== o || e[31] !== m || e[32] !== v || e[33] !== d ? (B = v ? d ? t.jsx(ve, {
        isMobile: !0
    }) : t.jsx(ve, {
        isMobile: !0,
        onShowHidden: () => _(!0)
    }) : t.jsx(ot, {
        clientThreadId: a,
        onNewChatButtonClick: o
    }),
    e[28] = a,
    e[29] = S,
    e[30] = o,
    e[31] = m,
    e[32] = v,
    e[33] = d,
    e[34] = B) : B = e[34];
    let U;
    e[35] !== a || e[36] !== T ? (U = T && t.jsx("div", {
        className: "z-20 w-full",
        children: t.jsx(es, {
            clientThreadId: a
        })
    }),
    e[35] = a,
    e[36] = T,
    e[37] = U) : U = e[37];
    let q;
    e[38] !== a || e[39] !== c ? (q = () => t.jsx(rt, {
        navHeader: t.jsx(dt, {
            onNewThread: c
        }),
        children: t.jsx(ct, {
            clientThreadId: a,
            onNewThread: c
        })
    }),
    e[38] = a,
    e[39] = c,
    e[40] = q) : q = e[40];
    let K;
    e[41] !== a || e[42] !== V ? (K = V ? t.jsx(Dt, {
        clientThreadId: a
    }) : null,
    e[41] = a,
    e[42] = V,
    e[43] = K) : K = e[43];
    let re;
    e[44] === Symbol.for("react.memo_cache_sentinel") ? (re = t.jsx(Vt, {}),
    e[44] = re) : re = e[44];
    let X;
    e[45] !== a || e[46] !== n || e[47] !== I ? (X = I ?? t.jsx(ht, {
        clientThreadId: a,
        hideHeader: n
    }, a),
    e[45] = a,
    e[46] = n,
    e[47] = I,
    e[48] = X) : X = e[48];
    let Y;
    e[49] !== a ? (Y = t.jsx(ls, {
        clientThreadId: a
    }),
    e[49] = a,
    e[50] = Y) : Y = e[50];
    let ce;
    e[51] === Symbol.for("react.memo_cache_sentinel") ? (ce = !1,
    e[51] = ce) : ce = e[51];
    let Z;
    e[52] !== a ? (Z = !1,
    e[52] = a,
    e[53] = Z) : Z = e[53];
    let Q;
    e[54] !== a ? (Q = Te && t.jsx(Te, {
        clientThreadId: a
    }),
    e[54] = a,
    e[55] = Q) : Q = e[55];
    let J;
    e[56] !== a ? (J = ke && t.jsx(ke, {
        clientThreadId: a
    }),
    e[56] = a,
    e[57] = J) : J = e[57];
    let ee;
    e[58] !== Y || e[59] !== Z || e[60] !== Q || e[61] !== J ? (ee = t.jsxs(ye.Sidebars, {
        children: [Y, ce, Z, Q, J]
    }),
    e[58] = Y,
    e[59] = Z,
    e[60] = Q,
    e[61] = J,
    e[62] = ee) : ee = e[62];
    let te;
    e[63] !== j || e[64] !== le || e[65] !== $ || e[66] !== z || e[67] !== B || e[68] !== U || e[69] !== q || e[70] !== K || e[71] !== X || e[72] !== ee || e[73] !== ne ? (te = t.jsxs(ye, {
        hideNavigation: j,
        mobileHeaderRightContentExpanded: ne,
        mobileHeaderContent: le,
        mobileHeaderBottomContent: $,
        mobileHeaderLeftContent: z,
        mobileHeaderRightContent: B,
        kaur1br5HeaderContent: U,
        renderNavSidebar: q,
        threadFlyout: K,
        children: [re, X, ee]
    }),
    e[63] = j,
    e[64] = le,
    e[65] = $,
    e[66] = z,
    e[67] = B,
    e[68] = U,
    e[69] = q,
    e[70] = K,
    e[71] = X,
    e[72] = ee,
    e[73] = ne,
    e[74] = te) : te = e[74];
    let se;
    e[75] !== a || e[76] !== te || e[77] !== W ? (se = t.jsx(Xt, {
        clientThreadId: a,
        draftsEnabled: W,
        children: te
    }),
    e[75] = a,
    e[76] = te,
    e[77] = W,
    e[78] = se) : se = e[78];
    let ae;
    e[79] !== a ? (ae = t.jsx(gs, {
        clientThreadId: a
    }),
    e[79] = a,
    e[80] = ae) : ae = e[80];
    let de;
    return e[81] !== se || e[82] !== ae || e[83] !== L || e[84] !== H ? (de = t.jsxs(t.Fragment, {
        children: [L, H, se, ae]
    }),
    e[81] = se,
    e[82] = ae,
    e[83] = L,
    e[84] = H,
    e[85] = de) : de = e[85],
    de
}
function cs(s) {
    return [Qe(s), Je(s)]
}
function ds(s) {
    return at.getGizmoId(s)
}
function hs(s) {
    "use forget";
    const e = R.c(7)
      , {clientThreadId: a, resetThread: i} = s;
    let l;
    e[0] !== a ? (l = {
        clientThreadId: a
    },
    e[0] = a,
    e[1] = l) : l = e[1],
    Wt(l),
    $t(a);
    let h;
    e[2] !== a || e[3] !== i ? (h = {
        resetThreadAction: i,
        clientThreadId: a
    },
    e[2] = a,
    e[3] = i,
    e[4] = h) : h = e[4],
    zt(h);
    const M = Pe(a)
      , c = Bt(M);
    Ut();
    let o;
    return e[5] !== c ? (o = t.jsx(t.Fragment, {
        children: c
    }),
    e[5] = c,
    e[6] = o) : o = e[6],
    o
}
function gs({clientThreadId: s}) {
    const e = Le()
      , a = et()
      , i = tt();
    return !e || !a || i ? null : t.jsxs(t.Fragment, {
        children: [st(e, "searchSources") && t.jsx(os, {
            clientThreadId: s
        }), !1]
    })
}
export {ys as C};
//# sourceMappingURL=fdo3memgsa0u55b8.js.map
