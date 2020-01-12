import React, { Component } from 'react';
import WebsiteList from './WebsiteList';

class PersonWebsites extends Component {
  render() {
    return this.props.websites.map((website) => (
      <WebsiteList key={website.id} website={website} delWebsite={this.props.delWebsite} />
    ));
  }
}

export default PersonWebsites;