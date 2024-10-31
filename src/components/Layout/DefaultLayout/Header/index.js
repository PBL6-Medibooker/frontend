import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import Button from '../../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faQuestion, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('header-wrapper')}>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('logo_wrapper')}>
                        <div className={cx('logo')}>
                            <img className={cx('logo_image')} src={images.logo} alt="nhim"></img>
                        </div>
                    </div>
                    <div className={cx('link_wrapper')}>
                        <div className={cx('button_container')}>
                            <Button gradientTwo medium>
                                HOTLINE: 0762 748 739
                            </Button>
                            <Button gradientOne medium>
                                ĐĂNG KÝ
                            </Button>
                            <Button gradientOne medium>
                                ĐĂNG NHẬP
                            </Button>
                        </div>
                        <div className={cx('link_container')}>
                            <Button text leftIcon={<FontAwesomeIcon icon={faUser} />}>
                                Dành cho khách hàng
                            </Button>
                            <Button text href="/forum" leftIcon={<FontAwesomeIcon icon={faQuestion} />}>
                                Hỏi đáp
                            </Button>
                            <Button text leftIcon={<FontAwesomeIcon icon={faCalendar} />}>
                                Đặt lịch khám
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <header className={cx('navbar-wrapper')}>
                <div className={cx('navbar-inner')}>
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
        </div>
    );
}

export default Header;
