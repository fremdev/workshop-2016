var redux = require('redux');
var uuid = require('node-uuid');
var axios = require('axios');

console.log('Starting redux example');

// Name reducer and action generators
// -------------------
var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};

var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  };
};

//  Hobbies reducer and action generators
// -------------------
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
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

var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  };
};

var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  };
};

// Movies reducer and action generators
// -------------------
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

var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  };
};

var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  };
};

// Map reducer and action generators
// -------------------

var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch(action.type) {
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      };
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      };
    default:
      return state;
  }
};

var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  };
};

var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  };
};

var fetchLocation = () => {
  store.dispatch(startLocationFetch());

  axios.get('http://ipinfo.io').then((res) => {
    var loc = res.data.loc;
    var baseUrl = 'http://maps.google.com?q=';

    store.dispatch(completeLocationFetch(baseUrl + loc));
  });
};

// Combine reducers and create store
// -------------------

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer,
  map: mapReducer
});

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if(state.map.url) {
    document.getElementById('app').innerHTML = `<a href="${state.map.url}" target="_blank">View your location</a>`;
  }
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

fetchLocation();

store.dispatch(changeName('Emily'));

store.dispatch(addHobby('Cycling'));

store.dispatch(addHobby('Learning languages'));

var hobbyId = store.getState().hobbies[1].id;
store.dispatch(removeHobby(hobbyId));

store.dispatch(addMovie('Forrest Gump', 'Drama'));

store.dispatch(changeName('Alex'));

store.dispatch(addMovie('Terminator 2: Judgment Day', 'Action, Sci-Fi'));

var movieId = store.getState().movies[0].id;
store.dispatch(removeMovie(movieId));
