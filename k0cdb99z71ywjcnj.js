import {h as u, u as p, j as f} from "./juy90og0wtbp77qa.js";
import {f as c, e as g, aF as z} from "./dc2xxjkicf2pz0mj.js";
import {em as r, en as S, eo as b, ep as G, dQ as l, eq as I} from "./ckp56qklot786ulr.js";
function h(e) {
    const {data: {gizmos: i}={}} = r();
    return i ? i.some(s => s.resource.gizmo.id === e) : !1
}
function x(e) {
    const {data: {gizmos: i}={}} = r();
    if (!i)
        return !1;
    const {topGizmos: s} = S(i, !0);
    return s.some(o => o.resource.gizmo.id === e)
}
function w({gizmoResource: e, location: i}) {
    const s = h(e.gizmo.id)
      , o = x(e.gizmo.id)
      , a = c(g(), "3925590552")
      , n = u()
      , t = a ? o : s
      , d = t ? n.formatMessage({
        id: "GizmoInformation.pin.sidebar.hide",
        defaultMessage: "Hide from sidebar"
    }) : n.formatMessage({
        id: "GizmoInformation.pin.sidebar.keep",
        defaultMessage: "Keep in sidebar"
    })
      , m = p();
    return f.jsx(z.Item, {
        onClick: () => {
            l.updateGizmoSidebar(m, I, e.gizmo.id, t ? "hide" : "keep", i)
        }
        ,
        icon: t ? b : G,
        children: d
    })
}
export {w as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=k0cdb99z71ywjcnj.js.map
