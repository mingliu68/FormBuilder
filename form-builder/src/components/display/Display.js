import React from "react";
import styled from "styled-components"

const Display = props => {
    return (
        <Container>
            <FormTitle>
                <h2>{props.title}</h2>
                <h4>{props.subtitle}</h4>
            </FormTitle>
            <Form>
                {
                    props.elements.map((element, i) => (
                        <FormItem>
                            <Label 
                                for={element.name} 
                            >
                                {element.label}
                            </Label>
                            <Input
                                type={element.type} 
                                id={element.name} 
                                name={element.name}
                            />
                        </FormItem>
                    ))
                }
            </Form>
        </Container>
    )
}

export default Display;

const Form = styled.form`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    border: 1px solid #ccc;
    background: #eee;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    padding:20px 30px;
    flex-wrap: wrap;
    min-width: 500px;
    
`;

const FormItem = styled.div`
    width: 80%;
    padding: 10px;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    border: none;
    padding: 5px;
    font-size:16px;
    color: #666;
    outline: none;
`;

const Label = styled.label`
    font-size: 14px;
    color: #999;
`;

const Container = styled.div`
    width: 100%;
    padding: 20px;
    height: 100%;
    display: flex;
    justify-content: flex-tart;
    align-items: flex-start;
    background: #999999;
    overflow-y: auto;
    flex-direction: column;
`;

const FormTitle = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;