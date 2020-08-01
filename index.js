const { GistBox } = require("gist-box");
const Box = new GistBox({
  id: process.env.GIST_ID,
  token: process.env.GH_TOKEN,
});
(async () => {
  const imageapi = require("imageapi.js");
  const img = await imageapi(process.env.SUBREDDIT, true);
  console.log(img);
  await Box.update({
    content: `👀 Here is your daily meme from r/${process.env.SUBREDDIT}!\n🔗 ${img}`,
  });
})();
