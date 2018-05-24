const StopTimer = require('./creates/stop_timer');
const StartTimer = require('./creates/start_timer');
const Increment = require('./creates/increment');

process.env.BASE_URL = process.env.BASE_URL || 'https://staging-api.allow2.com';
process.env.CLIENT_ID = /*process.env.CLIENT_ID || */ 'zapier';
process.env.CLIENT_SECRET = /*process.env.CLIENT_SECRET ||*/ '4355ef48-01ee-41ac-a59c-97cef10e78bd';

const authentication = require('./authentication');

// To include the Authorization header on all outbound requests, simply define a function here.
// It runs runs before each request is sent out, allowing you to make tweaks to the request in a centralized spot
const includeBearerToken = (request, z, bundle) => {
    if (bundle.authData.access_token) {
        request.headers.Authorization = 'Bearer ${bundle.authData.access_token}';
    }
    return request;
};

// Roll up all our behaviors in an App.
const App = {
    // This is just shorthand to reference the installed dependencies you have. Zapier will
    // need to know these before we can upload
    version: require('./package.json').version,
    platformVersion: require('zapier-platform-core').version,

    authentication: authentication,

    // beforeRequest & afterResponse are optional hooks into the provided HTTP client
    beforeRequest: [
        includeBearerToken
    ],

    afterResponse: [
    ],

    // If you want to define optional resources to simplify creation of triggers, searches, creates - do that here!
    resources: {
    },

    // If you want your trigger to show up, you better include it here!
    triggers: {
    },

    // If you want your searches to show up, you better include it here!
    searches: {
    },

    // If you want your creates to show up, you better include it here!
    creates: {
    [StopTimer.key]: StopTimer,
    [StartTimer.key]: StartTimer,
    [Increment.key]: Increment,
    }
};

// Finally, export the app.
module.exports = App;
