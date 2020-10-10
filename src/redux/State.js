let rerenderEntireTree = () => {
  console.log('State changed')
};

//Data from the server
let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?' },
      { id: 2, message: "I'm fine." },
      { id: 3, message: "I'm drinking coffee right now." }
    ],
    newPostText: ''
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Sasha' },
      { id: 2, name: 'Petya' },
      { id: 3, name: 'Pasha' },
      { id: 4, name: 'Artem' },
      { id: 5, name: 'Dima' },
    ],
    messages: [
      { id: 1, message: 'Hi, how are you?' },
      { id: 2, message: 'Do you wanna go for a walk?' },
      { id: 3, message: 'You are stupid bitch' },
    ],
  }
};

export const addPost = () => {
  debugger;
  const newPost = {
    id: 5,
    message: state.profilePage.newPostText
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const updatePostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer; //Pattern 'observer'
}

export default state;