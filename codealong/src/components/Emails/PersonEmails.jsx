import React, { Component } from 'react';
import PersonList from './EmailList';

class PersonNames extends Component {
  render() {
    return this.props.emails.map((email) => (
      <PersonList key={email.id} email={email} delEmail={this.props.delEmail} />
    ));
  }
}

export default PersonNames;