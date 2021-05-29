import React, { Fragment, useEffect, useState } from 'react';
import {
    Container,
    Form,
    Row,
    Col,
    FormGroup,
    Label,
    CustomInput,
    Input,
    Button
} from 'reactstrap';
import { useForm, Controller } from "react-hook-form";
import SapcLogo from '../../../assets/img/SAPC-Logo-red.png'
import '../../../App.css';
import Select from 'react-select';
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { isDesktop } from 'react-device-detect';
import optionList from '../Admission/optionList.js'

const BasicEducationForm = ({ setEducationSelected, currentStep, setCurrentStep, setLoading, basicForm, setBasicForm }) => {

    const admissionAnswers = localStorage.getItem('admissionAnswers') ? JSON.parse(localStorage.getItem('admissionAnswers')) : ""
    // const [basicForm, setBasicForm] = useState(sessionStorage.getItem('form') ? JSON.parse(sessionStorage.getItem('form')) : blankBasicEducationForm)
    const { register, handleSubmit, errors, control, setValue, getValues } = useForm();
    const [startDate, setStartDate] = useState("");
    const [fatherStartDate, setFatherStartDate] = useState("");
    const [motherStartDate, setMotherStartDate] = useState("");
    const [guardianStartDate, setGuardianStartDate] = useState("");
    const [gender, setGender] = useState('')

    const onSubmit = async (data) => {
        setBasicForm({
            ...basicForm,
            programs: data.programs,
            last_name: data.last_name,
            suffix: data.suffix,
            first_name: data.first_name,
            middle_name: data.middle_name,
            birth_place: data.birth_place,
            birth_date: data.birth_date,
            gender: data.gender,
            age: data.age,
            religion: data.religion,
            civil_status: data.civil_status,
            semester: data.semester,
            street: data.street,
            province: data.province,
            city: data.city,
            barangay: data.barangay,
            elementary_school_name: data.elementary_school_name,
            elementary_year_graduated: data.elementary_year_graduated,
            elementary_school_address: data.elementary_school_address,
            junior_high_school_name: data.junior_high_school_name,
            junior_high_year_graduated: data.junior_high_year_graduated,
            junior_high_school_address: data.junior_high_school_address,
            senior_high_school_name: data.senior_high_school_name,
            senior_high_year_graduated: data.senior_high_year_graduated,
            senior_high_school_address: data.senior_high_school_address,
            form138: basicForm.form138,
            form137: basicForm.form137,
            picture: basicForm.picture,
            good_moral: basicForm.good_moral,
            ncae: basicForm.ncae,
            birth_certificate: basicForm.birth_certificate,
            selected_program: data.selected_program,
            living_status: data.living_status,
            no_of_siblings: data.no_of_siblings,
            father_name: data.father_name,
            father_age: data.father_age,
            father_birth_date: data.father_birth_date,
            father_birth_place: data.father_birth_place,
            father_home_address: data.father_home_address,
            father_contact_no: data.father_contact_no,
            father_highest_education: data.father_highest_education,
            father_occupation: data.father_occupation,
            father_company: data.father_company,
            father_monthly_income: data.father_monthly_income,
            mother_name: data.mother_name,
            mother_age: data.mother_age,
            mother_birth_date: data.mother_birth_date,
            mother_birth_place: data.mother_birth_place,
            mother_home_address: data.mother_home_address,
            mother_contact_no: data.mother_contact_no,
            mother_highest_education: data.mother_highest_education,
            mother_occupation: data.mother_occupation,
            mother_company: data.mother_company,
            mother_monthly_income: data.mother_monthly_income,
            guardian_name: data.guardian_name,
            guardian_age: data.guardian_age,
            guardian_birth_date: data.guardian_birth_date,
            guardian_birth_place: data.guardian_birth_place,
            guardian_home_address: data.guardian_home_address,
            guardian_contact_no: data.guardian_contact_no,
            guardian_highest_education: data.guardian_highest_education,
            guardian_occupation: data.guardian_occupation,
            guardian_company: data.guardian_company,
            guardian_monthly_income: data.guardian_monthly_income,
            health_student_boolean: data.health_student_boolean,
            health_student_specific: data.health_student_specific,
            consulting_doctor: data.consulting_doctor,
            important_illness: data.important_illness,
            hospitalized_in_past: data.hospitalized_in_past,
            specific_hospitalized_in_past: data.specific_hospitalized_in_past,
            difficulty: data.difficulty,
            family_health_history: data.family_health_history,
            family_member_with_sickness: data.family_member_with_sickness,
            vaccination: data.vaccination,
            self_evaluation: data.self_evaluation,
            financial_support: data.financial_support,
            other_financial_support: data.other_financial_support,
            grew_up: data.grew_up,
            language_home: data.language_home,
            other_language_home: data.other_language_home,
            concerns: data.concerns,
            other_concern: data.other_concern,
            problem_solution: data.problem_solution,
            other_problem_solution: data.other_problem_solution,
            cope_up_stress: data.cope_up_stress,
            other_cope_up_stress: data.other_cope_up_stress,
            how_to_know_sapc: data.how_to_know_sapc,
            other_how_to_know_sapc: data.other_how_to_know_sapc,
            listahan: data.listahan,
            household_number: data.household_number,
            disability: data.disability,
            pwd_number: data.pwd_number,
            subsidy: data.subsidy,
            subsidy_details: data.subsidy_details,
        })
        setCurrentStep(currentStep + 1);
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Container fluid={true} className="py-5">
                    <Row className={isDesktop ? "w-100 justify-content-center pl-5" : "justify-content-center"}>
                        <Col md="8" xs="12">
                            <Row className="border border-2 border-warning py-2 mb-5">
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
                            </Row>
                            <Row className="border border-2 border-warning py-2 mb-5 px-3">
                                <div className="w-100 px-2" style={{ marginTop: "-1.4rem" }}>
                                    <Label className="text-danger-edit text-center font-weight-bolder mb-1 px-3" style={{ backgroundColor: "white" }}>PERSONAL INFORMATION</Label>
                                </div>
                                <div className="w-100 py-4">
                                    <Row className="border-danger">
                                        <Col md="4" xs="12">
                                            <FormGroup>
                                                <Label className="text-secondary font-weight-bolder w-100">Last Name</Label>
                                                <Controller
                                                    control={control}
                                                    name="last_name"
                                                    rules={{ required: true }}
                                                    invalid={errors.last_name ? true : false}
                                                    defaultValue={basicForm.last_name}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="last_name"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, last_name: event.target.value })
                                                                setValue('last_name', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.last_name}
                                                        />
                                                    )}
                                                />
                                                {errors.last_name && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Last name is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="4" xs="12">
                                            <FormGroup>
                                                <Label className="text-secondary font-weight-bolder w-100">First Name</Label>
                                                <Controller
                                                    control={control}
                                                    name="first_name"
                                                    rules={{ required: true }}
                                                    invalid={errors.first_name ? true : false}
                                                    defaultValue={basicForm.first_name}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="first_name"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, first_name: event.target.value })
                                                                setValue('first_name', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.first_name}
                                                        />
                                                    )}
                                                />
                                                {errors.first_name && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        First name is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="4" xs="12">
                                            <FormGroup>
                                                <Label className="text-secondary font-weight-bolder w-100">Middle Name</Label>
                                                <Controller
                                                    control={control}
                                                    name="middle_name"
                                                    rules={{ required: true }}
                                                    invalid={errors.middle_name ? true : false}
                                                    defaultValue={basicForm.middle_name}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="middle_name"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, middle_name: event.target.value })
                                                                setValue('middle_name', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.middle_name}
                                                        />
                                                    )}
                                                />
                                                {errors.middle_name && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Middle name is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="4" xs="12">
                                            <FormGroup>
                                                <Label className="text-secondary font-weight-bolder w-100">Suffix</Label>
                                                <Controller
                                                    control={control}
                                                    name="suffix"
                                                    rules={{ required: false }}
                                                    invalid={errors.suffix ? true : false}
                                                    defaultValue={basicForm.suffix}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="suffix"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, suffix: event.target.value })
                                                                setValue('suffix', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.suffix}
                                                        />
                                                    )}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col md="8" xs="12">
                                            <Label className="text-secondary font-weight-bolder">Birth Place</Label>
                                            <FormGroup>
                                                <Controller
                                                    control={control}
                                                    name="birth_place"
                                                    rules={{ required: true }}
                                                    invalid={errors.birth_place ? true : false}
                                                    defaultValue={basicForm.birth_place}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="birth_place"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, birth_place: event.target.value })
                                                                setValue('birth_place', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.birth_place}
                                                        />
                                                    )}
                                                />
                                                {errors.birth_place && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Birth place is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="4" xs="12">
                                            <FormGroup>
                                                <Label className="text-secondary font-weight-bolder">Birth Date</Label>
                                                <Controller
                                                    control={control}
                                                    name="birth_date"
                                                    defaultValue={basicForm.birth_date ? moment(basicForm.birth_date).toDate() : startDate}
                                                    rules={{ required: true }}
                                                    invalid={errors.birth_date ? true : false}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <DatePicker
                                                            className="form-control bg-light"
                                                            selected={basicForm.birth_date ? moment(basicForm.birth_date).toDate() : startDate}
                                                            onChange={(date) => {
                                                                setStartDate(date)
                                                                setValue('birth_date', date)
                                                                // setBasicForm({ ...basicForm, birth_date: date })
                                                                return date
                                                            }}
                                                            showYearDropdown
                                                            placeholderText="mm/dd/YYYY"
                                                            name="birth_date"
                                                        />
                                                    )}
                                                />
                                                {errors.birth_date && errors.birth_date.type == "required" && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Birth place is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col md="4" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="gender" className="text-secondary font-weight-bolder">Gender</Label>
                                                <Controller
                                                    control={control}
                                                    name="gender"
                                                    rules={{ required: true }}
                                                    invalid={errors.gender ? true : false}
                                                    defaultValue={basicForm.gender}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Select options={optionList.gender}
                                                            onChange={e => {
                                                                setValue('gender', e)
                                                                setBasicForm({ ...basicForm, gender: e })

                                                                return e
                                                            }}
                                                            defaultValue={basicForm.gender}

                                                        />
                                                    )}
                                                />
                                                {errors.gender && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Please select!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="4" xs="12">
                                            <Label className="text-secondary font-weight-bolder">Age</Label>
                                            <FormGroup>
                                                <Controller
                                                    control={control}
                                                    name="age"
                                                    rules={{ required: true, min: 1 }}
                                                    invalid={errors.age ? true : false}
                                                    defaultValue={basicForm.age}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="age"
                                                            type="number"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, age: event.target.value })
                                                                setValue('age', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.age}
                                                        />
                                                    )}
                                                />
                                                {errors.age && errors.age.type == "required" && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Age is required!
                                                    </div>
                                                )}
                                                {errors.age && errors.age.type == "min" && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Invalid age value
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="4" xs="12">
                                            <Label className="text-secondary font-weight-bolder">Religion</Label>
                                            <FormGroup>
                                                <Controller
                                                    control={control}
                                                    name="religion"
                                                    rules={{ required: true }}
                                                    invalid={errors.religion ? true : false}
                                                    defaultValue={basicForm.religion}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="religion"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, religion: event.target.value })
                                                                setValue('religion', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.religion}
                                                        />
                                                    )}
                                                />
                                                {errors.religion && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Religion is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </div>
                            </Row>

                            <Row className="border border-2 border-warning py-2 mb-5 px-3">
                                <div className="w-100 px-2" style={{ marginTop: "-1.4rem" }}>
                                    <Label className="text-danger-edit text-center font-weight-bolder mb-1 px-3" style={{ backgroundColor: "white" }}>HOME ADDRESS</Label>
                                </div>
                                <div className="py-4">
                                    <Row>
                                        <Col md="4" xs="12">
                                            <Label className="text-secondary font-weight-bolder">House no., Building, Street</Label>
                                            <FormGroup>
                                                <Controller
                                                    control={control}
                                                    name="street"
                                                    rules={{ required: true }}
                                                    invalid={errors.street ? true : false}
                                                    defaultValue={basicForm.street}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="street"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, street: event.target.value })
                                                                setValue('street', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.street}
                                                        />
                                                    )}
                                                />
                                                {errors.street && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        House no., Building, Street are required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="4" xs="12">
                                            <FormGroup>
                                                <Label className="text-secondary font-weight-bolder">Province</Label>
                                                <Controller
                                                    control={control}
                                                    name="province"
                                                    rules={{ required: true }}
                                                    invalid={errors.province ? true : false}
                                                    defaultValue={basicForm.province}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="province"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, province: event.target.value })
                                                                setValue('province', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.province}
                                                        />
                                                    )}
                                                />
                                                {errors.province && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Province is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="4" xs="12">
                                            <FormGroup>
                                                <Label className="text-secondary font-weight-bolder">City/Municipality</Label>
                                                <Controller
                                                    control={control}
                                                    name="city"
                                                    rules={{ required: true }}
                                                    invalid={errors.city ? true : false}
                                                    defaultValue={basicForm.city}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="city"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, city: event.target.value })
                                                                setValue('city', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.city}
                                                        />
                                                    )}
                                                />
                                                {errors.city && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        City/Municipality is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="4" xs="12">
                                            <FormGroup>
                                                <Label className="text-secondary font-weight-bolder">Barangay</Label>
                                                <Controller
                                                    control={control}
                                                    name="barangay"
                                                    rules={{ required: true }}
                                                    invalid={errors.barangay ? true : false}
                                                    defaultValue={basicForm.barangay}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="barangay"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, barangay: event.target.value })
                                                                setValue('barangay', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.barangay}
                                                        />
                                                    )}
                                                />
                                                {errors.barangay && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Barangay is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </div>
                            </Row>


                            {admissionAnswers.grade_type.label == "SENIOR HIGH SCHOOL" || admissionAnswers.grade_type.label == "JUNIOR HIGH SCHOOL" ?
                                <Row className="border border-2 border-warning py-2 mb-5 px-3">
                                    <div className="w-100 px-2" style={{ marginTop: "-1.4rem" }}>
                                        <Label className="text-danger-edit text-center font-weight-bolder mb-1 px-3" style={{ backgroundColor: "white" }}>PRIOR EDUCATION</Label>
                                    </div>
                                    <div className="w-100 py-4 text-center">
                                        <Label className="text-danger-edit font-weight-bolder">ELEMENTARY</Label>
                                        <Row className="w-100 py-4 text-left">
                                            <Col md="9" xs="12">
                                                <FormGroup>
                                                    <Label className="text-secondary font-weight-bolder">School Name</Label>
                                                    <Controller
                                                        control={control}
                                                        name="elementary_school_name"
                                                        rules={{ required: true }}
                                                        invalid={errors.elementary_school_name ? true : false}
                                                        defaultValue={basicForm.elementary_school_name}
                                                        render={({ onChange, value, onBlur, name }) => (
                                                            <Input
                                                                className="form-control bg-light"
                                                                name="elementary_school_name"
                                                                onChange={(event) => {
                                                                    // setBasicForm({ ...basicForm, elementary_school_name: event.target.value })
                                                                    setValue('elementary_school_name', event.target.value)
                                                                    return event.target.value;
                                                                }}
                                                                defaultValue={basicForm.elementary_school_name}
                                                            />
                                                        )}
                                                    />
                                                    {errors.elementary_school_name && (
                                                        <div
                                                            style={{
                                                                marginTop: "0.25rem",
                                                                fontSize: "80%",
                                                                color: "#f86c6b",
                                                            }}
                                                        >
                                                            School name is required!
                                                        </div>
                                                    )}
                                                </FormGroup>
                                            </Col>
                                            <Col md="3" xs="12">
                                                <FormGroup>
                                                    <Label className="text-secondary font-weight-bolder">Year Graduated</Label>
                                                    <Controller
                                                        control={control}
                                                        name="elementary_year_graduated"
                                                        rules={{ required: true }}
                                                        invalid={errors.elementary_year_graduated ? true : false}
                                                        defaultValue={basicForm.elementary_year_graduated}
                                                        render={({ onChange, value, onBlur, name }) => (
                                                            <Input
                                                                className="form-control bg-light"
                                                                name="elementary_year_graduated"
                                                                onChange={(event) => {
                                                                    // setBasicForm({ ...basicForm, elementary_year_graduated: event.target.value })
                                                                    setValue('elementary_year_graduated', event.target.value)
                                                                    return event.target.value;
                                                                }}
                                                                defaultValue={basicForm.elementary_year_graduated}
                                                            />
                                                        )}
                                                    />
                                                    {errors.elementary_year_graduated && (
                                                        <div
                                                            style={{
                                                                marginTop: "0.25rem",
                                                                fontSize: "80%",
                                                                color: "#f86c6b",
                                                            }}
                                                        >
                                                            Graduation year is required!
                                                        </div>
                                                    )}
                                                </FormGroup>
                                            </Col>
                                            <Col md="9" xs="12">
                                                <FormGroup>
                                                    <Label htmlFor="elementary_school_address" className="text-secondary font-weight-bolder">School Address</Label>
                                                    <Controller
                                                        control={control}
                                                        name="elementary_school_address"
                                                        rules={{ required: true }}
                                                        invalid={errors.elementary_school_address ? true : false}
                                                        defaultValue={basicForm.elementary_school_address}
                                                        render={({ onChange, value, onBlur, name }) => (
                                                            <Input
                                                                className="form-control bg-light"
                                                                name="elementary_school_address"
                                                                onChange={(event) => {
                                                                    // setBasicForm({ ...basicForm, elementary_school_address: event.target.value })
                                                                    setValue('elementary_school_address', event.target.value)
                                                                    return event.target.value;
                                                                }}
                                                                defaultValue={basicForm.elementary_school_address}
                                                            />
                                                        )}
                                                    />
                                                    {errors.elementary_school_address && (
                                                        <div
                                                            style={{
                                                                marginTop: "0.25rem",
                                                                fontSize: "80%",
                                                                color: "#f86c6b",
                                                            }}
                                                        >
                                                            School address is required!
                                                        </div>
                                                    )}
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                    <>
                                        {admissionAnswers.grade_type.label == "SENIOR HIGH SCHOOL" ?
                                            <div className="w-100 text-center">
                                                <Label className="font-weight-bolder text-danger-edit">JUNIOR HIGH SCHOOL</Label>
                                                <Row className="text-left">
                                                    <Col md="9" xs="12">
                                                        <FormGroup>
                                                            <Label className="text-secondary font-weight-bolder">School Name</Label>
                                                            <Controller
                                                                control={control}
                                                                name="junior_high_school_name"
                                                                rules={{ required: true }}
                                                                invalid={errors.junior_high_school_name ? true : false}
                                                                defaultValue={basicForm.junior_high_school_name}
                                                                render={({ onChange, value, onBlur, name }) => (
                                                                    <Input
                                                                        className="form-control bg-light"
                                                                        name="junior_high_school_name"
                                                                        onChange={(event) => {
                                                                            // setBasicForm({ ...basicForm, junior_high_school_name: event.target.value })
                                                                            setValue('junior_high_school_name', event.target.value)
                                                                            return event.target.value;
                                                                        }}
                                                                        defaultValue={basicForm.junior_high_school_name}
                                                                    />
                                                                )}
                                                            />
                                                            {errors.junior_high_school_name && (
                                                                <div
                                                                    style={{
                                                                        marginTop: "0.25rem",
                                                                        fontSize: "80%",
                                                                        color: "#f86c6b",
                                                                    }}
                                                                >
                                                                    School name is required!
                                                                </div>
                                                            )}
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="3" xs="12">
                                                        <FormGroup>
                                                            <Label className="text-secondary font-weight-bolder">Year Graduated</Label>
                                                            <Controller
                                                                control={control}
                                                                name="junior_high_year_graduated"
                                                                rules={{ required: true }}
                                                                invalid={errors.junior_high_year_graduated ? true : false}
                                                                defaultValue={basicForm.junior_high_year_graduated}
                                                                render={({ onChange, value, onBlur, name }) => (
                                                                    <Input
                                                                        className="form-control bg-light"
                                                                        name="junior_high_year_graduated"
                                                                        onChange={(event) => {
                                                                            // setBasicForm({ ...basicForm, junior_high_year_graduated: event.target.value })
                                                                            setValue('junior_high_year_graduated', event.target.value)
                                                                            return event.target.value;
                                                                        }}
                                                                        defaultValue={basicForm.junior_high_year_graduated}
                                                                    />
                                                                )}
                                                            />
                                                            {errors.junior_high_year_graduated && (
                                                                <div
                                                                    style={{
                                                                        marginTop: "0.25rem",
                                                                        fontSize: "80%",
                                                                        color: "#f86c6b",
                                                                    }}
                                                                >
                                                                    Graduation year is required!
                                                                </div>
                                                            )}
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="9" xs="12">
                                                        <FormGroup>
                                                            <Label htmlFor="elementary_school_address" className="text-secondary font-weight-bolder">School Address</Label>
                                                            <Controller
                                                                control={control}
                                                                name="junior_high_school_address"
                                                                rules={{ required: true }}
                                                                invalid={errors.junior_high_school_address ? true : false}
                                                                defaultValue={basicForm.junior_high_school_address}
                                                                render={({ onChange, value, onBlur, name }) => (
                                                                    <Input
                                                                        className="form-control bg-light"
                                                                        name="junior_high_school_address"
                                                                        onChange={(event) => {
                                                                            // setBasicForm({ ...basicForm, junior_high_school_address: event.target.value })
                                                                            setValue('junior_high_school_address', event.target.value)
                                                                            return event.target.value;
                                                                        }}
                                                                        defaultValue={basicForm.junior_high_school_address}
                                                                    />
                                                                )}
                                                            />
                                                            {errors.junior_high_school_address && (
                                                                <div
                                                                    style={{
                                                                        marginTop: "0.25rem",
                                                                        fontSize: "80%",
                                                                        color: "#f86c6b",
                                                                    }}
                                                                >
                                                                    School address is required!
                                                                </div>
                                                            )}
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </div>
                                            : ""}
                                    </>
                                </Row>
                                : ""}


                            <Row className="border border-2 border-warning py-2 mb-5 px-3">
                                <div className="w-100 px-2" style={{ marginTop: "-1.4rem" }}>
                                    <Label className="text-danger-edit text-center font-weight-bolder mb-1 px-3" style={{ backgroundColor: "white" }}>FAMILY INFORMATION</Label>
                                </div>
                                <div className="w-100 py-4">
                                    <Row>
                                        <Col md="9" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="living_status" className="text-secondary font-weight-bolder">Living Status</Label>
                                                <Controller
                                                    control={control}
                                                    name="living_status"
                                                    rules={{ required: true }}
                                                    invalid={errors.living_status ? true : false}
                                                    defaultValue={basicForm.living_status}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Select
                                                            options={optionList.living_status}
                                                            onChange={e => {
                                                                setValue('living_status', e)
                                                                // setBasicForm({ ...basicForm, living_status: e })

                                                                return e
                                                            }}
                                                            defaultValue={basicForm.living_status}
                                                        />
                                                    )}
                                                />
                                                {errors.living_status && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Living status is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="3" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="no_of_siblings" className="text-secondary font-weight-bolder">No of Siblings</Label>
                                                <Controller
                                                    control={control}
                                                    name="no_of_siblings"
                                                    rules={{ required: true }}
                                                    invalid={errors.no_of_siblings ? true : false}
                                                    defaultValue={basicForm.no_of_siblings}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="no_of_siblings"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, no_of_siblings: event.target.value })
                                                                setValue('no_of_siblings', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.no_of_siblings}
                                                        />
                                                    )}
                                                />
                                                {errors.no_of_siblings && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        No of siblings is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>

                                        <Col md="9" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="father_name" className="text-secondary font-weight-bolder">Father's Name</Label>
                                                <Controller
                                                    control={control}
                                                    name="father_name"
                                                    rules={{ required: true }}
                                                    invalid={errors.father_name ? true : false}
                                                    defaultValue={basicForm.father_name}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="father_name"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, father_name: event.target.value })
                                                                setValue('father_name', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.father_name}
                                                        />
                                                    )}
                                                />
                                                {errors.father_name && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Father's name is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="3" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="father_age" className="text-secondary font-weight-bolder">Age</Label>
                                                <Controller
                                                    control={control}
                                                    name="father_age"
                                                    rules={{ required: true, min: 1 }}
                                                    invalid={errors.father_age ? true : false}
                                                    defaultValue={basicForm.father_age}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            type="number"
                                                            className="form-control bg-light"
                                                            name="father_age"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, father_age: event.target.value })
                                                                setValue('father_age', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.father_age}
                                                        />
                                                    )}
                                                />
                                                {errors.father_age && errors.father_age.type == "required" && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Father's age is required!
                                                    </div>
                                                )}
                                                {errors.father_age && errors.father_age.type == "min" && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Invalid age!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="9" xs="12">
                                            <Label className="text-secondary font-weight-bolder">Birth Place</Label>
                                            <FormGroup>
                                                <Controller
                                                    control={control}
                                                    name="father_birth_place"
                                                    rules={{ required: true }}
                                                    invalid={errors.father_birth_place ? true : false}
                                                    defaultValue={basicForm.father_birth_place}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="father_birth_place"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, father_birth_place: event.target.value })
                                                                setValue('father_birth_place', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.father_birth_place}
                                                        />
                                                    )}
                                                />
                                                {errors.father_birth_place && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Birth place is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="3" xs="12">
                                            <FormGroup>
                                                <Label className="text-secondary font-weight-bolder">Birth Date</Label>
                                                <Controller
                                                    control={control}
                                                    name="father_birth_date"
                                                    defaultValue={basicForm.father_birth_date ? moment(basicForm.father_birth_date).toDate() : fatherStartDate}
                                                    rules={{ required: true }}
                                                    invalid={errors.father_birth_date ? true : false}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <DatePicker
                                                            className="form-control bg-light"
                                                            selected={basicForm.father_birth_date ? moment(basicForm.father_birth_date).toDate() : fatherStartDate}
                                                            onChange={(date) => {
                                                                setFatherStartDate(date)
                                                                setValue('father_birth_date', date)
                                                                // setBasicForm({ ...basicForm, father_birth_date: date })
                                                                return date
                                                            }}
                                                            showYearDropdown
                                                            placeholderText="mm/dd/YYYY"
                                                            name="father_birth_date"
                                                        />
                                                    )}
                                                />
                                                {errors.father_birth_date && errors.father_birth_date.type == "required" && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Birth Date is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="9" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="father_home_address" className="text-secondary font-weight-bolder">Home Address</Label>
                                                <Controller
                                                    control={control}
                                                    name="father_home_address"
                                                    rules={{ required: true }}
                                                    invalid={errors.father_home_address ? true : false}
                                                    defaultValue={basicForm.father_home_address}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="father_home_address"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, father_home_address: event.target.value })
                                                                setValue('father_home_address', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.father_home_address}
                                                        />
                                                    )}
                                                />
                                                {errors.father_home_page && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Home address is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="3" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="father_contact_no" className="text-secondary font-weight-bolder">Contact No</Label>
                                                <Controller
                                                    control={control}
                                                    name="father_contact_no"
                                                    rules={{ required: true }}
                                                    invalid={errors.father_contact_no ? true : false}
                                                    defaultValue={basicForm.father_contact_no}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="father_contact_no"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, father_contact_no: event.target.value })
                                                                setValue('father_contact_no', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.father_contact_no}
                                                        />
                                                    )}
                                                />
                                                {errors.father_contact_no && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Contact no is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="father_highest_education" className="text-secondary font-weight-bolder">Highest Educational Attainment</Label>
                                                <Controller
                                                    control={control}
                                                    name="father_highest_education"
                                                    rules={{ required: true }}
                                                    invalid={errors.father_highest_education ? true : false}
                                                    defaultValue={basicForm.father_highest_education}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Select
                                                            options={optionList.highest_educational_attainment}
                                                            onChange={e => {
                                                                setValue('father_highest_education', e)
                                                                // setBasicForm({ ...basicForm, father_highest_education: e })

                                                                return e
                                                            }}
                                                            defaultValue={basicForm.father_highest_education}
                                                        />
                                                    )}
                                                />
                                                {errors.father_highest_education && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Highest Educational Attainment is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="father_occupation" className="text-secondary font-weight-bolder">Occupation</Label>
                                                <Controller
                                                    control={control}
                                                    name="father_occupation"
                                                    rules={{ required: true }}
                                                    invalid={errors.father_occupation ? true : false}
                                                    defaultValue={basicForm.father_occupation}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Select
                                                            options={optionList.occupation}
                                                            onChange={e => {
                                                                setValue('father_occupation', e)
                                                                // setBasicForm({ ...basicForm, father_occupation: e })

                                                                return e
                                                            }}
                                                            defaultValue={basicForm.father_occupation}
                                                        />
                                                    )}
                                                />
                                                {errors.father_occupation && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Father's occupation is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" xs="12">
                                            <Label className="text-secondary font-weight-bolder">Company</Label>
                                            <FormGroup>
                                                <Controller
                                                    control={control}
                                                    name="father_company"
                                                    rules={{ required: true }}
                                                    invalid={errors.father_company ? true : false}
                                                    defaultValue={basicForm.father_company}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="father_company"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, father_company: event.target.value })
                                                                setValue('father_company', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.father_company}
                                                        />
                                                    )}
                                                />
                                                {errors.father_company && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Company is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="father_monthly_income" className="text-secondary font-weight-bolder">Monthly Income</Label>
                                                <Controller
                                                    control={control}
                                                    name="father_monthly_income"
                                                    rules={{ required: true }}
                                                    invalid={errors.father_monthly_income ? true : false}
                                                    defaultValue={basicForm.father_monthly_income}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Select
                                                            options={optionList.monthly_income}
                                                            onChange={e => {
                                                                setValue('father_monthly_income', e)
                                                                // setBasicForm({ ...basicForm, father_monthly_income: e })

                                                                return e
                                                            }}
                                                            defaultValue={basicForm.father_monthly_income}
                                                        />
                                                    )}
                                                />
                                                {errors.father_monthly_income && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Monthly income is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                    </Row>


                                    <Row className="py-4">
                                        <Col md="9" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="mother_name" className="text-secondary font-weight-bolder">Mother's Name</Label>
                                                <Controller
                                                    control={control}
                                                    name="mother_name"
                                                    rules={{ required: true }}
                                                    invalid={errors.mother_name ? true : false}
                                                    defaultValue={basicForm.mother_name}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="mother_name"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, mother_name: event.target.value })
                                                                setValue('mother_name', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.mother_name}
                                                        />
                                                    )}
                                                />
                                                {errors.mother_name && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Mother's name is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="3" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="mother_age" className="text-secondary font-weight-bolder">Age</Label>
                                                <Controller
                                                    control={control}
                                                    name="mother_age"
                                                    rules={{ required: true, min: 1 }}
                                                    invalid={errors.mother_age ? true : false}
                                                    defaultValue={basicForm.mother_age}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            type="number"
                                                            className="form-control bg-light"
                                                            name="mother_age"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, mother_age: event.target.value })
                                                                setValue('mother_age', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.mother_age}
                                                        />
                                                    )}
                                                />
                                                {errors.mother_age && errors.mother_age.type == "required" && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Mother's age is required!
                                                    </div>
                                                )}
                                                {errors.mother_age && errors.mother_age.type == "min" && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Invalid age!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="9" xs="12">
                                            <Label className="text-secondary font-weight-bolder">Birth Place</Label>
                                            <FormGroup>
                                                <Controller
                                                    control={control}
                                                    name="mother_birth_place"
                                                    rules={{ required: true }}
                                                    invalid={errors.mother_birth_place ? true : false}
                                                    defaultValue={basicForm.mother_birth_place}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="mother_birth_place"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, mother_birth_place: event.target.value })
                                                                setValue('mother_birth_place', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.mother_birth_place}
                                                        />
                                                    )}
                                                />
                                                {errors.mother_birth_place && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Birth place is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="3" xs="12">
                                            <FormGroup>
                                                <Label className="text-secondary font-weight-bolder">Birth Date</Label>
                                                <Controller
                                                    control={control}
                                                    name="mother_birth_date"
                                                    defaultValue={basicForm.mother_birth_date ? moment(basicForm.mother_birth_date).toDate() : motherStartDate}
                                                    rules={{ required: true }}
                                                    invalid={errors.mother_birth_date ? true : false}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <DatePicker
                                                            className="form-control bg-light"
                                                            selected={basicForm.mother_birth_date ? moment(basicForm.mother_birth_date).toDate() : motherStartDate}
                                                            onChange={(date) => {
                                                                setMotherStartDate(date)
                                                                setValue('mother_birth_date', date)
                                                                // setBasicForm({ ...basicForm, mother_birth_date: date })
                                                                return date
                                                            }}
                                                            showYearDropdown
                                                            placeholderText="mm/dd/YYYY"
                                                            name="mother_birth_date"
                                                        />
                                                    )}
                                                />
                                                {errors.mother_birth_date && errors.mother_birth_date.type == "required" && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Birth Date is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="9" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="mother_home_address" className="text-secondary font-weight-bolder">Home Address</Label>
                                                <Controller
                                                    control={control}
                                                    name="mother_home_address"
                                                    rules={{ required: true }}
                                                    invalid={errors.mother_home_address ? true : false}
                                                    defaultValue={basicForm.mother_home_address}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="mother_home_address"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, mother_home_address: event.target.value })
                                                                setValue('mother_home_address', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.mother_home_address}
                                                        />
                                                    )}
                                                />
                                                {errors.mother_home_address && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Home address is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="3" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="mother_contact_no" className="text-secondary font-weight-bolder">Contact No</Label>
                                                <Controller
                                                    control={control}
                                                    name="mother_contact_no"
                                                    rules={{ required: true }}
                                                    invalid={errors.mother_contact_no ? true : false}
                                                    defaultValue={basicForm.mother_contact_no}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="mother_contact_no"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, mother_contact_no: event.target.value })
                                                                setValue('mother_contact_no', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.mother_contact_no}
                                                        />
                                                    )}
                                                />
                                                {errors.mother_contact_no && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Contact no is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="mother_highest_education" className="text-secondary font-weight-bolder">Highest Educational Attainment</Label>
                                                <Controller
                                                    control={control}
                                                    name="mother_highest_education"
                                                    rules={{ required: true }}
                                                    invalid={errors.mother_highest_education ? true : false}
                                                    defaultValue={basicForm.mother_highest_education}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Select
                                                            options={optionList.highest_educational_attainment}
                                                            onChange={e => {
                                                                setValue('mother_highest_education', e)
                                                                // setBasicForm({ ...basicForm, mother_highest_education: e })

                                                                return e
                                                            }}
                                                            defaultValue={basicForm.mother_highest_education}
                                                        />
                                                    )}
                                                />
                                                {errors.mother_highest_education && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Highest Educational Attainment is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="mother_occupation" className="text-secondary font-weight-bolder">Occupation</Label>
                                                <Controller
                                                    control={control}
                                                    name="mother_occupation"
                                                    rules={{ required: true }}
                                                    invalid={errors.mother_occupation ? true : false}
                                                    defaultValue={basicForm.mother_occupation}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Select
                                                            options={optionList.occupation}
                                                            onChange={e => {
                                                                setValue('mother_occupation', e)
                                                                // setBasicForm({ ...basicForm, mother_occupation: e })

                                                                return e
                                                            }}
                                                            defaultValue={basicForm.mother_occupation}
                                                        />
                                                    )}
                                                />
                                                {errors.mother_occupation && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        mother's occupation is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" xs="12">
                                            <Label className="text-secondary font-weight-bolder">Company</Label>
                                            <FormGroup>
                                                <Controller
                                                    control={control}
                                                    name="mother_company"
                                                    rules={{ required: true }}
                                                    invalid={errors.mother_company ? true : false}
                                                    defaultValue={basicForm.mother_company}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="mother_company"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, mother_company: event.target.value })
                                                                setValue('mother_company', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.mother_company}
                                                        />
                                                    )}
                                                />
                                                {errors.mother_company && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Company is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="mother_monthly_income" className="text-secondary font-weight-bolder">Monthly Income</Label>
                                                <Controller
                                                    control={control}
                                                    name="mother_monthly_income"
                                                    rules={{ required: true }}
                                                    invalid={errors.mother_monthly_income ? true : false}
                                                    defaultValue={basicForm.mother_monthly_income}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Select
                                                            options={optionList.monthly_income}
                                                            onChange={e => {
                                                                setValue('mother_monthly_income', e)
                                                                // setBasicForm({ ...basicForm, mother_monthly_income: e })

                                                                return e
                                                            }}
                                                            defaultValue={basicForm.mother_monthly_income}
                                                        />
                                                    )}
                                                />
                                                {errors.mother_monthly_income && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Monthly income is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row className="py-4">
                                        <Col md="9" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="guardian_name" className="text-secondary font-weight-bolder">Guardian Name</Label>
                                                <Controller
                                                    control={control}
                                                    name="guardian_name"
                                                    rules={{ required: true }}
                                                    invalid={errors.guardian_name ? true : false}
                                                    defaultValue={basicForm.guardian_name}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="guardian_name"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, guardian_name: event.target.value })
                                                                setValue('guardian_name', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.guardian_name}
                                                        />
                                                    )}
                                                />
                                                {errors.guardian_name && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Guardian name is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="3" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="guardian_age" className="text-secondary font-weight-bolder">Age</Label>
                                                <Controller
                                                    control={control}
                                                    name="guardian_age"
                                                    rules={{ required: true, min: 1 }}
                                                    invalid={errors.guardian_age ? true : false}
                                                    defaultValue={basicForm.guardian_age}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            type="number"
                                                            className="form-control bg-light"
                                                            name="guardian_age"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, guardian_age: event.target.value })
                                                                setValue('guardian_age', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.guardian_age}
                                                        />
                                                    )}
                                                />
                                                {errors.guardian_age && errors.guardian_age.type == "required" && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Guardian age is required!
                                                    </div>
                                                )}
                                                {errors.guardian_age && errors.guardian_age.type == "min" && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Invalid age!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="9" xs="12">
                                            <Label className="text-secondary font-weight-bolder">Birth Place</Label>
                                            <FormGroup>
                                                <Controller
                                                    control={control}
                                                    name="guardian_birth_place"
                                                    rules={{ required: true }}
                                                    invalid={errors.guardian_birth_place ? true : false}
                                                    defaultValue={basicForm.guardian_birth_place}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="guardian_birth_place"
                                                            onChange={(event) => {
                                                                console.log(event.target.value)
                                                                // setBasicForm({ ...basicForm, guardian_birth_place: event.target.value })
                                                                setValue('guardian_birth_place', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.guardian_birth_place}
                                                        />
                                                    )}
                                                />
                                                {errors.guardian_birth_place && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Birth place is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="3" xs="12">
                                            <FormGroup>
                                                <Label className="text-secondary font-weight-bolder">Birth Date</Label>
                                                <Controller
                                                    control={control}
                                                    name="guardian_birth_date"
                                                    defaultValue={basicForm.guardian_birth_date ? moment(basicForm.guardian_birth_date).toDate() : guardianStartDate}
                                                    rules={{ required: true }}
                                                    invalid={errors.guardian_birth_date ? true : false}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <DatePicker
                                                            className="form-control bg-light"
                                                            selected={basicForm.guardian_birth_date ? moment(basicForm.guardian_birth_date).toDate() : guardianStartDate}
                                                            onChange={(date) => {
                                                                setGuardianStartDate(date)
                                                                setValue('guardian_birth_date', date)
                                                                // setBasicForm({ ...basicForm, guardian_birth_date: date })
                                                                return date
                                                            }}
                                                            showYearDropdown
                                                            placeholderText="mm/dd/YYYY"
                                                            name="guardian_birth_date"
                                                        />
                                                    )}
                                                />
                                                {errors.guardian_birth_date && errors.guardian_birth_date.type == "required" && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Birth Date is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="9" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="guardian_home_address" className="text-secondary font-weight-bolder">Home Address</Label>
                                                <Controller
                                                    control={control}
                                                    name="guardian_home_address"
                                                    rules={{ required: true }}
                                                    invalid={errors.guardian_home_address ? true : false}
                                                    defaultValue={basicForm.guardian_home_address}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="guardian_home_address"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, guardian_home_address: event.target.value })
                                                                setValue('guardian_home_address', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.guardian_home_address}
                                                        />
                                                    )}
                                                />
                                                {errors.guardian_home_address && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Home address is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="3" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="guardian_contact_no" className="text-secondary font-weight-bolder">Contact No</Label>
                                                <Controller
                                                    control={control}
                                                    name="guardian_contact_no"
                                                    rules={{ required: true }}
                                                    invalid={errors.guardian_contact_no ? true : false}
                                                    defaultValue={basicForm.guardian_contact_no}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="guardian_contact_no"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, guardian_contact_no: event.target.value })
                                                                setValue('guardian_contact_no', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.guardian_contact_no}
                                                        />
                                                    )}
                                                />
                                                {errors.guardian_contact_no && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Contact no is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="guardian_highest_education" className="text-secondary font-weight-bolder">Highest Educational Attainment</Label>
                                                <Controller
                                                    control={control}
                                                    name="guardian_highest_education"
                                                    rules={{ required: true }}
                                                    invalid={errors.guardian_highest_education ? true : false}
                                                    defaultValue={basicForm.guardian_highest_education}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Select
                                                            options={optionList.highest_educational_attainment}
                                                            onChange={e => {
                                                                setValue('guardian_highest_education', e)
                                                                // setBasicForm({ ...basicForm, guardian_highest_education: e })

                                                                return e
                                                            }}
                                                            defaultValue={basicForm.guardian_highest_education}
                                                        />
                                                    )}
                                                />
                                                {errors.guardian_highest_education && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Highest Educational Attainment is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="guardian_occupation" className="text-secondary font-weight-bolder">Occupation</Label>
                                                <Controller
                                                    control={control}
                                                    name="guardian_occupation"
                                                    rules={{ required: true }}
                                                    invalid={errors.guardian_occupation ? true : false}
                                                    defaultValue={basicForm.guardian_occupation}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Select
                                                            options={optionList.occupation}
                                                            onChange={e => {
                                                                setValue('guardian_occupation', e)
                                                                // setBasicForm({ ...basicForm, guardian_occupation: e })

                                                                return e
                                                            }}
                                                            defaultValue={basicForm.guardian_occupation}
                                                        />
                                                    )}
                                                />
                                                {errors.guardian_occupation && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        guardian's occupation is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" xs="12">
                                            <Label className="text-secondary font-weight-bolder">Company</Label>
                                            <FormGroup>
                                                <Controller
                                                    control={control}
                                                    name="guardian_company"
                                                    rules={{ required: true }}
                                                    invalid={errors.guardian_company ? true : false}
                                                    defaultValue={basicForm.guardian_company}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="guardian_company"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, guardian_company: event.target.value })
                                                                setValue('guardian_company', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.guardian_company}
                                                        />
                                                    )}
                                                />
                                                {errors.guardian_company && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Company is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="guardian_monthly_income" className="text-secondary font-weight-bolder">Monthly Income</Label>
                                                <Controller
                                                    control={control}
                                                    name="guardian_monthly_income"
                                                    rules={{ required: true }}
                                                    invalid={errors.guardian_monthly_income ? true : false}
                                                    defaultValue={basicForm.guardian_monthly_income}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Select
                                                            options={optionList.monthly_income}
                                                            onChange={e => {
                                                                setValue('guardian_monthly_income', e)
                                                                // setBasicForm({ ...basicForm, guardian_monthly_income: e })

                                                                return e
                                                            }}
                                                            defaultValue={basicForm.guardian_monthly_income}
                                                        />
                                                    )}
                                                />
                                                {errors.guardian_monthly_income && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Monthly income is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </div>
                            </Row>

                            <Row className="border border-2 border-warning py-2 mb-5 px-3">
                                <div className="w-100 px-2" style={{ marginTop: "-1.4rem" }}>
                                    <Label className="text-danger-edit text-center font-weight-bolder mb-1 px-3" style={{ backgroundColor: "white" }}>HEALTH PROBLEMS</Label>
                                </div>

                                <Row className="pt-3 w-100">
                                    <Col md="6" xs="12">
                                        <FormGroup>
                                            <Label htmlFor="health_student_boolean" className="text-secondary font-weight-bolder">Do you have any health problems now?</Label>
                                            <Controller
                                                control={control}
                                                name="health_student_boolean"
                                                rules={{ required: true }}
                                                invalid={errors.health_student_boolean ? true : false}
                                                defaultValue={basicForm.health_student_boolean}
                                                render={({ onChange, value, onBlur, name }) => (
                                                    <Select options={optionList.boolean}
                                                        onChange={e => {
                                                            setValue('health_student_boolean', e)
                                                            setBasicForm({ ...basicForm, health_student_boolean: e })

                                                            return e
                                                        }}
                                                        defaultValue={basicForm.health_student_boolean}
                                                    />
                                                )}
                                            />
                                            {errors.health_student_boolean && (
                                                <div
                                                    style={{
                                                        marginTop: "0.25rem",
                                                        fontSize: "80%",
                                                        color: "#f86c6b",
                                                    }}
                                                >
                                                    Please select!
                                                </div>
                                            )}
                                        </FormGroup>
                                    </Col>
                                    {basicForm.health_student_boolean && basicForm.health_student_boolean.value ?
                                        <Col md="6" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="health_student_specific" className="text-secondary font-weight-bolder">If yes, Please specify:</Label>
                                                <Controller
                                                    control={control}
                                                    name="health_student_specific"
                                                    rules={{ required: true }}
                                                    invalid={errors.health_student_specific ? true : false}
                                                    defaultValue={basicForm.health_student_specific}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="health_student_specific"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, health_student_specific: event.target.value })
                                                                setValue('health_student_specific', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.health_student_specific}
                                                        />
                                                    )}
                                                />
                                                {errors.health_student_specific && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Please specify!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        : ""}
                                </Row>
                                <Row className="w-100">
                                    <Col md="6" xs="12">
                                        <FormGroup>
                                            <Label htmlFor="consulting_doctor" className="text-secondary font-weight-bolder">Are you consulting a doctor?</Label>
                                            <Controller
                                                control={control}
                                                name="consulting_doctor"
                                                rules={{ required: true }}
                                                invalid={errors.consulting_doctor ? true : false}
                                                defaultValue={basicForm.consulting_doctor}
                                                render={({ onChange, value, onBlur, name }) => (
                                                    <Select options={optionList.boolean}
                                                        onChange={e => {
                                                            setValue('consulting_doctor', e)
                                                            setBasicForm({ ...basicForm, consulting_doctor: e })

                                                            return e
                                                        }}
                                                        defaultValue={basicForm.consulting_doctor}
                                                    />
                                                )}
                                            />
                                            {errors.consulting_doctor && (
                                                <div
                                                    style={{
                                                        marginTop: "0.25rem",
                                                        fontSize: "80%",
                                                        color: "#f86c6b",
                                                    }}
                                                >
                                                    Please select!
                                                </div>
                                            )}
                                        </FormGroup>
                                    </Col>
                                    {basicForm.consulting_doctor && basicForm.consulting_doctor.value ?
                                        <Col md="6" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="important_illness" className="text-secondary font-weight-bolder">What important illness did you have in the past?</Label>
                                                <Controller
                                                    control={control}
                                                    name="important_illness"
                                                    rules={{ required: true }}
                                                    invalid={errors.important_illness ? true : false}
                                                    defaultValue={basicForm.important_illness}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="important_illness"
                                                            onChange={(event) => {
                                                                setBasicForm({ ...basicForm, important_illness: event.target.value })
                                                                setValue('important_illness', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.important_illness}
                                                        />
                                                    )}
                                                />
                                                {errors.important_illness && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Please specify!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        : ""}
                                </Row>
                                <Row className="w-100">
                                    <Col md="6" xs="12">
                                        <FormGroup>
                                            <Label htmlFor="hospitalized_in_past" className="text-secondary font-weight-bolder">Have you been hospitalized in the past?</Label>
                                            <Controller
                                                control={control}
                                                name="hospitalized_in_past"
                                                rules={{ required: true }}
                                                invalid={errors.hospitalized_in_past ? true : false}
                                                defaultValue={basicForm.hospitalized_in_past}
                                                render={({ onChange, value, onBlur, name }) => (
                                                    <Select options={optionList.boolean}
                                                        onChange={e => {
                                                            setValue('hospitalized_in_past', e)
                                                            setBasicForm({ ...basicForm, hospitalized_in_past: e })

                                                            return e
                                                        }}
                                                        defaultValue={basicForm.hospitalized_in_past}
                                                    />
                                                )}
                                            />
                                            {errors.hospitalized_in_past && (
                                                <div
                                                    style={{
                                                        marginTop: "0.25rem",
                                                        fontSize: "80%",
                                                        color: "#f86c6b",
                                                    }}
                                                >
                                                    Please select!
                                                </div>
                                            )}
                                        </FormGroup>
                                    </Col>
                                    {basicForm.hospitalized_in_past && basicForm.hospitalized_in_past.value ?
                                        <Col md="6" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="specific_hospitalized_in_past" className="text-secondary font-weight-bolder">If yes indicate the reason and when?</Label>
                                                <Controller
                                                    control={control}
                                                    name="specific_hospitalized_in_past"
                                                    rules={{ required: true }}
                                                    invalid={errors.specific_hospitalized_in_past ? true : false}
                                                    defaultValue={basicForm.specific_hospitalized_in_past}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="specific_hospitalized_in_past"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, specific_hospitalized_in_past: event.target.value })
                                                                setValue('specific_hospitalized_in_past', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.specific_hospitalized_in_past}
                                                        />
                                                    )}
                                                />
                                                {errors.specific_hospitalized_in_past && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Please specify!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        : ""}
                                    <Col md="12" xs="12">
                                        <FormGroup>
                                            <Label htmlFor="difficulty" className="text-secondary font-weight-bolder">Do you have any difficulty in, or problems of the following?</Label>
                                            <Controller
                                                control={control}
                                                name="difficulty"
                                                rules={{ required: true }}
                                                invalid={errors.difficulty ? true : false}
                                                defaultValue={basicForm.difficulty}
                                                render={({ onChange, value, onBlur, name }) => (
                                                    <Select options={optionList.health_history}
                                                        isMulti
                                                        closeMenuOnSelect={false}
                                                        onChange={e => {
                                                            setValue('difficulty', e)
                                                            setBasicForm({ ...basicForm, difficulty: e })

                                                            return e
                                                        }}
                                                        defaultValue={basicForm.difficulty}
                                                    />
                                                )}
                                            />
                                            {errors.difficulty && (
                                                <div
                                                    style={{
                                                        marginTop: "0.25rem",
                                                        fontSize: "80%",
                                                        color: "#f86c6b",
                                                    }}
                                                >
                                                    Please select!
                                                </div>
                                            )}
                                        </FormGroup>
                                    </Col>
                                    <Col md="12" xs="12">
                                        <FormGroup>
                                            <Label htmlFor="family_health_history" className="text-secondary font-weight-bolder">In your family (blood relations those living in the household) has anyone been sick on the following?</Label>
                                            <Controller
                                                control={control}
                                                name="family_health_history"
                                                rules={{ required: true }}
                                                invalid={errors.family_health_history ? true : false}
                                                defaultValue={basicForm.family_health_history}
                                                render={({ onChange, value, onBlur, name }) => (
                                                    <Select options={optionList.family_health_history}
                                                        onChange={e => {
                                                            setValue('family_health_history', e)
                                                            setBasicForm({ ...basicForm, family_health_history: e })

                                                            return e
                                                        }}
                                                        defaultValue={basicForm.family_health_history}
                                                    />
                                                )}
                                            />
                                            {errors.family_health_history && (
                                                <div
                                                    style={{
                                                        marginTop: "0.25rem",
                                                        fontSize: "80%",
                                                        color: "#f86c6b",
                                                    }}
                                                >
                                                    Please select!
                                                </div>
                                            )}
                                        </FormGroup>
                                    </Col>
                                    {basicForm.family_health_history && basicForm.family_health_history.value != 10 ?
                                        <Col md="12" xs="12">
                                            <FormGroup>
                                                <Label htmlFor="family_member_with_sickness" className="text-secondary font-weight-bolder">If yes, who among them and what sickness?</Label>
                                                <Controller
                                                    control={control}
                                                    name="family_member_with_sickness"
                                                    rules={{ required: true }}
                                                    invalid={errors.family_member_with_sickness ? true : false}
                                                    defaultValue={basicForm.family_member_with_sickness}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="family_member_with_sickness"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, family_member_with_sickness: event.target.value })
                                                                setValue('family_member_with_sickness', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.family_member_with_sickness}
                                                        />
                                                    )}
                                                />
                                                {errors.family_member_with_sickness && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Please specify!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        : ""}
                                    <Col md="12" xs="12">
                                        <FormGroup>
                                            <Label htmlFor="vaccination" className="text-secondary font-weight-bolder">What vaccination did you have?</Label>
                                            <Controller
                                                control={control}
                                                name="vaccination"
                                                rules={{ required: true }}
                                                invalid={errors.vaccination ? true : false}
                                                defaultValue={basicForm.vaccination}
                                                render={({ onChange, value, onBlur, name }) => (
                                                    <Input
                                                        className="form-control bg-light"
                                                        name="vaccination"
                                                        onChange={(event) => {
                                                            // setBasicForm({ ...basicForm, vaccination: event.target.value })
                                                            setValue('vaccination', event.target.value)
                                                            return event.target.value;
                                                        }}
                                                        defaultValue={basicForm.vaccination}
                                                    />
                                                )}
                                            />
                                            {errors.vaccination && (
                                                <div
                                                    style={{
                                                        marginTop: "0.25rem",
                                                        fontSize: "80%",
                                                        color: "#f86c6b",
                                                    }}
                                                >
                                                    Please specify!
                                                </div>
                                            )}
                                        </FormGroup>
                                    </Col>
                                    <Col md="12" xs="12">
                                        <FormGroup>
                                            <Label htmlFor="self_evaluation" className="text-secondary font-weight-bolder">How do you evaluate yourself?</Label>
                                            <Controller
                                                control={control}
                                                name="self_evaluation"
                                                rules={{ required: true }}
                                                invalid={errors.self_evaluation ? true : false}
                                                defaultValue={basicForm.self_evaluation}
                                                render={({ onChange, value, onBlur, name }) => (
                                                    <Select options={optionList.evaluate_self}
                                                        onChange={e => {
                                                            setValue('self_evaluation', e)
                                                            setBasicForm({ ...basicForm, self_evaluation: e })

                                                            return e
                                                        }}
                                                        defaultValue={basicForm.self_evaluation}
                                                    />
                                                )}
                                            />
                                            {errors.self_evaluation && (
                                                <div
                                                    style={{
                                                        marginTop: "0.25rem",
                                                        fontSize: "80%",
                                                        color: "#f86c6b",
                                                    }}
                                                >
                                                    Please select!
                                                </div>
                                            )}
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Row>
                            <Row className="border border-2 border-warning py-2 mb-5 px-3">
                                <div className="w-100 px-2" style={{ marginTop: "-1.4rem" }}>
                                    <Label className="text-danger-edit text-center font-weight-bolder mb-1 px-3" style={{ backgroundColor: "white" }}>ADDITIONAL INFORMATION</Label>
                                </div>

                                <Row className="pt-3 w-100">
                                    <Col md="6" xs="12">
                                        <FormGroup>
                                            <Label htmlFor="financial_support" className="text-secondary font-weight-bolder">Who is financially supporting your studies?</Label>
                                            <Controller
                                                control={control}
                                                name="financial_support"
                                                rules={{ required: true }}
                                                invalid={errors.financial_support ? true : false}
                                                defaultValue={basicForm.financial_support}
                                                render={({ onChange, value, onBlur, name }) => (
                                                    <Select options={optionList.financial_support}
                                                        onChange={e => {
                                                            setValue('financial_support', e)
                                                            setBasicForm({ ...basicForm, financial_support: e })

                                                            return e
                                                        }}
                                                        defaultValue={basicForm.financial_support}
                                                    />
                                                )}
                                            />
                                            {errors.financial_support && (
                                                <div
                                                    style={{
                                                        marginTop: "0.25rem",
                                                        fontSize: "80%",
                                                        color: "#f86c6b",
                                                    }}
                                                >
                                                    Please select!
                                                </div>
                                            )}
                                        </FormGroup>
                                    </Col>
                                    <Col md="6" xs="12">
                                        {basicForm.financial_support && basicForm.financial_support.value == "6" ?

                                            <FormGroup>
                                                <Label htmlFor="other_financial_support" className="text-secondary font-weight-bolder">Please specify:</Label>
                                                <Controller
                                                    control={control}
                                                    name="other_financial_support"
                                                    rules={{ required: true }}
                                                    invalid={errors.other_financial_support ? true : false}
                                                    defaultValue={basicForm.other_financial_support}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="other_financial_support"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, other_financial_support: event.target.value })
                                                                setValue('other_financial_support', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.other_financial_support}
                                                        />
                                                    )}
                                                />
                                                {errors.other_financial_support && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Please specify!
                                                    </div>
                                                )}
                                            </FormGroup>
                                            : ""}
                                    </Col>
                                    <Col md="12" xs="12">
                                        <FormGroup>
                                            <Label htmlFor="grew_up" className="text-secondary font-weight-bolder">Area where you grew up</Label>
                                            <Controller
                                                control={control}
                                                name="grew_up"
                                                rules={{ required: true }}
                                                invalid={errors.grew_up ? true : false}
                                                defaultValue={basicForm.grew_up}
                                                render={({ onChange, value, onBlur, name }) => (
                                                    <Select options={optionList.grew_up}
                                                        onChange={e => {
                                                            setValue('grew_up', e)
                                                            setBasicForm({ ...basicForm, grew_up: e })

                                                            return e
                                                        }}
                                                        defaultValue={basicForm.grew_up}
                                                    />
                                                )}
                                            />
                                            {errors.grew_up && (
                                                <div
                                                    style={{
                                                        marginTop: "0.25rem",
                                                        fontSize: "80%",
                                                        color: "#f86c6b",
                                                    }}
                                                >
                                                    Please select!
                                                </div>
                                            )}
                                        </FormGroup>
                                    </Col>
                                    <Col md="6" xs="12">
                                        <FormGroup>
                                            <Label htmlFor="language_home" className="text-secondary font-weight-bolder">First language / dialect spoken at home</Label>
                                            <Controller
                                                control={control}
                                                name="language_home"
                                                rules={{ required: true }}
                                                invalid={errors.language_home ? true : false}
                                                defaultValue={basicForm.language_home}
                                                render={({ onChange, value, onBlur, name }) => (
                                                    <Select options={optionList.language_home}
                                                        onChange={e => {
                                                            setValue('language_home', e)
                                                            setBasicForm({ ...basicForm, language_home: e })

                                                            return e
                                                        }}
                                                        defaultValue={basicForm.language_home}
                                                    />
                                                )}
                                            />
                                            {errors.language_home && (
                                                <div
                                                    style={{
                                                        marginTop: "0.25rem",
                                                        fontSize: "80%",
                                                        color: "#f86c6b",
                                                    }}
                                                >
                                                    Please select!
                                                </div>
                                            )}
                                        </FormGroup>
                                    </Col>
                                    <Col md="6" xs="12">
                                        {basicForm.language_home && basicForm.language_home.value == "3" ?

                                            <FormGroup>
                                                <Label htmlFor="other_language_home" className="text-secondary font-weight-bolder">Please specify:</Label>
                                                <Controller
                                                    control={control}
                                                    name="other_language_home"
                                                    rules={{ required: true }}
                                                    invalid={errors.other_language_home ? true : false}
                                                    defaultValue={basicForm.other_language_home}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="other_language_home"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, other_language_home: event.target.value })
                                                                setValue('other_language_home', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.other_language_home}
                                                        />
                                                    )}
                                                />
                                                {errors.other_language_home && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Please specify!
                                                    </div>
                                                )}
                                            </FormGroup>
                                            : ""}
                                    </Col>
                                    <Col md="6" xs="12">
                                        <FormGroup>
                                            <Label htmlFor="concerns" className="text-secondary font-weight-bolder">Which of the following concerns you most?</Label>
                                            <Controller
                                                control={control}
                                                name="concerns"
                                                rules={{ required: true }}
                                                invalid={errors.concerns ? true : false}
                                                defaultValue={basicForm.concerns}
                                                render={({ onChange, value, onBlur, name }) => (
                                                    <Select options={optionList.concerns}
                                                        onChange={e => {
                                                            setValue('concerns', e)
                                                            setBasicForm({ ...basicForm, concerns: e })

                                                            return e
                                                        }}
                                                        defaultValue={basicForm.concerns}
                                                    />
                                                )}
                                            />
                                            {errors.concerns && (
                                                <div
                                                    style={{
                                                        marginTop: "0.25rem",
                                                        fontSize: "80%",
                                                        color: "#f86c6b",
                                                    }}
                                                >
                                                    Please select!
                                                </div>
                                            )}
                                        </FormGroup>
                                    </Col>
                                    <Col md="6" xs="12">
                                        {basicForm.concerns && basicForm.concerns.value == "9" ?
                                            <FormGroup>
                                                <Label htmlFor="other_concern" className="text-secondary font-weight-bolder">Please specify:</Label>
                                                <Controller
                                                    control={control}
                                                    name="other_concern"
                                                    rules={{ required: true }}
                                                    invalid={errors.other_concern ? true : false}
                                                    defaultValue={basicForm.other_concern}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="other_concern"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, other_concern: event.target.value })
                                                                setValue('other_concern', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.other_concern}
                                                        />
                                                    )}
                                                />
                                                {errors.other_concern && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Please specify!
                                                    </div>
                                                )}
                                            </FormGroup>
                                            : ""}
                                    </Col>
                                    <Col md="6" xs="12">
                                        <FormGroup>
                                            <Label htmlFor="problem_solution" className="text-secondary font-weight-bolder">How do you usually deal with problem?</Label>
                                            <Controller
                                                control={control}
                                                name="problem_solution"
                                                rules={{ required: true }}
                                                invalid={errors.problem_solution ? true : false}
                                                defaultValue={basicForm.problem_solution}
                                                render={({ onChange, value, onBlur, name }) => (
                                                    <Select options={optionList.problem_solution}
                                                        onChange={e => {
                                                            setValue('problem_solution', e)
                                                            setBasicForm({ ...basicForm, problem_solution: e })

                                                            return e
                                                        }}
                                                        defaultValue={basicForm.problem_solution}
                                                    />
                                                )}
                                            />
                                            {errors.problem_solution && (
                                                <div
                                                    style={{
                                                        marginTop: "0.25rem",
                                                        fontSize: "80%",
                                                        color: "#f86c6b",
                                                    }}
                                                >
                                                    Please select!
                                                </div>
                                            )}
                                        </FormGroup>
                                    </Col>
                                    <Col md="6" xs="12">
                                        {basicForm.problem_solution && basicForm.problem_solution.value == "5" ?
                                            <FormGroup>
                                                <Label htmlFor="other_problem_solution" className="text-secondary font-weight-bolder">Please specify:</Label>
                                                <Controller
                                                    control={control}
                                                    name="other_problem_solution"
                                                    rules={{ required: true }}
                                                    invalid={errors.other_problem_solution ? true : false}
                                                    defaultValue={basicForm.other_problem_solution}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="other_problem_solution"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, other_problem_solution: event.target.value })
                                                                setValue('other_problem_solution', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.other_problem_solution}
                                                        />
                                                    )}
                                                />
                                                {errors.other_problem_solution && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Please specify!
                                                    </div>
                                                )}
                                            </FormGroup>
                                            : ""}
                                    </Col>

                                    <Col md="6" xs="12">
                                        <FormGroup>
                                            <Label htmlFor="cope_up_stress" className="text-secondary font-weight-bolder">How do you cope up with stressful situation?</Label>
                                            <Controller
                                                control={control}
                                                name="cope_up_stress"
                                                rules={{ required: true }}
                                                invalid={errors.cope_up_stress ? true : false}
                                                defaultValue={basicForm.cope_up_stress}
                                                render={({ onChange, value, onBlur, name }) => (
                                                    <Select options={optionList.cope_up_stress}
                                                        onChange={e => {
                                                            setValue('cope_up_stress', e)
                                                            setBasicForm({ ...basicForm, cope_up_stress: e })

                                                            return e
                                                        }}
                                                        defaultValue={basicForm.cope_up_stress}
                                                    />
                                                )}
                                            />
                                            {errors.cope_up_stress && (
                                                <div
                                                    style={{
                                                        marginTop: "0.25rem",
                                                        fontSize: "80%",
                                                        color: "#f86c6b",
                                                    }}
                                                >
                                                    Please select!
                                                </div>
                                            )}
                                        </FormGroup>
                                    </Col>
                                    <Col md="6" xs="12">
                                        {basicForm.cope_up_stress && basicForm.cope_up_stress.value == "7" ?
                                            <FormGroup>
                                                <Label htmlFor="other_cope_up_stress" className="text-secondary font-weight-bolder">Please specify:</Label>
                                                <Controller
                                                    control={control}
                                                    name="other_cope_up_stress"
                                                    rules={{ required: true }}
                                                    invalid={errors.other_cope_up_stress ? true : false}
                                                    defaultValue={basicForm.other_cope_up_stress}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="other_cope_up_stress"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, other_cope_up_stress: event.target.value })
                                                                setValue('other_cope_up_stress', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.other_cope_up_stress}
                                                        />
                                                    )}
                                                />
                                                {errors.other_cope_up_stress && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Please specify!
                                                    </div>
                                                )}
                                            </FormGroup>
                                            : ""}
                                    </Col>
                                    <Col md="12" xs="12">
                                        <FormGroup>
                                            <Label htmlFor="how_to_know_sapc" className="text-secondary font-weight-bolder">How did you get to know about  San Antonio de Padua College?</Label>
                                            <Controller
                                                control={control}
                                                name="how_to_know_sapc"
                                                rules={{ required: true }}
                                                invalid={errors.how_to_know_sapc ? true : false}
                                                defaultValue={basicForm.how_to_know_sapc}
                                                render={({ onChange, value, onBlur, name }) => (
                                                    <Select options={optionList.how_to_know_sapc}
                                                        onChange={e => {
                                                            setValue('how_to_know_sapc', e)
                                                            setBasicForm({ ...basicForm, how_to_know_sapc: e })

                                                            return e
                                                        }}
                                                        defaultValue={basicForm.how_to_know_sapc}
                                                    />
                                                )}
                                            />
                                            {errors.how_to_know_sapc && (
                                                <div
                                                    style={{
                                                        marginTop: "0.25rem",
                                                        fontSize: "80%",
                                                        color: "#f86c6b",
                                                    }}
                                                >
                                                    Please select!
                                                </div>
                                            )}
                                        </FormGroup>
                                    </Col>
                                    <Col md="12" xs="12">
                                        {basicForm.how_to_know_sapc && basicForm.how_to_know_sapc.value == "7" ?
                                            <FormGroup>
                                                <Label htmlFor="other_how_to_know_sapc" className="text-secondary font-weight-bolder">Please specify:</Label>
                                                <Controller
                                                    control={control}
                                                    name="other_how_to_know_sapc"
                                                    rules={{ required: true }}
                                                    invalid={errors.other_how_to_know_sapc ? true : false}
                                                    defaultValue={basicForm.other_how_to_know_sapc}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="other_how_to_know_sapc"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, other_how_to_know_sapc: event.target.value })
                                                                setValue('other_how_to_know_sapc', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.other_how_to_know_sapc}
                                                        />
                                                    )}
                                                />
                                                {errors.other_how_to_know_sapc && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Please specify!
                                                    </div>
                                                )}
                                            </FormGroup>
                                            : ""}
                                    </Col>

                                    <Col md="6" xs="12">
                                        <FormGroup>
                                            <Label htmlFor="listahan" className="text-secondary font-weight-bolder">Are you a part of Listahan (4P`s) ?</Label>
                                            <Controller
                                                control={control}
                                                name="listahan"
                                                rules={{ required: true }}
                                                invalid={errors.listahan ? true : false}
                                                defaultValue={basicForm.listahan}
                                                render={({ onChange, value, onBlur, name }) => (
                                                    <Select options={optionList.boolean}
                                                        onChange={e => {
                                                            setValue('listahan', e)
                                                            setBasicForm({ ...basicForm, listahan: e })

                                                            return e
                                                        }}
                                                        defaultValue={basicForm.listahan}
                                                    />
                                                )}
                                            />
                                            {errors.listahan && (
                                                <div
                                                    style={{
                                                        marginTop: "0.25rem",
                                                        fontSize: "80%",
                                                        color: "#f86c6b",
                                                    }}
                                                >
                                                    Please select!
                                                </div>
                                            )}
                                        </FormGroup>
                                    </Col>
                                    <Col md="6" xs="12">
                                        {basicForm.listahan && basicForm.listahan.value ?
                                            <FormGroup>
                                                <Label htmlFor="household_number" className="text-secondary font-weight-bolder">If Yes, write your DSWD Household Number</Label>
                                                <Controller
                                                    control={control}
                                                    name="household_number"
                                                    rules={{ required: true }}
                                                    invalid={errors.household_number ? true : false}
                                                    defaultValue={basicForm.household_number}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="household_number"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, household_number: event.target.value })
                                                                setValue('household_number', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.household_number}
                                                        />
                                                    )}
                                                />
                                                {errors.household_number && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Household number is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                            : ""}
                                    </Col>


                                    <Col md="6" xs="12">
                                        <FormGroup>
                                            <Label htmlFor="disability" className="text-secondary font-weight-bolder">Are you a person with Disability?</Label>
                                            <Controller
                                                control={control}
                                                name="disability"
                                                rules={{ required: true }}
                                                invalid={errors.disability ? true : false}
                                                defaultValue={basicForm.disability}
                                                render={({ onChange, value, onBlur, name }) => (
                                                    <Select options={optionList.boolean}
                                                        onChange={e => {
                                                            setValue('disability', e)
                                                            setBasicForm({ ...basicForm, disability: e })

                                                            return e
                                                        }}
                                                        defaultValue={basicForm.disability}
                                                    />
                                                )}
                                            />
                                            {errors.disability && (
                                                <div
                                                    style={{
                                                        marginTop: "0.25rem",
                                                        fontSize: "80%",
                                                        color: "#f86c6b",
                                                    }}
                                                >
                                                    Please select!
                                                </div>
                                            )}
                                        </FormGroup>
                                    </Col>
                                    <Col md="6" xs="12">
                                        {basicForm.disability && basicForm.disability.value ?
                                            <FormGroup>
                                                <Label htmlFor="pwd_number" className="text-secondary font-weight-bolder">If Yes, Indicate your PWD Number</Label>
                                                <Controller
                                                    control={control}
                                                    name="pwd_number"
                                                    rules={{ required: true }}
                                                    invalid={errors.pwd_number ? true : false}
                                                    defaultValue={basicForm.pwd_number}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="pwd_number"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, pwd_number: event.target.value })
                                                                setValue('pwd_number', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.pwd_number}
                                                        />
                                                    )}
                                                />
                                                {errors.pwd_number && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        PWD number is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                            : ""}
                                    </Col>

                                    <Col md="6" xs="12">
                                        <FormGroup>
                                            <Label htmlFor="subsidy" className="text-secondary font-weight-bolder">Are you a currently recipient of a government subsidy from DEPED/CHED?</Label>
                                            <Controller
                                                control={control}
                                                name="subsidy"
                                                rules={{ required: true }}
                                                invalid={errors.subsidy ? true : false}
                                                defaultValue={basicForm.subsidy}
                                                render={({ onChange, value, onBlur, name }) => (
                                                    <Select options={optionList.boolean}
                                                        onChange={e => {
                                                            setValue('subsidy', e)
                                                            setBasicForm({ ...basicForm, subsidy: e })

                                                            return e
                                                        }}
                                                        defaultValue={basicForm.subsidy}
                                                    />
                                                )}
                                            />
                                            {errors.subsidy && (
                                                <div
                                                    style={{
                                                        marginTop: "0.25rem",
                                                        fontSize: "80%",
                                                        color: "#f86c6b",
                                                    }}
                                                >
                                                    Please select!
                                                </div>
                                            )}
                                        </FormGroup>
                                    </Col>
                                    <Col md="6" xs="12">
                                        {basicForm.subsidy && basicForm.subsidy.value ?
                                            <FormGroup>
                                                <Label htmlFor="subsidy_details" className="text-secondary font-weight-bolder">If Yes, please write the details</Label>
                                                <Controller
                                                    control={control}
                                                    name="subsidy_details"
                                                    rules={{ required: true }}
                                                    invalid={errors.subsidy_details ? true : false}
                                                    defaultValue={basicForm.subsidy_details}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="subsidy_details"
                                                            onChange={(event) => {
                                                                // setBasicForm({ ...basicForm, subsidy_details: event.target.value })
                                                                setValue('subsidy_details', event.target.value)
                                                                return event.target.value;
                                                            }}
                                                            defaultValue={basicForm.subsidy_details}
                                                        />
                                                    )}
                                                />
                                                {errors.subsidy_details && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        PWD number is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                            : ""}
                                    </Col>

                                </Row>
                            </Row>
                        </Col>
                        <Col md="4" xs="12" className={isDesktop ? "pl-5" : "px-3 w-100"}>
                            <Row className="mb-5">
                                <div className="w-100 px-3">
                                    <Label className="text-danger-edit  font-weight-bolder mb-1" style={{ backgroundColor: "white" }}>Admission Requirements</Label>
                                </div>
                                <div className="px-3">
                                    <p className="text-secondary">
                                        <i>
                                            Make sure to label the attachments properly, File must be less than 3 MB of .jpg, png or pdf file.
                                    </i>
                                    </p>
                                    <hr />
                                    <Row className="flex-column">
                                        <div className="d-flex mb-3">
                                            <Col md="6" xs="6">
                                                <Label className="text-secondary">Form 138 (Grade 6-10 and Card if incoming Grade 7-11)</Label>
                                            </Col>
                                            <Col md="6" xs="6" className="px-3">
                                                <div className="d-flex flex-column">
                                                    <div className="fileUpload btn btn-warning text-white rounded-pill p-2" style={{ width: "110px" }}>
                                                        <span>Upload</span>
                                                        <Controller
                                                            control={control}
                                                            name="form138"
                                                            defaultValue={basicForm.form138}
                                                            rules={{ required: false }}
                                                            invalid={errors.form138 ? true : false}
                                                            render={({ onChange, value, onBlur, name }) => (
                                                                <Input
                                                                    type="file"
                                                                    name="form138"
                                                                    id="uploadBtn"
                                                                    type="file"
                                                                    className="upload"
                                                                    onChange={(e) => setBasicForm({ ...basicForm, form138: e.target.files[0] })}
                                                                    defaultValue={[]}
                                                                // style={{ width: "110px" }}
                                                                />
                                                            )}
                                                        />
                                                    </div>
                                                    <Label className="text-secondary">{basicForm.form138 ? basicForm.form138.name : ""}</Label>
                                                </div>
                                            </Col>
                                        </div>

                                        <hr />
                                        <div className="d-flex mb-3">
                                            <Col md="6" xs="6">
                                                <Label className="text-secondary">Form 137 (School Student Permanent Record Grade 6-10)</Label>
                                            </Col>
                                            <Col md="6" xs="6" className="mx-auto px-auto">
                                                <div className="d-flex flex-column">
                                                    <div className="fileUpload btn btn-warning text-white rounded-pill p-2" style={{ width: "110px" }}>
                                                        <span>Upload</span>
                                                        <Controller
                                                            control={control}
                                                            name="form137"
                                                            defaultValue={basicForm.form137}
                                                            rules={{ required: false }}
                                                            invalid={errors.form137 ? true : false}
                                                            render={({ onChange, value, onBlur, name }) => (
                                                                <Input
                                                                    type="file"
                                                                    name="form137"
                                                                    id="uploadBtn"
                                                                    type="file"
                                                                    className="upload"
                                                                    onChange={(e) => setBasicForm({ ...basicForm, form137: e.target.files[0] })}
                                                                    defaultValue={[]}
                                                                // style={{ width: "110px" }}
                                                                />
                                                            )}
                                                        />
                                                    </div>
                                                    <Label className="text-secondary">{basicForm.form137 ? basicForm.form137.name : ""}</Label>
                                                </div>
                                            </Col>
                                        </div>
                                        <div className="d-flex mb-3">
                                            <Col md="6" xs="6">
                                                <Label className="text-secondary">(2"x2") picture (Colored with white background and name tag)</Label>
                                            </Col>
                                            <Col md="6" xs="6">
                                                <div className="d-flex flex-column">
                                                    <div className="fileUpload btn btn-warning text-white rounded-pill p-2" style={{ width: "110px" }}>
                                                        <span>Upload</span>
                                                        <Controller
                                                            control={control}
                                                            name="picture"
                                                            defaultValue={basicForm.picture}
                                                            rules={{ required: false }}
                                                            invalid={errors.picture ? true : false}
                                                            render={({ onChange, value, onBlur, name }) => (
                                                                <Input
                                                                    type="file"
                                                                    name="picture"
                                                                    id="uploadBtn"
                                                                    type="file"
                                                                    className="upload"
                                                                    onChange={(e) => setBasicForm({ ...basicForm, picture: e.target.files[0] })}
                                                                    defaultValue={[]}
                                                                // style={{ width: "110px" }}
                                                                />
                                                            )}
                                                        />
                                                    </div>
                                                    <Label className="text-secondary">{basicForm.picture ? basicForm.picture.name : ""}</Label>
                                                </div>
                                            </Col>
                                        </div>
                                        <div className="d-flex mb-3">
                                            <Col md="6" xs="6">
                                                <Label className="text-secondary">Certificate of Good Moral Character signed by School Principal/Guidance Officer with documentary stamp.</Label>
                                            </Col>
                                            <Col md="6" xs="6" className="mx-auto px-auto">
                                                <div className="d-flex flex-column">
                                                    <div className="fileUpload btn btn-warning text-white rounded-pill p-2" style={{ width: "110px" }}>
                                                        <span>Upload</span>
                                                        <Controller
                                                            control={control}
                                                            name="good_moral"
                                                            defaultValue={basicForm.good_moral}
                                                            rules={{ required: false }}
                                                            invalid={errors.good_moral ? true : false}
                                                            render={({ onChange, value, onBlur, name }) => (
                                                                <Input
                                                                    type="file"
                                                                    name="good_moral"
                                                                    id="uploadBtn"
                                                                    type="file"
                                                                    className="upload"
                                                                    onChange={(e) => setBasicForm({ ...basicForm, good_moral: e.target.files[0] })}
                                                                    defaultValue={[]}
                                                                // style={{ width: "110px" }}
                                                                />
                                                            )}
                                                        />
                                                    </div>
                                                    <Label className="text-secondary">{basicForm.good_moral ? basicForm.good_moral.name : ""}</Label>
                                                </div>
                                            </Col>
                                        </div>
                                        <hr />
                                        <div className="d-flex mb-3">
                                            <Col md="6" xs="6">
                                                <Label className="text-secondary">National Career Assessment Examination (NCAE) result for Grades 10-12.</Label>
                                            </Col>
                                            <Col md="6" xs="6" className="mx-auto px-auto">
                                                <div className="d-flex flex-column">
                                                    <div className="fileUpload btn btn-warning text-white rounded-pill p-2" style={{ width: "110px" }}>
                                                        <span>Upload</span>
                                                        <Controller
                                                            control={control}
                                                            name="ncae"
                                                            defaultValue={basicForm.ncae}
                                                            rules={{ required: false }}
                                                            invalid={errors.ncae ? true : false}
                                                            render={({ onChange, value, onBlur, name }) => (
                                                                <Input
                                                                    type="file"
                                                                    name="ncae"
                                                                    id="uploadBtn"
                                                                    type="file"
                                                                    className="upload"
                                                                    onChange={(e) => setBasicForm({ ...basicForm, ncae: e.target.files[0] })}
                                                                    defaultValue={[]}
                                                                // style={{ width: "110px" }}
                                                                />
                                                            )}
                                                        />
                                                    </div>
                                                    <Label className="text-secondary">{basicForm.ncae ? basicForm.ncae.name : ""}</Label>
                                                </div>
                                            </Col>
                                        </div>
                                        <div className="d-flex mb-3">
                                            <Col md="6" xs="6">
                                                <Label className="text-secondary">Photocopy of PSA authenticated Birth Certificate.</Label>
                                            </Col>
                                            <Col md="6" xs="6" className="mx-auto px-auto">
                                                <div className="d-flex flex-column">
                                                    <div className="fileUpload btn btn-warning text-white rounded-pill p-2" style={{ width: "110px" }}>
                                                        <span>Upload</span>
                                                        <Controller
                                                            control={control}
                                                            name="birth_certificate"
                                                            defaultValue={basicForm.birth_certificate}
                                                            rules={{ required: false }}
                                                            invalid={errors.birth_certificate ? true : false}
                                                            render={({ onChange, value, onBlur, name }) => (
                                                                <Input
                                                                    type="file"
                                                                    name="birth_certificate"
                                                                    id="uploadBtn"
                                                                    type="file"
                                                                    className="upload"
                                                                    onChange={(e) => setBasicForm({ ...basicForm, birth_certificate: e.target.files[0] })}
                                                                    defaultValue={[]}
                                                                // style={{ width: "110px" }}
                                                                />
                                                            )}
                                                        />
                                                    </div>
                                                    <Label className="text-secondary">{basicForm.birth_certificate ? basicForm.birth_certificate.name : ""}</Label>
                                                </div>
                                            </Col>
                                        </div>
                                    </Row>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6" xs="6" className="w-100">
                            <Button onClick={() => { setEducationSelected(false) }} className="border-0 border-0 bg-white text-dark rounded-pill py-3 px-5 font-weight-bolder">Cancel</Button>
                        </Col>

                        <Col md="6" xs="6" className="w-100">
                            <Button className="bg-warning text-white border-0 rounded-pill py-3 px-5 font-weight-bolder">Next</Button>
                        </Col>
                    </Row>
                </Container>

            </Form>
        </>
    )
}

export default BasicEducationForm;