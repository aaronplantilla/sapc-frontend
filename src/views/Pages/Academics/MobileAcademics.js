import {
    Container,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
    TabContent,
    TabPane
} from 'reactstrap';
import {
    isMobile,
    isTablet
} from "react-device-detect";
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import NavbarMobile from '../LandingPage/NavbarMobile.js';
import NavbarMobileAuth from '../LandingPage/NavbarMobileAuth.js';
import academicsBase from '../../../assets/img/academics-base-with-text.jpg';
import classnames from 'classnames';
import MobileBasicAcads from './Components/MobileBasicAcads.js'
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
            {
                isMobile ?

                    navbarMobile ?

                        authenticated ?

                            <NavbarMobileAuth setNavbarMobile={setNavbarMobile} navbarMobile={navbarMobile} />
                            :
                            <NavbarMobile setNavbarMobile={setNavbarMobile} navbarMobile={navbarMobile} />
                        : ""
                    : ""
            }

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

            <Nav tabs className="align-items-center d-flex px-0 w-100 justified-content-center">
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggleTab('1'); }} id="basic-acads"
                    >
                        <span className="font-weight-bolder">BASIC</span>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggleTab('2'); }} id="tertiary-acads"
                    >

                        <strong>TERTIARY</strong>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggleTab('3'); }} id="technical-acads"
                    >

                        <strong>TECHNICAL</strong>
                    </NavLink>
                </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <MobileBasicAcads />
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