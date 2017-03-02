import React from 'react';
import GreeterMessage from 'GreeterMessage';
import GreeterForm from 'GreeterForm';
import GreeterMessageForm from 'GreeterMessageForm';

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'Default message!'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewName: function (name) {
    this.setState({
      name: name
    });
  },
  handleNewMessage: function(message) {
    this.setState({ 
      message: message
    });
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName} />
        <GreeterMessageForm onNewMessage={this.handleNewMessage} />
      </div>
    );
  }
});

module.exports = Greeter;