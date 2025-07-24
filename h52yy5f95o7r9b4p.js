import {r as u, j as s} from "./juy90og0wtbp77qa.js";
import {gl as x, fq as y, t as D, fp as L} from "./ckp56qklot786ulr.js";
import {ar as c, fK as P, ag as k, iO as U} from "./dc2xxjkicf2pz0mj.js";
var G = (t => (t.READY = "ready",
t.LOG = "log",
t.RUN_START = "run_start",
t.ENVIRONMENT_STATUS = "environment_status",
t.ENVIRONMENT_ERROR = "environment_error",
t.SET_BACKGROUND_COLOR = "set_background_color",
t.SET_INTRINSIC_HEIGHT = "set_intrinsic_height",
t.INSTRUMENT = "instrument",
t.OUTPUT = "output",
t.ERROR = "error",
t.RUN_COMPLETE = "run_complete",
t))(G || {})
  , T = (t => (t.SW_RECONNECT = "sw_reconnect",
t.SW_NOT_SUPPORTED = "sw_not_supported",
t))(T || {});
const $ = ["python", "javascript", "typescript", "html", "react"];
function v(t) {
    return $.includes(t)
}
var z = (t => (t[t.INITIALIZING = 0] = "INITIALIZING",
t[t.INSTALLING_PACKAGES = 1] = "INSTALLING_PACKAGES",
t[t.RUNNING_CODE = 2] = "RUNNING_CODE",
t))(z || {})
  , B = (t => (t.RUN_CODE = "run",
t.STOP_CODE = "stop",
t.PREPARE_ENVIRONMENT = "prepare_environment",
t))(B || {})
  , b = (t => (t.SW_RECONNECT_RESPONSE = "sw_reconnect_response",
t))(b || {})
  , H = (t => (t.FLUSH = "flush",
t.SW_RECONNECT_RESPONSE = "sw_reconnect_response",
t.FETCH_RESPONSE = "fetch_response",
t.INIT = "init",
t.PING = "ping",
t.DISCONNECT = "disconnect",
t))(H || {});
const X = "web-sandbox.oaiusercontent.com"
  , J = `https://${X}`
  , {origin: K} = new URL(J)
  , M = [K, "https://cdn.jsdelivr.net", "https://cdn.tailwindcss.com", "https://esm.sh", "https://unpkg.com", "https://pypi.org", "https://files.pythonhosted.org"]
  , h = t => Array.isArray(t) || x(t) || t instanceof Map || t instanceof Set
  , p = t => t == null || typeof t == "string" || typeof t == "number" || typeof t == "boolean"
  , w = t => x(t) ? Object.entries(t) : Array.from(t.entries())
  , O = t => `${typeof t}:${typeof t == "object" ? JSON.stringify(t) : t}`
  , V = ({isPreview: t=!1, value: n}) => {
    const [e,r] = u.useState(!1);
    return p(n) ? s.jsx(m, {
        value: n,
        depth: 0
    }) : h(n) ? s.jsxs("span", {
        className: c("relative z-0 max-w-full font-mono text-sm leading-6", e && "w-full flex-auto"),
        children: [s.jsxs("span", {
            role: "button",
            className: "group/row flex flex-wrap items-center gap-x-1 italic",
            onClick: () => r(!e),
            children: [!t && s.jsx(R, {
                isExpanded: e
            }), s.jsx(g, {
                value: n,
                depth: 0
            }), s.jsx(E, {
                value: n
            })]
        }), e && !t && s.jsx("div", {
            className: "ps-6",
            children: s.jsx(I, {
                value: n,
                depth: 0
            })
        })]
    }) : s.jsx("span", {
        className: "truncate",
        children: String(n)
    })
}
  , C = ({value: t, depth: n=0}) => h(t) ? s.jsx(I, {
    depth: n,
    value: t
}) : p(t) ? s.jsx(m, {
    depth: n,
    value: t
}) : s.jsx("span", {
    className: "truncate",
    children: String(t)
})
  , g = ({value: t, depth: n=0}) => {
    const e = Array.isArray(t)
      , r = w(t);
    return s.jsxs("div", {
        className: "inline-flex max-w-fit min-w-0 grow basis-0",
        children: [!x(t) && s.jsx(_, {
            isShort: !0,
            isSecondary: !0,
            collection: t
        }), e ? "[" : "{", s.jsx("span", {
            className: "inline-flex max-w-fit min-w-0 shrink grow basis-0 overflow-hidden",
            children: r.map( ([f,l], i) => {
                let a = null;
                return h(l) ? a = s.jsx(_, {
                    collection: l
                }) : p(l) ? a = s.jsx(m, {
                    truncate: !0,
                    depth: n + 1,
                    value: l
                }) : a = s.jsx(C, {
                    depth: n + 1,
                    value: l
                }),
                s.jsxs(u.Fragment, {
                    children: [(x(t) || t instanceof Map) && s.jsx("span", {
                        className: "text-token-text-secondary min-w-[2em] shrink truncate whitespace-pre",
                        children: s.jsx(A, {
                            value: t,
                            propertyKey: f
                        })
                    }), a, i < r.length - 1 && s.jsx("span", {
                        className: "whitespace-pre",
                        children: ", "
                    })]
                }, O(f))
            }
            )
        }), e ? "]" : "}"]
    })
}
  , I = ({value: t, depth: n=0}) => {
    const [e,r] = u.useState( () => new Set)
      , f = w(t);
    return s.jsx("ol", {
        className: "flex flex-col ps-6 font-mono",
        children: f.map( ([l,i]) => {
            const a = O(l)
              , N = e.has(a)
              , o = h(i)
              , S = () => {
                r(j => {
                    const d = new Set(j);
                    return d.has(a) ? d.delete(a) : d.add(a),
                    d
                }
                )
            }
            ;
            return s.jsxs("li", {
                className: c("flex ps-1 whitespace-nowrap", o && "flex-col", !o && "group/row flex-wrap"),
                onClick: j => j.stopPropagation(),
                children: [s.jsxs("span", {
                    onClick: o ? S : void 0,
                    role: o ? "button" : void 0,
                    className: c("group/row z-10 -ms-1 min-w-0 items-center gap-x-1", o ? "flex" : "inline-flex"),
                    children: [o && s.jsxs(s.Fragment, {
                        children: [s.jsx(Z, {}), s.jsx(R, {
                            shiftLeft: !0,
                            isExpanded: N
                        })]
                    }), s.jsx("span", {
                        className: c("font-bold", (x(t) || Array.isArray(t)) && "text-red-900 dark:text-blue-400"),
                        children: s.jsx(A, {
                            value: t,
                            propertyKey: l
                        })
                    }), o && !N && s.jsx(g, {
                        value: i,
                        depth: n + 1
                    }), o && N && s.jsx(_, {
                        isSecondary: !0,
                        collection: i
                    }), o && s.jsx(E, {
                        value: i
                    })]
                }), (!o || N) && s.jsx(C, {
                    value: i,
                    depth: n + 1
                }), (typeof i == "string" || typeof i == "number") && s.jsx(E, {
                    value: i
                })]
            }, a)
        }
        )
    })
}
  , m = ({value: t, truncate: n=!1}) => typeof t == "string" ? s.jsxs("span", {
    className: c("dark:text-blue-75 text-red-500", n && "max-w-fit min-w-[2em] shrink-0 grow basis-0 overflow-hidden text-ellipsis whitespace-nowrap", !n && "break-words break-all whitespace-normal"),
    children: ["'", t, "'"]
}) : s.jsx("span", {
    className: c("whitespace-nowrap", t == null ? "text-token-text-secondary" : "dark:text-brand-purple-600 text-blue-500"),
    children: String(t)
})
  , Z = () => s.jsx("span", {
    className: "absolute start-0 end-0 z-[-1] h-6 rounded-md group-hover/row:bg-gray-50 dark:group-hover/row:bg-gray-700"
})
  , _ = ({collection: t, isSecondary: n=!1, isShort: e=!1}) => {
    let r = null;
    return Array.isArray(t) && t.length > 0 ? r = e ? `(${t.length})` : `Array(${t.length})` : t instanceof Set ? r = `Set(${t.size})` : t instanceof Map ? r = `Map(${t.size})` : x(t) && (r = "{…}"),
    r && s.jsx("span", {
        className: c(n && "text-token-text-secondary"),
        children: r
    })
}
  , A = ({value: t, propertyKey: n}) => x(t) || Array.isArray(t) ? `${D(n)}: ` : t instanceof Map ? s.jsxs("span", {
    className: "inline-flex items-center gap-1",
    children: [p(n) ? s.jsx(m, {
        value: n,
        depth: 0
    }) : s.jsx("span", {
        className: "text-token-text-secondary",
        children: JSON.stringify(n)
    }), s.jsx(U, {
        className: "icon-sm text-token-text-secondary"
    })]
}) : null
  , R = ({isExpanded: t, shiftLeft: n=!1}) => s.jsx("button", {
    className: c("flex h-5 shrink-0 items-center overflow-hidden", n && "ms-[-16px]"),
    children: s.jsx(P, {
        className: c("icon-sm text-token-text-secondary transition-transform", t && "rotate-90")
    })
})
  , E = ({value: t}) => {
    const n = k()
      , e = () => {
        L(JSON.stringify(t), n)
    }
    ;
    return s.jsx("span", {
        className: c("text-token-text-secondary relative inline-block h-4 self-center opacity-0 transition-opacity", "group-hover/row:opacity-100 group-hover/row:delay-500", "hover:after:bg-token-main-surface-tertiary after:pointer-events-none after:absolute after:inset-[-4px] after:z-0 after:rounded-lg after:content-['']"),
        children: s.jsx(y, {
            iconClassName: "icon-sm z-10",
            iconOnly: !0,
            onCopy: e
        })
    })
}
;
export {M as C, z as E, J as L, G as M, V as a, H as b, T as c, b as d, B as e, v as i};
//# sourceMappingURL=h52yy5f95o7r9b4p.js.map
