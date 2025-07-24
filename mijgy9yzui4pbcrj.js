const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/j2k3g2iltcl8vjs8.js", "assets/juy90og0wtbp77qa.js", "assets/dc2xxjkicf2pz0mj.js", "assets/root-fv49dn40.css", "assets/cfod2v11dallp8kv.js", "assets/l7m4sdxmp3n9y1x8.js", "assets/ckp56qklot786ulr.js", "assets/conversation-small-j9iamy23.css", "assets/l3n51a2tb9b2qxpl.js", "assets/njob26zxpz8xevub.js", "assets/ktek6k3hwnufzduj.js", "assets/mia7txooqhkpbw7w.js", "assets/cir7oqlbi88or9cr.js", "assets/hisrfv493df9w8hp.js", "assets/hort3ndd4wla0a2j.js", "assets/nqj34k5dky4x5suq.js", "assets/e2fyqefjfccaah4p.js", "assets/kvlw7edoapaiqmyl.js"]))) => i.map(i => d[i]);
import {hs as _, dX as SA, hu as ue, nr as me, P as ge, bd as he, fq as pe, cu as fe, ct as Ce, g8 as GA, ns as Ee, fQ as yA, b2 as cA, b3 as vA, e9 as ke, by as ve, C as be, ar as lA, dG as JA, aG as BA, e$ as Se, B as Be, hx as QA, hv as Me, aV as Ie, ht as we, ay as xe, e as ye, f as Qe, at as XA, nt as Te, as as Ve} from "./dc2xxjkicf2pz0mj.js";
import {r as o, g as Re, p as je, e as PA, h as Y, j as r, m as Z, A as $} from "./juy90og0wtbp77qa.js";
import {iP as dA, dK as hA, x7 as pA, x8 as TA, x9 as WA, xa as De, o as Ze, xb as w, dJ as I, ag as Le, ao as Oe, j3 as _e, j2 as Ye, dz as MA, iQ as Fe, xc as Ne, iO as Ge, xd as uA, xe as mA, xf as Je, xg as O, ed as Xe} from "./ckp56qklot786ulr.js";
import {a as Pe, $ as We, C as Ue, _ as T, R as qe, b as F, y as Ke, M as He, c as N, W as ze, T as nA, O as UA, N as $e, I as At, d as et, e as tt, f as ot, Y as st, F as nt, S as aA, h as IA, i as at, u as qA, g as bA, j as KA, k as it, l as gA, A as wA, m as P, n as rt, s as ct, B as HA, o as lt, p as dt, q as ut, G as mt, r as gt, v as ht, t as pt, w as ft, x as VA, z as Ct, D as Et, V as kt, E as vt, L as bt, H as St, J as Bt, K as Mt, P as It} from "./njob26zxpz8xevub.js";
import {d as RA} from "./cir7oqlbi88or9cr.js";
import {S as wt} from "./kvlw7edoapaiqmyl.js";
function xt() {
    const A = dA()
      , e = Pe()
      , t = o.useCallback( () => {
        hA.debug("disconnected from room"),
        pA(A)
    }
    , [A])
      , n = o.useCallback(c => {
        e.danger("Something went wrong", {
            toastId: "livekit_room_error"
        }),
        hA.error("an error occurred within the room", c);
        const i = TA(A.getState());
        _.voiceMode.error({
            ...i,
            error: c.message
        }),
        A.setState(a => {
            a.metrics.livekitConnectSuccessTime || (a.metrics.livekitConnectFailTime = new Date)
        }
        ),
        pA(A)
    }
    , [e, A])
      , s = o.useCallback(c => {
        e.danger("Something went wrong", {
            toastId: "livekit_room_error",
            loggingTitle: "Encryption error",
            loggingDescription: c.message
        }),
        hA.error("an encryption error occurred within the room", c);
        const i = TA(A.getState());
        _.voiceMode.error({
            encryptionError: c.message,
            eventSource: "voice-session",
            ...i
        }),
        A.setState(a => {
            a.metrics.livekitConnectSuccessTime || (a.metrics.livekitConnectFailTime = new Date)
        }
        ),
        pA(A)
    }
    , [e, A]);
    return {
        onDisconnected: t,
        onError: n,
        onEncryptionError: s
    }
}
function zA(A) {
    var e, t, n = "";
    if (typeof A == "string" || typeof A == "number")
        n += A;
    else if (typeof A == "object")
        if (Array.isArray(A)) {
            var s = A.length;
            for (e = 0; e < s; e++)
                A[e] && (t = zA(A[e])) && (n && (n += " "),
                n += t)
        } else
            for (t in A)
                A[t] && (n && (n += " "),
                n += t);
    return n
}
function yt() {
    for (var A, e, t = 0, n = "", s = arguments.length; t < s; t++)
        (A = arguments[t]) && (e = zA(A)) && (n && (n += " "),
        n += e);
    return n
}
function Qt(...A) {
    return (...e) => {
        for (const t of A)
            if (typeof t == "function")
                try {
                    t(...e)
                } catch (n) {
                    console.error(n)
                }
    }
}
function $A(...A) {
    const e = {
        ...A[0]
    };
    for (let t = 1; t < A.length; t++) {
        const n = A[t];
        for (const s in n) {
            const c = e[s]
              , i = n[s];
            typeof c == "function" && typeof i == "function" && s[0] === "o" && s[1] === "n" && s.charCodeAt(2) >= 65 && s.charCodeAt(2) <= 90 ? e[s] = Qt(c, i) : (s === "className" || s === "UNSAFE_className") && typeof c == "string" && typeof i == "string" ? e[s] = yt(c, i) : e[s] = i !== void 0 ? i : c
        }
    }
    return e
}
const Tt = {
    connect: !0,
    audio: !1,
    video: !1
};
function Vt(A) {
    const {token: e, serverUrl: t, options: n, room: s, connectOptions: c, connect: i, audio: a, video: l, screen: u, onConnected: m, onDisconnected: g, onError: h, onMediaDeviceFailure: d, onEncryptionError: k, simulateParticipants: C, ...v} = {
        ...Tt,
        ...A
    };
    n && s && T.warn("when using a manually created room, the options object will be ignored. set the desired options directly when creating the room instead.");
    const [p,b] = o.useState();
    o.useEffect( () => {
        b(s ?? new qe(n))
    }
    , [s]);
    const y = o.useMemo( () => {
        const {className: S} = Ke();
        return $A(v, {
            className: S
        })
    }
    , [v]);
    return o.useEffect( () => {
        if (!p)
            return;
        const S = () => {
            const B = p.localParticipant;
            T.debug("trying to publish local tracks"),
            Promise.all([B.setMicrophoneEnabled(!!a, typeof a != "boolean" ? a : void 0), B.setCameraEnabled(!!l, typeof l != "boolean" ? l : void 0), B.setScreenShareEnabled(!!u, typeof u != "boolean" ? u : void 0)]).catch(j => {
                T.warn(j),
                h?.(j)
            }
            )
        }
          , f = B => {
            const j = He.getFailure(B);
            d?.(j)
        }
          , V = B => {
            k?.(B)
        }
        ;
        return p.on(F.SignalConnected, S).on(F.MediaDevicesError, f).on(F.EncryptionError, V),
        () => {
            p.off(F.SignalConnected, S).off(F.MediaDevicesError, f).off(F.EncryptionError, V)
        }
    }
    , [p, a, l, u, h, k, d]),
    o.useEffect( () => {
        if (p) {
            if (C) {
                p.simulateParticipants({
                    participants: {
                        count: C
                    },
                    publish: {
                        audio: !0,
                        useRealTracks: !0
                    }
                });
                return
            }
            if (!e) {
                T.debug("no token yet");
                return
            }
            if (!t) {
                T.warn("no livekit url provided"),
                h?.(Error("no livekit url provided"));
                return
            }
            i ? (T.debug("connecting"),
            p.connect(t, e, c).catch(S => {
                T.warn(S),
                h?.(S)
            }
            )) : (T.debug("disconnecting because connect is false"),
            p.disconnect())
        }
    }
    , [i, e, JSON.stringify(c), p, h, t, C]),
    o.useEffect( () => {
        if (!p)
            return;
        const S = f => {
            switch (f) {
            case N.Disconnected:
                g && g();
                break;
            case N.Connected:
                m && m();
                break
            }
        }
        ;
        return p.on(F.ConnectionStateChanged, S),
        () => {
            p.off(F.ConnectionStateChanged, S)
        }
    }
    , [e, m, g, p]),
    o.useEffect( () => {
        if (p)
            return () => {
                T.info("disconnecting on onmount"),
                p.disconnect()
            }
    }
    , [p]),
    {
        room: p,
        htmlProps: y
    }
}
const Rt = o.forwardRef(function(A, e) {
    const {room: t, htmlProps: n} = Vt(A);
    return o.createElement("div", {
        ref: e,
        ...n
    }, t && o.createElement(We.Provider, {
        value: t
    }, o.createElement(Ue.Provider, {
        value: A.featureFlags
    }, A.children)))
});
function jt(A) {
    return A !== void 0
}
function Dt(...A) {
    return $A(...A.filter(jt))
}
function Zt(A, e={}) {
    const [t,n] = o.useState(ot(A))
      , [s,c] = o.useState(t?.isMuted)
      , [i,a] = o.useState(t?.isSubscribed)
      , [l,u] = o.useState(t?.track)
      , [m,g] = o.useState("landscape")
      , h = o.useRef()
      , {className: d, trackObserver: k} = o.useMemo( () => st(A), [A.participant.sid ?? A.participant.identity, A.source, nt(A) && A.publication.trackSid]);
    return o.useEffect( () => {
        const C = k.subscribe(v => {
            T.debug("update track", v),
            n(v),
            c(v?.isMuted),
            a(v?.isSubscribed),
            u(v?.track)
        }
        );
        return () => C?.unsubscribe()
    }
    , [k]),
    o.useEffect( () => {
        var C, v;
        return l && (h.current && l.detach(h.current),
        (C = e.element) != null && C.current && !(UA(A.participant) && l?.kind === "audio") && l.attach(e.element.current)),
        h.current = (v = e.element) == null ? void 0 : v.current,
        () => {
            h.current && l?.detach(h.current)
        }
    }
    , [l, e.element]),
    o.useEffect( () => {
        var C, v;
        if (typeof ((C = t?.dimensions) == null ? void 0 : C.width) == "number" && typeof ((v = t?.dimensions) == null ? void 0 : v.height) == "number") {
            const p = t.dimensions.width > t.dimensions.height ? "landscape" : "portrait";
            g(p)
        }
    }
    , [t]),
    {
        publication: t,
        isMuted: s,
        isSubscribed: i,
        track: l,
        elementProps: Dt(e.props, {
            className: d,
            "data-lk-local-participant": A.participant.isLocal,
            "data-lk-source": t?.source,
            ...t?.kind === "video" && {
                "data-lk-orientation": m
            }
        })
    }
}
var Lt = typeof aA == "object" && aA && aA.Object === Object && aA
  , Ot = typeof self == "object" && self && self.Object === Object && self;
