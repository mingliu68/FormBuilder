import React, { useState } from "react";
import styled from "styled-components";
import Field from "./Field";
import FieldList from "./FieldList";


const FieldMaker = props => {

    const addField = () => {
        props.setElements(props.elements.concat({
            "id" : props.counter, 
            "type": "text", 
            "label": "This is a Test Field", 
            "name":`test_field_${props.counter}`
        }))
        props.setCounter(props.counter + 1)
    }

    return (
        <Container>
            <FieldList elements={props.elements} setElements={props.setElements}/>
            <button 
                onClick = {addField} 
            >
                Add Text Field
            </button>
        </Container>
    )
}

export default FieldMaker;

const Container = styled.div`
    width: 100%;
    max-width: 350px;
    min-width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    padding: 10px;

`;

