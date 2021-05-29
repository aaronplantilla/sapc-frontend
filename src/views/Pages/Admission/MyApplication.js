import React, { useEffect, useRef, useState } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory from "react-bootstrap-table2-filter";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import overlayFactory from "react-bootstrap-table2-overlay";
import { Button, Card, CardBody, CardHeader, Col, Container, FormGroup, InputGroup, InputGroupAddon, Row, Input } from 'reactstrap';
import { applicationActions } from '../../../services/ApplicationServices'
import Loading from '../Forms/Loading.js'
import { useForm, Controller } from "react-hook-form";
import _ from "lodash";
import { useHistory } from "react-router-dom";

const MyApplication = () => {
    const [data, setData] = useState([]);
    const [totalSize, setTotalSize] = useState(0);
    const [sortFieldQuery, setSortFieldQuery] = useState("id");
    const [sortOrderQuery, setSortOrderQuery] = useState("desc");
    const [sizePerPageQuery, setSizePerPageQuery] = useState(10);
    const [searchText, setSearchText] = useState('');
    const [page1, setPage1] = useState(1)
    const [loading, setLoading] = useState(false);
    const [updateTable, setUpdateTable] = useState(false);
    const [action, setAction] = useState('');
    const { control, handleSubmit, register, errors, setValue } = useForm();
    const history = useHistory();

    const NoDataIndication = () => <div>No Data</div>;

    const [filterData, setFilterData] = useState({
        date_from: null,
        date_to: null,
    });

    const toggleRefNo = (id) => {
        applicationActions.getApplication(id, history)
    }

    const toggleCancelButton = (cell) => {
        console.log(cell)
    }
    const columns = [
        {
            dataField: 'ref_no',
            text: 'Reference No.',
            sort: false,
            headerStyle: { backgroundColor: '#800000', color: 'white', whiteSpace: "nowrap" },
            formatter: (cell) => {
                let id = "";
                if(data.length >= 1){
                    data.map(d=>{
                        if(d.ref_no == cell){
                            id = d.id;
                        }
                    })
                }
                return (
                    <>
                        {cell != "" ? <a className="ref_no" style={{ color: "#800000", cursor: 'pointer' }} onClick={() => toggleRefNo(id)}>{cell.toUpperCase()}</a> : "No Reference No"}
                    </>
                )
            }
        },
        {
            dataField: 'full_name',
            text: 'Name',
            sort: false,
            headerStyle: { backgroundColor: '#800000', color: 'white', whiteSpace: "nowrap" }
        },
        {
            dataField: 'grade_level',
            text: 'Grade Level',
            sort: false,
            headerStyle: { backgroundColor: '#800000', color: 'white', whiteSpace: "nowrap" }
        },
        {
            dataField: 'date_filed',
            text: 'Date of Application',
            sort: false,
            headerStyle: { backgroundColor: '#800000', color: 'white', whiteSpace: "nowrap" }
        },
        {
            dataField: 'status',
            text: 'Status',
            sort: false,
            headerStyle: { backgroundColor: '#800000', color: 'white', whiteSpace: "nowrap" },
            formatter: (cell) => {
                return (
                    cell.toUpperCase()
                )
            }
        },
        {
            dataField: 'id',
            text: 'Actions',
            align: "center",
            sort: false,
            headerStyle: { backgroundColor: '#800000', color: 'white', whiteSpace: "nowrap" },
            formatter: (cell) => {
                return (
                    <Button
                        id="view-btn"
                        onClick={() => toggleCancelButton(cell)}
                        className="mr-1 btn-danger"
                    >
                        Cancel
                    </Button>
                )
            }
        }
    ]

    useEffect(() => {
        setLoading(true);
        applicationActions.getApplications(
            setData,
            setLoading,
            setTotalSize,
            page1,
            sortFieldQuery,
            sortOrderQuery,
            sizePerPageQuery,
            searchText,
            filterData,
        )
    }, [
        page1,
        sortFieldQuery,
        sortOrderQuery,
        sizePerPageQuery,
        updateTable,
        searchText,
        filterData,
    ])

    //TABLE SETTING
    const RemoteAll = ({
        loading,
        data,
        page,
        sizePerPage,
        onTableChange,
        totalSize,
    }) => (
        <div>
            <BootstrapTable
                wrapperClasses="table-responsive mb-3"
                bootstrap4
                striped
                remote
                loading={loading}
                keyField="id"
                data={data}
                columns={columns}
                defaultSorted={defaultSorted}
                filter={filterFactory()}
                pagination={paginationFactory({ page, sizePerPage, totalSize })}
                onTableChange={onTableChange}
                overlay={overlayFactory({
                    spinner: true,
                    styles: {
                        overlay: (base) => ({
                            ...base,
                            background: "rgba(0, 0, 0, 0.5)",
                        }),
                    },
                })}
                noDataIndication={() => <NoDataIndication />}
            />
        </div>
    );

    const defaultSorted = [
        {
            dataField: sortFieldQuery,
            order: sortOrderQuery,
        },
    ];

    const handleTableChange = (
        type,
        { page, sizePerPage, filters, sortField, sortOrder }
    ) => {
        if (page !== page1) {
            setPage1(page)
            setSortFieldQuery(sortField ? sortField : sortFieldQuery)
            setSortOrderQuery(sortOrder ? sortOrder : sortOrderQuery)

            setLoading(true);
        }

        if (
            (sortField !== sortFieldQuery && sortField !== undefined) ||
            (sortOrder !== sortOrderQuery && sortOrder !== undefined)
        ) {
            setSortFieldQuery(sortField);
            setSortOrderQuery(sortOrder);

            setLoading(true);
        }

        if (sizePerPage !== sizePerPageQuery) {
            setSizePerPageQuery(sizePerPage);

            setLoading(true);
        }
    };

    const sendQuery = (query) => {
        setSearchText(query);

        setLoading(true);
    };

    const delayedQuery = useRef(_.debounce((q) => sendQuery(q), 500)).current;
    const changeQuery = (e) => {
        setPage1(1);
        delayedQuery(e.target.value);
    };

    return (
        <Container fluid={true}>
            {loading ? <Loading /> : ""}
            <h4 className="text-danger-edit font-weight-bolder">Applications</h4>
            <hr />
            <FormGroup row>
                <Col md="4" className="ml-auto">
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <Button
                                type="button"
                                color="primary"
                                id="search-button"
                            >
                                <i className="fa fa-search"></i>
                            </Button>
                        </InputGroupAddon>
                        <Input
                            type="text"
                            id="search-text"
                            name="search-text"
                            placeholder="Search"
                            onChange={changeQuery}
                        />
                    </InputGroup>
                    <p>
                        <small>
                            <i className="fa fa-lightbulb-o"></i>&nbsp;Search by Reference No
                      </small>
                    </p>
                </Col>
            </FormGroup>
            <RemoteAll
                // loading={loading}
                data={data}
                page={page1}
                sizePerPage={sizePerPageQuery}
                totalSize={totalSize}
                onTableChange={handleTableChange}
                register={register}
              />
        </Container>
    )
}

export default MyApplication;