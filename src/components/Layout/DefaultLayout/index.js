import Footer from './Footer';
import Header from './Header';
import Navbar from './NavBar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {children}
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
