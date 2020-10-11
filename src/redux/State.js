let store = {
  _state: {
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
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('State changed')
  },
  addPost() {
    debugger;
    const newPost = {
      id: 5,
      message: this._state.profilePage.newPostText
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updatePostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer; //Pattern 'observer'
  }
};

export default store;
window.store = store;