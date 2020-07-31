**_Update a pinned gist with a random image from your favourite subreddit!_**<br>

# Prep

A) Set up a token over [here](https://github.com/settings/tokens/new) with the **gist** scope<br>
B) Create a new public gist [here](https://gist.github.com)

# Project setup

A) Fork this repo<br>
B) Go to the **actions** tab and click **enable**<br>
C) Go into your forked repo and go into the file: **./github/workflows/schedule.yml**<br>
D) Once in the schedule file, edit the **GIST_ID** section in the **env** section of the file. It should be something like: gist.github.com/[your name here]/this is the id.<br>
E) Once again in the schedule file, edit the **SUBREDDIT** section in the **env** section of the file. It should be the name of the subreddit you wish to get the image from. <br>
F) Go into your forked repo and find the settings tab, then find the secrets tab.<br>
G) Add 1 secret:

- 1. GH_TOKEN - Your github token you got on step A

# Congrats, you did it! 🎉🎉

If you ever need help you can make an issue :)
