import React, {useContext, useEffect, useState} from 'react';
import {
    HeaderUnderline, PageInput, PageSelect, PaginationButton, PaginationContainer, PaginationInfo,
    SearchBar,
    SpecialitiesContainer,
    SpecialitiesContent,
    SpecialitiesHeader,
    SpecialitiesLayout
} from "./specialities.element";
import {assets} from "../../assets/assets_fe/assets";
import {AppContext} from "../../context/AppContext";
import {useNavigate, useParams} from "react-router-dom";
import {
    getPaginationRowModel,
    useReactTable
} from "@tanstack/react-table";

const Specialities = () => {
    const navigate = useNavigate();
    const {speciality} = useParams();
    const {specialityData} = useContext(AppContext);
    const [filterSpec, setFilterSpec] = useState([]);

    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    });

    const applyFilter = () => {
        if (speciality) {
            setFilterSpec(specialityData.filter(doctor => doctor.speciality === speciality));
        } else {
            setFilterSpec(specialityData);
        }
    };

    useEffect(() => {
        applyFilter();
    }, [specialityData, speciality]);

    const table = useReactTable({
        data: filterSpec,
        state: {
            pagination,
        },
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
    });

    const paginatedData = filterSpec.slice(
        pagination.pageIndex * pagination.pageSize,
        (pagination.pageIndex + 1) * pagination.pageSize
    );

    return (
        <SpecialitiesLayout>
            <SpecialitiesContainer>
                <SpecialitiesHeader>DANH SÁCH CHUYÊN KHOA
                    <HeaderUnderline/>
                </SpecialitiesHeader>
                <SearchBar>
                    <img src={assets.search_icon} alt='icon'/>
                    <input type='text' placeholder='Tìm kiếm chuyên khoa'/>
                </SearchBar>

                <SpecialitiesContent >
                    {
                        paginatedData.map((item, index) => (
                            <div onClick={() => navigate(`/specialities/${item._id}`)} className='card-spec' key={index}>
                                <div className='content'>
                                    <img className='speciality-img' src={item.image} alt={item.speciality}/>
                                    <p className='name-style'>{item.speciality}</p>
                                </div>
                            </div>
                        ))
                    }
                </SpecialitiesContent>

                <PaginationContainer>
                    <PaginationButton
                        onClick={() => setPagination(prev => ({
                            ...prev,
                            pageIndex: Math.max(prev.pageIndex - 1, 0)}))}
                        disabled={pagination.pageIndex === 0}
                    >
                        Previous
                    </PaginationButton>
                    <PaginationInfo>
                        Page <strong>{pagination.pageIndex + 1} of {Math.ceil(filterSpec.length / pagination.pageSize)}</strong>
                    </PaginationInfo>
                    <PaginationButton
                        onClick={() => setPagination(prev => ({
                            ...prev,
                            pageIndex: Math.min(prev.pageIndex + 1, Math.ceil(filterSpec.length / pagination.pageSize) - 1)
                        }))}
                        disabled={(pagination.pageIndex + 1) * pagination.pageSize >= filterSpec.length}
                    >
                        Next
                    </PaginationButton>
                    <PaginationInfo>
                        Go to page:
                        <PageInput
                            type="number"
                            defaultValue={table.getState().pagination.pageIndex + 1}
                            onChange={(e) => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                table.setPageIndex(page);
                            }}
                        />
                    </PaginationInfo>
                    {/*/!* Page Size Selector *!/*/}
                    {/*<PageSelect*/}
                    {/*    value={pagination.pageSize}*/}
                    {/*    onChange={(e) => setPagination(prev => ({*/}
                    {/*        ...prev,*/}
                    {/*        pageSize: Number(e.target.value),*/}
                    {/*        pageIndex: 0*/}
                    {/*    }))}*/}
                    {/*>*/}
                    {/*    {[5, 10, 15, 20].map(size => (*/}
                    {/*        <option key={size} value={size}>*/}
                    {/*            Show {size}*/}
                    {/*        </option>*/}
                    {/*    ))}*/}
                    {/*</PageSelect>*/}


                </PaginationContainer>
            </SpecialitiesContainer>
        </SpecialitiesLayout>
    );
};

export default Specialities;
