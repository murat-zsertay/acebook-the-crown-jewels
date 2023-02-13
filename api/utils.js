const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");
Sentry.init({
    dsn: "https://7d83e48b47f243e1bf6b33e2ab5cc834@o4504609634385920.ingest.sentry.io/4504609638318080",

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

require("dotenv").config({
    path: `${process.cwd()}/.env.${process.env.NODE_ENV}.local`
});