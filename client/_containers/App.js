import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../_helpers";
// Import Containers
import HomePageContainer from "../_containers/HomePageContainer";

import { Container } from '@material-ui/core'
// Import Components

class App extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
          
            <Route exact path="/" component={HomePageContainer} />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { alert } = state;
  return { alert };
};


const connectedApp = connect(
  mapStateToProps
)(App);

export { connectedApp as App };
