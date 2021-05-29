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
import optionList from '../Admission/optionList.js'

const TertiaryEducationForm = ({ setEducationSelected, currentStep, setCurrentStep, setLoading, basicForm, setBasicForm }) => {

    const admissionAnswers = localStorage.getItem('admissionAnswers') ? JSON.parse(localStorage.getItem('admissionAnswers')) : ""
    const { register, handleSubmit, errors, control, setValue, getValues } = useForm();
    const [startDate, setStartDate] = useState("");

    const onSubmit = (data) => {
        setCurrentStep(1)
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Container className="my-5">
                <Row className="border border-2 border-warning py-2 mb-5">
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Education Type:  </span> {admissionAnswers.education_type}</Label>
                                </Col>
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Student Type:  </span> {admissionAnswers.student_type.label}</Label>
                                </Col>
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Grade Year/Level: </span> {admissionAnswers.grade_year_level.label}</Label>
                                </Col>
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Course: </span> {admissionAnswers.tertiary_course.label}</Label>
                                </Col>
                                <Col md="12" xs="12">
                                    <Label><span className="font-weight-bolder">Semester: </span> {admissionAnswers.semester.label}</Label>
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
                                                        setBasicForm({ ...basicForm, last_name: event.target.value })
                                                        setValue('last_name', event.target.value)
                                                        return basicForm.last_name;
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
                                                        setBasicForm({ ...basicForm, first_name: event.target.value })
                                                        setValue('first_name', event.target.value)
                                                        return basicForm.first_name;
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
                                                        setBasicForm({ ...basicForm, middle_name: event.target.value })
                                                        setValue('middle_name', event.target.value)
                                                        return basicForm.middle_name;
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
                                                        setBasicForm({ ...basicForm, suffix: event.target.value })
                                                        setValue('suffix', event.target.value)
                                                        return basicForm.suffix;
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
                                                        setBasicForm({ ...basicForm, birth_place: event.target.value })
                                                        setValue('birth_place', event.target.value)
                                                        return basicForm.birth_place;
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
                                                        setBasicForm({ ...basicForm, birth_date: date })
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
                                                        setBasicForm({ ...basicForm, age: event.target.value })
                                                        setValue('age', event.target.value)
                                                        return basicForm.age;
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
                                    <FormGroup>
                                        <Label htmlFor="civil_status" className="text-secondary font-weight-bolder">Civil Status</Label>
                                        <Controller
                                            control={control}
                                            name="civil_status"
                                            rules={{ required: true }}
                                            invalid={errors.civil_status ? true : false}
                                            defaultValue={basicForm.civil_status}
                                            render={({ onChange, value, onBlur, name }) => (
                                                <Select options={optionList.civil_status}
                                                    onChange={e => {
                                                        setValue('civil_status', e)
                                                        setBasicForm({ ...basicForm, civil_status: e })

                                                        return e
                                                    }}
                                                    defaultValue={basicForm.civil_status}

                                                />
                                            )}
                                        />
                                        {errors.civil_status && (
                                            <div
                                                style={{
                                                    marginTop: "0.25rem",
                                                    fontSize: "80%",
                                                    color: "#f86c6b",
                                                }}
                                            >
                                                Civil status is required!
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
                                                        setBasicForm({ ...basicForm, street: event.target.value })
                                                        setValue('street', event.target.value)
                                                        return basicForm.street;
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
                                                        setBasicForm({ ...basicForm, province: event.target.value })
                                                        setValue('province', event.target.value)
                                                        return basicForm.province;
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
                                                        setBasicForm({ ...basicForm, city: event.target.value })
                                                        setValue('city', event.target.value)
                                                        return basicForm.city;
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
                                                        setBasicForm({ ...basicForm, barangay: event.target.value })
                                                        setValue('barangay', event.target.value)
                                                        return basicForm.barangay;
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

                    <Row className="border border-2 border-warning py-2 mb-5 px-3">
                        <div className="w-100 px-2" style={{ marginTop: "-1.4rem" }}>
                            <Label className="text-danger-edit text-center font-weight-bolder mb-1 px-3" style={{ backgroundColor: "white" }}>FAMILY INFORMATION</Label>
                        </div>
                        <div className="w-100 py-4">
                            <Row>
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
                                                        setBasicForm({ ...basicForm, father_name: event.target.value })
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
                                                        setBasicForm({ ...basicForm, father_contact_no: event.target.value })
                                                        setValue('father_contact_no', event.target.value)
                                                        return basicForm.father_contact_no;
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
                                                        setBasicForm({ ...basicForm, father_home_address: event.target.value })
                                                        setValue('father_home_address', event.target.value)
                                                        return basicForm.father_home_address;
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
                                                        setBasicForm({ ...basicForm, mother_name: event.target.value })
                                                        setValue('mother_name', event.target.value)
                                                        return basicForm.mother_name;
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
                                                        setBasicForm({ ...basicForm, mother_contact_no: event.target.value })
                                                        setValue('mother_contact_no', event.target.value)
                                                        return basicForm.mother_contact_no;
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
                                                        setBasicForm({ ...basicForm, mother_home_address: event.target.value })
                                                        setValue('mother_home_address', event.target.value)
                                                        return basicForm.mother_home_address;
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
                                                        setBasicForm({ ...basicForm, guardian_name: event.target.value })
                                                        setValue('guardian_name', event.target.value)
                                                        return basicForm.guardian_name;
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
                                                        setBasicForm({ ...basicForm, guardian_contact_no: event.target.value })
                                                        setValue('guardian_contact_no', event.target.value)
                                                        return basicForm.guardian_contact_no;
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
                                                        setBasicForm({ ...basicForm, guardian_home_address: event.target.value })
                                                        setValue('guardian_home_address', event.target.value)
                                                        return basicForm.guardian_home_address;
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
                            </Row>
                        </div>
                    </Row>



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
                                                        setBasicForm({ ...basicForm, elementary_school_name: event.target.value })
                                                        setValue('elementary_school_name', event.target.value)
                                                        return basicForm.elementary_school_name;
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
                                                        setBasicForm({ ...basicForm, elementary_year_graduated: event.target.value })
                                                        setValue('elementary_year_graduated', event.target.value)
                                                        return basicForm.elementary_year_graduated;
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
                                                        setBasicForm({ ...basicForm, elementary_school_address: event.target.value })
                                                        setValue('elementary_school_address', event.target.value)
                                                        return basicForm.elementary_school_address;
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
                                                        setBasicForm({ ...basicForm, junior_high_school_name: event.target.value })
                                                        setValue('junior_high_school_name', event.target.value)
                                                        return basicForm.junior_high_school_name;
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
                                                        setBasicForm({ ...basicForm, junior_high_year_graduated: event.target.value })
                                                        setValue('junior_high_year_graduated', event.target.value)
                                                        return basicForm.junior_high_year_graduated;
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
                                                        setBasicForm({ ...basicForm, junior_high_school_address: event.target.value })
                                                        setValue('junior_high_school_address', event.target.value)
                                                        return basicForm.junior_high_school_address;
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
                        <div className="w-100 py-4 text-center">
                            <Label className="text-danger-edit font-weight-bolder">SENIOR HIGH SCHOOL</Label>
                            <Row className="w-100 py-4 text-left">
                                <Col md="9" xs="12">
                                    <FormGroup>
                                        <Label className="text-secondary font-weight-bolder">School Name</Label>
                                        <Controller
                                            control={control}
                                            name="senior_high_school_name"
                                            rules={{ required: true }}
                                            invalid={errors.senior_high_school_name ? true : false}
                                            defaultValue={basicForm.senior_high_school_name}
                                            render={({ onChange, value, onBlur, name }) => (
                                                <Input
                                                    className="form-control bg-light"
                                                    name="senior_high_school_name"
                                                    onChange={(event) => {
                                                        setBasicForm({ ...basicForm, senior_high_school_name: event.target.value })
                                                        setValue('senior_high_school_name', event.target.value)
                                                        return basicForm.senior_high_school_name;
                                                    }}
                                                    defaultValue={basicForm.senior_high_school_name}
                                                />
                                            )}
                                        />
                                        {errors.senior_high_school_name && (
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
                                            name="senior_high_year_graduated"
                                            rules={{ required: true }}
                                            invalid={errors.senior_high_year_graduated ? true : false}
                                            defaultValue={basicForm.senior_high_year_graduated}
                                            render={({ onChange, value, onBlur, name }) => (
                                                <Input
                                                    className="form-control bg-light"
                                                    name="senior_high_year_graduated"
                                                    onChange={(event) => {
                                                        setBasicForm({ ...basicForm, senior_high_year_graduated: event.target.value })
                                                        setValue('senior_high_year_graduated', event.target.value)
                                                        return basicForm.senior_high_year_graduated;
                                                    }}
                                                    defaultValue={basicForm.senior_high_year_graduated}
                                                />
                                            )}
                                        />
                                        {errors.senior_high_year_graduated && (
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
                                        <Label htmlFor="senior_high_school_address" className="text-secondary font-weight-bolder">School Address</Label>
                                        <Controller
                                            control={control}
                                            name="senior_high_school_address"
                                            rules={{ required: true }}
                                            invalid={errors.senior_high_school_address ? true : false}
                                            defaultValue={basicForm.senior_high_school_address}
                                            render={({ onChange, value, onBlur, name }) => (
                                                <Input
                                                    className="form-control bg-light"
                                                    name="senior_high_school_address"
                                                    onChange={(event) => {
                                                        setBasicForm({ ...basicForm, senior_high_school_address: event.target.value })
                                                        setValue('senior_high_school_address', event.target.value)
                                                        return basicForm.senior_high_school_address;
                                                    }}
                                                    defaultValue={basicForm.senior_high_school_address}
                                                />
                                            )}
                                        />
                                        {errors.senior_high_school_address && (
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

export default TertiaryEducationForm;