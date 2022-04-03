import path from 'path';
import helpers from 'yeoman-test';

const tmpDir = path.resolve('tmp');
const generator = path.resolve('src', 'app', 'index.js');

test(`Main Generator ${(generator)} runs correctly in ${tmpDir}`, async () => {
  const filepath = 'foo/bar.html';
  const runResult = await helpers.create(generator)
    .inDir(tmpDir)
    .withPrompts({ filepath })
    .build()
    .run();
  runResult.assertFile(filepath);
});
