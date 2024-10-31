import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './PageTitle.module.scss';

const cx = classNames.bind(styles);

function PageTitle({ children }) {
    return (
        <div className={cx('page-title_container')}>
            <div className={cx('page-title')}>{children}</div>
        </div>
    );
}

export default PageTitle;
