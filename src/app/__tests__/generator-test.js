import path from 'path';
import helpers from 'yeoman-test';

const tmpDir = path.resolve('tmp');
const generator = path.resolve('src', 'app', 'index.js');

describe('Main Generator', () => {
  const filepath = 'foo/bar.html';
  let runResult;

  beforeEach(async () => {
    runResult = await helpers.create(generator)
      .inDir(tmpDir)
      .withPrompts({ filepath })
      .build()
      .run();
  });

  it('runs correctly', async () => {
    runResult.assertFile(filepath);
  });
});
