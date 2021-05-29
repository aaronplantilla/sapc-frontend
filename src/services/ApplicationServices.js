import { ENDPOINT } from "../constants/api";
import axios from "axios";
import { notifyError } from "./Toaster";
import querystring from "querystring";

export const applicationActions = {
    getApplications,
    getApplication

};
const token = localStorage.getItem('jwtToken') ? localStorage.getItem('jwtToken') : ""
const headers = {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
};

async function getApplications(
    setData,
    setLoading,
    setTotalSize,
    page,
    sortFieldQuery,
    sortOrderQuery,
    sizePerPageQuery,
    searchText,
    filterData
) {
    try {
        let q = searchText.trim();
        let filter = `?q=${q}&sizePerPage=${sizePerPageQuery}&page=${page}&sortField=${sortFieldQuery}&sortOrder=${sortOrderQuery}&${querystring.stringify(filterData)}`;

        let res = await axios.get(ENDPOINT + `/get-application${filter}`, { headers: headers });
        console.log(res.data)

        setLoading(false)
        setData(res.data.data);
        setTotalSize(res.data.total)
    } catch (err) {
        console.log(err)
        if (err.response) {
            notifyError('Invalid Data.');
            // if (err.response.Error) {
            //     notifyError(err.response.Error);
            // }
            // if (err.response.data && err.response.data.data.email_address) {
            //     notifyError(err.response.data.data.email_address);
            // }
        } else {
            notifyError('Network Error.');
        }
    }
}

async function getApplication(
    id,
) {
    try {
        let res = await axios.get(ENDPOINT + `/student/application-details/${id}`, { headers: headers });

        let data = res.data.data.my_applicaiton;

        let application = {
            id: data.id,
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

        sessionStorage.setItem('application', JSON.stringify(data));
        // history.push('/application-view');

    } catch (err) {
        console.log(err)
        if (err.response) {
            notifyError('Invalid Data.');
            // if (err.response.Error) {
            //     notifyError(err.response.Error);
            // }
            // if (err.response.data && err.response.data.data.email_address) {
            //     notifyError(err.response.data.data.email_address);
            // }
        } else {
            notifyError('Network Error.');
        }
    }
}