import {r as l, h as I, j as e, m as g, ap as Ne, aq as Me, J as Ie, A as pe, f as Te} from "./juy90og0wtbp77qa.js";
import {k5 as we, o8 as ne, ac as Ae, ly as De, o9 as He, k6 as Re} from "./ckp56qklot786ulr.js";
import {O as Le} from "./du2o33bqvziie5hn.js";
import {p as Ge, g as Ve, h as Be, b as _e} from "./l7ivca7g8ik3mk13.js";
import {Z as Oe} from "./jy1u8exw8iz2slve.js";
import {E as Pe} from "./gn1kkezdsm9hi3t4.js";
import {E as Ue, T as Fe} from "./dmfmxszxfbs8gsbx.js";
import {f8 as oe, ar as G, dG as ve, ay as $e, dF as Ze} from "./dc2xxjkicf2pz0mj.js";
function ze(o) {
    const {doc: r, selection: s} = o
      , {$from: c, $to: m} = s
      , {pos: h} = c
      , {pos: f} = m
      , u = r.textBetween(h, f);
    try {
        const n = Ge(r, c)
          , x = Ve(r, m);
        return {
            sourceFrom: n,
            sourceTo: x,
            from: h,
            to: f,
            selectedText: u
        }
    } catch (n) {
        we.logError("Getting source selection", n)
    }
    return {
        selectedText: u,
        from: h,
        to: f
    }
}
const L = {
    type: "spring",
    bounce: .2,
    duration: .5
};
function Je(o) {
    return o instanceof Ue
}
function pt(o) {
    return o instanceof Pe
}
function Ke() {
    const o = Be()
      , r = _e();
    return l.useMemo( () => () => o() ?? r(), [o, r])
}
const Se = ({title: o, icon: r, size: s, opacity: c, initialHeight: m=s, initialScale: h=1, onClick: f, isConfirming: u, isSmall: n, onSubmit: x}) => {
    const p = I()
      , k = Ne()
      , [E,d] = l.useState(!1)
      , w = oe()
      , V = () => {
        d(!0)
    }
      , C = () => {
        d(!1)
    }
      , N = e.jsx(g.div, {
        initial: {
            scale: h,
            opacity: 0
        },
        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: .24,
                duration: .52
            }
        },
        exit: {
            scale: .5,
            opacity: 0,
            transition: {
                type: "spring",
                bounce: .24,
                duration: .52,
                opacity: {
                    duration: .1
                }
            }
        },
        whileHover: {
            scale: 1.15
        },
        transition: L,
        children: e.jsx(g.div, {
            className: "flex cursor-pointer items-start overflow-hidden",
            initial: {
                width: s,
                height: s
            },
            animate: {
                width: s,
                height: s
            },
            transition: L,
            onMouseEnter: V,
            onMouseLeave: C,
            children: u ? e.jsx(g.button, {
                className: "m-auto flex h-8 w-8 items-center justify-center rounded-full bg-black text-center dark:bg-white",
                initial: {
                    opacity: 0,
                    scale: .64
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    scale: .64
                },
                transition: {
                    type: "spring",
                    duration: .32,
                    bounce: .14
                },
                onClick: x,
                children: e.jsx(ne, {
                    className: G("animate-pulsing text-white dark:text-black", n ? "icon" : "icon-lg")
                })
            }) : r
        })
    });
    return e.jsx(g.div, {
        role: "button",
        onClick: f,
        initial: {
            height: m
        },
        animate: {
            height: s,
            opacity: u ? 1 : c ?? .52
        },
        exit: {
            height: 0
        },
        whileHover: {
            opacity: 1
        },
        transition: L,
        children: w ? e.jsx(ve, {
            open: k ? !!(u || E) : !1,
            label: p.formatMessage(o),
            side: "left",
            contentClassName: "pointer-events-none",
            children: N
        }) : N
    })
}
;
function ge({accelerator: o, size: r, opacity: s, onClick: c, onSubmit: m, disableHeightAnimation: h=!1, disableLabel: f=!1, isCancelledScrubber: u=!1, isSmall: n=!1, isConfirming: x}) {
    const {title: p, icon: k} = o
      , E = oe()
      , d = I();
    return e.jsxs("div", {
        className: "relative",
        children: [!E && !f && e.jsx(g.div, {
            className: "text-token-text-secondary absolute end-full top-1/2 w-[160px] -translate-y-1/2 transform pe-4 text-end text-sm",
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
                duration: .2
            },
            children: d.formatMessage(p)
        }), e.jsx(Se, {
            size: r,
            onClick: c,
            opacity: s,
            initialHeight: u || h ? "auto" : 0,
            initialScale: u ? .88 : .5,
            title: p,
            isSmall: n,
            isConfirming: x,
            onSubmit: m,
            icon: e.jsx(k, {
                className: G("text-token-primary m-auto", n ? "icon" : "icon-lg")
            })
        })]
    })
}
function Xe({title: o, onSubmit: r, icon: s}) {
    const c = I()
      , m = s;
    return e.jsxs(g.div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        onClick: r,
        className: "text-token-text-secondary hover:text-token-text-primary flex aspect-square w-20 max-w-20 min-w-20 cursor-pointer flex-col items-center rounded-2xl p-3 transition-colors hover:bg-gray-100/75 dark:hover:bg-gray-700",
        children: [e.jsx(m, {
            className: "icon-2xl m-auto"
        }), e.jsx("div", {
            className: "line-clamp-1 w-16 max-w-16 overflow-hidden text-center text-xs",
            children: c.formatMessage(o)
        })]
    })
}
function Qe({grid: o, onSubmit: r, title: s}) {
    const c = I();
    return e.jsxs("div", {
        className: "flex h-full flex-col content-center gap-y-4 overflow-x-hidden px-3 py-4",
        children: [e.jsx("div", {
            className: "text-token-primary mt-1 text-center font-medium",
            children: s
        }), e.jsx("div", {
            className: "flex-auto",
            children: e.jsx("div", {
                className: "grid grid-cols-2 gap-1",
                children: o.map( (m, h) => e.jsx(Xe, {
                    title: m.title,
                    icon: m.icon,
                    onSubmit: f => {
                        const u = o[h];
                        "prompt"in u && r?.(f, c.formatMessage(u.prompt))
                    }
                }, h))
            })
        })]
    })
}
function We({title: o, onClick: r, isConfirming: s, onSubmit: c, isAnyItemConfirmed: m}) {
    const h = I();
    return e.jsxs(g.div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        onClick: r,
        className: G("flex-item my-1 flex min-w-40 cursor-pointer items-center overflow-hidden rounded-2xl py-2 ps-4 pe-2 font-medium text-clip whitespace-nowrap transition-colors hover:bg-gray-100/75 dark:hover:bg-gray-700", {
            "bg-gray-100/50 dark:bg-gray-700/50": s,
            "text-token-text-secondary hover:text-token-text-primary": !s && m
        }),
        children: [e.jsx("div", {
            className: "flex-auto",
            children: h.formatMessage(o)
        }), e.jsx(g.button, {
            className: G("ms-3 h-6 w-6 rounded-full bg-black text-center dark:bg-white", {
                "pointer-events-none invisible": !s
            }),
            initial: {
                opacity: 0,
                scale: .64
            },
            animate: {
                opacity: s ? 1 : 0,
                scale: s ? 1 : .64
            },
            transition: {
                type: "spring",
                duration: .32,
                bounce: .14
            },
            onClick: c,
            children: e.jsx(ne, {
                className: "icon-lg text-white dark:text-black"
            })
        })]
    })
}
function Ye({menu: o, onConfirm: r, onSubmit: s}) {
    const [c,m] = l.useState(!1)
      , h = I();
    return e.jsx("div", {
        className: "h-full flex-col content-center overflow-x-hidden px-3",
        children: o.map( (f, u) => e.jsx(We, {
            title: f.title,
            isConfirming: c === u,
            isAnyItemConfirmed: c !== !1,
            onClick: () => {
                m(u),
                r?.()
            }
            ,
            onSubmit: n => {
                const x = o[u];
                "prompt"in x && s?.(n, h.formatMessage(x.prompt))
            }
        }, `menu-item-${f.title}`))
    })
}
const qe = o => "isCancel"in o && o.isCancel
  , be = 280;
