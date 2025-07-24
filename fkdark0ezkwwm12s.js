import {h as m, r as g, j as e, M as p, m as f} from "./juy90og0wtbp77qa.js";
import {R as y, J as h} from "./ckp56qklot786ulr.js";
import {ar as n} from "./dc2xxjkicf2pz0mj.js";
function k({ariaLabel: r, isCompact: t=!1, className: l, leftItem: s, onChange: i, rightItem: o, value: a}) {
    const d = m()
      , x = a === s.value
      , u = g.useId();
    return e.jsx(y, {
        type: "single",
        "aria-label": d.formatMessage(r),
        onClick: () => {
            i(x ? o.value : s.value)
        }
        ,
        value: a,
        className: n("bg-token-main-surface-tertiary cursor-pointer rounded-full p-1 select-none", l),
        children: e.jsxs("div", {
            className: "relative grid grid-cols-2 gap-1",
            children: [e.jsx(c, {
                ...s,
                isCompact: t,
                isSelected: a === s.value,
                highlightLayoutId: u
            }), e.jsx(c, {
                ...o,
                isCompact: t,
                isSelected: a === o.value,
                highlightLayoutId: u
            })]
        })
    })
}
function c({ariaLabel: r, isSelected: t, label: l, value: s, isCompact: i=!1, className: o, highlightLayoutId: a}) {
    const d = m();
    return e.jsxs("div", {
        className: n("relative z-10 px-3 text-center font-medium", i ? "py-1 text-xs" : "py-1.5 text-sm"),
        children: [e.jsx(h, {
            "aria-label": r ? d.formatMessage(r) : void 0,
            className: n({
                "text-token-text-primary": t,
                "text-token-text-tertiary": !t
            }),
            value: s,
            children: e.jsx(p, {
                ...l
            })
        }), t ? e.jsx(f.div, {
            transition: {
                duration: .05
            },
            layoutId: a,
            className: n("bg-token-bg-primary absolute inset-0 -z-10 rounded-full shadow-sm", o)
        }) : null]
    })
}
export {k as S};
//# sourceMappingURL=fkdark0ezkwwm12s.js.map
