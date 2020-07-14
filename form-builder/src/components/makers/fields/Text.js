import React from "react";
import styled from "styled-components";

const Text = props => {

    const deleteField = ( field ) => {
        props.setElements(
            props.elements.filter( element => (
                    element != field
            ))
        )
    } 

    const updateElements = (e, index) => {
        let newFields = JSON.parse(JSON.stringify(props.elements));
        newFields[index].label = e.target.value
        props.setElements(newFields)
    }

    return(
        <Container>
            <FieldItem>
                    <ItemLabel 
                        name={props.field.name} 
                        id={props.field.name} 
                        placeholder={props.field.label} 
                        value={props.field.label}
                        onChange={ e => updateElements(e, props.index)}
                    />
                    <ItemType>
                        {(props.field.type).toUpperCase()}
                    </ItemType>
                    <Delete onClick = {() => deleteField(props.field)}>
                        X
                    </Delete>
                </FieldItem>
        </Container>
    )
}

export default Text;

const Container = styled.div`
    width: 100%;
`;

const FieldItem = styled.div`
    padding: 5px;
    margin: 5px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
`;

const Delete = styled.div`
    background: #666666;
    color: #ffffff;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`;

const ItemType = styled.div`
    background: #ffffff;
    width: 30%;
    padding: 5px;
    font-size: 13px;
`;

const ItemLabel = styled.input`
    width: 60%;
    background: #ffffff;
    padding: 5px;
    outline: none;
    border: none;
    margin-right: 5px;
    font-size: 14px;
`;