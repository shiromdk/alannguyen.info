
import React, { Component } from "react"
import { fadeIn } from 'react-animations'

import styled, { keyframes } from 'styled-components';
import NavigationComponent from '../_components/general/NavigationComponent'

const fadeAnimation = keyframes`${fadeIn}`;

const FadeDiv = styled.div`
    
    animation: 1s ${fadeAnimation};
    `;

class AboutPageContainer extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="homepage">
                 <NavigationComponent />
              <div>
               
                wewewe</div>
            </div>
        );
    }
}

export default AboutPageContainer