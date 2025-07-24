import {h as B, j as t, M as Z, c as Jt, f as es, m as Y, r as f, A as Pe, u as st, a as xe, d as Fs, b as Us} from "./juy90og0wtbp77qa.js";
import {i as qs, a as Ks, T as Gs, u as zs, g as Ws, C as Vs, b as Qs, H as $s, c as Zs} from "./mohn9bb09oz621dz.js";
import {dA as Ys, u$ as Oe, k5 as k, k6 as L, lA as Re, v0 as ts, n as nt, A as De, dw as he, v1 as Xs, jW as Js, v2 as en, o8 as tn, oY as Dt, v3 as sn, dz as nn, v4 as on, v5 as an, ec as rn, i0 as cn, o9 as Nt, bA as ln, bJ as X, bR as Pt, v6 as dn, dC as un, d3 as Ot, hV as mn, hW as fn, hY as gn, hZ as xn, e6 as hn, v7 as ke, fp as pn, O as Cn, dO as vn, lC as yn, dx as me, v8 as bn, v9 as ss, va as Tn, vb as Sn, d as wn, vc as Je, vd as An, uI as En, ve as jn, lS as fe, vf as _n, jJ as In, vg as Mn, jF as kn, vh as Rn, c as Dn, vi as Nn, fc as Pn, vj as On, vk as Ln, vl as Bn, vm as Hn, vn as Fn, dt as Un, du as qn, dv as Kn, s0 as Lt, lV as Bt, vo as Gn, vp as zn, g as Wn, vq as Vn, lx as Qn, vr as $n, jh as Zn, vs as Ht, dy as Ft, vt as Ut, vu as Ie, vv as Me, vw as qt} from "./ckp56qklot786ulr.js";
import {u as Yn} from "./dmfmxszxfbs8gsbx.js";
import {kG as ns, C as Xn, g as Jn, by as et, eR as eo, ax as to, aD as so, aE as no, fr as oo, fs as ao, av as ro, aw as io, B as Kt, aq as co, ak as tt, b2 as os, bX as Gt, f8 as lo, ar as pe, D as as, R as V, dX as rs, no as is, aF as D, h8 as zt, dG as J, a7 as uo, bl as mo, a$ as cs, e as ls, f as ds, dF as Wt, dM as fo, P as go, cl as xo} from "./dc2xxjkicf2pz0mj.js";
import {O as ho, b as te, u as po, c as Co, g as vo, A as yo, a as bo, f as Vt, C as re, D as To} from "./du2o33bqvziie5hn.js";
import {e as So} from "./nmh9rh1es9yfc7rh.js";
import {C as wo} from "./m1q7suu3m36z180t.js";
import {g as Ao, a as Eo} from "./9k8yv4dhh02fqujo.js";
import {C as Ne, j as Qt, S as $t} from "./l7ivca7g8ik3mk13.js";
import {a as jo} from "./koc3vass6n6349vp.js";
import {D as _o} from "./n6h2c0196v3vnzav.js";
import {i as Io} from "./pbd6thieshvvjfa0.js";
import {C as Mo} from "./kd37t55r0pqrdrzh.js";
import {a as ko, g as Ro} from "./cwcmrfhs9uzogy8q.js";
import {N as Do} from "./jy1u8exw8iz2slve.js";
import {S as No} from "./mq5kqcvga15eqze5.js";
import {g as Ye, S as Po} from "./bk8slwxjkdlmxjxm.js";
import {s as Xe, B as Oo} from "./lzfgwrifvgqibt3v.js";
import {L as Lo} from "./g8shiwm7jpd74xmd.js";
import {u as Bo} from "./o6wb3ptvu0bk81yq.js";
import {i as Zt} from "./fj1zlpb3ugj147t8.js";
import {g as Ho} from "./gr34ca5bfgzamfz1.js";
var us = (s => (s.Close = "close",
s.Loaded = "loaded",
s.Streaming = "streaming",
s.Download = "download",
s))(us || {});
const Fo = ({isOpen: s, dismissModal: e, closeTextdocEditor: n, textdocVersion: o, clientThreadId: c}) => {
    const r = B()
      , a = Ys(c)
      , l = Yn(c)
      , g = ns()
      , i = Oe(o?.textdocId)
      , d = async x => {
        k.logButtonClick(L.SAVE_TO_CHAT_ON_EDITOR_CLOSE),
        !(o?.versionInt == null || g) && (l({
            sourceEvent: x,
            promptMessage: eo("", {
                canvas: {
                    user_created_textdocs: o != null && o.status === ts.ATTACHED_PENDING && i != null ? [{
                        user_created_temp_textdoc_id: o.textdocId,
                        type: o.type,
                        title: o.title,
                        content: o.content,
                        create_source: i.create_source
                    }] : void 0
                },
                open_in_canvas_view: {
                    type: "canvas_textdoc",
                    id: o.textdocId
                }
            }),
            completionMetadata: a ? {
                conversationMode: a
            } : void 0
        }),
        i && Re.markAsSent(i.tempTextdocId),
        e(),
        n())
    }
    ;
    return t.jsx(Xn, {
        testId: "modal-confirm-close-editor",
        isOpen: s,
        size: "custom",
        className: "max-w-xl",
        onClose: e,
        type: "warning",
        hideSeparator: !0,
        title: t.jsx("span", {
            className: "text-xl",
            children: t.jsx(Z, {
                id: "jgd5rD",
                defaultMessage: "Are you sure you want to close?"
            })
        }),
        primaryButton: t.jsx(et.Button, {
            title: r.formatMessage({
                id: "XE+GiU",
                defaultMessage: "Save to chat"
            }),
            color: "primary",
            onClick: d
        }),
        secondaryButton: t.jsx(et.Button, {
            title: r.formatMessage({
                id: "MbWco5",
                defaultMessage: "Don’t save and close"
            }),
            color: "secondary",
            onClick: () => {
                k.logButtonClick(L.CLOSE_WITHOUT_SAVING),
                i && Re.removeTempTextdoc(i.tempTextdocId),
                e(),
                n()
            }
        }),
        showCloseButton: !0,
        closeButton: t.jsx(Jn, {
            onClick: e
        }),
        children: t.jsx("div", {
            className: "text-md text-token-text-secondary -mt-6 pb-2",
            children: t.jsx(Z, {
                id: "q9rJ+Y",
                defaultMessage: "Changes will not be saved unless you save this canvas to your chat."
            })
        })
    })
}
  , Le = "https://persistent.oaistatic.com/canvas/nux-videos/"
  , Uo = `${Le}canvas_writing.mp4`
  , qo = `${Le}canvas_coding.mp4`
  , Ko = `${Le}canvas_writing_hero.jpg`
  , Go = `${Le}canvas_coding_hero.jpg`
  , zo = "https://help.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it"
  , Wo = s => {
    "use forget";
    const e = Jt.c(27)
      , {onClose: n, title: o, description: c, asset: r, size: a} = s
      , l = B()
      , g = r === 0
      , i = a === 1 ? 252 : 218;
    let d;
    e[0] !== i ? (d = {
        height: i
    },
    e[0] = i,
    e[1] = d) : d = e[1];
    const x = g ? Ko : Go
      , y = g ? Uo : qo;
    let m;
    e[2] !== x || e[3] !== y ? (m = t.jsx("video", {
        muted: !0,
        loop: !0,
        autoPlay: !0,
        playsInline: !0,
        className: "h-full max-w-none",
        poster: x,
        src: y
    }),
    e[2] = x,
    e[3] = y,
    e[4] = m) : m = e[4];
    let T;
    e[5] !== d || e[6] !== m ? (T = t.jsx("div", {
        className: "border-token-border-default bg-token-main-surface-secondary text-token-text-secondary relative flex w-full items-center justify-center overflow-hidden border-b",
        style: d,
        children: m
    }),
    e[5] = d,
    e[6] = m,
    e[7] = T) : T = e[7];
    let h;
    e[8] !== o ? (h = t.jsx(so, {
        className: "text-center text-xl leading-6 font-semibold",
        children: t.jsx(Z, {
            ...o
        })
    }),
    e[8] = o,
    e[9] = h) : h = e[9];
    let b;
    e[10] !== c ? (b = t.jsx(no, {
        className: "text-token-text-secondary text-center text-sm",
        children: t.jsx(Z, {
            ...c
        })
    }),
    e[10] = c,
    e[11] = b) : b = e[11];
    let u;
    e[12] !== h || e[13] !== b ? (u = t.jsxs("div", {
        className: "flex flex-col gap-2",
        children: [h, b]
    }),
    e[12] = h,
    e[13] = b,
    e[14] = u) : u = e[14];
    let v;
    e[15] !== l ? (v = l.formatMessage(ce.button),
    e[15] = l,
    e[16] = v) : v = e[16];
    let p;
    e[17] !== n || e[18] !== v ? (p = t.jsx(et.Button, {
        onClick: n,
        title: v,
        color: "primary"
    }),
    e[17] = n,
    e[18] = v,
    e[19] = p) : p = e[19];
    let S;
    e[20] === Symbol.for("react.memo_cache_sentinel") ? (S = t.jsxs(oo, {
        href: zo,
        className: "flex items-center gap-1 font-medium",
        children: [t.jsx(Z, {
            ...ce.learnMore
        }), t.jsx(ao, {
            className: "icon-sm"
        })]
    }),
    e[20] = S) : S = e[20];
    let E;
    e[21] !== p || e[22] !== u ? (E = t.jsxs("div", {
        className: "flex flex-col items-center gap-4 px-10 py-8",
        children: [u, p, S]
    }),
    e[21] = p,
    e[22] = u,
    e[23] = E) : E = e[23];
    let C;
    return e[24] !== E || e[25] !== T ? (C = t.jsxs("div", {
        className: "flex flex-col items-center focus:outline-hidden",
        children: [T, E]
    }),
    e[24] = E,
    e[25] = T,
    e[26] = C) : C = e[26],
    C
}
  , Vo = s => {
    "use forget";
    const e = Jt.c(11)
      , {textdocType: n} = s
      , {markAsViewed: o} = nt(De.hasDismissedCanvasContextualOnboarding)
      , c = to()?.document.body;
    let r, a, l;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (r = {
        opacity: .75,
        scale: .9
    },
    a = {
        opacity: 1,
        scale: 1
    },
    l = {
        type: "spring",
        bounce: .2,
        duration: .56
    },
    e[0] = r,
    e[1] = a,
    e[2] = l) : (r = e[0],
    a = e[1],
    l = e[2]);
    const g = he(n) ? 1 : 0
      , i = he(n) ? ce.contextualModalTitleCoding : ce.contextualModalTitleWriting
      , d = he(n) ? ce.contextualModalDescriptionCoding : ce.contextualModalDescriptionWriting;
    let x;
    e[3] !== o || e[4] !== g || e[5] !== i || e[6] !== d ? (x = t.jsx(Y.div, {
        initial: r,
        animate: a,
        transition: l,
        className: "popover border-token-border-default bg-token-main-surface-primary fixed end-4 bottom-4 z-50 max-w-sm overflow-hidden rounded-2xl border shadow-xl",
        children: t.jsx(Wo, {
            onClose: o,
            asset: g,
            size: 0,
            title: i,
            description: d
        })
    }),
    e[3] = o,
    e[4] = g,
    e[5] = i,
    e[6] = d,
    e[7] = x) : x = e[7];
    let y;
    return e[8] !== c || e[9] !== x ? (y = t.jsx(ro, {
        open: !0,
        defaultOpen: !0,
        modal: !1,
        children: t.jsx(io, {
            container: c,
            children: x
        })
    }),
    e[8] = c,
    e[9] = x,
    e[10] = y) : y = e[10],
    y
}
  , ce = es({
    contextualModalTitleWriting: {
        id: "Pi+0RT",
        defaultMessage: "Draft and refine on the spot"
    },
    contextualModalDescriptionWriting: {
        id: "Jv0f02",
        defaultMessage: "Make it shorter. Add an emoji. Translate to kindergartener. ChatGPT can do it all, right on the canvas."
    },
    contextualModalTitleCoding: {
        id: "Zi5Ty0",
        defaultMessage: "Refine and debug on the spot"
    },
    contextualModalDescriptionCoding: {
        id: "XnaO2x",
        defaultMessage: "Refactor code. Translate to Python. Check for bugs. ChatGPT can do it all, right on the canvas."
    },
    button: {
        id: "7bNl4/",
        defaultMessage: "Got it"
    },
    learnMore: {
        id: "vs1lx2",
        defaultMessage: "Learn more about canvas"
    }
});
function ms(s) {
    const e = Xs();
    if (!s)
        return {
            isCodePreviewable: !1,
            isCodeExecutable: !1,
            hasCanvasCodeExecution: e
        };
    const n = qs(s?.type, s?.content)
      , o = Ks(s.type);
    return {
        isCodePreviewable: n,
        isCodeExecutable: o,
        hasCanvasCodeExecution: e
    }
}
const Qo = ({isTextdocStreaming: s, isRequestActive: e, value: n, comments: o}) => {
    const [c,r] = f.useState(!1);
    return f.useEffect( () => {
        s && c && (r(!1),
        Ne.reset())
    }
    , [n, o]),
    f.useEffect( () => {
        e || (r(!1),
        Ne.reset())
    }
    , [e]),
    [c, r]
}
;
function $o({onClickRestore: s, onClickResetLatest: e}) {
    const n = B();
    return t.jsx(Y.div, {
        initial: {
            height: 0
        },
        animate: {
            height: "auto"
        },
        exit: {
            height: 0
        },
        transition: {
            bounce: 0,
            duration: .24
        },
        className: "bg-token-main-surface-primary z-30",
        children: t.jsx(Y.div, {
            className: "bg-token-main-surface-primary dark:border-token-border-xlight @container w-full items-center border-t border-gray-100 p-6 shadow-[0_-4px_32px_rgba(0,0,0,0.08)] lg:border-s dark:shadow-[0_-4px_32px_rgba(0,0,0,0.12)]",
            children: t.jsxs("div", {
                className: "mx-auto flex max-w-[48rem] flex-col flex-wrap justify-center gap-5 @2xl:flex-row @2xl:justify-between",
                children: [t.jsxs("div", {
                    className: "flex flex-col px-2 text-center @2xl:text-start",
                    children: [t.jsx("span", {
                        className: "text-md text-token-text-primary font-semibold text-wrap",
                        children: n.formatMessage({
                            id: "gt23pb",
                            defaultMessage: "You are viewing a previous version"
                        })
                    }), t.jsx("span", {
                        className: "text-token-text-secondary text-sm text-wrap",
                        children: n.formatMessage({
                            id: "sAlUJn",
                            defaultMessage: "Restore this version to make edits"
                        })
                    })]
                }), t.jsxs("div", {
                    className: "flex flex-wrap items-center justify-center gap-4",
                    children: [t.jsx(Kt, {
                        as: "button",
                        color: "primary",
                        onClick: s,
                        children: n.formatMessage({
                            id: "+cddAb",
                            defaultMessage: "Restore this version"
                        })
                    }), t.jsx(Kt, {
                        as: "button",
                        color: "secondary",
                        onClick: e,
                        children: n.formatMessage({
                            id: "qCD3eu",
                            defaultMessage: "Back to latest version"
                        })
                    })]
                })]
            })
        })
    })
}
const Zo = {
    type: "spring",
    bounce: .2,
    duration: .56
}
  , Yo = ({clientThreadId: s, turn: e}) => {
    const n = Js();
    return t.jsxs(Y.div, {
        className: "absolute start-0 end-0 top-0 z-10 -translate-y-full",
        children: [t.jsx(Y.div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "bg-vert-light-gradient dark:from-token-main-surface-primary absolute inset-0 -top-5 dark:bg-linear-to-t dark:to-transparent"
        }), t.jsx(Y.div, {
            className: "flex items-center py-2",
            initial: {
                opacity: .75,
                translateX: -50,
                translateY: "100%"
            },
            animate: {
                opacity: 1,
                translateX: 0,
                translateY: "0"
            },
            exit: {
                opacity: 0,
                filter: "blur(8px)",
                transition: {
                    delay: .4,
                    duration: .72
                }
            },
            transition: Zo,
            children: t.jsx(Mo, {
                clientThreadId: s,
                onRequestCompletion: co,
                groupedMessagesToRender: e.messageGroups,
                allGroupedMessages: e.messageGroups,
                allMessages: e.messages,
                isUserTurn: !0,
                isFinalUserTurn: !1,
                isFinalAssistantTurn: !1,
                turnIndex: 0,
                isCompletionRequestInProgress: !1,
                isFeedbackEnabled: !1,
                isFinalTurn: !1,
                hasActiveRequest: n
            })
        })]
    }, "user-message")
}
  , Xo = ({clientThreadId: s}) => {
    const {lastUserTurn: e, lastAssistantTurn: n} = tt(s, c => {
        const r = os.getConversationTurns(c);
        let a = null
          , l = null;
        for (let g = r.length - 1; g > 0; g--) {
            const i = r[g];
            if (!a && i.role === Gt.User ? a = i : !l && i.role === Gt.Assistant && (l = i),
            a && l)
                break
        }
        return {
            lastUserTurn: a,
            lastAssistantTurn: l
        }
    }
    )
      , o = e && !n?.messages.some(c => c.recipient?.startsWith(en));
    return t.jsx(Pe, {
        initial: !1,
        children: o && t.jsx(Yo, {
            turn: e,
            clientThreadId: s
        })
    })
}
  , Jo = ({isRequestActive: s=!1, clientThreadId: e, readonlyReason: n, onCancel: o, onSubmit: c, onSubmitAccelerator: r, acceleratorActions: a=[]}) => {
    const [l,g] = f.useState(!1)
      , [i,d] = f.useState("")
      , [x,y] = f.useState(!0)
      , m = B()
      , [T,h] = f.useState(!1)
      , b = lo()
      , u = p => {
        c?.(p, i),
        d("")
    }
      , v = p => {
        if (p.nativeEvent.isComposing)
            return;
        const {metaKey: S, shiftKey: E, key: C} = p;
        C === "Enter" && i.trim() && !(E || S) && (u(p),
        p.preventDefault())
    }
    ;
    return t.jsxs(t.Fragment, {
        children: [l && !b && t.jsx(ho, {
            zIndexKey: "acceleratorsOverlay",
            className: "bg-white/95 dark:bg-black/85"
        }), t.jsx("div", {
            className: "relative mb-3 flex items-end justify-center",
            children: t.jsxs("div", {
                className: "relative mx-6 max-w-2xl flex-1",
                children: [t.jsx(Xo, {
                    clientThreadId: e
                }), t.jsx("div", {
                    className: "flex flex-auto items-start",
                    children: t.jsx("div", {
                        className: pe("dark:bg-token-main-surface-secondary flex min-h-12 flex-auto items-center bg-[#f4f4f4] py-1 ps-6 pe-2", {
                            "rounded-full": x,
                            "rounded-2xl": !x,
                            "bg-transparent": T
                        }),
                        children: t.jsxs("div", {
                            className: "relative flex flex-auto items-center self-stretch",
                            children: [t.jsx(Io, {
                                placeholder: m.formatMessage({
                                    id: "zrUbTJ",
                                    defaultMessage: "Ask ChatGPT to edit"
                                }),
                                disabled: s,
                                value: i,
                                className: pe("text-token-text-primary placeholder:text-token-text-secondary w-full resize-none border-0 bg-transparent p-0 outline-0 focus:ring-0 focus-visible:ring-0", {
                                    "opacity-0": T
                                }),
                                maxRows: 4,
                                onChange: ({target: {value: p}}) => d(p),
                                onKeyDown: v,
                                onHeightChange: (p, {rowHeight: S}) => y(Math.floor(p / S) <= 1)
                            }), i ? t.jsx(Y.button, {
                                className: pe("dark bg-token-main-surface-primary h-8 w-8 rounded-full text-center disabled:bg-[#D7D7D7]", {
                                    "self-end": !x
                                }),
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    type: "tween",
                                    duration: .1
                                },
                                onMouseDown: u,
                                children: t.jsx(tn, {
                                    className: "text-token-text-primary h-8 w-8"
                                })
                            }) : (a?.length ?? 0) > 0 && t.jsx(_o, {
                                disableHint: !0,
                                isVisuallyHidden: n?.isReadonly && !n.isStreaming,
                                disableOverlay: !0,
                                isEmbeddedInPromptArea: !0,
                                isRequestActive: s,
                                actions: a,
                                onCancel: o,
                                onExpandedChange: p => {
                                    b || h(p),
                                    g(p)
                                }
                                ,
                                onSubmit: r,
                                right: 0,
                                bottom: 4
                            })]
                        })
                    })
                })]
            })
        })]
    })
}
;
function ea(s, e) {
    const n = new Set(s.map(l => l.id))
      , o = new Set(e.map(l => l.id))
      , c = s.filter(l => !o.has(l.id)).map(l => ({
        ...l,
        diffStatus: Dt.REMOVED
    }))
      , r = e.filter(l => !n.has(l.id)).map(l => ({
        ...l,
        diffStatus: Dt.ADDED
    }))
      , a = s.filter(l => o.has(l.id));
    return c.concat(r, a)
}
const ta = s => {
    const {textdocId: e} = s
      , n = sn(o => o?.resolveTempTextdocId[e] ?? e);
    return f.useMemo( () => ({
        ...s,
        textdocId: n
    }), [n, s])
}
;
async function sa({textdocId: s, newTitle: e}) {
    e != null && await V.safePost("/textdoc/{textdoc_id}/rename", {
        parameters: {
            path: {
                textdoc_id: s
            }
        },
        requestBody: {
            title: e
        }
    }).catch(n => {
        as.addError("renameCanvasTitle Error:", n)
    }
    )
}
const na = ({serverThreadId: s, textdocVersion: e, initialTitle: n="Untitled Document", isEditingTitle: o, setIsEditingTitle: c}) => {
    const r = st()
      , {mutateAsync: a} = xe({
        mutationKey: [s, "textdocs"],
        mutationFn: sa,
        onMutate: async ({textdocId: u, newTitle: v}) => {
            await r.cancelQueries({
                queryKey: [s, "textdocs"]
            });
            const p = r.getQueryData([s, "textdocs"]);
            return r.setQueryData([s, "textdocs"], S => {
                if (!S)
                    return S;
                const E = new Map(S.persistedTextdocVersionById)
                  , C = E.get(u);
                if (C) {
                    const M = {
                        ...C,
                        title: v ?? ""
                    };
                    E.set(u, M)
                }
                const _ = S.persistedTextdocVersions.map(M => M.textdocId === u ? {
                    ...M,
                    title: v ?? ""
                } : M)
                  , I = new Map(S.persistedTextdocById)
                  , R = I.get(u);
                if (R) {
                    const M = {
                        ...R,
                        title: v ?? ""
                    };
                    I.set(u, M)
                }
                return {
                    ...S,
                    persistedTextdocVersionById: E,
                    persistedTextdocVersions: _,
                    persistedTextdocById: I
                }
            }
            ),
            {
                previousTextDocData: p
            }
        }
        ,
        retry: 2,
        onError: (u, v, p) => {
            p?.previousTextDocData && r.setQueryData([s, "textdocs"], p.previousTextDocData),
            as.addError("Error updating title:", u)
        }
        ,
        onSettled: () => {
            r.invalidateQueries({
                queryKey: [s, "textdocs"]
            })
        }
    })
      , l = async u => {
        e && await a({
            textdocId: e.textdocId ?? "",
            newTitle: u
        })
    }
      , [g,i] = f.useState(n)
      , d = f.useRef(null)
      , x = f.useRef(g)
      , y = f.useRef(!1);
    f.useEffect( () => {
        o && d.current && (d.current.focus(),
        d.current.select())
    }
    , [o]);
    const m = u => {
        i(u.target.value)
    }
      , T = () => {
        x.current = g
    }
      , h = async () => {
        y.current || await l(g),
        y.current = !1,
        c(!1)
    }
      , b = u => {
        (u.key === "Enter" || u.key === "Escape") && u.preventDefault(),
        u.key === "Enter" ? u.currentTarget.blur() : u.key === "Escape" && (i(x.current),
        y.current = !0,
        u.currentTarget.blur())
    }
    ;
    return t.jsx("input", {
        className: "w-[300px] rounded-lg border-none px-3 py-2 outline-hidden",
        ref: d,
        value: g,
        onChange: m,
        onFocus: T,
        onBlur: h,
        onKeyDown: b,
        style: {
            fontSize: "1.125rem",
            fontWeight: "bold",
            boxSizing: "border-box",
            backgroundColor: "var(--global-states-light-element-hover, rgba(0, 0, 0, 0.05))"
        }
    })
}
;
function oa(s) {
    const {voiceName: e} = nn()
      , n = s ? () => aa(s.textdocId, e, Ro()) : null
      , o = `${s?.textdocId}.${s?.versionInt}.${e}`;
    return ko(n, o)
}
function aa(s, e, n) {
    return V.safeGet("/textdoc/{textdoc_id}/synthesize", {
        parameters: {
            path: {
                textdoc_id: s
            },
            query: {
                voice: e,
                format: n
            }
        },
        skipJsonTransform: !0
    })
}
const ra = ({textdocVersion: s, isPersisting: e=!1, isTextdocAttachedPending: n, isTextdocStreaming: o, hasDebug: c, shouldShowPlayButton: r=!1, hideRenameButton: a=!1, toggleDebugView: l, isDebugVisible: g, toggleConsoleVisibility: i, isConsoleOpen: d, clientThreadId: x}) => {
    const y = B();
    on(),
    oa(s);
    const [m,T] = f.useState(!1)
      , h = s?.title ?? ""
      , b = rs(x) ?? ""
      , u = Oe(s?.textdocId)
      , v = !h || u?.status === an.INFERRING
      , p = () => {
        T(!0)
    }
      , [S,E] = f.useState(!1)
      , {container: C, triggerRef: _} = is({
        isOpen: S,
        onClose: () => E(!1)
    })
      , I = [!u && !a && !o ? t.jsx(D.Item, {
        icon: rn,
        onClick: p,
        children: y.formatMessage({
            id: "z/PT9T",
            defaultMessage: "Rename"
        })
    }, "rename") : null, null, r ? t.jsx(D.Item, {
        icon: cn,
        onClick: i,
        children: d ? y.formatMessage({
            id: "owGHqE",
            defaultMessage: "Close console"
        }) : y.formatMessage({
            id: "GPb4WX",
            defaultMessage: "Open console"
        })
    }, "console") : null, null].filter(Boolean);
    if (I.length === 0)
        return t.jsxs(t.Fragment, {
            children: [t.jsx("div", {
                className: "flex h-6 grow items-center overflow-hidden",
                children: t.jsx(te.Title, {
                    className: "@[0px]:hidden @[150px]:block",
                    children: v ? t.jsx("div", {
                        className: "w-52",
                        children: t.jsx(zt, {
                            lines: 1,
                            size: "base",
                            width: 100,
                            widthVariance: 0
                        })
                    }) : h
                })
            }), e && t.jsx(Nt, {
                size: 12,
                className: "text-token-text-tertiary ps-1"
            })]
        });
    const R = s && t.jsx(D.Portal, {
        container: C,
        children: t.jsx(D.Content, {
            onCloseAutoFocus: M => M.preventDefault(),
            children: I
        })
    });
    return t.jsx(t.Fragment, {
        children: m ? t.jsx(na, {
            serverThreadId: b,
            textdocVersion: s,
            initialTitle: h,
            isEditingTitle: m,
            setIsEditingTitle: T
        }) : t.jsxs(t.Fragment, {
            children: [!1, t.jsxs(D.Root, {
                open: S,
                onOpenChange: E,
                children: [t.jsxs(D.Trigger, {
                    ref: _,
                    className: "hover:bg-token-surface-hover grid grid-cols-[1fr_auto] bg-transparent! pe-2",
                    children: [t.jsx(te.Title, {
                        className: "max-w-[270px] truncate overflow-hidden",
                        children: v ? t.jsx("div", {
                            className: "w-52",
                            children: t.jsx(zt, {
                                lines: 1,
                                size: "base",
                                width: 100,
                                widthVariance: 0
                            })
                        }) : h
                    }), t.jsx("div", {
                        className: "flex items-center ps-1",
                        children: e ? t.jsx(Nt, {
                            size: 12,
                            className: "text-token-text-tertiary"
                        }) : t.jsx(ln, {
                            className: "icon-sm text-token-text-tertiary"
                        })
                    })]
                }), R]
            })]
        })
    })
}
;
function ia({textdocVersion: s, clientThreadId: e, color: n}) {
    const {handleCopy: o, Icon: c, copyLabel: r} = po({
        textdocVersion: s,
        clientThreadId: e
    });
    return t.jsx(J, {
        label: r,
        children: t.jsx(X, {
            icon: c,
            onClick: o,
            color: n
        })
    })
}
function ca({textdocVersion: s, disabled: e, color: n}) {
    const o = B()
      , {handleFileDownload: c, handleBlobDownload: r, isLoading: a, downloadCopyLabel: l, isDocument: g} = Co(s);
    return g ? t.jsxs(D.Root, {
        open: !a && !e ? void 0 : !1,
        children: [t.jsx(D.BasicTrigger, {
            className: "hover:bg-transparent focus-visible:bg-transparent",
            children: t.jsx(J, {
                label: l,
                children: t.jsx(X, {
                    icon: Pt,
                    disabled: a || e,
                    color: n
                })
            })
        }), t.jsx(D.Portal, {
            children: t.jsxs(D.Content, {
                align: "end",
                children: [t.jsx(D.Item, {
                    onClick: i => {
                        i.preventDefault(),
                        c("pdf")
                    }
                    ,
                    children: o.formatMessage({
                        id: "canvas.download-pdf-button.menu",
                        defaultMessage: "PDF Document (.pdf)"
                    })
                }), t.jsx(D.Item, {
                    onClick: i => {
                        i.preventDefault(),
                        c("docx")
                    }
                    ,
                    children: o.formatMessage({
                        id: "canvas.download-docx-button.menu",
                        defaultMessage: "Microsoft Word Document (.docx)"
                    })
                }), t.jsx(D.Item, {
                    onClick: i => {
                        i.preventDefault(),
                        c("md")
                    }
                    ,
                    children: o.formatMessage({
                        id: "canvas.download-md-button.menu",
                        defaultMessage: "Markdown Document (.md)"
                    })
                })]
            })
        })]
    }) : t.jsx(J, {
        label: l,
        children: t.jsx(X, {
            icon: Pt,
            disabled: a || e,
            onClick: r,
            color: n
        })
    })
}
function la({disabled: s=!1, isShowingChanges: e, onMouseEnter: n, onClick: o, onEsc: c}) {
    const r = B()
      , a = f.useRef(null);
    return f.useEffect( () => {
        if (e) {
            const l = g => {
                g.key === "Escape" && (c?.(),
                a.current && a.current === document.activeElement && a.current.blur())
            }
            ;
            return window.document.addEventListener("keydown", l),
            () => {
                window.document.removeEventListener("keydown", l)
            }
        }
    }
    , [e, c]),
    t.jsx(J, {
        label: !s && r.formatMessage(e ? Yt.hideChanges : Yt.showChanges),
        children: t.jsx(X, {
            icon: No,
            ref: a,
            disabled: s,
            onClick: o,
            onMouseEnter: n,
            className: pe("transition-colors enabled:hover:bg-black/5 dark:enabled:hover:bg-white/10", e && Do)
        })
    })
}
const Yt = es({
    showChanges: {
        id: "3jMGNS",
        defaultMessage: "Show changes"
    },
    hideChanges: {
        id: "HWiQSk",
        defaultMessage: "Hide changes"
    }
});
function da({disabled: s=!1, hasPreviousVersion: e, hasNextVersion: n, hideShowChanges: o, isShowingChanges: c, onHoverPrevious: r, onHoverShowChanges: a, onToggleShowChanges: l, onClickPrevious: g, onClickNext: i}) {
    const d = B();
    return t.jsxs("div", {
        className: "flex items-center",
        children: [t.jsx(Pe, {
            children: !o && t.jsx(Y.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    type: "spring",
                    bounce: .24,
                    duration: .4
                },
                children: t.jsx(la, {
                    disabled: s || !e,
                    isShowingChanges: c,
                    onMouseEnter: a,
                    onClick: l,
                    onEsc: l
                })
            })
        }), t.jsx(J, {
            label: e && d.formatMessage({
                id: "PoD5+8",
                defaultMessage: "Previous version"
            }),
            children: t.jsx(X, {
                disabled: s || !e,
                icon: dn,
                onMouseOver: r,
                onClick: g
            })
        }), t.jsx(J, {
            label: n && d.formatMessage({
                id: "PJ8YVJ",
                defaultMessage: "Next version"
            }),
            children: t.jsx(X, {
                disabled: s || !n,
                icon: un,
                onClick: i
            })
        })]
    })
}
function ua(s) {
    for (const e of ma) {
        const n = s.match(e);
        if (n)
            return n[0]
    }
    return null
}
const ma = [/AKIA[0-9A-Z]{16}/, /AIza[0-9A-Za-z_-]{35}/, /^(?:ghp_[A-Za-z0-9]{36}|github_pat_[A-Za-z0-9]{22}_[A-Za-z0-9]{59}|gho_[A-Za-z0-9]{36}|ghu_[A-Za-z0-9]{36}|ghs_[A-Za-z0-9]{36}|ghr_[A-Za-z0-9]{36})$/, /xox[baprs]-[0-9A-Za-z-]+/, /sk-[A-Za-z0-9]{48}/, /SK[0-9a-fA-F]{32}/, /(sk_live_[0-9a-zA-Z]{24})|(sk_test_[0-9a-zA-Z]{24})/, /-----BEGIN PRIVATE KEY-----/]
  , fa = `${Po}...`;
