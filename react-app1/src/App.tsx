import 'react-native-gesture-handler';
import React from 'react';
import { useEffect,useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import logo from './logo.svg';
import './App.css';

// 8-4: 型定義
import type {User} from "./types/User";

// SECTION26: コンポーネント指向
import {CToggle} from "./components/CompToggle";

import type {RootStackParamList, SecondScreenProp} from "./second_page"
import { SecondScreen } from './second_page';

// SECTION17: NameInputコンポーネント
//{
  const NameInput = () => {
      // stateの管理(変数,変更関数名)
      const [name, setName] = useState("○○");
      // イベントハンドラ
      const handleOnChange = (event: { target: { value: React.SetStateAction<string>; }; }) => setName(event.target.value);

      return (
        <div>
          <input type = "text" onChange={handleOnChange} />
          <p>こんにちは、{name}さん</p>
          </div>
      );
  };
  //const domContainer = document.querySelector("#nameInputContainer");
  //ReactDOM.render(<NameInput />, domContainer);
//};

// SECTION 22:繰り返し処理の実装
const numbers = [2,4,6,8];
const ListItems = () => {
  // mapで生成する要素にはkey属性を入れないとワーニング
  const items = numbers.map((item) => 
    <li key={item.toString()}>{item}</li>);

  const user1:User ={id:50, name:"hime"};
  user1.id = 10;

    return <ul>{items}</ul>;
}

// SECTION 24:セレクトボックス
const InputSelectBox = () => {
  // 状態(変数,変更関数名)
  const [selectedValue, setSelectedValue] = useState("HTML");
  // イベントハンドラ
  const handleChenge = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="App">
      <p>
        {/* onChangeでselectedValueが更新されて画面上の表示が変化する */}
        現在選択されている値:
        <b>{selectedValue}</b>
      </p>

        {/* セレクトボックス設置 */}
        <select value={selectedValue} onChange={handleChenge}>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
        </select>
    </div>
  );
}

// SECTION 24:ラジオボタン
const InputRadio = ()=>{
  // 状態(変数,変更関数名)
  const [checkedValue, setCheckedValue] = React.useState("red");
  // イベントハンドラ
  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) =>setCheckedValue(e.target.value);

  return (
    <div className="App">
      <p>
        現在選択されている値:<b>{checkedValue}</b>
      </p>
      <label>
        <input type="radio" value="red" onChange={handleChange} checked={checkedValue==="red"} /> red
      </label>
      <label>
        <input type="radio" value="blue" onChange={handleChange} checked={checkedValue==="blue"} /> blue
      </label>
      <label>
        <input type="radio" value="green" onChange={handleChange} checked={checkedValue==="green"} /> green
      </label>
    </div>
  );
}

function HomeScreen() {
  // トグルのやつ
  const [isLoggedIn, setIsLoggedInState] = React.useState(false);  // 状態(変数,変更関数名)
  const toggleIsLoggedIn = () => setIsLoggedInState(!isLoggedIn);  // イベントハンドラ

  // 4-7: useEffect
  useEffect(() => {alert();}, [isLoggedIn]);    // isLoggedInが書き換わったらアラートを出す

  const navigation = useNavigation<SecondScreenProp>();   // Typescriptでは型パラメータが必要

  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    <InputRadio />
    <button onClick={() => navigation.navigate('Second')}>Go to Second Screen</button>
    <p/>
    <CToggle isLoggedIn={isLoggedIn} toggleIsLoggedIn={toggleIsLoggedIn} />
    <p/>
    <NameInput />
    <InputSelectBox />
    <p/>
    <ListItems />
    </header>
    </div>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

// MAIN App
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
}

export default App;
