import classNames from 'classnames/bind';
import styles from './Blog.module.scss';
import PageTitle from '../../components/PageTitle';
import BlogItem from '../../components/BlogItem';

const cx = classNames.bind(styles);
function Blog() {
    return (
        <div className={cx('wrapper')}>
            <PageTitle>TIN TỨC</PageTitle>
            <div className={cx('blog-items')}>
                <BlogItem></BlogItem>
                <BlogItem></BlogItem>
                <BlogItem></BlogItem>
                <BlogItem></BlogItem>
            </div>
            <div className={cx('pagination')}></div>
        </div>
    );
}

export default Blog;
