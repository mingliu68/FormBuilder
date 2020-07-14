import React, { useState, useEffect } from 'react';
import Display from './display/Display';
import FieldMaker from './makers/FieldMaker';
import styled from 'styled-components';
import TitleMaker from './makers/TitleMaker';


const FormGenerator = () => {

    const [elements, setElements] = useState([])
    const [title, setTitle] = useState("Title")
    const [subtitle, setSubtitle] = useState("Subtitle")
    const [counter, setCounter] = useState(0)

    return (
        <Container>  
            <MakerWrapper>
                <TitleMaker 
                    title={title} 
                    setTitle={setTitle} 
                    subtitle={subtitle} 
                    setSubtitle={setSubtitle}
                />
                <FieldMaker 
                    setElements={setElements} 
                    elements={elements}    
                    counter={counter}
                    setCounter={setCounter}
                />
            </MakerWrapper>
            
            <Display 
                elements={elements} 
                title={title} 
                subtitle={subtitle}
            />
        </Container>
    );
}

export default FormGenerator;

const Container = styled.div`
    display: flex;
    height: 100vh;
`;

const MakerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    background: #f2f2f2;
`;