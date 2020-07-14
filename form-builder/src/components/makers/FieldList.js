import React from "react";
import styled from "styled-components";

const FieldList = props => {
    return (
        <Container>
            {
                props.elements.map((element, i) => (
                    <FieldItem>
                        <ItemLabel>
                            {element.label}
                        </ItemLabel>
                        <ItemType>
                            {element.type}
                        </ItemType>
                        <Delete onClick = {() => props.setElements(props.elements.filter(parentElement => parentElement != element))}>X</Delete>
                    </FieldItem>
                ))
            }

        </Container>
    )
}

export default FieldList;

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
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