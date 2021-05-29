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
    DropdownItem,
    Row,
    Col,
    Label,
    Card,
    Button,
    CardImg,
    CardText,
    CardDeck,
    CardBody,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';

import { useHistory } from "react-router-dom";
import landingPageLogo from '../../../../assets/img/landingPageLogo.png';
import sapcYellow from '../../../../assets/img/SAPC-Logo-yellow.png';
import flatEllipse from '../../../../assets/img/flat-ellipse.png';
import facebookIcon from '../../../../assets/img/facebook-icon.png';
import twitterIcon from '../../../../assets/img/twitter-icon.png';
import carousel1 from '../../../../assets/img/carousel-1.jpg';
import carousel2 from '../../../../assets/img/carousel-2.jpg';
import carousel3 from '../../../../assets/img/carousel-3.jpg';
import carouselMobile1 from '../../../../assets/img/carousel-mobile-1.jpg';
import carouselMobile2 from '../../../../assets/img/carousel-mobile-2.jpg';
import carouselMobile3 from '../../../../assets/img/carousel-mobile-3.jpg';
import basic1 from '../../../../assets/img/basic-1.jpg';
import tertiary1 from '../../../../assets/img/tertiary-1.jpg';
import tesda1 from '../../../../assets/img/tesda-1.jpg';
import news1 from '../../../../assets/img/news-1.png';
import news2 from '../../../../assets/img/news-2.png';
import news3 from '../../../../assets/img/news-3.png';
import NavbarMobile from '../NavbarMobile.js';
import NavbarMobileAuth from '../NavbarMobileAuth.js';
import {
    isDesktop,
    isMobile,
    isTablet
} from "react-device-detect";

const Footer = () => {
    return (
        <div>
            {isDesktop ?
                <img src={landingPageLogo} className="footerLogoSAPC" style={{ width: "15rem" }} style={{ width: "265px", marginLeft: "-12px" }} />
                : ""}
            <Row className={isDesktop ? "mx-0 px-0 bg-danger-edit h-100 justify-content-center d-flex align-items-center text-center py-5 px-3 footerClassTrans" : "mx-0 px-0 bg-danger-edit h-100 justify-content-center d-flex align-items-center text-center py-5 px-3 footerClass"}>

                {isMobile ? <img src={sapcYellow} className={isMobile ? "footerLogo pb-4" : "footerLogo"} style={isMobile ? { width: "100px" } : { width: "150px" }} /> : ""}

                <Col lg="3" md="3" xs="12" className={isDesktop ? "ml-5" : "pb-5"}>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <p className="footer-sapc mb-0 text-light">SAN ANTONIO DE PADUA COLLEGE</p>
                        <img src={flatEllipse} className="w-100" />
                        <p className="footer-foundation text-light my-0">Foundation of Pila, Laguna, Inc.</p>
                    </div>
                </Col>

                <Col lg="2" md="2" xs="12" className={isDesktop ? "pb-3" : "pb-5"}>
                    <span className="footer-foundation text-light my-0 font-weight-bolder"><strong>GET IN TOUCH</strong></span>
                    <br />
                    <a href="https://www.facebook.com/san.antonio.de.padua.college" target="_blank"><img src={facebookIcon} style={{ width: "40px" }} className="my-1 mx-1 zooming-transition" /></a>
                    <a href="https://twitter.com/sapcfoundation" target="_blank"><img src={twitterIcon} style={{ width: "40px" }} className="my-1 mx-1 zooming-transition" /></a>
                </Col>

                <Col lg="4" md="4" xs="12" className={isDesktop ? "text-left py-2" : "text-center py-2"}>
                    <span className="footer-foundation text-warning-edit my-0"><strong>&#169; sapc.edu.ph</strong></span>
                    <br />
                    <span className="footer-foundation text-light my-0">All website content is owned and copyrighted by San Antonio De Padua College Foundation, Inc. and/or its respective source unless otherwise stated.</span>
                </Col>
            </Row>

            <Row className="" className={isDesktop ? "mx-0 px-0 bg-danger-edit h-100 justify-content-center d-flex footerClassTrans" : "mx-0 px-0 bg-danger-edit h-100 justify-content-center d-flex footerClass"}>

                <Col lg="2" md="2" xs="12" className={isDesktop ? "pb-3" : "pb-3"}>
                    <span className="footer-foundation text-light my-0 font-weight-bolder "><strong>CONTACT US:</strong></span>
                    <br /><br />
                    <span className="footer-foundation text-light my-0">
                        <strong>For inquiries and information contact:</strong>
                        <br />
                        (049)559-0501
                        <br />
                        info@sapc.edu.ph
                        <br /><br />
                        <strong>School registrar:</strong>
                        <br />
                        registrar@sapc.edu.ph
                        <br />
                        (049)566-7258
                    </span>
                </Col>

                <Col lg="2" md="2" xs="12" className={isDesktop ? "pb-3" : "pb-3"}>
                    <br /><br />
                    <span className="footer-foundation text-light my-0">
                        <strong>Billing and payments:</strong>
                        <br />
                        cashier@sapc.edu.ph
                        <br />
                        (049)559-0501
                        <br />
                        0917-703-9130
                        <br /><br />
                        <strong>Security services:</strong>
                        <br />
                        0917-144-6920 (calls only)
                    </span>
                </Col>

                <Col lg="2" md="2" xs="12" className={isDesktop ? "pb-3" : "pb-3"}>
                    <br /><br />
                    <span className="footer-foundation text-light my-0">
                        <strong>Admissions:</strong>
                        <br />
                        admissions@sapc.edu.ph
                        <br />
                        (049)831-7954
                        <br />
                        0920-903-1564
                        <br />
                        0956-816-3185
                    </span>
                </Col>

                <Col lg="2" md="2" xs="12" className={isDesktop ? "pb-3" : "pb-5"}>
                    <br /><br />
                    <span className="footer-foundation text-light my-0">
                        <strong>Mailing address:</strong>
                        <br />
                        National Highway, Barangay Santa Clara Sur, Pila, Laguna, Philippines 4010
                    </span>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;