const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/ji7hrklqfjcia1xv.js", "assets/juy90og0wtbp77qa.js", "assets/dc2xxjkicf2pz0mj.js", "assets/root-fv49dn40.css", "assets/newpkknsbld1ryi8.js", "assets/ckp56qklot786ulr.js", "assets/conversation-small-j9iamy23.css", "assets/d3y72ugnrmac5z1v.js", "assets/mis8yzi96lqq0oku.js", "assets/bl4i5r660el81wwx.js", "assets/nc631yunytu8n0fx.js"]))) => i.map(i => d[i]);
import {ag as C, dX as P, e as u, k as A, C as G, B as H, R as K, iQ as Q, aF as o, b0 as T, as as J, at as q, eJ as E, ae as _, hJ as V, P as m, br as W, a7 as X, cr as y, dA as Y, f6 as Z, g5 as $, cf as x, cW as U, dG as ee, em as te, fQ as B, e5 as se, a8 as ne, f as ae} from "./dc2xxjkicf2pz0mj.js";
import {r as w, h as k, j as e, M as c, n as oe, e as F} from "./juy90og0wtbp77qa.js";
import {fx as L, fy as ie, fz as N, fA as re, fB as D, fC as ce, fD as le, fE as O, fF as ue, fG as M, U as v, ae as j, fH as de, fI as ge, e as pe, fJ as fe, M as me, fp as he, fK as xe, e4 as be, ed as ke, fL as Me, fM as ve, fN as je, fO as Se, fP as _e, G as ye, fQ as Ie} from "./ckp56qklot786ulr.js";
import {b as we} from "./o6wb3ptvu0bk81yq.js";
function Ce({onClose: t, entryPointElementId: n}) {
    const [s,a] = w.useState(!1)
      , [i,d] = w.useState("")
      , l = C()
      , r = k()
      , {clientThreadId: g} = we()
      , h = P(g)
      , b = u();
    if (!A(b, "2888142241").get("is_feedback_tool_shown", !1))
        return null;
    const I = async () => {
        const f = i.trim();
        if (!f) {
            l.danger(r.formatMessage({
                id: "feedback.emptyError",
                defaultMessage: "Please enter your feedback"
            }), {
                toastId: "feedback_empty_error"
            });
            return
        }
        a(!0);
        try {
            await K.safePost("/user_feedback/submit_feedback", {
                requestBody: {
                    user_feedback_description: f,
                    conversation_id: h ?? null,
                    user_agent: Q(),
                    language: navigator.language,
                    network_info: {
                        downlink: null,
                        downlink_max: null,
                        effective_type: null,
                        rtt: null,
                        save_data: navigator.connection?.saveData ?? null,
                        connection_type: null
                    },
                    viewport_size: {
                        width: window.innerWidth,
                        height: window.innerHeight
                    },
                    screenshot: null,
                    entry_point_element_id: n
                }
            }),
            l.success(r.formatMessage({
                id: "feedback.success",
                defaultMessage: "Thank you for your feedback!"
            })),
            t()
        } catch {
            l.danger(r.formatMessage({
                id: "feedback.error",
                defaultMessage: "Failed to submit feedback. Please try again."
            }), {
                toastId: "feedback_submit_error",
                loggingTitle: "Failed to submit feedback",
                loggingDescription: "User feedback submission failed"
            })
        } finally {
            a(!1)
        }
    }
      , z = f => {
        f.key === "Enter" && (f.metaKey || f.ctrlKey) && (f.preventDefault(),
        I())
    }
    ;
    return e.jsx(G, {
        testId: "modal-report-bug",
        isOpen: !0,
        onClose: () => !s && t(),
        shouldIgnoreClickOutside: s,
        size: "normal",
        type: "success",
        title: r.formatMessage({
            id: "feedback.modalTitle",
            defaultMessage: "What happened?"
        }),
        showCloseButton: !s,
        primaryButton: e.jsx(H, {
            color: "primary",
            fullWidth: !0,
            onClick: I,
            disabled: s,
            loading: s,
            children: e.jsx(c, {
                id: "feedback.send",
                defaultMessage: "Send"
            })
        }),
        children: e.jsx("div", {
            className: "space-y-4",
            children: e.jsx("div", {
                children: e.jsx("div", {
                    className: "relative",
                    children: e.jsx("textarea", {
                        id: "feedback-textarea",
                        value: i,
                        onChange: f => d(f.target.value),
                        className: "border-token-border-default bg-token-bg-primary text-token-text-primary placeholder:text-token-text-tertiary w-full rounded-lg border p-3 pe-10 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none",
                        placeholder: r.formatMessage({
                            id: "feedback.placeholder",
                            defaultMessage: "Describe the issue"
                        }),
                        rows: 6,
                        disabled: s,
                        onKeyDown: z
                    })
                })
            })
        })
    })
}
function Pe() {
    const t = u();
    if (!A(t, "2888142241").get("is_feedback_tool_shown", !1))
        return null;
    const a = "report-bug-menu-item";
    return e.jsx(o.Item, {
        id: a,
        icon: L,
        onClick: () => T(t, Ce, {
            entryPointElementId: a
        }),
        children: e.jsx(c, {
            id: "feedback.reportBug",
            defaultMessage: "Report Bug"
        })
    })
}
const Ye = ({clientThreadId: t}) => {
    const n = k()
      , s = u()
      , a = E(s, "786015841").get("enabled", !1);
    return _(s) && a ? null : e.jsx(V, {
        contentAlign: "end",
        sideOffset: 4,
        triggerButton: e.jsx("button", {
            onClick: () => {
                m.logEventWithStatsig("Account: Open Profile Menu", "chatgpt_account_open_profile_menu", {
                    location: "header"
                })
            }
            ,
            "aria-label": n.formatMessage({
                id: "profileMenu.open",
                defaultMessage: "Open profile menu"
            }),
            "data-testid": "profile-button",
            className: "group user-select-none ps-2 focus-visible:outline-0",
            children: e.jsx("div", {
                className: "group-hover:bg-token-interactive-bg-secondary-selected touch:h-10 touch:w-10 flex h-9 w-9 items-center justify-center rounded-full group-focus-visible:ring-2",
                children: e.jsx(Te, {})
            })
        }),
        children: e.jsx(R, {
            clientThreadId: t
        })
    })
}
;
function Ze() {
    const t = M();
    return e.jsxs(o.Root, {
        onOpenChange: n => {
            n && m.logEventWithStatsig("Account: Open Profile Menu", "chatgpt_account_open_profile_menu", {
                location: t
            })
        }
        ,
        children: [e.jsx(Ae, {
            isTinyBar: t === "tiny_bar"
        }), e.jsx(o.Portal, {
            children: e.jsx(o.Content, {
                side: "top",
                size: "auto",
                className: "min-w-[calc(var(--sidebar-width)-12px)]",
                children: e.jsx(R, {})
            })
        })]
    })
}
function Ae({isTinyBar: t}) {
    const n = u()
      , s = E(n, "786015841").get("enabled", !1)
      , {data: a} = y()
      , i = ne(a)
      , d = je()
      , l = Se()
      , r = k();
    if (!s && (!i || !a))
        return null;
    const g = i != null && i.isWorkspaceAccount()
      , h = a != null && a.accountItems.length > 1
      , b = ae(n, "1719651090");
    let p;
    g || h ? p = d : i?.isFree() ? p = r.formatMessage(_e().name) : i?.isPlus() ? p = r.formatMessage(ye().name) : i?.isPro() && (p = r.formatMessage(Ie({
        isOperatorEnabled: b
    }).name));
    const S = r.formatMessage({
        id: "profileMenu.open",
        defaultMessage: "Open profile menu"
    });
    return e.jsx(o.BasicTrigger, {
        asChild: !0,
        children: e.jsx(U, {
            as: "div",
            fillContainer: !0,
            "data-testid": "accounts-profile-button",
            "aria-label": S,
            size: "large",
            icon: e.jsx(D, {}),
            iconOnly: t,
            iconAriaLabel: S,
            label: l,
            role: "button",
            secondary: p && e.jsx("div", {
                className: "truncate",
                dir: "auto",
                children: p
            })
        })
    })
}
const R = ({clientThreadId: t}) => {
    const n = u()
      , s = _(n)
      , a = W()
      , i = ie(n);
    return e.jsxs("div", {
        className: "flex flex-col",
        children: [s ? e.jsx(Ee, {}) : e.jsx(Ge, {}), e.jsx(Ne, {}), e.jsx(o.Separator, {}), !s && e.jsx(Ke, {
            clientThreadId: t
        }), s ? e.jsx(Fe, {}) : e.jsx(N, {}), s && !a && e.jsx(Oe, {}), (i || !1) && e.jsx(o.Separator, {}), i && e.jsx(re, {}), !1]
    })
}
  , Te = () => {
    const t = u();
    return _(t) ? e.jsx(D, {
        showPlanTypeBadge: !0
    }) : e.jsx(ce, {
        className: "icon-lg"
    })
}
  , Ee = () => {
    const t = u()
      , n = X()
      , {data: s} = y()
      , a = s && s.accountItems.length > 1
      , i = W()
      , d = a && !i
      , l = n?.isWorkspaceAccount() && !i
      , r = Y(t)
      , g = oe()
      , h = g.pathname + g.search + (g.search ? "&" : "?") + "refresh_account=true";
    return e.jsxs(e.Fragment, {
        children: [e.jsx(We, {
            currentAccount: n
        }), d && e.jsxs(e.Fragment, {
            children: [e.jsx(le, {
                accountSwitcherRedirectUrl: h
            }), e.jsx(o.Separator, {})]
        }), e.jsx(ze, {
            currentAccount: n
        }), e.jsx(He, {
            currentAccount: n
        }), l && e.jsx(Ue, {
            currentAccount: n
        }), !r && e.jsxs(e.Fragment, {
            children: [!1, !1, e.jsx(Le, {})]
        })]
    })
}
  , We = ({currentAccount: t}) => {
    const n = k()
      , s = pe()
      , a = F()
      , i = C();
    if (!s)
        return null;
    const d = t && t.isWorkspaceAccount() && !t.isEnterprisey()
      , l = n.formatMessage({
        id: "navigation.addWorkspaceTooltip",
        defaultMessage: "Create a Team workspace"
    });
    return e.jsx(U, {
        as: "div",
        onClick: async r => {
            await he(s.id, i, r),
            i.success("Copied your User ID to clipboard")
        }
        ,
        icon: fe,
        className: "text-token-text-tertiary bg-transparent!",
        trailing: d && e.jsx(ee, {
            label: l,
            className: "leading-0",
            side: "right",
            children: e.jsx(te, {
                onClick: () => {
                    B(a, "profile menu")
                }
                ,
                "aria-label": l,
                children: e.jsx(me, {
                    className: "icon-sm"
                })
            })
        }),
        label: s.email ?? s.name
    })
}
  , Ue = ({currentAccount: t}) => {
    const n = t?.isEdu() && t?.isStandardUserOfAccount()
      , s = M();
    return n ? null : e.jsx(o.LinkItem, {
        to: "/admin",
        icon: be,
        onClick: () => {
            m.logEventWithStatsig("Account: Open Workspace Settings", "chatgpt_account_open_workspace_settings", {
                location: s
            })
        }
        ,
        children: e.jsx(c, {
            id: "workspacePopoverNavigation.myWorkspaceSettings",
            defaultMessage: "Workspace settings"
        })
    })
}
  , Be = () => e.jsx(o.LinkItem, {
    icon: Me,
    external: !0,
    to: "https://openai.com/chatgpt/download",
    children: e.jsx(c, {
        id: "mDFGM/",
        defaultMessage: "Download apps"
    })
})
  , Fe = () => e.jsxs(o.Sub, {
    children: [e.jsx(o.SubMenuTrigger, {
        icon: de,
        children: e.jsx(c, {
            defaultMessage: "Help",
            id: "navigation.helpMenu"
        })
    }), e.jsx(o.Portal, {
        children: e.jsxs(o.SubContent, {
            children: [e.jsx(N, {}), e.jsx(Pe, {}), e.jsx(Be, {}), e.jsx(De, {})]
        })
    })]
})
  , Le = () => {
    const t = M();
    return e.jsx(o.Item, {
        onClick: () => {
            v.openModal(j.UserContext),
            m.logEventWithStatsig("Account: Click Customize ChatGPT", "chatgpt_account_open_customize_chatgpt", {
                location: t
            })
        }
        ,
        icon: ke,
        children: e.jsx(c, {
            id: "popoverNavigation.chatPreferences.1",
            defaultMessage: "Customize ChatGPT"
        })
    })
}
  , Ne = () => {
    const {openSettings: t} = ue()
      , n = M();
    return e.jsx(o.Item, {
        icon: Z,
        onClick: () => {
            m.logEventWithStatsig("Account: Click Settings", "chatgpt_account_open_settings", {
                location: n
            }),
            t()
        }
        ,
        "data-testid": "settings-menu-item",
        children: e.jsx(c, {
            defaultMessage: "Settings",
            id: "navigation.settings.0"
        })
    })
}
  , De = () => e.jsx(o.Item, {
    className: "touch:hidden",
    icon: ve,
    onClick: () => {
        v.openModal(j.KeyboardActions)
    }
    ,
    children: e.jsx(c, {
        id: "thread.keyboardShortcutsMenu",
        defaultMessage: "Keyboard shortcuts"
    })
})
  , Oe = () => e.jsx(o.Item, {
    onSelect: () => {
        m.logEvent("Account: Click Log Out", {
            eventSource: "mouse"
        }),
        m.logLogOutButtonClicked({
            location: "profile_drop_down"
        }),
        v.openModal(j.LogoutConfirm)
    }
    ,
    "data-testid": "log-out-menu-item",
    icon: ge,
    children: e.jsx(c, {
        defaultMessage: "Log out",
        id: "navigation.logOut.0"
    })
})
  , Re = J( () => q( () => import("./ji7hrklqfjcia1xv.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])))
  , ze = ({currentAccount: t}) => {
    const n = u();
    return t?.isTeam() ? e.jsx(o.Item, {
        "data-testid": "settings-menu-item-invite-teammates",
        onSelect: () => {
            m.logEvent("Account: Invite Member Button Clicked", {
                eventSource: "mouse",
                location: "profile_drop_down"
            }),
            x(n).logEvent("chatgpt_invite_users_to_workspace", 0, {
                action: "OpenAdminInviteModal",
                location: "dropdown-menu-click",
                text: "AddTeammates",
                step: "OpenModal"
            }),
            T(n, ({onClose: s}) => e.jsx(Re, {
                workspace: t,
                onClose: s
            }))
        }
        ,
        icon: xe,
        children: e.jsx(c, {
            id: "inviteMemberButton.inviteMemberButton",
            defaultMessage: "Add teammates"
        })
    }) : null
}
  , Ge = () => e.jsx(o.LinkItem, {
    icon: O,
    external: !0,
    to: "https://openai.com/chatgpt/pricing/",
    children: e.jsx(c, {
        id: "J1y7uV",
        defaultMessage: "See plans and pricing"
    })
})
  , He = ({currentAccount: t}) => {
    const n = F()
      , s = u()
      , {data: a} = y()
      , i = t?.isWorkspaceAccount() ?? !1
      , d = t?.isPlus()
      , l = t?.isPro()
      , r = t?.data.subscriptionStatus.planType
      , g = a && se(a)
      , h = !i && !d && g && x(s).getLayer("2670443078").get("is_gating_fix_enabled", !1);
    if (!(!i && !h && !l && x(s).getLayer("2888142241").get("is_upgrade_in_settings", !1)))
        return null;
    const p = () => {
        x(s).logEvent("chatgpt_upgrade_in_settings_menu_clicked", void 0, {
            current_plan_type: r ?? "unknown"
        }),
        m.logEvent("Upgrade In Settings Menu Clicked", {
            planType: r ?? "unknown"
        }),
        B(n, "Upper right settings menu")
    }
    ;
    return e.jsx(o.Item, {
        icon: O,
        onSelect: p,
        children: e.jsx(c, {
            id: "navigation.upgradePlan",
            defaultMessage: "Upgrade plan"
        })
    })
}
  , Ke = ({clientThreadId: t}) => {
    const n = u()
      , s = P(t)
      , a = $();
    return x(n).checkGate("3376455464") && (s || a) ? e.jsx(o.Item, {
        icon: L,
        onClick: () => {
            v.openModal(j.ReportConversation)
        }
        ,
        children: e.jsx(c, {
            id: "profileMenu.reportConversation",
            defaultMessage: "Report conversation"
        })
    }) : null
}
;
export {Ye as P, Ze as S};
//# sourceMappingURL=iiyyoj0wgh5vo89i.js.map
