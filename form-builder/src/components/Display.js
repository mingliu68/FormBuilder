import React from "react";

const Display = props => {
    return (
        <form>
            {
                props.elements.map((element, i) => (
                    <div style={{"display": "block"}}>
                        <label for={"input_" + i} >
                            {element.label}
                        </label>
                        <input
                            type={element.type} 
                            id={"input" + i} 
                            name={"input" + i}
                        />
                    </div>
                ))
            }
        </form>
    )
}

export default Display;