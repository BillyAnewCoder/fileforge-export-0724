import {e as W, j as e, M as d, m as q, r as j, h as w, u as D, d as H, a as Q} from "./juy90og0wtbp77qa.js";
import {hx as Y, hy as K, eS as P, hz as $, eT as J, hA as V, a5 as g, hB as E, a6 as X, bA as Z, e9 as ee} from "./ckp56qklot786ulr.js";
import {P as h, ar as _, dG as L, gb as se, fQ as te, ag as F, B as U, C as A, by as B, R as N, a7 as oe, aC as re, hG as ae, aF as p} from "./dc2xxjkicf2pz0mj.js";
import {t as ne} from "./o5pq53dj48f3y717.js";
const ie = 80
  , T = 100;
function le(t) {
    return t < T ? "bg-[#fcf6e0] text-yellow-500 dark:bg-yellow-600 dark:text-yellow-100" : "bg-[rgba(229,76,66,0.16)] text-[#DC2626] dark:bg-[rgba(202,58,49,0.16)] dark:text-[#DC2626]"
}
function O(t) {
    return K() && t != null && t > ie
}
function de({memoryFullPct: t, className: n, children: r, showInfoLabel: a, onManageMemories: i}) {
    return O(t) ? e.jsx("div", {
        className: _("border-token-border-default rounded-lg border p-1 text-sm", n),
        children: e.jsxs(q.div, {
            className: _("flex items-center overflow-hidden rounded-sm px-2 py-1.5 whitespace-nowrap", le(t)),
            initial: {
                width: 0
            },
            animate: {
                width: `${t}%`
            },
            transition: {
                duration: .5
            },
            children: [e.jsx(d, {
                id: "6D2etG",
                defaultMessage: "{memoryFullPct}% full",
                values: {
                    memoryFullPct: t
                }
            }), r, a && e.jsx(L, {
                interactive: !0,
                label: t < T ? e.jsx("div", {
                    className: "whitespace-normal",
                    children: e.jsx(d, {
                        id: "gxY4wi",
                        defaultMessage: "ChatGPT's almost out of space for new saved memories. <memoryModalLink>Manage saved memories</memoryModalLink> to create more space.",
                        values: {
                            memoryModalLink: o => e.jsx("a", {
                                href: "#",
                                className: "cursor-pointer underline",
                                onClick: m => {
                                    m.preventDefault(),
                                    i?.()
                                }
                                ,
                                children: o
                            })
                        }
                    })
                }) : e.jsx("div", {
                    className: "whitespace-normal",
                    children: e.jsx(d, {
                        id: "1JxMf3",
                        defaultMessage: "ChatGPT's out of space for saved memories. <memoryModalLink>Manage saved memories</memoryModalLink> to create more space.",
                        values: {
                            memoryModalLink: o => e.jsx("a", {
                                href: "#",
                                className: "cursor-pointer underline",
                                onClick: m => {
                                    m.preventDefault(),
                                    i?.()
                                }
                                ,
                                children: o
                            })
                        }
                    })
                }),
                children: e.jsx(se, {
                    className: "icon-sm ms-1"
                })
            })]
        })
    }) : null
}
function me({memoryFullPct: t, className: n}) {
    const r = O(t)
      , a = Y()
      , i = W();
    if (!r)
        return null;
    a && h.logEventWithStatsig("Memory Full Warning Upsell Shown", "chatgpt_memory_full_warning_upsell_shown_memory_modal");
    const s = e.jsx("a", {
        href: "#",
        className: "cursor-pointer underline",
        onClick: o => {
            o.preventDefault(),
            h.logEventWithStatsig("Memory Full Warning Upsell Clicked", "chatgpt_memory_full_warning_upsell_clicked_memory_modal"),
            te(i, "MemoryUsageWarning Memory Modal Upsell")
        }
        ,
        children: e.jsx(d, {
            id: "djYoOr",
            defaultMessage: "ChatGPT Plus"
        })
    });
    return e.jsxs("div", {
        className: _("flex flex-col gap-2", n),
        children: [e.jsx(de, {
            memoryFullPct: t
        }), e.jsx("div", {
            className: "text-token-text-secondary ps-3 text-sm",
            children: t < T ? a ? e.jsx(d, {
                id: "2Gnp5W",
                defaultMessage: "<strong>Almost full.</strong> Once full, new memories won't be saved. You can remove existing memories to make room, or get 4x more space with {upsellLink}.",
                values: {
                    strong: o => e.jsx("strong", {
                        children: o
                    }),
                    upsellLink: s
                }
            }) : e.jsx(d, {
                id: "SnInO0",
                defaultMessage: "<strong>Almost full.</strong> Once full, new memories won't be saved. You can remove existing memories to make room.",
                values: {
                    strong: o => e.jsx("strong", {
                        children: o
                    })
                }
            }) : a ? e.jsx(d, {
                id: "VfmXw+",
                defaultMessage: "<strong>You’re out of space.</strong> Remove existing memories to make room for ChatGPT to save new memories, or get 4x more space with {upsellLink}.",
                values: {
                    strong: o => e.jsx("strong", {
                        children: o
                    }),
                    upsellLink: s
                }
            }) : e.jsx(d, {
                id: "fSy74S",
                defaultMessage: "<strong>You’re out of space.</strong> Remove existing memories to make room for ChatGPT to save new memories.",
                values: {
                    strong: o => e.jsx("strong", {
                        children: o
                    })
                }
            })
        })]
    })
}
function R({description: t, onClose: n, onConfirm: r}) {
    const a = w();
    return e.jsx(A, {
        testId: "modal-confirm-reset-memory",
        isOpen: !0,
        onClose: n,
        type: "success",
        title: a.formatMessage({
            id: "MemoriesModal.resetModalTitle",
            defaultMessage: "Are you sure?"
        }),
        description: t,
        primaryButton: e.jsx(B.Button, {
            title: a.formatMessage({
                id: "MemoriesModal.resetModalConfirm",
                defaultMessage: "Clear memory"
            }),
            color: "danger",
            onClick: r,
            "data-testid": "confirm-reset-memories-button"
        }),
        secondaryButton: e.jsx(B.Button, {
            title: a.formatMessage({
                id: "MemoriesModal.resetModalCancel",
                defaultMessage: "Cancel"
            }),
            color: "secondary",
            onClick: n
        })
    })
}
function ce({onReset: t, gizmoId: n, memoryName: r}) {
    const [a,i] = j.useState(!1)
      , s = w()
      , o = F()
      , m = P()
      , c = async () => {
        h.logEvent("Memory Manage Reset Button Confirmed");
        try {
            await N.safeDelete("/settings/clear_account_user_memory", {
                requestBody: {
                    gizmo_id: n
                }
            }),
            o.success(s.formatMessage({
                id: "ResetMemoriesButton.resetSuccess",
                defaultMessage: "Memory cleared."
            })),
            t?.(),
            i(!1)
        } catch {
            o.danger({
                id: "ResetMemoriesButton.resetFailed",
                defaultMessage: "Failed to clear memory.",
                description: "Error message for the reset memory modal"
            }, {
                toastId: "reset_memories_button_reset_failed"
            })
        }
    }
    ;
    return e.jsxs(e.Fragment, {
        children: [e.jsx(U, {
            color: "danger-outline",
            onClick: () => {
                h.logEvent("Memory Manage Reset Button Clicked"),
                i(!0)
            }
            ,
            "data-testid": "reset-memories-button",
            children: n ? e.jsx(d, {
                id: "ResetMemoriesButton.resetGizmo",
                defaultMessage: "Clear this GPT's memory"
            }) : e.jsx(d, {
                id: "ResetMemoriesButton.resetChatGPT",
                defaultMessage: "Delete all"
            })
        }), a && (m ? e.jsx(R, {
            description: s.formatMessage({
                id: "MemoriesModal.resetGizmoModalDescriptionUpdated",
                defaultMessage: "Deleting your saved memories means {name} may not remember this information going forward. To fully remove this information from {name}'s memory, please delete any related chats. <link>Learn more</link>"
            }, {
                name: r,
                link: u => e.jsx("a", {
                    className: "underline",
                    href: "https://help.openai.com/en/articles/8983136-what-is-memory",
                    children: u
                })
            }),
            onClose: () => i(!1),
            onConfirm: c
        }) : e.jsx(R, {
            description: s.formatMessage({
                id: "MemoriesModal.resetGizmoModalDescription",
                defaultMessage: "{name} will forget everything it has remembered from your chats. This cannot be undone."
            }, {
                name: r
            }),
            onClose: () => i(!1),
            onConfirm: c
        }))]
    })
}
function ue({gizmo: t, memory: n}) {
    const r = w()
      , a = F()
      , i = D()
      , {mutate: s, isPending: o} = Q({
        mutationFn: async M => {
            const {success: v} = await N.safeDelete("/memories/{memory_id}", {
                parameters: {
                    path: {
                        memory_id: M
                    }
                },
                requestBody: {
                    gizmo_id: t?.id
                }
            });
            if (!v)
                throw new Error("An error occurred while deleting the memory")
        }
        ,
        onSettled: () => {
            i.invalidateQueries({
                queryKey: E(t?.id)
            })
        }
        ,
        onError: () => {
            a.danger({
                id: "MemoriesModal.deleteFailed",
                defaultMessage: "Failed to forget memory",
                description: "Toast message when deleting memory fails"
            }, {
                id: "memoryDeleteFailed",
                toastId: "memory_delete_failed"
            })
        }
    })
      , [m,c] = j.useState(!1)
      , u = r.formatMessage({
        id: "N0czuB",
        defaultMessage: "Remove"
    });
    return e.jsxs(e.Fragment, {
        children: [e.jsxs(g.Row, {
            disabled: o,
            children: [e.jsx(g.Cell, {
                children: e.jsx("div", {
                    className: "py-2 whitespace-pre-wrap",
                    children: n.content
                })
            }), e.jsx(g.Cell, {
                textAlign: "right",
                children: e.jsx(g.Actions, {
                    children: e.jsx("button", {
                        onClick: () => {
                            h.logEvent("Memory Manage Modal Memory Delete Clicked"),
                            c(!0)
                        }
                        ,
                        "aria-label": u,
                        className: "text-token-text-tertiary hover:text-token-text-secondary",
                        children: e.jsx(L, {
                            className: "leading-none",
                            label: u,
                            side: "top",
                            children: e.jsx(X, {
                                className: "icon-sm"
                            })
                        })
                    })
                })
            })]
        }), m && e.jsx(ae, {
            isOpen: !0,
            primaryButtonColor: "danger",
            title: u,
            confirmText: r.formatMessage({
                id: "fCn0ar",
                defaultMessage: "Forget"
            }),
            onConfirm: () => {
                h.logEvent("Memory Manage Modal Memory Delete Confirmed"),
                s(n.id),
                c(!1)
            }
            ,
            onClose: () => {
                c(!1)
            }
            ,
            children: e.jsx(d, {
                id: "j2cZHW",
                defaultMessage: 'Remove "{title}" from {name}’s saved memories. This can’t be undone. <link>Learn more</link>',
                values: {
                    name: t?.name ?? "ChatGPT",
                    title: e.jsx("strong", {
                        children: ne(n.content, {
                            length: 130,
                            omission: "..."
                        })
                    }),
                    link: M => e.jsx("a", {
                        href: "https://help.openai.com/en/articles/8590148-memory-faq",
                        target: "_blank",
                        className: "underline",
                        rel: "noreferrer",
                        children: M
                    })
                }
            })
        })]
    })
}
function he({selectedGizmoId: t, onSelect: n, items: r}) {
    const a = r.find(s => s.id === t);
    function i(s) {
        return e.jsx(ee, {
            isFirstParty: s.id === void 0,
            src: s.iconUrl ?? null,
            className: "icon"
        })
    }
    return e.jsx("div", {
        className: "border-token-border-medium mb-2 inline-flex rounded-md border",
        children: e.jsxs(p.Root, {
            children: [e.jsx(p.Trigger, {
                children: e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [a ? e.jsxs(e.Fragment, {
                        children: [i(a), e.jsx("span", {
                            className: "text-token-text-primary",
                            children: a.name
                        })]
                    }) : e.jsx(d, {
                        id: "MemoriesModal.unknownGizmo",
                        defaultMessage: "Unknown GPT"
                    }), e.jsx(Z, {
                        className: "icon-sm text-token-text-tertiary"
                    })]
                })
            }), e.jsx(p.Portal, {
                children: e.jsx(p.Content, {
                    children: r.map(s => e.jsxs(p.Item, {
                        className: "flex items-center gap-3",
                        onClick: () => {
                            n(s.id)
                        }
                        ,
                        children: [i(s), s.name]
                    }, s.id))
                })
            })]
        })
    })
}
const S = re.div`flex h-full items-center justify-center pb-8 text-sm text-token-text-tertiary rounded-lg border border-token-border-default`;
function fe({onClose: t, initialGizmoId: n}) {
    const r = w()
      , a = D()
      , i = $()
      , [s,o] = j.useState(n)
      , m = J()
      , c = P()
      , M = oe()?.hasPlusFeatures() ?? !1;
    j.useEffect( () => {
        h.logEvent("Memory Modal Shown")
    }
    , []);
    const {data: v, isLoading: b, isError: k, refetch: G} = V(s, !0, i)
      , f = v?.memories
      , {data: I, refetch: z} = H({
        queryKey: ["memory_gizmos"],
        queryFn: () => N.safeGet("/memories/gizmos"),
        refetchOnMount: "always"
    })
      , C = [{
        id: void 0,
        name: "ChatGPT",
        iconUrl: null
    }, ...I?.items.map( ({gizmo: l}) => ({
        id: l.id,
        name: l.display.name,
        iconUrl: l.display.profile_picture_url ?? null
    })) ?? []]
      , x = C.find(l => l.id === s);
    j.useEffect( () => {
        !b && !k && s !== void 0 && (!f || f.length === 0) && o(void 0)
    }
    , [b, k, f, s]);
    let y;
    return b ? y = e.jsx(S, {
        children: e.jsx(d, {
            id: "MemoriesModal.loading",
            defaultMessage: "Loading..."
        })
    }) : k ? y = e.jsx(S, {
        children: e.jsxs("div", {
            className: "max-w-sm text-center",
            children: [e.jsx("div", {
                className: "mb-4 text-red-500",
                children: e.jsx(d, {
                    id: "MemoriesModal.somethingWentWrong",
                    defaultMessage: "Something went wrong..."
                })
            }), e.jsx("div", {
                children: e.jsx(U, {
                    color: "secondary",
                    onClick: () => {
                        G()
                    }
                    ,
                    children: e.jsx(d, {
                        id: "MemoriesModal.retry",
                        defaultMessage: "Retry"
                    })
                })
            })]
        })
    }) : !f || f.length === 0 ? y = e.jsx(S, {
        children: e.jsx("div", {
            className: "max-w-sm text-center",
            children: i ? e.jsx(d, {
                id: "MemoriesModal.noMemories.1",
                defaultMessage: "As you chat with {name}, the details and preferences it saves will be shown here.",
                values: {
                    name: x?.name ?? "ChatGPT"
                }
            }) : e.jsx(d, {
                id: "MemoriesModal.noMemoriesAndDisabled",
                defaultMessage: "Memory is disabled. ChatGPT won't use or save memories."
            })
        })
    }) : y = e.jsx(g.Root, {
        className: "h-full",
        size: "compact",
        bordered: !0,
        children: e.jsx(g.Body, {
            children: f.map(l => e.jsx(ue, {
                gizmo: x ? {
                    id: x.id,
                    name: x.name
                } : void 0,
                memory: l
            }, l.id))
        })
    }),
    e.jsxs(A, {
        testId: "modal-memories",
        isOpen: !0,
        onClose: t,
        size: "custom",
        className: "max-w-5xl",
        type: "success",
        title: r.formatMessage({
            id: "MemoriesModal.title",
            defaultMessage: "Saved memories"
        }),
        description: e.jsx("div", {
            className: "text-token-text-secondary",
            children: c && M ? r.formatMessage({
                id: "MemoriesModal.description",
                defaultMessage: "ChatGPT tries to remember most of your chats, but it may forget things over time. Saved memories are never forgotten. <link>Learn more</link>"
            }, {
                link: l => e.jsx("a", {
                    href: "https://help.openai.com/en/articles/8983136-what-is-memory",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "underline",
                    children: l
                })
            }) : c ? r.formatMessage({
                id: "MemoriesModal.description.freeMoonshine",
                defaultMessage: "ChatGPT tries to remember your recent chats, but it may forget things over time. Saved memories are never forgotten. <link>Learn more</link>"
            }, {
                link: l => e.jsx("a", {
                    href: "https://help.openai.com/en/articles/8983136-what-is-memory",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "underline",
                    children: l
                })
            }) : r.formatMessage({
                id: "MemoriesModalFree.description",
                defaultMessage: "ChatGPT remembers useful details about you and your preferences so it can be more helpful. <link>Learn more</link>"
            }, {
                link: l => e.jsx("a", {
                    href: "https://help.openai.com/en/articles/8983136-what-is-memory",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "underline",
                    children: l
                })
            })
        }),
        showCloseButton: !0,
        children: [m && C.length > 1 && e.jsx("div", {
            className: "mb-4",
            children: e.jsx(he, {
                selectedGizmoId: s,
                items: C,
                onSelect: l => {
                    a.invalidateQueries({
                        queryKey: E(l)
                    }),
                    o(l)
                }
            })
        }), e.jsx(me, {
            memoryFullPct: v?.memoryFullPct,
            className: "mb-5"
        }), e.jsx("div", {
            className: "h-[24rem]",
            children: y
        }), e.jsx("div", {
            className: "mt-5 flex justify-end",
            children: e.jsx(ce, {
                onReset: () => {
                    G(),
                    z(),
                    s && o(void 0)
                }
                ,
                gizmoId: s,
                memoryName: x?.name ?? "ChatGPT"
            })
        })]
    })
}
const pe = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: fe
}, Symbol.toStringTag, {
    value: "Module"
}));
export {de as M, fe as a, pe as b, O as u};
//# sourceMappingURL=do3vehpxvmi2yxv8.js.map
