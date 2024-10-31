import MiniBlogItem from '../../components/MiniBlogItem';
import classNames from 'classnames/bind';
import styles from './BlogInfo.module.scss';
import PageTitle from '../../components/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-regular-svg-icons';
import Button from '../../components/Button';
import CommentItem from '../../components/CommentItem';

const cx = classNames.bind(styles);
function BlogInfo() {
    const blogs = {
        description: `Sốt là tình trạng nhiệt độ cơ thể tăng cao, xảy ra khi bộ điều nhiệt của cơ thể (nằm ở vùng dưới đồi, một vùng nhỏ ở trung tâm bộ não, giữa tuyến yên và đồi thị) điều chỉnh khiến nhiệt độ cao hơn mức bình thường, chủ yếu để phản ứng với tình trạng nhiễm trùng.
        Sau chuyển phôi, cơ thể người phụ nữ sẽ có những biến đổi nhất định cho thấy phôi làm tổ thành công. Từ những dấu hiệu nhẹ cho đến một số triệu chứng nguy hiểm hơn, ảnh hưởng đến khả năng thành công khi làm IVF. (1)
        Để giải đáp cho thắc mắc ​​“sau khi chuyển phôi bị sốt có sao không?”, bác sĩ Nhật Khang giải thích việc đánh giá mức độ nghiêm trọng của sốt sau chuyển phôi nên dựa vào nguyên nhân dẫn đến sốt. Một trong những nguyên nhân có thể là:`,
        image: 'https://tamanhhospital.vn/wp-content/uploads/2021/03/sanh-cho-rong-rai-f.jpg',
        content: `TS.BS Lâm Văn Hoàng – Giám đốc Trung tâm Kiểm soát cân nặng và Điều trị béo phì Hệ thống Bệnh viện Đa khoa Tâm Anh, Trưởng khoa Nội tiết – Đái tháo đường Bệnh viện Đa khoa Tâm Anh TP.HCM cho biết, nhiều người bệnh đăng ký lịch khám từ 3-5 ngày trước, từ các tỉnh miền Trung, miền Tây, Đông Nam Bộ…. Lịch các phòng khám của bác sĩ dày đặc. Hơn 1 tuần qua, mỗi ngày, Trung tâm đều làm việc đến hơn 18 giờ tối để khám và điều trị cho người bệnh.
        Theo bác sĩ Hoàng, nhiều người bệnh đến khám, chia sẻ trước đây họ thấy mình thừa cân nhưng không biết béo phì, cũng không biết đó là bệnh để đi khám, không biết đi khám ở chuyên khoa nào, chỉ biết tự áp dụng các phương pháp giảm cân và đến các cơ sở để theo liệu trình giảm cân nhưng không thành công.
        Sau khi biết Bệnh viện Đa khoa Tâm Anh có Trung tâm Kiểm soát cân nặng và Điều trị béo phì, đã điều trị thành công nhiều ca bệnh; đồng thời với tính an toàn, chất lượng khi điều trị tại bệnh viện uy tín nên nhiều người tìm đến trực tiếp để khám và điều trị.
        Nhiều người đi khám tại Trung tâm Kiểm soát cân nặng và Điều trị béo phì hệ thống Bệnh viện Đa khoa Tâm Anh.
        “Đặc biệt, phòng điều trị công nghệ cao của Trung tâm luôn kín lịch từ một tuần trước. Người bệnh đăng ký lịch điều trị công nghệ cao trong ngày hoặc trước đó 1 ngày gần như không còn chỗ”, bác sĩ Hoàng nói. Chưa kể, nhiều người muốn kiểm soát cân nặng, muốn vòng eo, hông săn chắc hơn nên cũng đến khám với bác sĩ nội tiết và sau đó điều trị bằng công nghệ cao.
        Hơn 6g tối ngày 2.10, phòng Điều trị công nghệ cao Trung tâm Kiểm soát cân nặng và Điều trị béo phì mới dọn dẹp, tắt đèn, kết thúc một ngày làm việc. Chị N.P.L. (37 tuổi, TP.HCM) là người bệnh cuối cùng trong ngày, vừa kết thúc lần điều trị đầu tiên bằng thiết bị công nghệ cao. Trước đó, chị đã từng khám tại Trung tâm Kiểm soát cân nặng và Điều trị béo phì.
        Bác sĩ chẩn đoán chị L. béo phì độ 2, gan nhiễm mỡ độ 2. Sau 1 tuần điều trị nội khoa, chị đã giảm 1 kg nên quay lại tái khám và đăng ký điều trị bằng công nghệ cao. Nhưng lịch trống không còn. Chị ngậm ngùi đi về, phải tiếp tục sắp xếp công việc và các lịch họp dày đặc để quay lại lần thứ hai trong tuần để được điều trị bằng công nghệ cao.
        Thạc sĩ bác sĩ Châu Thị Trang – Trung tâm Kiểm soát cân nặng và Điều trị béo phì, điều trị bằng công nghệ đông hủy mỡ cho chị L. Bác sĩ Trang đo chiều cao và chu vi vùng cần điều trị, độ dày nếp gấp mỡ trước khi điều trị.
        Bác sĩ Trang cho biết, công nghệ này theo cơ chế nhiệt lạnh từ 5-10 độ C làm tổn thương, hoại tử các tế bào mỡ và đào thải ra khỏi cơ thể. Phương pháp này không xâm lấn, đã được Cục quản lý Thực phẩm và Dược phẩm Hoa Kỳ (FDA) công nhận. Bác sĩ sử dụng kỹ thuật đặt đầu máy lạnh vào vị trí cần điều trị. Trong quá trình điều trị, người bệnh vẫn có thể sinh hoạt một số hoạt động tại giường.
        Thạc sĩ bác sĩ Châu Thị Trang đang điều trị giảm mỡ bằng công nghệ cao tại vùng bụng dưới bên trái và bên phải của một người bệnh.
        Anh H.V.P. (32 tuổi) cũng từ Bình Thuận vào TP.HCM khám béo phì. Với BMI 44 (kg/m2), vòng eo 100 cm, cùng các kết quả siêu âm, xét nghiệm, bác sĩ chẩn đoán anh P. béo phì độ 3, gan nhiễm mỡ độ 3. Anh P. được điều trị nội khoa.
        Sau khi được hướng dẫn chế độ ăn uống, vận động, anh đặt lịch khám và điều trị bằng công nghệ cao. TS.BS Trần Hữu Thanh Tùng khám và điều trị bằng công nghệ đông hủy mỡ để giảm mỡ vùng bụng dưới cho anh P. Trong quá trình thực hiện, anh P. không cảm thấy khó chịu, không đau vùng điều trị. “Hy vọng kết hợp với điều trị nội khoa, chế độ ăn uống, tập luyện, tôi có thể giảm mỡ, giảm cân, cải thiện bệnh. Tôi cũng đã đặt lịch 2 tuần sau để tái khám và tiếp tục điều trị bằng công nghệ này”, anh P. nói.
        Anh M.P.D. (36 tuổi, Đồng Nai) cũng đến khám tại Trung tâm Kiểm soát cân nặng và Điều trị béo phì với mong muốn kiểm soát cân nặng, bảo vệ sức khỏe. Theo anh, thừa cân béo phì kéo theo nhiều bệnh nên anh luôn cố gắng kiểm soát trong mức cân nặng chuẩn.
        Anh P. khám với bác sĩ nội tiết và mong muốn được điều trị công nghệ đông hủy mỡ ở vùng bụng. Anh P. nói, dù không béo phì nhưng vùng bụng của anh rất khó giảm dù ăn uống lành mạnh, vận động 2-3 lần/tuần, vì đó là lớp mỡ cứng nhiều năm. Sau khi được điều trị bằng công nghệ này, anh cảm thấy hơi châm chích ngoài da, không sưng đỏ hay khó chịu.
        Theo bác sĩ Tùng, đây là phương pháp an toàn, dễ thực hiện, rất hiếm xảy ra biến chứng. Tuy nhiên, hiệu quả điều trị không nhìn thấy ngay tức thì. Sau 3- 4 tuần, người bệnh có thể thấy hiệu quả, đỉnh điểm của sự thay đổi là 8-12 tuần. Lúc này thấy rõ nhất sự thay đổi ở khu vực điều trị, lượng mỡ vùng điều trị giảm khoảng 20-25%.
        TS.BS Trần Hữu Thanh Tùng đang điều trị giảm mỡ vùng bụng cho người bệnh bằng công nghệ cao.
        Bác sĩ Tùng cho biết thêm, vùng điều trị do tác động của lực hút và nhiệt lạnh nên đỏ nhẹ, sưng tấy nhẹ, có thể phản ứng viêm, nhưng sau 2-3 ngày trở lại bình thường. Có người bệnh điều trị một lần một vùng, có người bệnh điều trị nhiều lần, nhiều vùng, căn cứ mức độ béo phì và vị trí cần điều trị. Tùy thể trạng, tùy vị trí cần điều trị nên thời gian điều trị và số lần điều trị khác nhau ở mỗi người.
        “Để điều trị bằng công nghệ này, độ dày mỡ dưới da của người bệnh phải từ 15 cm trở lên. Người bệnh viêm da dị ứng, vảy nến, vùng da chảy não… thì không phù hợp để điều trị bằng công nghệ này. Đây chỉ là một trong những phương pháp điều trị béo phì. Ngoài ra, người bệnh cần chế độ dinh dưỡng, tập luyện phù hợp để duy trì dáng vóc”, bác sĩ Tùng nói.
        TS.BS Hoàng cho biết, việc kết hợp tư vấn, các liệu pháp tâm lý, chế độ dinh dưỡng, tập luyện, điều trị nội khoa và áp dụng công nghệ cao giúp người bệnh rút ngắn thời gian, đạt được hiệu quả tối ưu trong điều trị. Kết hợp với vận động để cơ thể săn chắc, điều trị công nghệ cao là một phương pháp hỗ trợ, giúp tạo dáng thẩm mỹ. Người bệnh giảm cân, giảm mỡ vùng điều trị theo mong muốn, cân đối vóc dáng.
        Điều trị bằng công nghệ cao giúp người bệnh giảm vùng mỡ cứng đầu, khó có thể loại bỏ chỉ bằng chế độ ăn kiêng và tập thể dục. Điều này không chỉ điều trị cho người bệnh béo phì mà còn đáp ứng nhu cầu thực tiễn trong chăm sóc sức khỏe cho người có nhu cầu kiểm soát cân nặng, giảm cân, làm đẹp khoa học, an toàn.`,
    };

    // Cập nhật hàm renderDescription để thêm khoảng trắng đầu dòng
    const renderDescription = () => {
        return blogs.description.split('\n').map((line, index) => (
            <h4 className={cx('blog-description')} key={index}>
                {/* Thêm khoảng trắng đầu dòng */}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{line.trim()}</span>
            </h4>
        ));
    };

    // Cập nhật hàm renderContent để thêm khoảng trắng đầu dòng
    const renderContent = () => {
        return blogs.content.split('\n').map((line, index) => (
            <h4 className={cx('blog-content')} key={index}>
                {/* Thêm khoảng trắng đầu dòng */}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{line.trim()}</span>
            </h4>
        ));
    };

    return (
        <div className={cx('wrapper')}>
            <PageTitle>TIN TỨC</PageTitle>
            <div className={cx('blog-content-wrapper')}>
                <div className={cx('blog-wrapper')}>
                    <h4 className={cx('blog-title')}>
                        <span>Sau chuyển phôi bị sốt có sao không? Bao nhiêu độ là nguy hiểm?</span>
                    </h4>
                    <div className={cx('blog-info-wrapper')}>
                        <FontAwesomeIcon className={cx('blog-info-user-icon')} icon={faUser} />
                        <h4 className={cx('blog-owner')}>
                            <span>Thắng Hoàng</span>
                        </h4>
                        <FontAwesomeIcon className={cx('blog-info-calendar-icon')} icon={faCalendar} />
                        <h4 className={cx('blog-post-date')}>
                            <span>01-04-2024</span>
                        </h4>
                    </div>
                    <hr className={cx('list-blog-separator')}></hr>
                    <div className={cx('blog-content-container')}>
                        {renderDescription()}
                        <img className={cx('blog-image')} src={blogs.image} alt="Blog Image"></img>
                        {renderContent()}
                    </div>
                    <div className={cx('comment-title-wrapper')}>
                        <h4 className={cx('comment-title')}>
                            <span>Bình luận</span>
                        </h4>
                    </div>
                    <hr className={cx('list-blog-separator')}></hr>
                    <div className={cx('comment-section')}>
                        <img
                            className={cx('user-avatar')}
                            src="https://cdn.pixabay.com/photo/2021/03/20/11/57/woman-6109643_1280.jpg"
                            alt="User Avatar"
                        ></img>
                        <textarea
                            name="comment"
                            className={cx('comment')}
                            rows="4"
                            cols="50"
                            placeholder="Viết bình luận..."
                        ></textarea>
                        <Button submitThree>Gửi</Button>
                    </div>
                    <CommentItem></CommentItem>
                    <CommentItem></CommentItem>
                    <CommentItem></CommentItem>
                    <CommentItem></CommentItem>
                    <CommentItem></CommentItem>
                </div>
                <div className={cx('list-blog-wrapper')}>
                    <h4 className={cx('list-blog-title')}>
                        <span>BÀI VIẾT MỚI</span>
                    </h4>
                    <hr className={cx('list-blog-separator')}></hr>
                    <MiniBlogItem></MiniBlogItem>
                    <MiniBlogItem></MiniBlogItem>
                    <MiniBlogItem></MiniBlogItem>
                    <MiniBlogItem></MiniBlogItem>
                    <MiniBlogItem></MiniBlogItem>
                </div>
            </div>
        </div>
    );
}

export default BlogInfo;
