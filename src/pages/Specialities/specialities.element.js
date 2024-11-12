import styled from "styled-components";
import {Container} from "../../globalStyles";

export const SpecialitiesLayout = styled.div`
    background: #F0F2F1;
    height: 1000px;

`
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
    padding-top: 20px;
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
    
    //::placeholder{
    //    text-indent: 35px;  // move placehoder
    //}

    input {
        height: 40px;
        width: 40%;
        color: black;
        border-radius: 15px;
        font-size: 15px;
        border: 2px solid #0B5E87;
        padding-left: 35px;
        box-sizing: border-box;
        background: #F0F2F1;
    }
    img {
        position: absolute;
        left: 31%;
        top:10px
    }
`

export const SpecialitiesContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 500px;
    gap: 80px; 
    justify-content: flex-start;
    cursor: pointer;

    .card-spec{
        width: 170px;
        height: 250px;
        display: flex;
        justify-content: center;
        border-radius: 100px 100px 0 0;
        background: linear-gradient(to bottom, #00A6A9 0%, #0B5E87 50%);
        transition: all 0.5s ease;

    }

    .card-spec:hover {
        transform: translateY(-10px);
    }
    .speciality-img{
        margin-top: 10px;
        width: 150px; 
        height: 150px; 
        border-radius: 50%; 
        object-fit: cover; 

    }
    .name-style{
        text-transform: uppercase;
        font-size: 12px;
        text-align: center;
        margin-top: 20px;
        color: white;
        cursor: pointer;
    }
    
`

export const SpecialitiesCard = styled.div`
    
`
export const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    height: 50px; 
    padding-top: 100px;
   
`;


export const PaginationButton = styled.button`
    padding: 0.25rem 0.5rem;
    border: 1px solid #0B5E87; 
    background-color: transparent;
    width: 90px;
    border-radius: 5px;
    text-transform: uppercase;


    &:disabled {
        opacity: 0.3;
    }
`;

export const PaginationInfo = styled.span`
    display: flex;
    align-items: center;
    gap: 0.25rem;
`;

export const PageInput = styled.input`
    border: 1px solid #D1D5DB;
    padding: 0.25rem;
    border-radius: 0.25rem;
    width: 4rem;
    background-color: transparent;
`;

export const PageSelect = styled.select`
    padding: 0.5rem;
    background-color: transparent;
`;

