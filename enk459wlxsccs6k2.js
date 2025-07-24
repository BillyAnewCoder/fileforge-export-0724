import {r as p, h as Q, f as ae, j as c, m as le, M as ce, A as de} from "./juy90og0wtbp77qa.js";
import {dg as ue, B as he, c5 as xe, D as N, ak as pe, bW as ne, f as me, aW as ye, C as fe, gb as ve, by as re, b2 as ge, hH as be, e as Ee, aS as Ce} from "./dc2xxjkicf2pz0mj.js";
import {s as we, r as _e, u as ke, c as Se} from "./kd37t55r0pqrdrzh.js";
import {C as Me} from "./jbze7lwlszm657iq.js";
import {u as De} from "./f5x7owcyj5iwmbsb.js";
import "./ckp56qklot786ulr.js";
import "./dmfmxszxfbs8gsbx.js";
import "./ck00y48d3yzt8bq3.js";
import "./o6wb3ptvu0bk81yq.js";
import "./llrie03z1kvfi4vu.js";
import "./jsgl3b1bt1ozctr5.js";
import "./pc2givv05uuq8g6l.js";
import "./dq2hdjj12gdqq0p1.js";
import "./ezqsz68yx4uzdtqb.js";
import "./mre9dehcylnm0d4q.js";
function Te(s) {
    const {session: e} = ue();
    p.useEffect( () => {
        we(s, e?.accessToken ?? null)
    }
    , [s, e?.accessToken])
}
const Ke = ({handleEndControl: s, isConnecting: e}) => {
    const t = Q()
      , i = W.controlModeTitle
      , o = e ? W.connectingDescription : W.controlModeDescription;
    return c.jsxs("div", {
        className: "border-token-border-default relative z-10 flex w-full items-center justify-between gap-3 border-t px-7 py-6",
        style: {
            boxShadow: "0px -2px 8px 0px rgba(0, 0, 0, 0.05)"
        },
        children: [c.jsxs("div", {
            className: "flex flex-col",
            children: [c.jsx("span", {
                className: "text-token-text-primary font-medium",
                children: t.formatMessage(i)
            }), c.jsx("span", {
                className: "text-token-text-secondary text-sm",
                children: t.formatMessage(o)
            })]
        }), c.jsx(he, {
            onClick: s,
            color: "primary",
            children: t.formatMessage(W.endControlButton)
        })]
    })
}
  , W = ae({
    connectingDescription: {
        id: "takeoverControlPanel.connectingDescription",
        defaultMessage: "Connecting…"
    },
    controlModeTitle: {
        id: "takeoverControlPanel.controlModeTitle",
        defaultMessage: "You’re controlling the browser"
    },
    controlModeDescription: {
        id: "takeoverControlPanel.controlModeDescription",
        defaultMessage: "ChatGPT won’t see or store anything you do while you’re here."
    },
    endControlButton: {
        id: "vnc.endControlButton",
        defaultMessage: "Finish controlling"
    }
});
var g = g || {};
g.Keyboard = function(e) {
    var t = this
      , i = g.Keyboard._nextID++
      , o = "_GUAC_KEYBOARD_HANDLED_BY_" + i;
    this.onkeydown = null,
    this.onkeyup = null;
    var a = {
        keyupUnreliable: !1,
        altIsTypableOnly: !1,
        capsLockKeyupUnreliable: !1
    };
    navigator && navigator.platform && (navigator.platform.match(/ipad|iphone|ipod/i) ? a.keyupUnreliable = !0 : navigator.platform.match(/^mac/i) && (a.altIsTypableOnly = !0,
    a.capsLockKeyupUnreliable = !0));
    var l = function(n) {
        var f = this;
        this.keyCode = n ? n.which || n.keyCode : 0,
        this.keyIdentifier = n && n.keyIdentifier,
        this.key = n && n.key,
        this.location = n ? Z(n) : 0,
        this.modifiers = n ? g.Keyboard.ModifierState.fromKeyboardEvent(n) : new g.Keyboard.ModifierState,
        this.timestamp = new Date().getTime(),
        this.defaultPrevented = !1,
        this.keysym = null,
        this.reliable = !1,
        this.getAge = function() {
            return new Date().getTime() - f.timestamp
        }
    }
      , u = function(n) {
        l.call(this, n),
        this.keysym = k(this.key, this.location) || B(this.keyCode, this.location),
        this.keyupReliable = !a.keyupUnreliable,
        this.keysym && !A(this.keysym) && (this.reliable = !0),
        !this.keysym && z(this.keyCode, this.keyIdentifier) && (this.keysym = k(this.keyIdentifier, this.location, this.modifiers.shift)),
        this.modifiers.meta && this.keysym !== 65511 && this.keysym !== 65512 ? this.keyupReliable = !1 : this.keysym === 65509 && a.capsLockKeyupUnreliable && (this.keyupReliable = !1);
        var f = !this.modifiers.ctrl && !a.altIsTypableOnly
          , d = !this.modifiers.alt;
        (d && this.modifiers.ctrl || f && this.modifiers.alt || this.modifiers.meta || this.modifiers.hyper) && (this.reliable = !0),
        b[this.keyCode] = this.keysym
    };
    u.prototype = new l;
    var m = function(n) {
        l.call(this, n),
        this.keysym = O(this.keyCode),
        this.reliable = !0
    };
    m.prototype = new l;
    var x = function(n) {
        l.call(this, n),
        this.keysym = B(this.keyCode, this.location) || k(this.key, this.location),
        t.pressed[this.keysym] || (this.keysym = b[this.keyCode] || this.keysym),
        this.reliable = !0
    };
    x.prototype = new l;
    var h = []
      , L = {
        8: [65288],
        9: [65289],
        12: [65291, 65291, 65291, 65461],
        13: [65293],
        16: [65505, 65505, 65506],
        17: [65507, 65507, 65508],
        18: [65513, 65513, 65027],
        19: [65299],
        20: [65509],
        27: [65307],
        32: [32],
        33: [65365, 65365, 65365, 65465],
        34: [65366, 65366, 65366, 65459],
        35: [65367, 65367, 65367, 65457],
        36: [65360, 65360, 65360, 65463],
        37: [65361, 65361, 65361, 65460],
        38: [65362, 65362, 65362, 65464],
        39: [65363, 65363, 65363, 65462],
        40: [65364, 65364, 65364, 65458],
        45: [65379, 65379, 65379, 65456],
        46: [65535, 65535, 65535, 65454],
        91: [65511],
        92: [65512],
        93: [65383],
        96: [65456],
        97: [65457],
        98: [65458],
        99: [65459],
        100: [65460],
        101: [65461],
        102: [65462],
        103: [65463],
        104: [65464],
        105: [65465],
        106: [65450],
        107: [65451],
        109: [65453],
        110: [65454],
        111: [65455],
        112: [65470],
        113: [65471],
        114: [65472],
        115: [65473],
        116: [65474],
        117: [65475],
        118: [65476],
        119: [65477],
        120: [65478],
        121: [65479],
        122: [65480],
        123: [65481],
        144: [65407],
        145: [65300],
        225: [65027]
    }
      , Y = {
        Again: [65382],
        AllCandidates: [65341],
        Alphanumeric: [65328],
        Alt: [65513, 65513, 65027],
        Attn: [64782],
        AltGraph: [65027],
        ArrowDown: [65364],
        ArrowLeft: [65361],
        ArrowRight: [65363],
        ArrowUp: [65362],
        Backspace: [65288],
        CapsLock: [65509],
        Cancel: [65385],
        Clear: [65291],
        Convert: [65313],
        Copy: [64789],
        Crsel: [64796],
        CrSel: [64796],
        CodeInput: [65335],
        Compose: [65312],
        Control: [65507, 65507, 65508],
        ContextMenu: [65383],
        Delete: [65535],
        Down: [65364],
        End: [65367],
        Enter: [65293],
        EraseEof: [64774],
        Escape: [65307],
        Execute: [65378],
        Exsel: [64797],
        ExSel: [64797],
        F1: [65470],
        F2: [65471],
        F3: [65472],
        F4: [65473],
        F5: [65474],
        F6: [65475],
        F7: [65476],
        F8: [65477],
        F9: [65478],
        F10: [65479],
        F11: [65480],
        F12: [65481],
        F13: [65482],
        F14: [65483],
        F15: [65484],
        F16: [65485],
        F17: [65486],
        F18: [65487],
        F19: [65488],
        F20: [65489],
        F21: [65490],
        F22: [65491],
        F23: [65492],
        F24: [65493],
        Find: [65384],
        GroupFirst: [65036],
        GroupLast: [65038],
        GroupNext: [65032],
        GroupPrevious: [65034],
        FullWidth: null,
        HalfWidth: null,
        HangulMode: [65329],
        Hankaku: [65321],
        HanjaMode: [65332],
        Help: [65386],
        Hiragana: [65317],
        HiraganaKatakana: [65319],
        Home: [65360],
        Hyper: [65517, 65517, 65518],
        Insert: [65379],
        JapaneseHiragana: [65317],
        JapaneseKatakana: [65318],
        JapaneseRomaji: [65316],
        JunjaMode: [65336],
        KanaMode: [65325],
        KanjiMode: [65313],
        Katakana: [65318],
        Left: [65361],
        Meta: [65511, 65511, 65512],
        ModeChange: [65406],
        NumLock: [65407],
        PageDown: [65366],
        PageUp: [65365],
        Pause: [65299],
        Play: [64790],
        PreviousCandidate: [65342],
        PrintScreen: [65377],
        Redo: [65382],
        Right: [65363],
        RomanCharacters: null,
        Scroll: [65300],
        Select: [65376],
        Separator: [65452],
        Shift: [65505, 65505, 65506],
        SingleCandidate: [65340],
        Super: [65515, 65515, 65516],
        Tab: [65289],
        UIKeyInputDownArrow: [65364],
        UIKeyInputEscape: [65307],
        UIKeyInputLeftArrow: [65361],
        UIKeyInputRightArrow: [65363],
        UIKeyInputUpArrow: [65362],
        Up: [65362],
        Undo: [65381],
        Win: [65511, 65511, 65512],
        Zenkaku: [65320],
        ZenkakuHankaku: [65322]
    }
      , J = {
        65027: !0,
        65505: !0,
        65506: !0,
        65507: !0,
        65508: !0,
        65509: !0,
        65511: !0,
        65512: !0,
        65513: !0,
        65514: !0,
        65515: !0,
        65516: !0
    };
    this.modifiers = new g.Keyboard.ModifierState,
    this.pressed = {};
    var w = {}
      , j = {}
      , b = {}
      , D = null
      , R = null
      , T = function(n, f) {
        return n ? n[f] || n[0] : null
    }
      , A = function(n) {
        return n >= 0 && n <= 255 || (n & 4294901760) === 16777216
    };
    function k(r, n, f) {
        if (!r)
            return null;
        var d, v = r.indexOf("U+");
        if (v >= 0) {
            var _ = r.substring(v + 2);
            d = String.fromCharCode(parseInt(_, 16))
        } else if (r.length === 1 && n !== 3)
            d = r;
        else
            return T(Y[r], n);
        f === !0 ? d = d.toUpperCase() : f === !1 && (d = d.toLowerCase());
        var C = d.charCodeAt(0);
        return O(C)
    }
    function q(r) {
        return r <= 31 || r >= 127 && r <= 159
    }
    function O(r) {
        return q(r) ? 65280 | r : r >= 0 && r <= 255 ? r : r >= 256 && r <= 1114111 ? 16777216 | r : null
    }
    function B(r, n) {
        return T(L[r], n)
    }
    var z = function(n, f) {
        if (!f)
            return !1;
        var d = f.indexOf("U+");
        if (d === -1)
            return !0;
        var v = parseInt(f.substring(d + 2), 16);
        return n !== v || n >= 65 && n <= 90 || n >= 48 && n <= 57
    };
    this.press = function(r) {
        if (r !== null) {
            if (!t.pressed[r] && (t.pressed[r] = !0,
            t.onkeydown)) {
                var n = t.onkeydown(r);
                return j[r] = n,
                window.clearTimeout(D),
                window.clearInterval(R),
                J[r] || (D = window.setTimeout(function() {
                    R = window.setInterval(function() {
                        t.onkeyup(r),
                        t.onkeydown(r)
                    }, 50)
                }, 500)),
                n
            }
            return j[r] || !1
        }
    }
    ,
    this.release = function(r) {
        t.pressed[r] && (delete t.pressed[r],
        delete w[r],
        window.clearTimeout(D),
        window.clearInterval(R),
        r !== null && t.onkeyup && t.onkeyup(r))
    }
    ,
    this.type = function(n) {
        for (var f = 0; f < n.length; f++) {
            var d = n.codePointAt ? n.codePointAt(f) : n.charCodeAt(f)
              , v = O(d);
            t.press(v),
            t.release(v)
        }
    }
    ,
    this.reset = function() {
        for (var r in t.pressed)
            t.release(parseInt(r));
        h = []
    }
    ;
    var S = function(n, f, d) {
        var v = d.modifiers[n], _ = t.modifiers[n], C;
        if (f.indexOf(d.keysym) === -1) {
            if (_ && v === !1)
                for (C = 0; C < f.length; C++)
                    t.release(f[C]);
            else if (!_ && v) {
                for (C = 0; C < f.length; C++)
                    if (t.pressed[f[C]])
                        return;
                var te = f[0];
                d.keysym && (w[te] = !0),
                t.press(te)
            }
        }
    }
      , F = function(n) {
        S("alt", [65513, 65514, 65027], n),
        S("shift", [65505, 65506], n),
        S("ctrl", [65507, 65508], n),
        S("meta", [65511, 65512], n),
        S("hyper", [65515, 65516], n),
        t.modifiers = n.modifiers
    }
      , H = function() {
        for (var n in t.pressed)
            if (!w[n])
                return !1;
        return !0
    };
    function M() {
        var r = V();
        if (!r)
            return !1;
        var n;
        do
            n = r,
            r = V();
        while (r !== null);
        return H() && t.reset(),
        n.defaultPrevented
    }
    var X = function(n) {
        !t.modifiers.ctrl || !t.modifiers.alt || n >= 65 && n <= 90 || n >= 97 && n <= 122 || (n <= 255 || (n & 4278190080) === 16777216) && (t.release(65507),
        t.release(65508),
        t.release(65513),
        t.release(65514))
    }
      , V = function() {
        var n = h[0];
        if (!n)
            return null;
        if (n instanceof u) {
            var f = null
              , d = [];
            if (n.keysym === 65511 || n.keysym === 65512) {
                if (h.length === 1)
                    return null;
                if (h[1].keysym !== n.keysym) {
                    if (!h[1].modifiers.meta)
                        return h.shift()
                } else if (h[1]instanceof u)
                    return h.shift()
            }
            if (n.reliable ? (f = n.keysym,
            d = h.splice(0, 1)) : h[1]instanceof m ? (f = h[1].keysym,
            d = h.splice(0, 2)) : h[1] && (f = n.keysym,
            d = h.splice(0, 1)),
            d.length > 0) {
                if (F(n),
                f) {
                    X(f);
                    var v = !t.press(f);
                    b[n.keyCode] = f,
                    n.keyupReliable || t.release(f);
                    for (var _ = 0; _ < d.length; _++)
                        d[_].defaultPrevented = v
                }
                return n
            }
        } else if (n instanceof x && !a.keyupUnreliable) {
            var f = n.keysym;
            if (f)
                t.release(f),
                delete b[n.keyCode],
                n.defaultPrevented = !0;
            else
                return t.reset(),
                n;
            return F(n),
            h.shift()
        } else
            return h.shift();
        return null
    }
      , Z = function(n) {
        return "location"in n ? n.location : "keyLocation"in n ? n.keyLocation : 0
    }
      , U = function(n) {
        return n[o] ? !1 : (n[o] = !0,
        !0)
    }
      , y = function(r) {
        if (t.onkeydown && U(r)) {
            var n = new u(r);
            n.keyCode !== 229 && (h.push(n),
            M() && r.preventDefault())
        }
    }
      , E = function(r) {
        !t.onkeydown && !t.onkeyup || U(r) && (h.push(new m(r)),
        M() && r.preventDefault())
    }
      , ee = function(r) {
        t.onkeyup && U(r) && (r.preventDefault(),
        h.push(new x(r)),
        M())
    };
    this.listenTo = function(n) {
        n.addEventListener("keydown", y.bind(this), !0),
        n.addEventListener("keypress", E.bind(this), !0),
        n.addEventListener("keyup", ee.bind(this), !0)
    }
    ,
    e && t.listenTo(e),
    this.interpretKeyEvent = function(r) {
        switch (r.type) {
        case "keydown":
            y(r);
            break;
        case "keyup":
            ee(r);
            break;
        case "keypress":
            E(r);
            break
        }
    }
    ,
    this.newKeyEvent = r => new l(r),
    this.newKeydownEvent = r => new u(r),
    this.newKeyupEvent = r => new x(r)
}
;
g.Keyboard._nextID = 0;
g.Keyboard.ModifierState = function() {
    this.shift = !1,
    this.ctrl = !1,
    this.alt = !1,
    this.meta = !1,
    this.hyper = !1
}
;
g.Keyboard.ModifierState.fromKeyboardEvent = function(s) {
    var e = new g.Keyboard.ModifierState;
    return e.shift = s.shiftKey,
    e.ctrl = s.ctrlKey,
    e.alt = s.altKey,
    e.meta = s.metaKey,
    s.getModifierState && (e.hyper = s.getModifierState("OS") || s.getModifierState("Super") || s.getModifierState("Hyper") || s.getModifierState("Win")),
    e
}
;
const Pe = g.Keyboard
  , se = 10
  , ie = 19;
