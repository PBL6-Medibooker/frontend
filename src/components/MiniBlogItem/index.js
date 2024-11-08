import classNames from 'classnames/bind';
import styles from './MiniBlogItem.module.scss';

const cx = classNames.bind(styles);

function MiniBlogItem({ data }) {
    return (
        <a className={cx('blog-wrapper')} href={`/bloginfo/${data._id}`}>
            <img
                className={cx('blog-image')}
                src={`data:image/jpeg;base64,${data.article_image}`}
                alt="Blog_image"
            ></img>
            <div className={cx('blog-content')}>
                <h4 className={cx('blog-title')}>
                    <span>{data.article_title}</span>
                </h4>
                <h4 className={cx('blog-description')}>
                    <span>{data.article_description}</span>
                </h4>
            </div>
        </a>
    );
}

export default MiniBlogItem;
