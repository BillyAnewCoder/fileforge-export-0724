const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/ojb3rvgnzv4a1b4y.js", "assets/juy90og0wtbp77qa.js", "assets/ckp56qklot786ulr.js", "assets/dc2xxjkicf2pz0mj.js", "assets/root-fv49dn40.css", "assets/conversation-small-j9iamy23.css", "assets/c2x17an84qk97ixf.js", "assets/vml28bg3zgva57by.js", "assets/cyrx908x4gmxtphm.js", "assets/ibqg5gvcvb5336z5.js", "assets/enyyaj5d41xdxtkn.js", "assets/l4lawytal32metvm.js", "assets/dta0gs41e2vxh1q9.js", "assets/o7zrzew6ugefv8n2.js", "assets/dmfmxszxfbs8gsbx.js", "assets/ljsoa8jicxwg39f9.js", "assets/jbze7lwlszm657iq.js", "assets/o6wb3ptvu0bk81yq.js", "assets/dsi8v49vpimk6dsy.js", "assets/aqif0rbyaiq9x43t.js", "assets/f5x7owcyj5iwmbsb.js", "assets/llrie03z1kvfi4vu.js", "assets/jsgl3b1bt1ozctr5.js", "assets/pc2givv05uuq8g6l.js", "assets/dq2hdjj12gdqq0p1.js", "assets/ezqsz68yx4uzdtqb.js", "assets/mre9dehcylnm0d4q.js", "assets/ck00y48d3yzt8bq3.js", "assets/oc2oovt2ti6re098.js", "assets/dx6823fyx97zecyv.js", "assets/clkzqg8ufrsooqj8.js", "assets/h52yy5f95o7r9b4p.js", "assets/n3il0ta2sby23drs.js", "assets/ec9s4r12axh2q1y0.js", "assets/hkgu3w49k49w78g8.js", "assets/n25idv7047m23x6y.js", "assets/ffbf421byc4smlsp.js", "assets/h9ri4w2fyqo4qlva.js", "assets/gn1kkezdsm9hi3t4.js", "assets/pbl95wx6493wq92j.js", "assets/nvghkpv0zy449sx8.js", "assets/cot-message-n4x930jt.css", "assets/b0ariyx2csejsd73.js", "assets/m5qpa1z7i5l9dbng.js", "assets/hsfhk4xuzx0zkaif.js"]))) => i.map(i => d[i]);
import {bX as ge, c8 as ze, ak as Y, B as H, $ as q, eR as oe, P as Ie, ie as Ue, b2 as re, bW as Q, bV as He, dM as Z, ar as ne, c as qe, g5 as Je, e as fe, b0 as We, cw as Ae, fj as ae, aS as $e, R as Ke, D as Qe, g8 as Ye, C as Ze, g as Xe, by as Ce, f as Ge, it as u, eP as es, bj as ss, fM as ts, s as ns, N as as, b3 as os, S as rs, kq as U, as as v, iW as is, lG as Se, bC as ls, ja as ke, af as cs, ec as us, hH as ms, at as k} from "./dc2xxjkicf2pz0mj.js";
import {r as x, j as e, M as T, A as ds, m as gs, h as he, f as fs} from "./juy90og0wtbp77qa.js";
import {L as Te, m0 as hs, m1 as ps, m2 as xs, m3 as ys, hO as w, m4 as _s, m5 as js, n as bs, A as vs, m6 as Cs, U as Ss, lx as ks, m7 as Ts, eO as ws, m8 as Ms, m9 as Is, ma as As, e_ as Ns, e$ as Es, hr as Os, jh as Ps, bp as Rs, mb as me, iM as Ds, mc as Bs, md as Vs, me as Ls, mf as Fs, mg as zs, mh as Us, eQ as Hs, mi as qs, mj as Js, mk as Ws, ml as $s, mm as Ks, mn as Qs, mo as Ys, mp as Zs, mq as we, dO as Xs, bs as Gs} from "./ckp56qklot786ulr.js";
import {u as Ne, r as Ee} from "./dmfmxszxfbs8gsbx.js";
import {g as de, F as Oe, u as et} from "./f5x7owcyj5iwmbsb.js";
import {i as st, C as tt} from "./ck00y48d3yzt8bq3.js";
import {b as nt} from "./o6wb3ptvu0bk81yq.js";
function at(s, n, r) {
    const t = n.elements.length;
    if (t === 0)
        return;
    const o = Object.entries(s).reduce( (a, [g,m]) => Array.isArray(m) ? m.length > 0 ? a + 1 : a : m !== "" ? a + 1 : a, 0);
    Ie.logEventWithStatsig("dynamic-form-submission", "chatgpt_dyanmic_form_submission", {
        ...Ue({
            clientThreadId: r
        }),
        totalItems: t.toString(),
        completedItems: o.toString(),
        ratio: (o / t).toString()
    })
}
function ot(s, n) {
    let r = "";
    return n.elements.forEach(t => {
        const o = t.scope.split("/").pop()
          , a = o && s[o]
          , g = a ? Array.isArray(a) ? a.join(", ") : a : "Any"
          , m = t.label ?? o;
        r += `${m}: ${g}
`
    }
    ),
    r
}
function rt({messages: s, clientThreadId: n, isLastMessage: r}) {
    const t = s.find(y => y.author.role === ge.Assistant)
      , o = s.find(y => y.metadata?.json_form)
      , a = o?.metadata?.json_form
      , [g,m] = x.useState({})
      , [d,f] = x.useState()
      , [l,c] = x.useState()
      , p = ze.useStore()
      , j = Ne(n);
    x.useEffect( () => {
        a && (f(a.json_form_ui),
        c(a.json_form_data))
    }
    , [a]);
    const C = x.useCallback( () => {
        if (m({}),
        d) {
            const y = {
                ...d,
                elements: d.elements.filter(P => P.scope !== "#/properties/AdditionalInfo")
            };
            f(y)
        }
        l && (delete l.properties.AdditionalInfo,
        c(l))
    }
    , [m, f, c, d, l])
      , I = x.useCallback( () => {
        if (d) {
            const y = {
                ...d,
                elements: [...d.elements, {
                    type: "Control",
                    scope: "#/properties/AdditionalInfo",
                    label: "Additional Info",
                    placeholder: "Any other details..."
                }]
            };
            f(y)
        }
        if (l) {
            const y = {
                ...l.properties,
                AdditionalInfo: {
                    type: "string"
                }
            };
            c({
                ...l,
                properties: y
            })
        }
    }
    , [f, c, d, l])
      , E = d?.elements.some(y => y.scope.endsWith("#/properties/AdditionalInfo"))
      , A = Y(n, re.getCurrentLeafId)
      , S = o?.id !== A;
    if (!o || !l || !d)
        return t?.status === "in_progress" && r ? e.jsxs("div", {
            className: "flex flex-col gap-2",
            children: [e.jsx(Te, {
                className: "h-[26px] w-full"
            }), e.jsx(Te, {
                className: "h-[26px] w-3/4"
            }), e.jsx(hs, {})]
        }) : null;
    if (S)
        return null;
    const R = async y => {
        const P = p.getActiveSystemHintType()
          , X = ot(g, d);
        at(g, d, n),
        j({
            sourceEvent: y,
            promptMessage: oe(X),
            completionMetadata: {
                systemHints: P ? [P] : [],
                conversationMode: {
                    kind: q.PrimaryAssistant
                }
            }
        })
    }
    ;
    return e.jsxs(ps, {
        children: [e.jsx(it, {
            formData: g,
            dataSchema: l,
            uiSchema: d,
            setData: m,
            readOnly: S
        }), e.jsxs("div", {
            className: "flex w-full justify-between",
            children: [E ? e.jsx("div", {}) : e.jsx(H, {
                disabled: S,
                onClick: I,
                color: "secondary",
                className: "text-token-text-secondary",
                children: e.jsx(T, {
                    id: "Sen69P",
                    defaultMessage: "Add a detail"
                })
            }), e.jsxs("div", {
                className: "flex gap-2",
                children: [e.jsx(H, {
                    disabled: S,
                    onClick: C,
                    color: "secondary",
                    className: "text-token-text-secondary",
                    children: e.jsx(T, {
                        id: "Uqo7UD",
                        defaultMessage: "Reset"
                    })
                }), e.jsx(H, {
                    disabled: S,
                    onClick: R,
                    children: e.jsx(T, {
                        id: "FVou++",
                        defaultMessage: "Start"
                    })
                })]
            })]
        })]
    })
}
function it({dataSchema: s, uiSchema: n, setData: r, readOnly: t, formData: o}) {
    return e.jsx("div", {
        children: e.jsx(xs, {
            formData: o,
            readOnly: t,
            schema: s,
            uiSchema: n,
            onChange: a => r(a)
        })
    })
}
const lt = (s, n) => {
    const r = []
      , t = []
      , o = []
      , a = []
      , g = "";
    if (s.every(l => l.author.name === He.n7jupd_m)) {
        if (!n)
            return;
        const l = Z(s);
        return [{
            type: w.N7jupdLoading,
            needs_startup: l?.metadata?.needs_startup ?? !1
        }]
    }
    for (const l of s) {
        if (l.content.content_type === Q.ComputerOutput) {
            const c = {
                ...l.content.screenshot,
                vmMetadata: l.metadata?.n7jupd_v,
                messageId: l.id
            };
            r.push(c)
        }
        if (l.content.content_type === Q.Text && l.recipient?.includes("computer") && t.push({
            type: l.recipient,
            parts: l.content.parts.join("")
        }),
        l.content.content_type === Q.StructuredThoughts)
            for (const c of l.content.thoughts)
                c.summary && (o.push(c.summary),
                a.push(c.content))
    }
    const m = !1
      , d = []
      , f = Math.min(r.length, a.length);
    for (let l = 0; l < f; l++) {
        const c = r[l]
          , {domain: p} = de(c)
          , j = {
            type: w.ComputerOutput,
            screenshots: [c],
            text: g,
            messages: s,
            thoughts: [o[l]],
            fullThoughts: [a[l]],
            actions: t,
            isBlank: !p
        };
        d.push(j)
    }
    if (r.length > f) {
        const l = r.slice(f);
        if (d.length === 0)
            d.push({
                type: w.ComputerOutput,
                screenshots: l,
                text: g,
                messages: s,
                thoughts: [],
                fullThoughts: [],
                actions: t,
                isBlank: m
            });
        else {
            const c = d[d.length - 1];
            c.screenshots.push(...l),
            c.isBlank && (c.isBlank = l.every(p => !de(p).domain) && c.isBlank)
        }
    }
    if (a.length > f)
        for (let l = f; l < a.length; l++)
            d.push({
                type: w.ComputerOutput,
                screenshots: [],
                text: g,
                messages: s,
                thoughts: [o[l]],
                fullThoughts: [a[l]],
                actions: t,
                isBlank: !0
            });
    return !d.length && (r.length || a.length) ? [{
        type: w.ComputerOutput,
        screenshots: r,
        text: g,
        messages: s,
        thoughts: o,
        fullThoughts: a,
        actions: t,
        isBlank: m
    }] : d
}
  , Gt = s => {
    const n = s.messages[0];
    let r;
    switch (n.author.name) {
    case "browser.search":
        {
            const t = n.metadata?.n7jupd_title ?? "Searched"
              , o = n.metadata?.n7jupd_urls ?? [];
            r = {
                type: w.Search,
                queries: [{
                    type: "search",
                    q: t
                }],
                sources: o.map(a => ({
                    type: "search_result_group",
                    domain: a,
                    entries: [{
                        type: "search_result",
                        url: a,
                        title: "",
                        snippet: "",
                        ref_id: null,
                        content_type: null,
                        pub_date: null
                    }]
                }))
            };
            break
        }
    }
    if (!(!r || !r.sources.length))
        return [r]
}
  , Me = /connector_[0-9a-f]{32}/i
  , en = s => {
    const n = ys();
    if (!n)
        return;
    const r = s.messages[0];
    if (!r)
        return;
    const t = r.metadata?.n7jupd_subtool;
    if (t?.subtool?.includes("search"))
        return [{
            type: w.N7jupdAPI,
            action: "n7jupd_as"
        }];
    if (t?.subtool?.includes("api_doc"))
        return [{
            type: w.N7jupdAPI,
            action: "n7jupd_ag"
        }];
    let a = r.metadata?.n7jupd_subtool?.generic_api_func?.match(Me)?.[0] ?? void 0;
    a || (a = r.metadata?.n7jupd_url?.match(Me)?.[0] ?? void 0);
    const g = n?.get(a ?? "");
    if (!a || !g)
        return [{
            type: w.N7jupdAPI,
            action: "n7jupd_cf"
        }];
    if (s.messages.length > 1 && s.messages[1].metadata?.connector_source && s.messages[1].content.content_type === Q.TetherBrowsingDisplay) {
        if (s.messages[1].metadata?.display_url && s.messages[1].metadata?.display_title)
            return [{
                type: w.N7jupdAPI,
                action: "n7jupd_cf",
                source: g,
                fetchResult: {
                    url: s.messages[1].metadata?.display_url,
                    title: s.messages[1].metadata?.display_title
                }
            }];
        const m = ct(s.messages[1].content.result);
        if (m.length)
            return [{
                type: w.N7jupdAPI,
                action: "n7jupd_cs",
                source: g,
                searchResults: m.map( ([d,f]) => ({
                    url: d,
                    title: f
                }))
            }]
    }
    return [{
        type: w.N7jupdAPI,
        action: "n7jupd_cf",
        source: g
    }]
}
;
function ct(s) {
    const n = s.replace(/^\s*L\d+:\s*/gm, "")
      , r = []
      , t = [];
    for (let c = 0; c < n.length; c++) {
        const p = n[c];
        if (p === "{")
            t.push(c);
        else if (p === "}") {
            if (t.length === 0)
                continue;
            const j = t.pop();
            r.push({
                start: j,
                end: c
            })
        }
    }
    const o = ["display_url", "web_link", "url", "web_url"]
      , a = ["display_title", "title", "name", "path", "subject", "summary"]
      , g = c => c.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
      , m = (c, p) => {
        const j = [];
        for (const C of c) {
            const I = new RegExp(`"${g(C)}"\\s*:\\s*"([^"]+)"`,"g");
            for (const E of p.matchAll(I))
                j.push(E[1].replace(/\n/g, ""))
        }
        return j
    }
      , d = [];
    for (const {start: c, end: p} of r) {
        const j = n.slice(c, p + 1)
          , C = m(o, j)
          , I = m(a, j)
          , E = Math.min(C.length, I.length);
        for (let A = 0; A < E; A++)
            d.push([C[A], I[A]])
    }
    const f = new Map;
    for (const [c,p] of d)
        f.set(`${c}|||${p}`, [c, p]);
    return Array.from(f.values())
}
const ut = ({content: s}) => e.jsx(Oe, {
    className: ne(js.markdown, "text-token-text-secondary text-sm"),
    componentOverrides: {
        code: n => e.jsx(_s, {
            ...n,
            wrapperClassName: "",
            showActionBar: !1
        })
    },
    children: s
})
  , mt = "I took control of the virtual browser. If you're unsure what changed, ask for more context. If the task is complete, just acknowledge and wrap it up. Otherwise, please proceed."
  , M = qe( () => ({
    token: null,
    clientThreadId: null,
    isOpen: !1,
    isResuming: !1,
    chunk: null,
    parentMessageId: null,
    vmId: null
}))
  , sn = (s, n) => {
    M.setState(r => ({
        ...r,
        clientThreadId: s,
        token: n
    }))
}
  , dt = () => {
    const s = fe()
      , n = bs(vs.hasSeenOdysseyTakeoverModal)
      , r = async o => {
        const a = $e(o);
        if (a)
            return await Ke.safePost("/conversation/{conversation_id}/agent/resume", {
                parameters: {
                    path: {
                        conversation_id: a
                    }
                }
            })
    }
      , t = async () => {
        const {clientThreadId: o} = M.getState();
        if (!o) {
            Ae.info("VNC modal opened without a client thread id");
            return
        }
        M.setState({
            isResuming: !0
        }),
        M.setState({
            isOpen: !0
        }),
        Ss.setSidebarOpen(!1);
        const a = await r(o);
        M.setState({
            isResuming: !1,
            vmId: a?.vm_id
        });
        const g = await ks(o);
        M.setState({
            parentMessageId: g?.last_message_id
        })
    }
    ;
    return async () => {
        if (n.eligible) {
            We(s, Cs, {
                onConfirm: async () => {
                    n.markAsViewed(),
                    await t()
                }
            });
            return
        }
        await t()
    }
}
  , gt = async (s, {startNewTurn: n}) => {
    M.setState({
        isOpen: !1
    });
    const {clientThreadId: r} = M.getState();
    if (!r) {
        Ae.info("VNC modal closed without a client thread id");
        return
    }
    if (!n)
        return;
    const t = ft();
    await Ee({
        ctx: s,
        clientThreadId: r,
        eventSource: "mouse",
        promptMessage: oe(mt, {
            is_takeover_ended_message: !0,
            system_hints: [ae]
        }),
        parentMessageIdPromise: t,
        completionMetadata: {
            systemHints: [ae],
            conversationMode: {
                kind: q.PrimaryAssistant
            }
        }
    })
}
  , ft = (s=5e3) => new Promise(n => {
    const {parentMessageId: r} = M.getState();
    if (r)
        return n(r);
    const t = setTimeout( () => {
        o(),
        n(void 0)
    }
    , s)
      , o = M.subscribe(a => {
        a.parentMessageId && (n(a.parentMessageId),
        clearTimeout(t),
        o())
    }
    )
}
)
  , tn = () => {
    M.setState({
        token: null,
        clientThreadId: null,
        isOpen: !1
    })
}
  , ht = s => {
    M.setState(n => ({
        ...n,
        chunk: s
    }))
}
  , Pe = () => {
    const s = dt()
      , n = M(o => ({
        token: o.token,
        clientThreadId: o.clientThreadId,
        isOpen: o.isOpen,
        isResuming: o.isResuming,
        vmId: o.vmId,
        open: s,
        close: gt,
        setChunk: ht
    }))
      , t = !Je();
    return x.useMemo( () => ({
        ...n,
        isVNCEnabled: t
    }), [n, t])
}
  , pt = ({chunk: s, isStreaming: n, isExpanded: r, isLast: t, isLastComputerUse: o, firstScreenshotIndex: a, isAgentVisualCoT: g=!1}) => {
    const {open: m, isOpen: d, isVNCEnabled: f} = Pe()
      , l = x.useRef(null)
      , c = x.useRef(null)
      , [p,j] = x.useState(a ?? null)
      , C = s.screenshots.at(p ?? -1)
      , I = s.fullThoughts?.at(-1)
      , E = s.thoughts?.at(-1)
      , A = I ?? E
      , S = s.actions?.at(-1)
      , R = et(C, void 0)
      , [y,P] = x.useState(null)
      , [X,G] = x.useState(!1)
      , {origin: ee, domain: J} = x.useMemo( () => de(C), [C]);
    x.useEffect( () => {
        if (!R)
            return;
        let B = !1;
        const $ = new Image;
        return G(!1),
        $.src = R,
        $.onload = () => {
            !B && P(R)
        }
        ,
        $.onerror = () => {
            !B && P(null),
            !B && G(!0),
            !B && Qe.addError(new Error("Failed to load image"))
        }
        ,
        () => {
            B = !0
        }
    }
    , [R]),
    S?.type === "computer.click" && Ts(S.parts);
    function D() {
        m()
    }
    const W = !ee || !J;
    return g ? e.jsxs("div", {
        className: "flex w-full flex-row items-start justify-center gap-4",
        children: [A && e.jsx("div", {
            className: "text-token-text-secondary flex-1 text-sm",
            children: A
        }), C && e.jsx("div", {
            ref: c,
            className: "border-token-border-heavy mt-1 flex aspect-[1024/764] w-40 items-center justify-center overflow-hidden rounded-lg border",
            children: y && e.jsx(ws, {
                src: y,
                alt: "screenshot",
                className: "flex aspect-[1024/764] w-40 items-center justify-center overflow-hidden",
                children: e.jsx("img", {
                    src: y,
                    alt: "screenshot",
                    loading: "lazy",
                    className: "h-full w-full object-cover object-bottom"
                }, y)
            })
        })]
    }) : C ? e.jsx(ds, {
        mode: "wait",
        children: e.jsxs(gs.div, {
            className: "flex flex-1 cursor-default flex-col gap-2",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: .4,
                ease: "easeInOut"
            },
            children: [r && e.jsx("div", {
                className: ne("text-token-text-secondary text-sm", t && "loading-shimmer"),
                children: C ? n && t ? e.jsx(T, {
                    id: "odyssey.using-browser",
                    defaultMessage: "Using the browser"
                }) : e.jsx(T, {
                    id: "odyssey.used-browser",
                    defaultMessage: "Used the browser"
                }) : n && t ? e.jsx(T, {
                    id: "odyssey.setting-up",
                    defaultMessage: "Setting up environment"
                }) : e.jsx(T, {
                    id: "odyssey.setup-complete",
                    defaultMessage: "Environment setup complete"
                })
            }), e.jsxs("div", {
                className: "border-token-border-heavy group bg-token-bg-tertiary relative flex w-full flex-col overflow-hidden rounded-2xl border",
                ref: l,
                children: [e.jsx("div", {
                    className: "align-start flex flex-row gap-1 px-1 pt-1 text-sm",
                    children: e.jsx(Ms, {
                        tabs: [{
                            icon: ee ?? "",
                            label: J ?? ""
                        }],
                        activeTab: J,
                        setActiveTab: () => {}
                        ,
                        initializing: W
                    })
                }), e.jsxs("div", {
                    className: "relative w-full rounded-b-2xl",
                    children: [e.jsxs("div", {
                        className: "bg-token-bg-primary relative aspect-[1024/698] w-full overflow-hidden rounded-b-2xl",
                        children: [y && e.jsx("img", {
                            src: y,
                            alt: "screenshot",
                            className: "absolute inset-0 h-full w-full object-cover object-bottom"
                        }, y), !y && e.jsx("div", {
                            className: "absolute inset-0 flex items-center justify-center",
                            children: W || R ? e.jsx("div", {
                                className: "flex items-center justify-center gap-2",
                                children: e.jsx("div", {
                                    className: "border-token-border-heavy h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"
                                })
                            }) : e.jsx("span", {
                                className: "text-token-text-secondary text-sm",
                                children: e.jsx(T, {
                                    id: "odyssey.no-preview",
                                    defaultMessage: "Preview unavailable"
                                })
                            })
                        })]
                    }), (t || p != null) && !d && e.jsx(Is, {
                        chunk: s,
                        containerRef: l,
                        cropAmountPx: 68,
                        currentScreenshotIdx: p
                    })]
                }), n && f && o && e.jsx("div", {
                    className: "absolute inset-0 z-100 flex h-full w-full items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100",
                    children: e.jsx(H, {
                        color: "primary-inverse",
                        onClick: D,
                        children: e.jsx("div", {
                            className: "flex items-center gap-1",
                            children: e.jsx("div", {
                                children: e.jsx(T, {
                                    id: "odyssey.take-over",
                                    defaultMessage: "Take over"
                                })
                            })
                        })
                    })
                }), (!n || !o) && e.jsx(As, {
                    numEntries: s.screenshots.length,
                    currentIndex: p ?? s.screenshots.length - 1,
                    onChange: j
                })]
            })]
        }, "card")
    }) : I ? e.jsx(ut, {
        content: I
    }) : null
}
  , xt = ({clientThreadId: s, messageId: n, renderClosestScreenshot: r}) => {
    const t = Y(s, g => {
        const d = re.getConversationTurns(g).find(c => c.messages.some(p => p.id === n));
        return d ? lt([...d.messages], !1)?.find(c => c.type === w.ComputerOutput) : null
    }
    )
      , o = x.useMemo( () => {
        if (!t)
            return null;
        if (r) {
            const f = t.screenshots.findIndex(l => l.messageId === n);
            return f === -1 ? null : f
        }
        const g = {};
        t.screenshots.forEach( (f, l) => {
            g[f.messageId] = l
        }
        );
        const m = t.messages.findIndex(f => f.id === n)
          , d = t.messages.slice(m).find(f => g[f.id]);
        return d ? g[d.id] : null
    }
    , [t, n, r])
      , a = o ?? (t ? t.screenshots.length - 1 : 0);
    return r && o === null || !t || !t.screenshots.length ? null : e.jsx("div", {
        children: e.jsx("div", {
            className: "relative flex flex-1 cursor-default flex-col gap-2",
            children: e.jsx(pt, {
                chunk: t,
                firstScreenshotIndex: a,
                isExpanded: !1,
                isComplete: !0,
                isStreaming: !1,
                isLast: !1
            })
        })
    })
}
;
function yt(s, n, r) {
    const t = he()
      , o = Ne(s);
    return x.useCallback(async () => await o({
        promptMessage: oe(t.formatMessage({
            id: "3qSZZF",
            defaultMessage: "I understand the risks. Please continue"
        }), {
            user_acknowledges_pim: !0,
            system_hints: n
        }),
        completionMetadata: {
            systemHints: n,
            conversationMode: r
        },
        eventSource: "mouse"
    }), [o, r, n, t])
}
const _t = ({onMarkSafe: s, justification: n, clientThreadId: r, flaggedMessageId: t}) => {
    const [o,a] = x.useState(!1)
      , g = he()
      , m = x.useCallback( () => a(!1), []);
    return e.jsxs(e.Fragment, {
        children: [e.jsx(Ze, {
            testId: "modal-confirm-close-editor",
            isOpen: o,
            size: "custom",
            className: "max-w-xl",
            onClose: m,
            type: "warning",
            hideSeparator: !1,
            title: e.jsx("span", {
                className: "text-xl",
                children: e.jsx(T, {
                    id: "lzy3Zg",
                    defaultMessage: "Potentially Malicious Content Detected"
                })
            }),
            primaryButton: e.jsx(Ce.Button, {
                title: g.formatMessage({
                    id: "E82qxN",
                    defaultMessage: "Mark safe and continue"
                }),
                color: "danger",
                onClick: s
            }),
            secondaryButton: e.jsx(Ce.Button, {
                title: g.formatMessage({
                    id: "byfawg",
                    defaultMessage: "Don't mark safe"
                }),
                color: "secondary",
                onClick: m
            }),
            showCloseButton: !0,
            closeButton: e.jsx(Xe, {
                onClick: m
            }),
            children: e.jsxs("div", {
                children: [e.jsx("div", {
                    className: "text-md text-token-text-secondary pb-2",
                    children: n ? e.jsx(Oe, {
                        children: n
                    }) : e.jsx(T, {
                        id: "KKOtp0",
                        defaultMessage: "This webpage contained hidden instructions that may be attempting to extract sensitive information. You should only continue if you're sure this content is safe."
                    })
                }), !!t && e.jsx(xt, {
                    clientThreadId: r,
                    messageId: t,
                    renderClosestScreenshot: !0
                })]
            })
        }), e.jsx(H, {
            color: "danger",
            onClick: () => a(!0),
            children: e.jsx(T, {
                id: "5L93Tx",
                defaultMessage: "Continue"
            })
        })]
    })
}
;
function jt({children: s, isFinalTurn: n, hasActiveRequest: r, conversationMode: t, clientThreadId: o, justification: a, flaggedMessageId: g}) {
    const m = Y(o, l => re.findNode(l, c => c.message.author.role === ge.User)?.message)
      , d = x.useMemo( () => m?.metadata?.system_hints, [m])
      , f = yt(o, d, t);
    return e.jsxs("div", {
        children: [e.jsxs("div", {
            className: "bg-token-main-surface-secondary mt-1 flex gap-2 rounded-2xl px-3 py-2",
            children: [e.jsx(Ye, {
                className: "icon-xl mt-2"
            }), e.jsx("div", {
                children: s
            })]
        }), n && !r && e.jsx("div", {
            className: "mt-2",
            children: e.jsx(bt, {
                onMarkSafe: f,
                justification: a,
                flaggedMessageId: g,
                clientThreadId: o
            })
        })]
    })
}
function bt({onMarkSafe: s, justification: n, clientThreadId: r, flaggedMessageId: t}) {
    return e.jsx("div", {
        children: e.jsx(_t, {
            onMarkSafe: s,
            justification: n,
            clientThreadId: r,
            flaggedMessageId: t
        })
    })
}
const vt = ({currentGroupedMessage: s, isLastMessage: n, isLastTurnInConversation: r, clientThreadId: t, turnIndex: o}) => {
    const a = Z(s?.messages)
      , g = a && st(a) && !a.metadata?.auto_proceed_cancelled && r;
    return e.jsxs("div", {
        className: "flex flex-col",
        children: [g && e.jsx(tt, {
            clientThreadId: t,
            lastMessage: a,
            turnIndex: o
        }), r && n && e.jsx(Ns, {
            children: ({isScheduled: m, isScheduledRun: d}) => m && !d && e.jsx(Es, {})
        }), e.jsx(Ct, {
            currentGroupedMessage: s,
            isLastMessage: n,
            isLastTurnInConversation: r
        })]
    })
}
  , Ct = ({currentGroupedMessage: s, isLastMessage: n, isLastTurnInConversation: r}) => {
    const {formatMessage: t} = he()
      , {open: o, isVNCEnabled: a} = Pe()
      , {clientThreadId: g} = nt()
      , m = fe()
      , d = Ge(m, "733205176")
      , f = x.useMemo( () => !a || !d || !n || !r || s.type !== u.Text ? null : s.messages[0], [s, n, r, d, a]);
    if (!f)
        return null;
    const l = f.metadata?.n7jupd_button_type;
    if (!l || l === "confirmation")
        return null;
    const c = async () => {
        await Ee({
            ctx: m,
            clientThreadId: g,
            eventSource: "mouse",
            promptMessage: oe("Yes, please proceed", {
                system_hints: [ae]
            }),
            parentMessageId: f.id,
            completionMetadata: {
                systemHints: [ae],
                conversationMode: {
                    kind: q.PrimaryAssistant
                }
            }
        })
    }
      , p = j => {
        switch (j) {
        case "takeover":
            return o();
        case "login":
            return o();
        case "confirmation":
            return c()
        }
    }
    ;
    return e.jsx("div", {
        className: "my-2 flex",
        children: e.jsx(H, {
            onClick: () => p(l),
            children: t(St[l])
        })
    })
}
  , St = fs({
    takeover: {
        id: "odyssey-message-indicator.takeover",
        defaultMessage: "Take over"
    },
    login: {
        id: "odyssey-message-indicator.login",
        defaultMessage: "Log in"
    },
    confirmation: {
        id: "odyssey-message-indicator.confirm",
        defaultMessage: "Confirm"
    }
})
  , kt = v( () => k( () => import("./ojb3rvgnzv4a1b4y.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5])))
  , Tt = v( () => k( () => import("./c2x17an84qk97ixf.js"), __vite__mapDeps([6, 1, 3, 4])))
  , wt = v( () => k( () => import("./vml28bg3zgva57by.js"), __vite__mapDeps([7, 1, 3, 4, 2, 5])))
  , Mt = v( () => k( () => import("./cyrx908x4gmxtphm.js"), __vite__mapDeps([8, 1, 3, 4, 9, 10, 2, 5, 11, 12, 13, 14])))
  , It = v(async () => () => null);
v(async () => () => null);
const At = v(async () => (await k( () => import("./ljsoa8jicxwg39f9.js"), __vite__mapDeps([15, 3, 1, 4, 11, 2, 5, 12, 16, 17, 14, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]))).ImageGenMessage)
  , Nt = v( () => k( () => import("./oc2oovt2ti6re098.js"), __vite__mapDeps([28, 1, 3, 4, 2, 5])))
  , Et = v( () => k( () => import("./aqif0rbyaiq9x43t.js"), __vite__mapDeps([19, 1, 3, 4, 2, 5])).then(s => s.BrowsingMessage))
  , Ot = v( () => k( () => import("./dx6823fyx97zecyv.js"), __vite__mapDeps([29, 1, 3, 4, 2, 5])).then(s => s.SearchResultMessage))
  , Pt = v( () => k( () => import("./clkzqg8ufrsooqj8.js"), __vite__mapDeps([30, 1, 3, 4, 31, 2, 5])).then(s => s.JITPluginMessage))
  , Rt = v( () => k( () => import("./n3il0ta2sby23drs.js"), __vite__mapDeps([32, 3, 1, 4, 33, 2, 5])).then(s => s.DataAnalysisMessage))
  , Dt = v( () => k( () => import("./hkgu3w49k49w78g8.js"), __vite__mapDeps([34, 1, 3, 4, 2, 5])))
  , Bt = v( () => k( () => import("./n25idv7047m23x6y.js"), __vite__mapDeps([35, 1, 3, 4, 36, 18, 2, 5, 12, 19, 17, 14, 20, 21, 22, 23, 24, 25, 26, 37, 38, 39, 40, 27, 41])).then(s => s.LegacyCoTMessage))
  , Vt = v( () => k( () => import("./ffbf421byc4smlsp.js"), __vite__mapDeps([36, 1, 3, 4, 18, 2, 5, 12, 19, 17, 14, 20, 21, 22, 23, 24, 25, 26, 37, 38, 39, 40, 27, 41])).then(s => s.CoT))
  , Lt = v( () => k( () => import("./b0ariyx2csejsd73.js"), __vite__mapDeps([42, 1, 3, 4, 2, 5, 43, 44])).then(s => s.JawboneMessage))
  , Ft = v(async () => () => null);
function zt(s) {
    if (s.some(n => n.type === u.SearchGPTQuery)) {
        const r = s.filter(o => o.type === U).flatMap(o => o.groups)
          , t = r.flatMap(o => o.messages.map(a => a.metadata?.search_turns_count)).findLast(o => o != null);
        return t != null ? t > 1 : function() {
            const a = r.filter(d => d.type === u.StructuredThoughts)
              , g = r.filter(d => d.type === u.CoTSearchTool)
              , m = ( () => {
                function d(l) {
                    return l.type === u.StructuredThoughts && l.messages.flatMap(c => c.content).some(c => c.content_type === Q.StructuredThoughts && c.thoughts.length > 0)
                }
                let f = !1;
                for (const l of r)
                    if (l.type === u.CoTSearchTool)
                        f = !0;
                    else if (d(l) && f)
                        return !0;
                return !1
            }
            )();
            return a.length > 1 || g.length > 1 || m
        }()
    }
    return !0
}
function Ut(s, n) {
    return s.type === U ? Z(s.groups)?.messages[0].metadata?.is_visually_hidden_reasoning_group && n === 0 : !1
}
function nn({groupedMessagesToRender: s, allMessages: n, allGroupedMessages: r, clientThreadId: t, isUserTurn: o, isCompletionRequestInProgress: a, isFeedbackEnabled: g, isFinalTurn: m, isFinalUserTurn: d, isFinalAssistantTurn: f, turnIndex: l, hasActiveRequest: c, onRequestCompletion: p, shouldGrowContainer: j=!0, isParagen: C=!1, renderingView: I="chat", hasN7JUPD: E=!1}) {
    const {showDebugConversationTurns: A} = es()
      , [S] = Y(t, i => [i?.mode])
      , R = fe()
      , y = ss(t)
      , P = ts(t)
      , X = Os()
      , G = r.some(i => i.type === u.Browsing || i.type === u.RetrievalBrowsing || i.type === u.SearchGPTQuery || i.type === u.n7jupd)
      , ee = Y(t, i => {
        for (let h = n.length - 1; h >= 0; h--) {
            const _ = n[h]
              , N = i?.tree.getNodeIfExists(_.id)?.message
              , V = N ? Gs(N) : void 0;
            if (V)
                return Object.assign({
                    clientThreadId: t,
                    messageId: n[h].id
                }, V)
        }
    }
    )
      , J = Ps( () => ns.count(as.DEFAULT, "conversation_turn_grouped_messages.attempted_render_missing_type_f959b8c"))
      , D = Z(n)
      , W = Rs({
        clientThreadId: t,
        conversationMode: S
    })
      , B = x.useCallback( ({sourceEvent: i, requestedModelId: h, appendMessages: _, extraStreamParams: N, isReasoningSkipped: V}) => {
        D && W({
            sourceEvent: i,
            nodeId: D.id,
            requestedModelId: h,
            appendMessages: _,
            extraStreamParams: N,
            isReasoningSkipped: V
        })
    }
    , [D, W])
      , $ = os(t);
    let ie = y?.enableInferOptOut;
    if (D) {
        const h = re.getParentPromptNode($, D?.id)?.message?.metadata?.system_hints ?? [];
        ie = ie && !h.includes(rs.Think)
    }
    const Re = me(s, i => i.type !== u.Debug)
      , le = s.map( (i, h) => {
        const _ = E ? h === Re : h === r.length - 1
          , N = zt(s)
          , V = Ut(i, h)
          , ce = h === r.length - 1 ? void 0 : r[h + 1]
          , Be = ce?.type === U ? ce.groups[-1] : ce
          , je = h === 0 ? void 0 : s[h - 1]
          , ue = je?.type !== U ? je : void 0
          , be = ue?.type
          , ve = ue?.messages
          , Ve = n?.filter(b => b.metadata?.python_citation || b.metadata?.container_citation);
        if (i.type === U)
            return !N || V ? null : e.jsx(Vt, {
                isStreaming: m && _ && a,
                latestError: ee,
                isFinalAssistantTurn: f,
                messageGroups: i.groups,
                nextMessageGroup: Be,
                prevMessageGroup: ue,
                isAutoswitchOptOutEnabled: ie,
                handleSkipClick: b => {
                    Ie.logEventWithStatsig("chatgpt_web_autoswitch_reasoning_skip_clicked", "chatgpt_web_autoswitch_reasoning_skip_clicked", {
                        conversationId: t,
                        messageId: i.groups[0].messages[0].id
                    }),
                    B({
                        sourceEvent: b,
                        requestedModelId: y?.id,
                        isReasoningSkipped: !0
                    })
                }
                ,
                hasN7JUPD: E
            }, "cot-" + i.groups[0].messages[0].id);
        const Le = i && !is(i.messages[0])
          , Fe = G && Le
          , L = [];
        if (Fe || L.push(e.jsx(Ds, {
            className: "min-h-8",
            message: i.messages[0],
            isFeedbackEnabled: g,
            isFinalUserTurn: d,
            isCompletionInProgress: _ && a,
            hasActiveRequest: c,
            turnIndex: l,
            clientThreadId: t,
            isUserTurn: o,
            prevGroupedMessageType: be,
            prevGroupedMessages: ve,
            citableMessages: Ve
        }, "text-message-" + i.messages[0].id)),
        A && L.push(e.jsx(Ft, {
            clientThreadId: t,
            message: i.messages[0]
        }, "message-debug-" + i.messages[0].id)),
        i.type === u.Text && i.messages[0].metadata?.[Se]?.attached_context) {
            const {url: b, title: O, base64_favicon: F} = i.messages[0].metadata[Se].attached_context;
            return e.jsxs(x.Fragment, {
                children: [e.jsx(Bs, {
                    url: b,
                    title: O,
                    base64Favicon: F,
                    className: ne(Vs(!0), "mb-1", "block")
                }), L]
            }, "group-" + i.messages[0].id)
        }
        switch (i.type) {
        case u.Text:
        case u.MultiText:
            return i.type === u.Text ? e.jsxs(x.Fragment, {
                children: [L, E && e.jsx(vt, {
                    currentGroupedMessage: i,
                    isLastMessage: _,
                    isLastTurnInConversation: m,
                    clientThreadId: t,
                    turnIndex: l
                }), e.jsx(Ws, {
                    isUserTurn: o,
                    message: i.messages[0]
                })]
            }, "group-" + i.messages[0].id) : i.type === u.MultiText ? e.jsx(wt, {
                clientThreadId: t,
                messages: i.messages,
                isCompletionInProgress: _ && a,
                isFeedbackEnabled: g,
                hasActiveRequest: c,
                prevGroupedMessageType: be,
                prevGroupedMessages: ve
            }, "multitext-" + (i.messages[0]?.id ?? h)) : i.type;
        case u.PIMBlock:
            {
                const b = Z(n);
                return S && b ? e.jsx(jt, {
                    isFinalTurn: m,
                    hasActiveRequest: c,
                    conversationMode: S,
                    clientThreadId: t,
                    justification: b.metadata?.pim_justification,
                    flaggedMessageId: b.metadata?.pim_message_id,
                    children: L
                }) : null
            }
        case u.n7jupd_n:
            return e.jsx(Js, {});
        case u.Browsing:
        case u.RetrievalBrowsing:
            {
                const b = S != null && [q.GizmoInteraction, q.GizmoMagicCreate, q.GizmoTest].includes(S.kind)
                  , O = P ? cs(P) : !1;
                return e.jsx(Et, {
                    messages: i.messages,
                    isRequestActive: c,
                    isLastMessageInTurn: _,
                    isUsingGizmo: b,
                    isUsingSnorlax: O,
                    isRetrieval: i.type === u.RetrievalBrowsing
                }, "browsing-" + (i.messages[0]?.id ?? h))
            }
        case u.SearchGPTQuery:
            {
                if (s.some(z => z.type === U) && N)
                    return null;
                const O = s.slice(h + 1).findLast(z => z.type === u.Text || z.type === u.CoTSearchTool)
                  , F = n.findLast(z => ke(z).length > 0);
                return e.jsx(qs, {
                    clientThreadId: t,
                    turnIndex: l,
                    isRequestActive: c,
                    isLastMessage: _,
                    isLastTurnInConversation: m,
                    nextMessage: O?.messages[0],
                    searchResultGroups: ke(F)
                }, "searchquery-" + (i.messages[0]?.id ?? h))
            }
        case u.StructuredThoughts:
            return null;
        case u.ReasoningRecap:
            return null;
        case u.CoTSearchTool:
            return null;
        case u.n7jupd:
            return null;
        case u.n7jupd_i:
        case u.n7jupd_a:
        case u.n7jupd_x:
            return null;
        case u.a8km123:
            {
                if (!i.messages.every(O => !O.metadata?.reasoning_status)) {
                    const O = me(n, F => F.author.role === ge.Assistant && F.recipient === "all");
                    return e.jsx(Bt, {
                        clientThreadId: t,
                        turnIndex: l,
                        isStreaming: (_ || O < h) && a,
                        isFinalAssistantTurn: f,
                        messages: i.messages
                    }, "sum-" + (i.messages[0]?.id ?? h))
                }
                return e.jsx(Dt, {
                    messages: i.messages,
                    isStreaming: _ && a,
                    isCompletionRequestInProgress: a,
                    hasActiveRequest: c,
                    isLastMessage: _,
                    isFinalTurn: m,
                    isFeedbackEnabled: g,
                    clientThreadId: t,
                    currentGroupedMessageIndex: h,
                    turnIndex: l
                }, "sum-" + (i.messages[0]?.id ?? h))
            }
        case u.f959b8c:
            return J(),
            null;
        case u.is_loading_message:
            if (_ && a) {
                const b = i.messages[0]
                  , O = ls(b);
                return e.jsx(Hs, {
                    text: O
                }, "loading-message-" + h)
            } else
                return null;
        case u.c12k321:
            return null;
        case u.l1p9k3u:
            return null;
        case u.b1de6e2_c:
            return e.jsx(rt, {
                messages: i.messages,
                clientThreadId: t,
                isLastMessage: _
            }, "b1de6e2-" + (i.messages[0]?.id ?? h));
        case u.b1de6e2_s:
            return e.jsx(Us, {
                messages: i.messages,
                clientThreadId: t
            }, "b1de6e2_s-" + (i.messages[0]?.id ?? h));
        case u.b1de6e2_d:
            return null;
        case u.b1de6e2_rm:
            return e.jsx(zs, {
                messages: i.messages,
                clientThreadId: t,
                renderingView: I,
                children: L
            }, "b1de6e2_rm-" + (i.messages[0]?.id ?? h));
        case u.de1d73e:
            if (X) {
                const b = h + 1 < r.length ? r[h + 1] : void 0;
                return e.jsx(Lt, {
                    clientThreadId: t,
                    currentGroupedMessage: i,
                    nextMessage: b && b.type === u.Text ? b.messages[0] : void 0,
                    isLastMessage: _,
                    isRequestActive: c
                }, "jawbone-" + (i.messages[0]?.id ?? h))
            } else
                return null;
        case u.ParallelBrowsing:
            return e.jsx(Nt, {
                messages: i.messages
            }, "parallel-" + (i.messages[0]?.id ?? h));
        case u.CodeInterpreter:
            return e.jsx(Rt, {
                messages: i.messages,
                isRequestActive: c,
                clientThreadId: t
            }, "ada-" + (i.messages[0]?.id ?? h));
        case u.JITPlugin:
            return e.jsx(Pt, {
                messages: i.messages,
                clientThreadId: t,
                isLastTurnInConversation: m,
                onRequestCompletion: p
            }, "jit-" + (i.messages[0]?.id ?? h));
        case u.t2uay3k:
            return e.jsx(At, {
                messages: i.messages,
                clientThreadId: t,
                isParagen: C,
                isLastTurnInConversation: m
            }, "t2uay3k-" + (i.messages[0]?.id ?? h));
        case u.Dalle:
            return e.jsx(Mt, {
                messages: i.messages,
                clientThreadId: t,
                disableClickThru: C
            }, "dalle-" + (i.messages[0]?.id ?? h));
        case u.GizmoEditor:
            return e.jsx(kt, {
                messages: i.messages
            }, "gizmo-editor-" + (i.messages[0]?.id ?? h));
        case u.oiw209h:
            return e.jsx(It, {
                messages: i.messages,
                clientThreadId: t
            }, "oiw209h-" + (i.messages[0]?.id ?? h));
        case u.n7jupd_p:
            return e.jsx(Fs, {});
        case u.Canmore:
            return e.jsx(Ls, {
                messages: i.messages,
                allTurnMessages: n,
                isFinalTurn: m,
                isRequestActive: c,
                clientThreadId: t,
                isUserTurn: o
            }, "canmore-" + (i.messages[0]?.id ?? h));
        case u.Container:
        case u.Oboe:
            return null;
        case u.Croquette:
            return null;
        case u.Debug:
            return A ? e.jsx(Tt, {
                message: i.messages[0]
            }, "debug-" + i.messages[0].id) : null;
        case u.SearchResult:
            return e.jsx(Ot, {
                messages: i.messages
            }, "search-result-" + (i.messages[0]?.id ?? h));
        case u.kanzi:
            return null;
        case u.Mochi:
            return null;
        case u.SuperWidget:
            return null
        }
    }
    )
      , De = Zs()
      , {wordFadeType: K, animationDurationMs: pe} = $s()
      , se = x.useRef([])
      , xe = x.useRef(void 0)
      , ye = x.useRef(null)
      , te = !o && m && a
      , _e = n[0]?.id;
    return us( () => {
        if (K !== "indexed" || !te)
            return;
        const i = ye.current;
        if (!i)
            return;
        xe.current !== _e && (xe.current = _e,
        se.current = []);
        const h = i.getAnimations({
            subtree: !0
        }).filter(_ => _.animationName === we["fade-in"]);
        if (h.length !== 0) {
            const _ = Jt({
                now: performance.now(),
                previousStartTimes: se.current,
                groupCount: h.length
            });
            se.current = _;
            for (let N = 0; N < h.length; N++)
                h[N].startTime = _[N]
        } else
            se.current = []
    }
    , [le, K, te]),
    e.jsx("div", {
        className: ne({
            "flex max-w-full flex-col": !0,
            [we.root]: K === "indexed" && te,
            grow: j
        }),
        style: K === "indexed" ? {
            "--duration": `${pe}ms`
        } : void 0,
        ref: ye,
        children: e.jsx(ms, {
            name: "GroupedMessages",
            fallback: Ht,
            children: o ? le : e.jsxs(Ks, {
                isDisabled: !te || K !== "delay",
                defaultAnimationDurationPerSegmentMs: pe,
                children: [Qs(R) && m && e.jsx(Ys, {
                    isStreaming: a,
                    debug: De
                }), le]
            }, n[0]?.id)
        })
    })
}
function Ht({error: s}) {
    return e.jsxs(Xs, {
        type: "danger",
        children: [e.jsx(T, {
            id: "5eGo3w",
            defaultMessage: "Unable to display this message due to an error."
        }), !1]
    })
}
function qt(s, n, r) {
    if (s.length < 2 || n <= 0)
        return 0;
    const t = n / Math.log(2);
    s = [...s].sort( (g, m) => g - m);
    let o = 0
      , a = 0;
    for (let g = s.length - 1; g > 0; --g) {
        const m = Math.exp(-(r - s[g]) / t);
        if (o > 0 && m / o < .01)
            break;
        const d = s[g] - s[g - 1];
        o += m,
        a += m * d
    }
    return o === 0 ? 0 : o / a
}
function Jt({now: s, previousStartTimes: n, groupCount: r, initialRate: t=50, halfLife: o=1}) {
    const a = n.slice(0, me(n, l => l <= s) + 1)
      , g = a.length < 2 ? t / 1e3 : Math.max(.01, qt(a, o * 1e3, s))
      , m = r - a.length;
    let d = a[a.length - 1] ?? 0
      , f = 1;
    for (let l = 0; l < m; l++) {
        const c = g * 1e3 * f;
        m < c ? f *= .8 : m > c && (f *= 1.5);
        const p = 1 / (g * f)
          , j = Math.max(s, d + p);
        a.push(j),
        d = j
    }
    return a
}
export {nn as C, ut as a, pt as b, gt as c, Gt as d, Me as e, ct as f, lt as o, en as p, tn as r, sn as s, Pe as u};
//# sourceMappingURL=kd37t55r0pqrdrzh.js.map
