import { ENDPOINT } from "../constants/api";
import axios from "axios";
import { notifyError } from "./Toaster";

export const admissionActions = {
    validateAdmission,
    submitForm
};
const token = localStorage.getItem('jwtToken') ? localStorage.getItem('jwtToken') : ""
const headers = {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
};

async function validateAdmission(newData, data, setCurrentStep, setEducationSelected, setModal, setLoading, setSubjects, history) {
    try {
        let res = await axios.post(ENDPOINT + `/new-application`, newData, { headers: headers });

        if (res.data && res.data.message == 'Selection') {
            localStorage.setItem("admissionAnswers", JSON.stringify({
                education_type: data.education_type,
                grade_type: data.grade_type ? data.grade_type : "",
                grade_year_level: data.grade_year_level,
                student_type: data.student_type,
                tertiary_course: data.tertiary_course ? data.tertiary_course : "",
                semester: data.semester ? data.semester : ""
            })
            )
            setSubjects(res.data.data.student_curriculum)
            setLoading(false)
            sessionStorage.removeItem('form')
            sessionStorage.removeItem('scholarshipForm')
            sessionStorage.removeItem('paymentForm')
            setCurrentStep(0)
            // history.push('/portal/create-application')
            setEducationSelected(true)

            setModal(false)
        }
    } catch (err) {
        if (err.response) {
            notifyError('Invalid Selection Please try again.');
            // if (err.response.Error) {
            //     notifyError(err.response.Error);
            // }
            // if (err.response.data && err.response.data.data.email_address) {
            //     notifyError(err.response.data.data.email_address);
            // }
        } else {
            notifyError('Invalid Selection Please try again.');
        }
    }
}

async function submitForm(data, setButtonSpinner, setSubmissionModal) {
  try {
    let res = await axios.post(ENDPOINT + '/store', data, { headers: headers });
    setButtonSpinner(false)
    setSubmissionModal(true)
    // notifySuccess('Successfully submit application form!');
  } catch (err) {
    if (err.response) {
        if(err.response.data && err.response.data.error){
            notifyError(err.response.data.error.message);
        }else{
            notifyError('Submission Failed!');
        }
    }
    setButtonSpinner(false)
  }
}