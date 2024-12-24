(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) f(u);
  new MutationObserver((u) => {
    for (const y of u)
      if (y.type === "childList")
        for (const v of y.addedNodes)
          v.tagName === "LINK" && v.rel === "modulepreload" && f(v);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(u) {
    const y = {};
    return (
      u.integrity && (y.integrity = u.integrity),
      u.referrerPolicy && (y.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (y.credentials = "include")
        : u.crossOrigin === "anonymous"
        ? (y.credentials = "omit")
        : (y.credentials = "same-origin"),
      y
    );
  }
  function f(u) {
    if (u.ep) return;
    u.ep = !0;
    const y = c(u);
    fetch(u.href, y);
  }
})();
function Wu(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default")
    ? s.default
    : s;
}
var tc = { exports: {} },
  Nr = {},
  ac = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vu;
function hp() {
  if (vu) return J;
  vu = 1;
  var s = Symbol.for("react.element"),
    i = Symbol.for("react.portal"),
    c = Symbol.for("react.fragment"),
    f = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    y = Symbol.for("react.provider"),
    v = Symbol.for("react.context"),
    b = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    z = Symbol.for("react.memo"),
    R = Symbol.for("react.lazy"),
    q = Symbol.iterator;
  function S(g) {
    return g === null || typeof g != "object"
      ? null
      : ((g = (q && g[q]) || g["@@iterator"]),
        typeof g == "function" ? g : null);
  }
  var F = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    D = {};
  function O(g, C, Z) {
    (this.props = g),
      (this.context = C),
      (this.refs = D),
      (this.updater = Z || F);
  }
  (O.prototype.isReactComponent = {}),
    (O.prototype.setState = function (g, C) {
      if (typeof g != "object" && typeof g != "function" && g != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, g, C, "setState");
    }),
    (O.prototype.forceUpdate = function (g) {
      this.updater.enqueueForceUpdate(this, g, "forceUpdate");
    });
  function I() {}
  I.prototype = O.prototype;
  function U(g, C, Z) {
    (this.props = g),
      (this.context = C),
      (this.refs = D),
      (this.updater = Z || F);
  }
  var G = (U.prototype = new I());
  (G.constructor = U), T(G, O.prototype), (G.isPureReactComponent = !0);
  var te = Array.isArray,
    le = Object.prototype.hasOwnProperty,
    me = { current: null },
    he = { key: !0, ref: !0, __self: !0, __source: !0 };
  function je(g, C, Z) {
    var ee,
      re = {},
      ne = null,
      ie = null;
    if (C != null)
      for (ee in (C.ref !== void 0 && (ie = C.ref),
      C.key !== void 0 && (ne = "" + C.key),
      C))
        le.call(C, ee) && !he.hasOwnProperty(ee) && (re[ee] = C[ee]);
    var se = arguments.length - 2;
    if (se === 1) re.children = Z;
    else if (1 < se) {
      for (var pe = Array(se), Ye = 0; Ye < se; Ye++)
        pe[Ye] = arguments[Ye + 2];
      re.children = pe;
    }
    if (g && g.defaultProps)
      for (ee in ((se = g.defaultProps), se))
        re[ee] === void 0 && (re[ee] = se[ee]);
    return {
      $$typeof: s,
      type: g,
      key: ne,
      ref: ie,
      props: re,
      _owner: me.current,
    };
  }
  function we(g, C) {
    return {
      $$typeof: s,
      type: g.type,
      key: C,
      ref: g.ref,
      props: g.props,
      _owner: g._owner,
    };
  }
  function Pe(g) {
    return typeof g == "object" && g !== null && g.$$typeof === s;
  }
  function yt(g) {
    var C = { "=": "=0", ":": "=2" };
    return (
      "$" +
      g.replace(/[=:]/g, function (Z) {
        return C[Z];
      })
    );
  }
  var ht = /\/+/g;
  function Ke(g, C) {
    return typeof g == "object" && g !== null && g.key != null
      ? yt("" + g.key)
      : C.toString(36);
  }
  function st(g, C, Z, ee, re) {
    var ne = typeof g;
    (ne === "undefined" || ne === "boolean") && (g = null);
    var ie = !1;
    if (g === null) ie = !0;
    else
      switch (ne) {
        case "string":
        case "number":
          ie = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case s:
            case i:
              ie = !0;
          }
      }
    if (ie)
      return (
        (ie = g),
        (re = re(ie)),
        (g = ee === "" ? "." + Ke(ie, 0) : ee),
        te(re)
          ? ((Z = ""),
            g != null && (Z = g.replace(ht, "$&/") + "/"),
            st(re, C, Z, "", function (Ye) {
              return Ye;
            }))
          : re != null &&
            (Pe(re) &&
              (re = we(
                re,
                Z +
                  (!re.key || (ie && ie.key === re.key)
                    ? ""
                    : ("" + re.key).replace(ht, "$&/") + "/") +
                  g
              )),
            C.push(re)),
        1
      );
    if (((ie = 0), (ee = ee === "" ? "." : ee + ":"), te(g)))
      for (var se = 0; se < g.length; se++) {
        ne = g[se];
        var pe = ee + Ke(ne, se);
        ie += st(ne, C, Z, pe, re);
      }
    else if (((pe = S(g)), typeof pe == "function"))
      for (g = pe.call(g), se = 0; !(ne = g.next()).done; )
        (ne = ne.value), (pe = ee + Ke(ne, se++)), (ie += st(ne, C, Z, pe, re));
    else if (ne === "object")
      throw (
        ((C = String(g)),
        Error(
          "Objects are not valid as a React child (found: " +
            (C === "[object Object]"
              ? "object with keys {" + Object.keys(g).join(", ") + "}"
              : C) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return ie;
  }
  function gt(g, C, Z) {
    if (g == null) return g;
    var ee = [],
      re = 0;
    return (
      st(g, ee, "", "", function (ne) {
        return C.call(Z, ne, re++);
      }),
      ee
    );
  }
  function Ue(g) {
    if (g._status === -1) {
      var C = g._result;
      (C = C()),
        C.then(
          function (Z) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 1), (g._result = Z));
          },
          function (Z) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 2), (g._result = Z));
          }
        ),
        g._status === -1 && ((g._status = 0), (g._result = C));
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var ve = { current: null },
    M = { transition: null },
    Y = {
      ReactCurrentDispatcher: ve,
      ReactCurrentBatchConfig: M,
      ReactCurrentOwner: me,
    };
  function B() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (J.Children = {
      map: gt,
      forEach: function (g, C, Z) {
        gt(
          g,
          function () {
            C.apply(this, arguments);
          },
          Z
        );
      },
      count: function (g) {
        var C = 0;
        return (
          gt(g, function () {
            C++;
          }),
          C
        );
      },
      toArray: function (g) {
        return (
          gt(g, function (C) {
            return C;
          }) || []
        );
      },
      only: function (g) {
        if (!Pe(g))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return g;
      },
    }),
    (J.Component = O),
    (J.Fragment = c),
    (J.Profiler = u),
    (J.PureComponent = U),
    (J.StrictMode = f),
    (J.Suspense = m),
    (J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y),
    (J.act = B),
    (J.cloneElement = function (g, C, Z) {
      if (g == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            g +
            "."
        );
      var ee = T({}, g.props),
        re = g.key,
        ne = g.ref,
        ie = g._owner;
      if (C != null) {
        if (
          (C.ref !== void 0 && ((ne = C.ref), (ie = me.current)),
          C.key !== void 0 && (re = "" + C.key),
          g.type && g.type.defaultProps)
        )
          var se = g.type.defaultProps;
        for (pe in C)
          le.call(C, pe) &&
            !he.hasOwnProperty(pe) &&
            (ee[pe] = C[pe] === void 0 && se !== void 0 ? se[pe] : C[pe]);
      }
      var pe = arguments.length - 2;
      if (pe === 1) ee.children = Z;
      else if (1 < pe) {
        se = Array(pe);
        for (var Ye = 0; Ye < pe; Ye++) se[Ye] = arguments[Ye + 2];
        ee.children = se;
      }
      return {
        $$typeof: s,
        type: g.type,
        key: re,
        ref: ne,
        props: ee,
        _owner: ie,
      };
    }),
    (J.createContext = function (g) {
      return (
        (g = {
          $$typeof: v,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (g.Provider = { $$typeof: y, _context: g }),
        (g.Consumer = g)
      );
    }),
    (J.createElement = je),
    (J.createFactory = function (g) {
      var C = je.bind(null, g);
      return (C.type = g), C;
    }),
    (J.createRef = function () {
      return { current: null };
    }),
    (J.forwardRef = function (g) {
      return { $$typeof: b, render: g };
    }),
    (J.isValidElement = Pe),
    (J.lazy = function (g) {
      return { $$typeof: R, _payload: { _status: -1, _result: g }, _init: Ue };
    }),
    (J.memo = function (g, C) {
      return { $$typeof: z, type: g, compare: C === void 0 ? null : C };
    }),
    (J.startTransition = function (g) {
      var C = M.transition;
      M.transition = {};
      try {
        g();
      } finally {
        M.transition = C;
      }
    }),
    (J.unstable_act = B),
    (J.useCallback = function (g, C) {
      return ve.current.useCallback(g, C);
    }),
    (J.useContext = function (g) {
      return ve.current.useContext(g);
    }),
    (J.useDebugValue = function () {}),
    (J.useDeferredValue = function (g) {
      return ve.current.useDeferredValue(g);
    }),
    (J.useEffect = function (g, C) {
      return ve.current.useEffect(g, C);
    }),
    (J.useId = function () {
      return ve.current.useId();
    }),
    (J.useImperativeHandle = function (g, C, Z) {
      return ve.current.useImperativeHandle(g, C, Z);
    }),
    (J.useInsertionEffect = function (g, C) {
      return ve.current.useInsertionEffect(g, C);
    }),
    (J.useLayoutEffect = function (g, C) {
      return ve.current.useLayoutEffect(g, C);
    }),
    (J.useMemo = function (g, C) {
      return ve.current.useMemo(g, C);
    }),
    (J.useReducer = function (g, C, Z) {
      return ve.current.useReducer(g, C, Z);
    }),
    (J.useRef = function (g) {
      return ve.current.useRef(g);
    }),
    (J.useState = function (g) {
      return ve.current.useState(g);
    }),
    (J.useSyncExternalStore = function (g, C, Z) {
      return ve.current.useSyncExternalStore(g, C, Z);
    }),
    (J.useTransition = function () {
      return ve.current.useTransition();
    }),
    (J.version = "18.3.1"),
    J
  );
}
var zu;
function mc() {
  return zu || ((zu = 1), (ac.exports = hp())), ac.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bu;
function gp() {
  if (bu) return Nr;
  bu = 1;
  var s = mc(),
    i = Symbol.for("react.element"),
    c = Symbol.for("react.fragment"),
    f = Object.prototype.hasOwnProperty,
    u = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(b, m, z) {
    var R,
      q = {},
      S = null,
      F = null;
    z !== void 0 && (S = "" + z),
      m.key !== void 0 && (S = "" + m.key),
      m.ref !== void 0 && (F = m.ref);
    for (R in m) f.call(m, R) && !y.hasOwnProperty(R) && (q[R] = m[R]);
    if (b && b.defaultProps)
      for (R in ((m = b.defaultProps), m)) q[R] === void 0 && (q[R] = m[R]);
    return {
      $$typeof: i,
      type: b,
      key: S,
      ref: F,
      props: q,
      _owner: u.current,
    };
  }
  return (Nr.Fragment = c), (Nr.jsx = v), (Nr.jsxs = v), Nr;
}
var xu;
function _p() {
  return xu || ((xu = 1), (tc.exports = gp())), tc.exports;
}
var j = _p(),
  x = mc();
const ha = Wu(x);
var Xn = {},
  rc = { exports: {} },
  Qe = {},
  nc = { exports: {} },
  oc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ju;
function kp() {
  return (
    ju ||
      ((ju = 1),
      (function (s) {
        function i(M, Y) {
          var B = M.length;
          M.push(Y);
          e: for (; 0 < B; ) {
            var g = (B - 1) >>> 1,
              C = M[g];
            if (0 < u(C, Y)) (M[g] = Y), (M[B] = C), (B = g);
            else break e;
          }
        }
        function c(M) {
          return M.length === 0 ? null : M[0];
        }
        function f(M) {
          if (M.length === 0) return null;
          var Y = M[0],
            B = M.pop();
          if (B !== Y) {
            M[0] = B;
            e: for (var g = 0, C = M.length, Z = C >>> 1; g < Z; ) {
              var ee = 2 * (g + 1) - 1,
                re = M[ee],
                ne = ee + 1,
                ie = M[ne];
              if (0 > u(re, B))
                ne < C && 0 > u(ie, re)
                  ? ((M[g] = ie), (M[ne] = B), (g = ne))
                  : ((M[g] = re), (M[ee] = B), (g = ee));
              else if (ne < C && 0 > u(ie, B))
                (M[g] = ie), (M[ne] = B), (g = ne);
              else break e;
            }
          }
          return Y;
        }
        function u(M, Y) {
          var B = M.sortIndex - Y.sortIndex;
          return B !== 0 ? B : M.id - Y.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var y = performance;
          s.unstable_now = function () {
            return y.now();
          };
        } else {
          var v = Date,
            b = v.now();
          s.unstable_now = function () {
            return v.now() - b;
          };
        }
        var m = [],
          z = [],
          R = 1,
          q = null,
          S = 3,
          F = !1,
          T = !1,
          D = !1,
          O = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          U = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function G(M) {
          for (var Y = c(z); Y !== null; ) {
            if (Y.callback === null) f(z);
            else if (Y.startTime <= M)
              f(z), (Y.sortIndex = Y.expirationTime), i(m, Y);
            else break;
            Y = c(z);
          }
        }
        function te(M) {
          if (((D = !1), G(M), !T))
            if (c(m) !== null) (T = !0), Ue(le);
            else {
              var Y = c(z);
              Y !== null && ve(te, Y.startTime - M);
            }
        }
        function le(M, Y) {
          (T = !1), D && ((D = !1), I(je), (je = -1)), (F = !0);
          var B = S;
          try {
            for (
              G(Y), q = c(m);
              q !== null && (!(q.expirationTime > Y) || (M && !yt()));

            ) {
              var g = q.callback;
              if (typeof g == "function") {
                (q.callback = null), (S = q.priorityLevel);
                var C = g(q.expirationTime <= Y);
                (Y = s.unstable_now()),
                  typeof C == "function"
                    ? (q.callback = C)
                    : q === c(m) && f(m),
                  G(Y);
              } else f(m);
              q = c(m);
            }
            if (q !== null) var Z = !0;
            else {
              var ee = c(z);
              ee !== null && ve(te, ee.startTime - Y), (Z = !1);
            }
            return Z;
          } finally {
            (q = null), (S = B), (F = !1);
          }
        }
        var me = !1,
          he = null,
          je = -1,
          we = 5,
          Pe = -1;
        function yt() {
          return !(s.unstable_now() - Pe < we);
        }
        function ht() {
          if (he !== null) {
            var M = s.unstable_now();
            Pe = M;
            var Y = !0;
            try {
              Y = he(!0, M);
            } finally {
              Y ? Ke() : ((me = !1), (he = null));
            }
          } else me = !1;
        }
        var Ke;
        if (typeof U == "function")
          Ke = function () {
            U(ht);
          };
        else if (typeof MessageChannel < "u") {
          var st = new MessageChannel(),
            gt = st.port2;
          (st.port1.onmessage = ht),
            (Ke = function () {
              gt.postMessage(null);
            });
        } else
          Ke = function () {
            O(ht, 0);
          };
        function Ue(M) {
          (he = M), me || ((me = !0), Ke());
        }
        function ve(M, Y) {
          je = O(function () {
            M(s.unstable_now());
          }, Y);
        }
        (s.unstable_IdlePriority = 5),
          (s.unstable_ImmediatePriority = 1),
          (s.unstable_LowPriority = 4),
          (s.unstable_NormalPriority = 3),
          (s.unstable_Profiling = null),
          (s.unstable_UserBlockingPriority = 2),
          (s.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (s.unstable_continueExecution = function () {
            T || F || ((T = !0), Ue(le));
          }),
          (s.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (we = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (s.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (s.unstable_getFirstCallbackNode = function () {
            return c(m);
          }),
          (s.unstable_next = function (M) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var Y = 3;
                break;
              default:
                Y = S;
            }
            var B = S;
            S = Y;
            try {
              return M();
            } finally {
              S = B;
            }
          }),
          (s.unstable_pauseExecution = function () {}),
          (s.unstable_requestPaint = function () {}),
          (s.unstable_runWithPriority = function (M, Y) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var B = S;
            S = M;
            try {
              return Y();
            } finally {
              S = B;
            }
          }),
          (s.unstable_scheduleCallback = function (M, Y, B) {
            var g = s.unstable_now();
            switch (
              (typeof B == "object" && B !== null
                ? ((B = B.delay),
                  (B = typeof B == "number" && 0 < B ? g + B : g))
                : (B = g),
              M)
            ) {
              case 1:
                var C = -1;
                break;
              case 2:
                C = 250;
                break;
              case 5:
                C = 1073741823;
                break;
              case 4:
                C = 1e4;
                break;
              default:
                C = 5e3;
            }
            return (
              (C = B + C),
              (M = {
                id: R++,
                callback: Y,
                priorityLevel: M,
                startTime: B,
                expirationTime: C,
                sortIndex: -1,
              }),
              B > g
                ? ((M.sortIndex = B),
                  i(z, M),
                  c(m) === null &&
                    M === c(z) &&
                    (D ? (I(je), (je = -1)) : (D = !0), ve(te, B - g)))
                : ((M.sortIndex = C), i(m, M), T || F || ((T = !0), Ue(le))),
              M
            );
          }),
          (s.unstable_shouldYield = yt),
          (s.unstable_wrapCallback = function (M) {
            var Y = S;
            return function () {
              var B = S;
              S = Y;
              try {
                return M.apply(this, arguments);
              } finally {
                S = B;
              }
            };
          });
      })(oc)),
    oc
  );
}
var Su;
function mp() {
  return Su || ((Su = 1), (nc.exports = kp())), nc.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Eu;
function wp() {
  if (Eu) return Qe;
  Eu = 1;
  var s = mc(),
    i = mp();
  function c(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        a = 1;
      a < arguments.length;
      a++
    )
      t += "&args[]=" + encodeURIComponent(arguments[a]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var f = new Set(),
    u = {};
  function y(e, t) {
    v(e, t), v(e + "Capture", t);
  }
  function v(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) f.add(t[e]);
  }
  var b = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    z =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    R = {},
    q = {};
  function S(e) {
    return m.call(q, e)
      ? !0
      : m.call(R, e)
      ? !1
      : z.test(e)
      ? (q[e] = !0)
      : ((R[e] = !0), !1);
  }
  function F(e, t, a, r) {
    if (a !== null && a.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : a !== null
          ? !a.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function T(e, t, a, r) {
    if (t === null || typeof t > "u" || F(e, t, a, r)) return !0;
    if (r) return !1;
    if (a !== null)
      switch (a.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function D(e, t, a, r, n, o, l) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = n),
      (this.mustUseProperty = a),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = l);
  }
  var O = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      O[e] = new D(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      O[t] = new D(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      O[e] = new D(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      O[e] = new D(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        O[e] = new D(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      O[e] = new D(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      O[e] = new D(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      O[e] = new D(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      O[e] = new D(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var I = /[\-:]([a-z])/g;
  function U(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(I, U);
      O[t] = new D(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(I, U);
        O[t] = new D(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(I, U);
      O[t] = new D(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      O[e] = new D(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (O.xlinkHref = new D(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      O[e] = new D(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function G(e, t, a, r) {
    var n = O.hasOwnProperty(t) ? O[t] : null;
    (n !== null
      ? n.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (T(t, a, n, r) && (a = null),
      r || n === null
        ? S(t) &&
          (a === null ? e.removeAttribute(t) : e.setAttribute(t, "" + a))
        : n.mustUseProperty
        ? (e[n.propertyName] = a === null ? (n.type === 3 ? !1 : "") : a)
        : ((t = n.attributeName),
          (r = n.attributeNamespace),
          a === null
            ? e.removeAttribute(t)
            : ((n = n.type),
              (a = n === 3 || (n === 4 && a === !0) ? "" : "" + a),
              r ? e.setAttributeNS(r, t, a) : e.setAttribute(t, a))));
  }
  var te = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    le = Symbol.for("react.element"),
    me = Symbol.for("react.portal"),
    he = Symbol.for("react.fragment"),
    je = Symbol.for("react.strict_mode"),
    we = Symbol.for("react.profiler"),
    Pe = Symbol.for("react.provider"),
    yt = Symbol.for("react.context"),
    ht = Symbol.for("react.forward_ref"),
    Ke = Symbol.for("react.suspense"),
    st = Symbol.for("react.suspense_list"),
    gt = Symbol.for("react.memo"),
    Ue = Symbol.for("react.lazy"),
    ve = Symbol.for("react.offscreen"),
    M = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (M && e[M]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var B = Object.assign,
    g;
  function C(e) {
    if (g === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        g = (t && t[1]) || "";
      }
    return (
      `
` +
      g +
      e
    );
  }
  var Z = !1;
  function ee(e, t) {
    if (!e || Z) return "";
    Z = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (w) {
            var r = w;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (w) {
            r = w;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (w) {
          r = w;
        }
        e();
      }
    } catch (w) {
      if (w && r && typeof w.stack == "string") {
        for (
          var n = w.stack.split(`
`),
            o = r.stack.split(`
`),
            l = n.length - 1,
            d = o.length - 1;
          1 <= l && 0 <= d && n[l] !== o[d];

        )
          d--;
        for (; 1 <= l && 0 <= d; l--, d--)
          if (n[l] !== o[d]) {
            if (l !== 1 || d !== 1)
              do
                if ((l--, d--, 0 > d || n[l] !== o[d])) {
                  var p =
                    `
` + n[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      p.includes("<anonymous>") &&
                      (p = p.replace("<anonymous>", e.displayName)),
                    p
                  );
                }
              while (1 <= l && 0 <= d);
            break;
          }
      }
    } finally {
      (Z = !1), (Error.prepareStackTrace = a);
    }
    return (e = e ? e.displayName || e.name : "") ? C(e) : "";
  }
  function re(e) {
    switch (e.tag) {
      case 5:
        return C(e.type);
      case 16:
        return C("Lazy");
      case 13:
        return C("Suspense");
      case 19:
        return C("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = ee(e.type, !1)), e;
      case 11:
        return (e = ee(e.type.render, !1)), e;
      case 1:
        return (e = ee(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ne(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case he:
        return "Fragment";
      case me:
        return "Portal";
      case we:
        return "Profiler";
      case je:
        return "StrictMode";
      case Ke:
        return "Suspense";
      case st:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case yt:
          return (e.displayName || "Context") + ".Consumer";
        case Pe:
          return (e._context.displayName || "Context") + ".Provider";
        case ht:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case gt:
          return (
            (t = e.displayName || null), t !== null ? t : ne(e.type) || "Memo"
          );
        case Ue:
          (t = e._payload), (e = e._init);
          try {
            return ne(e(t));
          } catch {}
      }
    return null;
  }
  function ie(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ne(t);
      case 8:
        return t === je ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function se(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function pe(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ye(e) {
    var t = pe(e) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        o = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (l) {
            (r = "" + l), o.call(this, l);
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (l) {
            r = "" + l;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Fr(e) {
    e._valueTracker || (e._valueTracker = Ye(e));
  }
  function Ec(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      r = "";
    return (
      e && (r = pe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== a ? (t.setValue(e), !0) : !1
    );
  }
  function $r(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function co(e, t) {
    var a = t.checked;
    return B({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: a ?? e._wrapperState.initialChecked,
    });
  }
  function Cc(e, t) {
    var a = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (a = se(t.value != null ? t.value : a)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: a,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Pc(e, t) {
    (t = t.checked), t != null && G(e, "checked", t, !1);
  }
  function lo(e, t) {
    Pc(e, t);
    var a = se(t.value),
      r = t.type;
    if (a != null)
      r === "number"
        ? ((a === 0 && e.value === "") || e.value != a) && (e.value = "" + a)
        : e.value !== "" + a && (e.value = "" + a);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? io(e, t.type, a)
      : t.hasOwnProperty("defaultValue") && io(e, t.type, se(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Nc(e, t, a) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        a || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (a = e.name),
      a !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      a !== "" && (e.name = a);
  }
  function io(e, t, a) {
    (t !== "number" || $r(e.ownerDocument) !== e) &&
      (a == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + a && (e.defaultValue = "" + a));
  }
  var Va = Array.isArray;
  function _a(e, t, a, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < a.length; n++) t["$" + a[n]] = !0;
      for (a = 0; a < e.length; a++)
        (n = t.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== n && (e[a].selected = n),
          n && r && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + se(a), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === a) {
          (e[n].selected = !0), r && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function uo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(c(91));
    return B({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Rc(e, t) {
    var a = t.value;
    if (a == null) {
      if (((a = t.children), (t = t.defaultValue), a != null)) {
        if (t != null) throw Error(c(92));
        if (Va(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        t = a;
      }
      t == null && (t = ""), (a = t);
    }
    e._wrapperState = { initialValue: se(a) };
  }
  function Lc(e, t) {
    var a = se(t.value),
      r = se(t.defaultValue);
    a != null &&
      ((a = "" + a),
      a !== e.value && (e.value = a),
      t.defaultValue == null && e.defaultValue !== a && (e.defaultValue = a)),
      r != null && (e.defaultValue = "" + r);
  }
  function Tc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Oc(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function fo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Oc(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Ur,
    qc = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, a, r, n) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, a, r, n);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Ur = Ur || document.createElement("div"),
            Ur.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ur.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Wa(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Qa = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    mf = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Qa).forEach(function (e) {
    mf.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Qa[t] = Qa[e]);
    });
  });
  function Ic(e, t, a) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : a || typeof t != "number" || t === 0 || (Qa.hasOwnProperty(e) && Qa[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Dc(e, t) {
    e = e.style;
    for (var a in t)
      if (t.hasOwnProperty(a)) {
        var r = a.indexOf("--") === 0,
          n = Ic(a, t[a], r);
        a === "float" && (a = "cssFloat"), r ? e.setProperty(a, n) : (e[a] = n);
      }
  }
  var wf = B(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function po(e, t) {
    if (t) {
      if (wf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(c(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(c(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(c(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(c(62));
    }
  }
  function yo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ho = null;
  function go(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var _o = null,
    ka = null,
    ma = null;
  function Mc(e) {
    if ((e = hr(e))) {
      if (typeof _o != "function") throw Error(c(280));
      var t = e.stateNode;
      t && ((t = fn(t)), _o(e.stateNode, e.type, t));
    }
  }
  function Fc(e) {
    ka ? (ma ? ma.push(e) : (ma = [e])) : (ka = e);
  }
  function $c() {
    if (ka) {
      var e = ka,
        t = ma;
      if (((ma = ka = null), Mc(e), t)) for (e = 0; e < t.length; e++) Mc(t[e]);
    }
  }
  function Uc(e, t) {
    return e(t);
  }
  function Ac() {}
  var ko = !1;
  function Bc(e, t, a) {
    if (ko) return e(t, a);
    ko = !0;
    try {
      return Uc(e, t, a);
    } finally {
      (ko = !1), (ka !== null || ma !== null) && (Ac(), $c());
    }
  }
  function Ka(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var r = fn(a);
    if (r === null) return null;
    a = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(c(231, t, typeof a));
    return a;
  }
  var mo = !1;
  if (b)
    try {
      var Ya = {};
      Object.defineProperty(Ya, "passive", {
        get: function () {
          mo = !0;
        },
      }),
        window.addEventListener("test", Ya, Ya),
        window.removeEventListener("test", Ya, Ya);
    } catch {
      mo = !1;
    }
  function vf(e, t, a, r, n, o, l, d, p) {
    var w = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(a, w);
    } catch (P) {
      this.onError(P);
    }
  }
  var Xa = !1,
    Ar = null,
    Br = !1,
    wo = null,
    zf = {
      onError: function (e) {
        (Xa = !0), (Ar = e);
      },
    };
  function bf(e, t, a, r, n, o, l, d, p) {
    (Xa = !1), (Ar = null), vf.apply(zf, arguments);
  }
  function xf(e, t, a, r, n, o, l, d, p) {
    if ((bf.apply(this, arguments), Xa)) {
      if (Xa) {
        var w = Ar;
        (Xa = !1), (Ar = null);
      } else throw Error(c(198));
      Br || ((Br = !0), (wo = w));
    }
  }
  function ta(e) {
    var t = e,
      a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (a = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function Hc(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Vc(e) {
    if (ta(e) !== e) throw Error(c(188));
  }
  function jf(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = ta(e)), t === null)) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var a = e, r = t; ; ) {
      var n = a.return;
      if (n === null) break;
      var o = n.alternate;
      if (o === null) {
        if (((r = n.return), r !== null)) {
          a = r;
          continue;
        }
        break;
      }
      if (n.child === o.child) {
        for (o = n.child; o; ) {
          if (o === a) return Vc(n), e;
          if (o === r) return Vc(n), t;
          o = o.sibling;
        }
        throw Error(c(188));
      }
      if (a.return !== r.return) (a = n), (r = o);
      else {
        for (var l = !1, d = n.child; d; ) {
          if (d === a) {
            (l = !0), (a = n), (r = o);
            break;
          }
          if (d === r) {
            (l = !0), (r = n), (a = o);
            break;
          }
          d = d.sibling;
        }
        if (!l) {
          for (d = o.child; d; ) {
            if (d === a) {
              (l = !0), (a = o), (r = n);
              break;
            }
            if (d === r) {
              (l = !0), (r = o), (a = n);
              break;
            }
            d = d.sibling;
          }
          if (!l) throw Error(c(189));
        }
      }
      if (a.alternate !== r) throw Error(c(190));
    }
    if (a.tag !== 3) throw Error(c(188));
    return a.stateNode.current === a ? e : t;
  }
  function Wc(e) {
    return (e = jf(e)), e !== null ? Qc(e) : null;
  }
  function Qc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Qc(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Kc = i.unstable_scheduleCallback,
    Yc = i.unstable_cancelCallback,
    Sf = i.unstable_shouldYield,
    Ef = i.unstable_requestPaint,
    be = i.unstable_now,
    Cf = i.unstable_getCurrentPriorityLevel,
    vo = i.unstable_ImmediatePriority,
    Xc = i.unstable_UserBlockingPriority,
    Hr = i.unstable_NormalPriority,
    Pf = i.unstable_LowPriority,
    Gc = i.unstable_IdlePriority,
    Vr = null,
    _t = null;
  function Nf(e) {
    if (_t && typeof _t.onCommitFiberRoot == "function")
      try {
        _t.onCommitFiberRoot(Vr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ct = Math.clz32 ? Math.clz32 : Tf,
    Rf = Math.log,
    Lf = Math.LN2;
  function Tf(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Rf(e) / Lf) | 0)) | 0;
  }
  var Wr = 64,
    Qr = 4194304;
  function Ga(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Kr(e, t) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var r = 0,
      n = e.suspendedLanes,
      o = e.pingedLanes,
      l = a & 268435455;
    if (l !== 0) {
      var d = l & ~n;
      d !== 0 ? (r = Ga(d)) : ((o &= l), o !== 0 && (r = Ga(o)));
    } else (l = a & ~n), l !== 0 ? (r = Ga(l)) : o !== 0 && (r = Ga(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & n) &&
      ((n = r & -r), (o = t & -t), n >= o || (n === 16 && (o & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= a & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (a = 31 - ct(t)), (n = 1 << a), (r |= e[a]), (t &= ~n);
    return r;
  }
  function Of(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function qf(e, t) {
    for (
      var a = e.suspendedLanes,
        r = e.pingedLanes,
        n = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var l = 31 - ct(o),
        d = 1 << l,
        p = n[l];
      p === -1
        ? (!(d & a) || d & r) && (n[l] = Of(d, t))
        : p <= t && (e.expiredLanes |= d),
        (o &= ~d);
    }
  }
  function zo(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Zc() {
    var e = Wr;
    return (Wr <<= 1), !(Wr & 4194240) && (Wr = 64), e;
  }
  function bo(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Za(e, t, a) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - ct(t)),
      (e[t] = a);
  }
  function If(e, t) {
    var a = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < a; ) {
      var n = 31 - ct(a),
        o = 1 << n;
      (t[n] = 0), (r[n] = -1), (e[n] = -1), (a &= ~o);
    }
  }
  function xo(e, t) {
    var a = (e.entangledLanes |= t);
    for (e = e.entanglements; a; ) {
      var r = 31 - ct(a),
        n = 1 << r;
      (n & t) | (e[r] & t) && (e[r] |= t), (a &= ~n);
    }
  }
  var ce = 0;
  function Jc(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var el,
    jo,
    tl,
    al,
    rl,
    So = !1,
    Yr = [],
    Ot = null,
    qt = null,
    It = null,
    Ja = new Map(),
    er = new Map(),
    Dt = [],
    Df =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function nl(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ot = null;
        break;
      case "dragenter":
      case "dragleave":
        qt = null;
        break;
      case "mouseover":
      case "mouseout":
        It = null;
        break;
      case "pointerover":
      case "pointerout":
        Ja.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        er.delete(t.pointerId);
    }
  }
  function tr(e, t, a, r, n, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [n],
        }),
        t !== null && ((t = hr(t)), t !== null && jo(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function Mf(e, t, a, r, n) {
    switch (t) {
      case "focusin":
        return (Ot = tr(Ot, e, t, a, r, n)), !0;
      case "dragenter":
        return (qt = tr(qt, e, t, a, r, n)), !0;
      case "mouseover":
        return (It = tr(It, e, t, a, r, n)), !0;
      case "pointerover":
        var o = n.pointerId;
        return Ja.set(o, tr(Ja.get(o) || null, e, t, a, r, n)), !0;
      case "gotpointercapture":
        return (
          (o = n.pointerId), er.set(o, tr(er.get(o) || null, e, t, a, r, n)), !0
        );
    }
    return !1;
  }
  function ol(e) {
    var t = aa(e.target);
    if (t !== null) {
      var a = ta(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = Hc(a)), t !== null)) {
            (e.blockedOn = t),
              rl(e.priority, function () {
                tl(a);
              });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Xr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Co(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var r = new a.constructor(a.type, a);
        (ho = r), a.target.dispatchEvent(r), (ho = null);
      } else return (t = hr(a)), t !== null && jo(t), (e.blockedOn = a), !1;
      t.shift();
    }
    return !0;
  }
  function sl(e, t, a) {
    Xr(e) && a.delete(t);
  }
  function Ff() {
    (So = !1),
      Ot !== null && Xr(Ot) && (Ot = null),
      qt !== null && Xr(qt) && (qt = null),
      It !== null && Xr(It) && (It = null),
      Ja.forEach(sl),
      er.forEach(sl);
  }
  function ar(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      So ||
        ((So = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Ff)));
  }
  function rr(e) {
    function t(n) {
      return ar(n, e);
    }
    if (0 < Yr.length) {
      ar(Yr[0], e);
      for (var a = 1; a < Yr.length; a++) {
        var r = Yr[a];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Ot !== null && ar(Ot, e),
        qt !== null && ar(qt, e),
        It !== null && ar(It, e),
        Ja.forEach(t),
        er.forEach(t),
        a = 0;
      a < Dt.length;
      a++
    )
      (r = Dt[a]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Dt.length && ((a = Dt[0]), a.blockedOn === null); )
      ol(a), a.blockedOn === null && Dt.shift();
  }
  var wa = te.ReactCurrentBatchConfig,
    Gr = !0;
  function $f(e, t, a, r) {
    var n = ce,
      o = wa.transition;
    wa.transition = null;
    try {
      (ce = 1), Eo(e, t, a, r);
    } finally {
      (ce = n), (wa.transition = o);
    }
  }
  function Uf(e, t, a, r) {
    var n = ce,
      o = wa.transition;
    wa.transition = null;
    try {
      (ce = 4), Eo(e, t, a, r);
    } finally {
      (ce = n), (wa.transition = o);
    }
  }
  function Eo(e, t, a, r) {
    if (Gr) {
      var n = Co(e, t, a, r);
      if (n === null) Vo(e, t, r, Zr, a), nl(e, r);
      else if (Mf(n, e, t, a, r)) r.stopPropagation();
      else if ((nl(e, r), t & 4 && -1 < Df.indexOf(e))) {
        for (; n !== null; ) {
          var o = hr(n);
          if (
            (o !== null && el(o),
            (o = Co(e, t, a, r)),
            o === null && Vo(e, t, r, Zr, a),
            o === n)
          )
            break;
          n = o;
        }
        n !== null && r.stopPropagation();
      } else Vo(e, t, r, null, a);
    }
  }
  var Zr = null;
  function Co(e, t, a, r) {
    if (((Zr = null), (e = go(r)), (e = aa(e)), e !== null))
      if (((t = ta(e)), t === null)) e = null;
      else if (((a = t.tag), a === 13)) {
        if (((e = Hc(t)), e !== null)) return e;
        e = null;
      } else if (a === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Zr = e), null;
  }
  function cl(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Cf()) {
          case vo:
            return 1;
          case Xc:
            return 4;
          case Hr:
          case Pf:
            return 16;
          case Gc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Mt = null,
    Po = null,
    Jr = null;
  function ll() {
    if (Jr) return Jr;
    var e,
      t = Po,
      a = t.length,
      r,
      n = "value" in Mt ? Mt.value : Mt.textContent,
      o = n.length;
    for (e = 0; e < a && t[e] === n[e]; e++);
    var l = a - e;
    for (r = 1; r <= l && t[a - r] === n[o - r]; r++);
    return (Jr = n.slice(e, 1 < r ? 1 - r : void 0));
  }
  function en(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function tn() {
    return !0;
  }
  function il() {
    return !1;
  }
  function Xe(e) {
    function t(a, r, n, o, l) {
      (this._reactName = a),
        (this._targetInst = n),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = l),
        (this.currentTarget = null);
      for (var d in e)
        e.hasOwnProperty(d) && ((a = e[d]), (this[d] = a ? a(o) : o[d]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? tn
          : il),
        (this.isPropagationStopped = il),
        this
      );
    }
    return (
      B(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = tn));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = tn));
        },
        persist: function () {},
        isPersistent: tn,
      }),
      t
    );
  }
  var va = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    No = Xe(va),
    nr = B({}, va, { view: 0, detail: 0 }),
    Af = Xe(nr),
    Ro,
    Lo,
    or,
    an = B({}, nr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Oo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== or &&
              (or && e.type === "mousemove"
                ? ((Ro = e.screenX - or.screenX), (Lo = e.screenY - or.screenY))
                : (Lo = Ro = 0),
              (or = e)),
            Ro);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Lo;
      },
    }),
    ul = Xe(an),
    Bf = B({}, an, { dataTransfer: 0 }),
    Hf = Xe(Bf),
    Vf = B({}, nr, { relatedTarget: 0 }),
    To = Xe(Vf),
    Wf = B({}, va, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qf = Xe(Wf),
    Kf = B({}, va, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Yf = Xe(Kf),
    Xf = B({}, va, { data: 0 }),
    fl = Xe(Xf),
    Gf = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Zf = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Jf = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ed(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Jf[e])
      ? !!t[e]
      : !1;
  }
  function Oo() {
    return ed;
  }
  var td = B({}, nr, {
      key: function (e) {
        if (e.key) {
          var t = Gf[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = en(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Zf[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Oo,
      charCode: function (e) {
        return e.type === "keypress" ? en(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? en(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    ad = Xe(td),
    rd = B({}, an, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    dl = Xe(rd),
    nd = B({}, nr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Oo,
    }),
    od = Xe(nd),
    sd = B({}, va, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    cd = Xe(sd),
    ld = B({}, an, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    id = Xe(ld),
    ud = [9, 13, 27, 32],
    qo = b && "CompositionEvent" in window,
    sr = null;
  b && "documentMode" in document && (sr = document.documentMode);
  var fd = b && "TextEvent" in window && !sr,
    pl = b && (!qo || (sr && 8 < sr && 11 >= sr)),
    yl = " ",
    hl = !1;
  function gl(e, t) {
    switch (e) {
      case "keyup":
        return ud.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function _l(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var za = !1;
  function dd(e, t) {
    switch (e) {
      case "compositionend":
        return _l(t);
      case "keypress":
        return t.which !== 32 ? null : ((hl = !0), yl);
      case "textInput":
        return (e = t.data), e === yl && hl ? null : e;
      default:
        return null;
    }
  }
  function pd(e, t) {
    if (za)
      return e === "compositionend" || (!qo && gl(e, t))
        ? ((e = ll()), (Jr = Po = Mt = null), (za = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return pl && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var yd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function kl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!yd[e.type] : t === "textarea";
  }
  function ml(e, t, a, r) {
    Fc(r),
      (t = cn(t, "onChange")),
      0 < t.length &&
        ((a = new No("onChange", "change", null, a, r)),
        e.push({ event: a, listeners: t }));
  }
  var cr = null,
    lr = null;
  function hd(e) {
    Dl(e, 0);
  }
  function rn(e) {
    var t = Ea(e);
    if (Ec(t)) return e;
  }
  function gd(e, t) {
    if (e === "change") return t;
  }
  var wl = !1;
  if (b) {
    var Io;
    if (b) {
      var Do = "oninput" in document;
      if (!Do) {
        var vl = document.createElement("div");
        vl.setAttribute("oninput", "return;"),
          (Do = typeof vl.oninput == "function");
      }
      Io = Do;
    } else Io = !1;
    wl = Io && (!document.documentMode || 9 < document.documentMode);
  }
  function zl() {
    cr && (cr.detachEvent("onpropertychange", bl), (lr = cr = null));
  }
  function bl(e) {
    if (e.propertyName === "value" && rn(lr)) {
      var t = [];
      ml(t, lr, e, go(e)), Bc(hd, t);
    }
  }
  function _d(e, t, a) {
    e === "focusin"
      ? (zl(), (cr = t), (lr = a), cr.attachEvent("onpropertychange", bl))
      : e === "focusout" && zl();
  }
  function kd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return rn(lr);
  }
  function md(e, t) {
    if (e === "click") return rn(t);
  }
  function wd(e, t) {
    if (e === "input" || e === "change") return rn(t);
  }
  function vd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var lt = typeof Object.is == "function" ? Object.is : vd;
  function ir(e, t) {
    if (lt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(e),
      r = Object.keys(t);
    if (a.length !== r.length) return !1;
    for (r = 0; r < a.length; r++) {
      var n = a[r];
      if (!m.call(t, n) || !lt(e[n], t[n])) return !1;
    }
    return !0;
  }
  function xl(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function jl(e, t) {
    var a = xl(e);
    e = 0;
    for (var r; a; ) {
      if (a.nodeType === 3) {
        if (((r = e + a.textContent.length), e <= t && r >= t))
          return { node: a, offset: t - e };
        e = r;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = xl(a);
    }
  }
  function Sl(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Sl(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function El() {
    for (var e = window, t = $r(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = $r(e.document);
    }
    return t;
  }
  function Mo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function zd(e) {
    var t = El(),
      a = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== a &&
      a &&
      a.ownerDocument &&
      Sl(a.ownerDocument.documentElement, a)
    ) {
      if (r !== null && Mo(a)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in a)
        )
          (a.selectionStart = t),
            (a.selectionEnd = Math.min(e, a.value.length));
        else if (
          ((e = ((t = a.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var n = a.textContent.length,
            o = Math.min(r.start, n);
          (r = r.end === void 0 ? o : Math.min(r.end, n)),
            !e.extend && o > r && ((n = r), (r = o), (o = n)),
            (n = jl(a, o));
          var l = jl(a, r);
          n &&
            l &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== n.node ||
              e.anchorOffset !== n.offset ||
              e.focusNode !== l.node ||
              e.focusOffset !== l.offset) &&
            ((t = t.createRange()),
            t.setStart(n.node, n.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(l.node, l.offset))
              : (t.setEnd(l.node, l.offset), e.addRange(t)));
        }
      }
      for (t = [], e = a; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof a.focus == "function" && a.focus(), a = 0; a < t.length; a++)
        (e = t[a]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var bd = b && "documentMode" in document && 11 >= document.documentMode,
    ba = null,
    Fo = null,
    ur = null,
    $o = !1;
  function Cl(e, t, a) {
    var r =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    $o ||
      ba == null ||
      ba !== $r(r) ||
      ((r = ba),
      "selectionStart" in r && Mo(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (ur && ir(ur, r)) ||
        ((ur = r),
        (r = cn(Fo, "onSelect")),
        0 < r.length &&
          ((t = new No("onSelect", "select", null, t, a)),
          e.push({ event: t, listeners: r }),
          (t.target = ba))));
  }
  function nn(e, t) {
    var a = {};
    return (
      (a[e.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + e] = "webkit" + t),
      (a["Moz" + e] = "moz" + t),
      a
    );
  }
  var xa = {
      animationend: nn("Animation", "AnimationEnd"),
      animationiteration: nn("Animation", "AnimationIteration"),
      animationstart: nn("Animation", "AnimationStart"),
      transitionend: nn("Transition", "TransitionEnd"),
    },
    Uo = {},
    Pl = {};
  b &&
    ((Pl = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete xa.animationend.animation,
      delete xa.animationiteration.animation,
      delete xa.animationstart.animation),
    "TransitionEvent" in window || delete xa.transitionend.transition);
  function on(e) {
    if (Uo[e]) return Uo[e];
    if (!xa[e]) return e;
    var t = xa[e],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in Pl) return (Uo[e] = t[a]);
    return e;
  }
  var Nl = on("animationend"),
    Rl = on("animationiteration"),
    Ll = on("animationstart"),
    Tl = on("transitionend"),
    Ol = new Map(),
    ql =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Ft(e, t) {
    Ol.set(e, t), y(t, [e]);
  }
  for (var Ao = 0; Ao < ql.length; Ao++) {
    var Bo = ql[Ao],
      xd = Bo.toLowerCase(),
      jd = Bo[0].toUpperCase() + Bo.slice(1);
    Ft(xd, "on" + jd);
  }
  Ft(Nl, "onAnimationEnd"),
    Ft(Rl, "onAnimationIteration"),
    Ft(Ll, "onAnimationStart"),
    Ft("dblclick", "onDoubleClick"),
    Ft("focusin", "onFocus"),
    Ft("focusout", "onBlur"),
    Ft(Tl, "onTransitionEnd"),
    v("onMouseEnter", ["mouseout", "mouseover"]),
    v("onMouseLeave", ["mouseout", "mouseover"]),
    v("onPointerEnter", ["pointerout", "pointerover"]),
    v("onPointerLeave", ["pointerout", "pointerover"]),
    y(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    y(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    y("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    y(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    y(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    y(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var fr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Sd = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(fr)
    );
  function Il(e, t, a) {
    var r = e.type || "unknown-event";
    (e.currentTarget = a), xf(r, t, void 0, e), (e.currentTarget = null);
  }
  function Dl(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var r = e[a],
        n = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var l = r.length - 1; 0 <= l; l--) {
            var d = r[l],
              p = d.instance,
              w = d.currentTarget;
            if (((d = d.listener), p !== o && n.isPropagationStopped()))
              break e;
            Il(n, d, w), (o = p);
          }
        else
          for (l = 0; l < r.length; l++) {
            if (
              ((d = r[l]),
              (p = d.instance),
              (w = d.currentTarget),
              (d = d.listener),
              p !== o && n.isPropagationStopped())
            )
              break e;
            Il(n, d, w), (o = p);
          }
      }
    }
    if (Br) throw ((e = wo), (Br = !1), (wo = null), e);
  }
  function fe(e, t) {
    var a = t[Go];
    a === void 0 && (a = t[Go] = new Set());
    var r = e + "__bubble";
    a.has(r) || (Ml(t, e, 2, !1), a.add(r));
  }
  function Ho(e, t, a) {
    var r = 0;
    t && (r |= 4), Ml(a, e, r, t);
  }
  var sn = "_reactListening" + Math.random().toString(36).slice(2);
  function dr(e) {
    if (!e[sn]) {
      (e[sn] = !0),
        f.forEach(function (a) {
          a !== "selectionchange" && (Sd.has(a) || Ho(a, !1, e), Ho(a, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[sn] || ((t[sn] = !0), Ho("selectionchange", !1, t));
    }
  }
  function Ml(e, t, a, r) {
    switch (cl(t)) {
      case 1:
        var n = $f;
        break;
      case 4:
        n = Uf;
        break;
      default:
        n = Eo;
    }
    (a = n.bind(null, t, a, e)),
      (n = void 0),
      !mo ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      r
        ? n !== void 0
          ? e.addEventListener(t, a, { capture: !0, passive: n })
          : e.addEventListener(t, a, !0)
        : n !== void 0
        ? e.addEventListener(t, a, { passive: n })
        : e.addEventListener(t, a, !1);
  }
  function Vo(e, t, a, r, n) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var l = r.tag;
        if (l === 3 || l === 4) {
          var d = r.stateNode.containerInfo;
          if (d === n || (d.nodeType === 8 && d.parentNode === n)) break;
          if (l === 4)
            for (l = r.return; l !== null; ) {
              var p = l.tag;
              if (
                (p === 3 || p === 4) &&
                ((p = l.stateNode.containerInfo),
                p === n || (p.nodeType === 8 && p.parentNode === n))
              )
                return;
              l = l.return;
            }
          for (; d !== null; ) {
            if (((l = aa(d)), l === null)) return;
            if (((p = l.tag), p === 5 || p === 6)) {
              r = o = l;
              continue e;
            }
            d = d.parentNode;
          }
        }
        r = r.return;
      }
    Bc(function () {
      var w = o,
        P = go(a),
        N = [];
      e: {
        var E = Ol.get(e);
        if (E !== void 0) {
          var $ = No,
            H = e;
          switch (e) {
            case "keypress":
              if (en(a) === 0) break e;
            case "keydown":
            case "keyup":
              $ = ad;
              break;
            case "focusin":
              (H = "focus"), ($ = To);
              break;
            case "focusout":
              (H = "blur"), ($ = To);
              break;
            case "beforeblur":
            case "afterblur":
              $ = To;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              $ = ul;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              $ = Hf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              $ = od;
              break;
            case Nl:
            case Rl:
            case Ll:
              $ = Qf;
              break;
            case Tl:
              $ = cd;
              break;
            case "scroll":
              $ = Af;
              break;
            case "wheel":
              $ = id;
              break;
            case "copy":
            case "cut":
            case "paste":
              $ = Yf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              $ = dl;
          }
          var V = (t & 4) !== 0,
            xe = !V && e === "scroll",
            _ = V ? (E !== null ? E + "Capture" : null) : E;
          V = [];
          for (var h = w, k; h !== null; ) {
            k = h;
            var L = k.stateNode;
            if (
              (k.tag === 5 &&
                L !== null &&
                ((k = L),
                _ !== null &&
                  ((L = Ka(h, _)), L != null && V.push(pr(h, L, k)))),
              xe)
            )
              break;
            h = h.return;
          }
          0 < V.length &&
            ((E = new $(E, H, null, a, P)), N.push({ event: E, listeners: V }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((E = e === "mouseover" || e === "pointerover"),
            ($ = e === "mouseout" || e === "pointerout"),
            E &&
              a !== ho &&
              (H = a.relatedTarget || a.fromElement) &&
              (aa(H) || H[xt]))
          )
            break e;
          if (
            ($ || E) &&
            ((E =
              P.window === P
                ? P
                : (E = P.ownerDocument)
                ? E.defaultView || E.parentWindow
                : window),
            $
              ? ((H = a.relatedTarget || a.toElement),
                ($ = w),
                (H = H ? aa(H) : null),
                H !== null &&
                  ((xe = ta(H)), H !== xe || (H.tag !== 5 && H.tag !== 6)) &&
                  (H = null))
              : (($ = null), (H = w)),
            $ !== H)
          ) {
            if (
              ((V = ul),
              (L = "onMouseLeave"),
              (_ = "onMouseEnter"),
              (h = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((V = dl),
                (L = "onPointerLeave"),
                (_ = "onPointerEnter"),
                (h = "pointer")),
              (xe = $ == null ? E : Ea($)),
              (k = H == null ? E : Ea(H)),
              (E = new V(L, h + "leave", $, a, P)),
              (E.target = xe),
              (E.relatedTarget = k),
              (L = null),
              aa(P) === w &&
                ((V = new V(_, h + "enter", H, a, P)),
                (V.target = k),
                (V.relatedTarget = xe),
                (L = V)),
              (xe = L),
              $ && H)
            )
              t: {
                for (V = $, _ = H, h = 0, k = V; k; k = ja(k)) h++;
                for (k = 0, L = _; L; L = ja(L)) k++;
                for (; 0 < h - k; ) (V = ja(V)), h--;
                for (; 0 < k - h; ) (_ = ja(_)), k--;
                for (; h--; ) {
                  if (V === _ || (_ !== null && V === _.alternate)) break t;
                  (V = ja(V)), (_ = ja(_));
                }
                V = null;
              }
            else V = null;
            $ !== null && Fl(N, E, $, V, !1),
              H !== null && xe !== null && Fl(N, xe, H, V, !0);
          }
        }
        e: {
          if (
            ((E = w ? Ea(w) : window),
            ($ = E.nodeName && E.nodeName.toLowerCase()),
            $ === "select" || ($ === "input" && E.type === "file"))
          )
            var W = gd;
          else if (kl(E))
            if (wl) W = wd;
            else {
              W = kd;
              var Q = _d;
            }
          else
            ($ = E.nodeName) &&
              $.toLowerCase() === "input" &&
              (E.type === "checkbox" || E.type === "radio") &&
              (W = md);
          if (W && (W = W(e, w))) {
            ml(N, W, a, P);
            break e;
          }
          Q && Q(e, E, w),
            e === "focusout" &&
              (Q = E._wrapperState) &&
              Q.controlled &&
              E.type === "number" &&
              io(E, "number", E.value);
        }
        switch (((Q = w ? Ea(w) : window), e)) {
          case "focusin":
            (kl(Q) || Q.contentEditable === "true") &&
              ((ba = Q), (Fo = w), (ur = null));
            break;
          case "focusout":
            ur = Fo = ba = null;
            break;
          case "mousedown":
            $o = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ($o = !1), Cl(N, a, P);
            break;
          case "selectionchange":
            if (bd) break;
          case "keydown":
          case "keyup":
            Cl(N, a, P);
        }
        var K;
        if (qo)
          e: {
            switch (e) {
              case "compositionstart":
                var X = "onCompositionStart";
                break e;
              case "compositionend":
                X = "onCompositionEnd";
                break e;
              case "compositionupdate":
                X = "onCompositionUpdate";
                break e;
            }
            X = void 0;
          }
        else
          za
            ? gl(e, a) && (X = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (X = "onCompositionStart");
        X &&
          (pl &&
            a.locale !== "ko" &&
            (za || X !== "onCompositionStart"
              ? X === "onCompositionEnd" && za && (K = ll())
              : ((Mt = P),
                (Po = "value" in Mt ? Mt.value : Mt.textContent),
                (za = !0))),
          (Q = cn(w, X)),
          0 < Q.length &&
            ((X = new fl(X, e, null, a, P)),
            N.push({ event: X, listeners: Q }),
            K ? (X.data = K) : ((K = _l(a)), K !== null && (X.data = K)))),
          (K = fd ? dd(e, a) : pd(e, a)) &&
            ((w = cn(w, "onBeforeInput")),
            0 < w.length &&
              ((P = new fl("onBeforeInput", "beforeinput", null, a, P)),
              N.push({ event: P, listeners: w }),
              (P.data = K)));
      }
      Dl(N, t);
    });
  }
  function pr(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function cn(e, t) {
    for (var a = t + "Capture", r = []; e !== null; ) {
      var n = e,
        o = n.stateNode;
      n.tag === 5 &&
        o !== null &&
        ((n = o),
        (o = Ka(e, a)),
        o != null && r.unshift(pr(e, o, n)),
        (o = Ka(e, t)),
        o != null && r.push(pr(e, o, n))),
        (e = e.return);
    }
    return r;
  }
  function ja(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Fl(e, t, a, r, n) {
    for (var o = t._reactName, l = []; a !== null && a !== r; ) {
      var d = a,
        p = d.alternate,
        w = d.stateNode;
      if (p !== null && p === r) break;
      d.tag === 5 &&
        w !== null &&
        ((d = w),
        n
          ? ((p = Ka(a, o)), p != null && l.unshift(pr(a, p, d)))
          : n || ((p = Ka(a, o)), p != null && l.push(pr(a, p, d)))),
        (a = a.return);
    }
    l.length !== 0 && e.push({ event: t, listeners: l });
  }
  var Ed = /\r\n?/g,
    Cd = /\u0000|\uFFFD/g;
  function $l(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Ed,
        `
`
      )
      .replace(Cd, "");
  }
  function ln(e, t, a) {
    if (((t = $l(t)), $l(e) !== t && a)) throw Error(c(425));
  }
  function un() {}
  var Wo = null,
    Qo = null;
  function Ko(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Yo = typeof setTimeout == "function" ? setTimeout : void 0,
    Pd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ul = typeof Promise == "function" ? Promise : void 0,
    Nd =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ul < "u"
        ? function (e) {
            return Ul.resolve(null).then(e).catch(Rd);
          }
        : Yo;
  function Rd(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Xo(e, t) {
    var a = t,
      r = 0;
    do {
      var n = a.nextSibling;
      if ((e.removeChild(a), n && n.nodeType === 8))
        if (((a = n.data), a === "/$")) {
          if (r === 0) {
            e.removeChild(n), rr(t);
            return;
          }
          r--;
        } else (a !== "$" && a !== "$?" && a !== "$!") || r++;
      a = n;
    } while (a);
    rr(t);
  }
  function $t(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Al(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return e;
          t--;
        } else a === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Sa = Math.random().toString(36).slice(2),
    kt = "__reactFiber$" + Sa,
    yr = "__reactProps$" + Sa,
    xt = "__reactContainer$" + Sa,
    Go = "__reactEvents$" + Sa,
    Ld = "__reactListeners$" + Sa,
    Td = "__reactHandles$" + Sa;
  function aa(e) {
    var t = e[kt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if ((t = a[xt] || a[kt])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (e = Al(e); e !== null; ) {
            if ((a = e[kt])) return a;
            e = Al(e);
          }
        return t;
      }
      (e = a), (a = e.parentNode);
    }
    return null;
  }
  function hr(e) {
    return (
      (e = e[kt] || e[xt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Ea(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(c(33));
  }
  function fn(e) {
    return e[yr] || null;
  }
  var Zo = [],
    Ca = -1;
  function Ut(e) {
    return { current: e };
  }
  function de(e) {
    0 > Ca || ((e.current = Zo[Ca]), (Zo[Ca] = null), Ca--);
  }
  function ue(e, t) {
    Ca++, (Zo[Ca] = e.current), (e.current = t);
  }
  var At = {},
    qe = Ut(At),
    Ae = Ut(!1),
    ra = At;
  function Pa(e, t) {
    var a = e.type.contextTypes;
    if (!a) return At;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var n = {},
      o;
    for (o in a) n[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = n)),
      n
    );
  }
  function Be(e) {
    return (e = e.childContextTypes), e != null;
  }
  function dn() {
    de(Ae), de(qe);
  }
  function Bl(e, t, a) {
    if (qe.current !== At) throw Error(c(168));
    ue(qe, t), ue(Ae, a);
  }
  function Hl(e, t, a) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return a;
    r = r.getChildContext();
    for (var n in r) if (!(n in t)) throw Error(c(108, ie(e) || "Unknown", n));
    return B({}, a, r);
  }
  function pn(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        At),
      (ra = qe.current),
      ue(qe, e),
      ue(Ae, Ae.current),
      !0
    );
  }
  function Vl(e, t, a) {
    var r = e.stateNode;
    if (!r) throw Error(c(169));
    a
      ? ((e = Hl(e, t, ra)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        de(Ae),
        de(qe),
        ue(qe, e))
      : de(Ae),
      ue(Ae, a);
  }
  var jt = null,
    yn = !1,
    Jo = !1;
  function Wl(e) {
    jt === null ? (jt = [e]) : jt.push(e);
  }
  function Od(e) {
    (yn = !0), Wl(e);
  }
  function Bt() {
    if (!Jo && jt !== null) {
      Jo = !0;
      var e = 0,
        t = ce;
      try {
        var a = jt;
        for (ce = 1; e < a.length; e++) {
          var r = a[e];
          do r = r(!0);
          while (r !== null);
        }
        (jt = null), (yn = !1);
      } catch (n) {
        throw (jt !== null && (jt = jt.slice(e + 1)), Kc(vo, Bt), n);
      } finally {
        (ce = t), (Jo = !1);
      }
    }
    return null;
  }
  var Na = [],
    Ra = 0,
    hn = null,
    gn = 0,
    et = [],
    tt = 0,
    na = null,
    St = 1,
    Et = "";
  function oa(e, t) {
    (Na[Ra++] = gn), (Na[Ra++] = hn), (hn = e), (gn = t);
  }
  function Ql(e, t, a) {
    (et[tt++] = St), (et[tt++] = Et), (et[tt++] = na), (na = e);
    var r = St;
    e = Et;
    var n = 32 - ct(r) - 1;
    (r &= ~(1 << n)), (a += 1);
    var o = 32 - ct(t) + n;
    if (30 < o) {
      var l = n - (n % 5);
      (o = (r & ((1 << l) - 1)).toString(32)),
        (r >>= l),
        (n -= l),
        (St = (1 << (32 - ct(t) + n)) | (a << n) | r),
        (Et = o + e);
    } else (St = (1 << o) | (a << n) | r), (Et = e);
  }
  function es(e) {
    e.return !== null && (oa(e, 1), Ql(e, 1, 0));
  }
  function ts(e) {
    for (; e === hn; )
      (hn = Na[--Ra]), (Na[Ra] = null), (gn = Na[--Ra]), (Na[Ra] = null);
    for (; e === na; )
      (na = et[--tt]),
        (et[tt] = null),
        (Et = et[--tt]),
        (et[tt] = null),
        (St = et[--tt]),
        (et[tt] = null);
  }
  var Ge = null,
    Ze = null,
    ye = !1,
    it = null;
  function Kl(e, t) {
    var a = ot(5, null, null, 0);
    (a.elementType = "DELETED"),
      (a.stateNode = t),
      (a.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [a]), (e.flags |= 16)) : t.push(a);
  }
  function Yl(e, t) {
    switch (e.tag) {
      case 5:
        var a = e.type;
        return (
          (t =
            t.nodeType !== 1 || a.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Ge = e), (Ze = $t(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ge = e), (Ze = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((a = na !== null ? { id: St, overflow: Et } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: a,
                retryLane: 1073741824,
              }),
              (a = ot(18, null, null, 0)),
              (a.stateNode = t),
              (a.return = e),
              (e.child = a),
              (Ge = e),
              (Ze = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function as(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function rs(e) {
    if (ye) {
      var t = Ze;
      if (t) {
        var a = t;
        if (!Yl(e, t)) {
          if (as(e)) throw Error(c(418));
          t = $t(a.nextSibling);
          var r = Ge;
          t && Yl(e, t)
            ? Kl(r, a)
            : ((e.flags = (e.flags & -4097) | 2), (ye = !1), (Ge = e));
        }
      } else {
        if (as(e)) throw Error(c(418));
        (e.flags = (e.flags & -4097) | 2), (ye = !1), (Ge = e);
      }
    }
  }
  function Xl(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ge = e;
  }
  function _n(e) {
    if (e !== Ge) return !1;
    if (!ye) return Xl(e), (ye = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Ko(e.type, e.memoizedProps))),
      t && (t = Ze))
    ) {
      if (as(e)) throw (Gl(), Error(c(418)));
      for (; t; ) Kl(e, t), (t = $t(t.nextSibling));
    }
    if ((Xl(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var a = e.data;
            if (a === "/$") {
              if (t === 0) {
                Ze = $t(e.nextSibling);
                break e;
              }
              t--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Ze = null;
      }
    } else Ze = Ge ? $t(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Gl() {
    for (var e = Ze; e; ) e = $t(e.nextSibling);
  }
  function La() {
    (Ze = Ge = null), (ye = !1);
  }
  function ns(e) {
    it === null ? (it = [e]) : it.push(e);
  }
  var qd = te.ReactCurrentBatchConfig;
  function gr(e, t, a) {
    if (
      ((e = a.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (a._owner) {
        if (((a = a._owner), a)) {
          if (a.tag !== 1) throw Error(c(309));
          var r = a.stateNode;
        }
        if (!r) throw Error(c(147, e));
        var n = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (l) {
              var d = n.refs;
              l === null ? delete d[o] : (d[o] = l);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(c(284));
      if (!a._owner) throw Error(c(290, e));
    }
    return e;
  }
  function kn(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        c(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Zl(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Jl(e) {
    function t(_, h) {
      if (e) {
        var k = _.deletions;
        k === null ? ((_.deletions = [h]), (_.flags |= 16)) : k.push(h);
      }
    }
    function a(_, h) {
      if (!e) return null;
      for (; h !== null; ) t(_, h), (h = h.sibling);
      return null;
    }
    function r(_, h) {
      for (_ = new Map(); h !== null; )
        h.key !== null ? _.set(h.key, h) : _.set(h.index, h), (h = h.sibling);
      return _;
    }
    function n(_, h) {
      return (_ = Gt(_, h)), (_.index = 0), (_.sibling = null), _;
    }
    function o(_, h, k) {
      return (
        (_.index = k),
        e
          ? ((k = _.alternate),
            k !== null
              ? ((k = k.index), k < h ? ((_.flags |= 2), h) : k)
              : ((_.flags |= 2), h))
          : ((_.flags |= 1048576), h)
      );
    }
    function l(_) {
      return e && _.alternate === null && (_.flags |= 2), _;
    }
    function d(_, h, k, L) {
      return h === null || h.tag !== 6
        ? ((h = Ys(k, _.mode, L)), (h.return = _), h)
        : ((h = n(h, k)), (h.return = _), h);
    }
    function p(_, h, k, L) {
      var W = k.type;
      return W === he
        ? P(_, h, k.props.children, L, k.key)
        : h !== null &&
          (h.elementType === W ||
            (typeof W == "object" &&
              W !== null &&
              W.$$typeof === Ue &&
              Zl(W) === h.type))
        ? ((L = n(h, k.props)), (L.ref = gr(_, h, k)), (L.return = _), L)
        : ((L = An(k.type, k.key, k.props, null, _.mode, L)),
          (L.ref = gr(_, h, k)),
          (L.return = _),
          L);
    }
    function w(_, h, k, L) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== k.containerInfo ||
        h.stateNode.implementation !== k.implementation
        ? ((h = Xs(k, _.mode, L)), (h.return = _), h)
        : ((h = n(h, k.children || [])), (h.return = _), h);
    }
    function P(_, h, k, L, W) {
      return h === null || h.tag !== 7
        ? ((h = pa(k, _.mode, L, W)), (h.return = _), h)
        : ((h = n(h, k)), (h.return = _), h);
    }
    function N(_, h, k) {
      if ((typeof h == "string" && h !== "") || typeof h == "number")
        return (h = Ys("" + h, _.mode, k)), (h.return = _), h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case le:
            return (
              (k = An(h.type, h.key, h.props, null, _.mode, k)),
              (k.ref = gr(_, null, h)),
              (k.return = _),
              k
            );
          case me:
            return (h = Xs(h, _.mode, k)), (h.return = _), h;
          case Ue:
            var L = h._init;
            return N(_, L(h._payload), k);
        }
        if (Va(h) || Y(h))
          return (h = pa(h, _.mode, k, null)), (h.return = _), h;
        kn(_, h);
      }
      return null;
    }
    function E(_, h, k, L) {
      var W = h !== null ? h.key : null;
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return W !== null ? null : d(_, h, "" + k, L);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case le:
            return k.key === W ? p(_, h, k, L) : null;
          case me:
            return k.key === W ? w(_, h, k, L) : null;
          case Ue:
            return (W = k._init), E(_, h, W(k._payload), L);
        }
        if (Va(k) || Y(k)) return W !== null ? null : P(_, h, k, L, null);
        kn(_, k);
      }
      return null;
    }
    function $(_, h, k, L, W) {
      if ((typeof L == "string" && L !== "") || typeof L == "number")
        return (_ = _.get(k) || null), d(h, _, "" + L, W);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case le:
            return (
              (_ = _.get(L.key === null ? k : L.key) || null), p(h, _, L, W)
            );
          case me:
            return (
              (_ = _.get(L.key === null ? k : L.key) || null), w(h, _, L, W)
            );
          case Ue:
            var Q = L._init;
            return $(_, h, k, Q(L._payload), W);
        }
        if (Va(L) || Y(L)) return (_ = _.get(k) || null), P(h, _, L, W, null);
        kn(h, L);
      }
      return null;
    }
    function H(_, h, k, L) {
      for (
        var W = null, Q = null, K = h, X = (h = 0), Le = null;
        K !== null && X < k.length;
        X++
      ) {
        K.index > X ? ((Le = K), (K = null)) : (Le = K.sibling);
        var oe = E(_, K, k[X], L);
        if (oe === null) {
          K === null && (K = Le);
          break;
        }
        e && K && oe.alternate === null && t(_, K),
          (h = o(oe, h, X)),
          Q === null ? (W = oe) : (Q.sibling = oe),
          (Q = oe),
          (K = Le);
      }
      if (X === k.length) return a(_, K), ye && oa(_, X), W;
      if (K === null) {
        for (; X < k.length; X++)
          (K = N(_, k[X], L)),
            K !== null &&
              ((h = o(K, h, X)),
              Q === null ? (W = K) : (Q.sibling = K),
              (Q = K));
        return ye && oa(_, X), W;
      }
      for (K = r(_, K); X < k.length; X++)
        (Le = $(K, _, X, k[X], L)),
          Le !== null &&
            (e &&
              Le.alternate !== null &&
              K.delete(Le.key === null ? X : Le.key),
            (h = o(Le, h, X)),
            Q === null ? (W = Le) : (Q.sibling = Le),
            (Q = Le));
      return (
        e &&
          K.forEach(function (Zt) {
            return t(_, Zt);
          }),
        ye && oa(_, X),
        W
      );
    }
    function V(_, h, k, L) {
      var W = Y(k);
      if (typeof W != "function") throw Error(c(150));
      if (((k = W.call(k)), k == null)) throw Error(c(151));
      for (
        var Q = (W = null), K = h, X = (h = 0), Le = null, oe = k.next();
        K !== null && !oe.done;
        X++, oe = k.next()
      ) {
        K.index > X ? ((Le = K), (K = null)) : (Le = K.sibling);
        var Zt = E(_, K, oe.value, L);
        if (Zt === null) {
          K === null && (K = Le);
          break;
        }
        e && K && Zt.alternate === null && t(_, K),
          (h = o(Zt, h, X)),
          Q === null ? (W = Zt) : (Q.sibling = Zt),
          (Q = Zt),
          (K = Le);
      }
      if (oe.done) return a(_, K), ye && oa(_, X), W;
      if (K === null) {
        for (; !oe.done; X++, oe = k.next())
          (oe = N(_, oe.value, L)),
            oe !== null &&
              ((h = o(oe, h, X)),
              Q === null ? (W = oe) : (Q.sibling = oe),
              (Q = oe));
        return ye && oa(_, X), W;
      }
      for (K = r(_, K); !oe.done; X++, oe = k.next())
        (oe = $(K, _, X, oe.value, L)),
          oe !== null &&
            (e &&
              oe.alternate !== null &&
              K.delete(oe.key === null ? X : oe.key),
            (h = o(oe, h, X)),
            Q === null ? (W = oe) : (Q.sibling = oe),
            (Q = oe));
      return (
        e &&
          K.forEach(function (yp) {
            return t(_, yp);
          }),
        ye && oa(_, X),
        W
      );
    }
    function xe(_, h, k, L) {
      if (
        (typeof k == "object" &&
          k !== null &&
          k.type === he &&
          k.key === null &&
          (k = k.props.children),
        typeof k == "object" && k !== null)
      ) {
        switch (k.$$typeof) {
          case le:
            e: {
              for (var W = k.key, Q = h; Q !== null; ) {
                if (Q.key === W) {
                  if (((W = k.type), W === he)) {
                    if (Q.tag === 7) {
                      a(_, Q.sibling),
                        (h = n(Q, k.props.children)),
                        (h.return = _),
                        (_ = h);
                      break e;
                    }
                  } else if (
                    Q.elementType === W ||
                    (typeof W == "object" &&
                      W !== null &&
                      W.$$typeof === Ue &&
                      Zl(W) === Q.type)
                  ) {
                    a(_, Q.sibling),
                      (h = n(Q, k.props)),
                      (h.ref = gr(_, Q, k)),
                      (h.return = _),
                      (_ = h);
                    break e;
                  }
                  a(_, Q);
                  break;
                } else t(_, Q);
                Q = Q.sibling;
              }
              k.type === he
                ? ((h = pa(k.props.children, _.mode, L, k.key)),
                  (h.return = _),
                  (_ = h))
                : ((L = An(k.type, k.key, k.props, null, _.mode, L)),
                  (L.ref = gr(_, h, k)),
                  (L.return = _),
                  (_ = L));
            }
            return l(_);
          case me:
            e: {
              for (Q = k.key; h !== null; ) {
                if (h.key === Q)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === k.containerInfo &&
                    h.stateNode.implementation === k.implementation
                  ) {
                    a(_, h.sibling),
                      (h = n(h, k.children || [])),
                      (h.return = _),
                      (_ = h);
                    break e;
                  } else {
                    a(_, h);
                    break;
                  }
                else t(_, h);
                h = h.sibling;
              }
              (h = Xs(k, _.mode, L)), (h.return = _), (_ = h);
            }
            return l(_);
          case Ue:
            return (Q = k._init), xe(_, h, Q(k._payload), L);
        }
        if (Va(k)) return H(_, h, k, L);
        if (Y(k)) return V(_, h, k, L);
        kn(_, k);
      }
      return (typeof k == "string" && k !== "") || typeof k == "number"
        ? ((k = "" + k),
          h !== null && h.tag === 6
            ? (a(_, h.sibling), (h = n(h, k)), (h.return = _), (_ = h))
            : (a(_, h), (h = Ys(k, _.mode, L)), (h.return = _), (_ = h)),
          l(_))
        : a(_, h);
    }
    return xe;
  }
  var Ta = Jl(!0),
    ei = Jl(!1),
    mn = Ut(null),
    wn = null,
    Oa = null,
    os = null;
  function ss() {
    os = Oa = wn = null;
  }
  function cs(e) {
    var t = mn.current;
    de(mn), (e._currentValue = t);
  }
  function ls(e, t, a) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function qa(e, t) {
    (wn = e),
      (os = Oa = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (He = !0), (e.firstContext = null));
  }
  function at(e) {
    var t = e._currentValue;
    if (os !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Oa === null)) {
        if (wn === null) throw Error(c(308));
        (Oa = e), (wn.dependencies = { lanes: 0, firstContext: e });
      } else Oa = Oa.next = e;
    return t;
  }
  var sa = null;
  function is(e) {
    sa === null ? (sa = [e]) : sa.push(e);
  }
  function ti(e, t, a, r) {
    var n = t.interleaved;
    return (
      n === null ? ((a.next = a), is(t)) : ((a.next = n.next), (n.next = a)),
      (t.interleaved = a),
      Ct(e, r)
    );
  }
  function Ct(e, t) {
    e.lanes |= t;
    var a = e.alternate;
    for (a !== null && (a.lanes |= t), a = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (a = e.alternate),
        a !== null && (a.childLanes |= t),
        (a = e),
        (e = e.return);
    return a.tag === 3 ? a.stateNode : null;
  }
  var Ht = !1;
  function us(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function ai(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Pt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Vt(e, t, a) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ae & 2)) {
      var n = r.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (r.pending = t),
        Ct(e, a)
      );
    }
    return (
      (n = r.interleaved),
      n === null ? ((t.next = t), is(r)) : ((t.next = n.next), (n.next = t)),
      (r.interleaved = t),
      Ct(e, a)
    );
  }
  function vn(e, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (a |= r), (t.lanes = a), xo(e, a);
    }
  }
  function ri(e, t) {
    var a = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), a === r)) {
      var n = null,
        o = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var l = {
            eventTime: a.eventTime,
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          };
          o === null ? (n = o = l) : (o = o.next = l), (a = a.next);
        } while (a !== null);
        o === null ? (n = o = t) : (o = o.next = t);
      } else n = o = t;
      (a = {
        baseState: r.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = a);
      return;
    }
    (e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = t) : (e.next = t),
      (a.lastBaseUpdate = t);
  }
  function zn(e, t, a, r) {
    var n = e.updateQueue;
    Ht = !1;
    var o = n.firstBaseUpdate,
      l = n.lastBaseUpdate,
      d = n.shared.pending;
    if (d !== null) {
      n.shared.pending = null;
      var p = d,
        w = p.next;
      (p.next = null), l === null ? (o = w) : (l.next = w), (l = p);
      var P = e.alternate;
      P !== null &&
        ((P = P.updateQueue),
        (d = P.lastBaseUpdate),
        d !== l &&
          (d === null ? (P.firstBaseUpdate = w) : (d.next = w),
          (P.lastBaseUpdate = p)));
    }
    if (o !== null) {
      var N = n.baseState;
      (l = 0), (P = w = p = null), (d = o);
      do {
        var E = d.lane,
          $ = d.eventTime;
        if ((r & E) === E) {
          P !== null &&
            (P = P.next =
              {
                eventTime: $,
                lane: 0,
                tag: d.tag,
                payload: d.payload,
                callback: d.callback,
                next: null,
              });
          e: {
            var H = e,
              V = d;
            switch (((E = t), ($ = a), V.tag)) {
              case 1:
                if (((H = V.payload), typeof H == "function")) {
                  N = H.call($, N, E);
                  break e;
                }
                N = H;
                break e;
              case 3:
                H.flags = (H.flags & -65537) | 128;
              case 0:
                if (
                  ((H = V.payload),
                  (E = typeof H == "function" ? H.call($, N, E) : H),
                  E == null)
                )
                  break e;
                N = B({}, N, E);
                break e;
              case 2:
                Ht = !0;
            }
          }
          d.callback !== null &&
            d.lane !== 0 &&
            ((e.flags |= 64),
            (E = n.effects),
            E === null ? (n.effects = [d]) : E.push(d));
        } else
          ($ = {
            eventTime: $,
            lane: E,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null,
          }),
            P === null ? ((w = P = $), (p = N)) : (P = P.next = $),
            (l |= E);
        if (((d = d.next), d === null)) {
          if (((d = n.shared.pending), d === null)) break;
          (E = d),
            (d = E.next),
            (E.next = null),
            (n.lastBaseUpdate = E),
            (n.shared.pending = null);
        }
      } while (!0);
      if (
        (P === null && (p = N),
        (n.baseState = p),
        (n.firstBaseUpdate = w),
        (n.lastBaseUpdate = P),
        (t = n.shared.interleaved),
        t !== null)
      ) {
        n = t;
        do (l |= n.lane), (n = n.next);
        while (n !== t);
      } else o === null && (n.shared.lanes = 0);
      (ia |= l), (e.lanes = l), (e.memoizedState = N);
    }
  }
  function ni(e, t, a) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          n = r.callback;
        if (n !== null) {
          if (((r.callback = null), (r = a), typeof n != "function"))
            throw Error(c(191, n));
          n.call(r);
        }
      }
  }
  var _r = {},
    mt = Ut(_r),
    kr = Ut(_r),
    mr = Ut(_r);
  function ca(e) {
    if (e === _r) throw Error(c(174));
    return e;
  }
  function fs(e, t) {
    switch ((ue(mr, t), ue(kr, e), ue(mt, _r), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : fo(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = fo(t, e));
    }
    de(mt), ue(mt, t);
  }
  function Ia() {
    de(mt), de(kr), de(mr);
  }
  function oi(e) {
    ca(mr.current);
    var t = ca(mt.current),
      a = fo(t, e.type);
    t !== a && (ue(kr, e), ue(mt, a));
  }
  function ds(e) {
    kr.current === e && (de(mt), de(kr));
  }
  var ge = Ut(0);
  function bn(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || a.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var ps = [];
  function ys() {
    for (var e = 0; e < ps.length; e++)
      ps[e]._workInProgressVersionPrimary = null;
    ps.length = 0;
  }
  var xn = te.ReactCurrentDispatcher,
    hs = te.ReactCurrentBatchConfig,
    la = 0,
    _e = null,
    Ee = null,
    Ne = null,
    jn = !1,
    wr = !1,
    vr = 0,
    Id = 0;
  function Ie() {
    throw Error(c(321));
  }
  function gs(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!lt(e[a], t[a])) return !1;
    return !0;
  }
  function _s(e, t, a, r, n, o) {
    if (
      ((la = o),
      (_e = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (xn.current = e === null || e.memoizedState === null ? $d : Ud),
      (e = a(r, n)),
      wr)
    ) {
      o = 0;
      do {
        if (((wr = !1), (vr = 0), 25 <= o)) throw Error(c(301));
        (o += 1),
          (Ne = Ee = null),
          (t.updateQueue = null),
          (xn.current = Ad),
          (e = a(r, n));
      } while (wr);
    }
    if (
      ((xn.current = Cn),
      (t = Ee !== null && Ee.next !== null),
      (la = 0),
      (Ne = Ee = _e = null),
      (jn = !1),
      t)
    )
      throw Error(c(300));
    return e;
  }
  function ks() {
    var e = vr !== 0;
    return (vr = 0), e;
  }
  function wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ne === null ? (_e.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne;
  }
  function rt() {
    if (Ee === null) {
      var e = _e.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ee.next;
    var t = Ne === null ? _e.memoizedState : Ne.next;
    if (t !== null) (Ne = t), (Ee = e);
    else {
      if (e === null) throw Error(c(310));
      (Ee = e),
        (e = {
          memoizedState: Ee.memoizedState,
          baseState: Ee.baseState,
          baseQueue: Ee.baseQueue,
          queue: Ee.queue,
          next: null,
        }),
        Ne === null ? (_e.memoizedState = Ne = e) : (Ne = Ne.next = e);
    }
    return Ne;
  }
  function zr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ms(e) {
    var t = rt(),
      a = t.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = e;
    var r = Ee,
      n = r.baseQueue,
      o = a.pending;
    if (o !== null) {
      if (n !== null) {
        var l = n.next;
        (n.next = o.next), (o.next = l);
      }
      (r.baseQueue = n = o), (a.pending = null);
    }
    if (n !== null) {
      (o = n.next), (r = r.baseState);
      var d = (l = null),
        p = null,
        w = o;
      do {
        var P = w.lane;
        if ((la & P) === P)
          p !== null &&
            (p = p.next =
              {
                lane: 0,
                action: w.action,
                hasEagerState: w.hasEagerState,
                eagerState: w.eagerState,
                next: null,
              }),
            (r = w.hasEagerState ? w.eagerState : e(r, w.action));
        else {
          var N = {
            lane: P,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null,
          };
          p === null ? ((d = p = N), (l = r)) : (p = p.next = N),
            (_e.lanes |= P),
            (ia |= P);
        }
        w = w.next;
      } while (w !== null && w !== o);
      p === null ? (l = r) : (p.next = d),
        lt(r, t.memoizedState) || (He = !0),
        (t.memoizedState = r),
        (t.baseState = l),
        (t.baseQueue = p),
        (a.lastRenderedState = r);
    }
    if (((e = a.interleaved), e !== null)) {
      n = e;
      do (o = n.lane), (_e.lanes |= o), (ia |= o), (n = n.next);
      while (n !== e);
    } else n === null && (a.lanes = 0);
    return [t.memoizedState, a.dispatch];
  }
  function ws(e) {
    var t = rt(),
      a = t.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = e;
    var r = a.dispatch,
      n = a.pending,
      o = t.memoizedState;
    if (n !== null) {
      a.pending = null;
      var l = (n = n.next);
      do (o = e(o, l.action)), (l = l.next);
      while (l !== n);
      lt(o, t.memoizedState) || (He = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (a.lastRenderedState = o);
    }
    return [o, r];
  }
  function si() {}
  function ci(e, t) {
    var a = _e,
      r = rt(),
      n = t(),
      o = !lt(r.memoizedState, n);
    if (
      (o && ((r.memoizedState = n), (He = !0)),
      (r = r.queue),
      vs(ui.bind(null, a, r, e), [e]),
      r.getSnapshot !== t || o || (Ne !== null && Ne.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        br(9, ii.bind(null, a, r, n, t), void 0, null),
        Re === null)
      )
        throw Error(c(349));
      la & 30 || li(a, t, n);
    }
    return n;
  }
  function li(e, t, a) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: a }),
      (t = _e.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (_e.updateQueue = t),
          (t.stores = [e]))
        : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e));
  }
  function ii(e, t, a, r) {
    (t.value = a), (t.getSnapshot = r), fi(t) && di(e);
  }
  function ui(e, t, a) {
    return a(function () {
      fi(t) && di(e);
    });
  }
  function fi(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !lt(e, a);
    } catch {
      return !0;
    }
  }
  function di(e) {
    var t = Ct(e, 1);
    t !== null && pt(t, e, 1, -1);
  }
  function pi(e) {
    var t = wt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Fd.bind(null, _e, e)),
      [t.memoizedState, e]
    );
  }
  function br(e, t, a, r) {
    return (
      (e = { tag: e, create: t, destroy: a, deps: r, next: null }),
      (t = _e.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (_e.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((a = t.lastEffect),
          a === null
            ? (t.lastEffect = e.next = e)
            : ((r = a.next), (a.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function yi() {
    return rt().memoizedState;
  }
  function Sn(e, t, a, r) {
    var n = wt();
    (_e.flags |= e),
      (n.memoizedState = br(1 | t, a, void 0, r === void 0 ? null : r));
  }
  function En(e, t, a, r) {
    var n = rt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ee !== null) {
      var l = Ee.memoizedState;
      if (((o = l.destroy), r !== null && gs(r, l.deps))) {
        n.memoizedState = br(t, a, o, r);
        return;
      }
    }
    (_e.flags |= e), (n.memoizedState = br(1 | t, a, o, r));
  }
  function hi(e, t) {
    return Sn(8390656, 8, e, t);
  }
  function vs(e, t) {
    return En(2048, 8, e, t);
  }
  function gi(e, t) {
    return En(4, 2, e, t);
  }
  function _i(e, t) {
    return En(4, 4, e, t);
  }
  function ki(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function mi(e, t, a) {
    return (
      (a = a != null ? a.concat([e]) : null), En(4, 4, ki.bind(null, t, e), a)
    );
  }
  function zs() {}
  function wi(e, t) {
    var a = rt();
    t = t === void 0 ? null : t;
    var r = a.memoizedState;
    return r !== null && t !== null && gs(t, r[1])
      ? r[0]
      : ((a.memoizedState = [e, t]), e);
  }
  function vi(e, t) {
    var a = rt();
    t = t === void 0 ? null : t;
    var r = a.memoizedState;
    return r !== null && t !== null && gs(t, r[1])
      ? r[0]
      : ((e = e()), (a.memoizedState = [e, t]), e);
  }
  function zi(e, t, a) {
    return la & 21
      ? (lt(a, t) ||
          ((a = Zc()), (_e.lanes |= a), (ia |= a), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (He = !0)), (e.memoizedState = a));
  }
  function Dd(e, t) {
    var a = ce;
    (ce = a !== 0 && 4 > a ? a : 4), e(!0);
    var r = hs.transition;
    hs.transition = {};
    try {
      e(!1), t();
    } finally {
      (ce = a), (hs.transition = r);
    }
  }
  function bi() {
    return rt().memoizedState;
  }
  function Md(e, t, a) {
    var r = Yt(e);
    if (
      ((a = {
        lane: r,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      xi(e))
    )
      ji(t, a);
    else if (((a = ti(e, t, a, r)), a !== null)) {
      var n = $e();
      pt(a, e, r, n), Si(a, t, r);
    }
  }
  function Fd(e, t, a) {
    var r = Yt(e),
      n = {
        lane: r,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (xi(e)) ji(t, n);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var l = t.lastRenderedState,
            d = o(l, a);
          if (((n.hasEagerState = !0), (n.eagerState = d), lt(d, l))) {
            var p = t.interleaved;
            p === null
              ? ((n.next = n), is(t))
              : ((n.next = p.next), (p.next = n)),
              (t.interleaved = n);
            return;
          }
        } catch {
        } finally {
        }
      (a = ti(e, t, n, r)),
        a !== null && ((n = $e()), pt(a, e, r, n), Si(a, t, r));
    }
  }
  function xi(e) {
    var t = e.alternate;
    return e === _e || (t !== null && t === _e);
  }
  function ji(e, t) {
    wr = jn = !0;
    var a = e.pending;
    a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (e.pending = t);
  }
  function Si(e, t, a) {
    if (a & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (a |= r), (t.lanes = a), xo(e, a);
    }
  }
  var Cn = {
      readContext: at,
      useCallback: Ie,
      useContext: Ie,
      useEffect: Ie,
      useImperativeHandle: Ie,
      useInsertionEffect: Ie,
      useLayoutEffect: Ie,
      useMemo: Ie,
      useReducer: Ie,
      useRef: Ie,
      useState: Ie,
      useDebugValue: Ie,
      useDeferredValue: Ie,
      useTransition: Ie,
      useMutableSource: Ie,
      useSyncExternalStore: Ie,
      useId: Ie,
      unstable_isNewReconciler: !1,
    },
    $d = {
      readContext: at,
      useCallback: function (e, t) {
        return (wt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: at,
      useEffect: hi,
      useImperativeHandle: function (e, t, a) {
        return (
          (a = a != null ? a.concat([e]) : null),
          Sn(4194308, 4, ki.bind(null, t, e), a)
        );
      },
      useLayoutEffect: function (e, t) {
        return Sn(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Sn(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var a = wt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (a.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, a) {
        var r = wt();
        return (
          (t = a !== void 0 ? a(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Md.bind(null, _e, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = wt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: pi,
      useDebugValue: zs,
      useDeferredValue: function (e) {
        return (wt().memoizedState = e);
      },
      useTransition: function () {
        var e = pi(!1),
          t = e[0];
        return (e = Dd.bind(null, e[1])), (wt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, a) {
        var r = _e,
          n = wt();
        if (ye) {
          if (a === void 0) throw Error(c(407));
          a = a();
        } else {
          if (((a = t()), Re === null)) throw Error(c(349));
          la & 30 || li(r, t, a);
        }
        n.memoizedState = a;
        var o = { value: a, getSnapshot: t };
        return (
          (n.queue = o),
          hi(ui.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          br(9, ii.bind(null, r, o, a, t), void 0, null),
          a
        );
      },
      useId: function () {
        var e = wt(),
          t = Re.identifierPrefix;
        if (ye) {
          var a = Et,
            r = St;
          (a = (r & ~(1 << (32 - ct(r) - 1))).toString(32) + a),
            (t = ":" + t + "R" + a),
            (a = vr++),
            0 < a && (t += "H" + a.toString(32)),
            (t += ":");
        } else (a = Id++), (t = ":" + t + "r" + a.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Ud = {
      readContext: at,
      useCallback: wi,
      useContext: at,
      useEffect: vs,
      useImperativeHandle: mi,
      useInsertionEffect: gi,
      useLayoutEffect: _i,
      useMemo: vi,
      useReducer: ms,
      useRef: yi,
      useState: function () {
        return ms(zr);
      },
      useDebugValue: zs,
      useDeferredValue: function (e) {
        var t = rt();
        return zi(t, Ee.memoizedState, e);
      },
      useTransition: function () {
        var e = ms(zr)[0],
          t = rt().memoizedState;
        return [e, t];
      },
      useMutableSource: si,
      useSyncExternalStore: ci,
      useId: bi,
      unstable_isNewReconciler: !1,
    },
    Ad = {
      readContext: at,
      useCallback: wi,
      useContext: at,
      useEffect: vs,
      useImperativeHandle: mi,
      useInsertionEffect: gi,
      useLayoutEffect: _i,
      useMemo: vi,
      useReducer: ws,
      useRef: yi,
      useState: function () {
        return ws(zr);
      },
      useDebugValue: zs,
      useDeferredValue: function (e) {
        var t = rt();
        return Ee === null ? (t.memoizedState = e) : zi(t, Ee.memoizedState, e);
      },
      useTransition: function () {
        var e = ws(zr)[0],
          t = rt().memoizedState;
        return [e, t];
      },
      useMutableSource: si,
      useSyncExternalStore: ci,
      useId: bi,
      unstable_isNewReconciler: !1,
    };
  function ut(e, t) {
    if (e && e.defaultProps) {
      (t = B({}, t)), (e = e.defaultProps);
      for (var a in e) t[a] === void 0 && (t[a] = e[a]);
      return t;
    }
    return t;
  }
  function bs(e, t, a, r) {
    (t = e.memoizedState),
      (a = a(r, t)),
      (a = a == null ? t : B({}, t, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Pn = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ta(e) === e : !1;
    },
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals;
      var r = $e(),
        n = Yt(e),
        o = Pt(r, n);
      (o.payload = t),
        a != null && (o.callback = a),
        (t = Vt(e, o, n)),
        t !== null && (pt(t, e, n, r), vn(t, e, n));
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals;
      var r = $e(),
        n = Yt(e),
        o = Pt(r, n);
      (o.tag = 1),
        (o.payload = t),
        a != null && (o.callback = a),
        (t = Vt(e, o, n)),
        t !== null && (pt(t, e, n, r), vn(t, e, n));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var a = $e(),
        r = Yt(e),
        n = Pt(a, r);
      (n.tag = 2),
        t != null && (n.callback = t),
        (t = Vt(e, n, r)),
        t !== null && (pt(t, e, r, a), vn(t, e, r));
    },
  };
  function Ei(e, t, a, r, n, o, l) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, l)
        : t.prototype && t.prototype.isPureReactComponent
        ? !ir(a, r) || !ir(n, o)
        : !0
    );
  }
  function Ci(e, t, a) {
    var r = !1,
      n = At,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = at(o))
        : ((n = Be(t) ? ra : qe.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Pa(e, n) : At)),
      (t = new t(a, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Pn),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = n),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Pi(e, t, a, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, r),
      t.state !== e && Pn.enqueueReplaceState(t, t.state, null);
  }
  function xs(e, t, a, r) {
    var n = e.stateNode;
    (n.props = a), (n.state = e.memoizedState), (n.refs = {}), us(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (n.context = at(o))
      : ((o = Be(t) ? ra : qe.current), (n.context = Pa(e, o))),
      (n.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (bs(e, t, o, a), (n.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function" ||
        (typeof n.UNSAFE_componentWillMount != "function" &&
          typeof n.componentWillMount != "function") ||
        ((t = n.state),
        typeof n.componentWillMount == "function" && n.componentWillMount(),
        typeof n.UNSAFE_componentWillMount == "function" &&
          n.UNSAFE_componentWillMount(),
        t !== n.state && Pn.enqueueReplaceState(n, n.state, null),
        zn(e, a, n, r),
        (n.state = e.memoizedState)),
      typeof n.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Da(e, t) {
    try {
      var a = "",
        r = t;
      do (a += re(r)), (r = r.return);
      while (r);
      var n = a;
    } catch (o) {
      n =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: n, digest: null };
  }
  function js(e, t, a) {
    return { value: e, source: null, stack: a ?? null, digest: t ?? null };
  }
  function Ss(e, t) {
    try {
      console.error(t.value);
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  var Bd = typeof WeakMap == "function" ? WeakMap : Map;
  function Ni(e, t, a) {
    (a = Pt(-1, a)), (a.tag = 3), (a.payload = { element: null });
    var r = t.value;
    return (
      (a.callback = function () {
        In || ((In = !0), (Us = r)), Ss(e, t);
      }),
      a
    );
  }
  function Ri(e, t, a) {
    (a = Pt(-1, a)), (a.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var n = t.value;
      (a.payload = function () {
        return r(n);
      }),
        (a.callback = function () {
          Ss(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (a.callback = function () {
          Ss(e, t),
            typeof r != "function" &&
              (Qt === null ? (Qt = new Set([this])) : Qt.add(this));
          var l = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : "",
          });
        }),
      a
    );
  }
  function Li(e, t, a) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Bd();
      var n = new Set();
      r.set(t, n);
    } else (n = r.get(t)), n === void 0 && ((n = new Set()), r.set(t, n));
    n.has(a) || (n.add(a), (e = rp.bind(null, e, t, a)), t.then(e, e));
  }
  function Ti(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Oi(e, t, a, r, n) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = n), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (a.flags |= 131072),
            (a.flags &= -52805),
            a.tag === 1 &&
              (a.alternate === null
                ? (a.tag = 17)
                : ((t = Pt(-1, 1)), (t.tag = 2), Vt(a, t, 1))),
            (a.lanes |= 1)),
        e);
  }
  var Hd = te.ReactCurrentOwner,
    He = !1;
  function Fe(e, t, a, r) {
    t.child = e === null ? ei(t, null, a, r) : Ta(t, e.child, a, r);
  }
  function qi(e, t, a, r, n) {
    a = a.render;
    var o = t.ref;
    return (
      qa(t, n),
      (r = _s(e, t, a, r, o, n)),
      (a = ks()),
      e !== null && !He
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~n),
          Nt(e, t, n))
        : (ye && a && es(t), (t.flags |= 1), Fe(e, t, r, n), t.child)
    );
  }
  function Ii(e, t, a, r, n) {
    if (e === null) {
      var o = a.type;
      return typeof o == "function" &&
        !Ks(o) &&
        o.defaultProps === void 0 &&
        a.compare === null &&
        a.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Di(e, t, o, r, n))
        : ((e = An(a.type, null, r, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !(e.lanes & n))) {
      var l = o.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : ir), a(l, r) && e.ref === t.ref)
      )
        return Nt(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = Gt(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Di(e, t, a, r, n) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (ir(o, r) && e.ref === t.ref)
        if (((He = !1), (t.pendingProps = r = o), (e.lanes & n) !== 0))
          e.flags & 131072 && (He = !0);
        else return (t.lanes = e.lanes), Nt(e, t, n);
    }
    return Es(e, t, a, r, n);
  }
  function Mi(e, t, a) {
    var r = t.pendingProps,
      n = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ue(Fa, Je),
          (Je |= a);
      else {
        if (!(a & 1073741824))
          return (
            (e = o !== null ? o.baseLanes | a : a),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ue(Fa, Je),
            (Je |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : a),
          ue(Fa, Je),
          (Je |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | a), (t.memoizedState = null)) : (r = a),
        ue(Fa, Je),
        (Je |= r);
    return Fe(e, t, n, a), t.child;
  }
  function Fi(e, t) {
    var a = t.ref;
    ((e === null && a !== null) || (e !== null && e.ref !== a)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Es(e, t, a, r, n) {
    var o = Be(a) ? ra : qe.current;
    return (
      (o = Pa(t, o)),
      qa(t, n),
      (a = _s(e, t, a, r, o, n)),
      (r = ks()),
      e !== null && !He
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~n),
          Nt(e, t, n))
        : (ye && r && es(t), (t.flags |= 1), Fe(e, t, a, n), t.child)
    );
  }
  function $i(e, t, a, r, n) {
    if (Be(a)) {
      var o = !0;
      pn(t);
    } else o = !1;
    if ((qa(t, n), t.stateNode === null))
      Rn(e, t), Ci(t, a, r), xs(t, a, r, n), (r = !0);
    else if (e === null) {
      var l = t.stateNode,
        d = t.memoizedProps;
      l.props = d;
      var p = l.context,
        w = a.contextType;
      typeof w == "object" && w !== null
        ? (w = at(w))
        : ((w = Be(a) ? ra : qe.current), (w = Pa(t, w)));
      var P = a.getDerivedStateFromProps,
        N =
          typeof P == "function" ||
          typeof l.getSnapshotBeforeUpdate == "function";
      N ||
        (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
          typeof l.componentWillReceiveProps != "function") ||
        ((d !== r || p !== w) && Pi(t, l, r, w)),
        (Ht = !1);
      var E = t.memoizedState;
      (l.state = E),
        zn(t, r, l, n),
        (p = t.memoizedState),
        d !== r || E !== p || Ae.current || Ht
          ? (typeof P == "function" && (bs(t, a, P, r), (p = t.memoizedState)),
            (d = Ht || Ei(t, a, d, r, E, p, w))
              ? (N ||
                  (typeof l.UNSAFE_componentWillMount != "function" &&
                    typeof l.componentWillMount != "function") ||
                  (typeof l.componentWillMount == "function" &&
                    l.componentWillMount(),
                  typeof l.UNSAFE_componentWillMount == "function" &&
                    l.UNSAFE_componentWillMount()),
                typeof l.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof l.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (l.props = r),
            (l.state = p),
            (l.context = w),
            (r = d))
          : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (l = t.stateNode),
        ai(e, t),
        (d = t.memoizedProps),
        (w = t.type === t.elementType ? d : ut(t.type, d)),
        (l.props = w),
        (N = t.pendingProps),
        (E = l.context),
        (p = a.contextType),
        typeof p == "object" && p !== null
          ? (p = at(p))
          : ((p = Be(a) ? ra : qe.current), (p = Pa(t, p)));
      var $ = a.getDerivedStateFromProps;
      (P =
        typeof $ == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function") ||
        (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
          typeof l.componentWillReceiveProps != "function") ||
        ((d !== N || E !== p) && Pi(t, l, r, p)),
        (Ht = !1),
        (E = t.memoizedState),
        (l.state = E),
        zn(t, r, l, n);
      var H = t.memoizedState;
      d !== N || E !== H || Ae.current || Ht
        ? (typeof $ == "function" && (bs(t, a, $, r), (H = t.memoizedState)),
          (w = Ht || Ei(t, a, w, r, E, H, p) || !1)
            ? (P ||
                (typeof l.UNSAFE_componentWillUpdate != "function" &&
                  typeof l.componentWillUpdate != "function") ||
                (typeof l.componentWillUpdate == "function" &&
                  l.componentWillUpdate(r, H, p),
                typeof l.UNSAFE_componentWillUpdate == "function" &&
                  l.UNSAFE_componentWillUpdate(r, H, p)),
              typeof l.componentDidUpdate == "function" && (t.flags |= 4),
              typeof l.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof l.componentDidUpdate != "function" ||
                (d === e.memoizedProps && E === e.memoizedState) ||
                (t.flags |= 4),
              typeof l.getSnapshotBeforeUpdate != "function" ||
                (d === e.memoizedProps && E === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = H)),
          (l.props = r),
          (l.state = H),
          (l.context = p),
          (r = w))
        : (typeof l.componentDidUpdate != "function" ||
            (d === e.memoizedProps && E === e.memoizedState) ||
            (t.flags |= 4),
          typeof l.getSnapshotBeforeUpdate != "function" ||
            (d === e.memoizedProps && E === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Cs(e, t, a, r, o, n);
  }
  function Cs(e, t, a, r, n, o) {
    Fi(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l) return n && Vl(t, a, !1), Nt(e, t, o);
    (r = t.stateNode), (Hd.current = t);
    var d =
      l && typeof a.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && l
        ? ((t.child = Ta(t, e.child, null, o)), (t.child = Ta(t, null, d, o)))
        : Fe(e, t, d, o),
      (t.memoizedState = r.state),
      n && Vl(t, a, !0),
      t.child
    );
  }
  function Ui(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Bl(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Bl(e, t.context, !1),
      fs(e, t.containerInfo);
  }
  function Ai(e, t, a, r, n) {
    return La(), ns(n), (t.flags |= 256), Fe(e, t, a, r), t.child;
  }
  var Ps = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ns(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Bi(e, t, a) {
    var r = t.pendingProps,
      n = ge.current,
      o = !1,
      l = (t.flags & 128) !== 0,
      d;
    if (
      ((d = l) ||
        (d = e !== null && e.memoizedState === null ? !1 : (n & 2) !== 0),
      d
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (n |= 1),
      ue(ge, n & 1),
      e === null)
    )
      return (
        rs(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((l = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (l = { mode: "hidden", children: l }),
                !(r & 1) && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = l))
                  : (o = Bn(l, r, 0, null)),
                (e = pa(e, r, a, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = Ns(a)),
                (t.memoizedState = Ps),
                e)
              : Rs(t, l))
      );
    if (((n = e.memoizedState), n !== null && ((d = n.dehydrated), d !== null)))
      return Vd(e, t, l, r, d, n, a);
    if (o) {
      (o = r.fallback), (l = t.mode), (n = e.child), (d = n.sibling);
      var p = { mode: "hidden", children: r.children };
      return (
        !(l & 1) && t.child !== n
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = p),
            (t.deletions = null))
          : ((r = Gt(n, p)), (r.subtreeFlags = n.subtreeFlags & 14680064)),
        d !== null ? (o = Gt(d, o)) : ((o = pa(o, l, a, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (l = e.child.memoizedState),
        (l =
          l === null
            ? Ns(a)
            : {
                baseLanes: l.baseLanes | a,
                cachePool: null,
                transitions: l.transitions,
              }),
        (o.memoizedState = l),
        (o.childLanes = e.childLanes & ~a),
        (t.memoizedState = Ps),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = Gt(o, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = a),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((a = t.deletions),
        a === null ? ((t.deletions = [e]), (t.flags |= 16)) : a.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Rs(e, t) {
    return (
      (t = Bn({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Nn(e, t, a, r) {
    return (
      r !== null && ns(r),
      Ta(t, e.child, null, a),
      (e = Rs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Vd(e, t, a, r, n, o, l) {
    if (a)
      return t.flags & 256
        ? ((t.flags &= -257), (r = js(Error(c(422)))), Nn(e, t, l, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (n = t.mode),
          (r = Bn({ mode: "visible", children: r.children }, n, 0, null)),
          (o = pa(o, n, l, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && Ta(t, e.child, null, l),
          (t.child.memoizedState = Ns(l)),
          (t.memoizedState = Ps),
          o);
    if (!(t.mode & 1)) return Nn(e, t, l, null);
    if (n.data === "$!") {
      if (((r = n.nextSibling && n.nextSibling.dataset), r)) var d = r.dgst;
      return (
        (r = d), (o = Error(c(419))), (r = js(o, r, void 0)), Nn(e, t, l, r)
      );
    }
    if (((d = (l & e.childLanes) !== 0), He || d)) {
      if (((r = Re), r !== null)) {
        switch (l & -l) {
          case 4:
            n = 2;
            break;
          case 16:
            n = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            n = 32;
            break;
          case 536870912:
            n = 268435456;
            break;
          default:
            n = 0;
        }
        (n = n & (r.suspendedLanes | l) ? 0 : n),
          n !== 0 &&
            n !== o.retryLane &&
            ((o.retryLane = n), Ct(e, n), pt(r, e, n, -1));
      }
      return Qs(), (r = js(Error(c(421)))), Nn(e, t, l, r);
    }
    return n.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = np.bind(null, e)),
        (n._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (Ze = $t(n.nextSibling)),
        (Ge = t),
        (ye = !0),
        (it = null),
        e !== null &&
          ((et[tt++] = St),
          (et[tt++] = Et),
          (et[tt++] = na),
          (St = e.id),
          (Et = e.overflow),
          (na = t)),
        (t = Rs(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Hi(e, t, a) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ls(e.return, t, a);
  }
  function Ls(e, t, a, r, n) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: a,
          tailMode: n,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = a),
        (o.tailMode = n));
  }
  function Vi(e, t, a) {
    var r = t.pendingProps,
      n = r.revealOrder,
      o = r.tail;
    if ((Fe(e, t, r.children, a), (r = ge.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Hi(e, a, t);
          else if (e.tag === 19) Hi(e, a, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((ue(ge, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (n) {
        case "forwards":
          for (a = t.child, n = null; a !== null; )
            (e = a.alternate),
              e !== null && bn(e) === null && (n = a),
              (a = a.sibling);
          (a = n),
            a === null
              ? ((n = t.child), (t.child = null))
              : ((n = a.sibling), (a.sibling = null)),
            Ls(t, !1, n, a, o);
          break;
        case "backwards":
          for (a = null, n = t.child, t.child = null; n !== null; ) {
            if (((e = n.alternate), e !== null && bn(e) === null)) {
              t.child = n;
              break;
            }
            (e = n.sibling), (n.sibling = a), (a = n), (n = e);
          }
          Ls(t, !0, a, null, o);
          break;
        case "together":
          Ls(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Rn(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Nt(e, t, a) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (ia |= t.lanes),
      !(a & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (
        e = t.child, a = Gt(e, e.pendingProps), t.child = a, a.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (a = a.sibling = Gt(e, e.pendingProps)),
          (a.return = t);
      a.sibling = null;
    }
    return t.child;
  }
  function Wd(e, t, a) {
    switch (t.tag) {
      case 3:
        Ui(t), La();
        break;
      case 5:
        oi(t);
        break;
      case 1:
        Be(t.type) && pn(t);
        break;
      case 4:
        fs(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          n = t.memoizedProps.value;
        ue(mn, r._currentValue), (r._currentValue = n);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ue(ge, ge.current & 1), (t.flags |= 128), null)
            : a & t.child.childLanes
            ? Bi(e, t, a)
            : (ue(ge, ge.current & 1),
              (e = Nt(e, t, a)),
              e !== null ? e.sibling : null);
        ue(ge, ge.current & 1);
        break;
      case 19:
        if (((r = (a & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Vi(e, t, a);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          ue(ge, ge.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Mi(e, t, a);
    }
    return Nt(e, t, a);
  }
  var Wi, Ts, Qi, Ki;
  (Wi = function (e, t) {
    for (var a = t.child; a !== null; ) {
      if (a.tag === 5 || a.tag === 6) e.appendChild(a.stateNode);
      else if (a.tag !== 4 && a.child !== null) {
        (a.child.return = a), (a = a.child);
        continue;
      }
      if (a === t) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === t) return;
        a = a.return;
      }
      (a.sibling.return = a.return), (a = a.sibling);
    }
  }),
    (Ts = function () {}),
    (Qi = function (e, t, a, r) {
      var n = e.memoizedProps;
      if (n !== r) {
        (e = t.stateNode), ca(mt.current);
        var o = null;
        switch (a) {
          case "input":
            (n = co(e, n)), (r = co(e, r)), (o = []);
            break;
          case "select":
            (n = B({}, n, { value: void 0 })),
              (r = B({}, r, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (n = uo(e, n)), (r = uo(e, r)), (o = []);
            break;
          default:
            typeof n.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = un);
        }
        po(a, r);
        var l;
        a = null;
        for (w in n)
          if (!r.hasOwnProperty(w) && n.hasOwnProperty(w) && n[w] != null)
            if (w === "style") {
              var d = n[w];
              for (l in d) d.hasOwnProperty(l) && (a || (a = {}), (a[l] = ""));
            } else
              w !== "dangerouslySetInnerHTML" &&
                w !== "children" &&
                w !== "suppressContentEditableWarning" &&
                w !== "suppressHydrationWarning" &&
                w !== "autoFocus" &&
                (u.hasOwnProperty(w)
                  ? o || (o = [])
                  : (o = o || []).push(w, null));
        for (w in r) {
          var p = r[w];
          if (
            ((d = n != null ? n[w] : void 0),
            r.hasOwnProperty(w) && p !== d && (p != null || d != null))
          )
            if (w === "style")
              if (d) {
                for (l in d)
                  !d.hasOwnProperty(l) ||
                    (p && p.hasOwnProperty(l)) ||
                    (a || (a = {}), (a[l] = ""));
                for (l in p)
                  p.hasOwnProperty(l) &&
                    d[l] !== p[l] &&
                    (a || (a = {}), (a[l] = p[l]));
              } else a || (o || (o = []), o.push(w, a)), (a = p);
            else
              w === "dangerouslySetInnerHTML"
                ? ((p = p ? p.__html : void 0),
                  (d = d ? d.__html : void 0),
                  p != null && d !== p && (o = o || []).push(w, p))
                : w === "children"
                ? (typeof p != "string" && typeof p != "number") ||
                  (o = o || []).push(w, "" + p)
                : w !== "suppressContentEditableWarning" &&
                  w !== "suppressHydrationWarning" &&
                  (u.hasOwnProperty(w)
                    ? (p != null && w === "onScroll" && fe("scroll", e),
                      o || d === p || (o = []))
                    : (o = o || []).push(w, p));
        }
        a && (o = o || []).push("style", a);
        var w = o;
        (t.updateQueue = w) && (t.flags |= 4);
      }
    }),
    (Ki = function (e, t, a, r) {
      a !== r && (t.flags |= 4);
    });
  function xr(e, t) {
    if (!ye)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), (t = t.sibling);
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var r = null; a !== null; )
            a.alternate !== null && (r = a), (a = a.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function De(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      r = 0;
    if (t)
      for (var n = e.child; n !== null; )
        (a |= n.lanes | n.childLanes),
          (r |= n.subtreeFlags & 14680064),
          (r |= n.flags & 14680064),
          (n.return = e),
          (n = n.sibling);
    else
      for (n = e.child; n !== null; )
        (a |= n.lanes | n.childLanes),
          (r |= n.subtreeFlags),
          (r |= n.flags),
          (n.return = e),
          (n = n.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = a), t;
  }
  function Qd(e, t, a) {
    var r = t.pendingProps;
    switch ((ts(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return De(t), null;
      case 1:
        return Be(t.type) && dn(), De(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Ia(),
          de(Ae),
          de(qe),
          ys(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (_n(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), it !== null && (Hs(it), (it = null)))),
          Ts(e, t),
          De(t),
          null
        );
      case 5:
        ds(t);
        var n = ca(mr.current);
        if (((a = t.type), e !== null && t.stateNode != null))
          Qi(e, t, a, r, n),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(c(166));
            return De(t), null;
          }
          if (((e = ca(mt.current)), _n(t))) {
            (r = t.stateNode), (a = t.type);
            var o = t.memoizedProps;
            switch (((r[kt] = t), (r[yr] = o), (e = (t.mode & 1) !== 0), a)) {
              case "dialog":
                fe("cancel", r), fe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", r);
                break;
              case "video":
              case "audio":
                for (n = 0; n < fr.length; n++) fe(fr[n], r);
                break;
              case "source":
                fe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                fe("error", r), fe("load", r);
                break;
              case "details":
                fe("toggle", r);
                break;
              case "input":
                Cc(r, o), fe("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  fe("invalid", r);
                break;
              case "textarea":
                Rc(r, o), fe("invalid", r);
            }
            po(a, o), (n = null);
            for (var l in o)
              if (o.hasOwnProperty(l)) {
                var d = o[l];
                l === "children"
                  ? typeof d == "string"
                    ? r.textContent !== d &&
                      (o.suppressHydrationWarning !== !0 &&
                        ln(r.textContent, d, e),
                      (n = ["children", d]))
                    : typeof d == "number" &&
                      r.textContent !== "" + d &&
                      (o.suppressHydrationWarning !== !0 &&
                        ln(r.textContent, d, e),
                      (n = ["children", "" + d]))
                  : u.hasOwnProperty(l) &&
                    d != null &&
                    l === "onScroll" &&
                    fe("scroll", r);
              }
            switch (a) {
              case "input":
                Fr(r), Nc(r, o, !0);
                break;
              case "textarea":
                Fr(r), Tc(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = un);
            }
            (r = n), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (l = n.nodeType === 9 ? n : n.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Oc(a)),
              e === "http://www.w3.org/1999/xhtml"
                ? a === "script"
                  ? ((e = l.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = l.createElement(a, { is: r.is }))
                  : ((e = l.createElement(a)),
                    a === "select" &&
                      ((l = e),
                      r.multiple
                        ? (l.multiple = !0)
                        : r.size && (l.size = r.size)))
                : (e = l.createElementNS(e, a)),
              (e[kt] = t),
              (e[yr] = r),
              Wi(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((l = yo(a, r)), a)) {
                case "dialog":
                  fe("cancel", e), fe("close", e), (n = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  fe("load", e), (n = r);
                  break;
                case "video":
                case "audio":
                  for (n = 0; n < fr.length; n++) fe(fr[n], e);
                  n = r;
                  break;
                case "source":
                  fe("error", e), (n = r);
                  break;
                case "img":
                case "image":
                case "link":
                  fe("error", e), fe("load", e), (n = r);
                  break;
                case "details":
                  fe("toggle", e), (n = r);
                  break;
                case "input":
                  Cc(e, r), (n = co(e, r)), fe("invalid", e);
                  break;
                case "option":
                  n = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (n = B({}, r, { value: void 0 })),
                    fe("invalid", e);
                  break;
                case "textarea":
                  Rc(e, r), (n = uo(e, r)), fe("invalid", e);
                  break;
                default:
                  n = r;
              }
              po(a, n), (d = n);
              for (o in d)
                if (d.hasOwnProperty(o)) {
                  var p = d[o];
                  o === "style"
                    ? Dc(e, p)
                    : o === "dangerouslySetInnerHTML"
                    ? ((p = p ? p.__html : void 0), p != null && qc(e, p))
                    : o === "children"
                    ? typeof p == "string"
                      ? (a !== "textarea" || p !== "") && Wa(e, p)
                      : typeof p == "number" && Wa(e, "" + p)
                    : o !== "suppressContentEditableWarning" &&
                      o !== "suppressHydrationWarning" &&
                      o !== "autoFocus" &&
                      (u.hasOwnProperty(o)
                        ? p != null && o === "onScroll" && fe("scroll", e)
                        : p != null && G(e, o, p, l));
                }
              switch (a) {
                case "input":
                  Fr(e), Nc(e, r, !1);
                  break;
                case "textarea":
                  Fr(e), Tc(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + se(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? _a(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        _a(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof n.onClick == "function" && (e.onclick = un);
              }
              switch (a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return De(t), null;
      case 6:
        if (e && t.stateNode != null) Ki(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(c(166));
          if (((a = ca(mr.current)), ca(mt.current), _n(t))) {
            if (
              ((r = t.stateNode),
              (a = t.memoizedProps),
              (r[kt] = t),
              (o = r.nodeValue !== a) && ((e = Ge), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ln(r.nodeValue, a, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ln(r.nodeValue, a, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(r)),
              (r[kt] = t),
              (t.stateNode = r);
        }
        return De(t), null;
      case 13:
        if (
          (de(ge),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ye && Ze !== null && t.mode & 1 && !(t.flags & 128))
            Gl(), La(), (t.flags |= 98560), (o = !1);
          else if (((o = _n(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(c(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(c(317));
              o[kt] = t;
            } else
              La(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            De(t), (o = !1);
          } else it !== null && (Hs(it), (it = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = a), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ge.current & 1 ? Ce === 0 && (Ce = 3) : Qs())),
            t.updateQueue !== null && (t.flags |= 4),
            De(t),
            null);
      case 4:
        return (
          Ia(),
          Ts(e, t),
          e === null && dr(t.stateNode.containerInfo),
          De(t),
          null
        );
      case 10:
        return cs(t.type._context), De(t), null;
      case 17:
        return Be(t.type) && dn(), De(t), null;
      case 19:
        if ((de(ge), (o = t.memoizedState), o === null)) return De(t), null;
        if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
          if (r) xr(o, !1);
          else {
            if (Ce !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((l = bn(e)), l !== null)) {
                  for (
                    t.flags |= 128,
                      xr(o, !1),
                      r = l.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = a,
                      a = t.child;
                    a !== null;

                  )
                    (o = a),
                      (e = r),
                      (o.flags &= 14680066),
                      (l = o.alternate),
                      l === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = l.childLanes),
                          (o.lanes = l.lanes),
                          (o.child = l.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = l.memoizedProps),
                          (o.memoizedState = l.memoizedState),
                          (o.updateQueue = l.updateQueue),
                          (o.type = l.type),
                          (e = l.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (a = a.sibling);
                  return ue(ge, (ge.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              be() > $a &&
              ((t.flags |= 128), (r = !0), xr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = bn(l)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (a = e.updateQueue),
                a !== null && ((t.updateQueue = a), (t.flags |= 4)),
                xr(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !l.alternate &&
                  !ye)
              )
                return De(t), null;
            } else
              2 * be() - o.renderingStartTime > $a &&
                a !== 1073741824 &&
                ((t.flags |= 128), (r = !0), xr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((l.sibling = t.child), (t.child = l))
            : ((a = o.last),
              a !== null ? (a.sibling = l) : (t.child = l),
              (o.last = l));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = be()),
            (t.sibling = null),
            (a = ge.current),
            ue(ge, r ? (a & 1) | 2 : a & 1),
            t)
          : (De(t), null);
      case 22:
      case 23:
        return (
          Ws(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? Je & 1073741824 &&
              (De(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : De(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Kd(e, t) {
    switch ((ts(t), t.tag)) {
      case 1:
        return (
          Be(t.type) && dn(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Ia(),
          de(Ae),
          de(qe),
          ys(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return ds(t), null;
      case 13:
        if (
          (de(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(c(340));
          La();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return de(ge), null;
      case 4:
        return Ia(), null;
      case 10:
        return cs(t.type._context), null;
      case 22:
      case 23:
        return Ws(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ln = !1,
    Me = !1,
    Yd = typeof WeakSet == "function" ? WeakSet : Set,
    A = null;
  function Ma(e, t) {
    var a = e.ref;
    if (a !== null)
      if (typeof a == "function")
        try {
          a(null);
        } catch (r) {
          ze(e, t, r);
        }
      else a.current = null;
  }
  function Os(e, t, a) {
    try {
      a();
    } catch (r) {
      ze(e, t, r);
    }
  }
  var Yi = !1;
  function Xd(e, t) {
    if (((Wo = Gr), (e = El()), Mo(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var r = a.getSelection && a.getSelection();
          if (r && r.rangeCount !== 0) {
            a = r.anchorNode;
            var n = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              a.nodeType, o.nodeType;
            } catch {
              a = null;
              break e;
            }
            var l = 0,
              d = -1,
              p = -1,
              w = 0,
              P = 0,
              N = e,
              E = null;
            t: for (;;) {
              for (
                var $;
                N !== a || (n !== 0 && N.nodeType !== 3) || (d = l + n),
                  N !== o || (r !== 0 && N.nodeType !== 3) || (p = l + r),
                  N.nodeType === 3 && (l += N.nodeValue.length),
                  ($ = N.firstChild) !== null;

              )
                (E = N), (N = $);
              for (;;) {
                if (N === e) break t;
                if (
                  (E === a && ++w === n && (d = l),
                  E === o && ++P === r && (p = l),
                  ($ = N.nextSibling) !== null)
                )
                  break;
                (N = E), (E = N.parentNode);
              }
              N = $;
            }
            a = d === -1 || p === -1 ? null : { start: d, end: p };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Qo = { focusedElem: e, selectionRange: a }, Gr = !1, A = t;
      A !== null;

    )
      if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (A = e);
      else
        for (; A !== null; ) {
          t = A;
          try {
            var H = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (H !== null) {
                    var V = H.memoizedProps,
                      xe = H.memoizedState,
                      _ = t.stateNode,
                      h = _.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? V : ut(t.type, V),
                        xe
                      );
                    _.__reactInternalSnapshotBeforeUpdate = h;
                  }
                  break;
                case 3:
                  var k = t.stateNode.containerInfo;
                  k.nodeType === 1
                    ? (k.textContent = "")
                    : k.nodeType === 9 &&
                      k.documentElement &&
                      k.removeChild(k.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(c(163));
              }
          } catch (L) {
            ze(t, t.return, L);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (A = e);
            break;
          }
          A = t.return;
        }
    return (H = Yi), (Yi = !1), H;
  }
  function jr(e, t, a) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var n = (r = r.next);
      do {
        if ((n.tag & e) === e) {
          var o = n.destroy;
          (n.destroy = void 0), o !== void 0 && Os(t, a, o);
        }
        n = n.next;
      } while (n !== r);
    }
  }
  function Tn(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var a = (t = t.next);
      do {
        if ((a.tag & e) === e) {
          var r = a.create;
          a.destroy = r();
        }
        a = a.next;
      } while (a !== t);
    }
  }
  function qs(e) {
    var t = e.ref;
    if (t !== null) {
      var a = e.stateNode;
      switch (e.tag) {
        case 5:
          e = a;
          break;
        default:
          e = a;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Xi(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Xi(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[kt],
          delete t[yr],
          delete t[Go],
          delete t[Ld],
          delete t[Td])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Gi(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Zi(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Gi(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Is(e, t, a) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? a.nodeType === 8
            ? a.parentNode.insertBefore(e, t)
            : a.insertBefore(e, t)
          : (a.nodeType === 8
              ? ((t = a.parentNode), t.insertBefore(e, a))
              : ((t = a), t.appendChild(e)),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = un));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Is(e, t, a), e = e.sibling; e !== null; )
        Is(e, t, a), (e = e.sibling);
  }
  function Ds(e, t, a) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ds(e, t, a), e = e.sibling; e !== null; )
        Ds(e, t, a), (e = e.sibling);
  }
  var Te = null,
    ft = !1;
  function Wt(e, t, a) {
    for (a = a.child; a !== null; ) Ji(e, t, a), (a = a.sibling);
  }
  function Ji(e, t, a) {
    if (_t && typeof _t.onCommitFiberUnmount == "function")
      try {
        _t.onCommitFiberUnmount(Vr, a);
      } catch {}
    switch (a.tag) {
      case 5:
        Me || Ma(a, t);
      case 6:
        var r = Te,
          n = ft;
        (Te = null),
          Wt(e, t, a),
          (Te = r),
          (ft = n),
          Te !== null &&
            (ft
              ? ((e = Te),
                (a = a.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(a)
                  : e.removeChild(a))
              : Te.removeChild(a.stateNode));
        break;
      case 18:
        Te !== null &&
          (ft
            ? ((e = Te),
              (a = a.stateNode),
              e.nodeType === 8
                ? Xo(e.parentNode, a)
                : e.nodeType === 1 && Xo(e, a),
              rr(e))
            : Xo(Te, a.stateNode));
        break;
      case 4:
        (r = Te),
          (n = ft),
          (Te = a.stateNode.containerInfo),
          (ft = !0),
          Wt(e, t, a),
          (Te = r),
          (ft = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Me &&
          ((r = a.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          n = r = r.next;
          do {
            var o = n,
              l = o.destroy;
            (o = o.tag),
              l !== void 0 && (o & 2 || o & 4) && Os(a, t, l),
              (n = n.next);
          } while (n !== r);
        }
        Wt(e, t, a);
        break;
      case 1:
        if (
          !Me &&
          (Ma(a, t),
          (r = a.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = a.memoizedProps),
              (r.state = a.memoizedState),
              r.componentWillUnmount();
          } catch (d) {
            ze(a, t, d);
          }
        Wt(e, t, a);
        break;
      case 21:
        Wt(e, t, a);
        break;
      case 22:
        a.mode & 1
          ? ((Me = (r = Me) || a.memoizedState !== null), Wt(e, t, a), (Me = r))
          : Wt(e, t, a);
        break;
      default:
        Wt(e, t, a);
    }
  }
  function eu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var a = e.stateNode;
      a === null && (a = e.stateNode = new Yd()),
        t.forEach(function (r) {
          var n = op.bind(null, e, r);
          a.has(r) || (a.add(r), r.then(n, n));
        });
    }
  }
  function dt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var r = 0; r < a.length; r++) {
        var n = a[r];
        try {
          var o = e,
            l = t,
            d = l;
          e: for (; d !== null; ) {
            switch (d.tag) {
              case 5:
                (Te = d.stateNode), (ft = !1);
                break e;
              case 3:
                (Te = d.stateNode.containerInfo), (ft = !0);
                break e;
              case 4:
                (Te = d.stateNode.containerInfo), (ft = !0);
                break e;
            }
            d = d.return;
          }
          if (Te === null) throw Error(c(160));
          Ji(o, l, n), (Te = null), (ft = !1);
          var p = n.alternate;
          p !== null && (p.return = null), (n.return = null);
        } catch (w) {
          ze(n, t, w);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) tu(t, e), (t = t.sibling);
  }
  function tu(e, t) {
    var a = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((dt(t, e), vt(e), r & 4)) {
          try {
            jr(3, e, e.return), Tn(3, e);
          } catch (V) {
            ze(e, e.return, V);
          }
          try {
            jr(5, e, e.return);
          } catch (V) {
            ze(e, e.return, V);
          }
        }
        break;
      case 1:
        dt(t, e), vt(e), r & 512 && a !== null && Ma(a, a.return);
        break;
      case 5:
        if (
          (dt(t, e),
          vt(e),
          r & 512 && a !== null && Ma(a, a.return),
          e.flags & 32)
        ) {
          var n = e.stateNode;
          try {
            Wa(n, "");
          } catch (V) {
            ze(e, e.return, V);
          }
        }
        if (r & 4 && ((n = e.stateNode), n != null)) {
          var o = e.memoizedProps,
            l = a !== null ? a.memoizedProps : o,
            d = e.type,
            p = e.updateQueue;
          if (((e.updateQueue = null), p !== null))
            try {
              d === "input" && o.type === "radio" && o.name != null && Pc(n, o),
                yo(d, l);
              var w = yo(d, o);
              for (l = 0; l < p.length; l += 2) {
                var P = p[l],
                  N = p[l + 1];
                P === "style"
                  ? Dc(n, N)
                  : P === "dangerouslySetInnerHTML"
                  ? qc(n, N)
                  : P === "children"
                  ? Wa(n, N)
                  : G(n, P, N, w);
              }
              switch (d) {
                case "input":
                  lo(n, o);
                  break;
                case "textarea":
                  Lc(n, o);
                  break;
                case "select":
                  var E = n._wrapperState.wasMultiple;
                  n._wrapperState.wasMultiple = !!o.multiple;
                  var $ = o.value;
                  $ != null
                    ? _a(n, !!o.multiple, $, !1)
                    : E !== !!o.multiple &&
                      (o.defaultValue != null
                        ? _a(n, !!o.multiple, o.defaultValue, !0)
                        : _a(n, !!o.multiple, o.multiple ? [] : "", !1));
              }
              n[yr] = o;
            } catch (V) {
              ze(e, e.return, V);
            }
        }
        break;
      case 6:
        if ((dt(t, e), vt(e), r & 4)) {
          if (e.stateNode === null) throw Error(c(162));
          (n = e.stateNode), (o = e.memoizedProps);
          try {
            n.nodeValue = o;
          } catch (V) {
            ze(e, e.return, V);
          }
        }
        break;
      case 3:
        if (
          (dt(t, e), vt(e), r & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            rr(t.containerInfo);
          } catch (V) {
            ze(e, e.return, V);
          }
        break;
      case 4:
        dt(t, e), vt(e);
        break;
      case 13:
        dt(t, e),
          vt(e),
          (n = e.child),
          n.flags & 8192 &&
            ((o = n.memoizedState !== null),
            (n.stateNode.isHidden = o),
            !o ||
              (n.alternate !== null && n.alternate.memoizedState !== null) ||
              ($s = be())),
          r & 4 && eu(e);
        break;
      case 22:
        if (
          ((P = a !== null && a.memoizedState !== null),
          e.mode & 1 ? ((Me = (w = Me) || P), dt(t, e), (Me = w)) : dt(t, e),
          vt(e),
          r & 8192)
        ) {
          if (
            ((w = e.memoizedState !== null),
            (e.stateNode.isHidden = w) && !P && e.mode & 1)
          )
            for (A = e, P = e.child; P !== null; ) {
              for (N = A = P; A !== null; ) {
                switch (((E = A), ($ = E.child), E.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    jr(4, E, E.return);
                    break;
                  case 1:
                    Ma(E, E.return);
                    var H = E.stateNode;
                    if (typeof H.componentWillUnmount == "function") {
                      (r = E), (a = E.return);
                      try {
                        (t = r),
                          (H.props = t.memoizedProps),
                          (H.state = t.memoizedState),
                          H.componentWillUnmount();
                      } catch (V) {
                        ze(r, a, V);
                      }
                    }
                    break;
                  case 5:
                    Ma(E, E.return);
                    break;
                  case 22:
                    if (E.memoizedState !== null) {
                      nu(N);
                      continue;
                    }
                }
                $ !== null ? (($.return = E), (A = $)) : nu(N);
              }
              P = P.sibling;
            }
          e: for (P = null, N = e; ; ) {
            if (N.tag === 5) {
              if (P === null) {
                P = N;
                try {
                  (n = N.stateNode),
                    w
                      ? ((o = n.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((d = N.stateNode),
                        (p = N.memoizedProps.style),
                        (l =
                          p != null && p.hasOwnProperty("display")
                            ? p.display
                            : null),
                        (d.style.display = Ic("display", l)));
                } catch (V) {
                  ze(e, e.return, V);
                }
              }
            } else if (N.tag === 6) {
              if (P === null)
                try {
                  N.stateNode.nodeValue = w ? "" : N.memoizedProps;
                } catch (V) {
                  ze(e, e.return, V);
                }
            } else if (
              ((N.tag !== 22 && N.tag !== 23) ||
                N.memoizedState === null ||
                N === e) &&
              N.child !== null
            ) {
              (N.child.return = N), (N = N.child);
              continue;
            }
            if (N === e) break e;
            for (; N.sibling === null; ) {
              if (N.return === null || N.return === e) break e;
              P === N && (P = null), (N = N.return);
            }
            P === N && (P = null),
              (N.sibling.return = N.return),
              (N = N.sibling);
          }
        }
        break;
      case 19:
        dt(t, e), vt(e), r & 4 && eu(e);
        break;
      case 21:
        break;
      default:
        dt(t, e), vt(e);
    }
  }
  function vt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var a = e.return; a !== null; ) {
            if (Gi(a)) {
              var r = a;
              break e;
            }
            a = a.return;
          }
          throw Error(c(160));
        }
        switch (r.tag) {
          case 5:
            var n = r.stateNode;
            r.flags & 32 && (Wa(n, ""), (r.flags &= -33));
            var o = Zi(e);
            Ds(e, o, n);
            break;
          case 3:
          case 4:
            var l = r.stateNode.containerInfo,
              d = Zi(e);
            Is(e, d, l);
            break;
          default:
            throw Error(c(161));
        }
      } catch (p) {
        ze(e, e.return, p);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Gd(e, t, a) {
    (A = e), au(e);
  }
  function au(e, t, a) {
    for (var r = (e.mode & 1) !== 0; A !== null; ) {
      var n = A,
        o = n.child;
      if (n.tag === 22 && r) {
        var l = n.memoizedState !== null || Ln;
        if (!l) {
          var d = n.alternate,
            p = (d !== null && d.memoizedState !== null) || Me;
          d = Ln;
          var w = Me;
          if (((Ln = l), (Me = p) && !w))
            for (A = n; A !== null; )
              (l = A),
                (p = l.child),
                l.tag === 22 && l.memoizedState !== null
                  ? ou(n)
                  : p !== null
                  ? ((p.return = l), (A = p))
                  : ou(n);
          for (; o !== null; ) (A = o), au(o), (o = o.sibling);
          (A = n), (Ln = d), (Me = w);
        }
        ru(e);
      } else
        n.subtreeFlags & 8772 && o !== null ? ((o.return = n), (A = o)) : ru(e);
    }
  }
  function ru(e) {
    for (; A !== null; ) {
      var t = A;
      if (t.flags & 8772) {
        var a = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Me || Tn(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Me)
                  if (a === null) r.componentDidMount();
                  else {
                    var n =
                      t.elementType === t.type
                        ? a.memoizedProps
                        : ut(t.type, a.memoizedProps);
                    r.componentDidUpdate(
                      n,
                      a.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                o !== null && ni(t, o, r);
                break;
              case 3:
                var l = t.updateQueue;
                if (l !== null) {
                  if (((a = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        a = t.child.stateNode;
                        break;
                      case 1:
                        a = t.child.stateNode;
                    }
                  ni(t, l, a);
                }
                break;
              case 5:
                var d = t.stateNode;
                if (a === null && t.flags & 4) {
                  a = d;
                  var p = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      p.autoFocus && a.focus();
                      break;
                    case "img":
                      p.src && (a.src = p.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var w = t.alternate;
                  if (w !== null) {
                    var P = w.memoizedState;
                    if (P !== null) {
                      var N = P.dehydrated;
                      N !== null && rr(N);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(c(163));
            }
          Me || (t.flags & 512 && qs(t));
        } catch (E) {
          ze(t, t.return, E);
        }
      }
      if (t === e) {
        A = null;
        break;
      }
      if (((a = t.sibling), a !== null)) {
        (a.return = t.return), (A = a);
        break;
      }
      A = t.return;
    }
  }
  function nu(e) {
    for (; A !== null; ) {
      var t = A;
      if (t === e) {
        A = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        (a.return = t.return), (A = a);
        break;
      }
      A = t.return;
    }
  }
  function ou(e) {
    for (; A !== null; ) {
      var t = A;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var a = t.return;
            try {
              Tn(4, t);
            } catch (p) {
              ze(t, a, p);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var n = t.return;
              try {
                r.componentDidMount();
              } catch (p) {
                ze(t, n, p);
              }
            }
            var o = t.return;
            try {
              qs(t);
            } catch (p) {
              ze(t, o, p);
            }
            break;
          case 5:
            var l = t.return;
            try {
              qs(t);
            } catch (p) {
              ze(t, l, p);
            }
        }
      } catch (p) {
        ze(t, t.return, p);
      }
      if (t === e) {
        A = null;
        break;
      }
      var d = t.sibling;
      if (d !== null) {
        (d.return = t.return), (A = d);
        break;
      }
      A = t.return;
    }
  }
  var Zd = Math.ceil,
    On = te.ReactCurrentDispatcher,
    Ms = te.ReactCurrentOwner,
    nt = te.ReactCurrentBatchConfig,
    ae = 0,
    Re = null,
    Se = null,
    Oe = 0,
    Je = 0,
    Fa = Ut(0),
    Ce = 0,
    Sr = null,
    ia = 0,
    qn = 0,
    Fs = 0,
    Er = null,
    Ve = null,
    $s = 0,
    $a = 1 / 0,
    Rt = null,
    In = !1,
    Us = null,
    Qt = null,
    Dn = !1,
    Kt = null,
    Mn = 0,
    Cr = 0,
    As = null,
    Fn = -1,
    $n = 0;
  function $e() {
    return ae & 6 ? be() : Fn !== -1 ? Fn : (Fn = be());
  }
  function Yt(e) {
    return e.mode & 1
      ? ae & 2 && Oe !== 0
        ? Oe & -Oe
        : qd.transition !== null
        ? ($n === 0 && ($n = Zc()), $n)
        : ((e = ce),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : cl(e.type))),
          e)
      : 1;
  }
  function pt(e, t, a, r) {
    if (50 < Cr) throw ((Cr = 0), (As = null), Error(c(185)));
    Za(e, a, r),
      (!(ae & 2) || e !== Re) &&
        (e === Re && (!(ae & 2) && (qn |= a), Ce === 4 && Xt(e, Oe)),
        We(e, r),
        a === 1 &&
          ae === 0 &&
          !(t.mode & 1) &&
          (($a = be() + 500), yn && Bt()));
  }
  function We(e, t) {
    var a = e.callbackNode;
    qf(e, t);
    var r = Kr(e, e === Re ? Oe : 0);
    if (r === 0)
      a !== null && Yc(a), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((a != null && Yc(a), t === 1))
        e.tag === 0 ? Od(cu.bind(null, e)) : Wl(cu.bind(null, e)),
          Nd(function () {
            !(ae & 6) && Bt();
          }),
          (a = null);
      else {
        switch (Jc(r)) {
          case 1:
            a = vo;
            break;
          case 4:
            a = Xc;
            break;
          case 16:
            a = Hr;
            break;
          case 536870912:
            a = Gc;
            break;
          default:
            a = Hr;
        }
        a = hu(a, su.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = a);
    }
  }
  function su(e, t) {
    if (((Fn = -1), ($n = 0), ae & 6)) throw Error(c(327));
    var a = e.callbackNode;
    if (Ua() && e.callbackNode !== a) return null;
    var r = Kr(e, e === Re ? Oe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Un(e, r);
    else {
      t = r;
      var n = ae;
      ae |= 2;
      var o = iu();
      (Re !== e || Oe !== t) && ((Rt = null), ($a = be() + 500), fa(e, t));
      do
        try {
          tp();
          break;
        } catch (d) {
          lu(e, d);
        }
      while (!0);
      ss(),
        (On.current = o),
        (ae = n),
        Se !== null ? (t = 0) : ((Re = null), (Oe = 0), (t = Ce));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((n = zo(e)), n !== 0 && ((r = n), (t = Bs(e, n)))),
        t === 1)
      )
        throw ((a = Sr), fa(e, 0), Xt(e, r), We(e, be()), a);
      if (t === 6) Xt(e, r);
      else {
        if (
          ((n = e.current.alternate),
          !(r & 30) &&
            !Jd(n) &&
            ((t = Un(e, r)),
            t === 2 && ((o = zo(e)), o !== 0 && ((r = o), (t = Bs(e, o)))),
            t === 1))
        )
          throw ((a = Sr), fa(e, 0), Xt(e, r), We(e, be()), a);
        switch (((e.finishedWork = n), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            da(e, Ve, Rt);
            break;
          case 3:
            if (
              (Xt(e, r),
              (r & 130023424) === r && ((t = $s + 500 - be()), 10 < t))
            ) {
              if (Kr(e, 0) !== 0) break;
              if (((n = e.suspendedLanes), (n & r) !== r)) {
                $e(), (e.pingedLanes |= e.suspendedLanes & n);
                break;
              }
              e.timeoutHandle = Yo(da.bind(null, e, Ve, Rt), t);
              break;
            }
            da(e, Ve, Rt);
            break;
          case 4:
            if ((Xt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, n = -1; 0 < r; ) {
              var l = 31 - ct(r);
              (o = 1 << l), (l = t[l]), l > n && (n = l), (r &= ~o);
            }
            if (
              ((r = n),
              (r = be() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * Zd(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Yo(da.bind(null, e, Ve, Rt), r);
              break;
            }
            da(e, Ve, Rt);
            break;
          case 5:
            da(e, Ve, Rt);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return We(e, be()), e.callbackNode === a ? su.bind(null, e) : null;
  }
  function Bs(e, t) {
    var a = Er;
    return (
      e.current.memoizedState.isDehydrated && (fa(e, t).flags |= 256),
      (e = Un(e, t)),
      e !== 2 && ((t = Ve), (Ve = a), t !== null && Hs(t)),
      e
    );
  }
  function Hs(e) {
    Ve === null ? (Ve = e) : Ve.push.apply(Ve, e);
  }
  function Jd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var a = t.updateQueue;
        if (a !== null && ((a = a.stores), a !== null))
          for (var r = 0; r < a.length; r++) {
            var n = a[r],
              o = n.getSnapshot;
            n = n.value;
            try {
              if (!lt(o(), n)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        (a.return = t), (t = a);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Xt(e, t) {
    for (
      t &= ~Fs,
        t &= ~qn,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var a = 31 - ct(t),
        r = 1 << a;
      (e[a] = -1), (t &= ~r);
    }
  }
  function cu(e) {
    if (ae & 6) throw Error(c(327));
    Ua();
    var t = Kr(e, 0);
    if (!(t & 1)) return We(e, be()), null;
    var a = Un(e, t);
    if (e.tag !== 0 && a === 2) {
      var r = zo(e);
      r !== 0 && ((t = r), (a = Bs(e, r)));
    }
    if (a === 1) throw ((a = Sr), fa(e, 0), Xt(e, t), We(e, be()), a);
    if (a === 6) throw Error(c(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      da(e, Ve, Rt),
      We(e, be()),
      null
    );
  }
  function Vs(e, t) {
    var a = ae;
    ae |= 1;
    try {
      return e(t);
    } finally {
      (ae = a), ae === 0 && (($a = be() + 500), yn && Bt());
    }
  }
  function ua(e) {
    Kt !== null && Kt.tag === 0 && !(ae & 6) && Ua();
    var t = ae;
    ae |= 1;
    var a = nt.transition,
      r = ce;
    try {
      if (((nt.transition = null), (ce = 1), e)) return e();
    } finally {
      (ce = r), (nt.transition = a), (ae = t), !(ae & 6) && Bt();
    }
  }
  function Ws() {
    (Je = Fa.current), de(Fa);
  }
  function fa(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var a = e.timeoutHandle;
    if ((a !== -1 && ((e.timeoutHandle = -1), Pd(a)), Se !== null))
      for (a = Se.return; a !== null; ) {
        var r = a;
        switch ((ts(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && dn();
            break;
          case 3:
            Ia(), de(Ae), de(qe), ys();
            break;
          case 5:
            ds(r);
            break;
          case 4:
            Ia();
            break;
          case 13:
            de(ge);
            break;
          case 19:
            de(ge);
            break;
          case 10:
            cs(r.type._context);
            break;
          case 22:
          case 23:
            Ws();
        }
        a = a.return;
      }
    if (
      ((Re = e),
      (Se = e = Gt(e.current, null)),
      (Oe = Je = t),
      (Ce = 0),
      (Sr = null),
      (Fs = qn = ia = 0),
      (Ve = Er = null),
      sa !== null)
    ) {
      for (t = 0; t < sa.length; t++)
        if (((a = sa[t]), (r = a.interleaved), r !== null)) {
          a.interleaved = null;
          var n = r.next,
            o = a.pending;
          if (o !== null) {
            var l = o.next;
            (o.next = n), (r.next = l);
          }
          a.pending = r;
        }
      sa = null;
    }
    return e;
  }
  function lu(e, t) {
    do {
      var a = Se;
      try {
        if ((ss(), (xn.current = Cn), jn)) {
          for (var r = _e.memoizedState; r !== null; ) {
            var n = r.queue;
            n !== null && (n.pending = null), (r = r.next);
          }
          jn = !1;
        }
        if (
          ((la = 0),
          (Ne = Ee = _e = null),
          (wr = !1),
          (vr = 0),
          (Ms.current = null),
          a === null || a.return === null)
        ) {
          (Ce = 1), (Sr = t), (Se = null);
          break;
        }
        e: {
          var o = e,
            l = a.return,
            d = a,
            p = t;
          if (
            ((t = Oe),
            (d.flags |= 32768),
            p !== null && typeof p == "object" && typeof p.then == "function")
          ) {
            var w = p,
              P = d,
              N = P.tag;
            if (!(P.mode & 1) && (N === 0 || N === 11 || N === 15)) {
              var E = P.alternate;
              E
                ? ((P.updateQueue = E.updateQueue),
                  (P.memoizedState = E.memoizedState),
                  (P.lanes = E.lanes))
                : ((P.updateQueue = null), (P.memoizedState = null));
            }
            var $ = Ti(l);
            if ($ !== null) {
              ($.flags &= -257),
                Oi($, l, d, o, t),
                $.mode & 1 && Li(o, w, t),
                (t = $),
                (p = w);
              var H = t.updateQueue;
              if (H === null) {
                var V = new Set();
                V.add(p), (t.updateQueue = V);
              } else H.add(p);
              break e;
            } else {
              if (!(t & 1)) {
                Li(o, w, t), Qs();
                break e;
              }
              p = Error(c(426));
            }
          } else if (ye && d.mode & 1) {
            var xe = Ti(l);
            if (xe !== null) {
              !(xe.flags & 65536) && (xe.flags |= 256),
                Oi(xe, l, d, o, t),
                ns(Da(p, d));
              break e;
            }
          }
          (o = p = Da(p, d)),
            Ce !== 4 && (Ce = 2),
            Er === null ? (Er = [o]) : Er.push(o),
            (o = l);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var _ = Ni(o, p, t);
                ri(o, _);
                break e;
              case 1:
                d = p;
                var h = o.type,
                  k = o.stateNode;
                if (
                  !(o.flags & 128) &&
                  (typeof h.getDerivedStateFromError == "function" ||
                    (k !== null &&
                      typeof k.componentDidCatch == "function" &&
                      (Qt === null || !Qt.has(k))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var L = Ri(o, d, t);
                  ri(o, L);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        fu(a);
      } catch (W) {
        (t = W), Se === a && a !== null && (Se = a = a.return);
        continue;
      }
      break;
    } while (!0);
  }
  function iu() {
    var e = On.current;
    return (On.current = Cn), e === null ? Cn : e;
  }
  function Qs() {
    (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
      Re === null || (!(ia & 268435455) && !(qn & 268435455)) || Xt(Re, Oe);
  }
  function Un(e, t) {
    var a = ae;
    ae |= 2;
    var r = iu();
    (Re !== e || Oe !== t) && ((Rt = null), fa(e, t));
    do
      try {
        ep();
        break;
      } catch (n) {
        lu(e, n);
      }
    while (!0);
    if ((ss(), (ae = a), (On.current = r), Se !== null)) throw Error(c(261));
    return (Re = null), (Oe = 0), Ce;
  }
  function ep() {
    for (; Se !== null; ) uu(Se);
  }
  function tp() {
    for (; Se !== null && !Sf(); ) uu(Se);
  }
  function uu(e) {
    var t = yu(e.alternate, e, Je);
    (e.memoizedProps = e.pendingProps),
      t === null ? fu(e) : (Se = t),
      (Ms.current = null);
  }
  function fu(e) {
    var t = e;
    do {
      var a = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((a = Kd(a, t)), a !== null)) {
          (a.flags &= 32767), (Se = a);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ce = 6), (Se = null);
          return;
        }
      } else if (((a = Qd(a, t, Je)), a !== null)) {
        Se = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Se = t;
        return;
      }
      Se = t = e;
    } while (t !== null);
    Ce === 0 && (Ce = 5);
  }
  function da(e, t, a) {
    var r = ce,
      n = nt.transition;
    try {
      (nt.transition = null), (ce = 1), ap(e, t, a, r);
    } finally {
      (nt.transition = n), (ce = r);
    }
    return null;
  }
  function ap(e, t, a, r) {
    do Ua();
    while (Kt !== null);
    if (ae & 6) throw Error(c(327));
    a = e.finishedWork;
    var n = e.finishedLanes;
    if (a === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), a === e.current))
      throw Error(c(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = a.lanes | a.childLanes;
    if (
      (If(e, o),
      e === Re && ((Se = Re = null), (Oe = 0)),
      (!(a.subtreeFlags & 2064) && !(a.flags & 2064)) ||
        Dn ||
        ((Dn = !0),
        hu(Hr, function () {
          return Ua(), null;
        })),
      (o = (a.flags & 15990) !== 0),
      a.subtreeFlags & 15990 || o)
    ) {
      (o = nt.transition), (nt.transition = null);
      var l = ce;
      ce = 1;
      var d = ae;
      (ae |= 4),
        (Ms.current = null),
        Xd(e, a),
        tu(a, e),
        zd(Qo),
        (Gr = !!Wo),
        (Qo = Wo = null),
        (e.current = a),
        Gd(a),
        Ef(),
        (ae = d),
        (ce = l),
        (nt.transition = o);
    } else e.current = a;
    if (
      (Dn && ((Dn = !1), (Kt = e), (Mn = n)),
      (o = e.pendingLanes),
      o === 0 && (Qt = null),
      Nf(a.stateNode),
      We(e, be()),
      t !== null)
    )
      for (r = e.onRecoverableError, a = 0; a < t.length; a++)
        (n = t[a]), r(n.value, { componentStack: n.stack, digest: n.digest });
    if (In) throw ((In = !1), (e = Us), (Us = null), e);
    return (
      Mn & 1 && e.tag !== 0 && Ua(),
      (o = e.pendingLanes),
      o & 1 ? (e === As ? Cr++ : ((Cr = 0), (As = e))) : (Cr = 0),
      Bt(),
      null
    );
  }
  function Ua() {
    if (Kt !== null) {
      var e = Jc(Mn),
        t = nt.transition,
        a = ce;
      try {
        if (((nt.transition = null), (ce = 16 > e ? 16 : e), Kt === null))
          var r = !1;
        else {
          if (((e = Kt), (Kt = null), (Mn = 0), ae & 6)) throw Error(c(331));
          var n = ae;
          for (ae |= 4, A = e.current; A !== null; ) {
            var o = A,
              l = o.child;
            if (A.flags & 16) {
              var d = o.deletions;
              if (d !== null) {
                for (var p = 0; p < d.length; p++) {
                  var w = d[p];
                  for (A = w; A !== null; ) {
                    var P = A;
                    switch (P.tag) {
                      case 0:
                      case 11:
                      case 15:
                        jr(8, P, o);
                    }
                    var N = P.child;
                    if (N !== null) (N.return = P), (A = N);
                    else
                      for (; A !== null; ) {
                        P = A;
                        var E = P.sibling,
                          $ = P.return;
                        if ((Xi(P), P === w)) {
                          A = null;
                          break;
                        }
                        if (E !== null) {
                          (E.return = $), (A = E);
                          break;
                        }
                        A = $;
                      }
                  }
                }
                var H = o.alternate;
                if (H !== null) {
                  var V = H.child;
                  if (V !== null) {
                    H.child = null;
                    do {
                      var xe = V.sibling;
                      (V.sibling = null), (V = xe);
                    } while (V !== null);
                  }
                }
                A = o;
              }
            }
            if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (A = l);
            else
              e: for (; A !== null; ) {
                if (((o = A), o.flags & 2048))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jr(9, o, o.return);
                  }
                var _ = o.sibling;
                if (_ !== null) {
                  (_.return = o.return), (A = _);
                  break e;
                }
                A = o.return;
              }
          }
          var h = e.current;
          for (A = h; A !== null; ) {
            l = A;
            var k = l.child;
            if (l.subtreeFlags & 2064 && k !== null) (k.return = l), (A = k);
            else
              e: for (l = h; A !== null; ) {
                if (((d = A), d.flags & 2048))
                  try {
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Tn(9, d);
                    }
                  } catch (W) {
                    ze(d, d.return, W);
                  }
                if (d === l) {
                  A = null;
                  break e;
                }
                var L = d.sibling;
                if (L !== null) {
                  (L.return = d.return), (A = L);
                  break e;
                }
                A = d.return;
              }
          }
          if (
            ((ae = n),
            Bt(),
            _t && typeof _t.onPostCommitFiberRoot == "function")
          )
            try {
              _t.onPostCommitFiberRoot(Vr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ce = a), (nt.transition = t);
      }
    }
    return !1;
  }
  function du(e, t, a) {
    (t = Da(a, t)),
      (t = Ni(e, t, 1)),
      (e = Vt(e, t, 1)),
      (t = $e()),
      e !== null && (Za(e, 1, t), We(e, t));
  }
  function ze(e, t, a) {
    if (e.tag === 3) du(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          du(t, e, a);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Qt === null || !Qt.has(r)))
          ) {
            (e = Da(a, e)),
              (e = Ri(t, e, 1)),
              (t = Vt(t, e, 1)),
              (e = $e()),
              t !== null && (Za(t, 1, e), We(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function rp(e, t, a) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = $e()),
      (e.pingedLanes |= e.suspendedLanes & a),
      Re === e &&
        (Oe & a) === a &&
        (Ce === 4 || (Ce === 3 && (Oe & 130023424) === Oe && 500 > be() - $s)
          ? fa(e, 0)
          : (Fs |= a)),
      We(e, t);
  }
  function pu(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Qr), (Qr <<= 1), !(Qr & 130023424) && (Qr = 4194304))
        : (t = 1));
    var a = $e();
    (e = Ct(e, t)), e !== null && (Za(e, t, a), We(e, a));
  }
  function np(e) {
    var t = e.memoizedState,
      a = 0;
    t !== null && (a = t.retryLane), pu(e, a);
  }
  function op(e, t) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          n = e.memoizedState;
        n !== null && (a = n.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(c(314));
    }
    r !== null && r.delete(t), pu(e, a);
  }
  var yu;
  yu = function (e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ae.current) He = !0;
      else {
        if (!(e.lanes & a) && !(t.flags & 128)) return (He = !1), Wd(e, t, a);
        He = !!(e.flags & 131072);
      }
    else (He = !1), ye && t.flags & 1048576 && Ql(t, gn, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Rn(e, t), (e = t.pendingProps);
        var n = Pa(t, qe.current);
        qa(t, a), (n = _s(null, t, r, e, n, a));
        var o = ks();
        return (
          (t.flags |= 1),
          typeof n == "object" &&
          n !== null &&
          typeof n.render == "function" &&
          n.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Be(r) ? ((o = !0), pn(t)) : (o = !1),
              (t.memoizedState =
                n.state !== null && n.state !== void 0 ? n.state : null),
              us(t),
              (n.updater = Pn),
              (t.stateNode = n),
              (n._reactInternals = t),
              xs(t, r, e, a),
              (t = Cs(null, t, r, !0, o, a)))
            : ((t.tag = 0), ye && o && es(t), Fe(null, t, n, a), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Rn(e, t),
            (e = t.pendingProps),
            (n = r._init),
            (r = n(r._payload)),
            (t.type = r),
            (n = t.tag = cp(r)),
            (e = ut(r, e)),
            n)
          ) {
            case 0:
              t = Es(null, t, r, e, a);
              break e;
            case 1:
              t = $i(null, t, r, e, a);
              break e;
            case 11:
              t = qi(null, t, r, e, a);
              break e;
            case 14:
              t = Ii(null, t, r, ut(r.type, e), a);
              break e;
          }
          throw Error(c(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (n = t.pendingProps),
          (n = t.elementType === r ? n : ut(r, n)),
          Es(e, t, r, n, a)
        );
      case 1:
        return (
          (r = t.type),
          (n = t.pendingProps),
          (n = t.elementType === r ? n : ut(r, n)),
          $i(e, t, r, n, a)
        );
      case 3:
        e: {
          if ((Ui(t), e === null)) throw Error(c(387));
          (r = t.pendingProps),
            (o = t.memoizedState),
            (n = o.element),
            ai(e, t),
            zn(t, r, null, a);
          var l = t.memoizedState;
          if (((r = l.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: l.cache,
                pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                transitions: l.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (n = Da(Error(c(423)), t)), (t = Ai(e, t, r, a, n));
              break e;
            } else if (r !== n) {
              (n = Da(Error(c(424)), t)), (t = Ai(e, t, r, a, n));
              break e;
            } else
              for (
                Ze = $t(t.stateNode.containerInfo.firstChild),
                  Ge = t,
                  ye = !0,
                  it = null,
                  a = ei(t, null, r, a),
                  t.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
          else {
            if ((La(), r === n)) {
              t = Nt(e, t, a);
              break e;
            }
            Fe(e, t, r, a);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          oi(t),
          e === null && rs(t),
          (r = t.type),
          (n = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (l = n.children),
          Ko(r, n) ? (l = null) : o !== null && Ko(r, o) && (t.flags |= 32),
          Fi(e, t),
          Fe(e, t, l, a),
          t.child
        );
      case 6:
        return e === null && rs(t), null;
      case 13:
        return Bi(e, t, a);
      case 4:
        return (
          fs(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Ta(t, null, r, a)) : Fe(e, t, r, a),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (n = t.pendingProps),
          (n = t.elementType === r ? n : ut(r, n)),
          qi(e, t, r, n, a)
        );
      case 7:
        return Fe(e, t, t.pendingProps, a), t.child;
      case 8:
        return Fe(e, t, t.pendingProps.children, a), t.child;
      case 12:
        return Fe(e, t, t.pendingProps.children, a), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (n = t.pendingProps),
            (o = t.memoizedProps),
            (l = n.value),
            ue(mn, r._currentValue),
            (r._currentValue = l),
            o !== null)
          )
            if (lt(o.value, l)) {
              if (o.children === n.children && !Ae.current) {
                t = Nt(e, t, a);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var d = o.dependencies;
                if (d !== null) {
                  l = o.child;
                  for (var p = d.firstContext; p !== null; ) {
                    if (p.context === r) {
                      if (o.tag === 1) {
                        (p = Pt(-1, a & -a)), (p.tag = 2);
                        var w = o.updateQueue;
                        if (w !== null) {
                          w = w.shared;
                          var P = w.pending;
                          P === null
                            ? (p.next = p)
                            : ((p.next = P.next), (P.next = p)),
                            (w.pending = p);
                        }
                      }
                      (o.lanes |= a),
                        (p = o.alternate),
                        p !== null && (p.lanes |= a),
                        ls(o.return, a, t),
                        (d.lanes |= a);
                      break;
                    }
                    p = p.next;
                  }
                } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((l = o.return), l === null)) throw Error(c(341));
                  (l.lanes |= a),
                    (d = l.alternate),
                    d !== null && (d.lanes |= a),
                    ls(l, a, t),
                    (l = o.sibling);
                } else l = o.child;
                if (l !== null) l.return = o;
                else
                  for (l = o; l !== null; ) {
                    if (l === t) {
                      l = null;
                      break;
                    }
                    if (((o = l.sibling), o !== null)) {
                      (o.return = l.return), (l = o);
                      break;
                    }
                    l = l.return;
                  }
                o = l;
              }
          Fe(e, t, n.children, a), (t = t.child);
        }
        return t;
      case 9:
        return (
          (n = t.type),
          (r = t.pendingProps.children),
          qa(t, a),
          (n = at(n)),
          (r = r(n)),
          (t.flags |= 1),
          Fe(e, t, r, a),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (n = ut(r, t.pendingProps)),
          (n = ut(r.type, n)),
          Ii(e, t, r, n, a)
        );
      case 15:
        return Di(e, t, t.type, t.pendingProps, a);
      case 17:
        return (
          (r = t.type),
          (n = t.pendingProps),
          (n = t.elementType === r ? n : ut(r, n)),
          Rn(e, t),
          (t.tag = 1),
          Be(r) ? ((e = !0), pn(t)) : (e = !1),
          qa(t, a),
          Ci(t, r, n),
          xs(t, r, n, a),
          Cs(null, t, r, !0, e, a)
        );
      case 19:
        return Vi(e, t, a);
      case 22:
        return Mi(e, t, a);
    }
    throw Error(c(156, t.tag));
  };
  function hu(e, t) {
    return Kc(e, t);
  }
  function sp(e, t, a, r) {
    (this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ot(e, t, a, r) {
    return new sp(e, t, a, r);
  }
  function Ks(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function cp(e) {
    if (typeof e == "function") return Ks(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ht)) return 11;
      if (e === gt) return 14;
    }
    return 2;
  }
  function Gt(e, t) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = ot(e.tag, t, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = t),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 14680064),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      a
    );
  }
  function An(e, t, a, r, n, o) {
    var l = 2;
    if (((r = e), typeof e == "function")) Ks(e) && (l = 1);
    else if (typeof e == "string") l = 5;
    else
      e: switch (e) {
        case he:
          return pa(a.children, n, o, t);
        case je:
          (l = 8), (n |= 8);
          break;
        case we:
          return (
            (e = ot(12, a, t, n | 2)), (e.elementType = we), (e.lanes = o), e
          );
        case Ke:
          return (e = ot(13, a, t, n)), (e.elementType = Ke), (e.lanes = o), e;
        case st:
          return (e = ot(19, a, t, n)), (e.elementType = st), (e.lanes = o), e;
        case ve:
          return Bn(a, n, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Pe:
                l = 10;
                break e;
              case yt:
                l = 9;
                break e;
              case ht:
                l = 11;
                break e;
              case gt:
                l = 14;
                break e;
              case Ue:
                (l = 16), (r = null);
                break e;
            }
          throw Error(c(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = ot(l, a, t, n)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function pa(e, t, a, r) {
    return (e = ot(7, e, r, t)), (e.lanes = a), e;
  }
  function Bn(e, t, a, r) {
    return (
      (e = ot(22, e, r, t)),
      (e.elementType = ve),
      (e.lanes = a),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ys(e, t, a) {
    return (e = ot(6, e, null, t)), (e.lanes = a), e;
  }
  function Xs(e, t, a) {
    return (
      (t = ot(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function lp(e, t, a, r, n) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = bo(0)),
      (this.expirationTimes = bo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = bo(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = n),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Gs(e, t, a, r, n, o, l, d, p) {
    return (
      (e = new lp(e, t, a, d, p)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = ot(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: a,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      us(o),
      e
    );
  }
  function ip(e, t, a) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: me,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: a,
    };
  }
  function gu(e) {
    if (!e) return At;
    e = e._reactInternals;
    e: {
      if (ta(e) !== e || e.tag !== 1) throw Error(c(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Be(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(c(171));
    }
    if (e.tag === 1) {
      var a = e.type;
      if (Be(a)) return Hl(e, a, t);
    }
    return t;
  }
  function _u(e, t, a, r, n, o, l, d, p) {
    return (
      (e = Gs(a, r, !0, e, n, o, l, d, p)),
      (e.context = gu(null)),
      (a = e.current),
      (r = $e()),
      (n = Yt(a)),
      (o = Pt(r, n)),
      (o.callback = t ?? null),
      Vt(a, o, n),
      (e.current.lanes = n),
      Za(e, n, r),
      We(e, r),
      e
    );
  }
  function Hn(e, t, a, r) {
    var n = t.current,
      o = $e(),
      l = Yt(n);
    return (
      (a = gu(a)),
      t.context === null ? (t.context = a) : (t.pendingContext = a),
      (t = Pt(o, l)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Vt(n, t, l)),
      e !== null && (pt(e, n, l, o), vn(e, n, l)),
      l
    );
  }
  function Vn(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ku(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Zs(e, t) {
    ku(e, t), (e = e.alternate) && ku(e, t);
  }
  function up() {
    return null;
  }
  var mu =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Js(e) {
    this._internalRoot = e;
  }
  (Wn.prototype.render = Js.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      Hn(e, t, null, null);
    }),
    (Wn.prototype.unmount = Js.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          ua(function () {
            Hn(null, e, null, null);
          }),
            (t[xt] = null);
        }
      });
  function Wn(e) {
    this._internalRoot = e;
  }
  Wn.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = al();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Dt.length && t !== 0 && t < Dt[a].priority; a++);
      Dt.splice(a, 0, e), a === 0 && ol(e);
    }
  };
  function ec(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Qn(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function wu() {}
  function fp(e, t, a, r, n) {
    if (n) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var w = Vn(l);
          o.call(w);
        };
      }
      var l = _u(t, r, e, 0, null, !1, !1, "", wu);
      return (
        (e._reactRootContainer = l),
        (e[xt] = l.current),
        dr(e.nodeType === 8 ? e.parentNode : e),
        ua(),
        l
      );
    }
    for (; (n = e.lastChild); ) e.removeChild(n);
    if (typeof r == "function") {
      var d = r;
      r = function () {
        var w = Vn(p);
        d.call(w);
      };
    }
    var p = Gs(e, 0, !1, null, null, !1, !1, "", wu);
    return (
      (e._reactRootContainer = p),
      (e[xt] = p.current),
      dr(e.nodeType === 8 ? e.parentNode : e),
      ua(function () {
        Hn(t, p, a, r);
      }),
      p
    );
  }
  function Kn(e, t, a, r, n) {
    var o = a._reactRootContainer;
    if (o) {
      var l = o;
      if (typeof n == "function") {
        var d = n;
        n = function () {
          var p = Vn(l);
          d.call(p);
        };
      }
      Hn(t, l, e, n);
    } else l = fp(a, t, e, n, r);
    return Vn(l);
  }
  (el = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var a = Ga(t.pendingLanes);
          a !== 0 &&
            (xo(t, a | 1), We(t, be()), !(ae & 6) && (($a = be() + 500), Bt()));
        }
        break;
      case 13:
        ua(function () {
          var r = Ct(e, 1);
          if (r !== null) {
            var n = $e();
            pt(r, e, 1, n);
          }
        }),
          Zs(e, 1);
    }
  }),
    (jo = function (e) {
      if (e.tag === 13) {
        var t = Ct(e, 134217728);
        if (t !== null) {
          var a = $e();
          pt(t, e, 134217728, a);
        }
        Zs(e, 134217728);
      }
    }),
    (tl = function (e) {
      if (e.tag === 13) {
        var t = Yt(e),
          a = Ct(e, t);
        if (a !== null) {
          var r = $e();
          pt(a, e, t, r);
        }
        Zs(e, t);
      }
    }),
    (al = function () {
      return ce;
    }),
    (rl = function (e, t) {
      var a = ce;
      try {
        return (ce = e), t();
      } finally {
        ce = a;
      }
    }),
    (_o = function (e, t, a) {
      switch (t) {
        case "input":
          if ((lo(e, a), (t = a.name), a.type === "radio" && t != null)) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var r = a[t];
              if (r !== e && r.form === e.form) {
                var n = fn(r);
                if (!n) throw Error(c(90));
                Ec(r), lo(r, n);
              }
            }
          }
          break;
        case "textarea":
          Lc(e, a);
          break;
        case "select":
          (t = a.value), t != null && _a(e, !!a.multiple, t, !1);
      }
    }),
    (Uc = Vs),
    (Ac = ua);
  var dp = { usingClientEntryPoint: !1, Events: [hr, Ea, fn, Fc, $c, Vs] },
    Pr = {
      findFiberByHostInstance: aa,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    pp = {
      bundleType: Pr.bundleType,
      version: Pr.version,
      rendererPackageName: Pr.rendererPackageName,
      rendererConfig: Pr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: te.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Wc(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Pr.findFiberByHostInstance || up,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yn.isDisabled && Yn.supportsFiber)
      try {
        (Vr = Yn.inject(pp)), (_t = Yn);
      } catch {}
  }
  return (
    (Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dp),
    (Qe.createPortal = function (e, t) {
      var a =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ec(t)) throw Error(c(200));
      return ip(e, t, null, a);
    }),
    (Qe.createRoot = function (e, t) {
      if (!ec(e)) throw Error(c(299));
      var a = !1,
        r = "",
        n = mu;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (n = t.onRecoverableError)),
        (t = Gs(e, 1, !1, null, null, a, !1, r, n)),
        (e[xt] = t.current),
        dr(e.nodeType === 8 ? e.parentNode : e),
        new Js(t)
      );
    }),
    (Qe.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(c(188))
          : ((e = Object.keys(e).join(",")), Error(c(268, e)));
      return (e = Wc(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Qe.flushSync = function (e) {
      return ua(e);
    }),
    (Qe.hydrate = function (e, t, a) {
      if (!Qn(t)) throw Error(c(200));
      return Kn(null, e, t, !0, a);
    }),
    (Qe.hydrateRoot = function (e, t, a) {
      if (!ec(e)) throw Error(c(405));
      var r = (a != null && a.hydratedSources) || null,
        n = !1,
        o = "",
        l = mu;
      if (
        (a != null &&
          (a.unstable_strictMode === !0 && (n = !0),
          a.identifierPrefix !== void 0 && (o = a.identifierPrefix),
          a.onRecoverableError !== void 0 && (l = a.onRecoverableError)),
        (t = _u(t, null, e, 1, a ?? null, n, !1, o, l)),
        (e[xt] = t.current),
        dr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (a = r[e]),
            (n = a._getVersion),
            (n = n(a._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [a, n])
              : t.mutableSourceEagerHydrationData.push(a, n);
      return new Wn(t);
    }),
    (Qe.render = function (e, t, a) {
      if (!Qn(t)) throw Error(c(200));
      return Kn(null, e, t, !1, a);
    }),
    (Qe.unmountComponentAtNode = function (e) {
      if (!Qn(e)) throw Error(c(40));
      return e._reactRootContainer
        ? (ua(function () {
            Kn(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[xt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Qe.unstable_batchedUpdates = Vs),
    (Qe.unstable_renderSubtreeIntoContainer = function (e, t, a, r) {
      if (!Qn(a)) throw Error(c(200));
      if (e == null || e._reactInternals === void 0) throw Error(c(38));
      return Kn(e, t, a, !1, r);
    }),
    (Qe.version = "18.3.1-next-f1338f8080-20240426"),
    Qe
  );
}
var Cu;
function vp() {
  if (Cu) return rc.exports;
  Cu = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (i) {
        console.error(i);
      }
  }
  return s(), (rc.exports = wp()), rc.exports;
}
var Pu;
function zp() {
  if (Pu) return Xn;
  Pu = 1;
  var s = vp();
  return (Xn.createRoot = s.createRoot), (Xn.hydrateRoot = s.hydrateRoot), Xn;
}
var bp = zp(),
  Qu = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  gc = ha.createContext && ha.createContext(Qu),
  xp = ["attr", "size", "title"];
function jp(s, i) {
  if (s == null) return {};
  var c = Sp(s, i),
    f,
    u;
  if (Object.getOwnPropertySymbols) {
    var y = Object.getOwnPropertySymbols(s);
    for (u = 0; u < y.length; u++)
      (f = y[u]),
        !(i.indexOf(f) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(s, f) &&
          (c[f] = s[f]);
  }
  return c;
}
function Sp(s, i) {
  if (s == null) return {};
  var c = {};
  for (var f in s)
    if (Object.prototype.hasOwnProperty.call(s, f)) {
      if (i.indexOf(f) >= 0) continue;
      c[f] = s[f];
    }
  return c;
}
function to() {
  return (
    (to = Object.assign
      ? Object.assign.bind()
      : function (s) {
          for (var i = 1; i < arguments.length; i++) {
            var c = arguments[i];
            for (var f in c)
              Object.prototype.hasOwnProperty.call(c, f) && (s[f] = c[f]);
          }
          return s;
        }),
    to.apply(this, arguments)
  );
}
function Nu(s, i) {
  var c = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(s);
    i &&
      (f = f.filter(function (u) {
        return Object.getOwnPropertyDescriptor(s, u).enumerable;
      })),
      c.push.apply(c, f);
  }
  return c;
}
function ao(s) {
  for (var i = 1; i < arguments.length; i++) {
    var c = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? Nu(Object(c), !0).forEach(function (f) {
          Ep(s, f, c[f]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(c))
      : Nu(Object(c)).forEach(function (f) {
          Object.defineProperty(s, f, Object.getOwnPropertyDescriptor(c, f));
        });
  }
  return s;
}
function Ep(s, i, c) {
  return (
    (i = Cp(i)),
    i in s
      ? Object.defineProperty(s, i, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (s[i] = c),
    s
  );
}
function Cp(s) {
  var i = Pp(s, "string");
  return typeof i == "symbol" ? i : i + "";
}
function Pp(s, i) {
  if (typeof s != "object" || !s) return s;
  var c = s[Symbol.toPrimitive];
  if (c !== void 0) {
    var f = c.call(s, i || "default");
    if (typeof f != "object") return f;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(s);
}
function Ku(s) {
  return (
    s &&
    s.map((i, c) =>
      ha.createElement(i.tag, ao({ key: c }, i.attr), Ku(i.child))
    )
  );
}
function Or(s) {
  return (i) =>
    ha.createElement(Np, to({ attr: ao({}, s.attr) }, i), Ku(s.child));
}
function Np(s) {
  var i = (c) => {
    var { attr: f, size: u, title: y } = s,
      v = jp(s, xp),
      b = u || c.size || "1em",
      m;
    return (
      c.className && (m = c.className),
      s.className && (m = (m ? m + " " : "") + s.className),
      ha.createElement(
        "svg",
        to(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          c.attr,
          f,
          v,
          {
            className: m,
            style: ao(ao({ color: s.color || c.color }, c.style), s.style),
            height: b,
            width: b,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        y && ha.createElement("title", null, y),
        s.children
      )
    );
  };
  return gc !== void 0
    ? ha.createElement(gc.Consumer, null, (c) => i(c))
    : i(Qu);
}
var Rr = {},
  Ru;
function Rp() {
  if (Ru) return Rr;
  (Ru = 1),
    Object.defineProperty(Rr, "__esModule", { value: !0 }),
    (Rr.parse = v),
    (Rr.serialize = z);
  const s = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    i = /^[\u0021-\u003A\u003C-\u007E]*$/,
    c =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    f = /^[\u0020-\u003A\u003D-\u007E]*$/,
    u = Object.prototype.toString,
    y = (() => {
      const S = function () {};
      return (S.prototype = Object.create(null)), S;
    })();
  function v(S, F) {
    const T = new y(),
      D = S.length;
    if (D < 2) return T;
    const O = (F == null ? void 0 : F.decode) || R;
    let I = 0;
    do {
      const U = S.indexOf("=", I);
      if (U === -1) break;
      const G = S.indexOf(";", I),
        te = G === -1 ? D : G;
      if (U > te) {
        I = S.lastIndexOf(";", U - 1) + 1;
        continue;
      }
      const le = b(S, I, U),
        me = m(S, U, le),
        he = S.slice(le, me);
      if (T[he] === void 0) {
        let je = b(S, U + 1, te),
          we = m(S, te, je);
        const Pe = O(S.slice(je, we));
        T[he] = Pe;
      }
      I = te + 1;
    } while (I < D);
    return T;
  }
  function b(S, F, T) {
    do {
      const D = S.charCodeAt(F);
      if (D !== 32 && D !== 9) return F;
    } while (++F < T);
    return T;
  }
  function m(S, F, T) {
    for (; F > T; ) {
      const D = S.charCodeAt(--F);
      if (D !== 32 && D !== 9) return F + 1;
    }
    return T;
  }
  function z(S, F, T) {
    const D = (T == null ? void 0 : T.encode) || encodeURIComponent;
    if (!s.test(S)) throw new TypeError(`argument name is invalid: ${S}`);
    const O = D(F);
    if (!i.test(O)) throw new TypeError(`argument val is invalid: ${F}`);
    let I = S + "=" + O;
    if (!T) return I;
    if (T.maxAge !== void 0) {
      if (!Number.isInteger(T.maxAge))
        throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);
      I += "; Max-Age=" + T.maxAge;
    }
    if (T.domain) {
      if (!c.test(T.domain))
        throw new TypeError(`option domain is invalid: ${T.domain}`);
      I += "; Domain=" + T.domain;
    }
    if (T.path) {
      if (!f.test(T.path))
        throw new TypeError(`option path is invalid: ${T.path}`);
      I += "; Path=" + T.path;
    }
    if (T.expires) {
      if (!q(T.expires) || !Number.isFinite(T.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${T.expires}`);
      I += "; Expires=" + T.expires.toUTCString();
    }
    if (
      (T.httpOnly && (I += "; HttpOnly"),
      T.secure && (I += "; Secure"),
      T.partitioned && (I += "; Partitioned"),
      T.priority)
    )
      switch (
        typeof T.priority == "string" ? T.priority.toLowerCase() : void 0
      ) {
        case "low":
          I += "; Priority=Low";
          break;
        case "medium":
          I += "; Priority=Medium";
          break;
        case "high":
          I += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${T.priority}`);
      }
    if (T.sameSite)
      switch (
        typeof T.sameSite == "string" ? T.sameSite.toLowerCase() : T.sameSite
      ) {
        case !0:
        case "strict":
          I += "; SameSite=Strict";
          break;
        case "lax":
          I += "; SameSite=Lax";
          break;
        case "none":
          I += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${T.sameSite}`);
      }
    return I;
  }
  function R(S) {
    if (S.indexOf("%") === -1) return S;
    try {
      return decodeURIComponent(S);
    } catch {
      return S;
    }
  }
  function q(S) {
    return u.call(S) === "[object Date]";
  }
  return Rr;
}
Rp();
/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Lu = "popstate";
function Lp(s = {}) {
  function i(f, u) {
    let { pathname: y, search: v, hash: b } = f.location;
    return _c(
      "",
      { pathname: y, search: v, hash: b },
      (u.state && u.state.usr) || null,
      (u.state && u.state.key) || "default"
    );
  }
  function c(f, u) {
    return typeof u == "string" ? u : Tr(u);
  }
  return Op(i, c, null, s);
}
function ke(s, i) {
  if (s === !1 || s === null || typeof s > "u") throw new Error(i);
}
function zt(s, i) {
  if (!s) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function Tp() {
  return Math.random().toString(36).substring(2, 10);
}
function Tu(s, i) {
  return { usr: s.state, key: s.key, idx: i };
}
function _c(s, i, c = null, f) {
  return {
    pathname: typeof s == "string" ? s : s.pathname,
    search: "",
    hash: "",
    ...(typeof i == "string" ? Ba(i) : i),
    state: c,
    key: (i && i.key) || f || Tp(),
  };
}
function Tr({ pathname: s = "/", search: i = "", hash: c = "" }) {
  return (
    i && i !== "?" && (s += i.charAt(0) === "?" ? i : "?" + i),
    c && c !== "#" && (s += c.charAt(0) === "#" ? c : "#" + c),
    s
  );
}
function Ba(s) {
  let i = {};
  if (s) {
    let c = s.indexOf("#");
    c >= 0 && ((i.hash = s.substring(c)), (s = s.substring(0, c)));
    let f = s.indexOf("?");
    f >= 0 && ((i.search = s.substring(f)), (s = s.substring(0, f))),
      s && (i.pathname = s);
  }
  return i;
}
function Op(s, i, c, f = {}) {
  let { window: u = document.defaultView, v5Compat: y = !1 } = f,
    v = u.history,
    b = "POP",
    m = null,
    z = R();
  z == null && ((z = 0), v.replaceState({ ...v.state, idx: z }, ""));
  function R() {
    return (v.state || { idx: null }).idx;
  }
  function q() {
    b = "POP";
    let O = R(),
      I = O == null ? null : O - z;
    (z = O), m && m({ action: b, location: D.location, delta: I });
  }
  function S(O, I) {
    b = "PUSH";
    let U = _c(D.location, O, I);
    z = R() + 1;
    let G = Tu(U, z),
      te = D.createHref(U);
    try {
      v.pushState(G, "", te);
    } catch (le) {
      if (le instanceof DOMException && le.name === "DataCloneError") throw le;
      u.location.assign(te);
    }
    y && m && m({ action: b, location: D.location, delta: 1 });
  }
  function F(O, I) {
    b = "REPLACE";
    let U = _c(D.location, O, I);
    z = R();
    let G = Tu(U, z),
      te = D.createHref(U);
    v.replaceState(G, "", te),
      y && m && m({ action: b, location: D.location, delta: 0 });
  }
  function T(O) {
    let I = u.location.origin !== "null" ? u.location.origin : u.location.href,
      U = typeof O == "string" ? O : Tr(O);
    return (
      (U = U.replace(/ $/, "%20")),
      ke(
        I,
        `No window.location.(origin|href) available to create URL for href: ${U}`
      ),
      new URL(U, I)
    );
  }
  let D = {
    get action() {
      return b;
    },
    get location() {
      return s(u, v);
    },
    listen(O) {
      if (m) throw new Error("A history only accepts one active listener");
      return (
        u.addEventListener(Lu, q),
        (m = O),
        () => {
          u.removeEventListener(Lu, q), (m = null);
        }
      );
    },
    createHref(O) {
      return i(u, O);
    },
    createURL: T,
    encodeLocation(O) {
      let I = T(O);
      return { pathname: I.pathname, search: I.search, hash: I.hash };
    },
    push: S,
    replace: F,
    go(O) {
      return v.go(O);
    },
  };
  return D;
}
function Yu(s, i, c = "/") {
  return qp(s, i, c, !1);
}
function qp(s, i, c, f) {
  let u = typeof i == "string" ? Ba(i) : i,
    y = ea(u.pathname || "/", c);
  if (y == null) return null;
  let v = Xu(s);
  Ip(v);
  let b = null;
  for (let m = 0; b == null && m < v.length; ++m) {
    let z = Qp(y);
    b = Vp(v[m], z, f);
  }
  return b;
}
function Xu(s, i = [], c = [], f = "") {
  let u = (y, v, b) => {
    let m = {
      relativePath: b === void 0 ? y.path || "" : b,
      caseSensitive: y.caseSensitive === !0,
      childrenIndex: v,
      route: y,
    };
    m.relativePath.startsWith("/") &&
      (ke(
        m.relativePath.startsWith(f),
        `Absolute route path "${m.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (m.relativePath = m.relativePath.slice(f.length)));
    let z = Lt([f, m.relativePath]),
      R = c.concat(m);
    y.children &&
      y.children.length > 0 &&
      (ke(
        y.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${z}".`
      ),
      Xu(y.children, i, R, z)),
      !(y.path == null && !y.index) &&
        i.push({ path: z, score: Bp(z, y.index), routesMeta: R });
  };
  return (
    s.forEach((y, v) => {
      var b;
      if (y.path === "" || !((b = y.path) != null && b.includes("?"))) u(y, v);
      else for (let m of Gu(y.path)) u(y, v, m);
    }),
    i
  );
}
function Gu(s) {
  let i = s.split("/");
  if (i.length === 0) return [];
  let [c, ...f] = i,
    u = c.endsWith("?"),
    y = c.replace(/\?$/, "");
  if (f.length === 0) return u ? [y, ""] : [y];
  let v = Gu(f.join("/")),
    b = [];
  return (
    b.push(...v.map((m) => (m === "" ? y : [y, m].join("/")))),
    u && b.push(...v),
    b.map((m) => (s.startsWith("/") && m === "" ? "/" : m))
  );
}
function Ip(s) {
  s.sort((i, c) =>
    i.score !== c.score
      ? c.score - i.score
      : Hp(
          i.routesMeta.map((f) => f.childrenIndex),
          c.routesMeta.map((f) => f.childrenIndex)
        )
  );
}
var Dp = /^:[\w-]+$/,
  Mp = 3,
  Fp = 2,
  $p = 1,
  Up = 10,
  Ap = -2,
  Ou = (s) => s === "*";
function Bp(s, i) {
  let c = s.split("/"),
    f = c.length;
  return (
    c.some(Ou) && (f += Ap),
    i && (f += Fp),
    c
      .filter((u) => !Ou(u))
      .reduce((u, y) => u + (Dp.test(y) ? Mp : y === "" ? $p : Up), f)
  );
}
function Hp(s, i) {
  return s.length === i.length && s.slice(0, -1).every((f, u) => f === i[u])
    ? s[s.length - 1] - i[i.length - 1]
    : 0;
}
function Vp(s, i, c = !1) {
  let { routesMeta: f } = s,
    u = {},
    y = "/",
    v = [];
  for (let b = 0; b < f.length; ++b) {
    let m = f[b],
      z = b === f.length - 1,
      R = y === "/" ? i : i.slice(y.length) || "/",
      q = ro(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: z },
        R
      ),
      S = m.route;
    if (
      (!q &&
        z &&
        c &&
        !f[f.length - 1].route.index &&
        (q = ro(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          R
        )),
      !q)
    )
      return null;
    Object.assign(u, q.params),
      v.push({
        params: u,
        pathname: Lt([y, q.pathname]),
        pathnameBase: Gp(Lt([y, q.pathnameBase])),
        route: S,
      }),
      q.pathnameBase !== "/" && (y = Lt([y, q.pathnameBase]));
  }
  return v;
}
function ro(s, i) {
  typeof s == "string" && (s = { path: s, caseSensitive: !1, end: !0 });
  let [c, f] = Wp(s.path, s.caseSensitive, s.end),
    u = i.match(c);
  if (!u) return null;
  let y = u[0],
    v = y.replace(/(.)\/+$/, "$1"),
    b = u.slice(1);
  return {
    params: f.reduce((z, { paramName: R, isOptional: q }, S) => {
      if (R === "*") {
        let T = b[S] || "";
        v = y.slice(0, y.length - T.length).replace(/(.)\/+$/, "$1");
      }
      const F = b[S];
      return (
        q && !F ? (z[R] = void 0) : (z[R] = (F || "").replace(/%2F/g, "/")), z
      );
    }, {}),
    pathname: y,
    pathnameBase: v,
    pattern: s,
  };
}
function Wp(s, i = !1, c = !0) {
  zt(
    s === "*" || !s.endsWith("*") || s.endsWith("/*"),
    `Route path "${s}" will be treated as if it were "${s.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let f = [],
    u =
      "^" +
      s
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (v, b, m) => (
            f.push({ paramName: b, isOptional: m != null }),
            m ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    s.endsWith("*")
      ? (f.push({ paramName: "*" }),
        (u += s === "*" || s === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : c
      ? (u += "\\/*$")
      : s !== "" && s !== "/" && (u += "(?:(?=\\/|$))"),
    [new RegExp(u, i ? void 0 : "i"), f]
  );
}
function Qp(s) {
  try {
    return s
      .split("/")
      .map((i) => decodeURIComponent(i).replace(/\//g, "%2F"))
      .join("/");
  } catch (i) {
    return (
      zt(
        !1,
        `The URL path "${s}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`
      ),
      s
    );
  }
}
function ea(s, i) {
  if (i === "/") return s;
  if (!s.toLowerCase().startsWith(i.toLowerCase())) return null;
  let c = i.endsWith("/") ? i.length - 1 : i.length,
    f = s.charAt(c);
  return f && f !== "/" ? null : s.slice(c) || "/";
}
function Kp(s, i = "/") {
  let {
    pathname: c,
    search: f = "",
    hash: u = "",
  } = typeof s == "string" ? Ba(s) : s;
  return {
    pathname: c ? (c.startsWith("/") ? c : Yp(c, i)) : i,
    search: Zp(f),
    hash: Jp(u),
  };
}
function Yp(s, i) {
  let c = i.replace(/\/+$/, "").split("/");
  return (
    s.split("/").forEach((u) => {
      u === ".." ? c.length > 1 && c.pop() : u !== "." && c.push(u);
    }),
    c.length > 1 ? c.join("/") : "/"
  );
}
function sc(s, i, c, f) {
  return `Cannot include a '${s}' character in a manually specified \`to.${i}\` field [${JSON.stringify(
    f
  )}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Xp(s) {
  return s.filter(
    (i, c) => c === 0 || (i.route.path && i.route.path.length > 0)
  );
}
function Zu(s) {
  let i = Xp(s);
  return i.map((c, f) => (f === i.length - 1 ? c.pathname : c.pathnameBase));
}
function Ju(s, i, c, f = !1) {
  let u;
  typeof s == "string"
    ? (u = Ba(s))
    : ((u = { ...s }),
      ke(
        !u.pathname || !u.pathname.includes("?"),
        sc("?", "pathname", "search", u)
      ),
      ke(
        !u.pathname || !u.pathname.includes("#"),
        sc("#", "pathname", "hash", u)
      ),
      ke(!u.search || !u.search.includes("#"), sc("#", "search", "hash", u)));
  let y = s === "" || u.pathname === "",
    v = y ? "/" : u.pathname,
    b;
  if (v == null) b = c;
  else {
    let q = i.length - 1;
    if (!f && v.startsWith("..")) {
      let S = v.split("/");
      for (; S[0] === ".."; ) S.shift(), (q -= 1);
      u.pathname = S.join("/");
    }
    b = q >= 0 ? i[q] : "/";
  }
  let m = Kp(u, b),
    z = v && v !== "/" && v.endsWith("/"),
    R = (y || v === ".") && c.endsWith("/");
  return !m.pathname.endsWith("/") && (z || R) && (m.pathname += "/"), m;
}
var Lt = (s) => s.join("/").replace(/\/\/+/g, "/"),
  Gp = (s) => s.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Zp = (s) => (!s || s === "?" ? "" : s.startsWith("?") ? s : "?" + s),
  Jp = (s) => (!s || s === "#" ? "" : s.startsWith("#") ? s : "#" + s);
function ey(s) {
  return (
    s != null &&
    typeof s.status == "number" &&
    typeof s.statusText == "string" &&
    typeof s.internal == "boolean" &&
    "data" in s
  );
}
var ef = ["POST", "PUT", "PATCH", "DELETE"];
new Set(ef);
var ty = ["GET", ...ef];
new Set(ty);
var Ha = x.createContext(null);
Ha.displayName = "DataRouter";
var no = x.createContext(null);
no.displayName = "DataRouterState";
var tf = x.createContext({ isTransitioning: !1 });
tf.displayName = "ViewTransition";
var ay = x.createContext(new Map());
ay.displayName = "Fetchers";
var ry = x.createContext(null);
ry.displayName = "Await";
var bt = x.createContext(null);
bt.displayName = "Navigation";
var qr = x.createContext(null);
qr.displayName = "Location";
var Tt = x.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Tt.displayName = "Route";
var wc = x.createContext(null);
wc.displayName = "RouteError";
function ny(s, { relative: i } = {}) {
  ke(
    Ir(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: c, navigator: f } = x.useContext(bt),
    { hash: u, pathname: y, search: v } = Mr(s, { relative: i }),
    b = y;
  return (
    c !== "/" && (b = y === "/" ? c : Lt([c, y])),
    f.createHref({ pathname: b, search: v, hash: u })
  );
}
function Ir() {
  return x.useContext(qr) != null;
}
function ga() {
  return (
    ke(
      Ir(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    x.useContext(qr).location
  );
}
var af =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function rf(s) {
  x.useContext(bt).static || x.useLayoutEffect(s);
}
function Dr() {
  let { isDataRoute: s } = x.useContext(Tt);
  return s ? _y() : oy();
}
function oy() {
  ke(
    Ir(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let s = x.useContext(Ha),
    { basename: i, navigator: c } = x.useContext(bt),
    { matches: f } = x.useContext(Tt),
    { pathname: u } = ga(),
    y = JSON.stringify(Zu(f)),
    v = x.useRef(!1);
  return (
    rf(() => {
      v.current = !0;
    }),
    x.useCallback(
      (m, z = {}) => {
        if ((zt(v.current, af), !v.current)) return;
        if (typeof m == "number") {
          c.go(m);
          return;
        }
        let R = Ju(m, JSON.parse(y), u, z.relative === "path");
        s == null &&
          i !== "/" &&
          (R.pathname = R.pathname === "/" ? i : Lt([i, R.pathname])),
          (z.replace ? c.replace : c.push)(R, z.state, z);
      },
      [i, c, y, u, s]
    )
  );
}
x.createContext(null);
function Mr(s, { relative: i } = {}) {
  let { matches: c } = x.useContext(Tt),
    { pathname: f } = ga(),
    u = JSON.stringify(Zu(c));
  return x.useMemo(() => Ju(s, JSON.parse(u), f, i === "path"), [s, u, f, i]);
}
function sy(s, i) {
  return nf(s, i);
}
function nf(s, i, c, f) {
  var I;
  ke(
    Ir(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: u } = x.useContext(bt),
    { matches: y } = x.useContext(Tt),
    v = y[y.length - 1],
    b = v ? v.params : {},
    m = v ? v.pathname : "/",
    z = v ? v.pathnameBase : "/",
    R = v && v.route;
  {
    let U = (R && R.path) || "";
    of(
      m,
      !R || U.endsWith("*") || U.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${
        U === "/" ? "*" : `${U}/*`
      }">.`
    );
  }
  let q = ga(),
    S;
  if (i) {
    let U = typeof i == "string" ? Ba(i) : i;
    ke(
      z === "/" || ((I = U.pathname) == null ? void 0 : I.startsWith(z)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${z}" but pathname "${U.pathname}" was given in the \`location\` prop.`
    ),
      (S = U);
  } else S = q;
  let F = S.pathname || "/",
    T = F;
  if (z !== "/") {
    let U = z.replace(/^\//, "").split("/");
    T = "/" + F.replace(/^\//, "").split("/").slice(U.length).join("/");
  }
  let D = Yu(s, { pathname: T });
  zt(
    R || D != null,
    `No routes matched location "${S.pathname}${S.search}${S.hash}" `
  ),
    zt(
      D == null ||
        D[D.length - 1].route.element !== void 0 ||
        D[D.length - 1].route.Component !== void 0 ||
        D[D.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let O = fy(
    D &&
      D.map((U) =>
        Object.assign({}, U, {
          params: Object.assign({}, b, U.params),
          pathname: Lt([
            z,
            u.encodeLocation
              ? u.encodeLocation(U.pathname).pathname
              : U.pathname,
          ]),
          pathnameBase:
            U.pathnameBase === "/"
              ? z
              : Lt([
                  z,
                  u.encodeLocation
                    ? u.encodeLocation(U.pathnameBase).pathname
                    : U.pathnameBase,
                ]),
        })
      ),
    y,
    c,
    f
  );
  return i && O
    ? x.createElement(
        qr.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...S,
            },
            navigationType: "POP",
          },
        },
        O
      )
    : O;
}
function cy() {
  let s = gy(),
    i = ey(s)
      ? `${s.status} ${s.statusText}`
      : s instanceof Error
      ? s.message
      : JSON.stringify(s),
    c = s instanceof Error ? s.stack : null,
    f = "rgba(200,200,200, 0.5)",
    u = { padding: "0.5rem", backgroundColor: f },
    y = { padding: "2px 4px", backgroundColor: f },
    v = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", s),
    (v = x.createElement(
      x.Fragment,
      null,
      x.createElement("p", null, "💿 Hey developer 👋"),
      x.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        x.createElement("code", { style: y }, "ErrorBoundary"),
        " or",
        " ",
        x.createElement("code", { style: y }, "errorElement"),
        " prop on your route."
      )
    )),
    x.createElement(
      x.Fragment,
      null,
      x.createElement("h2", null, "Unexpected Application Error!"),
      x.createElement("h3", { style: { fontStyle: "italic" } }, i),
      c ? x.createElement("pre", { style: u }, c) : null,
      v
    )
  );
}
var ly = x.createElement(cy, null),
  iy = class extends x.Component {
    constructor(s) {
      super(s),
        (this.state = {
          location: s.location,
          revalidation: s.revalidation,
          error: s.error,
        });
    }
    static getDerivedStateFromError(s) {
      return { error: s };
    }
    static getDerivedStateFromProps(s, i) {
      return i.location !== s.location ||
        (i.revalidation !== "idle" && s.revalidation === "idle")
        ? { error: s.error, location: s.location, revalidation: s.revalidation }
        : {
            error: s.error !== void 0 ? s.error : i.error,
            location: i.location,
            revalidation: s.revalidation || i.revalidation,
          };
    }
    componentDidCatch(s, i) {
      console.error(
        "React Router caught the following error during render",
        s,
        i
      );
    }
    render() {
      return this.state.error !== void 0
        ? x.createElement(
            Tt.Provider,
            { value: this.props.routeContext },
            x.createElement(wc.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function uy({ routeContext: s, match: i, children: c }) {
  let f = x.useContext(Ha);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = i.route.id),
    x.createElement(Tt.Provider, { value: s }, c)
  );
}
function fy(s, i = [], c = null, f = null) {
  if (s == null) {
    if (!c) return null;
    if (c.errors) s = c.matches;
    else if (i.length === 0 && !c.initialized && c.matches.length > 0)
      s = c.matches;
    else return null;
  }
  let u = s,
    y = c == null ? void 0 : c.errors;
  if (y != null) {
    let m = u.findIndex(
      (z) => z.route.id && (y == null ? void 0 : y[z.route.id]) !== void 0
    );
    ke(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        y
      ).join(",")}`
    ),
      (u = u.slice(0, Math.min(u.length, m + 1)));
  }
  let v = !1,
    b = -1;
  if (c)
    for (let m = 0; m < u.length; m++) {
      let z = u[m];
      if (
        ((z.route.HydrateFallback || z.route.hydrateFallbackElement) && (b = m),
        z.route.id)
      ) {
        let { loaderData: R, errors: q } = c,
          S =
            z.route.loader &&
            !R.hasOwnProperty(z.route.id) &&
            (!q || q[z.route.id] === void 0);
        if (z.route.lazy || S) {
          (v = !0), b >= 0 ? (u = u.slice(0, b + 1)) : (u = [u[0]]);
          break;
        }
      }
    }
  return u.reduceRight((m, z, R) => {
    let q,
      S = !1,
      F = null,
      T = null;
    c &&
      ((q = y && z.route.id ? y[z.route.id] : void 0),
      (F = z.route.errorElement || ly),
      v &&
        (b < 0 && R === 0
          ? (of(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (S = !0),
            (T = null))
          : b === R &&
            ((S = !0), (T = z.route.hydrateFallbackElement || null))));
    let D = i.concat(u.slice(0, R + 1)),
      O = () => {
        let I;
        return (
          q
            ? (I = F)
            : S
            ? (I = T)
            : z.route.Component
            ? (I = x.createElement(z.route.Component, null))
            : z.route.element
            ? (I = z.route.element)
            : (I = m),
          x.createElement(uy, {
            match: z,
            routeContext: { outlet: m, matches: D, isDataRoute: c != null },
            children: I,
          })
        );
      };
    return c && (z.route.ErrorBoundary || z.route.errorElement || R === 0)
      ? x.createElement(iy, {
          location: c.location,
          revalidation: c.revalidation,
          component: F,
          error: q,
          children: O(),
          routeContext: { outlet: null, matches: D, isDataRoute: !0 },
        })
      : O();
  }, null);
}
function vc(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function dy(s) {
  let i = x.useContext(Ha);
  return ke(i, vc(s)), i;
}
function py(s) {
  let i = x.useContext(no);
  return ke(i, vc(s)), i;
}
function yy(s) {
  let i = x.useContext(Tt);
  return ke(i, vc(s)), i;
}
function zc(s) {
  let i = yy(s),
    c = i.matches[i.matches.length - 1];
  return (
    ke(
      c.route.id,
      `${s} can only be used on routes that contain a unique "id"`
    ),
    c.route.id
  );
}
function hy() {
  return zc("useRouteId");
}
function gy() {
  var f;
  let s = x.useContext(wc),
    i = py("useRouteError"),
    c = zc("useRouteError");
  return s !== void 0 ? s : (f = i.errors) == null ? void 0 : f[c];
}
function _y() {
  let { router: s } = dy("useNavigate"),
    i = zc("useNavigate"),
    c = x.useRef(!1);
  return (
    rf(() => {
      c.current = !0;
    }),
    x.useCallback(
      async (u, y = {}) => {
        zt(c.current, af),
          c.current &&
            (typeof u == "number"
              ? s.navigate(u)
              : await s.navigate(u, { fromRouteId: i, ...y }));
      },
      [s, i]
    )
  );
}
var qu = {};
function of(s, i, c) {
  !i && !qu[s] && ((qu[s] = !0), zt(!1, c));
}
x.memo(ky);
function ky({ routes: s, future: i, state: c }) {
  return nf(s, void 0, c, i);
}
function Aa(s) {
  ke(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function my({
  basename: s = "/",
  children: i = null,
  location: c,
  navigationType: f = "POP",
  navigator: u,
  static: y = !1,
}) {
  ke(
    !Ir(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let v = s.replace(/^\/*/, "/"),
    b = x.useMemo(
      () => ({ basename: v, navigator: u, static: y, future: {} }),
      [v, u, y]
    );
  typeof c == "string" && (c = Ba(c));
  let {
      pathname: m = "/",
      search: z = "",
      hash: R = "",
      state: q = null,
      key: S = "default",
    } = c,
    F = x.useMemo(() => {
      let T = ea(m, v);
      return T == null
        ? null
        : {
            location: { pathname: T, search: z, hash: R, state: q, key: S },
            navigationType: f,
          };
    }, [v, m, z, R, q, S, f]);
  return (
    zt(
      F != null,
      `<Router basename="${v}"> is not able to match the URL "${m}${z}${R}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    F == null
      ? null
      : x.createElement(
          bt.Provider,
          { value: b },
          x.createElement(qr.Provider, { children: i, value: F })
        )
  );
}
function sf({ children: s, location: i }) {
  return sy(kc(s), i);
}
function kc(s, i = []) {
  let c = [];
  return (
    x.Children.forEach(s, (f, u) => {
      if (!x.isValidElement(f)) return;
      let y = [...i, u];
      if (f.type === x.Fragment) {
        c.push.apply(c, kc(f.props.children, y));
        return;
      }
      ke(
        f.type === Aa,
        `[${
          typeof f.type == "string" ? f.type : f.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        ke(
          !f.props.index || !f.props.children,
          "An index route cannot have child routes."
        );
      let v = {
        id: f.props.id || y.join("-"),
        caseSensitive: f.props.caseSensitive,
        element: f.props.element,
        Component: f.props.Component,
        index: f.props.index,
        path: f.props.path,
        loader: f.props.loader,
        action: f.props.action,
        hydrateFallbackElement: f.props.hydrateFallbackElement,
        HydrateFallback: f.props.HydrateFallback,
        errorElement: f.props.errorElement,
        ErrorBoundary: f.props.ErrorBoundary,
        hasErrorBoundary:
          f.props.hasErrorBoundary === !0 ||
          f.props.ErrorBoundary != null ||
          f.props.errorElement != null,
        shouldRevalidate: f.props.shouldRevalidate,
        handle: f.props.handle,
        lazy: f.props.lazy,
      };
      f.props.children && (v.children = kc(f.props.children, y)), c.push(v);
    }),
    c
  );
}
var Jn = "get",
  eo = "application/x-www-form-urlencoded";
function oo(s) {
  return s != null && typeof s.tagName == "string";
}
function wy(s) {
  return oo(s) && s.tagName.toLowerCase() === "button";
}
function vy(s) {
  return oo(s) && s.tagName.toLowerCase() === "form";
}
function zy(s) {
  return oo(s) && s.tagName.toLowerCase() === "input";
}
function by(s) {
  return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey);
}
function xy(s, i) {
  return s.button === 0 && (!i || i === "_self") && !by(s);
}
var Gn = null;
function jy() {
  if (Gn === null)
    try {
      new FormData(document.createElement("form"), 0), (Gn = !1);
    } catch {
      Gn = !0;
    }
  return Gn;
}
var Sy = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function cc(s) {
  return s != null && !Sy.has(s)
    ? (zt(
        !1,
        `"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${eo}"`
      ),
      null)
    : s;
}
function Ey(s, i) {
  let c, f, u, y, v;
  if (vy(s)) {
    let b = s.getAttribute("action");
    (f = b ? ea(b, i) : null),
      (c = s.getAttribute("method") || Jn),
      (u = cc(s.getAttribute("enctype")) || eo),
      (y = new FormData(s));
  } else if (wy(s) || (zy(s) && (s.type === "submit" || s.type === "image"))) {
    let b = s.form;
    if (b == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let m = s.getAttribute("formaction") || b.getAttribute("action");
    if (
      ((f = m ? ea(m, i) : null),
      (c = s.getAttribute("formmethod") || b.getAttribute("method") || Jn),
      (u =
        cc(s.getAttribute("formenctype")) ||
        cc(b.getAttribute("enctype")) ||
        eo),
      (y = new FormData(b, s)),
      !jy())
    ) {
      let { name: z, type: R, value: q } = s;
      if (R === "image") {
        let S = z ? `${z}.` : "";
        y.append(`${S}x`, "0"), y.append(`${S}y`, "0");
      } else z && y.append(z, q);
    }
  } else {
    if (oo(s))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (c = Jn), (f = null), (u = eo), (v = s);
  }
  return (
    y && u === "text/plain" && ((v = y), (y = void 0)),
    { action: f, method: c.toLowerCase(), encType: u, formData: y, body: v }
  );
}
function bc(s, i) {
  if (s === !1 || s === null || typeof s > "u") throw new Error(i);
}
async function Cy(s, i) {
  if (s.id in i) return i[s.id];
  try {
    let c = await import(s.module);
    return (i[s.id] = c), c;
  } catch (c) {
    return (
      console.error(
        `Error loading route module \`${s.module}\`, reloading page...`
      ),
      console.error(c),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Py(s) {
  return s == null
    ? !1
    : s.href == null
    ? s.rel === "preload" &&
      typeof s.imageSrcSet == "string" &&
      typeof s.imageSizes == "string"
    : typeof s.rel == "string" && typeof s.href == "string";
}
async function Ny(s, i, c) {
  let f = await Promise.all(
    s.map(async (u) => {
      let y = i.routes[u.route.id];
      if (y) {
        let v = await Cy(y, c);
        return v.links ? v.links() : [];
      }
      return [];
    })
  );
  return Oy(
    f
      .flat(1)
      .filter(Py)
      .filter((u) => u.rel === "stylesheet" || u.rel === "preload")
      .map((u) =>
        u.rel === "stylesheet"
          ? { ...u, rel: "prefetch", as: "style" }
          : { ...u, rel: "prefetch" }
      )
  );
}
function Iu(s, i, c, f, u, y) {
  let v = (m, z) => (c[z] ? m.route.id !== c[z].route.id : !0),
    b = (m, z) => {
      var R;
      return (
        c[z].pathname !== m.pathname ||
        (((R = c[z].route.path) == null ? void 0 : R.endsWith("*")) &&
          c[z].params["*"] !== m.params["*"])
      );
    };
  return y === "assets"
    ? i.filter((m, z) => v(m, z) || b(m, z))
    : y === "data"
    ? i.filter((m, z) => {
        var q;
        let R = f.routes[m.route.id];
        if (!R || !R.hasLoader) return !1;
        if (v(m, z) || b(m, z)) return !0;
        if (m.route.shouldRevalidate) {
          let S = m.route.shouldRevalidate({
            currentUrl: new URL(u.pathname + u.search + u.hash, window.origin),
            currentParams: ((q = c[0]) == null ? void 0 : q.params) || {},
            nextUrl: new URL(s, window.origin),
            nextParams: m.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof S == "boolean") return S;
        }
        return !0;
      })
    : [];
}
function Ry(s, i) {
  return Ly(
    s
      .map((c) => {
        let f = i.routes[c.route.id];
        if (!f) return [];
        let u = [f.module];
        return f.imports && (u = u.concat(f.imports)), u;
      })
      .flat(1)
  );
}
function Ly(s) {
  return [...new Set(s)];
}
function Ty(s) {
  let i = {},
    c = Object.keys(s).sort();
  for (let f of c) i[f] = s[f];
  return i;
}
function Oy(s, i) {
  let c = new Set();
  return (
    new Set(i),
    s.reduce((f, u) => {
      let y = JSON.stringify(Ty(u));
      return c.has(y) || (c.add(y), f.push({ key: y, link: u })), f;
    }, [])
  );
}
function qy(s) {
  let i =
    typeof s == "string"
      ? new URL(
          s,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : s;
  return (
    i.pathname === "/"
      ? (i.pathname = "_root.data")
      : (i.pathname = `${i.pathname.replace(/\/$/, "")}.data`),
    i
  );
}
function Iy() {
  let s = x.useContext(Ha);
  return (
    bc(
      s,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    s
  );
}
function Dy() {
  let s = x.useContext(no);
  return (
    bc(
      s,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    s
  );
}
var xc = x.createContext(void 0);
xc.displayName = "FrameworkContext";
function cf() {
  let s = x.useContext(xc);
  return (
    bc(s, "You must render this element inside a <HydratedRouter> element"), s
  );
}
function My(s, i) {
  let c = x.useContext(xc),
    [f, u] = x.useState(!1),
    [y, v] = x.useState(!1),
    {
      onFocus: b,
      onBlur: m,
      onMouseEnter: z,
      onMouseLeave: R,
      onTouchStart: q,
    } = i,
    S = x.useRef(null);
  x.useEffect(() => {
    if ((s === "render" && v(!0), s === "viewport")) {
      let D = (I) => {
          I.forEach((U) => {
            v(U.isIntersecting);
          });
        },
        O = new IntersectionObserver(D, { threshold: 0.5 });
      return (
        S.current && O.observe(S.current),
        () => {
          O.disconnect();
        }
      );
    }
  }, [s]),
    x.useEffect(() => {
      if (f) {
        let D = setTimeout(() => {
          v(!0);
        }, 100);
        return () => {
          clearTimeout(D);
        };
      }
    }, [f]);
  let F = () => {
      u(!0);
    },
    T = () => {
      u(!1), v(!1);
    };
  return c
    ? s !== "intent"
      ? [y, S, {}]
      : [
          y,
          S,
          {
            onFocus: Lr(b, F),
            onBlur: Lr(m, T),
            onMouseEnter: Lr(z, F),
            onMouseLeave: Lr(R, T),
            onTouchStart: Lr(q, F),
          },
        ]
    : [!1, S, {}];
}
function Lr(s, i) {
  return (c) => {
    s && s(c), c.defaultPrevented || i(c);
  };
}
function Fy({ page: s, ...i }) {
  let { router: c } = Iy(),
    f = x.useMemo(() => Yu(c.routes, s, c.basename), [c.routes, s, c.basename]);
  return f
    ? x.createElement(Uy, { page: s, matches: f, ...i })
    : (console.warn(`Tried to prefetch ${s} but no routes matched.`), null);
}
function $y(s) {
  let { manifest: i, routeModules: c } = cf(),
    [f, u] = x.useState([]);
  return (
    x.useEffect(() => {
      let y = !1;
      return (
        Ny(s, i, c).then((v) => {
          y || u(v);
        }),
        () => {
          y = !0;
        }
      );
    }, [s, i, c]),
    f
  );
}
function Uy({ page: s, matches: i, ...c }) {
  let f = ga(),
    { manifest: u, routeModules: y } = cf(),
    { loaderData: v, matches: b } = Dy(),
    m = x.useMemo(() => Iu(s, i, b, u, f, "data"), [s, i, b, u, f]),
    z = x.useMemo(() => Iu(s, i, b, u, f, "assets"), [s, i, b, u, f]),
    R = x.useMemo(() => {
      if (s === f.pathname + f.search + f.hash) return [];
      let F = new Set(),
        T = !1;
      if (
        (i.forEach((O) => {
          var U;
          let I = u.routes[O.route.id];
          !I ||
            !I.hasLoader ||
            ((!m.some((G) => G.route.id === O.route.id) &&
              O.route.id in v &&
              (U = y[O.route.id]) != null &&
              U.shouldRevalidate) ||
            I.hasClientLoader
              ? (T = !0)
              : F.add(O.route.id));
        }),
        F.size === 0)
      )
        return [];
      let D = qy(s);
      return (
        T &&
          F.size > 0 &&
          D.searchParams.set(
            "_routes",
            i
              .filter((O) => F.has(O.route.id))
              .map((O) => O.route.id)
              .join(",")
          ),
        [D.pathname + D.search]
      );
    }, [v, f, u, m, i, s, y]),
    q = x.useMemo(() => Ry(z, u), [z, u]),
    S = $y(z);
  return x.createElement(
    x.Fragment,
    null,
    R.map((F) =>
      x.createElement("link", {
        key: F,
        rel: "prefetch",
        as: "fetch",
        href: F,
        ...c,
      })
    ),
    q.map((F) =>
      x.createElement("link", { key: F, rel: "modulepreload", href: F, ...c })
    ),
    S.map(({ key: F, link: T }) => x.createElement("link", { key: F, ...T }))
  );
}
function Ay(...s) {
  return (i) => {
    s.forEach((c) => {
      typeof c == "function" ? c(i) : c != null && (c.current = i);
    });
  };
}
var lf =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  lf && (window.__reactRouterVersion = "7.0.2");
} catch {}
function By({ basename: s, children: i, window: c }) {
  let f = x.useRef();
  f.current == null && (f.current = Lp({ window: c, v5Compat: !0 }));
  let u = f.current,
    [y, v] = x.useState({ action: u.action, location: u.location }),
    b = x.useCallback(
      (m) => {
        x.startTransition(() => v(m));
      },
      [v]
    );
  return (
    x.useLayoutEffect(() => u.listen(b), [u, b]),
    x.createElement(my, {
      basename: s,
      children: i,
      location: y.location,
      navigationType: y.action,
      navigator: u,
    })
  );
}
var uf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ff = x.forwardRef(function (
    {
      onClick: i,
      discover: c = "render",
      prefetch: f = "none",
      relative: u,
      reloadDocument: y,
      replace: v,
      state: b,
      target: m,
      to: z,
      preventScrollReset: R,
      viewTransition: q,
      ...S
    },
    F
  ) {
    let { basename: T } = x.useContext(bt),
      D = typeof z == "string" && uf.test(z),
      O,
      I = !1;
    if (typeof z == "string" && D && ((O = z), lf))
      try {
        let we = new URL(window.location.href),
          Pe = z.startsWith("//") ? new URL(we.protocol + z) : new URL(z),
          yt = ea(Pe.pathname, T);
        Pe.origin === we.origin && yt != null
          ? (z = yt + Pe.search + Pe.hash)
          : (I = !0);
      } catch {
        zt(
          !1,
          `<Link to="${z}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let U = ny(z, { relative: u }),
      [G, te, le] = My(f, S),
      me = Qy(z, {
        replace: v,
        state: b,
        target: m,
        preventScrollReset: R,
        relative: u,
        viewTransition: q,
      });
    function he(we) {
      i && i(we), we.defaultPrevented || me(we);
    }
    let je = x.createElement("a", {
      ...S,
      ...le,
      href: O || U,
      onClick: I || y ? i : he,
      ref: Ay(F, te),
      target: m,
      "data-discover": !D && c === "render" ? "true" : void 0,
    });
    return G && !D
      ? x.createElement(x.Fragment, null, je, x.createElement(Fy, { page: U }))
      : je;
  });
ff.displayName = "Link";
var Hy = x.forwardRef(function (
  {
    "aria-current": i = "page",
    caseSensitive: c = !1,
    className: f = "",
    end: u = !1,
    style: y,
    to: v,
    viewTransition: b,
    children: m,
    ...z
  },
  R
) {
  let q = Mr(v, { relative: z.relative }),
    S = ga(),
    F = x.useContext(no),
    { navigator: T, basename: D } = x.useContext(bt),
    O = F != null && Zy(q) && b === !0,
    I = T.encodeLocation ? T.encodeLocation(q).pathname : q.pathname,
    U = S.pathname,
    G =
      F && F.navigation && F.navigation.location
        ? F.navigation.location.pathname
        : null;
  c ||
    ((U = U.toLowerCase()),
    (G = G ? G.toLowerCase() : null),
    (I = I.toLowerCase())),
    G && D && (G = ea(G, D) || G);
  const te = I !== "/" && I.endsWith("/") ? I.length - 1 : I.length;
  let le = U === I || (!u && U.startsWith(I) && U.charAt(te) === "/"),
    me =
      G != null &&
      (G === I || (!u && G.startsWith(I) && G.charAt(I.length) === "/")),
    he = { isActive: le, isPending: me, isTransitioning: O },
    je = le ? i : void 0,
    we;
  typeof f == "function"
    ? (we = f(he))
    : (we = [
        f,
        le ? "active" : null,
        me ? "pending" : null,
        O ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Pe = typeof y == "function" ? y(he) : y;
  return x.createElement(
    ff,
    {
      ...z,
      "aria-current": je,
      className: we,
      ref: R,
      style: Pe,
      to: v,
      viewTransition: b,
    },
    typeof m == "function" ? m(he) : m
  );
});
Hy.displayName = "NavLink";
var Vy = x.forwardRef(
  (
    {
      discover: s = "render",
      fetcherKey: i,
      navigate: c,
      reloadDocument: f,
      replace: u,
      state: y,
      method: v = Jn,
      action: b,
      onSubmit: m,
      relative: z,
      preventScrollReset: R,
      viewTransition: q,
      ...S
    },
    F
  ) => {
    let T = Xy(),
      D = Gy(b, { relative: z }),
      O = v.toLowerCase() === "get" ? "get" : "post",
      I = typeof b == "string" && uf.test(b),
      U = (G) => {
        if ((m && m(G), G.defaultPrevented)) return;
        G.preventDefault();
        let te = G.nativeEvent.submitter,
          le = (te == null ? void 0 : te.getAttribute("formmethod")) || v;
        T(te || G.currentTarget, {
          fetcherKey: i,
          method: le,
          navigate: c,
          replace: u,
          state: y,
          relative: z,
          preventScrollReset: R,
          viewTransition: q,
        });
      };
    return x.createElement("form", {
      ref: F,
      method: O,
      action: D,
      onSubmit: f ? m : U,
      ...S,
      "data-discover": !I && s === "render" ? "true" : void 0,
    });
  }
);
Vy.displayName = "Form";
function Wy(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function df(s) {
  let i = x.useContext(Ha);
  return ke(i, Wy(s)), i;
}
function Qy(
  s,
  {
    target: i,
    replace: c,
    state: f,
    preventScrollReset: u,
    relative: y,
    viewTransition: v,
  } = {}
) {
  let b = Dr(),
    m = ga(),
    z = Mr(s, { relative: y });
  return x.useCallback(
    (R) => {
      if (xy(R, i)) {
        R.preventDefault();
        let q = c !== void 0 ? c : Tr(m) === Tr(z);
        b(s, {
          replace: q,
          state: f,
          preventScrollReset: u,
          relative: y,
          viewTransition: v,
        });
      }
    },
    [m, b, z, c, f, i, s, u, y, v]
  );
}
var Ky = 0,
  Yy = () => `__${String(++Ky)}__`;
function Xy() {
  let { router: s } = df("useSubmit"),
    { basename: i } = x.useContext(bt),
    c = hy();
  return x.useCallback(
    async (f, u = {}) => {
      let { action: y, method: v, encType: b, formData: m, body: z } = Ey(f, i);
      if (u.navigate === !1) {
        let R = u.fetcherKey || Yy();
        await s.fetch(R, c, u.action || y, {
          preventScrollReset: u.preventScrollReset,
          formData: m,
          body: z,
          formMethod: u.method || v,
          formEncType: u.encType || b,
          flushSync: u.flushSync,
        });
      } else
        await s.navigate(u.action || y, {
          preventScrollReset: u.preventScrollReset,
          formData: m,
          body: z,
          formMethod: u.method || v,
          formEncType: u.encType || b,
          replace: u.replace,
          state: u.state,
          fromRouteId: c,
          flushSync: u.flushSync,
          viewTransition: u.viewTransition,
        });
    },
    [s, i, c]
  );
}
function Gy(s, { relative: i } = {}) {
  let { basename: c } = x.useContext(bt),
    f = x.useContext(Tt);
  ke(f, "useFormAction must be used inside a RouteContext");
  let [u] = f.matches.slice(-1),
    y = { ...Mr(s || ".", { relative: i }) },
    v = ga();
  if (s == null) {
    y.search = v.search;
    let b = new URLSearchParams(y.search),
      m = b.getAll("index");
    if (m.some((R) => R === "")) {
      b.delete("index"),
        m.filter((q) => q).forEach((q) => b.append("index", q));
      let R = b.toString();
      y.search = R ? `?${R}` : "";
    }
  }
  return (
    (!s || s === ".") &&
      u.route.index &&
      (y.search = y.search ? y.search.replace(/^\?/, "?index&") : "?index"),
    c !== "/" && (y.pathname = y.pathname === "/" ? c : Lt([c, y.pathname])),
    Tr(y)
  );
}
function Zy(s, i = {}) {
  let c = x.useContext(tf);
  ke(
    c != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: f } = df("useViewTransitionState"),
    u = Mr(s, { relative: i.relative });
  if (!c.isTransitioning) return !1;
  let y = ea(c.currentLocation.pathname, f) || c.currentLocation.pathname,
    v = ea(c.nextLocation.pathname, f) || c.nextLocation.pathname;
  return ro(u.pathname, v) != null || ro(u.pathname, y) != null;
}
new TextEncoder();
const so = [
    {
      uuid: "a1352d14-65ea-47ce-b17b-31bec3679982",
      name: "meals",
      emoji: "hamburger",
    },
    {
      uuid: "71dff2eb-8628-4c83-9a20-436114180ffc",
      name: "home",
      emoji: "house",
    },
    {
      uuid: "b2764a05-d35a-4966-bc21-50229310dc11",
      name: "transport",
      emoji: "bus",
    },
    {
      uuid: "2a6f74db-5fc7-4497-a880-ed73cb0883be",
      name: "gift",
      emoji: "gift",
    },
    {
      uuid: "6f6156a6-773c-41a5-83aa-87677b959ced",
      name: "entertainment",
      emoji: "ferris_wheel",
    },
    {
      uuid: "dff6dc23-6b26-4ebf-9e4b-3948bccaaea8",
      name: "electronics",
      emoji: "iphone",
    },
    {
      uuid: "b5b3962c-9853-4a20-b1aa-851d46de1d70",
      name: "shopping",
      emoji: "shopping_cart",
    },
  ],
  Jy = () => {
    const s = window.indexedDB.open("squirify", 1);
    s.onupgradeneeded = (i) => {
      const c = i.target.result,
        f = c.createObjectStore("expenses", {
          keyPath: "id",
          autoIncrement: !0,
        });
      f.createIndex("cost", "cost", { unique: !1 }),
        f.createIndex("date", "date", { unique: !1 }),
        f.createIndex("description", "description", { unique: !1 }),
        f.createIndex("categoryUuid", "categoryUuid", { unique: !1 });
      const u = c.createObjectStore("categories", { keyPath: "uuid" });
      u.createIndex("name", "name", { unique: !1 }),
        u.createIndex("emoji", "emoji", { unique: !1 }),
        so.forEach((y) => {
          u.add(y);
        });
    };
  },
  eh = (s) => {
    const i = window.indexedDB.open("squirify", 1);
    i.onsuccess = (c) => {
      var f = c.target.result;
      f.transaction(["expenses"], "readwrite").objectStore("expenses").add(s);
    };
  },
  th = () =>
    new Promise((s, i) => {
      const c = window.indexedDB.open("squirify", 1);
      (c.onsuccess = (f) => {
        const b = f.target.result
          .transaction(["expenses"], "readonly")
          .objectStore("expenses")
          .getAll();
        (b.onsuccess = () => {
          s(b.result);
        }),
          (b.onerror = () => {
            i(b.error);
          });
      }),
        (c.onerror = () => {
          i(c.error);
        });
    }),
  ah = (s) =>
    new Promise((i, c) => {
      try {
        let f = 0;
        for (let u = 0; u < s.length; u++) f += Number(s[u].cost);
        i(f);
      } catch (f) {
        c(f);
      }
    }),
  Jt = (s, i = !0) => {
    const c = "es";
    return i ? rh(s[c]) : s[c];
  };
function rh(s) {
  return String(s).charAt(0).toUpperCase() + String(s).slice(1);
}
function nh(s) {
  return Or({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z",
        },
        child: [],
      },
    ],
  })(s);
}
function oh(s) {
  return Or({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "g",
        attr: { id: "Settings" },
        child: [
          {
            tag: "g",
            attr: {},
            child: [
              {
                tag: "path",
                attr: {
                  d: "M12.6,20.936H11.3a.883.883,0,0,1-.852-.654l-.774-2.833-2.5,1.435a.886.886,0,0,1-1.06-.138l-.925-.919a.884.884,0,0,1-.143-1.066l1.469-2.545L6.509,14.2l-2.787-.747a.882.882,0,0,1-.654-.851V11.3a.882.882,0,0,1,.652-.85l2.839-.777L5.12,7.171a.885.885,0,0,1,.141-1.062l.918-.918A.885.885,0,0,1,7.24,5.049L9.792,6.514l.012,0,.745-2.79a.881.881,0,0,1,.851-.655h1.3a.883.883,0,0,1,.852.655l.762,2.838,2.509-1.441a.885.885,0,0,1,1.059.138l.926.919a.882.882,0,0,1,.141,1.067L17.483,9.777l.008.022,2.786.746a.883.883,0,0,1,.653.851v1.3a.883.883,0,0,1-.654.852l-2.837.774,1.439,2.505a.881.881,0,0,1-.141,1.063l-.917.917a.888.888,0,0,1-1.063.141l-2.539-1.462L14.2,17.5l-.745,2.785A.885.885,0,0,1,12.6,20.936Zm-1.21-1h1.119l.738-2.756a.888.888,0,0,1,.528-.592l.134-.052a.873.873,0,0,1,.76.057l2.51,1.445.789-.789-1.423-2.478a.881.881,0,0,1-.048-.78l.052-.125a.875.875,0,0,1,.584-.51l2.8-.749v-1.12l-2.755-.737a.885.885,0,0,1-.592-.529l-.052-.132a.882.882,0,0,1,.057-.763L18.04,6.818l-.8-.79-2.48,1.425a.878.878,0,0,1-.772.052l-.115-.047a.888.888,0,0,1-.518-.588l-.748-2.806H11.492l-.738,2.762a.883.883,0,0,1-.539.6l-.12.045a.874.874,0,0,1-.751-.058L6.822,5.962l-.789.789L7.455,9.227a.886.886,0,0,1,.046.785l-.051.12a.876.876,0,0,1-.579.5l-2.8.758v1.121l2.757.738a.889.889,0,0,1,.591.525l.048.121a.874.874,0,0,1-.055.77L5.958,17.181l.8.791,2.47-1.419a.878.878,0,0,1,.787-.045l.106.044a.874.874,0,0,1,.526.591ZM9.75,17.482l.008,0ZM9.6,17.421l.007,0ZM6.487,14.147h0Zm.044-4.411h0Zm7.724-3.2Z",
                },
                child: [],
              },
              {
                tag: "path",
                attr: {
                  d: "M12,15a3,3,0,1,1,3-3A3,3,0,0,1,12,15Zm0-5a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z",
                },
                child: [],
              },
            ],
          },
        ],
      },
    ],
  })(s);
}
const sh = () => {
    const s = Dr();
    return j.jsx("div", {
      className: "nav-header",
      children: j.jsxs("div", {
        className: "content",
        children: [
          j.jsx("h2", { children: "Squirify" }),
          j.jsxs("div", {
            className: "nav-opt",
            children: [
              j.jsx(nh, {
                className: "icon",
                size: 25,
                onClick: () => s("add-category"),
              }),
              j.jsx(oh, { className: "icon", size: 25 }),
            ],
          }),
        ],
      }),
    });
  },
  ya = {
    today: { en: "today", es: "hoy", ru: "сегодня", it: "oggi" },
    month: { en: "month", es: "mes", ru: "месяц", it: "messe" },
    year: { en: "year", es: "año", ru: "год", it: "anno" },
    total: { en: "total", es: "total", ru: "всего", it: "total" },
    more: { en: "more", es: "más", ru: "_", it: "molto" },
  },
  ch = ({ total: s }) =>
    j.jsxs("div", {
      className: "total-banner",
      children: [
        j.jsx("h4", { children: Jt(ya.total) }),
        j.jsxs("div", {
          className: "total-currency",
          children: [
            j.jsx("span", { children: "Bs." }),
            j.jsx("span", { children: s }),
          ],
        }),
      ],
    }),
  lh = () =>
    j.jsx("div", {
      className: "filter",
      children: j.jsxs("div", {
        className: "options",
        children: [
          j.jsx("span", { children: Jt(ya.today) }),
          j.jsx("span", { children: Jt(ya.month) }),
          j.jsx("span", { children: Jt(ya.year) }),
          j.jsx("span", { children: Jt(ya.today) }),
        ],
      }),
    });
function pf(s) {
  return Or({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M255.8 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM102 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM410 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z",
        },
        child: [],
      },
    ],
  })(s);
}
function Zn(s) {
  return Or({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z",
        },
        child: [],
      },
    ],
  })(s);
}
function ih(s) {
  return Or({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z",
        },
        child: [],
      },
    ],
  })(s);
}
var lc = { exports: {} },
  ic = { exports: {} },
  uc = { exports: {} },
  fc,
  Du;
function jc() {
  if (Du) return fc;
  Du = 1;
  var s =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (c) {
          return typeof c;
        }
      : function (c) {
          return c &&
            typeof Symbol == "function" &&
            c.constructor === Symbol &&
            c !== Symbol.prototype
            ? "symbol"
            : typeof c;
        };
  function i(c, f) {
    var u = 0,
      y = [];
    if (Array.isArray(c)) for (; u < c.length && f(c[u], u, c) !== !1; ++u);
    else if ((typeof c > "u" ? "undefined" : s(c)) === "object" && c !== null)
      for (y = Object.keys(c); u < y.length && f(c[y[u]], y[u], c) !== !1; ++u);
  }
  return (fc = i), fc;
}
var dc, Mu;
function uh() {
  if (Mu) return dc;
  Mu = 1;
  var s = jc();
  function i(c, f, u) {
    var y = u === !0 ? {} : u || c;
    return (
      s(c, function (v, b, m) {
        y[b] = f(v, b, m);
      }),
      y
    );
  }
  return (dc = i), dc;
}
const fh = {
    keywords: ["face", "smile", "happy", "joy", ":D", "grin"],
    char: "😀",
    fitzpatrick_scale: !1,
    category: "people",
  },
  dh = {
    keywords: ["face", "grimace", "teeth"],
    char: "😬",
    fitzpatrick_scale: !1,
    category: "people",
  },
  ph = {
    keywords: ["face", "happy", "smile", "joy", "kawaii"],
    char: "😁",
    fitzpatrick_scale: !1,
    category: "people",
  },
  yh = {
    keywords: ["face", "cry", "tears", "weep", "happy", "happytears", "haha"],
    char: "😂",
    fitzpatrick_scale: !1,
    category: "people",
  },
  hh = {
    keywords: ["face", "rolling", "floor", "laughing", "lol", "haha"],
    char: "🤣",
    fitzpatrick_scale: !1,
    category: "people",
  },
  gh = {
    keywords: ["face", "celebration", "woohoo"],
    char: "🥳",
    fitzpatrick_scale: !1,
    category: "people",
  },
  _h = {
    keywords: ["face", "happy", "joy", "haha", ":D", ":)", "smile", "funny"],
    char: "😃",
    fitzpatrick_scale: !1,
    category: "people",
  },
  kh = {
    keywords: [
      "face",
      "happy",
      "joy",
      "funny",
      "haha",
      "laugh",
      "like",
      ":D",
      ":)",
    ],
    char: "😄",
    fitzpatrick_scale: !1,
    category: "people",
  },
  mh = {
    keywords: ["face", "hot", "happy", "laugh", "sweat", "smile", "relief"],
    char: "😅",
    fitzpatrick_scale: !1,
    category: "people",
  },
  wh = {
    keywords: [
      "happy",
      "joy",
      "lol",
      "satisfied",
      "haha",
      "face",
      "glad",
      "XD",
      "laugh",
    ],
    char: "😆",
    fitzpatrick_scale: !1,
    category: "people",
  },
  vh = {
    keywords: ["face", "angel", "heaven", "halo"],
    char: "😇",
    fitzpatrick_scale: !1,
    category: "people",
  },
  zh = {
    keywords: ["face", "happy", "mischievous", "secret", ";)", "smile", "eye"],
    char: "😉",
    fitzpatrick_scale: !1,
    category: "people",
  },
  bh = {
    keywords: [
      "face",
      "smile",
      "happy",
      "flushed",
      "crush",
      "embarrassed",
      "shy",
      "joy",
    ],
    char: "😊",
    fitzpatrick_scale: !1,
    category: "people",
  },
  xh = {
    keywords: ["face", "smile"],
    char: "🙂",
    fitzpatrick_scale: !1,
    category: "people",
  },
  jh = {
    keywords: ["face", "flipped", "silly", "smile"],
    char: "🙃",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Sh = {
    keywords: ["face", "blush", "massage", "happiness"],
    char: "☺️",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Eh = {
    keywords: [
      "happy",
      "joy",
      "tongue",
      "smile",
      "face",
      "silly",
      "yummy",
      "nom",
      "delicious",
      "savouring",
    ],
    char: "😋",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ch = {
    keywords: ["face", "relaxed", "phew", "massage", "happiness"],
    char: "😌",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ph = {
    keywords: [
      "face",
      "love",
      "like",
      "affection",
      "valentines",
      "infatuation",
      "crush",
      "heart",
    ],
    char: "😍",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Nh = {
    keywords: [
      "face",
      "love",
      "like",
      "affection",
      "valentines",
      "infatuation",
      "crush",
      "hearts",
      "adore",
    ],
    char: "🥰",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Rh = {
    keywords: [
      "face",
      "love",
      "like",
      "affection",
      "valentines",
      "infatuation",
      "kiss",
    ],
    char: "😘",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Lh = {
    keywords: [
      "love",
      "like",
      "face",
      "3",
      "valentines",
      "infatuation",
      "kiss",
    ],
    char: "😗",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Th = {
    keywords: ["face", "affection", "valentines", "infatuation", "kiss"],
    char: "😙",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Oh = {
    keywords: [
      "face",
      "love",
      "like",
      "affection",
      "valentines",
      "infatuation",
      "kiss",
    ],
    char: "😚",
    fitzpatrick_scale: !1,
    category: "people",
  },
  qh = {
    keywords: [
      "face",
      "prank",
      "childish",
      "playful",
      "mischievous",
      "smile",
      "wink",
      "tongue",
    ],
    char: "😜",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ih = {
    keywords: ["face", "goofy", "crazy"],
    char: "🤪",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Dh = {
    keywords: [
      "face",
      "distrust",
      "scepticism",
      "disapproval",
      "disbelief",
      "surprise",
    ],
    char: "🤨",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Mh = {
    keywords: ["face", "stuffy", "wealthy"],
    char: "🧐",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Fh = {
    keywords: ["face", "prank", "playful", "mischievous", "smile", "tongue"],
    char: "😝",
    fitzpatrick_scale: !1,
    category: "people",
  },
  $h = {
    keywords: [
      "face",
      "prank",
      "childish",
      "playful",
      "mischievous",
      "smile",
      "tongue",
    ],
    char: "😛",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Uh = {
    keywords: ["face", "rich", "dollar", "money"],
    char: "🤑",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ah = {
    keywords: ["face", "nerdy", "geek", "dork"],
    char: "🤓",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Bh = {
    keywords: ["face", "cool", "smile", "summer", "beach", "sunglass"],
    char: "😎",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Hh = {
    keywords: ["face", "smile", "starry", "eyes", "grinning"],
    char: "🤩",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Vh = {
    keywords: ["face"],
    char: "🤡",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Wh = {
    keywords: ["face", "cowgirl", "hat"],
    char: "🤠",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Qh = {
    keywords: ["face", "smile", "hug"],
    char: "🤗",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Kh = {
    keywords: ["face", "smile", "mean", "prank", "smug", "sarcasm"],
    char: "😏",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Yh = {
    keywords: ["face", "hellokitty"],
    char: "😶",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Xh = {
    keywords: ["indifference", "meh", ":|", "neutral"],
    char: "😐",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Gh = {
    keywords: ["face", "indifferent", "-_-", "meh", "deadpan"],
    char: "😑",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Zh = {
    keywords: [
      "indifference",
      "bored",
      "straight face",
      "serious",
      "sarcasm",
      "unimpressed",
      "skeptical",
      "dubious",
      "side_eye",
    ],
    char: "😒",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Jh = {
    keywords: ["face", "eyeroll", "frustrated"],
    char: "🙄",
    fitzpatrick_scale: !1,
    category: "people",
  },
  eg = {
    keywords: ["face", "hmmm", "think", "consider"],
    char: "🤔",
    fitzpatrick_scale: !1,
    category: "people",
  },
  tg = {
    keywords: ["face", "lie", "pinocchio"],
    char: "🤥",
    fitzpatrick_scale: !1,
    category: "people",
  },
  ag = {
    keywords: ["face", "whoops", "shock", "surprise"],
    char: "🤭",
    fitzpatrick_scale: !1,
    category: "people",
  },
  rg = {
    keywords: ["face", "quiet", "shhh"],
    char: "🤫",
    fitzpatrick_scale: !1,
    category: "people",
  },
  ng = {
    keywords: [
      "face",
      "swearing",
      "cursing",
      "cussing",
      "profanity",
      "expletive",
    ],
    char: "🤬",
    fitzpatrick_scale: !1,
    category: "people",
  },
  og = {
    keywords: ["face", "shocked", "mind", "blown"],
    char: "🤯",
    fitzpatrick_scale: !1,
    category: "people",
  },
  sg = {
    keywords: ["face", "blush", "shy", "flattered"],
    char: "😳",
    fitzpatrick_scale: !1,
    category: "people",
  },
  cg = {
    keywords: ["face", "sad", "upset", "depressed", ":("],
    char: "😞",
    fitzpatrick_scale: !1,
    category: "people",
  },
  lg = {
    keywords: ["face", "concern", "nervous", ":("],
    char: "😟",
    fitzpatrick_scale: !1,
    category: "people",
  },
  ig = {
    keywords: ["mad", "face", "annoyed", "frustrated"],
    char: "😠",
    fitzpatrick_scale: !1,
    category: "people",
  },
  ug = {
    keywords: ["angry", "mad", "hate", "despise"],
    char: "😡",
    fitzpatrick_scale: !1,
    category: "people",
  },
  fg = {
    keywords: ["face", "sad", "depressed", "upset"],
    char: "😔",
    fitzpatrick_scale: !1,
    category: "people",
  },
  dg = {
    keywords: ["face", "indifference", "huh", "weird", "hmmm", ":/"],
    char: "😕",
    fitzpatrick_scale: !1,
    category: "people",
  },
  pg = {
    keywords: ["face", "frowning", "disappointed", "sad", "upset"],
    char: "🙁",
    fitzpatrick_scale: !1,
    category: "people",
  },
  yg = {
    keywords: ["face", "sad", "upset", "frown"],
    char: "☹",
    fitzpatrick_scale: !1,
    category: "people",
  },
  hg = {
    keywords: ["face", "sick", "no", "upset", "oops"],
    char: "😣",
    fitzpatrick_scale: !1,
    category: "people",
  },
  gg = {
    keywords: ["face", "confused", "sick", "unwell", "oops", ":S"],
    char: "😖",
    fitzpatrick_scale: !1,
    category: "people",
  },
  _g = {
    keywords: ["sick", "whine", "upset", "frustrated"],
    char: "😫",
    fitzpatrick_scale: !1,
    category: "people",
  },
  kg = {
    keywords: ["face", "tired", "sleepy", "sad", "frustrated", "upset"],
    char: "😩",
    fitzpatrick_scale: !1,
    category: "people",
  },
  mg = {
    keywords: ["face", "begging", "mercy"],
    char: "🥺",
    fitzpatrick_scale: !1,
    category: "people",
  },
  wg = {
    keywords: ["face", "gas", "phew", "proud", "pride"],
    char: "😤",
    fitzpatrick_scale: !1,
    category: "people",
  },
  vg = {
    keywords: ["face", "surprise", "impressed", "wow", "whoa", ":O"],
    char: "😮",
    fitzpatrick_scale: !1,
    category: "people",
  },
  zg = {
    keywords: ["face", "munch", "scared", "omg"],
    char: "😱",
    fitzpatrick_scale: !1,
    category: "people",
  },
  bg = {
    keywords: ["face", "scared", "terrified", "nervous", "oops", "huh"],
    char: "😨",
    fitzpatrick_scale: !1,
    category: "people",
  },
  xg = {
    keywords: ["face", "nervous", "sweat"],
    char: "😰",
    fitzpatrick_scale: !1,
    category: "people",
  },
  jg = {
    keywords: ["face", "woo", "shh"],
    char: "😯",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Sg = {
    keywords: ["face", "aw", "what"],
    char: "😦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Eg = {
    keywords: ["face", "stunned", "nervous"],
    char: "😧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Cg = {
    keywords: ["face", "tears", "sad", "depressed", "upset", ":'("],
    char: "😢",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Pg = {
    keywords: ["face", "phew", "sweat", "nervous"],
    char: "😥",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ng = {
    keywords: ["face"],
    char: "🤤",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Rg = {
    keywords: ["face", "tired", "rest", "nap"],
    char: "😪",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Lg = {
    keywords: ["face", "hot", "sad", "tired", "exercise"],
    char: "😓",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Tg = {
    keywords: ["face", "feverish", "heat", "red", "sweating"],
    char: "🥵",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Og = {
    keywords: ["face", "blue", "freezing", "frozen", "frostbite", "icicles"],
    char: "🥶",
    fitzpatrick_scale: !1,
    category: "people",
  },
  qg = {
    keywords: ["face", "cry", "tears", "sad", "upset", "depressed"],
    char: "😭",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ig = {
    keywords: ["spent", "unconscious", "xox", "dizzy"],
    char: "😵",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Dg = {
    keywords: ["face", "xox", "surprised", "poisoned"],
    char: "😲",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Mg = {
    keywords: ["face", "sealed", "zipper", "secret"],
    char: "🤐",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Fg = {
    keywords: ["face", "vomit", "gross", "green", "sick", "throw up", "ill"],
    char: "🤢",
    fitzpatrick_scale: !1,
    category: "people",
  },
  $g = {
    keywords: ["face", "gesundheit", "sneeze", "sick", "allergy"],
    char: "🤧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ug = {
    keywords: ["face", "sick"],
    char: "🤮",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ag = {
    keywords: ["face", "sick", "ill", "disease"],
    char: "😷",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Bg = {
    keywords: ["sick", "temperature", "thermometer", "cold", "fever"],
    char: "🤒",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Hg = {
    keywords: ["injured", "clumsy", "bandage", "hurt"],
    char: "🤕",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Vg = {
    keywords: ["face", "dizzy", "intoxicated", "tipsy", "wavy"],
    char: "🥴",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Wg = {
    keywords: ["face", "tired", "sleepy", "night", "zzz"],
    char: "😴",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Qg = {
    keywords: ["sleepy", "tired", "dream"],
    char: "💤",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Kg = {
    keywords: ["hankey", "shitface", "fail", "turd", "shit"],
    char: "💩",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Yg = {
    keywords: ["devil", "horns"],
    char: "😈",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Xg = {
    keywords: ["devil", "angry", "horns"],
    char: "👿",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Gg = {
    keywords: [
      "monster",
      "red",
      "mask",
      "halloween",
      "scary",
      "creepy",
      "devil",
      "demon",
      "japanese",
      "ogre",
    ],
    char: "👹",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Zg = {
    keywords: [
      "red",
      "evil",
      "mask",
      "monster",
      "scary",
      "creepy",
      "japanese",
      "goblin",
    ],
    char: "👺",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Jg = {
    keywords: ["dead", "skeleton", "creepy", "death"],
    char: "💀",
    fitzpatrick_scale: !1,
    category: "people",
  },
  e_ = {
    keywords: ["halloween", "spooky", "scary"],
    char: "👻",
    fitzpatrick_scale: !1,
    category: "people",
  },
  t_ = {
    keywords: ["UFO", "paul", "weird", "outer_space"],
    char: "👽",
    fitzpatrick_scale: !1,
    category: "people",
  },
  a_ = {
    keywords: ["computer", "machine", "bot"],
    char: "🤖",
    fitzpatrick_scale: !1,
    category: "people",
  },
  r_ = {
    keywords: ["animal", "cats", "happy", "smile"],
    char: "😺",
    fitzpatrick_scale: !1,
    category: "people",
  },
  n_ = {
    keywords: ["animal", "cats", "smile"],
    char: "😸",
    fitzpatrick_scale: !1,
    category: "people",
  },
  o_ = {
    keywords: ["animal", "cats", "haha", "happy", "tears"],
    char: "😹",
    fitzpatrick_scale: !1,
    category: "people",
  },
  s_ = {
    keywords: [
      "animal",
      "love",
      "like",
      "affection",
      "cats",
      "valentines",
      "heart",
    ],
    char: "😻",
    fitzpatrick_scale: !1,
    category: "people",
  },
  c_ = {
    keywords: ["animal", "cats", "smirk"],
    char: "😼",
    fitzpatrick_scale: !1,
    category: "people",
  },
  l_ = {
    keywords: ["animal", "cats", "kiss"],
    char: "😽",
    fitzpatrick_scale: !1,
    category: "people",
  },
  i_ = {
    keywords: ["animal", "cats", "munch", "scared", "scream"],
    char: "🙀",
    fitzpatrick_scale: !1,
    category: "people",
  },
  u_ = {
    keywords: ["animal", "tears", "weep", "sad", "cats", "upset", "cry"],
    char: "😿",
    fitzpatrick_scale: !1,
    category: "people",
  },
  f_ = {
    keywords: ["animal", "cats"],
    char: "😾",
    fitzpatrick_scale: !1,
    category: "people",
  },
  d_ = {
    keywords: ["hands", "gesture", "cupped", "prayer"],
    char: "🤲",
    fitzpatrick_scale: !0,
    category: "people",
  },
  p_ = {
    keywords: ["gesture", "hooray", "yea", "celebration", "hands"],
    char: "🙌",
    fitzpatrick_scale: !0,
    category: "people",
  },
  y_ = {
    keywords: ["hands", "praise", "applause", "congrats", "yay"],
    char: "👏",
    fitzpatrick_scale: !0,
    category: "people",
  },
  h_ = {
    keywords: [
      "hands",
      "gesture",
      "goodbye",
      "solong",
      "farewell",
      "hello",
      "hi",
      "palm",
    ],
    char: "👋",
    fitzpatrick_scale: !0,
    category: "people",
  },
  g_ = {
    keywords: ["hands", "gesture"],
    char: "🤙",
    fitzpatrick_scale: !0,
    category: "people",
  },
  __ = {
    keywords: ["angry", "violence", "fist", "hit", "attack", "hand"],
    char: "👊",
    fitzpatrick_scale: !0,
    category: "people",
  },
  k_ = {
    keywords: ["fingers", "hand", "grasp"],
    char: "✊",
    fitzpatrick_scale: !0,
    category: "people",
  },
  m_ = {
    keywords: ["hand", "fistbump"],
    char: "🤛",
    fitzpatrick_scale: !0,
    category: "people",
  },
  w_ = {
    keywords: ["hand", "fistbump"],
    char: "🤜",
    fitzpatrick_scale: !0,
    category: "people",
  },
  v_ = {
    keywords: ["fingers", "ohyeah", "hand", "peace", "victory", "two"],
    char: "✌",
    fitzpatrick_scale: !0,
    category: "people",
  },
  z_ = {
    keywords: ["fingers", "limbs", "perfect", "ok", "okay"],
    char: "👌",
    fitzpatrick_scale: !0,
    category: "people",
  },
  b_ = {
    keywords: ["fingers", "stop", "highfive", "palm", "ban"],
    char: "✋",
    fitzpatrick_scale: !0,
    category: "people",
  },
  x_ = {
    keywords: ["fingers", "raised", "backhand"],
    char: "🤚",
    fitzpatrick_scale: !0,
    category: "people",
  },
  j_ = {
    keywords: ["fingers", "butterfly", "hands", "open"],
    char: "👐",
    fitzpatrick_scale: !0,
    category: "people",
  },
  S_ = {
    keywords: ["arm", "flex", "hand", "summer", "strong", "biceps"],
    char: "💪",
    fitzpatrick_scale: !0,
    category: "people",
  },
  E_ = {
    keywords: ["please", "hope", "wish", "namaste", "highfive"],
    char: "🙏",
    fitzpatrick_scale: !0,
    category: "people",
  },
  C_ = {
    keywords: ["kick", "stomp"],
    char: "🦶",
    fitzpatrick_scale: !0,
    category: "people",
  },
  P_ = {
    keywords: ["kick", "limb"],
    char: "🦵",
    fitzpatrick_scale: !0,
    category: "people",
  },
  N_ = {
    keywords: ["agreement", "shake"],
    char: "🤝",
    fitzpatrick_scale: !1,
    category: "people",
  },
  R_ = {
    keywords: ["hand", "fingers", "direction", "up"],
    char: "☝",
    fitzpatrick_scale: !0,
    category: "people",
  },
  L_ = {
    keywords: ["fingers", "hand", "direction", "up"],
    char: "👆",
    fitzpatrick_scale: !0,
    category: "people",
  },
  T_ = {
    keywords: ["fingers", "hand", "direction", "down"],
    char: "👇",
    fitzpatrick_scale: !0,
    category: "people",
  },
  O_ = {
    keywords: ["direction", "fingers", "hand", "left"],
    char: "👈",
    fitzpatrick_scale: !0,
    category: "people",
  },
  q_ = {
    keywords: ["fingers", "hand", "direction", "right"],
    char: "👉",
    fitzpatrick_scale: !0,
    category: "people",
  },
  I_ = {
    keywords: ["hand", "fingers", "rude", "middle", "flipping"],
    char: "🖕",
    fitzpatrick_scale: !0,
    category: "people",
  },
  D_ = {
    keywords: ["hand", "fingers", "palm"],
    char: "🖐",
    fitzpatrick_scale: !0,
    category: "people",
  },
  M_ = {
    keywords: ["hand", "fingers", "gesture"],
    char: "🤟",
    fitzpatrick_scale: !0,
    category: "people",
  },
  F_ = {
    keywords: ["hand", "fingers", "evil_eye", "sign_of_horns", "rock_on"],
    char: "🤘",
    fitzpatrick_scale: !0,
    category: "people",
  },
  $_ = {
    keywords: ["good", "lucky"],
    char: "🤞",
    fitzpatrick_scale: !0,
    category: "people",
  },
  U_ = {
    keywords: ["hand", "fingers", "spock", "star trek"],
    char: "🖖",
    fitzpatrick_scale: !0,
    category: "people",
  },
  A_ = {
    keywords: ["lower_left_ballpoint_pen", "stationery", "write", "compose"],
    char: "✍",
    fitzpatrick_scale: !0,
    category: "people",
  },
  B_ = {
    keywords: ["camera", "phone"],
    char: "🤳",
    fitzpatrick_scale: !0,
    category: "people",
  },
  H_ = {
    keywords: ["beauty", "manicure", "finger", "fashion", "nail"],
    char: "💅",
    fitzpatrick_scale: !0,
    category: "people",
  },
  V_ = {
    keywords: ["mouth", "kiss"],
    char: "👄",
    fitzpatrick_scale: !1,
    category: "people",
  },
  W_ = {
    keywords: ["teeth", "dentist"],
    char: "🦷",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Q_ = {
    keywords: ["mouth", "playful"],
    char: "👅",
    fitzpatrick_scale: !1,
    category: "people",
  },
  K_ = {
    keywords: ["face", "hear", "sound", "listen"],
    char: "👂",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Y_ = {
    keywords: ["smell", "sniff"],
    char: "👃",
    fitzpatrick_scale: !0,
    category: "people",
  },
  X_ = {
    keywords: ["face", "look", "see", "watch", "stare"],
    char: "👁",
    fitzpatrick_scale: !1,
    category: "people",
  },
  G_ = {
    keywords: ["look", "watch", "stalk", "peek", "see"],
    char: "👀",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Z_ = {
    keywords: ["smart", "intelligent"],
    char: "🧠",
    fitzpatrick_scale: !1,
    category: "people",
  },
  J_ = {
    keywords: ["user", "person", "human"],
    char: "👤",
    fitzpatrick_scale: !1,
    category: "people",
  },
  ek = {
    keywords: ["user", "person", "human", "group", "team"],
    char: "👥",
    fitzpatrick_scale: !1,
    category: "people",
  },
  tk = {
    keywords: ["user", "person", "human", "sing", "say", "talk"],
    char: "🗣",
    fitzpatrick_scale: !1,
    category: "people",
  },
  ak = {
    keywords: ["child", "boy", "girl", "toddler"],
    char: "👶",
    fitzpatrick_scale: !0,
    category: "people",
  },
  rk = {
    keywords: ["gender-neutral", "young"],
    char: "🧒",
    fitzpatrick_scale: !0,
    category: "people",
  },
  nk = {
    keywords: ["man", "male", "guy", "teenager"],
    char: "👦",
    fitzpatrick_scale: !0,
    category: "people",
  },
  ok = {
    keywords: ["female", "woman", "teenager"],
    char: "👧",
    fitzpatrick_scale: !0,
    category: "people",
  },
  sk = {
    keywords: ["gender-neutral", "person"],
    char: "🧑",
    fitzpatrick_scale: !0,
    category: "people",
  },
  ck = {
    keywords: [
      "mustache",
      "father",
      "dad",
      "guy",
      "classy",
      "sir",
      "moustache",
    ],
    char: "👨",
    fitzpatrick_scale: !0,
    category: "people",
  },
  lk = {
    keywords: ["female", "girls", "lady"],
    char: "👩",
    fitzpatrick_scale: !0,
    category: "people",
  },
  ik = {
    keywords: ["woman", "female", "girl", "blonde", "person"],
    char: "👱‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  uk = {
    keywords: ["man", "male", "boy", "blonde", "guy", "person"],
    char: "👱",
    fitzpatrick_scale: !0,
    category: "people",
  },
  fk = {
    keywords: ["person", "bewhiskered"],
    char: "🧔",
    fitzpatrick_scale: !0,
    category: "people",
  },
  dk = {
    keywords: ["human", "elder", "senior", "gender-neutral"],
    char: "🧓",
    fitzpatrick_scale: !0,
    category: "people",
  },
  pk = {
    keywords: ["human", "male", "men", "old", "elder", "senior"],
    char: "👴",
    fitzpatrick_scale: !0,
    category: "people",
  },
  yk = {
    keywords: ["human", "female", "women", "lady", "old", "elder", "senior"],
    char: "👵",
    fitzpatrick_scale: !0,
    category: "people",
  },
  hk = {
    keywords: ["male", "boy", "chinese"],
    char: "👲",
    fitzpatrick_scale: !0,
    category: "people",
  },
  gk = {
    keywords: ["female", "hijab", "mantilla", "tichel"],
    char: "🧕",
    fitzpatrick_scale: !0,
    category: "people",
  },
  _k = {
    keywords: ["female", "indian", "hinduism", "arabs", "woman"],
    char: "👳‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  kk = {
    keywords: ["male", "indian", "hinduism", "arabs"],
    char: "👳",
    fitzpatrick_scale: !0,
    category: "people",
  },
  mk = {
    keywords: [
      "woman",
      "police",
      "law",
      "legal",
      "enforcement",
      "arrest",
      "911",
      "female",
    ],
    char: "👮‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  wk = {
    keywords: ["man", "police", "law", "legal", "enforcement", "arrest", "911"],
    char: "👮",
    fitzpatrick_scale: !0,
    category: "people",
  },
  vk = {
    keywords: [
      "female",
      "human",
      "wip",
      "build",
      "construction",
      "worker",
      "labor",
      "woman",
    ],
    char: "👷‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  zk = {
    keywords: [
      "male",
      "human",
      "wip",
      "guy",
      "build",
      "construction",
      "worker",
      "labor",
    ],
    char: "👷",
    fitzpatrick_scale: !0,
    category: "people",
  },
  bk = {
    keywords: ["uk", "gb", "british", "female", "royal", "woman"],
    char: "💂‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  xk = {
    keywords: ["uk", "gb", "british", "male", "guy", "royal"],
    char: "💂",
    fitzpatrick_scale: !0,
    category: "people",
  },
  jk = {
    keywords: ["human", "spy", "detective", "female", "woman"],
    char: "🕵️‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Sk = {
    keywords: ["human", "spy", "detective"],
    char: "🕵",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Ek = {
    keywords: ["doctor", "nurse", "therapist", "healthcare", "woman", "human"],
    char: "👩‍⚕️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Ck = {
    keywords: ["doctor", "nurse", "therapist", "healthcare", "man", "human"],
    char: "👨‍⚕️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Pk = {
    keywords: ["rancher", "gardener", "woman", "human"],
    char: "👩‍🌾",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Nk = {
    keywords: ["rancher", "gardener", "man", "human"],
    char: "👨‍🌾",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Rk = {
    keywords: ["chef", "woman", "human"],
    char: "👩‍🍳",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Lk = {
    keywords: ["chef", "man", "human"],
    char: "👨‍🍳",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Tk = {
    keywords: ["graduate", "woman", "human"],
    char: "👩‍🎓",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Ok = {
    keywords: ["graduate", "man", "human"],
    char: "👨‍🎓",
    fitzpatrick_scale: !0,
    category: "people",
  },
  qk = {
    keywords: ["rockstar", "entertainer", "woman", "human"],
    char: "👩‍🎤",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Ik = {
    keywords: ["rockstar", "entertainer", "man", "human"],
    char: "👨‍🎤",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Dk = {
    keywords: ["instructor", "professor", "woman", "human"],
    char: "👩‍🏫",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Mk = {
    keywords: ["instructor", "professor", "man", "human"],
    char: "👨‍🏫",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Fk = {
    keywords: ["assembly", "industrial", "woman", "human"],
    char: "👩‍🏭",
    fitzpatrick_scale: !0,
    category: "people",
  },
  $k = {
    keywords: ["assembly", "industrial", "man", "human"],
    char: "👨‍🏭",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Uk = {
    keywords: [
      "coder",
      "developer",
      "engineer",
      "programmer",
      "software",
      "woman",
      "human",
      "laptop",
      "computer",
    ],
    char: "👩‍💻",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Ak = {
    keywords: [
      "coder",
      "developer",
      "engineer",
      "programmer",
      "software",
      "man",
      "human",
      "laptop",
      "computer",
    ],
    char: "👨‍💻",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Bk = {
    keywords: ["business", "manager", "woman", "human"],
    char: "👩‍💼",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Hk = {
    keywords: ["business", "manager", "man", "human"],
    char: "👨‍💼",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Vk = {
    keywords: ["plumber", "woman", "human", "wrench"],
    char: "👩‍🔧",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Wk = {
    keywords: ["plumber", "man", "human", "wrench"],
    char: "👨‍🔧",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Qk = {
    keywords: [
      "biologist",
      "chemist",
      "engineer",
      "physicist",
      "woman",
      "human",
    ],
    char: "👩‍🔬",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Kk = {
    keywords: ["biologist", "chemist", "engineer", "physicist", "man", "human"],
    char: "👨‍🔬",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Yk = {
    keywords: ["painter", "woman", "human"],
    char: "👩‍🎨",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Xk = {
    keywords: ["painter", "man", "human"],
    char: "👨‍🎨",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Gk = {
    keywords: ["fireman", "woman", "human"],
    char: "👩‍🚒",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Zk = {
    keywords: ["fireman", "man", "human"],
    char: "👨‍🚒",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Jk = {
    keywords: ["aviator", "plane", "woman", "human"],
    char: "👩‍✈️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  em = {
    keywords: ["aviator", "plane", "man", "human"],
    char: "👨‍✈️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  tm = {
    keywords: ["space", "rocket", "woman", "human"],
    char: "👩‍🚀",
    fitzpatrick_scale: !0,
    category: "people",
  },
  am = {
    keywords: ["space", "rocket", "man", "human"],
    char: "👨‍🚀",
    fitzpatrick_scale: !0,
    category: "people",
  },
  rm = {
    keywords: ["justice", "court", "woman", "human"],
    char: "👩‍⚖️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  nm = {
    keywords: ["justice", "court", "man", "human"],
    char: "👨‍⚖️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  om = {
    keywords: ["woman", "female", "good", "heroine", "superpowers"],
    char: "🦸‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  sm = {
    keywords: ["man", "male", "good", "hero", "superpowers"],
    char: "🦸‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  cm = {
    keywords: [
      "woman",
      "female",
      "evil",
      "bad",
      "criminal",
      "heroine",
      "superpowers",
    ],
    char: "🦹‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  lm = {
    keywords: ["man", "male", "evil", "bad", "criminal", "hero", "superpowers"],
    char: "🦹‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  im = {
    keywords: ["woman", "female", "xmas", "mother christmas"],
    char: "🤶",
    fitzpatrick_scale: !0,
    category: "people",
  },
  um = {
    keywords: ["festival", "man", "male", "xmas", "father christmas"],
    char: "🎅",
    fitzpatrick_scale: !0,
    category: "people",
  },
  fm = {
    keywords: ["woman", "female", "mage", "witch"],
    char: "🧙‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  dm = {
    keywords: ["man", "male", "mage", "sorcerer"],
    char: "🧙‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  pm = {
    keywords: ["woman", "female"],
    char: "🧝‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  ym = {
    keywords: ["man", "male"],
    char: "🧝‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  hm = {
    keywords: ["woman", "female"],
    char: "🧛‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  gm = {
    keywords: ["man", "male", "dracula"],
    char: "🧛‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  _m = {
    keywords: ["woman", "female", "undead", "walking dead"],
    char: "🧟‍♀️",
    fitzpatrick_scale: !1,
    category: "people",
  },
  km = {
    keywords: ["man", "male", "dracula", "undead", "walking dead"],
    char: "🧟‍♂️",
    fitzpatrick_scale: !1,
    category: "people",
  },
  mm = {
    keywords: ["woman", "female"],
    char: "🧞‍♀️",
    fitzpatrick_scale: !1,
    category: "people",
  },
  wm = {
    keywords: ["man", "male"],
    char: "🧞‍♂️",
    fitzpatrick_scale: !1,
    category: "people",
  },
  vm = {
    keywords: ["woman", "female", "merwoman", "ariel"],
    char: "🧜‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  zm = {
    keywords: ["man", "male", "triton"],
    char: "🧜‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  bm = {
    keywords: ["woman", "female"],
    char: "🧚‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  xm = {
    keywords: ["man", "male"],
    char: "🧚‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  jm = {
    keywords: ["heaven", "wings", "halo"],
    char: "👼",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Sm = {
    keywords: ["baby"],
    char: "🤰",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Em = {
    keywords: ["nursing", "baby"],
    char: "🤱",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Cm = {
    keywords: ["girl", "woman", "female", "blond", "crown", "royal", "queen"],
    char: "👸",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Pm = {
    keywords: ["boy", "man", "male", "crown", "royal", "king"],
    char: "🤴",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Nm = {
    keywords: ["couple", "marriage", "wedding", "woman", "bride"],
    char: "👰",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Rm = {
    keywords: ["couple", "marriage", "wedding", "groom"],
    char: "🤵",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Lm = {
    keywords: ["woman", "walking", "exercise", "race", "running", "female"],
    char: "🏃‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Tm = {
    keywords: ["man", "walking", "exercise", "race", "running"],
    char: "🏃",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Om = {
    keywords: ["human", "feet", "steps", "woman", "female"],
    char: "🚶‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  qm = {
    keywords: ["human", "feet", "steps"],
    char: "🚶",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Im = {
    keywords: ["female", "girl", "woman", "fun"],
    char: "💃",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Dm = {
    keywords: ["male", "boy", "fun", "dancer"],
    char: "🕺",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Mm = {
    keywords: ["female", "bunny", "women", "girls"],
    char: "👯",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Fm = {
    keywords: ["male", "bunny", "men", "boys"],
    char: "👯‍♂️",
    fitzpatrick_scale: !1,
    category: "people",
  },
  $m = {
    keywords: [
      "pair",
      "people",
      "human",
      "love",
      "date",
      "dating",
      "like",
      "affection",
      "valentines",
      "marriage",
    ],
    char: "👫",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Um = {
    keywords: [
      "pair",
      "couple",
      "love",
      "like",
      "bromance",
      "friendship",
      "people",
      "human",
    ],
    char: "👬",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Am = {
    keywords: [
      "pair",
      "friendship",
      "couple",
      "love",
      "like",
      "female",
      "people",
      "human",
    ],
    char: "👭",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Bm = {
    keywords: ["woman", "female", "girl"],
    char: "🙇‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Hm = {
    keywords: ["man", "male", "boy"],
    char: "🙇",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Vm = {
    keywords: ["man", "male", "boy", "disbelief"],
    char: "🤦‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Wm = {
    keywords: ["woman", "female", "girl", "disbelief"],
    char: "🤦‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Qm = {
    keywords: ["woman", "female", "girl", "confused", "indifferent", "doubt"],
    char: "🤷",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Km = {
    keywords: ["man", "male", "boy", "confused", "indifferent", "doubt"],
    char: "🤷‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Ym = {
    keywords: ["female", "girl", "woman", "human", "information"],
    char: "💁",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Xm = {
    keywords: ["male", "boy", "man", "human", "information"],
    char: "💁‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Gm = {
    keywords: ["female", "girl", "woman", "nope"],
    char: "🙅",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Zm = {
    keywords: ["male", "boy", "man", "nope"],
    char: "🙅‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Jm = {
    keywords: ["women", "girl", "female", "pink", "human", "woman"],
    char: "🙆",
    fitzpatrick_scale: !0,
    category: "people",
  },
  ew = {
    keywords: ["men", "boy", "male", "blue", "human", "man"],
    char: "🙆‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  tw = {
    keywords: ["female", "girl", "woman"],
    char: "🙋",
    fitzpatrick_scale: !0,
    category: "people",
  },
  aw = {
    keywords: ["male", "boy", "man"],
    char: "🙋‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  rw = {
    keywords: ["female", "girl", "woman"],
    char: "🙎",
    fitzpatrick_scale: !0,
    category: "people",
  },
  nw = {
    keywords: ["male", "boy", "man"],
    char: "🙎‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  ow = {
    keywords: [
      "female",
      "girl",
      "woman",
      "sad",
      "depressed",
      "discouraged",
      "unhappy",
    ],
    char: "🙍",
    fitzpatrick_scale: !0,
    category: "people",
  },
  sw = {
    keywords: [
      "male",
      "boy",
      "man",
      "sad",
      "depressed",
      "discouraged",
      "unhappy",
    ],
    char: "🙍‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  cw = {
    keywords: ["female", "girl", "woman"],
    char: "💇",
    fitzpatrick_scale: !0,
    category: "people",
  },
  lw = {
    keywords: ["male", "boy", "man"],
    char: "💇‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  iw = {
    keywords: ["female", "girl", "woman", "head"],
    char: "💆",
    fitzpatrick_scale: !0,
    category: "people",
  },
  uw = {
    keywords: ["male", "boy", "man", "head"],
    char: "💆‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  fw = {
    keywords: ["female", "woman", "spa", "steamroom", "sauna"],
    char: "🧖‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  dw = {
    keywords: ["male", "man", "spa", "steamroom", "sauna"],
    char: "🧖‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  pw = {
    keywords: [
      "pair",
      "love",
      "like",
      "affection",
      "human",
      "dating",
      "valentines",
      "marriage",
    ],
    char: "💑",
    fitzpatrick_scale: !1,
    category: "people",
  },
  yw = {
    keywords: [
      "pair",
      "love",
      "like",
      "affection",
      "human",
      "dating",
      "valentines",
      "marriage",
    ],
    char: "👩‍❤️‍👩",
    fitzpatrick_scale: !1,
    category: "people",
  },
  hw = {
    keywords: [
      "pair",
      "love",
      "like",
      "affection",
      "human",
      "dating",
      "valentines",
      "marriage",
    ],
    char: "👨‍❤️‍👨",
    fitzpatrick_scale: !1,
    category: "people",
  },
  gw = {
    keywords: ["pair", "valentines", "love", "like", "dating", "marriage"],
    char: "💏",
    fitzpatrick_scale: !1,
    category: "people",
  },
  _w = {
    keywords: ["pair", "valentines", "love", "like", "dating", "marriage"],
    char: "👩‍❤️‍💋‍👩",
    fitzpatrick_scale: !1,
    category: "people",
  },
  kw = {
    keywords: ["pair", "valentines", "love", "like", "dating", "marriage"],
    char: "👨‍❤️‍💋‍👨",
    fitzpatrick_scale: !1,
    category: "people",
  },
  mw = {
    keywords: [
      "home",
      "parents",
      "child",
      "mom",
      "dad",
      "father",
      "mother",
      "people",
      "human",
    ],
    char: "👪",
    fitzpatrick_scale: !1,
    category: "people",
  },
  ww = {
    keywords: ["home", "parents", "people", "human", "child"],
    char: "👨‍👩‍👧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  vw = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👨‍👩‍👧‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  zw = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👨‍👩‍👦‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  bw = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👨‍👩‍👧‍👧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  xw = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👩‍👩‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  jw = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👩‍👩‍👧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Sw = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👩‍👩‍👧‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ew = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👩‍👩‍👦‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Cw = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👩‍👩‍👧‍👧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Pw = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👨‍👨‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Nw = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👨‍👨‍👧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Rw = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👨‍👨‍👧‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Lw = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👨‍👨‍👦‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Tw = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👨‍👨‍👧‍👧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ow = {
    keywords: ["home", "parent", "people", "human", "child"],
    char: "👩‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  qw = {
    keywords: ["home", "parent", "people", "human", "child"],
    char: "👩‍👧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Iw = {
    keywords: ["home", "parent", "people", "human", "children"],
    char: "👩‍👧‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Dw = {
    keywords: ["home", "parent", "people", "human", "children"],
    char: "👩‍👦‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Mw = {
    keywords: ["home", "parent", "people", "human", "children"],
    char: "👩‍👧‍👧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Fw = {
    keywords: ["home", "parent", "people", "human", "child"],
    char: "👨‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  $w = {
    keywords: ["home", "parent", "people", "human", "child"],
    char: "👨‍👧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Uw = {
    keywords: ["home", "parent", "people", "human", "children"],
    char: "👨‍👧‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Aw = {
    keywords: ["home", "parent", "people", "human", "children"],
    char: "👨‍👦‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Bw = {
    keywords: ["home", "parent", "people", "human", "children"],
    char: "👨‍👧‍👧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Hw = {
    keywords: ["ball", "crochet", "knit"],
    char: "🧶",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Vw = {
    keywords: ["needle", "sewing", "spool", "string"],
    char: "🧵",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ww = {
    keywords: ["jacket"],
    char: "🧥",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Qw = {
    keywords: ["doctor", "experiment", "scientist", "chemist"],
    char: "🥼",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Kw = {
    keywords: ["fashion", "shopping_bags", "female"],
    char: "👚",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Yw = {
    keywords: ["fashion", "cloth", "casual", "shirt", "tee"],
    char: "👕",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Xw = {
    keywords: ["fashion", "shopping"],
    char: "👖",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Gw = {
    keywords: ["shirt", "suitup", "formal", "fashion", "cloth", "business"],
    char: "👔",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Zw = {
    keywords: ["clothes", "fashion", "shopping"],
    char: "👗",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Jw = {
    keywords: [
      "swimming",
      "female",
      "woman",
      "girl",
      "fashion",
      "beach",
      "summer",
    ],
    char: "👙",
    fitzpatrick_scale: !1,
    category: "people",
  },
  ev = {
    keywords: ["dress", "fashion", "women", "female", "japanese"],
    char: "👘",
    fitzpatrick_scale: !1,
    category: "people",
  },
  tv = {
    keywords: ["female", "girl", "fashion", "woman"],
    char: "💄",
    fitzpatrick_scale: !1,
    category: "people",
  },
  av = {
    keywords: ["face", "lips", "love", "like", "affection", "valentines"],
    char: "💋",
    fitzpatrick_scale: !1,
    category: "people",
  },
  rv = {
    keywords: ["feet", "tracking", "walking", "beach"],
    char: "👣",
    fitzpatrick_scale: !1,
    category: "people",
  },
  nv = {
    keywords: ["ballet", "slip-on", "slipper"],
    char: "🥿",
    fitzpatrick_scale: !1,
    category: "people",
  },
  ov = {
    keywords: ["fashion", "shoes", "female", "pumps", "stiletto"],
    char: "👠",
    fitzpatrick_scale: !1,
    category: "people",
  },
  sv = {
    keywords: ["shoes", "fashion", "flip flops"],
    char: "👡",
    fitzpatrick_scale: !1,
    category: "people",
  },
  cv = {
    keywords: ["shoes", "fashion"],
    char: "👢",
    fitzpatrick_scale: !1,
    category: "people",
  },
  lv = {
    keywords: ["fashion", "male"],
    char: "👞",
    fitzpatrick_scale: !1,
    category: "people",
  },
  iv = {
    keywords: ["shoes", "sports", "sneakers"],
    char: "👟",
    fitzpatrick_scale: !1,
    category: "people",
  },
  uv = {
    keywords: ["backpacking", "camping", "hiking"],
    char: "🥾",
    fitzpatrick_scale: !1,
    category: "people",
  },
  fv = {
    keywords: ["stockings", "clothes"],
    char: "🧦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  dv = {
    keywords: ["hands", "winter", "clothes"],
    char: "🧤",
    fitzpatrick_scale: !1,
    category: "people",
  },
  pv = {
    keywords: ["neck", "winter", "clothes"],
    char: "🧣",
    fitzpatrick_scale: !1,
    category: "people",
  },
  yv = {
    keywords: ["fashion", "accessories", "female", "lady", "spring"],
    char: "👒",
    fitzpatrick_scale: !1,
    category: "people",
  },
  hv = {
    keywords: ["magic", "gentleman", "classy", "circus"],
    char: "🎩",
    fitzpatrick_scale: !1,
    category: "people",
  },
  gv = {
    keywords: ["cap", "baseball"],
    char: "🧢",
    fitzpatrick_scale: !1,
    category: "people",
  },
  _v = {
    keywords: ["construction", "build"],
    char: "⛑",
    fitzpatrick_scale: !1,
    category: "people",
  },
  kv = {
    keywords: [
      "school",
      "college",
      "degree",
      "university",
      "graduation",
      "cap",
      "hat",
      "legal",
      "learn",
      "education",
    ],
    char: "🎓",
    fitzpatrick_scale: !1,
    category: "people",
  },
  mv = {
    keywords: ["king", "kod", "leader", "royalty", "lord"],
    char: "👑",
    fitzpatrick_scale: !1,
    category: "people",
  },
  wv = {
    keywords: ["student", "education", "bag", "backpack"],
    char: "🎒",
    fitzpatrick_scale: !1,
    category: "people",
  },
  vv = {
    keywords: ["packing", "travel"],
    char: "🧳",
    fitzpatrick_scale: !1,
    category: "people",
  },
  zv = {
    keywords: ["bag", "accessories", "shopping"],
    char: "👝",
    fitzpatrick_scale: !1,
    category: "people",
  },
  bv = {
    keywords: ["fashion", "accessories", "money", "sales", "shopping"],
    char: "👛",
    fitzpatrick_scale: !1,
    category: "people",
  },
  xv = {
    keywords: ["fashion", "accessory", "accessories", "shopping"],
    char: "👜",
    fitzpatrick_scale: !1,
    category: "people",
  },
  jv = {
    keywords: [
      "business",
      "documents",
      "work",
      "law",
      "legal",
      "job",
      "career",
    ],
    char: "💼",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Sv = {
    keywords: ["fashion", "accessories", "eyesight", "nerdy", "dork", "geek"],
    char: "👓",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ev = {
    keywords: ["face", "cool", "accessories"],
    char: "🕶",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Cv = {
    keywords: ["eyes", "protection", "safety"],
    char: "🥽",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Pv = {
    keywords: [
      "wedding",
      "propose",
      "marriage",
      "valentines",
      "diamond",
      "fashion",
      "jewelry",
      "gem",
      "engagement",
    ],
    char: "💍",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Nv = {
    keywords: ["weather", "rain", "drizzle"],
    char: "🌂",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Rv = {
    keywords: [
      "animal",
      "friend",
      "nature",
      "woof",
      "puppy",
      "pet",
      "faithful",
    ],
    char: "🐶",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Lv = {
    keywords: ["animal", "meow", "nature", "pet", "kitten"],
    char: "🐱",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Tv = {
    keywords: ["animal", "nature", "cheese_wedge", "rodent"],
    char: "🐭",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Ov = {
    keywords: ["animal", "nature"],
    char: "🐹",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  qv = {
    keywords: ["animal", "nature", "pet", "spring", "magic", "bunny"],
    char: "🐰",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Iv = {
    keywords: ["animal", "nature", "face"],
    char: "🦊",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Dv = {
    keywords: ["animal", "nature", "wild"],
    char: "🐻",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Mv = {
    keywords: ["animal", "nature", "panda"],
    char: "🐼",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Fv = {
    keywords: ["animal", "nature"],
    char: "🐨",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  $v = {
    keywords: ["animal", "cat", "danger", "wild", "nature", "roar"],
    char: "🐯",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Uv = {
    keywords: ["animal", "nature"],
    char: "🦁",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Av = {
    keywords: ["beef", "ox", "animal", "nature", "moo", "milk"],
    char: "🐮",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Bv = {
    keywords: ["animal", "oink", "nature"],
    char: "🐷",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Hv = {
    keywords: ["animal", "oink"],
    char: "🐽",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Vv = {
    keywords: ["animal", "nature", "croak", "toad"],
    char: "🐸",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Wv = {
    keywords: ["animal", "nature", "ocean", "sea"],
    char: "🦑",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Qv = {
    keywords: ["animal", "creature", "ocean", "sea", "nature", "beach"],
    char: "🐙",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Kv = {
    keywords: ["animal", "ocean", "nature", "seafood"],
    char: "🦐",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Yv = {
    keywords: ["animal", "nature", "circus"],
    char: "🐵",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Xv = {
    keywords: ["animal", "nature", "circus"],
    char: "🦍",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Gv = {
    keywords: ["monkey", "animal", "nature", "haha"],
    char: "🙈",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Zv = {
    keywords: ["animal", "monkey", "nature"],
    char: "🙉",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Jv = {
    keywords: ["monkey", "animal", "nature", "omg"],
    char: "🙊",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  ez = {
    keywords: ["animal", "nature", "banana", "circus"],
    char: "🐒",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  tz = {
    keywords: ["animal", "cluck", "nature", "bird"],
    char: "🐔",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  az = {
    keywords: ["animal", "nature"],
    char: "🐧",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  rz = {
    keywords: ["animal", "nature", "fly", "tweet", "spring"],
    char: "🐦",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  nz = {
    keywords: ["animal", "chicken", "bird"],
    char: "🐤",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  oz = {
    keywords: ["animal", "chicken", "egg", "born", "baby", "bird"],
    char: "🐣",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  sz = {
    keywords: ["animal", "chicken", "baby", "bird"],
    char: "🐥",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  cz = {
    keywords: ["animal", "nature", "bird", "mallard"],
    char: "🦆",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  lz = {
    keywords: ["animal", "nature", "bird"],
    char: "🦅",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  iz = {
    keywords: ["animal", "nature", "bird", "hoot"],
    char: "🦉",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  uz = {
    keywords: ["animal", "nature", "blind", "vampire"],
    char: "🦇",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  fz = {
    keywords: ["animal", "nature", "wild"],
    char: "🐺",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  dz = {
    keywords: ["animal", "nature"],
    char: "🐗",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  pz = {
    keywords: ["animal", "brown", "nature"],
    char: "🐴",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  yz = {
    keywords: ["animal", "nature", "mystical"],
    char: "🦄",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  hz = {
    keywords: ["animal", "insect", "nature", "bug", "spring", "honey"],
    char: "🐝",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  gz = {
    keywords: ["animal", "insect", "nature", "worm"],
    char: "🐛",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  _z = {
    keywords: ["animal", "insect", "nature", "caterpillar"],
    char: "🦋",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  kz = {
    keywords: ["slow", "animal", "shell"],
    char: "🐌",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  mz = {
    keywords: ["animal", "insect", "nature", "ladybug"],
    char: "🐞",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  wz = {
    keywords: ["animal", "insect", "nature", "bug"],
    char: "🐜",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  vz = {
    keywords: ["animal", "cricket", "chirp"],
    char: "🦗",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  zz = {
    keywords: ["animal", "arachnid"],
    char: "🕷",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  bz = {
    keywords: ["animal", "arachnid"],
    char: "🦂",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  xz = {
    keywords: ["animal", "crustacean"],
    char: "🦀",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  jz = {
    keywords: ["animal", "evil", "nature", "hiss", "python"],
    char: "🐍",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Sz = {
    keywords: ["animal", "nature", "reptile"],
    char: "🦎",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Ez = {
    keywords: [
      "animal",
      "nature",
      "dinosaur",
      "brachiosaurus",
      "brontosaurus",
      "diplodocus",
      "extinct",
    ],
    char: "🦕",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Cz = {
    keywords: ["animal", "slow", "nature", "tortoise"],
    char: "🐢",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Pz = {
    keywords: ["animal", "swim", "ocean", "beach", "nemo"],
    char: "🐠",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Nz = {
    keywords: ["animal", "food", "nature"],
    char: "🐟",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Rz = {
    keywords: ["animal", "nature", "food", "sea", "ocean"],
    char: "🐡",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Lz = {
    keywords: [
      "animal",
      "nature",
      "fish",
      "sea",
      "ocean",
      "flipper",
      "fins",
      "beach",
    ],
    char: "🐬",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Tz = {
    keywords: [
      "animal",
      "nature",
      "fish",
      "sea",
      "ocean",
      "jaws",
      "fins",
      "beach",
    ],
    char: "🦈",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Oz = {
    keywords: ["animal", "nature", "sea", "ocean"],
    char: "🐳",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  qz = {
    keywords: ["animal", "nature", "sea", "ocean"],
    char: "🐋",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Iz = {
    keywords: ["animal", "nature", "reptile", "lizard", "alligator"],
    char: "🐊",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Dz = {
    keywords: ["animal", "nature"],
    char: "🐆",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Mz = {
    keywords: ["animal", "nature", "stripes", "safari"],
    char: "🦓",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Fz = {
    keywords: ["animal", "nature", "roar"],
    char: "🐅",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  $z = {
    keywords: ["animal", "nature", "ox", "cow"],
    char: "🐃",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Uz = {
    keywords: ["animal", "cow", "beef"],
    char: "🐂",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Az = {
    keywords: ["beef", "ox", "animal", "nature", "moo", "milk"],
    char: "🐄",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Bz = {
    keywords: ["animal", "nature", "horns", "venison"],
    char: "🦌",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Hz = {
    keywords: ["animal", "hot", "desert", "hump"],
    char: "🐪",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Vz = {
    keywords: ["animal", "nature", "hot", "desert", "hump"],
    char: "🐫",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Wz = {
    keywords: ["animal", "nature", "spots", "safari"],
    char: "🦒",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Qz = {
    keywords: ["animal", "nature", "nose", "th", "circus"],
    char: "🐘",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Kz = {
    keywords: ["animal", "nature", "horn"],
    char: "🦏",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Yz = {
    keywords: ["animal", "nature"],
    char: "🐐",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Xz = {
    keywords: ["animal", "sheep", "nature"],
    char: "🐏",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Gz = {
    keywords: ["animal", "nature", "wool", "shipit"],
    char: "🐑",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Zz = {
    keywords: ["animal", "gamble", "luck"],
    char: "🐎",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Jz = {
    keywords: ["animal", "nature"],
    char: "🐖",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  eb = {
    keywords: ["animal", "mouse", "rodent"],
    char: "🐀",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  tb = {
    keywords: ["animal", "nature", "rodent"],
    char: "🐁",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  ab = {
    keywords: ["animal", "nature", "chicken"],
    char: "🐓",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  rb = {
    keywords: ["animal", "bird"],
    char: "🦃",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  nb = {
    keywords: ["animal", "bird"],
    char: "🕊",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  ob = {
    keywords: ["animal", "nature", "friend", "doge", "pet", "faithful"],
    char: "🐕",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  sb = {
    keywords: ["dog", "animal", "101", "nature", "pet"],
    char: "🐩",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  cb = {
    keywords: ["animal", "meow", "pet", "cats"],
    char: "🐈",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  lb = {
    keywords: ["animal", "nature", "pet", "magic", "spring"],
    char: "🐇",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  ib = {
    keywords: ["animal", "nature", "rodent", "squirrel"],
    char: "🐿",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  ub = {
    keywords: ["animal", "nature", "spiny"],
    char: "🦔",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  fb = {
    keywords: ["animal", "nature"],
    char: "🦝",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  db = {
    keywords: ["animal", "nature", "alpaca"],
    char: "🦙",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  pb = {
    keywords: ["animal", "nature"],
    char: "🦛",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  yb = {
    keywords: ["animal", "nature", "australia", "joey", "hop", "marsupial"],
    char: "🦘",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  hb = {
    keywords: ["animal", "nature", "honey"],
    char: "🦡",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  gb = {
    keywords: ["animal", "nature", "bird"],
    char: "🦢",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  _b = {
    keywords: ["animal", "nature", "peahen", "bird"],
    char: "🦚",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  kb = {
    keywords: ["animal", "nature", "bird", "pirate", "talk"],
    char: "🦜",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  mb = {
    keywords: ["animal", "nature", "bisque", "claws", "seafood"],
    char: "🦞",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  wb = {
    keywords: ["animal", "nature", "insect", "malaria"],
    char: "🦟",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  vb = {
    keywords: ["animal", "tracking", "footprints", "dog", "cat", "pet", "feet"],
    char: "🐾",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  zb = {
    keywords: ["animal", "myth", "nature", "chinese", "green"],
    char: "🐉",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  bb = {
    keywords: ["animal", "myth", "nature", "chinese", "green"],
    char: "🐲",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  xb = {
    keywords: ["vegetable", "plant", "nature"],
    char: "🌵",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  jb = {
    keywords: ["festival", "vacation", "december", "xmas", "celebration"],
    char: "🎄",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Sb = {
    keywords: ["plant", "nature"],
    char: "🌲",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Eb = {
    keywords: ["plant", "nature"],
    char: "🌳",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Cb = {
    keywords: [
      "plant",
      "vegetable",
      "nature",
      "summer",
      "beach",
      "mojito",
      "tropical",
    ],
    char: "🌴",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Pb = {
    keywords: ["plant", "nature", "grass", "lawn", "spring"],
    char: "🌱",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Nb = {
    keywords: ["vegetable", "plant", "medicine", "weed", "grass", "lawn"],
    char: "🌿",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Rb = {
    keywords: ["vegetable", "plant", "nature", "irish", "clover"],
    char: "☘",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Lb = {
    keywords: ["vegetable", "plant", "nature", "lucky", "irish"],
    char: "🍀",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Tb = {
    keywords: ["plant", "nature", "vegetable", "panda", "pine_decoration"],
    char: "🎍",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Ob = {
    keywords: ["plant", "nature", "branch", "summer"],
    char: "🎋",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  qb = {
    keywords: [
      "nature",
      "plant",
      "tree",
      "vegetable",
      "grass",
      "lawn",
      "spring",
    ],
    char: "🍃",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Ib = {
    keywords: ["nature", "plant", "vegetable", "leaves"],
    char: "🍂",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Db = {
    keywords: ["nature", "plant", "vegetable", "ca", "fall"],
    char: "🍁",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Mb = {
    keywords: ["nature", "plant"],
    char: "🌾",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Fb = {
    keywords: ["plant", "vegetable", "flowers", "beach"],
    char: "🌺",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  $b = {
    keywords: ["nature", "plant", "fall"],
    char: "🌻",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Ub = {
    keywords: ["flowers", "valentines", "love", "spring"],
    char: "🌹",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Ab = {
    keywords: ["plant", "nature", "flower"],
    char: "🥀",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Bb = {
    keywords: ["flowers", "plant", "nature", "summer", "spring"],
    char: "🌷",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Hb = {
    keywords: ["nature", "flowers", "yellow"],
    char: "🌼",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Vb = {
    keywords: ["nature", "plant", "spring", "flower"],
    char: "🌸",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Wb = {
    keywords: ["flowers", "nature", "spring"],
    char: "💐",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Qb = {
    keywords: ["plant", "vegetable"],
    char: "🍄",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Kb = {
    keywords: ["food", "squirrel"],
    char: "🌰",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Yb = {
    keywords: ["halloween", "light", "pumpkin", "creepy", "fall"],
    char: "🎃",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Xb = {
    keywords: ["nature", "sea", "beach"],
    char: "🐚",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Gb = {
    keywords: ["animal", "insect", "arachnid", "silk"],
    char: "🕸",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Zb = {
    keywords: ["globe", "world", "USA", "international"],
    char: "🌎",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  Jb = {
    keywords: ["globe", "world", "international"],
    char: "🌍",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  e0 = {
    keywords: ["globe", "world", "east", "international"],
    char: "🌏",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  t0 = {
    keywords: [
      "nature",
      "yellow",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
    ],
    char: "🌕",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  a0 = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
      "waxing_gibbous_moon",
    ],
    char: "🌖",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  r0 = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
    ],
    char: "🌗",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  n0 = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
    ],
    char: "🌘",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  o0 = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
    ],
    char: "🌑",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  s0 = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
    ],
    char: "🌒",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  c0 = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
    ],
    char: "🌓",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  l0 = {
    keywords: [
      "nature",
      "night",
      "sky",
      "gray",
      "twilight",
      "planet",
      "space",
      "evening",
      "sleep",
    ],
    char: "🌔",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  i0 = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
    ],
    char: "🌚",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  u0 = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
    ],
    char: "🌝",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  f0 = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
    ],
    char: "🌛",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  d0 = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
    ],
    char: "🌜",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  p0 = {
    keywords: ["nature", "morning", "sky"],
    char: "🌞",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  y0 = {
    keywords: ["night", "sleep", "sky", "evening", "magic"],
    char: "🌙",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  h0 = {
    keywords: ["night", "yellow"],
    char: "⭐",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  g0 = {
    keywords: ["night", "sparkle", "awesome", "good", "magic"],
    char: "🌟",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  _0 = {
    keywords: ["star", "sparkle", "shoot", "magic"],
    char: "💫",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  k0 = {
    keywords: ["stars", "shine", "shiny", "cool", "awesome", "good", "magic"],
    char: "✨",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  m0 = {
    keywords: ["space"],
    char: "☄",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  w0 = {
    keywords: ["weather", "nature", "brightness", "summer", "beach", "spring"],
    char: "☀️",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  v0 = {
    keywords: ["weather"],
    char: "🌤",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  z0 = {
    keywords: ["weather", "nature", "cloudy", "morning", "fall", "spring"],
    char: "⛅",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  b0 = {
    keywords: ["weather"],
    char: "🌥",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  x0 = {
    keywords: ["weather"],
    char: "🌦",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  j0 = {
    keywords: ["weather", "sky"],
    char: "☁️",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  S0 = {
    keywords: ["weather"],
    char: "🌧",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  E0 = {
    keywords: ["weather", "lightning"],
    char: "⛈",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  C0 = {
    keywords: ["weather", "thunder"],
    char: "🌩",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  P0 = {
    keywords: ["thunder", "weather", "lightning bolt", "fast"],
    char: "⚡",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  N0 = {
    keywords: ["hot", "cook", "flame"],
    char: "🔥",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  R0 = {
    keywords: ["bomb", "explode", "explosion", "collision", "blown"],
    char: "💥",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  L0 = {
    keywords: ["winter", "season", "cold", "weather", "christmas", "xmas"],
    char: "❄️",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  T0 = {
    keywords: ["weather"],
    char: "🌨",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  O0 = {
    keywords: [
      "winter",
      "season",
      "cold",
      "weather",
      "christmas",
      "xmas",
      "frozen",
      "without_snow",
    ],
    char: "⛄",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  q0 = {
    keywords: [
      "winter",
      "season",
      "cold",
      "weather",
      "christmas",
      "xmas",
      "frozen",
    ],
    char: "☃",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  I0 = {
    keywords: ["gust", "air"],
    char: "🌬",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  D0 = {
    keywords: ["wind", "air", "fast", "shoo", "fart", "smoke", "puff"],
    char: "💨",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  M0 = {
    keywords: ["weather", "cyclone", "twister"],
    char: "🌪",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  F0 = {
    keywords: ["weather"],
    char: "🌫",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  $0 = {
    keywords: ["weather", "spring"],
    char: "☂",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  U0 = {
    keywords: ["rainy", "weather", "spring"],
    char: "☔",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  A0 = {
    keywords: ["water", "drip", "faucet", "spring"],
    char: "💧",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  B0 = {
    keywords: ["water", "drip", "oops"],
    char: "💦",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  H0 = {
    keywords: ["sea", "water", "wave", "nature", "tsunami", "disaster"],
    char: "🌊",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  V0 = {
    keywords: ["fruit", "nature"],
    char: "🍏",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  W0 = {
    keywords: ["fruit", "mac", "school"],
    char: "🍎",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Q0 = {
    keywords: ["fruit", "nature", "food"],
    char: "🍐",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  K0 = {
    keywords: ["food", "fruit", "nature", "orange"],
    char: "🍊",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Y0 = {
    keywords: ["fruit", "nature"],
    char: "🍋",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  X0 = {
    keywords: ["fruit", "food", "monkey"],
    char: "🍌",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  G0 = {
    keywords: ["fruit", "food", "picnic", "summer"],
    char: "🍉",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Z0 = {
    keywords: ["fruit", "food", "wine"],
    char: "🍇",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  J0 = {
    keywords: ["fruit", "food", "nature"],
    char: "🍓",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  e1 = {
    keywords: ["fruit", "nature", "food"],
    char: "🍈",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  t1 = {
    keywords: ["food", "fruit"],
    char: "🍒",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  a1 = {
    keywords: ["fruit", "nature", "food"],
    char: "🍑",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  r1 = {
    keywords: ["fruit", "nature", "food"],
    char: "🍍",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  n1 = {
    keywords: ["fruit", "nature", "food", "palm"],
    char: "🥥",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  o1 = {
    keywords: ["fruit", "food"],
    char: "🥝",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  s1 = {
    keywords: ["fruit", "food", "tropical"],
    char: "🥭",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  c1 = {
    keywords: ["fruit", "food"],
    char: "🥑",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  l1 = {
    keywords: ["fruit", "food", "vegetable"],
    char: "🥦",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  i1 = {
    keywords: ["fruit", "vegetable", "nature", "food"],
    char: "🍅",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  u1 = {
    keywords: ["vegetable", "nature", "food", "aubergine"],
    char: "🍆",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  f1 = {
    keywords: ["fruit", "food", "pickle"],
    char: "🥒",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  d1 = {
    keywords: ["vegetable", "food", "orange"],
    char: "🥕",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  p1 = {
    keywords: ["food", "spicy", "chilli", "chili"],
    char: "🌶",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  y1 = {
    keywords: ["food", "tuber", "vegatable", "starch"],
    char: "🥔",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  h1 = {
    keywords: ["food", "vegetable", "plant"],
    char: "🌽",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  g1 = {
    keywords: [
      "food",
      "vegetable",
      "plant",
      "bok choy",
      "cabbage",
      "kale",
      "lettuce",
    ],
    char: "🥬",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  _1 = {
    keywords: ["food", "nature"],
    char: "🍠",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  k1 = {
    keywords: ["food", "nut"],
    char: "🥜",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  m1 = {
    keywords: ["bees", "sweet", "kitchen"],
    char: "🍯",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  w1 = {
    keywords: ["food", "bread", "french"],
    char: "🥐",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  v1 = {
    keywords: ["food", "wheat", "breakfast", "toast"],
    char: "🍞",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  z1 = {
    keywords: ["food", "bread", "french"],
    char: "🥖",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  b1 = {
    keywords: ["food", "bread", "bakery", "schmear"],
    char: "🥯",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  x1 = {
    keywords: ["food", "bread", "twisted"],
    char: "🥨",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  j1 = {
    keywords: ["food", "chadder"],
    char: "🧀",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  S1 = {
    keywords: ["food", "chicken", "breakfast"],
    char: "🥚",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  E1 = {
    keywords: ["food", "breakfast", "pork", "pig", "meat"],
    char: "🥓",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  C1 = {
    keywords: ["food", "cow", "meat", "cut", "chop", "lambchop", "porkchop"],
    char: "🥩",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  P1 = {
    keywords: ["food", "breakfast", "flapjacks", "hotcakes"],
    char: "🥞",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  N1 = {
    keywords: ["food", "meat", "drumstick", "bird", "chicken", "turkey"],
    char: "🍗",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  R1 = {
    keywords: ["good", "food", "drumstick"],
    char: "🍖",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  L1 = {
    keywords: ["skeleton"],
    char: "🦴",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  T1 = {
    keywords: ["food", "animal", "appetizer", "summer"],
    char: "🍤",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  O1 = {
    keywords: ["food", "breakfast", "kitchen", "egg"],
    char: "🍳",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  q1 = {
    keywords: [
      "meat",
      "fast food",
      "beef",
      "cheeseburger",
      "mcdonalds",
      "burger king",
    ],
    char: "🍔",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  I1 = {
    keywords: ["chips", "snack", "fast food"],
    char: "🍟",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  D1 = {
    keywords: ["food", "flatbread", "stuffed", "gyro"],
    char: "🥙",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  M1 = {
    keywords: ["food", "frankfurter"],
    char: "🌭",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  F1 = {
    keywords: ["food", "party"],
    char: "🍕",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  $1 = {
    keywords: ["food", "lunch", "bread"],
    char: "🥪",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  U1 = {
    keywords: ["food", "soup"],
    char: "🥫",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  A1 = {
    keywords: ["food", "italian", "noodle"],
    char: "🍝",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  B1 = {
    keywords: ["food", "mexican"],
    char: "🌮",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  H1 = {
    keywords: ["food", "mexican"],
    char: "🌯",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  V1 = {
    keywords: ["food", "healthy", "lettuce"],
    char: "🥗",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  W1 = {
    keywords: ["food", "cooking", "casserole", "paella"],
    char: "🥘",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Q1 = {
    keywords: ["food", "japanese", "noodle", "chopsticks"],
    char: "🍜",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  K1 = {
    keywords: ["food", "meat", "soup"],
    char: "🍲",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Y1 = {
    keywords: [
      "food",
      "japan",
      "sea",
      "beach",
      "narutomaki",
      "pink",
      "swirl",
      "kamaboko",
      "surimi",
      "ramen",
    ],
    char: "🍥",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  X1 = {
    keywords: ["food", "prophecy"],
    char: "🥠",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  G1 = {
    keywords: ["food", "fish", "japanese", "rice"],
    char: "🍣",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Z1 = {
    keywords: ["food", "japanese", "box"],
    char: "🍱",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  J1 = {
    keywords: ["food", "spicy", "hot", "indian"],
    char: "🍛",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  ex = {
    keywords: ["food", "japanese"],
    char: "🍙",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  tx = {
    keywords: ["food", "china", "asian"],
    char: "🍚",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  ax = {
    keywords: ["food", "japanese"],
    char: "🍘",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  rx = {
    keywords: ["food", "japanese"],
    char: "🍢",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  nx = {
    keywords: ["food", "dessert", "sweet", "japanese", "barbecue", "meat"],
    char: "🍡",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  ox = {
    keywords: ["hot", "dessert", "summer"],
    char: "🍧",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  sx = {
    keywords: ["food", "hot", "dessert"],
    char: "🍨",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  cx = {
    keywords: ["food", "hot", "dessert", "summer"],
    char: "🍦",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  lx = {
    keywords: ["food", "dessert", "pastry"],
    char: "🥧",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  ix = {
    keywords: ["food", "dessert"],
    char: "🍰",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  ux = {
    keywords: ["food", "dessert", "bakery", "sweet"],
    char: "🧁",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  fx = {
    keywords: ["food", "autumn"],
    char: "🥮",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  dx = {
    keywords: ["food", "dessert", "cake"],
    char: "🎂",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  px = {
    keywords: ["dessert", "food"],
    char: "🍮",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  yx = {
    keywords: ["snack", "dessert", "sweet", "lolly"],
    char: "🍬",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  hx = {
    keywords: ["food", "snack", "candy", "sweet"],
    char: "🍭",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  gx = {
    keywords: ["food", "snack", "dessert", "sweet"],
    char: "🍫",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  _x = {
    keywords: ["food", "movie theater", "films", "snack"],
    char: "🍿",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  kx = {
    keywords: ["food", "empanada", "pierogi", "potsticker"],
    char: "🥟",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  mx = {
    keywords: ["food", "dessert", "snack", "sweet", "donut"],
    char: "🍩",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  wx = {
    keywords: ["food", "snack", "oreo", "chocolate", "sweet", "dessert"],
    char: "🍪",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  vx = {
    keywords: ["beverage", "drink", "cow"],
    char: "🥛",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  zx = {
    keywords: [
      "relax",
      "beverage",
      "drink",
      "drunk",
      "party",
      "pub",
      "summer",
      "alcohol",
      "booze",
    ],
    char: "🍺",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  bx = {
    keywords: [
      "relax",
      "beverage",
      "drink",
      "drunk",
      "party",
      "pub",
      "summer",
      "alcohol",
      "booze",
    ],
    char: "🍻",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  xx = {
    keywords: [
      "beverage",
      "drink",
      "party",
      "alcohol",
      "celebrate",
      "cheers",
      "wine",
      "champagne",
      "toast",
    ],
    char: "🥂",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  jx = {
    keywords: ["drink", "beverage", "drunk", "alcohol", "booze"],
    char: "🍷",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Sx = {
    keywords: [
      "drink",
      "beverage",
      "drunk",
      "alcohol",
      "liquor",
      "booze",
      "bourbon",
      "scotch",
      "whisky",
      "glass",
      "shot",
    ],
    char: "🥃",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Ex = {
    keywords: ["drink", "drunk", "alcohol", "beverage", "booze", "mojito"],
    char: "🍸",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Cx = {
    keywords: [
      "beverage",
      "cocktail",
      "summer",
      "beach",
      "alcohol",
      "booze",
      "mojito",
    ],
    char: "🍹",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Px = {
    keywords: ["drink", "wine", "bottle", "celebration"],
    char: "🍾",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Nx = {
    keywords: [
      "wine",
      "drink",
      "drunk",
      "beverage",
      "japanese",
      "alcohol",
      "booze",
    ],
    char: "🍶",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Rx = {
    keywords: ["drink", "bowl", "breakfast", "green", "british"],
    char: "🍵",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Lx = {
    keywords: ["drink", "soda"],
    char: "🥤",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Tx = {
    keywords: ["beverage", "caffeine", "latte", "espresso"],
    char: "☕",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Ox = {
    keywords: ["food", "container", "milk"],
    char: "🍼",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  qx = {
    keywords: ["condiment", "shaker"],
    char: "🧂",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Ix = {
    keywords: ["cutlery", "kitchen", "tableware"],
    char: "🥄",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Dx = {
    keywords: ["cutlery", "kitchen"],
    char: "🍴",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Mx = {
    keywords: ["food", "eat", "meal", "lunch", "dinner", "restaurant"],
    char: "🍽",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Fx = {
    keywords: ["food", "breakfast", "cereal", "oatmeal", "porridge"],
    char: "🥣",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  $x = {
    keywords: ["food", "leftovers"],
    char: "🥡",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Ux = {
    keywords: ["food"],
    char: "🥢",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Ax = {
    keywords: ["sports", "football"],
    char: "⚽",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Bx = {
    keywords: ["sports", "balls", "NBA"],
    char: "🏀",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Hx = {
    keywords: ["sports", "balls", "NFL"],
    char: "🏈",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Vx = {
    keywords: ["sports", "balls"],
    char: "⚾",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Wx = {
    keywords: ["sports", "balls"],
    char: "🥎",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Qx = {
    keywords: ["sports", "balls", "green"],
    char: "🎾",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Kx = {
    keywords: ["sports", "balls"],
    char: "🏐",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Yx = {
    keywords: ["sports", "team"],
    char: "🏉",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Xx = {
    keywords: ["sports", "frisbee", "ultimate"],
    char: "🥏",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Gx = {
    keywords: ["sports", "business", "flag", "hole", "summer"],
    char: "⛳",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Zx = {
    keywords: ["sports", "business", "woman", "female"],
    char: "🏌️‍♀️",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Jx = {
    keywords: ["sports", "business"],
    char: "🏌",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  ej = {
    keywords: ["sports", "pingpong"],
    char: "🏓",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  tj = {
    keywords: ["sports"],
    char: "🏸",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  aj = {
    keywords: ["sports"],
    char: "🥅",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  rj = {
    keywords: ["sports"],
    char: "🏒",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  nj = {
    keywords: ["sports"],
    char: "🏑",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  oj = {
    keywords: ["sports", "ball", "stick"],
    char: "🥍",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  sj = {
    keywords: ["sports"],
    char: "🏏",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  cj = {
    keywords: ["sports", "winter", "cold", "snow"],
    char: "🎿",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  lj = {
    keywords: ["sports", "winter", "snow"],
    char: "⛷",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  ij = {
    keywords: ["sports", "winter"],
    char: "🏂",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  uj = {
    keywords: ["sports", "fencing", "sword"],
    char: "🤺",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  fj = {
    keywords: ["sports", "wrestlers"],
    char: "🤼‍♀️",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  dj = {
    keywords: ["sports", "wrestlers"],
    char: "🤼‍♂️",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  pj = {
    keywords: ["gymnastics"],
    char: "🤸‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  yj = {
    keywords: ["gymnastics"],
    char: "🤸‍♂️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  hj = {
    keywords: ["sports"],
    char: "🤾‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  gj = {
    keywords: ["sports"],
    char: "🤾‍♂️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  _j = {
    keywords: ["sports"],
    char: "⛸",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  kj = {
    keywords: ["sports"],
    char: "🥌",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  mj = {
    keywords: ["board"],
    char: "🛹",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  wj = {
    keywords: ["sleigh", "luge", "toboggan"],
    char: "🛷",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  vj = {
    keywords: ["sports"],
    char: "🏹",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  zj = {
    keywords: ["food", "hobby", "summer"],
    char: "🎣",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  bj = {
    keywords: ["sports", "fighting"],
    char: "🥊",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  xj = {
    keywords: ["judo", "karate", "taekwondo"],
    char: "🥋",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  jj = {
    keywords: ["sports", "hobby", "water", "ship", "woman", "female"],
    char: "🚣‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Sj = {
    keywords: ["sports", "hobby", "water", "ship"],
    char: "🚣",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Ej = {
    keywords: ["sports", "hobby", "woman", "female", "rock"],
    char: "🧗‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Cj = {
    keywords: ["sports", "hobby", "man", "male", "rock"],
    char: "🧗‍♂️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Pj = {
    keywords: [
      "sports",
      "exercise",
      "human",
      "athlete",
      "water",
      "summer",
      "woman",
      "female",
    ],
    char: "🏊‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Nj = {
    keywords: ["sports", "exercise", "human", "athlete", "water", "summer"],
    char: "🏊",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Rj = {
    keywords: ["sports", "pool"],
    char: "🤽‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Lj = {
    keywords: ["sports", "pool"],
    char: "🤽‍♂️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Tj = {
    keywords: [
      "woman",
      "female",
      "meditation",
      "yoga",
      "serenity",
      "zen",
      "mindfulness",
    ],
    char: "🧘‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Oj = {
    keywords: [
      "man",
      "male",
      "meditation",
      "yoga",
      "serenity",
      "zen",
      "mindfulness",
    ],
    char: "🧘‍♂️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  qj = {
    keywords: ["sports", "ocean", "sea", "summer", "beach", "woman", "female"],
    char: "🏄‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Ij = {
    keywords: ["sports", "ocean", "sea", "summer", "beach"],
    char: "🏄",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Dj = {
    keywords: ["clean", "shower", "bathroom"],
    char: "🛀",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Mj = {
    keywords: ["sports", "human", "woman", "female"],
    char: "⛹️‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Fj = {
    keywords: ["sports", "human"],
    char: "⛹",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  $j = {
    keywords: ["sports", "training", "exercise", "woman", "female"],
    char: "🏋️‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Uj = {
    keywords: ["sports", "training", "exercise"],
    char: "🏋",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Aj = {
    keywords: ["sports", "bike", "exercise", "hipster", "woman", "female"],
    char: "🚴‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Bj = {
    keywords: ["sports", "bike", "exercise", "hipster"],
    char: "🚴",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Hj = {
    keywords: [
      "transportation",
      "sports",
      "human",
      "race",
      "bike",
      "woman",
      "female",
    ],
    char: "🚵‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Vj = {
    keywords: ["transportation", "sports", "human", "race", "bike"],
    char: "🚵",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Wj = {
    keywords: ["animal", "betting", "competition", "gambling", "luck"],
    char: "🏇",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Qj = {
    keywords: ["suit", "business", "levitate", "hover", "jump"],
    char: "🕴",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Kj = {
    keywords: ["win", "award", "contest", "place", "ftw", "ceremony"],
    char: "🏆",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Yj = {
    keywords: ["play", "pageant"],
    char: "🎽",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Xj = {
    keywords: ["award", "winning"],
    char: "🏅",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Gj = {
    keywords: ["award", "winning", "army"],
    char: "🎖",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Zj = {
    keywords: ["sports", "cause", "support", "awareness"],
    char: "🎗",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Jj = {
    keywords: ["flower", "decoration", "military"],
    char: "🏵",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  e2 = {
    keywords: ["event", "concert", "pass"],
    char: "🎫",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  t2 = {
    keywords: ["sports", "concert", "entrance"],
    char: "🎟",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  a2 = {
    keywords: ["acting", "theater", "drama"],
    char: "🎭",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  r2 = {
    keywords: ["design", "paint", "draw", "colors"],
    char: "🎨",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  n2 = {
    keywords: ["festival", "carnival", "party"],
    char: "🎪",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  o2 = {
    keywords: ["juggle", "balance", "skill", "multitask"],
    char: "🤹‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  s2 = {
    keywords: ["juggle", "balance", "skill", "multitask"],
    char: "🤹‍♂️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  c2 = {
    keywords: ["sound", "music", "PA", "sing", "talkshow"],
    char: "🎤",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  l2 = {
    keywords: ["music", "score", "gadgets"],
    char: "🎧",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  i2 = {
    keywords: ["treble", "clef", "compose"],
    char: "🎼",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  u2 = {
    keywords: ["piano", "instrument", "compose"],
    char: "🎹",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  f2 = {
    keywords: ["music", "instrument", "drumsticks", "snare"],
    char: "🥁",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  d2 = {
    keywords: ["music", "instrument", "jazz", "blues"],
    char: "🎷",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  p2 = {
    keywords: ["music", "brass"],
    char: "🎺",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  y2 = {
    keywords: ["music", "instrument"],
    char: "🎸",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  h2 = {
    keywords: ["music", "instrument", "orchestra", "symphony"],
    char: "🎻",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  g2 = {
    keywords: ["movie", "film", "record"],
    char: "🎬",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  _2 = {
    keywords: ["play", "console", "PS4", "controller"],
    char: "🎮",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  k2 = {
    keywords: ["game", "arcade", "play"],
    char: "👾",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  m2 = {
    keywords: ["game", "play", "bar", "target", "bullseye"],
    char: "🎯",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  w2 = {
    keywords: ["dice", "random", "tabletop", "play", "luck"],
    char: "🎲",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  v2 = {
    keywords: ["expendable"],
    char: "♟",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  z2 = {
    keywords: ["bet", "gamble", "vegas", "fruit machine", "luck", "casino"],
    char: "🎰",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  b2 = {
    keywords: ["interlocking", "puzzle", "piece"],
    char: "🧩",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  x2 = {
    keywords: ["sports", "fun", "play"],
    char: "🎳",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  j2 = {
    keywords: ["red", "transportation", "vehicle"],
    char: "🚗",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  S2 = {
    keywords: ["uber", "vehicle", "cars", "transportation"],
    char: "🚕",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  E2 = {
    keywords: ["transportation", "vehicle"],
    char: "🚙",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  C2 = {
    keywords: ["car", "vehicle", "transportation"],
    char: "🚌",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  P2 = {
    keywords: ["bart", "transportation", "vehicle"],
    char: "🚎",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  N2 = {
    keywords: ["sports", "race", "fast", "formula", "f1"],
    char: "🏎",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  R2 = {
    keywords: [
      "vehicle",
      "cars",
      "transportation",
      "law",
      "legal",
      "enforcement",
    ],
    char: "🚓",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  L2 = {
    keywords: ["health", "911", "hospital"],
    char: "🚑",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  T2 = {
    keywords: ["transportation", "cars", "vehicle"],
    char: "🚒",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  O2 = {
    keywords: ["vehicle", "car", "transportation"],
    char: "🚐",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  q2 = {
    keywords: ["cars", "transportation"],
    char: "🚚",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  I2 = {
    keywords: ["vehicle", "cars", "transportation", "express"],
    char: "🚛",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  D2 = {
    keywords: ["vehicle", "car", "farming", "agriculture"],
    char: "🚜",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  M2 = {
    keywords: ["vehicle", "kick", "razor"],
    char: "🛴",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  F2 = {
    keywords: ["race", "sports", "fast"],
    char: "🏍",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  $2 = {
    keywords: ["sports", "bicycle", "exercise", "hipster"],
    char: "🚲",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  U2 = {
    keywords: ["vehicle", "vespa", "sasha"],
    char: "🛵",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  A2 = {
    keywords: [
      "police",
      "ambulance",
      "911",
      "emergency",
      "alert",
      "error",
      "pinged",
      "law",
      "legal",
    ],
    char: "🚨",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  B2 = {
    keywords: ["vehicle", "law", "legal", "enforcement", "911"],
    char: "🚔",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  H2 = {
    keywords: ["vehicle", "transportation"],
    char: "🚍",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  V2 = {
    keywords: ["car", "vehicle", "transportation"],
    char: "🚘",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  W2 = {
    keywords: ["vehicle", "cars", "uber"],
    char: "🚖",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  Q2 = {
    keywords: ["transportation", "vehicle", "ski"],
    char: "🚡",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  K2 = {
    keywords: ["transportation", "vehicle", "ski"],
    char: "🚠",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  Y2 = {
    keywords: ["vehicle", "transportation"],
    char: "🚟",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  X2 = {
    keywords: ["transportation", "vehicle"],
    char: "🚃",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  G2 = {
    keywords: ["transportation", "vehicle", "carriage", "public", "travel"],
    char: "🚋",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  Z2 = {
    keywords: ["transportation", "vehicle"],
    char: "🚝",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  J2 = {
    keywords: ["transportation", "vehicle"],
    char: "🚄",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  eS = {
    keywords: [
      "transportation",
      "vehicle",
      "speed",
      "fast",
      "public",
      "travel",
    ],
    char: "🚅",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  tS = {
    keywords: ["transportation", "vehicle"],
    char: "🚈",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  aS = {
    keywords: ["transportation", "vehicle"],
    char: "🚞",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  rS = {
    keywords: ["transportation", "vehicle", "train"],
    char: "🚂",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  nS = {
    keywords: ["transportation", "vehicle"],
    char: "🚆",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  oS = {
    keywords: ["transportation", "blue-square", "mrt", "underground", "tube"],
    char: "🚇",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  sS = {
    keywords: ["transportation", "vehicle"],
    char: "🚊",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  cS = {
    keywords: ["transportation", "vehicle", "public"],
    char: "🚉",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  lS = {
    keywords: ["transportation", "vehicle", "ufo"],
    char: "🛸",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  iS = {
    keywords: ["transportation", "vehicle", "fly"],
    char: "🚁",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  uS = {
    keywords: ["flight", "transportation", "fly", "vehicle"],
    char: "🛩",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  fS = {
    keywords: ["vehicle", "transportation", "flight", "fly"],
    char: "✈️",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  dS = {
    keywords: ["airport", "flight", "landing"],
    char: "🛫",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  pS = {
    keywords: ["airport", "flight", "boarding"],
    char: "🛬",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  yS = {
    keywords: ["ship", "summer", "transportation", "water", "sailing"],
    char: "⛵",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  hS = {
    keywords: ["ship"],
    char: "🛥",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  gS = {
    keywords: ["ship", "transportation", "vehicle", "summer"],
    char: "🚤",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  _S = {
    keywords: ["boat", "ship", "yacht"],
    char: "⛴",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  kS = {
    keywords: ["yacht", "cruise", "ferry"],
    char: "🛳",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  mS = {
    keywords: [
      "launch",
      "ship",
      "staffmode",
      "NASA",
      "outer space",
      "outer_space",
      "fly",
    ],
    char: "🚀",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  wS = {
    keywords: ["communication", "gps", "orbit", "spaceflight", "NASA", "ISS"],
    char: "🛰",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  vS = {
    keywords: ["sit", "airplane", "transport", "bus", "flight", "fly"],
    char: "💺",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  zS = {
    keywords: ["boat", "paddle", "water", "ship"],
    char: "🛶",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  bS = {
    keywords: ["ship", "ferry", "sea", "boat"],
    char: "⚓",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  xS = {
    keywords: ["wip", "progress", "caution", "warning"],
    char: "🚧",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  jS = {
    keywords: ["gas station", "petroleum"],
    char: "⛽",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  SS = {
    keywords: ["transportation", "wait"],
    char: "🚏",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  ES = {
    keywords: ["transportation", "driving"],
    char: "🚦",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  CS = {
    keywords: ["transportation", "signal"],
    char: "🚥",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  PS = {
    keywords: ["contest", "finishline", "race", "gokart"],
    char: "🏁",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  NS = {
    keywords: ["transportation", "titanic", "deploy"],
    char: "🚢",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  RS = {
    keywords: ["photo", "carnival", "londoneye"],
    char: "🎡",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  LS = {
    keywords: ["carnival", "playground", "photo", "fun"],
    char: "🎢",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  TS = {
    keywords: ["photo", "carnival"],
    char: "🎠",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  OS = {
    keywords: ["wip", "working", "progress"],
    char: "🏗",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  qS = {
    keywords: ["photo", "mountain"],
    char: "🌁",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  IS = {
    keywords: ["photo", "japanese"],
    char: "🗼",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  DS = {
    keywords: ["building", "industry", "pollution", "smoke"],
    char: "🏭",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  MS = {
    keywords: ["photo", "summer", "water", "fresh"],
    char: "⛲",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  FS = {
    keywords: ["photo", "japan", "asia", "tsukimi"],
    char: "🎑",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  $S = {
    keywords: ["photo", "nature", "environment"],
    char: "⛰",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  US = {
    keywords: ["photo", "nature", "environment", "winter", "cold"],
    char: "🏔",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  AS = {
    keywords: ["photo", "mountain", "nature", "japanese"],
    char: "🗻",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  BS = {
    keywords: ["photo", "nature", "disaster"],
    char: "🌋",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  HS = {
    keywords: ["nation", "country", "japanese", "asia"],
    char: "🗾",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  VS = {
    keywords: ["photo", "outdoors", "tent"],
    char: "🏕",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  WS = {
    keywords: ["photo", "camping", "outdoors"],
    char: "⛺",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  QS = {
    keywords: ["photo", "environment", "nature"],
    char: "🏞",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  KS = {
    keywords: ["road", "cupertino", "interstate", "highway"],
    char: "🛣",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  YS = {
    keywords: ["train", "transportation"],
    char: "🛤",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  XS = {
    keywords: ["morning", "view", "vacation", "photo"],
    char: "🌅",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  GS = {
    keywords: ["view", "vacation", "photo"],
    char: "🌄",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  ZS = {
    keywords: ["photo", "warm", "saharah"],
    char: "🏜",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  JS = {
    keywords: ["weather", "summer", "sunny", "sand", "mojito"],
    char: "🏖",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  eE = {
    keywords: ["photo", "tropical", "mojito"],
    char: "🏝",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  tE = {
    keywords: ["photo", "good morning", "dawn"],
    char: "🌇",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  aE = {
    keywords: ["photo", "evening", "sky", "buildings"],
    char: "🌆",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  rE = {
    keywords: ["photo", "night life", "urban"],
    char: "🏙",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  nE = {
    keywords: ["evening", "city", "downtown"],
    char: "🌃",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  oE = {
    keywords: ["photo", "sanfrancisco"],
    char: "🌉",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  sE = {
    keywords: ["photo", "space", "stars"],
    char: "🌌",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  cE = {
    keywords: ["night", "photo"],
    char: "🌠",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  lE = {
    keywords: ["stars", "night", "shine"],
    char: "🎇",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  iE = {
    keywords: ["photo", "festival", "carnival", "congratulations"],
    char: "🎆",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  uE = {
    keywords: ["nature", "happy", "unicorn_face", "photo", "sky", "spring"],
    char: "🌈",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  fE = {
    keywords: ["buildings", "photo"],
    char: "🏘",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  dE = {
    keywords: ["building", "royalty", "history"],
    char: "🏰",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  pE = {
    keywords: ["photo", "building"],
    char: "🏯",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  yE = {
    keywords: ["photo", "place", "sports", "concert", "venue"],
    char: "🏟",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  hE = {
    keywords: ["american", "newyork"],
    char: "🗽",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  gE = {
    keywords: ["building", "home"],
    char: "🏠",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  _E = {
    keywords: ["home", "plant", "nature"],
    char: "🏡",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  kE = {
    keywords: ["abandon", "evict", "broken", "building"],
    char: "🏚",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  mE = {
    keywords: ["building", "bureau", "work"],
    char: "🏢",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  wE = {
    keywords: ["building", "shopping", "mall"],
    char: "🏬",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  vE = {
    keywords: ["building", "envelope", "communication"],
    char: "🏣",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  zE = {
    keywords: ["building", "email"],
    char: "🏤",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  bE = {
    keywords: ["building", "health", "surgery", "doctor"],
    char: "🏥",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  xE = {
    keywords: ["building", "money", "sales", "cash", "business", "enterprise"],
    char: "🏦",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  jE = {
    keywords: ["building", "accomodation", "checkin"],
    char: "🏨",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  SE = {
    keywords: ["building", "shopping", "groceries"],
    char: "🏪",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  EE = {
    keywords: ["building", "student", "education", "learn", "teach"],
    char: "🏫",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  CE = {
    keywords: ["like", "affection", "dating"],
    char: "🏩",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  PE = {
    keywords: [
      "love",
      "like",
      "affection",
      "couple",
      "marriage",
      "bride",
      "groom",
    ],
    char: "💒",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  NE = {
    keywords: ["art", "culture", "history"],
    char: "🏛",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  RE = {
    keywords: ["building", "religion", "christ"],
    char: "⛪",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  LE = {
    keywords: ["islam", "worship", "minaret"],
    char: "🕌",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  TE = {
    keywords: ["judaism", "worship", "temple", "jewish"],
    char: "🕍",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  OE = {
    keywords: ["mecca", "mosque", "islam"],
    char: "🕋",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  qE = {
    keywords: ["temple", "japan", "kyoto"],
    char: "⛩",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  IE = {
    keywords: ["time", "accessories"],
    char: "⌚",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  DE = {
    keywords: ["technology", "apple", "gadgets", "dial"],
    char: "📱",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  ME = {
    keywords: ["iphone", "incoming"],
    char: "📲",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  FE = {
    keywords: ["technology", "laptop", "screen", "display", "monitor"],
    char: "💻",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  $E = {
    keywords: ["technology", "computer", "type", "input", "text"],
    char: "⌨",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  UE = {
    keywords: ["technology", "computing", "screen"],
    char: "🖥",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  AE = {
    keywords: ["paper", "ink"],
    char: "🖨",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  BE = {
    keywords: ["click"],
    char: "🖱",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  HE = {
    keywords: ["technology", "trackpad"],
    char: "🖲",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  VE = {
    keywords: ["game", "play"],
    char: "🕹",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  WE = {
    keywords: ["tool"],
    char: "🗜",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  QE = {
    keywords: ["technology", "record", "data", "disk", "90s"],
    char: "💽",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  KE = {
    keywords: ["oldschool", "technology", "save", "90s", "80s"],
    char: "💾",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  YE = {
    keywords: ["technology", "dvd", "disk", "disc", "90s"],
    char: "💿",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  XE = {
    keywords: ["cd", "disk", "disc"],
    char: "📀",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  GE = {
    keywords: ["record", "video", "oldschool", "90s", "80s"],
    char: "📼",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  ZE = {
    keywords: ["gadgets", "photography"],
    char: "📷",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  JE = {
    keywords: ["photography", "gadgets"],
    char: "📸",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  e3 = {
    keywords: ["film", "record"],
    char: "📹",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  t3 = {
    keywords: ["film", "record"],
    char: "🎥",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  a3 = {
    keywords: ["video", "tape", "record", "movie"],
    char: "📽",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  r3 = {
    keywords: ["movie"],
    char: "🎞",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  n3 = {
    keywords: ["technology", "communication", "dial"],
    char: "📞",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  o3 = {
    keywords: ["technology", "communication", "dial", "telephone"],
    char: "☎️",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  s3 = {
    keywords: ["bbcall", "oldschool", "90s"],
    char: "📟",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  c3 = {
    keywords: ["communication", "technology"],
    char: "📠",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  l3 = {
    keywords: ["technology", "program", "oldschool", "show", "television"],
    char: "📺",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  i3 = {
    keywords: ["communication", "music", "podcast", "program"],
    char: "📻",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  u3 = {
    keywords: ["sing", "recording", "artist", "talkshow"],
    char: "🎙",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  f3 = {
    keywords: ["scale"],
    char: "🎚",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  d3 = {
    keywords: ["dial"],
    char: "🎛",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  p3 = {
    keywords: ["magnetic", "navigation", "orienteering"],
    char: "🧭",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  y3 = {
    keywords: ["time", "deadline"],
    char: "⏱",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  h3 = {
    keywords: ["alarm"],
    char: "⏲",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  g3 = {
    keywords: ["time", "wake"],
    char: "⏰",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  _3 = {
    keywords: ["time"],
    char: "🕰",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  k3 = {
    keywords: ["oldschool", "time", "countdown"],
    char: "⏳",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  m3 = {
    keywords: ["time", "clock", "oldschool", "limit", "exam", "quiz", "test"],
    char: "⌛",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  w3 = {
    keywords: ["communication", "future", "radio", "space"],
    char: "📡",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  v3 = {
    keywords: ["power", "energy", "sustain"],
    char: "🔋",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  z3 = {
    keywords: ["charger", "power"],
    char: "🔌",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  b3 = {
    keywords: ["light", "electricity", "idea"],
    char: "💡",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  x3 = {
    keywords: ["dark", "camping", "sight", "night"],
    char: "🔦",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  j3 = {
    keywords: ["fire", "wax"],
    char: "🕯",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  S3 = {
    keywords: ["quench"],
    char: "🧯",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  E3 = {
    keywords: ["bin", "trash", "rubbish", "garbage", "toss"],
    char: "🗑",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  C3 = {
    keywords: ["barrell"],
    char: "🛢",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  P3 = {
    keywords: ["dollar", "bills", "payment", "sale"],
    char: "💸",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  N3 = {
    keywords: ["money", "sales", "bill", "currency"],
    char: "💵",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  R3 = {
    keywords: ["money", "sales", "japanese", "dollar", "currency"],
    char: "💴",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  L3 = {
    keywords: ["money", "sales", "dollar", "currency"],
    char: "💶",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  T3 = {
    keywords: [
      "british",
      "sterling",
      "money",
      "sales",
      "bills",
      "uk",
      "england",
      "currency",
    ],
    char: "💷",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  O3 = {
    keywords: ["dollar", "payment", "coins", "sale"],
    char: "💰",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  q3 = {
    keywords: ["money", "sales", "dollar", "bill", "payment", "shopping"],
    char: "💳",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  I3 = {
    keywords: ["blue", "ruby", "diamond", "jewelry"],
    char: "💎",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  D3 = {
    keywords: ["law", "fairness", "weight"],
    char: "⚖",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  M3 = {
    keywords: ["tools", "diy", "fix", "maintainer", "mechanic"],
    char: "🧰",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  F3 = {
    keywords: ["tools", "diy", "ikea", "fix", "maintainer"],
    char: "🔧",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  $3 = {
    keywords: ["tools", "build", "create"],
    char: "🔨",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  U3 = {
    keywords: ["tools", "build", "create"],
    char: "⚒",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  A3 = {
    keywords: ["tools", "build", "create"],
    char: "🛠",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  B3 = {
    keywords: ["tools", "dig"],
    char: "⛏",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  H3 = {
    keywords: ["handy", "tools", "fix"],
    char: "🔩",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  V3 = {
    keywords: ["cog"],
    char: "⚙",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  W3 = {
    keywords: ["bricks"],
    char: "🧱",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Q3 = {
    keywords: ["lock", "arrest"],
    char: "⛓",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  K3 = {
    keywords: ["attraction", "magnetic"],
    char: "🧲",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Y3 = {
    keywords: ["violence", "weapon", "pistol", "revolver"],
    char: "🔫",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  X3 = {
    keywords: ["boom", "explode", "explosion", "terrorism"],
    char: "💣",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  G3 = {
    keywords: ["dynamite", "boom", "explode", "explosion", "explosive"],
    char: "🧨",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Z3 = {
    keywords: ["knife", "blade", "cutlery", "kitchen", "weapon"],
    char: "🔪",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  J3 = {
    keywords: ["weapon"],
    char: "🗡",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  e8 = {
    keywords: ["weapon"],
    char: "⚔",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  t8 = {
    keywords: ["protection", "security"],
    char: "🛡",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  a8 = {
    keywords: ["kills", "tobacco", "cigarette", "joint", "smoke"],
    char: "🚬",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  r8 = {
    keywords: [
      "poison",
      "danger",
      "deadly",
      "scary",
      "death",
      "pirate",
      "evil",
    ],
    char: "☠",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  n8 = {
    keywords: [
      "vampire",
      "dead",
      "die",
      "death",
      "rip",
      "graveyard",
      "cemetery",
      "casket",
      "funeral",
      "box",
    ],
    char: "⚰",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  o8 = {
    keywords: ["dead", "die", "death", "rip", "ashes"],
    char: "⚱",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  s8 = {
    keywords: ["vase", "jar"],
    char: "🏺",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  c8 = {
    keywords: ["disco", "party", "magic", "circus", "fortune_teller"],
    char: "🔮",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  l8 = {
    keywords: ["dhikr", "religious"],
    char: "📿",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  i8 = {
    keywords: ["bead", "charm"],
    char: "🧿",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  u8 = {
    keywords: ["hair", "salon", "style"],
    char: "💈",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  f8 = {
    keywords: ["distilling", "science", "experiment", "chemistry"],
    char: "⚗",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  d8 = {
    keywords: ["stars", "space", "zoom", "science", "astronomy"],
    char: "🔭",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  p8 = {
    keywords: ["laboratory", "experiment", "zoomin", "science", "study"],
    char: "🔬",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  y8 = {
    keywords: ["embarrassing"],
    char: "🕳",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  h8 = {
    keywords: ["health", "medicine", "doctor", "pharmacy", "drug"],
    char: "💊",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  g8 = {
    keywords: [
      "health",
      "hospital",
      "drugs",
      "blood",
      "medicine",
      "needle",
      "doctor",
      "nurse",
    ],
    char: "💉",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  _8 = {
    keywords: ["biologist", "genetics", "life"],
    char: "🧬",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  k8 = {
    keywords: ["amoeba", "bacteria", "germs"],
    char: "🦠",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  m8 = {
    keywords: ["bacteria", "biology", "culture", "lab"],
    char: "🧫",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  w8 = {
    keywords: ["chemistry", "experiment", "lab", "science"],
    char: "🧪",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  v8 = {
    keywords: ["weather", "temperature", "hot", "cold"],
    char: "🌡",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  z8 = {
    keywords: ["cleaning", "sweeping", "witch"],
    char: "🧹",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  b8 = {
    keywords: ["laundry"],
    char: "🧺",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  x8 = {
    keywords: ["roll"],
    char: "🧻",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  j8 = {
    keywords: ["sale", "tag"],
    char: "🏷",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  S8 = {
    keywords: ["favorite", "label", "save"],
    char: "🔖",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  E8 = {
    keywords: ["restroom", "wc", "washroom", "bathroom", "potty"],
    char: "🚽",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  C8 = {
    keywords: ["clean", "water", "bathroom"],
    char: "🚿",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  P8 = {
    keywords: ["clean", "shower", "bathroom"],
    char: "🛁",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  N8 = {
    keywords: ["bar", "bathing", "cleaning", "lather"],
    char: "🧼",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  R8 = {
    keywords: ["absorbing", "cleaning", "porous"],
    char: "🧽",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  L8 = {
    keywords: ["moisturizer", "sunscreen"],
    char: "🧴",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  T8 = {
    keywords: ["lock", "door", "password"],
    char: "🔑",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  O8 = {
    keywords: ["lock", "door", "password"],
    char: "🗝",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  q8 = {
    keywords: ["read", "chill"],
    char: "🛋",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  I8 = {
    keywords: ["bed", "rest"],
    char: "🛌",
    fitzpatrick_scale: !0,
    category: "objects",
  },
  D8 = {
    keywords: ["sleep", "rest"],
    char: "🛏",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  M8 = {
    keywords: ["house", "entry", "exit"],
    char: "🚪",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  F8 = {
    keywords: ["service"],
    char: "🛎",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  $8 = {
    keywords: ["plush", "stuffed"],
    char: "🧸",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  U8 = {
    keywords: ["photography"],
    char: "🖼",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  A8 = {
    keywords: ["location", "direction"],
    char: "🗺",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  B8 = {
    keywords: ["weather", "summer"],
    char: "⛱",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  H8 = {
    keywords: ["rock", "easter island", "moai"],
    char: "🗿",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  V8 = {
    keywords: ["mall", "buy", "purchase"],
    char: "🛍",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  W8 = {
    keywords: ["trolley"],
    char: "🛒",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Q8 = {
    keywords: ["party", "celebration", "birthday", "circus"],
    char: "🎈",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  K8 = {
    keywords: ["fish", "japanese", "koinobori", "carp", "banner"],
    char: "🎏",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Y8 = {
    keywords: ["decoration", "pink", "girl", "bowtie"],
    char: "🎀",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  X8 = {
    keywords: ["present", "birthday", "christmas", "xmas"],
    char: "🎁",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  G8 = {
    keywords: ["festival", "party", "birthday", "circus"],
    char: "🎊",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Z8 = {
    keywords: [
      "party",
      "congratulations",
      "birthday",
      "magic",
      "circus",
      "celebration",
    ],
    char: "🎉",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  J8 = {
    keywords: ["japanese", "toy", "kimono"],
    char: "🎎",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  eC = {
    keywords: ["nature", "ding", "spring", "bell"],
    char: "🎐",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  tC = {
    keywords: ["japanese", "nation", "country", "border"],
    char: "🎌",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  aC = {
    keywords: ["light", "paper", "halloween", "spooky"],
    char: "🏮",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  rC = {
    keywords: ["gift"],
    char: "🧧",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  nC = {
    keywords: ["letter", "postal", "inbox", "communication"],
    char: "✉️",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  oC = {
    keywords: ["email", "communication"],
    char: "📩",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  sC = {
    keywords: ["email", "inbox"],
    char: "📨",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  cC = {
    keywords: ["email", "like", "affection", "envelope", "valentines"],
    char: "💌",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  lC = {
    keywords: ["email", "letter", "envelope"],
    char: "📮",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  iC = {
    keywords: ["email", "communication", "inbox"],
    char: "📪",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  uC = {
    keywords: ["email", "inbox", "communication"],
    char: "📫",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  fC = {
    keywords: ["email", "inbox", "communication"],
    char: "📬",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  dC = {
    keywords: ["email", "inbox"],
    char: "📭",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  pC = {
    keywords: ["instrument", "music"],
    char: "📯",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  yC = {
    keywords: ["email", "documents"],
    char: "📥",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  hC = {
    keywords: ["inbox", "email"],
    char: "📤",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  gC = {
    keywords: ["documents", "ancient", "history", "paper"],
    char: "📜",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  _C = {
    keywords: ["documents", "office", "paper"],
    char: "📃",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  kC = {
    keywords: ["favorite", "save", "order", "tidy"],
    char: "📑",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  mC = {
    keywords: ["accounting", "expenses"],
    char: "🧾",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  wC = {
    keywords: ["graph", "presentation", "stats"],
    char: "📊",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  vC = {
    keywords: [
      "graph",
      "presentation",
      "stats",
      "recovery",
      "business",
      "economics",
      "money",
      "sales",
      "good",
      "success",
    ],
    char: "📈",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  zC = {
    keywords: [
      "graph",
      "presentation",
      "stats",
      "recession",
      "business",
      "economics",
      "money",
      "sales",
      "bad",
      "failure",
    ],
    char: "📉",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  bC = {
    keywords: ["documents", "office", "paper", "information"],
    char: "📄",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  xC = {
    keywords: ["calendar", "schedule"],
    char: "📅",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  jC = {
    keywords: ["schedule", "date", "planning"],
    char: "📆",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  SC = {
    keywords: ["date", "schedule", "planning"],
    char: "🗓",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  EC = {
    keywords: ["business", "stationery"],
    char: "📇",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  CC = {
    keywords: ["business", "stationery"],
    char: "🗃",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  PC = {
    keywords: ["election", "vote"],
    char: "🗳",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  NC = {
    keywords: ["filing", "organizing"],
    char: "🗄",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  RC = {
    keywords: ["stationery", "documents"],
    char: "📋",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  LC = {
    keywords: ["memo", "stationery"],
    char: "🗒",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  TC = {
    keywords: ["documents", "business", "office"],
    char: "📁",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  OC = {
    keywords: ["documents", "load"],
    char: "📂",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  qC = {
    keywords: ["organizing", "business", "stationery"],
    char: "🗂",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  IC = {
    keywords: ["press", "headline"],
    char: "🗞",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  DC = {
    keywords: ["press", "headline"],
    char: "📰",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  MC = {
    keywords: ["stationery", "record", "notes", "paper", "study"],
    char: "📓",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  FC = {
    keywords: ["read", "library", "knowledge", "textbook", "learn"],
    char: "📕",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  $C = {
    keywords: ["read", "library", "knowledge", "study"],
    char: "📗",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  UC = {
    keywords: ["read", "library", "knowledge", "learn", "study"],
    char: "📘",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  AC = {
    keywords: ["read", "library", "knowledge", "textbook", "study"],
    char: "📙",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  BC = {
    keywords: ["classroom", "notes", "record", "paper", "study"],
    char: "📔",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  HC = {
    keywords: ["notes", "paper"],
    char: "📒",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  VC = {
    keywords: ["literature", "library", "study"],
    char: "📚",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  WC = {
    keywords: [
      "book",
      "read",
      "library",
      "knowledge",
      "literature",
      "learn",
      "study",
    ],
    char: "📖",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  QC = {
    keywords: ["diaper"],
    char: "🧷",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  KC = {
    keywords: ["rings", "url"],
    char: "🔗",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  YC = {
    keywords: ["documents", "stationery"],
    char: "📎",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  XC = {
    keywords: ["documents", "stationery"],
    char: "🖇",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  GC = {
    keywords: ["stationery", "cut"],
    char: "✂️",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  ZC = {
    keywords: ["stationery", "math", "architect", "sketch"],
    char: "📐",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  JC = {
    keywords: [
      "stationery",
      "calculate",
      "length",
      "math",
      "school",
      "drawing",
      "architect",
      "sketch",
    ],
    char: "📏",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  e4 = {
    keywords: ["calculation"],
    char: "🧮",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  t4 = {
    keywords: ["stationery", "mark", "here"],
    char: "📌",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  a4 = {
    keywords: ["stationery", "location", "map", "here"],
    char: "📍",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  r4 = {
    keywords: ["mark", "milestone", "place"],
    char: "🚩",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  n4 = {
    keywords: ["losing", "loser", "lost", "surrender", "give up", "fail"],
    char: "🏳",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  o4 = {
    keywords: ["pirate"],
    char: "🏴",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  s4 = {
    keywords: [
      "flag",
      "rainbow",
      "pride",
      "gay",
      "lgbt",
      "glbt",
      "queer",
      "homosexual",
      "lesbian",
      "bisexual",
      "transgender",
    ],
    char: "🏳️‍🌈",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  c4 = {
    keywords: ["security", "privacy"],
    char: "🔐",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  l4 = {
    keywords: ["security", "password", "padlock"],
    char: "🔒",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  i4 = {
    keywords: ["privacy", "security"],
    char: "🔓",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  u4 = {
    keywords: ["security", "secret"],
    char: "🔏",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  f4 = {
    keywords: ["stationery", "writing", "write"],
    char: "🖊",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  d4 = {
    keywords: ["stationery", "writing", "write"],
    char: "🖋",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  p4 = {
    keywords: ["pen", "stationery", "writing", "write"],
    char: "✒️",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  y4 = {
    keywords: [
      "write",
      "documents",
      "stationery",
      "pencil",
      "paper",
      "writing",
      "legal",
      "exam",
      "quiz",
      "test",
      "study",
      "compose",
    ],
    char: "📝",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  h4 = {
    keywords: ["stationery", "write", "paper", "writing", "school", "study"],
    char: "✏️",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  g4 = {
    keywords: ["drawing", "creativity"],
    char: "🖍",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  _4 = {
    keywords: ["drawing", "creativity", "art"],
    char: "🖌",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  k4 = {
    keywords: ["search", "zoom", "find", "detective"],
    char: "🔍",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  m4 = {
    keywords: ["search", "zoom", "find", "detective"],
    char: "🔎",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  w4 = {
    keywords: ["love", "like", "valentines"],
    char: "❤️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  v4 = {
    keywords: ["love", "like", "affection", "valentines"],
    char: "🧡",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  z4 = {
    keywords: ["love", "like", "affection", "valentines"],
    char: "💛",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  b4 = {
    keywords: ["love", "like", "affection", "valentines"],
    char: "💚",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  x4 = {
    keywords: ["love", "like", "affection", "valentines"],
    char: "💙",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  j4 = {
    keywords: ["love", "like", "affection", "valentines"],
    char: "💜",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  S4 = {
    keywords: ["evil"],
    char: "🖤",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  E4 = {
    keywords: ["sad", "sorry", "break", "heart", "heartbreak"],
    char: "💔",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  C4 = {
    keywords: ["decoration", "love"],
    char: "❣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  P4 = {
    keywords: ["love", "like", "affection", "valentines", "heart"],
    char: "💕",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  N4 = {
    keywords: ["love", "like", "affection", "valentines"],
    char: "💞",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  R4 = {
    keywords: ["love", "like", "affection", "valentines", "pink", "heart"],
    char: "💓",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  L4 = {
    keywords: ["like", "love", "affection", "valentines", "pink"],
    char: "💗",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  T4 = {
    keywords: ["love", "like", "affection", "valentines"],
    char: "💖",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  O4 = {
    keywords: ["love", "like", "heart", "affection", "valentines"],
    char: "💘",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  q4 = {
    keywords: ["love", "valentines"],
    char: "💝",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  I4 = {
    keywords: ["purple-square", "love", "like"],
    char: "💟",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  D4 = {
    keywords: ["hippie"],
    char: "☮",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  M4 = {
    keywords: ["christianity"],
    char: "✝",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  F4 = {
    keywords: ["islam"],
    char: "☪",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  $4 = {
    keywords: ["hinduism", "buddhism", "sikhism", "jainism"],
    char: "🕉",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  U4 = {
    keywords: ["hinduism", "buddhism", "sikhism", "jainism"],
    char: "☸",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  A4 = {
    keywords: ["judaism"],
    char: "✡",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  B4 = {
    keywords: ["purple-square", "religion", "jewish", "hexagram"],
    char: "🔯",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  H4 = {
    keywords: ["hanukkah", "candles", "jewish"],
    char: "🕎",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  V4 = {
    keywords: ["balance"],
    char: "☯",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  W4 = {
    keywords: ["suppedaneum", "religion"],
    char: "☦",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  Q4 = {
    keywords: ["religion", "church", "temple", "prayer"],
    char: "🛐",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  K4 = {
    keywords: ["sign", "purple-square", "constellation", "astrology"],
    char: "⛎",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  Y4 = {
    keywords: ["sign", "purple-square", "zodiac", "astrology"],
    char: "♈",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  X4 = {
    keywords: ["purple-square", "sign", "zodiac", "astrology"],
    char: "♉",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  G4 = {
    keywords: ["sign", "zodiac", "purple-square", "astrology"],
    char: "♊",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  Z4 = {
    keywords: ["sign", "zodiac", "purple-square", "astrology"],
    char: "♋",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  J4 = {
    keywords: ["sign", "purple-square", "zodiac", "astrology"],
    char: "♌",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  eP = {
    keywords: ["sign", "zodiac", "purple-square", "astrology"],
    char: "♍",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  tP = {
    keywords: ["sign", "purple-square", "zodiac", "astrology"],
    char: "♎",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  aP = {
    keywords: ["sign", "zodiac", "purple-square", "astrology", "scorpio"],
    char: "♏",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  rP = {
    keywords: ["sign", "zodiac", "purple-square", "astrology"],
    char: "♐",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  nP = {
    keywords: ["sign", "zodiac", "purple-square", "astrology"],
    char: "♑",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  oP = {
    keywords: ["sign", "purple-square", "zodiac", "astrology"],
    char: "♒",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  sP = {
    keywords: ["purple-square", "sign", "zodiac", "astrology"],
    char: "♓",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  cP = {
    keywords: ["purple-square", "words"],
    char: "🆔",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  lP = {
    keywords: ["science", "physics", "chemistry"],
    char: "⚛",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  iP = {
    keywords: ["kanji", "japanese", "chinese", "empty", "sky", "blue-square"],
    char: "🈳",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  uP = {
    keywords: ["cut", "divide", "chinese", "kanji", "pink-square"],
    char: "🈹",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  fP = {
    keywords: ["nuclear", "danger"],
    char: "☢",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  dP = {
    keywords: ["danger"],
    char: "☣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  pP = {
    keywords: ["mute", "orange-square", "silence", "quiet"],
    char: "📴",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  yP = {
    keywords: ["orange-square", "phone"],
    char: "📳",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  hP = {
    keywords: ["orange-square", "chinese", "have", "kanji"],
    char: "🈶",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  gP = {
    keywords: ["nothing", "chinese", "kanji", "japanese", "orange-square"],
    char: "🈚",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  _P = {
    keywords: ["chinese", "japanese", "kanji", "orange-square"],
    char: "🈸",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  kP = {
    keywords: ["japanese", "opening hours", "orange-square"],
    char: "🈺",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  mP = {
    keywords: [
      "chinese",
      "month",
      "moon",
      "japanese",
      "orange-square",
      "kanji",
    ],
    char: "🈷️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  wP = {
    keywords: ["orange-square", "shape", "polygon"],
    char: "✴️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  vP = {
    keywords: ["words", "orange-square"],
    char: "🆚",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  zP = {
    keywords: [
      "ok",
      "good",
      "chinese",
      "kanji",
      "agree",
      "yes",
      "orange-circle",
    ],
    char: "🉑",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  bP = {
    keywords: ["japanese", "spring"],
    char: "💮",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  xP = {
    keywords: ["chinese", "kanji", "obtain", "get", "circle"],
    char: "🉐",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  jP = {
    keywords: ["privacy", "chinese", "sshh", "kanji", "red-circle"],
    char: "㊙️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  SP = {
    keywords: ["chinese", "kanji", "japanese", "red-circle"],
    char: "㊗️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  EP = {
    keywords: ["japanese", "chinese", "join", "kanji", "red-square"],
    char: "🈴",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  CP = {
    keywords: ["full", "chinese", "japanese", "red-square", "kanji"],
    char: "🈵",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  PP = {
    keywords: [
      "kanji",
      "japanese",
      "chinese",
      "forbidden",
      "limit",
      "restricted",
      "red-square",
    ],
    char: "🈲",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  NP = {
    keywords: ["red-square", "alphabet", "letter"],
    char: "🅰️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  RP = {
    keywords: ["red-square", "alphabet", "letter"],
    char: "🅱️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  LP = {
    keywords: ["red-square", "alphabet"],
    char: "🆎",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  TP = {
    keywords: ["alphabet", "words", "red-square"],
    char: "🆑",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  OP = {
    keywords: ["alphabet", "red-square", "letter"],
    char: "🅾️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  qP = {
    keywords: ["help", "red-square", "words", "emergency", "911"],
    char: "🆘",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  IP = {
    keywords: [
      "limit",
      "security",
      "privacy",
      "bad",
      "denied",
      "stop",
      "circle",
    ],
    char: "⛔",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  DP = {
    keywords: ["fire", "forbid"],
    char: "📛",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  MP = {
    keywords: ["forbid", "stop", "limit", "denied", "disallow", "circle"],
    char: "🚫",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  FP = {
    keywords: ["no", "delete", "remove", "cancel", "red"],
    char: "❌",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  $P = {
    keywords: ["circle", "round"],
    char: "⭕",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  UP = {
    keywords: ["stop"],
    char: "🛑",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  AP = {
    keywords: ["angry", "mad"],
    char: "💢",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  BP = {
    keywords: ["bath", "warm", "relax"],
    char: "♨️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  HP = {
    keywords: ["rules", "crossing", "walking", "circle"],
    char: "🚷",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  VP = {
    keywords: ["trash", "bin", "garbage", "circle"],
    char: "🚯",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  WP = {
    keywords: ["cyclist", "prohibited", "circle"],
    char: "🚳",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  QP = {
    keywords: ["18", "drink", "pub", "night", "minor", "circle"],
    char: "🔞",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  KP = {
    keywords: ["iphone", "mute", "circle"],
    char: "📵",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  YP = {
    keywords: [
      "heavy_exclamation_mark",
      "danger",
      "surprise",
      "punctuation",
      "wow",
      "warning",
    ],
    char: "❗",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  XP = {
    keywords: ["surprise", "punctuation", "gray", "wow", "warning"],
    char: "❕",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  GP = {
    keywords: ["doubt", "confused"],
    char: "❓",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  ZP = {
    keywords: ["doubts", "gray", "huh", "confused"],
    char: "❔",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  JP = {
    keywords: ["exclamation", "surprise"],
    char: "‼️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  eN = {
    keywords: ["wat", "punctuation", "surprise"],
    char: "⁉️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  tN = {
    keywords: ["sun", "afternoon", "warm", "summer"],
    char: "🔅",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  aN = {
    keywords: ["sun", "light"],
    char: "🔆",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  rN = {
    keywords: ["weapon", "spear"],
    char: "🔱",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  nN = {
    keywords: ["decorative", "scout"],
    char: "⚜",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  oN = {
    keywords: [
      "graph",
      "presentation",
      "stats",
      "business",
      "economics",
      "bad",
    ],
    char: "〽️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  sN = {
    keywords: ["exclamation", "wip", "alert", "error", "problem", "issue"],
    char: "⚠️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  cN = {
    keywords: [
      "school",
      "warning",
      "danger",
      "sign",
      "driving",
      "yellow-diamond",
    ],
    char: "🚸",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  lN = {
    keywords: ["badge", "shield"],
    char: "🔰",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  iN = {
    keywords: ["arrow", "environment", "garbage", "trash"],
    char: "♻️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  uN = {
    keywords: ["chinese", "point", "green-square", "kanji"],
    char: "🈯",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  fN = {
    keywords: ["green-square", "graph", "presentation", "stats"],
    char: "💹",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  dN = {
    keywords: ["stars", "green-square", "awesome", "good", "fireworks"],
    char: "❇️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  pN = {
    keywords: ["star", "sparkle", "green-square"],
    char: "✳️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  yN = {
    keywords: ["x", "green-square", "no", "deny"],
    char: "❎",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  hN = {
    keywords: [
      "green-square",
      "ok",
      "agree",
      "vote",
      "election",
      "answer",
      "tick",
    ],
    char: "✅",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  gN = {
    keywords: ["jewel", "blue", "gem", "crystal", "fancy"],
    char: "💠",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  _N = {
    keywords: [
      "weather",
      "swirl",
      "blue",
      "cloud",
      "vortex",
      "spiral",
      "whirlpool",
      "spin",
      "tornado",
      "hurricane",
      "typhoon",
    ],
    char: "🌀",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  kN = {
    keywords: ["tape", "cassette"],
    char: "➿",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  mN = {
    keywords: [
      "earth",
      "international",
      "world",
      "internet",
      "interweb",
      "i18n",
    ],
    char: "🌐",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  wN = {
    keywords: ["alphabet", "blue-circle", "letter"],
    char: "Ⓜ️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  vN = {
    keywords: ["money", "sales", "cash", "blue-square", "payment", "bank"],
    char: "🏧",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  zN = {
    keywords: ["japanese", "blue-square", "katakana"],
    char: "🈂️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  bN = {
    keywords: ["custom", "blue-square"],
    char: "🛂",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  xN = {
    keywords: ["passport", "border", "blue-square"],
    char: "🛃",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  jN = {
    keywords: ["blue-square", "airport", "transport"],
    char: "🛄",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  SN = {
    keywords: ["blue-square", "travel"],
    char: "🛅",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  EN = {
    keywords: ["blue-square", "disabled", "a11y", "accessibility"],
    char: "♿",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  CN = {
    keywords: ["cigarette", "blue-square", "smell", "smoke"],
    char: "🚭",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  PN = {
    keywords: ["toilet", "restroom", "blue-square"],
    char: "🚾",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  NN = {
    keywords: ["cars", "blue-square", "alphabet", "letter"],
    char: "🅿️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  RN = {
    keywords: ["blue-square", "liquid", "restroom", "cleaning", "faucet"],
    char: "🚰",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  LN = {
    keywords: ["toilet", "restroom", "wc", "blue-square", "gender", "male"],
    char: "🚹",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  TN = {
    keywords: [
      "purple-square",
      "woman",
      "female",
      "toilet",
      "loo",
      "restroom",
      "gender",
    ],
    char: "🚺",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  ON = {
    keywords: ["orange-square", "child"],
    char: "🚼",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  qN = {
    keywords: ["blue-square", "toilet", "refresh", "wc", "gender"],
    char: "🚻",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  IN = {
    keywords: ["blue-square", "sign", "human", "info"],
    char: "🚮",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  DN = {
    keywords: [
      "blue-square",
      "record",
      "film",
      "movie",
      "curtain",
      "stage",
      "theater",
    ],
    char: "🎦",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  MN = {
    keywords: [
      "blue-square",
      "reception",
      "phone",
      "internet",
      "connection",
      "wifi",
      "bluetooth",
      "bars",
    ],
    char: "📶",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  FN = {
    keywords: ["blue-square", "here", "katakana", "japanese", "destination"],
    char: "🈁",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  $N = {
    keywords: ["blue-square", "words", "shape", "icon"],
    char: "🆖",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  UN = {
    keywords: ["good", "agree", "yes", "blue-square"],
    char: "🆗",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  AN = {
    keywords: ["blue-square", "above", "high"],
    char: "🆙",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  BN = {
    keywords: ["words", "blue-square"],
    char: "🆒",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  HN = {
    keywords: ["blue-square", "words"],
    char: "🆓",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  VN = {
    keywords: ["0", "numbers", "blue-square", "null"],
    char: "0️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  WN = {
    keywords: ["blue-square", "numbers", "1"],
    char: "1️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  QN = {
    keywords: ["numbers", "2", "prime", "blue-square"],
    char: "2️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  KN = {
    keywords: ["3", "numbers", "prime", "blue-square"],
    char: "3️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  YN = {
    keywords: ["4", "numbers", "blue-square"],
    char: "4️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  XN = {
    keywords: ["5", "numbers", "blue-square", "prime"],
    char: "5️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  GN = {
    keywords: ["6", "numbers", "blue-square"],
    char: "6️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  ZN = {
    keywords: ["7", "numbers", "blue-square", "prime"],
    char: "7️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  JN = {
    keywords: ["8", "blue-square", "numbers"],
    char: "8️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  e5 = {
    keywords: ["blue-square", "numbers", "9"],
    char: "9️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  t5 = {
    keywords: ["numbers", "10", "blue-square"],
    char: "🔟",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  a5 = {
    keywords: ["star", "keycap"],
    char: "*⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  r5 = {
    keywords: ["blue-square"],
    char: "⏏️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  n5 = {
    keywords: ["blue-square", "right", "direction", "play"],
    char: "▶️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  o5 = {
    keywords: ["pause", "blue-square"],
    char: "⏸",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  s5 = {
    keywords: ["forward", "next", "blue-square"],
    char: "⏭",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  c5 = {
    keywords: ["blue-square"],
    char: "⏹",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  l5 = {
    keywords: ["blue-square"],
    char: "⏺",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  i5 = {
    keywords: ["blue-square", "play", "pause"],
    char: "⏯",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  u5 = {
    keywords: ["backward"],
    char: "⏮",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  f5 = {
    keywords: ["blue-square", "play", "speed", "continue"],
    char: "⏩",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  d5 = {
    keywords: ["play", "blue-square"],
    char: "⏪",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  p5 = {
    keywords: ["blue-square", "shuffle", "music", "random"],
    char: "🔀",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  y5 = {
    keywords: ["loop", "record"],
    char: "🔁",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  h5 = {
    keywords: ["blue-square", "loop"],
    char: "🔂",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  g5 = {
    keywords: ["blue-square", "left", "direction"],
    char: "◀️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  _5 = {
    keywords: [
      "blue-square",
      "triangle",
      "direction",
      "point",
      "forward",
      "top",
    ],
    char: "🔼",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  k5 = {
    keywords: ["blue-square", "direction", "bottom"],
    char: "🔽",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  m5 = {
    keywords: ["blue-square", "direction", "top"],
    char: "⏫",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  w5 = {
    keywords: ["blue-square", "direction", "bottom"],
    char: "⏬",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  v5 = {
    keywords: ["blue-square", "next"],
    char: "➡️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  z5 = {
    keywords: ["blue-square", "previous", "back"],
    char: "⬅️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  b5 = {
    keywords: ["blue-square", "continue", "top", "direction"],
    char: "⬆️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  x5 = {
    keywords: ["blue-square", "direction", "bottom"],
    char: "⬇️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  j5 = {
    keywords: ["blue-square", "point", "direction", "diagonal", "northeast"],
    char: "↗️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  S5 = {
    keywords: ["blue-square", "direction", "diagonal", "southeast"],
    char: "↘️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  E5 = {
    keywords: ["blue-square", "direction", "diagonal", "southwest"],
    char: "↙️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  C5 = {
    keywords: ["blue-square", "point", "direction", "diagonal", "northwest"],
    char: "↖️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  P5 = {
    keywords: ["blue-square", "direction", "way", "vertical"],
    char: "↕️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  N5 = {
    keywords: ["shape", "direction", "horizontal", "sideways"],
    char: "↔️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  R5 = {
    keywords: ["blue-square", "sync", "cycle"],
    char: "🔄",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  L5 = {
    keywords: ["blue-square", "return", "rotate", "direction"],
    char: "↪️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  T5 = {
    keywords: ["back", "return", "blue-square", "undo", "enter"],
    char: "↩️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  O5 = {
    keywords: ["blue-square", "direction", "top"],
    char: "⤴️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  q5 = {
    keywords: ["blue-square", "direction", "bottom"],
    char: "⤵️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  I5 = {
    keywords: ["symbol", "blue-square", "twitter"],
    char: "#️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  D5 = {
    keywords: ["blue-square", "alphabet", "letter"],
    char: "ℹ️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  M5 = {
    keywords: ["blue-square", "alphabet"],
    char: "🔤",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  F5 = {
    keywords: ["blue-square", "alphabet"],
    char: "🔡",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  $5 = {
    keywords: ["alphabet", "words", "blue-square"],
    char: "🔠",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  U5 = {
    keywords: [
      "blue-square",
      "music",
      "note",
      "ampersand",
      "percent",
      "glyphs",
      "characters",
    ],
    char: "🔣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  A5 = {
    keywords: ["score", "tone", "sound"],
    char: "🎵",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  B5 = {
    keywords: ["music", "score"],
    char: "🎶",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  H5 = {
    keywords: ["draw", "line", "moustache", "mustache", "squiggle", "scribble"],
    char: "〰️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  V5 = {
    keywords: ["scribble", "draw", "shape", "squiggle"],
    char: "➰",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  W5 = {
    keywords: ["ok", "nike", "answer", "yes", "tick"],
    char: "✔️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  Q5 = {
    keywords: ["sync", "cycle", "round", "repeat"],
    char: "🔃",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  K5 = {
    keywords: ["math", "calculation", "addition", "more", "increase"],
    char: "➕",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  Y5 = {
    keywords: ["math", "calculation", "subtract", "less"],
    char: "➖",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  X5 = {
    keywords: ["divide", "math", "calculation"],
    char: "➗",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  G5 = {
    keywords: ["math", "calculation"],
    char: "✖️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  Z5 = {
    keywords: ["forever"],
    char: "♾",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  J5 = {
    keywords: ["money", "sales", "payment", "currency", "buck"],
    char: "💲",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  eR = {
    keywords: ["money", "sales", "dollar", "travel"],
    char: "💱",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  tR = {
    keywords: ["ip", "license", "circle", "law", "legal"],
    char: "©️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  aR = {
    keywords: ["alphabet", "circle"],
    char: "®️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  rR = {
    keywords: ["trademark", "brand", "law", "legal"],
    char: "™️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  nR = {
    keywords: ["words", "arrow"],
    char: "🔚",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  oR = {
    keywords: ["arrow", "words", "return"],
    char: "🔙",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  sR = {
    keywords: ["arrow", "words"],
    char: "🔛",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  cR = {
    keywords: ["words", "blue-square"],
    char: "🔝",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  lR = {
    keywords: ["arrow", "words"],
    char: "🔜",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  iR = {
    keywords: [
      "ok",
      "agree",
      "confirm",
      "black-square",
      "vote",
      "election",
      "yes",
      "tick",
    ],
    char: "☑️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  uR = {
    keywords: ["input", "old", "music", "circle"],
    char: "🔘",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  fR = {
    keywords: ["shape", "round"],
    char: "⚪",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  dR = {
    keywords: ["shape", "button", "round"],
    char: "⚫",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  pR = {
    keywords: ["shape", "error", "danger"],
    char: "🔴",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  yR = {
    keywords: ["shape", "icon", "button"],
    char: "🔵",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  hR = {
    keywords: ["shape", "jewel", "gem"],
    char: "🔸",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  gR = {
    keywords: ["shape", "jewel", "gem"],
    char: "🔹",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  _R = {
    keywords: ["shape", "jewel", "gem"],
    char: "🔶",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  kR = {
    keywords: ["shape", "jewel", "gem"],
    char: "🔷",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  mR = {
    keywords: ["shape", "direction", "up", "top"],
    char: "🔺",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  wR = {
    keywords: ["shape", "icon"],
    char: "▪️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  vR = {
    keywords: ["shape", "icon"],
    char: "▫️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  zR = {
    keywords: ["shape", "icon", "button"],
    char: "⬛",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  bR = {
    keywords: ["shape", "icon", "stone", "button"],
    char: "⬜",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  xR = {
    keywords: ["shape", "direction", "bottom"],
    char: "🔻",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  jR = {
    keywords: ["shape", "button", "icon"],
    char: "◼️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  SR = {
    keywords: ["shape", "stone", "icon"],
    char: "◻️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  ER = {
    keywords: ["icon", "shape", "button"],
    char: "◾",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  CR = {
    keywords: ["shape", "stone", "icon", "button"],
    char: "◽",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  PR = {
    keywords: ["shape", "input", "frame"],
    char: "🔲",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  NR = {
    keywords: ["shape", "input"],
    char: "🔳",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  RR = {
    keywords: ["sound", "volume", "silence", "broadcast"],
    char: "🔈",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  LR = {
    keywords: ["volume", "speaker", "broadcast"],
    char: "🔉",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  TR = {
    keywords: ["volume", "noise", "noisy", "speaker", "broadcast"],
    char: "🔊",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  OR = {
    keywords: ["sound", "volume", "silence", "quiet"],
    char: "🔇",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  qR = {
    keywords: ["sound", "speaker", "volume"],
    char: "📣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  IR = {
    keywords: ["volume", "sound"],
    char: "📢",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  DR = {
    keywords: ["sound", "notification", "christmas", "xmas", "chime"],
    char: "🔔",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  MR = {
    keywords: ["sound", "volume", "mute", "quiet", "silent"],
    char: "🔕",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  FR = {
    keywords: ["poker", "cards", "game", "play", "magic"],
    char: "🃏",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  $R = {
    keywords: ["game", "play", "chinese", "kanji"],
    char: "🀄",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  UR = {
    keywords: ["poker", "cards", "suits", "magic"],
    char: "♠️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  AR = {
    keywords: ["poker", "cards", "magic", "suits"],
    char: "♣️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  BR = {
    keywords: ["poker", "cards", "magic", "suits"],
    char: "♥️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  HR = {
    keywords: ["poker", "cards", "magic", "suits"],
    char: "♦️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  VR = {
    keywords: ["game", "sunset", "red"],
    char: "🎴",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  WR = {
    keywords: ["bubble", "cloud", "speech", "thinking", "dream"],
    char: "💭",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  QR = {
    keywords: ["caption", "speech", "thinking", "mad"],
    char: "🗯",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  KR = {
    keywords: ["bubble", "words", "message", "talk", "chatting"],
    char: "💬",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  YR = {
    keywords: ["words", "message", "talk", "chatting"],
    char: "🗨",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  XR = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕐",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  GR = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕑",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  ZR = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕒",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  JR = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕓",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  e6 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕔",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  t6 = {
    keywords: ["time", "late", "early", "schedule", "dawn", "dusk"],
    char: "🕕",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  a6 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕖",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  r6 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕗",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  n6 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕘",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  o6 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕙",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  s6 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕚",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  c6 = {
    keywords: [
      "time",
      "noon",
      "midnight",
      "midday",
      "late",
      "early",
      "schedule",
    ],
    char: "🕛",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  l6 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕜",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  i6 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕝",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  u6 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕞",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  f6 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕟",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  d6 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕠",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  p6 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕡",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  y6 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕢",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  h6 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  g6 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕤",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  _6 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕥",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  k6 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕦",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  m6 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕧",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  w6 = {
    keywords: ["af", "flag", "nation", "country", "banner"],
    char: "🇦🇫",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  v6 = {
    keywords: ["Åland", "islands", "flag", "nation", "country", "banner"],
    char: "🇦🇽",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  z6 = {
    keywords: ["al", "flag", "nation", "country", "banner"],
    char: "🇦🇱",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  b6 = {
    keywords: ["dz", "flag", "nation", "country", "banner"],
    char: "🇩🇿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  x6 = {
    keywords: ["american", "ws", "flag", "nation", "country", "banner"],
    char: "🇦🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  j6 = {
    keywords: ["ad", "flag", "nation", "country", "banner"],
    char: "🇦🇩",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  S6 = {
    keywords: ["ao", "flag", "nation", "country", "banner"],
    char: "🇦🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  E6 = {
    keywords: ["ai", "flag", "nation", "country", "banner"],
    char: "🇦🇮",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  C6 = {
    keywords: ["aq", "flag", "nation", "country", "banner"],
    char: "🇦🇶",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  P6 = {
    keywords: ["antigua", "barbuda", "flag", "nation", "country", "banner"],
    char: "🇦🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  N6 = {
    keywords: ["ar", "flag", "nation", "country", "banner"],
    char: "🇦🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  R6 = {
    keywords: ["am", "flag", "nation", "country", "banner"],
    char: "🇦🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  L6 = {
    keywords: ["aw", "flag", "nation", "country", "banner"],
    char: "🇦🇼",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  T6 = {
    keywords: ["au", "flag", "nation", "country", "banner"],
    char: "🇦🇺",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  O6 = {
    keywords: ["at", "flag", "nation", "country", "banner"],
    char: "🇦🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  q6 = {
    keywords: ["az", "flag", "nation", "country", "banner"],
    char: "🇦🇿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  I6 = {
    keywords: ["bs", "flag", "nation", "country", "banner"],
    char: "🇧🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  D6 = {
    keywords: ["bh", "flag", "nation", "country", "banner"],
    char: "🇧🇭",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  M6 = {
    keywords: ["bd", "flag", "nation", "country", "banner"],
    char: "🇧🇩",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  F6 = {
    keywords: ["bb", "flag", "nation", "country", "banner"],
    char: "🇧🇧",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  $6 = {
    keywords: ["by", "flag", "nation", "country", "banner"],
    char: "🇧🇾",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  U6 = {
    keywords: ["be", "flag", "nation", "country", "banner"],
    char: "🇧🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  A6 = {
    keywords: ["bz", "flag", "nation", "country", "banner"],
    char: "🇧🇿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  B6 = {
    keywords: ["bj", "flag", "nation", "country", "banner"],
    char: "🇧🇯",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  H6 = {
    keywords: ["bm", "flag", "nation", "country", "banner"],
    char: "🇧🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  V6 = {
    keywords: ["bt", "flag", "nation", "country", "banner"],
    char: "🇧🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  W6 = {
    keywords: ["bo", "flag", "nation", "country", "banner"],
    char: "🇧🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Q6 = {
    keywords: ["bonaire", "flag", "nation", "country", "banner"],
    char: "🇧🇶",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  K6 = {
    keywords: ["bosnia", "herzegovina", "flag", "nation", "country", "banner"],
    char: "🇧🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Y6 = {
    keywords: ["bw", "flag", "nation", "country", "banner"],
    char: "🇧🇼",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  X6 = {
    keywords: ["br", "flag", "nation", "country", "banner"],
    char: "🇧🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  G6 = {
    keywords: [
      "british",
      "indian",
      "ocean",
      "territory",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇮🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Z6 = {
    keywords: [
      "british",
      "virgin",
      "islands",
      "bvi",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇻🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  J6 = {
    keywords: ["bn", "darussalam", "flag", "nation", "country", "banner"],
    char: "🇧🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  eL = {
    keywords: ["bg", "flag", "nation", "country", "banner"],
    char: "🇧🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  tL = {
    keywords: ["burkina", "faso", "flag", "nation", "country", "banner"],
    char: "🇧🇫",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  aL = {
    keywords: ["bi", "flag", "nation", "country", "banner"],
    char: "🇧🇮",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  rL = {
    keywords: ["cabo", "verde", "flag", "nation", "country", "banner"],
    char: "🇨🇻",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  nL = {
    keywords: ["kh", "flag", "nation", "country", "banner"],
    char: "🇰🇭",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  oL = {
    keywords: ["cm", "flag", "nation", "country", "banner"],
    char: "🇨🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  sL = {
    keywords: ["ca", "flag", "nation", "country", "banner"],
    char: "🇨🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  cL = {
    keywords: ["canary", "islands", "flag", "nation", "country", "banner"],
    char: "🇮🇨",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  lL = {
    keywords: ["cayman", "islands", "flag", "nation", "country", "banner"],
    char: "🇰🇾",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  iL = {
    keywords: [
      "central",
      "african",
      "republic",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇨🇫",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  uL = {
    keywords: ["td", "flag", "nation", "country", "banner"],
    char: "🇹🇩",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  fL = {
    keywords: ["flag", "nation", "country", "banner"],
    char: "🇨🇱",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  dL = {
    keywords: [
      "china",
      "chinese",
      "prc",
      "flag",
      "country",
      "nation",
      "banner",
    ],
    char: "🇨🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  pL = {
    keywords: ["christmas", "island", "flag", "nation", "country", "banner"],
    char: "🇨🇽",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  yL = {
    keywords: [
      "cocos",
      "keeling",
      "islands",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇨🇨",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  hL = {
    keywords: ["co", "flag", "nation", "country", "banner"],
    char: "🇨🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  gL = {
    keywords: ["km", "flag", "nation", "country", "banner"],
    char: "🇰🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  _L = {
    keywords: ["congo", "flag", "nation", "country", "banner"],
    char: "🇨🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  kL = {
    keywords: [
      "congo",
      "democratic",
      "republic",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇨🇩",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  mL = {
    keywords: ["cook", "islands", "flag", "nation", "country", "banner"],
    char: "🇨🇰",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  wL = {
    keywords: ["costa", "rica", "flag", "nation", "country", "banner"],
    char: "🇨🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  vL = {
    keywords: ["hr", "flag", "nation", "country", "banner"],
    char: "🇭🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  zL = {
    keywords: ["cu", "flag", "nation", "country", "banner"],
    char: "🇨🇺",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  bL = {
    keywords: ["curaçao", "flag", "nation", "country", "banner"],
    char: "🇨🇼",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  xL = {
    keywords: ["cy", "flag", "nation", "country", "banner"],
    char: "🇨🇾",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  jL = {
    keywords: ["cz", "flag", "nation", "country", "banner"],
    char: "🇨🇿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  SL = {
    keywords: ["dk", "flag", "nation", "country", "banner"],
    char: "🇩🇰",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  EL = {
    keywords: ["dj", "flag", "nation", "country", "banner"],
    char: "🇩🇯",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  CL = {
    keywords: ["dm", "flag", "nation", "country", "banner"],
    char: "🇩🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  PL = {
    keywords: ["dominican", "republic", "flag", "nation", "country", "banner"],
    char: "🇩🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  NL = {
    keywords: ["ec", "flag", "nation", "country", "banner"],
    char: "🇪🇨",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  RL = {
    keywords: ["eg", "flag", "nation", "country", "banner"],
    char: "🇪🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  LL = {
    keywords: ["el", "salvador", "flag", "nation", "country", "banner"],
    char: "🇸🇻",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  TL = {
    keywords: ["equatorial", "gn", "flag", "nation", "country", "banner"],
    char: "🇬🇶",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  OL = {
    keywords: ["er", "flag", "nation", "country", "banner"],
    char: "🇪🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  qL = {
    keywords: ["ee", "flag", "nation", "country", "banner"],
    char: "🇪🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  IL = {
    keywords: ["et", "flag", "nation", "country", "banner"],
    char: "🇪🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  DL = {
    keywords: ["european", "union", "flag", "banner"],
    char: "🇪🇺",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  ML = {
    keywords: [
      "falkland",
      "islands",
      "malvinas",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇫🇰",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  FL = {
    keywords: ["faroe", "islands", "flag", "nation", "country", "banner"],
    char: "🇫🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  $L = {
    keywords: ["fj", "flag", "nation", "country", "banner"],
    char: "🇫🇯",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  UL = {
    keywords: ["fi", "flag", "nation", "country", "banner"],
    char: "🇫🇮",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  AL = {
    keywords: ["banner", "flag", "nation", "france", "french", "country"],
    char: "🇫🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  BL = {
    keywords: ["french", "guiana", "flag", "nation", "country", "banner"],
    char: "🇬🇫",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  HL = {
    keywords: ["french", "polynesia", "flag", "nation", "country", "banner"],
    char: "🇵🇫",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  VL = {
    keywords: [
      "french",
      "southern",
      "territories",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇹🇫",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  WL = {
    keywords: ["ga", "flag", "nation", "country", "banner"],
    char: "🇬🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  QL = {
    keywords: ["gm", "flag", "nation", "country", "banner"],
    char: "🇬🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  KL = {
    keywords: ["ge", "flag", "nation", "country", "banner"],
    char: "🇬🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  YL = {
    keywords: ["german", "nation", "flag", "country", "banner"],
    char: "🇩🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  XL = {
    keywords: ["gh", "flag", "nation", "country", "banner"],
    char: "🇬🇭",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  GL = {
    keywords: ["gi", "flag", "nation", "country", "banner"],
    char: "🇬🇮",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  ZL = {
    keywords: ["gr", "flag", "nation", "country", "banner"],
    char: "🇬🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  JL = {
    keywords: ["gl", "flag", "nation", "country", "banner"],
    char: "🇬🇱",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  e7 = {
    keywords: ["gd", "flag", "nation", "country", "banner"],
    char: "🇬🇩",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  t7 = {
    keywords: ["gp", "flag", "nation", "country", "banner"],
    char: "🇬🇵",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  a7 = {
    keywords: ["gu", "flag", "nation", "country", "banner"],
    char: "🇬🇺",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  r7 = {
    keywords: ["gt", "flag", "nation", "country", "banner"],
    char: "🇬🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  n7 = {
    keywords: ["gg", "flag", "nation", "country", "banner"],
    char: "🇬🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  o7 = {
    keywords: ["gn", "flag", "nation", "country", "banner"],
    char: "🇬🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  s7 = {
    keywords: ["gw", "bissau", "flag", "nation", "country", "banner"],
    char: "🇬🇼",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  c7 = {
    keywords: ["gy", "flag", "nation", "country", "banner"],
    char: "🇬🇾",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  l7 = {
    keywords: ["ht", "flag", "nation", "country", "banner"],
    char: "🇭🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  i7 = {
    keywords: ["hn", "flag", "nation", "country", "banner"],
    char: "🇭🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  u7 = {
    keywords: ["hong", "kong", "flag", "nation", "country", "banner"],
    char: "🇭🇰",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  f7 = {
    keywords: ["hu", "flag", "nation", "country", "banner"],
    char: "🇭🇺",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  d7 = {
    keywords: ["is", "flag", "nation", "country", "banner"],
    char: "🇮🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  p7 = {
    keywords: ["in", "flag", "nation", "country", "banner"],
    char: "🇮🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  y7 = {
    keywords: ["flag", "nation", "country", "banner"],
    char: "🇮🇩",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  h7 = {
    keywords: [
      "iran,",
      "islamic",
      "republic",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇮🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  g7 = {
    keywords: ["iq", "flag", "nation", "country", "banner"],
    char: "🇮🇶",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  _7 = {
    keywords: ["ie", "flag", "nation", "country", "banner"],
    char: "🇮🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  k7 = {
    keywords: ["isle", "man", "flag", "nation", "country", "banner"],
    char: "🇮🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  m7 = {
    keywords: ["il", "flag", "nation", "country", "banner"],
    char: "🇮🇱",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  w7 = {
    keywords: ["italy", "flag", "nation", "country", "banner"],
    char: "🇮🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  v7 = {
    keywords: ["ivory", "coast", "flag", "nation", "country", "banner"],
    char: "🇨🇮",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  z7 = {
    keywords: ["jm", "flag", "nation", "country", "banner"],
    char: "🇯🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  b7 = {
    keywords: ["japanese", "nation", "flag", "country", "banner"],
    char: "🇯🇵",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  x7 = {
    keywords: ["je", "flag", "nation", "country", "banner"],
    char: "🇯🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  j7 = {
    keywords: ["jo", "flag", "nation", "country", "banner"],
    char: "🇯🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  S7 = {
    keywords: ["kz", "flag", "nation", "country", "banner"],
    char: "🇰🇿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  E7 = {
    keywords: ["ke", "flag", "nation", "country", "banner"],
    char: "🇰🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  C7 = {
    keywords: ["ki", "flag", "nation", "country", "banner"],
    char: "🇰🇮",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  P7 = {
    keywords: ["xk", "flag", "nation", "country", "banner"],
    char: "🇽🇰",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  N7 = {
    keywords: ["kw", "flag", "nation", "country", "banner"],
    char: "🇰🇼",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  R7 = {
    keywords: ["kg", "flag", "nation", "country", "banner"],
    char: "🇰🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  L7 = {
    keywords: [
      "lao",
      "democratic",
      "republic",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇱🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  T7 = {
    keywords: ["lv", "flag", "nation", "country", "banner"],
    char: "🇱🇻",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  O7 = {
    keywords: ["lb", "flag", "nation", "country", "banner"],
    char: "🇱🇧",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  q7 = {
    keywords: ["ls", "flag", "nation", "country", "banner"],
    char: "🇱🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  I7 = {
    keywords: ["lr", "flag", "nation", "country", "banner"],
    char: "🇱🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  D7 = {
    keywords: ["ly", "flag", "nation", "country", "banner"],
    char: "🇱🇾",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  M7 = {
    keywords: ["li", "flag", "nation", "country", "banner"],
    char: "🇱🇮",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  F7 = {
    keywords: ["lt", "flag", "nation", "country", "banner"],
    char: "🇱🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  $7 = {
    keywords: ["lu", "flag", "nation", "country", "banner"],
    char: "🇱🇺",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  U7 = {
    keywords: ["macao", "flag", "nation", "country", "banner"],
    char: "🇲🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  A7 = {
    keywords: ["macedonia,", "flag", "nation", "country", "banner"],
    char: "🇲🇰",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  B7 = {
    keywords: ["mg", "flag", "nation", "country", "banner"],
    char: "🇲🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  H7 = {
    keywords: ["mw", "flag", "nation", "country", "banner"],
    char: "🇲🇼",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  V7 = {
    keywords: ["my", "flag", "nation", "country", "banner"],
    char: "🇲🇾",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  W7 = {
    keywords: ["mv", "flag", "nation", "country", "banner"],
    char: "🇲🇻",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Q7 = {
    keywords: ["ml", "flag", "nation", "country", "banner"],
    char: "🇲🇱",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  K7 = {
    keywords: ["mt", "flag", "nation", "country", "banner"],
    char: "🇲🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Y7 = {
    keywords: ["marshall", "islands", "flag", "nation", "country", "banner"],
    char: "🇲🇭",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  X7 = {
    keywords: ["mq", "flag", "nation", "country", "banner"],
    char: "🇲🇶",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  G7 = {
    keywords: ["mr", "flag", "nation", "country", "banner"],
    char: "🇲🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Z7 = {
    keywords: ["mu", "flag", "nation", "country", "banner"],
    char: "🇲🇺",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  J7 = {
    keywords: ["yt", "flag", "nation", "country", "banner"],
    char: "🇾🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  eT = {
    keywords: ["mx", "flag", "nation", "country", "banner"],
    char: "🇲🇽",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  tT = {
    keywords: [
      "micronesia,",
      "federated",
      "states",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇫🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  aT = {
    keywords: ["moldova,", "republic", "flag", "nation", "country", "banner"],
    char: "🇲🇩",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  rT = {
    keywords: ["mc", "flag", "nation", "country", "banner"],
    char: "🇲🇨",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  nT = {
    keywords: ["mn", "flag", "nation", "country", "banner"],
    char: "🇲🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  oT = {
    keywords: ["me", "flag", "nation", "country", "banner"],
    char: "🇲🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  sT = {
    keywords: ["ms", "flag", "nation", "country", "banner"],
    char: "🇲🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  cT = {
    keywords: ["ma", "flag", "nation", "country", "banner"],
    char: "🇲🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  lT = {
    keywords: ["mz", "flag", "nation", "country", "banner"],
    char: "🇲🇿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  iT = {
    keywords: ["mm", "flag", "nation", "country", "banner"],
    char: "🇲🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  uT = {
    keywords: ["na", "flag", "nation", "country", "banner"],
    char: "🇳🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  fT = {
    keywords: ["nr", "flag", "nation", "country", "banner"],
    char: "🇳🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  dT = {
    keywords: ["np", "flag", "nation", "country", "banner"],
    char: "🇳🇵",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  pT = {
    keywords: ["nl", "flag", "nation", "country", "banner"],
    char: "🇳🇱",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  yT = {
    keywords: ["new", "caledonia", "flag", "nation", "country", "banner"],
    char: "🇳🇨",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  hT = {
    keywords: ["new", "zealand", "flag", "nation", "country", "banner"],
    char: "🇳🇿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  gT = {
    keywords: ["ni", "flag", "nation", "country", "banner"],
    char: "🇳🇮",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  _T = {
    keywords: ["ne", "flag", "nation", "country", "banner"],
    char: "🇳🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  kT = {
    keywords: ["flag", "nation", "country", "banner"],
    char: "🇳🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  mT = {
    keywords: ["nu", "flag", "nation", "country", "banner"],
    char: "🇳🇺",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  wT = {
    keywords: ["norfolk", "island", "flag", "nation", "country", "banner"],
    char: "🇳🇫",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  vT = {
    keywords: [
      "northern",
      "mariana",
      "islands",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇲🇵",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  zT = {
    keywords: ["north", "korea", "nation", "flag", "country", "banner"],
    char: "🇰🇵",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  bT = {
    keywords: ["no", "flag", "nation", "country", "banner"],
    char: "🇳🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  xT = {
    keywords: ["om_symbol", "flag", "nation", "country", "banner"],
    char: "🇴🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  jT = {
    keywords: ["pk", "flag", "nation", "country", "banner"],
    char: "🇵🇰",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  ST = {
    keywords: ["pw", "flag", "nation", "country", "banner"],
    char: "🇵🇼",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  ET = {
    keywords: [
      "palestine",
      "palestinian",
      "territories",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇵🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  CT = {
    keywords: ["pa", "flag", "nation", "country", "banner"],
    char: "🇵🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  PT = {
    keywords: ["papua", "new", "guinea", "flag", "nation", "country", "banner"],
    char: "🇵🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  NT = {
    keywords: ["py", "flag", "nation", "country", "banner"],
    char: "🇵🇾",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  RT = {
    keywords: ["pe", "flag", "nation", "country", "banner"],
    char: "🇵🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  LT = {
    keywords: ["ph", "flag", "nation", "country", "banner"],
    char: "🇵🇭",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  TT = {
    keywords: ["pitcairn", "flag", "nation", "country", "banner"],
    char: "🇵🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  OT = {
    keywords: ["pl", "flag", "nation", "country", "banner"],
    char: "🇵🇱",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  qT = {
    keywords: ["pt", "flag", "nation", "country", "banner"],
    char: "🇵🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  IT = {
    keywords: ["puerto", "rico", "flag", "nation", "country", "banner"],
    char: "🇵🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  DT = {
    keywords: ["qa", "flag", "nation", "country", "banner"],
    char: "🇶🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  MT = {
    keywords: ["réunion", "flag", "nation", "country", "banner"],
    char: "🇷🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  FT = {
    keywords: ["ro", "flag", "nation", "country", "banner"],
    char: "🇷🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  $T = {
    keywords: ["russian", "federation", "flag", "nation", "country", "banner"],
    char: "🇷🇺",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  UT = {
    keywords: ["rw", "flag", "nation", "country", "banner"],
    char: "🇷🇼",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  AT = {
    keywords: ["saint", "barthélemy", "flag", "nation", "country", "banner"],
    char: "🇧🇱",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  BT = {
    keywords: [
      "saint",
      "helena",
      "ascension",
      "tristan",
      "cunha",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇸🇭",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  HT = {
    keywords: [
      "saint",
      "kitts",
      "nevis",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇰🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  VT = {
    keywords: ["saint", "lucia", "flag", "nation", "country", "banner"],
    char: "🇱🇨",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  WT = {
    keywords: [
      "saint",
      "pierre",
      "miquelon",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇵🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  QT = {
    keywords: [
      "saint",
      "vincent",
      "grenadines",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇻🇨",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  KT = {
    keywords: ["ws", "flag", "nation", "country", "banner"],
    char: "🇼🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  YT = {
    keywords: ["san", "marino", "flag", "nation", "country", "banner"],
    char: "🇸🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  XT = {
    keywords: [
      "sao",
      "tome",
      "principe",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇸🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  GT = {
    keywords: ["flag", "nation", "country", "banner"],
    char: "🇸🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  ZT = {
    keywords: ["sn", "flag", "nation", "country", "banner"],
    char: "🇸🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  JT = {
    keywords: ["rs", "flag", "nation", "country", "banner"],
    char: "🇷🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  e9 = {
    keywords: ["sc", "flag", "nation", "country", "banner"],
    char: "🇸🇨",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  t9 = {
    keywords: ["sierra", "leone", "flag", "nation", "country", "banner"],
    char: "🇸🇱",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  a9 = {
    keywords: ["sg", "flag", "nation", "country", "banner"],
    char: "🇸🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  r9 = {
    keywords: [
      "sint",
      "maarten",
      "dutch",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇸🇽",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  n9 = {
    keywords: ["sk", "flag", "nation", "country", "banner"],
    char: "🇸🇰",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  o9 = {
    keywords: ["si", "flag", "nation", "country", "banner"],
    char: "🇸🇮",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  s9 = {
    keywords: ["solomon", "islands", "flag", "nation", "country", "banner"],
    char: "🇸🇧",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  c9 = {
    keywords: ["so", "flag", "nation", "country", "banner"],
    char: "🇸🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  l9 = {
    keywords: ["south", "africa", "flag", "nation", "country", "banner"],
    char: "🇿🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  i9 = {
    keywords: [
      "south",
      "georgia",
      "sandwich",
      "islands",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇬🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  u9 = {
    keywords: ["south", "korea", "nation", "flag", "country", "banner"],
    char: "🇰🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  f9 = {
    keywords: ["south", "sd", "flag", "nation", "country", "banner"],
    char: "🇸🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  d9 = {
    keywords: ["spain", "flag", "nation", "country", "banner"],
    char: "🇪🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  p9 = {
    keywords: ["sri", "lanka", "flag", "nation", "country", "banner"],
    char: "🇱🇰",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  y9 = {
    keywords: ["sd", "flag", "nation", "country", "banner"],
    char: "🇸🇩",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  h9 = {
    keywords: ["sr", "flag", "nation", "country", "banner"],
    char: "🇸🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  g9 = {
    keywords: ["sz", "flag", "nation", "country", "banner"],
    char: "🇸🇿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  _9 = {
    keywords: ["se", "flag", "nation", "country", "banner"],
    char: "🇸🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  k9 = {
    keywords: ["ch", "flag", "nation", "country", "banner"],
    char: "🇨🇭",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  m9 = {
    keywords: [
      "syrian",
      "arab",
      "republic",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇸🇾",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  w9 = {
    keywords: ["tw", "flag", "nation", "country", "banner"],
    char: "🇹🇼",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  v9 = {
    keywords: ["tj", "flag", "nation", "country", "banner"],
    char: "🇹🇯",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  z9 = {
    keywords: [
      "tanzania,",
      "united",
      "republic",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇹🇿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  b9 = {
    keywords: ["th", "flag", "nation", "country", "banner"],
    char: "🇹🇭",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  x9 = {
    keywords: ["timor", "leste", "flag", "nation", "country", "banner"],
    char: "🇹🇱",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  j9 = {
    keywords: ["tg", "flag", "nation", "country", "banner"],
    char: "🇹🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  S9 = {
    keywords: ["tk", "flag", "nation", "country", "banner"],
    char: "🇹🇰",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  E9 = {
    keywords: ["to", "flag", "nation", "country", "banner"],
    char: "🇹🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  C9 = {
    keywords: ["trinidad", "tobago", "flag", "nation", "country", "banner"],
    char: "🇹🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  P9 = {
    keywords: ["tn", "flag", "nation", "country", "banner"],
    char: "🇹🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  N9 = {
    keywords: ["turkey", "flag", "nation", "country", "banner"],
    char: "🇹🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  R9 = {
    keywords: ["flag", "nation", "country", "banner"],
    char: "🇹🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  L9 = {
    keywords: [
      "turks",
      "caicos",
      "islands",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇹🇨",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  T9 = {
    keywords: ["flag", "nation", "country", "banner"],
    char: "🇹🇻",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  O9 = {
    keywords: ["ug", "flag", "nation", "country", "banner"],
    char: "🇺🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  q9 = {
    keywords: ["ua", "flag", "nation", "country", "banner"],
    char: "🇺🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  I9 = {
    keywords: [
      "united",
      "arab",
      "emirates",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇦🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  D9 = {
    keywords: [
      "united",
      "kingdom",
      "great",
      "britain",
      "northern",
      "ireland",
      "flag",
      "nation",
      "country",
      "banner",
      "british",
      "UK",
      "english",
      "england",
      "union jack",
    ],
    char: "🇬🇧",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  M9 = {
    keywords: ["flag", "english"],
    char: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  F9 = {
    keywords: ["flag", "scottish"],
    char: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  $9 = {
    keywords: ["flag", "welsh"],
    char: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  U9 = {
    keywords: [
      "united",
      "states",
      "america",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇺🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  A9 = {
    keywords: [
      "virgin",
      "islands",
      "us",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇻🇮",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  B9 = {
    keywords: ["uy", "flag", "nation", "country", "banner"],
    char: "🇺🇾",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  H9 = {
    keywords: ["uz", "flag", "nation", "country", "banner"],
    char: "🇺🇿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  V9 = {
    keywords: ["vu", "flag", "nation", "country", "banner"],
    char: "🇻🇺",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  W9 = {
    keywords: ["vatican", "city", "flag", "nation", "country", "banner"],
    char: "🇻🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Q9 = {
    keywords: [
      "ve",
      "bolivarian",
      "republic",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇻🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  K9 = {
    keywords: ["viet", "nam", "flag", "nation", "country", "banner"],
    char: "🇻🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Y9 = {
    keywords: ["wallis", "futuna", "flag", "nation", "country", "banner"],
    char: "🇼🇫",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  X9 = {
    keywords: ["western", "sahara", "flag", "nation", "country", "banner"],
    char: "🇪🇭",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  G9 = {
    keywords: ["ye", "flag", "nation", "country", "banner"],
    char: "🇾🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Z9 = {
    keywords: ["zm", "flag", "nation", "country", "banner"],
    char: "🇿🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  J9 = {
    keywords: ["zw", "flag", "nation", "country", "banner"],
    char: "🇿🇼",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  eO = {
    keywords: ["un", "flag", "banner"],
    char: "🇺🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  tO = {
    keywords: ["skull", "crossbones", "flag", "banner"],
    char: "🏴‍☠️",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  aO = {
    100: {
      keywords: [
        "score",
        "perfect",
        "numbers",
        "century",
        "exam",
        "quiz",
        "test",
        "pass",
        "hundred",
      ],
      char: "💯",
      fitzpatrick_scale: !1,
      category: "symbols",
    },
    1234: {
      keywords: ["numbers", "blue-square"],
      char: "🔢",
      fitzpatrick_scale: !1,
      category: "symbols",
    },
    grinning: fh,
    grimacing: dh,
    grin: ph,
    joy: yh,
    rofl: hh,
    partying: gh,
    smiley: _h,
    smile: kh,
    sweat_smile: mh,
    laughing: wh,
    innocent: vh,
    wink: zh,
    blush: bh,
    slightly_smiling_face: xh,
    upside_down_face: jh,
    relaxed: Sh,
    yum: Eh,
    relieved: Ch,
    heart_eyes: Ph,
    smiling_face_with_three_hearts: Nh,
    kissing_heart: Rh,
    kissing: Lh,
    kissing_smiling_eyes: Th,
    kissing_closed_eyes: Oh,
    stuck_out_tongue_winking_eye: qh,
    zany: Ih,
    raised_eyebrow: Dh,
    monocle: Mh,
    stuck_out_tongue_closed_eyes: Fh,
    stuck_out_tongue: $h,
    money_mouth_face: Uh,
    nerd_face: Ah,
    sunglasses: Bh,
    star_struck: Hh,
    clown_face: Vh,
    cowboy_hat_face: Wh,
    hugs: Qh,
    smirk: Kh,
    no_mouth: Yh,
    neutral_face: Xh,
    expressionless: Gh,
    unamused: Zh,
    roll_eyes: Jh,
    thinking: eg,
    lying_face: tg,
    hand_over_mouth: ag,
    shushing: rg,
    symbols_over_mouth: ng,
    exploding_head: og,
    flushed: sg,
    disappointed: cg,
    worried: lg,
    angry: ig,
    rage: ug,
    pensive: fg,
    confused: dg,
    slightly_frowning_face: pg,
    frowning_face: yg,
    persevere: hg,
    confounded: gg,
    tired_face: _g,
    weary: kg,
    pleading: mg,
    triumph: wg,
    open_mouth: vg,
    scream: zg,
    fearful: bg,
    cold_sweat: xg,
    hushed: jg,
    frowning: Sg,
    anguished: Eg,
    cry: Cg,
    disappointed_relieved: Pg,
    drooling_face: Ng,
    sleepy: Rg,
    sweat: Lg,
    hot: Tg,
    cold: Og,
    sob: qg,
    dizzy_face: Ig,
    astonished: Dg,
    zipper_mouth_face: Mg,
    nauseated_face: Fg,
    sneezing_face: $g,
    vomiting: Ug,
    mask: Ag,
    face_with_thermometer: Bg,
    face_with_head_bandage: Hg,
    woozy: Vg,
    sleeping: Wg,
    zzz: Qg,
    poop: Kg,
    smiling_imp: Yg,
    imp: Xg,
    japanese_ogre: Gg,
    japanese_goblin: Zg,
    skull: Jg,
    ghost: e_,
    alien: t_,
    robot: a_,
    smiley_cat: r_,
    smile_cat: n_,
    joy_cat: o_,
    heart_eyes_cat: s_,
    smirk_cat: c_,
    kissing_cat: l_,
    scream_cat: i_,
    crying_cat_face: u_,
    pouting_cat: f_,
    palms_up: d_,
    raised_hands: p_,
    clap: y_,
    wave: h_,
    call_me_hand: g_,
    "+1": {
      keywords: [
        "thumbsup",
        "yes",
        "awesome",
        "good",
        "agree",
        "accept",
        "cool",
        "hand",
        "like",
      ],
      char: "👍",
      fitzpatrick_scale: !0,
      category: "people",
    },
    "-1": {
      keywords: ["thumbsdown", "no", "dislike", "hand"],
      char: "👎",
      fitzpatrick_scale: !0,
      category: "people",
    },
    facepunch: __,
    fist: k_,
    fist_left: m_,
    fist_right: w_,
    v: v_,
    ok_hand: z_,
    raised_hand: b_,
    raised_back_of_hand: x_,
    open_hands: j_,
    muscle: S_,
    pray: E_,
    foot: C_,
    leg: P_,
    handshake: N_,
    point_up: R_,
    point_up_2: L_,
    point_down: T_,
    point_left: O_,
    point_right: q_,
    fu: I_,
    raised_hand_with_fingers_splayed: D_,
    love_you: M_,
    metal: F_,
    crossed_fingers: $_,
    vulcan_salute: U_,
    writing_hand: A_,
    selfie: B_,
    nail_care: H_,
    lips: V_,
    tooth: W_,
    tongue: Q_,
    ear: K_,
    nose: Y_,
    eye: X_,
    eyes: G_,
    brain: Z_,
    bust_in_silhouette: J_,
    busts_in_silhouette: ek,
    speaking_head: tk,
    baby: ak,
    child: rk,
    boy: nk,
    girl: ok,
    adult: sk,
    man: ck,
    woman: lk,
    blonde_woman: ik,
    blonde_man: uk,
    bearded_person: fk,
    older_adult: dk,
    older_man: pk,
    older_woman: yk,
    man_with_gua_pi_mao: hk,
    woman_with_headscarf: gk,
    woman_with_turban: _k,
    man_with_turban: kk,
    policewoman: mk,
    policeman: wk,
    construction_worker_woman: vk,
    construction_worker_man: zk,
    guardswoman: bk,
    guardsman: xk,
    female_detective: jk,
    male_detective: Sk,
    woman_health_worker: Ek,
    man_health_worker: Ck,
    woman_farmer: Pk,
    man_farmer: Nk,
    woman_cook: Rk,
    man_cook: Lk,
    woman_student: Tk,
    man_student: Ok,
    woman_singer: qk,
    man_singer: Ik,
    woman_teacher: Dk,
    man_teacher: Mk,
    woman_factory_worker: Fk,
    man_factory_worker: $k,
    woman_technologist: Uk,
    man_technologist: Ak,
    woman_office_worker: Bk,
    man_office_worker: Hk,
    woman_mechanic: Vk,
    man_mechanic: Wk,
    woman_scientist: Qk,
    man_scientist: Kk,
    woman_artist: Yk,
    man_artist: Xk,
    woman_firefighter: Gk,
    man_firefighter: Zk,
    woman_pilot: Jk,
    man_pilot: em,
    woman_astronaut: tm,
    man_astronaut: am,
    woman_judge: rm,
    man_judge: nm,
    woman_superhero: om,
    man_superhero: sm,
    woman_supervillain: cm,
    man_supervillain: lm,
    mrs_claus: im,
    santa: um,
    sorceress: fm,
    wizard: dm,
    woman_elf: pm,
    man_elf: ym,
    woman_vampire: hm,
    man_vampire: gm,
    woman_zombie: _m,
    man_zombie: km,
    woman_genie: mm,
    man_genie: wm,
    mermaid: vm,
    merman: zm,
    woman_fairy: bm,
    man_fairy: xm,
    angel: jm,
    pregnant_woman: Sm,
    breastfeeding: Em,
    princess: Cm,
    prince: Pm,
    bride_with_veil: Nm,
    man_in_tuxedo: Rm,
    running_woman: Lm,
    running_man: Tm,
    walking_woman: Om,
    walking_man: qm,
    dancer: Im,
    man_dancing: Dm,
    dancing_women: Mm,
    dancing_men: Fm,
    couple: $m,
    two_men_holding_hands: Um,
    two_women_holding_hands: Am,
    bowing_woman: Bm,
    bowing_man: Hm,
    man_facepalming: Vm,
    woman_facepalming: Wm,
    woman_shrugging: Qm,
    man_shrugging: Km,
    tipping_hand_woman: Ym,
    tipping_hand_man: Xm,
    no_good_woman: Gm,
    no_good_man: Zm,
    ok_woman: Jm,
    ok_man: ew,
    raising_hand_woman: tw,
    raising_hand_man: aw,
    pouting_woman: rw,
    pouting_man: nw,
    frowning_woman: ow,
    frowning_man: sw,
    haircut_woman: cw,
    haircut_man: lw,
    massage_woman: iw,
    massage_man: uw,
    woman_in_steamy_room: fw,
    man_in_steamy_room: dw,
    couple_with_heart_woman_man: pw,
    couple_with_heart_woman_woman: yw,
    couple_with_heart_man_man: hw,
    couplekiss_man_woman: gw,
    couplekiss_woman_woman: _w,
    couplekiss_man_man: kw,
    family_man_woman_boy: mw,
    family_man_woman_girl: ww,
    family_man_woman_girl_boy: vw,
    family_man_woman_boy_boy: zw,
    family_man_woman_girl_girl: bw,
    family_woman_woman_boy: xw,
    family_woman_woman_girl: jw,
    family_woman_woman_girl_boy: Sw,
    family_woman_woman_boy_boy: Ew,
    family_woman_woman_girl_girl: Cw,
    family_man_man_boy: Pw,
    family_man_man_girl: Nw,
    family_man_man_girl_boy: Rw,
    family_man_man_boy_boy: Lw,
    family_man_man_girl_girl: Tw,
    family_woman_boy: Ow,
    family_woman_girl: qw,
    family_woman_girl_boy: Iw,
    family_woman_boy_boy: Dw,
    family_woman_girl_girl: Mw,
    family_man_boy: Fw,
    family_man_girl: $w,
    family_man_girl_boy: Uw,
    family_man_boy_boy: Aw,
    family_man_girl_girl: Bw,
    yarn: Hw,
    thread: Vw,
    coat: Ww,
    labcoat: Qw,
    womans_clothes: Kw,
    tshirt: Yw,
    jeans: Xw,
    necktie: Gw,
    dress: Zw,
    bikini: Jw,
    kimono: ev,
    lipstick: tv,
    kiss: av,
    footprints: rv,
    flat_shoe: nv,
    high_heel: ov,
    sandal: sv,
    boot: cv,
    mans_shoe: lv,
    athletic_shoe: iv,
    hiking_boot: uv,
    socks: fv,
    gloves: dv,
    scarf: pv,
    womans_hat: yv,
    tophat: hv,
    billed_hat: gv,
    rescue_worker_helmet: _v,
    mortar_board: kv,
    crown: mv,
    school_satchel: wv,
    luggage: vv,
    pouch: zv,
    purse: bv,
    handbag: xv,
    briefcase: jv,
    eyeglasses: Sv,
    dark_sunglasses: Ev,
    goggles: Cv,
    ring: Pv,
    closed_umbrella: Nv,
    dog: Rv,
    cat: Lv,
    mouse: Tv,
    hamster: Ov,
    rabbit: qv,
    fox_face: Iv,
    bear: Dv,
    panda_face: Mv,
    koala: Fv,
    tiger: $v,
    lion: Uv,
    cow: Av,
    pig: Bv,
    pig_nose: Hv,
    frog: Vv,
    squid: Wv,
    octopus: Qv,
    shrimp: Kv,
    monkey_face: Yv,
    gorilla: Xv,
    see_no_evil: Gv,
    hear_no_evil: Zv,
    speak_no_evil: Jv,
    monkey: ez,
    chicken: tz,
    penguin: az,
    bird: rz,
    baby_chick: nz,
    hatching_chick: oz,
    hatched_chick: sz,
    duck: cz,
    eagle: lz,
    owl: iz,
    bat: uz,
    wolf: fz,
    boar: dz,
    horse: pz,
    unicorn: yz,
    honeybee: hz,
    bug: gz,
    butterfly: _z,
    snail: kz,
    beetle: mz,
    ant: wz,
    grasshopper: vz,
    spider: zz,
    scorpion: bz,
    crab: xz,
    snake: jz,
    lizard: Sz,
    "t-rex": {
      keywords: ["animal", "nature", "dinosaur", "tyrannosaurus", "extinct"],
      char: "🦖",
      fitzpatrick_scale: !1,
      category: "animals_and_nature",
    },
    sauropod: Ez,
    turtle: Cz,
    tropical_fish: Pz,
    fish: Nz,
    blowfish: Rz,
    dolphin: Lz,
    shark: Tz,
    whale: Oz,
    whale2: qz,
    crocodile: Iz,
    leopard: Dz,
    zebra: Mz,
    tiger2: Fz,
    water_buffalo: $z,
    ox: Uz,
    cow2: Az,
    deer: Bz,
    dromedary_camel: Hz,
    camel: Vz,
    giraffe: Wz,
    elephant: Qz,
    rhinoceros: Kz,
    goat: Yz,
    ram: Xz,
    sheep: Gz,
    racehorse: Zz,
    pig2: Jz,
    rat: eb,
    mouse2: tb,
    rooster: ab,
    turkey: rb,
    dove: nb,
    dog2: ob,
    poodle: sb,
    cat2: cb,
    rabbit2: lb,
    chipmunk: ib,
    hedgehog: ub,
    raccoon: fb,
    llama: db,
    hippopotamus: pb,
    kangaroo: yb,
    badger: hb,
    swan: gb,
    peacock: _b,
    parrot: kb,
    lobster: mb,
    mosquito: wb,
    paw_prints: vb,
    dragon: zb,
    dragon_face: bb,
    cactus: xb,
    christmas_tree: jb,
    evergreen_tree: Sb,
    deciduous_tree: Eb,
    palm_tree: Cb,
    seedling: Pb,
    herb: Nb,
    shamrock: Rb,
    four_leaf_clover: Lb,
    bamboo: Tb,
    tanabata_tree: Ob,
    leaves: qb,
    fallen_leaf: Ib,
    maple_leaf: Db,
    ear_of_rice: Mb,
    hibiscus: Fb,
    sunflower: $b,
    rose: Ub,
    wilted_flower: Ab,
    tulip: Bb,
    blossom: Hb,
    cherry_blossom: Vb,
    bouquet: Wb,
    mushroom: Qb,
    chestnut: Kb,
    jack_o_lantern: Yb,
    shell: Xb,
    spider_web: Gb,
    earth_americas: Zb,
    earth_africa: Jb,
    earth_asia: e0,
    full_moon: t0,
    waning_gibbous_moon: a0,
    last_quarter_moon: r0,
    waning_crescent_moon: n0,
    new_moon: o0,
    waxing_crescent_moon: s0,
    first_quarter_moon: c0,
    waxing_gibbous_moon: l0,
    new_moon_with_face: i0,
    full_moon_with_face: u0,
    first_quarter_moon_with_face: f0,
    last_quarter_moon_with_face: d0,
    sun_with_face: p0,
    crescent_moon: y0,
    star: h0,
    star2: g0,
    dizzy: _0,
    sparkles: k0,
    comet: m0,
    sunny: w0,
    sun_behind_small_cloud: v0,
    partly_sunny: z0,
    sun_behind_large_cloud: b0,
    sun_behind_rain_cloud: x0,
    cloud: j0,
    cloud_with_rain: S0,
    cloud_with_lightning_and_rain: E0,
    cloud_with_lightning: C0,
    zap: P0,
    fire: N0,
    boom: R0,
    snowflake: L0,
    cloud_with_snow: T0,
    snowman: O0,
    snowman_with_snow: q0,
    wind_face: I0,
    dash: D0,
    tornado: M0,
    fog: F0,
    open_umbrella: $0,
    umbrella: U0,
    droplet: A0,
    sweat_drops: B0,
    ocean: H0,
    green_apple: V0,
    apple: W0,
    pear: Q0,
    tangerine: K0,
    lemon: Y0,
    banana: X0,
    watermelon: G0,
    grapes: Z0,
    strawberry: J0,
    melon: e1,
    cherries: t1,
    peach: a1,
    pineapple: r1,
    coconut: n1,
    kiwi_fruit: o1,
    mango: s1,
    avocado: c1,
    broccoli: l1,
    tomato: i1,
    eggplant: u1,
    cucumber: f1,
    carrot: d1,
    hot_pepper: p1,
    potato: y1,
    corn: h1,
    leafy_greens: g1,
    sweet_potato: _1,
    peanuts: k1,
    honey_pot: m1,
    croissant: w1,
    bread: v1,
    baguette_bread: z1,
    bagel: b1,
    pretzel: x1,
    cheese: j1,
    egg: S1,
    bacon: E1,
    steak: C1,
    pancakes: P1,
    poultry_leg: N1,
    meat_on_bone: R1,
    bone: L1,
    fried_shrimp: T1,
    fried_egg: O1,
    hamburger: q1,
    fries: I1,
    stuffed_flatbread: D1,
    hotdog: M1,
    pizza: F1,
    sandwich: $1,
    canned_food: U1,
    spaghetti: A1,
    taco: B1,
    burrito: H1,
    green_salad: V1,
    shallow_pan_of_food: W1,
    ramen: Q1,
    stew: K1,
    fish_cake: Y1,
    fortune_cookie: X1,
    sushi: G1,
    bento: Z1,
    curry: J1,
    rice_ball: ex,
    rice: tx,
    rice_cracker: ax,
    oden: rx,
    dango: nx,
    shaved_ice: ox,
    ice_cream: sx,
    icecream: cx,
    pie: lx,
    cake: ix,
    cupcake: ux,
    moon_cake: fx,
    birthday: dx,
    custard: px,
    candy: yx,
    lollipop: hx,
    chocolate_bar: gx,
    popcorn: _x,
    dumpling: kx,
    doughnut: mx,
    cookie: wx,
    milk_glass: vx,
    beer: zx,
    beers: bx,
    clinking_glasses: xx,
    wine_glass: jx,
    tumbler_glass: Sx,
    cocktail: Ex,
    tropical_drink: Cx,
    champagne: Px,
    sake: Nx,
    tea: Rx,
    cup_with_straw: Lx,
    coffee: Tx,
    baby_bottle: Ox,
    salt: qx,
    spoon: Ix,
    fork_and_knife: Dx,
    plate_with_cutlery: Mx,
    bowl_with_spoon: Fx,
    takeout_box: $x,
    chopsticks: Ux,
    soccer: Ax,
    basketball: Bx,
    football: Hx,
    baseball: Vx,
    softball: Wx,
    tennis: Qx,
    volleyball: Kx,
    rugby_football: Yx,
    flying_disc: Xx,
    "8ball": {
      keywords: ["pool", "hobby", "game", "luck", "magic"],
      char: "🎱",
      fitzpatrick_scale: !1,
      category: "activity",
    },
    golf: Gx,
    golfing_woman: Zx,
    golfing_man: Jx,
    ping_pong: ej,
    badminton: tj,
    goal_net: aj,
    ice_hockey: rj,
    field_hockey: nj,
    lacrosse: oj,
    cricket: sj,
    ski: cj,
    skier: lj,
    snowboarder: ij,
    person_fencing: uj,
    women_wrestling: fj,
    men_wrestling: dj,
    woman_cartwheeling: pj,
    man_cartwheeling: yj,
    woman_playing_handball: hj,
    man_playing_handball: gj,
    ice_skate: _j,
    curling_stone: kj,
    skateboard: mj,
    sled: wj,
    bow_and_arrow: vj,
    fishing_pole_and_fish: zj,
    boxing_glove: bj,
    martial_arts_uniform: xj,
    rowing_woman: jj,
    rowing_man: Sj,
    climbing_woman: Ej,
    climbing_man: Cj,
    swimming_woman: Pj,
    swimming_man: Nj,
    woman_playing_water_polo: Rj,
    man_playing_water_polo: Lj,
    woman_in_lotus_position: Tj,
    man_in_lotus_position: Oj,
    surfing_woman: qj,
    surfing_man: Ij,
    bath: Dj,
    basketball_woman: Mj,
    basketball_man: Fj,
    weight_lifting_woman: $j,
    weight_lifting_man: Uj,
    biking_woman: Aj,
    biking_man: Bj,
    mountain_biking_woman: Hj,
    mountain_biking_man: Vj,
    horse_racing: Wj,
    business_suit_levitating: Qj,
    trophy: Kj,
    running_shirt_with_sash: Yj,
    medal_sports: Xj,
    medal_military: Gj,
    "1st_place_medal": {
      keywords: ["award", "winning", "first"],
      char: "🥇",
      fitzpatrick_scale: !1,
      category: "activity",
    },
    "2nd_place_medal": {
      keywords: ["award", "second"],
      char: "🥈",
      fitzpatrick_scale: !1,
      category: "activity",
    },
    "3rd_place_medal": {
      keywords: ["award", "third"],
      char: "🥉",
      fitzpatrick_scale: !1,
      category: "activity",
    },
    reminder_ribbon: Zj,
    rosette: Jj,
    ticket: e2,
    tickets: t2,
    performing_arts: a2,
    art: r2,
    circus_tent: n2,
    woman_juggling: o2,
    man_juggling: s2,
    microphone: c2,
    headphones: l2,
    musical_score: i2,
    musical_keyboard: u2,
    drum: f2,
    saxophone: d2,
    trumpet: p2,
    guitar: y2,
    violin: h2,
    clapper: g2,
    video_game: _2,
    space_invader: k2,
    dart: m2,
    game_die: w2,
    chess_pawn: v2,
    slot_machine: z2,
    jigsaw: b2,
    bowling: x2,
    red_car: j2,
    taxi: S2,
    blue_car: E2,
    bus: C2,
    trolleybus: P2,
    racing_car: N2,
    police_car: R2,
    ambulance: L2,
    fire_engine: T2,
    minibus: O2,
    truck: q2,
    articulated_lorry: I2,
    tractor: D2,
    kick_scooter: M2,
    motorcycle: F2,
    bike: $2,
    motor_scooter: U2,
    rotating_light: A2,
    oncoming_police_car: B2,
    oncoming_bus: H2,
    oncoming_automobile: V2,
    oncoming_taxi: W2,
    aerial_tramway: Q2,
    mountain_cableway: K2,
    suspension_railway: Y2,
    railway_car: X2,
    train: G2,
    monorail: Z2,
    bullettrain_side: J2,
    bullettrain_front: eS,
    light_rail: tS,
    mountain_railway: aS,
    steam_locomotive: rS,
    train2: nS,
    metro: oS,
    tram: sS,
    station: cS,
    flying_saucer: lS,
    helicopter: iS,
    small_airplane: uS,
    airplane: fS,
    flight_departure: dS,
    flight_arrival: pS,
    sailboat: yS,
    motor_boat: hS,
    speedboat: gS,
    ferry: _S,
    passenger_ship: kS,
    rocket: mS,
    artificial_satellite: wS,
    seat: vS,
    canoe: zS,
    anchor: bS,
    construction: xS,
    fuelpump: jS,
    busstop: SS,
    vertical_traffic_light: ES,
    traffic_light: CS,
    checkered_flag: PS,
    ship: NS,
    ferris_wheel: RS,
    roller_coaster: LS,
    carousel_horse: TS,
    building_construction: OS,
    foggy: qS,
    tokyo_tower: IS,
    factory: DS,
    fountain: MS,
    rice_scene: FS,
    mountain: $S,
    mountain_snow: US,
    mount_fuji: AS,
    volcano: BS,
    japan: HS,
    camping: VS,
    tent: WS,
    national_park: QS,
    motorway: KS,
    railway_track: YS,
    sunrise: XS,
    sunrise_over_mountains: GS,
    desert: ZS,
    beach_umbrella: JS,
    desert_island: eE,
    city_sunrise: tE,
    city_sunset: aE,
    cityscape: rE,
    night_with_stars: nE,
    bridge_at_night: oE,
    milky_way: sE,
    stars: cE,
    sparkler: lE,
    fireworks: iE,
    rainbow: uE,
    houses: fE,
    european_castle: dE,
    japanese_castle: pE,
    stadium: yE,
    statue_of_liberty: hE,
    house: gE,
    house_with_garden: _E,
    derelict_house: kE,
    office: mE,
    department_store: wE,
    post_office: vE,
    european_post_office: zE,
    hospital: bE,
    bank: xE,
    hotel: jE,
    convenience_store: SE,
    school: EE,
    love_hotel: CE,
    wedding: PE,
    classical_building: NE,
    church: RE,
    mosque: LE,
    synagogue: TE,
    kaaba: OE,
    shinto_shrine: qE,
    watch: IE,
    iphone: DE,
    calling: ME,
    computer: FE,
    keyboard: $E,
    desktop_computer: UE,
    printer: AE,
    computer_mouse: BE,
    trackball: HE,
    joystick: VE,
    clamp: WE,
    minidisc: QE,
    floppy_disk: KE,
    cd: YE,
    dvd: XE,
    vhs: GE,
    camera: ZE,
    camera_flash: JE,
    video_camera: e3,
    movie_camera: t3,
    film_projector: a3,
    film_strip: r3,
    telephone_receiver: n3,
    phone: o3,
    pager: s3,
    fax: c3,
    tv: l3,
    radio: i3,
    studio_microphone: u3,
    level_slider: f3,
    control_knobs: d3,
    compass: p3,
    stopwatch: y3,
    timer_clock: h3,
    alarm_clock: g3,
    mantelpiece_clock: _3,
    hourglass_flowing_sand: k3,
    hourglass: m3,
    satellite: w3,
    battery: v3,
    electric_plug: z3,
    bulb: b3,
    flashlight: x3,
    candle: j3,
    fire_extinguisher: S3,
    wastebasket: E3,
    oil_drum: C3,
    money_with_wings: P3,
    dollar: N3,
    yen: R3,
    euro: L3,
    pound: T3,
    moneybag: O3,
    credit_card: q3,
    gem: I3,
    balance_scale: D3,
    toolbox: M3,
    wrench: F3,
    hammer: $3,
    hammer_and_pick: U3,
    hammer_and_wrench: A3,
    pick: B3,
    nut_and_bolt: H3,
    gear: V3,
    brick: W3,
    chains: Q3,
    magnet: K3,
    gun: Y3,
    bomb: X3,
    firecracker: G3,
    hocho: Z3,
    dagger: J3,
    crossed_swords: e8,
    shield: t8,
    smoking: a8,
    skull_and_crossbones: r8,
    coffin: n8,
    funeral_urn: o8,
    amphora: s8,
    crystal_ball: c8,
    prayer_beads: l8,
    nazar_amulet: i8,
    barber: u8,
    alembic: f8,
    telescope: d8,
    microscope: p8,
    hole: y8,
    pill: h8,
    syringe: g8,
    dna: _8,
    microbe: k8,
    petri_dish: m8,
    test_tube: w8,
    thermometer: v8,
    broom: z8,
    basket: b8,
    toilet_paper: x8,
    label: j8,
    bookmark: S8,
    toilet: E8,
    shower: C8,
    bathtub: P8,
    soap: N8,
    sponge: R8,
    lotion_bottle: L8,
    key: T8,
    old_key: O8,
    couch_and_lamp: q8,
    sleeping_bed: I8,
    bed: D8,
    door: M8,
    bellhop_bell: F8,
    teddy_bear: $8,
    framed_picture: U8,
    world_map: A8,
    parasol_on_ground: B8,
    moyai: H8,
    shopping: V8,
    shopping_cart: W8,
    balloon: Q8,
    flags: K8,
    ribbon: Y8,
    gift: X8,
    confetti_ball: G8,
    tada: Z8,
    dolls: J8,
    wind_chime: eC,
    crossed_flags: tC,
    izakaya_lantern: aC,
    red_envelope: rC,
    email: nC,
    envelope_with_arrow: oC,
    incoming_envelope: sC,
    "e-mail": {
      keywords: ["communication", "inbox"],
      char: "📧",
      fitzpatrick_scale: !1,
      category: "objects",
    },
    love_letter: cC,
    postbox: lC,
    mailbox_closed: iC,
    mailbox: uC,
    mailbox_with_mail: fC,
    mailbox_with_no_mail: dC,
    package: {
      keywords: ["mail", "gift", "cardboard", "box", "moving"],
      char: "📦",
      fitzpatrick_scale: !1,
      category: "objects",
    },
    postal_horn: pC,
    inbox_tray: yC,
    outbox_tray: hC,
    scroll: gC,
    page_with_curl: _C,
    bookmark_tabs: kC,
    receipt: mC,
    bar_chart: wC,
    chart_with_upwards_trend: vC,
    chart_with_downwards_trend: zC,
    page_facing_up: bC,
    date: xC,
    calendar: jC,
    spiral_calendar: SC,
    card_index: EC,
    card_file_box: CC,
    ballot_box: PC,
    file_cabinet: NC,
    clipboard: RC,
    spiral_notepad: LC,
    file_folder: TC,
    open_file_folder: OC,
    card_index_dividers: qC,
    newspaper_roll: IC,
    newspaper: DC,
    notebook: MC,
    closed_book: FC,
    green_book: $C,
    blue_book: UC,
    orange_book: AC,
    notebook_with_decorative_cover: BC,
    ledger: HC,
    books: VC,
    open_book: WC,
    safety_pin: QC,
    link: KC,
    paperclip: YC,
    paperclips: XC,
    scissors: GC,
    triangular_ruler: ZC,
    straight_ruler: JC,
    abacus: e4,
    pushpin: t4,
    round_pushpin: a4,
    triangular_flag_on_post: r4,
    white_flag: n4,
    black_flag: o4,
    rainbow_flag: s4,
    closed_lock_with_key: c4,
    lock: l4,
    unlock: i4,
    lock_with_ink_pen: u4,
    pen: f4,
    fountain_pen: d4,
    black_nib: p4,
    memo: y4,
    pencil2: h4,
    crayon: g4,
    paintbrush: _4,
    mag: k4,
    mag_right: m4,
    heart: w4,
    orange_heart: v4,
    yellow_heart: z4,
    green_heart: b4,
    blue_heart: x4,
    purple_heart: j4,
    black_heart: S4,
    broken_heart: E4,
    heavy_heart_exclamation: C4,
    two_hearts: P4,
    revolving_hearts: N4,
    heartbeat: R4,
    heartpulse: L4,
    sparkling_heart: T4,
    cupid: O4,
    gift_heart: q4,
    heart_decoration: I4,
    peace_symbol: D4,
    latin_cross: M4,
    star_and_crescent: F4,
    om: $4,
    wheel_of_dharma: U4,
    star_of_david: A4,
    six_pointed_star: B4,
    menorah: H4,
    yin_yang: V4,
    orthodox_cross: W4,
    place_of_worship: Q4,
    ophiuchus: K4,
    aries: Y4,
    taurus: X4,
    gemini: G4,
    cancer: Z4,
    leo: J4,
    virgo: eP,
    libra: tP,
    scorpius: aP,
    sagittarius: rP,
    capricorn: nP,
    aquarius: oP,
    pisces: sP,
    id: cP,
    atom_symbol: lP,
    u7a7a: iP,
    u5272: uP,
    radioactive: fP,
    biohazard: dP,
    mobile_phone_off: pP,
    vibration_mode: yP,
    u6709: hP,
    u7121: gP,
    u7533: _P,
    u55b6: kP,
    u6708: mP,
    eight_pointed_black_star: wP,
    vs: vP,
    accept: zP,
    white_flower: bP,
    ideograph_advantage: xP,
    secret: jP,
    congratulations: SP,
    u5408: EP,
    u6e80: CP,
    u7981: PP,
    a: NP,
    b: RP,
    ab: LP,
    cl: TP,
    o2: OP,
    sos: qP,
    no_entry: IP,
    name_badge: DP,
    no_entry_sign: MP,
    x: FP,
    o: $P,
    stop_sign: UP,
    anger: AP,
    hotsprings: BP,
    no_pedestrians: HP,
    do_not_litter: VP,
    no_bicycles: WP,
    "non-potable_water": {
      keywords: ["drink", "faucet", "tap", "circle"],
      char: "🚱",
      fitzpatrick_scale: !1,
      category: "symbols",
    },
    underage: QP,
    no_mobile_phones: KP,
    exclamation: YP,
    grey_exclamation: XP,
    question: GP,
    grey_question: ZP,
    bangbang: JP,
    interrobang: eN,
    low_brightness: tN,
    high_brightness: aN,
    trident: rN,
    fleur_de_lis: nN,
    part_alternation_mark: oN,
    warning: sN,
    children_crossing: cN,
    beginner: lN,
    recycle: iN,
    u6307: uN,
    chart: fN,
    sparkle: dN,
    eight_spoked_asterisk: pN,
    negative_squared_cross_mark: yN,
    white_check_mark: hN,
    diamond_shape_with_a_dot_inside: gN,
    cyclone: _N,
    loop: kN,
    globe_with_meridians: mN,
    m: wN,
    atm: vN,
    sa: zN,
    passport_control: bN,
    customs: xN,
    baggage_claim: jN,
    left_luggage: SN,
    wheelchair: EN,
    no_smoking: CN,
    wc: PN,
    parking: NN,
    potable_water: RN,
    mens: LN,
    womens: TN,
    baby_symbol: ON,
    restroom: qN,
    put_litter_in_its_place: IN,
    cinema: DN,
    signal_strength: MN,
    koko: FN,
    ng: $N,
    ok: UN,
    up: AN,
    cool: BN,
    new: {
      keywords: ["blue-square", "words", "start"],
      char: "🆕",
      fitzpatrick_scale: !1,
      category: "symbols",
    },
    free: HN,
    zero: VN,
    one: WN,
    two: QN,
    three: KN,
    four: YN,
    five: XN,
    six: GN,
    seven: ZN,
    eight: JN,
    nine: e5,
    keycap_ten: t5,
    asterisk: a5,
    eject_button: r5,
    arrow_forward: n5,
    pause_button: o5,
    next_track_button: s5,
    stop_button: c5,
    record_button: l5,
    play_or_pause_button: i5,
    previous_track_button: u5,
    fast_forward: f5,
    rewind: d5,
    twisted_rightwards_arrows: p5,
    repeat: y5,
    repeat_one: h5,
    arrow_backward: g5,
    arrow_up_small: _5,
    arrow_down_small: k5,
    arrow_double_up: m5,
    arrow_double_down: w5,
    arrow_right: v5,
    arrow_left: z5,
    arrow_up: b5,
    arrow_down: x5,
    arrow_upper_right: j5,
    arrow_lower_right: S5,
    arrow_lower_left: E5,
    arrow_upper_left: C5,
    arrow_up_down: P5,
    left_right_arrow: N5,
    arrows_counterclockwise: R5,
    arrow_right_hook: L5,
    leftwards_arrow_with_hook: T5,
    arrow_heading_up: O5,
    arrow_heading_down: q5,
    hash: I5,
    information_source: D5,
    abc: M5,
    abcd: F5,
    capital_abcd: $5,
    symbols: U5,
    musical_note: A5,
    notes: B5,
    wavy_dash: H5,
    curly_loop: V5,
    heavy_check_mark: W5,
    arrows_clockwise: Q5,
    heavy_plus_sign: K5,
    heavy_minus_sign: Y5,
    heavy_division_sign: X5,
    heavy_multiplication_x: G5,
    infinity: Z5,
    heavy_dollar_sign: J5,
    currency_exchange: eR,
    copyright: tR,
    registered: aR,
    tm: rR,
    end: nR,
    back: oR,
    on: sR,
    top: cR,
    soon: lR,
    ballot_box_with_check: iR,
    radio_button: uR,
    white_circle: fR,
    black_circle: dR,
    red_circle: pR,
    large_blue_circle: yR,
    small_orange_diamond: hR,
    small_blue_diamond: gR,
    large_orange_diamond: _R,
    large_blue_diamond: kR,
    small_red_triangle: mR,
    black_small_square: wR,
    white_small_square: vR,
    black_large_square: zR,
    white_large_square: bR,
    small_red_triangle_down: xR,
    black_medium_square: jR,
    white_medium_square: SR,
    black_medium_small_square: ER,
    white_medium_small_square: CR,
    black_square_button: PR,
    white_square_button: NR,
    speaker: RR,
    sound: LR,
    loud_sound: TR,
    mute: OR,
    mega: qR,
    loudspeaker: IR,
    bell: DR,
    no_bell: MR,
    black_joker: FR,
    mahjong: $R,
    spades: UR,
    clubs: AR,
    hearts: BR,
    diamonds: HR,
    flower_playing_cards: VR,
    thought_balloon: WR,
    right_anger_bubble: QR,
    speech_balloon: KR,
    left_speech_bubble: YR,
    clock1: XR,
    clock2: GR,
    clock3: ZR,
    clock4: JR,
    clock5: e6,
    clock6: t6,
    clock7: a6,
    clock8: r6,
    clock9: n6,
    clock10: o6,
    clock11: s6,
    clock12: c6,
    clock130: l6,
    clock230: i6,
    clock330: u6,
    clock430: f6,
    clock530: d6,
    clock630: p6,
    clock730: y6,
    clock830: h6,
    clock930: g6,
    clock1030: _6,
    clock1130: k6,
    clock1230: m6,
    afghanistan: w6,
    aland_islands: v6,
    albania: z6,
    algeria: b6,
    american_samoa: x6,
    andorra: j6,
    angola: S6,
    anguilla: E6,
    antarctica: C6,
    antigua_barbuda: P6,
    argentina: N6,
    armenia: R6,
    aruba: L6,
    australia: T6,
    austria: O6,
    azerbaijan: q6,
    bahamas: I6,
    bahrain: D6,
    bangladesh: M6,
    barbados: F6,
    belarus: $6,
    belgium: U6,
    belize: A6,
    benin: B6,
    bermuda: H6,
    bhutan: V6,
    bolivia: W6,
    caribbean_netherlands: Q6,
    bosnia_herzegovina: K6,
    botswana: Y6,
    brazil: X6,
    british_indian_ocean_territory: G6,
    british_virgin_islands: Z6,
    brunei: J6,
    bulgaria: eL,
    burkina_faso: tL,
    burundi: aL,
    cape_verde: rL,
    cambodia: nL,
    cameroon: oL,
    canada: sL,
    canary_islands: cL,
    cayman_islands: lL,
    central_african_republic: iL,
    chad: uL,
    chile: fL,
    cn: dL,
    christmas_island: pL,
    cocos_islands: yL,
    colombia: hL,
    comoros: gL,
    congo_brazzaville: _L,
    congo_kinshasa: kL,
    cook_islands: mL,
    costa_rica: wL,
    croatia: vL,
    cuba: zL,
    curacao: bL,
    cyprus: xL,
    czech_republic: jL,
    denmark: SL,
    djibouti: EL,
    dominica: CL,
    dominican_republic: PL,
    ecuador: NL,
    egypt: RL,
    el_salvador: LL,
    equatorial_guinea: TL,
    eritrea: OL,
    estonia: qL,
    ethiopia: IL,
    eu: DL,
    falkland_islands: ML,
    faroe_islands: FL,
    fiji: $L,
    finland: UL,
    fr: AL,
    french_guiana: BL,
    french_polynesia: HL,
    french_southern_territories: VL,
    gabon: WL,
    gambia: QL,
    georgia: KL,
    de: YL,
    ghana: XL,
    gibraltar: GL,
    greece: ZL,
    greenland: JL,
    grenada: e7,
    guadeloupe: t7,
    guam: a7,
    guatemala: r7,
    guernsey: n7,
    guinea: o7,
    guinea_bissau: s7,
    guyana: c7,
    haiti: l7,
    honduras: i7,
    hong_kong: u7,
    hungary: f7,
    iceland: d7,
    india: p7,
    indonesia: y7,
    iran: h7,
    iraq: g7,
    ireland: _7,
    isle_of_man: k7,
    israel: m7,
    it: w7,
    cote_divoire: v7,
    jamaica: z7,
    jp: b7,
    jersey: x7,
    jordan: j7,
    kazakhstan: S7,
    kenya: E7,
    kiribati: C7,
    kosovo: P7,
    kuwait: N7,
    kyrgyzstan: R7,
    laos: L7,
    latvia: T7,
    lebanon: O7,
    lesotho: q7,
    liberia: I7,
    libya: D7,
    liechtenstein: M7,
    lithuania: F7,
    luxembourg: $7,
    macau: U7,
    macedonia: A7,
    madagascar: B7,
    malawi: H7,
    malaysia: V7,
    maldives: W7,
    mali: Q7,
    malta: K7,
    marshall_islands: Y7,
    martinique: X7,
    mauritania: G7,
    mauritius: Z7,
    mayotte: J7,
    mexico: eT,
    micronesia: tT,
    moldova: aT,
    monaco: rT,
    mongolia: nT,
    montenegro: oT,
    montserrat: sT,
    morocco: cT,
    mozambique: lT,
    myanmar: iT,
    namibia: uT,
    nauru: fT,
    nepal: dT,
    netherlands: pT,
    new_caledonia: yT,
    new_zealand: hT,
    nicaragua: gT,
    niger: _T,
    nigeria: kT,
    niue: mT,
    norfolk_island: wT,
    northern_mariana_islands: vT,
    north_korea: zT,
    norway: bT,
    oman: xT,
    pakistan: jT,
    palau: ST,
    palestinian_territories: ET,
    panama: CT,
    papua_new_guinea: PT,
    paraguay: NT,
    peru: RT,
    philippines: LT,
    pitcairn_islands: TT,
    poland: OT,
    portugal: qT,
    puerto_rico: IT,
    qatar: DT,
    reunion: MT,
    romania: FT,
    ru: $T,
    rwanda: UT,
    st_barthelemy: AT,
    st_helena: BT,
    st_kitts_nevis: HT,
    st_lucia: VT,
    st_pierre_miquelon: WT,
    st_vincent_grenadines: QT,
    samoa: KT,
    san_marino: YT,
    sao_tome_principe: XT,
    saudi_arabia: GT,
    senegal: ZT,
    serbia: JT,
    seychelles: e9,
    sierra_leone: t9,
    singapore: a9,
    sint_maarten: r9,
    slovakia: n9,
    slovenia: o9,
    solomon_islands: s9,
    somalia: c9,
    south_africa: l9,
    south_georgia_south_sandwich_islands: i9,
    kr: u9,
    south_sudan: f9,
    es: d9,
    sri_lanka: p9,
    sudan: y9,
    suriname: h9,
    swaziland: g9,
    sweden: _9,
    switzerland: k9,
    syria: m9,
    taiwan: w9,
    tajikistan: v9,
    tanzania: z9,
    thailand: b9,
    timor_leste: x9,
    togo: j9,
    tokelau: S9,
    tonga: E9,
    trinidad_tobago: C9,
    tunisia: P9,
    tr: N9,
    turkmenistan: R9,
    turks_caicos_islands: L9,
    tuvalu: T9,
    uganda: O9,
    ukraine: q9,
    united_arab_emirates: I9,
    uk: D9,
    england: M9,
    scotland: F9,
    wales: $9,
    us: U9,
    us_virgin_islands: A9,
    uruguay: B9,
    uzbekistan: H9,
    vanuatu: V9,
    vatican_city: W9,
    venezuela: Q9,
    vietnam: K9,
    wallis_futuna: Y9,
    western_sahara: X9,
    yemen: G9,
    zambia: Z9,
    zimbabwe: J9,
    united_nations: eO,
    pirate_flag: tO,
  },
  rO = JSON.parse(
    '["grinning","smiley","smile","grin","laughing","sweat_smile","joy","rofl","relaxed","blush","innocent","slightly_smiling_face","upside_down_face","wink","relieved","heart_eyes","smiling_face_with_three_hearts","kissing_heart","kissing","kissing_smiling_eyes","kissing_closed_eyes","yum","stuck_out_tongue","stuck_out_tongue_closed_eyes","stuck_out_tongue_winking_eye","zany","raised_eyebrow","monocle","nerd_face","sunglasses","star_struck","partying","smirk","unamused","disappointed","pensive","worried","confused","slightly_frowning_face","frowning_face","persevere","confounded","tired_face","weary","pleading","cry","sob","triumph","angry","rage","symbols_over_mouth","exploding_head","flushed","hot","cold","scream","fearful","cold_sweat","disappointed_relieved","sweat","hugs","thinking","hand_over_mouth","shushing","lying_face","no_mouth","neutral_face","expressionless","grimacing","roll_eyes","hushed","frowning","anguished","open_mouth","astonished","sleeping","drooling_face","sleepy","dizzy_face","zipper_mouth_face","woozy","nauseated_face","vomiting","sneezing_face","mask","face_with_thermometer","face_with_head_bandage","money_mouth_face","cowboy_hat_face","smiling_imp","imp","japanese_ogre","japanese_goblin","clown_face","poop","ghost","skull","skull_and_crossbones","alien","space_invader","robot","jack_o_lantern","smiley_cat","smile_cat","joy_cat","heart_eyes_cat","smirk_cat","kissing_cat","scream_cat","crying_cat_face","pouting_cat","palms_up","open_hands","raised_hands","clap","handshake","+1","-1","facepunch","fist","fist_left","fist_right","crossed_fingers","v","love_you","metal","ok_hand","point_left","point_right","point_up","point_down","point_up_2","raised_hand","raised_back_of_hand","raised_hand_with_fingers_splayed","vulcan_salute","wave","call_me_hand","muscle","fu","writing_hand","pray","foot","leg","ring","lipstick","kiss","lips","tooth","tongue","ear","nose","footprints","eye","eyes","brain","speaking_head","bust_in_silhouette","busts_in_silhouette","baby","girl","child","boy","woman","adult","man","blonde_woman","blonde_man","bearded_person","older_woman","older_adult","older_man","man_with_gua_pi_mao","woman_with_headscarf","woman_with_turban","man_with_turban","policewoman","policeman","construction_worker_woman","construction_worker_man","guardswoman","guardsman","female_detective","male_detective","woman_health_worker","man_health_worker","woman_farmer","man_farmer","woman_cook","man_cook","woman_student","man_student","woman_singer","man_singer","woman_teacher","man_teacher","woman_factory_worker","man_factory_worker","woman_technologist","man_technologist","woman_office_worker","man_office_worker","woman_mechanic","man_mechanic","woman_scientist","man_scientist","woman_artist","man_artist","woman_firefighter","man_firefighter","woman_pilot","man_pilot","woman_astronaut","man_astronaut","woman_judge","man_judge","bride_with_veil","man_in_tuxedo","princess","prince","woman_superhero","man_superhero","woman_supervillain","man_supervillain","mrs_claus","santa","sorceress","wizard","woman_elf","man_elf","woman_vampire","man_vampire","woman_zombie","man_zombie","woman_genie","man_genie","mermaid","merman","woman_fairy","man_fairy","angel","pregnant_woman","breastfeeding","bowing_woman","bowing_man","tipping_hand_woman","tipping_hand_man","no_good_woman","no_good_man","ok_woman","ok_man","raising_hand_woman","raising_hand_man","woman_facepalming","man_facepalming","woman_shrugging","man_shrugging","pouting_woman","pouting_man","frowning_woman","frowning_man","haircut_woman","haircut_man","massage_woman","massage_man","woman_in_steamy_room","man_in_steamy_room","nail_care","selfie","dancer","man_dancing","dancing_women","dancing_men","business_suit_levitating","walking_woman","walking_man","running_woman","running_man","couple","two_women_holding_hands","two_men_holding_hands","couple_with_heart_woman_man","couple_with_heart_woman_woman","couple_with_heart_man_man","couplekiss_man_woman","couplekiss_woman_woman","couplekiss_man_man","family_man_woman_boy","family_man_woman_girl","family_man_woman_girl_boy","family_man_woman_boy_boy","family_man_woman_girl_girl","family_woman_woman_boy","family_woman_woman_girl","family_woman_woman_girl_boy","family_woman_woman_boy_boy","family_woman_woman_girl_girl","family_man_man_boy","family_man_man_girl","family_man_man_girl_boy","family_man_man_boy_boy","family_man_man_girl_girl","family_woman_boy","family_woman_girl","family_woman_girl_boy","family_woman_boy_boy","family_woman_girl_girl","family_man_boy","family_man_girl","family_man_girl_boy","family_man_boy_boy","family_man_girl_girl","yarn","thread","coat","labcoat","womans_clothes","tshirt","jeans","necktie","dress","bikini","kimono","flat_shoe","high_heel","sandal","boot","mans_shoe","athletic_shoe","hiking_boot","socks","gloves","scarf","tophat","billed_hat","womans_hat","mortar_board","rescue_worker_helmet","crown","pouch","purse","handbag","briefcase","school_satchel","luggage","eyeglasses","dark_sunglasses","goggles","closed_umbrella","dog","cat","mouse","hamster","rabbit","fox_face","bear","panda_face","koala","tiger","lion","cow","pig","pig_nose","frog","monkey_face","see_no_evil","hear_no_evil","speak_no_evil","monkey","chicken","penguin","bird","baby_chick","hatching_chick","hatched_chick","duck","eagle","owl","bat","wolf","boar","horse","unicorn","honeybee","bug","butterfly","snail","shell","beetle","ant","mosquito","grasshopper","spider","spider_web","scorpion","turtle","snake","lizard","t-rex","sauropod","octopus","squid","shrimp","lobster","crab","blowfish","tropical_fish","fish","dolphin","whale","whale2","shark","crocodile","tiger2","leopard","zebra","gorilla","elephant","hippopotamus","rhinoceros","dromedary_camel","giraffe","kangaroo","camel","water_buffalo","ox","cow2","racehorse","pig2","ram","sheep","llama","goat","deer","dog2","poodle","cat2","rooster","turkey","peacock","parrot","swan","dove","rabbit2","raccoon","badger","rat","mouse2","chipmunk","hedgehog","paw_prints","dragon","dragon_face","cactus","christmas_tree","evergreen_tree","deciduous_tree","palm_tree","seedling","herb","shamrock","four_leaf_clover","bamboo","tanabata_tree","leaves","fallen_leaf","maple_leaf","ear_of_rice","hibiscus","sunflower","rose","wilted_flower","tulip","blossom","cherry_blossom","bouquet","mushroom","earth_americas","earth_africa","earth_asia","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","new_moon","waxing_crescent_moon","first_quarter_moon","waxing_gibbous_moon","new_moon_with_face","full_moon_with_face","first_quarter_moon_with_face","last_quarter_moon_with_face","sun_with_face","crescent_moon","star","star2","dizzy","sparkles","comet","sunny","sun_behind_small_cloud","partly_sunny","sun_behind_large_cloud","sun_behind_rain_cloud","cloud","cloud_with_rain","cloud_with_lightning_and_rain","cloud_with_lightning","zap","fire","boom","snowflake","cloud_with_snow","snowman","snowman_with_snow","wind_face","dash","tornado","fog","open_umbrella","umbrella","droplet","sweat_drops","ocean","green_apple","apple","pear","tangerine","lemon","banana","watermelon","grapes","strawberry","melon","cherries","peach","mango","pineapple","coconut","kiwi_fruit","tomato","eggplant","avocado","broccoli","leafy_greens","cucumber","hot_pepper","corn","carrot","potato","sweet_potato","croissant","bagel","bread","baguette_bread","pretzel","cheese","egg","fried_egg","pancakes","bacon","steak","poultry_leg","meat_on_bone","bone","hotdog","hamburger","fries","pizza","sandwich","stuffed_flatbread","taco","burrito","green_salad","shallow_pan_of_food","canned_food","spaghetti","ramen","stew","curry","sushi","bento","fried_shrimp","rice_ball","rice","rice_cracker","fish_cake","fortune_cookie","moon_cake","oden","dango","shaved_ice","ice_cream","icecream","pie","cupcake","cake","birthday","custard","lollipop","candy","chocolate_bar","popcorn","doughnut","dumpling","cookie","chestnut","peanuts","honey_pot","milk_glass","baby_bottle","coffee","tea","cup_with_straw","sake","beer","beers","clinking_glasses","wine_glass","tumbler_glass","cocktail","tropical_drink","champagne","spoon","fork_and_knife","plate_with_cutlery","bowl_with_spoon","takeout_box","chopsticks","salt","soccer","basketball","football","baseball","softball","tennis","volleyball","rugby_football","flying_disc","8ball","golf","golfing_woman","golfing_man","ping_pong","badminton","goal_net","ice_hockey","field_hockey","lacrosse","cricket","ski","skier","snowboarder","person_fencing","women_wrestling","men_wrestling","woman_cartwheeling","man_cartwheeling","woman_playing_handball","man_playing_handball","ice_skate","curling_stone","skateboard","sled","bow_and_arrow","fishing_pole_and_fish","boxing_glove","martial_arts_uniform","rowing_woman","rowing_man","climbing_woman","climbing_man","swimming_woman","swimming_man","woman_playing_water_polo","man_playing_water_polo","woman_in_lotus_position","man_in_lotus_position","surfing_woman","surfing_man","basketball_woman","basketball_man","weight_lifting_woman","weight_lifting_man","biking_woman","biking_man","mountain_biking_woman","mountain_biking_man","horse_racing","trophy","running_shirt_with_sash","medal_sports","medal_military","1st_place_medal","2nd_place_medal","3rd_place_medal","reminder_ribbon","rosette","ticket","tickets","performing_arts","art","circus_tent","woman_juggling","man_juggling","microphone","headphones","musical_score","musical_keyboard","drum","saxophone","trumpet","guitar","violin","clapper","video_game","dart","game_die","chess_pawn","slot_machine","jigsaw","bowling","red_car","taxi","blue_car","bus","trolleybus","racing_car","police_car","ambulance","fire_engine","minibus","truck","articulated_lorry","tractor","kick_scooter","motorcycle","bike","motor_scooter","rotating_light","oncoming_police_car","oncoming_bus","oncoming_automobile","oncoming_taxi","aerial_tramway","mountain_cableway","suspension_railway","railway_car","train","monorail","bullettrain_side","bullettrain_front","light_rail","mountain_railway","steam_locomotive","train2","metro","tram","station","flying_saucer","helicopter","small_airplane","airplane","flight_departure","flight_arrival","sailboat","motor_boat","speedboat","ferry","passenger_ship","rocket","artificial_satellite","seat","canoe","anchor","construction","fuelpump","busstop","vertical_traffic_light","traffic_light","ship","ferris_wheel","roller_coaster","carousel_horse","building_construction","foggy","tokyo_tower","factory","fountain","rice_scene","mountain","mountain_snow","mount_fuji","volcano","japan","camping","tent","national_park","motorway","railway_track","sunrise","sunrise_over_mountains","desert","beach_umbrella","desert_island","city_sunrise","city_sunset","cityscape","night_with_stars","bridge_at_night","milky_way","stars","sparkler","fireworks","rainbow","houses","european_castle","japanese_castle","stadium","statue_of_liberty","house","house_with_garden","derelict_house","office","department_store","post_office","european_post_office","hospital","bank","hotel","convenience_store","school","love_hotel","wedding","classical_building","church","mosque","synagogue","kaaba","shinto_shrine","watch","iphone","calling","computer","keyboard","desktop_computer","printer","computer_mouse","trackball","joystick","clamp","minidisc","floppy_disk","cd","dvd","vhs","camera","camera_flash","video_camera","movie_camera","film_projector","film_strip","telephone_receiver","phone","pager","fax","tv","radio","studio_microphone","level_slider","control_knobs","compass","stopwatch","timer_clock","alarm_clock","mantelpiece_clock","hourglass_flowing_sand","hourglass","satellite","battery","electric_plug","bulb","flashlight","candle","fire_extinguisher","wastebasket","oil_drum","money_with_wings","dollar","yen","euro","pound","moneybag","credit_card","gem","balance_scale","toolbox","wrench","hammer","hammer_and_pick","hammer_and_wrench","pick","nut_and_bolt","gear","brick","chains","magnet","gun","bomb","firecracker","hocho","dagger","crossed_swords","shield","smoking","coffin","funeral_urn","amphora","crystal_ball","prayer_beads","nazar_amulet","barber","alembic","telescope","microscope","hole","pill","syringe","dna","microbe","petri_dish","test_tube","thermometer","broom","basket","toilet_paper","label","bookmark","toilet","shower","bathtub","bath","soap","sponge","lotion_bottle","key","old_key","couch_and_lamp","sleeping_bed","bed","door","bellhop_bell","teddy_bear","framed_picture","world_map","parasol_on_ground","moyai","shopping","shopping_cart","balloon","flags","ribbon","gift","confetti_ball","tada","dolls","wind_chime","crossed_flags","izakaya_lantern","red_envelope","email","envelope_with_arrow","incoming_envelope","e-mail","love_letter","postbox","mailbox_closed","mailbox","mailbox_with_mail","mailbox_with_no_mail","package","postal_horn","inbox_tray","outbox_tray","scroll","page_with_curl","bookmark_tabs","receipt","bar_chart","chart_with_upwards_trend","chart_with_downwards_trend","page_facing_up","date","calendar","spiral_calendar","card_index","card_file_box","ballot_box","file_cabinet","clipboard","spiral_notepad","file_folder","open_file_folder","card_index_dividers","newspaper_roll","newspaper","notebook","closed_book","green_book","blue_book","orange_book","notebook_with_decorative_cover","ledger","books","open_book","safety_pin","link","paperclip","paperclips","scissors","triangular_ruler","straight_ruler","abacus","pushpin","round_pushpin","closed_lock_with_key","lock","unlock","lock_with_ink_pen","pen","fountain_pen","black_nib","memo","pencil2","crayon","paintbrush","mag","mag_right","heart","orange_heart","yellow_heart","green_heart","blue_heart","purple_heart","black_heart","broken_heart","heavy_heart_exclamation","two_hearts","revolving_hearts","heartbeat","heartpulse","sparkling_heart","cupid","gift_heart","heart_decoration","peace_symbol","latin_cross","star_and_crescent","om","wheel_of_dharma","star_of_david","six_pointed_star","menorah","yin_yang","orthodox_cross","place_of_worship","ophiuchus","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","id","atom_symbol","u7a7a","u5272","radioactive","biohazard","mobile_phone_off","vibration_mode","u6709","u7121","u7533","u55b6","u6708","eight_pointed_black_star","vs","accept","white_flower","ideograph_advantage","secret","congratulations","u5408","u6e80","u7981","a","b","ab","cl","o2","sos","no_entry","name_badge","no_entry_sign","x","o","stop_sign","anger","hotsprings","no_pedestrians","do_not_litter","no_bicycles","non-potable_water","underage","no_mobile_phones","exclamation","grey_exclamation","question","grey_question","bangbang","interrobang","100","low_brightness","high_brightness","trident","fleur_de_lis","part_alternation_mark","warning","children_crossing","beginner","recycle","u6307","chart","sparkle","eight_spoked_asterisk","negative_squared_cross_mark","white_check_mark","diamond_shape_with_a_dot_inside","cyclone","loop","globe_with_meridians","m","atm","zzz","sa","passport_control","customs","baggage_claim","left_luggage","wheelchair","no_smoking","wc","parking","potable_water","mens","womens","baby_symbol","restroom","put_litter_in_its_place","cinema","signal_strength","koko","ng","ok","up","cool","new","free","zero","one","two","three","four","five","six","seven","eight","nine","keycap_ten","asterisk","1234","eject_button","arrow_forward","pause_button","next_track_button","stop_button","record_button","play_or_pause_button","previous_track_button","fast_forward","rewind","twisted_rightwards_arrows","repeat","repeat_one","arrow_backward","arrow_up_small","arrow_down_small","arrow_double_up","arrow_double_down","arrow_right","arrow_left","arrow_up","arrow_down","arrow_upper_right","arrow_lower_right","arrow_lower_left","arrow_upper_left","arrow_up_down","left_right_arrow","arrows_counterclockwise","arrow_right_hook","leftwards_arrow_with_hook","arrow_heading_up","arrow_heading_down","hash","information_source","abc","abcd","capital_abcd","symbols","musical_note","notes","wavy_dash","curly_loop","heavy_check_mark","arrows_clockwise","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","heavy_multiplication_x","infinity","heavy_dollar_sign","currency_exchange","copyright","registered","tm","end","back","on","top","soon","ballot_box_with_check","radio_button","white_circle","black_circle","red_circle","large_blue_circle","small_orange_diamond","small_blue_diamond","large_orange_diamond","large_blue_diamond","small_red_triangle","black_small_square","white_small_square","black_large_square","white_large_square","small_red_triangle_down","black_medium_square","white_medium_square","black_medium_small_square","white_medium_small_square","black_square_button","white_square_button","speaker","sound","loud_sound","mute","mega","loudspeaker","bell","no_bell","black_joker","mahjong","spades","clubs","hearts","diamonds","flower_playing_cards","thought_balloon","right_anger_bubble","speech_balloon","left_speech_bubble","clock1","clock2","clock3","clock4","clock5","clock6","clock7","clock8","clock9","clock10","clock11","clock12","clock130","clock230","clock330","clock430","clock530","clock630","clock730","clock830","clock930","clock1030","clock1130","clock1230","white_flag","black_flag","pirate_flag","checkered_flag","triangular_flag_on_post","rainbow_flag","united_nations","afghanistan","aland_islands","albania","algeria","american_samoa","andorra","angola","anguilla","antarctica","antigua_barbuda","argentina","armenia","aruba","australia","austria","azerbaijan","bahamas","bahrain","bangladesh","barbados","belarus","belgium","belize","benin","bermuda","bhutan","bolivia","caribbean_netherlands","bosnia_herzegovina","botswana","brazil","british_indian_ocean_territory","british_virgin_islands","brunei","bulgaria","burkina_faso","burundi","cape_verde","cambodia","cameroon","canada","canary_islands","cayman_islands","central_african_republic","chad","chile","cn","christmas_island","cocos_islands","colombia","comoros","congo_brazzaville","congo_kinshasa","cook_islands","costa_rica","croatia","cuba","curacao","cyprus","czech_republic","denmark","djibouti","dominica","dominican_republic","ecuador","egypt","el_salvador","equatorial_guinea","eritrea","estonia","ethiopia","eu","falkland_islands","faroe_islands","fiji","finland","fr","french_guiana","french_polynesia","french_southern_territories","gabon","gambia","georgia","de","ghana","gibraltar","greece","greenland","grenada","guadeloupe","guam","guatemala","guernsey","guinea","guinea_bissau","guyana","haiti","honduras","hong_kong","hungary","iceland","india","indonesia","iran","iraq","ireland","isle_of_man","israel","it","cote_divoire","jamaica","jp","jersey","jordan","kazakhstan","kenya","kiribati","kosovo","kuwait","kyrgyzstan","laos","latvia","lebanon","lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","macau","macedonia","madagascar","malawi","malaysia","maldives","mali","malta","marshall_islands","martinique","mauritania","mauritius","mayotte","mexico","micronesia","moldova","monaco","mongolia","montenegro","montserrat","morocco","mozambique","myanmar","namibia","nauru","nepal","netherlands","new_caledonia","new_zealand","nicaragua","niger","nigeria","niue","norfolk_island","northern_mariana_islands","north_korea","norway","oman","pakistan","palau","palestinian_territories","panama","papua_new_guinea","paraguay","peru","philippines","pitcairn_islands","poland","portugal","puerto_rico","qatar","reunion","romania","ru","rwanda","st_barthelemy","st_helena","st_kitts_nevis","st_lucia","st_pierre_miquelon","st_vincent_grenadines","samoa","san_marino","sao_tome_principe","saudi_arabia","senegal","serbia","seychelles","sierra_leone","singapore","sint_maarten","slovakia","slovenia","solomon_islands","somalia","south_africa","south_georgia_south_sandwich_islands","kr","south_sudan","es","sri_lanka","sudan","suriname","swaziland","sweden","switzerland","syria","taiwan","tajikistan","tanzania","thailand","timor_leste","togo","tokelau","tonga","trinidad_tobago","tunisia","tr","turkmenistan","turks_caicos_islands","tuvalu","uganda","ukraine","united_arab_emirates","uk","england","scotland","wales","us","us_virgin_islands","uruguay","uzbekistan","vanuatu","vatican_city","venezuela","vietnam","wallis_futuna","western_sahara","yemen","zambia","zimbabwe"]'
  );
var pc, Fu;
function nO() {
  return (
    Fu ||
      ((Fu = 1),
      (pc = {
        lib: aO,
        ordered: rO,
        fitzpatrick_scale_modifiers: ["🏻", "🏼", "🏽", "🏾", "🏿"],
      })),
    pc
  );
}
var $u;
function Sc() {
  if ($u) return uc.exports;
  $u = 1;
  var s = uh(),
    i = jc(),
    c = nO(),
    f = (uc.exports = {});
  return (
    (f.emoji = s(
      c.lib,
      function (u) {
        return u.char;
      },
      !0
    )),
    i(f.emoji, function (u, y, v) {
      return (!u && delete v[y]) || !0;
    }),
    (f.get = function (u) {
      return u.charAt(0) === ":" && (u = u.slice(1, -1)), this.emoji[u];
    }),
    (c = null),
    uc.exports
  );
}
var Uu;
function yf() {
  if (Uu) return ic.exports;
  Uu = 1;
  var s = Sc(),
    i = jc(),
    c = (ic.exports = {});
  return (
    (c.emoji = {}),
    i(s.emoji, function (f, u) {
      return (c.emoji[f] = u);
    }),
    (c.get = function (f) {
      return c.emoji[f];
    }),
    ic.exports
  );
}
var yc, Au;
function oO() {
  if (Au) return yc;
  Au = 1;
  var s = Sc();
  return (yc = Object.keys(s.emoji)), (s = null), yc;
}
var hc, Bu;
function sO() {
  if (Bu) return hc;
  Bu = 1;
  var s = yf();
  return (hc = Object.keys(s.emoji)), hc;
}
var Hu;
function cO() {
  if (Hu) return lc.exports;
  Hu = 1;
  var s = yf(),
    i = Sc(),
    c = oO(),
    f = sO(),
    u = (lc.exports = {});
  return (
    (u.getName = function (y) {
      return s.get(y);
    }),
    (u.getUnicode = function (y) {
      return i.get(y);
    }),
    (u.names = c),
    (u.unicode = f),
    lc.exports
  );
}
var lO = cO();
const iO = Wu(lO),
  hf = ({ emojiName: s, size: i }) => {
    const c = iO.getUnicode(s);
    return j.jsx("div", {
      children: j.jsx("p", { style: { fontSize: i }, children: c }),
    });
  },
  uO = ({ expenses: s }) => {
    const i = so,
      c = (f) => i.find((u) => u.uuid === f);
    return j.jsx("div", {
      className: "list",
      children: j.jsx("div", {
        className: "expenses",
        children: s.map((f, u) =>
          j.jsxs(
            "div",
            {
              className: "expense",
              children: [
                j.jsx("div", {
                  style: { padding: "2px 8px" },
                  children: j.jsx(hf, {
                    emojiName: c(f.categoryUuid).emoji,
                    size: 30,
                  }),
                }),
                j.jsxs("div", {
                  className: "desc-date",
                  children: [
                    j.jsx("span", { className: "date", children: f.date }),
                    j.jsx("span", {
                      className: "icon",
                      children: f.description,
                    }),
                  ],
                }),
                j.jsxs("span", {
                  className: "expense-cost",
                  children: ["bs. ", f.cost],
                }),
              ],
            },
            u
          )
        ),
      }),
    });
  },
  fO = () => {
    const s = Dr(),
      i = () => {
        s("add-expense");
      };
    return j.jsx("div", {
      className: "toolbar",
      children: j.jsxs("div", {
        className: "buttons",
        children: [
          j.jsx("button", { className: "btn-opt", children: j.jsx(Zn, {}) }),
          j.jsx("button", { className: "btn-opt", children: j.jsx(Zn, {}) }),
          j.jsx("button", { className: "btn-opt", children: j.jsx(Zn, {}) }),
          j.jsx("button", {
            className: "add-button",
            onClick: i,
            children: j.jsx(Zn, {}),
          }),
        ],
      }),
    });
  },
  Vu = () => {
    const [s, i] = x.useState([]),
      [c, f] = x.useState(0);
    return (
      x.useEffect(() => {
        Jy(),
          (async () => {
            const y = await th();
            i(y);
            const v = await ah(y);
            f(v);
          })();
      }, [c]),
      j.jsx(j.Fragment, {
        children: j.jsxs("div", {
          className: "container",
          children: [
            j.jsx(sh, {}),
            j.jsxs("div", {
              className: "header",
              children: [j.jsx(ch, { total: c }), j.jsx(lh, {})],
            }),
            j.jsx(uO, { expenses: s }),
            j.jsx(fO, {}),
          ],
        }),
      })
    );
  },
  dO = (s = {}) => {
    const [i, c] = x.useState(s);
    return [
      i,
      ({ target: u }) => {
        c({ ...i, [u.name]: u.value });
      },
    ];
  },
  pO = () => {
    const s = new Date();
    return `${s.getFullYear()}-${s.getMonth() + 1}-${s.getDate()}`;
  },
  gf = ({ title: s }) => {
    const i = Dr();
    return j.jsx("div", {
      className: "nav-header back",
      children: j.jsxs("div", {
        className: "content-back",
        children: [
          j.jsx(ih, { className: "icon", size: 30, onClick: () => i(-1) }),
          j.jsx("h2", { children: s }),
        ],
      }),
    });
  },
  _f = ({ emojiName: s, size: i, categoryName: c }) =>
    j.jsxs("div", {
      className: "category",
      children: [
        j.jsx(hf, { emojiName: s, size: i }),
        j.jsx("span", { children: c }),
      ],
    }),
  yO = {
    editExpense: { en: "Add Expense", es: "Añadir gasto", ru: "", it: "" },
  },
  hO = () =>
    j.jsxs("div", {
      className: "more-btn",
      children: [
        j.jsx(pf, { className: "icon", size: 50 }),
        j.jsx("span", { children: Jt(ya.more) }),
      ],
    }),
  gO = ({ onCategoryChange: s, selectedCategory: i }) => {
    const c = so.slice(0, 3),
      f = (u) => {
        s(u);
      };
    return j.jsxs("div", {
      className: "emoji-picker",
      children: [
        c.map((u, y) =>
          j.jsx(
            "div",
            {
              className: `emoji-option ${u.uuid === i ? "selected" : ""}`,
              onClick: () => f(u.uuid),
              children: j.jsx(_f, {
                emojiName: u.emoji,
                size: 40,
                categoryName: u.name,
              }),
            },
            y
          )
        ),
        j.jsx("div", { className: "emoji-option", children: j.jsx(hO, {}) }),
      ],
    });
  },
  kf = ({ title: s }) =>
    j.jsx("div", {
      className: "title",
      children: j.jsx("h3", { children: s }),
    }),
  _O = () =>
    j.jsxs("div", {
      className: "more-btn",
      style: { backgroundColor: "red" },
      children: [
        j.jsx(pf, { className: "icon", size: 60 }),
        j.jsx("span", { children: Jt(ya.more) }),
      ],
    }),
  kO = () =>
    j.jsxs("div", {
      className: "box flex-column",
      children: [
        j.jsx(kf, { title: "User categories" }),
        j.jsxs("div", {
          className: "categories-list",
          children: [
            so.map((s, i) =>
              j.jsx(
                "div",
                {
                  className: "option",
                  children: j.jsx(_f, {
                    emojiName: s.emoji,
                    size: 50,
                    categoryName: s.name,
                  }),
                },
                i
              )
            ),
            j.jsx(_O, {}),
          ],
        }),
      ],
    }),
  mO = () => {
    const s = Dr(),
      [i, c] = x.useState(""),
      f = (R) => {
        c(R);
      },
      [u, y] = dO({ description: "", cost: "", date: pO(), categoryUuid: i }),
      { description: v, cost: b, date: m } = u,
      z = (R) => {
        R.preventDefault(), (u.categoryUuid = i), eh(u), s("/");
      };
    return j.jsxs("div", {
      className: "container",
      children: [
        j.jsx(gf, { title: Jt(yO.editExpense) }),
        j.jsx("div", {
          className: "edit-expense",
          children: j.jsxs("div", {
            className: "box form-container",
            children: [
              j.jsx(kf, { title: "Add Expenses" }),
              j.jsxs("form", {
                children: [
                  j.jsx("div", {
                    className: "input-box",
                    children: j.jsx("input", {
                      className: "half-width",
                      type: "number",
                      name: "cost",
                      id: "cost",
                      value: b,
                      onChange: y,
                      placeholder: "total",
                    }),
                  }),
                  j.jsx("div", {
                    className: "input-box",
                    children: j.jsx(gO, {
                      onCategoryChange: f,
                      selectedCategory: i,
                    }),
                  }),
                  j.jsx("div", {
                    className: "input-box half-width",
                    children: j.jsx("input", {
                      type: "date",
                      name: "date",
                      id: "date",
                      value: m,
                      onChange: y,
                    }),
                  }),
                  j.jsx("div", {
                    className: "input-box",
                    children: j.jsx("input", {
                      type: "text",
                      name: "description",
                      id: "description",
                      value: v,
                      onChange: y,
                      placeholder: "description",
                    }),
                  }),
                  j.jsx("div", {
                    className: "form-btns",
                    children: j.jsx("button", {
                      className: "ok-btn",
                      onClick: (R) => z(R),
                      children: "Submit",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  wO = () =>
    j.jsxs("div", {
      className: "container",
      children: [
        j.jsx(gf, { title: "" }),
        j.jsx("div", { className: "section", children: j.jsx(kO, {}) }),
      ],
    }),
  vO = () =>
    j.jsxs(sf, {
      children: [
        j.jsx(Aa, { path: "/", element: j.jsx(Vu, {}) }),
        j.jsx(Aa, { path: "/*", element: j.jsx(Vu, {}) }),
        j.jsx(Aa, { path: "/add-expense", element: j.jsx(mO, {}) }),
        j.jsx(Aa, { path: "/add-category", element: j.jsx(wO, {}) }),
      ],
    }),
  zO = () =>
    j.jsx(sf, { children: j.jsx(Aa, { path: "/*", element: j.jsx(vO, {}) }) }),
  bO = () =>
    j.jsx(j.Fragment, {
      children: j.jsx(gc.Provider, {
        value: { className: "back-icon" },
        children: j.jsx(zO, {}),
      }),
    });
bp.createRoot(document.getElementById("root")).render(
  j.jsx(x.StrictMode, { children: j.jsx(By, { children: j.jsx(bO, {}) }) })
);
