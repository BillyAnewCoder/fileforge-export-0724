import {r, ab as s, j as e, ac as c} from "./juy90og0wtbp77qa.js";
import {jR as n} from "./dc2xxjkicf2pz0mj.js";
n.instance.addTiming("entry.client");
r.startTransition( () => {
    s.hydrateRoot(document, e.jsx(r.StrictMode, {
        children: e.jsx(c, {})
    }), {
        onRecoverableError(t, o) {
            const a = new Error(`${tinstanceof Error ? t.message : String(t)}`);
            a.name = "RecoverableError",
            a.stack = o.componentStack ?? (t instanceof Error ? t.stack : String(t)),
            a.cause = t,
            n.instance.addError(a)
        }
    })
}
);
//# sourceMappingURL=l7ixvgk5r6m4l69i.js.map
