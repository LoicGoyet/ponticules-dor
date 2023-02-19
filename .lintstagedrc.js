const path = require('path');

const buildLintCommand = (filenames) => {
  return `next lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;
};

const buildTestCommand = () => {
  return 'jest --runInBand --ci --passWithNoTests --onlyChanged';
};

const buildTypecheckCommand = () => {
  return 'tsc --noEmit';
};

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildLintCommand, buildTestCommand, buildTypecheckCommand],
};
