import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '../../../../assets/images';
import Button from '../../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('footer_section_wrapper')}>
                    <div className={cx('footer_section')}>
                        <div className={cx('logo')}>
                            <img className={cx('logo_image')} src={images.logo} alt="nhim"></img>
                        </div>
                    </div>
                    <div className={cx('footer_section')}>
                        <div className={cx('footer_title')}>HỆ THỐNG BỆNH VIỆN</div>
                        <div className={cx('footer_items_wrapper')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </span>
                            <div className={cx('list_info')}>
                                <div className={cx('info')}>108 Phố Hoàng Như Tiếp,</div>
                                <div className={cx('info')}>P.Bồ Đề, Q.Long Biên, Tp.Hà Nội</div>
                            </div>
                        </div>
                        <div className={cx('footer_items_wrapper')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </span>
                            <div className={cx('list_info')}>
                                <div className={cx('info')}>2B Phổ Quang, Phường 2,</div>
                                <div className={cx('info')}>Q.Tân Bình, Tp. Hồ Chí Minh</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('footer_section')}>
                        <div className={cx('footer_title')}>ĐƯỜNG DÂY LIÊN HỆ</div>
                        <div className={cx('footer_items_wrapper')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </span>
                            <div className={cx('list_info')}>
                                <div className={cx('info')}>024 7106 6858</div>
                                <div className={cx('info')}>024 3872 3872 </div>
                            </div>
                        </div>
                        <div className={cx('footer_items_wrapper')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </span>
                            <div className={cx('list_info')}>
                                <div className={cx('info')}>0287 102 6789</div>
                                <div className={cx('info')}>093 180 6858</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('footer_section')}>
                        <div className={cx('footer_title')}>ĐƯỜNG DẪN NHANH</div>
                        <div className={cx('footer_items_wrapper')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </span>
                            <div className={cx('list_info')}>
                                <div className={cx('info')}>Chuyên khoa</div>
                                <div className={cx('info')}>Chuyên mục bảo mật</div>
                                <div className={cx('info')}>Chính sách bảo mật</div>
                                <div className={cx('info')}>Đặc san</div>
                            </div>
                        </div>
                        <div className={cx('footer_title')}>WEBSITE CÙNG TẬP ĐOÀN</div>
                        <div className={cx('footer_items_wrapper')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </span>
                            <div className={cx('list_info')}>
                                <div className={cx('info')}>Viện nghiên cứu</div>
                                <div className={cx('info')}>Trung tâm hỗ trợ sinh sản</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('footer_links')}>
                    <a className={cx('square_logo')}>
                        <img
                            className={cx('square_logo_image')}
                            src="https://tamanhhospital.vn/wp-content/uploads/2024/08/handle-cert.png"
                            alt="facebook"
                        ></img>
                    </a>

                    <a className={cx('square_logo')}>
                        <img
                            className={cx('square_logo_image')}
                            src="https://images.dmca.com/Badges/DMCA_logo-grn-btn100w.png?ID=d559761b-d67b-49db-a7b7-8e19686deb81"
                            alt="twitter"
                        ></img>
                    </a>
                    <a className={cx('square_logo')}>
                        <img
                            className={cx('square_logo_image')}
                            src="https://tamanhhospital.vn/img/dathongbao.png"
                            alt="youtube"
                        ></img>
                    </a>
                    <a className={cx('round_logo')}>
                        <img
                            className={cx('round_logo_image')}
                            src="https://tamanhhospital.vn/wp-content/uploads/2024/05/icon-facebook-tam-anh.png"
                            alt="facebook"
                        ></img>
                    </a>
                    <a className={cx('round_logo')}>
                        <img
                            className={cx('round_logo_image')}
                            src="https://tamanhhospital.vn/wp-content/uploads/2024/05/icon-youtube-tam-anh.png"
                            alt="youtube"
                        ></img>
                    </a>
                    <a className={cx('round_logo')}>
                        <img
                            className={cx('round_logo_image')}
                            src="https://tamanhhospital.vn/wp-content/uploads/2024/05/x-icon.png"
                            alt="twitter"
                        ></img>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
