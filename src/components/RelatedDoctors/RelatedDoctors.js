import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../../context/AppContext";
import {useNavigate} from "react-router-dom";
import {ImageContainer, RelatedCard, RelatedContainer, RelateDisplay} from "./relateddoctors.element";

const RelatedDoctors = ({speciality, docId}) => {
    const {doctors} = useContext(AppContext);
    const [relateDoc, setRelateDoc] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelateDoc(doctorsData)
        }
    }, [doctors, speciality, docId]);

    return (
        <RelatedContainer>
            <RelateDisplay>
                {relateDoc.slice(0, 4).map((item, index) => (

                    <RelatedCard onClick={() => {
                        navigate(`/appointment/${item._id}`);
                        window.scrollTo(0, 0)
                    }}
                                 key={index}
                    >
                        <ImageContainer>
                            <img className='img-custom' src={item.image} alt='img'/>

                        </ImageContainer>
                        <div className='info-custom'>

                            <p className='name-doc'>{item.name}</p>
                            <p className='speciality-doc'>{item.speciality}</p>
                        </div>
                    </RelatedCard>

                ))}
            </RelateDisplay>

        </RelatedContainer>
    );
};

export default RelatedDoctors;
