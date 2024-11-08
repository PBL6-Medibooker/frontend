import classNames from 'classnames/bind';
import styles from './Blog.module.scss';
import PageTitle from '../../components/PageTitle';
import BlogItem from '../../components/BlogItem';
import useArticles from '../../hooks/useArticles';
import { useState } from 'react';
import Pagination from '../../components/Pagination';

const cx = classNames.bind(styles);
function Blog() {
    const [
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
    ] = useArticles();
    const [currentPage, setCurrentPage] = useState(1);
    const [articlesPerPage, setArticlesPerPage] = useState(4);

    const lastArticleIndex = currentPage * articlesPerPage;
    const firstArticleIndex = lastArticleIndex - articlesPerPage;
    const currentArticles = articlesHook.slice(firstArticleIndex, lastArticleIndex);
    return (
        <div className={cx('wrapper')}>
            <PageTitle>TIN TỨC</PageTitle>
            <div className={cx('blog-items')}>
                {currentArticles.map((article) => (
                    <BlogItem key={article._id} data={article}></BlogItem>
                ))}
            </div>
            <div className={cx('pagination')}>
                <Pagination
                    totalPosts={articlesHook.length}
                    postsPerPage={articlesPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                ></Pagination>
            </div>
        </div>
    );
}

export default Blog;
