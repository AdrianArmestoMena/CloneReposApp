const childProcessExec = require("child_process").exec;
const util = require("util");

const exec = util.promisify(childProcessExec);

const cloneRepo = async (repos, name, path) => {
  const reposList = await repos;
  await reposList.map(async ({ url, challenge }) => {
    await exec(`git clone ${url} ${path}${name}/${challenge}`);
  });
  console.log(`${name} clones Done!`);
};

module.exports = {
  cloneRepo,
};
