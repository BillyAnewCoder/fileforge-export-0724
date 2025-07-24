import {eM as C, ak as k, e as f, k as h, $ as y, eR as x, cx as S, cy as O, k3 as _, k4 as A, k5 as v, k6 as E, iH as P, al as N, b2 as T, bX as L} from "./dc2xxjkicf2pz0mj.js";
import {u as R} from "./dmfmxszxfbs8gsbx.js";
import {n as l, A as u, o as U, q as F, U as I} from "./ckp56qklot786ulr.js";
import {f as j, r as d, h as V, n as H} from "./juy90og0wtbp77qa.js";
class b extends C()( () => ({
    isOpen: !0
})) {
    closeModal = () => {
        this.setState({
            isOpen: !1
        })
    }
}
function X() {
    const {eligible: e, isLoading: o, markAsViewed: a} = l(u.NewOnboardingFlow)
      , t = b.useStore()
      , s = b.useState(n => n.isOpen);
    return {
        isOpen: e && !o && s,
        isLoading: o,
        closeModal: t.closeModal,
        markAsViewed: a
    }
}
const q = j({
    hi: {
        id: "new_user_onboarding.hi",
        defaultMessage: "Hi"
    },
    hiThere: {
        id: "new_user_onboarding.hi_there",
        defaultMessage: "Hi there"
    },
    tryUploadingAFile: {
        defaultMessage: "Try uploading a file",
        id: "chatgpt.new-onboarding.try-uploading-a-file"
    },
    uploadFileExample: {
        defaultMessage: "ChatGPT can summarize and analyze your files or images.",
        id: "chatgpt.new-onboarding.upload-file-exp"
    },
    school: {
        defaultMessage: "School",
        id: "chatgpt.new-onboarding.school"
    },
    schoolPrompt: {
        defaultMessage: "I’m trying to learn and do better in school.",
        id: "chatgpt.new-onboarding.school-prompt"
    },
    work: {
        defaultMessage: "Work",
        id: "chatgpt.new-onboarding.work"
    },
    workPrompt: {
        defaultMessage: "I'm here to learn and grow in my work.",
        id: "chatgpt.new-onboarding.work-prompt"
    },
    personalTasks: {
        defaultMessage: "Personal tasks",
        id: "chatgpt.new-onboarding.personal-tasks"
    },
    personalTasksPrompt: {
        defaultMessage: "I'm here for my personal tasks",
        id: "chatgpt.new-onboarding.personal-tasks-prompt"
    },
    funAndEntertainment: {
        defaultMessage: "Fun and entertainment",
        id: "chatgpt.new-onboarding.fun-and-entertainment"
    },
    funAndEntertainmentPrompt: {
        defaultMessage: "I'm here to explore fun ideas and relax.",
        id: "chatgpt.new-onboarding.fun-and-entertainment-prompt"
    },
    other: {
        defaultMessage: "Other",
        id: "chatgpt.new-onboarding.other"
    },
    justCurious: {
        defaultMessage: "Just curious",
        id: "chatgpt.new-onboarding.just-curious"
    },
    justCuriousPrompt: {
        defaultMessage: "I'm just curious, exploring what you can do.",
        id: "chatgpt.new-onboarding.just-curious-prompt"
    },
    tryAnExample: {
        defaultMessage: "Try an example below or send any message in the message box below.",
        id: "chatgpt.new-onboarding.try-an-example"
    }
});
function W() {
    const {eligible: e, isLoading: o, markAsViewed: a} = l(u.NewOnboardingConvo);
    return {
        isEligible: e && !o,
        markAsViewed: a
    }
}
function Y(e) {
    const o = f()
      , a = d.useContext(S)
      , t = O(a)
      , s = U(M => M.onboardingConvoState || void 0)
      , {isEligible: n, markAsViewed: r} = W()
      , g = z({
        clientThreadId: e
    })
      , c = h(o, "109457")
      , i = V()
      , w = F()
      , p = H()
      , m = w || _(p) || A(p);
    d.useEffect( () => {
        n && !s && (i.locale === v || i.messages !== E) && !t && !m && c.get("onboarding_style", "") === "CONVO" && (I.setOnboardingConvoState({
            onboardingConvoClientThreadId: e
        }),
        r(),
        g({
            eventSource: "url",
            stepPrompt: i.formatMessage(q.hi),
            messageMetadata: {
                is_visually_hidden_from_conversation: !0
            },
            authorMetadata: {
                real_author: P.Onboarding
            }
        }),
        N.logEvent("chatgpt_convo_onboarding_started"))
    }
    , [n, r, g, s, i, i.locale, i.messages, e, c, t, m])
}
const z = ({clientThreadId: e}) => {
    const o = R(e);
    return d.useCallback( ({stepPrompt: a, messageMetadata: t, authorMetadata: s, ...n}) => {
        o({
            ...n,
            promptMessage: x(a, t ?? void 0, s ?? void 0),
            completionMetadata: {
                isOnboardingConversation: !0,
                conversationMode: {
                    kind: y.PrimaryAssistant
                },
                systemHints: t?.onboarding?.system_hints
            },
            skipNotification: !0
        })
    }
    , [o])
}
;
function Z(e) {
    const o = k(e, n => T.findNode(n, r => r.message.author.role === L.User)?.message.metadata?.onboarding)
      , {eligible: a, isLoading: t, markAsViewed: s} = l(u.hasSeenFilePickerNuxTooltip);
    return {
        isEligible: o?.triggered_tools?.includes("file_upload") && a && !t,
        markAsViewed: s
    }
}
function $() {
    const e = f();
    return h(e, "109457", {
        disableExposureLog: !0
    }).get("onboarding_show_followups", !1)
}
export {z as a, Y as b, $ as c, Z as d, q as m, X as u};
//# sourceMappingURL=o7zrzew6ugefv8n2.js.map
