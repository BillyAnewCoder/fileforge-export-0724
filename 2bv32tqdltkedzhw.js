import {r as o, j as e, A as O, m as T, h as _, M as N} from "./juy90og0wtbp77qa.js";
import {C as S, a5 as z, cF as R, B as U, hs as q, dX as D, bd as H, bn as B, hu as Q, b2 as X, b3 as Y, e9 as Z, D as G} from "./dc2xxjkicf2pz0mj.js";
import {u as J} from "./ktek6k3hwnufzduj.js";
import {n as w, A as V, iN as K, a3 as W, fJ as $, iO as ee, dJ as y, iP as se, iQ as te} from "./ckp56qklot786ulr.js";
import {V as ae, u as oe} from "./njob26zxpz8xevub.js";
import "./mia7txooqhkpbw7w.js";
import "./cir7oqlbi88or9cr.js";
import "./hisrfv493df9w8hp.js";
import "./hort3ndd4wla0a2j.js";
import "./nqj34k5dky4x5suq.js";
const ne = s => o.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...s
}, o.createElement("path", {
    d: "M3.37834 9.60246C3.7449 9.62185 4.02734 9.93509 4.00822 10.3017C3.89209 12.5196 4.84591 14.5463 6.42131 15.8798L6.74455 16.1366L6.84416 16.2284C7.04921 16.4595 7.0705 16.8112 6.87834 17.0683C6.68575 17.3253 6.34255 17.4033 6.06291 17.2714L5.94767 17.2021L5.56193 16.8954C3.6826 15.3045 2.54117 12.8823 2.6801 10.2314C2.69958 9.86498 3.0119 9.58345 3.37834 9.60246Z"
}), o.createElement("path", {
    d: "M6.70744 9.77727C7.07391 9.79665 7.35533 10.109 7.33635 10.4755C7.2768 11.6117 7.76575 12.6502 8.57365 13.3339L8.73869 13.4657L8.8383 13.5566C9.04366 13.7876 9.06556 14.1391 8.87345 14.3964C8.68111 14.6536 8.33771 14.732 8.05802 14.6005L7.94181 14.5302L7.71427 14.3495C6.60252 13.4085 5.926 11.9752 6.00822 10.4062C6.02753 10.0395 6.34073 9.75805 6.70744 9.77727Z"
}), o.createElement("path", {
    d: "M12.4047 2.90813C12.602 2.67007 12.9464 2.5949 13.2299 2.74602C13.5133 2.8972 13.6427 3.22499 13.5551 3.52141L13.5033 3.64543L10.8237 8.67082C10.7643 8.78281 10.8453 8.91774 10.9721 8.91789H12.0834C12.4505 8.91794 12.7482 9.21588 12.7485 9.58293V11.2499C12.7486 12.2632 13.5701 13.0849 14.5834 13.0849H16.6664L16.8012 13.0986C17.1038 13.1607 17.3313 13.4289 17.3315 13.7499C17.3313 14.071 17.1039 14.3391 16.8012 14.4013L16.6664 14.415H14.5834C12.8355 14.415 11.4186 12.9978 11.4184 11.2499V10.248H10.9721C9.84126 10.2478 9.11802 9.04274 9.64982 8.04485L12.3295 3.02043L12.4047 2.90813Z"
}));
function b(s) {
    return e.jsx(S, {
        testId: "modal-voice-picker",
        isOpen: s.isOpen,
        onClose: s.onClose,
        type: "success",
        size: "fullscreen",
        children: e.jsx(O, {
            children: e.jsx(T.div, {
                children: e.jsx(ae, {
                    conversationId: s.conversationId,
                    onClose: s.onClose,
                    cameFromNux: s.cameFromNux,
                    initialVoiceName: s.initialVoiceName
                })
            })
        })
    })
}
function ie({conversationId: s, initialVoiceName: m}) {
    const t = _()
      , i = w(V.hasSeenAdvancedVoiceNuxFullPage)
      , f = z()
      , n = f?.isPlus() ?? !1
      , c = f?.isEnterprisey() ?? !1
      , r = !n && !c
      , l = "https://help.openai.com/en/articles/8400625-voice-mode-faq#h_c5d6fe534b"
      , [u,x] = o.useState(!1)
      , [h,a] = o.useState(!1)
      , [g,v] = o.useState(!1)
      , [p,P] = o.useState(!0);
    o.useEffect( () => {
        requestAnimationFrame( () => a(!0))
    }
    , []);
    const A = () => {
        v(!0),
        q.voiceAdvancedDisclosureAccepted.click(),
        x(!0),
        setTimeout(async () => {
            P(!1)
        }
        , ee)
    }
      , j = () => {
        i.markAsViewed()
    }
      , k = e.jsxs("div", {
        className: "flex items-start",
        children: [e.jsx("div", {
            className: "shrink-0",
            children: e.jsx(K, {
                className: "me-4 h-8 w-8"
            })
        }), e.jsxs("div", {
            className: "text-start",
            children: [e.jsx("h4", {
                className: "text-token-text-primary font-semibold",
                children: t.formatMessage({
                    id: "TFfx7w",
                    defaultMessage: "Natural conversations"
                })
            }), e.jsx("p", {
                className: "text-token-text-secondary",
                children: t.formatMessage({
                    id: "qR+v5Q",
                    defaultMessage: "Senses and responds to interruptions, humor, and more."
                })
            })]
        })]
    })
      , F = e.jsxs("div", {
        className: "flex items-start",
        children: [e.jsx("div", {
            className: "shrink-0",
            children: e.jsx(W, {
                className: "me-4 h-8 w-8"
            })
        }), e.jsxs("div", {
            className: "text-start",
            children: [e.jsx("h4", {
                className: "text-token-text-primary font-semibold",
                children: t.formatMessage({
                    id: "br49Gd",
                    defaultMessage: "Free monthly preview"
                })
            }), e.jsx("p", {
                className: "text-token-text-secondary",
                children: t.formatMessage({
                    id: "LhOfga",
                    defaultMessage: "Use advanced voice for a short period each month."
                })
            })]
        })]
    })
      , L = e.jsxs("div", {
        className: "flex items-start",
        children: [e.jsx("div", {
            className: "shrink-0",
            children: e.jsx(ne, {
                className: "me-4 h-8 w-8"
            })
        }), e.jsxs("div", {
            className: "text-start",
            children: [e.jsx("h4", {
                className: "text-token-text-primary font-semibold",
                children: t.formatMessage({
                    id: "84QiAT",
                    defaultMessage: "Multiple voices"
                })
            }), e.jsx("p", {
                className: "text-token-text-secondary",
                children: t.formatMessage({
                    id: "yYgwEW",
                    defaultMessage: "Offers an expanded set of voices to choose from."
                })
            })]
        })]
    })
      , M = e.jsxs("div", {
        className: "flex items-start",
        children: [e.jsx("div", {
            className: "shrink-0",
            children: e.jsx($, {
                className: "me-4 h-8 w-8"
            })
        }), e.jsxs("div", {
            className: "text-start",
            children: [e.jsx("h4", {
                className: "text-token-text-primary font-semibold",
                children: t.formatMessage({
                    id: "M/x7uJ",
                    defaultMessage: "Personalized to you"
                })
            }), e.jsx("p", {
                className: "text-token-text-secondary",
                children: t.formatMessage({
                    id: "QZXq7u",
                    defaultMessage: "Can use memory and custom instructions to shape responses."
                })
            })]
        })]
    })
      , C = e.jsxs("div", {
        className: "flex items-start",
        children: [e.jsx("div", {
            className: "shrink-0",
            children: e.jsx(R, {
                className: "me-4 h-8 w-8"
            })
        }), e.jsxs("div", {
            className: "text-start",
            children: [e.jsx("h4", {
                className: "text-token-text-primary font-semibold",
                children: t.formatMessage({
                    id: "e6n5kr",
                    defaultMessage: "You’re in control"
                })
            }), e.jsx("p", {
                className: "text-token-text-secondary",
                children: c ? e.jsx(N, {
                    id: "4szv66",
                    defaultMessage: "Your audio recordings are saved but not used for training. Learn how to <link>manage recordings</link>.",
                    values: {
                        link: d => e.jsx("a", {
                            href: l,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "underline",
                            children: d
                        })
                    }
                }) : e.jsx(N, {
                    id: "M/k4S5",
                    defaultMessage: "Audio recordings are saved, and you can delete them at any time. Learn how to <link>manage recordings</link>.",
                    values: {
                        link: d => e.jsx("a", {
                            href: l,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "underline",
                            children: d
                        })
                    }
                })
            })]
        })]
    })
      , I = r ? [F, k, M, C] : [k, L, M, C];
    return e.jsxs(e.Fragment, {
        children: [e.jsx(b, {
            isOpen: u,
            onClose: j,
            conversationId: s,
            cameFromNux: !0,
            initialVoiceName: m
        }), e.jsx(S, {
            testId: "modal-advanced-voice-nux",
            isOpen: p,
            onClose: j,
            type: "success",
            size: "fullscreen",
            className: `bg-white transition-opacity duration-300 dark:bg-gray-800 ${h && !g ? "opacity-100" : "opacity-0"}`,
            showOverlayBackground: !1,
            children: e.jsxs("div", {
                className: "mx-auto flex h-full w-full max-w-lg flex-col items-center justify-center px-4 text-center",
                children: [e.jsx("h1", {
                    className: "text-token-text-primary mb-9 text-2xl font-semibold",
                    children: r ? t.formatMessage({
                        id: "XV3+9K",
                        defaultMessage: "Sneak a peek at advanced voice mode"
                    }) : t.formatMessage({
                        id: "9YnxDX",
                        defaultMessage: "Say hello to advanced voice mode"
                    })
                }), e.jsx("div", {
                    className: "mb-9 space-y-5",
                    children: I.map( (d, E) => e.jsx("div", {
                        children: d
                    }, E))
                }), e.jsxs("p", {
                    className: "text-token-text-primary mb-9 text-sm",
                    children: [t.formatMessage({
                        id: "vtcf3s",
                        defaultMessage: "Voice mode can make mistakes — check important info."
                    }), e.jsx("br", {}), t.formatMessage({
                        id: "4nw2S2",
                        defaultMessage: "Usage limits may change."
                    })]
                }), e.jsx(U, {
                    className: "bg-token-text-primary rounded-full px-20 py-3 font-semibold",
                    onClick: A,
                    children: e.jsx(N, {
                        id: "ppi93b",
                        defaultMessage: "Continue"
                    })
                })]
            })
        })]
    })
}
function ce() {
    const s = w(V.hasSeenAdvancedVoiceNuxFullPage);
    return !s.isLoading && s.eligible
}
function pe({clientThreadId: s}) {
    const m = y(a => a.showVoicePicker)
      , t = y(a => a.showNuxFullPage)
      , i = se()
      , n = D(s) ?? s
      , {isUnauthenticated: c} = H()
      , {startVoiceMode: r} = oe()
      , {prospectiveModelId: l} = te(s)
      , {setValue: u} = J(B.VoiceName)
      , x = ce()
      , h = Q();
    return o.useEffect( () => {
        const a = sessionStorage.getItem("selectedVoiceName")
          , g = async v => {
            try {
                sessionStorage.removeItem("selectedVoiceName"),
                await r({
                    voice: v,
                    conversation_id: void 0,
                    eventSource: "login_page",
                    voice_mode: "advanced",
                    clientThreadId: Z(),
                    gizmo_id: X.getGizmoId(Y(n)),
                    requested_default_model: l ?? void 0,
                    skipCacheReason: "login-direct-to-voice-mode"
                })
            } catch (p) {
                G.addError(`Failed to start voice mode after voice picker: ${p}`, {
                    protocol: h
                })
            }
        }
        ;
        a && !c && (u(a),
        g(a))
    }
    , [n, c, u, r, l, h]),
    o.useEffect( () => {
        x || i.setState(a => {
            a.showNuxFullPage = !1
        }
        )
    }
    , [x, i]),
    t ? e.jsx(ie, {
        conversationId: n
    }) : m ? e.jsx(b, {
        isOpen: m,
        onClose: () => {
            i.setState(a => {
                a.showVoicePicker = !1
            }
            )
        }
        ,
        conversationId: n,
        cameFromNux: !0
    }) : null
}
export {pe as VoiceModals};
//# sourceMappingURL=2bv32tqdltkedzhw.js.map
