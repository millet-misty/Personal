import React from 'react';
import logo from './logo.svg';
import './App.css';

// SECTION21: 条件分岐とキャプション書き換え
const LogOutButton = (props: { toggleIsLoggedIn: React.MouseEventHandler<HTMLButtonElement> | undefined; }) => {
  return <button onClick={props.toggleIsLoggedIn}>LOGOUT</button>;
};
const LogInButton = (props: { toggleIsLoggedIn: React.MouseEventHandler<HTMLButtonElement> | undefined; }) => {
  return <button onClick={props.toggleIsLoggedIn}>LOGIN</button>;
};

const LoginControl = () => {
  //
  const [isLoggedIn, setIsLoggedInState] = React.useState(false);

  const toggleIsLoggedIn = () => {
    setIsLoggedInState(!isLoggedIn);
  };

  if(isLoggedIn) {
    return <LogOutButton toggleIsLoggedIn={toggleIsLoggedIn} />;
  }
  return <LogInButton toggleIsLoggedIn={toggleIsLoggedIn} />;
};

// SECTION17: NameInputコンポーネント
//{
  const NameInput = () => {
      // stateの管理
      const [name, setName] = React.useState("○○");

      //
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

    return <ul>{items}</ul>;
}

// SECTION 24:セレクトボックス


// MAIN App
function App() {
  return (
    <div className="App">
      <LoginControl />
      <p/>
      <NameInput />
      <p/>
      <ListItems />
    </div>
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
