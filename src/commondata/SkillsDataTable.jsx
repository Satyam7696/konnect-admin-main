import React, { useState } from "react";
import { Row, Col, Form, Button, OverlayTrigger, Tooltip, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import DataTable from "react-data-table-component";
import toast from "react-hot-toast";
import { openModal } from "../redux/slices/allModalSlice";

export default function SkillsDataTable() {
    const [serialNumber, setSerialNumber] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    const data = [
        {
            id: 1,
            name: "React Development",
            status: true,
        },
        {
            id: 2,
            name: "Backend Development",
            status: false,
        },
        {
            id: 3,
            name: "UI/UX Design",
            status: true,
        },
        {
            id: 4,
            name: "FULL STACK DEVELOPMENT",
            status: true,
        },
    ];

    const COLUMNS = [
        {
            name: "#",
            selector: (row, index) => index + serialNumber,
            sortable: true,
        },
        {
            name: "Skill Name",
            sortable: true,
            cell: (row) => row?.name,
        },
        {
            name: "Status",
            selector: (row) => row?.status,
            cell: (row) => {
                const [checked, setChecked] = useState(row?.status);
                const handleStatusChange = async () => {
                    try {
                        setChecked(!checked);
                        // Here, you can call an API to update the status
                        // Assuming a successful API response
                        toast.success(`Status updated for ${row?.name}`);
                    } catch (error) {
                        console.error(error);
                        toast.error("Failed to update status");
                    }
                };
                return (
                    <label className="custom-switch">
                        <input
                            type="checkbox"
                            className="custom-switch-input"
                            onChange={handleStatusChange}
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
                    <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
                        <Link to={"/view-skill"} state={row}>
                            <Button className="btn btn-icon btn-primary"><i className="fe fe-eye"></i></Button>
                        </Link>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                        <Link to={"/edit-skill"} state={row}>
                            <Button className="btn btn-icon btn-warning" variant=""><i className="fe fe-edit"></i></Button>
                        </Link>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                        <Button className="btn btn-icon btn-danger" variant="" onClick={() => { dispatch(openModal({ componentName: 'DeleteSkill', data: row })) }}><i className="fa fa-trash text-light"></i></Button>
                    </OverlayTrigger>
                </div>
            ),
        },
    ];

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const itemsPerPage = pageSize;
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

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

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handlePageSizeChange = (e) => {
        const newSize = parseInt(e.target.value, 10);
        setPageSize(newSize);
        setCurrentPage(1);
    };

    return (
        <>
            <div className="e-table pb-5 table-responsive">
                <Row className="justify-content-end">
                    <Col as={Col} sm={2}>
                        <Form.Group className="m-3">
                            <Form.Control
                                type="text"
                                placeholder="Search ..."
                                value={searchTerm}
                                onChange={handleSearch}
                            />
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
