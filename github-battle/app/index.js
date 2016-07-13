var USER_DATA = {
  name: 'Alex Efremov',
  username: 'fremdev',
  image: 'https://pbs.twimg.com/profile_images/679783132627890176/HQ2Bmct4.jpg'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
  render: function() {
    return (
      <img src={this.props.image} style={{height: 100, width: 100}} />
    )
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <div>{this.props.name}</div>
    )
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <a href={"https://twitter.com/" + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic image={this.props.user.image}/>
        <ProfileLink username={this.props.user.username}/>
        <ProfileName name={this.props.user.name}/>
      </div>
    )
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA}/>,
  document.getElementById('app')
);
