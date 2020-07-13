import React, { useState } from "react";
import styled from "styled-components";
import Field from "./Field";



const FieldMaker = props => {

    return (
        <Container>
            <label for="title">
                Form Title
            </label>
            <input 
                type="text" 
                name="title" 
                id="title" 
                placeholder={props.title}
                value={props.title} 
                onChange={ e => props.setTitle(e.target.value) }
            />
            <label for="subtitle">
                Subtitle
            </label>
            <input 
                type="text" 
                name="subtitle" 
                id="subtitle" 
                placeholder={props.subtitle}
                value={props.subtitle} 
                onChange={ e => props.setSubtitle(e.target.value) }
            />
            <button 
                onClick = {() => props.setElements(props.elements.concat({"type": "text", "label": "This is a Test Field"}))} 
            >
                Add Text Field
            </button>
        </Container>
    )
}

export default FieldMaker;

const Container = styled.div`
    width: 30%;
    height: 100%;
    background: #999;
    display: flex;
    flex-direction: column;
`;