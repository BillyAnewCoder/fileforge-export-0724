import {dy as c} from "./ckp56qklot786ulr.js";
import {c as d, f as m, aW as l, b2 as g} from "./dc2xxjkicf2pz0mj.js";
const p = d(t => ({
    currentTime: 0,
    setCurrentTime: e => t( () => ({
        currentTime: e
    })),
    isOpen: !1,
    openSidebar: () => t({
        isOpen: !0
    }),
    closeSidebar: () => t({
        isOpen: !1
    }),
    hoveringSpeakerId: null,
    setHoveringSpeakerId: e => t({
        hoveringSpeakerId: e
    }),
    editingSpeaker: null,
    setEditingSpeaker: e => t({
        editingSpeaker: e
    }),
    speakers: new Map,
    setSpeakers: e => t({
        speakers: e
    }),
    enableDebugger: !1,
    setEnableDebugger: e => t( () => ({
        enableDebugger: e
    })),
    selectedFilters: ["default", "revive"],
    setSelectedFilters: e => t( () => ({
        selectedFilters: e
    }))
}))
  , v = t => e => g.findNode(e, ({message: n}) => {
    const s = n.metadata?.canvas;
    return s?.create_source === c.HIVE && s.textdoc_id === t && !!s.hive_id
}
)?.message.metadata?.canvas?.hive_id
  , k = t => {
    const e = Math.floor(t / 3600)
      , n = Math.floor(t % 3600 / 60)
      , s = t % 60
      , r = e.toString().padStart(2, "0")
      , o = n.toString().padStart(2, "0")
      , i = s.toString().padStart(2, "0");
    return e > 0 ? `${r}:${o}:${i}` : `${o}:${i}`
}
  , f = t => {
    const {setSpeakers: e} = p.getState()
      , n = t.compact_transcript
      , s = Object.values(t.compact_transcript?.speakers ?? {})
      , r = new Map(s?.map(a => [a.id, {
        name: void 0,
        storedName: a.updated_name,
        placeholderName: a.name,
        isEdited: !1
    }]));
    return e(r),
    (n?.segments ?? []).map(a => ({
        speakerId: a.speaker_id,
        range: {
            min: a.start_seconds,
            max: a.end_seconds
        },
        content: a.content,
        filterDecision: a.filter_decision
    }))
}
  , h = () => m(l(), "1804926979");
export {h as c, k as f, v as g, f as n, p as u};
//# sourceMappingURL=gr34ca5bfgzamfz1.js.map
