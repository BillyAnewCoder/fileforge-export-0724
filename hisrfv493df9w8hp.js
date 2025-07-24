import {j as e, M as x, f as ae, R as pe, h as ne, r as G, e as me} from "./juy90og0wtbp77qa.js";
import {a7 as fe, aF as n, ky as $, e as oe, dg as Me, km as Se, bj as xe, fM as je, e3 as be, cr as ye, jq as we, a9 as Ee, e5 as Ae, dX as Ce, bd as Ne, aV as Te, aR as ve, P as R, fQ as Le, kz as B, dG as J, dC as le, af as _e, al as Pe} from "./dc2xxjkicf2pz0mj.js";
import {db as Ie, ag as Oe, dc as j, dd as De, de as I, df as Ue, dg as ke, dh as K, di as E, dj as Ge, dk as Re, dl as Be} from "./ckp56qklot786ulr.js";
import {A as Fe, C as ze} from "./hort3ndd4wla0a2j.js";
const Z = "needsCreditsSection"
  , He = () => {
    const s = fe()?.isOwnerOfAccount();
    return e.jsxs(n.Item, {
        className: "pointer-events-none pe-2.5! hover:bg-transparent hover:text-inherit",
        onSelect: l => l.preventDefault(),
        disabled: !0,
        children: [e.jsx("div", {
            className: "text-token-text-tertiary text-xs",
            children: e.jsx(x, {
                ...s ? ee.ownerDescription : ee.description
            })
        }), s ? e.jsx(Fe, {
            size: "small",
            trigger: "thread-header-dropdown-credits-section"
        }) : e.jsx(ze, {
            size: "small",
            creditConsumingProduct: "gpt-4-5",
            trigger: "thread-header-dropdown-credits-section"
        })]
    })
}
  , ee = ae({
    description: {
        id: "prompt-textarea.teamsCreditRequestBanner.label",
        defaultMessage: "Limits reached. Send a request to your admin to get access"
    },
    ownerDescription: {
        id: "prompt-textarea.teamsCreditRequestBanner.ownerLabel",
        defaultMessage: "Limits reached. Add credits to your account"
    }
});
function te(o, s) {
    let l = o;
    if (o === $.AUTO) {
        const d = s?.categories.filter( ({defaultModel: p}) => p !== $.AUTO);
        d?.length === 1 && (l = d[0].defaultModel)
    }
    const u = s?.categories.find( ({defaultModel: d, supportedModels: p}) => d === l || p?.includes(l));
    if (u) {
        const {categoryId: d} = u;
        return {
            selectedCategory: d,
            modelLabel: u.shortLabel,
            fullModelLabel: u.label
        }
    }
    const i = s?.groups.find( ({modelIds: d}) => d.includes(l));
    if (i) {
        const {group: d, shortLabel: p, label: M} = i;
        return {
            selectedCategory: d,
            modelLabel: p,
            fullModelLabel: M
        }
    }
    return {
        selectedCategory: null,
        modelLabel: null,
        fullModelLabel: null
    }
}
function We(o, s, l, u) {
    const i = s ? o.formatMessage(se.beta) : l ? o.formatMessage(se.alpha) : u;
    if (i)
        return e.jsx(le, {
            children: i
        })
}
function Ye({category: o, modelSwitcherDenialsBySlug: s, currentGizmoId: l, currentModelId: u, testId: i, preferredModelId: d}) {
    const p = ne()
      , {defaultModel: M, label: O, description: m, isBeta: f, isAlpha: b, modelBadge: h, dateUpdated: A} = o
      , D = _e(l ?? "")
      , U = oe()
      , g = Ge(U, M);
    return e.jsxs(I, {
        value: M,
        currentModelId: u,
        modelSwitcherDenialsBySlug: s,
        secondary: m,
        dateUpdated: A,
        deprecated: g,
        isSelected: (!l || D) && u === M,
        testId: i,
        preferredModelId: d,
        children: [O, We(p, f, b, g ? p.formatMessage({
            id: "rFijPv",
            defaultMessage: "Deprecated"
        }) : h)]
    }, M)
}
function $e({sections: o}) {
    return e.jsx(e.Fragment, {
        children: o.map( (s, l) => e.jsxs(pe.Fragment, {
            children: [l !== 0 ? e.jsx(n.Separator, {}) : null, s.content]
        }, s.id))
    })
}
function Je(o, s, l, u, i) {
    const d = ne();
    oe();
    const {session: p} = Me()
      , M = p?.user
      , O = M && Se(M)
      , m = xe(o)
      , f = m.id
      , b = je(o);
    let {modelsData: h} = be();
    const {data: A} = ye()
      , D = we(p?.account?.planType ?? Ee.FREE) || A && Ae(A) && !0
      , U = Ce(o)
      , g = Ie({
        clientThreadId: o
    })
      , F = h?.modelPickerVersion === 2
      , ie = !U
      , {isUnauthenticated: z} = Ne()
      , re = Oe()
      , C = s.find( ({categoryId: t}) => t === j.ALPHA)
      , N = s.find( ({categoryId: t}) => t === j.DATA_CAMPAIGNS)
      , T = s.find( ({categoryId: t}) => t === j.EXPERIMENTS)
      , v = s.find( ({categoryId: t}) => t === j.MAINLINE)
      , [w,de] = G.useState("")
      , ce = Te(ve(!0))
      , k = [C, N, T, v].reduce( (t, a) => a ? [...t, ...a.options.map(r => ({
        ...r,
        badge: a.categoryId
    }))] : t, [])
      , H = G.useMemo( () => w ? k.filter(t => t.name.toLowerCase().includes(w.toLowerCase())) : k, [k, w]);
    if (u && b && h) {
        const t = JSON.parse(JSON.stringify(h));
        t.categories = t.categories.filter( ({defaultModel: a}) => a.startsWith("gpt-4o") || a === "gpt-4-1"),
        h = t
    }
    const W = !!C?.options.length
      , Y = !!N?.options.length
      , q = !!T?.options.length
      , X = !!v?.options.length
      , Q = me()
      , ue = G.useCallback( () => {
        R.logEvent("Account Pay: Open Payment from Model Picker", {
            content: "gizmo-button"
        }),
        Le(Q, "Thread header dropdown")
    }
    , [Q])
      , he = () => {
        Pe.logEvent("chatgpt_model_switcher_plus_upgrade_button_clicked"),
        R.logEvent("Model Switcher Plus Upgrade Button Clicked"),
        z ? re({
            shouldOpenPaymentModalOnAuth: !0,
            callback: t => {
                R.logSignUpButtonClicked({
                    location: "Model switcher GPT-4 upsell",
                    provider: t
                })
            }
        }) : ue()
    }
      , y = []
      , ge = e.jsxs(n.Label, {
        className: "flex items-center",
        children: [e.jsx(x, {
            id: "coNCb7",
            defaultMessage: "Models"
        }), e.jsx(J, {
            side: "right",
            className: "ms-1.5",
            delayDuration: 120,
            label: e.jsx(x, {
                id: "/vFWz/",
                defaultMessage: "Learn more"
            }),
            children: e.jsx("a", {
                href: "https://help.openai.com/en/articles/7864572-what-is-the-chatgpt-model-selector",
                target: "_blank",
                rel: "noreferrer",
                children: e.jsx(K, {
                    className: "h-3.5 w-3.5 shrink-0"
                })
            })
        })]
    }, "models-section-header");
    if (z) {
        const t = {
            id: "modelSection",
            content: []
        };
        t.content.push(e.jsx(De, {
            location: "model-switcher",
            statsig_login_event: "chatgpt_modelswitcher_login_button_clicked",
            statsig_signup_event: "chatgpt_modelswitcher_signup_button_clicked"
        }, "noAuthUpsell")),
        y.push(t)
    } else if (!D && !b) {
        const t = {
            id: "modelSection",
            content: []
        };
        t.content.push(e.jsx(I, {
            value: "",
            currentModelId: f,
            onClick: he,
            modelSwitcherDenialsBySlug: g,
            isUpgradeUpsell: !0,
            icon: Re,
            secondary: e.jsx(x, {
                id: "bqTHri",
                defaultMessage: "Our smartest model & more"
            }),
            isSelected: !1,
            children: e.jsx(x, {
                id: "mzDzkX",
                defaultMessage: "ChatGPT Plus"
            })
        }, "plusUpgrade")),
        t.content.push(e.jsx(I, {
            value: B.AUTO,
            currentModelId: f,
            modelSwitcherDenialsBySlug: g,
            icon: Ue,
            secondary: e.jsx(x, {
                id: "n96qML",
                defaultMessage: "Great for everyday tasks"
            }),
            isSelected: !b && f === B.AUTO,
            children: e.jsx(x, {
                id: "U9E7Rx",
                defaultMessage: "ChatGPT"
            })
        }, B.AUTO)),
        y.push(t)
    } else {
        const t = {
            id: "modelSection",
            content: []
        };
        h?.categories.length && !F && t.content.push(ge);
        const a = new Map;
        h?.categories.forEach(r => {
            let c = e.jsx(Ye, {
                category: r,
                currentGizmoId: b,
                currentModelId: f,
                modelSwitcherDenialsBySlug: g,
                preferredModelId: i,
                testId: `model-switcher-${r.defaultModel}`
            }, r.categoryId);
            r.defaultModel === "o4-mini-high" && (c = e.jsx(ke, {
                children: c
            }, `nux-${r.categoryId}`)),
            r.subcategory ? (a.has(r.subcategory) || a.set(r.subcategory, []),
            a.get(r.subcategory)?.push(c)) : t.content.push(c)
        }
        ),
        F ? a.forEach( (r, c) => {
            const _ = h?.categories.find(V => V.subcategory === c && V.defaultModel === m.id)
              , {fullModelLabel: P} = te(_?.defaultModel ?? "", h);
            t.content.push(e.jsxs(n.Sub, {
                children: [e.jsx(n.SubMenuTrigger, {
                    "data-testid": c + "-submenu",
                    trailing: e.jsx("div", {
                        className: "truncate",
                        children: P
                    }),
                    children: c
                }), e.jsx(n.Portal, {
                    children: e.jsx(n.SubContent, {
                        children: r
                    })
                })]
            }, c))
        }
        ) : a.forEach( (r, c) => {
            const _ = h?.categories.find(P => P.subcategory === c && P.defaultModel === m.id);
            t.content.push(e.jsxs(n.Sub, {
                children: [e.jsx(n.SubMenuTrigger, {
                    "data-testid": c === "More models" ? "more-models-submenu" : void 0,
                    trailing: _ && e.jsx("div", {
                        className: "truncate",
                        children: _.label
                    }),
                    children: c
                }), e.jsx(n.Portal, {
                    children: e.jsx(n.SubContent, {
                        children: r
                    })
                })]
            }, c))
        }
        ),
        u && b && t.content.push(e.jsx(n.Label, {
            className: "flex flex-col items-start gap-1",
            children: e.jsxs("span", {
                className: "flex items-center",
                children: [e.jsx(x, {
                    id: "Y96ci5",
                    defaultMessage: "Limited models for Custom Action GPTs"
                }), e.jsx(J, {
                    side: "right",
                    className: "ms-1.5 cursor-pointer",
                    delayDuration: 0,
                    label: e.jsx(x, {
                        id: "wDE3HX",
                        defaultMessage: "GPTs with custom web actions can currently only use GPT-4o and GPT-4.1. If your GPT has no custom actions it can use any model."
                    }),
                    children: e.jsx(K, {
                        className: "h-4 w-4 shrink-0"
                    })
                })]
            })
        })),
        y.push(t)
    }
    const S = {
        id: "otherOptionsSection",
        content: []
    }
      , {selectedCategory: L} = te(f, h);
    return ie && (W || Y || q || X ? S.content.push(e.jsx("div", {
        className: "px-4 py-2",
        children: e.jsx(Be, {
            inputClassName: "w-full",
            onKeyDown: t => {
                t.stopPropagation()
            }
            ,
            onChange: t => {
                de(t.target.value)
            }
            ,
            value: w
        })
    })) : O && S.content.push(e.jsxs(e.Fragment, {
        children: [e.jsx(n.Shimmer, {
            size: "long"
        }), e.jsx(n.Shimmer, {
            size: "long"
        }), e.jsx(n.Shimmer, {
            size: "long"
        }), e.jsx(n.Shimmer, {
            size: "long"
        })]
    })),
    w ? S.content.push(e.jsxs("div", {
        className: "scrollbar-gutter-stable max-h-64 w-[min(320px,95vw)] overflow-y-scroll",
        children: [H.length === 0 && e.jsx(n.Item, {
            className: "w-full",
            children: d.formatMessage({
                id: "model-switcher.no-results",
                defaultMessage: "No results found"
            })
        }), H.map(t => {
            const {value: a} = t;
            return "options"in t ? e.jsx(E, {
                currentModel: m,
                isSelected: f.startsWith(a),
                option: t,
                modelSwitcherDenialsBySlug: g,
                displayInFull_INTERNAL_USE_ONLY: !0,
                preferredModelId: i
            }, a) : e.jsxs(I, {
                currentModelId: f,
                isSelected: f === a,
                value: a,
                modelSwitcherDenialsBySlug: g,
                displayInFull_INTERNAL_USE_ONLY: !0,
                preferredModelId: i,
                children: [t.name, t.badge && e.jsx(le, {
                    children: t.badge
                })]
            }, a)
        }
        )]
    })) : (W && S.content.push(e.jsx(E, {
        isSelected: L === j.ALPHA,
        currentModel: m,
        option: C,
        modelSwitcherDenialsBySlug: g,
        displayInFull_INTERNAL_USE_ONLY: !0,
        preferredModelId: i
    }, C.value)),
    Y && S.content.push(e.jsx(E, {
        isSelected: L === j.DATA_CAMPAIGNS,
        currentModel: m,
        option: N,
        modelSwitcherDenialsBySlug: g,
        displayInFull_INTERNAL_USE_ONLY: !0,
        preferredModelId: i
    }, N.value)),
    q && S.content.push(e.jsx(E, {
        currentModel: m,
        isSelected: L === j.EXPERIMENTS,
        option: T,
        modelSwitcherDenialsBySlug: g,
        displayInFull_INTERNAL_USE_ONLY: !0,
        preferredModelId: i
    }, T.value)),
    X && S.content.push(e.jsx(E, {
        isSelected: L === j.MAINLINE,
        currentModel: m,
        option: v,
        modelSwitcherDenialsBySlug: g,
        displayInFull_INTERNAL_USE_ONLY: !0,
        preferredModelId: i
    }, v.value)))),
    S.content.length && ce && y.push(S),
    l && y.push({
        id: Z,
        content: [e.jsx(He, {}, Z)]
    }),
    y
}
const se = ae({
    alpha: {
        id: "o5FsPB",
        defaultMessage: "Alpha"
    },
    beta: {
        id: "XZwFET",
        defaultMessage: "Beta"
    },
    gpt35ShortExplainer: {
        defaultMessage: "Great for everyday tasks",
        id: "ModelSwitcher.gpt35ShortExplainer"
    },
    modelTunerSmartSelectionTitle: {
        id: "czjW8I",
        defaultMessage: "Dynamic"
    },
    modelTunerSmartSelectionExplainer: {
        id: "gp/YH1",
        defaultMessage: "Optimized for speed and intelligence"
    },
    gpt4ShortExplainer: {
        defaultMessage: "With DALL·E, browsing and analysis",
        id: "ModelSwitcher.gpt4ShortExplainer"
    },
    gpt4ShortExplainerWithoutBrowse: {
        defaultMessage: "With DALL·E and analysis",
        id: "ModelSwitcher.gpt4ShortExplainerWithoutBrowse"
    },
    gpt4UpsellExplainer: {
        id: "ModelSwitcher.gpt4Upsell",
        defaultMessage: "Our smartest and most capable model. Includes DALL·E, browsing and more."
    },
    userUpgrade: {
        id: "ModelSwithcer.upgradeButton",
        defaultMessage: "Upgrade to Plus"
    },
    userUpgradeSignup: {
        id: "ModelSwitcher.signupUpgradeButton",
        defaultMessage: "Sign up for ChatGPT Plus"
    },
    temporaryChat: {
        id: "ModelSwitcher.temporaryChat",
        defaultMessage: "Temporary chat"
    },
    shareChat: {
        id: "ModelSwitcher.shareChat",
        defaultMessage: "Share chat"
    }
});
export {$e as T, te as g, Je as u};
//# sourceMappingURL=hisrfv493df9w8hp.js.map
