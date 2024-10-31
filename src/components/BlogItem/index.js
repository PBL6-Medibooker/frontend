import classNames from 'classnames/bind';
import styles from './BlogItem.module.scss';

const cx = classNames.bind(styles);

function BlogItem() {
    return (
        <a className={cx('blog-wrapper')}>
            <img
                className={cx('blog-image')}
                src="https://tamanhhospital.vn/wp-content/uploads/2021/03/sanh-cho-rong-rai-f.jpg"
                alt="Blog_image"
            ></img>
            <h4 className={cx('blog-title')}>
                <span>Khai trương phòng khám đa khoa tại quận 7</span>
            </h4>
            <h4 className={cx('blog-description')}>
                <span>
                    Ngày 23/8/2024, hệ thống bệnh viện Đa khoa chính thức đưa vào hoạt động phòng khám Đa khoa Quận 7
                    chuyên sâu, hiện đại, góp phần khám chữa bệnh cho nhiều bệnh nhân hơn
                </span>
            </h4>
        </a>
    );
}

export default BlogItem;
