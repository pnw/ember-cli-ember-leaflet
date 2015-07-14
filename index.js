var path = require('path');
var fs = require('fs');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'Ember-leaflet for Ember CLI',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function (app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/leaflet-dist/leaflet-src.js');
    app.import(app.bowerDirectory + '/leaflet-dist/leaflet.css');

    app.import(app.bowerDirectory + '/leaflet.markerclusterer/dist/leaflet.markercluster-src.js', {
      exports: {
        'L': 'default'
      }
    });
    app.import(app.bowerDirectory + '/leaflet.markerclusterer/dist/MarkerCluster.Default.css');
  }
};

