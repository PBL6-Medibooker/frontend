import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';
import Button from '../../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function NavBar() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Button nav>GIỚI THIỆU</Button>
                <Button nav>CHUYÊN KHOA</Button>
                <Button nav>CHUYÊN GIA - BÁC SĨ</Button>
                <Button nav>DỊCH VỤ ĐẶC BIỆT</Button>
                <Button nav>TIỆN NGHI</Button>
                <Button nav>THÀNH TỰU</Button>
                <Button nav>TIN TỨC</Button>
                <Button nav>LIÊN HỆ</Button>
                <Button nav leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}></Button>
            </div>
        </header>
    );
}

export default NavBar;
