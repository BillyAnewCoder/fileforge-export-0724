import {h as ae, r as x, j as t, A as Se, M as ve, a as we, f as ye} from "./juy90og0wtbp77qa.js";
import {u as H} from "./o6wb3ptvu0bk81yq.js";
import {u as Me, I as je, R as Ee} from "./jsgl3b1bt1ozctr5.js";
import {b$ as c, g_ as ne, a2 as _, aX as Ie, dC as Fe, c0 as Ne, fs as Be, ft as We, w as Ae, x as E, y as Re, W as U, bZ as ee, b_ as se, dD as Le, g$ as Oe, h0 as Pe, h1 as De, ev as _e, h2 as He, h3 as Qe, h4 as qe, h5 as Ge, h6 as Ke, h7 as Ve, h8 as $e, h9 as Xe, ha as ze, hb as Ze} from "./ckp56qklot786ulr.js";
import {aV as Je, iE as Ye, hb as Ue, dv as es, e as Q, f as F, l as oe, dG as ss, aG as ts, ag as as, d as I, ar as ns} from "./dc2xxjkicf2pz0mj.js";
function re({isFollowUp: o, hasComments: r}) {
    const d = c(a => a.getRateLimit()?.remaining === 0)
      , u = c( ({environmentId: a}) => a)
      , e = c( ({branch: a}) => a)
      , h = H()
      , f = !Je(h.isEmpty$) || r
      , {isConnected: C, error: S} = Ye(es.GITHUB_CONNECTOR, "github", "/codex", Ue.CODEX);
    return d ? "rate-limit" : !u && !e && !o ? "no-environment" : !o && !C ? "no-github-connection" : !o && S ? "connect-github-error" : f ? "enabled" : "no-content"
}
function os({taskId: o, turnId: r, followUpSuggestions: d, hasComments: u, isSubmitting: e, onSuggestionClick: h, children: g}) {
    Q();
    const f = is()
      , C = ae()
      , [S,a] = x.useState(null)
      , m = re({
        isFollowUp: !0,
        hasComments: u
    });
    let w = ne(m);
    m === "no-content" && (w = void 0);
    const v = !(f === "hidden" || !d.length) && o && r;
    return x.useEffect( () => {
        v && _.recordFollowUpsSeen(o, r, d.length)
    }
    , [v, o, r, d.length]),
    v ? t.jsxs("div", {
        className: "bg-token-bg-tertiary flex flex-col gap-1.5 rounded-2xl p-2",
        children: [t.jsx(Se, {
            initial: !1,
            children: f === "visible" && t.jsx("div", {
                className: "flex flex-col",
                inert: e,
                children: d.map( (y, p) => t.jsx(rs, {
                    index: p,
                    taskId: o,
                    turnId: r,
                    suggestion: y.suggestion,
                    disabledReason: w,
                    loading: S === p && e,
                    onClick: () => {
                        e || (a(p),
                        h(y.suggestion))
                    }
                }, p))
            })
        }), f === "collapsed" && t.jsxs("button", {
            type: "button",
            className: "text-token-text-tertiary enabled:hover:text-token-text-secondary focus:bg-token-bg-secondary flex items-center gap-2 rounded-lg p-2 text-xs font-semibold focus:outline-none",
            "aria-label": C.formatMessage({
                id: "wham.followUpContainer.showSuggestions",
                defaultMessage: "Show follow up suggestions"
            }),
            onClick: () => {
                _.recordFollowUpsExpanded(o, r)
            }
            ,
            children: [t.jsx(Ie, {
                className: "icon-sm"
            }), t.jsx(ve, {
                id: "wham.composer.followup.show",
                defaultMessage: "Suggestions"
            }, "text")]
        }, "collapsed"), g({
            isWrappedByContainer: !0
        })]
    }) : g({
        isWrappedByContainer: !1
    })
}
function rs({taskId: o, turnId: r, index: d, suggestion: u, disabledReason: e, loading: h, onClick: g}) {
    return t.jsx(ss, {
        side: "right",
        sideOffset: 10,
        label: e,
        children: t.jsxs("button", {
            type: "button",
            disabled: !!e || h,
            className: "group hover:bg-token-bg-secondary focus:bg-token-bg-secondary -disabled:cursor-pointer flex w-full items-start gap-1.5 rounded-lg px-2 py-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            onClick: () => {
                g(),
                _.recordFollowUpsClicked(o, r, d, u.severity)
            }
            ,
            children: [t.jsx("span", {
                className: "pt-[0.125rem]",
                children: h ? t.jsx(ts, {
                    className: "text-token-text-tertiary icon-sm"
                }) : t.jsx(Fe, {
                    className: "text-token-text-tertiary icon-sm"
                })
            }), t.jsx("span", {
                className: "text-token-text-primary line-clamp-2 text-start text-sm leading-snug break-words",
                children: u.title
            })]
        })
    })
}
function is() {
    const o = Q()
      , r = F(o, "3485296344") || void 0
      , d = H()
      , {isExpanded: u} = oe(d.store);
    return r ? u ? "collapsed" : "visible" : "hidden"
}
function fs({disableAutoFocus: o=!1, isBigBoxMode: r=!1, disableDuringSubmit: d=!1, expanded: u, followUp: e, onClearComments: h, onSubmit: g, onSuccess: f, attemptIndex: C, ariaLabel: S}) {
    const a = ae()
      , m = as()
      , {refetch: w} = Ne()
      , {refetch: v} = Be(e?.taskId)
      , {refetch: y} = We(e?.taskId)
      , p = c( ({environmentId: s}) => s)
      , q = c( ({branch: s}) => s)
      , G = c( ({addTurnToTaskMap: s}) => s)
      , [ie,ce] = x.useState(!0)
      , [M,K] = x.useState(!1)
      , de = c(s => s.bestOfN)
      , le = c(s => s.setBestOfN)
      , [ue,me] = x.useState(1)
      , N = e ? ue : de
      , he = e ? me : le
      , ge = c(s => s.imageSnapshot)
      , B = Q()
      , W = F(B, "3492040717")
      , fe = F(B, "879591222") || void 0
      , V = F(B, "3536244140")
      , [pe,$] = x.useState(!1)
      , l = H()
      , {whisperControls: xe, waveContainerRef: Ce} = Me({
        composerController: l,
        composerType: "codex"
    })
      , {controlsDisabled: A, waveformData: X, waveWidth: be, isExpanded: R} = oe(l.store)
      , z = c(s => s.getRateLimit()?.remaining === 0)
      , b = z && !!e
      , j = !!e && (e.comments.length ?? 0) > 0;
    Ae([{
        key: "focusComposer",
        action: () => l.focus(),
        actionMessageDescriptor: a.formatMessage({
            id: "wham.keyboardActions.focusComposer",
            defaultMessage: "Focus chat"
        }),
        group: Re.Chat,
        keyboardBinding: [E.Shift, E.Escape],
        altKeyboardBindings: e ? void 0 : [[E.Mod, E.Shift, "o"]]
    }]);
    const Z = re({
        isFollowUp: !!e,
        hasComments: j
    })
      , J = ne(Z)
      , L = !!J || M && d
      , {mutate: k, isPending: ke} = we({
        mutationFn: async ({runEnvironmentInQaMode: s, promptOverride: D}={
            runEnvironmentInQaMode: !1
        }) => {
            const T = D ?? l.getContentToSend().content;
            if (!(!!T.length || j))
                throw new Error("No content to submit");
            if (g?.(),
            K(!0),
            e)
                return await U.createFollowUpTask(e.taskId, e.turnId, T, e.comments, s, W ? N : void 0).catch(n => {
                    throw D || l.setText(T),
                    n instanceof I && n.status === 429 ? m.danger(a.formatMessage(te.rateLimit), {
                        id: e.turnId,
                        duration: 5,
                        hasCloseButton: !0
                    }) : n instanceof ee ? se(n, e.turnId, a, m) : n instanceof I && n.status === 403 && n.detail?.toLowerCase().includes("multi-factor authentication") ? $(!0) : m.danger(a.formatMessage({
                        id: "wham.whamComposer.failedToCreateFollowUpTask",
                        defaultMessage: "Failed to create follow-up"
                    }), {
                        id: e.turnId,
                        duration: 5,
                        hasCloseButton: !0
                    }),
                    n
                }
                );
            {
                if (q) {
                    if (!p)
                        throw new Error("Environment is required for new tasks.")
                } else
                    throw new Error("Branch is required");
                ce(!1);
                const n = crypto.randomUUID();
                return c.getState().addPendingTaskId(n),
                U.createNewTask(p, q, T, s, W ? N : void 0, ge).catch(i => {
                    throw c.getState().removePendingTaskId(n),
                    D || (l.getContentToSend().content.length ? (m.danger(a.formatMessage({
                        id: "wham.whamComposer.failedToCreateTaskCopyToClipboard",
                        defaultMessage: "Failed to create task. Previous prompt copied to clipboard."
                    }), {
                        id: n,
                        duration: 5,
                        hasCloseButton: !0
                    }),
                    navigator.clipboard.writeText(T)) : l.setText(T)),
                    i
                }
                ).catch(i => {
                    throw i instanceof I && i.status === 429 ? m.danger(a.formatMessage(te.rateLimit), {
                        id: n,
                        duration: 5,
                        hasCloseButton: !0
                    }) : i instanceof ee ? se(i, n, a, m) : i instanceof I && i.status === 403 && i.detail?.toLowerCase().includes("multi-factor authentication") ? $(!0) : m.danger(a.formatMessage({
                        id: "wham.whamComposer.failedToCreateTask",
                        defaultMessage: "Failed to create task"
                    }), {
                        id: n,
                        duration: 5,
                        hasCloseButton: !0
                    }),
                    i
                }
                ).then(i => (c.getState().assignPendingTaskToFinalTask(n, i.task.id),
                c.getState().setRateLimit(i.rate_limit),
                i))
            }
        }
        ,
        onSuccess: s => {
            G(s.task.id, s.turn),
            s.user_turn && G(s.task.id, s.user_turn),
            f?.(s),
            setTimeout( () => {
                l.focus()
            }
            , 0),
            v(),
            w(),
            e && y()
        }
        ,
        onSettled: () => {
            K(!1)
        }
    });
    x.useEffect( () => {
        if (!L)
            return l.subscribe("keydown", s => {
                s.metaKey && s.key === "Enter" ? k({
                    runEnvironmentInQaMode: !1
                }) : s.altKey && s.key === "Enter" && k({
                    runEnvironmentInQaMode: !0
                })
            }
            )
    }
    , [l, k, L]);
    const Y = Le(e ? [e.turnStatus, ...e.siblingTurnStatuses] : [], s => s === "pending" || s === "in_progress" ? 1 : 0)
      , O = !!e && fe && Y > 0;
    let P;
    V ? P = !A && Z !== "no-content" && !O : P = !O;
    const Te = (e?.siblingTurnStatuses?.length ?? 0) > 1 && C ? a.formatMessage({
        id: "wham.whamComposer.followUpOnTurn",
        defaultMessage: "Follow-up on version {version}"
    }, {
        version: C
    }) : a.formatMessage({
        id: "wham.whamComposer.requestChangesOrAskAQuestion",
        defaultMessage: "Request changes or ask a question"
    });
    return t.jsx(os, {
        taskId: e?.taskId,
        turnId: e?.turnId,
        followUpSuggestions: e?.followUpSuggestions ?? [],
        hasComments: j,
        isSubmitting: M,
        onSuggestionClick: s => {
            k({
                runEnvironmentInQaMode: !1,
                promptOverride: s.body
            })
        }
        ,
        children: ({isWrappedByContainer: s}) => t.jsxs("div", {
            className: "contents",
            inert: d && M || b,
            children: [t.jsxs(Oe, {
                expanded: b ? !1 : u,
                canCollapseWithInput: s,
                isTemporaryChat: !1,
                shouldUseTightRadius: s,
                onSubmit: () => {
                    ke || k({
                        runEnvironmentInQaMode: !1
                    })
                }
                ,
                composerController: l,
                ariaLabel: S ?? a.formatMessage({
                    id: "wham.whamComposer.ariaLabel",
                    defaultMessage: "Codex composer"
                }),
                children: [t.jsx(Pe, {
                    children: t.jsx(De, {
                        composerController: l,
                        enabled: r && !b && R,
                        children: A ? X ? t.jsx("div", {
                            className: "max-w-full min-w-0 flex-1",
                            ref: Ce,
                            children: t.jsx(_e, {
                                className: ns("h-14", r && !b && R ? "mt-12" : void 0),
                                waveform: X,
                                containerWidth: be,
                                scaleFactor: 10,
                                initialValue: je
                            })
                        }) : null : t.jsx(Ee, {
                            composerController: l,
                            disableAutoFocus: o || z,
                            textareaMaxHeightClassName: e ? "max-h-[max(10rem,min(calc(100dvh-29rem),10rem))]" : "max-h-[max(10rem,min(calc(100dvh-29rem),50dvh))]",
                            placeholder: e ? Te : ie ? a.formatMessage({
                                id: "wham.whamComposer.describeACodingTask",
                                defaultMessage: "Describe a task"
                            }) : a.formatMessage({
                                id: "wham.whamComposer.describeAnotherCodingTask",
                                defaultMessage: "Describe another task"
                            })
                        })
                    })
                }), j && t.jsx(He, {
                    children: t.jsx(Qe, {
                        comments: e.comments,
                        onClearComments: h
                    })
                }), !A && t.jsx(qe, {
                    children: t.jsxs("div", {
                        className: "flex gap-2",
                        children: [!e && t.jsx(Ge, {}), W && t.jsx(Ke, {
                            attempts: N,
                            setAttempts: he
                        })]
                    })
                }), t.jsxs(Ve, {
                    children: [R && !b && t.jsxs(t.Fragment, {
                        children: [V && t.jsx("div", {
                            inert: M,
                            children: xe
                        }), P && t.jsx($e, {
                            isSubmitDisabled: L,
                            createTask: k,
                            disabledReason: J
                        }), O && t.jsx(Xe, {
                            taskId: e.taskId,
                            turnId: e.turnId,
                            hasMultipleInProgressOrStreamingTurns: Y > 1
                        })]
                    }), b && t.jsx(ze, {})]
                })]
            }), pe && t.jsx(Ze, {})]
        })
    })
}
const te = ye({
    rateLimit: {
        id: "wham.whamComposer.failedToCreateTaskRateLimit",
        defaultMessage: "Codex is busy right now. Please try again later."
    }
});
export {fs as W};
//# sourceMappingURL=dq2hdjj12gdqq0p1.js.map
