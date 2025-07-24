import {gc as b, ci as ce} from "./dc2xxjkicf2pz0mj.js";
import {is as I, it as S, iu as A, iv as z, iw as w, ix as V, iy as p, iz as U, iA as m, iB as se, iC as ie, iD as re, iE as C} from "./ckp56qklot786ulr.js";
import "./juy90og0wtbp77qa.js";
var q;
(e => {
    e.VERSION_INFO = [{
        version: 0,
        size: 32
    }],
    e.CURRENT_VERSION = e.VERSION_INFO[e.VERSION_INFO.length - 1];
    function s(n) {
        return I.bytes(e.CURRENT_VERSION.size).add(I.forString(n.accessToken)).add(I.forString(n.idToken))
    }
    e.measure = s;
    function u(n, t) {
        n.setString(0, t.accessToken),
        n.setString(8, t.idToken),
        n.setF64(16, t.expiresTimestampMsSince1970)
    }
    e.encode = u;
    function R(n, t) {
        return {
            accessToken: S(n.getString(0)),
            idToken: S(n.getString(8)),
            expiresTimestampMsSince1970: S(n.getF64(16))
        }
    }
    e.decode = R
}
)(q || (q = {}));
var Q;
(e => {
    function s(R) {
        if (R === "justLoggedInAccessToken")
            return 0;
        if (R === "reloadPageIfLoggedOut")
            return 1;
        if (R === "fullTokenToSessionConversion")
            return 2;
        throw new A
    }
    e.encode = s;
    function u(R) {
        switch (R) {
        case 0:
            return "justLoggedInAccessToken";
        case 1:
            return "reloadPageIfLoggedOut";
        case 2:
            return "fullTokenToSessionConversion";
        default:
            return "justLoggedInAccessToken"
        }
    }
    e.decode = u
}
)(Q || (Q = {}));
class X {
    static interfaceName = "web.bridge.AuthHandler";
    static interfaceVersion = 0
}
(e => {
    let s;
    (t => {
        t.VERSION_INFO = [{
            version: 0,
            size: 8
        }],
        t.CURRENT_VERSION = t.VERSION_INFO[t.VERSION_INFO.length - 1];
        function c(N) {
            return I.bytes(t.CURRENT_VERSION.size)
        }
        t.measure = c;
        function r(N, a) {}
        t.encode = r;
        function o(N, a) {
            return {}
        }
        t.decode = o
    }
    )(s = e.AuthHandler_HandleMissingSessionAuth_Params || (e.AuthHandler_HandleMissingSessionAuth_Params = {}));
    let u;
    (t => {
        t.VERSION_INFO = [{
            version: 0,
            size: 8
        }],
        t.CURRENT_VERSION = t.VERSION_INFO[t.VERSION_INFO.length - 1];
        function c(N) {
            return I.bytes(t.CURRENT_VERSION.size)
        }
        t.measure = c;
        function r(N, a) {}
        t.encode = r;
        function o(N, a) {
            return {}
        }
        t.decode = o
    }
    )(u = e.AuthHandler_RecordAvailableSessionAuth_Params || (e.AuthHandler_RecordAvailableSessionAuth_Params = {}));
    class R {
        constructor(c) {
            this._endpoint = new z(c.endpointState,!0),
            this._version = 0
        }
        static create() {
            const [c,r] = w.createChannel(e);
            return [new R(c), r]
        }
        static createToBrowser() {
            const [c,r] = this.create();
            return Mojo.bindInterface(e.interfaceName, r.pipe.rawHandle),
            c
        }
        handleMissingSessionAuth() {
            const c = {};
            this._endpoint.send(V.encode(0, p.None, s, c))
        }
        recordAvailableSessionAuth() {
            const c = {};
            this._endpoint.send(V.encode(1, p.None, u, c))
        }
        _endpoint;
        _version
    }
    e.Proxy = R;
    class n extends U {
        constructor() {
            super(e)
        }
        onDisconnect;
        bind(c, r) {
            this.addReceiver(r, async (o, N) => {
                switch (o.header.ordinal) {
                case 0:
                    {
                        o.decode(s),
                        c.handleMissingSessionAuth();
                        break
                    }
                case 1:
                    {
                        o.decode(u),
                        c.recordAvailableSessionAuth();
                        break
                    }
                default:
                    o.header.expectsResponse && N.sendUnimplementedResponse(o.header.requestID, o.header.ordinal)
                }
                return Promise.resolve()
            }
            , () => {
                this.onDisconnect && this.onDisconnect(c)
            }
            )
        }
        createRemote(c) {
            const [r,o] = w.createChannel(e);
            return this.bind(c, o),
            r
        }
    }
    e.Dispatcher = n
}
)(X || (X = {}));
class J {
    static interfaceName = "web.bridge.AuthStateController";
    static interfaceVersion = 0
}
(e => {
    let s;
    (n => {
        n.VERSION_INFO = [{
            version: 0,
            size: 24
        }],
        n.CURRENT_VERSION = n.VERSION_INFO[n.VERSION_INFO.length - 1];
        function t(o) {
            return I.bytes(n.CURRENT_VERSION.size).add(I.forObject(q, o.authToken))
        }
        n.measure = t;
        function c(o, N) {
            o.setObjectIndirect(q, 0, N.authToken),
            o.setEnumValue(Q, 8, N.behavior)
        }
        n.encode = c;
        function r(o, N) {
            return {
                authToken: S(o.getObjectIndirect(q, 0)),
                behavior: S(o.getEnumValue(Q, 8))
            }
        }
        n.decode = r
    }
    )(s = e.AuthStateController_RefreshSessionContext_Params || (e.AuthStateController_RefreshSessionContext_Params = {}));
    class u {
        constructor(t) {
            this._endpoint = new z(t.endpointState,!0),
            this._version = 0
        }
        static create() {
            const [t,c] = w.createChannel(e);
            return [new u(t), c]
        }
        static createToBrowser() {
            const [t,c] = this.create();
            return Mojo.bindInterface(e.interfaceName, c.pipe.rawHandle),
            t
        }
        refreshSessionContext(t, c) {
            const r = {
                authToken: t,
                behavior: c
            };
            this._endpoint.send(V.encode(0, p.None, s, r))
        }
        _endpoint;
        _version
    }
    e.Proxy = u;
    class R extends U {
        constructor() {
            super(e)
        }
        onDisconnect;
        bind(t, c) {
            this.addReceiver(c, async (r, o) => {
                switch (r.header.ordinal) {
                case 0:
                    {
                        const N = r.decode(s);
                        t.refreshSessionContext(N.authToken, N.behavior);
                        break
                    }
                default:
                    r.header.expectsResponse && o.sendUnimplementedResponse(r.header.requestID, r.header.ordinal)
                }
                return Promise.resolve()
            }
            , () => {
                this.onDisconnect && this.onDisconnect(t)
            }
            )
        }
        createRemote(t) {
            const [c,r] = w.createChannel(e);
            return this.bind(t, r),
            c
        }
    }
    e.Dispatcher = R
}
)(J || (J = {}));
var x;
(e => {
    e.VERSION_INFO = [{
        version: 0,
        size: 32
    }],
    e.CURRENT_VERSION = e.VERSION_INFO[e.VERSION_INFO.length - 1];
    function s(n) {
        return I.bytes(e.CURRENT_VERSION.size).add(I.forString(n.conduitToken))
    }
    e.measure = s;
    function u(n, t) {
        n.setEnumValue(Z, 0, t.prepareState),
        n.setF64(8, t.lastPrepareTimestampMsSince1970),
        n.setString(16, t.conduitToken)
    }
    e.encode = u;
    function R(n, t) {
        return {
            prepareState: S(n.getEnumValue(Z, 0)),
            lastPrepareTimestampMsSince1970: S(n.getF64(8)),
            conduitToken: S(n.getString(16))
        }
    }
    e.decode = R
}
)(x || (x = {}));
var j;
(e => {
    e.VERSION_INFO = [{
        version: 0,
        size: 16
    }],
    e.CURRENT_VERSION = e.VERSION_INFO[e.VERSION_INFO.length - 1];
    function s(n) {
        return I.bytes(e.CURRENT_VERSION.size)
    }
    e.measure = s;
    function u(n, t) {
        n.setEnumValue(v, 0, t.selectedTab)
    }
    e.encode = u;
    function R(n, t) {
        return {
            selectedTab: S(n.getEnumValue(v, 0))
        }
    }
    e.decode = R
}
)(j || (j = {}));
var D;
(e => {
    e.VERSION_INFO = [{
        version: 0,
        size: 56
    }],
    e.CURRENT_VERSION = e.VERSION_INFO[e.VERSION_INFO.length - 1];
    function s(n) {
        return I.bytes(e.CURRENT_VERSION.size).add(I.forString(n.id)).add(I.forString(n.name)).add(I.forString(n.mimeType))
    }
    e.measure = s;
    function u(n, t) {
        let c = 0;
        n.setString(0, t.id),
        n.setI64(8, t.size),
        n.setString(16, t.name),
        n.setString(24, t.mimeType),
        t.width !== null && t.width !== void 0 && (c |= 1,
        n.setI32(36, t.width)),
        t.height !== null && t.height !== void 0 && (c |= 2,
        n.setI32(40, t.height)),
        t.fileTokenSize !== null && t.fileTokenSize !== void 0 && (c |= 4,
        n.setI32(44, t.fileTokenSize)),
        n.setU8(32, c)
    }
    e.encode = u;
    function R(n, t) {
        const c = n.getU8(32)
          , r = (c & 1) != 0
          , o = (c & 2) != 0
          , N = (c & 4) != 0;
        return {
            id: S(n.getString(0)),
            size: S(n.getI64(8)),
            name: S(n.getString(16)),
            mimeType: S(n.getString(24)),
            ...r ? {
                width: S(n.getI32(36))
            } : {},
            ...o ? {
                height: S(n.getI32(40))
            } : {},
            ...N ? {
                fileTokenSize: S(n.getI32(44))
            } : {}
        }
    }
    e.decode = R
}
)(D || (D = {}));
var M;
(e => {
    e.VERSION_INFO = [{
        version: 0,
        size: 40
    }],
    e.CURRENT_VERSION = e.VERSION_INFO[e.VERSION_INFO.length - 1];
    function s(n) {
        return I.bytes(e.CURRENT_VERSION.size).add(I.forString(n.id)).add(I.forString(n.url)).add(I.forString(n.title)).add(I.forString(n.base64favicon ?? null))
    }
    e.measure = s;
    function u(n, t) {
        n.setString(0, t.id),
        n.setString(8, t.url),
        n.setString(16, t.title),
        n.setString(24, t.base64favicon ?? null)
    }
    e.encode = u;
    function R(n, t) {
        const c = n.getString(24);
        return {
            id: S(n.getString(0)),
            url: S(n.getString(8)),
            title: S(n.getString(16)),
            ...c !== null ? {
                base64favicon: c
            } : {}
        }
    }
    e.decode = R
}
)(M || (M = {}));
var Y;
(e => {
    function s(R) {
        if (R === "mainPage")
            return 0;
        if (R === "sidebar")
            return 1;
        throw new A
    }
    e.encode = s;
    function u(R) {
        switch (R) {
        case 0:
            return "mainPage";
        case 1:
            return "sidebar";
        default:
            throw new A
        }
    }
    e.decode = u
}
)(Y || (Y = {}));
var Z;
(e => {
    function s(R) {
        if (R === "none")
            return 0;
        if (R === "sent")
            return 1;
        if (R === "success")
            return 2;
        if (R === "failure")
            return 3;
        throw new A
    }
    e.encode = s;
    function u(R) {
        switch (R) {
        case 0:
            return "none";
        case 1:
            return "sent";
        case 2:
            return "success";
        case 3:
            return "failure";
        default:
            return "none"
        }
    }
    e.decode = u
}
)(Z || (Z = {}));
var v;
(e => {
    function s(R) {
        if (R === "answer")
            return 0;
        if (R === "web")
            return 1;
        if (R === "images")
            return 2;
        if (R === "videos")
            return 3;
        throw new A
    }
    e.encode = s;
    function u(R) {
        switch (R) {
        case 0:
            return "answer";
        case 1:
            return "web";
        case 2:
            return "images";
        case 3:
            return "videos";
        default:
            return "answer"
        }
    }
    e.decode = u
}
)(v || (v = {}));
class K {
    static interfaceName = "web.bridge.ConversationController";
    static interfaceVersion = 0
}
(e => {
    let s;
    (i => {
        i.VERSION_INFO = [{
            version: 0,
            size: 16
        }],
        i.CURRENT_VERSION = i.VERSION_INFO[i.VERSION_INFO.length - 1];
        function O(d) {
            return I.bytes(i.CURRENT_VERSION.size)
        }
        i.measure = O;
        function h(d, f) {
            d.setEnumValue(Y, 0, f.windowStyle)
        }
        i.encode = h;
        function E(d, f) {
            return {
                windowStyle: S(d.getEnumValue(Y, 0))
            }
        }
        i.decode = E
    }
    )(s = e.ConversationController_SetWindowStyle_Params || (e.ConversationController_SetWindowStyle_Params = {}));
    let u;
    (i => {
        i.VERSION_INFO = [{
            version: 0,
            size: 16
        }],
        i.CURRENT_VERSION = i.VERSION_INFO[i.VERSION_INFO.length - 1];
        function O(d) {
            return I.bytes(i.CURRENT_VERSION.size).add(I.forString(d.modelSlug))
        }
        i.measure = O;
        function h(d, f) {
            d.setString(0, f.modelSlug)
        }
        i.encode = h;
        function E(d, f) {
            return {
                modelSlug: S(d.getString(0))
            }
        }
        i.decode = E
    }
    )(u = e.ConversationController_SetModel_Params || (e.ConversationController_SetModel_Params = {}));
    let R;
    (i => {
        i.VERSION_INFO = [{
            version: 0,
            size: 8
        }],
        i.CURRENT_VERSION = i.VERSION_INFO[i.VERSION_INFO.length - 1];
        function O(d) {
            return I.bytes(i.CURRENT_VERSION.size)
        }
        i.measure = O;
        function h(d, f) {}
        i.encode = h;
        function E(d, f) {
            return {}
        }
        i.decode = E
    }
    )(R = e.ConversationController_NewConversation_Params || (e.ConversationController_NewConversation_Params = {}));
    let n;
    (i => {
        i.VERSION_INFO = [{
            version: 0,
            size: 16
        }],
        i.CURRENT_VERSION = i.VERSION_INFO[i.VERSION_INFO.length - 1];
        function O(d) {
            return I.bytes(i.CURRENT_VERSION.size).add(I.forString(d.remoteConversationId))
        }
        i.measure = O;
        function h(d, f) {
            d.setString(0, f.remoteConversationId)
        }
        i.encode = h;
        function E(d, f) {
            return {
                remoteConversationId: S(d.getString(0))
            }
        }
        i.decode = E
    }
    )(n = e.ConversationController_LoadConversation_Params || (e.ConversationController_LoadConversation_Params = {}));
    let t;
    (i => {
        i.VERSION_INFO = [{
            version: 0,
            size: 32
        }],
        i.CURRENT_VERSION = i.VERSION_INFO[i.VERSION_INFO.length - 1];
        function O(d) {
            return I.bytes(i.CURRENT_VERSION.size).add(I.forString(d.prompt)).add(I.forStringArray(d.systemHints)).add(I.forString(d.modelSlug))
        }
        i.measure = O;
        function h(d, f) {
            d.setString(0, f.prompt),
            d.setStringArray(8, f.systemHints),
            d.setString(16, f.modelSlug)
        }
        i.encode = h;
        function E(d, f) {
            return {
                prompt: S(d.getString(0)),
                systemHints: S(m(d.getStringArray(8))),
                modelSlug: S(d.getString(16))
            }
        }
        i.decode = E
    }
    )(t = e.ConversationController_RequestCompletion_Params || (e.ConversationController_RequestCompletion_Params = {}));
    let c;
    (i => {
        i.VERSION_INFO = [{
            version: 0,
            size: 24
        }],
        i.CURRENT_VERSION = i.VERSION_INFO[i.VERSION_INFO.length - 1];
        function O(d) {
            return I.bytes(i.CURRENT_VERSION.size).add(I.forString(d.userMessage ?? null)).add(I.forString(d.targetedReply ?? null))
        }
        i.measure = O;
        function h(d, f) {
            d.setString(0, f.userMessage ?? null),
            d.setString(8, f.targetedReply ?? null)
        }
        i.encode = h;
        function E(d, f) {
            const l = d.getString(0)
              , P = d.getString(8);
            return {
                ...l !== null ? {
                    userMessage: l
                } : {},
                ...P !== null ? {
                    targetedReply: P
                } : {}
            }
        }
        i.decode = E
    }
    )(c = e.ConversationController_PopulatePrompt_Params || (e.ConversationController_PopulatePrompt_Params = {}));
    let r;
    (i => {
        i.VERSION_INFO = [{
            version: 0,
            size: 32
        }],
        i.CURRENT_VERSION = i.VERSION_INFO[i.VERSION_INFO.length - 1];
        function O(d) {
            return I.bytes(i.CURRENT_VERSION.size).add(I.forString(d.url)).add(I.forString(d.title)).add(I.forString(d.base64favicon ?? null))
        }
        i.measure = O;
        function h(d, f) {
            d.setString(0, f.url),
            d.setString(8, f.title),
            d.setString(16, f.base64favicon ?? null)
        }
        i.encode = h;
        function E(d, f) {
            const l = d.getString(16);
            return {
                url: S(d.getString(0)),
                title: S(d.getString(8)),
                ...l !== null ? {
                    base64favicon: l
                } : {}
            }
        }
        i.decode = E
    }
    )(r = e.ConversationController_UpdateContext_Params || (e.ConversationController_UpdateContext_Params = {}));
    let o;
    (i => {
        i.VERSION_INFO = [{
            version: 0,
            size: 16
        }],
        i.CURRENT_VERSION = i.VERSION_INFO[i.VERSION_INFO.length - 1];
        function O(d) {
            return I.bytes(i.CURRENT_VERSION.size).add(I.forObject(x, d.details))
        }
        i.measure = O;
        function h(d, f) {
            d.setObjectIndirect(x, 0, f.details)
        }
        i.encode = h;
        function E(d, f) {
            return {
                details: S(d.getObjectIndirect(x, 0))
            }
        }
        i.decode = E
    }
    )(o = e.ConversationController_PrepareConversation_Params || (e.ConversationController_PrepareConversation_Params = {}));
    let N;
    (i => {
        i.VERSION_INFO = [{
            version: 0,
            size: 16
        }],
        i.CURRENT_VERSION = i.VERSION_INFO[i.VERSION_INFO.length - 1];
        function O(d) {
            return I.bytes(i.CURRENT_VERSION.size).add(I.forObject(j, d.options))
        }
        i.measure = O;
        function h(d, f) {
            d.setObjectIndirect(j, 0, f.options)
        }
        i.encode = h;
        function E(d, f) {
            return {
                options: S(d.getObjectIndirect(j, 0))
            }
        }
        i.decode = E
    }
    )(N = e.ConversationController_SetSuperWidgetOptions_Params || (e.ConversationController_SetSuperWidgetOptions_Params = {}));
    let a;
    (i => {
        i.VERSION_INFO = [{
            version: 0,
            size: 16
        }],
        i.CURRENT_VERSION = i.VERSION_INFO[i.VERSION_INFO.length - 1];
        function O(d) {
            return I.bytes(i.CURRENT_VERSION.size).add(I.forObjectArray(D, d.attachments))
        }
        i.measure = O;
        function h(d, f) {
            d.setObjectArray(D, 0, f.attachments)
        }
        i.encode = h;
        function E(d, f) {
            return {
                attachments: S(m(d.getObjectArray(D, 0)))
            }
        }
        i.decode = E
    }
    )(a = e.ConversationController_SetAttachments_Params || (e.ConversationController_SetAttachments_Params = {}));
    let g;
    (i => {
        i.VERSION_INFO = [{
            version: 0,
            size: 16
        }],
        i.CURRENT_VERSION = i.VERSION_INFO[i.VERSION_INFO.length - 1];
        function O(d) {
            return I.bytes(i.CURRENT_VERSION.size).add(I.forString(d.to))
        }
        i.measure = O;
        function h(d, f) {
            d.setString(0, f.to)
        }
        i.encode = h;
        function E(d, f) {
            return {
                to: S(d.getString(0))
            }
        }
        i.decode = E
    }
    )(g = e.ConversationController_Navigate_Params || (e.ConversationController_Navigate_Params = {}));
    let y;
    (i => {
        i.VERSION_INFO = [{
            version: 0,
            size: 16
        }],
        i.CURRENT_VERSION = i.VERSION_INFO[i.VERSION_INFO.length - 1];
        function O(d) {
            return I.bytes(i.CURRENT_VERSION.size).add(I.forObject(F, d.whisperContent))
        }
        i.measure = O;
        function h(d, f) {
            d.setObjectIndirect(F, 0, f.whisperContent)
        }
        i.encode = h;
        function E(d, f) {
            return {
                whisperContent: S(d.getObjectIndirect(F, 0))
            }
        }
        i.decode = E
    }
    )(y = e.ConversationController_SetWhisperContent_Params || (e.ConversationController_SetWhisperContent_Params = {}));
    let _;
    (i => {
        i.VERSION_INFO = [{
            version: 0,
            size: 16
        }],
        i.CURRENT_VERSION = i.VERSION_INFO[i.VERSION_INFO.length - 1];
        function O(d) {
            return I.bytes(i.CURRENT_VERSION.size).add(I.forObjectArray(M, d.tabs))
        }
        i.measure = O;
        function h(d, f) {
            d.setObjectArray(M, 0, f.tabs)
        }
        i.encode = h;
        function E(d, f) {
            return {
                tabs: S(m(d.getObjectArray(M, 0)))
            }
        }
        i.decode = E
    }
    )(_ = e.ConversationController_SetTabContext_Params || (e.ConversationController_SetTabContext_Params = {}));
    class H {
        constructor(O) {
            this._endpoint = new z(O.endpointState,!0),
            this._version = 0
        }
        static create() {
            const [O,h] = w.createChannel(e);
            return [new H(O), h]
        }
        static createToBrowser() {
            const [O,h] = this.create();
            return Mojo.bindInterface(e.interfaceName, h.pipe.rawHandle),
            O
        }
        setWindowStyle(O) {
            const h = {
                windowStyle: O
            };
            this._endpoint.send(V.encode(0, p.None, s, h))
        }
        setModel(O) {
            const h = {
                modelSlug: O
            };
            this._endpoint.send(V.encode(1, p.None, u, h))
        }
        newConversation() {
            const O = {};
            this._endpoint.send(V.encode(2, p.None, R, O))
        }
        loadConversation(O) {
            const h = {
                remoteConversationId: O
            };
            this._endpoint.send(V.encode(3, p.None, n, h))
        }
        requestCompletion(O, h, E) {
            const d = {
                prompt: O,
                systemHints: h,
                modelSlug: E
            };
            this._endpoint.send(V.encode(4, p.None, t, d))
        }
        populatePrompt(O, h) {
            const E = {
                userMessage: O,
                targetedReply: h
            };
            this._endpoint.send(V.encode(5, p.None, c, E))
        }
        updateContext(O, h, E) {
            const d = {
                url: O,
                title: h,
                base64favicon: E
            };
            this._endpoint.send(V.encode(6, p.None, r, d))
        }
        prepareConversation(O) {
            const h = {
                details: O
            };
            this._endpoint.send(V.encode(7, p.None, o, h))
        }
        setSuperWidgetOptions(O) {
            const h = {
                options: O
            };
            this._endpoint.send(V.encode(8, p.None, N, h))
        }
        setAttachments(O) {
            const h = {
                attachments: O
            };
            this._endpoint.send(V.encode(9, p.None, a, h))
        }
        navigate(O) {
            const h = {
                to: O
            };
            this._endpoint.send(V.encode(10, p.None, g, h))
        }
        setWhisperContent(O) {
            const h = {
                whisperContent: O
            };
            this._endpoint.send(V.encode(11, p.None, y, h))
        }
        setTabContext(O) {
            const h = {
                tabs: O
            };
            this._endpoint.send(V.encode(12, p.None, _, h))
        }
        _endpoint;
        _version
    }
    e.Proxy = H;
    class ne extends U {
        constructor() {
            super(e)
        }
        onDisconnect;
        bind(O, h) {
            this.addReceiver(h, async (E, d) => {
                switch (E.header.ordinal) {
                case 0:
                    {
                        const f = E.decode(s);
                        O.setWindowStyle(f.windowStyle);
                        break
                    }
                case 1:
                    {
                        const f = E.decode(u);
                        O.setModel(f.modelSlug);
                        break
                    }
                case 2:
                    {
                        E.decode(R),
                        O.newConversation();
                        break
                    }
                case 3:
                    {
                        const f = E.decode(n);
                        O.loadConversation(f.remoteConversationId);
                        break
                    }
                case 4:
                    {
                        const f = E.decode(t);
                        O.requestCompletion(f.prompt, f.systemHints, f.modelSlug);
                        break
                    }
                case 5:
                    {
                        const f = E.decode(c);
                        O.populatePrompt(f.userMessage, f.targetedReply);
                        break
                    }
                case 6:
                    {
                        const f = E.decode(r);
                        O.updateContext(f.url, f.title, f.base64favicon);
                        break
                    }
                case 7:
                    {
                        const f = E.decode(o);
                        O.prepareConversation(f.details);
                        break
                    }
                case 8:
                    {
                        const f = E.decode(N);
                        O.setSuperWidgetOptions(f.options);
                        break
                    }
                case 9:
                    {
                        const f = E.decode(a);
                        O.setAttachments(f.attachments);
                        break
                    }
                case 10:
                    {
                        const f = E.decode(g);
                        O.navigate(f.to);
                        break
                    }
                case 11:
                    {
                        const f = E.decode(y);
                        O.setWhisperContent(f.whisperContent);
                        break
                    }
                case 12:
                    {
                        const f = E.decode(_);
                        O.setTabContext(f.tabs);
                        break
                    }
                default:
                    E.header.expectsResponse && d.sendUnimplementedResponse(E.header.requestID, E.header.ordinal)
                }
                return Promise.resolve()
            }
            , () => {
                this.onDisconnect && this.onDisconnect(O)
            }
            )
        }
        createRemote(O) {
            const [h,E] = w.createChannel(e);
            return this.bind(O, E),
            h
        }
    }
    e.Dispatcher = ne
}
)(K || (K = {}));
class ee {
    static interfaceName = "web.bridge.ConversationSidebarController";
    static interfaceVersion = 0
}
(e => {
    let s;
    (n => {
        n.VERSION_INFO = [{
            version: 0,
            size: 8
        }],
        n.CURRENT_VERSION = n.VERSION_INFO[n.VERSION_INFO.length - 1];
        function t(o) {
            return I.bytes(n.CURRENT_VERSION.size)
        }
        n.measure = t;
        function c(o, N) {}
        n.encode = c;
        function r(o, N) {
            return {}
        }
        n.decode = r
    }
    )(s = e.ConversationSidebarController_OpenSidebar_Params || (e.ConversationSidebarController_OpenSidebar_Params = {}));
    class u {
        constructor(t) {
            this._endpoint = new z(t.endpointState,!0),
            this._version = 0
        }
        static create() {
            const [t,c] = w.createChannel(e);
            return [new u(t), c]
        }
        static createToBrowser() {
            const [t,c] = this.create();
            return Mojo.bindInterface(e.interfaceName, c.pipe.rawHandle),
            t
        }
        openSidebar() {
            const t = {};
            this._endpoint.send(V.encode(0, p.None, s, t))
        }
        _endpoint;
        _version
    }
    e.Proxy = u;
    class R extends U {
        constructor() {
            super(e)
        }
        onDisconnect;
        bind(t, c) {
            this.addReceiver(c, async (r, o) => {
                switch (r.header.ordinal) {
                case 0:
                    {
                        r.decode(s),
                        t.openSidebar();
                        break
                    }
                default:
                    r.header.expectsResponse && o.sendUnimplementedResponse(r.header.requestID, r.header.ordinal)
                }
                return Promise.resolve()
            }
            , () => {
                this.onDisconnect && this.onDisconnect(t)
            }
            )
        }
        createRemote(t) {
            const [c,r] = w.createChannel(e);
            return this.bind(t, r),
            c
        }
    }
    e.Dispatcher = R
}
)(ee || (ee = {}));
class te {
    static interfaceName = "web.bridge.GenericInterface";
    static interfaceVersion = 0
}
(e => {
    let s;
    (t => {
        t.VERSION_INFO = [{
            version: 0,
            size: 16
        }],
        t.CURRENT_VERSION = t.VERSION_INFO[t.VERSION_INFO.length - 1];
        function c(N) {
            return I.bytes(t.CURRENT_VERSION.size).add(I.forString(N.request))
        }
        t.measure = c;
        function r(N, a) {
            N.setString(0, a.request)
        }
        t.encode = r;
        function o(N, a) {
            return {
                request: S(N.getString(0))
            }
        }
        t.decode = o
    }
    )(s = e.GenericInterface_AcceptMessage_Params || (e.GenericInterface_AcceptMessage_Params = {}));
    let u;
    (t => {
        t.VERSION_INFO = [{
            version: 0,
            size: 16
        }],
        t.CURRENT_VERSION = t.VERSION_INFO[t.VERSION_INFO.length - 1];
        function c(N) {
            return I.bytes(t.CURRENT_VERSION.size).add(I.forString(N.response ?? null))
        }
        t.measure = c;
        function r(N, a) {
            N.setString(0, a.response ?? null)
        }
        t.encode = r;
        function o(N, a) {
            const g = N.getString(0);
            return {
                ...g !== null ? {
                    response: g
                } : {}
            }
        }
        t.decode = o
    }
    )(u = e.GenericInterface_AcceptMessage_ResponseParams || (e.GenericInterface_AcceptMessage_ResponseParams = {}));
    class R {
        constructor(c) {
            this._endpoint = new z(c.endpointState,!0),
            this._version = 0
        }
        static create() {
            const [c,r] = w.createChannel(e);
            return [new R(c), r]
        }
        static createToBrowser() {
            const [c,r] = this.create();
            return Mojo.bindInterface(e.interfaceName, r.pipe.rawHandle),
            c
        }
        async acceptMessage(c) {
            const r = {
                request: c
            };
            return (await this._endpoint.sendAndAwaitResponse(V.encode(0, p.None, s, r))).decode(u).response
        }
        _endpoint;
        _version
    }
    e.Proxy = R;
    class n extends U {
        constructor() {
            super(e)
        }
        onDisconnect;
        bind(c, r) {
            this.addReceiver(r, async (o, N) => {
                switch (o.header.ordinal) {
                case 0:
                    {
                        const a = o.decode(s)
                          , g = c.acceptMessage(a.request)
                          , y = N.createResponder(u, 0, o.header.requestID)
                          , _ = await g;
                        y({
                            response: _
                        });
                        break
                    }
                default:
                    o.header.expectsResponse && N.sendUnimplementedResponse(o.header.requestID, o.header.ordinal)
                }
                return Promise.resolve()
            }
            , () => {
                this.onDisconnect && this.onDisconnect(c)
            }
            )
        }
        createRemote(c) {
            const [r,o] = w.createChannel(e);
            return this.bind(c, o),
            r
        }
    }
    e.Dispatcher = n
}
)(te || (te = {}));
class G {
    static interfaceName = "web.bridge.LinkHandler";
    static interfaceVersion = 0
}
(e => {
    let s;
    (n => {
        n.VERSION_INFO = [{
            version: 0,
            size: 24
        }],
        n.CURRENT_VERSION = n.VERSION_INFO[n.VERSION_INFO.length - 1];
        function t(o) {
            return I.bytes(n.CURRENT_VERSION.size).add(I.forString(o.url)).add(I.forString(o.target))
        }
        n.measure = t;
        function c(o, N) {
            o.setString(0, N.url),
            o.setString(8, N.target)
        }
        n.encode = c;
        function r(o, N) {
            return {
                url: S(o.getString(0)),
                target: S(o.getString(8))
            }
        }
        n.decode = r
    }
    )(s = e.LinkHandler_HandleLink_Params || (e.LinkHandler_HandleLink_Params = {}));
    class u {
        constructor(t) {
            this._endpoint = new z(t.endpointState,!0),
            this._version = 0
        }
        static create() {
            const [t,c] = w.createChannel(e);
            return [new u(t), c]
        }
        static createToBrowser() {
            const [t,c] = this.create();
            return Mojo.bindInterface(e.interfaceName, c.pipe.rawHandle),
            t
        }
        handleLink(t, c) {
            const r = {
                url: t,
                target: c
            };
            this._endpoint.send(V.encode(0, p.None, s, r))
        }
        _endpoint;
        _version
    }
    e.Proxy = u;
    class R extends U {
        constructor() {
            super(e)
        }
        onDisconnect;
        bind(t, c) {
            this.addReceiver(c, async (r, o) => {
                switch (r.header.ordinal) {
                case 0:
                    {
                        const N = r.decode(s);
                        t.handleLink(N.url, N.target);
                        break
                    }
                default:
                    r.header.expectsResponse && o.sendUnimplementedResponse(r.header.requestID, r.header.ordinal)
                }
                return Promise.resolve()
            }
            , () => {
                this.onDisconnect && this.onDisconnect(t)
            }
            )
        }
        createRemote(t) {
            const [c,r] = w.createChannel(e);
            return this.bind(t, r),
            c
        }
    }
    e.Dispatcher = R
}
)(G || (G = {}));
class L {
    static interfaceName = "web.bridge.DesktopSidebarController";
    static interfaceVersion = 0
}
(e => {
    let s;
    (c => {
        c.VERSION_INFO = [{
            version: 0,
            size: 8
        }],
        c.CURRENT_VERSION = c.VERSION_INFO[c.VERSION_INFO.length - 1];
        function r(a) {
            return I.bytes(c.CURRENT_VERSION.size)
        }
        c.measure = r;
        function o(a, g) {}
        c.encode = o;
        function N(a, g) {
            return {}
        }
        c.decode = N
    }
    )(s = e.DesktopSidebarController_CloseSidebar_Params || (e.DesktopSidebarController_CloseSidebar_Params = {}));
    let u;
    (c => {
        c.VERSION_INFO = [{
            version: 0,
            size: 8
        }],
        c.CURRENT_VERSION = c.VERSION_INFO[c.VERSION_INFO.length - 1];
        function r(a) {
            return I.bytes(c.CURRENT_VERSION.size)
        }
        c.measure = r;
        function o(a, g) {}
        c.encode = o;
        function N(a, g) {
            return {}
        }
        c.decode = N
    }
    )(u = e.DesktopSidebarController_CanHideHeader_Params || (e.DesktopSidebarController_CanHideHeader_Params = {}));
    let R;
    (c => {
        c.VERSION_INFO = [{
            version: 0,
            size: 16
        }],
        c.CURRENT_VERSION = c.VERSION_INFO[c.VERSION_INFO.length - 1];
        function r(a) {
            return I.bytes(c.CURRENT_VERSION.size)
        }
        c.measure = r;
        function o(a, g) {
            let y = 0;
            g.canHideHeader && (y |= 1),
            a.setU8(0, y)
        }
        c.encode = o;
        function N(a, g) {
            return {
                canHideHeader: (a.getU8(0) & 1) != 0
            }
        }
        c.decode = N
    }
    )(R = e.DesktopSidebarController_CanHideHeader_ResponseParams || (e.DesktopSidebarController_CanHideHeader_ResponseParams = {}));
    class n {
        constructor(r) {
            this._endpoint = new z(r.endpointState,!0),
            this._version = 0
        }
        static create() {
            const [r,o] = w.createChannel(e);
            return [new n(r), o]
        }
        static createToBrowser() {
            const [r,o] = this.create();
            return Mojo.bindInterface(e.interfaceName, o.pipe.rawHandle),
            r
        }
        closeSidebar() {
            const r = {};
            this._endpoint.send(V.encode(0, p.None, s, r))
        }
        async canHideHeader() {
            const r = {};
            return (await this._endpoint.sendAndAwaitResponse(V.encode(1, p.None, u, r))).decode(R).canHideHeader
        }
        _endpoint;
        _version
    }
    e.Proxy = n;
    class t extends U {
        constructor() {
            super(e)
        }
        onDisconnect;
        bind(r, o) {
            this.addReceiver(o, async (N, a) => {
                switch (N.header.ordinal) {
                case 0:
                    {
                        N.decode(s),
                        r.closeSidebar();
                        break
                    }
                case 1:
                    {
                        N.decode(u);
                        const g = r.canHideHeader()
                          , y = a.createResponder(R, 1, N.header.requestID)
                          , _ = await g;
                        y({
                            canHideHeader: _
                        });
                        break
                    }
                default:
                    N.header.expectsResponse && a.sendUnimplementedResponse(N.header.requestID, N.header.ordinal)
                }
                return Promise.resolve()
            }
            , () => {
                this.onDisconnect && this.onDisconnect(r)
            }
            )
        }
        createRemote(r) {
            const [o,N] = w.createChannel(e);
            return this.bind(r, N),
            o
        }
    }
    e.Dispatcher = t
}
)(L || (L = {}));
var k;
(e => {
    e.VERSION_INFO = [{
        version: 0,
        size: 8
    }],
    e.CURRENT_VERSION = e.VERSION_INFO[e.VERSION_INFO.length - 1];
    function s(n) {
        return I.bytes(e.CURRENT_VERSION.size)
    }
    e.measure = s;
    function u(n, t) {}
    e.encode = u;
    function R(n, t) {
        return {}
    }
    e.decode = R
}
)(k || (k = {}));
var $;
(e => {
    e.VERSION_INFO = [{
        version: 0,
        size: 48
    }],
    e.CURRENT_VERSION = e.VERSION_INFO[e.VERSION_INFO.length - 1];
    function s(n) {
        return I.bytes(e.CURRENT_VERSION.size).add(I.forString(n.id)).add(I.forString(n.fileid)).add(I.forString(n.name)).add(I.forString(n.mimetype))
    }
    e.measure = s;
    function u(n, t) {
        n.setString(0, t.id),
        n.setString(8, t.fileid),
        n.setString(16, t.name),
        n.setU32(24, t.size),
        n.setString(32, t.mimetype)
    }
    e.encode = u;
    function R(n, t) {
        return {
            id: S(n.getString(0)),
            fileid: S(n.getString(8)),
            name: S(n.getString(16)),
            size: S(n.getU32(24)),
            mimetype: S(n.getString(32))
        }
    }
    e.decode = R
}
)($ || ($ = {}));
var B;
(e => {
    e.VERSION_INFO = [{
        version: 0,
        size: 32
    }],
    e.CURRENT_VERSION = e.VERSION_INFO[e.VERSION_INFO.length - 1];
    function s(n) {
        return I.bytes(e.CURRENT_VERSION.size).add(I.forString(n.assetPointer))
    }
    e.measure = s;
    function u(n, t) {
        n.setString(0, t.assetPointer),
        n.setU32(8, t.sizeBytes),
        n.setU32(12, t.width),
        n.setU32(16, t.height)
    }
    e.encode = u;
    function R(n, t) {
        return {
            assetPointer: S(n.getString(0)),
            sizeBytes: S(n.getU32(8)),
            width: S(n.getU32(12)),
            height: S(n.getU32(16))
        }
    }
    e.decode = R
}
)(B || (B = {}));
var F;
(e => {
    e.VERSION_INFO = [{
        version: 0,
        size: 32
    }],
    e.CURRENT_VERSION = e.VERSION_INFO[e.VERSION_INFO.length - 1];
    function s(n) {
        return I.bytes(e.CURRENT_VERSION.size).add(I.forString(n.content ?? null)).add(I.forObjectArray($, n.files ?? null)).add(I.forObjectArray(B, n.imageAssetPointers ?? null))
    }
    e.measure = s;
    function u(n, t) {
        n.setString(0, t.content ?? null),
        n.setObjectArray($, 8, t.files ?? null),
        n.setObjectArray(B, 16, t.imageAssetPointers ?? null)
    }
    e.encode = u;
    function R(n, t) {
        const c = n.getString(0)
          , r = m(n.getObjectArray($, 8))
          , o = m(n.getObjectArray(B, 16));
        return {
            ...c !== null ? {
                content: c
            } : {},
            ...r !== null ? {
                files: r
            } : {},
            ...o !== null ? {
                imageAssetPointers: o
            } : {}
        }
    }
    e.decode = R
}
)(F || (F = {}));
class W {
    static interfaceName = "web.bridge.WhisperContentProvider";
    static interfaceVersion = 0
}
(e => {
    let s;
    (t => {
        t.VERSION_INFO = [{
            version: 0,
            size: 16
        }],
        t.CURRENT_VERSION = t.VERSION_INFO[t.VERSION_INFO.length - 1];
        function c(N) {
            return I.bytes(t.CURRENT_VERSION.size).add(I.forObject(k, N.options ?? null))
        }
        t.measure = c;
        function r(N, a) {
            N.setObjectIndirect(k, 0, a.options ?? null)
        }
        t.encode = r;
        function o(N, a) {
            const g = N.getObjectIndirect(k, 0);
            return {
                ...g !== null ? {
                    options: g
                } : {}
            }
        }
        t.decode = o
    }
    )(s = e.WhisperContentProvider_GetWhisperContent_Params || (e.WhisperContentProvider_GetWhisperContent_Params = {}));
    let u;
    (t => {
        t.VERSION_INFO = [{
            version: 0,
            size: 16
        }],
        t.CURRENT_VERSION = t.VERSION_INFO[t.VERSION_INFO.length - 1];
        function c(N) {
            return I.bytes(t.CURRENT_VERSION.size).add(I.forObject(F, N.content ?? null))
        }
        t.measure = c;
        function r(N, a) {
            N.setObjectIndirect(F, 0, a.content ?? null)
        }
        t.encode = r;
        function o(N, a) {
            const g = N.getObjectIndirect(F, 0);
            return {
                ...g !== null ? {
                    content: g
                } : {}
            }
        }
        t.decode = o
    }
    )(u = e.WhisperContentProvider_GetWhisperContent_ResponseParams || (e.WhisperContentProvider_GetWhisperContent_ResponseParams = {}));
    class R {
        constructor(c) {
            this._endpoint = new z(c.endpointState,!0),
            this._version = 0
        }
        static create() {
            const [c,r] = w.createChannel(e);
            return [new R(c), r]
        }
        static createToBrowser() {
            const [c,r] = this.create();
            return Mojo.bindInterface(e.interfaceName, r.pipe.rawHandle),
            c
        }
        async getWhisperContent(c) {
            const r = {
                options: c
            };
            return (await this._endpoint.sendAndAwaitResponse(V.encode(0, p.None, s, r))).decode(u).content
        }
        _endpoint;
        _version
    }
    e.Proxy = R;
    class n extends U {
        constructor() {
            super(e)
        }
        onDisconnect;
        bind(c, r) {
            this.addReceiver(r, async (o, N) => {
                switch (o.header.ordinal) {
                case 0:
                    {
                        const a = o.decode(s)
                          , g = c.getWhisperContent(a.options)
                          , y = N.createResponder(u, 0, o.header.requestID)
                          , _ = await g;
                        y({
                            content: _
                        });
                        break
                    }
                default:
                    o.header.expectsResponse && N.sendUnimplementedResponse(o.header.requestID, o.header.ordinal)
                }
                return Promise.resolve()
            }
            , () => {
                this.onDisconnect && this.onDisconnect(c)
            }
            )
        }
        createRemote(c) {
            const [r,o] = w.createChannel(e);
            return this.bind(c, o),
            r
        }
    }
    e.Dispatcher = n
}
)(W || (W = {}));
class de {
    dispatcher;
    constructor(s) {
        this.dispatcher = new J.Dispatcher,
        this.dispatcher.bind(this, s)
    }
    refreshSessionContext(s, u) {
        b.authSessionContext = {
            authToken: s,
            behavior: u
        },
        b.wantsAuthSessionContext$.set(!0)
    }
}
function oe(e) {
    return e === "none" || e === "sent" || e === "success" || e === "failure"
}
class ue {
    prepareState;
    lastPrepareTimestamp;
    conduitToken;
    constructor(s, u, R) {
        this.prepareState = oe(s) ? s : "none",
        this.lastPrepareTimestamp = u - performance.timeOrigin,
        this.conduitToken = R
    }
}
class Ne {
    dispatcher;
    constructor(s) {
        this.dispatcher = new K.Dispatcher,
        this.dispatcher.bind(this, s)
    }
    setWindowStyle(s) {
        b.windowStyle$.set(s)
    }
    setModel(s) {
        b.wantsModelSlug$.set(s)
    }
    newConversation() {
        b.wantsNewConversation$.set(!0),
        b.selectedConversationId$.set(void 0)
    }
    loadConversation(s) {
        b.wantsNewConversation$.set(!1),
        b.selectedConversationId$.set(s)
    }
    requestCompletion(s, u, R) {
        b.requestCompletion = {
            prompt: s,
            systemHints: u,
            modelSlug: R
        },
        b.wantsRequestCompletion$.set(!0)
    }
    populatePrompt(s, u) {
        b.populatePrompt = {
            userMessage: s ?? null,
            targetedReply: u ?? null
        },
        b.wantsPopulatePrompt$.set(!0)
    }
    updateContext(s, u, R) {
        b.context$.set({
            url: s,
            title: u,
            base64favicon: R
        })
    }
    prepareConversation(s) {
        b.prepareConversationDetails = new ue(s.prepareState,s.lastPrepareTimestampMsSince1970,s.conduitToken ?? void 0)
    }
    setSuperWidgetOptions(s) {
        se.set(s.selectedTab)
    }
    setAttachments(s) {
        b.attachments = s.map(u => {
            const {id: R, name: n, size: t, mimeType: c, width: r, height: o, fileTokenSize: N} = u;
            return {
                ...R && {
                    id: R
                },
                ...n && {
                    name: n
                },
                ...t && {
                    size: typeof t == "bigint" ? Number(t) : t
                },
                ...c && {
                    mime_type: c
                },
                ...r && {
                    width: r
                },
                ...o && {
                    height: o
                },
                ...N && {
                    file_token_size: N
                }
            }
        }
        )
    }
    setWhisperContent(s) {
        b.whisperContent = s
    }
    setTabContext(s) {
        b.tabContext = s
    }
    navigate(s) {
        b.wantsNavigate$.set(s)
    }
}
const Re = 6e4;
class Ie {
    host;
    logger;
    lastMissingAuthTime = 0;
    constructor(s, u) {
        this.host = s,
        this.logger = u
    }
    async getAccountID() {
        return await this.host.getAccountID()
    }
    onMissingSessionAuth() {
        const s = Date.now();
        if (s - this.lastMissingAuthTime > Re) {
            this.lastMissingAuthTime = s;
            const [u,R] = X.Proxy.create();
            this.bindReceiver(R),
            this.logger.notice("onMissingSessionAuth.invoked"),
            u.handleMissingSessionAuth()
        }
    }
    recordAvailableSessionAuth() {
        const [s,u] = X.Proxy.create();
        this.bindReceiver(u),
        this.logger.notice("recordAvailableSessionAuth.invoked"),
        s.recordAvailableSessionAuth()
    }
    closeSideChat() {
        const [s,u] = L.Proxy.create();
        this.bindReceiver(u),
        s.closeSidebar()
    }
    supportsWebSideChatHeader() {
        const [s,u] = L.Proxy.create();
        return this.bindReceiver(u),
        s.canHideHeader()
    }
    async getWhisperContent() {
        const [s,u] = W.Proxy.create();
        return this.bindReceiver(u),
        await s.getWhisperContent({})
    }
    receivedFirstToken() {
        this.host.receivedFirstToken("")
    }
    bindReceiver(s) {
        this.host.bindReceiver(s.interfaceType.interfaceName, s.pipe)
    }
}
class Oe {
    proxy;
    constructor(s) {
        this.proxy = s
    }
    handleLink(s, u) {
        this.proxy.handleLink(s, u)
    }
}
class fe {
    dispatcher;
    host;
    logger;
    conversationControllers = [];
    authStateController = [];
    constructor() {
        this.logger = ce.createLogger("web-bridge-host", "info", "http"),
        this.dispatcher = new ie.Dispatcher;
        const s = re.Proxy.createToBrowser();
        this.host = new Ie(s,this.logger),
        s.setFrontend(this.dispatcher.createRemote(this))
    }
    get linkHandler() {
        const [s,u] = G.Proxy.create();
        return this.host.bindReceiver(u),
        new Oe(s)
    }
    logConsoleMessage(s) {
        this.logger.info(s)
    }
    sendMessage(s, u) {
        return Promise.resolve(null)
    }
    bindReceiver(s, u) {
        s === K.interfaceName ? this.conversationControllers.push(new Ne(new C(K,u))) : s === J.interfaceName && this.authStateController.push(new de(new C(J,u)))
    }
}
let T;
async function ae() {
    T = new fe;
    const e = await T.host.getAccountID();
    T.logger.info(`Account ID: ${e}`)
}
function ge() {
    return T?.host
}
function Ve() {
    return T?.linkHandler
}
async function pe() {
    return T ? (T.logger.debug("Getting whisper content"),
    await T.host.getWhisperContent()) : null
}
function be() {
    if (!T)
        return null;
    T.host.closeSideChat()
}
function we() {
    return T ? T.host.supportsWebSideChatHeader() : null
}
export {be as closeSideChat, ge as getHost, Ve as getLinkHandler, pe as getSidebarWhisperContent, ae as initHostConnection, we as supportsWebSideChatHeader};
//# sourceMappingURL=z7ibstnufyeh5ynh.js.map
