import {j6 as m, a5 as u, cJ as d, cK as g, fQ as p} from "./dc2xxjkicf2pz0mj.js";
import {O as f, P as h, r as a, j as o, e as l, M as r} from "./juy90og0wtbp77qa.js";
import {C as z} from "./f8udhqz4016gh645.js";
import {e as x, f as y} from "./gvmh4kt4ryn7x9gx.js";
import {At as G, ak as j} from "./ckp56qklot786ulr.js";
import {d as M} from "./btouzu0b6h5eiejj.js";
import {G as c} from "./ny1l5mkn22geg92j.js";
function _(e) {
    const t = G(e.gizmo.display.name);
    return t == null ? [] : [{
        title: t
    }, {
        property: "og:site_name",
        content: "ChatGPT"
    }, {
        property: "og:type",
        content: "website"
    }, {
        property: "og:title",
        content: t
    }, ...e.gizmo.display.description ? [{
        name: "description",
        content: e.gizmo.display.description
    }, {
        property: "og:description",
        content: e.gizmo.display.description
    }] : [], ...e.gizmo.display.profile_picture_url ? [{
        property: "og:image",
        content: e.gizmo.display.profile_picture_url
    }, {
        property: "og:image:width",
        content: "512"
    }, {
        property: "og:image:height",
        content: "512"
    }] : []]
}
const O = m(function() {
    const t = f()
      , {gizmoId: i} = h();
    switch (t.kind) {
    case "anon_gizmo":
        return o.jsx(x, {
            gizmo: t.gizmo
        }, i);
    case "chat_page":
        return a.createElement(E, {
            ...t,
            key: i,
            gizmoId: i
        })
    }
});
function E(e) {
    const {data: t, error: i} = j(e.gizmoId)
      , n = u()
      , s = l();
    return a.useEffect( () => {
        t == null && i != null && s(d(g.GIZMO_NOT_FOUND))
    }
    , [s, t, i]),
    i != null && n != null ? o.jsx(P, {}) : n == null ? o.jsx(v, {
        gizmo: t
    }) : a.createElement(z, {
        ...e,
        key: e.gizmoId
    })
}
function P() {
    return o.jsx(c, {
        children: o.jsxs("div", {
            className: "flex h-full w-full flex-col items-center justify-center",
            children: [o.jsx("div", {
                className: "font-bold",
                children: o.jsx(r, {
                    id: "gizmo.loadError",
                    defaultMessage: "We're having trouble loading this GPT."
                })
            }), o.jsx(r, {
                id: "gizmo.loadErrorRefresh",
                defaultMessage: "Please refresh the page, or try again later"
            })]
        })
    })
}
const S = ({data: e, matches: t}) => e?.kind === "anon_gizmo" ? _(e.gizmo) : t.flatMap(i => i.meta ?? []);
function v({gizmo: e}) {
    const t = l();
    return o.jsx(c, {
        children: o.jsx(M, {
            gizmo: e,
            children: o.jsxs("div", {
                className: "mt-7 flex flex-col gap-4",
                children: [o.jsx(y, {
                    onClick: () => p(t, "Gizmo page upsell button"),
                    children: o.jsx(r, {
                        id: "gizmo.upsell",
                        defaultMessage: "Sign up to chat"
                    })
                }), o.jsx("div", {
                    className: "text-token-text-tertiary text-sm",
                    children: o.jsx(r, {
                        id: "gizmo.loginUpsell",
                        defaultMessage: "Sign up or Log in to chat"
                    })
                })]
            })
        })
    })
}
export {O as G, E as a, S as m};
//# sourceMappingURL=okkrhw3l0558llcr.js.map
