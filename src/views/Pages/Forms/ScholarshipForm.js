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

const Scholarship = ({ currentStep, setCurrentStep, scholarshipForm, setScholarShipForm }) => {

    const admissionAnswers = localStorage.getItem('admissionAnswers') ? JSON.parse(localStorage.getItem('admissionAnswers')) : ""
    const { register, handleSubmit, errors, control, setValue, getValues } = useForm();
    const [startDate, setStartDate] = useState(new Date());
    const [familyDiscount, setFamilyDiscount] = useState(scholarshipForm.family_discount != "" ? true : false)
    const [academicScholarship, setAcademicScholarship] = useState(scholarshipForm.academic_scholarship != "" ? true : false)
    const [athleticScholarship, setAthleticScholarship] = useState(scholarshipForm.athletic_scholarship != "" ? true : false)
    const [athleticVarsityScholarship, setAthleticVarsityScholarship] = useState(scholarshipForm.athletic_varsity_scholarship != "" ? true : false)
    const [loyaltyDiscount, setLoyaltyDiscount] = useState(scholarshipForm.loyalty_discount != "" ? true : false)
    const [sapcEmployee, setSapcEmployee] = useState(scholarshipForm.sapc_employee != "" ? true : false)
    const [others, setOthers] = useState(scholarshipForm.sapc_employee != "" ? true : false)
    const [scholarship, setScholarship] = useState(false);
    const [escSwitch, setEscSwitch] = useState(false);

    const onSubmit = (data) => {
        data.scholarship = scholarship ? true : false;
        if (scholarship) {
            data.family_discount = familyDiscount ? "1" : ""
            data.academic_scholarship = academicScholarship ? "2" : ""
            data.athletic_scholarship = athleticScholarship ? "3" : ""
            data.athletic_varsity_scholarship = athleticVarsityScholarship ? "athletic_varsity_scholarship" : ""
            data.loyalty_discount = loyaltyDiscount ? "4" : ""
            data.sapc_employee = sapcEmployee ? "5" : ""
            data.others = others ? "6" : ""
            data.esc_switch = escSwitch ? true : false;
            data.academic_scholarship_proof = scholarshipForm.academic_scholarship_proof != "" ? scholarshipForm.academic_scholarship_proof : ""
            data.birth_date = moment(data.scholarhip_date).format('YYYY-MM-DD');
        }
        sessionStorage.setItem('scholarshipForm', JSON.stringify(data));
        setCurrentStep(currentStep + 1);
    }

    const handlePreviousBtn = () => {
        setCurrentStep(currentStep - 1)
    }

    useState(() => {
        if (scholarshipForm.scholarship) {
            setScholarship(true)
        }

    }, [scholarship])

    useState(() => {
        if (scholarshipForm.esc_switch) {
            setEscSwitch(true)
        }
    }, [escSwitch])

    const handleChangeFile = (e) => {
        setScholarShipForm({ ...scholarshipForm, academic_scholarship_proof: e.target.files[0] })
    }

    const handleChangeEscFile = (e) => {
        setScholarShipForm({ ...scholarshipForm, esc_file: e.target.files[0] })
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Container className="my-5">
                    <Row className="mb-5">
                        <Col md="12" xs="12">
                            <Label check>
                                <Controller
                                    control={control}
                                    name="scholarship"
                                    rules={{ required: false }}
                                    invalid={errors.scholarship ? true : false}
                                    defaultValue={false}
                                    render={({ onChange, value, onBlur, name }) => (
                                        <CustomInput
                                            type="switch"
                                            value="scholarship"
                                            name="scholarship"
                                            id="exampleCustomSwitch"
                                            onClick={e => {
                                                setScholarship(!scholarship)
                                                if (!scholarshipForm.scholarship) {
                                                    setScholarShipForm({ ...scholarshipForm, scholarship: true })
                                                    setScholarship(true)
                                                } else {
                                                    setScholarShipForm({ ...scholarshipForm, scholarship: false })
                                                    setScholarship(false)
                                                }
                                                return e.target.value
                                            }}
                                            label="SCHOLARSHIP APPLICATION"
                                            defaultChecked={scholarshipForm.scholarship ? true : false}
                                        />
                                    )}
                                />
                            </Label>
                        </Col>
                    </Row>

                    {scholarshipForm && scholarshipForm.scholarship ?
                        <>
                            <Row className="border border-2 border-warning py-2 mb-5 px-3">
                                <div className="w-100 px-2" style={{ marginTop: "-1.4rem" }}>
                                    <Label className="text-danger-edit text-center font-weight-bolder mb-1 px-3" style={{ backgroundColor: "white" }}>APPLICATION FOR SCHOLARSHIP AND DISCOUNTS</Label>
                                </div>
                                <div className="w-100 py-4">
                                    <Row>
                                        <Col md="8" xs="12">
                                            <Label htmlFor="scholarship_student_name" className="text-secondary font-weight-bolder">NAME OF STUDENT</Label>
                                            <FormGroup>
                                                <Controller
                                                    control={control}
                                                    name="scholarship_student_name"
                                                    rules={{ required: true }}
                                                    invalid={errors.scholarship_student_name ? true : false}
                                                    defaultValue={scholarshipForm.scholarship_student_name}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="scholarship_student_name"
                                                            onChange={(event) => {
                                                                setScholarShipForm({ ...scholarshipForm, scholarship_student_name: event.target.value })
                                                                setValue('scholarship_student_name', event.target.value)
                                                                return scholarshipForm.scholarship_student_name;
                                                            }}
                                                            defaultValue={scholarshipForm.scholarship_student_name}
                                                        // value={scholarshipForm.scholarship_student_name}
                                                        />
                                                    )}
                                                />
                                                {errors.scholarship_student_name && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Name is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="3" xs="12">
                                            <Label htmlFor="scholarhip_date" className="text-secondary font-weight-bolder">DATE</Label>
                                            <FormGroup>
                                                <Controller
                                                    control={control}
                                                    name="scholarhip_date"
                                                    defaultValue={scholarshipForm.scholarhip_date ? moment(scholarshipForm.scholarhip_date).toDate() : scholarshipForm.scholarhip_date}
                                                    rules={{ required: true }}
                                                    placeholder="Date"
                                                    invalid={errors.scholarhip_date ? true : false}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <DatePicker
                                                            className="form-control bg-light"
                                                            selected={scholarshipForm.scholarhip_date ? moment(scholarshipForm.scholarhip_date).toDate() : scholarshipForm.scholarhip_date}
                                                            placeholder="Date"
                                                            onChange={(date) => {
                                                                setStartDate(date)
                                                                setValue('scholarhip_date', date)
                                                                setScholarShipForm({ ...scholarshipForm, scholarhip_date: date })
                                                                return date
                                                            }}
                                                            name="scholarhip_date"
                                                        />
                                                    )}
                                                />
                                                {errors.scholarhip_date && errors.scholarhip_date.type == "required" && (
                                                    <small className="text-danger-edit">
                                                        Date is required!
                                                    </small>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="4" xs="12">
                                            <Label className="text-secondary font-weight-bolder">ACADEMIC YEAR</Label>
                                            <Row>
                                                <Col md="6" xs="12">
                                                    <FormGroup>
                                                        <Controller
                                                            control={control}
                                                            name="scholarship_academic_year_from"
                                                            rules={{ required: true }}
                                                            invalid={errors.scholarship_academic_year_from ? true : false}
                                                            defaultValue={scholarshipForm.scholarship_academic_year_from}
                                                            render={({ onChange, value, onBlur, name }) => (
                                                                <Input
                                                                    className="form-control bg-light"
                                                                    name="scholarship_academic_year_from"
                                                                    onChange={(event) => {
                                                                        setValue('scholarship_academic_year_from', event.target.value)
                                                                        setScholarShipForm({ ...scholarshipForm, scholarship_academic_year_from: event.target.value })
                                                                        return event;
                                                                    }}
                                                                    defaultValue={scholarshipForm.scholarship_academic_year_from}
                                                                />
                                                            )}
                                                        />
                                                        {errors.scholarship_academic_year_from && (
                                                            <div
                                                                style={{
                                                                    marginTop: "0.25rem",
                                                                    fontSize: "80%",
                                                                    color: "#f86c6b",
                                                                }}
                                                            >
                                                                Academic year from is required!
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6" xs="12">
                                                    <FormGroup>
                                                        <Controller
                                                            control={control}
                                                            name="scholarship_academic_year_to"
                                                            rules={{ required: true }}
                                                            invalid={errors.scholarship_academic_year_to ? true : false}
                                                            defaultValue={scholarshipForm.scholarship_academic_year_to}
                                                            render={({ onChange, value, onBlur, name }) => (
                                                                <Input
                                                                    className="form-control bg-light"
                                                                    name="scholarship_academic_year_to"
                                                                    onChange={(event) => {
                                                                        setValue('scholarship_academic_year_to', event.target.value)
                                                                        setScholarShipForm({ ...scholarshipForm, scholarship_academic_year_to: event.target.value })
                                                                        return event;
                                                                    }}
                                                                    defaultValue={scholarshipForm.scholarship_academic_year_to}
                                                                />
                                                            )}
                                                        />
                                                        {errors.scholarship_academic_year_to && (
                                                            <div
                                                                style={{
                                                                    marginTop: "0.25rem",
                                                                    fontSize: "80%",
                                                                    color: "#f86c6b",
                                                                }}
                                                            >
                                                                Academic year to is required!
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md="4" xs="12">
                                            <Label className="text-secondary font-weight-bolder">SEMESTER</Label>
                                            <FormGroup>
                                                <Controller
                                                    control={control}
                                                    name="scholarship_semester"
                                                    rules={{ required: true }}
                                                    invalid={errors.scholarship_semester ? true : false}
                                                    defaultValue={scholarshipForm.scholarship_semester}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="scholarship_semester"
                                                            onChange={(event) => {
                                                                setValue('scholarship_semester', event.target.value)
                                                                setScholarShipForm({ ...scholarshipForm, scholarship_semester: event.target.value })
                                                                return event;
                                                            }}
                                                            defaultValue={scholarshipForm.scholarship_semester}
                                                        />
                                                    )}
                                                />
                                                {errors.scholarship_semester && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Semester is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="2" xs="12">
                                            <Label className="text-secondary font-weight-bolder">GRADE LEVEL</Label>

                                            <FormGroup>
                                                <Controller
                                                    control={control}
                                                    name="scholarship_grade_level"
                                                    rules={{ required: true }}
                                                    invalid={errors.scholarship_grade_level ? true : false}
                                                    defaultValue={scholarshipForm.scholarship_grade_level}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="scholarship_grade_level"
                                                            onChange={(event) => {
                                                                setValue('scholarship_grade_level', event.target.value)
                                                                setScholarShipForm({ ...scholarshipForm, scholarship_grade_level: event.target.value })
                                                                return event;
                                                            }}
                                                            defaultValue={scholarshipForm.scholarship_grade_level}
                                                        />
                                                    )}
                                                />
                                                {errors.scholarship_grade_level && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Grade level is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" xs="12">
                                            <Label className="text-secondary font-weight-bolder">COURSE</Label>

                                            <FormGroup>
                                                <Controller
                                                    control={control}
                                                    name="scholarship_course"
                                                    rules={{ required: true }}
                                                    invalid={errors.scholarship_course ? true : false}
                                                    defaultValue={scholarshipForm.scholarship_course}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="scholarship_course"
                                                            onChange={(event) => {
                                                                setValue('scholarship_course', event.target.value)
                                                                setScholarShipForm({ ...scholarshipForm, scholarship_course: event.target.value })
                                                                return event;
                                                            }}
                                                            defaultValue={scholarshipForm.scholarship_course}
                                                        />
                                                    )}
                                                />
                                                {errors.scholarship_course && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Course is required!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md="2" xs="12">
                                            <Label className="text-secondary font-weight-bolder">YEAR</Label>

                                            <FormGroup>
                                                <Controller
                                                    control={control}
                                                    name="scholarship_year"
                                                    rules={{ required: true }}
                                                    invalid={errors.scholarship_year ? true : false}
                                                    defaultValue={scholarshipForm.scholarship_year}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="scholarship_year"
                                                            onChange={(event) => {
                                                                setValue('scholarship_year', event.target.value)
                                                                setScholarShipForm({ ...scholarshipForm, scholarship_year: event.target.value })
                                                                return event;
                                                            }}
                                                            defaultValue={scholarshipForm.scholarship_year}
                                                        />
                                                    )}
                                                />
                                                {errors.scholarship_year && (
                                                    <div
                                                        style={{
                                                            marginTop: "0.25rem",
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                    >
                                                        Year is required!
                                                    </div>
                                                )}

                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row className="mb-5 py-3">
                                        <Col md="3" xs="12" >
                                            <Label className="text-secondary font-weight-bolder">PLEASE CHECK</Label>
                                            <FormGroup check className="d-flex flex-column w-100 mb-2">
                                                <Label check>
                                                    <Controller
                                                        control={control}
                                                        name="scholarship_application_type"
                                                        defaultValue={scholarshipForm.scholarship_application_type}
                                                        rules={{ required: true }}
                                                        invalid={errors.scholarship_application_type ? true : false}
                                                        render={({ onChange, value, onBlur, name }) => (
                                                            <Input
                                                                type="radio"
                                                                // value="family_discount_1"
                                                                name="scholarship_application_type"
                                                                defaultValue={scholarshipForm.scholarship_application_type}
                                                                onChange={e => {
                                                                    setValue('scholarship_application_type', 'new_application')
                                                                    setScholarShipForm({ ...scholarshipForm, scholarship_application_type: "new_application" })
                                                                    return e.target.value
                                                                }}
                                                                defaultChecked={scholarshipForm.scholarship_application_type == "new_application" ? true : false}
                                                            />
                                                        )}
                                                    />
                                                        New Application
                                                </Label>

                                                <Label check>
                                                    <Controller
                                                        control={control}
                                                        name="scholarship_application_type"
                                                        defaultValue={scholarshipForm.scholarship_application_type}
                                                        rules={{ required: true }}
                                                        invalid={errors.scholarship_application_type ? true : false}
                                                        render={({ onChange, value, onBlur, name }) => (
                                                            <Input
                                                                type="radio"
                                                                // value="family_discount_1"
                                                                name="scholarship_application_type"
                                                                defaultValue={scholarshipForm.scholarship_application_type}
                                                                onChange={e => {
                                                                    setValue('scholarship_application_type', 'renewal')
                                                                    setScholarShipForm({ ...scholarshipForm, scholarship_application_type: "renewal" })
                                                                    return e.target.value
                                                                }}
                                                                defaultChecked={scholarshipForm.scholarship_application_type == "renewal" ? true : false}
                                                                defaultValue={scholarshipForm.scholarship_application_type}
                                                            />
                                                        )}
                                                    />
                                                        Renewal
                                                </Label>
                                            </FormGroup>
                                            {errors.scholarship_application_type && (
                                                <div
                                                    style={{
                                                        fontSize: "80%",
                                                        color: "#f86c6b",
                                                    }}
                                                    className="px-2"
                                                >
                                                    Please select atleast one!
                                                </div>
                                            )}
                                        </Col>
                                        <Col md="6" xs="12">
                                            <Label className="text-secondary font-weight-bolder">PREVIOUSLY AVAILED SCHOLARSHIP</Label>

                                            <FormGroup>
                                                <Controller
                                                    control={control}
                                                    name="scholarship_previous"
                                                    rules={{ required: true }}
                                                    invalid={errors.scholarship_previous ? true : false}
                                                    defaultValue={scholarshipForm.scholarship_previous}
                                                    render={({ onChange, value, onBlur, name }) => (
                                                        <Input
                                                            className="form-control bg-light"
                                                            name="scholarship_previous"
                                                            onChange={(event) => {
                                                                setValue('scholarship_previous', event.target.value)
                                                                setScholarShipForm({ ...scholarshipForm, scholarship_previous: event.target.value })
                                                                return event;
                                                            }}
                                                            defaultValue={scholarshipForm.scholarship_previous}
                                                        />
                                                    )}
                                                />
                                                {errors.scholarship_previous && (
                                                    <div
                                                        style={{
                                                            fontSize: "80%",
                                                            color: "#f86c6b",
                                                        }}
                                                        className="px-2"
                                                    >
                                                        Please select atleast one!
                                                    </div>
                                                )}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </div>
                            </Row>

                            <Row className="border border-2 border-warning py-2 mb-5 px-3">
                                <div className="w-100 px-2" style={{ marginTop: "-1.4rem" }}>
                                    <Label className="text-danger-edit text-center font-weight-bolder mb-1 px-3" style={{ backgroundColor: "white" }}>SCHOLARSHIP AND DISCOUNTS APPLIED FOR</Label>
                                </div>
                                <div className="w-100 py-4">
                                    <Row className="pb-4">
                                        <Col md="12" xs="12">
                                            <FormGroup check>
                                                <Label check className="text-secondary font-weight-bolder">
                                                    <Controller
                                                        defaultValue={scholarshipForm.family_discount}
                                                        name="family_discount"
                                                        control={control}
                                                        rules={{ required: false }}
                                                        invalid={errors.family_discount ? true : false}
                                                        render={({ onChange, value, onBlur, name }) => (
                                                            <Input
                                                                type="checkbox"
                                                                name="family_discount"
                                                                value="1"
                                                                onClick={() => {
                                                                    if (scholarshipForm.family_discount != "1") {
                                                                        setScholarShipForm({ ...scholarshipForm, family_discount: "1" })
                                                                    } else {
                                                                        setScholarShipForm({ ...scholarshipForm, family_discount: "0" })
                                                                    }
                                                                }}
                                                                defaultChecked={scholarshipForm.family_discount == "1" ? true : false}
                                                            />
                                                        )}
                                                    />
                                                FAMILY DISCOUNT
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        {console.log(scholarshipForm.family_discount), scholarshipForm.family_discount == "1" ?
                                            <>
                                                <Col md="4" xs="12">
                                                    <p className="text-secondary px-3">Number of Siblings in SAPC:</p>
                                                </Col>
                                                <Col md="6" xs="12" className="px-5">
                                                    <FormGroup check row className="d-flex justify-content-between">
                                                        <Label check>
                                                            <Controller
                                                                control={control}
                                                                name="family_discount_siblings"
                                                                defaultValue={scholarshipForm.family_discount_siblings}
                                                                rules={{ required: false }}
                                                                invalid={errors.family_discount_siblings ? true : false}
                                                                render={({ onChange, value, onBlur, name }) => (
                                                                    <Input
                                                                        type="radio"
                                                                        // value="family_discount_1"
                                                                        name="family_discount_siblings"
                                                                        defaultValue={scholarshipForm.family_discount_siblings}
                                                                        onChange={e => {
                                                                            setScholarShipForm({ ...scholarshipForm, family_discount_siblings: "1" })
                                                                            return e.target.value
                                                                        }}
                                                                        defaultChecked={scholarshipForm.family_discount_siblings == "1" ? true : false}
                                                                    />
                                                                )}
                                                            />
                                                        1
                                                </Label>
                                                        <Label check>
                                                            <Controller
                                                                control={control}
                                                                name="family_discount_siblings"
                                                                defaultValue={scholarshipForm.family_discount_siblings}
                                                                rules={{ required: false }}
                                                                invalid={errors.family_discount_siblings ? true : false}
                                                                render={({ onChange, value, onBlur, name }) => (
                                                                    <Input
                                                                        type="radio"
                                                                        // value="family_discount_2"
                                                                        name="family_discount_siblings"
                                                                        onChange={e => {
                                                                            setScholarShipForm({ ...scholarshipForm, family_discount_siblings: "2" })
                                                                            return e.target.value
                                                                        }}
                                                                        defaultChecked={scholarshipForm.family_discount_siblings == "2" ? true : false}
                                                                    />
                                                                )}
                                                            />
                                        2
                                    </Label>
                                                        <Label check>
                                                            <Controller
                                                                control={control}
                                                                name="family_discount_siblings"
                                                                defaultValue={scholarshipForm.family_discount_siblings}
                                                                rules={{ required: false }}
                                                                invalid={errors.family_discount_siblings ? true : false}
                                                                render={({ onChange, value, onBlur, name }) => (
                                                                    <Input
                                                                        type="radio"
                                                                        // value="family_discount_3"
                                                                        name="family_discount_siblings"
                                                                        onChange={e => {
                                                                            setScholarShipForm({ ...scholarshipForm, family_discount_siblings: "3" })
                                                                            return e.target.value
                                                                        }}
                                                                        defaultChecked={scholarshipForm.family_discount_siblings == "3" ? true : false}
                                                                    />
                                                                )}
                                                            />
                                        3
                                    </Label>
                                                        <Label check>
                                                            <Controller
                                                                control={control}
                                                                name="family_discount_siblings"
                                                                defaultValue={scholarshipForm.family_discount_siblings}
                                                                rules={{ required: false }}
                                                                invalid={errors.family_discount_siblings ? true : false}
                                                                render={({ onChange, value, onBlur, name }) => (
                                                                    <Input
                                                                        type="radio"
                                                                        // value="family_discount_4"
                                                                        name="family_discount_siblings"
                                                                        onChange={e => {
                                                                            setScholarShipForm({ ...scholarshipForm, family_discount_siblings: "4" })
                                                                            return e.target.value
                                                                        }}
                                                                        defaultChecked={scholarshipForm.family_discount_siblings == "4" ? true : false}
                                                                    />
                                                                )}
                                                            />
                                        4
                                    </Label>
                                                        <Label check>
                                                            <Controller
                                                                control={control}
                                                                name="family_discount_siblings"
                                                                defaultValue={scholarshipForm.family_discount_siblings}
                                                                rules={{ required: false }}
                                                                invalid={errors.family_discount_siblings ? true : false}
                                                                render={({ onChange, value, onBlur, name }) => (
                                                                    <Input
                                                                        type="radio"
                                                                        // value="family_discount_5"
                                                                        name="family_discount_siblings"
                                                                        onChange={e => {
                                                                            setScholarShipForm({ ...scholarshipForm, family_discount_siblings: "5" })
                                                                            return e.target.value
                                                                        }}
                                                                        defaultChecked={scholarshipForm.family_discount_siblings == "5" ? true : false}
                                                                    />
                                                                )}
                                                            />
                                        5
                                    </Label>
                                                    </FormGroup>
                                                </Col>
                                            </>
                                            : ""}
                                    </Row>
                                    <Row className="mb-4">
                                        <Col md="12" xs="12">
                                            <FormGroup check>
                                                <Label check className="text-secondary font-weight-bolder">
                                                    <Controller
                                                        defaultValue={scholarshipForm.academic_scholarship}
                                                        name="academic_scholarship"
                                                        control={control}
                                                        rules={{ required: false }}
                                                        invalid={errors.academic_scholarship ? true : false}
                                                        render={({ onChange, value, onBlur, name }) => (
                                                            <Input
                                                                type="checkbox"
                                                                name="academic_scholarship"
                                                                value="2"
                                                                onClick={() => {
                                                                    if (scholarshipForm.academic_scholarship != "2") {
                                                                        setScholarShipForm({ ...scholarshipForm, academic_scholarship: "2" })
                                                                    } else {
                                                                        setScholarShipForm({ ...scholarshipForm, academic_scholarship: "0" })
                                                                    }
                                                                }}
                                                                defaultChecked={scholarshipForm.academic_scholarship == "2" ? true : false}
                                                            />
                                                        )}
                                                    />
                                ACADEMIC SCHOLARSHIP
                                </Label>
                                            </FormGroup>
                                        </Col>
                                        {scholarshipForm.academic_scholarship == "2" ?
                                            <>
                                                <Col md="4" xs="12">
                                                    <p className="text-secondary px-3 mb-3">Academic Rank on previous school year:</p>

                                                </Col>
                                                <Col md="6" xs="12" className="px-5">
                                                    <FormGroup check row className="d-flex justify-content-between">
                                                        <Label check>
                                                            <Controller
                                                                control={control}
                                                                name="academic_scholarship_rank"
                                                                defaultValue={scholarshipForm.academic_scholarship_rank}
                                                                rules={{ required: false }}
                                                                invalid={errors.academic_scholarship_rank ? true : false}
                                                                render={({ onChange, value, onBlur, name }) => (
                                                                    <Input
                                                                        type="radio"
                                                                        // value="academic_scholarship_1"
                                                                        name="academic_scholarship_rank"
                                                                        onChange={e => {
                                                                            setScholarShipForm({ ...scholarshipForm, academic_scholarship_rank: "1" })
                                                                            return e.target.value
                                                                        }}
                                                                        defaultChecked={scholarshipForm.academic_scholarship_rank == "1" ? true : false}
                                                                    />
                                                                )}
                                                            />
                                        1
                                </Label>
                                                        <Label check>
                                                            <Controller
                                                                control={control}
                                                                name="academic_scholarship_rank"
                                                                defaultValue={scholarshipForm.academic_scholarship_rank}
                                                                rules={{ required: false }}
                                                                invalid={errors.academic_scholarship_rank ? true : false}
                                                                render={({ onChange, value, onBlur, name }) => (
                                                                    <Input
                                                                        type="radio"
                                                                        // value="academic_scholarship_2"
                                                                        name="academic_scholarship_rank"
                                                                        onChange={e => {
                                                                            setScholarShipForm({ ...scholarshipForm, academic_scholarship_rank: "2" })
                                                                            return e.target.value
                                                                        }}
                                                                        defaultChecked={scholarshipForm.academic_scholarship_rank == "2" ? true : false}
                                                                    />
                                                                )}
                                                            />
                                        2
                                </Label>
                                                        <Label check>
                                                            <Controller
                                                                control={control}
                                                                name="academic_scholarship_rank"
                                                                defaultValue={scholarshipForm.academic_scholarship_rank}
                                                                rules={{ required: false }}
                                                                invalid={errors.academic_scholarship_rank ? true : false}
                                                                render={({ onChange, value, onBlur, name }) => (
                                                                    <Input
                                                                        type="radio"
                                                                        // value="academic_scholarship_3"
                                                                        name="academic_scholarship_rank"
                                                                        onChange={e => {
                                                                            setScholarShipForm({ ...scholarshipForm, academic_scholarship_rank: "3" })
                                                                            return e.target.value
                                                                        }}
                                                                        defaultChecked={scholarshipForm.academic_scholarship_rank == "3" ? true : false}
                                                                    />
                                                                )}
                                                            />
                                        3
                                </Label>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="12" xs="12">
                                                    <p className="text-secondary">Please attach proof/certification from Principal:</p>
                                                    <div className="d-flex flex-column">
                                                        <div className="fileUpload btn btn-warning text-white rounded-pill p-2" style={{ width: "110px" }}>
                                                            <span>Upload</span>
                                                            <Controller
                                                                control={control}
                                                                name="academic_scholarship_proof"
                                                                defaultValue={scholarshipForm.academic_scholarship_proof}
                                                                rules={{ required: false }}
                                                                invalid={errors.academic_scholarship_proof ? true : false}
                                                                render={({ onChange, value, onBlur, name }) => (
                                                                    <Input
                                                                        type="file"
                                                                        name="academic_scholarship_proof"
                                                                        id="uploadBtn"
                                                                        type="file"
                                                                        className="upload"
                                                                        onChange={handleChangeFile}
                                                                        defaultValue={[]}
                                                                    // style={{ width: "110px" }}
                                                                    />
                                                                )}
                                                            />
                                                        </div>
                                                        <Label className="text-secondary">{scholarshipForm.academic_scholarship_proof ? scholarshipForm.academic_scholarship_proof.name : ""}</Label>
                                                    </div>
                                                </Col>
                                            </>
                                            : ""}
                                    </Row>

                                    <Row className="mb-4 py-3">
                                        <Col md="12" xs="12">
                                            <FormGroup check>
                                                <Label check className="text-secondary font-weight-bolder">
                                                    <Controller
                                                        defaultValue={scholarshipForm.athletic_scholarship}
                                                        name="athletic_scholarship"
                                                        control={control}
                                                        rules={{ required: false }}
                                                        invalid={errors.athletic_scholarship ? true : false}
                                                        as={
                                                            <Input
                                                                type="checkbox"
                                                                name="athletic_scholarship"
                                                                value="3"
                                                                onClick={() => {
                                                                    if (scholarshipForm.athletic_scholarship != "3") {
                                                                        setScholarShipForm({ ...scholarshipForm, athletic_scholarship: "3" })
                                                                    } else {
                                                                        setScholarShipForm({ ...scholarshipForm, athletic_scholarship: "0" })
                                                                    }
                                                                }}
                                                                defaultChecked={scholarshipForm.athletic_scholarship == "3" ? true : false}
                                                            />
                                                        }
                                                    />
                                    ATHLETIC SCHOLARSHIP
                                    </Label>
                                            </FormGroup>
                                        </Col>
                                        {scholarshipForm.athletic_scholarship == "3" ?
                                            <>
                                                <Col md="4" xs="12">
                                                    <p className="text-secondary px-3">Level of Sports participation:</p>
                                                </Col>
                                                <Col md="6" xs="12" className="w-100 mb-3">
                                                    <FormGroup check className="d-flex justify-content-between">
                                                        <Label check>
                                                            <Controller
                                                                control={control}
                                                                name="athletic_level"
                                                                defaultValue={scholarshipForm.athletic_level}
                                                                rules={{ required: false }}
                                                                invalid={errors.athletic_level ? true : false}
                                                                render={({ onChange, value, onBlur, name }) => (
                                                                    <Input
                                                                        type="radio"
                                                                        // value="athletic_level_provincial"
                                                                        name="athletic_level"
                                                                        onChange={e => {
                                                                            setScholarShipForm({ ...scholarshipForm, athletic_level: "1" })
                                                                            return e.target.value
                                                                        }}
                                                                        defaultChecked={scholarshipForm.athletic_level == "1" ? true : false}
                                                                    />
                                                                )}
                                                            />
                                                    Provincial
                                                </Label>
                                                        <Label check>
                                                            <Controller
                                                                control={control}
                                                                name="athletic_level"
                                                                defaultValue={scholarshipForm.athletic_level}
                                                                rules={{ required: false }}
                                                                invalid={errors.athletic_level ? true : false}
                                                                render={({ onChange, value, onBlur, name }) => (
                                                                    <Input
                                                                        type="radio"
                                                                        // value="athletic_level_regional"
                                                                        name="athletic_level"
                                                                        onChange={e => {
                                                                            setScholarShipForm({ ...scholarshipForm, athletic_level: "2" })
                                                                            return e.target.value
                                                                        }}
                                                                        defaultChecked={scholarshipForm.athletic_level == "2" ? true : false}
                                                                    />
                                                                )}
                                                            />
                                                    Regional
                                                </Label>
                                                        <Label check>
                                                            <Controller
                                                                control={control}
                                                                name="athletic_level"
                                                                defaultValue={scholarshipForm.athletic_level}
                                                                rules={{ required: false }}
                                                                invalid={errors.athletic_level ? true : false}
                                                                render={({ onChange, value, onBlur, name }) => (
                                                                    <Input
                                                                        type="radio"
                                                                        // value="athletic_level_national"
                                                                        name="athletic_level"
                                                                        onChange={e => {
                                                                            setScholarShipForm({ ...scholarshipForm, athletic_level: "3" })
                                                                            return e.target.value
                                                                        }}
                                                                        defaultChecked={scholarshipForm.athletic_level == "3" ? true : false}
                                                                    />
                                                                )}
                                                            />
                                                    National
                                            </Label>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="4" xs="12">
                                                    <FormGroup check>
                                                        <Label check className="text-secondary">
                                                            <Controller
                                                                defaultValue={scholarshipForm.athletic_varsity_scholarship}
                                                                name="athletic_varsity_scholarship"
                                                                control={control}
                                                                rules={{ required: false }}
                                                                invalid={errors.athletic_varsity_scholarship ? true : false}
                                                                as={
                                                                    <Input
                                                                        type="checkbox"
                                                                        name="athletic_varsity_scholarship"
                                                                        value="athletic_varsity_scholarship"
                                                                        onClick={() => {
                                                                            setScholarShipForm({ ...scholarshipForm, athletic_varsity_scholarship: "athletic_varsity_scholarship" })
                                                                        }}
                                                                        defaultChecked={scholarshipForm.athletic_varsity_scholarship == "athletic_varsity_scholarship" ? true : false}
                                                                    />
                                                                }
                                                            />
                                                    Member of SAPC Varsity Team:
                                                    </Label>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6" xs="12">
                                                    <FormGroup>
                                                        <Controller
                                                            control={control}
                                                            name="scholarship_specific_sports"
                                                            rules={{ required: false }}
                                                            invalid={errors.scholarship_specific_sports ? true : false}
                                                            render={({ onChange, value, onBlur, name }) => (
                                                                <Input
                                                                    className="form-control bg-light"
                                                                    placeholder="Specify Sport"
                                                                    name="scholarship_specific_sports"
                                                                    onChange={(event) => {
                                                                        setScholarShipForm({ ...scholarshipForm, scholarship_specific_sports: event.target.value })
                                                                        return event;
                                                                    }}
                                                                    defaultValue={scholarshipForm.scholarship_specific_sports}
                                                                />
                                                            )}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </>
                                            : ""}
                                    </Row>

                                    <Row className="mb-4">
                                        <Col md="12" xs="12">
                                            <FormGroup check>
                                                <Label check className="text-secondary font-weight-bolder">
                                                    <Controller
                                                        defaultValue={scholarshipForm.loyalty_discount}
                                                        name="loyalty_discount"
                                                        control={control}
                                                        rules={{ required: false }}
                                                        invalid={errors.loyalty_discount ? true : false}
                                                        as={
                                                            <Input
                                                                type="checkbox"
                                                                value="loyalty_discount"
                                                                name="4"
                                                                onClick={() => {
                                                                    if (scholarshipForm.loyalty_discount != "4") {
                                                                        setScholarShipForm({ ...scholarshipForm, loyalty_discount: "4" })
                                                                    } else {
                                                                        setScholarShipForm({ ...scholarshipForm, loyalty_discount: "0" })
                                                                    }
                                                                }}
                                                                defaultChecked={scholarshipForm.loyalty_discount == "4" ? true : false}
                                                            />
                                                        }
                                                    />
                                LOYALTY DISCOUNT
                                </Label>
                                            </FormGroup>
                                        </Col>
                                        {scholarshipForm.loyalty_discount == "4" ?
                                            <>
                                                <Col md="4" xs="12">
                                                    <p className="text-secondary px-3">Specify Year of Graduation at SAPC:</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <FormGroup>
                                                        <Controller
                                                            control={control}
                                                            name="loyalty_discount_specific_year"
                                                            rules={{ required: false }}
                                                            invalid={errors.loyalty_discount_specific_year ? true : false}
                                                            render={({ onChange, value, onBlur, name }) => (
                                                                <Input
                                                                    className="form-control bg-light"
                                                                    placeholder="Year"
                                                                    name="loyalty_discount_specific_year"
                                                                    onChange={(event) => {
                                                                        setScholarShipForm({ ...scholarshipForm, loyalty_discount_specific_year: event.target.value })
                                                                        return event;
                                                                    }}
                                                                    defaultValue={scholarshipForm.loyalty_discount_specific_year}
                                                                />
                                                            )}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </>
                                            : ""}
                                    </Row>

                                    <Row className="mb-4">
                                        <Col md="12" xs="12">
                                            <FormGroup check>
                                                <Label check className="text-secondary font-weight-bolder">
                                                    <Controller
                                                        defaultValue={scholarshipForm.sapc_employee}
                                                        name="sapc_employee"
                                                        control={control}
                                                        rules={{ required: false }}
                                                        invalid={errors.sapc_employee ? true : false}
                                                        as={
                                                            <Input
                                                                type="checkbox"
                                                                value="sapc_employee"
                                                                name="5"
                                                                onClick={() => {
                                                                    if (scholarshipForm.sapc_employee != "5") {
                                                                        setScholarShipForm({ ...scholarshipForm, sapc_employee: "5" })
                                                                    } else {
                                                                        setScholarShipForm({ ...scholarshipForm, sapc_employee: "0" })
                                                                    }
                                                                }}
                                                                defaultChecked={scholarshipForm.sapc_employee == "5" ? true : false}
                                                            />
                                                        }
                                                    />
                                        SAPC EMPLOYEE
                                        </Label>
                                            </FormGroup>
                                        </Col>
                                        {scholarshipForm.sapc_employee == "5" ?
                                            <>
                                                <Col md="4" xs="12">
                                                    <p className="text-secondary px-3">Specify Year of Service:</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <FormGroup>
                                                        <Controller
                                                            control={control}
                                                            name="sapc_employee_scholarship_specific"
                                                            rules={{ required: false }}
                                                            invalid={errors.sapc_employee_scholarship_specific ? true : false}
                                                            render={({ onChange, value, onBlur, name }) => (
                                                                <Input
                                                                    className="form-control bg-light"
                                                                    placeholder="Year"
                                                                    name="sapc_employee_scholarship_specific"
                                                                    onChange={(event) => {
                                                                        setScholarShipForm({ ...scholarshipForm, sapc_employee_scholarship_specific: event.target.value })
                                                                        return event;
                                                                    }}
                                                                    defaultValue={scholarshipForm.sapc_employee_scholarship_specific}
                                                                />
                                                            )}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </>
                                            : ""}
                                    </Row>

                                    <Row className="mb-4">
                                        <Col md="12" xs="12">
                                            <FormGroup check>
                                                <Label check className="text-secondary font-weight-bolder">
                                                    <Controller
                                                        defaultValue={scholarshipForm.others}
                                                        name="others"
                                                        control={control}
                                                        rules={{ required: false }}
                                                        invalid={errors.others ? true : false}
                                                        as={
                                                            <Input
                                                                type="checkbox"
                                                                value="others"
                                                                name="6"
                                                                onClick={() => {
                                                                    if (scholarshipForm.others != "6") {
                                                                        setScholarShipForm({ ...scholarshipForm, others: "6" })
                                                                    } else {
                                                                        setScholarShipForm({ ...scholarshipForm, others: "0" })
                                                                    }
                                                                }}
                                                                defaultChecked={scholarshipForm.others == "6" ? true : false}
                                                            />
                                                        }
                                                    />
                                        OTHERS
                                        </Label>
                                            </FormGroup>
                                        </Col>
                                        {scholarshipForm.others == "6" ?
                                            <>
                                                <Col md="4" xs="12">
                                                    <p className="text-secondary px-3">Please specify:</p>
                                                </Col>
                                                <Col md="6" xs="12">
                                                    <FormGroup>
                                                        <Controller
                                                            control={control}
                                                            name="other_scholarship_specific"
                                                            rules={{ required: false }}
                                                            defaultValue={scholarshipForm.other_scholarship_specific}
                                                            invalid={errors.other_scholarship_specific ? true : false}
                                                            render={({ onChange, value, onBlur, name }) => (
                                                                <Input
                                                                    className="form-control bg-light"
                                                                    placeholder="Other Scholarship"
                                                                    name="other_scholarship_specific"
                                                                    onChange={(event) => {
                                                                        setScholarShipForm({ ...scholarshipForm, other_scholarship_specific: event.target.value })
                                                                        return event;
                                                                    }}
                                                                    defaultValue={scholarshipForm.other_scholarship_specific}
                                                                />
                                                            )}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </>
                                            : ""}
                                    </Row>
                                    {admissionAnswers && admissionAnswers.grade_type && admissionAnswers.grade_type.label == "JUNIOR HIGH SCHOOL" ?

                                        <Row className="mb-4">
                                            <Col md="4" xs="12">
                                                <p className="text-secondary font-weight-bolder">EDUCATIONAL SERVICE CONTRACTING (ESC)</p>
                                            </Col>
                                            <Col md="6" xs="12">
                                                <FormGroup>
                                                    <Label check>
                                                        <Controller
                                                            control={control}
                                                            name="esc_switch"
                                                            rules={{ required: false }}
                                                            invalid={errors.esc_switch ? true : false}
                                                            defaultValue={false}
                                                            render={({ onChange, value, onBlur, name }) => (
                                                                <CustomInput
                                                                    type="switch"
                                                                    value="esc_switch"
                                                                    name="esc_switch"
                                                                    id="escSwitchId"
                                                                    onClick={e => {
                                                                        setScholarShipForm({ ...scholarshipForm, esc_switch: !scholarshipForm.esc_switch })
                                                                        return e.target.value
                                                                    }}
                                                                    defaultChecked={scholarshipForm.esc_switch ? true : false}
                                                                    defaultValue={false}
                                                                />
                                                            )}
                                                        />
                                                    </Label>
                                                </FormGroup>

                                            </Col>
                                            {scholarshipForm.esc_switch ?
                                                <>
                                                    <Col md="12" xs="12">
                                                        <p className="text-secondary">For transferee/new student please attach ESC Certificate and for old student/existing is ESC ID</p>
                                                    </Col>
                                                    <Col md="12" xs="12">
                                                        <div className="d-flex flex-column">
                                                            <div className="fileUpload btn btn-warning text-white rounded-pill p-2" style={{ width: "110px" }}>
                                                                <span>Upload</span>
                                                                <Controller
                                                                    control={control}
                                                                    name="esc_file"
                                                                    defaultValue={scholarshipForm.esc_file}
                                                                    rules={{ required: false }}
                                                                    invalid={errors.esc_file ? true : false}
                                                                    render={({ onChange, value, onBlur, name }) => (
                                                                        <Input
                                                                            type="file"
                                                                            name="esc_file"
                                                                            id="uploadBtn"
                                                                            className="upload"
                                                                            onChange={handleChangeEscFile}
                                                                            defaultValue={[]}
                                                                        // style={{ width: "110px" }}
                                                                        />
                                                                    )}
                                                                />
                                                            </div>
                                                            <Label className="text-secondary">{scholarshipForm.esc_file ? scholarshipForm.esc_file.name : ""}</Label>
                                                        </div>
                                                    </Col>
                                                </>
                                                : ""}
                                        </Row>
                                        : ""}
                                </div>
                            </Row>
                        </>
                        : ""}

                    <Row className="mt-5 justify-content-center text-center">
                        <Col md="6" xs="12" className="text-center w-100">
                            <Button type="button" onClick={handlePreviousBtn} className="mb-2 bg-white border-warning text-warning-edit rounded-pill py-3 px-5 font-weight-bolder">Previous</Button>
                            <Button className="bg-white border-0 text-dark rounded-pill py-3 mb-2 px-5 font-weight-bolder">Cancel</Button>
                        </Col>

                        <Col md="6" xs="12" className="text-center w-100">
                            <Button className="bg-warning text-white rounded-pill border-0 py-3 mb-2 px-5 font-weight-bolder">Next</Button>
                        </Col>
                    </Row>
                </Container>

            </Form>
        </>
    )
}

export default Scholarship;