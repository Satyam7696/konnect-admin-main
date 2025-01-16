import React, { useState } from "react";
import { Button, Row, Form, Col, OverlayTrigger,Tooltip } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { openModal } from "../redux/slices/allModalSlice";
import toast from "react-hot-toast";

export default function PlanSchemaDataTable() {
    const [serialNumber, setSerialNumber] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchDuration, setSearchDuration] = useState("");
    const [searchLevel, setSearchLevel] = useState("");
    const [searchStatus, setSearchStatus] = useState("");
    const dispatch = useDispatch();

    const data = [
        {
            id: 1,
            title: "Basic Plan",
            description: "This is the basic plan",
            duration: "1 month",
            price: "$10",
            level: "Beginner",
            status: true,
        },
        {
            id: 2,
            title: "Pro Plan",
            description: "This is the pro plan",
            duration: "6 months",
            price: "$50",
            level: "Intermediate",
            status: false,
        },
        {
            id: 3,
            title: "Premium Plan",
            description: "This is the premium plan",
            duration: "12 months",
            price: "$100",
            level: "Advanced",
            status: false,
        },
    ];

    const COLUMNS = [
        {
            name: "#",
            selector: (row, index) => index + serialNumber,
            sortable: true,
        },
        {
            name: "Title",
            sortable: true,
            cell: (row) => row?.title,
        },
        {
            name: "Description",
            sortable: true,
            cell: (row) => row?.description,
        },
        {
            name: "Duration",
            sortable: true,
            cell: (row) => row?.duration,
        },
        {
            name: "Price",
            sortable: true,
            cell: (row) => row?.price,
        },
        {
            name: "Level",
            sortable: true,
            cell: (row) => row?.level,
        },
        {
              name: "Status",
              selector: (row) => row.status,
              cell: (row) => {
                const [checked, setChecked] = useState(row?.status);
                return (
                  <label className="custom-switch">
                    <input
                      type="checkbox"
                      className="custom-switch-input"
                        // onChange={handleStatusChange}
                        // checked={checked}  //to fix the checkbox
                    checked={checked}
                    />
                    <span className="custom-switch-indicator custum-green-btn"></span>
                  </label>
                );
              },
            },
            {
            name: "Action",
            cell: (row) => (
                <div className="action_icon_wrapper d-flex justify-content-center">
                <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                    <Link to={"/edit-plan"} state={row} >
                        <Button className="btn btn-icon btn-warning" variant="" ><i className="fe fe-edit"></i></Button>
                    </Link>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                    <Button className="btn btn-icon btn-danger" variant="" onClick={() => { dispatch(openModal({ componentName: 'DeletePlanSchema', data: row })) }}>
                        <i className="fa fa-trash text-light"></i>
                    </Button>
                </OverlayTrigger>
                </div>
            ),
        },
    ];

    const filteredData = data
    .filter((item) =>item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((item) =>item.duration.toLowerCase().includes(searchDuration.toLowerCase()))
    .filter((item) =>item.level.toLowerCase().includes(searchLevel.toLowerCase()))
    .filter((item) => (searchStatus !== "" ? item.status === searchStatus : true));
    
    const itemsPerPage = pageSize;
    const totalPages = Math.ceil(filteredData?.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);

    const displayPages = () => {
        const pageButtons = [];
        const delta = 2;
        const left = currentPage - delta;
        const right = currentPage + delta + 1;

        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= left && i < right)) {
                pageButtons.push(
                    <li key={i} className={currentPage === i ? "active" : ""}>
                        <Button className="btn btn-default" variant="default" onClick={() => paginate(i)}>
                            {i}
                        </Button>
                    </li>
                );
            } else if (i === left - 1 || i === right + 1) {
                pageButtons.push(<li key={i} className="ellipsis_pagination">......</li>);
            }
        }
        return pageButtons;
    };
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const handlePageSizeChange = (e) => {
        const newSize = parseInt(e.target.value, 10);
        setPageSize(newSize);
        setCurrentPage(1);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleSearchDuration = (e) => {
        setSearchDuration(e.target.value);
        setCurrentPage(1);
    };

    const handleSearchLevel = (e) => {
        setSearchLevel(e.target.value);
        setCurrentPage(1);
    };

    const handleSearchStatus = (e) => {
        const value = e.target.value;
        setSearchStatus(value === "" ? "" : value === "true");
        setCurrentPage(1);
    };

    return (
        <>
            <div className="e-table pb-5 table-responsive">
                <Row className="justify-content-end">
                    <Col as={Col} sm={3}>
                        <Form.Group className="m-3">
                            <Form.Control type="text" placeholder="Search By Title" value={searchTerm} onChange={handleSearch} />
                        </Form.Group>
                    </Col>
                    <Col as={Col} sm={3}>
                        <Form.Group className="m-3">
                            <Form.Control type="text" placeholder="Search By Duration" value={searchDuration} onChange={handleSearchDuration} />
                        </Form.Group>
                    </Col>
                    <Col as={Col} sm={3}>
                        <Form.Group className="m-3">
                            <Form.Control type="text" placeholder="Search By Level" value={searchLevel} onChange={handleSearchLevel} />
                        </Form.Group>
                    </Col>
                    <Col sm={3}>
                        <Form.Group className="m-3">
                            <Form.Select
                                value={searchStatus}
                                onChange={handleSearchStatus}
                                style={{ width: "8rem", fontSize: "12px" }}
                            >
                            <option value="">Search By Status</option>
                            <option value="true">Active</option>
                            <option value="false">Inactive</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <DataTable data={currentItems} columns={COLUMNS} striped />
                <div className="pagination_wrapper">
                    <ul className="pagination">
                        <li>
                            <Button className="btn btn-default" variant="default" onClick={prevPage}>
                                <i className="fa fa-angle-left"></i> Previous
                            </Button>
                        </li>
                        {displayPages()}
                        <li>
                            <Button className="btn btn-default" variant="default" onClick={nextPage}>
                                Next <i className="fa fa-angle-right"></i>
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
