import React from "react";
import styled from "styled-components"

const Display = props => {
    return (
        <Container>
            <Form>
                {
                    props.elements.map((element, i) => (
                        <FormItem>
                            <Label for={"input_" + i} >
                                {element.label}
                            </Label>
                            <Input
                                type={element.type} 
                                id={"input" + i} 
                                name={"input" + i}
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
    border: 1px solid #999;
    background: #eee;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    padding:20px 30px;
    flex-wrap: wrap;
    
`;

const FormItem = styled.div`
    width: 80%;
    padding: 10px;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    min-width: 500px;
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
    width: 70%;
    padding: 20px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: #eee;
    overflow-y: scroll;

`;