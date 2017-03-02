import React from 'react';

var GreeterMessageForm = React.createClass({
  onFormSubmit: function(e){
    console.log("Submitted");
    console.log(this.props);
    e.preventDefault();
    var message = this.refs.message.value;
    if (message.length > 0) {
      this.refs.message.value = '';
      this.props.onNewMessage(message);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <textarea ref="message" placeholder="Enter a message" />
        <button>Set Name</button>
      </form>
    );
  }
});

module.exports = GreeterMessageForm;