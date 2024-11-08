import classNames from 'classnames/bind';
import styles from './Forum.module.scss';
import PageTitle from '../../components/PageTitle';
import BlogItem from '../../components/BlogItem';
import Button from '../../components/Button';
import { useState, useEffect } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ForumItem from '../../components/ForumItem';
import useSpeciality from '../../hooks/useSpeciality';
import usePost from '../../hooks/usePost';

const cx = classNames.bind(styles);

function Forum() {
    const [specialityLoading, specialityHook] = useSpeciality();
    const [postLoading, postHook, getAllPostsBySpecialty, sortAllPosts, addPost, searchPost] = usePost();
    const [selectedFaculty, setSelectedFaculty] = useState('all');
    const [displayedPosts, setDisplayedPosts] = useState([]);
    const [sortBy, setSortBy] = useState('newest');
    const [formSelectedFaculty, setFormSelectedFaculty] = useState('');
    const [postTitle, setPostTitle] = useState();
    const [postContent, setPostContent] = useState();
    const [searchValue, setSearchValue] = useState('');

    const email = 'nhim1801@ethereal12.email';

    const handleFacultyChange = (event) => {
        setSelectedFaculty(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleFormFacultyChange = (event) => {
        setFormSelectedFaculty(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSubmitSearch = async () => {
        const relatedPosts = await searchPost(searchValue, displayedPosts);
        setDisplayedPosts(relatedPosts);
    };

    const handleSubmitForm = async () => {
        await addPost(email, postTitle, postContent, formSelectedFaculty);
        setPostTitle('');
        setPostContent('');
        setFormSelectedFaculty(specialityHook[0]);
    };

    useEffect(() => {
        if (specialityHook.length > 0) {
            setFormSelectedFaculty(specialityHook[0].name);
        }
    }, [specialityHook]);

    useEffect(() => {
        const fetchPosts = async () => {
            const posts = await getAllPostsBySpecialty(selectedFaculty, sortBy);
            setDisplayedPosts(posts);
        };

        const sortPosts = async () => {
            await sortAllPosts(sortBy);
            setDisplayedPosts(postHook);
        };

        if (selectedFaculty === 'all') {
            sortPosts();
        } else {
            fetchPosts();
        }
    }, [selectedFaculty, sortBy, postHook]);

    if (postLoading || !displayedPosts) {
        return <div>Loading...</div>; // Hoặc trạng thái loading khác
    }
    return (
        <div className={cx('wrapper')}>
            <PageTitle>CHUYÊN MỤC TƯ VẤN</PageTitle>
            <div className={cx('search-section')}>
                <div className={cx('search-section-title-wrapper')}>
                    <h4 className={cx('search-section-title')}>
                        <span>Thông tin tra cứu</span>
                    </h4>
                </div>
                <div className={cx('search-section-options-wrapper')}>
                    <div className={cx('search-section_faculty-wrapper')}>
                        <h4 className={cx('search-section_option-title')}>
                            <span>Chuyên khoa</span>
                        </h4>
                        <select
                            className={cx('faculty')}
                            name="faculty"
                            value={selectedFaculty}
                            onChange={handleFacultyChange}
                        >
                            <option value={'all'}>All</option>
                            {specialityHook.map((speciality) => (
                                <option key={speciality.id} value={speciality.name}>
                                    {speciality.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={cx('search-section_bar-wrapper')}>
                        <h4 className={cx('search-section_option-title')}>
                            <span>Tìm kiếm</span>
                        </h4>
                        <div className={cx('search-bar')}>
                            <input
                                className={cx('search-bar-textbox')}
                                type="text"
                                value={searchValue}
                                onChange={handleSearchChange}
                            ></input>
                            <button className={cx('search-bar-button')} onClick={handleSubmitSearch}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </div>
                    <div className={cx('search-section_sort-wrapper')}>
                        <h4 className={cx('search-section_option-title')}>
                            <span>Sắp xếp</span>
                        </h4>
                        <select className={cx('sort')} name="sort" value={sortBy} onChange={handleSortChange}>
                            <option value="newest">Mới nhất</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={cx('forum-questions-wrapper')}>
                {displayedPosts.map((post) => {
                    return <ForumItem data={post}></ForumItem>;
                })}
            </div>
            <PageTitle>ĐẶT CÂU HỎI</PageTitle>
            <form className={cx('forum-form')}>
                <div className={cx('user-avatar-section')}>
                    <img
                        className={cx('user-avatar')}
                        src="https://cdn.pixabay.com/photo/2021/03/20/11/57/woman-6109643_1280.jpg"
                    ></img>
                </div>
                <div className={cx('question-info-section')}>
                    <div className={cx('question-info')}>
                        <div className={cx('question_faculty-wrapper')}>
                            <h4 className={cx('question_option-title')}>
                                <span>Chọn khoa tư vấn</span>
                            </h4>
                            <select
                                className={cx('faculty')}
                                name="faculty"
                                value={formSelectedFaculty}
                                onChange={handleFormFacultyChange}
                            >
                                {specialityHook.map((speciality) => (
                                    <option key={speciality.id} value={speciality.name}>
                                        {speciality.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={cx('question_topic-wrapper')}>
                            <h4 className={cx('question_option-title')}>
                                <span>Chủ đề thảo luận</span>
                            </h4>
                            <textarea
                                name="topic"
                                className={cx('question-topic')}
                                value={postTitle}
                                onChange={(e) => {
                                    setPostTitle(e.target.value);
                                }}
                                rows="4"
                                cols="50"
                            ></textarea>
                        </div>
                    </div>
                    <div className={cx('question-content-wrapper')}>
                        <div className={cx('question_content')}>
                            <h4 className={cx('question_option-title')}>
                                <span>Đặt câu hỏi</span>
                            </h4>
                            <textarea
                                name="question"
                                className={cx('question')}
                                value={postContent}
                                onChange={(e) => {
                                    setPostContent(e.target.value);
                                }}
                                rows="4"
                                cols="50"
                            ></textarea>
                            <div className={cx('submit-button-container')}>
                                <Button submitTwo onClick={handleSubmitForm}>
                                    GỬI CÂU HỎI
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Forum;
