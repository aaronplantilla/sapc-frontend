import React, { useState } from 'react';
import {
    Container,
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {
    isDesktop,
    isMobile,
    isTablet
} from "react-device-detect";
import { useHistory } from "react-router-dom";
import landingPageLogo from '../../../assets/img/landingPageLogo.png';
import NavbarMobile from '../LandingPage/NavbarMobile.js';
import NavbarMobileAuth from '../LandingPage/NavbarMobileAuth.js';
import Footer from '../LandingPage/Components/Footer.js';

const ScholarshipPage = ({ authenticated }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const history = useHistory();
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [navbarMobile, setNavbarMobile] = useState(false);
    const [seeMore, setSeeMore] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDrop = (e) => setDropdownOpen(!dropdownOpen);
    const toggleDropClose = (e) => setDropdownOpen(false);

    const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
    const toggleDrop2 = (e) => setLoginDropdownOpen(!loginDropdownOpen);
    const toggleDropClose2 = (e) => setLoginDropdownOpen(false);

    const [lmsDropdownOpen, setLmsDropdownOpen] = useState(false);
    const toggleDrop3 = (e) => setLmsDropdownOpen(!lmsDropdownOpen);
    const toggleDropClose3 = (e) => setLmsDropdownOpen(false);

    const handleScroll = () => {
        setNavbarMobile(true)
    }

    return (
        <Container fluid={true} className={isDesktop ? "w-100 px-0 landingPage admission-image" : "w-100 px-0 landingPage overflow-hidden"}>
            <div></div>
            {isDesktop ?
                <Navbar expand="md lg" className="w-100 py-0 navbarClass">
                    {/* <NavbarToggler onClick={toggle} /> */}
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar className="justify-content-between w-100 landingPageNav">
                            <NavItem className="w-100 text-center h-100">
                                <NavLink className="navlinkButton font-weight-bolder px-5" onClick={() => history.push('/')}>HOME</NavLink>
                            </NavItem>
                            <NavItem className="w-100 text-center h-100">
                                <NavLink className="navlinkButton font-weight-bolder px-4" onClick={() => history.push('/about-us')}>ABOUT US</NavLink>
                            </NavItem>
                            <NavItem className="w-100 text-center h-100">
                                <NavLink className="navlinkButton font-weight-bolder px-5" onClick={() => history.push('/academics')}>ACADEMICS</NavLink>
                            </NavItem>
                            <div className="w-100 d-flex justify-content-center">
                                <img src={landingPageLogo} className="landingPageLogo" style={{ width: "10rem" }} />
                            </div>
                            <Dropdown nav isOpen={dropdownOpen} onMouseEnter={toggleDrop} onMouseLeave={toggleDropClose} className="w-100 text-center h-100">
                                <DropdownToggle nav caret className="navlinkButton font-weight-bolder px-5">ADMISSION</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem className="font-weight-bolder text-danger-edit" onClick={() => history.push('/admission-page')}>REQUIREMENTS</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem className="font-weight-bolder text-danger-edit" onClick={() => history.push('/scholarship-page')}>SCHOLARSHIP</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown nav isOpen={lmsDropdownOpen} onMouseEnter={toggleDrop3} onMouseLeave={toggleDropClose3} className="w-100 text-center h-100">
                                <DropdownToggle nav caret className="navlinkButton font-weight-bolder px-5">LMS</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem className="font-weight-bolder text-danger-edit" onClick={() => history.push(window.open("http://52.74.221.30/sapc/?fbclid=IwAR0Cb6NDp56odfRENGOl1Tr47ztbf0Ac38ZyBHCWCfIIyg2-ZcbmTvePYtw", "_blank"))}>LIKHA ONLINE</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem className="font-weight-bolder text-danger-edit" onClick={() => history.push(window.open("https://app.seesaw.me/#/student/login?fbclid=IwAR2GIW7rGIvu4SWjVDB2gmPe7riyw3smZnfGhWYOE-fDhw22Fr_RI3KUXX8", "_blank"))}>SEESAW</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem className="font-weight-bolder text-danger-edit" onClick={() => history.push(window.open("https://www.canva.com/", "_blank"))}>CANVA</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown nav isOpen={loginDropdownOpen} onMouseEnter={toggleDrop2} onMouseLeave={toggleDropClose2} className="w-100 text-center h-100">
                                <DropdownToggle nav caret className="navlinkButton font-weight-bolder px-5">LOGIN</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem className="font-weight-bolder text-danger-edit" onClick={() => history.push(window.open("http://mail.sapc.edu.ph/"))}>UGNAI</DropdownItem>
                                    <DropdownItem divider />
                                    {authenticated ?
                                        <DropdownItem className="font-weight-bolder text-danger-edit" onClick={() => history.push('/portal')}>PORTAL</DropdownItem>
                                        :
                                        <DropdownItem className="font-weight-bolder text-danger-edit" onClick={() => history.push('/login')}>SINAG</DropdownItem>
                                    }
                                </DropdownMenu>
                            </Dropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
                :
                ""
            }

            {isMobile ?

                navbarMobile ?

                    authenticated ?

                        <NavbarMobileAuth setNavbarMobile={setNavbarMobile} navbarMobile={navbarMobile} />
                        :
                        <NavbarMobile setNavbarMobile={setNavbarMobile} navbarMobile={navbarMobile} />
                    : ""
                : ""}
            {isMobile ? <div onClick={handleScroll} style={{ position: "absolute", top: "10px", right: "10px", zIndex: "9999" }}>
                <div className="bar-menu"></div>
                <div className="bar-menu"></div>
                <div className="bar-menu"></div>
            </div> :
                isTablet ?
                    <div onClick={handleScroll} style={{ position: "absolute", top: "10px", right: "10px", zIndex: "9999" }}>
                        <div className="bar-menu"></div>
                        <div className="bar-menu"></div>
                        <div className="bar-menu"></div>
                    </div>
                    :
                    ""
            }

            <Container className="pt-5 mt-5 mb-5">
                <h3 className={isDesktop ? "font-weight-bolder text-danger-edit mb-5" : "font-weight-bolder text-danger-edit mb-5 text-left"}>TYPES OF SCHOLARSHIP</h3>
                <p>
                    <strong>1. Sanghaya</strong>
                    <br />
                    Academic Scholarships
                    <br /><br />
                    <ol>
                        <li>1.1 1st Honors - 100% discount on tuition fees</li>
                        <li>1.2 2nd Honors - 50% discount on tuition fees</li>
                        <li>1.3 3rd Honors - 20% discount on tuition fees</li>
                    </ol>
                </p>

                <p>
                    <strong>2. Kapamilya Discount</strong>
                    <br />
                    Loyalty discounts for alumni, SAPC employee benefit, family discount
                    <br /><br />
                    <ol>
                        <li>2.1 <strong>Alumni Discount</strong> - 20% discount on tuition fees</li>
                        <li>2.2 <strong>Family Discount</strong> - When 2 or more siblings are enrolled in SAPC in the same term:
                            <ol>
                                <li>2.2.1 20% - 2nd child</li>
                                <li>2.2.2 40% - 3rd child</li>
                                <li>2.2.3 60% - 4th child</li>
                            </ol>
                        </li>
                        <li>2.3 <strong>SAPC Employee Benefit</strong> - for SAPC employees with children enrolled at SAPC
                            <ol>
                                <li>2.3.1 1st child - 100% discount on tuition fees</li>
                                <li>2.2.2 2nd child - 80%</li>
                                <li>2.2.3 3rd child - 60%</li>
                            </ol>
                        </li>
                    </ol>
                </p>

                <p>
                    <strong>3. Kumpas Scholarships</strong>
                    <br />
                    For the performing arts (50% discount on tuition fees)
                    <br /><br />
                    <ol>
                        <li>3.1 Instruments</li>
                        <li>3.2 Voice</li>
                        <li>3.3 Dance</li>
                    </ol>
                </p>

                <p>
                    <strong>4. SAPC Raiders</strong>
                    <br />
                    Athletic Scholarship for student athletes
                    <br /><br />
                    <ol>
                        <li>4.1 Palarong Pambansa Athlete - 100% discount</li>
                        <li>4.2 STCAA Athlete - 75% discount</li>
                        <li>4.3 One Laguna Athlete - 50% discount</li>
                        <li>4.4 Provincial Meet Athlete - 20% discount</li>
                    </ol>
                </p>
            </Container>
            <Footer />
        </Container>
    )

}

export default ScholarshipPage;