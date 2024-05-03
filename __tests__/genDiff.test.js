import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathFromFixtures = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);
const contentFromFixtures = (filepath) => fs.readFileSync(pathFromFixtures(filepath), 'utf-8');

const expectResult = _.trim(contentFromFixtures('answerTestOne.js'), '`');

test('Test 1: JSON', () => {
  const file1 = pathFromFixtures('file1.json');
  const file2 = pathFromFixtures('file2.json');

  expect(genDiff(file1, file2)).toEqual(expectResult);
});
