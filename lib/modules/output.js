'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var writeFile = function writeFile(filePath, data) {
  _fs2.default.writeFile(filePath, typeof data === 'Object' ? JSON.stringify(data) : data, 'utf8', function () {
    return console.log('file filled.');
  });
};

module.exports = {
  writeFile: writeFile
};
//# sourceMappingURL=output.js.map
