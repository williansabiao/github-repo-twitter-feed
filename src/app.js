import { writeFile } from './modules/output'

module.exports = (() => {
  writeFile('output.json', { test: 'true' });
})();