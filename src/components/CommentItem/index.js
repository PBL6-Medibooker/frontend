import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './CommentItem.module.scss';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function CommentItem({ data }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('user-avatar-section')}>
                <img className={cx('user-avatar')} src={`data:image/jpeg;base64,${data.replier.profile_image}`}></img>
            </div>

            <div className={cx('question-section')}>
                <div className={cx('question-title-wrapper')}>
                    <h4 className={cx('question-title')}>
                        <span>{data.replier.email}</span>
                    </h4>
                </div>
                <div className={cx('question-info-wrapper')}>
                    <h4 className={cx('asked-time')}>
                        <span>{formatDate(data.date_published)}</span>
                    </h4>
                </div>
                <div className={cx('question-wrapper')}>
                    <h4 className={cx('question')}>
                        <span>{data.comment_content}</span>
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default CommentItem;
