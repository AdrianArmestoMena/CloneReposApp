const { cloneRepo } = require("./cloneRepo");
const { students202209, path, promotion } = require("./data");
const { getUserReposList } = require("./getUserReposList");
const deleteDotGit = require("./deleteDotGit");

const cloneStudentsRepo = () => {
  students202209.forEach((user) => {
    const { githubUser, name } = user;
    const userRepo = getUserReposList(githubUser, promotion);
    cloneRepo(userRepo, name, path);
  });
};

cloneStudentsRepo();
deleteDotGit(path);
