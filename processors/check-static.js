var _ = require('lodash');
module.exports = {
  name: 'check-static',
  description: 'This processors check for a `static` tag on a document and set it to `true` so we can use it for conditions in the template',
  runAfter: ['api-docs'],
  process: function(docs, partialNames) {
    _.forEach(docs, function(doc) {
      console.log(doc);
      if (doc.tags && doc.tags.tagsByName.static !== undefined) {
        doc.static = true;
      }
    
    });

  }
};
