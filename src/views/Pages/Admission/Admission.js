import React, { Fragment, useEffect, useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Container,
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    Form,
    Row,
    Col,
    FormGroup,
    Label,
    ModalHeader,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';
import SapcLogo from '../../../assets/img/SAPC-Logo-red.png'
import '../../../App.css';
import optionList from './optionList.js'
import { useHistory } from "react-router-dom";
import { educationActions } from "../../../services/EducationSelectionService.js";
import AdmissionModal from './AdmissionModal.js';
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';
import { defineLocale } from 'moment';
import { Stepper, Step } from 'react-form-stepper';
import BasicEducationForm from '../Forms/BasicEducationForm.js'
import TertiaryEducationForm from '../Forms/TertiaryEducationForm.js'
import TesdatEducationForm from '../Forms/TesdaEducationForm'
import ScholarshipForm from '../Forms/ScholarshipForm.js'
import PaymentForm from '../Forms/PaymentForm.js';
import ReviewSubmit from '../Forms/ReviewSubmit.js';
import Loading from '../Forms/Loading.js'
import { isMobile, isDesktop } from 'react-device-detect';
import NavbarMobileDashboard from './NavbarMobileDashboard.js';
import Subjects from '../Forms/Subjects'
import MyApplication from './MyApplication';

const Admission = ({ setAuthenticated }) => {

    const [educationTypes, setEducationTypes] = useState([]);
    const [studentTypes, setStudentTypes] = useState([]);
    const [gradeTypes, setGradeTypes] = useState([]);
    const [gradeLevels, setGradeLevels] = useState([]);
    const [courses, setCourses] = useState([]);
    const [modal, setModal] = useState(false);
    const [educ, setEduc] = useState('');
    const [subjects, setSubjects] = useState([]);
    const history = useHistory();
    const [educationSelected, setEducationSelected] = useState(false)
    const [selectedEducationType, setSelectedEducationType] = useState('')
    const [currentStep, setCurrentStep] = useState(0);
    const [loading, setLoading] = useState(false)
    const [navbarMobile, setNavbarMobile] = useState(false)
    const admissionAnswers = localStorage.getItem('admissionAnswers') ? JSON.parse(localStorage.getItem('admissionAnswers')) : ""
    const [tesdaEducationSelected, setTesdaEducationSelected] = useState(false)
    const blankBasicEducationForm = {
        programs: "",
        last_name: "",
        suffix: "",
        first_name: "",
        middle_name: "",
        birth_place: "",
        birth_date: "",
        gender: "",
        age: "",
        religion: "",
        civil_status: "",
        semester: "",
        street: "",
        province: "",
        city: "",
        barangay: "",
        elementary_school_name: "",
        elementary_year_graduated: "",
        elementary_school_address: "",
        junior_high_school_name: "",
        junior_high_year_graduated: "",
        junior_high_school_address: "",
        senior_high_school_name: "",
        senior_high_year_graduated: "",
        senior_high_school_address: "",
        form138: "",
        form137: "",
        picture: "",
        good_moral: "",
        ncae: "",
        birth_certificate: "",
        selected_program: "",
        living_status: "",
        no_of_siblings: "",
        father_name: "",
        father_age: "",
        father_birth_date: "",
        father_birth_place: "",
        father_home_address: "",
        father_contact_no: "",
        father_highest_education: "",
        father_occupation: "",
        father_company: "",
        father_monthly_income: "",
        mother_name: "",
        mother_age: "",
        mother_birth_date: "",
        mother_birth_place: "",
        mother_home_address: "",
        mother_contact_no: "",
        mother_highest_education: "",
        mother_occupation: "",
        mother_company: "",
        mother_monthly_income: "",
        guardian_name: "",
        guardian_age: "",
        guardian_birth_date: "",
        guardian_birth_place: "",
        guardian_home_address: "",
        guardian_contact_no: "",
        guardian_highest_education: "",
        guardian_occupation: "",
        guardian_company: "",
        guardian_monthly_income: "",
        health_student_boolean: "",
        health_student_specific: "",
        consulting_doctor: "",
        important_illness: "",
        hospitalized_in_past: "",
        specific_hospitalized_in_past: "",
        difficulty: "",
        family_health_history: "",
        family_member_with_sickness: "",
        vaccination: "",
        self_evaluation: "",
        financial_support: "",
        other_financial_support: "",
        grew_up: "",
        language_home: "",
        other_language_home: "",
        concerns: "",
        other_concern: "",
        problem_solution: "",
        other_problem_solution: "",
        cope_up_stress: "",
        other_cope_up_stress: "",
        how_to_know_sapc: "",
        other_how_to_know_sapc: "",
        listahan: "",
        household_number: "",
        disability: "",
        pwd_number: "",
        subsidy: "",
        subsidy_details: ""
    }

    const blankScholarshipForm = {
        scholarship_student_name: "",
        scholarhip_date: new Date(),
        scholarship_academic_year_from: "",
        scholarship_academic_year_to: "",
        scholarship_semester: "",
        scholarship_grade_level: "",
        scholarship_course: "",
        scholarship_year: "",
        scholarship_application_type: "",
        scholarship_previous: "",
        family_discount: "",
        family_discount_siblings: "",
        academic_scholarship: "",
        academic_scholarship_rank: "",
        academic_scholarship_proof: "",
        athletic_scholarship: "",
        athletic_level: "",
        athletic_varsity_scholarship: "",
        scholarship_specific_sports: "",
        loyalty_discount: "",
        loyalty_discount_specific_year: "",
        sapc_employee: "",
        sapc_employee_scholarship_specific: "",
        others: "",
        other_scholarship_specific: "",
        esc_switch: "",
        esc_file: "",
        scholarship: "",
    }

    const blankPaymentForm = {
        paymentMode: "",
        paymentMethod: "",
        tuition_fee: "",
        discounted_tuituion_fee: "",
    }

    const blankSubjectForm = {
        enrollee_type: "",
        subjects: []
    }

    const blankTedaForm = {
        last_name: "",
        suffix: "",
        first_name: "",
        middle_name: "",
        contact_no: "",
        street: "",
        province: "",
        city: "",
        barangay: "",
        father_name: "",
        father_contact_no: "",
        father_home_address: "",
        mother_name: "",
        mother_contact_no: "",
        mother_home_address: "",
        guardian_name: "",
        guardian_contact_no: "",
        guardian_home_address: "",
        tesda_form: "",
    }

    const [scholarshipForm, setScholarShipForm] = useState(blankScholarshipForm);
    const [basicForm, setBasicForm] = useState(blankBasicEducationForm);
    const [tesdaForm, setTesdaForm] = useState(blankTedaForm);
    const [paymentForm, setPaymentForm] = useState(blankPaymentForm);
    const [subjectForm, setSubjectForm] = useState(blankSubjectForm);
    const [newTuitionFee, setNewTuitionFee] = useState("")
    const [schoolFees, setSchoolFees] = useState([])
    const [paymentMode, setPaymentMode] = useState(0);
    const [currentPage, setCurrentPage] = useState('')

    const toggle = () => {
        setNavbarMobile(false)
        setModal(!modal);
        setEduc('')
        setCurrentPage('admission')
    }

    const toggleApplication = () => {
        setNavbarMobile(false)
        setEduc('')
        setCurrentPage('application')
        setEducationSelected(false)
    }

    const [selectOptions, setSelectOptions] = useState({
        education_types: [],
        student_types: [],
        grade_types: [],
        grade_levels: [],
        gradeLevelSelection: [],
        coursesSelection: [],
        subjects: [],
        enrollee_type: [
            { value: 0, label: "Regular Student" },
            { value: 1, label: "Manually select subjects" }
        ]
    });

    useEffect(() => {
        educationActions.getApplications(setEducationTypes, setStudentTypes, setGradeTypes, setGradeLevels, null, setCourses);
    }, []);

    useEffect(() => {
        if (studentTypes.length >= 1) {
            let student_types = studentTypes.map(type => {
                return { value: type.id, label: type.name.toUpperCase() }
            })
            setSelectOptions({ ...selectOptions, student_types: student_types })
        }
    }, [studentTypes])

    useEffect(() => {
        if (subjects.length >= 1) {
            let student_subjects = subjects.map(type => {
                return { value: type.id, label: type.description.toUpperCase() }
            })
            setSelectOptions({ ...selectOptions, subjects: student_subjects })
        }
    }, [subjects])

    useEffect(() => {
        if (courses.length >= 1) {
            let student_courses = courses.map(type => {
                return { value: type.id, label: type.name.toUpperCase(), grade_type_id: type.grade_type_id }
            })
            setSelectOptions({ ...selectOptions, coursesSelection: student_courses })
        }
    }, [courses])

    const toggleLogOut = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('email');
        localStorage.removeItem('admissionAnswers');
        sessionStorage.removeItem('form');
        sessionStorage.removeItem('scholarshipForm');
        sessionStorage.removeItem('paymentForm');
        setAuthenticated(false)
        history.push('/login');
    }

    const handleOpenNav = () => {
        setNavbarMobile(true)
    }

    let selectedStyle = "border-0 rounded-0 bg-danger-edit text-white font-weight-bolder";
    let unselectedStyle = "border-0 rounded-0 bg-light-edit"

    return (
        <>
            {loading ? <Loading /> : ""}

            <Container fluid={true} className="Admission">
                <Row>
                    {navbarMobile ?
                        <NavbarMobileDashboard setNavbarMobile={setNavbarMobile} navbarMobile={navbarMobile} toggle={toggle} toggleLogOut={toggleLogOut} toggleApplication={toggleApplication} />
                        : ""}
                </Row>
                <Row>
                    {isDesktop ?
                        <Col md="1" className="px-0 bg-light-edit">
                            <div style={{ position: 'sticky', top: "0", height: "90vh" }} className="d-flex flex-column align-items-center w-100 pt-3 mt-3 px-0 mx-0 text-center">
                                <img src={SapcLogo} style={{ width: "4rem" }} onClick={() => history.push('/portal')} />
                                <div className="d-flex flex-column justify-content-between align-items-center h-100 pt-5 w-100">
                                    <Button onClick={toggle} className="btn bg-danger-edit border-0 w-100 rounded-0 py-4">Admission</Button>
                                    <Button onClick={toggleLogOut}
                                        style={{ position: "absolute", bottom: 0, left: "1rem", backgroundColor: "#FFF" }}
                                        className="text-dark border-0 rounded-0 font-weight-bolder">
                                        Logout
                          </Button>
                                </div>
                            </div>
                        </Col>
                        :
                        <>
                            {isMobile ?
                                <Row className="justify-content-between w-100 p-3">
                                    <Col xs="6">
                                        <img src={SapcLogo} style={{ width: "4rem" }} onClick={() => history.push('/portal')} />
                                    </Col>
                                    <Col xs="6">
                                        <div onClick={handleOpenNav} style={{ position: "absolute", top: "10px", right: "10px", zIndex: "99" }}>
                                            <div className="bar-menu"></div>
                                            <div className="bar-menu"></div>
                                            <div className="bar-menu"></div>
                                        </div>
                                    </Col>
                                </Row>
                                : ""}
                        </>
                    }
                    {currentPage == "admission" ?
                        <>
                            {educationSelected ?
                                <>
                                    <Col md="10" style={{ borderLeft: isDesktop ? "2px solid yellow" : "" }}>
                                        {selectedEducationType == "Basic Education" ?
                                            <>
                                                <Stepper activeStep={currentStep} className="w-100" style={{ overflowX: "auto" }}>
                                                    <Step label="Form" />
                                                    <Step label="Scholarship" />
                                                    <Step label="Admission" />
                                                    <Step label="Review and Submit" />
                                                </Stepper>

                                                {currentStep == 0 ?
                                                    <BasicEducationForm setEducationSelected={setEducationSelected} currentStep={currentStep} setCurrentStep={setCurrentStep} setLoading={setLoading} basicForm={basicForm} setBasicForm={setBasicForm} />
                                                    :
                                                    currentStep == 1 ?
                                                        <ScholarshipForm setEducationSelected={setEducationSelected} currentStep={currentStep} setCurrentStep={setCurrentStep} setLoading={setLoading} scholarshipForm={scholarshipForm} setScholarShipForm={setScholarShipForm} />
                                                        :
                                                        currentStep == 2 ?
                                                            <PaymentForm setEducationSelected={setEducationSelected} currentStep={currentStep} setCurrentStep={setCurrentStep} setLoading={setLoading} paymentForm={paymentForm} setPaymentForm={setPaymentForm} newTuitionFee={newTuitionFee} setNewTuitionFee={setNewTuitionFee} schoolFees={schoolFees} setSchoolFees={setSchoolFees} paymentMode={paymentMode} setPaymentMode={setPaymentMode} />
                                                            :
                                                            <ReviewSubmit currentStep={currentStep} setCurrentStep={setCurrentStep} loading={loading} setLoading={setLoading} basicForm={basicForm} scholarshipForm={scholarshipForm} paymentForm={paymentForm} educationTypes={educationTypes} setEducationSelected={setEducationSelected} setBasicForm={setBasicForm} setPaymentForm={setPaymentForm} setScholarShipForm={setScholarShipForm} blankBasicEducationForm={blankBasicEducationForm} blankScholarshipForm={blankScholarshipForm} blankPaymentForm={blankPaymentForm} subjects={subjects} subjectForm={subjectForm} setSubjectForm={setSubjectForm} />
                                                }
                                            </>
                                            : selectedEducationType == "Tertiary Education" ?
                                                <>
                                                    <Stepper activeStep={currentStep} className="w-100" style={{ overflowX: "auto" }}>
                                                        <Step label="Form" />
                                                        <Step label="Subjects" />
                                                        <Step label="Scholarship" />
                                                        <Step label="Admission" />
                                                        <Step label="Review and Submit" />
                                                    </Stepper>
                                                    {currentStep == 0 ?
                                                        // <Subjects setEducationSelected={setEducationSelected} currentStep={currentStep} setCurrentStep={setCurrentStep} setLoading={setLoading} subjects={subjects} setSubjects={setSubjects} selectOptions={selectOptions} />
                                                        <TertiaryEducationForm setEducationSelected={setEducationSelected} currentStep={currentStep} setCurrentStep={setCurrentStep} setLoading={setLoading} basicForm={basicForm} setBasicForm={setBasicForm} />
                                                        :
                                                        currentStep == 1 ?
                                                            <Subjects setEducationSelected={setEducationSelected} currentStep={currentStep} setCurrentStep={setCurrentStep} setLoading={setLoading} subjects={subjects} setSubjects={setSubjects} selectOptions={selectOptions} subjectForm={subjectForm} setSubjectForm={setSubjectForm} />
                                                            :
                                                            currentStep == 2 ?
                                                                <ScholarshipForm setEducationSelected={setEducationSelected} currentStep={currentStep} setCurrentStep={setCurrentStep} setLoading={setLoading} scholarshipForm={scholarshipForm} setScholarShipForm={setScholarShipForm} />
                                                                :
                                                                currentStep == 3 ?
                                                                    <PaymentForm setEducationSelected={setEducationSelected} currentStep={currentStep} setCurrentStep={setCurrentStep} setLoading={setLoading} paymentForm={paymentForm} setPaymentForm={setPaymentForm} newTuitionFee={newTuitionFee} setNewTuitionFee={setNewTuitionFee} schoolFees={schoolFees} setSchoolFees={setSchoolFees} paymentMode={paymentMode} setPaymentMode={setPaymentMode} />
                                                                    :
                                                                    <ReviewSubmit currentStep={currentStep} setCurrentStep={setCurrentStep} loading={loading} setLoading={setLoading} basicForm={basicForm} scholarshipForm={scholarshipForm} paymentForm={paymentForm} educationTypes={educationTypes} setEducationSelected={setEducationSelected} setBasicForm={setBasicForm} setPaymentForm={setPaymentForm} setScholarShipForm={setScholarShipForm} blankBasicEducationForm={blankBasicEducationForm} blankScholarshipForm={blankScholarshipForm} blankPaymentForm={blankPaymentForm} subjects={subjects} subjectForm={subjectForm} setSubjectForm={setSubjectForm} />
                                                    }
                                                </>
                                                : selectedEducationType == "Tesda Course" ?
                                                    <TesdatEducationForm setTesdaEducationSelected={setTesdaEducationSelected} blankTedaForm={blankTedaForm} tesdaForm={tesdaForm} setTesdaForm={setTesdaForm} educationTypes={educationTypes} />
                                                    : ""}
                                    </Col>
                                </>
                                : ""}
                        </>
                        : currentPage == "application" ?
                            <Col md="10" style={{ borderLeft: isDesktop ? "2px solid yellow" : "", paddingTop: isDesktop ? "5rem" : "2rem" }}>
                                <MyApplication />
                            </Col>
                            : ""}
                </Row>
            </Container>

            <AdmissionModal
                modal={modal}
                setModal={setModal}
                toggle={toggle}
                educationTypes={educationTypes}
                selectOptions={selectOptions}
                setSelectOptions={setSelectOptions}
                educ={educ}
                setEduc={setEduc}
                optionList={optionList}
                educationSelected={educationSelected}
                setEducationSelected={setEducationSelected}
                gradeLevels={gradeLevels}
                setLoading={setLoading}
                setCurrentStep={setCurrentStep}
                setSelectedEducationType={setSelectedEducationType}
                courses={courses}
                gradeTypes={gradeTypes}
                setSubjects={setSubjects}
                setTesdaEducationSelected={setTesdaEducationSelected}
            />
        </>
    );
}

export default Admission;