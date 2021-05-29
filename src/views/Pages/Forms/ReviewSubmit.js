import React, { useEffect, useState } from 'react';
import {
    Container,
    Form,
    Row,
    Col,
    FormGroup,
    Label,
    CustomInput,
    Spinner,
    Button,
    CardHeader,
    CardBody,
    Card,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter
} from 'reactstrap';
import { useForm, Controller } from "react-hook-form";
import moment from "moment";
import { admissionActions } from "../../../services/AdmissionServices.js";
import Loading from './Loading.js'

const ReviewSubmit = ({ currentStep, setCurrentStep, loading, setLoading, basicForm, scholarshipForm, paymentForm, educationTypes, setEducationSelected, setBasicForm, setPaymentForm, setScholarShipForm, blankBasicEducationForm, blankScholarshipForm, blankPaymentForm, subjects, subjectForm, setSubjectForm }) => {

    const admissionAnswers = localStorage.getItem('admissionAnswers') ? JSON.parse(localStorage.getItem('admissionAnswers')) : ""
    const { register, handleSubmit, errors, control, setValue, getValues } = useForm();
    const [educationId, setEducationId] = useState(0)
    const [buttonSpinner, setButtonSpinner] = useState(false);

    const handlePreviousBtn = () => {
        setCurrentStep(currentStep - 1)
    }

    useEffect(() => {
        if (educationTypes && educationTypes.length >= 1) {
            educationTypes.map(type => {
                if (type.name == admissionAnswers.education_type) {
                    setEducationId(type.id);
                }
            })
        }
    }, [admissionAnswers]);

    const [submissionModal, setSubmissionModal] = useState(false);

    const toggleMessage = () => {
        setSubmissionModal(!submissionModal)
        setEducationSelected("")
        setBasicForm = { blankBasicEducationForm }
        setScholarShipForm = { blankScholarshipForm }
        setPaymentForm = { blankPaymentForm }
        setTimeout(() => window.location.reload(), 1000);
    }

    const onSubmit = async (data) => {
        let files = [];

        if (basicForm.form138) {
            files.push({
                filename: basicForm.form138.name,
                document_type_id: 1,
                document: await convertBase64(basicForm.form138)
            })
        }

        if (basicForm.form137) {
            files.push({
                filename: basicForm.form137.name,
                document_type_id: 2,
                document: await convertBase64(basicForm.form137)
            })
        }

        if (basicForm.good_moral) {
            files.push({
                filename: basicForm.good_moral.name,
                document_type_id: 3,
                document: await convertBase64(basicForm.good_moral)
            })
        }

        if (basicForm.ncae) {
            files.push({
                filename: basicForm.ncae.name,
                document_type_id: 4,
                document: await convertBase64(basicForm.ncae)
            })
        }

        if (basicForm.birth_certificate) {
            files.push({
                filename: basicForm.birth_certificate.name,
                document_type_id: 5,
                document: await convertBase64(basicForm.birth_certificate)
            })
        }

        if (scholarshipForm.esc_file) {
            files.push({
                filename: scholarshipForm.esc_file.name,
                document_type_id: 6,
                document: await convertBase64(scholarshipForm.esc_file)
            })
        }

        if (basicForm.picture) {
            files.push({
                filename: basicForm.picture.name,
                document_type_id: 7,
                document: await convertBase64(basicForm.picture)
            })
        }

        if (scholarshipForm.academic_scholarship_proof) {
            files.push({
                filename: scholarshipForm.academic_scholarship_proof.name,
                document_type_id: 8,
                document: await convertBase64(scholarshipForm.academic_scholarship_proof)
            })
        }

        const famliy_information = [
            {
                family_role: 0,
                name: basicForm.father_name,
                age: basicForm.father_age,
                date_of_birth: moment(basicForm.father_birth_date).format('YYYY-MM-DD'),
                place_of_birth: basicForm.father_birth_place,
                home_address: basicForm.father_home_address,
                contact_number: basicForm.father_contact_no,
                education_attainment: basicForm.father_highest_education.value,
                occupation: basicForm.father_occupation.value,
                company_name: basicForm.father_company,
                monthly_income: basicForm.father_monthly_income.value,
            },
            {
                family_role: 1,
                name: basicForm.mother_name,
                age: basicForm.mother_age,
                date_of_birth: moment(basicForm.mother_birth_date).format('YYYY-MM-DD'),
                place_of_birth: basicForm.mother_birth_place,
                home_address: basicForm.mother_home_address,
                contact_number: basicForm.mother_contact_no,
                education_attainment: basicForm.mother_highest_education.value,
                occupation: basicForm.mother_occupation.value,
                company_name: basicForm.mother_company,
                monthly_income: basicForm.mother_monthly_income.value,
            },
            {
                family_role: 2,
                name: basicForm.guardian_name,
                age: basicForm.guardian_age,
                date_of_birth: moment(basicForm.guardian_birth_date).format('YYYY-MM-DD'),
                place_of_birth: basicForm.guardian_birth_place,
                home_address: basicForm.guardian_home_address,
                contact_number: basicForm.guardian_contact_no,
                education_attainment: basicForm.guardian_highest_education.value,
                occupation: basicForm.guardian_occupation.value,
                company_name: basicForm.guardian_company,
                monthly_income: basicForm.guardian_monthly_income.value,
            }
        ];

        let educ_background = [];
        if (basicForm.elementary_school_name != "") {
            educ_background.push({
                school_name: basicForm.elementary_school_name,
                school_address: basicForm.elementary_school_address,
                year_graduated: basicForm.elementary_year_graduated,
                education_grade_type: '',
            })
        }
        if (basicForm.junior_high_school_name != "") {
            educ_background.push({
                school_name: basicForm.junior_high_school_name,
                school_address: basicForm.junior_high_school_address,
                year_graduated: basicForm.junior_high_year_graduated,
                education_grade_type: '',
            })
        }

        if (basicForm.senior_high_school_name != "") {
            educ_background.push({
                school_name: basicForm.senior_high_school_name,
                school_address: basicForm.senior_high_school_address,
                year_graduated: basicForm.senior_high_year_graduated,
                education_grade_type: '',
            })
        }

        let scholarshipIds = [];
        if (scholarshipForm.family_discount == "1") {
            scholarshipIds.push(scholarshipForm.family_discount);
        }
        if (scholarshipForm.academic_scholarship == "2") {
            scholarshipIds.push(scholarshipForm.academic_scholarship);
        }
        if (scholarshipForm.athletic_scholarship == "3") {
            scholarshipIds.push(scholarshipForm.athletic_scholarship);
        }
        if (scholarshipForm.sapc_employee == "5") {
            scholarshipIds.push(scholarshipForm.sapc_employee);
        }
        if (scholarshipForm.others == "6") {
            scholarshipIds.push(scholarshipForm.others);
        }
        if (scholarshipForm.loyalty_discount == "4") {
            scholarshipIds.push(scholarshipForm.loyalty_discount);
        }

        let health_additional_info = {
            living_status: basicForm.living_status,
            no_of_siblings: basicForm.no_of_siblings,
            health_student_boolean: basicForm.health_student_boolean,
            health_student_specific: basicForm.health_student_specific,
            consulting_doctor: basicForm.consulting_doctor,
            important_illness: basicForm.important_illness,
            hospitalized_in_past: basicForm.hospitalized_in_past,
            specific_hospitalized_in_past: basicForm.specific_hospitalized_in_past,
            difficulty: basicForm.difficulty,
            family_health_history: basicForm.family_health_history,
            family_member_with_sickness: basicForm.family_member_with_sickness,
            vaccination: basicForm.vaccination,
            self_evaluation: basicForm.self_evaluation,
            financial_support: basicForm.financial_support,
            other_financial_support: basicForm.other_financial_support,
            grew_up: basicForm.grew_up,
            language_home: basicForm.language_home,
            other_language_home: basicForm.other_language_home,
            concerns: basicForm.concerns,
            other_concern: basicForm.other_concern,
            problem_solution: basicForm.problem_solution,
            other_problem_solution: basicForm.other_problem_solution,
            cope_up_stress: basicForm.cope_up_stress,
            other_cope_up_stress: basicForm.other_cope_up_stress,
            how_to_know_sapc: basicForm.how_to_know_sapc,
            other_how_to_know_sapc: basicForm.other_how_to_know_sapc,
            listahan: basicForm.listahan,
            household_number: basicForm.household_number,
            disability: basicForm.disability,
            pwd_number: basicForm.pwd_number,
            subsidy: basicForm.subsidy,
            subsidy_details: basicForm.subsidy_details,
        }

        let scholarship_info = {
            name: scholarshipForm.scholarship_student_name,
            scholarhip_date: moment(scholarshipForm.scholarhip_date).format('YYYY-MM-DD'),
            academic_year_from: scholarshipForm.scholarship_academic_year_from,
            academic_year_to: scholarshipForm.scholarship_academic_year_to,
            scholarship_semester: scholarshipForm.scholarship_semester,
            scholarship_grade_level: scholarshipForm.scholarship_grade_level,
            scholarship_course: scholarshipForm.scholarship_course,
            scholarship_year: scholarshipForm.scholarship_year,
            scholarship_application_type: scholarshipForm.scholarship_application_type,
            scholarship_previous: scholarshipForm.scholarship_previous,
            scholarship_type_id: scholarshipIds,
            no_of_sibling: scholarshipForm.family_discount_siblings,
            academic_rank: scholarshipForm.academic_scholarship_rank,
            proof_certification: scholarshipForm.academic_scholarship_proof ? scholarshipForm.academic_scholarship_proof.name : "",
            level_of_sport: scholarshipForm.athletic_level,
            year_graduated: scholarshipForm.loyalty_discount_specific_year,
            department: scholarshipForm.sapc_employee_scholarship_specific,
            others: scholarshipForm.other_scholarship_specific,
        }

        let dataToSubmit = {
            given_name: basicForm.first_name,
            last_name: basicForm.last_name,
            middle_name: basicForm.middle_name,
            suffix: basicForm.suffix,
            year_level: admissionAnswers.grade_year_level.value,
            semester: admissionAnswers.semester ? admissionAnswers.semester.value : "",
            birth_place: basicForm.birth_place,
            birth_date: moment(basicForm.birth_date).format('YYYY-MM-DD'),
            gender: basicForm.gender.value,
            religion: basicForm.religion,
            age: basicForm.age,
            civil_status: basicForm.civil_status ? basicForm.civil_status.value : "",
            position: "",
            picture: basicForm.picture ? basicForm.picture.name : "",
            house_bldg_street: basicForm.street,
            province: basicForm.province,
            city_municipality: basicForm.city,
            barangay: basicForm.barangay,
            student_status: "",
            tertiary_course: admissionAnswers.tertiary_course ? admissionAnswers.tertiary_course.label : "",

            education_type_id: educationId,
            student_type_id: admissionAnswers.student_type.value,
            is_esc: scholarshipForm.esc_switch ? true : false,
            school_fee_id: paymentForm.id,
            payment_mode: paymentForm.paymentMode,

            //family information
            living_status: basicForm.living_status.value,

            //scholarship student info


            scholarship_type_id: scholarshipIds,
            no_of_sibling: scholarshipForm.family_discount_siblings,
            academic_rank: scholarshipForm.academic_scholarship_rank,
            proof_certification: scholarshipForm.academic_scholarship_proof ? scholarshipForm.academic_scholarship_proof.name : "",
            level_of_sport: scholarshipForm.athletic_level,
            year_graduated: scholarshipForm.loyalty_discount_specific_year,
            department: scholarshipForm.sapc_employee_scholarship_specific,
            others: scholarshipForm.other_scholarship_specific,
            discount_type_id: "",

            attachments: files,
            family_info: famliy_information,
            educational_backgrounds: educ_background,
            scholarship_info: scholarship_info,
            scholarship_eligable: scholarshipForm.scholarship ? 1 : 0,
            health_additional_info: health_additional_info,
            subject_details: subjectForm
        }
        
        setButtonSpinner(true)
        admissionActions.submitForm(dataToSubmit, setButtonSpinner, setSubmissionModal);
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };



    return (
        <>
            {loading ? <Loading /> : ""}
            <Container className="py-5">
                {submissionModal ?
                    <Modal isOpen={submissionModal} toggle={toggleMessage} backdrop="static">
                        <ModalHeader toggle={toggleMessage}></ModalHeader>
                        <ModalBody>
                            <h5 className="text-center">Application created!</h5>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggleMessage}>Close</Button>{' '}
                        </ModalFooter>
                    </Modal>
                    : ""}
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Card>
                        <CardHeader className="font-weight-bolder">Review and Submit</CardHeader>
                        <CardBody>
                            <Row className="mb-5">
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Education Type:  </span> {admissionAnswers.education_type}</Label>
                                </Col>
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Student Type:  </span> {admissionAnswers.student_type.label}</Label>
                                </Col>
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Grade Type:  </span> {admissionAnswers.grade_type.label}</Label>
                                </Col>
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Grade Year/Level: </span> {admissionAnswers.grade_year_level.label}</Label>
                                </Col>
                                <Col>
                                    <Label><span className="font-weight-bolder">Course: </span> {admissionAnswers.tertiary_course ? admissionAnswers.tertiary_course.label : "N/A"}</Label>
                                </Col>
                            </Row>
                            <Row className="mb-4 flex-column">
                                <Col md="12" xs="12">
                                    <h5 className="font-weight-bolder text-danger-edit">PERSONAL INFORMATION</h5>
                                </Col>
                                <FormGroup className="mb-3">
                                    <Col md="12" xs="12">
                                        <Label><span className="font-weight-bolder">Last Name: </span> {basicForm.last_name}</Label>
                                    </Col>
                                    <Col md="12" xs="12">
                                        <Label><span className="font-weight-bolder">First Name: </span> {basicForm.first_name}</Label>
                                    </Col>
                                    <Col md="12" xs="12">
                                        <Label><span className="font-weight-bolder">Middle Name: </span> {basicForm.middle_name}</Label>
                                    </Col>
                                    <Col md="12" xs="12">
                                        <Label><span className="font-weight-bolder">Suffix: </span> {basicForm.suffix}</Label>
                                    </Col>
                                    <Col md="12" xs="12">
                                        <Label><span className="font-weight-bolder">Birth Place: </span> {basicForm.birth_place}</Label>
                                    </Col>
                                    <Col md="12" xs="12">
                                        <Label><span className="font-weight-bolder">Birth Date: </span> {basicForm.birth_date != "" ? moment(basicForm.birth_date).format('YYYY-MM-DD') : ""}</Label>
                                    </Col>
                                    <Col md="12" xs="12">
                                        <Label><span className="font-weight-bolder">Gender: </span> {basicForm.gender == "male" ? "Male" : "Female"}</Label>
                                    </Col>
                                    <Col md="12" xs="12">
                                        <Label><span className="font-weight-bolder">Age: </span> {basicForm.age}</Label>
                                    </Col>
                                    <Col md="12" xs="12">
                                        <Label><span className="font-weight-bolder">Religion: </span> {basicForm.religion}</Label>
                                    </Col>
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <Col md="12" xs="12">
                                        <h5 className="font-weight-bolder text-danger-edit">HOME ADDRESS</h5>
                                    </Col>
                                    <Col md="12" xs="12">
                                        <Label><span className="font-weight-bolder">House no., Building, Street: </span> {basicForm.street}</Label>
                                    </Col>
                                    <Col md="12" xs="12">
                                        <Label><span className="font-weight-bolder">Province: </span> {basicForm.province}</Label>
                                    </Col>
                                    <Col md="12" xs="12">
                                        <Label><span className="font-weight-bolder">City: </span> {basicForm.city}</Label>
                                    </Col>
                                    <Col md="12" xs="12">
                                        <Label><span className="font-weight-bolder">Barangay: </span> {basicForm.barangay}</Label>
                                    </Col>
                                </FormGroup>
                                {admissionAnswers.grade_type.value == "5" || admissionAnswers.grade_type.value == "4"
                                    ?
                                    <FormGroup className="mb-1">
                                        <Col md="12" xs="12">
                                            <h5 className="font-weight-bolder text-danger-edit">PRIOR EDUCATION</h5>
                                        </Col>
                                    </FormGroup>
                                    : ""}
                                {admissionAnswers.grade_type.value == "5" || admissionAnswers.grade_type.value == "4"
                                    ?
                                    <FormGroup className="mb-2">
                                        <Col md="12" xs="12">
                                            <Label className="font-weight-bolder">ELEMENTARY</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Name of School: </span> {basicForm.elementary_school_name}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">School Address: </span> {basicForm.elementary_year_graduated}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Year Graduated: </span> {basicForm.elementary_year_graduated}</Label>
                                        </Col>
                                    </FormGroup>
                                    : ""}
                                {admissionAnswers.grade_type.value == "5"
                                    ?
                                    <FormGroup className="mb-3">
                                        <Col md="12" xs="12">
                                            <Label className="font-weight-bolder">JUNIOR HIGH SCHOOL</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Name of School: </span> {basicForm.junior_high_school_name}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">School Address: </span> {basicForm.junior_high_school_address}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Year Graduated: </span> {basicForm.junior_high_year_graduated}</Label>
                                        </Col>
                                    </FormGroup>
                                    : ""}
                            </Row>

                            <Row className="mb-5">
                                <Col md="12" xs="12">
                                    <h5 className="font-weight-bolder text-danger-edit">FAMILY INFORMATION</h5>
                                </Col>
                                {admissionAnswers.education_type == "Basic Education" ?
                                    <>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Living Status: </span> {basicForm.living_status.label}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">No of Siblings: </span> {basicForm.no_of_siblings}</Label>
                                        </Col>
                                    </>
                                    : ""}
                                <Col md="12" xs="12" className="pt-3">
                                    <Label><span className="font-weight-bolder">Father's Name: </span> {basicForm.father_name}</Label>
                                </Col>
                                {admissionAnswers.education_type == "Basic Education" ?
                                    <>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Age: </span> {basicForm.father_age}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Birth Date: </span> {moment(basicForm.father_birth_date).format('YYYY-MM-DD')}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Birth Place: </span> {basicForm.father_birth_place}</Label>
                                        </Col>
                                    </>
                                    : ""}
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Home Address: </span> {basicForm.father_home_address}</Label>
                                </Col>
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Contact No: </span> {basicForm.father_contact_no}</Label>
                                </Col>
                                {admissionAnswers.education_type == "Basic Education" ?
                                    <>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Highest Educational Attainment: </span> {basicForm.father_highest_education.label}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Occupation: </span> {basicForm.father_occupation.label}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Company: </span> {basicForm.father_company}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Monthly Income: </span> {basicForm.father_monthly_income.label}</Label>
                                        </Col>
                                    </>
                                    : ""}
                                <Col md="12" xs="12" className="pt-3">
                                    <Label><span className="font-weight-bolder">Mother's Name: </span> {basicForm.mother_name}</Label>
                                </Col>
                                {admissionAnswers.education_type == "Basic Education" ?
                                    <>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Age: </span> {basicForm.mother_age}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Birth Date: </span> {moment(basicForm.mother_birth_date).format('YYYY-MM-DD')}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Birth Place: </span> {basicForm.mother_birth_place}</Label>
                                        </Col>
                                    </>
                                    : ""}
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Home Address: </span> {basicForm.mother_home_address}</Label>
                                </Col>
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Contact No: </span> {basicForm.mother_contact_no}</Label>
                                </Col>
                                {admissionAnswers.education_type == "Basic Education" ?
                                    <>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Highest Educational Attainment: </span> {basicForm.mother_highest_education.label}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Occupation: </span> {basicForm.mother_occupation.label}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Company: </span> {basicForm.mother_company}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Monthly Income: </span> {basicForm.mother_monthly_income.label}</Label>
                                        </Col>
                                    </>
                                    : ""}
                                <Col md="12" xs="12" className="pt-3">
                                    <Label><span className="font-weight-bolder">Guardian's Name: </span> {basicForm.guardian_name}</Label>
                                </Col>
                                {admissionAnswers.education_type == "Basic Education" ?
                                    <>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Age: </span> {basicForm.guardian_age}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Birth Date: </span> {moment(basicForm.guardian_birth_date).format('YYYY-MM-DD')}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Birth Place: </span> {basicForm.guardian_birth_place}</Label>
                                        </Col>
                                    </>
                                    : ""}
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Home Address: </span> {basicForm.guardian_home_address}</Label>
                                </Col>
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Contact No: </span> {basicForm.guardian_contact_no}</Label>
                                </Col>
                                {admissionAnswers.education_type == "Basic Education" ?
                                    <>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Highest Educational Attainment: </span> {basicForm.guardian_highest_education.label}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Occupation: </span> {basicForm.guardian_occupation.label}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Company: </span> {basicForm.guardian_company}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Monthly Income: </span> {basicForm.guardian_monthly_income.label}</Label>
                                        </Col>
                                    </>
                                    : ""}
                            </Row>

                            {admissionAnswers.education_type == "Basic Education" ?
                                <>
                                    <Row className="mb-5">
                                        <Col md="12" xs="12">
                                            <h5 className="font-weight-bolder text-danger-edit">HEALTH INFORMATION</h5>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Do you have any health problems now? </span> {basicForm.health_student_boolean.label}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Specific health problem: </span> {basicForm.health_student_boolean ? basicForm.health_student_specific : "NA"}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Are you consulting a doctor? </span> {basicForm.consulting_doctor.label}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">What important illness did you have in the past? </span> {basicForm.important_illness}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Have you been hospitalized in the past? </span> {basicForm.hospitalized_in_past.label}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">if yes, indicate the reason and when? </span> {basicForm.hospitalized_in_past ? basicForm.specific_hospitalized_in_past : "NA"}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Do you have any difficulty in, or problems of the following? </span> {basicForm.difficulty.value}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">In your family (blood relations those living in the household) has anyone been sick on the following? </span> {basicForm.family_health_history.label}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">If yes, who among them and what sickness? </span> {basicForm.family_health_history ? basicForm.family_member_with_sickness : "NA"}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">What vaccination did you have? </span> {basicForm.vaccination}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">If yes, who among them and what sickness? </span> {basicForm.self_evaluation.label}</Label>
                                        </Col>
                                    </Row>

                                    <Row className="mb-5">
                                        <Col md="12" xs="12">
                                            <h5 className="font-weight-bolder text-danger-edit">ADDITIONAL INFORMATION</h5>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Who is financially supporting your studies? </span> {basicForm.financial_support.label}</Label>
                                        </Col>
                                        {basicForm.financial_support.value == "6" ?
                                            <Col md="12" xs="12">
                                                <Label><span className="font-weight-bolder">Other: </span> {basicForm.other_financial_support}</Label>
                                            </Col>
                                            : ""}
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Area where you grew up: </span> {basicForm.grew_up.label}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">First language / dialect spoken at home: </span> {basicForm.language_home.label}</Label>
                                        </Col>
                                        {basicForm.language_home.value == "3" ?
                                            <Col md="12" xs="12">
                                                <Label><span className="font-weight-bolder">Other: </span> {basicForm.other_language_home}</Label>
                                            </Col>
                                            : ""}
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Which of the following concerns you most? </span> {basicForm.concerns.label}</Label>
                                        </Col>
                                        {basicForm.concerns.value == "9" ?
                                            <Col md="12" xs="12">
                                                <Label><span className="font-weight-bolder">Other: </span> {basicForm.other_concern}</Label>
                                            </Col>
                                            : ""}
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">How do you usually deal with problem? </span> {basicForm.problem_solution.label}</Label>
                                        </Col>
                                        {basicForm.concerns.value == "5" ?
                                            <Col md="12" xs="12">
                                                <Label><span className="font-weight-bolder">Other: </span> {basicForm.other_problem_solution}</Label>
                                            </Col>
                                            : ""}
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">How do you cope up with stressful situation? </span> {basicForm.cope_up_stress.label}</Label>
                                        </Col>
                                        {basicForm.cope_up_stress.value == "7" ?
                                            <Col md="12" xs="12">
                                                <Label><span className="font-weight-bolder">Other: </span> {basicForm.other_cope_up_stress}</Label>
                                            </Col>
                                            : ""}
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">How do you cope up with stressful situation? </span> {basicForm.how_to_know_sapc.label}</Label>
                                        </Col>
                                        {basicForm.how_to_know_sapc.value == "7" ?
                                            <Col md="12" xs="12">
                                                <Label><span className="font-weight-bolder">Other: </span> {basicForm.other_how_to_know_sapc}</Label>
                                            </Col>
                                            : ""}
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">How did you get to know about  San Antonio de Padua College? </span> {basicForm.how_to_know_sapc.label}</Label>
                                        </Col>
                                        {basicForm.how_to_know_sapc.value == "7" ?
                                            <Col md="12" xs="12">
                                                <Label><span className="font-weight-bolder">Other: </span> {basicForm.other_how_to_know_sapc}</Label>
                                            </Col>
                                            : ""}
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Are you a part of Listahan (4P`s) ? </span> {basicForm.listahan.label}</Label>
                                        </Col>
                                        {basicForm.listahan.value ?
                                            <Col md="12" xs="12">
                                                <Label><span className="font-weight-bolder">DSWD Household Number: </span> {basicForm.household_number}</Label>
                                            </Col>
                                            : ""}
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Are you a person with Disability? </span> {basicForm.disability.label}</Label>
                                        </Col>
                                        {basicForm.disability.value ?
                                            <Col md="12" xs="12">
                                                <Label><span className="font-weight-bolder">PWD number: </span> {basicForm.pwd_number}</Label>
                                            </Col>
                                            : ""}
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Are you a currently recipient of a government subsidy from DEPED/CHED? </span> {basicForm.subsidy.label}</Label>
                                        </Col>
                                        {basicForm.subsidy.value ?
                                            <Col md="12" xs="12">
                                                <Label><span className="font-weight-bolder">If yes, please write the details: </span> {basicForm.subsidy_details}</Label>
                                            </Col>
                                            : ""}
                                    </Row>
                                </>
                                : ""}

                            <Row className="mb-5">
                                <Col md="12" xs="12">
                                    <h5 className="font-weight-bolder text-danger-edit">SCHOLARSHIP</h5>
                                </Col>
                                {scholarshipForm.scholarship ?
                                    <FormGroup className="mb-3">
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Name: </span> {scholarshipForm.scholarship_student_name}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Date: </span> {scholarshipForm.scholarhip_date != "" ? moment(basicForm.scholarhip_date).format('YYYY-MM-DD') : ""}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Academic Year From: </span> {scholarshipForm.scholarship_academic_year_from}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Academic Year To: </span> {scholarshipForm.scholarship_academic_year_to}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Semester: </span> {scholarshipForm.scholarship_semester}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Grade Level: </span> {scholarshipForm.scholarship_grade_level}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Course: </span> {scholarshipForm.scholarship_course}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Year: </span> {scholarshipForm.scholarship_year}</Label>
                                        </Col>
                                        <Col md="12" xs="12">
                                            <Label><span className="font-weight-bolder">Application Type: </span> {scholarshipForm.scholarship_application_type}</Label>
                                        </Col>
                                        <Col md="12" xs="12" className="mb-4">
                                            <Label><span className="font-weight-bolder">Previously Availed Scholarship: </span><br /> {scholarshipForm.scholarship_previous}</Label>
                                        </Col>

                                        <Col md="12" xs="12" className="mb-2">
                                            <Label><span className="font-weight-bolder text-danger-edit">SCHOLARSHIP and DISCOUNT APPLIED FOR</span></Label>
                                        </Col>
                                        {scholarshipForm.family_discount == "1" ?
                                            <FormGroup className="mb-3">
                                                <Col md="12" xs="12">
                                                    <Label><span className="font-weight-bolder">Family Discount </span></Label>
                                                </Col>
                                                <Col md="12" xs="12">
                                                    <Label><span className="font-weight-bolder">Number of Siblings in SAPC: </span> {scholarshipForm.family_discount_siblings}</Label>
                                                </Col>
                                            </FormGroup>
                                            : ""}
                                        {scholarshipForm.academic_scholarship == "2" ?
                                            <FormGroup className="mb-3">
                                                <Col md="12" xs="12">
                                                    <Label><span className="font-weight-bolder mb-0">Academic Scholarship </span></Label>
                                                </Col>
                                                <Col md="12" xs="12">
                                                    <Label><span className="font-weight-bolder">Academic Scholarship Rank: </span> {scholarshipForm.academic_scholarship_rank}</Label>
                                                </Col>
                                                <Col md="12" xs="12">
                                                    <Label><span className="font-weight-bolder">Academic Scholarship Proof: </span> {scholarshipForm.academic_scholarship_proof.name}</Label>
                                                </Col>
                                            </FormGroup>
                                            : ""}
                                        {scholarshipForm.athletic_scholarship == "3" ?
                                            <FormGroup className="mb-3">
                                                <Col md="12" xs="12">
                                                    <Label><span className="font-weight-bolder mb-0">Athletic Scholarship </span></Label>
                                                </Col>
                                                <Col md="12" xs="12">
                                                    <Label><span className="font-weight-bolder mb-0">Level of Sports Participation: </span> {scholarshipForm.athletic_level == 1 ? "Provincial" : scholarshipForm.athletic_level == 2 ? "Regional" : "National"}</Label>
                                                </Col>
                                                <Col md="12" xs="12">
                                                    <Label><span className="font-weight-bolder">Member of SAPC Varsity Team: </span> {scholarshipForm.scholarship_specific_sports}</Label>
                                                </Col>
                                            </FormGroup>
                                            : ""}
                                        {scholarshipForm.loyalty_discount == "4" ?
                                            <FormGroup className="mb-3">
                                                <Col md="12" xs="12" >
                                                    <Label><span className="font-weight-bolder mb-0">Loyalty Discount </span></Label>
                                                </Col>
                                                <Col md="12" xs="12">
                                                    <Label><span className="font-weight-bolder">Specific Year of Graduation at SAPC: </span> {scholarshipForm.loyalty_discount_specific_year}</Label>
                                                </Col>
                                            </FormGroup>
                                            : ""}
                                        {scholarshipForm.sapc_employee == "5" ?
                                            <FormGroup className="mb-3">
                                                <Col md="12" xs="12">
                                                    <Label><span className="font-weight-bolder mb-0">SAPC Employee</span></Label>
                                                </Col>
                                                <Col md="12" xs="12">
                                                    <Label><span className="font-weight-bolder">Specific Year of Service: </span> {scholarshipForm.sapc_employee_scholarship_specific}</Label>
                                                </Col>
                                            </FormGroup>
                                            : ""}
                                        {scholarshipForm.others == "6" ?
                                            <FormGroup className="mb-3">
                                                <Col md="12" xs="12">
                                                    <Label><span className="font-weight-bolder mb-0">Other Scholarship</span></Label>
                                                </Col>
                                                <Col md="12" xs="12">
                                                    <Label><span className="font-weight-bolder">Specific Scholarship: </span> {scholarshipForm.other_scholarship_specific}</Label>
                                                </Col>
                                            </FormGroup>
                                            : ""}
                                        {scholarshipForm.esc_switch != "" ?
                                            <FormGroup>
                                                <Col md="12" xs="12">
                                                    <Label><span className="font-weight-bolder">ESC: </span> {scholarshipForm.esc_switch ? "True" : "False"}</Label>
                                                </Col>
                                                <Col md="12" xs="12">
                                                    <Label><span className="font-weight-bolder">ESC File: </span><br /> {scholarshipForm.esc_file.name}</Label>
                                                </Col>
                                            </FormGroup>
                                            : ""}

                                        {scholarshipForm.family_discount != "1" && scholarshipForm.academic_scholarship != "2" && scholarshipForm.athletic_scholarship != "3" && scholarshipForm.loyalty_discount != "4" && scholarshipForm.sapc_employee != "5" && scholarshipForm.others != "6" && scholarshipForm.esc_switch == "" ?
                                            <FormGroup>
                                                <Col md="12" xs="12">
                                                <Label className="text-secondary-edit">No Scholarship/Discount chosen</Label>
                                                </Col>
                                            </FormGroup>

                                            : ""}
                                    </FormGroup>
                                    :
                                    <Col md="12" xs="12">
                                        <Label className="text-secondary-edit">No Scholarship Applied</Label>
                                    </Col>
                                }
                            </Row>
                            {admissionAnswers.education_type == "Tertiary Education" ?
                                <Row className="mb-5">
                                    <Col md="12" xs="12">
                                        <h5 className="font-weight-bolder text-danger-edit mb-3">SUBJECTS</h5>
                                    </Col>
                                    <>
                                        {console.log(subjectForm), subjectForm && subjectForm.subjects.length ?
                                            subjectForm.subjects.map((subject, key) => {
                                                return (
                                                    <Col md="12" xs="12" key={key}>
                                                        <Label>{subject.description}</Label>
                                                    </Col>
                                                )
                                            })

                                            : "No Selected Subjects"}
                                    </>

                                </Row>
                                : ""}
                            <Row className="mb-5">
                                <Col md="12" xs="12">
                                    <h5 className="font-weight-bolder text-danger-edit mb-3">ADMISSION</h5>
                                </Col>
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Payment Mode: </span> {paymentForm.paymentMode == "annual_fee" ? "Annual Fee" : paymentForm.paymentMode == "semestral_fee" ? "Semestral Fee" : paymentForm.paymentMode == "monthly_a" ? "Monthly A" : "Monthly B"}</Label>
                                </Col>
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Tuition Fee: </span> {paymentForm.paymentMode == 'annual_fee' ? paymentForm.discounted_tuituion_fee : paymentForm.tuition_fee}</Label>
                                </Col>
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Miscellaneous Fee: </span> {paymentForm.miscellaneous_fee}</Label>
                                </Col>
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Other Fee: </span> {paymentForm.other_fee}</Label>
                                </Col>
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Total: </span> {paymentForm.total_fees}</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12" xs="12">
                                    <h5 className="font-weight-bolder text-danger-edit mb-3">ADMISSION REQUIREMENTS</h5>
                                </Col>
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Form 138: </span><br /> {basicForm.form138.name}</Label>
                                </Col>
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Form 137: </span><br /> {basicForm.form137.name}</Label>
                                </Col>
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Good Moral Character: </span><br /> {basicForm.good_moral.name}</Label>
                                </Col>
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">2"x2" Picture: </span><br /> {basicForm.picture.name}</Label>
                                </Col>
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">NCAE: </span><br /> {basicForm.ncae.name}</Label>
                                </Col>
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">PSA: </span><br /> {basicForm.birth_certificate.name}</Label>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                    <Row className="mt-5 justify-content-center text-center">
                        <Col md="6" xs="6" className="text-center w-100">
                            <Button type="button" onClick={handlePreviousBtn} className="bg-white border-warning text-warning-edit rounded-pill py-3 px-5 font-weight-bolder">Previous</Button>
                            <Button className="border-0 bg-white text-dark rounded-pill py-3 px-5 font-weight-bolder">Cancel</Button>
                        </Col>

                        <Col md="6" xs="6" className="text-center w-100">
                            <Button className="bg-warning text-white border-0 rounded-pill py-3 px-5 font-weight-bolder" disabled={buttonSpinner ? true : false}>
                                {buttonSpinner ? (
                                    <>
                                        <Spinner
                                            as="span"
                                            animation="grow"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                            &nbsp;Processing...
                                    </>
                                ) : (
                                    "Submit"
                                )}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
}

export default ReviewSubmit;