Lt || Ot || Function("return this")();
const _t = o.forwardRef(function({trackRef: A, onSubscriptionStatusChanged: e, volume: t, muted: n, ...s}, c) {
    const i = At(A)
      , a = o.useRef(null);
    o.useImperativeHandle(c, () => a.current);
    const {elementProps: l, isSubscribed: u, track: m, publication: g} = Zt(i, {
        element: a,
        props: s
    });
    return o.useEffect( () => {
        e?.(!!u)
    }
    , [u, e]),
    o.useEffect( () => {
        m === void 0 || t === void 0 || (m instanceof et ? m.setVolume(t) : T.warn("Volume can only be set on remote audio tracks."))
    }
    , [t, m]),
    o.useEffect( () => {
        g === void 0 || n === void 0 || (g instanceof tt ? g.setEnabled(!n) : T.warn("Can only call setEnabled on remote track publications."))
    }
    , [n, g, m]),
    o.createElement("audio", {
        ref: a,
        ...l
    })
});
function Yt({volume: A, muted: e}) {
    const t = ze([nA.Source.Microphone, nA.Source.ScreenShareAudio, nA.Source.Unknown], {
        updateOnlyOn: [],
        onlySubscribed: !0
    }).filter(n => !UA(n.participant) && n.publication.kind === nA.Kind.Audio);
    return o.createElement("div", {
        style: {
            display: "none"
        }
    }, t.map(n => o.createElement(_t, {
        key: $e(n),
        trackRef: n,
        volume: A,
        muted: e
    })))
}
const jA = A => A.length > 0 ? A.reduce( (e, t) => e + t, 0) / A.length : null
  , M = A => A?.toISOString() ?? null;
