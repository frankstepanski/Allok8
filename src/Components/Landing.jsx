/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// We will be doing fetches so we will need thunks
import thunks from '../Middleware/thunkMiddleware';


const mapStateToProps = (store) => ({
  page: store.state.page,
  api: store.state.api,
  token: store.state.token,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(thunks.getData(document.getElementById('apiInput').value, document.getElementById('tokenInput').value)),
});


class Landing extends Component {
  render() {
    return (
      <div id="landingContainer">
        <h1>Allok8</h1>
        <hr />
        <input id="apiInput" placeholder="Api" type="text" defaultValue={this.props.api} />
        <br />
        <input id="tokenInput" placeholder="Token" type="text" defaultValue={this.props.token} />
        <br />
        <button type="button" onClick={() => this.props.getData()}>=></button>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Landing);