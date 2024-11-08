import { useState, useEffect } from 'react';
import Article_API from '../API/Article_API';

const useArticles = () => {
    const [articlesHook, setArticlesHook] = useState([]);
    const [firstArticle, setFirstArticle] = useState({});
    const [fourArticles, setFourArticles] = useState([]);
    const [loading, isLoading] = useState(false);
    const filterFirstArticle = (data) => {
        return data.slice().sort((a, b) => new Date(b.date_published) - new Date(a.date_published))[0];
    };
    const filterFourArticles = (data) => {
        // Sắp xếp bài báo theo `createdAt` mới nhất và lấy tối đa 4 bài từ vị trí thứ 2 trở đi.
        return data
            .slice()
            .sort((a, b) => new Date(b.date_published) - new Date(a.date_published))
            .slice(1, Math.min(5, data.length)); // Đảm bảo lấy tối đa là 4 bài báo nếu có đủ
    };

    const filterArticles = async () => {
        isLoading(true);
        try {
            const allArticles = await Article_API.get_All_Article();
            setArticlesHook(allArticles);
            setFirstArticle(filterFirstArticle(allArticles));
            setFourArticles(filterFourArticles(allArticles));
        } catch (error) {
            console.error('Failed to fetch specialities:', error);
        } finally {
            isLoading(false);
        }
    };
    useEffect(() => {
        filterArticles();
    }, []);
    const addComment = async (articleId, email, content) => {
        Article_API.addComment(articleId, email, content);
    };
    const addArticle = async (email, article_title, article_content, article_description, article_image) => {
        await Article_API.addArticle(email, article_title, article_content, article_description, article_image);
    };
    const getArticlesByDoctor = async (doctorEmail, article_id) => {
        const articleByDoctor = await Article_API.getArticlesByDoctor(doctorEmail);
        const filteredArticles = articleByDoctor.filter((article) => article._id !== article_id);
        return filteredArticles;
    };
    const getArticlesByID = async (id) => {
        const articleByID = await Article_API.getArticlesByID(id);
        return articleByID;
    };
    const getArticlesBySpecialty = async (specialtyName, sortBy) => {
        const articleBySpecialty = await Article_API.getArticlesBySpecialty(specialtyName);
        if (!articleBySpecialty) return null;
        if (!sortBy) return articleBySpecialty;
        let filteredArticles;
        if (sortBy && sortBy === 'A-Z')
            filteredArticles = articleBySpecialty
                .slice()
                .sort((a, b) => a.article_title.localeCompare(b.article_title));
        else if (sortBy && sortBy === 'Z-A')
            filteredArticles = articleBySpecialty
                .slice()
                .sort((a, b) => b.article_title.localeCompare(a.article_title));
        return filteredArticles;
    };
    const getFiveLatestArticles = async (excludeId) => {
        try {
            const allArticles = await Article_API.get_All_Article();

            const filteredArticles = allArticles
                .slice()
                .sort((a, b) => new Date(b.date_published) - new Date(a.date_published))
                .filter((article) => article._id !== excludeId);

            return filteredArticles.slice(0, 5);
        } catch (error) {
            console.error('Failed to fetch and filter articles:', error);
            return [];
        }
    };

    return [
        articlesHook,
        firstArticle,
        fourArticles,
        loading,
        getArticlesByDoctor,
        getArticlesBySpecialty,
        getArticlesByID,
        addComment,
        addArticle,
        getFiveLatestArticles,
    ];
};
export default useArticles;
