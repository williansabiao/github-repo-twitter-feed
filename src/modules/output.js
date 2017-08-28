import fs from 'fs';

const writeFile = (filePath, data) => {
  fs.writeFile(filePath, (typeof data === 'object') ? JSON.stringify(data) : data, 'utf8');
}
const deleteFile = (filePath, cb = () => {}) => {
  fs.unlink(filePath, (err) => {
    if (err) throw err;
    cb();
  });
}

module.exports = {
  writeFile,
  deleteFile,
};