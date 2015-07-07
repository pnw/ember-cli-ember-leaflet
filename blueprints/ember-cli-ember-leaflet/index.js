module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },
  
  afterInstall: function() {
    return this.addBowerPackageToProject('ember-leaflet', 'https://github.com/gabesmed/ember-leaflet.git#ember-cli-es6');
  }
};
