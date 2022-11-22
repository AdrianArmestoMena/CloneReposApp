const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: "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",
});

const getUserReposList = async (userName, promotion) => {
  try {
    const hi = await octokit.rest.users.getByUsername({
      username: userName,
    });
    const data = await fetch(hi.data.repos_url);
    const repos = await data.json();
    return repos
      .map((repository) => ({
        url: repository.html_url,
        challenge: repository.name,
      }))
      .filter((repoData) => repoData.url.includes(promotion));
  } catch (error) {
    console.error(
      `\x1b[31mSomething went wrong getting reposlist, here is the error: 
        
        ${error.message}`
    );
    return error;
  }
};

module.exports = {
  getUserReposList,
};
