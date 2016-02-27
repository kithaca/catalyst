var React = require('react');
var History = require('react-router').History;
var Link = require('react-router').Link;
var Login = require('../session/login');
var LoginModal = require('../session/loginModal');

var Navbar = React.createClass({

  mixins: [History],

  render: function () {
    var showLogin = "hidden";
    if (this.props.showLogin()) {
      showLogin = "session-form";
    }

    var logInOrOut;
    var signUp;
    var loggedIn = false;
    var profile;
    if (this.props.loggedIn()) {
      logInOrOut = <div onClick={this.props.logOut}>Log Out</div>;
      loggedIn = true;
      profile = <Link to="profile">Profile</Link>;
    } else {
      logInOrOut = <LoginModal
                   toggleLogin={this.props.toggleLogin}/>;
      signUp = <Link to="signup">Create Account</Link>;
    }

    var displayProfile = loggedIn ? true : false;
    var displaySignUp = loggedIn ? false : true;
    return(
      <div className="header group">
        <ul className="nav">
          <Link to="/" className="nav-item" id="logo">
            Catalyst
          </Link>

          <Link to="categories" className="nav-item">
            Categories
          </Link>

          {displaySignUp ? <li className="nav-item auth">{signUp}</li> : <p></p>}
          {displayProfile ? <li className="nav-item auth" id="profile">{profile}</li> : <p></p>}

          <li className="nav-item auth">{logInOrOut}</li>
        </ul>
      </div>
    );
  }

});

module.exports = Navbar;
