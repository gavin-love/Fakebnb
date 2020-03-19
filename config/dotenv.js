/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function() {
  return {
    clientAllowedKeys: ['MAPBOX_ACCESS_TOKEN'],
    fastbootAllowedKeys: [],
    failOnMissingKey: false,
    path: path.join(path.dirname(__dirname), '.env')
  }
};
