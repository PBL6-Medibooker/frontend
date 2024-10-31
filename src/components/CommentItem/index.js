import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './CommentItem.module.scss';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function CommentItem({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('user-avatar-section')}>
                <img
                    className={cx('user-avatar')}
                    src="https://cdn.pixabay.com/photo/2021/03/20/11/57/woman-6109643_1280.jpg"
                ></img>
            </div>

            <div className={cx('question-section')}>
                <div className={cx('question-title-wrapper')}>
                    <h4 className={cx('question-title')}>
                        <span>Thắng Hoàng</span>
                    </h4>
                </div>
                <div className={cx('question-info-wrapper')}>
                    <h4 className={cx('asked-time')}>
                        <span>2/8/2024</span>
                    </h4>
                </div>
                <div className={cx('question-wrapper')}>
                    <h4 className={cx('question')}>
                        <span>
                            Thưa bác sĩ, vàng da sinh lý có cần chiếu đèn không ạ? Con em được 3 ngày tuổi, có biểu hiện
                            vàng da  ở vùng mặt và cổ. Bác sĩ bảo con bị vàng da sinh lý nên không cần điều trị, tình
                            trạng này sẽ tự khỏi sau ít ngày. Tuy nhiên, đến nay đã gần 1 tuần em thấy da bé vẫn vàng
                            nên lo lắng quá. Mong bác sĩ tư vấn ạ.
                        </span>
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default CommentItem;