function et(o, r, s) {
    if (s === r)
        return 1;
    const c = (o - r) / (s - r);
    return Ae(c, 0, 1)
}
function tt({size: o, acceleratorScrubber: r, onConfirm: s, onCancel: c, onSubmit: m, onDragStart: h, isConfirming: f}) {
    const {icon: u} = r
      , n = "scrub"in r ? r.scrub : []
      , x = 6
      , p = o - x * 2
      , k = I()
      , E = l.useRef(null)
      , d = l.useRef(null)
      , [w,V] = l.useState(n ? Math.floor(n.length / 2) : 0)
      , C = Math.round(w)
      , N = l.useRef(w)
      , v = n ? k.formatMessage(n[C].title) : null
      , T = Me(0);
    Ie(T, "change", M => {
        const z = -137 + p / 2
          , D = (be - x) / 2 - p / 2
          , H = et(M, z, D) * (n ? n.length - 1 : 0);
        N.current = H,
        V(H)
    }
    );
    const A = () => {
        if (!n || qe(n[C]) || f)
            return c?.();
        n && s?.()
    }
      , B = M => {
        M.preventDefault(),
        !(!n || !f || !("prompt"in n[C])) && m?.(M, k.formatMessage(n[C].prompt))
    }
    ;
    return e.jsx(g.div, {
        ref: E,
        className: "start-items relative z-20 flex w-full",
        style: {
            top: x,
            height: be - x * 2
        },
        children: e.jsx(g.div, {
            drag: "y",
            ref: d,
            dragConstraints: E,
            dragMomentum: !1,
            dragElastic: 0,
            className: G("border-token-border-default m-auto rounded-full border shadow-md transition-colors", f ? "cursor-pointer bg-black dark:bg-white" : "bg-token-main-surface-primary cursor-grab"),
            style: {
                y: T,
                width: p,
                height: p
            },
            onDragStart: h,
            onDragEnd: A,
            children: e.jsx(ve, {
                open: !0,
                label: v,
                side: "right",
                children: e.jsx("div", {
                    className: "flex h-full w-full items-center justify-center overflow-hidden",
                    children: f ? e.jsx(ne, {
                        onClick: B,
                        className: "icon-xl animate-pulsing text-white dark:text-black"
                    }) : e.jsx(u, {
                        className: "text-token-primary icon-lg m-auto"
                    })
                })
            })
        })
    })
}
const W = 280
  , nt = 235
  , ye = 1250
  , ot = 56
  , st = 32
  , it = 28;
