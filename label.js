const githubLabelSync = require("github-label-sync");

githubLabelSync({
  accessToken: "",
  repo: "OhDaky/githubActions",
  labels: [],
  dryRun: true,
}).then((diff) => {
  console.log(diff);
});
