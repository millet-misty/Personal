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

[react-typescript]
1) new project
  npx create-react-app react-app2 --template typescript

2) build & run
  npm start

3) code check
  npx eslint . --ext ts,tsx

[screen transition]
  npm install @react-navigation/native
  npm install -g expo-cli
  expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

  npm install @react-navigation/stack

  # Can't resolve 'react-native' in '\node_modules\@react-navigation\elements\lib\module'
  