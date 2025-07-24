import {b as F} from "./o6wb3ptvu0bk81yq.js";
import {fR as U, fS as k, fT as L, U as O, fU as j, f4 as N, f3 as W, fV as q, fW as B, fX as V, fY as $, fZ as X, f_ as z, f$ as R, g0 as C, be as G, g1 as M, g2 as K} from "./ckp56qklot786ulr.js";
import {fd as Y, S as x, b3 as Z, eU as J, eR as Q, b2 as ee, gT as te, aV as p, l as se, e as ae, kX as ie, ar as ne, hv as re} from "./dc2xxjkicf2pz0mj.js";
import {r, j as d} from "./juy90og0wtbp77qa.js";
import {P as D, T as oe} from "./dmfmxszxfbs8gsbx.js";
function he() {
    const {store: e} = U()
      , s = Y()
      , {clearSystemHintModeTrigger: u, getSystemHintModeTrigger: f} = k()
      , o = !L.useDisabledGlobally()
      , {onRequestCompletion: c} = F();
    return r.useCallback( (l, t, T, a) => {
        const S = e.getSharedProps();
        if (!S)
            return;
        const {clientThreadId: n, onResetState: i, conversationMode: h} = S;
        O.hideThreadHeader();
        const m = s === x.Search
          , w = m ? f(x.Search) : void 0
          , v = Z(n)
          , E = v?.selectedSources?.get(s) ?? new Set
          , {systemHints: _, extraStreamParams: g} = j(t) ? {
            systemHints: t.categoryId !== "ask" ? [t.categoryId] : [],
            extraStreamParams: t.modelOverride ? {
                model: t.modelOverride
            } : {}
        } : N(s ? [s] : []);
        o && (g.enableMessageFollowups = !0);
        const I = _.includes(x.Slurm)
          , b = W()
          , y = {
            is_starter_prompt: !0,
            suggestion_type: t.type,
            starter_prompt_id: "id"in t ? t.id : void 0,
            selected_sources: I ? Array.from(E.values()).map(H => J[H]).filter(Boolean) : void 0,
            ..._.length > 0 && {
                system_hints: _
            }
        };
        b && (y.__internal = {
            search_settings: b
        });
        const A = Q(q(t), y);
        c({
            promptMessage: A,
            sourceEvent: l,
            extraStreamParams: g,
            completionMetadata: {
                suggestions: T,
                suggestion: t,
                suggestionIndex: a,
                conversationMode: h ?? v?.mode,
                systemHints: _,
                searchSource: w
            }
        });
        const P = ee.getCurrentNode(v).message.id;
        i(),
        B(t, a, n, P),
        te() || V(),
        w && m && u(x.Search)
    }
    , [e, s, f, o, c, u])
}
const ce = .0025;
function Te({composerController: e, composerType: s, renderInComposer: u, isBridgedDesktopSidebar: f=!1}) {
    const o = p( () => f && !e.isEmpty$())
      , c = se(e.store, a => a.controlsDisabled)
      , l = $(a => {
        a.contentRect && e.setWaveWidth(a.contentRect.width)
    }
    )
      , t = r.useCallback( (a, S, n) => {
        if (!(e instanceof D))
            return;
        const i = e.getSelectionStart();
        e.setControlsDisabled(!1),
        requestAnimationFrame( () => {
            const {state: h, dispatch: m} = e.view;
            m(h.tr.insertText(a, i, i)),
            requestAnimationFrame( () => {
                e.setSelection(i + a.length)
            }
            ),
            e.usedDictation = !0,
            e.dictationEdited = !1,
            e.dictationAssetPointer = S ?? null,
            e.dictationAssetTTL = n ?? null
        }
        )
    }
    , [e]);
    return {
        whisperControls: c ? d.jsx(X, {
            initialValue: ce,
            onSuccess: t,
            onWaveformDataUpdate: e.setWaveformData,
            onExit: () => {
                e.setControlsDisabled(!1)
            }
            ,
            visualTreatment: s,
            buttonClassName: "h-9 min-h-9 w-9 min-w-9"
        }) : d.jsxs(d.Fragment, {
            children: [!o && d.jsx(z, {
                size: "small",
                onExit: () => {
                    e.setControlsDisabled(!0)
                }
                ,
                visualTreatment: s,
                buttonClassName: "h-9 min-h-9 w-9 min-w-9"
            }), u?.()]
        }),
        waveContainerRef: l,
        handleTranscriptionSuccess: t
    }
}
const we = ({composerController: e, placeholder: s, disableAutoFocus: u=!1, textareaMaxHeightClassName: f="max-h-[25dvh]", fontSize: o="base"}) => {
    "use forget";
    const c = r.useRef(null)
      , l = r.useRef(null)
      , t = r.useRef(!1)
      , T = ae()
      , a = ie(T)
      , S = p(a.composer.autofocusDisabled$)
      , n = u || S;
    return r.useEffect( () => {
        if (t.current)
            return;
        if (!(e instanceof D))
            throw new Error(`Expected instance of ProseMirrorComposerController but got ${e.constructor.name}`);
        t.current = !0;
        const i = l.current;
        if (i != null) {
            const {value: h, selectionStart: m, selectionEnd: w} = i;
            e.view.dispatch(e.view.state.tr.insertText(h)),
            e.view.dispatch(e.view.state.tr.setSelection(oe.create(e.view.state.doc, m + 1, w + 1))),
            i.style.display = "none",
            i.value = ""
        }
        c.current.appendChild(e.view.dom),
        e.view.dom.id = R,
        e.view.dom.dataset.virtualkeyboard = "true",
        C(e.view.dom),
        n || e.view.dom.focus()
    }
    , [e, n]),
    r.useEffect( () => {
        e.setPlaceholder(s)
    }
    , [s, e]),
    r.useEffect( () => {
        e.logPageMount()
    }
    , []),
    d.jsxs("div", {
        ref: c,
        onKeyDown: G.prefetch,
        className: ne([M["prosemirror-parent"], "text-token-text-primary", f, "max-h-52", "flex-1 overflow-auto [scrollbar-width:thin]", re() ? "firefox" : "default-browser"], "vertical-scroll-fade-mask"),
        "data-size": o !== "base" ? o : void 0,
        children: [d.jsx("textarea", {
            className: M.fallbackTextarea,
            name: R,
            autoFocus: !n,
            placeholder: s,
            ref: l,
            "data-virtualkeyboard": !0
        }), d.jsx(K, {
            scriptSrc: "window.__oai_logHTML?window.__oai_logHTML():window.__oai_SSR_HTML=window.__oai_SSR_HTML||Date.now();requestAnimationFrame((function(){window.__oai_logTTI?window.__oai_logTTI():window.__oai_SSR_TTI=window.__oai_SSR_TTI||Date.now()}))"
        })]
    })
}
;
export {ce as I, we as R, he as a, Te as u};
//# sourceMappingURL=jsgl3b1bt1ozctr5.js.map
