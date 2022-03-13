this.wordle = this.wordle || {}, this.wordle.bundle = function(e) {
  "use strict";

  function a(e) {
    return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function s(e, a) {
    if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
  }

  function t(e, a) {
    for (var s = 0; s < a.length; s++) {
      var t = a[s];
      t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
    }
  }

  function n(e, a, s) {
    return a && t(e.prototype, a), s && t(e, s), e
  }

  function o(e, a, s) {
    return a in e ? Object.defineProperty(e, a, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[a] = s, e
  }

  function r(e, a) {
    if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(a && a.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), a && l(e, a)
  }

  function i(e) {
    return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function l(e, a) {
    return (l = Object.setPrototypeOf || function(e, a) {
      return e.__proto__ = a, e
    })(e, a)
  }

  function d() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
    } catch (e) {
      return !1
    }
  }

  function c(e, a, s) {
    return (c = d() ? Reflect.construct : function(e, a, s) {
      var t = [null];
      t.push.apply(t, a);
      var n = new(Function.bind.apply(e, t));
      return s && l(n, s.prototype), n
    }).apply(null, arguments)
  }

  function u(e) {
    var a = "function" == typeof Map ? new Map : void 0;
    return (u = function(e) {
      if (null === e || (s = e, -1 === Function.toString.call(s).indexOf("[native code]"))) return e;
      var s;
      if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== a) {
        if (a.has(e)) return a.get(e);
        a.set(e, t)
      }

      function t() {
        return c(e, arguments, i(this).constructor)
      }
      return t.prototype = Object.create(e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), l(t, e)
    })(e)
  }

  function m(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function p(e, a) {
    return !a || "object" != typeof a && "function" != typeof a ? m(e) : a
  }

  function h(e) {
    var a = d();
    return function() {
      var s, t = i(e);
      if (a) {
        var n = i(this).constructor;
        s = Reflect.construct(t, arguments, n)
      } else s = t.apply(this, arguments);
      return p(this, s)
    }
  }

  function y(e, a) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, a) {
      var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (null == s) return;
      var t, n, o = [],
        r = !0,
        i = !1;
      try {
        for (s = s.call(e); !(r = (t = s.next()).done) && (o.push(t.value), !a || o.length !== a); r = !0);
      } catch (e) {
        i = !0, n = e
      } finally {
        try {
          r || null == s.return || s.return()
        } finally {
          if (i) throw n
        }
      }
      return o
    }(e, a) || b(e, a) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function g(e) {
    return function(e) {
      if (Array.isArray(e)) return f(e)
    }(e) || function(e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }(e) || b(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function b(e, a) {
    if (e) {
      if ("string" == typeof e) return f(e, a);
      var s = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : void 0
    }
  }

  function f(e, a) {
    (null == a || a > e.length) && (a = e.length);
    for (var s = 0, t = new Array(a); s < a; s++) t[s] = e[s];
    return t
  }
  var k = document.createElement("template");
  k.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
  var v = function(e) {
    r(t, e);
    var a = h(t);

    function t() {
      var e;
      return s(this, t), o(m(e = a.call(this)), "_letter", ""), o(m(e), "_state", "empty"), o(m(e), "_animation", "idle"), o(m(e), "_last", !1), o(m(e), "_reveal", !1), e.attachShadow({
        mode: "open"
      }), e
    }
    return n(t, [{
      key: "last",
      set: function(e) {
        this._last = e
      }
    }, {
      key: "connectedCallback",
      value: function() {
        var e = this;
        this.shadowRoot.appendChild(k.content.cloneNode(!0)), this.$tile = this.shadowRoot.querySelector(".tile"), this.$tile.addEventListener("animationend", (function(a) {
          "PopIn" === a.animationName && (e._animation = "idle"), "FlipIn" === a.animationName && (e.$tile.dataset.state = e._state, e._animation = "flip-out"), "FlipOut" === a.animationName && (e._animation = "idle", e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", {
            bubbles: !0,
            composed: !0
          }))), e._render()
        })), this._render()
      }
    }, {
      key: "attributeChangedCallback",
      value: function(e, a, s) {
        switch (e) {
          case "letter":
            if (s === a) break;
            var t = "null" === s ? "" : s;
            this._letter = t, this._state = t ? "tbd" : "empty", this._animation = t ? "pop" : "idle";
            break;
          case "evaluation":
            if (!s) break;
            this._state = s;
            break;
          case "reveal":
            this._animation = "flip-in", this._reveal = !0
        }
        this._render()
      }
    }, {
      key: "_render",
      value: function() {
        this.$tile && (this.$tile.textContent = this._letter, ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state), (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation))
      }
    }], [{
      key: "observedAttributes",
      get: function() {
        return ["letter", "evaluation", "reveal"]
      }
    }]), t
  }(u(HTMLElement));
  customElements.define("game-tile", v);
  var w = document.createElement("template");
  w.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
  var x = function(e) {
    r(t, e);
    var a = h(t);

    function t() {
      var e;
      return s(this, t), (e = a.call(this)).attachShadow({
        mode: "open"
      }), e._letters = "", e._evaluation = [], e._length, e
    }
    return n(t, [{
      key: "evaluation",
      get: function() {
        return this._evaluation
      },
      set: function(e) {
        var a = this;
        this._evaluation = e, this.$tiles && this.$tiles.forEach((function(e, s) {
          e.setAttribute("evaluation", a._evaluation[s]), setTimeout((function() {
            e.setAttribute("reveal", "")
          }), 300 * s)
        }))
      }
    }, {
      key: "connectedCallback",
      value: function() {
        var e = this;
        this.shadowRoot.appendChild(w.content.cloneNode(!0)), this.$row = this.shadowRoot.querySelector(".row");
        for (var a = function(a) {
            var s = document.createElement("game-tile"),
              t = e._letters[a];
            (t && s.setAttribute("letter", t), e._evaluation[a]) && (s.setAttribute("evaluation", e._evaluation[a]), setTimeout((function() {
              s.setAttribute("reveal", "")
            }), 100 * a));
            a === e._length - 1 && (s.last = !0), e.$row.appendChild(s)
          }, s = 0; s < this._length; s++) a(s);
        this.$tiles = this.shadowRoot.querySelectorAll("game-tile"), this.addEventListener("animationend", (function(a) {
          "Shake" === a.animationName && e.removeAttribute("invalid")
        }))
      }
    }, {
      key: "attributeChangedCallback",
      value: function(e, a, s) {
        switch (e) {
          case "letters":
            this._letters = s || "";
            break;
          case "length":
            this._length = parseInt(s, 10);
            break;
          case "win":
            if (null === s) {
              this.$tiles.forEach((function(e) {
                e.classList.remove("win")
              }));
              break
            }
            this.$tiles.forEach((function(e, a) {
              e.classList.add("win"), e.style.animationDelay = "".concat(100 * a, "ms")
            }))
        }
        this._render()
      }
    }, {
      key: "_render",
      value: function() {
        var e = this;
        this.$row && this.$tiles.forEach((function(a, s) {
          var t = e._letters[s];
          t ? a.setAttribute("letter", t) : a.removeAttribute("letter")
        }))
      }
    }], [{
      key: "observedAttributes",
      get: function() {
        return ["letters", "length", "invalid", "win"]
      }
    }]), t
  }(u(HTMLElement));
  customElements.define("game-row", x);
  var z = document.createElement("template");
  z.innerHTML = "\n  <slot></slot>\n";
  var j = "nyt-wordle-darkmode",
    S = "nyt-wordle-cbmode",
    C = function(e) {
      r(t, e);
      var a = h(t);

      function t() {
        var e;
        s(this, t), o(m(e = a.call(this)), "isDarkTheme", !1), o(m(e), "isColorBlindTheme", !1), e.attachShadow({
          mode: "open"
        });
        var n = JSON.parse(window.localStorage.getItem(j)),
          r = window.matchMedia("(prefers-color-scheme: dark)").matches,
          i = JSON.parse(window.localStorage.getItem(S));
        return !0 === n || !1 === n ? e.setDarkTheme(n) : r && e.setDarkTheme(!0), !0 !== i && !1 !== i || e.setColorBlindTheme(i), window.themeManager = m(e), e
      }
      return n(t, [{
        key: "setDarkTheme",
        value: function(e) {
          var a = document.querySelector("body");
          e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"), this.isDarkTheme = e, window.localStorage.setItem(j, JSON.stringify(e))
        }
      }, {
        key: "setColorBlindTheme",
        value: function(e) {
          var a = document.querySelector("body");
          e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"), this.isColorBlindTheme = e, window.localStorage.setItem(S, JSON.stringify(e))
        }
      }, {
        key: "connectedCallback",
        value: function() {
          var e = this;
          this.shadowRoot.appendChild(z.content.cloneNode(!0)), this.shadowRoot.addEventListener("game-setting-change", (function(a) {
            var s = a.detail,
              t = s.name,
              n = s.checked;
            switch (t) {
              case "dark-theme":
                return void e.setDarkTheme(n);
              case "color-blind-theme":
                return void e.setColorBlindTheme(n)
            }
          }))
        }
      }]), t
    }(u(HTMLElement));

  function _(e, a) {
    return e === a || e != e && a != a
  }

  function E(e, a) {
    for (var s = e.length; s--;)
      if (_(e[s][0], a)) return s;
    return -1
  }
  customElements.define("game-theme-manager", C);
  var q = Array.prototype.splice;

  function L(e) {
    var a = -1,
      s = null == e ? 0 : e.length;
    for (this.clear(); ++a < s;) {
      var t = e[a];
      this.set(t[0], t[1])
    }
  }
  L.prototype.clear = function() {
    this.__data__ = [], this.size = 0
  }, L.prototype.delete = function(e) {
    var a = this.__data__,
      s = E(a, e);
    return !(s < 0) && (s == a.length - 1 ? a.pop() : q.call(a, s, 1), --this.size, !0)
  }, L.prototype.get = function(e) {
    var a = this.__data__,
      s = E(a, e);
    return s < 0 ? void 0 : a[s][1]
  }, L.prototype.has = function(e) {
    return E(this.__data__, e) > -1
  }, L.prototype.set = function(e, a) {
    var s = this.__data__,
      t = E(s, e);
    return t < 0 ? (++this.size, s.push([e, a])) : s[t][1] = a, this
  };
  var T = "object" == ("undefined" == typeof global ? "undefined" : a(global)) && global && global.Object === Object && global,
    A = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
    I = T || A || Function("return this")(),
    M = I.Symbol,
    O = Object.prototype,
    R = O.hasOwnProperty,
    H = O.toString,
    N = M ? M.toStringTag : void 0;
  var P = Object.prototype.toString;
  var D = M ? M.toStringTag : void 0;

  function $(e) {
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : D && D in Object(e) ? function(e) {
      var a = R.call(e, N),
        s = e[N];
      try {
        e[N] = void 0;
        var t = !0
      } catch (e) {}
      var n = H.call(e);
      return t && (a ? e[N] = s : delete e[N]), n
    }(e) : function(e) {
      return P.call(e)
    }(e)
  }

  function G(e) {
    var s = a(e);
    return null != e && ("object" == s || "function" == s)
  }

  function B(e) {
    if (!G(e)) return !1;
    var a = $(e);
    return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a
  }
  var V, F = I["__core-js_shared__"],
    W = (V = /[^.]+$/.exec(F && F.keys && F.keys.IE_PROTO || "")) ? "Symbol(src)_1." + V : "";
  var Y = Function.prototype.toString;
  var U = /^\[object .+?Constructor\]$/,
    J = Function.prototype,
    X = Object.prototype,
    Z = J.toString,
    K = X.hasOwnProperty,
    Q = RegExp("^" + Z.call(K).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

  function ee(e) {
    return !(!G(e) || (a = e, W && W in a)) && (B(e) ? Q : U).test(function(e) {
      if (null != e) {
        try {
          return Y.call(e)
        } catch (e) {}
        try {
          return e + ""
        } catch (e) {}
      }
      return ""
    }(e));
    var a
  }

  function ae(e, a) {
    var s = function(e, a) {
      return null == e ? void 0 : e[a]
    }(e, a);
    return ee(s) ? s : void 0
  }
  var se = ae(I, "Map"),
    te = ae(Object, "create");
  var ne = Object.prototype.hasOwnProperty;
  var oe = Object.prototype.hasOwnProperty;

  function re(e) {
    var a = -1,
      s = null == e ? 0 : e.length;
    for (this.clear(); ++a < s;) {
      var t = e[a];
      this.set(t[0], t[1])
    }
  }

  function ie(e, s) {
    var t, n, o = e.__data__;
    return ("string" == (n = a(t = s)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== t : null === t) ? o["string" == typeof s ? "string" : "hash"] : o.map
  }

  function le(e) {
    var a = -1,
      s = null == e ? 0 : e.length;
    for (this.clear(); ++a < s;) {
      var t = e[a];
      this.set(t[0], t[1])
    }
  }
  re.prototype.clear = function() {
    this.__data__ = te ? te(null) : {}, this.size = 0
  }, re.prototype.delete = function(e) {
    var a = this.has(e) && delete this.__data__[e];
    return this.size -= a ? 1 : 0, a
  }, re.prototype.get = function(e) {
    var a = this.__data__;
    if (te) {
      var s = a[e];
      return "__lodash_hash_undefined__" === s ? void 0 : s
    }
    return ne.call(a, e) ? a[e] : void 0
  }, re.prototype.has = function(e) {
    var a = this.__data__;
    return te ? void 0 !== a[e] : oe.call(a, e)
  }, re.prototype.set = function(e, a) {
    var s = this.__data__;
    return this.size += this.has(e) ? 0 : 1, s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a, this
  }, le.prototype.clear = function() {
    this.size = 0, this.__data__ = {
      hash: new re,
      map: new(se || L),
      string: new re
    }
  }, le.prototype.delete = function(e) {
    var a = ie(this, e).delete(e);
    return this.size -= a ? 1 : 0, a
  }, le.prototype.get = function(e) {
    return ie(this, e).get(e)
  }, le.prototype.has = function(e) {
    return ie(this, e).has(e)
  }, le.prototype.set = function(e, a) {
    var s = ie(this, e),
      t = s.size;
    return s.set(e, a), this.size += s.size == t ? 0 : 1, this
  };

  function de(e) {
    var a = this.__data__ = new L(e);
    this.size = a.size
  }
  de.prototype.clear = function() {
    this.__data__ = new L, this.size = 0
  }, de.prototype.delete = function(e) {
    var a = this.__data__,
      s = a.delete(e);
    return this.size = a.size, s
  }, de.prototype.get = function(e) {
    return this.__data__.get(e)
  }, de.prototype.has = function(e) {
    return this.__data__.has(e)
  }, de.prototype.set = function(e, a) {
    var s = this.__data__;
    if (s instanceof L) {
      var t = s.__data__;
      if (!se || t.length < 199) return t.push([e, a]), this.size = ++s.size, this;
      s = this.__data__ = new le(t)
    }
    return s.set(e, a), this.size = s.size, this
  };
  var ce = function() {
    try {
      var e = ae(Object, "defineProperty");
      return e({}, "", {}), e
    } catch (e) {}
  }();

  function ue(e, a, s) {
    "__proto__" == a && ce ? ce(e, a, {
      configurable: !0,
      enumerable: !0,
      value: s,
      writable: !0
    }) : e[a] = s
  }

  function me(e, a, s) {
    (void 0 !== s && !_(e[a], s) || void 0 === s && !(a in e)) && ue(e, a, s)
  }
  var pe, he = function(e, a, s) {
      for (var t = -1, n = Object(e), o = s(e), r = o.length; r--;) {
        var i = o[pe ? r : ++t];
        if (!1 === a(n[i], i, n)) break
      }
      return e
    },
    ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
    ge = ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
    be = ge && ge.exports === ye ? I.Buffer : void 0,
    fe = be ? be.allocUnsafe : void 0;
  var ke = I.Uint8Array;

  function ve(e, a) {
    var s, t, n = a ? (s = e.buffer, t = new s.constructor(s.byteLength), new ke(t).set(new ke(s)), t) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length)
  }
  var we = Object.create,
    xe = function() {
      function e() {}
      return function(a) {
        if (!G(a)) return {};
        if (we) return we(a);
        e.prototype = a;
        var s = new e;
        return e.prototype = void 0, s
      }
    }();
  var ze, je, Se = (ze = Object.getPrototypeOf, je = Object, function(e) {
      return ze(je(e))
    }),
    Ce = Object.prototype;

  function _e(e) {
    var a = e && e.constructor;
    return e === ("function" == typeof a && a.prototype || Ce)
  }

  function Ee(e) {
    return null != e && "object" == a(e)
  }

  function qe(e) {
    return Ee(e) && "[object Arguments]" == $(e)
  }
  var Le = Object.prototype,
    Te = Le.hasOwnProperty,
    Ae = Le.propertyIsEnumerable,
    Ie = qe(function() {
      return arguments
    }()) ? qe : function(e) {
      return Ee(e) && Te.call(e, "callee") && !Ae.call(e, "callee")
    },
    Me = Array.isArray;

  function Oe(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
  }

  function Re(e) {
    return null != e && Oe(e.length) && !B(e)
  }
  var He = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
    Ne = He && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
    Pe = Ne && Ne.exports === He ? I.Buffer : void 0,
    De = (Pe ? Pe.isBuffer : void 0) || function() {
      return !1
    },
    $e = Function.prototype,
    Ge = Object.prototype,
    Be = $e.toString,
    Ve = Ge.hasOwnProperty,
    Fe = Be.call(Object);
  var We = {};
  We["[object Float32Array]"] = We["[object Float64Array]"] = We["[object Int8Array]"] = We["[object Int16Array]"] = We["[object Int32Array]"] = We["[object Uint8Array]"] = We["[object Uint8ClampedArray]"] = We["[object Uint16Array]"] = We["[object Uint32Array]"] = !0, We["[object Arguments]"] = We["[object Array]"] = We["[object ArrayBuffer]"] = We["[object Boolean]"] = We["[object DataView]"] = We["[object Date]"] = We["[object Error]"] = We["[object Function]"] = We["[object Map]"] = We["[object Number]"] = We["[object Object]"] = We["[object RegExp]"] = We["[object Set]"] = We["[object String]"] = We["[object WeakMap]"] = !1;
  var Ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
    Ue = Ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
    Je = Ue && Ue.exports === Ye && T.process,
    Xe = function() {
      try {
        var e = Ue && Ue.require && Ue.require("util").types;
        return e || Je && Je.binding && Je.binding("util")
      } catch (e) {}
    }(),
    Ze = Xe && Xe.isTypedArray,
    Ke = Ze ? function(e) {
      return function(a) {
        return e(a)
      }
    }(Ze) : function(e) {
      return Ee(e) && Oe(e.length) && !!We[$(e)]
    };

  function Qe(e, a) {
    if (("constructor" !== a || "function" != typeof e[a]) && "__proto__" != a) return e[a]
  }
  var ea = Object.prototype.hasOwnProperty;

  function aa(e, a, s) {
    var t = e[a];
    ea.call(e, a) && _(t, s) && (void 0 !== s || a in e) || ue(e, a, s)
  }
  var sa = /^(?:0|[1-9]\d*)$/;

  function ta(e, s) {
    var t = a(e);
    return !!(s = null == s ? 9007199254740991 : s) && ("number" == t || "symbol" != t && sa.test(e)) && e > -1 && e % 1 == 0 && e < s
  }
  var na = Object.prototype.hasOwnProperty;

  function oa(e, a) {
    var s = Me(e),
      t = !s && Ie(e),
      n = !s && !t && De(e),
      o = !s && !t && !n && Ke(e),
      r = s || t || n || o,
      i = r ? function(e, a) {
        for (var s = -1, t = Array(e); ++s < e;) t[s] = a(s);
        return t
      }(e.length, String) : [],
      l = i.length;
    for (var d in e) !a && !na.call(e, d) || r && ("length" == d || n && ("offset" == d || "parent" == d) || o && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ta(d, l)) || i.push(d);
    return i
  }
  var ra = Object.prototype.hasOwnProperty;

  function ia(e) {
    if (!G(e)) return function(e) {
      var a = [];
      if (null != e)
        for (var s in Object(e)) a.push(s);
      return a
    }(e);
    var a = _e(e),
      s = [];
    for (var t in e)("constructor" != t || !a && ra.call(e, t)) && s.push(t);
    return s
  }

  function la(e) {
    return Re(e) ? oa(e, !0) : ia(e)
  }

  function da(e) {
    return function(e, a, s, t) {
      var n = !s;
      s || (s = {});
      for (var o = -1, r = a.length; ++o < r;) {
        var i = a[o],
          l = t ? t(s[i], e[i], i, s, e) : void 0;
        void 0 === l && (l = e[i]), n ? ue(s, i, l) : aa(s, i, l)
      }
      return s
    }(e, la(e))
  }

  function ca(e, a, s, t, n, o, r) {
    var i = Qe(e, s),
      l = Qe(a, s),
      d = r.get(l);
    if (d) me(e, s, d);
    else {
      var c, u = o ? o(i, l, s + "", e, a, r) : void 0,
        m = void 0 === u;
      if (m) {
        var p = Me(l),
          h = !p && De(l),
          y = !p && !h && Ke(l);
        u = l, p || h || y ? Me(i) ? u = i : Ee(c = i) && Re(c) ? u = function(e, a) {
          var s = -1,
            t = e.length;
          for (a || (a = Array(t)); ++s < t;) a[s] = e[s];
          return a
        }(i) : h ? (m = !1, u = function(e, a) {
          if (a) return e.slice();
          var s = e.length,
            t = fe ? fe(s) : new e.constructor(s);
          return e.copy(t), t
        }(l, !0)) : y ? (m = !1, u = ve(l, !0)) : u = [] : function(e) {
          if (!Ee(e) || "[object Object]" != $(e)) return !1;
          var a = Se(e);
          if (null === a) return !0;
          var s = Ve.call(a, "constructor") && a.constructor;
          return "function" == typeof s && s instanceof s && Be.call(s) == Fe
        }(l) || Ie(l) ? (u = i, Ie(i) ? u = da(i) : G(i) && !B(i) || (u = function(e) {
          return "function" != typeof e.constructor || _e(e) ? {} : xe(Se(e))
        }(l))) : m = !1
      }
      m && (r.set(l, u), n(u, l, t, o, r), r.delete(l)), me(e, s, u)
    }
  }

  function ua(e, a, s, t, n) {
    e !== a && he(a, (function(o, r) {
      if (n || (n = new de), G(o)) ca(e, a, r, s, ua, t, n);
      else {
        var i = t ? t(Qe(e, r), o, r + "", e, a, n) : void 0;
        void 0 === i && (i = o), me(e, r, i)
      }
    }), la)
  }

  function ma(e) {
    return e
  }

  function pa(e, a, s) {
    switch (s.length) {
      case 0:
        return e.call(a);
      case 1:
        return e.call(a, s[0]);
      case 2:
        return e.call(a, s[0], s[1]);
      case 3:
        return e.call(a, s[0], s[1], s[2])
    }
    return e.apply(a, s)
  }
  var ha = Math.max;
  var ya = ce ? function(e, a) {
      return ce(e, "toString", {
        configurable: !0,
        enumerable: !1,
        value: (s = a, function() {
          return s
        }),
        writable: !0
      });
      var s
    } : ma,
    ga = Date.now;
  var ba = function(e) {
    var a = 0,
      s = 0;
    return function() {
      var t = ga(),
        n = 16 - (t - s);
      if (s = t, n > 0) {
        if (++a >= 800) return arguments[0]
      } else a = 0;
      return e.apply(void 0, arguments)
    }
  }(ya);

  function fa(e, a) {
    return ba(function(e, a, s) {
      return a = ha(void 0 === a ? e.length - 1 : a, 0),
        function() {
          for (var t = arguments, n = -1, o = ha(t.length - a, 0), r = Array(o); ++n < o;) r[n] = t[a + n];
          n = -1;
          for (var i = Array(a + 1); ++n < a;) i[n] = t[n];
          return i[a] = s(r), pa(e, this, i)
        }
    }(e, a, ma), e + "")
  }
  var ka, va = (ka = function(e, a, s) {
      ua(e, a, s)
    }, fa((function(e, s) {
      var t = -1,
        n = s.length,
        o = n > 1 ? s[n - 1] : void 0,
        r = n > 2 ? s[2] : void 0;
      for (o = ka.length > 3 && "function" == typeof o ? (n--, o) : void 0, r && function(e, s, t) {
          if (!G(t)) return !1;
          var n = a(s);
          return !!("number" == n ? Re(t) && ta(s, t.length) : "string" == n && s in t) && _(t[s], e)
        }(s[0], s[1], r) && (o = n < 3 ? void 0 : o, n = 1), e = Object(e); ++t < n;) {
        var i = s[t];
        i && ka(e, i, t, o)
      }
      return e
    }))),
    wa = "nyt-wordle-state",
    xa = {
      boardState: null,
      evaluations: null,
      rowIndex: null,
      solution: null,
      gameStatus: null,
      lastPlayedTs: null,
      lastCompletedTs: null,
      restoringFromLocalStorage: null,
      hardMode: !1
    };

  function za() {
    var e = window.localStorage.getItem(wa) || JSON.stringify(xa);
    return JSON.parse(e)
  }

  function ja(e) {
    var a = za();
    ! function(e) {
      window.localStorage.setItem(wa, JSON.stringify(e))
    }(va(a, e))
  }

  function Sa() {
    var e = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
  }

  function Ca() {
    var e = navigator.userAgent;
    return e.match(/chrome|chromium|crios/i) ? "chrome" : e.match(/firefox|fxios/i) ? "firefox" : e.match(/safari/i) ? "safari" : e.match(/opr\//i) ? "opera" : e.match(/edg/i) ? "edge" : "No browser detection"
  }

  function Ea(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
  }
  var qa = function(e) {
      var a = [];
      return Object.keys(e).forEach((function(s) {
        a.push("".concat(encodeURIComponent(s), "=").concat(encodeURIComponent(e[s])))
      })), "?".concat(a.join("&"))
    },
    La = document.createElement("template");
  La.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Hard Mode</div>\n          <div class="description">Any revealed hints must be used in subsequent guesses</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Dark Theme</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">High Contrast Mode</div>\n          <div class="description">For improved color vision</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section hidden>\n    <div class="setting">\n      <div class="text">\n        <div class="title">Questions?</div>\n      </div>\n      <div class="control">\n        <a href="https://help.nytimes.com/hc/en-us/articles/360029050872-Word-Games-and-Logic-Puzzles#h_01FVGCB2Z00ZQMDMCYWBPWJNXB" target="blank">FAQ</a>\n      </div>\n    </div>\n    </section>\n  </div>\n  <div id="footnote">\n    <div id="copyright"></div>\n    <div>\n      <div id="puzzle-number"></div>\n    </div>\n  </div>\n';
  var Ta = function(e) {
    r(t, e);
    var a = h(t);

    function t() {
      var e;
      return s(this, t), o(m(e = a.call(this)), "gameApp", void 0), e.attachShadow({
        mode: "open"
      }), e
    }
    return n(t, [{
      key: "connectedCallback",
      value: function() {
        var e = this;
        this.shadowRoot.appendChild(La.content.cloneNode(!0)), this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset), this.shadowRoot.addEventListener("game-switch-change", (function(a) {
          a.stopPropagation();
          var s = a.detail,
            t = s.name,
            n = s.checked,
            o = s.disabled;
          e.dispatchEvent(new CustomEvent("game-setting-change", {
            bubbles: !0,
            composed: !0,
            detail: {
              name: t,
              checked: n,
              disabled: o
            }
          })), e.render()
        })), this.render()
      }
    }, {
      key: "render",
      value: function() {
        var e = document.querySelector("body");
        e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""), e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
        var a = za();
        a.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""), a.hardMode || "IN_PROGRESS" !== a.gameStatus || 0 === a.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"), this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
      }
    }]), t
  }(u(HTMLElement));
  customElements.define("game-settings", Ta);
  var Aa = document.createElement("template");
  Aa.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
  var Ia = function(e) {
    r(t, e);
    var a = h(t);

    function t() {
      var e;
      return s(this, t), o(m(e = a.call(this)), "_duration", void 0), e.attachShadow({
        mode: "open"
      }), e
    }
    return n(t, [{
      key: "connectedCallback",
      value: function() {
        var e = this;
        this.shadowRoot.appendChild(Aa.content.cloneNode(!0));
        var a = this.shadowRoot.querySelector(".toast");
        a.textContent = this.getAttribute("text"), this._duration = this.getAttribute("duration") || 1e3, "Infinity" !== this._duration && setTimeout((function() {
          a.classList.add("fade")
        }), this._duration), a.addEventListener("transitionend", (function(a) {
          e.parentNode.removeChild(e)
        }))
      }
    }]), t
  }(u(HTMLElement));
  customElements.define("game-toast", Ia);
  var Ma = ["pails", "titus", "raids", "gates", "elohe", "start", "often", "lodge", "rider", "fills", "women", "frees", "thigh", "sides", "twist", "hymns", "smelt", "marks", "exits", "crops", "caves", "lofty", "sword", "godly", "given", "ebony", "names", "roofs", "posts", "while", "annul", "joint", "urges", "ponds", "turns", "trade", "broad", "baked", "these", "queen", "lotus", "heels", "rebel", "guide", "doves", "delay", "acted", "would", "claps", "smash", "strip", "sweep", "abode", "speak", "water", "serif", "meets", "chalk", "axles", "thief", "white", "tools", "basin", "hatch", "ships", "ought", "twigs", "forty", "midst", "angel", "vapor", "hewed", "cords", "brood", "angle", "loyal", "wiser", "cells", "image", "harsh", "snare", "armor", "nahum", "shame", "sleep", "prize", "years", "draws", "folds", "opens", "storm", "peace", "debts", "skins", "edict", "hosts", "lords", "worst", "angry", "belts", "baker", "jesse", "blunt", "crane", "outer", "enosh", "david", "lived", "bells", "lydia", "wagon", "fools", "fault", "heals", "amiss", "count", "north", "risen", "heaps", "pours", "flash", "ruled", "fears", "sweet", "blood", "navel", "burnt", "tombs", "beams", "topaz", "still", "match", "sucks", "sowed", "melts", "bakes", "resin", "dried", "tabor", "knock", "sieve", "piece", "hires", "dries", "kneel", "backs", "drive", "drops", "chair", "books", "aimed", "store", "coast", "spade", "noise", "tired", "tongs", "stoop", "shuts", "error", "stole", "alter", "vault", "amass", "tusks", "broke", "doors", "dwarf", "heeds", "first", "stood", "glass", "quick", "fords", "shoot", "sling", "graze", "palms", "aided", "omega", "mount", "naomi", "maker", "renew", "route", "plumb", "marsh", "stalk", "state", "omers", "loops", "bribe", "roams", "liars", "covet", "right", "labor", "raged", "chaff", "slung", "dread", "dwelt", "works", "slope", "strap", "faint", "gives", "magic", "leech", "brown", "model", "gowns", "myths", "brass", "peter", "shock", "awake", "evils", "sinew", "booth", "shaft", "tower", "bouts", "cooks", "hated", "henna", "reefs", "wombs", "seeks", "visit", "bough", "exile", "green", "chain", "sound", "haggi", "asked", "worse", "saved", "ahead", "abram", "wafer", "buyer", "ledge", "aloud", "beryl", "flees", "keeps", "lacks", "isles", "stock", "focus", "swoop", "empty", "light", "girls", "wring", "liken", "sever", "bunch", "cheek", "seine", "dough", "clasp", "local", "alpha", "laugh", "gazes", "stank", "fawns", "chloe", "sting", "prime", "sight", "grope", "tribe", "leper", "roads", "leaps", "rides", "isaac", "wraps", "spice", "wound", "swore", "spoke", "threw", "halve", "weeds", "hurry", "party", "begin", "tents", "noses", "stout", "seeds", "ivory", "lasts", "ninth", "cases", "knife", "pound", "hairy", "death", "slain", "belly", "waved", "fangs", "moves", "devil", "haram", "heron", "sense", "issue", "added", "grabs", "brick", "south", "rigor", "fully", "fixed", "mules", "grass", "fifth", "thick", "gazed", "forks", "mirth", "asses", "paper", "prior", "grind", "surge", "cobra", "cruse", "board", "bones", "rabbi", "token", "raise", "strew", "pains", "nests", "offer", "dirge", "quite", "faces", "wells", "place", "shone", "towel", "erred", "blast", "sorry", "jewel", "drags", "drunk", "soles", "spend", "neigh", "robes", "sinks", "aside", "sores", "reaps", "faced", "bulge", "cling", "proof", "vomit", "swine", "giant", "rough", "began", "fruit", "kings", "smell", "scale", "royal", "edges", "ropes", "hours", "envoy", "flood", "wives", "quake", "weary", "bases", "child", "avail", "exult", "badly", "under", "heirs", "gifts", "shore", "rests", "roars", "hunts", "razor", "taxes", "amend", "siege", "haste", "fifty", "wakes", "judea", "today", "rinse", "frame", "study", "lease", "usury", "stays", "touch", "cleft", "steel", "tests", "simon", "sixty", "leaks", "extol", "selah", "lanes", "happy", "gores", "heart", "birds", "waged", "choke", "sects", "booty", "cries", "plots", "hasty", "guile", "loins", "speed", "broom", "seers", "reach", "vaunt", "juice", "plows", "tends", "plans", "exalt", "winds", "idols", "steal", "algum", "since", "moldy", "bears", "fleet", "train", "upper", "bands", "wrong", "porch", "sakes", "julia", "camps", "hotly", "fared", "apply", "waves", "teach", "story", "yours", "sheep", "ember", "shows", "moths", "anger", "aaron", "sniff", "birth", "treat", "dirty", "wheat", "sharp", "widow", "loses", "equal", "moist", "knows", "ruler", "sings", "liver", "oiled", "write", "tones", "hired", "lyres", "growl", "irons", "jesus", "slave", "males", "alive", "bound", "flour", "mixes", "begun", "rumor", "drawn", "lover", "sheol", "stone", "coals", "taunt", "trial", "chief", "guard", "jacob", "might", "await", "necks", "troop", "curds", "vigor", "fatty", "lurks", "comes", "horeb", "psalm", "stars", "silly", "arose", "lives", "hates", "order", "rainy", "puffs", "which", "judas", "humps", "fires", "mouth", "march", "lowly", "build", "trace", "weigh", "abase", "grasp", "wrung", "chaos", "brook", "hyrax", "cover", "weeps", "feast", "width", "greet", "spits", "agate", "drink", "based", "round", "belch", "bless", "mists", "value", "demon", "sinai", "enoch", "sarah", "stork", "there", "fined", "hopes", "leans", "music", "seams", "urged", "steep", "ghost", "stuck", "cares", "dined", "grows", "forms", "rains", "ephah", "vines", "babel", "girds", "utter", "dress", "tunic", "swoon", "frail", "crows", "wills", "until", "hinds", "spoil", "after", "flame", "block", "freed", "ashes", "hears", "bulls", "calls", "thong", "miner", "proud", "using", "beats", "finds", "spied", "spent", "their", "fired", "prove", "holes", "nobly", "knees", "learn", "plays", "licks", "smith", "sways", "slide", "slept", "lands", "sheet", "times", "eagle", "cared", "paint", "leave", "howls", "sacks", "enjoy", "oaths", "pouch", "rafts", "favor", "spelt", "frogs", "spear", "serve", "pilot", "aware", "crush", "tubes", "waits", "tamed", "roost", "hedge", "qualm", "stall", "fours", "media", "rocks", "trunk", "prays", "named", "agile", "rival", "clung", "muddy", "pangs", "skies", "brier", "ready", "leads", "wines", "seize", "class", "locks", "mercy", "cloth", "acres", "loose", "wears", "tread", "watch", "saint", "hosea", "night", "claim", "naked", "oozes", "slays", "bowls", "scare", "saris", "seems", "agony", "sighs", "blush", "worth", "other", "groan", "whelp", "snows", "flute", "feeds", "shake", "young", "gains", "woods", "patch", "grape", "jason", "hoped", "fades", "earns", "fitly", "deals", "abuse", "fresh", "roots", "flesh", "rises", "eager", "reign", "ethan", "armed", "arrow", "rooms", "hangs", "later", "large", "tithe", "steps", "blaze", "herds", "shear", "thank", "italy", "tolls", "pants", "world", "blade", "foams", "upset", "allow", "taxed", "avoid", "adder", "dawns", "choir", "tooth", "veils", "tempt", "super", "bites", "organ", "drove", "souls", "price", "crash", "claws", "jonah", "poets", "calyx", "judah", "lower", "basis", "sells", "dealt", "makes", "dance", "wrote", "sewed", "filth", "latin", "tells", "tares", "lions", "color", "wares", "clean", "cargo", "goads", "studs", "moved", "saves", "gnats", "aloof", "repay", "wrest", "incur", "loves", "purer", "laden", "inner", "stamp", "rends", "walks", "crept", "tight", "alloy", "quota", "worry", "cheat", "reels", "bride", "decay", "black", "clans", "knelt", "stead", "judge", "every", "bloom", "mocks", "excel", "weave", "flock", "stand", "falls", "floor", "carry", "point", "takes", "fancy", "ankle", "banks", "darts", "pupil", "egypt", "woken", "stray", "laver", "vexed", "alarm", "longs", "quail", "ended", "tiles", "taste", "stain", "blame", "apple", "lambs", "youth", "pearl", "woman", "realm", "omens", "carob", "limit", "mourn", "peril", "borne", "below", "signs", "table", "stern", "fever", "spots", "shine", "small", "alike", "elder", "throw", "shout", "facts", "graft", "cloud", "clerk", "beans", "goats", "lamps", "doing", "homes", "array", "forth", "flies", "spies", "briar", "cause", "chose", "enter", "minds", "fence", "sweat", "bored", "horns", "power", "thorn", "sites", "defer", "leeks", "grain", "greek", "mused", "means", "wider", "field", "rolls", "tried", "allot", "rages", "warms", "tails", "moons", "ruddy", "cloak", "purse", "swept", "bosom", "argue", "yokes", "burns", "nurse", "bathe", "haven", "needy", "press", "creep", "limps", "abide", "myrrh", "grace", "sower", "coral", "sends", "spurn", "depth", "asher", "shown", "bonds", "cedar", "drain", "clubs", "exist", "whole", "crown", "unity", "lusts", "towns", "found", "cakes", "pools", "smoke", "snail", "adorn", "areas", "spite", "heavy", "shade", "plane", "stops", "think", "going", "beach", "pipes", "brand", "short", "mixed", "sawed", "crowd", "extra", "elbow", "honey", "chews", "tries", "panic", "heave", "crime", "silas", "chasm", "yoked", "herbs", "drown", "share", "aloes", "begot", "could", "among", "slaps", "hairs", "torch", "spark", "brief", "roman", "homer", "flows", "plain", "grown", "rocky", "traps", "reads", "wipes", "sleek", "cease", "blows", "lepta", "prune", "boots", "yield", "manna", "swear", "being", "total", "least", "warns", "bowed", "fight", "cream", "quiet", "harps", "songs", "meant", "fails", "early", "rarer", "mouse", "wedge", "weeks", "wings", "title", "cliff", "crazy", "twice", "earth", "shorn", "rowdy", "dowry", "beget", "soars", "dimly", "third", "halts", "shave", "deeds", "dared", "trier", "linen", "solid", "pairs", "guilt", "abyss", "anvil", "whips", "reins", "level", "cruel", "never", "metal", "kills", "plate", "glory", "slips", "float", "erect", "sorts", "abhor", "enemy", "altar", "broth", "babes", "flask", "heads", "casts", "known", "knead", "break", "spain", "waste", "piety", "fists", "skirt", "climb", "fiery", "james", "hooks", "crawl", "dwell", "great", "grant", "hands", "scent", "venom", "thumb", "false", "theft", "rules", "purge", "sworn", "viper", "above", "ovens", "scorn", "milch", "dross", "shape", "awoke", "bolts", "guest", "hagar", "river", "scant", "games", "cried", "kinds", "loads", "dregs", "glean", "blind", "trees", "cross", "merry", "foods", "money", "brave", "staff", "snake", "noose", "wiped", "three", "doubt", "wheel", "begat", "split", "grief", "goods", "minas", "korah", "folly", "gnash", "baths", "flint", "hurls", "dying", "where", "front", "paved", "drank", "moses", "swarm", "walls", "entry", "force", "heard", "blown", "rowed", "seven", "erase", "worms", "smite", "beard", "agree", "seals", "anise", "bends", "binds", "urine", "tills", "teeth", "voice", "cubit", "snout", "trust", "human", "hades", "breed", "sixth", "roast", "grave", "lying", "needs", "cheer", "eight", "helps", "eaten", "whirl", "tasty", "lends", "marry", "owner", "frost", "couch", "terms", "parks", "leafy", "chops", "reeds", "truly", "stick", "truth", "ephod", "joins", "units", "stink", "arise", "rahab", "dream", "about", "straw", "fetch", "occur", "whose", "pluck", "alert", "stiff", "faded", "craft", "legal", "wages", "court", "mowed", "slack", "kilns", "ruins", "apart", "paces", "parts", "clods", "beast", "shook", "giver", "bared", "edged", "rural", "burst", "taken", "tidal", "drift", "poles", "group", "chase", "doers", "stubs", "sneer", "almug", "lifts", "flank", "caleb", "daily", "bring", "layer", "boast", "moles", "tears", "loved", "shrub", "joses", "pulls", "tarry", "snowy", "flung", "savor", "house", "valor", "gloom", "catch", "hills", "faith", "stove", "looks", "mound", "waver", "chest", "noisy", "alone", "sheds", "camel", "hence", "close", "wield", "boats", "along", "swell", "cured", "sober", "skill", "foxes", "scalp", "barns", "again", "olive", "words", "pious", "month", "honor", "reply", "exact", "rouse", "wrath", "pitch", "curse", "clear", "woven", "maids", "raven", "thing", "shall", "coins", "seats", "gleam", "stirs", "untie", "nails", "winks", "older", "tenth", "sheaf", "calve", "wants", "swift", "smote", "stare", "space", "holds", "final", "twins", "ranks", "scabs", "limbs", "coats", "spare", "horse", "built", "india", "civil", "sport", "vowed", "awful", "pride", "sated", "noble", "tiers", "gecko", "plead", "lines", "those", "skull", "stoic", "rings", "hides", "stump", "scoff", "nomad", "boils", "shard", "madly", "uncle", "eater", "bread", "paths", "plant"],
    Oa = ["aahed", "aalii", "aargh", "aarti", "abaca", "abaci", "aback", "abacs", "abaft", "abaka", "abamp", "aband", "abash", "abask", "abate", "abaya", "abbas", "abbed", "abbes", "abbey", "abbot", "abcee", "abeam", "abear", "abele", "abers", "abets", "abies", "abled", "abler", "ables", "ablet", "ablow", "abmho", "abohm", "aboil", "aboma", "aboon", "abord", "abore", "abort", "abray", "abrim", "abrin", "abris", "absey", "absit", "abuna", "abune", "abuts", "abuzz", "abyes", "abysm", "acais", "acari", "accas", "accoy", "acerb", "acers", "aceta", "achar", "ached", "aches", "achoo", "acids", "acidy", "acing", "acini", "ackee", "acker", "acmes", "acmic", "acned", "acnes", "acock", "acold", "acorn", "acred", "acrid", "acros", "actin", "acton", "actor", "acute", "acyls", "adage", "adapt", "adaws", "adays", "adbot", "addax", "addio", "addle", "adeem", "adept", "adhan", "adieu", "adios", "adits", "adman", "admen", "admin", "admit", "admix", "adobe", "adobo", "adopt", "adore", "adown", "adoze", "adrad", "adred", "adsum", "aduki", "adult", "adunc", "adust", "advew", "adyta", "adzed", "adzes", "aecia", "aedes", "aegis", "aeons", "aerie", "aeros", "aesir", "afald", "afara", "afars", "afear", "affix", "afire", "aflaj", "afoot", "afore", "afoul", "afrit", "afros", "agama", "agami", "agape", "agars", "agast", "agave", "agaze", "agene", "agent", "agers", "agger", "aggie", "aggri", "aggro", "aggry", "aghas", "agila", "aging", "agios", "agism", "agist", "agita", "aglee", "aglet", "agley", "agloo", "aglow", "aglus", "agmas", "agoge", "agone", "agons", "agood", "agria", "agrin", "agros", "agued", "agues", "aguna", "aguti", "aheap", "ahent", "ahigh", "ahind", "ahing", "ahint", "ahold", "ahull", "ahuru", "aidas", "aider", "aides", "aidoi", "aidos", "aiery", "aigas", "aight", "ailed", "aimer", "ainee", "ainga", "aioli", "aired", "airer", "airns", "airth", "airts", "aisle", "aitch", "aitus", "aiver", "aiyee", "aizle", "ajies", "ajiva", "ajuga", "ajwan", "akees", "akela", "akene", "aking", "akita", "akkas", "alaap", "alack", "alamo", "aland", "alane", "alang", "alans", "alant", "alapa", "alaps", "alary", "alate", "alays", "albas", "albee", "album", "alcid", "alcos", "aldea", "alder", "aldol", "aleck", "alecs", "alefs", "aleft", "aleph", "alews", "aleye", "alfas", "algae", "algal", "algas", "algid", "algin", "algor", "alias", "alibi", "alien", "alifs", "align", "aline", "alist", "aliya", "alkie", "alkos", "alkyd", "alkyl", "allay", "allee", "allel", "alley", "allis", "allod", "allyl", "almah", "almas", "almeh", "almes", "almud", "alods", "aloed", "aloft", "aloha", "aloin", "aloos", "alowe", "altho", "altos", "alula", "alums", "alure", "alvar", "alway", "amahs", "amain", "amate", "amaut", "amaze", "amban", "amber", "ambit", "amble", "ambos", "ambry", "ameba", "ameer", "amene", "amens", "ament", "amias", "amice", "amici", "amide", "amido", "amids", "amies", "amiga", "amigo", "amine", "amino", "amins", "amirs", "amity", "amlas", "amman", "ammon", "ammos", "amnia", "amnic", "amnio", "amoks", "amole", "amort", "amour", "amove", "amowt", "amped", "ample", "amply", "ampul", "amrit", "amuck", "amuse", "amyls", "anana", "anata", "ancho", "ancle", "ancon", "andro", "anear", "anele", "anent", "angas", "anglo", "angst", "anigh", "anile", "anils", "anima", "anime", "animi", "anion", "anker", "ankhs", "ankus", "anlas", "annal", "annas", "annat", "annex", "annoy", "anoas", "anode", "anole", "anomy", "ansae", "antae", "antar", "antas", "anted", "antes", "antic", "antis", "antra", "antre", "antsy", "anura", "anyon", "aorta", "apace", "apage", "apaid", "apayd", "apays", "apeak", "apeek", "apers", "apert", "apery", "apgar", "aphid", "aphis", "apian", "aping", "apiol", "apish", "apism", "apnea", "apode", "apods", "apoop", "aport", "appal", "appay", "appel", "appro", "appui", "appuy", "apres", "apron", "apses", "apsis", "apsos", "apted", "apter", "aptly", "aquae", "aquas", "araba", "araks", "arame", "arars", "arbas", "arbor", "arced", "archi", "arcos", "arcus", "ardeb", "ardor", "ardri", "aread", "areae", "areal", "arear", "areca", "aredd", "arede", "arefy", "areic", "arena", "arene", "arepa", "arere", "arete", "arets", "arett", "argal", "argan", "argil", "argle", "argol", "argon", "argot", "argus", "arhat", "arias", "ariel", "ariki", "arils", "ariot", "arish", "arked", "arled", "arles", "armer", "armet", "armil", "arnas", "arnut", "aroba", "aroha", "aroid", "aroma", "arpas", "arpen", "arrah", "arras", "arret", "arris", "arroz", "arsed", "arses", "arsey", "arsis", "arson", "artal", "artel", "artic", "artis", "artsy", "aruhe", "arums", "arval", "arvee", "arvos", "aryls", "asana", "ascon", "ascot", "ascus", "asdic", "ashed", "ashen", "ashet", "asker", "askew", "askoi", "askos", "aspen", "asper", "aspic", "aspie", "aspis", "aspro", "assai", "assam", "assay", "asset", "assez", "assot", "aster", "astir", "astun", "asura", "asway", "aswim", "asyla", "ataps", "ataxy", "atigi", "atilt", "atimy", "atlas", "atman", "atmas", "atmos", "atocs", "atoke", "atoks", "atoll", "atoms", "atomy", "atone", "atony", "atopy", "atria", "atrip", "attap", "attar", "attic", "atuas", "audad", "audio", "audit", "auger", "aught", "augur", "aulas", "aulic", "auloi", "aulos", "aumil", "aunes", "aunts", "aunty", "aurae", "aural", "aurar", "auras", "aurei", "aures", "auric", "auris", "aurum", "autos", "auxin", "avale", "avant", "avast", "avels", "avens", "avers", "avert", "avgas", "avian", "avine", "avion", "avise", "aviso", "avize", "avows", "avyze", "award", "awarn", "awash", "awato", "awave", "aways", "awdls", "aweel", "aweto", "awing", "awmry", "awned", "awner", "awols", "awork", "axels", "axial", "axile", "axils", "axing", "axiom", "axion", "axite", "axled", "axman", "axmen", "axoid", "axone", "axons", "ayahs", "ayaya", "ayelp", "aygre", "ayins", "ayont", "ayres", "ayrie", "azans", "azide", "azido", "azine", "azlon", "azoic", "azole", "azons", "azote", "azoth", "azuki", "azure", "azurn", "azury", "azygy", "azyme", "azyms", "baaed", "baals", "babas", "babka", "baboo", "babul", "babus", "bacca", "bacco", "baccy", "bacha", "bachs", "bacon", "baddy", "badge", "baels", "baffs", "baffy", "bafts", "bagel", "baggy", "baghs", "bagie", "bahts", "bahus", "bahut", "bails", "bairn", "baisa", "baith", "baits", "baiza", "baize", "bajan", "bajra", "bajri", "bajus", "baken", "bakra", "balas", "balds", "baldy", "baled", "baler", "bales", "balks", "balky", "balls", "bally", "balms", "balmy", "baloo", "balsa", "balti", "balun", "balus", "bambi", "banak", "banal", "banco", "bancs", "banda", "bandh", "bandy", "baned", "banes", "bangs", "bania", "banjo", "banns", "bants", "bantu", "banty", "banya", "bapus", "barbe", "barbs", "barby", "barca", "barde", "bardo", "bards", "bardy", "barer", "bares", "barfi", "barfs", "barge", "baric", "barks", "barky", "barms", "barmy", "barny", "baron", "barps", "barra", "barre", "barro", "barry", "barye", "basal", "basan", "basen", "baser", "basho", "basic", "basij", "basil", "basks", "bason", "basse", "bassi", "basso", "bassy", "basta", "baste", "basti", "basto", "basts", "batch", "bated", "bates", "batik", "baton", "batta", "batts", "battu", "batty", "bauds", "bauks", "baulk", "baurs", "bavin", "bawds", "bawdy", "bawks", "bawls", "bawns", "bawrs", "bawty", "bayed", "bayer", "bayes", "bayle", "bayou", "bayts", "bazar", "bazoo", "beads", "beady", "beaks", "beaky", "beals", "beamy", "beano", "beany", "beare", "beath", "beaty", "beaus", "beaut", "beaux", "bebop", "becap", "becke", "becks", "bedad", "bedel", "bedes", "bedew", "bedim", "bedye", "beech", "beedi", "beefs", "beefy", "beeps", "beers", "beery", "beets", "befit", "befog", "begad", "begar", "begem", "begum", "beige", "beigy", "beins", "bekah", "belah", "belar", "belay", "belee", "belga", "belie", "belle", "belon", "bemad", "bemas", "bemix", "bemud", "bench", "bendy", "benes", "benet", "benga", "benis", "benne", "benni", "benny", "bento", "bents", "benty", "bepat", "beray", "beres", "beret", "bergs", "berko", "berks", "berme", "berms", "berob", "berry", "berth", "besat", "besaw", "besee", "beses", "beset", "besit", "besom", "besot", "besti", "bests", "betas", "beted", "betel", "betes", "beths", "betid", "beton", "betta", "betty", "bevel", "bever", "bevor", "bevue", "bevvy", "bewet", "bewig", "bezel", "bezes", "bezil", "bezzy", "bhais", "bhaji", "bhang", "bhats", "bhels", "bhoot", "bhuna", "bhuts", "biach", "biali", "bialy", "bibbs", "bibes", "bible", "biccy", "bicep", "bices", "biddy", "bided", "bider", "bides", "bidet", "bidis", "bidon", "bield", "biers", "biffo", "biffs", "biffy", "bifid", "bigae", "biggs", "biggy", "bigha", "bight", "bigly", "bigos", "bigot", "bijou", "biked", "biker", "bikes", "bikie", "bilbo", "bilby", "biled", "biles", "bilge", "bilgy", "bilks", "bills", "billy", "bimah", "bimas", "bimbo", "binal", "bindi", "biner", "bines", "binge", "bingo", "bings", "bingy", "binit", "binks", "bints", "biogs", "biome", "biont", "biota", "biped", "bipod", "birch", "birks", "birle", "birls", "biros", "birrs", "birse", "birsy", "bises", "bisks", "bisom", "bison", "biter", "bitos", "bitou", "bitsy", "bitte", "bitts", "bitty", "bivia", "bivvy", "bizes", "bizzo", "bizzy", "blabs", "blads", "blady", "blaer", "blaes", "blaff", "blags", "blahs", "blain", "blams", "bland", "blank", "blare", "blart", "blase", "blash", "blate", "blats", "blatt", "blaud", "blawn", "blaws", "blays", "bleak", "blear", "bleat", "blebs", "blech", "bleed", "bleep", "blees", "blend", "blent", "blert", "blest", "blets", "bleys", "blimp", "blimy", "bling", "blini", "blink", "blins", "bliny", "blips", "bliss", "blist", "blite", "blits", "blitz", "blive", "bloat", "blobs", "blocs", "blogs", "bloke", "blond", "blook", "bloop", "blore", "blots", "blowy", "blubs", "blude", "bluds", "bludy", "blued", "bluer", "blues", "bluet", "bluey", "bluff", "bluid", "blume", "blunk", "blurb", "blurs", "blurt", "blype", "boabs", "boaks", "boars", "boart", "bobac", "bobak", "bobas", "bobby", "bobol", "bobos", "bocca", "bocce", "bocci", "boche", "bocks", "boded", "bodes", "bodge", "bodhi", "bodle", "boeps", "boets", "boeuf", "boffo", "boffs", "bogan", "bogey", "boggy", "bogie", "bogle", "bogue", "bogus", "bohea", "bohos", "boing", "boink", "boite", "boked", "bokeh", "bokes", "bokos", "bolar", "bolas", "bolds", "boles", "bolix", "bolls", "bolos", "bolus", "bomas", "bombe", "bombo", "bombs", "bonce", "boned", "boner", "boney", "bongo", "bongs", "bonie", "bonks", "bonne", "bonny", "bonus", "bonza", "bonze", "booai", "booay", "boobs", "booby", "boody", "booed", "boofy", "boogy", "boohs", "booky", "bools", "booms", "boomy", "boong", "boons", "boord", "boors", "boose", "boost", "booze", "boozy", "boppy", "borak", "boral", "boras", "borax", "borde", "bords", "boree", "borel", "borer", "bores", "borgo", "boric", "borks", "borms", "borna", "boron", "borts", "borty", "bortz", "bosie", "bosks", "bosky", "boson", "bossy", "bosun", "botas", "botch", "botel", "botes", "bothy", "botte", "botts", "botty", "bouge", "bouks", "boule", "boult", "bouns", "bourd", "bourg", "bourn", "bouse", "bousy", "bovid", "bowat", "bowel", "bower", "bowes", "bowet", "bowie", "bowne", "bowrs", "bowse", "boxed", "boxen", "boxer", "boxes", "boxla", "boxty", "boyar", "boyau", "boyed", "boyfs", "boygs", "boyla", "boyos", "boysy", "bozos", "braai", "brace", "brach", "brack", "bract", "brads", "braes", "brags", "braid", "brail", "brain", "brake", "braks", "braky", "brame", "brane", "brank", "brans", "brant", "brash", "brast", "brats", "brava", "bravi", "bravo", "brawl", "brawn", "braws", "braxy", "brays", "braza", "braze", "bream", "brede", "breds", "breem", "breer", "brees", "breid", "breis", "breme", "brens", "brent", "brere", "brers", "breve", "brews", "breys", "bries", "brigs", "briki", "briks", "brill", "brims", "brine", "brink", "brins", "briny", "brios", "brise", "brisk", "briss", "brith", "brits", "britt", "brize", "broch", "brock", "brods", "brogh", "brogs", "broil", "brome", "bromo", "bronc", "brond", "brool", "broos", "brose", "brosy", "brows", "brugh", "bruin", "bruit", "brule", "brume", "brung", "brunt", "brush", "brusk", "brust", "brute", "bruts", "buats", "buaze", "bubal", "bubas", "bubba", "bubbe", "bubby", "bubus", "buchu", "bucko", "bucks", "bucku", "budas", "buddy", "budge", "budis", "budos", "buffa", "buffe", "buffi", "buffo", "buffs", "buffy", "bufos", "bufty", "buggy", "bugle", "buhls", "buhrs", "buiks", "buist", "bukes", "bulbs", "bulgy", "bulks", "bulky", "bulla", "bully", "bulse", "bumbo", "bumfs", "bumph", "bumps", "bumpy", "bunas", "bunce", "bunco", "bunde", "bundh", "bunds", "bundt", "bundu", "bundy", "bungs", "bungy", "bunia", "bunje", "bunjy", "bunko", "bunks", "bunns", "bunny", "bunts", "bunty", "bunya", "buoys", "buppy", "buran", "buras", "burbs", "burds", "buret", "burfi", "burgh", "burgs", "burin", "burka", "burke", "burks", "burls", "burly", "buroo", "burps", "burqa", "burro", "burrs", "burry", "bursa", "burse", "busby", "bused", "buses", "bushy", "busks", "busky", "bussu", "busti", "busts", "busty", "butch", "buteo", "butes", "butle", "butoh", "butte", "butts", "butty", "butut", "butyl", "buxom", "buzzy", "bwana", "bwazi", "byded", "bydes", "byked", "bykes", "bylaw", "byres", "byrls", "byssi", "bytes", "byway", "caaed", "cabal", "cabas", "cabby", "caber", "cabin", "cable", "cabob", "caboc", "cabre", "cacao", "cacas", "cache", "cacks", "cacky", "cacti", "caddy", "cadee", "cades", "cadet", "cadge", "cadgy", "cadie", "cadis", "cadre", "caeca", "caese", "cafes", "caffs", "caged", "cager", "cages", "cagey", "cagot", "cahow", "caids", "cains", "caird", "cairn", "cajon", "cajun", "caked", "cakey", "calfs", "calid", "calif", "calix", "calks", "calla", "calms", "calmy", "calos", "calpa", "calps", "caman", "camas", "cameo", "cames", "camis", "camos", "campi", "campo", "campy", "camus", "canal", "candy", "caned", "caneh", "caner", "canes", "cangs", "canid", "canna", "canns", "canny", "canoe", "canon", "canso", "canst", "canto", "cants", "canty", "capas", "caped", "caper", "capes", "capex", "caphs", "capiz", "caple", "capon", "capos", "capot", "capri", "capul", "caput", "carap", "carat", "carbo", "carbs", "carby", "cardi", "cards", "cardy", "carer", "caret", "carex", "carks", "carle", "carls", "carns", "carny", "carol", "carom", "caron", "carpi", "carps", "carrs", "carse", "carta", "carte", "carts", "carve", "carvy", "casas", "casco", "cased", "casks", "casky", "caste", "casus", "cater", "cates", "catty", "cauda", "cauks", "cauld", "caulk", "cauls", "caums", "caups", "cauri", "causa", "cavas", "caved", "cavel", "caver", "cavie", "cavil", "cawed", "cawks", "caxon", "ceaze", "cebid", "cecal", "cecum", "ceded", "ceder", "cedes", "cedis", "ceiba", "ceili", "ceils", "celeb", "cella", "celli", "cello", "celom", "celts", "cense", "cento", "cents", "centu", "ceorl", "cepes", "cerci", "cered", "ceres", "cerge", "ceria", "ceric", "cerne", "ceroc", "ceros", "certs", "certy", "cesse", "cesta", "cesti", "cetes", "cetyl", "cezve", "chace", "chack", "chaco", "chado", "chads", "chafe", "chaft", "chais", "chals", "champ", "chams", "chana", "chang", "chank", "chant", "chape", "chaps", "chapt", "chara", "chard", "chare", "chark", "charm", "charr", "chars", "chart", "chary", "chats", "chave", "chavs", "chawk", "chaws", "chaya", "chays", "cheap", "check", "cheep", "chefs", "cheka", "chela", "chelp", "chemo", "chems", "chere", "chert", "chess", "cheth", "chevy", "chewy", "chiao", "chias", "chibs", "chica", "chich", "chick", "chico", "chics", "chide", "chiel", "chiks", "chile", "chili", "chill", "chimb", "chime", "chimo", "chimp", "china", "chine", "ching", "chino", "chins", "chips", "chirk", "chirl", "chirm", "chiro", "chirp", "chirr", "chirt", "chiru", "chits", "chive", "chivs", "chivy", "chizz", "chock", "choco", "chocs", "chode", "chogs", "choil", "choko", "choky", "chola", "choli", "cholo", "chomp", "chons", "choof", "chook", "choom", "choon", "chord", "chore", "chota", "chott", "chout", "choux", "chowk", "chows", "chubs", "chuck", "chufa", "chuff", "chugs", "chump", "chums", "chunk", "churl", "churn", "churr", "chuse", "chute", "chuts", "chyle", "chyme", "chynd", "cibol", "cided", "cider", "cides", "ciels", "cigar", "ciggy", "cilia", "cills", "cimar", "cimex", "cinch", "cinct", "cines", "cinqs", "cions", "cippi", "circa", "circs", "cires", "cirls", "cirri", "cisco", "cissy", "cists", "cital", "cited", "citer", "cites", "cives", "civet", "civic", "civie", "civvy", "clach", "clack", "clade", "clads", "claes", "clags", "clame", "clamp", "clams", "clang", "clank", "clapt", "claro", "clart", "clary", "clash", "clast", "clats", "claut", "clave", "clavi", "clays", "cleat", "cleck", "cleek", "cleep", "clefs", "clegs", "cleik", "clems", "clepe", "clept", "cleve", "clews", "click", "clied", "clies", "clift", "clime", "cline", "clink", "clint", "clipe", "clips", "clipt", "clits", "cloam", "clock", "cloff", "clogs", "cloke", "clomb", "clomp", "clone", "clonk", "clons", "cloop", "cloot", "clops", "clote", "clots", "clour", "clous", "clout", "clove", "clown", "clows", "cloye", "cloys", "cloze", "cluck", "clued", "clues", "cluey", "clump", "clunk", "clype", "cnida", "coach", "coact", "coady", "coala", "coaly", "coapt", "coarb", "coate", "coati", "cobbs", "cobby", "cobia", "coble", "cobza", "cocas", "cocci", "cocco", "cocks", "cocky", "cocoa", "cocos", "codas", "codec", "coded", "coden", "coder", "codes", "codex", "codon", "coeds", "coffs", "cogie", "cogon", "cogue", "cohab", "cohen", "cohoe", "cohog", "cohos", "coifs", "coign", "coils", "coirs", "coits", "coked", "cokes", "colas", "colby", "colds", "coled", "coles", "coley", "colic", "colin", "colls", "colly", "colog", "colon", "colts", "colza", "comae", "comal", "comas", "combe", "combi", "combo", "combs", "comby", "comer", "comet", "comfy", "comic", "comix", "comma", "commo", "comms", "commy", "compo", "comps", "compt", "comte", "comus", "conch", "condo", "coned", "cones", "coney", "confs", "conga", "conge", "congo", "conia", "conic", "conin", "conks", "conky", "conne", "conns", "conte", "conto", "conus", "convo", "cooch", "cooed", "cooee", "cooer", "cooey", "coofs", "cooky", "cools", "cooly", "coomb", "cooms", "coomy", "coops", "coopt", "coost", "coots", "cooze", "copal", "copay", "coped", "copen", "coper", "copes", "coppy", "copra", "copse", "copsy", "coqui", "coram", "corbe", "corby", "cored", "corer", "cores", "corey", "corgi", "coria", "corks", "corky", "corms", "corni", "corno", "corns", "cornu", "corny", "corps", "corse", "corso", "cosec", "cosed", "coses", "coset", "cosey", "cosie", "costa", "coste", "costs", "cotan", "coted", "cotes", "coths", "cotta", "cotts", "coude", "cough", "coupe", "coups", "courb", "courd", "coure", "cours", "couta", "couth", "coved", "coven", "coves", "covey", "covin", "cowal", "cowan", "cowed", "cower", "cowks", "cowls", "cowps", "cowry", "coxae", "coxal", "coxed", "coxes", "coxib", "coyau", "coyed", "coyer", "coyly", "coypu", "cozed", "cozen", "cozes", "cozey", "cozie", "craal", "crabs", "crack", "crags", "craic", "craig", "crake", "crame", "cramp", "crams", "crank", "crans", "crape", "craps", "crapy", "crare", "crass", "crate", "crave", "craws", "crays", "craze", "creak", "credo", "creds", "creed", "creek", "creel", "crees", "creme", "crems", "crena", "crepe", "creps", "crepy", "cress", "crest", "crewe", "crews", "crias", "cribs", "crick", "crier", "crimp", "crims", "crine", "crios", "cripe", "crips", "crise", "crisp", "crith", "crits", "croak", "croci", "crock", "crocs", "croft", "crogs", "cromb", "crome", "crone", "cronk", "crons", "crony", "crook", "crool", "croon", "crore", "crost", "croup", "crout", "croze", "cruck", "crude", "crudo", "cruds", "crudy", "crues", "cruet", "cruft", "crumb", "crump", "crunk", "cruor", "crura", "crust", "crusy", "cruve", "crwth", "cryer", "crypt", "ctene", "cubby", "cubeb", "cubed", "cuber", "cubes", "cubic", "cuddy", "cuffo", "cuffs", "cuifs", "cuing", "cuish", "cuits", "cukes", "culch", "culet", "culex", "culls", "cully", "culms", "culpa", "culti", "cults", "culty", "cumec", "cumin", "cundy", "cunei", "cunit", "cunts", "cupel", "cupid", "cuppa", "cuppy", "curat", "curbs", "curch", "curdy", "curer", "cures", "curet", "curfs", "curia", "curie", "curio", "curli", "curls", "curly", "curns", "curny", "currs", "curry", "cursi", "curst", "curve", "curvy", "cusec", "cushy", "cusks", "cusps", "cuspy", "cusso", "cusum", "cutch", "cuter", "cutes", "cutey", "cutie", "cutin", "cutis", "cutto", "cutty", "cutup", "cuvee", "cuzes", "cwtch", "cyano", "cyans", "cyber", "cycad", "cycas", "cycle", "cyclo", "cyder", "cylix", "cymae", "cymar", "cymas", "cymes", "cymol", "cynic", "cysts", "cytes", "cyton", "czars", "daals", "dabba", "daces", "dacha", "dacks", "dadah", "dadas", "daddy", "dados", "daffs", "daffy", "dagga", "daggy", "dagos", "dahls", "daiko", "daine", "daint", "dairy", "daisy", "daker", "daled", "dales", "dalis", "dalle", "dally", "dalts", "daman", "damar", "dames", "damme", "damns", "damps", "dampy", "dancy", "dandy", "dangs", "danio", "danks", "danny", "dants", "daraf", "darbs", "darcy", "darer", "dares", "darga", "dargs", "daric", "daris", "darks", "darns", "darre", "darzi", "dashi", "dashy", "datal", "dated", "dater", "dates", "datos", "datto", "datum", "daube", "daubs", "dauby", "dauds", "dault", "daunt", "daurs", "dauts", "daven", "davit", "dawah", "dawds", "dawed", "dawen", "dawks", "dawts", "dayan", "daych", "daynt", "dazed", "dazer", "dazes", "deads", "deair", "deans", "deare", "dearn", "dears", "deary", "deash", "deave", "deaws", "deawy", "debag", "debby", "debel", "debes", "debit", "debud", "debug", "debur", "debus", "debut", "debye", "decad", "decaf", "decal", "decan", "decko", "decks", "decor", "decos", "decoy", "decry", "dedal", "deedy", "deely", "deems", "deens", "deeps", "deere", "deers", "deets", "deeve", "deevs", "defat", "deffo", "defis", "defog", "degas", "degum", "degus", "deice", "deids", "deify", "deign", "deils", "deism", "deist", "deity", "deked", "dekes", "dekko", "deled", "deles", "delfs", "delft", "delis", "dells", "delly", "delos", "delph", "delta", "delts", "delve", "deman", "demes", "demic", "demit", "demob", "demoi", "demos", "dempt", "demur", "denar", "denay", "dench", "denes", "denet", "denim", "denis", "dense", "dents", "deoxy", "depot", "derat", "deray", "derby", "dered", "deres", "derig", "derma", "derms", "derns", "derny", "deros", "derro", "derry", "derth", "dervs", "desex", "deshi", "desis", "desks", "desse", "deter", "detox", "deuce", "devas", "devel", "devis", "devon", "devos", "devot", "dewan", "dewar", "dewax", "dewed", "dexes", "dexie", "dhaba", "dhaks", "dhals", "dhikr", "dhobi", "dhole", "dholl", "dhols", "dhoti", "dhows", "dhuti", "diact", "dials", "diane", "diary", "diazo", "dibbs", "diced", "dicer", "dices", "dicey", "dicht", "dicks", "dicky", "dicot", "dicta", "dicts", "dicty", "diddy", "didie", "didos", "didst", "diebs", "diels", "diene", "diets", "diffs", "dight", "digit", "dikas", "diked", "diker", "dikes", "dikey", "dildo", "dilli", "dills", "dilly", "dimbo", "dimer", "dimes", "dimps", "dinar", "diner", "dines", "dinge", "dingo", "dings", "dingy", "dinic", "dinks", "dinky", "dinna", "dinos", "dints", "diode", "diols", "diota", "dippy", "dipso", "diram", "direr", "dirke", "dirks", "dirls", "dirts", "disas", "disci", "disco", "discs", "dishy", "disks", "disme", "dital", "ditas", "ditch", "dited", "dites", "ditsy", "ditto", "ditts", "ditty", "ditzy", "divan", "divas", "dived", "diver", "dives", "divis", "divna", "divos", "divot", "divvy", "diwan", "dixie", "dixit", "diyas", "dizen", "dizzy", "djinn", "djins", "doabs", "doats", "dobby", "dobes", "dobie", "dobla", "dobra", "dobro", "docht", "docks", "docos", "docus", "doddy", "dodge", "dodgy", "dodos", "doeks", "doest", "doeth", "doffs", "dogan", "doges", "dogey", "doggo", "doggy", "dogie", "dogma", "dohyo", "doilt", "doily", "doits", "dojos", "dolce", "dolci", "doled", "doles", "dolia", "dolls", "dolly", "dolma", "dolor", "dolos", "dolts", "domal", "domed", "domes", "domic", "donah", "donas", "donee", "doner", "donga", "dongs", "donko", "donna", "donne", "donny", "donor", "donsy", "donut", "doobs", "dooce", "doody", "dooks", "doole", "dools", "dooly", "dooms", "doomy", "doona", "doorn", "doozy", "dopas", "doped", "doper", "dopes", "dopey", "dorad", "dorba", "dorbs", "doree", "dores", "doric", "doris", "dorks", "dorky", "dorms", "dormy", "dorps", "dorrs", "dorsa", "dorse", "dorts", "dorty", "dosai", "dosas", "dosed", "doseh", "doser", "doses", "dosha", "dotal", "doted", "doter", "dotes", "dotty", "douar", "douce", "doucs", "douks", "doula", "douma", "doums", "doups", "doura", "douse", "douts", "doved", "doven", "dover", "dovie", "dowar", "dowds", "dowdy", "dowed", "dowel", "dower", "dowie", "dowle", "dowls", "dowly", "downa", "downs", "downy", "dowps", "dowse", "dowts", "doxed", "doxes", "doxie", "doyen", "doyly", "dozed", "dozen", "dozer", "dozes", "drabs", "drack", "draco", "draff", "draft", "drail", "drake", "drama", "drams", "drant", "drape", "draps", "drats", "drave", "drawl", "drays", "drear", "dreck", "dreed", "dreer", "drees", "dreks", "drent", "drere", "drest", "dreys", "dribs", "drice", "drier", "drill", "drily", "drips", "dript", "droid", "droil", "droit", "droke", "drole", "droll", "drome", "drone", "drony", "droob", "droog", "drook", "drool", "droop", "dropt", "drouk", "drows", "drubs", "drugs", "druid", "drums", "drupe", "druse", "drusy", "druxy", "dryad", "dryas", "dryer", "dryly", "dsobo", "dsomo", "duads", "duals", "duans", "duars", "dubbo", "ducal", "ducat", "duces", "duchy", "ducks", "ducky", "ducts", "duddy", "duded", "dudes", "duels", "duets", "duett", "duffs", "dufus", "duing", "duits", "dukas", "duked", "dukes", "dukka", "dulce", "dules", "dulia", "dulls", "dully", "dulse", "dumas", "dumbo", "dumbs", "dumka", "dumky", "dummy", "dumps", "dumpy", "dunam", "dunce", "dunch", "dunes", "dungs", "dungy", "dunks", "dunno", "dunny", "dunsh", "dunts", "duomi", "duomo", "duped", "duper", "dupes", "duple", "duply", "duppy", "dural", "duras", "dured", "dures", "durgy", "durns", "duroc", "duros", "duroy", "durra", "durrs", "durry", "durst", "durum", "durzi", "dusks", "dusky", "dusts", "dusty", "dutch", "duvet", "duxes", "dwaal", "dwale", "dwalm", "dwams", "dwang", "dwaum", "dweeb", "dwile", "dwine", "dyads", "dyers", "dykon", "dynel", "dynes", "dzhos", "eagre", "ealed", "eales", "eaned", "eards", "eared", "earls", "earnt", "earst", "eased", "easel", "easer", "eases", "easle", "easts", "eathe", "eaved", "eaves", "ebbed", "ebbet", "ebons", "ebook", "ecads", "eched", "eches", "echos", "eclat", "ecrus", "edema", "edger", "edify", "edile", "edits", "educe", "educt", "eejit", "eensy", "eerie", "eeven", "eevns", "effed", "egads", "egers", "egest", "eggar", "egged", "egger", "egmas", "egret", "ehing", "eider", "eidos", "eigne", "eiked", "eikon", "eilds", "eisel", "eject", "ejido", "eking", "ekkas", "elain", "eland", "elans", "elate", "elchi", "eldin", "elect", "elegy", "elemi", "elfed", "elfin", "eliad", "elide", "elint", "elite", "elmen", "eloge", "elogy", "eloin", "elope", "elops", "elpee", "elsin", "elude", "elute", "elvan", "elven", "elver", "elves", "emacs", "email", "embar", "embay", "embed", "embog", "embow", "embox", "embus", "emcee", "emeer", "emend", "emerg", "emery", "emeus", "emics", "emirs", "emits", "emmas", "emmer", "emmet", "emmew", "emmys", "emoji", "emong", "emote", "emove", "empts", "emule", "emure", "emyde", "emyds", "enact", "enarm", "enate", "ender", "endew", "endow", "endue", "enema", "enews", "enfix", "eniac", "enlit", "enmew", "ennog", "ennui", "enoki", "enols", "enorm", "enows", "enrol", "ensew", "ensky", "ensue", "entia", "enure", "enurn", "envoi", "enzym", "eorls", "eosin", "epact", "epees", "ephas", "ephor", "epics", "epoch", "epode", "epopt", "epoxy", "epris", "eques", "equid", "equip", "erbia", "erevs", "ergon", "ergos", "ergot", "erhus", "erica", "erick", "erics", "ering", "erned", "ernes", "erode", "erose", "erses", "eruct", "erugo", "erupt", "eruvs", "erven", "ervil", "escar", "escot", "esile", "eskar", "esker", "esnes", "essay", "esses", "ester", "estoc", "estop", "estro", "etage", "etape", "etats", "etens", "ethal", "ethic", "ethne", "ethos", "ethyl", "etics", "etnas", "ettin", "ettle", "etude", "etuis", "etwee", "etyma", "eughs", "euked", "eupad", "euros", "eusol", "evade", "evens", "event", "evert", "evets", "evhoe", "evict", "evite", "evohe", "evoke", "ewers", "ewest", "ewhow", "ewked", "exams", "exeat", "execs", "exeem", "exeme", "exert", "exfil", "exies", "exine", "exing", "exode", "exome", "exons", "expat", "expel", "expos", "exude", "exuls", "exurb", "eyass", "eyers", "eying", "eyots", "eyras", "eyres", "eyrie", "eyrir", "ezine", "fabby", "fable", "facer", "facet", "facia", "facta", "faddy", "fader", "fadge", "fados", "faena", "faery", "faffs", "faffy", "fagin", "faiks", "faine", "fains", "fairs", "fairy", "faked", "faker", "fakes", "fakey", "fakie", "fakir", "falaj", "famed", "fames", "fanal", "fands", "fanes", "fanga", "fango", "fanks", "fanny", "fanon", "fanos", "fanum", "faqir", "farad", "farce", "farci", "farcy", "fards", "farer", "fares", "farle", "farls", "farms", "faros", "farro", "farse", "farts", "fasci", "fasti", "fasts", "fatal", "fated", "fates", "fatly", "fatso", "fatwa", "faugh", "fauld", "fauna", "fauns", "faurd", "fauts", "fauve", "favas", "favel", "faver", "faves", "favus", "fawny", "faxed", "faxes", "fayed", "fayer", "fayne", "fayre", "fazed", "fazes", "feals", "feare", "feart", "fease", "feats", "feaze", "fecal", "feces", "fecht", "fecit", "fecks", "fedex", "feebs", "feels", "feens", "feers", "feese", "feeze", "fehme", "feign", "feint", "feist", "felch", "felid", "fella", "fells", "felly", "felon", "felts", "felty", "femal", "femes", "femme", "femmy", "femur", "fends", "fendy", "fenis", "fenks", "fenny", "fents", "feods", "feoff", "feral", "ferer", "feres", "feria", "ferly", "fermi", "ferms", "ferns", "ferny", "ferry", "fesse", "festa", "fests", "festy", "fetal", "fetas", "feted", "fetes", "fetid", "fetor", "fetta", "fetts", "fetus", "fetwa", "feuar", "feuds", "feued", "fewer", "feyed", "feyer", "feyly", "fezes", "fezzy", "fiars", "fiats", "fiber", "fibro", "fices", "fiche", "fichu", "ficin", "ficos", "ficus", "fides", "fidge", "fidos", "fiefs", "fiend", "fient", "fiere", "fiers", "fiest", "fifed", "fifer", "fifes", "fifis", "figgy", "figos", "fiked", "fikes", "filar", "filch", "filed", "filer", "files", "filet", "filii", "filks", "fille", "fillo", "filly", "filmi", "films", "filmy", "filos", "filum", "finca", "finch", "finer", "fines", "finis", "finks", "finny", "finos", "fiord", "fiqhs", "fique", "firer", "firie", "firks", "firms", "firns", "firry", "firth", "fiscs", "fishy", "fisks", "fisty", "fitch", "fitna", "fitte", "fitts", "fiver", "fives", "fixer", "fixes", "fixit", "fizzy", "fjeld", "fjord", "flabs", "flack", "flaff", "flags", "flail", "flair", "flake", "flaks", "flaky", "flamm", "flams", "flamy", "flane", "flans", "flaps", "flare", "flary", "flats", "flava", "flawn", "flaws", "flawy", "flaxy", "flays", "fleam", "fleas", "fleck", "fleek", "fleer", "flegs", "fleme", "fleur", "flews", "flexi", "flexo", "fleys", "flick", "flics", "flied", "flier", "flimp", "flims", "fling", "flips", "flirs", "flirt", "flisk", "flite", "flits", "flitt", "flobs", "flocs", "floes", "flogs", "flong", "flops", "flora", "flors", "flory", "flosh", "floss", "flota", "flote", "flout", "flown", "flubs", "flued", "flues", "fluey", "fluff", "fluid", "fluke", "fluky", "flume", "flump", "flunk", "fluor", "flurr", "flush", "fluty", "fluyt", "flyby", "flyer", "flype", "flyte", "foals", "foamy", "focal", "foehn", "fogey", "foggy", "fogie", "fogle", "fogou", "fohns", "foids", "foils", "foins", "foist", "foley", "folia", "folic", "folie", "folio", "folks", "folky", "fomes", "fonda", "fonds", "fondu", "fones", "fonly", "fonts", "foody", "foots", "footy", "foram", "foray", "forbs", "forby", "fordo", "forel", "fores", "forex", "forge", "forgo", "forky", "forme", "forte", "forts", "forum", "forza", "forze", "fossa", "fosse", "fouat", "fouds", "fouer", "fouet", "foule", "fouls", "fount", "fouth", "fovea", "fowls", "fowth", "foxed", "foxie", "foyer", "foyle", "foyne", "frabs", "frack", "fract", "frags", "fraim", "franc", "frank", "frape", "fraps", "frass", "frate", "frati", "frats", "fraud", "fraus", "frays", "freak", "freer", "freet", "freit", "fremd", "frena", "freon", "frere", "frets", "friar", "fribs", "fried", "frier", "fries", "frigs", "frill", "frise", "frisk", "frist", "frith", "frits", "fritt", "fritz", "frize", "frizz", "frock", "froes", "frond", "frons", "frore", "frorn", "frory", "frosh", "froth", "frown", "frows", "frowy", "froze", "frugs", "frump", "frush", "frust", "fryer", "fubar", "fubby", "fubsy", "fucks", "fucus", "fuddy", "fudge", "fudgy", "fuels", "fuero", "fuffs", "fuffy", "fugal", "fuggy", "fugie", "fugio", "fugle", "fugly", "fugue", "fugus", "fujis", "fulls", "fumed", "fumer", "fumes", "fumet", "fundi", "funds", "fundy", "fungi", "fungo", "fungs", "funks", "funky", "funny", "fural", "furan", "furca", "furls", "furol", "furor", "furrs", "furry", "furth", "furze", "furzy", "fused", "fusee", "fusel", "fuses", "fusil", "fusks", "fussy", "fusts", "fusty", "futon", "fuzed", "fuzee", "fuzes", "fuzil", "fuzzy", "fyces", "fyked", "fykes", "fyles", "fyrds", "fytte", "gabba", "gabby", "gable", "gaddi", "gades", "gadge", "gadid", "gadis", "gadje", "gadjo", "gadso", "gaffe", "gaffs", "gaged", "gager", "gages", "gaids", "gaily", "gairs", "gaita", "gaits", "gaitt", "gajos", "galah", "galas", "galax", "galea", "galed", "gales", "galls", "gally", "galop", "galut", "galvo", "gamas", "gamay", "gamba", "gambe", "gambo", "gambs", "gamed", "gamer", "gamey", "gamic", "gamin", "gamma", "gamme", "gammy", "gamps", "gamut", "ganch", "gandy", "ganef", "ganev", "gangs", "ganja", "ganof", "gants", "gaols", "gaped", "gaper", "gapes", "gapos", "gappy", "garbe", "garbo", "garbs", "garda", "gares", "garis", "garms", "garni", "garre", "garth", "garum", "gases", "gasps", "gaspy", "gassy", "gasts", "gatch", "gated", "gater", "gaths", "gator", "gauch", "gaucy", "gauds", "gaudy", "gauge", "gauje", "gault", "gaums", "gaumy", "gaunt", "gaups", "gaurs", "gauss", "gauze", "gauzy", "gavel", "gavot", "gawcy", "gawds", "gawks", "gawky", "gawps", "gawsy", "gayal", "gayer", "gayly", "gazal", "gazar", "gazer", "gazon", "gazoo", "geals", "geans", "geare", "gears", "geats", "gebur", "gecks", "geeks", "geeky", "geeps", "geese", "geest", "geist", "geits", "gelds", "gelee", "gelid", "gelly", "gelts", "gemel", "gemma", "gemmy", "gemot", "genal", "genas", "genes", "genet", "genic", "genie", "genii", "genip", "genny", "genoa", "genom", "genre", "genro", "gents", "genty", "genua", "genus", "geode", "geoid", "gerah", "gerbe", "geres", "gerle", "germs", "germy", "gerne", "gesse", "gesso", "geste", "gests", "getas", "getup", "geums", "geyan", "geyer", "ghast", "ghats", "ghaut", "ghazi", "ghees", "ghest", "ghoul", "ghyll", "gibed", "gibel", "giber", "gibes", "gibli", "gibus", "giddy", "gigas", "gighe", "gigot", "gigue", "gilas", "gilds", "gilet", "gills", "gilly", "gilpy", "gilts", "gimel", "gimme", "gimps", "gimpy", "ginch", "ginge", "gings", "ginks", "ginny", "ginzo", "gipon", "gippo", "gippy", "gipsy", "girly", "girns", "giron", "giros", "girrs", "girsh", "girth", "girts", "gismo", "gisms", "gists", "gitch", "gites", "giust", "gived", "gizmo", "glace", "glade", "glads", "glady", "glaik", "glair", "glams", "gland", "glans", "glare", "glary", "glaum", "glaur", "glaze", "glazy", "gleba", "glebe", "gleby", "glede", "gleds", "gleed", "gleek", "glees", "gleet", "gleis", "glens", "glent", "gleys", "glial", "glias", "glibs", "glide", "gliff", "glift", "glike", "glime", "glims", "glint", "glisk", "glits", "glitz", "gloam", "gloat", "globe", "globi", "globs", "globy", "glode", "glogg", "gloms", "gloop", "glops", "gloss", "glost", "glout", "glove", "glows", "gloze", "glued", "gluer", "glues", "gluey", "glugs", "glume", "glums", "gluon", "glute", "gluts", "glyph", "gnarl", "gnarr", "gnars", "gnawn", "gnaws", "gnome", "gnows", "goafs", "goals", "goary", "goaty", "goban", "gobar", "gobbi", "gobbo", "gobby", "gobis", "gobos", "godet", "godso", "goels", "goers", "goest", "goeth", "goety", "gofer", "goffs", "gogga", "gogos", "goier", "gojis", "golds", "goldy", "golem", "goles", "golfs", "golly", "golpe", "golps", "gombo", "gomer", "gompa", "gonad", "gonch", "gonef", "goner", "gongs", "gonia", "gonif", "gonks", "gonna", "gonof", "gonys", "gonzo", "gooby", "goody", "gooey", "goofs", "goofy", "googs", "gooky", "goold", "gools", "gooly", "goons", "goony", "goops", "goopy", "goors", "goory", "goose", "goosy", "gopak", "gopik", "goral", "goras", "gored", "gorge", "goris", "gorms", "gormy", "gorps", "gorse", "gorsy", "gosht", "gosse", "gotch", "goths", "gothy", "gotta", "gouch", "gouge", "gouks", "goura", "gourd", "gouts", "gouty", "gowan", "gowds", "gowfs", "gowks", "gowls", "goxes", "goyim", "goyle", "graal", "grade", "grads", "graff", "grail", "graip", "grama", "grame", "gramp", "grams", "grana", "grand", "grans", "graph", "grapy", "grate", "gravs", "gravy", "grays", "grebe", "grebo", "grece", "greed", "grees", "grege", "grego", "grein", "grens", "grese", "greve", "grews", "greys", "grice", "gride", "grids", "griff", "grift", "grigs", "grike", "grill", "grime", "grimy", "grins", "griot", "gripe", "grips", "gript", "gripy", "grise", "grist", "grisy", "grith", "grits", "grize", "groat", "grody", "grogs", "groin", "groks", "groma", "grone", "groof", "groom", "gross", "grosz", "grots", "grouf", "grout", "grove", "grovy", "grrls", "grrrl", "grubs", "grued", "gruel", "grues", "grufe", "gruff", "grume", "grump", "grund", "grunt", "gryce", "gryde", "gryke", "grype", "grypt", "guaco", "guana", "guano", "guans", "guars", "guava", "gucks", "gucky", "gudes", "guess", "guffs", "gugas", "guids", "guild", "guimp", "guiro", "guise", "gulag", "gular", "gulas", "gulch", "gules", "gulet", "gulfs", "gulfy", "gulls", "gully", "gulph", "gulps", "gulpy", "gumbo", "gumma", "gummi", "gummy", "gumps", "gundy", "gunge", "gungy", "gunks", "gunky", "gunny", "guppy", "guqin", "gurdy", "gurge", "gurls", "gurly", "gurns", "gurry", "gursh", "gurus", "gushy", "gusla", "gusle", "gusli", "gussy", "gusto", "gusts", "gusty", "gutsy", "gutta", "gutty", "guyed", "guyle", "guyot", "guyse", "gwine", "gyals", "gyans", "gybed", "gybes", "gyeld", "gymps", "gynae", "gynie", "gynny", "gynos", "gyoza", "gypos", "gyppo", "gyppy", "gypsy", "gyral", "gyred", "gyres", "gyron", "gyros", "gyrus", "gytes", "gyved", "gyves", "haafs", "haars", "habit", "hable", "habus", "hacek", "hacks", "hadal", "haded", "hadji", "hadst", "haems", "haets", "haffs", "hafiz", "hafts", "haggs", "hahas", "haick", "haika", "haiks", "haiku", "hails", "haily", "hains", "haint", "haith", "hajes", "hajis", "hajji", "hakam", "hakas", "hakea", "hakes", "hakim", "hakus", "halal", "haled", "haler", "hales", "halfa", "halfs", "halid", "hallo", "halls", "halma", "halms", "halon", "halos", "halse", "halva", "halwa", "hamal", "hamba", "hamed", "hames", "hammy", "hamza", "hanap", "hance", "hanch", "handy", "hangi", "hanks", "hanky", "hansa", "hanse", "hants", "haole", "haoma", "hapax", "haply", "happi", "hapus", "hards", "hardy", "hared", "harem", "hares", "harim", "harks", "harls", "harms", "harns", "haros", "harpy", "harry", "harts", "hashy", "hasks", "hasps", "hasta", "hater", "hatha", "hauds", "haufs", "haugh", "hauld", "haulm", "hauls", "hault", "hauns", "haunt", "hause", "haute", "haver", "haves", "havoc", "hawed", "hawks", "hawms", "hawse", "hayed", "hayer", "hayey", "hayle", "hazan", "hazed", "hazel", "hazer", "hazes", "heady", "heald", "heame", "heapy", "heare", "heast", "heath", "heats", "heben", "hebes", "hecht", "hecks", "heder", "hedgy", "heedy", "heeze", "hefte", "hefts", "hefty", "heids", "heigh", "heils", "heist", "hejab", "hejra", "heled", "heles", "helio", "helix", "hello", "hells", "helms", "helos", "helot", "helve", "hemal", "hemes", "hemic", "hemin", "hemps", "hempy", "hench", "hends", "henge", "henny", "henry", "hents", "hepar", "herby", "herls", "herma", "herms", "herns", "heros", "herry", "herse", "hertz", "herye", "hesps", "hests", "hetes", "heths", "heuch", "heugh", "hevea", "hewer", "hewgh", "hexad", "hexed", "hexer", "hexes", "hexyl", "heyed", "hiant", "hicks", "hided", "hider", "hiems", "highs", "hight", "hijab", "hijra", "hiked", "hiker", "hikes", "hikoi", "hilar", "hilch", "hillo", "hilly", "hilts", "hilum", "hilus", "himbo", "hinau", "hinge", "hings", "hinky", "hinny", "hints", "hiois", "hiply", "hippo", "hippy", "hiree", "hirer", "hissy", "hists", "hitch", "hithe", "hived", "hiver", "hives", "hizen", "hoaed", "hoagy", "hoard", "hoars", "hoary", "hoast", "hobby", "hobos", "hocks", "hocus", "hodad", "hodja", "hoers", "hogan", "hogen", "hoggs", "hoghs", "hohed", "hoick", "hoied", "hoiks", "hoing", "hoise", "hoist", "hokas", "hoked", "hokes", "hokey", "hokis", "hokku", "hokum", "holed", "holey", "holks", "holla", "hollo", "holly", "holme", "holms", "holon", "holos", "holts", "homas", "homed", "homey", "homie", "homme", "honan", "honda", "honds", "honed", "honer", "hones", "hongi", "hongs", "honks", "honky", "hooch", "hoods", "hoody", "hooey", "hoofs", "hooka", "hooky", "hooly", "hoons", "hoops", "hoord", "hoors", "hoosh", "hoots", "hooty", "hoove", "hopak", "hoper", "hoppy", "horah", "horal", "horas", "horde", "horis", "horks", "horme", "horny", "horst", "horsy", "hosed", "hosel", "hosen", "hoser", "hoses", "hosey", "hosta", "hotch", "hotel", "hoten", "hotty", "houff", "houfs", "hough", "hound", "houri", "houts", "hovea", "hoved", "hovel", "hoven", "hover", "hoves", "howbe", "howdy", "howes", "howff", "howfs", "howks", "howre", "howso", "hoxed", "hoxes", "hoyas", "hoyed", "hoyle", "hubby", "hucks", "hudna", "hudud", "huers", "huffs", "huffy", "huger", "huggy", "huhus", "huias", "hulas", "hules", "hulks", "hulky", "hullo", "hulls", "hully", "humas", "humfs", "humic", "humid", "humor", "humph", "humpy", "humus", "hunch", "hunks", "hunky", "hurds", "hurly", "hurra", "hurst", "hurts", "hushy", "husks", "husky", "husos", "hussy", "hutch", "hutia", "huzza", "huzzy", "hwyls", "hydra", "hydro", "hyena", "hyens", "hygge", "hying", "hykes", "hylas", "hyleg", "hyles", "hylic", "hymen", "hynde", "hyoid", "hyped", "hyper", "hypes", "hypha", "hyphy", "hypos", "hyson", "hythe", "iambi", "iambs", "ibrik", "icers", "iched", "iches", "ichor", "icier", "icily", "icing", "icker", "ickle", "icons", "ictal", "ictic", "ictus", "idant", "ideal", "ideas", "idees", "ident", "idiom", "idiot", "idled", "idler", "idles", "idola", "idyll", "idyls", "iftar", "igapo", "igged", "igloo", "iglus", "ihram", "ikans", "ikats", "ikons", "ileac", "ileal", "ileum", "ileus", "iliac", "iliad", "ilial", "ilium", "iller", "illth", "imago", "imams", "imari", "imaum", "imbar", "imbed", "imbue", "imide", "imido", "imids", "imine", "imino", "immew", "immit", "immix", "imped", "impel", "impis", "imply", "impot", "impro", "imshi", "imshy", "inane", "inapt", "inarm", "inbox", "inbye", "incel", "incle", "incog", "incus", "incut", "indew", "index", "indie", "indol", "indow", "indri", "indue", "inept", "inerm", "inert", "infer", "infix", "infos", "infra", "ingan", "ingle", "ingot", "inion", "inked", "inker", "inkle", "inlay", "inlet", "inned", "innit", "inorb", "input", "inrun", "inset", "inspo", "intel", "inter", "intil", "intis", "intra", "intro", "inula", "inure", "inurn", "inust", "invar", "inwit", "iodic", "iodid", "iodin", "ionic", "iotas", "ippon", "irade", "irate", "irids", "iring", "irked", "iroko", "irone", "irony", "isbas", "ishes", "isled", "islet", "isnae", "issei", "istle", "itchy", "items", "ither", "ivied", "ivies", "ixias", "ixnay", "ixora", "ixtle", "izard", "izars", "izzat", "jaaps", "jabot", "jacal", "jacks", "jacky", "jaded", "jades", "jafas", "jaffa", "jagas", "jager", "jaggs", "jaggy", "jagir", "jagra", "jails", "jaker", "jakes", "jakey", "jalap", "jalop", "jambe", "jambo", "jambs", "jambu", "jammy", "jamon", "janes", "janns", "janny", "janty", "japan", "japed", "japer", "japes", "jarks", "jarls", "jarps", "jarta", "jarul", "jasey", "jaspe", "jasps", "jatos", "jauks", "jaunt", "jaups", "javas", "javel", "jawan", "jawed", "jaxie", "jazzy", "jeans", "jeats", "jebel", "jedis", "jeels", "jeely", "jeeps", "jeers", "jeeze", "jefes", "jeffs", "jehad", "jehus", "jelab", "jello", "jells", "jelly", "jembe", "jemmy", "jenny", "jeons", "jerid", "jerks", "jerky", "jerry", "jests", "jetes", "jeton", "jetty", "jeune", "jewed", "jewie", "jhala", "jiaos", "jibba", "jibbs", "jibed", "jiber", "jibes", "jiffs", "jiffy", "jiggy", "jigot", "jihad", "jills", "jilts", "jimmy", "jimpy", "jingo", "jinks", "jinne", "jinni", "jinns", "jirds", "jirga", "jirre", "jisms", "jived", "jiver", "jives", "jivey", "jnana", "jobed", "jobes", "jocko", "jocks", "jocky", "jocos", "jodel", "joeys", "johns", "joist", "joked", "joker", "jokes", "jokey", "jokol", "joled", "joles", "jolls", "jolly", "jolts", "jolty", "jomon", "jomos", "jones", "jongs", "jonty", "jooks", "joram", "jorum", "jotas", "jotty", "jotun", "joual", "jougs", "jouks", "joule", "jours", "joust", "jowar", "jowed", "jowls", "jowly", "joyed", "jubas", "jubes", "jucos", "judgy", "judos", "jugal", "jugum", "juicy", "jujus", "juked", "jukes", "jukus", "julep", "jumar", "jumbo", "jumby", "jumps", "jumpy", "junco", "junks", "junky", "junta", "junto", "jupes", "jupon", "jural", "jurat", "jurel", "jures", "juror", "justs", "jutes", "jutty", "juves", "juvie", "kaama", "kabab", "kabar", "kabob", "kacha", "kacks", "kadai", "kades", "kadis", "kafir", "kagos", "kagus", "kahal", "kaiak", "kaids", "kaies", "kaifs", "kaika", "kaiks", "kails", "kaims", "kaing", "kains", "kakas", "kakis", "kalam", "kales", "kalif", "kalis", "kalpa", "kamas", "kames", "kamik", "kamis", "kamme", "kanae", "kanas", "kandy", "kaneh", "kanes", "kanga", "kangs", "kanji", "kants", "kanzu", "kaons", "kapas", "kaphs", "kapok", "kapow", "kappa", "kapus", "kaput", "karas", "karat", "karks", "karma", "karns", "karoo", "karos", "karri", "karst", "karsy", "karts", "karzy", "kasha", "kasme", "katal", "katas", "katis", "katti", "kaugh", "kauri", "kauru", "kaury", "kaval", "kavas", "kawas", "kawau", "kawed", "kayak", "kayle", "kayos", "kazis", "kazoo", "kbars", "kebab", "kebar", "kebob", "kecks", "kedge", "kedgy", "keech", "keefs", "keeks", "keels", "keema", "keeno", "keens", "keets", "keeve", "kefir", "kehua", "keirs", "kelep", "kelim", "kells", "kelly", "kelps", "kelpy", "kelts", "kelty", "kembo", "kembs", "kemps", "kempt", "kempy", "kenaf", "kench", "kendo", "kenos", "kente", "kents", "kepis", "kerbs", "kerel", "kerfs", "kerky", "kerma", "kerne", "kerns", "keros", "kerry", "kerve", "kesar", "kests", "ketas", "ketch", "ketes", "ketol", "kevel", "kevil", "kexes", "keyed", "keyer", "khadi", "khafs", "khaki", "khans", "khaph", "khats", "khaya", "khazi", "kheda", "kheth", "khets", "khoja", "khors", "khoum", "khuds", "kiaat", "kiack", "kiang", "kibbe", "kibbi", "kibei", "kibes", "kibla", "kicks", "kicky", "kiddo", "kiddy", "kidel", "kidge", "kiefs", "kiers", "kieve", "kievs", "kight", "kikoi", "kiley", "kilim", "kilos", "kilps", "kilts", "kilty", "kimbo", "kinas", "kinda", "kindy", "kines", "kinin", "kinks", "kinky", "kinos", "kiore", "kiosk", "kipes", "kippa", "kipps", "kirby", "kirks", "kirns", "kirri", "kisan", "kissy", "kists", "kited", "kiter", "kites", "kithe", "kiths", "kitty", "kitul", "kivas", "kiwis", "klang", "klaps", "klett", "klick", "klieg", "kliks", "klong", "kloof", "kluge", "klutz", "knack", "knags", "knaps", "knarl", "knars", "knaur", "knave", "knawe", "kneed", "knell", "knish", "knits", "knive", "knobs", "knoll", "knops", "knosp", "knots", "knout", "knowe", "knubs", "knurl", "knurr", "knurs", "knuts", "koala", "koans", "koaps", "koban", "kobos", "koels", "koffs", "kofta", "kogal", "kohas", "kohen", "kohls", "koine", "kojis", "kokam", "kokas", "koker", "kokra", "kokum", "kolas", "kolos", "kombu", "konbu", "kondo", "konks", "kooks", "kooky", "koori", "kopek", "kophs", "kopje", "koppa", "korai", "koras", "korat", "kores", "korma", "koros", "korun", "korus", "koses", "kotch", "kotos", "kotow", "koura", "kraal", "krabs", "kraft", "krais", "krait", "krang", "krans", "kranz", "kraut", "krays", "kreep", "kreng", "krewe", "krill", "krona", "krone", "kroon", "krubi", "krunk", "ksars", "kubie", "kudos", "kudus", "kudzu", "kufis", "kugel", "kuias", "kukri", "kukus", "kulak", "kulan", "kulas", "kulfi", "kumis", "kumys", "kuris", "kurre", "kurta", "kurus", "kusso", "kutas", "kutch", "kutis", "kutus", "kuzus", "kvass", "kvell", "kwela", "kyack", "kyaks", "kyang", "kyars", "kyats", "kybos", "kydst", "kyles", "kylie", "kylin", "kylix", "kyloe", "kynde", "kynds", "kypes", "kyrie", "kytes", "kythe", "laari", "labda", "label", "labia", "labis", "labra", "laced", "lacer", "laces", "lacet", "lacey", "laddy", "laded", "lader", "lades", "ladle", "laers", "laevo", "lagan", "lager", "lahal", "lahar", "laich", "laics", "laids", "laigh", "laika", "laiks", "laird", "lairs", "lairy", "laith", "laity", "laked", "laker", "lakes", "lakhs", "lakin", "laksa", "laldy", "lalls", "lamas", "lamby", "lamed", "lamer", "lames", "lamia", "lammy", "lanai", "lanas", "lance", "lanch", "lande", "lanks", "lanky", "lants", "lapel", "lapin", "lapis", "lapje", "lapse", "larch", "lards", "lardy", "laree", "lares", "largo", "laris", "larks", "larky", "larns", "larnt", "larum", "larva", "lased", "laser", "lases", "lassi", "lasso", "lassu", "lassy", "latah", "latch", "lated", "laten", "latex", "lathe", "lathi", "laths", "lathy", "latke", "latte", "latus", "lauan", "lauch", "lauds", "laufs", "laund", "laura", "laval", "lavas", "laved", "laves", "lavra", "lavvy", "lawed", "lawer", "lawin", "lawks", "lawns", "lawny", "laxed", "laxer", "laxes", "laxly", "layed", "layin", "layup", "lazar", "lazed", "lazes", "lazos", "lazzi", "lazzo", "leach", "leady", "leafs", "leaky", "leams", "leant", "leany", "leapt", "leare", "lears", "leary", "leash", "leats", "leavy", "leaze", "leben", "leccy", "ledes", "ledgy", "ledum", "leear", "leeps", "leers", "leery", "leese", "leets", "leeze", "lefte", "lefts", "lefty", "leger", "leges", "legge", "leggo", "leggy", "legit", "lehrs", "lehua", "leirs", "leish", "leman", "lemed", "lemel", "lemes", "lemma", "lemme", "lemon", "lemur", "lenes", "lengs", "lenis", "lenos", "lense", "lenti", "lento", "leone", "lepid", "lepra", "lered", "leres", "lerps", "leses", "lests", "letch", "lethe", "letup", "leuch", "leuco", "leuds", "leugh", "levas", "levee", "lever", "leves", "levin", "levis", "lewis", "lexes", "lexis", "lezes", "lezza", "lezzy", "liana", "liane", "liang", "liard", "liart", "libel", "liber", "libra", "libri", "lichi", "licht", "licit", "lidar", "lidos", "liefs", "liege", "liens", "liers", "lieus", "lieve", "lifer", "lifes", "ligan", "liger", "ligge", "ligne", "liked", "liker", "likes", "likin", "lilac", "lills", "lilos", "lilts", "liman", "limas", "limax", "limba", "limbi", "limbo", "limby", "limed", "limen", "limes", "limey", "limma", "limns", "limos", "limpa", "linac", "linch", "linds", "lindy", "lined", "liner", "liney", "linga", "lingo", "lings", "lingy", "linin", "links", "linky", "linns", "linny", "linos", "lints", "linty", "linum", "linux", "lipas", "lipes", "lipid", "lipin", "lipos", "lippy", "liras", "lirks", "lirot", "lisks", "lisle", "lisps", "lists", "litai", "litas", "lited", "liter", "lites", "lithe", "litho", "liths", "litre", "liven", "livid", "livor", "livre", "llama", "llano", "loach", "loafs", "loams", "loamy", "loans", "loast", "loath", "loave", "lobar", "lobby", "lobed", "lobes", "lobos", "lobus", "loche", "lochs", "locie", "locis", "locos", "locum", "locus", "loden", "lodes", "loess", "lofts", "logan", "loges", "loggy", "logia", "logic", "logie", "login", "logoi", "logon", "logos", "lohan", "loids", "loipe", "loirs", "lokes", "lolls", "lolly", "lolog", "lomas", "lomed", "lomes", "loner", "longa", "longe", "looby", "looed", "looey", "loofa", "loofs", "looie", "looky", "looms", "loons", "loony", "loopy", "loord", "loots", "loped", "loper", "lopes", "loppy", "loral", "loran", "lordy", "lorel", "lores", "loric", "loris", "lorry", "losed", "losel", "losen", "loser", "lossy", "lotah", "lotas", "lotes", "lotic", "lotos", "lotsa", "lotta", "lotte", "lotto", "loued", "lough", "louie", "louis", "louma", "lound", "louns", "loupe", "loups", "loure", "lours", "loury", "louse", "lousy", "louts", "lovat", "lovey", "lovie", "lowan", "lowed", "lowes", "lownd", "lowne", "lowns", "lowps", "lowry", "lowse", "lowts", "loxed", "loxes", "lozen", "luach", "luaus", "lubed", "lubes", "lubra", "luces", "lucid", "lucks", "lucky", "lucre", "ludes", "ludic", "ludos", "luffa", "luffs", "luged", "luger", "luges", "lulls", "lulus", "lumas", "lumbi", "lumen", "lumme", "lummy", "lumps", "lumpy", "lunar", "lunas", "lunch", "lunes", "lunet", "lunge", "lungi", "lungs", "lunks", "lunts", "lupin", "lupus", "lurch", "lured", "lurer", "lures", "lurex", "lurgi", "lurgy", "lurid", "lurry", "lurve", "luser", "lushy", "lusks", "lusty", "lusus", "lutea", "luted", "luter", "lutes", "luvvy", "luxed", "luxer", "luxes", "lweis", "lyams", "lyard", "lyart", "lyase", "lycea", "lycee", "lycra", "lymes", "lymph", "lynes", "lyric", "lysed", "lyses", "lysin", "lysis", "lysol", "lyssa", "lyted", "lytes", "lythe", "lytic", "lytta", "maaed", "maare", "maars", "mabes", "macas", "macaw", "maced", "macer", "maces", "mache", "machi", "macho", "machs", "macks", "macle", "macon", "macro", "madam", "madge", "madid", "madre", "maerl", "mafia", "mafic", "mages", "maggs", "magma", "magot", "magus", "mahoe", "mahua", "mahwa", "maiko", "maiks", "maile", "maill", "mails", "maims", "mains", "maire", "mairs", "maise", "maist", "maize", "major", "makar", "makis", "makos", "malam", "malar", "malas", "malax", "malic", "malik", "malis", "malls", "malms", "malmy", "malts", "malty", "malus", "malva", "malwa", "mamas", "mamba", "mambo", "mamee", "mamey", "mamie", "mamma", "mammy", "manas", "manat", "mandi", "maneb", "maned", "maneh", "manes", "manet", "manga", "mange", "mango", "mangs", "mangy", "mania", "manic", "manis", "manky", "manly", "manor", "manos", "manse", "manta", "manto", "manty", "manul", "manus", "mapau", "maple", "maqui", "marae", "marah", "maras", "marcs", "mardy", "mares", "marge", "margs", "maria", "marid", "marka", "marle", "marls", "marly", "marms", "maron", "maror", "marra", "marri", "marse", "marts", "marvy", "masas", "mased", "maser", "mases", "mashy", "masks", "mason", "massa", "masse", "massy", "masts", "masty", "masus", "matai", "mated", "mater", "mates", "matey", "maths", "matin", "matlo", "matte", "matts", "matza", "matzo", "mauby", "mauds", "mauls", "maund", "mauri", "mausy", "mauts", "mauve", "mauzy", "maven", "mavie", "mavin", "mavis", "mawed", "mawks", "mawky", "mawns", "mawrs", "maxed", "maxes", "maxim", "maxis", "mayan", "mayas", "maybe", "mayed", "mayor", "mayos", "mayst", "mazed", "mazer", "mazes", "mazey", "mazut", "mbira", "meads", "meals", "mealy", "meane", "meany", "meare", "mease", "meath", "meats", "meaty", "mebos", "mecca", "mechs", "mecks", "medal", "medic", "medii", "medle", "meeds", "meers", "meffs", "meins", "meint", "meiny", "meith", "mekka", "melas", "melba", "melds", "melee", "melic", "melik", "mells", "melon", "melty", "memes", "memos", "menad", "mends", "mened", "menes", "menge", "mengs", "mensa", "mense", "mensh", "menta", "mento", "menus", "meous", "meows", "merch", "mercs", "merde", "mered", "merel", "merer", "meres", "merge", "meril", "meris", "merit", "merks", "merle", "merls", "merse", "mesal", "mesas", "mesel", "meses", "meshy", "mesic", "mesne", "meson", "messy", "mesto", "meted", "meter", "metes", "metho", "meths", "metic", "metif", "metis", "metol", "metre", "metro", "meuse", "meved", "meves", "mewed", "mewls", "meynt", "mezes", "mezze", "mezzo", "mhorr", "miaou", "miaow", "miasm", "miaul", "micas", "miche", "micht", "micks", "micky", "micos", "micra", "micro", "middy", "midge", "midgy", "midis", "miens", "mieve", "miffs", "miffy", "mifty", "miggs", "mihas", "mihis", "miked", "mikes", "mikra", "mikva", "milds", "miler", "miles", "milfs", "milia", "milko", "milks", "milky", "mille", "mills", "milor", "milos", "milpa", "milts", "milty", "miltz", "mimed", "mimeo", "mimer", "mimes", "mimic", "mimsy", "minae", "minar", "mince", "mincy", "mined", "mines", "minge", "mings", "mingy", "minim", "minis", "minke", "minks", "minny", "minor", "minos", "mints", "minty", "minus", "mired", "mires", "mirex", "mirid", "mirin", "mirks", "mirky", "mirly", "miros", "mirvs", "mirza", "misch", "misdo", "miser", "mises", "misgo", "misos", "missa", "missy", "misty", "mitch", "miter", "mites", "mitis", "mitre", "mitts", "mixen", "mixer", "mixte", "mixup", "mizen", "mizzy", "mneme", "moans", "moats", "mobby", "mobes", "mobey", "mobie", "moble", "mocha", "mochi", "mochs", "mochy", "modal", "modem", "moder", "modes", "modge", "modii", "modus", "moers", "mofos", "moggy", "mogul", "mohel", "mohos", "mohrs", "mohua", "mohur", "moile", "moils", "moira", "moire", "moits", "mojos", "mokes", "mokis", "mokos", "molal", "molar", "molas", "molds", "moled", "molla", "molls", "molly", "molto", "molts", "molys", "momes", "momma", "mommy", "momus", "monad", "monal", "monas", "monde", "mondo", "moner", "mongo", "mongs", "monic", "monie", "monks", "monos", "monte", "monty", "moobs", "mooch", "moods", "moody", "mooed", "mooks", "moola", "mooli", "mools", "mooly", "moong", "moony", "moops", "moors", "moory", "moose", "moots", "moove", "moped", "moper", "mopes", "mopey", "moppy", "mopsy", "mopus", "morae", "moral", "moras", "morat", "moray", "morel", "mores", "moria", "morne", "morns", "moron", "morph", "morra", "morro", "morse", "morts", "mosed", "mosey", "mosks", "mosso", "mossy", "moste", "mosts", "moted", "motel", "moten", "motes", "motet", "motey", "mothy", "motif", "motis", "motor", "motte", "motto", "motts", "motty", "motus", "motza", "mouch", "moues", "mould", "mouls", "moult", "moups", "moust", "mousy", "mover", "movie", "mowas", "mower", "mowra", "moxas", "moxie", "moyas", "moyle", "moyls", "mozed", "mozes", "mozos", "mpret", "mucho", "mucic", "mucid", "mucin", "mucks", "mucky", "mucor", "mucro", "mucus", "mudge", "mudir", "mudra", "muffs", "mufti", "mugga", "muggs", "muggy", "muhly", "muids", "muils", "muirs", "muist", "mujik", "mulch", "mulct", "muled", "muley", "mulga", "mulie", "mulla", "mulls", "mulse", "mulsh", "mumms", "mummy", "mumps", "mumsy", "mumus", "munch", "munga", "munge", "mungo", "mungs", "munis", "munts", "muntu", "muons", "mural", "muras", "mured", "mures", "murex", "murid", "murks", "murky", "murls", "murly", "murra", "murre", "murri", "murrs", "murry", "murti", "murva", "musar", "musca", "muser", "muses", "muset", "musha", "mushy", "musit", "musks", "musky", "musos", "musse", "mussy", "musth", "musts", "musty", "mutch", "muted", "muter", "mutes", "mutha", "mutis", "muton", "mutts", "muxed", "muxes", "muzak", "muzzy", "mvule", "myall", "mylar", "mynah", "mynas", "myoid", "myoma", "myope", "myops", "myopy", "mysid", "mythi", "mythy", "myxos", "mzees", "naams", "naans", "nabes", "nabis", "nabks", "nabla", "nabob", "nache", "nacho", "nacre", "nadas", "nadir", "naeve", "naevi", "naffs", "nagas", "naggy", "nagor", "nahal", "naiad", "naifs", "naiks", "naira", "nairu", "naive", "naker", "nakfa", "nalas", "naled", "nalla", "namer", "namma", "namus", "nanas", "nance", "nancy", "nandu", "nanna", "nanny", "nanos", "nanua", "napas", "naped", "napes", "napoo", "nappa", "nappe", "nappy", "naras", "narco", "narcs", "nards", "nares", "naric", "naris", "narks", "narky", "narre", "nasal", "nashi", "nasty", "natal", "natch", "nates", "natis", "natty", "nauch", "naunt", "naval", "navar", "naves", "navew", "navvy", "nawab", "nazes", "nazir", "nazis", "nduja", "neafe", "neals", "neaps", "nears", "neath", "neats", "nebek", "nebel", "neddy", "neeld", "neele", "neemb", "neems", "neeps", "neese", "neeze", "negro", "negus", "neifs", "neist", "neive", "nelis", "nelly", "nemas", "nemns", "nempt", "nenes", "neons", "neper", "nepit", "neral", "nerds", "nerdy", "nerka", "nerks", "nerol", "nerts", "nertz", "nerve", "nervy", "netes", "netop", "netts", "netty", "neuks", "neume", "neums", "nevel", "neves", "nevus", "newbs", "newed", "newel", "newer", "newie", "newly", "newsy", "newts", "nexts", "nexus", "ngaio", "ngana", "ngati", "ngoma", "ngwee", "nicad", "nicer", "niche", "nicht", "nicks", "nicol", "nidal", "nided", "nides", "nidor", "nidus", "niece", "niefs", "nieve", "nifes", "niffs", "niffy", "nifty", "niger", "nighs", "nihil", "nikab", "nikah", "nikau", "nills", "nimbi", "nimbs", "nimps", "niner", "nines", "ninja", "ninny", "ninon", "nipas", "nippy", "niqab", "nirls", "nirly", "nisei", "nisse", "nisus", "niter", "nites", "nitid", "niton", "nitre", "nitro", "nitry", "nitty", "nival", "nixed", "nixer", "nixes", "nixie", "nizam", "nkosi", "noahs", "nobby", "nocks", "nodal", "noddy", "nodes", "nodus", "noels", "noggs", "nohow", "noils", "noily", "noint", "noirs", "noles", "nolls", "nolos", "nomas", "nomen", "nomes", "nomic", "nomoi", "nomos", "nonas", "nonce", "nones", "nonet", "nongs", "nonis", "nonny", "nonyl", "noobs", "nooit", "nooks", "nooky", "noons", "noops", "nopal", "noria", "noris", "norks", "norma", "norms", "nosed", "noser", "nosey", "notal", "notch", "noted", "noter", "notes", "notum", "nould", "noule", "nouls", "nouns", "nouny", "noups", "novae", "novas", "novel", "novum", "noway", "nowed", "nowls", "nowts", "nowty", "noxal", "noxes", "noyau", "noyed", "noyes", "nubby", "nubia", "nucha", "nuddy", "nuder", "nudes", "nudge", "nudie", "nudzh", "nuffs", "nugae", "nuked", "nukes", "nulla", "nulls", "numbs", "numen", "nummy", "nunny", "nurds", "nurdy", "nurls", "nurrs", "nutso", "nutsy", "nutty", "nyaff", "nyala", "nying", "nylon", "nymph", "nyssa", "oaked", "oaken", "oaker", "oakum", "oared", "oases", "oasis", "oasts", "oaten", "oater", "oaves", "obang", "obeah", "obeli", "obese", "obeys", "obias", "obied", "obiit", "obits", "objet", "oboes", "obole", "oboli", "obols", "occam", "ocean", "ocher", "oches", "ochre", "ochry", "ocker", "ocrea", "octad", "octal", "octan", "octas", "octet", "octyl", "oculi", "odahs", "odals", "odder", "oddly", "odeon", "odeum", "odism", "odist", "odium", "odors", "odour", "odyle", "odyls", "ofays", "offal", "offed", "offie", "oflag", "ofter", "ogams", "ogeed", "ogees", "oggin", "ogham", "ogive", "ogled", "ogler", "ogles", "ogmic", "ogres", "ohias", "ohing", "ohmic", "ohone", "oidia", "oiler", "oinks", "oints", "ojime", "okapi", "okays", "okehs", "okras", "oktas", "olden", "oldie", "oleic", "olein", "olent", "oleos", "oleum", "olios", "ollas", "ollav", "oller", "ollie", "ology", "olpae", "olpes", "omasa", "omber", "ombre", "ombus", "omits", "omlah", "omovs", "omrah", "oncer", "onces", "oncet", "oncus", "onely", "oners", "onery", "onion", "onium", "onkus", "onlay", "onned", "onset", "ontic", "oobit", "oohed", "oomph", "oonts", "ooped", "oorie", "ooses", "ootid", "oozed", "opahs", "opals", "opepe", "opera", "opine", "oping", "opium", "oppos", "opsin", "opted", "opter", "optic", "orach", "oracy", "orals", "orang", "orant", "orate", "orbed", "orbit", "orcas", "orcin", "ordos", "oread", "orfes", "orgia", "orgic", "orgue", "oribi", "oriel", "orixa", "orles", "orlon", "orlop", "ormer", "ornis", "orpin", "orris", "ortho", "orval", "orzos", "oscar", "oshac", "osier", "osmic", "osmol", "ossia", "ostia", "otaku", "otary", "ottar", "otter", "ottos", "oubit", "oucht", "ouens", "ouija", "oulks", "oumas", "ounce", "oundy", "oupas", "ouped", "ouphe", "ouphs", "ourie", "ousel", "ousts", "outby", "outdo", "outed", "outgo", "outre", "outro", "outta", "ouzel", "ouzos", "ovals", "ovary", "ovate", "ovels", "overs", "overt", "ovine", "ovist", "ovoid", "ovoli", "ovolo", "ovule", "owche", "owies", "owing", "owled", "owler", "owlet", "owned", "owres", "owrie", "owsen", "oxbow", "oxers", "oxeye", "oxide", "oxids", "oxies", "oxime", "oxims", "oxlip", "oxter", "oyers", "ozeki", "ozone", "ozzie", "paals", "paans", "pacas", "paced", "pacer", "pacey", "pacha", "packs", "pacos", "pacta", "pacts", "paddy", "padis", "padle", "padma", "padre", "padri", "paean", "paedo", "paeon", "pagan", "paged", "pager", "pages", "pagle", "pagod", "pagri", "paiks", "paire", "paisa", "paise", "pakka", "palas", "palay", "palea", "paled", "paler", "pales", "palet", "palis", "palki", "palla", "palls", "pally", "palmy", "palpi", "palps", "palsa", "palsy", "pampa", "panax", "pance", "panda", "pands", "pandy", "paned", "panel", "panes", "panga", "panim", "panko", "panne", "panni", "pansy", "panto", "panty", "paoli", "paolo", "papal", "papas", "papaw", "papes", "pappi", "pappy", "parae", "paras", "parch", "pardi", "pards", "pardy", "pared", "paren", "pareo", "parer", "pares", "pareu", "parev", "parge", "pargo", "paris", "parka", "parki", "parky", "parle", "parly", "parma", "parol", "parps", "parra", "parrs", "parry", "parse", "parti", "parve", "parvo", "paseo", "pases", "pasha", "pashm", "paska", "paspy", "passe", "pasta", "paste", "pasts", "pasty", "pated", "paten", "pater", "pates", "patin", "patio", "patka", "patly", "patsy", "patte", "patty", "patus", "pauas", "pauls", "pause", "pavan", "paven", "paver", "paves", "pavid", "pavin", "pavis", "pawas", "pawaw", "pawed", "pawer", "pawks", "pawky", "pawls", "pawns", "paxes", "payed", "payee", "payer", "payor", "paysd", "peach", "peage", "peags", "peaks", "peaky", "peals", "peans", "peare", "pears", "peart", "pease", "peats", "peaty", "peavy", "peaze", "pebas", "pecan", "pechs", "pecke", "pecks", "pecky", "pedal", "pedes", "pedis", "pedro", "peece", "peeks", "peels", "peens", "peeoy", "peepe", "peeps", "peers", "peery", "peeve", "peggy", "peghs", "peins", "peise", "peize", "pekan", "pekes", "pekin", "pekoe", "pelas", "pelau", "peles", "pelfs", "pells", "pelma", "pelon", "pelta", "pelts", "penal", "pence", "pends", "pendu", "pened", "penes", "pengo", "penie", "penis", "penks", "penna", "penne", "penni", "penny", "pents", "peons", "peony", "pepla", "pepos", "peppy", "pepsi", "perai", "perce", "perch", "percs", "perdu", "perdy", "perea", "peres", "peris", "perks", "perky", "perms", "perns", "perog", "perps", "perry", "perse", "perst", "perts", "perve", "pervo", "pervs", "pervy", "pesky", "pesos", "pesto", "pests", "pesty", "petal", "petar", "petit", "petre", "petri", "petti", "petto", "petty", "pewee", "pewit", "peyse", "phage", "phang", "phare", "pharm", "phase", "pheer", "phene", "pheon", "phese", "phial", "phish", "phizz", "phlox", "phoca", "phone", "phono", "phons", "phony", "photo", "phots", "phpht", "phuts", "phyla", "phyle", "piani", "piano", "pians", "pibal", "pical", "picas", "piccy", "picks", "picky", "picot", "picra", "picul", "piend", "piers", "piert", "pieta", "piets", "piezo", "piggy", "pight", "pigmy", "piing", "pikas", "pikau", "piked", "piker", "pikes", "pikey", "pikis", "pikul", "pilae", "pilaf", "pilao", "pilar", "pilau", "pilaw", "pilch", "pilea", "piled", "pilei", "piler", "piles", "pilis", "pills", "pilow", "pilum", "pilus", "pimas", "pimps", "pinas", "pinch", "pined", "pines", "piney", "pingo", "pings", "pinko", "pinks", "pinky", "pinna", "pinny", "pinon", "pinot", "pinta", "pinto", "pints", "pinup", "pions", "piony", "pioye", "pioys", "pipal", "pipas", "piped", "piper", "pipet", "pipis", "pipit", "pippy", "pipul", "pique", "pirai", "pirls", "pirns", "pirog", "pisco", "pises", "pisky", "pisos", "pissy", "piste", "pitas", "piths", "pithy", "piton", "pitot", "pitta", "piums", "pivot", "pixel", "pixes", "pixie", "pized", "pizes", "pizza", "plaas", "plack", "plage", "plaid", "plait", "plank", "plaps", "plash", "plasm", "plast", "plats", "platt", "platy", "playa", "plaza", "pleas", "pleat", "plebe", "plebs", "plena", "pleon", "plesh", "plews", "plica", "plied", "plier", "plies", "plims", "pling", "plink", "ploat", "plods", "plong", "plonk", "plook", "plops", "plotz", "plouk", "ploye", "ploys", "plues", "pluff", "plugs", "plume", "plump", "plums", "plumy", "plunk", "pluot", "plush", "pluto", "plyer", "poach", "poaka", "poake", "poboy", "pocks", "pocky", "podal", "poddy", "podex", "podge", "podgy", "podia", "poems", "poeps", "poesy", "pogey", "pogge", "pogos", "pohed", "poilu", "poind", "poise", "pokal", "poked", "poker", "pokes", "pokey", "pokie", "polar", "poled", "poler", "poley", "polio", "polis", "polje", "polka", "polks", "polls", "polly", "polos", "polts", "polyp", "polys", "pombe", "pomes", "pommy", "pomos", "pomps", "ponce", "poncy", "pones", "poney", "ponga", "pongo", "pongs", "pongy", "ponks", "ponts", "ponty", "ponzu", "pooch", "poods", "pooed", "poofs", "poofy", "poohs", "pooja", "pooka", "pooks", "poons", "poops", "poopy", "poori", "poort", "poots", "poove", "poovy", "popes", "poppa", "poppy", "popsy", "porae", "poral", "pored", "porer", "pores", "porge", "porgy", "porin", "porks", "porky", "porno", "porns", "porny", "porta", "ports", "porty", "posed", "poser", "poses", "posey", "posho", "posit", "posse", "potae", "potch", "poted", "potes", "potin", "potoo", "potsy", "potto", "potts", "potty", "pouff", "poufs", "pouke", "pouks", "poule", "poulp", "poult", "poupe", "poupt", "pouts", "pouty", "powan", "powin", "pownd", "powns", "powny", "powre", "poxed", "poxes", "poynt", "poyou", "poyse", "pozzy", "praam", "prads", "prahu", "prams", "prana", "prang", "prank", "praos", "prase", "prate", "prats", "pratt", "praty", "praus", "prawn", "predy", "preed", "preen", "prees", "preif", "prems", "premy", "prent", "preon", "preop", "preps", "presa", "prese", "prest", "preve", "prexy", "preys", "prial", "prick", "pricy", "pried", "prief", "prier", "pries", "prigs", "prill", "prima", "primi", "primo", "primp", "prims", "primy", "prink", "print", "prion", "prise", "prism", "priss", "privy", "proas", "probe", "probs", "prods", "proem", "profs", "progs", "proin", "proke", "prole", "proll", "promo", "proms", "prone", "prong", "pronk", "props", "prore", "prose", "proso", "pross", "prost", "prosy", "proto", "proul", "prowl", "prows", "proxy", "proyn", "prude", "prunt", "pruta", "pryer", "pryse", "pseud", "pshaw", "psion", "psoae", "psoai", "psoas", "psora", "psych", "psyop", "pubco", "pubes", "pubic", "pubis", "pucan", "pucer", "puces", "pucka", "pucks", "puddy", "pudge", "pudgy", "pudic", "pudor", "pudsy", "pudus", "puers", "puffa", "puffy", "puggy", "pugil", "puhas", "pujah", "pujas", "pukas", "puked", "puker", "pukes", "pukey", "pukka", "pukus", "pulao", "pulas", "puled", "puler", "pules", "pulik", "pulis", "pulka", "pulks", "pulli", "pully", "pulmo", "pulps", "pulpy", "pulse", "pulus", "pumas", "pumie", "pumps", "punas", "punce", "punch", "punga", "pungs", "punji", "punka", "punks", "punky", "punny", "punto", "punts", "punty", "pupae", "pupas", "puppy", "pupus", "purda", "pured", "puree", "pures", "purin", "puris", "purls", "purpy", "purrs", "pursy", "purty", "puses", "pushy", "pusle", "putid", "puton", "putti", "putto", "putts", "putty", "puzel", "pwned", "pyats", "pyets", "pygal", "pygmy", "pyins", "pylon", "pyned", "pynes", "pyoid", "pyots", "pyral", "pyran", "pyres", "pyrex", "pyric", "pyros", "pyxed", "pyxes", "pyxie", "pyxis", "pzazz", "qadis", "qaids", "qajaq", "qanat", "qapik", "qibla", "qophs", "qorma", "quack", "quads", "quaff", "quags", "quair", "quais", "quaky", "quale", "quant", "quare", "quark", "quart", "quash", "quasi", "quass", "quate", "quats", "quayd", "quays", "qubit", "quean", "queer", "quell", "queme", "quena", "quern", "query", "quest", "queue", "queyn", "queys", "quich", "quids", "quiff", "quill", "quilt", "quims", "quina", "quine", "quino", "quins", "quint", "quipo", "quips", "quipu", "quire", "quirk", "quirt", "quist", "quits", "quoad", "quods", "quoif", "quoin", "quoit", "quoll", "quonk", "quops", "quote", "quoth", "qursh", "quyte", "rabat", "rabic", "rabid", "rabis", "raced", "racer", "races", "rache", "racks", "racon", "radar", "radge", "radii", "radio", "radix", "radon", "raffs", "ragas", "ragde", "ragee", "rager", "ragga", "raggs", "raggy", "ragis", "ragus", "rahed", "rahui", "raias", "raiks", "raile", "rails", "raine", "raird", "raita", "raits", "rajah", "rajas", "rajes", "raked", "rakee", "raker", "rakes", "rakia", "rakis", "rakus", "rales", "rally", "ralph", "ramal", "ramee", "ramen", "ramet", "ramie", "ramin", "ramis", "rammy", "ramps", "ramus", "ranas", "rance", "ranch", "rands", "randy", "ranee", "ranga", "range", "rangi", "rangs", "rangy", "ranid", "ranis", "ranke", "rants", "raped", "raper", "rapes", "raphe", "rapid", "rappe", "rared", "raree", "rares", "rarks", "rased", "raser", "rases", "rasps", "raspy", "rasse", "rasta", "ratal", "ratan", "ratas", "ratch", "rated", "ratel", "rater", "rates", "ratha", "rathe", "raths", "ratio", "ratoo", "ratos", "ratty", "ratus", "rauns", "raupo", "raved", "ravel", "raver", "raves", "ravey", "ravin", "rawer", "rawin", "rawly", "rawns", "raxed", "raxes", "rayah", "rayas", "rayed", "rayle", "rayne", "rayon", "razed", "razee", "razer", "razes", "razoo", "react", "readd", "reais", "reaks", "realo", "reals", "reame", "reams", "reamy", "reans", "rearm", "rears", "reast", "reata", "reate", "reave", "rebar", "rebbe", "rebec", "rebid", "rebit", "rebop", "rebus", "rebut", "rebuy", "recal", "recap", "recce", "recco", "reccy", "recit", "recks", "recon", "recta", "recti", "recto", "recur", "recut", "redan", "redds", "reddy", "reded", "redes", "redia", "redid", "redip", "redly", "redon", "redos", "redox", "redry", "redub", "redux", "redye", "reech", "reede", "reedy", "reefy", "reeks", "reeky", "reens", "reest", "reeve", "refed", "refel", "refer", "reffo", "refis", "refit", "refix", "refly", "refry", "regal", "regar", "reges", "reggo", "regie", "regma", "regna", "regos", "regur", "rehab", "rehem", "reifs", "reify", "reiki", "reiks", "reink", "reird", "reist", "reive", "rejig", "rejon", "reked", "rekes", "rekey", "relax", "relay", "relet", "relic", "relie", "relit", "rello", "reman", "remap", "remen", "remet", "remex", "remit", "remix", "renal", "renay", "reney", "renga", "renig", "renin", "renne", "renos", "rente", "rents", "reoil", "reorg", "repeg", "repel", "repin", "repla", "repos", "repot", "repps", "repro", "reran", "rerig", "rerun", "resat", "resaw", "resay", "resee", "reses", "reset", "resew", "resid", "resit", "resod", "resow", "resto", "resty", "resus", "retag", "retax", "retch", "retem", "retia", "retie", "retox", "retro", "retry", "reuse", "revel", "revet", "revie", "revue", "rewan", "rewax", "rewed", "rewet", "rewin", "rewon", "rewth", "rexes", "rezes", "rheas", "rheme", "rheum", "rhies", "rhime", "rhine", "rhino", "rhody", "rhomb", "rhone", "rhumb", "rhyme", "rhyne", "rhyta", "riads", "rials", "riant", "riata", "ribas", "ribby", "ribes", "riced", "ricer", "rices", "ricey", "richt", "ricin", "ricks", "ridge", "ridgy", "ridic", "riels", "riems", "rieve", "rifer", "riffs", "rifle", "rifte", "rifts", "rifty", "riggs", "rigid", "rigol", "riled", "riles", "riley", "rille", "rills", "rimae", "rimed", "rimer", "rimes", "rimus", "rinds", "rindy", "rines", "rinks", "rioja", "riots", "riped", "ripen", "riper", "ripes", "ripps", "riser", "rishi", "risks", "risky", "risps", "risus", "rites", "ritts", "ritzy", "rivas", "rived", "rivel", "riven", "rives", "rivet", "riyal", "rizas", "roach", "roans", "roary", "roate", "robed", "robin", "roble", "robot", "roded", "rodeo", "rodes", "roger", "rogue", "roguy", "rohes", "roids", "roils", "roily", "roins", "roist", "rojak", "rojis", "roked", "roker", "rokes", "rolag", "roles", "rolfs", "romal", "romeo", "romps", "ronde", "rondo", "roneo", "rones", "ronin", "ronne", "ronte", "ronts", "roods", "roofy", "rooks", "rooky", "roomy", "roons", "roops", "roopy", "roosa", "roose", "rooty", "roped", "roper", "ropey", "roque", "roral", "rores", "roric", "rorid", "rorie", "rorts", "rorty", "rosed", "roses", "roset", "roshi", "rosin", "rosit", "rosti", "rosts", "rotal", "rotan", "rotas", "rotch", "roted", "rotes", "rotis", "rotls", "roton", "rotor", "rotos", "rotte", "rouen", "roues", "rouge", "roule", "rouls", "roums", "roups", "roupy", "roust", "routh", "routs", "roved", "roven", "rover", "roves", "rowan", "rowel", "rowen", "rower", "rowie", "rowme", "rownd", "rowth", "rowts", "royne", "royst", "rozet", "rozit", "ruana", "rubai", "rubby", "rubel", "rubes", "rubin", "ruble", "rubli", "rubus", "ruche", "rucks", "rudas", "rudds", "ruder", "rudes", "rudie", "rudis", "rueda", "ruers", "ruffe", "ruffs", "rugae", "rugal", "rugby", "ruggy", "ruing", "rukhs", "rumal", "rumba", "rumbo", "rumen", "rumes", "rumly", "rummy", "rumpo", "rumps", "rumpy", "runch", "runds", "runed", "runes", "rungs", "runic", "runny", "runts", "runty", "rupee", "rupia", "rurps", "rurus", "rusas", "ruses", "rushy", "rusks", "rusma", "russe", "rusts", "rusty", "ruths", "rutin", "rutty", "ryals", "rybat", "ryked", "rykes", "rymme", "rynds", "ryots", "ryper", "saags", "sabal", "sabed", "saber", "sabes", "sabha", "sabin", "sabir", "sable", "sabot", "sabra", "sabre", "sacra", "saddo", "sades", "sadhe", "sadhu", "sadis", "sadly", "sados", "sadza", "safed", "safer", "safes", "sagas", "sager", "sages", "saggy", "sagos", "sagum", "saheb", "sahib", "saice", "saick", "saics", "saids", "saiga", "sails", "saims", "saine", "sains", "sairs", "saist", "saith", "sajou", "sakai", "saker", "sakia", "sakis", "sakti", "salad", "salal", "salat", "salep", "sales", "salet", "salic", "salix", "salle", "sally", "salmi", "salol", "salon", "salop", "salpa", "salps", "salsa", "salse", "salto", "salts", "salty", "salue", "salut", "salve", "salvo", "saman", "samas", "samba", "sambo", "samek", "samel", "samen", "sames", "samey", "samfu", "sammy", "sampi", "samps", "sands", "sandy", "saned", "saner", "sanes", "sanga", "sangh", "sango", "sangs", "sanko", "sansa", "santo", "sants", "saola", "sapan", "sapid", "sapor", "sappy", "saran", "sards", "sared", "saree", "sarge", "sargo", "sarin", "sarks", "sarky", "sarod", "saros", "sarus", "saser", "sasin", "sasse", "sassy", "satai", "satay", "satem", "sates", "satin", "satis", "satyr", "sauba", "sauce", "sauch", "saucy", "saugh", "sauls", "sault", "sauna", "saunt", "saury", "saute", "sauts", "saver", "savey", "savin", "savoy", "savvy", "sawah", "sawer", "saxes", "sayed", "sayer", "sayid", "sayne", "sayon", "sayst", "sazes", "scads", "scaff", "scags", "scail", "scala", "scald", "scall", "scaly", "scamp", "scams", "scand", "scans", "scapa", "scape", "scapi", "scarf", "scarp", "scars", "scart", "scary", "scath", "scats", "scatt", "scaud", "scaup", "scaur", "scaws", "sceat", "scena", "scend", "scene", "schav", "schmo", "schul", "schwa", "scion", "sclim", "scody", "scogs", "scold", "scone", "scoog", "scoop", "scoot", "scopa", "scope", "scops", "score", "scots", "scoug", "scoup", "scour", "scout", "scowl", "scowp", "scows", "scrab", "scrae", "scrag", "scram", "scran", "scrap", "scrat", "scraw", "scray", "scree", "screw", "scrim", "scrip", "scrob", "scrod", "scrog", "scrow", "scrub", "scrum", "scuba", "scudi", "scudo", "scuds", "scuff", "scuft", "scugs", "sculk", "scull", "sculp", "sculs", "scums", "scups", "scurf", "scurs", "scuse", "scuta", "scute", "scuts", "scuzz", "scyes", "sdayn", "sdein", "seame", "seamy", "seans", "seare", "sears", "sease", "seaze", "sebum", "secco", "sechs", "sedan", "seder", "sedes", "sedge", "sedgy", "sedum", "seedy", "seeld", "seels", "seely", "seeps", "seepy", "sefer", "segar", "segni", "segno", "segol", "segos", "segue", "sehri", "seifs", "seils", "seirs", "seise", "seism", "seity", "seiza", "sekos", "sekts", "seles", "selfs", "sella", "selle", "selva", "semee", "semen", "semes", "semie", "semis", "senas", "senes", "sengi", "senna", "senor", "sensa", "sensi", "sente", "senti", "sents", "senvy", "senza", "sepad", "sepal", "sepia", "sepic", "sepoy", "septa", "septs", "serac", "serai", "seral", "sered", "serer", "seres", "serfs", "serge", "seric", "serin", "serks", "seron", "serow", "serra", "serre", "serrs", "serry", "serum", "servo", "sesey", "sessa", "setae", "setal", "seton", "setts", "setup", "sewan", "sewar", "sewel", "sewen", "sewer", "sewin", "sexed", "sexer", "sexes", "sexto", "sexts", "seyen", "shack", "shads", "shady", "shags", "shahs", "shako", "shakt", "shaky", "shale", "shalm", "shalt", "shaly", "shama", "shams", "shand", "shank", "shans", "shaps", "shark", "sharn", "shash", "shaul", "shawl", "shawm", "shawn", "shaws", "shaya", "shays", "shchi", "sheal", "sheas", "sheel", "sheen", "sheer", "sheik", "shelf", "shell", "shend", "shent", "sherd", "shere", "shero", "shets", "sheva", "shewn", "shews", "shiai", "shied", "shiel", "shier", "shies", "shift", "shill", "shily", "shims", "shins", "shiny", "shire", "shirk", "shirr", "shirs", "shirt", "shish", "shiso", "shist", "shite", "shits", "shiur", "shiva", "shive", "shivs", "shlep", "shlub", "shmek", "shmoe", "shoal", "shoat", "shoed", "shoer", "shoes", "shogi", "shogs", "shoji", "shojo", "shola", "shool", "shoon", "shoos", "shope", "shops", "shorl", "shote", "shots", "shott", "shove", "showd", "showy", "shoyu", "shred", "shrew", "shris", "shrow", "shrug", "shtik", "shtum", "shtup", "shuck", "shule", "shuln", "shuls", "shuns", "shunt", "shura", "shush", "shute", "shwas", "shyer", "shyly", "sials", "sibbs", "sibyl", "sices", "sicht", "sicko", "sicks", "sicky", "sidas", "sided", "sider", "sidha", "sidhe", "sidle", "sield", "siens", "sient", "sieth", "sieur", "sifts", "sigil", "sigla", "sigma", "signa", "sijos", "sikas", "siker", "sikes", "silds", "siled", "silen", "siler", "siles", "silex", "silks", "silky", "sills", "silos", "silts", "silty", "silva", "simar", "simas", "simba", "simis", "simps", "simul", "sinds", "sined", "sines", "singe", "sinhs", "sinky", "sinus", "siped", "sipes", "sippy", "sired", "siree", "siren", "sires", "sirih", "siris", "siroc", "sirra", "sirup", "sisal", "sises", "sissy", "sista", "sists", "sitar", "sited", "sithe", "sitka", "situp", "situs", "siver", "sixer", "sixes", "sixmo", "sixte", "sizar", "sized", "sizel", "sizer", "sizes", "skags", "skail", "skald", "skank", "skart", "skate", "skats", "skatt", "skaws", "skean", "skear", "skeds", "skeed", "skeef", "skeen", "skeer", "skees", "skeet", "skegg", "skegs", "skein", "skelf", "skell", "skelm", "skelp", "skene", "skens", "skeos", "skeps", "skers", "skets", "skews", "skids", "skied", "skier", "skiey", "skiff", "skimo", "skimp", "skims", "skink", "skint", "skios", "skips", "skirl", "skirr", "skite", "skits", "skive", "skivy", "sklim", "skoal", "skody", "skoff", "skogs", "skols", "skool", "skort", "skosh", "skran", "skrik", "skuas", "skugs", "skulk", "skunk", "skyed", "skyer", "skyey", "skyfs", "skyre", "skyrs", "skyte", "slabs", "slade", "slaes", "slags", "slaid", "slake", "slams", "slane", "slang", "slank", "slant", "slart", "slash", "slate", "slats", "slaty", "slaws", "slebs", "sleds", "sleer", "sleet", "slews", "sleys", "slice", "slick", "slier", "slily", "slime", "slims", "slimy", "slink", "slipe", "slipt", "slish", "slits", "slive", "sloan", "slobs", "sloes", "slogs", "sloid", "slojd", "slomo", "sloom", "sloop", "sloot", "slops", "slopy", "slorm", "slosh", "sloth", "slots", "slove", "slows", "sloyd", "slubb", "slubs", "slued", "slues", "sluff", "slugs", "sluit", "slump", "slums", "slunk", "slurb", "slurp", "slurs", "sluse", "slush", "slyer", "slyly", "slype", "smaak", "smack", "smaik", "smalm", "smalt", "smarm", "smart", "smaze", "smear", "smeek", "smees", "smeik", "smeke", "smerk", "smews", "smile", "smirk", "smirr", "smirs", "smits", "smock", "smogs", "smoko", "smoky", "smolt", "smoor", "smoot", "smore", "smorg", "smout", "smowt", "smugs", "smurs", "smush", "smuts", "snabs", "snack", "snafu", "snags", "snaky", "snaps", "snarf", "snark", "snarl", "snars", "snary", "snash", "snath", "snaws", "snead", "sneak", "sneap", "snebs", "sneck", "sneds", "sneed", "snees", "snell", "snibs", "snick", "snide", "snies", "snift", "snigs", "snipe", "snips", "snipy", "snirt", "snits", "snobs", "snods", "snoek", "snoep", "snogs", "snoke", "snood", "snook", "snool", "snoop", "snoot", "snore", "snort", "snots", "snowk", "snubs", "snuck", "snuff", "snugs", "snush", "snyes", "soaks", "soaps", "soapy", "soare", "soave", "sobas", "socas", "soces", "socko", "socks", "socle", "sodas", "soddy", "sodic", "sodom", "sofar", "sofas", "softa", "softs", "softy", "soger", "soggy", "sohur", "soils", "soily", "sojas", "sojus", "sokah", "soken", "sokes", "sokol", "solah", "solan", "solar", "solas", "solde", "soldi", "soldo", "solds", "soled", "solei", "soler", "solon", "solos", "solum", "solus", "solve", "soman", "somas", "sonar", "sonce", "sonde", "sones", "sonic", "sonly", "sonne", "sonny", "sonse", "sonsy", "sooey", "sooks", "sooky", "soole", "sools", "sooms", "soops", "soote", "sooth", "soots", "sooty", "sophs", "sophy", "sopor", "soppy", "sopra", "soral", "soras", "sorbo", "sorbs", "sorda", "sordo", "sords", "sored", "soree", "sorel", "sorer", "sorex", "sorgo", "sorns", "sorra", "sorta", "sorus", "soths", "sotol", "souce", "souct", "sough", "souks", "soums", "soups", "soupy", "sours", "souse", "souts", "sowar", "sowce", "sowff", "sowfs", "sowle", "sowls", "sowms", "sownd", "sowne", "sowps", "sowse", "sowth", "soyas", "soyle", "soyuz", "sozin", "spacy", "spado", "spaed", "spaer", "spaes", "spags", "spahi", "spail", "spait", "spake", "spald", "spale", "spall", "spalt", "spams", "spane", "spang", "spank", "spans", "spard", "spars", "spart", "spasm", "spate", "spats", "spaul", "spawl", "spawn", "spaws", "spayd", "spays", "spaza", "spazz", "speal", "spean", "speat", "speck", "specs", "spect", "speel", "speer", "speil", "speir", "speks", "speld", "spelk", "spell", "speos", "sperm", "spets", "speug", "spews", "spewy", "spial", "spica", "spicy", "spide", "spiel", "spier", "spiff", "spifs", "spike", "spiky", "spile", "spill", "spilt", "spims", "spina", "spine", "spink", "spins", "spiny", "spire", "spirt", "spiry", "spitz", "spivs", "splat", "splay", "splog", "spode", "spods", "spoof", "spook", "spool", "spoom", "spoon", "spoor", "spoot", "spore", "spork", "sposh", "spout", "sprad", "sprag", "sprat", "spray", "spred", "spree", "sprew", "sprig", "sprit", "sprod", "sprog", "sprue", "sprug", "spuds", "spued", "spuer", "spues", "spugs", "spule", "spume", "spumy", "spunk", "spurs", "spurt", "sputa", "spyal", "spyre", "squab", "squad", "squat", "squaw", "squeg", "squib", "squid", "squit", "squiz", "stabs", "stack", "stade", "stage", "stags", "stagy", "staid", "staig", "stair", "stake", "stale", "stane", "stang", "staph", "staps", "stark", "starn", "starr", "stash", "stats", "staun", "stave", "staws", "steak", "steam", "stean", "stear", "stedd", "stede", "steds", "steed", "steek", "steem", "steen", "steer", "steil", "stein", "stela", "stele", "stell", "steme", "stems", "stend", "steno", "stens", "stent", "stept", "stere", "stets", "stews", "stewy", "steys", "stich", "stied", "sties", "stilb", "stile", "stilt", "stime", "stims", "stimy", "stint", "stipa", "stipe", "stire", "stirk", "stirp", "stive", "stivy", "stoae", "stoai", "stoas", "stoat", "stobs", "stoep", "stogy", "stoit", "stoke", "stoln", "stoma", "stomp", "stond", "stong", "stonk", "stonn", "stony", "stook", "stool", "stoor", "stope", "stopt", "stoss", "stots", "stott", "stoun", "stoup", "stour", "stown", "stowp", "stows", "strad", "strae", "strag", "strak", "strep", "stria", "strig", "strim", "strop", "strow", "stroy", "strum", "strut", "stude", "stuff", "stull", "stulm", "stumm", "stums", "stung", "stunk", "stuns", "stunt", "stupa", "stupe", "sture", "sturt", "styed", "styes", "style", "styli", "stylo", "styme", "stymy", "styre", "styte", "suave", "subah", "subas", "subby", "suber", "subha", "succi", "sucky", "sucre", "sudds", "sudor", "sudsy", "suede", "suent", "suers", "suete", "suets", "suety", "sugan", "sugar", "sughs", "sugos", "suhur", "suids", "suing", "suint", "suite", "suits", "sujee", "sukhs", "sukuk", "sulci", "sulfa", "sulfo", "sulks", "sulky", "sully", "sulph", "sulus", "sumac", "sumis", "summa", "sumos", "sumph", "sumps", "sunis", "sunks", "sunna", "sunns", "sunny", "sunup", "supes", "supra", "surah", "sural", "suras", "surat", "surds", "sured", "surer", "sures", "surfs", "surfy", "surgy", "surly", "surra", "sused", "suses", "sushi", "susus", "sutor", "sutra", "sutta", "swabs", "swack", "swads", "swage", "swags", "swail", "swain", "swale", "swaly", "swami", "swamp", "swamy", "swang", "swank", "swans", "swaps", "swapt", "sward", "sware", "swarf", "swart", "swash", "swath", "swats", "swayl", "sweal", "swede", "sweed", "sweel", "sweer", "swees", "sweir", "swelt", "swerf", "sweys", "swies", "swigs", "swile", "swill", "swims", "swing", "swink", "swipe", "swire", "swirl", "swish", "swiss", "swith", "swits", "swive", "swizz", "swobs", "swole", "swoln", "swops", "swopt", "swots", "swoun", "swung", "sybbe", "sybil", "syboe", "sybow", "sycee", "syces", "sycon", "syens", "syker", "sykes", "sylis", "sylph", "sylva", "symar", "synch", "syncs", "synds", "syned", "synes", "synod", "synth", "syped", "sypes", "syphs", "syrah", "syren", "syrup", "sysop", "sythe", "syver", "taals", "taata", "tabby", "taber", "tabes", "tabid", "tabis", "tabla", "taboo", "tabun", "tabus", "tacan", "taces", "tacet", "tache", "tacho", "tachs", "tacit", "tacks", "tacky", "tacos", "tacts", "taels", "taffy", "tafia", "taggy", "tagma", "tahas", "tahrs", "taiga", "taigs", "taiko", "tains", "taint", "taira", "taish", "taits", "tajes", "takas", "taker", "takhi", "takin", "takis", "takky", "talak", "talaq", "talar", "talas", "talcs", "talcy", "talea", "taler", "tales", "talks", "talky", "talls", "tally", "talma", "talon", "talpa", "taluk", "talus", "tamal", "tamer", "tames", "tamin", "tamis", "tammy", "tamps", "tanas", "tanga", "tangi", "tango", "tangs", "tangy", "tanhs", "tanka", "tanks", "tanky", "tanna", "tansy", "tanti", "tanto", "tanty", "tapas", "taped", "tapen", "taper", "tapes", "tapet", "tapir", "tapis", "tappa", "tapus", "taras", "tardo", "tardy", "tared", "targa", "targe", "tarns", "taroc", "tarok", "taros", "tarot", "tarps", "tarre", "tarsi", "tarts", "tarty", "tasar", "tased", "taser", "tases", "tasks", "tassa", "tasse", "tasso", "tatar", "tater", "tates", "taths", "tatie", "tatou", "tatts", "tatty", "tatus", "taube", "tauld", "tauon", "taupe", "tauts", "tavah", "tavas", "taver", "tawai", "tawas", "tawed", "tawer", "tawie", "tawny", "tawse", "tawts", "taxer", "taxis", "taxol", "taxon", "taxor", "taxus", "tayra", "tazza", "tazze", "teade", "teads", "teaed", "teaks", "teals", "teams", "teary", "tease", "teats", "teaze", "techs", "techy", "tecta", "teddy", "teels", "teems", "teend", "teene", "teens", "teeny", "teers", "teffs", "teggs", "tegua", "tegus", "tehrs", "teiid", "teils", "teind", "teins", "telae", "telco", "teles", "telex", "telia", "telic", "telly", "teloi", "telos", "temed", "temes", "tempi", "tempo", "temps", "temse", "tench", "tendu", "tenes", "tenet", "tenge", "tenia", "tenne", "tenno", "tenny", "tenon", "tenor", "tense", "tenty", "tenue", "tepal", "tepas", "tepee", "tepid", "tepoy", "terai", "teras", "terce", "terek", "teres", "terfe", "terfs", "terga", "terne", "terns", "terra", "terry", "terse", "terts", "tesla", "testa", "teste", "testy", "tetes", "teths", "tetra", "tetri", "teuch", "teugh", "tewed", "tewel", "tewit", "texas", "texes", "texts", "thack", "thagi", "thaim", "thale", "thali", "thana", "thane", "thang", "thans", "thanx", "tharm", "thars", "thaws", "thawy", "thebe", "theca", "theed", "theek", "thees", "thegn", "theic", "thein", "thelf", "thema", "theme", "thens", "theow", "therm", "thesp", "theta", "thete", "thews", "thewy", "thigs", "thilk", "thill", "thine", "thins", "thiol", "thirl", "thoft", "thole", "tholi", "thoro", "thorp", "thous", "thowl", "thrae", "thraw", "thrid", "thrip", "throb", "throe", "thrum", "thuds", "thugs", "thuja", "thump", "thunk", "thurl", "thuya", "thyme", "thymi", "thymy", "tians", "tiara", "tiars", "tibia", "tical", "ticca", "ticed", "tices", "tichy", "ticks", "ticky", "tiddy", "tided", "tides", "tiffs", "tifos", "tifts", "tiger", "tiges", "tigon", "tikas", "tikes", "tikis", "tikka", "tilak", "tilde", "tiled", "tiler", "tilly", "tilth", "tilts", "timbo", "timed", "timer", "timid", "timon", "timps", "tinas", "tinct", "tinds", "tinea", "tined", "tines", "tinge", "tings", "tinks", "tinny", "tints", "tinty", "tipis", "tippy", "tipsy", "tires", "tirls", "tiros", "tirrs", "titan", "titch", "titer", "titis", "titre", "titty", "titup", "tiyin", "tiyns", "tizes", "tizzy", "toads", "toady", "toast", "toaze", "tocks", "tocky", "tocos", "todde", "toddy", "toeas", "toffs", "toffy", "tofts", "tofus", "togae", "togas", "toged", "toges", "togue", "tohos", "toile", "toils", "toing", "toise", "toits", "tokay", "toked", "toker", "tokes", "tokos", "tolan", "tolar", "tolas", "toled", "toles", "tolly", "tolts", "tolus", "tolyl", "toman", "tomes", "tomia", "tommy", "tomos", "tonal", "tondi", "tondo", "toned", "toner", "toney", "tonga", "tonic", "tonka", "tonks", "tonne", "tonus", "tooms", "toons", "toots", "toped", "topee", "topek", "toper", "topes", "tophe", "tophi", "tophs", "topic", "topis", "topoi", "topos", "toppy", "toque", "torah", "toran", "toras", "torcs", "tores", "toric", "torii", "toros", "torot", "torrs", "torse", "torsi", "torsk", "torso", "torta", "torte", "torts", "torus", "tosas", "tosed", "toses", "toshy", "tossy", "toted", "totem", "toter", "totes", "totty", "tough", "touks", "touns", "tours", "touse", "tousy", "touts", "touze", "touzy", "towed", "towie", "towny", "towse", "towsy", "towts", "towze", "towzy", "toxic", "toxin", "toyed", "toyer", "toyon", "toyos", "tozed", "tozes", "tozie", "trabs", "track", "tract", "trads", "tragi", "traik", "trail", "trait", "tramp", "trams", "trank", "tranq", "trans", "trant", "trape", "trapt", "trash", "trass", "trats", "tratt", "trave", "trawl", "trayf", "trays", "treck", "treed", "treen", "trefa", "treif", "treks", "trema", "trems", "trend", "tress", "trest", "trets", "trews", "treyf", "treys", "triac", "triad", "trice", "trick", "tride", "triff", "trigo", "trigs", "trike", "trild", "trill", "trims", "trine", "trins", "triol", "trior", "trios", "tripe", "trips", "tripy", "trist", "trite", "troad", "troak", "troat", "trock", "trode", "trods", "trogs", "trois", "troke", "troll", "tromp", "trona", "tronc", "trone", "tronk", "trons", "trooz", "trope", "troth", "trots", "trout", "trove", "trows", "troys", "truce", "truck", "trued", "truer", "trues", "trugo", "trugs", "trull", "trump", "truss", "tryer", "tryke", "tryma", "tryps", "tryst", "tsade", "tsadi", "tsars", "tsked", "tsuba", "tsubo", "tuans", "tuart", "tuath", "tubae", "tubar", "tubas", "tubby", "tubed", "tuber", "tucks", "tufas", "tuffe", "tuffs", "tufts", "tufty", "tugra", "tuile", "tuina", "tuism", "tuktu", "tules", "tulip", "tulle", "tulpa", "tulsi", "tumid", "tummy", "tumor", "tumps", "tumpy", "tunas", "tunds", "tuned", "tuner", "tunes", "tungs", "tunny", "tupek", "tupik", "tuple", "tuque", "turbo", "turds", "turfs", "turfy", "turks", "turme", "turms", "turnt", "turps", "turrs", "tushy", "tusky", "tutee", "tutor", "tutti", "tutty", "tutus", "tuxes", "tuyer", "twaes", "twain", "twals", "twang", "twank", "twats", "tways", "tweak", "tweed", "tweel", "tween", "tweep", "tweer", "tweet", "twerk", "twerp", "twier", "twill", "twilt", "twine", "twink", "twiny", "twire", "twirl", "twirp", "twite", "twits", "twixt", "twoer", "twyer", "tyees", "tyers", "tying", "tyiyn", "tykes", "tyler", "tymps", "tynde", "tyned", "tynes", "typal", "typed", "types", "typey", "typic", "typos", "typps", "typto", "tyran", "tyred", "tyres", "tyros", "tythe", "tzars", "udals", "udder", "udons", "ugali", "ugged", "uhlan", "uhuru", "ukase", "ulama", "ulans", "ulcer", "ulema", "ulmin", "ulnad", "ulnae", "ulnar", "ulnas", "ulpan", "ultra", "ulvas", "ulyie", "ulzie", "umami", "umbel", "umber", "umble", "umbos", "umbra", "umbre", "umiac", "umiak", "umiaq", "ummah", "ummas", "ummed", "umped", "umphs", "umpie", "umpty", "umrah", "umras", "unais", "unapt", "unarm", "unary", "unaus", "unbag", "unban", "unbar", "unbed", "unbid", "unbox", "uncap", "unces", "uncia", "uncos", "uncoy", "uncus", "uncut", "undam", "undee", "undid", "undos", "undue", "undug", "uneth", "unfed", "unfit", "unfix", "ungag", "unget", "ungod", "ungot", "ungum", "unhat", "unhip", "unica", "unify", "union", "unite", "unjam", "unked", "unket", "unkid", "unlaw", "unlay", "unled", "unlet", "unlid", "unlit", "unman", "unmet", "unmew", "unmix", "unpay", "unpeg", "unpen", "unpin", "unred", "unrid", "unrig", "unrip", "unsaw", "unsay", "unsee", "unset", "unsew", "unsex", "unsod", "untax", "untin", "unwed", "unwet", "unwit", "unwon", "unzip", "upbow", "upbye", "updos", "updry", "upend", "upjet", "uplay", "upled", "uplit", "upped", "upran", "uprun", "upsee", "upsey", "uptak", "upter", "uptie", "uraei", "urali", "uraos", "urare", "urari", "urase", "urate", "urban", "urbex", "urbia", "urdee", "ureal", "ureas", "uredo", "ureic", "urena", "urent", "urger", "urial", "urite", "urman", "urnal", "urned", "urped", "ursae", "ursid", "urson", "urubu", "urvas", "usage", "users", "usher", "usnea", "usque", "usual", "usure", "usurp", "uteri", "utile", "uveal", "uveas", "uvula", "vacua", "vaded", "vades", "vagal", "vague", "vagus", "vails", "vaire", "vairs", "vairy", "vakas", "vakil", "vales", "valet", "valid", "valis", "valse", "valve", "vamps", "vampy", "vanda", "vaned", "vanes", "vangs", "vants", "vaped", "vaper", "vapes", "vapid", "varan", "varas", "vardy", "varec", "vares", "varia", "varix", "varna", "varus", "varve", "vasal", "vases", "vasts", "vasty", "vatic", "vatus", "vauch", "vaute", "vauts", "vawte", "vaxes", "veale", "veals", "vealy", "veena", "veeps", "veers", "veery", "vegan", "vegas", "veges", "vegie", "vegos", "vehme", "veily", "veins", "veiny", "velar", "velds", "veldt", "veles", "vells", "velum", "venae", "venal", "vends", "vendu", "veney", "venge", "venin", "vents", "venue", "venus", "verbs", "verge", "verra", "verry", "verse", "verso", "verst", "verts", "vertu", "verve", "vespa", "vesta", "vests", "vetch", "vexer", "vexes", "vexil", "vezir", "vials", "viand", "vibes", "vibex", "vibey", "vicar", "viced", "vices", "vichy", "video", "viers", "views", "viewy", "vifda", "viffs", "vigas", "vigia", "vigil", "vilde", "viler", "villa", "villi", "vills", "vimen", "vinal", "vinas", "vinca", "vined", "viner", "vinew", "vinic", "vinos", "vints", "vinyl", "viola", "viold", "viols", "viral", "vired", "vireo", "vires", "virga", "virge", "virid", "virls", "virtu", "virus", "visas", "vised", "vises", "visie", "visne", "vison", "visor", "vista", "visto", "vitae", "vital", "vitas", "vitex", "vitro", "vitta", "vivas", "vivat", "vivda", "viver", "vives", "vivid", "vixen", "vizir", "vizor", "vleis", "vlies", "vlogs", "voars", "vocab", "vocal", "voces", "voddy", "vodka", "vodou", "vodun", "voema", "vogie", "vogue", "voids", "voila", "voile", "voips", "volae", "volar", "voled", "voles", "volet", "volks", "volta", "volte", "volti", "volts", "volva", "volve", "vomer", "voted", "voter", "votes", "vouch", "vouge", "voulu", "vowel", "vower", "voxel", "vozhd", "vraic", "vrils", "vroom", "vrous", "vrouw", "vrows", "vuggs", "vuggy", "vughs", "vughy", "vulgo", "vulns", "vulva", "vutty", "vying", "waacs", "wacke", "wacko", "wacks", "wacky", "wadds", "waddy", "waded", "wader", "wades", "wadge", "wadis", "wadts", "waffs", "wafts", "wager", "wagga", "wagyu", "wahoo", "waide", "waifs", "waift", "wails", "wains", "wairs", "waist", "waite", "waive", "wakas", "waked", "waken", "waker", "wakfs", "waldo", "walds", "waled", "waler", "wales", "walie", "walis", "walla", "wally", "walty", "waltz", "wamed", "wames", "wamus", "wands", "waned", "wanes", "waney", "wangs", "wanks", "wanky", "wanle", "wanly", "wanna", "wanty", "wanze", "waqfs", "warbs", "warby", "wards", "wared", "warez", "warks", "warps", "warre", "warst", "warts", "warty", "wases", "washy", "wasms", "wasps", "waspy", "wasts", "watap", "watts", "wauff", "waugh", "wauks", "waulk", "wauls", "waurs", "wavey", "wawas", "wawes", "wawls", "waxed", "waxen", "waxer", "waxes", "wayed", "wazir", "wazoo", "weald", "weals", "weamb", "weans", "webby", "weber", "wecht", "wedel", "wedgy", "weedy", "weeke", "weels", "weems", "weens", "weeny", "weepy", "weest", "weete", "weets", "wefte", "wefts", "weids", "weils", "weird", "weirs", "weise", "weize", "wekas", "welch", "welds", "welke", "welks", "welkt", "welly", "welsh", "welts", "wembs", "wends", "wenge", "wenny", "wents", "weros", "wersh", "wests", "wetas", "wetly", "wexed", "wexes", "whack", "whale", "whamo", "whams", "whang", "whaps", "whare", "wharf", "whata", "whats", "whaup", "whaur", "wheal", "whear", "wheen", "wheep", "wheft", "whelk", "whelm", "whens", "whets", "whews", "wheys", "whids", "whiff", "whift", "whigs", "whilk", "whims", "whine", "whins", "whiny", "whios", "whipt", "whirr", "whirs", "whish", "whisk", "whiss", "whist", "whits", "whity", "whizz", "whomp", "whoof", "whoop", "whoot", "whops", "whorl", "whort", "whoso", "whows", "whump", "whups", "whyda", "wicca", "wicks", "wicky", "widdy", "widen", "wides", "wiels", "wifed", "wifes", "wifey", "wifie", "wifty", "wigan", "wigga", "wiggy", "wight", "wikis", "wilco", "wilds", "wiled", "wiles", "wilga", "wilis", "wilja", "willy", "wilts", "wimps", "wimpy", "wince", "winch", "windy", "wined", "winey", "winge", "wingy", "winna", "winns", "winos", "winze", "wiper", "wired", "wirer", "wires", "wirra", "wised", "wises", "wisha", "wisht", "wisps", "wispy", "wists", "witan", "witch", "wited", "wites", "withe", "withs", "withy", "witty", "wived", "wiver", "wizen", "wizes", "woads", "woald", "wocks", "wodge", "woful", "wojus", "woker", "wokka", "wolds", "wolfs", "wolly", "wolve", "womby", "womyn", "wonga", "wongi", "wonks", "wonky", "wonts", "woody", "wooed", "wooer", "woofs", "woofy", "woold", "wools", "wooly", "woons", "woops", "woopy", "woose", "woosh", "wootz", "woozy", "wordy", "wormy", "worts", "wowed", "wowee", "woxen", "wrack", "wrang", "wrapt", "wrast", "wrate", "wrawl", "wreak", "wreck", "wrens", "wrick", "wried", "wrier", "wries", "wrist", "writs", "wroke", "wroot", "wroth", "wryer", "wryly", "wuddy", "wudus", "wulls", "wurst", "wuses", "wushu", "wussy", "wuxia", "wyled", "wyles", "wynds", "wynns", "wyted", "wytes", "xebec", "xenia", "xenic", "xenon", "xeric", "xerox", "xerus", "xoana", "xrays", "xylan", "xylem", "xylic", "xylol", "xylyl", "xysti", "xysts", "yaars", "yabas", "yabba", "yabby", "yacca", "yacht", "yacka", "yacks", "yaffs", "yager", "yages", "yagis", "yahoo", "yaird", "yakka", "yakow", "yales", "yamen", "yampy", "yamun", "yangs", "yanks", "yapok", "yapon", "yapps", "yappy", "yarak", "yarco", "yards", "yarer", "yarfa", "yarks", "yarns", "yarrs", "yarta", "yarto", "yates", "yauds", "yauld", "yaups", "yawed", "yawey", "yawls", "yawns", "yawny", "yawps", "ybore", "yclad", "ycled", "ycond", "ydrad", "ydred", "yeads", "yeahs", "yealm", "yeans", "yeard", "yearn", "yeast", "yecch", "yechs", "yechy", "yedes", "yeeds", "yeesh", "yeggs", "yelks", "yells", "yelms", "yelps", "yelts", "yenta", "yente", "yerba", "yerds", "yerks", "yeses", "yesks", "yests", "yesty", "yetis", "yetts", "yeuks", "yeuky", "yeven", "yeves", "yewen", "yexed", "yexes", "yfere", "yiked", "yikes", "yills", "yince", "yipes", "yippy", "yirds", "yirks", "yirrs", "yirth", "yites", "yitie", "ylems", "ylike", "ylkes", "ymolt", "ympes", "yobbo", "yobby", "yocks", "yodel", "yodhs", "yodle", "yogas", "yogee", "yoghs", "yogic", "yogin", "yogis", "yoick", "yojan", "yokel", "yoker", "yokul", "yolks", "yolky", "yomim", "yomps", "yonic", "yonis", "yonks", "yoofs", "yoops", "yores", "yorks", "yorps", "youks", "yourn", "yourt", "youse", "yowed", "yowes", "yowie", "yowls", "yowza", "yrapt", "yrent", "yrivd", "yrneh", "ysame", "ytost", "yuans", "yucas", "yucca", "yucch", "yucko", "yucks", "yucky", "yufts", "yugas", "yuked", "yukes", "yukky", "yukos", "yulan", "yules", "yummo", "yummy", "yumps", "yupon", "yuppy", "yurta", "yurts", "yuzus", "zabra", "zacks", "zaida", "zaidy", "zaire", "zakat", "zaman", "zambo", "zamia", "zanja", "zante", "zanza", "zanze", "zappy", "zarfs", "zaris", "zatis", "zaxes", "zayin", "zazen", "zeals", "zebec", "zebra", "zebus", "zedas", "zeins", "zendo", "zerda", "zerks", "zeros", "zests", "zesty", "zetas", "zexes", "zezes", "zhomo", "zibet", "ziffs", "zigan", "zilas", "zilch", "zilla", "zills", "zimbi", "zimbs", "zinco", "zincs", "zincy", "zineb", "zines", "zings", "zingy", "zinke", "zinky", "zippo", "zippy", "ziram", "zitis", "zizel", "zizit", "zlote", "zloty", "zoaea", "zobos", "zobus", "zocco", "zoeae", "zoeal", "zoeas", "zoism", "zoist", "zombi", "zonae", "zonal", "zonda", "zoned", "zoner", "zones", "zonks", "zooea", "zooey", "zooid", "zooks", "zooms", "zoons", "zooty", "zoppa", "zoppo", "zoril", "zoris", "zorro", "zouks", "zowee", "zowie", "zulus", "zupan", "zupas", "zuppa", "zurfs", "zuzim", "zygal", "zygon", "zymes", "zymic"],
    Ra = "present",
    Ha = "correct",
    Na = "absent";
  var Pa = {
    unknown: 0,
    absent: 1,
    present: 2,
    correct: 3
  };

  function Da(e, a) {
    var s = {};
    return e.forEach((function(e, t) {
      if (a[t])
        for (var n = 0; n < e.length; n++) {
          var o = e[n],
            r = a[t][n],
            i = s[o] || "unknown";
          Pa[r] > Pa[i] && (s[o] = r)
        }
    })), s
  }

  function $a(e) {
    var a = ["th", "st", "nd", "rd"],
      s = e % 100;
    return e + (a[(s - 20) % 10] || a[s] || a[0])
  }
  var Ga = new Date(2022, 1, 26, 0, 0, 0, 0);

  function Ba(e, a) {
    var s = new Date(e),
      t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
    return Math.round(t / 864e5)
  }

  function Va(e) {
    var a, s = Fa(e);
    return a = s % Ma.length, Ma[a]
  }

  function Fa(e) {
    return Ba(Ga, e)
  }
  var Wa = "abcdefghijklmnopqrstuvwxyz";
  var Ya = "nyt-wordle-statistics",
    Ua = "fail",
    Ja = {
      currentStreak: 0,
      maxStreak: 0,
      guesses: o({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
      }, Ua, 0),
      winPercentage: 0,
      gamesPlayed: 0,
      gamesWon: 0,
      averageGuesses: 0
    };

  function Xa() {
    var e = window.localStorage.getItem(Ya) || JSON.stringify(Ja);
    return JSON.parse(e)
  }

  function Za(e) {
    var a = e.isWin,
      s = e.isStreak,
      t = e.numGuesses,
      n = Xa();
    a ? (n.guesses[t] += 1, s ? n.currentStreak += 1 : n.currentStreak = 1) : (n.currentStreak = 0, n.guesses.fail += 1), n.maxStreak = Math.max(n.currentStreak, n.maxStreak), n.gamesPlayed += 1, n.gamesWon += a ? 1 : 0, n.winPercentage = Math.round(n.gamesWon / n.gamesPlayed * 100), n.averageGuesses = Math.round(Object.entries(n.guesses).reduce((function(e, a) {
        var s = y(a, 2),
          t = s[0],
          n = s[1];
        return t !== Ua ? e += t * n : e
      }), 0) / n.gamesWon),
      function(e) {
        window.localStorage.setItem(Ya, JSON.stringify(e))
      }(n)
  }
  var Ka, Qa = "nyt-wordle-refresh",
    es = window.localStorage;

  function as() {
    return Ka || (Ka = setInterval((function() {
      es.getItem(Qa) && (es.removeItem(Qa), window.location.href.match(/.*\.nytimes\.com/g) ? window.location.reload(!0) : window.location.replace("https://www.nytimes.com/games/wordle"))
    }), 432e5))
  }
  var ss = "nyt-wordle-statistics",
    ts = window.localStorage;

  function ns(e, a) {
    if (!e.gamesPlayed) return !1;
    var s = function() {
      var e = {
        gamesPlayed: 0
      };
      try {
        var a = JSON.parse(ts.getItem(ss));
        if (a && a.gamesPlayed) return a
      } catch (a) {
        return e
      }
      return e
    }();
    return !(s.gamesPlayed && !a) || e.gamesPlayed > s.gamesPlayed
  }

  function os() {
    if (ts) {
      try {
        var e = new Proxy(new URLSearchParams(window.location.search), {
          get: function(e, a) {
            return e.get(a)
          }
        });
        if (e.data) ! function(e) {
          if (!e.statistics) throw new Error("User local data does not contain statistics. Aborting transfer.");
          if (ns(e.statistics, e.force)) {
            ts.setItem(ss, JSON.stringify(e.statistics));
            var a = e.darkTheme;
            window.themeManager.setDarkTheme(a);
            var s = !!e.colorBlindTheme;
            window.themeManager.setColorBlindTheme(s)
          }
        }(JSON.parse(e.data))
      } catch (e) {}
      window.history.replaceState({}, document.title, new URL(location.pathname, location.href).href)
    }
  }
  var rs = document.createElement("template");
  rs.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: calc(100% - var(--header-height));\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: nowrap;\n    padding: 0 16px;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-family: \'nyt-karnakcondensed\';\n    font-weight: 700;\n    font-size: 37px;\n    line-height: 100%;\n    letter-spacing: 0.01em;\n    text-align: center;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n  .menu-left {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    align-items: center;\n    width: 70px;\n    justify-content: flex-start;\n  }\n  .menu-right {\n    display: flex;\n    width: 70px;\n    justify-content: flex-end;\n  }\n  #nav-button {\n    padding-top: 2px;\n  }\n\n  @media (min-width: 415px) {\n    header {\n      padding: 0px 16px;\n    }\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n  <header>\n  <div class="menu-left">\n    <button hidden id="nav-button" class="icon" tabindex="-1">\n      <nav-icon></nav-icon>\n    </button>\n    <button id="help-button" class="icon" aria-label="Help" tabindex="-1">\n      <game-icon icon="help"></game-icon>\n    </button>\n  </div>\n  <div class="title">\n    Bible Wordle\n  </div>\n  <div class="menu-right">\n    <button id="statistics-button" class="icon" aria-label="Statistics" tabindex="-1">\n      <game-icon icon="statistics"></game-icon>\n    </button>\n    <button id="settings-button" class="icon" aria-label="Settings" tabindex="-1">\n      <game-icon icon="settings"></game-icon>\n    </button>\n  </div>\n</header>\n    <div id="game">\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-nav-modal></game-nav-modal>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
  var is = document.createElement("template");
  is.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
  var ls = "IN_PROGRESS",
    ds = "WIN",
    cs = "FAIL",
    us = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Phew"],
    ms = function(e) {
      r(t, e);
      var a = h(t);

      function t() {
        var e;
        s(this, t), o(m(e = a.call(this)), "tileIndex", 0), o(m(e), "rowIndex", 0), o(m(e), "solution", void 0), o(m(e), "boardState", void 0), o(m(e), "evaluations", void 0), o(m(e), "canInput", !0), o(m(e), "gameStatus", ls), o(m(e), "letterEvaluations", {}), o(m(e), "$board", void 0), o(m(e), "$keyboard", void 0), o(m(e), "$game", void 0), o(m(e), "today", void 0), o(m(e), "lastPlayedTs", void 0), o(m(e), "lastCompletedTs", void 0), o(m(e), "hardMode", void 0), o(m(e), "dayOffset", void 0), e.attachShadow({
          mode: "open"
        }), e.today = new Date, e.refreshTimer = as();
        var n = za();
        return e.lastPlayedTs = n.lastPlayedTs, e.lastCompletedTs = n.lastCompletedTs, !e.lastPlayedTs || Ba(new Date(e.lastPlayedTs), e.today) >= 1 ? (e.boardState = new Array(6).fill(""), e.evaluations = new Array(6).fill(null), e.solution = Va(e.today), e.dayOffset = Fa(e.today), e.lastCompletedTs = n.lastCompletedTs, e.hardMode = n.hardMode, e.restoringFromLocalStorage = !1, ja({
          rowIndex: e.rowIndex,
          boardState: e.boardState,
          evaluations: e.evaluations,
          solution: e.solution,
          gameStatus: e.gameStatus
        })) : (e.boardState = n.boardState, e.evaluations = n.evaluations, e.rowIndex = n.rowIndex, e.solution = n.solution, e.dayOffset = Fa(e.today), e.letterEvaluations = Da(e.boardState, e.evaluations), e.gameStatus = n.gameStatus, e.lastCompletedTs = n.lastCompletedTs, e.hardMode = n.hardMode, e.gameStatus !== ls && (e.canInput = !1), e.restoringFromLocalStorage = !0), e
      }
      return n(t, [{
        key: "evaluateRow",
        value: function() {
          if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
            var e, a = this.$board.querySelectorAll("game-row")[this.rowIndex],
              s = this.boardState[this.rowIndex];
            if (e = s, !Oa.includes(e) && !Ma.includes(e)) return a.setAttribute("invalid", ""), void this.addToast("Not in word list");
            if (this.hardMode) {
              var t = function(e, a, s) {
                  if (!e || !a || !s) return {
                    validGuess: !0
                  };
                  for (var t = 0; t < s.length; t++)
                    if (s[t] === Ha && e[t] !== a[t]) return {
                      validGuess: !1,
                      errorMessage: "".concat($a(t + 1), " letter must be ").concat(a[t].toUpperCase())
                    };
                  for (var n = {}, o = 0; o < s.length; o++)[Ha, Ra].includes(s[o]) && (n[a[o]] ? n[a[o]] += 1 : n[a[o]] = 1);
                  var r = e.split("").reduce((function(e, a) {
                    return e[a] ? e[a] += 1 : e[a] = 1, e
                  }), {});
                  for (var i in n)
                    if ((r[i] || 0) < n[i]) return {
                      validGuess: !1,
                      errorMessage: "Guess must contain ".concat(i.toUpperCase())
                    };
                  return {
                    validGuess: !0
                  }
                }(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]),
                n = t.validGuess,
                o = t.errorMessage;
              if (!n) return a.setAttribute("invalid", ""), void this.addToast(o || "Not valid in hard mode")
            }
            var r = function(e, a) {
              for (var s = Array(a.length).fill(Na), t = Array(a.length).fill(!0), n = Array(a.length).fill(!0), o = 0; o < e.length; o++) e[o] === a[o] && n[o] && (s[o] = Ha, t[o] = !1, n[o] = !1);
              for (var r = 0; r < e.length; r++) {
                var i = e[r];
                if (t[r])
                  for (var l = 0; l < a.length; l++) {
                    var d = a[l];
                    if (n[l] && i === d) {
                      s[r] = Ra, n[l] = !1;
                      break
                    }
                  }
              }
              return s
            }(s, this.solution);
            this.evaluations[this.rowIndex] = r, this.letterEvaluations = Da(this.boardState, this.evaluations), a.evaluation = this.evaluations[this.rowIndex], this.rowIndex += 1;
            var i = this.rowIndex >= 6,
              l = r.every((function(e) {
                return "correct" === e
              }));
            if (i || l) Za({
              isWin: l,
              isStreak: !!this.lastCompletedTs && 1 === Ba(new Date(this.lastCompletedTs), new Date),
              numGuesses: this.rowIndex
            }), ja({
              lastCompletedTs: Date.now()
            }), this.gameStatus = l ? ds : cs, es.setItem(Qa, !0);
            this.tileIndex = 0, this.canInput = !1, ja({
              rowIndex: this.rowIndex,
              boardState: this.boardState,
              evaluations: this.evaluations,
              solution: this.solution,
              gameStatus: this.gameStatus,
              lastPlayedTs: Date.now()
            })
          }
        }
      }, {
        key: "addLetter",
        value: function(e) {
          this.gameStatus === ls && (this.canInput && (this.tileIndex >= 5 || (this.boardState[this.rowIndex] += e, this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]), this.tileIndex += 1)))
        }
      }, {
        key: "removeLetter",
        value: function() {
          if (this.gameStatus === ls && this.canInput && !(this.tileIndex <= 0)) {
            this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
            var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
            this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"), e.removeAttribute("invalid"), this.tileIndex -= 1
          }
        }
      }, {
        key: "submitGuess",
        value: function() {
          if (this.gameStatus === ls && this.canInput) {
            if (5 !== this.tileIndex) return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Not enough letters");
            this.evaluateRow()
          }
        }
      }, {
        key: "addToast",
        value: function(e, a) {
          var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            t = document.createElement("game-toast");
          t.setAttribute("text", e), a && t.setAttribute("duration", a), s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
        }
      }, {
        key: "sizeBoard",
        value: function() {
          var e = this.shadowRoot.querySelector("#board-container"),
            a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
            s = 6 * Math.floor(a / 5);
          this.$board.style.width = "".concat(a, "px"), this.$board.style.height = "".concat(s, "px")
        }
      }, {
        key: "showStatsModal",
        value: function() {
          var e = this.$game.querySelector("game-modal"),
            a = document.createElement("game-stats");
          this.gameStatus === ds && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex), a.gameApp = this, e.appendChild(a), e.setAttribute("open", "")
        }
      }, {
        key: "showNavModal",
        value: function() {
          var e = this.$game.querySelector("game-nav-modal"),
            a = document.createElement("game-nav");
          a.gameApp = this, e.appendChild(a), e.setAttribute("open", "")
        }
      }, {
        key: "showHelpModal",
        value: function() {
          var e = this.$game.querySelector("game-modal");
          e.appendChild(document.createElement("game-help")), e.setAttribute("open", "")
        }
      }, {
        key: "connectedCallback",
        value: function() {
          var e, a, s, t, n, o, r, i, l, d = this;
          this.shadowRoot.appendChild(rs.content.cloneNode(!0)), this.$game = this.shadowRoot.querySelector("#game"), this.$board = this.shadowRoot.querySelector("#board"), this.$keyboard = this.shadowRoot.querySelector("game-keyboard"), this.sizeBoard(), this.lastPlayedTs || setTimeout((function() {
            return d.showHelpModal()
          }), 100);
          for (var c = 0; c < 6; c++) {
            var u = document.createElement("game-row");
            u.setAttribute("letters", this.boardState[c]), u.setAttribute("length", 5), this.evaluations[c] && (u.evaluation = this.evaluations[c]), this.$board.appendChild(u)
          }
          this.$game.addEventListener("game-key-press", (function(e) {
              var a = e.detail.key;
              "←" === a || "Backspace" === a ? d.removeLetter() : "↵" === a || "Enter" === a ? d.submitGuess() : Wa.includes(a.toLowerCase()) && d.addLetter(a.toLowerCase())
            })), this.$game.addEventListener("game-last-tile-revealed-in-row", (function(e) {
              d.$keyboard.letterEvaluations = d.letterEvaluations, d.rowIndex < 6 && (d.canInput = !0);
              var a = d.$board.querySelectorAll("game-row")[d.rowIndex - 1];
              (e.path || e.composedPath && e.composedPath()).includes(a) && ([ds, cs].includes(d.gameStatus) && (d.restoringFromLocalStorage ? d.showStatsModal() : (d.gameStatus === ds && (a.setAttribute("win", ""), d.addToast(us[d.rowIndex - 1], 2e3)), d.gameStatus === cs && d.addToast(d.solution.toUpperCase(), 1 / 0), setTimeout((function() {
                d.showStatsModal()
              }), 2500))), d.restoringFromLocalStorage = !1)
            })), this.shadowRoot.addEventListener("game-setting-change", (function(e) {
              var a = e.detail,
                s = a.name,
                t = a.checked,
                n = a.disabled;
              switch (s) {
                case "hard-mode":
                  return void(n ? d.addToast("Hard mode can only be enabled at the start of a round", 1500, !0) : (d.hardMode = t, ja({
                    hardMode: t
                  })))
              }
            })), this.shadowRoot.getElementById("settings-button").addEventListener("click", (function(e) {
              var a = d.$game.querySelector("game-page"),
                s = document.createTextNode("Settings");
              a.appendChild(s);
              var t = document.createElement("game-settings");
              t.setAttribute("slot", "content"), t.gameApp = d, a.appendChild(t), a.setAttribute("open", "")
            })), this.shadowRoot.getElementById("help-button").addEventListener("click", (function(e) {
              var a = d.$game.querySelector("game-page"),
                s = document.createTextNode("How to play");
              a.appendChild(s);
              var t = document.createElement("game-help");
              t.setAttribute("page", ""), t.setAttribute("slot", "content"), a.appendChild(t), a.setAttribute("open", "")
            })), this.shadowRoot.getElementById("statistics-button").addEventListener("click", (function(e) {
              d.showStatsModal()
            })), window.addEventListener("resize", this.sizeBoard.bind(this)), os(), i = {
              container: "GTM-P528B3",
              prdstring: "&gtm_auth=tfAzqo1rYDLgYhmTnSjPqw&gtm_preview=env-130",
              devstring: "&gtm_auth=WiJyA7zv1sohHCWSZ3mF1Q&gtm_preview=env-8",
              stgstring: "&gtm_auth=FOuAsPhG-4kWeLk6Kq5AzQ&gtm_preview=env-7",
              dataLayer: "",
              modifier: "",
              env: document.location.host.indexOf(".dev.") > -1 ? "dev" : document.location.host.indexOf(".stg.") > -1 || document.location.host.indexOf(".stage.") > -1 ? "stg" : "prod"
            }, l = {
              event: "pageDataReady",
              application: {
                name: "games-crosswords",
                environment: i.env
              }
            }, i.modifier = i.prdstring, "dev" === i.env ? i.modifier = i.devstring : "stg" === i.env && (i.modifier = i.stgstring),
            function(e, a, s, t, n, o) {
              e[t] = e[t] || [], e[t].push({
                "gtm.start": (new Date).getTime(),
                event: "gtm.js"
              });
              var r = a.getElementsByTagName(s)[0],
                i = a.createElement(s);
	      //i.src = "https://www.googletagmanager.com/gtm.js?id=" + n + o + "&gtm_cookies_win=x"
              i.async = !0, i.src = "", r.parentNode.insertBefore(i, r)
            }(window, document, "script", "dataLayer", i.container, i.modifier), e = l, a = i.env, t = a && "prod" === a ? "a.nytimes.com" : "a.dev.nytimes.com", n = encodeURIComponent(document.referrer), o = encodeURIComponent((s = document.querySelector("link[rel=canonical]")) ? s.href : document.location.href)
        }
      }, {
        key: "disconnectedCallback",
        value: function() {
          clearInterval(this.refreshTimer)
        }
      }, {
        key: "debugTools",
        value: function() {
          var e = this;
          this.shadowRoot.getElementById("debug-tools").appendChild(is.content.cloneNode(!0)), this.shadowRoot.getElementById("toast").addEventListener("click", (function(a) {
            e.addToast("hello world")
          })), this.shadowRoot.getElementById("modal").addEventListener("click", (function(a) {
            var s = e.$game.querySelector("game-modal");
            s.textContent = "hello plz", s.setAttribute("open", "")
          })), this.shadowRoot.getElementById("reveal").addEventListener("click", (function() {
            e.evaluateRow()
          })), this.shadowRoot.getElementById("shake").addEventListener("click", (function() {
            e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "")
          })), this.shadowRoot.getElementById("bounce").addEventListener("click", (function() {
            var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
            "" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "")
          }))
        }
      }]), t
    }(u(HTMLElement));
  customElements.define("game-app", ms);
  var ps = document.createElement("template");
  ps.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
  var hs = function(e) {
    r(t, e);
    var a = h(t);

    function t() {
      var e;
      return s(this, t), (e = a.call(this)).attachShadow({
        mode: "open"
      }), e
    }
    return n(t, [{
      key: "connectedCallback",
      value: function() {
        var e = this;
        this.shadowRoot.appendChild(ps.content.cloneNode(!0)), this.addEventListener("click", (function(a) {
          e.shadowRoot.querySelector(".content").classList.add("closing")
        })), this.shadowRoot.addEventListener("animationend", (function(a) {
          "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"), e.removeChild(e.firstChild), e.removeAttribute("open"))
        }))
      }
    }]), t
  }(u(HTMLElement));
  customElements.define("game-modal", hs);
  var ys = document.createElement("template");
  ys.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
  var gs = document.createElement("template");
  gs.innerHTML = "\n  <button>key</button>\n";
  var bs = document.createElement("template");
  bs.innerHTML = '\n  <div class="spacer"></div>\n';
  var fs = [
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
      ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"],
      ["↵", "z", "x", "c", "v", "b", "n", "m", "←"]
    ],
    ks = function(e) {
      r(t, e);
      var a = h(t);

      function t() {
        var e;
        return s(this, t), o(m(e = a.call(this)), "_letterEvaluations", {}), e.attachShadow({
          mode: "open"
        }), e
      }
      return n(t, [{
        key: "letterEvaluations",
        set: function(e) {
          this._letterEvaluations = e, this._render()
        }
      }, {
        key: "dispatchKeyPressEvent",
        value: function(e) {
          this.dispatchEvent(new CustomEvent("game-key-press", {
            bubbles: !0,
            composed: !0,
            detail: {
              key: e
            }
          }))
        }
      }, {
        key: "connectedCallback",
        value: function() {
          var e = this;
          this.shadowRoot.appendChild(ys.content.cloneNode(!0)), this.$keyboard = this.shadowRoot.getElementById("keyboard"), this.$keyboard.addEventListener("click", (function(a) {
            var s = a.target.closest("button");
            s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key)
          })), window.addEventListener("keydown", (function(a) {
            if (!0 !== a.repeat) {
              var s = a.key,
                t = a.metaKey,
                n = a.ctrlKey;
              t || n || (Wa.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) && e.dispatchKeyPressEvent(s)
            }
          })), this.$keyboard.addEventListener("transitionend", (function(a) {
            var s = a.target.closest("button");
            s && e.$keyboard.contains(s) && s.classList.remove("fade")
          })), fs.forEach((function(a) {
            var s = document.createElement("div");
            s.classList.add("row"), a.forEach((function(e) {
              var a;
              if (e >= "a" && e <= "z" || "←" === e || "↵" === e) {
                if ((a = gs.content.cloneNode(!0).firstElementChild).dataset.key = e, a.textContent = e, "←" === e) {
                  var t = document.createElement("game-icon");
                  t.setAttribute("icon", "backspace"), a.textContent = "", a.appendChild(t), a.classList.add("one-and-a-half")
                }
                "↵" == e && (a.textContent = "enter", a.classList.add("one-and-a-half"))
              } else(a = bs.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
              s.appendChild(a)
            })), e.$keyboard.appendChild(s)
          })), this._render()
        }
      }, {
        key: "_render",
        value: function() {
          for (var e in this._letterEvaluations) {
            var a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
            a.dataset.state = this._letterEvaluations[e], a.classList.add("fade")
          }
        }
      }]), t
    }(u(HTMLElement));
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
  function vs(e, a, s, t) {
    return new(s || (s = Promise))((function(n, o) {
      function r(e) {
        try {
          l(t.next(e))
        } catch (e) {
          o(e)
        }
      }

      function i(e) {
        try {
          l(t.throw(e))
        } catch (e) {
          o(e)
        }
      }

      function l(e) {
        var a;
        e.done ? n(e.value) : (a = e.value, a instanceof s ? a : new s((function(e) {
          e(a)
        }))).then(r, i)
      }
      l((t = t.apply(e, a || [])).next())
    }))
  }

  function ws(e, a) {
    var s, t, n, o, r = {
      label: 0,
      sent: function() {
        if (1 & n[0]) throw n[1];
        return n[1]
      },
      trys: [],
      ops: []
    };
    return o = {
      next: i(0),
      throw: i(1),
      return: i(2)
    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
      return this
    }), o;

    function i(o) {
      return function(i) {
        return function(o) {
          if (s) throw new TypeError("Generator is already executing.");
          for (; r;) try {
            if (s = 1, t && (n = 2 & o[0] ? t.return : o[0] ? t.throw || ((n = t.return) && n.call(t), 0) : t.next) && !(n = n.call(t, o[1])).done) return n;
            switch (t = 0, n && (o = [2 & o[0], n.value]), o[0]) {
              case 0:
              case 1:
                n = o;
                break;
              case 4:
                return r.label++, {
                  value: o[1],
                  done: !1
                };
              case 5:
                r.label++, t = o[1], o = [0];
                continue;
              case 7:
                o = r.ops.pop(), r.trys.pop();
                continue;
              default:
                if (!((n = (n = r.trys).length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                  r = 0;
                  continue
                }
                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                  r.label = o[1];
                  break
                }
                if (6 === o[0] && r.label < n[1]) {
                  r.label = n[1], n = o;
                  break
                }
                if (n && r.label < n[2]) {
                  r.label = n[2], r.ops.push(o);
                  break
                }
                n[2] && r.ops.pop(), r.trys.pop();
                continue
            }
            o = a.call(e, r)
          } catch (e) {
            o = [6, e], t = 0
          } finally {
            s = n = 0
          }
          if (5 & o[0]) throw o[1];
          return {
            value: o[0] ? o[1] : void 0,
            done: !0
          }
        }([o, i])
      }
    }
  }
  customElements.define("game-keyboard", ks),
    function() {
      (console.warn || console.log).apply(console, arguments)
    }.bind("[clipboard-polyfill]");
  var xs, zs, js, Ss, Cs = "undefined" == typeof navigator ? void 0 : navigator,
    _s = null == Cs ? void 0 : Cs.clipboard;
  null === (xs = null == _s ? void 0 : _s.read) || void 0 === xs || xs.bind(_s), null === (zs = null == _s ? void 0 : _s.readText) || void 0 === zs || zs.bind(_s);
  var Es = (null === (js = null == _s ? void 0 : _s.write) || void 0 === js || js.bind(_s), null === (Ss = null == _s ? void 0 : _s.writeText) || void 0 === Ss ? void 0 : Ss.bind(_s)),
    qs = "undefined" == typeof window ? void 0 : window,
    Ls = (null == qs || qs.ClipboardItem, qs);
  var Ts = function() {
    this.success = !1
  };

  function As(e, a, s) {
    for (var t in e.success = !0, a) {
      var n = a[t],
        o = s.clipboardData;
      o.setData(t, n), "text/plain" === t && o.getData(t) !== n && (e.success = !1)
    }
    s.preventDefault()
  }

  function Is(e) {
    var a = new Ts,
      s = As.bind(this, a, e);
    document.addEventListener("copy", s);
    try {
      document.execCommand("copy")
    } finally {
      document.removeEventListener("copy", s)
    }
    return a.success
  }

  function Ms(e, a) {
    Os(e);
    var s = Is(a);
    return Rs(), s
  }

  function Os(e) {
    var a = document.getSelection();
    if (a) {
      var s = document.createRange();
      s.selectNodeContents(e), a.removeAllRanges(), a.addRange(s)
    }
  }

  function Rs() {
    var e = document.getSelection();
    e && e.removeAllRanges()
  }

  function Hs(e) {
    return vs(this, void 0, void 0, (function() {
      var a;
      return ws(this, (function(s) {
        if (a = "text/plain" in e, "undefined" == typeof ClipboardEvent && void 0 !== Ls.clipboardData && void 0 !== Ls.clipboardData.setData) {
          if (!a) throw new Error("No `text/plain` value was specified.");
          if (t = e["text/plain"], Ls.clipboardData.setData("Text", t)) return [2, !0];
          throw new Error("Copying failed, possibly because the user rejected it.")
        }
        var t;
        return Is(e) || navigator.userAgent.indexOf("Edge") > -1 || Ms(document.body, e) || function(e) {
          var a = document.createElement("div");
          a.setAttribute("style", "-webkit-user-select: text !important"), a.textContent = "temporary element", document.body.appendChild(a);
          var s = Ms(a, e);
          return document.body.removeChild(a), s
        }(e) || function(e) {
          var a = document.createElement("div");
          a.setAttribute("style", "-webkit-user-select: text !important");
          var s = a;
          a.attachShadow && (s = a.attachShadow({
            mode: "open"
          }));
          var t = document.createElement("span");
          t.innerText = e, s.appendChild(t), document.body.appendChild(a), Os(t);
          var n = document.execCommand("copy");
          return Rs(), document.body.removeChild(a), n
        }(e["text/plain"]) ? [2, !0] : [2, !1]
      }))
    }))
  }

  function Ns(e, a, s) {
    try {
      Sa() && !(navigator.userAgent.toLowerCase().indexOf("firefox") > -1) && void 0 !== navigator.share && navigator.canShare && navigator.canShare(e) ? navigator.share(e) : function(e) {
        return vs(this, void 0, void 0, (function() {
          return ws(this, (function(a) {
            if (Es) return [2, Es(e)];
            if (!Hs(function(e) {
                var a = {};
                return a["text/plain"] = e, a
              }(e))) throw new Error("writeText() failed");
            return [2]
          }))
        }))
      }(e.text).then(a, s)
    } catch (e) {
      s()
    }
  }
  var Ps = document.createElement("template");
  Ps.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistics</h1>\n    <div id="statistics"></div>\n    <h1>Guess Distribution</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
  var Ds = document.createElement("template");
  Ds.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
  var $s = document.createElement("template");
  $s.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
  var Gs = document.createElement("template");
  Gs.innerHTML = '\n  <div class="countdown">\n    <h1>Next WORDLE</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Share <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
  var Bs = {
      currentStreak: "Current Streak",
      maxStreak: "Max Streak",
      winPercentage: "Win %",
      gamesPlayed: "Played",
      gamesWon: "Won",
      averageGuesses: "Av. Guesses"
    },
    Vs = function(e) {
      r(t, e);
      var a = h(t);

      function t() {
        var e;
        return s(this, t), o(m(e = a.call(this)), "stats", {}), o(m(e), "gameApp", void 0), e.attachShadow({
          mode: "open"
        }), e.stats = Xa(), e
      }
      return n(t, [{
        key: "connectedCallback",
        value: function() {
          var e = this;
          this.shadowRoot.appendChild(Ps.content.cloneNode(!0));
          var a = this.shadowRoot.getElementById("statistics"),
            s = this.shadowRoot.getElementById("guess-distribution"),
            t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
          if (Object.values(this.stats.guesses).every((function(e) {
              return 0 === e
            }))) {
            var n = document.createElement("div");
            n.classList.add("no-data"), n.innerText = "No Data", s.appendChild(n)
          } else
            for (var o = 1; o < Object.keys(this.stats.guesses).length; o++) {
              var r = o,
                i = this.stats.guesses[o],
                l = $s.content.cloneNode(!0),
                d = Math.max(7, Math.round(i / t * 100));
              l.querySelector(".guess").textContent = r;
              var c = l.querySelector(".graph-bar");
              if (c.style.width = "".concat(d, "%"), "number" == typeof i) {
                l.querySelector(".num-guesses").textContent = i, i > 0 && c.classList.add("align-right");
                var u = parseInt(this.getAttribute("highlight-guess"), 10);
                u && o === u && c.classList.add("highlight")
              }
              s.appendChild(l)
            }
          if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function(s) {
              var t = Bs[s],
                n = e.stats[s],
                o = Ds.content.cloneNode(!0);
              o.querySelector(".label").textContent = t, o.querySelector(".statistic").textContent = n, a.appendChild(o)
            })), this.gameApp.gameStatus !== ls) {
            var m = this.shadowRoot.querySelector(".footer"),
              p = Gs.content.cloneNode(!0);
            m.appendChild(p), this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function(a) {
              a.preventDefault(), a.stopPropagation();
              Ns(function(e) {
                var a = e.evaluations,
                  s = e.dayOffset,
                  t = e.rowIndex,
                  n = e.isHardMode,
                  o = e.isWin,
                  r = JSON.parse(window.localStorage.getItem(j)),
                  i = JSON.parse(window.localStorage.getItem(S)),
                  l = "Bible Wordle ".concat(s);
                l += " ".concat(o ? t : "X", "/").concat(6), n && (l += "*");
                var d = "";
                return a.forEach((function(e) {
                  e && (e.forEach((function(e) {
                    if (e) {
                      var a = "";
                      switch (e) {
                        case Ha:
                          a = function(e) {
                            return e ? "🟧" : "🟩"
                          }(i);
                          break;
                        case Ra:
                          a = function(e) {
                            return e ? "🟦" : "🟨"
                          }(i);
                          break;
                        case Na:
                          a = function(e) {
                            return e ? "⬛" : "⬜"
                          }(r)
                      }
                      d += a
                    }
                  })), d += "\n")
                })), {
                  text: "".concat(l, "\n\n").concat(d.trimEnd())
                }
              }({
                evaluations: e.gameApp.evaluations,
                dayOffset: e.gameApp.dayOffset,
                rowIndex: e.gameApp.rowIndex,
                isHardMode: e.gameApp.hardMode,
                isWin: e.gameApp.gameStatus === ds
              }), (function() {
                e.gameApp.addToast("Copied results to clipboard", 2e3, !0)
              }), (function() {
                e.gameApp.addToast("Share failed", 2e3, !0)
              }))
            }))
          }
        }
      }]), t
    }(u(HTMLElement));
  customElements.define("game-stats", Vs);
  var Js = document.createElement("template");
  Js.innerHTML = "\n  <style>\n    .overlay-nav {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      z-index: ".concat(3e3, ';\n      background-color: transparent;\n      justify-content: left;\n      align-items: unset;\n    }\n\n    :host([open]) .overlay-nav {\n      display: flex;\n    }\n\n    .content-nav {\n      position: relative;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      overflow-y: auto;\n      animation: SlideRight 200ms;\n      max-width: var(--game-max-width);\n      box-sizing: border-box;\n      width: 100%;\n      border-radius: 0px;\n      box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.15);\n      max-height: calc(100% - var(--header-height) - 1px);\n      margin-top: calc(var(--header-height) + 1px);\n      padding: 0px;\n    }\n\n    @media (min-width: 415px) {\n      .content-nav {\n        width: 375px;\n      }\n    }\n\n    .content-nav.closing-nav {\n      animation: SlideLeft 200ms;\n    }\n\n    .close-icon-nav {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideRight {\n      0% {\n        transform: translateX(-100px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateX(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideLeft {\n      0% {\n        transform: translateX(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateX(-200px);\n      }\n    }\n  </style>\n  <div class="overlay-nav">\n    <div class="content-nav">\n      <slot></slot>\n      <div class="close-icon-nav">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
  var Xs = function(e) {
    r(t, e);
    var a = h(t);

    function t() {
      var e;
      return s(this, t), (e = a.call(this)).attachShadow({
        mode: "open"
      }), e
    }
    return n(t, [{
      key: "connectedCallback",
      value: function() {
        var e = this;
        this.shadowRoot.appendChild(Js.content.cloneNode(!0)), this.addEventListener("click", (function(a) {
          e.shadowRoot.querySelector(".content-nav").classList.add("closing-nav")
        })), this.shadowRoot.addEventListener("animationend", (function(a) {
          "SlideLeft" === a.animationName && (e.shadowRoot.querySelector(".content-nav").classList.remove("closing-nav"), e.removeChild(e.firstChild), e.removeAttribute("open"))
        }))
      }
    }]), t
  }(u(HTMLElement));
  customElements.define("game-nav-modal", Xs);
  var Zs = document.createElement("template");
  Zs.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
  var Ks = function(e) {
    r(t, e);
    var a = h(t);

    function t() {
      var e;
      return s(this, t), (e = a.call(this)).attachShadow({
        mode: "open"
      }), e
    }
    return n(t, [{
      key: "connectedCallback",
      value: function() {
        var e = this;
        this.shadowRoot.appendChild(Zs.content.cloneNode(!0)), this.shadowRoot.querySelector(".container").addEventListener("click", (function(a) {
          a.stopPropagation(), e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""), e.dispatchEvent(new CustomEvent("game-switch-change", {
            bubbles: !0,
            composed: !0,
            detail: {
              name: e.getAttribute("name"),
              checked: e.hasAttribute("checked"),
              disabled: e.hasAttribute("disabled")
            }
          }))
        }))
      }
    }], [{
      key: "observedAttributes",
      get: function() {
        return ["checked"]
      }
    }]), t
  }(u(HTMLElement));
  customElements.define("game-switch", Ks);
  var Qs = document.createElement("template");
  Qs.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Guess the <strong>WORD</strong> in six tries.</p>\n      <p>The words are from the <strong>Bible</strong> and can include some proper nouns.</p>\n      <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>\n      <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>\n      <div class="examples">\n        <p><strong>Examples</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="e" evaluation="correct" reveal></game-tile>\n            <game-tile letter="n"></game-tile>\n            <game-tile letter="j"></game-tile>\n            <game-tile letter="o"></game-tile>\n            <game-tile letter="y"></game-tile>\n          </div>\n          <p>The letter <strong>E</strong> is in the word and in the correct spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="j"></game-tile>\n            <game-tile letter="e"></game-tile>\n            <game-tile letter="s" evaluation="present" reveal></game-tile>\n            <game-tile letter="u"></game-tile>\n            <game-tile letter="s"></game-tile>\n          </div>\n          <p>The letter <strong>S</strong> is in the word but in the wrong spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="d"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="i"></game-tile>\n            <game-tile letter="l" evaluation="absent" reveal></game-tile>\n            <game-tile letter="y"></game-tile>\n          </div>\n          <p>The letter <strong>L</strong> is not in the word in any spot.</p>\n        </div>\n      </div>\n      <p><strong>A new WORD will be available each day!<strong></p>\n    <p>For the original Wordle game, visit the <a href="https://www.nytimes.com/games/wordle/index.html">New York Times Games</a>.</p>\n    </div>\n  </section>\n';
  var et = function(e) {
    r(t, e);
    var a = h(t);

    function t() {
      var e;
      return s(this, t), (e = a.call(this)).attachShadow({
        mode: "open"
      }), e
    }
    return n(t, [{
      key: "connectedCallback",
      value: function() {
        this.shadowRoot.appendChild(Qs.content.cloneNode(!0))
      }
    }]), t
  }(u(HTMLElement));
  customElements.define("game-help", et);
  var at = document.createElement("template");
  at.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
  var st = function(e) {
    r(t, e);
    var a = h(t);

    function t() {
      var e;
      return s(this, t), (e = a.call(this)).attachShadow({
        mode: "open"
      }), e
    }
    return n(t, [{
      key: "connectedCallback",
      value: function() {
        var e = this;
        this.shadowRoot.appendChild(at.content.cloneNode(!0)), this.shadowRoot.querySelector("game-icon").addEventListener("click", (function(a) {
          e.shadowRoot.querySelector(".overlay").classList.add("closing")
        })), this.shadowRoot.addEventListener("animationend", (function(a) {
          "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"), Array.from(e.childNodes).forEach((function(a) {
            e.removeChild(a)
          })), e.removeAttribute("open"))
        }))
      }
    }]), t
  }(u(HTMLElement));
  customElements.define("game-page", st);
  var tt = document.createElement("template");
  tt.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-1) />\n  </svg>\n';
  var nt = {
      help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
      settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
      backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
      close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
      share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
      statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
    },
    ot = function(e) {
      r(t, e);
      var a = h(t);

      function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({
          mode: "open"
        }), e
      }
      return n(t, [{
        key: "connectedCallback",
        value: function() {
          this.shadowRoot.appendChild(tt.content.cloneNode(!0));
          var e = this.getAttribute("icon");
          this.shadowRoot.querySelector("path").setAttribute("d", nt[e]), "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"), "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
        }
      }]), t
    }(u(HTMLElement));
  customElements.define("game-icon", ot);
  var rt = document.createElement("template");
  var lt = document.createElement("template");
  lt.innerHTML = '\n<svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <rect x="0.172974" width="20" height="3" rx="1.5" fill=var(--color-tone-1) />\n    <rect x="0.172974" y="7" width="20" height="3" rx="1.5" fill=var(--color-tone-1) />\n    <rect x="0.172974" y="14" width="20" height="3" rx="1.5" fill=var(--color-tone-1) />\n</svg>\n';
  var dt = function(e) {
    r(t, e);
    var a = h(t);

    function t() {
      var e;
      return s(this, t), (e = a.call(this)).attachShadow({
        mode: "open"
      }), e
    }
    return n(t, [{
      key: "connectedCallback",
      value: function() {
        this.shadowRoot.appendChild(lt.content.cloneNode(!0))
      }
    }]), t
  }(u(HTMLElement));
  customElements.define("nav-icon", dt);
  var ct = document.createElement("template");
  ct.innerHTML = '\n  <div id="timer"></div>\n';
  var ut = 6e4,
    mt = 36e5,
    pt = function(e) {
      r(t, e);
      var a = h(t);

      function t() {
        var e;
        s(this, t), o(m(e = a.call(this)), "targetEpochMS", void 0), o(m(e), "intervalId", void 0), o(m(e), "$timer", void 0), e.attachShadow({
          mode: "open"
        });
        var n = new Date;
        return n.setDate(n.getDate() + 1), n.setHours(0, 0, 0, 0), e.targetEpochMS = n.getTime(), e
      }
      return n(t, [{
        key: "padDigit",
        value: function(e) {
          return e.toString().padStart(2, "0")
        }
      }, {
        key: "updateTimer",
        value: function() {
          var e, a = (new Date).getTime(),
            s = Math.floor(this.targetEpochMS - a);
          if (s <= 0) e = "00:00:00";
          else {
            var t = Math.floor(s % 864e5 / mt),
              n = Math.floor(s % mt / ut),
              o = Math.floor(s % ut / 1e3);
            e = "".concat(this.padDigit(t), ":").concat(this.padDigit(n), ":").concat(this.padDigit(o))
          }
          this.$timer.textContent = e
        }
      }, {
        key: "connectedCallback",
        value: function() {
          var e = this;
          this.shadowRoot.appendChild(ct.content.cloneNode(!0)), this.$timer = this.shadowRoot.querySelector("#timer"), this.intervalId = setInterval((function() {
            e.updateTimer()
          }), 200)
        }
      }, {
        key: "disconnectedCallback",
        value: function() {
          clearInterval(this.intervalId)
        }
      }]), t
    }(u(HTMLElement));
  return customElements.define("countdown-timer", pt), e.CountdownTimer = pt, e.GameApp = ms, e.GameHelp = et, e.GameIcon = ot, e.GameKeyboard = ks, e.GameModal = hs, e.GamePage = st, e.GameRow = x, e.GameSettings = Ta, e.GameStats = Vs, e.GameSwitch = Ks, e.GameThemeManager = C, e.GameTile = v, e.GameToast = Ia, e.NavIcon = dt, e.NavModal = Xs, Object.defineProperty(e, "__esModule", {
    value: !0
  }), e
}({});
