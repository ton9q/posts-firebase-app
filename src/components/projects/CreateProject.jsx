import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { createProject } from '../../store/actions/projectActions';

class CreateProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push('/');
  }

  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to='/signin' />;

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create new project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateProject);
