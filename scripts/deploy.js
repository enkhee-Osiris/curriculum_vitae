#!/usr/bin/env node

const process = require('process');
const path = require('path');
const { renameSync, realpathSync } = require('fs');
const { execSync } = require('child_process');

const core = require('@actions/core');

const appDirectory = realpathSync(path.resolve(__dirname, '..'));
const buildDirectory = path.resolve(appDirectory, 'build');
const appGitDirectory = path.resolve(appDirectory, './.git');

const TMP_BRANCH_NAME = 'tmp_empty_branch';

const execOptions = {
  encoding: 'utf8',
  cwd: buildDirectory,
  stdio: [
    'pipe', // stdin (default)
    'pipe', // stdout (default)
    'ignore', // stderr
  ],
};


function log(...args) {
  if (process.env.CI) {
    core.info(...args);
  } else {
    console.log(...args);
  }
}

(async () => {
  log('Staging build');

  const currentBranch = execSync(`git branch --show-current`, execOptions).trim();

  execSync(`git checkout --orphan ${TMP_BRANCH_NAME}`);
  renameSync(appGitDirectory, path.resolve(buildDirectory, './.git'));

  execSync(`git add -A`, execOptions);

  let gitUserName = '';
  let gitUserEmail = '';

  try {
    gitUserName = execSync('git config user.name', execOptions).trim();
    gitUserEmail = execSync('git config user.email', execOptions).trim();

    execSync(
      `git -c user.name="${gitUserName}" -c user.email="${gitUserEmail}" commit -m "Update github page" --author="enkhee-Osiris <enkhee.ag@gmail.com>"`,
      execOptions,
    );
  } catch {
    log('Using default git config');
    gitUserName = 'github-actions';
    gitUserEmail = 'github-actions@github.com';

    execSync(
      `git -c user.name="${gitUserName}" -c user.email="${gitUserEmail}" commit -m "Update github page" --author="enkhee-Osiris <enkhee.ag@gmail.com>"`,
      execOptions,
    );
  }
  log('Created commit');

  execSync(
    'git push -f origin HEAD:pages',
    execOptions,
  );
  log('Pushed commit');

  log('Cleaning up');
  renameSync(path.resolve(buildDirectory, './.git'), appGitDirectory);

  execSync(`git reset --hard ${currentBranch}`);
  execSync(`git checkout ${currentBranch}`);
  execSync(`git branch -D  ${TMP_BRANCH_NAME}`);
})();



['SIGINT', 'SIGTERM'].forEach(sig => {
  process.on(sig, () => {
    process.exit(1);
  });
});
