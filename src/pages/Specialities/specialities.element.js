import styled from "styled-components";
import {Container} from "../../globalStyles";

export const SpecialitiesContainer = styled(Container)`
    display: flex;
    margin-bottom: 30px;
    flex-direction: column;
    gap: 50px;
    ${Container}
`
export const SpecialitiesHeader = styled.p`
    font-size: 25px;
    color: #2197E3;
    text-align: center;
    margin: 0 auto;
`
export const HeaderUnderline = styled.div`
    border-top: 4px solid #5D5D5D;
    width: 100%;
    margin-top: 5px;
`
export const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    ::placeholder{
        color: green;
        text-indent: 35px;  
    }

    input {
        height: 40px;
        width: 40%;
        color: black;
        border-radius: 15px;
        font-size: 15px;
        border: 1px solid;
    
    }

    img {
        position: absolute;
        left: 31%;
        top:10px
    }
`
