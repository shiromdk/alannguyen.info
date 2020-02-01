import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../_helpers";
// Import Containers
import HomePageContainer from "../_containers/HomePageContainer";

import { Container } from '@material-ui/core'
import ProjectsPageContainer from "./ProjectsPageContainer";
import AboutPageContainer from './AboutPageContainer';
// Import Components

class App extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        
        <Router history={history}>

         <div className="routeWrapper">
            <Route exact path="/" component={HomePageContainer} />
            <Route exact path="/about" component={AboutPageContainer} />
            <Route exact path="/projects" component={ProjectsPageContainer} />
            </div>
        </Router>

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
