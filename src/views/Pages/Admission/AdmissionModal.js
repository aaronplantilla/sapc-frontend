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
} from 'reactstrap';
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';
import { admissionActions } from "../../../services/AdmissionServices.js";
import basicImage from '../../../assets/img/basic-1.jpg';
import tertiaryImage from '../../../assets/img/tertiary-1.jpg';
import tesdaImage from '../../../assets/img/tesda-1.jpg';
import { isMobile } from 'react-device-detect';

const AdmissionModal = ({ modal, setModal, toggle, educationTypes, selectOptions, setSelectOptions, educ, setEduc, optionList, educationSelected, setEducationSelected, gradeLevels, setLoading, setCurrentStep, setSelectedEducationType, courses, gradeTypes, setSubjects, setTesdaEducationSelected }) => {

    const history = useHistory();
    const { control, handleSubmit, register, errors, reset, getValues, setValue } = useForm();
    const [gradeType, setGradeType] = useState('')
    const [tertiaryId, setTertiaryId] = useState('')
    const [tertiaryGradeType, setTertiaryGradeType] = useState('')
    const [levelSelectection, setLevelSelection] = useState([])
    const [educationTypeError, setEducationTypeError] = useState(false);

    const handleSetEducation = (e) => {
        setEduc('setEduc')
        setSelectOptions({ ...selectOptions, gradeLevelSelection: [] })
        setValue('grade_year_level', 'Select')
        setValue('student_type', '')
        setValue('tertiary_course', '')
        setValue('semester', '')
        setValue('grade_type', '')
        setEduc(e.target.value)
        setValue('education_type', e.target.value)
        setGradeType('')
        setTertiaryGradeType('')

        if (e.target.value == 'Tertiary Education') {

        }

        if (gradeTypes.length >= 1) {
            let grade_types = gradeTypes.map(type => {
                return { value: type.id, label: type.name.toUpperCase(), education_type_id: type.education_type_id }
            })

            if (e.target.value == "Basic Education") {
                grade_types.pop();
                setSelectOptions({ ...selectOptions, grade_types: grade_types })
            } else {
                setSelectOptions({ ...selectOptions, grade_types: gradeTypes })
            }
        }
    }

    const onSubmit = (data) => {
        if (data.education_type != "") {
            setEducationTypeError(false)
            setSelectedEducationType('')
            setLoading(true);
            setEducationSelected(false)
            const newData = {
                education_type_id: data.education_type,
                student_type_id: data.student_type ? data.student_type.value : "",
                grade_type_id: educ == "Basic Education" ? gradeType.value : (educ == "Tertiary Education" ? tertiaryGradeType : ""),
                year_level: data.grade_year_level ? data.grade_year_level.value : "",
                course_type_id: data.tertiary_course ? data.tertiary_course.value : "",
                semester: data.semester ? data.semester.value : "",
            };
            if (data.education_type == "Basic Education") {
                setSelectedEducationType(data.education_type)
                admissionActions.validateAdmission(newData, data, setCurrentStep, setEducationSelected, setModal, setLoading, setSubjects, history);
            }

            if (data.education_type == "Tertiary Education") {
                setSelectedEducationType(data.education_type)
                newData.education_type_id = tertiaryId;
                admissionActions.validateAdmission(newData, data, setCurrentStep, setEducationSelected, setModal, setLoading, setSubjects, history);
            }

            if (data.education_type == "Tesda Course") {
                localStorage.setItem("admissionAnswers", JSON.stringify({
                    education_type: data.education_type,
                })
                )
                setLoading(false);
                setModal(false)
                setSelectedEducationType(data.education_type)
                setEducationSelected(true)
                // history.push('portal/create-application')
            }
        } else {
            setEducationTypeError(true)
        }
    }
    useEffect(() => {
        if (educ != "") {
            setEducationTypeError(false)
        }
    }, [educ])

    useEffect(() => {
        selectOptions.gradeLevelSelection.length = 0
        if (levelSelectection && levelSelectection.length >= 1) {
            setSelectOptions({ ...selectOptions, gradeLevelSelection: levelSelectection })
        }
    }, [levelSelectection])

    useEffect(() => {

        if (educ == "Basic Education") {
            let levelsBasic = [];
            gradeLevels.map(gradeLevel => {
                if (gradeLevel.grade_type_id == gradeType.value) {
                    levelsBasic.push({ value: gradeLevel.id, label: gradeLevel.name })
                }
            })
            setLevelSelection(levelsBasic)
            // setSelectOptions({ ...selectOptions, gradeLevelSelection: levelsBasic })
        }
    }, [educ, gradeType])

    useEffect(() => {
        if (educ == "Tertiary Education") {
            let grade_type_id = "";
            gradeTypes.map(type => {
                if (type.name.toLowerCase() == "college") {
                    grade_type_id = type.id;
                    setTertiaryId(type.education_type_id)
                    setTertiaryGradeType(type.id)
                }
            })

            let levels = [];
            gradeLevels.map(gradeLevel => {
                if (gradeLevel.grade_type_id == grade_type_id) {
                    levels.push({ value: gradeLevel.id, label: gradeLevel.name })
                }
            })
            setLevelSelection(levels)
            // setSelectOptions({ ...selectOptions, gradeLevelSelection: levels })
        }
    }, [educ, gradeTypes, tertiaryGradeType])

    useEffect(() => {
        if (educ == "Basic Education") {
            let coursesArr = [];
            if (courses.length >= 1) {
                courses.map(type => {
                    if (tertiaryGradeType == type.grade_type_id) {
                        coursesArr.push({ value: type.id, label: type.name.toUpperCase() })
                    }
                })
                setSelectOptions({ ...selectOptions, coursesSelection: coursesArr })
            }
        }
        if (educ == "Tertiary Education") {
            let coursesArr = [];
            if (courses.length >= 1) {
                courses.map(type => {
                    if (tertiaryGradeType == type.grade_type_id) {
                        coursesArr.push({ value: type.id, label: type.name.toUpperCase() })
                    }
                })
                setSelectOptions({ ...selectOptions, coursesSelection: coursesArr })
            }
        }
    }, [tertiaryGradeType])

    let imageStyle = {
        width: isMobile ? "100%" : "15rem",
        objectFit: "cover",
        opacity: 0.5
    }

    let imageStyleSelected = {
        width: isMobile ? "100%" : "15rem",
        objectFit: "cover",
    }

    let divStyle = {
        overflow: "hidden"
    }

    return (
        <Modal isOpen={modal} toggle={toggle} size="lg" className="Admission" backdrop={"static"}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody className="middle">
                    <Row >
                        <Col md="12" xs="12">
                            <Label htmlFor="radio" className="text-left w-100 text-danger-edit font-weight-bolder">Select Education Type</Label>
                        </Col>
                        <Col md="4" xs="4" className="px-1">
                            <FormGroup className="mb-0">
                                <Label>
                                    <input type="radio" name="radio" value="Basic Education" onClick={handleSetEducation} />
                                    <div className="rounded shadow-sm" style={divStyle}>
                                        <img src={basicImage} className="rounded educationImageSelection" style={educ == "Basic Education" ? imageStyleSelected : imageStyle} />
                                    </div>
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md="4" xs="4" className="px-1">
                            <FormGroup className="mb-0">
                                <Label>
                                    <input type="radio" name="radio" value="Tertiary Education" onClick={handleSetEducation} />
                                    <div className="rounded shadow-sm" style={divStyle}>
                                        <img src={tertiaryImage} className="rounded educationImageSelection" style={educ == "Tertiary Education" ? imageStyleSelected : imageStyle} />
                                    </div>
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md="4" xs="4" className="px-1">
                            <FormGroup className="mb-0">
                                <Label>
                                    <input type="radio" name="radio" value="Tesda Course" onClick={handleSetEducation} />
                                    <div className="rounded shadow-sm" style={divStyle}>
                                        <img src={tesdaImage} className="rounded educationImageSelection" style={educ == "Tesda Course" ? imageStyleSelected : imageStyle} />
                                    </div>
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md="12" xs="12">
                            {educationTypeError ?
                                <small className="text-danger-edit text-left w-100">
                                    Please select education type.
                                </small>
                                : ""}
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="12" md="12" className="mb-4">
                            <FormGroup>
                                <Controller
                                    control={control}
                                    name="education_type"
                                    defaultValue=""
                                    hidden={true}
                                    render={({ field }) => {
                                        return <input {...field} type="hidden" className="form-control border-0 bg-light" />;
                                    }}
                                />
                            </FormGroup>
                            {educ != "Tesda Course" ?
                                <Fragment>
                                    <FormGroup>
                                        <Label htmlFor="student_type" className="text-left w-100 text-danger-edit font-weight-bolder">Type of Student</Label>
                                        <Controller
                                            id="student_type"
                                            name="student_type"
                                            control={control}
                                            rules={{ required: true }}
                                            invalid={errors.student_type ? true : false}
                                            defaultValue=""
                                            as={
                                                <Select
                                                    options={selectOptions.student_types}
                                                />
                                            }
                                        />
                                        {errors.student_type && errors.student_type.type == "required" && (
                                            <small className="text-danger-edit">
                                                Student Type is required!
                                            </small>
                                        )}
                                    </FormGroup>
                                    {educ === "Basic Education" ?
                                        <FormGroup>
                                            <Label htmlFor="grade_type" className="text-left w-100 text-danger-edit font-weight-bolder">Grade Type</Label>
                                            <Controller
                                                control={control}
                                                name="grade_type"
                                                defaultValue=""
                                                rules={{ required: true }}
                                                invalid={errors.grade_type ? true : false}
                                                render={({ onChange, value, onBlur, name }) => (
                                                    <Select
                                                        options={selectOptions.grade_types}
                                                        onChange={
                                                            e => {
                                                                setGradeType(e)
                                                                setValue('grade_type', e)
                                                                // setValue('grade_year_level', { value: "", label: "" })
                                                                setTertiaryGradeType(e.value)
                                                                return e
                                                            }

                                                        }
                                                        name="grade_type"
                                                    />
                                                )}
                                            />
                                            {errors.grade_type && errors.grade_type.type == "required" && (
                                                <small className="text-danger-edit">
                                                    Grade Type is required!
                                                </small>
                                            )}
                                        </FormGroup>
                                        : ""}
                                    {gradeType || tertiaryGradeType ?
                                        <FormGroup>
                                            <Label htmlFor="grade_year_level" className="text-left w-100 text-danger-edit font-weight-bolder">Grade/Year Level</Label>
                                            <Controller
                                                control={control}
                                                name="grade_year_level"
                                                defaultValue=""
                                                rules={{ required: true }}
                                                invalid={errors.grade_year_level ? true : false}
                                                render={({ onChange, value, onBlur, name }) => (
                                                    <Select
                                                        options={selectOptions.gradeLevelSelection}
                                                        onChange={
                                                            e => {
                                                                setValue('grade_year_level', e)
                                                                return e
                                                            }
                                                        }
                                                        name="grade_year_level"
                                                    />
                                                )}
                                            />
                                            {errors.grade_year_level && errors.grade_year_level.type == "required" && (
                                                <small className="text-danger-edit">
                                                    Grade/Year Level is required!
                                                </small>
                                            )}
                                        </FormGroup>
                                        : ""}
                                    {educ == "Tertiary Education" || (gradeType && gradeType.label.toLowerCase() == "senior high school") ?
                                        <>
                                            <FormGroup>
                                                <Label htmlFor="tertiary_course" className="text-left w-100 text-danger-edit font-weight-bolder">Courses</Label>
                                                <Controller
                                                    as={
                                                        <Select
                                                            options={selectOptions.coursesSelection}
                                                        />
                                                    }
                                                    id="tertiary_course"
                                                    name="tertiary_course"
                                                    control={control}
                                                    rules={{ required: true }}
                                                    invalid={errors.tertiary_course ? true : false}
                                                    defaultValue=""
                                                    value=""
                                                    onChange={([e]) => {
                                                        setValue("tertiary_course", e.value);
                                                        // handleChangenew_student(e);
                                                        return e
                                                    }}
                                                />
                                                {errors.tertiary_course && errors.tertiary_course.type == "required" && (
                                                    <small className="text-danger-edit">
                                                        Courses is required!
                                                    </small>
                                                )}
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="semester" className="text-left w-100 text-danger-edit font-weight-bolder">Semester</Label>
                                                <Controller
                                                    as={
                                                        <Select
                                                            options={optionList.semester}
                                                        />
                                                    }
                                                    id="semester"
                                                    name="semester"
                                                    control={control}
                                                    rules={{ required: true }}
                                                    invalid={errors.semester ? true : false}
                                                    defaultValue=""
                                                    value=""
                                                    onChange={([e]) => {
                                                        setValue("semester", e.value);
                                                        // handleChangenew_student(e);
                                                        return e
                                                    }}
                                                />
                                                {errors.semester && errors.semester.type == "required" && (
                                                    <small className="text-danger-edit">
                                                        Semester is required!
                                                    </small>
                                                )}
                                            </FormGroup>
                                        </>
                                        : ""}
                                </Fragment>
                                : ""}
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Button className="bg-warning text-white border-0 rounded-pill py-3 px-5 font-weight-bolder">Submit</Button>
                        </Col>
                    </Row>
                </ModalBody>
            </Form>
        </Modal>
    )
}

export default AdmissionModal;