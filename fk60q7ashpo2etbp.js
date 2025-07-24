const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/btouzu0b6h5eiejj.js", "assets/dc2xxjkicf2pz0mj.js", "assets/juy90og0wtbp77qa.js", "assets/root-fv49dn40.css", "assets/ckp56qklot786ulr.js", "assets/conversation-small-j9iamy23.css", "assets/o6wb3ptvu0bk81yq.js", "assets/dmfmxszxfbs8gsbx.js", "assets/iacposgqe14fuloa.js", "assets/o7zrzew6ugefv8n2.js", "assets/abebcwj1m9mup3z6.js", "assets/nqj34k5dky4x5suq.js", "assets/hort3ndd4wla0a2j.js", "assets/jsgl3b1bt1ozctr5.js", "assets/ck00y48d3yzt8bq3.js", "assets/hczymk9ojq2shlcf.js", "assets/hisrfv493df9w8hp.js"]))) => i.map(i => d[i]);
import {dW as u, bj as p, as as x, at as f} from "./dc2xxjkicf2pz0mj.js";
import {r as h, j as e} from "./juy90og0wtbp77qa.js";
import {ak as g, bz as v, bA as w} from "./ckp56qklot786ulr.js";
import {g as j} from "./hisrfv493df9w8hp.js";
import {G as b} from "./oednpha5s5kodcso.js";
import "./hort3ndd4wla0a2j.js";
import "./nqj34k5dky4x5suq.js";
const y = x( () => f( () => import("./btouzu0b6h5eiejj.js").then(o => o.h), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])).then(o => o.GizmoInformationDropdown));
function E({clientThreadId: o, inMobileHeader: n, gizmoId: r, triggerButton: i, showGizmoModelPicker: m}) {
    const [l,s] = h.useState(!1)
      , {data: t} = g(r)
      , {data: d} = u()
      , c = p(o).id
      , {modelLabel: a} = j(c, d);
    return t == null ? null : e.jsxs(e.Fragment, {
        children: [e.jsx(y, {
            clientThreadId: o,
            gizmoResource: t,
            showReportModal: () => {
                s(!0)
            }
            ,
            inMobileHeader: n,
            showGizmoModelPicker: m,
            children: i || e.jsxs("div", {
                className: "group touch:min-h-10 hover:bg-token-surface-hover focus-visible:bg-token-surface-hover radix-state-open:bg-token-surface-hover flex min-h-9 cursor-pointer items-center gap-1 overflow-hidden rounded-lg px-2.5 text-lg font-normal whitespace-nowrap",
                children: [t.gizmo.display.name, t.gizmo.tags?.includes(v.Beta) && e.jsx("div", {
                    className: "bg-token-main-surface-secondary text-token-text-primary rounded-full px-1.5 text-xs",
                    children: "Beta"
                }), a && e.jsx("span", {
                    className: "text-token-text-tertiary",
                    children: a
                }), e.jsx(w, {
                    className: "icon-sm text-token-text-tertiary"
                })]
            })
        }), l && e.jsx(b, {
            gizmoId: r,
            onClose: () => {
                s(!1)
            }
        })]
    })
}
export {E as ThreadHeaderGizmoDropdown};
//# sourceMappingURL=fk60q7ashpo2etbp.js.map
