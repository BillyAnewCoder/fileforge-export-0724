import {r as c, j as e, M as u, h as V, f as M} from "./juy90og0wtbp77qa.js";
import {kC as C, kD as P, ag as k, hs as S, B as D, bm as A, bo as E, bk as I, bl as L, fJ as f, e as F, f as N, bn as v, hq as x, l3 as U, fL as _} from "./dc2xxjkicf2pz0mj.js";
import {ht as R, S as a, hu as T, hv as B, hw as J} from "./ckp56qklot786ulr.js";
import {S as z} from "./mia7txooqhkpbw7w.js";
const G = s => c.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...s
}, c.createElement("path", {
    d: "M6 14.7229V5.27708C6 4.29072 7.08894 3.69295 7.9211 4.22251L15.3428 8.94541C16.1147 9.43661 16.1147 10.5634 15.3428 11.0546L7.92109 15.7775C7.08894 16.307 6 15.7093 6 14.7229Z"
}));
function W({voice: s}) {
    const [i,o] = c.useState(!1)
      , t = C()
      , r = s.voice
      , d = s.preview_url
      , l = c.useRef({
        playPromise: null
    }).current
      , n = P(g => g.isPlaying && g.sourceUrl === d)
      , h = k()
      , m = c.useCallback(async () => {
        if (!t)
            return;
        const g = {
            voice: r,
            source: d
        };
        S.previews.click(g);
        try {
            o(!0),
            t.changeSource(d),
            l.playPromise = t.play(),
            o(!1)
        } catch (w) {
            S.previews.error(w, g),
            h.danger({
                defaultMessage: "Something went wrong playing preview",
                description: "Error message when message playing the preview fails"
            }, {
                toastId: "voice_preview_player_play_error"
            })
        }
    }
    , [t, d, r, l, h])
      , p = c.useCallback( () => {
        t && (l.playPromise ? l.playPromise.then( () => {
            t.stop(),
            l.playPromise = null
        }
        ) : t.stop())
    }
    , [t, l])
      , b = c.useCallback( () => {
        n ? p() : i || m()
    }
    , [p, m, i, n]);
    return c.useEffect( () => () => {
        n && p()
    }
    , [s, n, p]),
    e.jsx(D, {
        onClick: b,
        color: "secondary",
        className: "flex flex-row flex-nowrap items-center gap-1 border-none font-normal",
        loading: i,
        icon: n ? z : G,
        children: n ? e.jsx(u, {
            id: "yGpEMJ",
            defaultMessage: "Stop"
        }) : e.jsx(u, {
            id: "JwYDVp",
            defaultMessage: "Play"
        })
    })
}
function q() {
    const s = F();
    return N(s, "174366048")
}
function $() {
    const s = q()
      , i = I();
    if (!s)
        return null;
    const o = i?.length && !i?.includes(L.VideoScreenSharing);
    return e.jsxs(e.Fragment, {
        children: [R() && e.jsx(f, {
            children: e.jsx(O, {})
        }), e.jsx(f, {
            children: e.jsx(H, {})
        }), o && e.jsx(f, {
            children: e.jsx(Y, {})
        })]
    })
}
function y(s) {
    const {data: i, isLoading: o} = A(s) || {}
      , t = E();
    return {
        isLoading: o,
        value: i,
        setValue: r => {
            t.mutate({
                setting: s,
                value: r
            })
        }
    }
}
function H() {
    const {isLoading: s, value: i, setValue: o} = y(v.VoiceName)
      , t = T()
      , r = B()
      , d = s ? "" : J(i, r)
      , l = t.find( ({voice: n}) => n === d);
    return e.jsx(e.Fragment, {
        children: e.jsx("div", {
            className: "flex flex-col flex-nowrap gap-2",
            children: e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [e.jsx("div", {
                    children: e.jsx(u, {
                        id: "speechSettings.content.voice",
                        defaultMessage: "Voice"
                    })
                }), e.jsxs("div", {
                    className: "flex flex-row flex-nowrap items-center gap-1",
                    children: [l ? e.jsxs(e.Fragment, {
                        children: [e.jsx(W, {
                            voice: l
                        }), e.jsx("div", {
                            className: "h-4 border-s"
                        })]
                    }) : null, e.jsxs(a.Root, {
                        value: d,
                        onValueChange: n => o(n),
                        disabled: s,
                        children: [e.jsxs(a.Trigger, {
                            children: [e.jsx(a.Value, {}), e.jsx(a.Icon, {})]
                        }), e.jsx(a.Portal, {
                            children: e.jsx(a.Content, {
                                children: t.map( ({voice: n, name: h}) => e.jsx(a.Item, {
                                    value: n,
                                    children: h
                                }, n))
                            })
                        })]
                    })]
                })]
            })
        })
    })
}
function O() {
    const {isLoading: s, value: i, setValue: o} = y(v.VoiceMainLanguage);
    return e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [e.jsx("div", {
                children: e.jsx(u, {
                    id: "speechSettings.content.language",
                    defaultMessage: "Spoken language"
                })
            }), e.jsxs(a.Root, {
                value: s ? "" : i ?? x.Auto,
                onValueChange: t => o(t),
                disabled: s,
                children: [e.jsxs(a.Trigger, {
                    children: [e.jsx(a.Value, {}), e.jsx(a.Icon, {})]
                }), e.jsx(a.Portal, {
                    children: e.jsxs(a.Content, {
                        position: "popper",
                        style: {
                            maxHeight: "calc(var(--radix-select-content-available-height) - 5rem)"
                        },
                        children: [e.jsx(a.Item, {
                            value: x.Auto,
                            children: e.jsx(u, {
                                id: "speechSettings.content.autoDetect",
                                defaultMessage: "Auto-detect"
                            })
                        }), Object.entries(x).filter( ([t,r]) => r !== x.Auto).map( ([t,r]) => e.jsx(a.Item, {
                            value: r,
                            className: "capitalize",
                            children: t
                        }, r))]
                    })
                })]
            })]
        }), e.jsx(U, {
            children: e.jsx(u, {
                id: "speechSettings.content.autoDetectDescription",
                defaultMessage: "For best results, select the language you mainly speak. If it's not listed, it may still be supported via auto-detection."
            })
        })]
    })
}
function Y() {
    const s = V();
    return e.jsx(_, {
        label: s.formatMessage(j.voiceAndScreenSharing),
        enabled: !1,
        onChange: () => {}
        ,
        disabled: !0,
        description: s.formatMessage(j.voiceAndScreenSharingDescription)
    })
}
const j = M({
    voiceAndScreenSharing: {
        id: "9dnywk",
        defaultMessage: "Voice and screen sharing"
    },
    voiceAndScreenSharingDescription: {
        id: "wjwSas",
        defaultMessage: "Sharing your screen and video while in voice mode has been disabled by your workspace administrator."
    }
});
export {$ as S, y as u};
//# sourceMappingURL=ktek6k3hwnufzduj.js.map
