module.exports = {
  pattern: /\.sofadoc$/,
  processFile: function (filePath, contents, basePath) {
    return [{
      content: contents,
      file: filePath,
      basePath: basePath,
      fileType: 'sofadoc',
      startingLine: 1
    }];
  }
};
