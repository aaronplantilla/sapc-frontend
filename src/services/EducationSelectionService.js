import {
    ENDPOINT
} from "../constants/api";
import axios from "axios";

export const educationActions = {
    getApplications
};
const token = localStorage.getItem('jwtToken') ? localStorage.getItem('jwtToken') : ""
const headers = {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
};

async function getApplications(setEducationTypes, setStudentTypes, setGradeTypes, setGradeLevels, setSchoolFees, setCourses) {
    try {
        let res = await axios.get(ENDPOINT + `/application`, { headers: headers });
        console.log(res.data)
        if (setStudentTypes) {
            if (res.data && res.data.data.student_types && res.data.data.student_types.length >= 1) {
                setStudentTypes(res.data.data.student_types)
            }
        }

        if (setEducationTypes) {
            if (res.data && res.data.data.education_types && res.data.data.education_types.length >= 1) {
                setEducationTypes(res.data.data.education_types)
            }

        }

        if (setGradeTypes) {
            if (res.data && res.data.data.grade_types && res.data.data.grade_types.length >= 1) {
                setGradeTypes(res.data.data.grade_types)
            }
        }

        if (setGradeLevels) {
            if (res.data && res.data.data.grade_level && res.data.data.grade_level.length >= 1) {
                setGradeLevels(res.data.data.grade_level)
            }
        }

        if (setSchoolFees) {
            if (res.data && res.data.data.school_fee && res.data.data.school_fee.length >= 1) {
                let schoolFees = res.data.data.school_fee;
                if (schoolFees && schoolFees.length >= 1) {
                    schoolFees.map(fee => {
                        let subtotal = parseFloat(fee.tuition_fee) * 0.03;
                        let total = parseFloat(fee.tuition_fee) - subtotal.toFixed(2);
                        fee.discounted_tuituion_fee = total;
                        return fee;
                    })
                }
                setSchoolFees(schoolFees)
            }
        }
        if (setCourses) {
            if (res.data && res.data.data.student_course && res.data.data.student_course.length >= 1) {
                setCourses(res.data.data.student_course)
            }
        }
    } catch (err) {
        console.log(err)

    }
}

// async function getStudentTypes(setStudentTypes) {
//     try {
//         let res = await axios.get(STUDENT_TYPE_URL, { headers: headers });
//         if (res.data.data && res.data.data.student_types) {
//             setStudentTypes(res.data.data.student_types)
//         }
//     } catch (err) {
//         console.log(err)
//         if (err.response) {
//           if (err.response.Error) {
//             notifyError(err.response.Error);
//           }
//           if (err.response.data && err.response.data.data.email_address) {
//             notifyError(err.response.data.data.email_address);
//           }
//         } else {
//           notifyError('Registration Failed!');
//         }
//         setButtonSpinner(false)
//     }
// }

// async function getGradeTypes(setGradeTypes) {
//     try {
//         let res = await axios.get(GRADE_TYPE_URL, { headers: headers });
//         if (res.data.data && res.data.data.grade_types) {
//             setGradeTypes(res.data.data.grade_types)
//         }
//     } catch (err) {
//         console.log(err)
//         if (err.response) {
//           if (err.response.Error) {
//             notifyError(err.response.Error);
//           }
//           if (err.response.data && err.response.data.data.email_address) {
//             notifyError(err.response.data.data.email_address);
//           }
//         } else {
//           notifyError('Registration Failed!');
//         }
//         setButtonSpinner(false)
//     }
// }

// async function getGradeLevel(gradeType, setSelectOptions, selectOptions, setGradeTypeSelected) {
//     try {
//         let data = { grade_type_id: gradeType };
//         let res = await axios.post(GRADE_LEVEL_URL, data, { headers: headers });
//         if(res.data.success){
//             let gradeTypes = res.data.data.grade_level.map(grade=>{
//                 return {value: grade.id, label: grade.name}
//             })
//             setSelectOptions({...selectOptions, gradeLevelSelection: gradeTypes})

//         }
//     } catch (err) {
//         console.log(err)
//         if (err.response) {
//           if (err.response.Error) {
//             notifyError(err.response.Error);
//           }
//           if (err.response.data && err.response.data.data.email_address) {
//             notifyError(err.response.data.data.email_address);
//           }
//         } else {
//           notifyError('Registration Failed!');
//         }
//         setButtonSpinner(false)
//     }
// }