module.exports = {
  name: 'ucFirst',
  process: function (str) {
    return str[0].toUpperCase() + str.slice(1);
  }
};
