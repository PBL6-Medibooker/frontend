import React from 'react';
import {
    Deco,
    RBody,
    RBodyL,
    RBodyLItem,
    RBodyR,
    RBodyRItem,
    RButton, RContent,
    RHeader,
    RLayout,
    RSpace
} from "./register.element";
import {Deco2} from "../Login/login.element";

const Register = () => {
    return (
        <form>
            <RLayout>
                <RHeader>

                    <Deco>
                        <h1>Đăng kí tài khoản</h1>
                    </Deco>
                </RHeader>
                <RBody>
                    <RContent>
                        <RSpace/>
                        <RBodyL>
                            <RBodyLItem>
                                <p>Họ và tên</p>
                                <input type='text' autoFocus/>
                            </RBodyLItem>
                            <RBodyLItem>
                                <p>Mật khẩu</p>
                                <input type='password'/>
                            </RBodyLItem>
                            <RBodyLItem>
                                <p>Xác nhận lại mật khẩu</p>
                                <input type='password'/>
                            </RBodyLItem>


                        </RBodyL>
                        <RBodyR>
                            <RBodyRItem>
                                <p>Email</p>
                                <input type='email'/>
                            </RBodyRItem>
                            <RBodyRItem>
                                <p>Số điện thoại</p>
                                <input type='number'/>
                            </RBodyRItem>
                            <RBodyRItem>
                                <p>Bạn là</p>
                                <select>
                                    <option>Người dùng</option>
                                    <option>Bác sĩ</option>
                                </select>

                            </RBodyRItem>

                        </RBodyR>
                        <RSpace/>
                    </RContent>

                    <RButton>
                        <button>Đăng ký</button>
                    </RButton>
                </RBody>


            </RLayout>


        </form>
    );
};

export default Register;
