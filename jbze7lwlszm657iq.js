import {j as e, m} from "./juy90og0wtbp77qa.js";
function f({size: r=60, strokeWidth: t=2, arcPercentage: i=.25, initialOffset: o=0, ariaMessage: l, children: s}) {
    const a = (r - t) / 2
      , n = 2 * Math.PI * a
      , c = n * i
      , x = `${c} ${n - c}`;
    return e.jsxs("div", {
        className: "relative flex items-center justify-center",
        role: "progressbar",
        "aria-live": "assertive",
        "aria-valuetext": l,
        children: [e.jsxs(m.svg, {
            width: r,
            height: r,
            viewBox: `0 0 ${r} ${r}`,
            animate: {
                rotate: 360
            },
            transition: {
                repeat: 1 / 0,
                duration: 1.2,
                ease: "linear"
            },
            children: [e.jsx("circle", {
                className: "text-[var(--sidebar-surface-secondary)]",
                stroke: "currentColor",
                fill: "transparent",
                strokeWidth: t,
                cx: r / 2,
                cy: r / 2,
                r: a
            }), e.jsx("circle", {
                className: "text-[var(--main-surface-primary-inverse)]",
                stroke: "currentColor",
                fill: "transparent",
                strokeWidth: t,
                strokeDasharray: x,
                strokeDashoffset: o,
                strokeLinecap: "butt",
                cx: r / 2,
                cy: r / 2,
                r: a
            })]
        }), s && e.jsx("div", {
            className: "absolute inset-0 flex items-center justify-center",
            children: s
        })]
    })
}
export {f as C};
//# sourceMappingURL=jbze7lwlszm657iq.js.map
