import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';

  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }
}

// export default class ApplicationAdapter extends JSONAPIAdapter {
//   namespace = 'v2.0';
//   host = 'https://api.weatherbit.io'
// }