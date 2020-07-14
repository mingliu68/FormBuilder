import React from "react";
import styled from "styled-components";
import Radio from './fields/Radio';
import CheckBox from './fields/CheckBox';
import TextArea from './fields/TextArea';
import Select from './fields/Select';
import Text from './fields/Text';



const Field = props => {
    
    const getField = (field, fieldType) => {
        switch(fieldType) {
            case "text":
                return <Text field={field} setElements={props.setElements} elements={props.elements}/>
                break;
            case "select":
                return <Select field={field} setElements={props.setElements} elements={props.elements}/>
                break;
            case "textarea":
                return <TextArea field={field} setElements={props.setElements} elements={props.elements}/>
                break;
            case "checkbox":
                return <CheckBox field={field} setElements={props.setElements} elements={props.elements}/>
                break;
            case "radio":
                return <Radio field={field} setElements={props.setElements} elements={props.elements}/>
                break;
            default:
                return null;
        }
    }
    
    return(
        <Container>
            {getField(props.element, props.type)}
        </Container>
    )
}

export default Field;

const Container = styled.div``;