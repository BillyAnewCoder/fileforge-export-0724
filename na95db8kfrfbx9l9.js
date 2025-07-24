import {B as bt, r as $, j as L} from "./juy90og0wtbp77qa.js";
import {mk as St} from "./dc2xxjkicf2pz0mj.js";
const O = new WeakMap
  , j = new WeakMap
  , U = {
    current: []
};
let Q = !1
  , P = 0;
const T = new Set
  , B = new Map;
function ft(r) {
    const a = Array.from(r).sort( (e, t) => e instanceof A && e.options.deps.includes(t) ? 1 : t instanceof A && t.options.deps.includes(e) ? -1 : 0);
    for (const e of a) {
        if (U.current.includes(e))
            continue;
        U.current.push(e),
        e.recompute();
        const t = j.get(e);
        if (t)
            for (const s of t) {
                const i = O.get(s);
                i && ft(i)
            }
    }
}
function Ft(r) {
    r.listeners.forEach(a => a({
        prevVal: r.prevState,
        currentVal: r.state
    }))
}
function Vt(r) {
    r.listeners.forEach(a => a({
        prevVal: r.prevState,
        currentVal: r.state
    }))
}
function vt(r) {
    if (P > 0 && !B.has(r) && B.set(r, r.prevState),
    T.add(r),
    !(P > 0) && !Q)
        try {
            for (Q = !0; T.size > 0; ) {
                const a = Array.from(T);
                T.clear();
                for (const e of a) {
                    const t = B.get(e) ?? e.prevState;
                    e.prevState = t,
                    Ft(e)
                }
                for (const e of a) {
                    const t = O.get(e);
                    t && (U.current.push(e),
                    ft(t))
                }
                for (const e of a) {
                    const t = O.get(e);
                    if (t)
                        for (const s of t)
                            Vt(s)
                }
            }
        } finally {
            Q = !1,
            U.current = [],
            B.clear()
        }
}
function k(r) {
    P++;
    try {
        r()
    } finally {
        if (P--,
        P === 0) {
            const a = Array.from(T)[0];
            a && vt(a)
        }
    }
}
class et {
    constructor(a, e) {
        this.listeners = new Set,
        this.subscribe = t => {
            var s, i;
            this.listeners.add(t);
            const n = (i = (s = this.options) == null ? void 0 : s.onSubscribe) == null ? void 0 : i.call(s, t, this);
            return () => {
                this.listeners.delete(t),
                n?.()
            }
        }
        ,
        this.setState = t => {
            var s, i, n;
            this.prevState = this.state,
            this.state = (s = this.options) != null && s.updateFn ? this.options.updateFn(this.prevState)(t) : t(this.prevState),
            (n = (i = this.options) == null ? void 0 : i.onUpdate) == null || n.call(i),
            vt(this)
        }
        ,
        this.prevState = a,
        this.state = a,
        this.options = e
    }
}
class A {
    constructor(a) {
        this.listeners = new Set,
        this._subscriptions = [],
        this.lastSeenDepValues = [],
        this.getDepVals = () => {
            const e = []
              , t = [];
            for (const s of this.options.deps)
                e.push(s.prevState),
                t.push(s.state);
            return this.lastSeenDepValues = t,
            {
                prevDepVals: e,
                currDepVals: t,
                prevVal: this.prevState ?? void 0
            }
        }
        ,
        this.recompute = () => {
            var e, t;
            this.prevState = this.state;
            const {prevDepVals: s, currDepVals: i, prevVal: n} = this.getDepVals();
            this.state = this.options.fn({
                prevDepVals: s,
                currDepVals: i,
                prevVal: n
            }),
            (t = (e = this.options).onUpdate) == null || t.call(e)
        }
        ,
        this.checkIfRecalculationNeededDeeply = () => {
            for (const i of this.options.deps)
                i instanceof A && i.checkIfRecalculationNeededDeeply();
            let e = !1;
            const t = this.lastSeenDepValues
              , {currDepVals: s} = this.getDepVals();
            for (let i = 0; i < s.length; i++)
                if (s[i] !== t[i]) {
                    e = !0;
                    break
                }
            e && this.recompute()
        }
        ,
        this.mount = () => (this.registerOnGraph(),
        this.checkIfRecalculationNeededDeeply(),
        () => {
            this.unregisterFromGraph();
            for (const e of this._subscriptions)
                e()
        }
        ),
        this.subscribe = e => {
            var t, s;
            this.listeners.add(e);
            const i = (s = (t = this.options).onSubscribe) == null ? void 0 : s.call(t, e, this);
            return () => {
                this.listeners.delete(e),
                i?.()
            }
        }
        ,
        this.options = a,
        this.state = a.fn({
            prevDepVals: void 0,
            prevVal: void 0,
            currDepVals: this.getDepVals().currDepVals
        })
    }
    registerOnGraph(a=this.options.deps) {
        for (const e of a)
            if (e instanceof A)
                e.registerOnGraph(),
                this.registerOnGraph(e.options.deps);
            else if (e instanceof et) {
                let t = O.get(e);
                t || (t = new Set,
                O.set(e, t)),
                t.add(this);
                let s = j.get(this);
                s || (s = new Set,
                j.set(this, s)),
                s.add(e)
            }
    }
    unregisterFromGraph(a=this.options.deps) {
        for (const e of a)
            if (e instanceof A)
                this.unregisterFromGraph(e.options.deps);
            else if (e instanceof et) {
                const t = O.get(e);
                t && t.delete(this);
                const s = j.get(this);
                s && s.delete(e)
            }
    }
}
function K(r, a) {
    return typeof r == "function" ? r(a) : r
}
function pt(r, a) {
    return nt(a).reduce( (t, s) => {
        if (t === null)
            return null;
        if (typeof t < "u")
            return t[s]
    }
    , r)
}
function X(r, a, e) {
    const t = nt(a);
    function s(i) {
        if (!t.length)
            return K(e, i);
        const n = t.shift();
        if (typeof n == "string" || typeof n == "number" && !Array.isArray(i))
            return typeof i == "object" ? (i === null && (i = {}),
            {
                ...i,
                [n]: s(i[n])
            }) : {
                [n]: s()
            };
        if (Array.isArray(i) && typeof n == "number") {
            const l = i.slice(0, n);
            return [...l.length ? l : new Array(n), s(i[n]), ...i.slice(n + 1)]
        }
        return [...new Array(n), s()]
    }
    return s(r)
}
function _t(r, a) {
    const e = nt(a);
    function t(s) {
        if (!s)
            return;
        if (e.length === 1) {
            const n = e[0];
            if (Array.isArray(s) && typeof n == "number")
                return s.filter( (u, c) => c !== n);
            const {[n]: l, ...v} = s;
            return v
        }
        const i = e.shift();
        if (typeof i == "string" && typeof s == "object")
            return {
                ...s,
                [i]: t(s[i])
            };
        if (typeof i == "number" && Array.isArray(s)) {
            if (i >= s.length)
                return s;
            const n = s.slice(0, i);
            return [...n.length ? n : new Array(i), t(s[i]), ...s.slice(i + 1)]
        }
        throw new Error("It seems we have created an infinite loop in deleteBy. ")
    }
    return t(r)
}
const Et = /^(\d*)$/gm
  , wt = /\.(\d*)\./gm
  , At = /^(\d*)\./gm
  , kt = /\.(\d*$)/gm
  , Ot = /\.{2,}/gm
  , st = "__int__"
  , W = `${st}$1`;
