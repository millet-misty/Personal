import React from 'react';
import { MouseEventHandler } from "react";

// SECTION21: 条件分岐とキャプション書き換え
const LogOutButton = (props: { toggleIsLoggedIn: MouseEventHandler<HTMLButtonElement> | undefined }) => {
    return <button onClick={props.toggleIsLoggedIn}>LOGOUT</button>;
  };
const LogInButton = (props: { toggleIsLoggedIn: MouseEventHandler<HTMLButtonElement> | undefined }) => {
    return <button onClick={props.toggleIsLoggedIn}>LOGIN</button>;
  };

// JavaScriptとは書き方が違うところ
// export const CToggle = ({isLoggedIn, toggleIsLoggedIn}) => {}
export const CToggle = (props: { isLoggedIn: boolean; toggleIsLoggedIn: MouseEventHandler<HTMLButtonElement> | undefined; }) => {
    
    if(props.isLoggedIn) {
        return <LogOutButton toggleIsLoggedIn={props.toggleIsLoggedIn} />;
    } else {
        return <LogInButton toggleIsLoggedIn={props.toggleIsLoggedIn} />;
    }
}