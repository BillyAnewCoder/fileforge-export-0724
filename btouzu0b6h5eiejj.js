const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/kzzc0oyswui29fbb.js", "assets/juy90og0wtbp77qa.js", "assets/dc2xxjkicf2pz0mj.js", "assets/root-fv49dn40.css", "assets/oe8iwgmqcwt9fsko.js", "assets/k0cdb99z71ywjcnj.js", "assets/ckp56qklot786ulr.js", "assets/conversation-small-j9iamy23.css"]))) => i.map(i => d[i]);
import {aC as we, dW as ct, lL as bs, ag as He, lM as Ss, kK as ys, hQ as ve, kL as Cs, hS as Ms, a9 as te, ad as Is, P as V, ap as ws, fa as st, an as _s, lN as ot, lO as it, gS as zs, ao as Ts, by as nt, C as dt, eV as mt, e as B, bK as Ps, B as qe, f4 as Gs, ar as W, cx as Ns, cy as ks, i as Es, e2 as Fs, b0 as Ve, f as se, aG as Ft, ak as Ds, ek as As, as as _e, at as ze, dX as Dt, kX as At, aV as Os, bM as Rs, aF as S, a7 as Ot, dG as ut, bN as wt, em as xt, hR as Ls, en as gt, hJ as Te, cf as Us, lP as Bs, j0 as $s, dV as Hs, al as Rt, iO as qs, cD as Lt, a$ as Vs, kG as Ws, g as Ks, bk as Ut, bl as Ie, hp as Xs, dN as ie, bj as Ys, kt as Zs, bd as Bt, g8 as Js, cF as Qs, f6 as en, e$ as tn, aS as sn, el as nn, R as on} from "./dc2xxjkicf2pz0mj.js";
import {r as M, h as ee, j as t, M as j, v as an, c as $, e as be, L as $t, m as Ht, A as rn, u as ft, R as qt, d as Vt, f as Wt} from "./juy90og0wtbp77qa.js";
import {nh as We, lq as ln, dT as cn, ni as dn, nj as _t, jn as mn, eC as y, ec as ht, dU as un, nk as at, nl as xn, nm as gn, nn as fn, no as hn, np as pn, nq as jn, nr as Kt, ns as Be, ak as pt, nt as zt, nu as vn, nv as bn, nw as jt, nx as Xt, ny as vt, Y as Sn, X as yn, mC as Cn, mB as Mn, nz as Yt, nA as In, ms as Zt, nB as Jt, nC as wn, eU as _n, nD as zn, d as Tn, nE as Pn, hn as Gn, nF as Tt, nG as Nn, nH as kn, nI as Qt, nJ as En, nK as rt, bz as es, d0 as bt, l6 as Fn, nL as ts, ap as $e, e9 as ss, nM as ns, nN as Dn, nO as An, e4 as On, my as Rn, nP as Ln, ep as Un, i3 as Bn, dQ as Pe, eq as os, nQ as $n, a6 as is, nR as as, nS as Hn, nT as qn, nU as Vn, nV as Me, nW as Wn, ea as Pt, hq as Kn, aA as rs, ae as Q, U as J, nX as ls, jP as Xn, nY as cs, lb as Yn, nZ as Zn, ee as St, mr as Jn, l3 as Qn, ld as eo, n_ as to, n$ as so, o0 as no, aC as Gt, o1 as ds, ef as ms, o2 as oo, cX as io, aj as us, hX as ao, hN as ro, gn as lo, fx as xs, d3 as gs, l1 as co, o3 as mo, o4 as uo, o5 as xo, lr as go, m as fo, n as ho, A as po, o6 as jo, e_ as vo, a3 as bo, o7 as So, kE as yo, mV as Co} from "./ckp56qklot786ulr.js";
import {b as Mo} from "./o6wb3ptvu0bk81yq.js";
import {a as Io, D as lt, P as wo, b as _o} from "./iacposgqe14fuloa.js";
import {u as zo} from "./hczymk9ojq2shlcf.js";
import {a as To} from "./jsgl3b1bt1ozctr5.js";
import {T as Po, g as Go, u as No} from "./hisrfv493df9w8hp.js";
const fs = we.div`text-sm text-red-500`
  , ko = 5
  , Eo = 20
  , Fo = 40
  , Do = n => {
    switch (n) {
    case te.FREE:
        return ko;
    case te.PLUS:
    case te.EDUCATION:
    case te.QUORUM:
    case te.DEPRECATED_ENTERPRISE:
    case te.DEPRECATED_EDU:
        return Eo;
    case te.PRO:
    case te.TEAM:
    case te.BUSINESS:
        return Fo
    }
}
;
function hs({onClose: n, gizmo: e}) {
    const s = ee()
      , [o,a] = M.useState(e?.gizmo?.instructions || "")
      , i = We()
      , l = He()
      , r = [];
    o?.length > at && r.push(s.formatMessage(y.instructionsTooLong, {
        length: at
    }));
    const c = g => {
        a(g.target.value)
    }
      , m = () => {
        n()
    }
      , u = async () => {
        try {
            await i.mutateAsync({
                update: {
                    instructions: o ?? ""
                },
                id: e.gizmo.id
            }),
            n()
        } catch (g) {
            const b = mt(g);
            l.danger(b ?? "Error", {
                duration: 2,
                toastId: "custom_instructions_modal_save_error"
            })
        }
    }
      , d = t.jsx(nt.Button, {
        title: s.formatMessage(y.save),
        color: "primary",
        onClick: u,
        loading: i.isPending,
        disabled: r.length > 0
    })
      , f = t.jsx(nt.Button, {
        title: s.formatMessage(y.cancel),
        color: "secondary",
        onClick: m,
        disabled: i.isPending
    })
      , {canEdit: h} = ve(e);
    return t.jsx(dt, {
        testId: "modal-project-custom-instructions",
        className: "min-h-[50dvh] max-w-[820px]",
        isOpen: !0,
        showCloseButton: !i.isPending,
        hideSeparator: !0,
        noPadding: !0,
        size: "custom",
        type: "success",
        title: t.jsx("div", {
            className: "h-8",
            children: s.formatMessage(y.editCustomInstructionsTitle)
        }),
        onClose: () => {
            i.isPending || n()
        }
        ,
        children: t.jsxs("div", {
            className: "flex h-full flex-col px-4 pt-0 pb-4",
            children: [t.jsx("div", {
                className: "text-sm font-medium",
                children: s.formatMessage(h ? y.editCustomInstructionsSubtitle : y.readOnlyCustomInstructionsTitle)
            }), t.jsx("div", {
                className: "text-token-text-secondary text-sm",
                children: s.formatMessage(h ? y.editCustomInstructionsDescription : y.readOnlyCustomInstructionsDescription)
            }), t.jsx("textarea", {
                autoFocus: !0,
                placeholder: s.formatMessage(y.projectInstructionsPlaceholder),
                className: "focus:ring-token-text-primary border-heavy mt-4 mb-1 min-h-24 w-full grow resize-none overflow-x-clip overflow-y-auto rounded-lg border bg-transparent px-3 py-2 focus:ring-2",
                name: "instructions",
                onChange: c,
                value: o,
                disabled: i.isPending || !h
            }), r.map(g => t.jsx(fs, {
                className: "mt-1",
                children: g
            }, g)), h && t.jsx(nt.Actions, {
                primaryButton: d,
                secondaryButton: f
            })]
        })
    })
}
function Ao({gizmoId: n, gizmoName: e, canEdit: s, gizmoEditorData: o, openFileDialog: a, pendingFiles: i, setVersion: l, pendingFileUpsertMutationsRef: r, currentModelConfig: c}) {
    const m = o?.files?.reduce( (x, p) => x + (p.file_size_tokens ?? 0), 0) ?? 0
      , u = o?.contextStuffingBudget;
    let d;
    u && (d = m / u,
    m > 0 && d < .01 && (d = .01));
    const f = o?.files ?? []
      , h = Array.from(i.current.values()).filter(x => f.every(p => p.file_id !== x.fileId))
      , g = h.filter(x => c != null && ot(c, x.file.type, x.file.name) === it.CodeInterpreter)
      , b = f.filter(x => c != null && x.type != null && ot(c, x.type, x.name) === it.CodeInterpreter)
      , v = [...g.map(x => x.tempId), ...b.map(x => x.file_id)];
    return t.jsx(fn, {
        gizmoId: n,
        gizmoName: e,
        canEdit: s,
        pendingFiles: h,
        pendingFileUpsertMutationsRef: r,
        files: f,
        modelCapacityUsed: d,
        interpreterOnlyFileIds: v,
        onAddFiles: a,
        removePendingFile: x => {
            i.current.delete(x),
            l(p => p + 1)
        }
    })
}
const Oo = M.forwardRef(function({gizmo: e, accountPlanType: s, showInstructions: o=!0}, a) {
    const i = Do(s)
      , l = ee()
      , [r,c] = M.useState(!1)
      , m = We()
      , u = ln(e)
      , d = cn(u)
      , {data: f} = ct()
      , h = f?.models.get(bs) ?? (f && dn(f.models.values(), P => P.tags.includes(Is.GPT_4o)))
      , g = He()
      , [b,v] = M.useState(0)
      , x = M.useRef(new Map)
      , p = M.useRef([])
      , C = Ss(h, void 0)
      , I = P => {
        P.some( ({errors: A}) => A.length !== 1 || A[0]?.code !== _t.TooManyFiles) ? g.danger(y.unknownError, {
            duration: 2,
            toastId: "snorlax_handle_file_rejected"
        }) : g.danger(l.formatMessage(y.dragTooManyFilesError, {
            maxFileLimit: i
        }), {
            duration: 2,
            toastId: "snorlax_handle_file_rejected",
            loggingTitle: "drag_too_many_files_error"
        })
    }
      , w = async P => {
        V.logEvent("Upload File", {
            client: "web",
            eventSource: "mouse",
            intent: "gizmo"
        });
        const A = u.id;
        P.length > 0 && await Promise.all(P.map(G => {
            const ne = ws(G);
            x.current.set(ne, {
                tempId: ne,
                gizmoId: A,
                file: G,
                status: st.Uploading,
                progress: 1,
                fileId: null,
                cdnUrl: null
            }),
            _s(ne, G, l, g, {
                kind: Ts.Gizmo,
                gizmoId: A
            }, {
                onFileUploaded: async (D, X, Y, K) => {
                    const H = x.current.get(D);
                    H?.fileId && H?.fileId && (p.current.push({
                        id: e.gizmo.id,
                        mutationId: an(),
                        update: q => {
                            if (!H.fileId)
                                return q;
                            const ye = [...q.files ?? [], {
                                file_id: H.fileId,
                                name: H.file.name,
                                size: H.file.size,
                                type: K?.mimeType ?? zs(H.file),
                                last_modified: H.file.lastModified,
                                file_size_tokens: K?.fileTokenSize
                            }];
                            return {
                                ...q,
                                files: ye
                            }
                        }
                        ,
                        onSuccess: () => {
                            x.current.delete(D),
                            v(q => q + 1)
                        }
                    }),
                    gn(e.gizmo.id)({
                        gizmoId: e.gizmo.id,
                        upsertProjectMutation: m,
                        pendingFileUpsertMutationsRef: p
                    }))
                }
                ,
                onFileCreated: (D, X, Y) => {
                    x.current.set(D, {
                        tempId: D,
                        gizmoId: A,
                        file: G,
                        status: st.Uploading,
                        progress: 1,
                        ...x.current.get(D),
                        fileId: X,
                        cdnUrl: Y
                    }),
                    v(K => K + 1)
                }
                ,
                onFileUploadProgress: (D, X) => {
                    const Y = x.current.get(D);
                    Y?.status === st.Uploading && x.current.set(D, {
                        ...Y,
                        progress: X > 95 ? 95 : X
                    }),
                    v(K => K + 1)
                }
                ,
                onError: D => {
                    x.current.delete(D),
                    v(X => X + 1)
                }
            }, {
                usesRetrievalIndex: h != null && ot(h, G.type, G.name) === it.Retrieval
            })
        }
        ))
    }
      , z = ys(C)
      , T = Io(z)
      , N = x.current.size + u.files.length
      , {canEdit: L} = ve(e)
      , {open: O, getInputProps: F, getRootProps: _, isDragAccept: R, isDragReject: k} = zo({
        noClick: !0,
        noKeyboard: !0,
        noDragEventsBubbling: !0,
        onDropAccepted: w,
        onDropRejected: I,
        multiple: !0,
        maxSize: Cs,
        maxFiles: i - N,
        validator: () => N >= i ? {
            code: _t.TooManyFiles,
            message: "Too many files"
        } : null,
        ...z
    });
    return M.useImperativeHandle(a, () => ({
        openFileDialog: O
    })),
    t.jsxs("div", {
        ..._({
            className: "h-full px-4"
        }),
        children: [t.jsx("input", {
            ...F()
        }), o && t.jsxs(mn, {
            children: [t.jsx("button", {
                className: "w-full",
                onClick: () => c(!0),
                children: t.jsx("div", {
                    className: "border-token-border-default w-full rounded-lg border text-start text-sm",
                    children: u?.instructions?.length ? t.jsx("div", {
                        className: "mx-4 my-3 line-clamp-4",
                        children: u.instructions
                    }) : t.jsxs("div", {
                        className: "text-token-text-secondary flex h-full w-full items-center px-4 py-3",
                        children: [t.jsx("div", {
                            className: "flex-1",
                            children: t.jsx(j, {
                                ...y.addCustomInstructions
                            })
                        }), t.jsx(ht, {
                            className: "icon-sm"
                        })]
                    })
                })
            }), d.includes(un.GizmoInstructionsTooLong) ? t.jsx(fs, {
                className: "mt-1",
                children: t.jsx(j, {
                    ...y.instructionsTooLong,
                    values: {
                        length: at
                    }
                })
            }) : null]
        }), r && t.jsx(hs, {
            gizmo: e,
            onClose: () => {
                c(!1)
            }
        }), t.jsx(Ao, {
            gizmoId: e.gizmo.id,
            gizmoName: e.gizmo.display.name,
            canEdit: L,
            gizmoEditorData: u,
            openFileDialog: O,
            pendingFiles: x,
            pendingFileUpsertMutationsRef: p,
            setVersion: v,
            currentModelConfig: h
        }), R && t.jsxs(lt, {
            children: [t.jsx(xn, {}), t.jsx("h3", {
                children: t.jsx(j, {
                    ...y.dragInstructions
                })
            }), t.jsx("h4", {
                className: "w-2/3 text-center",
                children: T.length > 0 ? T.join(", ") : t.jsx(j, {
                    ...y.dragAllAccepted
                })
            })]
        }), k && t.jsxs(lt, {
            children: [t.jsx(Ms, {
                className: "icon-2xl"
            }), t.jsx("h3", {
                children: t.jsx(j, {
                    ...y.dragTooManyFiles
                })
            }), t.jsx("h4", {
                className: "w-2/3 text-center",
                children: t.jsx(j, {
                    ...y.dragTooManyFilesDescription,
                    values: {
                        maxFileLimit: i
                    }
                })
            })]
        })]
    })
});
function Ro({gizmo: n, onClose: e}) {
    const s = M.useRef(null)
      , o = M.useCallback( () => {
        s.current?.openFileDialog()
    }
    , [s])
      , a = B()
      , i = Ps(a)
      , {canEdit: l} = ve(n);
    return t.jsx(t.Fragment, {
        children: t.jsx(dt, {
            testId: "modal-project-files",
            className: "min-h-72 max-w-[820px]",
            isOpen: !0,
            showCloseButton: !0,
            hideSeparator: !0,
            noPadding: !0,
            size: "custom",
            type: "success",
            headerAccessory: l && t.jsx(qe, {
                color: "secondary",
                onClick: o,
                children: t.jsx(j, {
                    ...y.addFilesButtonLabel
                })
            }),
            title: t.jsx(j, {
                ...y.projectFilesModalTitle
            }),
            onClose: () => {
                e()
            }
            ,
            children: t.jsx("div", {
                className: "grid min-h-[50dvh] grow overflow-y-auto pt-0",
                children: i && t.jsx(Oo, {
                    ref: s,
                    gizmo: n,
                    showInstructions: !1,
                    accountPlanType: i.planType
                })
            })
        })
    })
}
function Lo({gizmo: n}) {
    return t.jsx("div", {
        className: "mt-6 grid grid-cols-2 items-start",
        children: n ? t.jsxs(t.Fragment, {
            children: [t.jsx(Uo, {
                gizmo: n,
                className: "rounded-[20px_0px_0px_20px] [border-width:1px_0.5px_1px_1px]"
            }), t.jsx($o, {
                gizmo: n,
                className: "rounded-[0px_20px_20px_0px] [border-width:1px_1px_1px_0.5px]"
            })]
        }) : t.jsxs(t.Fragment, {
            children: [t.jsx(Nt, {}), t.jsx(Nt, {})]
        })
    })
}
function yt({className: n, header: e, context: s, contextClassName: o="", icon: a, modal: i, onClick: l, disabled: r=!1, isModalOpen: c=!1}) {
    return t.jsxs(t.Fragment, {
        children: [t.jsx("button", {
            onClick: l,
            disabled: r,
            className: W("group/snorlax-control-tile border-token-border-light bg-token-bg-primary hover:bg-token-bg-tertiary active:bg-token-bg-tertiary relative h-full rounded-2xl border disabled:pointer-events-none disabled:opacity-50", n),
            children: t.jsxs("div", {
                className: "relative mx-5 my-4 flex items-center justify-between gap-3 overflow-hidden",
                children: [t.jsxs("div", {
                    className: "w-full grow text-start",
                    children: [t.jsx("div", {
                        className: "text-sm font-medium",
                        children: e
                    }), t.jsx("div", {
                        className: W("text-token-text-secondary text-xs", o),
                        children: s
                    })]
                }), a]
            })
        }), c && i]
    })
}
function Nt() {
    return t.jsx(yt, {
        disabled: !0,
        header: t.jsx("div", {
            className: "bg-token-bg-tertiary my-2 h-2 w-48 rounded-full"
        }),
        context: t.jsx("div", {
            className: "bg-token-bg-tertiary my-2 h-2 w-32 rounded-full contain-inline-size"
        })
    })
}
function Uo({className: n, gizmo: e}) {
    const {files: s} = e
      , o = !s.length
      , [a,i] = M.useState(!1)
      , l = a && t.jsx(Ro, {
        gizmo: e,
        onClose: () => {
            i(!1)
        }
    })
      , r = () => i(!0);
    let c, m, u;
    const {canEdit: d} = ve(e);
    if (o)
        c = t.jsx(j, {
            ...d ? y.addFilesButtonLabel : y.viewFilesButtonLabel
        }),
        m = t.jsx(j, {
            ...d ? y.filesControlDescription : y.noFilesReadOnlyDescription
        }),
        u = null;
    else {
        const h = s.slice(0, 3);
        c = t.jsx(j, {
            ...y.projectFilesModalTitle
        }),
        m = t.jsx(j, {
            ...y.filesCount,
            values: {
                count: s.length
            }
        }),
        u = t.jsx("div", {
            className: "relative flex h-10 w-20 shrink-0 items-center justify-center rounded-full max-sm:sr-only",
            children: h.toReversed().map( (g, b) => t.jsx(Bo, {
                file: g,
                index: b,
                gizmoId: e.gizmo.id
            }, g.id))
        })
    }
    return t.jsx(yt, {
        className: n,
        isModalOpen: a,
        modal: l,
        onClick: r,
        header: c,
        context: m,
        icon: u,
        disabled: o && !d
    })
}
function Bo({file: n, index: e, gizmoId: s}) {
    const o = n.name
      , i = Gs(o) && n.file_id != null && t.jsx(hn, {
        fileName: o,
        fileId: n.file_id,
        gizmoId: s,
        className: "[box-shadow:0px_4px_16px_0px_rgba(0,0,0,0.05)]"
    });
    return t.jsx("div", {
        className: "border-token-bg-primary group-hover/snorlax-control-tile:border-token-bg-tertiary absolute end-0 top-0 h-10 w-10 overflow-hidden rounded-xl border-2",
        style: {
            transform: `translateX(${e * -20}px)`
        },
        children: i || t.jsx(pn, {
            className: "h-9 w-9 shrink-0 [box-shadow:0px_4px_16px_0px_rgba(0,0,0,0.05)]",
            filename: n.name,
            contextConnectorInfo: void 0
        })
    })
}
function $o({gizmo: n, className: e}) {
    const {instructions: s} = n.gizmo
      , o = !s.length
      , [a,i] = M.useState(!1)
      , l = a && t.jsx(hs, {
        gizmo: n,
        onClose: () => {
            i(!1)
        }
    })
      , r = () => i(!0);
    let c, m, u, d;
    const {canEdit: f} = ve(n);
    return o ? (c = t.jsx(j, {
        ...f ? y.customInstructionsTitle : y.customInstructionsReadOnlyTitle
    }),
    m = t.jsx(j, {
        ...f ? y.customInstructionsDescription : y.customInstructionsReadOnlyDescription
    })) : (c = t.jsx(j, {
        ...y.editCustomInstructionsTitle
    }),
    d = "overflow-hidden text-ellipsis whitespace-nowrap",
    m = s),
    t.jsx(yt, {
        className: e,
        isModalOpen: a,
        modal: l,
        onClick: r,
        header: c,
        context: m,
        icon: u,
        contextClassName: d,
        disabled: o && !f
    })
}
const Ho = () => t.jsx("div", {
    className: "ms-1 mt-3 h-10",
    children: t.jsx("div", {
        className: "bg-token-tertiary my-[15px] h-[10px] w-48 rounded-full"
    })
})
  , kt = new Map;
