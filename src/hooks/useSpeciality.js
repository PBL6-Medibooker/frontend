import { useState, useEffect } from 'react';
import Speciality_API from '../API/Speciality_API';

const useSpeciality = () => {
    const [specialityHook, setSpecialityHook] = useState([]);
    const [specialityLoading, isSpecialityLoading] = useState(false);

    const filterSpeciality = async () => {
        isSpecialityLoading(true);
        try {
            const allSpecialities = await Speciality_API.get_All_Speciality();
            const sortedSpecialities = allSpecialities.sort((a, b) => a.name.localeCompare(b.name));
            setSpecialityHook(sortedSpecialities);
        } catch (error) {
            console.error('Failed to fetch specialities:', error);
        } finally {
            isSpecialityLoading(false);
        }
    };

    useEffect(() => {
        filterSpeciality();
    }, []);

    return [specialityLoading, specialityHook];
};

export default useSpeciality;
