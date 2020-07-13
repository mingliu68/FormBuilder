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
            {/* <button 
                onClick = {() => setElements(elements.concat({"type": "text", "label": "This is a Test Field"}))} 
            >
                Add Text Field
            </button> */}
            <FieldMaker 
                setElements={setElements} 
                elements={elements} 
                title={title} 
                setTitle={setTitle} 
                subtitle={subtitle} 
                setSubtitle={setSubtitle}
            />
            <Display elements={elements} />
        </Container>
    );
}

export default FormGenerator;

const Container = styled.div`
    display: flex;
    max-width: 1020px;
    height: 100vh;
`;

