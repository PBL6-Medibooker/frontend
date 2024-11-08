import { useState, useEffect } from 'react';
import Post_API from '../API/Post_API';

const usePost = () => {
    const [postHook, setPostHook] = useState([]);
    const [postloading, isPostLoading] = useState(false);

    const filterPost = async () => {
        isPostLoading(true);
        try {
            const allPosts = await Post_API.get_All_Posts();
            const sortedPosts = allPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setPostHook(sortedPosts);
        } catch (error) {
            console.error('Failed to fetch specialities:', error);
        } finally {
            isPostLoading(false);
        }
    };

    const getAllPostsBySpecialty = async (specialtyName, sortBy) => {
        const postsBySpecialty = await Post_API.getAllPostsBySpecialty(specialtyName);
        if (!postsBySpecialty) return null;
        if (!sortBy) return postsBySpecialty;
        let filteredPosts;
        if (sortBy && sortBy === 'A-Z')
            filteredPosts = postsBySpecialty.slice().sort((a, b) => a.post_title.localeCompare(b.post_title));
        else if (sortBy && sortBy === 'Z-A')
            filteredPosts = postsBySpecialty.slice().sort((a, b) => b.post_title.localeCompare(a.post_title));
        else if (sortBy && sortBy === 'newest')
            filteredPosts = postsBySpecialty.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return filteredPosts;
    };

    const sortAllPosts = (sortBy) => {
        const allPosts = postHook;
        if (!sortBy) return postHook;
        let filteredPosts;
        if (sortBy && sortBy === 'A-Z')
            filteredPosts = allPosts.slice().sort((a, b) => a.post_title.localeCompare(b.post_title));
        else if (sortBy && sortBy === 'Z-A')
            filteredPosts = allPosts.slice().sort((a, b) => b.post_title.localeCompare(a.post_title));
        else if (sortBy && sortBy === 'newest')
            filteredPosts = allPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setPostHook(filteredPosts);
    };

    const searchPost = (searchValue, displayedPosts) => {
        if (!searchValue) return displayedPosts; // If no search term, return all posts

        return displayedPosts.filter((post) => post.post_title.toLowerCase().includes(searchValue.toLowerCase()));
    };

    const addPost = async (email, post_title, post_content, speciality_name) => {
        await Post_API.addPost(email, post_title, post_content, speciality_name);
    };

    useEffect(() => {
        filterPost();
    }, []);

    return [postloading, postHook, getAllPostsBySpecialty, sortAllPosts, addPost, searchPost];
};

export default usePost;
