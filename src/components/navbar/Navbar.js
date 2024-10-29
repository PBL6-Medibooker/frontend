import React, {useEffect, useState} from "react";
import {Button} from '../../globalStyles';
import {
    MobileIcon,
    Nav, Nav2,
    NavbarContainer,
    NavBtnLink,
    NavItem,
    NavItemBtn,
    NavLinks,
    NavLogo,
    NavMenu, GroupButtonLink, NavLinks2, NavbarContainer2, NavItem2, NavBtnLink2
} from "./navbar.element";
import {FaBars, FaTimes} from "react-icons/fa";
import {IconContext} from "react-icons";
import {IoPersonOutline} from "react-icons/io5";
import {RiQuestionMark} from "react-icons/ri";
import {MdOutlineCalendarMonth} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import {assets} from "../../assets/assets_fe/assets";


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const navigate = useNavigate();

    const [button, setButton] = useState(true);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{color: 'fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo>
                            <img src={assets.MedicalLogo} alt="Medical Logo" className="logo-image"/>
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </MobileIcon>

                        <GroupButtonLink>
                            <div>
                                <NavMenu>
                                    <NavItemBtn>
                                        {button ? (
                                            <NavBtnLink2>
                                                <Button onClick={()=> navigate('/register')} primary>ĐĂNG KÍ</Button>
                                            </NavBtnLink2>
                                        ) : (
                                            <NavBtnLink2 to='/sign-up'>
                                                <Button onClick={closeMobileMenu} fontBig primary>
                                                    ĐĂNG KÍ
                                                </Button>
                                            </NavBtnLink2>
                                        )}
                                    </NavItemBtn>

                                    <NavItemBtn>
                                        {button ? (
                                            // <NavBtnLink to='/login'>
                                            //     <Button onClick={} primary>ĐĂNG NHẬP</Button>
                                            // </NavBtnLink>
                                            <NavBtnLink2>
                                                <Button onClick={()=> navigate('/login')} primary>ĐĂNG NHẬP</Button>
                                            </NavBtnLink2>
                                        ) : (
                                            <NavBtnLink2 to='/login'>
                                                <Button onClick={closeMobileMenu} fontBig primary>
                                                    ĐĂNG NHẬP
                                                </Button>
                                            </NavBtnLink2>
                                        )}
                                    </NavItemBtn>
                                </NavMenu>
                            </div>

                            <div>
                                <NavMenu ocClick={handleClick} click={click}>
                                    <NavItem>
                                        <NavLinks to='/'>
                                            Dành cho khách hàng <IoPersonOutline/>
                                        </NavLinks>
                                    </NavItem>

                                    <NavItem>
                                        <NavLinks to='/'>
                                            Hỏi đáp <RiQuestionMark/>
                                        </NavLinks>
                                    </NavItem>

                                    <NavItem>
                                        <NavLinks onClick={()=>navigate('/appointment')}>
                                            Đặt lịch khám <MdOutlineCalendarMonth/>
                                        </NavLinks>
                                    </NavItem>
                                </NavMenu>
                            </div>
                        </GroupButtonLink>

                    </NavbarContainer>
                </Nav>

                <Nav2>
                    <NavbarContainer2>
                        <NavMenu ocClick={handleClick} click={click}>

                            {/*<NavItem2>*/}
                            {/*    <NavLinks2 onClick={() => navigate('/')}>*/}
                            {/*        GIỚI THIỆU*/}
                            {/*    </NavLinks2>*/}
                            {/*</NavItem2>*/}
                            {/*<NavItem2>*/}
                            {/*    <NavLinks2 onClick={() => navigate('/')}>*/}
                            {/*        GIỚI THIỆU*/}
                            {/*    </NavLinks2>*/}
                            {/*</NavItem2>*/}

                            <NavItem2>
                                <NavLinks2 onClick={() => navigate('/')}>
                                    GIỚI THIỆU
                                </NavLinks2>
                            </NavItem2>

                            <NavItem2>
                                <NavLinks2 onClick={() => navigate('/specialities')}>
                                    CHUYÊN KHOA
                                </NavLinks2>
                            </NavItem2>


                            <NavItem2>
                                <NavLinks2 onClick={() => navigate('/doctors')}>
                                    CHUYÊN GIA - BÁC SĨ
                                </NavLinks2>
                            </NavItem2>

                            <NavItem2>
                                <NavLinks2 onClick={() => navigate('/')}>
                                    DỊCH VỤ ĐẶC BIỆT
                                </NavLinks2>
                            </NavItem2>
                            <NavItem2>
                                <NavLinks2 to='/'>
                                    TIỆN NGHI
                                </NavLinks2>
                            </NavItem2>

                            <NavItem2>
                                <NavLinks2 to='/'>
                                    THÀNH TỰU
                                </NavLinks2>
                            </NavItem2>

                            <NavItem2>
                                <NavLinks2 to='/'>
                                    TIN TỨC
                                </NavLinks2>
                            </NavItem2>

                            <NavItem2>
                                <NavLinks2 to='/'>
                                    LIÊN HỆ
                                </NavLinks2>
                            </NavItem2>

                            <NavItem2>
                                <div className="search-container">
                                    <form action="/search" method="get">
                                        <input className="search" id="searchleft" type="search" name="q"
                                               placeholder="Search"/>
                                        <label className="button searchbutton" htmlFor="searchleft"><span
                                            className="mglass">&#9906;</span></label>
                                    </form>
                                </div>
                            </NavItem2>
                        </NavMenu>
                    </NavbarContainer2>
                </Nav2>
            </IconContext.Provider>

        </>
    )
}

export default Navbar;
