import React, { Component } from 'react';

class AddWebsite extends Component {
  state = {
    website: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addWebsite(this.state.website);
    this.setState({website: '' });
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          type="text" 
          name="website" 
          style={{ fontSize:"24px", flex: '10', padding: '5px' }}
          pattern="(:?(?:https?:\/\/)?(?:www\.)?)?[-a-z0-9]+\.(?:com|gov|org|net|edu|biz)"
          placeholder="Add Website ..." 
          autoComplete="off"
          value={this.state.website}
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

export default AddWebsite
