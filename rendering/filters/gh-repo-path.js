module.exports = {
  name: 'ghRepoPath',
  process: function (str) {
    return str.replace('src/', 'edit/master/src/');
  }
};
