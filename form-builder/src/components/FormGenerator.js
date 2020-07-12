import React, { useState, useEffect } from 'react';
import Display from './Display';

const FormGenerator = () => {

    const [elements, setElements] = useState([])

    useEffect(() => {
        document.title = `${elements.length}`
    })

    return (
        <>  
            <button 
                onClick = {() => setElements(elements.concat({"type": "text", "label": "This is a Test Field"}))} 
            >
                Add Text Field
            </button>
            <Display elements={elements} />
        </>
    );
}

export default FormGenerator;
