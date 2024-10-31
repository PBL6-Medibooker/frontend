import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState } from 'react'; // Thêm useState để quản lý trạng thái hiển thị
import styles from './ForumItem.module.scss';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function ForumItem({ children }) {
    // Quản lý trạng thái hiển thị của answer-wrapper
    const [isAnswerVisible, setAnswerVisible] = useState(false);

    // Hàm toggle để hiển thị/ẩn answer-wrapper
    const toggleAnswerVisibility = () => {
        setAnswerVisible(!isAnswerVisible); // Thay đổi trạng thái khi nhấn vào link
    };

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('user-avatar-section')}>
                    <img
                        className={cx('user-avatar')}
                        src="https://cdn.pixabay.com/photo/2021/03/20/11/57/woman-6109643_1280.jpg"
                        alt="User Avatar"
                    />
                </div>

                <div className={cx('question-section')}>
                    <div className={cx('question-title-wrapper')}>
                        <h4 className={cx('question-title')}>
                            <span>Vàng da sinh lý có cần chiếu đèn không? Một số lưu ý quan trọng</span>
                        </h4>
                        <FontAwesomeIcon className={cx('comment-icon')} icon={faComment} />
                        <h4 className={cx('question-count')}>
                            <span>0</span>
                        </h4>
                    </div>
                    <div className={cx('question-info-wrapper')}>
                        <h4 className={cx('post-by')}>
                            <span>Đăng bởi</span>
                        </h4>
                        <h4 className={cx('question-asker')}>
                            <span>Thắng Hoàng</span>
                        </h4>
                        <h4 className={cx('when')}>
                            <span>vào lúc</span>
                        </h4>
                        <h4 className={cx('asked-time')}>
                            <span>2/8/2024</span>
                        </h4>
                    </div>
                    <div className={cx('question-wrapper')}>
                        <h4 className={cx('question')}>
                            <span>
                                Thưa bác sĩ, vàng da sinh lý có cần chiếu đèn không ạ? Con em được 3 ngày tuổi, có biểu
                                hiện vàng da ở vùng mặt và cổ. Bác sĩ bảo con bị vàng da sinh lý nên không cần điều trị,
                                tình trạng này sẽ tự khỏi sau ít ngày. Tuy nhiên, đến nay đã gần 1 tuần em thấy da bé
                                vẫn vàng nên lo lắng quá. Mong bác sĩ tư vấn ạ.
                            </span>
                        </h4>
                    </div>
                    <div className={cx('question-link-wrapper')}>
                        <a className={cx('link')} onClick={toggleAnswerVisibility}>
                            Xem câu trả lời
                        </a>
                    </div>
                </div>
            </div>

            {/* Hiển thị/ẩn thẻ answer-wrapper dựa trên trạng thái isAnswerVisible */}
            {isAnswerVisible && (
                <div className={cx('answer-wrapper')}>
                    <div className={cx('doctor-info-wrapper')}>
                        <div className={cx('doctor-image-wrapper')}>
                            <img
                                className={cx('doctor-image')}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSslrJK5VdKIfZ0W5FXwoEqzBQ6XiGPsTEdPQ&s"
                                alt="Doctor"
                            />
                        </div>
                        <div className={cx('doctor-info')}>
                            <h4 className={cx('doctor-name')}>
                                <span>BS. VÕ MINH TUẤN</span>
                            </h4>
                            <h4 className={cx('doctor-introduction')}>
                                <span>Bác sĩ ngoại cột sống</span>
                            </h4>
                            <h4 className={cx('doctor-introduction')}>
                                <span>Trung tâm chấn thương chỉnh hình</span>
                            </h4>
                            <h4 className={cx('doctor-introduction')}>
                                <span>Chi nhánh TP.Hồ Chí Minh</span>
                            </h4>
                        </div>
                    </div>
                    <div className={cx('answer-section')}>
                        <h4 className={cx('doctor-answer')}>
                            <span>
                                Chào chị! Trượt đốt sống L4-L5 độ 2, đây là tình trạng nghiêm trọng có thể gây ra nhiều
                                triệu chứng như đau lưng, đau chân, và khó khăn trong việc di chuyển. Do đó, phẫu thuật
                                có thể là phương pháp hiệu quả để giảm đau và cải thiện chức năng. Hiện tại, Trung tâm
                                Chấn thương Chỉnh hình, BVĐK Tâm Anh TP.HCM không sử dụng robot Renaissance trong phẫu
                                thuật cột sống, chỉ sử dụng trong phẫu thuật u não. Chúng tôi áp dụng phương pháp phẫu
                                thuật mở để xử lý trượt đốt sống nặng, giúp kiểm soát và điều chỉnh cấu trúc cột sống
                                hiệu quả hơn. Phẫu thuật ít xâm lấn thường không phù hợp cho tình trạng trượt nặng. Chi
                                phí phẫu thuật một tầng trượt khoảng 70-80 triệu đồng, sau khi bảo hiểm y tế (BHYT) chi
                                trả 80%. Chị có thể thăm khám trực tiếp với tôi tại Trung tâm Chấn thương Chỉnh hình,
                                BVĐK Tâm Anh TP.HCM từ Thứ Hai đến Thứ Bảy hàng tuần. Tôi sẽ trực tiếp khám lâm sàng và
                                tư vấn chi tiết hơn cho chị. Nếu còn bất kỳ thắc mắc nào khác, chị có thể gọi tổng đài
                                của Hệ thống Bệnh viện Đa khoa Tâm Anh 028.7102.6789 – 093.180.6858 (Tâm Anh TP.HCM)
                                hoặc 024.3872.3872 – 024.7106.6858 (Tâm Anh Hà Nội). Hoặc chị có thể đặt lịch hẹn với
                                chuyên gia và bác sĩ BVĐK Tâm Anh để chúng tôi có thể trực tiếp thăm khám và tư vấn cho
                                chị. Nếu cần bác sĩ tư vấn thêm, chị có thể post hình ảnh, kết quả xét nghiệp, MRI,
                                X-Quang và câu hỏi của mình trong group Trung tâm Chấn thương chỉnh hình Tâm Anh
                                https://www.facebook.com/groups/ctchtamanh/ hoặc group Cơ Xương Khớp & Chấn thương thể
                                thao https://www.facebook.com/groups/395429545431166 Các bác sĩ sẽ trao đổi và tư vấn
                                cho chị nhanh hơn nhé. Trân trọng.
                            </span>
                        </h4>
                    </div>
                    <div className={cx('view-more-section')}>
                        <a className={cx('view-more')}>Xem thêm</a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ForumItem;