function qo(n) {
    const e = kt.get(n);
    if (e)
        return e;
    const s = Tn(Vo, 2e3, {
        trailing: !0
    });
    return kt.set(n, s),
    s
}
async function Vo({gizmoId: n, upsertProjectMutation: e, toaster: s}) {
    const o = Nn
      , a = Tt(o.getState(), "theme", n);
    try {
        a !== void 0 && await e.mutateAsync({
            id: n,
            update: {
                theme: a ?? void 0
            }
        }),
        Tt(o.getState(), "theme", n) === a && kn(n, "theme")
    } catch (i) {
        const l = mt(i);
        s.warning(l ?? "Error", {
            duration: 2
        })
    }
}
function Wo({gizmoId: n, theme: e, upsertProjectMutation: s, toaster: o}) {
    zn(n, "theme", e),
    qo(n)({
        gizmoId: n,
        upsertProjectMutation: s,
        toaster: o
    })
}
function Ko(n) {
    "use forget";
    const e = $.c(15)
      , {gizmo: s} = n
      , o = Jt(s)
      , a = We()
      , [i,l] = M.useState(!1)
      , r = He();
    let c;
    e[0] !== o || e[1] !== s || e[2] !== r || e[3] !== a ? (c = g => {
        g !== o && (V.logEventWithStatsig("Projects: Theme Change", "chatgpt_web_projects_theme_change", {
            theme: g ?? "default"
        }),
        Wo({
            gizmoId: s.gizmo.id,
            theme: g,
            upsertProjectMutation: a,
            toaster: r
        }))
    }
    ,
    e[0] = o,
    e[1] = s,
    e[2] = r,
    e[3] = a,
    e[4] = c) : c = e[4];
    const m = c;
    let u;
    e[5] === Symbol.for("react.memo_cache_sentinel") ? (u = g => l(g),
    e[5] = u) : u = e[5];
    let d;
    e[6] !== o ? (d = t.jsx(Yt, {
        currentTheme: o
    }),
    e[6] = o,
    e[7] = d) : d = e[7];
    let f;
    e[8] !== o || e[9] !== m ? (f = t.jsx(wn, {
        currentTheme: o,
        onSelect: m
    }),
    e[8] = o,
    e[9] = m,
    e[10] = f) : f = e[10];
    let h;
    return e[11] !== i || e[12] !== d || e[13] !== f ? (h = t.jsx(_n, {
        open: i,
        sideOffset: 4,
        alignOffset: 7,
        side: "bottom",
        alignAgainstAnchor: "start",
        size: "none",
        modal: !0,
        onOpenChange: u,
        triggerButton: d,
        children: f
    }),
    e[11] = i,
    e[12] = d,
    e[13] = f,
    e[14] = h) : h = e[14],
    h
}
function Xo(n) {
    "use forget";
    const e = $.c(6)
      , {gizmo: s} = n
      , o = ee()
      , a = B();
    let i;
    e[0] !== a ? (i = se(a, "4283270305"),
    e[0] = a,
    e[1] = i) : i = e[1];
    const l = i;
    let r;
    return e[2] !== s || e[3] !== o || e[4] !== l ? (r = t.jsx("div", {
        className: "mb-8 inline-flex gap-2",
        children: s ? t.jsxs("div", {
            className: "text-page-header mt-0.5 inline-block px-4",
            children: [s ? t.jsx(Ko, {
                gizmo: s
            }) : t.jsx(Yt, {
                disabled: !0,
                currentTheme: null
            }), t.jsx("h1", {
                className: "contents",
                children: t.jsx("a", {
                    href: "#edit-title",
                    role: "button",
                    "aria-label": o.formatMessage({
                        id: "edit-title",
                        defaultMessage: "Edit the title of {projectName}"
                    }, {
                        projectName: s.gizmo.display.name
                    }),
                    className: "text-page-header group hover:text-token-text-secondary relative ms-2 text-balance",
                    onClick: Yo,
                    children: s.gizmo.display.name
                })
            }), !1]
        }) : t.jsx(Ho, {})
    }),
    e[2] = s,
    e[3] = o,
    e[4] = l,
    e[5] = r) : r = e[5],
    r
}
function Yo(n) {
    n.preventDefault(),
    vt.setShowProjectSettingsModal(!0)
}
function Zo(n) {
    "use forget";
    const e = $.c(2)
      , {children: s} = n;
    let o;
    return e[0] !== s ? (o = t.jsx("div", {
        className: "group relative flex flex-col gap-1 p-4",
        children: t.jsx("div", {
            className: "flex items-center gap-4",
            children: s
        })
    }),
    e[0] = s,
    e[1] = o) : o = e[1],
    o
}
function Jo(n) {
    "use forget";
    const e = $.c(23)
      , {conversation: s, gizmo: o} = n
      , a = Ds(s.id, Qo) ?? s.title
      , [i,l] = M.useState(!1);
    let r, c;
    e[0] !== s.id ? (r = () => As(Qt, {
        editTitleInMainScreen: x => {
            const {serverThreadId: p} = x;
            p === s.id && l(!0)
        }
    }),
    c = [s.id],
    e[0] = s.id,
    e[1] = r,
    e[2] = c) : (r = e[1],
    c = e[2]),
    M.useEffect(r, c);
    const {snippet: m} = s;
    let u;
    e[3] !== s || e[4] !== a || e[5] !== i ? (u = i ? t.jsx(Pn, {
        conversationId: s.id,
        historyConversationResponse: s,
        onClose: () => {
            l(!1)
        }
    }) : t.jsx("div", {
        className: "text-sm font-medium",
        children: a
    }),
    e[3] = s,
    e[4] = a,
    e[5] = i,
    e[6] = u) : u = e[6];
    let d;
    e[7] !== m ? (d = m && t.jsx("div", {
        className: "text-token-text-secondary truncate text-sm",
        children: m
    }),
    e[7] = m,
    e[8] = d) : d = e[8];
    let f;
    e[9] !== u || e[10] !== d ? (f = t.jsxs("div", {
        className: "grow overflow-hidden group-hover:me-5",
        children: [u, d]
    }),
    e[9] = u,
    e[10] = d,
    e[11] = f) : f = e[11];
    let h;
    e[12] !== s || e[13] !== i ? (h = !i && t.jsx(ei, {
        conversation: s
    }),
    e[12] = s,
    e[13] = i,
    e[14] = h) : h = e[14];
    let g;
    e[15] !== f || e[16] !== h ? (g = t.jsxs(Zo, {
        children: [f, h]
    }),
    e[15] = f,
    e[16] = h,
    e[17] = g) : g = e[17];
    const b = g;
    let v;
    return e[18] !== b || e[19] !== s.id || e[20] !== o || e[21] !== i ? (v = i ? b : t.jsx($t, {
        to: Gn(s.id, o),
        draggable: !1,
        children: b
    }),
    e[18] = b,
    e[19] = s.id,
    e[20] = o,
    e[21] = i,
    e[22] = v) : v = e[22],
    v
}
function Qo(n) {
    return n?.title
}
function ei(n) {
    "use forget";
    const e = $.c(10)
      , {conversation: s} = n
      , [o,a] = M.useState(!1)
      , i = o ? "flex" : "hidden group-hover:flex";
    let l;
    e[0] !== i ? (l = W("absolute end-0 top-0 bottom-0 items-center gap-1.5 pe-4", i),
    e[0] = i,
    e[1] = l) : l = e[1];
    let r;
    e[2] !== s ? (r = u => {
        a(u),
        u && V.logEvent("Conversation History Item Open Menu", {
            conversationId: s.id
        })
    }
    ,
    e[2] = s,
    e[3] = r) : r = e[3];
    let c;
    e[4] !== s || e[5] !== r ? (c = t.jsx(En, {
        conversation: s,
        onOpenChange: r,
        inMainScreen: !0,
        isActiveConversation: !1
    }),
    e[4] = s,
    e[5] = r,
    e[6] = c) : c = e[6];
    let m;
    return e[7] !== l || e[8] !== c ? (m = t.jsx("div", {
        className: l,
        onClick: ti,
        children: c
    }),
    e[7] = l,
    e[8] = c,
    e[9] = m) : m = e[9],
    m
}
function ti(n) {
    n.preventDefault()
}
function si(n) {
    "use forget";
    const e = $.c(19)
      , {gizmo: s} = n;
    In(s.gizmo.id);
    const {items: o, hasNextPage: a, fetchNextPage: i, isLoading: l, isFetching: r, isFetchingNextPage: c} = Zt(s.gizmo.id)
      , m = M.useRef(null);
    let u;
    e[0] !== a || e[1] !== r || e[2] !== l || e[3] !== i ? (u = p => {
        l || p == null || (m.current?.disconnect(),
        m.current = new IntersectionObserver(C => {
            C[0].isIntersecting && a && !r && i()
        }
        ),
        m.current.observe(p))
    }
    ,
    e[0] = a,
    e[1] = r,
    e[2] = l,
    e[3] = i,
    e[4] = u) : u = e[4];
    const d = u;
    let f, h;
    e[5] === Symbol.for("react.memo_cache_sentinel") ? (f = () => () => {
        m.current?.disconnect()
    }
    ,
    h = [],
    e[5] = f,
    e[6] = h) : (f = e[5],
    h = e[6]),
    M.useEffect(f, h);
    const g = o.length;
    let b;
    e[7] !== g || e[8] !== s || e[9] !== a || e[10] !== d || e[11] !== l || e[12] !== o ? (b = (g || l) && t.jsx(ni, {
        gizmo: s,
        items: o ?? [],
        hasNextPage: a,
        infiniteScrollTriggerElementRef: d
    }),
    e[7] = g,
    e[8] = s,
    e[9] = a,
    e[10] = d,
    e[11] = l,
    e[12] = o,
    e[13] = b) : b = e[13];
    let v;
    e[14] !== c ? (v = c && t.jsx("div", {
        className: "m-4 mb-5 flex justify-center",
        children: t.jsx(Ft, {})
    }),
    e[14] = c,
    e[15] = v) : v = e[15];
    let x;
    return e[16] !== b || e[17] !== v ? (x = t.jsxs("div", {
        className: "mt-6 mb-14 contain-inline-size",
        children: [b, v]
    }),
    e[16] = b,
    e[17] = v,
    e[18] = x) : x = e[18],
    x
}
function ni(n) {
    "use forget";
    const e = $.c(14)
      , {gizmo: s, items: o, hasNextPage: a, infiniteScrollTriggerElementRef: i} = n
      , l = o.length;
    let r;
    if (e[0] !== l || e[1] !== s || e[2] !== a || e[3] !== i || e[4] !== o) {
        let m;
        e[6] !== l || e[7] !== s || e[8] !== a || e[9] !== i || e[10] !== o.length ? (m = (u, d) => {
            const f = a && d === o.length - 3 ? i : void 0;
            return t.jsx("li", {
                ref: f,
                className: W("hover:bg-token-bg-tertiary first:rounded-t-lg last:rounded-b-lg", d !== l - 1 && "border-token-border-xlight border-b"),
                children: t.jsx(Jo, {
                    conversation: u,
                    gizmo: s
                })
            }, u.id)
        }
        ,
        e[6] = l,
        e[7] = s,
        e[8] = a,
        e[9] = i,
        e[10] = o.length,
        e[11] = m) : m = e[11],
        r = o.map(m),
        e[0] = l,
        e[1] = s,
        e[2] = a,
        e[3] = i,
        e[4] = o,
        e[5] = r
    } else
        r = e[5];
    let c;
    return e[12] !== r ? (c = t.jsx(t.Fragment, {
        children: t.jsx("ol", {
            children: r
        })
    }),
    e[12] = r,
    e[13] = c) : c = e[13],
    c
}
function Ct(n, e) {
    "use forget";
    const s = $.c(14)
      , o = jn()
      , a = B()
      , i = be()
      , l = Kt()
      , r = Be.useStore()
      , c = o?.kind === "conversation" && o.gizmoId !== e;
    let m;
    s[0] !== i || s[1] !== r || s[2] !== l ? (m = async function(b) {
        const {conversation: v, newGizmoId: x, previousGizmoId: p} = b;
        r.expandProject(x),
        await l({
            newGizmoId: x,
            conversation: v,
            previousGizmoId: p
        }),
        i(`/g/${x}/project`)
    }
    ,
    s[0] = i,
    s[1] = r,
    s[2] = l,
    s[3] = m) : m = s[3];
    const u = m;
    let d;
    s[4] !== u || s[5] !== c || s[6] !== a || s[7] !== o || s[8] !== e || s[9] !== n ? (d = () => {
        if (!c)
            return;
        const {conversation: g, gizmoId: b} = o;
        if (e)
            return u({
                conversation: g,
                newGizmoId: e,
                previousGizmoId: b
            });
        Ve(a, v => {
            const {onClose: x} = v;
            return t.jsx(jt, {
                onClose: x,
                onSuccess: p => {
                    if (!p)
                        return;
                    const C = u({
                        conversation: g,
                        newGizmoId: p,
                        previousGizmoId: b
                    });
                    return V.logEventWithStatsig("Projects: Create Open", "chatgpt_web_projects_create_open", {
                        source: n
                    }),
                    C
                }
            })
        }
        )
    }
    ,
    s[4] = u,
    s[5] = c,
    s[6] = a,
    s[7] = o,
    s[8] = e,
    s[9] = n,
    s[10] = d) : d = s[10];
    const f = d;
    let h;
    return s[11] !== c || s[12] !== f ? (h = {
        canDropConversation: c,
        onDropConversation: f
    },
    s[11] = c,
    s[12] = f,
    s[13] = h) : h = s[13],
    h
}
function oi(n) {
    "use forget";
    const e = $.c(48)
      , {clientThreadId: s, gizmoId: o, currentModelId: a, onRequestCompletion: i} = n
      , l = ee()
      , {data: r} = pt(o)
      , c = M.useContext(Ns)
      , m = ks(c)
      , u = Es(Fs)
      , d = zt(li)
      , f = zt(ri)
      , {onDropConversation: h, canDropConversation: g} = Ct(void 0, o)
      , [b,v] = M.useState(!1);
    let x;
    e[0] !== g ? (x = G => {
        G.preventDefault(),
        g && v(!0)
    }
    ,
    e[0] = g,
    e[1] = x) : x = e[1];
    let p;
    e[2] !== g || e[3] !== h ? (p = G => {
        G.preventDefault(),
        g && (v(!1),
        h())
    }
    ,
    e[2] = g,
    e[3] = h,
    e[4] = p) : p = e[4];
    let C, I;
    e[5] !== g ? (C = G => {
        G.preventDefault(),
        g && v(!0)
    }
    ,
    I = G => {
        G.preventDefault(),
        g && v(!1)
    }
    ,
    e[5] = g,
    e[6] = C,
    e[7] = I) : (C = e[6],
    I = e[7]);
    const w = m ? "last-standard" : "none"
      , z = u ? "none" : "standard";
    let T;
    e[8] !== r ? (T = t.jsx(Xo, {
        gizmo: r
    }),
    e[8] = r,
    e[9] = T) : T = e[9];
    let N;
    e[10] !== s || e[11] !== a || e[12] !== r || e[13] !== i ? (N = r ? t.jsx(wo, {
        clientThreadId: s,
        isNewThread: !0,
        currentModelId: a,
        onContinueGenerating: G => i(yn(G)),
        onRequestCompletion: async G => i(await Sn(G)),
        hideHeader: !0
    }) : t.jsx("div", {
        className: "bg-token-tertiary h-24 w-full rounded-3xl"
    }),
    e[10] = s,
    e[11] = a,
    e[12] = r,
    e[13] = i,
    e[14] = N) : N = e[14];
    let L, O;
    e[15] !== r ? (O = t.jsx(Lo, {
        gizmo: r
    }),
    L = r && t.jsx(si, {
        gizmo: r
    }),
    e[15] = r,
    e[16] = L,
    e[17] = O) : (L = e[16],
    O = e[17]);
    let F;
    e[18] !== r || e[19] !== o || e[20] !== f ? (F = r && f && t.jsx(vn, {
        gizmo: bn(r),
        publishedGizmo: r,
        onClose: ai
    }, o),
    e[18] = r,
    e[19] = o,
    e[20] = f,
    e[21] = F) : F = e[21];
    let _;
    e[22] !== r || e[23] !== o || e[24] !== l || e[25] !== d ? (_ = d && t.jsx(jt, {
        submitButtonTitle: l.formatMessage(y.projectSettingsSubmitButton),
        gizmo: r,
        onClose: ii
    }, o),
    e[22] = r,
    e[23] = o,
    e[24] = l,
    e[25] = d,
    e[26] = _) : _ = e[26];
    let R;
    e[27] !== r?.gizmo || e[28] !== b ? (R = b && t.jsxs(lt, {
        children: [t.jsx(Xt, {
            className: "h-12 w-12",
            style: {
                color: "#3C46FF"
            }
        }), t.jsx("h3", {
            className: "text-center",
            children: t.jsx(j, {
                ...y.addConversationToNamedSnorlax,
                values: {
                    projectName: r?.gizmo.display.name ?? "project"
                }
            })
        }), t.jsx("h4", {
            className: "text-center",
            children: t.jsx(j, {
                ...y.moveConversation
            })
        })]
    }),
    e[27] = r?.gizmo,
    e[28] = b,
    e[29] = R) : R = e[29];
    let k;
    e[30] !== L || e[31] !== F || e[32] !== _ || e[33] !== R || e[34] !== T || e[35] !== N || e[36] !== O ? (k = t.jsxs(Cn, {
        className: "[width:min(90cqw,var(--thread-content-max-width))]",
        children: [T, N, O, L, F, _, R]
    }),
    e[30] = L,
    e[31] = F,
    e[32] = _,
    e[33] = R,
    e[34] = T,
    e[35] = N,
    e[36] = O,
    e[37] = k) : k = e[37];
    let P;
    e[38] !== k || e[39] !== w || e[40] !== z ? (P = t.jsx(Mn, {
        verticalMargin: "none",
        verticalPadding: w,
        horizontalPadding: z,
        children: k
    }),
    e[38] = k,
    e[39] = w,
    e[40] = z,
    e[41] = P) : P = e[41];
    let A;
    return e[42] !== x || e[43] !== P || e[44] !== p || e[45] !== C || e[46] !== I ? (A = t.jsx("div", {
        onDragOver: x,
        onDrop: p,
        onDragEnter: C,
        onDragLeave: I,
        className: "flex max-h-full min-h-full flex-col pt-(--header-height)",
        children: P
    }),
    e[42] = x,
    e[43] = P,
    e[44] = p,
    e[45] = C,
    e[46] = I,
    e[47] = A) : A = e[47],
    A
}
function ii() {
    vt.setShowProjectSettingsModal(!1)
}
function ai() {
    vt.setShowShareModal(!1)
}
function ri(n) {
    return n.showShareModal
}
function li(n) {
    return n.showProjectSettingsModal
}
const ci = Object.freeze(Object.defineProperty({
    __proto__: null,
    SnorlaxSplashScreen: oi,
    useProjectsDragDrop: Ct
}, Symbol.toStringTag, {
    value: "Module"
}))
  , di = _e( () => ze( () => import("./kzzc0oyswui29fbb.js"), __vite__mapDeps([0, 1, 2, 3, 4])).then(n => n.SnorlaxFolderAnimation), {
    loading: ({color: n}) => t.jsx(Mt, {
        color: n
    })
})
  , mi = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .15,
            ease: "easeOut"
        }
    },
    closed: {
        opacity: 0,
        y: -5,
        transition: {
            duration: .15,
            ease: "easeIn"
        }
    }
};
function ui(n) {
    "use forget";
    const e = $.c(19)
      , {color: s, folderState: o, gizmoId: a, sidebarSnorlaxFolderStore: i} = n
      , l = ee()
      , [r,c] = M.useState(!1);
    let m;
    e[0] !== o || e[1] !== l ? (m = o === "open" ? l.formatMessage(y.hideChatsForProjectTooltip) : l.formatMessage(y.showChatsForProjectTooltip),
    e[0] = o,
    e[1] = l,
    e[2] = m) : m = e[2];
    let u;
    e[3] !== o || e[4] !== a || e[5] !== i ? (u = x => {
        x.preventDefault(),
        o === "open" ? i.collapseProject(a) : i.expandProject(a)
    }
    ,
    e[3] = o,
    e[4] = a,
    e[5] = i,
    e[6] = u) : u = e[6];
    let d, f;
    e[7] === Symbol.for("react.memo_cache_sentinel") ? (d = () => {
        c(!0)
    }
    ,
    f = () => {
        c(!1)
    }
    ,
    e[7] = d,
    e[8] = f) : (d = e[7],
    f = e[8]);
    const h = o === "open";
    let g;
    e[9] !== s || e[10] !== r || e[11] !== h ? (g = t.jsx(di, {
        isOpen: h,
        isHovered: r,
        color: s
    }),
    e[9] = s,
    e[10] = r,
    e[11] = h,
    e[12] = g) : g = e[12];
    let b;
    e[13] !== u || e[14] !== g ? (b = t.jsx("button", {
        className: "icon",
        onClick: u,
        onMouseEnter: d,
        onMouseLeave: f,
        children: g
    }),
    e[13] = u,
    e[14] = g,
    e[15] = b) : b = e[15];
    let v;
    return e[16] !== m || e[17] !== b ? (v = t.jsx(ut, {
        label: m,
        triggerAs: null,
        children: b
    }),
    e[16] = m,
    e[17] = b,
    e[18] = v) : v = e[18],
    v
}
function Mt(n) {
    "use forget";
    const e = $.c(2)
      , {color: s} = n;
    let o;
    return e[0] !== s ? (o = t.jsx(rt, {
        className: "icon",
        style: {
            color: s
        }
    }),
    e[0] = s,
    e[1] = o) : o = e[1],
    o
}
function na(n) {
    "use forget";
    const e = $.c(110)
      , {gizmo: s, historyDisabled: o, flair: a, onClick: i, isActive: l, hideOverflowMenu: r, inGPTDropdown: c} = n
      , m = r === void 0 ? !1 : r
      , u = c === void 0 ? !1 : c
      , d = B()
      , {clientThreadId: f} = Mo()
      , h = Dt(f)
      , g = be()
      , b = ee();
    let v;
    e[0] !== d ? (v = At(d),
    e[0] = d,
    e[1] = v) : v = e[1];
    const x = v
      , p = s.gizmo.id
      , C = Be.useStore();
    let I;
    e[2] !== p ? (I = E => Be.selectFolderState(E, p),
    e[2] = p,
    e[3] = I) : I = e[3];
    const w = Be.useState(I);
    let z;
    e[4] !== s.gizmo.tags ? (z = s.gizmo.tags?.includes(es.FirstParty),
    e[4] = s.gizmo.tags,
    e[5] = z) : z = e[5];
    const T = !!z
      , {items: N, hasNextPage: L} = Zt(s.gizmo.id);
    let O;
    e[6] !== N ? (O = N === void 0 ? [] : N,
    e[6] = N,
    e[7] = O) : O = e[7];
    const F = O
      , _ = bt(p)
      , R = Jt(s);
    let k;
    e[8] !== p || e[9] !== x.projects ? (k = () => x.projects.renamingProjectId$() === p,
    e[8] = p,
    e[9] = x.projects,
    e[10] = k) : k = e[10];
    const P = Os(k)
      , A = B();
    let G;
    e[11] !== A ? (G = se(A, "3925590552"),
    e[11] = A,
    e[12] = G) : G = e[12];
    const ne = G
      , D = l && (!_ || !(w === "open" && h))
      , X = M.useRef(w);
    let Y, K;
    e[13] !== w ? (Y = () => {
        X.current = w
    }
    ,
    K = [w],
    e[13] = w,
    e[14] = Y,
    e[15] = K) : (Y = e[14],
    K = e[15]),
    M.useEffect(Y, K);
    let H, Se;
    e[16] !== p || e[17] !== l || e[18] !== h || e[19] !== C ? (H = () => {
        X.current !== "open" && l && h && C.expandProject(p)
    }
    ,
    Se = [l, h, C, p],
    e[16] = p,
    e[17] = l,
    e[18] = h,
    e[19] = C,
    e[20] = H,
    e[21] = Se) : (H = e[20],
    Se = e[21]),
    M.useEffect(H, Se);
    let q;
    if (s != null)
        q = s.gizmo.display.name || Fn;
    else if (o) {
        let E;
        e[22] !== b ? (E = b.formatMessage(ts.clearChat),
        e[22] = b,
        e[23] = E) : E = e[23],
        q = E
    } else
        q = Rn;
    const [ye,It] = M.useState();
    let Ge;
    e[24] !== d ? (Ge = Rs(d),
    e[24] = d,
    e[25] = Ge) : Ge = e[25];
    const Xe = Ge;
    let Ne;
    e[26] === Symbol.for("react.memo_cache_sentinel") ? (Ne = () => {
        It(void 0)
    }
    ,
    e[26] = Ne) : Ne = e[26];
    let ke;
    e[27] !== s ? (ke = [s],
    e[27] = s,
    e[28] = ke) : ke = e[28],
    M.useEffect(Ne, ke);
    const Ye = We()
      , [oe,Ze] = M.useState(!1)
      , {canDropConversation: ae, onDropConversation: Je} = Ct("sidebar_row_button", p);
    let Ee;
    e[29] !== x.composer || e[30] !== x.projects ? (Ee = () => {
        M.startTransition( () => {
            wt( () => {
                x.composer.reset(),
                x.projects.reset()
            }
            )
        }
        )
    }
    ,
    e[29] = x.composer,
    e[30] = x.projects,
    e[31] = Ee) : Ee = e[31];
    const Fe = Ee;
    let De;
    e[32] !== Fe || e[33] !== d || e[34] !== s.gizmo.id || e[35] !== l || e[36] !== P || e[37] !== q || e[38] !== g || e[39] !== ye || e[40] !== Ye ? (De = P ? t.jsx(Ln, {
        initialValue: q,
        onCommit: async E => {
            It(E),
            Fe();
            const {resource: Ce} = await Ye.mutateAsync({
                update: {
                    name: E
                },
                id: s.gizmo.id
            });
            Ce && l && g($e(d, Ce), {
                replace: !0
            })
        }
        ,
        onCancel: Fe
    }) : ye ?? q,
    e[32] = Fe,
    e[33] = d,
    e[34] = s.gizmo.id,
    e[35] = l,
    e[36] = P,
    e[37] = q,
    e[38] = g,
    e[39] = ye,
    e[40] = Ye,
    e[41] = De) : De = e[41];
    const Qe = De
      , et = u && !_ ? S.LinkItem : Dn
      , tt = oe && "[&>*]:pointer-events-none";
    let re;
    e[42] !== tt ? (re = W(tt),
    e[42] = tt,
    e[43] = re) : re = e[43];
    let le;
    e[44] !== ae || e[45] !== Je ? (le = E => {
        ae && (E.preventDefault(),
        E.stopPropagation(),
        Ze(!1),
        Je())
    }
    ,
    e[44] = ae,
    e[45] = Je,
    e[46] = le) : le = e[46];
    let ce;
    e[47] !== ae || e[48] !== _ ? (ce = E => {
        ae && E.target === E.currentTarget && _ && (E.preventDefault(),
        Ze(!0))
    }
    ,
    e[47] = ae,
    e[48] = _,
    e[49] = ce) : ce = e[49];
    let Ae;
    e[50] === Symbol.for("react.memo_cache_sentinel") ? (Ae = E => {
        E.target === E.currentTarget && Ze(!1)
    }
    ,
    e[50] = Ae) : Ae = e[50];
    let de;
    e[51] !== d || e[52] !== s ? (de = $e(d, s),
    e[51] = d,
    e[52] = s,
    e[53] = de) : de = e[53];
    let me;
    e[54] !== p || e[55] !== x.composer || e[56] !== x.projects.renamingProjectId$ ? (me = () => {
        wt( () => {
            x.projects.renamingProjectId$.set(p),
            x.composer.autofocusDisabled$.set(!0)
        }
        )
    }
    ,
    e[54] = p,
    e[55] = x.composer,
    e[56] = x.projects.renamingProjectId$,
    e[57] = me) : me = e[57];
    let ue;
    e[58] !== s.gizmo.id || e[59] !== i ? (ue = E => {
        const Ce = s?.gizmo.id ?? "primary";
        V.logNewChatButtonClicked({
            location: "Sidebar gizmo list",
            gizmo_id: Ce
        }),
        V.logEvent("Sidebar Click Gizmo", {
            gizmo_id: Ce
        }),
        i?.(E)
    }
    ,
    e[58] = s.gizmo.id,
    e[59] = i,
    e[60] = ue) : ue = e[60];
    let xe;
    e[61] !== R || e[62] !== w || e[63] !== p || e[64] !== s.gizmo.display || e[65] !== T || e[66] !== _ || e[67] !== C || e[68] !== F ? (xe = _ && F.length > 0 ? t.jsx(ui, {
        color: R,
        folderState: w,
        gizmoId: p,
        sidebarSnorlaxFolderStore: C
    }) : _ ? t.jsx(Mt, {
        color: R
    }) : t.jsx(ss, {
        simple: !0,
        isFirstParty: T,
        src: s?.gizmo.display.profile_picture_url,
        className: "icon",
        alt: ""
    }),
    e[61] = R,
    e[62] = w,
    e[63] = p,
    e[64] = s.gizmo.display,
    e[65] = T,
    e[66] = _,
    e[67] = C,
    e[68] = F,
    e[69] = xe) : xe = e[69];
    let ge;
    e[70] !== a ? (ge = a === ns.Workspace && t.jsx(xi, {}),
    e[70] = a,
    e[71] = ge) : ge = e[71];
    let fe;
    e[72] !== a || e[73] !== s || e[74] !== m || e[75] !== u || e[76] !== l || e[77] !== P || e[78] !== ne || e[79] !== _ || e[80] !== Xe || e[81] !== oe ? (fe = !m && !oe && !P && (_ ? t.jsx(fi, {
        gizmoResource: s,
        isActive: l
    }) : ne ? t.jsx(ut, {
        label: u ? t.jsx(j, {
            id: "BCd1DP",
            defaultMessage: "Pin to sidebar"
        }) : t.jsx(j, {
            id: "G+A62m",
            defaultMessage: "Unpin from sidebar"
        }),
        side: "right",
        children: t.jsx(xt, {
            onClick: () => {
                Pe.updateGizmoSidebar(Xe, os, s.gizmo.id, u ? "keep" : "hide", "sidebar")
            }
            ,
            icon: u ? Un : Bn
        })
    }) : t.jsx(gi, {
        gizmoResource: s,
        flair: a
    })),
    e[72] = a,
    e[73] = s,
    e[74] = m,
    e[75] = u,
    e[76] = l,
    e[77] = P,
    e[78] = ne,
    e[79] = _,
    e[80] = Xe,
    e[81] = oe,
    e[82] = fe) : fe = e[82];
    let he;
    e[83] !== et || e[84] !== Qe || e[85] !== D || e[86] !== oe || e[87] !== re || e[88] !== le || e[89] !== ce || e[90] !== de || e[91] !== me || e[92] !== ue || e[93] !== xe || e[94] !== ge || e[95] !== fe ? (he = t.jsx(et, {
        className: re,
        highlighted: oe,
        onDrop: le,
        onDragEnter: ce,
        onDragLeave: Ae,
        to: de,
        onDoubleClick: me,
        onClick: ue,
        active: D,
        icon: xe,
        label: Qe,
        trailing: ge,
        highlightTrailing: fe
    }),
    e[83] = et,
    e[84] = Qe,
    e[85] = D,
    e[86] = oe,
    e[87] = re,
    e[88] = le,
    e[89] = ce,
    e[90] = de,
    e[91] = me,
    e[92] = ue,
    e[93] = xe,
    e[94] = ge,
    e[95] = fe,
    e[96] = he) : he = e[96];
    let pe;
    e[97] !== w || e[98] !== s || e[99] !== L || e[100] !== _ || e[101] !== h || e[102] !== D || e[103] !== F ? (pe = _ && w === "open" && F.length > 0 && t.jsx(Ht.div, {
        initial: "closed",
        animate: "open",
        exit: "closed",
        variants: mi,
        className: "overflow-hidden",
        children: t.jsx(An, {
            gizmoResource: s,
            serverThreadId: h,
            isOnProjectPage: D,
            conversations: F,
            hasNextPage: L
        })
    }, "nested-conversations"),
    e[97] = w,
    e[98] = s,
    e[99] = L,
    e[100] = _,
    e[101] = h,
    e[102] = D,
    e[103] = F,
    e[104] = pe) : pe = e[104];
    let je;
    e[105] !== pe ? (je = t.jsx(rn, {
        initial: !1,
        children: pe
    }),
    e[105] = pe,
    e[106] = je) : je = e[106];
    let Oe;
    return e[107] !== he || e[108] !== je ? (Oe = t.jsxs(t.Fragment, {
        children: [he, je]
    }),
    e[107] = he,
    e[108] = je,
    e[109] = Oe) : Oe = e[109],
    Oe
}
const xi = () => {
    const n = ee()
      , e = Ot()
      , s = e?.name ? n.formatMessage({
        id: "gizmo.workspaceRecommended",
        defaultMessage: "Recommended at {workspace_name}"
    }, {
        workspace_name: e.name ?? "Your Workspace"
    }) : n.formatMessage({
        id: "gizmo.workspaceRecommended.noWorkplaceName",
        defaultMessage: "Recommended at your workplace"
    });
    return t.jsx(ut, {
        side: "right",
        label: s,
        children: t.jsx(On, {
            className: "icon",
            alt: s
        })
    })
}
  , ps = _e( () => ze( () => import("./k0cdb99z71ywjcnj.js"), __vite__mapDeps([5, 1, 2, 3, 6, 7])).then(n => n.GizmoKeepInSidebarMenuItem))
  , gi = n => {
    "use forget";
    const e = $.c(10)
      , {gizmoResource: s, flair: o} = n
      , a = ft();
    let i;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (i = t.jsx(xt, {
        onMouseOver: hi,
        icon: gt
    }),
    e[0] = i) : i = e[0];
    let l;
    e[1] !== o || e[2] !== s || e[3] !== a ? (l = o === ns.Recent && t.jsx(S.Item, {
        onClick: () => {
            Pe.updateGizmoSidebar(a, os, s.gizmo.id, "keep", "sidebar")
        }
        ,
        children: t.jsx(j, {
            ...ts.keepInSidebar
        })
    }),
    e[1] = o,
    e[2] = s,
    e[3] = a,
    e[4] = l) : l = e[4];
    let r;
    e[5] !== s ? (r = t.jsx(ps, {
        gizmoResource: s,
        location: "sidebar"
    }),
    e[5] = s,
    e[6] = r) : r = e[6];
    let c;
    return e[7] !== l || e[8] !== r ? (c = t.jsxs(Te, {
        triggerButton: i,
        contentAlign: "start",
        sideOffset: -4,
        alignOffset: -8,
        size: "auto",
        children: [l, r]
    }),
    e[7] = l,
    e[8] = r,
    e[9] = c) : c = e[9],
    c
}
  , fi = n => {
    "use forget";
    const e = $.c(24)
      , {gizmoResource: s, isActive: o} = n
      , a = B()
      , i = be();
    let l;
    e[0] !== a ? (l = At(a),
    e[0] = a,
    e[1] = l) : l = e[1];
    const r = l
      , {canEdit: c} = ve(s)
      , {canDelete: m} = Ls(s);
    let u;
    e[2] === Symbol.for("react.memo_cache_sentinel") ? (u = t.jsx(xt, {
        icon: gt
    }),
    e[2] = u) : u = e[2];
    let d;
    e[3] !== s.gizmo.id || e[4] !== r.composer.autofocusDisabled$ || e[5] !== r.projects.renamingProjectId$ ? (d = () => {
        r.composer.autofocusDisabled$.set(!0),
        r.projects.renamingProjectId$.set(s.gizmo.id)
    }
    ,
    e[3] = s.gizmo.id,
    e[4] = r.composer.autofocusDisabled$,
    e[5] = r.projects.renamingProjectId$,
    e[6] = d) : d = e[6];
    const f = !c;
    let h, g;
    e[7] === Symbol.for("react.memo_cache_sentinel") ? (h = t.jsx(ht, {
        className: "icon-sm"
    }),
    g = t.jsx(j, {
        ...y.editProjectNameDropdownButton
    }),
    e[7] = h,
    e[8] = g) : (h = e[7],
    g = e[8]);
    let b;
    e[9] !== d || e[10] !== f ? (b = t.jsxs(S.Item, {
        onClick: d,
        disabled: f,
        children: [h, g]
    }),
    e[9] = d,
    e[10] = f,
    e[11] = b) : b = e[11];
    let v;
    e[12] !== a || e[13] !== s.gizmo.id || e[14] !== o || e[15] !== i ? (v = w => {
        w.preventDefault(),
        w.stopPropagation();
        const z = function(N) {
            N(),
            o && i("/")
        };
        Ve(a, T => {
            const {onClose: N} = T;
            return t.jsx($n, {
                gizmoId: s.gizmo.id,
                onError: void 0,
                onSuccess: () => z(N),
                onClose: () => {
                    N()
                }
            })
        }
        )
    }
    ,
    e[12] = a,
    e[13] = s.gizmo.id,
    e[14] = o,
    e[15] = i,
    e[16] = v) : v = e[16];
    const x = !m;
    let p;
    e[17] === Symbol.for("react.memo_cache_sentinel") ? (p = t.jsx(j, {
        ...y.deleteProjectDropdownButton
    }),
    e[17] = p) : p = e[17];
    let C;
    e[18] !== v || e[19] !== x ? (C = t.jsx(S.Item, {
        color: "danger",
        onClick: v,
        icon: is,
        disabled: x,
        children: p
    }),
    e[18] = v,
    e[19] = x,
    e[20] = C) : C = e[20];
    let I;
    return e[21] !== C || e[22] !== b ? (I = t.jsx(t.Fragment, {
        children: t.jsxs(Te, {
            triggerButton: u,
            contentAlign: "start",
            sideOffset: -4,
            alignOffset: -8,
            size: "auto",
            children: [b, C]
        })
    }),
    e[21] = C,
    e[22] = b,
    e[23] = I) : I = e[23],
    I
}
;
function hi() {
    return ps.prefetch()
}
function pi(n) {
    const e = ee()
      , s = ft()
      , o = B()
      , a = Us(o).checkGate("3728943795") && !n.inSidebarFlyout
      , {canCreate: i} = Bs()
      , l = be()
      , [r,c] = M.useState(!1)
      , {snorlaxes: m, hasNextPage: u, fetchNextPage: d, isLoading: f, isFetchingNextPage: h, isError: g} = as()
      , v = (n.inSidebarFlyout ? m.slice(Hn) : m).filter( ({gizmo: I}) => I.gizmo.id !== n.currentGizmoId)
      , x = v.length === 0
      , p = M.useRef(null)
      , C = M.useCallback(I => {
        f || I == null || (p.current?.disconnect(),
        p.current = new IntersectionObserver(w => {
            w[0].isIntersecting && u && d()
        }
        ),
        p.current.observe(I))
    }
    , [f, u, d]);
    return M.useEffect( () => () => {
        p.current?.disconnect()
    }
    , []),
    t.jsxs("div", {
        ref: x && !g ? C : void 0,
        children: [x && f && t.jsxs($s, {
            children: [t.jsx(S.Shimmer, {}), t.jsx(S.Shimmer, {})]
        }), x && g && t.jsxs("div", {
            className: "text-token-text-tertiary p-3 text-center italic",
            children: [e.formatMessage(y.unableToLoadHistory), !r && t.jsx("div", {
                className: "mt-1",
                children: t.jsx(qe, {
                    as: "button",
                    color: "primary",
                    size: "small",
                    className: "m-auto mt-2",
                    onClick: () => {
                        c(!0),
                        qn(s)
                    }
                    ,
                    children: e.formatMessage(y.retryLoadingHistory)
                })
            })]
        }), a && i && t.jsx(t.Fragment, {
            children: t.jsx(S.Item, {
                icon: Xt,
                label: t.jsx(j, {
                    ...y.newProjectButton
                }),
                onSelect: () => {
                    Ve(o, ({onClose: I}) => t.jsx(jt, {
                        onClose: I,
                        onSuccess: async w => {
                            w && (await n.onUpdateConversationGizmo(w),
                            l(`/g/${w}/project`))
                        }
                    }))
                }
            })
        }), !f && !x && v.map( ({gizmo: I}, w) => {
            const z = w === v.length - 1 ? C : void 0;
            return t.jsxs(t.Fragment, {
                children: [a && w === 0 && t.jsx(S.Separator, {}), t.jsx(S.LinkItem, {
                    to: I != null ? $e(o, I) : "/",
                    icon: t.jsx(Mt, {
                        color: I.gizmo.display.theme
                    }),
                    label: I.gizmo.display.name,
                    onClick: () => {
                        n.inSidebarFlyout || n.onUpdateConversationGizmo(I.gizmo.id)
                    }
                    ,
                    ref: z
                }, I.gizmo.id)]
            })
        }
        ), h && t.jsxs(t.Fragment, {
            children: [t.jsx(S.Shimmer, {}), t.jsx(S.Shimmer, {})]
        })]
    })
}
const Et = qt.memo(pi)
  , ji = _e( () => ze( () => Promise.resolve().then( () => ci), void 0).then(n => n.SnorlaxSplashScreen))
  , oa = ({clientThreadId: n, currentModelId: e, onRequestCompletion: s, gizmoId: o}) => {
    const {data: a} = pt(o)
      , i = bt(o)
      , l = Ws();
    return a == null ? null : i ? t.jsx(ji, {
        clientThreadId: n,
        gizmoId: o,
        currentModelId: e,
        onRequestCompletion: s
    }) : t.jsx(js, {
        gizmo: a,
        showStarterPrompts: !0,
        disableStarterPrompts: l,
        clientThreadId: n,
        currentModelId: e
    })
}
;
function js({gizmo: n, hideOwner: e=!1, children: s, className: o, avatarClassName: a, showStarterPrompts: i=!1, disableStarterPrompts: l=!1, clientThreadId: r, currentModelId: c}) {
    return n == null ? null : t.jsx(t.Fragment, {
        children: t.jsxs("div", {
            className: W("text-token-text-primary flex h-full flex-col items-center justify-center", "screen-arch:min-h-[calc(100dvh-var(--thread-leading-height)-var(--thread-trailing-height)-12px)]", o),
            children: [t.jsx(vi, {
                gizmo: n,
                avatarClassName: a
            }), t.jsx(Si, {
                gizmo: n,
                hideOwner: e,
                showStarterPrompts: i,
                disableStarterPrompts: l,
                clientThreadId: r,
                currentModelId: c
            }), s]
        })
    })
}
function vi({gizmo: n, avatarClassName: e}) {
    const s = !!(n != null && Vn(n) && n?.gizmo.tags?.includes(es.FirstParty));
    return t.jsx("div", {
        className: "relative",
        children: t.jsx(ss, {
            isFirstParty: s || !n,
            src: n != null && Me(n) ? n.profilePictureUrl : n?.gizmo.display.profile_picture_url,
            className: W("mb-3 h-12 w-12", e)
        })
    })
}
function bi({gizmo: n, disabled: e}) {
    const s = _o(n)
      , o = To()
      , a = Vs();
    if (s == null || s.length === 0)
        return null;
    const i = s.slice(0, a ? 2 : 4);
    return t.jsx(Ci, {
        starterPrompts: i,
        onSelectStarterPrompt: o,
        disabled: e
    })
}
function Si({gizmo: n, hideOwner: e, showStarterPrompts: s, disableStarterPrompts: o, clientThreadId: a, currentModelId: i}) {
    const {data: l} = ct()
      , r = n != null && Me(n) ? n.name : n?.gizmo.display.name
      , c = n != null && Me(n) ? n.description : n?.gizmo.display.description
      , m = n != null && Me(n) ? n.defaultModel ? l?.models.get(n.defaultModel) ?? null : null : n?.gizmo.default_model ? l?.models.get(n?.gizmo.default_model) ?? null : null
      , u = Hs()
      , d = B()
      , f = se(d, "1854238036")
      , h = M.useCallback( () => {
        !a || !m || (V.logEvent("GPTs: Landing Preferred Model Switch", {
            from: i,
            to: m.id
        }),
        Rt.logEvent("chatgpt_gpts_landing_preferred_model_switch", m.id, {
            from: String(i ?? ""),
            to: m.id
        }),
        Wn(m.id),
        u({
            modelId: m.id,
            location: "Gizmo landing preferred model"
        }))
    }
    , [a, m, i, u])
      , [g,b] = M.useState(!1);
    return M.useEffect( () => {
        if (!i || m == null || !f || l?.models.get(m.id) == null)
            return;
        const v = setTimeout( () => {
            b(!0)
        }
        , 500);
        return () => clearTimeout(v)
    }
    , [i, m, l, f]),
    t.jsxs("div", {
        className: "flex flex-col items-center gap-2",
        children: [t.jsx("div", {
            className: "text-center text-2xl font-semibold",
            children: r
        }), !e && t.jsx("div", {
            className: "text-token-text-tertiary flex items-center gap-1",
            children: t.jsx(t.Fragment, {
                children: n && Me(n) ? t.jsx(Pt, {
                    gizmo: n
                }) : t.jsx(Pt, {
                    gizmo: n,
                    socials: n.gizmo.author.display_socials
                })
            })
        }), g && m && (i && i !== m.id ? t.jsxs("button", {
            onClick: h,
            className: "btn btn-blue btn-small flex items-center gap-1",
            children: [t.jsx(qs, {
                className: "icon-sm"
            }), t.jsx(j, {
                id: "6uu9eh",
                defaultMessage: "Switch to {modelTitle} (creator's recommended model)",
                values: {
                    modelTitle: `${m.title}`
                }
            })]
        }) : t.jsxs("div", {
            className: "text-token-text-tertiary flex items-center gap-1 text-xs",
            children: [t.jsx(Lt, {
                style: {
                    color: "gray",
                    width: 16,
                    height: 16
                }
            }), t.jsx(j, {
                id: "mcxm8w",
                defaultMessage: "Using the creator's recommended model: {modelTitle}",
                values: {
                    modelTitle: `${m.title}`
                }
            })]
        })), c && t.jsx("div", {
            className: "text-token-text-primary max-w-md text-center text-sm font-normal",
            children: c
        }), s && t.jsx(bi, {
            gizmo: n,
            disabled: o
        })]
    })
}
const yi = /\s/;
function Ci({starterPrompts: n, onSelectStarterPrompt: e, disabled: s, cssMobileDisplayLimit: o, marginOverride: a}) {
    let i = n.map( (l, r) => {
        let c = l.oneliner ?? l.title;
        c === "" && (c = l.body);
        const m = yi.test(c);
        return t.jsxs("button", {
            className: W(o !== void 0 && r >= o && "max-sm:hidden", "border-token-border-default shadow-xxs enabled:hover:bg-token-main-surface-secondary relative flex w-40 flex-col gap-2 rounded-2xl border px-3 pt-3 pb-4 text-start align-top text-[15px] transition disabled:cursor-not-allowed"),
            disabled: s,
            onClick: u => e(u, l, n, r),
            children: [t.jsx(Kn, {
                category: l.category
            }), t.jsx("div", {
                className: W("line-clamp-3 max-w-full text-balance text-gray-600 dark:text-gray-500", m ? "break-word" : "break-all"),
                children: c
            })]
        }, l.id ?? r)
    }
    );
    if (i.length > 2) {
        const l = Math.floor(i.length / 2);
        i = [i.slice(0, l), i.slice(l)].map( (r, c) => t.jsx("div", {
            className: "flex max-w-3xl flex-wrap items-stretch justify-center gap-4",
            children: r
        }, c))
    }
    return t.jsx("div", {
        className: W("mx-3 flex max-w-3xl flex-wrap items-stretch justify-center gap-4", a ?? "mt-12"),
        children: i
    })
}
const Mi = _e( () => ze( () => import("./k0cdb99z71ywjcnj.js"), __vite__mapDeps([5, 1, 2, 3, 6, 7])).then(n => n.GizmoKeepInSidebarMenuItem))
  , Ii = 4
  , Ke = we.div`font-bold mt-6`
  , wi = n => Vt({
    queryFn: async () => Pe.getAbout(n),
    queryKey: ["gizmo", "about", {
        gizmoId: n
    }]
})
  , _i = n => Vt({
    queryFn: async () => Pe.getCreatorSlice({
        creatorId: n
    }),
    queryKey: ["gizmo", "creator", {
        creatorId: n
    }],
    enabled: n != null
})
  , zi = n => {
    switch (n.type) {
    case ie.BROWSER:
        return {
            title: Z.browsing
        };
    case ie.PYTHON:
        return {
            title: Z.dataAnalysis
        };
    case ie.DALLE:
        return {
            title: Z.dalle
        };
    case ie.IMAGE_GEN:
        return {
            title: Z.imageGen
        };
    case ie.MEMORY:
        return {
            title: Z.memory,
            description: Z.memoryDescription
        };
    case ie.JIT_PLUGIN:
        return {
            title: Z.actions,
            description: Z.actionsDescription
        };
    default:
        return null
    }
}
  , Ti = ({tools: n}) => {
    const e = Ut()
      , s = e?.includes(Ie.SearchTool) && !e?.includes(Ie.SearchToolHoldout)
      , o = Xn(n ?? [], i => i.type);
    var a = Xs(o.map(zi).filter(i => i != null) ?? []);
    return a.length === 0 ? null : (s && (a = a.map(i => i.title === Z.browsing ? {
        title: Z.search
    } : i)),
    t.jsxs("div", {
        className: "flex flex-col",
        children: [t.jsx(Ke, {
            className: "mb-2",
            children: t.jsx(j, {
                id: "gizmo.about.capabilitiesHeader",
                defaultMessage: "Capabilities"
            })
        }), a.map(i => t.jsxs("div", {
            className: "flex flex-row items-start gap-2 py-1 text-sm",
            children: [t.jsx(Lt, {
                className: "icon-sm mt-0.5 text-green-600"
            }), t.jsxs("div", {
                children: [t.jsx(j, {
                    ...i.title
                }), i.description != null && t.jsx("div", {
                    className: "text-token-text-tertiary text-xs",
                    children: t.jsx(j, {
                        ...i.description
                    })
                })]
            })]
        }, i.title.id))]
    }))
}
  , Re = we.div`flex flex-col justify-center items-center gap-2 border-s border-token-border-heavy first:border-0 w-48 mt-4 px-2`
  , Le = we.div`flex flex-row items-center gap-1.5 pt-1 text-xl font-semibold text-center leading-none`
  , Ue = we.div`text-xs text-token-text-tertiary`
  , Pi = ({gizmoResource: n}) => t.jsxs(Te, {
    contentAlign: "end",
    sideOffset: 4,
    triggerButton: t.jsx(qe, {
        color: "ghost",
        icon: gt
    }),
    children: [t.jsx(Mi, {
        gizmoResource: n,
        location: "about_modal"
    }), t.jsx(ls, {
        gizmoResource: n
    })]
})
  , Gi = ({aboutBlock: n}) => {
    switch (n.type) {
    case "generic_title_subtitle":
        return t.jsxs(Re, {
            children: [t.jsx(Le, {
                children: n.title
            }), t.jsx(Ue, {
                children: n.subtitle
            })]
        });
    case "rating":
        return t.jsxs(Re, {
            children: [t.jsxs(Le, {
                children: [t.jsx(cs, {
                    className: "icon-sm"
                }), n.avg]
            }), t.jsx(Ue, {
                children: n.count_str
            })]
        });
    case "category":
        return n.category_ranking != null ? t.jsxs(Re, {
            children: [t.jsx(Le, {
                children: t.jsx(j, {
                    id: "gizmo.about.trendingRank",
                    defaultMessage: "#{rank}",
                    values: {
                        rank: n.category_ranking
                    }
                })
            }), t.jsx(Ue, {
                children: t.jsx(j, {
                    id: "gizmo.about.inCategory",
                    defaultMessage: "in {category} {locale}",
                    values: {
                        category: n.category_str,
                        locale: n.category_locale_str ?? ""
                    }
                })
            })]
        }) : t.jsxs(Re, {
            children: [t.jsx(Le, {
                children: n.category_str
            }), t.jsx(Ue, {
                children: t.jsx(j, {
                    id: "gizmo.about.category",
                    defaultMessage: "Category"
                })
            })]
        })
    }
}
  , Ni = ({blocks: n}) => t.jsx("div", {
    className: "flex justify-center",
    children: n.map(e => t.jsx(Gi, {
        aboutBlock: e
    }, e.type))
})
  , ki = ({href: n, onClick: e, children: s}) => t.jsx(Ht.div, {
    whileTap: {
        scale: .98
    },
    className: "flex",
    children: t.jsxs($t, {
        to: n,
        reloadDocument: !0,
        onClick: e,
        className: W("group border-token-border-medium bg-token-main-surface-primary hover:bg-token-main-surface-secondary relative ms-2 h-14 min-w-full grow rounded-xl border px-4 focus:outline-hidden"),
        children: [t.jsx("div", {
            className: "flex h-full items-center",
            children: t.jsx("div", {
                className: "line-clamp-2 text-sm break-all",
                children: s
            })
        }), t.jsx("div", {
            className: "border-token-border-medium bg-token-main-surface-primary group-hover:bg-token-main-surface-secondary absolute -start-2 -bottom-px h-3 w-4 border-b",
            children: t.jsx("div", {
                className: "border-token-border-medium bg-token-main-surface-primary h-3 w-2 rounded-ee-full border-e border-b"
            })
        }), t.jsx("div", {
            className: "absolute end-2 top-0 bottom-0 hidden items-center group-hover:flex",
            children: t.jsx("div", {
                className: "bg-token-main-surface-primary flex h-8 w-8 items-center justify-center rounded-lg",
                children: t.jsx(St, {
                    className: "icon text-token-text-primary"
                })
            })
        })]
    })
})
  , Ei = ({gizmo: n, onClose: e}) => {
    const s = B()
      , o = se(s, "1825130190")
      , a = n.gizmo.display.prompt_starters?.slice(0, Ii);
    return a == null || a.length === 0 || !o ? null : t.jsxs("div", {
        className: "flex flex-col",
        children: [t.jsx(Ke, {
            children: t.jsx(j, {
                id: "gizmo.about.conversationStartersHeader",
                defaultMessage: "Conversation Starters"
            })
        }), t.jsx("div", {
            className: "mt-4 grid grid-cols-2 gap-x-1.5 gap-y-2",
            children: a.map( (i, l) => t.jsx(Fi, {
                gizmo: n,
                prompt: i,
                onClick: e
            }, l))
        })]
    })
}
;
function Fi({gizmo: n, prompt: e, onClick: s}) {
    const o = B()
      , a = Zn(o, n, e);
    return t.jsx(ki, {
        href: a?.toString() ?? "#",
        onClick: s,
        children: e
    })
}
const Di = ({reviewStats: n}) => {
    const e = B();
    return se(e, "1825130190") ? t.jsxs("div", {
        className: "flex flex-col",
        children: [t.jsx("div", {
            className: "mb-2",
            children: t.jsx(Ke, {
                children: t.jsx(j, {
                    id: "gizmo.about.ratingsHeader",
                    defaultMessage: "Ratings"
                })
            })
        }), n != null ? [5, 4, 3, 2, 1].map(o => t.jsxs("div", {
            className: "flex flex-row items-center gap-2 py-1 text-xl font-semibold",
            children: [t.jsxs("div", {
                className: "icon-lg relative",
                children: [t.jsx(cs, {
                    className: "icon-lg text-green-500"
                }), t.jsx("div", {
                    className: "absolute inset-0 flex items-center justify-center text-[11px] text-white",
                    children: o
                })]
            }), t.jsx("div", {
                className: "h-2.5 grow overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700",
                children: t.jsx("div", {
                    className: "h-full bg-green-500",
                    style: {
                        width: `${(n?.by_rating[o - 1] ?? 0) * 100}%`
                    }
                })
            })]
        }, o)) : t.jsx("div", {
            className: "text-token-text-tertiary text-sm",
            children: t.jsx(j, {
                id: "gizmo.about.ratings.notEnoughRatings",
                defaultMessage: "Not enough ratings yet"
            })
        })]
    }) : null
}
  , Ai = ({gizmoId: n, creatorId: e}) => {
    const s = rs(Q.GPTDetails)
      , o = () => J.closeModal(Q.GPTDetails);
    return s ? t.jsx(Oi, {
        gizmoId: n,
        creatorId: e,
        onClose: o
    }) : null
}
  , Oi = ({gizmoId: n, creatorId: e, onClose: s, children: o}) => {
    const a = pt(n)
      , i = wi(n)
      , l = _i(e);
    return M.useEffect( () => {
        V.logEvent("Detail Show Modal", {
            gizmo_id: n
        })
    }
    , [n]),
    t.jsx(dt, {
        testId: "modal-gizmo-about",
        isOpen: !0,
        onClose: s,
        type: "success",
        hideSeparator: !0,
        showCloseButton: !0,
        noPadding: !0,
        className: "flex h-[calc(100vh-25rem)] min-h-[40vh] max-w-xl flex-col",
        children: t.jsx(Ri, {
            aboutQuery: i,
            gizmoQuery: a,
            creatorSliceQuery: l,
            onClose: s,
            children: o
        })
    })
}
  , Ri = ({aboutQuery: n, gizmoQuery: e, creatorSliceQuery: s, children: o, onClose: a}) => {
    const i = ee();
    if (n.isLoading || e.isLoading || s.isLoading)
        return t.jsx("div", {
            className: "flex h-40 items-center justify-center pb-10",
            children: t.jsx(Ft, {})
        });
    const l = n.data?.gizmo
      , r = s?.data
      , c = e?.data;
    if (!l || n.error || e.error || s.error || n.data == null || e.data == null || s.data == null || !c) {
        const m = mt(n.error ?? e.error ?? s.error) ?? i.formatMessage({
            id: "I3v3Oj",
            defaultMessage: "An error occurred loading this GPT."
        });
        return t.jsx("div", {
            className: "relative flex flex-col gap-2 overflow-hidden px-2 py-4",
            children: t.jsx("div", {
                className: "flex flex-col p-4 text-red-500",
                children: m
            })
        })
    }
    return t.jsx("div", {
        className: "flex h-full px-2 py-4",
        children: t.jsxs("div", {
            className: "relative flex grow flex-col gap-4 overflow-y-auto px-8 pt-16 pb-20",
            children: [t.jsx("div", {
                className: "absolute top-0",
                children: t.jsxs("div", {
                    className: "from-token-main-surface-primary fixed start-4 end-4 z-10 flex items-center justify-end bg-linear-to-b to-transparent pb-2",
                    children: [c && t.jsx(Pi, {
                        gizmoResource: c
                    }), t.jsx(Ks, {
                        onClick: a
                    })]
                })
            }), t.jsx("div", {
                className: "absolute bottom-[64px]",
                children: t.jsx("div", {
                    className: "from-token-main-surface-primary fixed start-4 end-4 z-10 flex min-h-[64px] items-end bg-linear-to-t to-transparent px-2",
                    children: o
                })
            }), t.jsx(js, {
                gizmo: c,
                className: "h-fit!",
                avatarClassName: "h-20! w-20!"
            }), t.jsx(Ni, {
                blocks: n.data.about_blocks
            }), t.jsx(Ei, {
                gizmo: c,
                onClose: a
            }), t.jsx(Ti, {
                tools: c.tools
            }), t.jsx(Di, {
                reviewStats: n.data.review_stats
            }), r && t.jsx(Li, {
                gizmos: r.items
            })]
        })
    })
}
;
function Li({gizmos: n}) {
    const e = B();
    return n.length === 0 ? null : t.jsxs("div", {
        className: "flex flex-col",
        children: [t.jsx("div", {
            className: "mb-2",
            children: t.jsx(Ke, {
                children: t.jsx(j, {
                    id: "gizmo.about.moreByHeader",
                    defaultMessage: "More by {creatorName}",
                    values: {
                        creatorName: n[0].gizmo.author.display_name
                    }
                })
            })
        }), t.jsx("div", {
            className: W("no-scrollbar group flex min-h-[104px] items-center space-x-2 overflow-x-auto overflow-y-hidden"),
            children: n?.map(s => t.jsx("a", {
                onClick: () => {
                    V.logEvent("Detail Click Gizmo", {
                        gizmo_id: s.gizmo.id
                    })
                }
                ,
                href: $e(e, s),
                className: "bg-token-main-surface-secondary h-fit min-w-fit rounded-xl px-1 py-4 md:px-3 md:py-4 lg:px-3",
                children: t.jsx(Yn, {
                    resource: s
                })
            }, s.gizmo.id))
        })]
    })
}
const ia = n => t.jsx("div", {
    className: "flex grow flex-col items-center",
    children: t.jsxs(qe, {
        color: "primary",
        className: "h-12 w-full",
        icon: St,
        ...n,
        children: [t.jsx(j, {
            id: "gizmo.about.startChat",
            defaultMessage: "Start Chat"
        }), n.children]
    })
})
  , Z = Wt({
    browsing: {
        id: "gizmo.about.tools.browsing",
        defaultMessage: "Browsing"
    },
    search: {
        id: "gizmo.about.tools.search",
        defaultMessage: "Web Search"
    },
    dataAnalysis: {
        id: "gizmo.about.tools.dataAnalysis",
        defaultMessage: "Code Interpreter & Data Analysis"
    },
    dalle: {
        id: "gizmo.about.tools.dalle",
        defaultMessage: "DALL·E Images"
    },
    imageGen: {
        id: "gizmo.about.tools.imageGen",
        defaultMessage: "4o Image Generation"
    },
    memory: {
        id: "gizmo.about.tools.memory",
        defaultMessage: "Memory"
    },
    actions: {
        id: "gizmo.about.tools.actions",
        defaultMessage: "Actions"
    },
    actionsDescription: {
        id: "gizmo.about.tools.actionsDescription",
        defaultMessage: "Retrieves or takes actions outside of ChatGPT"
    },
    memoryDescription: {
        id: "gizmo.about.tools.memoryDescription",
        defaultMessage: "Learns from previous chats to improve future conversations"
    }
});
function Ui(n, e, s) {
    const {data: o} = ct()
      , i = Ys(n).id
      , {modelLabel: l} = Go(i, o)
      , r = Jn()
      , c = No(n, r, void 0, e, s);
    return {
        modelLabel: l,
        dropdownSections: c
    }
}
function Bi({show: n, clientThreadId: e, gizmoHasCustomActions: s, preferredModelId: o}) {
    const {modelLabel: a, dropdownSections: i} = Ui(e, s, o);
    return n ? t.jsxs(S.Sub, {
        onOpenChange: l => {
            l && V.logEvent("GPTs: Breadcrumb Picker Model Picker Open")
        }
        ,
        children: [t.jsx(S.SubMenuTrigger, {
            children: t.jsxs("div", {
                className: "flex w-full items-center justify-between gap-1",
                children: [t.jsx(j, {
                    id: "ilkdMh",
                    defaultMessage: "Model"
                }), t.jsx("span", {
                    className: "text-token-text-secondary text-xs font-medium",
                    children: a
                })]
            })
        }), t.jsx(S.Portal, {
            children: t.jsx(S.SubContent, {
                onClick: () => {
                    V.logEvent("GPTs: Breadcrumb Picker Model Picker Select")
                }
                ,
                children: t.jsx(Po, {
                    sections: i
                })
            })
        })]
    }) : null
}
const $i = _e( () => ze( () => import("./k0cdb99z71ywjcnj.js"), __vite__mapDeps([5, 1, 2, 3, 6, 7])).then(n => n.GizmoKeepInSidebarMenuItem));
function Hi({children: n, clientThreadId: e, gizmoResource: s, showReportModal: o, inMobileHeader: a, showGizmoModelPicker: i}) {
    return t.jsxs(t.Fragment, {
        children: [t.jsx(Te, {
            contentAlign: a ? "center" : "start",
            size: "small",
            triggerButton: n,
            children: t.jsx(vs, {
                clientThreadId: e,
                gizmoResource: s,
                showReportModal: o,
                showGizmoModelPicker: i
            })
        }), t.jsx(qi, {
            gizmoResource: s
        })]
    })
}
function qi({gizmoResource: n}) {
    const e = rs(Q.GPTRemoveThirdParty)
      , s = Ot()
      , o = ds(n);
    return t.jsxs(t.Fragment, {
        children: [t.jsx(Ai, {
            gizmoId: n.gizmo.id,
            creatorId: n.gizmo.author.user_id
        }), t.jsx(mo, {
            gizmo: n
        }), o && t.jsx(uo, {
            gizmo: n
        }), o && t.jsx(xo, {
            gizmo: n
        }), t.jsx(go, {
            gpt: n,
            isOpen: e,
            onClose: () => J.closeModal(Q.GPTRemoveThirdParty),
            account: s
        })]
    })
}
function vs({clientThreadId: n, gizmoResource: e, showReportModal: s, showGizmoModelPicker: o}) {
    const {canEdit: a} = Qn(e)
      , {canCreate: i} = eo()
      , {canViewConfig: l} = to(e)
      , r = so(e.gizmo.id)
      , c = Ut()
      , m = no(e)
      , u = e.gizmo.share_recipient === Gt.Marketplace || e.gizmo.share_recipient === Gt.Link
      , d = !m && u
      , f = B()
      , h = se(f, "1825130190")
      , g = se(f, "3645668434")
      , b = h && !m && ds(e)
      , v = c?.includes(Ie.GizmoSupportEmails) && !m && e.gizmo.author.will_receive_support_emails && b
      , x = Zs()
      , p = Dt(n)
      , C = ms(Ie.WorkspaceShareLinks)
      , {isUnauthenticated: I} = Bt()
      , w = C && p && !I
      , z = be();
    return t.jsxs(t.Fragment, {
        children: [t.jsx(Bi, {
            show: o,
            clientThreadId: n,
            gizmoHasCustomActions: oo(e.tools),
            preferredModelId: e.gizmo.default_model ?? void 0
        }), t.jsx(S.Item, {
            onClick: () => {
                V.logNewChatButtonClicked({
                    location: "Gizmo information dropdown",
                    gizmo_id: e.gizmo.id
                }),
                us(z, `/g/${e.gizmo.short_url}`)
            }
            ,
            icon: io,
            children: t.jsx(j, {
                ...U.newChat
            })
        }), t.jsx(S.Item, {
            onClick: () => J.openModal(Q.GPTDetails),
            icon: Js,
            children: t.jsx(j, {
                ...U.about
            })
        }), e.tools?.find(T => T.type === ie.JIT_PLUGIN) && t.jsx(S.Item, {
            onClick: () => J.openModal(Q.GPTPrivacySettings),
            icon: Qs,
            children: t.jsx(j, {
                ...U.privacySettings
            })
        }), a && t.jsx(S.Item, {
            onClick: () => {
                z(r)
            }
            ,
            icon: en,
            children: t.jsx(j, {
                ...U.customize
            })
        }), !a && l && g && t.jsxs(t.Fragment, {
            children: [t.jsx(S.Item, {
                onClick: async () => {
                    z(`/g/${e.gizmo.id}/view`)
                }
                ,
                icon: ao,
                children: t.jsx(j, {
                    id: "GizmoInformation.viewGizmoLabel",
                    defaultMessage: "View configuration"
                })
            }), i && t.jsx(S.Item, {
                onClick: async () => {
                    const T = await Pe.copyGizmo({
                        gizmoId: e.gizmo.id
                    });
                    T.gizmo.id && z(`/gpts/editor/${T.gizmo.id}`)
                }
                ,
                icon: ro,
                children: t.jsx(j, {
                    id: "GizmoInformation.copyGizmoLabel",
                    defaultMessage: "Duplicate GPT"
                })
            })]
        }), t.jsx($i, {
            gizmoResource: e,
            location: "conversation_page"
        }), t.jsx(ls, {
            gizmoResource: e
        }), v && t.jsx(S.Item, {
            onClick: () => J.openModal(Q.GPTFeedbackEmail),
            icon: St,
            children: t.jsx(j, {
                ...U.feedbackEmail
            })
        }), b && t.jsx(S.Item, {
            onClick: () => J.openModal(Q.GPTReview),
            icon: lo,
            children: t.jsx(j, {
                ...U.reviewGPT
            })
        }), d && t.jsx(S.Item, {
            onClick: s,
            icon: xs,
            children: t.jsx(j, {
                ...U.reportGPT
            })
        }), w && t.jsx(S.Item, {
            onClick: () => J.openSharingModal(p),
            icon: gs,
            children: t.jsx(j, {
                ...U.shareChat
            })
        }), x && t.jsxs(t.Fragment, {
            children: [t.jsx(S.Separator, {}), t.jsx(S.Item, {
                color: "danger",
                onClick: () => J.openModal(Q.GPTRemoveThirdParty),
                icon: tn,
                children: t.jsx(j, {
                    defaultMessage: "Remove GPT from workspace",
                    id: "GizmoInformation.removeGPT"
                })
            })]
        }), c?.includes("debug") && t.jsxs(t.Fragment, {
            children: [t.jsx(S.Separator, {}), t.jsx(S.Item, {
                onClick: () => {
                    z(co(e))
                }
                ,
                children: "(Internal) See share page"
            })]
        })]
    })
}
const Vi = ({conversation: n, isActiveConversation: e, inMainScreen: s=!1, inChatWindow: o=!1, inOrla: a=!1}) => {
    const i = B()
      , l = n.id
      , r = n.gizmo_id
      , c = bt(r)
      , m = se(i, "3376455464")
      , u = se(i, "16480203")
      , d = sn(l)
      , f = ms(Ie.WorkspaceShareLinks)
      , {isUnauthenticated: h} = Bt()
      , g = f && d && !h && (!c || u)
      , b = fo()
      , [v,x] = M.useState(!!n.is_do_not_remember)
      , p = ee();
    let C = null;
    const {snorlaxes: I} = as();
    C = I;
    let w = null;
    c && C && (w = C.find( ({gizmo: k}) => k.gizmo.id === r)?.gizmo);
    const z = Kt()
      , T = ft()
      , {eligible: N, markAsViewed: L} = ho(po.ArchiveConversationOnboarding)
      , O = He()
      , F = be()
      , _ = async () => {
        await on.safePatch("/conversation/{conversation_id}", {
            parameters: {
                path: {
                    conversation_id: n.id
                }
            },
            requestBody: {
                is_archived: !0
            }
        }),
        Co(T, n.gizmo_id),
        Rt.logEvent("chatgpt_conversation_archived"),
        V.logEvent("Conversation Archived"),
        N && (O.info(p.formatMessage({
            defaultMessage: "You can view archived chats in Settings",
            id: "HistoryGizmoItem.archiveChatOnboarding"
        }), {
            duration: 10,
            hasCloseButton: !0
        }),
        L()),
        e && us(F)
    }
      , R = [g && !o && t.jsx(S.Item, {
        onClick: () => J.openSharingModal(d, "History Item Menu"),
        icon: gs,
        "data-testid": "share-chat-menu-item",
        children: t.jsx(j, {
            ...U.shareChat
        })
    }, "share"), !1, !o && !a && t.jsx(S.Item, {
        disabled: !d,
        onClick: () => {
            setTimeout( () => {
                d && Qt.publish({
                    kind: s ? "editTitleInMainScreen" : "editTitle",
                    serverThreadId: d
                })
            }
            , 100)
        }
        ,
        icon: ht,
        children: t.jsx(j, {
            ...U.renameChat
        })
    }, "rename"), b && C && C?.length > 0 && nn(r) && d && t.jsxs(qt.Fragment, {
        children: [c && t.jsxs(t.Fragment, {
            children: [C.length > 1 && t.jsxs(S.Sub, {
                children: [t.jsx(S.SubMenuTrigger, {
                    icon: rt,
                    children: t.jsx(j, {
                        ...y.moveConversationToSnorlax
                    })
                }), t.jsx(S.Portal, {
                    children: t.jsx(S.SubContent, {
                        children: t.jsx(Et, {
                            inSidebarFlyout: !1,
                            onUpdateConversationGizmo: k => z({
                                newGizmoId: k,
                                conversation: n,
                                previousGizmoId: r ?? null
                            }),
                            currentGizmoId: r
                        })
                    })
                })]
            }), t.jsx(S.Item, {
                onClick: () => {
                    z({
                        newGizmoId: null,
                        conversation: n,
                        previousGizmoId: r ?? null
                    })
                }
                ,
                icon: jo,
                children: t.jsx("div", {
                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                    children: t.jsx(j, {
                        ...y.removeConversationFromSnorlax,
                        values: {
                            projectName: w?.gizmo.display.name ?? "project"
                        }
                    })
                })
            })]
        }), !c && t.jsxs(S.Sub, {
            children: [t.jsx(S.SubMenuTrigger, {
                icon: rt,
                children: p.formatMessage(y.addConversationToSnorlax)
            }), t.jsx(S.Portal, {
                children: t.jsx(S.SubContent, {
                    children: t.jsx(Et, {
                        inSidebarFlyout: !1,
                        onUpdateConversationGizmo: k => z({
                            newGizmoId: k,
                            conversation: n,
                            previousGizmoId: r ?? null
                        })
                    })
                })
            })]
        })]
    }, "snorlax")].filter(Boolean);
    return t.jsxs(t.Fragment, {
        children: [R, R.length > 0 && t.jsx(S.Separator, {}), t.jsx(vo, {
            children: ({openScheduleModal: k, isScheduled: P, isSchedulable: A}) => A || P ? t.jsx(S.Item, {
                onClick: k,
                disabled: !d,
                icon: bo,
                children: t.jsx(j, {
                    ...P ? U.editSchedule : U.scheduleTask
                })
            }) : null
        }), t.jsx(S.Item, {
            disabled: !d,
            onClick: () => {
                d && _()
            }
            ,
            icon: So,
            children: t.jsx(j, {
                ...U.archiveChat
            })
        }), !1, m && o && t.jsx(S.Item, {
            icon: xs,
            onClick: () => {
                J.openModal(Q.ReportConversation)
            }
            ,
            children: r ? t.jsx(j, {
                id: "thread.reportConversation",
                defaultMessage: "Report conversation"
            }) : t.jsx(j, {
                id: "thread.report",
                defaultMessage: "Report"
            })
        }), t.jsx(S.Item, {
            color: "danger",
            disabled: !d,
            onClick: () => {
                d && Ve(i, yo, {
                    serverThreadId: d,
                    isActiveConversation: e
                })
            }
            ,
            icon: is,
            "data-testid": "delete-chat-menu-item",
            children: t.jsx(j, {
                ...U.deleteChat
            })
        })]
    })
}
;
function Wi({clientThreadId: n, gizmoId: e, conversationTitle: s, conversationAsyncStatus: o, isDoNotRemember: a}) {
    return {
        id: n,
        title: s ?? "",
        create_time: null,
        update_time: null,
        conversation_template_id: null,
        async_status: o ?? null,
        gizmo_id: e ?? null,
        snippet: null,
        is_do_not_remember: a
    }
}
const Ki = ({conversation: n, children: e, isActiveConversation: s, onOpenChange: o, inMainScreen: a=!1, inChatWindow: i=!1, inOrla: l=!1, ...r}) => {
    const [c,m] = M.useState(!1);
    return t.jsx(Te, {
        ...r,
        open: c,
        onOpenChange: u => {
            m(u),
            o?.(u)
        }
        ,
        side: "bottom",
        contentAlign: i ? "end" : "start",
        alignOffset: i ? 0 : -8,
        sideOffset: i ? 0 : -4,
        triggerButton: e,
        size: "auto",
        children: c && t.jsx(Vi, {
            conversation: n,
            inMainScreen: a,
            isActiveConversation: s,
            inChatWindow: i,
            inOrla: l
        })
    })
}
  , U = Wt({
    newChat: {
        defaultMessage: "New chat",
        id: "GizmoInformation.newChat"
    },
    about: {
        defaultMessage: "About",
        id: "GizmoInformation.about"
    },
    privacySettings: {
        defaultMessage: "Privacy settings",
        id: "GizmoInformation.privacySettings"
    },
    viewDetails: {
        defaultMessage: "View details",
        id: "GizmoInformation.viewDetails"
    },
    share: {
        defaultMessage: "Share",
        id: "GizmoInformation.share"
    },
    favorite: {
        defaultMessage: "Favorite",
        id: "GizmoInformation.favorite"
    },
    customize: {
        defaultMessage: "Edit GPT",
        id: "GizmoInformation.customize"
    },
    feedbackEmail: {
        defaultMessage: "Send feedback",
        id: "GizmoInformation.feedbackEmail"
    },
    reviewGPT: {
        defaultMessage: "Review GPT",
        id: "GizmoInformation.reviewGPT"
    },
    report: {
        defaultMessage: "Report",
        id: "GizmoInformation.report"
    },
    reportGPT: {
        defaultMessage: "Report GPT",
        id: "GizmoInformation.reportGPT"
    },
    privacy: {
        defaultMessage: "Privacy",
        id: "GizmoInformation.privacy"
    },
    deleteChat: {
        defaultMessage: "Delete",
        id: "GizmoInformation.deleteChat.0"
    },
    debugChat: {
        defaultMessage: "(Internal) Debug",
        id: "GizmoInformation.debugChat"
    },
    renameChat: {
        defaultMessage: "Rename",
        id: "GizmoInformation.renameChat"
    },
    scheduleTask: {
        id: "7e1pG9",
        defaultMessage: "Schedule"
    },
    editSchedule: {
        id: "qzM4nO",
        defaultMessage: "Edit schedule"
    },
    archiveChat: {
        defaultMessage: "Archive",
        id: "GizmoInformation.archiveChat.0"
    },
    shareChat: {
        defaultMessage: "Share",
        id: "GizmoInformation.shareChat"
    },
    shareChatLong: {
        defaultMessage: "Share chat",
        id: "GizmoInformation.shareChatLong"
    }
})
  , aa = Object.freeze(Object.defineProperty({
    __proto__: null,
    GizmoConversationOptionsDropdown: Ki,
    GizmoInformationDropdown: Hi,
    GizmoInformationDropdownItems: vs,
    buildConversationResponse: Wi
}, Symbol.toStringTag, {
    value: "Module"
}));
export {Oi as G, Et as S, ia as a, Wi as b, Ki as c, js as d, oa as e, na as f, Ui as g, aa as h, Ct as u};
//# sourceMappingURL=btouzu0b6h5eiejj.js.map
