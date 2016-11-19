var redux = require('redux');
var uuid = require('node-uuid');

console.log('Starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};

var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBIE':
      return [...state, {
        id: uuid(),
        hobby: action.hobby
      }];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => action.id !== hobby.id);
    default:
      return state;
  }
};

var moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
      return [...state, {
        id: uuid(),
        title: action.title,
        genre: action.genre
      }];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id);
    default:
      return state;
  }
};

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Jen'
});

store.dispatch({
  type: 'ADD_HOBBIE',
  hobby: 'Cycling'
});

store.dispatch({
  type: 'ADD_HOBBIE',
  hobby: 'Learning languages'
});

var hobbyId = store.getState().hobbies[1].id;
store.dispatch({
  type: 'REMOVE_HOBBY',
  id: hobbyId
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Forrest Gump',
  genre: 'Drama'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Alex'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Terminator 2: Judgment Day',
  genre: 'Action, Sci-Fi'
});

var movieId = store.getState().movies[0].id;
store.dispatch({
  type: 'REMOVE_MOVIE',
  id: movieId
});
