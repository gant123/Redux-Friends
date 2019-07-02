import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addFriend } from '../actions';

class AddFriendForm extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addFriend = e => {
    e.preventDefault();
    this.props.addFriend(this.state);
    this.setState({
      name: '',
      age: '',
      email: ''
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div
          className="jumbotron jumbotron-fluid"
          style={{ backgroundColor: 'black', color: 'white' }}
        >
          <h1>Friends</h1>
        </div>
        <form
          style={{ width: '600px', margin: '40px auto' }}
          onSubmit={this.addFriend}
          className="form-group"
        >
          <input
            style={{ margin: '20px' }}
            placeholder="Name"
            className="form-control form-control-sm"
            name="name"
            onChange={this.handleChanges}
            value={this.state.name}
            type="text"
          />
          <input
            style={{ margin: '20px' }}
            placeholder="Age"
            className="form-control form-control-sm"
            name="age"
            onChange={this.handleChanges}
            value={this.state.age}
            type="text"
          />
          <input
            style={{ margin: '20px' }}
            placeholder="Email"
            className="form-control form-control-sm"
            name="email"
            onChange={this.handleChanges}
            value={this.state.email}
            type="text"
          />
          <button className="btn btn-dark">Add Friend</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(
  mapStateToProps,
  { addFriend }
)(AddFriendForm);
