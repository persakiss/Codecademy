import React from "react";
import ReactDOM from "react-dom";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "swordfish",
      authorized: false,
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector('input[type="password"]').value;
    const auth = password === this.state.password;
    this.setState({
      authorized: auth,
    });
  }

  render() {
    let content = "";
    if (this.state.authorized) {
      content = "Contact";
    } else {
      content = "Enter password";
    }

    {
      /* By saving two JSX expressions as variables (contactInof, login), we’ve set yourself up nicely to toggle between them.*/
    }
    let login = (
      <form action="#" onSubmit={this.authorize}>
        <input type="password" placeholder="Password" />
        <input type="submit" />
      </form>
    );

    const contactInfo = (
      <ul>
        <li>client@example.com</li>
        <li>555.555.5555</li>
      </ul>
    );

    return (
      <div id="authorization">
        <h1>{content}</h1>
        {/* Ternary check if authorized; if so return contact, else return login */}
        {this.state.authorized ? contactInfo : login}
      </div>
    );
  }
}

export default Contact;
