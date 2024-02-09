/**
 * an array of routes that are accesible to the public
 * those routes do not require authentication
 * @type {string[]}
 */
export const PublicRoutes = ["/"];

/**
 * an array of routes that are used for authentication
 * those routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * the prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * the default redirect path after logged in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
