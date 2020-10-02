import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

    //Data from the server
    let dialogs = [
      { id: 1, name: 'Sasha' },
      { id: 2, name: 'Petya' },
      { id: 3, name: 'Pasha' },
      { id: 4, name: 'Artem' },
      { id: 5, name: 'Dima' },
  ]

  let messages = [
      { id: 1, message: 'Hi, how are you?' },
      { id: 2, message: 'Do you wanna go for a walk?' },
      { id: 3, message: 'You are stupid bitch' },
  ]

  let posts = [
    { id: 1, message: 'Hi, how are you?' },
    { id: 2, message: "I'm fine." },
    { id: 3, message: "I'm drinking coffee right now."  }
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
