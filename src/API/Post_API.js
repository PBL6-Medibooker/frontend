import client from '../utils/client';

const get_All_Posts = async () => {
    try {
        const res = await client.get('/post/get-all-post');
        return res.data;
    } catch (error) {
        if (error.response) console.log('Error response: ', error.response.data.error);
        else console.log('Error not response: ', error.message);
        return null;
    }
};

const getAllPostsBySpecialty = async (specialtyName) => {
    try {
        const res = await client.post('/post/get-all-post-by-speciality', {
            speciality_name: specialtyName,
        });
        return res.data;
    } catch (error) {
        if (error.response) console.log('Error response: ', error.response.data.error);
        else console.log('Error not response: ', error.message);
        return null;
    }
};

const addPost = async (email, post_title, post_content, speciality_name) => {
    try {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('post_title', post_title);
        formData.append('post_content', post_content);
        formData.append('speciality_name', speciality_name);

        const res = await client.post('/post/create-post', {
            email: email,
            post_title: post_title,
            post_content: post_content,
            speciality_name: speciality_name,
        });

        return res.data;
    } catch (error) {
        if (error.response) console.log('Error response: ', error.response.data.error);
        else console.log('Error not response: ', error.message);
        return null;
    }
};

export default {
    get_All_Posts,
    getAllPostsBySpecialty,
    addPost,
};