var G = (s => (s.OBSERVE = "observe",
s.CONTROL = "control",
s))(G || {})
  , K = (s => (s.MESSAGE = "message",
s.ERROR = "error",
s.MODE_CHANGE = "modechange",
s.STREAMING = "streaming",
s.DATA_OPENED = "dataopened",
s.DATA_CLOSED = "dataclosed",
s.CONNECTED = "connected",
s.DISCONNECTED = "disconnected",
s))(K || {});
const $ = s => typeof s == "object" && s !== null && !Array.isArray(s)
  , Ie = s => $(s) && s.event === "control/clipboard" && typeof s.text == "string"
  , Ne = s => $(s) && s.event === "control/locked"
  , Le = s => $(s) && s.event === "control/release"
  , Re = s => Ie(s) || Ne(s) || Le(s) || $(s)
  , Oe = 118
  , Ue = 200;
class P {
    constructor(e="", t=null) {
        this.stream = null,
        this.mode = "observe",
        this.peerConnection = null,
        this.dataChannel = null,
        this._additionalHeaders = null,
        this._invertScroll = !0,
        this._onPeerDidResolve = [],
        this._onPeerDidRejection = [],
        this._peerTimeout = 0,
        this._listeners = {
            connected: [],
            disconnected: [],
            message: [],
            error: [],
            dataopened: [],
            dataclosed: [],
            streaming: [],
            modechange: []
        },
        this.keyboard = new Pe,
        this.keyEventSource = null,
        this.mouseEventSource = null,
        this._wheelThrottle = !1,
        this._clipboardSyncInProgress = !1,
        this._clipboardSyncWaiter = null,
        this._keyEventBuffer = [],
        this._lastClipboardText = null,
        this._handlePeerTrack = i => {
            if (i.track.kind !== "video")
                return;
            const [o] = i.streams;
            o && (this._handleStream(o),
            this.addEventListener("dataopened", () => this._handlePeerDidResolve()))
        }
        ,
        this._peerURL = e,
        this._additionalHeaders = t,
        this.keyboard.onkeydown = this.keyDown.bind(this),
        this.keyboard.onkeyup = this.keyUp.bind(this),
        this._sendEvent = this.sendEvent.bind(this),
        this._onContextMenu = this.onContextMenu.bind(this)
    }
    get peerURL() {
        return this._peerURL
    }
    set peerURL(e) {
        this.disconnect(),
        this._peerURL = e
    }
    get additionalHeaders() {
        return this._additionalHeaders
    }
    set additionalHeaders(e) {
        this.disconnect(),
        this._additionalHeaders = e
    }
    connect(e=2e3) {
        return setTimeout( () => this._createPeer()),
        this._peerTimeout || (this._peerTimeout = window.setTimeout( () => this._handlePeerDidRejection(new Error("The connection timed‑out while waiting for the peer to respond.")), e)),
        new Promise( (t, i) => {
            this._onPeerDidResolve.push(t),
            this._onPeerDidRejection.push(i)
        }
        )
    }
    disconnect() {
        this.dataChannel?.close(),
        this.dataChannel = null,
        this.peerConnection?.close(),
        this.peerConnection = null,
        this._emit("disconnected", this)
    }
    setMode(e) {
        switch (e) {
        case "control":
            this._requestControl();
            break;
        case "observe":
            this._releaseControl();
            break;
        default:
            throw new Error(`Invalid client mode "${e}" specified.`)
        }
    }
    sendData(e, t) {
        if (this.mode !== "control" || !this.dataChannel)
            return;
        if (e === "clipboard") {
            const {text: a} = t;
            this.dataChannel.send(JSON.stringify({
                event: "control/clipboard",
                text: a
            }));
            return
        }
        let i, o;
        switch (e) {
        case "mousemove":
            {
                const {x: a, y: l} = t;
                i = new ArrayBuffer(7),
                o = new DataView(i),
                o.setUint8(0, 1),
                o.setUint16(1, 4, !0),
                o.setUint16(3, a, !0),
                o.setUint16(5, l, !0);
                break
            }
        case "wheel":
            {
                const {x: a, y: l} = t;
                i = new ArrayBuffer(7),
                o = new DataView(i),
                o.setUint8(0, 2),
                o.setUint16(1, 4, !0),
                o.setInt16(3, a, !0),
                o.setInt16(5, l, !0);
                break
            }
        case "keydown":
        case "mousedown":
            {
                const {key: a} = t;
                i = new ArrayBuffer(11),
                o = new DataView(i),
                o.setUint8(0, 3),
                o.setUint16(1, 8, !0),
                o.setBigUint64(3, BigInt(a), !0);
                break
            }
        case "keyup":
        case "mouseup":
            {
                const {key: a} = t;
                i = new ArrayBuffer(11),
                o = new DataView(i),
                o.setUint8(0, 4),
                o.setUint16(1, 8, !0),
                o.setBigUint64(3, BigInt(a), !0);
                break
            }
        default:
            console.warn("Unknown event", e);
            return
        }
        this.dataChannel.send(i)
    }
    mouseMoved(e, t) {
        this.sendData("mousemove", t ? P.getScaledOffset(e, t) : e)
    }
    mouseDown(e) {
        this.sendData("mousedown", {
            key: e + 1
        })
    }
    mouseUp(e) {
        this.sendData("mouseup", {
            key: e + 1
        })
    }
    sendMouseEvent(e) {
        switch (e.type) {
        case "mousedown":
            this.mouseDown(e.button);
            break;
        case "mouseup":
            this.mouseUp(e.button);
            break;
        case "mousemove":
            this.mouseMoved({
                x: e.offsetX,
                y: e.offsetY
            }, e.currentTarget instanceof HTMLVideoElement ? e.currentTarget : void 0);
            break
        }
    }
    sendWheelEvent(e) {
        let {deltaX: t, deltaY: i} = e;
        e.deltaMode !== 0 && (t *= ie,
        i *= ie),
        this._invertScroll && (t *= -1,
        i *= -1),
        t = Math.min(Math.max(t, -10), se),
        i = Math.min(Math.max(i, -10), se),
        this.mouseMoved({
            x: e.offsetX,
            y: e.offsetY
        }, e.currentTarget instanceof HTMLVideoElement ? e.currentTarget : void 0),
        this._wheelThrottle || (this._wheelThrottle = !0,
        this.sendData("wheel", {
            x: t,
            y: i
        }),
        setTimeout( () => {
            this._wheelThrottle = !1
        }
        , 100))
    }
    _isPasteKey(e) {
        return e === Oe && (this.keyboard.modifiers.meta || this.keyboard.modifiers.ctrl)
    }
    async _startSyncClipboard() {
        if (document.hasFocus() && !this._clipboardSyncInProgress) {
            console.log("startSyncClipboard"),
            this._clipboardSyncInProgress = !0;
            try {
                const e = await navigator.clipboard.readText();
                e !== this._lastClipboardText && (this._lastClipboardText = e,
                this.dataChannel?.send(JSON.stringify({
                    event: "control/clipboard",
                    text: e
                })),
                console.log("clipboard sent to remote"),
                setTimeout( () => {
                    this._clipboardSyncWaiter && (console.log("clipboard timeout"),
                    this._clipboardSyncWaiter(),
                    this._clipboardSyncWaiter = null)
                }
                , Ue),
                await new Promise(t => {
                    this._clipboardSyncWaiter = t
                }
                ),
                console.log("clipboard updated"))
            } finally {
                this._flushKeyEvents(),
                this._clipboardSyncInProgress = !1
            }
        }
    }
    async keyDown(e) {
        this._pushKeyEvent({
            type: "keydown",
            key: P.getPlatformKeyCode(e)
        }),
        this._isPasteKey(e) && await this._startSyncClipboard(),
        !this._clipboardSyncInProgress && this._flushKeyEvents()
    }
    async keyUp(e) {
        this._pushKeyEvent({
            type: "keyup",
            key: P.getPlatformKeyCode(e)
        }),
        !this._clipboardSyncInProgress && this._flushKeyEvents()
    }
    _pushKeyEvent(e) {
        this._keyEventBuffer.push(e)
    }
    _flushKeyEvents() {
        for (const e of this._keyEventBuffer)
            this.sendData(e.type, {
                key: e.key
            });
        this._keyEventBuffer = []
    }
    sendKeyEvent(e) {
        this.mode !== "observe" && this.keyboard.interpretKeyEvent(e)
    }
    sendEvent(e) {
        e.preventDefault(),
        e instanceof WheelEvent ? this.sendWheelEvent(e) : e instanceof MouseEvent ? this.sendMouseEvent(e) : e instanceof KeyboardEvent && this.sendKeyEvent(e)
    }
    onContextMenu(e) {
        e.preventDefault()
    }
    setKeyEventSource(e) {
        const t = ["keydown", "keypress", "keyup"];
        if (this.keyEventSource)
            for (const i of t)
                this.keyEventSource.removeEventListener(i, this._sendEvent, !0);
        if (e) {
            if (typeof e == "string" ? this.keyEventSource = document.querySelector(e) : this.keyEventSource = e,
            !this.keyEventSource) {
                console.warn("[NekoClient] Invalid key event source.");
                return
            }
            for (const i of t)
                this.keyEventSource.addEventListener(i, this._sendEvent, !0)
        }
    }
    setMouseEventSource(e) {
        const t = ["mousemove", "mousedown", "mouseup", "wheel"];
        if (this.mouseEventSource) {
            for (const i of t)
                this.mouseEventSource.removeEventListener(i, this._sendEvent);
            this.mouseEventSource.removeEventListener("contextmenu", this._onContextMenu)
        }
        if (e) {
            if (typeof e == "string" ? this.mouseEventSource = document.querySelector(e) : this.mouseEventSource = e,
            !this.mouseEventSource) {
                console.warn("[NekoClient] Invalid mouse event source.");
                return
            }
            for (const i of t)
                this.mouseEventSource.addEventListener(i, this._sendEvent);
            this.mouseEventSource.addEventListener("contextmenu", this._onContextMenu)
        }
    }
    addEventListener(e, t) {
        this._listeners[e].push(t)
    }
    removeEventListener(e, t) {
        const i = this._listeners[e].indexOf(t);
        i !== -1 && this._listeners[e].splice(i, 1)
    }
    _emit(e, ...t) {
        for (const i of this._listeners[e])
            i(...t)
    }
    _handleDataChannelDidOpen() {
        this.dataChannel && (this._emit("dataopened", this.dataChannel),
        this.addEventListener("streaming", () => this._emit("connected", this)))
    }
    _handleDataChannelDidClose() {
        this._emit("dataclosed")
    }
    _handleMessage(e) {
        console.log("_handleMessage", e);
        let t, i;
        try {
            typeof e.data == "string" && (t = JSON.parse(e.data))
        } catch (o) {
            i = o
        }
        if (i || !Re(t)) {
            this._emit("error", i ? i instanceof Error ? i : new Error(`Failed to parse message: ${i}`) : new Error(`Invalid message payload: ${e.data}`));
            return
        }
        switch (this._emit("message", t),
        t.event) {
        case "control/clipboard":
            console.log("_handleMessage - control/clipboard"),
            navigator.clipboard.writeText(t.text).catch(o => {
                console.log("control/clipboard error"),
                this._handleError(o instanceof Error ? o : new Error(`Pasteboard Error: ${o}`))
            }
            ).finally( () => {
                console.log("control/clipboard finally"),
                this._clipboardSyncWaiter && (console.log("control/clipboard finally - _clipboardSyncWaiter", this._clipboardSyncWaiter),
                this._clipboardSyncWaiter(),
                this._clipboardSyncWaiter = null)
            }
            );
            break;
        case "control/locked":
            this._handleModeDidChange("control");
            break;
        case "control/release":
            this._handleModeDidChange("observe");
            break
        }
    }
    _handleModeDidChange(e) {
        this.mode = e,
        this._emit("modechange", e)
    }
    _handlePeerDidResolve() {
        this._emit("connected", this),
        setTimeout( () => {
            this._listeners.dataopened.length = 0,
            this._listeners.streaming.length = 0
        }
        ),
        clearTimeout(this._peerTimeout),
        this._peerTimeout = 0,
        this._onPeerDidRejection.length = 0,
        this._onPeerDidResolve.forEach(e => e(this)),
        this._onPeerDidResolve.length = 0
    }
    _handlePeerDidRejection(e) {
        this._onPeerDidResolve.length = 0,
        this._onPeerDidRejection.forEach(t => t(e)),
        this._onPeerDidRejection.length = 0,
        this._handleError(e)
    }
    _handleStream(e) {
        this.stream = e,
        this._emit("streaming", e)
    }
    _handleError(e) {
        this._emit("error", e)
    }
    _createPeer() {
        console.assert(this.peerConnection === null, "WARNING: Client already connected"),
        this.peerConnection = new RTCPeerConnection,
        this.peerConnection.ontrack = this._handlePeerTrack,
        this.peerConnection.addTransceiver("audio"),
        this.peerConnection.addTransceiver("video"),
        this.dataChannel = this.peerConnection.createDataChannel(""),
        this.dataChannel.onmessage = this._handleMessage.bind(this),
        this.dataChannel.onopen = this._handleDataChannelDidOpen.bind(this),
        this.dataChannel.onclose = this._handleDataChannelDidClose.bind(this),
        this.dataChannel.onerror = e => this._handleError("error"in e && e.error instanceof Error ? e.error : new Error(`Unknown Data Channel Error: ${JSON.stringify(e)}`)),
        this.peerConnection.createOffer().then(e => (this.peerConnection?.setLocalDescription(e),
        fetch(this._peerURL, {
            method: "POST",
            body: e.sdp ?? "",
            headers: {
                "Content-Type": "application/sdp",
                ...this._additionalHeaders ?? {}
            }
        }))).then(e => e.text()).then(e => {
            this.peerConnection?.setRemoteDescription({
                type: "answer",
                sdp: e
            }).catch(this._handlePeerDidRejection.bind(this))
        }
        ).catch(this._handlePeerDidRejection.bind(this))
    }
    _requestControl() {
        this.dataChannel?.send(JSON.stringify({
            event: "control/request"
        }))
    }
    _releaseControl() {
        this.dataChannel?.send(JSON.stringify({
            event: "control/release"
        }))
    }
    static get _isMacOS() {
        return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
    }
    static getPlatformKeyCode(e) {
        if (!P._isMacOS)
            return e;
        switch (e) {
        case 65511:
            return 65507;
        case 65515:
            return 65513;
        case 65516:
            return 65515;
        case 65513:
            return 65406;
        case 65514:
            return 65027;
        default:
            return e
        }
    }
    static getScaledOffset({x: e, y: t}, i) {
        const {width: o, height: a} = i.getBoundingClientRect()
          , {videoWidth: l, videoHeight: u} = i;
        return {
            x: Math.round(l / o * e),
            y: Math.round(u / a * t)
        }
    }
}
const je = 2e4;
class Ae {
    nekoClient = null;
    videoElement = null;
    initialized = !1;
    init(e, t, i, o, a, l, u) {
        if (this.initialized)
            return;
        this.initialized = !0,
        this.videoElement = o;
        const m = xe();
        return delete m["cf-timezone"],
        this.nekoClient = new P(t,{
            Authorization: `Bearer ${i}`,
            "Content-Type": "application/sdp",
            ...m
        }),
        this.nekoClient.addEventListener(K.STREAMING, x => {
            this.videoElement && (this.videoElement.srcObject = x,
            a())
        }
        ),
        this.nekoClient.addEventListener(K.DATA_OPENED, () => {
            this.setMode(u ?? G.CONTROL)
        }
        ),
        this.nekoClient.addEventListener(K.MODE_CHANGE, x => {
            this.nekoClient && x === G.CONTROL && (this.nekoClient.setKeyEventSource(document),
            this.nekoClient.setMouseEventSource(this.videoElement))
        }
        ),
        this.nekoClient.addEventListener(K.DISCONNECTED, x => {
            x.setMouseEventSource(null),
            x.setKeyEventSource(null),
            this.initialized = !1
        }
        ),
        this.nekoClient.addEventListener(K.ERROR, x => {
            N.addError("[NekoClient] Error", {
                cause: x,
                conversationId: e
            }),
            this.nekoClient?.disconnect(),
            l(x)
        }
        ),
        this.connect()
    }
    connect() {
        return this.nekoClient?.connect(je)
    }
    disconnect() {
        this.initialized = !1,
        this.nekoClient?.disconnect()
    }
    setMode(e) {
        this.nekoClient?.setMode(e)
    }
    setKeyEventSource(e) {
        this.nekoClient?.setKeyEventSource(e)
    }
    setMouseEventSource(e) {
        this.nekoClient?.setMouseEventSource(e)
    }
    addEventListener(e, t) {
        this.nekoClient?.addEventListener(e, t)
    }
    getMode() {
        return this.nekoClient?.mode
    }
}
const oe = new Ae;
function Be(s) {
    const [e,t] = p.useState({
        status: s ? "loading" : "error",
        src: ""
    });
    return p.useEffect( () => {
        if (!s) {
            t({
                status: "error",
                src: ""
            });
            return
        }
        let i = !1;
        return (async () => {
            t({
                status: "loading",
                src: ""
            });
            try {
                await new Promise( (a, l) => {
                    const u = new Image;
                    u.onload = () => a(),
                    u.onerror = () => l(new Error("failed")),
                    u.src = s
                }
                ),
                i || t({
                    status: "loaded",
                    src: s
                })
            } catch (a) {
                i || t({
                    status: "error",
                    src: ""
                }),
                i || N.addError(a)
            }
        }
        )(),
        () => {
            i = !0
        }
    }
    , [s]),
    {
        status: e.status,
        src: e.src,
        isLoaded: e.status === "loaded",
        isError: e.status === "error"
    }
}
const Fe = ({isOpen: s, onClose: e, onRetry: t, errorMessage: i}) => {
    const o = Q();
    let a = o.formatMessage(I.connectionErrorDescription);
    return c.jsx(fe, {
        testId: "modal-takeover-connection-error",
        isOpen: s,
        onClose: e,
        icon: ve,
        title: o.formatMessage(I.connectionErrorTitle),
        description: a,
        type: "warning",
        rootClassName: "z-50",
        onEscapeKeyDown: l => {
            l.stopPropagation(),
            l.preventDefault()
        }
        ,
        shouldIgnoreClickOutside: !0,
        secondaryButton: c.jsx(re.Button, {
            onClick: e,
            title: o.formatMessage(I.okButton)
        }),
        primaryButton: c.jsx(re.Button, {
            onClick: t,
            title: o.formatMessage(I.retryButton)
        })
    })
}
;
function He(s, e) {
    const t = me(ye(), "3843674407");
    let i;
    return t ? i = "https://realtime.chatgpt.com/v1/cua" : i = "https://transceiver.api.openai.com/v1/cua",
    `${i}?cid=${s}`
}
const Ve = ({clientThreadId: s, serverThreadId: e, token: t, isResuming: i, vmId: o, onClose: a}) => {
    const l = p.useRef(null)
      , [u,m] = p.useState(!0)
      , [x,h] = p.useState(!1)
      , [L,Y] = p.useState(!1)
      , [J,w] = p.useState(!1)
      , [j,b] = p.useState(null)
      , D = pe(s, y => ge.findNode(y, E => E.message.content.content_type === ne.ComputerOutput))
      , R = D?.message.content.content_type === ne.ComputerOutput ? D?.message.content.screenshot : void 0
      , T = He(e)
      , A = p.useCallback(y => {
        N.addError(y),
        b(y.message),
        w(!0),
        h(!0)
    }
    , [])
      , k = p.useCallback(async y => {
        m(!0),
        h(!1);
        try {
            l.current && T && await oe.init(e, T, y, l.current, () => {
                Y(!0)
            }
            , A, G.CONTROL)
        } catch (E) {
            E instanceof Error ? (N.addError(E),
            b(E.message)) : (N.addError(new Error("Unknown error")),
            b("An unknown error occurred")),
            w(!0),
            h(!0)
        } finally {
            m(!1)
        }
    }
    , [A, e, T]);
    p.useEffect( () => {
        t && (i || k(t))
    }
    , [t, k, i]),
    p.useEffect( () => {
        const y = E => {
            E.preventDefault()
        }
        ;
        if (L)
            return window.addEventListener("beforeunload", y),
            () => window.removeEventListener("beforeunload", y)
    }
    , [L]);
    function q() {
        oe.disconnect(),
        a({
            startNewTurn: !0
        })
    }
    function O() {
        w(!1),
        b(null),
        t && k(t)
    }
    function B() {
        w(!1),
        b(null),
        a({
            startNewTurn: !1
        })
    }
    const z = !x && !L && !i
      , S = De(R, e)
      , {isLoaded: F, src: H} = Be(S)
      , M = "64px"
      , {bar: X, ratio: V, vw: Z, vh: U} = {
        bar: "93px",
        ratio: "4/3",
        vw: `calc(100vw - ${M} * 2)`,
        vh: `calc(100dvh - ${M} * 2)`
    };
    return c.jsxs("div", {
        className: `flex h-full w-full flex-col items-center justify-center p-[${M}]`,
        children: [c.jsxs("div", {
            className: "bg-token-bg-primary flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg",
            style: {
                width: `min(${Z}, calc((${U} - ${X}) * ${V}))`
            },
            children: [c.jsxs("div", {
                className: "group bg-token-bg-tertiary relative aspect-[4/3] w-full flex-shrink-0 overflow-hidden",
                children: [F && H && c.jsx("img", {
                    src: H,
                    alt: "",
                    className: "absolute inset-0 h-full w-full opacity-20 blur"
                }), c.jsx("video", {
                    ref: l,
                    className: "absolute inset-0 h-full w-full object-contain",
                    autoPlay: !0,
                    playsInline: !0,
                    muted: !0
                }), i && c.jsx("div", {
                    className: "absolute inset-0 flex items-center justify-center",
                    children: c.jsx(We, {
                        size: 36
                    })
                }), z && c.jsx("div", {
                    className: "absolute inset-0 flex items-center justify-center",
                    children: c.jsx(Me, {
                        size: 36
                    })
                })]
            }), c.jsx(Ke, {
                handleEndControl: q,
                isConnecting: u
            })]
        }), !1, c.jsx(Fe, {
            isOpen: J,
            onClose: B,
            onRetry: O,
            errorMessage: j
        })]
    })
}
  , I = ae({
    retryButton: {
        id: "vnc.retryButton",
        defaultMessage: "Retry"
    },
    okButton: {
        id: "vnc.okButton",
        defaultMessage: "OK"
    },
    connectionErrorTitle: {
        id: "vnc.connectionErrorTitle",
        defaultMessage: "Could not connect to virtual browser"
    },
    connectionErrorDescription: {
        id: "vnc.connectionErrorDescription",
        defaultMessage: "There was a problem connecting to the remote browser. Try again later."
    },
    controlModalTitle: {
        id: "vnc.controlModalTitle",
        defaultMessage: "You're in control"
    },
    controlModalDescription: {
        id: "vnc.controlModalDescription",
        defaultMessage: "You’re controlling ChatGPT’s remote browser. While you’re in control, ChatGPT won’t see any data or information you enter."
    },
    controlModalContinueButton: {
        id: "vnc.controlModalContinueButton",
        defaultMessage: "Continue"
    },
    cancelButton: {
        id: "vnc.cancelButton",
        defaultMessage: "Cancel"
    },
    restoringComputer: {
        id: "vnc.restoringComputer",
        defaultMessage: "Restoring computer..."
    }
});
function We({size: s=48, strokeWidth: e=2, duration: t=30, endPercent: i=.9}) {
    const o = Q()
      , a = (s - e) / 2
      , l = 2 * Math.PI * a
      , u = l
      , m = l
      , x = l * (1 - i);
    return c.jsxs("div", {
        className: "relative flex flex-col items-center justify-center gap-2",
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": i * 100,
        "aria-label": o.formatMessage(I.restoringComputer),
        children: [c.jsxs("svg", {
            width: s,
            height: s,
            viewBox: `0 0 ${s} ${s}`,
            className: "rotate-[-90deg]",
            children: [c.jsx("circle", {
                cx: s / 2,
                cy: s / 2,
                r: a,
                fill: "transparent",
                strokeWidth: e,
                className: "text-[var(--sidebar-surface-secondary)]",
                stroke: "currentColor"
            }), c.jsx(le.circle, {
                cx: s / 2,
                cy: s / 2,
                r: a,
                fill: "transparent",
                strokeWidth: e,
                className: "text-[var(--main-surface-primary-inverse)]",
                stroke: "currentColor",
                strokeDasharray: u,
                strokeDashoffset: m,
                animate: {
                    strokeDashoffset: x
                },
                transition: {
                    duration: t,
                    ease: "linear"
                }
            })]
        }), c.jsx("div", {
            className: "absolute -bottom-8 flex items-center justify-center whitespace-nowrap",
            children: o.formatMessage(I.restoringComputer)
        })]
    })
}
const Ge = ({clientThreadId: s, serverThreadId: e, token: t, isOpen: i, isResuming: o, vmId: a, onClose: l}) => c.jsx(fe, {
    testId: "modal-vnc-viewer-content",
    type: "success",
    size: "fullscreen",
    isOpen: i,
    onClose: () => l({
        startNewTurn: !1
    }),
    title: c.jsx(ce, {
        id: "vnc.message.contentModalTitle",
        defaultMessage: "Virtual browser"
    }),
    shouldIgnoreClickOutside: !0,
    onEscapeKeyDown: u => {
        u.stopPropagation(),
        u.preventDefault()
    }
    ,
    visuallyHiddenHeader: !0,
    className: "bg-token-bg-primary/40! backdrop-blur-sm",
    children: e && t && c.jsx(Ve, {
        clientThreadId: s,
        serverThreadId: e,
        token: t,
        isResuming: o,
        vmId: a,
        onClose: u => l(u)
    })
})
  , $e = ({clientThreadId: s}) => {
    Te(s);
    const {isOpen: e, token: t, isResuming: i, vmId: o} = ke()
      , a = Ee()
      , l = Ce(s)
      , u = e ? c.jsx(Ge, {
        clientThreadId: s,
        serverThreadId: l,
        token: t,
        isOpen: e,
        isResuming: i,
        vmId: o,
        onClose: m => Se(a, m)
    }) : null;
    return c.jsx(de, {
        children: u
    }, s)
}
  , ft = s => {
    const e = p.useRef(null);
    return c.jsx(be, {
        ref: e,
        onError: (t, i) => {
            _e(),
            setTimeout( () => {
                e.current?.resetErrorBoundary()
            }
            ),
            N.addError(t, {
                componentStack: i
            })
        }
        ,
        name: "vnc-focused-view",
        children: c.jsx($e, {
            ...s
        })
    })
}
;
export {ft as VNCFocusedViewManager};
//# sourceMappingURL=enk459wlxsccs6k2.js.map
