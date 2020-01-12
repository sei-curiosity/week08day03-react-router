import React, { Component } from 'react';

class WebsiteList extends Component {
  getStyle = () => {
    return {
      color: "white",
      background: 'black',
      padding: '10px',
      borderBottom: '1px #ccc dotted'
    }
  }

  render() {
    const { id, website } = this.props.website;
    return (
      <div style={this.getStyle()}>
        <p>
          { website }
          <button onClick={()=> this.props.delWebsite(id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}

const btnStyle = {
  backgroundColor: "#4CAF50",
  border: "none",
  color: "white",
  padding: '5px 9px',
  borderRadius: '100%',
  cursor: 'pointer',
  float: 'right'
}

export default WebsiteList
