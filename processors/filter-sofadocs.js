var _ = require('lodash');
var log = require('winston');

module.exports = {
  name: 'filter-sofadocs',
  runAfter: ['tags-parsed'],
  runBefore: ['extracting-tags'],
  process: function(docs) {
    var docCount = docs.length;
    docs = _.filter(docs, function(doc) {
      return doc.tags.getTag('sofadoc');
    });
    log.debug('filtered ' + (docCount - docs.length) + ' docs');
    return docs;
  }
};
