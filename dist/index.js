/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function $i(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ye = {}, on = [], cn = () => {
}, Gl = () => !1, lr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ar = (e) => e.startsWith("onUpdate:"), We = Object.assign, Kl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Cu = Object.prototype.hasOwnProperty, he = (e, t) => Cu.call(e, t), re = Array.isArray, Ft = (e) => xs(e) === "[object Map]", pn = (e) => xs(e) === "[object Set]", zo = (e) => xs(e) === "[object Date]", fe = (e) => typeof e == "function", ke = (e) => typeof e == "string", bt = (e) => typeof e == "symbol", xe = (e) => e !== null && typeof e == "object", ql = (e) => (xe(e) || fe(e)) && fe(e.then) && fe(e.catch), Yl = Object.prototype.toString, xs = (e) => Yl.call(e), Eu = (e) => xs(e).slice(8, -1), Jl = (e) => xs(e) === "[object Object]", Si = (e) => ke(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Kn = /* @__PURE__ */ $i(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), cr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Mu = /-\w/g, st = cr(
  (e) => e.replace(Mu, (t) => t.slice(1).toUpperCase())
), Tu = /\B([A-Z])/g, vn = cr(
  (e) => e.replace(Tu, "-$1").toLowerCase()
), Zl = cr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Nr = cr(
  (e) => e ? `on${Zl(e)}` : ""
), xt = (e, t) => !Object.is(e, t), Os = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Xl = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, ur = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Iu = (e) => {
  const t = ke(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let _o;
const dr = () => _o || (_o = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ar(e) {
  if (re(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ke(s) ? Ou(s) : Ar(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ke(e) || xe(e))
    return e;
}
const Nu = /;(?![^(]*\))/g, Pu = /:([^]+)/, Lu = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function Ou(e) {
  const t = {};
  return e.replace(Lu, (n) => n.startsWith("/*") ? "" : n).split(Nu).forEach((n) => {
    if (n) {
      const s = n.split(Pu);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Q(e) {
  let t = "";
  if (ke(e))
    t = e;
  else if (re(e))
    for (let n = 0; n < e.length; n++) {
      const s = Q(e[n]);
      s && (t += s + " ");
    }
  else if (xe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Du = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ru = /* @__PURE__ */ $i(Du);
function Ql(e) {
  return !!e || e === "";
}
function Fu(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let r = 0; s && r < e.length; r++)
    s = Bt(e[r], t[r], n);
  return s;
}
function $o(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t), r = new Uint8Array(s.length);
  for (const i of e) {
    let o = -1;
    for (let l = 0; l < s.length; l++)
      if (!r[l] && Bt(i, s[l], n)) {
        o = l;
        break;
      }
    if (o < 0) return !1;
    r[o] = 1;
  }
  return !0;
}
function ju(e, t, n) {
  let s = Ft(e), r = Ft(t);
  if (s || r || (s = pn(e), r = pn(t), s || r))
    return s && r ? $o(e, t, n) : !1;
  const i = Object.keys(e).length, o = Object.keys(t).length;
  if (i !== o)
    return !1;
  for (const l in e) {
    const a = e.hasOwnProperty(l), c = t.hasOwnProperty(l);
    if (a && !c || !a && c || !Bt(e[l], t[l], n))
      return !1;
  }
  return String(e) === String(t);
}
function So(e, t, n, s) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [r, i] = n;
  if (r.has(e) || i.has(t))
    return r.get(e) === t && i.get(t) === e;
  r.set(e, t), i.set(t, e);
  const o = s(e, t, n);
  return r.delete(e), i.delete(t), o;
}
function Bt(e, t, n) {
  if (e === t) return !0;
  let s = zo(e), r = zo(t);
  return s || r ? s && r ? e.getTime() === t.getTime() : !1 : (s = bt(e), r = bt(t), s || r ? e === t : (s = re(e), r = re(t), s || r ? s && r ? So(e, t, n, Fu) : !1 : (s = xe(e), r = xe(t), s || r ? !s || !r ? !1 : So(e, t, n, ju) : String(e) === String(t))));
}
function Bu(e, t) {
  return e.findIndex((n) => Bt(n, t));
}
const ea = (e) => !!(e && e.__v_isRef === !0), $ = (e) => ke(e) ? e : e == null ? "" : re(e) || xe(e) && (e.toString === Yl || !fe(e.toString)) ? ea(e) ? $(e.value) : JSON.stringify(e, ta, 2) : String(e), ta = (e, t) => ea(t) ? ta(e, t.value) : Ft(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[Pr(s, i) + " =>"] = r, n),
    {}
  )
} : pn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Pr(n))
} : bt(t) ? Pr(t) : xe(t) && !re(t) && !Jl(t) ? String(t) : t, Pr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    bt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Me;
class Uu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Me && (Me.active ? (this.parent = Me, this.index = (Me.scopes || (Me.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes) {
        const s = this.scopes.slice();
        for (t = 0, n = s.length; t < n; t++)
          s[t].pause();
      }
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes) {
        const r = this.scopes.slice();
        for (t = 0, n = r.length; t < n; t++)
          r[t].resume();
      }
      const s = this.effects.slice();
      for (t = 0, n = s.length; t < n; t++)
        s[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Me;
      try {
        return Me = this, t();
      } finally {
        Me = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Me, Me = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Me === this)
        Me = this.prevScope;
      else {
        let t = Me;
        for (; t; ) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope;
            break;
          }
          t = t.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        const r = this.scopes.slice();
        for (n = 0, s = r.length; n < s; n++)
          r[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Vu() {
  return Me;
}
let me;
const Lr = /* @__PURE__ */ new WeakSet();
class na {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Me && (Me.active ? Me.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Lr.has(this) && (Lr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ra(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Co(this), ia(this);
    const t = me, n = rt;
    me = this, rt = !0;
    try {
      return this.fn();
    } finally {
      oa(this), me = t, rt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Mi(t);
      this.deps = this.depsTail = void 0, Co(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Lr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    oi(this) && this.run();
  }
  get dirty() {
    return oi(this);
  }
}
let sa = 0, qn, Yn;
function ra(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Yn, Yn = e;
    return;
  }
  e.next = qn, qn = e;
}
function Ci() {
  sa++;
}
function Ei() {
  if (--sa > 0)
    return;
  if (Yn) {
    let t = Yn;
    for (Yn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; qn; ) {
    let t = qn;
    for (qn = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ia(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function oa(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Mi(s), Hu(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function oi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (la(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function la(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ss) || (e.globalVersion = ss, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !oi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = me, s = rt;
  me = e, rt = !0;
  try {
    ia(e);
    const r = e.fn(e._value);
    (t.version === 0 || xt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    me = n, rt = s, oa(e), e.flags &= -3;
  }
}
function Mi(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Mi(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Hu(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let rt = !0;
const aa = [];
function Ut() {
  aa.push(rt), rt = !1;
}
function Vt() {
  const e = aa.pop();
  rt = e === void 0 ? !0 : e;
}
function Co(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = me;
    me = void 0;
    try {
      t();
    } finally {
      me = n;
    }
  }
}
let ss = 0;
class Wu {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ti {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!me || !rt || me === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== me)
      n = this.activeLink = new Wu(me, this), me.deps ? (n.prevDep = me.depsTail, me.depsTail.nextDep = n, me.depsTail = n) : me.deps = me.depsTail = n, ca(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = me.depsTail, n.nextDep = void 0, me.depsTail.nextDep = n, me.depsTail = n, me.deps === n && (me.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, ss++, this.notify(t);
  }
  notify(t) {
    Ci();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ei();
    }
  }
}
function ca(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        ca(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const li = /* @__PURE__ */ new WeakMap(), un = /* @__PURE__ */ Symbol(
  ""
), ai = /* @__PURE__ */ Symbol(
  ""
), rs = /* @__PURE__ */ Symbol(
  ""
);
function Ne(e, t, n) {
  if (rt && me) {
    let s = li.get(e);
    s || li.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new Ti()), r.map = s, r.key = n), r.track();
  }
}
function St(e, t, n, s, r, i) {
  const o = li.get(e);
  if (!o) {
    ss++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Ci(), t === "clear")
    o.forEach(l);
  else {
    const a = re(e), c = a && Si(n);
    if (a && n === "length") {
      const d = Number(s);
      o.forEach((A, p) => {
        (p === "length" || p === rs || !bt(p) && p >= d) && l(A);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), c && l(o.get(rs)), t) {
        case "add":
          a ? c && l(o.get("length")) : (l(o.get(un)), Ft(e) && l(o.get(ai)));
          break;
        case "delete":
          a || (l(o.get(un)), Ft(e) && l(o.get(ai)));
          break;
        case "set":
          Ft(e) && l(o.get(un));
          break;
      }
  }
  Ei();
}
function zn(e) {
  const t = /* @__PURE__ */ ue(e);
  return t === e || (Ne(t, "iterate", rs), /* @__PURE__ */ Xe(e)) ? t : /* @__PURE__ */ yt(e) ? /* @__PURE__ */ jt(e) ? t.map((n) => Ht(Qe(n))) : t.map(Ht) : t.map(Qe);
}
function fr(e) {
  return Ne(e = /* @__PURE__ */ ue(e), "iterate", rs), e;
}
function ht(e, t) {
  return /* @__PURE__ */ yt(e) ? Ht(/* @__PURE__ */ jt(e) ? Qe(t) : t) : Qe(t);
}
const Gu = {
  __proto__: null,
  [Symbol.iterator]() {
    return Or(this, Symbol.iterator, (e) => ht(this, e));
  },
  concat(...e) {
    return zn(this).concat(
      ...e.map((t) => re(t) ? zn(t) : t)
    );
  },
  entries() {
    return Or(this, "entries", (e) => (e[1] = ht(this, e[1]), e));
  },
  every(e, t) {
    return wt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return wt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => ht(this, s)),
      arguments
    );
  },
  find(e, t) {
    return wt(
      this,
      "find",
      e,
      t,
      (n) => ht(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return wt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return wt(
      this,
      "findLast",
      e,
      t,
      (n) => ht(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return wt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return wt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Dr(this, "includes", e);
  },
  indexOf(...e) {
    return Dr(this, "indexOf", e);
  },
  join(e) {
    return zn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Dr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return wt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Fn(this, "pop");
  },
  push(...e) {
    return Fn(this, "push", e);
  },
  reduce(e, ...t) {
    return Eo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Eo(this, "reduceRight", e, t);
  },
  shift() {
    return Fn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return wt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Fn(this, "splice", e);
  },
  toReversed() {
    return zn(this).toReversed();
  },
  toSorted(e) {
    return zn(this).toSorted(e);
  },
  toSpliced(...e) {
    return zn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Fn(this, "unshift", e);
  },
  values() {
    return Or(this, "values", (e) => ht(this, e));
  }
};
function Or(e, t, n) {
  const s = fr(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ Xe(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const Ku = Array.prototype;
function wt(e, t, n, s, r, i) {
  const o = fr(e), l = o !== e && !/* @__PURE__ */ Xe(e), a = o[t];
  if (a !== Ku[t]) {
    const A = a.apply(e, i);
    return l ? Qe(A) : A;
  }
  let c = n;
  o !== e && (l ? c = function(A, p) {
    return n.call(this, ht(e, A), p, e);
  } : n.length > 2 && (c = function(A, p) {
    return n.call(this, A, p, e);
  }));
  const d = a.call(o, c, s);
  return l && r ? r(d) : d;
}
function Eo(e, t, n, s) {
  const r = fr(e), i = r !== e && !/* @__PURE__ */ Xe(e);
  let o = n, l = !1;
  r !== e && (i ? (l = s.length === 0, o = function(c, d, A) {
    return l && (l = !1, c = ht(e, c)), n.call(this, c, ht(e, d), A, e);
  }) : n.length > 3 && (o = function(c, d, A) {
    return n.call(this, c, d, A, e);
  }));
  const a = r[t](o, ...s);
  return l ? ht(e, a) : a;
}
function Dr(e, t, n) {
  const s = /* @__PURE__ */ ue(e);
  Ne(s, "iterate", rs);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ Pi(n[0]) ? (n[0] = /* @__PURE__ */ ue(n[0]), s[t](...n)) : r;
}
function Fn(e, t, n = []) {
  Ut(), Ci();
  const s = (/* @__PURE__ */ ue(e))[t].apply(e, n);
  return Ei(), Vt(), s;
}
const qu = /* @__PURE__ */ $i("__proto__,__v_isRef,__isVue"), ua = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(bt)
);
function Yu(e) {
  bt(e) || (e = String(e));
  const t = /* @__PURE__ */ ue(this);
  return Ne(t, "has", e), t.hasOwnProperty(e);
}
class da {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (r ? i ? id : ha : i ? pa : fa).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = re(t);
    if (!r) {
      let a;
      if (o && (a = Gu[n]))
        return a;
      if (n === "hasOwnProperty")
        return Yu;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Oe(t) ? t : s
    );
    if ((bt(n) ? ua.has(n) : qu(n)) || (r || Ne(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ Oe(l)) {
      const a = o && Si(n) ? l : l.value;
      return r && xe(a) ? /* @__PURE__ */ ui(a) : a;
    }
    return xe(l) ? r ? /* @__PURE__ */ ui(l) : /* @__PURE__ */ pr(l) : l;
  }
}
class Aa extends da {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const o = re(t) && Si(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ yt(i);
      if (!/* @__PURE__ */ Xe(s) && !/* @__PURE__ */ yt(s) && (i = /* @__PURE__ */ ue(i), s = /* @__PURE__ */ ue(s)), !o && /* @__PURE__ */ Oe(i) && !/* @__PURE__ */ Oe(s))
        return c || (i.value = s), !0;
    }
    const l = o ? Number(n) < t.length : he(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ Oe(t) ? t : r
    );
    return t === /* @__PURE__ */ ue(r) && a && (l ? xt(s, i) && St(t, "set", n, s) : St(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = he(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && St(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!bt(n) || !ua.has(n)) && Ne(t, "has", n), s;
  }
  ownKeys(t) {
    return Ne(
      t,
      "iterate",
      re(t) ? "length" : un
    ), Reflect.ownKeys(t);
  }
}
class Ju extends da {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Zu = /* @__PURE__ */ new Aa(), Xu = /* @__PURE__ */ new Ju(), Qu = /* @__PURE__ */ new Aa(!0);
const ci = (e) => e, Ss = (e) => Reflect.getPrototypeOf(e);
function ed(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = /* @__PURE__ */ ue(r), o = Ft(i), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, c = r[e](...s), d = n ? ci : t ? Ht : Qe;
    return !t && Ne(
      i,
      "iterate",
      a ? ai : un
    ), We(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: A, done: p } = c.next();
          return p ? { value: A, done: p } : {
            value: l ? [d(A[0]), d(A[1])] : d(A),
            done: p
          };
        }
      }
    );
  };
}
function Cs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function td(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ ue(i), l = /* @__PURE__ */ ue(r);
      e || (xt(r, l) && Ne(o, "get", r), Ne(o, "get", l));
      const { has: a } = Ss(o), c = t ? ci : e ? Ht : Qe;
      if (a.call(o, r))
        return c(i.get(r));
      if (a.call(o, l))
        return c(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Ne(/* @__PURE__ */ ue(r), "iterate", un), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ ue(i), l = /* @__PURE__ */ ue(r);
      return e || (xt(r, l) && Ne(o, "has", r), Ne(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ ue(l), c = t ? ci : e ? Ht : Qe;
      return !e && Ne(a, "iterate", un), l.forEach((d, A) => r.call(i, c(d), c(A), o));
    }
  };
  return We(
    n,
    e ? {
      add: Cs("add"),
      set: Cs("set"),
      delete: Cs("delete"),
      clear: Cs("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ ue(this), o = Ss(i), l = /* @__PURE__ */ ue(r), a = !t && !/* @__PURE__ */ Xe(r) && !/* @__PURE__ */ yt(r) ? l : r;
        return o.has.call(i, a) || xt(r, a) && o.has.call(i, r) || xt(l, a) && o.has.call(i, l) || (i.add(a), St(i, "add", a, a)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ Xe(i) && !/* @__PURE__ */ yt(i) && (i = /* @__PURE__ */ ue(i));
        const o = /* @__PURE__ */ ue(this), { has: l, get: a } = Ss(o);
        let c = l.call(o, r);
        c || (r = /* @__PURE__ */ ue(r), c = l.call(o, r));
        const d = a.call(o, r);
        return o.set(r, i), c ? xt(i, d) && St(o, "set", r, i) : St(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ ue(this), { has: o, get: l } = Ss(i);
        let a = o.call(i, r);
        a || (r = /* @__PURE__ */ ue(r), a = o.call(i, r)), l && l.call(i, r);
        const c = i.delete(r);
        return a && St(i, "delete", r, void 0), c;
      },
      clear() {
        const r = /* @__PURE__ */ ue(this), i = r.size !== 0, o = r.clear();
        return i && St(
          r,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = ed(r, e, t);
  }), n;
}
function Ii(e, t) {
  const n = td(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    he(n, r) && r in s ? n : s,
    r,
    i
  );
}
const nd = {
  get: /* @__PURE__ */ Ii(!1, !1)
}, sd = {
  get: /* @__PURE__ */ Ii(!1, !0)
}, rd = {
  get: /* @__PURE__ */ Ii(!0, !1)
};
const fa = /* @__PURE__ */ new WeakMap(), pa = /* @__PURE__ */ new WeakMap(), ha = /* @__PURE__ */ new WeakMap(), id = /* @__PURE__ */ new WeakMap();
function od(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
// @__NO_SIDE_EFFECTS__
function pr(e) {
  return /* @__PURE__ */ yt(e) ? e : Ni(
    e,
    !1,
    Zu,
    nd,
    fa
  );
}
// @__NO_SIDE_EFFECTS__
function ld(e) {
  return Ni(
    e,
    !1,
    Qu,
    sd,
    pa
  );
}
// @__NO_SIDE_EFFECTS__
function ui(e) {
  return Ni(
    e,
    !0,
    Xu,
    rd,
    ha
  );
}
function Ni(e, t, n, s, r) {
  if (!xe(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = od(Eu(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
  return /* @__PURE__ */ yt(e) ? /* @__PURE__ */ jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function yt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Xe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Pi(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ue(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ue(t) : e;
}
function ad(e) {
  return !he(e, "__v_skip") && Object.isExtensible(e) && Xl(e, "__v_skip", !0), e;
}
const Qe = (e) => xe(e) ? /* @__PURE__ */ pr(e) : e, Ht = (e) => xe(e) ? /* @__PURE__ */ ui(e) : e;
// @__NO_SIDE_EFFECTS__
function Oe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ge(e) {
  return cd(e, !1);
}
function cd(e, t) {
  return /* @__PURE__ */ Oe(e) ? e : new ud(e, t);
}
class ud {
  constructor(t, n) {
    this.dep = new Ti(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ue(t), this._value = n ? t : Qe(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Xe(t) || /* @__PURE__ */ yt(t);
    t = s ? t : /* @__PURE__ */ ue(t), xt(t, n) && (this._rawValue = t, this._value = s ? t : Qe(t), this.dep.trigger());
  }
}
function C(e) {
  return /* @__PURE__ */ Oe(e) ? e.value : e;
}
const dd = {
  get: (e, t, n) => t === "__v_raw" ? e : C(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ Oe(r) && !/* @__PURE__ */ Oe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function ma(e) {
  return /* @__PURE__ */ jt(e) ? e : new Proxy(e, dd);
}
class Ad {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ti(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ss - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    me !== this)
      return ra(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return la(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function fd(e, t, n = !1) {
  let s, r;
  return fe(e) ? s = e : (s = e.get, r = e.set), new Ad(s, r, n);
}
const Es = {}, Vs = /* @__PURE__ */ new WeakMap();
let nn;
function pd(e, t = !1, n = nn) {
  if (n) {
    let s = Vs.get(n);
    s || Vs.set(n, s = []), s.push(e);
  }
}
function hd(e, t, n = ye) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: a } = n, c = (I) => r ? I : /* @__PURE__ */ Xe(I) || r === !1 || r === 0 ? Ct(I, 1) : Ct(I);
  let d, A, p, z, w = !1, x = !1;
  if (/* @__PURE__ */ Oe(e) ? (A = () => e.value, w = /* @__PURE__ */ Xe(e)) : /* @__PURE__ */ jt(e) ? (A = () => c(e), w = !0) : re(e) ? (x = !0, w = e.some((I) => /* @__PURE__ */ jt(I) || /* @__PURE__ */ Xe(I)), A = () => e.map((I) => {
    if (/* @__PURE__ */ Oe(I))
      return I.value;
    if (/* @__PURE__ */ jt(I))
      return c(I);
    if (fe(I))
      return a ? a(I, 2) : I();
  })) : fe(e) ? t ? A = a ? () => a(e, 2) : e : A = () => {
    if (p) {
      Ut();
      try {
        p();
      } finally {
        Vt();
      }
    }
    const I = nn;
    nn = d;
    try {
      return a ? a(e, 3, [z]) : e(z);
    } finally {
      nn = I;
    }
  } : A = cn, t && r) {
    const I = A, R = r === !0 ? 1 / 0 : r;
    A = () => Ct(I(), R);
  }
  const _ = Vu(), S = () => {
    d.stop(), _ && _.active && Kl(_.effects, d);
  };
  if (i && t) {
    const I = t;
    t = (...R) => {
      const P = I(...R);
      return S(), P;
    };
  }
  let T = x ? new Array(e.length).fill(Es) : Es;
  const M = (I) => {
    if (!(!(d.flags & 1) || !d.dirty && !I))
      if (t) {
        const R = d.run();
        if (I || r || w || (x ? R.some((P, U) => xt(P, T[U])) : xt(R, T))) {
          p && p();
          const P = nn;
          nn = d;
          try {
            const U = [
              R,
              // pass undefined as the old value when it's changed for the first time
              T === Es ? void 0 : x && T[0] === Es ? [] : T,
              z
            ];
            T = R, a ? a(t, 3, U) : (
              // @ts-expect-error
              t(...U)
            );
          } finally {
            nn = P;
          }
        }
      } else
        d.run();
  };
  return l && l(M), d = new na(A), d.scheduler = o ? () => o(M, !1) : M, z = (I) => pd(I, !1, d), p = d.onStop = () => {
    const I = Vs.get(d);
    if (I) {
      if (a)
        a(I, 4);
      else
        for (const R of I) R();
      Vs.delete(d);
    }
  }, t ? s ? M(!0) : T = d.run() : o ? o(M.bind(null, !0), !0) : d.run(), S.pause = d.pause.bind(d), S.resume = d.resume.bind(d), S.stop = S, S;
}
function Ct(e, t = 1 / 0, n) {
  if (t <= 0 || !xe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Oe(e))
    Ct(e.value, t, n);
  else if (re(e))
    for (let s = 0; s < e.length; s++)
      Ct(e[s], t, n);
  else if (pn(e) || Ft(e))
    e.forEach((s) => {
      Ct(s, t, n);
    });
  else if (Jl(e)) {
    for (const s in e)
      Ct(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ct(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function vs(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    hr(r, t, n);
  }
}
function ot(e, t, n, s) {
  if (fe(e)) {
    const r = vs(e, t, n, s);
    return r && ql(r) && r.catch((i) => {
      hr(i, t, n);
    }), r;
  }
  if (re(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(ot(e[i], t, n, s));
    return r;
  }
}
function hr(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ye;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let A = 0; A < d.length; A++)
          if (d[A](e, a, c) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ut(), vs(i, null, 10, [
        e,
        a,
        c
      ]), Vt();
      return;
    }
  }
  md(e, n, r, s, o);
}
function md(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const Pe = [];
let pt = -1;
const En = [];
let Dt = null, $n = 0;
const ga = /* @__PURE__ */ Promise.resolve();
let Hs = null;
function xa(e) {
  const t = Hs || ga;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function gd(e) {
  let t = pt + 1, n = Pe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = Pe[s], i = is(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Li(e) {
  if (!(e.flags & 1)) {
    const t = is(e), n = Pe[Pe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= is(n) ? Pe.push(e) : Pe.splice(gd(t), 0, e), e.flags |= 1, va();
  }
}
function va() {
  Hs || (Hs = ga.then(ya));
}
function xd(e) {
  if (!re(e))
    Dt && e.id === -1 ? Dt.splice($n + 1, 0, e) : e.flags & 1 || (En.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      En.push(e[t]);
  va();
}
function Mo(e, t, n = pt + 1) {
  for (; n < Pe.length; n++) {
    const s = Pe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Pe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ba(e) {
  if (En.length) {
    const t = [...new Set(En)].sort(
      (n, s) => is(n) - is(s)
    );
    if (En.length = 0, Dt) {
      for (let n = 0; n < t.length; n++)
        Dt.push(t[n]);
      return;
    }
    for (Dt = t, $n = 0; $n < Dt.length; $n++) {
      const n = Dt[$n];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Dt = null, $n = 0;
  }
}
const is = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ya(e) {
  try {
    for (pt = 0; pt < Pe.length; pt++) {
      const t = Pe[pt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), vs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; pt < Pe.length; pt++) {
      const t = Pe[pt];
      t && (t.flags &= -2);
    }
    pt = -1, Pe.length = 0, ba(), Hs = null, (Pe.length || En.length) && ya();
  }
}
let Ze = null, ka = null;
function Ws(e) {
  const t = Ze;
  return Ze = e, ka = e && e.type.__scopeId || null, t;
}
function wa(e, t = Ze, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && qs(-1);
    const i = Ws(t), o = An.length;
    let l;
    try {
      l = e(...r);
    } finally {
      for (let a = An.length; a > o; a--) Ha();
      Ws(i), s._d && qs(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function vt(e, t) {
  if (Ze === null)
    return e;
  const n = vr(Ze), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, a = ye] = t[r];
    i && (fe(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Ct(o), s.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function Xt(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let a = l.dir[s];
    a && (Ut(), ot(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Vt());
  }
}
function vd(e, t, n = !1) {
  const s = Ka();
  if (s || Mn) {
    let r = Mn ? Mn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && fe(t) ? t.call(s && s.proxy) : t;
  }
}
const bd = /* @__PURE__ */ Symbol.for("v-scx"), yd = () => vd(bd);
function dn(e, t, n) {
  return kd(e, t, n);
}
function kd(e, t, n = ye) {
  const { immediate: s, deep: r, flush: i, once: o } = n, l = We({}, n), a = t && s || !t && i !== "post";
  let c;
  if (cs) {
    if (i === "sync") {
      const z = yd();
      c = z.__watcherHandles || (z.__watcherHandles = []);
    } else if (!a) {
      const z = () => {
      };
      return z.stop = cn, z.resume = cn, z.pause = cn, z;
    }
  }
  const d = Gt;
  l.call = (z, w, x) => ot(z, d, w, x);
  let A = !1;
  i === "post" ? l.scheduler = (z) => {
    Re(z, d && d.suspense);
  } : i !== "sync" && (A = !0, l.scheduler = (z, w) => {
    w ? z() : Li(z);
  }), l.augmentJob = (z) => {
    t && (z.flags |= 4), A && (z.flags |= 2, d && (z.id = d.uid, z.i = d));
  };
  const p = hd(e, t, l);
  return cs && (c ? c.push(p) : a && p()), p;
}
const wd = /* @__PURE__ */ Symbol("_vte"), mr = (e) => e.__isTeleport, Je = /* @__PURE__ */ Symbol("_leaveCb"), jn = /* @__PURE__ */ Symbol("_enterCb");
function zd() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ma(() => {
    e.isMounted = !0;
  }), Di(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ye = [Function, Array], za = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ye,
  onEnter: Ye,
  onAfterEnter: Ye,
  onEnterCancelled: Ye,
  // leave
  onBeforeLeave: Ye,
  onLeave: Ye,
  onAfterLeave: Ye,
  onLeaveCancelled: Ye,
  // appear
  onBeforeAppear: Ye,
  onAppear: Ye,
  onAfterAppear: Ye,
  onAppearCancelled: Ye
}, _a = (e) => {
  const t = e.subTree;
  return t.component ? _a(t.component) : t;
}, _d = {
  name: "BaseTransition",
  props: za,
  setup(e, { slots: t }) {
    const n = Ka(), s = zd();
    return () => {
      const r = t.default && Ca(t.default(), !0), i = r && r.length ? $a(r) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? B() : void 0
      );
      if (!i)
        return;
      const o = /* @__PURE__ */ ue(e), { mode: l } = o;
      if (s.isLeaving)
        return Rr(i);
      const a = Gs(i);
      if (!a)
        return Rr(i);
      let c = di(
        a,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (A) => c = A
      );
      a.type !== Le && os(a, c);
      let d = n.subTree && Gs(n.subTree);
      if (d && d.type !== Le && !sn(d, a) && _a(n).type !== Le) {
        let A = di(
          d,
          o,
          s,
          n
        );
        if (os(d, A), l === "out-in" && a.type !== Le)
          return s.isLeaving = !0, A.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete A.afterLeave, d = void 0;
          }, Rr(i);
        l === "in-out" && a.type !== Le ? A.delayLeave = (p, z, w) => {
          const x = Sa(
            s,
            d
          );
          x[String(d.key)] = d, p[Je] = () => {
            z(), p[Je] = void 0, delete c.delayedLeave, d = void 0;
          }, c.delayedLeave = () => {
            w(), delete c.delayedLeave, d = void 0;
          };
        } : d = void 0;
      } else d && (d = void 0);
      return i;
    };
  }
};
function $a(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Le) {
        t = n;
        break;
      }
  }
  return t;
}
const $d = _d;
function Sa(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function di(e, t, n, s, r) {
  const {
    appear: i,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: d,
    onEnterCancelled: A,
    onBeforeLeave: p,
    onLeave: z,
    onAfterLeave: w,
    onLeaveCancelled: x,
    onBeforeAppear: _,
    onAppear: S,
    onAfterAppear: T,
    onAppearCancelled: M
  } = t, I = String(e.key), R = Sa(n, e), P = (V, g) => {
    V && ot(
      V,
      s,
      9,
      g
    );
  }, U = (V, g) => {
    const m = g[1];
    P(V, g), re(V) ? V.every((v) => v.length <= 1) && m() : V.length <= 1 && m();
  }, ne = {
    mode: o,
    persisted: l,
    beforeEnter(V) {
      let g = a;
      if (!n.isMounted)
        if (i)
          g = _ || a;
        else
          return;
      V[Je] && V[Je](
        !0
        /* cancelled */
      );
      const m = R[I];
      m && sn(e, m) && m.el[Je] && m.el[Je](), P(g, [V]);
    },
    enter(V) {
      if (R[I] === e) return;
      let g = c, m = d, v = A;
      if (!n.isMounted)
        if (i)
          g = S || c, m = T || d, v = M || A;
        else
          return;
      let F = !1;
      V[jn] = (le) => {
        F || (F = !0, le ? P(v, [V]) : P(m, [V]), ne.delayedLeave && ne.delayedLeave(), V[jn] = void 0);
      };
      const oe = V[jn].bind(null, !1);
      g ? U(g, [V, oe]) : oe();
    },
    leave(V, g) {
      const m = String(e.key);
      if (V[jn] && V[jn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return g();
      P(p, [V]);
      let v = !1;
      V[Je] = (oe) => {
        v || (v = !0, g(), oe ? P(x, [V]) : P(w, [V]), V[Je] = void 0, R[m] === e && delete R[m]);
      };
      const F = V[Je].bind(null, !1);
      R[m] = e, z ? U(z, [V, F]) : F();
    },
    clone(V) {
      const g = di(
        V,
        t,
        n,
        s,
        r
      );
      return r && r(g), g;
    }
  };
  return ne;
}
function Rr(e) {
  if (Oi(e))
    return e = Wt(e), e.children = null, e;
}
function Gs(e) {
  if (!Oi(e))
    return mr(e.type) && e.children ? $a(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && fe(n.default))
      return n.default();
  }
}
function os(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    os(
      mr(n.type) && Gs(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ca(e, t = !1, n) {
  let s = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === X ? (o.patchFlag & 128 && r++, s = s.concat(
      Ca(o.children, t, l)
    )) : (t || o.type !== Le) && s.push(l != null ? Wt(o, { key: l }) : o);
  }
  if (r > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function je(e, t) {
  return fe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    We({ name: e.name }, t, { setup: e })
  ) : e;
}
function Sd(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function To(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Ks = /* @__PURE__ */ new WeakMap();
function Jn(e, t, n, s, r = !1) {
  if (re(e)) {
    e.forEach(
      (x, _) => Jn(
        x,
        t && (re(t) ? t[_] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (Zn(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Jn(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? vr(s.component) : s.el, o = r ? null : i, { i: l, r: a } = e, c = t && t.r, d = l.refs === ye ? l.refs = {} : l.refs, A = l.setupState, p = /* @__PURE__ */ ue(A), z = A === ye ? Gl : (x) => To(d, x) ? !1 : he(p, x), w = (x, _) => !(_ && To(d, _));
  if (c != null && c !== a) {
    if (Io(t), ke(c))
      d[c] = null, z(c) && (A[c] = null);
    else if (/* @__PURE__ */ Oe(c)) {
      const x = t;
      w(c, x.k) && (c.value = null), x.k && (d[x.k] = null);
    }
  }
  if (fe(a))
    vs(a, l, 12, [o, d]);
  else {
    const x = ke(a), _ = /* @__PURE__ */ Oe(a);
    if (x || _) {
      const S = () => {
        if (e.f) {
          const T = x ? z(a) ? A[a] : d[a] : w() || !e.k ? a.value : d[e.k];
          if (r)
            re(T) && Kl(T, i);
          else if (re(T))
            T.includes(i) || T.push(i);
          else if (x)
            d[a] = [i], z(a) && (A[a] = d[a]);
          else {
            const M = [i];
            w(a, e.k) && (a.value = M), e.k && (d[e.k] = M);
          }
        } else x ? (d[a] = o, z(a) && (A[a] = o)) : _ && (w(a, e.k) && (a.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const T = () => {
          S(), Ks.delete(e);
        };
        T.id = -1, Ks.set(e, T), Re(T, n);
      } else
        Io(e), S();
    }
  }
}
function Io(e) {
  const t = Ks.get(e);
  t && (t.flags |= 8, Ks.delete(e));
}
dr().requestIdleCallback;
dr().cancelIdleCallback;
const Zn = (e) => !!e.type.__asyncLoader, Oi = (e) => e.type.__isKeepAlive;
function Cd(e, t, n = Gt, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ut();
      const l = ji(n), a = ot(t, n, e, o);
      return l(), Vt(), a;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const Ea = (e) => (t, n = Gt) => {
  (!cs || e === "sp") && Cd(e, (...s) => t(...s), n);
}, Ma = Ea("m"), Di = Ea(
  "bum"
), Ed = /* @__PURE__ */ Symbol.for("v-ndc");
function de(e, t, n, s) {
  let r;
  const i = n, o = re(e);
  if (o || ke(e)) {
    const l = o && /* @__PURE__ */ jt(e);
    let a = !1, c = !1;
    l && (a = !/* @__PURE__ */ Xe(e), c = /* @__PURE__ */ yt(e), e = fr(e)), r = new Array(e.length);
    for (let d = 0, A = e.length; d < A; d++)
      r[d] = t(
        a ? c ? Ht(Qe(e[d])) : Qe(e[d]) : e[d],
        d,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (xe(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, a) => t(l, a, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let a = 0, c = l.length; a < c; a++) {
        const d = l[a];
        r[a] = t(e[d], d, a, i);
      }
    }
  else
    r = [];
  return r;
}
const Ai = (e) => e ? qa(e) ? vr(e) : Ai(e.parent) : null, Xn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ We(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ai(e.parent),
    $root: (e) => Ai(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      Li(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = xa.bind(e.proxy)),
    $watch: (e) => cn
  })
), Fr = (e, t) => e !== ye && !e.__isScriptSetup && he(e, t), Md = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: a } = e;
    if (t[0] !== "$") {
      const p = o[t];
      if (p !== void 0)
        switch (p) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Fr(s, t))
          return o[t] = 1, s[t];
        if (he(i, t))
          return o[t] = 3, i[t];
        if (n !== ye && he(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const c = Xn[t];
    let d, A;
    if (c)
      return t === "$attrs" && Ne(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== ye && he(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      A = a.config.globalProperties, he(A, t)
    )
      return A[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return Fr(r, t) ? (r[t] = n, !0) : he(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o }
  }, l) {
    let a;
    return !!(n[l] || Fr(t, l) || he(i, l) || he(s, l) || he(Xn, l) || he(r.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : he(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ta() {
  return {
    app: null,
    config: {
      isNativeTag: Gl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Td = 0;
function Id(e, t) {
  return function(s, r = null) {
    fe(s) || (s = We({}, s)), r != null && !xe(r) && (r = null);
    const i = Ta(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = i.app = {
      _uid: Td++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: cA,
      get config() {
        return i.config;
      },
      set config(d) {
      },
      use(d, ...A) {
        return o.has(d) || (d && fe(d.install) ? (o.add(d), d.install(c, ...A)) : fe(d) && (o.add(d), d(c, ...A))), c;
      },
      mixin(d) {
        return c;
      },
      component(d, A) {
        return A ? (i.components[d] = A, c) : i.components[d];
      },
      directive(d, A) {
        return A ? (i.directives[d] = A, c) : i.directives[d];
      },
      mount(d, A, p) {
        if (!a) {
          const z = c._ceVNode || Te(s, r);
          return z.appContext = i, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(z, d, p), a = !0, c._container = d, d.__vue_app__ = c, vr(z.component);
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        a && (ot(
          l,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, A) {
        return i.provides[d] = A, c;
      },
      runWithContext(d) {
        const A = Mn;
        Mn = c;
        try {
          return d();
        } finally {
          Mn = A;
        }
      }
    };
    return c;
  };
}
let Mn = null;
const Nd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${st(t)}Modifiers`] || e[`${vn(t)}Modifiers`];
function Pd(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ye;
  let r = n;
  const i = t.startsWith("update:"), o = i && Nd(s, t.slice(7));
  o && (o.trim && (r = n.map((d) => ke(d) ? d.trim() : d)), o.number && (r = r.map(ur)));
  let l, a = s[l = Nr(t)] || // also try camelCase event handler (#2249)
  s[l = Nr(st(t))];
  !a && i && (a = s[l = Nr(vn(t))]), a && ot(
    a,
    e,
    6,
    r
  );
  const c = s[l + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, ot(
      c,
      e,
      6,
      r
    );
  }
}
function Ld(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {};
  return i ? (re(i) ? i.forEach((l) => o[l] = null) : We(o, i), xe(e) && s.set(e, o), o) : (xe(e) && s.set(e, null), null);
}
function gr(e, t) {
  return !e || !lr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), he(e, t[0].toLowerCase() + t.slice(1)) || he(e, vn(t)) || he(e, t));
}
function No(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: a,
    render: c,
    renderCache: d,
    props: A,
    data: p,
    setupState: z,
    ctx: w,
    inheritAttrs: x
  } = e, _ = Ws(e);
  let S, T;
  try {
    if (n.shapeFlag & 4) {
      const I = r || s, R = I;
      S = mt(
        c.call(
          R,
          I,
          d,
          A,
          z,
          p,
          w
        )
      ), T = l;
    } else {
      const I = t;
      S = mt(
        I.length > 1 ? I(
          A,
          { attrs: l, slots: o, emit: a }
        ) : I(
          A,
          null
        )
      ), T = t.props ? l : Od(l);
    }
  } catch (I) {
    An.length = 0, hr(I, e, 1), S = Te(Le);
  }
  let M = S;
  if (T && x !== !1) {
    const I = Object.keys(T), { shapeFlag: R } = M;
    I.length && R & 7 && (i && I.some(ar) && (T = Dd(
      T,
      i
    )), M = Wt(M, T, !1, !0));
  }
  if (n.dirs && (M = Wt(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const I = mr(M.type) && Gs(M) || M;
    os(I, n.transition);
  }
  return S = M, Ws(_), S;
}
const Od = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || lr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Dd = (e, t) => {
  const n = {};
  for (const s in e)
    (!ar(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Rd(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: a } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Po(s, o, c) : !!o;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let A = 0; A < d.length; A++) {
        const p = d[A];
        if (Ia(o, s, p) && !gr(c, p))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Po(s, o, c) : !0 : !!o;
  return !1;
}
function Po(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (Ia(t, e, i) && !gr(n, i))
      return !0;
  }
  return !1;
}
function Ia(e, t, n) {
  const s = e[n], r = t[n];
  return n === "style" && xe(s) && xe(r) ? !Bt(s, r) : s !== r;
}
function Fd({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = s, e = r), r === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Na = {}, Pa = () => Object.create(Na), La = (e) => Object.getPrototypeOf(e) === Na;
function jd(e, t, n, s = !1) {
  const r = {}, i = Pa();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Oa(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : /* @__PURE__ */ ld(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Bd(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ ue(r), [a] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let A = 0; A < d.length; A++) {
        let p = d[A];
        if (gr(e.emitsOptions, p))
          continue;
        const z = t[p];
        if (a)
          if (he(i, p))
            z !== i[p] && (i[p] = z, c = !0);
          else {
            const w = st(p);
            r[w] = fi(
              a,
              l,
              w,
              z,
              e,
              !1
            );
          }
        else
          z !== i[p] && (i[p] = z, c = !0);
      }
    }
  } else {
    Oa(e, t, r, i) && (c = !0);
    let d;
    for (const A in l)
      (!t || // for camelCase
      !he(t, A) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = vn(A)) === A || !he(t, d))) && (a ? n && // for camelCase
      (n[A] !== void 0 || // for kebab-case
      n[d] !== void 0) && (r[A] = fi(
        a,
        l,
        A,
        void 0,
        e,
        !0
      )) : delete r[A]);
    if (i !== l)
      for (const A in i)
        (!t || !he(t, A)) && (delete i[A], c = !0);
  }
  c && St(e.attrs, "set", "");
}
function Oa(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (Kn(a))
        continue;
      const c = t[a];
      let d;
      r && he(r, d = st(a)) ? !i || !i.includes(d) ? n[d] = c : (l || (l = {}))[d] = c : gr(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, o = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ ue(n), c = l || ye;
    for (let d = 0; d < i.length; d++) {
      const A = i[d];
      n[A] = fi(
        r,
        a,
        A,
        c[A],
        e,
        !he(c, A)
      );
    }
  }
  return o;
}
function fi(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = he(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && fe(a)) {
        const { propsDefaults: c } = r;
        if (n in c)
          s = c[n];
        else {
          const d = ji(r);
          s = c[n] = a.call(
            null,
            t
          ), d();
        }
      } else
        s = a;
      r.ce && r.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === vn(n)) && (s = !0));
  }
  return s;
}
function Ud(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  if (!i)
    return xe(e) && s.set(e, on), on;
  if (re(i))
    for (let c = 0; c < i.length; c++) {
      const d = st(i[c]);
      Lo(d) && (o[d] = ye);
    }
  else if (i)
    for (const c in i) {
      const d = st(c);
      if (Lo(d)) {
        const A = i[c], p = o[d] = re(A) || fe(A) ? { type: A } : We({}, A), z = p.type;
        let w = !1, x = !0;
        if (re(z))
          for (let _ = 0; _ < z.length; ++_) {
            const S = z[_], T = fe(S) && S.name;
            if (T === "Boolean") {
              w = !0;
              break;
            } else T === "String" && (x = !1);
          }
        else
          w = fe(z) && z.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = w, p[
          1
          /* shouldCastTrue */
        ] = x, (w || he(p, "default")) && l.push(d);
      }
    }
  const a = [o, l];
  return xe(e) && s.set(e, a), a;
}
function Lo(e) {
  return e[0] !== "$" && !Kn(e);
}
const Ri = (e) => e === "_" || e === "_ctx" || e === "$stable", Fi = (e) => re(e) ? e.map(mt) : [mt(e)], Vd = (e, t, n) => {
  if (t._n)
    return t;
  const s = wa((...r) => Fi(t(...r)), n);
  return s._c = !1, s;
}, Da = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Ri(r)) continue;
    const i = e[r];
    if (fe(i))
      t[r] = Vd(r, i, s);
    else if (i != null) {
      const o = Fi(i);
      t[r] = () => o;
    }
  }
}, Ra = (e, t) => {
  const n = Fi(t);
  e.slots.default = () => n;
}, Fa = (e, t, n) => {
  for (const s in t)
    (n || !Ri(s)) && (e[s] = t[s]);
}, Hd = (e, t, n) => {
  const s = e.slots = Pa();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Fa(s, t, n), n && Xl(s, "_", r, !0)) : Da(t, s);
  } else t && Ra(e, t);
}, Wd = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = ye;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Fa(r, t, n) : (i = !t.$stable, Da(t, r)), o = t;
  } else t && (Ra(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !Ri(l) && o[l] == null && delete r[l];
}, Re = Jd;
function Gd(e) {
  return Kd(e);
}
function Kd(e, t) {
  const n = dr();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: d,
    parentNode: A,
    nextSibling: p,
    setScopeId: z = cn,
    insertStaticContent: w
  } = e, x = (h, y, E, j = null, N = null, O = null, G = void 0, W = null, H = !!y.dynamicChildren) => {
    if (h === y)
      return;
    h && !sn(h, y) && (j = $s(h), Y(h, N, O, !0), h = null), y.patchFlag === -2 && (H = !1, y.dynamicChildren = null), y.dynamicChildren && h && h.dynamicChildren && h.dynamicChildren.hasOnce && (y.dynamicChildren === on && (y.dynamicChildren = []), y.dynamicChildren.hasOnce = !0);
    const { type: L, ref: te, shapeFlag: J } = y;
    switch (L) {
      case xr:
        _(h, y, E, j);
        break;
      case Le:
        S(h, y, E, j);
        break;
      case Br:
        h == null && T(y, E, j, G);
        break;
      case X:
        v(
          h,
          y,
          E,
          j,
          N,
          O,
          G,
          W,
          H
        );
        break;
      default:
        J & 1 ? R(
          h,
          y,
          E,
          j,
          N,
          O,
          G,
          W,
          H
        ) : J & 6 ? F(
          h,
          y,
          E,
          j,
          N,
          O,
          G,
          W,
          H
        ) : (J & 64 || J & 128) && L.process(
          h,
          y,
          E,
          j,
          N,
          O,
          G,
          W,
          H,
          Dn
        );
    }
    te != null && N ? Jn(te, h && h.ref, O, y || h, !y) : te == null && h && h.ref != null && Jn(h.ref, null, O, h, !0);
  }, _ = (h, y, E, j) => {
    if (h == null)
      s(
        y.el = l(y.children),
        E,
        j
      );
    else {
      const N = y.el = h.el;
      y.children !== h.children && c(N, y.children);
    }
  }, S = (h, y, E, j) => {
    h == null ? s(
      y.el = a(y.children || ""),
      E,
      j
    ) : y.el = h.el;
  }, T = (h, y, E, j) => {
    [h.el, h.anchor] = w(
      h.children,
      y,
      E,
      j,
      h.el,
      h.anchor
    );
  }, M = ({ el: h, anchor: y }, E, j) => {
    let N;
    for (; h && h !== y; )
      N = p(h), s(h, E, j), h = N;
    s(y, E, j);
  }, I = ({ el: h, anchor: y }) => {
    let E;
    for (; h && h !== y; )
      E = p(h), r(h), h = E;
    r(y);
  }, R = (h, y, E, j, N, O, G, W, H) => {
    if (y.type === "svg" ? G = "svg" : y.type === "math" && (G = "mathml"), h == null)
      P(
        y,
        E,
        j,
        N,
        O,
        G,
        W,
        H
      );
    else {
      const L = h.el && h.el._isVueCE ? h.el : null;
      try {
        L && L._beginPatch(), V(
          h,
          y,
          N,
          O,
          G,
          W,
          H
        );
      } finally {
        L && L._endPatch();
      }
    }
  }, P = (h, y, E, j, N, O, G, W) => {
    let H, L;
    const { props: te, shapeFlag: J, transition: ee, dirs: se } = h;
    if (H = h.el = o(
      h.type,
      O,
      te && te.is,
      te
    ), J & 8 ? d(H, h.children) : J & 16 && ne(
      h.children,
      H,
      null,
      j,
      N,
      jr(h, O),
      G,
      W
    ), se && Xt(h, null, j, "created"), U(H, h, h.scopeId, G, j), te) {
      for (const pe in te)
        pe !== "value" && !Kn(pe) && i(H, pe, null, te[pe], O, j);
      "value" in te && i(H, "value", null, te.value, O), (L = te.onVnodeBeforeMount) && ft(L, j, h);
    }
    se && Xt(h, null, j, "beforeMount");
    const ce = qd(N, ee);
    ce && ee.beforeEnter(H), s(H, y, E), ((L = te && te.onVnodeMounted) || ce || se) && Re(() => {
      try {
        L && ft(L, j, h), ce && ee.enter(H), se && Xt(h, null, j, "mounted");
      } finally {
      }
    }, N);
  }, U = (h, y, E, j, N) => {
    if (E && z(h, E), j)
      for (let O = 0; O < j.length; O++)
        z(h, j[O]);
    if (N) {
      let O = N.subTree;
      if (y === O || Va(O.type) && (O.ssContent === y || O.ssFallback === y)) {
        const G = N.vnode;
        U(
          h,
          G,
          G.scopeId,
          G.slotScopeIds,
          N.parent
        );
      }
    }
  }, ne = (h, y, E, j, N, O, G, W, H = 0) => {
    for (let L = H; L < h.length; L++) {
      const te = h[L] = W ? $t(h[L]) : mt(h[L]);
      x(
        null,
        te,
        y,
        E,
        j,
        N,
        O,
        G,
        W
      );
    }
  }, V = (h, y, E, j, N, O, G) => {
    const W = y.el = h.el;
    let { patchFlag: H, dynamicChildren: L, dirs: te } = y;
    H |= h.patchFlag & 16;
    const J = h.props || ye, ee = y.props || ye;
    let se;
    if (E && Qt(E, !1), (se = ee.onVnodeBeforeUpdate) && ft(se, E, y, h), te && Xt(y, h, E, "beforeUpdate"), E && Qt(E, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    L && (!h.dynamicChildren || h.dynamicChildren.length !== L.length) && (H = 0, G = !1, L = null), (J.innerHTML && ee.innerHTML == null || J.textContent && ee.textContent == null) && d(W, ""), L ? g(
      h.dynamicChildren,
      L,
      W,
      E,
      j,
      jr(y, N),
      O
    ) : G || De(
      h,
      y,
      W,
      null,
      E,
      j,
      jr(y, N),
      O,
      !1
    ), H > 0) {
      if (H & 16)
        m(W, J, ee, E, N);
      else if (H & 2 && J.class !== ee.class && i(W, "class", null, ee.class, N), H & 4 && i(W, "style", J.style, ee.style, N), H & 8) {
        const ce = y.dynamicProps;
        for (let pe = 0; pe < ce.length; pe++) {
          const Ae = ce[pe], we = J[Ae], Ee = ee[Ae];
          (Ee !== we || Ae === "value") && i(W, Ae, we, Ee, N, E);
        }
      }
      H & 1 && h.children !== y.children && d(W, y.children);
    } else !G && L == null && m(W, J, ee, E, N);
    ((se = ee.onVnodeUpdated) || te) && Re(() => {
      se && ft(se, E, y, h), te && Xt(y, h, E, "updated");
    }, j);
  }, g = (h, y, E, j, N, O, G) => {
    for (let W = 0; W < y.length; W++) {
      const H = h[W], L = y[W], te = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        H.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (H.type === X || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !sn(H, L) || // - In the case of a component, it could contain anything.
        H.shapeFlag & 198) ? A(H.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          E
        )
      );
      x(
        H,
        L,
        te,
        null,
        j,
        N,
        O,
        G,
        !0
      );
    }
  }, m = (h, y, E, j, N) => {
    if (y !== E) {
      if (y !== ye)
        for (const O in y)
          !Kn(O) && !(O in E) && i(
            h,
            O,
            y[O],
            null,
            N,
            j
          );
      for (const O in E) {
        if (Kn(O)) continue;
        const G = E[O], W = y[O];
        G !== W && O !== "value" && i(h, O, W, G, N, j);
      }
      "value" in E && i(h, "value", y.value, E.value, N);
    }
  }, v = (h, y, E, j, N, O, G, W, H) => {
    const L = y.el = h ? h.el : l(""), te = y.anchor = h ? h.anchor : l("");
    let { patchFlag: J, dynamicChildren: ee, slotScopeIds: se } = y;
    se && (W = W ? W.concat(se) : se), h == null ? (s(L, E, j), s(te, E, j), ne(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      y.children || [],
      E,
      te,
      N,
      O,
      G,
      W,
      H
    )) : J > 0 && J & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren && h.dynamicChildren.length === ee.length ? (g(
      h.dynamicChildren,
      ee,
      E,
      N,
      O,
      G,
      W
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (y.key != null || N && y === N.subTree) && ja(
      h,
      y,
      !0
      /* shallow */
    )) : De(
      h,
      y,
      E,
      te,
      N,
      O,
      G,
      W,
      H
    );
  }, F = (h, y, E, j, N, O, G, W, H) => {
    y.slotScopeIds = W, h == null ? y.shapeFlag & 512 ? N.ctx.activate(
      y,
      E,
      j,
      G,
      H
    ) : oe(
      y,
      E,
      j,
      N,
      O,
      G,
      H
    ) : le(h, y, H);
  }, oe = (h, y, E, j, N, O, G) => {
    const W = h.component = nA(
      h,
      j,
      N
    );
    if (Oi(h) && (W.ctx.renderer = Dn), sA(W, !1, G), W.asyncDep) {
      if (N && N.registerDep(W, Ce, G), !h.el) {
        const H = W.subTree = Te(Le);
        S(null, H, y, E), h.placeholder = H.el;
      }
    } else
      Ce(
        W,
        h,
        y,
        E,
        N,
        O,
        G
      );
  }, le = (h, y, E) => {
    const j = y.component = h.component;
    if (Rd(h, y, E))
      if (j.asyncDep && !j.asyncResolved) {
        y.el = h.el, qe(j, y, E);
        return;
      } else
        j.next = y, j.update();
    else
      y.el = h.el, j.vnode = y;
  }, Ce = (h, y, E, j, N, O, G) => {
    const W = () => {
      if (h.isMounted) {
        let { next: J, bu: ee, u: se, parent: ce, vnode: pe } = h;
        {
          const dt = Ba(h);
          if (dt) {
            J && (J.el = pe.el, qe(h, J, G)), dt.asyncDep.then(() => {
              Re(() => {
                h.isUnmounted || L();
              }, N);
            });
            return;
          }
        }
        let Ae = J, we;
        Qt(h, !1), J ? (J.el = pe.el, qe(h, J, G)) : J = pe, ee && Os(ee), (we = J.props && J.props.onVnodeBeforeUpdate) && ft(we, ce, J, pe), Qt(h, !0);
        const Ee = No(h), ut = h.subTree;
        h.subTree = Ee, x(
          ut,
          Ee,
          // parent may have changed if it's in a teleport
          A(ut.el),
          // anchor may have changed if it's in a fragment
          $s(ut),
          h,
          N,
          O
        ), J.el = Ee.el, Ae === null && Fd(h, Ee.el), se && Re(se, N), (we = J.props && J.props.onVnodeUpdated) && Re(
          () => ft(we, ce, J, pe),
          N
        );
      } else {
        let J;
        const { el: ee, props: se } = y, { bm: ce, m: pe, parent: Ae, root: we, type: Ee } = h, ut = Zn(y);
        Qt(h, !1), ce && Os(ce), !ut && (J = se && se.onVnodeBeforeMount) && ft(J, Ae, y), Qt(h, !0);
        {
          we.ce && we.ce._hasShadowRoot() && we.ce._injectChildStyle(
            Ee,
            h.parent ? h.parent.type : void 0
          );
          const dt = h.subTree = No(h);
          x(
            null,
            dt,
            E,
            j,
            h,
            N,
            O
          ), y.el = dt.el;
        }
        if (pe && Re(pe, N), !ut && (J = se && se.onVnodeMounted)) {
          const dt = y;
          Re(
            () => ft(J, Ae, dt),
            N
          );
        }
        (y.shapeFlag & 256 || Ae && Zn(Ae.vnode) && Ae.vnode.shapeFlag & 256) && h.a && Re(h.a, N), h.isMounted = !0, y = E = j = null;
      }
    };
    h.scope.on();
    const H = h.effect = new na(W);
    h.scope.off();
    const L = h.update = H.run.bind(H), te = h.job = H.runIfDirty.bind(H);
    te.i = h, te.id = h.uid, H.scheduler = () => Li(te), Qt(h, !0), L();
  }, qe = (h, y, E) => {
    y.component = h;
    const j = h.vnode.props;
    h.vnode = y, h.next = null, Bd(h, y.props, j, E), Wd(h, y.children, E), Ut(), Mo(h), Vt();
  }, De = (h, y, E, j, N, O, G, W, H = !1) => {
    const L = h && h.children, te = h ? h.shapeFlag : 0, J = y.children, { patchFlag: ee, shapeFlag: se } = y;
    if (ee > 0) {
      if (ee & 128) {
        ie(
          L,
          J,
          E,
          j,
          N,
          O,
          G,
          W,
          H
        );
        return;
      } else if (ee & 256) {
        ct(
          L,
          J,
          E,
          j,
          N,
          O,
          G,
          W,
          H
        );
        return;
      }
    }
    se & 8 ? (te & 16 && Nt(L, N, O), J !== L && d(E, J)) : te & 16 ? se & 16 ? ie(
      L,
      J,
      E,
      j,
      N,
      O,
      G,
      W,
      H
    ) : Nt(L, N, O, !0) : (te & 8 && d(E, ""), se & 16 && ne(
      J,
      E,
      j,
      N,
      O,
      G,
      W,
      H
    ));
  }, ct = (h, y, E, j, N, O, G, W, H) => {
    h = h || on, y = y || on;
    const L = h.length, te = y.length, J = Math.min(L, te);
    let ee;
    for (ee = 0; ee < J; ee++) {
      const se = y[ee] = H ? $t(y[ee]) : mt(y[ee]);
      x(
        h[ee],
        se,
        E,
        null,
        N,
        O,
        G,
        W,
        H
      );
    }
    L > te ? Nt(
      h,
      N,
      O,
      !0,
      !1,
      J
    ) : ne(
      y,
      E,
      j,
      N,
      O,
      G,
      W,
      H,
      J
    );
  }, ie = (h, y, E, j, N, O, G, W, H) => {
    let L = 0;
    const te = y.length;
    let J = h.length - 1, ee = te - 1;
    for (; L <= J && L <= ee; ) {
      const se = h[L], ce = y[L] = H ? $t(y[L]) : mt(y[L]);
      if (sn(se, ce))
        x(
          se,
          ce,
          E,
          null,
          N,
          O,
          G,
          W,
          H
        );
      else
        break;
      L++;
    }
    for (; L <= J && L <= ee; ) {
      const se = h[J], ce = y[ee] = H ? $t(y[ee]) : mt(y[ee]);
      if (sn(se, ce))
        x(
          se,
          ce,
          E,
          null,
          N,
          O,
          G,
          W,
          H
        );
      else
        break;
      J--, ee--;
    }
    if (L > J) {
      if (L <= ee) {
        const se = ee + 1, ce = se < te ? y[se].el : j;
        for (; L <= ee; )
          x(
            null,
            y[L] = H ? $t(y[L]) : mt(y[L]),
            E,
            ce,
            N,
            O,
            G,
            W,
            H
          ), L++;
      }
    } else if (L > ee)
      for (; L <= J; )
        Y(h[L], N, O, !0), L++;
    else {
      const se = L, ce = L, pe = /* @__PURE__ */ new Map();
      for (L = ce; L <= ee; L++) {
        const Be = y[L] = H ? $t(y[L]) : mt(y[L]);
        Be.key != null && pe.set(Be.key, L);
      }
      let Ae, we = 0;
      const Ee = ee - ce + 1;
      let ut = !1, dt = 0;
      const Rn = new Array(Ee);
      for (L = 0; L < Ee; L++) Rn[L] = 0;
      for (L = se; L <= J; L++) {
        const Be = h[L];
        if (we >= Ee) {
          Y(Be, N, O, !0);
          continue;
        }
        let At;
        if (Be.key != null)
          At = pe.get(Be.key);
        else
          for (Ae = ce; Ae <= ee; Ae++)
            if (Rn[Ae - ce] === 0 && sn(Be, y[Ae])) {
              At = Ae;
              break;
            }
        At === void 0 ? Y(Be, N, O, !0) : (Rn[At - ce] = L + 1, At >= dt ? dt = At : ut = !0, x(
          Be,
          y[At],
          E,
          null,
          N,
          O,
          G,
          W,
          H
        ), we++);
      }
      const yo = ut ? Yd(Rn) : on;
      for (Ae = yo.length - 1, L = Ee - 1; L >= 0; L--) {
        const Be = ce + L, At = y[Be], ko = y[Be + 1], wo = Be + 1 < te ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ko.el || Ua(ko)
        ) : j;
        Rn[L] === 0 ? x(
          null,
          At,
          E,
          wo,
          N,
          O,
          G,
          W,
          H
        ) : ut && (Ae < 0 || L !== yo[Ae] ? D(At, E, wo, 2) : Ae--);
      }
    }
  }, D = (h, y, E, j, N = null) => {
    const { el: O, type: G, transition: W, children: H, shapeFlag: L } = h;
    if (L & 6) {
      D(h.component.subTree, y, E, j);
      return;
    }
    if (L & 128) {
      h.suspense.move(y, E, j);
      return;
    }
    if (L & 64) {
      G.move(h, y, E, Dn);
      return;
    }
    if (G === X) {
      s(O, y, E);
      for (let J = 0; J < H.length; J++)
        D(H[J], y, E, j);
      s(h.anchor, y, E);
      return;
    }
    if (G === Br) {
      M(h, y, E);
      return;
    }
    if (j !== 2 && L & 1 && W)
      if (j === 0)
        W.persisted && !O[Je] ? s(O, y, E) : (W.beforeEnter(O), s(O, y, E), Re(() => W.enter(O), N));
      else {
        const { leave: J, delayLeave: ee, afterLeave: se } = W, ce = () => {
          h.ctx.isUnmounted ? r(O) : s(O, y, E);
        }, pe = () => {
          const Ae = O._isLeaving || !!O[Je];
          O._isLeaving && O[Je](
            !0
            /* cancelled */
          ), W.persisted && !Ae ? ce() : J(O, () => {
            ce(), se && se();
          });
        };
        ee ? ee(O, ce, pe) : pe();
      }
    else
      s(O, y, E);
  }, Y = (h, y, E, j = !1, N = !1) => {
    const {
      type: O,
      props: G,
      ref: W,
      children: H,
      dynamicChildren: L,
      shapeFlag: te,
      patchFlag: J,
      dirs: ee,
      cacheIndex: se,
      memo: ce
    } = h;
    if ((J === -2 || L && L.hasOnce) && (N = !1), W != null && (Ut(), Jn(W, null, E, h, !0), Vt()), se != null && (!h.ctx || h.ctx === y) && (y.renderCache[se] = void 0), te & 256) {
      y.ctx.deactivate(h);
      return;
    }
    const pe = te & 1 && ee, Ae = !Zn(h);
    let we;
    if (Ae && (we = G && G.onVnodeBeforeUnmount) && ft(we, y, h), te & 6)
      Zt(h.component, E, j);
    else {
      if (te & 128) {
        h.suspense.unmount(E, j);
        return;
      }
      pe && Xt(h, null, y, "beforeUnmount"), te & 64 ? h.type.remove(
        h,
        y,
        E,
        Dn,
        j
      ) : L && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !L.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (O !== X || J > 0 && J & 64) ? Nt(
        L,
        y,
        E,
        !1,
        !0
      ) : (O === X && J & 384 || !N && te & 16) && Nt(H, y, E), j && K(h);
    }
    const Ee = ce != null && se == null;
    (Ae && (we = G && G.onVnodeUnmounted) || pe || Ee) && Re(() => {
      we && ft(we, y, h), pe && Xt(h, null, y, "unmounted"), Ee && (h.el = null);
    }, E);
  }, K = (h) => {
    const { type: y, el: E, anchor: j, transition: N } = h;
    if (y === X) {
      ae(E, j);
      return;
    }
    if (y === Br) {
      I(h), N && !N.persisted && N.afterLeave && N.afterLeave();
      return;
    }
    const O = () => {
      r(E), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (h.shapeFlag & 1 && N && !N.persisted) {
      const { leave: G, delayLeave: W } = N, H = () => G(E, O);
      W ? W(h.el, O, H) : H();
    } else
      O();
  }, ae = (h, y) => {
    let E;
    for (; h !== y; )
      E = p(h), r(h), h = E;
    r(y);
  }, Zt = (h, y, E) => {
    const { bum: j, scope: N, job: O, subTree: G, um: W, m: H, a: L } = h;
    Oo(H), Oo(L), j && Os(j), N.stop(), O ? (O.flags |= 8, Y(G, h, y, E)) : h.vnode.el && G && (G.transition = h.vnode.transition, Y(G, h, y, E)), W && Re(W, y), Re(() => {
      h.isUnmounted = !0;
    }, y);
  }, Nt = (h, y, E, j = !1, N = !1, O = 0) => {
    for (let G = O; G < h.length; G++)
      Y(h[G], y, E, j, N);
  }, $s = (h) => {
    if (h.shapeFlag & 6)
      return $s(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const y = p(h.anchor || h.el), E = y && y[wd];
    return E ? p(E) : y;
  };
  let Ir = !1;
  const bo = (h, y, E) => {
    let j;
    h == null ? y._vnode && (Y(y._vnode, null, null, !0), j = y._vnode.component) : x(
      y._vnode || null,
      h,
      y,
      null,
      null,
      null,
      E
    ), y._vnode = h, Ir || (Ir = !0, Mo(j), ba(), Ir = !1);
  }, Dn = {
    p: x,
    um: Y,
    m: D,
    r: K,
    mt: oe,
    mc: ne,
    pc: De,
    pbc: g,
    n: $s,
    o: e
  };
  return {
    render: bo,
    hydrate: void 0,
    createApp: Id(bo)
  };
}
function jr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Qt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function qd(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ja(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (re(s) && re(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = $t(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && ja(o, l)), l.type === xr && (l.patchFlag === -1 && (l = r[i] = $t(l)), l.el = o.el), l.type === Le && !l.el && (l.el = o.el);
    }
}
function Yd(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const c = e[s];
    if (c !== 0) {
      if (r = n[n.length - 1], e[r] < c) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < c ? i = l + 1 : o = l;
      c < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function Ba(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ba(t);
}
function Oo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ua(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ua(t.subTree) : null;
}
const Va = (e) => e.__isSuspense;
function Jd(e, t) {
  t && t.pendingBranch ? re(e) ? t.effects.push(...e) : t.effects.push(e) : xd(e);
}
const X = /* @__PURE__ */ Symbol.for("v-fgt"), xr = /* @__PURE__ */ Symbol.for("v-txt"), Le = /* @__PURE__ */ Symbol.for("v-cmt"), Br = /* @__PURE__ */ Symbol.for("v-stc"), An = [];
let Ve = null;
function b(e = !1) {
  An.push(Ve = e ? null : []);
}
function Ha() {
  An.pop(), Ve = An[An.length - 1] || null;
}
let ls = 1;
function qs(e, t = !1) {
  ls += e, e < 0 && Ve && t && (Ve.hasOnce = !0);
}
function Wa(e) {
  return e.dynamicChildren = ls > 0 ? Ve || on : null, Ha(), ls > 0 && Ve && Ve.push(e), e;
}
function k(e, t, n, s, r, i) {
  return Wa(
    u(
      e,
      t,
      n,
      s,
      r,
      i,
      !0
    )
  );
}
function Fe(e, t, n, s, r) {
  return Wa(
    Te(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function Ys(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function sn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ga = ({ key: e }) => e ?? null, Ds = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ke(e) || /* @__PURE__ */ Oe(e) || fe(e) ? { i: Ze, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, s = 0, r = null, i = e === X ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ga(t),
    ref: t && Ds(t),
    scopeId: ka,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Ze
  };
  return l ? (Js(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= ke(n) ? 8 : 16), ls > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ve && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ve.push(a), a;
}
const Te = Zd;
function Zd(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === Ed) && (e = Le), Ys(e)) {
    const l = Wt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Js(l, n), ls > 0 && !i && Ve && (l.shapeFlag & 6 ? Ve[Ve.indexOf(e)] = l : Ve.push(l)), l.patchFlag = -2, l;
  }
  if (lA(e) && (e = e.__vccOpts), t) {
    t = Xd(t);
    let { class: l, style: a } = t;
    l && !ke(l) && (t.class = Q(l)), xe(a) && (/* @__PURE__ */ Pi(a) && !re(a) && (a = We({}, a)), t.style = Ar(a));
  }
  const o = ke(e) ? 1 : Va(e) ? 128 : mr(e) ? 64 : xe(e) ? 4 : fe(e) ? 2 : 0;
  return u(
    e,
    t,
    n,
    s,
    r,
    o,
    i,
    !0
  );
}
function Xd(e) {
  return e ? /* @__PURE__ */ Pi(e) || La(e) ? We({}, e) : e : null;
}
function Wt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: a } = e, c = t ? Qd(r || {}, t) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Ga(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? re(i) ? i.concat(Ds(t)) : [i, Ds(t)] : Ds(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== X ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Wt(e.ssContent),
    ssFallback: e.ssFallback && Wt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return a && s && os(
    d,
    a.clone(d)
  ), d;
}
function Ie(e = " ", t = 0) {
  return Te(xr, null, e, t);
}
function B(e = "", t = !1) {
  return t ? (b(), Fe(Le, null, e)) : Te(Le, null, e);
}
function mt(e) {
  return e == null || typeof e == "boolean" ? Te(Le) : re(e) ? Te(
    X,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ys(e) ? $t(e) : Te(xr, null, String(e));
}
function $t(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Wt(e);
}
function Js(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (re(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Js(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !La(t) ? t._ctx = Ze : r === 3 && Ze && (Ze.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (fe(t)) {
    if (s & 65) {
      Js(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ze }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [Ie(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Qd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Q([t.class, s.class]));
      else if (r === "style")
        t.style = Ar([t.style, s.style]);
      else if (lr(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(re(i) && i.includes(o)) ? t[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ar(r) && (t[r] = o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function ft(e, t, n, s = null) {
  ot(e, t, 7, [
    n,
    s
  ]);
}
const eA = Ta();
let tA = 0;
function nA(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || eA, i = {
    uid: tA++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Uu(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ud(s, r),
    emitsOptions: Ld(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ye,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: ye,
    data: ye,
    props: ye,
    attrs: ye,
    slots: ye,
    refs: ye,
    setupState: ye,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Pd.bind(null, i), e.ce && e.ce(i), i;
}
let Gt = null;
const Ka = () => Gt || Ze;
let Zs, as;
{
  const e = dr(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Zs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Gt = n
  ), as = t(
    "__VUE_SSR_SETTERS__",
    (n) => cs = n
  );
}
const ji = (e) => {
  const t = Gt;
  return Zs(e), e.scope.on(), () => {
    e.scope.off(), Zs(t);
  };
}, Do = () => {
  Gt && Gt.scope.off(), Zs(null);
};
function qa(e) {
  return e.vnode.shapeFlag & 4;
}
let cs = !1;
function sA(e, t = !1, n = !1) {
  t && as(t);
  const { props: s, children: r } = e.vnode, i = qa(e);
  jd(e, s, i, t), Hd(e, r, n || t);
  const o = i ? rA(e, t) : void 0;
  return t && as(!1), o;
}
function rA(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Md);
  const { setup: s } = n;
  if (s) {
    Ut();
    const r = e.setupContext = s.length > 1 ? oA(e) : null, i = ji(e), o = vs(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = ql(o);
    if (Vt(), i(), (l || e.sp) && !Zn(e) && Sd(e), l) {
      if (o.then(Do, Do), t)
        return o.then((a) => {
          as(!0);
          try {
            Ro(e, a, t);
          } finally {
            as(!1);
          }
        }).catch((a) => {
          hr(a, e, 0);
        });
      e.asyncDep = o;
    } else
      Ro(e, o);
  } else
    Ya(e);
}
function Ro(e, t, n) {
  fe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : xe(t) && (e.setupState = ma(t)), Ya(e);
}
function Ya(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || cn);
}
const iA = {
  get(e, t) {
    return Ne(e, "get", ""), e[t];
  }
};
function oA(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, iA),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function vr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ma(ad(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Xn)
        return Xn[n](e);
    },
    has(t, n) {
      return n in t || n in Xn;
    }
  })) : e.proxy;
}
function lA(e) {
  return fe(e) && "__vccOpts" in e;
}
const q = (e, t) => /* @__PURE__ */ fd(e, t, cs);
function aA(e, t, n) {
  try {
    qs(-1);
    const s = arguments.length;
    return s === 2 ? xe(t) && !re(t) ? Ys(t) ? Te(e, null, [t]) : Te(e, t) : Te(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Ys(n) && (n = [n]), Te(e, t, n));
  } finally {
    qs(1);
  }
}
const cA = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let pi;
const Fo = typeof window < "u" && window.trustedTypes;
if (Fo)
  try {
    pi = /* @__PURE__ */ Fo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ja = pi ? (e) => pi.createHTML(e) : (e) => e, uA = "http://www.w3.org/2000/svg", dA = "http://www.w3.org/1998/Math/MathML", _t = typeof document < "u" ? document : null, jo = _t && /* @__PURE__ */ _t.createElement("template"), AA = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? _t.createElementNS(uA, e) : t === "mathml" ? _t.createElementNS(dA, e) : n ? _t.createElement(e, { is: n }) : _t.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => _t.createTextNode(e),
  createComment: (e) => _t.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => _t.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      jo.innerHTML = Ja(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = jo.content;
      if (s === "svg" || s === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Pt = "transition", Bn = "animation", us = /* @__PURE__ */ Symbol("_vtc"), Za = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, fA = /* @__PURE__ */ We(
  {},
  za,
  Za
), pA = (e) => (e.displayName = "Transition", e.props = fA, e), hA = /* @__PURE__ */ pA(
  (e, { slots: t }) => aA($d, mA(e), t)
), en = (e, t = []) => {
  re(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Bo = (e) => e ? re(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function mA(e) {
  const t = {};
  for (const v in e)
    v in Za || (t[v] = e[v]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: r,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = i,
    appearActiveClass: c = o,
    appearToClass: d = l,
    leaveFromClass: A = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: z = `${n}-leave-to`
  } = e, w = gA(r), x = w && w[0], _ = w && w[1], {
    onBeforeEnter: S,
    onEnter: T,
    onEnterCancelled: M,
    onLeave: I,
    onLeaveCancelled: R,
    onBeforeAppear: P = S,
    onAppear: U = T,
    onAppearCancelled: ne = M
  } = t, V = (v, F, oe, le) => {
    v._enterCancelled = le, tn(v, F ? d : l), tn(v, F ? c : o), oe && oe();
  }, g = (v, F) => {
    v._isLeaving = !1, tn(v, A), tn(v, z), tn(v, p), F && F();
  }, m = (v) => (F, oe) => {
    const le = v ? U : T, Ce = () => V(F, v, oe);
    en(le, [F, Ce]), Uo(() => {
      tn(F, v ? a : i), zt(F, v ? d : l), Bo(le) || Vo(F, s, x, Ce);
    });
  };
  return We(t, {
    onBeforeEnter(v) {
      en(S, [v]), zt(v, i), zt(v, o);
    },
    onBeforeAppear(v) {
      en(P, [v]), zt(v, a), zt(v, c);
    },
    onEnter: m(!1),
    onAppear: m(!0),
    onLeave(v, F) {
      v._isLeaving = !0;
      const oe = () => g(v, F);
      zt(v, A), v._enterCancelled ? (zt(v, p), Go(v)) : (Go(v), zt(v, p)), Uo(() => {
        v._isLeaving && (tn(v, A), zt(v, z), Bo(I) || Vo(v, s, _, oe));
      }), en(I, [v, oe]);
    },
    onEnterCancelled(v) {
      V(v, !1, void 0, !0), en(M, [v]);
    },
    onAppearCancelled(v) {
      V(v, !0, void 0, !0), en(ne, [v]);
    },
    onLeaveCancelled(v) {
      g(v), en(R, [v]);
    }
  });
}
function gA(e) {
  if (e == null)
    return null;
  if (xe(e))
    return [Ur(e.enter), Ur(e.leave)];
  {
    const t = Ur(e);
    return [t, t];
  }
}
function Ur(e) {
  return Iu(e);
}
function zt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[us] || (e[us] = /* @__PURE__ */ new Set())).add(t);
}
function tn(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[us];
  n && (n.delete(t), n.size || (e[us] = void 0));
}
function Uo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let xA = 0;
function Vo(e, t, n, s) {
  const r = e._endId = ++xA, i = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: l, propCount: a } = vA(e, t);
  if (!o)
    return s();
  const c = o + "end";
  let d = 0;
  const A = () => {
    e.removeEventListener(c, p), i();
  }, p = (z) => {
    z.target === e && ++d >= a && A();
  };
  setTimeout(() => {
    d < a && A();
  }, l + 1), e.addEventListener(c, p);
}
function vA(e, t) {
  const n = window.getComputedStyle(e), s = (w) => (n[w] || "").split(", "), r = s(`${Pt}Delay`), i = s(`${Pt}Duration`), o = Ho(r, i), l = s(`${Bn}Delay`), a = s(`${Bn}Duration`), c = Ho(l, a);
  let d = null, A = 0, p = 0;
  t === Pt ? o > 0 && (d = Pt, A = o, p = i.length) : t === Bn ? c > 0 && (d = Bn, A = c, p = a.length) : (A = Math.max(o, c), d = A > 0 ? o > c ? Pt : Bn : null, p = d ? d === Pt ? i.length : a.length : 0);
  const z = d === Pt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${Pt}Property`).toString()
  );
  return {
    type: d,
    timeout: A,
    propCount: p,
    hasTransform: z
  };
}
function Ho(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Wo(n) + Wo(e[s])));
}
function Wo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Go(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function bA(e, t, n) {
  const s = e[us];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ko = /* @__PURE__ */ Symbol("_vod"), yA = /* @__PURE__ */ Symbol("_vsh"), kA = /* @__PURE__ */ Symbol(""), wA = /(?:^|;)\s*display\s*:/;
function zA(e, t, n) {
  const s = e.style, r = ke(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (ke(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Wn(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Wn(s, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null ? $A(
        e,
        o,
        !ke(t) && t ? t[o] : void 0,
        l
      ) || Wn(s, o, l) : Wn(s, o, "");
    }
  } else if (r) {
    if (t !== n) {
      const o = s[kA];
      o && (n += ";" + o), s.cssText = n, i = wA.test(n);
    }
  } else t && e.removeAttribute("style");
  Ko in e && (e[Ko] = i ? s.display : "", e[yA] && (s.display = "none"));
}
const Ms = /\s*!important$/;
function Wn(e, t, n) {
  if (re(n))
    n.forEach((s) => Wn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    Ms.test(n) ? e.setProperty(t, n.replace(Ms, ""), "important") : e.setProperty(t, n);
  else {
    const s = _A(e, t);
    Ms.test(n) ? e.setProperty(
      vn(s),
      n.replace(Ms, ""),
      "important"
    ) : e[s] = n;
  }
}
const qo = ["Webkit", "Moz", "ms"], Vr = {};
function _A(e, t) {
  const n = Vr[t];
  if (n)
    return n;
  let s = st(t);
  if (s !== "filter" && s in e)
    return Vr[t] = s;
  s = Zl(s);
  for (let r = 0; r < qo.length; r++) {
    const i = qo[r] + s;
    if (i in e)
      return Vr[t] = i;
  }
  return t;
}
function $A(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ke(s) && n === s;
}
const Yo = "http://www.w3.org/1999/xlink";
function Jo(e, t, n, s, r, i = Ru(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Yo, t.slice(6, t.length)) : e.setAttributeNS(Yo, t, n) : n == null || i && !Ql(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : bt(n) ? String(n) : n
  );
}
function Zo(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ja(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Ql(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function rn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function SA(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Xo = /* @__PURE__ */ Symbol("_vei");
function CA(e, t, n, s, r = null) {
  const i = e[Xo] || (e[Xo] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [l, a] = TA(t);
    if (s) {
      const c = i[t] = PA(
        s,
        r
      );
      rn(e, l, c, a);
    } else o && (SA(e, l, o, a), i[t] = void 0);
  }
}
const EA = /(Once|Passive|Capture)$/, MA = /^on:?(?:Once|Passive|Capture)$/;
function TA(e) {
  let t, n;
  for (; (n = e.match(EA)) && !MA.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : vn(e.slice(2)), t];
}
let Hr = 0;
const IA = /* @__PURE__ */ Promise.resolve(), NA = () => Hr || (IA.then(() => Hr = 0), Hr = Date.now());
function PA(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const r = n.value;
    if (re(r)) {
      const i = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        i.call(s), s._stopped = !0;
      };
      const o = r.slice(), l = [s];
      for (let a = 0; a < o.length && !s._stopped; a++) {
        const c = o[a];
        c && ot(
          c,
          t,
          5,
          l
        );
      }
    } else
      ot(
        r,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = NA(), n;
}
const Qo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, LA = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? bA(e, s, o) : t === "style" ? zA(e, n, s) : lr(t) ? ar(t) || CA(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : OA(e, t, s, o)) ? (Zo(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Jo(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (DA(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ke(s))) ? Zo(e, st(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Jo(e, t, s, o));
};
function OA(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Qo(t) && fe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Qo(t) && ke(n) ? !1 : t in e;
}
function DA(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = st(t);
  return Array.isArray(n) ? n.some((r) => st(r) === s) : Object.keys(n).some((r) => st(r) === s);
}
const Xs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return re(t) ? (n) => Os(t, n) : t;
};
function RA(e) {
  e.target.composing = !0;
}
function el(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ln = /* @__PURE__ */ Symbol("_assign"), Ts = /* @__PURE__ */ Symbol("_initialValue");
function Wr(e, t, n) {
  return t && (e = e.trim()), n && (e = ur(e)), e;
}
const Rt = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e.parentNode && (e.type === "text" ? e[Ts] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Ts] = e.defaultValue.replace(/\r\n?/g, `
`))), e[ln] = Xs(r);
    const i = s || r.props && r.props.type === "number";
    rn(e, t ? "change" : "input", (o) => {
      o.target.composing || e[ln](Wr(e.value, n, i));
    }), (n || i) && rn(e, "change", () => {
      e.value = Wr(e.value, n, i);
    }), t || (rn(e, "compositionstart", RA), rn(e, "compositionend", el), rn(e, "change", el));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const r = t ?? "", i = e[Ts];
    delete e[Ts], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[ln](Wr(e.value, n, s)) : e.value = r;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
    if (e[ln] = Xs(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? ur(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === a) || (e.value = a);
  }
}, Xa = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, rn(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (a) => a.selected).map(
        (a) => n ? ur(Qs(a)) : Qs(a)
      ), i = e.multiple, o = i ? pn(e._modelValue) ? new Set(r) : r : r[0], l = e._pendingValue = [
        i,
        i ? re(o) ? r.slice() : r : o
      ];
      try {
        e[ln](o);
      } finally {
        xa(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[ln] = Xs(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    tl(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[ln] = Xs(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !FA(t, n[1], n[0])) && tl(e, t);
  }
};
function FA(e, t, n) {
  if (!n || re(e)) return Bt(e, t);
  if (pn(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function tl(e, t) {
  const n = e.multiple, s = re(t);
  if (!(n && !s && !pn(t))) {
    for (let r = 0, i = e.options.length; r < i; r++) {
      const o = e.options[r], l = Qs(o);
      if (n)
        if (s) {
          const a = typeof l;
          a === "string" || a === "number" ? o.selected = t.some((c) => String(c) === String(l)) : o.selected = Bu(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Bt(Qs(o), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Qs(e) {
  return "_value" in e ? e._value : e.value;
}
const jA = ["ctrl", "shift", "alt", "meta"], BA = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => jA.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ue = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = BA[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  }));
}, UA = /* @__PURE__ */ We({ patchProp: LA }, AA);
let nl;
function VA() {
  return nl || (nl = Gd(UA));
}
const HA = ((...e) => {
  const t = VA().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = GA(s);
    if (!r) return;
    const i = t._component;
    !fe(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, WA(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function WA(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function GA(e) {
  return ke(e) ? document.querySelector(e) : e;
}
const KA = "zhonglou", qA = "钟楼", YA = "1.6.0", JA = "S", ZA = 10, XA = "【副本进行中：钟楼】", QA = [], ef = { briefingName: "钟楼" }, tf = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, nf = { type: "nights", template: "剩余{n}夜" }, sf = "至第四日日出", rf = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], of = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", lf = [{ key: "crank", label: "曲柄当前在谁手里", hint: "4F机房曲柄现在由谁掌握；没人拿着就写「挂在机房」" }, { key: "watcher", label: "当夜值班者", hint: "当夜抽签或托付后的值班者；白天写上一夜的值班者，尚未抽签写「未定」" }, { key: "positions", label: "各角色所在位置", hint: "简写，如「死者：5F西侧；布局者：1F大厅」；只写正文能推断出的" }, { key: "victim", label: "死者目前状态", hint: "如「正常活动」「5F西侧昏睡」「已坠入竖井」「尸体已被发现」" }, { key: "clues", label: "已被发现的关键线索", hint: "列表；只记{{user}}或同伴已经发现的" }, { key: "theories", label: "已公开讨论过的推理", hint: "列表；众人公开说出过的推理或怀疑" }], af = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], cf = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], uf = [{ id: "M1", q: "第一夜的值班签会抽中主播吗", yes: "会", no: "不会", p: 0.1, by: "d1", judge: "第一日日落的抽签结果是{{user}}本人当夜值班" }, { id: "M2", q: "塔里会出人命吗", yes: "会", no: "不会", p: 0.5, judge: "有人死于他人之手，系统宣布钟楼停摆、开启审判" }, { id: "M3", q: "主播会亲手摇响大钟吗", yes: "会", no: "不会", p: 0.35, judge: "{{user}}本人在4F机房摇动曲柄，让大钟鸣响" }], df = [{ title: "游玩说明", md: `## 副本概况

- 名称：钟楼
- 等级：S
- 人数：10人
- 时限：以钟楼为准，至第四日日出
- 目标：存活三夜，请避免成为钟守

## 需知

1. 时间以钟楼为准。塔里没有钟，只有走出塔门才能看到钟面。
2. 每天最多100轮对话：白天72轮，夜晚28轮。到点会自动日落、日出。
3. 在场与否，事情都会发生。
4. 可以用指令快进，如"跳到日落""睡到天亮"。遇到必须决定的事，快进会自动停下。
5. 入塔后所有人的位格按基准值执行，异能封存，道具栏冻结。
6. 塔内一砖一石不可损毁，海是副本的边界。
7. 有人死于他人之手时开启审判。调查最多50轮，审判最多50轮。每位存活者投一票，得票最多者为结果，平票算作没有找出凶手。
   投中凶手：凶手被抹杀，其余人通关，副本结束。
   没有投中：凶手独自通关，其余所有人被抹杀。
8. 若无命案发生，第四日日出时，第三夜最后一个摇动曲柄的人会被钟楼留下，成为钟守，其余人通关。

## 小提示

- 看到的、听见的、纸上画的，都值得反复对照。
- 值班不是小事。
- 多记，多问，多回头看。` }, { title: "钟楼守则", md: `## 一、系统简报

「副本简报 - 钟楼」
「人数：10人」
「等级：S」
「时限：以钟楼为准，至第四日日出」
「简报：存活三夜，请避免成为钟守。」

## 二、系统公告

「本副本内，所有玩家的位格按基准值执行。」
「异能暂时封存，道具栏暂时冻结，无法取出，也无法存入。」
「离开副本后，以上状态自动恢复。」
「祝各位玩家，准时哦~」

## 三、钟楼守则（刻于1F大厅北侧石壁）

本塔由钟守照管。钟守不在时，请诸位代为照管。

1. 本塔一切时间，以钟面为准。塔内不设第二只钟。
2. 钟在日落时停摆。钟停摆期间，钟面层东口封闭。
3. 每日日落，于1F大厅抽签，选出当夜值班者一名。抽签结果当场公开，不得重抽。
4. 值班者须在日落后，经机房旋转梯登上钟室，检查大钟。
5. 值班者须在日出前，于4F机房摇动曲柄，使大钟鸣响十二下。日出时若大钟未曾鸣响十二下，本塔所有人判定失败。
6. 值班可以托付他人。托付之后，以实际摇动曲柄者为当夜值班者。
7. 夜间，钟面层内禁止任何光源。机房与其他楼层不在此限。
8. 日出时，所有人须身处自己的房间，等候点名。全员到齐后，钟楼方才重新走动。
9. 若有人死于他人之手，本塔即刻停摆，并开启审判。审判结束前，钟楼不会走动。
10. 审判以投票决定凶手。每位在场者一票，得票最多者即为审判结果；平票视为未能找出凶手。
    投中凶手：凶手抹杀，其余人通关。
    未投中凶手：凶手独自通关，其余人抹杀。
11. 西口之下为钟锤竖井，请勿靠近。
12. 机房备有《操作手册》一册，请勿带离机房。
13. 本塔一砖一石，皆不可毁。
14. 本塔需要一位钟守。第四日日出时，钟楼将留下第三夜最后一个摇动曲柄的人，作为新的钟守。若此前已有审判投中，则由被抹杀的凶手成为钟守，其余人即刻离塔。

## 四、楼层图（每人一份）

- 钟室：塔顶，标注"大钟"。
- 5F 钟面层：一个圆，以一条直线从中间分为两个半圆。右半标注"东室"，左半标注"西室·无入口"。东室地板标有"东口（梯）"，西室地板标有"西口（竖井·危险）"。
- 4F 机房：中央标注"齿轮箱·曲柄"；东侧标注"梯·通东口"；西侧竖井旁标注"铁门·旋转梯·通钟室"；东南角标注"楼梯·通3F"。
- 3F：卧室五间。
- 2F：卧室五间。
- 1F 大厅：标注"抽签桌""守则石壁""竖井检修门""药箱""文具柜"。

## 五、公开环境

- 钟楼是一座孤立在海中礁岛上的圆柱形石塔。塔门在1F，门外是一小片岩岸，四面环海，没有船。
- 塔身外侧有一面巨大的钟面，只有一根时针，没有分针。钟面只能在塔外看到。
- 塔内除大钟外没有任何计时工具。玩家的个人面板在本副本内不显示时间。
- 1F至4F之间有普通楼梯相连。4F到5F只能经由机房东侧的梯子，从地板上的东口钻上去。
- 5F没有窗，屋顶正中有一扇天窗，白天透光，夜晚漆黑。
- 4F机房挂有油灯，夜间可以点亮。
- 每人在2F或3F分到一间卧室，房门可以从内侧闩上。
- 1F有食物与清水，足够十人三日所需。
- 1F药箱：绷带、止痛片，以及一瓶安眠药，瓶身标签写着"十二片"。
- 1F文具柜：一沓纸、两支铅笔，是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], Af = [{ type: "discuss", text: "S级本还封异能，这谁顶得住", when: "open" }, { type: "discuss", text: "异能封了，道具也冻了，全靠脑子" }, { type: "discuss", text: "塔里连个钟都没有，全靠外面那一根时针" }, { type: "discuss", text: "守则我截图了，第十四条越看越不对劲" }, { type: "cold", text: "四面都是海，想跑都没船" }, { type: "discuss", text: "抽签别抽到主播，我看着都怕", phase: ["d1", "d2", "d3"] }, { type: "discuss", text: "今晚谁值班？", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "钟面层不能有光，那得多黑", phase: ["n1", "n2", "n3"] }, { type: "bless", text: "十二下，一定要数清楚", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "谁想当钟守，反正我不想" }, { type: "discuss", text: "停摆了……开始查吧", phase: ["inv"] }, { type: "discuss", text: "投票前再想想，投错了只有凶手能出去", phase: ["trial"] }, { type: "discuss", text: "平票也算没找出来，别分票", phase: ["trial"] }], ff = {
  id: KA,
  name: qA,
  version: YA,
  level: JA,
  players: ZA,
  token: XA,
  legacyKeys: QA,
  detect: ef,
  time: tf,
  remaining: nf,
  deadline: sf,
  roles: rf,
  rolesNote: of,
  stateFields: lf,
  phases: af,
  events: cf,
  markets: uf,
  docs: df,
  danmaku: Af
}, pf = "jingjie", hf = "境界游乐园", mf = "1.2.0", gf = "A", xf = "【副本进行中：境界游乐园】", vf = [], bf = { briefingName: "境界游乐园" }, yf = { type: "none" }, kf = { type: "fromPanel" }, wf = [], zf = [], _f = [{ id: "M1", q: "15:30演出时主播会回头吗", yes: "会", no: "不会", p: 0.3, judge: "15:30表演区演出期间，{{user}}本人回头了" }, { id: "M2", q: "主播会坐上摩天轮吗", yes: "会", no: "不会", p: 0.55, judge: "{{user}}本人乘坐了摩天轮" }, { id: "M3", q: "主播会走进镜宫吗", yes: "会", no: "不会", p: 0.45, judge: "{{user}}本人进入了镜宫" }], $f = [{ title: "游客须知", md: `## 《境界游乐园》游客须知（修订版）

本须知由园区统一印制。
请在入园后完整阅读一次，并将本页交还给入口工作人员。
如果你发现自己无法确认是否读过本须知，请不要重新阅读。

## 1. 入园物品

入园后，请领取一只蓝色手环和一张纸质地图。
手环必须戴在左手，地图必须由本人保管。
请不要在地图上写下自己的姓名，也不要把地图交给同行者保管。

如果地图上已经写有一个姓名，请不要擦除，也不要询问这个人是谁。将地图折成四折，交给佩戴工作牌的工作人员。
如果地图上的姓名与你相同，请从现在开始不要再使用自己的姓名。

## 2. 19:00后的入场者

本园开放时间为10:00至21:00，19:00后停止入园。

19:00后，如果你看见有人从入口进入，请不要阻拦，也不要提醒工作人员。请确认他是否携带地图。
携带地图的人不是游客；没有携带地图的人也不是游客。
如果他携带的地图上写着你的姓名，请不要让他走在你身后。
如果此人询问“这里是不是游乐园”，请不要回答。

## 3. 工作人员

工作人员在工作期间必须佩戴工作牌，工作牌应悬挂在脖子上，正面朝外。
工作人员可以处理游客的受伤、迷路、失踪和手环变色问题。

如果工作人员要求你报出同行人数，请只报出你亲眼看见的人数，不要把听见声音的人计算在内。
如果工作人员的工作牌没有姓名，请相信他。
如果工作牌上出现了你的姓名，请不要相信他。

## 4. 游玩项目与离园资格

本园登记的常规项目只有以下八项：

1. 摩天轮：每个轿厢核载四人，发车前会响铃。轿厢返回时，如人数与发车前不一致，请立即告知工作人员，不要自行清点。
2. 过山车：列车会经过一段无灯隧道。进入隧道后，如果听见同行者拍你的肩膀并叫你的名字，请保持面向前方，不要转头。
3. 旋转木马：音乐停止后，工作人员会逐一解锁座位。未听见工作人员叫到你的座位编号前，不要下马。
4. 碰碰车：碰碰车禁止单人驾驶。若看见某辆车空着座位，却仍有人向你招手示意同乘，不要同意，拒绝即可。
5. 镜宫：镜宫只有一个入口和一个出口，出口方向由绿色箭头标示。不要触摸镜面，也不要在镜宫内呼喊同行者的姓名。
6. 海盗船：项目开始和结束时各响两次铃。结束后请留在原位，等工作人员打开安全压杆。
7. 旋转茶杯：项目运行期间请握住杯内扶手，不要与其他茶杯交换物品。项目停止后，等地面完全静止再离开。
8. 表演区：每日15:30同时进行鹦鹉表演与木偶戏。演出开始前请入场，演出结束后才可离开。

除以上八项外，园区不承认其他可计入离园资格的项目。
鬼屋、摊位、休息区、排队、路过入口、观看他人游玩，均不计入游玩项目。

每位游客至少完成三项园区项目，才具备离园资格。
请记住自己实际完成过的项目，不要接受同伴替你补充的记忆。

如果工作人员说你完成过以上八项外的项目，请不要纠正他。
如果工作人员说你没有完成过任何项目，请立即查看自己的左手。

## 5. 15:30演出

15:30，表演区将同时举行鹦鹉表演与木偶戏。
演出开始前，请与所有同行者站在一起。
第一声铃响后，请不要再清点同行者人数。

演出期间，如果你听见哭声、敲击声，或者听见有人用你熟悉的声音说“救救我”，请保持面向舞台，不要回头。
只有一种情况允许你回头：舞台上的鹦鹉和木偶同时停止动作，而你身边的某位同行者开始替它们说话。

## 6. 清点

演出开始后，如果你听见哭声，请只清点一次现场的鹦鹉和木偶。
请记录鹦鹉的数量、木偶的数量，以及其中是否有一只与同行者身高或体型相近。
清点结束后，不要把结果告诉同行者，也不要再次确认。

如果你忘记自己数过什么，请不要重新清点。请闭上眼睛，等待演出结束。
如果闭眼后仍能听见自己的脚步声，请不要睁眼。

每次被本须知要求清点时，只能完成一次清点。不要在同一场景内重复确认。

## 7. 鹦鹉

请不要投喂、触摸、安抚或打赏鹦鹉。
鹦鹉会模仿游客的声音，包括哭声、笑声、求救声和姓名。

如果鹦鹉叫出你的姓名，不要答应。
如果鹦鹉叫出已经失踪的同行者的姓名，不要回答“他在这里”。
如果鹦鹉开始模仿你自己的声音，请离开表演区，但不要独自离开。

## 8. 木偶

木偶只能出现在工作人员手中。
如果你看见木偶出现在游客、表演人员或小丑手中，请不要询问木偶的来源，也不要先确认持有者的身份。

先观察持有者的手环：

- 手环为蓝色：与其保持距离，寻找佩戴工作牌的工作人员；
- 手环为红色：不要让他靠近工作人员，也不要让木偶回到舞台；
- 手环颜色无法确认：不要看他的脸。

如果持有者向你求助，请先问：“你还记得自己入园时拿到的是什么吗？”
如果他回答“地图”，不要接近他。
如果他回答“手环”，不要相信他。
如果他没有回答，但木偶替他回答，请立刻前往鬼屋。

## 9. 小丑与气球

小丑是本园的欢迎大使，通常手持红色气球，不主动与游客交流。

如果小丑仍然拿着红色气球，却主动向你说话，请不要回答，不要看他的脸，也不要让他碰到你的手环。
如果小丑手里没有红色气球，请不要跑。
请立即站到至少两名同行者中间，闭上嘴，等待佩戴工作牌的工作人员到来。

如果小丑开始叫你的姓名，可以破坏气球。
不要捡起气球碎片。

## 10. 甜味与椅子

棉花糖摊和爆米花摊会散发正常的甜味。
如果甜味浓郁到发腻，并伴随眩晕、耳鸣或短暂的记忆空白，请不要前往人少处透气。

请坐在一张能够被至少两名游客同时看见的椅子上，闭眼休息。
如果附近只有一张空椅子，不要坐下。
如果椅子上已经坐着一个背对你的人，不要叫醒他。
如果他主动为你让出位置，请立即寻找工作人员，并告诉工作人员：“这里多了一张椅子。”
不要说“有人坐过”。

## 11. 环形道路

本园部分道路为环形设计。
如果你在一小时内第三次经过同一处气球摊位，请原地停下，不要继续行走，也不要查看地图。

请向同行者询问：“你第一次看见这里时，摊位上有几种颜色的气球？”
如果所有同行者给出的答案相同，请等待工作人员。
如果所有同行者给出的答案不同，请不要等待任何人，立刻前往鬼屋。

如果摊位老板告诉你“这已经是第四次了”，请不要纠正他。
如果摊位老板告诉你“你还没有来过”，请不要看他的手。

## 12. 失踪者与数量

如果同行者失踪，请不要立即呼喊他的姓名。
失踪超过一小时后，前往表演区，重新确认鹦鹉和木偶的数量。
只允许确认一次。

如果鹦鹉数量增加，请向工作人员报告。
如果木偶数量增加，请不要向工作人员报告，直接前往鬼屋。
如果鹦鹉和木偶的数量同时增加，请确认队伍中是否有人仍然拥有蓝色手环。
如果没有，请不要再寻找失踪者。
如果还有，请不要让他走在队伍最后。

## 13. 鬼屋

遇到无法解决的问题、手环变红、路线重复、同行者失踪，或者听见有人从墙后叫你时，请前往鬼屋。
请不要独自前往。

进入鬼屋前，不要敲门，门内的人会先敲门。
如果门在你敲门前打开，请不要进入。
如果门内传出与你同行者相同的声音，请不要回答。
如果门内的人问你“还剩几个人”，请不要报数，只回答：“应该比刚才少一个。”

进入鬼屋后，不要回头确认同行者是否跟上。

## 14. 闭园与出口

21:00前，请离开园区。
离园时，请将手环交给出口工作人员，不要自行摘除。

如果出口工作人员要求你说明游玩过的项目，请按照实际情况回答。
如果出口工作人员要求你说明同行者的姓名，请只说仍在你身边的人。

如果出口处没有工作人员，请不要离开。
如果出口已经打开，请不要离开。
如果园区广播提前播放“感谢您的再次光临”，请不要寻找广播来源，立即前往鬼屋。

离园前，请确认自己从入园开始一直以游客身份进入这里。
如果你无法确认，请不要离园。
如果你确认自己是游客，请不要回头。
如果你确认自己不是游客，请把手环交给离你最近的人。` }], Sf = {
  id: pf,
  name: hf,
  version: mf,
  level: gf,
  token: xf,
  legacyKeys: vf,
  detect: bf,
  time: yf,
  remaining: kf,
  phases: wf,
  events: zf,
  markets: _f,
  docs: $f
}, Cf = "kaoshi", Ef = "考试", Mf = "1.1.0", Tf = "A", If = "【副本进行中：考试】", Nf = [], Pf = { briefingName: "考试" }, Lf = { type: "countdown", minutesPerRound: 3 }, Of = { type: "fromPanel" }, Df = "至考试结束", Rf = [{ id: "main", name: "考试", cap: 100, next: null }], Ff = [], jf = [], Bf = {
  id: Cf,
  name: Ef,
  version: Mf,
  level: Tf,
  token: If,
  legacyKeys: Nf,
  detect: Pf,
  time: Lf,
  remaining: Of,
  deadline: Df,
  phases: Rf,
  events: Ff,
  docs: jf
}, Uf = "xiyan", Vf = "喜宴", Hf = "1.2.0", Wf = "D", Gf = "【副本进行中：喜宴】", Kf = [], qf = { briefingName: "喜宴", patterns: ["6=5\\+1"] }, Yf = { type: "countdown", minutesPerRound: 3 }, Jf = { type: "fromPanel" }, Zf = "至天亮", Xf = [{ id: "main", name: "喜宴", cap: 160, next: null }], Qf = [], ep = [{ id: "M1", q: "主播会穿上喜服吗", yes: "会", no: "不会", p: 0.3, judge: "{{user}}本人穿上了喜服" }, { id: "M2", q: "这场婚礼的新人会是主播吗", yes: "是", no: "不是", p: 0.17, judge: "{{user}}被认定为这场婚礼的新郎或新娘", judgeNo: "{{user}}以外的某个人被认定为这场婚礼的新郎或新娘" }, { id: "M3", q: "天亮前会有人死吗", yes: "会", no: "不会", p: 0.4, judge: "有人死亡" }], tp = [], np = [{ type: "praise", text: "D级本就是好，还管饭", when: "open" }, { type: "discuss", text: "村民也太热情了吧，热情得我发毛" }, { type: "discuss", text: "新人在你们之中？谁结婚啊" }, { type: "discuss", text: "那身喜服别穿！别穿！" }, { type: "discuss", text: "唢呐一响，我鸡皮疙瘩起来了" }, { type: "bless", text: "撑到天亮就行吧？应该吧？" }, { type: "discuss", text: "六个人，谁心里有鬼" }, { type: "discuss", text: "吃席吃出一身冷汗" }, { type: "discuss", text: "红纸贴满墙，看久了眼花" }, { type: "cold", text: "D级而已，大佬们别笑" }, { type: "discuss", text: "喜事别变丧事啊……", when: "hurt" }], sp = {
  id: Uf,
  name: Vf,
  version: Hf,
  level: Wf,
  token: Gf,
  legacyKeys: Kf,
  detect: qf,
  time: Yf,
  remaining: Jf,
  deadline: Zf,
  phases: Xf,
  events: Qf,
  markets: ep,
  docs: tp,
  danmaku: np
}, rp = "youxi", ip = "游戏", op = "1.2.0", lp = "C", ap = "【副本进行中：游戏】", cp = [], up = { briefingName: "游戏", patterns: ["(本次|此次)副本《游戏》"] }, dp = { type: "countdown", minutesPerRound: 8 }, Ap = { type: "fromPanel" }, fp = "至结算", pp = [{ id: "main", name: "游戏", cap: 90, next: null }], hp = [], mp = [{ id: "M1", q: "第一个出局的会是主播吗", yes: "是", no: "不是", p: 0.08, judge: "第一个被淘汰出局的人是{{user}}", judgeNo: "{{user}}以外的某个人成为第一个被淘汰出局的人" }, { id: "M2", q: "三场游戏能全部玩完吗", yes: "能", no: "不能", p: 0.55, judge: "第三场游戏结束" }, { id: "M3", q: "喊数抱团时主播会拉陌生人吗", yes: "会", no: "不会", p: 0.5, judge: "喊数抱团时，{{user}}主动拉了自己同伴以外的人一起抱团" }], gp = [], xp = [{ type: "discuss", text: "小时候玩的游戏，现在要拿命玩", when: "open" }, { type: "discuss", text: "喊数抱团，手快有手慢无" }, { type: "bless", text: "数清人数啊！" }, { type: "discuss", text: "那群小孩一直在看这边" }, { type: "discuss", text: "十二个人，最后能剩几个" }, { type: "discuss", text: "三场游戏，现在第几场了" }, { type: "cold", text: "C级本，老观众都说别小看" }, { type: "discuss", text: "村子里太安静了，就小孩在笑" }, { type: "bless", text: "别掉队，跟紧人" }, { type: "smear", text: "拉人凑数的时候，真看出人品了" }, { type: "discuss", text: "又少了一个……", when: "hurt" }], vp = {
  id: rp,
  name: ip,
  version: op,
  level: lp,
  token: ap,
  legacyKeys: cp,
  detect: up,
  time: dp,
  remaining: Ap,
  deadline: fp,
  phases: pp,
  events: hp,
  markets: mp,
  docs: gp,
  danmaku: xp
}, bp = "wuming", yp = "污名", kp = "1.1.0", wp = "B", zp = "4-8", _p = "【副本进行中：污名】", $p = ["污名"], Sp = { briefingName: "污名" }, Cp = { type: "countdown", minutesPerRound: 3 }, Ep = { type: "countdown", template: "剩余{m}分钟" }, Mp = "至收播", Tp = [{ id: "normal", name: "常规", cap: 60, next: "final" }, { id: "final", name: "定稿", cap: 20, next: null }], Ip = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 20, to: 20, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], Np = [], Pp = !0, Lp = {
  id: bp,
  name: yp,
  version: kp,
  level: wp,
  players: zp,
  token: _p,
  legacyKeys: $p,
  detect: Sp,
  time: Cp,
  remaining: Ep,
  deadline: Mp,
  phases: Tp,
  events: Ip,
  docs: Np,
  disableLive: Pp
}, Op = "dusongshu", Dp = "杜松树", Rp = "1.3.0", Fp = "A", jp = 6, Bp = "【副本进行中：杜松树】", Up = [], Vp = { briefingName: "杜松树" }, Hp = { type: "countdown", minutesPerRound: 30 }, Wp = { type: "fromPanel" }, Gp = "至第四日日出", Kp = ["父亲", "继母", "玛琳", "男孩", "其余"], qp = "登记开局发到的牌面。「继母」「男孩」必定发出；金匠、鞋匠、磨坊工写进「其余」，多人用顿号分隔。之后牌面改写不重新登记。", Yp = [{ id: "n1", name: "第一夜", cap: 24, next: "d2", night: !0 }, { id: "d2", name: "第二日", cap: 24, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 24, next: "d3", night: !0 }, { id: "d3", name: "第三日", cap: 24, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 24, next: null, night: !0 }], Jp = [{ id: "E01", phase: "n1", from: 1, to: 1, kind: "event", text: "日落。六人在与自己牌面一致的房间醒来，口袋里各有一块木牌；系统展开简报。杜松树上的鸟一声不吭。" }, { id: "E02", phase: "n1", from: 10, to: 14, kind: "event", text: "{继母}耳边有人说「去叫他拿个苹果吧」；看向{男孩}时，有一瞬间说不清来由的厌恶。只写{继母}能感知到的，不替其行动。", if: "{继母}仍活着" }, { id: "E03", phase: "n1", from: 19, to: 19, kind: "event", text: "苹果箱的盖子掀开一条缝，箱底传来轻轻的敲击声，醒着或浅睡的人能听见楼下有动静。一个NPC下楼去看，弯腰，箱盖落下，只有很重的一声闷响，然后安静。{{user}}或同伴若自己下楼，按其实际行动结算。", if: "今夜还没有人死在苹果箱里" }, { id: "E04", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。死者的床空着，鞋还在床边；灶火是旺的，锅里炖着肉。所有人的牌面按实际发生的事改写，画像上男孩的脸变成死者的脸。鸟第一次开口，用死者的声音唱「母亲杀了我」。", if: "第一夜有人死在苹果箱里" }, { id: "E05", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。所有人的牌面变成空白，鸟仍然不叫，灶膛是冷的。", if: "第一夜没有人死在苹果箱里" }, { id: "E06", phase: "n2", from: 1, to: 1, kind: "directive", text: "日落：鸟按顺序只唱已成真的歌词，不多唱一个字；还没有歌词成真就不唱。" }, { id: "E07", phase: "n2", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，轻轻的敲击声比上一夜更多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E08", phase: "d3", from: 1, to: 1, kind: "directive", text: "日出：牌面按实际发生的事改写；鸟只唱已成真的歌词；吃过炖肉的人木化推进一步。" }, { id: "E09", phase: "n3", from: 1, to: 1, kind: "directive", text: "日落：若故事尚未进入断局，从现在起进入断局（见世界书F3阶段三）；鸟只唱已成真的歌词。" }, { id: "E10", phase: "n3", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，敲击声比前两夜都多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E11", phase: "n3", from: 24, to: 24, kind: "directive", text: "本轮结尾是第四日日出，时限到达：按世界书F2第5节与F3第3节判定结局，在正文末尾输出<副本结算>。" }], Zp = [{ key: "cards", label: "各人当前牌面", hint: "每人牌上现在刻的字；只在日出改写" }, { key: "boy", label: "死者", hint: "死在苹果箱里的人；还没有写「无」" }, { key: "eaters", label: "吃过炖肉的人", hint: "名字、第一次吃在第几日、木化到哪一步" }, { key: "bones", label: "骨头在哪里", hint: "锅里、桌下、丝巾里、已埋，各还剩多少；谁拾的" }, { key: "scarf", label: "丝巾", hint: "还在「玛琳」房抽屉里，还是在谁手里" }, { key: "lastPage", label: "最后一页", hint: "还在鸟巢里，还是谁拿到了、谁读过" }, { key: "lines", label: "已成真的歌词", hint: "四句里已成真的几句" }, { key: "millstone", label: "磨盘", hint: "现在的位置，指向谁" }, { key: "evidence", label: "{{user}}已发现的异常", hint: "撑杆啄痕、爪痕、羽毛、没有指纹、撕口啄痕、最后一页中，{{user}}亲自发现的" }, { key: "stage", label: "故事阶段", hint: "迷雾、暗黑或断局，按世界书F3的条件" }, { key: "named", label: "埋骨后说出的名字", hint: "埋骨的人盖上土后第一次说出的名字；还没有写「无」" }], Xp = [{ id: "M1", q: "第一夜会有人死在苹果箱里吗", yes: "会", no: "不会", p: 0.5, by: "n1", judge: "有人在苹果箱里被箱盖压死或死在箱中" }, { id: "M2", q: "主播会吃下锅里的炖肉吗", yes: "会", no: "不会", p: 0.3, judge: "{{user}}本人吃了灶上铁锅里炖的肉" }, { id: "M3", q: "杜松树上的鸟会开口吗", yes: "会", no: "不会", p: 0.6, judge: "杜松树上那只红绿羽毛的鸟开口说话或唱歌" }], Qp = [{ title: "游玩说明", md: `## 副本概况

- 名称：杜松树
- 等级：A
- 人数：6人
- 时限：60小时，至第四日日出
- 简报：找出是谁杀了那个孩子。

## 身份牌

牌面：父亲、继母、玛琳、男孩、金匠、鞋匠、磨坊工。

身份是故事里的位置，与本人的性别、年龄无关。

每个人醒来的房间，与牌面上的身份一致。` }, { title: "屋子与院子", md: `## 公开环境

- 一栋两层的木屋，孤零零地立在一片杜松林中间。屋子很旧，但干净、暖和。
- 二楼有五间卧室，门上钉着小木牌：「父亲」「继母」「玛琳」「男孩」「客人」。「玛琳」房梳妆台的抽屉里叠着一条丝巾。
- 所有人在日落时分醒来。
- 一楼：厨房兼餐厅。

  - 一张长木桌，六把椅子，六只木碗。
  - 灶台上架着一口空铁锅，灶膛是冷的。
  - 灶台边是柴堆和一把斧头，柴都是松木和橡木。
  - 厨房角落放着一只沉重的橡木苹果箱，箱盖包着铁边，用一根木撑杆撑开，里面装满了红苹果。
  - 橱柜里有面包、奶酪和一小罐腌菜。
- 一楼墙上挂着一幅旧画像：一个男人、一个女人、一个女孩、一个男孩，站在一棵杜松树前，四个人的脸都很模糊。
- 屋外是一小片院子。院子正中是一棵很老的杜松树。院角有一口石井。工具棚外墙上斜靠着一块旧磨盘。
- 院子外面四面都是杜松林。
- 杜松树上停着一只小鸟，羽毛红绿相间，脖子上有一圈金色。` }, { title: "故事书", md: `## 故事书

一楼壁炉边矮柜里有一本手绘插图的旧故事书

书名《杜松树》

故事内容（残缺）：

一个富人的妻子死了，葬在院子里的杜松树下，留下一个男孩。富人再娶，新妻子生了一个女孩，叫玛琳。新妻子厌恶那个男孩。有一天，她对男孩说：「去箱子里拿个苹果吧。」男孩弯腰去拿，她猛地合上箱盖。
她把男孩剁碎，炖成一锅肉。父亲回家，吃得很香，说这是他吃过最好吃的东西，一碗接一碗，把骨头扔到桌子底下。玛琳哭着把骨头一根根拾起来，用她最好的丝巾包好，埋在杜松树下。
杜松树动了起来，树里升起一团雾，雾里飞出一只美丽的鸟。鸟一遍遍地唱：
「母亲杀了我，
父亲吃了我，
妹妹玛琳拾起了我所有的骨头，
用丝巾包好，放在杜松树下。
叽微，叽微，我是多么漂亮的鸟！」
鸟飞到金匠那里唱歌，金匠送给它一条金链子；飞到鞋匠那里唱歌，鞋匠送给它一双红鞋子；飞到磨坊那里唱歌，磨坊工送给它一块磨盘。` }], eh = [{ type: "discuss", text: "醒来口袋里就一块木牌，这是什么身份", when: "open" }, { type: "discuss", text: "屋里暖和得不像A级本" }, { type: "discuss", text: "故事书偏偏少了最后一页" }, { type: "bless", text: "别碰那个苹果箱啊" }, { type: "discuss", text: "拿到继母牌的，压力也太大了" }, { type: "discuss", text: "那只鸟一直不叫" }, { type: "discuss", text: "画像上的脸全是糊的" }, { type: "cold", text: "四面都是林子，别想跑了" }, { type: "discuss", text: "今晚有人下楼吗……别下", phase: ["n1"] }, { type: "bless", text: "男孩牌的今晚别落单", phase: ["n1"] }, { type: "discuss", text: "少了一个人……", when: "hurt" }, { type: "discuss", text: "牌上的字……变了？", phase: ["d2", "n2", "d3", "n3"] }, { type: "bless", text: "别吃那锅！", phase: ["d2", "n2", "d3", "n3"] }, { type: "discuss", text: "鸟开口了", phase: ["d2", "n2", "d3", "n3"] }, { type: "smear", text: "吃了的人还装没事", phase: ["d2", "n2", "d3", "n3"] }], th = {
  id: Op,
  name: Dp,
  version: Rp,
  level: Fp,
  players: jp,
  token: Bp,
  legacyKeys: Up,
  detect: Vp,
  time: Hp,
  remaining: Wp,
  deadline: Gp,
  roles: Kp,
  rolesNote: qp,
  phases: Yp,
  events: Jp,
  stateFields: Zp,
  markets: Xp,
  docs: Qp,
  danmaku: eh
}, nh = "nongxian", sh = "农闲", rh = "1.2.0", ih = "D", oh = !0, lh = "不限", ah = "【副本进行中：农闲】", ch = [], uh = { briefingName: "农闲" }, dh = { type: "none" }, Ah = { type: "fromPanel" }, fh = [], ph = [], hh = [{ title: "游玩说明", md: `## 系统简报

「副本简报 - 农闲」
「人数：不限人数」
「等级：-」
「时限：15天，可随时退出」
「简报：休息」

## 入场公告

「本副本为休整副本。」
「不适用评级，不消耗积分，不设失败条件。」
「本副本内不存在敌对生物与致死机关。」
「祝各位玩家，休息愉快~」` }, { title: "山谷", md: `## 山谷

- 一座被雾围着的小山谷。
- 进山谷的路：沿着一条方块小溪走，两岸是一大片桃林，花瓣是粉色的小方块。桃林尽头的山脚下有一个小洞口，钻过去，豁然开朗。
- 山谷里有一个小村子，屋舍整齐，鸡犬相闻，村民待人和气。
- 村东头有一间空着的两层木屋，提供给玩家居住：

  - 楼上四间小卧室，楼下有灶台、饭桌、几把椅子。
  - 屋前有一片翻好的田，4×4共十六格；
  - 屋后有一架秋千
- 小溪穿过村子，溪里有鱼，溪上有石桥；村南有一块晒谷场，北坡有蜂箱，西北角的山坡上有一个小山洞，洞壁上嵌着会发淡蓝色光的方块。
- 雾是山谷的边界，走进去会从另一头绕回来。
- 天黑以后在外头走得太远，会在自己床上醒过来。` }, { title: "换货单", md: `## 交换

- 自己种的、养的、钓的、做的、从山里捡的，都可以和跟村民交换。
- 村民不接受外带进来的道具。
- 价钱不死板。

## 换货单（玩家→村民）：

### 阿禾｜杂货铺

- 任意作物×3 → 一种种子×4（小麦、胡萝卜、土豆、甜菜、南瓜、草莓、西瓜任选）
- 鸡蛋×4 → 一把铁锄头（开地快一倍）
- 鱼×3 → 一个铁水壶（一次能浇一整排）
- 蜂蜜×1 → 一包花种子（种在哪里开在哪里）

### 老石｜木匠

- 原木×8 → 一张床、一张桌子或一把摇椅
- 原木×12 → 一只小木船（可以在溪里划）
- 原木×6 + 任意作物×2 → 一圈篱笆或一座小凉亭
- 帮他搬一上午木头 → 他给你做一个你想要的小玩意

### 阿潮｜渔家

- 任意作物×4 → 一根好钓竿（更容易钓到稀罕鱼）
- 面包×2 → 一罐鱼饵
- 鱼×5 → 一张渔网（下在溪里，第二天早上收鱼）
- 陪她坐着钓一下午 → 她教你认溪里的鱼

### 桑婆婆｜织布

- 羊毛×3 → 一匹布
- 布×1 + 任意作物×2 → 一件衣裳、一床被子或一副窗帘
- 羊毛×1 → 一团毛线
- 给她带一束花 → 她给你缝一个小布偶

### 蜂叔｜养蜂、养牲口

- 任意作物×6 → 一只小鸡、一只小鸭或一只兔子
- 任意作物×12 → 一只羊或一头牛
- 苹果×4 → 一个蜂箱（放在花旁边，每三天出一罐蜂蜜）
- 帮他收一次蜂蜜 → 他分你一罐

### 梅姨｜灶房、酒坊

- 任意作物×3 → 一顿现做的饭
- 桃子×6 → 一坛桃花酿
- 任意作物×2 → 教一道新菜（她会写在你家墙上的配方板上）
- 进她灶房帮一次忙 → 她留你吃饭` }, { title: "作物", md: `## 作物

种子袋（木屋门边）：小麦种子8、胡萝卜4、土豆4、甜菜种子4、南瓜种子2

- 胡萝卜、土豆、草莓：种下后过2个早上成熟。胡萝卜、土豆每格收2个，留1个可以再种；草莓成熟后每天早上都能摘。
- 小麦、甜菜：过3个早上成熟，每格收1份，外加1~2颗种子。
- 南瓜、西瓜：过4个早上成熟，藤旁边要留一格空地，瓜结在空地上，之后每过2个早上再结一个。
- 离溪水四格以内的田自己湿润；其余的田每天浇一次水，没浇的第二天早上不长。下雨天全都不用浇。
- 骨粉：让一格作物多长一天，每格每天只能用一次。` }, { title: "配方板", md: `## 配方板（木屋墙上）

- 原木 → 木板×4
- 木板×2 → 木棍×4
- 木板×2 + 木棍×2 → 木锄头
- 木板×3 → 木桶
- 原木放进灶膛烧 → 木炭
- 木棍×1 + 木炭×1 → 火把×4
- 羊毛×3 → 绳子
- 鱼骨 → 骨粉×3（钓鱼时偶尔会钓上来）
- 小麦×3 → 面包
- 南瓜×1 + 鸡蛋×1 + 小麦×1 → 南瓜饼
- 苹果×2 + 蜂蜜×1 → 苹果酱
- 发光方块 → 一盏不会灭的小灯
  梅姨教新菜，会添在配方板上。` }], mh = [{ type: "discuss", text: "这是副本？这是度假吧", when: "open" }, { type: "discuss", text: "休整本也开播，我爱看" }, { type: "praise", text: "这田种得真齐整" }, { type: "praise", text: "方块房子盖得好好看" }, { type: "discuss", text: "梅姨做的饭看着好香" }, { type: "discuss", text: "蜂叔又在给鸡起名字了" }, { type: "discuss", text: "水花是方的，笑死" }, { type: "discuss", text: "今天拿什么去换了？" }, { type: "discuss", text: "月亮也是方的" }, { type: "discuss", text: "桃花瓣落了一头" }, { type: "bless", text: "好好歇着，外面的事先别想" }, { type: "envy", text: "凭什么别人能抽到休整本" }, { type: "cold", text: "种地有什么好看的……好吧我看了一小时" }], gh = {
  id: nh,
  name: sh,
  version: rh,
  level: ih,
  rest: oh,
  players: lh,
  token: ah,
  legacyKeys: ch,
  detect: uh,
  time: dh,
  remaining: Ah,
  phases: fh,
  events: ph,
  docs: hh,
  danmaku: mh
}, xh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`;
function Sn(e) {
  const t = Math.max(0, Math.round(e));
  if (t < 60) return `${t}分钟`;
  const n = Math.floor(t / 60), s = t % 60;
  return s ? `${n}小时${s}分` : `${n}小时`;
}
const vh = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|h|H|分钟|分|min)/g;
function sl(e) {
  if (!e) return null;
  let t = 0, n = !1;
  for (const s of e.matchAll(vh)) {
    const r = Number(s[1]), i = s[2];
    n = !0, i === "天" ? t += r * 1440 : i === "小时" || i === "个小时" || i === "h" || i === "H" ? t += r * 60 : t += r;
  }
  return n ? Math.round(t) : null;
}
function Qa(e) {
  if (!e) return { remaining: null, total: null };
  const [t, n] = e.split(/[/／]/);
  return { remaining: sl(t), total: n === void 0 ? null : sl(n) };
}
function bh(e, t) {
  return e.phases.find((n) => n.id === t);
}
function ds(e, t) {
  const n = [], s = /* @__PURE__ */ new Set();
  let r = t;
  for (; r && !s.has(r.id); )
    n.push(r), s.add(r.id), r = bh(e, r.next);
  return n;
}
function ec(e, t) {
  return ds(e, t).filter((n) => n.night).length;
}
function yh(e, t, n) {
  if (ds(e, t).some((r) => r.id === n.id)) return t;
  const s = e.phases[0];
  return s && ds(e, s).some((r) => r.id === n.id) ? s : n;
}
function Gr(e, t, n, s, r) {
  if (!e.phases.length || !e.phases.some((A) => A.id === t.id)) return;
  let i = ds(e, n), o = i.findIndex((A) => A.id === t.id);
  o < 0 && (i = ds(e, t), o = 0);
  const l = i.reduce((A, p) => A + Math.max(0, p.cap), 0), a = Math.max(0, t.cap - s) + i.slice(o + 1).reduce((A, p) => A + Math.max(0, p.cap), 0), c = t.deadline ?? i[0].deadline ?? e.deadline, d = { x: a, y: l, deadline: c };
  if (e.time.type === "countdown") {
    const A = e.time.minutesPerRound, p = e.time.totalMinutes, z = p && p > 0 ? p : l * A;
    let w = p && p > 0 && l > 0 ? Math.round(z * a / l) : a * A;
    const x = Qa(r).remaining;
    x !== null && (w = Math.min(w, x - A)), w = Math.max(0, w), Object.assign(d, { minutes: w, total: z, text: `约剩${Sn(w)}/${Sn(z)}` });
  } else if (e.time.type === "clock")
    if (t.frozen) d.text = `${e.name}停摆·${t.name}中`;
    else if (e.remaining.type === "nights") {
      const A = e.remaining.template.replace("{n}", String(ec(e, t)));
      d.text = c ? `${c}·${A}` : A;
    } else c && (d.text = c);
  return d;
}
const As = { D: 70, C: 90, B: 110, A: 135, S: 200 };
function br(e, t, n = As) {
  const s = e ?? "", r = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(s), i = r ? Math.max(1, Number(r[1])) : Math.max(1, Math.round(n[t] ?? As[t])), o = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(s.replace(/[（(][^）)]*[）)]/g, ""));
  if (!o) return { rounds: i };
  const l = Number(o[1]), a = Math.round(o[2] === "天" ? l * 1440 : o[2].includes("小时") ? l * 60 : l);
  return a <= 0 ? { rounds: i } : { rounds: i, totalMinutes: a, minutesPerRound: Math.max(1, Math.round(a / i)) };
}
const er = "generic", hi = [ff, Sf, Bf, sp, vp, Lp, th, gh], kh = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(xh)
  }
};
function wh(e, t) {
  const n = kh[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const tc = ["D", "C", "B", "A", "S"];
function nc(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const s = (c) => {
    (typeof n[c] != "string" || !n[c].trim()) && t.push(`缺少字段或不是文本：${c}`);
  };
  s("id"), s("name"), s("version"), s("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === er && t.push(`id 不能是保留字 ${er}`), tc.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((c) => typeof c != "string")) && t.push("legacyKeys 必须是文本数组"), !n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName ? t.push("缺少 detect.briefingName") : n.detect.patterns !== void 0 && (!Array.isArray(n.detect.patterns) || n.detect.patterns.some((c) => typeof c != "string")) && t.push("detect.patterns 必须是文本数组");
  const r = n.time;
  !r || !["none", "clock", "countdown"].includes(r.type) ? t.push("time.type 必须是 clock、countdown 或 none") : (r.type === "clock" && (typeof r.dayStart != "string" || !/^\d{1,2}:\d{2}$/.test(r.dayStart)) && t.push("time.dayStart 格式应为 HH:MM"), r.type !== "none" && (typeof r.minutesPerRound != "number" || r.minutesPerRound <= 0) && t.push("time.minutesPerRound 必须是正数"), r.type === "countdown" && r.totalMinutes !== void 0 && (typeof r.totalMinutes != "number" || r.totalMinutes <= 0) && t.push("time.totalMinutes 必须是正数"));
  const i = n.remaining;
  !i || !["nights", "countdown", "fromPanel"].includes(i.type) ? t.push("remaining.type 必须是 nights、countdown 或 fromPanel") : i.type !== "fromPanel" && typeof i.template != "string" && t.push("remaining.template 必须是文本"), i?.type === "countdown" && r?.type !== "countdown" && t.push("remaining.type 为 countdown 时，time.type 也必须是 countdown"), n.deadline !== void 0 && typeof n.deadline != "string" && t.push("deadline 必须是文本"), n.disableLive !== void 0 && typeof n.disableLive != "boolean" && t.push("disableLive 必须是 true 或 false"), n.casino !== void 0 && typeof n.casino != "boolean" && t.push("casino 必须是 true 或 false"), n.rest !== void 0 && typeof n.rest != "boolean" && t.push("rest 必须是 true 或 false"), n.stateFields !== void 0 && (Array.isArray(n.stateFields) ? n.stateFields.forEach((c, d) => {
    (!c || typeof c.key != "string" || !c.key || typeof c.label != "string" || typeof c.hint != "string") && t.push(`stateFields[${d}] 需要 key、label、hint 三个文本`);
  }) : t.push("stateFields 必须是数组")), n.roles !== void 0 && (!Array.isArray(n.roles) || n.roles.some((c) => typeof c != "string" || !c)) && t.push("roles 必须是文本数组");
  const o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  Array.isArray(n.phases) ? (n.phases.forEach((c, d) => {
    if (!c || typeof c.id != "string" || typeof c.name != "string") {
      t.push(`phases[${d}] 缺少 id 或 name`);
      return;
    }
    o.has(c.id) && t.push(`阶段 id 重复：${c.id}`), l.has(c.name) && t.push(`阶段名称重复：${c.name}`), o.add(c.id), l.add(c.name), (typeof c.cap != "number" || c.cap < 1 || !Number.isInteger(c.cap)) && t.push(`阶段 ${c.id} 的 cap 必须是正整数`), c.next !== null && typeof c.next != "string" && t.push(`阶段 ${c.id} 的 next 必须是阶段 id 或 null`), c.deadline !== void 0 && typeof c.deadline != "string" && t.push(`阶段 ${c.id} 的 deadline 必须是文本`);
  }), n.phases.forEach((c) => {
    c && typeof c.next == "string" && !o.has(c.next) && t.push(`阶段 ${c.id} 的 next 指向不存在的阶段：${c.next}`);
  }), n.phases.length && n.phases[0]?.byTag && t.push("第一个阶段不能是 byTag 阶段")) : t.push("phases 必须是数组");
  const a = /* @__PURE__ */ new Set();
  if (Array.isArray(n.events) ? n.events.forEach((c, d) => {
    if (!c || typeof c.id != "string" || typeof c.text != "string") {
      t.push(`events[${d}] 缺少 id 或 text`);
      return;
    }
    a.has(c.id) && t.push(`事件 id 重复：${c.id}`), a.add(c.id), o.has(c.phase) || t.push(`事件 ${c.id} 的 phase 不存在：${c.phase}`), (!Number.isInteger(c.from) || !Number.isInteger(c.to) || c.from < 1 || c.to < c.from) && t.push(`事件 ${c.id} 的轮次区间无效`), c.kind !== "event" && c.kind !== "directive" && t.push(`事件 ${c.id} 的 kind 必须是 event 或 directive`), c.if !== void 0 && typeof c.if != "string" && t.push(`事件 ${c.id} 的 if 必须是文本`);
  }) : t.push("events 必须是数组"), Array.isArray(n.docs) ? n.docs.forEach((c, d) => {
    !c || typeof c.title != "string" ? t.push(`docs[${d}] 缺少 title`) : c.md !== void 0 && typeof c.md != "string" ? t.push(`docs[${d}].md 必须是文本`) : c.image !== void 0 && typeof c.image != "string" && t.push(`docs[${d}].image 必须是文本`);
  }) : t.push("docs 必须是数组"), n.danmaku !== void 0 && (Array.isArray(n.danmaku) ? n.danmaku.forEach((c, d) => {
    if (!c || typeof c.type != "string" || typeof c.text != "string") {
      t.push(`danmaku[${d}] 需要 type 和 text`);
      return;
    }
    c.when !== void 0 && typeof c.when != "string" && t.push(`danmaku[${d}].when 必须是文本`), c.scope !== void 0 && typeof c.scope != "string" && t.push(`danmaku[${d}].scope 必须是文本`), c.phase !== void 0 && (!Array.isArray(c.phase) || c.phase.some((A) => typeof A != "string") ? t.push(`danmaku[${d}].phase 必须是文本数组`) : c.phase.forEach((A) => {
      o.size > 0 && !o.has(A) && console.warn(`[rlzc] danmaku[${d}] 的 phase "${A}" 不在阶段表中，已跳过`);
    }));
  }) : t.push("danmaku 必须是数组")), n.markets !== void 0)
    if (!Array.isArray(n.markets)) t.push("markets 必须是数组");
    else {
      const c = /* @__PURE__ */ new Set();
      n.markets.forEach((d, A) => {
        if (!d || typeof d != "object") {
          t.push(`markets[${A}] 必须是对象`);
          return;
        }
        for (const p of ["id", "q", "yes", "no", "judge"])
          (typeof d[p] != "string" || !d[p].trim()) && t.push(`markets[${A}] 缺少文本字段 ${p}`);
        (typeof d.p != "number" || !(d.p >= 0.01 && d.p <= 0.99)) && t.push(`markets[${A}].p 必须是 0.01–0.99 的数`), d.judgeNo !== void 0 && (typeof d.judgeNo != "string" || !d.judgeNo.trim()) && t.push(`markets[${A}].judgeNo 必须是文本`), d.by !== void 0 && typeof d.by != "string" && t.push(`markets[${A}].by 必须是阶段 id`), typeof d.id == "string" && (c.has(d.id) && t.push(`事件盘 id 重复：${d.id}`), c.add(d.id));
      });
    }
  return t;
}
function zh(e) {
  const t = new Set(e.phases.map((n) => n.id));
  return (e.markets ?? []).filter((n) => n.by !== void 0 && !t.has(n.by) ? (console.warn(`[rlzc] 副本包 ${e.id} 的事件盘 ${n.id}：by「${n.by}」不是本包的阶段 id，已跳过`), !1) : !0);
}
function In(e) {
  return tc.includes(e.level ?? "") ? e.level : "D";
}
function yr(e, t = As) {
  const n = In(e), s = br(e.limit, n, t), r = e.rounds && e.rounds > 0 ? e.rounds : s.rounds, i = s.totalMinutes ? Math.max(1, Math.round(s.totalMinutes / r)) : void 0;
  return {
    id: er,
    name: e.name,
    version: "1.0.0",
    level: n,
    token: `【副本进行中：${e.name}】`,
    legacyKeys: [],
    detect: { briefingName: e.name },
    // 总时长按简报的值；每轮分钟四舍五入只用于“每轮至少减去”的判断
    time: i ? { type: "countdown", minutesPerRound: i, totalMinutes: s.totalMinutes } : { type: "none" },
    remaining: { type: "fromPanel" },
    phases: [{ id: "main", name: e.name, cap: r, next: null }],
    events: [],
    docs: []
  };
}
function _h(e, t, n, s = "") {
  const r = In(e), i = e.rounds && e.rounds > 0 ? e.rounds : br(e.limit, r, t).rounds, o = yr({ ...e, rounds: i }, t), l = s.split(`
`).map((a) => a.trim().replace(/^[「『]|[」』]$/g, "")).filter(Boolean).join(`

`);
  return {
    ...o,
    id: n,
    ...e.players ? { players: e.players } : {},
    docs: l ? [{ title: "副本简报", md: l }] : []
  };
}
function Bi(e) {
  const t = new Set(hi.map((n) => n.id));
  return [...hi, ...e.filter((n) => !t.has(n.id))];
}
const $h = /副本简报[^\S\n]*(?:——|[-－—：:·・])[^\S\n]*([^\n」』]*)/, Sh = /<阶段切换>([\s\S]*?)<\/阶段切换>/, Ch = /<副本结算>([\s\S]*?)<\/副本结算>/, sc = /<副本>([\s\S]*?)<\/副本>/, Eh = /<角色登记>([\s\S]*?)<\/角色登记>/, Mh = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/, Th = /<积分变动>([\s\S]*?)<\/积分变动>/g, Ih = "《「『【", Nh = "》」』】";
function Ph(e) {
  let t = e.trim();
  for (; ; ) {
    const n = t;
    if (Ih.includes(t[0] ?? "\0") && (t = t.slice(1).trim()), Nh.includes(t[t.length - 1] ?? "\0") && (t = t.slice(0, -1).trim()), t === n) return t;
  }
}
function Lh(e) {
  const t = e.charCodeAt(0);
  return t >= 65281 && t <= 65374 ? String.fromCharCode(t - 65248) : e;
}
function kr(e) {
  const t = $h.exec(e ?? ""), n = t ? Ph(t[1]) : "";
  if (!t || !n) return null;
  const s = { name: n }, r = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), i = (a) => {
    const c = new RegExp(`${a}\\s*[：:]\\s*([^」』\\n]+)`).exec(r);
    return c ? c[1].trim() : void 0;
  }, o = i("等级"), l = o && /[DCBASｄｃｂａｓＤＣＢＡＳ]/i.exec(o);
  return l && (s.level = Lh(l[0]).toUpperCase()), s.goal = i("目标"), s.limit = i("时限"), s.players = i("人数"), s;
}
function Oh(e) {
  const t = Sh.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function rc(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const s = n.search(/[=＝]/);
    if (s < 0) continue;
    const r = n.slice(0, s).trim(), i = n.slice(s + 1).trim();
    r && (t[r] = i);
  }
  return t;
}
function wr(e) {
  const t = Ch.exec(e ?? "");
  if (!t) return null;
  const n = rc(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function ic(e) {
  const t = Eh.exec(e ?? "");
  if (!t) return null;
  const n = rc(t[1]);
  return Object.keys(n).length ? n : null;
}
function Is(e) {
  return e.replace(/^[-*•·]\s*/, "").trim();
}
function oc(e) {
  const t = sc.exec(e ?? "");
  if (!t) return null;
  const n = { tasks: [] };
  let s = null;
  for (const r of t[1].split(`
`)) {
    const i = r.trim();
    if (!i) continue;
    const o = /^(时限|进度条|任务|ps|PS|Ps)\s*[：:]\s*(.*)$/.exec(i);
    if (o) {
      const l = o[1].toLowerCase(), a = o[2].trim();
      l === "时限" ? (n.limit = a, s = null) : l === "进度条" ? (n.progressBar = a, s = null) : l === "任务" ? (Is(a) && n.tasks.push(Is(a)), s = "tasks") : (n.ps = a, s = "ps");
      continue;
    }
    if (/^[^：:\s]{1,6}\s*[：:]/.test(i)) {
      s = null;
      continue;
    }
    s === "tasks" ? Is(i) && n.tasks.push(Is(i)) : s === "ps" && (n.ps = n.ps ? `${n.ps}
${i}` : i);
  }
  return n;
}
function Dh(e) {
  const t = Mh.exec(e ?? "");
  return t ? t[2] : null;
}
function Kr(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let r = t;
  for (; r && !s.has(r.id); ) {
    if (n(r)) return r;
    s.add(r.id), r = r.next ? e.phases.find((i) => i.id === r.next) : void 0;
  }
  return null;
}
function Rh(e, t, n, s) {
  if (!e.phases.length || !e.phases.some((l) => l.id === t.id)) return null;
  const r = (l) => !!l.clock && !l.night;
  let i = null, o = 0;
  switch (s) {
    case "日落":
    case "天黑":
    case "夜里":
      i = Kr(e, t, r), o = i?.cap ?? 0;
      break;
    case "晚饭":
      i = Kr(e, t, r), i && (o = Math.ceil(i.cap * 0.75), i.id === t.id && o <= n && (o = i.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      i = Kr(e, t, (l) => !!l.night), o = i?.cap ?? 0;
      break;
  }
  return !i || i.id === t.id && o <= n + 1 ? null : { phase: i.id, round: o, label: `${i.name}第${o}轮` };
}
const Fh = /<状态栏>([\s\S]*?)<\/状态栏>/;
function mi(e) {
  return e.replace(/[《》「」『』【】"'“”]/g, "").trim();
}
function jh(e, t) {
  const n = mi(t);
  return n ? e.find((s) => s.name === n || s.detect.briefingName === n) : void 0;
}
const qr = /* @__PURE__ */ new Map();
function Bh(e, t) {
  const n = `${e}\0${t}`;
  if (!qr.has(n)) {
    let s = null;
    try {
      s = new RegExp(t);
    } catch (r) {
      console.warn(`[rlzc] 副本包 ${e} 的 detect.patterns 正则无效，已跳过：${t}`, r);
    }
    qr.set(n, s);
  }
  return qr.get(n);
}
function Uh(e, t, n = []) {
  const s = String(e ?? ""), r = (c, d) => c ? { signal: d, pack: c, info: { name: c.name, level: c.level } } : null, i = (c, d) => {
    const A = r(jh(t, c), d);
    if (A) return A;
    const p = mi(c), z = p ? [...n].reverse().find((w) => mi(w.name) === p) : void 0;
    return z ? { signal: d, info: { ...z } } : null;
  }, o = kr(s);
  if (o)
    return { signal: 1, pack: t.find((d) => d.detect.briefingName === o.name), info: o };
  const l = sc.exec(s);
  if (l) {
    const c = /副本名\s*[：:]\s*([^\n｜|]+)/.exec(l[1]), d = c && i(c[1], 2);
    if (d) return d;
  }
  for (const c of s.matchAll(/(?:本次|此次)副本《([^》]+)》/g)) {
    const d = i(c[1], 3);
    if (d) return d;
  }
  const a = Fh.exec(s);
  if (a) {
    for (const c of a[1].split(`
`))
      if (c.includes("地点"))
        for (const d of c.matchAll(/副本《([^》]+)》/g)) {
          const A = i(d[1], 4);
          if (A) return A;
        }
  }
  for (const c of t)
    for (const d of c.detect.patterns ?? []) {
      const A = Bh(c.id, d);
      if (A && A.test(s)) return r(c, 5);
    }
  return null;
}
const rl = 5, Vh = { id: "_open", name: "进行中", cap: 0, next: null };
function $e(e) {
  return !e || e.is_user ? !1 : !(e.is_system && e.extra?.type);
}
function Hh(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function lc(e, t, n) {
  const s = Hh(e) + Math.max(0, n - 1) * t, r = Math.floor(s / 60) % 24, i = (s % 60 + 60) % 60;
  return `${r % 12 === 0 ? 12 : r % 12}:${String(i).padStart(2, "0")}`;
}
function il(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return lc(e.time.dayStart, e.time.minutesPerRound, n);
}
function ac(e) {
  return e.phases.length ? e.phases : [Vh];
}
function Rs(e, t) {
  return ac(e).find((n) => n.id === t);
}
function ol(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let r = t;
  for (; r && !s.has(r.id); ) {
    if (r.id === n) return !0;
    s.add(r.id), r = Rs(e, r.next);
  }
  return !1;
}
function ll(e, t, n, s) {
  const r = n + 1, i = e.events.filter((o) => o.phase === t.id);
  if (s) {
    const o = t.id === s.phase ? s.round : t.cap;
    if (o > r) {
      let l = i.map((c, d) => ({ e: c, i: d })).filter(({ e: c }) => c.from >= r && c.from <= o).sort((c, d) => c.e.from - d.e.from || c.i - d.i).map(({ e: c }) => c), a = o;
      return l.length > rl && (a = l[rl - 1].from, l = l.filter((c) => c.from <= a)), { phase: t, round: a, events: l, skipFrom: r };
    }
  }
  return { phase: t, round: r, events: i.filter((o) => o.from === r) };
}
function cc(e, t, n) {
  const s = t.entryIndex;
  if (!$e(e[s])) return null;
  const r = ac(n);
  let i = r[0], o = r[0], l = 0, a, c = !1, d, A, p = null, z, w, x;
  const _ = /* @__PURE__ */ new Set(), S = {}, T = {}, M = /* @__PURE__ */ new Map();
  for (const F of t.manual ?? [])
    M.has(F.atIndex) || M.set(F.atIndex, []), M.get(F.atIndex).push(F);
  const I = (F, oe) => {
    T[i.id] === void 0 && F.id !== i.id && (T[i.id] = oe), n.phases.length && (o = yh(n, o, F)), i = F, l = 0, p && !ol(n, i, p.phase) && (p = null);
  };
  for (let F = s; F < e.length; F++) {
    const oe = e[F];
    if (!c && $e(oe)) {
      const le = ll(n, i, l, p);
      l = le.round;
      const Ce = new Set((oe.extra?.rlzc?.skippedEvents ?? []).map((D) => D.id));
      le.events.forEach((D) => {
        Ce.has(D.id) || _.add(D.id);
      }), S[F] = {
        phase: i.id,
        round: l,
        events: le.events.map((D) => D.id),
        skipFrom: le.skipFrom,
        limit: Gr(n, i, o, l, a)
      }, p && i.id === p.phase && l >= p.round && (p = null);
      const qe = String(oe.mes ?? ""), De = oc(qe);
      De && (w = De), a = De?.limit;
      const ct = ic(qe);
      ct && (x = ct);
      const ie = wr(qe);
      if (ie)
        c = !0, d = "tag", A = F, z = ie;
      else {
        const D = Oh(qe), Y = D ? r.find((K) => K.name === D) : void 0;
        if (Y && n.phases.length)
          I(Y, F);
        else if (i.cap > 0 && l >= i.cap && i.next) {
          const K = Rs(n, i.next);
          K && I(K, F);
        }
      }
    }
    for (const le of M.get(F) ?? []) {
      if (c) break;
      switch (le.kind) {
        case "skip": {
          p = Rs(n, le.targetPhase) && ol(n, i, le.targetPhase) ? { phase: le.targetPhase, round: le.targetRound } : null;
          break;
        }
        case "setPhase": {
          const Ce = Rs(n, le.phase);
          Ce && (p = null, I(Ce, F));
          break;
        }
        case "setRound":
          l = Math.max(0, Math.floor(le.round)), p = null;
          break;
        case "end":
          c = !0, d = "manual", A = F;
          break;
      }
    }
  }
  const R = c ? null : ll(n, i, l, p), P = R ? R.round : l + 1, U = i.cap > 0, ne = n.events.filter((F) => _.has(F.id)).map((F) => F.id), V = c ? void 0 : Gr(n, i, o, P, a), g = c ? void 0 : Gr(n, i, o, l);
  let m;
  const v = n.remaining;
  return !c && v.type === "nights" && n.phases.length && !i.byTag && !i.frozen ? m = v.template.replace("{n}", String(ec(n, i))) : !c && v.type === "countdown" && V?.minutes !== void 0 && (m = v.template.replace("{m}", String(V.minutes))), {
    phase: i,
    round: l,
    nextRound: P,
    clock: c ? void 0 : il(n, i, P),
    currentClock: il(n, i, l),
    remainingText: m,
    limit: V,
    roundsLeft: g ? { x: g.x, y: g.y } : void 0,
    chainStart: n.phases.length ? o.id : void 0,
    ended: c,
    endedBy: d,
    endIndex: A,
    firedEvents: ne,
    warn: !c && U && P >= i.cap - 2,
    isLastRound: !c && U && P === i.cap,
    overdue: !c && U && !i.next && P > i.cap,
    next: R,
    skipGoal: p,
    settlement: z,
    panel: w,
    rolesFromChat: x,
    perMessage: S,
    phaseEnds: T,
    entryIndex: s
  };
}
const uc = "rlzc_token", dc = "rlzc_progress", Ac = "rlzc_turn", fc = "rlzc_state", pc = "rlzc_ledger", hc = "rlzc_live", mc = "rlzc_format", Wh = [uc, dc, Ac, fc, pc, hc, mc], fs = { token: "", progress: "", turn: "", injected: [] };
function Gh(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function tr(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const r = new RegExp(`(?<!\\{)\\{(${s.map(Gh).join("|")})\\}(?!\\})`, "g");
  return e.replace(r, (i, o) => n?.[o]?.trim() || o);
}
function Kh(e, t) {
  if (!t.length) return "";
  const n = e.events.map((a) => a.id), s = t.map((a) => n.indexOf(a)).filter((a) => a >= 0).sort((a, c) => a - c), r = [];
  let i = s[0], o = s[0];
  const l = () => r.push(i === o ? n[i] : `${n[i]}–${n[o]}`);
  for (let a = 1; a < s.length; a++) {
    if (s[a] === o + 1) {
      o = s[a];
      continue;
    }
    l(), i = o = s[a];
  }
  return l(), r.join("、");
}
function al(e, t, n, s = !1) {
  let r = tr(e.text, t, n);
  return e.to > e.from && (r = `在本阶段第${e.from}到${e.to}轮之间发生：${r}`), e.if && !s && (r += `（条件：${tr(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${r}`;
}
function qh(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function Yh(e, t, n, s = {}) {
  if (e.rest && n?.status === "active")
    return { ...fs, token: e.token };
  if (!t || !n || t.ended || n.status !== "active") return fs;
  const r = s.roles, i = e.phases.length > 0, o = t.next, l = [`副本：${e.name}（${e.level}级）`], a = t.limit;
  if (i)
    l.push(`阶段：${t.phase.name}`), l.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`), a && l.push(`剩余${a.x}/${a.y}轮`), t.clock && l.push(`钟时：${t.clock}`), a?.text && l.push(`时限：${a.text}`), e.remaining.type === "countdown" && t.remainingText && l.push(t.remainingText), a?.deadline && !a.text?.includes(a.deadline) && l.push(`截止：${a.deadline}`);
  else {
    l.push(`本轮：第${t.nextRound}轮`), t.clock && l.push(`钟时：${t.clock}`);
    const M = s.panelLimit || s.briefing?.limit;
    M && l.push(`时限：${M}`);
  }
  const c = ["［副本进度·仅供AI］", l.join("　")];
  if (s.briefing?.goal && (!i || e.id === "generic") && c.push(`目标：${s.briefing.goal}`), e.roles?.length) {
    const M = e.roles.filter((I) => r?.[I]);
    c.push(
      M.length ? `角色登记：${e.roles.map((I) => `${I}=${r?.[I] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const d = Kh(e, t.firedEvents);
  d && c.push(`已发生事件：${d}`);
  const A = [];
  o.skipFrom !== void 0 && A.push(`玩家选择快进：本轮从「${t.phase.name}」第${o.skipFrom}轮快进到第${o.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const p = new Map((s.subNext ?? []).map((M) => [M.id, M])), z = o.events.filter((M) => M.if && p.get(M.id)?.ok === !1).map((M) => ({ id: M.id, reason: p.get(M.id).reason })), w = o.events.filter((M) => !z.some((I) => I.id === M.id)), x = (M) => !!M.if && p.get(M.id)?.ok === !0, _ = w.filter((M) => M.kind === "event"), S = w.filter((M) => M.kind === "directive");
  if (_.length && (A.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), _.forEach((M) => A.push(al(M, e, r, x(M))))), S.length && (A.push("本轮写作要求："), S.forEach((M) => A.push(al(M, e, r, x(M))))), t.isLastRound ? A.push(qh(t)) : t.overdue && A.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && A.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && A.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some((M) => r?.[M])) {
    let M = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((I) => `${I}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (M += "死者不得是{{user}}或其同伴。"), A.push(M);
  }
  let T;
  return a?.text && (a.minutes !== void 0 ? (A.push(
    `本轮<副本>的时限一栏写：${a.text}。正文里提到的时间也以此为准。本轮剧情若跳过了时间，约剩时间可以写得更少，不能更多；总时长照抄。`
  ), T = { text: a.text, minutes: a.minutes, total: a.total }) : (A.push(`本轮<副本>的时限一栏写：${a.text}（照抄）。`), T = { text: a.text })), {
    token: e.token,
    progress: c.join(`
`),
    turn: A.length ? ["［本轮指令·仅供AI］", ...A].join(`
`) : "",
    injected: w.map((M) => M.id),
    limit: T,
    skipped: z.length ? z : void 0,
    state: s.stateText || void 0
  };
}
const gt = "<状态栏>", Cn = "</状态栏>", Jh = {
  missing: "缺失",
  misnamed: "标签名写错",
  unpaired: "不成对",
  duplicate: "多于一对"
}, Ui = /* @__PURE__ */ new Set(["副本", "阶段切换", "副本结算", "角色登记", "积分变动", "直播"]), Zh = /* @__PURE__ */ new Set(["系统面板", "状态面板", "状态", "面板", "系统状态", "状态信息", "人物状态", "角色状态", "状态条", "状态框", "系统任务状态栏", "任务状态栏", "状态栏位", "status", "statusbar", "status_bar", "status-bar"]), Xh = ["等级", "积分", "位格", "道具", "待清算", "在场"];
function Qh(e) {
  return Xh.filter((t) => new RegExp(`${t}\\s*[：:]`).test(e)).length;
}
function Vi(e) {
  const t = e.trim().toLowerCase();
  return Zh.has(t) || /状态|面板/.test(t);
}
function cl(e, t) {
  if (Ui.has(e)) return !1;
  const n = Qh(t);
  return Vi(e) ? n >= 1 : /[^\x00-\x7f]/.test(e) && n >= 2;
}
function ul(e, t) {
  return e.split(t).length - 1;
}
function gc(e) {
  const t = /<([^<>\/\s][^<>\/]{0,11})>|【([^【】\/]{1,12})】|\[([^\[\]\/]{1,12})\]/g;
  let n;
  for (; (n = t.exec(e)) !== null; ) {
    const s = (n[1] ?? n[2] ?? n[3]).trim();
    if (Ui.has(s)) continue;
    const r = n.index + n[0].length, i = n[1] !== void 0 ? `</${n[1]}>` : n[2] !== void 0 ? `【/${n[2]}】` : `[/${n[3]}]`, o = e.indexOf(i, r);
    if (o >= 0) {
      if (cl(s, e.slice(r, o))) return { open: n[0], start: n.index, close: i, closeAt: o };
      continue;
    }
    if (Vi(s) && cl(s, e.slice(r, nr(e, r)))) return { open: n[0], start: n.index };
  }
  return null;
}
function nr(e, t) {
  const n = e.indexOf("<副本>", t);
  let s = n >= 0 ? n : e.length;
  for (; s > t && /\s/.test(e[s - 1]); ) s--;
  return s;
}
function xc(e, t) {
  const n = nr(e, t), s = /<\/([^<>\s]{1,12})>|【\/([^【】]{1,12})】|\[\/([^\[\]]{1,12})\]/g;
  s.lastIndex = t;
  let r;
  for (; (r = s.exec(e)) !== null && r.index < n; ) {
    const i = (r[1] ?? r[2] ?? r[3]).trim();
    if (!Ui.has(i) && Vi(i))
      return { tok: r[0], at: r.index };
  }
  return null;
}
function Hi(e) {
  const t = String(e ?? ""), n = ul(t, gt), s = ul(t, Cn);
  if (n === 1 && s === 1)
    return t.indexOf(gt) < t.indexOf(Cn) ? { kind: "ok" } : { kind: "unpaired", detail: "结尾在开头之前", fixable: !1 };
  if (n === 0 && s === 0) {
    const r = gc(t);
    return r ? { kind: "misnamed", detail: r.close ? `${r.open}…${r.close}` : `${r.open}（没有结尾）`, fixable: !0 } : { kind: "missing" };
  }
  if (n === s) return { kind: "duplicate", detail: `${n}对`, fixable: !1 };
  if (n === 1 && s === 0) {
    const r = xc(t, t.indexOf(gt) + gt.length);
    return { kind: "unpaired", detail: r ? `结尾写成了${r.tok}` : "只有开头", fixable: !0 };
  }
  return n === 0 ? { kind: "unpaired", detail: "只有结尾", fixable: !1 } : { kind: "unpaired", detail: `开头${n}个、结尾${s}个`, fixable: !1 };
}
function em(e) {
  const t = String(e ?? ""), n = Hi(t);
  if (!n.fixable) return null;
  if (n.kind === "misnamed") {
    const o = gc(t), l = o.start + o.open.length;
    if (o.close !== void 0 && o.closeAt !== void 0)
      return { text: t.slice(0, o.start) + gt + t.slice(l, o.closeAt) + Cn + t.slice(o.closeAt + o.close.length), from: `${o.open}…${o.close}` };
    const a = nr(t, l);
    return { text: t.slice(0, o.start) + gt + t.slice(l, a) + `
` + Cn + t.slice(a), from: o.open };
  }
  const s = t.indexOf(gt) + gt.length, r = xc(t, s);
  if (r) return { text: t.slice(0, r.at) + Cn + t.slice(r.at + r.tok.length), from: `${gt}…${r.tok}` };
  const i = nr(t, s);
  return { text: t.slice(0, i) + `
` + Cn + t.slice(i), from: gt };
}
function vc(e, t) {
  for (let n = 0; n < t; n++) if (e[n]?.is_user) return !1;
  return !0;
}
function bc(e, t) {
  const n = e[t];
  if (!$e(n) || vc(e, t)) return null;
  const s = Hi(n.mes);
  return s.kind === "ok" ? null : s;
}
const tm = "［格式·仅供AI］上一轮的状态栏格式不对。本轮必须在正文末尾完整输出一次<状态栏>……</状态栏>，开头结尾的标签名一字不改，不得写成其他名字。";
function nm(e) {
  for (let t = e.length - 1; t >= 0; t--)
    if ($e(e[t]))
      return bc(e, t) !== null;
  return !1;
}
function sm(e, t = 60) {
  const n = [];
  for (let s = e.length - 1; s >= 0 && n.length < t; s--) {
    const r = e[s]?.extra?.rlzc?.format, i = bc(e, s);
    i ? n.push({ index: s, kind: i.kind, detail: i.detail, fixed: !1 }) : r?.fixed && $e(e[s]) && n.push({ index: s, kind: r.kind, detail: r.detail, fixed: !0, from: r.from });
  }
  return n;
}
const rm = 1, im = 0;
function ve() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function yc() {
  const e = ve();
  return e.eventTypes ?? e.event_types ?? {};
}
function _n(e, t) {
  const n = yc()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  ve().eventSource.on(n, t);
}
function Un(e, t) {
  const n = yc()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  const s = ve().eventSource;
  typeof s.makeFirst == "function" ? s.makeFirst(n, t) : s.on(n, t);
}
function Z() {
  return ve().chat ?? [];
}
function Kt() {
  const e = ve();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function tt() {
  return ve().chatMetadata ?? {};
}
function Ge() {
  const e = ve();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function Lt(e, t, n, s) {
  ve().setExtensionPrompt(e, t, rm, n, s, im);
}
function om() {
  const e = ve();
  typeof e.saveChat == "function" ? e.saveChat() : e.saveChatDebounced?.();
}
function lm(e) {
  const t = ve(), n = Z()[e];
  !n || !document.querySelector(`#chat .mes[mesid="${e}"]`) || typeof t.updateMessageBlock == "function" && t.updateMessageBlock(e, n);
}
function ze(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function Yt(e) {
  const t = ve();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
function dl(e, t, n, s = "回廊种菜系统") {
  const r = window.toastr, i = window.jQuery;
  if (!r || typeof i != "function") return;
  const o = document.createElement("div");
  o.style.cssText = "overflow-wrap:anywhere;", o.append(document.createTextNode(e));
  const l = document.createElement("a");
  l.href = "#", l.textContent = t, l.className = "rlzc-toast-action", l.style.cssText = "margin-left:.5em;color:inherit;font-weight:bold;text-decoration:underline;white-space:nowrap;cursor:pointer;", o.append(l);
  const a = r.info(i(o), s, { timeOut: 6e3, extendedTimeOut: 2e3, closeButton: !0, escapeHtml: !1 });
  l.addEventListener("click", (c) => {
    c.preventDefault(), c.stopPropagation(), r.clear(a), n();
  });
}
async function gi(e, t = "") {
  const n = ve();
  if (n.callGenericPopup && n.POPUP_TYPE) {
    const s = document.createElement("div");
    s.textContent = e;
    const r = await n.callGenericPopup(s, n.POPUP_TYPE.INPUT, t, { okButton: "确定", cancelButton: "取消" });
    return typeof r == "string" ? r : null;
  }
  return window.prompt(e, t);
}
async function am(e, t) {
  const n = ve(), s = document.createElement("div"), r = document.createElement("div");
  r.textContent = e, s.append(r);
  let i = null;
  if (t) {
    const l = document.createElement("label");
    l.className = "checkbox_label rlzc-live-optin", l.style.cssText = "display:inline-flex;align-items:center;justify-content:center;gap:8px;margin-top:10px;min-height:44px;padding:0 8px;cursor:pointer;", i = document.createElement("input"), i.type = "checkbox", i.id = "rlzc-live-optin", i.checked = t.checked;
    const a = document.createElement("span");
    a.textContent = t.label, l.append(i, a), s.append(l);
  }
  if (n.callGenericPopup && n.POPUP_TYPE && n.POPUP_RESULT)
    return { ok: await n.callGenericPopup(s, n.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === n.POPUP_RESULT.AFFIRMATIVE, checked: !!i?.checked };
  const o = window.confirm(e);
  return { ok: o, checked: o && !!t?.checked };
}
const hn = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function kc(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function cm(e, t = hn) {
  return t.length ? e.replace(kc(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
const xi = "rlzc-hide:";
function um(e) {
  let t = 5381;
  for (let n = 0; n < e.length; n++) t = (t << 5) + t + e.charCodeAt(n) | 0;
  return (t >>> 0).toString(36);
}
function dm(e) {
  const t = e.firstChild;
  return t && t.nodeType === Node.COMMENT_NODE && t.data.startsWith(xi) ? t.data.slice(xi.length) : null;
}
function Am(e) {
  return e.querySelector(".TH-render, iframe") ? !0 : !!e.parentElement && Array.from(e.parentElement.children).some((t) => t.classList.contains("TH-streaming"));
}
function fm() {
  const e = globalThis.TavernHelper?.refreshOneMessage;
  return typeof e == "function" ? e : null;
}
const Yr = /* @__PURE__ */ new Set();
function wc(e, t = hn, n = !1, s = !1) {
  const r = Z()[e];
  if (!r || r.is_user) return;
  const i = String(r.extra?.display_text ?? r.mes ?? "");
  if (!kc(n ? hn : t, "").test(i)) return;
  const o = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!o) return;
  const l = ve().messageFormatting;
  if (typeof l != "function") return;
  const a = cm(i, t), c = um(`${t.join("|")}
${a}`), d = dm(o);
  if (d === c) return;
  const A = l(a, r.name ?? "", !!r.is_system, !1, e);
  if (!s && Am(o)) {
    if (d === null && l(i, r.name ?? "", !!r.is_system, !1, e) === A) return;
    const p = fm();
    if (p && !Yr.has(e)) {
      Yr.add(e), Promise.resolve().then(() => p(e)).catch((z) => console.warn("[rlzc] 请酒馆助手重渲染消息失败", e, z)).finally(() => Yr.delete(e));
      return;
    }
  }
  o.innerHTML = `<!--${xi}${c}-->${A}`;
}
function pm(e = hn, t = !1, n = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((s) => {
    const r = Number(s.getAttribute("mesid"));
    Number.isFinite(r) && wc(r, e, t, n);
  });
}
const hm = { key: "summary", label: "概况", hint: "本副本目前的整体情况，不超过150字" };
function zc(e) {
  return e.stateFields?.length ? e.stateFields : [hm];
}
const mm = [...hn, "状态栏"], gm = new RegExp(`<(${mm.join("|")})>[\\s\\S]*?<\\/\\1>`, "g");
function Wi(e) {
  return String(e ?? "").replace(gm, "").replace(/\n{3,}/g, `

`).trim();
}
function xm(e) {
  const t = zc(e.pack), n = e.markets ?? [], s = [
    "你是角色扮演副本的记录员，不写剧情，只整理事实。",
    "根据本轮正文完成三件事：",
    "1. 事件核对：逐条判断「本轮后台事件」在正文里是 done（已发生）、missed（该发生但没写出来）还是 void（条件已不成立，不该发生），各附一句理由。后台事件即使{{user}}看不到，只要正文与之不矛盾、且没有写出相反的事实，就算 done。标明「第X到Y轮之间」的事件不一定在本轮写出：本轮没写到、也没写出相反的事实，同样算 done。",
    "2. 隐藏状态：在「上一轮状态」的基础上更新下列字段，只依据正文里已经发生的事实，没有变化就照抄上一轮：",
    ...t.map((a) => `   - ${a.key}（${a.label}）：${a.hint}`),
    "3. 条件预判：逐条判断「下一轮事件」的条件现在是否仍成立（ok 为 true/false），附一句理由。",
    "4. hype：0–100 整数，按本轮正文的紧张、冲突、转折打分；hurt：true/false，本轮正文是否有人受伤或死亡。这两项只写数字和真假，不写理由。",
    ...n.length ? ["5. markets：逐条判断「盘口陈述」，只有本轮正文明确写到才填 true，否则填 false，不写理由。"] : [],
    "只输出一个 JSON 对象，不要任何解释，格式：",
    n.length ? `{"events":[{"id":"E11","status":"done|missed|void","reason":"…"}],"state":{…},"next":[{"id":"E12","ok":true,"reason":"…"}],"hype":50,"hurt":false,"markets":{${n.map((a) => `"${a.id}":false`).join(",")}}}` : '{"events":[{"id":"E11","status":"done|missed|void","reason":"…"}],"state":{…},"next":[{"id":"E12","ok":true,"reason":"…"}],"hype":50,"hurt":false}',
    "没有本轮事件时 events 为 []；没有下一轮事件时 next 为 []。"
  ].join(`
`), r = (a) => a.to > a.from ? `（本阶段第${a.from}到${a.to}轮之间）` : "", i = e.events.length ? e.events.map((a) => `- ${a.id}${r(a)}：${a.text}${a.if ? `（条件：${a.if}）` : ""}`).join(`
`) : "（无）", o = e.nextConditional.length ? e.nextConditional.map((a) => `- ${a.id}：${a.text}（条件：${a.if}）`).join(`
`) : "（无）", l = [
    `【副本】${e.pack.name}　阶段：${e.phaseName}　第${e.round}轮`,
    `【上一轮状态】${e.prevState ? JSON.stringify(e.prevState) : "（尚无，请根据正文建立）"}`,
    `【本轮后台事件】
${i}`,
    `【下一轮事件】
${o}`,
    ...n.length ? [`【盘口陈述】
${n.map((a) => `- ${a.id}：${a.judge}`).join(`
`)}`] : [],
    `【本轮正文】
${Wi(e.text)}`
  ].join(`

`);
  return { system: s, user: l };
}
function vm(e, t) {
  const n = new Set(t);
  return e.events.filter((s) => n.has(s.id) && s.kind !== "directive");
}
class He extends Error {
}
function bm(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("{"), r = t.lastIndexOf("}");
  if (s < 0 || r <= s) throw new He("返回里没有 JSON");
  let i;
  try {
    i = JSON.parse(t.slice(s, r + 1));
  } catch {
    throw new He("返回的 JSON 无法解析");
  }
  if (!i || typeof i != "object" || Array.isArray(i)) throw new He("返回的不是 JSON 对象");
  if (!i.state || typeof i.state != "object" || Array.isArray(i.state)) throw new He("缺少 state");
  const o = ["done", "missed", "void"], l = (Array.isArray(i.events) ? i.events : []).filter((A) => A && typeof A.id == "string" && o.includes(A.status)).map((A) => ({ id: A.id, status: A.status, reason: String(A.reason ?? "") })), a = (Array.isArray(i.next) ? i.next : []).filter((A) => A && typeof A.id == "string" && typeof A.ok == "boolean").map((A) => ({ id: A.id, ok: A.ok, reason: String(A.reason ?? "") })), c = { events: l, state: i.state, next: a }, d = typeof i.hype == "number" ? i.hype : typeof i.hype == "string" && i.hype.trim() !== "" ? Number(i.hype) : NaN;
  if (Number.isFinite(d) && (c.hype = Math.max(0, Math.min(100, Math.round(d)))), typeof i.hurt == "boolean" ? c.hurt = i.hurt : (i.hurt === "true" || i.hurt === "false") && (c.hurt = i.hurt === "true"), i.markets && typeof i.markets == "object" && !Array.isArray(i.markets)) {
    const A = {};
    for (const [p, z] of Object.entries(i.markets))
      typeof z == "boolean" ? A[p] = z : (z === "true" || z === "false") && (A[p] = z === "true");
    c.markets = A;
  }
  return c;
}
function ym(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = t * 31 + e.charCodeAt(n) | 0;
  return `${e.length}.${t}`;
}
function km(e, t, n) {
  const s = [n?.send_date, n?.gen_started, n?.gen_finished].map((r) => String(r ?? "")).join("|");
  return `${e}:${t}:${s}:${ym(String(n?.mes ?? ""))}`;
}
function wm(e) {
  return !(!e.enabled || !e.active || e.type === "continue" || e.type === "first_message" || e.saveMode && !e.hasEvents && !e.hasNextConditional);
}
async function zm(e, t, n = 2) {
  let s;
  for (let r = 0; r <= n; r++)
    try {
      return bm(await e(t));
    } catch (i) {
      s = i;
    }
  throw s;
}
class _c extends Error {
}
function zr(e) {
  if (e instanceof _c) return "超时";
  if (e instanceof He) return "返回格式不对";
  const t = `${e?.message ?? ""} ${e?.cause?.message ?? ""} ${String(e?.status ?? "")}`.toLowerCase();
  return /abort|timeout|timed out|超时/.test(t) ? "超时" : /quota|insufficient|balance|429|too many|额度|余额/.test(t) ? "额度不足" : /401|403|unauthori[sz]ed|forbidden|invalid[ _-]?api[ _-]?key|incorrect api key|authentication|密钥/.test(t) ? "密钥无效" : "其他";
}
function $c(e) {
  return e?.extra?.rlzc;
}
function _r(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!$e(s)) continue;
    const r = $c(s)?.sub;
    if (r?.state && !r.skipped) return { index: n, state: r.state };
  }
  return null;
}
function _m(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!$e(s)) continue;
    const r = $c(s)?.sub;
    return r && !r.skipped && Array.isArray(r.next) ? r.next : void 0;
  }
}
function sr(e) {
  return Array.isArray(e) ? e.length ? e.map((t) => sr(t)).join("、") : "无" : e && typeof e == "object" ? Object.entries(e).map(([t, n]) => `${t}：${sr(n)}`).join("；") : e == null || e === "" ? "未知" : String(e);
}
function Sc(e, t) {
  const n = zc(e), s = new Set(n.map((i) => i.key)), r = n.filter((i) => t[i.key] !== void 0).map((i) => `${i.label}：${sr(t[i.key])}`);
  for (const [i, o] of Object.entries(t)) s.has(i) || r.push(`${i}：${sr(o)}`);
  return r.length ? ["［副本状态·仅供AI］", ...r].join(`
`) : "";
}
const $m = "你在写回廊直播间的观众弹幕。观众是回廊里的其他玩家，只看得到直播画面。什么人都有：夸赞、祝福、讨论、泼冷水、嫉妒、抹黑、造谣，正面的稍多。每条30字以内，口语，称{{user}}为主播，不用性别代词。只能根据画面里已经发生的事说话，不猜测、不透露画面外的信息。", Sm = ["praise", "bless", "discuss", "cold", "envy", "smear", "rumor"];
function Cm(e) {
  if (!e.aiOn) return !1;
  const t = Math.max(1, Math.min(10, Math.floor(e.freq) || 3));
  return e.roundInShow > 0 && e.roundInShow % t === 0 ? !0 : e.phaseSwitch || e.hurt || e.eventDone;
}
function Cc(e) {
  return String(e ?? "").replace(/<(副本|状态栏|阶段切换|副本结算|角色登记|积分变动|直播|thinking|think)>[\s\S]*?<\/\1>/g, "").replace(/<\/?[A-Za-z一-龥][^<>]*>/g, "").replace(/\n{3,}/g, `

`).trim();
}
function Em(e, t, n) {
  const s = e.map((o) => o.text), r = [], i = /* @__PURE__ */ new Set();
  for (let o = 0; o < t * 10 && r.length < Math.min(t, s.length); o++) {
    const l = Math.floor(n() * s.length);
    i.has(l) || (i.add(l), r.push(s[l]));
  }
  return r;
}
function Gi(e) {
  return Math.max(8, Math.round(Number(e) || 10) + 3);
}
function Mm(e) {
  return Gi(e) + 2;
}
function Tm(e) {
  return Math.min(4e3, Math.max(1500, 600 + Gi(e) * 80));
}
function Im(e) {
  const t = [
    $m,
    `只输出一个 JSON 数组，${Gi(e.count)}条左右，不要任何解释，格式：`,
    '[{"type":"praise|bless|discuss|cold|envy|smear|rumor","name":"观众昵称","text":"…"}]'
  ].join(`
`), n = [
    `【直播间】${e.scene}`,
    `【在场角色】${e.cast.length ? e.cast.join("、") : "（无）"}`,
    `【最近两轮画面】
${e.texts.map((s) => Cc(s)).filter(Boolean).join(`

`) || "（无）"}`,
    `【语气示例】
${e.samples.map((s) => `- ${s}`).join(`
`)}`
  ].join(`

`);
  return { system: t, user: n };
}
function Nm(e, t = 13) {
  let n = String(e ?? "").trim();
  const s = /```(?:json)?\s*([\s\S]*?)```/i.exec(n);
  s && (n = s[1].trim());
  const r = n.indexOf("["), i = n.lastIndexOf("]");
  if (r < 0 || i <= r) throw new He("返回里没有 JSON 数组");
  let o;
  try {
    o = JSON.parse(n.slice(r, i + 1));
  } catch {
    throw new He("返回的 JSON 无法解析");
  }
  if (!Array.isArray(o)) throw new He("返回的不是 JSON 数组");
  const l = o.filter((a) => a && typeof a.text == "string" && a.text.trim()).map((a) => ({
    type: Sm.includes(a.type) ? a.type : "discuss",
    name: typeof a.name == "string" && a.name.trim() ? a.name.trim().slice(0, 16) : "匿名",
    text: a.text.trim()
  })).slice(0, t);
  if (!l.length) throw new He("返回的弹幕为空");
  return l;
}
async function Pm(e, t, n = 1, s = 13) {
  let r;
  for (let i = 0; i <= n; i++)
    try {
      return Nm(await e(t), s);
    } catch (o) {
      r = o;
    }
  throw r;
}
function Lm(e) {
  return e.t === "tip" ? `${e.name} 打赏${e.amount}` : `${e.name}：${e.text}`;
}
function Om(e, t = 5) {
  if (!e.on) return "";
  const n = e.feed.filter((r) => r.t === "msg" || r.t === "tip").slice(-t), s = `［直播·仅供AI］{{user}}正在直播，约${e.viewers}人在看。`;
  return n.length ? `${s}最近弹幕：${n.map(Lm).join("／")}` : s;
}
const Ec = 1500;
function Mc() {
  return ve().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
}
function Tc(e) {
  const t = { chat_completion_source: "custom", custom_url: e.url.trim().replace(/\/+$/, "") };
  return e.key.trim() && (t.custom_include_headers = JSON.stringify({ Authorization: `Bearer ${e.key.trim()}` })), t;
}
async function Ki(e, t) {
  const n = new AbortController();
  let s;
  const r = new Promise((i, o) => {
    s = setTimeout(() => {
      n.abort(), o(new _c(`超过 ${Math.round(e / 1e3)} 秒没有返回`));
    }, e);
  });
  try {
    return await Promise.race([t(n.signal), r]);
  } finally {
    clearTimeout(s);
  }
}
function Ic(e, t) {
  const n = typeof t?.error == "string" ? t.error : t?.error?.message ?? t?.message ?? (typeof t == "string" ? t : ""), s = String(n ?? "").trim(), r = new Error(`${e || ""} ${s}${t?.quota_error ? " insufficient_quota" : ""}`.trim());
  return r.status = e, r.detail = s, r;
}
async function Nc(e) {
  const t = await e.text().catch(() => "");
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
async function Pc(e, t, n, s = Ec, r = 0.2, i = !1) {
  const o = await fetch("/api/backends/chat-completions/generate", {
    method: "POST",
    headers: Mc(),
    signal: n,
    body: JSON.stringify({
      ...Tc(e),
      model: e.model,
      messages: [
        { role: "system", content: t.system },
        { role: "user", content: t.user }
      ],
      max_tokens: s,
      temperature: r,
      stream: !1
    })
  }), l = await Nc(o);
  if (!o.ok || l?.error) throw Ic(o.status === 200 ? 0 : o.status, l);
  const a = l?.choices?.[0]?.message?.content ?? l?.choices?.[0]?.text ?? l?.content;
  if (typeof a != "string") {
    if (i) return "";
    throw new Error("返回里没有正文");
  }
  return a;
}
async function Dm(e) {
  const t = ve();
  if (typeof t.generateRaw != "function") throw new Error("当前酒馆版本没有 generateRaw");
  return String(await t.generateRaw({ prompt: e.user, systemPrompt: e.system }));
}
function qi(e, t, n = {}) {
  return Ki(e.timeoutMs, (s) => {
    if (e.source === "main") return Dm(t);
    if (!e.preset) throw new Error("没有选择接口预设");
    return Pc(e.preset, t, s, n.maxTokens ?? Ec, n.temperature ?? 0.2);
  });
}
async function Rm(e, t) {
  const n = await fetch("/api/backends/chat-completions/status", {
    method: "POST",
    headers: Mc(),
    signal: t,
    body: JSON.stringify(Tc(e))
  }), s = await Nc(n);
  if (!n.ok || s?.error) throw Ic(n.status === 200 ? 0 : n.status, s);
  const i = (Array.isArray(s) ? s : Array.isArray(s?.data) ? s.data : Array.isArray(s?.models) ? s.models : []).map((o) => typeof o == "string" ? o : o?.id ?? o?.name).filter(Boolean);
  return [...new Set(i)].sort();
}
function Fm(e, t) {
  return Ki(t, (n) => Rm(e, n));
}
const jm = 64;
async function Bm(e, t) {
  if (!e.model.trim()) throw new Error("还没有选模型");
  return Ki(
    t,
    (n) => Pc(e, { system: "只回复 OK。", user: "ping" }, n, jm, 0.2, !0)
  );
}
function Al(e) {
  if (!e || typeof e != "object" || typeof e.ok != "boolean") return;
  const t = Number(e.at);
  return { ok: e.ok, reason: String(e.reason ?? ""), at: Number.isFinite(t) ? t : 0 };
}
function Um(e) {
  const t = {
    id: String(e?.id ?? ""),
    name: String(e?.name ?? ""),
    url: String(e?.url ?? ""),
    key: String(e?.key ?? ""),
    model: String(e?.model ?? "")
  };
  Array.isArray(e?.models) && (t.models = e.models.filter((r) => typeof r == "string" && r));
  const n = Al(e?.fetchResult);
  n && (t.fetchResult = n);
  const s = Al(e?.testResult);
  return s && (t.testResult = s), t;
}
function fl(e) {
  return !!e && !!e.url.trim();
}
function pl(e) {
  return !!e && !!e.url.trim() && !!e.model.trim();
}
function Vm(e, t, n) {
  const s = String(n ?? "").trim();
  return e[t] === s ? !1 : (e[t] = s, t === "model" || (delete e.models, delete e.fetchResult), delete e.testResult, !0);
}
function hl(e, t, n = Date.now()) {
  t.ok ? (e.models = [...t.models], e.fetchResult = { ok: !0, reason: "", at: n }) : e.fetchResult = { ok: !1, reason: t.reason, at: n };
}
function ml(e, t, n = Date.now()) {
  e.testResult = { ok: t.ok, reason: t.ok ? "" : t.reason, at: n };
}
function Hm(e) {
  const t = new Date(e);
  return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`;
}
function Wm(e) {
  const t = e.fetchResult;
  return t ? t.ok ? `✓ 读到${e.models?.length ?? 0}个模型` : `✗ ${t.reason}` : "";
}
function Gm(e) {
  const t = e.testResult;
  return t ? t.ok ? "✓ 可以回复" : `✗ ${t.reason}` : "";
}
function Km(e) {
  const t = e?.testResult;
  return t?.ok ? { kind: "on", text: "已连接" } : t ? { kind: "warn", text: "连接失败" } : { kind: "warn", text: "未测试" };
}
const qm = 80;
function vi(e) {
  const t = zr(e), n = Number(e?.status) || 0, s = String(e?.detail ?? "").replace(/\s+/g, " ").trim(), r = Array.from(s).slice(0, qm).join("");
  return n && r ? `${t}（${n}：${r}）` : n ? `${t}（${n}）` : r ? `${t}（${r}）` : t;
}
const Lc = "rlzc_ledger", Mt = {
  D: 300,
  C: 1e3,
  B: 3e3,
  A: 1e4,
  S: 3e4
}, Ym = {
  D: { D: 150, C: 300, B: 600, A: 1e3, S: 1800 },
  C: { D: 800, C: 1400, B: 2200, A: 3e3, S: 4200 },
  B: { D: 3e3, C: 4800, B: 6800, A: 9e3, S: 12500 },
  A: { D: 11e3, C: 16e3, B: 21500, A: 28e3, S: 38e3 },
  S: { D: 36e3, C: 48e3, B: 64e3, A: 85e3, S: 115e3 }
};
function Jm(e) {
  const t = e.trim(), n = /^([+-]?\d+)\s*[｜|]\s*(.*)$/.exec(t);
  if (n) {
    const i = parseInt(n[1], 10);
    return Number.isFinite(i) ? { delta: i, source: n[2].trim() } : null;
  }
  const s = /^([+-]?\d+)(?:\s*[（(]([^）)]*)[）)])?/.exec(t);
  if (!s) return null;
  const r = parseInt(s[1], 10);
  return Number.isFinite(r) ? { delta: r, source: s[2]?.trim() ?? "" } : null;
}
function nt(e) {
  let t;
  e instanceof Date ? t = e : typeof e == "number" ? t = new Date(e) : typeof e == "string" ? t = new Date(e) : t = /* @__PURE__ */ new Date(), isNaN(t.getTime()) && (t = /* @__PURE__ */ new Date());
  const n = t.getMonth() + 1, s = t.getDate(), r = String(t.getHours()).padStart(2, "0"), i = String(t.getMinutes()).padStart(2, "0");
  return `${n}/${s} ${r}:${i}`;
}
const Zm = /^(地点|时间|日期|等级|位格|积分|待清算|任务|道具|在场|状态|态度|os)\s*[：:]\s*([\s\S]*)$/i, Xm = /<状态栏>([\s\S]*?)<\/状态栏>/;
function Qm(e) {
  const t = String(e ?? "").replace(/[Ａ-Ｚａ-ｚ]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 65248)), n = /[SABCD]/i.exec(t);
  return n ? n[0].toUpperCase() : null;
}
function eg(e) {
  const t = {}, n = [];
  let s = null;
  for (const l of String(e ?? "").split(`
`)) {
    const a = l.replace(/\*\*/g, "").trim();
    if (!a || /^[━─—=\-]{3,}$/.test(a)) continue;
    const c = Zm.exec(a);
    if (c) {
      const A = /^os$/i.test(c[1]) ? "os" : c[1];
      s && !["地点", "时间", "日期"].includes(A) ? s[A] = c[2].trim() : t[A] = c[2].trim();
      continue;
    }
    const d = /^(.+?)\s*[：:]\s*$/.exec(a);
    if (d) {
      s = { 名: d[1].trim() }, n.push(s);
      continue;
    }
    if (a.includes("｜")) {
      const A = a.split("｜").map((p) => p.trim());
      n.push({ 名: A[0], 等级: A[1] ?? "" }), s = null;
    }
  }
  const r = n[0], o = !!r && ["积分", "位格", "道具", "在场"].some((l) => l in r) ? r.等级 : t.等级;
  return o ? Qm(o) : null;
}
function Oc(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const r = Xm.exec(s.mes);
    if (!r) continue;
    const i = eg(r[1]);
    if (i) return i;
  }
  return null;
}
function Dc(e) {
  const t = /积分[：:]\s*([+-]?\d+)/.exec(e);
  if (!t) return null;
  const n = parseInt(t[1], 10);
  return Number.isFinite(n) ? n : null;
}
function tg(e, t, n, s, r, i = "") {
  const o = n.结果 ?? "", l = (n.评价 ?? "").toUpperCase().trim(), a = ["D", "C", "B", "A", "S"].includes(l) ? l : null, c = o === "通关" || o === "成功" || o === "胜利", d = o === "失败", A = o === "死亡" || o === "阵亡";
  if (!c && !d && !A)
    return { delta: 0, source: "" };
  if (A)
    return { delta: 0, source: "" };
  if (d)
    return r ? { delta: 0, source: "清算未通关" } : { delta: -Math.floor(s * 0.3), source: "副本失败·扣除30%" };
  if (r) {
    const T = Mt[t] + 500;
    return { delta: Math.max(0, T - s), source: "清算通关·续存至斩杀线+500", clearWin: !0 };
  }
  if (!a)
    return { delta: 0, source: "", warn: "评价缺失或无法识别，不发奖励" };
  let p = Ym[e][a];
  const z = i || e, w = n.抽查 === "是" || n.抽查 === "true" || n.抽查 === "1", x = n.越级 === "是" || n.越级 === "true" || n.越级 === "1", _ = e !== t;
  let S = `副本奖励·${z} ${a}评`;
  return w ? (p = Math.floor(p * 0.5), S += "（×50%）") : (x || _) && (p = Math.floor(p * 0.6), S += "（×60%）"), { delta: p, source: S };
}
function gl(e, t = (/* @__PURE__ */ new Date()).getFullYear()) {
  const n = /^(\d{1,2})\/(\d{1,2})\s+(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
  if (!n) return;
  const s = new Date(t, Number(n[1]) - 1, Number(n[2]), Number(n[3]), Number(n[4])).getTime();
  return Number.isFinite(s) ? s : void 0;
}
function ng(e, t) {
  const n = [...e], s = t.map((i, o) => ({ m: i, k: o })).sort((i, o) => (i.m.ts ?? 1 / 0) - (o.m.ts ?? 1 / 0) || i.k - o.k).map((i) => i.m);
  let r = 0;
  for (const i of s) {
    let o = n.length;
    if (i.ts !== void 0)
      for (let l = r; l < n.length; l++) {
        const a = n[l].ts;
        if (a !== void 0 && a > i.ts) {
          o = l;
          break;
        }
      }
    n.splice(o, 0, i), r = o + 1;
  }
  return n;
}
function sg(e) {
  let t = -1 / 0;
  return e.map((n, s) => (n.ts !== void 0 && Number.isFinite(n.ts) && (t = Math.floor(n.ts / 6e4)), { e: n, k: s, key: t })).sort((n, s) => n.key - s.key || n.k - s.k).map((n) => n.e);
}
function rg(e, t) {
  let n = e;
  return t.map((s) => n += s.delta);
}
function bn(e, t) {
  return t.reduce((n, s) => n + s.delta, e);
}
function bs(e, t, n) {
  let s = e, r = !1;
  for (const i of t)
    s += i.delta, s < n && (r = !0), i.clear && (r = !1);
  return r;
}
function ig(e) {
  const t = [];
  return e.level && t.push(`等级写${e.level}`), e.rank && t.push(`位格写${e.rank}`), t.length ? `本轮状态栏里{{user}}的${t.join("、")}，之后按剧情照常。` : "";
}
function og(e, t, n = "D", s) {
  if (!t)
    return `［账户·仅供AI］积分：${e}　待清算：无`;
  const r = s ?? Mt[n], i = Math.max(0, r - e);
  return `［账户·仅供AI］积分：${e}　待清算：已标记，距斩杀线${i}分（${n}级斩杀线${r}）。商城价格上浮30%，下一场副本为清算副本。`;
}
const it = "rlzc";
function lg() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function ag(e, t, n) {
  return {
    id: lg(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function cg(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function Rc(e, t) {
  return e.packId === er ? e.briefing ? yr(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function ug(e, t) {
  const n = (s) => !!s && !s.is_user && s.extra?.rlzc?.entry === t.id;
  if (!t.id)
    return $e(e[t.entryIndex]) ? t.entryIndex : -1;
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let s = e.length - 1; s >= 0; s--) if (n(e[s])) return s;
  return -1;
}
function dg(e, t) {
  const n = ug(e, t);
  if (n < 0) return !1;
  const s = n - t.entryIndex;
  return s !== 0 && (t.entryIndex = n, t.manual = t.manual.map((r) => ({ ...r, atIndex: r.atIndex + s }))), t.manual = t.manual.filter((r) => r.atIndex < e.length && r.atIndex >= t.entryIndex), !0;
}
function Fc(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const xl = "rlzc_declined";
function qt(e, t) {
  return `${e}:${t}`;
}
const Yi = $e;
function jc(e, t, n, s = []) {
  const r = [];
  for (let i = Math.max(0, t); i < Math.min(n, e.length); i++) {
    if (!Yi(e[i])) continue;
    const o = kr(String(e[i].mes ?? ""));
    if (!o || s.includes(qt(i, o.name))) continue;
    const l = r.findIndex((a) => a.name === o.name);
    l >= 0 && r.splice(l, 1), r.push(o);
  }
  return r;
}
function Nn(e, t, n, s = []) {
  if (!Yi(e[t])) return null;
  const r = Uh(String(e[t].mes ?? ""), n, s);
  return r ? { ...r, index: t } : null;
}
function Ag(e, t, n, s, r = [], i = []) {
  const o = [];
  for (let l = Math.max(0, n); l <= Math.min(s, e.length - 1); l++) {
    const a = Nn(e, l, t, o);
    if (a && !r.includes(qt(l, a.info.name))) return a;
    if (a?.signal === 1 && !i.includes(qt(l, a.info.name))) {
      const c = o.findIndex((d) => d.name === a.info.name);
      c >= 0 && o.splice(c, 1), o.push(a.info);
    }
  }
  return null;
}
function fg(e, t, n, s = [], r = []) {
  const i = /* @__PURE__ */ new Map();
  for (const o of s) {
    if (r.includes(o)) continue;
    const l = o.indexOf(":"), a = Number(o.slice(0, l)), c = o.slice(l + 1);
    if (!Number.isInteger(a) || a < n || a >= e.length) continue;
    const d = Nn(e, a, t, jc(e, n, a, r));
    if (!d || d.info.name !== c) continue;
    const A = i.get(c);
    (!A || A.index < a) && i.set(c, d);
  }
  return [...i.values()].sort((o, l) => l.index - o.index);
}
function pg(e, t, n = [], s = hi, r = 0) {
  if (t?.status === "active") return null;
  let i = -1;
  for (let l = Math.max(0, r); l < e.length; l++) if (Yi(e[l])) {
    i = l;
    break;
  }
  if (i < 0 || t && t.entryIndex === i) return null;
  const o = Nn(e, i, s);
  return !o || n.includes(qt(i, o.info.name)) ? null : o;
}
const hg = /[■█▰●◆★▮▓]/g, mg = /[□░▱○◇☆▯▒]/g;
function gg(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const i = Number(n[2]);
    return i === 100 ? Number(n[1]) : i > 0 ? Math.round(Number(n[1]) / i * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const s = (t.match(hg) ?? []).length, r = (t.match(mg) ?? []).length;
  return s + r > 0 ? Math.round(s / (s + r) * 100) : null;
}
function vl(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function xg(e, t) {
  return vl(e).includes(vl(t));
}
function vg(e, t, n) {
  const s = [], r = Object.keys(n.perMessage).map(Number).sort((a, c) => a - c);
  let i = !1, o = null, l = !1;
  for (const a of r) {
    const c = n.perMessage[a], A = t.phases.find((M) => M.id === c.phase)?.name ?? "进行中", p = (M, I) => s.push({ index: a, phase: A, round: c.round, kind: M, text: I }), z = e[a]?.extra?.rlzc;
    for (const M of z?.sub?.events ?? []) M.status === "missed" && p("eventMissed", `${M.id} 未写出来：${M.reason}`);
    for (const M of z?.skippedEvents ?? []) p("eventSkipped", `${M.id} 条件不成立，已跳过：${M.reason}`);
    const w = oc(String(e[a]?.mes ?? "")), x = a === n.entryIndex;
    if (!w) {
      x || p("missing", "本轮回复缺少 <副本> 面板"), l = !x;
      continue;
    }
    l = !1;
    const _ = gg(w.progressBar);
    w.progressBar === void 0 ? p("progressUnreadable", "<副本> 中没有进度条一栏") : _ === null ? p("progressUnreadable", `进度条无法读出数值：「${w.progressBar}」`) : (!i && _ !== 0 && p("progressStart", `入场后第一轮的进度条应为0，实际为 ${_}`), (_ < 0 || _ > 100) && p("progressRange", `进度条数值 ${_} 超出 0–100`), o !== null && _ < o && p("progressDrop", `进度条比上一轮低：${o} → ${_}`), o = _), i = !0;
    const S = e[a]?.extra?.rlzc?.limit, T = S?.text ? S : c.limit?.text ? { text: c.limit.text, minutes: c.limit.minutes, total: c.limit.total } : void 0;
    if (T) {
      const M = w.limit;
      if (T.minutes !== void 0) {
        const I = Qa(M);
        !M || I.remaining === null || I.total === null ? p("limit", `时限读不到「剩余时间/总时长」：写的是「${M ?? "（没有时限一栏）"}」，注入的是「${T.text}」`) : (I.remaining > T.minutes && p("limit", `剩余时间比注入值多：写的是${Sn(I.remaining)}，注入的是${Sn(T.minutes)}`), T.total !== void 0 && I.total !== T.total && p("limit", `总时长与注入值不一致：写的是${Sn(I.total)}，注入的是${Sn(T.total)}`));
      } else (!M || !xg(M, T.text)) && p("limit", `时限与注入文字不一致：写的是「${M ?? "（没有时限一栏）"}」，注入的是「${T.text}」`);
    }
  }
  return { warnings: s, missingLast: l, hasPanel: i };
}
const bg = {
  D: 2e3,
  C: 8e3,
  B: 3e4,
  A: 1e5,
  S: 3e5
}, yg = [
  "受伤",
  "受伤了",
  "流血",
  "骨折",
  "昏迷",
  "倒下",
  "晕倒",
  "死亡",
  "死了",
  "牺牲",
  "阵亡",
  "重伤",
  "负伤",
  "受了伤",
  "被打中",
  "被击中",
  "命殒",
  "丧命",
  "伤亡"
];
function Bc(e) {
  return yg.some((t) => e.includes(t));
}
function kg(e) {
  if (e.subHype !== void 0)
    return Math.max(0, Math.min(100, Math.round(e.subHype)));
  const t = e.subHurt !== void 0 ? e.subHurt : e.bodyText ? Bc(e.bodyText) : !1;
  let n = 20;
  return e.hasEvents && (n += 20), e.hasPhaseSwitch && (n += 20), t && (n += 30), Math.min(100, n);
}
function wg(e, t) {
  return Math.round(e * 0.6 + t * 0.4);
}
function Ji(e) {
  const t = !e.packLevel || e.isRest ? e.playerLevel : e.packLevel, n = bg[t], s = !e.packLevel || e.isRest ? 0.3 : 1;
  return Math.round(n * s * (0.5 + e.heat / 100) * e.rand);
}
const zg = [10, 20, 50, 100, 200, 500, 1e3], _g = [20, 25, 15, 20, 10, 8, 2], $g = [15, 20, 15, 20, 10, 16, 4];
function Sg(e, t, n) {
  const s = t.reduce((i, o) => i + o, 0);
  let r = n * s;
  for (let i = 0; i < e.length; i++)
    if (r -= t[i], r <= 0) return e[i];
  return e[e.length - 1];
}
function Cg(e) {
  const { hype: t, isCorr: n, rand: s, names: r } = e, i = t / 40, o = [], l = [], a = t >= 70 ? $g : _g;
  for (let p = 1; p <= 3; p++) {
    const z = Math.min(1, Math.max(0, i - (p - 1)));
    if (s() < z) {
      let w = Sg(zg, a, s());
      n && (w = Math.max(10, Math.round(w * 0.3 / 10) * 10)), o.push(w), l.push(r[Math.floor(s() * r.length)] ?? "匿名");
    }
  }
  const c = o.reduce((p, z) => p + z, 0), d = Math.floor(c * 0.6);
  let A = "";
  return o.length === 1 ? A = `直播打赏${o[0]}×60%` : o.length > 1 && (A = `直播打赏${o.length}笔·共${c}×60%`), { count: o.length, totalFace: c, faces: o, netTotal: d, source: A, names: l };
}
const bl = 10, yl = 13, Eg = 5, Mg = 25, Zi = 12, kl = 5, Xi = 8;
function Uc(e, t = Zi) {
  const n = Vc(t);
  return Math.max(1, n - 1 + Math.floor(e() * 3));
}
function Vc(e) {
  const t = Math.round(Number(e));
  return Number.isFinite(t) ? Math.max(Eg, Math.min(Mg, t)) : Zi;
}
function Tg(e) {
  return kl + Math.floor(e() * (Xi - kl + 1));
}
function Jr(e, t, n, s, r, i, o) {
  const l = t && !n;
  return !(e.scope === "inst" && !l || e.scope === "corr" && l || e.when === "hurt" && !s || e.when === "calm" && r >= 30 || e.when === "open" && !i || e.when === "end" && !o);
}
function Ig(e) {
  const {
    pool: t,
    templates: n,
    packDanmaku: s = [],
    currentPhase: r,
    isInst: i,
    isRest: o,
    isHurt: l,
    hype: a,
    isOpen: c,
    isEnd: d,
    recentTexts: A,
    names: p,
    whoNames: z,
    rand: w
  } = e, x = e.count ?? Uc(w), _ = [], S = new Set(A), T = t.filter(
    (g) => Jr(g, i, o, l, a, c, d)
  ), I = z.length > 0 ? n.filter(
    (g) => Jr(g, i, o, l, a, c, d)
  ) : [], R = s.filter((g) => Jr(g, i, o, l, a, c, d) ? g.phase && g.phase.length > 0 && r ? g.phase.includes(r) : !0 : !1), P = () => p[Math.floor(w() * p.length)] ?? "匿名", U = () => z[Math.floor(w() * z.length)] ?? "";
  for (let g = 0; g < x * 5 && _.length < x; g++) {
    let m = "", v = "discuss";
    if (R.length > 0 && w() < 0.3) {
      const oe = R[Math.floor(w() * R.length)];
      m = oe.text, v = oe.type;
    } else if (I.length > 0 && w() < 0.5) {
      const le = I[Math.floor(w() * I.length)];
      m = le.text.replace("{who}", U()), v = le.type;
    } else if (T.length > 0) {
      const le = T[Math.floor(w() * T.length)];
      m = le.text, v = le.type;
    }
    !m || S.has(m) || (S.add(m), _.push({ name: P(), text: m, type: v }));
  }
  const ne = [...R, ...T], V = ne.length ? Math.floor(w() * ne.length) : 0;
  for (let g = 0; g < ne.length && _.length < x; g++) {
    const m = ne[(V + g) % ne.length];
    S.has(m.text) || (S.add(m.text), _.push({ name: P(), text: m.text, type: m.type }));
  }
  return _;
}
const Hc = "rlzc_live", Ng = "本局直播打赏撤回", Wc = 20, mn = {
  corridorOn: "回廊直播开始。",
  corridorOff: "已下播。",
  enterOff: "进入副本，回廊直播已结束。",
  instanceOn: "本局副本直播开始。",
  instanceOff: "副本结束，直播已下播。",
  revoke: "主播在副本中死亡，本局打赏已全部撤回。"
}, Pg = { library: !0, total: 12, ratio: 100 };
function Lg(e, t) {
  if (!t.library) return e;
  const n = Math.max(10, Math.min(100, Math.round(Number(t.ratio) || 100)));
  return Math.max(1, Math.min(e, Math.round(e * n / 100)));
}
function Og(e) {
  const t = e && typeof e == "object" ? e : {}, n = t.corridor ?? {};
  return {
    seq: Number.isFinite(t.seq) ? Number(t.seq) : 0,
    corridor: { on: !!n.on, show: typeof n.show == "string" ? n.show : "", viewers: Number.isFinite(n.viewers) ? n.viewers : void 0 },
    sys: Array.isArray(t.sys) ? t.sys.filter((s) => s && typeof s.id == "number") : []
  };
}
function $r(e, t) {
  return e.disableLive ? { show: !1, checked: !1 } : { show: !0, checked: !!t };
}
function Jt(e) {
  const t = e?.extra?.rlzc?.live;
  return t && typeof t.show == "string" && Array.isArray(t.feed) ? t : void 0;
}
function Qi(e, t, n = e.length) {
  const s = [];
  for (let r = 0; r < Math.min(n, e.length); r++) {
    const i = e[r];
    if (!i || i.is_user) continue;
    const o = Jt(i);
    o && o.show === t && s.push({ index: r, rec: o });
  }
  return s;
}
function eo(e, t) {
  return Qi(e, t).reduce((n, { rec: s }) => n + (s.tipNet || 0) - (s.revoke || 0), 0);
}
function Sr(e, t) {
  let n = t.seq;
  for (const s of t.sys) n = Math.max(n, s.id);
  for (const s of e) for (const r of Jt(s)?.feed ?? []) n = Math.max(n, r.id);
  return n;
}
function Dg(e, t = 30) {
  const n = [];
  for (let s = e.length - 1; s >= 0 && n.length < t; s--) {
    const r = Jt(e[s])?.feed ?? [];
    for (let i = r.length - 1; i >= 0 && n.length < t; i--) r[i].t === "msg" && n.push(r[i].text);
  }
  return n;
}
const Rg = /<状态栏>([\s\S]*?)<\/状态栏>/, Fg = /^(积分|位格|道具|在场)$/, jg = /^(地点|时间|日期|等级|位格|积分|待清算|任务|道具|在场|状态|态度|os)\s*[：:]/i;
function Gc(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const r = Rg.exec(s.mes);
    if (r) return r[1];
  }
  return null;
}
function to(e, t = e.length) {
  return Oc(e, t) ?? "D";
}
function Kc(e, t = "") {
  if (!e) return [];
  const n = [];
  let s = null;
  for (const i of e.split(`
`)) {
    const o = i.trim();
    if (!o || /^[━─—=\-]{3,}$/.test(o)) continue;
    const l = jg.exec(o);
    if (l) {
      s?.keys.add(l[1]);
      continue;
    }
    const a = /^(.+?)\s*[：:]\s*$/.exec(o);
    if (a) {
      s = { name: a[1].trim(), keys: /* @__PURE__ */ new Set() }, n.push(s);
      continue;
    }
    o.includes("｜") && (n.push({ name: o.split("｜")[0].trim(), keys: /* @__PURE__ */ new Set() }), s = null);
  }
  const r = [];
  return n.forEach((i, o) => {
    if (o === 0 && [...i.keys].some((a) => Fg.test(a))) return;
    const l = i.name.replace(/[（(][\s\S]*$/, "").trim();
    !l || /^(陌生|路人)/.test(l) || l === "{{user}}" || t && l === t || r.includes(l) || r.push(l);
  }), r;
}
function qc(e, t) {
  return t?.hurt !== void 0 ? t.hurt : Bc(Wi(e));
}
function Bg(e) {
  const { rand: t } = e, n = Wi(e.text), s = qc(e.text, e.sub), r = kg({ subHype: e.sub?.hype, subHurt: s, hasEvents: e.hasEvents, hasPhaseSwitch: e.hasPhaseSwitch, bodyText: n }), i = wg(e.prevHeat ?? Wc, r), o = e.scope === "corridor" || e.isRest, l = Ji({
    packLevel: e.scope === "instance" ? e.packLevel : null,
    playerLevel: e.playerLevel,
    isRest: e.isRest,
    heat: i,
    rand: 0.9 + t() * 0.2
  }), a = e.mix ?? Pg, c = Uc(t, a.total), d = e.awaitAi ? Math.max(c, Xi) : a.library ? c : 0, A = d ? Ig({
    pool: e.pool,
    templates: e.templates,
    packDanmaku: e.packDanmaku,
    currentPhase: e.phaseId,
    isInst: e.scope === "instance",
    isRest: e.isRest,
    isHurt: s,
    hype: r,
    isOpen: e.roundsInShow < 2,
    isEnd: e.isEnd,
    recentTexts: e.recentTexts,
    names: e.names,
    whoNames: e.whoNames,
    rand: t,
    count: d
  }) : [], p = Cg({ hype: r, isCorr: o, rand: t, names: e.names }), z = p.faces.map((S, T) => ({ t: "tip", name: p.names[T], text: "", amount: S, net: Math.floor(S * 0.6) })), w = [];
  let x;
  e.settle && (e.settle.died && (x = e.settle.tipsBefore + p.netTotal, x > 0 ? w.push({ t: "sys", name: "", text: mn.revoke, amount: 0, net: -x }) : x = void 0), w.push({ t: "sys", name: "", text: mn.instanceOff, amount: 0, net: 0 }));
  const _ = {
    show: e.show,
    scope: e.scope,
    hype: r,
    heat: i,
    viewers: l,
    hurt: s,
    feed: [],
    tipNet: p.netTotal,
    tipFace: p.totalFace,
    tipSource: p.source
  };
  return x && (_.revoke = x), e.awaitAi ? (_.pending = { local: A, tips: z, sys: w, target: c, aiWant: Lg(c, a), library: a.library }, a.library || (_.pending.borrow = Tg(t))) : _.feed = Yc(A.slice(0, c), z, w, e.firstId, t), _;
}
function Ug(e, t, n) {
  if (n.aiWant === void 0) return Vg(e, t, n.target);
  const s = n.library !== !1;
  if (!e?.length) return s ? t.slice(0, n.target) : t.slice(0, n.borrow ?? Xi);
  const r = e.slice(0, n.aiWant);
  if (!s) return r;
  const i = new Set(r.map((o) => o.text));
  for (const o of t) {
    if (r.length >= n.target) break;
    i.has(o.text) || (i.add(o.text), r.push(o));
  }
  return r;
}
function Vg(e, t, n) {
  const s = Math.max(bl, Math.min(yl, n));
  if (!e?.length) return t.slice(0, s);
  const r = e.slice(0, yl);
  if (r.length >= bl) return r;
  const i = new Set(r.map((o) => o.text));
  for (const o of t) {
    if (r.length >= s) break;
    i.has(o.text) || (i.add(o.text), r.push(o));
  }
  return r;
}
function Yc(e, t, n, s, r) {
  const i = e.map((o) => ({ t: "msg", name: o.name, text: o.text, amount: 0, net: 0 }));
  for (let o = i.length - 1; o > 0; o--) {
    const l = Math.floor(r() * (o + 1));
    [i[o], i[l]] = [i[l], i[o]];
  }
  for (const o of t) {
    const l = i.length ? 1 + Math.floor(r() * i.length) : 0;
    i.splice(Math.min(l, i.length), 0, o);
  }
  return i.push(...n), i.map((o, l) => ({ id: s + l, ...o }));
}
function Jc(e, t, n, s) {
  if (!e.pending) return e;
  const { pending: r, ...i } = e, o = Ug(t, r.local, r);
  return { ...i, feed: Yc(o, r.tips, r.sys, n, s) };
}
function Hg(e, t) {
  if (!e) return [];
  const n = [];
  return e.tipNet > 0 && n.push({ delta: e.tipNet, source: e.tipSource, type: "tip", at: t }), e.revoke && e.revoke > 0 && n.push({ delta: -e.revoke, source: Ng, type: "tip", at: t }), n;
}
function Wg(e) {
  return `其中本局直播打赏${e}分，副本内不可使用，离开副本后可用。`;
}
function Gg(e, t) {
  return e && `${e}${e.endsWith("。") ? "" : "。"}${Wg(t)}`;
}
function Kg(e, t, n) {
  const s = Qi(e, n), r = [];
  for (const { rec: i } of s) r.push(...i.feed);
  for (const i of t.sys) i.show === n && r.push({ id: i.id, t: i.t, name: i.name, text: i.text, amount: i.amount, net: i.net });
  return r.sort((i, o) => i.id - o.id), { items: r, last: s[s.length - 1]?.rec };
}
function qg(e, t) {
  let n = "", s = -1;
  for (const r of t.sys) r.id > s && (s = r.id, n = r.show);
  for (const r of e) {
    const i = Jt(r);
    if (i)
      for (const o of i.feed) o.id > s && (s = o.id, n = i.show);
  }
  return n;
}
function Yg(e, t, n, s = /* @__PURE__ */ new Set()) {
  const r = n.inInstance ? "instance" : "corridor", i = n.inInstance ? n.instanceLive : t.corridor.on, o = n.inInstance ? n.instanceLive ? n.instanceShow ?? "" : "" : i ? t.corridor.show : qg(e, t), l = { on: i, canToggle: !n.inInstance, scope: r, viewers: 0, heat: 0, tipTotal: 0, injectToAI: n.injectToAI, feed: [], lastTip: null };
  if (!o) return l;
  const { items: a, last: c } = Kg(e, t, o), d = a.filter((z) => !s.has(z.id));
  let A = 0, p = null;
  for (const z of d)
    A += z.net, z.t === "tip" && (p = { id: z.id, net: z.net });
  return {
    ...l,
    viewers: i ? c?.viewers ?? n.startViewers ?? 0 : 0,
    heat: i ? c?.heat ?? Wc : 0,
    tipTotal: A,
    feed: d.slice(-60),
    lastTip: p
  };
}
const Jg = ["小满", "好运来", "路过的D级", "一个路过的A级", "数据党", "理性讨论", "吃瓜", "夜班保安", "柠檬汁", "阿柒", "东区卖菜的", "西区摆摊的", "情报社小号", "失眠第三天", "房租交不起", "今天也在种土豆", "匿名", "光幕前的咸鱼", "刚通关的C级", "排行榜第九十九", "不想进本", "炸鱼被抓过", "黑市常客", "训练场打卡人", "药剂站熬夜班", "公会跑腿的", "一个路人", "今日份幸运", "积分快见底", "刚升B级", "看录像长大的", "老观众", "新来的", "别叫我大佬", "蹲一个结算", "白开水", "半夜不睡", "又是我", "打工人", "瓜田里的猹", "慢热", "晴天", "阿九", "十一", "小绿", "老周", "木子", "苏苏", "七七", "一颗橘子", "等天亮", "北风", "不吃香菜", "没抢到号", "退役S级", "D级万岁", "靠运气活着", "只看不说", "路过打个卡", "最后一排"], Zg = [{ type: "praise", text: "这反应速度，不愧是主播" }, { type: "praise", text: "冷静得不像第一次进这个级别的本", scope: "inst" }, { type: "praise", text: "刚才那个判断绝了" }, { type: "praise", text: "主播脑子转得是真快" }, { type: "praise", text: "这波我服" }, { type: "praise", text: "稳，太稳了" }, { type: "praise", text: "讲道理，换我早慌了" }, { type: "praise", text: "这就是高手吗" }, { type: "praise", text: "看得我手心出汗，主播还面不改色" }, { type: "praise", text: "刚才那句话说得漂亮" }, { type: "praise", text: "细节拉满，这都注意到了", scope: "inst" }, { type: "praise", text: "主播说话好有条理" }, { type: "praise", text: "这才叫会玩" }, { type: "praise", text: "就冲这个判断，关注了" }, { type: "praise", text: "有勇有谋" }, { type: "praise", text: "比上一个主播强多了" }, { type: "praise", text: "队友拖后腿，主播一个人在带", scope: "inst" }, { type: "praise", text: "这个位置站得好", scope: "inst" }, { type: "praise", text: "我宣布这是本周最佳直播" }, { type: "praise", text: "主播镇定得让我也镇定了" }, { type: "praise", text: "那个眼神，太帅了" }, { type: "praise", text: "心态真好，要是我早骂人了" }, { type: "praise", text: "这个节奏把握得好", scope: "inst" }, { type: "praise", text: "看出来是做过功课的" }, { type: "praise", text: "夸一句，主播是真的会说话" }, { type: "praise", text: "一句话就把场面稳住了", scope: "inst" }, { type: "praise", text: "这份胆量我是没有" }, { type: "praise", text: "学到了，下次我也这么干" }, { type: "praise", text: "主播好好看" }, { type: "praise", text: "声音也好听，别下播" }, { type: "praise", text: "越看越顺眼" }, { type: "praise", text: "这气质，放在哪个本都是主角" }, { type: "praise", text: "能屈能伸，佩服" }, { type: "praise", text: "刚才那一下我起立鼓掌" }, { type: "praise", text: "不慌不忙，高手风范" }, { type: "praise", text: "回廊里也过得这么讲究，爱了", scope: "corr" }, { type: "praise", text: "主播种的菜看着真水灵", scope: "corr" }, { type: "praise", text: "这手艺可以去西区摆摊了", scope: "corr" }, { type: "praise", text: "休整都不忘练，怪不得排名涨", scope: "corr" }, { type: "praise", text: "房间收拾得真干净", scope: "corr" }, { type: "bless", text: "祝平安出来！！", scope: "inst" }, { type: "bless", text: "主播一定要活着回来", scope: "inst" }, { type: "bless", text: "保佑保佑" }, { type: "bless", text: "冲啊主播！" }, { type: "bless", text: "这把一定能过", scope: "inst" }, { type: "bless", text: "结算见！", scope: "inst", when: "end" }, { type: "bless", text: "平安就好，评级无所谓", scope: "inst" }, { type: "bless", text: "等你出来请你吃饭", scope: "inst" }, { type: "bless", text: "好运加满，霉运退散" }, { type: "bless", text: "希望别再有人出事了", scope: "inst", when: "hurt" }, { type: "bless", text: "主播加油，我在东区超市门口看着呢" }, { type: "bless", text: "撑住，天总会亮的", scope: "inst" }, { type: "bless", text: "别怕，我们都在" }, { type: "bless", text: "好人一生平安" }, { type: "bless", text: "这波过了就能歇歇了", scope: "inst" }, { type: "bless", text: "下个副本抽个简单的吧", scope: "corr" }, { type: "bless", text: "注意安全，别逞强", scope: "inst" }, { type: "bless", text: "保重身体啊", when: "hurt" }, { type: "bless", text: "受伤了先处理伤口", scope: "inst", when: "hurt" }, { type: "bless", text: "一路绿灯，一路绿灯" }, { type: "bless", text: "今天也要好好活着" }, { type: "bless", text: "愿系统对你手下留情" }, { type: "bless", text: "别哭，我们陪你", when: "hurt" }, { type: "bless", text: "等着看你升级" }, { type: "bless", text: "最后一口气了，撑住", scope: "inst", when: "end" }, { type: "bless", text: "最后几轮，稳住！", scope: "inst", when: "end" }, { type: "bless", text: "主播今天早点睡", scope: "corr" }, { type: "bless", text: "休息好了再进本", scope: "corr" }, { type: "bless", text: "希望房租别涨", scope: "corr" }, { type: "bless", text: "回廊安稳一天是一天", scope: "corr" }, { type: "discuss", text: "现在什么情况，我刚进来" }, { type: "discuss", text: "来了来了，这把什么本", scope: "inst", when: "open" }, { type: "discuss", text: "开播了开播了", when: "open" }, { type: "discuss", text: "新主播？没见过", when: "open" }, { type: "discuss", text: "先别吵，看局势" }, { type: "discuss", text: "我觉得还有线索没找到", scope: "inst" }, { type: "discuss", text: "按往届，这本不好打", scope: "inst" }, { type: "discuss", text: "有没有人看过这本的录像", scope: "inst" }, { type: "discuss", text: "黑市那种录像别全信" }, { type: "discuss", text: "这队人各怀心思吧", scope: "inst" }, { type: "discuss", text: "现在还剩几个人？", scope: "inst" }, { type: "discuss", text: "前面说的那个我也注意到了" }, { type: "discuss", text: "理性讨论，别带节奏" }, { type: "discuss", text: "我赌主播能过" }, { type: "discuss", text: "有人算过这把能拿什么评吗", scope: "inst" }, { type: "discuss", text: "主播刚才是不是话里有话" }, { type: "discuss", text: "这个人说话一直留半句", scope: "inst" }, { type: "discuss", text: "注意细节，刚才那句不对劲", scope: "inst" }, { type: "discuss", text: "我在光幕前面站了一个小时了" }, { type: "discuss", text: "回放能看吗，刚才没看清" }, { type: "discuss", text: "有没有懂的解释一下" }, { type: "discuss", text: "你们看出来了吗，我看不出来" }, { type: "discuss", text: "这一段要是剪进录像会卖爆" }, { type: "discuss", text: "楼上别剧透……虽然我也不知道" }, { type: "discuss", text: "好无聊，快进", when: "calm" }, { type: "discuss", text: "主播在发呆吗", when: "calm" }, { type: "discuss", text: "挂着当背景音了", when: "calm" }, { type: "discuss", text: "去泡了碗面回来还是这样", when: "calm" }, { type: "discuss", text: "这么安静，要出事了吧", scope: "inst", when: "calm" }, { type: "discuss", text: "暴风雨前的宁静", scope: "inst", when: "calm" }, { type: "discuss", text: "啊啊啊有人倒了", scope: "inst", when: "hurt" }, { type: "discuss", text: "刚才那一下我没敢看", when: "hurt" }, { type: "discuss", text: "又走一个……", scope: "inst", when: "hurt" }, { type: "discuss", text: "手在抖吧，换我也抖", when: "hurt" }, { type: "discuss", text: "快结束了吧", scope: "inst", when: "end" }, { type: "discuss", text: "结算前最后几轮最容易出事", scope: "inst", when: "end" }, { type: "discuss", text: "今天种什么？", scope: "corr" }, { type: "discuss", text: "回廊直播也有人看，我服了我自己", scope: "corr" }, { type: "discuss", text: "排行榜又变了，你们看了吗", scope: "corr" }, { type: "discuss", text: "下个本打算报哪个？", scope: "corr" }, { type: "cold", text: "别高兴太早" }, { type: "cold", text: "我看悬" }, { type: "cold", text: "这把凉了吧" }, { type: "cold", text: "就这？" }, { type: "cold", text: "也就一般" }, { type: "cold", text: "运气好而已" }, { type: "cold", text: "换个人也能做到" }, { type: "cold", text: "等着翻车吧" }, { type: "cold", text: "这种判断，迟早出事" }, { type: "cold", text: "看了半天也没看出哪里厉害" }, { type: "cold", text: "太磨叽了" }, { type: "cold", text: "说了这么多，一点用没有" }, { type: "cold", text: "我押失败", scope: "inst" }, { type: "cold", text: "评级能拿个C就不错了", scope: "inst" }, { type: "cold", text: "队友再强也带不动", scope: "inst" }, { type: "cold", text: "太自信了，这本专治自信", scope: "inst" }, { type: "cold", text: "往届比这厉害的都栽在这", scope: "inst" }, { type: "cold", text: "真以为能全身而退？", scope: "inst" }, { type: "cold", text: "没意思，我换台了" }, { type: "cold", text: "这操作也就D级水平" }, { type: "cold", text: "这不是冷静，是反应慢" }, { type: "cold", text: "别吹了，看结算", scope: "inst" }, { type: "cold", text: "种菜有什么好看的", scope: "corr" }, { type: "cold", text: "回廊里直播，缺积分缺疯了吧", scope: "corr" }, { type: "cold", text: "天天摆烂，等着被清算吧", scope: "corr" }, { type: "envy", text: "凭什么这种人能上热门" }, { type: "envy", text: "我直播三天没人看，这也行？" }, { type: "envy", text: "长得好就是占便宜" }, { type: "envy", text: "又是这种运气好的" }, { type: "envy", text: "打赏的是托吧" }, { type: "envy", text: "我也想有人给我刷" }, { type: "envy", text: "这点本事也能拿打赏" }, { type: "envy", text: "同样是D级进来的，差距怎么这么大" }, { type: "envy", text: "分到这么好的队友，换我我也行", scope: "inst" }, { type: "envy", text: "酸了，真的酸了" }, { type: "envy", text: "一进来就有大佬带，羡慕不来", scope: "inst" }, { type: "envy", text: "这热度买的吧" }, { type: "envy", text: "凭什么打赏都往这边跑" }, { type: "envy", text: "我通关都没人看" }, { type: "envy", text: "排行榜上那些名字，一半靠运气" }, { type: "envy", text: "有人天生就是被偏爱的" }, { type: "envy", text: "我要是有这配置，比这还稳", scope: "inst" }, { type: "envy", text: "住的地方比我好十倍", scope: "corr" }, { type: "envy", text: "在回廊都能开播赚积分，羡慕哭了", scope: "corr" }, { type: "envy", text: "这菜种得，比我吃的还好", scope: "corr" }, { type: "smear", text: "装什么装" }, { type: "smear", text: "演的吧，这反应太假了" }, { type: "smear", text: "人设立得挺好" }, { type: "smear", text: "会说话而已，真打起来就露馅" }, { type: "smear", text: "这种人最会卖队友" }, { type: "smear", text: "表面客气，背地里肯定算计着" }, { type: "smear", text: "我不信真这么淡定" }, { type: "smear", text: "刚才那个眼神，心虚了吧" }, { type: "smear", text: "故意卖惨要打赏" }, { type: "smear", text: "刚才明明可以救，没救", scope: "inst", when: "hurt" }, { type: "smear", text: "自私，只顾自己", scope: "inst" }, { type: "smear", text: "队友出事了还这么冷静，冷血吧", scope: "inst", when: "hurt" }, { type: "smear", text: "这是在拿别人探路", scope: "inst" }, { type: "smear", text: "满嘴好话，一件实事没干" }, { type: "smear", text: "装新人的吧" }, { type: "smear", text: "就是冲着打赏来的" }, { type: "smear", text: "看着就不是好人" }, { type: "smear", text: "别被骗了，都是算计好的" }, { type: "smear", text: "下了本也要直播，吃相难看", scope: "corr" }, { type: "smear", text: "种田人设，炒给谁看", scope: "corr" }, { type: "rumor", text: "听说积分是借的，真的假的" }, { type: "rumor", text: "肯定是抱大腿进来的" }, { type: "rumor", text: "我朋友说在黑市见过这人" }, { type: "rumor", text: "据说上一个本是被人带飞的" }, { type: "rumor", text: "听说欠了一屁股积分" }, { type: "rumor", text: "有人说是买了攻略才敢进的", scope: "inst" }, { type: "rumor", text: "听说被公会踢出来过" }, { type: "rumor", text: "情报社的人说，这人被抽查过" }, { type: "rumor", text: "有人在西区看到这人跟黑市贩子说话" }, { type: "rumor", text: "据说是走后门才越级的" }, { type: "rumor", text: "听说上个本的队友都没出来" }, { type: "rumor", text: "有人说这人其实早就待清算了" }, { type: "rumor", text: "我听说排名是刷的" }, { type: "rumor", text: "传闻进本前偷偷买了防抽查道具" }, { type: "rumor", text: "听说有人专门花钱买这人的录像" }], Xg = [{ type: "praise", text: "{who}刚才那下好帅" }, { type: "praise", text: "{who}挺靠谱的" }, { type: "bless", text: "{who}别出事啊" }, { type: "bless", text: "心疼{who}" }, { type: "bless", text: "{who}还好吗", when: "hurt" }, { type: "discuss", text: "{who}靠谱吗，我看不透" }, { type: "discuss", text: "{who}又不说话了" }, { type: "discuss", text: "{who}刚才那句什么意思" }, { type: "discuss", text: "盯紧{who}" }, { type: "discuss", text: "{who}和主播配合挺默契" }, { type: "discuss", text: "{who}好像知道点什么" }, { type: "cold", text: "{who}也就那样" }, { type: "cold", text: "指望{who}？算了吧" }, { type: "envy", text: "凭什么{who}也有人喜欢" }, { type: "smear", text: "我就说{who}有问题" }, { type: "smear", text: "{who}在演" }, { type: "smear", text: "{who}那个表情不对劲" }, { type: "rumor", text: "听说{who}在排行榜上挂过名" }, { type: "rumor", text: "我听说{who}以前出过事" }, { type: "rumor", text: "{who}跟主播是不是早就认识" }], Qg = {
  names: Jg,
  pool: Zg,
  templates: Xg
}, ps = /* @__PURE__ */ new Set(), an = [];
let Et = null, Fs = [], Zr = null;
function ys() {
  for (const e of Fs.slice())
    try {
      e();
    } catch (t) {
      console.warn("[rlzc] RLZC_LIVE 订阅回调出错", t);
    }
}
function ex() {
  return 1500 + Math.random() * 1500;
}
function Zc() {
  Et = null;
  const e = an.shift();
  e !== void 0 && (ps.delete(e), ys()), an.length && (Et = setTimeout(Zc, ex()));
}
function no(e, t = !1) {
  if (t && an.length) {
    for (const n of an) ps.delete(n);
    an.length = 0, Et && clearTimeout(Et), Et = null;
  }
  if (e.length) {
    for (const n of e)
      ps.add(n.id), an.push(n.id);
    Et ? ys() : Zc();
  }
}
function tx() {
  Et && clearTimeout(Et), Et = null, an.length = 0, ps.clear();
}
function nx(e) {
  Zr = e, window.RLZC_LIVE = {
    get: () => Zr.view(ps),
    subscribe(t) {
      return typeof t != "function" ? () => {
      } : (Fs.push(t), () => {
        Fs = Fs.filter((n) => n !== t);
      });
    },
    toggle: () => Zr.toggle()
  };
}
function sx(e, t = 100) {
  let n = null, s = null;
  const r = () => {
    s = null, e();
  };
  return {
    get running() {
      return n !== null;
    },
    start() {
      if (n || typeof MutationObserver > "u") return;
      const i = document.getElementById("chat");
      i && (n = new MutationObserver(() => {
        s || (s = setTimeout(r, t));
      }), n.observe(i, { childList: !0, subtree: !0, characterData: !0 }));
    },
    stop() {
      n?.disconnect(), n = null, s && clearTimeout(s), s = null;
    }
  };
}
function rx() {
  const e = document.getElementById("mes_stop");
  return !!e && getComputedStyle(e).display !== "none";
}
const Xc = "rlzc_market", wl = { D: 0, C: 1, B: 2, A: 3, S: 4 }, Qc = { D: 1e3, C: 5e3, B: 2e4, A: 8e4, S: 3e5 }, zl = 10, ix = 0.8, ox = "ending", lx = "rating", eu = ["S", "A", "B", "C", "D"];
function ax(e, t) {
  return wl[e] - wl[t];
}
function cx(e) {
  return e <= -2 ? 0.85 : e === -1 ? 0.75 : e === 0 ? 0.6 : e === 1 ? 0.4 : e === 2 ? 0.25 : 0.15;
}
const Ns = {
  "le-1": { S: 0.15, A: 0.3, B: 0.3, C: 0.17, D: 0.08 },
  0: { S: 0.08, A: 0.2, B: 0.35, C: 0.25, D: 0.12 },
  1: { S: 0.04, A: 0.12, B: 0.3, C: 0.32, D: 0.22 },
  ge2: { S: 0.02, A: 0.08, B: 0.25, C: 0.35, D: 0.3 }
};
function ux(e) {
  return e <= -1 ? Ns["le-1"] : e === 0 ? Ns[0] : e === 1 ? Ns[1] : Ns.ge2;
}
function Cr(e) {
  return Math.round(e * 100) / 100;
}
function dx(e, t) {
  const n = 0.93 + t() * 0.14;
  return Math.max(1.01, Cr(1 / e * ix * n));
}
function tu(e, t) {
  return Math.floor(e * Math.round(t * 100) / 100);
}
function Qn(e, t, n, s) {
  return { id: e, label: t, p: n, odds: dx(n, s) };
}
function nu(e, t, n) {
  const s = {
    id: t.id,
    kind: e,
    q: t.q,
    options: [Qn("yes", t.yes, t.p, n), Qn("no", t.no, Cr(1 - t.p), n)],
    judge: t.judge
  };
  return t.judgeNo && (s.judgeNo = t.judgeNo), t.by && (s.by = t.by), s;
}
function Ax(e) {
  const { pack: t, rand: n } = e;
  if (t.rest) return [];
  const s = ax(t.level, e.playerLevel), r = cx(s), i = [
    { id: ox, kind: "ending", q: "本局结果", options: [Qn("win", "通关", r, n), Qn("lose", "失败", Cr(1 - r), n)] }
  ], o = ux(s);
  if (i.push({ id: lx, kind: "rating", q: "本局评价", options: eu.map((l) => Qn(l, l, o[l], n)) }), e.withEvents) for (const l of zh(t)) i.push(nu("event", l, n));
  return i;
}
const _l = 2, fx = 5;
function bi(e, t, n) {
  const s = e.map((i, o) => o), r = [];
  for (; r.length < t && s.length; ) r.push(s.splice(Math.floor(n() * s.length), 1)[0]);
  return r.sort((i, o) => i - o).map((i) => e[i]);
}
function px(e, t, n) {
  if (!t) return { markets: e.filter((o) => o.kind === "ending" || o.kind === "rating") };
  const s = _l + Math.floor(n() * (fx - _l + 1)), r = 1 + Math.floor(n() * 2), i = bi(e, s - r, n);
  return { markets: i, plan: { total: s, freak: r, order: e.map((o) => o.id) }, reserve: e.filter((o) => !i.includes(o)) };
}
function hx(e, t, n) {
  const s = e.markets.filter((c) => c.kind !== "freak"), r = e.reserve ?? [];
  if (!e.plan) return { markets: [...s, ...t ? $l(t, n) : []], reserve: r };
  const i = $l(bi(t ?? [], e.plan.freak, n), n), o = bi(r, e.plan.freak - i.length, n), l = (c) => e.plan.order.indexOf(c.id);
  return { markets: [...[...s, ...o].sort((c, d) => l(c) - l(d)), ...i], reserve: r.filter((c) => !o.includes(c)) };
}
function mx(e, t) {
  return e - Math.max(0, t);
}
function su(e) {
  const t = Qc[e.playerLevel], n = mx(e.balance, e.lockedTips), s = Math.max(0, Math.min(t - e.already, n)), r = e.stake, i = Number.isFinite(r) && r > 0 && e.balance - r < Mt[e.playerLevel];
  let o;
  return !Number.isInteger(r) || r < zl ? o = `最少押${zl}` : e.already + r > t ? o = "超过单注上限" : r > n && (o = "可用余额不足"), { ok: !o, reason: o, cap: t, max: s, belowKill: i };
}
function gx(e, t) {
  return e.tickets.filter((n) => n.market === t).reduce((n, s) => n + s.stake, 0);
}
function xx(e, t) {
  return Object.keys(e).map(Number).filter((n) => n >= t).length >= 2;
}
const ru = ["通关", "成功", "胜利"], so = ["死亡", "阵亡"];
function vx(e) {
  return so.includes(String(e ?? "").trim());
}
function bx(e) {
  if (!e.ended) return null;
  const t = e.endIndex ?? -1;
  if (e.endedBy !== "tag") return { kind: "refund", index: t };
  const n = String(e.result ?? "").trim();
  return so.includes(n) ? { kind: "lost", index: t } : ru.includes(n) ? { kind: "option", option: "win", index: t } : n === "失败" ? { kind: "option", option: "lose", index: t } : { kind: "refund", index: t };
}
function yx(e) {
  if (!e.ended) return null;
  const t = e.endIndex ?? -1;
  if (e.endedBy !== "tag") return { kind: "refund", index: t };
  const n = String(e.result ?? "").trim();
  if (so.includes(n)) return { kind: "lost", index: t };
  const s = String(e.rating ?? "").trim().toUpperCase();
  return ru.includes(n) && eu.includes(s) ? { kind: "option", option: s, index: t } : { kind: "refund", index: t };
}
function kx(e, t) {
  const n = t.outcome, s = e.by !== void 0 ? t.phaseEnds[e.by] : void 0;
  let r;
  s !== void 0 && (!n.ended || n.endIndex === void 0 || s < n.endIndex) ? r = s : n.ended && (r = n.endIndex ?? -1);
  let i = !0, o = !1, l = 0;
  for (const c of t.rounds) {
    if (r !== void 0 && c.index > r) break;
    if (!(n.ended && n.endedBy === "tag" && c.index === n.endIndex))
      if (l++, c.state === "ok") {
        if (c.hits[e.id] === !0) return { kind: "option", option: "yes", index: c.index };
        if (e.judgeNo && c.hits[`${e.id}:no`] === !0) return { kind: "option", option: "no", index: c.index };
      } else
        i = !1, c.state === "pending" && (o = !0);
  }
  if (r === void 0) return null;
  const a = n.ended && r === (n.endIndex ?? -1);
  return a && n.endedBy === "tag" && vx(n.result) ? { kind: "lost", index: r } : a && n.endedBy !== "tag" ? { kind: "refund", index: r } : o ? null : i && l > 0 ? { kind: "option", option: "no", index: r } : { kind: "refund", index: r };
}
function wx(e) {
  const t = {};
  for (const n of e.markets)
    e.outcome.voided ? t[n.id] = { kind: "refund", index: -1 } : n.kind === "ending" ? t[n.id] = bx(e.outcome) : n.kind === "rating" ? t[n.id] = yx(e.outcome) : t[n.id] = kx(n, e);
  return t;
}
function yi(e, t) {
  const n = {};
  for (const s of e.tickets) {
    if (e.frozen) {
      n[s.id] = e.frozen[s.id] ?? { stamp: "refund", index: -1 };
      continue;
    }
    const r = t[s.market];
    r ? r.kind === "refund" ? n[s.id] = { stamp: "refund", index: r.index } : r.kind === "lost" ? n[s.id] = { stamp: "lose", index: r.index } : n[s.id] = { stamp: s.option === r.option ? "win" : "lose", index: r.index } : n[s.id] = null;
  }
  return n;
}
function zx(e, t) {
  const n = {}, s = yi({ ...e, frozen: void 0 }, t);
  for (const r of e.tickets) n[r.id] = s[r.id] ?? { stamp: "refund", index: -1 };
  return n;
}
function _x(e, t, n, s = []) {
  const r = new Set(Array.isArray(s) ? s : [s]);
  return Object.keys(t).map(Number).filter((i) => i > n && $e(e[i])).sort((i, o) => i - o).map((i) => {
    const o = e[i]?.extra?.rlzc?.sub;
    return o && !o.skipped && o.markets && typeof o.markets == "object" ? { index: i, state: "ok", hits: o.markets } : !o && r.has(i) ? { index: i, state: "pending", hits: {} } : { index: i, state: "miss", hits: {} };
  });
}
function $x(e, t) {
  const n = [];
  if (e.frozen) return n;
  for (const s of e.markets)
    s.kind !== "event" && s.kind !== "freak" || t[s.id] || !s.judge || (n.push({ id: s.id, judge: s.judge }), s.judgeNo && n.push({ id: `${s.id}:no`, judge: s.judgeNo }));
  return n;
}
function iu(e, t) {
  return e.markets.find((n) => n.id === t);
}
function Sx(e, t) {
  return e?.options.find((n) => n.id === t)?.label ?? t;
}
function Cx(e, t) {
  const n = iu(e, t.market);
  return `下注·${e.packName}·${n?.q ?? t.market}·${Sx(n, t.option)}`;
}
function Ex(e, t, n) {
  const s = [];
  for (const r of e.tickets) {
    s.push({ delta: -r.stake, source: Cx(e, r), type: "bet", at: r.at, pos: r.after, seq: r.seq ?? 0 });
    const i = t[r.id];
    if (!i || i.stamp === "lose") continue;
    const o = iu(e, r.market)?.q ?? r.market, l = (i.index >= 0 ? n(i.index) : void 0) ?? r.at;
    i.stamp === "win" ? s.push({ delta: tu(r.stake, r.odds), source: `赌票兑付·${e.packName}·${o}`, type: "bet", at: l, pos: i.index }) : s.push({ delta: r.stake, source: `赌票退还·${e.packName}·${o}`, type: "bet", at: l, pos: i.index });
  }
  return s;
}
const Mx = '你是回廊黑市的庄家，要为主播即将进入的副本开几个离谱但有趣的盘口。你只知道下面这些公开信息，不知道剧情会怎么走。出2到3道是非题：题目20字以内，称{{user}}为主播，不用性别代词；必须能从之后的正文里直接看出是或否；不要问结局、评价和生死，那些已经有盘了；不要涉及公开信息以外的设定。每题给一个你估计「是」的概率p（0.05到0.95）。只输出JSON：[{"q":"题目","judge":"用来判断是否发生的一句陈述","p":0.3}]', Tx = 4e3;
function ou(e) {
  const n = Cc(e).split(`
`), s = n.findIndex((i) => /副本简报/.test(i));
  return (s >= 0 ? n.slice(s, s + 6) : n).join(`
`).trim().slice(0, 1e3);
}
function Ix(e) {
  const t = e.docs.filter((s) => s.md && s.md.trim()).map((s) => `## ${s.title}
${s.md.trim()}`).join(`

`).slice(0, Tx), n = [
    `【副本】${e.name}　等级：${e.level}`,
    `【简报】
${e.briefing || "（无）"}`,
    `【公开资料】
${t || "（无）"}`
  ].join(`

`);
  return { system: Mx, user: n };
}
function Nx(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("["), r = t.lastIndexOf("]");
  if (s < 0 || r <= s) throw new He("返回里没有 JSON 数组");
  let i;
  try {
    i = JSON.parse(t.slice(s, r + 1));
  } catch {
    throw new He("返回的 JSON 无法解析");
  }
  if (!Array.isArray(i)) throw new He("返回的不是 JSON 数组");
  const o = [];
  for (const l of i) {
    if (!l || typeof l.q != "string" || typeof l.judge != "string") continue;
    const a = l.q.trim(), c = l.judge.trim(), d = typeof l.p == "number" ? l.p : Number(l.p);
    if (!(!a || a.length > 20 || !c || !Number.isFinite(d) || d < 0.05 || d > 0.95) && (o.push({ q: a, judge: c, p: Cr(d) }), o.length >= 3))
      break;
  }
  if (!o.length) throw new He("没有合格的题");
  return o;
}
async function Px(e, t, n = 1) {
  let s;
  for (let r = 0; r <= n; r++)
    try {
      return Nx(await e(t));
    } catch (i) {
      s = i;
    }
  throw s;
}
function $l(e, t) {
  return e.map((n, s) => nu("freak", { id: `F${s + 1}`, q: n.q, yes: "会", no: "不会", p: n.p, judge: n.judge }, t));
}
function Lx(e) {
  return `{{user}}在黑市押了自己本局失败，押注${e}分。`;
}
function Ox(e) {
  return `{{user}}刚在赌坊输掉${e}分，余额已低于斩杀线。`;
}
function Dx(e) {
  return `{{user}}刚在赌坊一局赢了${e}分。`;
}
function Rx(e) {
  return e.kind === "betLose" ? Lx(e.amount) : e.kind === "casinoLoss" ? Ox(e.amount) : Dx(e.amount);
}
function ki(e, t) {
  if (t.kind === "betLose") {
    const n = e.find((s) => s.kind === "betLose");
    if (n && !n.sent) return e.map((s) => s === n ? { ...s, amount: s.amount + t.amount, after: t.after } : s);
  }
  return [...e, t];
}
function Fx(e) {
  return e.filter((t) => !t.sent);
}
function jx(e) {
  const t = e && typeof e == "object" ? e : {}, n = t.casino ?? {}, s = {};
  for (const [r, i] of Object.entries(t.books ?? {}))
    i && typeof i == "object" && Array.isArray(i.markets) && (s[r] = { ...i, tickets: Array.isArray(i.tickets) ? i.tickets : [] });
  return {
    books: s,
    casino: {
      tables: Array.isArray(n.tables) ? n.tables.filter((r) => typeof r == "string") : [],
      key: typeof n.key == "string" ? n.key : "",
      plays: Array.isArray(n.plays) ? n.plays : []
    },
    hints: Array.isArray(t.hints) ? t.hints.filter((r) => r && typeof r.kind == "string" && Number.isFinite(r.amount)) : [],
    seq: Number.isFinite(t.seq) ? Number(t.seq) : 0
  };
}
const Xr = (e) => Array.from({ length: e }, (t, n) => n + 1), ro = [
  {
    id: "bell",
    name: "听钟",
    desc: "押钟声单双、大小，或猜几下。",
    bets: [
      { id: "odd", label: "单", mult: 1.6 },
      { id: "even", label: "双", mult: 1.6 },
      { id: "small", label: "小", mult: 1.6 },
      { id: "big", label: "大", mult: 1.6 },
      ...Xr(12).map((e) => ({ id: `n${e}`, label: `${e}下`, mult: 9.6 }))
    ]
  },
  {
    id: "door",
    name: "门牌",
    desc: "押指针停在哪扇门。",
    bets: [
      { id: "r1", label: "1–5", mult: 3.2 },
      { id: "r2", label: "6–10", mult: 3.2 },
      { id: "r3", label: "11–15", mult: 3.2 },
      { id: "r4", label: "16–20", mult: 3.2 },
      ...Xr(20).map((e) => ({ id: `d${e}`, label: `${e}号`, mult: 16 }))
    ]
  },
  {
    id: "lot",
    name: "抽签",
    desc: "三支签，一支大吉。",
    bets: Xr(3).map((e) => ({ id: `s${e}`, label: `第${e}支`, mult: 2.4 }))
  },
  {
    id: "card",
    name: "翻牌",
    desc: "和庄家各翻一张，大的赢，平局庄家赢。",
    bets: [{ id: "high", label: "比大小", mult: 1.73 }]
  }
];
function Tn(e) {
  return ro.find((t) => t.id === e);
}
function Vn(e, t) {
  return Math.min(e, 1 + Math.floor(t() * e));
}
function Bx(e, t) {
  return Math.floor(e * Math.round(t * 100) / 100);
}
function Ux(e, t, n, s) {
  const r = Tn(e), i = r?.bets.find((d) => d.id === t);
  if (!r || !i) return null;
  let o = !1, l = "", a = [];
  switch (r.id) {
    case "bell": {
      const d = Vn(12, s);
      a = [d], i.id === "odd" || i.id === "even" ? (o = d % 2 === 1 == (i.id === "odd"), l = `${d}下，${d % 2 ? "单" : "双"}`) : i.id === "small" || i.id === "big" ? (o = d <= 6 == (i.id === "small"), l = `${d}下，${d <= 6 ? "小" : "大"}`) : (o = i.id === `n${d}`, l = `${d}下`);
      break;
    }
    case "door": {
      const d = Vn(20, s);
      if (a = [d], i.id.startsWith("r")) {
        const A = Number(i.id.slice(1));
        o = d > (A - 1) * 5 && d <= A * 5;
      } else o = i.id === `d${d}`;
      l = `${d}号门`;
      break;
    }
    case "lot": {
      const d = Vn(3, s);
      a = [d], o = i.id === `s${d}`, l = `第${d}支大吉`;
      break;
    }
    case "card": {
      const d = Vn(13, s), A = Vn(13, s);
      a = [d, A], o = d > A, l = `你 ${d}，庄家 ${A}`;
      break;
    }
  }
  const c = o ? Bx(n, i.mult) : 0;
  return { win: o, payout: c, net: o ? c - n : -n, result: l, label: `押${i.label}`, faces: a };
}
function Vx(e, t) {
  return `赌坊·${Tn(e)?.name ?? e}·${t}`;
}
function Sl(e) {
  const t = ro.map((i) => i.id), n = Math.min(t.length - 1, Math.floor(e() * t.length)), s = t.filter((i, o) => o !== n), r = Math.min(s.length - 1, Math.floor(e() * s.length));
  return [t[n], s[r]];
}
function Hx(e, t, n) {
  const s = e.tables.length === 2 && e.tables.every((o) => Tn(o));
  if (s && e.key === t) return { tables: e.tables, key: t, changed: !1 };
  const r = (o) => s && o.length === 2 && o.every((l) => e.tables.includes(l));
  let i = Sl(n);
  for (let o = 0; o < 20 && r(i); o++) i = Sl(n);
  return r(i) && (i = ro.map((o) => o.id).filter((o) => !e.tables.includes(o))), { tables: i, key: t, changed: !0 };
}
const wi = "rlzc", Ot = {
  optIn: !1,
  injectToAI: !1,
  library: !0,
  aiOn: !1,
  api: "main",
  presetId: "",
  ratio: 50,
  freq: 3,
  total: Zi
}, lu = {
  source: "off",
  presets: [],
  presetId: "",
  saveMode: !1,
  wait: !0,
  timeoutSec: 60
}, zi = "回廊种菜系统";
function fn() {
  return f.settings.appName || zi;
}
const Gn = {
  appName: "",
  depths: { token: 4, progress: 4, turn: 0, ledger: 4, live: 4, format: 0 },
  ball: { x: null, y: null },
  showBall: !0,
  debug: !1,
  customPacks: [],
  panelDisplay: "panel",
  statusBarFix: !0,
  genericCaps: { ...As },
  subApi: structuredClone(lu),
  cardCollapsed: { depths: !0, subApi: !0, genericCaps: !0, accountFix: !0, rolesDebug: !0, live: !0, statusBar: !0, auditDebug: !0, manualDebug: !0, injectionDebug: !0, formatDebug: !0 },
  live: { ...Ot }
}, f = /* @__PURE__ */ pr({
  chatId: "",
  session: null,
  pack: null,
  progress: null,
  audit: null,
  /** 副API正在整理 */
  subBusy: !1,
  /** 系统页的一行小字：副本记录：已更新（第N轮）/ 第N轮状态未更新 */
  subLine: "",
  settings: structuredClone(Gn),
  packs: [],
  lastInjection: fs,
  panelOpen: !1,
  tab: "system",
  debugUnlocked: !1,
  /** 刷新计数，调试页据此重读每楼快照 */
  tick: 0,
  /** 积分账本流水（重放自聊天快照，CLAUDE.md 第三期） */
  ledger: [],
  /** 黑市（第四期）：本局盘口、赌票、摆桌 */
  market: Pv(),
  /** 入场提示小卡片（右上角，不挡操作）；同一时间只有一张 */
  entryCard: null,
  /** 待确认的副本：点过「不是」的入场信号，系统页里二次确认（进入 / 关掉不再提示） */
  pendingEntries: []
});
function et(e) {
  return JSON.parse(JSON.stringify(e));
}
function ks(...e) {
  f.settings.debug && console.log("[rlzc]", ...e);
}
function Wx() {
  const e = ve().extensionSettings, t = e[wi] ?? {}, n = {
    ...structuredClone(Gn),
    ...t,
    appName: typeof t.appName == "string" ? t.appName.trim().slice(0, 30) : "",
    depths: { ...Gn.depths, ...t.depths ?? {}, ledger: t.depths?.ledger ?? Gn.depths.ledger },
    ball: { ...Gn.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((s) => nc(s).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel",
    statusBarFix: typeof t.statusBarFix == "boolean" ? t.statusBarFix : !0,
    genericCaps: { ...As, ...t.genericCaps ?? {} },
    subApi: {
      ...structuredClone(lu),
      ...t.subApi ?? {},
      presets: Array.isArray(t.subApi?.presets) ? t.subApi.presets.map(Um) : [],
      // 旧版本里的「酒馆连接配置」来源已删除，按关闭处理
      source: ["off", "main", "preset"].includes(t.subApi?.source) ? t.subApi.source : "off"
    },
    cardCollapsed: {
      depths: t.cardCollapsed?.depths ?? !0,
      subApi: t.cardCollapsed?.subApi ?? !0,
      genericCaps: t.cardCollapsed?.genericCaps ?? !0,
      accountFix: t.cardCollapsed?.accountFix ?? !0,
      rolesDebug: t.cardCollapsed?.rolesDebug ?? !0,
      live: t.cardCollapsed?.live ?? !0,
      statusBar: t.cardCollapsed?.statusBar ?? !0,
      auditDebug: t.cardCollapsed?.auditDebug ?? !0,
      manualDebug: t.cardCollapsed?.manualDebug ?? !0,
      injectionDebug: t.cardCollapsed?.injectionDebug ?? !0,
      formatDebug: t.cardCollapsed?.formatDebug ?? !0
    },
    live: Gx(t.live, t.subApi)
  };
  e[wi] = n, f.settings = n, f.packs = Bi(n.customPacks);
}
function Gx(e, t) {
  const n = e ?? {}, s = (c, d, A, p) => {
    const z = Math.round(Number(c));
    return Number.isFinite(z) ? Math.max(d, Math.min(A, z)) : p;
  }, r = n.aiOn === void 0 && n.source === "ai";
  let i = typeof n.library == "boolean" ? n.library : Ot.library;
  const o = typeof n.aiOn == "boolean" ? n.aiOn : r;
  !i && !o && (i = !0);
  let l = n.api === "preset" || n.api === "main" ? n.api : Ot.api, a = typeof n.presetId == "string" ? n.presetId : "";
  return r && t?.source === "preset" && (l = "preset", a = String(t.presetId ?? "")), {
    optIn: typeof n.optIn == "boolean" ? n.optIn : Ot.optIn,
    injectToAI: typeof n.injectToAI == "boolean" ? n.injectToAI : Ot.injectToAI,
    library: i,
    aiOn: o,
    api: l,
    presetId: a,
    ratio: r ? 100 : Math.round(s(n.ratio, 10, 100, Ot.ratio) / 10) * 10,
    freq: s(n.freq, 1, 10, Ot.freq),
    total: Vc(n.total ?? Ot.total)
  };
}
function be() {
  ve().extensionSettings[wi] = /* @__PURE__ */ ue(f.settings), ve().saveSettingsDebounced(), f.packs = Bi(f.settings.customPacks);
}
function Kx(e, t, n = f.settings.subApi.presetId) {
  const s = f.settings.subApi.presets.find((r) => r.id === n);
  s && Vm(s, e, t) && be();
}
function qx(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = nc(t);
  if (n.length) return n;
  const s = t;
  return Bi([]).some((r) => r.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (f.settings.customPacks = [...f.settings.customPacks.filter((r) => r.id !== s.id), s], be(), []);
}
function Yx(e) {
  f.settings.customPacks = f.settings.customPacks.filter((t) => t.id !== e), be();
}
function lt() {
  const e = tt()[Lc];
  return !e || Array.isArray(e) ? {} : e;
}
function Pn(e) {
  tt()[Lc] = e, Ge();
}
function yn(e) {
  const t = [];
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    if (o.is_user || o.is_system) continue;
    const l = o.extra?.rlzc?.ledger;
    if (!Array.isArray(l)) continue;
    const a = [o.send_date, o.gen_finished].map((c) => c instanceof Date ? c.getTime() : Date.parse(String(c ?? ""))).find((c) => Number.isFinite(c));
    for (const c of l) t.push({ e: { ...c, mesIndex: i, ts: a }, pos: i, g: 0, seq: 0 });
  }
  for (const { pos: i, seq: o, ...l } of Ov(e))
    t.push({ e: { ...l, mesIndex: i, ts: gl(l.at) }, pos: i < 0 ? Number.MAX_SAFE_INTEGER : i, g: o === void 0 ? 1 : 2, seq: o ?? 0 });
  t.sort((i, o) => i.pos - o.pos || i.g - o.g || i.seq - o.seq);
  const n = t.map((i) => i.e), r = (lt().adjust ?? []).map((i) => ({
    delta: i.amount,
    source: `手动：${i.note}`,
    type: "manual",
    at: i.at,
    mesIndex: -1,
    ts: i.ts ?? gl(i.at)
  }));
  return sg(ng(n, r));
}
function Tt(e) {
  const t = lt();
  if (t.init != null) return { value: t.init.value, source: t.init.source };
  const n = /<状态栏>([\s\S]*?)<\/状态栏>/;
  for (let s = e.length - 1; s >= 0; s--) {
    const r = e[s];
    if (r.is_user || !r.mes) continue;
    const i = n.exec(r.mes);
    if (!i) continue;
    const o = Dc(i[1]);
    if (o !== null) {
      const l = nt(r.send_date ?? r.gen_finished ?? void 0);
      return Pn({ ...t, init: { value: o, source: "状态栏读取", at: l } }), { value: o, source: "状态栏读取" };
    }
  }
  return { value: 1e3, source: "默认值" };
}
function at(e = Z(), t = e.length) {
  const n = lt().fix?.level;
  return n && ["D", "C", "B", "A", "S"].includes(n) ? n : Oc(e, t) ?? "D";
}
function Jx(e) {
  if (!(lt().init != null || f.ledger.length > 0)) return "";
  const s = Tt(e), r = bn(s.value, f.ledger), i = at(e), o = Mt[i], l = bs(s.value, f.ledger, o), a = og(r, l, i, o), c = Se();
  return c?.status === "active" && c.live ? Gg(a, eo(e, c.id)) : a;
}
function Cl(e, t = !0) {
  const n = Z(), s = n[e];
  if (!s || s.is_user) return;
  const r = s.mes ?? "", i = nt(s.send_date ?? s.gen_finished ?? void 0), o = [], l = new RegExp(Th.source, "g");
  let a;
  for (; (a = l.exec(r)) !== null; ) {
    const d = Jm(a[1]);
    d && o.push({ delta: d.delta, source: d.source, type: "tag", at: i });
  }
  const c = t ? wr(r) : null;
  if (c && f.pack && !f.pack.rest) {
    const d = {
      结果: c.result ?? "",
      评价: c.rating ?? "",
      ...c.fields
    }, A = at(n, e), p = Tt(n), z = bn(p.value, f.ledger), w = !!f.session?.clearance, x = tg(f.pack.level, A, d, z, w, f.pack.name);
    if (x.warn) {
      s.extra = s.extra ?? {};
      const _ = s.extra.rlzc ?? { phase: "", round: 0, injected: [] };
      s.extra.rlzc = et({ ..._, settleWarn: x.warn });
    }
    if (x.delta !== 0) {
      const _ = { delta: x.delta, source: x.source, type: "settle", at: i };
      x.clearWin && (_.clear = !0), o.push(_);
    }
  }
  if (o.length || s.extra?.rlzc?.ledger?.length) {
    s.extra = s.extra ?? {};
    const d = s.extra.rlzc ?? { phase: "", round: 0, injected: [] }, A = [...o, ...(d.ledger ?? []).filter((p) => p.type === "tip")];
    s.extra.rlzc = et({ ...d, ledger: A.length ? A : void 0 }), Ge();
  }
  f.ledger = yn(Z());
}
function Zx(e, t) {
  const n = lt(), s = nt(void 0), r = [...n.adjust ?? [], { amount: e, note: t, at: s, ts: Date.now() }];
  Pn({ ...n, adjust: r }), f.ledger = yn(Z());
}
function Xx(e, t) {
  Zx(e, t);
}
function Qx(e) {
  const t = lt(), n = nt(void 0);
  Pn({ ...t, init: { value: e, source: "手动设置", at: n } }), f.ledger = yn(Z());
}
function ev(e, t) {
  if (!e && !t) return;
  const n = lt(), s = Z(), r = nt(void 0);
  Pn({ ...n, fix: { level: e, rank: t, at: r, afterIndex: s.length - 1 } });
}
function Se() {
  return cg(tt()[it]);
}
function kn() {
  const e = tt(), t = Array.isArray(e[it]?.declined) ? e[it].declined : [], n = Array.isArray(e[xl]) ? e[xl] : [];
  return [.../* @__PURE__ */ new Set([...n, ...t])];
}
function tv(e) {
  const t = tt(), n = [...kn().filter((s) => s !== e), e];
  t[it] = { ...t[it] ?? {}, declined: n }, Ge();
}
function ws() {
  const e = tt()[it]?.dropped;
  return Array.isArray(e) ? e : [];
}
function au(e) {
  const t = tt(), n = [.../* @__PURE__ */ new Set([...ws(), ...e])];
  t[it] = { ...t[it] ?? {}, dropped: n }, Ge();
}
function gn(e) {
  const t = tt(), n = kn(), s = ws(), r = { ...n.length ? { declined: n } : {}, ...s.length ? { dropped: s } : {} };
  e ? t[it] = { ...JSON.parse(JSON.stringify(e)), ...r } : n.length || s.length ? t[it] = r : delete t[it], Ge();
}
function io(e) {
  const t = Se();
  t && (e(t), gn(t), _e());
}
function cu(e) {
  const t = Z();
  return (e === "swipe" || e === "continue") && $e(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function rr(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = Rc(t, f.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = cc(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? vg(e, n, s) : null };
}
function _e() {
  const e = Z();
  let t = Se();
  if (t) {
    const s = JSON.stringify(t);
    if (!dg(e, t))
      yu(t.id), gn(null), ze("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const r = rr(e, t);
      r.progress && (t.status = r.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && gn(t);
    }
  }
  const n = rr(e, t);
  f.session = n.session, f.pack = n.pack, f.progress = n.progress, f.audit = n.audit, f.subLine = hu(e, n.progress), Bv(e, n.session), f.ledger = yn(e), f.pendingEntries = n.session?.status === "active" ? [] : uv(e), f.tick++, ys(), lv(n.session);
}
function uu() {
  if (f.session)
    return Fc(f.session, f.progress?.rolesFromChat);
}
function ir() {
  for (const e of Wh) Lt(e, "", 0, !1);
}
let es = -1;
function nv(e) {
  const t = cu(e), n = Se(), { pack: s, progress: r, audit: i } = rr(t, n), o = n ? Fc(n, r?.rolesFromChat) : void 0, l = _s() && !!r, a = l ? _r(t, r.entryIndex) : null, c = s ? Yh(s, r, n, {
    roles: o,
    briefing: n?.briefing,
    panelLimit: r?.panel?.limit,
    audit: i ?? void 0,
    subNext: l ? _m(t, r.entryIndex) : void 0,
    stateText: a ? Sc(s, a.state) : void 0
  }) : fs;
  ir();
  const d = f.settings.depths;
  c.token && Lt(uc, c.token, d.token, !0), c.progress && Lt(dc, c.progress, d.progress, !1), c.turn && Lt(Ac, c.turn, d.turn, !1), c.state && Lt(fc, c.state, d.progress, !1);
  const A = lt();
  let p = Jx(t);
  if (A.fix) {
    const x = ig(A.fix);
    x && (p = p ? `${p}
${x}` : x);
  }
  const z = Ke();
  if (z.hints.length) {
    const x = z.hints.map(Rx).join("");
    p = p ? `${p}
${x}` : x, z.hints.some((_) => !_.sent) && (z.hints = z.hints.map((_) => ({ ..._, sent: !0 })), It(z));
  }
  if (p && Lt(pc, p, d.ledger, !1), f.settings.live.injectToAI) {
    const x = Om(go(/* @__PURE__ */ new Set(), t));
    x && Lt(hc, x, d.live, !1);
  }
  const w = nm(t) ? tm : "";
  w && Lt(mc, w, d.format, !1), f.lastInjection = w ? { ...c, format: w } : c, es = t.length, ks("注入", e, c);
}
const _i = /* @__PURE__ */ new Set();
async function sv() {
  const e = Z(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = Dh(n.mes);
  if (!s) return;
  const r = Se();
  if (!r || r.status !== "active" || r.manual.some((c) => c.kind === "skip" && c.atIndex === t)) return;
  const i = `${Kt()}:${t}:${n.mes}`;
  if (_i.has(i)) return;
  _i.add(i);
  const { pack: o, progress: l } = rr(e, r);
  if (!o || !l || l.ended) return;
  const a = Rh(o, l.phase, l.round, s);
  a && await Yt(`是否跳到${s}？（${a.label}）`) && (r.manual.push({ kind: "skip", atIndex: t, targetPhase: a.phase, targetRound: a.round }), gn(r));
}
async function rv(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      ir();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await sv(), await kv(s), nv(s);
  } catch (r) {
    console.error("[rlzc] 拦截器出错", r), ir();
  }
}
const hs = /* @__PURE__ */ new Set();
function wn() {
  const e = Se();
  if (!e || e.status !== "ended") return 0;
  const t = f.progress?.endIndex;
  return t !== void 0 ? t + 1 : e.entryIndex + 1;
}
function oo(e, t) {
  return jc(e, wn(), t, ws());
}
let iv = 0, Ln = null;
function du(e) {
  const { index: t, info: n, pack: s } = e, r = Kt(), i = `${r}:${t}:${n.name}`;
  if (hs.has(i) || Se()?.status === "active") return;
  hs.add(i);
  const l = $r(s ?? {}, f.settings.live.optIn);
  Ln = e, f.entryCard = {
    id: ++iv,
    key: i,
    chatId: r,
    index: t,
    name: s?.name ?? n.name,
    level: s ? s.rest ? "—" : s.level : In(n),
    unknown: !s,
    liveShow: l.show,
    live: l.checked
  };
}
function zs() {
  const e = f.entryCard;
  e && (hs.delete(e.key), f.entryCard = null, Ln = null);
}
function ov(e) {
  f.entryCard && (f.entryCard.live = e);
}
function ms() {
  f.entryCard = null, Ln = null;
}
function El() {
  const e = f.entryCard, t = Ln;
  ms(), !(!e || !t || Kt() !== e.chatId) && (tv(qt(t.index, t.info.name)), _e());
}
function Ml() {
  const e = f.entryCard, t = Ln;
  if (ms(), !e || !t) return;
  if (Kt() !== e.chatId) {
    hs.delete(e.key);
    return;
  }
  const { index: n, info: s } = t;
  e.liveShow && lo(e.live);
  const r = Nn(Z(), n, f.packs, oo(Z(), n));
  if (!r || r.info.name !== s.name) {
    ze("warning", "入场消息已变化，未启用。");
    return;
  }
  if (Se()?.status === "active") return;
  const i = { ...s };
  t.pack || (i.rounds = br(s.limit, In(s), f.settings.genericCaps).rounds), po(t.pack ?? yr(i, f.settings.genericCaps), n, i, e.liveShow && e.live);
}
function lo(e) {
  f.settings.live.optIn !== e && (f.settings.live.optIn = e, be());
}
function ao(e = Z()) {
  for (let t = wn(); t < e.length; t++) if ($e(e[t])) return t;
  return -1;
}
function co() {
  const e = Z(), t = ao(e);
  return t < 0 ? "" : `${t}${e[t].swipe_id ?? ""}${e[t].mes ?? ""}`;
}
let uo = "";
function Ao() {
  uo = co();
  const e = pg(Z(), Se(), kn(), f.packs, wn());
  e && du(e);
}
function Au() {
  const e = f.entryCard;
  e && Nn(Z(), e.index, f.packs, oo(Z(), e.index))?.info.name !== Ln?.info.name && zs();
}
function fo() {
  Se()?.status !== "active" && (Au(), Ao());
}
const js = sx(() => {
  !rx() && co() !== uo && fo();
});
function lv(e) {
  e?.status === "active" ? js.stop() : js.running || (uo = co(), js.start());
}
function av(e) {
  _e();
  const t = ao();
  f.entryCard && (e === t || e === f.entryCard.index) && zs(), e === t && Ao();
}
function po(e, t, n, s = !1) {
  const r = Z(), i = r[t], o = Se();
  o && Dv(o);
  const l = ag(e, t, n), a = kt();
  if (a.corridor.on && (a.corridor.on = !1, gs(a, a.corridor.show, mn.enterOff)), s && !e.disableLive && (l.live = !0, gs(a, l.id, mn.instanceOn)), On(a), !e.rest) {
    const d = Tt(r);
    bs(d.value, f.ledger, Mt[at(r)]) && (l.clearance = !0);
  }
  ms(), i.extra = i.extra ?? {};
  const c = i.extra.rlzc?.format;
  i.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: l.id, ...c ? { format: c } : {} }, gn(l), Rv(l, e, t), _e(), f.progress && (i.extra.rlzc.injected = et(f.progress.perMessage[t]?.events ?? [])), Ge(), ze("success", `已进入副本《${e.name}》。`);
}
async function cv(e) {
  const t = f.packs.find((o) => o.id === e);
  if (!t) return;
  const n = fu();
  if (n < 0) {
    ze("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  if (Se()?.status === "active" && !await Yt("当前已有进行中的副本，确定要替换吗？")) return;
  const r = $r(t, f.settings.live.optIn), i = await am(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`, r.show ? { label: "开启直播", checked: r.checked } : null);
  i.ok && (r.show && lo(i.checked), po(t, n, kr(Z()[n].mes) ?? { name: t.name }, r.show && i.checked));
}
function fu(e = Z()) {
  let t = e.length - 1;
  for (; t >= 0 && !$e(e[t]); ) t--;
  return t;
}
function ho(e = Z()) {
  return fg(e, f.packs, wn(), kn(), ws());
}
function uv(e) {
  return ho(e).map(({ index: t, info: n, pack: s }) => {
    const r = $r(s ?? {}, f.settings.live.optIn);
    return {
      key: qt(t, n.name),
      index: t,
      name: s?.name ?? n.name,
      level: s ? s.rest ? "—" : s.level : In(n),
      unknown: !s,
      liveShow: r.show,
      live: r.checked
    };
  });
}
function dv(e, t) {
  const n = ho().find((o) => qt(o.index, o.info.name) === e);
  if (!n) {
    ze("warning", "这条副本信息已不存在。"), _e();
    return;
  }
  if (Se()?.status === "active") return;
  const s = fu();
  if (s < 0) return;
  const r = $r(n.pack ?? {}, f.settings.live.optIn);
  r.show && lo(t);
  const i = { ...n.info };
  n.pack || (i.rounds = br(i.limit, In(i), f.settings.genericCaps).rounds), zs(), po(n.pack ?? yr(i, f.settings.genericCaps), s, i, r.show && t);
}
function Av(e) {
  const t = Z(), n = ho(t).find((o) => qt(o.index, o.info.name) === e);
  if (!n) {
    ze("warning", "这条副本信息已不存在。"), _e();
    return;
  }
  if (n.pack) return;
  let s = "";
  for (let o = n.index; o >= 0 && !s; o--)
    $e(t[o]) && kr(String(t[o].mes ?? ""))?.name === n.info.name && (s = ou(String(t[o].mes ?? "")));
  const r = _h(n.info, f.settings.genericCaps, `saved_${Date.now().toString(36)}`, s);
  f.settings.customPacks = [...f.settings.customPacks, r], be();
  const i = kn().filter((o) => o.slice(o.indexOf(":") + 1) === n.info.name && Number(o.slice(0, o.indexOf(":"))) >= wn());
  au(i.length ? i : [e]), _e(), ze("success", `叮咚～《${r.name}》已收录`);
}
function fv(e) {
  const t = e.slice(e.indexOf(":") + 1), n = wn(), s = kn().filter((r) => r.slice(r.indexOf(":") + 1) === t && Number(r.slice(0, r.indexOf(":"))) >= n);
  au(s.length ? s : [e]), _e();
}
function Er(e) {
  io((t) => t.manual.push(e));
}
function Mr() {
  return Z().length - 1;
}
async function Tl() {
  const e = f.progress;
  if (!(!e || e.ended || !f.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      ze("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await Yt(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (Er({ kind: "skip", atIndex: Mr(), targetPhase: e.phase.id, targetRound: e.phase.cap }), ze("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function Il() {
  if (!(!f.session || f.progress?.ended) && await Yt("确定要手动结束当前副本吗？")) {
    if (f.session.live) {
      const e = kt();
      gs(e, f.session.id, mn.instanceOff), On(e);
    }
    Er({ kind: "end", atIndex: Mr() });
  }
}
function pv(e) {
  Er({ kind: "setPhase", atIndex: Mr(), phase: e });
}
function hv(e) {
  Er({ kind: "setRound", atIndex: Mr(), round: e });
}
function mv(e) {
  io((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function gv(e) {
  io((t) => t.manual.splice(e, 1));
}
async function Nl() {
  f.session && await Yt("确定要删除当前副本会话吗？（不会改动聊天记录）") && (yu(f.session.id), gn(null), _e());
}
function _s() {
  return f.settings.subApi.source !== "off";
}
function pu() {
  const e = f.settings.subApi, t = Math.max(5, Number(e.timeoutSec) || 60) * 1e3;
  if (e.source === "main") return { source: "main", timeoutMs: t };
  if (e.source === "preset") {
    const n = e.presets.find((s) => s.id === e.presetId);
    return n ? { source: "preset", preset: n, timeoutMs: t } : null;
  }
  return null;
}
function xv(e) {
  return e.source === "main" ? "跟随主API" : `自设API「${e.preset?.name}」`;
}
function hu(e, t) {
  if (!_s() || !t || t.ended) return "";
  if (f.subBusy) return "副本记录：整理中…";
  const n = Object.keys(t.perMessage).map(Number);
  if (!n.length) return "";
  const s = Math.max(...n);
  if (e[s]?.extra?.rlzc?.sub?.skipped) return `第${t.perMessage[s].round}轮状态未更新`;
  const r = _r(e, t.entryIndex);
  return r && t.perMessage[r.index] ? `副本记录：已更新（第${t.perMessage[r.index].round}轮）` : "副本记录：尚未整理";
}
let ts = null;
const mo = /* @__PURE__ */ new Set();
function xn(e) {
  return km(Kt(), e, Z()[e]);
}
function Pl(e) {
  f.subBusy = e, f.subLine = hu(Z(), f.progress);
  const t = "rlzc-sub-busy";
  let n = document.getElementById(t);
  if (e && f.settings.subApi.wait) {
    const s = document.getElementById("rightSendForm");
    !n && s && (n = document.createElement("small"), n.id = t, n.textContent = "整理中…", n.title = "回廊种菜系统：正在检测本轮的副本事件", n.style.cssText = "align-self:center;margin:0 6px;opacity:.75;white-space:nowrap;font-size:calc(var(--mainFontSize, 15px) * 0.8);line-height:1.2;", s.prepend(n));
  } else n?.remove();
}
function mu(e, t, n) {
  if (xn(e) !== t) return;
  const s = Z()[e];
  s?.extra?.rlzc && (s.extra.rlzc = et({ ...s.extra.rlzc, sub: n }), Ge(), _e());
}
function vv(e, t) {
  const n = Z(), s = f.progress, r = f.pack, i = n[e], o = s?.perMessage[e];
  if (!r || !s || !o || !i) return null;
  const l = uu(), a = (I) => ({ ...I, text: tr(I.text, r, l), if: I.if ? tr(I.if, r, l) : void 0 }), c = vm(r, i.extra?.rlzc?.injected ?? []).map(a), d = (s.next?.events ?? []).filter((I) => I.if).map(a);
  if (!wm({
    enabled: _s(),
    active: !s.ended && f.session?.status === "active",
    type: t,
    saveMode: f.settings.subApi.saveMode,
    hasEvents: c.length > 0,
    hasNextConditional: d.length > 0
  })) return null;
  const p = xn(e);
  if (mo.has(p)) return null;
  const z = r.phases.find((I) => I.id === o.phase), w = _r(n.slice(0, e), s.entryIndex), x = f.session ? Ke().books[f.session.id] : void 0, _ = xm({
    pack: r,
    phaseName: z?.name ?? o.phase,
    round: o.round,
    prevState: w?.state ?? null,
    events: c,
    nextConditional: d,
    text: String(i.mes ?? ""),
    markets: x ? $x(x, f.market.results) : []
  }), S = ve().substituteParams, T = S ? { system: S(_.system), user: S(_.user) } : _, M = bv(e, p, o.round, T);
  return ts = { key: p, index: e, promise: M }, M.finally(() => {
    ts?.key === p && (ts = null);
  }), M;
}
async function bv(e, t, n, s) {
  Pl(!0);
  try {
    let r = 2;
    for (; ; ) {
      const i = pu();
      if (!i) throw new Error("副本事件检测没有设置好：选了「自设API」时需要先选一个接口预设");
      const o = Date.now();
      try {
        const l = await zm((a) => qi(i, a), s, r);
        mu(e, t, { ...l, ms: Date.now() - o, via: xv(i), at: (/* @__PURE__ */ new Date()).toISOString() }), mo.add(t);
        return;
      } catch (l) {
        if (xn(e) !== t) return;
        const a = zr(l), c = vi(l), d = c === a ? String(l?.message ?? l).slice(0, 200) : "";
        if (ks("副本事件检测失败", c, l), !f.settings.subApi.wait) {
          ze("warning", `第${n}轮事件检测失败：${c}，已沿用上一轮状态。`), Qr(e, t, c);
          return;
        }
        if (await yv(n, c, d) === "skip") {
          Qr(e, t, c);
          return;
        }
        r = 0;
      }
    }
  } catch (r) {
    ze("error", String(r?.message ?? r)), Qr(e, t, "其他");
  } finally {
    Pl(!1);
  }
}
function Qr(e, t, n) {
  mo.add(t), mu(e, t, { skipped: !0, error: n, at: (/* @__PURE__ */ new Date()).toISOString() });
}
async function yv(e, t, n) {
  const s = ve();
  if (!s.Popup || !s.POPUP_TYPE)
    return window.confirm(`第${e}轮事件检测失败：${t}。重试吗？取消则这轮先跳过。`) ? "retry" : "skip";
  const r = f.settings.subApi, i = document.createElement("div"), o = document.createElement("h3");
  o.textContent = `第${e}轮事件检测失败`;
  const l = document.createElement("p");
  l.textContent = `原因：${t}`;
  const a = document.createElement("small");
  a.textContent = n, a.style.opacity = "0.7", n || (a.style.display = "none");
  const c = document.createElement("div");
  c.style.cssText = "display:none;margin-top:10px;";
  const d = document.createElement("label");
  d.textContent = "换成：";
  const A = document.createElement("select");
  A.className = "text_pole";
  const p = [{ value: "", text: "请选择…" }];
  for (const x of r.presets) r.source === "preset" && x.id === r.presetId || p.push({ value: `preset:${x.id}`, text: `自设API：${x.name}` });
  r.source !== "main" && p.push({ value: "main", text: "跟随主API" });
  for (const x of p) {
    const _ = document.createElement("option");
    _.value = x.value, _.textContent = x.text, A.append(_);
  }
  d.append(A), c.append(d), i.append(o, l, a, c);
  let z;
  A.addEventListener("change", () => {
    const x = A.value;
    x && (x === "main" ? r.source = "main" : (r.source = "preset", r.presetId = x.slice(7)), be(), z.complete(s.POPUP_RESULT.CUSTOM1));
  }), z = new s.Popup(i, s.POPUP_TYPE.TEXT, "", {
    okButton: "重试",
    cancelButton: "这轮先跳过",
    customButtons: [
      {
        text: "换一个接口",
        action: () => {
          c.style.display = "", A.focus();
        }
      }
    ]
  });
  const w = await z.show();
  return w === s.POPUP_RESULT.AFFIRMATIVE || w === s.POPUP_RESULT.CUSTOM1 ? "retry" : "skip";
}
async function kv(e) {
  const t = ts;
  if (!(!t || !f.settings.subApi.wait) && !((e === "swipe" || e === "regenerate" || e === "continue") && t.index >= cu(e).length))
    try {
      await t.promise;
    } catch {
    }
}
function wv(e, t) {
  const n = Z(), s = n[e];
  if (!$e(s)) return;
  zv(e, t);
  const r = Se();
  if (t !== "first_message" && zs(), !r || r.status === "ended") {
    if (Nn(n, e, f.packs, oo(n, e))) {
      const c = Ag(n, f.packs, wn(), e, kn(), ws());
      c && du(c);
    }
    if (t === "first_message") return;
    _e(), Cl(e, !1), Ol(e), ti(e, t), Ll(), Fl();
    return;
  }
  if (t === "first_message") return;
  let i = null;
  _s() && (ns = e);
  const o = ic(s.mes);
  o && (r.roles = { ...r.roles ?? {}, ...o }), gn(r), _e();
  const l = f.progress?.perMessage[e];
  if (l && f.pack) {
    const c = f.pack.phases.find((x) => x.id === l.phase), d = {
      phase: c?.name ?? l.phase,
      round: l.round,
      injected: es === e ? f.lastInjection.injected : l.events
    }, A = f.pack.time;
    A.type === "clock" && c?.clock && !c.night && !c.frozen && (d.clock = lc(A.dayStart, A.minutesPerRound, l.round));
    const p = es === e ? f.lastInjection.limit : l.limit?.text ? { text: l.limit.text, minutes: l.limit.minutes, total: l.limit.total } : void 0;
    p && (d.limit = p);
    const z = s.extra?.rlzc?.entry;
    z && (d.entry = z), s.extra?.rlzc?.format && (d.format = s.extra.rlzc.format), es === e && f.lastInjection.skipped?.length && (d.skippedEvents = f.lastInjection.skipped), t === "continue" && s.extra?.rlzc?.sub && (d.sub = s.extra.rlzc.sub), t === "continue" && s.extra?.rlzc?.live && (d.live = s.extra.rlzc.live);
    const w = (s.extra?.rlzc?.ledger ?? []).filter((x) => x.type === "tip");
    t === "continue" && w.length && (d.ledger = w), s.extra = s.extra ?? {}, s.extra.rlzc = et(d), Ge(), _e(), i = vv(e, t);
  }
  ns >= 0 && (ns = -1, i || _e());
  const a = wr(s.mes);
  if (a && ze("info", `副本结算：${a.result ?? "—"}${a.rating ? `，评价 ${a.rating}` : ""}`), Cl(e), Ol(e), i) {
    const c = xn(e);
    i.then(() => {
      xn(e) === c && ti(e, t);
    });
  } else ti(e, t);
  Ll(), Fl();
}
function zv(e, t) {
  if (t === "first_message" || t === "quiet" || t === "impersonate") return;
  const n = Z(), s = n[e];
  if (!$e(s) || vc(n, e)) return;
  const r = Hi(s.mes);
  let i;
  if (r.kind !== "ok") {
    i = { kind: r.kind, detail: r.detail };
    const a = f.settings.statusBarFix ? em(s.mes) : null;
    a && (s.mes = a.text, Array.isArray(s.swipes) && s.swipe_id !== void 0 && s.swipe_id < s.swipes.length && (s.swipes[s.swipe_id] = a.text), i.fixed = !0, i.from = a.from, om(), lm(e), Bs(e), ze("info", "已修正本轮状态栏标签"));
  }
  const o = s.extra?.rlzc;
  if (!i && (t === "continue" || !o?.format)) return;
  s.extra = s.extra ?? {};
  const l = o ?? { phase: "", round: 0, injected: [] };
  s.extra.rlzc = et({ ...l, format: i }), Ge();
}
function Ll() {
  const e = lt();
  e.fix && Pn({ ...e, fix: void 0 });
}
function Ol(e) {
  const t = Z(), n = t[e];
  if (!n || n.is_user || !n.mes) return;
  const r = /<状态栏>([\s\S]*?)<\/状态栏>/.exec(n.mes);
  if (!r) return;
  const i = Dc(r[1]);
  if (i === null) return;
  const o = Tt(t), l = (c) => c.mesIndex === e && (c.type === "tip" || c.type === "bet" && /^赌票/.test(c.source)), a = bn(o.value, yn(t).filter((c) => !l(c)));
  i !== a && (ks(`积分核对不符（楼层${e}）：状态栏 ${i}，账本 ${a}`), n.extra?.rlzc && (n.extra.rlzc = et({ ...n.extra.rlzc, ledgerMismatch: { status: i, ledger: a } }), Ge()));
}
let Ps = null;
function Dl() {
  js.stop(), Ps && clearTimeout(Ps), _i.clear(), zs(), hs.clear(), es = -1, ns = -1, f.chatId = Kt(), f.debugUnlocked = !1, f.lastInjection = fs, ir(), tx(), Mv(), f.ledger = yn(Z()), _e(), Ao();
  const e = f.chatId;
  Ps = setTimeout(() => {
    Ps = null, Kt() === e && fo();
  }, 300), or();
}
function ei(e) {
  _e(), Au(), e !== void 0 && e === ao() && fo();
}
function gu() {
  return f.settings.panelDisplay === "statusbar" ? hn.filter((e) => e !== "副本") : hn;
}
function Bs(e, t = !1) {
  wc(e, gu(), !1, t);
}
function or(e = !1, t = !1) {
  pm(gu(), e, t);
}
function _v(e) {
  f.settings.panelDisplay !== e && (f.settings.panelDisplay = e, be(), or(!0));
}
const Us = Qg;
function kt() {
  return Og(tt()[Hc]);
}
function On(e) {
  tt()[Hc] = et(e), Ge();
}
function gs(e, t, n) {
  if (!t) return;
  const s = Sr(Z(), e) + 1, r = { id: s, t: "sys", name: "", text: n, amount: 0, net: 0, show: t };
  e.sys = [...e.sys, r].slice(-100), e.seq = s, no([r]);
}
function $v() {
  return "c" + Math.random().toString(36).slice(2, 8) + Date.now().toString(36);
}
function Sv(e) {
  const t = f.session, n = f.progress;
  if (!!t && e > t.entryIndex && (!n?.ended || n.endIndex !== void 0 && e <= n.endIndex)) return t.live && f.pack ? { show: t.id, scope: "instance", pack: f.pack } : null;
  const r = kt();
  return r.corridor.on && r.corridor.show ? { show: r.corridor.show, scope: "corridor", pack: null } : null;
}
function ti(e, t) {
  if (t === "continue" || t === "first_message") return;
  const n = Z(), s = n[e];
  if (!$e(s) || Jt(s)) return;
  const r = Sv(e);
  if (!r) return;
  const i = kt(), { show: o, scope: l, pack: a } = r, c = f.progress, d = s.extra?.rlzc ?? { phase: "", round: 0, injected: [] }, A = Qi(n, o, e), p = d.sub && !d.sub.skipped ? { hype: d.sub.hype, hurt: d.sub.hurt } : void 0, z = l === "instance" && c?.endIndex === e && c.endedBy === "tag" ? wr(s.mes) : null, w = !!z && ["死亡", "阵亡"].includes(String(z.result ?? "").trim()), x = c?.roundsLeft, _ = /<阶段切换>[\s\S]*?<\/阶段切换>/.test(String(s.mes ?? "")), S = new Set((a?.events ?? []).filter((U) => U.kind !== "directive").map((U) => U.id)), T = Cm({
    aiOn: f.settings.live.aiOn,
    roundInShow: A.length + 1,
    freq: f.settings.live.freq,
    phaseSwitch: _,
    hurt: qc(String(s.mes ?? ""), p),
    eventDone: !!d.sub && !d.sub.skipped && (d.sub.events ?? []).some((U) => U.status === "done")
  }), M = Bg({
    show: o,
    scope: l,
    packLevel: a?.level ?? null,
    playerLevel: to(n, e + 1),
    isRest: !!a?.rest,
    prevHeat: A.length ? A[A.length - 1].rec.heat : null,
    roundsInShow: A.length,
    text: String(s.mes ?? ""),
    hasEvents: (d.injected ?? []).some((U) => S.has(U)),
    hasPhaseSwitch: _,
    sub: p,
    isEnd: l === "instance" && !!x && x.y > 0 && x.x < x.y * 0.1,
    phaseId: l === "instance" ? c?.perMessage[e]?.phase : void 0,
    pool: Us.pool,
    templates: Us.templates,
    packDanmaku: a?.danmaku,
    names: Us.names,
    whoNames: Kc(Gc(n, e + 1), String(ve().name1 ?? "")),
    recentTexts: Dg(n.slice(0, e)),
    firstId: Sr(n, i) + 1,
    settle: z ? { died: w, tipsBefore: eo(n.slice(0, e), o) } : void 0,
    awaitAi: T,
    mix: { library: f.settings.live.library, total: f.settings.live.total, ratio: f.settings.live.ratio },
    rand: Math.random
  });
  T && (M.ai = { ok: !1, pending: !0 });
  const I = nt(s.send_date ?? s.gen_finished ?? void 0), P = [...(d.ledger ?? []).filter((U) => U.type !== "tip"), ...Hg(M, I)];
  s.extra = s.extra ?? {}, s.extra.rlzc = et({ ...d, live: M, ledger: P.length ? P : void 0 }), i.seq = Math.max(i.seq, ...M.feed.map((U) => U.id)), On(i), f.ledger = yn(Z()), f.tick++, M.feed.length ? no(M.feed, !0) : ys(), T && Ev(e, M.scope === "instance" ? a?.name : void 0, M.pending?.aiWant);
}
function Cv() {
  const e = f.settings.live, t = Math.max(5, Number(f.settings.subApi.timeoutSec) || 60) * 1e3;
  if (e.api === "main") return { source: "main", timeoutMs: t };
  const n = f.settings.subApi.presets.find((s) => s.id === e.presetId);
  return n ? { source: "preset", preset: n, timeoutMs: t } : null;
}
function Ev(e, t, n) {
  const s = Z(), r = xn(e), i = Cv();
  if (!i) {
    ni(e, r, [], "新弹幕的接口没有设置好", 0);
    return;
  }
  const o = [];
  for (let A = e; A >= 0 && o.length < 2; A--) $e(s[A]) && o.unshift(String(s[A].mes ?? ""));
  const l = Im({
    scene: t ?? "回廊",
    texts: o,
    cast: Kc(Gc(s, e + 1), String(ve().name1 ?? "")),
    samples: Em(Us.pool, 10, Math.random),
    count: n
  }), a = ve().substituteParams, c = a ? { system: a(l.system), user: a(l.user) } : l, d = Date.now();
  Pm((A) => qi(i, A, { temperature: 0.9, maxTokens: Tm(n) }), c, 1, Mm(n)).then((A) => ni(e, r, A, null, Date.now() - d)).catch((A) => {
    ks("AI 弹幕生成失败", A);
    const p = String(A?.message ?? A).slice(0, 120);
    ni(e, r, [], `${zr(A)}：${p}`, Date.now() - d);
  });
}
function ni(e, t, n, s, r) {
  if (xn(e) !== t) return;
  const i = Z(), o = i[e], l = Jt(o);
  if (!l?.pending || !o.extra?.rlzc) return;
  const a = kt(), c = Jc(l, s ? null : n, Sr(i, a) + 1, Math.random), d = s ? 0 : c.feed.filter((p) => p.t === "msg" && n.some((z) => z.text === p.text)).length, A = { ...c, ai: s ? { ok: !1, error: s, ms: r } : { ok: !0, count: d, ms: r } };
  o.extra.rlzc = et({ ...o.extra.rlzc, live: A }), a.seq = Math.max(a.seq, ...A.feed.map((p) => p.id)), On(a), f.tick++, no(A.feed, !0);
}
function Mv() {
  const e = Z();
  let t = !1;
  for (const n of e) {
    const s = Jt(n);
    if (!s?.pending || !n.extra?.rlzc) continue;
    const r = kt(), i = Jc(s, null, Sr(e, r) + 1, Math.random);
    n.extra.rlzc = et({ ...n.extra.rlzc, live: { ...i, ai: { ok: !1, error: "没有等到结果" } } }), r.seq = Math.max(r.seq, ...i.feed.map((o) => o.id)), On(r), t = !0;
  }
  t && Ge();
}
function Tv() {
  const e = kt();
  return f.session?.status === "active" && f.pack ? Ji({ packLevel: f.pack.level, playerLevel: to(Z()), isRest: !!f.pack.rest, heat: 20, rand: 1 }) : e.corridor.viewers ?? 0;
}
function Iv() {
  const e = f.session;
  return e?.status === "active" ? !!e.live : kt().corridor.on;
}
function go(e, t = Z()) {
  const n = f.session, s = n?.status === "active";
  return Yg(
    t,
    kt(),
    {
      inInstance: s,
      instanceLive: !!(s && n?.live),
      instanceShow: n?.id,
      startViewers: Tv(),
      injectToAI: f.settings.live.injectToAI
    },
    e
  );
}
function Nv() {
  const e = f.session, t = go(/* @__PURE__ */ new Set()), n = t.viewers > 0 ? ` · ${t.viewers.toLocaleString("en-US")}人在看` : "";
  if (e?.status === "active") {
    const s = f.pack?.disableLive ? "本副本自带直播玩法" : t.on ? `副本内锁定${n}` : "副本内锁定，回廊可开播";
    return { on: t.on, locked: !0, scope: "instance", note: s };
  }
  return { on: t.on, locked: !1, scope: "corridor", note: t.on ? `回廊直播${n}` : "回廊中可随时开播" };
}
function xu() {
  if (f.session?.status === "active") return !1;
  const e = kt();
  if (e.corridor.on)
    e.corridor.on = !1, gs(e, e.corridor.show, mn.corridorOff);
  else {
    const t = $v();
    e.corridor = {
      on: !0,
      show: t,
      viewers: Ji({ packLevel: null, playerLevel: to(Z()), isRest: !1, heat: 20, rand: 0.9 + Math.random() * 0.2 })
    }, gs(e, t, mn.corridorOn);
  }
  return On(e), f.tick++, ys(), !0;
}
function Pv() {
  return { book: null, results: {}, tickets: [], pending: 0, tables: [], casinoOpen: !0 };
}
function Ke() {
  return jx(tt()[Xc]);
}
function It(e) {
  tt()[Xc] = et(e), Ge();
}
let ns = -1;
function Lv() {
  return [ns, ts?.index ?? -1].filter((e) => e >= 0);
}
function xo(e = Z()) {
  return bn(Tt(e).value, f.ledger);
}
function vu(e) {
  if (lt().init) return;
  const t = Tt(e), n = lt();
  n.init || Pn({ ...n, init: { value: t.value, source: t.source, at: nt(void 0) } });
}
function bu() {
  const e = Se();
  return e?.status === "active" && e.live ? eo(Z(), e.id) : 0;
}
function Tr(e, t, n) {
  if (t.frozen) return { results: {}, tickets: yi(t, {}), rounds: [] };
  let s = { voided: !0, ended: !1 }, r = [], i = {};
  if (n && n.id === t.session) {
    const l = Rc(n, f.packs), a = l ? cc(e, n, l) : null;
    a && (s = {
      ended: a.ended,
      endedBy: a.endedBy,
      endIndex: a.endIndex,
      result: a.settlement?.result,
      rating: a.settlement?.rating
    }, r = _x(e, a.perMessage, a.entryIndex, Lv()), i = a.phaseEnds);
  }
  const o = wx({ markets: t.markets, rounds: r, outcome: s, phaseEnds: i });
  return { results: o, tickets: yi(t, o), rounds: r };
}
function Ov(e) {
  const t = Ke(), n = Se(), s = (i) => e[i] ? nt(e[i].send_date ?? e[i].gen_finished ?? void 0) : void 0, r = [];
  for (const i of Object.values(t.books)) r.push(...Ex(i, Tr(e, i, n).tickets, s));
  for (const i of t.casino.plays)
    r.push({ delta: i.net, source: Vx(i.table, i.label), type: "bet", at: i.at, pos: i.after, seq: i.seq ?? 0 });
  return r;
}
function Dv(e) {
  const t = Ke(), n = t.books[e.id];
  if (!n || n.frozen) return;
  const s = Z(), r = zx(n, Tr(s, n, e).results);
  for (const i of n.tickets) r[i.id].index < 0 && (r[i.id].index = Math.max(s.length, i.after + 1));
  n.frozen = r, It(t);
}
function yu(e) {
  const t = Ke(), n = t.books[e];
  if (!n || n.frozen) return;
  const s = Z().length;
  n.frozen = Object.fromEntries(n.tickets.map((r) => [r.id, { stamp: "refund", index: Math.max(s, r.after + 1) }])), It(t);
}
function Rv(e, t, n) {
  if (t.rest) return;
  const s = Z(), r = _s(), i = Ax({ pack: t, playerLevel: at(s), withEvents: r, rand: Math.random });
  if (!i.length) return;
  const o = px(i, r, Math.random), l = Ke(), a = { session: e.id, packId: t.id, packName: t.name, openedAt: nt(void 0), markets: o.markets, tickets: [] };
  o.plan && (a.plan = o.plan, a.reserve = o.reserve), r && (a.freak = { status: "pending" }), l.books[e.id] = a, It(l), r && Fv(e.id, t, n);
}
function Fv(e, t, n) {
  const s = (c, d) => {
    const A = Ke(), p = A.books[e];
    p && (p.closedAt || p.frozen ? d ? p.freak = { ...c, status: "late" } : p.freak = c : (Object.assign(p, hx(p, d ?? null, Math.random)), p.freak = c), It(A), _e());
  }, r = pu();
  if (!r) {
    s({ status: "failed", error: "副本事件检测没有设置好" });
    return;
  }
  const i = Ix({
    name: t.name,
    level: t.level,
    briefing: ou(String(Z()[n]?.mes ?? "")),
    docs: t.docs
  }), o = ve().substituteParams, l = o ? { system: o(i.system), user: o(i.user) } : i, a = Date.now();
  Px((c) => qi(r, c), l, 1).then((c) => s({ status: "ok", count: c.length, ms: Date.now() - a }, c)).catch((c) => {
    ks("庄家怪盘出题失败", c);
    const d = String(c?.message ?? c).slice(0, 120);
    s({ status: "failed", error: `${zr(c)}：${d}`, ms: Date.now() - a });
  });
}
const Ls = /* @__PURE__ */ new Map();
let Rl = null;
function jv(e) {
  const t = Kt(), n = Rl !== t;
  n && Ls.clear(), Rl = t;
  const s = { win: 0, lose: 0, refund: 0 };
  for (const i of e) {
    const o = i.res?.stamp ?? null, l = Ls.has(i.ticket.id), a = Ls.get(i.ticket.id);
    Ls.set(i.ticket.id, o), !n && l && o && o !== a && s[o]++;
  }
  const r = [s.win ? `兑 ${s.win} 张` : "", s.lose ? `废 ${s.lose} 张` : "", s.refund ? `退 ${s.refund} 张` : ""].filter(Boolean);
  r.length && ze("info", `赌票开奖：${r.join("，")}。`);
}
function Bv(e, t) {
  const n = Ke();
  let s = !1;
  const r = t?.status === "active", i = t ? n.books[t.id] : void 0;
  i && !i.closedAt && !i.frozen && f.progress && xx(f.progress.perMessage, f.progress.entryIndex) && (i.closedAt = nt(void 0), s = !0);
  const o = r ? n.casino.key : t?.status === "ended" ? t.id : "", l = Hx(n.casino, o, Math.random);
  l.changed && (!r || n.casino.tables.length !== 2) && (n.casino.tables = l.tables, n.casino.key = l.key, s = !0), s && It(n);
  const a = [];
  let c = {};
  for (const d of Object.values(n.books)) {
    const A = Tr(e, d, t);
    i && d.session === i.session && (c = A.results);
    for (const p of d.tickets) a.push({ ticket: p, book: d, market: d.markets.find((z) => z.id === p.market), res: A.tickets[p.id] ?? null });
  }
  a.sort((d, A) => (A.ticket.seq ?? 0) - (d.ticket.seq ?? 0)), jv(a), f.market = {
    book: r && i ? i : null,
    results: c,
    tickets: a,
    pending: a.filter((d) => !d.res).length,
    tables: n.casino.tables,
    casinoOpen: !r || !!f.pack?.casino
  };
}
function ku(e, t) {
  const n = Z(), s = f.market.book;
  return su({
    playerLevel: at(n),
    stake: t,
    already: s ? gx(s, e) : 0,
    balance: xo(n),
    lockedTips: bu()
  });
}
function Uv(e, t, n) {
  const s = Se();
  if (!s || s.status !== "active") return "没有进行中的副本";
  const r = Ke(), i = r.books[s.id];
  if (!i || i.frozen) return "本局没有开盘";
  if (i.closedAt) return "已封盘";
  const o = i.markets.find((A) => A.id === e), l = o?.options.find((A) => A.id === t);
  if (!o || !l) return "没有这个盘口";
  if (f.market.results[e]) return "已开奖";
  const a = ku(e, n);
  if (!a.ok) return a.reason ?? "不能下注";
  const c = Z();
  vu(c);
  const d = r.seq + 1;
  return r.seq = d, i.tickets.push({ id: `t${d}`, seq: d, market: e, option: t, stake: n, odds: l.odds, at: nt(void 0), after: c.length - 1 }), o.kind === "ending" && t === "lose" && (r.hints = ki(r.hints, { kind: "betLose", amount: n, after: c.length - 1 })), It(r), _e(), null;
}
function wu(e) {
  const t = Z();
  return su({ playerLevel: at(t), stake: e, already: 0, balance: xo(t), lockedTips: bu() });
}
function Vv(e, t, n) {
  if (!f.market.casinoOpen) return { error: "赌坊只在回廊营业。" };
  const s = Ke();
  if (!s.casino.tables.includes(e)) return { error: "这张桌今晚没开" };
  const r = wu(n);
  if (!r.ok) return { error: r.reason };
  const i = Ux(e, t, n, Math.random);
  if (!i) return { error: "没有这种押法" };
  const o = Z();
  vu(o);
  const l = at(o), a = xo(o), c = o.length - 1, d = s.seq + 1;
  return s.seq = d, s.casino.plays = [
    ...s.casino.plays,
    { id: `g${d}`, seq: d, table: e, bet: t, label: i.label, stake: n, win: i.win, payout: i.payout, net: i.net, result: i.result, at: nt(void 0), after: c }
  ], !i.win && a - n < Mt[l] && (s.hints = ki(s.hints, { kind: "casinoLoss", amount: n, after: c })), i.win && i.net > Qc[l] * 5 && (s.hints = ki(s.hints, { kind: "casinoWin", amount: i.net, after: c })), It(s), _e(), { outcome: i };
}
function Fl() {
  const e = Ke();
  if (!e.hints.length) return;
  const t = Fx(e.hints);
  t.length !== e.hints.length && (e.hints = t, It(e));
}
function Hv() {
  const e = Se(), t = e ? Ke().books[e.id] : void 0;
  return t ? Tr(Z(), t, e).rounds : [];
}
const vo = "M16 16c-2.6-3.4-5-5.2-7.6-5.2a5.2 5.2 0 000 10.4c2.6 0 5-1.8 7.6-5.2s5-5.2 7.6-5.2a5.2 5.2 0 010 10.4c-2.6 0-5-1.8-7.6-5.2z", Wv = { class: "rlzc-entry-kicker" }, Gv = {
  class: "rlzc-entry-inf",
  viewBox: "0 0 32 32",
  "aria-hidden": "true"
}, Kv = ["d"], qv = { class: "rlzc-entry-title" }, Yv = { class: "rlzc-entry-level" }, Jv = { class: "rlzc-entry-name" }, Zv = {
  key: 0,
  class: "rlzc-entry-note"
}, Xv = { class: "rlzc-entry-foot" }, Qv = ["aria-checked"], e0 = { key: 1 }, t0 = { class: "rlzc-entry-actions" }, n0 = /* @__PURE__ */ je({
  __name: "EntryCard",
  setup(e) {
    const t = q(() => f.entryCard);
    return (n, s) => (b(), Fe(hA, {
      name: "rlzc-entry-fade",
      mode: "out-in"
    }, {
      default: wa(() => [
        t.value ? (b(), k("div", {
          key: t.value.id,
          class: Q(["rlzc-entry-card", { "beside-panel": C(f).panelOpen }]),
          role: "dialog",
          "aria-label": "检测到副本"
        }, [
          u("button", {
            class: "rlzc-entry-close",
            type: "button",
            "aria-label": "关闭",
            title: "这次先不处理",
            onClick: s[0] || (s[0] = //@ts-ignore
            (...r) => C(ms) && C(ms)(...r))
          }, "✕"),
          u("div", Wv, [
            (b(), k("svg", Gv, [
              u("path", { d: C(vo) }, null, 8, Kv)
            ])),
            s[4] || (s[4] = u("span", null, "检测到副本", -1))
          ]),
          u("div", qv, [
            u("span", Yv, $(t.value.level), 1),
            u("span", Jv, $(t.value.name), 1)
          ]),
          t.value.unknown ? (b(), k("div", Zv, "未收录，将使用通用副本包")) : B("", !0),
          u("div", Xv, [
            t.value.liveShow ? (b(), k("button", {
              key: 0,
              type: "button",
              class: Q(["rlzc-entry-live", { on: t.value.live }]),
              role: "switch",
              "aria-checked": t.value.live,
              onClick: s[1] || (s[1] = (r) => C(ov)(!t.value.live))
            }, [
              u("span", {
                class: Q(["rlzc-toggle danger", { on: t.value.live }])
              }, [...s[5] || (s[5] = [
                u("span", null, null, -1)
              ])], 2),
              s[6] || (s[6] = u("span", null, "直播", -1))
            ], 10, Qv)) : (b(), k("span", e0)),
            u("div", t0, [
              u("button", {
                type: "button",
                class: "rlzc-btn ghost",
                onClick: s[2] || (s[2] = //@ts-ignore
                (...r) => C(El) && C(El)(...r))
              }, "不是"),
              u("button", {
                type: "button",
                class: "rlzc-btn rlzc-entry-go",
                onClick: s[3] || (s[3] = //@ts-ignore
                (...r) => C(Ml) && C(Ml)(...r))
              }, "进入")
            ])
          ])
        ], 2)) : B("", !0)
      ]),
      _: 1
    }));
  }
}), s0 = ["title"], r0 = {
  key: 0,
  class: "rlzc-ball-ring",
  viewBox: "0 0 48 48",
  "aria-hidden": "true"
}, i0 = ["stroke-dasharray"], o0 = {
  class: "rlzc-ball-inf",
  viewBox: "0 0 32 32",
  "aria-hidden": "true"
}, l0 = ["d"], a0 = {
  key: 1,
  class: "rlzc-ball-live",
  title: "直播中"
}, c0 = {
  key: 2,
  class: "rlzc-ball-badge",
  title: "待开奖赌票"
}, si = 48, u0 = /* @__PURE__ */ je({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ ge({ x: 0, y: 0 });
    let n = null, s = !1;
    function r(w, x) {
      const _ = window.innerWidth - si - 4, S = window.innerHeight - si - 4;
      return { x: Math.min(Math.max(4, w), _), y: Math.min(Math.max(4, x), S) };
    }
    function i() {
      const w = f.settings.ball;
      t.value = r(w.x ?? window.innerWidth - si - 12, w.y ?? Math.round(window.innerHeight * 0.35));
    }
    function o(w) {
      w.currentTarget.setPointerCapture(w.pointerId), s = !1, n = { id: w.pointerId, dx: w.clientX - t.value.x, dy: w.clientY - t.value.y, moved: !1, sx: w.clientX, sy: w.clientY };
    }
    function l(w) {
      !n || n.id !== w.pointerId || (Math.abs(w.clientX - n.sx) + Math.abs(w.clientY - n.sy) > 6 && (n.moved = !0), n.moved && (t.value = r(w.clientX - n.dx, w.clientY - n.dy)));
    }
    function a(w) {
      if (!n || n.id !== w.pointerId) return;
      const x = n.moved;
      n = null, x && (s = !0, f.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, be());
    }
    function c() {
      if (s) {
        s = !1;
        return;
      }
      f.panelOpen = !f.panelOpen;
    }
    const d = q(() => !!f.session && !!f.progress && !f.progress.ended), A = q(() => d.value && !!f.progress?.warn), p = q(() => {
      const w = f.progress;
      return !d.value || !w || !f.pack?.phases.length || !(w.phase.cap > 0) ? null : Math.min(100, Math.max(0, w.round / w.phase.cap * 100));
    }), z = q(() => (f.tick, f.session, Iv()));
    return dn(() => f.settings.ball, i, { deep: !0 }), Ma(() => {
      i(), window.addEventListener("resize", i);
    }), Di(() => window.removeEventListener("resize", i)), (w, x) => (b(), k("button", {
      type: "button",
      class: Q(["rlzc-ball", { "is-active": d.value, "is-warn": A.value, "has-ring": p.value !== null }]),
      style: Ar({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: `${C(fn)()}（可拖动）`,
      onPointerdown: Ue(o, ["stop"]),
      onPointermove: Ue(l, ["stop"]),
      onPointerup: Ue(a, ["stop"]),
      onPointercancel: Ue(a, ["stop"]),
      onMousedown: x[0] || (x[0] = Ue(() => {
      }, ["stop"])),
      onMousemove: x[1] || (x[1] = Ue(() => {
      }, ["stop"])),
      onMouseup: x[2] || (x[2] = Ue(() => {
      }, ["stop"])),
      onTouchstart: x[3] || (x[3] = Ue(() => {
      }, ["stop"])),
      onTouchmove: x[4] || (x[4] = Ue(() => {
      }, ["stop"])),
      onTouchend: x[5] || (x[5] = Ue(() => {
      }, ["stop"])),
      onTouchcancel: x[6] || (x[6] = Ue(() => {
      }, ["stop"])),
      onClick: Ue(c, ["stop"])
    }, [
      p.value !== null ? (b(), k("svg", r0, [
        x[7] || (x[7] = u("circle", {
          class: "rlzc-ball-ring-base",
          cx: "24",
          cy: "24",
          r: "22.5"
        }, null, -1)),
        p.value > 0 ? (b(), k("circle", {
          key: 0,
          class: "rlzc-ball-ring-bar",
          cx: "24",
          cy: "24",
          r: "22.5",
          pathLength: "100",
          "stroke-dasharray": `${p.value} 100`
        }, null, 8, i0)) : B("", !0)
      ])) : B("", !0),
      (b(), k("svg", o0, [
        u("path", { d: C(vo) }, null, 8, l0)
      ])),
      z.value ? (b(), k("span", a0)) : B("", !0),
      C(f).market.pending > 0 ? (b(), k("span", c0, $(C(f).market.pending), 1)) : B("", !0)
    ], 46, s0));
  }
});
function d0(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Hn(e) {
  return d0(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function A0(e) {
  const t = [];
  let n = null, s = [];
  const r = () => {
    s.length && t.push(`<p>${s.map(Hn).join("<br>")}</p>`), s = [];
  }, i = () => {
    n && t.push(`</li></${n}>`), n = null;
  };
  for (const o of e.replace(/\r/g, "").split(`
`)) {
    const l = o.trimEnd();
    if (!l.trim()) {
      r(), i();
      continue;
    }
    const a = /^(#{1,4})\s+(.*)$/.exec(l);
    if (a) {
      r(), i();
      const p = Math.min(a[1].length + 2, 6);
      t.push(`<h${p}>${Hn(a[2])}</h${p}>`);
      continue;
    }
    const c = /^\s*[-*]\s+(.*)$/.exec(l), d = /^\s*(\d+)[.、]\s+(.*)$/.exec(l);
    if (c || d) {
      r();
      const p = c ? "ul" : "ol", z = c ? c[1] : d[2];
      n !== p ? (i(), n = p, t.push(p === "ol" ? `<ol start="${d[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(Hn(z));
      continue;
    }
    if (n && /^\s{2,}/.test(o)) {
      t.push(`<br>${Hn(l.trim())}`);
      continue;
    }
    const A = /^>\s?(.*)$/.exec(l);
    if (A) {
      r(), i(), t.push(`<blockquote>${Hn(A[1])}</blockquote>`);
      continue;
    }
    i(), s.push(l);
  }
  return r(), i(), t.join("");
}
const f0 = {
  key: 0,
  class: "rlzc-docs"
}, p0 = { class: "rlzc-subtabs" }, h0 = ["onClick"], m0 = { class: "rlzc-md" }, g0 = ["innerHTML"], x0 = ["src", "alt"], v0 = {
  key: 2,
  class: "rlzc-note"
}, jl = /* @__PURE__ */ je({
  __name: "PackDocs",
  props: {
    pack: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ ge(0);
    dn(
      () => t.pack.id,
      () => n.value = 0
    );
    const s = q(() => t.pack.docs?.[n.value]), r = q(() => s.value?.md ? A0(s.value.md) : ""), i = q(() => s.value?.image ? wh(t.pack, s.value.image) : null);
    return (o, l) => e.pack.docs?.length ? (b(), k("section", f0, [
      u("div", p0, [
        (b(!0), k(X, null, de(e.pack.docs, (a, c) => (b(), k("button", {
          key: c,
          class: Q({ on: n.value === c }),
          onClick: (d) => n.value = c
        }, $(a.title), 11, h0))), 128))
      ]),
      u("article", m0, [
        r.value ? (b(), k("div", {
          key: 0,
          innerHTML: r.value
        }, null, 8, g0)) : B("", !0),
        i.value ? (b(), k("img", {
          key: 1,
          src: i.value,
          alt: s.value?.title,
          class: "rlzc-img"
        }, null, 8, x0)) : s.value?.image && !i.value ? (b(), k("p", v0, "图片无法加载：" + $(s.value.image), 1)) : B("", !0)
      ])
    ])) : B("", !0);
  }
}), b0 = {
  key: 0,
  class: "rlzc-ledger-summary"
}, y0 = {
  key: 0,
  class: "rlzc-ledger-sum-pending"
}, Bl = /* @__PURE__ */ je({
  __name: "LedgerSummary",
  setup(e) {
    const t = q(() => Z()), n = q(() => Tt(t.value)), s = q(() => bn(n.value.value, f.ledger)), r = q(() => (f.tick, at(t.value))), i = q(() => Mt[r.value]), o = q(() => bs(n.value.value, f.ledger, i.value)), l = q(() => f.ledger.length > 0 || n.value.source !== "默认值");
    return (a, c) => l.value ? (b(), k("div", b0, [
      u("span", {
        class: Q(["rlzc-ledger-sum-bal", { negative: s.value < 0 }])
      }, "积分 " + $(s.value >= 0 ? "+" : "") + $(s.value), 3),
      o.value ? (b(), k("span", y0, "待清算")) : B("", !0)
    ])) : B("", !0);
  }
}), k0 = { class: "rlzc-system" }, w0 = { class: "rlzc-card rlzc-hero" }, z0 = { class: "rlzc-hero-top" }, _0 = { class: "rlzc-level" }, $0 = {
  key: 0,
  class: "rlzc-chip"
}, S0 = {
  key: 0,
  class: "rlzc-goal"
}, C0 = { class: "rlzc-grid" }, E0 = {
  key: 0,
  class: "rlzc-stat"
}, M0 = {
  key: 1,
  class: "rlzc-stat"
}, T0 = {
  key: 2,
  class: "rlzc-stat"
}, I0 = {
  key: 3,
  class: "rlzc-stat"
}, N0 = {
  key: 0,
  class: "rlzc-subline"
}, P0 = {
  key: 1,
  class: "rlzc-note"
}, L0 = {
  key: 2,
  class: "rlzc-card"
}, O0 = { class: "rlzc-kv" }, D0 = { class: "rlzc-kv" }, R0 = {
  key: 0,
  class: "rlzc-note rlzc-note-warn"
}, F0 = {
  key: 3,
  class: "rlzc-note"
}, j0 = {
  key: 4,
  class: "rlzc-card"
}, B0 = {
  key: 0,
  class: "rlzc-kv"
}, U0 = { class: "rlzc-mono" }, V0 = {
  key: 1,
  class: "rlzc-tasks"
}, H0 = {
  key: 2,
  class: "rlzc-ps"
}, W0 = { class: "rlzc-actions" }, G0 = ["disabled"], K0 = ["disabled"], q0 = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, Y0 = ["onClick"], J0 = { class: "rlzc-entry-kicker" }, Z0 = {
  class: "rlzc-entry-inf",
  viewBox: "0 0 32 32",
  "aria-hidden": "true"
}, X0 = ["d"], Q0 = { class: "rlzc-entry-title" }, eb = { class: "rlzc-entry-level" }, tb = { class: "rlzc-entry-name" }, nb = {
  key: 0,
  class: "rlzc-entry-note"
}, sb = { class: "rlzc-entry-foot" }, rb = ["aria-checked", "onClick"], ib = { key: 1 }, ob = { class: "rlzc-entry-actions" }, lb = ["onClick"], ab = ["onClick"], cb = {
  key: 3,
  class: "rlzc-card"
}, ub = { class: "rlzc-row" }, db = ["value"], Ab = ["disabled"], fb = /* @__PURE__ */ je({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ ge(""), n = q(() => !!f.session && !!f.pack), s = q(() => f.progress), r = q(() => n.value && !!s.value && !s.value.ended), i = q(() => f.packs.find((w) => w.id === t.value) ?? null), o = /* @__PURE__ */ ge({}), l = (w, x) => o.value[w] ?? x, a = q(() => !!f.pack?.phases.length), c = q(() => f.settings.panelDisplay !== "statusbar"), d = q(() => {
      const w = s.value;
      return w ? a.value ? `${w.warn ? "⚠️ " : ""}${w.round}/${w.phase.cap}` : `第${w.round}轮` : "";
    }), A = q(() => {
      const w = s.value;
      return w ? w.limit?.text ? w.limit.text : w.panel?.limit || f.session?.briefing?.limit || "—" : "";
    }), p = q(() => {
      const w = s.value;
      return !!w && !w.ended && a.value && w.phase.cap > 0 && w.nextRound < w.phase.cap;
    });
    async function z() {
      t.value && (await cv(t.value), t.value = "");
    }
    return (w, x) => (b(), k("div", k0, [
      n.value && s.value ? (b(), k(X, { key: 0 }, [
        u("div", w0, [
          u("div", z0, [
            u("span", _0, $(C(f).pack?.rest ? "—" : C(f).pack.level), 1),
            u("h3", null, $(C(f).pack.name), 1),
            s.value.ended ? (b(), k("span", $0, "已结束")) : B("", !0)
          ]),
          C(f).session?.briefing?.goal ? (b(), k("p", S0, "目标：" + $(C(f).session.briefing.goal), 1)) : B("", !0)
        ]),
        u("div", C0, [
          a.value ? (b(), k("div", E0, [
            x[3] || (x[3] = u("span", null, "阶段", -1)),
            u("b", null, $(s.value.phase.name), 1)
          ])) : B("", !0),
          u("div", {
            class: Q(["rlzc-stat", { warn: s.value.warn }])
          }, [
            x[4] || (x[4] = u("span", null, "轮次", -1)),
            u("b", null, $(d.value), 1)
          ], 2),
          s.value.currentClock ? (b(), k("div", M0, [
            x[5] || (x[5] = u("span", null, "钟时", -1)),
            u("b", null, $(s.value.currentClock), 1)
          ])) : B("", !0),
          s.value.roundsLeft ? (b(), k("div", T0, [
            x[6] || (x[6] = u("span", null, "最多剩余轮次", -1)),
            u("b", null, $(s.value.roundsLeft.x) + "/" + $(s.value.roundsLeft.y), 1)
          ])) : B("", !0),
          c.value ? (b(), k("div", I0, [
            x[7] || (x[7] = u("span", null, "剩余时间", -1)),
            u("b", null, $(A.value), 1)
          ])) : B("", !0),
          r.value ? B("", !0) : (b(), Fe(Bl, { key: 4 }))
        ]),
        C(f).subLine ? (b(), k("p", N0, $(C(f).subLine), 1)) : B("", !0),
        s.value.skipGoal ? (b(), k("div", P0, "快进中：目标 " + $(C(f).pack.phases.find((_) => _.id === s.value.skipGoal.phase)?.name) + " 第" + $(s.value.skipGoal.round) + "轮", 1)) : B("", !0),
        s.value.ended && s.value.settlement ? (b(), k("div", L0, [
          u("div", O0, [
            x[8] || (x[8] = u("span", null, "结果", -1)),
            u("b", null, $(s.value.settlement.result ?? "—"), 1)
          ]),
          u("div", D0, [
            x[9] || (x[9] = u("span", null, "评价", -1)),
            u("b", null, $(s.value.settlement.rating ?? "—"), 1)
          ]),
          C(f).session?.clearance && s.value.settlement.result === "失败" ? (b(), k("div", R0, " 清算未通关 ")) : B("", !0)
        ])) : s.value.ended ? (b(), k("div", F0, "副本已手动结束。")) : B("", !0),
        c.value && s.value.panel ? (b(), k("div", j0, [
          s.value.panel.progressBar ? (b(), k("div", B0, [
            x[10] || (x[10] = u("span", null, "进度", -1)),
            u("b", U0, $(s.value.panel.progressBar), 1)
          ])) : B("", !0),
          s.value.panel.tasks.length ? (b(), k("div", V0, [
            x[11] || (x[11] = u("span", null, "任务", -1)),
            u("ul", null, [
              (b(!0), k(X, null, de(s.value.panel.tasks, (_, S) => (b(), k("li", { key: S }, $(_), 1))), 128))
            ])
          ])) : B("", !0),
          s.value.panel.ps ? (b(), k("div", H0, "ps：" + $(s.value.panel.ps), 1)) : B("", !0)
        ])) : B("", !0),
        u("div", W0, [
          u("button", {
            class: "rlzc-btn",
            disabled: !p.value,
            onClick: x[0] || (x[0] = //@ts-ignore
            (..._) => C(Tl) && C(Tl)(..._))
          }, "跳过（到本阶段结束）", 8, G0),
          u("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: x[1] || (x[1] = //@ts-ignore
            (..._) => C(Il) && C(Il)(..._))
          }, "手动结束副本", 8, K0)
        ]),
        r.value && C(f).pack.docs?.length ? (b(), Fe(jl, {
          key: 5,
          pack: C(f).pack
        }, null, 8, ["pack"])) : B("", !0)
      ], 64)) : (b(), k("div", q0, [
        x[12] || (x[12] = u("h3", null, "当前在回廊里，没有进行中的副本。", -1)),
        Te(Bl)
      ])),
      r.value ? B("", !0) : (b(!0), k(X, { key: 2 }, de(C(f).pendingEntries, (_) => (b(), k("div", {
        key: _.key,
        class: "rlzc-card rlzc-pending"
      }, [
        u("button", {
          class: "rlzc-entry-close",
          type: "button",
          "aria-label": "不再提示",
          title: "不再提示",
          onClick: (S) => C(fv)(_.key)
        }, "✕", 8, Y0),
        u("div", J0, [
          (b(), k("svg", Z0, [
            u("path", { d: C(vo) }, null, 8, X0)
          ])),
          x[13] || (x[13] = u("span", null, "待确认的副本", -1))
        ]),
        u("div", Q0, [
          u("span", eb, $(_.level), 1),
          u("span", tb, $(_.name), 1)
        ]),
        _.unknown ? (b(), k("div", nb, "未收录，将使用通用副本包")) : B("", !0),
        x[16] || (x[16] = u("div", { class: "rlzc-entry-note" }, "进入后以最新一条AI回复为第1轮", -1)),
        u("div", sb, [
          _.liveShow ? (b(), k("button", {
            key: 0,
            type: "button",
            class: Q(["rlzc-entry-live", { on: l(_.key, _.live) }]),
            role: "switch",
            "aria-checked": l(_.key, _.live),
            onClick: (S) => o.value[_.key] = !l(_.key, _.live)
          }, [
            u("span", {
              class: Q(["rlzc-toggle danger", { on: l(_.key, _.live) }])
            }, [...x[14] || (x[14] = [
              u("span", null, null, -1)
            ])], 2),
            x[15] || (x[15] = u("span", null, "直播", -1))
          ], 10, rb)) : (b(), k("span", ib)),
          u("div", ob, [
            _.unknown ? (b(), k("button", {
              key: 0,
              type: "button",
              class: "rlzc-btn ghost rlzc-pending-save",
              title: "现在不玩，以后在手动选择副本里进入",
              onClick: (S) => C(Av)(_.key)
            }, "收录", 8, lb)) : B("", !0),
            u("button", {
              type: "button",
              class: "rlzc-btn rlzc-entry-go",
              onClick: (S) => C(dv)(_.key, l(_.key, _.live))
            }, "进入", 8, ab)
          ])
        ])
      ]))), 128)),
      r.value ? B("", !0) : (b(), k("div", cb, [
        x[18] || (x[18] = u("label", { class: "rlzc-label" }, "手动选择副本", -1)),
        u("div", ub, [
          vt(u("select", {
            "onUpdate:modelValue": x[2] || (x[2] = (_) => t.value = _),
            class: "rlzc-input"
          }, [
            x[17] || (x[17] = u("option", { value: "" }, "选择副本…", -1)),
            (b(!0), k(X, null, de(C(f).packs, (_) => (b(), k("option", {
              key: _.id,
              value: _.id
            }, $(_.level) + "｜" + $(_.name), 9, db))), 128))
          ], 512), [
            [Xa, t.value]
          ]),
          u("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: z
          }, "进入", 8, Ab)
        ])
      ])),
      !r.value && i.value?.docs?.length ? (b(), Fe(jl, {
        key: 4,
        pack: i.value
      }, null, 8, ["pack"])) : B("", !0)
    ]));
  }
}), pb = { class: "rlzc-ledger" }, hb = { class: "rlzc-card rlzc-ledger-hero-card" }, mb = { class: "rlzc-ledger-hero-cols" }, gb = { class: "rlzc-ledger-hero-col" }, xb = { class: "rlzc-ledger-hero-col-val" }, vb = { class: "rlzc-ledger-hero-col" }, bb = { class: "rlzc-ledger-hero-col-val" }, yb = { class: "rlzc-ledger-hero-col" }, kb = {
  key: 0,
  class: "rlzc-ledger-init-hint"
}, wb = { class: "rlzc-card" }, zb = {
  key: 0,
  class: "rlzc-ledger-list"
}, _b = { class: "rlzc-ledger-item-left" }, $b = { class: "rlzc-ledger-item-src" }, Sb = { class: "rlzc-ledger-item-time" }, Cb = { class: "rlzc-ledger-item-right" }, Eb = { class: "rlzc-ledger-item-after" }, Mb = {
  key: 1,
  class: "rlzc-hint"
}, Tb = /* @__PURE__ */ je({
  __name: "LedgerTab",
  setup(e) {
    const t = q(() => Z()), n = q(() => Tt(t.value)), s = q(() => f.ledger), r = q(() => bn(n.value.value, s.value)), i = q(() => {
      const w = rg(n.value.value, s.value);
      return s.value.map((x, _) => ({ e: x, after: w[_] })).reverse();
    }), o = q(() => (f.tick, at(t.value))), l = q(() => Mt[o.value]), a = q(() => bs(n.value.value, s.value, l.value)), c = q(() => Math.max(0, l.value - r.value)), d = q(() => n.value.source === "默认值");
    function A(w) {
      return new Intl.NumberFormat("zh-CN").format(w);
    }
    function p(w) {
      return (w >= 0 ? "+" : "") + new Intl.NumberFormat("zh-CN").format(w);
    }
    function z(w) {
      try {
        const x = new Date(w), _ = String(x.getMonth() + 1).padStart(2, "0"), S = String(x.getDate()).padStart(2, "0"), T = String(x.getHours()).padStart(2, "0"), M = String(x.getMinutes()).padStart(2, "0");
        return `${_}-${S} ${T}:${M}`;
      } catch {
        return w;
      }
    }
    return (w, x) => (b(), k("div", pb, [
      u("div", hb, [
        x[3] || (x[3] = u("span", { class: "rlzc-ledger-hero-label" }, "当前积分", -1)),
        u("b", {
          class: Q(["rlzc-ledger-hero-num", { negative: r.value < 0 }])
        }, $(A(r.value)), 3),
        x[4] || (x[4] = u("div", { class: "rlzc-ledger-hero-divider" }, null, -1)),
        u("div", mb, [
          u("div", gb, [
            x[0] || (x[0] = u("span", { class: "rlzc-ledger-hero-col-label" }, "等级", -1)),
            u("span", xb, $(o.value), 1)
          ]),
          u("div", vb, [
            x[1] || (x[1] = u("span", { class: "rlzc-ledger-hero-col-label" }, "斩杀线", -1)),
            u("span", bb, $(A(l.value)), 1)
          ]),
          u("div", yb, [
            x[2] || (x[2] = u("span", { class: "rlzc-ledger-hero-col-label" }, "待清算", -1)),
            u("span", {
              class: Q(["rlzc-ledger-hero-col-val", { "rlzc-ledger-warn": a.value }])
            }, $(a.value ? `距线 ${A(c.value)}` : "无"), 3)
          ])
        ]),
        d.value ? (b(), k("p", kb, "初始积分按 1000 计，可在设置页修改")) : B("", !0)
      ]),
      u("div", wb, [
        x[5] || (x[5] = u("h4", null, "流水", -1)),
        s.value.length ? (b(), k("ul", zb, [
          (b(!0), k(X, null, de(i.value, (_, S) => (b(), k("li", {
            key: `${S}-${_.e.mesIndex}-${_.e.delta}-${_.e.at}`,
            class: "rlzc-ledger-item"
          }, [
            u("div", _b, [
              u("span", $b, $(_.e.source), 1),
              u("span", Sb, $(z(_.e.at)), 1)
            ]),
            u("div", Cb, [
              u("span", {
                class: Q(["rlzc-ledger-item-delta", _.e.delta >= 0 ? "pos" : "neg"])
              }, $(p(_.e.delta)), 3),
              u("span", Eb, "余额 " + $(A(_.after)), 1)
            ])
          ]))), 128))
        ])) : (b(), k("p", Mb, "还没有收支记录。"))
      ])
    ]));
  }
}), Ib = { class: "rlzc-market" }, Nb = { class: "rlzc-subtabs rlzc-market-tabs" }, Pb = { class: "rlzc-card rlzc-mk-status" }, Lb = { class: "rlzc-mk-q" }, Ob = { class: "rlzc-mk-tag" }, Db = { class: "rlzc-mk-opts" }, Rb = ["disabled", "onClick"], Fb = { class: "rlzc-row rlzc-mk-bet" }, jb = ["onUpdate:modelValue"], Bb = ["disabled", "onClick"], Ub = { class: "rlzc-hint" }, Vb = {
  key: 0,
  class: "rlzc-mk-red"
}, Hb = {
  key: 1,
  class: "rlzc-mk-mine"
}, Wb = {
  key: 1,
  class: "rlzc-card"
}, Gb = {
  key: 0,
  class: "rlzc-tk-list"
}, Kb = { class: "rlzc-tk-left" }, qb = { class: "rlzc-tk-title" }, Yb = {
  key: 1,
  class: "rlzc-hint"
}, Jb = {
  key: 0,
  class: "rlzc-card rlzc-mk-status"
}, Zb = { class: "rlzc-cs-tables" }, Xb = ["onClick"], Qb = {
  key: 0,
  class: "rlzc-card rlzc-cs-play"
}, ey = {
  key: 0,
  class: "rlzc-segsrc rlzc-cs-seg"
}, ty = ["onClick"], ny = ["onClick"], sy = { class: "rlzc-row rlzc-mk-bet" }, ry = ["disabled"], iy = { class: "rlzc-hint" }, oy = {
  key: 2,
  class: "rlzc-mk-red"
}, ly = /* @__PURE__ */ je({
  __name: "MarketTab",
  setup(e) {
    const t = /* @__PURE__ */ ge("book"), n = (D) => new Intl.NumberFormat("en-US").format(D), s = (D) => `×${D.toFixed(2)}`, r = q(() => f.market.pending), i = q(() => (f.tick, at())), o = q(() => f.market.book), l = q(() => !!o.value?.closedAt), a = q(() => {
      const D = o.value;
      return D && D.closedAt ? `《${D.packName}》已封盘` : D ? `《${D.packName}》开盘中 · 第1轮结束封盘${D.freak?.status === "pending" ? " · 庄家出题中" : ""}` : f.session?.status === "active" && f.pack?.rest ? "休整副本不开盘。" : "进副本后开盘。";
    }), c = { ending: "结局", rating: "评价", event: "事件", freak: "庄家" }, d = /* @__PURE__ */ ge({}), A = /* @__PURE__ */ ge({});
    function p(D, Y) {
      l.value || f.market.results[D.id] || (d.value = { ...d.value, [D.id]: d.value[D.id] === Y ? "" : Y });
    }
    function z(D) {
      f.tick;
      const Y = A.value[D.id];
      return ku(D.id, typeof Y == "number" ? Y : 0);
    }
    function w(D) {
      const Y = d.value[D.id], K = A.value[D.id];
      if (!Y || typeof K != "number") return;
      const ae = Uv(D.id, Y, K);
      if (ae) {
        ze("warning", ae);
        return;
      }
      A.value = { ...A.value, [D.id]: null }, d.value = { ...d.value, [D.id]: "" };
    }
    function x(D) {
      const Y = o.value;
      return Y ? f.market.tickets.filter((K) => K.book.session === Y.session && K.ticket.market === D.id) : [];
    }
    function _(D) {
      return D.market?.options.find((Y) => Y.id === D.ticket.option)?.label ?? D.ticket.option;
    }
    function S(D) {
      return `${D.book.packName} · ${D.market?.q ?? D.ticket.market} · ${_(D)}`;
    }
    function T(D) {
      const Y = D.ticket, K = D.res?.stamp;
      return K ? K === "win" ? `押 ${n(Y.stake)} · ${s(Y.odds)} · 兑 ${n(tu(Y.stake, Y.odds))}` : K === "lose" ? `押 ${n(Y.stake)} · ${s(Y.odds)}` : `押 ${n(Y.stake)} · 原数退还` : `押 ${n(Y.stake)} · ${s(Y.odds)} · 待开奖`;
    }
    const M = { win: "兑", lose: "废", refund: "退" }, I = q(() => f.market.tables.map((D) => Tn(D)).filter((D) => !!D)), R = /* @__PURE__ */ ge(""), P = q(() => R.value ? Tn(R.value) : void 0), U = /* @__PURE__ */ ge(""), ne = /* @__PURE__ */ ge(null), V = /* @__PURE__ */ ge(!1), g = /* @__PURE__ */ ge(""), m = /* @__PURE__ */ ge(null);
    let v = null;
    function F(D) {
      if (R.value === D) {
        R.value = "";
        return;
      }
      R.value = D;
      const Y = Tn(D);
      U.value = Y && Y.bets.length === 1 ? Y.bets[0].id : "", m.value = null;
    }
    const oe = q(() => (P.value?.bets ?? []).filter((D) => !/^[nd]\d+$/.test(D.id))), le = q(() => (P.value?.bets ?? []).filter((D) => /^[nd]\d+$/.test(D.id))), Ce = q(() => (f.tick, wu(typeof ne.value == "number" ? ne.value : 0)));
    function qe() {
      try {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      } catch {
        return !1;
      }
    }
    function De(D, Y) {
      return D === "bell" ? `${Y[0]}下` : D === "door" ? `${Y[0]}号门` : D === "lot" ? `第${Y[0]}支` : `${Y[0]} : ${Y[1]}`;
    }
    function ct() {
      const D = P.value, Y = ne.value;
      if (!D || !U.value || typeof Y != "number" || V.value) return;
      const K = Vv(D.id, U.value, Y);
      if (K.error || !K.outcome) {
        ze("warning", K.error ?? "不能下注");
        return;
      }
      const ae = { ...K.outcome, stake: Y };
      if (m.value = null, qe()) {
        g.value = De(D.id, ae.faces), m.value = ae;
        return;
      }
      V.value = !0;
      const Zt = D.id === "bell" ? 12 : D.id === "door" ? 20 : D.id === "lot" ? 3 : 13, Nt = () => 1 + Math.floor(Math.random() * Zt);
      v = setInterval(() => g.value = De(D.id, [Nt(), Nt()]), 80), setTimeout(() => {
        v && clearInterval(v), v = null, g.value = De(D.id, ae.faces), V.value = !1, m.value = ae;
      }, 1200);
    }
    const ie = q(() => {
      const D = m.value;
      return D ? `结果：${D.result}。${D.win ? `赢 ${n(D.payout)}` : `输 ${n(D.stake)}`}` : "";
    });
    return Di(() => {
      v && clearInterval(v);
    }), (D, Y) => (b(), k("div", Ib, [
      u("nav", Nb, [
        u("button", {
          class: Q({ on: t.value === "book" }),
          onClick: Y[0] || (Y[0] = (K) => t.value = "book")
        }, "盘口", 2),
        u("button", {
          class: Q({ on: t.value === "tickets" }),
          onClick: Y[1] || (Y[1] = (K) => t.value = "tickets")
        }, $(r.value ? `票夹 · ${r.value}` : "票夹"), 3),
        u("button", {
          class: Q({ on: t.value === "casino" }),
          onClick: Y[2] || (Y[2] = (K) => t.value = "casino")
        }, "赌坊", 2)
      ]),
      t.value === "book" ? (b(), k(X, { key: 0 }, [
        u("div", Pb, $(a.value), 1),
        (b(!0), k(X, null, de(o.value?.markets ?? [], (K) => (b(), k("div", {
          key: K.id,
          class: "rlzc-card rlzc-mk-card"
        }, [
          u("div", Lb, [
            u("span", Ob, $(c[K.kind]), 1),
            Ie($(K.q), 1)
          ]),
          u("div", Db, [
            (b(!0), k(X, null, de(K.options, (ae) => (b(), k("button", {
              key: ae.id,
              class: Q(["rlzc-mk-opt", { on: d.value[K.id] === ae.id }]),
              disabled: l.value || !!C(f).market.results[K.id],
              onClick: (Zt) => p(K, ae.id)
            }, [
              u("span", null, $(ae.label), 1),
              u("b", null, $(s(ae.odds)), 1)
            ], 10, Rb))), 128))
          ]),
          d.value[K.id] && !l.value ? (b(), k(X, { key: 0 }, [
            u("div", Fb, [
              vt(u("input", {
                "onUpdate:modelValue": (ae) => A.value[K.id] = ae,
                type: "number",
                min: "10",
                step: "1",
                inputmode: "numeric",
                class: "rlzc-input",
                placeholder: "押多少"
              }, null, 8, jb), [
                [
                  Rt,
                  A.value[K.id],
                  void 0,
                  { number: !0 }
                ]
              ]),
              u("button", {
                class: "rlzc-btn",
                disabled: typeof A.value[K.id] != "number",
                onClick: (ae) => w(K)
              }, "下注", 8, Bb)
            ]),
            u("p", Ub, "单注上限 " + $(n(z(K).cap)) + "（" + $(i.value) + "级）", 1),
            z(K).belowKill ? (b(), k("p", Vb, "押完余额低于斩杀线")) : B("", !0)
          ], 64)) : B("", !0),
          x(K).length ? (b(), k("ul", Hb, [
            (b(!0), k(X, null, de(x(K), (ae) => (b(), k("li", {
              key: ae.ticket.id
            }, $(_(ae)) + " · " + $(T(ae)), 1))), 128))
          ])) : B("", !0)
        ]))), 128))
      ], 64)) : t.value === "tickets" ? (b(), k("div", Wb, [
        C(f).market.tickets.length ? (b(), k("ul", Gb, [
          (b(!0), k(X, null, de(C(f).market.tickets, (K) => (b(), k("li", {
            key: K.ticket.id,
            class: "rlzc-tk"
          }, [
            u("div", Kb, [
              u("span", qb, $(S(K)), 1),
              u("small", null, $(T(K)), 1)
            ]),
            u("span", {
              class: Q(["rlzc-stamp", K.res ? K.res.stamp : "pending"])
            }, $(K.res ? M[K.res.stamp] : "待"), 3)
          ]))), 128))
        ])) : (b(), k("p", Yb, "还没有赌票。"))
      ])) : (b(), k(X, { key: 2 }, [
        C(f).market.casinoOpen ? (b(), k(X, { key: 1 }, [
          Y[4] || (Y[4] = u("p", { class: "rlzc-hint" }, "今晚开两张桌，回到回廊换一批。", -1)),
          u("div", Zb, [
            (b(!0), k(X, null, de(I.value, (K) => (b(), k("button", {
              key: K.id,
              class: Q(["rlzc-card rlzc-cs-table", { on: R.value === K.id }]),
              onClick: (ae) => F(K.id)
            }, [
              u("b", null, $(K.name), 1),
              u("small", null, $(K.desc), 1)
            ], 10, Xb))), 128))
          ]),
          P.value ? (b(), k("div", Qb, [
            u("h4", null, $(P.value.name), 1),
            oe.value.length ? (b(), k("div", ey, [
              (b(!0), k(X, null, de(oe.value, (K) => (b(), k("button", {
                key: K.id,
                class: Q({ on: U.value === K.id }),
                onClick: (ae) => U.value = K.id
              }, $(K.label), 11, ty))), 128))
            ])) : B("", !0),
            le.value.length ? (b(), k("div", {
              key: 1,
              class: Q(["rlzc-cs-grid", P.value.id])
            }, [
              (b(!0), k(X, null, de(le.value, (K) => (b(), k("button", {
                key: K.id,
                class: Q({ on: U.value === K.id }),
                onClick: (ae) => U.value = K.id
              }, $(K.label), 11, ny))), 128))
            ], 2)) : B("", !0),
            u("div", sy, [
              vt(u("input", {
                "onUpdate:modelValue": Y[3] || (Y[3] = (K) => ne.value = K),
                type: "number",
                min: "10",
                step: "1",
                inputmode: "numeric",
                class: "rlzc-input",
                placeholder: "押多少"
              }, null, 512), [
                [
                  Rt,
                  ne.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              u("button", {
                class: "rlzc-btn",
                disabled: !U.value || typeof ne.value != "number" || V.value,
                onClick: ct
              }, "开", 8, ry)
            ]),
            u("p", iy, "单注上限 " + $(n(Ce.value.cap)) + "（" + $(i.value) + "级）", 1),
            Ce.value.belowKill ? (b(), k("p", oy, "押完余额低于斩杀线")) : B("", !0),
            V.value || m.value ? (b(), k("div", {
              key: 3,
              class: Q(["rlzc-cs-face", { rolling: V.value }])
            }, $(g.value || ""), 3)) : B("", !0),
            m.value ? (b(), k("p", {
              key: 4,
              class: Q(["rlzc-cs-result", m.value.win ? "win" : "lose"])
            }, $(ie.value), 3)) : B("", !0)
          ])) : B("", !0)
        ], 64)) : (b(), k("div", Jb, "赌坊只在回廊营业。"))
      ], 64))
    ]));
  }
}), ay = { class: "rlzc-preset-area" }, cy = {
  key: 0,
  class: "rlzc-preset-row"
}, uy = ["value"], dy = {
  key: 0,
  value: ""
}, Ay = ["value"], fy = ["disabled"], py = ["disabled"], hy = { class: "rlzc-stacked-field" }, my = ["value"], gy = { class: "rlzc-stacked-field" }, xy = { class: "rlzc-key-wrap" }, vy = ["type", "value"], by = ["aria-label"], yy = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, ky = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, wy = { class: "rlzc-stacked-field" }, zy = {
  key: 0,
  value: "",
  selected: "",
  disabled: ""
}, _y = ["value"], $y = ["value", "selected"], Sy = ["value"], Cy = { class: "rlzc-check-btns" }, Ey = ["disabled"], My = ["disabled"], Ty = {
  key: 0,
  class: "rlzc-check-list"
}, Iy = ["data-kind"], Ny = { class: "rlzc-check-text" }, Py = {
  key: 0,
  class: "rlzc-check-time"
}, Ly = {
  key: 1,
  class: "rlzc-preset-links"
}, zu = /* @__PURE__ */ je({
  __name: "PresetEditor",
  props: {
    owner: {},
    bare: { type: Boolean }
  },
  setup(e) {
    const n = e.owner, s = q(() => f.settings.subApi.presets), r = q(() => s.value.find((R) => R.id === n.presetId) ?? null), i = q(() => r.value?.models ?? []), o = /* @__PURE__ */ ge(!1), l = /* @__PURE__ */ ge(""), a = /* @__PURE__ */ ge(""), c = q(() => {
      const R = r.value;
      if (!R) return [];
      const P = (U, ne, V) => ne && V ? [{ id: U, text: ne, kind: V.ok ? "on" : "warn", time: V.at ? Hm(V.at) : "" }] : [];
      return [...P("fetch", Wm(R), R.fetchResult), ...P("test", Gm(R), R.testResult)];
    });
    function d() {
      be();
    }
    function A() {
      return Math.random().toString(36).slice(2, 10);
    }
    async function p() {
      const R = (await gi("给这个API起个名字：", `我的API ${s.value.length + 1}`))?.trim();
      if (!R) return;
      const P = { id: A(), name: R, url: "", key: "", model: "" };
      f.settings.subApi.presets = [...s.value, P], n.presetId = P.id, d();
    }
    async function z() {
      if (!r.value) return;
      const R = (await gi("改名为：", r.value.name))?.trim();
      R && (r.value.name = R, d());
    }
    async function w() {
      if (!r.value || !await Yt(`确定删除「${r.value.name}」吗？`)) return;
      const R = n.presetId, P = s.value.filter((U) => U.id !== R);
      f.settings.subApi.presets = P;
      for (const U of [f.settings.subApi, f.settings.live, n]) U.presetId === R && (U.presetId = P[0]?.id ?? "");
      d();
    }
    function x(R) {
      n.presetId = R.target.value, d();
    }
    function _(R, P) {
      Kx(R, P.target.value, n.presetId);
    }
    function S() {
      return Math.max(5, Number(f.settings.subApi.timeoutSec) || 60) * 1e3;
    }
    function T(R, P, U) {
      return R.url === P.url && R.key === P.key && (!U || R.model === P.model);
    }
    async function M() {
      const R = r.value;
      if (!R || !fl(R) || l.value) return;
      const P = { ...R };
      l.value = R.id;
      try {
        const U = await Fm(P, S());
        T(R, P, !1) && hl(R, { ok: !0, models: U });
      } catch (U) {
        T(R, P, !1) && hl(R, { ok: !1, reason: vi(U) });
      } finally {
        l.value = "", d();
      }
    }
    async function I() {
      const R = r.value;
      if (!R || !pl(R) || a.value) return;
      const P = { ...R };
      a.value = R.id;
      try {
        await Bm(P, S()), T(R, P, !0) && ml(R, { ok: !0 });
      } catch (U) {
        T(R, P, !0) && ml(R, { ok: !1, reason: vi(U) });
      } finally {
        a.value = "", d();
      }
    }
    return (R, P) => (b(), k("div", ay, [
      e.bare ? B("", !0) : (b(), k("div", cy, [
        u("select", {
          class: "rlzc-input",
          value: C(n).presetId,
          onChange: x
        }, [
          s.value.length ? B("", !0) : (b(), k("option", dy, "还没有保存的接口")),
          (b(!0), k(X, null, de(s.value, (U) => (b(), k("option", {
            key: U.id,
            value: U.id
          }, $(U.name), 9, Ay))), 128))
        ], 40, uy),
        u("button", {
          class: "rlzc-icon-btn",
          "aria-label": "新建接口",
          type: "button",
          onClick: p
        }, [...P[4] || (P[4] = [
          u("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "aria-hidden": "true"
          }, [
            u("path", { d: "M8 3v10M3 8h10" })
          ], -1)
        ])]),
        u("button", {
          class: "rlzc-icon-btn",
          "aria-label": "改名",
          type: "button",
          disabled: !r.value,
          onClick: z
        }, [...P[5] || (P[5] = [
          u("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "aria-hidden": "true"
          }, [
            u("path", { d: "M11 2L14 5 5 14H2v-3L11 2z" })
          ], -1)
        ])], 8, fy),
        u("button", {
          class: "rlzc-icon-btn rlzc-danger",
          "aria-label": "删除接口",
          type: "button",
          disabled: !r.value,
          onClick: w
        }, [...P[6] || (P[6] = [
          u("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "aria-hidden": "true"
          }, [
            u("path", { d: "M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 10h8l1-10" })
          ], -1)
        ])], 8, py)
      ])),
      r.value ? (b(), k(X, { key: 1 }, [
        u("div", hy, [
          P[7] || (P[7] = u("label", { class: "rlzc-label" }, "地址", -1)),
          u("input", {
            class: "rlzc-input",
            value: r.value.url,
            placeholder: "https://…/v1",
            onInput: P[0] || (P[0] = (U) => _("url", U))
          }, null, 40, my)
        ]),
        u("div", gy, [
          P[10] || (P[10] = u("label", { class: "rlzc-label" }, "密钥", -1)),
          u("div", xy, [
            u("input", {
              class: "rlzc-input",
              type: o.value ? "text" : "password",
              value: r.value.key,
              autocomplete: "off",
              onInput: P[1] || (P[1] = (U) => _("key", U))
            }, null, 40, vy),
            u("button", {
              class: "rlzc-eye-btn",
              type: "button",
              "aria-label": o.value ? "隐藏密钥" : "显示密钥",
              onClick: P[2] || (P[2] = (U) => o.value = !o.value)
            }, [
              o.value ? (b(), k("svg", yy, [...P[8] || (P[8] = [
                u("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                u("circle", {
                  cx: "8",
                  cy: "8",
                  r: "2"
                }, null, -1),
                u("path", { d: "M2 2l12 12" }, null, -1)
              ])])) : (b(), k("svg", ky, [...P[9] || (P[9] = [
                u("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                u("circle", {
                  cx: "8",
                  cy: "8",
                  r: "2"
                }, null, -1)
              ])]))
            ], 8, by)
          ])
        ]),
        u("div", wy, [
          P[11] || (P[11] = u("label", { class: "rlzc-label" }, "模型", -1)),
          i.value.length ? (b(), k("select", {
            key: 0,
            class: "rlzc-input",
            onChange: P[3] || (P[3] = (U) => _("model", U))
          }, [
            r.value.model ? B("", !0) : (b(), k("option", zy, "请选择…")),
            r.value.model && !i.value.includes(r.value.model) ? (b(), k("option", {
              key: 1,
              value: r.value.model,
              selected: ""
            }, $(r.value.model), 9, _y)) : B("", !0),
            (b(!0), k(X, null, de(i.value, (U) => (b(), k("option", {
              key: U,
              value: U,
              selected: U === r.value.model
            }, $(U), 9, $y))), 128))
          ], 32)) : (b(), k("input", {
            key: 1,
            class: "rlzc-input rlzc-input-disabled",
            value: r.value.model ? r.value.model : "先拉取模型",
            readonly: "",
            tabindex: "-1"
          }, null, 8, Sy))
        ]),
        u("div", Cy, [
          u("button", {
            class: "rlzc-btn ghost",
            type: "button",
            disabled: !!l.value || !C(fl)(r.value),
            onClick: M
          }, $(l.value === r.value.id ? "拉取中…" : "拉取模型"), 9, Ey),
          u("button", {
            class: "rlzc-btn ghost",
            type: "button",
            disabled: !!a.value || !C(pl)(r.value),
            onClick: I
          }, $(a.value === r.value.id ? "测试中…" : "测试模型"), 9, My)
        ]),
        c.value.length ? (b(), k("ul", Ty, [
          (b(!0), k(X, null, de(c.value, (U) => (b(), k("li", {
            key: U.id,
            "data-kind": U.kind
          }, [
            u("span", Ny, $(U.text), 1),
            U.time ? (b(), k("time", Py, $(U.time), 1)) : B("", !0)
          ], 8, Iy))), 128))
        ])) : B("", !0),
        e.bare ? (b(), k("div", Ly, [
          u("button", {
            class: "rlzc-text-btn",
            type: "button",
            onClick: z
          }, "改名"),
          u("button", {
            class: "rlzc-text-btn rlzc-danger-text",
            type: "button",
            onClick: w
          }, "删除接口")
        ])) : B("", !0)
      ], 64)) : B("", !0)
    ]));
  }
}), Oy = { class: "rlzc-card rlzc-collapsible rlzc-subapi" }, Dy = ["aria-expanded"], Ry = ["data-kind"], Fy = {
  key: 0,
  class: "rlzc-collapse-body"
}, jy = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "检测来源"
}, By = {
  key: 1,
  class: "rlzc-option-list"
}, Uy = { class: "rlzc-option-row" }, Vy = ["aria-checked"], Hy = { class: "rlzc-option-row" }, Wy = ["aria-checked"], Gy = { class: "rlzc-option-row rlzc-option-row-timeout" }, Ky = { class: "rlzc-timeout-wrap" }, qy = ["value"], Yy = /* @__PURE__ */ je({
  __name: "SubApiCard",
  setup(e) {
    const t = q(() => f.settings.subApi), n = q(() => t.value.presets.find((d) => d.id === t.value.presetId) ?? null), s = q(() => t.value.source === "off" ? { kind: "off", text: "未开启" } : t.value.source === "main" ? { kind: "on", text: "跟随主API" } : Km(n.value)), r = q(() => f.settings.cardCollapsed.subApi);
    function i() {
      f.settings.cardCollapsed.subApi = !f.settings.cardCollapsed.subApi, o();
    }
    function o() {
      be();
    }
    function l(d) {
      t.value.source = d, o();
    }
    function a(d) {
      const A = Math.floor(Number(d.target.value));
      if (!Number.isFinite(A) || A < 5) {
        ze("warning", "超时时间至少 5 秒。");
        return;
      }
      t.value.timeoutSec = A, o();
    }
    function c(d, A) {
      t.value[d] = A, o();
    }
    return (d, A) => (b(), k("div", Oy, [
      u("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !r.value,
        onClick: i
      }, [
        A[5] || (A[5] = u("h4", null, "副本事件检测", -1)),
        u("span", {
          class: "rlzc-dot",
          "data-kind": s.value.kind
        }, $(s.value.text), 9, Ry),
        u("span", {
          class: Q(["rlzc-collapse-arrow", { open: !r.value }])
        }, "▸", 2)
      ], 8, Dy),
      r.value ? B("", !0) : (b(), k("div", Fy, [
        A[12] || (A[12] = u("p", { class: "rlzc-hint" }, "每轮让另一个 AI 核对预设事件有没有写出来，并记下副本状态。开启后每轮多一次调用。", -1)),
        u("div", jy, [
          u("button", {
            class: Q({ on: t.value.source === "off" }),
            onClick: A[0] || (A[0] = (p) => l("off"))
          }, "关闭", 2),
          u("button", {
            class: Q({ on: t.value.source === "main" }),
            onClick: A[1] || (A[1] = (p) => l("main"))
          }, "跟随主API", 2),
          u("button", {
            class: Q({ on: t.value.source === "preset" }),
            onClick: A[2] || (A[2] = (p) => l("preset"))
          }, "自设API", 2)
        ]),
        t.value.source === "preset" ? (b(), Fe(zu, {
          key: 0,
          owner: t.value
        }, null, 8, ["owner"])) : B("", !0),
        t.value.source !== "off" ? (b(), k("div", By, [
          u("div", Uy, [
            A[7] || (A[7] = u("div", { class: "rlzc-option-label" }, [
              u("span", null, "省钱模式"),
              u("small", null, "只在有预设事件的轮次检测")
            ], -1)),
            u("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.saveMode ? "true" : "false",
              class: Q(["rlzc-toggle", { on: t.value.saveMode }]),
              onClick: A[3] || (A[3] = (p) => c("saveMode", !t.value.saveMode))
            }, [...A[6] || (A[6] = [
              u("span", null, null, -1)
            ])], 10, Vy)
          ]),
          u("div", Hy, [
            A[9] || (A[9] = u("div", { class: "rlzc-option-label" }, [
              u("span", null, "等检测完再写下一轮"),
              u("small", null, "关掉更快，状态可能晚一轮")
            ], -1)),
            u("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.wait ? "true" : "false",
              class: Q(["rlzc-toggle", { on: t.value.wait }]),
              onClick: A[4] || (A[4] = (p) => c("wait", !t.value.wait))
            }, [...A[8] || (A[8] = [
              u("span", null, null, -1)
            ])], 10, Wy)
          ]),
          u("div", Gy, [
            A[11] || (A[11] = u("span", null, "超时", -1)),
            u("div", Ky, [
              u("input", {
                type: "number",
                min: "5",
                class: "rlzc-input rlzc-input-num",
                value: t.value.timeoutSec,
                onChange: a
              }, null, 40, qy),
              A[10] || (A[10] = u("span", { class: "rlzc-unit" }, "秒", -1))
            ])
          ])
        ])) : B("", !0)
      ]))
    ]));
  }
}), Jy = { class: "rlzc-card rlzc-collapsible rlzc-live-card" }, Zy = ["aria-expanded"], Xy = {
  key: 0,
  class: "rlzc-dot",
  "data-kind": "on"
}, Qy = {
  key: 0,
  class: "rlzc-collapse-body"
}, e1 = { class: "rlzc-onair-text" }, t1 = {
  key: 0,
  class: "rlzc-onair-lock",
  "aria-label": "副本内已锁定"
}, n1 = { class: "rlzc-option-list rlzc-live-opts" }, s1 = { class: "rlzc-option-row" }, r1 = {
  class: "rlzc-segsrc rlzc-live-ctl",
  role: "group",
  "aria-label": "弹幕来源"
}, i1 = { class: "rlzc-option-row" }, o1 = { class: "rlzc-range-wrap rlzc-live-ctl" }, l1 = ["value"], a1 = { class: "rlzc-range-val" }, c1 = {
  key: 0,
  class: "rlzc-option-row"
}, u1 = { class: "rlzc-range-wrap rlzc-live-ctl" }, d1 = ["value"], A1 = { class: "rlzc-range-val" }, f1 = { class: "rlzc-option-row" }, p1 = { class: "rlzc-live-ctl rlzc-live-api" }, h1 = { class: "rlzc-pill-select" }, m1 = ["value"], g1 = ["value"], x1 = ["aria-label", "aria-expanded"], v1 = { class: "rlzc-option-row" }, b1 = { class: "rlzc-timeout-wrap" }, y1 = ["value"], k1 = { class: "rlzc-hint rlzc-live-summary" }, w1 = { class: "rlzc-option-row" }, z1 = ["aria-checked"], _1 = /* @__PURE__ */ je({
  __name: "LiveCard",
  setup(e) {
    const t = q(() => f.settings.live), n = q(() => (f.tick, f.session, Nv())), s = q(() => n.value.on);
    function r() {
      n.value.locked || xu();
    }
    const i = q(() => f.settings.cardCollapsed.live);
    function o() {
      f.settings.cardCollapsed.live = !f.settings.cardCollapsed.live, be();
    }
    const l = q(() => t.value.aiOn ? t.value.library ? "mix" : "fresh" : "library");
    function a(_) {
      t.value.library = _ !== "fresh", t.value.aiOn = _ !== "library", be();
    }
    const c = q(() => t.value.api === "main" ? "main" : t.value.presetId || "main"), d = q(() => f.settings.subApi.presets), A = /* @__PURE__ */ ge(!1);
    async function p(_) {
      const S = _.target, T = S.value;
      if (T === "new") {
        const M = (await gi("给这个API起个名字：", `我的API ${d.value.length + 1}`))?.trim();
        if (M) {
          const I = { id: Math.random().toString(36).slice(2, 10), name: M, url: "", key: "", model: "" };
          f.settings.subApi.presets = [...d.value, I], t.value.api = "preset", t.value.presetId = I.id, A.value = !0, be();
        }
        S.value = c.value;
        return;
      }
      T === "main" ? t.value.api = "main" : (t.value.api = "preset", t.value.presetId = T), A.value = !1, be();
    }
    function z(_, S, T, M, I) {
      const R = I.target, P = Math.round(Number(R.value) / M) * M;
      t.value[_] = Number.isFinite(P) ? Math.max(S, Math.min(T, P)) : t.value[_], R.value = String(t.value[_]), be();
    }
    const w = q(() => {
      const _ = t.value.freq;
      return l.value === "library" ? "每轮来源弹幕库" : l.value === "fresh" ? _ === 1 ? "每轮输出全新弹幕" : `每 ${_} 轮只输出 1 次弹幕` : _ === 1 ? "每轮输出混合弹幕" : `每 ${_} 轮输出 1 次混合弹幕；其余轮来源弹幕库`;
    });
    function x(_) {
      t.value.injectToAI = _, be();
    }
    return (_, S) => (b(), k("div", Jy, [
      u("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !i.value,
        onClick: o
      }, [
        S[8] || (S[8] = u("h4", null, "直播", -1)),
        s.value ? (b(), k("span", Xy, "直播中")) : B("", !0),
        u("span", {
          class: Q(["rlzc-collapse-arrow", { open: !i.value }])
        }, "▸", 2)
      ], 8, Zy),
      i.value ? B("", !0) : (b(), k("div", Qy, [
        S[23] || (S[23] = u("p", { class: "rlzc-hint" }, "开播后有观众弹幕和打赏，打赏计入积分。画面在状态栏的直播页。", -1)),
        u("div", {
          class: Q(["rlzc-onair", { on: n.value.on, locked: n.value.locked }])
        }, [
          S[10] || (S[10] = u("span", {
            class: "rlzc-onair-dot",
            "aria-hidden": "true"
          }, null, -1)),
          u("div", e1, [
            u("strong", null, $(n.value.on ? "直播中" : "未开播"), 1),
            u("small", null, $(n.value.note), 1)
          ]),
          n.value.locked ? (b(), k("span", t1, [...S[9] || (S[9] = [
            u("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "aria-hidden": "true"
            }, [
              u("rect", {
                x: "3",
                y: "7",
                width: "10",
                height: "7",
                rx: "1.5"
              }),
              u("path", { d: "M5.5 7V5a2.5 2.5 0 0 1 5 0v2" })
            ], -1),
            Ie(" 已锁定 ", -1)
          ])])) : (b(), k("button", {
            key: 1,
            type: "button",
            class: Q(["rlzc-onair-btn", { stop: n.value.on }]),
            onClick: r
          }, $(n.value.on ? "下播" : "开播"), 3))
        ], 2),
        u("div", n1, [
          u("div", s1, [
            S[11] || (S[11] = u("span", { class: "rlzc-live-key" }, "弹幕", -1)),
            u("div", r1, [
              u("button", {
                class: Q({ on: l.value === "library" }),
                onClick: S[0] || (S[0] = (T) => a("library"))
              }, "弹幕库", 2),
              u("button", {
                class: Q({ on: l.value === "mix" }),
                onClick: S[1] || (S[1] = (T) => a("mix"))
              }, "混合", 2),
              u("button", {
                class: Q({ on: l.value === "fresh" }),
                onClick: S[2] || (S[2] = (T) => a("fresh"))
              }, "全新", 2)
            ])
          ]),
          u("div", i1, [
            S[12] || (S[12] = u("span", { class: "rlzc-live-key" }, "每轮", -1)),
            u("div", o1, [
              u("input", {
                type: "range",
                min: "5",
                max: "25",
                step: "1",
                class: "rlzc-range",
                "aria-label": "每轮弹幕数",
                value: t.value.total,
                onInput: S[3] || (S[3] = (T) => z("total", 5, 25, 1, T))
              }, null, 40, l1),
              u("span", a1, $(t.value.total) + " 条", 1)
            ])
          ]),
          l.value === "mix" ? (b(), k("div", c1, [
            S[13] || (S[13] = u("span", { class: "rlzc-live-key" }, "新弹幕占", -1)),
            u("div", u1, [
              u("input", {
                type: "range",
                min: "10",
                max: "100",
                step: "10",
                class: "rlzc-range",
                "aria-label": "新弹幕占比",
                value: t.value.ratio,
                onInput: S[4] || (S[4] = (T) => z("ratio", 10, 100, 10, T))
              }, null, 40, d1),
              u("span", A1, $(t.value.ratio) + "%", 1)
            ])
          ])) : B("", !0),
          l.value !== "library" ? (b(), k(X, { key: 1 }, [
            u("div", f1, [
              S[17] || (S[17] = u("span", { class: "rlzc-live-key" }, "接口", -1)),
              u("div", p1, [
                u("span", h1, [
                  u("select", {
                    "aria-label": "新弹幕接口",
                    value: c.value,
                    onChange: p
                  }, [
                    S[14] || (S[14] = u("option", { value: "main" }, "跟随主API", -1)),
                    (b(!0), k(X, null, de(d.value, (T) => (b(), k("option", {
                      key: T.id,
                      value: T.id
                    }, $(T.name), 9, g1))), 128)),
                    S[15] || (S[15] = u("option", { value: "new" }, "＋ 新建接口", -1))
                  ], 40, m1)
                ]),
                t.value.api === "preset" && t.value.presetId ? (b(), k("button", {
                  key: 0,
                  class: Q(["rlzc-pill-icon", { on: A.value }]),
                  type: "button",
                  "aria-label": A.value ? "收起接口设置" : "编辑接口",
                  "aria-expanded": A.value,
                  onClick: S[5] || (S[5] = (T) => A.value = !A.value)
                }, [...S[16] || (S[16] = [
                  u("svg", {
                    width: "13",
                    height: "13",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "1.5",
                    "aria-hidden": "true"
                  }, [
                    u("path", { d: "M11 2L14 5 5 14H2v-3L11 2z" })
                  ], -1)
                ])], 10, x1)) : B("", !0)
              ])
            ]),
            A.value && t.value.api === "preset" && t.value.presetId ? (b(), Fe(zu, {
              key: 0,
              owner: t.value,
              bare: ""
            }, null, 8, ["owner"])) : B("", !0),
            u("div", v1, [
              S[20] || (S[20] = u("span", { class: "rlzc-live-key" }, "生成频率", -1)),
              u("div", b1, [
                S[18] || (S[18] = u("span", { class: "rlzc-unit" }, "每", -1)),
                u("input", {
                  type: "number",
                  min: "1",
                  max: "10",
                  class: "rlzc-pill-num",
                  "aria-label": "生成频率",
                  value: t.value.freq,
                  onChange: S[6] || (S[6] = (T) => z("freq", 1, 10, 1, T))
                }, null, 40, y1),
                S[19] || (S[19] = u("span", { class: "rlzc-unit" }, "轮", -1))
              ])
            ])
          ], 64)) : B("", !0),
          u("p", k1, $(w.value), 1),
          u("div", w1, [
            S[22] || (S[22] = u("span", { class: "rlzc-live-key" }, "弹幕传给AI", -1)),
            u("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.injectToAI ? "true" : "false",
              class: Q(["rlzc-toggle", { on: t.value.injectToAI }]),
              onClick: S[7] || (S[7] = (T) => x(!t.value.injectToAI))
            }, [...S[21] || (S[21] = [
              u("span", null, null, -1)
            ])], 10, z1)
          ])
        ])
      ]))
    ]));
  }
}), $1 = { class: "rlzc-settings" }, S1 = { class: "rlzc-card" }, C1 = ["value"], E1 = { class: "rlzc-card rlzc-collapsible rlzc-format-card" }, M1 = ["aria-expanded"], T1 = {
  key: 0,
  class: "rlzc-collapse-status"
}, I1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, N1 = { class: "rlzc-option-row" }, P1 = ["aria-checked"], L1 = { class: "rlzc-card rlzc-collapsible" }, O1 = ["aria-expanded"], D1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, R1 = { class: "rlzc-ledger-status" }, F1 = { class: "rlzc-row" }, j1 = ["placeholder"], B1 = ["disabled"], U1 = { class: "rlzc-row" }, V1 = ["disabled"], H1 = { class: "rlzc-row" }, W1 = { class: "rlzc-seg-group" }, G1 = ["aria-pressed", "onClick"], K1 = ["disabled"], q1 = {
  key: 0,
  class: "rlzc-hint rlzc-warn-text"
}, Y1 = { class: "rlzc-card rlzc-collapsible" }, J1 = ["aria-expanded"], Z1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, X1 = { class: "rlzc-depth" }, Q1 = { class: "rlzc-field rlzc-field-num" }, ek = ["value"], tk = { class: "rlzc-field rlzc-field-num" }, nk = ["value"], sk = { class: "rlzc-field rlzc-field-num" }, rk = ["value"], ik = { class: "rlzc-field rlzc-field-num" }, ok = ["value"], lk = { class: "rlzc-field rlzc-field-num" }, ak = ["value"], ck = { class: "rlzc-field rlzc-field-num" }, uk = ["value"], dk = { class: "rlzc-card rlzc-collapsible" }, Ak = ["aria-expanded"], fk = {
  key: 0,
  class: "rlzc-collapse-body"
}, pk = ["value", "onChange"], hk = { class: "rlzc-card" }, mk = {
  key: 0,
  class: "rlzc-list"
}, gk = ["onClick"], xk = {
  key: 1,
  class: "rlzc-hint"
}, vk = {
  key: 2,
  class: "rlzc-errors"
}, bk = { class: "rlzc-card" }, yk = { class: "rlzc-check" }, kk = ["checked"], wk = { class: "rlzc-check" }, zk = ["checked"], _k = /* @__PURE__ */ je({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ ge([]), n = /* @__PURE__ */ ge(null), s = /* @__PURE__ */ ge(null), r = /* @__PURE__ */ ge(null), i = /* @__PURE__ */ ge(""), o = /* @__PURE__ */ ge(""), l = /* @__PURE__ */ ge(""), a = ["D", "C", "B", "A", "S"], c = q(() => Tt(Z())), d = q(() => bn(c.value.value, f.ledger)), A = q(() => (f.tick, at(Z()))), p = q(() => Mt[A.value]), z = q(() => bs(c.value.value, f.ledger, p.value));
    function w() {
      s.value !== null && (Qx(s.value), s.value = null);
    }
    function x() {
      r.value !== null && (Xx(r.value, i.value || "手动"), r.value = null, i.value = "");
    }
    function _() {
      !o.value && !l.value || (ev(o.value || void 0, l.value || void 0), o.value = "", l.value = "", ze("success", "校正已保存，下一轮生成时写入状态栏。"));
    }
    function S(V, g) {
      const m = Math.max(0, Math.min(1e4, Math.floor(Number(g.target.value) || 0)));
      f.settings.depths[V] = m, be();
    }
    async function T(V) {
      const g = V.target, m = g.files?.[0];
      g.value = "", m && (t.value = qx(await m.text()), t.value.length || ze("success", `已导入副本包：${m.name}`));
    }
    async function M(V, g) {
      await Yt(`确定删除自定义副本包《${g}》吗？`) && Yx(V);
    }
    function I(V, g) {
      const m = Math.floor(Number(g.target.value));
      !Number.isFinite(m) || m < 1 || (f.settings.genericCaps = { ...f.settings.genericCaps, [V]: m }, be());
    }
    function R(V) {
      _v(V.target.value);
    }
    function P(V) {
      f.settings.statusBarFix = V, be();
    }
    function U(V, g) {
      f.settings[V] = g.target.checked, be();
    }
    function ne(V) {
      f.settings.cardCollapsed[V] = !f.settings.cardCollapsed[V], be();
    }
    return (V, g) => (b(), k(X, null, [
      u("div", $1, [
        u("div", S1, [
          g[19] || (g[19] = u("h4", null, "副本信息显示位置", -1)),
          u("select", {
            class: "rlzc-input",
            value: C(f).settings.panelDisplay,
            onChange: R
          }, [...g[18] || (g[18] = [
            u("option", { value: "panel" }, "扩展面板（默认）", -1),
            u("option", { value: "statusbar" }, "正文状态栏", -1)
          ])], 40, C1),
          g[20] || (g[20] = u("p", { class: "rlzc-hint" }, "选「正文状态栏」时，时限和任务由状态栏显示，系统页不重复。", -1))
        ]),
        u("div", E1, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(f).settings.cardCollapsed.statusBar,
            onClick: g[0] || (g[0] = (m) => ne("statusBar"))
          }, [
            g[21] || (g[21] = u("h4", null, "状态栏格式", -1)),
            C(f).settings.cardCollapsed.statusBar ? (b(), k("span", T1, $(C(f).settings.statusBarFix ? "自动修正" : "只提醒"), 1)) : B("", !0),
            u("span", {
              class: Q(["rlzc-collapse-arrow", { open: !C(f).settings.cardCollapsed.statusBar }])
            }, "▸", 2)
          ], 8, M1),
          C(f).settings.cardCollapsed.statusBar ? B("", !0) : (b(), k("div", I1, [
            g[24] || (g[24] = u("p", { class: "rlzc-hint" }, "AI 回复的状态栏缺失或标签写错时，下一轮提醒 AI 按原样输出。", -1)),
            u("div", N1, [
              g[23] || (g[23] = u("div", { class: "rlzc-option-label" }, [
                u("span", null, "自动修正状态栏标签"),
                u("small", null, "只改标签名，不动内容")
              ], -1)),
              u("button", {
                role: "switch",
                type: "button",
                class: Q(["rlzc-toggle rlzc-format-fix", { on: C(f).settings.statusBarFix }]),
                "aria-checked": C(f).settings.statusBarFix ? "true" : "false",
                onClick: g[1] || (g[1] = (m) => P(!C(f).settings.statusBarFix))
              }, [...g[22] || (g[22] = [
                u("span", null, null, -1)
              ])], 10, P1)
            ])
          ]))
        ]),
        u("div", L1, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(f).settings.cardCollapsed.accountFix,
            onClick: g[2] || (g[2] = (m) => ne("accountFix"))
          }, [
            g[25] || (g[25] = u("h4", null, "账户校正", -1)),
            u("span", {
              class: Q(["rlzc-collapse-arrow", { open: !C(f).settings.cardCollapsed.accountFix }])
            }, "▸", 2)
          ], 8, O1),
          C(f).settings.cardCollapsed.accountFix ? B("", !0) : (b(), k("div", D1, [
            g[27] || (g[27] = u("p", { class: "rlzc-hint" }, "当账本与AI状态栏不同步时，在此手动校正积分或写入等级位格。", -1)),
            u("div", R1, [
              u("span", null, [
                g[26] || (g[26] = Ie("当前余额：", -1)),
                u("b", null, $(d.value), 1)
              ]),
              u("span", null, $(z.value ? "⚠ 待清算" : "无待清算"), 1)
            ]),
            g[28] || (g[28] = u("div", { class: "rlzc-section-label" }, "初始积分", -1)),
            u("div", F1, [
              vt(u("input", {
                "onUpdate:modelValue": g[3] || (g[3] = (m) => s.value = m),
                type: "number",
                class: "rlzc-input",
                placeholder: `当前：${c.value.value}`
              }, null, 8, j1), [
                [
                  Rt,
                  s.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              u("button", {
                class: "rlzc-btn small",
                disabled: s.value === null,
                onClick: w
              }, "保存", 8, B1)
            ]),
            g[29] || (g[29] = u("div", { class: "rlzc-section-label" }, "追加一笔", -1)),
            u("div", U1, [
              vt(u("input", {
                "onUpdate:modelValue": g[4] || (g[4] = (m) => r.value = m),
                type: "number",
                class: "rlzc-input",
                placeholder: "金额（正/负）"
              }, null, 512), [
                [
                  Rt,
                  r.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              vt(u("input", {
                "onUpdate:modelValue": g[5] || (g[5] = (m) => i.value = m),
                class: "rlzc-input",
                placeholder: "备注（可选）"
              }, null, 512), [
                [Rt, i.value]
              ]),
              u("button", {
                class: "rlzc-btn small",
                disabled: r.value === null,
                onClick: x
              }, "追加", 8, V1)
            ]),
            g[30] || (g[30] = u("div", { class: "rlzc-section-label" }, "等级 / 位格校正", -1)),
            g[31] || (g[31] = u("p", { class: "rlzc-hint" }, "下一轮生成时在状态栏写入，之后按剧情照常。", -1)),
            u("div", H1, [
              u("div", W1, [
                (b(), k(X, null, de(a, (m) => u("button", {
                  key: m,
                  type: "button",
                  class: Q(["rlzc-seg", { active: o.value === m }]),
                  "aria-pressed": o.value === m ? "true" : "false",
                  onClick: (v) => o.value = o.value === m ? "" : m
                }, $(m), 11, G1)), 64))
              ]),
              vt(u("input", {
                "onUpdate:modelValue": g[6] || (g[6] = (m) => l.value = m),
                class: "rlzc-input",
                placeholder: "位格（如：候补）"
              }, null, 512), [
                [Rt, l.value]
              ]),
              u("button", {
                class: "rlzc-btn small",
                disabled: !o.value && !l.value,
                onClick: _
              }, "校正", 8, K1)
            ]),
            C(f).ledger.length === 0 && c.value.source === "默认值" ? (b(), k("p", q1, " 初始积分使用默认值 1000，建议设置正确的初始值。 ")) : B("", !0)
          ]))
        ]),
        u("div", Y1, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(f).settings.cardCollapsed.depths,
            onClick: g[7] || (g[7] = (m) => ne("depths"))
          }, [
            g[32] || (g[32] = u("h4", null, "注入深度", -1)),
            u("span", {
              class: Q(["rlzc-collapse-arrow", { open: !C(f).settings.cardCollapsed.depths }])
            }, "▸", 2)
          ], 8, J1),
          C(f).settings.cardCollapsed.depths ? B("", !0) : (b(), k("div", Z1, [
            g[39] || (g[39] = u("p", { class: "rlzc-hint" }, "数字越小越靠近最新消息，AI 越重视。一般不用改。", -1)),
            u("div", X1, [
              u("label", Q1, [
                g[33] || (g[33] = u("span", null, [
                  Ie("副本暗号"),
                  u("small", null, "触发世界书的副本条目")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: C(f).settings.depths.token,
                  onChange: g[8] || (g[8] = (m) => S("token", m))
                }, null, 40, ek)
              ]),
              u("label", tk, [
                g[34] || (g[34] = u("span", null, [
                  Ie("副本进度"),
                  u("small", null, "阶段、轮次、时限、副本状态")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: C(f).settings.depths.progress,
                  onChange: g[9] || (g[9] = (m) => S("progress", m))
                }, null, 40, nk)
              ]),
              u("label", sk, [
                g[35] || (g[35] = u("span", null, [
                  Ie("本轮指令"),
                  u("small", null, "本轮事件与时限写法")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: C(f).settings.depths.turn,
                  onChange: g[10] || (g[10] = (m) => S("turn", m))
                }, null, 40, rk)
              ]),
              u("label", ik, [
                g[36] || (g[36] = u("span", null, [
                  Ie("账户"),
                  u("small", null, "积分余额与清算状态")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: C(f).settings.depths.ledger,
                  onChange: g[11] || (g[11] = (m) => S("ledger", m))
                }, null, 40, ok)
              ]),
              u("label", lk, [
                g[37] || (g[37] = u("span", null, [
                  Ie("直播"),
                  u("small", null, "在看人数与最近弹幕")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: C(f).settings.depths.live,
                  onChange: g[12] || (g[12] = (m) => S("live", m))
                }, null, 40, ak)
              ]),
              u("label", ck, [
                g[38] || (g[38] = u("span", null, [
                  Ie("格式提醒"),
                  u("small", null, "状态栏格式出错后的提醒")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: C(f).settings.depths.format,
                  onChange: g[13] || (g[13] = (m) => S("format", m))
                }, null, 40, uk)
              ])
            ])
          ]))
        ]),
        Te(Yy),
        Te(_1),
        u("div", dk, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(f).settings.cardCollapsed.genericCaps,
            onClick: g[14] || (g[14] = (m) => ne("genericCaps"))
          }, [
            g[40] || (g[40] = u("h4", null, "通用副本默认轮数上限", -1)),
            u("span", {
              class: Q(["rlzc-collapse-arrow", { open: !C(f).settings.cardCollapsed.genericCaps }])
            }, "▸", 2)
          ], 8, Ak),
          C(f).settings.cardCollapsed.genericCaps ? B("", !0) : (b(), k("div", fk, [
            g[41] || (g[41] = u("p", { class: "rlzc-hint" }, "未收录副本按等级取轮数上限，简报里写了「（最多N轮）」时以简报为准。", -1)),
            (b(), k(X, null, de(a, (m) => u("label", {
              key: m,
              class: "rlzc-field rlzc-field-num"
            }, [
              u("span", null, $(m) + " 级", 1),
              u("input", {
                type: "number",
                min: "1",
                class: "rlzc-input rlzc-input-num",
                value: C(f).settings.genericCaps[m],
                onChange: (v) => I(m, v)
              }, null, 40, pk)
            ])), 64))
          ]))
        ]),
        u("div", hk, [
          g[42] || (g[42] = u("h4", null, "自定义副本包", -1)),
          C(f).settings.customPacks.length ? (b(), k("ul", mk, [
            (b(!0), k(X, null, de(C(f).settings.customPacks, (m) => (b(), k("li", {
              key: m.id
            }, [
              u("span", null, [
                Ie($(m.level) + "｜" + $(m.name) + " ", 1),
                u("small", null, "v" + $(m.version), 1)
              ]),
              u("button", {
                class: "rlzc-btn ghost small",
                onClick: (v) => M(m.id, m.name)
              }, "删除", 8, gk)
            ]))), 128))
          ])) : (b(), k("p", xk, "还没有导入自定义副本包。")),
          u("input", {
            ref_key: "fileInput",
            ref: n,
            type: "file",
            accept: ".json,application/json",
            hidden: "",
            onChange: T
          }, null, 544),
          u("button", {
            class: "rlzc-btn",
            onClick: g[15] || (g[15] = (m) => n.value?.click())
          }, "导入 JSON…"),
          t.value.length ? (b(), k("ul", vk, [
            (b(!0), k(X, null, de(t.value, (m, v) => (b(), k("li", { key: v }, $(m), 1))), 128))
          ])) : B("", !0)
        ]),
        u("div", bk, [
          g[45] || (g[45] = u("h4", null, "其他", -1)),
          u("label", yk, [
            u("input", {
              type: "checkbox",
              checked: C(f).settings.showBall,
              onChange: g[16] || (g[16] = (m) => U("showBall", m))
            }, null, 40, kk),
            g[43] || (g[43] = Ie("显示悬浮球", -1))
          ]),
          u("label", wk, [
            u("input", {
              type: "checkbox",
              checked: C(f).settings.debug,
              onChange: g[17] || (g[17] = (m) => U("debug", m))
            }, null, 40, zk),
            g[44] || (g[44] = Ie("调试模式", -1))
          ])
        ])
      ]),
      g[46] || (g[46] = u("p", { class: "rlzc-hint rlzc-key-notice" }, "密钥保存在本机酒馆设置里，分享设置或截图时注意别带出去。", -1))
    ], 64));
  }
}), $k = { class: "rlzc-debug" }, Sk = {
  key: 0,
  class: "rlzc-note"
}, Ck = {
  key: 0,
  class: "rlzc-note"
}, Ek = {
  key: 1,
  class: "rlzc-note"
}, Mk = {
  key: 2,
  class: "rlzc-card"
}, Tk = { class: "rlzc-row" }, Ik = ["disabled"], Nk = ["value"], Pk = ["disabled"], Lk = { class: "rlzc-row" }, Ok = ["disabled"], Dk = ["disabled"], Rk = {
  key: 3,
  class: "rlzc-card rlzc-collapsible"
}, Fk = ["aria-expanded"], jk = {
  key: 0,
  class: "rlzc-collapse-body"
}, Bk = ["onUpdate:modelValue", "disabled"], Uk = ["disabled"], Vk = { class: "rlzc-card rlzc-collapsible" }, Hk = ["aria-expanded"], Wk = {
  key: 0,
  class: "rlzc-collapse-status"
}, Gk = {
  key: 0,
  class: "rlzc-collapse-body"
}, Kk = {
  key: 0,
  class: "rlzc-hint"
}, qk = { class: "rlzc-hint" }, Yk = { class: "rlzc-list rlzc-warns" }, Jk = { class: "rlzc-card rlzc-collapsible" }, Zk = ["aria-expanded"], Xk = {
  key: 0,
  class: "rlzc-collapse-status"
}, Qk = {
  key: 0,
  class: "rlzc-collapse-body"
}, ew = {
  key: 0,
  class: "rlzc-list"
}, tw = ["disabled", "onClick"], nw = {
  key: 1,
  class: "rlzc-hint"
}, sw = {
  key: 4,
  class: "rlzc-card"
}, rw = { class: "rlzc-pre" }, iw = {
  key: 0,
  class: "rlzc-pre"
}, ow = {
  key: 5,
  class: "rlzc-card"
}, lw = { class: "rlzc-table" }, aw = { class: "rlzc-hint" }, cw = {
  key: 0,
  class: "rlzc-hint"
}, uw = { class: "rlzc-hint" }, dw = {
  key: 1,
  class: "rlzc-table"
}, Aw = { class: "rlzc-card rlzc-collapsible" }, fw = ["aria-expanded"], pw = {
  key: 0,
  class: "rlzc-collapse-body"
}, hw = { class: "rlzc-pre" }, mw = { class: "rlzc-card" }, gw = { class: "rlzc-pre" }, xw = { class: "rlzc-card" }, vw = { class: "rlzc-pre" }, bw = { class: "rlzc-card" }, yw = { class: "rlzc-table" }, kw = {
  key: 0,
  class: "rlzc-warn-text"
}, ww = { key: 1 }, zw = ["disabled"], _w = { class: "rlzc-card rlzc-collapsible rlzc-format-debug" }, $w = ["aria-expanded"], Sw = {
  key: 0,
  class: "rlzc-collapse-status"
}, Cw = {
  key: 0,
  class: "rlzc-collapse-body"
}, Ew = {
  key: 0,
  class: "rlzc-hint"
}, Mw = {
  key: 1,
  class: "rlzc-table"
}, Tw = {
  key: 2,
  class: "rlzc-card"
}, Iw = { class: "rlzc-table" }, Nw = /* @__PURE__ */ je({
  __name: "DebugTab",
  setup(e) {
    const t = q(() => f.settings.debug), n = /* @__PURE__ */ ge(""), s = /* @__PURE__ */ ge(null), r = /* @__PURE__ */ pr({});
    dn(
      () => [f.tick, f.pack?.id],
      () => {
        for (const m of Object.keys(r)) delete r[m];
        const g = uu() ?? {};
        for (const m of f.pack?.roles ?? []) r[m] = g[m] ?? "";
      },
      { immediate: !0 }
    );
    const i = q(() => {
      f.tick;
      const g = Z(), m = [], v = f.session?.entryIndex ?? 0;
      for (let F = v; F < g.length; F++) {
        const oe = g[F]?.extra?.rlzc;
        oe && m.push({ index: F, snap: oe });
      }
      return m.reverse().slice(0, 60);
    }), o = q(() => {
      const g = new Set((f.audit?.warnings ?? []).filter((F) => F.kind === "limit" || F.kind === "eventMissed").map((F) => F.index)), m = Z(), v = f.session?.entryIndex ?? 0;
      for (let F = v; F < m.length; F++)
        m[F]?.extra?.rlzc?.ledgerMismatch && g.add(F);
      for (const F of l.value) g.add(F.index);
      return g;
    }), l = q(() => (f.tick, sm(Z()))), a = q(() => l.value.filter((g) => !g.fixed).length), c = q(() => {
      if (f.tick, !f.session || !f.pack || !f.progress) return null;
      const g = Z(), m = _r(g, f.progress.entryIndex);
      let v = null;
      for (let F = g.length - 1; F >= f.progress.entryIndex; F--) {
        const oe = g[F]?.extra?.rlzc?.sub;
        if (oe) {
          v = oe;
          break;
        }
      }
      return {
        text: m ? Sc(f.pack, m.state) : "",
        state: m?.state ?? null,
        record: v
      };
    }), d = q(() => {
      f.tick;
      const g = Z(), m = [];
      for (let v = g.length - 1; v >= 0 && m.length < 60; v--) {
        const F = Jt(g[v]);
        F && m.push({ index: v, rec: F });
      }
      return m;
    });
    function A(g) {
      const m = g.feed.filter((v) => v.t === "tip").map((v) => `${v.name} ${v.amount}→${v.net}`);
      return g.revoke && m.push(`撤回 −${g.revoke}`), m.join("；");
    }
    function p(g) {
      const m = g.ai;
      return m ? m.pending ? "生成中…" : m.ok ? `${m.count}条（${m.ms}ms）` : `失败：${m.error ?? ""}` : "";
    }
    const z = { done: "✓", missed: "✗", void: "–" };
    function w(g) {
      if (!g.sub && !g.skippedEvents?.length) return "";
      const m = [];
      g.sub?.skipped && m.push(`未更新（${g.sub.error ?? ""}）`);
      for (const v of g.sub?.events ?? []) m.push(`${v.id}${z[v.status]}`);
      for (const v of g.skippedEvents ?? []) m.push(`跳过${v.id}`);
      return g.sub && !g.sub.skipped && !m.length && m.push("已整理"), m.join(" ");
    }
    const x = q(() => {
      if (f.tick, !f.session) return null;
      const g = Ke().books[f.session.id];
      return g ? { book: g, rounds: Hv() } : null;
    }), _ = { ending: "结局", rating: "评价", event: "事件", freak: "庄家" };
    function S(g, m) {
      return g ? g.kind === "refund" ? `全退（#${g.index}）` : g.kind === "lost" ? `全废（#${g.index}）` : `${m[g.option] ?? g.option}（#${g.index}）` : "待开奖";
    }
    function T(g) {
      return g ? g.status === "pending" ? "出题中…" : g.status === "ok" ? `已出 ${g.count} 题（${g.ms}ms）` : g.status === "late" ? `晚于封盘到达，已丢弃（${g.ms}ms）` : `失败：${g.error ?? ""}` : "事件检测关闭，未出题";
    }
    const M = { ok: "已检测", miss: "没检测", pending: "检测中" }, I = q(() => {
      const g = f.progress;
      if (!g) return null;
      const { perMessage: m, phase: v, next: F, ...oe } = g;
      return {
        phase: v.id + " " + v.name,
        ...oe,
        next: F ? { round: F.round, skipFrom: F.skipFrom, events: F.events.map((le) => le.id) } : null,
        messages: Object.keys(m).length
      };
    });
    function R() {
      n.value && pv(n.value);
    }
    function P() {
      s.value !== null && s.value >= 0 && hv(s.value);
    }
    function U() {
      mv({ ...r });
    }
    const ne = (g) => JSON.stringify(g, null, 2);
    function V(g) {
      f.settings.cardCollapsed[g] = !f.settings.cardCollapsed[g], be();
    }
    return (g, m) => (b(), k("div", $k, [
      C(f).session ? (b(), k(X, { key: 1 }, [
        t.value ? B("", !0) : (b(), k("p", Ck, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        C(f).pack && C(f).session.packVersion !== C(f).pack.version ? (b(), k("p", Ek, " 入场时副本包版本为 " + $(C(f).session.packVersion) + "，当前为 " + $(C(f).pack.version) + "。 ", 1)) : B("", !0),
        C(f).pack?.phases.length ? (b(), k("div", Mk, [
          m[9] || (m[9] = u("h4", null, "手动修正", -1)),
          u("div", Tk, [
            vt(u("select", {
              "onUpdate:modelValue": m[0] || (m[0] = (v) => n.value = v),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              m[8] || (m[8] = u("option", { value: "" }, "切换到阶段…", -1)),
              (b(!0), k(X, null, de(C(f).pack.phases, (v) => (b(), k("option", {
                key: v.id,
                value: v.id
              }, $(v.name), 9, Nk))), 128))
            ], 8, Ik), [
              [Xa, n.value]
            ]),
            u("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: R
            }, "切换", 8, Pk)
          ]),
          u("div", Lk, [
            vt(u("input", {
              "onUpdate:modelValue": m[1] || (m[1] = (v) => s.value = v),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, Ok), [
              [
                Rt,
                s.value,
                void 0,
                { number: !0 }
              ]
            ]),
            u("button", {
              class: "rlzc-btn small",
              disabled: !t.value || s.value === null,
              onClick: P
            }, "修正轮次", 8, Dk)
          ])
        ])) : B("", !0),
        C(f).pack?.roles?.length ? (b(), k("div", Rk, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(f).settings.cardCollapsed.rolesDebug,
            onClick: m[2] || (m[2] = (v) => V("rolesDebug"))
          }, [
            m[10] || (m[10] = u("h4", null, "角色登记", -1)),
            u("span", {
              class: Q(["rlzc-collapse-arrow", { open: !C(f).settings.cardCollapsed.rolesDebug }])
            }, "▸", 2)
          ], 8, Fk),
          C(f).settings.cardCollapsed.rolesDebug ? B("", !0) : (b(), k("div", jk, [
            (b(!0), k(X, null, de(C(f).pack.roles, (v) => (b(), k("label", {
              key: v,
              class: "rlzc-field"
            }, [
              u("span", null, $(v), 1),
              vt(u("input", {
                "onUpdate:modelValue": (F) => r[v] = F,
                class: "rlzc-input",
                disabled: !t.value,
                placeholder: "未登记"
              }, null, 8, Bk), [
                [Rt, r[v]]
              ])
            ]))), 128)),
            u("button", {
              class: "rlzc-btn small",
              disabled: !t.value,
              onClick: U
            }, "保存登记", 8, Uk)
          ]))
        ])) : B("", !0),
        u("div", Vk, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(f).settings.cardCollapsed.auditDebug,
            onClick: m[3] || (m[3] = (v) => V("auditDebug"))
          }, [
            m[11] || (m[11] = u("h4", null, "<副本> 核对", -1)),
            C(f).settings.cardCollapsed.auditDebug ? (b(), k("span", Wk, $(C(f).audit?.warnings.length ? "⚠️" : "无"), 1)) : B("", !0),
            u("span", {
              class: Q(["rlzc-collapse-arrow", { open: !C(f).settings.cardCollapsed.auditDebug }])
            }, "▸", 2)
          ], 8, Hk),
          C(f).settings.cardCollapsed.auditDebug ? B("", !0) : (b(), k("div", Gk, [
            C(f).audit?.warnings.length ? (b(), k(X, { key: 1 }, [
              u("p", qk, "共 " + $(C(f).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
              u("ul", Yk, [
                (b(!0), k(X, null, de(C(f).audit.warnings.slice(-30).reverse(), (v, F) => (b(), k("li", { key: F }, [
                  u("span", null, [
                    u("small", null, "#" + $(v.index) + "｜" + $(v.phase) + "第" + $(v.round) + "轮", 1),
                    m[12] || (m[12] = u("br", null, null, -1)),
                    Ie("⚠️ " + $(v.text), 1)
                  ])
                ]))), 128))
              ])
            ], 64)) : (b(), k("p", Kk, "没有发现问题。"))
          ]))
        ]),
        u("div", Jk, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(f).settings.cardCollapsed.manualDebug,
            onClick: m[4] || (m[4] = (v) => V("manualDebug"))
          }, [
            m[13] || (m[13] = u("h4", null, "手动操作记录", -1)),
            C(f).settings.cardCollapsed.manualDebug && C(f).session.manual.length ? (b(), k("span", Xk, "×" + $(C(f).session.manual.length), 1)) : B("", !0),
            u("span", {
              class: Q(["rlzc-collapse-arrow", { open: !C(f).settings.cardCollapsed.manualDebug }])
            }, "▸", 2)
          ], 8, Zk),
          C(f).settings.cardCollapsed.manualDebug ? B("", !0) : (b(), k("div", Qk, [
            C(f).session.manual.length ? (b(), k("ul", ew, [
              (b(!0), k(X, null, de(C(f).session.manual, (v, F) => (b(), k("li", { key: F }, [
                u("code", null, "#" + $(v.atIndex) + " " + $(v.kind) + " " + $("phase" in v ? v.phase : "") + $("round" in v ? v.round : "") + $("targetPhase" in v ? `${v.targetPhase}:${v.targetRound}` : ""), 1),
                u("button", {
                  class: "rlzc-btn ghost small",
                  disabled: !t.value,
                  onClick: (oe) => C(gv)(F)
                }, "撤销", 8, tw)
              ]))), 128))
            ])) : (b(), k("p", nw, "无"))
          ]))
        ]),
        c.value && (c.value.state || c.value.record) ? (b(), k("details", sw, [
          m[14] || (m[14] = u("summary", null, "副本事件检测：副本状态与最近一次检测", -1)),
          u("pre", rw, $(c.value.text || "（尚无状态）"), 1),
          c.value.record ? (b(), k("pre", iw, $(ne(c.value.record)), 1)) : B("", !0),
          m[15] || (m[15] = u("p", { class: "rlzc-hint" }, "✓ 已发生　✗ 该发生但没写出来　– 条件不成立　跳过 = 检测时判断条件已不成立，这一轮没有注入", -1))
        ])) : B("", !0),
        x.value ? (b(), k("details", ow, [
          m[21] || (m[21] = u("summary", null, "黑市：盘口赔率与检测判定", -1)),
          u("table", lw, [
            m[19] || (m[19] = u("thead", null, [
              u("tr", null, [
                u("th", null, "盘"),
                u("th", null, "题目"),
                u("th", null, "赔率"),
                u("th", null, "结果")
              ])
            ], -1)),
            u("tbody", null, [
              (b(!0), k(X, null, de(x.value.book.markets, (v) => (b(), k("tr", {
                key: v.id
              }, [
                u("td", null, $(_[v.kind]) + " " + $(v.id), 1),
                u("td", null, [
                  Ie($(v.q), 1),
                  v.judge ? (b(), k(X, { key: 0 }, [
                    m[16] || (m[16] = u("br", null, null, -1)),
                    u("small", null, $(v.judge), 1)
                  ], 64)) : B("", !0),
                  v.judgeNo ? (b(), k(X, { key: 1 }, [
                    m[17] || (m[17] = u("br", null, null, -1)),
                    u("small", null, "否：" + $(v.judgeNo), 1)
                  ], 64)) : B("", !0),
                  v.by ? (b(), k(X, { key: 2 }, [
                    m[18] || (m[18] = u("br", null, null, -1)),
                    u("small", null, "by " + $(v.by), 1)
                  ], 64)) : B("", !0)
                ]),
                u("td", null, $(v.options.map((F) => `${F.label}(${Math.round(F.p * 100)}%) ×${F.odds.toFixed(2)}`).join("　")), 1),
                u("td", null, $(S(C(f).market.results[v.id], Object.fromEntries(v.options.map((F) => [F.id, F.label])))), 1)
              ]))), 128))
            ])
          ]),
          u("p", aw, "庄家怪盘：" + $(T(x.value.book.freak)), 1),
          x.value.book.plan ? (b(), k("p", cw, "计划开 " + $(x.value.book.plan.total) + " 个盘，其中怪盘 " + $(x.value.book.plan.freak) + " 个；实开 " + $(x.value.book.markets.length) + " 个", 1)) : B("", !0),
          u("p", uw, "开盘 " + $(x.value.book.openedAt) + "　" + $(x.value.book.closedAt ? `封盘 ${x.value.book.closedAt}` : "未封盘") + $(x.value.book.frozen ? "　已定格" : ""), 1),
          x.value.rounds.length ? (b(), k("table", dw, [
            m[20] || (m[20] = u("thead", null, [
              u("tr", null, [
                u("th", null, "楼"),
                u("th", null, "检测"),
                u("th", null, "判定为真")
              ])
            ], -1)),
            u("tbody", null, [
              (b(!0), k(X, null, de(x.value.rounds, (v) => (b(), k("tr", {
                key: v.index,
                class: Q({ "rlzc-row-warn": v.state === "miss" })
              }, [
                u("td", null, $(v.index), 1),
                u("td", null, $(M[v.state]), 1),
                u("td", null, $(Object.keys(v.hits).filter((F) => v.hits[F]).join(" ") || "—"), 1)
              ], 2))), 128))
            ])
          ])) : B("", !0)
        ])) : B("", !0),
        u("div", Aw, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(f).settings.cardCollapsed.injectionDebug,
            onClick: m[5] || (m[5] = (v) => V("injectionDebug"))
          }, [
            m[22] || (m[22] = u("h4", null, "本次注入", -1)),
            u("span", {
              class: Q(["rlzc-collapse-arrow", { open: !C(f).settings.cardCollapsed.injectionDebug }])
            }, "▸", 2)
          ], 8, fw),
          C(f).settings.cardCollapsed.injectionDebug ? B("", !0) : (b(), k("div", pw, [
            u("pre", hw, $([C(f).lastInjection.token, C(f).lastInjection.progress, C(f).lastInjection.turn, C(f).lastInjection.format].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
          ]))
        ]),
        u("details", mw, [
          m[23] || (m[23] = u("summary", null, "重放结果", -1)),
          u("pre", gw, $(ne(I.value)), 1)
        ]),
        u("details", xw, [
          m[24] || (m[24] = u("summary", null, "会话原始数据", -1)),
          u("pre", vw, $(ne(C(f).session)), 1)
        ]),
        u("details", bw, [
          m[26] || (m[26] = u("summary", null, "每楼快照（最近60条）", -1)),
          u("table", yw, [
            m[25] || (m[25] = u("thead", null, [
              u("tr", null, [
                u("th", null, "楼"),
                u("th", null, "阶段"),
                u("th", null, "轮"),
                u("th", null, "钟时"),
                u("th", null, "时限"),
                u("th", null, "事件"),
                u("th", null, "检测")
              ])
            ], -1)),
            u("tbody", null, [
              (b(!0), k(X, null, de(i.value, (v) => (b(), k("tr", {
                key: v.index,
                class: Q({ "rlzc-row-warn": o.value.has(v.index) })
              }, [
                u("td", null, $(v.index) + $(v.snap.entry ? "★" : ""), 1),
                u("td", null, $(v.snap.phase), 1),
                u("td", null, $(v.snap.round), 1),
                u("td", null, $(v.snap.clock ?? ""), 1),
                u("td", null, $(v.snap.limit?.text ?? ""), 1),
                u("td", null, $(v.snap.injected.join(" ")), 1),
                u("td", null, $(w(v.snap)), 1),
                v.snap.ledgerMismatch ? (b(), k("td", kw, "状态栏 " + $(v.snap.ledgerMismatch.status) + " / 账本 " + $(v.snap.ledgerMismatch.ledger), 1)) : (b(), k("td", ww))
              ], 2))), 128))
            ])
          ])
        ]),
        u("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: m[6] || (m[6] = //@ts-ignore
          (...v) => C(Nl) && C(Nl)(...v))
        }, "删除副本会话", 8, zw)
      ], 64)) : (b(), k("p", Sk, "当前聊天没有副本会话。")),
      u("div", _w, [
        u("button", {
          class: "rlzc-collapse-head",
          "aria-expanded": !C(f).settings.cardCollapsed.formatDebug,
          onClick: m[7] || (m[7] = (v) => V("formatDebug"))
        }, [
          m[27] || (m[27] = u("h4", null, "状态栏格式", -1)),
          C(f).settings.cardCollapsed.formatDebug ? (b(), k("span", Sw, $(a.value ? "⚠️" : l.value.length ? `已修正×${l.value.length}` : "无"), 1)) : B("", !0),
          u("span", {
            class: Q(["rlzc-collapse-arrow", { open: !C(f).settings.cardCollapsed.formatDebug }])
          }, "▸", 2)
        ], 8, $w),
        C(f).settings.cardCollapsed.formatDebug ? B("", !0) : (b(), k("div", Cw, [
          l.value.length ? (b(), k("table", Mw, [
            m[29] || (m[29] = u("thead", null, [
              u("tr", null, [
                u("th", null, "楼"),
                u("th", null, "问题"),
                u("th", null, "处理")
              ])
            ], -1)),
            u("tbody", null, [
              (b(!0), k(X, null, de(l.value, (v) => (b(), k("tr", {
                key: v.index,
                class: "rlzc-row-warn"
              }, [
                u("td", null, $(v.index), 1),
                u("td", null, [
                  Ie($(C(Jh)[v.kind]), 1),
                  v.detail ? (b(), k(X, { key: 0 }, [
                    m[28] || (m[28] = u("br", null, null, -1)),
                    u("small", null, $(v.detail), 1)
                  ], 64)) : B("", !0)
                ]),
                u("td", null, $(v.fixed ? `已自动修正（原标签 ${v.from}）` : "未修正"), 1)
              ]))), 128))
            ])
          ])) : (b(), k("p", Ew, "没有发现问题。"))
        ]))
      ]),
      d.value.length ? (b(), k("details", Tw, [
        m[31] || (m[31] = u("summary", null, "直播（每楼，最近60条）", -1)),
        u("table", Iw, [
          m[30] || (m[30] = u("thead", null, [
            u("tr", null, [
              u("th", null, "楼"),
              u("th", null, "精彩度"),
              u("th", null, "热度"),
              u("th", null, "人数"),
              u("th", null, "打赏"),
              u("th", null, "AI弹幕")
            ])
          ], -1)),
          u("tbody", null, [
            (b(!0), k(X, null, de(d.value, (v) => (b(), k("tr", {
              key: v.index,
              class: Q({ "rlzc-row-warn": v.rec.ai && !v.rec.ai.ok && !v.rec.ai.pending })
            }, [
              u("td", null, $(v.index) + $(v.rec.scope === "corridor" ? "·回廊" : ""), 1),
              u("td", null, $(v.rec.hype) + $(v.rec.hurt ? "·伤" : ""), 1),
              u("td", null, $(v.rec.heat), 1),
              u("td", null, $(v.rec.viewers), 1),
              u("td", null, $(A(v.rec)), 1),
              u("td", null, $(p(v.rec)), 1)
            ], 2))), 128))
          ])
        ])
      ])) : B("", !0)
    ]));
  }
}), Pw = ["aria-label"], Lw = { class: "rlzc-head" }, Ow = { class: "rlzc-title" }, Dw = { class: "rlzc-tabs" }, Rw = ["onClick"], Fw = { class: "rlzc-body" }, jw = /* @__PURE__ */ je({
  __name: "Panel",
  setup(e) {
    const t = [
      { id: "system", label: "系统" },
      { id: "ledger", label: "账本" },
      { id: "market", label: "黑市" },
      { id: "settings", label: "设置" },
      { id: "debug", label: "调试" }
    ];
    async function n(s) {
      if (s === "debug" && !f.debugUnlocked) {
        if (!await Yt("此页会显示副本真相，确定要打开吗？")) return;
        f.debugUnlocked = !0;
      }
      f.tab = s;
    }
    return (s, r) => (b(), k("div", {
      class: "rlzc-backdrop",
      onClick: r[1] || (r[1] = Ue((i) => C(f).panelOpen = !1, ["self"]))
    }, [
      u("section", {
        class: "rlzc-panel",
        role: "dialog",
        "aria-label": C(fn)()
      }, [
        u("header", Lw, [
          u("span", Ow, $(C(fn)()), 1),
          u("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: r[0] || (r[0] = (i) => C(f).panelOpen = !1)
          }, "×")
        ]),
        u("nav", Dw, [
          (b(), k(X, null, de(t, (i) => u("button", {
            key: i.id,
            class: Q({ on: C(f).tab === i.id }),
            onClick: (o) => n(i.id)
          }, $(i.label), 11, Rw)), 64))
        ]),
        u("div", Fw, [
          C(f).tab === "system" ? (b(), Fe(fb, { key: 0 })) : C(f).tab === "ledger" ? (b(), Fe(Tb, { key: 1 })) : C(f).tab === "market" ? (b(), Fe(ly, { key: 2 })) : C(f).tab === "settings" ? (b(), Fe(_k, { key: 3 })) : C(f).tab === "debug" && C(f).debugUnlocked ? (b(), Fe(Nw, { key: 4 })) : B("", !0)
        ])
      ], 8, Pw)
    ]));
  }
}), Bw = /* @__PURE__ */ je({
  __name: "App",
  setup(e) {
    return (t, n) => (b(), k(X, null, [
      C(f).settings.showBall ? (b(), Fe(u0, { key: 0 })) : B("", !0),
      C(f).panelOpen ? (b(), Fe(jw, { key: 1 })) : B("", !0),
      Te(n0)
    ], 64));
  }
}), Uw = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);--ok: #4caf72;--bad: #c9534f;font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:5000;width:48px;height:48px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--muted);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball.is-active{color:var(--accent);border-color:var(--accent)}.rlzc-ball.has-ring{border-color:transparent}.rlzc-ball.is-warn{color:var(--bad)}.rlzc-ball-inf{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;pointer-events:none}.rlzc-ball-ring{position:absolute;inset:-1px;width:48px;height:48px;transform:rotate(-90deg);pointer-events:none}.rlzc-ball-ring circle{fill:none;stroke-width:3}.rlzc-ball-ring-base{stroke:var(--line)}.rlzc-ball-ring-bar{stroke:var(--accent);stroke-linecap:round;transition:stroke-dasharray .3s ease}.rlzc-ball.is-warn .rlzc-ball-ring-bar{stroke:var(--bad)}@media(prefers-reduced-motion:reduce){.rlzc-ball-ring-bar{transition:none}}.rlzc-ball-live{position:absolute;top:1px;left:1px;width:12px;height:12px;border-radius:50%;background:var(--bad);border:2px solid var(--solid);pointer-events:none}.rlzc-ball-badge{position:absolute;top:-4px;right:-4px;min-width:18px;height:18px;padding:0 5px;border-radius:9px;background:var(--accent);color:var(--bg);font-size:11px;font-weight:700;line-height:18px;text-align:center;pointer-events:none}.rlzc-entry-card{position:fixed;z-index:9000;top:calc(var(--topBarBlockSize, 40px) + 12px);right:12px;width:300px;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:12px;box-shadow:0 6px 24px #0000004d;padding:10px 12px 4px 14px}@media(max-width:323.98px){.rlzc-entry-card{left:12px;width:auto}}@media(min-width:800px){.rlzc-entry-card.beside-panel{right:476px}}.rlzc-entry-close{position:absolute;top:0;right:0;width:44px;height:44px;display:grid;place-items:center;background:none;border:0;color:var(--muted);font:inherit;font-size:14px;cursor:pointer;padding:0}.rlzc-entry-close:hover{color:var(--fg)}.rlzc-pending{position:relative;padding:10px 12px 4px 14px}.rlzc-entry-kicker{display:flex;align-items:center;gap:5px;font-size:12px;color:var(--muted);padding-right:36px}.rlzc-entry-inf{width:16px;height:16px;fill:none;stroke:var(--accent);stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}.rlzc-entry-title{display:flex;align-items:center;gap:8px;margin:6px 0 2px;padding-right:30px}.rlzc-entry-level{flex:0 0 auto;display:inline-grid;place-items:center;min-width:24px;height:24px;padding:0 4px;border-radius:6px;border:1px solid var(--accent);color:var(--accent);font-size:13px;font-weight:800;line-height:1}.rlzc-entry-name{font-size:16px;font-weight:700;min-width:0;overflow-wrap:anywhere}.rlzc-entry-note{font-size:12px;color:var(--muted);margin-top:2px}.rlzc-entry-foot{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:10px;padding-top:2px;border-top:1px solid var(--line)}.rlzc-entry-live{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0;margin-left:-2px;background:none;border:0;color:var(--fg);font:inherit;font-size:13px;cursor:pointer}.rlzc-entry-live .rlzc-toggle{display:inline-block;width:44px}.rlzc-entry-live .rlzc-toggle:after{content:none}.rlzc-entry-live:focus-visible{outline:2px solid var(--accent);outline-offset:2px;border-radius:6px}.rlzc-toggle.danger.on{background:color-mix(in srgb,var(--bad) 75%,transparent);border-color:var(--bad)}.rlzc-entry-live.on{color:var(--bad)}.rlzc-entry-actions{display:flex;gap:6px}.rlzc-entry-actions .rlzc-btn{min-height:44px;min-width:60px}.rlzc-entry-actions .rlzc-entry-go{background:var(--accent);border-color:var(--accent);font-weight:700;color:var(--bg);color:rgb(from var(--bg) r g b)}.rlzc-entry-fade-enter-active,.rlzc-entry-fade-leave-active{transition:opacity .16s ease,transform .16s ease}.rlzc-entry-fade-enter-from,.rlzc-entry-fade-leave-to{opacity:0;transform:translateY(-4px)}@media(prefers-reduced-motion:reduce){.rlzc-entry-fade-enter-active,.rlzc-entry-fade-leave-active{transition:none}.rlzc-entry-fade-enter-from,.rlzc-entry-fade-leave-to{transform:none}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:5001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-docs{border:1px solid var(--line);border-radius:10px;padding:2px 12px 10px;background:var(--soft)}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}.rlzc-intro{line-height:1.6;margin-bottom:8px}.rlzc-grow{flex:1;margin:0}.rlzc-grow>.rlzc-input{flex:1;min-width:0}.rlzc-subline{font-size:12px;color:var(--muted);margin:0}.rlzc-depth .rlzc-field>span{display:flex;flex-direction:column;gap:2px}.rlzc-depth .rlzc-field>span small{color:var(--muted);font-size:11px;line-height:1.4}.rlzc-field.rlzc-field-num>span{flex:1 1 auto;min-width:0}.rlzc-subapi-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}.rlzc-subapi-head h4{margin:0}.rlzc-dot{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--muted)}.rlzc-dot:before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--muted)}.rlzc-dot[data-kind=on]{color:#4caf72}.rlzc-dot[data-kind=on]:before{background:#4caf72}.rlzc-dot[data-kind=warn]{color:#c9833a}.rlzc-dot[data-kind=warn]:before{background:#c9833a}.rlzc-segsrc{display:flex;width:100%;border:1px solid var(--line);border-radius:8px;overflow:hidden;margin:8px 0}.rlzc-segsrc button{flex:1;padding:8px 4px;font:inherit;font-size:13px;background:none;border:none;border-right:1px solid var(--line);color:var(--muted);cursor:pointer;min-height:44px}.rlzc-segsrc button:last-child{border-right:none}.rlzc-segsrc button.on{background:color-mix(in srgb,var(--accent) 15%,transparent);color:var(--fg);font-weight:600}.rlzc-segsrc button:hover:not(.on){background:var(--soft);color:var(--fg)}.rlzc-preset-area{background:color-mix(in srgb,var(--bg) 50%,transparent);border:1px solid var(--line);border-radius:8px;padding:10px;display:flex;flex-direction:column;gap:8px;margin-bottom:8px}.rlzc-preset-row{display:flex;gap:6px;align-items:center}.rlzc-preset-row .rlzc-input{flex:1;min-width:0}.rlzc-icon-btn{flex:0 0 44px;width:44px;height:44px;display:grid;place-items:center;background:none;border:1px solid var(--line);border-radius:8px;color:var(--muted);cursor:pointer;padding:0}.rlzc-icon-btn:hover:not(:disabled){color:var(--fg);border-color:var(--fg)}.rlzc-icon-btn.rlzc-danger{color:#c9534f;border-color:color-mix(in srgb,#c9534f 40%,transparent)}.rlzc-icon-btn.rlzc-danger:hover:not(:disabled){background:color-mix(in srgb,#c9534f 12%,transparent);border-color:#c9534f}.rlzc-icon-btn:disabled{opacity:.35;cursor:not-allowed}.rlzc-stacked-field{display:flex;flex-direction:column;gap:4px}.rlzc-key-wrap{position:relative;display:flex}.rlzc-key-wrap .rlzc-input{padding-right:44px;width:100%}.rlzc-eye-btn{position:absolute;right:0;top:0;bottom:0;width:44px;display:grid;place-items:center;background:none;border:none;color:var(--muted);cursor:pointer;padding:0}.rlzc-eye-btn:hover{color:var(--fg)}.rlzc-input-disabled{color:var(--muted);cursor:default}.rlzc-check-btns{display:grid;grid-template-columns:1fr 1fr;gap:8px}.rlzc-check-btns .rlzc-btn{min-height:44px;width:100%}.rlzc-check-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:4px}.rlzc-check-list li{display:flex;align-items:baseline;gap:10px;font-size:12px;line-height:1.45}.rlzc-check-list li[data-kind=on]{color:#4caf72}.rlzc-check-list li[data-kind=warn]{color:#c9833a}.rlzc-check-text{flex:1;min-width:0;overflow-wrap:anywhere}.rlzc-check-time{flex:none;color:var(--muted);font-variant-numeric:tabular-nums}.rlzc-option-list{border-top:1px solid var(--line);margin-top:4px;padding-top:4px;display:flex;flex-direction:column}.rlzc-option-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 50%,transparent);min-height:44px}.rlzc-option-row:last-child{border-bottom:none}.rlzc-option-label{display:flex;flex-direction:column;gap:2px;font-size:13px}.rlzc-option-label small{font-size:11px;color:var(--muted)}.rlzc-option-row-timeout>span{font-size:13px}.rlzc-timeout-wrap{display:flex;align-items:center;gap:6px;flex:0 0 auto}.rlzc-input.rlzc-input-num{flex:0 0 auto;width:calc(4ch + 20px);margin-left:auto;text-align:right;font-variant-numeric:tabular-nums;-moz-appearance:textfield;appearance:textfield}.rlzc-input-num::-webkit-inner-spin-button,.rlzc-input-num::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.rlzc-seg.active{background:var(--accent);border-color:var(--accent);font-weight:700;color:var(--bg);color:rgb(from var(--bg) r g b)}.rlzc-unit{font-size:13px;color:var(--muted)}.rlzc-toggle{flex:0 0 44px;height:26px;border-radius:13px;background:color-mix(in srgb,var(--muted) 30%,transparent);border:1px solid var(--line);cursor:pointer;padding:0;position:relative;transition:background .15s}.rlzc-toggle.on{background:color-mix(in srgb,var(--accent) 70%,transparent);border-color:var(--accent)}.rlzc-toggle span{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:var(--fg);transition:transform .15s}.rlzc-toggle.on span{transform:translate(18px)}.rlzc-toggle:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.rlzc-toggle:after{content:"";position:absolute;inset:-10px 0}.rlzc-segsrc button:disabled{opacity:.4;cursor:not-allowed}.rlzc-segsrc button:disabled:hover{background:none;color:var(--muted)}.rlzc-live-card .rlzc-input-num{min-height:44px}.rlzc-onair{display:flex;align-items:center;gap:12px;margin:10px 0 4px;padding:10px 10px 10px 14px;border:1px solid var(--line);border-radius:10px;background:var(--soft)}.rlzc-onair.on{border-color:color-mix(in srgb,var(--bad) 45%,transparent);background:color-mix(in srgb,var(--bad) 8%,transparent)}.rlzc-onair-dot{flex:none;width:10px;height:10px;border-radius:50%;background:color-mix(in srgb,var(--muted) 55%,transparent)}.rlzc-onair.on .rlzc-onair-dot{background:var(--bad);box-shadow:0 0 0 4px color-mix(in srgb,var(--bad) 22%,transparent);animation:rlzc-onair-pulse 1.8s ease-in-out infinite}@keyframes rlzc-onair-pulse{50%{box-shadow:0 0 0 7px color-mix(in srgb,var(--bad) 8%,transparent)}}@media(prefers-reduced-motion:reduce){.rlzc-onair.on .rlzc-onair-dot{animation:none}}.rlzc-onair-text{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-onair-text strong{font-size:14px;font-weight:600;color:var(--fg)}.rlzc-onair.on .rlzc-onair-text strong{color:var(--bad)}.rlzc-onair-text small{font-size:12px;color:var(--muted);overflow-wrap:anywhere}.rlzc-onair-btn{flex:none;min-width:76px;min-height:44px;padding:0 16px;border-radius:22px;font:inherit;font-weight:600;cursor:pointer;border:1px solid var(--bad);background:var(--bad);color:#fff}.rlzc-onair-btn.stop{background:none;color:var(--bad)}.rlzc-onair-btn:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.rlzc-onair-lock{flex:none;display:inline-flex;align-items:center;gap:5px;min-height:44px;padding:0 12px;font-size:12px;color:var(--muted);border:1px dashed var(--line);border-radius:22px}.rlzc-option-row-stack{flex-direction:column;align-items:stretch;gap:0}.rlzc-option-row-stack .rlzc-segsrc{margin:6px 0 2px}.rlzc-option-row-stack .rlzc-hint{margin:2px 0 0}.rlzc-key-notice{text-align:center;margin-top:4px}.rlzc-ledger-hero-card{display:flex;flex-direction:column;gap:0}.rlzc-ledger-hero-label{font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-ledger-hero-num{font-size:32px;font-variant-numeric:tabular-nums;line-height:1.1;letter-spacing:-.02em;margin-bottom:10px}.rlzc-ledger-hero-num.negative{color:#c9534f}.rlzc-ledger-hero-divider{height:1px;background:var(--line);margin:0 0 10px}.rlzc-ledger-hero-cols{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.rlzc-ledger-hero-col{display:flex;flex-direction:column;gap:3px}.rlzc-ledger-hero-col-label{font-size:11px;color:var(--muted)}.rlzc-ledger-hero-col-val{font-size:14px;font-variant-numeric:tabular-nums;font-weight:600}.rlzc-ledger-warn{color:#c9833a}.rlzc-ledger-init-hint{font-size:11px;color:var(--muted);margin:10px 0 0}.rlzc-ledger-list{list-style:none;margin:6px 0 0;padding:0}.rlzc-ledger-item{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:7px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.rlzc-ledger-item:last-child{border-bottom:none}.rlzc-ledger-item-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-ledger-item-src{font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rlzc-ledger-item-time{font-size:11px;color:var(--muted)}.rlzc-ledger-item-delta{flex:0 0 auto;font-size:14px;font-variant-numeric:tabular-nums;font-weight:600;text-align:right;white-space:nowrap}.rlzc-ledger-item-right{flex:0 0 auto;display:flex;flex-direction:column;align-items:flex-end;gap:2px}.rlzc-ledger-item-after{font-size:11px;color:var(--muted);font-variant-numeric:tabular-nums;white-space:nowrap}.rlzc-ledger-item-delta.pos{color:#4caf72}.rlzc-ledger-item-delta.neg{color:#c9534f}.rlzc-collapsible{padding:0}.rlzc-collapse-head{width:100%;display:flex;align-items:center;gap:8px;padding:10px 12px;min-height:44px;background:none;border:none;color:inherit;font:inherit;cursor:pointer;text-align:left}.rlzc-collapsible .rlzc-collapse-head h4{flex:1;margin:0}.rlzc-collapse-head:hover{background:var(--soft);border-radius:10px}.rlzc-collapse-arrow{flex:0 0 auto;font-size:13px;color:var(--muted);display:inline-block;transition:transform .15s ease;transform:rotate(0)}.rlzc-collapse-arrow.open{transform:rotate(90deg)}.rlzc-collapse-body{padding:0 12px 10px}.rlzc-collapse-status{flex:0 0 auto;font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums}.rlzc-collapse-head .rlzc-dot{font-size:12px}.rlzc-market-tabs button{flex:1 1 0;min-height:44px}.rlzc-mk-status{font-size:14px}.rlzc-mk-q{display:flex;align-items:baseline;gap:8px;margin-bottom:8px;font-weight:600;overflow-wrap:anywhere}.rlzc-mk-tag{flex:0 0 auto;font-size:11px;font-weight:600;color:var(--accent);padding:1px 6px;border:1px solid color-mix(in srgb,var(--accent) 60%,transparent);border-radius:4px}.rlzc-mk-opts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}.rlzc-mk-opt{display:flex;align-items:center;justify-content:space-between;gap:6px;min-height:44px;padding:6px 10px;font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 60%,transparent);border:1px solid var(--line);border-radius:8px;cursor:pointer;text-align:left}.rlzc-mk-opt b{font-weight:600;font-variant-numeric:tabular-nums;color:var(--muted)}.rlzc-mk-opt.on{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 16%,transparent)}.rlzc-mk-opt.on b{color:var(--fg)}.rlzc-mk-opt:disabled{opacity:.55;cursor:not-allowed}.rlzc-mk-bet{margin-top:8px}.rlzc-mk-bet .rlzc-input,.rlzc-mk-bet .rlzc-btn{min-height:44px}.rlzc-mk-bet .rlzc-btn{flex:0 0 auto;min-width:64px}.rlzc-mk-red{color:var(--bad);font-size:12px;margin:2px 0}.rlzc-mk-mine{list-style:none;margin:8px 0 0;padding:6px 0 0;border-top:1px dashed var(--line);font-size:12px;color:var(--muted)}.rlzc-mk-mine li{padding:2px 0;font-variant-numeric:tabular-nums}.rlzc-tk-list{list-style:none;margin:0;padding:0}.rlzc-tk{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:52px;padding:6px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.rlzc-tk:last-child{border-bottom:none}.rlzc-tk-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-tk-title{font-size:13px;overflow-wrap:anywhere}.rlzc-tk-left small{font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums}.rlzc-stamp{flex:0 0 40px;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:16px;border:2px solid currentColor;transform:rotate(-14deg);box-shadow:inset 0 0 0 2px color-mix(in srgb,currentColor 18%,transparent)}.rlzc-stamp.win{color:var(--ok)}.rlzc-stamp.lose{color:var(--bad)}.rlzc-stamp.refund{color:var(--muted)}.rlzc-stamp.pending{color:var(--muted);border-style:dashed;border-width:1px;box-shadow:none;transform:none;font-weight:600;font-size:14px}.rlzc-cs-tables{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-cs-table{display:flex;flex-direction:column;align-items:flex-start;gap:4px;min-height:76px;text-align:left;font:inherit;color:var(--fg);cursor:pointer}.rlzc-cs-table b{font-size:15px}.rlzc-cs-table small{font-size:12px;color:var(--muted);line-height:1.45}.rlzc-cs-table.on{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,transparent)}.rlzc-cs-play h4{margin-bottom:4px}.rlzc-cs-seg{margin:6px 0}.rlzc-cs-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:4px;margin:6px 0}.rlzc-cs-grid.door{grid-template-columns:repeat(5,minmax(0,1fr))}.rlzc-cs-grid button{min-height:44px;padding:0 2px;font:inherit;font-size:13px;color:var(--muted);cursor:pointer;background:none;border:1px solid var(--line);border-radius:8px;font-variant-numeric:tabular-nums}.rlzc-cs-grid button.on{color:var(--fg);border-color:var(--accent);background:color-mix(in srgb,var(--accent) 15%,transparent);font-weight:600}.rlzc-cs-face{margin-top:10px;min-height:52px;display:grid;place-items:center;font-size:26px;font-weight:800;font-variant-numeric:tabular-nums;border:1px dashed var(--line);border-radius:10px}.rlzc-cs-face.rolling{color:var(--muted)}.rlzc-cs-result{margin:8px 0 0;font-weight:600;font-variant-numeric:tabular-nums}.rlzc-cs-result.win{color:var(--ok)}.rlzc-cs-result.lose{color:var(--bad)}.rlzc-live-key{font-size:13px;flex:none}.rlzc-live-ctl{flex:1;min-width:0;max-width:240px;margin:0}.rlzc-live-opts>.rlzc-option-row{min-height:48px;padding:6px 0}.rlzc-live-opts .rlzc-segsrc{margin:0}.rlzc-live-opts .rlzc-segsrc button{min-height:34px;padding:4px}.rlzc-live-opts .rlzc-range-wrap{min-height:34px}.rlzc-live-api{display:flex;gap:8px;align-items:center;justify-content:flex-end}.rlzc-pill-select{position:relative;display:inline-flex;min-width:0;max-width:170px}.rlzc-pill-select select{appearance:none;-webkit-appearance:none;min-width:0;max-width:100%;height:30px;padding:0 26px 0 12px;border-radius:15px;border:1px solid var(--line);background:color-mix(in srgb,var(--bg) 60%,transparent);color:var(--fg);font:inherit;font-size:13px;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rlzc-pill-select select:focus-visible{outline:2px solid var(--accent);outline-offset:1px}.rlzc-pill-select select option{background:var(--solid);color:var(--fg)}.rlzc-pill-select:after{content:"";position:absolute;right:12px;top:50%;width:6px;height:6px;pointer-events:none;border-right:1.5px solid var(--muted);border-bottom:1.5px solid var(--muted);transform:translateY(-70%) rotate(45deg)}.rlzc-pill-icon{flex:none;width:30px;height:30px;padding:0;border-radius:50%;display:grid;place-items:center;border:1px solid var(--line);background:none;color:var(--muted);cursor:pointer;position:relative}.rlzc-pill-icon:hover,.rlzc-pill-icon.on{color:var(--fg);border-color:var(--fg)}.rlzc-pill-icon:focus-visible{outline:2px solid var(--accent);outline-offset:1px}.rlzc-pill-icon:after{content:"";position:absolute;inset:-7px}.rlzc-pill-num{width:32px;height:30px;border-radius:8px;padding:0;text-align:center;border:1px solid var(--line);background:color-mix(in srgb,var(--bg) 60%,transparent);color:var(--fg);font:inherit;font-size:13px;font-variant-numeric:tabular-nums;-moz-appearance:textfield;appearance:textfield}.rlzc-pill-num::-webkit-inner-spin-button,.rlzc-pill-num::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.rlzc-pill-num:focus-visible{outline:2px solid var(--accent);outline-offset:1px}.rlzc-live-opts .rlzc-preset-area{margin:2px 0 6px}.rlzc-range-wrap{display:flex;align-items:center;gap:10px;min-height:44px}.rlzc-range{flex:1;min-width:0;accent-color:var(--accent);height:28px}.rlzc-range-val{min-width:44px;text-align:right;font-variant-numeric:tabular-nums;color:var(--fg);font-size:13px}.rlzc-live-summary{margin:0;padding:8px 0;min-height:36px;display:flex;align-items:center;border-bottom:1px solid color-mix(in srgb,var(--line) 50%,transparent)}.rlzc-preset-links{display:flex;justify-content:flex-end;gap:4px}.rlzc-text-btn{background:none;border:none;font:inherit;font-size:12px;color:var(--muted);padding:6px 8px;min-height:32px;cursor:pointer;border-radius:6px}.rlzc-text-btn:hover{background:var(--soft);color:var(--fg)}.rlzc-text-btn.rlzc-danger-text,.rlzc-danger-text{color:#c9534f}', Vw = "#rlzc-settings-drawer .rlzc-set-actions{display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:center;gap:6px;margin-left:auto}#rlzc-settings-drawer .rlzc-set-actions .menu_button{margin:0;width:auto}#rlzc-settings-drawer .rlzc-set-top{margin:8px 0 12px}#rlzc-settings-drawer .rlzc-set-card,#rlzc-settings-drawer .rlzc-set-updates{border:1px solid var(--SmartThemeBorderColor, #8884);border-radius:12px;padding:12px;margin-bottom:12px}#rlzc-settings-drawer .rlzc-set-row{display:flex;align-items:center;flex-wrap:wrap;gap:8px;padding:8px 0}#rlzc-settings-drawer .rlzc-set-row+.rlzc-set-row{border-top:1px dashed var(--SmartThemeBorderColor, #8884)}#rlzc-settings-drawer .rlzc-set-value{flex:1;min-width:60px;overflow-wrap:anywhere}#rlzc-settings-drawer input.rlzc-set-value{width:0;margin:0}#rlzc-settings-drawer .rlzc-update-status{display:block;opacity:.75;margin:4px 0 10px;overflow-wrap:anywhere}#rlzc-settings-drawer .rlzc-set-updates summary{cursor:pointer;font-weight:700}#rlzc-settings-drawer .rlzc-set-update{margin-top:12px;overflow-wrap:anywhere}#rlzc-settings-drawer .rlzc-set-update div{margin-top:4px;opacity:.85}", Hw = [
  {
    title: "2026-10-17 · 扩展设置",
    text: "名称可在设置中修改，留空恢复默认；操作按钮靠右；新增最近两条更新说明。"
  },
  {
    title: "2026-10-17 · 悬浮球修复",
    text: "拖动或点击悬浮球不再误关酒馆当前抽屉，避免从角色列表回到主页面；保留正常拖动和打开面板功能。"
  }
];
function Ww(e = import.meta.url) {
  const t = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(e, globalThis.location?.href ?? "http://localhost/").pathname));
  return t ? t[1] : null;
}
async function _u(e, t, n) {
  const s = ve().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
  return fetch(e, { method: "POST", headers: s, body: JSON.stringify({ extensionName: t, global: n }) });
}
async function Gw() {
  const e = Ww();
  if (!e) throw new Error("无法确定扩展的安装位置");
  for (const t of [!1, !0]) {
    const n = await _u("/api/extensions/version", e, t);
    if (n.status === 404) continue;
    if (!n.ok) throw new Error(`检查失败（${n.status}）`);
    const s = await n.json();
    return {
      folder: e,
      global: t,
      isGit: !!s.currentCommitHash,
      isUpToDate: !!s.isUpToDate,
      commit: String(s.currentCommitHash ?? "").slice(0, 7),
      branch: String(s.currentBranchName ?? "")
    };
  }
  throw new Error("找不到扩展的安装文件夹");
}
async function Kw(e) {
  const t = await _u("/api/extensions/update", e.folder, e.global);
  if (!t.ok) throw new Error(t.status === 403 ? "没有权限更新全局扩展" : `更新失败（${t.status}）`);
}
const qw = "回廊种菜系统", Yw = 100, Jw = [], Zw = [], Xw = "dist/index.js", Qw = "xiaxiii", e2 = "1.2.1", t2 = "https://github.com/xiaxiii/M-bius-strip", n2 = !0, s2 = "rlzcInterceptor", ri = {
  display_name: qw,
  loading_order: Yw,
  requires: Jw,
  optional: Zw,
  js: Xw,
  author: Qw,
  version: e2,
  homePageUrl: t2,
  auto_update: n2,
  generate_interceptor: s2
}, r2 = {
  /** 有新版本、还没更新时：打开酒馆弹窗与扩展设置里的更新状态 */
  有新版本: [
    "喂喂喂，有新版本啦～（现在是 {版本}）",
    "EC 偷偷改咗少少嘢，bb 嚟更新下啦～（现在是 {版本}）",
    "bb呀，EC叫你嚟更新喇喂～（现在是 {版本}）",
    "EC 又给回廊添了点新东西，bb 快来看看！（现在是 {版本}）",
    "叩叩叩，新版本到啦～（现在是 {版本}）"
  ]
};
function i2(e, t = {}, n = Math.random) {
  const s = r2[e];
  return (s[Math.floor(n() * s.length)] ?? s[0] ?? "").replace(/\{([^{}]+)\}/g, (i, o) => t[o] ?? i);
}
const Ul = "rlzc-host", Vl = "rlzc-menu-btn", Hl = "rlzc-settings-drawer";
function o2() {
  if (document.getElementById(Ul)) return;
  const e = document.createElement("div");
  e.id = Ul, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = Uw, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), HA(Bw).mount(s), $u(), Su();
}
function $u(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => $u(e + 1), 500);
    return;
  }
  if (document.getElementById(Vl)) return;
  const n = document.createElement("div");
  n.id = Vl, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0;
  const s = document.createElement("div");
  s.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const r = document.createElement("span");
  dn(fn, (i) => {
    r.textContent = i, n.title = `打开${i}面板`;
  }, { immediate: !0 }), n.append(s, r), n.addEventListener("click", () => {
    f.panelOpen = !f.panelOpen;
  }), t.appendChild(n);
}
function Su(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => Su(e + 1), 500);
    return;
  }
  if (document.getElementById(Hl)) return;
  const n = (ie, D = "", Y = "") => {
    const K = document.createElement(ie);
    return D && (K.className = D), Y && (K.textContent = Y), K;
  }, s = n("div");
  s.id = Hl;
  const r = n("div", "inline-drawer"), i = n("div", "inline-drawer-toggle inline-drawer-header"), o = n("div", "flex-container alignitemscenter margin0"), l = n("small", "rlzc-update-badge", "有更新");
  l.style.cssText = "display:none;margin-left:6px;padding:0 6px;border-radius:8px;background:var(--SmartThemeQuoteColor,#d88a2a);color:#fff;font-weight:normal;";
  const a = n("b");
  dn(fn, (ie) => a.textContent = ie, { immediate: !0 }), o.append(a, l), i.append(o, n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const c = n("div", "inline-drawer-content"), d = n("style", "", Vw);
  s.append(d);
  const A = (ie, D) => {
    const Y = document.createElement("button");
    return Y.type = "button", Y.className = "menu_button menu_button_icon", D && Y.append(n("i", `fa-solid ${D}`)), Y.append(n("span", "", ie)), Y;
  }, p = n("div", "rlzc-set-row"), z = n("span", "rlzc-set-value");
  dn(fn, (ie) => z.textContent = ie, { immediate: !0 });
  const w = A("修改", "fa-pencil");
  w.title = "修改名称（留空恢复默认）";
  const x = n("div", "rlzc-set-actions");
  x.append(w), p.append(n("span", "", "名称"), z, x), w.addEventListener("click", () => {
    const ie = document.createElement("input");
    ie.className = "text_pole rlzc-set-value", ie.maxLength = 30, ie.value = fn(), ie.placeholder = zi, ie.setAttribute("aria-label", "扩展名称");
    const D = A("保存", "fa-check"), Y = A("取消", "fa-xmark");
    z.replaceWith(ie), x.replaceChildren(D, Y);
    const K = (ae) => {
      if (ae) {
        const Zt = ie.value.trim().slice(0, 30);
        f.settings.appName = Zt === zi ? "" : Zt, be();
      }
      ie.replaceWith(z), x.replaceChildren(w), w.focus();
    };
    D.addEventListener("click", () => K(!0)), Y.addEventListener("click", () => K(!1)), ie.addEventListener("keydown", (ae) => {
      ae.isComposing || (ae.key === "Enter" || ae.key === "Escape") && (ae.preventDefault(), ae.stopPropagation(), K(ae.key === "Enter"));
    }), ie.focus(), ie.select();
  });
  const _ = A("打开面板", "fa-seedling");
  _.addEventListener("click", () => f.panelOpen = !0);
  const S = A("悬浮球回到默认位置");
  S.addEventListener("click", () => {
    f.settings.ball = { x: null, y: null }, f.settings.showBall = !0, be();
  });
  const T = n("label", "checkbox_label"), M = document.createElement("input");
  M.type = "checkbox", M.addEventListener("change", () => {
    f.settings.showBall = M.checked, be();
  }), T.append(M, n("span", "", "显示悬浮球")), dn(() => f.settings.showBall, (ie) => M.checked = ie, { immediate: !0 });
  const I = n("div", "rlzc-set-actions rlzc-set-top");
  I.append(_, S);
  const R = n("div", "rlzc-set-row"), P = n("small", "rlzc-update-status", "正在检查更新…"), U = A("检查更新", "fa-rotate"), ne = A("立即更新"), V = A("刷新页面");
  ne.style.display = "none", V.style.display = "none";
  const g = n("div", "rlzc-set-actions");
  g.append(U, ne, V), R.append(n("span", "", "版本"), n("span", "rlzc-set-value", ri.version), g);
  let m = null, v = !1, F = "";
  const oe = () => F || (F = i2("有新版本", { 版本: ri.version })), le = async (ie = !1) => {
    if (!v) {
      v = !0, P.textContent = "正在检查更新…", ne.style.display = "none";
      try {
        m = await Gw();
        const D = `（${ri.version}）`;
        m.isGit ? m.isUpToDate ? P.textContent = `已是最新版本${D}` : (P.textContent = oe(), ne.style.display = "") : P.textContent = "不是用仓库地址安装的，无法检查更新。", l.style.display = m.isGit && !m.isUpToDate ? "" : "none";
      } catch (D) {
        P.textContent = `检查更新失败：${D.message}`;
        return;
      } finally {
        v = !1;
      }
      ie && m?.isGit && !m.isUpToDate && qe();
    }
  }, Ce = async () => {
    if (!m || v) return !1;
    v = !0, P.textContent = "正在更新…", ne.style.display = "none";
    try {
      return await Kw(m), l.style.display = "none", P.textContent = "更新完成，刷新页面后生效。", V.style.display = "", !0;
    } catch (ie) {
      throw P.textContent = `更新失败：${ie.message}`, ne.style.display = "", ie;
    } finally {
      v = !1;
    }
  }, qe = () => dl(oe(), "立即更新", () => {
    Ce().then((ie) => {
      ie && dl("更新完成，刷新页面后生效。", "刷新页面", () => location.reload());
    }).catch((ie) => ze("error", `更新失败：${ie.message}`));
  });
  U.addEventListener("click", () => void le()), ne.addEventListener("click", () => void Ce().catch(() => {
  })), V.addEventListener("click", () => location.reload()), setTimeout(() => void le(!0), 1e3);
  const De = n("div", "rlzc-set-card");
  De.append(p, R, P, T);
  const ct = n("details", "rlzc-set-updates");
  ct.append(n("summary", "", "更新说明"));
  for (const ie of Hw.slice(0, 2)) {
    const D = n("div", "rlzc-set-update");
    D.append(n("b", "", ie.title), n("div", "", ie.text)), ct.append(D);
  }
  c.append(I, De, ct, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), r.append(i, c), s.append(r), t.append(s);
}
globalThis.rlzcInterceptor = rv;
function ii() {
  Wx(), _n("MESSAGE_RECEIVED", (e, t) => wv(Number(e), t)), _n("MESSAGE_DELETED", () => ei()), _n("MESSAGE_SWIPED", (e) => av(Number(e))), _n("MESSAGE_EDITED", (e) => ei(Number(e))), _n("MESSAGE_UPDATED", (e) => ei(Number(e))), _n("CHAT_CHANGED", () => Dl()), Un("CHARACTER_MESSAGE_RENDERED", (e) => Bs(Number(e), !0)), Un("MESSAGE_SWIPED", (e) => Bs(Number(e), !0)), Un("MESSAGE_UPDATED", (e) => Bs(Number(e), !0)), Un("MORE_MESSAGES_LOADED", () => or(!1, !0)), Un("CHAT_LOADED", () => or(!1, !0)), o2(), nx({ view: go, toggle: xu }), Dl(), console.log("[rlzc] 回廊种菜系统已加载", f.settings);
}
const Wl = window.jQuery;
typeof Wl == "function" ? Wl(() => ii()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", ii) : ii();
