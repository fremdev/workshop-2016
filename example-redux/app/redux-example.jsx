var redux = require('redux');
var uuid = require('node-uuid');

console.log('Starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBIE':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: uuid(),
            hobby: action.hobby
          }
        ]
      };
    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter((hobby) => {
          return action.id !== hobby.id;
        })
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: uuid(),
            title: action.title,
            genre: action.genre
          }
        ]
      };
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter((movie) => {
          return movie.id !== action.id;
        })
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
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
