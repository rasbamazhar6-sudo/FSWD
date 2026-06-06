/**
 * Loads store contact from the Express backend.
 * Uses API_BASE_URL from config.js (Railway in production, localhost in dev).
 */
(function () {
  function getBackendOrigin() {
    if (typeof API_BASE_URL !== "undefined" && API_BASE_URL) {
      return API_BASE_URL;
    }
    var loc = window.location;
    var host = loc.hostname === "127.0.0.1" ? "127.0.0.1" : "localhost";
    if (
      (loc.protocol === "http:" || loc.protocol === "https:") &&
      (loc.port === "3000" || loc.port === "")
    ) {
      return loc.origin;
    }
    return "http://" + host + ":3000";
  }

  window.__AS_BACKEND_ORIGIN__ = getBackendOrigin();

  var script = document.createElement("script");
  script.src = window.__AS_BACKEND_ORIGIN__ + "/api/public/store-config.js";
  script.onload = function () {
    window.dispatchEvent(new CustomEvent("as-store-contact-ready"));
  };
  document.head.appendChild(script);
})();
