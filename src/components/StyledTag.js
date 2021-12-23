import styled from "styled-components";
import { Button } from 'antd';

const StyledTag = (props) => {

    const Bold = props.bold === "true" ? "bold" : "";
    const Border = props.variants === "Default" ? "border:''" : "border:2px solid black";
    
    const StyledButton = styled( Button )`
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        color: green;
        font-weight:${Bold};
        ${Border}
    `;

    return (
        <div>
            <StyledButton type="danger">Themed</StyledButton>
        </div>
        
    )
}
export default StyledTag;