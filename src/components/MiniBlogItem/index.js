import classNames from 'classnames/bind';
import styles from './MiniBlogItem.module.scss';

const cx = classNames.bind(styles);

function MiniBlogItem() {
    return (
        <a className={cx('blog-wrapper')}>
            <img
                className={cx('blog-image')}
                src="https://tamanhhospital.vn/wp-content/uploads/2021/03/sanh-cho-rong-rai-f.jpg"
                alt="Blog_image"
            ></img>
            <div className={cx('blog-content')}>
                <h4 className={cx('blog-title')}>
                    <span>Suy tim tâm trương là gì? Nguyên nhân, dấu hiệu, chẩn đoán, điều trị</span>
                </h4>
                <h4 className={cx('blog-description')}>
                    <span>
                        Suy tim tâm trương là tình trạng bị suy giảm khả năng giãn nở. Tỷ lệ bệnh nhân bị suy tim tâm
                        trương ngày càng tăng
                    </span>
                </h4>
            </div>
        </a>
    );
}

export default MiniBlogItem;
