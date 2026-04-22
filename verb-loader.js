/* ═══════════════════════════════════════════════════════════
   verb-loader.js — Collects verbData from multiple <script> loads

   Each verb's data.js declares `const verbData = {...}`.
   This loader captures each one into a registry before the
   next data.js overwrites it.

   Usage (in drill.html):
     <script src="verb-loader.js"></script>
     <script src="dire/data.js"></script>
     <script>VERB_REGISTRY.capture("dire");</script>
     <script src="parlare/data.js"></script>
     <script>VERB_REGISTRY.capture("parlare");</script>
     ...
     <script>
       var direData = VERB_REGISTRY.get("dire");
     </script>
   ═══════════════════════════════════════════════════════════ */

var VERB_REGISTRY = {
  _data: {},
  capture: function (name) {
    if (typeof verbData !== "undefined") {
      this._data[name] = verbData;
    }
  },
  get: function (name) {
    return this._data[name] || null;
  },
  all: function () {
    return this._data;
  },
  names: function () {
    return Object.keys(this._data);
  }
};
