/**
 * API_BASE_URL — points to the Railway backend in production,
 * and to localhost:3000 during local development.
 */
const API_BASE_URL =
  window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:3000"
    : "https://fswd-production.up.railway.app";