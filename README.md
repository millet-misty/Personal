"# Personal" 

[Git Memo]
1) set folder as repository
  git init

2) set account
  git config --global user.name "****"
  git config --global user.email "****"

3) set local name
  <"origin" in VSCode git Extension>

4) pull
  git pull 

5) add(staging) and commit
  <use VSCode git Extension>

6) push
  git push -u origin head

[react memo]
  create-react-app

[typescript memo]
1) new project + eslint
  npm init
  npm install --save-dev typescript @types/node
  npm install eslint --save-dev
  npx eslint --init
  npx tsc --init

2) .gitignore
  今回はreact-app1からコピペした

3) build & run
  ./node_modules/.bin/tsc
  node ./src/index.js
