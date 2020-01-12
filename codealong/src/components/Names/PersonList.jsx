import React, { Component } from 'react';

class PersonList extends Component {
  getStyle = () => {
    return {
      color: "white",
      background: 'black',
      padding: '10px',
      borderBottom: '1px #ccc dotted'
    }
  }

  render() {
    const { id, name } = this.props.name;
    return (
      <div style={this.getStyle()}>
        <p>
          { name }
          <button onClick={()=> this.props.delName(id)} style={btnStyle}>X</button>
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

export default PersonList
