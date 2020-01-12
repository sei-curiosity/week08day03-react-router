import React, { Component } from 'react';

class AddPerson extends Component {
  state = {
    name: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addPerson(this.state.name);
    this.setState({name: '' });
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          type="text" 
          name="name" 
          style={{ fontSize:"24px", flex: '10', padding: '5px' }}
          placeholder="Add Name ..." 
          autoComplete="off"
          value={this.state.name}
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Submit" 
          className="btn"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            fontSize: "16px",
            padding: "16px 32px",
            margin: "4px 2px",
            cursor: "pointer"
          }}
        />
      </form>
    )
  }
}

export default AddPerson