function ie(s) {
    return ["canvas", "textdoc", "share", s]
}
function ga({isLoading: s, isPublishedVersionLatest: e, sharedTextdoc: n, textdocVersion: o, title: c}) {
    const {textdocId: r} = o
      , [a,l] = f.useState(!1)
      , g = ua(o.content)
      , i = (C, _) => {
        C && pn(C, void 0, _).then( () => {
            l(!0),
            setTimeout( () => {
                l(!1)
            }
            , 1500)
        }
        ).catch( () => {}
        )
    }
      , d = st()
      , {mutate: x, isPending: y} = xe({
        scope: {
            id: r
        },
        mutationFn: C => V.safePost("/textdoc/{textdoc_id}/share", {
            parameters: {
                path: {
                    textdoc_id: C
                }
            }
        }).then(_ => ke(_.shared_textdoc)),
        onSuccess: C => {
            d.setQueryData(ie(r), C),
            i(Ye(C.sharedTextdocId))
        }
    })
      , {mutate: m, isSuccess: T} = xe({
        scope: {
            id: r
        },
        mutationFn: C => V.safePost("/textdoc/shared/{shared_textdoc_id}/update_to_latest", {
            parameters: {
                path: {
                    shared_textdoc_id: C
                }
            }
        }).then(_ => ke(_.shared_textdoc)),
        onSuccess: C => {
            d.setQueryData(ie(r), C)
        }
    })
      , {mutate: h} = xe({
        scope: {
            id: r
        },
        mutationFn: ({sharedTextdocId: C, access: _}) => V.safePost("/textdoc/shared/{shared_textdoc_id}/update_access", {
            parameters: {
                path: {
                    shared_textdoc_id: C
                }
            },
            requestBody: {
                shared_textdoc_access: _
            }
        }).then(I => ke(I.shared_textdoc)),
        onMutate: ({access: C}) => {
            const _ = ie(r)
              , I = d.getQueryData(_);
            return d.setQueryData(_, I && {
                ...I,
                access: C
            }),
            {
                previousAccess: I?.access
            }
        }
        ,
        onSuccess: C => {
            d.setQueryData(ie(r), C)
        }
        ,
        onError: (C, _, I) => {
            const R = ie(r)
              , M = d.getQueryData(R);
            d.setQueryData(R, M && {
                ...M,
                access: I?.previousAccess
            })
        }
    })
      , b = f.useRef(null)
      , u = C => {
        b.current?.focus(),
        n ? (k.logButtonClick(L.COPY_SHARE_LINK, ge(o)),
        i(Ye(n.sharedTextdocId), C)) : (k.logButtonClick(L.CREATE_SHARE_LINK, ge(o)),
        x(r))
    }
      , v = C => {
        n && (k.logButtonClick(C === Cn.PUBLIC ? L.UPDATE_SHARE_LINK_PUBLIC : L.UPDATE_SHARE_LINK_PRIVATE, ge(o)),
        h({
            sharedTextdocId: n.sharedTextdocId,
            access: C
        }))
    }
      , p = n ? Ye(n.sharedTextdocId) : void 0
      , S = () => {
        n && (k.logButtonClick(L.UPDATE_SHARE_LINK_TO_LATEST, ge(o)),
        m(n.sharedTextdocId))
    }
      , E = g || n?.isAnonifyApiKeyDetected;
    return t.jsx(Oo, {
        inputRef: b,
        isLoading: s,
        isPublishedVersionLatest: e,
        sharedObject: n && {
            id: n.sharedTextdocId,
            title: c,
            access: n.access,
            versionInt: n.versionInt,
            isModerationBlocked: n.isModerationBlocked,
            isAnonifyApiKeyDetected: n.isAnonifyApiKeyDetected
        },
        title: c,
        shareTextPlaceholder: fa,
        shareUrl: p,
        isCopySuccessful: a,
        didPublishUpdates: T,
        isCreateLinkRequestInProgress: y,
        handleUpdateLatestSharedVersion: S,
        handlePrivacyChange: v,
        handlePrimaryButtonClick: u,
        maybeRenderWarndingContent: () => t.jsx(t.Fragment, {
            children: E && t.jsx(ha, {})
        })
    })
}
function ge(s) {
    return {
        textdocType: s.type,
        textdocId: s.textdocId
    }
}
function xa({textdocVersion: s, isDisabled: e, title: n}) {
    const o = uo()
      , c = B()
      , r = s?.textdocId
      , a = nt(De.hasSeenCanvasShareButtonNux)
      , {data: l, isLoading: g} = Fs({
        enabled: !!r && !e,
        queryKey: ie(r),
        queryFn: () => !r || r.startsWith(yn) ? Promise.resolve(null) : V.safeGet("/textdoc/{textdoc_id}/share", {
            parameters: {
                path: {
                    textdoc_id: r
                }
            }
        }).then(v => v.shared_textdoc && ke(v.shared_textdoc))
    })
      , [i,d] = f.useState(!1)
      , {triggerRef: x, container: y} = is({
        isOpen: i,
        onClose: () => d(!1)
    })
      , m = o?.isWorkspaceAccount() && !o?.features.includes(mo.WorkspaceShareLinks);
    if (e || m || !s)
        return t.jsx(J, {
            label: m ? c.formatMessage(Xe.workspaceSharingDisabled) : c.formatMessage(Xe.share),
            children: t.jsx(X, {
                disabled: !0,
                icon: Ot
            })
        });
    const T = () => {
        k.logButtonClick(L.OPEN_SHARE_MENU, ge(s))
    }
      , h = l?.versionInt === s.versionInt && l?.title === s.title
      , b = ({className: v}) => t.jsxs("div", {
        className: "relative h-fit w-fit",
        children: [t.jsx(Ot, {
            className: v
        }), !h && l && t.jsx("div", {
            className: "absolute end-0 top-[1px] flex items-center gap-1.5",
            children: t.jsx("div", {
                className: "h-1.5 w-1.5 rounded-full bg-blue-400"
            })
        })]
    })
      , u = t.jsxs(mn, {
        open: i,
        onOpenChange: d,
        children: [t.jsx(J, {
            label: c.formatMessage(Xe.share),
            children: t.jsx(fn, {
                ref: x,
                asChild: !0,
                children: t.jsx(X, {
                    icon: b,
                    onClick: T
                })
            })
        }), t.jsx(Pe, {
            children: i && t.jsx(gn, {
                forceMount: !0,
                container: y,
                children: t.jsx(xn, {
                    align: "end",
                    className: "z-50",
                    sideOffset: 8,
                    collisionPadding: 8,
                    children: t.jsx(ga, {
                        title: n,
                        sharedTextdoc: l,
                        isLoading: g,
                        isPublishedVersionLatest: h,
                        textdocVersion: s
                    })
                })
            })
        })]
    });
    return !a.isLoading && a.eligible ? t.jsx(hn, {
        announcementKey: De.hasSeenCanvasShareButtonNux,
        show: !0,
        side: "bottom",
        align: "end",
        theme: "bright",
        dismissOnOutsideClick: !0,
        badge: "none",
        title: t.jsx(Z, {
            id: "oHutKI",
            defaultMessage: "Share {title}",
            values: {
                title: n
            }
        }),
        description: t.jsx(Z, {
            id: "oQuH7b",
            defaultMessage: "Easily share your content with others — your chat stays private."
        }),
        onDismiss: a.markAsViewed,
        sideOffset: 0,
        children: u
    }) : u
}
function ha() {
    return t.jsx(vn, {
        type: "danger",
        className: "w-auto md:p-3",
        children: t.jsx(Z, {
            id: "8NG6sN",
            defaultMessage: "There may be an API key in your canvas. If you share the canvas, anyone with the link can see its contents."
        })
    })
}
const pa = ({clientThreadId: s, isHistoricalVersion: e, textdocVersion: n, readonlyReason: o, hasDebug: c, isEmbedded: r, isPersisting: a, isShowingChanges: l, hideRunCode: g=!1, hideHistoryActions: i=!1, hideRenameButton: d=!1, onHoverPrevious: x, onHoverShowChanges: y, onToggleShowChanges: m, onClickPrevious: T, onClickNext: h, onClickCodePreview: b, onClose: u, toggleDebugView: v, toggleConsoleVisibility: p, isCodeRunning: S, isTextdocAttachedPending: E, isTextdocStreaming: C, isConsoleOpen: _, isDebugVisible: I}) => {
    const R = B()
      , M = cs()
      , le = Oe(n?.textdocId)
      , ee = n?.title ?? ""
      , {isCodePreviewable: se, isCodeExecutable: N, hasCanvasCodeExecution: H} = ms(n)
      , Ce = !g && (se || N)
      , P = n?.versionInt
      , de = P != null && P > 1
      , ve = e
      , Be = !i
      , He = se && S
      , ye = n == null || le != null || e || o.isStreaming
      , F = n == null || o.isStreaming;
    return t.jsxs(te.Header, {
        className: pe("@container", se && S && "bg-transparent!"),
        children: [t.jsx(te.CloseButton, {
            onClick: u
        }), t.jsx("div", {
            className: "@container flex flex-1 basis-0 items-center truncate leading-[0]",
            children: t.jsx(ra, {
                hasDebug: c,
                isConsoleOpen: _,
                isDebugVisible: I,
                toggleConsoleVisibility: p,
                toggleDebugView: v,
                isPersisting: a,
                textdocVersion: n,
                isTextdocAttachedPending: E,
                isTextdocStreaming: C,
                shouldShowPlayButton: Ce,
                hideRenameButton: d,
                clientThreadId: s
            })
        }), t.jsxs("div", {
            className: "flex min-w-0 basis-auto items-center leading-[0] select-none",
            children: [Be && t.jsx(da, {
                hideShowChanges: He,
                disabled: o.isStreaming,
                hasNextVersion: ve,
                hasPreviousVersion: de,
                isShowingChanges: l,
                onHoverPrevious: x,
                onHoverShowChanges: y,
                onToggleShowChanges: m,
                onClickPrevious: T,
                onClickNext: h
            }), t.jsx(ia, {
                clientThreadId: s,
                textdocVersion: n
            }), n && n.type !== me.LOADING && le == null && t.jsx(ca, {
                disabled: F,
                textdocVersion: n
            }), t.jsx(xa, {
                isDisabled: ye,
                textdocVersion: n,
                title: ee
            }), Ce && t.jsx(Gs, {
                clientThreadId: s,
                isCodePreviewable: se,
                isDisabled: !H || o.isTextdocStreaming && !S,
                disabledTooltip: H ? void 0 : R.formatMessage({
                    id: "NTZRWe",
                    defaultMessage: "Code execution for canvas is disabled for your workspace. Contact your admin to enable."
                }),
                onClick: b,
                isCodeRunning: S,
                textdocType: n?.type
            }), !r && !M && t.jsx(Lo, {
                clientThreadId: s
            })]
        })]
    })
}
  , Ca = s => {
    const e = ls()
      , n = ds(e, "80186230")
      , o = cs()
      , {eligible: c, isLoading: r, markAsViewed: a} = nt(s);
    return {
        markAsViewed: a,
        eligible: !o && c && n,
        isLoading: r
    }
}
;
function va() {
    return Ca(De.hasDismissedCanvasContextualOnboarding)
}
function ya(s) {
    const e = /\[([^\]]+)\]\((https?:\/\/[^\s)]+|www\.[^\s)]+)\)/gi
      , n = new Set
      , o = s.matchAll(e);
    for (const c of o) {
        const r = c[2];
        try {
            let a = r;
            a.startsWith("www.") && (a = "http://" + r),
            new URL(a),
            n.add(r)
        } catch {}
    }
    return n
}
const ba = async ({lastVersion: s, textdocId: e, content: n, comments: o}) => {
    const c = bn(o, n);
    return (await V.safePost("/textdoc/{textdoc_id}", {
        parameters: {
            path: {
                textdoc_id: e
            }
        },
        requestBody: {
            version: s,
            content: n,
            comments: c
        }
    })).version
}
  , Ta = () => {
    const s = f.useRef([])
      , e = f.useRef(null)
      , {mutateAsync: n, isPending: o} = xe({
        mutationKey: ["canvas", "textdoc", "persist"],
        mutationFn: ba
    });
    return [f.useCallback(async (r, a, l) => {
        const g = new AbortController
          , d = (async () => {
            const [T] = s.current;
            try {
                await T?.promise
            } catch (h) {
                k.logError("Saving document", h)
            }
            if (!g.signal.aborted)
                try {
                    const h = Math.max(e.current ?? 0, r.versionInt ?? ss);
                    let b = "";
                    try {
                        Zt(a) ? b = a() : b = a
                    } catch (S) {
                        k.logError("Serializing document", S)
                    }
                    let u = [];
                    try {
                        Zt(l) ? u = l() : u = l
                    } catch (S) {
                        k.logError("Adjusting comments", S)
                    }
                    const {textdocId: v} = r;
                    Tn({
                        textdocId: v,
                        basedOnVersionInt: h,
                        content: b,
                        comments: u
                    });
                    const p = await n({
                        textdocId: v,
                        lastVersion: h,
                        content: b,
                        comments: u
                    });
                    Sn({
                        textdocId: v,
                        basedOnVersionInt: h,
                        newVersion: p
                    }),
                    e.current = p
                } catch (h) {
                    k.logError("Error saving document", h)
                } finally {
                    s.current.shift()
                }
        }
        )()
          , x = {
            abort: () => g.abort(),
            promise: d
        }
          , [y,m] = s.current;
        return m && (m.abort(),
        s.current = y ? [y] : []),
        s.current = y ? [y, x] : [x],
        d
    }
    , [n]), s, o]
}
  , Sa = 3e3
  , wa = s => {
    const [e,n,o] = Ta()
      , c = B()
      , r = f.useRef(null)
      , a = f.useCallback(wn(async (i, d, x) => {
        if (!Je(i))
            return e(i, d, x);
        Re.replaceTempTextdocContent(i.textdocId, typeof d == "string" ? d : d())
    }
    , Sa, {
        leading: !1
    }), [e])
      , l = An(s);
    return f.useEffect( () => {
        if (!l)
            return;
        const i = Wt(window, {
            pagehide: () => a.flush(),
            beforeunload: x => {
                a.flush(),
                x.returnValue = c.formatMessage({
                    id: "QZrKwi",
                    defaultMessage: "You have a canvas save in progress."
                })
            }
        })
          , d = Wt(document, {
            visibilitychange: () => a.flush(),
            keydown: () => {
                r.current = "keyboard"
            }
            ,
            mousemove: () => {
                r.current !== "mouse" && a.flush(),
                r.current = "mouse"
            }
        });
        return () => {
            r.current = null,
            d(),
            i()
        }
    }
    , [c, l, a]),
    f.useEffect( () => () => {
        a.flush()
    }
    , [s, a]),
    En(async () => {
        await a.flush(),
        await Promise.allSettled(n.current?.map( ({promise: i}) => i) ?? [])
    }
    ),
    [f.useCallback( (i, d, x) => {
        const {textdocId: y} = i;
        return Je(i) || jn(y),
        a(i, d, x)
    }
    , [a]), a.flush, o || l]
}
;
function Aa(s, e, n) {
    const o = st()
      , c = n != null && e != null
      , {data: r, error: a, fetchNextPage: l, hasNextPage: g, isFetching: i} = Us(Xt(s, e, c))
      , d = f.useCallback(async () => {
        const h = e != null;
        await o.prefetchInfiniteQuery(Xt(s, e, h))
    }
    , [o, s, e]);
    f.useEffect( () => {
        const h = e;
        return () => {
            o.removeQueries({
                queryKey: fs(s, h),
                exact: !0
            })
        }
    }
    , [o, s, e]);
    const [x,y,m,T] = f.useMemo( () => {
        if (r && n) {
            const b = r.pages.flatMap(v => v)
              , u = b.findIndex(v => "beforeVersion"in n ? (v.versionInt ?? ss) < n.beforeVersion : v.versionInt === n.version);
            if (u !== -1)
                return [u === b.length - 1, b[u], u > 0 ? b[u - 1] : null, u < b.length - 1 ? b[u + 1] : null]
        }
        const h = r?.pages.flatMap(b => b) ?? [];
        return [!0, null, null, h.length === 0 ? null : h[0]]
    }
    , [r, n]);
    return f.useEffect( () => {
        !i && c && g && x && l()
    }
    , [i, c, g, x, l]),
    f.useEffect( () => {
        !y && a && fe(s)
    }
    , [y, a, s]),
    {
        historicalTextdocVersion: y,
        nextHistoricalTextdocVersion: m,
        prefetchHistoricalTextdocVersion: d,
        previousHistoricalTextdocVersion: T
    }
}
function fs(s, e=null) {
    return ["textdocHistory", s, e]
}
function Xt(s, e, n=!0) {
    return {
        queryKey: fs(s, e),
        queryFn: ({pageParam: o}) => Ea(s, o),
        initialPageParam: e ?? void 0,
        getNextPageParam: o => {
            const c = fo(o)?.versionInt;
            if (c && c > 1)
                return c
        }
        ,
        enabled: n,
        staleTime: 1 / 0,
        retry: 2
    }
}
async function Ea(s, e) {
    return e === void 0 || e <= 1 ? [] : (await V.safeGet("/textdoc/{textdoc_id}/history", {
        parameters: {
            path: {
                textdoc_id: s
            },
            query: {
                before_version: e
            }
        }
    })).previous_doc_states.map( ({id: o, version: c, textdoc_type: r, title: a, content: l, updated_at: g, comments: i, metadata: d}) => ({
        textdocId: o,
        versionInt: c,
        messageId: null,
        title: a,
        type: Mn(r),
        content: l,
        status: ts.COMPLETE,
        createdAt: In(g),
        comments: _n(i, l),
        metadata: {
            content_references: d?.content_references
        }
    }))
}
const Xa = ({isFullScreen: s=!1, isEmbedded: e=!1, hideHeader: n=!1, hideRunCode: o=!1, isReadonlyFromQueryParam: c=!1, hideRenameButton: r=!1, clientThreadId: a, focusedTextdoc: l, onClose: g, isAnimating: i=!1, width: d, hideBottomComposer: x=!1}) => {
    const y = ls()
      , {textdocId: m, history: T, showChangesAtVersion: h=null, shouldRunCodeOnOpen: b=!1} = ta(l)
      , u = B()
      , [v,p,S] = wa(m)
      , {targetedContent: E} = kn()
      , C = Rn()
      , [_,I] = f.useState(!1)
      , [R,M] = f.useState(!1)
      , le = Dn(m)
      , ee = Nn()
      , se = tt(a, os.getRequestId)
      , N = Pn(se)
      , {data: H, isLoading: Ce} = On(m, h)
      , [P,de] = f.useState(!1)
      , [ve,Be] = f.useState(null)
      , He = Ln(a)
      , ye = f.useRef(null)
      , F = le?.versions ?? []
      , ne = F[0]?.versionInt
      , {historicalTextdocVersion: be, nextHistoricalTextdocVersion: gs, previousHistoricalTextdocVersion: xs, prefetchHistoricalTextdocVersion: ot} = Aa(m, ne, T)
      , at = Bn();
    f.useEffect( () => {
        Ne.reset()
    }
    , [m]);
    const rt = F.length > 0 ? F[F.length - 1] : null
      , Fe = F.length > 1 ? F[F.length - 2] : null
      , it = rs(a)
      , {restoreHistoricalTextdocVersion: hs, optimisticRestoredTextdocVersion: ps} = Hn(it, rt, be)
      , oe = T != null
      , A = oe ? be : rt
      , K = h != null
      , ue = zs(a, A)
      , ct = i ? null : H
      , Te = ( () => {
        if (i || A == null)
            return [];
        const w = Vt(A.comments);
        return !K && be != null ? be.comments : !K || H == null ? w : H.contentBefore !== H.contentAfter ? [] : ea(H.commentsBefore, H.commentsAfter)
    }
    )()
      , O = A?.type ?? me.LOADING
      , Ue = Fn()
      , lt = Je(A)
      , Q = Un(A)
      , qe = qn(A)
      , dt = Kn(A)
      , Cs = dt && !e
      , vs = Lt(ee)
      , ys = Lt(N);
    f.useEffect( () => {
        !lt && F.length === 0 && Ue !== Bt.NATIVE && (!ee && vs.current || !N && ys.current || !ee && !N) && g?.()
    }
    , [F.length, ee, N]);
    const {content: G, currentlyStreamingLineIndex: ut} = H?.contentBefore != null && !he(O) ? {
        content: H.contentBefore,
        currentlyStreamingLineIndex: null
    } : vo(A, Fe)
      , bs = Gn(it, Array.from(ya(G)))
      , [Se,Ke] = Qo({
        value: G,
        isRequestActive: N,
        isTextdocStreaming: Q,
        comments: Te
    })
      , mt = zn(A)
      , ft = Ue === Bt.LAST_TURN || Se || S;
    f.useEffect( () => {
        Wn().sendMessage({
            type: us.Streaming,
            streaming: ft
        })
    }
    , [ft]);
    const Ts = ({getSerializedDocument: w, getAdjustedComments: j}) => {
        A && v(A, w, j)
    }
      , Ss = w => {
        if (!A)
            return;
        const j = w.doc.toString();
        v(A, j, w.field(So, !1) ?? [])
    }
      , gt = (w, j, z, $, ae) => {
        Ke(!0),
        ue({
            sourceEvent: w,
            action: z,
            content: j,
            userMessageType: Ie.ASK_CHATGPT,
            sourceRange: $,
            selectionMetadata: {
                selection_type: ae,
                selection_position_range: $
            }
        })
    }
      , xt = ({id: w}) => {
        mt(w, Ut.DISMISS),
        Ne.reset()
    }
      , ht = async (w, j) => {
        Ke(!0);
        const {id: z, at: $, content: ae} = j;
        if (await mt(z, Ut.ACCEPT) === !1)
            return Ke(!1);
        ue({
            sourceEvent: w,
            content: ae,
            userMessageType: Ie.ACCEPT_COMMENT,
            sourceRange: $,
            action: $t.EDIT,
            selectionMetadata: {
                selection_type: Qt.SELECTION,
                selection_position_range: $
            }
        })
    }
      , Ge = (w, j, z, $) => {
        const {action: ae} = $;
        ue({
            sourceEvent: w,
            action: ae,
            content: z,
            sourceRange: j,
            userMessageType: Ie.ACCELERATOR,
            acceleratorMetadata: {
                action: ae,
                id: $.id,
                prompt: z
            },
            selectionMetadata: j != null ? {
                selection_type: Qt.SELECTION,
                selection_position_range: j
            } : void 0
        })
    }
      , ws = (w, j) => {
        ue({
            sourceEvent: w,
            action: $t.EDIT,
            content: j,
            userMessageType: Ie.FULL_SCREEN_SUBMIT
        })
    }
      , As = Vn()
      , pt = w => As?.[w] ?? w
      , ze = () => Qn(a, void 0, !0)
      , Es = () => {
        T ? Me(m, T) : fe(m)
    }
      , U = Ao({
        streamingSource: Ue,
        isRestoring: ps != null,
        isRequestActive: N,
        isTextdocStreaming: Q,
        isReadonlyFromQueryParam: c,
        isHistoricalVersion: oe,
        isShowingChanges: K
    });
    let we = null;
    const Ct = i || U.isReadonly || Se
      , Ae = ns() || He || c || lt
      , vt = () => i && Te.length > 0 ? re.ALL_HIDDEN : Ae ? re.COMMENTS_READONLY : U.isReadonly ? U.isStreaming ? re.ENABLED : U.isReadonlyFromQueryParam || U.isShowingChanges || U.isHistoricalVersion ? re.COMMENTS_READONLY : re.ALL_HIDDEN : re.ENABLED
      , js = f.useCallback(async w => {
        const {suggestion: j} = await V.safePost("/textdoc/{textdoc_id}/autocomplete", {
            parameters: {
                path: {
                    textdoc_id: m
                }
            },
            requestBody: {
                content: w
            }
        });
        return j
    }
    , [m])
      , yt = s || i || c;
    let We = [];
    switch (O) {
    case me.LOADING:
        we = t.jsx(To, {});
        break;
    case me.DOCUMENT:
        we = t.jsx(bo, {
            value: G,
            comments: Te,
            previousValue: Fe?.content,
            getAutocompleteSuggestion: js,
            previousComments: Vt(Fe?.comments),
            isRewriting: qe,
            isAnimatingFromPreview: i,
            isSendDisabled: Ae,
            getStableCommentId: pt,
            diff: ct,
            isRequestActive: N,
            isDisabled: U.isReadonly || ee,
            isWaitingForCommentResponse: Se,
            hideAccelerators: yt,
            hideToolbar: Ct,
            hideEditOverlay: i,
            commentsMode: vt(),
            readonlyReason: U,
            onBlur: p,
            onSave: p,
            onChange: Ts,
            onCancelRequest: ze,
            targetedContent: E,
            onAddComment: gt,
            onAcceptComment: ht,
            onDismissComment: xt,
            onSubmitAccelerator: Ge,
            onExitShowChanges: Es,
            safeUrls: bs,
            width: d,
            modelCursor: dt || Q && !qe ? A?.modelCursor : void 0,
            shouldResetSelection: A?.versionInt === 1,
            metadata: le?.metadata
        }),
        We = jo;
        break;
    default:
        he(O) && (we = t.jsx(yo, {
            id: "codemirror",
            getStableCommentId: pt,
            language: Eo(O),
            value: G,
            comments: Te,
            hideAccelerators: yt,
            commentsMode: vt(),
            hideToolbar: Ct,
            onSubmitAccelerator: Ge,
            currentlyStreamingLineIndex: ut ?? null,
            readonlyReason: U,
            isRequestActive: N,
            isSendDisabled: Ae,
            isWaitingForCommentResponse: Se,
            onChange: Ss,
            onCancelRequest: ze,
            onAddComment: gt,
            onBlur: p,
            onSave: p,
            codemirrorRef: ye,
            onDismissComment: xt,
            onAcceptComment: ht,
            textdocDiff: ct ?? void 0,
            modelCursor: Q && ut == null ? A?.modelCursor : void 0
        }),
        We = wo)
    }
    const Ve = f.useRef(null)
      , Ee = f.useRef(null)
      , {hasCanvasCodeExecution: Qe, isCodeExecutable: bt, isCodePreviewable: W} = ms(A)
      , Tt = Qe && W
      , St = Qe && bt
      , _s = $n()
      , wt = f.useCallback( () => {
        !P && (Tt || St) ? (de(!0),
        Ve.current?.runCode(O, G).finally( () => de(!1))) : (Ve.current?.stopCode(),
        de(!1))
    }
    , [Tt, St, P, G, O])
      , At = Zn( () => {
        wt()
    }
    );
    f.useEffect( () => {
        b && At()
    }
    , [b, At]);
    const {eligible: Is, markAsViewed: Ms} = va()
      , q = A?.versionInt
      , ks = q != null && q > 1
      , Rs = oe
      , je = xs?.versionInt
      , $e = gs?.versionInt
      , Ds = () => {
        K ? T ? Me(m, T) : fe(m) : (k.logButtonClick(L.SHOW_CHANGES, {
            textdocType: O,
            textdocId: m,
            versionInt: q,
            latestVersionInt: ne
        }),
        q && qt(m, q, T))
    }
      , Ns = () => {
        k.logButtonClick(L.HISTORY_PREVIOUS, {
            textdocType: O,
            textdocId: m,
            versionInt: q,
            latestVersionInt: ne,
            isShowingChanges: K
        }),
        m && q && ks && Me(m, {
            beforeVersion: q
        }, K && je != null ? je : void 0)
    }
      , Ps = () => {
        k.logButtonClick(L.HISTORY_NEXT, {
            textdocType: O,
            textdocId: m,
            versionInt: q,
            latestVersionInt: ne,
            isShowingChanges: K
        }),
        Rs && ($e ? Me(m, {
            version: $e
        }, K ? $e : void 0) : K && ne ? qt(m, ne, null) : fe(m))
    }
      , Os = ds(y, "1804926979")
      , Et = tt(a, Ho(m))
      , Ls = Bo()
      , jt = Oe(A?.textdocId)
      , Bs = !n && t.jsx(pa, {
        hideRunCode: o,
        clientThreadId: a,
        isHistoricalVersion: oe,
        textdocVersion: A,
        readonlyReason: U,
        hasDebug: C,
        isEmbedded: e,
        isPersisting: S,
        isShowingChanges: K,
        isConsoleOpen: R,
        isDebugVisible: _,
        hideHistoryActions: c,
        hideRenameButton: r,
        onHoverPrevious: () => {
            ot(),
            je && at(m, je)
        }
        ,
        onHoverShowChanges: () => {
            ot(),
            q && at(m, q)
        }
        ,
        onToggleShowChanges: Ds,
        onClickPrevious: Ns,
        onClickNext: Ps,
        toggleDebugView: () => I(w => !w),
        toggleConsoleVisibility: () => {
            R || go.logEvent("Canvas Open Console Clicked"),
            M(w => !w)
        }
        ,
        onClose: () => {
            if (k.logButtonClick(L.CLOSE_TEXTDOC, {
                textdocType: A?.type
            }),
            Ms(),
            jt && !s) {
                const {create_source: w, hasUserEdits: j, tempTextdocId: z} = jt;
                if (j && w !== Ft.USER_CREATED_COMPOSER) {
                    Mt(!0);
                    return
                }
                Re.removeTempTextdoc(z),
                w === Ft.USER_CREATED_COMPOSER && Ls.appendText(G)
            }
            g?.()
        }
        ,
        onClickCodePreview: wt,
        isCodeRunning: P,
        isTextdocStreaming: Q,
        isTextdocAttachedPending: Ht(A)
    });
    let _t = null;
    const _e = !o && Qe && (bt || W)
      , Ze = Ws(O, G);
    f.useEffect( () => {
        _e && (Ze && Ee.current?.prepareEnvironment(Ze),
        W && P && !Q && xo(Ee.current)?.updateCode(G))
    }
    , [_e, Ze, Q]);
    const It = A?.title ?? "";
    _e && (_t = t.jsx(Vs, {
        title: It,
        onChangeBackgroundColor: Be,
        visuallyHidden: !W || !P,
        disableNetworkRequests: !_s,
        networkAccessDeniedMessage: u.formatMessage({
            id: "GE4AJf",
            defaultMessage: "Network requests in canvas are disabled for your workspace. Contact your admin to enable this feature."
        }),
        enableTransition: W && O !== me.CODE_HTML,
        isCodeUpdating: Q,
        ref: Ee
    }));
    const [Hs,Mt] = f.useState(!1)
      , kt = t.jsx(Fo, {
        isOpen: Hs,
        dismissModal: () => Mt(!1),
        closeTextdocEditor: () => {
            g?.()
        }
        ,
        textdocVersion: A,
        clientThreadId: a
    })
      , Rt = t.jsxs(t.Fragment, {
        children: [Bs, t.jsx(te.Content, {
            scrollToBottomMode: Cs ? "bottom" : "top",
            shouldScrollToTop: qe,
            isLoading: Ce,
            hideChildren: W && P,
            overlay: _t,
            children: we
        }), _e && t.jsx(Qs, {
            ref: Ve,
            sandboxRef: Ee,
            textdocId: m,
            textdocTitle: It,
            textdocContent: G,
            isTextdocAttachedPending: Ht(A),
            highlightLine: w => ye.current?.highlightLine(w),
            isRequestActive: N,
            createTextdocTurn: ue,
            isOpen: R,
            onOpenChange: M
        }), t.jsx(Pe, {
            children: oe && !c && t.jsx($o, {
                onClickRestore: hs,
                onClickResetLatest: () => fe(m)
            })
        }), s && !oe && !x && !(P && W) && !Ae && t.jsx(Jo, {
            isRequestActive: N,
            clientThreadId: a,
            onSubmitAccelerator: Ge,
            onSubmit: ws,
            onCancel: ze,
            readonlyReason: U,
            acceleratorActions: We
        }), !i && !e && Is && t.jsx(Vo, {
            textdocType: O
        })]
    });
    if (Os && Et && A) {
        const j = new URLSearchParams(window.location.search).get($s)
          , z = j == null ? void 0 : parseInt(j);
        return t.jsxs(t.Fragment, {
            children: [kt, t.jsx(te, {
                previewBackgroundColor: ve,
                isPreviewingCode: W && P,
                children: t.jsxs("div", {
                    className: "flex h-full",
                    children: [t.jsx("div", {
                        className: "relative flex h-full min-h-0 flex-auto grow flex-col",
                        children: Rt
                    }), t.jsx(Zs, {
                        hiveId: Et,
                        clientThreadId: a,
                        textdocVersion: A,
                        ts: z
                    })]
                })
            })]
        })
    }
    return t.jsxs(t.Fragment, {
        children: [kt, t.jsx(te, {
            previewBackgroundColor: ve,
            isPreviewingCode: W && P,
            children: Rt
        })]
    })
}
;
export {us as C, Xa as T};
//# sourceMappingURL=hz1pk536k4y9lgd9.js.map
