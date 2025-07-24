import {h as u, j as l} from "./juy90og0wtbp77qa.js";
import {e as m, je as a} from "./dc2xxjkicf2pz0mj.js";
import {ak as R, al as c, am as d, an as x} from "./ckp56qklot786ulr.js";
function z({gizmoId: o, onClose: n}) {
    const t = m()
      , {data: s} = R(o)
      , {data: e} = c(t, a.Gizmo)
      , r = u()
      , i = d(t, r, o, a.Gizmo);
    if (e == null)
        return null;
    const p = s != null ? `Report ${s.gizmo.display.name}` : "Report";
    return l.jsx(x, {
        reasons: e.reasons,
        submitReport: i,
        title: p,
        onClose: n,
        header: e.header,
        subHeader: e.header_explanation
    })
}
export {z as G};
//# sourceMappingURL=oednpha5s5kodcso.js.map
