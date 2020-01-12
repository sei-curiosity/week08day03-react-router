import React, { Component } from 'react';
import PersonList from './PersonList';

class PersonNames extends Component {
  render() {
    return this.props.names.map((name) => (
      <PersonList key={name.id} name={name} delName={this.props.delName} />
    ));
  }
}

export default PersonNames;