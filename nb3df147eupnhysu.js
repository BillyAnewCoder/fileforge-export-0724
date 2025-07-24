import {hn as l, kP as C, dr as u, dk as f, jU as m} from "./dc2xxjkicf2pz0mj.js";
import {eh as p} from "./ckp56qklot786ulr.js";
import {f as h, r as d} from "./juy90og0wtbp77qa.js";
const v = e => {
    const s = l()
      , a = C()
      , t = u()
      , i = f()
      , r = p();
    return d.useMemo( () => {
        if (e.connector_type === "MCP")
            return (i?.enabledConnectors ?? []).includes("mcp_connector") ? ["chat", "deepResearch"] : ["deepResearch"];
        if (!m[e.id])
            return [];
        if (s.isLoading || a.isLoading || t.isLoading)
            return [];
        const n = [];
        return t.enabled && t.availableConnectors.some(o => o.id === e.id) && n.push("chat"),
        s.enabled && s.availableConnectors.some(o => o.id === e.id) && n.push("deepResearch"),
        a.enabled && a.availableConnectors.some(o => o.id === e.id) && n.push("codex"),
        r.enabled && r.availableConnectors.some(o => o.id === e.id) && n.push("odyssey"),
        n
    }
    , [e, s, a, t, i, r])
}
  , E = (e, s) => Array.isArray(e) ? s.formatList(e.map(a => s.formatMessage(c[a])), {
    style: "narrow"
}) : s.formatMessage(c[e])
  , c = h({
    deepResearch: {
        id: "r08FIf",
        defaultMessage: "Deep research"
    },
    codex: {
        id: "P4DHkR",
        defaultMessage: "Codex"
    },
    chat: {
        id: "c+Ep08",
        defaultMessage: "Chat"
    },
    fileUploads: {
        id: "1JCCyh",
        defaultMessage: "File uploads"
    },
    odyssey: {
        id: "GUAx6M",
        defaultMessage: "Agent mode"
    }
})
  , L = e => d.createElement("svg", {
    width: 12,
    height: 13,
    viewBox: "0 0 12 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e
}, d.createElement("path", {
    d: "M7.47889 2.22522L7.00004 4.49976H9.89115C10.4251 4.49976 10.7132 5.12608 10.3657 5.5315L5.52188 11.1826C5.08994 11.6865 4.27401 11.2587 4.44292 10.6168L5.00004 8.49976H2.07956C1.55049 8.49976 1.26074 7.8834 1.5983 7.476L6.38603 1.6977C6.80234 1.19526 7.61331 1.58671 7.47889 2.22522Z",
    fill: "currentColor"
}));
export {L as S, E as l, v as u};
//# sourceMappingURL=nb3df147eupnhysu.js.map
