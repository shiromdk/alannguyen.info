
import React, { Component } from "react"
import NavigationComponent from '../_components/general/NavigationComponent'

import { Avatar } from '@material-ui/core'
import { Instagram, LinkedIn, Facebook } from '@material-ui/icons';


class HomePageContainer extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="homepage">
                 <NavigationComponent />
                <div>
                <h1>Alan Nguyen</h1>
                <p>Full Stack Developer</p>
                <div classnName="social">
            
                    <a href="https://instagram.com/shiromdk" className="socialLink">
                    <Instagram
                    fontSize="large"
                        style={{ color: '#20416a'}}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/alan-nguyen-b42635a1/" className="socialLink">
                    <LinkedIn
                                     fontSize="large"
                        style={{ color: '#20416a'}}
                        />
                    </a>
                    <a href="https://www.facebook.com/alan.nguyen.3517" className="socialLink">
                    <Facebook
                                     fontSize="large"
                        style={{ color: '#20416a'}}
                        />
                    </a>
                </div>
                </div>
               
            </div>
        );
    }
}

export default HomePageContainer