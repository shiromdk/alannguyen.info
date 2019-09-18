
import React, { Component } from "react"
import { fadeIn } from 'react-animations'

import styled, { keyframes } from 'styled-components';


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
               <h1>Hello</h1>
                <p>world</p>
                </FadeDiv>
            </div>
        );
    }
}

export default HomePageContainer