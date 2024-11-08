import client from '../utils/client';

const get_All_Article = async () => {
    try {
        const res = await client.get('/article/get-all-article');
        return res.data;
    } catch (error) {
        if (error.response) console.log('Error response: ', error.response.data.error);
        else console.log('Error not response: ', error.message);
        return null;
    }
};
const addComment = async (articleId, email, content) => {
    try {
        const res = await client.post(`/article/add-comment/${articleId}`, {
            comment_email: email,
            comment_content: content,
        });
        return res.data;
    } catch (error) {
        if (error.response) console.log('Error response: ', error.response.data.error);
        else console.log('Error not response: ', error.message);
        return null;
    }
};
const addArticle = async (email, article_title, article_content, article_description, article_image) => {
    try {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('article_title', article_title);
        formData.append('article_content', article_content);
        formData.append('article_description', article_description);
        if (article_image) formData.append('article_image', article_image);

        const res = await client.post('/article/create-article', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return res.data;
    } catch (error) {
        if (error.response) console.log('Error response: ', error.response.data.error);
        else console.log('Error not response: ', error.message);
        return null;
    }
};

const getArticlesByDoctor = async (doctorEmail) => {
    try {
        const res = await client.post('/article/get-all-article-by-doctor', {
            email: doctorEmail,
        });
        return res.data;
    } catch (error) {
        if (error.response) console.log('Error response: ', error.response.data.error);
        else console.log('Error not response: ', error.message);
        return null;
    }
};
const getArticlesBySpecialty = async (specialtyName) => {
    try {
        const res = await client.post('/article/get-all-article-by-speciality', {
            speciality_name: specialtyName,
        });
        return res.data;
    } catch (error) {
        if (error.response) console.log('Error response: ', error.response.data.error);
        else console.log('Error not response: ', error.message);
        return null;
    }
};
const getArticlesByID = async (id) => {
    try {
        const res = await client.get(`/article/get-article/${id}`);
        return res.data;
    } catch (error) {
        if (error.response) console.log('Error response: ', error.response.data.error);
        else console.log('Error not response: ', error.message);
        return null;
    }
};

export default {
    get_All_Article,
    getArticlesByDoctor,
    getArticlesBySpecialty,
    getArticlesByID,
    addComment,
    addArticle,
};
