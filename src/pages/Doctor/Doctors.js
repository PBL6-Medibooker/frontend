import React, {useContext, useEffect, useState} from 'react';
import {DoctorsLayout, DoctorsLeft, DoctorsRight} from "./doctors.element";
import {useNavigate, useParams} from "react-router-dom";
import {AppContext} from "../../context/AppContext";

const Doctors = () => {
    const {speciality} = useParams();
    const [filterDoc, setFilterDoc] = useState([]);
    const navigate = useNavigate();
    const [showFilter, setShowFilter] = useState(false);


    const {doctors} = useContext(AppContext)
    const applyFilter = () =>{
        if(speciality){
            setFilterDoc(doctors.filter(doctor => doctor.speciality === speciality))
        } else {
            setFilterDoc(doctors)
        }
    }
    useEffect(() => {
        applyFilter()
    }, [doctors, speciality]);
    return (
        <div>
            <DoctorsLayout>
                <DoctorsLeft>
                    <p onClick={()=> speciality === 'General physician' ? navigate('/doctors'): navigate('/doctors/General physician')} className={`speciality-button ${speciality === "General physician" ? "selected" : ""}`}>General physician</p>
                    <p  onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors'): navigate('/doctors/Gynecologist')} className={`speciality-button ${speciality === "Gynecologist" ? "selected" : ""}`}>Gynecologist</p>
                    <p  onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors'): navigate('/doctors/Dermatologist')} className={`speciality-button ${speciality === "Dermatologist" ? "selected" : ""}`}>Dermatologist</p>
                    <p  onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors'): navigate('/doctors/Pediatricians')} className={`speciality-button ${speciality === "Pediatricians" ? "selected" : ""}`}>Pediatricians</p>
                    <p  onClick={()=> speciality === 'Neurologist' ? navigate('/doctors'): navigate('/doctors/Neurologist')} className={`speciality-button ${speciality === "Neurologist" ? "selected" : ""}`}>Neurologist</p>
                    <p  onClick={()=> speciality === 'Gastroenterologist' ? navigate('/doctors'): navigate('/doctors/Gastroenterologist')} className={`speciality-button ${speciality === "Gastroenterologist" ? "selected" : ""}`}>Gastroenterologist</p>
                </DoctorsLeft>

                <DoctorsRight>
                    {
                        filterDoc.map((item, index) => (
                            <div onClick={() => navigate(`/appointment/${item._id}`)}
                                 className='card' key={index}>
                                <img className='image-background' src={item.image} alt='img'/>
                                <div className='content'>
                                    <div className='status'>
                                        <p className='dot'></p> <p>Available</p>
                                    </div>
                                    <p className='name-style'>{item.name}</p>
                                    <p className='speciality-style'>{item.speciality}</p>
                                </div>
                            </div>
                        ))
                    }

                </DoctorsRight>

            </DoctorsLayout>
        </div>

    );
};

export default Doctors;
