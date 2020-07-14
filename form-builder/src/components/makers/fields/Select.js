import React from "react";
import styled from "styled-components";

const Select = props => {

    const deleteField = ( field ) => {
        props.setElements(
            props.elements.filter( element => (
                    element != field
            ))
        )
    } 

    return(
        <Container>
            <FieldItem>
                <ItemLabel>
                    {props.field.label}
                </ItemLabel>
                <ItemType>
                    {props.field.type}
                </ItemType>
                <Delete onClick = {() => deleteField(props.field)}>
                    X
                </Delete>
            </FieldItem>    
        </Container>
    )
}

export default Select;

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
`;

const ItemLabel = styled.div`
    width: 60%;
    background: #ffffff;
    padding: 5px;
`;