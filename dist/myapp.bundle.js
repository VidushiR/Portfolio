!(function(e) {
  function n(t) {
    if (r[t]) return r[t].exports;
    var o = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  var r = {};
  (n.m = e),
    (n.c = r),
    (n.d = function(e, r, t) {
      n.o(e, r) ||
        Object.defineProperty(e, r, {
          configurable: !1,
          enumerable: !0,
          get: t
        });
    }),
    (n.n = function(e) {
      var r =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(r, "a", r), r;
    }),
    (n.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function(e, n) {
    throw new Error(
      'Module parse failed: Unexpected token (19:6)\nYou may need an appropriate loader to handle this file type.\n|   render() {\n|     return (\n|       <BrowserRouter>\n|         <div>\n|           <Route exact path="/" component={Home} />'
    );
  }
]);
