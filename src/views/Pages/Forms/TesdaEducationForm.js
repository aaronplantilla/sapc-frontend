import React, { Fragment, useEffect, useState } from 'react';
import {
    Container,
    Form,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Button,
    Spinner,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter
} from 'reactstrap';
import { useForm, Controller } from "react-hook-form";
import '../../../App.css';
import { admissionActions } from "../../../services/AdmissionServices.js";

const TesdaEducationForm = ({ setTesdaEducationSelected, blankTedaForm, tesdaForm, setTesdaForm, educationTypes }) => {

    const admissionAnswers = localStorage.getItem('admissionAnswers') ? JSON.parse(localStorage.getItem('admissionAnswers')) : ""
    const { register, handleSubmit, errors, control, setValue, getValues } = useForm();
    const [buttonSpinner, setButtonSpinner] = useState(false);
    const [submissionModal, setSubmissionModal] = useState(false);
    const [educationId, setEducationId] = useState(0)

    useEffect(() => {
        if (educationTypes && educationTypes.length >= 1) {
            educationTypes.map(type => {
                if (type.name == admissionAnswers.education_type) {
                    setEducationId(type.id);
                }
            })
        }
    }, [admissionAnswers]);

    const onSubmit = async (data) => {
        let files = [];

        if (tesdaForm.tesda_form) {
            files.push({
                filename: tesdaForm.tesda_form.name,
                document_type_id: 1,
                document: await convertBase64(tesdaForm.tesda_form)
            })
        }

        const famliy_information = [
            {
                family_role: 0,
                name: tesdaForm.father_name,
                home_address: tesdaForm.father_home_address,
                contact_number: tesdaForm.father_contact_no,
            },
            {
                family_role: 1,
                name: tesdaForm.mother_name,
                home_address: tesdaForm.mother_home_address,
                contact_number: tesdaForm.mother_contact_no,
            },
            {
                family_role: 2,
                name: tesdaForm.guardian_name,
                home_address: tesdaForm.guardian_home_address,
                contact_number: tesdaForm.guardian_contact_no,
            }
        ];
        let dataToSubmit = {
            education_type_id: educationId,
            student_type_id: 1,
            given_name: tesdaForm.first_name,
            last_name: tesdaForm.last_name,
            middle_name: tesdaForm.middle_name,
            suffix: tesdaForm.suffix,
            house_bldg_street: tesdaForm.street,
            province: tesdaForm.province,
            city_municipality: tesdaForm.city,
            barangay: tesdaForm.barangay,
            family_info: famliy_information,
            attachments: files,
            education_type_id: educationId
        }
        
        setButtonSpinner(true)
        admissionActions.submitForm(dataToSubmit, setButtonSpinner, setSubmissionModal);
    }

    const toggleMessage = () => {
        setSubmissionModal(!submissionModal)
        setTesdaEducationSelected("")
        setTesdaForm(blankTedaForm)
        setTimeout(() => window.location.reload(), 1000);
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
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Container className="my-5">
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
                    <h5 className="text-danger-edit text-center font-weight-bolder mb-5">Tesda Application</h5>
                    <Row className="mb-5 text-right">
                        <Col xs="12" md="12">
                            <a className="btn btn-danger" target="_blank" href="https://www.google.com/url?sa=t&source=web&rct=j&url=http%3A%2F%2Fwww.tesda.gov.ph%2Fuploads%2FFile%2Fprescribed%2520forms%2FCAC%2Frevised%2520application%2520form.doc&ved=2ahUKEwj4ndb39MXwAhVExIsBHZHUBwAQFjABegQIBRAC&sqi=2&usg=AOvVaw2Uygg2lJyHG5FeprF5ZIvU">Download Tesda Form</a>
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
                                            defaultValue={tesdaForm.last_name}
                                            render={({ onChange, value, onBlur, name }) => (
                                                <Input
                                                    className="form-control bg-light"
                                                    name="last_name"
                                                    onChange={(event) => {
                                                        setTesdaForm({ ...tesdaForm, last_name: event.target.value })
                                                        setValue('last_name', event.target.value)
                                                        return tesdaForm.last_name;
                                                    }}
                                                    defaultValue={tesdaForm.last_name}
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
                                            defaultValue={tesdaForm.first_name}
                                            render={({ onChange, value, onBlur, name }) => (
                                                <Input
                                                    className="form-control bg-light"
                                                    name="first_name"
                                                    onChange={(event) => {
                                                        setTesdaForm({ ...tesdaForm, first_name: event.target.value })
                                                        setValue('first_name', event.target.value)
                                                        return tesdaForm.first_name;
                                                    }}
                                                    defaultValue={tesdaForm.first_name}
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
                                            defaultValue={tesdaForm.middle_name}
                                            render={({ onChange, value, onBlur, name }) => (
                                                <Input
                                                    className="form-control bg-light"
                                                    name="middle_name"
                                                    onChange={(event) => {
                                                        setTesdaForm({ ...tesdaForm, middle_name: event.target.value })
                                                        setValue('middle_name', event.target.value)
                                                        return tesdaForm.middle_name;
                                                    }}
                                                    defaultValue={tesdaForm.middle_name}
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
                                            defaultValue={tesdaForm.suffix}
                                            render={({ onChange, value, onBlur, name }) => (
                                                <Input
                                                    className="form-control bg-light"
                                                    name="suffix"
                                                    onChange={(event) => {
                                                        setTesdaForm({ ...tesdaForm, suffix: event.target.value })
                                                        setValue('suffix', event.target.value)
                                                        return tesdaForm.suffix;
                                                    }}
                                                    defaultValue={tesdaForm.suffix}
                                                />
                                            )}
                                        />
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
                                            defaultValue={tesdaForm.street}
                                            render={({ onChange, value, onBlur, name }) => (
                                                <Input
                                                    className="form-control bg-light"
                                                    name="street"
                                                    onChange={(event) => {
                                                        setTesdaForm({ ...tesdaForm, street: event.target.value })
                                                        setValue('street', event.target.value)
                                                        return tesdaForm.street;
                                                    }}
                                                    defaultValue={tesdaForm.street}
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
                                            defaultValue={tesdaForm.province}
                                            render={({ onChange, value, onBlur, name }) => (
                                                <Input
                                                    className="form-control bg-light"
                                                    name="province"
                                                    onChange={(event) => {
                                                        setTesdaForm({ ...tesdaForm, province: event.target.value })
                                                        setValue('province', event.target.value)
                                                        return tesdaForm.province;
                                                    }}
                                                    defaultValue={tesdaForm.province}
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
                                            defaultValue={tesdaForm.city}
                                            render={({ onChange, value, onBlur, name }) => (
                                                <Input
                                                    className="form-control bg-light"
                                                    name="city"
                                                    onChange={(event) => {
                                                        setTesdaForm({ ...tesdaForm, city: event.target.value })
                                                        setValue('city', event.target.value)
                                                        return tesdaForm.city;
                                                    }}
                                                    defaultValue={tesdaForm.city}
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
                                            defaultValue={tesdaForm.barangay}
                                            render={({ onChange, value, onBlur, name }) => (
                                                <Input
                                                    className="form-control bg-light"
                                                    name="barangay"
                                                    onChange={(event) => {
                                                        setTesdaForm({ ...tesdaForm, barangay: event.target.value })
                                                        setValue('barangay', event.target.value)
                                                        return tesdaForm.barangay;
                                                    }}
                                                    defaultValue={tesdaForm.barangay}
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
                                            defaultValue={tesdaForm.father_name}
                                            render={({ onChange, value, onBlur, name }) => (
                                                <Input
                                                    className="form-control bg-light"
                                                    name="father_name"
                                                    onChange={(event) => {
                                                        setTesdaForm({ ...tesdaForm, father_name: event.target.value })
                                                        setValue('father_name', event.target.value)
                                                        return event.target.value;
                                                    }}
                                                    defaultValue={tesdaForm.father_name}
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
                                            defaultValue={tesdaForm.father_contact_no}
                                            render={({ onChange, value, onBlur, name }) => (
                                                <Input
                                                    className="form-control bg-light"
                                                    name="father_contact_no"
                                                    onChange={(event) => {
                                                        setTesdaForm({ ...tesdaForm, father_contact_no: event.target.value })
                                                        setValue('father_contact_no', event.target.value)
                                                        return tesdaForm.father_contact_no;
                                                    }}
                                                    defaultValue={tesdaForm.father_contact_no}
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
                                            defaultValue={tesdaForm.father_home_address}
                                            render={({ onChange, value, onBlur, name }) => (
                                                <Input
                                                    className="form-control bg-light"
                                                    name="father_home_address"
                                                    onChange={(event) => {
                                                        setTesdaForm({ ...tesdaForm, father_home_address: event.target.value })
                                                        setValue('father_home_address', event.target.value)
                                                        return tesdaForm.father_home_address;
                                                    }}
                                                    defaultValue={tesdaForm.father_home_address}
                                                />
                                            )}
                                        />
                                        {errors.father_home_address && (
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
                                            defaultValue={tesdaForm.mother_name}
                                            render={({ onChange, value, onBlur, name }) => (
                                                <Input
                                                    className="form-control bg-light"
                                                    name="mother_name"
                                                    onChange={(event) => {
                                                        setTesdaForm({ ...tesdaForm, mother_name: event.target.value })
                                                        setValue('mother_name', event.target.value)
                                                        return tesdaForm.mother_name;
                                                    }}
                                                    defaultValue={tesdaForm.mother_name}
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
                                            defaultValue={tesdaForm.mother_contact_no}
                                            render={({ onChange, value, onBlur, name }) => (
                                                <Input
                                                    className="form-control bg-light"
                                                    name="mother_contact_no"
                                                    onChange={(event) => {
                                                        setTesdaForm({ ...tesdaForm, mother_contact_no: event.target.value })
                                                        setValue('mother_contact_no', event.target.value)
                                                        return tesdaForm.mother_contact_no;
                                                    }}
                                                    defaultValue={tesdaForm.mother_contact_no}
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
                                            defaultValue={tesdaForm.mother_home_address}
                                            render={({ onChange, value, onBlur, name }) => (
                                                <Input
                                                    className="form-control bg-light"
                                                    name="mother_home_address"
                                                    onChange={(event) => {
                                                        setTesdaForm({ ...tesdaForm, mother_home_address: event.target.value })
                                                        setValue('mother_home_address', event.target.value)
                                                        return tesdaForm.mother_home_address;
                                                    }}
                                                    defaultValue={tesdaForm.mother_home_address}
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
                                            defaultValue={tesdaForm.guardian_name}
                                            render={({ onChange, value, onBlur, name }) => (
                                                <Input
                                                    className="form-control bg-light"
                                                    name="guardian_name"
                                                    onChange={(event) => {
                                                        setTesdaForm({ ...tesdaForm, guardian_name: event.target.value })
                                                        setValue('guardian_name', event.target.value)
                                                        return tesdaForm.guardian_name;
                                                    }}
                                                    defaultValue={tesdaForm.guardian_name}
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
                                            defaultValue={tesdaForm.guardian_contact_no}
                                            render={({ onChange, value, onBlur, name }) => (
                                                <Input
                                                    className="form-control bg-light"
                                                    name="guardian_contact_no"
                                                    onChange={(event) => {
                                                        setTesdaForm({ ...tesdaForm, guardian_contact_no: event.target.value })
                                                        setValue('guardian_contact_no', event.target.value)
                                                        return tesdaForm.guardian_contact_no;
                                                    }}
                                                    defaultValue={tesdaForm.guardian_contact_no}
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
                                            defaultValue={tesdaForm.guardian_home_address}
                                            render={({ onChange, defaultValue, onBlur, name }) => (
                                                <Input
                                                    className="form-control bg-light"
                                                    name="guardian_home_address"
                                                    onChange={(event) => {
                                                        setTesdaForm({ ...tesdaForm, guardian_home_address: event.target.value })
                                                        setValue('guardian_home_address', event.target.value)
                                                        return tesdaForm.guardian_home_address;
                                                    }}
                                                    defaultValue={tesdaForm.guardian_home_address}
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
                            <Label className="text-danger-edit text-center font-weight-bolder mb-1 px-3" style={{ backgroundColor: "white" }}>ATTACH TESDA FORM</Label>
                        </div>
                        <div className="py-4">
                            <Row>
                                <Col md="6" xs="6" className="mx-auto px-auto">
                                    <div className="d-flex flex-column">
                                        <div className="fileUpload btn btn-warning text-white rounded-pill p-2" style={{ width: "110px" }}>
                                            <span>Upload</span>
                                            <Controller
                                                control={control}
                                                name="tesda_form"
                                                defaultValue={tesdaForm.tesda_form}
                                                rules={{ required: false }}
                                                invalid={errors.tesda_form ? true : false}
                                                render={({ onChange, value, onBlur, name }) => (
                                                    <Input
                                                        type="file"
                                                        name="tesda_form"
                                                        id="uploadBtn"
                                                        type="file"
                                                        className="upload"
                                                        onChange={(e) => setTesdaForm({ ...tesdaForm, tesda_form: e.target.files[0] })}
                                                        // defaultValue={[]}
                                                    // style={{ width: "110px" }}
                                                    />
                                                )}
                                            />
                                        </div>
                                        <Label className="text-secondary">{tesdaForm.tesda_form ? tesdaForm.tesda_form.name : ""}</Label>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Row>

                    <Row>
                        <Col md="6" xs="6" className="w-100">
                            <Button onClick={() => { setTesdaEducationSelected(false) }} className="border-0 border-0 bg-white text-dark rounded-pill py-3 px-5 font-weight-bolder">Cancel</Button>
                        </Col>

                        <Col md="6" xs="6" className="w-100">
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
                </Container>
            </Form>
        </>
    )
}

export default TesdaEducationForm;