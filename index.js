var _ = require('lodash');
var path = require('canonical-path');

var ngdocPackage = require('dgeni-packages/ngdoc');
var examplesPackage = require('dgeni-packages/examples');

module.exports = function (config) {

    config = ngdocPackage(config);
    config = examplesPackage(config);

    config.set('source.extractors', [
        require('dgeni-packages/jsdoc/file-readers/jsdoc'),
        require('./extractors/sofadoc')
    ]);

    var tagDefs = config.get('processing.tagDefinitions');
    // we don't require @ngdoc tags
    var ngdocTag = _.find(tagDefs, { name: 'ngdoc' });
    ngdocTag.required = false;

    config.set('processing.tagDefinitions', tagDefs);
    // instead we require @sofadoc tags
    // also, we prepend here to make our tags work with tags like
    // @memberof
    config.prepend('processing.tagDefinitions', require('./tag-defs'));

    var processors = config.get('processing.processors');
    // remove filter-ngdocs and compute-id processors
    var newProcessors = _.remove(processors, function (processor) {
        var name = processor.name;
        return name !== 'filter-ngdocs' && name !== 'compute-id';
    });

    config.set('processing.processors', newProcessors);
    // and add our own modified compute-id processor
    config.append('processing.processors', [
        require('./processors/compute-id'),
        require('./processors/filter-sofadocs'),
        require('./processors/check-static')
    ]);

    config.prepend('rendering.templateFolders', path.resolve(__dirname, 'templates'));

    config.append('rendering.filters', [
        require('./rendering/filters/gh-repo-path'),
        require('./rendering/filters/uc-first'),
        require('./rendering/filters/lc-first'),
        require('./rendering/filters/instance-name')
    ]);

    return config;
};
