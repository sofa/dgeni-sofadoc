module.exports = {
  name: 'lcFirst',
  process: function (str) {
    return str[0].toLowerCase() + str.slice(1);
  }
};
