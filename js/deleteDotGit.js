const fs = require("fs/promises");
const path = require("path");

const deleteChallengesDotGit = async (pathsFile) => {
  pathsFile.forEach((pathFile) => {
    fs.rmdir(`${pathFile}/.git`, { recursive: true });
  });
};

const getAllPaths = async (student) => {
  const studentFiles = await fs.readdir(await student);
  const studentsFilesPaths = studentFiles
    .filter((fileName) => fileName !== ".DS_Store")
    .map((challenge) => path.join(student, challenge));

  deleteChallengesDotGit(studentsFilesPaths);
};

const deleteDotGit = async (pathColnes) => {
  const files = await fs.readdir(pathColnes);

  const students = files
    .filter((file) => file !== ".DS_Store")
    .map((file) => path.join(pathColnes, file));

  students.map(async (student) => {
    getAllPaths(student);
  });
};

module.exports = deleteDotGit;
