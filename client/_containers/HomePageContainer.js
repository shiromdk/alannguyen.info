
import React, { Component } from "react"
import { fadeIn } from 'react-animations'

import styled, { keyframes } from 'styled-components';
import NavigationComponent from '../_components/general/NavigationComponent'

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
                <FadeDiv>
                <NavigationComponent />
                <h1>Alan Nguyen</h1>
                <p>Full Stack Developer</p>
                </FadeDiv>
            </div>
        );
    }
}

export default HomePageContainer