/**
 * API configuration — local dev uses Express on :3000, production uses Railway.
 */
const PRODUCTION_API_URL = "https://fswd-production.up.railway.app";

function isLocalDevHost() {
  var host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1";
}

const API_BASE_URL = isLocalDevHost() ? "http://localhost:3000" : PRODUCTION_API_URL;
const API_URL = API_BASE_URL + "/api";
const PUBLIC_API_URL = API_BASE_URL + "/api/public";
