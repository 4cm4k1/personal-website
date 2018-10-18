const { DEV } = require('./getConstants');

const self = "'self'";
const none = "'none'";
const unsafeInline = "'unsafe-inline'";
const unsafeEval = "'unsafe-eval'";
const strictDynamic = "'strict-dynamic'";
const scripts = ['https:'];
const styles = ['https:', 'fonts.googleapis.com'];
const fonts = ['https:', 'fonts.gstatic.com'];
const images = ['https:', 'data:'];
const connect = ['https:'];

module.exports = () => {
  return {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [none],
        scriptSrc: [
          self,
          (req, res) => `'nonce-${res.locals.nonce}'`,
          strictDynamic,
          // unsafeInline,
          ...scripts,
          // unsafeEval,
        ],
        styleSrc: [self, unsafeInline, ...styles],
        fontSrc: [self, ...fonts],
        imgSrc: [self, ...images],
        baseUri: [none],
        objectSrc: [self],
        connectSrc: DEV ? [self, ...connect] : [...connect],
        upgradeInsecureRequests: true,
      },
    },
    dnsPrefetchControl: {
      allow: true,
    },
    expectCt: {
      enforce: true,
      maxAge: 30,
      reportUri: 'https://anthony.codes/tbd',
    },
    featurePolicy: {
      // Features commented out not yet implemented in Chrome
      features: {
        camera: [none],
        fullscreen: [self],
        geolocation: [none],
        gyroscope: [none],
        magnetometer: [none],
        microphone: [none],
        midi: [none],
        // notifications: [none],
        payment: [none],
        // push: [none],
        speaker: [self],
        syncXhr: [self],
        // vibrate: [none],
      },
    },
    frameguard: {
      action: 'deny',
    },
    hsts: {
      maxAge: 63072000,
      includeSubDomains: true,
      preload: true,
    },
    permittedCrossDomainPolicies: {
      permittedPolicies: 'none',
    },
    referrerPolicy: {
      policy: 'no-referrer-when-downgrade',
    },
    xssFilter: {
      reportUri: '/tbd',
    },
  };
};
