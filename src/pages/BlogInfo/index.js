import MiniBlogItem from '../../components/MiniBlogItem';
import classNames from 'classnames/bind';
import styles from './BlogInfo.module.scss';
import PageTitle from '../../components/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-regular-svg-icons';
import Button from '../../components/Button';
import CommentItem from '../../components/CommentItem';
import useArticles from '../../hooks/useArticles';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Pagination from '../../components/Pagination';

const cx = classNames.bind(styles);
function BlogInfo() {
    const { id } = useParams();
    const comment_email = 'nhim1801@ethereal12.email';

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const [articleByID, setArticleByID] = useState(null);
    const [fiveArticles, setFiveArticles] = useState([]);
    const [commentContent, setCommentContent] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [commentsPerPage, setCommentsPerPage] = useState(5);

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

    useEffect(() => {
        const fetchArticle = async () => {
            const article = await getArticlesByID(id);
            setArticleByID(article);
        };

        fetchArticle();
    }, [id, getArticlesByID]);

    useEffect(() => {
        const fetchFiveArticles = async () => {
            const latestArticles = await getFiveLatestArticles(id);
            setFiveArticles(latestArticles);
        };
        fetchFiveArticles();
    }, []);

    if (loading || !articleByID) {
        return <div>Loading...</div>; // Hoặc trạng thái loading khác
    }

    const lastCommentIndex = currentPage * commentsPerPage;
    const firstCommentIndex = lastCommentIndex - commentsPerPage;
    const currentComment = articleByID.article_comments
        ? articleByID.article_comments.slice(firstCommentIndex, lastCommentIndex)
        : [];
    // Cập nhật hàm renderDescription để thêm khoảng trắng đầu dòng
    const renderDescription = () => {
        if (!articleByID.article_description) return null; // Check if article_description is undefined
        return articleByID.article_description.split('\n').map((line, index) => (
            <h4 className={cx('blog-description')} key={index}>
                {/* Thêm khoảng trắng đầu dòng */}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{line.trim()}</span>
            </h4>
        ));
    };

    const handleCommentSubmit = async () => {
        const newComment = await addComment(id, comment_email, commentContent);
        setCommentContent('');
    };

    // Cập nhật hàm renderContent để thêm khoảng trắng đầu dòng
    const renderContent = () => {
        if (!articleByID.article_content) return null; // Check if article_content is undefined
        return articleByID.article_content.split('\n').map((line, index) => (
            <h4 className={cx('blog-content')} key={index}>
                {/* Thêm khoảng trắng đầu dòng */}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{line.trim()}</span>
            </h4>
        ));
    };

    return (
        <div className={cx('wrapper')}>
            <PageTitle>TIN TỨC</PageTitle>
            <div className={cx('blog-content-wrapper')}>
                <div className={cx('blog-wrapper')}>
                    <h4 className={cx('blog-title')}>
                        <span>{articleByID.article_title}</span>
                    </h4>
                    <div className={cx('blog-info-wrapper')}>
                        <FontAwesomeIcon className={cx('blog-info-user-icon')} icon={faUser} />
                        <h4 className={cx('blog-owner')}>
                            <span>{articleByID?.doctor_id?.email}</span>
                        </h4>
                        <FontAwesomeIcon className={cx('blog-info-calendar-icon')} icon={faCalendar} />
                        <h4 className={cx('blog-post-date')}>
                            <span>{formatDate(articleByID.date_published)}</span>
                        </h4>
                    </div>
                    <hr className={cx('list-blog-separator')}></hr>
                    <div className={cx('blog-content-container')}>
                        {renderDescription()}
                        <img
                            className={cx('blog-image')}
                            src={`data:image/jpeg;base64,${articleByID.article_image}`}
                            alt="Blog Image"
                        ></img>
                        {renderContent()}
                    </div>
                    <div className={cx('comment-title-wrapper')}>
                        <h4 className={cx('comment-title')}>
                            <span>Bình luận</span>
                        </h4>
                    </div>
                    <hr className={cx('list-blog-separator')}></hr>
                    <div className={cx('comment-section')}>
                        <img
                            className={cx('user-avatar')}
                            src="https://cdn.pixabay.com/photo/2021/03/20/11/57/woman-6109643_1280.jpg"
                            alt="User Avatar"
                        ></img>
                        <textarea
                            name="comment"
                            className={cx('comment')}
                            rows="4"
                            cols="50"
                            placeholder="Viết bình luận..."
                            value={commentContent}
                            onChange={(e) => setCommentContent(e.target.value)}
                        ></textarea>
                        <Button submitThree onClick={handleCommentSubmit}>
                            Gửi
                        </Button>
                    </div>
                    {currentComment.map((comment) => {
                        return <CommentItem data={comment}></CommentItem>;
                    })}
                    <div className={cx('pagination')}>
                        <Pagination
                            totalPosts={articleByID.article_comments.length}
                            postsPerPage={commentsPerPage}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                        ></Pagination>
                    </div>
                </div>
                <div className={cx('list-blog-wrapper')}>
                    <h4 className={cx('list-blog-title')}>
                        <span>BÀI VIẾT MỚI</span>
                    </h4>
                    <hr className={cx('list-blog-separator')}></hr>
                    {fiveArticles.map((article) => {
                        return <MiniBlogItem data={article}></MiniBlogItem>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default BlogInfo;
