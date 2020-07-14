import React from "react";
import styled from "styled-components";
import Radio from './fields/Radio';
import CheckBox from './fields/CheckBox';
import TextArea from './fields/TextArea';
import Select from './fields/Select';
import Text from './fields/Text';

const FieldList = props => {

    const getField = (field, fieldType, index) => {
        switch(fieldType) {
            case "text":
                return (
                    <Text 
                        field={field} 
                        setElements={props.setElements} 
                        elements={props.elements}
                        index={index}
                    />
                )
            case "select":
                return (
                    <Select 
                        field={field} 
                        setElements={props.setElements} 
                        elements={props.elements}
                        index={index}
                    />
                )
            case "textarea":
                return (
                    <TextArea 
                        field={field} 
                        setElements={props.setElements} 
                        elements={props.elements}
                        index={index}
                    />
                )
            case "checkbox":
                return (
                    <CheckBox 
                        field={field} 
                        setElements={props.setElements} 
                        elements={props.elements}
                        index={index}
                    />
                )
            case "radio":
                return (
                    <Radio 
                        field={field} 
                        setElements={props.setElements} 
                        elements={props.elements}
                        index={index}
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
                    getField(element, element.type, i)
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

