// Use the correct API for the current environment.
let apiBase = window.location.origin;
let apiPath = '';
if (apiBase.match('vue-booster-coo-')) {
  apiPath = apiBase.replace('vue-booster-coo-', 'gis-service-coo-');
} else {
  // We're probably on a local dev environment. Set the DEV API path.
  apiPath = 'https://gis-service-coo-dev.apps.ottawa.rht-labs.com';
}

export default {
  URL_EDUCATION: apiPath + '/gis/educationnews',
  URL_POPULATED_PLACES: apiPath + '/gis/populatedplaces'
};