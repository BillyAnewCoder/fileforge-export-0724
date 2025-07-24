import {h as u, j as e, M as a} from "./juy90og0wtbp77qa.js";
import {ag as m, C as c, by as n} from "./dc2xxjkicf2pz0mj.js";
import {af as g} from "./ckp56qklot786ulr.js";
function x({gizmoId: i, onSuccess: d, onClose: t}) {
    const o = u()
      , l = m()
      , s = g()
      , r = async () => {
        try {
            await s.mutateAsync({
                gizmoId: i
            }),
            d()
        } catch {
            l.danger({
                defaultMessage: "Failed to delete GPT. Please try again.",
                description: "Error message when GPT deletion fails"
            }, {
                toastId: "gizmo_editor_deletion_modal"
            })
        }
    }
    ;
    return e.jsx(c, {
        testId: "modal-gizmo-editor-deletion",
        isOpen: !0,
        onClose: t,
        type: "danger",
        title: e.jsx(a, {
            id: "shLmv5",
            defaultMessage: "Delete GPT"
        }),
        primaryButton: e.jsx(n.Button, {
            title: o.formatMessage({
                id: "nlWRPu",
                defaultMessage: "Delete GPT"
            }),
            color: "danger",
            loading: s.isPending,
            onClick: () => {
                r()
            }
        }),
        secondaryButton: e.jsx(n.Button, {
            title: o.formatMessage({
                id: "D4IuIb",
                defaultMessage: "Cancel"
            }),
            color: "secondary",
            onClick: t
        }),
        children: e.jsx("div", {
            className: "text-sm",
            children: e.jsx(a, {
                id: "zIR+cK",
                defaultMessage: "Are you sure you want to delete this GPT? This cannot be undone."
            })
        })
    })
}
export {x as G};
//# sourceMappingURL=debx62351e4myexq.js.map
