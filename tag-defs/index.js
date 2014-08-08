module.exports = [
    {
        name: 'sofadoc',
        required: true,
        docProperty: 'docType',
    },
    {
        name: 'package',
        defaultFn: function (doc) {
            if (doc.docType === 'class') {
        throw new Error('Missing tag "@package" for doc of type "'+ doc.docType + '" in file "' + doc.file + '" at line ' + doc.startingLine);
            }
        }
    },
    {
        name: 'requiresPackage',
        multi: true
    },
    {
        name: 'distFile',
        defaultFn: function (doc) {
            if (doc.docType === 'class') {
        throw new Error('Missing tag "@distFile" for doc of type "'+ doc.docType + '" in file "' + doc.file + '" at line ' + doc.startingLine);
            }
        }
    },
    {
        name: 'static'
    }
];
