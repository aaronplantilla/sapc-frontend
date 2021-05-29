import {
    Container,
    Row,
    Col
} from 'reactstrap';
import {
    isMobile,
    isTablet
} from "react-device-detect";
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import NavbarMobile from '../LandingPage/NavbarMobile.js';
import NavbarMobileAuth from '../LandingPage/NavbarMobileAuth.js';
import aboutUsBase from '../../../assets/img/about-us-base-with-text.jpg';
import Chairman from '../../../assets/img/trustees/Chairman.jpg';
import AmeliaTrustee from '../../../assets/img/trustees/Amelia-Trustee.jpg';
import President from '../../../assets/img/trustees/President.jpg';
import SecretaryTrustee from '../../../assets/img/trustees/Secretary.JPG';
import ViceChairman from '../../../assets/img/trustees/Vice-Chairman.jpg';
import VictoriaTrustee from '../../../assets/img/trustees/Victoria-Trustee.jpg';
import Treasurer from '../../../assets/img/trustees/Cecilia-Treasurer.jpg';
import FooterTrans from '../LandingPage/Components/FooterTrans';

const MobileAboutUs = ({ authenticated }) => {

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

    return (
        <Container fluid={true} className="w-100 px-0 landingPage overflow-hidden">
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
                <Col md="12" xs="12" className="px-0 w-100 justify-content-center align-items-center d-flex">
                    <img src={aboutUsBase} className="w-100" />
                </Col>

            </Row>
            <div className="aboutus-image">
                <Row className="text-secondary">
                    <Col md="2" xs="12" className="about-border justify-content-center align-items-center d-flex">
                        <h3 className="mt-5">ABOUT US</h3>
                    </Col>
                    <Col md="9" xs="12" className="mt-5 justify-content-center align-items-center px-5">
                        <p>Located south of Manila is the town of Pila in Laguna – Known for its rich history and well-presented historical structural designs. Pila is the seat of the old Tagalog civilization, it is here where the San Antonio de Padua College (SAPC) was established in 1979 by a group of successful entrepreneurs and professionals who believed that poverty is not a hindrance to education. Thus, the institution was founded on a strong sense of corporate social responsibility of the founders. The San Antonio de Padua College was named in honor of the patron saint of the town. Saint Anthony of Padua whose feast day falls on the 13th of June. The school became San Antonio de Padua College Foundation, Inc. in the year 2002. Over the years, SAPC has distinguished itself in academics, culture, and the arts, sports, and entrepreneurship.</p>
                        <br />                       
                            <>
                                <p className="font-weight-bolder">Some of its award-winning achievements are :</p>
                                <p>National Essay Writing Contest Population Education Quiz Bee</p>
                                <p>Jose P. Laurel Centennial Oratorical Contest recipient for three consecutive years of the Chief Girl Scout Award</p>
                                <p>Four-time volleyball Southern Tagalog Region Champion</p>
                                <p>Various Palarong Pambansa sports medals</p>
                                <p>National Regional and Division Awardee of Secondary Schools Press Conference contest</p>
                                <br />

                                <p className="font-weight-bolder">The school’s collegiate level achievements are:</p>
                                <p>Overall Champion in Provincial Skills Olympics (CALABARZON)</p>
                                <p>Overall Champion in Chefs on Parade Winner of the Accounting Quiz Bee Champion in the Cooking Challenge at the World Food Expo.</p>
                                <br />

                                <p className="font-weight-bolder">The school was founded and continues to be supported by the Figueroa Family of Makati and Pila together with other distinguished individuals who share in their belief and vision.</p>
                            </>
                    </Col>
                </Row>

                <Row>
                    <Col md="2" xs="12" className="about-border justify-content-center align-items-center d-flex bg-warning text-white">
                        <h3 className="mt-2">BOARD OF TRUSTEES</h3>
                    </Col>

                    <Col md="4" xs="12" className="mt-5 font-weight-bolder text-secondary">
                        <Row className="ml-1 justify-content-center align-items-center">
                            <Col>
                                <img src={Chairman} style={{ width: "75%" }} className="mb-4" />
                            </Col>
                            <Col>
                                <p>Leonardo V. Figueroa, Jr.<br />
                        CHAIRMAN</p>
                            </Col>
                        </Row>

                        <Row className="ml-1 justify-content-center align-items-center">
                            <Col>
                                <img src={ViceChairman} style={{ width: "75%" }} className="mb-4" />
                            </Col>
                            <Col>
                                <p>Leonardo B. Figueroa, Sr.<br />
                        VICE CHAIRMAN</p>
                            </Col>
                        </Row>

                        <Row className="ml-1 justify-content-center align-items-center">
                            <Col>
                                <img src={President} style={{ width: "75%" }} className="mb-4" />
                            </Col>
                            <Col>
                                <p>Elisa T. Martinez<br />
                        PRESIDENT</p>
                            </Col>
                        </Row>

                        <Row className="ml-1 justify-content-center align-items-center">
                            <Col>
                                <img src={SecretaryTrustee} style={{ width: "75%" }} className="mb-4" />
                            </Col>
                            <Col>
                                <p>Ma. Mimie M. Castillo<br />
                        SECRETARY</p>
                            </Col>
                        </Row>

                        <Row className="ml-1 justify-content-center align-items-center">
                            <Col>
                                <img src={Treasurer} style={{ width: "75%" }} className="mb-4" />
                            </Col>
                            <Col>
                                <p>Cecilia F. Ortiz<br />
                        TREASURER</p>
                            </Col>
                        </Row>

                        <Row className="ml-1 justify-content-center align-items-center">
                            <Col>
                                <img src={AmeliaTrustee} style={{ width: "75%" }} className="mb-4" />
                            </Col>
                            <Col>
                                <p>Amelia F. Angeles<br />
                        TRUSTEE</p>
                            </Col>
                        </Row>

                        <Row className="ml-1 justify-content-center align-items-center">
                            <Col>
                                <img src={VictoriaTrustee} style={{ width: "75%" }} className="mb-4" />
                            </Col>
                            <Col>
                                <p>Ma. Victoria A. Merca<br />
                        TRUSTEE</p>
                            </Col>
                        </Row>

                        <Row className="ml-1 justify-content-center align-items-center">
                            <Col xs="12" className="text-center">
                                <p>
                                    <span className="members-opacity">
                                        MEMBERS
                                    <br />
                                    Juliana V. Figueroa
                                    <br />
                                    Ernesto B. Figueroa
                                    <br />
                                    Liza F. Kravinsky
                                    <br />
                                    Dr. Kenneth T. Figueroa
                                    <br />
                                    Isagarde Jose D. Angeles
                                    <br />
                                    Jaime F. Tiongson
                                    </span>
                                </p>

                            </Col>
                        </Row>
                    </Col>

                    <Col md="6" xs="12" className="mx-auto h-100 w-100 justify-content-center align-items-center pt-5 text-center content-border bg-light">
                        <h4 className="font-weight-bolder text-center mx-5">SCHOOL PHILOSOPHY</h4>
                        <p className="text-justify mx-5">San Antonio de Padua College strongly believes that education is a holistic experience of learning and living out.  The perfection of knowledge is better appreciated when it is fully realized in a life worth living.  SAPC, therefore, upholds an educational approach that places high regard for individuality and responsible commitment to excellence.  In keeping with this philosophy, the school is bound to carry out its mission as well as achieve its vision of nurturing generations of dynamic, creative and productive members of society.</p>
                        <h4 className="font-weight-bolder text-center mx-5">MISSION</h4>
                        <p className="text-justify mx-5">We are and will always be an institution of learning for integrated basic, tertiary, and technical education and training that actively engages the family in pursuit of lifelong independent learning, critical and creative thinking and technological fluency.
                        We are and will always contribute to nation-building and economic development through relevant researches and pro-active extension services geared towards the improvement of the environment and the quality of life of the community we serve.
                    We are and will always demonstrate positive values and beliefs as well as love for country through the virtues of charity, humility and patience.</p>
                        <h4 className="font-weight-bolder text-center mx-5">VISION</h4>
                        <p className="text-justify mx-5">We are an institution of learning that fosters the role of the family as we work together in preparing learners to be values-ready, life-ready, work-ready and world-ready.</p>
                        <h4 className="font-weight-bolder text-center mx-5">CORE VALUES</h4>
                        <p className="text-justify mx-5">To effectively carry out its goals, SAPC as a community commits to the cultivation of the following character and values:
                    <br /><br />
                            <strong>STEWARDSHIP. </strong>Fostering learning and high achievement characterized by social engagement, mutual respect, care and concern for all the students, family, community and environment.
                    <br />
                            <strong>ACCOUNTABILITY. </strong>Developing strong work ethic through honesty, integrity, authenticity, and confidence wherein each individual takes responsibility for his words, actions and deeds.
                    <br />
                            <strong>DISCIPLINE. </strong>Strengthening moral character by instilling discipline through mutual respect, along with the virtues of charity, humility and patience.
                    <br />
                            <strong>EXCELLENCE. </strong>Committing oneself in elevating his/her potentials through independent learning, research and inquiry, creativity, and use of new technologies.
                    <br />
                        </p>
                        <br />
                    </Col>
                </Row>
                <FooterTrans />
            </div>
        </Container>

    );
}

export default MobileAboutUs;