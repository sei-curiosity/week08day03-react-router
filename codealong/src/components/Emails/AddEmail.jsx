import React, { Component } from 'react';

class AddEmail extends Component {
  state = {
    email: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addEmail(this.state.email);
    this.setState({email: '' });
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          type="email" 
          pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
          name="email" 
          style={{ fontSize:"24px", flex: '10', padding: '5px' }}
          placeholder="Add Email ..." 
          autoComplete="off"
          value={this.state.email}
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

export default AddEmail
