# Contributing to News360

---
- Before jumping into a PR be sure to search [existing PRs](https://github.com/Scriptonauts/News360/issues) or [issues](https://github.com/Scriptonauts/News360/pulls) for an open or closed item that relates to your submission.

## Developing

The development branch is `development`. This is the branch that all pull
requests should be made against. 

To develop locally:

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your
   own GitHub account and then
   [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device. 

   ```sh
   git clone https://github.com/Scriptonauts/News360.git
   ```

2. Create a new branch:
   ```
   git checkout -b MY_BRANCH_NAME
   ```
3. Install npm:
   ```
   npm install 
   ```
4. Start developing and watch for code changes:
   ```
   ionic serve
   ```
 

### Linting

To check the formatting of your code:

```sh
npm run lint
```

```sh
npm run stylelint
```