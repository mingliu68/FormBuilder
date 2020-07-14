import React from "react";
import styled from "styled-components";
import Radio from './fields/Radio';
import CheckBox from './fields/CheckBox';
import TextArea from './fields/TextArea';
import Select from './fields/Select';
import Text from './fields/Text';

const FieldList = props => {

    const getField = (field, fieldType) => {
        switch(fieldType) {
            case "text":
                return (
                    <Text 
                        field={field} 
                        setElements={props.setElements} 
                        elements={props.elements}
                    />
                )
            case "select":
                return (
                    <Select 
                        field={field} 
                        setElements={props.setElements} 
                        elements={props.elements}
                    />
                )
            case "textarea":
                return (
                    <TextArea 
                        field={field} 
                        setElements={props.setElements} 
                        elements={props.elements}
                    />
                )
            case "checkbox":
                return (
                    <CheckBox 
                        field={field} 
                        setElements={props.setElements} 
                        elements={props.elements}
                    />
                )
            case "radio":
                return (
                    <Radio 
                        field={field} 
                        setElements={props.setElements} 
                        elements={props.elements}
                     />
                )
            default:
                return null;
        }
    }

    return (
        <Container>
            {
                props.elements.map((element, i) => (
                    getField(element, element.type)
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

