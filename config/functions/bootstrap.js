const Sentry = require('@sentry/node');
const Tracing = require('@sentry/tracing');

module.exports = () => {
  Sentry.init({
    dsn: 'https://your-sentry-dsn-url',
    environment: process.env.NODE_ENV || 'development',
    tracesSampleRate: 1.0,
  });
};
