import classNames from 'classnames/bind';
import styles from './CreateBlog.module.scss';
import PageTitle from '../../components/PageTitle';
import BlogItem from '../../components/BlogItem';
import Button from '../../components/Button';
import { useState, useEffect } from 'react';
import useArticles from '../../hooks/useArticles';

const cx = classNames.bind(styles);
function CreateBlog() {
    const [image, setImage] = useState();
    const [blogTitle, setBlogTitle] = useState('');
    const [blogDescription, setBlogDescription] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const email = 'stephen96@ethereal12.email';
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
        return () => {
            image && URL.revokeObjectURL(image.preview);
        };
    }, [image]);

    const handleArticleSubmit = async () => {
        await addArticle(email, blogTitle, blogContent, blogDescription, image);
        setBlogContent('');
        setBlogDescription('');
        setBlogTitle('');
        setImage(null);
    };

    const handlePreviewImage = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImage(file);
    };
    return (
        <div className={cx('wrapper')}>
            <PageTitle>TẠO BLOG</PageTitle>
            <div className={cx('blog-form-container')}>
                <form className={cx('blog-form')}>
                    <div className={cx('image-container')}>
                        {image && <img name="image" src={image.preview} alt="" className={cx('blog-image')}></img>}
                    </div>
                    <div className={cx('input-file-container')}>
                        <input type="file" className={cx('image-picker')} onChange={handlePreviewImage}></input>
                    </div>
                    <input
                        type="text"
                        name="title"
                        className={cx('blog-title')}
                        placeholder="Tiêu đề"
                        value={blogTitle}
                        onChange={(e) => setBlogTitle(e.target.value)}
                    ></input>
                    <textarea
                        name="description"
                        className={cx('blog-description')}
                        placeholder="Mô tả"
                        rows="4"
                        cols="50"
                        value={blogDescription}
                        onChange={(e) => setBlogDescription(e.target.value)}
                    ></textarea>
                    <textarea
                        name="content"
                        className={cx('blog-content')}
                        placeholder="Nội dung"
                        rows="4"
                        cols="50"
                        value={blogContent}
                        onChange={(e) => setBlogContent(e.target.value)}
                    ></textarea>
                    <Button submit long onClick={handleArticleSubmit}>
                        TẠO BLOG
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default CreateBlog;
