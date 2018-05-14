const fs = require('fs');
const path = require('path');

const readGraphQL = (dir) => {
  const files = fs.readdirSync(dir);

  return files.map((file) => {
    if (fs.statSync(path.join(dir, `/${file}`)).isFile()) {
      return fs.readFileSync(path.join(dir, `/${file}`), 'utf-8');
    }

    return '';
  });
};

module.exports = readGraphQL;
