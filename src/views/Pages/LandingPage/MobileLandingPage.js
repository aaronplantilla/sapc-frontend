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
import carouselMobile1 from '../../../assets/img/carousel-mobile-1.jpg';
import carouselMobile2 from '../../../assets/img/carousel-mobile-2.jpg';
import carouselMobile3 from '../../../assets/img/carousel-mobile-3.jpg';
import basic1 from '../../../assets/img/basic-1.jpg';
import tertiary1 from '../../../assets/img/tertiary-1.jpg';
import tesda1 from '../../../assets/img/tesda-1.jpg';
import news1 from '../../../assets/img/news-1.png';
import news2 from '../../../assets/img/news-2.png';
import news3 from '../../../assets/img/news-3.png';
import NavbarMobile from './NavbarMobile.js';
import NavbarMobileAuth from './NavbarMobileAuth.js';
import Footer from './Components/Footer';
import {
    isMobile,
    isTablet
} from "react-device-detect";

const MobileLandingPage = ({ authenticated }) => {
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

    const itemsMobile = [
        {
            src: carouselMobile1,
            altText: 'Slide 1',
            caption: 'Slide 1'
        },
        {
            src: carouselMobile2,
            altText: 'Slide 2',
            caption: 'Slide 2'
        },
        {
            src: carouselMobile3,
            altText: 'Slide 3',
            caption: 'Slide 3'
        }
    ];

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemsMobile.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? itemsMobile.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slidesMobile = itemsMobile.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} className="w-100 carousel-mobile" />
                {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
            </CarouselItem>
        );
    });

    const handleScroll = () => {
        setNavbarMobile(true)
    }

    const seeMoreContent = <div>
        <CardText className="mb-1 text-secondary-edit font-weight-bolder"><i>Accredited Competency Assessment Center</i></CardText>
        <br />
        <CardText className="mb-1 text-secondary-edit"><i>Bread and Pastry Production NC II</i></CardText>
        <CardText className="mb-1 text-secondary-edit"><i>Caregiving NC II</i></CardText>
        <CardText className="mb-1 text-secondary-edit"><i>Cookery NC II</i></CardText>
        <CardText className="mb-1 text-secondary-edit"><i>Domestic Works NC II</i></CardText>
        <CardText className="mb-1 text-secondary-edit"><i>Housekeeping NC II</i></CardText>
        <CardText className="mb-1 text-secondary-edit"><i>Food and Beverage Services NC II</i></CardText>
        <CardText className="mb-1 text-secondary-edit"><i>Shielded Metal Arc Welding (SMAW) NC I</i></CardText>
        <CardText className="mb-3 text-secondary-edit"><i>Shielded Metal Arc Welding (SMAW) NC II</i></CardText>
    </div>

    const linkName = seeMore ? "See Less" : "See More"

    return (
        <Container fluid={true} className="px-0 landingPage">
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

            <Row lg="12" md="12" xs="12" className="px-0 mx-0 h-100 w-100" style={{ objectFit: "cover" }}>
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    interval={4000}
                    slide={true}
                >
                    <CarouselIndicators items={itemsMobile} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slidesMobile}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>

            </Row>

            <Container className="mb-5 mt-5">
                <h3 className="font-weight-bolder text-danger-edit mb-5 text-center">COURSES OFFERED</h3>
                <CardDeck>
                    <Card className="shadow">
                        <CardImg style={{ height: "13rem" }} top width="100%" src={basic1} alt="Card image cap" />
                        <CardBody className="text-center py-5 d-flex flex-column align-items-center">
                            <CardText className="mb-1 text-secondary-edit"><i>Grade School <br /> (Kinder to Grade 6)</i></CardText>
                            <CardText className="mb-1 text-secondary-edit"><i>Junior High School <br /> (Grade 7 to Grade 10)</i></CardText>
                            <CardText className="mb-5 text-secondary-edit"><i>Senior High School <br /> (Grade 11 to Grade 12)</i></CardText>
                            <Button outline className="rounded-pill mt-4 font-weight-bolder button-transition mt-auto w-50" color="warning" onClick={() => history.push('/login')}>APPLY NOW</Button>
                        </CardBody>
                    </Card>
                    <Card className="shadow">
                        <CardImg style={{ height: "13rem" }} top width="100%" src={tertiary1} alt="Card image cap" />
                        <CardBody className="text-center py-5 d-flex flex-column align-items-center">
                            <CardText className="mb-1 text-secondary-edit"><i>AB in Psychology</i></CardText>
                            <CardText className="mb-1 text-secondary-edit"><i>BS in Business Administration</i></CardText>
                            <CardText className="mb-1 text-secondary-edit"><i>BS in Hospitality Management</i></CardText>
                            <CardText className="mb-5 text-secondary-edit"><i>Associate in Office Management</i></CardText>
                            <Button outline className="rounded-pill mt-4 font-weight-bolder button-transition mt-auto w-50" color="warning" onClick={() => history.push('/login')}>APPLY NOW</Button>
                        </CardBody>
                    </Card>
                    <Card className="shadow">
                        <CardImg style={{ height: "13rem" }} top width="100%" src={tesda1} alt="Card image cap" />
                        <CardBody className="text-center py-5 d-flex flex-column align-items-center">
                            <CardText className="mb-1 text-secondary-edit font-weight-bolder"><i>Training Center</i></CardText>
                            <br />
                            <CardText className="mb-1 text-secondary-edit"><i>Bread and Pastry Production NC II</i></CardText>
                            <CardText className="mb-1 text-secondary-edit"><i>Caregiving NC II</i></CardText>
                            <CardText className="mb-1 text-secondary-edit"><i>Cookery NC II</i></CardText>
                            <CardText className="mb-1 text-secondary-edit"><i>Housekeeping NC II</i></CardText>
                            <CardText className="mb-1 text-secondary-edit"><i>Food and Beverage Services NC II</i></CardText>
                            <CardText className="mb-1 text-secondary-edit"><i>Shielded Metal Arc Welding (SMAW) NC I</i></CardText>
                            <CardText className="mb-4 text-secondary-edit"><i>Shielded Metal Arc Welding (SMAW) NC II</i></CardText>
                            <div>
                                {seeMore && seeMoreContent}
                                <a className="text-secondary hand-pointer" onClick={() => { setSeeMore(!seeMore) }}><p className="font-weight-bolder"><i>{linkName}</i></p></a>
                            </div>

                            <Button outline className="rounded-pill mt-4 font-weight-bolder button-transition mt-auto w-50" color="warning" onClick={() => history.push('/login')}>APPLY NOW</Button>
                        </CardBody>
                    </Card>
                </CardDeck>
            </Container>

            <Row lg="12" md="12" xs="12" className="w-100 lastSection mx-0">
                <Col lg="3" md="3" xs="12" className="bg-danger-edit d-flex justify-content-center">
                    <Label className="font-weight-bolder p-4 text-warning-edit" style={{ fontSize: "1.3rem" }}>SAPC LATEST NEWS</Label>
                </Col>

            </Row>
            <Row lg="12" md="12" xs="12" className="lastSectionImage lastSectionImage2 w-100 mx-0">
                <Container className="mb-5 my-5 py-5">
                    <CardDeck>
                        <Card className="shadow border-0">
                            <CardImg style={{ height: "13rem" }} top width="100%" src={news1} alt="Card image cap" />
                            <CardBody className="text-center py-5 bg-warning-edit d-flex flex-column align-items-center">
                                <CardText className="mb-1 text-danger-edit"><strong>First Batch of Caregivers and N4 Level Passers going to Fukuoka City</strong></CardText>
                                <Button className="mt-auto bg-danger-edit" onClick={() => history.push(window.open("https://www.facebook.com/san.antonio.de.padua.college/posts/4709012692502577", "_blank"))}>See More</Button>
                            </CardBody>
                        </Card>
                        <Card className="shadow border-0">
                            <CardImg style={{ height: "13rem" }} top width="100%" src={news2} alt="Card image cap" />
                            <CardBody className="text-center py-5 bg-warning-edit d-flex flex-column align-items-center">
                                <CardText className="mb-1 text-danger-edit"><strong>Pila, Laguna Mayor Egay Ramos and DSWD provides assistance for the staff and faculty of SAPC</strong></CardText>
                                <Button className="mt-auto bg-danger-edit" onClick={() => history.push(window.open("https://www.facebook.com/san.antonio.de.padua.college/posts/4132803606790158", "_blank"))}>See More</Button>
                            </CardBody>
                        </Card>
                        <Card className="shadow border-0">
                            <CardImg style={{ height: "13rem" }} top width="100%" src={news3} alt="Card image cap" />
                            <div></div>
                            <CardBody className="text-center py-5 bg-warning-edit d-flex flex-column align-items-center">
                                <CardText className="mb-4 text-danger-edit card-text-news"><strong>Release of UNIFAST and CHED Tertiary Education Subsidy last June 22, 2020</strong></CardText>
                                <Button className="mt-auto bg-danger-edit" onClick={() => history.push(window.open("https://www.facebook.com/san.antonio.de.padua.college/posts/3977871828950004", "_blank"))}>See More</Button>
                            </CardBody>
                        </Card>
                    </CardDeck>
                </Container>
            </Row>
            <Footer />
        </Container>
    );
}

export default MobileLandingPage;