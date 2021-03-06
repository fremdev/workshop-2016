/*
  StorePicker
*/

import React from 'react';
import { browserHistory } from 'react-router';
import h from '../helpers';

var StorePicker = React.createClass({
  goToStore: function(event) {
    event.preventDefault();
    // get the data from the input
    var storeId = this.refs.storeId.value;
    browserHistory.push('/store/' + storeId);
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

export default StorePicker;
