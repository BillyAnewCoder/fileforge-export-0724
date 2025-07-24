import {r as k, j, e as md, u as wo, h as Po, g as gd, M as mt, m as vd} from "./juy90og0wtbp77qa.js";
import {ag as Eo, aV as bd, c1 as yd, p as Cn, aR as kd, aW as Sd, hs as ne, aQ as Ro, dX as Td, e as Cd, dg as wd, hu as _o, aT as Pd, $ as Bi, b2 as qi, b3 as zi, nF as Io, aY as Ed, L as Wi, b as xo, nG as Rd, dS as _d, nH as Id, dJ as xd, lD as Ad, hT as Dd, ec as Jr, ay as Ao, ar as Dt, B as wn, aG as Qr, bd as Md, bn as Od, P as Nd, e9 as Ld, D as Ud} from "./dc2xxjkicf2pz0mj.js";
import {iP as Pe, j8 as Do, j2 as Fd, y2 as jd, dK as Te, y3 as Mo, y4 as ot, y5 as Gi, xd as Oo, xb as xe, xe as Vd, y6 as hn, y7 as Gn, dJ as Nt, h as Bd, xg as pe, y8 as qd, rF as No, o as Kn, j5 as pt, rE as zd, ao as Lo, mV as Wd, x7 as Gd, y9 as ze, dz as Uo, ya as Kd, dI as Hd, yb as Jd, dL as Qd, yc as Yd, yd as $d, x8 as Xd, hu as Fo, ye as jo, yf as Zd, yg as eu, d as tu, fY as nu, xf as iu, ag as ru, iO as pi, yh as su, fd as ou, eV as au} from "./ckp56qklot786ulr.js";
import {u as cu} from "./ktek6k3hwnufzduj.js";
import {e as du, d as uu} from "./cir7oqlbi88or9cr.js";
const lu = () => {
    const n = Eo()
      , e = Pe()
      , t = k.useCallback( () => e.getState().isVoiceModeActive, [e]);
    return k.useMemo( () => new Proxy(n,{
        get(i, r) {
            const s = i[r];
            return t() || r === "closeAll" ? s : () => {}
        }
    }), [t, n])
}
  , Yr = async (n, e) => (e || (e = await Do.getLocalDevices()),
e.find(i => i.deviceId === n)?.label ?? n);
function Vo() {
    const n = Fd();
    if (!n)
        return {
            video: !1,
            screenshare: !1
        };
    const e = jd(n);
    return {
        video: e?.features?.video ?? !1,
        screenshare: e?.features?.screen_sharing ?? !1
    }
}
var $r = {};
function hu(n, e) {
    return e.forEach(function(t) {
        t && typeof t != "string" && !Array.isArray(t) && Object.keys(t).forEach(function(i) {
            if (i !== "default" && !(i in n)) {
                var r = Object.getOwnPropertyDescriptor(t, i);
                Object.defineProperty(n, i, r.get ? r : {
                    enumerable: !0,
                    get: function() {
                        return t[i]
                    }
                })
            }
        })
    }),
    Object.freeze(n)
}
var fu = Object.defineProperty
  , pu = (n, e, t) => e in n ? fu(n, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : n[e] = t
  , Xr = (n, e, t) => pu(n, typeof e != "symbol" ? e + "" : e, t);
class _e {
    constructor() {
        Xr(this, "_locking"),
        Xr(this, "_locks"),
        this._locking = Promise.resolve(),
        this._locks = 0
    }
    isLocked() {
        return this._locks > 0
    }
    lock() {
        this._locks += 1;
        let e;
        const t = new Promise(r => e = () => {
            this._locks -= 1,
            r()
        }
        )
          , i = this._locking.then( () => e);
        return this._locking = this._locking.then( () => t),
        i
    }
}
function ae(n, e) {
    if (!n)
        throw new Error(e)
}
const mu = 34028234663852886e22
  , gu = -34028234663852886e22
  , vu = 4294967295
  , bu = 2147483647
  , yu = -2147483648;
function In(n) {
    if (typeof n != "number")
        throw new Error("invalid int 32: " + typeof n);
    if (!Number.isInteger(n) || n > bu || n < yu)
        throw new Error("invalid int 32: " + n)
}
function Ki(n) {
    if (typeof n != "number")
        throw new Error("invalid uint 32: " + typeof n);
    if (!Number.isInteger(n) || n > vu || n < 0)
        throw new Error("invalid uint 32: " + n)
}
function Bo(n) {
    if (typeof n != "number")
        throw new Error("invalid float 32: " + typeof n);
    if (Number.isFinite(n) && (n > mu || n < gu))
        throw new Error("invalid float 32: " + n)
}
const qo = Symbol("@bufbuild/protobuf/enum-type");
function ku(n) {
    const e = n[qo];
    return ae(e, "missing enum type on enum object"),
    e
}
function zo(n, e, t, i) {
    n[qo] = Wo(e, t.map(r => ({
        no: r.no,
        name: r.name,
        localName: n[r.no]
    })))
}
function Wo(n, e, t) {
    const i = Object.create(null)
      , r = Object.create(null)
      , s = [];
    for (const o of e) {
        const a = Go(o);
        s.push(a),
        i[o.name] = a,
        r[o.no] = a
    }
    return {
        typeName: n,
        values: s,
        findName(o) {
            return i[o]
        },
        findNumber(o) {
            return r[o]
        }
    }
}
function Su(n, e, t) {
    const i = {};
    for (const r of e) {
        const s = Go(r);
        i[s.localName] = s.no,
        i[s.no] = s.localName
    }
    return zo(i, n, e),
    i
}
function Go(n) {
    return "localName"in n ? n : Object.assign(Object.assign({}, n), {
        localName: n.name
    })
}
class Sr {
    equals(e) {
        return this.getType().runtime.util.equals(this.getType(), this, e)
    }
    clone() {
        return this.getType().runtime.util.clone(this)
    }
    fromBinary(e, t) {
        const i = this.getType()
          , r = i.runtime.bin
          , s = r.makeReadOptions(t);
        return r.readMessage(this, s.readerFactory(e), e.byteLength, s),
        this
    }
    fromJson(e, t) {
        const i = this.getType()
          , r = i.runtime.json
          , s = r.makeReadOptions(t);
        return r.readMessage(i, e, s, this),
        this
    }
    fromJsonString(e, t) {
        let i;
        try {
            i = JSON.parse(e)
        } catch (r) {
            throw new Error("cannot decode ".concat(this.getType().typeName, " from JSON: ").concat(r instanceof Error ? r.message : String(r)))
        }
        return this.fromJson(i, t)
    }
    toBinary(e) {
        const t = this.getType()
          , i = t.runtime.bin
          , r = i.makeWriteOptions(e)
          , s = r.writerFactory();
        return i.writeMessage(this, s, r),
        s.finish()
    }
    toJson(e) {
        const t = this.getType()
          , i = t.runtime.json
          , r = i.makeWriteOptions(e);
        return i.writeMessage(this, r)
    }
    toJsonString(e) {
        var t;
        const i = this.toJson(e);
        return JSON.stringify(i, null, (t = e?.prettySpaces) !== null && t !== void 0 ? t : 0)
    }
    toJSON() {
        return this.toJson({
            emitDefaultValues: !0
        })
    }
    getType() {
        return Object.getPrototypeOf(this).constructor
    }
}
function Tu(n, e, t, i) {
    var r;
    const s = (r = i?.localName) !== null && r !== void 0 ? r : e.substring(e.lastIndexOf(".") + 1)
      , o = {
        [s]: function(a) {
            n.util.initFields(this),
            n.util.initPartial(a, this)
        }
    }[s];
    return Object.setPrototypeOf(o.prototype, new Sr),
    Object.assign(o, {
        runtime: n,
        typeName: e,
        fields: n.util.newFieldList(t),
        fromBinary(a, c) {
            return new o().fromBinary(a, c)
        },
        fromJson(a, c) {
            return new o().fromJson(a, c)
        },
        fromJsonString(a, c) {
            return new o().fromJsonString(a, c)
        },
        equals(a, c) {
            return n.util.equals(o, a, c)
        }
    }),
    o
}
function Cu() {
    let n = 0
      , e = 0;
    for (let i = 0; i < 28; i += 7) {
        let r = this.buf[this.pos++];
        if (n |= (r & 127) << i,
        (r & 128) == 0)
            return this.assertBounds(),
            [n, e]
    }
    let t = this.buf[this.pos++];
    if (n |= (t & 15) << 28,
    e = (t & 112) >> 4,
    (t & 128) == 0)
        return this.assertBounds(),
        [n, e];
    for (let i = 3; i <= 31; i += 7) {
        let r = this.buf[this.pos++];
        if (e |= (r & 127) << i,
        (r & 128) == 0)
            return this.assertBounds(),
            [n, e]
    }
    throw new Error("invalid varint")
}
function mi(n, e, t) {
    for (let s = 0; s < 28; s = s + 7) {
        const o = n >>> s
          , a = !(!(o >>> 7) && e == 0)
          , c = (a ? o | 128 : o) & 255;
        if (t.push(c),
        !a)
            return
    }
    const i = n >>> 28 & 15 | (e & 7) << 4
      , r = e >> 3 != 0;
    if (t.push((r ? i | 128 : i) & 255),
    !!r) {
        for (let s = 3; s < 31; s = s + 7) {
            const o = e >>> s
              , a = !!(o >>> 7)
              , c = (a ? o | 128 : o) & 255;
            if (t.push(c),
            !a)
                return
        }
        t.push(e >>> 31 & 1)
    }
}
const xn = 4294967296;
function Zr(n) {
    const e = n[0] === "-";
    e && (n = n.slice(1));
    const t = 1e6;
    let i = 0
      , r = 0;
    function s(o, a) {
        const c = Number(n.slice(o, a));
        r *= t,
        i = i * t + c,
        i >= xn && (r = r + (i / xn | 0),
        i = i % xn)
    }
    return s(-24, -18),
    s(-18, -12),
    s(-12, -6),
    s(-6),
    e ? Ho(i, r) : Tr(i, r)
}
function wu(n, e) {
    let t = Tr(n, e);
    const i = t.hi & 2147483648;
    i && (t = Ho(t.lo, t.hi));
    const r = Ko(t.lo, t.hi);
    return i ? "-" + r : r
}
function Ko(n, e) {
    if ({lo: n, hi: e} = Pu(n, e),
    e <= 2097151)
        return String(xn * e + n);
    const t = n & 16777215
      , i = (n >>> 24 | e << 8) & 16777215
      , r = e >> 16 & 65535;
    let s = t + i * 6777216 + r * 6710656
      , o = i + r * 8147497
      , a = r * 2;
    const c = 1e7;
    return s >= c && (o += Math.floor(s / c),
    s %= c),
    o >= c && (a += Math.floor(o / c),
    o %= c),
    a.toString() + es(o) + es(s)
}
function Pu(n, e) {
    return {
        lo: n >>> 0,
        hi: e >>> 0
    }
}
function Tr(n, e) {
    return {
        lo: n | 0,
        hi: e | 0
    }
}
function Ho(n, e) {
    return e = ~e,
    n ? n = ~n + 1 : e += 1,
    Tr(n, e)
}
const es = n => {
    const e = String(n);
    return "0000000".slice(e.length) + e
}
;
function ts(n, e) {
    if (n >= 0) {
        for (; n > 127; )
            e.push(n & 127 | 128),
            n = n >>> 7;
        e.push(n)
    } else {
        for (let t = 0; t < 9; t++)
            e.push(n & 127 | 128),
            n = n >> 7;
        e.push(1)
    }
}
function Eu() {
    let n = this.buf[this.pos++]
      , e = n & 127;
    if ((n & 128) == 0)
        return this.assertBounds(),
        e;
    if (n = this.buf[this.pos++],
    e |= (n & 127) << 7,
    (n & 128) == 0)
        return this.assertBounds(),
        e;
    if (n = this.buf[this.pos++],
    e |= (n & 127) << 14,
    (n & 128) == 0)
        return this.assertBounds(),
        e;
    if (n = this.buf[this.pos++],
    e |= (n & 127) << 21,
    (n & 128) == 0)
        return this.assertBounds(),
        e;
    n = this.buf[this.pos++],
    e |= (n & 15) << 28;
    for (let t = 5; (n & 128) !== 0 && t < 10; t++)
        n = this.buf[this.pos++];
    if ((n & 128) != 0)
        throw new Error("invalid varint");
    return this.assertBounds(),
    e >>> 0
}
function Ru() {
    const n = new DataView(new ArrayBuffer(8));
    if (typeof BigInt == "function" && typeof n.getBigInt64 == "function" && typeof n.getBigUint64 == "function" && typeof n.setBigInt64 == "function" && typeof n.setBigUint64 == "function" && (typeof process != "object" || typeof $r != "object" || $r.BUF_BIGINT_DISABLE !== "1")) {
        const r = BigInt("-9223372036854775808")
          , s = BigInt("9223372036854775807")
          , o = BigInt("0")
          , a = BigInt("18446744073709551615");
        return {
            zero: BigInt(0),
            supported: !0,
            parse(c) {
                const d = typeof c == "bigint" ? c : BigInt(c);
                if (d > s || d < r)
                    throw new Error("int64 invalid: ".concat(c));
                return d
            },
            uParse(c) {
                const d = typeof c == "bigint" ? c : BigInt(c);
                if (d > a || d < o)
                    throw new Error("uint64 invalid: ".concat(c));
                return d
            },
            enc(c) {
                return n.setBigInt64(0, this.parse(c), !0),
                {
                    lo: n.getInt32(0, !0),
                    hi: n.getInt32(4, !0)
                }
            },
            uEnc(c) {
                return n.setBigInt64(0, this.uParse(c), !0),
                {
                    lo: n.getInt32(0, !0),
                    hi: n.getInt32(4, !0)
                }
            },
            dec(c, d) {
                return n.setInt32(0, c, !0),
                n.setInt32(4, d, !0),
                n.getBigInt64(0, !0)
            },
            uDec(c, d) {
                return n.setInt32(0, c, !0),
                n.setInt32(4, d, !0),
                n.getBigUint64(0, !0)
            }
        }
    }
    const t = r => ae(/^-?[0-9]+$/.test(r), "int64 invalid: ".concat(r))
      , i = r => ae(/^[0-9]+$/.test(r), "uint64 invalid: ".concat(r));
    return {
        zero: "0",
        supported: !1,
        parse(r) {
            return typeof r != "string" && (r = r.toString()),
            t(r),
            r
        },
        uParse(r) {
            return typeof r != "string" && (r = r.toString()),
            i(r),
            r
        },
        enc(r) {
            return typeof r != "string" && (r = r.toString()),
            t(r),
            Zr(r)
        },
        uEnc(r) {
            return typeof r != "string" && (r = r.toString()),
            i(r),
            Zr(r)
        },
        dec(r, s) {
            return wu(r, s)
        },
        uDec(r, s) {
            return Ko(r, s)
        }
    }
}
const te = Ru();
var R;
(function(n) {
    n[n.DOUBLE = 1] = "DOUBLE",
    n[n.FLOAT = 2] = "FLOAT",
    n[n.INT64 = 3] = "INT64",
    n[n.UINT64 = 4] = "UINT64",
    n[n.INT32 = 5] = "INT32",
    n[n.FIXED64 = 6] = "FIXED64",
    n[n.FIXED32 = 7] = "FIXED32",
    n[n.BOOL = 8] = "BOOL",
    n[n.STRING = 9] = "STRING",
    n[n.BYTES = 12] = "BYTES",
    n[n.UINT32 = 13] = "UINT32",
    n[n.SFIXED32 = 15] = "SFIXED32",
    n[n.SFIXED64 = 16] = "SFIXED64",
    n[n.SINT32 = 17] = "SINT32",
    n[n.SINT64 = 18] = "SINT64"
}
)(R || (R = {}));
var ht;
(function(n) {
    n[n.BIGINT = 0] = "BIGINT",
    n[n.STRING = 1] = "STRING"
}
)(ht || (ht = {}));
function at(n, e, t) {
    if (e === t)
        return !0;
    if (n == R.BYTES) {
        if (!(e instanceof Uint8Array) || !(t instanceof Uint8Array) || e.length !== t.length)
            return !1;
        for (let i = 0; i < e.length; i++)
            if (e[i] !== t[i])
                return !1;
        return !0
    }
    switch (n) {
    case R.UINT64:
    case R.FIXED64:
    case R.INT64:
    case R.SFIXED64:
    case R.SINT64:
        return e == t
    }
    return !1
}
function zt(n, e) {
    switch (n) {
    case R.BOOL:
        return !1;
    case R.UINT64:
    case R.FIXED64:
    case R.INT64:
    case R.SFIXED64:
    case R.SINT64:
        return e == 0 ? te.zero : "0";
    case R.DOUBLE:
    case R.FLOAT:
        return 0;
    case R.BYTES:
        return new Uint8Array(0);
    case R.STRING:
        return "";
    default:
        return 0
    }
}
function Jo(n, e) {
    switch (n) {
    case R.BOOL:
        return e === !1;
    case R.STRING:
        return e === "";
    case R.BYTES:
        return e instanceof Uint8Array && !e.byteLength;
    default:
        return e == 0
    }
}
var de;
(function(n) {
    n[n.Varint = 0] = "Varint",
    n[n.Bit64 = 1] = "Bit64",
    n[n.LengthDelimited = 2] = "LengthDelimited",
    n[n.StartGroup = 3] = "StartGroup",
    n[n.EndGroup = 4] = "EndGroup",
    n[n.Bit32 = 5] = "Bit32"
}
)(de || (de = {}));
class _u {
    constructor(e) {
        this.stack = [],
        this.textEncoder = e ?? new TextEncoder,
        this.chunks = [],
        this.buf = []
    }
    finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let e = 0;
        for (let r = 0; r < this.chunks.length; r++)
            e += this.chunks[r].length;
        let t = new Uint8Array(e)
          , i = 0;
        for (let r = 0; r < this.chunks.length; r++)
            t.set(this.chunks[r], i),
            i += this.chunks[r].length;
        return this.chunks = [],
        t
    }
    fork() {
        return this.stack.push({
            chunks: this.chunks,
            buf: this.buf
        }),
        this.chunks = [],
        this.buf = [],
        this
    }
    join() {
        let e = this.finish()
          , t = this.stack.pop();
        if (!t)
            throw new Error("invalid state, fork stack empty");
        return this.chunks = t.chunks,
        this.buf = t.buf,
        this.uint32(e.byteLength),
        this.raw(e)
    }
    tag(e, t) {
        return this.uint32((e << 3 | t) >>> 0)
    }
    raw(e) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)),
        this.buf = []),
        this.chunks.push(e),
        this
    }
    uint32(e) {
        for (Ki(e); e > 127; )
            this.buf.push(e & 127 | 128),
            e = e >>> 7;
        return this.buf.push(e),
        this
    }
    int32(e) {
        return In(e),
        ts(e, this.buf),
        this
    }
    bool(e) {
        return this.buf.push(e ? 1 : 0),
        this
    }
    bytes(e) {
        return this.uint32(e.byteLength),
        this.raw(e)
    }
    string(e) {
        let t = this.textEncoder.encode(e);
        return this.uint32(t.byteLength),
        this.raw(t)
    }
    float(e) {
        Bo(e);
        let t = new Uint8Array(4);
        return new DataView(t.buffer).setFloat32(0, e, !0),
        this.raw(t)
    }
    double(e) {
        let t = new Uint8Array(8);
        return new DataView(t.buffer).setFloat64(0, e, !0),
        this.raw(t)
    }
    fixed32(e) {
        Ki(e);
        let t = new Uint8Array(4);
        return new DataView(t.buffer).setUint32(0, e, !0),
        this.raw(t)
    }
    sfixed32(e) {
        In(e);
        let t = new Uint8Array(4);
        return new DataView(t.buffer).setInt32(0, e, !0),
        this.raw(t)
    }
    sint32(e) {
        return In(e),
        e = (e << 1 ^ e >> 31) >>> 0,
        ts(e, this.buf),
        this
    }
    sfixed64(e) {
        let t = new Uint8Array(8)
          , i = new DataView(t.buffer)
          , r = te.enc(e);
        return i.setInt32(0, r.lo, !0),
        i.setInt32(4, r.hi, !0),
        this.raw(t)
    }
    fixed64(e) {
        let t = new Uint8Array(8)
          , i = new DataView(t.buffer)
          , r = te.uEnc(e);
        return i.setInt32(0, r.lo, !0),
        i.setInt32(4, r.hi, !0),
        this.raw(t)
    }
    int64(e) {
        let t = te.enc(e);
        return mi(t.lo, t.hi, this.buf),
        this
    }
    sint64(e) {
        let t = te.enc(e)
          , i = t.hi >> 31
          , r = t.lo << 1 ^ i
          , s = (t.hi << 1 | t.lo >>> 31) ^ i;
        return mi(r, s, this.buf),
        this
    }
    uint64(e) {
        let t = te.uEnc(e);
        return mi(t.lo, t.hi, this.buf),
        this
    }
}
class Iu {
    constructor(e, t) {
        this.varint64 = Cu,
        this.uint32 = Eu,
        this.buf = e,
        this.len = e.length,
        this.pos = 0,
        this.view = new DataView(e.buffer,e.byteOffset,e.byteLength),
        this.textDecoder = t ?? new TextDecoder
    }
    tag() {
        let e = this.uint32()
          , t = e >>> 3
          , i = e & 7;
        if (t <= 0 || i < 0 || i > 5)
            throw new Error("illegal tag: field no " + t + " wire type " + i);
        return [t, i]
    }
    skip(e, t) {
        let i = this.pos;
        switch (e) {
        case de.Varint:
            for (; this.buf[this.pos++] & 128; )
                ;
            break;
        case de.Bit64:
            this.pos += 4;
        case de.Bit32:
            this.pos += 4;
            break;
        case de.LengthDelimited:
            let r = this.uint32();
            this.pos += r;
            break;
        case de.StartGroup:
            for (; ; ) {
                const [s,o] = this.tag();
                if (o === de.EndGroup) {
                    if (t !== void 0 && s !== t)
                        throw new Error("invalid end group tag");
                    break
                }
                this.skip(o, s)
            }
            break;
        default:
            throw new Error("cant skip wire type " + e)
        }
        return this.assertBounds(),
        this.buf.subarray(i, this.pos)
    }
    assertBounds() {
        if (this.pos > this.len)
            throw new RangeError("premature EOF")
    }
    int32() {
        return this.uint32() | 0
    }
    sint32() {
        let e = this.uint32();
        return e >>> 1 ^ -(e & 1)
    }
    int64() {
        return te.dec(...this.varint64())
    }
    uint64() {
        return te.uDec(...this.varint64())
    }
    sint64() {
        let[e,t] = this.varint64()
          , i = -(e & 1);
        return e = (e >>> 1 | (t & 1) << 31) ^ i,
        t = t >>> 1 ^ i,
        te.dec(e, t)
    }
    bool() {
        let[e,t] = this.varint64();
        return e !== 0 || t !== 0
    }
    fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, !0)
    }
    sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, !0)
    }
    fixed64() {
        return te.uDec(this.sfixed32(), this.sfixed32())
    }
    sfixed64() {
        return te.dec(this.sfixed32(), this.sfixed32())
    }
    float() {
        return this.view.getFloat32((this.pos += 4) - 4, !0)
    }
    double() {
        return this.view.getFloat64((this.pos += 8) - 8, !0)
    }
    bytes() {
        let e = this.uint32()
          , t = this.pos;
        return this.pos += e,
        this.assertBounds(),
        this.buf.subarray(t, t + e)
    }
    string() {
        return this.textDecoder.decode(this.bytes())
    }
}
function xu(n, e, t, i) {
    let r;
    return {
        typeName: e,
        extendee: t,
        get field() {
            if (!r) {
                const s = typeof i == "function" ? i() : i;
                s.name = e.split(".").pop(),
                s.jsonName = "[".concat(e, "]"),
                r = n.util.newFieldList([s]).list()[0]
            }
            return r
        },
        runtime: n
    }
}
function Qo(n) {
    const e = n.field.localName
      , t = Object.create(null);
    return t[e] = Au(n),
    [t, () => t[e]]
}
function Au(n) {
    const e = n.field;
    if (e.repeated)
        return [];
    if (e.default !== void 0)
        return e.default;
    switch (e.kind) {
    case "enum":
        return e.T.values[0].no;
    case "scalar":
        return zt(e.T, e.L);
    case "message":
        const t = e.T
          , i = new t;
        return t.fieldWrapper ? t.fieldWrapper.unwrapField(i) : i;
    case "map":
        throw "map fields are not allowed to be extensions"
    }
}
function Du(n, e) {
    if (!e.repeated && (e.kind == "enum" || e.kind == "scalar")) {
        for (let t = n.length - 1; t >= 0; --t)
            if (n[t].no == e.no)
                return [n[t]];
        return []
    }
    return n.filter(t => t.no === e.no)
}
let Ze = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("")
  , ai = [];
for (let n = 0; n < Ze.length; n++)
    ai[Ze[n].charCodeAt(0)] = n;
ai[45] = Ze.indexOf("+");
ai[95] = Ze.indexOf("/");
const Yo = {
    dec(n) {
        let e = n.length * 3 / 4;
        n[n.length - 2] == "=" ? e -= 2 : n[n.length - 1] == "=" && (e -= 1);
        let t = new Uint8Array(e), i = 0, r = 0, s, o = 0;
        for (let a = 0; a < n.length; a++) {
            if (s = ai[n.charCodeAt(a)],
            s === void 0)
                switch (n[a]) {
                case "=":
                    r = 0;
                case `
`:
                case "\r":
                case "	":
                case " ":
                    continue;
                default:
                    throw Error("invalid base64 string.")
                }
            switch (r) {
            case 0:
                o = s,
                r = 1;
                break;
            case 1:
                t[i++] = o << 2 | (s & 48) >> 4,
                o = s,
                r = 2;
                break;
            case 2:
                t[i++] = (o & 15) << 4 | (s & 60) >> 2,
                o = s,
                r = 3;
                break;
            case 3:
                t[i++] = (o & 3) << 6 | s,
                r = 0;
                break
            }
        }
        if (r == 1)
            throw Error("invalid base64 string.");
        return t.subarray(0, i)
    },
    enc(n) {
        let e = "", t = 0, i, r = 0;
        for (let s = 0; s < n.length; s++)
            switch (i = n[s],
            t) {
            case 0:
                e += Ze[i >> 2],
                r = (i & 3) << 4,
                t = 1;
                break;
            case 1:
                e += Ze[r | i >> 4],
                r = (i & 15) << 2,
                t = 2;
                break;
            case 2:
                e += Ze[r | i >> 6],
                e += Ze[i & 63],
                t = 0;
                break
            }
        return t && (e += Ze[r],
        e += "=",
        t == 1 && (e += "=")),
        e
    }
};
function Mu(n, e, t) {
    Xo(e, n);
    const i = e.runtime.bin.makeReadOptions(t)
      , r = Du(n.getType().runtime.bin.listUnknownFields(n), e.field)
      , [s,o] = Qo(e);
    for (const a of r)
        e.runtime.bin.readField(s, i.readerFactory(a.data), e.field, a.wireType, i);
    return o()
}
function Ou(n, e, t, i) {
    Xo(e, n);
    const r = e.runtime.bin.makeReadOptions(i)
      , s = e.runtime.bin.makeWriteOptions(i);
    if ($o(n, e)) {
        const d = n.getType().runtime.bin.listUnknownFields(n).filter(u => u.no != e.field.no);
        n.getType().runtime.bin.discardUnknownFields(n);
        for (const u of d)
            n.getType().runtime.bin.onUnknownField(n, u.no, u.wireType, u.data)
    }
    const o = s.writerFactory();
    let a = e.field;
    !a.opt && !a.repeated && (a.kind == "enum" || a.kind == "scalar") && (a = Object.assign(Object.assign({}, e.field), {
        opt: !0
    })),
    e.runtime.bin.writeField(a, t, o, s);
    const c = r.readerFactory(o.finish());
    for (; c.pos < c.len; ) {
        const [d,u] = c.tag()
          , l = c.skip(u, d);
        n.getType().runtime.bin.onUnknownField(n, d, u, l)
    }
}
function $o(n, e) {
    const t = n.getType();
    return e.extendee.typeName === t.typeName && !!t.runtime.bin.listUnknownFields(n).find(i => i.no == e.field.no)
}
function Xo(n, e) {
    ae(n.extendee.typeName == e.getType().typeName, "extension ".concat(n.typeName, " can only be applied to message ").concat(n.extendee.typeName))
}
function Zo(n, e) {
    const t = n.localName;
    if (n.repeated)
        return e[t].length > 0;
    if (n.oneof)
        return e[n.oneof.localName].case === t;
    switch (n.kind) {
    case "enum":
    case "scalar":
        return n.opt || n.req ? e[t] !== void 0 : n.kind == "enum" ? e[t] !== n.T.values[0].no : !Jo(n.T, e[t]);
    case "message":
        return e[t] !== void 0;
    case "map":
        return Object.keys(e[t]).length > 0
    }
}
function ns(n, e) {
    const t = n.localName
      , i = !n.opt && !n.req;
    if (n.repeated)
        e[t] = [];
    else if (n.oneof)
        e[n.oneof.localName] = {
            case: void 0
        };
    else
        switch (n.kind) {
        case "map":
            e[t] = {};
            break;
        case "enum":
            e[t] = i ? n.T.values[0].no : void 0;
            break;
        case "scalar":
            e[t] = i ? zt(n.T, n.L) : void 0;
            break;
        case "message":
            e[t] = void 0;
            break
        }
}
function gt(n, e) {
    if (n === null || typeof n != "object" || !Object.getOwnPropertyNames(Sr.prototype).every(i => i in n && typeof n[i] == "function"))
        return !1;
    const t = n.getType();
    return t === null || typeof t != "function" || !("typeName"in t) || typeof t.typeName != "string" ? !1 : e === void 0 ? !0 : t.typeName == e.typeName
}
function ea(n, e) {
    return gt(e) || !n.fieldWrapper ? e : n.fieldWrapper.wrapField(e)
}
R.DOUBLE,
R.FLOAT,
R.INT64,
R.UINT64,
R.INT32,
R.UINT32,
R.BOOL,
R.STRING,
R.BYTES;
const is = {
    ignoreUnknownFields: !1
}
  , rs = {
    emitDefaultValues: !1,
    enumAsInteger: !1,
    useProtoFieldName: !1,
    prettySpaces: 0
};
function Nu(n) {
    return n ? Object.assign(Object.assign({}, is), n) : is
}
function Lu(n) {
    return n ? Object.assign(Object.assign({}, rs), n) : rs
}
const Hn = Symbol()
  , An = Symbol();
function Uu() {
    return {
        makeReadOptions: Nu,
        makeWriteOptions: Lu,
        readMessage(n, e, t, i) {
            if (e == null || Array.isArray(e) || typeof e != "object")
                throw new Error("cannot decode message ".concat(n.typeName, " from JSON: ").concat(Ke(e)));
            i = i ?? new n;
            const r = new Map
              , s = t.typeRegistry;
            for (const [o,a] of Object.entries(e)) {
                const c = n.fields.findJsonName(o);
                if (c) {
                    if (c.oneof) {
                        if (a === null && c.kind == "scalar")
                            continue;
                        const d = r.get(c.oneof);
                        if (d !== void 0)
                            throw new Error("cannot decode message ".concat(n.typeName, ' from JSON: multiple keys for oneof "').concat(c.oneof.name, '" present: "').concat(d, '", "').concat(o, '"'));
                        r.set(c.oneof, o)
                    }
                    ss(i, a, c, t, n)
                } else {
                    let d = !1;
                    if (s?.findExtension && o.startsWith("[") && o.endsWith("]")) {
                        const u = s.findExtension(o.substring(1, o.length - 1));
                        if (u && u.extendee.typeName == n.typeName) {
                            d = !0;
                            const [l,h] = Qo(u);
                            ss(l, a, u.field, t, u),
                            Ou(i, u, h(), t)
                        }
                    }
                    if (!d && !t.ignoreUnknownFields)
                        throw new Error("cannot decode message ".concat(n.typeName, ' from JSON: key "').concat(o, '" is unknown'))
                }
            }
            return i
        },
        writeMessage(n, e) {
            const t = n.getType()
              , i = {};
            let r;
            try {
                for (r of t.fields.byNumber()) {
                    if (!Zo(r, n)) {
                        if (r.req)
                            throw "required field not set";
                        if (!e.emitDefaultValues || !ju(r))
                            continue
                    }
                    const o = r.oneof ? n[r.oneof.localName].value : n[r.localName]
                      , a = os(r, o, e);
                    a !== void 0 && (i[e.useProtoFieldName ? r.name : r.jsonName] = a)
                }
                const s = e.typeRegistry;
                if (s?.findExtensionFor)
                    for (const o of t.runtime.bin.listUnknownFields(n)) {
                        const a = s.findExtensionFor(t.typeName, o.no);
                        if (a && $o(n, a)) {
                            const c = Mu(n, a, e)
                              , d = os(a.field, c, e);
                            d !== void 0 && (i[a.field.jsonName] = d)
                        }
                    }
            } catch (s) {
                const o = r ? "cannot encode field ".concat(t.typeName, ".").concat(r.name, " to JSON") : "cannot encode message ".concat(t.typeName, " to JSON")
                  , a = s instanceof Error ? s.message : String(s);
                throw new Error(o + (a.length > 0 ? ": ".concat(a) : ""))
            }
            return i
        },
        readScalar(n, e, t) {
            return on(n, e, t ?? ht.BIGINT, !0)
        },
        writeScalar(n, e, t) {
            if (e !== void 0 && (t || Jo(n, e)))
                return Dn(n, e)
        },
        debug: Ke
    }
}
function Ke(n) {
    if (n === null)
        return "null";
    switch (typeof n) {
    case "object":
        return Array.isArray(n) ? "array" : "object";
    case "string":
        return n.length > 100 ? "string" : '"'.concat(n.split('"').join('\\"'), '"');
    default:
        return String(n)
    }
}
function ss(n, e, t, i, r) {
    let s = t.localName;
    if (t.repeated) {
        if (ae(t.kind != "map"),
        e === null)
            return;
        if (!Array.isArray(e))
            throw new Error("cannot decode field ".concat(r.typeName, ".").concat(t.name, " from JSON: ").concat(Ke(e)));
        const o = n[s];
        for (const a of e) {
            if (a === null)
                throw new Error("cannot decode field ".concat(r.typeName, ".").concat(t.name, " from JSON: ").concat(Ke(a)));
            switch (t.kind) {
            case "message":
                o.push(t.T.fromJson(a, i));
                break;
            case "enum":
                const c = gi(t.T, a, i.ignoreUnknownFields, !0);
                c !== An && o.push(c);
                break;
            case "scalar":
                try {
                    o.push(on(t.T, a, t.L, !0))
                } catch (d) {
                    let u = "cannot decode field ".concat(r.typeName, ".").concat(t.name, " from JSON: ").concat(Ke(a));
                    throw d instanceof Error && d.message.length > 0 && (u += ": ".concat(d.message)),
                    new Error(u)
                }
                break
            }
        }
    } else if (t.kind == "map") {
        if (e === null)
            return;
        if (typeof e != "object" || Array.isArray(e))
            throw new Error("cannot decode field ".concat(r.typeName, ".").concat(t.name, " from JSON: ").concat(Ke(e)));
        const o = n[s];
        for (const [a,c] of Object.entries(e)) {
            if (c === null)
                throw new Error("cannot decode field ".concat(r.typeName, ".").concat(t.name, " from JSON: map value null"));
            let d;
            try {
                d = Fu(t.K, a)
            } catch (u) {
                let l = "cannot decode map key for field ".concat(r.typeName, ".").concat(t.name, " from JSON: ").concat(Ke(e));
                throw u instanceof Error && u.message.length > 0 && (l += ": ".concat(u.message)),
                new Error(l)
            }
            switch (t.V.kind) {
            case "message":
                o[d] = t.V.T.fromJson(c, i);
                break;
            case "enum":
                const u = gi(t.V.T, c, i.ignoreUnknownFields, !0);
                u !== An && (o[d] = u);
                break;
            case "scalar":
                try {
                    o[d] = on(t.V.T, c, ht.BIGINT, !0)
                } catch (l) {
                    let h = "cannot decode map value for field ".concat(r.typeName, ".").concat(t.name, " from JSON: ").concat(Ke(e));
                    throw l instanceof Error && l.message.length > 0 && (h += ": ".concat(l.message)),
                    new Error(h)
                }
                break
            }
        }
    } else
        switch (t.oneof && (n = n[t.oneof.localName] = {
            case: s
        },
        s = "value"),
        t.kind) {
        case "message":
            const o = t.T;
            if (e === null && o.typeName != "google.protobuf.Value")
                return;
            let a = n[s];
            gt(a) ? a.fromJson(e, i) : (n[s] = a = o.fromJson(e, i),
            o.fieldWrapper && !t.oneof && (n[s] = o.fieldWrapper.unwrapField(a)));
            break;
        case "enum":
            const c = gi(t.T, e, i.ignoreUnknownFields, !1);
            switch (c) {
            case Hn:
                ns(t, n);
                break;
            case An:
                break;
            default:
                n[s] = c;
                break
            }
            break;
        case "scalar":
            try {
                const d = on(t.T, e, t.L, !1);
                switch (d) {
                case Hn:
                    ns(t, n);
                    break;
                default:
                    n[s] = d;
                    break
                }
            } catch (d) {
                let u = "cannot decode field ".concat(r.typeName, ".").concat(t.name, " from JSON: ").concat(Ke(e));
                throw d instanceof Error && d.message.length > 0 && (u += ": ".concat(d.message)),
                new Error(u)
            }
            break
        }
}
function Fu(n, e) {
    if (n === R.BOOL)
        switch (e) {
        case "true":
            e = !0;
            break;
        case "false":
            e = !1;
            break
        }
    return on(n, e, ht.BIGINT, !0).toString()
}
function on(n, e, t, i) {
    if (e === null)
        return i ? zt(n, t) : Hn;
    switch (n) {
    case R.DOUBLE:
    case R.FLOAT:
        if (e === "NaN")
            return Number.NaN;
        if (e === "Infinity")
            return Number.POSITIVE_INFINITY;
        if (e === "-Infinity")
            return Number.NEGATIVE_INFINITY;
        if (e === "" || typeof e == "string" && e.trim().length !== e.length || typeof e != "string" && typeof e != "number")
            break;
        const r = Number(e);
        if (Number.isNaN(r) || !Number.isFinite(r))
            break;
        return n == R.FLOAT && Bo(r),
        r;
    case R.INT32:
    case R.FIXED32:
    case R.SFIXED32:
    case R.SINT32:
    case R.UINT32:
        let s;
        if (typeof e == "number" ? s = e : typeof e == "string" && e.length > 0 && e.trim().length === e.length && (s = Number(e)),
        s === void 0)
            break;
        return n == R.UINT32 || n == R.FIXED32 ? Ki(s) : In(s),
        s;
    case R.INT64:
    case R.SFIXED64:
    case R.SINT64:
        if (typeof e != "number" && typeof e != "string")
            break;
        const o = te.parse(e);
        return t ? o.toString() : o;
    case R.FIXED64:
    case R.UINT64:
        if (typeof e != "number" && typeof e != "string")
            break;
        const a = te.uParse(e);
        return t ? a.toString() : a;
    case R.BOOL:
        if (typeof e != "boolean")
            break;
        return e;
    case R.STRING:
        if (typeof e != "string")
            break;
        try {
            encodeURIComponent(e)
        } catch {
            throw new Error("invalid UTF8")
        }
        return e;
    case R.BYTES:
        if (e === "")
            return new Uint8Array(0);
        if (typeof e != "string")
            break;
        return Yo.dec(e)
    }
    throw new Error
}
function gi(n, e, t, i) {
    if (e === null)
        return n.typeName == "google.protobuf.NullValue" ? 0 : i ? n.values[0].no : Hn;
    switch (typeof e) {
    case "number":
        if (Number.isInteger(e))
            return e;
        break;
    case "string":
        const r = n.findName(e);
        if (r !== void 0)
            return r.no;
        if (t)
            return An;
        break
    }
    throw new Error("cannot decode enum ".concat(n.typeName, " from JSON: ").concat(Ke(e)))
}
function ju(n) {
    return n.repeated || n.kind == "map" ? !0 : !(n.oneof || n.kind == "message" || n.opt || n.req)
}
function os(n, e, t) {
    if (n.kind == "map") {
        ae(typeof e == "object" && e != null);
        const i = {}
          , r = Object.entries(e);
        switch (n.V.kind) {
        case "scalar":
            for (const [o,a] of r)
                i[o.toString()] = Dn(n.V.T, a);
            break;
        case "message":
            for (const [o,a] of r)
                i[o.toString()] = a.toJson(t);
            break;
        case "enum":
            const s = n.V.T;
            for (const [o,a] of r)
                i[o.toString()] = vi(s, a, t.enumAsInteger);
            break
        }
        return t.emitDefaultValues || r.length > 0 ? i : void 0
    }
    if (n.repeated) {
        ae(Array.isArray(e));
        const i = [];
        switch (n.kind) {
        case "scalar":
            for (let r = 0; r < e.length; r++)
                i.push(Dn(n.T, e[r]));
            break;
        case "enum":
            for (let r = 0; r < e.length; r++)
                i.push(vi(n.T, e[r], t.enumAsInteger));
            break;
        case "message":
            for (let r = 0; r < e.length; r++)
                i.push(e[r].toJson(t));
            break
        }
        return t.emitDefaultValues || i.length > 0 ? i : void 0
    }
    switch (n.kind) {
    case "scalar":
        return Dn(n.T, e);
    case "enum":
        return vi(n.T, e, t.enumAsInteger);
    case "message":
        return ea(n.T, e).toJson(t)
    }
}
function vi(n, e, t) {
    var i;
    if (ae(typeof e == "number"),
    n.typeName == "google.protobuf.NullValue")
        return null;
    if (t)
        return e;
    const r = n.findNumber(e);
    return (i = r?.name) !== null && i !== void 0 ? i : e
}
function Dn(n, e) {
    switch (n) {
    case R.INT32:
    case R.SFIXED32:
    case R.SINT32:
    case R.FIXED32:
    case R.UINT32:
        return ae(typeof e == "number"),
        e;
    case R.FLOAT:
    case R.DOUBLE:
        return ae(typeof e == "number"),
        Number.isNaN(e) ? "NaN" : e === Number.POSITIVE_INFINITY ? "Infinity" : e === Number.NEGATIVE_INFINITY ? "-Infinity" : e;
    case R.STRING:
        return ae(typeof e == "string"),
        e;
    case R.BOOL:
        return ae(typeof e == "boolean"),
        e;
    case R.UINT64:
    case R.FIXED64:
    case R.INT64:
    case R.SFIXED64:
    case R.SINT64:
        return ae(typeof e == "bigint" || typeof e == "string" || typeof e == "number"),
        e.toString();
    case R.BYTES:
        return ae(e instanceof Uint8Array),
        Yo.enc(e)
    }
}
const Rt = Symbol("@bufbuild/protobuf/unknown-fields")
  , as = {
    readUnknownFields: !0,
    readerFactory: n => new Iu(n)
}
  , cs = {
    writeUnknownFields: !0,
    writerFactory: () => new _u
};
function Vu(n) {
    return n ? Object.assign(Object.assign({}, as), n) : as
}
function Bu(n) {
    return n ? Object.assign(Object.assign({}, cs), n) : cs
}
function qu() {
    return {
        makeReadOptions: Vu,
        makeWriteOptions: Bu,
        listUnknownFields(n) {
            var e;
            return (e = n[Rt]) !== null && e !== void 0 ? e : []
        },
        discardUnknownFields(n) {
            delete n[Rt]
        },
        writeUnknownFields(n, e) {
            const i = n[Rt];
            if (i)
                for (const r of i)
                    e.tag(r.no, r.wireType).raw(r.data)
        },
        onUnknownField(n, e, t, i) {
            const r = n;
            Array.isArray(r[Rt]) || (r[Rt] = []),
            r[Rt].push({
                no: e,
                wireType: t,
                data: i
            })
        },
        readMessage(n, e, t, i, r) {
            const s = n.getType()
              , o = r ? e.len : e.pos + t;
            let a, c;
            for (; e.pos < o && ([a,c] = e.tag(),
            !(r === !0 && c == de.EndGroup)); ) {
                const d = s.fields.find(a);
                if (!d) {
                    const u = e.skip(c, a);
                    i.readUnknownFields && this.onUnknownField(n, a, c, u);
                    continue
                }
                ds(n, e, d, c, i)
            }
            if (r && (c != de.EndGroup || a !== t))
                throw new Error("invalid end group tag")
        },
        readField: ds,
        writeMessage(n, e, t) {
            const i = n.getType();
            for (const r of i.fields.byNumber()) {
                if (!Zo(r, n)) {
                    if (r.req)
                        throw new Error("cannot encode field ".concat(i.typeName, ".").concat(r.name, " to binary: required field not set"));
                    continue
                }
                const s = r.oneof ? n[r.oneof.localName].value : n[r.localName];
                us(r, s, e, t)
            }
            return t.writeUnknownFields && this.writeUnknownFields(n, e),
            e
        },
        writeField(n, e, t, i) {
            e !== void 0 && us(n, e, t, i)
        }
    }
}
function ds(n, e, t, i, r) {
    let {repeated: s, localName: o} = t;
    switch (t.oneof && (n = n[t.oneof.localName],
    n.case != o && delete n.value,
    n.case = o,
    o = "value"),
    t.kind) {
    case "scalar":
    case "enum":
        const a = t.kind == "enum" ? R.INT32 : t.T;
        let c = Jn;
        if (t.kind == "scalar" && t.L > 0 && (c = Wu),
        s) {
            let h = n[o];
            if (i == de.LengthDelimited && a != R.STRING && a != R.BYTES) {
                let v = e.uint32() + e.pos;
                for (; e.pos < v; )
                    h.push(c(e, a))
            } else
                h.push(c(e, a))
        } else
            n[o] = c(e, a);
        break;
    case "message":
        const d = t.T;
        s ? n[o].push(Mn(e, new d, r, t)) : gt(n[o]) ? Mn(e, n[o], r, t) : (n[o] = Mn(e, new d, r, t),
        d.fieldWrapper && !t.oneof && !t.repeated && (n[o] = d.fieldWrapper.unwrapField(n[o])));
        break;
    case "map":
        let[u,l] = zu(t, e, r);
        n[o][u] = l;
        break
    }
}
function Mn(n, e, t, i) {
    const r = e.getType().runtime.bin
      , s = i?.delimited;
    return r.readMessage(e, n, s ? i.no : n.uint32(), t, s),
    e
}
function zu(n, e, t) {
    const i = e.uint32()
      , r = e.pos + i;
    let s, o;
    for (; e.pos < r; ) {
        const [a] = e.tag();
        switch (a) {
        case 1:
            s = Jn(e, n.K);
            break;
        case 2:
            switch (n.V.kind) {
            case "scalar":
                o = Jn(e, n.V.T);
                break;
            case "enum":
                o = e.int32();
                break;
            case "message":
                o = Mn(e, new n.V.T, t, void 0);
                break
            }
            break
        }
    }
    if (s === void 0 && (s = zt(n.K, ht.BIGINT)),
    typeof s != "string" && typeof s != "number" && (s = s.toString()),
    o === void 0)
        switch (n.V.kind) {
        case "scalar":
            o = zt(n.V.T, ht.BIGINT);
            break;
        case "enum":
            o = n.V.T.values[0].no;
            break;
        case "message":
            o = new n.V.T;
            break
        }
    return [s, o]
}
function Wu(n, e) {
    const t = Jn(n, e);
    return typeof t == "bigint" ? t.toString() : t
}
function Jn(n, e) {
    switch (e) {
    case R.STRING:
        return n.string();
    case R.BOOL:
        return n.bool();
    case R.DOUBLE:
        return n.double();
    case R.FLOAT:
        return n.float();
    case R.INT32:
        return n.int32();
    case R.INT64:
        return n.int64();
    case R.UINT64:
        return n.uint64();
    case R.FIXED64:
        return n.fixed64();
    case R.BYTES:
        return n.bytes();
    case R.FIXED32:
        return n.fixed32();
    case R.SFIXED32:
        return n.sfixed32();
    case R.SFIXED64:
        return n.sfixed64();
    case R.SINT64:
        return n.sint64();
    case R.UINT32:
        return n.uint32();
    case R.SINT32:
        return n.sint32()
    }
}
function us(n, e, t, i) {
    ae(e !== void 0);
    const r = n.repeated;
    switch (n.kind) {
    case "scalar":
    case "enum":
        let s = n.kind == "enum" ? R.INT32 : n.T;
        if (r)
            if (ae(Array.isArray(e)),
            n.packed)
                Ku(t, s, n.no, e);
            else
                for (const o of e)
                    an(t, s, n.no, o);
        else
            an(t, s, n.no, e);
        break;
    case "message":
        if (r) {
            ae(Array.isArray(e));
            for (const o of e)
                ls(t, i, n, o)
        } else
            ls(t, i, n, e);
        break;
    case "map":
        ae(typeof e == "object" && e != null);
        for (const [o,a] of Object.entries(e))
            Gu(t, i, n, o, a);
        break
    }
}
function Gu(n, e, t, i, r) {
    n.tag(t.no, de.LengthDelimited),
    n.fork();
    let s = i;
    switch (t.K) {
    case R.INT32:
    case R.FIXED32:
    case R.UINT32:
    case R.SFIXED32:
    case R.SINT32:
        s = Number.parseInt(i);
        break;
    case R.BOOL:
        ae(i == "true" || i == "false"),
        s = i == "true";
        break
    }
    switch (an(n, t.K, 1, s),
    t.V.kind) {
    case "scalar":
        an(n, t.V.T, 2, r);
        break;
    case "enum":
        an(n, R.INT32, 2, r);
        break;
    case "message":
        ae(r !== void 0),
        n.tag(2, de.LengthDelimited).bytes(r.toBinary(e));
        break
    }
    n.join()
}
function ls(n, e, t, i) {
    const r = ea(t.T, i);
    t.delimited ? n.tag(t.no, de.StartGroup).raw(r.toBinary(e)).tag(t.no, de.EndGroup) : n.tag(t.no, de.LengthDelimited).bytes(r.toBinary(e))
}
function an(n, e, t, i) {
    ae(i !== void 0);
    let[r,s] = ta(e);
    n.tag(t, r)[s](i)
}
function Ku(n, e, t, i) {
    if (!i.length)
        return;
    n.tag(t, de.LengthDelimited).fork();
    let[,r] = ta(e);
    for (let s = 0; s < i.length; s++)
        n[r](i[s]);
    n.join()
}
function ta(n) {
    let e = de.Varint;
    switch (n) {
    case R.BYTES:
    case R.STRING:
        e = de.LengthDelimited;
        break;
    case R.DOUBLE:
    case R.FIXED64:
    case R.SFIXED64:
        e = de.Bit64;
        break;
    case R.FIXED32:
    case R.SFIXED32:
    case R.FLOAT:
        e = de.Bit32;
        break
    }
    const t = R[n].toLowerCase();
    return [e, t]
}
function Hu() {
    return {
        setEnumType: zo,
        initPartial(n, e) {
            if (n === void 0)
                return;
            const t = e.getType();
            for (const i of t.fields.byMember()) {
                const r = i.localName
                  , s = e
                  , o = n;
                if (o[r] != null)
                    switch (i.kind) {
                    case "oneof":
                        const a = o[r].case;
                        if (a === void 0)
                            continue;
                        const c = i.findField(a);
                        let d = o[r].value;
                        c && c.kind == "message" && !gt(d, c.T) ? d = new c.T(d) : c && c.kind === "scalar" && c.T === R.BYTES && (d = Yt(d)),
                        s[r] = {
                            case: a,
                            value: d
                        };
                        break;
                    case "scalar":
                    case "enum":
                        let u = o[r];
                        i.T === R.BYTES && (u = i.repeated ? u.map(Yt) : Yt(u)),
                        s[r] = u;
                        break;
                    case "map":
                        switch (i.V.kind) {
                        case "scalar":
                        case "enum":
                            if (i.V.T === R.BYTES)
                                for (const [f,v] of Object.entries(o[r]))
                                    s[r][f] = Yt(v);
                            else
                                Object.assign(s[r], o[r]);
                            break;
                        case "message":
                            const h = i.V.T;
                            for (const f of Object.keys(o[r])) {
                                let v = o[r][f];
                                h.fieldWrapper || (v = new h(v)),
                                s[r][f] = v
                            }
                            break
                        }
                        break;
                    case "message":
                        const l = i.T;
                        if (i.repeated)
                            s[r] = o[r].map(h => gt(h, l) ? h : new l(h));
                        else {
                            const h = o[r];
                            l.fieldWrapper ? l.typeName === "google.protobuf.BytesValue" ? s[r] = Yt(h) : s[r] = h : s[r] = gt(h, l) ? h : new l(h)
                        }
                        break
                    }
            }
        },
        equals(n, e, t) {
            return e === t ? !0 : !e || !t ? !1 : n.fields.byMember().every(i => {
                const r = e[i.localName]
                  , s = t[i.localName];
                if (i.repeated) {
                    if (r.length !== s.length)
                        return !1;
                    switch (i.kind) {
                    case "message":
                        return r.every( (o, a) => i.T.equals(o, s[a]));
                    case "scalar":
                        return r.every( (o, a) => at(i.T, o, s[a]));
                    case "enum":
                        return r.every( (o, a) => at(R.INT32, o, s[a]))
                    }
                    throw new Error("repeated cannot contain ".concat(i.kind))
                }
                switch (i.kind) {
                case "message":
                    return i.T.equals(r, s);
                case "enum":
                    return at(R.INT32, r, s);
                case "scalar":
                    return at(i.T, r, s);
                case "oneof":
                    if (r.case !== s.case)
                        return !1;
                    const o = i.findField(r.case);
                    if (o === void 0)
                        return !0;
                    switch (o.kind) {
                    case "message":
                        return o.T.equals(r.value, s.value);
                    case "enum":
                        return at(R.INT32, r.value, s.value);
                    case "scalar":
                        return at(o.T, r.value, s.value)
                    }
                    throw new Error("oneof cannot contain ".concat(o.kind));
                case "map":
                    const a = Object.keys(r).concat(Object.keys(s));
                    switch (i.V.kind) {
                    case "message":
                        const c = i.V.T;
                        return a.every(u => c.equals(r[u], s[u]));
                    case "enum":
                        return a.every(u => at(R.INT32, r[u], s[u]));
                    case "scalar":
                        const d = i.V.T;
                        return a.every(u => at(d, r[u], s[u]))
                    }
                    break
                }
            }
            )
        },
        clone(n) {
            const e = n.getType()
              , t = new e
              , i = t;
            for (const r of e.fields.byMember()) {
                const s = n[r.localName];
                let o;
                if (r.repeated)
                    o = s.map(Pn);
                else if (r.kind == "map") {
                    o = i[r.localName];
                    for (const [a,c] of Object.entries(s))
                        o[a] = Pn(c)
                } else
                    r.kind == "oneof" ? o = r.findField(s.case) ? {
                        case: s.case,
                        value: Pn(s.value)
                    } : {
                        case: void 0
                    } : o = Pn(s);
                i[r.localName] = o
            }
            for (const r of e.runtime.bin.listUnknownFields(n))
                e.runtime.bin.onUnknownField(i, r.no, r.wireType, r.data);
            return t
        }
    }
}
function Pn(n) {
    if (n === void 0)
        return n;
    if (gt(n))
        return n.clone();
    if (n instanceof Uint8Array) {
        const e = new Uint8Array(n.byteLength);
        return e.set(n),
        e
    }
    return n
}
function Yt(n) {
    return n instanceof Uint8Array ? n : new Uint8Array(n)
}
function Ju(n, e, t) {
    return {
        syntax: n,
        json: Uu(),
        bin: qu(),
        util: Object.assign(Object.assign({}, Hu()), {
            newFieldList: e,
            initFields: t
        }),
        makeMessageType(i, r, s) {
            return Tu(this, i, r, s)
        },
        makeEnum: Su,
        makeEnumType: Wo,
        getEnumType: ku,
        makeExtension(i, r, s) {
            return xu(this, i, r, s)
        }
    }
}
class Qu {
    constructor(e, t) {
        this._fields = e,
        this._normalizer = t
    }
    findJsonName(e) {
        if (!this.jsonNames) {
            const t = {};
            for (const i of this.list())
                t[i.jsonName] = t[i.name] = i;
            this.jsonNames = t
        }
        return this.jsonNames[e]
    }
    find(e) {
        if (!this.numbers) {
            const t = {};
            for (const i of this.list())
                t[i.no] = i;
            this.numbers = t
        }
        return this.numbers[e]
    }
    list() {
        return this.all || (this.all = this._normalizer(this._fields)),
        this.all
    }
    byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort( (e, t) => e.no - t.no)),
        this.numbersAsc
    }
    byMember() {
        if (!this.members) {
            this.members = [];
            const e = this.members;
            let t;
            for (const i of this.list())
                i.oneof ? i.oneof !== t && (t = i.oneof,
                e.push(t)) : e.push(i)
        }
        return this.members
    }
}
function na(n, e) {
    const t = ia(n);
    return e ? t : tl(el(t))
}
function Yu(n) {
    return na(n, !1)
}
const $u = ia;
function ia(n) {
    let e = !1;
    const t = [];
    for (let i = 0; i < n.length; i++) {
        let r = n.charAt(i);
        switch (r) {
        case "_":
            e = !0;
            break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            t.push(r),
            e = !1;
            break;
        default:
            e && (e = !1,
            r = r.toUpperCase()),
            t.push(r);
            break
        }
    }
    return t.join("")
}
const Xu = new Set(["constructor", "toString", "toJSON", "valueOf"])
  , Zu = new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"])
  , ra = n => "".concat(n, "$")
  , el = n => Zu.has(n) ? ra(n) : n
  , tl = n => Xu.has(n) ? ra(n) : n;
class nl {
    constructor(e) {
        this.kind = "oneof",
        this.repeated = !1,
        this.packed = !1,
        this.opt = !1,
        this.req = !1,
        this.default = void 0,
        this.fields = [],
        this.name = e,
        this.localName = Yu(e)
    }
    addField(e) {
        ae(e.oneof === this, "field ".concat(e.name, " not one of ").concat(this.name)),
        this.fields.push(e)
    }
    findField(e) {
        if (!this._lookup) {
            this._lookup = Object.create(null);
            for (let t = 0; t < this.fields.length; t++)
                this._lookup[this.fields[t].localName] = this.fields[t]
        }
        return this._lookup[e]
    }
}
function il(n, e) {
    var t, i, r, s, o, a;
    const c = [];
    let d;
    for (const u of typeof n == "function" ? n() : n) {
        const l = u;
        if (l.localName = na(u.name, u.oneof !== void 0),
        l.jsonName = (t = u.jsonName) !== null && t !== void 0 ? t : $u(u.name),
        l.repeated = (i = u.repeated) !== null && i !== void 0 ? i : !1,
        u.kind == "scalar" && (l.L = (r = u.L) !== null && r !== void 0 ? r : ht.BIGINT),
        l.delimited = (s = u.delimited) !== null && s !== void 0 ? s : !1,
        l.req = (o = u.req) !== null && o !== void 0 ? o : !1,
        l.opt = (a = u.opt) !== null && a !== void 0 ? a : !1,
        u.packed === void 0 && (l.packed = u.kind == "enum" || u.kind == "scalar" && u.T != R.BYTES && u.T != R.STRING),
        u.oneof !== void 0) {
            const h = typeof u.oneof == "string" ? u.oneof : u.oneof.name;
            (!d || d.name != h) && (d = new nl(h)),
            l.oneof = d,
            d.addField(l)
        }
        c.push(l)
    }
    return c
}
const C = Ju("proto3", n => new Qu(n,e => il(e)), n => {
    for (const e of n.getType().fields.byMember()) {
        if (e.opt)
            continue;
        const t = e.localName
          , i = n;
        if (e.repeated) {
            i[t] = [];
            continue
        }
        switch (e.kind) {
        case "oneof":
            i[t] = {
                case: void 0
            };
            break;
        case "enum":
            i[t] = 0;
            break;
        case "map":
            i[t] = {};
            break;
        case "scalar":
            i[t] = zt(e.T, e.L);
            break
        }
    }
}
);
class Ce extends Sr {
    constructor(e) {
        super(),
        this.seconds = te.zero,
        this.nanos = 0,
        C.util.initPartial(e, this)
    }
    fromJson(e, t) {
        if (typeof e != "string")
            throw new Error("cannot decode google.protobuf.Timestamp from JSON: ".concat(C.json.debug(e)));
        const i = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!i)
            throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const r = Date.parse(i[1] + "-" + i[2] + "-" + i[3] + "T" + i[4] + ":" + i[5] + ":" + i[6] + (i[8] ? i[8] : "Z"));
        if (Number.isNaN(r))
            throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (r < Date.parse("0001-01-01T00:00:00Z") || r > Date.parse("9999-12-31T23:59:59Z"))
            throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = te.parse(r / 1e3),
        this.nanos = 0,
        i[7] && (this.nanos = parseInt("1" + i[7] + "0".repeat(9 - i[7].length)) - 1e9),
        this
    }
    toJson(e) {
        const t = Number(this.seconds) * 1e3;
        if (t < Date.parse("0001-01-01T00:00:00Z") || t > Date.parse("9999-12-31T23:59:59Z"))
            throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0)
            throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let i = "Z";
        if (this.nanos > 0) {
            const r = (this.nanos + 1e9).toString().substring(1);
            r.substring(3) === "000000" ? i = "." + r.substring(0, 3) + "Z" : r.substring(6) === "000" ? i = "." + r.substring(0, 6) + "Z" : i = "." + r + "Z"
        }
        return new Date(t).toISOString().replace(".000Z", i)
    }
    toDate() {
        return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6))
    }
    static now() {
        return Ce.fromDate(new Date)
    }
    static fromDate(e) {
        const t = e.getTime();
        return new Ce({
            seconds: te.parse(Math.floor(t / 1e3)),
            nanos: t % 1e3 * 1e6
        })
    }
    static fromBinary(e, t) {
        return new Ce().fromBinary(e, t)
    }
    static fromJson(e, t) {
        return new Ce().fromJson(e, t)
    }
    static fromJsonString(e, t) {
        return new Ce().fromJsonString(e, t)
    }
    static equals(e, t) {
        return C.util.equals(Ce, e, t)
    }
}
Ce.runtime = C;
Ce.typeName = "google.protobuf.Timestamp";
Ce.fields = C.util.newFieldList( () => [{
    no: 1,
    name: "seconds",
    kind: "scalar",
    T: 3
}, {
    no: 2,
    name: "nanos",
    kind: "scalar",
    T: 5
}]);
const rl = C.makeMessageType("livekit.MetricsBatch", () => [{
    no: 1,
    name: "timestamp_ms",
    kind: "scalar",
    T: 3
}, {
    no: 2,
    name: "normalized_timestamp",
    kind: "message",
    T: Ce
}, {
    no: 3,
    name: "str_data",
    kind: "scalar",
    T: 9,
    repeated: !0
}, {
    no: 4,
    name: "time_series",
    kind: "message",
    T: sl,
    repeated: !0
}, {
    no: 5,
    name: "events",
    kind: "message",
    T: al,
    repeated: !0
}])
  , sl = C.makeMessageType("livekit.TimeSeriesMetric", () => [{
    no: 1,
    name: "label",
    kind: "scalar",
    T: 13
}, {
    no: 2,
    name: "participant_identity",
    kind: "scalar",
    T: 13
}, {
    no: 3,
    name: "track_sid",
    kind: "scalar",
    T: 13
}, {
    no: 4,
    name: "samples",
    kind: "message",
    T: ol,
    repeated: !0
}, {
    no: 5,
    name: "rid",
    kind: "scalar",
    T: 13
}])
  , ol = C.makeMessageType("livekit.MetricSample", () => [{
    no: 1,
    name: "timestamp_ms",
    kind: "scalar",
    T: 3
}, {
    no: 2,
    name: "normalized_timestamp",
    kind: "message",
    T: Ce
}, {
    no: 3,
    name: "value",
    kind: "scalar",
    T: 2
}])
  , al = C.makeMessageType("livekit.EventMetric", () => [{
    no: 1,
    name: "label",
    kind: "scalar",
    T: 13
}, {
    no: 2,
    name: "participant_identity",
    kind: "scalar",
    T: 13
}, {
    no: 3,
    name: "track_sid",
    kind: "scalar",
    T: 13
}, {
    no: 4,
    name: "start_timestamp_ms",
    kind: "scalar",
    T: 3
}, {
    no: 5,
    name: "end_timestamp_ms",
    kind: "scalar",
    T: 3,
    opt: !0
}, {
    no: 6,
    name: "normalized_start_timestamp",
    kind: "message",
    T: Ce
}, {
    no: 7,
    name: "normalized_end_timestamp",
    kind: "message",
    T: Ce,
    opt: !0
}, {
    no: 8,
    name: "metadata",
    kind: "scalar",
    T: 9
}, {
    no: 9,
    name: "rid",
    kind: "scalar",
    T: 13
}])
  , Ue = C.makeEnum("livekit.TrackType", [{
    no: 0,
    name: "AUDIO"
}, {
    no: 1,
    name: "VIDEO"
}, {
    no: 2,
    name: "DATA"
}])
  , ye = C.makeEnum("livekit.TrackSource", [{
    no: 0,
    name: "UNKNOWN"
}, {
    no: 1,
    name: "CAMERA"
}, {
    no: 2,
    name: "MICROPHONE"
}, {
    no: 3,
    name: "SCREEN_SHARE"
}, {
    no: 4,
    name: "SCREEN_SHARE_AUDIO"
}])
  , Cr = C.makeEnum("livekit.VideoQuality", [{
    no: 0,
    name: "LOW"
}, {
    no: 1,
    name: "MEDIUM"
}, {
    no: 2,
    name: "HIGH"
}, {
    no: 3,
    name: "OFF"
}])
  , rn = C.makeEnum("livekit.ConnectionQuality", [{
    no: 0,
    name: "POOR"
}, {
    no: 1,
    name: "GOOD"
}, {
    no: 2,
    name: "EXCELLENT"
}, {
    no: 3,
    name: "LOST"
}])
  , fn = C.makeEnum("livekit.ClientConfigSetting", [{
    no: 0,
    name: "UNSET"
}, {
    no: 1,
    name: "DISABLED"
}, {
    no: 2,
    name: "ENABLED"
}])
  , Lt = C.makeEnum("livekit.DisconnectReason", [{
    no: 0,
    name: "UNKNOWN_REASON"
}, {
    no: 1,
    name: "CLIENT_INITIATED"
}, {
    no: 2,
    name: "DUPLICATE_IDENTITY"
}, {
    no: 3,
    name: "SERVER_SHUTDOWN"
}, {
    no: 4,
    name: "PARTICIPANT_REMOVED"
}, {
    no: 5,
    name: "ROOM_DELETED"
}, {
    no: 6,
    name: "STATE_MISMATCH"
}, {
    no: 7,
    name: "JOIN_FAILURE"
}, {
    no: 8,
    name: "MIGRATION"
}, {
    no: 9,
    name: "SIGNAL_CLOSE"
}, {
    no: 10,
    name: "ROOM_CLOSED"
}, {
    no: 11,
    name: "USER_UNAVAILABLE"
}, {
    no: 12,
    name: "USER_REJECTED"
}])
  , _t = C.makeEnum("livekit.ReconnectReason", [{
    no: 0,
    name: "RR_UNKNOWN"
}, {
    no: 1,
    name: "RR_SIGNAL_DISCONNECTED"
}, {
    no: 2,
    name: "RR_PUBLISHER_FAILED"
}, {
    no: 3,
    name: "RR_SUBSCRIBER_FAILED"
}, {
    no: 4,
    name: "RR_SWITCH_CANDIDATE"
}])
  , cl = C.makeEnum("livekit.SubscriptionError", [{
    no: 0,
    name: "SE_UNKNOWN"
}, {
    no: 1,
    name: "SE_CODEC_UNSUPPORTED"
}, {
    no: 2,
    name: "SE_TRACK_NOTFOUND"
}])
  , He = C.makeEnum("livekit.AudioTrackFeature", [{
    no: 0,
    name: "TF_STEREO"
}, {
    no: 1,
    name: "TF_NO_DTX"
}, {
    no: 2,
    name: "TF_AUTO_GAIN_CONTROL"
}, {
    no: 3,
    name: "TF_ECHO_CANCELLATION"
}, {
    no: 4,
    name: "TF_NOISE_SUPPRESSION"
}, {
    no: 5,
    name: "TF_ENHANCED_NOISE_CANCELLATION"
}])
  , wr = C.makeMessageType("livekit.Room", () => [{
    no: 1,
    name: "sid",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "name",
    kind: "scalar",
    T: 9
}, {
    no: 3,
    name: "empty_timeout",
    kind: "scalar",
    T: 13
}, {
    no: 14,
    name: "departure_timeout",
    kind: "scalar",
    T: 13
}, {
    no: 4,
    name: "max_participants",
    kind: "scalar",
    T: 13
}, {
    no: 5,
    name: "creation_time",
    kind: "scalar",
    T: 3
}, {
    no: 6,
    name: "turn_password",
    kind: "scalar",
    T: 9
}, {
    no: 7,
    name: "enabled_codecs",
    kind: "message",
    T: Qn,
    repeated: !0
}, {
    no: 8,
    name: "metadata",
    kind: "scalar",
    T: 9
}, {
    no: 9,
    name: "num_participants",
    kind: "scalar",
    T: 13
}, {
    no: 11,
    name: "num_publishers",
    kind: "scalar",
    T: 13
}, {
    no: 10,
    name: "active_recording",
    kind: "scalar",
    T: 8
}, {
    no: 13,
    name: "version",
    kind: "message",
    T: ga
}])
  , Qn = C.makeMessageType("livekit.Codec", () => [{
    no: 1,
    name: "mime",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "fmtp_line",
    kind: "scalar",
    T: 9
}])
  , dl = C.makeMessageType("livekit.ParticipantPermission", () => [{
    no: 1,
    name: "can_subscribe",
    kind: "scalar",
    T: 8
}, {
    no: 2,
    name: "can_publish",
    kind: "scalar",
    T: 8
}, {
    no: 3,
    name: "can_publish_data",
    kind: "scalar",
    T: 8
}, {
    no: 9,
    name: "can_publish_sources",
    kind: "enum",
    T: C.getEnumType(ye),
    repeated: !0
}, {
    no: 7,
    name: "hidden",
    kind: "scalar",
    T: 8
}, {
    no: 8,
    name: "recorder",
    kind: "scalar",
    T: 8
}, {
    no: 10,
    name: "can_update_metadata",
    kind: "scalar",
    T: 8
}, {
    no: 11,
    name: "agent",
    kind: "scalar",
    T: 8
}, {
    no: 12,
    name: "can_subscribe_metrics",
    kind: "scalar",
    T: 8
}])
  , pn = C.makeMessageType("livekit.ParticipantInfo", () => [{
    no: 1,
    name: "sid",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "identity",
    kind: "scalar",
    T: 9
}, {
    no: 3,
    name: "state",
    kind: "enum",
    T: C.getEnumType(Hi)
}, {
    no: 4,
    name: "tracks",
    kind: "message",
    T: Mt,
    repeated: !0
}, {
    no: 5,
    name: "metadata",
    kind: "scalar",
    T: 9
}, {
    no: 6,
    name: "joined_at",
    kind: "scalar",
    T: 3
}, {
    no: 9,
    name: "name",
    kind: "scalar",
    T: 9
}, {
    no: 10,
    name: "version",
    kind: "scalar",
    T: 13
}, {
    no: 11,
    name: "permission",
    kind: "message",
    T: dl
}, {
    no: 12,
    name: "region",
    kind: "scalar",
    T: 9
}, {
    no: 13,
    name: "is_publisher",
    kind: "scalar",
    T: 8
}, {
    no: 14,
    name: "kind",
    kind: "enum",
    T: C.getEnumType(Yn)
}, {
    no: 15,
    name: "attributes",
    kind: "map",
    K: 9,
    V: {
        kind: "scalar",
        T: 9
    }
}, {
    no: 16,
    name: "disconnect_reason",
    kind: "enum",
    T: C.getEnumType(Lt)
}])
  , Hi = C.makeEnum("livekit.ParticipantInfo.State", [{
    no: 0,
    name: "JOINING"
}, {
    no: 1,
    name: "JOINED"
}, {
    no: 2,
    name: "ACTIVE"
}, {
    no: 3,
    name: "DISCONNECTED"
}])
  , Yn = C.makeEnum("livekit.ParticipantInfo.Kind", [{
    no: 0,
    name: "STANDARD"
}, {
    no: 1,
    name: "INGRESS"
}, {
    no: 2,
    name: "EGRESS"
}, {
    no: 3,
    name: "SIP"
}, {
    no: 4,
    name: "AGENT"
}])
  , Ae = C.makeEnum("livekit.Encryption.Type", [{
    no: 0,
    name: "NONE"
}, {
    no: 1,
    name: "GCM"
}, {
    no: 2,
    name: "CUSTOM"
}])
  , ul = C.makeMessageType("livekit.SimulcastCodecInfo", () => [{
    no: 1,
    name: "mime_type",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "mid",
    kind: "scalar",
    T: 9
}, {
    no: 3,
    name: "cid",
    kind: "scalar",
    T: 9
}, {
    no: 4,
    name: "layers",
    kind: "message",
    T: vt,
    repeated: !0
}])
  , Mt = C.makeMessageType("livekit.TrackInfo", () => [{
    no: 1,
    name: "sid",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "type",
    kind: "enum",
    T: C.getEnumType(Ue)
}, {
    no: 3,
    name: "name",
    kind: "scalar",
    T: 9
}, {
    no: 4,
    name: "muted",
    kind: "scalar",
    T: 8
}, {
    no: 5,
    name: "width",
    kind: "scalar",
    T: 13
}, {
    no: 6,
    name: "height",
    kind: "scalar",
    T: 13
}, {
    no: 7,
    name: "simulcast",
    kind: "scalar",
    T: 8
}, {
    no: 8,
    name: "disable_dtx",
    kind: "scalar",
    T: 8
}, {
    no: 9,
    name: "source",
    kind: "enum",
    T: C.getEnumType(ye)
}, {
    no: 10,
    name: "layers",
    kind: "message",
    T: vt,
    repeated: !0
}, {
    no: 11,
    name: "mime_type",
    kind: "scalar",
    T: 9
}, {
    no: 12,
    name: "mid",
    kind: "scalar",
    T: 9
}, {
    no: 13,
    name: "codecs",
    kind: "message",
    T: ul,
    repeated: !0
}, {
    no: 14,
    name: "stereo",
    kind: "scalar",
    T: 8
}, {
    no: 15,
    name: "disable_red",
    kind: "scalar",
    T: 8
}, {
    no: 16,
    name: "encryption",
    kind: "enum",
    T: C.getEnumType(Ae)
}, {
    no: 17,
    name: "stream",
    kind: "scalar",
    T: 9
}, {
    no: 18,
    name: "version",
    kind: "message",
    T: ga
}, {
    no: 19,
    name: "audio_features",
    kind: "enum",
    T: C.getEnumType(He),
    repeated: !0
}])
  , vt = C.makeMessageType("livekit.VideoLayer", () => [{
    no: 1,
    name: "quality",
    kind: "enum",
    T: C.getEnumType(Cr)
}, {
    no: 2,
    name: "width",
    kind: "scalar",
    T: 13
}, {
    no: 3,
    name: "height",
    kind: "scalar",
    T: 13
}, {
    no: 4,
    name: "bitrate",
    kind: "scalar",
    T: 13
}, {
    no: 5,
    name: "ssrc",
    kind: "scalar",
    T: 13
}])
  , ct = C.makeMessageType("livekit.DataPacket", () => [{
    no: 1,
    name: "kind",
    kind: "enum",
    T: C.getEnumType(Z)
}, {
    no: 4,
    name: "participant_identity",
    kind: "scalar",
    T: 9
}, {
    no: 5,
    name: "destination_identities",
    kind: "scalar",
    T: 9,
    repeated: !0
}, {
    no: 2,
    name: "user",
    kind: "message",
    T: oa,
    oneof: "value"
}, {
    no: 3,
    name: "speaker",
    kind: "message",
    T: ll,
    oneof: "value"
}, {
    no: 6,
    name: "sip_dtmf",
    kind: "message",
    T: aa,
    oneof: "value"
}, {
    no: 7,
    name: "transcription",
    kind: "message",
    T: hl,
    oneof: "value"
}, {
    no: 8,
    name: "metrics",
    kind: "message",
    T: rl,
    oneof: "value"
}, {
    no: 9,
    name: "chat_message",
    kind: "message",
    T: Ji,
    oneof: "value"
}, {
    no: 10,
    name: "rpc_request",
    kind: "message",
    T: ca,
    oneof: "value"
}, {
    no: 11,
    name: "rpc_ack",
    kind: "message",
    T: da,
    oneof: "value"
}, {
    no: 12,
    name: "rpc_response",
    kind: "message",
    T: ua,
    oneof: "value"
}])
  , Z = C.makeEnum("livekit.DataPacket.Kind", [{
    no: 0,
    name: "RELIABLE"
}, {
    no: 1,
    name: "LOSSY"
}])
  , ll = C.makeMessageType("livekit.ActiveSpeakerUpdate", () => [{
    no: 1,
    name: "speakers",
    kind: "message",
    T: sa,
    repeated: !0
}])
  , sa = C.makeMessageType("livekit.SpeakerInfo", () => [{
    no: 1,
    name: "sid",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "level",
    kind: "scalar",
    T: 2
}, {
    no: 3,
    name: "active",
    kind: "scalar",
    T: 8
}])
  , oa = C.makeMessageType("livekit.UserPacket", () => [{
    no: 1,
    name: "participant_sid",
    kind: "scalar",
    T: 9
}, {
    no: 5,
    name: "participant_identity",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "payload",
    kind: "scalar",
    T: 12
}, {
    no: 3,
    name: "destination_sids",
    kind: "scalar",
    T: 9,
    repeated: !0
}, {
    no: 6,
    name: "destination_identities",
    kind: "scalar",
    T: 9,
    repeated: !0
}, {
    no: 4,
    name: "topic",
    kind: "scalar",
    T: 9,
    opt: !0
}, {
    no: 8,
    name: "id",
    kind: "scalar",
    T: 9,
    opt: !0
}, {
    no: 9,
    name: "start_time",
    kind: "scalar",
    T: 4,
    opt: !0
}, {
    no: 10,
    name: "end_time",
    kind: "scalar",
    T: 4,
    opt: !0
}])
  , aa = C.makeMessageType("livekit.SipDTMF", () => [{
    no: 3,
    name: "code",
    kind: "scalar",
    T: 13
}, {
    no: 4,
    name: "digit",
    kind: "scalar",
    T: 9
}])
  , hl = C.makeMessageType("livekit.Transcription", () => [{
    no: 2,
    name: "transcribed_participant_identity",
    kind: "scalar",
    T: 9
}, {
    no: 3,
    name: "track_id",
    kind: "scalar",
    T: 9
}, {
    no: 4,
    name: "segments",
    kind: "message",
    T: fl,
    repeated: !0
}])
  , fl = C.makeMessageType("livekit.TranscriptionSegment", () => [{
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "text",
    kind: "scalar",
    T: 9
}, {
    no: 3,
    name: "start_time",
    kind: "scalar",
    T: 4
}, {
    no: 4,
    name: "end_time",
    kind: "scalar",
    T: 4
}, {
    no: 5,
    name: "final",
    kind: "scalar",
    T: 8
}, {
    no: 6,
    name: "language",
    kind: "scalar",
    T: 9
}])
  , Ji = C.makeMessageType("livekit.ChatMessage", () => [{
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "timestamp",
    kind: "scalar",
    T: 3
}, {
    no: 3,
    name: "edit_timestamp",
    kind: "scalar",
    T: 3,
    opt: !0
}, {
    no: 4,
    name: "message",
    kind: "scalar",
    T: 9
}, {
    no: 5,
    name: "deleted",
    kind: "scalar",
    T: 8
}, {
    no: 6,
    name: "generated",
    kind: "scalar",
    T: 8
}])
  , ca = C.makeMessageType("livekit.RpcRequest", () => [{
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "method",
    kind: "scalar",
    T: 9
}, {
    no: 3,
    name: "payload",
    kind: "scalar",
    T: 9
}, {
    no: 4,
    name: "response_timeout_ms",
    kind: "scalar",
    T: 13
}, {
    no: 5,
    name: "version",
    kind: "scalar",
    T: 13
}])
  , da = C.makeMessageType("livekit.RpcAck", () => [{
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 9
}])
  , ua = C.makeMessageType("livekit.RpcResponse", () => [{
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "payload",
    kind: "scalar",
    T: 9,
    oneof: "value"
}, {
    no: 3,
    name: "error",
    kind: "message",
    T: la,
    oneof: "value"
}])
  , la = C.makeMessageType("livekit.RpcError", () => [{
    no: 1,
    name: "code",
    kind: "scalar",
    T: 13
}, {
    no: 2,
    name: "message",
    kind: "scalar",
    T: 9
}, {
    no: 3,
    name: "data",
    kind: "scalar",
    T: 9
}])
  , ha = C.makeMessageType("livekit.ParticipantTracks", () => [{
    no: 1,
    name: "participant_sid",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "track_sids",
    kind: "scalar",
    T: 9,
    repeated: !0
}])
  , pl = C.makeMessageType("livekit.ServerInfo", () => [{
    no: 1,
    name: "edition",
    kind: "enum",
    T: C.getEnumType(fa)
}, {
    no: 2,
    name: "version",
    kind: "scalar",
    T: 9
}, {
    no: 3,
    name: "protocol",
    kind: "scalar",
    T: 5
}, {
    no: 4,
    name: "region",
    kind: "scalar",
    T: 9
}, {
    no: 5,
    name: "node_id",
    kind: "scalar",
    T: 9
}, {
    no: 6,
    name: "debug_info",
    kind: "scalar",
    T: 9
}, {
    no: 7,
    name: "agent_protocol",
    kind: "scalar",
    T: 5
}])
  , fa = C.makeEnum("livekit.ServerInfo.Edition", [{
    no: 0,
    name: "Standard"
}, {
    no: 1,
    name: "Cloud"
}])
  , ml = C.makeMessageType("livekit.ClientInfo", () => [{
    no: 1,
    name: "sdk",
    kind: "enum",
    T: C.getEnumType(pa)
}, {
    no: 2,
    name: "version",
    kind: "scalar",
    T: 9
}, {
    no: 3,
    name: "protocol",
    kind: "scalar",
    T: 5
}, {
    no: 4,
    name: "os",
    kind: "scalar",
    T: 9
}, {
    no: 5,
    name: "os_version",
    kind: "scalar",
    T: 9
}, {
    no: 6,
    name: "device_model",
    kind: "scalar",
    T: 9
}, {
    no: 7,
    name: "browser",
    kind: "scalar",
    T: 9
}, {
    no: 8,
    name: "browser_version",
    kind: "scalar",
    T: 9
}, {
    no: 9,
    name: "address",
    kind: "scalar",
    T: 9
}, {
    no: 10,
    name: "network",
    kind: "scalar",
    T: 9
}, {
    no: 11,
    name: "other_sdks",
    kind: "scalar",
    T: 9
}])
  , pa = C.makeEnum("livekit.ClientInfo.SDK", [{
    no: 0,
    name: "UNKNOWN"
}, {
    no: 1,
    name: "JS"
}, {
    no: 2,
    name: "SWIFT"
}, {
    no: 3,
    name: "ANDROID"
}, {
    no: 4,
    name: "FLUTTER"
}, {
    no: 5,
    name: "GO"
}, {
    no: 6,
    name: "UNITY"
}, {
    no: 7,
    name: "REACT_NATIVE"
}, {
    no: 8,
    name: "RUST"
}, {
    no: 9,
    name: "PYTHON"
}, {
    no: 10,
    name: "CPP"
}, {
    no: 11,
    name: "UNITY_WEB"
}, {
    no: 12,
    name: "NODE"
}])
  , ma = C.makeMessageType("livekit.ClientConfiguration", () => [{
    no: 1,
    name: "video",
    kind: "message",
    T: hs
}, {
    no: 2,
    name: "screen",
    kind: "message",
    T: hs
}, {
    no: 3,
    name: "resume_connection",
    kind: "enum",
    T: C.getEnumType(fn)
}, {
    no: 4,
    name: "disabled_codecs",
    kind: "message",
    T: gl
}, {
    no: 5,
    name: "force_relay",
    kind: "enum",
    T: C.getEnumType(fn)
}])
  , hs = C.makeMessageType("livekit.VideoConfiguration", () => [{
    no: 1,
    name: "hardware_encoder",
    kind: "enum",
    T: C.getEnumType(fn)
}])
  , gl = C.makeMessageType("livekit.DisabledCodecs", () => [{
    no: 1,
    name: "codecs",
    kind: "message",
    T: Qn,
    repeated: !0
}, {
    no: 2,
    name: "publish",
    kind: "message",
    T: Qn,
    repeated: !0
}])
  , ga = C.makeMessageType("livekit.TimedVersion", () => [{
    no: 1,
    name: "unix_micro",
    kind: "scalar",
    T: 3
}, {
    no: 2,
    name: "ticks",
    kind: "scalar",
    T: 5
}])
  , Fe = C.makeEnum("livekit.SignalTarget", [{
    no: 0,
    name: "PUBLISHER"
}, {
    no: 1,
    name: "SUBSCRIBER"
}])
  , Qi = C.makeEnum("livekit.StreamState", [{
    no: 0,
    name: "ACTIVE"
}, {
    no: 1,
    name: "PAUSED"
}])
  , vl = C.makeEnum("livekit.CandidateProtocol", [{
    no: 0,
    name: "UDP"
}, {
    no: 1,
    name: "TCP"
}, {
    no: 2,
    name: "TLS"
}])
  , bl = C.makeMessageType("livekit.SignalRequest", () => [{
    no: 1,
    name: "offer",
    kind: "message",
    T: yt,
    oneof: "message"
}, {
    no: 2,
    name: "answer",
    kind: "message",
    T: yt,
    oneof: "message"
}, {
    no: 3,
    name: "trickle",
    kind: "message",
    T: Pr,
    oneof: "message"
}, {
    no: 4,
    name: "add_track",
    kind: "message",
    T: $i,
    oneof: "message"
}, {
    no: 5,
    name: "mute",
    kind: "message",
    T: Er,
    oneof: "message"
}, {
    no: 6,
    name: "subscription",
    kind: "message",
    T: ci,
    oneof: "message"
}, {
    no: 7,
    name: "track_setting",
    kind: "message",
    T: va,
    oneof: "message"
}, {
    no: 8,
    name: "leave",
    kind: "message",
    T: di,
    oneof: "message"
}, {
    no: 10,
    name: "update_layers",
    kind: "message",
    T: ya,
    oneof: "message"
}, {
    no: 11,
    name: "subscription_permission",
    kind: "message",
    T: Ca,
    oneof: "message"
}, {
    no: 12,
    name: "sync_state",
    kind: "message",
    T: wa,
    oneof: "message"
}, {
    no: 13,
    name: "simulate",
    kind: "message",
    T: Ge,
    oneof: "message"
}, {
    no: 14,
    name: "ping",
    kind: "scalar",
    T: 3,
    oneof: "message"
}, {
    no: 15,
    name: "update_metadata",
    kind: "message",
    T: ka,
    oneof: "message"
}, {
    no: 16,
    name: "ping_req",
    kind: "message",
    T: Ea,
    oneof: "message"
}, {
    no: 17,
    name: "update_audio_track",
    kind: "message",
    T: ba,
    oneof: "message"
}, {
    no: 18,
    name: "update_video_track",
    kind: "message",
    T: Cl,
    oneof: "message"
}])
  , fs = C.makeMessageType("livekit.SignalResponse", () => [{
    no: 1,
    name: "join",
    kind: "message",
    T: yl,
    oneof: "message"
}, {
    no: 2,
    name: "answer",
    kind: "message",
    T: yt,
    oneof: "message"
}, {
    no: 3,
    name: "offer",
    kind: "message",
    T: yt,
    oneof: "message"
}, {
    no: 4,
    name: "trickle",
    kind: "message",
    T: Pr,
    oneof: "message"
}, {
    no: 5,
    name: "update",
    kind: "message",
    T: Tl,
    oneof: "message"
}, {
    no: 6,
    name: "track_published",
    kind: "message",
    T: Rr,
    oneof: "message"
}, {
    no: 8,
    name: "leave",
    kind: "message",
    T: di,
    oneof: "message"
}, {
    no: 9,
    name: "mute",
    kind: "message",
    T: Er,
    oneof: "message"
}, {
    no: 10,
    name: "speakers_changed",
    kind: "message",
    T: wl,
    oneof: "message"
}, {
    no: 11,
    name: "room_update",
    kind: "message",
    T: Pl,
    oneof: "message"
}, {
    no: 12,
    name: "connection_quality",
    kind: "message",
    T: Rl,
    oneof: "message"
}, {
    no: 13,
    name: "stream_state_update",
    kind: "message",
    T: Il,
    oneof: "message"
}, {
    no: 14,
    name: "subscribed_quality_update",
    kind: "message",
    T: Al,
    oneof: "message"
}, {
    no: 15,
    name: "subscription_permission_update",
    kind: "message",
    T: Dl,
    oneof: "message"
}, {
    no: 16,
    name: "refresh_token",
    kind: "scalar",
    T: 9,
    oneof: "message"
}, {
    no: 17,
    name: "track_unpublished",
    kind: "message",
    T: Sl,
    oneof: "message"
}, {
    no: 18,
    name: "pong",
    kind: "scalar",
    T: 3,
    oneof: "message"
}, {
    no: 19,
    name: "reconnect",
    kind: "message",
    T: kl,
    oneof: "message"
}, {
    no: 20,
    name: "pong_resp",
    kind: "message",
    T: Ml,
    oneof: "message"
}, {
    no: 21,
    name: "subscription_response",
    kind: "message",
    T: Ll,
    oneof: "message"
}, {
    no: 22,
    name: "request_response",
    kind: "message",
    T: Ul,
    oneof: "message"
}, {
    no: 23,
    name: "track_subscribed",
    kind: "message",
    T: Fl,
    oneof: "message"
}])
  , Yi = C.makeMessageType("livekit.SimulcastCodec", () => [{
    no: 1,
    name: "codec",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "cid",
    kind: "scalar",
    T: 9
}])
  , $i = C.makeMessageType("livekit.AddTrackRequest", () => [{
    no: 1,
    name: "cid",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "name",
    kind: "scalar",
    T: 9
}, {
    no: 3,
    name: "type",
    kind: "enum",
    T: C.getEnumType(Ue)
}, {
    no: 4,
    name: "width",
    kind: "scalar",
    T: 13
}, {
    no: 5,
    name: "height",
    kind: "scalar",
    T: 13
}, {
    no: 6,
    name: "muted",
    kind: "scalar",
    T: 8
}, {
    no: 7,
    name: "disable_dtx",
    kind: "scalar",
    T: 8
}, {
    no: 8,
    name: "source",
    kind: "enum",
    T: C.getEnumType(ye)
}, {
    no: 9,
    name: "layers",
    kind: "message",
    T: vt,
    repeated: !0
}, {
    no: 10,
    name: "simulcast_codecs",
    kind: "message",
    T: Yi,
    repeated: !0
}, {
    no: 11,
    name: "sid",
    kind: "scalar",
    T: 9
}, {
    no: 12,
    name: "stereo",
    kind: "scalar",
    T: 8
}, {
    no: 13,
    name: "disable_red",
    kind: "scalar",
    T: 8
}, {
    no: 14,
    name: "encryption",
    kind: "enum",
    T: C.getEnumType(Ae)
}, {
    no: 15,
    name: "stream",
    kind: "scalar",
    T: 9
}])
  , Pr = C.makeMessageType("livekit.TrickleRequest", () => [{
    no: 1,
    name: "candidateInit",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "target",
    kind: "enum",
    T: C.getEnumType(Fe)
}, {
    no: 3,
    name: "final",
    kind: "scalar",
    T: 8
}])
  , Er = C.makeMessageType("livekit.MuteTrackRequest", () => [{
    no: 1,
    name: "sid",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "muted",
    kind: "scalar",
    T: 8
}])
  , yl = C.makeMessageType("livekit.JoinResponse", () => [{
    no: 1,
    name: "room",
    kind: "message",
    T: wr
}, {
    no: 2,
    name: "participant",
    kind: "message",
    T: pn
}, {
    no: 3,
    name: "other_participants",
    kind: "message",
    T: pn,
    repeated: !0
}, {
    no: 4,
    name: "server_version",
    kind: "scalar",
    T: 9
}, {
    no: 5,
    name: "ice_servers",
    kind: "message",
    T: Sa,
    repeated: !0
}, {
    no: 6,
    name: "subscriber_primary",
    kind: "scalar",
    T: 8
}, {
    no: 7,
    name: "alternative_url",
    kind: "scalar",
    T: 9
}, {
    no: 8,
    name: "client_configuration",
    kind: "message",
    T: ma
}, {
    no: 9,
    name: "server_region",
    kind: "scalar",
    T: 9
}, {
    no: 10,
    name: "ping_timeout",
    kind: "scalar",
    T: 5
}, {
    no: 11,
    name: "ping_interval",
    kind: "scalar",
    T: 5
}, {
    no: 12,
    name: "server_info",
    kind: "message",
    T: pl
}, {
    no: 13,
    name: "sif_trailer",
    kind: "scalar",
    T: 12
}, {
    no: 14,
    name: "enabled_publish_codecs",
    kind: "message",
    T: Qn,
    repeated: !0
}, {
    no: 15,
    name: "fast_publish",
    kind: "scalar",
    T: 8
}])
  , kl = C.makeMessageType("livekit.ReconnectResponse", () => [{
    no: 1,
    name: "ice_servers",
    kind: "message",
    T: Sa,
    repeated: !0
}, {
    no: 2,
    name: "client_configuration",
    kind: "message",
    T: ma
}])
  , Rr = C.makeMessageType("livekit.TrackPublishedResponse", () => [{
    no: 1,
    name: "cid",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "track",
    kind: "message",
    T: Mt
}])
  , Sl = C.makeMessageType("livekit.TrackUnpublishedResponse", () => [{
    no: 1,
    name: "track_sid",
    kind: "scalar",
    T: 9
}])
  , yt = C.makeMessageType("livekit.SessionDescription", () => [{
    no: 1,
    name: "type",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "sdp",
    kind: "scalar",
    T: 9
}])
  , Tl = C.makeMessageType("livekit.ParticipantUpdate", () => [{
    no: 1,
    name: "participants",
    kind: "message",
    T: pn,
    repeated: !0
}])
  , ci = C.makeMessageType("livekit.UpdateSubscription", () => [{
    no: 1,
    name: "track_sids",
    kind: "scalar",
    T: 9,
    repeated: !0
}, {
    no: 2,
    name: "subscribe",
    kind: "scalar",
    T: 8
}, {
    no: 3,
    name: "participant_tracks",
    kind: "message",
    T: ha,
    repeated: !0
}])
  , va = C.makeMessageType("livekit.UpdateTrackSettings", () => [{
    no: 1,
    name: "track_sids",
    kind: "scalar",
    T: 9,
    repeated: !0
}, {
    no: 3,
    name: "disabled",
    kind: "scalar",
    T: 8
}, {
    no: 4,
    name: "quality",
    kind: "enum",
    T: C.getEnumType(Cr)
}, {
    no: 5,
    name: "width",
    kind: "scalar",
    T: 13
}, {
    no: 6,
    name: "height",
    kind: "scalar",
    T: 13
}, {
    no: 7,
    name: "fps",
    kind: "scalar",
    T: 13
}, {
    no: 8,
    name: "priority",
    kind: "scalar",
    T: 13
}])
  , ba = C.makeMessageType("livekit.UpdateLocalAudioTrack", () => [{
    no: 1,
    name: "track_sid",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "features",
    kind: "enum",
    T: C.getEnumType(He),
    repeated: !0
}])
  , Cl = C.makeMessageType("livekit.UpdateLocalVideoTrack", () => [{
    no: 1,
    name: "track_sid",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "width",
    kind: "scalar",
    T: 13
}, {
    no: 3,
    name: "height",
    kind: "scalar",
    T: 13
}])
  , di = C.makeMessageType("livekit.LeaveRequest", () => [{
    no: 1,
    name: "can_reconnect",
    kind: "scalar",
    T: 8
}, {
    no: 2,
    name: "reason",
    kind: "enum",
    T: C.getEnumType(Lt)
}, {
    no: 3,
    name: "action",
    kind: "enum",
    T: C.getEnumType(Ut)
}, {
    no: 4,
    name: "regions",
    kind: "message",
    T: Ol
}])
  , Ut = C.makeEnum("livekit.LeaveRequest.Action", [{
    no: 0,
    name: "DISCONNECT"
}, {
    no: 1,
    name: "RESUME"
}, {
    no: 2,
    name: "RECONNECT"
}])
  , ya = C.makeMessageType("livekit.UpdateVideoLayers", () => [{
    no: 1,
    name: "track_sid",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "layers",
    kind: "message",
    T: vt,
    repeated: !0
}])
  , ka = C.makeMessageType("livekit.UpdateParticipantMetadata", () => [{
    no: 1,
    name: "metadata",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "name",
    kind: "scalar",
    T: 9
}, {
    no: 3,
    name: "attributes",
    kind: "map",
    K: 9,
    V: {
        kind: "scalar",
        T: 9
    }
}, {
    no: 4,
    name: "request_id",
    kind: "scalar",
    T: 13
}])
  , Sa = C.makeMessageType("livekit.ICEServer", () => [{
    no: 1,
    name: "urls",
    kind: "scalar",
    T: 9,
    repeated: !0
}, {
    no: 2,
    name: "username",
    kind: "scalar",
    T: 9
}, {
    no: 3,
    name: "credential",
    kind: "scalar",
    T: 9
}])
  , wl = C.makeMessageType("livekit.SpeakersChanged", () => [{
    no: 1,
    name: "speakers",
    kind: "message",
    T: sa,
    repeated: !0
}])
  , Pl = C.makeMessageType("livekit.RoomUpdate", () => [{
    no: 1,
    name: "room",
    kind: "message",
    T: wr
}])
  , El = C.makeMessageType("livekit.ConnectionQualityInfo", () => [{
    no: 1,
    name: "participant_sid",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "quality",
    kind: "enum",
    T: C.getEnumType(rn)
}, {
    no: 3,
    name: "score",
    kind: "scalar",
    T: 2
}])
  , Rl = C.makeMessageType("livekit.ConnectionQualityUpdate", () => [{
    no: 1,
    name: "updates",
    kind: "message",
    T: El,
    repeated: !0
}])
  , _l = C.makeMessageType("livekit.StreamStateInfo", () => [{
    no: 1,
    name: "participant_sid",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "track_sid",
    kind: "scalar",
    T: 9
}, {
    no: 3,
    name: "state",
    kind: "enum",
    T: C.getEnumType(Qi)
}])
  , Il = C.makeMessageType("livekit.StreamStateUpdate", () => [{
    no: 1,
    name: "stream_states",
    kind: "message",
    T: _l,
    repeated: !0
}])
  , _r = C.makeMessageType("livekit.SubscribedQuality", () => [{
    no: 1,
    name: "quality",
    kind: "enum",
    T: C.getEnumType(Cr)
}, {
    no: 2,
    name: "enabled",
    kind: "scalar",
    T: 8
}])
  , xl = C.makeMessageType("livekit.SubscribedCodec", () => [{
    no: 1,
    name: "codec",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "qualities",
    kind: "message",
    T: _r,
    repeated: !0
}])
  , Al = C.makeMessageType("livekit.SubscribedQualityUpdate", () => [{
    no: 1,
    name: "track_sid",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "subscribed_qualities",
    kind: "message",
    T: _r,
    repeated: !0
}, {
    no: 3,
    name: "subscribed_codecs",
    kind: "message",
    T: xl,
    repeated: !0
}])
  , Ta = C.makeMessageType("livekit.TrackPermission", () => [{
    no: 1,
    name: "participant_sid",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "all_tracks",
    kind: "scalar",
    T: 8
}, {
    no: 3,
    name: "track_sids",
    kind: "scalar",
    T: 9,
    repeated: !0
}, {
    no: 4,
    name: "participant_identity",
    kind: "scalar",
    T: 9
}])
  , Ca = C.makeMessageType("livekit.SubscriptionPermission", () => [{
    no: 1,
    name: "all_participants",
    kind: "scalar",
    T: 8
}, {
    no: 2,
    name: "track_permissions",
    kind: "message",
    T: Ta,
    repeated: !0
}])
  , Dl = C.makeMessageType("livekit.SubscriptionPermissionUpdate", () => [{
    no: 1,
    name: "participant_sid",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "track_sid",
    kind: "scalar",
    T: 9
}, {
    no: 3,
    name: "allowed",
    kind: "scalar",
    T: 8
}])
  , wa = C.makeMessageType("livekit.SyncState", () => [{
    no: 1,
    name: "answer",
    kind: "message",
    T: yt
}, {
    no: 2,
    name: "subscription",
    kind: "message",
    T: ci
}, {
    no: 3,
    name: "publish_tracks",
    kind: "message",
    T: Rr,
    repeated: !0
}, {
    no: 4,
    name: "data_channels",
    kind: "message",
    T: Pa,
    repeated: !0
}, {
    no: 5,
    name: "offer",
    kind: "message",
    T: yt
}, {
    no: 6,
    name: "track_sids_disabled",
    kind: "scalar",
    T: 9,
    repeated: !0
}])
  , Pa = C.makeMessageType("livekit.DataChannelInfo", () => [{
    no: 1,
    name: "label",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "id",
    kind: "scalar",
    T: 13
}, {
    no: 3,
    name: "target",
    kind: "enum",
    T: C.getEnumType(Fe)
}])
  , Ge = C.makeMessageType("livekit.SimulateScenario", () => [{
    no: 1,
    name: "speaker_update",
    kind: "scalar",
    T: 5,
    oneof: "scenario"
}, {
    no: 2,
    name: "node_failure",
    kind: "scalar",
    T: 8,
    oneof: "scenario"
}, {
    no: 3,
    name: "migration",
    kind: "scalar",
    T: 8,
    oneof: "scenario"
}, {
    no: 4,
    name: "server_leave",
    kind: "scalar",
    T: 8,
    oneof: "scenario"
}, {
    no: 5,
    name: "switch_candidate_protocol",
    kind: "enum",
    T: C.getEnumType(vl),
    oneof: "scenario"
}, {
    no: 6,
    name: "subscriber_bandwidth",
    kind: "scalar",
    T: 3,
    oneof: "scenario"
}, {
    no: 7,
    name: "disconnect_signal_on_resume",
    kind: "scalar",
    T: 8,
    oneof: "scenario"
}, {
    no: 8,
    name: "disconnect_signal_on_resume_no_messages",
    kind: "scalar",
    T: 8,
    oneof: "scenario"
}, {
    no: 9,
    name: "leave_request_full_reconnect",
    kind: "scalar",
    T: 8,
    oneof: "scenario"
}])
  , Ea = C.makeMessageType("livekit.Ping", () => [{
    no: 1,
    name: "timestamp",
    kind: "scalar",
    T: 3
}, {
    no: 2,
    name: "rtt",
    kind: "scalar",
    T: 3
}])
  , Ml = C.makeMessageType("livekit.Pong", () => [{
    no: 1,
    name: "last_ping_timestamp",
    kind: "scalar",
    T: 3
}, {
    no: 2,
    name: "timestamp",
    kind: "scalar",
    T: 3
}])
  , Ol = C.makeMessageType("livekit.RegionSettings", () => [{
    no: 1,
    name: "regions",
    kind: "message",
    T: Nl,
    repeated: !0
}])
  , Nl = C.makeMessageType("livekit.RegionInfo", () => [{
    no: 1,
    name: "region",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "url",
    kind: "scalar",
    T: 9
}, {
    no: 3,
    name: "distance",
    kind: "scalar",
    T: 3
}])
  , Ll = C.makeMessageType("livekit.SubscriptionResponse", () => [{
    no: 1,
    name: "track_sid",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "err",
    kind: "enum",
    T: C.getEnumType(cl)
}])
  , Ul = C.makeMessageType("livekit.RequestResponse", () => [{
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 13
}, {
    no: 2,
    name: "reason",
    kind: "enum",
    T: C.getEnumType(Ra)
}, {
    no: 3,
    name: "message",
    kind: "scalar",
    T: 9
}])
  , Ra = C.makeEnum("livekit.RequestResponse.Reason", [{
    no: 0,
    name: "OK"
}, {
    no: 1,
    name: "NOT_FOUND"
}, {
    no: 2,
    name: "NOT_ALLOWED"
}, {
    no: 3,
    name: "LIMIT_EXCEEDED"
}])
  , Fl = C.makeMessageType("livekit.TrackSubscribed", () => [{
    no: 1,
    name: "track_sid",
    kind: "scalar",
    T: 9
}]);
function jl(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var On = {
    exports: {}
}, Vl = On.exports, ps;
function Bl() {
    return ps || (ps = 1,
    function(n) {
        (function(e, t) {
            n.exports ? n.exports = t() : e.log = t()
        }
        )(Vl, function() {
            var e = function() {}
              , t = "undefined"
              , i = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent)
              , r = ["trace", "debug", "info", "warn", "error"]
              , s = {}
              , o = null;
            function a(p, y) {
                var g = p[y];
                if (typeof g.bind == "function")
                    return g.bind(p);
                try {
                    return Function.prototype.bind.call(g, p)
                } catch {
                    return function() {
                        return Function.prototype.apply.apply(g, [p, arguments])
                    }
                }
            }
            function c() {
                console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])),
                console.trace && console.trace()
            }
            function d(p) {
                return p === "debug" && (p = "log"),
                typeof console === t ? !1 : p === "trace" && i ? c : console[p] !== void 0 ? a(console, p) : console.log !== void 0 ? a(console, "log") : e
            }
            function u() {
                for (var p = this.getLevel(), y = 0; y < r.length; y++) {
                    var g = r[y];
                    this[g] = y < p ? e : this.methodFactory(g, p, this.name)
                }
                if (this.log = this.debug,
                typeof console === t && p < this.levels.SILENT)
                    return "No console available for logging"
            }
            function l(p) {
                return function() {
                    typeof console !== t && (u.call(this),
                    this[p].apply(this, arguments))
                }
            }
            function h(p, y, g) {
                return d(p) || l.apply(this, arguments)
            }
            function f(p, y) {
                var g = this, x, _, S, b = "loglevel";
                typeof p == "string" ? b += ":" + p : typeof p == "symbol" && (b = void 0);
                function w(I) {
                    var M = (r[I] || "silent").toUpperCase();
                    if (!(typeof window === t || !b)) {
                        try {
                            window.localStorage[b] = M;
                            return
                        } catch {}
                        try {
                            window.document.cookie = encodeURIComponent(b) + "=" + M + ";"
                        } catch {}
                    }
                }
                function D() {
                    var I;
                    if (!(typeof window === t || !b)) {
                        try {
                            I = window.localStorage[b]
                        } catch {}
                        if (typeof I === t)
                            try {
                                var M = window.document.cookie
                                  , X = encodeURIComponent(b)
                                  , z = M.indexOf(X + "=");
                                z !== -1 && (I = /^([^;]+)/.exec(M.slice(z + X.length + 1))[1])
                            } catch {}
                        return g.levels[I] === void 0 && (I = void 0),
                        I
                    }
                }
                function N() {
                    if (!(typeof window === t || !b)) {
                        try {
                            window.localStorage.removeItem(b)
                        } catch {}
                        try {
                            window.document.cookie = encodeURIComponent(b) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                        } catch {}
                    }
                }
                function U(I) {
                    var M = I;
                    if (typeof M == "string" && g.levels[M.toUpperCase()] !== void 0 && (M = g.levels[M.toUpperCase()]),
                    typeof M == "number" && M >= 0 && M <= g.levels.SILENT)
                        return M;
                    throw new TypeError("log.setLevel() called with invalid level: " + I)
                }
                g.name = p,
                g.levels = {
                    TRACE: 0,
                    DEBUG: 1,
                    INFO: 2,
                    WARN: 3,
                    ERROR: 4,
                    SILENT: 5
                },
                g.methodFactory = y || h,
                g.getLevel = function() {
                    return S ?? _ ?? x
                }
                ,
                g.setLevel = function(I, M) {
                    return S = U(I),
                    M !== !1 && w(S),
                    u.call(g)
                }
                ,
                g.setDefaultLevel = function(I) {
                    _ = U(I),
                    D() || g.setLevel(I, !1)
                }
                ,
                g.resetLevel = function() {
                    S = null,
                    N(),
                    u.call(g)
                }
                ,
                g.enableAll = function(I) {
                    g.setLevel(g.levels.TRACE, I)
                }
                ,
                g.disableAll = function(I) {
                    g.setLevel(g.levels.SILENT, I)
                }
                ,
                g.rebuild = function() {
                    if (o !== g && (x = U(o.getLevel())),
                    u.call(g),
                    o === g)
                        for (var I in s)
                            s[I].rebuild()
                }
                ,
                x = U(o ? o.getLevel() : "WARN");
                var L = D();
                L != null && (S = U(L)),
                u.call(g)
            }
            o = new f,
            o.getLogger = function(y) {
                if (typeof y != "symbol" && typeof y != "string" || y === "")
                    throw new TypeError("You must supply a name when creating a logger.");
                var g = s[y];
                return g || (g = s[y] = new f(y,o.methodFactory)),
                g
            }
            ;
            var v = typeof window !== t ? window.log : void 0;
            return o.noConflict = function() {
                return typeof window !== t && window.log === o && (window.log = v),
                o
            }
            ,
            o.getLoggers = function() {
                return s
            }
            ,
            o.default = o,
            o
        })
    }(On)),
    On.exports
}
var ui = Bl(), Xi;
(function(n) {
    n[n.trace = 0] = "trace",
    n[n.debug = 1] = "debug",
    n[n.info = 2] = "info",
    n[n.warn = 3] = "warn",
    n[n.error = 4] = "error",
    n[n.silent = 5] = "silent"
}
)(Xi || (Xi = {}));
var je;
(function(n) {
    n.Default = "livekit",
    n.Room = "livekit-room",
    n.Participant = "livekit-participant",
    n.Track = "livekit-track",
    n.Publication = "livekit-track-publication",
    n.Engine = "livekit-engine",
    n.Signal = "livekit-signal",
    n.PCManager = "livekit-pc-manager",
    n.PCTransport = "livekit-pc-transport",
    n.E2EE = "lk-e2ee"
}
)(je || (je = {}));
let K = ui.getLogger("livekit");
Object.values(je).map(n => ui.getLogger(n));
K.setDefaultLevel(Xi.info);
function tt(n) {
    const e = ui.getLogger(n);
    return e.setDefaultLevel(K.getLevel()),
    e
}
const ql = ui.getLogger("lk-e2ee")
  , $t = 7e3
  , zl = [0, 300, 2 * 2 * 300, 3 * 3 * 300, 4 * 4 * 300, $t, $t, $t, $t, $t];
class Wl {
    constructor(e) {
        this._retryDelays = e !== void 0 ? [...e] : zl
    }
    nextRetryDelayInMs(e) {
        if (e.retryCount >= this._retryDelays.length)
            return null;
        const t = this._retryDelays[e.retryCount];
        return e.retryCount <= 1 ? t : t + Math.random() * 1e3
    }
}
function m(n, e, t, i) {
    function r(s) {
        return s instanceof t ? s : new t(function(o) {
            o(s)
        }
        )
    }
    return new (t || (t = Promise))(function(s, o) {
        function a(u) {
            try {
                d(i.next(u))
            } catch (l) {
                o(l)
            }
        }
        function c(u) {
            try {
                d(i.throw(u))
            } catch (l) {
                o(l)
            }
        }
        function d(u) {
            u.done ? s(u.value) : r(u.value).then(a, c)
        }
        d((i = i.apply(n, e || [])).next())
    }
    )
}
function ms(n) {
    var e = typeof Symbol == "function" && Symbol.iterator
      , t = e && n[e]
      , i = 0;
    if (t)
        return t.call(n);
    if (n && typeof n.length == "number")
        return {
            next: function() {
                return n && i >= n.length && (n = void 0),
                {
                    value: n && n[i++],
                    done: !n
                }
            }
        };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function At(n) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var e = n[Symbol.asyncIterator], t;
    return e ? e.call(n) : (n = typeof ms == "function" ? ms(n) : n[Symbol.iterator](),
    t = {},
    i("next"),
    i("throw"),
    i("return"),
    t[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    t);
    function i(s) {
        t[s] = n[s] && function(o) {
            return new Promise(function(a, c) {
                o = n[s](o),
                r(a, c, o.done, o.value)
            }
            )
        }
    }
    function r(s, o, a, c) {
        Promise.resolve(c).then(function(d) {
            s({
                value: d,
                done: a
            })
        }, o)
    }
}
var En = {
    exports: {}
}, gs;
function Gl() {
    if (gs)
        return En.exports;
    gs = 1;
    var n = typeof Reflect == "object" ? Reflect : null, e = n && typeof n.apply == "function" ? n.apply : function(b, w, D) {
        return Function.prototype.apply.call(b, w, D)
    }
    , t;
    n && typeof n.ownKeys == "function" ? t = n.ownKeys : Object.getOwnPropertySymbols ? t = function(b) {
        return Object.getOwnPropertyNames(b).concat(Object.getOwnPropertySymbols(b))
    }
    : t = function(b) {
        return Object.getOwnPropertyNames(b)
    }
    ;
    function i(S) {
        console && console.warn && console.warn(S)
    }
    var r = Number.isNaN || function(b) {
        return b !== b
    }
    ;
    function s() {
        s.init.call(this)
    }
    En.exports = s,
    En.exports.once = g,
    s.EventEmitter = s,
    s.prototype._events = void 0,
    s.prototype._eventsCount = 0,
    s.prototype._maxListeners = void 0;
    var o = 10;
    function a(S) {
        if (typeof S != "function")
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof S)
    }
    Object.defineProperty(s, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return o
        },
        set: function(S) {
            if (typeof S != "number" || S < 0 || r(S))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + S + ".");
            o = S
        }
    }),
    s.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null),
        this._eventsCount = 0),
        this._maxListeners = this._maxListeners || void 0
    }
    ,
    s.prototype.setMaxListeners = function(b) {
        if (typeof b != "number" || b < 0 || r(b))
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + b + ".");
        return this._maxListeners = b,
        this
    }
    ;
    function c(S) {
        return S._maxListeners === void 0 ? s.defaultMaxListeners : S._maxListeners
    }
    s.prototype.getMaxListeners = function() {
        return c(this)
    }
    ,
    s.prototype.emit = function(b) {
        for (var w = [], D = 1; D < arguments.length; D++)
            w.push(arguments[D]);
        var N = b === "error"
          , U = this._events;
        if (U !== void 0)
            N = N && U.error === void 0;
        else if (!N)
            return !1;
        if (N) {
            var L;
            if (w.length > 0 && (L = w[0]),
            L instanceof Error)
                throw L;
            var I = new Error("Unhandled error." + (L ? " (" + L.message + ")" : ""));
            throw I.context = L,
            I
        }
        var M = U[b];
        if (M === void 0)
            return !1;
        if (typeof M == "function")
            e(M, this, w);
        else
            for (var X = M.length, z = v(M, X), D = 0; D < X; ++D)
                e(z[D], this, w);
        return !0
    }
    ;
    function d(S, b, w, D) {
        var N, U, L;
        if (a(w),
        U = S._events,
        U === void 0 ? (U = S._events = Object.create(null),
        S._eventsCount = 0) : (U.newListener !== void 0 && (S.emit("newListener", b, w.listener ? w.listener : w),
        U = S._events),
        L = U[b]),
        L === void 0)
            L = U[b] = w,
            ++S._eventsCount;
        else if (typeof L == "function" ? L = U[b] = D ? [w, L] : [L, w] : D ? L.unshift(w) : L.push(w),
        N = c(S),
        N > 0 && L.length > N && !L.warned) {
            L.warned = !0;
            var I = new Error("Possible EventEmitter memory leak detected. " + L.length + " " + String(b) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            I.name = "MaxListenersExceededWarning",
            I.emitter = S,
            I.type = b,
            I.count = L.length,
            i(I)
        }
        return S
    }
    s.prototype.addListener = function(b, w) {
        return d(this, b, w, !1)
    }
    ,
    s.prototype.on = s.prototype.addListener,
    s.prototype.prependListener = function(b, w) {
        return d(this, b, w, !0)
    }
    ;
    function u() {
        if (!this.fired)
            return this.target.removeListener(this.type, this.wrapFn),
            this.fired = !0,
            arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }
    function l(S, b, w) {
        var D = {
            fired: !1,
            wrapFn: void 0,
            target: S,
            type: b,
            listener: w
        }
          , N = u.bind(D);
        return N.listener = w,
        D.wrapFn = N,
        N
    }
    s.prototype.once = function(b, w) {
        return a(w),
        this.on(b, l(this, b, w)),
        this
    }
    ,
    s.prototype.prependOnceListener = function(b, w) {
        return a(w),
        this.prependListener(b, l(this, b, w)),
        this
    }
    ,
    s.prototype.removeListener = function(b, w) {
        var D, N, U, L, I;
        if (a(w),
        N = this._events,
        N === void 0)
            return this;
        if (D = N[b],
        D === void 0)
            return this;
        if (D === w || D.listener === w)
            --this._eventsCount === 0 ? this._events = Object.create(null) : (delete N[b],
            N.removeListener && this.emit("removeListener", b, D.listener || w));
        else if (typeof D != "function") {
            for (U = -1,
            L = D.length - 1; L >= 0; L--)
                if (D[L] === w || D[L].listener === w) {
                    I = D[L].listener,
                    U = L;
                    break
                }
            if (U < 0)
                return this;
            U === 0 ? D.shift() : p(D, U),
            D.length === 1 && (N[b] = D[0]),
            N.removeListener !== void 0 && this.emit("removeListener", b, I || w)
        }
        return this
    }
    ,
    s.prototype.off = s.prototype.removeListener,
    s.prototype.removeAllListeners = function(b) {
        var w, D, N;
        if (D = this._events,
        D === void 0)
            return this;
        if (D.removeListener === void 0)
            return arguments.length === 0 ? (this._events = Object.create(null),
            this._eventsCount = 0) : D[b] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete D[b]),
            this;
        if (arguments.length === 0) {
            var U = Object.keys(D), L;
            for (N = 0; N < U.length; ++N)
                L = U[N],
                L !== "removeListener" && this.removeAllListeners(L);
            return this.removeAllListeners("removeListener"),
            this._events = Object.create(null),
            this._eventsCount = 0,
            this
        }
        if (w = D[b],
        typeof w == "function")
            this.removeListener(b, w);
        else if (w !== void 0)
            for (N = w.length - 1; N >= 0; N--)
                this.removeListener(b, w[N]);
        return this
    }
    ;
    function h(S, b, w) {
        var D = S._events;
        if (D === void 0)
            return [];
        var N = D[b];
        return N === void 0 ? [] : typeof N == "function" ? w ? [N.listener || N] : [N] : w ? y(N) : v(N, N.length)
    }
    s.prototype.listeners = function(b) {
        return h(this, b, !0)
    }
    ,
    s.prototype.rawListeners = function(b) {
        return h(this, b, !1)
    }
    ,
    s.listenerCount = function(S, b) {
        return typeof S.listenerCount == "function" ? S.listenerCount(b) : f.call(S, b)
    }
    ,
    s.prototype.listenerCount = f;
    function f(S) {
        var b = this._events;
        if (b !== void 0) {
            var w = b[S];
            if (typeof w == "function")
                return 1;
            if (w !== void 0)
                return w.length
        }
        return 0
    }
    s.prototype.eventNames = function() {
        return this._eventsCount > 0 ? t(this._events) : []
    }
    ;
    function v(S, b) {
        for (var w = new Array(b), D = 0; D < b; ++D)
            w[D] = S[D];
        return w
    }
    function p(S, b) {
        for (; b + 1 < S.length; b++)
            S[b] = S[b + 1];
        S.pop()
    }
    function y(S) {
        for (var b = new Array(S.length), w = 0; w < b.length; ++w)
            b[w] = S[w].listener || S[w];
        return b
    }
    function g(S, b) {
        return new Promise(function(w, D) {
            function N(L) {
                S.removeListener(b, U),
                D(L)
            }
            function U() {
                typeof S.removeListener == "function" && S.removeListener("error", N),
                w([].slice.call(arguments))
            }
            _(S, b, U, {
                once: !0
            }),
            b !== "error" && x(S, N, {
                once: !0
            })
        }
        )
    }
    function x(S, b, w) {
        typeof S.on == "function" && _(S, "error", b, w)
    }
    function _(S, b, w, D) {
        if (typeof S.on == "function")
            D.once ? S.once(b, w) : S.on(b, w);
        else if (typeof S.addEventListener == "function")
            S.addEventListener(b, function N(U) {
                D.once && S.removeEventListener(b, N),
                w(U)
            });
        else
            throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof S)
    }
    return En.exports
}
var Ye = Gl();
let _a = !0
  , Ia = !0;
function Nn(n, e, t) {
    const i = n.match(e);
    return i && i.length >= t && parseInt(i[t], 10)
}
function St(n, e, t) {
    if (!n.RTCPeerConnection)
        return;
    const i = n.RTCPeerConnection.prototype
      , r = i.addEventListener;
    i.addEventListener = function(o, a) {
        if (o !== e)
            return r.apply(this, arguments);
        const c = d => {
            const u = t(d);
            u && (a.handleEvent ? a.handleEvent(u) : a(u))
        }
        ;
        return this._eventMap = this._eventMap || {},
        this._eventMap[e] || (this._eventMap[e] = new Map),
        this._eventMap[e].set(a, c),
        r.apply(this, [o, c])
    }
    ;
    const s = i.removeEventListener;
    i.removeEventListener = function(o, a) {
        if (o !== e || !this._eventMap || !this._eventMap[e])
            return s.apply(this, arguments);
        if (!this._eventMap[e].has(a))
            return s.apply(this, arguments);
        const c = this._eventMap[e].get(a);
        return this._eventMap[e].delete(a),
        this._eventMap[e].size === 0 && delete this._eventMap[e],
        Object.keys(this._eventMap).length === 0 && delete this._eventMap,
        s.apply(this, [o, c])
    }
    ,
    Object.defineProperty(i, "on" + e, {
        get() {
            return this["_on" + e]
        },
        set(o) {
            this["_on" + e] && (this.removeEventListener(e, this["_on" + e]),
            delete this["_on" + e]),
            o && this.addEventListener(e, this["_on" + e] = o)
        },
        enumerable: !0,
        configurable: !0
    })
}
function Kl(n) {
    return typeof n != "boolean" ? new Error("Argument type: " + typeof n + ". Please use a boolean.") : (_a = n,
    n ? "adapter.js logging disabled" : "adapter.js logging enabled")
}
function Hl(n) {
    return typeof n != "boolean" ? new Error("Argument type: " + typeof n + ". Please use a boolean.") : (Ia = !n,
    "adapter.js deprecation warnings " + (n ? "disabled" : "enabled"))
}
function xa() {
    if (typeof window == "object") {
        if (_a)
            return;
        typeof console < "u" && typeof console.log == "function" && console.log.apply(console, arguments)
    }
}
function Ir(n, e) {
    Ia && console.warn(n + " is deprecated, please use " + e + " instead.")
}
function Jl(n) {
    const e = {
        browser: null,
        version: null
    };
    if (typeof n > "u" || !n.navigator || !n.navigator.userAgent)
        return e.browser = "Not a browser.",
        e;
    const {navigator: t} = n;
    if (t.userAgentData && t.userAgentData.brands) {
        const i = t.userAgentData.brands.find(r => r.brand === "Chromium");
        if (i)
            return {
                browser: "chrome",
                version: parseInt(i.version, 10)
            }
    }
    if (t.mozGetUserMedia)
        e.browser = "firefox",
        e.version = Nn(t.userAgent, /Firefox\/(\d+)\./, 1);
    else if (t.webkitGetUserMedia || n.isSecureContext === !1 && n.webkitRTCPeerConnection)
        e.browser = "chrome",
        e.version = Nn(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
    else if (n.RTCPeerConnection && t.userAgent.match(/AppleWebKit\/(\d+)\./))
        e.browser = "safari",
        e.version = Nn(t.userAgent, /AppleWebKit\/(\d+)\./, 1),
        e.supportsUnifiedPlan = n.RTCRtpTransceiver && "currentDirection"in n.RTCRtpTransceiver.prototype;
    else
        return e.browser = "Not a supported browser.",
        e;
    return e
}
function vs(n) {
    return Object.prototype.toString.call(n) === "[object Object]"
}
function Aa(n) {
    return vs(n) ? Object.keys(n).reduce(function(e, t) {
        const i = vs(n[t])
          , r = i ? Aa(n[t]) : n[t]
          , s = i && !Object.keys(r).length;
        return r === void 0 || s ? e : Object.assign(e, {
            [t]: r
        })
    }, {}) : n
}
function Zi(n, e, t) {
    !e || t.has(e.id) || (t.set(e.id, e),
    Object.keys(e).forEach(i => {
        i.endsWith("Id") ? Zi(n, n.get(e[i]), t) : i.endsWith("Ids") && e[i].forEach(r => {
            Zi(n, n.get(r), t)
        }
        )
    }
    ))
}
function bs(n, e, t) {
    const i = t ? "outbound-rtp" : "inbound-rtp"
      , r = new Map;
    if (e === null)
        return r;
    const s = [];
    return n.forEach(o => {
        o.type === "track" && o.trackIdentifier === e.id && s.push(o)
    }
    ),
    s.forEach(o => {
        n.forEach(a => {
            a.type === i && a.trackId === o.id && Zi(n, a, r)
        }
        )
    }
    ),
    r
}
const ys = xa;
function Da(n, e) {
    const t = n && n.navigator;
    if (!t.mediaDevices)
        return;
    const i = function(a) {
        if (typeof a != "object" || a.mandatory || a.optional)
            return a;
        const c = {};
        return Object.keys(a).forEach(d => {
            if (d === "require" || d === "advanced" || d === "mediaSource")
                return;
            const u = typeof a[d] == "object" ? a[d] : {
                ideal: a[d]
            };
            u.exact !== void 0 && typeof u.exact == "number" && (u.min = u.max = u.exact);
            const l = function(h, f) {
                return h ? h + f.charAt(0).toUpperCase() + f.slice(1) : f === "deviceId" ? "sourceId" : f
            };
            if (u.ideal !== void 0) {
                c.optional = c.optional || [];
                let h = {};
                typeof u.ideal == "number" ? (h[l("min", d)] = u.ideal,
                c.optional.push(h),
                h = {},
                h[l("max", d)] = u.ideal,
                c.optional.push(h)) : (h[l("", d)] = u.ideal,
                c.optional.push(h))
            }
            u.exact !== void 0 && typeof u.exact != "number" ? (c.mandatory = c.mandatory || {},
            c.mandatory[l("", d)] = u.exact) : ["min", "max"].forEach(h => {
                u[h] !== void 0 && (c.mandatory = c.mandatory || {},
                c.mandatory[l(h, d)] = u[h])
            }
            )
        }
        ),
        a.advanced && (c.optional = (c.optional || []).concat(a.advanced)),
        c
    }
      , r = function(a, c) {
        if (e.version >= 61)
            return c(a);
        if (a = JSON.parse(JSON.stringify(a)),
        a && typeof a.audio == "object") {
            const d = function(u, l, h) {
                l in u && !(h in u) && (u[h] = u[l],
                delete u[l])
            };
            a = JSON.parse(JSON.stringify(a)),
            d(a.audio, "autoGainControl", "googAutoGainControl"),
            d(a.audio, "noiseSuppression", "googNoiseSuppression"),
            a.audio = i(a.audio)
        }
        if (a && typeof a.video == "object") {
            let d = a.video.facingMode;
            d = d && (typeof d == "object" ? d : {
                ideal: d
            });
            const u = e.version < 66;
            if (d && (d.exact === "user" || d.exact === "environment" || d.ideal === "user" || d.ideal === "environment") && !(t.mediaDevices.getSupportedConstraints && t.mediaDevices.getSupportedConstraints().facingMode && !u)) {
                delete a.video.facingMode;
                let l;
                if (d.exact === "environment" || d.ideal === "environment" ? l = ["back", "rear"] : (d.exact === "user" || d.ideal === "user") && (l = ["front"]),
                l)
                    return t.mediaDevices.enumerateDevices().then(h => {
                        h = h.filter(v => v.kind === "videoinput");
                        let f = h.find(v => l.some(p => v.label.toLowerCase().includes(p)));
                        return !f && h.length && l.includes("back") && (f = h[h.length - 1]),
                        f && (a.video.deviceId = d.exact ? {
                            exact: f.deviceId
                        } : {
                            ideal: f.deviceId
                        }),
                        a.video = i(a.video),
                        ys("chrome: " + JSON.stringify(a)),
                        c(a)
                    }
                    )
            }
            a.video = i(a.video)
        }
        return ys("chrome: " + JSON.stringify(a)),
        c(a)
    }
      , s = function(a) {
        return e.version >= 64 ? a : {
            name: {
                PermissionDeniedError: "NotAllowedError",
                PermissionDismissedError: "NotAllowedError",
                InvalidStateError: "NotAllowedError",
                DevicesNotFoundError: "NotFoundError",
                ConstraintNotSatisfiedError: "OverconstrainedError",
                TrackStartError: "NotReadableError",
                MediaDeviceFailedDueToShutdown: "NotAllowedError",
                MediaDeviceKillSwitchOn: "NotAllowedError",
                TabCaptureError: "AbortError",
                ScreenCaptureError: "AbortError",
                DeviceCaptureError: "AbortError"
            }[a.name] || a.name,
            message: a.message,
            constraint: a.constraint || a.constraintName,
            toString() {
                return this.name + (this.message && ": ") + this.message
            }
        }
    }
      , o = function(a, c, d) {
        r(a, u => {
            t.webkitGetUserMedia(u, c, l => {
                d && d(s(l))
            }
            )
        }
        )
    };
    if (t.getUserMedia = o.bind(t),
    t.mediaDevices.getUserMedia) {
        const a = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
        t.mediaDevices.getUserMedia = function(c) {
            return r(c, d => a(d).then(u => {
                if (d.audio && !u.getAudioTracks().length || d.video && !u.getVideoTracks().length)
                    throw u.getTracks().forEach(l => {
                        l.stop()
                    }
                    ),
                    new DOMException("","NotFoundError");
                return u
            }
            , u => Promise.reject(s(u))))
        }
    }
}
function Ma(n) {
    n.MediaStream = n.MediaStream || n.webkitMediaStream
}
function Oa(n) {
    if (typeof n == "object" && n.RTCPeerConnection && !("ontrack"in n.RTCPeerConnection.prototype)) {
        Object.defineProperty(n.RTCPeerConnection.prototype, "ontrack", {
            get() {
                return this._ontrack
            },
            set(t) {
                this._ontrack && this.removeEventListener("track", this._ontrack),
                this.addEventListener("track", this._ontrack = t)
            },
            enumerable: !0,
            configurable: !0
        });
        const e = n.RTCPeerConnection.prototype.setRemoteDescription;
        n.RTCPeerConnection.prototype.setRemoteDescription = function() {
            return this._ontrackpoly || (this._ontrackpoly = i => {
                i.stream.addEventListener("addtrack", r => {
                    let s;
                    n.RTCPeerConnection.prototype.getReceivers ? s = this.getReceivers().find(a => a.track && a.track.id === r.track.id) : s = {
                        track: r.track
                    };
                    const o = new Event("track");
                    o.track = r.track,
                    o.receiver = s,
                    o.transceiver = {
                        receiver: s
                    },
                    o.streams = [i.stream],
                    this.dispatchEvent(o)
                }
                ),
                i.stream.getTracks().forEach(r => {
                    let s;
                    n.RTCPeerConnection.prototype.getReceivers ? s = this.getReceivers().find(a => a.track && a.track.id === r.id) : s = {
                        track: r
                    };
                    const o = new Event("track");
                    o.track = r,
                    o.receiver = s,
                    o.transceiver = {
                        receiver: s
                    },
                    o.streams = [i.stream],
                    this.dispatchEvent(o)
                }
                )
            }
            ,
            this.addEventListener("addstream", this._ontrackpoly)),
            e.apply(this, arguments)
        }
    } else
        St(n, "track", e => (e.transceiver || Object.defineProperty(e, "transceiver", {
            value: {
                receiver: e.receiver
            }
        }),
        e))
}
function Na(n) {
    if (typeof n == "object" && n.RTCPeerConnection && !("getSenders"in n.RTCPeerConnection.prototype) && "createDTMFSender"in n.RTCPeerConnection.prototype) {
        const e = function(r, s) {
            return {
                track: s,
                get dtmf() {
                    return this._dtmf === void 0 && (s.kind === "audio" ? this._dtmf = r.createDTMFSender(s) : this._dtmf = null),
                    this._dtmf
                },
                _pc: r
            }
        };
        if (!n.RTCPeerConnection.prototype.getSenders) {
            n.RTCPeerConnection.prototype.getSenders = function() {
                return this._senders = this._senders || [],
                this._senders.slice()
            }
            ;
            const r = n.RTCPeerConnection.prototype.addTrack;
            n.RTCPeerConnection.prototype.addTrack = function(a, c) {
                let d = r.apply(this, arguments);
                return d || (d = e(this, a),
                this._senders.push(d)),
                d
            }
            ;
            const s = n.RTCPeerConnection.prototype.removeTrack;
            n.RTCPeerConnection.prototype.removeTrack = function(a) {
                s.apply(this, arguments);
                const c = this._senders.indexOf(a);
                c !== -1 && this._senders.splice(c, 1)
            }
        }
        const t = n.RTCPeerConnection.prototype.addStream;
        n.RTCPeerConnection.prototype.addStream = function(s) {
            this._senders = this._senders || [],
            t.apply(this, [s]),
            s.getTracks().forEach(o => {
                this._senders.push(e(this, o))
            }
            )
        }
        ;
        const i = n.RTCPeerConnection.prototype.removeStream;
        n.RTCPeerConnection.prototype.removeStream = function(s) {
            this._senders = this._senders || [],
            i.apply(this, [s]),
            s.getTracks().forEach(o => {
                const a = this._senders.find(c => c.track === o);
                a && this._senders.splice(this._senders.indexOf(a), 1)
            }
            )
        }
    } else if (typeof n == "object" && n.RTCPeerConnection && "getSenders"in n.RTCPeerConnection.prototype && "createDTMFSender"in n.RTCPeerConnection.prototype && n.RTCRtpSender && !("dtmf"in n.RTCRtpSender.prototype)) {
        const e = n.RTCPeerConnection.prototype.getSenders;
        n.RTCPeerConnection.prototype.getSenders = function() {
            const i = e.apply(this, []);
            return i.forEach(r => r._pc = this),
            i
        }
        ,
        Object.defineProperty(n.RTCRtpSender.prototype, "dtmf", {
            get() {
                return this._dtmf === void 0 && (this.track.kind === "audio" ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null),
                this._dtmf
            }
        })
    }
}
function La(n) {
    if (!(typeof n == "object" && n.RTCPeerConnection && n.RTCRtpSender && n.RTCRtpReceiver))
        return;
    if (!("getStats"in n.RTCRtpSender.prototype)) {
        const t = n.RTCPeerConnection.prototype.getSenders;
        t && (n.RTCPeerConnection.prototype.getSenders = function() {
            const s = t.apply(this, []);
            return s.forEach(o => o._pc = this),
            s
        }
        );
        const i = n.RTCPeerConnection.prototype.addTrack;
        i && (n.RTCPeerConnection.prototype.addTrack = function() {
            const s = i.apply(this, arguments);
            return s._pc = this,
            s
        }
        ),
        n.RTCRtpSender.prototype.getStats = function() {
            const s = this;
            return this._pc.getStats().then(o => bs(o, s.track, !0))
        }
    }
    if (!("getStats"in n.RTCRtpReceiver.prototype)) {
        const t = n.RTCPeerConnection.prototype.getReceivers;
        t && (n.RTCPeerConnection.prototype.getReceivers = function() {
            const r = t.apply(this, []);
            return r.forEach(s => s._pc = this),
            r
        }
        ),
        St(n, "track", i => (i.receiver._pc = i.srcElement,
        i)),
        n.RTCRtpReceiver.prototype.getStats = function() {
            const r = this;
            return this._pc.getStats().then(s => bs(s, r.track, !1))
        }
    }
    if (!("getStats"in n.RTCRtpSender.prototype && "getStats"in n.RTCRtpReceiver.prototype))
        return;
    const e = n.RTCPeerConnection.prototype.getStats;
    n.RTCPeerConnection.prototype.getStats = function() {
        if (arguments.length > 0 && arguments[0]instanceof n.MediaStreamTrack) {
            const i = arguments[0];
            let r, s, o;
            return this.getSenders().forEach(a => {
                a.track === i && (r ? o = !0 : r = a)
            }
            ),
            this.getReceivers().forEach(a => (a.track === i && (s ? o = !0 : s = a),
            a.track === i)),
            o || r && s ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")) : r ? r.getStats() : s ? s.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))
        }
        return e.apply(this, arguments)
    }
}
function Ua(n) {
    n.RTCPeerConnection.prototype.getLocalStreams = function() {
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {},
        Object.keys(this._shimmedLocalStreams).map(o => this._shimmedLocalStreams[o][0])
    }
    ;
    const e = n.RTCPeerConnection.prototype.addTrack;
    n.RTCPeerConnection.prototype.addTrack = function(o, a) {
        if (!a)
            return e.apply(this, arguments);
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        const c = e.apply(this, arguments);
        return this._shimmedLocalStreams[a.id] ? this._shimmedLocalStreams[a.id].indexOf(c) === -1 && this._shimmedLocalStreams[a.id].push(c) : this._shimmedLocalStreams[a.id] = [a, c],
        c
    }
    ;
    const t = n.RTCPeerConnection.prototype.addStream;
    n.RTCPeerConnection.prototype.addStream = function(o) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {},
        o.getTracks().forEach(d => {
            if (this.getSenders().find(l => l.track === d))
                throw new DOMException("Track already exists.","InvalidAccessError")
        }
        );
        const a = this.getSenders();
        t.apply(this, arguments);
        const c = this.getSenders().filter(d => a.indexOf(d) === -1);
        this._shimmedLocalStreams[o.id] = [o].concat(c)
    }
    ;
    const i = n.RTCPeerConnection.prototype.removeStream;
    n.RTCPeerConnection.prototype.removeStream = function(o) {
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {},
        delete this._shimmedLocalStreams[o.id],
        i.apply(this, arguments)
    }
    ;
    const r = n.RTCPeerConnection.prototype.removeTrack;
    n.RTCPeerConnection.prototype.removeTrack = function(o) {
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {},
        o && Object.keys(this._shimmedLocalStreams).forEach(a => {
            const c = this._shimmedLocalStreams[a].indexOf(o);
            c !== -1 && this._shimmedLocalStreams[a].splice(c, 1),
            this._shimmedLocalStreams[a].length === 1 && delete this._shimmedLocalStreams[a]
        }
        ),
        r.apply(this, arguments)
    }
}
function Fa(n, e) {
    if (!n.RTCPeerConnection)
        return;
    if (n.RTCPeerConnection.prototype.addTrack && e.version >= 65)
        return Ua(n);
    const t = n.RTCPeerConnection.prototype.getLocalStreams;
    n.RTCPeerConnection.prototype.getLocalStreams = function() {
        const u = t.apply(this);
        return this._reverseStreams = this._reverseStreams || {},
        u.map(l => this._reverseStreams[l.id])
    }
    ;
    const i = n.RTCPeerConnection.prototype.addStream;
    n.RTCPeerConnection.prototype.addStream = function(u) {
        if (this._streams = this._streams || {},
        this._reverseStreams = this._reverseStreams || {},
        u.getTracks().forEach(l => {
            if (this.getSenders().find(f => f.track === l))
                throw new DOMException("Track already exists.","InvalidAccessError")
        }
        ),
        !this._reverseStreams[u.id]) {
            const l = new n.MediaStream(u.getTracks());
            this._streams[u.id] = l,
            this._reverseStreams[l.id] = u,
            u = l
        }
        i.apply(this, [u])
    }
    ;
    const r = n.RTCPeerConnection.prototype.removeStream;
    n.RTCPeerConnection.prototype.removeStream = function(u) {
        this._streams = this._streams || {},
        this._reverseStreams = this._reverseStreams || {},
        r.apply(this, [this._streams[u.id] || u]),
        delete this._reverseStreams[this._streams[u.id] ? this._streams[u.id].id : u.id],
        delete this._streams[u.id]
    }
    ,
    n.RTCPeerConnection.prototype.addTrack = function(u, l) {
        if (this.signalingState === "closed")
            throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");
        const h = [].slice.call(arguments, 1);
        if (h.length !== 1 || !h[0].getTracks().find(p => p === u))
            throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");
        if (this.getSenders().find(p => p.track === u))
            throw new DOMException("Track already exists.","InvalidAccessError");
        this._streams = this._streams || {},
        this._reverseStreams = this._reverseStreams || {};
        const v = this._streams[l.id];
        if (v)
            v.addTrack(u),
            Promise.resolve().then( () => {
                this.dispatchEvent(new Event("negotiationneeded"))
            }
            );
        else {
            const p = new n.MediaStream([u]);
            this._streams[l.id] = p,
            this._reverseStreams[p.id] = l,
            this.addStream(p)
        }
        return this.getSenders().find(p => p.track === u)
    }
    ;
    function s(d, u) {
        let l = u.sdp;
        return Object.keys(d._reverseStreams || []).forEach(h => {
            const f = d._reverseStreams[h]
              , v = d._streams[f.id];
            l = l.replace(new RegExp(v.id,"g"), f.id)
        }
        ),
        new RTCSessionDescription({
            type: u.type,
            sdp: l
        })
    }
    function o(d, u) {
        let l = u.sdp;
        return Object.keys(d._reverseStreams || []).forEach(h => {
            const f = d._reverseStreams[h]
              , v = d._streams[f.id];
            l = l.replace(new RegExp(f.id,"g"), v.id)
        }
        ),
        new RTCSessionDescription({
            type: u.type,
            sdp: l
        })
    }
    ["createOffer", "createAnswer"].forEach(function(d) {
        const u = n.RTCPeerConnection.prototype[d]
          , l = {
            [d]() {
                const h = arguments;
                return arguments.length && typeof arguments[0] == "function" ? u.apply(this, [v => {
                    const p = s(this, v);
                    h[0].apply(null, [p])
                }
                , v => {
                    h[1] && h[1].apply(null, v)
                }
                , arguments[2]]) : u.apply(this, arguments).then(v => s(this, v))
            }
        };
        n.RTCPeerConnection.prototype[d] = l[d]
    });
    const a = n.RTCPeerConnection.prototype.setLocalDescription;
    n.RTCPeerConnection.prototype.setLocalDescription = function() {
        return !arguments.length || !arguments[0].type ? a.apply(this, arguments) : (arguments[0] = o(this, arguments[0]),
        a.apply(this, arguments))
    }
    ;
    const c = Object.getOwnPropertyDescriptor(n.RTCPeerConnection.prototype, "localDescription");
    Object.defineProperty(n.RTCPeerConnection.prototype, "localDescription", {
        get() {
            const d = c.get.apply(this);
            return d.type === "" ? d : s(this, d)
        }
    }),
    n.RTCPeerConnection.prototype.removeTrack = function(u) {
        if (this.signalingState === "closed")
            throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");
        if (!u._pc)
            throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");
        if (!(u._pc === this))
            throw new DOMException("Sender was not created by this connection.","InvalidAccessError");
        this._streams = this._streams || {};
        let h;
        Object.keys(this._streams).forEach(f => {
            this._streams[f].getTracks().find(p => u.track === p) && (h = this._streams[f])
        }
        ),
        h && (h.getTracks().length === 1 ? this.removeStream(this._reverseStreams[h.id]) : h.removeTrack(u.track),
        this.dispatchEvent(new Event("negotiationneeded")))
    }
}
function er(n, e) {
    !n.RTCPeerConnection && n.webkitRTCPeerConnection && (n.RTCPeerConnection = n.webkitRTCPeerConnection),
    n.RTCPeerConnection && e.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(t) {
        const i = n.RTCPeerConnection.prototype[t]
          , r = {
            [t]() {
                return arguments[0] = new (t === "addIceCandidate" ? n.RTCIceCandidate : n.RTCSessionDescription)(arguments[0]),
                i.apply(this, arguments)
            }
        };
        n.RTCPeerConnection.prototype[t] = r[t]
    })
}
function ja(n, e) {
    St(n, "negotiationneeded", t => {
        const i = t.target;
        if (!((e.version < 72 || i.getConfiguration && i.getConfiguration().sdpSemantics === "plan-b") && i.signalingState !== "stable"))
            return t
    }
    )
}
var ks = Object.freeze({
    __proto__: null,
    fixNegotiationNeeded: ja,
    shimAddTrackRemoveTrack: Fa,
    shimAddTrackRemoveTrackWithNative: Ua,
    shimGetSendersWithDtmf: Na,
    shimGetUserMedia: Da,
    shimMediaStream: Ma,
    shimOnTrack: Oa,
    shimPeerConnection: er,
    shimSenderReceiverGetStats: La
});
function Va(n, e) {
    const t = n && n.navigator
      , i = n && n.MediaStreamTrack;
    if (t.getUserMedia = function(r, s, o) {
        Ir("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"),
        t.mediaDevices.getUserMedia(r).then(s, o)
    }
    ,
    !(e.version > 55 && "autoGainControl"in t.mediaDevices.getSupportedConstraints())) {
        const r = function(o, a, c) {
            a in o && !(c in o) && (o[c] = o[a],
            delete o[a])
        }
          , s = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
        if (t.mediaDevices.getUserMedia = function(o) {
            return typeof o == "object" && typeof o.audio == "object" && (o = JSON.parse(JSON.stringify(o)),
            r(o.audio, "autoGainControl", "mozAutoGainControl"),
            r(o.audio, "noiseSuppression", "mozNoiseSuppression")),
            s(o)
        }
        ,
        i && i.prototype.getSettings) {
            const o = i.prototype.getSettings;
            i.prototype.getSettings = function() {
                const a = o.apply(this, arguments);
                return r(a, "mozAutoGainControl", "autoGainControl"),
                r(a, "mozNoiseSuppression", "noiseSuppression"),
                a
            }
        }
        if (i && i.prototype.applyConstraints) {
            const o = i.prototype.applyConstraints;
            i.prototype.applyConstraints = function(a) {
                return this.kind === "audio" && typeof a == "object" && (a = JSON.parse(JSON.stringify(a)),
                r(a, "autoGainControl", "mozAutoGainControl"),
                r(a, "noiseSuppression", "mozNoiseSuppression")),
                o.apply(this, [a])
            }
        }
    }
}
function Ql(n, e) {
    n.navigator.mediaDevices && "getDisplayMedia"in n.navigator.mediaDevices || n.navigator.mediaDevices && (n.navigator.mediaDevices.getDisplayMedia = function(i) {
        if (!(i && i.video)) {
            const r = new DOMException("getDisplayMedia without video constraints is undefined");
            return r.name = "NotFoundError",
            r.code = 8,
            Promise.reject(r)
        }
        return i.video === !0 ? i.video = {
            mediaSource: e
        } : i.video.mediaSource = e,
        n.navigator.mediaDevices.getUserMedia(i)
    }
    )
}
function Ba(n) {
    typeof n == "object" && n.RTCTrackEvent && "receiver"in n.RTCTrackEvent.prototype && !("transceiver"in n.RTCTrackEvent.prototype) && Object.defineProperty(n.RTCTrackEvent.prototype, "transceiver", {
        get() {
            return {
                receiver: this.receiver
            }
        }
    })
}
function tr(n, e) {
    if (typeof n != "object" || !(n.RTCPeerConnection || n.mozRTCPeerConnection))
        return;
    !n.RTCPeerConnection && n.mozRTCPeerConnection && (n.RTCPeerConnection = n.mozRTCPeerConnection),
    e.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(r) {
        const s = n.RTCPeerConnection.prototype[r]
          , o = {
            [r]() {
                return arguments[0] = new (r === "addIceCandidate" ? n.RTCIceCandidate : n.RTCSessionDescription)(arguments[0]),
                s.apply(this, arguments)
            }
        };
        n.RTCPeerConnection.prototype[r] = o[r]
    });
    const t = {
        inboundrtp: "inbound-rtp",
        outboundrtp: "outbound-rtp",
        candidatepair: "candidate-pair",
        localcandidate: "local-candidate",
        remotecandidate: "remote-candidate"
    }
      , i = n.RTCPeerConnection.prototype.getStats;
    n.RTCPeerConnection.prototype.getStats = function() {
        const [s,o,a] = arguments;
        return i.apply(this, [s || null]).then(c => {
            if (e.version < 53 && !o)
                try {
                    c.forEach(d => {
                        d.type = t[d.type] || d.type
                    }
                    )
                } catch (d) {
                    if (d.name !== "TypeError")
                        throw d;
                    c.forEach( (u, l) => {
                        c.set(l, Object.assign({}, u, {
                            type: t[u.type] || u.type
                        }))
                    }
                    )
                }
            return c
        }
        ).then(o, a)
    }
}
function qa(n) {
    if (!(typeof n == "object" && n.RTCPeerConnection && n.RTCRtpSender) || n.RTCRtpSender && "getStats"in n.RTCRtpSender.prototype)
        return;
    const e = n.RTCPeerConnection.prototype.getSenders;
    e && (n.RTCPeerConnection.prototype.getSenders = function() {
        const r = e.apply(this, []);
        return r.forEach(s => s._pc = this),
        r
    }
    );
    const t = n.RTCPeerConnection.prototype.addTrack;
    t && (n.RTCPeerConnection.prototype.addTrack = function() {
        const r = t.apply(this, arguments);
        return r._pc = this,
        r
    }
    ),
    n.RTCRtpSender.prototype.getStats = function() {
        return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map)
    }
}
function za(n) {
    if (!(typeof n == "object" && n.RTCPeerConnection && n.RTCRtpSender) || n.RTCRtpSender && "getStats"in n.RTCRtpReceiver.prototype)
        return;
    const e = n.RTCPeerConnection.prototype.getReceivers;
    e && (n.RTCPeerConnection.prototype.getReceivers = function() {
        const i = e.apply(this, []);
        return i.forEach(r => r._pc = this),
        i
    }
    ),
    St(n, "track", t => (t.receiver._pc = t.srcElement,
    t)),
    n.RTCRtpReceiver.prototype.getStats = function() {
        return this._pc.getStats(this.track)
    }
}
function Wa(n) {
    !n.RTCPeerConnection || "removeStream"in n.RTCPeerConnection.prototype || (n.RTCPeerConnection.prototype.removeStream = function(t) {
        Ir("removeStream", "removeTrack"),
        this.getSenders().forEach(i => {
            i.track && t.getTracks().includes(i.track) && this.removeTrack(i)
        }
        )
    }
    )
}
function Ga(n) {
    n.DataChannel && !n.RTCDataChannel && (n.RTCDataChannel = n.DataChannel)
}
function Ka(n) {
    if (!(typeof n == "object" && n.RTCPeerConnection))
        return;
    const e = n.RTCPeerConnection.prototype.addTransceiver;
    e && (n.RTCPeerConnection.prototype.addTransceiver = function() {
        this.setParametersPromises = [];
        let i = arguments[1] && arguments[1].sendEncodings;
        i === void 0 && (i = []),
        i = [...i];
        const r = i.length > 0;
        r && i.forEach(o => {
            if ("rid"in o && !/^[a-z0-9]{0,16}$/i.test(o.rid))
                throw new TypeError("Invalid RID value provided.");
            if ("scaleResolutionDownBy"in o && !(parseFloat(o.scaleResolutionDownBy) >= 1))
                throw new RangeError("scale_resolution_down_by must be >= 1.0");
            if ("maxFramerate"in o && !(parseFloat(o.maxFramerate) >= 0))
                throw new RangeError("max_framerate must be >= 0.0")
        }
        );
        const s = e.apply(this, arguments);
        if (r) {
            const {sender: o} = s
              , a = o.getParameters();
            (!("encodings"in a) || a.encodings.length === 1 && Object.keys(a.encodings[0]).length === 0) && (a.encodings = i,
            o.sendEncodings = i,
            this.setParametersPromises.push(o.setParameters(a).then( () => {
                delete o.sendEncodings
            }
            ).catch( () => {
                delete o.sendEncodings
            }
            )))
        }
        return s
    }
    )
}
function Ha(n) {
    if (!(typeof n == "object" && n.RTCRtpSender))
        return;
    const e = n.RTCRtpSender.prototype.getParameters;
    e && (n.RTCRtpSender.prototype.getParameters = function() {
        const i = e.apply(this, arguments);
        return "encodings"in i || (i.encodings = [].concat(this.sendEncodings || [{}])),
        i
    }
    )
}
function Ja(n) {
    if (!(typeof n == "object" && n.RTCPeerConnection))
        return;
    const e = n.RTCPeerConnection.prototype.createOffer;
    n.RTCPeerConnection.prototype.createOffer = function() {
        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then( () => e.apply(this, arguments)).finally( () => {
            this.setParametersPromises = []
        }
        ) : e.apply(this, arguments)
    }
}
function Qa(n) {
    if (!(typeof n == "object" && n.RTCPeerConnection))
        return;
    const e = n.RTCPeerConnection.prototype.createAnswer;
    n.RTCPeerConnection.prototype.createAnswer = function() {
        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then( () => e.apply(this, arguments)).finally( () => {
            this.setParametersPromises = []
        }
        ) : e.apply(this, arguments)
    }
}
var Ss = Object.freeze({
    __proto__: null,
    shimAddTransceiver: Ka,
    shimCreateAnswer: Qa,
    shimCreateOffer: Ja,
    shimGetDisplayMedia: Ql,
    shimGetParameters: Ha,
    shimGetUserMedia: Va,
    shimOnTrack: Ba,
    shimPeerConnection: tr,
    shimRTCDataChannel: Ga,
    shimReceiverGetStats: za,
    shimRemoveStream: Wa,
    shimSenderGetStats: qa
});
function Ya(n) {
    if (!(typeof n != "object" || !n.RTCPeerConnection)) {
        if ("getLocalStreams"in n.RTCPeerConnection.prototype || (n.RTCPeerConnection.prototype.getLocalStreams = function() {
            return this._localStreams || (this._localStreams = []),
            this._localStreams
        }
        ),
        !("addStream"in n.RTCPeerConnection.prototype)) {
            const e = n.RTCPeerConnection.prototype.addTrack;
            n.RTCPeerConnection.prototype.addStream = function(i) {
                this._localStreams || (this._localStreams = []),
                this._localStreams.includes(i) || this._localStreams.push(i),
                i.getAudioTracks().forEach(r => e.call(this, r, i)),
                i.getVideoTracks().forEach(r => e.call(this, r, i))
            }
            ,
            n.RTCPeerConnection.prototype.addTrack = function(i) {
                for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
                    s[o - 1] = arguments[o];
                return s && s.forEach(a => {
                    this._localStreams ? this._localStreams.includes(a) || this._localStreams.push(a) : this._localStreams = [a]
                }
                ),
                e.apply(this, arguments)
            }
        }
        "removeStream"in n.RTCPeerConnection.prototype || (n.RTCPeerConnection.prototype.removeStream = function(t) {
            this._localStreams || (this._localStreams = []);
            const i = this._localStreams.indexOf(t);
            if (i === -1)
                return;
            this._localStreams.splice(i, 1);
            const r = t.getTracks();
            this.getSenders().forEach(s => {
                r.includes(s.track) && this.removeTrack(s)
            }
            )
        }
        )
    }
}
function $a(n) {
    if (!(typeof n != "object" || !n.RTCPeerConnection) && ("getRemoteStreams"in n.RTCPeerConnection.prototype || (n.RTCPeerConnection.prototype.getRemoteStreams = function() {
        return this._remoteStreams ? this._remoteStreams : []
    }
    ),
    !("onaddstream"in n.RTCPeerConnection.prototype))) {
        Object.defineProperty(n.RTCPeerConnection.prototype, "onaddstream", {
            get() {
                return this._onaddstream
            },
            set(t) {
                this._onaddstream && (this.removeEventListener("addstream", this._onaddstream),
                this.removeEventListener("track", this._onaddstreampoly)),
                this.addEventListener("addstream", this._onaddstream = t),
                this.addEventListener("track", this._onaddstreampoly = i => {
                    i.streams.forEach(r => {
                        if (this._remoteStreams || (this._remoteStreams = []),
                        this._remoteStreams.includes(r))
                            return;
                        this._remoteStreams.push(r);
                        const s = new Event("addstream");
                        s.stream = r,
                        this.dispatchEvent(s)
                    }
                    )
                }
                )
            }
        });
        const e = n.RTCPeerConnection.prototype.setRemoteDescription;
        n.RTCPeerConnection.prototype.setRemoteDescription = function() {
            const i = this;
            return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(r) {
                r.streams.forEach(s => {
                    if (i._remoteStreams || (i._remoteStreams = []),
                    i._remoteStreams.indexOf(s) >= 0)
                        return;
                    i._remoteStreams.push(s);
                    const o = new Event("addstream");
                    o.stream = s,
                    i.dispatchEvent(o)
                }
                )
            }
            ),
            e.apply(i, arguments)
        }
    }
}
function Xa(n) {
    if (typeof n != "object" || !n.RTCPeerConnection)
        return;
    const e = n.RTCPeerConnection.prototype
      , t = e.createOffer
      , i = e.createAnswer
      , r = e.setLocalDescription
      , s = e.setRemoteDescription
      , o = e.addIceCandidate;
    e.createOffer = function(d, u) {
        const l = arguments.length >= 2 ? arguments[2] : arguments[0]
          , h = t.apply(this, [l]);
        return u ? (h.then(d, u),
        Promise.resolve()) : h
    }
    ,
    e.createAnswer = function(d, u) {
        const l = arguments.length >= 2 ? arguments[2] : arguments[0]
          , h = i.apply(this, [l]);
        return u ? (h.then(d, u),
        Promise.resolve()) : h
    }
    ;
    let a = function(c, d, u) {
        const l = r.apply(this, [c]);
        return u ? (l.then(d, u),
        Promise.resolve()) : l
    };
    e.setLocalDescription = a,
    a = function(c, d, u) {
        const l = s.apply(this, [c]);
        return u ? (l.then(d, u),
        Promise.resolve()) : l
    }
    ,
    e.setRemoteDescription = a,
    a = function(c, d, u) {
        const l = o.apply(this, [c]);
        return u ? (l.then(d, u),
        Promise.resolve()) : l
    }
    ,
    e.addIceCandidate = a
}
function Za(n) {
    const e = n && n.navigator;
    if (e.mediaDevices && e.mediaDevices.getUserMedia) {
        const t = e.mediaDevices
          , i = t.getUserMedia.bind(t);
        e.mediaDevices.getUserMedia = r => i(ec(r))
    }
    !e.getUserMedia && e.mediaDevices && e.mediaDevices.getUserMedia && (e.getUserMedia = function(i, r, s) {
        e.mediaDevices.getUserMedia(i).then(r, s)
    }
    .bind(e))
}
function ec(n) {
    return n && n.video !== void 0 ? Object.assign({}, n, {
        video: Aa(n.video)
    }) : n
}
function tc(n) {
    if (!n.RTCPeerConnection)
        return;
    const e = n.RTCPeerConnection;
    n.RTCPeerConnection = function(i, r) {
        if (i && i.iceServers) {
            const s = [];
            for (let o = 0; o < i.iceServers.length; o++) {
                let a = i.iceServers[o];
                a.urls === void 0 && a.url ? (Ir("RTCIceServer.url", "RTCIceServer.urls"),
                a = JSON.parse(JSON.stringify(a)),
                a.urls = a.url,
                delete a.url,
                s.push(a)) : s.push(i.iceServers[o])
            }
            i.iceServers = s
        }
        return new e(i,r)
    }
    ,
    n.RTCPeerConnection.prototype = e.prototype,
    "generateCertificate"in e && Object.defineProperty(n.RTCPeerConnection, "generateCertificate", {
        get() {
            return e.generateCertificate
        }
    })
}
function nc(n) {
    typeof n == "object" && n.RTCTrackEvent && "receiver"in n.RTCTrackEvent.prototype && !("transceiver"in n.RTCTrackEvent.prototype) && Object.defineProperty(n.RTCTrackEvent.prototype, "transceiver", {
        get() {
            return {
                receiver: this.receiver
            }
        }
    })
}
function ic(n) {
    const e = n.RTCPeerConnection.prototype.createOffer;
    n.RTCPeerConnection.prototype.createOffer = function(i) {
        if (i) {
            typeof i.offerToReceiveAudio < "u" && (i.offerToReceiveAudio = !!i.offerToReceiveAudio);
            const r = this.getTransceivers().find(o => o.receiver.track.kind === "audio");
            i.offerToReceiveAudio === !1 && r ? r.direction === "sendrecv" ? r.setDirection ? r.setDirection("sendonly") : r.direction = "sendonly" : r.direction === "recvonly" && (r.setDirection ? r.setDirection("inactive") : r.direction = "inactive") : i.offerToReceiveAudio === !0 && !r && this.addTransceiver("audio", {
                direction: "recvonly"
            }),
            typeof i.offerToReceiveVideo < "u" && (i.offerToReceiveVideo = !!i.offerToReceiveVideo);
            const s = this.getTransceivers().find(o => o.receiver.track.kind === "video");
            i.offerToReceiveVideo === !1 && s ? s.direction === "sendrecv" ? s.setDirection ? s.setDirection("sendonly") : s.direction = "sendonly" : s.direction === "recvonly" && (s.setDirection ? s.setDirection("inactive") : s.direction = "inactive") : i.offerToReceiveVideo === !0 && !s && this.addTransceiver("video", {
                direction: "recvonly"
            })
        }
        return e.apply(this, arguments)
    }
}
function rc(n) {
    typeof n != "object" || n.AudioContext || (n.AudioContext = n.webkitAudioContext)
}
var Ts = Object.freeze({
    __proto__: null,
    shimAudioContext: rc,
    shimCallbacksAPI: Xa,
    shimConstraints: ec,
    shimCreateOfferLegacy: ic,
    shimGetUserMedia: Za,
    shimLocalStreamsAPI: Ya,
    shimRTCIceServerUrls: tc,
    shimRemoteStreamsAPI: $a,
    shimTrackEventTransceiver: nc
}), bi = {
    exports: {}
}, Cs;
function Yl() {
    return Cs || (Cs = 1,
    function(n) {
        const e = {};
        e.generateIdentifier = function() {
            return Math.random().toString(36).substring(2, 12)
        }
        ,
        e.localCName = e.generateIdentifier(),
        e.splitLines = function(t) {
            return t.trim().split(`
`).map(i => i.trim())
        }
        ,
        e.splitSections = function(t) {
            return t.split(`
m=`).map( (r, s) => (s > 0 ? "m=" + r : r).trim() + `\r
`)
        }
        ,
        e.getDescription = function(t) {
            const i = e.splitSections(t);
            return i && i[0]
        }
        ,
        e.getMediaSections = function(t) {
            const i = e.splitSections(t);
            return i.shift(),
            i
        }
        ,
        e.matchPrefix = function(t, i) {
            return e.splitLines(t).filter(r => r.indexOf(i) === 0)
        }
        ,
        e.parseCandidate = function(t) {
            let i;
            t.indexOf("a=candidate:") === 0 ? i = t.substring(12).split(" ") : i = t.substring(10).split(" ");
            const r = {
                foundation: i[0],
                component: {
                    1: "rtp",
                    2: "rtcp"
                }[i[1]] || i[1],
                protocol: i[2].toLowerCase(),
                priority: parseInt(i[3], 10),
                ip: i[4],
                address: i[4],
                port: parseInt(i[5], 10),
                type: i[7]
            };
            for (let s = 8; s < i.length; s += 2)
                switch (i[s]) {
                case "raddr":
                    r.relatedAddress = i[s + 1];
                    break;
                case "rport":
                    r.relatedPort = parseInt(i[s + 1], 10);
                    break;
                case "tcptype":
                    r.tcpType = i[s + 1];
                    break;
                case "ufrag":
                    r.ufrag = i[s + 1],
                    r.usernameFragment = i[s + 1];
                    break;
                default:
                    r[i[s]] === void 0 && (r[i[s]] = i[s + 1]);
                    break
                }
            return r
        }
        ,
        e.writeCandidate = function(t) {
            const i = [];
            i.push(t.foundation);
            const r = t.component;
            r === "rtp" ? i.push(1) : r === "rtcp" ? i.push(2) : i.push(r),
            i.push(t.protocol.toUpperCase()),
            i.push(t.priority),
            i.push(t.address || t.ip),
            i.push(t.port);
            const s = t.type;
            return i.push("typ"),
            i.push(s),
            s !== "host" && t.relatedAddress && t.relatedPort && (i.push("raddr"),
            i.push(t.relatedAddress),
            i.push("rport"),
            i.push(t.relatedPort)),
            t.tcpType && t.protocol.toLowerCase() === "tcp" && (i.push("tcptype"),
            i.push(t.tcpType)),
            (t.usernameFragment || t.ufrag) && (i.push("ufrag"),
            i.push(t.usernameFragment || t.ufrag)),
            "candidate:" + i.join(" ")
        }
        ,
        e.parseIceOptions = function(t) {
            return t.substring(14).split(" ")
        }
        ,
        e.parseRtpMap = function(t) {
            let i = t.substring(9).split(" ");
            const r = {
                payloadType: parseInt(i.shift(), 10)
            };
            return i = i[0].split("/"),
            r.name = i[0],
            r.clockRate = parseInt(i[1], 10),
            r.channels = i.length === 3 ? parseInt(i[2], 10) : 1,
            r.numChannels = r.channels,
            r
        }
        ,
        e.writeRtpMap = function(t) {
            let i = t.payloadType;
            t.preferredPayloadType !== void 0 && (i = t.preferredPayloadType);
            const r = t.channels || t.numChannels || 1;
            return "a=rtpmap:" + i + " " + t.name + "/" + t.clockRate + (r !== 1 ? "/" + r : "") + `\r
`
        }
        ,
        e.parseExtmap = function(t) {
            const i = t.substring(9).split(" ");
            return {
                id: parseInt(i[0], 10),
                direction: i[0].indexOf("/") > 0 ? i[0].split("/")[1] : "sendrecv",
                uri: i[1],
                attributes: i.slice(2).join(" ")
            }
        }
        ,
        e.writeExtmap = function(t) {
            return "a=extmap:" + (t.id || t.preferredId) + (t.direction && t.direction !== "sendrecv" ? "/" + t.direction : "") + " " + t.uri + (t.attributes ? " " + t.attributes : "") + `\r
`
        }
        ,
        e.parseFmtp = function(t) {
            const i = {};
            let r;
            const s = t.substring(t.indexOf(" ") + 1).split(";");
            for (let o = 0; o < s.length; o++)
                r = s[o].trim().split("="),
                i[r[0].trim()] = r[1];
            return i
        }
        ,
        e.writeFmtp = function(t) {
            let i = ""
              , r = t.payloadType;
            if (t.preferredPayloadType !== void 0 && (r = t.preferredPayloadType),
            t.parameters && Object.keys(t.parameters).length) {
                const s = [];
                Object.keys(t.parameters).forEach(o => {
                    t.parameters[o] !== void 0 ? s.push(o + "=" + t.parameters[o]) : s.push(o)
                }
                ),
                i += "a=fmtp:" + r + " " + s.join(";") + `\r
`
            }
            return i
        }
        ,
        e.parseRtcpFb = function(t) {
            const i = t.substring(t.indexOf(" ") + 1).split(" ");
            return {
                type: i.shift(),
                parameter: i.join(" ")
            }
        }
        ,
        e.writeRtcpFb = function(t) {
            let i = ""
              , r = t.payloadType;
            return t.preferredPayloadType !== void 0 && (r = t.preferredPayloadType),
            t.rtcpFeedback && t.rtcpFeedback.length && t.rtcpFeedback.forEach(s => {
                i += "a=rtcp-fb:" + r + " " + s.type + (s.parameter && s.parameter.length ? " " + s.parameter : "") + `\r
`
            }
            ),
            i
        }
        ,
        e.parseSsrcMedia = function(t) {
            const i = t.indexOf(" ")
              , r = {
                ssrc: parseInt(t.substring(7, i), 10)
            }
              , s = t.indexOf(":", i);
            return s > -1 ? (r.attribute = t.substring(i + 1, s),
            r.value = t.substring(s + 1)) : r.attribute = t.substring(i + 1),
            r
        }
        ,
        e.parseSsrcGroup = function(t) {
            const i = t.substring(13).split(" ");
            return {
                semantics: i.shift(),
                ssrcs: i.map(r => parseInt(r, 10))
            }
        }
        ,
        e.getMid = function(t) {
            const i = e.matchPrefix(t, "a=mid:")[0];
            if (i)
                return i.substring(6)
        }
        ,
        e.parseFingerprint = function(t) {
            const i = t.substring(14).split(" ");
            return {
                algorithm: i[0].toLowerCase(),
                value: i[1].toUpperCase()
            }
        }
        ,
        e.getDtlsParameters = function(t, i) {
            return {
                role: "auto",
                fingerprints: e.matchPrefix(t + i, "a=fingerprint:").map(e.parseFingerprint)
            }
        }
        ,
        e.writeDtlsParameters = function(t, i) {
            let r = "a=setup:" + i + `\r
`;
            return t.fingerprints.forEach(s => {
                r += "a=fingerprint:" + s.algorithm + " " + s.value + `\r
`
            }
            ),
            r
        }
        ,
        e.parseCryptoLine = function(t) {
            const i = t.substring(9).split(" ");
            return {
                tag: parseInt(i[0], 10),
                cryptoSuite: i[1],
                keyParams: i[2],
                sessionParams: i.slice(3)
            }
        }
        ,
        e.writeCryptoLine = function(t) {
            return "a=crypto:" + t.tag + " " + t.cryptoSuite + " " + (typeof t.keyParams == "object" ? e.writeCryptoKeyParams(t.keyParams) : t.keyParams) + (t.sessionParams ? " " + t.sessionParams.join(" ") : "") + `\r
`
        }
        ,
        e.parseCryptoKeyParams = function(t) {
            if (t.indexOf("inline:") !== 0)
                return null;
            const i = t.substring(7).split("|");
            return {
                keyMethod: "inline",
                keySalt: i[0],
                lifeTime: i[1],
                mkiValue: i[2] ? i[2].split(":")[0] : void 0,
                mkiLength: i[2] ? i[2].split(":")[1] : void 0
            }
        }
        ,
        e.writeCryptoKeyParams = function(t) {
            return t.keyMethod + ":" + t.keySalt + (t.lifeTime ? "|" + t.lifeTime : "") + (t.mkiValue && t.mkiLength ? "|" + t.mkiValue + ":" + t.mkiLength : "")
        }
        ,
        e.getCryptoParameters = function(t, i) {
            return e.matchPrefix(t + i, "a=crypto:").map(e.parseCryptoLine)
        }
        ,
        e.getIceParameters = function(t, i) {
            const r = e.matchPrefix(t + i, "a=ice-ufrag:")[0]
              , s = e.matchPrefix(t + i, "a=ice-pwd:")[0];
            return r && s ? {
                usernameFragment: r.substring(12),
                password: s.substring(10)
            } : null
        }
        ,
        e.writeIceParameters = function(t) {
            let i = "a=ice-ufrag:" + t.usernameFragment + `\r
a=ice-pwd:` + t.password + `\r
`;
            return t.iceLite && (i += `a=ice-lite\r
`),
            i
        }
        ,
        e.parseRtpParameters = function(t) {
            const i = {
                codecs: [],
                headerExtensions: [],
                fecMechanisms: [],
                rtcp: []
            }
              , s = e.splitLines(t)[0].split(" ");
            i.profile = s[2];
            for (let a = 3; a < s.length; a++) {
                const c = s[a]
                  , d = e.matchPrefix(t, "a=rtpmap:" + c + " ")[0];
                if (d) {
                    const u = e.parseRtpMap(d)
                      , l = e.matchPrefix(t, "a=fmtp:" + c + " ");
                    switch (u.parameters = l.length ? e.parseFmtp(l[0]) : {},
                    u.rtcpFeedback = e.matchPrefix(t, "a=rtcp-fb:" + c + " ").map(e.parseRtcpFb),
                    i.codecs.push(u),
                    u.name.toUpperCase()) {
                    case "RED":
                    case "ULPFEC":
                        i.fecMechanisms.push(u.name.toUpperCase());
                        break
                    }
                }
            }
            e.matchPrefix(t, "a=extmap:").forEach(a => {
                i.headerExtensions.push(e.parseExtmap(a))
            }
            );
            const o = e.matchPrefix(t, "a=rtcp-fb:* ").map(e.parseRtcpFb);
            return i.codecs.forEach(a => {
                o.forEach(c => {
                    a.rtcpFeedback.find(u => u.type === c.type && u.parameter === c.parameter) || a.rtcpFeedback.push(c)
                }
                )
            }
            ),
            i
        }
        ,
        e.writeRtpDescription = function(t, i) {
            let r = "";
            r += "m=" + t + " ",
            r += i.codecs.length > 0 ? "9" : "0",
            r += " " + (i.profile || "UDP/TLS/RTP/SAVPF") + " ",
            r += i.codecs.map(o => o.preferredPayloadType !== void 0 ? o.preferredPayloadType : o.payloadType).join(" ") + `\r
`,
            r += `c=IN IP4 0.0.0.0\r
`,
            r += `a=rtcp:9 IN IP4 0.0.0.0\r
`,
            i.codecs.forEach(o => {
                r += e.writeRtpMap(o),
                r += e.writeFmtp(o),
                r += e.writeRtcpFb(o)
            }
            );
            let s = 0;
            return i.codecs.forEach(o => {
                o.maxptime > s && (s = o.maxptime)
            }
            ),
            s > 0 && (r += "a=maxptime:" + s + `\r
`),
            i.headerExtensions && i.headerExtensions.forEach(o => {
                r += e.writeExtmap(o)
            }
            ),
            r
        }
        ,
        e.parseRtpEncodingParameters = function(t) {
            const i = []
              , r = e.parseRtpParameters(t)
              , s = r.fecMechanisms.indexOf("RED") !== -1
              , o = r.fecMechanisms.indexOf("ULPFEC") !== -1
              , a = e.matchPrefix(t, "a=ssrc:").map(h => e.parseSsrcMedia(h)).filter(h => h.attribute === "cname")
              , c = a.length > 0 && a[0].ssrc;
            let d;
            const u = e.matchPrefix(t, "a=ssrc-group:FID").map(h => h.substring(17).split(" ").map(v => parseInt(v, 10)));
            u.length > 0 && u[0].length > 1 && u[0][0] === c && (d = u[0][1]),
            r.codecs.forEach(h => {
                if (h.name.toUpperCase() === "RTX" && h.parameters.apt) {
                    let f = {
                        ssrc: c,
                        codecPayloadType: parseInt(h.parameters.apt, 10)
                    };
                    c && d && (f.rtx = {
                        ssrc: d
                    }),
                    i.push(f),
                    s && (f = JSON.parse(JSON.stringify(f)),
                    f.fec = {
                        ssrc: c,
                        mechanism: o ? "red+ulpfec" : "red"
                    },
                    i.push(f))
                }
            }
            ),
            i.length === 0 && c && i.push({
                ssrc: c
            });
            let l = e.matchPrefix(t, "b=");
            return l.length && (l[0].indexOf("b=TIAS:") === 0 ? l = parseInt(l[0].substring(7), 10) : l[0].indexOf("b=AS:") === 0 ? l = parseInt(l[0].substring(5), 10) * 1e3 * .95 - 50 * 40 * 8 : l = void 0,
            i.forEach(h => {
                h.maxBitrate = l
            }
            )),
            i
        }
        ,
        e.parseRtcpParameters = function(t) {
            const i = {}
              , r = e.matchPrefix(t, "a=ssrc:").map(a => e.parseSsrcMedia(a)).filter(a => a.attribute === "cname")[0];
            r && (i.cname = r.value,
            i.ssrc = r.ssrc);
            const s = e.matchPrefix(t, "a=rtcp-rsize");
            i.reducedSize = s.length > 0,
            i.compound = s.length === 0;
            const o = e.matchPrefix(t, "a=rtcp-mux");
            return i.mux = o.length > 0,
            i
        }
        ,
        e.writeRtcpParameters = function(t) {
            let i = "";
            return t.reducedSize && (i += `a=rtcp-rsize\r
`),
            t.mux && (i += `a=rtcp-mux\r
`),
            t.ssrc !== void 0 && t.cname && (i += "a=ssrc:" + t.ssrc + " cname:" + t.cname + `\r
`),
            i
        }
        ,
        e.parseMsid = function(t) {
            let i;
            const r = e.matchPrefix(t, "a=msid:");
            if (r.length === 1)
                return i = r[0].substring(7).split(" "),
                {
                    stream: i[0],
                    track: i[1]
                };
            const s = e.matchPrefix(t, "a=ssrc:").map(o => e.parseSsrcMedia(o)).filter(o => o.attribute === "msid");
            if (s.length > 0)
                return i = s[0].value.split(" "),
                {
                    stream: i[0],
                    track: i[1]
                }
        }
        ,
        e.parseSctpDescription = function(t) {
            const i = e.parseMLine(t)
              , r = e.matchPrefix(t, "a=max-message-size:");
            let s;
            r.length > 0 && (s = parseInt(r[0].substring(19), 10)),
            isNaN(s) && (s = 65536);
            const o = e.matchPrefix(t, "a=sctp-port:");
            if (o.length > 0)
                return {
                    port: parseInt(o[0].substring(12), 10),
                    protocol: i.fmt,
                    maxMessageSize: s
                };
            const a = e.matchPrefix(t, "a=sctpmap:");
            if (a.length > 0) {
                const c = a[0].substring(10).split(" ");
                return {
                    port: parseInt(c[0], 10),
                    protocol: c[1],
                    maxMessageSize: s
                }
            }
        }
        ,
        e.writeSctpDescription = function(t, i) {
            let r = [];
            return t.protocol !== "DTLS/SCTP" ? r = ["m=" + t.kind + " 9 " + t.protocol + " " + i.protocol + `\r
`, `c=IN IP4 0.0.0.0\r
`, "a=sctp-port:" + i.port + `\r
`] : r = ["m=" + t.kind + " 9 " + t.protocol + " " + i.port + `\r
`, `c=IN IP4 0.0.0.0\r
`, "a=sctpmap:" + i.port + " " + i.protocol + ` 65535\r
`],
            i.maxMessageSize !== void 0 && r.push("a=max-message-size:" + i.maxMessageSize + `\r
`),
            r.join("")
        }
        ,
        e.generateSessionId = function() {
            return Math.random().toString().substr(2, 22)
        }
        ,
        e.writeSessionBoilerplate = function(t, i, r) {
            let s;
            const o = i !== void 0 ? i : 2;
            return t ? s = t : s = e.generateSessionId(),
            `v=0\r
o=` + (r || "thisisadapterortc") + " " + s + " " + o + ` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`
        }
        ,
        e.getDirection = function(t, i) {
            const r = e.splitLines(t);
            for (let s = 0; s < r.length; s++)
                switch (r[s]) {
                case "a=sendrecv":
                case "a=sendonly":
                case "a=recvonly":
                case "a=inactive":
                    return r[s].substring(2)
                }
            return i ? e.getDirection(i) : "sendrecv"
        }
        ,
        e.getKind = function(t) {
            return e.splitLines(t)[0].split(" ")[0].substring(2)
        }
        ,
        e.isRejected = function(t) {
            return t.split(" ", 2)[1] === "0"
        }
        ,
        e.parseMLine = function(t) {
            const r = e.splitLines(t)[0].substring(2).split(" ");
            return {
                kind: r[0],
                port: parseInt(r[1], 10),
                protocol: r[2],
                fmt: r.slice(3).join(" ")
            }
        }
        ,
        e.parseOLine = function(t) {
            const r = e.matchPrefix(t, "o=")[0].substring(2).split(" ");
            return {
                username: r[0],
                sessionId: r[1],
                sessionVersion: parseInt(r[2], 10),
                netType: r[3],
                addressType: r[4],
                address: r[5]
            }
        }
        ,
        e.isValidSDP = function(t) {
            if (typeof t != "string" || t.length === 0)
                return !1;
            const i = e.splitLines(t);
            for (let r = 0; r < i.length; r++)
                if (i[r].length < 2 || i[r].charAt(1) !== "=")
                    return !1;
            return !0
        }
        ,
        n.exports = e
    }(bi)),
    bi.exports
}
var sc = Yl()
  , Ft = jl(sc)
  , $l = hu({
    __proto__: null,
    default: Ft
}, [sc]);
function Ln(n) {
    if (!n.RTCIceCandidate || n.RTCIceCandidate && "foundation"in n.RTCIceCandidate.prototype)
        return;
    const e = n.RTCIceCandidate;
    n.RTCIceCandidate = function(i) {
        if (typeof i == "object" && i.candidate && i.candidate.indexOf("a=") === 0 && (i = JSON.parse(JSON.stringify(i)),
        i.candidate = i.candidate.substring(2)),
        i.candidate && i.candidate.length) {
            const r = new e(i)
              , s = Ft.parseCandidate(i.candidate);
            for (const o in s)
                o in r || Object.defineProperty(r, o, {
                    value: s[o]
                });
            return r.toJSON = function() {
                return {
                    candidate: r.candidate,
                    sdpMid: r.sdpMid,
                    sdpMLineIndex: r.sdpMLineIndex,
                    usernameFragment: r.usernameFragment
                }
            }
            ,
            r
        }
        return new e(i)
    }
    ,
    n.RTCIceCandidate.prototype = e.prototype,
    St(n, "icecandidate", t => (t.candidate && Object.defineProperty(t, "candidate", {
        value: new n.RTCIceCandidate(t.candidate),
        writable: "false"
    }),
    t))
}
function nr(n) {
    !n.RTCIceCandidate || n.RTCIceCandidate && "relayProtocol"in n.RTCIceCandidate.prototype || St(n, "icecandidate", e => {
        if (e.candidate) {
            const t = Ft.parseCandidate(e.candidate.candidate);
            t.type === "relay" && (e.candidate.relayProtocol = {
                0: "tls",
                1: "tcp",
                2: "udp"
            }[t.priority >> 24])
        }
        return e
    }
    )
}
function Un(n, e) {
    if (!n.RTCPeerConnection)
        return;
    "sctp"in n.RTCPeerConnection.prototype || Object.defineProperty(n.RTCPeerConnection.prototype, "sctp", {
        get() {
            return typeof this._sctp > "u" ? null : this._sctp
        }
    });
    const t = function(a) {
        if (!a || !a.sdp)
            return !1;
        const c = Ft.splitSections(a.sdp);
        return c.shift(),
        c.some(d => {
            const u = Ft.parseMLine(d);
            return u && u.kind === "application" && u.protocol.indexOf("SCTP") !== -1
        }
        )
    }
      , i = function(a) {
        const c = a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
        if (c === null || c.length < 2)
            return -1;
        const d = parseInt(c[1], 10);
        return d !== d ? -1 : d
    }
      , r = function(a) {
        let c = 65536;
        return e.browser === "firefox" && (e.version < 57 ? a === -1 ? c = 16384 : c = 2147483637 : e.version < 60 ? c = e.version === 57 ? 65535 : 65536 : c = 2147483637),
        c
    }
      , s = function(a, c) {
        let d = 65536;
        e.browser === "firefox" && e.version === 57 && (d = 65535);
        const u = Ft.matchPrefix(a.sdp, "a=max-message-size:");
        return u.length > 0 ? d = parseInt(u[0].substring(19), 10) : e.browser === "firefox" && c !== -1 && (d = 2147483637),
        d
    }
      , o = n.RTCPeerConnection.prototype.setRemoteDescription;
    n.RTCPeerConnection.prototype.setRemoteDescription = function() {
        if (this._sctp = null,
        e.browser === "chrome" && e.version >= 76) {
            const {sdpSemantics: c} = this.getConfiguration();
            c === "plan-b" && Object.defineProperty(this, "sctp", {
                get() {
                    return typeof this._sctp > "u" ? null : this._sctp
                },
                enumerable: !0,
                configurable: !0
            })
        }
        if (t(arguments[0])) {
            const c = i(arguments[0])
              , d = r(c)
              , u = s(arguments[0], c);
            let l;
            d === 0 && u === 0 ? l = Number.POSITIVE_INFINITY : d === 0 || u === 0 ? l = Math.max(d, u) : l = Math.min(d, u);
            const h = {};
            Object.defineProperty(h, "maxMessageSize", {
                get() {
                    return l
                }
            }),
            this._sctp = h
        }
        return o.apply(this, arguments)
    }
}
function Fn(n) {
    if (!(n.RTCPeerConnection && "createDataChannel"in n.RTCPeerConnection.prototype))
        return;
    function e(i, r) {
        const s = i.send;
        i.send = function() {
            const a = arguments[0]
              , c = a.length || a.size || a.byteLength;
            if (i.readyState === "open" && r.sctp && c > r.sctp.maxMessageSize)
                throw new TypeError("Message too large (can send a maximum of " + r.sctp.maxMessageSize + " bytes)");
            return s.apply(i, arguments)
        }
    }
    const t = n.RTCPeerConnection.prototype.createDataChannel;
    n.RTCPeerConnection.prototype.createDataChannel = function() {
        const r = t.apply(this, arguments);
        return e(r, this),
        r
    }
    ,
    St(n, "datachannel", i => (e(i.channel, i.target),
    i))
}
function ir(n) {
    if (!n.RTCPeerConnection || "connectionState"in n.RTCPeerConnection.prototype)
        return;
    const e = n.RTCPeerConnection.prototype;
    Object.defineProperty(e, "connectionState", {
        get() {
            return {
                completed: "connected",
                checking: "connecting"
            }[this.iceConnectionState] || this.iceConnectionState
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e, "onconnectionstatechange", {
        get() {
            return this._onconnectionstatechange || null
        },
        set(t) {
            this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange),
            delete this._onconnectionstatechange),
            t && this.addEventListener("connectionstatechange", this._onconnectionstatechange = t)
        },
        enumerable: !0,
        configurable: !0
    }),
    ["setLocalDescription", "setRemoteDescription"].forEach(t => {
        const i = e[t];
        e[t] = function() {
            return this._connectionstatechangepoly || (this._connectionstatechangepoly = r => {
                const s = r.target;
                if (s._lastConnectionState !== s.connectionState) {
                    s._lastConnectionState = s.connectionState;
                    const o = new Event("connectionstatechange",r);
                    s.dispatchEvent(o)
                }
                return r
            }
            ,
            this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)),
            i.apply(this, arguments)
        }
    }
    )
}
function rr(n, e) {
    if (!n.RTCPeerConnection || e.browser === "chrome" && e.version >= 71 || e.browser === "safari" && e.version >= 605)
        return;
    const t = n.RTCPeerConnection.prototype.setRemoteDescription;
    n.RTCPeerConnection.prototype.setRemoteDescription = function(r) {
        if (r && r.sdp && r.sdp.indexOf(`
a=extmap-allow-mixed`) !== -1) {
            const s = r.sdp.split(`
`).filter(o => o.trim() !== "a=extmap-allow-mixed").join(`
`);
            n.RTCSessionDescription && r instanceof n.RTCSessionDescription ? arguments[0] = new n.RTCSessionDescription({
                type: r.type,
                sdp: s
            }) : r.sdp = s
        }
        return t.apply(this, arguments)
    }
}
function jn(n, e) {
    if (!(n.RTCPeerConnection && n.RTCPeerConnection.prototype))
        return;
    const t = n.RTCPeerConnection.prototype.addIceCandidate;
    !t || t.length === 0 || (n.RTCPeerConnection.prototype.addIceCandidate = function() {
        return arguments[0] ? (e.browser === "chrome" && e.version < 78 || e.browser === "firefox" && e.version < 68 || e.browser === "safari") && arguments[0] && arguments[0].candidate === "" ? Promise.resolve() : t.apply(this, arguments) : (arguments[1] && arguments[1].apply(null),
        Promise.resolve())
    }
    )
}
function Vn(n, e) {
    if (!(n.RTCPeerConnection && n.RTCPeerConnection.prototype))
        return;
    const t = n.RTCPeerConnection.prototype.setLocalDescription;
    !t || t.length === 0 || (n.RTCPeerConnection.prototype.setLocalDescription = function() {
        let r = arguments[0] || {};
        if (typeof r != "object" || r.type && r.sdp)
            return t.apply(this, arguments);
        if (r = {
            type: r.type,
            sdp: r.sdp
        },
        !r.type)
            switch (this.signalingState) {
            case "stable":
            case "have-local-offer":
            case "have-remote-pranswer":
                r.type = "offer";
                break;
            default:
                r.type = "answer";
                break
            }
        return r.sdp || r.type !== "offer" && r.type !== "answer" ? t.apply(this, [r]) : (r.type === "offer" ? this.createOffer : this.createAnswer).apply(this).then(o => t.apply(this, [o]))
    }
    )
}
var Xl = Object.freeze({
    __proto__: null,
    removeExtmapAllowMixed: rr,
    shimAddIceCandidateNullOrEmpty: jn,
    shimConnectionState: ir,
    shimMaxMessageSize: Un,
    shimParameterlessSetLocalDescription: Vn,
    shimRTCIceCandidate: Ln,
    shimRTCIceCandidateRelayProtocol: nr,
    shimSendThrowTypeError: Fn
});
function Zl() {
    let {window: n} = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      , e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        shimChrome: !0,
        shimFirefox: !0,
        shimSafari: !0
    };
    const t = xa
      , i = Jl(n)
      , r = {
        browserDetails: i,
        commonShim: Xl,
        extractVersion: Nn,
        disableLog: Kl,
        disableWarnings: Hl,
        sdp: $l
    };
    switch (i.browser) {
    case "chrome":
        if (!ks || !er || !e.shimChrome)
            return t("Chrome shim is not included in this adapter release."),
            r;
        if (i.version === null)
            return t("Chrome shim can not determine version, not shimming."),
            r;
        t("adapter.js shimming chrome."),
        r.browserShim = ks,
        jn(n, i),
        Vn(n),
        Da(n, i),
        Ma(n),
        er(n, i),
        Oa(n),
        Fa(n, i),
        Na(n),
        La(n),
        ja(n, i),
        Ln(n),
        nr(n),
        ir(n),
        Un(n, i),
        Fn(n),
        rr(n, i);
        break;
    case "firefox":
        if (!Ss || !tr || !e.shimFirefox)
            return t("Firefox shim is not included in this adapter release."),
            r;
        t("adapter.js shimming firefox."),
        r.browserShim = Ss,
        jn(n, i),
        Vn(n),
        Va(n, i),
        tr(n, i),
        Ba(n),
        Wa(n),
        qa(n),
        za(n),
        Ga(n),
        Ka(n),
        Ha(n),
        Ja(n),
        Qa(n),
        Ln(n),
        ir(n),
        Un(n, i),
        Fn(n);
        break;
    case "safari":
        if (!Ts || !e.shimSafari)
            return t("Safari shim is not included in this adapter release."),
            r;
        t("adapter.js shimming safari."),
        r.browserShim = Ts,
        jn(n, i),
        Vn(n),
        tc(n),
        ic(n),
        Xa(n),
        Ya(n),
        $a(n),
        nc(n),
        Za(n),
        rc(n),
        Ln(n),
        nr(n),
        Un(n, i),
        Fn(n),
        rr(n, i);
        break;
    default:
        t("Unsupported browser!");
        break
    }
    return r
}
Zl({
    window: typeof window > "u" ? void 0 : window
});
const eh = 10
  , Rn = "lk_e2ee"
  , th = "LKFrameEncryptionKey"
  , nh = {
    sharedKey: !1,
    ratchetSalt: th,
    ratchetWindowSize: 8,
    failureTolerance: eh,
    keyringSize: 16
};
var lt;
(function(n) {
    n.SetKey = "setKey",
    n.RatchetRequest = "ratchetRequest",
    n.KeyRatcheted = "keyRatcheted"
}
)(lt || (lt = {}));
var ws;
(function(n) {
    n.KeyRatcheted = "keyRatcheted"
}
)(ws || (ws = {}));
var ut;
(function(n) {
    n.ParticipantEncryptionStatusChanged = "participantEncryptionStatusChanged",
    n.EncryptionError = "encryptionError"
}
)(ut || (ut = {}));
var Ps;
(function(n) {
    n.Error = "cryptorError"
}
)(Ps || (Ps = {}));
function ih() {
    return rh() || sr()
}
function sr() {
    return typeof window.RTCRtpScriptTransform < "u"
}
function rh() {
    return typeof window.RTCRtpSender < "u" && typeof window.RTCRtpSender.prototype.createEncodedStreams < "u"
}
function sh(n) {
    return m(this, void 0, void 0, function*() {
        let e = new TextEncoder;
        return yield crypto.subtle.importKey("raw", e.encode(n), {
            name: "PBKDF2"
        }, !1, ["deriveBits", "deriveKey"])
    })
}
function oh(n) {
    return m(this, void 0, void 0, function*() {
        return yield crypto.subtle.importKey("raw", n, "HKDF", !1, ["deriveBits", "deriveKey"])
    })
}
class ah extends Ye.EventEmitter {
    constructor() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        super(),
        this.onKeyRatcheted = (t, i) => {
            K.debug("key ratcheted event received", {
                material: t,
                keyIndex: i
            })
        }
        ,
        this.keyInfoMap = new Map,
        this.options = Object.assign(Object.assign({}, nh), e),
        this.on(lt.KeyRatcheted, this.onKeyRatcheted)
    }
    onSetEncryptionKey(e, t, i) {
        const r = {
            key: e,
            participantIdentity: t,
            keyIndex: i
        };
        if (!this.options.sharedKey && !t)
            throw new Error("participant identity needs to be passed for encryption key if sharedKey option is false");
        this.keyInfoMap.set("".concat(t ?? "shared", "-").concat(i ?? 0), r),
        this.emit(lt.SetKey, r)
    }
    getKeys() {
        return Array.from(this.keyInfoMap.values())
    }
    getOptions() {
        return this.options
    }
    ratchetKey(e, t) {
        this.emit(lt.RatchetRequest, e, t)
    }
}
class eg extends ah {
    constructor() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const t = Object.assign(Object.assign({}, e), {
            sharedKey: !0,
            ratchetWindowSize: 0,
            failureTolerance: -1
        });
        super(t)
    }
    setKey(e) {
        return m(this, void 0, void 0, function*() {
            const t = typeof e == "string" ? yield sh(e) : yield oh(e);
            this.onSetEncryptionKey(t)
        })
    }
}
class Tt extends Error {
    constructor(e, t) {
        super(t || "an error has occured"),
        this.code = e
    }
}
var ke;
(function(n) {
    n[n.NotAllowed = 0] = "NotAllowed",
    n[n.ServerUnreachable = 1] = "ServerUnreachable",
    n[n.InternalError = 2] = "InternalError",
    n[n.Cancelled = 3] = "Cancelled",
    n[n.LeaveRequest = 4] = "LeaveRequest"
}
)(ke || (ke = {}));
class $ extends Tt {
    constructor(e, t, i) {
        super(1, e),
        this.status = i,
        this.reason = t
    }
}
class xr extends Tt {
    constructor(e) {
        super(21, e ?? "device is unsupported")
    }
}
class Je extends Tt {
    constructor(e) {
        super(20, e ?? "track is invalid")
    }
}
class ch extends Tt {
    constructor(e) {
        super(10, e ?? "unsupported server")
    }
}
class le extends Tt {
    constructor(e) {
        super(12, e ?? "unexpected connection state")
    }
}
class or extends Tt {
    constructor(e) {
        super(13, e ?? "unable to negotiate")
    }
}
class Es extends Tt {
    constructor(e, t) {
        super(15, e),
        this.reason = t
    }
}
var $n;
(function(n) {
    n.PermissionDenied = "PermissionDenied",
    n.NotFound = "NotFound",
    n.DeviceInUse = "DeviceInUse",
    n.Other = "Other"
}
)($n || ($n = {}));
(function(n) {
    function e(t) {
        if (t && "name"in t)
            return t.name === "NotFoundError" || t.name === "DevicesNotFoundError" ? n.NotFound : t.name === "NotAllowedError" || t.name === "PermissionDeniedError" ? n.PermissionDenied : t.name === "NotReadableError" || t.name === "TrackStartError" ? n.DeviceInUse : n.Other
    }
    n.getFailure = e
}
)($n || ($n = {}));
var Rs;
(function(n) {
    n[n.InvalidKey = 0] = "InvalidKey",
    n[n.MissingKey = 1] = "MissingKey",
    n[n.InternalError = 2] = "InternalError"
}
)(Rs || (Rs = {}));
var T;
(function(n) {
    n.Connected = "connected",
    n.Reconnecting = "reconnecting",
    n.SignalReconnecting = "signalReconnecting",
    n.Reconnected = "reconnected",
    n.Disconnected = "disconnected",
    n.ConnectionStateChanged = "connectionStateChanged",
    n.MediaDevicesChanged = "mediaDevicesChanged",
    n.ParticipantConnected = "participantConnected",
    n.ParticipantDisconnected = "participantDisconnected",
    n.TrackPublished = "trackPublished",
    n.TrackSubscribed = "trackSubscribed",
    n.TrackSubscriptionFailed = "trackSubscriptionFailed",
    n.TrackUnpublished = "trackUnpublished",
    n.TrackUnsubscribed = "trackUnsubscribed",
    n.TrackMuted = "trackMuted",
    n.TrackUnmuted = "trackUnmuted",
    n.LocalTrackPublished = "localTrackPublished",
    n.LocalTrackUnpublished = "localTrackUnpublished",
    n.LocalAudioSilenceDetected = "localAudioSilenceDetected",
    n.ActiveSpeakersChanged = "activeSpeakersChanged",
    n.ParticipantMetadataChanged = "participantMetadataChanged",
    n.ParticipantNameChanged = "participantNameChanged",
    n.ParticipantAttributesChanged = "participantAttributesChanged",
    n.RoomMetadataChanged = "roomMetadataChanged",
    n.DataReceived = "dataReceived",
    n.SipDTMFReceived = "sipDTMFReceived",
    n.TranscriptionReceived = "transcriptionReceived",
    n.ConnectionQualityChanged = "connectionQualityChanged",
    n.TrackStreamStateChanged = "trackStreamStateChanged",
    n.TrackSubscriptionPermissionChanged = "trackSubscriptionPermissionChanged",
    n.TrackSubscriptionStatusChanged = "trackSubscriptionStatusChanged",
    n.AudioPlaybackStatusChanged = "audioPlaybackChanged",
    n.VideoPlaybackStatusChanged = "videoPlaybackChanged",
    n.MediaDevicesError = "mediaDevicesError",
    n.ParticipantPermissionsChanged = "participantPermissionsChanged",
    n.SignalConnected = "signalConnected",
    n.RecordingStatusChanged = "recordingStatusChanged",
    n.ParticipantEncryptionStatusChanged = "participantEncryptionStatusChanged",
    n.EncryptionError = "encryptionError",
    n.DCBufferStatusChanged = "dcBufferStatusChanged",
    n.ActiveDeviceChanged = "activeDeviceChanged",
    n.ChatMessage = "chatMessage",
    n.LocalTrackSubscribed = "localTrackSubscribed",
    n.MetricsReceived = "metricsReceived"
}
)(T || (T = {}));
var P;
(function(n) {
    n.TrackPublished = "trackPublished",
    n.TrackSubscribed = "trackSubscribed",
    n.TrackSubscriptionFailed = "trackSubscriptionFailed",
    n.TrackUnpublished = "trackUnpublished",
    n.TrackUnsubscribed = "trackUnsubscribed",
    n.TrackMuted = "trackMuted",
    n.TrackUnmuted = "trackUnmuted",
    n.LocalTrackPublished = "localTrackPublished",
    n.LocalTrackUnpublished = "localTrackUnpublished",
    n.ParticipantMetadataChanged = "participantMetadataChanged",
    n.ParticipantNameChanged = "participantNameChanged",
    n.DataReceived = "dataReceived",
    n.SipDTMFReceived = "sipDTMFReceived",
    n.TranscriptionReceived = "transcriptionReceived",
    n.IsSpeakingChanged = "isSpeakingChanged",
    n.ConnectionQualityChanged = "connectionQualityChanged",
    n.TrackStreamStateChanged = "trackStreamStateChanged",
    n.TrackSubscriptionPermissionChanged = "trackSubscriptionPermissionChanged",
    n.TrackSubscriptionStatusChanged = "trackSubscriptionStatusChanged",
    n.MediaDevicesError = "mediaDevicesError",
    n.AudioStreamAcquired = "audioStreamAcquired",
    n.ParticipantPermissionsChanged = "participantPermissionsChanged",
    n.PCTrackAdded = "pcTrackAdded",
    n.AttributesChanged = "attributesChanged",
    n.LocalTrackSubscribed = "localTrackSubscribed",
    n.ChatMessage = "chatMessage"
}
)(P || (P = {}));
var O;
(function(n) {
    n.TransportsCreated = "transportsCreated",
    n.Connected = "connected",
    n.Disconnected = "disconnected",
    n.Resuming = "resuming",
    n.Resumed = "resumed",
    n.Restarting = "restarting",
    n.Restarted = "restarted",
    n.SignalResumed = "signalResumed",
    n.SignalRestarted = "signalRestarted",
    n.Closing = "closing",
    n.MediaTrackAdded = "mediaTrackAdded",
    n.ActiveSpeakersUpdate = "activeSpeakersUpdate",
    n.DataPacketReceived = "dataPacketReceived",
    n.RTPVideoMapUpdate = "rtpVideoMapUpdate",
    n.DCBufferStatusChanged = "dcBufferStatusChanged",
    n.ParticipantUpdate = "participantUpdate",
    n.RoomUpdate = "roomUpdate",
    n.SpeakersChanged = "speakersChanged",
    n.StreamStateChanged = "streamStateChanged",
    n.ConnectionQualityUpdate = "connectionQualityUpdate",
    n.SubscriptionError = "subscriptionError",
    n.SubscriptionPermissionUpdate = "subscriptionPermissionUpdate",
    n.RemoteMute = "remoteMute",
    n.SubscribedQualityUpdate = "subscribedQualityUpdate",
    n.LocalTrackUnpublished = "localTrackUnpublished",
    n.LocalTrackSubscribed = "localTrackSubscribed",
    n.Offline = "offline",
    n.SignalRequestResponse = "signalRequestResponse"
}
)(O || (O = {}));
var A;
(function(n) {
    n.Message = "message",
    n.Muted = "muted",
    n.Unmuted = "unmuted",
    n.Restarted = "restarted",
    n.Ended = "ended",
    n.Subscribed = "subscribed",
    n.Unsubscribed = "unsubscribed",
    n.UpdateSettings = "updateSettings",
    n.UpdateSubscription = "updateSubscription",
    n.AudioPlaybackStarted = "audioPlaybackStarted",
    n.AudioPlaybackFailed = "audioPlaybackFailed",
    n.AudioSilenceDetected = "audioSilenceDetected",
    n.VisibilityChanged = "visibilityChanged",
    n.VideoDimensionsChanged = "videoDimensionsChanged",
    n.VideoPlaybackStarted = "videoPlaybackStarted",
    n.VideoPlaybackFailed = "videoPlaybackFailed",
    n.ElementAttached = "elementAttached",
    n.ElementDetached = "elementDetached",
    n.UpstreamPaused = "upstreamPaused",
    n.UpstreamResumed = "upstreamResumed",
    n.SubscriptionPermissionChanged = "subscriptionPermissionChanged",
    n.SubscriptionStatusChanged = "subscriptionStatusChanged",
    n.SubscriptionFailed = "subscriptionFailed",
    n.TrackProcessorUpdate = "trackProcessorUpdate",
    n.AudioTrackFeatureUpdate = "audioTrackFeatureUpdate",
    n.TranscriptionReceived = "transcriptionReceived",
    n.TimeSyncUpdate = "timeSyncUpdate"
}
)(A || (A = {}));
function Ar(n, e, t) {
    var i, r, s;
    e === void 0 && (e = 50),
    t === void 0 && (t = {});
    var o = (i = t.isImmediate) != null && i
      , a = (r = t.callback) != null && r
      , c = t.maxWait
      , d = Date.now()
      , u = [];
    function l() {
        if (c !== void 0) {
            var f = Date.now() - d;
            if (f + e >= c)
                return c - f
        }
        return e
    }
    var h = function() {
        var f = [].slice.call(arguments)
          , v = this;
        return new Promise(function(p, y) {
            var g = o && s === void 0;
            if (s !== void 0 && clearTimeout(s),
            s = setTimeout(function() {
                if (s = void 0,
                d = Date.now(),
                !o) {
                    var _ = n.apply(v, f);
                    a && a(_),
                    u.forEach(function(S) {
                        return (0,
                        S.resolve)(_)
                    }),
                    u = []
                }
            }, l()),
            g) {
                var x = n.apply(v, f);
                return a && a(x),
                p(x)
            }
            u.push({
                resolve: p,
                reject: y
            })
        }
        )
    };
    return h.cancel = function(f) {
        s !== void 0 && clearTimeout(s),
        u.forEach(function(v) {
            return (0,
            v.reject)(f)
        }),
        u = []
    }
    ,
    h
}
const dh = /version\/(\d+(\.?_?\d+)+)/i;
let yi;
function nt(n) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    if (typeof navigator > "u")
        return;
    const t = navigator.userAgent.toLowerCase();
    if (yi === void 0 || e) {
        const i = uh.find(r => {
            let {test: s} = r;
            return s.test(t)
        }
        );
        yi = i?.describe(t)
    }
    return yi
}
const uh = [{
    test: /firefox|iceweasel|fxios/i,
    describe(n) {
        return {
            name: "Firefox",
            version: Bn(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, n),
            os: n.toLowerCase().includes("fxios") ? "iOS" : void 0,
            osVersion: ki(n)
        }
    }
}, {
    test: /chrom|crios|crmo/i,
    describe(n) {
        return {
            name: "Chrome",
            version: Bn(/(?:chrome|chromium|crios|crmo)\/(\d+(\.?_?\d+)+)/i, n),
            os: n.toLowerCase().includes("crios") ? "iOS" : void 0,
            osVersion: ki(n)
        }
    }
}, {
    test: /safari|applewebkit/i,
    describe(n) {
        return {
            name: "Safari",
            version: Bn(dh, n),
            os: n.includes("mobile/") ? "iOS" : "macOS",
            osVersion: ki(n)
        }
    }
}];
function Bn(n, e) {
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    const i = e.match(n);
    return i && i.length >= t && i[t] || ""
}
function ki(n) {
    return n.includes("mac os") ? Bn(/\(.+?(\d+_\d+(:?_\d+)?)/, n, 1).replace(/_/g, ".") : void 0
}
var lh = "2.6.0";
const hh = lh
  , fh = 15;
class ve {
}
ve.setTimeout = function() {
    return setTimeout(...arguments)
}
;
ve.setInterval = function() {
    return setInterval(...arguments)
}
;
ve.clearTimeout = function() {
    return clearTimeout(...arguments)
}
;
ve.clearInterval = function() {
    return clearInterval(...arguments)
}
;
class Q {
    constructor(e, t, i, r, s) {
        if (typeof e == "object")
            this.width = e.width,
            this.height = e.height,
            this.aspectRatio = e.aspectRatio,
            this.encoding = {
                maxBitrate: e.maxBitrate,
                maxFramerate: e.maxFramerate,
                priority: e.priority
            };
        else if (t !== void 0 && i !== void 0)
            this.width = e,
            this.height = t,
            this.aspectRatio = e / t,
            this.encoding = {
                maxBitrate: i,
                maxFramerate: r,
                priority: s
            };
        else
            throw new TypeError("Unsupported options: provide at least width, height and maxBitrate")
    }
    get resolution() {
        return {
            width: this.width,
            height: this.height,
            frameRate: this.encoding.maxFramerate,
            aspectRatio: this.aspectRatio
        }
    }
}
const ph = ["vp8", "h264"]
  , mh = ["vp8", "h264", "vp9", "av1"];
function gh(n) {
    return !!ph.find(e => e === n)
}
var ar;
(function(n) {
    n.telephone = {
        maxBitrate: 12e3
    },
    n.speech = {
        maxBitrate: 24e3
    },
    n.music = {
        maxBitrate: 48e3
    },
    n.musicStereo = {
        maxBitrate: 64e3
    },
    n.musicHighQuality = {
        maxBitrate: 96e3
    },
    n.musicHighQualityStereo = {
        maxBitrate: 128e3
    }
}
)(ar || (ar = {}));
const mn = {
    h90: new Q(160,90,9e4,20),
    h180: new Q(320,180,16e4,20),
    h216: new Q(384,216,18e4,20),
    h360: new Q(640,360,45e4,20),
    h540: new Q(960,540,8e5,25),
    h720: new Q(1280,720,17e5,30),
    h1080: new Q(1920,1080,3e6,30),
    h1440: new Q(2560,1440,5e6,30),
    h2160: new Q(3840,2160,8e6,30)
}
  , cr = {
    h120: new Q(160,120,7e4,20),
    h180: new Q(240,180,125e3,20),
    h240: new Q(320,240,14e4,20),
    h360: new Q(480,360,33e4,20),
    h480: new Q(640,480,5e5,20),
    h540: new Q(720,540,6e5,25),
    h720: new Q(960,720,13e5,30),
    h1080: new Q(1440,1080,23e5,30),
    h1440: new Q(1920,1440,38e5,30)
}
  , Dr = {
    h360fps3: new Q(640,360,2e5,3,"medium"),
    h360fps15: new Q(640,360,4e5,15,"medium"),
    h720fps5: new Q(1280,720,8e5,5,"medium"),
    h720fps15: new Q(1280,720,15e5,15,"medium"),
    h720fps30: new Q(1280,720,2e6,30,"medium"),
    h1080fps15: new Q(1920,1080,25e5,15,"medium"),
    h1080fps30: new Q(1920,1080,5e6,30,"medium"),
    original: new Q(0,0,7e6,30,"medium")
};
function vh(n) {
    if (!(typeof n > "u"))
        return typeof structuredClone == "function" ? structuredClone(n) : JSON.parse(JSON.stringify(n))
}
const bh = 5e3
  , Xt = [];
var De;
(function(n) {
    n[n.LOW = 0] = "LOW",
    n[n.MEDIUM = 1] = "MEDIUM",
    n[n.HIGH = 2] = "HIGH"
}
)(De || (De = {}));
class E extends Ye.EventEmitter {
    constructor(e, t) {
        let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var r;
        super(),
        this.attachedElements = [],
        this.isMuted = !1,
        this.streamState = E.StreamState.Active,
        this.isInBackground = !1,
        this._currentBitrate = 0,
        this.log = K,
        this.appVisibilityChangedListener = () => {
            this.backgroundTimeout && clearTimeout(this.backgroundTimeout),
            document.visibilityState === "hidden" ? this.backgroundTimeout = setTimeout( () => this.handleAppVisibilityChanged(), bh) : this.handleAppVisibilityChanged()
        }
        ,
        this.log = tt((r = i.loggerName) !== null && r !== void 0 ? r : je.Track),
        this.loggerContextCb = i.loggerContextCb,
        this.setMaxListeners(100),
        this.kind = t,
        this._mediaStreamTrack = e,
        this._mediaStreamID = e.id,
        this.source = E.Source.Unknown
    }
    get logContext() {
        var e;
        return Object.assign(Object.assign({}, (e = this.loggerContextCb) === null || e === void 0 ? void 0 : e.call(this)), Y(this))
    }
    get currentBitrate() {
        return this._currentBitrate
    }
    get mediaStreamTrack() {
        return this._mediaStreamTrack
    }
    get mediaStreamID() {
        return this._mediaStreamID
    }
    attach(e) {
        let t = "audio";
        this.kind === E.Kind.Video && (t = "video"),
        this.attachedElements.length === 0 && this.kind === E.Kind.Video && this.addAppVisibilityListener(),
        e || (t === "audio" && (Xt.forEach(s => {
            s.parentElement === null && !e && (e = s)
        }
        ),
        e && Xt.splice(Xt.indexOf(e), 1)),
        e || (e = document.createElement(t))),
        this.attachedElements.includes(e) || this.attachedElements.push(e),
        Ot(this.mediaStreamTrack, e);
        const i = e.srcObject.getTracks()
          , r = i.some(s => s.kind === "audio");
        return e.play().then( () => {
            this.emit(r ? A.AudioPlaybackStarted : A.VideoPlaybackStarted)
        }
        ).catch(s => {
            s.name === "NotAllowedError" ? this.emit(r ? A.AudioPlaybackFailed : A.VideoPlaybackFailed, s) : s.name === "AbortError" ? K.debug("".concat(r ? "audio" : "video", " playback aborted, likely due to new play request")) : K.warn("could not playback ".concat(r ? "audio" : "video"), s),
            r && e && i.some(o => o.kind === "video") && s.name === "NotAllowedError" && (e.muted = !0,
            e.play().catch( () => {}
            ))
        }
        ),
        this.emit(A.ElementAttached, e),
        e
    }
    detach(e) {
        try {
            if (e) {
                jt(this.mediaStreamTrack, e);
                const i = this.attachedElements.indexOf(e);
                return i >= 0 && (this.attachedElements.splice(i, 1),
                this.recycleElement(e),
                this.emit(A.ElementDetached, e)),
                e
            }
            const t = [];
            return this.attachedElements.forEach(i => {
                jt(this.mediaStreamTrack, i),
                t.push(i),
                this.recycleElement(i),
                this.emit(A.ElementDetached, i)
            }
            ),
            this.attachedElements = [],
            t
        } finally {
            this.attachedElements.length === 0 && this.removeAppVisibilityListener()
        }
    }
    stop() {
        this.stopMonitor(),
        this._mediaStreamTrack.stop()
    }
    enable() {
        this._mediaStreamTrack.enabled = !0
    }
    disable() {
        this._mediaStreamTrack.enabled = !1
    }
    stopMonitor() {
        this.monitorInterval && clearInterval(this.monitorInterval),
        this.timeSyncHandle && cancelAnimationFrame(this.timeSyncHandle)
    }
    updateLoggerOptions(e) {
        e.loggerName && (this.log = tt(e.loggerName)),
        e.loggerContextCb && (this.loggerContextCb = e.loggerContextCb)
    }
    recycleElement(e) {
        if (e instanceof HTMLAudioElement) {
            let t = !0;
            e.pause(),
            Xt.forEach(i => {
                i.parentElement || (t = !1)
            }
            ),
            t && Xt.push(e)
        }
    }
    handleAppVisibilityChanged() {
        return m(this, void 0, void 0, function*() {
            this.isInBackground = document.visibilityState === "hidden",
            !this.isInBackground && this.kind === E.Kind.Video && setTimeout( () => this.attachedElements.forEach(e => e.play().catch( () => {}
            )), 0)
        })
    }
    addAppVisibilityListener() {
        Ie() ? (this.isInBackground = document.visibilityState === "hidden",
        document.addEventListener("visibilitychange", this.appVisibilityChangedListener)) : this.isInBackground = !1
    }
    removeAppVisibilityListener() {
        Ie() && document.removeEventListener("visibilitychange", this.appVisibilityChangedListener)
    }
}
function Ot(n, e) {
    let t;
    e.srcObject instanceof MediaStream ? t = e.srcObject : t = new MediaStream;
    let i;
    n.kind === "audio" ? i = t.getAudioTracks() : i = t.getVideoTracks(),
    i.includes(n) || (i.forEach(r => {
        t.removeTrack(r)
    }
    ),
    t.addTrack(n)),
    (!kt() || !(e instanceof HTMLVideoElement)) && (e.autoplay = !0),
    e.muted = t.getAudioTracks().length === 0,
    e instanceof HTMLVideoElement && (e.playsInline = !0),
    e.srcObject !== t && (e.srcObject = t,
    (kt() || Wt()) && e instanceof HTMLVideoElement && setTimeout( () => {
        e.srcObject = t,
        e.play().catch( () => {}
        )
    }
    , 0))
}
function jt(n, e) {
    if (e.srcObject instanceof MediaStream) {
        const t = e.srcObject;
        t.removeTrack(n),
        t.getTracks().length > 0 ? e.srcObject = t : e.srcObject = null
    }
}
(function(n) {
    let e;
    (function(d) {
        d.Audio = "audio",
        d.Video = "video",
        d.Unknown = "unknown"
    }
    )(e = n.Kind || (n.Kind = {}));
    let t;
    (function(d) {
        d.Camera = "camera",
        d.Microphone = "microphone",
        d.ScreenShare = "screen_share",
        d.ScreenShareAudio = "screen_share_audio",
        d.Unknown = "unknown"
    }
    )(t = n.Source || (n.Source = {}));
    let i;
    (function(d) {
        d.Active = "active",
        d.Paused = "paused",
        d.Unknown = "unknown"
    }
    )(i = n.StreamState || (n.StreamState = {}));
    function r(d) {
        switch (d) {
        case e.Audio:
            return Ue.AUDIO;
        case e.Video:
            return Ue.VIDEO;
        default:
            return Ue.DATA
        }
    }
    n.kindToProto = r;
    function s(d) {
        switch (d) {
        case Ue.AUDIO:
            return e.Audio;
        case Ue.VIDEO:
            return e.Video;
        default:
            return e.Unknown
        }
    }
    n.kindFromProto = s;
    function o(d) {
        switch (d) {
        case t.Camera:
            return ye.CAMERA;
        case t.Microphone:
            return ye.MICROPHONE;
        case t.ScreenShare:
            return ye.SCREEN_SHARE;
        case t.ScreenShareAudio:
            return ye.SCREEN_SHARE_AUDIO;
        default:
            return ye.UNKNOWN
        }
    }
    n.sourceToProto = o;
    function a(d) {
        switch (d) {
        case ye.CAMERA:
            return t.Camera;
        case ye.MICROPHONE:
            return t.Microphone;
        case ye.SCREEN_SHARE:
            return t.ScreenShare;
        case ye.SCREEN_SHARE_AUDIO:
            return t.ScreenShareAudio;
        default:
            return t.Unknown
        }
    }
    n.sourceFromProto = a;
    function c(d) {
        switch (d) {
        case Qi.ACTIVE:
            return i.Active;
        case Qi.PAUSED:
            return i.Paused;
        default:
            return i.Unknown
        }
    }
    n.streamStateFromProto = c
}
)(E || (E = {}));
function oc(n, e, t) {
    var i;
    const r = (i = vh(n)) !== null && i !== void 0 ? i : {};
    return r.audio === !0 && (r.audio = {}),
    r.video === !0 && (r.video = {}),
    r.audio && dr(r.audio, e),
    r.video && dr(r.video, t),
    r
}
function dr(n, e) {
    return Object.keys(e).forEach(t => {
        n[t] === void 0 && (n[t] = e[t])
    }
    ),
    n
}
function li(n) {
    const e = {};
    if (n.video)
        if (typeof n.video == "object") {
            const t = {}
              , i = t
              , r = n.video;
            Object.keys(r).forEach(s => {
                switch (s) {
                case "resolution":
                    dr(i, r.resolution);
                    break;
                default:
                    i[s] = r[s]
                }
            }
            ),
            e.video = t
        } else
            e.video = n.video;
    else
        e.video = !1;
    return n.audio ? typeof n.audio == "object" ? e.audio = n.audio : e.audio = !0 : e.audio = !1,
    e
}
function yh(n) {
    return m(this, arguments, void 0, function(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 200;
        return function*() {
            const i = ac();
            if (i) {
                const r = i.createAnalyser();
                r.fftSize = 2048;
                const s = r.frequencyBinCount
                  , o = new Uint8Array(s);
                i.createMediaStreamSource(new MediaStream([e.mediaStreamTrack])).connect(r),
                yield Qe(t),
                r.getByteTimeDomainData(o);
                const c = o.some(d => d !== 128 && d !== 0);
                return i.close(),
                !c
            }
            return !1
        }()
    })
}
function ac() {
    const n = typeof window < "u" && (window.AudioContext || window.webkitAudioContext);
    if (n)
        return new n({
            latencyHint: "interactive"
        })
}
function _s(n) {
    return n === E.Source.Microphone ? "audioinput" : n === E.Source.Camera ? "videoinput" : void 0
}
function kh(n) {
    var e, t;
    let i = (e = n.video) !== null && e !== void 0 ? e : !0;
    return n.resolution && n.resolution.width > 0 && n.resolution.height > 0 && (i = typeof i == "boolean" ? {} : i,
    kt() ? i = Object.assign(Object.assign({}, i), {
        width: {
            max: n.resolution.width
        },
        height: {
            max: n.resolution.height
        },
        frameRate: n.resolution.frameRate
    }) : i = Object.assign(Object.assign({}, i), {
        width: {
            ideal: n.resolution.width
        },
        height: {
            ideal: n.resolution.height
        },
        frameRate: n.resolution.frameRate
    })),
    {
        audio: (t = n.audio) !== null && t !== void 0 ? t : !1,
        video: i,
        controller: n.controller,
        selfBrowserSurface: n.selfBrowserSurface,
        surfaceSwitching: n.surfaceSwitching,
        systemAudio: n.systemAudio,
        preferCurrentTab: n.preferCurrentTab
    }
}
function qn(n) {
    return n.split("/")[1].toLowerCase()
}
function Sh(n) {
    const e = [];
    return n.forEach(t => {
        t.track !== void 0 && e.push(new Rr({
            cid: t.track.mediaStreamID,
            track: t.trackInfo
        }))
    }
    ),
    e
}
function Y(n) {
    return n instanceof E ? {
        trackID: n.sid,
        source: n.source,
        muted: n.isMuted,
        enabled: n.mediaStreamTrack.enabled,
        kind: n.kind,
        streamID: n.mediaStreamID,
        streamTrackID: n.mediaStreamTrack.id
    } : {
        trackID: n.trackSid,
        enabled: n.isEnabled,
        muted: n.isMuted,
        trackInfo: Object.assign({
            mimeType: n.mimeType,
            name: n.trackName,
            encrypted: n.isEncrypted,
            kind: n.kind,
            source: n.source
        }, n.track ? Y(n.track) : {})
    }
}
function Th() {
    return typeof RTCRtpReceiver < "u" && "getSynchronizationSources"in RTCRtpReceiver
}
function Ch(n, e) {
    var t;
    n === void 0 && (n = {}),
    e === void 0 && (e = {});
    const i = [...Object.keys(e), ...Object.keys(n)]
      , r = {};
    for (const s of i)
        n[s] !== e[s] && (r[s] = (t = e[s]) !== null && t !== void 0 ? t : "");
    return r
}
const wh = "|"
  , Is = "https://aomediacodec.github.io/av1-rtp-spec/#dependency-descriptor-rtp-header-extension";
function Ph(n) {
    const e = n.split(wh);
    return e.length > 1 ? [e[0], n.substr(e[0].length + 1)] : [n, ""]
}
function Qe(n) {
    return m(this, void 0, void 0, function*() {
        return new Promise(e => ve.setTimeout(e, n))
    })
}
function ur() {
    return "addTransceiver"in RTCPeerConnection.prototype
}
function lr() {
    return "addTrack"in RTCPeerConnection.prototype
}
function Eh() {
    if (!("getCapabilities"in RTCRtpSender) || kt())
        return !1;
    const n = RTCRtpSender.getCapabilities("video");
    let e = !1;
    if (n) {
        for (const t of n.codecs)
            if (t.mimeType === "video/AV1") {
                e = !0;
                break
            }
    }
    return e
}
function Rh() {
    if (!("getCapabilities"in RTCRtpSender) || Wt())
        return !1;
    if (kt()) {
        const t = nt();
        if (t?.version && Gt(t.version, "16") < 0)
            return !1
    }
    const n = RTCRtpSender.getCapabilities("video");
    let e = !1;
    if (n) {
        for (const t of n.codecs)
            if (t.mimeType === "video/VP9") {
                e = !0;
                break
            }
    }
    return e
}
function cn(n) {
    return n === "av1" || n === "vp9"
}
function hr(n) {
    return document ? (n || (n = document.createElement("audio")),
    "setSinkId"in n) : !1
}
function _h() {
    return typeof RTCPeerConnection > "u" ? !1 : ur() || lr()
}
function Wt() {
    var n;
    return ((n = nt()) === null || n === void 0 ? void 0 : n.name) === "Firefox"
}
function kt() {
    var n;
    return ((n = nt()) === null || n === void 0 ? void 0 : n.name) === "Safari"
}
function Ih() {
    const n = nt();
    return n?.name === "Safari" && n.version.startsWith("17.")
}
function cc() {
    var n, e;
    return Ie() ? (e = (n = navigator.userAgentData) === null || n === void 0 ? void 0 : n.mobile) !== null && e !== void 0 ? e : /Tablet|iPad|Mobile|Android|BlackBerry/.test(navigator.userAgent) : !1
}
function xh() {
    const n = nt()
      , e = "17.2";
    if (n)
        return n.name !== "Safari" && n.os !== "iOS" || n.os === "iOS" && n.osVersion && Gt(e, n.osVersion) >= 0 ? !0 : n.name === "Safari" && Gt(e, n.version) >= 0
}
function Ie() {
    return typeof document < "u"
}
function it() {
    return navigator.product == "ReactNative"
}
function fr(n) {
    return n.hostname.endsWith(".livekit.cloud") || n.hostname.endsWith(".livekit.run")
}
function dc() {
    if (global && global.LiveKitReactNativeGlobal)
        return global.LiveKitReactNativeGlobal
}
function uc() {
    if (!it())
        return;
    let n = dc();
    if (n)
        return n.platform
}
function xs() {
    if (Ie())
        return window.devicePixelRatio;
    if (it()) {
        let n = dc();
        if (n)
            return n.devicePixelRatio
    }
    return 1
}
function Gt(n, e) {
    const t = n.split(".")
      , i = e.split(".")
      , r = Math.min(t.length, i.length);
    for (let s = 0; s < r; ++s) {
        const o = parseInt(t[s], 10)
          , a = parseInt(i[s], 10);
        if (o > a)
            return 1;
        if (o < a)
            return -1;
        if (s === r - 1 && o === a)
            return 0
    }
    return n === "" && e !== "" ? -1 : e === "" ? 1 : t.length == i.length ? 0 : t.length < i.length ? -1 : 1
}
function Ah(n) {
    for (const e of n)
        e.target.handleResize(e)
}
function Dh(n) {
    for (const e of n)
        e.target.handleVisibilityChanged(e)
}
let Si = null;
const As = () => (Si || (Si = new ResizeObserver(Ah)),
Si);
let Ti = null;
const Ds = () => (Ti || (Ti = new IntersectionObserver(Dh,{
    root: null,
    rootMargin: "0px"
})),
Ti);
function Mh() {
    var n;
    const e = new ml({
        sdk: pa.JS,
        protocol: fh,
        version: hh
    });
    return it() && (e.os = (n = uc()) !== null && n !== void 0 ? n : ""),
    e
}
function Ms() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 16
      , e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 16
      , t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
      , i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    const r = document.createElement("canvas");
    r.width = n,
    r.height = e;
    const s = r.getContext("2d");
    s?.fillRect(0, 0, r.width, r.height),
    i && s && (s.beginPath(),
    s.arc(n / 2, e / 2, 50, 0, Math.PI * 2, !0),
    s.closePath(),
    s.fillStyle = "grey",
    s.fill());
    const o = r.captureStream()
      , [a] = o.getTracks();
    if (!a)
        throw Error("Could not get empty media stream video track");
    return a.enabled = t,
    a
}
let Zt;
function Ci() {
    if (!Zt) {
        const n = new AudioContext
          , e = n.createOscillator()
          , t = n.createGain();
        t.gain.setValueAtTime(0, 0);
        const i = n.createMediaStreamDestination();
        if (e.connect(t),
        t.connect(i),
        e.start(),
        [Zt] = i.stream.getAudioTracks(),
        !Zt)
            throw Error("Could not get empty media stream audio track");
        Zt.enabled = !1
    }
    return Zt.clone()
}
class lc {
    constructor(e, t) {
        this.onFinally = t,
        this.promise = new Promise( (i, r) => m(this, void 0, void 0, function*() {
            this.resolve = i,
            this.reject = r,
            e && (yield e(i, r))
        })).finally( () => {
            var i;
            return (i = this.onFinally) === null || i === void 0 ? void 0 : i.call(this)
        }
        )
    }
}
function Oh(n) {
    return mh.includes(n)
}
function et(n) {
    if (typeof n == "string" || typeof n == "number")
        return n;
    if (Array.isArray(n))
        return n[0];
    if (n.exact)
        return Array.isArray(n.exact) ? n.exact[0] : n.exact;
    if (n.ideal)
        return Array.isArray(n.ideal) ? n.ideal[0] : n.ideal;
    throw Error("could not unwrap constraint")
}
function Nh(n) {
    return n.startsWith("http") ? n.replace(/^(http)/, "ws") : n
}
function Os(n) {
    return n.startsWith("ws") ? n.replace(/^(ws)/, "http") : n
}
function Lh(n, e) {
    return n.segments.map(t => {
        let {id: i, text: r, language: s, startTime: o, endTime: a, final: c} = t;
        var d;
        const u = (d = e.get(i)) !== null && d !== void 0 ? d : Date.now()
          , l = Date.now();
        return c ? e.delete(i) : e.set(i, u),
        {
            id: i,
            text: r,
            startTime: Number.parseInt(o.toString()),
            endTime: Number.parseInt(a.toString()),
            final: c,
            language: s,
            firstReceivedTime: u,
            lastReceivedTime: l
        }
    }
    )
}
function Uh(n) {
    const {id: e, timestamp: t, message: i, editTimestamp: r} = n;
    return {
        id: e,
        timestamp: Number.parseInt(t.toString()),
        editTimestamp: r ? Number.parseInt(r.toString()) : void 0,
        message: i
    }
}
const wi = "default";
class ge {
    static getInstance() {
        return this.instance === void 0 && (this.instance = new ge),
        this.instance
    }
    getDevices(e) {
        return m(this, arguments, void 0, function(t) {
            var i = this;
            let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
            return function*() {
                var s;
                if (((s = ge.userMediaPromiseMap) === null || s === void 0 ? void 0 : s.size) > 0) {
                    K.debug("awaiting getUserMedia promise");
                    try {
                        t ? yield ge.userMediaPromiseMap.get(t) : yield Promise.all(ge.userMediaPromiseMap.values())
                    } catch {
                        K.warn("error waiting for media permissons")
                    }
                }
                let o = yield navigator.mediaDevices.enumerateDevices();
                if (r && !(kt() && i.hasDeviceInUse(t)) && (o.filter(c => c.kind === t).length === 0 || o.some(c => {
                    const d = c.label === ""
                      , u = t ? c.kind === t : !0;
                    return d && u
                }
                ))) {
                    const c = {
                        video: t !== "audioinput" && t !== "audiooutput",
                        audio: t !== "videoinput"
                    }
                      , d = yield navigator.mediaDevices.getUserMedia(c);
                    o = yield navigator.mediaDevices.enumerateDevices(),
                    d.getTracks().forEach(u => {
                        u.stop()
                    }
                    )
                }
                return t && (o = o.filter(a => a.kind === t)),
                o
            }()
        })
    }
    normalizeDeviceId(e, t, i) {
        return m(this, void 0, void 0, function*() {
            if (t !== wi)
                return t;
            const r = yield this.getDevices(e)
              , s = r.find(a => a.deviceId === wi);
            if (!s) {
                K.warn("could not reliably determine default device");
                return
            }
            const o = r.find(a => a.deviceId !== wi && a.groupId === (i ?? s.groupId));
            if (!o) {
                K.warn("could not reliably determine default device");
                return
            }
            return o?.deviceId
        })
    }
    hasDeviceInUse(e) {
        return e ? ge.userMediaPromiseMap.has(e) : ge.userMediaPromiseMap.size > 0
    }
}
ge.mediaDeviceKinds = ["audioinput", "audiooutput", "videoinput"];
ge.userMediaPromiseMap = new Map;
const Fh = 1e3;
class Vt extends E {
    get sender() {
        return this._sender
    }
    set sender(e) {
        this._sender = e
    }
    get constraints() {
        return this._constraints
    }
    constructor(e, t, i) {
        let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1
          , s = arguments.length > 4 ? arguments[4] : void 0;
        super(e, t, s),
        this.manuallyStopped = !1,
        this._isUpstreamPaused = !1,
        this.handleTrackMuteEvent = () => this.debouncedTrackMuteHandler().catch( () => this.log.debug("track mute bounce got cancelled by an unmute event", this.logContext)),
        this.debouncedTrackMuteHandler = Ar( () => m(this, void 0, void 0, function*() {
            yield this.pauseUpstream()
        }), 5e3),
        this.handleTrackUnmuteEvent = () => m(this, void 0, void 0, function*() {
            this.debouncedTrackMuteHandler.cancel("unmute"),
            yield this.resumeUpstream()
        }),
        this.handleEnded = () => {
            this.isInBackground && (this.reacquireTrack = !0),
            this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent),
            this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent),
            this.emit(A.Ended, this)
        }
        ,
        this.reacquireTrack = !1,
        this.providedByUser = r,
        this.muteLock = new _e,
        this.pauseUpstreamLock = new _e,
        this.processorLock = new _e,
        this.restartLock = new _e,
        this.setMediaStreamTrack(e, !0),
        this._constraints = e.getConstraints(),
        i && (this._constraints = i)
    }
    get id() {
        return this._mediaStreamTrack.id
    }
    get dimensions() {
        if (this.kind !== E.Kind.Video)
            return;
        const {width: e, height: t} = this._mediaStreamTrack.getSettings();
        if (e && t)
            return {
                width: e,
                height: t
            }
    }
    get isUpstreamPaused() {
        return this._isUpstreamPaused
    }
    get isUserProvided() {
        return this.providedByUser
    }
    get mediaStreamTrack() {
        var e, t;
        return (t = (e = this.processor) === null || e === void 0 ? void 0 : e.processedTrack) !== null && t !== void 0 ? t : this._mediaStreamTrack
    }
    setMediaStreamTrack(e, t) {
        return m(this, void 0, void 0, function*() {
            if (e === this._mediaStreamTrack && !t)
                return;
            this._mediaStreamTrack && (this.attachedElements.forEach(r => {
                jt(this._mediaStreamTrack, r)
            }
            ),
            this.debouncedTrackMuteHandler.cancel("new-track"),
            this._mediaStreamTrack.removeEventListener("ended", this.handleEnded),
            this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent),
            this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent)),
            this.mediaStream = new MediaStream([e]),
            e && (e.addEventListener("ended", this.handleEnded),
            e.addEventListener("mute", this.handleTrackMuteEvent),
            e.addEventListener("unmute", this.handleTrackUnmuteEvent),
            this._constraints = e.getConstraints());
            let i;
            if (this.processor && e) {
                const r = yield this.processorLock.lock();
                try {
                    if (this.log.debug("restarting processor", this.logContext),
                    this.kind === "unknown")
                        throw TypeError("cannot set processor on track of unknown kind");
                    this.processorElement && (Ot(e, this.processorElement),
                    this.processorElement.muted = !0),
                    yield this.processor.restart({
                        track: e,
                        kind: this.kind,
                        element: this.processorElement
                    }),
                    i = this.processor.processedTrack
                } finally {
                    r()
                }
            }
            this.sender && (yield this.sender.replaceTrack(i ?? e)),
            !this.providedByUser && this._mediaStreamTrack !== e && this._mediaStreamTrack.stop(),
            this._mediaStreamTrack = e,
            e && (this._mediaStreamTrack.enabled = !this.isMuted,
            yield this.resumeUpstream(),
            this.attachedElements.forEach(r => {
                Ot(i ?? e, r)
            }
            ))
        })
    }
    waitForDimensions() {
        return m(this, arguments, void 0, function() {
            var e = this;
            let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Fh;
            return function*() {
                var i;
                if (e.kind === E.Kind.Audio)
                    throw new Error("cannot get dimensions for audio tracks");
                ((i = nt()) === null || i === void 0 ? void 0 : i.os) === "iOS" && (yield Qe(10));
                const r = Date.now();
                for (; Date.now() - r < t; ) {
                    const s = e.dimensions;
                    if (s)
                        return s;
                    yield Qe(50)
                }
                throw new Je("unable to get track dimensions after timeout")
            }()
        })
    }
    getDeviceId() {
        return m(this, arguments, void 0, function() {
            var e = this;
            let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
            return function*() {
                if (e.source === E.Source.ScreenShare)
                    return;
                const {deviceId: i, groupId: r} = e._mediaStreamTrack.getSettings()
                  , s = e.kind === E.Kind.Audio ? "audioinput" : "videoinput";
                return t ? ge.getInstance().normalizeDeviceId(s, i, r) : i
            }()
        })
    }
    mute() {
        return m(this, void 0, void 0, function*() {
            return this.setTrackMuted(!0),
            this
        })
    }
    unmute() {
        return m(this, void 0, void 0, function*() {
            return this.setTrackMuted(!1),
            this
        })
    }
    replaceTrack(e, t) {
        return m(this, void 0, void 0, function*() {
            if (!this.sender)
                throw new Je("unable to replace an unpublished track");
            let i, r;
            return typeof t == "boolean" ? i = t : t !== void 0 && (i = t.userProvidedTrack,
            r = t.stopProcessor),
            this.providedByUser = i ?? !0,
            this.log.debug("replace MediaStreamTrack", this.logContext),
            yield this.setMediaStreamTrack(e),
            r && this.processor && (yield this.stopProcessor()),
            this
        })
    }
    restart(e) {
        return m(this, void 0, void 0, function*() {
            this.manuallyStopped = !1;
            const t = yield this.restartLock.lock();
            try {
                e || (e = this._constraints),
                this.log.debug("restarting track with constraints", Object.assign(Object.assign({}, this.logContext), {
                    constraints: e
                }));
                const i = {
                    audio: !1,
                    video: !1
                };
                this.kind === E.Kind.Video ? i.video = e : i.audio = e,
                this.attachedElements.forEach(o => {
                    jt(this.mediaStreamTrack, o)
                }
                ),
                this._mediaStreamTrack.removeEventListener("ended", this.handleEnded),
                this._mediaStreamTrack.stop();
                const s = (yield navigator.mediaDevices.getUserMedia(i)).getTracks()[0];
                return s.addEventListener("ended", this.handleEnded),
                this.log.debug("re-acquired MediaStreamTrack", this.logContext),
                yield this.setMediaStreamTrack(s),
                this._constraints = e,
                this.emit(A.Restarted, this),
                this.manuallyStopped && (this.log.warn("track was stopped during a restart, stopping restarted track", this.logContext),
                this.stop()),
                this
            } finally {
                t()
            }
        })
    }
    setTrackMuted(e) {
        this.log.debug("setting ".concat(this.kind, " track ").concat(e ? "muted" : "unmuted"), this.logContext),
        !(this.isMuted === e && this._mediaStreamTrack.enabled !== e) && (this.isMuted = e,
        this._mediaStreamTrack.enabled = !e,
        this.emit(e ? A.Muted : A.Unmuted, this))
    }
    get needsReAcquisition() {
        return this._mediaStreamTrack.readyState !== "live" || this._mediaStreamTrack.muted || !this._mediaStreamTrack.enabled || this.reacquireTrack
    }
    handleAppVisibilityChanged() {
        const e = Object.create(null, {
            handleAppVisibilityChanged: {
                get: () => super.handleAppVisibilityChanged
            }
        });
        return m(this, void 0, void 0, function*() {
            yield e.handleAppVisibilityChanged.call(this),
            cc() && (this.log.debug("visibility changed, is in Background: ".concat(this.isInBackground), this.logContext),
            !this.isInBackground && this.needsReAcquisition && !this.isUserProvided && !this.isMuted && (this.log.debug("track needs to be reacquired, restarting ".concat(this.source), this.logContext),
            yield this.restart(),
            this.reacquireTrack = !1))
        })
    }
    stop() {
        var e;
        this.manuallyStopped = !0,
        super.stop(),
        this._mediaStreamTrack.removeEventListener("ended", this.handleEnded),
        this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent),
        this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent),
        (e = this.processor) === null || e === void 0 || e.destroy(),
        this.processor = void 0
    }
    pauseUpstream() {
        return m(this, void 0, void 0, function*() {
            const e = yield this.pauseUpstreamLock.lock();
            try {
                if (this._isUpstreamPaused === !0)
                    return;
                if (!this.sender) {
                    this.log.warn("unable to pause upstream for an unpublished track", this.logContext);
                    return
                }
                this._isUpstreamPaused = !0,
                this.emit(A.UpstreamPaused, this);
                const t = nt();
                if (t?.name === "Safari" && Gt(t.version, "12.0") < 0)
                    throw new xr("pauseUpstream is not supported on Safari < 12.");
                yield this.sender.replaceTrack(null)
            } finally {
                e()
            }
        })
    }
    resumeUpstream() {
        return m(this, void 0, void 0, function*() {
            const e = yield this.pauseUpstreamLock.lock();
            try {
                if (this._isUpstreamPaused === !1)
                    return;
                if (!this.sender) {
                    this.log.warn("unable to resume upstream for an unpublished track", this.logContext);
                    return
                }
                this._isUpstreamPaused = !1,
                this.emit(A.UpstreamResumed, this),
                yield this.sender.replaceTrack(this.mediaStreamTrack)
            } finally {
                e()
            }
        })
    }
    getRTCStatsReport() {
        return m(this, void 0, void 0, function*() {
            var e;
            return !((e = this.sender) === null || e === void 0) && e.getStats ? yield this.sender.getStats() : void 0
        })
    }
    setProcessor(e) {
        return m(this, arguments, void 0, function(t) {
            var i = this;
            let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
            return function*() {
                var s;
                const o = yield i.processorLock.lock();
                try {
                    i.log.debug("setting up processor", i.logContext);
                    const a = document.createElement(i.kind)
                      , c = {
                        kind: i.kind,
                        track: i._mediaStreamTrack,
                        element: a,
                        audioContext: i.audioContext
                    };
                    if (yield t.init(c),
                    i.log.debug("processor initialized", i.logContext),
                    i.processor && (yield i.stopProcessor()),
                    i.kind === "unknown")
                        throw TypeError("cannot set processor on track of unknown kind");
                    if (Ot(i._mediaStreamTrack, a),
                    a.muted = !0,
                    a.play().catch(d => i.log.error("failed to play processor element", Object.assign(Object.assign({}, i.logContext), {
                        error: d
                    }))),
                    i.processor = t,
                    i.processorElement = a,
                    i.processor.processedTrack) {
                        for (const d of i.attachedElements)
                            d !== i.processorElement && r && (jt(i._mediaStreamTrack, d),
                            Ot(i.processor.processedTrack, d));
                        yield(s = i.sender) === null || s === void 0 ? void 0 : s.replaceTrack(i.processor.processedTrack)
                    }
                    i.emit(A.TrackProcessorUpdate, i.processor)
                } finally {
                    o()
                }
            }()
        })
    }
    getProcessor() {
        return this.processor
    }
    stopProcessor() {
        return m(this, arguments, void 0, function() {
            var e = this;
            let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
            return function*() {
                var i, r;
                e.processor && (e.log.debug("stopping processor", e.logContext),
                (i = e.processor.processedTrack) === null || i === void 0 || i.stop(),
                yield e.processor.destroy(),
                e.processor = void 0,
                t || ((r = e.processorElement) === null || r === void 0 || r.remove(),
                e.processorElement = void 0),
                yield e._mediaStreamTrack.applyConstraints(e._constraints),
                yield e.setMediaStreamTrack(e._mediaStreamTrack, !0),
                e.emit(A.TrackProcessorUpdate))
            }()
        })
    }
}
class jh extends Ye.EventEmitter {
    constructor(e) {
        super(),
        this.onWorkerMessage = t => {
            var i, r;
            const {kind: s, data: o} = t.data;
            switch (s) {
            case "error":
                K.error(o.error.message),
                this.emit(ut.EncryptionError, o.error);
                break;
            case "initAck":
                o.enabled && this.keyProvider.getKeys().forEach(a => {
                    this.postKey(a)
                }
                );
                break;
            case "enable":
                if (o.enabled && this.keyProvider.getKeys().forEach(a => {
                    this.postKey(a)
                }
                ),
                this.encryptionEnabled !== o.enabled && o.participantIdentity === ((i = this.room) === null || i === void 0 ? void 0 : i.localParticipant.identity))
                    this.emit(ut.ParticipantEncryptionStatusChanged, o.enabled, this.room.localParticipant),
                    this.encryptionEnabled = o.enabled;
                else if (o.participantIdentity) {
                    const a = (r = this.room) === null || r === void 0 ? void 0 : r.getParticipantByIdentity(o.participantIdentity);
                    if (!a)
                        throw TypeError("couldn't set encryption status, participant not found".concat(o.participantIdentity));
                    this.emit(ut.ParticipantEncryptionStatusChanged, o.enabled, a)
                }
                break;
            case "ratchetKey":
                this.keyProvider.emit(lt.KeyRatcheted, o.material, o.keyIndex);
                break
            }
        }
        ,
        this.onWorkerError = t => {
            K.error("e2ee worker encountered an error:", {
                error: t.error
            }),
            this.emit(ut.EncryptionError, t.error)
        }
        ,
        this.keyProvider = e.keyProvider,
        this.worker = e.worker,
        this.encryptionEnabled = !1
    }
    setup(e) {
        if (!ih())
            throw new xr("tried to setup end-to-end encryption on an unsupported browser");
        if (K.info("setting up e2ee"),
        e !== this.room) {
            this.room = e,
            this.setupEventListeners(e, this.keyProvider);
            const t = {
                kind: "init",
                data: {
                    keyProviderOptions: this.keyProvider.getOptions(),
                    loglevel: ql.getLevel()
                }
            };
            this.worker && (K.info("initializing worker", {
                worker: this.worker
            }),
            this.worker.onmessage = this.onWorkerMessage,
            this.worker.onerror = this.onWorkerError,
            this.worker.postMessage(t))
        }
    }
    setParticipantCryptorEnabled(e, t) {
        K.debug("set e2ee to ".concat(e, " for participant ").concat(t)),
        this.postEnable(e, t)
    }
    setSifTrailer(e) {
        !e || e.length === 0 ? K.warn("ignoring server sent trailer as it's empty") : this.postSifTrailer(e)
    }
    setupEngine(e) {
        e.on(O.RTPVideoMapUpdate, t => {
            this.postRTPMap(t)
        }
        )
    }
    setupEventListeners(e, t) {
        e.on(T.TrackPublished, (i, r) => this.setParticipantCryptorEnabled(i.trackInfo.encryption !== Ae.NONE, r.identity)),
        e.on(T.ConnectionStateChanged, i => {
            i === B.Connected && e.remoteParticipants.forEach(r => {
                r.trackPublications.forEach(s => {
                    this.setParticipantCryptorEnabled(s.trackInfo.encryption !== Ae.NONE, r.identity)
                }
                )
            }
            )
        }
        ).on(T.TrackUnsubscribed, (i, r, s) => {
            var o;
            const a = {
                kind: "removeTransform",
                data: {
                    participantIdentity: s.identity,
                    trackId: i.mediaStreamID
                }
            };
            (o = this.worker) === null || o === void 0 || o.postMessage(a)
        }
        ).on(T.TrackSubscribed, (i, r, s) => {
            this.setupE2EEReceiver(i, s.identity, r.trackInfo)
        }
        ).on(T.SignalConnected, () => {
            if (!this.room)
                throw new TypeError("expected room to be present on signal connect");
            t.getKeys().forEach(i => {
                this.postKey(i)
            }
            ),
            this.setParticipantCryptorEnabled(this.room.localParticipant.isE2EEEnabled, this.room.localParticipant.identity)
        }
        ),
        e.localParticipant.on(P.LocalTrackPublished, i => m(this, void 0, void 0, function*() {
            this.setupE2EESender(i.track, i.track.sender)
        })),
        t.on(lt.SetKey, i => this.postKey(i)).on(lt.RatchetRequest, (i, r) => this.postRatchetRequest(i, r))
    }
    postRatchetRequest(e, t) {
        if (!this.worker)
            throw Error("could not ratchet key, worker is missing");
        const i = {
            kind: "ratchetRequest",
            data: {
                participantIdentity: e,
                keyIndex: t
            }
        };
        this.worker.postMessage(i)
    }
    postKey(e) {
        let {key: t, participantIdentity: i, keyIndex: r} = e;
        var s;
        if (!this.worker)
            throw Error("could not set key, worker is missing");
        const o = {
            kind: "setKey",
            data: {
                participantIdentity: i,
                isPublisher: i === ((s = this.room) === null || s === void 0 ? void 0 : s.localParticipant.identity),
                key: t,
                keyIndex: r
            }
        };
        this.worker.postMessage(o)
    }
    postEnable(e, t) {
        if (this.worker) {
            const i = {
                kind: "enable",
                data: {
                    enabled: e,
                    participantIdentity: t
                }
            };
            this.worker.postMessage(i)
        } else
            throw new ReferenceError("failed to enable e2ee, worker is not ready")
    }
    postRTPMap(e) {
        var t;
        if (!this.worker)
            throw TypeError("could not post rtp map, worker is missing");
        if (!(!((t = this.room) === null || t === void 0) && t.localParticipant.identity))
            throw TypeError("could not post rtp map, local participant identity is missing");
        const i = {
            kind: "setRTPMap",
            data: {
                map: e,
                participantIdentity: this.room.localParticipant.identity
            }
        };
        this.worker.postMessage(i)
    }
    postSifTrailer(e) {
        if (!this.worker)
            throw Error("could not post SIF trailer, worker is missing");
        const t = {
            kind: "setSifTrailer",
            data: {
                trailer: e
            }
        };
        this.worker.postMessage(t)
    }
    setupE2EEReceiver(e, t, i) {
        if (e.receiver) {
            if (!i?.mimeType || i.mimeType === "")
                throw new TypeError("MimeType missing from trackInfo, cannot set up E2EE cryptor");
            this.handleReceiver(e.receiver, e.mediaStreamID, t, e.kind === "video" ? qn(i.mimeType) : void 0)
        }
    }
    setupE2EESender(e, t) {
        if (!(e instanceof Vt) || !t) {
            t || K.warn("early return because sender is not ready");
            return
        }
        this.handleSender(t, e.mediaStreamID, void 0)
    }
    handleReceiver(e, t, i, r) {
        return m(this, void 0, void 0, function*() {
            if (this.worker) {
                if (sr()) {
                    const s = {
                        kind: "decode",
                        participantIdentity: i,
                        trackId: t,
                        codec: r
                    };
                    e.transform = new RTCRtpScriptTransform(this.worker,s)
                } else {
                    if (Rn in e && r) {
                        const c = {
                            kind: "updateCodec",
                            data: {
                                trackId: t,
                                codec: r,
                                participantIdentity: i
                            }
                        };
                        this.worker.postMessage(c);
                        return
                    }
                    let s = e.writableStream
                      , o = e.readableStream;
                    if (!s || !o) {
                        const c = e.createEncodedStreams();
                        e.writableStream = c.writable,
                        s = c.writable,
                        e.readableStream = c.readable,
                        o = c.readable
                    }
                    const a = {
                        kind: "decode",
                        data: {
                            readableStream: o,
                            writableStream: s,
                            trackId: t,
                            codec: r,
                            participantIdentity: i
                        }
                    };
                    this.worker.postMessage(a, [o, s])
                }
                e[Rn] = !0
            }
        })
    }
    handleSender(e, t, i) {
        var r;
        if (!(Rn in e || !this.worker)) {
            if (!(!((r = this.room) === null || r === void 0) && r.localParticipant.identity) || this.room.localParticipant.identity === "")
                throw TypeError("local identity needs to be known in order to set up encrypted sender");
            if (sr()) {
                K.info("initialize script transform");
                const s = {
                    kind: "encode",
                    participantIdentity: this.room.localParticipant.identity,
                    trackId: t,
                    codec: i
                };
                e.transform = new RTCRtpScriptTransform(this.worker,s)
            } else {
                K.info("initialize encoded streams");
                const s = e.createEncodedStreams()
                  , o = {
                    kind: "encode",
                    data: {
                        readableStream: s.readable,
                        writableStream: s.writable,
                        codec: i,
                        trackId: t,
                        participantIdentity: this.room.localParticipant.identity
                    }
                };
                this.worker.postMessage(o, [s.readable, s.writable])
            }
            e[Rn] = !0
        }
    }
}
var dn;
(function(n) {
    n[n.WAITING = 0] = "WAITING",
    n[n.RUNNING = 1] = "RUNNING",
    n[n.COMPLETED = 2] = "COMPLETED"
}
)(dn || (dn = {}));
class Vh {
    constructor() {
        this.pendingTasks = new Map,
        this.taskMutex = new _e,
        this.nextTaskIndex = 0
    }
    run(e) {
        return m(this, void 0, void 0, function*() {
            const t = {
                id: this.nextTaskIndex++,
                enqueuedAt: Date.now(),
                status: dn.WAITING
            };
            this.pendingTasks.set(t.id, t);
            const i = yield this.taskMutex.lock();
            try {
                return t.executedAt = Date.now(),
                t.status = dn.RUNNING,
                yield e()
            } finally {
                t.status = dn.COMPLETED,
                this.pendingTasks.delete(t.id),
                i()
            }
        })
    }
    flush() {
        return m(this, void 0, void 0, function*() {
            return this.run( () => m(this, void 0, void 0, function*() {}))
        })
    }
    snapshot() {
        return Array.from(this.pendingTasks.values())
    }
}
const Bh = ["syncState", "trickle", "offer", "answer", "simulate", "leave"];
function qh(n) {
    const e = Bh.indexOf(n.case) >= 0;
    return K.trace("request allowed to bypass queue:", {
        canPass: e,
        req: n
    }),
    e
}
var ee;
(function(n) {
    n[n.CONNECTING = 0] = "CONNECTING",
    n[n.CONNECTED = 1] = "CONNECTED",
    n[n.RECONNECTING = 2] = "RECONNECTING",
    n[n.DISCONNECTING = 3] = "DISCONNECTING",
    n[n.DISCONNECTED = 4] = "DISCONNECTED"
}
)(ee || (ee = {}));
class Mr {
    get currentState() {
        return this.state
    }
    get isDisconnected() {
        return this.state === ee.DISCONNECTING || this.state === ee.DISCONNECTED
    }
    get isEstablishingConnection() {
        return this.state === ee.CONNECTING || this.state === ee.RECONNECTING
    }
    getNextRequestId() {
        return this._requestId += 1,
        this._requestId
    }
    constructor() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1
          , t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var i;
        this.rtt = 0,
        this.state = ee.DISCONNECTED,
        this.log = K,
        this._requestId = 0,
        this.resetCallbacks = () => {
            this.onAnswer = void 0,
            this.onLeave = void 0,
            this.onLocalTrackPublished = void 0,
            this.onLocalTrackUnpublished = void 0,
            this.onNegotiateRequested = void 0,
            this.onOffer = void 0,
            this.onRemoteMuteChanged = void 0,
            this.onSubscribedQualityUpdate = void 0,
            this.onTokenRefresh = void 0,
            this.onTrickle = void 0,
            this.onClose = void 0
        }
        ,
        this.log = tt((i = t.loggerName) !== null && i !== void 0 ? i : je.Signal),
        this.loggerContextCb = t.loggerContextCb,
        this.useJSON = e,
        this.requestQueue = new Vh,
        this.queuedRequests = [],
        this.closingLock = new _e,
        this.connectionLock = new _e,
        this.state = ee.DISCONNECTED
    }
    get logContext() {
        var e, t;
        return (t = (e = this.loggerContextCb) === null || e === void 0 ? void 0 : e.call(this)) !== null && t !== void 0 ? t : {}
    }
    join(e, t, i, r) {
        return m(this, void 0, void 0, function*() {
            return this.state = ee.CONNECTING,
            this.options = i,
            yield this.connect(e, t, i, r)
        })
    }
    reconnect(e, t, i, r) {
        return m(this, void 0, void 0, function*() {
            if (!this.options) {
                this.log.warn("attempted to reconnect without signal options being set, ignoring", this.logContext);
                return
            }
            return this.state = ee.RECONNECTING,
            this.clearPingInterval(),
            yield this.connect(e, t, Object.assign(Object.assign({}, this.options), {
                reconnect: !0,
                sid: i,
                reconnectReason: r
            }))
        })
    }
    connect(e, t, i, r) {
        this.connectOptions = i,
        e = Nh(e),
        e = e.replace(/\/$/, ""),
        e += "/rtc";
        const s = Mh()
          , o = zh(t, s, i);
        return new Promise( (a, c) => m(this, void 0, void 0, function*() {
            const d = yield this.connectionLock.lock();
            try {
                const u = () => m(this, void 0, void 0, function*() {
                    this.close(),
                    clearTimeout(l),
                    c(new $("room connection has been cancelled (signal)"))
                })
                  , l = setTimeout( () => {
                    this.close(),
                    c(new $("room connection has timed out (signal)"))
                }
                , i.websocketTimeout);
                r?.aborted && u(),
                r?.addEventListener("abort", u),
                this.log.debug("connecting to ".concat(e + o), this.logContext),
                this.ws && (yield this.close(!1)),
                this.ws = new WebSocket(e + o),
                this.ws.binaryType = "arraybuffer",
                this.ws.onopen = () => {
                    clearTimeout(l)
                }
                ,
                this.ws.onerror = h => m(this, void 0, void 0, function*() {
                    if (this.state !== ee.CONNECTED) {
                        this.state = ee.DISCONNECTED,
                        clearTimeout(l);
                        try {
                            const f = yield fetch("http".concat(e.substring(2), "/validate").concat(o));
                            if (f.status.toFixed(0).startsWith("4")) {
                                const v = yield f.text();
                                c(new $(v,ke.NotAllowed,f.status))
                            } else
                                c(new $("Internal error",ke.InternalError,f.status))
                        } catch {
                            c(new $("server was not reachable",ke.ServerUnreachable))
                        }
                        return
                    }
                    this.handleWSError(h)
                }),
                this.ws.onmessage = h => m(this, void 0, void 0, function*() {
                    var f, v, p;
                    let y;
                    if (typeof h.data == "string") {
                        const g = JSON.parse(h.data);
                        y = fs.fromJson(g, {
                            ignoreUnknownFields: !0
                        })
                    } else if (h.data instanceof ArrayBuffer)
                        y = fs.fromBinary(new Uint8Array(h.data));
                    else {
                        this.log.error("could not decode websocket message: ".concat(typeof h.data), this.logContext);
                        return
                    }
                    if (this.state !== ee.CONNECTED) {
                        let g = !1;
                        if (((f = y.message) === null || f === void 0 ? void 0 : f.case) === "join" ? (this.state = ee.CONNECTED,
                        r?.removeEventListener("abort", u),
                        this.pingTimeoutDuration = y.message.value.pingTimeout,
                        this.pingIntervalDuration = y.message.value.pingInterval,
                        this.pingTimeoutDuration && this.pingTimeoutDuration > 0 && (this.log.debug("ping config", Object.assign(Object.assign({}, this.logContext), {
                            timeout: this.pingTimeoutDuration,
                            interval: this.pingIntervalDuration
                        })),
                        this.startPingInterval()),
                        a(y.message.value)) : this.state === ee.RECONNECTING && y.message.case !== "leave" ? (this.state = ee.CONNECTED,
                        r?.removeEventListener("abort", u),
                        this.startPingInterval(),
                        ((v = y.message) === null || v === void 0 ? void 0 : v.case) === "reconnect" ? a(y.message.value) : (this.log.debug("declaring signal reconnected without reconnect response received", this.logContext),
                        a(void 0),
                        g = !0)) : this.isEstablishingConnection && y.message.case === "leave" ? c(new $("Received leave request while trying to (re)connect",ke.LeaveRequest)) : i.reconnect || c(new $("did not receive join response, got ".concat((p = y.message) === null || p === void 0 ? void 0 : p.case, " instead"))),
                        !g)
                            return
                    }
                    this.signalLatency && (yield Qe(this.signalLatency)),
                    this.handleSignalResponse(y)
                }),
                this.ws.onclose = h => {
                    this.isEstablishingConnection && c(new $("Websocket got closed during a (re)connection attempt")),
                    this.log.warn("websocket closed", Object.assign(Object.assign({}, this.logContext), {
                        reason: h.reason,
                        code: h.code,
                        wasClean: h.wasClean,
                        state: this.state
                    })),
                    this.handleOnClose(h.reason)
                }
            } finally {
                d()
            }
        }))
    }
    close() {
        return m(this, arguments, void 0, function() {
            var e = this;
            let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
            return function*() {
                const i = yield e.closingLock.lock();
                try {
                    if (e.clearPingInterval(),
                    t && (e.state = ee.DISCONNECTING),
                    e.ws) {
                        e.ws.onmessage = null,
                        e.ws.onopen = null,
                        e.ws.onclose = null;
                        const r = new Promise(s => {
                            e.ws ? e.ws.onclose = () => {
                                s()
                            }
                            : s()
                        }
                        );
                        e.ws.readyState < e.ws.CLOSING && (e.ws.close(),
                        yield Promise.race([r, Qe(250)])),
                        e.ws = void 0
                    }
                } finally {
                    t && (e.state = ee.DISCONNECTED),
                    i()
                }
            }()
        })
    }
    sendOffer(e) {
        this.log.debug("sending offer", Object.assign(Object.assign({}, this.logContext), {
            offerSdp: e.sdp
        })),
        this.sendRequest({
            case: "offer",
            value: Xn(e)
        })
    }
    sendAnswer(e) {
        return this.log.debug("sending answer", Object.assign(Object.assign({}, this.logContext), {
            answerSdp: e.sdp
        })),
        this.sendRequest({
            case: "answer",
            value: Xn(e)
        })
    }
    sendIceCandidate(e, t) {
        return this.log.trace("sending ice candidate", Object.assign(Object.assign({}, this.logContext), {
            candidate: e
        })),
        this.sendRequest({
            case: "trickle",
            value: new Pr({
                candidateInit: JSON.stringify(e),
                target: t
            })
        })
    }
    sendMuteTrack(e, t) {
        return this.sendRequest({
            case: "mute",
            value: new Er({
                sid: e,
                muted: t
            })
        })
    }
    sendAddTrack(e) {
        return this.sendRequest({
            case: "addTrack",
            value: e
        })
    }
    sendUpdateLocalMetadata(e, t) {
        return m(this, arguments, void 0, function(i, r) {
            var s = this;
            let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return function*() {
                const a = s.getNextRequestId();
                return yield s.sendRequest({
                    case: "updateMetadata",
                    value: new ka({
                        requestId: a,
                        metadata: i,
                        name: r,
                        attributes: o
                    })
                }),
                a
            }()
        })
    }
    sendUpdateTrackSettings(e) {
        this.sendRequest({
            case: "trackSetting",
            value: e
        })
    }
    sendUpdateSubscription(e) {
        return this.sendRequest({
            case: "subscription",
            value: e
        })
    }
    sendSyncState(e) {
        return this.sendRequest({
            case: "syncState",
            value: e
        })
    }
    sendUpdateVideoLayers(e, t) {
        return this.sendRequest({
            case: "updateLayers",
            value: new ya({
                trackSid: e,
                layers: t
            })
        })
    }
    sendUpdateSubscriptionPermissions(e, t) {
        return this.sendRequest({
            case: "subscriptionPermission",
            value: new Ca({
                allParticipants: e,
                trackPermissions: t
            })
        })
    }
    sendSimulateScenario(e) {
        return this.sendRequest({
            case: "simulate",
            value: e
        })
    }
    sendPing() {
        return Promise.all([this.sendRequest({
            case: "ping",
            value: te.parse(Date.now())
        }), this.sendRequest({
            case: "pingReq",
            value: new Ea({
                timestamp: te.parse(Date.now()),
                rtt: te.parse(this.rtt)
            })
        })])
    }
    sendUpdateLocalAudioTrack(e, t) {
        return this.sendRequest({
            case: "updateAudioTrack",
            value: new ba({
                trackSid: e,
                features: t
            })
        })
    }
    sendLeave() {
        return this.sendRequest({
            case: "leave",
            value: new di({
                reason: Lt.CLIENT_INITIATED,
                action: Ut.DISCONNECT
            })
        })
    }
    sendRequest(e) {
        return m(this, arguments, void 0, function(t) {
            var i = this;
            let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
            return function*() {
                if (!r && !qh(t) && i.state === ee.RECONNECTING) {
                    i.queuedRequests.push( () => m(i, void 0, void 0, function*() {
                        yield this.sendRequest(t, !0)
                    }));
                    return
                }
                if (r || (yield i.requestQueue.flush()),
                i.signalLatency && (yield Qe(i.signalLatency)),
                !i.ws || i.ws.readyState !== i.ws.OPEN) {
                    i.log.error("cannot send signal request before connected, type: ".concat(t?.case), i.logContext);
                    return
                }
                const o = new bl({
                    message: t
                });
                try {
                    i.useJSON ? i.ws.send(o.toJsonString()) : i.ws.send(o.toBinary())
                } catch (a) {
                    i.log.error("error sending signal message", Object.assign(Object.assign({}, i.logContext), {
                        error: a
                    }))
                }
            }()
        })
    }
    handleSignalResponse(e) {
        var t, i;
        const r = e.message;
        if (r == null) {
            this.log.debug("received unsupported message", this.logContext);
            return
        }
        let s = !1;
        if (r.case === "answer") {
            const o = Ns(r.value);
            this.onAnswer && this.onAnswer(o)
        } else if (r.case === "offer") {
            const o = Ns(r.value);
            this.onOffer && this.onOffer(o)
        } else if (r.case === "trickle") {
            const o = JSON.parse(r.value.candidateInit);
            this.onTrickle && this.onTrickle(o, r.value.target)
        } else
            r.case === "update" ? this.onParticipantUpdate && this.onParticipantUpdate((t = r.value.participants) !== null && t !== void 0 ? t : []) : r.case === "trackPublished" ? this.onLocalTrackPublished && this.onLocalTrackPublished(r.value) : r.case === "speakersChanged" ? this.onSpeakersChanged && this.onSpeakersChanged((i = r.value.speakers) !== null && i !== void 0 ? i : []) : r.case === "leave" ? this.onLeave && this.onLeave(r.value) : r.case === "mute" ? this.onRemoteMuteChanged && this.onRemoteMuteChanged(r.value.sid, r.value.muted) : r.case === "roomUpdate" ? this.onRoomUpdate && r.value.room && this.onRoomUpdate(r.value.room) : r.case === "connectionQuality" ? this.onConnectionQuality && this.onConnectionQuality(r.value) : r.case === "streamStateUpdate" ? this.onStreamStateUpdate && this.onStreamStateUpdate(r.value) : r.case === "subscribedQualityUpdate" ? this.onSubscribedQualityUpdate && this.onSubscribedQualityUpdate(r.value) : r.case === "subscriptionPermissionUpdate" ? this.onSubscriptionPermissionUpdate && this.onSubscriptionPermissionUpdate(r.value) : r.case === "refreshToken" ? this.onTokenRefresh && this.onTokenRefresh(r.value) : r.case === "trackUnpublished" ? this.onLocalTrackUnpublished && this.onLocalTrackUnpublished(r.value) : r.case === "subscriptionResponse" ? this.onSubscriptionError && this.onSubscriptionError(r.value) : r.case === "pong" || (r.case === "pongResp" ? (this.rtt = Date.now() - Number.parseInt(r.value.lastPingTimestamp.toString()),
            this.resetPingTimeout(),
            s = !0) : r.case === "requestResponse" ? this.onRequestResponse && this.onRequestResponse(r.value) : r.case === "trackSubscribed" ? this.onLocalTrackSubscribed && this.onLocalTrackSubscribed(r.value.trackSid) : this.log.debug("unsupported message", Object.assign(Object.assign({}, this.logContext), {
                msgCase: r.case
            })));
        s || this.resetPingTimeout()
    }
    setReconnected() {
        for (; this.queuedRequests.length > 0; ) {
            const e = this.queuedRequests.shift();
            e && this.requestQueue.run(e)
        }
    }
    handleOnClose(e) {
        return m(this, void 0, void 0, function*() {
            if (this.state === ee.DISCONNECTED)
                return;
            const t = this.onClose;
            yield this.close(),
            this.log.debug("websocket connection closed: ".concat(e), Object.assign(Object.assign({}, this.logContext), {
                reason: e
            })),
            t && t(e)
        })
    }
    handleWSError(e) {
        this.log.error("websocket error", Object.assign(Object.assign({}, this.logContext), {
            error: e
        }))
    }
    resetPingTimeout() {
        if (this.clearPingTimeout(),
        !this.pingTimeoutDuration) {
            this.log.warn("ping timeout duration not set", this.logContext);
            return
        }
        this.pingTimeout = ve.setTimeout( () => {
            this.log.warn("ping timeout triggered. last pong received at: ".concat(new Date(Date.now() - this.pingTimeoutDuration * 1e3).toUTCString()), this.logContext),
            this.handleOnClose("ping timeout")
        }
        , this.pingTimeoutDuration * 1e3)
    }
    clearPingTimeout() {
        this.pingTimeout && ve.clearTimeout(this.pingTimeout)
    }
    startPingInterval() {
        if (this.clearPingInterval(),
        this.resetPingTimeout(),
        !this.pingIntervalDuration) {
            this.log.warn("ping interval duration not set", this.logContext);
            return
        }
        this.log.debug("start ping interval", this.logContext),
        this.pingInterval = ve.setInterval( () => {
            this.sendPing()
        }
        , this.pingIntervalDuration * 1e3)
    }
    clearPingInterval() {
        this.log.debug("clearing ping interval", this.logContext),
        this.clearPingTimeout(),
        this.pingInterval && ve.clearInterval(this.pingInterval)
    }
}
function Ns(n) {
    const e = {
        type: "offer",
        sdp: n.sdp
    };
    switch (n.type) {
    case "answer":
    case "offer":
    case "pranswer":
    case "rollback":
        e.type = n.type;
        break
    }
    return e
}
function Xn(n) {
    return new yt({
        sdp: n.sdp,
        type: n.type
    })
}
function zh(n, e, t) {
    var i;
    const r = new URLSearchParams;
    return r.set("access_token", n),
    t.reconnect && (r.set("reconnect", "1"),
    t.sid && r.set("sid", t.sid)),
    r.set("auto_subscribe", t.autoSubscribe ? "1" : "0"),
    r.set("sdk", it() ? "reactnative" : "js"),
    r.set("version", e.version),
    r.set("protocol", e.protocol.toString()),
    e.deviceModel && r.set("device_model", e.deviceModel),
    e.os && r.set("os", e.os),
    e.osVersion && r.set("os_version", e.osVersion),
    e.browser && r.set("browser", e.browser),
    e.browserVersion && r.set("browser_version", e.browserVersion),
    t.adaptiveStream && r.set("adaptive_stream", "1"),
    t.reconnectReason && r.set("reconnect_reason", t.reconnectReason.toString()),
    !((i = navigator.connection) === null || i === void 0) && i.type && r.set("network", navigator.connection.type),
    "?".concat(r.toString())
}
var We = {}, Pi = {}, Ei = {
    exports: {}
}, Ls;
function hc() {
    if (Ls)
        return Ei.exports;
    Ls = 1;
    var n = Ei.exports = {
        v: [{
            name: "version",
            reg: /^(\d*)$/
        }],
        o: [{
            name: "origin",
            reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
            names: ["username", "sessionId", "sessionVersion", "netType", "ipVer", "address"],
            format: "%s %s %d %s IP%d %s"
        }],
        s: [{
            name: "name"
        }],
        i: [{
            name: "description"
        }],
        u: [{
            name: "uri"
        }],
        e: [{
            name: "email"
        }],
        p: [{
            name: "phone"
        }],
        z: [{
            name: "timezones"
        }],
        r: [{
            name: "repeats"
        }],
        t: [{
            name: "timing",
            reg: /^(\d*) (\d*)/,
            names: ["start", "stop"],
            format: "%d %d"
        }],
        c: [{
            name: "connection",
            reg: /^IN IP(\d) (\S*)/,
            names: ["version", "ip"],
            format: "IN IP%d %s"
        }],
        b: [{
            push: "bandwidth",
            reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
            names: ["type", "limit"],
            format: "%s:%s"
        }],
        m: [{
            reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
            names: ["type", "port", "protocol", "payloads"],
            format: "%s %d %s %s"
        }],
        a: [{
            push: "rtp",
            reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
            names: ["payload", "codec", "rate", "encoding"],
            format: function(e) {
                return e.encoding ? "rtpmap:%d %s/%s/%s" : e.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s"
            }
        }, {
            push: "fmtp",
            reg: /^fmtp:(\d*) ([\S| ]*)/,
            names: ["payload", "config"],
            format: "fmtp:%d %s"
        }, {
            name: "control",
            reg: /^control:(.*)/,
            format: "control:%s"
        }, {
            name: "rtcp",
            reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
            names: ["port", "netType", "ipVer", "address"],
            format: function(e) {
                return e.address != null ? "rtcp:%d %s IP%d %s" : "rtcp:%d"
            }
        }, {
            push: "rtcpFbTrrInt",
            reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
            names: ["payload", "value"],
            format: "rtcp-fb:%s trr-int %d"
        }, {
            push: "rtcpFb",
            reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
            names: ["payload", "type", "subtype"],
            format: function(e) {
                return e.subtype != null ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s"
            }
        }, {
            push: "ext",
            reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
            names: ["value", "direction", "encrypt-uri", "uri", "config"],
            format: function(e) {
                return "extmap:%d" + (e.direction ? "/%s" : "%v") + (e["encrypt-uri"] ? " %s" : "%v") + " %s" + (e.config ? " %s" : "")
            }
        }, {
            name: "extmapAllowMixed",
            reg: /^(extmap-allow-mixed)/
        }, {
            push: "crypto",
            reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
            names: ["id", "suite", "config", "sessionConfig"],
            format: function(e) {
                return e.sessionConfig != null ? "crypto:%d %s %s %s" : "crypto:%d %s %s"
            }
        }, {
            name: "setup",
            reg: /^setup:(\w*)/,
            format: "setup:%s"
        }, {
            name: "connectionType",
            reg: /^connection:(new|existing)/,
            format: "connection:%s"
        }, {
            name: "mid",
            reg: /^mid:([^\s]*)/,
            format: "mid:%s"
        }, {
            name: "msid",
            reg: /^msid:(.*)/,
            format: "msid:%s"
        }, {
            name: "ptime",
            reg: /^ptime:(\d*(?:\.\d*)*)/,
            format: "ptime:%d"
        }, {
            name: "maxptime",
            reg: /^maxptime:(\d*(?:\.\d*)*)/,
            format: "maxptime:%d"
        }, {
            name: "direction",
            reg: /^(sendrecv|recvonly|sendonly|inactive)/
        }, {
            name: "icelite",
            reg: /^(ice-lite)/
        }, {
            name: "iceUfrag",
            reg: /^ice-ufrag:(\S*)/,
            format: "ice-ufrag:%s"
        }, {
            name: "icePwd",
            reg: /^ice-pwd:(\S*)/,
            format: "ice-pwd:%s"
        }, {
            name: "fingerprint",
            reg: /^fingerprint:(\S*) (\S*)/,
            names: ["type", "hash"],
            format: "fingerprint:%s %s"
        }, {
            push: "candidates",
            reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
            names: ["foundation", "component", "transport", "priority", "ip", "port", "type", "raddr", "rport", "tcptype", "generation", "network-id", "network-cost"],
            format: function(e) {
                var t = "candidate:%s %d %s %d %s %d typ %s";
                return t += e.raddr != null ? " raddr %s rport %d" : "%v%v",
                t += e.tcptype != null ? " tcptype %s" : "%v",
                e.generation != null && (t += " generation %d"),
                t += e["network-id"] != null ? " network-id %d" : "%v",
                t += e["network-cost"] != null ? " network-cost %d" : "%v",
                t
            }
        }, {
            name: "endOfCandidates",
            reg: /^(end-of-candidates)/
        }, {
            name: "remoteCandidates",
            reg: /^remote-candidates:(.*)/,
            format: "remote-candidates:%s"
        }, {
            name: "iceOptions",
            reg: /^ice-options:(\S*)/,
            format: "ice-options:%s"
        }, {
            push: "ssrcs",
            reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
            names: ["id", "attribute", "value"],
            format: function(e) {
                var t = "ssrc:%d";
                return e.attribute != null && (t += " %s",
                e.value != null && (t += ":%s")),
                t
            }
        }, {
            push: "ssrcGroups",
            reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
            names: ["semantics", "ssrcs"],
            format: "ssrc-group:%s %s"
        }, {
            name: "msidSemantic",
            reg: /^msid-semantic:\s?(\w*) (\S*)/,
            names: ["semantic", "token"],
            format: "msid-semantic: %s %s"
        }, {
            push: "groups",
            reg: /^group:(\w*) (.*)/,
            names: ["type", "mids"],
            format: "group:%s %s"
        }, {
            name: "rtcpMux",
            reg: /^(rtcp-mux)/
        }, {
            name: "rtcpRsize",
            reg: /^(rtcp-rsize)/
        }, {
            name: "sctpmap",
            reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
            names: ["sctpmapNumber", "app", "maxMessageSize"],
            format: function(e) {
                return e.maxMessageSize != null ? "sctpmap:%s %s %s" : "sctpmap:%s %s"
            }
        }, {
            name: "xGoogleFlag",
            reg: /^x-google-flag:([^\s]*)/,
            format: "x-google-flag:%s"
        }, {
            push: "rids",
            reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
            names: ["id", "direction", "params"],
            format: function(e) {
                return e.params ? "rid:%s %s %s" : "rid:%s %s"
            }
        }, {
            push: "imageattrs",
            reg: new RegExp("^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"),
            names: ["pt", "dir1", "attrs1", "dir2", "attrs2"],
            format: function(e) {
                return "imageattr:%s %s %s" + (e.dir2 ? " %s %s" : "")
            }
        }, {
            name: "simulcast",
            reg: new RegExp("^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"),
            names: ["dir1", "list1", "dir2", "list2"],
            format: function(e) {
                return "simulcast:%s %s" + (e.dir2 ? " %s %s" : "")
            }
        }, {
            name: "simulcast_03",
            reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
            names: ["value"],
            format: "simulcast: %s"
        }, {
            name: "framerate",
            reg: /^framerate:(\d+(?:$|\.\d+))/,
            format: "framerate:%s"
        }, {
            name: "sourceFilter",
            reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
            names: ["filterMode", "netType", "addressTypes", "destAddress", "srcList"],
            format: "source-filter: %s %s %s %s %s"
        }, {
            name: "bundleOnly",
            reg: /^(bundle-only)/
        }, {
            name: "label",
            reg: /^label:(.+)/,
            format: "label:%s"
        }, {
            name: "sctpPort",
            reg: /^sctp-port:(\d+)$/,
            format: "sctp-port:%s"
        }, {
            name: "maxMessageSize",
            reg: /^max-message-size:(\d+)$/,
            format: "max-message-size:%s"
        }, {
            push: "tsRefClocks",
            reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
            names: ["clksrc", "clksrcExt"],
            format: function(e) {
                return "ts-refclk:%s" + (e.clksrcExt != null ? "=%s" : "")
            }
        }, {
            name: "mediaClk",
            reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
            names: ["id", "mediaClockName", "mediaClockValue", "rateNumerator", "rateDenominator"],
            format: function(e) {
                var t = "mediaclk:";
                return t += e.id != null ? "id=%s %s" : "%v%s",
                t += e.mediaClockValue != null ? "=%s" : "",
                t += e.rateNumerator != null ? " rate=%s" : "",
                t += e.rateDenominator != null ? "/%s" : "",
                t
            }
        }, {
            name: "keywords",
            reg: /^keywds:(.+)$/,
            format: "keywds:%s"
        }, {
            name: "content",
            reg: /^content:(.+)/,
            format: "content:%s"
        }, {
            name: "bfcpFloorCtrl",
            reg: /^floorctrl:(c-only|s-only|c-s)/,
            format: "floorctrl:%s"
        }, {
            name: "bfcpConfId",
            reg: /^confid:(\d+)/,
            format: "confid:%s"
        }, {
            name: "bfcpUserId",
            reg: /^userid:(\d+)/,
            format: "userid:%s"
        }, {
            name: "bfcpFloorId",
            reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
            names: ["id", "mStream"],
            format: "floorid:%s mstrm:%s"
        }, {
            push: "invalid",
            names: ["value"]
        }]
    };
    return Object.keys(n).forEach(function(e) {
        var t = n[e];
        t.forEach(function(i) {
            i.reg || (i.reg = /(.*)/),
            i.format || (i.format = "%s")
        })
    }),
    Ei.exports
}
var Us;
function Wh() {
    return Us || (Us = 1,
    function(n) {
        var e = function(a) {
            return String(Number(a)) === a ? Number(a) : a
        }
          , t = function(a, c, d, u) {
            if (u && !d)
                c[u] = e(a[1]);
            else
                for (var l = 0; l < d.length; l += 1)
                    a[l + 1] != null && (c[d[l]] = e(a[l + 1]))
        }
          , i = function(a, c, d) {
            var u = a.name && a.names;
            a.push && !c[a.push] ? c[a.push] = [] : u && !c[a.name] && (c[a.name] = {});
            var l = a.push ? {} : u ? c[a.name] : c;
            t(d.match(a.reg), l, a.names, a.name),
            a.push && c[a.push].push(l)
        }
          , r = hc()
          , s = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
        n.parse = function(a) {
            var c = {}
              , d = []
              , u = c;
            return a.split(/(\r\n|\r|\n)/).filter(s).forEach(function(l) {
                var h = l[0]
                  , f = l.slice(2);
                h === "m" && (d.push({
                    rtp: [],
                    fmtp: []
                }),
                u = d[d.length - 1]);
                for (var v = 0; v < (r[h] || []).length; v += 1) {
                    var p = r[h][v];
                    if (p.reg.test(f))
                        return i(p, u, f)
                }
            }),
            c.media = d,
            c
        }
        ;
        var o = function(a, c) {
            var d = c.split(/=(.+)/, 2);
            return d.length === 2 ? a[d[0]] = e(d[1]) : d.length === 1 && c.length > 1 && (a[d[0]] = void 0),
            a
        };
        n.parseParams = function(a) {
            return a.split(/;\s?/).reduce(o, {})
        }
        ,
        n.parseFmtpConfig = n.parseParams,
        n.parsePayloads = function(a) {
            return a.toString().split(" ").map(Number)
        }
        ,
        n.parseRemoteCandidates = function(a) {
            for (var c = [], d = a.split(" ").map(e), u = 0; u < d.length; u += 3)
                c.push({
                    component: d[u],
                    ip: d[u + 1],
                    port: d[u + 2]
                });
            return c
        }
        ,
        n.parseImageAttributes = function(a) {
            return a.split(" ").map(function(c) {
                return c.substring(1, c.length - 1).split(",").reduce(o, {})
            })
        }
        ,
        n.parseSimulcastStreamList = function(a) {
            return a.split(";").map(function(c) {
                return c.split(",").map(function(d) {
                    var u, l = !1;
                    return d[0] !== "~" ? u = e(d) : (u = e(d.substring(1, d.length)),
                    l = !0),
                    {
                        scid: u,
                        paused: l
                    }
                })
            })
        }
    }(Pi)),
    Pi
}
var Ri, Fs;
function Gh() {
    if (Fs)
        return Ri;
    Fs = 1;
    var n = hc()
      , e = /%[sdv%]/g
      , t = function(o) {
        var a = 1
          , c = arguments
          , d = c.length;
        return o.replace(e, function(u) {
            if (a >= d)
                return u;
            var l = c[a];
            switch (a += 1,
            u) {
            case "%%":
                return "%";
            case "%s":
                return String(l);
            case "%d":
                return Number(l);
            case "%v":
                return ""
            }
        })
    }
      , i = function(o, a, c) {
        var d = a.format instanceof Function ? a.format(a.push ? c : c[a.name]) : a.format
          , u = [o + "=" + d];
        if (a.names)
            for (var l = 0; l < a.names.length; l += 1) {
                var h = a.names[l];
                a.name ? u.push(c[a.name][h]) : u.push(c[a.names[l]])
            }
        else
            u.push(c[a.name]);
        return t.apply(null, u)
    }
      , r = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"]
      , s = ["i", "c", "b", "a"];
    return Ri = function(o, a) {
        a = a || {},
        o.version == null && (o.version = 0),
        o.name == null && (o.name = " "),
        o.media.forEach(function(l) {
            l.payloads == null && (l.payloads = "")
        });
        var c = a.outerOrder || r
          , d = a.innerOrder || s
          , u = [];
        return c.forEach(function(l) {
            n[l].forEach(function(h) {
                h.name in o && o[h.name] != null ? u.push(i(l, h, o)) : h.push in o && o[h.push] != null && o[h.push].forEach(function(f) {
                    u.push(i(l, h, f))
                })
            })
        }),
        o.media.forEach(function(l) {
            u.push(i("m", n.m[0], l)),
            d.forEach(function(h) {
                n[h].forEach(function(f) {
                    f.name in l && l[f.name] != null ? u.push(i(h, f, l)) : f.push in l && l[f.push] != null && l[f.push].forEach(function(v) {
                        u.push(i(h, f, v))
                    })
                })
            })
        }),
        u.join(`\r
`) + `\r
`
    }
    ,
    Ri
}
var js;
function Kh() {
    if (js)
        return We;
    js = 1;
    var n = Wh()
      , e = Gh();
    return We.write = e,
    We.parse = n.parse,
    We.parseParams = n.parseParams,
    We.parseFmtpConfig = n.parseFmtpConfig,
    We.parsePayloads = n.parsePayloads,
    We.parseRemoteCandidates = n.parseRemoteCandidates,
    We.parseImageAttributes = n.parseImageAttributes,
    We.parseSimulcastStreamList = n.parseSimulcastStreamList,
    We
}
var dt = Kh();
const Hh = .7
  , Jh = 20
  , Bt = {
    NegotiationStarted: "negotiationStarted",
    NegotiationComplete: "negotiationComplete",
    RTPVideoPayloadTypes: "rtpVideoPayloadTypes"
};
class Vs extends Ye.EventEmitter {
    get pc() {
        return this._pc || (this._pc = this.createPC()),
        this._pc
    }
    constructor(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var i;
        super(),
        this.log = K,
        this.ddExtID = 0,
        this.pendingCandidates = [],
        this.restartingIce = !1,
        this.renegotiate = !1,
        this.trackBitrates = [],
        this.remoteStereoMids = [],
        this.remoteNackMids = [],
        this.negotiate = Ar(r => m(this, void 0, void 0, function*() {
            this.emit(Bt.NegotiationStarted);
            try {
                yield this.createAndSendOffer()
            } catch (s) {
                if (r)
                    r(s);
                else
                    throw s
            }
        }), Jh),
        this.close = () => {
            this._pc && (this._pc.close(),
            this._pc.onconnectionstatechange = null,
            this._pc.oniceconnectionstatechange = null,
            this._pc.onicegatheringstatechange = null,
            this._pc.ondatachannel = null,
            this._pc.onnegotiationneeded = null,
            this._pc.onsignalingstatechange = null,
            this._pc.onicecandidate = null,
            this._pc.ondatachannel = null,
            this._pc.ontrack = null,
            this._pc.onconnectionstatechange = null,
            this._pc.oniceconnectionstatechange = null,
            this._pc = null)
        }
        ,
        this.log = tt((i = t.loggerName) !== null && i !== void 0 ? i : je.PCTransport),
        this.loggerOptions = t,
        this.config = e,
        this._pc = this.createPC()
    }
    createPC() {
        const e = new RTCPeerConnection(this.config);
        return e.onicecandidate = t => {
            var i;
            t.candidate && ((i = this.onIceCandidate) === null || i === void 0 || i.call(this, t.candidate))
        }
        ,
        e.onicecandidateerror = t => {
            var i;
            (i = this.onIceCandidateError) === null || i === void 0 || i.call(this, t)
        }
        ,
        e.oniceconnectionstatechange = () => {
            var t;
            (t = this.onIceConnectionStateChange) === null || t === void 0 || t.call(this, e.iceConnectionState)
        }
        ,
        e.onsignalingstatechange = () => {
            var t;
            (t = this.onSignalingStatechange) === null || t === void 0 || t.call(this, e.signalingState)
        }
        ,
        e.onconnectionstatechange = () => {
            var t;
            (t = this.onConnectionStateChange) === null || t === void 0 || t.call(this, e.connectionState)
        }
        ,
        e.ondatachannel = t => {
            var i;
            (i = this.onDataChannel) === null || i === void 0 || i.call(this, t)
        }
        ,
        e.ontrack = t => {
            var i;
            (i = this.onTrack) === null || i === void 0 || i.call(this, t)
        }
        ,
        e
    }
    get logContext() {
        var e, t;
        return Object.assign({}, (t = (e = this.loggerOptions).loggerContextCb) === null || t === void 0 ? void 0 : t.call(e))
    }
    get isICEConnected() {
        return this._pc !== null && (this.pc.iceConnectionState === "connected" || this.pc.iceConnectionState === "completed")
    }
    addIceCandidate(e) {
        return m(this, void 0, void 0, function*() {
            if (this.pc.remoteDescription && !this.restartingIce)
                return this.pc.addIceCandidate(e);
            this.pendingCandidates.push(e)
        })
    }
    setRemoteDescription(e) {
        return m(this, void 0, void 0, function*() {
            var t;
            let i;
            if (e.type === "offer") {
                let {stereoMids: r, nackMids: s} = Qh(e);
                this.remoteStereoMids = r,
                this.remoteNackMids = s
            } else if (e.type === "answer") {
                const r = dt.parse((t = e.sdp) !== null && t !== void 0 ? t : "");
                r.media.forEach(s => {
                    s.type === "audio" && this.trackBitrates.some(o => {
                        if (!o.transceiver || s.mid != o.transceiver.mid)
                            return !1;
                        let a = 0;
                        if (s.rtp.some(d => d.codec.toUpperCase() === o.codec.toUpperCase() ? (a = d.payload,
                        !0) : !1),
                        a === 0)
                            return !0;
                        let c = !1;
                        for (const d of s.fmtp)
                            if (d.payload === a) {
                                d.config = d.config.split(";").filter(u => !u.includes("maxaveragebitrate")).join(";"),
                                o.maxbr > 0 && (d.config += ";maxaveragebitrate=".concat(o.maxbr * 1e3)),
                                c = !0;
                                break
                            }
                        return c || o.maxbr > 0 && s.fmtp.push({
                            payload: a,
                            config: "maxaveragebitrate=".concat(o.maxbr * 1e3)
                        }),
                        !0
                    }
                    )
                }
                ),
                i = dt.write(r)
            }
            yield this.setMungedSDP(e, i, !0),
            this.pendingCandidates.forEach(r => {
                this.pc.addIceCandidate(r)
            }
            ),
            this.pendingCandidates = [],
            this.restartingIce = !1,
            this.renegotiate ? (this.renegotiate = !1,
            yield this.createAndSendOffer()) : e.type === "answer" && (this.emit(Bt.NegotiationComplete),
            e.sdp && dt.parse(e.sdp).media.forEach(s => {
                s.type === "video" && this.emit(Bt.RTPVideoPayloadTypes, s.rtp)
            }
            ))
        })
    }
    createAndSendOffer(e) {
        return m(this, void 0, void 0, function*() {
            var t;
            if (this.onOffer === void 0)
                return;
            if (e?.iceRestart && (this.log.debug("restarting ICE", this.logContext),
            this.restartingIce = !0),
            this._pc && this._pc.signalingState === "have-local-offer") {
                const s = this._pc.remoteDescription;
                if (e?.iceRestart && s)
                    yield this._pc.setRemoteDescription(s);
                else {
                    this.renegotiate = !0;
                    return
                }
            } else if (!this._pc || this._pc.signalingState === "closed") {
                this.log.warn("could not createOffer with closed peer connection", this.logContext);
                return
            }
            this.log.debug("starting to negotiate", this.logContext);
            const i = yield this.pc.createOffer(e);
            this.log.debug("original offer", Object.assign({
                sdp: i.sdp
            }, this.logContext));
            const r = dt.parse((t = i.sdp) !== null && t !== void 0 ? t : "");
            r.media.forEach(s => {
                s.type === "audio" ? Bs(s, [], []) : s.type === "video" && this.trackBitrates.some(o => {
                    if (!s.msid || !o.cid || !s.msid.includes(o.cid))
                        return !1;
                    let a = 0;
                    if (s.rtp.some(d => d.codec.toUpperCase() === o.codec.toUpperCase() ? (a = d.payload,
                    !0) : !1),
                    a === 0 || (cn(o.codec) && this.ensureVideoDDExtensionForSVC(s, r),
                    o.codec !== "av1"))
                        return !0;
                    const c = Math.round(o.maxbr * Hh);
                    for (const d of s.fmtp)
                        if (d.payload === a) {
                            d.config.includes("x-google-start-bitrate") || (d.config += ";x-google-start-bitrate=".concat(c));
                            break
                        }
                    return !0
                }
                )
            }
            ),
            yield this.setMungedSDP(i, dt.write(r)),
            this.onOffer(i)
        })
    }
    createAndSetAnswer() {
        return m(this, void 0, void 0, function*() {
            var e;
            const t = yield this.pc.createAnswer()
              , i = dt.parse((e = t.sdp) !== null && e !== void 0 ? e : "");
            return i.media.forEach(r => {
                r.type === "audio" && Bs(r, this.remoteStereoMids, this.remoteNackMids)
            }
            ),
            yield this.setMungedSDP(t, dt.write(i)),
            t
        })
    }
    createDataChannel(e, t) {
        return this.pc.createDataChannel(e, t)
    }
    addTransceiver(e, t) {
        return this.pc.addTransceiver(e, t)
    }
    addTrack(e) {
        if (!this._pc)
            throw new le("PC closed, cannot add track");
        return this._pc.addTrack(e)
    }
    setTrackCodecBitrate(e) {
        this.trackBitrates.push(e)
    }
    setConfiguration(e) {
        var t;
        if (!this._pc)
            throw new le("PC closed, cannot configure");
        return (t = this._pc) === null || t === void 0 ? void 0 : t.setConfiguration(e)
    }
    canRemoveTrack() {
        var e;
        return !!(!((e = this._pc) === null || e === void 0) && e.removeTrack)
    }
    removeTrack(e) {
        var t;
        return (t = this._pc) === null || t === void 0 ? void 0 : t.removeTrack(e)
    }
    getConnectionState() {
        var e, t;
        return (t = (e = this._pc) === null || e === void 0 ? void 0 : e.connectionState) !== null && t !== void 0 ? t : "closed"
    }
    getICEConnectionState() {
        var e, t;
        return (t = (e = this._pc) === null || e === void 0 ? void 0 : e.iceConnectionState) !== null && t !== void 0 ? t : "closed"
    }
    getSignallingState() {
        var e, t;
        return (t = (e = this._pc) === null || e === void 0 ? void 0 : e.signalingState) !== null && t !== void 0 ? t : "closed"
    }
    getTransceivers() {
        var e, t;
        return (t = (e = this._pc) === null || e === void 0 ? void 0 : e.getTransceivers()) !== null && t !== void 0 ? t : []
    }
    getSenders() {
        var e, t;
        return (t = (e = this._pc) === null || e === void 0 ? void 0 : e.getSenders()) !== null && t !== void 0 ? t : []
    }
    getLocalDescription() {
        var e;
        return (e = this._pc) === null || e === void 0 ? void 0 : e.localDescription
    }
    getRemoteDescription() {
        var e;
        return (e = this.pc) === null || e === void 0 ? void 0 : e.remoteDescription
    }
    getStats() {
        return this.pc.getStats()
    }
    getConnectedAddress() {
        return m(this, void 0, void 0, function*() {
            var e;
            if (!this._pc)
                return;
            let t = "";
            const i = new Map
              , r = new Map;
            if ((yield this._pc.getStats()).forEach(a => {
                switch (a.type) {
                case "transport":
                    t = a.selectedCandidatePairId;
                    break;
                case "candidate-pair":
                    t === "" && a.selected && (t = a.id),
                    i.set(a.id, a);
                    break;
                case "remote-candidate":
                    r.set(a.id, "".concat(a.address, ":").concat(a.port));
                    break
                }
            }
            ),
            t === "")
                return;
            const o = (e = i.get(t)) === null || e === void 0 ? void 0 : e.remoteCandidateId;
            if (o !== void 0)
                return r.get(o)
        })
    }
    setMungedSDP(e, t, i) {
        return m(this, void 0, void 0, function*() {
            if (t) {
                const r = e.sdp;
                e.sdp = t;
                try {
                    this.log.debug("setting munged ".concat(i ? "remote" : "local", " description"), this.logContext),
                    i ? yield this.pc.setRemoteDescription(e) : yield this.pc.setLocalDescription(e);
                    return
                } catch (s) {
                    this.log.warn("not able to set ".concat(e.type, ", falling back to unmodified sdp"), Object.assign(Object.assign({}, this.logContext), {
                        error: s,
                        sdp: t
                    })),
                    e.sdp = r
                }
            }
            try {
                i ? yield this.pc.setRemoteDescription(e) : yield this.pc.setLocalDescription(e)
            } catch (r) {
                let s = "unknown error";
                r instanceof Error ? s = r.message : typeof r == "string" && (s = r);
                const o = {
                    error: s,
                    sdp: e.sdp
                };
                throw !i && this.pc.remoteDescription && (o.remoteSdp = this.pc.remoteDescription),
                this.log.error("unable to set ".concat(e.type), Object.assign(Object.assign({}, this.logContext), {
                    fields: o
                })),
                new or(s)
            }
        })
    }
    ensureVideoDDExtensionForSVC(e, t) {
        var i, r;
        if (!((i = e.ext) === null || i === void 0 ? void 0 : i.some(o => o.uri === Is))) {
            if (this.ddExtID === 0) {
                let o = 0;
                t.media.forEach(a => {
                    var c;
                    a.type === "video" && ((c = a.ext) === null || c === void 0 || c.forEach(d => {
                        d.value > o && (o = d.value)
                    }
                    ))
                }
                ),
                this.ddExtID = o + 1
            }
            (r = e.ext) === null || r === void 0 || r.push({
                value: this.ddExtID,
                uri: Is
            })
        }
    }
}
function Bs(n, e, t) {
    let i = 0;
    n.rtp.some(r => r.codec === "opus" ? (i = r.payload,
    !0) : !1),
    i > 0 && (n.rtcpFb || (n.rtcpFb = []),
    t.includes(n.mid) && !n.rtcpFb.some(r => r.payload === i && r.type === "nack") && n.rtcpFb.push({
        payload: i,
        type: "nack"
    }),
    e.includes(n.mid) && n.fmtp.some(r => r.payload === i ? (r.config.includes("stereo=1") || (r.config += ";stereo=1"),
    !0) : !1))
}
function Qh(n) {
    var e;
    const t = []
      , i = []
      , r = dt.parse((e = n.sdp) !== null && e !== void 0 ? e : "");
    let s = 0;
    return r.media.forEach(o => {
        var a;
        o.type === "audio" && (o.rtp.some(c => c.codec === "opus" ? (s = c.payload,
        !0) : !1),
        !((a = o.rtcpFb) === null || a === void 0) && a.some(c => c.payload === s && c.type === "nack") && i.push(o.mid),
        o.fmtp.some(c => c.payload === s ? (c.config.includes("sprop-stereo=1") && t.push(o.mid),
        !0) : !1))
    }
    ),
    {
        stereoMids: t,
        nackMids: i
    }
}
const pr = "vp8"
  , Yh = {
    audioPreset: ar.music,
    dtx: !0,
    red: !0,
    forceStereo: !1,
    simulcast: !0,
    screenShareEncoding: Dr.h1080fps15.encoding,
    stopMicTrackOnMute: !1,
    videoCodec: pr,
    backupCodec: !0
}
  , fc = {
    autoGainControl: !0,
    echoCancellation: !0,
    noiseSuppression: !0
}
  , pc = {
    resolution: mn.h720.resolution
}
  , $h = {
    adaptiveStream: !1,
    dynacast: !1,
    stopLocalTrackOnUnpublish: !0,
    reconnectPolicy: new Wl,
    disconnectOnPageLeave: !0,
    webAudioMix: !1
}
  , Or = {
    autoSubscribe: !0,
    maxRetries: 1,
    peerConnectionTimeout: 15e3,
    websocketTimeout: 15e3
};
var oe;
(function(n) {
    n[n.NEW = 0] = "NEW",
    n[n.CONNECTING = 1] = "CONNECTING",
    n[n.CONNECTED = 2] = "CONNECTED",
    n[n.FAILED = 3] = "FAILED",
    n[n.CLOSING = 4] = "CLOSING",
    n[n.CLOSED = 5] = "CLOSED"
}
)(oe || (oe = {}));
class Xh {
    get needsPublisher() {
        return this.isPublisherConnectionRequired
    }
    get needsSubscriber() {
        return this.isSubscriberConnectionRequired
    }
    get currentState() {
        return this.state
    }
    constructor(e, t, i) {
        var r;
        this.peerConnectionTimeout = Or.peerConnectionTimeout,
        this.log = K,
        this.updateState = () => {
            var s;
            const o = this.state
              , a = this.requiredTransports.map(c => c.getConnectionState());
            a.every(c => c === "connected") ? this.state = oe.CONNECTED : a.some(c => c === "failed") ? this.state = oe.FAILED : a.some(c => c === "connecting") ? this.state = oe.CONNECTING : a.every(c => c === "closed") ? this.state = oe.CLOSED : a.some(c => c === "closed") ? this.state = oe.CLOSING : a.every(c => c === "new") && (this.state = oe.NEW),
            o !== this.state && (this.log.debug("pc state change: from ".concat(oe[o], " to ").concat(oe[this.state]), this.logContext),
            (s = this.onStateChange) === null || s === void 0 || s.call(this, this.state, this.publisher.getConnectionState(), this.subscriber.getConnectionState()))
        }
        ,
        this.log = tt((r = i.loggerName) !== null && r !== void 0 ? r : je.PCManager),
        this.loggerOptions = i,
        this.isPublisherConnectionRequired = !t,
        this.isSubscriberConnectionRequired = t,
        this.publisher = new Vs(e,i),
        this.subscriber = new Vs(e,i),
        this.publisher.onConnectionStateChange = this.updateState,
        this.subscriber.onConnectionStateChange = this.updateState,
        this.publisher.onIceConnectionStateChange = this.updateState,
        this.subscriber.onIceConnectionStateChange = this.updateState,
        this.publisher.onSignalingStatechange = this.updateState,
        this.subscriber.onSignalingStatechange = this.updateState,
        this.publisher.onIceCandidate = s => {
            var o;
            (o = this.onIceCandidate) === null || o === void 0 || o.call(this, s, Fe.PUBLISHER)
        }
        ,
        this.subscriber.onIceCandidate = s => {
            var o;
            (o = this.onIceCandidate) === null || o === void 0 || o.call(this, s, Fe.SUBSCRIBER)
        }
        ,
        this.subscriber.onDataChannel = s => {
            var o;
            (o = this.onDataChannel) === null || o === void 0 || o.call(this, s)
        }
        ,
        this.subscriber.onTrack = s => {
            var o;
            (o = this.onTrack) === null || o === void 0 || o.call(this, s)
        }
        ,
        this.publisher.onOffer = s => {
            var o;
            (o = this.onPublisherOffer) === null || o === void 0 || o.call(this, s)
        }
        ,
        this.state = oe.NEW,
        this.connectionLock = new _e,
        this.remoteOfferLock = new _e
    }
    get logContext() {
        var e, t;
        return Object.assign({}, (t = (e = this.loggerOptions).loggerContextCb) === null || t === void 0 ? void 0 : t.call(e))
    }
    requirePublisher() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
        this.isPublisherConnectionRequired = e,
        this.updateState()
    }
    requireSubscriber() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
        this.isSubscriberConnectionRequired = e,
        this.updateState()
    }
    createAndSendPublisherOffer(e) {
        return this.publisher.createAndSendOffer(e)
    }
    setPublisherAnswer(e) {
        return this.publisher.setRemoteDescription(e)
    }
    removeTrack(e) {
        return this.publisher.removeTrack(e)
    }
    close() {
        return m(this, void 0, void 0, function*() {
            if (this.publisher && this.publisher.getSignallingState() !== "closed") {
                const e = this.publisher;
                for (const t of e.getSenders())
                    try {
                        e.canRemoveTrack() && e.removeTrack(t)
                    } catch (i) {
                        this.log.warn("could not removeTrack", Object.assign(Object.assign({}, this.logContext), {
                            error: i
                        }))
                    }
            }
            yield Promise.all([this.publisher.close(), this.subscriber.close()]),
            this.updateState()
        })
    }
    triggerIceRestart() {
        return m(this, void 0, void 0, function*() {
            this.subscriber.restartingIce = !0,
            this.needsPublisher && (yield this.createAndSendPublisherOffer({
                iceRestart: !0
            }))
        })
    }
    addIceCandidate(e, t) {
        return m(this, void 0, void 0, function*() {
            t === Fe.PUBLISHER ? yield this.publisher.addIceCandidate(e) : yield this.subscriber.addIceCandidate(e)
        })
    }
    createSubscriberAnswerFromOffer(e) {
        return m(this, void 0, void 0, function*() {
            this.log.debug("received server offer", Object.assign(Object.assign({}, this.logContext), {
                RTCSdpType: e.type,
                sdp: e.sdp,
                signalingState: this.subscriber.getSignallingState().toString()
            }));
            const t = yield this.remoteOfferLock.lock();
            try {
                return yield this.subscriber.setRemoteDescription(e),
                yield this.subscriber.createAndSetAnswer()
            } finally {
                t()
            }
        })
    }
    updateConfiguration(e, t) {
        this.publisher.setConfiguration(e),
        this.subscriber.setConfiguration(e),
        t && this.triggerIceRestart()
    }
    ensurePCTransportConnection(e, t) {
        return m(this, void 0, void 0, function*() {
            var i;
            const r = yield this.connectionLock.lock();
            try {
                this.isPublisherConnectionRequired && this.publisher.getConnectionState() !== "connected" && this.publisher.getConnectionState() !== "connecting" && (this.log.debug("negotiation required, start negotiating", this.logContext),
                this.publisher.negotiate()),
                yield Promise.all((i = this.requiredTransports) === null || i === void 0 ? void 0 : i.map(s => this.ensureTransportConnected(s, e, t)))
            } finally {
                r()
            }
        })
    }
    negotiate(e) {
        return m(this, void 0, void 0, function*() {
            return new Promise( (t, i) => m(this, void 0, void 0, function*() {
                const r = setTimeout( () => {
                    i("negotiation timed out")
                }
                , this.peerConnectionTimeout)
                  , s = () => {
                    clearTimeout(r),
                    i("negotiation aborted")
                }
                ;
                e.signal.addEventListener("abort", s),
                this.publisher.once(Bt.NegotiationStarted, () => {
                    e.signal.aborted || this.publisher.once(Bt.NegotiationComplete, () => {
                        clearTimeout(r),
                        t()
                    }
                    )
                }
                ),
                yield this.publisher.negotiate(o => {
                    clearTimeout(r),
                    i(o)
                }
                )
            }))
        })
    }
    addPublisherTransceiver(e, t) {
        return this.publisher.addTransceiver(e, t)
    }
    addPublisherTrack(e) {
        return this.publisher.addTrack(e)
    }
    createPublisherDataChannel(e, t) {
        return this.publisher.createDataChannel(e, t)
    }
    getConnectedAddress(e) {
        return e === Fe.PUBLISHER ? this.publisher.getConnectedAddress() : e === Fe.SUBSCRIBER ? this.publisher.getConnectedAddress() : this.requiredTransports[0].getConnectedAddress()
    }
    get requiredTransports() {
        const e = [];
        return this.isPublisherConnectionRequired && e.push(this.publisher),
        this.isSubscriberConnectionRequired && e.push(this.subscriber),
        e
    }
    ensureTransportConnected(e, t) {
        return m(this, arguments, void 0, function(i, r) {
            var s = this;
            let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.peerConnectionTimeout;
            return function*() {
                if (i.getConnectionState() !== "connected")
                    return new Promise( (c, d) => m(s, void 0, void 0, function*() {
                        const u = () => {
                            this.log.warn("abort transport connection", this.logContext),
                            ve.clearTimeout(l),
                            d(new $("room connection has been cancelled",ke.Cancelled))
                        }
                        ;
                        r?.signal.aborted && u(),
                        r?.signal.addEventListener("abort", u);
                        const l = ve.setTimeout( () => {
                            r?.signal.removeEventListener("abort", u),
                            d(new $("could not establish pc connection"))
                        }
                        , o);
                        for (; this.state !== oe.CONNECTED; )
                            if (yield Qe(50),
                            r?.signal.aborted) {
                                d(new $("room connection has been cancelled",ke.Cancelled));
                                return
                            }
                        ve.clearTimeout(l),
                        r?.signal.removeEventListener("abort", u),
                        c()
                    }))
            }()
        })
    }
}
const Nr = 2e3;
function hi(n, e) {
    if (!e)
        return 0;
    let t, i;
    return "bytesReceived"in n ? (t = n.bytesReceived,
    i = e.bytesReceived) : "bytesSent"in n && (t = n.bytesSent,
    i = e.bytesSent),
    t === void 0 || i === void 0 || n.timestamp === void 0 || e.timestamp === void 0 ? 0 : (t - i) * 8 * 1e3 / (n.timestamp - e.timestamp)
}
class me extends Vt {
    get enhancedNoiseCancellation() {
        return this.isKrispNoiseFilterEnabled
    }
    constructor(e, t) {
        let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0
          , r = arguments.length > 3 ? arguments[3] : void 0
          , s = arguments.length > 4 ? arguments[4] : void 0;
        super(e, E.Kind.Audio, t, i, s),
        this.stopOnMute = !1,
        this.isKrispNoiseFilterEnabled = !1,
        this.monitorSender = () => m(this, void 0, void 0, function*() {
            if (!this.sender) {
                this._currentBitrate = 0;
                return
            }
            let o;
            try {
                o = yield this.getSenderStats()
            } catch (a) {
                this.log.error("could not get audio sender stats", Object.assign(Object.assign({}, this.logContext), {
                    error: a
                }));
                return
            }
            o && this.prevStats && (this._currentBitrate = hi(o, this.prevStats)),
            this.prevStats = o
        }),
        this.handleKrispNoiseFilterEnable = () => {
            this.isKrispNoiseFilterEnabled = !0,
            this.log.debug("Krisp noise filter enabled", this.logContext),
            this.emit(A.AudioTrackFeatureUpdate, this, He.TF_ENHANCED_NOISE_CANCELLATION, !0)
        }
        ,
        this.handleKrispNoiseFilterDisable = () => {
            this.isKrispNoiseFilterEnabled = !1,
            this.log.debug("Krisp noise filter disabled", this.logContext),
            this.emit(A.AudioTrackFeatureUpdate, this, He.TF_ENHANCED_NOISE_CANCELLATION, !1)
        }
        ,
        this.audioContext = r,
        this.checkForSilence()
    }
    setDeviceId(e) {
        return m(this, void 0, void 0, function*() {
            return this._constraints.deviceId === e && this._mediaStreamTrack.getSettings().deviceId === et(e) ? !0 : (this._constraints.deviceId = e,
            this.isMuted || (yield this.restartTrack()),
            this.isMuted || et(e) === this._mediaStreamTrack.getSettings().deviceId)
        })
    }
    mute() {
        const e = Object.create(null, {
            mute: {
                get: () => super.mute
            }
        });
        return m(this, void 0, void 0, function*() {
            const t = yield this.muteLock.lock();
            try {
                return this.isMuted ? (this.log.debug("Track already muted", this.logContext),
                this) : (this.source === E.Source.Microphone && this.stopOnMute && !this.isUserProvided && (this.log.debug("stopping mic track", this.logContext),
                this._mediaStreamTrack.stop()),
                yield e.mute.call(this),
                this)
            } finally {
                t()
            }
        })
    }
    unmute() {
        const e = Object.create(null, {
            unmute: {
                get: () => super.unmute
            }
        });
        return m(this, void 0, void 0, function*() {
            const t = yield this.muteLock.lock();
            try {
                if (!this.isMuted)
                    return this.log.debug("Track already unmuted", this.logContext),
                    this;
                const i = this._constraints.deviceId && this._mediaStreamTrack.getSettings().deviceId !== et(this._constraints.deviceId);
                return this.source === E.Source.Microphone && (this.stopOnMute || this._mediaStreamTrack.readyState === "ended" || i) && !this.isUserProvided && (this.log.debug("reacquiring mic track", this.logContext),
                yield this.restartTrack()),
                yield e.unmute.call(this),
                this
            } finally {
                t()
            }
        })
    }
    restartTrack(e) {
        return m(this, void 0, void 0, function*() {
            let t;
            if (e) {
                const i = li({
                    audio: e
                });
                typeof i.audio != "boolean" && (t = i.audio)
            }
            yield this.restart(t)
        })
    }
    restart(e) {
        const t = Object.create(null, {
            restart: {
                get: () => super.restart
            }
        });
        return m(this, void 0, void 0, function*() {
            const i = yield t.restart.call(this, e);
            return this.checkForSilence(),
            i
        })
    }
    startMonitor() {
        Ie() && (this.monitorInterval || (this.monitorInterval = setInterval( () => {
            this.monitorSender()
        }
        , Nr)))
    }
    setProcessor(e) {
        return m(this, void 0, void 0, function*() {
            var t;
            const i = yield this.processorLock.lock();
            try {
                if (!this.audioContext)
                    throw Error("Audio context needs to be set on LocalAudioTrack in order to enable processors");
                this.processor && (yield this.stopProcessor());
                const r = {
                    kind: this.kind,
                    track: this._mediaStreamTrack,
                    audioContext: this.audioContext
                };
                this.log.debug("setting up audio processor ".concat(e.name), this.logContext),
                yield e.init(r),
                this.processor = e,
                this.processor.processedTrack && (yield(t = this.sender) === null || t === void 0 ? void 0 : t.replaceTrack(this.processor.processedTrack),
                this.processor.processedTrack.addEventListener("enable-lk-krisp-noise-filter", this.handleKrispNoiseFilterEnable),
                this.processor.processedTrack.addEventListener("disable-lk-krisp-noise-filter", this.handleKrispNoiseFilterDisable)),
                this.emit(A.TrackProcessorUpdate, this.processor)
            } finally {
                i()
            }
        })
    }
    setAudioContext(e) {
        this.audioContext = e
    }
    getSenderStats() {
        return m(this, void 0, void 0, function*() {
            var e;
            if (!(!((e = this.sender) === null || e === void 0) && e.getStats))
                return;
            const t = yield this.sender.getStats();
            let i;
            return t.forEach(r => {
                r.type === "outbound-rtp" && (i = {
                    type: "audio",
                    streamId: r.id,
                    packetsSent: r.packetsSent,
                    packetsLost: r.packetsLost,
                    bytesSent: r.bytesSent,
                    timestamp: r.timestamp,
                    roundTripTime: r.roundTripTime,
                    jitter: r.jitter
                })
            }
            ),
            i
        })
    }
    checkForSilence() {
        return m(this, void 0, void 0, function*() {
            const e = yield yh(this);
            return e && (this.isMuted || this.log.warn("silence detected on local audio track", this.logContext),
            this.emit(A.AudioSilenceDetected)),
            e
        })
    }
}
function mc(n, e, t) {
    switch (n.kind) {
    case "audio":
        return new me(n,e,!1,void 0,t);
    case "video":
        return new be(n,e,!1,t);
    default:
        throw new Je("unsupported track type: ".concat(n.kind))
    }
}
const Zh = Object.values(mn)
  , ef = Object.values(cr)
  , tf = Object.values(Dr)
  , nf = [mn.h180, mn.h360]
  , rf = [cr.h180, cr.h360]
  , sf = n => [{
    scaleResolutionDownBy: 2,
    fps: n.encoding.maxFramerate
}].map(t => {
    var i, r;
    return new Q(Math.floor(n.width / t.scaleResolutionDownBy),Math.floor(n.height / t.scaleResolutionDownBy),Math.max(15e4, Math.floor(n.encoding.maxBitrate / (Math.pow(t.scaleResolutionDownBy, 2) * (((i = n.encoding.maxFramerate) !== null && i !== void 0 ? i : 30) / ((r = t.fps) !== null && r !== void 0 ? r : 30))))),t.fps,n.encoding.priority)
}
)
  , mr = ["q", "h", "f"];
function gr(n, e, t, i) {
    var r, s;
    let o = i?.videoEncoding;
    n && (o = i?.screenShareEncoding);
    const a = i?.simulcast
      , c = i?.scalabilityMode
      , d = i?.videoCodec;
    if (!o && !a && !c || !e || !t)
        return [{}];
    o || (o = af(n, e, t, d),
    K.debug("using video encoding", o));
    const u = new Q(e,t,o.maxBitrate,o.maxFramerate,o.priority);
    if (c && cn(d)) {
        const f = new gc(c)
          , v = [];
        if (f.spatial > 3)
            throw new Error("unsupported scalabilityMode: ".concat(c));
        const p = nt();
        if (kt() || it() || p?.name === "Chrome" && Gt(p?.version, "113") < 0) {
            const y = f.suffix == "h" ? 2 : 3;
            for (let g = 0; g < f.spatial; g += 1)
                v.push({
                    rid: mr[2 - g],
                    maxBitrate: o.maxBitrate / Math.pow(y, g),
                    maxFramerate: u.encoding.maxFramerate
                });
            v[0].scalabilityMode = c
        } else
            v.push({
                maxBitrate: o.maxBitrate,
                maxFramerate: u.encoding.maxFramerate,
                scalabilityMode: c
            });
        return u.encoding.priority && (v[0].priority = u.encoding.priority,
        v[0].networkPriority = u.encoding.priority),
        K.debug("using svc encoding", {
            encodings: v
        }),
        v
    }
    if (!a)
        return [o];
    let l = [];
    n ? l = (r = zs(i?.screenShareSimulcastLayers)) !== null && r !== void 0 ? r : qs(n, u) : l = (s = zs(i?.videoSimulcastLayers)) !== null && s !== void 0 ? s : qs(n, u);
    let h;
    if (l.length > 0) {
        const f = l[0];
        l.length > 1 && ([,h] = l);
        const v = Math.max(e, t);
        if (v >= 960 && h)
            return _i(e, t, [f, h, u]);
        if (v >= 480)
            return _i(e, t, [f, u])
    }
    return _i(e, t, [u])
}
function of(n, e, t) {
    var i, r, s, o;
    if (!t.backupCodec || t.backupCodec === !0 || t.backupCodec.codec === t.videoCodec)
        return;
    e !== t.backupCodec.codec && K.warn("requested a different codec than specified as backup", {
        serverRequested: e,
        backup: t.backupCodec.codec
    }),
    t.videoCodec = e,
    t.videoEncoding = t.backupCodec.encoding;
    const a = n.mediaStreamTrack.getSettings()
      , c = (i = a.width) !== null && i !== void 0 ? i : (r = n.dimensions) === null || r === void 0 ? void 0 : r.width
      , d = (s = a.height) !== null && s !== void 0 ? s : (o = n.dimensions) === null || o === void 0 ? void 0 : o.height;
    return gr(n.source === E.Source.ScreenShare, c, d, t)
}
function af(n, e, t, i) {
    const r = cf(n, e, t);
    let {encoding: s} = r[0];
    const o = Math.max(e, t);
    for (let a = 0; a < r.length; a += 1) {
        const c = r[a];
        if (s = c.encoding,
        c.width >= o)
            break
    }
    if (i)
        switch (i) {
        case "av1":
            s = Object.assign({}, s),
            s.maxBitrate = s.maxBitrate * .7;
            break;
        case "vp9":
            s = Object.assign({}, s),
            s.maxBitrate = s.maxBitrate * .85;
            break
        }
    return s
}
function cf(n, e, t) {
    if (n)
        return tf;
    const i = e > t ? e / t : t / e;
    return Math.abs(i - 16 / 9) < Math.abs(i - 4 / 3) ? Zh : ef
}
function qs(n, e) {
    if (n)
        return sf(e);
    const {width: t, height: i} = e
      , r = t > i ? t / i : i / t;
    return Math.abs(r - 16 / 9) < Math.abs(r - 4 / 3) ? nf : rf
}
function _i(n, e, t) {
    const i = [];
    if (t.forEach( (r, s) => {
        if (s >= mr.length)
            return;
        const o = Math.min(n, e)
          , c = {
            rid: mr[s],
            scaleResolutionDownBy: Math.max(1, o / Math.min(r.width, r.height)),
            maxBitrate: r.encoding.maxBitrate
        };
        r.encoding.maxFramerate && (c.maxFramerate = r.encoding.maxFramerate);
        const d = Wt() || s === 0;
        r.encoding.priority && d && (c.priority = r.encoding.priority,
        c.networkPriority = r.encoding.priority),
        i.push(c)
    }
    ),
    it() && uc() === "ios") {
        let r;
        i.forEach(o => {
            r ? o.maxFramerate && o.maxFramerate > r && (r = o.maxFramerate) : r = o.maxFramerate
        }
        );
        let s = !0;
        i.forEach(o => {
            var a;
            o.maxFramerate != r && (s && (s = !1,
            K.info("Simulcast on iOS React-Native requires all encodings to share the same framerate.")),
            K.info('Setting framerate of encoding "'.concat((a = o.rid) !== null && a !== void 0 ? a : "", '" to ').concat(r)),
            o.maxFramerate = r)
        }
        )
    }
    return i
}
function zs(n) {
    if (n)
        return n.sort( (e, t) => {
            const {encoding: i} = e
              , {encoding: r} = t;
            return i.maxBitrate > r.maxBitrate ? 1 : i.maxBitrate < r.maxBitrate ? -1 : i.maxBitrate === r.maxBitrate && i.maxFramerate && r.maxFramerate ? i.maxFramerate > r.maxFramerate ? 1 : -1 : 0
        }
        )
}
class gc {
    constructor(e) {
        const t = e.match(/^L(\d)T(\d)(h|_KEY|_KEY_SHIFT){0,1}$/);
        if (!t)
            throw new Error("invalid scalability mode");
        if (this.spatial = parseInt(t[1]),
        this.temporal = parseInt(t[2]),
        t.length > 3)
            switch (t[3]) {
            case "h":
            case "_KEY":
            case "_KEY_SHIFT":
                this.suffix = t[3]
            }
    }
    toString() {
        var e;
        return "L".concat(this.spatial, "T").concat(this.temporal).concat((e = this.suffix) !== null && e !== void 0 ? e : "")
    }
}
function df(n) {
    return n.source === E.Source.ScreenShare || n.constraints.height && et(n.constraints.height) >= 1080 ? "maintain-resolution" : "balanced"
}
const uf = 5e3;
class be extends Vt {
    get sender() {
        return this._sender
    }
    set sender(e) {
        this._sender = e,
        this.degradationPreference && this.setDegradationPreference(this.degradationPreference)
    }
    constructor(e, t) {
        let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0
          , r = arguments.length > 3 ? arguments[3] : void 0;
        super(e, E.Kind.Video, t, i, r),
        this.simulcastCodecs = new Map,
        this.degradationPreference = "balanced",
        this.monitorSender = () => m(this, void 0, void 0, function*() {
            if (!this.sender) {
                this._currentBitrate = 0;
                return
            }
            let s;
            try {
                s = yield this.getSenderStats()
            } catch (a) {
                this.log.error("could not get audio sender stats", Object.assign(Object.assign({}, this.logContext), {
                    error: a
                }));
                return
            }
            const o = new Map(s.map(a => [a.rid, a]));
            if (this.prevStats) {
                let a = 0;
                o.forEach( (c, d) => {
                    var u;
                    const l = (u = this.prevStats) === null || u === void 0 ? void 0 : u.get(d);
                    a += hi(c, l)
                }
                ),
                this._currentBitrate = a
            }
            this.prevStats = o
        }),
        this.senderLock = new _e
    }
    get isSimulcast() {
        return !!(this.sender && this.sender.getParameters().encodings.length > 1)
    }
    startMonitor(e) {
        var t;
        if (this.signalClient = e,
        !Ie())
            return;
        const i = (t = this.sender) === null || t === void 0 ? void 0 : t.getParameters();
        i && (this.encodings = i.encodings),
        !this.monitorInterval && (this.monitorInterval = setInterval( () => {
            this.monitorSender()
        }
        , Nr))
    }
    stop() {
        this._mediaStreamTrack.getConstraints(),
        this.simulcastCodecs.forEach(e => {
            e.mediaStreamTrack.stop()
        }
        ),
        super.stop()
    }
    pauseUpstream() {
        const e = Object.create(null, {
            pauseUpstream: {
                get: () => super.pauseUpstream
            }
        });
        return m(this, void 0, void 0, function*() {
            var t, i, r, s, o;
            yield e.pauseUpstream.call(this);
            try {
                for (var a = !0, c = At(this.simulcastCodecs.values()), d; d = yield c.next(),
                t = d.done,
                !t; a = !0)
                    s = d.value,
                    a = !1,
                    yield(o = s.sender) === null || o === void 0 ? void 0 : o.replaceTrack(null)
            } catch (u) {
                i = {
                    error: u
                }
            } finally {
                try {
                    !a && !t && (r = c.return) && (yield r.call(c))
                } finally {
                    if (i)
                        throw i.error
                }
            }
        })
    }
    resumeUpstream() {
        const e = Object.create(null, {
            resumeUpstream: {
                get: () => super.resumeUpstream
            }
        });
        return m(this, void 0, void 0, function*() {
            var t, i, r, s, o;
            yield e.resumeUpstream.call(this);
            try {
                for (var a = !0, c = At(this.simulcastCodecs.values()), d; d = yield c.next(),
                t = d.done,
                !t; a = !0) {
                    s = d.value,
                    a = !1;
                    const u = s;
                    yield(o = u.sender) === null || o === void 0 ? void 0 : o.replaceTrack(u.mediaStreamTrack)
                }
            } catch (u) {
                i = {
                    error: u
                }
            } finally {
                try {
                    !a && !t && (r = c.return) && (yield r.call(c))
                } finally {
                    if (i)
                        throw i.error
                }
            }
        })
    }
    mute() {
        const e = Object.create(null, {
            mute: {
                get: () => super.mute
            }
        });
        return m(this, void 0, void 0, function*() {
            const t = yield this.muteLock.lock();
            try {
                return this.isMuted ? (this.log.debug("Track already muted", this.logContext),
                this) : (this.source === E.Source.Camera && !this.isUserProvided && (this.log.debug("stopping camera track", this.logContext),
                this._mediaStreamTrack.stop()),
                yield e.mute.call(this),
                this)
            } finally {
                t()
            }
        })
    }
    unmute() {
        const e = Object.create(null, {
            unmute: {
                get: () => super.unmute
            }
        });
        return m(this, void 0, void 0, function*() {
            const t = yield this.muteLock.lock();
            try {
                return this.isMuted ? (this.source === E.Source.Camera && !this.isUserProvided && (this.log.debug("reacquiring camera track", this.logContext),
                yield this.restartTrack()),
                yield e.unmute.call(this),
                this) : (this.log.debug("Track already unmuted", this.logContext),
                this)
            } finally {
                t()
            }
        })
    }
    setTrackMuted(e) {
        super.setTrackMuted(e);
        for (const t of this.simulcastCodecs.values())
            t.mediaStreamTrack.enabled = !e
    }
    getSenderStats() {
        return m(this, void 0, void 0, function*() {
            var e;
            if (!(!((e = this.sender) === null || e === void 0) && e.getStats))
                return [];
            const t = []
              , i = yield this.sender.getStats();
            return i.forEach(r => {
                var s;
                if (r.type === "outbound-rtp") {
                    const o = {
                        type: "video",
                        streamId: r.id,
                        frameHeight: r.frameHeight,
                        frameWidth: r.frameWidth,
                        framesPerSecond: r.framesPerSecond,
                        framesSent: r.framesSent,
                        firCount: r.firCount,
                        pliCount: r.pliCount,
                        nackCount: r.nackCount,
                        packetsSent: r.packetsSent,
                        bytesSent: r.bytesSent,
                        qualityLimitationReason: r.qualityLimitationReason,
                        qualityLimitationDurations: r.qualityLimitationDurations,
                        qualityLimitationResolutionChanges: r.qualityLimitationResolutionChanges,
                        rid: (s = r.rid) !== null && s !== void 0 ? s : r.id,
                        retransmittedPacketsSent: r.retransmittedPacketsSent,
                        targetBitrate: r.targetBitrate,
                        timestamp: r.timestamp
                    }
                      , a = i.get(r.remoteId);
                    a && (o.jitter = a.jitter,
                    o.packetsLost = a.packetsLost,
                    o.roundTripTime = a.roundTripTime),
                    t.push(o)
                }
            }
            ),
            t.sort( (r, s) => {
                var o, a;
                return ((o = s.frameWidth) !== null && o !== void 0 ? o : 0) - ((a = r.frameWidth) !== null && a !== void 0 ? a : 0)
            }
            ),
            t
        })
    }
    setPublishingQuality(e) {
        const t = [];
        for (let i = De.LOW; i <= De.HIGH; i += 1)
            t.push(new _r({
                quality: i,
                enabled: i <= e
            }));
        this.log.debug("setting publishing quality. max quality ".concat(e), this.logContext),
        this.setPublishingLayers(t)
    }
    setDeviceId(e) {
        return m(this, void 0, void 0, function*() {
            return this._constraints.deviceId === e && this._mediaStreamTrack.getSettings().deviceId === et(e) ? !0 : (this._constraints.deviceId = e,
            this.isMuted || (yield this.restartTrack()),
            this.isMuted || et(e) === this._mediaStreamTrack.getSettings().deviceId)
        })
    }
    restartTrack(e) {
        return m(this, void 0, void 0, function*() {
            var t, i, r, s;
            let o;
            if (e) {
                const u = li({
                    video: e
                });
                typeof u.video != "boolean" && (o = u.video)
            }
            yield this.restart(o);
            try {
                for (var a = !0, c = At(this.simulcastCodecs.values()), d; d = yield c.next(),
                t = d.done,
                !t; a = !0) {
                    s = d.value,
                    a = !1;
                    const u = s;
                    u.sender && (u.mediaStreamTrack = this.mediaStreamTrack.clone(),
                    yield u.sender.replaceTrack(u.mediaStreamTrack))
                }
            } catch (u) {
                i = {
                    error: u
                }
            } finally {
                try {
                    !a && !t && (r = c.return) && (yield r.call(c))
                } finally {
                    if (i)
                        throw i.error
                }
            }
        })
    }
    setProcessor(e) {
        const t = Object.create(null, {
            setProcessor: {
                get: () => super.setProcessor
            }
        });
        return m(this, arguments, void 0, function(i) {
            var r = this;
            let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
            return function*() {
                var o, a, c, d, u, l;
                if (yield t.setProcessor.call(r, i, s),
                !((u = r.processor) === null || u === void 0) && u.processedTrack)
                    try {
                        for (var h = !0, f = At(r.simulcastCodecs.values()), v; v = yield f.next(),
                        o = v.done,
                        !o; h = !0)
                            d = v.value,
                            h = !1,
                            yield(l = d.sender) === null || l === void 0 ? void 0 : l.replaceTrack(r.processor.processedTrack)
                    } catch (p) {
                        a = {
                            error: p
                        }
                    } finally {
                        try {
                            !h && !o && (c = f.return) && (yield c.call(f))
                        } finally {
                            if (a)
                                throw a.error
                        }
                    }
            }()
        })
    }
    setDegradationPreference(e) {
        return m(this, void 0, void 0, function*() {
            if (this.degradationPreference = e,
            this.sender)
                try {
                    this.log.debug("setting degradationPreference to ".concat(e), this.logContext);
                    const t = this.sender.getParameters();
                    t.degradationPreference = e,
                    this.sender.setParameters(t)
                } catch (t) {
                    this.log.warn("failed to set degradationPreference", Object.assign({
                        error: t
                    }, this.logContext))
                }
        })
    }
    addSimulcastTrack(e, t) {
        if (this.simulcastCodecs.has(e)) {
            this.log.error("".concat(e, " already added, skipping adding simulcast codec"), this.logContext);
            return
        }
        const i = {
            codec: e,
            mediaStreamTrack: this.mediaStreamTrack.clone(),
            sender: void 0,
            encodings: t
        };
        return this.simulcastCodecs.set(e, i),
        i
    }
    setSimulcastTrackSender(e, t) {
        const i = this.simulcastCodecs.get(e);
        i && (i.sender = t,
        setTimeout( () => {
            this.subscribedCodecs && this.setPublishingCodecs(this.subscribedCodecs)
        }
        , uf))
    }
    setPublishingCodecs(e) {
        return m(this, void 0, void 0, function*() {
            var t, i, r, s, o, a, c;
            if (this.log.debug("setting publishing codecs", Object.assign(Object.assign({}, this.logContext), {
                codecs: e,
                currentCodec: this.codec
            })),
            !this.codec && e.length > 0)
                return yield this.setPublishingLayers(e[0].qualities),
                [];
            this.subscribedCodecs = e;
            const d = [];
            try {
                for (t = !0,
                i = At(e); r = yield i.next(),
                s = r.done,
                !s; t = !0) {
                    c = r.value,
                    t = !1;
                    const u = c;
                    if (!this.codec || this.codec === u.codec)
                        yield this.setPublishingLayers(u.qualities);
                    else {
                        const l = this.simulcastCodecs.get(u.codec);
                        if (this.log.debug("try setPublishingCodec for ".concat(u.codec), Object.assign(Object.assign({}, this.logContext), {
                            simulcastCodecInfo: l
                        })),
                        !l || !l.sender) {
                            for (const h of u.qualities)
                                if (h.enabled) {
                                    d.push(u.codec);
                                    break
                                }
                        } else
                            l.encodings && (this.log.debug("try setPublishingLayersForSender ".concat(u.codec), this.logContext),
                            yield Ws(l.sender, l.encodings, u.qualities, this.senderLock, this.log, this.logContext))
                    }
                }
            } catch (u) {
                o = {
                    error: u
                }
            } finally {
                try {
                    !t && !s && (a = i.return) && (yield a.call(i))
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return d
        })
    }
    setPublishingLayers(e) {
        return m(this, void 0, void 0, function*() {
            this.log.debug("setting publishing layers", Object.assign(Object.assign({}, this.logContext), {
                qualities: e
            })),
            !(!this.sender || !this.encodings) && (yield Ws(this.sender, this.encodings, e, this.senderLock, this.log, this.logContext))
        })
    }
    handleAppVisibilityChanged() {
        const e = Object.create(null, {
            handleAppVisibilityChanged: {
                get: () => super.handleAppVisibilityChanged
            }
        });
        return m(this, void 0, void 0, function*() {
            yield e.handleAppVisibilityChanged.call(this),
            cc() && this.isInBackground && this.source === E.Source.Camera && (this._mediaStreamTrack.enabled = !1)
        })
    }
}
function Ws(n, e, t, i, r, s) {
    return m(this, void 0, void 0, function*() {
        const o = yield i.lock();
        r.debug("setPublishingLayersForSender", Object.assign(Object.assign({}, s), {
            sender: n,
            qualities: t,
            senderEncodings: e
        }));
        try {
            const a = n.getParameters()
              , {encodings: c} = a;
            if (!c)
                return;
            if (c.length !== e.length) {
                r.warn("cannot set publishing layers, encodings mismatch", Object.assign(Object.assign({}, s), {
                    encodings: c,
                    senderEncodings: e
                }));
                return
            }
            let d = !1;
            !1 && c[0].scalabilityMode || c.forEach( (l, h) => {
                var f;
                let v = (f = l.rid) !== null && f !== void 0 ? f : "";
                v === "" && (v = "q");
                const p = vc(v)
                  , y = t.find(g => g.quality === p);
                y && l.active !== y.enabled && (d = !0,
                l.active = y.enabled,
                r.debug("setting layer ".concat(y.quality, " to ").concat(l.active ? "enabled" : "disabled"), s),
                Wt() && (y.enabled ? (l.scaleResolutionDownBy = e[h].scaleResolutionDownBy,
                l.maxBitrate = e[h].maxBitrate,
                l.maxFrameRate = e[h].maxFrameRate) : (l.scaleResolutionDownBy = 4,
                l.maxBitrate = 10,
                l.maxFrameRate = 2)))
            }
            ),
            d && (a.encodings = c,
            r.debug("setting encodings", Object.assign(Object.assign({}, s), {
                encodings: a.encodings
            })),
            yield n.setParameters(a))
        } finally {
            o()
        }
    })
}
function vc(n) {
    switch (n) {
    case "f":
        return De.HIGH;
    case "h":
        return De.MEDIUM;
    case "q":
        return De.LOW;
    default:
        return De.HIGH
    }
}
function Gs(n, e, t, i) {
    if (!t)
        return [new vt({
            quality: De.HIGH,
            width: n,
            height: e,
            bitrate: 0,
            ssrc: 0
        })];
    if (i) {
        const r = t[0].scalabilityMode
          , s = new gc(r)
          , o = []
          , a = s.suffix == "h" ? 1.5 : 2
          , c = s.suffix == "h" ? 2 : 3;
        for (let d = 0; d < s.spatial; d += 1)
            o.push(new vt({
                quality: Math.min(De.HIGH, s.spatial - 1) - d,
                width: Math.ceil(n / Math.pow(a, d)),
                height: Math.ceil(e / Math.pow(a, d)),
                bitrate: t[0].maxBitrate ? Math.ceil(t[0].maxBitrate / Math.pow(c, d)) : 0,
                ssrc: 0
            }));
        return o
    }
    return t.map(r => {
        var s, o, a;
        const c = (s = r.scaleResolutionDownBy) !== null && s !== void 0 ? s : 1;
        let d = vc((o = r.rid) !== null && o !== void 0 ? o : "");
        return new vt({
            quality: d,
            width: Math.ceil(n / c),
            height: Math.ceil(e / c),
            bitrate: (a = r.maxBitrate) !== null && a !== void 0 ? a : 0,
            ssrc: 0
        })
    }
    )
}
const Ks = "_lossy"
  , Hs = "_reliable"
  , lf = 2 * 1e3
  , Ii = "leave-reconnect";
var Ne;
(function(n) {
    n[n.New = 0] = "New",
    n[n.Connected = 1] = "Connected",
    n[n.Disconnected = 2] = "Disconnected",
    n[n.Reconnecting = 3] = "Reconnecting",
    n[n.Closed = 4] = "Closed"
}
)(Ne || (Ne = {}));
class hf extends Ye.EventEmitter {
    get isClosed() {
        return this._isClosed
    }
    get pendingReconnect() {
        return !!this.reconnectTimeout
    }
    constructor(e) {
        var t;
        super(),
        this.options = e,
        this.rtcConfig = {},
        this.peerConnectionTimeout = Or.peerConnectionTimeout,
        this.fullReconnectOnNext = !1,
        this.subscriberPrimary = !1,
        this.pcState = Ne.New,
        this._isClosed = !0,
        this.pendingTrackResolvers = {},
        this.reconnectAttempts = 0,
        this.reconnectStart = 0,
        this.attemptingReconnect = !1,
        this.joinAttempts = 0,
        this.maxJoinAttempts = 1,
        this.shouldFailNext = !1,
        this.log = K,
        this.handleDataChannel = i => m(this, [i], void 0, function(r) {
            var s = this;
            let {channel: o} = r;
            return function*() {
                if (o) {
                    if (o.label === Hs)
                        s.reliableDCSub = o;
                    else if (o.label === Ks)
                        s.lossyDCSub = o;
                    else
                        return;
                    s.log.debug("on data channel ".concat(o.id, ", ").concat(o.label), s.logContext),
                    o.onmessage = s.handleDataMessage
                }
            }()
        }),
        this.handleDataMessage = i => m(this, void 0, void 0, function*() {
            var r, s;
            const o = yield this.dataProcessLock.lock();
            try {
                let a;
                if (i.data instanceof ArrayBuffer)
                    a = i.data;
                else if (i.data instanceof Blob)
                    a = yield i.data.arrayBuffer();
                else {
                    this.log.error("unsupported data type", Object.assign(Object.assign({}, this.logContext), {
                        data: i.data
                    }));
                    return
                }
                const c = ct.fromBinary(new Uint8Array(a));
                ((r = c.value) === null || r === void 0 ? void 0 : r.case) === "speaker" ? this.emit(O.ActiveSpeakersUpdate, c.value.value.speakers) : (((s = c.value) === null || s === void 0 ? void 0 : s.case) === "user" && pf(c, c.value.value),
                this.emit(O.DataPacketReceived, c))
            } finally {
                o()
            }
        }),
        this.handleDataError = i => {
            const s = i.currentTarget.maxRetransmits === 0 ? "lossy" : "reliable";
            if (i instanceof ErrorEvent && i.error) {
                const {error: o} = i.error;
                this.log.error("DataChannel error on ".concat(s, ": ").concat(i.message), Object.assign(Object.assign({}, this.logContext), {
                    error: o
                }))
            } else
                this.log.error("Unknown DataChannel error on ".concat(s), Object.assign(Object.assign({}, this.logContext), {
                    event: i
                }))
        }
        ,
        this.handleBufferedAmountLow = i => {
            const s = i.currentTarget.maxRetransmits === 0 ? Z.LOSSY : Z.RELIABLE;
            this.updateAndEmitDCBufferStatus(s)
        }
        ,
        this.handleDisconnect = (i, r) => {
            if (this._isClosed)
                return;
            this.log.warn("".concat(i, " disconnected"), this.logContext),
            this.reconnectAttempts === 0 && (this.reconnectStart = Date.now());
            const s = c => {
                this.log.warn("could not recover connection after ".concat(this.reconnectAttempts, " attempts, ").concat(c, "ms. giving up"), this.logContext),
                this.emit(O.Disconnected),
                this.close()
            }
              , o = Date.now() - this.reconnectStart;
            let a = this.getNextRetryDelay({
                elapsedMs: o,
                retryCount: this.reconnectAttempts
            });
            if (a === null) {
                s(o);
                return
            }
            i === Ii && (a = 0),
            this.log.debug("reconnecting in ".concat(a, "ms"), this.logContext),
            this.clearReconnectTimeout(),
            this.token && this.regionUrlProvider && this.regionUrlProvider.updateToken(this.token),
            this.reconnectTimeout = ve.setTimeout( () => this.attemptReconnect(r).finally( () => this.reconnectTimeout = void 0), a)
        }
        ,
        this.waitForRestarted = () => new Promise( (i, r) => {
            this.pcState === Ne.Connected && i();
            const s = () => {
                this.off(O.Disconnected, o),
                i()
            }
              , o = () => {
                this.off(O.Restarted, s),
                r()
            }
            ;
            this.once(O.Restarted, s),
            this.once(O.Disconnected, o)
        }
        ),
        this.updateAndEmitDCBufferStatus = i => {
            const r = this.isBufferStatusLow(i);
            typeof r < "u" && r !== this.dcBufferStatus.get(i) && (this.dcBufferStatus.set(i, r),
            this.emit(O.DCBufferStatusChanged, r, i))
        }
        ,
        this.isBufferStatusLow = i => {
            const r = this.dataChannelForKind(i);
            if (r)
                return r.bufferedAmount <= r.bufferedAmountLowThreshold
        }
        ,
        this.handleBrowserOnLine = () => {
            this.client.currentState === ee.RECONNECTING && (this.clearReconnectTimeout(),
            this.attemptReconnect(_t.RR_SIGNAL_DISCONNECTED))
        }
        ,
        this.log = tt((t = e.loggerName) !== null && t !== void 0 ? t : je.Engine),
        this.loggerOptions = {
            loggerName: e.loggerName,
            loggerContextCb: () => this.logContext
        },
        this.client = new Mr(void 0,this.loggerOptions),
        this.client.signalLatency = this.options.expSignalLatency,
        this.reconnectPolicy = this.options.reconnectPolicy,
        this.registerOnLineListener(),
        this.closingLock = new _e,
        this.dataProcessLock = new _e,
        this.dcBufferStatus = new Map([[Z.LOSSY, !0], [Z.RELIABLE, !0]]),
        this.client.onParticipantUpdate = i => this.emit(O.ParticipantUpdate, i),
        this.client.onConnectionQuality = i => this.emit(O.ConnectionQualityUpdate, i),
        this.client.onRoomUpdate = i => this.emit(O.RoomUpdate, i),
        this.client.onSubscriptionError = i => this.emit(O.SubscriptionError, i),
        this.client.onSubscriptionPermissionUpdate = i => this.emit(O.SubscriptionPermissionUpdate, i),
        this.client.onSpeakersChanged = i => this.emit(O.SpeakersChanged, i),
        this.client.onStreamStateUpdate = i => this.emit(O.StreamStateChanged, i),
        this.client.onRequestResponse = i => this.emit(O.SignalRequestResponse, i)
    }
    get logContext() {
        var e, t, i, r, s, o, a, c;
        return {
            room: (t = (e = this.latestJoinResponse) === null || e === void 0 ? void 0 : e.room) === null || t === void 0 ? void 0 : t.name,
            roomID: (r = (i = this.latestJoinResponse) === null || i === void 0 ? void 0 : i.room) === null || r === void 0 ? void 0 : r.sid,
            participant: (o = (s = this.latestJoinResponse) === null || s === void 0 ? void 0 : s.participant) === null || o === void 0 ? void 0 : o.identity,
            pID: (c = (a = this.latestJoinResponse) === null || a === void 0 ? void 0 : a.participant) === null || c === void 0 ? void 0 : c.sid
        }
    }
    join(e, t, i, r) {
        return m(this, void 0, void 0, function*() {
            this.url = e,
            this.token = t,
            this.signalOpts = i,
            this.maxJoinAttempts = i.maxRetries;
            try {
                this.joinAttempts += 1,
                this.setupSignalClientCallbacks();
                const s = yield this.client.join(e, t, i, r);
                return this._isClosed = !1,
                this.latestJoinResponse = s,
                this.subscriberPrimary = s.subscriberPrimary,
                this.pcManager || (yield this.configure(s)),
                (!this.subscriberPrimary || s.fastPublish) && this.negotiate(),
                this.clientConfiguration = s.clientConfiguration,
                s
            } catch (s) {
                if (s instanceof $ && s.reason === ke.ServerUnreachable && (this.log.warn("Couldn't connect to server, attempt ".concat(this.joinAttempts, " of ").concat(this.maxJoinAttempts), this.logContext),
                this.joinAttempts < this.maxJoinAttempts))
                    return this.join(e, t, i, r);
                throw s
            }
        })
    }
    close() {
        return m(this, void 0, void 0, function*() {
            const e = yield this.closingLock.lock();
            if (this.isClosed) {
                e();
                return
            }
            try {
                this._isClosed = !0,
                this.joinAttempts = 0,
                this.emit(O.Closing),
                this.removeAllListeners(),
                this.deregisterOnLineListener(),
                this.clearPendingReconnect(),
                yield this.cleanupPeerConnections(),
                yield this.cleanupClient()
            } finally {
                e()
            }
        })
    }
    cleanupPeerConnections() {
        return m(this, void 0, void 0, function*() {
            var e;
            yield(e = this.pcManager) === null || e === void 0 ? void 0 : e.close(),
            this.pcManager = void 0;
            const t = i => {
                i && (i.close(),
                i.onbufferedamountlow = null,
                i.onclose = null,
                i.onclosing = null,
                i.onerror = null,
                i.onmessage = null,
                i.onopen = null)
            }
            ;
            t(this.lossyDC),
            t(this.lossyDCSub),
            t(this.reliableDC),
            t(this.reliableDCSub),
            this.lossyDC = void 0,
            this.lossyDCSub = void 0,
            this.reliableDC = void 0,
            this.reliableDCSub = void 0
        })
    }
    cleanupClient() {
        return m(this, void 0, void 0, function*() {
            yield this.client.close(),
            this.client.resetCallbacks()
        })
    }
    addTrack(e) {
        if (this.pendingTrackResolvers[e.cid])
            throw new Je("a track with the same ID has already been published");
        return new Promise( (t, i) => {
            const r = setTimeout( () => {
                delete this.pendingTrackResolvers[e.cid],
                i(new $("publication of local track timed out, no response from server"))
            }
            , 1e4);
            this.pendingTrackResolvers[e.cid] = {
                resolve: s => {
                    clearTimeout(r),
                    t(s)
                }
                ,
                reject: () => {
                    clearTimeout(r),
                    i(new Error("Cancelled publication by calling unpublish"))
                }
            },
            this.client.sendAddTrack(e)
        }
        )
    }
    removeTrack(e) {
        if (e.track && this.pendingTrackResolvers[e.track.id]) {
            const {reject: t} = this.pendingTrackResolvers[e.track.id];
            t && t(),
            delete this.pendingTrackResolvers[e.track.id]
        }
        try {
            return this.pcManager.removeTrack(e),
            !0
        } catch (t) {
            this.log.warn("failed to remove track", Object.assign(Object.assign({}, this.logContext), {
                error: t
            }))
        }
        return !1
    }
    updateMuteStatus(e, t) {
        this.client.sendMuteTrack(e, t)
    }
    get dataSubscriberReadyState() {
        var e;
        return (e = this.reliableDCSub) === null || e === void 0 ? void 0 : e.readyState
    }
    getConnectedServerAddress() {
        return m(this, void 0, void 0, function*() {
            var e;
            return (e = this.pcManager) === null || e === void 0 ? void 0 : e.getConnectedAddress()
        })
    }
    setRegionUrlProvider(e) {
        this.regionUrlProvider = e
    }
    configure(e) {
        return m(this, void 0, void 0, function*() {
            var t, i;
            if (this.pcManager && this.pcManager.currentState !== oe.NEW)
                return;
            this.participantSid = (t = e.participant) === null || t === void 0 ? void 0 : t.sid;
            const r = this.makeRTCConfiguration(e);
            this.pcManager = new Xh(r,e.subscriberPrimary,this.loggerOptions),
            this.emit(O.TransportsCreated, this.pcManager.publisher, this.pcManager.subscriber),
            this.pcManager.onIceCandidate = (s, o) => {
                this.client.sendIceCandidate(s, o)
            }
            ,
            this.pcManager.onPublisherOffer = s => {
                this.client.sendOffer(s)
            }
            ,
            this.pcManager.onDataChannel = this.handleDataChannel,
            this.pcManager.onStateChange = (s, o, a) => m(this, void 0, void 0, function*() {
                if (this.log.debug("primary PC state changed ".concat(s), this.logContext),
                ["closed", "disconnected", "failed"].includes(o) && (this.publisherConnectionPromise = void 0),
                s === oe.CONNECTED) {
                    const u = this.pcState === Ne.New;
                    this.pcState = Ne.Connected,
                    u && this.emit(O.Connected, e)
                } else
                    s === oe.FAILED && this.pcState === Ne.Connected && (this.pcState = Ne.Disconnected,
                    this.handleDisconnect("peerconnection failed", a === "failed" ? _t.RR_SUBSCRIBER_FAILED : _t.RR_PUBLISHER_FAILED));
                const c = this.client.isDisconnected || this.client.currentState === ee.RECONNECTING
                  , d = [oe.FAILED, oe.CLOSING, oe.CLOSED].includes(s);
                c && d && !this._isClosed && this.emit(O.Offline)
            }),
            this.pcManager.onTrack = s => {
                this.emit(O.MediaTrackAdded, s.track, s.streams[0], s.receiver)
            }
            ,
            ff((i = e.serverInfo) === null || i === void 0 ? void 0 : i.protocol) || this.createDataChannels()
        })
    }
    setupSignalClientCallbacks() {
        this.client.onAnswer = e => m(this, void 0, void 0, function*() {
            this.pcManager && (this.log.debug("received server answer", Object.assign(Object.assign({}, this.logContext), {
                RTCSdpType: e.type
            })),
            yield this.pcManager.setPublisherAnswer(e))
        }),
        this.client.onTrickle = (e, t) => {
            this.pcManager && (this.log.trace("got ICE candidate from peer", Object.assign(Object.assign({}, this.logContext), {
                candidate: e,
                target: t
            })),
            this.pcManager.addIceCandidate(e, t))
        }
        ,
        this.client.onOffer = e => m(this, void 0, void 0, function*() {
            if (!this.pcManager)
                return;
            const t = yield this.pcManager.createSubscriberAnswerFromOffer(e);
            this.client.sendAnswer(t)
        }),
        this.client.onLocalTrackPublished = e => {
            var t;
            if (this.log.debug("received trackPublishedResponse", Object.assign(Object.assign({}, this.logContext), {
                cid: e.cid,
                track: (t = e.track) === null || t === void 0 ? void 0 : t.sid
            })),
            !this.pendingTrackResolvers[e.cid]) {
                this.log.error("missing track resolver for ".concat(e.cid), Object.assign(Object.assign({}, this.logContext), {
                    cid: e.cid
                }));
                return
            }
            const {resolve: i} = this.pendingTrackResolvers[e.cid];
            delete this.pendingTrackResolvers[e.cid],
            i(e.track)
        }
        ,
        this.client.onLocalTrackUnpublished = e => {
            this.emit(O.LocalTrackUnpublished, e)
        }
        ,
        this.client.onLocalTrackSubscribed = e => {
            this.emit(O.LocalTrackSubscribed, e)
        }
        ,
        this.client.onTokenRefresh = e => {
            this.token = e
        }
        ,
        this.client.onRemoteMuteChanged = (e, t) => {
            this.emit(O.RemoteMute, e, t)
        }
        ,
        this.client.onSubscribedQualityUpdate = e => {
            this.emit(O.SubscribedQualityUpdate, e)
        }
        ,
        this.client.onClose = () => {
            this.handleDisconnect("signal", _t.RR_SIGNAL_DISCONNECTED)
        }
        ,
        this.client.onLeave = e => {
            switch (this.log.debug("client leave request", Object.assign(Object.assign({}, this.logContext), {
                reason: e?.reason
            })),
            e.regions && this.regionUrlProvider && (this.log.debug("updating regions", this.logContext),
            this.regionUrlProvider.setServerReportedRegions(e.regions)),
            e.action) {
            case Ut.DISCONNECT:
                this.emit(O.Disconnected, e?.reason),
                this.close();
                break;
            case Ut.RECONNECT:
                this.fullReconnectOnNext = !0,
                this.handleDisconnect(Ii);
                break;
            case Ut.RESUME:
                this.handleDisconnect(Ii)
            }
        }
    }
    makeRTCConfiguration(e) {
        var t;
        const i = Object.assign({}, this.rtcConfig);
        if (!((t = this.signalOpts) === null || t === void 0) && t.e2eeEnabled && (this.log.debug("E2EE - setting up transports with insertable streams", this.logContext),
        i.encodedInsertableStreams = !0),
        e.iceServers && !i.iceServers) {
            const r = [];
            e.iceServers.forEach(s => {
                const o = {
                    urls: s.urls
                };
                s.username && (o.username = s.username),
                s.credential && (o.credential = s.credential),
                r.push(o)
            }
            ),
            i.iceServers = r
        }
        return e.clientConfiguration && e.clientConfiguration.forceRelay === fn.ENABLED && (i.iceTransportPolicy = "relay"),
        i.sdpSemantics = "unified-plan",
        i.continualGatheringPolicy = "gather_continually",
        i
    }
    createDataChannels() {
        this.pcManager && (this.lossyDC && (this.lossyDC.onmessage = null,
        this.lossyDC.onerror = null),
        this.reliableDC && (this.reliableDC.onmessage = null,
        this.reliableDC.onerror = null),
        this.lossyDC = this.pcManager.createPublisherDataChannel(Ks, {
            ordered: !0,
            maxRetransmits: 0
        }),
        this.reliableDC = this.pcManager.createPublisherDataChannel(Hs, {
            ordered: !0
        }),
        this.lossyDC.onmessage = this.handleDataMessage,
        this.reliableDC.onmessage = this.handleDataMessage,
        this.lossyDC.onerror = this.handleDataError,
        this.reliableDC.onerror = this.handleDataError,
        this.lossyDC.bufferedAmountLowThreshold = 65535,
        this.reliableDC.bufferedAmountLowThreshold = 65535,
        this.lossyDC.onbufferedamountlow = this.handleBufferedAmountLow,
        this.reliableDC.onbufferedamountlow = this.handleBufferedAmountLow)
    }
    createSender(e, t, i) {
        return m(this, void 0, void 0, function*() {
            if (ur())
                return yield this.createTransceiverRTCRtpSender(e, t, i);
            if (lr())
                return this.log.warn("using add-track fallback", this.logContext),
                yield this.createRTCRtpSender(e.mediaStreamTrack);
            throw new le("Required webRTC APIs not supported on this device")
        })
    }
    createSimulcastSender(e, t, i, r) {
        return m(this, void 0, void 0, function*() {
            if (ur())
                return this.createSimulcastTransceiverSender(e, t, i, r);
            if (lr())
                return this.log.debug("using add-track fallback", this.logContext),
                this.createRTCRtpSender(e.mediaStreamTrack);
            throw new le("Cannot stream on this device")
        })
    }
    createTransceiverRTCRtpSender(e, t, i) {
        return m(this, void 0, void 0, function*() {
            if (!this.pcManager)
                throw new le("publisher is closed");
            const r = [];
            e.mediaStream && r.push(e.mediaStream),
            e instanceof be && (e.codec = t.videoCodec);
            const s = {
                direction: "sendonly",
                streams: r
            };
            return i && (s.sendEncodings = i),
            (yield this.pcManager.addPublisherTransceiver(e.mediaStreamTrack, s)).sender
        })
    }
    createSimulcastTransceiverSender(e, t, i, r) {
        return m(this, void 0, void 0, function*() {
            if (!this.pcManager)
                throw new le("publisher is closed");
            const s = {
                direction: "sendonly"
            };
            r && (s.sendEncodings = r);
            const o = yield this.pcManager.addPublisherTransceiver(t.mediaStreamTrack, s);
            if (i.videoCodec)
                return e.setSimulcastTrackSender(i.videoCodec, o.sender),
                o.sender
        })
    }
    createRTCRtpSender(e) {
        return m(this, void 0, void 0, function*() {
            if (!this.pcManager)
                throw new le("publisher is closed");
            return this.pcManager.addPublisherTrack(e)
        })
    }
    attemptReconnect(e) {
        return m(this, void 0, void 0, function*() {
            var t, i, r;
            if (!this._isClosed) {
                if (this.attemptingReconnect) {
                    K.warn("already attempting reconnect, returning early", this.logContext);
                    return
                }
                (((t = this.clientConfiguration) === null || t === void 0 ? void 0 : t.resumeConnection) === fn.DISABLED || ((r = (i = this.pcManager) === null || i === void 0 ? void 0 : i.currentState) !== null && r !== void 0 ? r : oe.NEW) === oe.NEW) && (this.fullReconnectOnNext = !0);
                try {
                    this.attemptingReconnect = !0,
                    this.fullReconnectOnNext ? yield this.restartConnection() : yield this.resumeConnection(e),
                    this.clearPendingReconnect(),
                    this.fullReconnectOnNext = !1
                } catch (s) {
                    this.reconnectAttempts += 1;
                    let o = !0;
                    s instanceof le ? (this.log.debug("received unrecoverable error", Object.assign(Object.assign({}, this.logContext), {
                        error: s
                    })),
                    o = !1) : s instanceof It || (this.fullReconnectOnNext = !0),
                    o ? this.handleDisconnect("reconnect", _t.RR_UNKNOWN) : (this.log.info("could not recover connection after ".concat(this.reconnectAttempts, " attempts, ").concat(Date.now() - this.reconnectStart, "ms. giving up"), this.logContext),
                    this.emit(O.Disconnected),
                    yield this.close())
                } finally {
                    this.attemptingReconnect = !1
                }
            }
        })
    }
    getNextRetryDelay(e) {
        try {
            return this.reconnectPolicy.nextRetryDelayInMs(e)
        } catch (t) {
            this.log.warn("encountered error in reconnect policy", Object.assign(Object.assign({}, this.logContext), {
                error: t
            }))
        }
        return null
    }
    restartConnection(e) {
        return m(this, void 0, void 0, function*() {
            var t, i, r;
            try {
                if (!this.url || !this.token)
                    throw new le("could not reconnect, url or token not saved");
                this.log.info("reconnecting, attempt: ".concat(this.reconnectAttempts), this.logContext),
                this.emit(O.Restarting),
                this.client.isDisconnected || (yield this.client.sendLeave()),
                yield this.cleanupPeerConnections(),
                yield this.cleanupClient();
                let s;
                try {
                    if (!this.signalOpts)
                        throw this.log.warn("attempted connection restart, without signal options present", this.logContext),
                        new It;
                    s = yield this.join(e ?? this.url, this.token, this.signalOpts)
                } catch (o) {
                    throw o instanceof $ && o.reason === ke.NotAllowed ? new le("could not reconnect, token might be expired") : new It
                }
                if (this.shouldFailNext)
                    throw this.shouldFailNext = !1,
                    new Error("simulated failure");
                if (this.client.setReconnected(),
                this.emit(O.SignalRestarted, s),
                yield this.waitForPCReconnected(),
                this.client.currentState !== ee.CONNECTED)
                    throw new It("Signal connection got severed during reconnect");
                (t = this.regionUrlProvider) === null || t === void 0 || t.resetAttempts(),
                this.emit(O.Restarted)
            } catch (s) {
                const o = yield(i = this.regionUrlProvider) === null || i === void 0 ? void 0 : i.getNextBestRegionUrl();
                if (o) {
                    yield this.restartConnection(o);
                    return
                } else
                    throw (r = this.regionUrlProvider) === null || r === void 0 || r.resetAttempts(),
                    s
            }
        })
    }
    resumeConnection(e) {
        return m(this, void 0, void 0, function*() {
            var t;
            if (!this.url || !this.token)
                throw new le("could not reconnect, url or token not saved");
            if (!this.pcManager)
                throw new le("publisher and subscriber connections unset");
            this.log.info("resuming signal connection, attempt ".concat(this.reconnectAttempts), this.logContext),
            this.emit(O.Resuming);
            let i;
            try {
                this.setupSignalClientCallbacks(),
                i = yield this.client.reconnect(this.url, this.token, this.participantSid, e)
            } catch (r) {
                let s = "";
                throw r instanceof Error && (s = r.message,
                this.log.error(r.message, Object.assign(Object.assign({}, this.logContext), {
                    error: r
                }))),
                r instanceof $ && r.reason === ke.NotAllowed ? new le("could not reconnect, token might be expired") : r instanceof $ && r.reason === ke.LeaveRequest ? r : new It(s)
            }
            if (this.emit(O.SignalResumed),
            i) {
                const r = this.makeRTCConfiguration(i);
                this.pcManager.updateConfiguration(r)
            } else
                this.log.warn("Did not receive reconnect response", this.logContext);
            if (this.shouldFailNext)
                throw this.shouldFailNext = !1,
                new Error("simulated failure");
            if (yield this.pcManager.triggerIceRestart(),
            yield this.waitForPCReconnected(),
            this.client.currentState !== ee.CONNECTED)
                throw new It("Signal connection got severed during reconnect");
            this.client.setReconnected(),
            ((t = this.reliableDC) === null || t === void 0 ? void 0 : t.readyState) === "open" && this.reliableDC.id === null && this.createDataChannels(),
            this.emit(O.Resumed)
        })
    }
    waitForPCInitialConnection(e, t) {
        return m(this, void 0, void 0, function*() {
            if (!this.pcManager)
                throw new le("PC manager is closed");
            yield this.pcManager.ensurePCTransportConnection(t, e)
        })
    }
    waitForPCReconnected() {
        return m(this, void 0, void 0, function*() {
            this.pcState = Ne.Reconnecting,
            this.log.debug("waiting for peer connection to reconnect", this.logContext);
            try {
                if (yield Qe(lf),
                !this.pcManager)
                    throw new le("PC manager is closed");
                yield this.pcManager.ensurePCTransportConnection(void 0, this.peerConnectionTimeout),
                this.pcState = Ne.Connected
            } catch (e) {
                throw this.pcState = Ne.Disconnected,
                new $("could not establish PC connection, ".concat(e.message))
            }
        })
    }
    sendDataPacket(e, t) {
        return m(this, void 0, void 0, function*() {
            const i = e.toBinary();
            yield this.ensurePublisherConnected(t);
            const r = this.dataChannelForKind(t);
            r && r.send(i),
            this.updateAndEmitDCBufferStatus(t)
        })
    }
    ensureDataTransportConnected(e) {
        return m(this, arguments, void 0, function(t) {
            var i = this;
            let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.subscriberPrimary;
            return function*() {
                var s;
                if (!i.pcManager)
                    throw new le("PC manager is closed");
                const o = r ? i.pcManager.subscriber : i.pcManager.publisher
                  , a = r ? "Subscriber" : "Publisher";
                if (!o)
                    throw new $("".concat(a, " connection not set"));
                let c = !1;
                !r && !i.dataChannelForKind(t, r) && (i.createDataChannels(),
                c = !0),
                !c && !r && !i.pcManager.publisher.isICEConnected && i.pcManager.publisher.getICEConnectionState() !== "checking" && (c = !0),
                c && i.negotiate();
                const d = i.dataChannelForKind(t, r);
                if (d?.readyState === "open")
                    return;
                const u = new Date().getTime() + i.peerConnectionTimeout;
                for (; new Date().getTime() < u; ) {
                    if (o.isICEConnected && ((s = i.dataChannelForKind(t, r)) === null || s === void 0 ? void 0 : s.readyState) === "open")
                        return;
                    yield Qe(50)
                }
                throw new $("could not establish ".concat(a, " connection, state: ").concat(o.getICEConnectionState()))
            }()
        })
    }
    ensurePublisherConnected(e) {
        return m(this, void 0, void 0, function*() {
            this.publisherConnectionPromise || (this.publisherConnectionPromise = this.ensureDataTransportConnected(e, !1)),
            yield this.publisherConnectionPromise
        })
    }
    verifyTransport() {
        return !(!this.pcManager || this.pcManager.currentState !== oe.CONNECTED || !this.client.ws || this.client.ws.readyState === WebSocket.CLOSED)
    }
    negotiate() {
        return m(this, void 0, void 0, function*() {
            return new Promise( (e, t) => m(this, void 0, void 0, function*() {
                if (!this.pcManager) {
                    t(new or("PC manager is closed"));
                    return
                }
                this.pcManager.requirePublisher(),
                this.pcManager.publisher.getTransceivers().length == 0 && !this.lossyDC && !this.reliableDC && this.createDataChannels();
                const i = new AbortController
                  , r = () => {
                    i.abort(),
                    this.log.debug("engine disconnected while negotiation was ongoing", this.logContext),
                    e()
                }
                ;
                this.isClosed && t("cannot negotiate on closed engine"),
                this.on(O.Closing, r),
                this.pcManager.publisher.once(Bt.RTPVideoPayloadTypes, s => {
                    const o = new Map;
                    s.forEach(a => {
                        const c = a.codec.toLowerCase();
                        Oh(c) && o.set(a.payload, c)
                    }
                    ),
                    this.emit(O.RTPVideoMapUpdate, o)
                }
                );
                try {
                    yield this.pcManager.negotiate(i),
                    e()
                } catch (s) {
                    s instanceof or && (this.fullReconnectOnNext = !0),
                    this.handleDisconnect("negotiation", _t.RR_UNKNOWN),
                    t(s)
                } finally {
                    this.off(O.Closing, r)
                }
            }))
        })
    }
    dataChannelForKind(e, t) {
        if (t) {
            if (e === Z.LOSSY)
                return this.lossyDCSub;
            if (e === Z.RELIABLE)
                return this.reliableDCSub
        } else {
            if (e === Z.LOSSY)
                return this.lossyDC;
            if (e === Z.RELIABLE)
                return this.reliableDC
        }
    }
    sendSyncState(e, t) {
        var i, r;
        if (!this.pcManager) {
            this.log.warn("sync state cannot be sent without peer connection setup", this.logContext);
            return
        }
        const s = this.pcManager.subscriber.getLocalDescription()
          , o = this.pcManager.subscriber.getRemoteDescription()
          , a = (r = (i = this.signalOpts) === null || i === void 0 ? void 0 : i.autoSubscribe) !== null && r !== void 0 ? r : !0
          , c = new Array
          , d = new Array;
        e.forEach(u => {
            u.isDesired !== a && c.push(u.trackSid),
            u.isEnabled || d.push(u.trackSid)
        }
        ),
        this.client.sendSyncState(new wa({
            answer: s ? Xn({
                sdp: s.sdp,
                type: s.type
            }) : void 0,
            offer: o ? Xn({
                sdp: o.sdp,
                type: o.type
            }) : void 0,
            subscription: new ci({
                trackSids: c,
                subscribe: !a,
                participantTracks: []
            }),
            publishTracks: Sh(t),
            dataChannels: this.dataChannelsInfo(),
            trackSidsDisabled: d
        }))
    }
    failNext() {
        this.shouldFailNext = !0
    }
    dataChannelsInfo() {
        const e = []
          , t = (i, r) => {
            i?.id !== void 0 && i.id !== null && e.push(new Pa({
                label: i.label,
                id: i.id,
                target: r
            }))
        }
        ;
        return t(this.dataChannelForKind(Z.LOSSY), Fe.PUBLISHER),
        t(this.dataChannelForKind(Z.RELIABLE), Fe.PUBLISHER),
        t(this.dataChannelForKind(Z.LOSSY, !0), Fe.SUBSCRIBER),
        t(this.dataChannelForKind(Z.RELIABLE, !0), Fe.SUBSCRIBER),
        e
    }
    clearReconnectTimeout() {
        this.reconnectTimeout && ve.clearTimeout(this.reconnectTimeout)
    }
    clearPendingReconnect() {
        this.clearReconnectTimeout(),
        this.reconnectAttempts = 0
    }
    registerOnLineListener() {
        Ie() && window.addEventListener("online", this.handleBrowserOnLine)
    }
    deregisterOnLineListener() {
        Ie() && window.removeEventListener("online", this.handleBrowserOnLine)
    }
}
class It extends Error {
}
function ff(n) {
    return n !== void 0 && n > 13
}
function pf(n, e) {
    const t = n.participantIdentity ? n.participantIdentity : e.participantIdentity;
    n.participantIdentity = t,
    e.participantIdentity = t;
    const i = n.destinationIdentities.length !== 0 ? n.destinationIdentities : e.destinationIdentities;
    n.destinationIdentities = i,
    e.destinationIdentities = i
}
class Js {
    constructor(e, t) {
        this.lastUpdateAt = 0,
        this.settingsCacheTime = 3e3,
        this.attemptedRegions = [],
        this.serverUrl = new URL(e),
        this.token = t
    }
    updateToken(e) {
        this.token = e
    }
    isCloud() {
        return fr(this.serverUrl)
    }
    getServerUrl() {
        return this.serverUrl
    }
    getNextBestRegionUrl(e) {
        return m(this, void 0, void 0, function*() {
            if (!this.isCloud())
                throw Error("region availability is only supported for LiveKit Cloud domains");
            (!this.regionSettings || Date.now() - this.lastUpdateAt > this.settingsCacheTime) && (this.regionSettings = yield this.fetchRegionSettings(e));
            const t = this.regionSettings.regions.filter(i => !this.attemptedRegions.find(r => r.url === i.url));
            if (t.length > 0) {
                const i = t[0];
                return this.attemptedRegions.push(i),
                K.debug("next region: ".concat(i.region)),
                i.url
            } else
                return null
        })
    }
    resetAttempts() {
        this.attemptedRegions = []
    }
    fetchRegionSettings(e) {
        return m(this, void 0, void 0, function*() {
            const t = yield fetch("".concat(mf(this.serverUrl), "/regions"), {
                headers: {
                    authorization: "Bearer ".concat(this.token)
                },
                signal: e
            });
            if (t.ok) {
                const i = yield t.json();
                return this.lastUpdateAt = Date.now(),
                i
            } else
                throw new $("Could not fetch region settings: ".concat(t.statusText),t.status === 401 ? ke.NotAllowed : void 0,t.status)
        })
    }
    setServerReportedRegions(e) {
        this.regionSettings = e,
        this.lastUpdateAt = Date.now()
    }
}
function mf(n) {
    return "".concat(n.protocol.replace("ws", "http"), "//").concat(n.host, "/settings")
}
class se extends Error {
    constructor(e, t, i) {
        super(t),
        this.code = e,
        this.message = Ys(t, se.MAX_MESSAGE_BYTES),
        this.data = i ? Ys(i, se.MAX_DATA_BYTES) : void 0
    }
    static fromProto(e) {
        return new se(e.code,e.message,e.data)
    }
    toProto() {
        return new la({
            code: this.code,
            message: this.message,
            data: this.data
        })
    }
    static builtIn(e, t) {
        return new se(se.ErrorCode[e],se.ErrorMessage[e],t)
    }
}
se.MAX_MESSAGE_BYTES = 256;
se.MAX_DATA_BYTES = 15360;
se.ErrorCode = {
    APPLICATION_ERROR: 1500,
    CONNECTION_TIMEOUT: 1501,
    RESPONSE_TIMEOUT: 1502,
    RECIPIENT_DISCONNECTED: 1503,
    RESPONSE_PAYLOAD_TOO_LARGE: 1504,
    SEND_FAILED: 1505,
    UNSUPPORTED_METHOD: 1400,
    RECIPIENT_NOT_FOUND: 1401,
    REQUEST_PAYLOAD_TOO_LARGE: 1402,
    UNSUPPORTED_SERVER: 1403,
    UNSUPPORTED_VERSION: 1404
};
se.ErrorMessage = {
    APPLICATION_ERROR: "Application error in method handler",
    CONNECTION_TIMEOUT: "Connection timeout",
    RESPONSE_TIMEOUT: "Response timeout",
    RECIPIENT_DISCONNECTED: "Recipient disconnected",
    RESPONSE_PAYLOAD_TOO_LARGE: "Response payload too large",
    SEND_FAILED: "Failed to send",
    UNSUPPORTED_METHOD: "Method not supported at destination",
    RECIPIENT_NOT_FOUND: "Recipient not found",
    REQUEST_PAYLOAD_TOO_LARGE: "Request payload too large",
    UNSUPPORTED_SERVER: "RPC not supported by server",
    UNSUPPORTED_VERSION: "Unsupported RPC version"
};
const Qs = 15360;
function vr(n) {
    return new TextEncoder().encode(n).length
}
function Ys(n, e) {
    if (vr(n) <= e)
        return n;
    let t = 0
      , i = n.length;
    const r = new TextEncoder;
    for (; t < i; ) {
        const s = Math.floor((t + i + 1) / 2);
        r.encode(n.slice(0, s)).length <= e ? t = s : i = s - 1
    }
    return n.slice(0, t)
}
class bc extends E {
    constructor(e, t, i, r, s) {
        super(e, i, s),
        this.sid = t,
        this.receiver = r
    }
    setMuted(e) {
        this.isMuted !== e && (this.isMuted = e,
        this._mediaStreamTrack.enabled = !e,
        this.emit(e ? A.Muted : A.Unmuted, this))
    }
    setMediaStream(e) {
        this.mediaStream = e;
        const t = i => {
            i.track === this._mediaStreamTrack && (e.removeEventListener("removetrack", t),
            this.receiver && "playoutDelayHint"in this.receiver && (this.receiver.playoutDelayHint = void 0),
            this.receiver = void 0,
            this._currentBitrate = 0,
            this.emit(A.Ended, this))
        }
        ;
        e.addEventListener("removetrack", t)
    }
    start() {
        this.startMonitor(),
        super.enable()
    }
    stop() {
        this.stopMonitor(),
        super.disable()
    }
    getRTCStatsReport() {
        return m(this, void 0, void 0, function*() {
            var e;
            return !((e = this.receiver) === null || e === void 0) && e.getStats ? yield this.receiver.getStats() : void 0
        })
    }
    setPlayoutDelay(e) {
        this.receiver ? "playoutDelayHint"in this.receiver ? this.receiver.playoutDelayHint = e : this.log.warn("Playout delay not supported in this browser") : this.log.warn("Cannot set playout delay, track already ended")
    }
    getPlayoutDelay() {
        if (this.receiver) {
            if ("playoutDelayHint"in this.receiver)
                return this.receiver.playoutDelayHint;
            this.log.warn("Playout delay not supported in this browser")
        } else
            this.log.warn("Cannot get playout delay, track already ended");
        return 0
    }
    startMonitor() {
        this.monitorInterval || (this.monitorInterval = setInterval( () => this.monitorReceiver(), Nr)),
        Th() && this.registerTimeSyncUpdate()
    }
    registerTimeSyncUpdate() {
        const e = () => {
            var t;
            this.timeSyncHandle = requestAnimationFrame( () => e());
            const i = (t = this.receiver) === null || t === void 0 ? void 0 : t.getSynchronizationSources()[0];
            if (i) {
                const {timestamp: r, rtpTimestamp: s} = i;
                s && this.rtpTimestamp !== s && (this.emit(A.TimeSyncUpdate, {
                    timestamp: r,
                    rtpTimestamp: s
                }),
                this.rtpTimestamp = s)
            }
        }
        ;
        e()
    }
}
class un extends bc {
    constructor(e, t, i, r, s, o) {
        super(e, t, E.Kind.Audio, i, o),
        this.monitorReceiver = () => m(this, void 0, void 0, function*() {
            if (!this.receiver) {
                this._currentBitrate = 0;
                return
            }
            const a = yield this.getReceiverStats();
            a && this.prevStats && this.receiver && (this._currentBitrate = hi(a, this.prevStats)),
            this.prevStats = a
        }),
        this.audioContext = r,
        this.webAudioPluginNodes = [],
        s && (this.sinkId = s.deviceId)
    }
    setVolume(e) {
        var t;
        for (const i of this.attachedElements)
            this.audioContext ? (t = this.gainNode) === null || t === void 0 || t.gain.setTargetAtTime(e, 0, .1) : i.volume = e;
        it() && this._mediaStreamTrack._setVolume(e),
        this.elementVolume = e
    }
    getVolume() {
        if (this.elementVolume)
            return this.elementVolume;
        if (it())
            return 1;
        let e = 0;
        return this.attachedElements.forEach(t => {
            t.volume > e && (e = t.volume)
        }
        ),
        e
    }
    setSinkId(e) {
        return m(this, void 0, void 0, function*() {
            this.sinkId = e,
            yield Promise.all(this.attachedElements.map(t => {
                if (hr(t))
                    return t.setSinkId(e)
            }
            ))
        })
    }
    attach(e) {
        const t = this.attachedElements.length === 0;
        return e ? super.attach(e) : e = super.attach(),
        this.sinkId && hr(e) && e.setSinkId(this.sinkId),
        this.audioContext && t && (this.log.debug("using audio context mapping", this.logContext),
        this.connectWebAudio(this.audioContext, e),
        e.volume = 0,
        e.muted = !0),
        this.elementVolume && this.setVolume(this.elementVolume),
        e
    }
    detach(e) {
        let t;
        return e ? (t = super.detach(e),
        this.audioContext && (this.attachedElements.length > 0 ? this.connectWebAudio(this.audioContext, this.attachedElements[0]) : this.disconnectWebAudio())) : (t = super.detach(),
        this.disconnectWebAudio()),
        t
    }
    setAudioContext(e) {
        this.audioContext = e,
        e && this.attachedElements.length > 0 ? this.connectWebAudio(e, this.attachedElements[0]) : e || this.disconnectWebAudio()
    }
    setWebAudioPlugins(e) {
        this.webAudioPluginNodes = e,
        this.attachedElements.length > 0 && this.audioContext && this.connectWebAudio(this.audioContext, this.attachedElements[0])
    }
    connectWebAudio(e, t) {
        this.disconnectWebAudio(),
        this.sourceNode = e.createMediaStreamSource(t.srcObject);
        let i = this.sourceNode;
        this.webAudioPluginNodes.forEach(r => {
            i.connect(r),
            i = r
        }
        ),
        this.gainNode = e.createGain(),
        i.connect(this.gainNode),
        this.gainNode.connect(e.destination),
        this.elementVolume && this.gainNode.gain.setTargetAtTime(this.elementVolume, 0, .1),
        e.state !== "running" && e.resume().then( () => {
            e.state !== "running" && this.emit(A.AudioPlaybackFailed, new Error("Audio Context couldn't be started automatically"))
        }
        ).catch(r => {
            this.emit(A.AudioPlaybackFailed, r)
        }
        )
    }
    disconnectWebAudio() {
        var e, t;
        (e = this.gainNode) === null || e === void 0 || e.disconnect(),
        (t = this.sourceNode) === null || t === void 0 || t.disconnect(),
        this.gainNode = void 0,
        this.sourceNode = void 0
    }
    getReceiverStats() {
        return m(this, void 0, void 0, function*() {
            if (!this.receiver || !this.receiver.getStats)
                return;
            const e = yield this.receiver.getStats();
            let t;
            return e.forEach(i => {
                i.type === "inbound-rtp" && (t = {
                    type: "audio",
                    timestamp: i.timestamp,
                    jitter: i.jitter,
                    bytesReceived: i.bytesReceived,
                    concealedSamples: i.concealedSamples,
                    concealmentEvents: i.concealmentEvents,
                    silentConcealedSamples: i.silentConcealedSamples,
                    silentConcealmentEvents: i.silentConcealmentEvents,
                    totalAudioEnergy: i.totalAudioEnergy,
                    totalSamplesDuration: i.totalSamplesDuration
                })
            }
            ),
            t
        })
    }
}
const xi = 100;
class ln extends bc {
    constructor(e, t, i, r, s) {
        super(e, t, E.Kind.Video, i, s),
        this.elementInfos = [],
        this.monitorReceiver = () => m(this, void 0, void 0, function*() {
            if (!this.receiver) {
                this._currentBitrate = 0;
                return
            }
            const o = yield this.getReceiverStats();
            o && this.prevStats && this.receiver && (this._currentBitrate = hi(o, this.prevStats)),
            this.prevStats = o
        }),
        this.debouncedHandleResize = Ar( () => {
            this.updateDimensions()
        }
        , xi),
        this.adaptiveStreamSettings = r
    }
    get isAdaptiveStream() {
        return this.adaptiveStreamSettings !== void 0
    }
    get mediaStreamTrack() {
        return this._mediaStreamTrack
    }
    setMuted(e) {
        super.setMuted(e),
        this.attachedElements.forEach(t => {
            e ? jt(this._mediaStreamTrack, t) : Ot(this._mediaStreamTrack, t)
        }
        )
    }
    attach(e) {
        if (e ? super.attach(e) : e = super.attach(),
        this.adaptiveStreamSettings && this.elementInfos.find(t => t.element === e) === void 0) {
            const t = new gf(e);
            this.observeElementInfo(t)
        }
        return e
    }
    observeElementInfo(e) {
        this.adaptiveStreamSettings && this.elementInfos.find(t => t === e) === void 0 ? (e.handleResize = () => {
            this.debouncedHandleResize()
        }
        ,
        e.handleVisibilityChanged = () => {
            this.updateVisibility()
        }
        ,
        this.elementInfos.push(e),
        e.observe(),
        this.debouncedHandleResize(),
        this.updateVisibility()) : this.log.warn("visibility resize observer not triggered", this.logContext)
    }
    stopObservingElementInfo(e) {
        if (!this.isAdaptiveStream) {
            this.log.warn("stopObservingElementInfo ignored", this.logContext);
            return
        }
        const t = this.elementInfos.filter(i => i === e);
        for (const i of t)
            i.stopObserving();
        this.elementInfos = this.elementInfos.filter(i => i !== e),
        this.updateVisibility(),
        this.debouncedHandleResize()
    }
    detach(e) {
        let t = [];
        if (e)
            return this.stopObservingElement(e),
            super.detach(e);
        t = super.detach();
        for (const i of t)
            this.stopObservingElement(i);
        return t
    }
    getDecoderImplementation() {
        var e;
        return (e = this.prevStats) === null || e === void 0 ? void 0 : e.decoderImplementation
    }
    getReceiverStats() {
        return m(this, void 0, void 0, function*() {
            if (!this.receiver || !this.receiver.getStats)
                return;
            const e = yield this.receiver.getStats();
            let t, i = "", r = new Map;
            return e.forEach(s => {
                s.type === "inbound-rtp" ? (i = s.codecId,
                t = {
                    type: "video",
                    framesDecoded: s.framesDecoded,
                    framesDropped: s.framesDropped,
                    framesReceived: s.framesReceived,
                    packetsReceived: s.packetsReceived,
                    packetsLost: s.packetsLost,
                    frameWidth: s.frameWidth,
                    frameHeight: s.frameHeight,
                    pliCount: s.pliCount,
                    firCount: s.firCount,
                    nackCount: s.nackCount,
                    jitter: s.jitter,
                    timestamp: s.timestamp,
                    bytesReceived: s.bytesReceived,
                    decoderImplementation: s.decoderImplementation
                }) : s.type === "codec" && r.set(s.id, s)
            }
            ),
            t && i !== "" && r.get(i) && (t.mimeType = r.get(i).mimeType),
            t
        })
    }
    stopObservingElement(e) {
        const t = this.elementInfos.filter(i => i.element === e);
        for (const i of t)
            this.stopObservingElementInfo(i)
    }
    handleAppVisibilityChanged() {
        const e = Object.create(null, {
            handleAppVisibilityChanged: {
                get: () => super.handleAppVisibilityChanged
            }
        });
        return m(this, void 0, void 0, function*() {
            yield e.handleAppVisibilityChanged.call(this),
            this.isAdaptiveStream && this.updateVisibility()
        })
    }
    updateVisibility() {
        var e, t;
        const i = this.elementInfos.reduce( (a, c) => Math.max(a, c.visibilityChangedAt || 0), 0)
          , r = !((t = (e = this.adaptiveStreamSettings) === null || e === void 0 ? void 0 : e.pauseVideoInBackground) !== null && t !== void 0) || t ? this.isInBackground : !1
          , s = this.elementInfos.some(a => a.pictureInPicture)
          , o = this.elementInfos.some(a => a.visible) && !r || s;
        if (this.lastVisible !== o) {
            if (!o && Date.now() - i < xi) {
                ve.setTimeout( () => {
                    this.updateVisibility()
                }
                , xi);
                return
            }
            this.lastVisible = o,
            this.emit(A.VisibilityChanged, o, this)
        }
    }
    updateDimensions() {
        var e, t;
        let i = 0
          , r = 0;
        const s = this.getPixelDensity();
        for (const o of this.elementInfos) {
            const a = o.width() * s
              , c = o.height() * s;
            a + c > i + r && (i = a,
            r = c)
        }
        ((e = this.lastDimensions) === null || e === void 0 ? void 0 : e.width) === i && ((t = this.lastDimensions) === null || t === void 0 ? void 0 : t.height) === r || (this.lastDimensions = {
            width: i,
            height: r
        },
        this.emit(A.VideoDimensionsChanged, this.lastDimensions, this))
    }
    getPixelDensity() {
        var e;
        const t = (e = this.adaptiveStreamSettings) === null || e === void 0 ? void 0 : e.pixelDensity;
        return t === "screen" ? xs() : t || (xs() > 2 ? 2 : 1)
    }
}
class gf {
    get visible() {
        return this.isPiP || this.isIntersecting
    }
    get pictureInPicture() {
        return this.isPiP
    }
    constructor(e, t) {
        this.onVisibilityChanged = i => {
            var r;
            const {target: s, isIntersecting: o} = i;
            s === this.element && (this.isIntersecting = o,
            this.visibilityChangedAt = Date.now(),
            (r = this.handleVisibilityChanged) === null || r === void 0 || r.call(this))
        }
        ,
        this.onEnterPiP = () => {
            var i;
            this.isPiP = !0,
            (i = this.handleVisibilityChanged) === null || i === void 0 || i.call(this)
        }
        ,
        this.onLeavePiP = () => {
            var i;
            this.isPiP = !1,
            (i = this.handleVisibilityChanged) === null || i === void 0 || i.call(this)
        }
        ,
        this.element = e,
        this.isIntersecting = t ?? $s(e),
        this.isPiP = Ie() && document.pictureInPictureElement === e,
        this.visibilityChangedAt = 0
    }
    width() {
        return this.element.clientWidth
    }
    height() {
        return this.element.clientHeight
    }
    observe() {
        this.isIntersecting = $s(this.element),
        this.isPiP = document.pictureInPictureElement === this.element,
        this.element.handleResize = () => {
            var e;
            (e = this.handleResize) === null || e === void 0 || e.call(this)
        }
        ,
        this.element.handleVisibilityChanged = this.onVisibilityChanged,
        Ds().observe(this.element),
        As().observe(this.element),
        this.element.addEventListener("enterpictureinpicture", this.onEnterPiP),
        this.element.addEventListener("leavepictureinpicture", this.onLeavePiP)
    }
    stopObserving() {
        var e, t;
        (e = Ds()) === null || e === void 0 || e.unobserve(this.element),
        (t = As()) === null || t === void 0 || t.unobserve(this.element),
        this.element.removeEventListener("enterpictureinpicture", this.onEnterPiP),
        this.element.removeEventListener("leavepictureinpicture", this.onLeavePiP)
    }
}
function $s(n) {
    let e = n.offsetTop
      , t = n.offsetLeft;
    const i = n.offsetWidth
      , r = n.offsetHeight
      , {hidden: s} = n
      , {opacity: o, display: a} = getComputedStyle(n);
    for (; n.offsetParent; )
        n = n.offsetParent,
        e += n.offsetTop,
        t += n.offsetLeft;
    return e < window.pageYOffset + window.innerHeight && t < window.pageXOffset + window.innerWidth && e + r > window.pageYOffset && t + i > window.pageXOffset && !s && (o !== "" ? parseFloat(o) > 0 : !0) && a !== "none"
}
class Xe extends Ye.EventEmitter {
    constructor(e, t, i, r) {
        var s;
        super(),
        this.metadataMuted = !1,
        this.encryption = Ae.NONE,
        this.log = K,
        this.handleMuted = () => {
            this.emit(A.Muted)
        }
        ,
        this.handleUnmuted = () => {
            this.emit(A.Unmuted)
        }
        ,
        this.log = tt((s = r?.loggerName) !== null && s !== void 0 ? s : je.Publication),
        this.loggerContextCb = this.loggerContextCb,
        this.setMaxListeners(100),
        this.kind = e,
        this.trackSid = t,
        this.trackName = i,
        this.source = E.Source.Unknown
    }
    setTrack(e) {
        this.track && (this.track.off(A.Muted, this.handleMuted),
        this.track.off(A.Unmuted, this.handleUnmuted)),
        this.track = e,
        e && (e.on(A.Muted, this.handleMuted),
        e.on(A.Unmuted, this.handleUnmuted))
    }
    get logContext() {
        var e;
        return Object.assign(Object.assign({}, (e = this.loggerContextCb) === null || e === void 0 ? void 0 : e.call(this)), Y(this))
    }
    get isMuted() {
        return this.metadataMuted
    }
    get isEnabled() {
        return !0
    }
    get isSubscribed() {
        return this.track !== void 0
    }
    get isEncrypted() {
        return this.encryption !== Ae.NONE
    }
    get audioTrack() {
        if (this.track instanceof me || this.track instanceof un)
            return this.track
    }
    get videoTrack() {
        if (this.track instanceof be || this.track instanceof ln)
            return this.track
    }
    updateInfo(e) {
        this.trackSid = e.sid,
        this.trackName = e.name,
        this.source = E.sourceFromProto(e.source),
        this.mimeType = e.mimeType,
        this.kind === E.Kind.Video && e.width > 0 && (this.dimensions = {
            width: e.width,
            height: e.height
        },
        this.simulcasted = e.simulcast),
        this.encryption = e.encryption,
        this.trackInfo = e,
        this.log.debug("update publication info", Object.assign(Object.assign({}, this.logContext), {
            info: e
        }))
    }
}
(function(n) {
    (function(e) {
        e.Desired = "desired",
        e.Subscribed = "subscribed",
        e.Unsubscribed = "unsubscribed"
    }
    )(n.SubscriptionStatus || (n.SubscriptionStatus = {})),
    function(e) {
        e.Allowed = "allowed",
        e.NotAllowed = "not_allowed"
    }(n.PermissionStatus || (n.PermissionStatus = {}))
}
)(Xe || (Xe = {}));
class Zn extends Xe {
    get isUpstreamPaused() {
        var e;
        return (e = this.track) === null || e === void 0 ? void 0 : e.isUpstreamPaused
    }
    constructor(e, t, i, r) {
        super(e, t.sid, t.name, r),
        this.track = void 0,
        this.handleTrackEnded = () => {
            this.emit(A.Ended)
        }
        ,
        this.updateInfo(t),
        this.setTrack(i)
    }
    setTrack(e) {
        this.track && this.track.off(A.Ended, this.handleTrackEnded),
        super.setTrack(e),
        e && e.on(A.Ended, this.handleTrackEnded)
    }
    get isMuted() {
        return this.track ? this.track.isMuted : super.isMuted
    }
    get audioTrack() {
        return super.audioTrack
    }
    get videoTrack() {
        return super.videoTrack
    }
    mute() {
        return m(this, void 0, void 0, function*() {
            var e;
            return (e = this.track) === null || e === void 0 ? void 0 : e.mute()
        })
    }
    unmute() {
        return m(this, void 0, void 0, function*() {
            var e;
            return (e = this.track) === null || e === void 0 ? void 0 : e.unmute()
        })
    }
    pauseUpstream() {
        return m(this, void 0, void 0, function*() {
            var e;
            yield(e = this.track) === null || e === void 0 ? void 0 : e.pauseUpstream()
        })
    }
    resumeUpstream() {
        return m(this, void 0, void 0, function*() {
            var e;
            yield(e = this.track) === null || e === void 0 ? void 0 : e.resumeUpstream()
        })
    }
    getTrackFeatures() {
        var e;
        if (this.track instanceof me) {
            const t = this.track.mediaStreamTrack.getSettings()
              , i = new Set;
            return t.autoGainControl && i.add(He.TF_AUTO_GAIN_CONTROL),
            t.echoCancellation && i.add(He.TF_ECHO_CANCELLATION),
            t.noiseSuppression && i.add(He.TF_NOISE_SUPPRESSION),
            t.channelCount && t.channelCount > 1 && i.add(He.TF_STEREO),
            !((e = this.options) === null || e === void 0) && e.dtx || i.add(He.TF_NO_DTX),
            this.track.enhancedNoiseCancellation && i.add(He.TF_ENHANCED_NOISE_CANCELLATION),
            Array.from(i.values())
        } else
            return []
    }
}
function yc(n) {
    let e, t;
    return typeof n.audio == "object" && n.audio.processor && (e = n.audio.processor),
    typeof n.video == "object" && n.video.processor && (t = n.video.processor),
    {
        audioProcessor: e,
        videoProcessor: t
    }
}
function kc(n) {
    return m(this, void 0, void 0, function*() {
        var e, t;
        n ?? (n = {}),
        (e = n.audio) !== null && e !== void 0 || (n.audio = !0),
        (t = n.video) !== null && t !== void 0 || (n.video = !0);
        const {audioProcessor: i, videoProcessor: r} = yc(n)
          , s = oc(n, fc, pc)
          , o = li(s)
          , a = navigator.mediaDevices.getUserMedia(o);
        n.audio && (ge.userMediaPromiseMap.set("audioinput", a),
        a.catch( () => ge.userMediaPromiseMap.delete("audioinput"))),
        n.video && (ge.userMediaPromiseMap.set("videoinput", a),
        a.catch( () => ge.userMediaPromiseMap.delete("videoinput")));
        const c = yield a;
        return Promise.all(c.getTracks().map(d => m(this, void 0, void 0, function*() {
            const u = d.kind === "audio";
            u ? s.audio : s.video;
            let l;
            const h = u ? o.audio : o.video;
            typeof h != "boolean" && (l = h),
            l ? l.deviceId = d.getSettings().deviceId : l = {
                deviceId: d.getSettings().deviceId
            };
            const f = mc(d, l);
            return f.kind === E.Kind.Video ? f.source = E.Source.Camera : f.kind === E.Kind.Audio && (f.source = E.Source.Microphone),
            f.mediaStream = c,
            f instanceof me && i ? yield f.setProcessor(i) : f instanceof be && r && (yield f.setProcessor(r)),
            f
        })))
    })
}
function vf(n) {
    return m(this, void 0, void 0, function*() {
        return (yield kc({
            audio: !1,
            video: n
        }))[0]
    })
}
function bf(n) {
    return m(this, void 0, void 0, function*() {
        return (yield kc({
            audio: n,
            video: !1
        }))[0]
    })
}
var ue;
(function(n) {
    n.Excellent = "excellent",
    n.Good = "good",
    n.Poor = "poor",
    n.Lost = "lost",
    n.Unknown = "unknown"
}
)(ue || (ue = {}));
function yf(n) {
    switch (n) {
    case rn.EXCELLENT:
        return ue.Excellent;
    case rn.GOOD:
        return ue.Good;
    case rn.POOR:
        return ue.Poor;
    case rn.LOST:
        return ue.Lost;
    default:
        return ue.Unknown
    }
}
class Sc extends Ye.EventEmitter {
    get logContext() {
        var e, t;
        return Object.assign({}, (t = (e = this.loggerOptions) === null || e === void 0 ? void 0 : e.loggerContextCb) === null || t === void 0 ? void 0 : t.call(e))
    }
    get isEncrypted() {
        return this.trackPublications.size > 0 && Array.from(this.trackPublications.values()).every(e => e.isEncrypted)
    }
    get isAgent() {
        var e;
        return ((e = this.permissions) === null || e === void 0 ? void 0 : e.agent) || this.kind === Yn.AGENT
    }
    get kind() {
        return this._kind
    }
    get attributes() {
        return Object.freeze(Object.assign({}, this._attributes))
    }
    constructor(e, t, i, r, s) {
        let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Yn.STANDARD;
        var a;
        super(),
        this.audioLevel = 0,
        this.isSpeaking = !1,
        this._connectionQuality = ue.Unknown,
        this.log = K,
        this.log = tt((a = s?.loggerName) !== null && a !== void 0 ? a : je.Participant),
        this.loggerOptions = s,
        this.setMaxListeners(100),
        this.sid = e,
        this.identity = t,
        this.name = i,
        this.metadata = r,
        this.audioTrackPublications = new Map,
        this.videoTrackPublications = new Map,
        this.trackPublications = new Map,
        this._kind = o,
        this._attributes = {}
    }
    getTrackPublications() {
        return Array.from(this.trackPublications.values())
    }
    getTrackPublication(e) {
        for (const [,t] of this.trackPublications)
            if (t.source === e)
                return t
    }
    getTrackPublicationByName(e) {
        for (const [,t] of this.trackPublications)
            if (t.trackName === e)
                return t
    }
    get connectionQuality() {
        return this._connectionQuality
    }
    get isCameraEnabled() {
        var e;
        const t = this.getTrackPublication(E.Source.Camera);
        return !(!((e = t?.isMuted) !== null && e !== void 0) || e)
    }
    get isMicrophoneEnabled() {
        var e;
        const t = this.getTrackPublication(E.Source.Microphone);
        return !(!((e = t?.isMuted) !== null && e !== void 0) || e)
    }
    get isScreenShareEnabled() {
        return !!this.getTrackPublication(E.Source.ScreenShare)
    }
    get isLocal() {
        return !1
    }
    get joinedAt() {
        return this.participantInfo ? new Date(Number.parseInt(this.participantInfo.joinedAt.toString()) * 1e3) : new Date
    }
    updateInfo(e) {
        return this.participantInfo && this.participantInfo.sid === e.sid && this.participantInfo.version > e.version ? !1 : (this.identity = e.identity,
        this.sid = e.sid,
        this._setName(e.name),
        this._setMetadata(e.metadata),
        this._setAttributes(e.attributes),
        e.permission && this.setPermissions(e.permission),
        this.participantInfo = e,
        this.log.trace("update participant info", Object.assign(Object.assign({}, this.logContext), {
            info: e
        })),
        !0)
    }
    _setMetadata(e) {
        const t = this.metadata !== e
          , i = this.metadata;
        this.metadata = e,
        t && this.emit(P.ParticipantMetadataChanged, i)
    }
    _setName(e) {
        const t = this.name !== e;
        this.name = e,
        t && this.emit(P.ParticipantNameChanged, e)
    }
    _setAttributes(e) {
        const t = Ch(this.attributes, e);
        this._attributes = e,
        Object.keys(t).length > 0 && this.emit(P.AttributesChanged, t)
    }
    setPermissions(e) {
        var t, i, r, s, o, a;
        const c = this.permissions
          , d = e.canPublish !== ((t = this.permissions) === null || t === void 0 ? void 0 : t.canPublish) || e.canSubscribe !== ((i = this.permissions) === null || i === void 0 ? void 0 : i.canSubscribe) || e.canPublishData !== ((r = this.permissions) === null || r === void 0 ? void 0 : r.canPublishData) || e.hidden !== ((s = this.permissions) === null || s === void 0 ? void 0 : s.hidden) || e.recorder !== ((o = this.permissions) === null || o === void 0 ? void 0 : o.recorder) || e.canPublishSources.length !== this.permissions.canPublishSources.length || e.canPublishSources.some( (u, l) => {
            var h;
            return u !== ((h = this.permissions) === null || h === void 0 ? void 0 : h.canPublishSources[l])
        }
        ) || e.canSubscribeMetrics !== ((a = this.permissions) === null || a === void 0 ? void 0 : a.canSubscribeMetrics);
        return this.permissions = e,
        d && this.emit(P.ParticipantPermissionsChanged, c),
        d
    }
    setIsSpeaking(e) {
        e !== this.isSpeaking && (this.isSpeaking = e,
        e && (this.lastSpokeAt = new Date),
        this.emit(P.IsSpeakingChanged, e))
    }
    setConnectionQuality(e) {
        const t = this._connectionQuality;
        this._connectionQuality = yf(e),
        t !== this._connectionQuality && this.emit(P.ConnectionQualityChanged, this._connectionQuality)
    }
    setAudioContext(e) {
        this.audioContext = e,
        this.audioTrackPublications.forEach(t => (t.track instanceof un || t.track instanceof me) && t.track.setAudioContext(e))
    }
    addTrackPublication(e) {
        e.on(A.Muted, () => {
            this.emit(P.TrackMuted, e)
        }
        ),
        e.on(A.Unmuted, () => {
            this.emit(P.TrackUnmuted, e)
        }
        );
        const t = e;
        switch (t.track && (t.track.sid = e.trackSid),
        this.trackPublications.set(e.trackSid, e),
        e.kind) {
        case E.Kind.Audio:
            this.audioTrackPublications.set(e.trackSid, e);
            break;
        case E.Kind.Video:
            this.videoTrackPublications.set(e.trackSid, e);
            break
        }
    }
}
function kf(n) {
    var e, t, i;
    if (!n.participantSid && !n.participantIdentity)
        throw new Error("Invalid track permission, must provide at least one of participantIdentity and participantSid");
    return new Ta({
        participantIdentity: (e = n.participantIdentity) !== null && e !== void 0 ? e : "",
        participantSid: (t = n.participantSid) !== null && t !== void 0 ? t : "",
        allTracks: (i = n.allowAll) !== null && i !== void 0 ? i : !1,
        trackSids: n.allowedTrackSids || []
    })
}
class br extends Sc {
    constructor(e, t, i, r) {
        super(e, t, void 0, void 0, {
            loggerName: r.loggerName,
            loggerContextCb: () => this.engine.logContext
        }),
        this.pendingPublishing = new Set,
        this.pendingPublishPromises = new Map,
        this.participantTrackPermissions = [],
        this.allParticipantsAllowedToSubscribe = !0,
        this.encryptionType = Ae.NONE,
        this.enabledPublishVideoCodecs = [],
        this.rpcHandlers = new Map,
        this.pendingAcks = new Map,
        this.pendingResponses = new Map,
        this.handleReconnecting = () => {
            this.reconnectFuture || (this.reconnectFuture = new lc)
        }
        ,
        this.handleReconnected = () => {
            var s, o;
            (o = (s = this.reconnectFuture) === null || s === void 0 ? void 0 : s.resolve) === null || o === void 0 || o.call(s),
            this.reconnectFuture = void 0,
            this.updateTrackSubscriptionPermissions()
        }
        ,
        this.handleDisconnected = () => {
            var s, o;
            this.reconnectFuture && (this.reconnectFuture.promise.catch(a => this.log.warn(a.message, this.logContext)),
            (o = (s = this.reconnectFuture) === null || s === void 0 ? void 0 : s.reject) === null || o === void 0 || o.call(s, "Got disconnected during reconnection attempt"),
            this.reconnectFuture = void 0)
        }
        ,
        this.handleSignalRequestResponse = s => {
            const {requestId: o, reason: a, message: c} = s
              , d = this.pendingSignalRequests.get(o);
            d && (a !== Ra.OK && d.reject(new Es(c,a)),
            this.pendingSignalRequests.delete(o))
        }
        ,
        this.handleDataPacket = s => {
            switch (s.value.case) {
            case "rpcRequest":
                let o = s.value.value;
                this.handleIncomingRpcRequest(s.participantIdentity, o.id, o.method, o.payload, o.responseTimeoutMs, o.version);
                break;
            case "rpcResponse":
                let a = s.value.value
                  , c = null
                  , d = null;
                a.value.case === "payload" ? c = a.value.value : a.value.case === "error" && (d = se.fromProto(a.value.value)),
                this.handleIncomingRpcResponse(a.requestId, c, d);
                break;
            case "rpcAck":
                let u = s.value.value;
                this.handleIncomingRpcAck(u.requestId);
                break
            }
        }
        ,
        this.updateTrackSubscriptionPermissions = () => {
            this.log.debug("updating track subscription permissions", Object.assign(Object.assign({}, this.logContext), {
                allParticipantsAllowed: this.allParticipantsAllowedToSubscribe,
                participantTrackPermissions: this.participantTrackPermissions
            })),
            this.engine.client.sendUpdateSubscriptionPermissions(this.allParticipantsAllowedToSubscribe, this.participantTrackPermissions.map(s => kf(s)))
        }
        ,
        this.onTrackUnmuted = s => {
            this.onTrackMuted(s, s.isUpstreamPaused)
        }
        ,
        this.onTrackMuted = (s, o) => {
            if (o === void 0 && (o = !0),
            !s.sid) {
                this.log.error("could not update mute status for unpublished track", Object.assign(Object.assign({}, this.logContext), Y(s)));
                return
            }
            this.engine.updateMuteStatus(s.sid, o)
        }
        ,
        this.onTrackUpstreamPaused = s => {
            this.log.debug("upstream paused", Object.assign(Object.assign({}, this.logContext), Y(s))),
            this.onTrackMuted(s, !0)
        }
        ,
        this.onTrackUpstreamResumed = s => {
            this.log.debug("upstream resumed", Object.assign(Object.assign({}, this.logContext), Y(s))),
            this.onTrackMuted(s, s.isMuted)
        }
        ,
        this.onTrackFeatureUpdate = s => {
            const o = this.audioTrackPublications.get(s.sid);
            if (!o) {
                this.log.warn("Could not update local audio track settings, missing publication for track ".concat(s.sid), this.logContext);
                return
            }
            this.engine.client.sendUpdateLocalAudioTrack(o.trackSid, o.getTrackFeatures())
        }
        ,
        this.handleSubscribedQualityUpdate = s => m(this, void 0, void 0, function*() {
            var o, a, c, d, u, l;
            if (!(!((u = this.roomOptions) === null || u === void 0) && u.dynacast))
                return;
            const h = this.videoTrackPublications.get(s.trackSid);
            if (!h) {
                this.log.warn("received subscribed quality update for unknown track", Object.assign(Object.assign({}, this.logContext), {
                    trackSid: s.trackSid
                }));
                return
            }
            if (s.subscribedCodecs.length > 0) {
                if (!h.videoTrack)
                    return;
                const y = yield h.videoTrack.setPublishingCodecs(s.subscribedCodecs);
                try {
                    for (var f = !0, v = At(y), p; p = yield v.next(),
                    o = p.done,
                    !o; f = !0) {
                        d = p.value,
                        f = !1;
                        const g = d;
                        gh(g) && (this.log.debug("publish ".concat(g, " for ").concat(h.videoTrack.sid), Object.assign(Object.assign({}, this.logContext), Y(h))),
                        yield this.publishAdditionalCodecForTrack(h.videoTrack, g, h.options))
                    }
                } catch (g) {
                    a = {
                        error: g
                    }
                } finally {
                    try {
                        !f && !o && (c = v.return) && (yield c.call(v))
                    } finally {
                        if (a)
                            throw a.error
                    }
                }
            } else
                s.subscribedQualities.length > 0 && (yield(l = h.videoTrack) === null || l === void 0 ? void 0 : l.setPublishingLayers(s.subscribedQualities))
        }),
        this.handleLocalTrackUnpublished = s => {
            const o = this.trackPublications.get(s.trackSid);
            if (!o) {
                this.log.warn("received unpublished event for unknown track", Object.assign(Object.assign({}, this.logContext), {
                    trackSid: s.trackSid
                }));
                return
            }
            this.unpublishTrack(o.track)
        }
        ,
        this.handleTrackEnded = s => m(this, void 0, void 0, function*() {
            if (s.source === E.Source.ScreenShare || s.source === E.Source.ScreenShareAudio)
                this.log.debug("unpublishing local track due to TrackEnded", Object.assign(Object.assign({}, this.logContext), Y(s))),
                this.unpublishTrack(s);
            else if (s.isUserProvided)
                yield s.mute();
            else if (s instanceof me || s instanceof be)
                try {
                    if (Ie())
                        try {
                            const o = yield navigator?.permissions.query({
                                name: s.source === E.Source.Camera ? "camera" : "microphone"
                            });
                            if (o && o.state === "denied")
                                throw this.log.warn("user has revoked access to ".concat(s.source), Object.assign(Object.assign({}, this.logContext), Y(s))),
                                o.onchange = () => {
                                    o.state !== "denied" && (s.isMuted || s.restartTrack(),
                                    o.onchange = null)
                                }
                                ,
                                new Error("GetUserMedia Permission denied")
                        } catch {}
                    s.isMuted || (this.log.debug("track ended, attempting to use a different device", Object.assign(Object.assign({}, this.logContext), Y(s))),
                    s instanceof me ? yield s.restartTrack({
                        deviceId: "default"
                    }) : yield s.restartTrack())
                } catch {
                    this.log.warn("could not restart track, muting instead", Object.assign(Object.assign({}, this.logContext), Y(s))),
                    yield s.mute()
                }
        }),
        this.audioTrackPublications = new Map,
        this.videoTrackPublications = new Map,
        this.trackPublications = new Map,
        this.engine = i,
        this.roomOptions = r,
        this.setupEngine(i),
        this.activeDeviceMap = new Map,
        this.pendingSignalRequests = new Map
    }
    get lastCameraError() {
        return this.cameraError
    }
    get lastMicrophoneError() {
        return this.microphoneError
    }
    get isE2EEEnabled() {
        return this.encryptionType !== Ae.NONE
    }
    getTrackPublication(e) {
        const t = super.getTrackPublication(e);
        if (t)
            return t
    }
    getTrackPublicationByName(e) {
        const t = super.getTrackPublicationByName(e);
        if (t)
            return t
    }
    setupEngine(e) {
        this.engine = e,
        this.engine.on(O.RemoteMute, (t, i) => {
            const r = this.trackPublications.get(t);
            !r || !r.track || (i ? r.mute() : r.unmute())
        }
        ),
        this.engine.on(O.Connected, this.handleReconnected).on(O.SignalRestarted, this.handleReconnected).on(O.SignalResumed, this.handleReconnected).on(O.Restarting, this.handleReconnecting).on(O.Resuming, this.handleReconnecting).on(O.LocalTrackUnpublished, this.handleLocalTrackUnpublished).on(O.SubscribedQualityUpdate, this.handleSubscribedQualityUpdate).on(O.Disconnected, this.handleDisconnected).on(O.SignalRequestResponse, this.handleSignalRequestResponse).on(O.DataPacketReceived, this.handleDataPacket)
    }
    setMetadata(e) {
        return m(this, void 0, void 0, function*() {
            yield this.requestMetadataUpdate({
                metadata: e
            })
        })
    }
    setName(e) {
        return m(this, void 0, void 0, function*() {
            yield this.requestMetadataUpdate({
                name: e
            })
        })
    }
    setAttributes(e) {
        return m(this, void 0, void 0, function*() {
            yield this.requestMetadataUpdate({
                attributes: e
            })
        })
    }
    requestMetadataUpdate(e) {
        return m(this, arguments, void 0, function(t) {
            var i = this;
            let {metadata: r, name: s, attributes: o} = t;
            return function*() {
                return new Promise( (a, c) => m(i, void 0, void 0, function*() {
                    var d, u;
                    try {
                        let l = !1;
                        const h = yield this.engine.client.sendUpdateLocalMetadata((d = r ?? this.metadata) !== null && d !== void 0 ? d : "", (u = s ?? this.name) !== null && u !== void 0 ? u : "", o)
                          , f = performance.now();
                        for (this.pendingSignalRequests.set(h, {
                            resolve: a,
                            reject: v => {
                                c(v),
                                l = !0
                            }
                            ,
                            values: {
                                name: s,
                                metadata: r,
                                attributes: o
                            }
                        }); performance.now() - f < 5e3 && !l; ) {
                            if ((!s || this.name === s) && (!r || this.metadata === r) && (!o || Object.entries(o).every(v => {
                                let[p,y] = v;
                                return this.attributes[p] === y || y === "" && !this.attributes[p]
                            }
                            ))) {
                                this.pendingSignalRequests.delete(h),
                                a();
                                return
                            }
                            yield Qe(50)
                        }
                        c(new Es("Request to update local metadata timed out","TimeoutError"))
                    } catch (l) {
                        l instanceof Error && c(l)
                    }
                }))
            }()
        })
    }
    setCameraEnabled(e, t, i) {
        return this.setTrackEnabled(E.Source.Camera, e, t, i)
    }
    setMicrophoneEnabled(e, t, i) {
        return this.setTrackEnabled(E.Source.Microphone, e, t, i)
    }
    setScreenShareEnabled(e, t, i) {
        return this.setTrackEnabled(E.Source.ScreenShare, e, t, i)
    }
    setPermissions(e) {
        const t = this.permissions
          , i = super.setPermissions(e);
        return i && t && this.emit(P.ParticipantPermissionsChanged, t),
        i
    }
    setE2EEEnabled(e) {
        return m(this, void 0, void 0, function*() {
            this.encryptionType = e ? Ae.GCM : Ae.NONE,
            yield this.republishAllTracks(void 0, !1)
        })
    }
    setTrackEnabled(e, t, i, r) {
        return m(this, void 0, void 0, function*() {
            var s, o;
            this.log.debug("setTrackEnabled", Object.assign(Object.assign({}, this.logContext), {
                source: e,
                enabled: t
            })),
            this.republishPromise && (yield this.republishPromise);
            let a = this.getTrackPublication(e);
            if (t)
                if (a)
                    yield a.unmute();
                else {
                    let c;
                    if (this.pendingPublishing.has(e)) {
                        const d = yield this.waitForPendingPublicationOfSource(e);
                        return d || this.log.info("skipping duplicate published source", Object.assign(Object.assign({}, this.logContext), {
                            source: e
                        })),
                        yield d?.unmute(),
                        d
                    }
                    this.pendingPublishing.add(e);
                    try {
                        switch (e) {
                        case E.Source.Camera:
                            c = yield this.createTracks({
                                video: (s = i) !== null && s !== void 0 ? s : !0
                            });
                            break;
                        case E.Source.Microphone:
                            c = yield this.createTracks({
                                audio: (o = i) !== null && o !== void 0 ? o : !0
                            });
                            break;
                        case E.Source.ScreenShare:
                            c = yield this.createScreenTracks(Object.assign({}, i));
                            break;
                        default:
                            throw new Je(e)
                        }
                        const d = [];
                        for (const l of c)
                            this.log.info("publishing track", Object.assign(Object.assign({}, this.logContext), Y(l))),
                            d.push(this.publishTrack(l, r));
                        [a] = yield Promise.all(d)
                    } catch (d) {
                        throw c?.forEach(u => {
                            u.stop()
                        }
                        ),
                        d instanceof Error && !(d instanceof Je) && this.emit(P.MediaDevicesError, d),
                        d
                    } finally {
                        this.pendingPublishing.delete(e)
                    }
                }
            else if (a?.track || (a = yield this.waitForPendingPublicationOfSource(e)),
            a && a.track)
                if (e === E.Source.ScreenShare) {
                    a = yield this.unpublishTrack(a.track);
                    const c = this.getTrackPublication(E.Source.ScreenShareAudio);
                    c && c.track && this.unpublishTrack(c.track)
                } else
                    yield a.mute();
            return a
        })
    }
    enableCameraAndMicrophone() {
        return m(this, void 0, void 0, function*() {
            if (!(this.pendingPublishing.has(E.Source.Camera) || this.pendingPublishing.has(E.Source.Microphone))) {
                this.pendingPublishing.add(E.Source.Camera),
                this.pendingPublishing.add(E.Source.Microphone);
                try {
                    const e = yield this.createTracks({
                        audio: !0,
                        video: !0
                    });
                    yield Promise.all(e.map(t => this.publishTrack(t)))
                } finally {
                    this.pendingPublishing.delete(E.Source.Camera),
                    this.pendingPublishing.delete(E.Source.Microphone)
                }
            }
        })
    }
    createTracks(e) {
        return m(this, void 0, void 0, function*() {
            var t, i;
            e ?? (e = {});
            const {audioProcessor: r, videoProcessor: s} = yc(e)
              , o = oc(e, (t = this.roomOptions) === null || t === void 0 ? void 0 : t.audioCaptureDefaults, (i = this.roomOptions) === null || i === void 0 ? void 0 : i.videoCaptureDefaults)
              , a = li(o);
            let c;
            try {
                c = yield navigator.mediaDevices.getUserMedia(a)
            } catch (d) {
                throw d instanceof Error && (a.audio && (this.microphoneError = d),
                a.video && (this.cameraError = d)),
                d
            }
            return a.audio && (this.microphoneError = void 0,
            this.emit(P.AudioStreamAcquired)),
            a.video && (this.cameraError = void 0),
            Promise.all(c.getTracks().map(d => m(this, void 0, void 0, function*() {
                const u = d.kind === "audio";
                u ? o.audio : o.video;
                let l;
                const h = u ? a.audio : a.video;
                typeof h != "boolean" && (l = h);
                const f = mc(d, l, {
                    loggerName: this.roomOptions.loggerName,
                    loggerContextCb: () => this.logContext
                });
                return f.kind === E.Kind.Video ? f.source = E.Source.Camera : f.kind === E.Kind.Audio && (f.source = E.Source.Microphone,
                f.setAudioContext(this.audioContext)),
                f.mediaStream = c,
                f instanceof me && r ? yield f.setProcessor(r) : f instanceof be && s && (yield f.setProcessor(s)),
                f
            })))
        })
    }
    createScreenTracks(e) {
        return m(this, void 0, void 0, function*() {
            if (e === void 0 && (e = {}),
            navigator.mediaDevices.getDisplayMedia === void 0)
                throw new xr("getDisplayMedia not supported");
            e.resolution === void 0 && !Ih() && (e.resolution = Dr.h1080fps30.resolution);
            const t = kh(e)
              , i = yield navigator.mediaDevices.getDisplayMedia(t)
              , r = i.getVideoTracks();
            if (r.length === 0)
                throw new Je("no video track found");
            const s = new be(r[0],void 0,!1,{
                loggerName: this.roomOptions.loggerName,
                loggerContextCb: () => this.logContext
            });
            s.source = E.Source.ScreenShare,
            e.contentHint && (s.mediaStreamTrack.contentHint = e.contentHint);
            const o = [s];
            if (i.getAudioTracks().length > 0) {
                this.emit(P.AudioStreamAcquired);
                const a = new me(i.getAudioTracks()[0],void 0,!1,this.audioContext,{
                    loggerName: this.roomOptions.loggerName,
                    loggerContextCb: () => this.logContext
                });
                a.source = E.Source.ScreenShareAudio,
                o.push(a)
            }
            return o
        })
    }
    publishTrack(e, t) {
        return m(this, void 0, void 0, function*() {
            return this.publishOrRepublishTrack(e, t)
        })
    }
    publishOrRepublishTrack(e, t) {
        return m(this, arguments, void 0, function(i, r) {
            var s = this;
            let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return function*() {
                var a, c, d, u;
                i instanceof me && i.setAudioContext(s.audioContext),
                yield(a = s.reconnectFuture) === null || a === void 0 ? void 0 : a.promise,
                s.republishPromise && !o && (yield s.republishPromise),
                i instanceof Vt && s.pendingPublishPromises.has(i) && (yield s.pendingPublishPromises.get(i));
                let l;
                if (i instanceof MediaStreamTrack)
                    l = i.getConstraints();
                else {
                    l = i.constraints;
                    let g;
                    switch (i.source) {
                    case E.Source.Microphone:
                        g = "audioinput";
                        break;
                    case E.Source.Camera:
                        g = "videoinput"
                    }
                    g && s.activeDeviceMap.has(g) && (l = Object.assign(Object.assign({}, l), {
                        deviceId: s.activeDeviceMap.get(g)
                    }))
                }
                if (i instanceof MediaStreamTrack)
                    switch (i.kind) {
                    case "audio":
                        i = new me(i,l,!0,s.audioContext,{
                            loggerName: s.roomOptions.loggerName,
                            loggerContextCb: () => s.logContext
                        });
                        break;
                    case "video":
                        i = new be(i,l,!0,{
                            loggerName: s.roomOptions.loggerName,
                            loggerContextCb: () => s.logContext
                        });
                        break;
                    default:
                        throw new Je("unsupported MediaStreamTrack kind ".concat(i.kind))
                    }
                else
                    i.updateLoggerOptions({
                        loggerName: s.roomOptions.loggerName,
                        loggerContextCb: () => s.logContext
                    });
                let h;
                if (s.trackPublications.forEach(g => {
                    g.track && g.track === i && (h = g)
                }
                ),
                h)
                    return s.log.warn("track has already been published, skipping", Object.assign(Object.assign({}, s.logContext), Y(h))),
                    h;
                const f = "channelCount"in i.mediaStreamTrack.getSettings() && i.mediaStreamTrack.getSettings().channelCount === 2 || i.mediaStreamTrack.getConstraints().channelCount === 2
                  , v = (c = r?.forceStereo) !== null && c !== void 0 ? c : f;
                v && (r || (r = {}),
                r.dtx === void 0 && s.log.info("Opus DTX will be disabled for stereo tracks by default. Enable them explicitly to make it work.", Object.assign(Object.assign({}, s.logContext), Y(i))),
                r.red === void 0 && s.log.info("Opus RED will be disabled for stereo tracks by default. Enable them explicitly to make it work."),
                (d = r.dtx) !== null && d !== void 0 || (r.dtx = !1),
                (u = r.red) !== null && u !== void 0 || (r.red = !1));
                const p = Object.assign(Object.assign({}, s.roomOptions.publishDefaults), r);
                !xh() && s.roomOptions.e2ee && (s.log.info("End-to-end encryption is set up, simulcast publishing will be disabled on Safari versions and iOS browsers running iOS < v17.2", Object.assign({}, s.logContext)),
                p.simulcast = !1),
                p.source && (i.source = p.source);
                const y = s.publish(i, p, v);
                s.pendingPublishPromises.set(i, y);
                try {
                    return yield y
                } catch (g) {
                    throw g
                } finally {
                    s.pendingPublishPromises.delete(i)
                }
            }()
        })
    }
    publish(e, t, i) {
        return m(this, void 0, void 0, function*() {
            var r, s, o, a, c, d, u, l, h, f;
            Array.from(this.trackPublications.values()).find(b => e instanceof Vt && b.source === e.source) && e.source !== E.Source.Unknown && this.log.info("publishing a second track with the same source: ".concat(e.source), Object.assign(Object.assign({}, this.logContext), Y(e))),
            t.stopMicTrackOnMute && e instanceof me && (e.stopOnMute = !0),
            e.source === E.Source.ScreenShare && Wt() && (t.simulcast = !1),
            t.videoCodec === "av1" && !Eh() && (t.videoCodec = void 0),
            t.videoCodec === "vp9" && !Rh() && (t.videoCodec = void 0),
            t.videoCodec === void 0 && (t.videoCodec = pr),
            this.enabledPublishVideoCodecs.length > 0 && (this.enabledPublishVideoCodecs.some(b => t.videoCodec === qn(b.mime)) || (t.videoCodec = qn(this.enabledPublishVideoCodecs[0].mime)));
            const p = t.videoCodec;
            e.on(A.Muted, this.onTrackMuted),
            e.on(A.Unmuted, this.onTrackUnmuted),
            e.on(A.Ended, this.handleTrackEnded),
            e.on(A.UpstreamPaused, this.onTrackUpstreamPaused),
            e.on(A.UpstreamResumed, this.onTrackUpstreamResumed),
            e.on(A.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate);
            const y = new $i({
                cid: e.mediaStreamTrack.id,
                name: t.name,
                type: E.kindToProto(e.kind),
                muted: e.isMuted,
                source: E.sourceToProto(e.source),
                disableDtx: !(!((r = t.dtx) !== null && r !== void 0) || r),
                encryption: this.encryptionType,
                stereo: i,
                disableRed: this.isE2EEEnabled || !(!((s = t.red) !== null && s !== void 0) || s),
                stream: t?.stream
            });
            let g;
            if (e.kind === E.Kind.Video) {
                let b = {
                    width: 0,
                    height: 0
                };
                try {
                    b = yield e.waitForDimensions()
                } catch {
                    const D = (a = (o = this.roomOptions.videoCaptureDefaults) === null || o === void 0 ? void 0 : o.resolution) !== null && a !== void 0 ? a : mn.h720.resolution;
                    b = {
                        width: D.width,
                        height: D.height
                    },
                    this.log.error("could not determine track dimensions, using defaults", Object.assign(Object.assign(Object.assign({}, this.logContext), Y(e)), {
                        dims: b
                    }))
                }
                y.width = b.width,
                y.height = b.height,
                e instanceof be && (cn(p) && (e.source === E.Source.ScreenShare && (t.scalabilityMode = "L1T3",
                "contentHint"in e.mediaStreamTrack && (e.mediaStreamTrack.contentHint = "motion",
                this.log.info("forcing contentHint to motion for screenshare with SVC codecs", Object.assign(Object.assign({}, this.logContext), Y(e))))),
                t.scalabilityMode = (c = t.scalabilityMode) !== null && c !== void 0 ? c : "L3T3_KEY"),
                y.simulcastCodecs = [new Yi({
                    codec: p,
                    cid: e.mediaStreamTrack.id
                })],
                t.backupCodec === !0 && (t.backupCodec = {
                    codec: pr
                }),
                t.backupCodec && p !== t.backupCodec.codec && y.encryption === Ae.NONE && (this.roomOptions.dynacast || (this.roomOptions.dynacast = !0),
                y.simulcastCodecs.push(new Yi({
                    codec: t.backupCodec.codec,
                    cid: ""
                })))),
                g = gr(e.source === E.Source.ScreenShare, y.width, y.height, t),
                y.layers = Gs(y.width, y.height, g, cn(t.videoCodec))
            } else
                e.kind === E.Kind.Audio && (g = [{
                    maxBitrate: (d = t.audioPreset) === null || d === void 0 ? void 0 : d.maxBitrate,
                    priority: (l = (u = t.audioPreset) === null || u === void 0 ? void 0 : u.priority) !== null && l !== void 0 ? l : "high",
                    networkPriority: (f = (h = t.audioPreset) === null || h === void 0 ? void 0 : h.priority) !== null && f !== void 0 ? f : "high"
                }]);
            if (!this.engine || this.engine.isClosed)
                throw new le("cannot publish track when not connected");
            const x = () => m(this, void 0, void 0, function*() {
                var b, w, D;
                if (!this.engine.pcManager)
                    throw new le("pcManager is not ready");
                if (e.sender = yield this.engine.createSender(e, t, g),
                e instanceof be && ((b = t.degradationPreference) !== null && b !== void 0 || (t.degradationPreference = df(e)),
                e.setDegradationPreference(t.degradationPreference)),
                g)
                    if (Wt() && e.kind === E.Kind.Audio) {
                        let N;
                        for (const U of this.engine.pcManager.publisher.getTransceivers())
                            if (U.sender === e.sender) {
                                N = U;
                                break
                            }
                        N && this.engine.pcManager.publisher.setTrackCodecBitrate({
                            transceiver: N,
                            codec: "opus",
                            maxbr: !((w = g[0]) === null || w === void 0) && w.maxBitrate ? g[0].maxBitrate / 1e3 : 0
                        })
                    } else
                        e.codec && cn(e.codec) && (!((D = g[0]) === null || D === void 0) && D.maxBitrate) && this.engine.pcManager.publisher.setTrackCodecBitrate({
                            cid: y.cid,
                            codec: e.codec,
                            maxbr: g[0].maxBitrate / 1e3
                        });
                yield this.engine.negotiate()
            });
            let _;
            if (this.enabledPublishVideoCodecs.length > 0)
                _ = (yield Promise.all([this.engine.addTrack(y), x()]))[0];
            else {
                _ = yield this.engine.addTrack(y);
                let b;
                if (_.codecs.forEach(w => {
                    b === void 0 && (b = w.mimeType)
                }
                ),
                b && e.kind === E.Kind.Video) {
                    const w = qn(b);
                    w !== p && (this.log.debug("falling back to server selected codec", Object.assign(Object.assign(Object.assign({}, this.logContext), Y(e)), {
                        codec: w
                    })),
                    t.videoCodec = w,
                    g = gr(e.source === E.Source.ScreenShare, y.width, y.height, t))
                }
                yield x()
            }
            const S = new Zn(e.kind,_,e,{
                loggerName: this.roomOptions.loggerName,
                loggerContextCb: () => this.logContext
            });
            return S.options = t,
            e.sid = _.sid,
            this.log.debug("publishing ".concat(e.kind, " with encodings"), Object.assign(Object.assign({}, this.logContext), {
                encodings: g,
                trackInfo: _
            })),
            e instanceof be ? e.startMonitor(this.engine.client) : e instanceof me && e.startMonitor(),
            this.addTrackPublication(S),
            this.emit(P.LocalTrackPublished, S),
            S
        })
    }
    get isLocal() {
        return !0
    }
    publishAdditionalCodecForTrack(e, t, i) {
        return m(this, void 0, void 0, function*() {
            var r;
            if (this.encryptionType !== Ae.NONE)
                return;
            let s;
            if (this.trackPublications.forEach(f => {
                f.track && f.track === e && (s = f)
            }
            ),
            !s)
                throw new Je("track is not published");
            if (!(e instanceof be))
                throw new Je("track is not a video track");
            const o = Object.assign(Object.assign({}, (r = this.roomOptions) === null || r === void 0 ? void 0 : r.publishDefaults), i)
              , a = of(e, t, o);
            if (!a) {
                this.log.info("backup codec has been disabled, ignoring request to add additional codec for track", Object.assign(Object.assign({}, this.logContext), Y(e)));
                return
            }
            const c = e.addSimulcastTrack(t, a);
            if (!c)
                return;
            const d = new $i({
                cid: c.mediaStreamTrack.id,
                type: E.kindToProto(e.kind),
                muted: e.isMuted,
                source: E.sourceToProto(e.source),
                sid: e.sid,
                simulcastCodecs: [{
                    codec: o.videoCodec,
                    cid: c.mediaStreamTrack.id
                }]
            });
            if (d.layers = Gs(d.width, d.height, a),
            !this.engine || this.engine.isClosed)
                throw new le("cannot publish track when not connected");
            const u = () => m(this, void 0, void 0, function*() {
                yield this.engine.createSimulcastSender(e, c, o, a),
                yield this.engine.negotiate()
            })
              , h = (yield Promise.all([this.engine.addTrack(d), u()]))[0];
            this.log.debug("published ".concat(t, " for track ").concat(e.sid), Object.assign(Object.assign({}, this.logContext), {
                encodings: a,
                trackInfo: h
            }))
        })
    }
    unpublishTrack(e, t) {
        return m(this, void 0, void 0, function*() {
            var i, r;
            if (e instanceof Vt) {
                const d = this.pendingPublishPromises.get(e);
                d && (this.log.info("awaiting publish promise before attempting to unpublish", Object.assign(Object.assign({}, this.logContext), Y(e))),
                yield d)
            }
            const s = this.getPublicationForTrack(e)
              , o = s ? Y(s) : void 0;
            if (this.log.debug("unpublishing track", Object.assign(Object.assign({}, this.logContext), o)),
            !s || !s.track) {
                this.log.warn("track was not unpublished because no publication was found", Object.assign(Object.assign({}, this.logContext), o));
                return
            }
            e = s.track,
            e.off(A.Muted, this.onTrackMuted),
            e.off(A.Unmuted, this.onTrackUnmuted),
            e.off(A.Ended, this.handleTrackEnded),
            e.off(A.UpstreamPaused, this.onTrackUpstreamPaused),
            e.off(A.UpstreamResumed, this.onTrackUpstreamResumed),
            e.off(A.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate),
            t === void 0 && (t = (r = (i = this.roomOptions) === null || i === void 0 ? void 0 : i.stopLocalTrackOnUnpublish) !== null && r !== void 0 ? r : !0),
            t && e.stop();
            let a = !1;
            const c = e.sender;
            if (e.sender = void 0,
            this.engine.pcManager && this.engine.pcManager.currentState < oe.FAILED && c)
                try {
                    for (const d of this.engine.pcManager.publisher.getTransceivers())
                        d.sender === c && (d.direction = "inactive",
                        a = !0);
                    if (this.engine.removeTrack(c) && (a = !0),
                    e instanceof be) {
                        for (const [,d] of e.simulcastCodecs)
                            d.sender && (this.engine.removeTrack(d.sender) && (a = !0),
                            d.sender = void 0);
                        e.simulcastCodecs.clear()
                    }
                } catch (d) {
                    this.log.warn("failed to unpublish track", Object.assign(Object.assign(Object.assign({}, this.logContext), o), {
                        error: d
                    }))
                }
            switch (this.trackPublications.delete(s.trackSid),
            s.kind) {
            case E.Kind.Audio:
                this.audioTrackPublications.delete(s.trackSid);
                break;
            case E.Kind.Video:
                this.videoTrackPublications.delete(s.trackSid);
                break
            }
            return this.emit(P.LocalTrackUnpublished, s),
            s.setTrack(void 0),
            a && (yield this.engine.negotiate()),
            s
        })
    }
    unpublishTracks(e) {
        return m(this, void 0, void 0, function*() {
            return (yield Promise.all(e.map(i => this.unpublishTrack(i)))).filter(i => i instanceof Zn)
        })
    }
    republishAllTracks(e) {
        return m(this, arguments, void 0, function(t) {
            var i = this;
            let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
            return function*() {
                i.republishPromise && (yield i.republishPromise),
                i.republishPromise = new Promise( (s, o) => m(i, void 0, void 0, function*() {
                    try {
                        const a = [];
                        this.trackPublications.forEach(c => {
                            c.track && (t && (c.options = Object.assign(Object.assign({}, c.options), t)),
                            a.push(c))
                        }
                        ),
                        yield Promise.all(a.map(c => m(this, void 0, void 0, function*() {
                            const d = c.track;
                            yield this.unpublishTrack(d, !1),
                            r && !d.isMuted && d.source !== E.Source.ScreenShare && d.source !== E.Source.ScreenShareAudio && (d instanceof me || d instanceof be) && !d.isUserProvided && (this.log.debug("restarting existing track", Object.assign(Object.assign({}, this.logContext), {
                                track: c.trackSid
                            })),
                            yield d.restartTrack()),
                            yield this.publishOrRepublishTrack(d, c.options, !0)
                        }))),
                        s()
                    } catch (a) {
                        o(a)
                    } finally {
                        this.republishPromise = void 0
                    }
                })),
                yield i.republishPromise
            }()
        })
    }
    publishData(e) {
        return m(this, arguments, void 0, function(t) {
            var i = this;
            let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return function*() {
                const s = r.reliable ? Z.RELIABLE : Z.LOSSY
                  , o = r.destinationIdentities
                  , a = r.topic
                  , c = new ct({
                    kind: s,
                    value: {
                        case: "user",
                        value: new oa({
                            participantIdentity: i.identity,
                            payload: t,
                            destinationIdentities: o,
                            topic: a
                        })
                    }
                });
                yield i.engine.sendDataPacket(c, s)
            }()
        })
    }
    publishDtmf(e, t) {
        return m(this, void 0, void 0, function*() {
            const i = new ct({
                kind: Z.RELIABLE,
                value: {
                    case: "sipDtmf",
                    value: new aa({
                        code: e,
                        digit: t
                    })
                }
            });
            yield this.engine.sendDataPacket(i, Z.RELIABLE)
        })
    }
    sendChatMessage(e) {
        return m(this, void 0, void 0, function*() {
            const t = {
                id: crypto.randomUUID(),
                message: e,
                timestamp: Date.now()
            }
              , i = new ct({
                value: {
                    case: "chatMessage",
                    value: new Ji(Object.assign(Object.assign({}, t), {
                        timestamp: te.parse(t.timestamp)
                    }))
                }
            });
            return yield this.engine.sendDataPacket(i, Z.RELIABLE),
            this.emit(P.ChatMessage, t),
            t
        })
    }
    editChatMessage(e, t) {
        return m(this, void 0, void 0, function*() {
            const i = Object.assign(Object.assign({}, t), {
                message: e,
                editTimestamp: Date.now()
            })
              , r = new ct({
                value: {
                    case: "chatMessage",
                    value: new Ji(Object.assign(Object.assign({}, i), {
                        timestamp: te.parse(i.timestamp),
                        editTimestamp: te.parse(i.editTimestamp)
                    }))
                }
            });
            return yield this.engine.sendDataPacket(r, Z.RELIABLE),
            this.emit(P.ChatMessage, i),
            i
        })
    }
    performRpc(e) {
        return m(this, arguments, void 0, function(t) {
            var i = this;
            let {destinationIdentity: r, method: s, payload: o, responseTimeout: a=1e4} = t;
            return function*() {
                return new Promise( (d, u) => m(i, void 0, void 0, function*() {
                    var l, h, f, v;
                    if (vr(o) > Qs) {
                        u(se.builtIn("REQUEST_PAYLOAD_TOO_LARGE"));
                        return
                    }
                    if (!((h = (l = this.engine.latestJoinResponse) === null || l === void 0 ? void 0 : l.serverInfo) === null || h === void 0) && h.version && Gt((v = (f = this.engine.latestJoinResponse) === null || f === void 0 ? void 0 : f.serverInfo) === null || v === void 0 ? void 0 : v.version, "1.8.0") < 0) {
                        u(se.builtIn("UNSUPPORTED_SERVER"));
                        return
                    }
                    const p = crypto.randomUUID();
                    yield this.publishRpcRequest(r, p, s, o, a - 2e3);
                    const y = setTimeout( () => {
                        this.pendingAcks.delete(p),
                        u(se.builtIn("CONNECTION_TIMEOUT")),
                        this.pendingResponses.delete(p),
                        clearTimeout(g)
                    }
                    , 2e3);
                    this.pendingAcks.set(p, {
                        resolve: () => {
                            clearTimeout(y)
                        }
                        ,
                        participantIdentity: r
                    });
                    const g = setTimeout( () => {
                        this.pendingResponses.delete(p),
                        u(se.builtIn("RESPONSE_TIMEOUT"))
                    }
                    , a);
                    this.pendingResponses.set(p, {
                        resolve: (x, _) => {
                            clearTimeout(g),
                            this.pendingAcks.has(p) && (console.warn("RPC response received before ack", p),
                            this.pendingAcks.delete(p),
                            clearTimeout(y)),
                            _ ? u(_) : d(x ?? "")
                        }
                        ,
                        participantIdentity: r
                    })
                }))
            }()
        })
    }
    registerRpcMethod(e, t) {
        this.rpcHandlers.set(e, t)
    }
    unregisterRpcMethod(e) {
        this.rpcHandlers.delete(e)
    }
    setTrackSubscriptionPermissions(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        this.participantTrackPermissions = t,
        this.allParticipantsAllowedToSubscribe = e,
        this.engine.client.isDisconnected || this.updateTrackSubscriptionPermissions()
    }
    handleIncomingRpcAck(e) {
        const t = this.pendingAcks.get(e);
        t ? (t.resolve(),
        this.pendingAcks.delete(e)) : console.error("Ack received for unexpected RPC request", e)
    }
    handleIncomingRpcResponse(e, t, i) {
        const r = this.pendingResponses.get(e);
        r ? (r.resolve(t, i),
        this.pendingResponses.delete(e)) : console.error("Response received for unexpected RPC request", e)
    }
    handleIncomingRpcRequest(e, t, i, r, s, o) {
        return m(this, void 0, void 0, function*() {
            if (yield this.publishRpcAck(e, t),
            o !== 1) {
                yield this.publishRpcResponse(e, t, null, se.builtIn("UNSUPPORTED_VERSION"));
                return
            }
            const a = this.rpcHandlers.get(i);
            if (!a) {
                yield this.publishRpcResponse(e, t, null, se.builtIn("UNSUPPORTED_METHOD"));
                return
            }
            let c = null
              , d = null;
            try {
                const u = yield a({
                    requestId: t,
                    callerIdentity: e,
                    payload: r,
                    responseTimeout: s
                });
                vr(u) > Qs ? (c = se.builtIn("RESPONSE_PAYLOAD_TOO_LARGE"),
                console.warn("RPC Response payload too large for ".concat(i))) : d = u
            } catch (u) {
                u instanceof se ? c = u : (console.warn("Uncaught error returned by RPC handler for ".concat(i, ". Returning APPLICATION_ERROR instead."), u),
                c = se.builtIn("APPLICATION_ERROR"))
            }
            yield this.publishRpcResponse(e, t, d, c)
        })
    }
    publishRpcRequest(e, t, i, r, s) {
        return m(this, void 0, void 0, function*() {
            const o = new ct({
                destinationIdentities: [e],
                kind: Z.RELIABLE,
                value: {
                    case: "rpcRequest",
                    value: new ca({
                        id: t,
                        method: i,
                        payload: r,
                        responseTimeoutMs: s,
                        version: 1
                    })
                }
            });
            yield this.engine.sendDataPacket(o, Z.RELIABLE)
        })
    }
    publishRpcResponse(e, t, i, r) {
        return m(this, void 0, void 0, function*() {
            const s = new ct({
                destinationIdentities: [e],
                kind: Z.RELIABLE,
                value: {
                    case: "rpcResponse",
                    value: new ua({
                        requestId: t,
                        value: r ? {
                            case: "error",
                            value: r.toProto()
                        } : {
                            case: "payload",
                            value: i ?? ""
                        }
                    })
                }
            });
            yield this.engine.sendDataPacket(s, Z.RELIABLE)
        })
    }
    publishRpcAck(e, t) {
        return m(this, void 0, void 0, function*() {
            const i = new ct({
                destinationIdentities: [e],
                kind: Z.RELIABLE,
                value: {
                    case: "rpcAck",
                    value: new da({
                        requestId: t
                    })
                }
            });
            yield this.engine.sendDataPacket(i, Z.RELIABLE)
        })
    }
    handleParticipantDisconnected(e) {
        for (const [t,{participantIdentity: i}] of this.pendingAcks)
            i === e && this.pendingAcks.delete(t);
        for (const [t,{participantIdentity: i, resolve: r}] of this.pendingResponses)
            i === e && (r(null, se.builtIn("RECIPIENT_DISCONNECTED")),
            this.pendingResponses.delete(t))
    }
    setEnabledPublishCodecs(e) {
        this.enabledPublishVideoCodecs = e.filter(t => t.mime.split("/")[0].toLowerCase() === "video")
    }
    updateInfo(e) {
        return e.sid !== this.sid || !super.updateInfo(e) ? !1 : (e.tracks.forEach(t => {
            var i, r;
            const s = this.trackPublications.get(t.sid);
            if (s) {
                const o = s.isMuted || ((r = (i = s.track) === null || i === void 0 ? void 0 : i.isUpstreamPaused) !== null && r !== void 0 ? r : !1);
                o !== t.muted && (this.log.debug("updating server mute state after reconcile", Object.assign(Object.assign(Object.assign({}, this.logContext), Y(s)), {
                    mutedOnServer: o
                })),
                this.engine.client.sendMuteTrack(t.sid, o))
            }
        }
        ),
        !0)
    }
    getPublicationForTrack(e) {
        let t;
        return this.trackPublications.forEach(i => {
            const r = i.track;
            r && (e instanceof MediaStreamTrack ? (r instanceof me || r instanceof be) && r.mediaStreamTrack === e && (t = i) : e === r && (t = i))
        }
        ),
        t
    }
    waitForPendingPublicationOfSource(e) {
        return m(this, void 0, void 0, function*() {
            const t = Array.from(this.pendingPublishPromises.entries()).find(i => {
                let[r] = i;
                return r.source === e
            }
            );
            if (t)
                return t[1]
        })
    }
}
class Tc extends Xe {
    constructor(e, t, i, r) {
        super(e, t.sid, t.name, r),
        this.track = void 0,
        this.allowed = !0,
        this.disabled = !1,
        this.currentVideoQuality = De.HIGH,
        this.handleEnded = s => {
            this.setTrack(void 0),
            this.emit(A.Ended, s)
        }
        ,
        this.handleVisibilityChange = s => {
            this.log.debug("adaptivestream video visibility ".concat(this.trackSid, ", visible=").concat(s), this.logContext),
            this.disabled = !s,
            this.emitTrackUpdate()
        }
        ,
        this.handleVideoDimensionsChange = s => {
            this.log.debug("adaptivestream video dimensions ".concat(s.width, "x").concat(s.height), this.logContext),
            this.videoDimensions = s,
            this.emitTrackUpdate()
        }
        ,
        this.subscribed = i,
        this.updateInfo(t)
    }
    setSubscribed(e) {
        const t = this.subscriptionStatus
          , i = this.permissionStatus;
        this.subscribed = e,
        e && (this.allowed = !0);
        const r = new ci({
            trackSids: [this.trackSid],
            subscribe: this.subscribed,
            participantTracks: [new ha({
                participantSid: "",
                trackSids: [this.trackSid]
            })]
        });
        this.emit(A.UpdateSubscription, r),
        this.emitSubscriptionUpdateIfChanged(t),
        this.emitPermissionUpdateIfChanged(i)
    }
    get subscriptionStatus() {
        return this.subscribed === !1 ? Xe.SubscriptionStatus.Unsubscribed : super.isSubscribed ? Xe.SubscriptionStatus.Subscribed : Xe.SubscriptionStatus.Desired
    }
    get permissionStatus() {
        return this.allowed ? Xe.PermissionStatus.Allowed : Xe.PermissionStatus.NotAllowed
    }
    get isSubscribed() {
        return this.subscribed === !1 ? !1 : super.isSubscribed
    }
    get isDesired() {
        return this.subscribed !== !1
    }
    get isEnabled() {
        return !this.disabled
    }
    setEnabled(e) {
        !this.isManualOperationAllowed() || this.disabled === !e || (this.disabled = !e,
        this.emitTrackUpdate())
    }
    setVideoQuality(e) {
        !this.isManualOperationAllowed() || this.currentVideoQuality === e || (this.currentVideoQuality = e,
        this.videoDimensions = void 0,
        this.emitTrackUpdate())
    }
    setVideoDimensions(e) {
        var t, i;
        this.isManualOperationAllowed() && (((t = this.videoDimensions) === null || t === void 0 ? void 0 : t.width) === e.width && ((i = this.videoDimensions) === null || i === void 0 ? void 0 : i.height) === e.height || (this.track instanceof ln && (this.videoDimensions = e),
        this.currentVideoQuality = void 0,
        this.emitTrackUpdate()))
    }
    setVideoFPS(e) {
        this.isManualOperationAllowed() && this.track instanceof ln && this.fps !== e && (this.fps = e,
        this.emitTrackUpdate())
    }
    get videoQuality() {
        return this.currentVideoQuality
    }
    setTrack(e) {
        const t = this.subscriptionStatus
          , i = this.permissionStatus
          , r = this.track;
        r !== e && (r && (r.off(A.VideoDimensionsChanged, this.handleVideoDimensionsChange),
        r.off(A.VisibilityChanged, this.handleVisibilityChange),
        r.off(A.Ended, this.handleEnded),
        r.detach(),
        r.stopMonitor(),
        this.emit(A.Unsubscribed, r)),
        super.setTrack(e),
        e && (e.sid = this.trackSid,
        e.on(A.VideoDimensionsChanged, this.handleVideoDimensionsChange),
        e.on(A.VisibilityChanged, this.handleVisibilityChange),
        e.on(A.Ended, this.handleEnded),
        this.emit(A.Subscribed, e)),
        this.emitPermissionUpdateIfChanged(i),
        this.emitSubscriptionUpdateIfChanged(t))
    }
    setAllowed(e) {
        const t = this.subscriptionStatus
          , i = this.permissionStatus;
        this.allowed = e,
        this.emitPermissionUpdateIfChanged(i),
        this.emitSubscriptionUpdateIfChanged(t)
    }
    setSubscriptionError(e) {
        this.emit(A.SubscriptionFailed, e)
    }
    updateInfo(e) {
        super.updateInfo(e);
        const t = this.metadataMuted;
        this.metadataMuted = e.muted,
        this.track ? this.track.setMuted(e.muted) : t !== e.muted && this.emit(e.muted ? A.Muted : A.Unmuted)
    }
    emitSubscriptionUpdateIfChanged(e) {
        const t = this.subscriptionStatus;
        e !== t && this.emit(A.SubscriptionStatusChanged, t, e)
    }
    emitPermissionUpdateIfChanged(e) {
        this.permissionStatus !== e && this.emit(A.SubscriptionPermissionChanged, this.permissionStatus, e)
    }
    isManualOperationAllowed() {
        return this.kind === E.Kind.Video && this.isAdaptiveStream ? (this.log.warn("adaptive stream is enabled, cannot change video track settings", this.logContext),
        !1) : this.isDesired ? !0 : (this.log.warn("cannot update track settings when not subscribed", this.logContext),
        !1)
    }
    get isAdaptiveStream() {
        return this.track instanceof ln && this.track.isAdaptiveStream
    }
    emitTrackUpdate() {
        const e = new va({
            trackSids: [this.trackSid],
            disabled: this.disabled,
            fps: this.fps
        });
        this.videoDimensions ? (e.width = Math.ceil(this.videoDimensions.width),
        e.height = Math.ceil(this.videoDimensions.height)) : this.currentVideoQuality !== void 0 ? e.quality = this.currentVideoQuality : e.quality = De.HIGH,
        this.emit(A.UpdateSettings, e)
    }
}
class ei extends Sc {
    static fromParticipantInfo(e, t, i) {
        return new ei(e,t.sid,t.identity,t.name,t.metadata,i,t.kind)
    }
    get logContext() {
        return Object.assign(Object.assign({}, super.logContext), {
            rpID: this.sid,
            remoteParticipant: this.identity
        })
    }
    constructor(e, t, i, r, s, o) {
        let a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : Yn.STANDARD;
        super(t, i || "", r, s, o, a),
        this.signalClient = e,
        this.trackPublications = new Map,
        this.audioTrackPublications = new Map,
        this.videoTrackPublications = new Map,
        this.volumeMap = new Map
    }
    addTrackPublication(e) {
        super.addTrackPublication(e),
        e.on(A.UpdateSettings, t => {
            this.log.debug("send update settings", Object.assign(Object.assign({}, this.logContext), Y(e))),
            this.signalClient.sendUpdateTrackSettings(t)
        }
        ),
        e.on(A.UpdateSubscription, t => {
            t.participantTracks.forEach(i => {
                i.participantSid = this.sid
            }
            ),
            this.signalClient.sendUpdateSubscription(t)
        }
        ),
        e.on(A.SubscriptionPermissionChanged, t => {
            this.emit(P.TrackSubscriptionPermissionChanged, e, t)
        }
        ),
        e.on(A.SubscriptionStatusChanged, t => {
            this.emit(P.TrackSubscriptionStatusChanged, e, t)
        }
        ),
        e.on(A.Subscribed, t => {
            this.emit(P.TrackSubscribed, t, e)
        }
        ),
        e.on(A.Unsubscribed, t => {
            this.emit(P.TrackUnsubscribed, t, e)
        }
        ),
        e.on(A.SubscriptionFailed, t => {
            this.emit(P.TrackSubscriptionFailed, e.trackSid, t)
        }
        )
    }
    getTrackPublication(e) {
        const t = super.getTrackPublication(e);
        if (t)
            return t
    }
    getTrackPublicationByName(e) {
        const t = super.getTrackPublicationByName(e);
        if (t)
            return t
    }
    setVolume(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : E.Source.Microphone;
        this.volumeMap.set(t, e);
        const i = this.getTrackPublication(t);
        i && i.track && i.track.setVolume(e)
    }
    getVolume() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : E.Source.Microphone;
        const t = this.getTrackPublication(e);
        return t && t.track ? t.track.getVolume() : this.volumeMap.get(e)
    }
    addSubscribedMediaTrack(e, t, i, r, s, o) {
        let a = this.getTrackPublicationBySid(t);
        if (a || t.startsWith("TR") || this.trackPublications.forEach(u => {
            !a && e.kind === u.kind.toString() && (a = u)
        }
        ),
        !a) {
            if (o === 0) {
                this.log.error("could not find published track", Object.assign(Object.assign({}, this.logContext), {
                    trackSid: t
                })),
                this.emit(P.TrackSubscriptionFailed, t);
                return
            }
            o === void 0 && (o = 20),
            setTimeout( () => {
                this.addSubscribedMediaTrack(e, t, i, r, s, o - 1)
            }
            , 150);
            return
        }
        if (e.readyState === "ended") {
            this.log.error("unable to subscribe because MediaStreamTrack is ended. Do not call MediaStreamTrack.stop()", Object.assign(Object.assign({}, this.logContext), Y(a))),
            this.emit(P.TrackSubscriptionFailed, t);
            return
        }
        const c = e.kind === "video";
        let d;
        return c ? d = new ln(e,t,r,s) : d = new un(e,t,r,this.audioContext,this.audioOutput),
        d.source = a.source,
        d.isMuted = a.isMuted,
        d.setMediaStream(i),
        d.start(),
        a.setTrack(d),
        this.volumeMap.has(a.source) && d instanceof un && d.setVolume(this.volumeMap.get(a.source)),
        a
    }
    get hasMetadata() {
        return !!this.participantInfo
    }
    getTrackPublicationBySid(e) {
        return this.trackPublications.get(e)
    }
    updateInfo(e) {
        if (!super.updateInfo(e))
            return !1;
        const t = new Map
          , i = new Map;
        return e.tracks.forEach(r => {
            var s, o;
            let a = this.getTrackPublicationBySid(r.sid);
            if (a)
                a.updateInfo(r);
            else {
                const c = E.kindFromProto(r.type);
                if (!c)
                    return;
                a = new Tc(c,r,(s = this.signalClient.connectOptions) === null || s === void 0 ? void 0 : s.autoSubscribe,{
                    loggerContextCb: () => this.logContext,
                    loggerName: (o = this.loggerOptions) === null || o === void 0 ? void 0 : o.loggerName
                }),
                a.updateInfo(r),
                i.set(r.sid, a);
                const d = Array.from(this.trackPublications.values()).find(u => u.source === a?.source);
                d && a.source !== E.Source.Unknown && this.log.debug("received a second track publication for ".concat(this.identity, " with the same source: ").concat(a.source), Object.assign(Object.assign({}, this.logContext), {
                    oldTrack: Y(d),
                    newTrack: Y(a)
                })),
                this.addTrackPublication(a)
            }
            t.set(r.sid, a)
        }
        ),
        this.trackPublications.forEach(r => {
            t.has(r.trackSid) || (this.log.trace("detected removed track on remote participant, unpublishing", Object.assign(Object.assign({}, this.logContext), Y(r))),
            this.unpublishTrack(r.trackSid, !0))
        }
        ),
        i.forEach(r => {
            this.emit(P.TrackPublished, r)
        }
        ),
        !0
    }
    unpublishTrack(e, t) {
        const i = this.trackPublications.get(e);
        if (!i)
            return;
        const {track: r} = i;
        switch (r && (r.stop(),
        i.setTrack(void 0)),
        this.trackPublications.delete(e),
        i.kind) {
        case E.Kind.Audio:
            this.audioTrackPublications.delete(e);
            break;
        case E.Kind.Video:
            this.videoTrackPublications.delete(e);
            break
        }
        t && this.emit(P.TrackUnpublished, i)
    }
    setAudioOutput(e) {
        return m(this, void 0, void 0, function*() {
            this.audioOutput = e;
            const t = [];
            this.audioTrackPublications.forEach(i => {
                var r;
                i.track instanceof un && t.push(i.track.setSinkId((r = e.deviceId) !== null && r !== void 0 ? r : "default"))
            }
            ),
            yield Promise.all(t)
        })
    }
    emit(e) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            i[r - 1] = arguments[r];
        return this.log.trace("participant event", Object.assign(Object.assign({}, this.logContext), {
            event: e,
            args: i
        })),
        super.emit(e, ...i)
    }
}
var B;
(function(n) {
    n.Disconnected = "disconnected",
    n.Connecting = "connecting",
    n.Connected = "connected",
    n.Reconnecting = "reconnecting",
    n.SignalReconnecting = "signalReconnecting"
}
)(B || (B = {}));
const Sf = 4 * 1e3;
class Tf extends Ye.EventEmitter {
    constructor(e) {
        var t, i, r;
        super(),
        t = this,
        this.state = B.Disconnected,
        this.activeSpeakers = [],
        this.isE2EEEnabled = !1,
        this.audioEnabled = !0,
        this.isVideoPlaybackBlocked = !1,
        this.log = K,
        this.bufferedEvents = [],
        this.isResuming = !1,
        this.connect = (s, o, a) => m(this, void 0, void 0, function*() {
            var c;
            if (!_h())
                throw it() ? Error("WebRTC isn't detected, have you called registerGlobals?") : Error("LiveKit doesn't seem to be supported on this browser. Try to update your browser and make sure no browser extensions are disabling webRTC.");
            const d = yield this.disconnectLock.lock();
            if (this.state === B.Connected)
                return this.log.info("already connected to room ".concat(this.name), this.logContext),
                d(),
                Promise.resolve();
            if (this.connectFuture)
                return d(),
                this.connectFuture.promise;
            this.setAndEmitConnectionState(B.Connecting),
            ((c = this.regionUrlProvider) === null || c === void 0 ? void 0 : c.getServerUrl().toString()) !== s && (this.regionUrl = void 0,
            this.regionUrlProvider = void 0),
            fr(new URL(s)) && (this.regionUrlProvider === void 0 ? this.regionUrlProvider = new Js(s,o) : this.regionUrlProvider.updateToken(o),
            this.regionUrlProvider.fetchRegionSettings().then(h => {
                var f;
                (f = this.regionUrlProvider) === null || f === void 0 || f.setServerReportedRegions(h)
            }
            ).catch(h => {
                this.log.warn("could not fetch region settings", Object.assign(Object.assign({}, this.logContext), {
                    error: h
                }))
            }
            ));
            const u = (h, f, v) => m(this, void 0, void 0, function*() {
                var p, y;
                this.abortController && this.abortController.abort();
                const g = new AbortController;
                this.abortController = g,
                d?.();
                try {
                    yield this.attemptConnection(v ?? s, o, a, g),
                    this.abortController = void 0,
                    h()
                } catch (x) {
                    if (this.regionUrlProvider && x instanceof $ && x.reason !== ke.Cancelled && x.reason !== ke.NotAllowed) {
                        let _ = null;
                        try {
                            _ = yield this.regionUrlProvider.getNextBestRegionUrl((p = this.abortController) === null || p === void 0 ? void 0 : p.signal)
                        } catch (S) {
                            if (S instanceof $ && (S.status === 401 || S.reason === ke.Cancelled)) {
                                this.handleDisconnect(this.options.stopLocalTrackOnUnpublish),
                                f(S);
                                return
                            }
                        }
                        _ && !(!((y = this.abortController) === null || y === void 0) && y.signal.aborted) ? (this.log.info("Initial connection failed with ConnectionError: ".concat(x.message, ". Retrying with another region: ").concat(_), this.logContext),
                        this.recreateEngine(),
                        yield u(h, f, _)) : (this.handleDisconnect(this.options.stopLocalTrackOnUnpublish),
                        f(x))
                    } else
                        this.handleDisconnect(this.options.stopLocalTrackOnUnpublish),
                        f(x)
                }
            })
              , l = this.regionUrl;
            return this.regionUrl = void 0,
            this.connectFuture = new lc( (h, f) => {
                u(h, f, l)
            }
            , () => {
                this.clearConnectionFutures()
            }
            ),
            this.connectFuture.promise
        }),
        this.connectSignal = (s, o, a, c, d, u) => m(this, void 0, void 0, function*() {
            var l, h, f;
            const v = yield a.join(s, o, {
                autoSubscribe: c.autoSubscribe,
                adaptiveStream: typeof d.adaptiveStream == "object" ? !0 : d.adaptiveStream,
                maxRetries: c.maxRetries,
                e2eeEnabled: !!this.e2eeManager,
                websocketTimeout: c.websocketTimeout
            }, u.signal);
            let p = v.serverInfo;
            if (p || (p = {
                version: v.serverVersion,
                region: v.serverRegion
            }),
            this.serverInfo = p,
            this.log.debug("connected to Livekit Server ".concat(Object.entries(p).map(y => {
                let[g,x] = y;
                return "".concat(g, ": ").concat(x)
            }
            ).join(", ")), {
                room: (l = v.room) === null || l === void 0 ? void 0 : l.name,
                roomSid: (h = v.room) === null || h === void 0 ? void 0 : h.sid,
                identity: (f = v.participant) === null || f === void 0 ? void 0 : f.identity
            }),
            !p.version)
                throw new ch("unknown server version");
            return p.version === "0.15.1" && this.options.dynacast && (this.log.debug("disabling dynacast due to server version", this.logContext),
            d.dynacast = !1),
            v
        }),
        this.applyJoinResponse = s => {
            const o = s.participant;
            if (this.localParticipant.sid = o.sid,
            this.localParticipant.identity = o.identity,
            this.localParticipant.setEnabledPublishCodecs(s.enabledPublishCodecs),
            this.options.e2ee && this.e2eeManager)
                try {
                    this.e2eeManager.setSifTrailer(s.sifTrailer)
                } catch (a) {
                    this.log.error(a instanceof Error ? a.message : "Could not set SifTrailer", Object.assign(Object.assign({}, this.logContext), {
                        error: a
                    }))
                }
            this.handleParticipantUpdates([o, ...s.otherParticipants]),
            s.room && this.handleRoomUpdate(s.room)
        }
        ,
        this.attemptConnection = (s, o, a, c) => m(this, void 0, void 0, function*() {
            var d, u, l;
            this.state === B.Reconnecting || this.isResuming || !((d = this.engine) === null || d === void 0) && d.pendingReconnect ? (this.log.info("Reconnection attempt replaced by new connection attempt", this.logContext),
            this.recreateEngine()) : this.maybeCreateEngine(),
            !((u = this.regionUrlProvider) === null || u === void 0) && u.isCloud() && this.engine.setRegionUrlProvider(this.regionUrlProvider),
            this.acquireAudioContext(),
            this.connOptions = Object.assign(Object.assign({}, Or), a),
            this.connOptions.rtcConfig && (this.engine.rtcConfig = this.connOptions.rtcConfig),
            this.connOptions.peerConnectionTimeout && (this.engine.peerConnectionTimeout = this.connOptions.peerConnectionTimeout);
            try {
                const h = yield this.connectSignal(s, o, this.engine, this.connOptions, this.options, c);
                this.applyJoinResponse(h),
                this.setupLocalParticipantEvents(),
                this.emit(T.SignalConnected)
            } catch (h) {
                yield this.engine.close(),
                this.recreateEngine();
                const f = new $("could not establish signal connection");
                throw h instanceof Error && (f.message = "".concat(f.message, ": ").concat(h.message)),
                h instanceof $ && (f.reason = h.reason,
                f.status = h.status),
                this.log.debug("error trying to establish signal connection", Object.assign(Object.assign({}, this.logContext), {
                    error: h
                })),
                f
            }
            if (c.signal.aborted)
                throw yield this.engine.close(),
                this.recreateEngine(),
                new $("Connection attempt aborted");
            try {
                yield this.engine.waitForPCInitialConnection(this.connOptions.peerConnectionTimeout, c)
            } catch (h) {
                throw yield this.engine.close(),
                this.recreateEngine(),
                h
            }
            Ie() && this.options.disconnectOnPageLeave && (window.addEventListener("pagehide", this.onPageLeave),
            window.addEventListener("beforeunload", this.onPageLeave)),
            Ie() && (document.addEventListener("freeze", this.onPageLeave),
            (l = navigator.mediaDevices) === null || l === void 0 || l.addEventListener("devicechange", this.handleDeviceChange)),
            this.setAndEmitConnectionState(B.Connected),
            this.emit(T.Connected),
            this.registerConnectionReconcile()
        }),
        this.disconnect = function() {
            for (var s = arguments.length, o = new Array(s), a = 0; a < s; a++)
                o[a] = arguments[a];
            return m(t, [...o], void 0, function() {
                var c = this;
                let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                return function*() {
                    var u, l, h, f;
                    const v = yield c.disconnectLock.lock();
                    try {
                        if (c.state === B.Disconnected) {
                            c.log.debug("already disconnected", c.logContext);
                            return
                        }
                        c.log.info("disconnect from room", Object.assign({}, c.logContext)),
                        (c.state === B.Connecting || c.state === B.Reconnecting || c.isResuming) && (c.log.warn("abort connection attempt", c.logContext),
                        (u = c.abortController) === null || u === void 0 || u.abort(),
                        (h = (l = c.connectFuture) === null || l === void 0 ? void 0 : l.reject) === null || h === void 0 || h.call(l, new $("Client initiated disconnect")),
                        c.connectFuture = void 0),
                        !((f = c.engine) === null || f === void 0) && f.client.isDisconnected || (yield c.engine.client.sendLeave()),
                        c.engine && (yield c.engine.close()),
                        c.handleDisconnect(d, Lt.CLIENT_INITIATED),
                        c.engine = void 0
                    } finally {
                        v()
                    }
                }()
            })
        }
        ,
        this.onPageLeave = () => m(this, void 0, void 0, function*() {
            this.log.info("Page leave detected, disconnecting", this.logContext),
            yield this.disconnect()
        }),
        this.startAudio = () => m(this, void 0, void 0, function*() {
            const s = []
              , o = nt();
            if (o && o.os === "iOS") {
                const a = "livekit-dummy-audio-el";
                let c = document.getElementById(a);
                if (!c) {
                    c = document.createElement("audio"),
                    c.id = a,
                    c.autoplay = !0,
                    c.hidden = !0;
                    const d = Ci();
                    d.enabled = !0;
                    const u = new MediaStream([d]);
                    c.srcObject = u,
                    document.addEventListener("visibilitychange", () => {
                        c && (c.srcObject = document.hidden ? null : u,
                        document.hidden || (this.log.debug("page visible again, triggering startAudio to resume playback and update playback status", this.logContext),
                        this.startAudio()))
                    }
                    ),
                    document.body.append(c),
                    this.once(T.Disconnected, () => {
                        c?.remove(),
                        c = null
                    }
                    )
                }
                s.push(c)
            }
            this.remoteParticipants.forEach(a => {
                a.audioTrackPublications.forEach(c => {
                    c.track && c.track.attachedElements.forEach(d => {
                        s.push(d)
                    }
                    )
                }
                )
            }
            );
            try {
                yield Promise.all([this.acquireAudioContext(), ...s.map(a => (a.muted = !1,
                a.play()))]),
                this.handleAudioPlaybackStarted()
            } catch (a) {
                throw this.handleAudioPlaybackFailed(a),
                a
            }
        }),
        this.startVideo = () => m(this, void 0, void 0, function*() {
            const s = [];
            for (const o of this.remoteParticipants.values())
                o.videoTrackPublications.forEach(a => {
                    var c;
                    (c = a.track) === null || c === void 0 || c.attachedElements.forEach(d => {
                        s.includes(d) || s.push(d)
                    }
                    )
                }
                );
            yield Promise.all(s.map(o => o.play())).then( () => {
                this.handleVideoPlaybackStarted()
            }
            ).catch(o => {
                o.name === "NotAllowedError" ? this.handleVideoPlaybackFailed() : this.log.warn("Resuming video playback failed, make sure you call `startVideo` directly in a user gesture handler", this.logContext)
            }
            )
        }),
        this.handleRestarting = () => {
            this.clearConnectionReconcile(),
            this.isResuming = !1;
            for (const s of this.remoteParticipants.values())
                this.handleParticipantDisconnected(s.identity, s);
            this.setAndEmitConnectionState(B.Reconnecting) && this.emit(T.Reconnecting)
        }
        ,
        this.handleSignalRestarted = s => m(this, void 0, void 0, function*() {
            this.log.debug("signal reconnected to server, region ".concat(s.serverRegion), Object.assign(Object.assign({}, this.logContext), {
                region: s.serverRegion
            })),
            this.bufferedEvents = [],
            this.applyJoinResponse(s);
            try {
                yield this.localParticipant.republishAllTracks(void 0, !0)
            } catch (o) {
                this.log.error("error trying to re-publish tracks after reconnection", Object.assign(Object.assign({}, this.logContext), {
                    error: o
                }))
            }
            try {
                yield this.engine.waitForRestarted(),
                this.log.debug("fully reconnected to server", Object.assign(Object.assign({}, this.logContext), {
                    region: s.serverRegion
                }))
            } catch {
                return
            }
            this.setAndEmitConnectionState(B.Connected),
            this.emit(T.Reconnected),
            this.registerConnectionReconcile(),
            this.emitBufferedEvents()
        }),
        this.handleParticipantUpdates = s => {
            s.forEach(o => {
                var a;
                if (o.identity === this.localParticipant.identity) {
                    this.localParticipant.updateInfo(o);
                    return
                }
                o.identity === "" && (o.identity = (a = this.sidToIdentity.get(o.sid)) !== null && a !== void 0 ? a : "");
                let c = this.remoteParticipants.get(o.identity);
                o.state === Hi.DISCONNECTED ? this.handleParticipantDisconnected(o.identity, c) : c = this.getOrCreateParticipant(o.identity, o)
            }
            )
        }
        ,
        this.handleActiveSpeakersUpdate = s => {
            const o = []
              , a = {};
            s.forEach(c => {
                if (a[c.sid] = !0,
                c.sid === this.localParticipant.sid)
                    this.localParticipant.audioLevel = c.level,
                    this.localParticipant.setIsSpeaking(!0),
                    o.push(this.localParticipant);
                else {
                    const d = this.getRemoteParticipantBySid(c.sid);
                    d && (d.audioLevel = c.level,
                    d.setIsSpeaking(!0),
                    o.push(d))
                }
            }
            ),
            a[this.localParticipant.sid] || (this.localParticipant.audioLevel = 0,
            this.localParticipant.setIsSpeaking(!1)),
            this.remoteParticipants.forEach(c => {
                a[c.sid] || (c.audioLevel = 0,
                c.setIsSpeaking(!1))
            }
            ),
            this.activeSpeakers = o,
            this.emitWhenConnected(T.ActiveSpeakersChanged, o)
        }
        ,
        this.handleSpeakersChanged = s => {
            const o = new Map;
            this.activeSpeakers.forEach(c => {
                const d = this.remoteParticipants.get(c.identity);
                d && d.sid !== c.sid || o.set(c.sid, c)
            }
            ),
            s.forEach(c => {
                let d = this.getRemoteParticipantBySid(c.sid);
                c.sid === this.localParticipant.sid && (d = this.localParticipant),
                d && (d.audioLevel = c.level,
                d.setIsSpeaking(c.active),
                c.active ? o.set(c.sid, d) : o.delete(c.sid))
            }
            );
            const a = Array.from(o.values());
            a.sort( (c, d) => d.audioLevel - c.audioLevel),
            this.activeSpeakers = a,
            this.emitWhenConnected(T.ActiveSpeakersChanged, a)
        }
        ,
        this.handleStreamStateUpdate = s => {
            s.streamStates.forEach(o => {
                const a = this.getRemoteParticipantBySid(o.participantSid);
                if (!a)
                    return;
                const c = a.getTrackPublicationBySid(o.trackSid);
                if (!c || !c.track)
                    return;
                const d = E.streamStateFromProto(o.state);
                d !== c.track.streamState && (c.track.streamState = d,
                a.emit(P.TrackStreamStateChanged, c, c.track.streamState),
                this.emitWhenConnected(T.TrackStreamStateChanged, c, c.track.streamState, a))
            }
            )
        }
        ,
        this.handleSubscriptionPermissionUpdate = s => {
            const o = this.getRemoteParticipantBySid(s.participantSid);
            if (!o)
                return;
            const a = o.getTrackPublicationBySid(s.trackSid);
            a && a.setAllowed(s.allowed)
        }
        ,
        this.handleSubscriptionError = s => {
            const o = Array.from(this.remoteParticipants.values()).find(c => c.trackPublications.has(s.trackSid));
            if (!o)
                return;
            const a = o.getTrackPublicationBySid(s.trackSid);
            a && a.setSubscriptionError(s.err)
        }
        ,
        this.handleDataPacket = s => {
            const o = this.remoteParticipants.get(s.participantIdentity);
            s.value.case === "user" ? this.handleUserPacket(o, s.value.value, s.kind) : s.value.case === "transcription" ? this.handleTranscription(o, s.value.value) : s.value.case === "sipDtmf" ? this.handleSipDtmf(o, s.value.value) : s.value.case === "chatMessage" ? this.handleChatMessage(o, s.value.value) : s.value.case === "metrics" && this.handleMetrics(s.value.value, o)
        }
        ,
        this.handleUserPacket = (s, o, a) => {
            this.emit(T.DataReceived, o.payload, s, a, o.topic),
            s?.emit(P.DataReceived, o.payload, a)
        }
        ,
        this.handleSipDtmf = (s, o) => {
            this.emit(T.SipDTMFReceived, o, s),
            s?.emit(P.SipDTMFReceived, o)
        }
        ,
        this.bufferedSegments = new Map,
        this.handleTranscription = (s, o) => {
            const a = o.transcribedParticipantIdentity === this.localParticipant.identity ? this.localParticipant : this.getParticipantByIdentity(o.transcribedParticipantIdentity)
              , c = a?.trackPublications.get(o.trackId)
              , d = Lh(o, this.transcriptionReceivedTimes);
            c?.emit(A.TranscriptionReceived, d),
            a?.emit(P.TranscriptionReceived, d, c),
            this.emit(T.TranscriptionReceived, d, a, c)
        }
        ,
        this.handleChatMessage = (s, o) => {
            const a = Uh(o);
            this.emit(T.ChatMessage, a, s)
        }
        ,
        this.handleMetrics = (s, o) => {
            this.emit(T.MetricsReceived, s, o)
        }
        ,
        this.handleAudioPlaybackStarted = () => {
            this.canPlaybackAudio || (this.audioEnabled = !0,
            this.emit(T.AudioPlaybackStatusChanged, !0))
        }
        ,
        this.handleAudioPlaybackFailed = s => {
            this.log.warn("could not playback audio", Object.assign(Object.assign({}, this.logContext), {
                error: s
            })),
            this.canPlaybackAudio && (this.audioEnabled = !1,
            this.emit(T.AudioPlaybackStatusChanged, !1))
        }
        ,
        this.handleVideoPlaybackStarted = () => {
            this.isVideoPlaybackBlocked && (this.isVideoPlaybackBlocked = !1,
            this.emit(T.VideoPlaybackStatusChanged, !0))
        }
        ,
        this.handleVideoPlaybackFailed = () => {
            this.isVideoPlaybackBlocked || (this.isVideoPlaybackBlocked = !0,
            this.emit(T.VideoPlaybackStatusChanged, !1))
        }
        ,
        this.handleDeviceChange = () => m(this, void 0, void 0, function*() {
            const s = yield ge.getInstance().getDevices(void 0, !1)
              , o = ["audiooutput"];
            for (let a of o) {
                const c = s.filter(d => d.kind === a);
                c.length > 0 && !c.find(d => d.deviceId === this.getActiveDevice(a)) && (yield this.switchActiveDevice(a, c[0].deviceId))
            }
            this.emit(T.MediaDevicesChanged)
        }),
        this.handleRoomUpdate = s => {
            const o = this.roomInfo;
            this.roomInfo = s,
            o && o.metadata !== s.metadata && this.emitWhenConnected(T.RoomMetadataChanged, s.metadata),
            o?.activeRecording !== s.activeRecording && this.emitWhenConnected(T.RecordingStatusChanged, s.activeRecording)
        }
        ,
        this.handleConnectionQualityUpdate = s => {
            s.updates.forEach(o => {
                if (o.participantSid === this.localParticipant.sid) {
                    this.localParticipant.setConnectionQuality(o.quality);
                    return
                }
                const a = this.getRemoteParticipantBySid(o.participantSid);
                a && a.setConnectionQuality(o.quality)
            }
            )
        }
        ,
        this.onLocalParticipantMetadataChanged = s => {
            this.emit(T.ParticipantMetadataChanged, s, this.localParticipant)
        }
        ,
        this.onLocalParticipantNameChanged = s => {
            this.emit(T.ParticipantNameChanged, s, this.localParticipant)
        }
        ,
        this.onLocalAttributesChanged = s => {
            this.emit(T.ParticipantAttributesChanged, s, this.localParticipant)
        }
        ,
        this.onLocalTrackMuted = s => {
            this.emit(T.TrackMuted, s, this.localParticipant)
        }
        ,
        this.onLocalTrackUnmuted = s => {
            this.emit(T.TrackUnmuted, s, this.localParticipant)
        }
        ,
        this.onTrackProcessorUpdate = s => {
            var o;
            (o = s?.onPublish) === null || o === void 0 || o.call(s, this)
        }
        ,
        this.onLocalTrackPublished = s => m(this, void 0, void 0, function*() {
            var o, a, c, d, u, l;
            (o = s.track) === null || o === void 0 || o.on(A.TrackProcessorUpdate, this.onTrackProcessorUpdate),
            (a = s.track) === null || a === void 0 || a.on(A.Restarted, this.onLocalTrackRestarted),
            (u = (d = (c = s.track) === null || c === void 0 ? void 0 : c.getProcessor()) === null || d === void 0 ? void 0 : d.onPublish) === null || u === void 0 || u.call(d, this),
            this.emit(T.LocalTrackPublished, s, this.localParticipant),
            s.track instanceof me && (yield s.track.checkForSilence()) && this.emit(T.LocalAudioSilenceDetected, s);
            const h = yield(l = s.track) === null || l === void 0 ? void 0 : l.getDeviceId()
              , f = _s(s.source);
            f && h && h !== this.localParticipant.activeDeviceMap.get(f) && (this.localParticipant.activeDeviceMap.set(f, h),
            this.emit(T.ActiveDeviceChanged, f, h))
        }),
        this.onLocalTrackUnpublished = s => {
            var o, a;
            (o = s.track) === null || o === void 0 || o.off(A.TrackProcessorUpdate, this.onTrackProcessorUpdate),
            (a = s.track) === null || a === void 0 || a.off(A.Restarted, this.onLocalTrackRestarted),
            this.emit(T.LocalTrackUnpublished, s, this.localParticipant)
        }
        ,
        this.onLocalTrackRestarted = s => m(this, void 0, void 0, function*() {
            const o = yield s.getDeviceId(!1)
              , a = _s(s.source);
            a && o && o !== this.localParticipant.activeDeviceMap.get(a) && (this.log.debug("local track restarted, setting ".concat(a, " ").concat(o, " active"), this.logContext),
            this.localParticipant.activeDeviceMap.set(a, o),
            this.emit(T.ActiveDeviceChanged, a, o))
        }),
        this.onLocalConnectionQualityChanged = s => {
            this.emit(T.ConnectionQualityChanged, s, this.localParticipant)
        }
        ,
        this.onMediaDevicesError = s => {
            this.emit(T.MediaDevicesError, s)
        }
        ,
        this.onLocalParticipantPermissionsChanged = s => {
            this.emit(T.ParticipantPermissionsChanged, s, this.localParticipant)
        }
        ,
        this.onLocalChatMessageSent = s => {
            this.emit(T.ChatMessage, s, this.localParticipant)
        }
        ,
        this.setMaxListeners(100),
        this.remoteParticipants = new Map,
        this.sidToIdentity = new Map,
        this.options = Object.assign(Object.assign({}, $h), e),
        this.log = tt((i = this.options.loggerName) !== null && i !== void 0 ? i : je.Room),
        this.transcriptionReceivedTimes = new Map,
        this.options.audioCaptureDefaults = Object.assign(Object.assign({}, fc), e?.audioCaptureDefaults),
        this.options.videoCaptureDefaults = Object.assign(Object.assign({}, pc), e?.videoCaptureDefaults),
        this.options.publishDefaults = Object.assign(Object.assign({}, Yh), e?.publishDefaults),
        this.maybeCreateEngine(),
        this.disconnectLock = new _e,
        this.localParticipant = new br("","",this.engine,this.options),
        this.options.videoCaptureDefaults.deviceId && this.localParticipant.activeDeviceMap.set("videoinput", et(this.options.videoCaptureDefaults.deviceId)),
        this.options.audioCaptureDefaults.deviceId && this.localParticipant.activeDeviceMap.set("audioinput", et(this.options.audioCaptureDefaults.deviceId)),
        !((r = this.options.audioOutput) === null || r === void 0) && r.deviceId && this.switchActiveDevice("audiooutput", et(this.options.audioOutput.deviceId)).catch(s => this.log.warn("Could not set audio output: ".concat(s.message), this.logContext)),
        this.options.e2ee && this.setupE2EE()
    }
    setE2EEEnabled(e) {
        return m(this, void 0, void 0, function*() {
            if (this.e2eeManager)
                yield Promise.all([this.localParticipant.setE2EEEnabled(e)]),
                this.localParticipant.identity !== "" && this.e2eeManager.setParticipantCryptorEnabled(e, this.localParticipant.identity);
            else
                throw Error("e2ee not configured, please set e2ee settings within the room options")
        })
    }
    setupE2EE() {
        var e;
        this.options.e2ee && (this.e2eeManager = new jh(this.options.e2ee),
        this.e2eeManager.on(ut.ParticipantEncryptionStatusChanged, (t, i) => {
            i instanceof br && (this.isE2EEEnabled = t),
            this.emit(T.ParticipantEncryptionStatusChanged, t, i)
        }
        ),
        this.e2eeManager.on(ut.EncryptionError, t => this.emit(T.EncryptionError, t)),
        (e = this.e2eeManager) === null || e === void 0 || e.setup(this))
    }
    get logContext() {
        var e;
        return {
            room: this.name,
            roomID: (e = this.roomInfo) === null || e === void 0 ? void 0 : e.sid,
            participant: this.localParticipant.identity,
            pID: this.localParticipant.sid
        }
    }
    get isRecording() {
        var e, t;
        return (t = (e = this.roomInfo) === null || e === void 0 ? void 0 : e.activeRecording) !== null && t !== void 0 ? t : !1
    }
    getSid() {
        return m(this, void 0, void 0, function*() {
            return this.state === B.Disconnected ? "" : this.roomInfo && this.roomInfo.sid !== "" ? this.roomInfo.sid : new Promise( (e, t) => {
                const i = r => {
                    r.sid !== "" && (this.engine.off(O.RoomUpdate, i),
                    e(r.sid))
                }
                ;
                this.engine.on(O.RoomUpdate, i),
                this.once(T.Disconnected, () => {
                    this.engine.off(O.RoomUpdate, i),
                    t("Room disconnected before room server id was available")
                }
                )
            }
            )
        })
    }
    get name() {
        var e, t;
        return (t = (e = this.roomInfo) === null || e === void 0 ? void 0 : e.name) !== null && t !== void 0 ? t : ""
    }
    get metadata() {
        var e;
        return (e = this.roomInfo) === null || e === void 0 ? void 0 : e.metadata
    }
    get numParticipants() {
        var e, t;
        return (t = (e = this.roomInfo) === null || e === void 0 ? void 0 : e.numParticipants) !== null && t !== void 0 ? t : 0
    }
    get numPublishers() {
        var e, t;
        return (t = (e = this.roomInfo) === null || e === void 0 ? void 0 : e.numPublishers) !== null && t !== void 0 ? t : 0
    }
    maybeCreateEngine() {
        this.engine && !this.engine.isClosed || (this.engine = new hf(this.options),
        this.engine.on(O.ParticipantUpdate, this.handleParticipantUpdates).on(O.RoomUpdate, this.handleRoomUpdate).on(O.SpeakersChanged, this.handleSpeakersChanged).on(O.StreamStateChanged, this.handleStreamStateUpdate).on(O.ConnectionQualityUpdate, this.handleConnectionQualityUpdate).on(O.SubscriptionError, this.handleSubscriptionError).on(O.SubscriptionPermissionUpdate, this.handleSubscriptionPermissionUpdate).on(O.MediaTrackAdded, (e, t, i) => {
            this.onTrackAdded(e, t, i)
        }
        ).on(O.Disconnected, e => {
            this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, e)
        }
        ).on(O.ActiveSpeakersUpdate, this.handleActiveSpeakersUpdate).on(O.DataPacketReceived, this.handleDataPacket).on(O.Resuming, () => {
            this.clearConnectionReconcile(),
            this.isResuming = !0,
            this.log.info("Resuming signal connection", this.logContext),
            this.setAndEmitConnectionState(B.SignalReconnecting) && this.emit(T.SignalReconnecting)
        }
        ).on(O.Resumed, () => {
            this.registerConnectionReconcile(),
            this.isResuming = !1,
            this.log.info("Resumed signal connection", this.logContext),
            this.updateSubscriptions(),
            this.emitBufferedEvents(),
            this.setAndEmitConnectionState(B.Connected) && this.emit(T.Reconnected)
        }
        ).on(O.SignalResumed, () => {
            this.bufferedEvents = [],
            (this.state === B.Reconnecting || this.isResuming) && this.sendSyncState()
        }
        ).on(O.Restarting, this.handleRestarting).on(O.SignalRestarted, this.handleSignalRestarted).on(O.Offline, () => {
            this.setAndEmitConnectionState(B.Reconnecting) && this.emit(T.Reconnecting)
        }
        ).on(O.DCBufferStatusChanged, (e, t) => {
            this.emit(T.DCBufferStatusChanged, e, t)
        }
        ).on(O.LocalTrackSubscribed, e => {
            const t = this.localParticipant.getTrackPublications().find(i => {
                let {trackSid: r} = i;
                return r === e
            }
            );
            if (!t) {
                this.log.warn("could not find local track subscription for subscribed event", this.logContext);
                return
            }
            this.localParticipant.emit(P.LocalTrackSubscribed, t),
            this.emitWhenConnected(T.LocalTrackSubscribed, t, this.localParticipant)
        }
        ),
        this.localParticipant && this.localParticipant.setupEngine(this.engine),
        this.e2eeManager && this.e2eeManager.setupEngine(this.engine))
    }
    static getLocalDevices(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        return ge.getInstance().getDevices(e, t)
    }
    prepareConnection(e, t) {
        return m(this, void 0, void 0, function*() {
            if (this.state === B.Disconnected) {
                this.log.debug("prepareConnection to ".concat(e), this.logContext);
                try {
                    if (fr(new URL(e)) && t) {
                        this.regionUrlProvider = new Js(e,t);
                        const i = yield this.regionUrlProvider.getNextBestRegionUrl();
                        i && this.state === B.Disconnected && (this.regionUrl = i,
                        yield fetch(Os(i), {
                            method: "HEAD"
                        }),
                        this.log.debug("prepared connection to ".concat(i), this.logContext))
                    } else
                        yield fetch(Os(e), {
                            method: "HEAD"
                        })
                } catch (i) {
                    this.log.warn("could not prepare connection", Object.assign(Object.assign({}, this.logContext), {
                        error: i
                    }))
                }
            }
        })
    }
    getParticipantByIdentity(e) {
        return this.localParticipant.identity === e ? this.localParticipant : this.remoteParticipants.get(e)
    }
    clearConnectionFutures() {
        this.connectFuture = void 0
    }
    simulateScenario(e, t) {
        return m(this, void 0, void 0, function*() {
            let i = () => {}
            , r;
            switch (e) {
            case "signal-reconnect":
                yield this.engine.client.handleOnClose("simulate disconnect");
                break;
            case "speaker":
                r = new Ge({
                    scenario: {
                        case: "speakerUpdate",
                        value: 3
                    }
                });
                break;
            case "node-failure":
                r = new Ge({
                    scenario: {
                        case: "nodeFailure",
                        value: !0
                    }
                });
                break;
            case "server-leave":
                r = new Ge({
                    scenario: {
                        case: "serverLeave",
                        value: !0
                    }
                });
                break;
            case "migration":
                r = new Ge({
                    scenario: {
                        case: "migration",
                        value: !0
                    }
                });
                break;
            case "resume-reconnect":
                this.engine.failNext(),
                yield this.engine.client.handleOnClose("simulate resume-disconnect");
                break;
            case "disconnect-signal-on-resume":
                i = () => m(this, void 0, void 0, function*() {
                    yield this.engine.client.handleOnClose("simulate resume-disconnect")
                }),
                r = new Ge({
                    scenario: {
                        case: "disconnectSignalOnResume",
                        value: !0
                    }
                });
                break;
            case "disconnect-signal-on-resume-no-messages":
                i = () => m(this, void 0, void 0, function*() {
                    yield this.engine.client.handleOnClose("simulate resume-disconnect")
                }),
                r = new Ge({
                    scenario: {
                        case: "disconnectSignalOnResumeNoMessages",
                        value: !0
                    }
                });
                break;
            case "full-reconnect":
                this.engine.fullReconnectOnNext = !0,
                yield this.engine.client.handleOnClose("simulate full-reconnect");
                break;
            case "force-tcp":
            case "force-tls":
                r = new Ge({
                    scenario: {
                        case: "switchCandidateProtocol",
                        value: e === "force-tls" ? 2 : 1
                    }
                }),
                i = () => m(this, void 0, void 0, function*() {
                    const s = this.engine.client.onLeave;
                    s && s(new di({
                        reason: Lt.CLIENT_INITIATED,
                        action: Ut.RECONNECT
                    }))
                });
                break;
            case "subscriber-bandwidth":
                if (t === void 0 || typeof t != "number")
                    throw new Error("subscriber-bandwidth requires a number as argument");
                r = new Ge({
                    scenario: {
                        case: "subscriberBandwidth",
                        value: BigInt(t)
                    }
                });
                break;
            case "leave-full-reconnect":
                r = new Ge({
                    scenario: {
                        case: "leaveRequestFullReconnect",
                        value: !0
                    }
                })
            }
            r && (yield this.engine.client.sendSimulateScenario(r),
            yield i())
        })
    }
    get canPlaybackAudio() {
        return this.audioEnabled
    }
    get canPlaybackVideo() {
        return !this.isVideoPlaybackBlocked
    }
    getActiveDevice(e) {
        return this.localParticipant.activeDeviceMap.get(e)
    }
    switchActiveDevice(e, t) {
        return m(this, arguments, void 0, function(i, r) {
            var s = this;
            let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return function*() {
                var a, c, d, u, l, h, f;
                let v = !1
                  , p = !0;
                const y = o ? {
                    exact: r
                } : r;
                if (i === "audioinput") {
                    const g = (a = s.getActiveDevice(i)) !== null && a !== void 0 ? a : s.options.audioCaptureDefaults.deviceId;
                    s.options.audioCaptureDefaults.deviceId = y,
                    v = g !== y;
                    const x = Array.from(s.localParticipant.audioTrackPublications.values()).filter(_ => _.source === E.Source.Microphone);
                    try {
                        p = (yield Promise.all(x.map(_ => {
                            var S;
                            return (S = _.audioTrack) === null || S === void 0 ? void 0 : S.setDeviceId(y)
                        }
                        ))).every(_ => _ === !0)
                    } catch (_) {
                        throw s.options.audioCaptureDefaults.deviceId = g,
                        _
                    }
                } else if (i === "videoinput") {
                    const g = (c = s.getActiveDevice(i)) !== null && c !== void 0 ? c : s.options.videoCaptureDefaults.deviceId;
                    s.options.videoCaptureDefaults.deviceId = y,
                    v = g !== y;
                    const x = Array.from(s.localParticipant.videoTrackPublications.values()).filter(_ => _.source === E.Source.Camera);
                    try {
                        p = (yield Promise.all(x.map(_ => {
                            var S;
                            return (S = _.videoTrack) === null || S === void 0 ? void 0 : S.setDeviceId(y)
                        }
                        ))).every(_ => _ === !0)
                    } catch (_) {
                        throw s.options.videoCaptureDefaults.deviceId = g,
                        _
                    }
                } else if (i === "audiooutput") {
                    if (!hr() && !s.options.webAudioMix || s.options.webAudioMix && s.audioContext && !("setSinkId"in s.audioContext))
                        throw new Error("cannot switch audio output, setSinkId not supported");
                    s.options.webAudioMix && (r = (d = yield ge.getInstance().normalizeDeviceId("audiooutput", r)) !== null && d !== void 0 ? d : ""),
                    (u = (f = s.options).audioOutput) !== null && u !== void 0 || (f.audioOutput = {});
                    const g = (l = s.getActiveDevice(i)) !== null && l !== void 0 ? l : s.options.audioOutput.deviceId;
                    s.options.audioOutput.deviceId = r,
                    v = g !== y;
                    try {
                        s.options.webAudioMix && ((h = s.audioContext) === null || h === void 0 || h.setSinkId(r)),
                        yield Promise.all(Array.from(s.remoteParticipants.values()).map(x => x.setAudioOutput({
                            deviceId: r
                        })))
                    } catch (x) {
                        throw s.options.audioOutput.deviceId = g,
                        x
                    }
                }
                return v && p && (s.localParticipant.activeDeviceMap.set(i, r),
                s.emit(T.ActiveDeviceChanged, i, r)),
                p
            }()
        })
    }
    setupLocalParticipantEvents() {
        this.localParticipant.on(P.ParticipantMetadataChanged, this.onLocalParticipantMetadataChanged).on(P.ParticipantNameChanged, this.onLocalParticipantNameChanged).on(P.AttributesChanged, this.onLocalAttributesChanged).on(P.TrackMuted, this.onLocalTrackMuted).on(P.TrackUnmuted, this.onLocalTrackUnmuted).on(P.LocalTrackPublished, this.onLocalTrackPublished).on(P.LocalTrackUnpublished, this.onLocalTrackUnpublished).on(P.ConnectionQualityChanged, this.onLocalConnectionQualityChanged).on(P.MediaDevicesError, this.onMediaDevicesError).on(P.AudioStreamAcquired, this.startAudio).on(P.ChatMessage, this.onLocalChatMessageSent).on(P.ParticipantPermissionsChanged, this.onLocalParticipantPermissionsChanged)
    }
    recreateEngine() {
        var e;
        (e = this.engine) === null || e === void 0 || e.close(),
        this.engine = void 0,
        this.isResuming = !1,
        this.remoteParticipants.clear(),
        this.sidToIdentity.clear(),
        this.bufferedEvents = [],
        this.maybeCreateEngine()
    }
    onTrackAdded(e, t, i) {
        if (this.state === B.Connecting || this.state === B.Reconnecting) {
            const u = () => {
                this.onTrackAdded(e, t, i),
                l()
            }
              , l = () => {
                this.off(T.Reconnected, u),
                this.off(T.Connected, u),
                this.off(T.Disconnected, l)
            }
            ;
            this.once(T.Reconnected, u),
            this.once(T.Connected, u),
            this.once(T.Disconnected, l);
            return
        }
        if (this.state === B.Disconnected) {
            this.log.warn("skipping incoming track after Room disconnected", this.logContext);
            return
        }
        const r = Ph(t.id)
          , s = r[0];
        let o = r[1]
          , a = e.id;
        if (o && o.startsWith("TR") && (a = o),
        s === this.localParticipant.sid) {
            this.log.warn("tried to create RemoteParticipant for local participant", this.logContext);
            return
        }
        const c = Array.from(this.remoteParticipants.values()).find(u => u.sid === s);
        if (!c) {
            this.log.error("Tried to add a track for a participant, that's not present. Sid: ".concat(s), this.logContext);
            return
        }
        let d;
        this.options.adaptiveStream && (typeof this.options.adaptiveStream == "object" ? d = this.options.adaptiveStream : d = {}),
        c.addSubscribedMediaTrack(e, a, t, i, d)
    }
    handleDisconnect() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0
          , t = arguments.length > 1 ? arguments[1] : void 0;
        var i;
        if (this.clearConnectionReconcile(),
        this.isResuming = !1,
        this.bufferedEvents = [],
        this.transcriptionReceivedTimes.clear(),
        this.state !== B.Disconnected) {
            this.regionUrl = void 0;
            try {
                this.remoteParticipants.forEach(r => {
                    r.trackPublications.forEach(s => {
                        r.unpublishTrack(s.trackSid)
                    }
                    )
                }
                ),
                this.localParticipant.trackPublications.forEach(r => {
                    var s, o;
                    r.track && this.localParticipant.unpublishTrack(r.track, e),
                    e && ((s = r.track) === null || s === void 0 || s.detach(),
                    (o = r.track) === null || o === void 0 || o.stop())
                }
                ),
                this.localParticipant.off(P.ParticipantMetadataChanged, this.onLocalParticipantMetadataChanged).off(P.ParticipantNameChanged, this.onLocalParticipantNameChanged).off(P.AttributesChanged, this.onLocalAttributesChanged).off(P.TrackMuted, this.onLocalTrackMuted).off(P.TrackUnmuted, this.onLocalTrackUnmuted).off(P.LocalTrackPublished, this.onLocalTrackPublished).off(P.LocalTrackUnpublished, this.onLocalTrackUnpublished).off(P.ConnectionQualityChanged, this.onLocalConnectionQualityChanged).off(P.MediaDevicesError, this.onMediaDevicesError).off(P.AudioStreamAcquired, this.startAudio).off(P.ChatMessage, this.onLocalChatMessageSent).off(P.ParticipantPermissionsChanged, this.onLocalParticipantPermissionsChanged),
                this.localParticipant.trackPublications.clear(),
                this.localParticipant.videoTrackPublications.clear(),
                this.localParticipant.audioTrackPublications.clear(),
                this.remoteParticipants.clear(),
                this.sidToIdentity.clear(),
                this.activeSpeakers = [],
                this.audioContext && typeof this.options.webAudioMix == "boolean" && (this.audioContext.close(),
                this.audioContext = void 0),
                Ie() && (window.removeEventListener("beforeunload", this.onPageLeave),
                window.removeEventListener("pagehide", this.onPageLeave),
                window.removeEventListener("freeze", this.onPageLeave),
                (i = navigator.mediaDevices) === null || i === void 0 || i.removeEventListener("devicechange", this.handleDeviceChange))
            } finally {
                this.setAndEmitConnectionState(B.Disconnected),
                this.emit(T.Disconnected, t)
            }
        }
    }
    handleParticipantDisconnected(e, t) {
        var i;
        this.remoteParticipants.delete(e),
        t && (t.trackPublications.forEach(r => {
            t.unpublishTrack(r.trackSid, !0)
        }
        ),
        this.emit(T.ParticipantDisconnected, t),
        (i = this.localParticipant) === null || i === void 0 || i.handleParticipantDisconnected(t.identity))
    }
    acquireAudioContext() {
        return m(this, void 0, void 0, function*() {
            var e, t;
            if (typeof this.options.webAudioMix != "boolean" && this.options.webAudioMix.audioContext ? this.audioContext = this.options.webAudioMix.audioContext : (!this.audioContext || this.audioContext.state === "closed") && (this.audioContext = (e = ac()) !== null && e !== void 0 ? e : void 0),
            this.audioContext && this.audioContext.state === "suspended")
                try {
                    yield this.audioContext.resume()
                } catch (r) {
                    this.log.warn("Could not resume audio context", Object.assign(Object.assign({}, this.logContext), {
                        error: r
                    }))
                }
            this.options.webAudioMix && this.remoteParticipants.forEach(r => r.setAudioContext(this.audioContext)),
            this.localParticipant.setAudioContext(this.audioContext);
            const i = ((t = this.audioContext) === null || t === void 0 ? void 0 : t.state) === "running";
            i !== this.canPlaybackAudio && (this.audioEnabled = i,
            this.emit(T.AudioPlaybackStatusChanged, i))
        })
    }
    createParticipant(e, t) {
        var i;
        let r;
        return t ? r = ei.fromParticipantInfo(this.engine.client, t, {
            loggerContextCb: () => this.logContext,
            loggerName: this.options.loggerName
        }) : r = new ei(this.engine.client,"",e,void 0,void 0,{
            loggerContextCb: () => this.logContext,
            loggerName: this.options.loggerName
        }),
        this.options.webAudioMix && r.setAudioContext(this.audioContext),
        !((i = this.options.audioOutput) === null || i === void 0) && i.deviceId && r.setAudioOutput(this.options.audioOutput).catch(s => this.log.warn("Could not set audio output: ".concat(s.message), this.logContext)),
        r
    }
    getOrCreateParticipant(e, t) {
        if (this.remoteParticipants.has(e)) {
            const r = this.remoteParticipants.get(e);
            return t && r.updateInfo(t) && this.sidToIdentity.set(t.sid, t.identity),
            r
        }
        const i = this.createParticipant(e, t);
        return this.remoteParticipants.set(e, i),
        this.sidToIdentity.set(t.sid, t.identity),
        this.emitWhenConnected(T.ParticipantConnected, i),
        i.on(P.TrackPublished, r => {
            this.emitWhenConnected(T.TrackPublished, r, i)
        }
        ).on(P.TrackSubscribed, (r, s) => {
            r.kind === E.Kind.Audio ? (r.on(A.AudioPlaybackStarted, this.handleAudioPlaybackStarted),
            r.on(A.AudioPlaybackFailed, this.handleAudioPlaybackFailed)) : r.kind === E.Kind.Video && (r.on(A.VideoPlaybackFailed, this.handleVideoPlaybackFailed),
            r.on(A.VideoPlaybackStarted, this.handleVideoPlaybackStarted)),
            this.emit(T.TrackSubscribed, r, s, i)
        }
        ).on(P.TrackUnpublished, r => {
            this.emit(T.TrackUnpublished, r, i)
        }
        ).on(P.TrackUnsubscribed, (r, s) => {
            this.emit(T.TrackUnsubscribed, r, s, i)
        }
        ).on(P.TrackSubscriptionFailed, r => {
            this.emit(T.TrackSubscriptionFailed, r, i)
        }
        ).on(P.TrackMuted, r => {
            this.emitWhenConnected(T.TrackMuted, r, i)
        }
        ).on(P.TrackUnmuted, r => {
            this.emitWhenConnected(T.TrackUnmuted, r, i)
        }
        ).on(P.ParticipantMetadataChanged, r => {
            this.emitWhenConnected(T.ParticipantMetadataChanged, r, i)
        }
        ).on(P.ParticipantNameChanged, r => {
            this.emitWhenConnected(T.ParticipantNameChanged, r, i)
        }
        ).on(P.AttributesChanged, r => {
            this.emitWhenConnected(T.ParticipantAttributesChanged, r, i)
        }
        ).on(P.ConnectionQualityChanged, r => {
            this.emitWhenConnected(T.ConnectionQualityChanged, r, i)
        }
        ).on(P.ParticipantPermissionsChanged, r => {
            this.emitWhenConnected(T.ParticipantPermissionsChanged, r, i)
        }
        ).on(P.TrackSubscriptionStatusChanged, (r, s) => {
            this.emitWhenConnected(T.TrackSubscriptionStatusChanged, r, s, i)
        }
        ).on(P.TrackSubscriptionFailed, (r, s) => {
            this.emit(T.TrackSubscriptionFailed, r, i, s)
        }
        ).on(P.TrackSubscriptionPermissionChanged, (r, s) => {
            this.emitWhenConnected(T.TrackSubscriptionPermissionChanged, r, s, i)
        }
        ),
        t && i.updateInfo(t),
        i
    }
    sendSyncState() {
        const e = Array.from(this.remoteParticipants.values()).reduce( (i, r) => (i.push(...r.getTrackPublications()),
        i), [])
          , t = this.localParticipant.getTrackPublications();
        this.engine.sendSyncState(e, t)
    }
    updateSubscriptions() {
        for (const e of this.remoteParticipants.values())
            for (const t of e.videoTrackPublications.values())
                t.isSubscribed && t instanceof Tc && t.emitTrackUpdate()
    }
    getRemoteParticipantBySid(e) {
        const t = this.sidToIdentity.get(e);
        if (t)
            return this.remoteParticipants.get(t)
    }
    registerConnectionReconcile() {
        this.clearConnectionReconcile();
        let e = 0;
        this.connectionReconcileInterval = ve.setInterval( () => {
            !this.engine || this.engine.isClosed || !this.engine.verifyTransport() ? (e++,
            this.log.warn("detected connection state mismatch", Object.assign(Object.assign({}, this.logContext), {
                numFailures: e,
                engine: {
                    closed: this.engine.isClosed,
                    transportsConnected: this.engine.verifyTransport()
                }
            })),
            e >= 3 && (this.recreateEngine(),
            this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, Lt.STATE_MISMATCH))) : e = 0
        }
        , Sf)
    }
    clearConnectionReconcile() {
        this.connectionReconcileInterval && ve.clearInterval(this.connectionReconcileInterval)
    }
    setAndEmitConnectionState(e) {
        return e === this.state ? !1 : (this.state = e,
        this.emit(T.ConnectionStateChanged, this.state),
        !0)
    }
    emitBufferedEvents() {
        this.bufferedEvents.forEach(e => {
            let[t,i] = e;
            this.emit(t, ...i)
        }
        ),
        this.bufferedEvents = []
    }
    emitWhenConnected(e) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            i[r - 1] = arguments[r];
        if (this.state === B.Reconnecting || this.isResuming || !this.engine || this.engine.pendingReconnect)
            this.bufferedEvents.push([e, i]);
        else if (this.state === B.Connected)
            return this.emit(e, ...i);
        return !1
    }
    simulateParticipants(e) {
        return m(this, void 0, void 0, function*() {
            var t, i;
            const r = Object.assign({
                audio: !0,
                video: !0,
                useRealTracks: !1
            }, e.publish)
              , s = Object.assign({
                count: 9,
                audio: !1,
                video: !0,
                aspectRatios: [1.66, 1.7, 1.3]
            }, e.participants);
            if (this.handleDisconnect(),
            this.roomInfo = new wr({
                sid: "RM_SIMULATED",
                name: "simulated-room",
                emptyTimeout: 0,
                maxParticipants: 0,
                creationTime: te.parse(new Date().getTime()),
                metadata: "",
                numParticipants: 1,
                numPublishers: 1,
                turnPassword: "",
                enabledCodecs: [],
                activeRecording: !1
            }),
            this.localParticipant.updateInfo(new pn({
                identity: "simulated-local",
                name: "local-name"
            })),
            this.setupLocalParticipantEvents(),
            this.emit(T.SignalConnected),
            this.emit(T.Connected),
            this.setAndEmitConnectionState(B.Connected),
            r.video) {
                const o = new Zn(E.Kind.Video,new Mt({
                    source: ye.CAMERA,
                    sid: Math.floor(Math.random() * 1e4).toString(),
                    type: Ue.AUDIO,
                    name: "video-dummy"
                }),new be(r.useRealTracks ? (yield window.navigator.mediaDevices.getUserMedia({
                    video: !0
                })).getVideoTracks()[0] : Ms(160 * ((t = s.aspectRatios[0]) !== null && t !== void 0 ? t : 1), 160, !0, !0),void 0,!1,{
                    loggerName: this.options.loggerName,
                    loggerContextCb: () => this.logContext
                }),{
                    loggerName: this.options.loggerName,
                    loggerContextCb: () => this.logContext
                });
                this.localParticipant.addTrackPublication(o),
                this.localParticipant.emit(P.LocalTrackPublished, o)
            }
            if (r.audio) {
                const o = new Zn(E.Kind.Audio,new Mt({
                    source: ye.MICROPHONE,
                    sid: Math.floor(Math.random() * 1e4).toString(),
                    type: Ue.AUDIO
                }),new me(r.useRealTracks ? (yield navigator.mediaDevices.getUserMedia({
                    audio: !0
                })).getAudioTracks()[0] : Ci(),void 0,!1,this.audioContext,{
                    loggerName: this.options.loggerName,
                    loggerContextCb: () => this.logContext
                }),{
                    loggerName: this.options.loggerName,
                    loggerContextCb: () => this.logContext
                });
                this.localParticipant.addTrackPublication(o),
                this.localParticipant.emit(P.LocalTrackPublished, o)
            }
            for (let o = 0; o < s.count - 1; o += 1) {
                let a = new pn({
                    sid: Math.floor(Math.random() * 1e4).toString(),
                    identity: "simulated-".concat(o),
                    state: Hi.ACTIVE,
                    tracks: [],
                    joinedAt: te.parse(Date.now())
                });
                const c = this.getOrCreateParticipant(a.identity, a);
                if (s.video) {
                    const d = Ms(160 * ((i = s.aspectRatios[o % s.aspectRatios.length]) !== null && i !== void 0 ? i : 1), 160, !1, !0)
                      , u = new Mt({
                        source: ye.CAMERA,
                        sid: Math.floor(Math.random() * 1e4).toString(),
                        type: Ue.AUDIO
                    });
                    c.addSubscribedMediaTrack(d, u.sid, new MediaStream([d]), new RTCRtpReceiver),
                    a.tracks = [...a.tracks, u]
                }
                if (s.audio) {
                    const d = Ci()
                      , u = new Mt({
                        source: ye.MICROPHONE,
                        sid: Math.floor(Math.random() * 1e4).toString(),
                        type: Ue.AUDIO
                    });
                    c.addSubscribedMediaTrack(d, u.sid, new MediaStream([d]), new RTCRtpReceiver),
                    a.tracks = [...a.tracks, u]
                }
                c.updateInfo(a)
            }
        })
    }
    emit(e) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            i[r - 1] = arguments[r];
        if (e !== T.ActiveSpeakersChanged) {
            const s = Cc(i).filter(o => o !== void 0);
            this.log.debug("room event ".concat(e), Object.assign(Object.assign({}, this.logContext), {
                event: e,
                args: s
            }))
        }
        return super.emit(e, ...i)
    }
}
function Cc(n) {
    return n.map(e => {
        if (e)
            return Array.isArray(e) ? Cc(e) : typeof e == "object" ? "logContext"in e && e.logContext : e
    }
    )
}
var Le;
(function(n) {
    n[n.IDLE = 0] = "IDLE",
    n[n.RUNNING = 1] = "RUNNING",
    n[n.SKIPPED = 2] = "SKIPPED",
    n[n.SUCCESS = 3] = "SUCCESS",
    n[n.FAILED = 4] = "FAILED"
}
)(Le || (Le = {}));
class Ht extends Ye.EventEmitter {
    constructor(e, t) {
        let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        super(),
        this.status = Le.IDLE,
        this.logs = [],
        this.errorsAsWarnings = !1,
        this.url = e,
        this.token = t,
        this.name = this.constructor.name,
        this.room = new Tf(i.roomOptions),
        this.connectOptions = i.connectOptions,
        i.errorsAsWarnings && (this.errorsAsWarnings = i.errorsAsWarnings)
    }
    run(e) {
        return m(this, void 0, void 0, function*() {
            if (this.status !== Le.IDLE)
                throw Error("check is running already");
            this.setStatus(Le.RUNNING);
            try {
                yield this.perform()
            } catch (t) {
                t instanceof Error && (this.errorsAsWarnings ? this.appendWarning(t.message) : this.appendError(t.message))
            }
            return yield this.disconnect(),
            yield new Promise(t => setTimeout(t, 500)),
            this.status !== Le.SKIPPED && this.setStatus(this.isSuccess() ? Le.SUCCESS : Le.FAILED),
            e && e(),
            this.getInfo()
        })
    }
    isSuccess() {
        return !this.logs.some(e => e.level === "error")
    }
    connect() {
        return m(this, void 0, void 0, function*() {
            return this.room.state === B.Connected ? this.room : (yield this.room.connect(this.url, this.token, this.connectOptions),
            this.room)
        })
    }
    disconnect() {
        return m(this, void 0, void 0, function*() {
            this.room && this.room.state !== B.Disconnected && (yield this.room.disconnect(),
            yield new Promise(e => setTimeout(e, 500)))
        })
    }
    skip() {
        this.setStatus(Le.SKIPPED)
    }
    appendMessage(e) {
        this.logs.push({
            level: "info",
            message: e
        }),
        this.emit("update", this.getInfo())
    }
    appendWarning(e) {
        this.logs.push({
            level: "warning",
            message: e
        }),
        this.emit("update", this.getInfo())
    }
    appendError(e) {
        this.logs.push({
            level: "error",
            message: e
        }),
        this.emit("update", this.getInfo())
    }
    setStatus(e) {
        this.status = e,
        this.emit("update", this.getInfo())
    }
    get engine() {
        var e;
        return (e = this.room) === null || e === void 0 ? void 0 : e.engine
    }
    getInfo() {
        return {
            logs: this.logs,
            name: this.name,
            status: this.status,
            description: this.description
        }
    }
}
class Cf extends Ht {
    get description() {
        return "Can publish audio"
    }
    perform() {
        return m(this, void 0, void 0, function*() {
            var e;
            const t = yield this.connect()
              , i = yield bf();
            t.localParticipant.publishTrack(i),
            yield new Promise(o => setTimeout(o, 3e3));
            const r = yield(e = i.sender) === null || e === void 0 ? void 0 : e.getStats();
            if (!r)
                throw new Error("Could not get RTCStats");
            let s = 0;
            if (r.forEach(o => {
                o.type === "outbound-rtp" && (o.kind === "audio" || !o.kind && o.mediaType === "audio") && (s = o.packetsSent)
            }
            ),
            s === 0)
                throw new Error("Could not determine packets are sent");
            this.appendMessage("published ".concat(s, " audio packets"))
        })
    }
}
class wf extends Ht {
    get description() {
        return "Can publish video"
    }
    perform() {
        return m(this, void 0, void 0, function*() {
            var e;
            const t = yield this.connect()
              , i = yield vf();
            t.localParticipant.publishTrack(i),
            yield new Promise(o => setTimeout(o, 5e3));
            const r = yield(e = i.sender) === null || e === void 0 ? void 0 : e.getStats();
            if (!r)
                throw new Error("Could not get RTCStats");
            let s = 0;
            if (r.forEach(o => {
                o.type === "outbound-rtp" && (o.kind === "video" || !o.kind && o.mediaType === "video") && (s += o.packetsSent)
            }
            ),
            s === 0)
                throw new Error("Could not determine packets are sent");
            this.appendMessage("published ".concat(s, " video packets"))
        })
    }
}
class Pf extends Ht {
    get description() {
        return "Resuming connection after interruption"
    }
    perform() {
        return m(this, void 0, void 0, function*() {
            var e;
            const t = yield this.connect();
            let i = !1, r = !1, s;
            const o = new Promise(d => {
                setTimeout(d, 5e3),
                s = d
            }
            )
              , a = () => {
                i = !0
            }
            ;
            t.on(T.SignalReconnecting, a).on(T.Reconnecting, a).on(T.Reconnected, () => {
                r = !0,
                s(!0)
            }
            ),
            (e = t.engine.client.ws) === null || e === void 0 || e.close();
            const c = t.engine.client.onClose;
            if (c && c(""),
            yield o,
            i) {
                if (!r || t.state !== B.Connected)
                    throw this.appendWarning("reconnection is only possible in Redis-based configurations"),
                    new Error("Not able to reconnect")
            } else
                throw new Error("Did not attempt to reconnect")
        })
    }
}
class Ef extends Ht {
    get description() {
        return "Can connect via TURN"
    }
    perform() {
        return m(this, void 0, void 0, function*() {
            var e, t;
            const i = new Mr
              , r = yield i.join(this.url, this.token, {
                autoSubscribe: !0,
                maxRetries: 0,
                e2eeEnabled: !1,
                websocketTimeout: 15e3
            });
            let s = !1
              , o = !1
              , a = !1;
            for (let c of r.iceServers)
                for (let d of c.urls)
                    d.startsWith("turn:") ? (o = !0,
                    a = !0) : d.startsWith("turns:") && (o = !0,
                    a = !0,
                    s = !0),
                    d.startsWith("stun:") && (a = !0);
            a ? o && !s && this.appendWarning("TURN is configured server side, but TURN/TLS is unavailable.") : this.appendWarning("No STUN servers configured on server side."),
            yield i.close(),
            !((t = (e = this.connectOptions) === null || e === void 0 ? void 0 : e.rtcConfig) === null || t === void 0) && t.iceServers || o ? yield this.room.connect(this.url, this.token, {
                rtcConfig: {
                    iceTransportPolicy: "relay"
                }
            }) : (this.appendWarning("No TURN servers configured."),
            this.skip(),
            yield new Promise(c => setTimeout(c, 0)))
        })
    }
}
class Rf extends Ht {
    get description() {
        return "Establishing WebRTC connection"
    }
    perform() {
        return m(this, void 0, void 0, function*() {
            let e = !1
              , t = !1;
            this.room.on(T.SignalConnected, () => {
                const i = this.room.engine.client.onTrickle;
                this.room.engine.client.onTrickle = (r, s) => {
                    if (r.candidate) {
                        const o = new RTCIceCandidate(r);
                        let a = "".concat(o.protocol, " ").concat(o.address, ":").concat(o.port, " ").concat(o.type);
                        o.address && (_f(o.address) ? a += " (private)" : o.protocol === "tcp" && o.tcpType === "passive" ? (e = !0,
                        a += " (passive)") : o.protocol === "udp" && (t = !0)),
                        this.appendMessage(a)
                    }
                    i && i(r, s)
                }
                ,
                this.room.engine.pcManager && (this.room.engine.pcManager.subscriber.onIceCandidateError = r => {
                    r instanceof RTCPeerConnectionIceErrorEvent && this.appendWarning("error with ICE candidate: ".concat(r.errorCode, " ").concat(r.errorText, " ").concat(r.url))
                }
                )
            }
            );
            try {
                yield this.connect(),
                K.info("now the room is connected")
            } catch (i) {
                throw this.appendWarning("ports need to be open on firewall in order to connect."),
                i
            }
            e || this.appendWarning("Server is not configured for ICE/TCP"),
            t || this.appendWarning("No public IPv4 UDP candidates were found. Your server is likely not configured correctly")
        })
    }
}
function _f(n) {
    const e = n.split(".");
    if (e.length === 4) {
        if (e[0] === "10")
            return !0;
        if (e[0] === "192" && e[1] === "168")
            return !0;
        if (e[0] === "172") {
            const t = parseInt(e[1], 10);
            if (t >= 16 && t <= 31)
                return !0
        }
    }
    return !1
}
class If extends Ht {
    get description() {
        return "Connecting to signal connection via WebSocket"
    }
    perform() {
        return m(this, void 0, void 0, function*() {
            var e, t, i;
            (this.url.startsWith("ws:") || this.url.startsWith("http:")) && this.appendWarning("Server is insecure, clients may block connections to it");
            let r = new Mr;
            const s = yield r.join(this.url, this.token, {
                autoSubscribe: !0,
                maxRetries: 0,
                e2eeEnabled: !1,
                websocketTimeout: 15e3
            });
            this.appendMessage("Connected to server, version ".concat(s.serverVersion, ".")),
            ((e = s.serverInfo) === null || e === void 0 ? void 0 : e.edition) === fa.Cloud && (!((t = s.serverInfo) === null || t === void 0) && t.region) && this.appendMessage("LiveKit Cloud: ".concat((i = s.serverInfo) === null || i === void 0 ? void 0 : i.region)),
            yield r.close()
        })
    }
}
class tg extends Ye.EventEmitter {
    constructor(e, t) {
        let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        super(),
        this.options = {},
        this.checkResults = new Map,
        this.url = e,
        this.token = t,
        this.options = i
    }
    getNextCheckId() {
        const e = this.checkResults.size;
        return this.checkResults.set(e, {
            logs: [],
            status: Le.IDLE,
            name: "",
            description: ""
        }),
        e
    }
    updateCheck(e, t) {
        this.checkResults.set(e, t),
        this.emit("checkUpdate", e, t)
    }
    isSuccess() {
        return Array.from(this.checkResults.values()).every(e => e.status !== Le.FAILED)
    }
    getResults() {
        return Array.from(this.checkResults.values())
    }
    createAndRunCheck(e) {
        return m(this, void 0, void 0, function*() {
            const t = this.getNextCheckId()
              , i = new e(this.url,this.token,this.options)
              , r = o => {
                this.updateCheck(t, o)
            }
            ;
            i.on("update", r);
            const s = yield i.run();
            return i.off("update", r),
            s
        })
    }
    checkWebsocket() {
        return m(this, void 0, void 0, function*() {
            return this.createAndRunCheck(If)
        })
    }
    checkWebRTC() {
        return m(this, void 0, void 0, function*() {
            return this.createAndRunCheck(Rf)
        })
    }
    checkTURN() {
        return m(this, void 0, void 0, function*() {
            return this.createAndRunCheck(Ef)
        })
    }
    checkReconnect() {
        return m(this, void 0, void 0, function*() {
            return this.createAndRunCheck(Pf)
        })
    }
    checkPublishAudio() {
        return m(this, void 0, void 0, function*() {
            return this.createAndRunCheck(Cf)
        })
    }
    checkPublishVideo() {
        return m(this, void 0, void 0, function*() {
            return this.createAndRunCheck(wf)
        })
    }
}
var xf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Af(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var wc = {
    exports: {}
};
(function(n) {
    (function(e, t) {
        n.exports ? n.exports = t() : e.log = t()
    }
    )(xf, function() {
        var e = function() {}
          , t = "undefined"
          , i = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent)
          , r = ["trace", "debug", "info", "warn", "error"]
          , s = {}
          , o = null;
        function a(p, y) {
            var g = p[y];
            if (typeof g.bind == "function")
                return g.bind(p);
            try {
                return Function.prototype.bind.call(g, p)
            } catch {
                return function() {
                    return Function.prototype.apply.apply(g, [p, arguments])
                }
            }
        }
        function c() {
            console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])),
            console.trace && console.trace()
        }
        function d(p) {
            return p === "debug" && (p = "log"),
            typeof console === t ? !1 : p === "trace" && i ? c : console[p] !== void 0 ? a(console, p) : console.log !== void 0 ? a(console, "log") : e
        }
        function u() {
            for (var p = this.getLevel(), y = 0; y < r.length; y++) {
                var g = r[y];
                this[g] = y < p ? e : this.methodFactory(g, p, this.name)
            }
            if (this.log = this.debug,
            typeof console === t && p < this.levels.SILENT)
                return "No console available for logging"
        }
        function l(p) {
            return function() {
                typeof console !== t && (u.call(this),
                this[p].apply(this, arguments))
            }
        }
        function h(p, y, g) {
            return d(p) || l.apply(this, arguments)
        }
        function f(p, y) {
            var g = this, x, _, S, b = "loglevel";
            typeof p == "string" ? b += ":" + p : typeof p == "symbol" && (b = void 0);
            function w(I) {
                var M = (r[I] || "silent").toUpperCase();
                if (!(typeof window === t || !b)) {
                    try {
                        window.localStorage[b] = M;
                        return
                    } catch {}
                    try {
                        window.document.cookie = encodeURIComponent(b) + "=" + M + ";"
                    } catch {}
                }
            }
            function D() {
                var I;
                if (!(typeof window === t || !b)) {
                    try {
                        I = window.localStorage[b]
                    } catch {}
                    if (typeof I === t)
                        try {
                            var M = window.document.cookie
                              , X = encodeURIComponent(b)
                              , z = M.indexOf(X + "=");
                            z !== -1 && (I = /^([^;]+)/.exec(M.slice(z + X.length + 1))[1])
                        } catch {}
                    return g.levels[I] === void 0 && (I = void 0),
                    I
                }
            }
            function N() {
                if (!(typeof window === t || !b)) {
                    try {
                        window.localStorage.removeItem(b)
                    } catch {}
                    try {
                        window.document.cookie = encodeURIComponent(b) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                    } catch {}
                }
            }
            function U(I) {
                var M = I;
                if (typeof M == "string" && g.levels[M.toUpperCase()] !== void 0 && (M = g.levels[M.toUpperCase()]),
                typeof M == "number" && M >= 0 && M <= g.levels.SILENT)
                    return M;
                throw new TypeError("log.setLevel() called with invalid level: " + I)
            }
            g.name = p,
            g.levels = {
                TRACE: 0,
                DEBUG: 1,
                INFO: 2,
                WARN: 3,
                ERROR: 4,
                SILENT: 5
            },
            g.methodFactory = y || h,
            g.getLevel = function() {
                return S ?? _ ?? x
            }
            ,
            g.setLevel = function(I, M) {
                return S = U(I),
                M !== !1 && w(S),
                u.call(g)
            }
            ,
            g.setDefaultLevel = function(I) {
                _ = U(I),
                D() || g.setLevel(I, !1)
            }
            ,
            g.resetLevel = function() {
                S = null,
                N(),
                u.call(g)
            }
            ,
            g.enableAll = function(I) {
                g.setLevel(g.levels.TRACE, I)
            }
            ,
            g.disableAll = function(I) {
                g.setLevel(g.levels.SILENT, I)
            }
            ,
            g.rebuild = function() {
                if (o !== g && (x = U(o.getLevel())),
                u.call(g),
                o === g)
                    for (var I in s)
                        s[I].rebuild()
            }
            ,
            x = U(o ? o.getLevel() : "WARN");
            var L = D();
            L != null && (S = U(L)),
            u.call(g)
        }
        o = new f,
        o.getLogger = function(p) {
            if (typeof p != "symbol" && typeof p != "string" || p === "")
                throw new TypeError("You must supply a name when creating a logger.");
            var y = s[p];
            return y || (y = s[p] = new f(p,o.methodFactory)),
            y
        }
        ;
        var v = typeof window !== t ? window.log : void 0;
        return o.noConflict = function() {
            return typeof window !== t && window.log === o && (window.log = v),
            o
        }
        ,
        o.getLoggers = function() {
            return s
        }
        ,
        o.default = o,
        o
    })
}
)(wc);
var Df = wc.exports;
const Mf = Af(Df);
var yr = function(n, e) {
    return yr = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, i) {
        t.__proto__ = i
    }
    || function(t, i) {
        for (var r in i)
            Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
    }
    ,
    yr(n, e)
};
function rt(n, e) {
    if (typeof e != "function" && e !== null)
        throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    yr(n, e);
    function t() {
        this.constructor = n
    }
    n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype,
    new t)
}
function Of(n, e, t, i) {
    function r(s) {
        return s instanceof t ? s : new t(function(o) {
            o(s)
        }
        )
    }
    return new (t || (t = Promise))(function(s, o) {
        function a(u) {
            try {
                d(i.next(u))
            } catch (l) {
                o(l)
            }
        }
        function c(u) {
            try {
                d(i.throw(u))
            } catch (l) {
                o(l)
            }
        }
        function d(u) {
            u.done ? s(u.value) : r(u.value).then(a, c)
        }
        d((i = i.apply(n, [])).next())
    }
    )
}
function Pc(n, e) {
    var t = {
        label: 0,
        sent: function() {
            if (s[0] & 1)
                throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    }, i, r, s, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return o.next = a(0),
    o.throw = a(1),
    o.return = a(2),
    typeof Symbol == "function" && (o[Symbol.iterator] = function() {
        return this
    }
    ),
    o;
    function a(d) {
        return function(u) {
            return c([d, u])
        }
    }
    function c(d) {
        if (i)
            throw new TypeError("Generator is already executing.");
        for (; o && (o = 0,
        d[0] && (t = 0)),
        t; )
            try {
                if (i = 1,
                r && (s = d[0] & 2 ? r.return : d[0] ? r.throw || ((s = r.return) && s.call(r),
                0) : r.next) && !(s = s.call(r, d[1])).done)
                    return s;
                switch (r = 0,
                s && (d = [d[0] & 2, s.value]),
                d[0]) {
                case 0:
                case 1:
                    s = d;
                    break;
                case 4:
                    return t.label++,
                    {
                        value: d[1],
                        done: !1
                    };
                case 5:
                    t.label++,
                    r = d[1],
                    d = [0];
                    continue;
                case 7:
                    d = t.ops.pop(),
                    t.trys.pop();
                    continue;
                default:
                    if (s = t.trys,
                    !(s = s.length > 0 && s[s.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                        t = 0;
                        continue
                    }
                    if (d[0] === 3 && (!s || d[1] > s[0] && d[1] < s[3])) {
                        t.label = d[1];
                        break
                    }
                    if (d[0] === 6 && t.label < s[1]) {
                        t.label = s[1],
                        s = d;
                        break
                    }
                    if (s && t.label < s[2]) {
                        t.label = s[2],
                        t.ops.push(d);
                        break
                    }
                    s[2] && t.ops.pop(),
                    t.trys.pop();
                    continue
                }
                d = e.call(n, t)
            } catch (u) {
                d = [6, u],
                r = 0
            } finally {
                i = s = 0
            }
        if (d[0] & 5)
            throw d[1];
        return {
            value: d[0] ? d[1] : void 0,
            done: !0
        }
    }
}
function Kt(n) {
    var e = typeof Symbol == "function" && Symbol.iterator
      , t = e && n[e]
      , i = 0;
    if (t)
        return t.call(n);
    if (n && typeof n.length == "number")
        return {
            next: function() {
                return n && i >= n.length && (n = void 0),
                {
                    value: n && n[i++],
                    done: !n
                }
            }
        };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function ti(n, e) {
    var t = typeof Symbol == "function" && n[Symbol.iterator];
    if (!t)
        return n;
    var i = t.call(n), r, s = [], o;
    try {
        for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; )
            s.push(r.value)
    } catch (a) {
        o = {
            error: a
        }
    } finally {
        try {
            r && !r.done && (t = i.return) && t.call(i)
        } finally {
            if (o)
                throw o.error
        }
    }
    return s
}
function ni(n, e, t) {
    if (arguments.length === 2)
        for (var i = 0, r = e.length, s; i < r; i++)
            (s || !(i in e)) && (s || (s = Array.prototype.slice.call(e, 0, i)),
            s[i] = e[i]);
    return n.concat(s || Array.prototype.slice.call(e))
}
function qt(n) {
    return this instanceof qt ? (this.v = n,
    this) : new qt(n)
}
function Nf(n, e, t) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var i = t.apply(n, e || []), r, s = [];
    return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype),
    a("next"),
    a("throw"),
    a("return", o),
    r[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    r;
    function o(f) {
        return function(v) {
            return Promise.resolve(v).then(f, l)
        }
    }
    function a(f, v) {
        i[f] && (r[f] = function(p) {
            return new Promise(function(y, g) {
                s.push([f, p, y, g]) > 1 || c(f, p)
            }
            )
        }
        ,
        v && (r[f] = v(r[f])))
    }
    function c(f, v) {
        try {
            d(i[f](v))
        } catch (p) {
            h(s[0][3], p)
        }
    }
    function d(f) {
        f.value instanceof qt ? Promise.resolve(f.value.v).then(u, l) : h(s[0][2], f)
    }
    function u(f) {
        c("next", f)
    }
    function l(f) {
        c("throw", f)
    }
    function h(f, v) {
        f(v),
        s.shift(),
        s.length && c(s[0][0], s[0][1])
    }
}
function Lf(n) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var e = n[Symbol.asyncIterator], t;
    return e ? e.call(n) : (n = typeof Kt == "function" ? Kt(n) : n[Symbol.iterator](),
    t = {},
    i("next"),
    i("throw"),
    i("return"),
    t[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    t);
    function i(s) {
        t[s] = n[s] && function(o) {
            return new Promise(function(a, c) {
                o = n[s](o),
                r(a, c, o.done, o.value)
            }
            )
        }
    }
    function r(s, o, a, c) {
        Promise.resolve(c).then(function(d) {
            s({
                value: d,
                done: a
            })
        }, o)
    }
}
function he(n) {
    return typeof n == "function"
}
function Lr(n) {
    var e = function(i) {
        Error.call(i),
        i.stack = new Error().stack
    }
      , t = n(e);
    return t.prototype = Object.create(Error.prototype),
    t.prototype.constructor = t,
    t
}
var Ai = Lr(function(n) {
    return function(e) {
        n(this),
        this.message = e ? e.length + ` errors occurred during unsubscription:
` + e.map(function(t, i) {
            return i + 1 + ") " + t.toString()
        }).join(`
  `) : "",
        this.name = "UnsubscriptionError",
        this.errors = e
    }
});
function ii(n, e) {
    if (n) {
        var t = n.indexOf(e);
        0 <= t && n.splice(t, 1)
    }
}
var gn = function() {
    function n(e) {
        this.initialTeardown = e,
        this.closed = !1,
        this._parentage = null,
        this._finalizers = null
    }
    return n.prototype.unsubscribe = function() {
        var e, t, i, r, s;
        if (!this.closed) {
            this.closed = !0;
            var o = this._parentage;
            if (o)
                if (this._parentage = null,
                Array.isArray(o))
                    try {
                        for (var a = Kt(o), c = a.next(); !c.done; c = a.next()) {
                            var d = c.value;
                            d.remove(this)
                        }
                    } catch (p) {
                        e = {
                            error: p
                        }
                    } finally {
                        try {
                            c && !c.done && (t = a.return) && t.call(a)
                        } finally {
                            if (e)
                                throw e.error
                        }
                    }
                else
                    o.remove(this);
            var u = this.initialTeardown;
            if (he(u))
                try {
                    u()
                } catch (p) {
                    s = p instanceof Ai ? p.errors : [p]
                }
            var l = this._finalizers;
            if (l) {
                this._finalizers = null;
                try {
                    for (var h = Kt(l), f = h.next(); !f.done; f = h.next()) {
                        var v = f.value;
                        try {
                            Xs(v)
                        } catch (p) {
                            s = s ?? [],
                            p instanceof Ai ? s = ni(ni([], ti(s)), ti(p.errors)) : s.push(p)
                        }
                    }
                } catch (p) {
                    i = {
                        error: p
                    }
                } finally {
                    try {
                        f && !f.done && (r = h.return) && r.call(h)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
            }
            if (s)
                throw new Ai(s)
        }
    }
    ,
    n.prototype.add = function(e) {
        var t;
        if (e && e !== this)
            if (this.closed)
                Xs(e);
            else {
                if (e instanceof n) {
                    if (e.closed || e._hasParent(this))
                        return;
                    e._addParent(this)
                }
                (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(e)
            }
    }
    ,
    n.prototype._hasParent = function(e) {
        var t = this._parentage;
        return t === e || Array.isArray(t) && t.includes(e)
    }
    ,
    n.prototype._addParent = function(e) {
        var t = this._parentage;
        this._parentage = Array.isArray(t) ? (t.push(e),
        t) : t ? [t, e] : e
    }
    ,
    n.prototype._removeParent = function(e) {
        var t = this._parentage;
        t === e ? this._parentage = null : Array.isArray(t) && ii(t, e)
    }
    ,
    n.prototype.remove = function(e) {
        var t = this._finalizers;
        t && ii(t, e),
        e instanceof n && e._removeParent(this)
    }
    ,
    n.EMPTY = function() {
        var e = new n;
        return e.closed = !0,
        e
    }(),
    n
}()
  , Ec = gn.EMPTY;
function Rc(n) {
    return n instanceof gn || n && "closed"in n && he(n.remove) && he(n.add) && he(n.unsubscribe)
}
function Xs(n) {
    he(n) ? n() : n.unsubscribe()
}
var Uf = {
    Promise: void 0
}
  , Ff = {
    setTimeout: function(n, e) {
        for (var t = [], i = 2; i < arguments.length; i++)
            t[i - 2] = arguments[i];
        return setTimeout.apply(void 0, ni([n, e], ti(t)))
    },
    clearTimeout: function(n) {
        return clearTimeout(n)
    },
    delegate: void 0
};
function _c(n) {
    Ff.setTimeout(function() {
        throw n
    })
}
function Zs() {}
function zn(n) {
    n()
}
var Ur = function(n) {
    rt(e, n);
    function e(t) {
        var i = n.call(this) || this;
        return i.isStopped = !1,
        t ? (i.destination = t,
        Rc(t) && t.add(i)) : i.destination = Bf,
        i
    }
    return e.create = function(t, i, r) {
        return new kr(t,i,r)
    }
    ,
    e.prototype.next = function(t) {
        this.isStopped || this._next(t)
    }
    ,
    e.prototype.error = function(t) {
        this.isStopped || (this.isStopped = !0,
        this._error(t))
    }
    ,
    e.prototype.complete = function() {
        this.isStopped || (this.isStopped = !0,
        this._complete())
    }
    ,
    e.prototype.unsubscribe = function() {
        this.closed || (this.isStopped = !0,
        n.prototype.unsubscribe.call(this),
        this.destination = null)
    }
    ,
    e.prototype._next = function(t) {
        this.destination.next(t)
    }
    ,
    e.prototype._error = function(t) {
        try {
            this.destination.error(t)
        } finally {
            this.unsubscribe()
        }
    }
    ,
    e.prototype._complete = function() {
        try {
            this.destination.complete()
        } finally {
            this.unsubscribe()
        }
    }
    ,
    e
}(gn)
  , jf = function() {
    function n(e) {
        this.partialObserver = e
    }
    return n.prototype.next = function(e) {
        var t = this.partialObserver;
        if (t.next)
            try {
                t.next(e)
            } catch (i) {
                _n(i)
            }
    }
    ,
    n.prototype.error = function(e) {
        var t = this.partialObserver;
        if (t.error)
            try {
                t.error(e)
            } catch (i) {
                _n(i)
            }
        else
            _n(e)
    }
    ,
    n.prototype.complete = function() {
        var e = this.partialObserver;
        if (e.complete)
            try {
                e.complete()
            } catch (t) {
                _n(t)
            }
    }
    ,
    n
}()
  , kr = function(n) {
    rt(e, n);
    function e(t, i, r) {
        var s = n.call(this) || this, o;
        return he(t) || !t ? o = {
            next: t ?? void 0,
            error: i ?? void 0,
            complete: r ?? void 0
        } : o = t,
        s.destination = new jf(o),
        s
    }
    return e
}(Ur);
function _n(n) {
    _c(n)
}
function Vf(n) {
    throw n
}
var Bf = {
    closed: !0,
    next: Zs,
    error: Vf,
    complete: Zs
}
  , Fr = function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable"
}();
function Ic(n) {
    return n
}
function qf(n) {
    return n.length === 0 ? Ic : n.length === 1 ? n[0] : function(e) {
        return n.reduce(function(t, i) {
            return i(t)
        }, e)
    }
}
var we = function() {
    function n(e) {
        e && (this._subscribe = e)
    }
    return n.prototype.lift = function(e) {
        var t = new n;
        return t.source = this,
        t.operator = e,
        t
    }
    ,
    n.prototype.subscribe = function(e, t, i) {
        var r = this
          , s = Wf(e) ? e : new kr(e,t,i);
        return zn(function() {
            var o = r
              , a = o.operator
              , c = o.source;
            s.add(a ? a.call(s, c) : c ? r._subscribe(s) : r._trySubscribe(s))
        }),
        s
    }
    ,
    n.prototype._trySubscribe = function(e) {
        try {
            return this._subscribe(e)
        } catch (t) {
            e.error(t)
        }
    }
    ,
    n.prototype.forEach = function(e, t) {
        var i = this;
        return t = eo(t),
        new t(function(r, s) {
            var o = new kr({
                next: function(a) {
                    try {
                        e(a)
                    } catch (c) {
                        s(c),
                        o.unsubscribe()
                    }
                },
                error: s,
                complete: r
            });
            i.subscribe(o)
        }
        )
    }
    ,
    n.prototype._subscribe = function(e) {
        var t;
        return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(e)
    }
    ,
    n.prototype[Fr] = function() {
        return this
    }
    ,
    n.prototype.pipe = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return qf(e)(this)
    }
    ,
    n.prototype.toPromise = function(e) {
        var t = this;
        return e = eo(e),
        new e(function(i, r) {
            var s;
            t.subscribe(function(o) {
                return s = o
            }, function(o) {
                return r(o)
            }, function() {
                return i(s)
            })
        }
        )
    }
    ,
    n.create = function(e) {
        return new n(e)
    }
    ,
    n
}();
function eo(n) {
    var e;
    return (e = n ?? Uf.Promise) !== null && e !== void 0 ? e : Promise
}
function zf(n) {
    return n && he(n.next) && he(n.error) && he(n.complete)
}
function Wf(n) {
    return n && n instanceof Ur || zf(n) && Rc(n)
}
function Gf(n) {
    return he(n?.lift)
}
function vn(n) {
    return function(e) {
        if (Gf(e))
            return e.lift(function(t) {
                try {
                    return n(t, this)
                } catch (i) {
                    this.error(i)
                }
            });
        throw new TypeError("Unable to lift unknown Observable type")
    }
}
function ri(n, e, t, i, r) {
    return new Kf(n,e,t,i,r)
}
var Kf = function(n) {
    rt(e, n);
    function e(t, i, r, s, o, a) {
        var c = n.call(this, t) || this;
        return c.onFinalize = o,
        c.shouldUnsubscribe = a,
        c._next = i ? function(d) {
            try {
                i(d)
            } catch (u) {
                t.error(u)
            }
        }
        : n.prototype._next,
        c._error = s ? function(d) {
            try {
                s(d)
            } catch (u) {
                t.error(u)
            } finally {
                this.unsubscribe()
            }
        }
        : n.prototype._error,
        c._complete = r ? function() {
            try {
                r()
            } catch (d) {
                t.error(d)
            } finally {
                this.unsubscribe()
            }
        }
        : n.prototype._complete,
        c
    }
    return e.prototype.unsubscribe = function() {
        var t;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var i = this.closed;
            n.prototype.unsubscribe.call(this),
            !i && ((t = this.onFinalize) === null || t === void 0 || t.call(this))
        }
    }
    ,
    e
}(Ur)
  , Hf = Lr(function(n) {
    return function() {
        n(this),
        this.name = "ObjectUnsubscribedError",
        this.message = "object unsubscribed"
    }
})
  , xc = function(n) {
    rt(e, n);
    function e() {
        var t = n.call(this) || this;
        return t.closed = !1,
        t.currentObservers = null,
        t.observers = [],
        t.isStopped = !1,
        t.hasError = !1,
        t.thrownError = null,
        t
    }
    return e.prototype.lift = function(t) {
        var i = new to(this,this);
        return i.operator = t,
        i
    }
    ,
    e.prototype._throwIfClosed = function() {
        if (this.closed)
            throw new Hf
    }
    ,
    e.prototype.next = function(t) {
        var i = this;
        zn(function() {
            var r, s;
            if (i._throwIfClosed(),
            !i.isStopped) {
                i.currentObservers || (i.currentObservers = Array.from(i.observers));
                try {
                    for (var o = Kt(i.currentObservers), a = o.next(); !a.done; a = o.next()) {
                        var c = a.value;
                        c.next(t)
                    }
                } catch (d) {
                    r = {
                        error: d
                    }
                } finally {
                    try {
                        a && !a.done && (s = o.return) && s.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
            }
        })
    }
    ,
    e.prototype.error = function(t) {
        var i = this;
        zn(function() {
            if (i._throwIfClosed(),
            !i.isStopped) {
                i.hasError = i.isStopped = !0,
                i.thrownError = t;
                for (var r = i.observers; r.length; )
                    r.shift().error(t)
            }
        })
    }
    ,
    e.prototype.complete = function() {
        var t = this;
        zn(function() {
            if (t._throwIfClosed(),
            !t.isStopped) {
                t.isStopped = !0;
                for (var i = t.observers; i.length; )
                    i.shift().complete()
            }
        })
    }
    ,
    e.prototype.unsubscribe = function() {
        this.isStopped = this.closed = !0,
        this.observers = this.currentObservers = null
    }
    ,
    Object.defineProperty(e.prototype, "observed", {
        get: function() {
            var t;
            return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype._trySubscribe = function(t) {
        return this._throwIfClosed(),
        n.prototype._trySubscribe.call(this, t)
    }
    ,
    e.prototype._subscribe = function(t) {
        return this._throwIfClosed(),
        this._checkFinalizedStatuses(t),
        this._innerSubscribe(t)
    }
    ,
    e.prototype._innerSubscribe = function(t) {
        var i = this
          , r = this
          , s = r.hasError
          , o = r.isStopped
          , a = r.observers;
        return s || o ? Ec : (this.currentObservers = null,
        a.push(t),
        new gn(function() {
            i.currentObservers = null,
            ii(a, t)
        }
        ))
    }
    ,
    e.prototype._checkFinalizedStatuses = function(t) {
        var i = this
          , r = i.hasError
          , s = i.thrownError
          , o = i.isStopped;
        r ? t.error(s) : o && t.complete()
    }
    ,
    e.prototype.asObservable = function() {
        var t = new we;
        return t.source = this,
        t
    }
    ,
    e.create = function(t, i) {
        return new to(t,i)
    }
    ,
    e
}(we)
  , to = function(n) {
    rt(e, n);
    function e(t, i) {
        var r = n.call(this) || this;
        return r.destination = t,
        r.source = i,
        r
    }
    return e.prototype.next = function(t) {
        var i, r;
        (r = (i = this.destination) === null || i === void 0 ? void 0 : i.next) === null || r === void 0 || r.call(i, t)
    }
    ,
    e.prototype.error = function(t) {
        var i, r;
        (r = (i = this.destination) === null || i === void 0 ? void 0 : i.error) === null || r === void 0 || r.call(i, t)
    }
    ,
    e.prototype.complete = function() {
        var t, i;
        (i = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || i === void 0 || i.call(t)
    }
    ,
    e.prototype._subscribe = function(t) {
        var i, r;
        return (r = (i = this.source) === null || i === void 0 ? void 0 : i.subscribe(t)) !== null && r !== void 0 ? r : Ec
    }
    ,
    e
}(xc);
(function(n) {
    rt(e, n);
    function e(t) {
        var i = n.call(this) || this;
        return i._value = t,
        i
    }
    return Object.defineProperty(e.prototype, "value", {
        get: function() {
            return this.getValue()
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype._subscribe = function(t) {
        var i = n.prototype._subscribe.call(this, t);
        return !i.closed && t.next(this._value),
        i
    }
    ,
    e.prototype.getValue = function() {
        var t = this
          , i = t.hasError
          , r = t.thrownError
          , s = t._value;
        if (i)
            throw r;
        return this._throwIfClosed(),
        s
    }
    ,
    e.prototype.next = function(t) {
        n.prototype.next.call(this, this._value = t)
    }
    ,
    e
}
)(xc);
var Jf = {
    now: function() {
        return Date.now()
    }
}
  , Qf = function(n) {
    rt(e, n);
    function e(t, i) {
        return n.call(this) || this
    }
    return e.prototype.schedule = function(t, i) {
        return this
    }
    ,
    e
}(gn)
  , no = {
    setInterval: function(n, e) {
        for (var t = [], i = 2; i < arguments.length; i++)
            t[i - 2] = arguments[i];
        return setInterval.apply(void 0, ni([n, e], ti(t)))
    },
    clearInterval: function(n) {
        return clearInterval(n)
    },
    delegate: void 0
}
  , Yf = function(n) {
    rt(e, n);
    function e(t, i) {
        var r = n.call(this, t, i) || this;
        return r.scheduler = t,
        r.work = i,
        r.pending = !1,
        r
    }
    return e.prototype.schedule = function(t, i) {
        var r;
        if (i === void 0 && (i = 0),
        this.closed)
            return this;
        this.state = t;
        var s = this.id
          , o = this.scheduler;
        return s != null && (this.id = this.recycleAsyncId(o, s, i)),
        this.pending = !0,
        this.delay = i,
        this.id = (r = this.id) !== null && r !== void 0 ? r : this.requestAsyncId(o, this.id, i),
        this
    }
    ,
    e.prototype.requestAsyncId = function(t, i, r) {
        return r === void 0 && (r = 0),
        no.setInterval(t.flush.bind(t, this), r)
    }
    ,
    e.prototype.recycleAsyncId = function(t, i, r) {
        if (r === void 0 && (r = 0),
        r != null && this.delay === r && this.pending === !1)
            return i;
        i != null && no.clearInterval(i)
    }
    ,
    e.prototype.execute = function(t, i) {
        if (this.closed)
            return new Error("executing a cancelled action");
        this.pending = !1;
        var r = this._execute(t, i);
        if (r)
            return r;
        this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
    }
    ,
    e.prototype._execute = function(t, i) {
        var r = !1, s;
        try {
            this.work(t)
        } catch (o) {
            r = !0,
            s = o || new Error("Scheduled action threw falsy error")
        }
        if (r)
            return this.unsubscribe(),
            s
    }
    ,
    e.prototype.unsubscribe = function() {
        if (!this.closed) {
            var t = this
              , i = t.id
              , r = t.scheduler
              , s = r.actions;
            this.work = this.state = this.scheduler = null,
            this.pending = !1,
            ii(s, this),
            i != null && (this.id = this.recycleAsyncId(r, i, null)),
            this.delay = null,
            n.prototype.unsubscribe.call(this)
        }
    }
    ,
    e
}(Qf)
  , io = function() {
    function n(e, t) {
        t === void 0 && (t = n.now),
        this.schedulerActionCtor = e,
        this.now = t
    }
    return n.prototype.schedule = function(e, t, i) {
        return t === void 0 && (t = 0),
        new this.schedulerActionCtor(this,e).schedule(i, t)
    }
    ,
    n.now = Jf.now,
    n
}()
  , $f = function(n) {
    rt(e, n);
    function e(t, i) {
        i === void 0 && (i = io.now);
        var r = n.call(this, t, i) || this;
        return r.actions = [],
        r._active = !1,
        r
    }
    return e.prototype.flush = function(t) {
        var i = this.actions;
        if (this._active) {
            i.push(t);
            return
        }
        var r;
        this._active = !0;
        do
            if (r = t.execute(t.state, t.delay))
                break;
        while (t = i.shift());
        if (this._active = !1,
        r) {
            for (; t = i.shift(); )
                t.unsubscribe();
            throw r
        }
    }
    ,
    e
}(io);
new $f(Yf);
function Xf(n) {
    return n && he(n.schedule)
}
function Zf(n) {
    return n[n.length - 1]
}
function Ac(n) {
    return Xf(Zf(n)) ? n.pop() : void 0
}
var Dc = function(n) {
    return n && typeof n.length == "number" && typeof n != "function"
};
function Mc(n) {
    return he(n?.then)
}
function Oc(n) {
    return he(n[Fr])
}
function Nc(n) {
    return Symbol.asyncIterator && he(n?.[Symbol.asyncIterator])
}
function Lc(n) {
    return new TypeError("You provided " + (n !== null && typeof n == "object" ? "an invalid object" : "'" + n + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
}
function ep() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator
}
var Uc = ep();
function Fc(n) {
    return he(n?.[Uc])
}
function jc(n) {
    return Nf(this, arguments, function() {
        var e, t, i, r;
        return Pc(this, function(s) {
            switch (s.label) {
            case 0:
                e = n.getReader(),
                s.label = 1;
            case 1:
                s.trys.push([1, , 9, 10]),
                s.label = 2;
            case 2:
                return [4, qt(e.read())];
            case 3:
                return t = s.sent(),
                i = t.value,
                r = t.done,
                r ? [4, qt(void 0)] : [3, 5];
            case 4:
                return [2, s.sent()];
            case 5:
                return [4, qt(i)];
            case 6:
                return [4, s.sent()];
            case 7:
                return s.sent(),
                [3, 2];
            case 8:
                return [3, 10];
            case 9:
                return e.releaseLock(),
                [7];
            case 10:
                return [2]
            }
        })
    })
}
function Vc(n) {
    return he(n?.getReader)
}
function bn(n) {
    if (n instanceof we)
        return n;
    if (n != null) {
        if (Oc(n))
            return tp(n);
        if (Dc(n))
            return np(n);
        if (Mc(n))
            return ip(n);
        if (Nc(n))
            return Bc(n);
        if (Fc(n))
            return rp(n);
        if (Vc(n))
            return sp(n)
    }
    throw Lc(n)
}
function tp(n) {
    return new we(function(e) {
        var t = n[Fr]();
        if (he(t.subscribe))
            return t.subscribe(e);
        throw new TypeError("Provided object does not correctly implement Symbol.observable")
    }
    )
}
function np(n) {
    return new we(function(e) {
        for (var t = 0; t < n.length && !e.closed; t++)
            e.next(n[t]);
        e.complete()
    }
    )
}
function ip(n) {
    return new we(function(e) {
        n.then(function(t) {
            e.closed || (e.next(t),
            e.complete())
        }, function(t) {
            return e.error(t)
        }).then(null, _c)
    }
    )
}
function rp(n) {
    return new we(function(e) {
        var t, i;
        try {
            for (var r = Kt(n), s = r.next(); !s.done; s = r.next()) {
                var o = s.value;
                if (e.next(o),
                e.closed)
                    return
            }
        } catch (a) {
            t = {
                error: a
            }
        } finally {
            try {
                s && !s.done && (i = r.return) && i.call(r)
            } finally {
                if (t)
                    throw t.error
            }
        }
        e.complete()
    }
    )
}
function Bc(n) {
    return new we(function(e) {
        op(n, e).catch(function(t) {
            return e.error(t)
        })
    }
    )
}
function sp(n) {
    return Bc(jc(n))
}
function op(n, e) {
    var t, i, r, s;
    return Of(this, void 0, void 0, function() {
        var o, a;
        return Pc(this, function(c) {
            switch (c.label) {
            case 0:
                c.trys.push([0, 5, 6, 11]),
                t = Lf(n),
                c.label = 1;
            case 1:
                return [4, t.next()];
            case 2:
                if (i = c.sent(),
                !!i.done)
                    return [3, 4];
                if (o = i.value,
                e.next(o),
                e.closed)
                    return [2];
                c.label = 3;
            case 3:
                return [3, 1];
            case 4:
                return [3, 11];
            case 5:
                return a = c.sent(),
                r = {
                    error: a
                },
                [3, 11];
            case 6:
                return c.trys.push([6, , 9, 10]),
                i && !i.done && (s = t.return) ? [4, s.call(t)] : [3, 8];
            case 7:
                c.sent(),
                c.label = 8;
            case 8:
                return [3, 10];
            case 9:
                if (r)
                    throw r.error;
                return [7];
            case 10:
                return [7];
            case 11:
                return e.complete(),
                [2]
            }
        })
    })
}
function bt(n, e, t, i, r) {
    i === void 0 && (i = 0),
    r === void 0 && (r = !1);
    var s = e.schedule(function() {
        t(),
        r ? n.add(this.schedule(null, i)) : this.unsubscribe()
    }, i);
    if (n.add(s),
    !r)
        return s
}
function qc(n, e) {
    return e === void 0 && (e = 0),
    vn(function(t, i) {
        t.subscribe(ri(i, function(r) {
            return bt(i, n, function() {
                return i.next(r)
            }, e)
        }, function() {
            return bt(i, n, function() {
                return i.complete()
            }, e)
        }, function(r) {
            return bt(i, n, function() {
                return i.error(r)
            }, e)
        }))
    })
}
function zc(n, e) {
    return e === void 0 && (e = 0),
    vn(function(t, i) {
        i.add(n.schedule(function() {
            return t.subscribe(i)
        }, e))
    })
}
function ap(n, e) {
    return bn(n).pipe(zc(e), qc(e))
}
function cp(n, e) {
    return bn(n).pipe(zc(e), qc(e))
}
function dp(n, e) {
    return new we(function(t) {
        var i = 0;
        return e.schedule(function() {
            i === n.length ? t.complete() : (t.next(n[i++]),
            t.closed || this.schedule())
        })
    }
    )
}
function up(n, e) {
    return new we(function(t) {
        var i;
        return bt(t, e, function() {
            i = n[Uc](),
            bt(t, e, function() {
                var r, s, o;
                try {
                    r = i.next(),
                    s = r.value,
                    o = r.done
                } catch (a) {
                    t.error(a);
                    return
                }
                o ? t.complete() : t.next(s)
            }, 0, !0)
        }),
        function() {
            return he(i?.return) && i.return()
        }
    }
    )
}
function Wc(n, e) {
    if (!n)
        throw new Error("Iterable cannot be null");
    return new we(function(t) {
        bt(t, e, function() {
            var i = n[Symbol.asyncIterator]();
            bt(t, e, function() {
                i.next().then(function(r) {
                    r.done ? t.complete() : t.next(r.value)
                })
            }, 0, !0)
        })
    }
    )
}
function lp(n, e) {
    return Wc(jc(n), e)
}
function hp(n, e) {
    if (n != null) {
        if (Oc(n))
            return ap(n, e);
        if (Dc(n))
            return dp(n, e);
        if (Mc(n))
            return cp(n, e);
        if (Nc(n))
            return Wc(n, e);
        if (Fc(n))
            return up(n, e);
        if (Vc(n))
            return lp(n, e)
    }
    throw Lc(n)
}
function fp(n, e) {
    return e ? hp(n, e) : bn(n)
}
Lr(function(n) {
    return function(e) {
        e === void 0 && (e = null),
        n(this),
        this.message = "Timeout has occurred",
        this.name = "TimeoutError",
        this.info = e
    }
});
function yn(n, e) {
    return vn(function(t, i) {
        var r = 0;
        t.subscribe(ri(i, function(s) {
            i.next(n.call(e, s, r++))
        }))
    })
}
function pp(n, e, t, i, r, s, o, a) {
    var c = []
      , d = 0
      , u = 0
      , l = !1
      , h = function() {
        l && !c.length && !d && e.complete()
    }
      , f = function(p) {
        return d < i ? v(p) : c.push(p)
    }
      , v = function(p) {
        d++;
        var y = !1;
        bn(t(p, u++)).subscribe(ri(e, function(g) {
            e.next(g)
        }, function() {
            y = !0
        }, void 0, function() {
            if (y)
                try {
                    d--;
                    for (var g = function() {
                        var x = c.shift();
                        o || v(x)
                    }; c.length && d < i; )
                        g();
                    h()
                } catch (x) {
                    e.error(x)
                }
        }))
    };
    return n.subscribe(ri(e, f, function() {
        l = !0,
        h()
    })),
    function() {}
}
function Gc(n, e, t) {
    return t === void 0 && (t = 1 / 0),
    he(e) ? Gc(function(i, r) {
        return yn(function(s, o) {
            return e(i, s, r, o)
        })(bn(n(i, r)))
    }, t) : (typeof e == "number" && (t = e),
    vn(function(i, r) {
        return pp(i, r, n, t)
    }))
}
function mp(n) {
    return Gc(Ic, n)
}
function gp() {
    return mp(1)
}
function ro() {
    for (var n = [], e = 0; e < arguments.length; e++)
        n[e] = arguments[e];
    return gp()(fp(n, Ac(n)))
}
function kn() {
    for (var n = [], e = 0; e < arguments.length; e++)
        n[e] = arguments[e];
    var t = Ac(n);
    return vn(function(i, r) {
        (t ? ro(n, i, t) : ro(n, i)).subscribe(r)
    })
}
var vp = "lk";
function Kc(n) {
    return typeof n > "u" ? !1 : bp(n) || yp(n)
}
function bp(n) {
    var e;
    return n ? n.hasOwnProperty("participant") && n.hasOwnProperty("source") && n.hasOwnProperty("track") && typeof ((e = n.publication) == null ? void 0 : e.track) < "u" : !1
}
function yp(n) {
    return n ? n.hasOwnProperty("participant") && n.hasOwnProperty("source") && n.hasOwnProperty("publication") && typeof n.publication < "u" : !1
}
function kp(n) {
    return n ? n.hasOwnProperty("participant") && n.hasOwnProperty("source") && typeof n.publication > "u" : !1
}
function ng(n) {
    if (typeof n == "string" || typeof n == "number")
        return `${n}`;
    if (kp(n))
        return `${n.participant.identity}_${n.source}_placeholder`;
    if (Kc(n))
        return `${n.participant.identity}_${n.publication.source}_${n.publication.trackSid}`;
    throw new Error(`Can't generate a id for the given track reference: ${n}`)
}
function ig(n) {
    return n instanceof br
}
var Sp = [T.ConnectionStateChanged, T.RoomMetadataChanged, T.ActiveSpeakersChanged, T.ConnectionQualityChanged, T.ParticipantConnected, T.ParticipantDisconnected, T.ParticipantPermissionsChanged, T.ParticipantMetadataChanged, T.ParticipantNameChanged, T.ParticipantAttributesChanged, T.TrackMuted, T.TrackUnmuted, T.TrackPublished, T.TrackUnpublished, T.TrackStreamStateChanged, T.TrackSubscriptionFailed, T.TrackSubscriptionPermissionChanged, T.TrackSubscriptionStatusChanged]
  , Tp = [...Sp, T.LocalTrackPublished, T.LocalTrackUnpublished];
P.TrackPublished,
P.TrackUnpublished,
P.TrackMuted,
P.TrackUnmuted,
P.TrackStreamStateChanged,
P.TrackSubscribed,
P.TrackUnsubscribed,
P.TrackSubscriptionPermissionChanged,
P.TrackSubscriptionFailed,
P.LocalTrackPublished,
P.LocalTrackUnpublished;
var Cp = [P.ConnectionQualityChanged, P.IsSpeakingChanged, P.ParticipantMetadataChanged, P.ParticipantPermissionsChanged, P.TrackMuted, P.TrackUnmuted, P.TrackPublished, P.TrackUnpublished, P.TrackStreamStateChanged, P.TrackSubscriptionFailed, P.TrackSubscriptionPermissionChanged, P.TrackSubscriptionStatusChanged];
[...Cp, P.LocalTrackPublished, P.LocalTrackUnpublished];
var si = Mf.getLogger("lk-components-js");
si.setDefaultLevel("WARN");
function Hc(n) {
    return typeof n == "object"
}
function Jc(n) {
    return Array.isArray(n) && n.filter(Hc).length > 0
}
function wp(n) {
    return `${vp}-${n}`
}
function rg(n) {
    const e = so(n)
      , t = Qc(n.participant).pipe(yn( () => so(n)), kn(e));
    return {
        className: wp(n.source === E.Source.Camera || n.source === E.Source.ScreenShare ? "participant-media-video" : "participant-media-audio"),
        trackObserver: t
    }
}
function so(n) {
    if (Kc(n))
        return n.publication;
    {
        const {source: e, name: t, participant: i} = n;
        if (e && t)
            return i.getTrackPublications().find(r => r.source === e && r.trackName === t);
        if (t)
            return i.getTrackPublicationByName(t);
        if (e)
            return i.getTrackPublication(e);
        throw new Error("At least one of source and name needs to be defined")
    }
}
function Pp(n, ...e) {
    return new we(t => {
        const i = () => {
            t.next(n)
        }
        ;
        return e.forEach(r => {
            n.on(r, i)
        }
        ),
        () => {
            e.forEach(r => {
                n.off(r, i)
            }
            )
        }
    }
    ).pipe(kn(n))
}
function Ep(n, e) {
    return new we(t => {
        const i = (...r) => {
            t.next(r)
        }
        ;
        return n.on(e, i),
        () => {
            n.off(e, i)
        }
    }
    )
}
function Rp(n) {
    return Ep(n, T.ConnectionStateChanged).pipe(yn( ([e]) => e), kn(n.state))
}
function _p(n, ...e) {
    return new we(t => {
        const i = () => {
            t.next(n)
        }
        ;
        return e.forEach(r => {
            n.on(r, i)
        }
        ),
        () => {
            e.forEach(r => {
                n.off(r, i)
            }
            )
        }
    }
    ).pipe(kn(n))
}
function Qc(n) {
    return _p(n, P.TrackMuted, P.TrackUnmuted, P.ParticipantPermissionsChanged, P.TrackPublished, P.TrackUnpublished, P.LocalTrackPublished, P.LocalTrackUnpublished, P.MediaDevicesError, P.TrackSubscriptionStatusChanged).pipe(yn(e => {
        const {isMicrophoneEnabled: t, isCameraEnabled: i, isScreenShareEnabled: r} = e
          , s = e.getTrackPublication(E.Source.Microphone)
          , o = e.getTrackPublication(E.Source.Camera);
        return {
            isCameraEnabled: i,
            isMicrophoneEnabled: t,
            isScreenShareEnabled: r,
            cameraTrack: o,
            microphoneTrack: s,
            participant: e
        }
    }
    ))
}
new TextEncoder;
new TextDecoder;
function sg() {
    return {
        className: "lk-room-container"
    }
}
function oo(n, e, t=!0) {
    const i = [n.localParticipant, ...Array.from(n.remoteParticipants.values())]
      , r = [];
    return i.forEach(s => {
        e.forEach(o => {
            const a = Array.from(s.trackPublications.values()).filter(c => c.source === o && (!t || c.track)).map(c => ({
                participant: s,
                publication: c,
                source: c.source
            }));
            r.push(...a)
        }
        )
    }
    ),
    {
        trackReferences: r,
        participants: i
    }
}
function Ip(n, e, t) {
    var i, r;
    const s = (i = t.additionalRoomEvents) != null ? i : Tp
      , o = (r = t.onlySubscribed) != null ? r : !0
      , a = Array.from(new Set([T.ParticipantConnected, T.ParticipantDisconnected, T.ConnectionStateChanged, T.LocalTrackPublished, T.LocalTrackUnpublished, T.TrackPublished, T.TrackUnpublished, T.TrackSubscriptionStatusChanged, ...s]).values());
    return Pp(n, ...a).pipe(yn(c => {
        const d = oo(c, e, o);
        return si.debug(`TrackReference[] was updated. (length ${d.trackReferences.length})`, d),
        d
    }
    ), kn(oo(n, e, o)))
}
k.createContext(void 0);
const xp = k.createContext(void 0);
function Ap() {
    return k.useContext(xp)
}
function og(n) {
    const e = Ap()
      , t = n ?? e;
    if (!t)
        throw new Error("No TrackRef, make sure you are inside a TrackRefContext or pass the TrackRef explicitly");
    return t
}
k.createContext(void 0);
const Dp = k.createContext(void 0);
function Yc() {
    return k.useContext(Dp)
}
function jr(n) {
    const e = Yc()
      , t = n ?? e;
    if (!t)
        throw new Error("No room provided, make sure you are inside a Room context or pass the room explicitly");
    return t
}
const ag = k.createContext(void 0);
function Mp(n, e, t=!0) {
    const [i,r] = k.useState(e);
    return k.useEffect( () => {
        if (t && r(e),
        typeof window > "u" || !n)
            return;
        const s = n.subscribe(r);
        return () => s.unsubscribe()
    }
    , [n, t]),
    i
}
function Op(n) {
    const e = jr(n)
      , t = k.useMemo( () => Rp(e), [e]);
    return Mp(t, e.state)
}
function cg(n={}) {
    const e = jr(n.room)
      , [t,i] = k.useState(e.localParticipant)
      , [r,s] = k.useState(t.isMicrophoneEnabled)
      , [o,a] = k.useState(t.isMicrophoneEnabled)
      , [c,d] = k.useState(t.lastMicrophoneError)
      , [u,l] = k.useState(t.lastCameraError)
      , [h,f] = k.useState(t.isMicrophoneEnabled)
      , [v,p] = k.useState(void 0)
      , [y,g] = k.useState(void 0)
      , x = _ => {
        a(_.isCameraEnabled),
        s(_.isMicrophoneEnabled),
        f(_.isScreenShareEnabled),
        g(_.cameraTrack),
        p(_.microphoneTrack),
        d(_.participant.lastMicrophoneError),
        l(_.participant.lastCameraError),
        i(_.participant)
    }
    ;
    return k.useEffect( () => {
        const _ = Qc(e.localParticipant).subscribe(x);
        return () => _.unsubscribe()
    }
    , [e]),
    {
        isMicrophoneEnabled: r,
        isScreenShareEnabled: h,
        isCameraEnabled: o,
        microphoneTrack: v,
        cameraTrack: y,
        lastMicrophoneError: c,
        lastCameraError: u,
        localParticipant: t
    }
}
function Np(n=[E.Source.Camera, E.Source.Microphone, E.Source.ScreenShare, E.Source.ScreenShareAudio, E.Source.Unknown], e={}) {
    const t = jr(e.room)
      , [i,r] = k.useState([])
      , [s,o] = k.useState([])
      , a = k.useMemo( () => n.map(c => Hc(c) ? c.source : c), [JSON.stringify(n)]);
    return k.useEffect( () => {
        const c = Ip(t, a, {
            additionalRoomEvents: e.updateOnlyOn,
            onlySubscribed: e.onlySubscribed
        }).subscribe( ({trackReferences: d, participants: u}) => {
            si.debug("setting track bundles", d, u),
            r(d),
            o(u)
        }
        );
        return () => c.unsubscribe()
    }
    , [t, JSON.stringify(e.onlySubscribed), JSON.stringify(e.updateOnlyOn), JSON.stringify(n)]),
    k.useMemo( () => {
        if (Jc(n)) {
            const c = Up(n, s)
              , d = Array.from(i);
            return s.forEach(u => {
                c.has(u.identity) && (c.get(u.identity) ?? []).forEach(l => {
                    if (i.find( ({participant: f, publication: v}) => u.identity === f.identity && v.source === l))
                        return;
                    si.debug(`Add ${l} placeholder for participant ${u.identity}.`);
                    const h = {
                        participant: u,
                        source: l
                    };
                    d.push(h)
                }
                )
            }
            ),
            d
        } else
            return i
    }
    , [i, s, n])
}
function Lp(n, e) {
    const t = new Set(n);
    for (const i of e)
        t.delete(i);
    return t
}
function Up(n, e) {
    const t = new Map;
    if (Jc(n)) {
        const i = n.filter(r => r.withPlaceholder).map(r => r.source);
        e.forEach(r => {
            const s = r.getTrackPublications().map(a => {
                var c;
                return (c = a.track) == null ? void 0 : c.source
            }
            ).filter(a => a !== void 0)
              , o = Array.from(Lp(new Set(i), new Set(s)));
            o.length > 0 && t.set(r.identity, o)
        }
        )
    }
    return t
}
var Wn = (n => (n.Local = "local",
n.Remote = "remote",
n))(Wn || {})
  , $c = (n => (n.Audio = "audio",
n.Video = "video",
n))($c || {})
  , sn = (n => (n.Camera = "camera",
n.Microphone = "microphone",
n.ScreenShare = "screen_share",
n))(sn || {});
const Fp = n => n.flatMap(e => {
    const t = []
      , i = e.publication.trackName
      , r = e.participant.identity
      , s = e.participant.isLocal ? "local" : "remote";
    let o;
    e.publication.source === E.Source.Camera ? o = "camera" : e.publication.source === E.Source.ScreenShare ? o = "screen_share" : o = "microphone";
    const a = (c, d) => {
        c && t.push({
            id: c.mediaStreamTrack.id,
            source: o,
            name: i,
            userName: r,
            origin: s,
            media: d,
            track: c.mediaStreamTrack,
            isMuted: c.isMuted,
            setMuted: u => {
                c.mediaStreamTrack.enabled = !u
            }
            ,
            onEnded: u => {
                c.on("ended", u)
            }
            ,
            offEnded: u => {
                c.off("ended", u)
            }
        })
    }
    ;
    return a(e.publication.audioTrack, "audio"),
    a(e.publication.videoTrack, "video"),
    t
}
)
  , Di = (n, e) => {
    const t = {
        id: n.id,
        source: e.source,
        name: e.name,
        userName: e.userName,
        media: n.kind === "audio" ? "audio" : "video",
        origin: e.origin,
        track: n,
        get isMuted() {
            return !n.enabled || n.muted
        },
        setMuted: i => {
            n.enabled = !i,
            e.mutedCb?.(i)
        }
        ,
        onEnded: i => {
            n.onended = i
        }
        ,
        offEnded: i => {
            n.onended = null
        }
    };
    return n.onmute = () => {
        e.mutedCb?.(t.isMuted)
    }
    ,
    n.onunmute = () => {
        e.mutedCb?.(t.isMuted)
    }
    ,
    e.mutedCb?.(t.isMuted),
    t
}
;
class jp {
    mediaDevicesPromises = [];
    getUserMedia(...e) {
        const t = navigator.mediaDevices.getUserMedia(...e);
        return this.mediaDevicesPromises.push(t),
        t
    }
    getDisplayMedia(...e) {
        const t = navigator.mediaDevices.getDisplayMedia(...e);
        return this.mediaDevicesPromises.push(t),
        t
    }
    closeAllStreams() {
        const e = this.mediaDevicesPromises.map(t => t.then(i => {
            i.getTracks().forEach(r => {
                r.readyState === "live" && r.stop()
            }
            )
        }
        ));
        return this.mediaDevicesPromises = [],
        Promise.all(e)
    }
}
const Vp = 500
  , Bp = 1e3
  , qp = 3
  , zp = 2e3;
function ao({packets: n, packetsLost: e, fractionLost: t, rtt: i}) {
    let r;
    if (n !== void 0 && e !== void 0 ? r = e * 100 / n : t !== void 0 && (r = t * 100),
    r === void 0 || i === void 0 || isNaN(r))
        return;
    const s = i * 1e3 / 2;
    let o = s / 40;
    s > 160 && (o = (s - 120) / 10);
    const a = 100 - o - r;
    return Math.max(a, 0)
}
function co(n) {
    if (n === void 0)
        return ue.Unknown;
    let e;
    return n <= 0 ? e = 1 : n >= 100 ? e = 4.5 : e = 1 + .035 * n + 7e-6 * n * (n - 60) * (100 - n),
    e > 4 ? ue.Excellent : e > 3.5 ? ue.Good : ue.Poor
}
class xt {
    size;
    type;
    buf;
    constructor(e, t) {
        this.size = e,
        this.type = t,
        this.buf = []
    }
    push(e) {
        e !== void 0 && (this.buf.length === this.size && this.buf.shift(),
        this.buf.push(e))
    }
    get() {
        if (this.buf.length !== 0)
            switch (this.type) {
            case "cumulative":
                {
                    const e = this.buf[0];
                    return (this.buf[this.buf.length - 1] - e) / this.buf.length
                }
            case "individual":
                return this.buf.reduce( (e, t) => e + t, 0) / this.buf.length
            }
    }
}
class Wp {
    pc;
    cb;
    reportTimerId;
    pollingTimerId;
    localWindow;
    remoteWindow;
    reportTimestamps;
    stale = !1;
    constructor(e, t) {
        const i = qp;
        this.pc = e,
        this.cb = t,
        this.reportTimerId = void 0,
        this.localWindow = {
            packetsLost: new xt(i,"cumulative"),
            fractionLost: new xt(i,"individual"),
            rtt: new xt(i,"individual")
        },
        this.remoteWindow = {
            packetsSent: new xt(i,"cumulative"),
            packetsLost: new xt(i,"cumulative"),
            rtt: new xt(i,"individual")
        },
        this.reportTimestamps = {}
    }
    start() {
        this.reportTimerId || this.pollingTimerId || (this.reportTimerId = window.setInterval(this.report.bind(this), Vp),
        this.pollingTimerId = window.setInterval(this.poll.bind(this), Bp))
    }
    stop() {
        window.clearInterval(this.reportTimerId),
        window.clearInterval(this.pollingTimerId),
        this.reportTimerId = void 0,
        this.pollingTimerId = void 0
    }
    isFresh(e) {
        let t = !0;
        if (this.reportTimestamps[e.type] !== void 0) {
            const r = Date.now() - this.reportTimestamps[e.type] < zp;
            t = e.timestamp !== this.reportTimestamps[e.type] || r
        }
        return this.reportTimestamps[e.type] = e.timestamp,
        t
    }
    async poll() {
        const e = await this.pc.getStats();
        let t;
        const i = {};
        let r = !1;
        e.forEach(o => {
            const a = o.kind || o.mediaType;
            o.type === "transport" && o.selectedCandidatePairId && (t = o.selectedCandidatePairId),
            o.type === "remote-inbound-rtp" && a === "audio" && (r ||= !this.isFresh(o),
            this.localWindow.packetsLost.push(o.packetsLost),
            this.localWindow.fractionLost.push(o.fractionLost)),
            o.type === "inbound-rtp" && a === "audio" && (r ||= !this.isFresh(o),
            this.remoteWindow.packetsSent.push(o.packetsReceived + o.packetsLost),
            this.remoteWindow.packetsLost.push(o.packetsLost)),
            o.type === "candidate-pair" && (i[o.id] = o)
        }
        ),
        this.stale = r;
        const s = t !== void 0 && i[t];
        s ? (this.remoteWindow.rtt.push(s.currentRoundTripTime),
        this.localWindow.rtt.push(s.currentRoundTripTime)) : Te.error("QualityMonitor no candidate-pair found!")
    }
    report() {
        if (this.stale)
            return this.cb({
                local: ue.Unknown,
                general: ue.Unknown
            });
        const e = ao({
            packets: void 0,
            packetsLost: this.localWindow.packetsLost.get(),
            fractionLost: this.localWindow.fractionLost.get(),
            rtt: this.localWindow.rtt.get()
        })
          , t = ao({
            packets: this.remoteWindow.packetsSent.get(),
            packetsLost: this.remoteWindow.packetsLost.get(),
            fractionLost: void 0,
            rtt: this.remoteWindow.rtt.get()
        })
          , i = [e, t].filter(a => a !== void 0)
          , r = i.length > 0 ? Math.min(...i) : void 0
          , s = co(e)
          , o = co(r);
        this.cb({
            local: s,
            general: o
        })
    }
}
class Mi {
    static _controller = null;
    static abortPendingNegotiation(e) {
        this._controller && (this._controller.abort(`[abort] ${e}`),
        this._controller = null)
    }
    static clearNegotiation() {
        this._controller = null
    }
    static beginNegotiation() {
        this._controller && this._controller.abort("[abort] Starting new negotiation");
        const e = new AbortController;
        return this._controller = e,
        e.signal
    }
}
const uo = "User"
  , lo = "Assistant"
  , ho = 0
  , Xc = kd(void 0)
  , dg = () => bd(Xc)
  , Gp = []
  , Vr = k.createContext({
    room: void 0,
    getTracks: () => Gp,
    getConnectionState: () => null,
    selectVoiceModeMetadata: () => {
        throw new Error("Null implementation - please provide a proper context")
    }
    ,
    initVoiceMode: () => Promise.reject(new Error("Null implementation - please provide a proper context"))
})
  , Br = () => k.useContext(Vr)
  , ug = ({children: n}) => {
    const e = Yc()
      , t = Np()
      , i = Op(e)
      , r = Pe()
      , s = k.useCallback(u => {
        const l = Fp(t);
        return u ? l.filter(h => u.includes(h.source)) : l
    }
    , [t])
      , o = k.useCallback( () => i, [i])
      , a = k.useCallback(u => {
        const {default_voice_mode: l, modes: h} = u
          , f = h.find(v => v.mode === l);
        if (!f)
            throw new Error("No voice status mode found for default mode " + l);
        return f
    }
    , [])
      , c = k.useCallback(async (u, l) => {
        const h = await Mo.startLivekitSession(u, l.eventSource, l.proofOfWorkAnswer);
        return h.token && h.url && h.e2ee_key ? (Gi({
            conversationId: u.conversation_id ?? l.clientThreadId,
            voiceSessionId: u.voice_session_id,
            voiceMode: h.voice_mode_decision.voice_mode,
            credentials: {
                ...h,
                e2eeKey: h.e2ee_key
            }
        }, r),
        {
            type: "livekit",
            success: !0
        }) : {
            type: "livekit",
            success: !1,
            error: "get_token failed to return expected fields .token, .url and .e2ee_key",
            response: h
        }
    }
    , [r])
      , d = k.useMemo( () => ({
        room: e,
        getTracks: s,
        getConnectionState: o,
        initVoiceMode: c,
        selectVoiceModeMetadata: a
    }), [e, s, o, c, a]);
    return j.jsx(Vr.Provider, {
        value: d,
        children: n
    })
}
;
let Oi;
const Kp = () => (Oi === void 0 && (Oi = new TextEncoder),
Oi);
function Hp(n) {
    switch (n) {
    case "checking":
        return B.Connecting;
    case "connected":
    case "completed":
        return B.Connected;
    case "disconnected":
        return B.Reconnecting;
    case "new":
    case "failed":
    case "closed":
        return B.Disconnected
    }
}
const lg = ({children: n}) => {
    const e = Pe()
      , t = yd(Sd())
      , i = k.useRef(null)
      , r = k.useRef(void 0)
      , s = k.useRef(void 0)
      , o = k.useCallback(async ({avmTrack: W, initialSetup: V=!1}) => {
        const F = W.media === $c.Audio ? r : s;
        if (F.current && !F.current.stopped)
            await F.current.sender.replaceTrack(W.track);
        else if (V)
            F.current = Ct().addTransceiver(W.track);
        else
            throw new Error(`Cannot replace track on ${W.media} transceiver that was not initialized.`)
    }
    , [])
      , [a,c] = k.useState(void 0)
      , [d,u] = k.useState(void 0)
      , [l,h] = k.useState(void 0)
      , f = k.useRef(void 0)
      , v = k.useRef(void 0)
      , p = k.useRef(void 0)
      , y = e(W => W.voiceMode)
      , [g,x] = k.useState(null)
      , _ = k.useCallback( () => g, [g])
      , S = k.useCallback(W => {
        st(V => Cn(V, F => {
            F && (F.activeSpeakers.some(G => G.identity === W) || F.activeSpeakers.push({
                identity: W
            }))
        }
        ))
    }
    , [])
      , b = k.useCallback(W => {
        st(V => Cn(V, F => {
            F && (F.activeSpeakers = F.activeSpeakers.filter(G => G.identity !== W))
        }
        ))
    }
    , [])
      , w = k.useRef(null)
      , D = k.useRef([])
      , N = k.useRef([])
      , U = k.useRef([])
      , L = k.useRef([])
      , I = k.useRef([])
      , M = k.useRef(!1)
      , X = k.useRef([])
      , z = k.useCallback(W => {
        X.current.forEach(V => V(W))
    }
    , [])
      , H = k.useRef(g);
    k.useEffect( () => {
        H.current = g
    }
    , [g]);
    const ie = k.useRef(void 0);
    k.useEffect( () => {
        ie.current = a
    }
    , [a]);
    const Ee = k.useRef(void 0);
    k.useEffect( () => {
        Ee.current = l
    }
    , [l]);
    const Se = k.useRef(new jp).current
      , Be = k.useRef(void 0)
      , [ft,st] = k.useState( () => ({
        localParticipant: {
            isMicrophoneEnabled: !1,
            setMicrophoneEnabled: function(V) {
                return ie.current?.setMuted(!V),
                Promise.resolve(void 0)
            },
            setCameraEnabled: async function(V, F, G) {
                if (V)
                    try {
                        const q = await Pt("camera");
                        await o({
                            avmTrack: q
                        }),
                        z(q)
                    } catch (q) {
                        throw Te.error("[transceiver] Error acquiring camera input", q),
                        q
                    }
                else
                    await Et();
                return Promise.resolve(void 0)
            },
            setScreenShareEnabled: async function(V, F, G) {
                if (V)
                    try {
                        const q = await Pt("screenshare");
                        await o({
                            avmTrack: q
                        }),
                        z(q)
                    } catch (q) {
                        throw Te.error("[transceiver] Error acquiring screen share input", q),
                        q
                    }
                else
                    await Et();
                return Promise.resolve(void 0)
            },
            publishData: async function(V, F) {
                const G = w.current;
                if (!G || G.readyState !== "open")
                    throw new Error("Data channel is not open");
                const q = new TextDecoder().decode(V)
                  , $e = JSON.stringify({
                    type: "data_message",
                    data: q
                });
                G.send($e)
            },
            on: function(V, F) {
                V === T.ConnectionQualityChanged && N.current.push(F)
            },
            off: function(V, F) {
                V === T.ConnectionQualityChanged && (N.current = N.current.filter(G => G !== F))
            }
        },
        getActiveDevice: V => {
            switch (V) {
            case "audioinput":
                return f.current;
            case "videoinput":
                return v.current;
            case "audiooutput":
                return p.current
            }
        }
        ,
        disconnect: async function(V=!0) {
            Mi.abortPendingNegotiation("Disconnecting"),
            Be.current?.stop(),
            M.current = !0,
            V && Se.closeAllStreams(),
            qe.current && (qe.current.close(),
            qe.current = void 0),
            i.current && (i.current.srcObject = null),
            await Et(),
            x(B.Disconnected),
            H.current = B.Disconnected,
            I.current.forEach(F => F())
        },
        name: "",
        switchActiveDevice: async (V, F, G) => {
            if (H.current !== B.Connected)
                return Te.debug("[transceiver] Attempt to switch device when not connected, current state is", H.current),
                !1;
            try {
                switch (V) {
                case "audioinput":
                    {
                        const q = await wt(F);
                        return await o({
                            avmTrack: q
                        }),
                        z(q),
                        !0
                    }
                case "videoinput":
                    {
                        const q = await Pt("camera", F);
                        return await o({
                            avmTrack: q
                        }),
                        z(q),
                        !0
                    }
                case "audiooutput":
                    return await i.current?.setSinkId(F),
                    p.current = F,
                    !0
                }
            } catch (q) {
                return Te.error(`[transceiver] Failed to switch ${V} device`, q),
                !1
            }
        }
        ,
        on: function(V, F) {
            switch (V) {
            case T.DataReceived:
                U.current.push(F);
                break;
            case T.Disconnected:
                I.current.push(F);
                break;
            case T.Connected:
                L.current.push(F);
                break;
            case T.TrackPublished:
                X.current.push(F);
                break;
            case T.ConnectionQualityChanged:
                D.current.push(F);
                break
            }
        },
        off: function(V, F) {
            switch (V) {
            case T.DataReceived:
                U.current = U.current.filter(G => G !== F);
                break;
            case T.Disconnected:
                I.current = I.current.filter(G => G !== F);
                break;
            case T.Connected:
                L.current = L.current.filter(G => G !== F);
                break;
            case T.TrackPublished:
                X.current = X.current.filter(G => G !== F);
                break;
            case T.ConnectionQualityChanged:
                D.current = D.current.filter(G => G !== F);
                break
            }
        },
        state: B.Disconnected,
        numParticipants: 0,
        activeSpeakers: []
    }))
      , ce = k.useRef(!1)
      , qe = k.useRef(void 0)
      , Ct = () => (qe.current === void 0 && (qe.current = new RTCPeerConnection({
        bundlePolicy: "max-bundle"
    })),
    qe.current)
      , Jt = k.useCallback(W => {
        st(V => Cn(V, F => {
            F && (F.localParticipant.isMicrophoneEnabled = !W,
            W ? b(uo) : S(uo))
        }
        ))
    }
    , [S, b])
      , Sn = k.useCallback(W => {
        const V = [a, d, l].filter(F => F !== void 0);
        return W ? V.filter(F => W.includes(F.source)) : V
    }
    , [a, d, l])
      , wt = k.useCallback(async W => {
        const F = (await Se.getUserMedia({
            audio: W ? {
                deviceId: {
                    exact: W
                }
            } : !0
        })).getTracks();
        if (F.length !== 1)
            throw Te.error("[transceiver] Only one input is supported for now, detected these tracks", F),
            new Error("Only one input is supported for now");
        const [G] = F;
        f.current = G.getSettings().deviceId,
        ie.current && ie.current.track !== G && ie.current.track.stop();
        const q = Di(G, {
            source: sn.Microphone,
            name: "user",
            userName: "User",
            origin: Wn.Local,
            mutedCb: Jt
        });
        return c(q),
        Jt(G.muted),
        q
    }
    , [Jt, Se])
      , Pt = k.useCallback(async (W, V) => {
        const G = (W === "camera" ? await Se.getUserMedia({
            video: V ? {
                deviceId: {
                    exact: V
                }
            } : !0
        }) : await Se.getDisplayMedia()).getTracks();
        if (G.length !== 1)
            throw Te.error("[transceiver] Only one video input is supported for now, detected these tracks", G),
            new Error("Only one video input is supported for now");
        const [q] = G;
        W === "camera" && (v.current = q.getSettings().deviceId),
        Ee.current && Ee.current.track !== q && Ee.current.track.stop();
        const $e = Di(q, {
            source: W === "camera" ? sn.Camera : sn.ScreenShare,
            name: "user",
            userName: "User",
            origin: Wn.Local
        });
        return h($e),
        $e
    }
    , [Se])
      , Et = k.useCallback(async () => {
        if (Ee.current && (Te.debug("[transceiver] Stop and clear video track"),
        Ee.current.track.stop(),
        h(void 0),
        s.current && !s.current.stopped)) {
            Te.debug("[transceiver] Stop the video transceiver");
            try {
                await s.current.sender.replaceTrack(null)
            } catch (W) {
                Te.debug("[transceiver] Failed to stop transceiver on disconnect due to", W)
            }
        }
    }
    , [])
      , Qt = k.useCallback(W => {
        const {default_voice_mode: V, modes: F} = W
          , G = F.find(q => q.mode === V);
        if (!G)
            throw new Error(`No voice status mode found for default mode ${V}`);
        return G
    }
    , [])
      , re = k.useCallback(async (W, V) => {
        if (ce.current)
            throw new Error(`Not ready to connect, ${JSON.stringify({
                isConnecting: ce.current
            })}`);
        const F = performance.now();
        ce.current = !0;
        const G = Mi.beginNegotiation()
          , q = Ct()
          , $e = Ct().createDataChannel("", {
            negotiated: !0,
            id: ho
        });
        w.current = $e,
        $e.onopen = () => {
            e.setState(fe => {
                fe.metrics.dataChannelOpenTime || (fe.metrics.dataChannelOpenTime = new Date)
            }
            )
        }
        ,
        $e.onmessage = fe => {
            const Re = JSON.parse(fe.data);
            if (Re.type === "data_message") {
                const Oe = Kp().encode(Re.data);
                U.current.forEach(Tn => Tn(Oe))
            }
        }
        ,
        $e.onclose = () => {
            M.current ? M.current = !1 : I.current.forEach(fe => fe()),
            b(lo)
        }
        ,
        q.oniceconnectionstatechange = () => {
            const fe = Ct().iceConnectionState
              , Re = Hp(fe);
            Re === B.Connected && L.current.forEach(Oe => Oe()),
            x(Re),
            e.setState(Oe => {
                Oe.server.connectionState = Re
            }
            )
        }
        ,
        q.ontrack = fe => {
            if (i.current != null) {
                i.current.srcObject = fe.streams[0];
                const Re = fe.streams[0].getTracks();
                if (Re.length !== 1)
                    throw Te.error("[transceiver] Only one remote track is supported for now, detected these tracks", Re),
                    new Error("Only one remote track is supported for transceiver");
                const [Oe] = Re
                  , Tn = Di(Oe, {
                    source: sn.Microphone,
                    name: y === "advanced" ? "audio" : "shout",
                    userName: "Assistant",
                    origin: Wn.Remote
                });
                u(Tn),
                z(Tn),
                st(pd => Cn(pd, Hr => {
                    Hr && (Hr.numParticipants = 2)
                }
                )),
                S(lo)
            }
        }
        ;
        const ad = performance.now()
          , cd = performance.now()
          , Kr = await wt();
        await o({
            avmTrack: Kr,
            initialSetup: !0
        }),
        s.current && !s.current.stopped && (s.current.stop(),
        q.removeTrack(s.current.sender)),
        s.current = q.addTransceiver("video", {
            direction: "sendonly"
        });
        const dd = performance.now();
        await Mo.startTransceiverSession({
            peerConnection: q,
            payload: W,
            accessToken: t,
            proofOfWorkAnswer: V.proofOfWorkAnswer,
            eventSource: V.eventSource,
            signal: G,
            dataChannelId: ho
        });
        const ud = performance.now();
        z(Kr),
        e.setState(fe => {
            fe.conversationId = W.conversation_id ?? V.clientThreadId,
            fe.voiceSessionId = W.voice_session_id,
            fe.voiceMode = W.voice_mode
        }
        ),
        ce.current = !1,
        x(B.Connected),
        Mi.clearNegotiation();
        const ld = performance.now()
          , hd = performance.now();
        Be.current && Be.current.stop(),
        Be.current = new Wp(q,fe => {
            const Re = H.current && [B.Disconnected, B.Reconnecting, B.SignalReconnecting].includes(H.current);
            D.current.forEach(Oe => Oe(Re ? ue.Lost : fe.general)),
            N.current.forEach(Oe => Oe(Re ? ue.Lost : fe.local))
        }
        ),
        Be.current.start();
        const fd = performance.now();
        return Xc.set({
            peer_connection_setup_start_time: ot(F),
            peer_connection_setup_end_time: ot(ad),
            media_input_setup_start_time: ot(cd),
            media_input_setup_end_time: ot(dd),
            post_connection_setup_start_time: ot(ud),
            post_connection_setup_end_time: ot(ld),
            quality_monitor_setup_start_time: ot(hd),
            quality_monitor_setup_end_time: ot(fd)
        }),
        {
            type: "transceiver",
            success: !0
        }
    }
    , [t, wt, S, b, y, e, z, o])
      , Me = k.useMemo( () => ({
        room: ft,
        getTracks: Sn,
        getConnectionState: _,
        initVoiceMode: re,
        selectVoiceModeMetadata: Qt
    }), [ft, Sn, _, re, Qt]);
    return j.jsxs(Vr.Provider, {
        value: Me,
        children: [j.jsx("audio", {
            ref: i,
            autoPlay: !0,
            playsInline: !0
        }), n]
    })
}
;
function Ve() {
    const {room: n} = Br()
      , e = k.useRef({
        debug: (...t) => Te.debug(`[${n?.name ?? "no room"}]`, ...t),
        encoder: new TextEncoder,
        decoder: new TextDecoder
    }).current;
    return {
        room: n,
        ...e
    }
}
function Jp() {
    Yp(),
    $p(),
    Xp(),
    Qp()
}
function Qp() {
    const {room: n, debug: e} = Ve()
      , {cameraTrackState: t} = Oo()
      , r = Vo().video
      , s = k.useMemo( () => {
        const o = ["audioinput", "audiooutput"];
        return r && o.push("videoinput"),
        o
    }
    , [r]);
    k.useEffect( () => {
        function o() {
            Promise.all(s.map(async a => {
                if (t !== xe.Started && a === "videoinput")
                    return;
                const c = await Do.getLocalDevices(a)
                  , d = n?.getActiveDevice(a)
                  , u = await hn(a);
                if (!(d === u?.deviceId)) {
                    let h = null;
                    if (u ? h = u.deviceId : c[0] && (h = c[0].deviceId),
                    h) {
                        const f = await Yr(h, c)
                          , v = await Yr(d, c);
                        e(`Current active ${a} device "${v}" doesn't match default "${f}", switching to that instead`),
                        await n?.switchActiveDevice(a, h),
                        ne.defaultMediaDeviceChanged.success({
                            kind: a
                        })
                    }
                }
            }
            )).catch(a => {
                ne.defaultMediaDeviceChanged.failure(a)
            }
            )
        }
        if (navigator)
            return navigator.mediaDevices.addEventListener("devicechange", o),
            () => {
                navigator.mediaDevices.removeEventListener("devicechange", o)
            }
    }
    , [n, e, s, t])
}
function Yp() {
    const {room: n, debug: e} = Ve()
      , t = n?.getActiveDevice("audioinput")
      , i = n?.getActiveDevice("audiooutput");
    k.useEffect( () => {
        async function r() {
            const s = (await hn("audioinput"))?.deviceId
              , o = (await hn("audiooutput"))?.deviceId
              , a = async () => {
                s && t !== s && (e("switching audio input to default"),
                await n?.switchActiveDevice("audioinput", s))
            }
              , c = async () => {
                if (o && i !== o) {
                    e("switching audio output to default");
                    try {
                        await n?.switchActiveDevice("audiooutput", o)
                    } catch (d) {
                        e("failed to switch audio output", d)
                    }
                }
            }
            ;
            await Promise.all([a(), c()])
        }
        r()
    }
    , [t, i, e, n])
}
function $p() {
    const {cameraTrackState: n, finalizeCameraState: e} = Oo()
      , {room: t, debug: i} = Ve()
      , r = Pe()
      , o = Vo().video
      , a = o ? t?.getActiveDevice("videoinput") : void 0;
    k.useEffect( () => {
        async function c() {
            if (t)
                if (n === xe.Starting)
                    try {
                        await t.localParticipant.setCameraEnabled(!0),
                        Gn(t, r, "camera_front", "live"),
                        e(xe.Started)
                    } catch {
                        e(xe.Stopped)
                    }
                else
                    n === xe.Stopping && (await t.localParticipant.setCameraEnabled(!1),
                    Gn(t, r, "camera_front", "ended"),
                    e(xe.Stopped))
        }
        c()
    }
    , [n, e, t, r]),
    k.useEffect( () => {
        async function c() {
            const d = (await hn("videoinput"))?.deviceId;
            await (async () => {
                d && a !== d && (i("switching video input to default"),
                await t?.switchActiveDevice("videoinput", d))
            }
            )()
        }
        o && n === xe.Started && c()
    }
    , [a, i, t, o, n])
}
function Xp() {
    const {room: n} = Ve()
      , {screenshareTrackState: e, finalizeScreenshareState: t} = Vd()
      , i = Pe();
    k.useEffect( () => {
        async function r() {
            if (n)
                if (e === xe.Starting)
                    try {
                        await n.localParticipant.setScreenShareEnabled(!0, {
                            video: {
                                displaySurface: "monitor"
                            }
                        }),
                        Gn(n, i, "screen_share", "live"),
                        t(xe.Started)
                    } catch {
                        t(xe.Stopped)
                    }
                else
                    e === xe.Stopping && (await n.localParticipant.setScreenShareEnabled(!1),
                    Gn(n, i, "screen_share", "ended"),
                    t(xe.Stopped))
        }
        r()
    }
    , [n, e, t, i])
}
function Zc() {
    const {debug: n} = Ve()
      , e = Nt(i => i.conversationId)
      , t = Eo();
    return k.useCallback(async i => {
        const r = i
          , s = e && !Ro(e) ? e : void 0
          , o = r ?? s;
        if (o) {
            n(`refetch conversationId ${o}`);
            try {
                await Bd(o)
            } catch (a) {
                const c = "Failed to update conversation";
                n(c, a),
                t.danger(c, {
                    toastId: "refetch_conversation"
                })
            }
        }
    }
    , [e, n, t])
}
var Zp = (n => (n.EXCELLENT = "excellent",
n.GOOD = "good",
n.POOR = "poor",
n.LOST = "lost",
n.UNKNOWN = "unknown",
n))(Zp || {});
const em = {
    [ue.Excellent]: "excellent",
    [ue.Good]: "good",
    [ue.Poor]: "poor",
    [ue.Lost]: "lost",
    [ue.Unknown]: "unknown"
}
  , tm = 5e3
  , nm = 2e3
  , im = n => {
    const e = Pe()
      , {room: t} = Ve()
      , i = Nt(v => v.disconnectPending)
      , r = Nt(v => v.server.remoteState === pe.Speaking)
      , s = Nt(v => v.conversationId) ?? void 0
      , o = Td(s)
      , a = k.useRef(!1)
      , c = Zc()
      , d = md()
      , u = wo();
    a.current = r || a.current;
    const l = k.useCallback(async v => {
        clearTimeout(i),
        e.setState(y => {
            y.disconnectPending = void 0
        }
        ),
        t?.disconnect(),
        await c(o),
        e.setState(qd);
        const p = o ?? v;
        p && No(d, u, p),
        n?.refetchLater && window.setTimeout( () => {
            c(o)
        }
        , nm)
    }
    , [i, t, c, o, n?.refetchLater, d, u, e])
      , h = a.current && !o
      , f = k.useCallback( () => {
        e.setState(v => {
            v.disconnectPending = window.setTimeout(l, tm)
        }
        )
    }
    , [l, e]);
    return {
        disconnectPending: i !== void 0,
        shouldDelayDisconnect: h,
        delayDisconnect: f,
        immediateDisconnect: l
    }
}
;
function rm() {
    const n = Cd()
      , e = wo()
      , t = Pe()
      , {room: i, debug: r, decoder: s} = Ve()
      , {disconnectPending: o, shouldDelayDisconnect: a, delayDisconnect: c, immediateDisconnect: d} = im()
      , u = Zc()
      , l = k.useRef(!1)
      , h = k.useRef(!1)
      , f = k.useRef(!1)
      , v = k.useRef(!1)
      , {session: p} = wd()
      , y = Kn(x => x.lastVoiceSessionStartTime)
      , g = _o() === "livekit";
    k.useEffect( () => {
        const x = async L => {
            const {new_state: I} = L;
            if (t.setState(M => {
                (M.voiceMode !== "advanced" || I !== pe.Thinking) && (M.server.remoteState = I)
            }
            ),
            I === pe.Listening && !h.current && y instanceof Date) {
                const X = new Date().getTime() - y.getTime();
                ne.firstListeningLatency.success({
                    durationMs: X
                }),
                h.current = !0
            }
            if (I === pe.ListeningIntently)
                ne.voiceSessionListeningIntently.stateChange();
            else if (I === pe.Listening) {
                if (t.setState(M => {
                    M.metrics.numListening += 1
                }
                ),
                !f.current) {
                    const M = t.getState().voiceSessionId;
                    ne.voiceSessionFirstListening.stateChange({
                        voice_session_id: M ?? "unknown"
                    }),
                    f.current = !0
                }
                f.current = !0,
                ne.voiceSessionListening.stateChange()
            } else if (I === pe.Thinking)
                t.setState(M => {
                    M.metrics.numThinking += 1
                }
                ),
                ne.voiceSessionThinking.stateChange();
            else if (I === pe.Speaking) {
                if (t.setState(M => {
                    M.metrics.numSpeaking += 1
                }
                ),
                !v.current) {
                    const M = t.getState().voiceSessionId;
                    ne.voiceSessionFirstSpeaking.stateChange({
                        voice_session_id: M ?? "unknown"
                    }),
                    v.current = !0
                }
                ne.voiceSessionSpeaking.stateChange()
            } else
                I === pe.Halted && ne.voiceSessionHalted.stateChange()
        }
          , _ = async L => {
            t.setState(I => {
                I.server.usage = L
            }
            )
        }
          , S = async L => {
            t.setState(I => {
                I.server.toolUpdate = {
                    ...L
                }
            }
            ),
            L.update_type === "hangup" && (a ? c() : d())
        }
          , b = async L => {
            let I;
            try {
                I = JSON.parse(s.decode(L)),
                r("data received", I)
            } catch (M) {
                r("error parsing data", M);
                return
            }
            switch (t.setState(M => (M.server.messages.push({
                ...I,
                timestamp: new Date,
                source: "remote"
            }),
            M)),
            I.type) {
            case pt.StateUpdate:
                r("state update", I.payload);
                const {new_state: M, delay_s: X} = I.payload;
                if ([pe.Thinking, pe.Speaking].includes(M) && t.getState().server.turnContext.clear(),
                M === pe.Listening && !l.current) {
                    l.current = !0,
                    performance.mark("voice_mode.end");
                    const z = performance.measure("voice_mode", "voice_mode.start", "voice_mode.end").duration.toFixed(0);
                    ne.voiceMode.connect({
                        durationMs: z
                    }),
                    t.setState(H => {
                        H.metrics.sessionConnectedTime || (H.metrics.sessionConnectedTime = new Date)
                    }
                    )
                }
                M === pe.Thinking && X && (r(`${i?.name} delay thinking state by ${X} seconds`),
                x({
                    new_state: pe.ListeningIntently
                }),
                await new Promise(z => setTimeout(z, X * 1e3))),
                x(I.payload);
                break;
            case pt.ConversationUpdate:
                {
                    r("conversation update", I.payload);
                    const z = t.getState().conversationId
                      , {conversation_id: H} = I.payload;
                    if (z && Ro(z)) {
                        Pd.initThread({
                            clientThreadId: z,
                            conversationMode: {
                                kind: Bi.PrimaryAssistant
                            },
                            userId: p?.user?.id,
                            accountId: p?.account?.id
                        });
                        const ie = t.getState().conversationId;
                        ie != null && zd(n, ie, H),
                        t.setState(Se => {
                            Se.conversationId = H
                        }
                        ),
                        No(Lo, e, H);
                        const Ee = qi.getGizmoId(zi(z));
                        Wd(e, Ee)
                    }
                    await u(H),
                    o && d(H);
                    break
                }
            case pt.UsageUpdate:
                _(I.payload);
                break;
            case pt.ToolUpdate:
                S(I.payload);
                break;
            case pt.Performance:
                {
                    const z = I.payload.metrics;
                    t.setState(H => {
                        z.forEach(ie => {
                            ie.name === "total_latency_ms" ? H.metrics.totalLatencyMs.push(ie.ms) : ie.name === "current_rtt_ms" && H.metrics.currentRttMs.push(ie.ms)
                        }
                        )
                    }
                    );
                    break
                }
            case pt.StartupTelemetry:
                {
                    const [z] = I.payload.metrics
                      , H = I.payload.success;
                    r("conversation loaded (startup telemetry)"),
                    t.setState(ie => {
                        H ? ie.metrics.conversationStartSuccessTime = new Date : ie.metrics.conversationStartFailTime = new Date,
                        ie.metrics.conversationLatency = z?.ms ?? -1
                    }
                    );
                    break
                }
            }
        }
          , w = (L, I) => {
            r("track published", L, I)
        }
          , D = () => {
            r("disconnected"),
            t.setState(L => {
                L.metrics.sessionEndTime = new Date
            }
            ),
            Gd(t),
            ne.voiceSessionDisconnected.stateChange(),
            Io()
        }
          , N = (L, I) => {
            r(`Connection quality changed for participant ${I?.identity}: ${L}`),
            t.setState(M => {
                M.server.voiceConnectionQuality = em[L]
            }
            )
        }
          , U = () => {
            t.setState(L => {
                r("WebRTC connection established"),
                L.metrics.livekitConnectSuccessTime || (L.metrics.livekitConnectSuccessTime = new Date),
                g && !L.metrics.sessionConnectedTime && (L.metrics.sessionConnectedTime = new Date)
            }
            )
        }
        ;
        return i?.on(T.Connected, U),
        i?.on(T.DataReceived, b),
        i?.on(T.TrackPublished, w),
        i?.on(T.ConnectionQualityChanged, N),
        i?.on(T.Disconnected, D),
        () => {
            i?.off(T.Connected, U),
            i?.off(T.DataReceived, b),
            i?.off(T.TrackPublished, w),
            i?.off(T.ConnectionQualityChanged, N),
            i?.off(T.Disconnected, D)
        }
    }
    , [n, r, s, c, o, d, y, e, u, i, p?.account?.id, p?.user?.id, a, t, g])
}
function sm() {
    om(),
    am(),
    cm(),
    dm(),
    um()
}
function om() {
    const {room: n} = Ve()
      , e = Pe();
    k.useEffect( () => {
        e.setState(t => {
            t.dev.room = n
        }
        )
    }
    , [n, e])
}
function am() {
    const {getConnectionState: n} = Br()
      , e = n()
      , t = Pe();
    k.useEffect( () => {
        t.setState(i => {
            i.server.connectionState = e
        }
        )
    }
    , [e, t])
}
function cm() {
    const {room: n, debug: e, encoder: t} = Ve()
      , i = Pe();
    k.useEffect( () => {
        const r = !!i.getState().server.actions;
        if (n && !r) {
            const s = async o => {
                e("publishing action", o);
                const a = {
                    type: pt.ActionRequest,
                    payload: {
                        action: o
                    }
                };
                await n.localParticipant.publishData(t.encode(JSON.stringify(a)), {
                    reliable: !0
                }),
                i.setState(c => {
                    c.server.messages.push({
                        ...a,
                        timestamp: new Date,
                        source: "local"
                    })
                }
                )
            }
            ;
            i.setState(o => {
                o.server.actions = {
                    [ze.StartListeningIntently]: () => s(ze.StartListeningIntently),
                    [ze.StopListeningIntently]: () => s(ze.StopListeningIntently),
                    [ze.HaltAllActivity]: () => s(ze.HaltAllActivity),
                    [ze.ResumeListening]: () => s(ze.ResumeListening),
                    [ze.RelayMessage]: () => s(ze.RelayMessage)
                }
            }
            )
        }
    }
    , [n, e, t, i])
}
function dm() {
    const e = Pe()(t => t.isVoiceModeActive);
    k.useEffect( () => (Kn.setState({
        isVoiceActive: e
    }),
    () => {
        Kn.setState({
            isVoiceActive: !1
        })
    }
    ), [e])
}
function um() {
    const n = Pe()
      , {room: e, encoder: t} = Ve()
      , i = k.useCallback(async r => {
        await e?.localParticipant.publishData(t.encode(JSON.stringify(r)), {
            reliable: !0
        }),
        n.setState(s => {
            s.server.messages.push({
                ...r,
                timestamp: new Date,
                source: "local"
            })
        }
        )
    }
    , [e, t, n]);
    k.useEffect( () => {
        n.setState(r => {
            r.server.turnContext.setPublisher(i)
        }
        )
    }
    , [i, n])
}
const hg = k.memo(function() {
    return rm(),
    sm(),
    Jp(),
    null
});
function fg(n) {
    return {
        conversation_id: n.serverThreadId,
        parent_message_id: n.parentMessageId,
        voice_mode: n.isAdvancedMode ? "advanced" : "standard",
        eventSource: n.eventSource,
        clientThreadId: n.clientThreadId,
        gizmo_id: n.gizmoId,
        voice: n.voice,
        ...n.skipCacheReason ? {
            useVoiceStatusCache: !1,
            skipCacheReason: n.skipCacheReason
        } : {
            useVoiceStatusCache: !0
        }
    }
}
function lm({requestMicPermissions: n}={
    requestMicPermissions: !1
}) {
    const e = Po()
      , t = Pe()
      , i = lu()
      , {voiceName: r, voiceMainLanguage: s} = Uo()
      , o = Nt(g => g.isVoiceModeActive)
      , a = Kd()
      , {room: c} = Ve()
      , {initVoiceMode: d, selectVoiceModeMetadata: u} = Br()
      , l = Hd()
      , h = Jd()
      , f = Ed()
      , v = e.formatMessage({
        id: "useVoiceModeButtonAction.error",
        defaultMessage: "Failed to start voice mode"
    })
      , p = k.useCallback(async () => {
        a && (await c?.disconnect(),
        Gi(null, t),
        t.setState(g => {
            g.server.remoteState = pe.Halted
        }
        ))
    }
    , [a, c, t]);
    return {
        startVoiceMode: k.useCallback(async g => {
            Wi.setItem(xo.VoiceLastUsed, new Date().toUTCString()),
            a && (await c?.disconnect(),
            Gi(null, t)),
            n && await h();
            const x = await hn("audioinput");
            t.setState(b => {
                b.audioInputDevice = x,
                b.isVoiceModeActive = !0,
                b.voiceMode = g.voice_mode,
                b.server.remoteState = pe.Connecting,
                b.metrics.sessionCreateTime = new Date,
                b.metrics.totalLatencyMs = [],
                b.metrics.currentRttMs = [],
                b.metrics.numSpeaking = 0,
                b.metrics.numThinking = 0,
                b.metrics.numListening = 0,
                b.metrics.getStatusSentTime = void 0,
                b.metrics.getStatusSuccessTime = void 0,
                b.metrics.getStatusFailedTime = void 0,
                b.metrics.proofOfWorkStartTime = void 0,
                b.metrics.proofOfWorkEndTime = void 0,
                b.metrics.getTokenSentTime = void 0,
                b.metrics.getTokenSuccessTime = void 0,
                b.metrics.getTokenFailedTime = void 0,
                b.metrics.livekitConnectTime = void 0,
                b.metrics.livekitConnectSuccessTime = void 0,
                b.metrics.livekitConnectFailTime = void 0,
                b.metrics.conversationStartSuccessTime = void 0,
                b.metrics.conversationStartFailTime = void 0,
                b.metrics.sessionConnectedTime = void 0
            }
            );
            const _ = performance.now()
              , S = [8, 4, 4, 4, 12].map(b => Math.floor(Math.random() * Math.pow(10, b)).toString(16).padStart(b, "0").toUpperCase()).join("-");
            Rd.set(S);
            try {
                ne.livekit.connectCalled(),
                t.setState(ce => {
                    ce.metrics.getStatusSentTime = new Date
                }
                );
                const b = du();
                if (g.useVoiceStatusCache)
                    if (b)
                        ne.voiceStatusCache.hit();
                    else
                        for (const ce of uu())
                            ne.voiceStatusCache.ineligible({
                                reason: ce
                            });
                else
                    ne.voiceStatusCache.skipped({
                        reason: g.skipCacheReason
                    });
                const w = b?.proofOfWorkPromise
                  , D = g.useVoiceStatusCache && b ? b : await l({
                    conversation_id: g.conversation_id ?? null,
                    requested_voice_mode: g.voice_mode ?? null,
                    gizmo_id: g.gizmo_id ?? null,
                    voice: g.voice,
                    requested_default_model: g.requested_default_model ?? null
                }, g.eventSource);
                t.setState(ce => {
                    ce.metrics.getStatusSuccessTime = new Date,
                    ce.metrics.proofOfWorkStartTime = new Date
                }
                );
                const {default_voice_mode: N, chatreq: U} = D;
                performance.mark("livekit.start"),
                performance.mark("voice_mode.start");
                const {eventSource: L, voice: I, clientThreadId: M, voice_mode: X, gizmo_id: z, ...H} = g
                  , Ee = u(D).default_model_slug
                  , Se = N === "advanced" ? Ee : void 0
                  , Be = g.useVoiceStatusCache && w ? await w : U ? await Qd.getEnforcementToken(U) : null
                  , ft = g.gizmo_id ? {
                    kind: Bi.GizmoInteraction,
                    gizmo_id: g.gizmo_id
                } : {
                    kind: Bi.PrimaryAssistant
                };
                t.setState(ce => {
                    ce.metrics.proofOfWorkEndTime = new Date,
                    ce.metrics.getTokenSentTime = new Date
                }
                ),
                Yd(H),
                (await d({
                    ...H,
                    voice: I ?? r,
                    language_code: s,
                    voice_session_id: S,
                    timezone_offset_min: new Date().getTimezoneOffset(),
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    voice_mode: N,
                    model_slug: Ee,
                    model_slug_advanced: Se,
                    chatreq_token: U?.token,
                    history_and_training_disabled: f,
                    conversation_mode: ft
                }, {
                    eventSource: g.eventSource,
                    clientThreadId: g.clientThreadId,
                    proofOfWorkAnswer: Be
                })).success && (t.setState(ce => {
                    ce.metrics.getTokenSuccessTime = new Date,
                    ce.metrics.livekitConnectTime = new Date
                }
                ),
                Kn.setState({
                    lastVoiceSessionStartTime: new Date
                }),
                t.setState(ce => {
                    ce.server.remoteState = pe.Listening
                }
                ),
                performance.mark("livekit.end"),
                ne.livekit.success({
                    durationMs: performance.measure("livekit", "livekit.start", "livekit.end").duration.toFixed(0),
                    voice_session_id: S
                }),
                ne.connectionLatency.success({
                    durationMs: performance.now() - _
                }))
            } catch (b) {
                const w = $d(b);
                t.setState(N => {
                    w || (N.metrics.getStatusSuccessTime || (N.metrics.getStatusFailedTime = new Date),
                    N.metrics.getTokenSuccessTime || (N.metrics.getTokenFailedTime = new Date))
                }
                );
                const D = Xd(t.getState());
                throw ne.livekit.failure(b, {
                    ...D,
                    voice_session_id: S,
                    eventSource: g.eventSource,
                    voice: g.voice ?? "(undefined)",
                    requested_voice_mode: g.voice_mode ?? "(undefined)",
                    gizmo_id: g.gizmo_id ?? "(undefined)",
                    user_aborted: w
                }),
                Te.debug("failed to get voice token", b),
                t.setState(N => {
                    N.server.remoteState = pe.Halted
                }
                ),
                ne.connectionLatency.failure(b, {
                    durationMs: performance.now() - _,
                    voice_session_id: S,
                    user_aborted: w
                }),
                i.danger(v, {
                    toastId: "start_voice_mode_failure"
                }),
                Io(),
                b
            }
        }
        , [h, v, l, a, f, n, c, i, s, r, t, d, u]),
        stopVoiceMode: p,
        isConnected: a,
        isVoiceModeActive: o
    }
}
const hm = () => Fo().some(e => e.voice === "shade")
  , fo = xo.JumpToShade
  , fm = () => {
    const n = Wi.getItem(fo) === "true"
      , e = k.useCallback( () => {
        Wi.setItem(fo, "true")
    }
    , []);
    return {
        alreadyTriggered: n,
        setAlreadyTriggered: e
    }
}
  , pm = 2
  , mm = ({viewport: n, canvasSize: e, shouldMeasurePerf: t, source: i}) => {
    const r = k.useRef({})
      , s = k.useCallback(o => {
        const a = o.getExtension("WEBGL_debug_renderer_info");
        a && (r.current.vendor = o.getParameter(a.UNMASKED_VENDOR_WEBGL),
        r.current.renderer = o.getParameter(a.UNMASKED_RENDERER_WEBGL))
    }
    , []);
    return k.useEffect( () => {
        const o = {
            vendor: r.current.vendor ?? "(unavailable)",
            renderer: r.current.renderer ?? "(unavailable)",
            width: n[0],
            height: n[1],
            canvasWidth: e[0],
            canvasHeight: e[1],
            dpr: window.devicePixelRatio,
            source: i
        };
        !_d(o, r.current) && t && (r.current = o,
        jo(pm).then(c => {
            ne.bloop.performance({
                ...o,
                fps: c
            })
        }
        ))
    }
    , [e, t, n, i]),
    s
}
  , gm = .25
  , vm = 3
  , po = 28
  , Ni = 55
  , Li = 200
  , mo = 1.1
  , bm = ({viewport: n, initialScale: e, shouldCalibrate: t}) => {
    const [i,r] = k.useState(e)
      , s = k.useRef(void 0)
      , o = k.useRef(void 0)
      , a = k.useRef(void 0)
      , c = k.useRef("down")
      , d = k.useCallback( () => {
        const u = c.current === "up" ? vm : gm;
        jo(u).then(l => {
            if (l < po) {
                c.current = "down";
                const h = Math.max(l, 1)
                  , f = Math.sqrt(h / po);
                r(v => v * f),
                o.current = window.setTimeout(d, Li)
            } else if (a.current) {
                const h = l >= Ni
                  , f = l >= a.current * mo;
                if (h || f)
                    c.current = "up",
                    r(v => v * mo),
                    o.current = window.setTimeout(d, Li);
                else if (l < Ni) {
                    c.current = "down";
                    const v = Math.sqrt(l / Ni);
                    r(p => p * v)
                }
            }
            a.current = l
        }
        )
    }
    , []);
    return k.useEffect( () => {
        const [u,l] = n
          , [h,f] = s.current ?? [];
        return t && (h !== u || f !== l) && (s.current = n,
        clearTimeout(o.current),
        r(e),
        o.current = window.setTimeout(d, Li)),
        () => {
            clearTimeout(o.current)
        }
    }
    , [t, d, e, n]),
    i
}
;
var Ui, go;
function ym() {
    if (go)
        return Ui;
    go = 1;
    var n = Id()
      , e = xd()
      , t = Ad()
      , i = Dd()
      , r = Zd()
      , s = Math.max;
    function o(a) {
        if (!(a && a.length))
            return [];
        var c = 0;
        return a = n(a, function(d) {
            if (r(d))
                return c = s(d.length, c),
                !0
        }),
        i(c, function(d) {
            return e(a, t(d))
        })
    }
    return Ui = o,
    Ui
}
var Fi, vo;
function km() {
    if (vo)
        return Fi;
    vo = 1;
    var n = eu()
      , e = ym()
      , t = n(e);
    return Fi = t,
    Fi
}
var Sm = km();
const ji = gd(Sm)
  , Tm = {
    bands: 5,
    loPass: 100,
    hiPass: 600,
    updateInterval: 32,
    analyserOptions: {
        fftSize: 2048
    }
}
  , Cm = n => {
    const e = t => {
        let s = 1 - Math.max(-100, Math.min(-10, t)) * -1 / 100;
        return s = Math.sqrt(s),
        s
    }
    ;
    return n.map(t => t === -1 / 0 ? 0 : e(t))
}
;
function qr(n, e={}) {
    const t = {
        ...Tm,
        ...e
    }
      , [i,r] = k.useState(new Array(t.bands).fill(0));
    return k.useEffect( () => {
        if (!n)
            return;
        const {analyser: s, cleanup: o} = wm(n, t.analyserOptions)
          , a = s.frequencyBinCount
          , c = new Float32Array(a)
          , u = setInterval( () => {
            s.getFloatFrequencyData(c);
            let l = new Float32Array(c.length);
            for (let p = 0; p < c.length; p++)
                l[p] = c[p];
            l = l.slice(t.loPass, t.hiPass);
            const h = Cm(l)
              , f = Math.ceil(h.length / t.bands)
              , v = [];
            for (let p = 0; p < t.bands; p++) {
                const y = h.slice(p * f, (p + 1) * f).reduce( (g, x) => g += x, 0);
                v.push(y / f)
            }
            r(v)
        }
        , t.updateInterval);
        return () => {
            o(),
            clearInterval(u)
        }
    }
    , [n, JSON.stringify(e)]),
    i
}
function wm(n, e) {
    const t = {
        fftSize: 2048,
        smoothingTimeConstant: .8,
        minDecibels: -100,
        maxDecibels: -80,
        ...e
    }
      , i = Pm();
    if (!i)
        throw new Error("Audio Context not supported on this browser");
    let r;
    n instanceof HTMLAudioElement ? r = i.createMediaElementSource(n) : r = i.createMediaStreamSource(new MediaStream([n]));
    const s = i.createAnalyser();
    s.minDecibels = t.minDecibels,
    s.maxDecibels = t.maxDecibels,
    s.fftSize = t.fftSize,
    s.smoothingTimeConstant = t.smoothingTimeConstant,
    r.connect(s),
    n instanceof HTMLAudioElement && s.connect(i.destination);
    const o = new Uint8Array(s.frequencyBinCount);
    return {
        calculateVolume: () => {
            s.getByteFrequencyData(o);
            let d = 0;
            for (const l of o)
                d += Math.pow(l / 255, 2);
            return Math.sqrt(d / o.length)
        }
        ,
        analyser: s,
        cleanup: async () => {
            await i.close()
        }
    }
}
function Pm() {
    const n = typeof window < "u" && (window.AudioContext || window.webkitAudioContext);
    if (n)
        return new n({
            latencyHint: "interactive"
        })
}
const Em = 60
  , fi = Math.floor(1e3 / Em)
  , zr = 240
  , ed = 2048
  , td = new Array(zr).fill(0)
  , Rm = n => {
    const e = qr(n, {
        bands: zr,
        updateInterval: fi,
        loPass: 0,
        hiPass: 400,
        analyserOptions: {
            fftSize: ed
        }
    });
    return e.length === 0 ? td : e
}
  , Wr = n => {
    const {magnitudes: e, binCount: t, gainMultiplier: i} = n;
    if (e.length === 0)
        return new Array(t).fill(0);
    const r = Math.ceil(e.length / t)
      , s = [];
    for (let o = 0; o < e.length; o += r) {
        const a = Math.min(o + r, e.length)
          , c = e.slice(o, a).sort( (h, f) => h - f)
          , d = Math.floor(c.length / 2);
        let u;
        c.length % 2 === 0 ? u = (c[d - 1] + c[d]) / 2 : u = c[d],
        u = Math.abs(u),
        u *= i;
        const l = u / (u + 1);
        s.push(l)
    }
    return s
}
  , nd = (n, e) => {
    const t = e.sampleRate
      , i = n.length
      , r = e.bandCount
      , s = e.binCount
      , o = e.gainMultipliers;
    if (o.length !== r)
        throw new Error("gainMultipliers must have length equal to bandCount");
    const a = i * 2
      , c = t / a
      , d = n.map( (v, p) => p * c)
      , u = 20
      , l = t / 2
      , h = new Array(r + 1).fill(0).map( (v, p) => u * Math.pow(l / u, p / r))
      , f = new Array(r).fill(null).map( () => []);
    for (let v = 0; v < d.length; v += 1)
        for (let p = 0; p < r; p += 1)
            if (d[v] >= h[p] && d[v] < h[p + 1]) {
                f[p].push(n[v]);
                break
            }
    for (let v = 0; v < r; v += 1) {
        const p = f[v]
          , y = o[v];
        f[v] = Wr({
            magnitudes: p,
            binCount: s,
            gainMultiplier: y
        })
    }
    return f
}
  , bo = 60
  , id = 48e3
  , _m = 1
  , Im = 2
  , xm = 40
  , Am = 2;
function yo({time: n, timeConstant: e}) {
    return 1 - Math.exp(-n / e)
}
function ko(n, e) {
    const t = e[1] - e[0];
    return e[0] + n * t
}
const Vi = n => {
    if (!Array.isArray(n) || n.length !== 2 || typeof n[0] != "number" || typeof n[1] != "number")
        throw new Error("zip failed - received a value that is not a [number, number] tuple")
}
  , Dm = n => {
    const {prevAudioData: e, prevCumulativeAudioData: t, deltaTimeS: i, audioDataRaw: r} = n
      , s = r.map(h => h * i * bo * _m)
      , o = yo({
        time: i,
        timeConstant: Im
    })
      , a = ji(e, s).map(h => (Vi(h),
    ko(o, h)))
      , c = r.map(h => h * i * bo * xm)
      , d = ji(t, c).map(h => (Vi(h),
    h[0] + h[1]))
      , u = yo({
        time: i,
        timeConstant: Am
    })
      , l = ji(t, d).map(h => (Vi(h),
    ko(u, h)));
    return {
        audioData: a,
        cumulativeAudioData: l
    }
}
  , pg = (n, e) => {
    const t = Rm(n)
      , i = nd(t, {
        sampleRate: id,
        binCount: e.bins,
        bandCount: e.bands,
        gainMultipliers: e.gainMultipliers
    })
      , r = Wr({
        magnitudes: t,
        binCount: 1,
        gainMultiplier: 1
    });
    return {
        bandMagnitudes: i,
        cumulativeMagnitude: r
    }
}
;
function Mm() {
    let n = null, e, t = 0;
    const i = 350;
    let r;
    const s = (a, c, d) => a + (c - a) * d
      , o = (a, c) => {
        if (a.length !== c.length)
            return !1;
        for (let d = 0; d < a.length; d++)
            if (a[d] !== c[d])
                return !1;
        return !0
    }
    ;
    return function(c) {
        const d = performance.now();
        if (!n)
            return e = {
                bloopColorMain: new Float32Array(c.bloopColorMain),
                bloopColorLow: new Float32Array(c.bloopColorLow),
                bloopColorMid: new Float32Array(c.bloopColorMid),
                bloopColorHigh: new Float32Array(c.bloopColorHigh)
            },
            n = {
                bloopColorMain: new Float32Array(c.bloopColorMain),
                bloopColorLow: new Float32Array(c.bloopColorLow),
                bloopColorMid: new Float32Array(c.bloopColorMid),
                bloopColorHigh: new Float32Array(c.bloopColorHigh)
            },
            t = d,
            r = e,
            r;
        let u = !1;
        const l = ["bloopColorMain", "bloopColorLow", "bloopColorMid", "bloopColorHigh"];
        for (const v of l)
            if (!o(c[v], n[v])) {
                u = !0;
                break
            }
        u && (e = {
            bloopColorMain: new Float32Array(r.bloopColorMain),
            bloopColorLow: new Float32Array(r.bloopColorLow),
            bloopColorMid: new Float32Array(r.bloopColorMid),
            bloopColorHigh: new Float32Array(r.bloopColorHigh)
        },
        t = d,
        n = {
            bloopColorMain: new Float32Array(c.bloopColorMain),
            bloopColorLow: new Float32Array(c.bloopColorLow),
            bloopColorMid: new Float32Array(c.bloopColorMid),
            bloopColorHigh: new Float32Array(c.bloopColorHigh)
        });
        let h = (d - t) / i;
        h > 1 && (h = 1);
        const f = {
            bloopColorMain: new Float32Array(e.bloopColorMain.length),
            bloopColorLow: new Float32Array(e.bloopColorLow.length),
            bloopColorMid: new Float32Array(e.bloopColorMid.length),
            bloopColorHigh: new Float32Array(e.bloopColorHigh.length)
        };
        for (const v of l) {
            const p = e[v].length;
            for (let y = 0; y < p; y++) {
                const g = e[v][y]
                  , x = c[v][y];
                f[v][y] = s(g, x, h)
            }
        }
        return r = f,
        f
    }
}
const en = Te.createChild("GLCanvas");
function Om({className: n, vert: e, frag: t, Behaviors: i, onViewportUpdate: r, onRenderComplete: s, onGlAvailable: o, onCanvasSizeUpdate: a, scale: c}) {
    const d = k.useRef(null)
      , u = k.useRef(null)
      , [l,h] = k.useState(null)
      , [f,v] = k.useState()
      , p = k.useRef(tu(x => {
        const {width: _, height: S} = x.contentRect
          , b = Math.floor(Math.min(_ ?? 0, S ?? 0));
        h(b),
        r?.({
            width: b,
            height: b
        })
    }
    , 100))
      , y = nu(p.current);
    if (Jr( () => {
        const x = d.current
          , {width: _, height: S} = x ?? {};
        if (x && l != null && _ && S) {
            const b = x.getContext("webgl2", {
                premultipliedAlpha: !0
            });
            b ? v(b) : en.error("webgl2 context not supported")
        }
    }
    , [l]),
    Jr( () => {
        if (!f)
            return;
        const x = f.createProgram()
          , _ = f.createShader(f.VERTEX_SHADER)
          , S = f.createShader(f.FRAGMENT_SHADER);
        if (!x) {
            en.debug("failed to create program");
            return
        }
        if (!_ || !S) {
            en.debug("failed to create shaders", _, S);
            return
        }
        let b = "";
        if (f.shaderSource(_, e),
        f.compileShader(_),
        b += `vertShader:
${f.getShaderInfoLog(_)}
`,
        f.attachShader(x, _),
        f.shaderSource(S, t),
        f.compileShader(S),
        b += `fragShader:
${f.getShaderInfoLog(S)}
`,
        f.attachShader(x, S),
        f.linkProgram(x),
        f.useProgram(x),
        b += f.getProgramInfoLog(x),
        !f.getProgramParameter(x, f.LINK_STATUS))
            throw `Could not compile WebGL program. 

${b}`;
        u.current = x,
        en.debug("program created"),
        o?.(f, x);
        const w = f.fenceSync(f.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return w && (f.waitSync(w, 0, f.TIMEOUT_IGNORED),
        s?.()),
        () => {
            en.debug("cleaning up"),
            u.current = null,
            f.detachShader(x, _),
            f.detachShader(x, S),
            f.deleteShader(_),
            f.deleteShader(S),
            f.deleteProgram(x)
        }
    }
    , [f, t, e]),
    l != null && f && d.current) {
        const x = d.current
          , _ = l * window.devicePixelRatio * (c ?? 1);
        x.width = _,
        x.height = _,
        f.viewport(0, 0, _, _),
        a?.({
            width: _,
            height: _
        })
    }
    const g = u.current;
    return j.jsxs("div", {
        className: n,
        ref: y,
        children: [j.jsx("canvas", {
            ref: d,
            style: {
                width: l ?? void 0,
                height: l ?? void 0
            }
        }, l), f && g && i && j.jsx(i, {
            ctx: f,
            program: g
        })]
    })
}
function Nm({GLUniformsSetter: n, textureImage: e, textureName: t, variablesRef: i, className: r, vert: s, frag: o, onViewportUpdate: a, onRenderComplete: c, onGlAvailable: d, onCanvasSizeUpdate: u, scale: l}) {
    const h = k.useRef(void 0)
      , f = k.useCallback(async (y, g) => {
        if (h.current = new n(y,g),
        e && t) {
            const x = y.createTexture();
            y.bindTexture(y.TEXTURE_2D, x),
            y.texParameteri(y.TEXTURE_2D, y.TEXTURE_WRAP_S, y.CLAMP_TO_EDGE),
            y.texParameteri(y.TEXTURE_2D, y.TEXTURE_WRAP_T, y.CLAMP_TO_EDGE),
            y.texParameteri(y.TEXTURE_2D, y.TEXTURE_MIN_FILTER, y.LINEAR),
            y.texParameteri(y.TEXTURE_2D, y.TEXTURE_MAG_FILTER, y.LINEAR),
            y.texImage2D(y.TEXTURE_2D, 0, y.RGBA, y.RGBA, y.UNSIGNED_BYTE, e);
            const _ = y.getUniformLocation(g, t);
            y.activeTexture(y.TEXTURE0),
            y.bindTexture(y.TEXTURE_2D, x),
            y.uniform1i(_, 0)
        }
        d?.(y, g)
    }
    , [n, e, t, d])
      , v = k.useRef(void 0)
      , p = k.useCallback( () => {
        h.current && i.current && h.current.setVariablesAndRender(i.current),
        v.current = requestAnimationFrame(p)
    }
    , [i]);
    return k.useEffect( () => (p(),
    () => {
        v.current && cancelAnimationFrame(v.current)
    }
    ), [p]),
    j.jsx(Om, {
        className: r,
        vert: s,
        frag: o,
        onViewportUpdate: a,
        onRenderComplete: c,
        onGlAvailable: f,
        onCanvasSizeUpdate: u,
        scale: l,
        Behaviors: () => null
    })
}
const Lm = "https://cdn.oaistatic.com/assets/noise-watercolor-m3j88gni.webp"
  , Um = {
    src: Lm
};
let rd;
const oi = new window.Image;
oi.crossOrigin = "anonymous";
oi.src = Um.src;
oi.onload = () => {
    rd = oi
}
;
var Fm = `#version 300 es
#define E (2.71828182846)
#define pi (3.14159265358979323844)
#define NUM_OCTAVES (4)

precision highp float;

struct ColoredSDF {
  float distance;
  vec4 color;
};

struct SDFArgs {
  vec2 st;
  float amount;
  float duration;
  float time;
  float mainRadius;
};

float triangle(float t, float p) {
  return 2.0 * abs(t / p - floor(t / p + 0.5));
}

float spring(float t, float d) {
  return 1.0 - exp(-E * 2.0 * t) * cos((1.0 - d) * 115.0 * t);
}

float silkySmooth(float t, float k) {
  return atan(k * sin((t - 0.5) * pi)) / atan(k) * 0.5 + 0.5;
}

float scaled(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), float(0), float(1));
}

float fixedSpring(float t, float d) {
  float s = mix(
    1.0 - exp(-E * 2.0 * t) * cos((1.0 - d) * 115.0 * t),
    1.0,
    scaled(0.0, 1.0, t)
  );
  return s * (1.0 - t) + t;
}

float bounce(float t, float d) {
  return -sin(pi * (1.0 - d) * t) *
  (1.0 - t) *
  exp(-2.71828182846 * 2.0 * t) *
  t *
  10.0;
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float random(ivec2 st) {
  return random(vec2(st));
}

float random(float p) {
  return random(vec2(p));
}

float opSmoothUnion(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) - k * h * (1.0 - h);
}

float opSmoothSubtraction(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 - 0.5 * (d2 + d1) / k, 0.0, 1.0);
  return mix(d2, -d1, h) + k * h * (1.0 - h);
}

float opSmoothIntersection(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 - 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) + k * h * (1.0 - h);
}

float sdRoundedBox(vec2 p, vec2 b, vec4 r) {
  r.xy = p.x > 0.0 ? r.xy : r.zw;
  r.x = p.y > 0.0 ? r.x : r.y;
  vec2 q = abs(p) - b + r.x;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;
}

float sdSegment(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

float sdArc(vec2 p, vec2 sca, vec2 scb, float ra, float rb) {
  p *= mat2(sca.x, sca.y, -sca.y, sca.x);
  p.x = abs(p.x);
  return scb.y * p.x > scb.x * p.y
    ? length(p - ra * scb) - rb
    : abs(length(p) - ra) - rb;
}

float arc(vec2 st, float startAngle, float length, float radius, float width) {
  return sdArc(
    st,
    vec2(sin(startAngle), cos(startAngle)),
    vec2(sin(length), cos(length)),
    radius,
    width
  );
}

vec2 rotate(vec2 v, float a) {
  float s = sin(a);
  float c = cos(a);
  mat2 m = mat2(c, s, -s, c);
  return m * v;
}

vec3 blendLinearBurn_13_5(vec3 base, vec3 blend) {
  
  return max(base + blend - vec3(1.0), vec3(0.0));
}

vec3 blendLinearBurn_13_5(vec3 base, vec3 blend, float opacity) {
  return blendLinearBurn_13_5(base, blend) * opacity + base * (1.0 - opacity);
}

vec4 permute(vec4 x) {
  return mod((x * 34.0 + 1.0) * x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float cnoise(vec3 P) {
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = vec4(Pi0.z);
  vec4 iz1 = vec4(Pi1.z);

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(vec4(0.0), gx0) - 0.5);
  gy0 -= sz0 * (step(vec4(0.0), gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(vec4(0.0), gx1) - 0.5);
  gy1 -= sz1 * (step(vec4(0.0), gy1) - 0.5);

  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

  vec4 norm0 = taylorInvSqrt(
    vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110))
  );
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(
    vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111))
  );
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(
    vec4(n000, n100, n010, n110),
    vec4(n001, n101, n011, n111),
    fade_xyz.z
  );
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

float rand(vec2 n) {
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 ip = floor(p);
  vec2 u = fract(p);
  u = u * u * (3.0 - 2.0 * u);

  float res = mix(
    mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
    mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x),
    u.y
  );
  return res * res;
}

float fbm(vec2 x) {
  float v = 0.0;
  float a = 0.5;
  vec2 shift = vec2(100.0);
  
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < NUM_OCTAVES; ++i) {
    v += a * noise(x);
    x = rot * x * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}

/**
 * End new code for colored orb
 */

ColoredSDF applyIdleState(
  ColoredSDF sdf,
  SDFArgs args,
  bool isDarkMode /**
 * new bool
 */
) {
  float midRadius = 0.12; 
  float maxRadius = 0.3; 
  float t1 = 1.0; 
  float gamma = 3.0; 
  float omega = pi / 2.0; 

  
  float k = exp(-gamma) * omega;

  float radius;
  if (args.time <= t1) {
    
    float t_prime = args.time / t1;
    
    float springValue = 1.0 - exp(-gamma * t_prime) * cos(omega * t_prime);
    radius = midRadius * springValue;
  } else {
    
    float adjustedTime = args.time - t1;
    
    radius =
      midRadius + (maxRadius - midRadius) * (1.0 - exp(-k * adjustedTime));
  }

  
  float distance = length(args.st) - radius;

  
  sdf.distance = mix(sdf.distance, distance, args.amount);

  
  
  float alpha = sin(pi / 0.7 * args.time) * 0.3 + 0.7;
  vec4 color = vec4(isDarkMode ? vec3(1.0) : vec3(0.0), alpha);

  
  sdf.color = mix(sdf.color, color, args.amount);

  return sdf;
}

ColoredSDF applyIdleStateLegacy(ColoredSDF sdf, SDFArgs args, bool isDarkMode) {
  float connectedLinearAnimation = scaled(0.0, 2.0, args.duration);
  float connectedAnimation = fixedSpring(connectedLinearAnimation, 0.96);
  float circleSize =
    mix(
      pow(scaled(0.0, 3.0, args.time), 2.0) * 0.75 + 0.1,
      1.0,
      connectedAnimation
    ) *
    0.33;
  vec2 rotatedCoords = rotate(
    args.st,
    -args.time * pi -
      connectedAnimation * pi * 2.0 -
      pi * 2.0 * 5.0 * silkySmooth(scaled(0.0, 5.0, args.time), 2.0)
  );

  float strokeWidth = mix(circleSize / 2.0, circleSize, connectedAnimation);
  float connecting = abs(length(args.st) - circleSize) - strokeWidth;

  float connected = length(args.st) - circleSize;
  float idleDist = mix(connecting, connected, connectedAnimation);

  float d = min(sdf.distance, idleDist);
  sdf.distance = mix(sdf.distance, d, args.amount);
  float angle = atan(rotatedCoords.y, rotatedCoords.x);
  float alpha = mix(
    min(1.0, scaled(-pi, pi, angle)),
    1.0,
    connectedLinearAnimation
  );

  float spinningCircleDist =
    length(
      rotatedCoords -
        vec2(-mix(circleSize, strokeWidth, connectedAnimation), 0.0)
    ) -
    strokeWidth;

  alpha = min(
    1.0,
    max(
      alpha,
      smoothstep(0.005, 0.0, spinningCircleDist) + connectedAnimation * 4.0
    )
  );

  sdf.color = mix(
    sdf.color,
    vec4(isDarkMode ? vec3(1.0) : vec3(0.0), alpha),
    args.amount
  );
  return sdf;
}

ColoredSDF applyListenState(
  ColoredSDF sdf,
  SDFArgs args,
  float micLevel,
  float listenTimestamp, /* new */
  float touchDownTimestamp, /* new */
  float touchUpTimestamp, /* new */
  bool fadeBloopWhileListening /* new */
) {
  float breathingSequence = sin(args.time) * 0.5 + 0.5;
  float entryAnimation = fixedSpring(scaled(0.0, 3.0, args.duration), 0.9);

  float touch =
    fixedSpring(scaled(0.0, 1.0, args.time - touchDownTimestamp), 0.99) -
    fixedSpring(scaled(0.0, 0.8, args.time - touchUpTimestamp), 1.0);

  float listenAnimation = clamp(
    spring(scaled(0.0, 0.9, args.duration), 1.0),
    0.0,
    1.0
  );
  float radius = 0.0;
  float smoothlevel = micLevel;
  float l1 = smoothlevel;
  radius = 0.38 + l1 * 0.05 + breathingSequence * 0.03;
  radius *= 1.0 - (1.0 - entryAnimation) * 0.25;

  float ring = 10000.0;

  
  if (touch > 0.0) {
    touch = min(touch, listenAnimation); 
    float arcWidth = radius * 0.1;

    
    radius -= touch * arcWidth * 2.3;
    
    radius = min(
      radius,
      mix(radius, args.mainRadius - arcWidth * 2.3 - l1 * 0.01, touch)
    );

    float startAngle = 0.0;
    float arcLengthTouch =
      smoothstep(0.04, 1.0, touch) * pi * (1.0 - arcWidth / 3.0 / radius);

    float arcLength = 0.0;
    float radiusTouch =
      radius * fixedSpring(scaled(0.0, 1.0, args.duration), 1.0) * args.amount +
      l1 * 0.01;

    radiusTouch +=
      arcWidth * 1.3 * mix(-1.0, 1.0, smoothstep(0.0, 0.12, touch));

    float ringRadius = 0.0;
    arcLength = arcLengthTouch;
    ringRadius = radiusTouch;
    startAngle = pi / 2.0 - (args.time - touchDownTimestamp) / 2.0;

    ring = arc(args.st, startAngle, arcLength, ringRadius, arcWidth); 
  }

  float d = length(args.st) - radius;

  d = min(d, ring);

  sdf.distance = mix(sdf.distance, d, args.amount);

  if (fadeBloopWhileListening) {
    
    sdf.color.a = mix(
      sdf.color.a,
      mix(1.0, 1.0 - l1 * 0.6, listenAnimation),
      args.amount
    );
  } else {
    sdf.color.a = 1.0;
  }

  return sdf;
}

ColoredSDF applyThinkState(ColoredSDF sdf, SDFArgs args) {
  float d = 1000.0; 
  int count = 5; 
  float entryAnimation = spring(scaled(0.0, 1.0, args.duration), 1.0);

  float thinkingDotEntryAnimation = spring(
    scaled(0.1, 1.1, args.duration),
    1.0
  );
  float thinkingDotRadius =
    mix(0.2, 0.06, thinkingDotEntryAnimation) * args.amount;

  
  args.st.x -= thinkingDotRadius * 0.5 * thinkingDotEntryAnimation;

  for (int i = 0; i < count; i++) {
    float f = float(float(i) + 0.5) / float(count); 
    float a =
      -f * pi * 2.0 +
      args.time / 3.0 +
      spring(scaled(0.0, 10.0, args.duration), 1.0) * pi / 2.0;
    float ringRadi = args.mainRadius * 0.45 * entryAnimation;

    
    ringRadi -=
      (sin(
        entryAnimation * pi * 4.0 +
          a * pi * 2.0 +
          args.time * 3.0 -
          silkySmooth(args.time / 4.0, 2.0) * pi * 1.0
      ) *
        0.5 +
        0.5) *
      args.mainRadius *
      0.1;

    vec2 pos = vec2(cos(a), sin(a)) * ringRadi;
    float dd = length(args.st - pos) - args.mainRadius * 0.5;

    
    d = opSmoothUnion(
      d,
      dd,
      0.03 * scaled(0.0, 10.0, args.duration) + 0.8 * (1.0 - entryAnimation)
    );

    
    float dotAngle = f * pi * 2.0;
    float dotRingRadius =
      (sin(
        thinkingDotEntryAnimation * pi * 4.0 +
          a * pi * 2.0 +
          args.time * 0.1 * pi * 4.0
      ) *
        0.5 +
        0.5) *
      thinkingDotRadius *
      0.3;
    vec2 dotPos =
      vec2(-args.mainRadius, args.mainRadius) * 0.8 * thinkingDotEntryAnimation;
    vec2 dotOffset =
      vec2(cos(dotAngle + args.time), sin(dotAngle + args.time)) *
      dotRingRadius;
    float dotD = length(args.st - dotPos - dotOffset) - thinkingDotRadius * 0.8;
    d = opSmoothUnion(
      d,
      dotD,
      (1.0 - min(thinkingDotEntryAnimation, args.amount)) * thinkingDotRadius
    );
  }
  sdf.distance = mix(sdf.distance, d, args.amount);
  sdf.color.a = 1.0;
  return sdf;
}

ColoredSDF applySpeakState(
  ColoredSDF sdf,
  SDFArgs args,
  vec4 avgMag,
  float silenceAmount,
  float silenceDuration
) {
  float d = 1000.0;
  int barCount = 4;
  for (int i = 0; i < barCount; i++) {
    float f = float(float(i) + 0.5) / float(barCount); 

    
    float w = 1.0 / float(barCount) * 0.44;
    float h = w;

    
    float wave = sin(f * pi * 0.8 + args.time) * 0.5 + 0.5;
    float entryAnimation = spring(
      scaled(0.1 + wave * 0.4, 1.0 + wave * 0.4, args.duration),
      0.98
    );
    vec2 pos = vec2(f - 0.5, 0.0) * args.mainRadius * 1.9;
    pos.y = 0.25 * (1.0 - entryAnimation);

    
    if (silenceAmount > 0.0) {
      float bounceStagger = f / 5.0;
      float bounceDelay = 0.6;
      float bounceTimer = scaled(
        bounceDelay,
        bounceDelay + 1.0,
        fract((silenceDuration + bounceStagger) / 2.0) * 2.0
      );
      pos.y +=
        bounce(bounceTimer, 6.0) *
        w *
        0.25 *
        silenceAmount *
        pow(entryAnimation, 4.0) *
        pow(args.amount, 4.0); 
    }

    
    h += avgMag[i] * (0.1 + (1.0 - abs(f - 0.5) * 2.0) * 0.1);

    float dd = sdRoundedBox(args.st - pos, vec2(w, h), vec4(w));
    d = opSmoothUnion(d, dd, 0.2 * (1.0 - args.amount));

  }

  sdf.distance = mix(sdf.distance, d, args.amount);
  sdf.color.a = 1.0;
  return sdf;
}

ColoredSDF applyListenAndSpeakState(
  ColoredSDF sdf,
  SDFArgs args,
  float micLevel,
  vec4 avgMag,
  vec4 cumulativeAudio,
  int binCount,
  vec3 bloopColorMain,
  vec3 bloopColorLow,
  vec3 bloopColorMid,
  vec3 bloopColorHigh,
  sampler2D uTextureNoise,
  bool listening,
  bool isAdvancedBloop
) {
  float entryAnimation = fixedSpring(scaled(0.0, 2.0, args.duration), 0.92);

  
  
  float radius =
    (listening ? 0.37 : 0.43) * (1.0 - (1.0 - entryAnimation) * 0.25) +
    micLevel * 0.065;

  
  
  
  float maxDisplacement = 0.01;

  
  float oscillationPeriod = 4.0;
  
  float displacementOffset =
    maxDisplacement * sin(2.0 * pi / oscillationPeriod * args.time);
  
  vec2 adjusted_st = args.st - vec2(0.0, displacementOffset);

  
  if (!isAdvancedBloop) {
    sdf.color = mix(sdf.color, vec4(bloopColorMain, 1.0), args.amount);
    sdf.distance = mix(sdf.distance, length(adjusted_st) - radius, args.amount);
    return sdf;
  }

  
  
  vec4 uAudioAverage = avgMag;
  vec4 uCumulativeAudio = cumulativeAudio;

  
  float scaleFactor = 1.0 / (2.0 * radius);
  vec2 uv = adjusted_st * scaleFactor + 0.5;
  uv.y = 1.0 - uv.y;

  
  float noiseScale = 1.25; 
  float windSpeed = 0.075; 
  float warpPower = 0.19; 
  float waterColorNoiseScale = 18.0; 
  float waterColorNoiseStrength = 0.01; 
  float textureNoiseScale = 1.0; 
  float textureNoiseStrength = 0.08; 
  float verticalOffset = 0.09; 
  float waveSpread = 1.0; 
  float layer1Amplitude = 1.0; 
  float layer1Frequency = 1.0; 
  float layer2Amplitude = 1.0; 
  float layer2Frequency = 1.0; 
  float layer3Amplitude = 1.0; 
  float layer3Frequency = 1.0; 
  float fbmStrength = 1.0; 
  float fbmPowerDamping = 0.55; 
  float overallSoundScale = 1.0; 
  float blurRadius = 1.0;
  float timescale = 1.0;

  
  float time = args.time * timescale * 0.85;

  vec3 sinOffsets = vec3(
    uCumulativeAudio.x * 0.15 * overallSoundScale,
    -uCumulativeAudio.y * 0.5 * overallSoundScale,
    uCumulativeAudio.z * 1.5 * overallSoundScale
  );
  verticalOffset += 1.0 - waveSpread;

  
  float noiseX = cnoise(
    vec3(
      uv * 1.0 + vec2(0.0, 74.8572),
      (time + uCumulativeAudio.x * 0.05 * overallSoundScale) * 0.3
    )
  );
  float noiseY = cnoise(
    vec3(
      uv * 1.0 + vec2(203.91282, 10.0),
      (time + uCumulativeAudio.z * 0.05 * overallSoundScale) * 0.3
    )
  );

  uv += vec2(noiseX * 2.0, noiseY) * warpPower;

  
  float noiseA =
    cnoise(vec3(uv * waterColorNoiseScale + vec2(344.91282, 0.0), time * 0.3)) +
    cnoise(
      vec3(uv * waterColorNoiseScale * 2.2 + vec2(723.937, 0.0), time * 0.4)
    ) *
      0.5;
  uv += noiseA * waterColorNoiseStrength;
  uv.y -= verticalOffset;

  
  vec2 textureUv = uv * textureNoiseScale;
  float textureSampleR0 = texture(uTextureNoise, textureUv).r;
  float textureSampleG0 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp0 =
    mix(
      textureSampleR0 - 0.5,
      textureSampleG0 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  textureUv += vec2(63.861 + uCumulativeAudio.x * 0.05, 368.937);
  float textureSampleR1 = texture(uTextureNoise, textureUv).r;
  float textureSampleG1 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp1 =
    mix(
      textureSampleR1 - 0.5,
      textureSampleG1 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  textureUv += vec2(272.861, 829.937 + uCumulativeAudio.y * 0.1);
  textureUv += vec2(180.302 - uCumulativeAudio.z * 0.1, 819.871);
  float textureSampleR3 = texture(uTextureNoise, textureUv).r;
  float textureSampleG3 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp3 =
    mix(
      textureSampleR3 - 0.5,
      textureSampleG3 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  uv += textureNoiseDisp0;

  
  vec2 st = uv * noiseScale;

  vec2 q = vec2(0.0);
  q.x = fbm(
    st * 0.5 +
      windSpeed * (time + uCumulativeAudio.a * 0.175 * overallSoundScale)
  );
  q.y = fbm(
    st * 0.5 +
      windSpeed * (time + uCumulativeAudio.x * 0.136 * overallSoundScale)
  );

  vec2 r = vec2(0.0);
  r.x = fbm(
    st +
      1.0 * q +
      vec2(0.3, 9.2) +
      0.15 * (time + uCumulativeAudio.y * 0.234 * overallSoundScale)
  );
  r.y = fbm(
    st +
      1.0 * q +
      vec2(8.3, 0.8) +
      0.126 * (time + uCumulativeAudio.z * 0.165 * overallSoundScale)
  );

  float f = fbm(st + r - q);
  float fullFbm = (f + 0.6 * f * f + 0.7 * f + 0.5) * 0.5;
  fullFbm = pow(fullFbm, fbmPowerDamping);
  fullFbm *= fbmStrength;

  
  blurRadius = blurRadius * 1.5;
  vec2 snUv =
    (uv + vec2((fullFbm - 0.5) * 1.2) + vec2(0.0, 0.025) + textureNoiseDisp0) *
    vec2(layer1Frequency, 1.0);
  float sn =
    noise(
      snUv * 2.0 + vec2(sin(sinOffsets.x * 0.25), time * 0.5 + sinOffsets.x)
    ) *
    2.0 *
    layer1Amplitude;
  float sn2 = smoothstep(
    sn - 1.2 * blurRadius,
    sn + 1.2 * blurRadius,
    (snUv.y - 0.5 * waveSpread) *
      (5.0 - uAudioAverage.x * 0.1 * overallSoundScale * 0.5) +
      0.5
  );

  vec2 snUvBis =
    (uv + vec2((fullFbm - 0.5) * 0.85) + vec2(0.0, 0.025) + textureNoiseDisp1) *
    vec2(layer2Frequency, 1.0);
  float snBis =
    noise(
      snUvBis * 4.0 +
        vec2(
          sin(sinOffsets.y * 0.15) * 2.4 + 293.0,
          time * 1.0 + sinOffsets.y * 0.5
        )
    ) *
    2.0 *
    layer2Amplitude;
  float sn2Bis = smoothstep(
    snBis - (0.9 + uAudioAverage.y * 0.4 * overallSoundScale) * blurRadius,
    snBis + (0.9 + uAudioAverage.y * 0.8 * overallSoundScale) * blurRadius,
    (snUvBis.y - 0.6 * waveSpread) * (5.0 - uAudioAverage.y * 0.75) + 0.5
  );

  vec2 snUvThird =
    (uv + vec2((fullFbm - 0.5) * 1.1) + textureNoiseDisp3) *
    vec2(layer3Frequency, 1.0);
  float snThird =
    noise(
      snUvThird * 6.0 +
        vec2(
          sin(sinOffsets.z * 0.1) * 2.4 + 153.0,
          time * 1.2 + sinOffsets.z * 0.8
        )
    ) *
    2.0 *
    layer3Amplitude;
  float sn2Third = smoothstep(
    snThird - 0.7 * blurRadius,
    snThird + 0.7 * blurRadius,
    (snUvThird.y - 0.9 * waveSpread) * 6.0 + 0.5
  );

  sn2 = pow(sn2, 0.8);
  sn2Bis = pow(sn2Bis, 0.9);

  
  vec3 sinColor;
  sinColor = blendLinearBurn_13_5(bloopColorMain, bloopColorLow, 1.0 - sn2);
  sinColor = blendLinearBurn_13_5(
    sinColor,
    mix(bloopColorMain, bloopColorMid, 1.0 - sn2Bis),
    sn2
  );
  sinColor = mix(
    sinColor,
    mix(bloopColorMain, bloopColorHigh, 1.0 - sn2Third),
    sn2 * sn2Bis
  );

  
  sdf.color = mix(sdf.color, vec4(sinColor, 1), args.amount);

  
  sdf.distance = mix(sdf.distance, length(adjusted_st) - radius, args.amount);

  return sdf;
}

float micSdf(vec2 st, float muted) {
  float d = 100.0;
  float strokeWidth = 0.03;
  vec2 elementSize = vec2(0.12, 0.26);
  vec2 elementPos = vec2(0.0, elementSize.y * 0.585);
  float element = sdRoundedBox(
    st - elementPos,
    elementSize,
    vec4(min(elementSize.x, elementSize.y))
  );
  element = element - strokeWidth;
  d = min(d, element);

  vec2 standSize = elementSize * 2.2;
  vec2 standPos = vec2(elementPos.x, elementPos.y - 0.05);
  st.y += 0.08;
  float ta = -pi / 2.0; 
  float tb = pi / 2.0; 
  float w = 0.0;
  float stand = sdArc(
    st - standPos,
    vec2(sin(ta), cos(ta)),
    vec2(sin(tb), cos(tb)),
    standSize.x,
    w
  );
  stand = min(
    stand,
    sdSegment(st - standPos, vec2(standSize.x, 0.06), vec2(standSize.x, 0.0))
  );
  stand = min(
    stand,
    sdSegment(st - standPos, vec2(-standSize.x, 0.06), vec2(-standSize.x, 0.0))
  );

  float foot = sdSegment(
    st - standPos,
    vec2(0.0, -standSize.x),
    vec2(0.0, -standSize.x * 1.66)
  );
  foot = min(
    foot,
    sdSegment(
      st - standPos,
      vec2(-standSize.x * 0.68, -standSize.x * 1.66),
      vec2(standSize.x * 0.68, -standSize.x * 1.66)
    )
  );
  stand = min(stand, foot);

  d = min(d, abs(stand) - strokeWidth);

  return d;
}

ColoredSDF applyBottomAlignedBarsAndMicState(
  ColoredSDF sdf,
  SDFArgs args,
  vec4 avgMag,
  float micLevel,
  bool isDarkMode
) {
  float d = 1000.0;
  int barCount = 5;
  int loopCount = barCount;
  if (args.amount == 0.0) {
    loopCount = 1; 
  }
  for (int i = 0; i < loopCount; i++) {
    float f = float(float(i) + 0.5) / float(barCount); 

    
    float w = 1.0 / float(barCount) * 0.42;
    float h = w;

    
    float entryDuration = 1.8;
    float entryAnimation =
      fixedSpring(scaled(0.0, entryDuration, args.duration), 0.94) *
      args.amount;
    vec2 pos = vec2(f - 0.5, 0.0) * args.mainRadius * 1.9;
    pos.x *= entryAnimation;

    if (i == 0) {
      float micScale = mix(6.0 - micLevel * 2.0, 6.0, args.amount);
      float yOffset = w * 2.0;
      d =
        micSdf(
          (args.st - pos + vec2(-w * 0.15 * args.amount, yOffset)) * micScale,
          1.0 - args.amount
        ) /
        micScale;
    } else {
      
      h += avgMag[i - 1] * (0.1 + (1.0 - abs(f - 0.5) * 2.0) * 0.1) * 0.7;
      h = mix(w, h, smoothstep(0.8, 1.0, entryAnimation));

      float bubbleInDur = 0.5;
      float bubbleOutDur = 0.4;

      
      float bubbleEffect =
        fixedSpring(
          scaled(
            f / 4.0,
            f / 4.0 + bubbleInDur,
            args.duration - entryDuration / 8.0
          ),
          1.0
        ) *
        pow(
          1.0 -
            scaled(
              f / 8.0 + bubbleInDur / 8.0,
              f / 4.0 + bubbleInDur / 8.0 + bubbleOutDur,
              args.duration - entryDuration / 8.0
            ),
          2.0
        );

      h += bubbleEffect * min(h, w);

      
      w *= args.amount;
      h *= args.amount;

      h = min(h, 0.23); 

      pos.y -= 0.25;
      pos.y += h;
      pos.y += bubbleEffect * w * 0.5;

      float dd = sdRoundedBox(args.st - pos, vec2(w, h), vec4(w));
      d = min(d, dd);
    }
  }

  sdf.distance = d; 
  sdf.color = mix(
    sdf.color,
    isDarkMode
      ? vec4(1.0)
      : vec4(0.0, 0.0, 0.0, 1.0),
    args.amount
  );
  return sdf;
}

ColoredSDF applyHaltState(ColoredSDF sdf, SDFArgs args) {
  
  float radius = mix(
    0.4,
    mix(0.4, 0.45, args.amount),
    sin(args.time * 0.25) * 0.5 + 0.5
  );
  float strokeWidth = mix(radius / 2.0, 0.02, args.amount);

  
  radius -= strokeWidth;

  radius *= mix(0.7, 1.0, args.amount);
  float circle = abs(length(args.st) - radius) - strokeWidth;

  sdf.distance = mix(sdf.distance, circle, args.amount);
  sdf.color.a = mix(sdf.color.a, pow(0.8, 2.2), scaled(0.5, 1.0, args.amount));
  return sdf;
}

vec3 blendNormal(vec3 base, vec3 blend) {
  return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
  return blendNormal(base, blend) * opacity + base * (1.0 - opacity);
}

in vec2 out_uv;
out vec4 fragColor;

layout(std140) uniform BlorbUniformsObject {
  float time;
  float micLevel;
  float touchDownTimestamp;
  float touchUpTimestamp;
  float stateListen;
  float listenTimestamp;
  float stateThink;
  float thinkTimestamp;
  float stateSpeak;
  float speakTimestamp;
  float readyTimestamp;
  float stateHalt;
  float haltTimestamp;
  float stateFailedToConnect;
  float failedToConnectTimestamp;
  vec4 avgMag;
  vec4 cumulativeAudio;
  vec2 viewport;
  float screenScaleFactor;
  float silenceAmount;
  float silenceTimestamp;
  bool isDarkMode;
  bool fadeBloopWhileListening;
  bool isNewBloop;
  bool isAdvancedBloop;
  vec3 bloopColorMain;
  vec3 bloopColorLow;
  vec3 bloopColorMid;
  vec3 bloopColorHigh;
} ubo; 

uniform sampler2D uTextureNoise; 

void main() {
  vec2 st = out_uv - 0.5;
  float viewRatio = ubo.viewport.y / ubo.viewport.x;
  st.y *= viewRatio;

  ColoredSDF sdf;
  sdf.distance = 1000.0;
  sdf.color = vec4(1.0);

  SDFArgs args;
  args.st = st;
  args.time = ubo.time;
  args.mainRadius = 0.49;

  SDFArgs idleArgs = args;
  SDFArgs listenArgs = args;
  SDFArgs thinkArgs = args;
  SDFArgs speakArgs = args;
  SDFArgs haltArgs = args;
  SDFArgs failedToConnectArgs = args;

  idleArgs.amount = 1.0;
  listenArgs.amount = ubo.stateListen;
  thinkArgs.amount = ubo.stateThink;
  speakArgs.amount = ubo.stateSpeak;
  haltArgs.amount = ubo.stateHalt;
  failedToConnectArgs.amount = ubo.stateFailedToConnect;

  idleArgs.duration = ubo.time - ubo.readyTimestamp;
  listenArgs.duration = ubo.time - ubo.listenTimestamp;
  thinkArgs.duration = ubo.time - ubo.thinkTimestamp;
  speakArgs.duration = ubo.time - ubo.speakTimestamp;
  haltArgs.duration = ubo.time - ubo.haltTimestamp;
  failedToConnectArgs.duration = ubo.time - ubo.failedToConnectTimestamp;

  if (ubo.isNewBloop) {
    sdf = applyIdleState(sdf, idleArgs, ubo.isDarkMode);
  } else {
    sdf = applyIdleStateLegacy(sdf, idleArgs, ubo.isDarkMode);
  }

  if (failedToConnectArgs.amount > 0.0) {
    sdf = applyHaltState(sdf, failedToConnectArgs);
  }

  if (listenArgs.amount > 0.0) {
    if (ubo.isAdvancedBloop) {
      if (speakArgs.amount > 0.0) {
        listenArgs.amount = 1.0;
      }

      
      int binCount = 1;
      sdf = applyListenAndSpeakState(
        sdf,
        listenArgs,
        ubo.micLevel,
        ubo.avgMag,
        ubo.cumulativeAudio,
        binCount,
        ubo.bloopColorMain,
        ubo.bloopColorLow,
        ubo.bloopColorMid,
        ubo.bloopColorHigh,
        uTextureNoise,
        true,
        ubo.isAdvancedBloop
      );
    } else {
      sdf = applyListenState(
        sdf,
        listenArgs,
        ubo.micLevel,
        ubo.listenTimestamp,
        ubo.touchDownTimestamp,
        ubo.touchUpTimestamp,
        ubo.fadeBloopWhileListening
      );
    }
  }

  if (thinkArgs.amount > 0.0) {
    sdf = applyThinkState(sdf, thinkArgs);
  }

  if (speakArgs.amount > 0.0) {
    if (ubo.isAdvancedBloop) {
      int binCount = 1;
      sdf = applyListenAndSpeakState(
        sdf,
        speakArgs,
        ubo.micLevel,
        ubo.avgMag,
        ubo.cumulativeAudio,
        binCount,
        ubo.bloopColorMain,
        ubo.bloopColorLow,
        ubo.bloopColorMid,
        ubo.bloopColorHigh,
        uTextureNoise,
        false,
        ubo.isAdvancedBloop
      );
    } else {
      float silenceDuration = ubo.time - ubo.silenceTimestamp;
      sdf = applySpeakState(
        sdf,
        speakArgs,
        ubo.avgMag,
        ubo.silenceAmount,
        silenceDuration
      );
    }
  }

  if (haltArgs.amount > 0.0) {
    sdf = applyHaltState(sdf, haltArgs);
  }

  float clampingTolerance = 0.0075 / ubo.screenScaleFactor;
  float clampedShape = smoothstep(clampingTolerance, 0.0, sdf.distance);
  float alpha = sdf.color.a * clampedShape;
  if (!ubo.isNewBloop) {
    alpha *= scaled(0.0, 1.0, ubo.time);
  }
  fragColor = vec4(sdf.color.rgb * alpha, alpha);
}`
  , jm = `#version 300 es

out vec4 out_position;
out vec2 out_uv;

const vec4 blitFullscreenTrianglePositions[6] = vec4[](
  vec4(-1.0, -1.0, 0.0, 1.0),
  vec4(3.0, -1.0, 0.0, 1.0),
  vec4(-1.0, 3.0, 0.0, 1.0),
  vec4(-1.0, -1.0, 0.0, 1.0),
  vec4(3.0, -1.0, 0.0, 1.0),
  vec4(-1.0, 3.0, 0.0, 1.0)
);

void main() {
  out_position = blitFullscreenTrianglePositions[gl_VertexID];
  out_uv = out_position.xy * 0.5 + 0.5;
  out_uv.y = 1.0 - out_uv.y;
  gl_Position = out_position;
}`;
class Gr {
    #i;
    #o;
    #e;
    #r = [];
    #s = {};
    #t;
    #n;
    static #a = "BlorbUniformsObject";
    constructor(e, t) {
        this.#e = e;
        const i = e.getUniformBlockIndex(t, Gr.#a)
          , r = e.getActiveUniformBlockParameter(t, i, e.UNIFORM_BLOCK_DATA_SIZE);
        this.#t = e.createBuffer(),
        e.bindBuffer(e.UNIFORM_BUFFER, this.#t),
        e.bufferData(e.UNIFORM_BUFFER, r, e.DYNAMIC_DRAW);
        const s = 0;
        e.bindBufferBase(e.UNIFORM_BUFFER, s, this.#t),
        e.uniformBlockBinding(t, i, s);
        const o = e.getActiveUniformBlockParameter(t, i, e.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES);
        this.#r = [],
        this.#s = {};
        for (let a = 0; a < o.length; a++) {
            const c = o[a]
              , d = e.getActiveUniform(t, c);
            if (!d)
                throw new Error("No uniformInfo for index " + c);
            let u = d.name;
            u = u.replace(/\[0\]$/, "");
            const l = e.getActiveUniforms(t, [c], e.UNIFORM_OFFSET)[0];
            this.#r.push(u),
            this.#s[u] = l
        }
        this.#n = new ArrayBuffer(r),
        this.#i = new Float32Array(this.#n),
        this.#o = new Int32Array(this.#n)
    }
    setVariablesAndRender(e) {
        for (const t of this.#r) {
            const [,i] = t.split(".")
              , s = this.#s[t] / 4
              , o = e[i];
            typeof o == "number" ? this.#i[s] = o : typeof o == "boolean" ? this.#o[s] = o ? 1 : 0 : Array.isArray(o) && this.#i.set(o, s)
        }
        this.#e.bindBuffer(this.#e.UNIFORM_BUFFER, this.#t),
        this.#e.bufferSubData(this.#e.UNIFORM_BUFFER, 0, this.#n),
        this.#e.drawArrays(this.#e.TRIANGLE_STRIP, 0, 6)
    }
}
function J(n) {
    const e = n.replace("#", "")
      , t = parseInt(e.substring(0, 2), 16) / 255
      , i = parseInt(e.substring(2, 4), 16) / 255
      , r = parseInt(e.substring(4, 6), 16) / 255;
    return new Float32Array([t, i, r])
}
const tn = {
    BLUE: {
        bloopColorMain: J("#DCF7FF"),
        bloopColorLow: J("#0181FE"),
        bloopColorMid: J("#A4EFFF"),
        bloopColorHigh: J("#FFFDEF")
    },
    DARK_BLUE: {
        bloopColorMain: J("#DAF5FF"),
        bloopColorLow: J("#0066CC"),
        bloopColorMid: J("#2EC6F5"),
        bloopColorHigh: J("#72EAF5")
    },
    GREYSCALE: {
        bloopColorMain: J("#D7D7D7"),
        bloopColorLow: J("#303030"),
        bloopColorMid: J("#989898"),
        bloopColorHigh: J("#FFFFFF")
    },
    WHITE: {
        bloopColorMain: J("#FFFFFF"),
        bloopColorLow: J("#FFFFFF"),
        bloopColorMid: J("#FFFFFF"),
        bloopColorHigh: J("#FFFFFF")
    },
    BLACK: {
        bloopColorMain: J("#000000"),
        bloopColorLow: J("#000000"),
        bloopColorMid: J("#000000"),
        bloopColorHigh: J("#000000")
    },
    ANGSTY_BLACK: {
        bloopColorMain: J("#494949"),
        bloopColorLow: J("#000000"),
        bloopColorMid: J("#7F7F7F"),
        bloopColorHigh: J("#696969")
    },
    HELLO_TIBOR: {
        bloopColorMain: J("#FFE987"),
        bloopColorLow: J("#E58B28"),
        bloopColorMid: J("#FB7256"),
        bloopColorHigh: J("#F3FDFE")
    }
}
  , Vm = ({isAdvanced: n, overrideColor: e}) => {
    const t = Ao();
    return e && tn[e] ? tn[e] : n ? tn.BLUE : t ? tn.WHITE : tn.BLACK
}
  , So = [300, 300]
  , Bm = {
    bands: 4,
    loPass: 0,
    hiPass: 400
}
  , qm = n => {
    const e = qr(n, {
        bands: zr,
        updateInterval: fi,
        loPass: 0,
        hiPass: 400,
        analyserOptions: {
            fftSize: ed
        }
    });
    return e.length === 0 ? td : e
}
  , zm = (n, e) => {
    const t = qm(n)
      , i = nd(t, {
        sampleRate: id,
        binCount: e.bins,
        bandCount: e.bands,
        gainMultipliers: e.gainMultipliers
    })
      , r = Wr({
        magnitudes: t,
        binCount: 1,
        gainMultiplier: 1
    });
    return {
        bandMagnitudes: i,
        cumulativeMagnitude: r
    }
}
  , Wm = n => {
    const [e,t] = k.useState({
        audioData: [0, 0, 0, 0],
        cumulativeAudioData: [0, 0, 0, 0]
    })
      , i = k.useRef([0, 0, 0, 0])
      , r = k.useRef(void 0)
      , s = k.useRef(performance.now())
      , {bandMagnitudes: o, cumulativeMagnitude: a} = zm(n, {
        bands: 3,
        bins: 1,
        gainMultipliers: [10, 1, 1]
    });
    i.current = [...o, a].flat();
    const c = k.useCallback( () => {
        const d = performance.now()
          , u = (d - s.current) / 1e3;
        s.current = d;
        const l = i.current
          , {audioData: h, cumulativeAudioData: f} = e
          , v = Dm({
            deltaTimeS: u,
            audioDataRaw: l,
            prevAudioData: h,
            prevCumulativeAudioData: f
        });
        t(v)
    }
    , [e]);
    return k.useEffect( () => (r.current || (r.current = window.setInterval(c, fi)),
    () => {
        clearInterval(r.current),
        r.current = void 0
    }
    ), [c]),
    e
}
  , To = Promise.resolve();
function sd({url: n, readyToPlay: e}) {
    const t = k.useRef(void 0)
      , i = k.useRef(To);
    return k.useEffect( () => (t.current || (t.current = document.createElement("audio")),
    () => {
        i.current.then( () => {
            t.current && (t.current.pause(),
            t.current.removeAttribute("src"),
            t.current.remove(),
            i.current = To)
        }
        )
    }
    ), []),
    k.useEffect( () => {
        n && t.current && t.current.src !== n && e && i.current.then( () => {
            t.current && (t.current.crossOrigin = "anonymous",
            t.current.src = n,
            i.current = t.current.play())
        }
        )
    }
    , [e, n]),
    t.current
}
function Gm({className: n, url: e}) {
    const [t,i] = k.useState(!1)
      , r = sd({
        url: e,
        readyToPlay: t
    })
      , s = qr(r, Bm)
      , o = k.useMemo( () => [0, 0, 0, 0], []);
    return j.jsx(od, {
        className: n,
        isAdvanced: !1,
        avgMag: s,
        cumulativeAudioData: o,
        onRenderComplete: () => i(!0)
    })
}
function Km({className: n, url: e, overrideColor: t}) {
    const [i,r] = k.useState(!1)
      , s = sd({
        url: e,
        readyToPlay: i
    })
      , o = Wm(s)
      , {audioData: a, cumulativeAudioData: c} = o;
    return j.jsx(od, {
        className: n,
        isAdvanced: !0,
        overrideColor: t,
        avgMag: a,
        cumulativeAudioData: c,
        onRenderComplete: () => r(!0)
    })
}
const od = ({className: n, avgMag: e, cumulativeAudioData: t, isAdvanced: i, overrideColor: r, onRenderComplete: s}) => {
    const o = Ao()
      , a = k.useMemo( () => performance.now() / 1e3, [])
      , c = k.useMemo( () => performance.now() / 1e3, [])
      , d = k.useRef(void 0)
      , u = k.useRef(Mm())
      , [l,h] = k.useState(So)
      , {canvasSizeRef: f, handleCanvasSizeUpdate: v} = iu(So)
      , p = k.useCallback(w => {
        h([w.width, w.height])
    }
    , [])
      , [y,g] = k.useState(performance.now() / 1e3);
    k.useEffect( () => {
        const w = setInterval( () => {
            g(performance.now() / 1e3)
        }
        , fi);
        return () => clearInterval(w)
    }
    , []);
    const x = Vm({
        isAdvanced: i,
        overrideColor: r
    })
      , _ = u.current(x)
      , S = mm({
        viewport: l,
        canvasSize: f.current,
        shouldMeasurePerf: !0,
        source: "VoicePicker"
    })
      , b = bm({
        shouldCalibrate: !0,
        viewport: l,
        initialScale: 1
    });
    return d.current = {
        time: y,
        micLevel: 0,
        stateListen: 0,
        listenTimestamp: 0,
        stateThink: 0,
        thinkTimestamp: 0,
        stateSpeak: 1,
        speakTimestamp: c,
        readyTimestamp: a,
        stateHalt: 0,
        haltTimestamp: 0,
        touchDownTimestamp: 0,
        touchUpTimestamp: 0,
        stateFailedToConnect: 0,
        failedToConnectTimestamp: 0,
        avgMag: e,
        cumulativeAudio: t,
        isNewBloop: !0,
        isAdvancedBloop: i,
        bloopColorMain: Array.from(_.bloopColorMain),
        bloopColorLow: Array.from(_.bloopColorLow),
        bloopColorMid: Array.from(_.bloopColorMid),
        bloopColorHigh: Array.from(_.bloopColorHigh),
        isDarkMode: o,
        screenScaleFactor: window.devicePixelRatio,
        viewport: l,
        silenceAmount: 0,
        silenceTimestamp: 0,
        fadeBloopWhileListening: !1
    },
    j.jsx(Nm, {
        className: Dt("flex items-center justify-center", n),
        variablesRef: d,
        onViewportUpdate: p,
        onRenderComplete: s,
        textureImage: rd,
        textureName: "uTextureNoise",
        onGlAvailable: S,
        onCanvasSizeUpdate: v,
        scale: b,
        GLUniformsSetter: Gr,
        vert: jm,
        frag: Fm
    })
}
;
function Hm({isUnauthenticated: n, loading: e, handleLoginClick: t, handleCancelClick: i, handleConfirmClick: r, selectedVoice: s, currentVoiceName: o, cameFromNux: a}) {
    const c = "w-52 whitespace-nowrap rounded-full px-20 py-3 font-semibold";
    return n ? j.jsxs(j.Fragment, {
        children: [j.jsx(wn, {
            className: Dt(c, "text-white"),
            onClick: t,
            children: e ? j.jsx(Qr, {}) : j.jsx(mt, {
                id: "IRALWH",
                defaultMessage: "Log in"
            })
        }), j.jsx(wn, {
            className: Dt(c, "text-black dark:text-white"),
            color: "ghost",
            onClick: i,
            children: j.jsx(mt, {
                id: "8fumUc",
                defaultMessage: "Back to chat"
            })
        })]
    }) : j.jsxs(j.Fragment, {
        children: [j.jsx(wn, {
            className: Dt(c, "text-white"),
            onClick: r,
            children: e ? j.jsx(Qr, {}) : s?.voice === o && !a ? j.jsx(mt, {
                id: "MyKAgb",
                defaultMessage: "Done"
            }) : j.jsx(mt, {
                id: "7+3LaJ",
                defaultMessage: "Start new chat"
            })
        }), j.jsx(wn, {
            className: Dt(c, "text-black dark:text-white"),
            color: "ghost",
            onClick: i,
            children: j.jsx(mt, {
                id: "dUn4Wd",
                defaultMessage: "Cancel"
            })
        })]
    })
}
const Jm = {
    offscreenLeft: {
        x: "-24rem",
        opacity: 0
    },
    left: {
        x: "-12rem",
        opacity: .5
    },
    center: {
        x: "0",
        opacity: 1
    },
    right: {
        x: "12rem",
        opacity: .5
    },
    offscreenRight: {
        x: "24rem",
        opacity: 0
    }
};
function mg({conversationId: n, onClose: e, cameFromNux: t=!1, initialVoiceName: i}) {
    const {isUnauthenticated: r} = Md()
      , s = ru()
      , {voiceName: o} = Uo()
      , a = Pe()
      , c = _o()
      , d = Fo()
      , [u,l] = k.useState(!1)
      , h = qi.getGizmoId(zi(n))
      , [f,v] = k.useState(!1)
      , [p,y] = k.useState(!1);
    k.useEffect( () => {
        requestAnimationFrame( () => v(!0))
    }
    , []);
    const [g,x] = k.useState(!1)
      , [_,S] = k.useState(null);
    k.useEffect( () => {
        if (d.length > 0) {
            const re = d.findIndex(Me => Me.voice === (i || o));
            re >= 0 ? S(re) : S(2),
            x(!0)
        }
    }
    , [d, o, i]);
    const b = _ != null ? (_ - 2 + d.length) % d.length : 0
      , w = _ != null ? (_ - 1 + d.length) % d.length : 1
      , D = _ != null ? (_ + 1) % d.length : 3
      , N = _ != null ? (_ + 2) % d.length : 4
      , U = d[_ ?? 0]
      , L = d[b]
      , I = d[w]
      , M = d[D]
      , X = d[N]
      , z = hm()
      , {alreadyTriggered: H, setAlreadyTriggered: ie} = fm();
    k.useEffect( () => {
        if (z && !H) {
            const re = d.findIndex(Me => Me.voice === "shade");
            re !== -1 && (S(re),
            ie())
        }
        return () => {
            z && ie()
        }
    }
    , [z, H, d, S, ie]);
    const Ee = k.useMemo( () => {
        if (z && U?.voice === "shade")
            return "ANGSTY_BLACK"
    }
    , [U?.voice, z])
      , Se = re => {
        S(re)
    }
      , {stopVoiceMode: Be, startVoiceMode: ft} = lm({
        requestMicPermissions: t
    })
      , {setValue: st} = cu(Od.VoiceName)
      , ce = Nt(re => re.voiceMode)
      , qe = t && !h ? "advanced" : ce
      , Ct = k.useCallback( () => {
        y(!t),
        setTimeout( () => {
            const re = _ != null ? d[_]?.voice : d[0]?.voice;
            sessionStorage.setItem("selectedVoiceName", re),
            s({
                authType: "login",
                callback: Me => {
                    Nd.logLogInButtonClicked({
                        provider: Me,
                        location: "Voice Picker Page"
                    })
                }
            })
        }
        , pi)
    }
    , [t, s, _, d])
      , Jt = k.useCallback(async () => {
        y(!t),
        setTimeout(async () => {
            l(!0);
            const re = _ != null ? d[_]?.voice : d[0]?.voice;
            if (t || re !== o) {
                t || ne.voiceSelected.click({
                    action: "changed",
                    voice: re
                }),
                st(re),
                await Be(),
                Lo("/");
                try {
                    t ? a.setState(Me => {
                        Me.isVoiceModeActive = !0
                    }
                    ) : await ft({
                        conversation_id: void 0,
                        eventSource: "voice_picker",
                        voice_mode: qe,
                        voice: re,
                        clientThreadId: Ld(),
                        gizmo_id: qi.getGizmoId(zi(n)),
                        skipCacheReason: "user-switched-voice"
                    })
                } catch (Me) {
                    Ud.addError(`Failed to start voice mode after voice picker: ${Me}`, {
                        protocol: c
                    })
                }
            } else
                ne.voiceSelected.click({
                    action: "kept",
                    voice: o
                });
            l(!1),
            e()
        }
        , pi)
    }
    , [t, n, o, e, _, st, ft, Be, qe, d, a, c])
      , Sn = () => {
        y(!0),
        setTimeout(e, pi)
    }
    ;
    su({
        setSelectedVoiceIndex: S,
        prevVoiceIndex: w,
        nextVoiceIndex: D
    });
    const [wt,Pt] = k.useState(!1)
      , Et = re => {
        re === "prev" ? Se(w) : re === "next" && Se(D),
        Pt(!0),
        setTimeout( () => {
            Pt(!1)
        }
        , 175)
    }
      , Qt = k.useMemo( () => ({
        className: "h-max min-h-bloop w-max min-w-bloop",
        url: U?.preview_url
    }), [U?.preview_url]);
    return !g || _ == null ? j.jsx("div", {
        className: "bg-token-main-surface-primary fixed start-0 top-0 z-50 flex h-full w-full"
    }) : j.jsxs("div", {
        className: `fixed start-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-white transition-opacity duration-300 dark:bg-gray-800 ${f && !p ? "opacity-100" : "opacity-0"}`,
        children: [j.jsx("h1", {
            className: "mt-36 mb-8 text-3xl font-semibold",
            children: r ? j.jsx(mt, {
                id: "P4GR/e",
                defaultMessage: "Try voice mode for free"
            }) : j.jsx(mt, {
                id: "2whyE9",
                defaultMessage: "Choose a voice"
            })
        }), j.jsx("div", {
            className: "flex h-full w-full items-center justify-center",
            children: U ? t && !h || qe === "advanced" ? j.jsx(Km, {
                ...Qt,
                overrideColor: Ee
            }) : j.jsx(Gm, {
                ...Qt
            }) : null
        }), j.jsx("div", {
            className: "mb-8 flex items-center justify-between text-center",
            children: j.jsxs("div", {
                className: "relative flex h-24 w-48",
                children: [j.jsx(nn, {
                    voice: L,
                    variant: "offscreenLeft"
                }, L?.name), j.jsx(nn, {
                    voice: I,
                    variant: "left",
                    onClick: () => Se(w)
                }, I?.name), j.jsx(Co, {
                    direction: "prev",
                    onClick: () => Et("prev"),
                    isFading: wt
                }), j.jsx(nn, {
                    voice: U,
                    variant: "center"
                }, U?.name), j.jsx(Co, {
                    direction: "next",
                    onClick: () => Et("next"),
                    isFading: wt
                }), j.jsx(nn, {
                    voice: M,
                    variant: "right",
                    onClick: () => Se(D)
                }, M?.name), j.jsx(nn, {
                    voice: X,
                    variant: "offscreenRight"
                }, X?.name), j.jsx("div", {
                    className: "pointer-events-none absolute h-full w-full -translate-x-52 transform bg-linear-to-r from-[var(--main-surface-background)] to-transparent"
                }), j.jsx("div", {
                    className: "pointer-events-none absolute h-full w-full translate-x-52 transform bg-linear-to-l from-[var(--main-surface-background)] to-transparent"
                }), j.jsx("div", {
                    className: "pointer-events-none absolute h-full w-full -translate-x-96 transform bg-white dark:bg-gray-800"
                }), j.jsx("div", {
                    className: "pointer-events-none absolute h-full w-full translate-x-96 transform bg-white dark:bg-gray-800"
                })]
            })
        }), j.jsx("div", {
            className: "mb-36 flex flex-col space-y-3",
            children: j.jsx(Hm, {
                isUnauthenticated: r,
                loading: u,
                handleLoginClick: Ct,
                handleCancelClick: Sn,
                handleConfirmClick: Jt,
                selectedVoice: U,
                currentVoiceName: o,
                cameFromNux: t
            })
        })]
    })
}
function nn({voice: n, variant: e, onClick: t}) {
    return j.jsxs(vd.button, {
        onClick: t,
        className: "absolute flex w-48 flex-col items-center justify-center select-none",
        variants: Jm,
        animate: e,
        initial: e,
        transition: {
            duration: .25,
            ease: "easeInOut"
        },
        children: [j.jsx("p", {
            className: `text-lg ${e === "center" ? "font-semibold" : ""}`,
            children: n?.name
        }), j.jsx("p", {
            className: "text-sm text-gray-600 dark:text-[var(--text-secondary)]",
            children: n?.description
        })]
    })
}
function Co({direction: n, onClick: e, isFading: t}) {
    const i = n === "prev" ? ou : au
      , r = Po()
      , s = n === "prev" ? r.formatMessage({
        id: "ajuz05",
        defaultMessage: "Previous voice"
    }) : r.formatMessage({
        id: "Dr8wrw",
        defaultMessage: "Next voice"
    });
    return j.jsx("button", {
        className: Dt("absolute top-2 z-50 transition-opacity duration-175", n === "prev" ? "-start-4" : "-end-4", t ? "opacity-20" : "opacity-100"),
        onClick: e,
        "aria-label": s,
        children: j.jsx(i, {
            className: "text-token-text-quaternary hover:text-token-text-secondary h-6 w-6"
        })
    })
}
export {Dp as $, sn as A, fi as B, ag as C, fm as D, cg as E, Kc as F, Nm as G, eg as H, og as I, lg as J, ug as K, me as L, $n as M, ng as N, ig as O, hg as P, Tf as R, xf as S, E as T, mg as V, Np as W, rg as Y, si as _, lu as a, T as b, B as c, un as d, Tc as e, so as f, fg as g, im as h, dg as i, Zp as j, Vo as k, Br as l, Wn as m, pg as n, Vm as o, mm as p, bm as q, Fm as r, Dm as s, Gr as t, lm as u, jm as v, rd as w, qr as x, sg as y, hm as z};
//# sourceMappingURL=njob26zxpz8xevub.js.map