function Ae({conversationId: A}) {
    const {shouldDelayDisconnect: e, delayDisconnect: t, immediateDisconnect: n} = IA({
        refetchLater: !0
    })
      , {toggleMute: s} = WA()
      , c = SA(A)
      , i = dA()
      , a = ue()
      , l = me()
      , u = De()
      , m = at();
    return o.useCallback(async g => {
        _.voiceSessionEndedByUser.click(),
        i.setState(k => {
            k.metrics.sessionEndTime = new Date
        }
        ),
        Ze.setState({
            voiceFeedbackThread: c,
            lastVoiceSessionEndTime: new Date
        });
        const {voiceMode: h, metrics: d} = i.getState();
        ge.logEvent("Voice Session End Summary", {
            session_create_time: M(d.sessionCreateTime),
            get_status_sent_time: M(d.getStatusSentTime),
            get_status_success_time: M(d.getStatusSuccessTime),
            get_status_failed_time: M(d.getStatusFailedTime),
            proof_of_work_start_time: M(d.proofOfWorkStartTime),
            proof_of_work_end_time: M(d.proofOfWorkEndTime),
            get_token_sent_time: M(d.getTokenSentTime),
            get_token_success_time: M(d.getTokenSuccessTime),
            get_token_failed_time: M(d.getTokenFailedTime),
            conversation_start_success_time: M(d.conversationStartSuccessTime),
            conversation_start_fail_time: M(d.conversationStartFailTime),
            livekit_connect_time: M(d.livekitConnectTime),
            livekit_connect_success_time: M(d.livekitConnectSuccessTime),
            livekit_connect_fail_time: M(d.livekitConnectFailTime),
            session_connected_time: M(d.sessionConnectedTime),
            session_end_time: M(d.sessionEndTime),
            avg_total_latency_ms: jA(d.totalLatencyMs),
            avg_rtt_ms: jA(d.currentRttMs),
            num_of_turns_speaking: d.numSpeaking,
            num_of_turns_thinking: d.numThinking,
            num_of_turns_listening: d.numListening,
            protocol: a,
            voice_session_id: l,
            reason: l.length === 0 ? "aborted" : g,
            data_channel_open_time: M(d.dataChannelOpenTime),
            conversation_latency_ms: d.conversationLatency,
            ...RA().length > 0 ? {
                status_prefetch_ineligible_reasons: RA().join(",")
            } : {},
            voice_mode: h,
            get_token: {
                ...u
            },
            peer_connection: {
                ...m
            }
        }),
        e ? (i.setState(k => {
            k.video = w.Stopping,
            k.screenshare = w.Stopping
        }
        ),
        await s(),
        t()) : n()
    }
    , [t, n, c, e, s, i, a, l, u, m])
}
var fA, DA;
function Ft() {
    return DA || (DA = 1,
    fA = {
        webm: "data:video/webm;base64,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",
        mp4: "data:video/mp4;base64,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"
    }),
    fA
}
var CA, ZA;
function Nt() {
    if (ZA)
        return CA;
    ZA = 1;
    const {webm: A, mp4: e} = Ft()
      , t = () => typeof navigator < "u" && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream
      , n = () => "wakeLock"in navigator;
    class s {
        constructor() {
            if (this.enabled = !1,
            n()) {
                this._wakeLock = null;
                const i = () => {
                    this._wakeLock !== null && document.visibilityState === "visible" && this.enable()
                }
                ;
                document.addEventListener("visibilitychange", i),
                document.addEventListener("fullscreenchange", i)
            } else
                t() ? this.noSleepTimer = null : (this.noSleepVideo = document.createElement("video"),
                this.noSleepVideo.setAttribute("title", "No Sleep"),
                this.noSleepVideo.setAttribute("playsinline", ""),
                this._addSourceToVideo(this.noSleepVideo, "webm", A),
                this._addSourceToVideo(this.noSleepVideo, "mp4", e),
                this.noSleepVideo.addEventListener("loadedmetadata", () => {
                    this.noSleepVideo.duration <= 1 ? this.noSleepVideo.setAttribute("loop", "") : this.noSleepVideo.addEventListener("timeupdate", () => {
                        this.noSleepVideo.currentTime > .5 && (this.noSleepVideo.currentTime = Math.random())
                    }
                    )
                }
                ))
        }
        _addSourceToVideo(i, a, l) {
            var u = document.createElement("source");
            u.src = l,
            u.type = `video/${a}`,
            i.appendChild(u)
        }
        get isEnabled() {
            return this.enabled
        }
        enable() {
            return n() ? navigator.wakeLock.request("screen").then(i => {
                this._wakeLock = i,
                this.enabled = !0,
                console.log("Wake Lock active."),
                this._wakeLock.addEventListener("release", () => {
                    console.log("Wake Lock released.")
                }
                )
            }
            ).catch(i => {
                throw this.enabled = !1,
                console.error(`${i.name}, ${i.message}`),
                i
            }
            ) : t() ? (this.disable(),
            console.warn(`
        NoSleep enabled for older iOS devices. This can interrupt
        active or long-running network requests from completing successfully.
        See https://github.com/richtr/NoSleep.js/issues/15 for more details.
      `),
            this.noSleepTimer = window.setInterval( () => {
                document.hidden || (window.location.href = window.location.href.split("#")[0],
                window.setTimeout(window.stop, 0))
            }
            , 15e3),
            this.enabled = !0,
            Promise.resolve()) : this.noSleepVideo.play().then(a => (this.enabled = !0,
            a)).catch(a => {
                throw this.enabled = !1,
                a
            }
            )
        }
        disable() {
            n() ? (this._wakeLock && this._wakeLock.release(),
            this._wakeLock = null) : t() ? this.noSleepTimer && (console.warn(`
          NoSleep now disabled for older iOS devices.
        `),
            window.clearInterval(this.noSleepTimer),
            this.noSleepTimer = null) : this.noSleepVideo.pause(),
            this.enabled = !1
        }
    }
    return CA = s,
    CA
}
var Gt = Nt();
const Jt = Re(Gt)
  , LA = "mode"
  , Xt = "voice"
  , Pt = () => {
    const [A,e] = je()
      , t = A.get(LA)
      , n = dA()
      , s = I(m => m.isVoiceModeActive)
      , {isUnauthenticated: c} = he()
      , i = Le()
      , a = pe()
      , l = !c
      , u = PA();
    o.useEffect( () => {
        t === Xt && !s && (e(m => (m.delete(LA),
        m)),
        a ? u("/update-app") : l ? n.setState({
            isVoiceModeActive: !0
        }) : i({
            authType: "login",
            callbackUrl: window.location.href
        }))
    }
    , [l, a, t, u, i, e, s, n])
}
  , Wt = A => o.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...A
}, o.createElement("path", {
    d: "M15.7806 10.1963C16.1326 10.3011 16.3336 10.6714 16.2288 11.0234L16.1487 11.2725C15.3429 13.6262 13.2236 15.3697 10.6644 15.6299L10.6653 16.835H12.0833L12.2171 16.8486C12.5202 16.9106 12.7484 17.1786 12.7484 17.5C12.7484 17.8214 12.5202 18.0894 12.2171 18.1514L12.0833 18.165H7.91632C7.5492 18.1649 7.25128 17.8672 7.25128 17.5C7.25128 17.1328 7.5492 16.8351 7.91632 16.835H9.33527L9.33429 15.6299C6.775 15.3697 4.6558 13.6262 3.84992 11.2725L3.76984 11.0234L3.74445 10.8906C3.71751 10.5825 3.91011 10.2879 4.21808 10.1963C4.52615 10.1047 4.84769 10.2466 4.99347 10.5195L5.04523 10.6436L5.10871 10.8418C5.8047 12.8745 7.73211 14.335 9.99933 14.335C12.3396 14.3349 14.3179 12.7789 14.9534 10.6436L15.0052 10.5195C15.151 10.2466 15.4725 10.1046 15.7806 10.1963ZM13.5814 9.16699C13.5812 11.1448 11.9781 12.7479 10.0003 12.748C8.02232 12.748 6.41845 11.1449 6.41828 9.16699V5.41699C6.41828 3.43889 8.02221 1.83496 10.0003 1.83496C11.9783 1.83514 13.5814 3.439 13.5814 5.41699V9.16699Z"
}))
  , Ut = A => o.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...A
}, o.createElement("path", {
    d: "M4.21847 10.1963C4.52646 10.1048 4.84811 10.2467 4.99386 10.5195L5.04561 10.6436L5.10909 10.8418C5.80511 12.8745 7.73253 14.335 9.99972 14.335C10.5286 14.3349 11.0387 14.2541 11.5192 14.1064L12.5534 15.1406C11.9635 15.3929 11.3293 15.5623 10.6648 15.6299L10.6657 16.835H12.0837L12.2175 16.8486C12.5205 16.9107 12.7487 17.1787 12.7487 17.5C12.7487 17.8213 12.5205 18.0893 12.2175 18.1514L12.0837 18.165H7.91671C7.54959 18.1649 7.25167 17.8672 7.25167 17.5C7.25167 17.1328 7.54959 16.8351 7.91671 16.835H9.33565L9.33468 15.6299C6.77542 15.3697 4.65621 13.6261 3.8503 11.2725L3.77022 11.0234L3.74483 10.8906C3.71789 10.5825 3.9105 10.2879 4.21847 10.1963Z"
}), o.createElement("path", {
    d: "M2.52901 2.5293C2.75621 2.3021 3.10782 2.274 3.36593 2.44434L3.47042 2.5293L17.4704 16.5293L17.5554 16.6338C17.7259 16.8919 17.6977 17.2434 17.4704 17.4707C17.2431 17.6978 16.8916 17.7261 16.6335 17.5557L16.529 17.4707L2.52901 3.4707L2.44405 3.36621C2.2737 3.10816 2.30194 2.75653 2.52901 2.5293Z"
}), o.createElement("path", {
    d: "M15.0056 10.5195C15.1514 10.2467 15.4729 10.1047 15.781 10.1963C16.1328 10.3012 16.3339 10.6715 16.2292 11.0234L16.1491 11.2725C15.9624 11.8178 15.7043 12.3299 15.3874 12.7988L14.4245 11.8359C14.6481 11.4661 14.8279 11.0665 14.9538 10.6436L15.0056 10.5195Z"
}), o.createElement("path", {
    d: "M10.156 12.7432C10.1045 12.7454 10.0527 12.748 10.0007 12.748C8.0227 12.748 6.41884 11.1449 6.41866 9.16699V9.00586L10.156 12.7432Z"
}), o.createElement("path", {
    d: "M10.0007 1.83496C11.9785 1.83529 13.5817 3.4391 13.5817 5.41699V9.16699C13.5817 9.70173 13.4627 10.2084 13.2526 10.6641L6.67452 4.08594C7.20297 2.76693 8.49303 1.83496 10.0007 1.83496Z"
}))
  , qt = A => o.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...A
}, o.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5 2.66797C14.1891 2.66797 14.7461 2.66732 15.1963 2.7041C15.654 2.74151 16.0599 2.82094 16.4365 3.0127L16.6553 3.13477C17.1509 3.43881 17.5548 3.87557 17.8203 4.39649L17.8867 4.53906C18.0309 4.87526 18.0962 5.23621 18.1289 5.63672C18.1657 6.08689 18.165 6.64407 18.165 7.33301V12.666C18.165 13.3548 18.1656 13.9122 18.1289 14.3623C18.0962 14.7631 18.0311 15.1245 17.8867 15.4609L17.8203 15.6035C17.5549 16.1244 17.1508 16.5602 16.6553 16.8643L16.4365 16.9863C16.0599 17.1782 15.6541 17.2575 15.1963 17.2949C14.746 17.3317 14.1891 17.3311 13.5 17.3311H6.5C5.81091 17.3311 5.25395 17.3317 4.80371 17.2949C4.40304 17.2622 4.04236 17.197 3.70606 17.0527L3.56348 16.9863C3.04242 16.7208 2.60583 16.3171 2.30176 15.8213L2.17969 15.6035C1.98782 15.2268 1.90851 14.8202 1.87109 14.3623C1.83435 13.9122 1.83496 13.3548 1.83496 12.666V7.33301C1.83496 6.64407 1.83431 6.08689 1.87109 5.63672C1.90852 5.17906 1.98793 4.77301 2.17969 4.39649C2.48314 3.80107 2.96803 3.31609 3.56348 3.0127C3.94005 2.82094 4.34597 2.74151 4.80371 2.7041C5.25395 2.66732 5.81092 2.66797 6.5 2.66797H13.5ZM5.41699 11.418C5.04984 11.418 4.75214 11.7159 4.75195 12.083C4.75195 12.4044 4.98008 12.6724 5.2832 12.7344L5.41699 12.748L5.51953 12.7529C6.02437 12.8044 6.41878 13.2316 6.41895 13.75C6.41912 14.1171 6.71682 14.415 7.08399 14.415C7.45088 14.4147 7.74885 14.1169 7.74902 13.75C7.74885 12.5429 6.8309 11.5491 5.65527 11.4297L5.41699 11.418ZM5.41699 8.08496C5.04972 8.08496 4.75195 8.38273 4.75195 8.75C4.75195 9.07143 4.98008 9.33944 5.2832 9.40137L5.41699 9.41504L5.63965 9.4209C7.93021 9.53692 9.75195 11.4306 9.75195 13.75C9.75195 14.1173 10.0497 14.415 10.417 14.415C10.7842 14.4149 11.082 14.1172 11.082 13.75C11.082 10.7193 8.70186 8.24487 5.70899 8.09277L5.41699 8.08496Z"
}))
  , Kt = A => o.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...A
}, o.createElement("path", {
    d: "M6.46567 3.75C5.79487 3.74999 5.24122 3.74998 4.79023 3.78683C4.32181 3.8251 3.89123 3.90724 3.48678 4.11331C2.85957 4.43289 2.34964 4.94283 2.03006 5.57003C1.82399 5.97448 1.74185 6.40507 1.70358 6.87348C1.66673 7.32447 1.66674 7.8781 1.66675 8.5489V11.4511C1.66674 12.1219 1.66673 12.6755 1.70358 13.1265C1.74185 13.5949 1.82399 14.0255 2.03006 14.43C2.34964 15.0572 2.85957 15.5671 3.48678 15.8867C3.89123 16.0928 4.32181 16.1749 4.79023 16.2132C5.24123 16.25 5.79487 16.25 6.46569 16.25H8.95114C9.62196 16.25 10.1756 16.25 10.6266 16.2132C11.095 16.1749 11.5256 16.0928 11.93 15.8867C12.5573 15.5671 13.0672 15.0572 13.3868 14.43C13.5928 14.0255 13.675 13.5949 13.7133 13.1265C13.7501 12.6755 13.7501 12.1219 13.7501 11.4511V8.54894C13.7501 7.87812 13.7501 7.32448 13.7133 6.87348C13.675 6.40507 13.5928 5.97448 13.3868 5.57003C13.0672 4.94283 12.5573 4.43289 11.93 4.11331C11.5256 3.90724 11.095 3.8251 10.6266 3.78683C10.1756 3.74998 9.62198 3.74999 8.95118 3.75H6.46567Z"
}), o.createElement("path", {
    d: "M19.1667 6.526C19.1667 5.46049 17.919 4.88349 17.1072 5.57357L15.4405 6.99024C15.1611 7.22774 15.0001 7.57595 15.0001 7.94267V12.0573C15.0001 12.424 15.1611 12.7722 15.4405 13.0097L17.1072 14.4264C17.919 15.1165 19.1667 14.5395 19.1667 13.474V6.526Z"
}))
  , ee = "inline-flex items-center bg-transparent text-token-text-secondary hover:text-token-text-primary"
  , Ht = ({message: A, onClick: e, type: t}) => {
    const n = Y()
      , s = fe() && Ce;
    if (!A)
        return null;
    switch (t) {
    case "microphone_denied":
        return s ? r.jsxs("a", {
            href: "ms-settings:privacy-microphone",
            className: ee,
            children: [A, r.jsx(GA, {
                className: "icon-sm ms-1"
            })]
        }) : r.jsx(OA, {
            onClick: e,
            message: A
        });
    case "connection_quality":
        return r.jsxs("div", {
            className: "inline-flex items-center",
            children: [A, r.jsx("button", {
                onClick: e,
                className: "ms-1",
                children: r.jsx("strong", {
                    children: n.formatMessage(te.retry)
                })
            })]
        });
    case "normal":
        return r.jsx(OA, {
            onClick: e,
            message: A
        })
    }
}
  , OA = ({message: A, onClick: e}) => {
    const t = Y();
    return r.jsxs("button", {
        onClick: e,
        className: ee,
        "aria-label": t.formatMessage(te.openInfoModal),
        children: [A, r.jsx(GA, {
            className: "icon-sm ms-1"
        })]
    })
}
  , te = {
    openInfoModal: {
        id: "hintMessage.openInfoModal",
        defaultMessage: "Open info modal",
        description: "Open info modal about voice mode usage"
    },
    retry: {
        id: "hintMessage.retry",
        defaultMessage: "Retry",
        description: "Retry text next to lost connection message"
    }
};
function zt(A) {
    const {button: e, conversationId: t, onClick: n} = A
      , s = SA(t)
      , {startVoiceMode: c} = qA()
      , i = PA()
      , a = o.useCallback( () => {
        switch (e.action) {
        case "new_chat":
            {
                Oe("/"),
                c(bA({
                    serverThreadId: void 0,
                    isAdvancedMode: !0,
                    eventSource: `modal_${e.action}`,
                    parentMessageId: void 0,
                    clientThreadId: ke(),
                    gizmoId: void 0,
                    skipCacheReason: "modal-new-chat-button"
                }));
                break
            }
        case "switch_to_standard":
            s && c(bA({
                serverThreadId: s,
                isAdvancedMode: !1,
                eventSource: `modal_${e.action}`,
                parentMessageId: void 0,
                clientThreadId: s,
                gizmoId: cA.getGizmoId(vA(t)),
                skipCacheReason: "modal-switch-to-standard-button"
            }));
            break;
        case "upgrade_to_plus":
            yA(i, "Voice Mode Upgrade To Plus Modal");
            break;
        case "upgrade_to_pro":
            yA(i, "Voice Mode Upgrade To Pro Modal");
            break
        }
        n?.()
    }
    , [e.action, t, i, n, s, c]);
    return r.jsx(ve.Button, {
        onClick: a,
        title: e.title,
        color: A.color
    })
}
const $t = {
    primary: "primary",
    secondary: "secondary",
    tertiary: "ghost"
};
function Ao({buttons: A, conversationId: e, onClick: t}) {
    let n, s, c;
    const i = o.useCallback(a => () => {
        a === "upgrade_to_plus" ? _.upsell.upgradeToPlus() : a === "upgrade_to_pro" && _.upsell.upgradeToPro(),
        t()
    }
    , [t]);
    return !A || A.length === 0 ? {
        primary: void 0,
        secondary: void 0,
        tertiary: void 0
    } : (A.forEach(a => {
        if (!Ee.includes(a.action))
            return;
        const u = r.jsx(zt, {
            button: a,
            conversationId: e,
            onClick: i(a.action),
            color: $t[a.style]
        });
        switch (a.style) {
        case "primary":
            n = u;
            break;
        case "secondary":
            s = u;
            break;
        case "tertiary":
            c = u;
            break
        }
    }
    ),
    {
        primary: n,
        secondary: s,
        tertiary: c
    })
}
function eo({conversationId: A, isOpen: e, onClose: t, buttons: n, title: s, description_markdown: c}) {
    const i = Ao({
        buttons: n,
        conversationId: A,
        onClick: t
    })
      , a = r.jsx(_e, {
        className: "markdown text-token-text-secondary mb-6",
        urlTransform: l => l,
        children: c
    });
    return r.jsx(be, {
        testId: "modal-voice-rate-limit",
        title: s,
        isOpen: e,
        onClose: t,
        size: "custom",
        className: "max-w-[550px]",
        type: "warning",
        showCloseButton: !0,
        children: r.jsxs("div", {
            className: "w-full",
            children: [a, r.jsxs("div", {
                className: "flex flex-row justify-end gap-6",
                children: [i.primary, i.secondary, i.tertiary]
            })]
        })
    })
}
function to({conversationId: A}) {
    const e = Y()
      , t = dA()
      , n = Ae({
        conversationId: A
    })
      , s = I(E => E.server.usage)
      , c = I(E => E.server.voiceConnectionQuality)
      , i = E => E === KA.LOST
      , a = Ye()
      , {voiceName: l} = MA()
      , [u,m] = o.useState(!1)
      , g = I(E => E.server.toolUpdate)
      , [h,d] = o.useState(!1)
      , [k,C] = o.useState(!0)
      , [v,p] = o.useState(null)
      , [b,y] = o.useState(null)
      , [S,f] = o.useState(null)
      , V = o.useRef(!1)
      , {prospectiveModelId: B} = Fe(A)
      , j = SA(A)
      , {startVoiceMode: G, stopVoiceMode: eA, isVoiceModeActive: R} = qA()
      , J = I(E => E.server.connectionState)
      , tA = o.useCallback( () => {
        const E = J == null || J === N.Connecting;
        n(E ? "user-aborted" : "user-requested")
    }
    , [J, n])
      , {requestMicrophonePermissions: W, userDeclinedMicrophonePermissions: x, microphoneAvailable: U, microphoneLabel: oA} = Ne();
    o.useEffect( () => {
        W()
    }
    , [W]),
    o.useEffect( () => {
        R && x && (m(!1),
        f(null),
        p(e.formatMessage(EA.hint)),
        y({
            title: e.formatMessage(EA.title),
            description_markdown: e.formatMessage(EA.description_markdown),
            buttons: []
        }))
    }
    , [e, R, x]),
    o.useEffect( () => {
        if (U && !J && !V.current) {
            V.current = !0,
            p(null),
            y(null);
            const E = vA(A)
              , L = bA({
                serverThreadId: j,
                parentMessageId: cA.getCurrentNode(E)?.id,
                isAdvancedMode: !0,
                eventSource: "composer_speech_button",
                clientThreadId: A,
                gizmoId: cA.getGizmoId(E)
            });
            _.voiceSessionStarted.click({
                voice: l
            }),
            L.requested_default_model = B ?? void 0,
            G(L)
        }
    }
    , [J, A, U, B, j, G, l]);
    const {reaching_limit_disclosure: q, exceed_limit_message: D} = s?.rate_limit_message ?? {}
      , Q = a?.modes.find(E => E.mode === a?.default_voice_mode)
      , K = Q?.disclosure_message
      , H = i(c) ? "Lost connection." : q?.hint ?? D?.title ?? K?.hint ?? null;
    o.useEffect( () => {
        Q && !x && p(Q.disclosure_message?.hint ?? null)
    }
    , [Q, x]),
    o.useEffect( () => {
        const E = g?.text;
        let L, sA, X;
        return E && (C(!1),
        L = setTimeout( () => {
            d(!0),
            sA = setTimeout( () => {
                d(!1),
                X = setTimeout( () => {
                    C(!0),
                    t.setState(de => {
                        de.server.toolUpdate = null
                    }
                    )
                }
                , 750)
            }
            , 3e3)
        }
        , 750)),
        () => {
            clearTimeout(L),
            clearTimeout(sA),
            clearTimeout(X)
        }
    }
    , [g, t]),
    o.useEffect( () => {
        if (!x) {
            if (H && p(H),
            D && R) {
                eA();
                const E = {
                    title: D.title,
                    description_markdown: D.description_markdown,
                    buttons: D.buttons
                };
                u ? f(E) : (y(E),
                m(!0));
                const L = D.buttons.some(X => X.action === "upgrade_to_plus")
                  , sA = D.buttons.some(X => X.action === "upgrade_to_pro");
                _.rateLimitReached.success({
                    upgrade_to_plus: L,
                    upgrade_to_pro: sA
                })
            } else if (!b) {
                const E = q ?? K;
                E && y({
                    title: E.title,
                    description_markdown: E.message_markdown,
                    buttons: E.buttons
                })
            }
        }
    }
    , [K, D, H, u, R, b, q, eA, x]);
    const ie = o.useCallback( () => {
        S && (y(S),
        f(null)),
        m(!0)
    }
    , [S])
      , re = o.useCallback( () => {
        m(!1)
    }
    , [])
      , ce = I(E => E.voiceMode)
      , le = async () => {
        try {
            p(null),
            await G({
                conversation_id: j,
                eventSource: "lost_connection_hint_message",
                voice_mode: ce,
                voice: l,
                clientThreadId: A,
                gizmo_id: cA.getGizmoId(vA(A)),
                skipCacheReason: "lost-connection-retry"
            })
        } catch (E) {
            const L = E instanceof Error ? E.message : String(E);
            _.voiceMode.error({
                error: L,
                eventSource: "lost_connection_hint_message"
            })
        }
    }
    ;
    let z;
    return x ? z = "microphone_denied" : i(c) ? z = "connection_quality" : z = "normal",
    r.jsxs("div", {
        className: "flex w-full flex-col items-center",
        children: [r.jsxs("div", {
            className: "text-token-text-secondary relative mb-6 flex min-h-5 w-full items-center justify-center text-xs",
            children: [g?.text && r.jsx(Z.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: h ? 1 : 0
                },
                transition: {
                    duration: .5
                },
                style: {
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center"
                },
                children: r.jsxs("div", {
                    className: "flex items-center",
                    children: [g?.text && r.jsx(wt, {
                        className: "icon-sm me-1"
                    }), g?.text]
                })
            }), r.jsx(Z.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: k ? 1 : 0
                },
                transition: {
                    duration: .5
                },
                style: {
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    pointerEvents: g?.text ? "none" : "auto",
                    cursor: g?.text ? "default" : "pointer"
                },
                children: r.jsx("div", {
                    className: "flex items-center",
                    children: r.jsx(Ht, {
                        type: z,
                        message: v,
                        onClick: z === "connection_quality" ? le : ie
                    })
                })
            })]
        }), r.jsxs("div", {
            className: lA("flex flex-row items-center gap-6", "rounded-full px-3 py-1", "transition-width duration-200 ease-in-out"),
            children: [r.jsx(_A, {
                capability: "video",
                children: r.jsx(oo, {})
            }), r.jsx(so, {
                hideTooltip: x,
                microphoneLabel: oA,
                isMicrophoneEnabled: U
            }), r.jsx(_A, {
                capability: "screenshare",
                children: r.jsx(no, {})
            }), r.jsx(xA, {
                onClick: tA
            })]
        }), r.jsx(eo, {
            conversationId: A,
            isOpen: u,
            onClose: re,
            title: b?.title,
            description_markdown: b?.description_markdown,
            buttons: b?.buttons ?? []
        })]
    })
}
function _A({children: A, capability: e}) {
    return it()[e] ? A : null
}
function oo() {
    const {cameraTrackState: A, toggleCamera: e} = uA()
      , t = Y();
    let n = null;
    const s = [w.Starting, w.Stopping].includes(A)
      , c = A === w.Started;
    s ? n = BA : n = Kt;
    const i = c ? "bg-gray-900 hover:bg-gray-800 active:bg-gray-700" : "bg-black/5 hover:bg-black/10 active:bg-black/20 dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-white/5 dark:active:bg-white/10"
      , a = c ? "text-token-main-surface-primary" : "text-token-main-surface-primary-inverse"
      , l = t.formatMessage({
        id: "SRVwhB",
        defaultMessage: "Toggle video"
    });
    return r.jsx(AA, {
        "aria-label": l,
        onClick: () => e("ControlButton"),
        disabled: s,
        icon: n,
        className: i,
        iconColor: a
    })
}
function so({hideTooltip: A, microphoneLabel: e, isMicrophoneEnabled: t}) {
    const {isMuting: n, toggleMute: s} = WA()
      , c = Y()
      , {disconnectPending: i} = IA()
      , a = !!I(d => d.dev.room?.localParticipant.isMicrophoneEnabled)
      , l = t && a
      , u = l ? Wt : Ut
      , m = l ? "bg-black/5 hover:bg-black/10 active:bg-black/20 dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-white/5 dark:active:bg-white/10" : "bg-red-500/10 hover:bg-red-500/15 active:bg-red-500/20 dark:bg-red-500/10 dark:hover:bg-red-500/15 dark:active:bg-red-500/20"
      , g = l ? "text-token-main-surface-primary-inverse" : "text-danger"
      , h = l ? c.formatMessage({
        id: "PJzixV",
        defaultMessage: "Turn off microphone"
    }) : c.formatMessage({
        id: "nbbUMb",
        defaultMessage: "Turn on microphone"
    });
    return r.jsx(AA, {
        "aria-label": h,
        onClick: s,
        icon: u,
        disabled: n || i,
        className: m,
        iconColor: g,
        tooltipPrimaryLabel: !A && e ? h : "",
        tooltipSecondaryLabel: e
    })
}
function no() {
    const {screenshareTrackState: A, toggleScreenShare: e} = mA()
      , t = Y();
    let n = null;
    const s = [w.Starting, w.Stopping].includes(A)
      , c = A === w.Started;
    s ? n = BA : n = qt;
    const i = c ? "bg-gray-900 hover:bg-gray-800 active:bg-gray-700" : "bg-black/5 hover:bg-black/10 active:bg-black/20 dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-white/5 dark:active:bg-white/10"
      , a = c ? "text-token-main-surface-primary" : "text-token-main-surface-primary-inverse"
      , l = t.formatMessage({
        id: "ShdqyW",
        defaultMessage: "Toggle screenshare"
    });
    return r.jsx(AA, {
        "aria-label": l,
        onClick: () => e("ControlButton"),
        disabled: s,
        icon: n,
        className: i,
        iconColor: a
    })
}
function xA({className: A, onClick: e}) {
    const t = Y()
      , {disconnectPending: n} = IA()
      , s = "bg-black/5 hover:bg-black/10 active:bg-black/20 dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-white/5 dark:active:bg-white/10"
      , c = t.formatMessage({
        id: "9Mto0a",
        defaultMessage: "End"
    });
    return r.jsx(AA, {
        disabled: n,
        onClick: e,
        icon: n ? BA : Se,
        iconColor: "text-token-main-surface-primary-inverse",
        className: A ?? s,
        "aria-label": t.formatMessage({
            id: "7/8k4Y",
            defaultMessage: "End voice mode"
        }),
        tooltipPrimaryLabel: c
    })
}
function AA(A) {
    const {icon: e, disabled: t, className: n, iconColor: s="text-current", iconSize: c="icon-xl", buttonSize: i="h-16 w-16", tooltipPrimaryLabel: a, tooltipSecondaryLabel: l, ...u} = A
      , [m,g] = o.useState(!1)
      , h = o.useRef(void 0)
      , d = o.useCallback( () => {
        const v = window.setTimeout( () => {
            g(!0)
        }
        , Ge);
        h.current = v
    }
    , [])
      , k = o.useCallback( () => {
        clearTimeout(h.current),
        g(!1)
    }
    , [])
      , C = r.jsx(io, {
        className: lA(n, i, "text-token-text-primary hover:text-token-text-secondary overflow-hidden rounded-full border-none p-0.5 transition-colors duration-200 ease-in-out"),
        disabled: t,
        ...u,
        children: r.jsx(e, {
            className: lA(c, s)
        })
    });
    return a ? r.jsx(JA, {
        sideOffset: 14,
        label: a,
        secondaryLabel: l,
        contentClassName: "flex flex-col items-center justify-center",
        className: "flex",
        open: m,
        side: "top",
        children: r.jsx("span", {
            onPointerEnter: d,
            onPointerLeave: k,
            children: C
        })
    }) : C
}
const ao = o.forwardRef(function(e, t) {
    return r.jsx(Be, {
        ...e,
        ref: t
    })
})
  , io = Z.create(ao)
  , EA = {
    hint: {
        id: "micMessages.hint",
        defaultMessage: "Enable microphone access in Settings",
        description: "Hint to the user to manually enable microphone access for voice mode"
    },
    title: {
        id: "micMessages.title",
        defaultMessage: "Microphone access required",
        description: "Title for modal that informs the user that microphone access is required for voice mode"
    },
    description_markdown: {
        id: "micMessages.description_markdown",
        defaultMessage: "To use voice mode, you'll need to enable your microphone and try again.",
        description: "Description for modal that informs the user that microphone access is required for voice mode"
    }
};
function oe(A, e) {
    if (e.srcObject instanceof MediaStream) {
        const t = e.srcObject;
        t.removeTrack(A),
        t.getTracks().length > 0 ? e.srcObject = t : e.srcObject = null
    }
}
function se(A, e) {
    let t;
    e.srcObject instanceof MediaStream ? t = e.srcObject : t = new MediaStream;
    let n;
    A.kind === "audio" ? n = t.getAudioTracks() : n = t.getVideoTracks(),
    n.includes(A) || (n.forEach(s => {
        t.removeTrack(s)
    }
    ),
    t.addTrack(A)),
    (!QA() || !(e instanceof HTMLVideoElement)) && (e.autoplay = !0),
    e.muted = t.getAudioTracks().length === 0,
    e instanceof HTMLVideoElement && (e.playsInline = !0),
    e.srcObject !== t && (e.srcObject = t,
    (QA() || Me()) && e instanceof HTMLVideoElement && setTimeout( () => {
        e.srcObject = t,
        e.play().catch( () => {}
        )
    }
    , 0))
}
function ro({children: A}) {
    const {cameraTrackState: e} = uA()
      , {screenshareTrackState: t} = mA()
      , n = e === w.Started || t === w.Started
      , s = e === w.Started;
    return r.jsx($, {
        mode: "wait",
        children: n ? r.jsx("div", {
            className: "flex h-full w-full flex-nowrap items-center",
            children: s ? r.jsx(co, {}) : r.jsx(lo, {})
        }) : r.jsx(Z.div, {
            className: "flex h-full w-full items-center justify-center",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            children: A
        }, "children")
    })
}
function co() {
    const {cameraTrackState: A, toggleCamera: e} = uA()
      , {getTracks: t} = gA()
      , s = t([wA.Camera]).find(a => a.origin === P.Local)
      , c = o.useRef(null)
      , i = A === w.Started && s;
    return o.useEffect( () => {
        if (s) {
            const a = () => {
                e("Browser Video Controls")
            }
            ;
            return s.onEnded(a),
            () => {
                s.offEnded(a)
            }
        }
    }
    , [s, e]),
    o.useEffect( () => {
        const a = c.current;
        return a && s && se(s.track, a),
        () => {
            a && s && oe(s.track, a)
        }
    }
    , [s]),
    r.jsx($, {
        children: i && r.jsx(ne, {
            children: r.jsxs("div", {
                className: "aspect-w-16 aspect-h-9 group relative max-h-[95%] w-fit max-w-[60%] overflow-hidden rounded-3xl shadow-md",
                children: [r.jsx("div", {
                    className: "absolute end-2 top-2 z-10 opacity-0 transition-opacity group-hover:opacity-90",
                    children: r.jsx(xA, {
                        onClick: () => e("StopButton"),
                        className: "bg-gray-900/20 backdrop-blur-lg hover:bg-gray-900/30 dark:backdrop-blur-lg"
                    })
                }), r.jsx("video", {
                    ref: c,
                    className: "h-full w-full object-contain",
                    muted: !0
                })]
            })
        }, "camera-renderer")
    })
}
function lo() {
    const {screenshareTrackState: A, toggleScreenShare: e} = mA()
      , {getTracks: t} = gA()
      , s = t([wA.ScreenShare]).find(a => a.origin === P.Local)
      , c = o.useRef(null)
      , i = A === w.Started && s;
    return o.useEffect( () => {
        if (s) {
            const a = () => {
                e("Browser ScreenShare Controls")
            }
            ;
            return s.onEnded(a),
            () => {
                s.offEnded(a)
            }
        }
    }
    , [s, e]),
    o.useEffect( () => {
        const a = c.current;
        return a && s && i && se(s.track, a),
        () => {
            a && s && oe(s.track, a)
        }
    }
    , [s, i]),
    r.jsx($, {
        children: i && r.jsx(ne, {
            children: r.jsxs("div", {
                className: "aspect-w-16 aspect-h-9 group relative max-h-[95%] w-fit max-w-[60%] overflow-hidden rounded-3xl shadow-md",
                children: [r.jsx("div", {
                    className: "absolute end-2 top-2 z-10 opacity-0 transition-opacity group-hover:opacity-90",
                    children: r.jsx(xA, {
                        onClick: () => e("StopButton"),
                        className: "bg-gray-900/20 backdrop-blur-lg hover:bg-gray-900/30 dark:backdrop-blur-lg"
                    })
                }), r.jsx("video", {
                    ref: c,
                    className: "h-full w-full object-contain",
                    muted: !0
                })]
            })
        }, "screenshare-renderer")
    })
}
function ne({children: A, key: e}) {
    return r.jsx(Z.div, {
        className: "bg-token-main-surface-primary flex h-full w-full flex-col items-center justify-center gap-2",
        initial: {
            opacity: 0,
            transform: "blur(12px)",
            scale: .75
        },
        animate: {
            opacity: 1,
            transform: "blur(0px)",
            scale: 1
        },
        exit: {
            opacity: 0,
            transform: "blur(12px)",
            scale: .75
        },
        transition: {
            duration: .2
        },
        children: A
    }, e)
}
const iA = (A, e) => {
    const [t,n] = o.useState(A === e ? performance.now() : 0)
      , s = o.useRef(e);
    o.useEffect( () => {
        s.current !== e && A === e && n(performance.now()),
        s.current = e
    }
    , [e, A]);
    const c = o.useCallback( () => {
        n(0)
    }
    , []);
    return [A === e ? 1 : 0, t, c]
}
  , rA = ([A,e,t], n=500) => {
    const [s,c] = o.useState(A)
      , i = o.useRef(A)
      , a = o.useRef(void 0)
      , l = o.useCallback( (u, m, g) => {
        const h = d => {
            const k = Math.min((d - u) / n, 1)
              , C = m + k * (g - m);
            c(C),
            k < 1 && (a.current = requestAnimationFrame(h))
        }
        ;
        a.current = requestAnimationFrame(h)
    }
    , [n]);
    return o.useEffect( () => {
        if (i.current !== A) {
            i.current = A,
            a.current && cancelAnimationFrame(a.current);
            const u = s
              , m = A;
            l(performance.now(), u, m)
        }
    }
    , [l, s, A]),
    [s, e / 1e3, t]
}
  , YA = A => {
    const [e,t] = o.useState({
        audioData: [0, 0, 0, 0],
        cumulativeAudioData: [0, 0, 0, 0]
    })
      , n = o.useRef([0, 0, 0, 0])
      , s = o.useRef(void 0)
      , c = o.useRef(performance.now())
      , {bandMagnitudes: i, cumulativeMagnitude: a} = rt(A, {
        bands: 3,
        bins: 1,
        gainMultipliers: [10, 1, 1]
    });
    n.current = [...i, a].flat();
    const l = o.useCallback( () => {
        const u = performance.now()
          , m = (u - c.current) / 1e3;
        c.current = u;
        const g = n.current
          , {audioData: h, cumulativeAudioData: d} = e
          , k = ct({
            deltaTimeS: m,
            audioDataRaw: g,
            prevAudioData: h,
            prevCumulativeAudioData: d
        });
        t(k)
    }
    , [e]);
    return o.useEffect( () => (s.current || (s.current = window.setInterval(l, HA)),
    () => {
        clearInterval(s.current),
        s.current = void 0
    }
    ), [l]),
    e
}
  , ae = () => Ie( () => we()) === "transceiver";
