import React from 'react';
import styled from 'styled-components';

const TitleMaker = props => {
    return (
        <Container>
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
        </Container>
    )

}

export default TitleMaker;


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 10px;
    background: #cccccc;
`;

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