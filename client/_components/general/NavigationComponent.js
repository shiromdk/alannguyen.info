import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  constructor(props){
    super(props)
    this.toggleClass = this.toggleClass.bind(this)
    this.state = {
      is_active: false
    }
  }

  toggleClass(){
    this.setState({ is_active: !this.state.is_active})
  }
  render() {
    return (
      <nav>
        <input type="checkbox" id="nav-checkbox" />
        <label className="nav-label" htmlFor="nav-checkbox">
          <div 
          className={this.state.is_active ? 'hamburger hm is-active': 'hamburger hm'} 
          onClick={this.toggleClass}
          id="hamburger">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
          <ul className="nav-menu first">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            {/* <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
            */}
            <li>
              <Link to="/projects">Projects</Link>
            </li> 
            <li>
              <Link to="/">Contact </Link>
            </li>
          </ul>
        </label>
      </nav>
    );
  }
}
