import React from 'react';
import {
    Deco2, Deco3, Deco4,
    LoginButton,
    LoginContainer, LoginDeco, LoginDeco2,
    LoginHeader,
    LoginItem, LoginItemAndHeader,
    LoginItemList,
    LoginLayout,
    LoginLink
} from "./login.element";

const Login = () => {
    return (
        <form>
            <LoginLayout>
                <LoginContainer>
                    <LoginDeco>
                        <Deco2>
                        </Deco2>
                    </LoginDeco>


                    <LoginItemAndHeader>
                        <LoginHeader>
                            Đăng Nhập
                        </LoginHeader>

                        <LoginItemList>

                            <LoginItem>
                                <p>Email</p>
                                <input autoFocus type='email'/>
                            </LoginItem>
                            <LoginItem>
                                <p>Mật khẩu</p>
                                <input type='password'/>
                            </LoginItem>
                            <LoginButton>
                                Đăng Nhập
                            </LoginButton>
                            <LoginLink>
                                Quên mật khẩu
                            </LoginLink>
                        </LoginItemList>

                    </LoginItemAndHeader>


                    <LoginDeco2>
                        <Deco4>
                        </Deco4>
                    </LoginDeco2>
                </LoginContainer>

            </LoginLayout>
        </form>
    );
};

export default Login;
