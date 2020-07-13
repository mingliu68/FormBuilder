import React, { useState, useEffect } from 'react';
import Display from './Display';
import FieldMaker from './FieldMaker';
import styled from 'styled-components';


const FormGenerator = () => {

    const [elements, setElements] = useState([])
    const [title, setTitle] = useState("Title")
    const [subtitle, setSubtitle] = useState("Subtitle")

    return (
        <Container>  
            <FieldMaker 
                setElements={setElements} 
                elements={elements} 
                title={title} 
                setTitle={setTitle} 
                subtitle={subtitle} 
                setSubtitle={setSubtitle}
            />
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