function FA({className: A}) {
    return r.jsx(Eo, {
        className: A
    })
}
const uo = 1.55
  , mo = 1.4
  , go = "audio"
  , ho = "shout"
  , po = "User"
  , fo = {
    bands: 4,
    loPass: 0,
    hiPass: 400
}
  , NA = [300, 300];
function Co() {
    const A = xe()
      , e = I(f => f.voiceMode === "advanced")
      , t = ae()
      , n = ye()
      , s = Qe(n, "2624610486")
      , {getTracks: c} = gA()
      , i = c([wA.Microphone])
      , a = i.find(f => f.name === go)
      , l = i.find(f => f.name === ho);
    let u = VA(l?.track, fo);
    u.length === 0 && (u = [0, 0, 0, 0]),
    u.map(f => f * mo);
    const m = YA(l?.track)
      , g = YA(a?.track)
      , h = m.audioData.map( (f, V) => {
        const B = g.audioData[V];
        return f > 0 && B > 0 ? (f + B) / 2 : f > 0 ? f : B
    }
    )
      , d = m.cumulativeAudioData.map( (f, V) => {
        const B = g.cumulativeAudioData[V];
        return f > 0 && B > 0 ? (f + B) / 2 : f > 0 ? f : B
    }
    )
      , k = I(f => f.server.remoteState)
      , C = I(f => f.server.connectionState)
      , v = o.useMemo( () => {
        switch (C) {
        case N.Connected:
            return k;
        case N.Connecting:
        case N.Reconnecting:
        case N.SignalReconnecting:
        case null:
            return null;
        case N.Disconnected:
            return O.Halted
        }
    }
    , [C, k])
      , p = o.useMemo( () => i.find(f => f.userName === po)?.track, [i])
      , b = (VA(p, {
        bands: 1,
        loPass: 0,
        hiPass: 400
    })[0] ?? 0) * uo
      , {voiceName: y} = MA();
    let S;
    return t && s ? S = "HELLO_TIBOR" : y === "shade" && (S = "ANGSTY_BLACK"),
    {
        remoteState: v,
        userVolume: b,
        isAdvanced: e,
        avgMag: h,
        cumulativeAudio: d,
        isDarkMode: A,
        standardBloopVolumes: u,
        overrideColor: S
    }
}
function Eo({className: A}) {
    const {remoteState: e, userVolume: t, isAdvanced: n, avgMag: s, cumulativeAudio: c, isDarkMode: i, standardBloopVolumes: a, overrideColor: l} = Co()
      , [u,m] = o.useState(NA)
      , {canvasSizeRef: g, handleCanvasSizeUpdate: h} = Je(NA)
      , d = o.useRef(void 0)
      , k = o.useCallback(Q => {
        m([Q.width, Q.height])
    }
    , [])
      , C = o.useRef([0, 0, 0, 0]);
    o.useEffect( () => {
        e === O.Connecting && (C.current = [0, 0, 0, 0])
    }
    , [e]);
    const v = o.useRef(performance.now());
    o.useEffect( () => {
        const Q = performance.now();
        e === O.Speaking && Q - v.current > 50 && (v.current = Q,
        C.current = C.current.map( (K, H) => K + s[H]))
    }
    , [e, s]);
    const [p,b] = rA(iA(O.Listening, e))
      , [y,S] = rA(iA(O.Speaking, e))
      , [f,V] = rA(iA(O.Thinking, e))
      , [B,j] = rA(iA(O.Halted, e))
      , [G,eA] = o.useState(performance.now() / 1e3);
    o.useEffect( () => {
        const Q = setInterval( () => {
            eA(performance.now() / 1e3)
        }
        , HA);
        return () => clearInterval(Q)
    }
    , []);
    const R = o.useMemo( () => performance.now() / 1e3, [])
      , [J,tA] = o.useState(1e5)
      , W = o.useRef(e);
    o.useEffect( () => {
        e === O.Connecting ? tA(1e5) : W.current === O.Connecting && tA(G),
        W.current = e
    }
    , [e, G]);
    const x = lt({
        isAdvanced: n,
        overrideColor: l
    })
      , U = n ? s : a
      , oA = p === 1 || y === 1
      , q = dt({
        viewport: u,
        canvasSize: g.current,
        shouldMeasurePerf: oA,
        source: "VoiceMode"
    })
      , D = ut({
        shouldCalibrate: oA,
        viewport: u,
        initialScale: 1
    });
    return d.current = {
        time: G - R,
        micLevel: t,
        stateListen: p,
        listenTimestamp: Math.max(b - R, 0),
        stateThink: f,
        thinkTimestamp: Math.max(V - R, 0),
        stateSpeak: y,
        speakTimestamp: Math.max(S - R, 0),
        readyTimestamp: J - R,
        stateHalt: B,
        haltTimestamp: Math.max(j - R, 0),
        touchDownTimestamp: 0,
        touchUpTimestamp: 0,
        stateFailedToConnect: 0,
        failedToConnectTimestamp: 0,
        avgMag: U,
        cumulativeAudio: c ?? C.current,
        isNewBloop: !0,
        isAdvancedBloop: n,
        bloopColorMain: Array.from(x.bloopColorMain),
        bloopColorLow: Array.from(x.bloopColorLow),
        bloopColorMid: Array.from(x.bloopColorMid),
        bloopColorHigh: Array.from(x.bloopColorHigh),
        isDarkMode: i,
        screenScaleFactor: window.devicePixelRatio,
        viewport: u,
        silenceAmount: 0,
        silenceTimestamp: 0,
        fadeBloopWhileListening: !1
    },
    r.jsx(mt, {
        className: lA("flex items-center justify-center", A),
        variablesRef: d,
        onViewportUpdate: k,
        textureImage: ft,
        textureName: "uTextureNoise",
        onGlAvailable: q,
        onCanvasSizeUpdate: h,
        scale: D,
        GLUniformsSetter: pt,
        vert: ht,
        frag: gt
    })
}
const ko = ({conversationId: A}) => {
    const {getTracks: e} = gA()
      , t = e()
      , [n,s] = o.useState(!1)
      , [c,i] = o.useState(!1)
      , {voiceName: a} = MA()
      , l = Y()
      , u = o.useCallback( () => {
        for (const b of t)
            b.origin === P.Local ? (i(b.isMuted),
            b.setMuted(!0)) : b.origin === P.Remote && b.setMuted(!0)
    }
    , [t])
      , m = o.useCallback( () => {
        for (const b of t)
            b.origin === P.Local ? c || b.setMuted(!1) : b.origin === P.Remote && b.setMuted(!1)
    }
    , [t, c])
      , g = o.useCallback( () => {
        _.voiceSelectionShown.click({
            voice: a
        }),
        u(),
        s(!0)
    }
    , [a, u])
      , h = () => {
        m(),
        s(!1)
    }
      , d = Ct()
      , k = a === "shade"
      , {alreadyTriggered: C} = Et()
      , v = d && !k && !C
      , p = o.useMemo( () => r.jsx(AA, {
        onClick: g,
        icon: Xe,
        iconColor: "text-token-text-secondary",
        className: "h-[40px] w-[40px] bg-transparent hover:bg-black/10 active:bg-black/20 dark:bg-transparent dark:hover:bg-white/5 dark:active:bg-white/10",
        iconSize: "icon"
    }), [g]);
    return r.jsxs("div", {
        className: "relative h-[40px] w-[40px]",
        children: [v ? r.jsx(JA, {
            label: l.formatMessage({
                id: "SxYG4e",
                defaultMessage: "Talk to Monday (ugh)"
            }),
            children: p
        }) : p, n && r.jsx(kt, {
            conversationId: A,
            onClose: h
        })]
    })
}
;
class vo extends Worker {
    constructor(e, t) {
        const n = String(e);
        super(n.includes("://") && !n.startsWith(location.origin) ? URL.createObjectURL(new Blob([`import("${n}")`],{
            type: "text/javascript"
        })) : e, t)
    }
}
function bo(A={}) {
    const [e,t] = o.useState(!1)
      , [n,s] = o.useState(!1)
      , [c,i] = o.useState(!1);
    let a = vt().microphoneTrack;
    const [l,u] = o.useState();
    A.trackRef && (a = A.trackRef.publication);
    const m = o.useCallback(async g => {
        if (g) {
            const {KrispNoiseFilter: h, isKrispNoiseFilterSupported: d} = await XA(async () => {
                const {KrispNoiseFilter: k, isKrispNoiseFilterSupported: C} = await import("./bcef2kukc614r4kn.js");
                return {
                    KrispNoiseFilter: k,
                    isKrispNoiseFilterSupported: C
                }
            }
            , []);
            if (!d()) {
                console.warn("Krisp noise filter is not supported in this browser");
                return
            }
            l || u(h(A.filterOptions))
        }
        t(h => (h !== g && s(!0),
        g))
    }
    , []);
    return o.useEffect( () => {
        var g;
        if (a && a.track instanceof bt && l) {
            const h = a.track.getProcessor();
            h && h.name === "livekit-noise-filter" ? (s(!0),
            h.setEnabled(e).finally( () => {
                s(!1),
                i(e)
            }
            )) : !h && e && (s(!0),
            (g = a?.track) == null || g.setProcessor(l).then( () => l.setEnabled(e)).then( () => {
                i(!0)
            }
            ).catch(d => {
                i(!1),
                console.error(d)
            }
            ).finally( () => {
                s(!1)
            }
            ))
        }
    }
    , [e, a, l]),
    {
        setNoiseFilterEnabled: m,
        isNoiseFilterEnabled: c,
        isNoiseFilterPending: n,
        processor: l
    }
}
const So = o.memo(function() {
    const {setNoiseFilterEnabled: e} = bo();
    return o.useEffect( () => {
        e(!0)
    }
    , [e]),
    null
})
  , Bo = new vo(new URL("https://cdn.oaistatic.com/assets/livekit-client.e2ee.worker-s9h8y0dQ.js",import.meta.url),{
    type: "module"
})
  , Mo = o.memo(function({children: e}) {
    const t = o.useRef({
        keyProvider: new St
    }).current
      , [n,s] = o.useState(!1)
      , {token: c, url: i, e2eeKey: a} = I(d => d.credentials)
      , l = xt()
      , u = I(d => d.isVoiceModeActive)
      , m = I(d => d.audioInputDevice?.deviceId)
      , g = ae()
      , h = g ? Bt : Mt;
    return o.useEffect( () => {
        const d = c && i && a;
        !n && d ? t.keyProvider.setKey(a).then( () => {
            s(!0)
        }
        ) : n && !d && s(!1)
    }
    , [c, i, a, n, t]),
    u ? r.jsx(Rt, {
        ...l,
        connect: !0,
        token: c ?? void 0,
        serverUrl: i ?? void 0,
        audio: {
            deviceId: {
                ideal: m,
                exact: m
            },
            noiseSuppression: !0,
            echoCancellation: !0
        },
        options: {
            e2ee: {
                keyProvider: t.keyProvider,
                worker: Bo
            }
        },
        children: r.jsxs(h, {
            children: [e, g || n && c && i ? r.jsx(It, {}) : null, n && c && i && r.jsx(Yt, {}), n && c && i && r.jsx(So, {})]
        })
    }) : null
})
  , Io = Ve( () => XA( () => import("./j2k3g2iltcl8vjs8.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])).then(A => A.VoiceModeDevPanel));
function wo({conversationId: A}) {
    const [e,t] = o.useState(!1)
      , {screenshareTrackState: n} = mA()
      , {cameraTrackState: s} = uA()
      , c = n === w.Started || s === w.Started
      , i = I(m => m.isVoiceModeActive)
      , a = I(m => m.server.voiceConnectionQuality)
      , l = Y();
    Pt();
    const u = Ae({
        conversationId: A
    });
    return Te( () => {
        i && u("electron-app-minimized")
    }
    ),
    o.useEffect( () => {
        const m = new Jt;
        return i ? m.enable() : m.disable(),
        () => {
            m.disable()
        }
    }
    , [i]),
    r.jsxs(Mo, {
        conversationId: A,
        children: [r.jsx($, {
            children: i ? r.jsx(Z.div, {
                className: "bg-token-main-surface-primary fixed start-0 top-0 z-50 flex h-full w-full flex-col",
                initial: "hidden",
                animate: "visible",
                exit: "hidden",
                variants: kA,
                children: r.jsxs(Z.div, {
                    className: "relative h-full w-full",
                    variants: kA,
                    children: [r.jsxs(Z.div, {
                        variants: kA,
                        className: "flex h-full w-full flex-col justify-between gap-6",
                        children: [r.jsxs(Z.div, {
                            className: "relative mt-6 flex w-full justify-center",
                            children: [r.jsx("div", {
                                className: "flex w-full items-center justify-center",
                                children: c && r.jsx(FA, {
                                    className: "h-16 w-16"
                                })
                            }), r.jsx("div", {
                                className: "me-4",
                                children: r.jsx(ko, {
                                    conversationId: A
                                })
                            })]
                        }), r.jsxs("div", {
                            className: "flex h-full min-h-0 items-center justify-center",
                            children: [r.jsx(ro, {
                                children: r.jsx(FA, {
                                    className: "min-h-bloop min-w-bloop h-max w-max"
                                })
                            }), r.jsx($, {
                                children: e ? r.jsx(Io, {
                                    conversationId: A
                                }) : null
                            })]
                        }), r.jsx(Z.div, {
                            className: "mb-6 flex justify-center",
                            children: r.jsx(to, {
                                conversationId: A
                            })
                        })]
                    }), !1]
                })
            }) : null
        }), a === KA.POOR && r.jsx("div", {
            className: "absolute start-1/2 top-6 z-50 -translate-x-1/2 transform",
            children: r.jsx("div", {
                className: "border-token-border-default bg-token-main-surface-primary inline-flex flex-col items-center rounded-full border px-6 py-3",
                children: r.jsx("span", {
                    className: "text-token-text-secondary",
                    children: l.formatMessage({
                        id: "YE2Eng",
                        defaultMessage: "Poor connection"
                    })
                })
            })
        })]
    })
}
const kA = {
    hidden: {
        opacity: 0,
        transform: "blur(4px)"
    },
    visible: {
        transform: "blur(0px)",
        opacity: 1
    },
    exit: {
        opacity: 0,
        transform: "blur(4px)"
    }
}
  , jo = Object.freeze(Object.defineProperty({
    __proto__: null,
    VoiceModeLayout: wo
}, Symbol.toStringTag, {
    value: "Module"
}));
export {Ao as u, jo as v};
//# sourceMappingURL=mijgy9yzui4pbcrj.js.map
