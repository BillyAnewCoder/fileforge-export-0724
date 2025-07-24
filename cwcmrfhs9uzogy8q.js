import {kB as E, ag as v, kC as U, kD as L, hs as S, kE as w, kF as B, aq as M, R as F} from "./dc2xxjkicf2pz0mj.js";
import {dz as O} from "./ckp56qklot786ulr.js";
import {L as C} from "./gy64pge8qevmvg7e.js";
import {r as p, h as V, f as j, v as Q} from "./juy90og0wtbp77qa.js";
function h() {
    if ("MediaSource"in window) {
        const e = s => E(s) && MediaSource.isTypeSupported(s);
        if (e("audio/aac"))
            return "aac";
        if (e("audio/mpeg"))
            return "mp3";
        if (e("audio/ogg"))
            return "opus"
    }
}
function N({conversationId: e, messageId: s}) {
    const {voiceName: n} = O()
      , u = () => F.safeGet("/synthesize", {
        parameters: {
            query: {
                message_id: s,
                conversation_id: e,
                voice: n,
                format: h()
            }
        },
        skipJsonTransform: !0
    })
      , t = `${e}.${s}.${n}`;
    return T(u, t)
}
function T(e, s) {
    const [n,u] = p.useState(!1)
      , t = p.useRef({
        isMediaSourceAvailable: P(),
        mediaSourceFormat: h() ?? "n/a",
        playPromise: null,
        shouldAbortQueuedPlayback: !1
    }).current
      , r = V()
      , d = v()
      , g = U()
      , o = L(a => a.isPlaying && a.sourceUrl === c.get(s)?.src)
      , i = p.useCallback(async () => {
        if (!g || !e)
            return;
        u(!0);
        const a = {
            isMediaSourceAvailable: t.isMediaSourceAvailable,
            format: t.mediaSourceFormat
        };
        try {
            const f = await _({
                key: s,
                onStreamingError: b => {
                    S.readAloud.error(b, a),
                    u(!1),
                    d.danger(r.formatMessage(A.playbackError, {
                        error: b.message
                    }), {
                        toastId: "useVoiceReadAloudAudio_onStreamingError",
                        loggingTitle: A.playbackError.defaultMessage,
                        loggingDescription: b.message
                    })
                }
                ,
                onStreamingStart: () => {
                    u(!1)
                }
                ,
                fetchAudioDataResponse: e
            });
            if (t.shouldAbortQueuedPlayback) {
                t.shouldAbortQueuedPlayback = !1;
                return
            }
            g.changeSource(f),
            t.playPromise = g.play()
        } catch (f) {
            S.readAloud.error(f, a),
            u(!1),
            d.danger(r.formatMessage(A.playbackError, {
                error: f.message
            }), {
                toastId: "useVoiceReadAloudAudio_onStreamingError",
                loggingTitle: A.playbackError.defaultMessage,
                loggingDescription: f.message
            })
        }
    }
    , [g, t, s, d, r, e])
      , y = p.useCallback( () => {
        const a = w();
        a && (t.playPromise ? t.playPromise.then( () => {
            a.stop(),
            t.playPromise = null
        }
        ) : a.stop())
    }
    , [t])
      , l = p.useCallback( () => {
        const a = w();
        a && (a.state.isPlaying && a.state.sourceUrl === c.get(s)?.src ? y() : (S.readAloud.click({
            isMediaSourceAvailable: t.isMediaSourceAvailable,
            format: t.mediaSourceFormat
        }),
        i()))
    }
    , [s, t, i, y]);
    p.useEffect( () => {
        n && o && u(!1)
    }
    , [n, o]);
    const m = p.useRef(s);
    return p.useEffect( () => {
        m.current = s
    }
    ),
    p.useEffect( () => (t.shouldAbortQueuedPlayback = !1,
    () => {
        const a = B();
        a.isPlaying && a.sourceUrl === c.get(m.current)?.src ? y() : t.shouldAbortQueuedPlayback = !0
    }
    ), [t, y]),
    {
        togglePlayback: l,
        isPlaying: o,
        isLoading: n
    }
}
async function R(e) {
    const s = await e()
      , n = s.headers.get("content-type") ?? "audio/aac";
    return {
        response: s,
        format: n
    }
}
async function _(e) {
    return P() ? D(e) : q(e)
}
async function q({key: e, fetchAudioDataResponse: s}) {
    const n = c.get(e);
    if (n?.blob)
        return n.src;
    const {response: u, format: t} = await R(s)
      , r = await u.arrayBuffer()
      , d = new Blob([r],{
        type: t
    })
      , g = k({
        key: e,
        src: URL.createObjectURL(d),
        format: t,
        blob: d
    });
    return c.set(e, g),
    g.src
}
async function D({key: e, onStreamingError: s, onStreamingStart: n, fetchAudioDataResponse: u}) {
    let t = c.get(e);
    t?.streaming && (c.delete(e),
    t = null);
    let r, d;
    const g = x()
      , o = new g;
    if (t)
        r = t,
        r.src = URL.createObjectURL(o);
    else {
        const {format: l, response: m} = await R(u);
        d = m,
        r = k({
            key: e,
            src: URL.createObjectURL(o),
            format: l
        })
    }
    const i = $(r.id)
      , y = {
        sourceopen: async () => {
            i("sourceopen");
            const l = o.addSourceBuffer(r.format)
              , m = async () => {
                l.updating && await new Promise(a => l.addEventListener("updateend", a, {
                    once: !0
                }))
            }
            ;
            if (r.segments.length && !r.streaming) {
                i("streaming from cache"),
                r.streaming = !0,
                n();
                for (const a of r.segments)
                    l.appendBuffer(a),
                    await m();
                o.readyState === "open" && o.endOfStream(),
                r.streaming = !1,
                i("done streaming from cache");
                return
            }
            if (d) {
                i("fetching audio");
                try {
                    const a = d.body?.getReader();
                    if (!a)
                        return;
                    for (; c.get(e)?.id === r.id; ) {
                        const {done: f, value: b} = await a.read();
                        if (f) {
                            i("done streaming"),
                            r.streaming = !1,
                            o.readyState === "open" && o.endOfStream();
                            break
                        }
                        if (!Array.from(o.sourceBuffers).includes(l)) {
                            i("stop streaming, source buffer removed"),
                            r.streaming = !1;
                            break
                        }
                        r.streaming || (i("start streaming"),
                        r.streaming = !0,
                        n()),
                        l.appendBuffer(b),
                        r.segments.push(b),
                        await m()
                    }
                } catch (a) {
                    if (i("error while streaming", a),
                    r.streaming = !1,
                    o.readyState === "open")
                        try {
                            o.endOfStream("network")
                        } catch (f) {
                            S.readAloud.error(f)
                        }
                    c.delete(e),
                    s(a)
                }
            }
        }
        ,
        sourceclose: () => {
            i("sourceclose"),
            r.streaming && (r.streaming = !1,
            c.get(e)?.id === r.id && (i("sourceclosed while streaming, cleaning up cache"),
            c.delete(e)))
        }
        ,
        sourceended: M
    };
    for (const [l,m] of Object.entries(y))
        o.addEventListener(l, () => {
            try {
                return m()
            } catch (a) {
                S.readAloud.error(a)
            }
        }
        );
    return c.set(e, r),
    r.src
}
const A = j({
    playbackError: {
        id: "useVoiceReadAloudAudio.playbackError",
        defaultMessage: "Failed to play message"
    }
})
  , $ = e => M;
function x() {
    return P() ? window.MediaSource : null
}
function P() {
    return !!h()
}
const k = e => ({
    id: Q(),
    segments: [],
    streaming: !1,
    ...e
})
  , c = new C({
    capacity: 50,
    dispose: e => {
        URL.revokeObjectURL(e.src)
    }
});
export {T as a, h as g, N as u};
//# sourceMappingURL=cwcmrfhs9uzogy8q.js.map