function rt({top: o}) {
    return e.jsx(g.div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "absolute start-1/2 m-auto h-1 w-1 -translate-x-1/2 rounded-full bg-gray-300",
        style: {
            top: o
        }
    })
}
function gt({bottom: o=20, right: r=20, isEmbeddedInPromptArea: s=!1, disableHint: c=!1, disableOverlay: m=!1, onCancel: h, onExpandedChange: f, onSubmit: u, isRequestActive: n=!1, isVisuallyHidden: x=!1, actions: p}) {
    const [k,E] = l.useState(!1)
      , [d,w] = l.useState(!c && !n)
      , [V,C] = l.useState(!0)
      , [N,v] = l.useState(null)
      , [T,A] = l.useState(!1)
      , [B,M] = l.useState(!1)
      , [z,D] = l.useState(!1)
      , [y,H] = l.useState(null)
      , [P,Y] = l.useState(null)
      , [U,q] = l.useState(null)
      , se = !V
      , ie = $e()
      , J = s && !d
      , i = J ? st : ot
      , re = I()
      , ae = oe()
      , je = Ke()
      , S = l.useRef(null)
      , j = n || k
      , F = n && !d && V;
    l.useEffect( () => {
        d && !B && M(!0),
        f?.(d)
    }
    , [d, B]),
    l.useEffect( () => {
        T && !j && !y && (S.current != null && clearTimeout(S.current),
        w(!0)),
        !T && !j && !y && (S.current != null && clearTimeout(S.current),
        S.current = window.setTimeout( () => {
            w(!1),
            v(null),
            D(!1)
        }
        , ye))
    }
    , [T, j, y, d]),
    l.useEffect( () => {
        if (n) {
            v(null);
            return
        }
        E(!1),
        !B && !c && (M(!0),
        w(!0),
        S.current != null && clearTimeout(S.current),
        S.current = window.setTimeout( () => {
            w(!1),
            v(null),
            D(!1),
            M(!0)
        }
        , ye))
    }
    , [n, c, B]);
    const ee = t => {
        v(t)
    }
      , K = (t, a, b) => {
        A(!1),
        E(!0),
        w(!1),
        v(null),
        D(!1),
        H(null),
        Y(null),
        q(null);
        const Q = je()
          , xe = (O, Z) => {
            we.logButtonClick(Re.ACCELERATOR, {
                action: {
                    action: b.action,
                    id: b.id,
                    title: b.title
                },
                prompt: a,
                sourceFrom: O,
                sourceTo: Z
            })
        }
        ;
        if (Q && Je(Q)) {
            const {state: O} = Q
              , {sourceFrom: Z, sourceTo: te} = ze(O);
            if (xe(Z, te),
            Z == null || te == null) {
                u?.(t, null, a, b);
                return
            }
            u?.(t, {
                start: Z,
                end: te
            }, a, b);
            const Ce = O.tr.setSelection(Fe.create(O.doc, O.selection.anchor));
            Q.dispatch(Ce);
            return
        }
        xe(),
        u?.(t, null, a, b)
    }
      , X = p[0]
      , ke = p.slice(1)
      , $ = !!y && p.find( ({id: t}) => t === y)
      , R = !!P && p.find( ({id: t}) => t === P)
      , _ = !!U && p.find( ({id: t}) => t === U)
      , ce = (t, a) => {
        if (se)
            return;
        if (!T) {
            A(!0);
            return
        }
        const {id: b} = a;
        if ("scrub"in a)
            return H(b);
        if ("menu"in a)
            return Y(b);
        if ("grid"in a)
            return q(b);
        ee(b)
    }
      , le = (t, a) => {
        se || "prompt"in a && K(t, re.formatMessage(a.prompt), a)
    }
      , Ee = ke.map(t => {
        if (!d)
            return null;
        const {id: a} = t;
        return e.jsx(ge, {
            accelerator: t,
            isConfirming: a === N,
            isCancelledScrubber: z,
            size: i,
            onClick: b => ce(b, t),
            onSubmit: b => le(b, t)
        }, a)
    }
    )
      , ue = l.useRef(null);
    l.useEffect( () => {
        const {current: t} = ue;
        if (t)
            return Ze(document, {
                mousedown: ({target: a}) => {
                    a instanceof HTMLElement && !t.contains(a) && (w(!1),
                    v(null),
                    D(!1),
                    A(!1),
                    H(null),
                    Y(null),
                    q(null))
                }
            })
    }
    , [y, P, U]);
    const de = Math.round(W / i) * 2
      , me = [];
    let fe = 0;
    for (let t = 0; t < de - 1; t++)
        fe += W / de,
        me.push(e.jsx(rt, {
            top: fe
        }));
    const he = e.jsx(g.div, {
        ref: ue,
        initial: {
            opacity: 0,
            scale: .85,
            borderRadius: i / 2
        },
        exit: {
            opacity: 0,
            borderRadius: i / 2
        },
        className: G("border-token-border-default absolute overflow-visible border transition-colors select-none", Oe.accelerators, {
            "pointer-events-none": x,
            "bg-token-main-surface-primary shadow-xl": d && !y && !n,
            "bg-token-main-surface-primary shadow-lg": !d && !y && !n && !s,
            "bg-token-main-surface-primary border-transparent shadow-sm": !d && !y && !n && s,
            "bg-token-main-surface-secondary border-transparent": y && !n,
            "bg-token-main-surface-primary": n && !F,
            "bg-black! text-white!": !ie && F,
            "bg-white! text-black!": ie && F
        }),
        style: {
            right: r,
            bottom: o
        },
        animate: {
            scale: j || F || k ? .85 : 1,
            opacity: x ? 0 : 1,
            borderRadius: P && R && !j || U && _ && !j ? it : i / 2
        },
        onHoverStart: () => {
            S.current != null && clearTimeout(S.current),
            A(!0)
        }
        ,
        onHoverEnd: () => A(!1),
        children: e.jsx(pe, {
            children: P && R && "menu"in R && !j ? e.jsx(g.div, {
                initial: {
                    height: i,
                    width: i
                },
                transition: L,
                animate: {
                    height: W,
                    width: "auto"
                },
                exit: {
                    height: i,
                    width: i
                },
                children: e.jsx(Ye, {
                    isConfirming: N === R.id,
                    onConfirm: () => ee(R.id),
                    onSubmit: (t, a) => K(t, a, R),
                    menu: R.menu
                })
            }) : U && _ && "grid"in _ && !j ? e.jsx(g.div, {
                initial: {
                    height: i,
                    width: i
                },
                transition: L,
                animate: {
                    height: nt,
                    width: "auto"
                },
                exit: {
                    height: i,
                    width: i
                },
                children: e.jsx(Qe, {
                    title: re.formatMessage(_.title),
                    onSubmit: (t, a) => K(t, a, _),
                    grid: _.grid
                })
            }) : y && $ && !j ? e.jsxs(g.div, {
                initial: {
                    height: i,
                    width: i
                },
                transition: L,
                animate: {
                    height: W,
                    width: i
                },
                exit: {
                    height: i,
                    width: i
                },
                onClick: () => {
                    v(null)
                }
                ,
                children: [e.jsx(tt, {
                    onDragStart: () => v(null),
                    isConfirming: N === $.id,
                    onConfirm: () => ee($.id),
                    onSubmit: (t, a) => K(t, a, $),
                    onCancel: () => {
                        H(null),
                        D(!0)
                    }
                    ,
                    size: i,
                    acceleratorScrubber: $
                }), me]
            }) : e.jsxs(g.div, {
                className: "flex flex-col",
                initial: s ? !1 : {
                    height: i,
                    width: i
                },
                transition: L,
                animate: {
                    height: d ? i * p.length : i,
                    width: i
                },
                exit: {
                    height: i,
                    width: i
                },
                onAnimationComplete: () => C(!0),
                onAnimationStart: () => C(!1),
                children: [e.jsx(pe, {
                    children: Ee
                }), e.jsx("div", {
                    className: "flex items-center",
                    style: {
                        width: i,
                        height: i
                    },
                    children: j ? F ? e.jsx(Se, {
                        title: at.cancel,
                        icon: e.jsx(De, {
                            className: G("animate-pulsing m-auto shrink-0", J ? "h-6 w-6" : "h-10 w-10")
                        }),
                        isSmall: J,
                        opacity: 1,
                        size: i,
                        onClick: () => {
                            v(null),
                            h?.()
                        }
                    }) : e.jsx(He, {
                        size: 20,
                        className: "text-token-text-secondary m-auto"
                    }) : e.jsx(ge, {
                        disableHeightAnimation: s,
                        disableLabel: ae || !d,
                        isCancelledScrubber: z,
                        accelerator: X,
                        isConfirming: N === X.id,
                        opacity: d ? void 0 : 1,
                        isSmall: J,
                        size: i,
                        onSubmit: t => le(t, X),
                        onClick: t => ce(t, X)
                    })
                })]
            })
        })
    });
    return m || ae ? he : e.jsxs(e.Fragment, {
        children: [d && e.jsx(Le, {
            zIndexKey: "acceleratorsOverlay",
            className: "bg-white/95 dark:bg-black/85"
        }), he]
    })
}
const at = Te({
    cancel: {
        id: "Hov840",
        defaultMessage: "Cancel"
    }
});
export {gt as D, pt as a, ze as g, Je as i, Ke as u};
//# sourceMappingURL=n6h2c0196v3vnzav.js.map
