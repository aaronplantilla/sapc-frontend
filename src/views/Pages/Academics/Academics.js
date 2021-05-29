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
    DropdownItem,
    Row,
    Col,
    TabContent,
    TabPane
} from 'reactstrap';
import {
    isDesktop,
    isMobile,
    isTablet
} from "react-device-detect";
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import NavbarMobile from '../LandingPage/NavbarMobile.js';
import NavbarMobileAuth from '../LandingPage/NavbarMobileAuth.js';
import landingPageLogo from '../../../assets/img/landingPageLogo.png';
import academicsBase from '../../../assets/img/academics-base-with-text.jpg';
import classnames from 'classnames';
import BasicAcads from './Components/BasicAcads.js'
import TertiaryAcads from './Components/TertiaryAcads.js'
import TechnicalAcads from './Components/TechnicalAcads.js'
import Footer from '../LandingPage/Components/Footer.js';

const Academics = ({ authenticated }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const history = useHistory();
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [navbarMobile, setNavbarMobile] = useState(false);
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

    const [activeTab, setActiveTab] = useState('1');

    const toggleTab = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <Container fluid={true} className="w-100 px-0 landingPage overflow-hidden">
            {isDesktop ?
                <Navbar expand="md lg" className="w-100 py-0 navbarClassTrans">
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

            <Row>
                <Col lg="12" md="12" xs="12" className="px-0 w-100 justify-content-center align-items-center d-flex">
                    <img src={academicsBase} className="w-100" />
                </Col>
            </Row>

            <Nav tabs className={isDesktop ? "" : "align-items-center d-flex px-0 w-100 justified-content-center"}>
                <NavItem className={isDesktop ? "ml-auto" : ""}>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggleTab('1'); }} id="basic-acads"
                    >
                        {isDesktop ? <strong>BASIC EDUCATION</strong> : <span className="font-weight-bolder">BASIC</span>}
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggleTab('2'); }} id="tertiary-acads"
                    >

                        {isDesktop ? <strong>TERTIARY EDUCATION</strong> : <strong>TERTIARY</strong>}
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggleTab('3'); }} id="technical-acads"
                    >

                        {isDesktop ? <strong>TECHNICAL EDUCATION</strong> : <strong>TECHNICAL</strong>}
                    </NavLink>
                </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <BasicAcads />
                </TabPane>

                <TabPane tabId="2">
                    <TertiaryAcads />
                </TabPane>

                <TabPane tabId="3">
                    <TechnicalAcads />
                </TabPane>
            </TabContent>
            <Footer />
        </Container>
    );
}

export default Academics;