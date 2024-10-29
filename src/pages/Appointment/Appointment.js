import React from 'react';
import {AContainer, AHeader, ALayout, ALeftSide, ARightSide, ARSItem, ASpace, AUnderline} from "./appointment.element";
import { IoIosArrowRoundForward } from "react-icons/io";

const Appointment = () => {
    return (
        <form>
            <ALayout>
                <ASpace/>
                <AContainer>
                    <AHeader>
                        <p>ĐĂNG KÍ KHÁM BỆNH</p>
                        <AUnderline/>
                    </AHeader>
                    <ALeftSide>
                        <h3>LƯU Ý:</h3>
                        <p>Lịch hẹn có hiệu lực sau khi <br/> có xác nhận chính thức từ <br/> Phòng khám Bệnh viện
                            Đại <br/> học Y Dược 1.</p>
                        <p>Quý khách sử dụng dịch vụ <br/> đặt hẹn trực tuyến, xin vui <br/> lòng đặt trước ít nhất là
                            <br/> 24 giờ trước khi đến khám.</p>

                        <p>
                            Trong trường hợp khẩn cấp <br/> hoặc nghi ngờ có các triệu <br/> chứng nguy hiểm, quý <br/> khách vui lòng <strong> ĐẾN
                            TRỰC <br/> TIẾP </strong> Phòng khám hoặc các <br/>trung tâm y tế gần nhất để <br/> kịp thời xử lý.
                        </p>

                        <ARightSide>
                            <ARSItem>
                                <p>Chọn địa điểm khám</p>
                                <input type='text'/>
                            </ARSItem>

                            <ARSItem>
                                <p>Chọn loại dịch vụ khám</p>
                                <input type='text'/>
                            </ARSItem>

                            <ARSItem>
                                <p>Chọn chuyên khoa</p>
                                <input type='text'/>
                            </ARSItem>

                            <ARSItem>
                                <p>Chọn bác sĩ</p>
                                <input type='text'/>
                            </ARSItem>

                            <ARSItem>
                                <p>Chọn ngày - khung giờ muốn khám</p>
                                <input type='text'/>
                            </ARSItem>

                            <ARSItem>
                                <p>Nhập tiền sử bệnh lý</p>
                                <input type='text'/>
                            </ARSItem>

                            <ARSItem>
                                <p>Nhập vấn đề về sức khoẻ </p>
                                <textarea rows="10" cols="50" ></textarea>
                            </ARSItem>
                            <ARSItem>
                                <button>TIẾP THEO</button>
                            </ARSItem>

                        </ARightSide>


                    </ALeftSide>


                </AContainer>
                <ASpace/>
            </ALayout>


        </form>
    );
};

export default Appointment;
