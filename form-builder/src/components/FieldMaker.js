import React, { useState } from "react";
import styled from "styled-components";
import Field from "./Field";
import FieldList from "./FieldList";


const FieldMaker = props => {

    return (
        <Container>
            <TitleWrapper>
                <TitleLabel for="title">
                    Form Title
                </TitleLabel>
                <TitleInput 
                    type="text" 
                    name="title" 
                    id="title" 
                    placeholder={props.title}
                    value={props.title} 
                    onChange={ e => props.setTitle(e.target.value) }
                />
                <TitleLabel for="subtitle">
                    Subtitle
                </TitleLabel>
                <TitleInput 
                    type="text" 
                    name="subtitle" 
                    id="subtitle" 
                    placeholder={props.subtitle}
                    value={props.subtitle} 
                    onChange={ e => props.setSubtitle(e.target.value) }
                />
            </TitleWrapper>
            <br />
            <FieldList />
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
    float:left;
    width: 30%;
    max-width: 350px;
    min-width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #f2f2f2;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.15);`;

const TitleLabel = styled.label`
    width: 30%;
    text-align: right;
    font-size: 13px;
    font-weight: 700;
    padding-right: 8px;
    color: #666666;
    box-sizing: border-box;
`;

const TitleInput = styled.input`
    width: 70%;
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 5px;
    margin: 5px 0;
    font-size: 14px;
    color: #666666;
    box-sizing: border-box;
    background: #ffffff;    
 

`;