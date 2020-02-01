
import React, { Component } from "react"
import { fadeIn } from 'react-animations'

import styled, { keyframes } from 'styled-components';
import NavigationComponent from '../_components/general/NavigationComponent'

import { Avatar } from '@material-ui/core'
import { Instagram, LinkedIn, Facebook } from '@material-ui/icons';
const fadeAnimation = keyframes`${fadeIn}`;

const FadeDiv = styled.div`
    
    animation: 1s ${fadeAnimation};
    `;

class HomePageContainer extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="homepage">
                 <NavigationComponent />
                <FadeDiv>
               
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
                </FadeDiv>
            </div>
        );
    }
}

export default HomePageContainer