function nt(r) {
    if (Array.isArray(r))
        return [...r];
    if (typeof r != "string")
        throw new Error("Path must be a string.");
    return r.replace(/\[/g, ".").replace(/\]/g, "").replace(Et, W).replace(wt, `.${W}.`).replace(At, `${W}.`).replace(kt, `.${W}`).replace(Ot, ".").split(".").map(a => a.indexOf(st) === 0 ? parseInt(a.substring(st.length), 10) : a)
}
function Dt(r) {
    return !(Array.isArray(r) && r.length === 0)
}
function it(r, a) {
    const {asyncDebounceMs: e} = a
      , {onChangeAsync: t, onBlurAsync: s, onSubmitAsync: i, onBlurAsyncDebounceMs: n, onChangeAsyncDebounceMs: l} = a.validators || {}
      , v = e ?? 0
      , u = {
        cause: "change",
        validate: t,
        debounceMs: l ?? v
    }
      , c = {
        cause: "blur",
        validate: s,
        debounceMs: n ?? v
    }
      , h = {
        cause: "submit",
        validate: i,
        debounceMs: 0
    }
      , o = d => ({
        ...d,
        debounceMs: 0
    });
    switch (r) {
    case "submit":
        return [o(u), o(c), h];
    case "blur":
        return [c];
    case "change":
        return [u];
    case "server":
    default:
        return []
    }
}
function rt(r, a) {
    const {onChange: e, onBlur: t, onSubmit: s, onMount: i} = a.validators || {}
      , n = {
        cause: "change",
        validate: e
    }
      , l = {
        cause: "blur",
        validate: t
    }
      , v = {
        cause: "submit",
        validate: s
    }
      , u = {
        cause: "mount",
        validate: i
    }
      , c = {
        cause: "server",
        validate: () => {}
    };
    switch (r) {
    case "mount":
        return [u];
    case "submit":
        return [n, l, v, c];
    case "server":
        return [c];
    case "blur":
        return [l, c];
    case "change":
    default:
        return [n, c]
    }
}
const mt = r => !!r && typeof r == "object" && "fields"in r;
function Y(r, a) {
    if (Object.is(r, a))
        return !0;
    if (typeof r != "object" || r === null || typeof a != "object" || a === null)
        return !1;
    if (r instanceof Map && a instanceof Map) {
        if (r.size !== a.size)
            return !1;
        for (const [t,s] of r)
            if (!a.has(t) || !Object.is(s, a.get(t)))
                return !1;
        return !0
    }
    if (r instanceof Set && a instanceof Set) {
        if (r.size !== a.size)
            return !1;
        for (const t of r)
            if (!a.has(t))
                return !1;
        return !0
    }
    const e = Object.keys(r);
    if (e.length !== Object.keys(a).length)
        return !1;
    for (let t = 0; t < e.length; t++)
        if (!Object.prototype.hasOwnProperty.call(a, e[t]) || !Object.is(r[e[t]], a[e[t]]))
            return !1;
    return !0
}
function It(r) {
    const a = new Map;
    for (const e of r) {
        const t = [...e.path ?? []].map(s => {
            const i = typeof s == "object" ? s.key : s;
            return typeof i == "number" ? `[${i}]` : i
        }
        ).join(".").replace(/\.\[/g, "[");
        a.set(t, (a.get(t) ?? []).concat(e))
    }
    return Object.fromEntries(a)
}
const Tt = r => r
  , Pt = r => {
    const a = It(r);
    return {
        form: a,
        fields: a
    }
}
  , ut = (r, a) => r === "form" ? Pt(a) : Tt(a)
  , Mt = {
    validate({value: r, validationSource: a}, e) {
        const t = e["~standard"].validate(r);
        if (t instanceof Promise)
            throw new Error("async function passed to sync validator");
        if (t.issues)
            return ut(a, t.issues)
    },
    async validateAsync({value: r, validationSource: a}, e) {
        const t = await e["~standard"].validate(r);
        if (t.issues)
            return ut(a, t.issues)
    }
}
  , gt = r => !!r && "~standard"in r
  , N = {
    isValidating: !1,
    isTouched: !1,
    isBlurred: !1,
    isDirty: !1,
    isPristine: !0,
    errors: [],
    errorMap: {}
};
function z(r) {
    function a(h, o, d, f) {
        const p = t(h, o, d, f);
        ({
            insert: () => l(p, h, o),
            remove: () => v(p),
            swap: () => f !== void 0 && c(p, h, o, f),
            move: () => f !== void 0 && u(p, h, o, f)
        })[d]()
    }
    function e(h, o) {
        return `${h}[${o}]`
    }
    function t(h, o, d, f) {
        const p = [e(h, o)];
        if (d === "swap")
            p.push(e(h, f));
        else if (d === "move") {
            const [m,g] = [Math.min(o, f), Math.max(o, f)];
            for (let M = m; M <= g; M++)
                p.push(e(h, M))
        } else {
            const m = r.getFieldValue(h)
              , g = Array.isArray(m) ? m.length : 0;
            for (let M = o + 1; M < g; M++)
                p.push(e(h, M))
        }
        return Object.keys(r.fieldInfo).filter(m => p.some(g => m.startsWith(g)))
    }
    function s(h, o) {
        return h.replace(/\[(\d+)\]/, (d, f) => {
            const p = parseInt(f, 10);
            return `[${o === "up" ? p + 1 : Math.max(0, p - 1)}]`
        }
        )
    }
    function i(h, o) {
        (o === "up" ? h : [...h].reverse()).forEach(f => {
            const p = s(f.toString(), o)
              , m = r.getFieldMeta(p);
            m ? r.setFieldMeta(f, m) : r.setFieldMeta(f, n())
        }
        )
    }
    const n = () => N
      , l = (h, o, d) => {
        i(h, "down"),
        h.forEach(f => {
            f.toString().startsWith(e(o, d)) && r.setFieldMeta(f, n())
        }
        )
    }
      , v = h => {
        i(h, "up")
    }
      , u = (h, o, d, f) => {
        const p = new Map(Object.keys(r.fieldInfo).filter(m => m.startsWith(e(o, d))).map(m => [m, r.getFieldMeta(m)]));
        i(h, d < f ? "up" : "down"),
        Object.keys(r.fieldInfo).filter(m => m.startsWith(e(o, f))).forEach(m => {
            const g = m.replace(e(o, f), e(o, d))
              , M = p.get(g);
            M && r.setFieldMeta(m, M)
        }
        )
    }
      , c = (h, o, d, f) => {
        h.forEach(p => {
            if (!p.toString().startsWith(e(o, d)))
                return;
            const m = p.toString().replace(e(o, d), e(o, f))
              , [g,M] = [r.getFieldMeta(p), r.getFieldMeta(m)];
            g && r.setFieldMeta(m, g),
            M && r.setFieldMeta(p, M)
        }
        )
    }
    ;
    return {
        handleArrayFieldMetaShift: a
    }
}
function Z(r) {
    return {
        values: r.values ?? {},
        errorMap: r.errorMap ?? {},
        fieldMetaBase: r.fieldMetaBase ?? {},
        isSubmitted: r.isSubmitted ?? !1,
        isSubmitting: r.isSubmitting ?? !1,
        isValidating: r.isValidating ?? !1,
        submissionAttempts: r.submissionAttempts ?? 0,
        isSubmitSuccessful: r.isSubmitSuccessful ?? !1,
        validationMetaMap: r.validationMetaMap ?? {
            onChange: void 0,
            onBlur: void 0,
            onSubmit: void 0,
            onMount: void 0,
            onServer: void 0
        }
    }
}
class $t {
    constructor(a) {
        var e;
        this.options = {},
        this.fieldInfo = {},
        this.prevTransformArray = [],
        this.cumulativeFieldsErrorMap = {},
        this.mount = () => {
            const t = this.fieldMetaDerived.mount()
              , s = this.store.mount()
              , i = () => {
                t(),
                s()
            }
              , {onMount: n} = this.options.validators || {};
            return n && this.validateSync("mount"),
            i
        }
        ,
        this.update = t => {
            var s, i;
            if (!t)
                return;
            const n = this.options;
            this.options = t;
            const l = !!((i = (s = t.transform) == null ? void 0 : s.deps) != null && i.some( (c, h) => c !== this.prevTransformArray[h]))
              , v = t.defaultValues && !Y(t.defaultValues, n.defaultValues) && !this.state.isTouched
              , u = !Y(t.defaultState, n.defaultState) && !this.state.isTouched;
            !v && !u && !l || k( () => {
                this.baseStore.setState( () => Z(Object.assign({}, this.state, u ? t.defaultState : {}, v ? {
                    values: t.defaultValues
                } : {}, l ? {
                    _force_re_eval: !this.state._force_re_eval
                } : {})))
            }
            )
        }
        ,
        this.reset = (t, s) => {
            const {fieldMeta: i} = this.state
              , n = this.resetFieldMeta(i);
            t && !s?.keepDefaultValues && (this.options = {
                ...this.options,
                defaultValues: t
            }),
            this.baseStore.setState( () => {
                var l;
                return Z({
                    ...this.options.defaultState,
                    values: t ?? this.options.defaultValues ?? ((l = this.options.defaultState) == null ? void 0 : l.values),
                    fieldMetaBase: n
                })
            }
            )
        }
        ,
        this.validateAllFields = async t => {
            const s = [];
            return k( () => {
                Object.values(this.fieldInfo).forEach(n => {
                    if (!n.instance)
                        return;
                    const l = n.instance;
                    s.push(Promise.resolve().then( () => l.validate(t, {
                        skipFormValidation: !0
                    }))),
                    n.instance.state.meta.isTouched || n.instance.setMeta(v => ({
                        ...v,
                        isTouched: !0
                    }))
                }
                )
            }
            ),
            (await Promise.all(s)).flat()
        }
        ,
        this.validateArrayFieldsStartingFrom = async (t, s, i) => {
            const n = this.getFieldValue(t)
              , l = Array.isArray(n) ? Math.max(n.length - 1, 0) : null
              , v = [`${t}[${s}]`];
            for (let o = s + 1; o <= (l ?? 0); o++)
                v.push(`${t}[${o}]`);
            const u = Object.keys(this.fieldInfo).filter(o => v.some(d => o.startsWith(d)))
              , c = [];
            return k( () => {
                u.forEach(o => {
                    c.push(Promise.resolve().then( () => this.validateField(o, i)))
                }
                )
            }
            ),
            (await Promise.all(c)).flat()
        }
        ,
        this.validateField = (t, s) => {
            var i;
            const n = (i = this.fieldInfo[t]) == null ? void 0 : i.instance;
            return n ? (n.state.meta.isTouched || n.setMeta(l => ({
                ...l,
                isTouched: !0
            })),
            n.validate(s)) : []
        }
        ,
        this.validateSync = t => {
            const s = rt(t, this.options);
            let i = !1;
            const n = {};
            return k( () => {
                var l;
                for (const u of s) {
                    if (!u.validate)
                        continue;
                    const c = this.runValidator({
                        validate: u.validate,
                        value: {
                            value: this.state.values,
                            formApi: this,
                            validationSource: "form"
                        },
                        type: "validate"
                    })
                      , {formError: h, fieldErrors: o} = at(c)
                      , d = R(u.cause);
                    if (o)
                        for (const [f,p] of Object.entries(o)) {
                            const g = {
                                ...this.cumulativeFieldsErrorMap[f] || {},
                                [d]: p
                            };
                            n[f] = g,
                            this.cumulativeFieldsErrorMap[f] = g;
                            const M = this.getFieldMeta(f);
                            M && M.errorMap[d] !== p && this.setFieldMeta(f, b => ({
                                ...b,
                                errorMap: {
                                    ...b.errorMap,
                                    [d]: p
                                }
                            }))
                        }
                    for (const f of Object.keys(this.cumulativeFieldsErrorMap)) {
                        const p = this.getFieldMeta(f);
                        p?.errorMap[d] && !((l = n[f]) != null && l[d]) && (this.cumulativeFieldsErrorMap[f] = {
                            ...this.cumulativeFieldsErrorMap[f],
                            [d]: void 0
                        },
                        this.setFieldMeta(f, m => ({
                            ...m,
                            errorMap: {
                                ...m.errorMap,
                                [d]: void 0
                            }
                        })))
                    }
                    this.state.errorMap[d] !== h && this.baseStore.setState(f => ({
                        ...f,
                        errorMap: {
                            ...f.errorMap,
                            [d]: h
                        }
                    })),
                    (h || o) && (i = !0)
                }
                const v = R("submit");
                this.state.errorMap[v] && t !== "submit" && !i && this.baseStore.setState(u => ({
                    ...u,
                    errorMap: {
                        ...u.errorMap,
                        [v]: void 0
                    }
                }))
            }
            ),
            {
                hasErrored: i,
                fieldsErrorMap: n
            }
        }
        ,
        this.validateAsync = async t => {
            const s = it(t, this.options);
            this.state.isFormValidating || this.baseStore.setState(u => ({
                ...u,
                isFormValidating: !0
            }));
            const i = [];
            let n;
            for (const u of s) {
                if (!u.validate)
                    continue;
                const c = R(u.cause)
                  , h = this.state.validationMetaMap[c];
                h?.lastAbortController.abort();
                const o = new AbortController;
                this.state.validationMetaMap[c] = {
                    lastAbortController: o
                },
                i.push(new Promise(async d => {
                    let f;
                    try {
                        f = await new Promise( (M, b) => {
                            setTimeout(async () => {
                                if (o.signal.aborted)
                                    return M(void 0);
                                try {
                                    M(await this.runValidator({
                                        validate: u.validate,
                                        value: {
                                            value: this.state.values,
                                            formApi: this,
                                            validationSource: "form",
                                            signal: o.signal
                                        },
                                        type: "validateAsync"
                                    }))
                                } catch (S) {
                                    b(S)
                                }
                            }
                            , u.debounceMs)
                        }
                        )
                    } catch (M) {
                        f = M
                    }
                    const {formError: p, fieldErrors: m} = at(f);
                    m && (n = n ? {
                        ...n,
                        ...m
                    } : m);
                    const g = R(u.cause);
                    if (n)
                        for (const [M,b] of Object.entries(n)) {
                            const S = this.getFieldMeta(M);
                            S && S.errorMap[g] !== b && this.setFieldMeta(M, w => ({
                                ...w,
                                errorMap: {
                                    ...w.errorMap,
                                    [g]: b
                                }
                            }))
                        }
                    this.baseStore.setState(M => ({
                        ...M,
                        errorMap: {
                            ...M.errorMap,
                            [g]: p
                        }
                    })),
                    d(n ? {
                        fieldErrors: n,
                        errorMapKey: g
                    } : void 0)
                }
                ))
            }
            let l = [];
            const v = {};
            if (i.length) {
                l = await Promise.all(i);
                for (const u of l)
                    if (u?.fieldErrors) {
                        const {errorMapKey: c} = u;
                        for (const [h,o] of Object.entries(u.fieldErrors)) {
                            const f = {
                                ...v[h] || {},
                                [c]: o
                            };
                            v[h] = f
                        }
                    }
            }
            return this.baseStore.setState(u => ({
                ...u,
                isFormValidating: !1
            })),
            v
        }
        ,
        this.validate = t => {
            const {hasErrored: s, fieldsErrorMap: i} = this.validateSync(t);
            return s && !this.options.asyncAlways ? i : this.validateAsync(t)
        }
        ,
        this.getFieldValue = t => pt(this.state.values, t),
        this.getFieldMeta = t => this.state.fieldMeta[t],
        this.getFieldInfo = t => {
            var s;
            return (s = this.fieldInfo)[t] || (s[t] = {
                instance: null,
                validationMetaMap: {
                    onChange: void 0,
                    onBlur: void 0,
                    onSubmit: void 0,
                    onMount: void 0,
                    onServer: void 0
                }
            })
        }
        ,
        this.setFieldMeta = (t, s) => {
            this.baseStore.setState(i => ({
                ...i,
                fieldMetaBase: {
                    ...i.fieldMetaBase,
                    [t]: K(s, i.fieldMetaBase[t])
                }
            }))
        }
        ,
        this.resetFieldMeta = t => Object.keys(t).reduce( (s, i) => {
            const n = i;
            return s[n] = N,
            s
        }
        , {}),
        this.setFieldValue = (t, s, i) => {
            const n = i?.dontUpdateMeta ?? !1;
            k( () => {
                n || this.setFieldMeta(t, l => ({
                    ...l,
                    isTouched: !0,
                    isDirty: !0,
                    errorMap: {
                        ...l?.errorMap,
                        onMount: void 0
                    }
                })),
                this.baseStore.setState(l => ({
                    ...l,
                    values: X(l.values, t, s)
                }))
            }
            )
        }
        ,
        this.deleteField = t => {
            const i = [...Object.keys(this.fieldInfo).filter(n => {
                const l = t.toString();
                return n !== l && n.startsWith(l)
            }
            ), t];
            this.baseStore.setState(n => {
                const l = {
                    ...n
                };
                return i.forEach(v => {
                    l.values = _t(l.values, v),
                    delete this.fieldInfo[v],
                    delete l.fieldMetaBase[v]
                }
                ),
                l
            }
            )
        }
        ,
        this.pushFieldValue = (t, s, i) => {
            this.setFieldValue(t, n => [...Array.isArray(n) ? n : [], s], i),
            this.validateField(t, "change")
        }
        ,
        this.insertFieldValue = async (t, s, i, n) => {
            this.setFieldValue(t, l => [...l.slice(0, s), i, ...l.slice(s)], n),
            await this.validateField(t, "change"),
            z(this).handleArrayFieldMetaShift(t, s, "insert"),
            await this.validateArrayFieldsStartingFrom(t, s, "change")
        }
        ,
        this.replaceFieldValue = async (t, s, i, n) => {
            this.setFieldValue(t, l => l.map( (v, u) => u === s ? i : v), n),
            await this.validateField(t, "change"),
            await this.validateArrayFieldsStartingFrom(t, s, "change")
        }
        ,
        this.removeFieldValue = async (t, s, i) => {
            const n = this.getFieldValue(t)
              , l = Array.isArray(n) ? Math.max(n.length - 1, 0) : null;
            if (this.setFieldValue(t, v => v.filter( (u, c) => c !== s), i),
            z(this).handleArrayFieldMetaShift(t, s, "remove"),
            l !== null) {
                const v = `${t}[${l}]`;
                this.deleteField(v)
            }
            await this.validateField(t, "change"),
            await this.validateArrayFieldsStartingFrom(t, s, "change")
        }
        ,
        this.swapFieldValues = (t, s, i, n) => {
            this.setFieldValue(t, l => {
                const v = l[s]
                  , u = l[i];
                return X(X(l, `${s}`, u), `${i}`, v)
            }
            , n),
            z(this).handleArrayFieldMetaShift(t, s, "swap", i),
            this.validateField(t, "change"),
            this.validateField(`${t}[${s}]`, "change"),
            this.validateField(`${t}[${i}]`, "change")
        }
        ,
        this.moveFieldValues = (t, s, i, n) => {
            this.setFieldValue(t, l => (l.splice(i, 0, l.splice(s, 1)[0]),
            l), n),
            z(this).handleArrayFieldMetaShift(t, s, "move", i),
            this.validateField(t, "change"),
            this.validateField(`${t}[${s}]`, "change"),
            this.validateField(`${t}[${i}]`, "change")
        }
        ,
        this.resetField = t => {
            this.baseStore.setState(s => ({
                ...s,
                fieldMetaBase: {
                    ...s.fieldMetaBase,
                    [t]: N
                },
                values: {
                    ...s.values,
                    [t]: this.options.defaultValues && this.options.defaultValues[t]
                }
            }))
        }
        ,
        this.getAllErrors = () => ({
            form: {
                errors: this.state.errors,
                errorMap: this.state.errorMap
            },
            fields: Object.entries(this.state.fieldMeta).reduce( (t, [s,i]) => (Object.keys(i).length && i.errors.length && (t[s] = {
                errors: i.errors,
                errorMap: i.errorMap
            }),
            t), {})
        }),
        this.baseStore = new et(Z({
            ...a?.defaultState,
            values: a?.defaultValues ?? ((e = a?.defaultState) == null ? void 0 : e.values)
        })),
        this.fieldMetaDerived = new A({
            deps: [this.baseStore],
            fn: ({prevDepVals: t, currDepVals: s, prevVal: i}) => {
                var n;
                const l = i
                  , v = t?.[0]
                  , u = s[0];
                let c = 0;
                const h = {};
                for (const o of Object.keys(u.fieldMetaBase)) {
                    const d = u.fieldMetaBase[o]
                      , f = v?.fieldMetaBase[o]
                      , p = l?.[o];
                    let m = p?.errors;
                    if (!f || d.errorMap !== f.errorMap) {
                        m = Object.values(d.errorMap ?? {}).filter(b => b !== void 0);
                        const M = (n = this.getFieldInfo(o)) == null ? void 0 : n.instance;
                        M && !M.options.disableErrorFlat && (m = m?.flat(1))
                    }
                    const g = !d.isDirty;
                    if (p && p.isPristine === g && p.errors === m && d === f) {
                        h[o] = p,
                        c++;
                        continue
                    }
                    h[o] = {
                        ...d,
                        errors: m,
                        isPristine: g
                    }
                }
                return Object.keys(u.fieldMetaBase).length && l && c === Object.keys(u.fieldMetaBase).length ? l : h
            }
        }),
        this.store = new A({
            deps: [this.baseStore, this.fieldMetaDerived],
            fn: ({prevDepVals: t, currDepVals: s, prevVal: i}) => {
                var n, l, v, u;
                const c = i
                  , h = t?.[0]
                  , o = s[0]
                  , d = Object.values(o.fieldMetaBase)
                  , f = d.some(y => y?.isValidating)
                  , p = !d.some(y => y?.errorMap && Dt(Object.values(y.errorMap).filter(Boolean)))
                  , m = d.some(y => y?.isTouched)
                  , g = d.some(y => y?.isBlurred)
                  , M = m && ((n = o?.errorMap) == null ? void 0 : n.onMount)
                  , b = d.some(y => y?.isDirty)
                  , S = !b
                  , w = !!((l = o.errorMap) != null && l.onMount || d.some(y => {
                    var E;
                    return (E = y?.errorMap) == null ? void 0 : E.onMount
                }
                ))
                  , _ = !!f;
                let F = c?.errors ?? [];
                (!h || o.errorMap !== h.errorMap) && (F = Object.values(o.errorMap).reduce( (y, E) => E === void 0 ? y : E && mt(E) ? (y.push(E.form),
                y) : (y.push(E),
                y), []));
                const V = F.length === 0
                  , D = p && V
                  , H = this.options.canSubmitWhenInvalid ?? !1
                  , lt = o.submissionAttempts === 0 && !m && !w || !_ && !o.isSubmitting && D || H;
                let C = o.errorMap;
                if (M && (F = F.filter(y => y !== o.errorMap.onMount),
                C = Object.assign(C, {
                    onMount: void 0
                })),
                c && h && c.errorMap === C && c.fieldMeta === this.fieldMetaDerived.state && c.errors === F && c.isFieldsValidating === f && c.isFieldsValid === p && c.isFormValid === V && c.isValid === D && c.canSubmit === lt && c.isTouched === m && c.isBlurred === g && c.isPristine === S && c.isDirty === b && Y(h, o))
                    return c;
                let q = {
                    ...o,
                    errorMap: C,
                    fieldMeta: this.fieldMetaDerived.state,
                    errors: F,
                    isFieldsValidating: f,
                    isFieldsValid: p,
                    isFormValid: V,
                    isValid: D,
                    canSubmit: lt,
                    isTouched: m,
                    isBlurred: g,
                    isPristine: S,
                    isDirty: b
                };
                const J = ((v = this.options.transform) == null ? void 0 : v.deps) ?? [];
                if (J.length !== this.prevTransformArray.length || J.some( (y, E) => y !== this.prevTransformArray[E])) {
                    const y = Object.assign({}, this, {
                        state: q
                    });
                    (u = this.options.transform) == null || u.fn(y),
                    q = y.state,
                    this.prevTransformArray = J
                }
                return q
            }
        }),
        this.handleSubmit = this.handleSubmit.bind(this),
        this.update(a || {})
    }
    get state() {
        return this.store.state
    }
    runValidator(a) {
        return gt(a.validate) ? Mt[a.type](a.value, a.validate) : a.validate(a.value)
    }
    async handleSubmit(a) {
        var e, t, s, i, n, l;
        if (this.baseStore.setState(u => ({
            ...u,
            isSubmitted: !1,
            submissionAttempts: u.submissionAttempts + 1,
            isSubmitSuccessful: !1
        })),
        !this.state.canSubmit)
            return;
        this.baseStore.setState(u => ({
            ...u,
            isSubmitting: !0
        }));
        const v = () => {
            this.baseStore.setState(u => ({
                ...u,
                isSubmitting: !1
            }))
        }
        ;
        if (await this.validateAllFields("submit"),
        !this.state.isFieldsValid) {
            v(),
            (t = (e = this.options).onSubmitInvalid) == null || t.call(e, {
                value: this.state.values,
                formApi: this
            });
            return
        }
        if (await this.validate("submit"),
        !this.state.isValid) {
            v(),
            (i = (s = this.options).onSubmitInvalid) == null || i.call(s, {
                value: this.state.values,
                formApi: this
            });
            return
        }
        k( () => {
            Object.values(this.fieldInfo).forEach(u => {
                var c, h, o;
                (o = (h = (c = u.instance) == null ? void 0 : c.options.listeners) == null ? void 0 : h.onSubmit) == null || o.call(h, {
                    value: u.instance.state.value,
                    fieldApi: u.instance
                })
            }
            )
        }
        );
        try {
            await ((l = (n = this.options).onSubmit) == null ? void 0 : l.call(n, {
                value: this.state.values,
                formApi: this,
                meta: a ?? this.options.onSubmitMeta
            })),
            k( () => {
                this.baseStore.setState(u => ({
                    ...u,
                    isSubmitted: !0,
                    isSubmitSuccessful: !0
                })),
                v()
            }
            )
        } catch (u) {
            throw this.baseStore.setState(c => ({
                ...c,
                isSubmitSuccessful: !1
            })),
            v(),
            u
        }
    }
    setErrorMap(a) {
        this.baseStore.setState(e => ({
            ...e,
            errorMap: {
                ...e.errorMap,
                ...a
            }
        }))
    }
}
function at(r) {
    if (r) {
        if (mt(r)) {
            const a = at(r.form).formError
              , e = r.fields;
            return {
                formError: a,
                fieldErrors: e
            }
        }
        return {
            formError: r
        }
    }
    return {
        formError: void 0
    }
}
function R(r) {
    switch (r) {
    case "submit":
        return "onSubmit";
    case "blur":
        return "onBlur";
    case "mount":
        return "onMount";
    case "server":
        return "onServer";
    case "change":
    default:
        return "onChange"
    }
}
class Ct {
    constructor(a) {
        this.options = {},
        this.mount = () => {
            var e, t;
            const s = this.store.mount();
            this.options.defaultValue !== void 0 && this.form.setFieldValue(this.name, this.options.defaultValue, {
                dontUpdateMeta: !0
            });
            const i = this.getInfo();
            i.instance = this,
            this.update(this.options);
            const {onMount: n} = this.options.validators || {};
            if (n) {
                const l = this.runValidator({
                    validate: n,
                    value: {
                        value: this.state.value,
                        fieldApi: this,
                        validationSource: "field"
                    },
                    type: "validate"
                });
                l && this.setMeta(v => ({
                    ...v,
                    errorMap: {
                        ...v?.errorMap,
                        onMount: l
                    }
                }))
            }
            return (t = (e = this.options.listeners) == null ? void 0 : e.onMount) == null || t.call(e, {
                value: this.state.value,
                fieldApi: this
            }),
            s
        }
        ,
        this.update = e => {
            this.options = e;
            const t = this.name !== e.name;
            if (this.name = e.name,
            this.state.value === void 0) {
                const s = pt(e.form.options.defaultValues, e.name)
                  , i = e.defaultValue ?? s;
                t ? this.setValue(n => n || i, {
                    dontUpdateMeta: !0
                }) : i !== void 0 && this.setValue(i, {
                    dontUpdateMeta: !0
                })
            }
            this.form.getFieldMeta(this.name) === void 0 && this.setMeta(this.state.meta)
        }
        ,
        this.getValue = () => this.form.getFieldValue(this.name),
        this.setValue = (e, t) => {
            var s, i;
            this.form.setFieldValue(this.name, e, t),
            (i = (s = this.options.listeners) == null ? void 0 : s.onChange) == null || i.call(s, {
                value: this.state.value,
                fieldApi: this
            }),
            this.validate("change")
        }
        ,
        this.getMeta = () => this.store.state.meta,
        this.setMeta = e => this.form.setFieldMeta(this.name, e),
        this.getInfo = () => this.form.getFieldInfo(this.name),
        this.pushValue = (e, t) => {
            var s, i;
            this.form.pushFieldValue(this.name, e, t),
            (i = (s = this.options.listeners) == null ? void 0 : s.onChange) == null || i.call(s, {
                value: this.state.value,
                fieldApi: this
            })
        }
        ,
        this.insertValue = (e, t, s) => {
            var i, n;
            this.form.insertFieldValue(this.name, e, t, s),
            (n = (i = this.options.listeners) == null ? void 0 : i.onChange) == null || n.call(i, {
                value: this.state.value,
                fieldApi: this
            })
        }
        ,
        this.replaceValue = (e, t, s) => {
            var i, n;
            this.form.replaceFieldValue(this.name, e, t, s),
            (n = (i = this.options.listeners) == null ? void 0 : i.onChange) == null || n.call(i, {
                value: this.state.value,
                fieldApi: this
            })
        }
        ,
        this.removeValue = (e, t) => {
            var s, i;
            this.form.removeFieldValue(this.name, e, t),
            (i = (s = this.options.listeners) == null ? void 0 : s.onChange) == null || i.call(s, {
                value: this.state.value,
                fieldApi: this
            })
        }
        ,
        this.swapValues = (e, t, s) => {
            var i, n;
            this.form.swapFieldValues(this.name, e, t, s),
            (n = (i = this.options.listeners) == null ? void 0 : i.onChange) == null || n.call(i, {
                value: this.state.value,
                fieldApi: this
            })
        }
        ,
        this.moveValue = (e, t, s) => {
            var i, n;
            this.form.moveFieldValues(this.name, e, t, s),
            (n = (i = this.options.listeners) == null ? void 0 : i.onChange) == null || n.call(i, {
                value: this.state.value,
                fieldApi: this
            })
        }
        ,
        this.getLinkedFields = e => {
            const t = Object.values(this.form.fieldInfo)
              , s = [];
            for (const i of t) {
                if (!i.instance)
                    continue;
                const {onChangeListenTo: n, onBlurListenTo: l} = i.instance.options.validators || {};
                e === "change" && n?.includes(this.name) && s.push(i.instance),
                e === "blur" && l?.includes(this.name) && s.push(i.instance)
            }
            return s
        }
        ,
        this.validateSync = (e, t) => {
            const s = rt(e, this.options)
              , n = this.getLinkedFields(e).reduce( (u, c) => {
                const h = rt(e, c.options);
                return h.forEach(o => {
                    o.field = c
                }
                ),
                u.concat(h)
            }
            , []);
            let l = !1;
            k( () => {
                const u = (c, h) => {
                    const o = I(h.cause)
                      , d = h.validate ? ct(c.runValidator({
                        validate: h.validate,
                        value: {
                            value: c.store.state.value,
                            validationSource: "field",
                            fieldApi: c
                        },
                        type: "validate"
                    })) : t[o];
                    c.state.meta.errorMap[o] !== d && c.setMeta(f => ({
                        ...f,
                        errorMap: {
                            ...f.errorMap,
                            [I(h.cause)]: d || t[o]
                        }
                    })),
                    (d || t[o]) && (l = !0)
                }
                ;
                for (const c of s)
                    u(this, c);
                for (const c of n)
                    c.validate && u(c.field, c)
            }
            );
            const v = I("submit");
            return this.state.meta.errorMap[v] && e !== "submit" && !l && this.setMeta(u => ({
                ...u,
                errorMap: {
                    ...u.errorMap,
                    [v]: void 0
                }
            })),
            {
                hasErrored: l
            }
        }
        ,
        this.validateAsync = async (e, t) => {
            const s = it(e, this.options)
              , i = await t
              , n = this.getLinkedFields(e)
              , l = n.reduce( (o, d) => {
                const f = it(e, d.options);
                return f.forEach(p => {
                    p.field = d
                }
                ),
                o.concat(f)
            }
            , []);
            this.state.meta.isValidating || this.setMeta(o => ({
                ...o,
                isValidating: !0
            }));
            for (const o of n)
                o.setMeta(d => ({
                    ...d,
                    isValidating: !0
                }));
            const v = []
              , u = []
              , c = (o, d, f) => {
                const p = I(d.cause)
                  , m = o.getInfo().validationMetaMap[p];
                m?.lastAbortController.abort();
                const g = new AbortController;
                this.getInfo().validationMetaMap[p] = {
                    lastAbortController: g
                },
                f.push(new Promise(async M => {
                    var b;
                    let S;
                    try {
                        S = await new Promise( (V, D) => {
                            this.timeoutIds[d.cause] && clearTimeout(this.timeoutIds[d.cause]),
                            this.timeoutIds[d.cause] = setTimeout(async () => {
                                if (g.signal.aborted)
                                    return V(void 0);
                                try {
                                    V(await this.runValidator({
                                        validate: d.validate,
                                        value: {
                                            value: o.store.state.value,
                                            fieldApi: o,
                                            signal: g.signal,
                                            validationSource: "field"
                                        },
                                        type: "validateAsync"
                                    }))
                                } catch (H) {
                                    D(H)
                                }
                            }
                            , d.debounceMs)
                        }
                        )
                    } catch (V) {
                        S = V
                    }
                    if (g.signal.aborted)
                        return M(void 0);
                    const w = ct(S)
                      , _ = (b = i[this.name]) == null ? void 0 : b[p]
                      , F = w || _;
                    o.setMeta(V => ({
                        ...V,
                        errorMap: {
                            ...V?.errorMap,
                            [p]: F
                        }
                    })),
                    M(F)
                }
                ))
            }
            ;
            for (const o of s)
                o.validate && c(this, o, v);
            for (const o of l)
                o.validate && c(o.field, o, u);
            let h = [];
            (v.length || u.length) && (h = await Promise.all(v),
            await Promise.all(u)),
            this.setMeta(o => ({
                ...o,
                isValidating: !1
            }));
            for (const o of n)
                o.setMeta(d => ({
                    ...d,
                    isValidating: !1
                }));
            return h.filter(Boolean)
        }
        ,
        this.validate = (e, t) => {
            var s;
            if (!this.state.meta.isTouched)
                return [];
            const {fieldsErrorMap: i} = t?.skipFormValidation ? {
                fieldsErrorMap: {}
            } : this.form.validateSync(e)
              , {hasErrored: n} = this.validateSync(e, i[this.name] ?? {});
            if (n && !this.options.asyncAlways)
                return (s = this.getInfo().validationMetaMap[I(e)]) == null || s.lastAbortController.abort(),
                this.state.meta.errors;
            const l = t?.skipFormValidation ? Promise.resolve({}) : this.form.validateAsync(e);
            return this.validateAsync(e, l)
        }
        ,
        this.handleChange = e => {
            this.setValue(e)
        }
        ,
        this.handleBlur = () => {
            var e, t;
            this.state.meta.isTouched || (this.setMeta(i => ({
                ...i,
                isTouched: !0
            })),
            this.validate("change")),
            this.state.meta.isBlurred || this.setMeta(i => ({
                ...i,
                isBlurred: !0
            })),
            this.validate("blur"),
            (t = (e = this.options.listeners) == null ? void 0 : e.onBlur) == null || t.call(e, {
                value: this.state.value,
                fieldApi: this
            })
        }
        ,
        this.form = a.form,
        this.name = a.name,
        this.timeoutIds = {},
        this.store = new A({
            deps: [this.form.store],
            fn: () => {
                const e = this.form.getFieldValue(this.name)
                  , t = this.form.getFieldMeta(this.name) ?? {
                    ...N,
                    ...a.defaultMeta
                };
                return {
                    value: e,
                    meta: t
                }
            }
        }),
        this.options = a
    }
    get state() {
        return this.store.state
    }
    runValidator(a) {
        return gt(a.validate) ? Mt[a.type](a.value, a.validate) : a.validate(a.value)
    }
    setErrorMap(a) {
        this.setMeta(e => ({
            ...e,
            errorMap: {
                ...e.errorMap,
                ...a
            }
        }))
    }
}
function ct(r) {
    if (r)
        return r
}
function I(r) {
    switch (r) {
    case "submit":
        return "onSubmit";
    case "blur":
        return "onBlur";
    case "mount":
        return "onMount";
    case "server":
        return "onServer";
    case "change":
    default:
        return "onChange"
    }
}
var x = {
    exports: {}
}
  , tt = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function Bt() {
    if (dt)
        return tt;
    dt = 1;
    var r = bt()
      , a = St();
    function e(u, c) {
        return u === c && (u !== 0 || 1 / u === 1 / c) || u !== u && c !== c
    }
    var t = typeof Object.is == "function" ? Object.is : e
      , s = a.useSyncExternalStore
      , i = r.useRef
      , n = r.useEffect
      , l = r.useMemo
      , v = r.useDebugValue;
    return tt.useSyncExternalStoreWithSelector = function(u, c, h, o, d) {
        var f = i(null);
        if (f.current === null) {
            var p = {
                hasValue: !1,
                value: null
            };
            f.current = p
        } else
            p = f.current;
        f = l(function() {
            function g(_) {
                if (!M) {
                    if (M = !0,
                    b = _,
                    _ = o(_),
                    d !== void 0 && p.hasValue) {
                        var F = p.value;
                        if (d(F, _))
                            return S = F
                    }
                    return S = _
                }
                if (F = S,
                t(b, _))
                    return F;
                var V = o(_);
                return d !== void 0 && d(F, V) ? (b = _,
                F) : (b = _,
                S = V)
            }
            var M = !1, b, S, w = h === void 0 ? null : h;
            return [function() {
                return g(c())
            }
            , w === null ? void 0 : function() {
                return g(w())
            }
            ]
        }, [c, h, o, d]);
        var m = s(u, f[0], f[1]);
        return n(function() {
            p.hasValue = !0,
            p.value = m
        }, [m]),
        v(m),
        m
    }
    ,
    tt
}
var ht;
function Wt() {
    return ht || (ht = 1,
    x.exports = Bt()),
    x.exports
}
var zt = Wt();
function ot(r, a=e => e) {
    return zt.useSyncExternalStoreWithSelector(r.subscribe, () => r.state, () => r.state, a, Rt)
}
function Rt(r, a) {
    if (Object.is(r, a))
        return !0;
    if (typeof r != "object" || r === null || typeof a != "object" || a === null)
        return !1;
    if (r instanceof Map && a instanceof Map) {
        if (r.size !== a.size)
            return !1;
        for (const [t,s] of r)
            if (!a.has(t) || !Object.is(s, a.get(t)))
                return !1;
        return !0
    }
    if (r instanceof Set && a instanceof Set) {
        if (r.size !== a.size)
            return !1;
        for (const t of r)
            if (!a.has(t))
                return !1;
        return !0
    }
    const e = Object.keys(r);
    if (e.length !== Object.keys(a).length)
        return !1;
    for (let t = 0; t < e.length; t++)
        if (!Object.prototype.hasOwnProperty.call(a, e[t]) || !Object.is(r[e[t]], a[e[t]]))
            return !1;
    return !0
}
const G = typeof window < "u" ? $.useLayoutEffect : $.useEffect;
function jt(r) {
    const [a] = $.useState( () => {
        const t = new Ct({
            ...r,
            form: r.form,
            name: r.name
        });
        return t.Field = yt,
        t
    }
    );
    return G(a.mount, [a]),
    G( () => {
        a.update(r)
    }
    ),
    ot(a.store, r.mode === "array" ? e => [e.meta, Object.keys(e.value ?? []).length] : void 0),
    a
}
const yt = ({children: r, ...a}) => {
    const e = jt(a)
      , t = $.useMemo( () => K(r, e), [r, e, e.state.value, e.state.meta]);
    return L.jsx(L.Fragment, {
        children: t
    })
}
;
function Lt({form: r, selector: a, children: e}) {
    const t = ot(r.store, a);
    return K(e, t)
}
function Kt(r) {
    const [a] = $.useState( () => {
        const e = new $t(r)
          , t = e;
        return t.Field = function(i) {
            return L.jsx(yt, {
                ...i,
                form: e
            })
        }
        ,
        t.Subscribe = s => L.jsx(Lt, {
            form: e,
            selector: s.selector,
            children: s.children
        }),
        t
    }
    );
    return G(a.mount, []),
    ot(a.store, e => e.isSubmitting),
    G( () => {
        a.update(r)
    }
    ),
    a
}
export {ot as a, jt as b, Kt as u};
//# sourceMappingURL=na95db8kfrfbx9l9.js.map
