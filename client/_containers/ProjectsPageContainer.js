
import React, { Component } from "react"
import { fadeIn } from 'react-animations'

import styled, { keyframes } from 'styled-components';
import NavigationComponent from '../_components/general/NavigationComponent'

const fadeAnimation = keyframes`${fadeIn}`;
import Unity, { UnityContent } from "react-unity-webgl";

const FadeDiv = styled.div`
    animation: 1s ${fadeAnimation};
    `;

class ProjectsPageContainer extends Component {
    constructor(props) {
        super(props);

    }

 

    render(){
        return(
            <div className="homepage">
           
                <NavigationComponent />
                <h1>yep</h1>
               
            
            </div>
        );
    }
}

export default ProjectsPageContainer