import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 20px;
    grid-column-gap: 2px;
    grid-row-gap: 2px;
`
    
export const GridItem = styled.div`
    background-color: rgba(255, 239, 254, 0.8);
    border: 1px solid rgba(148, 187, 233, 0.9);
    padding: 20px;
    font-size: 30px;
    text-align: center;
`