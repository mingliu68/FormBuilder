import React, { useState } from "react";
import styled from "styled-components";
// import Field from "./Field";
import FieldList from "./FieldList";


const FieldMaker = props => {

    const addField = fieldType => {
        props.setElements(
            props.elements.concat(
                {
                    "id" : props.counter, 
                    "type": fieldType, 
                    "label": `Test Field_${fieldType}`, 
                    "name":`test_field_${props.counter}`
                }
            )
        )
        props.setCounter(props.counter + 1)
    }

    return (
        <Container>
            <FieldList 
                elements={props.elements} 
                setElements={props.setElements}
            />
            <ButtonWrapper>
                <NewFieldButton onClick={() => addField('text')}>Text Box</NewFieldButton>
                <NewFieldButton onClick={() => addField('select')}>Select Box</NewFieldButton>
                <NewFieldButton>Radio Box</NewFieldButton>
                <NewFieldButton>Text Area Box</NewFieldButton>
                <NewFieldButton>Check Box</NewFieldButton>
            </ButtonWrapper>
            {/* <button onClick = {() => addField("text")} >
                Add Text Field
            </button>
            <button onClick = {() => addField("select")} >
                Add Select Field
            </button>
             */}
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

const NewFieldButton = styled.button`
    border: 1px solid #999999;
    background: #f2f2f2;
    padding: 10px 15px;
    font-size: 16px;
    margin: 3px;
    outline: none;
    &:hover {
        background: darkseagreen
    }
    &:active {
        background: cadetblue
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`;
