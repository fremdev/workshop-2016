var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var h = require('./helpers');

/*
  App
*/
var App = React.createClass({
  getInitialState: function() {
    return {
      fishes: {},
      order: {}
    }
  },
  addFish: function(fish) {
    var timestamp = (new Date()).getTime();
    // update the state object
    this.state.fishes['fish-' + timestamp] = fish;
    // set the state
    this.setState({fishes: this.state.fishes});
  },
  render: function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh seafood market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }

});

/*
  Add Fish Form
*/

var AddFishForm = React.createClass({
  createFish: function(event) {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Take the data from the form and create an object
    var fish = {
      name: this.refs.name.value,
      price: this.refs.price.value,
      status: this.refs.status.value,
      desc: this.refs.desc.value,
      image: this.refs.image.value,
    }

    // 3. Add the fish to the App State
    this.props.addFish(fish);
    this.refs.fishForm.reset();
  },
  render: function() {
    return (
      <form className="fish-edit" ref="fishForm" onSubmit={this.createFish}>
        <input type="text" ref="name" placeholder="Fish Name" />
        <input type="text" ref="price" placeholder="Fish Price" />
        <select ref="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" ref="desc" placeholder="Desc"></textarea>
        <input type="text" ref="image" placeholder="URL to Image" />
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
});

/*
  Header
*/

var Header = React.createClass({
  render: function() {
    return (
      <header className="top">
        <h1>Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day</h1>
        <h3 className="tagline"><span>{this.props.tagline}</span></h3>
      </header>
    )
  }
});

/*
  Order
*/

var Order = React.createClass({
  render: function() {
    return (
      <p>Order</p>
    )
  }
});

/*
  Inventory
*/

var Inventory = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish} />
      </div>
    )
  }
});

/*
  StorePicker
*/
var StorePicker = React.createClass({
  goToStore: function(event) {
    event.preventDefault();
    // get the data from the input
    var storeId = this.refs.storeId.value;
    ReactRouter.browserHistory.push('/store/' + storeId);
  },
  render: function() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store:</h2>
        <input type="text" ref="storeId" required defaultValue={h.getFunName()} />
        <input type="Submit" />
      </form>
    )
  }
});

/*
  Not Found
*/

var NotFound = React.createClass({
  render: function() {
    return <h1>Not Found!</h1>
  }
});

/*
  Routes
*/

var routes = (
  <Router history={ReactRouter.browserHistory}>
    <Route path="/" component={StorePicker} />
    <Route path="/store/:storeId" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
)

ReactDOM.render(routes, document.getElementById('main'));
