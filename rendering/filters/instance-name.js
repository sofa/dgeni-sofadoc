module.exports = {
  name: 'instanceName',
  process: function (str) {
    var parts = str.split('.');
    return parts[parts.length - 1];
  }
};
