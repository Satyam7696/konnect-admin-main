import React, { useState } from "react";
import { Button, Form, Row, Col, OverlayTrigger, Tooltip, } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/slices/allModalSlice";

export default function AllPaymentsDataTable() {
    const [serialNumber, setSerialNumber] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    const data = [
        {
            id: 1,
            name: "Payment 1",
            image: "https://img.freepik.com/free-vector/hand-drawn-receipt-book-template_23-2149890116.jpg?t=st=1736487087~exp=1736490687~hmac=47214ff948f1a29b5fc1b290c296b34e5b2f3ef05ca8ab099eaee03308b6238f&w=826",
            isPrimary: true,
        },
        {
            id: 2,
            name: "Payment 2",
            image: "https://img.freepik.com/free-vector/flat-design-receipt-book-template_23-2149826346.jpg?t=st=1736487295~exp=1736490895~hmac=022c56e83045c0b1461d91a8278aae7180f88686e4c78d7099dc9a076e9cd51f&w=826",
            isPrimary: false,
        },
    ];

    const COLUMNS = [
        {
            name: "#",
            selector: (row, index) => index + serialNumber,
            sortable: true,
        },
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Image",
            cell: (row) => (
                <img
                    src={row.image}
                    alt={row.name}
                    style={{ maxWidth: "50px", height: "auto", borderRadius: "5px" }}
                />
            ),
        },
        {
            name: "Set as Primary",
            cell: (row) => (
                <Form.Check
                    type="checkbox"
                    checked={row.isPrimary}
                    disabled
                />
            ),
        },
        {
            name: "Action",
            cell: (row) => (
                <div className="action_icon_wrapper d-flex justify-content-center">
                    <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
                        <Button className="btn btn-icon btn-primary" onClick={() => { dispatch(openModal({ componentName: 'ViewPayment', data: row })) }}><i className="fe fe-eye"></i></Button>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                        <Button className="btn btn-icon btn-warning" variant="" onClick={() => { dispatch(openModal({ componentName: 'EditPayment', data: row })) }}><i className="fe fe-edit"></i></Button>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                        <Button className="btn btn-icon btn-danger" variant="" onClick={() => { dispatch(openModal({ componentName: 'DeletePayment', data: row })) }}><i className="fa fa-trash text-light"></i></Button>
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
            } else if (i === left - 1 || i === right) {
                pageButtons.push(
                    <li key={i} className="ellipsis_pagination">...</li>
                );
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

    return (
        <div className="e-table pb-5 table-responsive">
            <Row className="justify-content-end">
                <Col sm={3}>
                    <Form.Group className="m-3">
                        <Form.Control
                            type="text"
                            placeholder="Search By Name"
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
    );
}
