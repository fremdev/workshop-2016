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

var Link = React.createClass({
  changeURL: function() {
    window.location.replace(this.props.href)
  },
  render: function() {
    return (
      <span
        style={{color: 'blue', cursor: 'pointer'}}
        onClick={this.changeURL}
        >
        {this.props.children}
      </span>
    )
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <Link href={"https://twitter.com/" + this.props.username}>
          {this.props.username}
        </Link>
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
