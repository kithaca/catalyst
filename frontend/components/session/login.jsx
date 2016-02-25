var React = require('react');
var SessionStore = require('../../stores/sessionStore');
var ApiUtil = require('../../util/apiUtil');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var Login = React.createClass({
  mixins: [History, LinkedStateMixin],

  blankForm: {
    username: "",
    email: "",
    password: "",
  },

  getInitialState: function () {
    return (this.blankForm);
  },

  createUser: function functionName(event) {
    event.preventDefault();
    var user = {};
    var that = this;
    Object.keys(that.state).forEach(function (key) {
      user[key] = that.state[key];
    });
    ApiUtil.login(user, function () {
      that.history.pushState(null, "/", {});
    });
    that.setState(that.blankForm);
  },

  // componentDidMount: function () {
  //   this.newUserListener = SessionStore.addListener(this._userChange);
  //   this.setState({ show: true });
  // },
  //
  // _userChange: function () {
  //   this.setState({ show: false });
  // },
  //
  // componentWillUnmount: function () {
  //   this.newUserListener.remove();
  // },

  render: function () {
    return(
      <form className="new-user" onSubmit={this.createUser}>
        <div>
          <label>
            Username
            <input
              type="text"
              valueLink={this.linkState("username")}
              />
          </label>
        </div>

        <br />

        <div>
          <label>
            Password
            <input
              type="password"
              valueLink={this.linkState("password")}
              />
          </label>
        </div>


        <br></br>

        <button className="login-button">Create Account</button>

      </form>


    );
  }

});


module.exports = Login;