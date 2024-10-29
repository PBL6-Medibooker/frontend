import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {
    DocBookButton,
    DocHeader,
    DocInfoHeader,
    DocInfoLayout,
    DocInfoLeft,
    DocInfoRight,
    DocName,
    DocSD,
    DoctorEducation,
    DoctorInformation,
    DoctorInformationItem,
    DoctorIntroduce,
    DoctorRelate,
    DoctorWorkHistory,
    HeaderUnderline, RelatedDoctorItem,
    Underline
} from "./docinfo.element";
import {AppContext} from "../../context/AppContext";
import {assets} from "../../assets/assets_fe/assets";
import RelatedDoctors from "../../components/RelatedDoctors/RelatedDoctors";

const DocInfo = () => {
    const {docId} = useParams();
    const [docInfo, setDocInfo] = useState(null);
    const {doctors} = useContext(AppContext);
    const fetchData = async () => {
        const docInfo = doctors.find(doc => doc?._id === docId);
        setDocInfo(docInfo)
    }
    useEffect(() => {
        fetchData()
    }, [doctors, docId]);


    return docInfo && (
        <div>
            <DocInfoLayout>
                <DocInfoLeft>
                    <img className='image-background' src={docInfo.image} alt='pic'/>
                </DocInfoLeft>
                <DocInfoRight>
                    <DocName>
                        {docInfo.name}
                        <img className='w-5' src={assets.verified_icon} alt='icon'/>
                    </DocName>
                    <DocSD>
                        <p>{docInfo.degree} - {docInfo.speciality} </p>
                        <button className='doc-experience'>{docInfo.experience}</button>
                    </DocSD>
                    <DocBookButton>
                        Đặt lịch khám
                    </DocBookButton>


                </DocInfoRight>

            </DocInfoLayout>
            <DoctorInformation>

                <DoctorInformationItem>
                    <DocHeader>GIỚI THIỆU</DocHeader>
                    <Underline/>
                    <p>Bác sĩ CKI Võ Minh Tuấn có gần 14 năm kinh nghiệm công tác tại Khoa Cơ Xương Khớp tại Bệnh viện
                        Nhân Dân 115. Bác sĩ Khánh chuyên điều trị nhiều bệnh Cơ Xương Khớp ảnh hưởng đến xương, khớp,
                        dây chằng, gân và cơ; các bệnh xương khớp gây đau do lão hóa, vận động, sinh hoạt, thói quen lối
                        sống.</p>

                </DoctorInformationItem>
                <DoctorInformationItem>
                    <DocHeader>QUÁ TRÌNH CÔNG TÁC</DocHeader>
                    <Underline/>
                    <p>+ 2006 – 2019: Bác sĩ điều trị khoa Cơ Xương Khớp, Bệnh viện Nhân Dân 115 <br/>
                        + 2019 – 2021: Bác sĩ điều trị Phòng khám EXSON<br/>
                        + 2022 đên nay: Bác sĩ khoa Cơ Xương Khớp, Phòng khám Bệnh viện Đại học Y Dược 1</p>
                </DoctorInformationItem>
                <DoctorInformationItem>
                    <DocHeader>QUÁ TRÌNH HỌC TẬP</DocHeader>
                    <Underline/>
                    <p>+ 1999 – 2005: Học và tốt nghiệp Bác sĩ Đa khoa, Trường ĐH Y khoa Phạm Ngọc Thạch<br/>
                        + 2010 – 2012: Học CKI Nội Tổng quát, Trường Đại học Y Dược TP.HCM <br/>
                        + Khóa học Nội CXK 06 tháng tại Bệnh viện Chợ Rẫy.</p>
                </DoctorInformationItem>

            </DoctorInformation>

            <DoctorRelate>
                <DocInfoHeader>BÁC SĨ CÙNG CHUYÊN KHOA
                    <HeaderUnderline/>
                </DocInfoHeader>

                {/*{-----------LISTING RELATED DOCTORS-------------}*/}
                <RelatedDoctorItem>
                    <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
                </RelatedDoctorItem>

            </DoctorRelate>

        </div>
    );
};

export default DocInfo;
