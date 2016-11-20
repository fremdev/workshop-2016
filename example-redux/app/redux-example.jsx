console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

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

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Emily'));

store.dispatch(actions.addHobby('Cycling'));

store.dispatch(actions.addHobby('Learning languages'));

var hobbyId = store.getState().hobbies[1].id;
store.dispatch(actions.removeHobby(hobbyId));

store.dispatch(actions.addMovie('Forrest Gump', 'Drama'));

store.dispatch(actions.changeName('Alex'));

store.dispatch(actions.addMovie('Terminator 2: Judgment Day', 'Action, Sci-Fi'));

var movieId = store.getState().movies[0].id;
store.dispatch(actions.removeMovie(movieId));
