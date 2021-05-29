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
    Button,
    CardHeader,
    CardFooter,
    Card,
    CardBody,
    Table
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

const Subjects = ({ setEducationSelected, currentStep, setCurrentStep, setLoading, subjects, setSubjects, selectOptions, subjectForm, setSubjectForm }) => {

    const admissionAnswers = localStorage.getItem('admissionAnswers') ? JSON.parse(localStorage.getItem('admissionAnswers')) : ""
    // const [basicForm, setBasicForm] = useState(sessionStorage.getItem('form') ? JSON.parse(sessionStorage.getItem('form')) : blankBasicEducationForm)
    const { register, handleSubmit, errors, control, setValue, getValues } = useForm();
    const [selectedEnrolleeType, setSelectedEnrolleeType] = useState('');

    const onSubmit = (data) => {
        setSubjectForm({ ...subjectForm, enrollee_type: data.enrollee_type, subjects: subjects })
        setCurrentStep(currentStep + 1)
    }

    const handlePreviousButton = () => {
        setCurrentStep(currentStep - 1)
    }

    return (
        <Container className="px-0">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col md="6" xs="12">
                        <FormGroup>
                            <Label htmlFor="enrollee_type" className="text-left w-100 text-danger-edit font-weight-bolder">Enrollee Type</Label>
                            <Controller
                                control={control}
                                name="enrollee_type"
                                defaultValue=""
                                rules={{ required: false }}
                                invalid={errors.enrollee_type ? true : false}
                                render={({ onChange, value, onBlur, name }) => (
                                    <Select
                                        options={selectOptions.enrollee_type}
                                        onChange={
                                            e => {
                                                setValue('enrollee_type', e)
                                                setSelectedEnrolleeType(e.label)
                                                return e
                                            }

                                        }
                                        name="enrollee_type"
                                    />
                                )}
                            />
                            {errors.enrollee_type && errors.enrollee_type.type == "required" && (
                                <small className="text-danger-edit">
                                    Grade Type is required!
                                </small>
                            )}
                        </FormGroup>
                    </Col>
                </Row>

                <Card className="my-3">
                    <CardHeader>Subjects</CardHeader>
                    {selectedEnrolleeType == "Regular Student" ?
                        <CardBody>
                            <Table bordered striped>
                                <thead>
                                    <th>Subjects</th>
                                    <th>Units</th>
                                </thead>
                                <tbody>
                                    {subjects.map((subject, key) => {
                                        return (
                                            <tr key={key}>
                                                <td>{subject.description}</td>
                                                <td>{subject.unit}</td>
                                            </tr>
                                        )
                                    })
                                    }
                                </tbody>
                            </Table>
                            <Row className="mt-5 justify-content-center text-center">
                                <Col md="6" xs="12" className="text-center w-100">
                                    <Button type="button" onClick={handlePreviousButton} className="mb-2 bg-white border-warning text-warning-edit rounded-pill py-3 px-5 font-weight-bolder">Previous</Button>
                                    <Button className="bg-white border-0 text-dark rounded-pill py-3 px-5 mb-2 font-weight-bolder">Cancel</Button>
                                </Col>

                                <Col md="6" xs="12" className="text-center w-100">
                                    <Button className="bg-warning text-white rounded-pill border-0 py-3 px-5 mb-2 font-weight-bolder">Next</Button>
                                </Col>
                            </Row>
                        </CardBody>
                        : ""}

                </Card>
            </Form>
        </Container>
    )
}

export default Subjects;