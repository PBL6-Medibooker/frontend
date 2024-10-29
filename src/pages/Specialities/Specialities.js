import React from 'react';
import {HeaderUnderline, SearchBar, SpecialitiesContainer, SpecialitiesHeader} from "./specialities.element";
import {assets} from "../../assets/assets_fe/assets";

const Specialities = () => {
    return (
        <div>
            <SpecialitiesContainer>
                <SpecialitiesHeader>DANH SÁCH CHUYÊN KHOA
                    <HeaderUnderline/>
                </SpecialitiesHeader>
                <SearchBar>
                    <img src={assets.search_icon} alt='icon' />
                    <input type='text' placeholder='Tìm kiếm chuyên khoa'/>
                </SearchBar>
            </SpecialitiesContainer>
        </div>
    );
};

export default Specialities;
