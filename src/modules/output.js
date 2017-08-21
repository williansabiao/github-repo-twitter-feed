import fs from 'fs';

const writeFile = (filePath, data) => {
  fs.writeFile(filePath, (typeof data === 'Object') ? JSON.stringify(data) : data, 'utf8', () => console.log('file filled.'));
}

module.exports = {
  writeFile
};